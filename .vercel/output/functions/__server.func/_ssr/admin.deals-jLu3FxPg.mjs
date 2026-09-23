import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { af as Calendar, ad as Download, e as Search, a as CircleCheck, aj as Link2, am as Copy, X, al as TriangleAlert } from "../_libs/lucide-react.mjs";
const DEALS = [{
  id: "ALV-9821",
  buyer: "Forge Dynamics",
  buyerPhone: "+234 803 456 7890",
  seller: "Precision Alum",
  sellerPhone: "+234 812 345 6789",
  product: "Industrial Extrusions (2 tons)",
  amount: "₦24,500,000",
  commission15: "₦3,675,000",
  sellerPayout85: "₦20,825,000",
  status: "Escrow",
  date: "Nov 20, 2024",
  activityLog: [{
    time: "20 Nov 2024 09:15",
    event: "Payment confirmed by customer"
  }, {
    time: "20 Nov 2024 09:16",
    event: "Funds locked in escrow"
  }, {
    time: "20 Nov 2024 11:30",
    event: "Seller notified to begin work"
  }],
  deliveryNotes: "",
  disputeDetails: "",
  adminNotes: ""
}, {
  id: "ALV-9820",
  buyer: "Structur-All Inc",
  buyerPhone: "+234 812 345 6789",
  seller: "Mega-Extrusion",
  sellerPhone: "+234 809 876 5432",
  product: "Hollow Core Profiles (500m)",
  amount: "₦12,800,000",
  commission15: "₦1,920,000",
  sellerPayout85: "₦10,880,000",
  status: "In Delivery",
  date: "Nov 18, 2024",
  activityLog: [{
    time: "18 Nov 2024 08:30",
    event: "Payment confirmed by customer"
  }, {
    time: "18 Nov 2024 08:31",
    event: "Funds locked in escrow"
  }, {
    time: "18 Nov 2024 10:00",
    event: "Seller notified to begin work"
  }, {
    time: "19 Nov 2024 14:20",
    event: "Seller marked as In Delivery"
  }],
  deliveryNotes: "Shipment dispatched via ABC Logistics. Tracking: TRK-20241119-001",
  disputeDetails: "",
  adminNotes: ""
}, {
  id: "ALV-9819",
  buyer: "Urban Build Co",
  buyerPhone: "+234 805 678 1234",
  seller: "Atlas Metals",
  sellerPhone: "+234 802 345 6789",
  product: "Standard Beam Order (5 tons)",
  amount: "₦45,000,000",
  commission15: "₦6,750,000",
  sellerPayout85: "₦38,250,000",
  status: "Completed",
  date: "Nov 15, 2024",
  activityLog: [{
    time: "15 Nov 2024 09:32",
    event: "Payment confirmed by customer"
  }, {
    time: "15 Nov 2024 09:33",
    event: "Funds locked in escrow"
  }, {
    time: "15 Nov 2024 11:00",
    event: "Seller notified to begin work"
  }, {
    time: "16 Nov 2024 14:20",
    event: "Seller marked as In Delivery"
  }, {
    time: "18 Nov 2024 10:00",
    event: "Customer confirmed receipt"
  }, {
    time: "18 Nov 2024 10:01",
    event: "Payment released to seller"
  }],
  deliveryNotes: "",
  disputeDetails: "",
  adminNotes: ""
}, {
  id: "ALV-9818",
  buyer: "Metro Dev Group",
  buyerPhone: "+234 809 876 5432",
  seller: "Precision Alum",
  sellerPhone: "+234 812 345 6789",
  product: "Anodized Window Frames (200 units)",
  amount: "₦8,200,000",
  commission15: "₦1,230,000",
  sellerPayout85: "₦6,970,000",
  status: "Escrow",
  date: "Nov 12, 2024",
  activityLog: [{
    time: "12 Nov 2024 13:45",
    event: "Payment confirmed by customer"
  }, {
    time: "12 Nov 2024 13:46",
    event: "Funds locked in escrow"
  }],
  deliveryNotes: "",
  disputeDetails: "",
  adminNotes: ""
}, {
  id: "ALV-9817",
  buyer: "Glass-Tech Ltd",
  buyerPhone: "+234 705 678 1234",
  seller: "Mega-Extrusion",
  sellerPhone: "+234 809 876 5432",
  product: "Aluminium Sheets (100 sheets)",
  amount: "₦18,600,000",
  commission15: "₦2,790,000",
  sellerPayout85: "₦15,810,000",
  status: "Disputed",
  date: "Nov 10, 2024",
  activityLog: [{
    time: "10 Nov 2024 08:00",
    event: "Payment confirmed by customer"
  }, {
    time: "10 Nov 2024 08:01",
    event: "Funds locked in escrow"
  }, {
    time: "12 Nov 2024 16:00",
    event: "Seller marked as In Delivery"
  }, {
    time: "14 Nov 2024 09:30",
    event: "Customer raised dispute — received damaged sheets"
  }],
  deliveryNotes: "Customer reports 12 out of 100 sheets arrived with surface scratches.",
  disputeDetails: "Customer claims 12 sheets arrived with deep surface scratches that were not present at inspection. Requesting partial refund of ₦2,232,000.",
  adminNotes: "Awaiting seller response. Dispute filed 14 Nov 2024."
}, {
  id: "ALV-9816",
  buyer: "Build-IT Co",
  buyerPhone: "+234 811 234 5678",
  seller: "Atlas Metals",
  sellerPhone: "+234 802 345 6789",
  product: "Coil Stock (3 rolls)",
  amount: "₦32,100,000",
  commission15: "₦4,815,000",
  sellerPayout85: "₦27,285,000",
  status: "Completed",
  date: "Nov 8, 2024",
  activityLog: [{
    time: "08 Nov 2024 10:15",
    event: "Payment confirmed by customer"
  }, {
    time: "08 Nov 2024 10:16",
    event: "Funds locked in escrow"
  }, {
    time: "10 Nov 2024 09:00",
    event: "Customer confirmed receipt"
  }, {
    time: "10 Nov 2024 09:01",
    event: "Payment released to seller"
  }],
  deliveryNotes: "",
  disputeDetails: "",
  adminNotes: ""
}, {
  id: "ALV-9815",
  buyer: "SkyLine Architects",
  buyerPhone: "+234 802 345 6789",
  seller: "Precision Alum",
  sellerPhone: "+234 812 345 6789",
  product: "Custom Fabrication (10 sets)",
  amount: "₦15,400,000",
  commission15: "₦2,310,000",
  sellerPayout85: "₦13,090,000",
  status: "Refunded",
  date: "Nov 5, 2024",
  activityLog: [{
    time: "05 Nov 2024 14:00",
    event: "Payment confirmed by customer"
  }, {
    time: "05 Nov 2024 14:01",
    event: "Funds locked in escrow"
  }, {
    time: "07 Nov 2024 11:00",
    event: "Customer requested cancellation"
  }, {
    time: "07 Nov 2024 11:30",
    event: "Admin approved refund"
  }, {
    time: "07 Nov 2024 11:31",
    event: "Full refund processed via Paystack"
  }],
  deliveryNotes: "",
  disputeDetails: "",
  adminNotes: "Customer cancelled before seller began work."
}];
const statusStyle = {
  "Escrow": {
    bg: "bg-amber-500/10",
    text: "text-amber-400",
    dot: "bg-amber-400"
  },
  "In Delivery": {
    bg: "bg-sky-500/10",
    text: "text-sky-400",
    dot: "bg-sky-400"
  },
  "Disputed": {
    bg: "bg-red-500/10",
    text: "text-red-400",
    dot: "bg-red-400"
  },
  "Completed": {
    bg: "bg-emerald-500/10",
    text: "text-emerald-400",
    dot: "bg-emerald-400"
  },
  "Refunded": {
    bg: "bg-slate-500/10",
    text: "text-slate-400",
    dot: "bg-slate-400"
  }
};
function AdminDealsPage() {
  const [search, setSearch] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("All");
  const [slideDeal, setSlideDeal] = reactExports.useState(null);
  const [invAmount, setInvAmount] = reactExports.useState("");
  const [invRef, setInvRef] = reactExports.useState("");
  const [invSeller, setInvSeller] = reactExports.useState("");
  const [invCustomer, setInvCustomer] = reactExports.useState("");
  const [generatedLink, setGeneratedLink] = reactExports.useState("");
  const filtered = DEALS.filter((d) => {
    const matchesSearch = d.id.toLowerCase().includes(search.toLowerCase()) || d.buyer.toLowerCase().includes(search.toLowerCase()) || d.seller.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || d.status === filter;
    return matchesSearch && matchesFilter;
  });
  const pendingEscrow = DEALS.filter((d) => d.status === "Escrow").reduce((sum, d) => sum + parseInt(d.amount.replace(/[₦,]/g, "")), 0);
  const disputes = DEALS.filter((d) => d.status === "Disputed").length;
  const commissionThisMonth = "₦23.5M";
  const generateLink = () => {
    if (invAmount && invRef) {
      setGeneratedLink(`https://pay.aluminiumvillage.com/split/${invRef.toLowerCase().replace(/\s/g, "-")}`);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: "Deals" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-400", children: "Monitor all transactions, escrow status, and payment releases." })
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: "TOTAL DEALS THIS MONTH" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-extrabold tracking-tight text-white", children: DEALS.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: "PENDING ESCROW" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-3xl font-extrabold tracking-tight text-white", children: [
            "₦",
            (pendingEscrow / 1e6).toFixed(1),
            "M"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-amber-400 font-medium", children: "Held in escrow" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: "ACTIVE DISPUTES" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 text-3xl font-extrabold tracking-tight ${disputes > 0 ? "text-red-400" : "text-white"}`, children: disputes })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: "COMMISSION EARNED" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-extrabold tracking-tight text-white", children: commissionThisMonth })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search by Transaction ID, buyer, or seller...", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full rounded-lg bg-slate-800 border border-slate-700 pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: filter, onChange: (e) => setFilter(e.target.value), className: "rounded-lg bg-slate-800 border border-slate-700 px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "All" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Escrow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "In Delivery" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Disputed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Completed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Refunded" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-slate-400 border-b border-slate-700/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Transaction ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Buyer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Seller" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Product" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Amount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Commission" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Seller Payout" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Date" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold text-right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((d) => {
              const s = statusStyle[d.status];
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 font-semibold text-[#0EA5E9]", children: [
                  "#",
                  d.id
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-300", children: d.buyer }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-300", children: d.seller }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-400 max-w-[140px] truncate", children: d.product }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-semibold text-white", children: d.amount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-300", children: d.commission15 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-300", children: d.sellerPayout85 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold ${s.bg} ${s.text}`, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `size-1.5 rounded-full ${s.dot}` }),
                  d.status
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-400", children: d.date }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1", children: [
                  d.status !== "Completed" && d.status !== "Refunded" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSlideDeal(d), className: "text-[#0EA5E9] font-semibold text-xs hover:underline", children: "Release" }),
                    (d.status === "Escrow" || d.status === "In Delivery") && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSlideDeal(d), className: "text-red-400 font-semibold text-xs hover:underline ml-1", children: "Refund" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSlideDeal(d), className: "p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors", title: "View Details", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4" }) })
                ] }) })
              ] }, d.id);
            }) })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-[11px] font-bold tracking-wider text-slate-400 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link2, { className: "size-3.5" }),
            " PAYMENT GENERATOR"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Invoice Amount (NGN)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: invAmount, onChange: (e) => setInvAmount(e.target.value), placeholder: "e.g. 5,000,000", className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Reference" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: invRef, onChange: (e) => setInvRef(e.target.value), placeholder: "Project or Order ID", className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Seller" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: invSeller, onChange: (e) => setInvSeller(e.target.value), className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select seller..." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Precision Alum Industries" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Mega-Extrusion Ltd" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Atlas Metals Co" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-medium text-slate-400 mb-1", children: "Customer Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", value: invCustomer, onChange: (e) => setInvCustomer(e.target.value), placeholder: "Customer name", className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: generateLink, className: "mt-2 w-full rounded-lg bg-[#0b50c4] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25", children: "Generate Payment Link" }),
            generatedLink && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-lg bg-slate-800 border border-slate-700 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500 mb-1", children: "GENERATED LINK" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "flex-1 text-xs text-[#0EA5E9] break-all", children: generatedLink }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => navigator.clipboard.writeText(generatedLink), className: "p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { className: "size-3.5" }) })
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    slideDeal && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60", onClick: () => setSlideDeal(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg bg-[#1e293b] border-l border-slate-700/50 shadow-2xl overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#1e293b] border-b border-slate-700/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-lg font-bold text-white", children: [
              "#",
              slideDeal.id
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-slate-400", children: slideDeal.product })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSlideDeal(null), className: "p-2 rounded-lg hover:bg-slate-700 text-slate-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500 mb-2", children: "AMOUNT BREAKDOWN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Total Amount" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-white", children: slideDeal.amount })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Commission (15%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-[#0EA5E9]", children: slideDeal.commission15 })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Seller Payout (85%)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white", children: slideDeal.sellerPayout85 })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "BUYER" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-white", children: slideDeal.buyer }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400", children: slideDeal.buyerPhone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "SELLER" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-white", children: slideDeal.seller }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-400", children: slideDeal.sellerPhone })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white mb-3", children: "Activity Log" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-0 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-[7px] top-2 bottom-2 w-px bg-slate-700" }),
              slideDeal.activityLog.map((log, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 py-2 relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "size-[15px] rounded-full bg-slate-700 border-2 border-[#1e293b] shrink-0 z-10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-slate-500", children: log.time }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-slate-300", children: log.event })
                ] })
              ] }, i))
            ] })
          ] }),
          slideDeal.deliveryNotes && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white mb-2", children: "Delivery Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-300 bg-slate-800/50 rounded-lg border border-slate-700/30 p-3", children: slideDeal.deliveryNotes })
          ] }),
          slideDeal.disputeDetails && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-white mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "size-4 text-red-400" }),
              " Dispute Details"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-red-300 bg-red-500/5 rounded-lg border border-red-500/20 p-3", children: slideDeal.disputeDetails })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold text-white mb-2", children: "Admin Notes" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { defaultValue: slideDeal.adminNotes, placeholder: "Add internal notes...", rows: 2, className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4] resize-none" })
          ] }),
          slideDeal.status !== "Completed" && slideDeal.status !== "Refunded" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-2 border-t border-slate-700/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 rounded-lg bg-[#0EA5E9] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0EA5E9]/90 active:scale-[0.98] transition-all", children: "Release Payment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2.5 text-sm font-semibold text-red-400 hover:bg-red-500/20 active:scale-[0.98] transition-all", children: "Refund" }),
            slideDeal.status !== "Disputed" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 rounded-lg bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 text-sm font-semibold text-amber-400 hover:bg-amber-500/20 active:scale-[0.98] transition-all", children: "Mark Disputed" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminDealsPage as component
};
