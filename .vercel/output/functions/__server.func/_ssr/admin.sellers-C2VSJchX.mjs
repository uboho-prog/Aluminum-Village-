import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { ad as Download, e as Search, K as ChevronRight, a as CircleCheck, X, v as Bell, an as Mail, M as MessageCircle, Q as Plus, _ as ExternalLink, P as Package, I as FileText, ao as Save } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
const SELLERS = [{
  id: "SLR-0034",
  businessName: "Precision Alum Industries",
  ownerName: "Emeka Adeyemi",
  category: "Windows",
  phone: "+234 812 345 6789",
  email: "emeka@precisionalum.com",
  bankStatus: "Verified",
  bankName: "Guaranty Trust Bank",
  bankAccount: "0123456789",
  bankAccountName: "Precision Alum Industries",
  paystack: "Connected",
  paystackCode: "ACCT_xxx1234",
  totalDeals: 45,
  totalPaidOut: "₦28,400,000",
  commissionGenerated: "₦4,260,000",
  status: "Active",
  listings: [{
    name: "Industrial Extrusions (6063-T5)",
    price: "₦850,000/ton",
    status: "Active"
  }, {
    name: "Anodized Window Frames",
    price: "₦12,500/unit",
    status: "Active"
  }, {
    name: "Aluminium Sheets (1.2mm)",
    price: "₦320,000/sheet",
    status: "Active"
  }],
  orderHistory: [{
    id: "ORD-4401",
    amount: "₦4,200,000",
    commission: "₦630,000",
    date: "Nov 18, 2024",
    status: "Completed"
  }, {
    id: "ORD-4380",
    amount: "₦2,800,000",
    commission: "₦420,000",
    date: "Oct 22, 2024",
    status: "Completed"
  }],
  notes: ""
}, {
  id: "SLR-0051",
  businessName: "Mega-Extrusion Ltd",
  ownerName: "Tunde Ogundimu",
  category: "Doors",
  phone: "+234 809 876 5432",
  email: "tunde@megax.com",
  bankStatus: "Verified",
  bankName: "First Bank of Nigeria",
  bankAccount: "3012345678",
  bankAccountName: "Mega-Extrusion Ltd",
  paystack: "Connected",
  paystackCode: "ACCT_xxx5678",
  totalDeals: 32,
  totalPaidOut: "₦19,200,000",
  commissionGenerated: "₦2,880,000",
  status: "Active",
  listings: [{
    name: "Hollow Core Profiles",
    price: "₦650,000/ton",
    status: "Active"
  }, {
    name: "Standard Beam Order",
    price: "₦1,200,000/ton",
    status: "Active"
  }],
  orderHistory: [{
    id: "ORD-4395",
    amount: "₦3,400,000",
    commission: "₦510,000",
    date: "Nov 15, 2024",
    status: "Completed"
  }],
  notes: ""
}, {
  id: "SLR-0078",
  businessName: "Atlas Metals Co",
  ownerName: "Yusuf Abdullahi",
  category: "Railings",
  phone: "+234 802 345 6789",
  email: "yusuf@atlasmetal.com",
  bankStatus: "Verified",
  bankName: "Access Bank",
  bankAccount: "0456789012",
  bankAccountName: "Atlas Metals Co",
  paystack: "Connected",
  paystackCode: "ACCT_xxx9012",
  totalDeals: 28,
  totalPaidOut: "₦34,100,000",
  commissionGenerated: "₦5,115,000",
  status: "Active",
  listings: [{
    name: "Aluminium Railings Set",
    price: "₦45,000/m",
    status: "Active"
  }, {
    name: "Coil Stock (1.5mm)",
    price: "₦290,000/roll",
    status: "Active"
  }],
  orderHistory: [{
    id: "ORD-4388",
    amount: "₦3,100,000",
    commission: "₦465,000",
    date: "Nov 12, 2024",
    status: "Completed"
  }],
  notes: ""
}, {
  id: "SLR-0102",
  businessName: "HollowCore Profiles",
  ownerName: "Blessing Okonkwo",
  category: "Accessories",
  phone: "+234 705 678 1234",
  email: "blessing@hollowcore.com",
  bankStatus: "Unverified",
  bankName: "UBA",
  bankAccount: "2098765431",
  bankAccountName: "HollowCore Profiles",
  paystack: "Not Connected",
  paystackCode: "—",
  totalDeals: 0,
  totalPaidOut: "₦0",
  commissionGenerated: "₦0",
  status: "Pending",
  listings: [],
  orderHistory: [],
  notes: ""
}, {
  id: "SLR-0115",
  businessName: "QuickFrame Nigeria",
  ownerName: "Ifeanyi Nwosu",
  category: "Mixed",
  phone: "+234 811 234 5678",
  email: "ifeanyi@quickframe.com",
  bankStatus: "Verified",
  bankName: "Zenith Bank",
  bankAccount: "1098765432",
  bankAccountName: "QuickFrame Nigeria",
  paystack: "Not Connected",
  paystackCode: "—",
  totalDeals: 3,
  totalPaidOut: "₦1,800,000",
  commissionGenerated: "₦270,000",
  status: "Suspended",
  listings: [{
    name: "Door Frames (Standard)",
    price: "₦8,500/unit",
    status: "Inactive"
  }],
  orderHistory: [{
    id: "ORD-4290",
    amount: "₦1,200,000",
    commission: "₦180,000",
    date: "Sep 12, 2024",
    status: "Completed"
  }],
  notes: "Suspended due to quality complaints from 2 buyers."
}];
function AdminSellersPage() {
  const [search, setSearch] = reactExports.useState("");
  const [filter, setFilter] = reactExports.useState("All Sellers");
  const [slideSeller, setSlideSeller] = reactExports.useState(null);
  const [slideNotes, setSlideNotes] = reactExports.useState("");
  const filtered = SELLERS.filter((s) => {
    const matchesSearch = s.businessName.toLowerCase().includes(search.toLowerCase()) || s.ownerName.toLowerCase().includes(search.toLowerCase()) || s.category.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All Sellers" || filter === "Active" && s.status === "Active" || filter === "Suspended" && s.status === "Suspended" || filter === "Pending Verification" && s.status === "Pending";
    return matchesSearch && matchesFilter;
  });
  const totalCommission = "₦12.5M";
  const activeCount = SELLERS.filter((s) => s.status === "Active").length;
  const pendingCount = SELLERS.filter((s) => s.status === "Pending").length;
  const [reminderOpen, setReminderOpen] = reactExports.useState(null);
  const openSlide = (s) => {
    setSlideSeller(s);
    setSlideNotes(s.notes);
  };
  const sendReminder = (seller, channel) => {
    setReminderOpen(null);
    if (channel === "email") {
      toast.success(`Email reminder sent to ${seller.email}`, {
        description: `Subject: Complete your Paystack setup — Aluminium Village`
      });
    } else {
      toast.success(`WhatsApp reminder sent to ${seller.phone}`, {
        description: `Hi ${seller.ownerName}, please log into your seller portal to complete your bank account setup for Paystack payouts.`
      });
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-start md:justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold text-white", children: "Sellers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-slate-400", children: "Manage verified sellers, their listings, and compliance status." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-2 rounded-lg bg-[#0b50c4] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4" }),
          " Export"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: "TOTAL REGISTERED SELLERS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-extrabold tracking-tight text-white", children: SELLERS.length })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: "ACTIVE SELLERS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-extrabold tracking-tight text-white", children: activeCount })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: "PENDING VERIFICATION" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 text-3xl font-extrabold tracking-tight ${pendingCount > 0 ? "text-amber-400" : "text-white"}`, children: pendingCount })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400", children: "TOTAL COMMISSION" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-3xl font-extrabold tracking-tight text-white", children: totalCommission })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", placeholder: "Search by business name, owner, or category...", value: search, onChange: (e) => setSearch(e.target.value), className: "w-full rounded-lg bg-slate-800 border border-slate-700 pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: filter, onChange: (e) => setFilter(e.target.value), className: "rounded-lg bg-slate-800 border border-slate-700 px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "All Sellers" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Active" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Suspended" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Pending Verification" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "text-left text-slate-400 border-b border-slate-700/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Seller ID" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Business" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Owner" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Category" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Bank" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Paystack" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Deals" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Commission" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold", children: "Status" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "py-3 px-4 font-semibold text-right", children: "Actions" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-semibold text-[#0EA5E9]", children: s.id }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-semibold text-white", children: s.businessName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-300", children: s.ownerName }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-400", children: s.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${s.bankStatus === "Verified" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"}`, children: s.bankStatus }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${s.paystack === "Connected" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"}`, children: s.paystack }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-slate-300 text-center", children: s.totalDeals }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 font-semibold text-white", children: s.commissionGenerated }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold ${s.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : s.status === "Suspended" ? "bg-red-500/10 text-red-400" : "bg-amber-500/10 text-amber-400"}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `size-1.5 rounded-full ${s.status === "Active" ? "bg-emerald-400" : s.status === "Suspended" ? "bg-red-400" : "bg-amber-400"}` }),
                s.status
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => openSlide(s), className: "p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors", title: "View Profile", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-4" }) }),
                s.status === "Pending" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1.5 rounded-lg hover:bg-amber-500/10 text-amber-400 hover:text-amber-300 transition-colors", title: "Verify", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4" }) }),
                s.status === "Active" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1.5 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors", title: "Suspend", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-4" }) }),
                s.status === "Suspended" && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "p-1.5 rounded-lg hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400 transition-colors", title: "Reactivate", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4" }) }),
                s.paystack === "Not Connected" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setReminderOpen(reminderOpen === s.id ? null : s.id), className: "p-1.5 rounded-lg hover:bg-amber-500/10 text-amber-400 hover:text-amber-300 transition-colors", title: "Send Reminder", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "size-4" }) }),
                  reminderOpen === s.id && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-40", onClick: () => setReminderOpen(null) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 top-full mt-1 z-50 w-52 rounded-xl bg-[#1e293b] border border-slate-700/50 shadow-2xl py-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2 border-b border-slate-700/50", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "SEND REMINDER TO" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white font-semibold mt-0.5 truncate", children: s.businessName })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => sendReminder(s, "email"), className: "w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-4 text-[#0EA5E9]" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", children: "Send Email" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 truncate", children: s.email })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => sendReminder(s, "whatsapp"), className: "w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-4 text-emerald-400" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold", children: "Send WhatsApp" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-500 truncate", children: s.phone })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] }) })
            ] }, s.id)) })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-bold tracking-wider text-slate-400 mb-4", children: "QUICK ACTIONS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0EA5E9]/40 hover:text-white hover:bg-slate-800 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4 text-[#0EA5E9]" }),
              " Add Seller Manually"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-amber-400/40 hover:text-white hover:bg-slate-800 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "size-4 text-amber-400" }),
              " Verify All Pending"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-emerald-400/40 hover:text-white hover:bg-slate-800 transition-all", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "size-4 text-emerald-400" }),
              " Export Seller List"
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    slideSeller && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex justify-end", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/60", onClick: () => setSlideSeller(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-lg bg-[#1e293b] border-l border-slate-700/50 shadow-2xl overflow-y-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#1e293b] border-b border-slate-700/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-white", children: slideSeller.businessName }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-slate-400", children: [
              slideSeller.ownerName,
              " · ",
              slideSeller.category
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSlideSeller(null), className: "p-2 rounded-lg hover:bg-slate-700 text-slate-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "PHONE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-white", children: slideSeller.phone })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-slate-500", children: "EMAIL" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm font-semibold text-white truncate", children: slideSeller.email })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-white mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "size-4 text-slate-400" }),
              " Banking Details"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Bank" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white", children: slideSeller.bankName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Account Number" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white", children: slideSeller.bankAccount })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Account Name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white", children: slideSeller.bankAccountName })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-400", children: "Paystack Subaccount" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold ${slideSeller.paystack === "Connected" ? "text-emerald-400" : "text-red-400"}`, children: slideSeller.paystackCode })
              ] })
            ] }),
            slideSeller.paystack === "Not Connected" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 rounded-lg bg-amber-500/5 border border-amber-500/20 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-amber-400", children: "Paystack Not Connected" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-slate-400 mt-0.5", children: "This seller needs to complete their bank setup." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => sendReminder(slideSeller, "email"), className: "inline-flex items-center gap-1.5 rounded-lg bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 px-3 py-1.5 text-xs font-semibold text-[#0EA5E9] hover:bg-[#0EA5E9]/20 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "size-3" }),
                  " Email"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => sendReminder(slideSeller, "whatsapp"), className: "inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-colors", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "size-3" }),
                  " WhatsApp"
                ] })
              ] })
            ] }) })
          ] }),
          slideSeller.listings.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-white mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Package, { className: "size-4 text-slate-400" }),
              " Active Listings"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: slideSeller.listings.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white text-sm", children: l.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2 py-0.5 text-[10px] font-semibold ${l.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-500/10 text-slate-400"}`, children: l.status })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-[#0EA5E9] font-medium", children: l.price })
            ] }, l.name)) })
          ] }),
          slideSeller.orderHistory.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-white mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4 text-slate-400" }),
              " Order History"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: slideSeller.orderHistory.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-slate-800/50 border border-slate-700/30 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-white text-sm", children: o.id }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-slate-400", children: o.date })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center justify-between text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-slate-300", children: o.amount }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-emerald-400", children: [
                  "Commission: ",
                  o.commission
                ] })
              ] })
            ] }, o.id)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "text-sm font-bold text-white mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4 text-slate-400" }),
              " Admin Notes"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { value: slideNotes, onChange: (e) => setSlideNotes(e.target.value), placeholder: "Add internal notes about this seller...", rows: 3, className: "w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4] resize-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-2 inline-flex items-center gap-1.5 rounded-lg bg-[#0EA5E9] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0EA5E9]/90 transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "size-3.5" }),
              " Save Notes"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  AdminSellersPage as component
};
