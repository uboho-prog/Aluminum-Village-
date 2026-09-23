import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { af as Calendar, ad as Download, ag as TrendingUp, ah as Info, a as CircleCheck, ai as ArrowUpRight, E as Eye, U as Users, P as Package, D as DollarSign, aj as Link2 } from "../_libs/lucide-react.mjs";
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
const STATS = [{
  label: "COMMISSION REVENUE",
  value: "₦142,500,000",
  trend: "+12.5% vs last month",
  icon: TrendingUp,
  trendColor: "text-emerald-400",
  link: "/admin/analytics"
}, {
  label: "MONTHLY VOLUME",
  value: "842 Tons",
  trend: "+4.2% vs last month",
  icon: TrendingUp,
  trendColor: "text-emerald-400",
  link: "/admin/analytics"
}, {
  label: "ACTIVE DEALS",
  value: "56",
  trend: "8 awaiting escrow release",
  icon: Info,
  trendColor: "text-sky-400",
  link: "/admin/deals"
}, {
  label: "VERIFIED SELLERS",
  value: "124",
  trend: "98% compliance rate",
  icon: CircleCheck,
  trendColor: "text-emerald-400",
  link: "/admin/sellers"
}];
const DEALS = [{
  id: "ALV-9821",
  buyer: "Forge Dynamics",
  seller: "Precision Alum",
  amount: "₦24,500,000",
  status: "Pending"
}, {
  id: "ALV-9820",
  buyer: "Structur-All Inc",
  seller: "Mega-Extrusion",
  amount: "₦12,800,000",
  status: "Secured"
}, {
  id: "ALV-9819",
  buyer: "Urban Build Co",
  seller: "Atlas Metals",
  amount: "₦45,000,000",
  status: "Released"
}];
function statusDot(s) {
  return s === "Pending" ? "bg-muted-foreground" : s === "Secured" ? "bg-sky-500" : "bg-emerald-500";
}
function AdminDashboardPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: "Admin Dashboard" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-400", children: "Manage your industrial ecosystem, sales pipeline, and logistics from a central hub." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-4 text-slate-500" }),
          " Oct 24 – Nov 24, 2024"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 rounded-lg bg-[#0b50c4] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
          " Export Report"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: STATS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: s.link, className: "group rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5 hover:border-[#0b50c4]/40 hover:shadow-lg hover:shadow-[#0b50c4]/5 hover:-translate-y-0.5 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: s.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-4 text-slate-600 group-hover:text-[#0b50c4] transition-colors" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-extrabold tracking-tight text-white", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-3 inline-flex items-center gap-1.5 text-xs font-medium ${s.trendColor}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "size-3.5" }),
        " ",
        s.trend
      ] })
    ] }, s.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-white", children: "Recent Deals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/deals", className: "inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400 hover:bg-sky-500/20 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "size-3" }),
            " View All"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-slate-400 border-b border-slate-700/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 pr-3 font-semibold", children: "Transaction ID" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 pr-3 font-semibold", children: "Buyer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 pr-3 font-semibold", children: "Seller" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 pr-3 font-semibold", children: "Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 pr-3 font-semibold", children: "Status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 font-semibold text-right", children: "Actions" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: DEALS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 pr-3 font-semibold text-white", children: [
              "#",
              d.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-3 text-slate-300", children: d.buyer }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-3 text-slate-300", children: d.seller }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-3 font-semibold text-white", children: d.amount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 pr-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 text-slate-300", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `size-1.5 rounded-full ${statusDot(d.status)}` }),
              d.status
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 text-right", children: d.status === "Released" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-500", children: "Completed" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex flex-col items-end gap-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-[#0b50c4] font-semibold hover:underline", children: "Release Payment" }),
              d.status === "Secured" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-rose-400 font-semibold hover:underline", children: "Refund" })
            ] }) })
          ] }, d.id)) })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/deals", className: "text-sm font-semibold text-[#0b50c4] hover:underline", children: "View All Transactions →" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400 mb-4", children: "QUICK ACTIONS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/users", className: "flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0b50c4]/40 hover:text-white hover:bg-slate-800 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "size-4 text-[#0b50c4]" }),
              "Manage Users",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3.5 ml-auto text-slate-600" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/sellers", className: "flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0b50c4]/40 hover:text-white hover:bg-slate-800 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-4 text-[#0b50c4]" }),
              "Verify Sellers",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3.5 ml-auto text-slate-600" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admin/deals", className: "flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0b50c4]/40 hover:text-white hover:bg-slate-800 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(DollarSign, { className: "size-4 text-[#0b50c4]" }),
              "Escrow Management",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "size-3.5 ml-auto text-slate-600" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-bold tracking-wider text-slate-400 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "size-3.5" }),
            " PAYMENT GENERATOR"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Invoice Amount (NGN)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "e.g. 5,000,000", className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block mt-3 text-xs font-medium text-slate-400 mb-1", children: "Reference" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Project or Order ID", className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-4 w-full rounded-lg bg-[#0b50c4] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25", children: "Generate Secure Link" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 rounded-2xl bg-gradient-to-br from-[#0b50c4] to-[#1a3a7a] p-6 shadow-sm relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "System Throughput Analytics" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold tracking-wider text-white/60 mt-0.5", children: "REVENUE VS VOLUME PERFORMANCE" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-fuchsia-400" }),
              " ",
              "Revenue"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-cyan-400" }),
              " Volume"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 600 200", className: "mt-4 w-full h-44", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "rev", x1: "0", x2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0", stopColor: "#d946ef" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "#a855f7" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,160 C100,150 180,90 280,70 C400,45 500,40 600,30", stroke: "url(#rev)", strokeWidth: "3", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,170 C100,160 200,130 300,120 C420,108 520,100 600,90", stroke: "#22d3ee", strokeWidth: "3", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { transform: "translate(380,55)", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "90", height: "42", rx: "6", fill: "rgba(255,255,255,0.08)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "16", fill: "#a78bfa", fontSize: "10", fontWeight: "700", children: "OCTOBER" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "10", y: "33", fill: "#fff", fontSize: "14", fontWeight: "700", children: "₦142.5M" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between text-[10px] text-white/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/analytics", className: "hover:text-white transition-colors", children: "Verified Fabricators Overview →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-4", children: ["JUN", "JUL", "AUG", "SEP", "OCT", "NOV"].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: m === "OCT" ? "text-white font-bold" : "", children: m }, m)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-to-br from-[#0b50c4] to-[#1a3a7a] p-6 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-white/80 mb-4", children: "ACTIVITY DISTRIBUTION" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto size-44", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "size-full -rotate-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9", fill: "none", stroke: "rgba(255,255,255,0.08)", strokeWidth: "4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9", fill: "none", stroke: "#a855f7", strokeWidth: "4", strokeDasharray: "55 100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9", fill: "none", stroke: "#22d3ee", strokeWidth: "4", strokeDasharray: "25 100", strokeDashoffset: "-55" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9", fill: "none", stroke: "#64748b", strokeWidth: "4", strokeDasharray: "20 100", strokeDashoffset: "-80" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-extrabold text-white", children: "842" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] tracking-wider text-white/60", children: "TOTAL TONS" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: "bg-fuchsia-400", label: "Marketplace" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: "bg-cyan-400", label: "Custom Fab" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: "bg-slate-400", label: "Logistics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { color: "bg-slate-500", label: "Other" })
        ] })
      ] })
    ] })
  ] });
}
function Legend({
  color,
  label
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `size-2 rounded-full ${color}` }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/80", children: label })
  ] });
}
export {
  AdminDashboardPage as component
};
