import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Download,
  TrendingUp,
  Info,
  CheckCircle2,
  Link2,
  ArrowUpRight,
  Users,
  Package,
  DollarSign,
  Eye,
} from "lucide-react";
import { getAuthUser, ADMIN_ROLE_LABEL, type AdminRole } from "@/lib/auth-store";
import { canAccessAdminSection, isAdminRole } from "@/lib/admin-access";

export const Route = createFileRoute("/admin/")({
  head: () => ({
    meta: [
      { title: "Admin Dashboard | Aluminium Village" },
      {
        name: "description",
        content: "Administrative nerve center for Aluminium Village.",
      },
    ],
  }),
  component: AdminDashboardPage,
});

const STATS = [
  {
    label: "COMMISSION REVENUE",
    value: "₦142,500,000",
    trend: "+12.5% vs last month",
    icon: TrendingUp,
    trendColor: "text-emerald-400",
    link: "/admin/analytics",
  },
  {
    label: "MONTHLY VOLUME",
    value: "842 Tons",
    trend: "+4.2% vs last month",
    icon: TrendingUp,
    trendColor: "text-emerald-400",
    link: "/admin/analytics",
  },
  {
    label: "ACTIVE DEALS",
    value: "56",
    trend: "8 awaiting escrow release",
    icon: Info,
    trendColor: "text-sky-400",
    link: "/admin/deals",
  },
  {
    label: "VERIFIED SELLERS",
    value: "124",
    trend: "98% compliance rate",
    icon: CheckCircle2,
    trendColor: "text-emerald-400",
    link: "/admin/sellers",
  },
];

type Deal = {
  id: string;
  buyer: string;
  seller: string;
  amount: string;
  status: "Pending" | "Secured" | "Released";
};

const DEALS: Deal[] = [
  {
    id: "ALV-9821",
    buyer: "Forge Dynamics",
    seller: "Precision Alum",
    amount: "₦24,500,000",
    status: "Pending",
  },
  {
    id: "ALV-9820",
    buyer: "Structur-All Inc",
    seller: "Mega-Extrusion",
    amount: "₦12,800,000",
    status: "Secured",
  },
  {
    id: "ALV-9819",
    buyer: "Urban Build Co",
    seller: "Atlas Metals",
    amount: "₦45,000,000",
    status: "Released",
  },
];

const RECENT_CUSTOMERS = [
  {
    id: "USR-0034",
    name: "Emeka Adeyemi",
    location: "Abuja",
    orders: 5,
    totalSpent: "₦9.2M",
    lastOrder: "Nov 15",
  },
  {
    id: "USR-0056",
    name: "Fatima Bello",
    location: "Port Harcourt",
    orders: 12,
    totalSpent: "₦34.8M",
    lastOrder: "Nov 20",
  },
  {
    id: "USR-0103",
    name: "Yusuf Abdullahi",
    location: "Kano",
    orders: 6,
    totalSpent: "₦12.6M",
    lastOrder: "Nov 12",
  },
  {
    id: "USR-0012",
    name: "Chidinma Okafor",
    location: "Lagos",
    orders: 8,
    totalSpent: "₦18.4M",
    lastOrder: "Nov 18",
  },
];

function statusDot(s: Deal["status"]) {
  return s === "Pending"
    ? "bg-muted-foreground"
    : s === "Secured"
      ? "bg-sky-500"
      : "bg-emerald-500";
}

