import { Link, useNavigate, useMatchRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  LayoutDashboard,
  Users,
  Package,
  DollarSign,
  Settings,
  LogOut,
  ChevronLeft,
  Shield,
  Menu,
  X,
  BarChart3,
  Bell,
  Search,
} from "lucide-react";
import logoUrl from "@/assets/logo.png";
import { useAuthUser, setAuthUser } from "@/lib/auth-store";

const sidebarNav = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/sellers", label: "Sellers", icon: Package },
  { to: "/admin/deals", label: "Deals", icon: DollarSign },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

function AdminNavItem({
  to,
  label,
  icon: Icon,
  exact,
  collapsed,
}: {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  exact?: boolean;
  collapsed?: boolean;
}) {
  const matchRoute = useMatchRoute();
  const isActive = matchRoute({ to, fuzzy: !exact });

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
        isActive
          ? "bg-[#0b50c4] text-white shadow-md shadow-[#0b50c4]/25"
          : "text-slate-400 hover:bg-slate-700/50 hover:text-white"
      }`}
      title={collapsed ? label : undefined}
    >
      <Icon className="size-5 shrink-0" />
      {!collapsed && <span>{label}</span>}
    </Link>
  );
}

export function AdminLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = useAuthUser();
  const navigate = useNavigate();

  const sidebar = (
    <div className="flex flex-col h-full">
      {/* Logo area */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-slate-700/50">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt="Aluminium Village"
            className="size-9 object-contain"
          />
          {!collapsed && (
            <div>
              <div className="text-sm font-bold text-white tracking-tight">
                ALUMINIUM VILLAGE
              </div>
              <div className="text-[10px] font-semibold tracking-[0.2em] text-slate-400">
                ADMIN NERVE
              </div>
            </div>
          )}
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {sidebarNav.map((item) => (
          <AdminNavItem
            key={item.to}
            to={item.to}
            label={item.label}
            icon={item.icon}
            exact={item.exact}
            collapsed={collapsed}
          />
        ))}
      </nav>

      {/* Back to site + logout */}
      <div className="px-3 py-4 border-t border-slate-700/50 space-y-1">
        <Link
          to="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-slate-700/50 hover:text-white transition-colors"
        >
          <ChevronLeft className="size-5 shrink-0" />
          {!collapsed && <span>Back to Site</span>}
        </Link>
        <button
          type="button"
          onClick={() => {
            setAuthUser(null);
            navigate({ to: "/admin-login" });
          }}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-colors w-full"
        >
          <LogOut className="size-5 shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-[#0f172a] text-white">
      {/* Desktop sidebar */}
      <aside
        className={`hidden lg:flex flex-col bg-[#1e293b] border-r border-slate-700/50 transition-all duration-300 ${
          collapsed ? "w-[72px]" : "w-64"
        }`}
      >
        {sidebar}
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/60"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-[#1e293b] border-r border-slate-700/50">
            <div className="flex items-center justify-end px-4 py-3">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400"
              >
                <X className="size-5" />
              </button>
            </div>
            {sidebar}
          </aside>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-16 flex items-center justify-between px-4 sm:px-6 bg-[#1e293b]/80 backdrop-blur border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-lg hover:bg-slate-700 text-slate-400 lg:hidden"
            >
              <Menu className="size-5" />
            </button>
            <button
              onClick={() => setCollapsed((c) => !c)}
              className="p-2 rounded-lg hover:bg-slate-700 text-slate-400 hidden lg:block"
            >
              <ChevronLeft
                className={`size-5 transition-transform ${
                  collapsed ? "rotate-180" : ""
                }`}
              />
            </button>
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search admin..."
                className="w-64 rounded-lg bg-slate-800 border border-slate-700 pl-9 pr-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-lg hover:bg-slate-700 text-slate-400">
              <Bell className="size-5" />
              <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-red-500" />
            </button>
            <div className="flex items-center gap-2 rounded-lg bg-slate-800 px-3 py-2 border border-slate-700">
              <Shield className="size-4 text-[#0b50c4]" />
              <div className="hidden sm:block">
                <div className="text-xs font-semibold text-white">
                  {user?.name ?? "Admin"}
                </div>
                <div className="text-[10px] text-slate-400">
                  {user?.email ?? "admin@aluminiumvillage.com"}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
