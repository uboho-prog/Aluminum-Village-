import { createFileRoute } from "@tanstack/react-router";
import { BarChart3, TrendingUp, TrendingDown, Calendar, AlertTriangle } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics | Aluminium Village Admin" },
      { name: "description", content: "Track platform performance, revenue trends, and seller activity." },
    ],
  }),
  component: AdminAnalyticsPage,
});

const METRICS = [
  { label: "TOTAL REVENUE ALL TIME", value: "₦428.5M", change: "+18.2%", up: true },
  { label: "TOTAL COMMISSION EARNED", value: "₦64.3M", change: "+15.7%", up: true },
  { label: "TOTAL DEALS CLOSED", value: "1,247", change: "+12.4%", up: true },
  { label: "AVERAGE DEAL VALUE", value: "₦3.4M", change: "+5.1%", up: true },
  { label: "CUSTOMER SATISFACTION", value: "94.2%", change: "+1.8%", up: true },
];

const MONTHLY_REVENUE = [
  { month: "Dec", revenue: 68, commission: 10.2 },
  { month: "Jan", revenue: 82, commission: 12.3 },
  { month: "Feb", revenue: 75, commission: 11.3 },
  { month: "Mar", revenue: 95, commission: 14.3 },
  { month: "Apr", revenue: 110, commission: 16.5 },
  { month: "May", revenue: 98, commission: 14.7 },
  { month: "Jun", revenue: 82, commission: 12.3 },
  { month: "Jul", revenue: 115, commission: 17.3 },
  { month: "Aug", revenue: 130, commission: 19.5 },
  { month: "Sep", revenue: 125, commission: 18.8 },
  { month: "Oct", revenue: 142, commission: 21.3 },
  { month: "Nov", revenue: 158, commission: 23.7 },
];

const DEAL_STATUS = [
  { label: "Completed", count: 892, color: "#10b981" },
  { label: "In Escrow", count: 56, color: "#f59e0b" },
  { label: "Disputed", count: 23, color: "#ef4444" },
  { label: "Refunded", count: 18, color: "#64748b" },
];

const CATEGORIES = [
  { name: "Windows", revenue: 124 },
  { name: "Doors", revenue: 89 },
  { name: "Partitions", revenue: 76 },
  { name: "Railings", revenue: 62 },
  { name: "Accessories", revenue: 48 },
  { name: "Services", revenue: 30 },
];

const NEW_USERS = [
  { month: "Jul", customers: 45, sellers: 8 },
  { month: "Aug", customers: 62, sellers: 12 },
  { month: "Sep", customers: 58, sellers: 10 },
  { month: "Oct", customers: 78, sellers: 15 },
  { month: "Nov", customers: 92, sellers: 18 },
  { month: "Dec", customers: 68, sellers: 11 },
];

const TOP_SELLERS = [
  { rank: 1, name: "Atlas Metals Co", category: "Railings", deals: 28, revenue: "₦34.1M", commission: "₦5.1M", avgDeal: "₦1.22M" },
  { rank: 2, name: "Precision Alum Industries", category: "Windows", deals: 45, revenue: "₦28.4M", commission: "₦4.3M", avgDeal: "₦0.63M" },
  { rank: 3, name: "Mega-Extrusion Ltd", category: "Doors", deals: 32, revenue: "₦19.2M", commission: "₦2.9M", avgDeal: "₦0.60M" },
  { rank: 4, name: "AluTech Fabricators", category: "Mixed", deals: 18, revenue: "₦11.8M", commission: "₦1.8M", avgDeal: "₦0.66M" },
  { rank: 5, name: "HollowCore Profiles", category: "Accessories", deals: 12, revenue: "₦8.5M", commission: "₦1.3M", avgDeal: "₦0.71M" },
];

const DISPUTES_SUMMARY = {
  totalRaised: 23,
  resolved: 15,
  pending: 8,
  totalRefunded: "₦18,200,000",
  refundRate: "1.4%",
};

