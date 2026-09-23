import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./site-layout-sJ8_umK4.mjs";
import { i as img } from "./images-BZhBO7bo.mjs";
import { V as UsersRound, O as MapPin, e as Search, b as BadgeCheck, Y as Star, A as ArrowRight, T as Trophy, _ as ExternalLink } from "../_libs/lucide-react.mjs";
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
const pros = [{
  img: img.pro1,
  name: "Lagos Extrusion Hub",
  type: "Fabricator",
  rating: 4.9,
  reviews: 128,
  loc: "Lagos, NG",
  tags: ["Precision Extrusions", "Industrial Frames"]
}, {
  img: img.pro2,
  name: "Abuja Pro Installers",
  type: "Installers",
  rating: 4.8,
  reviews: 94,
  loc: "Abuja, NG",
  tags: ["Sliding Doors", "Glass Curtain Walls"]
}, {
  img: img.pro3,
  name: "Delta Metal Solutions",
  type: "Suppliers",
  rating: 4.7,
  reviews: 215,
  loc: "Asaba, NG",
  tags: ["Raw Ingots", "Custom Alloys"]
}];
const featured = [{
  img: img.pro4,
  badge: "PLATINUM PARTNER",
  name: "Elite Aluminium Fabrications",
  desc: "Specialize in luxury architectural window systems and commercial facades with over 15 years experience.",
  metric: "5.0",
  metricLabel: "Perfect Score (42 Reviews)"
}, {
  img: img.part2,
  badge: "FASTEST COMPLETION",
  name: "Swift Build & Install",
  desc: "Expertise in rapid deployment of commercial partitions and modular aluminium structures for fast-track projects.",
  metric: "4.9",
  metricLabel: "98% Success Rate"
}];
const filters = ["All", "Fabricators", "Suppliers", "Installers", "Specialized Services"];
function Directory() {
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl md:text-5xl font-bold tracking-tight", children: [
        "Verified Aluminium",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Professionals"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-muted-foreground", children: "Connect with Africa's leading fabricators, suppliers, and installation specialists. Every professional is vetted for quality and reliability." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col md:flex-row gap-3 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2 rounded-md border bg-card px-4 py-2.5 focus-within:ring-2 focus-within:ring-brand/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { className: "size-4 text-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Fabricators, Installers...", className: "bg-transparent outline-none text-sm flex-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2 rounded-md border bg-card px-4 py-2.5 focus-within:ring-2 focus-within:ring-brand/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-brand" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Location (e.g. Lagos, Abuja)", className: "bg-transparent outline-none text-sm flex-1" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-6 py-2.5 text-sm font-semibold hover:bg-brand/90 active:scale-[0.98] transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4" }),
          " Search"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveFilter(f), className: `px-4 py-1.5 rounded-full text-sm border transition ${activeFilter === f ? "bg-brand text-brand-foreground border-brand" : "bg-card hover:bg-secondary"}`, children: f }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: pros.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-xl border bg-card p-5 group hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-md overflow-hidden bg-secondary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.name, className: "size-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-semibold px-2 py-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-3" }),
            " Verified"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mt-4", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-brand font-medium mt-0.5", children: p.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3.5 fill-amber-500 text-amber-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: p.rating }),
            " (",
            p.reviews,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-3.5" }),
            " ",
            p.loc
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] rounded-md border bg-background px-2 py-0.5", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-5 w-full rounded-md border border-brand text-brand py-2 text-sm font-semibold hover:bg-brand hover:text-brand-foreground active:scale-[0.99] transition", children: "View Profile" })
      ] }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md border bg-card px-6 py-2.5 text-sm font-medium hover:bg-secondary active:scale-[0.99] transition", children: "Load More Professionals" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 border-t", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "Top-Rated Fabricators of the Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2 max-w-2xl", children: "Exceptional performance and customer satisfaction based on recent project data." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "hidden sm:inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline", children: [
          "View All ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid md:grid-cols-2 gap-6", children: featured.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card overflow-hidden md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:w-44 aspect-video md:aspect-auto shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: f.img, alt: f.name, className: "size-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider text-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "size-3.5" }),
            " ",
            f.badge
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mt-1.5", children: f.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: f.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "size-3.5 fill-amber-500 text-amber-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: f.metric }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: f.metricLabel })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "text-sm font-medium text-brand hover:underline inline-flex items-center gap-1", children: [
              "Connect ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-3.5" })
            ] })
          ] })
        ] })
      ] }, f.badge)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Are you a professional?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-primary-foreground/80 max-w-md", children: "Join Africa's most trusted aluminium professional network. Get verified, showcase your projects, and grow your business with high-quality leads." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/join", className: "inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:bg-brand/90 active:scale-[0.98] transition", children: [
            "Register Your Business ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "inline-flex items-center rounded-md bg-white/10 hover:bg-white/20 px-5 py-2.5 text-sm font-semibold backdrop-blur transition", children: "Learn More" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-white/10 backdrop-blur border border-white/20 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center size-10 rounded-full bg-white/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(UsersRound, { className: "size-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Join 500+" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-primary-foreground/70", children: "Active Members" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-white/15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-white/15 w-4/5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-white/15 w-3/5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-4" }),
          "Premium Directory Badge Included"
        ] })
      ] }) })
    ] }) })
  ] });
}
export {
  Directory as component
};
