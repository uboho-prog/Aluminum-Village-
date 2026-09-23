import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, f as useSearch, L as Link } from "../_libs/tanstack__react-router.mjs";
import { i as img } from "./images-BZhBO7bo.mjs";
import { l as logoUrl } from "./logo-DOvfSOrI.mjs";
import { s as setAuthUser } from "./auth-store-DPAAHcGi.mjs";
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
function Login() {
  const [remember, setRemember] = reactExports.useState(false);
  const [email, setEmail] = reactExports.useState("");
  const [password, setPassword] = reactExports.useState("");
  const navigate = useNavigate();
  const {
    redirect
  } = useSearch({
    from: "/login"
  });
  const handleSignIn = () => {
    const trimmed = email.trim();
    if (!trimmed) return;
    const name = trimmed.split("@")[0].split(/[._-]/)[0];
    const displayName = name ? name.charAt(0).toUpperCase() + name.slice(1) : "Member";
    setAuthUser({
      name: displayName,
      email: trimmed
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
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 text-foreground hover:text-brand transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-5 rounded-full border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 20 20", className: "size-3", fill: "currentColor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10", cy: "6", r: "3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 11c-3 0-6 1.5-6 4v1h12v-1c0-2.5-3-4-6-4z" })
          ] }) }),
          "Account"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 flex items-center justify-center px-4 sm:px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-6xl rounded-2xl bg-card shadow-xl border overflow-hidden grid lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden lg:block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.loginBg, alt: "Industrial aluminium fabrication facility", className: "absolute inset-0 size-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-10 text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold leading-tight", children: "Precision in Every Connection." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-primary-foreground/85 max-w-sm leading-relaxed", children: "Join the global marketplace for premium aluminium solutions and verified industrial suppliers." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 sm:px-10 py-10 sm:py-12 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-bold tracking-tight", children: "Welcome Back" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Sign in to access your cart and complete checkout." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "group inline-flex items-center justify-center gap-2 rounded-lg border bg-card py-2.5 text-sm font-semibold hover:bg-secondary hover:border-brand/30 transition active:scale-[0.99]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", className: "size-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#4285F4", d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#34A853", d: "M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#FBBC05", d: "M5.84 14.09A6.6 6.6 0 0 1 5.48 12c0-.73.13-1.43.36-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("path", { fill: "#EA4335", d: "M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" })
            ] }),
            "Google"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center justify-center gap-2 rounded-lg border bg-card py-2.5 text-sm font-semibold hover:bg-secondary hover:border-brand/30 transition active:scale-[0.99]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "size-4 text-brand" }),
            " Single Sign-On"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-semibold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" }),
          "Or login with email",
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 h-px bg-border" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
          e.preventDefault();
          handleSignIn();
        }, className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "text-sm font-medium", children: "Email Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "name@company.com", className: "mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "password", className: "text-sm font-medium", children: "Password" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forgot-password", className: "text-xs font-semibold text-brand hover:underline", children: "Forgot password?" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "password", type: "password", value: password, onChange: (e) => setPassword(e.target.value), placeholder: "••••••••", className: "mt-1.5 w-full rounded-lg border bg-card px-3.5 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2 text-sm cursor-pointer select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid place-items-center size-4 rounded border transition ${remember ? "bg-brand border-brand text-brand-foreground" : "bg-card border-input hover:border-brand/50"}`, children: remember && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 12 12", className: "size-3 stroke-current", fill: "none", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 6.5l2.5 2.5 4.5-5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "sr-only", checked: remember, onChange: (e) => setRemember(e.target.checked) }),
            "Keep me signed in for 30 days"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-lg bg-brand text-brand-foreground py-3 text-sm font-semibold shadow-md shadow-brand/20 hover:bg-brand/90 active:scale-[0.99] transition", children: "Sign In" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 h-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-sm text-muted-foreground", children: [
          "New to the village?",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "text-brand font-semibold hover:underline", children: "Create an account" })
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  Login as component
};
