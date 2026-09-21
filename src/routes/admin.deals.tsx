import { createFileRoute } from "@tanstack/react-router";
import {
  DollarSign,
  Search,
  Download,
  Calendar,
  X,
  Copy,
  CheckCircle2,
  Link2,
  AlertTriangle,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/deals")({
  head: () => ({
    meta: [
      { title: "Deals | Aluminium Village Admin" },
      { name: "description", content: "Monitor all transactions, escrow status, and payment releases." },
    ],
  }),
  component: AdminDealsPage,
});

type Deal = {
  id: string;
  buyer: string;
  buyerPhone: string;
  seller: string;
  sellerPhone: string;
  product: string;
  amount: string;
  commission15: string;
  sellerPayout85: string;
  status: "Escrow" | "In Delivery" | "Disputed" | "Completed" | "Refunded";
  date: string;
  activityLog: { time: string; event: string }[];
  deliveryNotes: string;
  disputeDetails: string;
  adminNotes: string;
};

const DEALS: Deal[] = [
  {
    id: "ALV-9821", buyer: "Forge Dynamics", buyerPhone: "+234 803 456 7890", seller: "Precision Alum", sellerPhone: "+234 812 345 6789",
    product: "Industrial Extrusions (2 tons)", amount: "₦24,500,000", commission15: "₦3,675,000", sellerPayout85: "₦20,825,000",
    status: "Escrow", date: "Nov 20, 2024",
    activityLog: [
      { time: "20 Nov 2024 09:15", event: "Payment confirmed by customer" },
      { time: "20 Nov 2024 09:16", event: "Funds locked in escrow" },
      { time: "20 Nov 2024 11:30", event: "Seller notified to begin work" },
    ],
    deliveryNotes: "", disputeDetails: "", adminNotes: "",
  },
  {
    id: "ALV-9820", buyer: "Structur-All Inc", buyerPhone: "+234 812 345 6789", seller: "Mega-Extrusion", sellerPhone: "+234 809 876 5432",
    product: "Hollow Core Profiles (500m)", amount: "₦12,800,000", commission15: "₦1,920,000", sellerPayout85: "₦10,880,000",
    status: "In Delivery", date: "Nov 18, 2024",
    activityLog: [
      { time: "18 Nov 2024 08:30", event: "Payment confirmed by customer" },
      { time: "18 Nov 2024 08:31", event: "Funds locked in escrow" },
      { time: "18 Nov 2024 10:00", event: "Seller notified to begin work" },
      { time: "19 Nov 2024 14:20", event: "Seller marked as In Delivery" },
    ],
    deliveryNotes: "Shipment dispatched via ABC Logistics. Tracking: TRK-20241119-001", disputeDetails: "", adminNotes: "",
  },
  {
    id: "ALV-9819", buyer: "Urban Build Co", buyerPhone: "+234 805 678 1234", seller: "Atlas Metals", sellerPhone: "+234 802 345 6789",
    product: "Standard Beam Order (5 tons)", amount: "₦45,000,000", commission15: "₦6,750,000", sellerPayout85: "₦38,250,000",
    status: "Completed", date: "Nov 15, 2024",
    activityLog: [
      { time: "15 Nov 2024 09:32", event: "Payment confirmed by customer" },
      { time: "15 Nov 2024 09:33", event: "Funds locked in escrow" },
      { time: "15 Nov 2024 11:00", event: "Seller notified to begin work" },
      { time: "16 Nov 2024 14:20", event: "Seller marked as In Delivery" },
      { time: "18 Nov 2024 10:00", event: "Customer confirmed receipt" },
      { time: "18 Nov 2024 10:01", event: "Payment released to seller" },
    ],
    deliveryNotes: "", disputeDetails: "", adminNotes: "",
  },
  {
    id: "ALV-9818", buyer: "Metro Dev Group", buyerPhone: "+234 809 876 5432", seller: "Precision Alum", sellerPhone: "+234 812 345 6789",
    product: "Anodized Window Frames (200 units)", amount: "₦8,200,000", commission15: "₦1,230,000", sellerPayout85: "₦6,970,000",
    status: "Escrow", date: "Nov 12, 2024",
    activityLog: [
      { time: "12 Nov 2024 13:45", event: "Payment confirmed by customer" },
      { time: "12 Nov 2024 13:46", event: "Funds locked in escrow" },
    ],
    deliveryNotes: "", disputeDetails: "", adminNotes: "",
  },
  {
    id: "ALV-9817", buyer: "Glass-Tech Ltd", buyerPhone: "+234 705 678 1234", seller: "Mega-Extrusion", sellerPhone: "+234 809 876 5432",
    product: "Aluminium Sheets (100 sheets)", amount: "₦18,600,000", commission15: "₦2,790,000", sellerPayout85: "₦15,810,000",
    status: "Disputed", date: "Nov 10, 2024",
    activityLog: [
      { time: "10 Nov 2024 08:00", event: "Payment confirmed by customer" },
      { time: "10 Nov 2024 08:01", event: "Funds locked in escrow" },
      { time: "12 Nov 2024 16:00", event: "Seller marked as In Delivery" },
      { time: "14 Nov 2024 09:30", event: "Customer raised dispute — received damaged sheets" },
    ],
    deliveryNotes: "Customer reports 12 out of 100 sheets arrived with surface scratches.",
    disputeDetails: "Customer claims 12 sheets arrived with deep surface scratches that were not present at inspection. Requesting partial refund of ₦2,232,000.",
    adminNotes: "Awaiting seller response. Dispute filed 14 Nov 2024.",
  },
  {
    id: "ALV-9816", buyer: "Build-IT Co", buyerPhone: "+234 811 234 5678", seller: "Atlas Metals", sellerPhone: "+234 802 345 6789",
    product: "Coil Stock (3 rolls)", amount: "₦32,100,000", commission15: "₦4,815,000", sellerPayout85: "₦27,285,000",
    status: "Completed", date: "Nov 8, 2024",
    activityLog: [
      { time: "08 Nov 2024 10:15", event: "Payment confirmed by customer" },
      { time: "08 Nov 2024 10:16", event: "Funds locked in escrow" },
      { time: "10 Nov 2024 09:00", event: "Customer confirmed receipt" },
      { time: "10 Nov 2024 09:01", event: "Payment released to seller" },
    ],
    deliveryNotes: "", disputeDetails: "", adminNotes: "",
  },
  {
    id: "ALV-9815", buyer: "SkyLine Architects", buyerPhone: "+234 802 345 6789", seller: "Precision Alum", sellerPhone: "+234 812 345 6789",
    product: "Custom Fabrication (10 sets)", amount: "₦15,400,000", commission15: "₦2,310,000", sellerPayout85: "₦13,090,000",
    status: "Refunded", date: "Nov 5, 2024",
    activityLog: [
      { time: "05 Nov 2024 14:00", event: "Payment confirmed by customer" },
      { time: "05 Nov 2024 14:01", event: "Funds locked in escrow" },
      { time: "07 Nov 2024 11:00", event: "Customer requested cancellation" },
      { time: "07 Nov 2024 11:30", event: "Admin approved refund" },
      { time: "07 Nov 2024 11:31", event: "Full refund processed via Paystack" },
    ],
    deliveryNotes: "", disputeDetails: "", adminNotes: "Customer cancelled before seller began work.",
  },
];

