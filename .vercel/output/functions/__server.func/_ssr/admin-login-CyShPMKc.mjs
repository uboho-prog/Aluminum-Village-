import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logoUrl } from "./logo-DOvfSOrI.mjs";
import { s as setAuthUser } from "./auth-store-DPAAHcGi.mjs";
import { w as AtSign, o as Lock, x as EyeOff, E as Eye, S as ShieldCheck, m as Shield } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function AdminLogin() {
  const [email, setEmail] = reactExports.useState("admin@aluminiumvillage.com");
  const [password, setPassword] = reactExports.useState("");
  const [show, setShow] = reactExports.useState(false);
  const [secure, setSecure] = reactExports.useState(false);
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setAuthUser({
      name: "Admin",
      email: email.trim()
    });
    navigate({
      to: "/admin"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 flex flex-col items-center px-4 sm:px-6 pt-12 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "Aluminium Village", className: "h-14 w-14 object-contain mx-auto" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl font-serif font-bold text-slate-800 tracking-tight", children: "Aluminium Village" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-xs font-bold tracking-[0.25em] text-slate-500", children: "ADMIN NERVE" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground text-center max-w-sm", children: "Secure administrator access to manage the platform, verify sellers, and oversee transactions." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 w-full max-w-md rounded-2xl bg-card border shadow-xl p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Administrator Email" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(AtSign, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), className: "w-full rounded-lg border bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: "Access Password" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forgot-password", search: {
            mode: "admin"
          }, className: "text-xs font-semibold text-brand hover:underline", children: "Forgot?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: show ? "text" : "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "••••••••••", className: "w-full rounded-lg border bg-background pl-9 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShow((s) => !s), className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: show ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-4" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm cursor-pointer select-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid place-items-center size-4 rounded border transition ${secure ? "bg-brand border-brand text-brand-foreground" : "bg-card border-input"}`, children: secure && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 12 12", className: "size-3 stroke-current", fill: "none", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 6.5l2.5 2.5 4.5-5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "sr-only", checked: secure, onChange: (e) => setSecure(e.target.checked) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-slate-700", children: "Secure Session (30 Days)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", className: "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#0b50c4] text-white py-3 text-sm font-bold tracking-wider shadow-md hover:bg-[#0a47ad] active:scale-[0.99] transition", children: [
        "AUTHORIZE ACCESS",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 border-t flex items-center justify-center gap-2 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "size-3.5" }),
        "256-bit AES Encrypted Connection"
      ] })
    ] }) })
  ] }) });
}
export {
  AdminLogin as component
};
