// CDP-based smoke test for the three admin suite logins + dashboards.
// Raw CDP over Node 22's global WebSocket — no extra dependencies.
//
// Usage:  node scripts/admin-smoke.mjs [baseUrl]     (default http://127.0.0.1:8080)
// Requires a dev server on baseUrl and Google Chrome on PATH.
// Screenshots are written to admin-smoke-shots/.
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE = process.argv[2] || "http://127.0.0.1:8080";
const CDP_PORT = 9223;
const SHOTS = "admin-smoke-shots";
const PASSWORD = "av-admin-2026";

const SUITES = [
  {
    key: "business",
    label: "Business Suite",
    email: "admin@business.aluminiumvillage.com",
    // Which /admin sections each suite may open (mirror of ADMIN_NAV_ACCESS).
    expect: { users: false, sellers: true, deals: true, analytics: true, settings: false },
  },
  {
    key: "individual",
    label: "Individual Suite",
    email: "admin@individual.aluminiumvillage.com",
    expect: { users: true, sellers: false, deals: false, analytics: true, settings: false },
  },
  {
    key: "overall",
    label: "Overall Admin",
    email: "admin@aluminiumvillage.com",
    expect: { users: true, sellers: true, deals: true, analytics: true, settings: true },
  },
];

const results = [];
function record(name, ok, detail = "") {
  results.push({ name, ok });
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${detail ? ` — ${detail}` : ""}`);
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// --- minimal CDP client ----------------------------------------------------
class Cdp {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.addEventListener("message", (ev) => {
      const msg = JSON.parse(ev.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result);
      }
    });
  }
  send(method, params = {}, sessionId) {
    const id = ++this.id;
    this.ws.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }
}

const consoleIssues = [];
let step = "startup";

async function launchChrome() {
  const chrome = spawn(
    process.env.CHROME || "google-chrome",
    [
      "--headless=new",
      `--remote-debugging-port=${CDP_PORT}`,
      `--user-data-dir=/tmp/cdp-av-${process.pid}`,
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-gpu",
      "--window-size=1440,900",
      "about:blank",
    ],
    { stdio: "ignore" },
  );
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${CDP_PORT}/json/version`);
      const info = await res.json();
      return { chrome, wsUrl: info.webSocketDebuggerUrl };
    } catch {
      await sleep(200);
    }
  }
  chrome.kill();
  throw new Error("Chrome debug endpoint never came up");
}

