import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { O as Outlet, d as useNavigate, L as Link, e as useMatchRoute } from "../_libs/tanstack__react-router.mjs";
import { l as logoUrl } from "./logo-DOvfSOrI.mjs";
import { u as useAuthUser, s as setAuthUser } from "./auth-store-DPAAHcGi.mjs";
import { L as LayoutDashboard, U as Users, P as Package, D as DollarSign, r as ChartColumn, s as Settings, t as ChevronLeft, k as LogOut, X, u as Menu, e as Search, v as Bell, m as Shield } from "../_libs/lucide-react.mjs";
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
const sidebarNav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/sellers", label: "Sellers", icon: Package },
  { to: "/admin/deals", label: "Deals", icon: DollarSign },
  { to: "/admin/analytics", label: "Analytics", icon: ChartColumn },
  { to: "/admin/settings", label: "Settings", icon: Settings }
];
function AdminNavItem({
  to,
  label,
  icon: Icon,
  exact,
  collapsed
}) {
  const matchRoute = useMatchRoute();
  const isActive = matchRoute({ to, fuzzy: !exact });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to,
      className: `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${isActive ? "bg-[#0b50c4] text-white shadow-md shadow-[#0b50c4]/25" : "text-slate-400 hover:bg-slate-700/50 hover:text-white"}`,
      title: collapsed ? label : void 0,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-5 shrink-0" }),
        !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: label })
      ]
    }
  );
}
function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = reactExports.useState(false);
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const user = useAuthUser();
  const navigate = useNavigate();
  const sidebar = /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 px-4 py-5 border-b border-slate-700/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: logoUrl,
          alt: "Aluminium Village",
          className: "size-9 object-contain"
        }
      ),
      !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-white tracking-tight", children: "ALUMINIUM VILLAGE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-semibold tracking-[0.2em] text-slate-400", children: "ADMIN NERVE" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex-1 px-3 py-4 space-y-1 overflow-y-auto", children: sidebarNav.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      AdminNavItem,
      {
        to: item.to,
        label: item.label,
        icon: item.icon,
        exact: item.exact,
        collapsed
      },
      item.to
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-4 border-t border-slate-700/50 space-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/",
          className: "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-700/50 hover:text-white transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "size-5 shrink-0" }),
            !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Back to Site" })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            setAuthUser(null);
            navigate({ to: "/admin-login" });
          },
          className: "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors w-full",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "size-5 shrink-0" }),
            !collapsed && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sign Out" })
          ]
        }
      )
    ] })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex bg-[#0f172a] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "aside",
      {
        className: `hidden lg:flex flex-col bg-[#1e293b] border-r border-slate-700/50 transition-all duration-300 ${collapsed ? "w-[72px]" : "w-64"}`,
        children: sidebar
      }
    ),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 lg:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 bg-black/60",
          onClick: () => setMobileOpen(false)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "absolute left-0 top-0 bottom-0 w-64 bg-[#1e293b] border-r border-slate-700/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-end px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setMobileOpen(false),
            className: "p-1.5 rounded-lg hover:bg-slate-700 text-slate-400",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "size-5" })
          }
        ) }),
        sidebar
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 flex flex-col min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 h-16 flex items-center justify-between px-4 sm:px-6 bg-[#1e293b]/80 backdrop-blur border-b border-slate-700/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setMobileOpen(true),
              className: "p-2 rounded-lg hover:bg-slate-700 text-slate-400 lg:hidden",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "size-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setCollapsed((c) => !c),
              className: "p-2 rounded-lg hover:bg-slate-700 text-slate-400 hidden lg:block",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronLeft,
                {
                  className: `size-5 transition-transform ${collapsed ? "rotate-180" : ""}`
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden sm:block", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                placeholder: "Search admin...",
                className: "w-64 rounded-lg bg-slate-800 border border-slate-700 pl-9 pr-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "relative p-2 rounded-lg hover:bg-slate-700 text-slate-400", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "size-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1.5 right-1.5 size-2 rounded-full bg-red-500" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 border border-slate-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "size-4 text-[#0b50c4]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:block", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-white", children: user?.name ?? "Admin" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-slate-400", children: user?.email ?? "admin@aluminiumvillage.com" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-4 sm:p-6 overflow-auto", children })
    ] })
  ] });
}
function AdminLayoutRoute() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AdminLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
export {
  AdminLayoutRoute as component
};
