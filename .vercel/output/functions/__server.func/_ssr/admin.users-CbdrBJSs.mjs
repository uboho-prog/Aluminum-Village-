import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { af as Calendar, ad as Download, e as Search, K as ChevronRight, X } from "../_libs/lucide-react.mjs";
const USERS = [{
  id: "USR-0012",
  name: "Chidinma Okafor",
  phone: "+234 803 456 7890",
  email: "chidinma@forge-ng.com",
  location: "Lagos",
  totalOrders: 8,
  totalSpent: "₦18,400,000",
  lastActive: "Nov 18, 2024",
  status: "Active",
  orders: [{
    id: "ORD-4401",
    product: "Industrial Extrusions",
    amount: "₦4,200,000",
    status: "Completed",
    date: "Nov 18, 2024"
  }, {
    id: "ORD-4380",
    product: "Hollow Core Profiles",
    amount: "₦2,800,000",
    status: "Completed",
    date: "Oct 22, 2024"
  }, {
    id: "ORD-4350",
    product: "Aluminium Sheets",
    amount: "₦6,500,000",
    status: "In Delivery",
    date: "Oct 10, 2024"
  }, {
    id: "ORD-4310",
    product: "Window Frames (200 units)",
    amount: "₦4,900,000",
    status: "Completed",
    date: "Sep 15, 2024"
  }]
}, {
  id: "USR-0034",
  name: "Emeka Adeyemi",
  phone: "+234 812 345 6789",
  email: "emeka@buildit.com",
  location: "Abuja",
  totalOrders: 5,
  totalSpent: "₦9,200,000",
  lastActive: "Nov 15, 2024",
  status: "Active",
  orders: [{
    id: "ORD-4395",
    product: "Standard Beam Order",
    amount: "₦3,400,000",
    status: "Completed",
    date: "Nov 15, 2024"
  }, {
    id: "ORD-4370",
    product: "Anodized Window Frames",
    amount: "₦2,100,000",
    status: "Completed",
    date: "Oct 5, 2024"
  }]
}, {
  id: "USR-0056",
  name: "Fatima Bello",
  phone: "+234 705 678 1234",
  email: "fatima@structurall.com",
  location: "Port Harcourt",
  totalOrders: 12,
  totalSpent: "₦34,800,000",
  lastActive: "Nov 20, 2024",
  status: "Active",
  orders: [{
    id: "ORD-4405",
    product: "Custom Fabrication Batch",
    amount: "₦8,600,000",
    status: "Escrow",
    date: "Nov 20, 2024"
  }, {
    id: "ORD-4390",
    product: "Coil Stock (500kg)",
    amount: "₦5,200,000",
    status: "Completed",
    date: "Nov 2, 2024"
  }, {
    id: "ORD-4360",
    product: "Railings Set",
    amount: "₦3,800,000",
    status: "Completed",
    date: "Sep 28, 2024"
  }]
}, {
  id: "USR-0078",
  name: "Tunde Ogundimu",
  phone: "+234 809 876 5432",
  email: "tunde@metrodev.com",
  location: "Ibadan",
  totalOrders: 3,
  totalSpent: "₦5,100,000",
  lastActive: "Oct 30, 2024",
  status: "Active",
  orders: [{
    id: "ORD-4340",
    product: "Aluminium Sheets",
    amount: "₦2,900,000",
    status: "Completed",
    date: "Oct 30, 2024"
  }]
}, {
  id: "USR-0091",
  name: "Ngozi Eze",
  phone: "+234 811 234 5678",
  email: "ngozi@urbanbuild.com",
  location: "Enugu",
  totalOrders: 1,
  totalSpent: "₦1,200,000",
  lastActive: "Sep 12, 2024",
  status: "Inactive",
  orders: [{
    id: "ORD-4290",
    product: "Door Frames",
    amount: "₦1,200,000",
    status: "Completed",
    date: "Sep 12, 2024"
  }]
}, {
  id: "USR-0103",
  name: "Yusuf Abdullahi",
  phone: "+234 802 345 6789",
  email: "yusuf@skyarch.com",
  location: "Kano",
  totalOrders: 6,
  totalSpent: "₦12,600,000",
  lastActive: "Nov 12, 2024",
  status: "Active",
  orders: [{
    id: "ORD-4388",
    product: "Hollow Core Profiles",
    amount: "₦3,100,000",
    status: "Completed",
    date: "Nov 12, 2024"
  }, {
    id: "ORD-4365",
    product: "Industrial Extrusions",
    amount: "₦4,500,000",
    status: "Completed",
    date: "Sep 20, 2024"
  }]
}];
function AdminUsersPage() {
  const [search, setSearch] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("All Users");
  const [slideUser, setSlideUser] = reactExports.useState(null);
  const filtered = USERS.filter((u) => {
    const matchesSearch = u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase()) || u.phone.includes(search);
    const matchesFilter = filter === "All Users" || filter === "Active" && u.status === "Active" || filter === "Inactive" && u.status === "Inactive";
    return matchesSearch && matchesFilter;
  });
  const activeThisMonth = USERS.filter((u) => u.status === "Active").length;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: "Users" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-400", children: "Manage all registered customers and their order history." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "size-4 text-slate-500" }),
            " Oct 24 – Nov 24, 2024"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 rounded-lg bg-[#0b50c4] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
            " Export"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: "TOTAL REGISTERED USERS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-extrabold tracking-tight text-white", children: USERS.length }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-slate-500", children: "All time" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: "ACTIVE USERS THIS MONTH" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-extrabold tracking-tight text-white", children: activeThisMonth }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-emerald-400 font-medium", children: [
            (activeThisMonth / USERS.length * 100).toFixed(0),
            "% of total"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: "TOTAL CUSTOMER SPEND" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-extrabold tracking-tight text-white", children: "₦81.3M" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-emerald-400 font-medium", children: "+18.2% vs last month" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search by name, phone, or email...", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full rounded-lg bg-slate-800 border border-slate-700 pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: filter, onChange: (e) => setFilter(e.target.value), className: "rounded-lg bg-slate-800 border border-slate-700 px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "All Users" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Inactive" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-slate-400 border-b border-slate-700/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-5 font-semibold", children: "User ID" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-5 font-semibold", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-5 font-semibold", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-5 font-semibold", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-5 font-semibold", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-5 font-semibold", children: "Orders" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-5 font-semibold", children: "Total Spent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-5 font-semibold", children: "Last Active" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-5 font-semibold", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-5 font-semibold text-right", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((u) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-5 font-semibold text-[#0EA5E9]", children: u.id }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-5 font-semibold text-white", children: u.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-5 text-slate-300", children: u.phone }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-5 text-slate-300", children: u.email }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-5 text-slate-400", children: u.location }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-5 text-slate-300 text-center", children: u.totalOrders }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-5 font-semibold text-white", children: u.totalSpent }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-5 text-slate-400", children: u.lastActive }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${u.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-500/10 text-slate-400"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `size-1.5 rounded-full ${u.status === "Active" ? "bg-emerald-400" : "bg-slate-400"}` }),
            u.status
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3.5 px-5 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSlideUser(u), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 px-3 py-1.5 text-xs font-semibold text-[#0EA5E9] hover:bg-[#0EA5E9]/20 transition-colors", children: [
            "View Orders ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-3" })
          ] }) })
        ] }, u.id)) })
      ] }) }) })
    ] }),
    slideUser && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60", onClick: () => setSlideUser(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg bg-[#1e293b] border-l border-slate-700/50 shadow-2xl overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#1e293b] border-b border-slate-700/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-white", children: slideUser.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-400", children: [
              slideUser.email,
              " · ",
              slideUser.phone
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSlideUser(null), className: "p-2 rounded-lg hover:bg-slate-700 text-slate-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "LOCATION" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-white", children: slideUser.location })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "STATUS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-1 text-sm font-semibold ${slideUser.status === "Active" ? "text-emerald-400" : "text-slate-400"}`, children: slideUser.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "TOTAL ORDERS" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-white", children: slideUser.totalOrders })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "TOTAL SPENT" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-white", children: slideUser.totalSpent })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white mb-3", children: "Order History" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: slideUser.orders.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-white text-sm", children: o.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2 py-0.5 text-[10px] font-semibold ${o.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" : o.status === "Escrow" ? "bg-amber-500/10 text-amber-400" : "bg-sky-500/10 text-sky-400"}`, children: o.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-slate-300", children: o.product }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between text-xs text-slate-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o.amount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: o.date })
              ] })
            ] }, o.id)) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminUsersPage as component
};
