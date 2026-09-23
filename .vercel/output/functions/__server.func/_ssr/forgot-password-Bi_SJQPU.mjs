import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { f as useSearch, L as Link } from "../_libs/tanstack__react-router.mjs";
import { l as logoUrl } from "./logo-DOvfSOrI.mjs";
import { a as CircleCheck, w as AtSign, S as ShieldCheck, $ as KeyRound, a0 as ArrowLeft } from "../_libs/lucide-react.mjs";
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
function ForgotPassword() {
  const {
    mode
  } = useSearch({
    from: "/forgot-password"
  });
  const isAdmin = mode === "admin";
  const [email, setEmail] = reactExports.useState("");
  const [sent, setSent] = reactExports.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };
  const accent = isAdmin ? "#0b50c4" : void 0;
  const backTo = isAdmin ? "/admin-login" : "/login";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-slate-100", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 flex flex-col items-center px-4 sm:px-6 pt-12 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoUrl, alt: "Aluminium Village", className: "h-14 w-14 object-contain mx-auto" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl font-serif font-bold text-slate-800 tracking-tight text-center", children: isAdmin ? "Admin Password Recovery" : "Forgot Your Password?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground text-center max-w-md", children: isAdmin ? "Enter your administrator email to receive a secure password reset link." : "No worries — enter your email and we'll send you instructions to reset it." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 w-full max-w-md rounded-2xl bg-card border shadow-xl p-8", children: [
      sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid place-items-center size-14 rounded-full bg-emerald-50 text-emerald-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-7" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-slate-800", children: "Check your inbox" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "We've sent a password reset link to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: email }),
          ". The link will expire in 30 minutes."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
          setSent(false);
          setEmail("");
        }, className: "text-sm font-semibold text-brand hover:underline", children: "Send to a different email" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm font-bold text-slate-700", children: isAdmin ? "Administrator Email" : "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AtSign, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", required: true, value: email, onChange: (e) => setEmail(e.target.value), placeholder: "name@company.com", className: "w-full rounded-lg border bg-background pl-9 pr-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "submit", style: accent ? {
          backgroundColor: accent
        } : void 0, className: `w-full inline-flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold tracking-wider shadow-md transition active:scale-[0.99] ${isAdmin ? "text-white hover:opacity-90" : "bg-brand text-brand-foreground hover:bg-brand/90"}`, children: [
          isAdmin ? "SEND SECURE RESET LINK" : "Send Reset Link",
          isAdmin ? /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(KeyRound, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 pt-5 border-t flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: backTo, className: "inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground hover:text-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "size-4" }),
        "Back to ",
        isAdmin ? "Admin Login" : "Sign In"
      ] }) })
    ] }),
    !isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-6 text-xs text-muted-foreground", children: [
      "Administrator?",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forgot-password", search: {
        mode: "admin"
      }, className: "text-brand font-semibold hover:underline", children: "Reset admin password" })
    ] })
  ] }) });
}
export {
  ForgotPassword as component
};
