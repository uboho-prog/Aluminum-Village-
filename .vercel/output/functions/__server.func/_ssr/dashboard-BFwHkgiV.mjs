import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./site-layout-sJ8_umK4.mjs";
import { u as useAuthUser } from "./auth-store-DPAAHcGi.mjs";
import { J as ClipboardList, K as ChevronRight, N as Inbox, O as MapPin, Q as Plus, S as ShieldCheck, R as Pencil } from "../_libs/lucide-react.mjs";
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
const ORDERS = [{
  id: "1",
  ref: "AV-982341",
  title: "6061 Aluminium T-Slot Profile (x20)",
  date: "Jan 12, 2024",
  amount: "₦2,450,000",
  status: "Shipped"
}, {
  id: "2",
  ref: "AV-982105",
  title: "6061 Aluminium T-Slot Profile (x20)",
  date: "Dec 28, 2023",
  amount: "₦1,120,000",
  status: "Delivered"
}];
function StatusBadge({
  status
}) {
  const map = {
    Shipped: "bg-emerald-100 text-emerald-700",
    Delivered: "bg-sky-100 text-sky-700",
    Processing: "bg-amber-100 text-amber-700"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${map[status]}`, children: status });
}
function DashboardPage() {
  const user = useAuthUser();
  const navigate = useNavigate();
  const [checked, setChecked] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setChecked(true);
    if (!user) navigate({
      to: "/login",
      search: {
        redirect: "/dashboard"
      }
    });
  }, [user, navigate]);
  if (!checked || !user) return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {}) });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl font-extrabold tracking-tight", children: "Account Dashboard" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "Manage your industrial procurements, delivery addresses, and logistics inquiries." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "size-5 text-brand" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Order History" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/tracking", className: "text-sm font-semibold text-brand hover:underline", children: "View All" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: ORDERS.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/tracking", className: "group flex items-center gap-4 rounded-xl border bg-background p-3 hover:border-brand/40 hover:shadow-sm transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-muted text-[10px] font-semibold text-muted-foreground", children: "img" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold truncate", children: o.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
                "ID: #",
                o.ref,
                " • ",
                o.date
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: o.amount }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { status: o.status }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "size-5 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all" })
          ] }, o.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "size-5 text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Return Requests" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-dashed p-10 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-3 grid size-10 place-items-center rounded-lg bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Inbox, { className: "size-5 text-muted-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "No active return requests" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-1.5 max-w-sm text-sm text-muted-foreground", children: "Need to initiate a return? Select an item from your order history to start the process." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "mt-5 inline-flex items-center rounded-md border border-brand bg-background px-5 py-2 text-sm font-semibold text-brand hover:bg-brand hover:text-brand-foreground active:scale-[0.98] transition-colors", children: "Initiate Return" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 mb-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-5 text-brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Address Book" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AddressCard, { tag: "SHIPPING DEFAULT", title: "Corporate HQ - Logistics Bay", lines: ["4500 Industrial Parkway", "Suite 200, Building B", "Detroit, MI 48201"], highlight: true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AddressCard, { tag: "BILLING ADDRESS", title: "Aluminium Village Procurement", lines: ["4500 Industrial Parkway", "PO Box 1289", "Detroit, MI 48201"] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "w-full inline-flex items-center justify-center gap-1.5 rounded-md border bg-background px-4 py-2.5 text-sm font-semibold hover:bg-secondary hover:border-brand/40 active:scale-[0.98] transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "size-4" }),
              " Add New Address"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-primary text-primary-foreground p-6 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold", children: "Verified Account" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm opacity-80", children: "Your account is certified for wholesale pricing and net-30 payment terms." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-lg bg-white/10 px-3 py-2.5 flex items-center justify-between text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-80", children: "Dedicated Agent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: "Marcus Chen" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "mt-4 w-full rounded-md bg-emerald-400 px-4 py-2.5 text-sm font-bold text-emerald-950 hover:bg-emerald-300 active:scale-[0.98] transition-colors", children: "Contact Specialist" })
        ] })
      ] })
    ] })
  ] }) });
}
function AddressCard({
  tag,
  title,
  lines,
  highlight
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border p-4 ${highlight ? "bg-secondary/60" : "bg-background"}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold tracking-wider text-brand", children: tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Edit address", className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "size-3.5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground leading-relaxed", children: lines.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: l }, l)) })
  ] });
}
export {
  DashboardPage as component
};
