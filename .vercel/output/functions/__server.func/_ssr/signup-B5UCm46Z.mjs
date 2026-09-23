import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, f as useSearch, L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logoUrl } from "./logo-DOvfSOrI.mjs";
import { s as setAuthUser } from "./auth-store-DPAAHcGi.mjs";
import { i as img } from "./images-BZhBO7bo.mjs";
import { B as Building2 } from "../_libs/lucide-react.mjs";
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
function Signup() {
  const [name, setName] = reactExports.useState("");
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const [confirm, setConfirm] = reactExports.useState("");
  const [agree, setAgree] = reactExports.useState(false);
  const navigate = useNavigate();
  const {
    redirect
  } = useSearch({
    from: "/signup"
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() || !name.trim() || !password || password !== confirm || !agree) return;
    setAuthUser({
      name: name.trim(),
      email: email.trim()
    });
    navigate({
      to: redirect || "/"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-secondary/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "bg-card border-b", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "Aluminium Village", className: "h-9 w-9 object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-6 text-sm font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "text-muted-foreground hover:text-foreground transition", children: "About" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-foreground hover:text-brand transition", children: "Sign in" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center px-4 sm:px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-6xl rounded-2xl bg-card shadow-xl border overflow-hidden grid lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden lg:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.loginBg, alt: "Aluminium fabrication", className: "absolute inset-0 size-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-10 text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold leading-tight", children: "Join the Village." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-primary-foreground/85 max-w-sm leading-relaxed", children: "Create an account to shop verified aluminium products, track orders, and complete checkout in seconds." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 sm:px-10 py-10 sm:py-12 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Create your account" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
          "It only takes a minute. Already a member?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "text-brand font-semibold hover:underline", children: "Sign in" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "mt-7 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Full Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Jane Doe", className: "mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "name@company.com", className: "mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "••••••••", className: "mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-medium", children: "Confirm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "password", value: confirm, onChange: (e) => setConfirm(e.target.value), placeholder: "••••••••", className: "mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2 text-sm cursor-pointer select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", checked: agree, onChange: (e) => setAgree(e.target.checked), className: "mt-1 size-4 rounded border-input" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
              "I agree to the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand font-semibold", children: "Terms" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand font-semibold", children: "Privacy Policy" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-lg bg-brand text-brand-foreground py-3 text-sm font-semibold shadow-md shadow-brand/20 hover:bg-brand/90 active:scale-[0.99] transition", children: "Create Account" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 h-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
          "Selling aluminium products?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/join", className: "text-brand font-semibold hover:underline inline-flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "size-3.5" }),
            " Join as a professional"
          ] })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  Signup as component
};
