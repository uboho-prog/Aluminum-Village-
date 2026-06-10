import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Calendar, Download, TrendingUp, Info, CheckCircle2, Link2 } from "lucide-react";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

const STATS = [
  { label: "COMMISSION REVENUE", value: "₦142,500,000", trend: "+12.5% vs last month", icon: TrendingUp, trendColor: "text-emerald-600" },
  { label: "MONTHLY VOLUME", value: "842 Tons", trend: "+4.2% vs last month", icon: TrendingUp, trendColor: "text-emerald-600" },
  { label: "ACTIVE DEALS", value: "56", trend: "8 awaiting escrow release", icon: Info, trendColor: "text-sky-600" },
  { label: "VERIFIED SELLERS", value: "124", trend: "98% compliance rate", icon: CheckCircle2, trendColor: "text-emerald-600" },
];

type Deal = {
  id: string;
  buyer: string;
  seller: string;
  amount: string;
  status: "Pending" | "Secured" | "Released";
};

const DEALS: Deal[] = [
  { id: "ALV-9821", buyer: "Forge Dynamics", seller: "Precision Alum", amount: "₦24,500,000", status: "Pending" },
  { id: "ALV-9820", buyer: "Structur-All Inc", seller: "Mega-Extrusion", amount: "₦12,800,000", status: "Secured" },
  { id: "ALV-9819", buyer: "Urban Build Co", seller: "Atlas Metals", amount: "₦45,000,000", status: "Released" },
];

function statusDot(s: Deal["status"]) {
  return s === "Pending" ? "bg-muted-foreground" : s === "Secured" ? "bg-sky-500" : "bg-emerald-500";
}

function AdminPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
          <p className="text-muted-foreground max-w-2xl">
            Manage your industrial ecosystem, sales pipeline, and logistics from a central hub.
          </p>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-md border bg-background px-4 py-2.5 text-sm font-medium">
              <Calendar className="size-4 text-muted-foreground" /> Oct 24 – Nov 24, 2024
            </div>
            <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 active:scale-[0.98] transition-all">
              <Download className="size-4" /> Export Report
            </button>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border bg-card p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
              <div className="text-[11px] font-bold tracking-wider text-muted-foreground">{s.label}</div>
              <div className="mt-2 text-3xl font-extrabold tracking-tight">{s.value}</div>
              <div className={`mt-3 inline-flex items-center gap-1.5 text-xs font-medium ${s.trendColor}`}>
                <s.icon className="size-3.5" /> {s.trend}
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Recent Deals */}
          <div className="lg:col-span-2 rounded-2xl border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold">Recent Deals</h2>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">Active Escrows</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-muted-foreground border-b">
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
                    <tr key={d.id} className="border-b last:border-0 hover:bg-secondary/40 transition-colors">
                      <td className="py-3 pr-3 font-semibold">#{d.id}</td>
                      <td className="py-3 pr-3">{d.buyer}</td>
                      <td className="py-3 pr-3">{d.seller}</td>
                      <td className="py-3 pr-3 font-semibold">{d.amount}</td>
                      <td className="py-3 pr-3">
                        <span className="inline-flex items-center gap-1.5">
                          <span className={`size-1.5 rounded-full ${statusDot(d.status)}`} />
                          {d.status}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        {d.status === "Released" ? (
                          <span className="text-muted-foreground">Completed</span>
                        ) : (
                          <div className="inline-flex flex-col items-end gap-0.5">
                            <button className="text-brand font-semibold hover:underline">Release Payment</button>
                            {d.status === "Secured" && (
                              <button className="text-rose-600 font-semibold hover:underline">Refund</button>
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
              <button className="text-sm font-semibold text-brand hover:underline">View All Transactions</button>
            </div>
          </div>

          {/* Sales Pipeline */}
          <div className="space-y-6">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="text-[11px] font-bold tracking-wider text-muted-foreground mb-4">SALES PIPELINE</div>
              <PipelineItem dot="bg-sky-500" label="LEAD" title="Hollow Core Profile Inquiry" sub="From: Build-IT Co. • ₦12M Est." />
              <PipelineItem dot="bg-amber-500" label="QUOTED" title="Anodized Frame Batch" sub="From: Glass-Tech • ₦8.5M Quoted" />
              <PipelineItem dot="bg-emerald-500" label="CLOSED" title="Standard Beam Order" sub="From: Metro Dev • ₦34M Final" />
              <button className="mt-4 w-full rounded-md bg-secondary px-4 py-2.5 text-sm font-semibold hover:bg-secondary/70 active:scale-[0.98] transition-all">
                View All Enquiries
              </button>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-muted-foreground mb-3">
                <Link2 className="size-3.5" /> PAYMENT GENERATOR
              </div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Invoice Amount (NGN)</label>
              <input
                type="text"
                placeholder="e.g. 5,000,000"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
              <label className="block mt-3 text-xs font-medium text-muted-foreground mb-1">Reference</label>
              <input
                type="text"
                placeholder="Project or Order ID"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/40"
              />
              <button className="mt-4 w-full rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground hover:opacity-90 active:scale-[0.98] transition-all">
                Generate Secure Link
              </button>
            </div>
          </div>
        </div>

        {/* Throughput */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-2xl bg-primary text-primary-foreground p-6 shadow-sm relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold">System Throughput Analytics</h3>
                <div className="text-[11px] font-semibold tracking-wider opacity-70 mt-0.5">
                  REVENUE VS VOLUME PERFORMANCE
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs">
                <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-fuchsia-400" /> Revenue</span>
                <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-cyan-400" /> Volume</span>
              </div>
            </div>
            <svg viewBox="0 0 600 200" className="mt-4 w-full h-44">
              <defs>
                <linearGradient id="rev" x1="0" x2="1">
                  <stop offset="0" stopColor="#d946ef" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
              <path d="M0,160 C100,150 180,90 280,70 C400,45 500,40 600,30" stroke="url(#rev)" strokeWidth="3" fill="none" />
              <path d="M0,170 C100,160 200,130 300,120 C420,108 520,100 600,90" stroke="#22d3ee" strokeWidth="3" fill="none" />
              <g transform="translate(380,55)">
                <rect width="90" height="42" rx="6" fill="rgba(255,255,255,0.08)" />
                <text x="10" y="16" fill="#a78bfa" fontSize="10" fontWeight="700">OCTOBER</text>
                <text x="10" y="33" fill="#fff" fontSize="14" fontWeight="700">₦142.5M</text>
              </g>
            </svg>
            <div className="mt-2 flex items-center justify-between text-[10px] opacity-70">
              <button className="hover:underline">Verified Fabricators Overview →</button>
              <div className="flex gap-4">
                {["JUN", "JUL", "AUG", "SEP", "OCT", "NOV"].map((m) => (
                  <span key={m} className={m === "OCT" ? "text-white font-bold" : ""}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-primary text-primary-foreground p-6 shadow-sm">
            <div className="text-[11px] font-bold tracking-wider opacity-80 mb-4">ACTIVITY DISTRIBUTION</div>
            <div className="relative mx-auto size-44">
              <svg viewBox="0 0 36 36" className="size-full -rotate-90">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#a855f7" strokeWidth="4" strokeDasharray="55 100" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#22d3ee" strokeWidth="4" strokeDasharray="25 100" strokeDashoffset="-55" />
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#64748b" strokeWidth="4" strokeDasharray="20 100" strokeDashoffset="-80" />
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <div className="text-3xl font-extrabold">842</div>
                  <div className="text-[10px] tracking-wider opacity-70">TOTAL TONS</div>
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
      </section>
    </SiteLayout>
  );
}

function PipelineItem({ dot, label, title, sub }: { dot: string; label: string; title: string; sub: string }) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b last:border-0">
      <span className={`mt-1.5 size-2 rounded-full ${dot} shrink-0`} />
      <div className="min-w-0">
        <div className="text-[10px] font-bold tracking-wider text-muted-foreground">{label}</div>
        <div className="font-semibold text-sm truncate">{title}</div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <span className={`size-2 rounded-full ${color}`} />
      <span className="opacity-80">{label}</span>
    </div>
  );
}