function AdminDashboardPage() {
  // Sync read (like AdminLayout) so the correct suite view paints on the
  // very first render instead of flashing the full overview first.
  const stored = getAuthUser();
  const role: AdminRole | null = stored && isAdminRole(stored.role) ? stored.role : null;

  const can = (section: string) => canAccessAdminSection(role, section);
  const showDeals = can("/admin/deals");
  const showUsers = can("/admin/users");
  const showSellers = can("/admin/sellers");

  // Suites only see the stats their mandate covers; unknown role renders
  // nothing (AdminLayout's guard will have already redirected).
  const stats = STATS.filter((s) => {
    if (s.link === "/admin/analytics") return can("/admin/analytics");
    if (s.link === "/admin/deals") return showDeals;
    if (s.link === "/admin/sellers") return showSellers;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">
            {role ? ADMIN_ROLE_LABEL[role] : "Admin"} Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-400">
            {role === "business"
              ? "Manage sellers, deals, and escrow releases from one hub."
              : role === "individual"
                ? "Track customers, orders, and platform analytics."
                : role === "overall"
                  ? "Full platform oversight: users, sellers, deals, and settings."
                  : "Manage your industrial ecosystem, sales pipeline, and logistics from a central hub."}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300">
            <Calendar className="size-4 text-slate-500" /> Oct 24 – Nov 24, 2024
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-[#0b50c4] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25">
            <Download className="size-4" /> Export Report
          </button>
        </div>
      </div>
      {/* Stat cards */}
      <div
        className={`grid gap-4 ${stats.length >= 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2"}`}
      >
        {stats.map((s) => (
          <Link
            key={s.label}
            to={s.link}
            className="group rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5 hover:border-[#0b50c4]/40 hover:shadow-lg hover:shadow-[#0b50c4]/5 hover:-translate-y-0.5 transition-all"
          >
            <div className="flex items-start justify-between">
              <div className="text-[11px] font-bold tracking-wider text-slate-400">{s.label}</div>
              <ArrowUpRight className="size-4 text-slate-600 group-hover:text-[#0b50c4] transition-colors" />
            </div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">{s.value}</div>
            <div
              className={`mt-3 inline-flex items-center gap-1.5 text-xs font-medium ${s.trendColor}`}
            >
              <s.icon className="size-3.5" /> {s.trend}
            </div>
          </Link>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recent Deals — Business & Overall suites only */}
        <div className="lg:col-span-2 rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
          {showDeals ? (
            <>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-white">Recent Deals</h2>
                <Link
                  to="/admin/deals"
                  className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-400 hover:bg-sky-500/20 transition-colors"
                >
                  <Eye className="size-3" /> View All
                </Link>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-400 border-b border-slate-700/50">
                      <th className="py-2.5 pr-3 font-semibold">Transaction ID</th>
                      <th className="py-2.5 pr-3 font-semibold">Buyer</th>
                      <th className="py-2.5 pr-3 font-semibold">Seller</th>
                      <th className="py-2.5 pr-3 font-semibold">Amount</th>
                      <th className="py-2.5 pr-3 font-semibold">Status</th>
                      <th className="py-2.5 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {DEALS.map((d) => (
                      <tr
                        key={d.id}
                        className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors"
                      >
                        <td className="py-3 pr-3 font-semibold text-white">#{d.id}</td>
                        <td className="py-3 pr-3 text-slate-300">{d.buyer}</td>
                        <td className="py-3 pr-3 text-slate-300">{d.seller}</td>
                        <td className="py-3 pr-3 font-semibold text-white">{d.amount}</td>
                        <td className="py-3 pr-3">
                          <span className="inline-flex items-center gap-1.5 text-slate-300">
                            <span className={`size-1.5 rounded-full ${statusDot(d.status)}`} />
                            {d.status}
                          </span>
                        </td>
                        <td className="py-3 text-right">
                          {d.status === "Released" ? (
                            <span className="text-slate-500">Completed</span>
                          ) : (
                            <div className="inline-flex flex-col items-end gap-0.5">
                              <button className="text-[#0b50c4] font-semibold hover:underline">
                                Release Payment
                              </button>
                              {d.status === "Secured" && (
                                <button className="text-rose-400 font-semibold hover:underline">
                                  Refund
                                </button>
                              )}
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/admin/deals"
                  className="text-sm font-semibold text-[#0b50c4] hover:underline"
                >
                  View All Transactions →
                </Link>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold text-white">Recent Customers</h2>
              <div className="mt-5 space-y-3">
                {RECENT_CUSTOMERS.map((c) => (
                  <div
                    key={c.id}
                    className="flex items-center gap-4 rounded-lg bg-slate-800/50 border border-slate-700/30 p-3"
                  >
                    <span className="grid place-items-center size-9 rounded-full bg-[#0b50c4]/15 text-sm font-bold text-[#4d8dff] shrink-0">
                      {c.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-white truncate">{c.name}</div>
                      <div className="text-xs text-slate-400 truncate">
                        {c.location} · Last order {c.lastOrder}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-semibold text-white">{c.totalSpent}</div>
                      <div className="text-[11px] text-slate-500">{c.orders} orders</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Link
                  to="/admin/users"
                  className="text-sm font-semibold text-[#0b50c4] hover:underline"
                >
                  View All Customers →
                </Link>
              </div>
            </>
          )}
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
            <div className="text-[11px] font-bold tracking-wider text-slate-400 mb-4">
              QUICK ACTIONS
            </div>
            <div className="space-y-2">
              {showUsers && (
                <Link
                  to="/admin/users"
                  className="flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0b50c4]/40 hover:text-white hover:bg-slate-800 transition-all"
                >
                  <Users className="size-4 text-[#0b50c4]" />
                  Manage Users
                  <ArrowUpRight className="size-3.5 ml-auto text-slate-600" />
                </Link>
              )}
              {showSellers && (
                <Link
                  to="/admin/sellers"
                  className="flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0b50c4]/40 hover:text-white hover:bg-slate-800 transition-all"
                >
                  <Package className="size-4 text-[#0b50c4]" />
                  Verify Sellers
                  <ArrowUpRight className="size-3.5 ml-auto text-slate-600" />
                </Link>
              )}
              {showDeals && (
                <Link
                  to="/admin/deals"
                  className="flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0b50c4]/40 hover:text-white hover:bg-slate-800 transition-all"
                >
                  <DollarSign className="size-4 text-[#0b50c4]" />
                  Escrow Management
                  <ArrowUpRight className="size-3.5 ml-auto text-slate-600" />
                </Link>
              )}
              {can("/admin/analytics") && (
                <Link
                  to="/admin/analytics"
                  className="flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0b50c4]/40 hover:text-white hover:bg-slate-800 transition-all"
                >
                  <TrendingUp className="size-4 text-[#0b50c4]" />
                  Open Analytics
                  <ArrowUpRight className="size-3.5 ml-auto text-slate-600" />
                </Link>
              )}
            </div>
          </div>

          {/* Payment Generator — Business & Overall suites only */}
          {showDeals && (
            <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-slate-400 mb-3">
                <Link2 className="size-3.5" /> PAYMENT GENERATOR
              </div>
              <label className="block text-xs font-medium text-slate-400 mb-1">
                Invoice Amount (NGN)
              </label>
              <input
                type="text"
                placeholder="e.g. 5,000,000"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
              />
              <label className="block mt-3 text-xs font-medium text-slate-400 mb-1">
                Reference
              </label>
              <input
                type="text"
                placeholder="Project or Order ID"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
              />
              <button className="mt-4 w-full rounded-lg bg-[#0b50c4] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25">
                Generate Secure Link
              </button>
            </div>
          )}
        </div>
      </div>{" "}
      {/* Throughput */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-2xl bg-gradient-to-br from-[#0b50c4] to-[#1a3a7a] p-6 shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white">System Throughput Analytics</h3>
              <div className="text-[11px] font-semibold tracking-wider text-white/60 mt-0.5">
                REVENUE VS VOLUME PERFORMANCE
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-fuchsia-400" /> Revenue
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-cyan-400" /> Volume
              </span>
            </div>
          </div>
          <svg viewBox="0 0 600 200" className="mt-4 w-full h-44">
            <defs>
              <linearGradient id="rev" x1="0" x2="1">
                <stop offset="0" stopColor="#d946ef" />
                <stop offset="1" stopColor="#a855f7" />
              </linearGradient>
            </defs>
            <path
              d="M0,160 C100,150 180,90 280,70 C400,45 500,40 600,30"
              stroke="url(#rev)"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0,170 C100,160 200,130 300,120 C420,108 520,100 600,90"
              stroke="#22d3ee"
              strokeWidth="3"
              fill="none"
            />
            <g transform="translate(380,55)">
              <rect width="90" height="42" rx="6" fill="rgba(255,255,255,0.08)" />
              <text x="10" y="16" fill="#a78bfa" fontSize="10" fontWeight="700">
                OCTOBER
              </text>
              <text x="10" y="33" fill="#fff" fontSize="14" fontWeight="700">
                ₦142.5M
              </text>
            </g>
          </svg>
          <div className="mt-2 flex items-center justify-between text-[10px] text-white/60">
            <Link to="/admin/analytics" className="hover:text-white transition-colors">
              Verified Fabricators Overview →
            </Link>
            <div className="flex gap-4">
              {["JUN", "JUL", "AUG", "SEP", "OCT", "NOV"].map((m) => (
                <span key={m} className={m === "OCT" ? "text-white font-bold" : ""}>
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-gradient-to-br from-[#0b50c4] to-[#1a3a7a] p-6 shadow-sm">
          <div className="text-[11px] font-bold tracking-wider text-white/80 mb-4">
            ACTIVITY DISTRIBUTION
          </div>
          <div className="relative mx-auto size-44">
            <svg viewBox="0 0 36 36" className="size-full -rotate-90">
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="4"
              />
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#a855f7"
                strokeWidth="4"
                strokeDasharray="55 100"
              />
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="4"
                strokeDasharray="25 100"
                strokeDashoffset="-55"
              />
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#64748b"
                strokeWidth="4"
                strokeDasharray="20 100"
                strokeDashoffset="-80"
              />
            </svg>
            <div className="absolute inset-0 grid place-items-center text-center">
              <div>
                <div className="text-3xl font-extrabold text-white">842</div>
                <div className="text-[10px] tracking-wider text-white/60">TOTAL TONS</div>
              </div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
            <Legend color="bg-fuchsia-400" label="Marketplace" />
            <Legend color="bg-cyan-400" label="Custom Fab" />
            <Legend color="bg-slate-400" label="Logistics" />
            <Legend color="bg-slate-500" label="Other" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`size-2 rounded-full ${color}`} />
      <span className="text-white/80">{label}</span>
    </div>
  );
}
