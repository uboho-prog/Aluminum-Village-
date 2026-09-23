import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./site-layout-sJ8_umK4.mjs";
import { i as img } from "./images-BZhBO7bo.mjs";
import { F as Factory, H as HardHat, B as Building2, A as ArrowRight, C as CirclePlay, a as CircleCheck, S as ShieldCheck, b as BadgeCheck, W as Wrench, c as Check, d as ShoppingCart, e as Search } from "../_libs/lucide-react.mjs";
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
const products = [{
  tag: "Standard Grade",
  title: "Aluminium Partitions",
  price: "₦45,000 / unit",
  img: img.part1
}, {
  tag: "Heavy Duty",
  title: "Aluminium Partitions",
  price: "₦120,000 / set",
  img: img.part2
}, {
  tag: "T-Slot Profile",
  title: "Aluminium Partitions",
  price: "₦12,500 / m",
  img: img.part3
}, {
  tag: "Architectural",
  title: "Aluminium Partitions",
  price: "₦85,000 / bay",
  img: img.prod3
}, {
  tag: "Office Series",
  title: "Aluminium Partitions",
  price: "₦65,000 / m²",
  img: img.prod1
}];
const pros = [{
  icon: Factory,
  name: "Lagos Extrusion Hub",
  description: "Connect with thousands of verified aluminium professionals across Nigeria. From expert fabricators to bulk suppliers.",
  rating: "4.9",
  reviews: 120,
  location: "Lagos, Ikeja",
  type: "Verified Supplier",
  category: "Supplier"
}, {
  icon: HardHat,
  name: "Abuja Pro Installers",
  description: "Connect with thousands of verified aluminium professionals across Nigeria. From expert fabricators to bulk suppliers.",
  rating: "4.7",
  reviews: 88,
  location: "Abuja, Garki",
  type: "Certified Installer",
  category: "Installer"
}, {
  icon: Building2,
  name: "Port Harcourt Fabricators",
  description: "Connect with thousands of verified aluminium professionals across Nigeria. From expert fabricators to bulk suppliers.",
  rating: "4.8",
  reviews: 64,
  location: "Port Harcourt, GRA",
  type: "Verified Fabricator",
  category: "Fabricator"
}];
const filters = ["All", "Fabricator", "Supplier", "Installer"];
function Home() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = reactExports.useState("All");
  const [search, setSearch] = reactExports.useState("");
  const [cart, setCart] = reactExports.useState({});
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    requirement: "Bulk Material Purchase"
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const visiblePros = pros.filter((p) => {
    const matchesFilter = activeFilter === "All" || p.category === activeFilter;
    const q = search.trim().toLowerCase();
    const matchesQuery = !q || p.name.toLowerCase().includes(q) || p.location.toLowerCase().includes(q) || p.type.toLowerCase().includes(q);
    return matchesFilter && matchesQuery;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[460px] md:h-[560px] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.hero, alt: "Aluminium extrusion warehouse", className: "absolute inset-0 size-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl h-full px-4 sm:px-6 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full bg-accent/15 border border-accent/30 text-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider", children: "Nigeria's No. 1 Verified Network" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 text-4xl md:text-5xl font-bold tracking-tight leading-tight text-foreground", children: [
          "Nigeria's first verified platform for",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "Aluminium products" }),
          " and installations"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base text-muted-foreground max-w-md", children: "Source certified extrusions, sheets, and coils, or get connected to top-rated local fabricators and installers." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/marketplace", className: "inline-flex items-center gap-2 rounded-md bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90 transition-opacity", children: [
            "Browse Equipment ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/directory", className: "inline-flex items-center gap-2 rounded-md border bg-card/90 backdrop-blur px-5 py-3 text-sm font-semibold hover:bg-card", children: "Explore" })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-6 md:p-10 grid lg:grid-cols-2 gap-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-video rounded-xl overflow-hidden bg-secondary group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img.aboutA, alt: "Fabrication process", className: "size-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Play fabrication video", className: "absolute inset-0 grid place-items-center bg-black/40 group-hover:bg-black/30 transition-colors text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "size-16 drop-shadow-lg" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "Fabrication Excellence" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Our state-of-the-art facilities leverage precision engineering to transform raw aluminium extrusions into architectural masterpieces. Every cut, weld, and finish is executed with surgical accuracy to ensure structural integrity and aesthetic appeal." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: ["ISO-Certified Quality Management", "Advanced CNC Machining & Routing", "Premium Anodized and Powder-Coated Finishes"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-5 text-accent shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
          ] }, t)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 md:grid-cols-4 gap-4", children: [{
        icon: ShieldCheck,
        label: "Escrow-Protected Payments"
      }, {
        icon: BadgeCheck,
        label: "100% Money-Back Guarantee"
      }, {
        icon: Factory,
        label: "Verified Nigerian Sellers"
      }, {
        icon: Wrench,
        label: "Certified Installers"
      }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs md:text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "size-4 text-accent shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.label })
      ] }, f.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/50 border-y", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "Equipment Marketplace" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "A comprehensive range of aluminium solutions: Doors, Windows, Railings, Partitions, and Accessories." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/marketplace", className: "inline-flex items-center gap-1 text-sm font-medium text-brand hover:underline", children: [
          "View all products ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "size-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: products.map((p) => {
        const inCart = !!cart[p.title + p.tag];
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { onClick: () => navigate({
          to: "/marketplace"
        }), className: "group cursor-pointer rounded-xl border bg-card overflow-hidden flex flex-col hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square overflow-hidden bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.title, className: "size-full object-cover group-hover:scale-105 transition-transform duration-500" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3 flex-1 flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-wider text-muted-foreground font-semibold", children: p.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-bold text-brand", children: p.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: (e) => {
              e.stopPropagation();
              setCart((c) => ({
                ...c,
                [p.title + p.tag]: !c[p.title + p.tag]
              }));
            }, className: `mt-3 inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-semibold transition-colors ${inCart ? "bg-accent text-accent-foreground" : "bg-secondary hover:bg-primary hover:text-primary-foreground"}`, children: inCart ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3.5" }),
              " Added"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingCart, { className: "size-3.5" }),
              " Add to Cart"
            ] }) })
          ] })
        ] }, p.title + p.tag);
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "Business Directory" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Connect with thousands of verified aluminium professionals across Nigeria. From expert fabricators to bulk suppliers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-col md:flex-row items-stretch gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex items-center gap-2 rounded-full border bg-card px-4 py-2.5 focus-within:ring-2 focus-within:ring-brand/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "size-4 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: search, onChange: (e) => setSearch(e.target.value), placeholder: "Search for fabricators, locations, or specialities...", className: "bg-transparent outline-none flex-1 text-sm" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 overflow-x-auto", children: filters.map((f) => {
          const active = activeFilter === f;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveFilter(f), className: `px-5 py-2.5 rounded-full text-sm font-medium border whitespace-nowrap transition-colors ${active ? "bg-brand text-brand-foreground border-brand" : "bg-card hover:bg-secondary"}`, children: f }, f);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4", children: visiblePros.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center py-12 text-sm text-muted-foreground", children: "No professionals match your search." }) : visiblePros.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border bg-card p-5 flex flex-col sm:flex-row gap-4 sm:items-center hover:shadow-md transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-14 w-14 place-items-center rounded-xl bg-secondary text-foreground shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold truncate", children: p.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "size-4 text-accent shrink-0" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground line-clamp-2", children: p.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap items-center gap-2 text-[11px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-amber-600 font-semibold", children: [
              "★ ",
              p.rating,
              " (",
              p.reviews,
              " reviews)"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-2 py-0.5", children: p.location }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-accent/10 text-accent px-2 py-0.5 font-medium", children: p.type })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/directory", className: "self-start sm:self-center inline-flex items-center justify-center rounded-md bg-brand px-5 py-2 text-sm font-semibold text-brand-foreground hover:opacity-90", children: "View Profile" })
      ] }, p.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl overflow-hidden border grid lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary text-primary-foreground p-8 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl md:text-3xl font-bold", children: "Start your project today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-primary-foreground/80 max-w-md", children: "Whether you need bulk materials or a full installation team, our experts are ready to assist you in Nigeria's most reliable aluminium ecosystem." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: [["Expert Consultation", "Free guidance on material selection"], ["Nationwide Delivery", "Logistics handled by verified partners"]].map(([t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-5 text-accent mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-primary-foreground/70", children: d })
          ] })
        ] }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "bg-card p-8 md:p-10 space-y-4", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center text-center py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center size-12 rounded-full bg-accent/15 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-6" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-semibold", children: "Request received" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-1 max-w-xs", children: [
          "Thanks ",
          form.name || "there",
          " — a Village specialist will email you within 24 hours."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => {
          setSubmitted(false);
          setForm({
            name: "",
            email: "",
            requirement: "Bulk Material Purchase"
          });
        }, className: "mt-4 text-xs text-brand hover:underline", children: "Submit another request" })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Your Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, value: form.name, onChange: (e) => setForm({
            ...form,
            name: e.target.value
          }), placeholder: "John Doe", className: "mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand/30" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Email Address" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, type: "email", value: form.email, onChange: (e) => setForm({
            ...form,
            email: e.target.value
          }), placeholder: "john@example.com", className: "mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand/30" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Requirement" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.requirement, onChange: (e) => setForm({
            ...form,
            requirement: e.target.value
          }), className: "mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Bulk Material Purchase" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Installation Service" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Custom Fabrication" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Consultation" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "w-full rounded-md bg-brand text-brand-foreground py-3 text-sm font-semibold hover:opacity-90 transition-opacity", children: "Submit Request" })
      ] }) })
    ] }) })
  ] });
}
export {
  Home as component
};
