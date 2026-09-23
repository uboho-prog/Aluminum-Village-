import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./site-layout-sJ8_umK4.mjs";
import { K as ChevronRight, c as Check, P as Package, b as BadgeCheck, aa as Truck, J as ClipboardList, ab as Radio, ac as Phone, ad as Download, ae as MessageSquare, _ as ExternalLink } from "../_libs/lucide-react.mjs";
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
const steps = [{
  key: "confirmed",
  label: "Order Confirmed",
  icon: Check
}, {
  key: "prep",
  label: "Material Preparation",
  icon: Package
}, {
  key: "qc",
  label: "Quality Inspection",
  icon: BadgeCheck
}, {
  key: "transit",
  label: "In Transit",
  icon: Truck
}, {
  key: "delivered",
  label: "Delivered",
  icon: ClipboardList
}];
function Tracking() {
  const currentStep = 3;
  const [pulse, setPulse] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => setPulse((p) => (p + 1) % 100), 50);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Orders" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Tracking #ALV-9821" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl sm:text-4xl font-bold tracking-tight", children: "Order #ALV-9821 Tracking" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-muted-foreground", children: "Premium Grade Industrial Shipment in Transit" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid lg:grid-cols-[1fr_360px] gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border bg-card p-6 sm:p-8 shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 right-6 top-6 h-0.5 bg-border" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-6 top-6 h-0.5 bg-brand transition-all", style: {
            width: `calc((100% - 3rem) * ${currentStep / (steps.length - 1)})`
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "relative grid grid-cols-5 gap-2", children: steps.map((s, i) => {
            const Icon = s.icon;
            const done = i < currentStep;
            const active = i === currentStep;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col items-center text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid place-items-center size-12 rounded-full border-2 transition ${done ? "bg-brand border-brand text-brand-foreground" : active ? "bg-brand border-brand text-brand-foreground shadow-lg shadow-brand/40 ring-4 ring-brand/20 animate-pulse" : "bg-card border-border text-muted-foreground"}`, children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-2.5 text-xs sm:text-sm font-medium leading-tight ${active ? "text-brand font-semibold" : done ? "text-foreground" : "text-muted-foreground"}`, children: s.label })
            ] }, s.key);
          }) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl bg-brand text-brand-foreground p-6 sm:p-7 shadow-lg shadow-brand/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,_white,_transparent_60%)]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center size-12 rounded-xl bg-white/15 backdrop-blur shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "size-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg font-semibold", children: "Live Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-brand-foreground/90 max-w-md", children: "Your shipment is currently in transit near Lagos Central Hub." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-white/15 backdrop-blur px-4 py-2.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider opacity-80 font-semibold", children: "Estimated Delivery" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-base font-bold", children: "Oct 28, 2026" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 rounded-lg bg-primary/40 hover:bg-primary/60 backdrop-blur px-4 py-2.5 text-sm font-semibold transition active:scale-[0.98]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-4" }),
                  " Verified Route"
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-2xl border bg-secondary aspect-[16/9] shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-40", style: {
            backgroundImage: "linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            transform: "perspective(800px) rotateX(45deg) scale(1.4)",
            transformOrigin: "center 70%"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 size-full", viewBox: "0 0 800 450", preserveAspectRatio: "none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "routeGrad", x1: "0", y1: "1", x2: "1", y2: "0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "hsl(var(--brand) / 0.1)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "60%", stopColor: "hsl(var(--brand))" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "white" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 60 380 Q 280 320, 420 240 T 740 80", fill: "none", stroke: "url(#routeGrad)", strokeWidth: "4", strokeLinecap: "round", strokeDasharray: "6 8", strokeDashoffset: -pulse }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 60 380 Q 280 320, 420 240 T 740 80", fill: "none", stroke: "white", strokeWidth: "1", strokeLinecap: "round", opacity: "0.6" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(740 80)", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("circle", { r: "14", fill: "white", opacity: ".25", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("animate", { attributeName: "r", values: "10;22;10", dur: "2s", repeatCount: "indefinite" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("animate", { attributeName: "opacity", values: ".4;0;.4", dur: "2s", repeatCount: "indefinite" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "6", fill: "white" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { r: "3", fill: "hsl(var(--brand))" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-sm rounded-xl bg-card/90 backdrop-blur border shadow-md px-4 py-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative grid place-items-center size-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 rounded-full bg-brand/40 animate-ping" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative size-2 rounded-full bg-brand" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Currently: Lagos–Ibadan Expressway" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground pl-5", children: "Last ping: 2 minutes ago via Satellite Link" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-brand", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, { className: "size-4" }),
            "Logistics Partner"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3 rounded-xl border bg-secondary/40 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center size-11 rounded-full bg-primary text-primary-foreground font-bold text-sm", children: "HL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm leading-tight", children: "Haulsworth Logistics" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Heavy Cargo Specialist" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Dedicated Driver" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-11 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 grid place-items-center text-white font-bold text-sm shrink-0", children: "SO" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold leading-tight", children: "Samuel O." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 text-[11px] text-brand", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-3" }),
                " Verified Specialist"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 rounded-md bg-brand text-brand-foreground px-3 py-2 text-xs font-semibold hover:opacity-90 active:scale-[0.98] transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "size-3.5" }),
              " Contact"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-brand", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "size-4" }),
            "Cargo Manifest"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start justify-between gap-3 pb-3 border-b", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Extruded 6061-T6 Aluminium Pipe" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: 'Size: 4.5" Diameter · Length: 12ft' })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-md bg-brand/10 text-brand text-[11px] font-bold px-2 py-1", children: "25 units" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start justify-between gap-3 pb-3 border-b", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Brushed Finish Panels" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "5052-H32 · 4ft x 8ft" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-md bg-brand/10 text-brand text-[11px] font-bold px-2 py-1", children: "10 panels" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-muted-foreground", children: "Total Weight" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-bold tabular-nums", children: "1,240 kg" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full inline-flex items-center justify-center gap-2 rounded-lg border bg-card hover:bg-secondary px-4 py-2.5 text-sm font-semibold active:scale-[0.99] transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
              " Download Waybill"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand text-brand-foreground hover:opacity-90 px-4 py-2.5 text-sm font-semibold active:scale-[0.99] transition", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "size-4" }),
              " Share Your Experience"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border-2 border-dashed bg-card/50 p-5 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Facing issues with your delivery or noticed a discrepancy?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline", children: [
            "Open Support Ticket ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-3.5" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  Tracking as component
};
