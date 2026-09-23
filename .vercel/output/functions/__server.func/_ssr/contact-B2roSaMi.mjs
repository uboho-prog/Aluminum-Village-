import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./site-layout-sJ8_umK4.mjs";
import { i as img } from "./images-BZhBO7bo.mjs";
import { B as Building2, G as Wallet, W as Wrench, f as Send, b as BadgeCheck } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./logo-DOvfSOrI.mjs";
import "./auth-store-DPAAHcGi.mjs";
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Connect With Us" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-4xl md:text-5xl font-bold", children: "Get in Touch" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl", children: "Our specialised industrial consultants are ready to assist with technical procurement, logistics coordination, and global trade compliance." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-4", children: [{
        icon: Building2,
        title: "Headquarters",
        a: "Metals Trade Plaza, Level 42",
        b: "Industrial District, London, UK"
      }, {
        icon: Wallet,
        title: "Sales Inquiry",
        a: "+44 (0) 20 7946 0123",
        b: "sales@aluminiumvillage.com"
      }, {
        icon: Wrench,
        title: "Support Center",
        a: "+44 (0) 20 7946 0456",
        b: "support@aluminiumvillage.com"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-5 flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "size-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm", children: c.a }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: c.b })
        ] })
      ] }, c.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-xl overflow-hidden border aspect-[16/9]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.contactA, alt: "Operations", className: "size-full object-cover" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-24 rounded-2xl border bg-card p-6 md:p-8 shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Inquiry Specification" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "mt-6 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name", placeholder: "John Doe" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Corporate Email", placeholder: "you@company.com", type: "email" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Subject Area" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Sales & Bulk Procurement" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Technical Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Logistics & Supply Chain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "General Inquiry" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Detailed Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, placeholder: "Tell us about your project...", className: "mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full rounded-md bg-brand text-brand-foreground py-3 text-sm font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90", children: [
          "Transmit Message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-xl border bg-secondary/40 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-4" }),
          " REAL PERSON RESPONSE"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold", children: "Industrial speed, human accuracy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: '"A real person responds to every enquiry within 2 hours. Always."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-card border p-3 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold", children: "100%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Human Response" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-card border p-3 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold", children: "<120m" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Average Wait" })
          ] })
        ] })
      ] })
    ] }) })
  ] }) });
}
function Field({
  label,
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...rest, className: "mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm" })
  ] });
}
export {
  Contact as component
};