const statusStyle = {
  "Escrow": { bg: "bg-amber-500/10", text: "text-amber-400", dot: "bg-amber-400" },
  "In Delivery": { bg: "bg-sky-500/10", text: "text-sky-400", dot: "bg-sky-400" },
  "Disputed": { bg: "bg-red-500/10", text: "text-red-400", dot: "bg-red-400" },
  "Completed": { bg: "bg-emerald-500/10", text: "text-emerald-400", dot: "bg-emerald-400" },
  "Refunded": { bg: "bg-slate-500/10", text: "text-slate-400", dot: "bg-slate-400" },
};

function AdminDealsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [slideDeal, setSlideDeal] = useState<Deal | null>(null);

  // Payment generator
  const [invAmount, setInvAmount] = useState("");
  const [invRef, setInvRef] = useState("");
  const [invSeller, setInvSeller] = useState("");
  const [invCustomer, setInvCustomer] = useState("");
  const [generatedLink, setGeneratedLink] = useState("");

  const filtered = DEALS.filter((d) => {
    const matchesSearch =
      d.id.toLowerCase().includes(search.toLowerCase()) ||
      d.buyer.toLowerCase().includes(search.toLowerCase()) ||
      d.seller.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || d.status === filter;
    return matchesSearch && matchesFilter;
  });

  const pendingEscrow = DEALS.filter((d) => d.status === "Escrow").reduce(
    (sum, d) => sum + parseInt(d.amount.replace(/[₦,]/g, "")), 0
  );
  const disputes = DEALS.filter((d) => d.status === "Disputed").length;
  const commissionThisMonth = "₦23.5M";

  const generateLink = () => {
    if (invAmount && invRef) {
      setGeneratedLink(`https://pay.aluminiumvillage.com/split/${invRef.toLowerCase().replace(/\s/g, "-")}`);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Deals</h1>
            <p className="mt-1 text-sm text-slate-400">
              Monitor all transactions, escrow status, and payment releases.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-lg bg-slate-800 border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-300">
              <Calendar className="size-4 text-slate-500" /> Oct 24 – Nov 24, 2024
            </div>
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#0b50c4] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25">
              <Download className="size-4" /> Export
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
            <div className="text-[11px] font-bold tracking-wider text-slate-400">TOTAL DEALS THIS MONTH</div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">{DEALS.length}</div>
          </div>
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
            <div className="text-[11px] font-bold tracking-wider text-slate-400">PENDING ESCROW</div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">₦{(pendingEscrow / 1_000_000).toFixed(1)}M</div>
            <div className="mt-1 text-xs text-amber-400 font-medium">Held in escrow</div>
          </div>
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
            <div className="text-[11px] font-bold tracking-wider text-slate-400">ACTIVE DISPUTES</div>
            <div className={`mt-2 text-3xl font-extrabold tracking-tight ${disputes > 0 ? "text-red-400" : "text-white"}`}>
              {disputes}
            </div>
          </div>
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
            <div className="text-[11px] font-bold tracking-wider text-slate-400">COMMISSION EARNED</div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">{commissionThisMonth}</div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {/* Table area */}
          <div className="lg:col-span-3 space-y-4">
            {/* Search & Filter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search by Transaction ID, buyer, or seller..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 pl-9 pr-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
                />
              </div>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="rounded-lg bg-slate-800 border border-slate-700 px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
              >
                <option>All</option>
                <option>Escrow</option>
                <option>In Delivery</option>
                <option>Disputed</option>
                <option>Completed</option>
                <option>Refunded</option>
              </select>
            </div>

            {/* Table */}
            <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-400 border-b border-slate-700/50">
                      <th className="py-3 px-4 font-semibold">Transaction ID</th>
                      <th className="py-3 px-4 font-semibold">Buyer</th>
                      <th className="py-3 px-4 font-semibold">Seller</th>
                      <th className="py-3 px-4 font-semibold">Product</th>
                      <th className="py-3 px-4 font-semibold">Amount</th>
                      <th className="py-3 px-4 font-semibold">Commission</th>
                      <th className="py-3 px-4 font-semibold">Seller Payout</th>
                      <th className="py-3 px-4 font-semibold">Status</th>
                      <th className="py-3 px-4 font-semibold">Date</th>
                      <th className="py-3 px-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((d) => {
                      const s = statusStyle[d.status];
                      return (
                        <tr key={d.id} className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-[#0EA5E9]">#{d.id}</td>
                          <td className="py-3 px-4 text-slate-300">{d.buyer}</td>
                          <td className="py-3 px-4 text-slate-300">{d.seller}</td>
                          <td className="py-3 px-4 text-slate-400 max-w-[140px] truncate">{d.product}</td>
                          <td className="py-3 px-4 font-semibold text-white">{d.amount}</td>
                          <td className="py-3 px-4 text-slate-300">{d.commission15}</td>
                          <td className="py-3 px-4 text-slate-300">{d.sellerPayout85}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold ${s.bg} ${s.text}`}>
                              <span className={`size-1.5 rounded-full ${s.dot}`} />
                              {d.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-slate-400">{d.date}</td>
                          <td className="py-3 px-4 text-right">
                            <div className="inline-flex items-center gap-1">
                              {d.status !== "Completed" && d.status !== "Refunded" && (
                                <>
                                  <button
                                    onClick={() => setSlideDeal(d)}
                                    className="text-[#0EA5E9] font-semibold text-xs hover:underline"
                                  >
                                    Release
                                  </button>
                                  {(d.status === "Escrow" || d.status === "In Delivery") && (
                                    <button
                                      onClick={() => setSlideDeal(d)}
                                      className="text-red-400 font-semibold text-xs hover:underline ml-1"
                                    >
                                      Refund
                                    </button>
                                  )}
                                </>
                              )}
                              <button
                                onClick={() => setSlideDeal(d)}
                                className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                                title="View Details"
                              >
                                <CheckCircle2 className="size-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Payment Generator */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-wider text-slate-400 mb-4">
                <Link2 className="size-3.5" /> PAYMENT GENERATOR
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Invoice Amount (NGN)</label>
                  <input
                    type="text"
                    value={invAmount}
                    onChange={(e) => setInvAmount(e.target.value)}
                    placeholder="e.g. 5,000,000"
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Reference</label>
                  <input
                    type="text"
                    value={invRef}
                    onChange={(e) => setInvRef(e.target.value)}
                    placeholder="Project or Order ID"
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Seller</label>
                  <select
                    value={invSeller}
                    onChange={(e) => setInvSeller(e.target.value)}
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
                  >
                    <option value="">Select seller...</option>
                    <option>Precision Alum Industries</option>
                    <option>Mega-Extrusion Ltd</option>
                    <option>Atlas Metals Co</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Customer Name</label>
                  <input
                    type="text"
                    value={invCustomer}
                    onChange={(e) => setInvCustomer(e.target.value)}
                    placeholder="Customer name"
                    className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4]"
                  />
                </div>
                <button
                  onClick={generateLink}
                  className="mt-2 w-full rounded-lg bg-[#0b50c4] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25"
                >
                  Generate Payment Link
                </button>
                {generatedLink && (
                  <div className="mt-3 rounded-lg bg-slate-800 border border-slate-700 p-3">
                    <div className="text-[10px] font-bold tracking-wider text-slate-500 mb-1">GENERATED LINK</div>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 text-xs text-[#0EA5E9] break-all">{generatedLink}</code>
                      <button
                        onClick={() => navigator.clipboard.writeText(generatedLink)}
                        className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors shrink-0"
                      >
                        <Copy className="size-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-Over Panel */}
      {slideDeal && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSlideDeal(null)} />
          <div className="relative w-full max-w-lg bg-[#1e293b] border-l border-slate-700/50 shadow-2xl overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#1e293b] border-b border-slate-700/50">
              <div>
                <h2 className="text-lg font-bold text-white">#{slideDeal.id}</h2>
                <p className="text-xs text-slate-400">{slideDeal.product}</p>
              </div>
              <button onClick={() => setSlideDeal(null)} className="p-2 rounded-lg hover:bg-slate-700 text-slate-400">
                <X className="size-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* Amount Breakdown */}
              <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 space-y-2">
                <div className="text-[10px] font-bold tracking-wider text-slate-500 mb-2">AMOUNT BREAKDOWN</div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total Amount</span>
                  <span className="font-bold text-white">{slideDeal.amount}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Commission (15%)</span>
                  <span className="font-semibold text-[#0EA5E9]">{slideDeal.commission15}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Seller Payout (85%)</span>
                  <span className="font-semibold text-white">{slideDeal.sellerPayout85}</span>
                </div>
              </div>

              {/* Buyer & Seller */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                  <div className="text-[10px] font-bold tracking-wider text-slate-500">BUYER</div>
                  <div className="mt-1 text-sm font-semibold text-white">{slideDeal.buyer}</div>
                  <div className="text-xs text-slate-400">{slideDeal.buyerPhone}</div>
                </div>
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                  <div className="text-[10px] font-bold tracking-wider text-slate-500">SELLER</div>
                  <div className="mt-1 text-sm font-semibold text-white">{slideDeal.seller}</div>
                  <div className="text-xs text-slate-400">{slideDeal.sellerPhone}</div>
                </div>
              </div>

              {/* Activity Log */}
              <div>
                <h3 className="text-sm font-bold text-white mb-3">Activity Log</h3>
                <div className="space-y-0 relative">
                  <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-700" />
                  {slideDeal.activityLog.map((log, i) => (
                    <div key={i} className="flex items-start gap-3 py-2 relative">
                      <span className="size-[15px] rounded-full bg-slate-700 border-2 border-[#1e293b] shrink-0 z-10" />
                      <div>
                        <div className="text-xs text-slate-500">{log.time}</div>
                        <div className="text-sm text-slate-300">{log.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Notes */}
              {slideDeal.deliveryNotes && (
                <div>
                  <h3 className="text-sm font-bold text-white mb-2">Delivery Notes</h3>
                  <p className="text-sm text-slate-300 bg-slate-800/50 rounded-lg border border-slate-700/30 p-3">{slideDeal.deliveryNotes}</p>
                </div>
              )}

              {/* Dispute Details */}
              {slideDeal.disputeDetails && (
                <div>
                  <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <AlertTriangle className="size-4 text-red-400" /> Dispute Details
                  </h3>
                  <p className="text-sm text-red-300 bg-red-500/5 rounded-lg border border-red-500/20 p-3">{slideDeal.disputeDetails}</p>
                </div>
              )}

              {/* Admin Notes */}
              <div>
                <h3 className="text-sm font-bold text-white mb-2">Admin Notes</h3>
                <textarea
                  defaultValue={slideDeal.adminNotes}
                  placeholder="Add internal notes..."
                  rows={2}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4] resize-none"
                />
              </div>

              {/* Action Buttons */}
              {slideDeal.status !== "Completed" && slideDeal.status !== "Refunded" && (
                <div className="flex items-center gap-3 pt-2 border-t border-slate-700/50">
                  <button className="flex-1 rounded-lg bg-[#0EA5E9] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0EA5E9]/90 active:scale-[0.98] transition-all">
                    Release Payment
                  </button>
                  <button className="flex-1 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2.5 text-sm font-semibold text-red-400 hover:bg-red-500/20 active:scale-[0.98] transition-all">
                    Refund
                  </button>
                  {slideDeal.status !== "Disputed" && (
                    <button className="flex-1 rounded-lg bg-amber-500/10 border border-amber-500/20 px-4 py-2.5 text-sm font-semibold text-amber-400 hover:bg-amber-500/20 active:scale-[0.98] transition-all">
                      Mark Disputed
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
