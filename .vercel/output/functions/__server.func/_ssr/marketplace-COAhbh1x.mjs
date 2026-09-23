import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./site-layout-sJ8_umK4.mjs";
import { i as img } from "./images-BZhBO7bo.mjs";
import { K as ChevronRight, a3 as Compass, a4 as DoorOpen, a5 as Grid3x3, a6 as Square, a7 as Frame, G as Wallet, b as BadgeCheck, a8 as Ruler, a9 as Layers, P as Package, t as ChevronLeft } from "../_libs/lucide-react.mjs";
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
const categories = [{
  id: "profiles",
  label: "Profiles & Extrusions",
  icon: Compass
}, {
  id: "doors",
  label: "Doors",
  icon: DoorOpen
}, {
  id: "gates",
  label: "Gates",
  icon: Grid3x3
}, {
  id: "windows",
  label: "Windows",
  icon: Square
}, {
  id: "railings",
  label: "Railings",
  icon: Frame
}];
const alloyGrades = ["6061-T6", "6063-T5", "5052-H32", "7075 Aircraft"];
const finishes = ["Mill Finish", "Anodized Silver", "Powder Coated"];
const items = [{
  img: img.prod1,
  badge: "IN STOCK",
  badgeTone: "emerald",
  grade: "6061-T6",
  wall: "3.2mm",
  finish: "Mill",
  qty: "Per Meter",
  price: "₦21,750",
  sub: "Excl. Tax"
}, {
  img: img.prod2,
  badge: "BEST SELLER",
  badgeTone: "brand",
  grade: "5052",
  wall: "2.5mm",
  finish: "Brushed",
  qty: "Per Pc",
  price: "₦123,000",
  sub: "Per 6m Length"
}, {
  img: img.prod3,
  badge: "",
  badgeTone: "",
  grade: "6063",
  wall: "1.5mm",
  finish: "Anodized",
  qty: "Per Meter",
  price: "₦16,875",
  sub: "Anodized Silver"
}];
function Marketplace() {
  const [activeCat, setActiveCat] = reactExports.useState("profiles");
  const [selectedGrades, setSelectedGrades] = reactExports.useState(["6061-T6", "6063-T5"]);
  const [selectedFinish, setSelectedFinish] = reactExports.useState(["Anodized Silver"]);
  const [wall, setWall] = reactExports.useState(2.5);
  const [cart, setCart] = reactExports.useState([]);
  const [page, setPage] = reactExports.useState(1);
  const toggle = (list, setList, value) => setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Home" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/marketplace", className: "hover:text-foreground", children: "Marketplace" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "Profiles" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid lg:grid-cols-[260px_1fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: categories.map((c) => {
          const Icon = c.icon;
          const active = activeCat === c.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveCat(c.id), className: `w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition ${active ? "bg-brand/10 text-brand" : "text-foreground hover:bg-secondary"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }),
              c.label
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 opacity-60" })
          ] }, c.id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t pt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-wider text-muted-foreground uppercase", children: "Filters" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
              setSelectedGrades([]);
              setSelectedFinish([]);
            }, className: "text-xs font-semibold text-brand hover:underline", children: "Clear" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Alloy Grade" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: alloyGrades.map((g) => {
              const checked = selectedGrades.includes(g);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2.5 text-sm cursor-pointer group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid place-items-center size-4 rounded border transition ${checked ? "bg-brand border-brand text-brand-foreground" : "bg-card border-input group-hover:border-brand/50"}`, children: checked && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 12 12", className: "size-3 stroke-current", fill: "none", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 6.5l2.5 2.5 4.5-5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "sr-only", checked, onChange: () => toggle(selectedGrades, setSelectedGrades, g) }),
                g
              ] }, g);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold mb-3", children: "Finish Type" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: finishes.map((f) => {
              const checked = selectedFinish.includes(f);
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2.5 text-sm cursor-pointer group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid place-items-center size-4 rounded border transition ${checked ? "bg-brand border-brand text-brand-foreground" : "bg-card border-input group-hover:border-brand/50"}`, children: checked && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 12 12", className: "size-3 stroke-current", fill: "none", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.5 6.5l2.5 2.5 4.5-5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "sr-only", checked, onChange: () => toggle(selectedFinish, setSelectedFinish, f) }),
                f
              ] }, f);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Wall Thickness" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-baseline gap-0.5 rounded-md bg-brand/10 text-brand px-2 py-0.5 font-mono text-xs font-bold tabular-nums", children: [
                wall.toFixed(1),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] opacity-70", children: "mm" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-card p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-6 mb-1.5", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 flex justify-between", children: Array.from({
                length: 101
              }).map((_, i) => {
                const major = i % 10 === 0;
                const mid = i % 5 === 0;
                const active = i / 10 <= wall;
                return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-px ${major ? "h-5" : mid ? "h-3" : "h-1.5"} ${active ? "bg-brand" : "bg-muted-foreground/30"}` }, i);
              }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: 0, max: 10, step: 0.1, value: wall, onChange: (e) => setWall(parseFloat(e.target.value)), className: "w-full h-1.5 appearance-none rounded-full bg-secondary accent-brand cursor-pointer\n                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4\n                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand\n                      [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background\n                      [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition\n                      hover:[&::-webkit-slider-thumb]:scale-110\n                      [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full\n                      [&::-moz-range-thumb]:bg-brand [&::-moz-range-thumb]:border-2\n                      [&::-moz-range-thumb]:border-background [&::-moz-range-thumb]:shadow-md" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex justify-between text-[10px] font-mono text-muted-foreground tabular-nums", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "0.0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "2.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "5.0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "7.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "10.0" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setWall((w) => Math.max(0, +(w - 0.1).toFixed(1))), className: "grid place-items-center size-7 rounded-md border bg-card hover:bg-secondary active:scale-95 transition text-sm font-bold", "aria-label": "Decrease 0.1mm", children: "−" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", min: 0, max: 10, step: 0.1, value: wall.toFixed(1), onChange: (e) => {
                  const v = parseFloat(e.target.value);
                  if (!isNaN(v)) setWall(Math.min(10, Math.max(0, v)));
                }, className: "flex-1 h-7 rounded-md border bg-card px-2 text-xs font-mono font-semibold text-center tabular-nums focus:outline-none focus:ring-2 focus:ring-brand/30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setWall((w) => Math.min(10, +(w + 0.1).toFixed(1))), className: "grid place-items-center size-7 rounded-md border bg-card hover:bg-secondary active:scale-95 transition text-sm font-bold", "aria-label": "Increase 0.1mm", children: "+" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground px-4 py-2.5 text-sm font-semibold hover:bg-brand/90 active:scale-[0.99] transition", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "size-4" }),
          " Request Quote"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-sm text-muted-foreground", children: "Sort:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "appearance-none rounded-md border bg-card pl-3 pr-9 py-2 text-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-brand/30", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Recommended" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Price: Low to High" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Price: High to Low" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Newest First" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4 absolute right-2 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none text-muted-foreground" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-5", children: items.map((p, i) => {
          const inCart = cart.includes(i);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-xl border bg-card overflow-hidden flex flex-col group hover:shadow-lg hover:-translate-y-0.5 transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square bg-secondary overflow-hidden", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: "", className: "size-full object-cover group-hover:scale-[1.03] transition-transform duration-500" }),
              p.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `absolute top-3 left-3 rounded-md text-[10px] font-bold tracking-wider px-2.5 py-1 ${p.badgeTone === "brand" ? "bg-brand text-brand-foreground" : "bg-emerald-500 text-white"}`, children: p.badge })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border bg-secondary/40 p-3 grid grid-cols-2 gap-2 text-[11px]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: BadgeCheck, k: "Grade", v: p.grade }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: Ruler, k: "Wall", v: p.wall }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: Layers, k: "Finish", v: p.finish }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Spec, { icon: Package, k: "Qty", v: p.qty })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-end justify-between gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold leading-none", children: p.price }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground mt-1", children: p.sub })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setCart((c) => c.includes(i) ? c.filter((x) => x !== i) : [...c, i]), className: `rounded-md px-4 py-2 text-sm font-semibold active:scale-[0.98] transition ${inCart ? "bg-emerald-600 text-white hover:bg-emerald-700" : "bg-brand text-brand-foreground hover:bg-brand/90"}`, children: inCart ? "Added ✓" : "Add to Cart" })
              ] })
            ] })
          ] }, i);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center justify-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.max(1, p - 1)), className: "grid place-items-center size-9 rounded-md border bg-card hover:bg-secondary disabled:opacity-40 active:scale-95 transition", disabled: page === 1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-4" }) }),
          [1, 2, 3].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage(n), className: `size-9 rounded-md text-sm font-medium transition active:scale-95 ${page === n ? "bg-brand text-brand-foreground" : "border bg-card hover:bg-secondary"}`, children: n }, n)),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 text-muted-foreground", children: "..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage(21), className: `size-9 rounded-md text-sm font-medium transition active:scale-95 ${page === 21 ? "bg-brand text-brand-foreground" : "border bg-card hover:bg-secondary"}`, children: "21" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPage((p) => Math.min(21, p + 1)), className: "grid place-items-center size-9 rounded-md border bg-card hover:bg-secondary active:scale-95 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4" }) })
        ] })
      ] })
    ] })
  ] }) });
}
function Spec({
  icon: Icon,
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-3.5 text-muted-foreground shrink-0" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
      k,
      ":"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold truncate", children: v })
  ] });
}
export {
  Marketplace as component
};
