import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { ag as TrendingUp, ak as TrendingDown, al as TriangleAlert } from "../_libs/lucide-react.mjs";
const METRICS = [{
  label: "TOTAL REVENUE ALL TIME",
  value: "₦428.5M",
  change: "+18.2%",
  up: true
}, {
  label: "TOTAL COMMISSION EARNED",
  value: "₦64.3M",
  change: "+15.7%",
  up: true
}, {
  label: "TOTAL DEALS CLOSED",
  value: "1,247",
  change: "+12.4%",
  up: true
}, {
  label: "AVERAGE DEAL VALUE",
  value: "₦3.4M",
  change: "+5.1%",
  up: true
}, {
  label: "CUSTOMER SATISFACTION",
  value: "94.2%",
  change: "+1.8%",
  up: true
}];
const MONTHLY_REVENUE = [{
  month: "Dec",
  revenue: 68,
  commission: 10.2
}, {
  month: "Jan",
  revenue: 82,
  commission: 12.3
}, {
  month: "Feb",
  revenue: 75,
  commission: 11.3
}, {
  month: "Mar",
  revenue: 95,
  commission: 14.3
}, {
  month: "Apr",
  revenue: 110,
  commission: 16.5
}, {
  month: "May",
  revenue: 98,
  commission: 14.7
}, {
  month: "Jun",
  revenue: 82,
  commission: 12.3
}, {
  month: "Jul",
  revenue: 115,
  commission: 17.3
}, {
  month: "Aug",
  revenue: 130,
  commission: 19.5
}, {
  month: "Sep",
  revenue: 125,
  commission: 18.8
}, {
  month: "Oct",
  revenue: 142,
  commission: 21.3
}, {
  month: "Nov",
  revenue: 158,
  commission: 23.7
}];
const DEAL_STATUS = [{
  label: "Completed",
  count: 892,
  color: "#10b981"
}, {
  label: "In Escrow",
  count: 56,
  color: "#f59e0b"
}, {
  label: "Disputed",
  count: 23,
  color: "#ef4444"
}, {
  label: "Refunded",
  count: 18,
  color: "#64748b"
}];
const CATEGORIES = [{
  name: "Windows",
  revenue: 124
}, {
  name: "Doors",
  revenue: 89
}, {
  name: "Partitions",
  revenue: 76
}, {
  name: "Railings",
  revenue: 62
}, {
  name: "Accessories",
  revenue: 48
}, {
  name: "Services",
  revenue: 30
}];
const NEW_USERS = [{
  month: "Jul",
  customers: 45,
  sellers: 8
}, {
  month: "Aug",
  customers: 62,
  sellers: 12
}, {
  month: "Sep",
  customers: 58,
  sellers: 10
}, {
  month: "Oct",
  customers: 78,
  sellers: 15
}, {
  month: "Nov",
  customers: 92,
  sellers: 18
}, {
  month: "Dec",
  customers: 68,
  sellers: 11
}];
const TOP_SELLERS = [{
  rank: 1,
  name: "Atlas Metals Co",
  category: "Railings",
  deals: 28,
  revenue: "₦34.1M",
  commission: "₦5.1M",
  avgDeal: "₦1.22M"
}, {
  rank: 2,
  name: "Precision Alum Industries",
  category: "Windows",
  deals: 45,
  revenue: "₦28.4M",
  commission: "₦4.3M",
  avgDeal: "₦0.63M"
}, {
  rank: 3,
  name: "Mega-Extrusion Ltd",
  category: "Doors",
  deals: 32,
  revenue: "₦19.2M",
  commission: "₦2.9M",
  avgDeal: "₦0.60M"
}, {
  rank: 4,
  name: "AluTech Fabricators",
  category: "Mixed",
  deals: 18,
  revenue: "₦11.8M",
  commission: "₦1.8M",
  avgDeal: "₦0.66M"
}, {
  rank: 5,
  name: "HollowCore Profiles",
  category: "Accessories",
  deals: 12,
  revenue: "₦8.5M",
  commission: "₦1.3M",
  avgDeal: "₦0.71M"
}];
const DISPUTES_SUMMARY = {
  totalRaised: 23,
  resolved: 15,
  pending: 8,
  totalRefunded: "₦18,200,000",
  refundRate: "1.4%"
};
function AdminAnalyticsPage() {
  const [range, setRange] = reactExports.useState("Last 12 months");
  const maxRevenue = Math.max(...MONTHLY_REVENUE.map((m) => m.revenue));
  const maxUsers = Math.max(...NEW_USERS.map((m) => m.customers));
  const maxCat = Math.max(...CATEGORIES.map((c) => c.revenue));
  const totalDeals = DEAL_STATUS.reduce((s, d) => s + d.count, 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: "Analytics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-400", children: "Track platform performance, revenue trends, and seller activity." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: range, onChange: (e) => setRange(e.target.value), className: "inline-flex items-center gap-2 rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Last 7 days" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Last 30 days" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Last 3 months" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Last 12 months" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Custom range" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-3 lg:grid-cols-5", children: METRICS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: m.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-extrabold tracking-tight text-white", children: m.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mt-2 inline-flex items-center gap-1 text-xs font-semibold ${m.up ? "text-emerald-400" : "text-red-400"}`, children: [
        m.up ? /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "size-3.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "size-3.5" }),
        m.change
      ] })
    ] }, m.label)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "Revenue Over Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold tracking-wider text-slate-500 mt-0.5", children: "MONTHLY REVENUE & COMMISSION (₦ MILLIONS)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-[#0EA5E9]" }),
            " Revenue"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-amber-400" }),
            " Commission"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 600 200", className: "mt-4 w-full h-48", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "revG", x1: "0", x2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0", stopColor: "#0EA5E9" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "1", stopColor: "#0284c7" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M0,${200 - MONTHLY_REVENUE[0].revenue / maxRevenue * 180} ${MONTHLY_REVENUE.map((m, i) => `L${i * (600 / 11)},${200 - m.revenue / maxRevenue * 180}`).join(" ")}`, stroke: "url(#revG)", strokeWidth: "2.5", fill: "none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `M0,${200 - MONTHLY_REVENUE[0].commission / maxRevenue * 180} ${MONTHLY_REVENUE.map((m, i) => `L${i * (600 / 11)},${200 - m.commission / maxRevenue * 180}`).join(" ")}`, stroke: "#fbbf24", strokeWidth: "2.5", fill: "none" }),
          MONTHLY_REVENUE.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: i * (600 / 11), y: "198", fill: "#64748b", fontSize: "9", textAnchor: "middle", children: m.month }, i))
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "Deals by Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto size-48 mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 36 36", className: "size-full -rotate-90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9", fill: "none", stroke: "rgba(255,255,255,0.05)", strokeWidth: "4" }),
            (() => {
              let offset = 0;
              return DEAL_STATUS.map((d) => {
                const pct = d.count / totalDeals * 100;
                const el = /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "15.9", fill: "none", stroke: d.color, strokeWidth: "4", strokeDasharray: `${pct} ${100 - pct}`, strokeDashoffset: `${-offset}` }, d.label);
                offset += pct;
                return el;
              });
            })()
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold text-white", children: totalDeals.toLocaleString() }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] tracking-wider text-slate-500", children: "TOTAL DEALS" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-2 text-xs", children: DEAL_STATUS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full", style: {
            backgroundColor: d.color
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-300", children: d.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto font-semibold text-white", children: d.count })
        ] }, d.label)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "Top Categories by Revenue" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: CATEGORIES.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-300", children: c.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-white", children: [
              "₦",
              c.revenue,
              "M"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 rounded-full bg-slate-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-[#0EA5E9] transition-all", style: {
            width: `${c.revenue / maxCat * 100}%`
          } }) })
        ] }, c.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white", children: "New Users & Sellers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold tracking-wider text-slate-500 mt-0.5", children: "LAST 6 MONTHS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-[#0EA5E9]" }),
            " Customers"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-2 rounded-full bg-amber-400" }),
            " Sellers"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-2 mt-4 h-40", children: NEW_USERS.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end gap-0.5 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 rounded-t bg-[#0EA5E9] transition-all hover:bg-[#38bdf8]", style: {
              height: `${m.customers / maxUsers * 100}%`
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 rounded-t bg-amber-400 transition-all hover:bg-amber-300", style: {
              height: `${m.sellers / maxUsers * 100}%`
            } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-medium text-slate-400", children: m.month })
        ] }, m.month)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white mb-4", children: "Top Sellers by Revenue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-slate-400 border-b border-slate-700/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Rank" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Seller Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Category" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Total Deals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Gross Revenue" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Commission Generated" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-2.5 px-4 font-semibold", children: "Avg Deal Value" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: TOP_SELLERS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 font-bold text-white", children: [
            "#",
            s.rank
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-semibold text-white", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-400", children: s.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-300", children: s.deals }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-semibold text-white", children: s.revenue }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-[#0EA5E9] font-semibold", children: s.commission }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-300", children: s.avgDeal })
        ] }, s.rank)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-lg font-bold text-white mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-5 text-red-400" }),
          " Disputes Summary"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold text-white", children: DISPUTES_SUMMARY.totalRaised }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500 mt-1", children: "TOTAL RAISED" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold text-emerald-400", children: DISPUTES_SUMMARY.resolved }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500 mt-1", children: "RESOLVED" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-2xl font-extrabold ${"text-red-400"}`, children: DISPUTES_SUMMARY.pending }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500 mt-1", children: "PENDING" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-bold text-white mb-4", children: "Refunds Summary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold text-white", children: DISPUTES_SUMMARY.totalRefunded }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500 mt-1", children: "TOTAL REFUNDED" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold text-white", children: DISPUTES_SUMMARY.refundRate }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500 mt-1", children: "REFUND RATE" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  AdminAnalyticsPage as component
};