function AdminAnalyticsPage() {
  const [range, setRange] = useState("Last 12 months");
  const maxRevenue = Math.max(...MONTHLY_REVENUE.map((m) => m.revenue));
  const maxUsers = Math.max(...NEW_USERS.map((m) => m.customers));
  const maxCat = Math.max(...CATEGORIES.map((c) => c.revenue));
  const totalDeals = DEAL_STATUS.reduce((s, d) => s + d.count, 0);

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Analytics</h1>
            <p className="mt-1 text-sm text-slate-400">
              Track platform performance, revenue trends, and seller activity.
            </p>
          </div>
          <select
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="inline-flex items-center gap-2 rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
          >
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last 12 months</option>
            <option>Custom range</option>
          </select>
        </div>

        {/* Row 1: Metric Cards */}
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {METRICS.map((m) => (
            <div key={m.label} className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
              <div className="text-[11px] font-bold tracking-wider text-slate-400">{m.label}</div>
              <div className="mt-2 text-2xl font-extrabold tracking-tight text-white">{m.value}</div>
              <div className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold ${m.up ? "text-emerald-400" : "text-red-400"}`}>
                {m.up ? <TrendingUp className="size-3.5" /> : <TrendingDown className="size-3.5" />}
                {m.change}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Revenue Line Chart + Deals Donut */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Revenue Over Time */}
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white">Revenue Over Time</h3>
            <div className="text-[11px] font-semibold tracking-wider text-slate-500 mt-0.5">MONTHLY REVENUE & COMMISSION (₦ MILLIONS)</div>
            <div className="flex items-center gap-4 mt-3 text-xs">
              <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#0EA5E9]" /> Revenue</span>
              <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-amber-400" /> Commission</span>
            </div>
            <svg viewBox="0 0 600 200" className="mt-4 w-full h-48">
              <defs>
                <linearGradient id="revG" x1="0" x2="1">
                  <stop offset="0" stopColor="#0EA5E9" />
                  <stop offset="1" stopColor="#0284c7" />
                </linearGradient>
              </defs>
              <path
                d={`M0,${200 - (MONTHLY_REVENUE[0].revenue / maxRevenue) * 180} ${MONTHLY_REVENUE.map((m, i) => `L${i * (600 / 11)},${200 - (m.revenue / maxRevenue) * 180}`).join(" ")}`}
                stroke="url(#revG)" strokeWidth="2.5" fill="none"
              />
              <path
                d={`M0,${200 - (MONTHLY_REVENUE[0].commission / maxRevenue) * 180} ${MONTHLY_REVENUE.map((m, i) => `L${i * (600 / 11)},${200 - (m.commission / maxRevenue) * 180}`).join(" ")}`}
                stroke="#fbbf24" strokeWidth="2.5" fill="none"
              />
              {MONTHLY_REVENUE.map((m, i) => (
                <text key={i} x={i * (600 / 11)} y="198" fill="#64748b" fontSize="9" textAnchor="middle">{m.month}</text>
              ))}
            </svg>
          </div>

          {/* Deals by Status */}
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white">Deals by Status</h3>
            <div className="relative mx-auto size-48 mt-4">
              <svg viewBox="0 0 36 36" className="size-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                {(() => {
                  let offset = 0;
                  return DEAL_STATUS.map((d) => {
                    const pct = (d.count / totalDeals) * 100;
                    const el = (
                      <circle key={d.label} cx="18" cy="18" r="15.9" fill="none" stroke={d.color} strokeWidth="4"
                        strokeDasharray={`${pct} ${100 - pct}`} strokeDashoffset={`${-offset}`} />
                    );
                    offset += pct;
                    return el;
                  });
                })()}
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="text-2xl font-extrabold text-white">{totalDeals.toLocaleString()}</div>
                  <div className="text-[9px] tracking-wider text-slate-500">TOTAL DEALS</div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
              {DEAL_STATUS.map((d) => (
                <div key={d.label} className="flex items-center gap-2">
                  <span className="size-2 rounded-full" style={{ backgroundColor: d.color }} />
                  <span className="text-slate-300">{d.label}</span>
                  <span className="ml-auto font-semibold text-white">{d.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 3: Category Bar Chart + New Users Bar Chart */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Top Categories by Revenue */}
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white">Top Categories by Revenue</h3>
            <div className="mt-4 space-y-3">
              {CATEGORIES.map((c) => (
                <div key={c.name}>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-slate-300">{c.name}</span>
                    <span className="font-semibold text-white">₦{c.revenue}M</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-700">
                    <div className="h-full rounded-full bg-[#0EA5E9] transition-all" style={{ width: `${(c.revenue / maxCat) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Users & Sellers */}
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white">New Users & Sellers</h3>
            <div className="text-[11px] font-semibold tracking-wider text-slate-500 mt-0.5">LAST 6 MONTHS</div>
            <div className="flex items-center gap-4 mt-3 text-xs">
              <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-[#0EA5E9]" /> Customers</span>
              <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-amber-400" /> Sellers</span>
            </div>
            <div className="flex items-end gap-2 mt-4 h-40">
              {NEW_USERS.map((m) => (
                <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                  <div className="flex items-end gap-0.5 w-full">
                    <div className="flex-1 rounded-t bg-[#0EA5E9] transition-all hover:bg-[#38bdf8]"
                      style={{ height: `${(m.customers / maxUsers) * 100}%` }} />
                    <div className="flex-1 rounded-t bg-amber-400 transition-all hover:bg-amber-300"
                      style={{ height: `${(m.sellers / maxUsers) * 100}%` }} />
                  </div>
                  <span className="text-[10px] font-medium text-slate-400">{m.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Row 4: Top Sellers Table */}
        <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
          <h3 className="text-lg font-bold text-white mb-4">Top Sellers by Revenue</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400 border-b border-slate-700/50">
                  <th className="py-2.5 px-4 font-semibold">Rank</th>
                  <th className="py-2.5 px-4 font-semibold">Seller Name</th>
                  <th className="py-2.5 px-4 font-semibold">Category</th>
                  <th className="py-2.5 px-4 font-semibold">Total Deals</th>
                  <th className="py-2.5 px-4 font-semibold">Gross Revenue</th>
                  <th className="py-2.5 px-4 font-semibold">Commission Generated</th>
                  <th className="py-2.5 px-4 font-semibold">Avg Deal Value</th>
                </tr>
              </thead>
              <tbody>
                {TOP_SELLERS.map((s) => (
                  <tr key={s.rank} className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors">
                    <td className="py-3 px-4 font-bold text-white">#{s.rank}</td>
                    <td className="py-3 px-4 font-semibold text-white">{s.name}</td>
                    <td className="py-3 px-4 text-slate-400">{s.category}</td>
                    <td className="py-3 px-4 text-slate-300">{s.deals}</td>
                    <td className="py-3 px-4 font-semibold text-white">{s.revenue}</td>
                    <td className="py-3 px-4 text-[#0EA5E9] font-semibold">{s.commission}</td>
                    <td className="py-3 px-4 text-slate-300">{s.avgDeal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Row 5: Disputes & Refunds */}
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="size-5 text-red-400" /> Disputes Summary
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 text-center">
                <div className="text-2xl font-extrabold text-white">{DISPUTES_SUMMARY.totalRaised}</div>
                <div className="text-[10px] font-bold tracking-wider text-slate-500 mt-1">TOTAL RAISED</div>
              </div>
              <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 text-center">
                <div className="text-2xl font-extrabold text-emerald-400">{DISPUTES_SUMMARY.resolved}</div>
                <div className="text-[10px] font-bold tracking-wider text-slate-500 mt-1">RESOLVED</div>
              </div>
              <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 text-center">
                <div className={`text-2xl font-extrabold ${DISPUTES_SUMMARY.pending > 0 ? "text-red-400" : "text-white"}`}>
                  {DISPUTES_SUMMARY.pending}
                </div>
                <div className="text-[10px] font-bold tracking-wider text-slate-500 mt-1">PENDING</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
            <h3 className="text-lg font-bold text-white mb-4">Refunds Summary</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 text-center">
                <div className="text-2xl font-extrabold text-white">{DISPUTES_SUMMARY.totalRefunded}</div>
                <div className="text-[10px] font-bold tracking-wider text-slate-500 mt-1">TOTAL REFUNDED</div>
              </div>
              <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 text-center">
                <div className="text-2xl font-extrabold text-white">{DISPUTES_SUMMARY.refundRate}</div>
                <div className="text-[10px] font-bold tracking-wider text-slate-500 mt-1">REFUND RATE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