async function main() {
  mkdirSync(SHOTS, { recursive: true });
  const { chrome, wsUrl } = await launchChrome();
  const ws = new WebSocket(wsUrl);
  await new Promise((res, rej) => {
    ws.addEventListener("open", res);
    ws.addEventListener("error", rej);
  });
  const cdp = new Cdp(ws);

  const { targetId } = await cdp.send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await cdp.send("Target.attachToTarget", { targetId, flatten: true });
  const s = (m, p) => cdp.send(m, p, sessionId);

  await s("Page.enable");
  await s("Runtime.enable");
  ws.addEventListener("message", (ev) => {
    const msg = JSON.parse(ev.data);
    if (msg.sessionId !== sessionId) return;
    if (msg.method === "Runtime.exceptionThrown") {
      const d = msg.params.exceptionDetails;
      consoleIssues.push(`[${step}] exception: ${d.exception?.description || d.text}`);
    } else if (msg.method === "Runtime.consoleAPICalled" && msg.params.type === "error") {
      const text = msg.params.args.map((a) => a.value ?? a.description ?? "").join(" ");
      if (!/favicon|Download the React DevTools/i.test(text)) {
        consoleIssues.push(`[${step}] console.error: ${text.slice(0, 300)}`);
      }
    }
  });

  const evalJs = async (body) => {
    const r = await s("Runtime.evaluate", {
      expression: `(async () => { ${body} })()`,
      awaitPromise: true,
      returnByValue: true,
    });
    if (r.exceptionDetails)
      throw new Error(r.exceptionDetails.exception?.description || "eval failed");
    return r.result?.value;
  };
  // Like evalJs but survives navigation-context destruction (returns null).
  const safeEval = async (body) => {
    try {
      return await evalJs(body);
    } catch {
      return null;
    }
  };
  const goto = (url) => s("Page.navigate", { url });
  const waitFor = async (expr, timeout = 15000) => {
    const end = Date.now() + timeout;
    while (Date.now() < end) {
      if (await safeEval(expr)) return true;
      await sleep(200);
    }
    return false;
  };
  const path = () => evalJs(`return location.pathname`).catch(() => "(context lost)");
  const shot = async (name) => {
    const r = await s("Page.captureScreenshot", { format: "png", captureBeyondViewport: true });
    writeFileSync(join(SHOTS, `${name}.png`), Buffer.from(r.data, "base64"));
  };
  const visualAudit = async (name) => {
    return evalJs(`
      const overflow = document.documentElement.scrollWidth - window.innerWidth;
      const imgs = [...(document.images || [])];
      const brokenImg = imgs.filter(i => i.complete && i.naturalWidth === 0).length;
      return { overflow, brokenImg };
    `)
      .then(({ overflow, brokenImg }) => {
        record(
          `${name}: no horizontal overflow`,
          overflow <= 2,
          `scrollWidth-innerWidth=${overflow}px`,
        );
        record(`${name}: no broken images`, brokenImg === 0, `${brokenImg} broken`);
      })
      .catch(() => record(`${name}: visual audit ran`, false, "page context lost"));
  };

  // The login pages are SSR'd: submitting before React hydration attaches
  // onSubmit triggers a native GET navigation (page reload) and the sign-in
  // silently never happens. Hydration probe: submit the EMPTY form — the
  // hydrated app shows its validation error instead of reloading.
  const waitLoginHydrated = async (loginPath) => {
    for (let attempt = 0; attempt < 12; attempt++) {
      await goto(`${BASE}${loginPath}`);
      await waitFor(
        `return document.readyState === "complete" && !!document.querySelector("input[type=email]") && !!document.body`,
      );
      await sleep(300 + attempt * 200);
      const hydrated = await safeEval(`
        return new Promise((resolve) => {
          const form = document.querySelector("form");
          if (!form) return resolve(false);
          form.requestSubmit();
          setTimeout(() => {
            resolve(!!(document.body && document.body.innerText.includes("Enter your email and password.")));
          }, 700);
        })
      `);
      if (hydrated) return true;
      // Not hydrated: the native submit reloaded the page — try again.
    }
    return false;
  };

  const fillAndSubmit = async (email, password) => {
    return safeEval(`
      const set = (el, v) => {
        const proto = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value");
        proto.set.call(el, v);
        el.dispatchEvent(new Event("input", { bubbles: true }));
      };
      const em = document.querySelector("input[type=email]");
      const pw = document.querySelector("input[type=password]");
      if (!em || !pw || !em.form) return false;
      set(em, ${JSON.stringify(email)});
      set(pw, ${JSON.stringify(password)});
      em.form.requestSubmit();
      return true
    `);
  };

  // ---- 0. Unauthenticated /admin must bounce to the suite sign-in --------
  step = "guard-anon";
  await goto(`${BASE}/admin`);
  record(
    "anon /admin redirects to suite login",
    await waitFor(`return location.pathname === "/admin/login/business"`, 10000),
    `landed on ${await path()}`,
  );

  // ---- 1-3. Each suite: login page -> sign in -> dashboard -> guards -----
  for (const suite of SUITES) {
    const k = suite.key;
    step = `login-${k}`;
    const loginPath = `/admin/login/${k}`;

    record(
      `${k}: login page renders (200 route, not redirect trap)`,
      (await waitLoginHydrated(loginPath)) &&
        (await safeEval(
          `return (document.body||{innerText:""}).innerText.includes("${suite.label}")`,
        )),
    );

    // Wrong-domain email must be rejected (server-side check).
    await fillAndSubmit("someone@gmail.com", PASSWORD);
    record(
      `${k}: cross-domain email rejected`,
      await waitFor(
        `return (document.body||{innerText:""}).innerText.includes("Use your ${suite.label} address")`,
        8000,
      ),
    );

    // Right-domain email but wrong password must also be rejected.
    await fillAndSubmit(suite.email, "wrong-password-123");
    record(
      `${k}: wrong password rejected`,
      await waitFor(
        `return (document.body||{innerText:""}).innerText.includes("Incorrect access password.")`,
        8000,
      ),
    );

    // Now the real sign-in.
    await fillAndSubmit(suite.email, PASSWORD);
    record(
      `${k}: sign-in lands on /admin`,
      await waitFor(`return location.pathname === "/admin"`, 15000),
      `at ${await path()}`,
    );
    await sleep(500); // let the dashboard finish mounting
    await shot(`dashboard-${k}`);
    await visualAudit(`dashboard-${k}`);

    record(
      `${k}: dashboard header names the suite`,
      (await safeEval(
        `return document.querySelector("h1")?.textContent.includes("${suite.label}") === true`,
      )) === true,
    );

    // Sidebar + dashboard content matrix.
    const bodyHas = (t) =>
      safeEval(`return (document.body||{innerText:""}).innerText.includes("${t}")`);
    for (const [section, expected] of Object.entries(suite.expect)) {
      const label = {
        users: "Users",
        sellers: "Sellers",
        deals: "Deals",
        analytics: "Analytics",
        settings: "Settings",
      }[section];
      const visible = await bodyHas(label);
      record(
        `${k}: ${section} section ${expected ? "visible" : "hidden"}`,
        visible === expected,
        `got ${visible}`,
      );
    }
    if (suite.expect.deals) {
      record(`${k}: Recent Deals table shown`, await bodyHas("Recent Deals"));
      record(`${k}: Payment Generator shown`, await bodyHas("PAYMENT GENERATOR"));
    } else {
      record(`${k}: Recent Customers panel instead of deals`, await bodyHas("Recent Customers"));
      record(`${k}: Payment Generator hidden`, !(await bodyHas("PAYMENT GENERATOR")));
    }

    // Guard: a section this suite cannot open bounces back to /admin.
    const forbidden = Object.entries(suite.expect).find(([, ok]) => !ok)?.[0];
    if (forbidden) {
      step = `guard-${k}`;
      await goto(`${BASE}/admin/${forbidden}`);
      await waitFor(`return location.pathname === "/admin"`, 10000).catch(() => {});
      record(
        `${k}: /admin/${forbidden} bounces back to /admin`,
        await waitFor(
          `return location.pathname === "/admin" && !!document.querySelector("h1")`,
          10000,
        ),
        `landed on ${await path()}`,
      );
    }

    // Sign out via the sidebar button so the next suite starts clean.
    await goto(`${BASE}/admin`);
    step = `logout-${k}`;
    // Hard navigation = fresh SSR page; wait for React to mount the layout
    // (first paint is intentionally empty until hydration completes).
    const signOutPresent = await waitFor(
      `return [...document.querySelectorAll("button")].some(b => b.textContent.includes("Sign Out"))`,
      15000,
    );
    if (signOutPresent) {
      await safeEval(`
        const btn = [...document.querySelectorAll("button")].find(b => b.textContent.includes("Sign Out"));
        btn?.click();
        return true
      `);
    }
    record(
      `${k}: sign out returns to suite login`,
      signOutPresent &&
        (await waitFor(`return location.pathname.startsWith("/admin/login")`, 10000)),
      `at ${await path()}`,
    );
  }

  // ---- 4. Overall-only settings page actually loads ----------------------
  step = "settings-overall";
  await waitLoginHydrated("/admin/login/overall");
  await fillAndSubmit("admin@aluminiumvillage.com", PASSWORD);
  await waitFor(`return location.pathname === "/admin"`, 15000);
  await goto(`${BASE}/admin/settings`);
  record(
    "overall: /admin/settings opens with tabs",
    await waitFor(
      `return location.pathname === "/admin/settings" && (document.body||{innerText:""}).innerText.includes("PLATFORM SETTINGS")`,
    ),
  );
  await shot("settings-overall");

  ws.close();
  chrome.kill();

  // ---- Summary ------------------------------------------------------------
  const failed = results.filter((r) => !r.ok).length;
  console.log(
    `\n${results.length - failed}/${results.length} checks passed. Screenshots in ${SHOTS}/`,
  );
  if (consoleIssues.length) {
    console.log(`\n${consoleIssues.length} browser console issue(s):`);
    for (const c of consoleIssues) console.log("  " + c);
  } else {
    console.log("No browser console errors.");
  }
  process.exit(failed ? 1 : 0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
