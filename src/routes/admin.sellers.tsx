import { createFileRoute } from "@tanstack/react-router";
import {
  Package,
  Search,
  Download,
  X,
  ChevronRight,
  Plus,
  CheckCircle2,
  ExternalLink,
  Star,
  MapPin,
  FileText,
  Save,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, MessageCircle, Bell } from "lucide-react";

export const Route = createFileRoute("/admin/sellers")({
  head: () => ({
    meta: [
      { title: "Sellers | Aluminium Village Admin" },
      { name: "description", content: "Manage verified sellers, their listings, and compliance status." },
    ],
  }),
  component: AdminSellersPage,
});

type Seller = {
  id: string;
  businessName: string;
  ownerName: string;
  category: string;
  phone: string;
  email: string;
  bankStatus: "Verified" | "Unverified";
  bankName: string;
  bankAccount: string;
  bankAccountName: string;
  paystack: "Connected" | "Not Connected";
  paystackCode: string;
  totalDeals: number;
  totalPaidOut: string;
  commissionGenerated: string;
  status: "Active" | "Suspended" | "Pending";
  listings: { name: string; price: string; status: string }[];
  orderHistory: { id: string; amount: string; commission: string; date: string; status: string }[];
  notes: string;
};

const SELLERS: Seller[] = [
  {
    id: "SLR-0034", businessName: "Precision Alum Industries", ownerName: "Emeka Adeyemi", category: "Windows",
    phone: "+234 812 345 6789", email: "emeka@precisionalum.com", bankStatus: "Verified",
    bankName: "Guaranty Trust Bank", bankAccount: "0123456789", bankAccountName: "Precision Alum Industries",
    paystack: "Connected", paystackCode: "ACCT_xxx1234", totalDeals: 45, totalPaidOut: "₦28,400,000",
    commissionGenerated: "₦4,260,000", status: "Active",
    listings: [
      { name: "Industrial Extrusions (6063-T5)", price: "₦850,000/ton", status: "Active" },
      { name: "Anodized Window Frames", price: "₦12,500/unit", status: "Active" },
      { name: "Aluminium Sheets (1.2mm)", price: "₦320,000/sheet", status: "Active" },
    ],
    orderHistory: [
      { id: "ORD-4401", amount: "₦4,200,000", commission: "₦630,000", date: "Nov 18, 2024", status: "Completed" },
      { id: "ORD-4380", amount: "₦2,800,000", commission: "₦420,000", date: "Oct 22, 2024", status: "Completed" },
    ],
    notes: "",
  },
  {
    id: "SLR-0051", businessName: "Mega-Extrusion Ltd", ownerName: "Tunde Ogundimu", category: "Doors",
    phone: "+234 809 876 5432", email: "tunde@megax.com", bankStatus: "Verified",
    bankName: "First Bank of Nigeria", bankAccount: "3012345678", bankAccountName: "Mega-Extrusion Ltd",
    paystack: "Connected", paystackCode: "ACCT_xxx5678", totalDeals: 32, totalPaidOut: "₦19,200,000",
    commissionGenerated: "₦2,880,000", status: "Active",
    listings: [
      { name: "Hollow Core Profiles", price: "₦650,000/ton", status: "Active" },
      { name: "Standard Beam Order", price: "₦1,200,000/ton", status: "Active" },
    ],
    orderHistory: [
      { id: "ORD-4395", amount: "₦3,400,000", commission: "₦510,000", date: "Nov 15, 2024", status: "Completed" },
    ],
    notes: "",
  },
  {
    id: "SLR-0078", businessName: "Atlas Metals Co", ownerName: "Yusuf Abdullahi", category: "Railings",
    phone: "+234 802 345 6789", email: "yusuf@atlasmetal.com", bankStatus: "Verified",
    bankName: "Access Bank", bankAccount: "0456789012", bankAccountName: "Atlas Metals Co",
    paystack: "Connected", paystackCode: "ACCT_xxx9012", totalDeals: 28, totalPaidOut: "₦34,100,000",
    commissionGenerated: "₦5,115,000", status: "Active",
    listings: [
      { name: "Aluminium Railings Set", price: "₦45,000/m", status: "Active" },
      { name: "Coil Stock (1.5mm)", price: "₦290,000/roll", status: "Active" },
    ],
    orderHistory: [
      { id: "ORD-4388", amount: "₦3,100,000", commission: "₦465,000", date: "Nov 12, 2024", status: "Completed" },
    ],
    notes: "",
  },
  {
    id: "SLR-0102", businessName: "HollowCore Profiles", ownerName: "Blessing Okonkwo", category: "Accessories",
    phone: "+234 705 678 1234", email: "blessing@hollowcore.com", bankStatus: "Unverified",
    bankName: "UBA", bankAccount: "2098765431", bankAccountName: "HollowCore Profiles",
    paystack: "Not Connected", paystackCode: "-", totalDeals: 0, totalPaidOut: "₦0",
    commissionGenerated: "₦0", status: "Pending",
    listings: [], orderHistory: [], notes: "",
  },
  {
    id: "SLR-0115", businessName: "QuickFrame Nigeria", ownerName: "Ifeanyi Nwosu", category: "Mixed",
    phone: "+234 811 234 5678", email: "ifeanyi@quickframe.com", bankStatus: "Verified",
    bankName: "Zenith Bank", bankAccount: "1098765432", bankAccountName: "QuickFrame Nigeria",
    paystack: "Not Connected", paystackCode: "-", totalDeals: 3, totalPaidOut: "₦1,800,000",
    commissionGenerated: "₦270,000", status: "Suspended",
    listings: [
      { name: "Door Frames (Standard)", price: "₦8,500/unit", status: "Inactive" },
    ],
    orderHistory: [
      { id: "ORD-4290", amount: "₦1,200,000", commission: "₦180,000", date: "Sep 12, 2024", status: "Completed" },
    ],
    notes: "Suspended due to quality complaints from 2 buyers.",
  },
];

function AdminSellersPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Sellers");
  const [slideSeller, setSlideSeller] = useState<Seller | null>(null);
  const [slideNotes, setSlideNotes] = useState("");

  const filtered = SELLERS.filter((s) => {
    const matchesSearch =
      s.businessName.toLowerCase().includes(search.toLowerCase()) ||
      s.ownerName.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "All Sellers" ||
      (filter === "Active" && s.status === "Active") ||
      (filter === "Suspended" && s.status === "Suspended") ||
      (filter === "Pending Verification" && s.status === "Pending");
    return matchesSearch && matchesFilter;
  });

  const totalCommission = "₦12.5M";
  const activeCount = SELLERS.filter((s) => s.status === "Active").length;
  const pendingCount = SELLERS.filter((s) => s.status === "Pending").length;

  const [reminderOpen, setReminderOpen] = useState<string | null>(null);

  const openSlide = (s: Seller) => {
    setSlideSeller(s);
    setSlideNotes(s.notes);
  };

  const sendReminder = (seller: Seller, channel: "email" | "whatsapp") => {
    setReminderOpen(null);
    if (channel === "email") {
      toast.success(`Email reminder sent to ${seller.email}`, {
        description: `Subject: Complete your Paystack setup - Aluminium Village`,
      });
    } else {
      toast.success(`WhatsApp reminder sent to ${seller.phone}`, {
        description: `Hi ${seller.ownerName}, please log into your seller portal to complete your bank account setup for Paystack payouts.`,
      });
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Sellers</h1>
            <p className="mt-1 text-sm text-slate-400">
              Manage verified sellers, their listings, and compliance status.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-[#0b50c4] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0a47ad] active:scale-[0.98] transition-all shadow-md shadow-[#0b50c4]/25">
              <Download className="size-4" /> Export
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
            <div className="text-[11px] font-bold tracking-wider text-slate-400">TOTAL REGISTERED SELLERS</div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">{SELLERS.length}</div>
          </div>
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
            <div className="text-[11px] font-bold tracking-wider text-slate-400">ACTIVE SELLERS</div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">{activeCount}</div>
          </div>
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
            <div className="text-[11px] font-bold tracking-wider text-slate-400">PENDING VERIFICATION</div>
            <div className={`mt-2 text-3xl font-extrabold tracking-tight ${pendingCount > 0 ? "text-amber-400" : "text-white"}`}>
              {pendingCount}
            </div>
          </div>
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
            <div className="text-[11px] font-bold tracking-wider text-slate-400">TOTAL COMMISSION</div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">{totalCommission}</div>
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
                  placeholder="Search by business name, owner, or category..."
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
                <option>All Sellers</option>
                <option>Active</option>
                <option>Suspended</option>
                <option>Pending Verification</option>
              </select>
            </div>

            {/* Table */}
            <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-slate-400 border-b border-slate-700/50">
                      <th className="py-3 px-4 font-semibold">Seller ID</th>
                      <th className="py-3 px-4 font-semibold">Business</th>
                      <th className="py-3 px-4 font-semibold">Owner</th>
                      <th className="py-3 px-4 font-semibold">Category</th>
                      <th className="py-3 px-4 font-semibold">Bank</th>
                      <th className="py-3 px-4 font-semibold">Paystack</th>
                      <th className="py-3 px-4 font-semibold">Deals</th>
                      <th className="py-3 px-4 font-semibold">Commission</th>
                      <th className="py-3 px-4 font-semibold">Status</th>
                      <th className="py-3 px-4 font-semibold text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((s) => (
                      <tr key={s.id} className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-[#0EA5E9]">{s.id}</td>
                        <td className="py-3 px-4 font-semibold text-white">{s.businessName}</td>
                        <td className="py-3 px-4 text-slate-300">{s.ownerName}</td>
                        <td className="py-3 px-4 text-slate-400">{s.category}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            s.bankStatus === "Verified" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                          }`}>
                            {s.bankStatus}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            s.paystack === "Connected" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                          }`}>
                            {s.paystack}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-300 text-center">{s.totalDeals}</td>
                        <td className="py-3 px-4 font-semibold text-white">{s.commissionGenerated}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            s.status === "Active" ? "bg-emerald-500/10 text-emerald-400" :
                            s.status === "Suspended" ? "bg-red-500/10 text-red-400" :
                            "bg-amber-500/10 text-amber-400"
                          }`}>
                            <span className={`size-1.5 rounded-full ${
                              s.status === "Active" ? "bg-emerald-400" :
                              s.status === "Suspended" ? "bg-red-400" : "bg-amber-400"
                            }`} />
                            {s.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <div className="inline-flex items-center gap-1">
                            <button
                              onClick={() => openSlide(s)}
                              className="p-1.5 rounded-lg hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                              title="View Profile"
                            >
                              <ChevronRight className="size-4" />
                            </button>
                            {s.status === "Pending" && (
                              <button className="p-1.5 rounded-lg hover:bg-amber-500/10 text-amber-400 hover:text-amber-300 transition-colors" title="Verify">
                                <CheckCircle2 className="size-4" />
                              </button>
                            )}
                            {s.status === "Active" && (
                              <button className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-400 hover:text-red-400 transition-colors" title="Suspend">
                                <X className="size-4" />
                              </button>
                            )}
                            {s.status === "Suspended" && (
                              <button className="p-1.5 rounded-lg hover:bg-emerald-500/10 text-slate-400 hover:text-emerald-400 transition-colors" title="Reactivate">
                                <CheckCircle2 className="size-4" />
                              </button>
                            )}
                            {s.paystack === "Not Connected" && (
                              <div className="relative">
                                <button
                                  onClick={() => setReminderOpen(reminderOpen === s.id ? null : s.id)}
                                  className="p-1.5 rounded-lg hover:bg-amber-500/10 text-amber-400 hover:text-amber-300 transition-colors"
                                  title="Send Reminder"
                                >
                                  <Bell className="size-4" />
                                </button>
                                {reminderOpen === s.id && (
                                  <>
                                    <div className="fixed inset-0 z-40" onClick={() => setReminderOpen(null)} />
                                    <div className="absolute right-0 top-full mt-1 z-50 w-52 rounded-xl bg-[#1e293b] border border-slate-700/50 shadow-2xl py-1">
                                      <div className="px-3 py-2 border-b border-slate-700/50">
                                        <div className="text-[10px] font-bold tracking-wider text-slate-500">SEND REMINDER TO</div>
                                        <div className="text-xs text-white font-semibold mt-0.5 truncate">{s.businessName}</div>
                                      </div>
                                      <button
                                        onClick={() => sendReminder(s, "email")}
                                        className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors"
                                      >
                                        <Mail className="size-4 text-[#0EA5E9]" />
                                        <div className="text-left">
                                          <div className="text-xs font-semibold">Send Email</div>
                                          <div className="text-[10px] text-slate-500 truncate">{s.email}</div>
                                        </div>
                                      </button>
                                      <button
                                        onClick={() => sendReminder(s, "whatsapp")}
                                        className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white transition-colors"
                                      >
                                        <MessageCircle className="size-4 text-emerald-400" />
                                        <div className="text-left">
                                          <div className="text-xs font-semibold">Send WhatsApp</div>
                                          <div className="text-[10px] text-slate-500 truncate">{s.phone}</div>
                                        </div>
                                      </button>
                                    </div>
                                  </>
                                )}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="space-y-4">
            <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-6">
              <div className="text-[11px] font-bold tracking-wider text-slate-400 mb-4">QUICK ACTIONS</div>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-[#0EA5E9]/40 hover:text-white hover:bg-slate-800 transition-all">
                  <Plus className="size-4 text-[#0EA5E9]" /> Add Seller Manually
                </button>
                <button className="w-full flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-amber-400/40 hover:text-white hover:bg-slate-800 transition-all">
                  <CheckCircle2 className="size-4 text-amber-400" /> Verify All Pending
                </button>
                <button className="w-full flex items-center gap-3 rounded-lg bg-slate-800/50 border border-slate-700/30 px-4 py-3 text-sm font-medium text-slate-300 hover:border-emerald-400/40 hover:text-white hover:bg-slate-800 transition-all">
                  <Download className="size-4 text-emerald-400" /> Export Seller List
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-Over Panel */}
      {slideSeller && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSlideSeller(null)} />
          <div className="relative w-full max-w-lg bg-[#1e293b] border-l border-slate-700/50 shadow-2xl overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#1e293b] border-b border-slate-700/50">
              <div>
                <h2 className="text-lg font-bold text-white">{slideSeller.businessName}</h2>
                <p className="text-xs text-slate-400">{slideSeller.ownerName} · {slideSeller.category}</p>
              </div>
              <button onClick={() => setSlideSeller(null)} className="p-2 rounded-lg hover:bg-slate-700 text-slate-400">
                <X className="size-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* Contact */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                  <div className="text-[10px] font-bold tracking-wider text-slate-500">PHONE</div>
                  <div className="mt-1 text-sm font-semibold text-white">{slideSeller.phone}</div>
                </div>
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                  <div className="text-[10px] font-bold tracking-wider text-slate-500">EMAIL</div>
                  <div className="mt-1 text-sm font-semibold text-white truncate">{slideSeller.email}</div>
                </div>
              </div>

              {/* Bank & Paystack */}
              <div>
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <ExternalLink className="size-4 text-slate-400" /> Banking Details
                </h3>
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Bank</span>
                    <span className="font-semibold text-white">{slideSeller.bankName}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Account Number</span>
                    <span className="font-semibold text-white">{slideSeller.bankAccount}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Account Name</span>
                    <span className="font-semibold text-white">{slideSeller.bankAccountName}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Paystack Subaccount</span>
                    <span className={`font-semibold ${slideSeller.paystack === "Connected" ? "text-emerald-400" : "text-red-400"}`}>
                      {slideSeller.paystackCode}
                    </span>
                  </div>
                </div>
                {slideSeller.paystack === "Not Connected" && (
                  <div className="mt-3 rounded-lg bg-amber-500/5 border border-amber-500/20 p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-semibold text-amber-400">Paystack Not Connected</div>
                        <div className="text-[11px] text-slate-400 mt-0.5">This seller needs to complete their bank setup.</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => sendReminder(slideSeller, "email")}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 px-3 py-1.5 text-xs font-semibold text-[#0EA5E9] hover:bg-[#0EA5E9]/20 transition-colors"
                        >
                          <Mail className="size-3" /> Email
                        </button>
                        <button
                          onClick={() => sendReminder(slideSeller, "whatsapp")}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-colors"
                        >
                          <MessageCircle className="size-3" /> WhatsApp
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Active Listings */}
              {slideSeller.listings.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <Package className="size-4 text-slate-400" /> Active Listings
                  </h3>
                  <div className="space-y-2">
                    {slideSeller.listings.map((l) => (
                      <div key={l.name} className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white text-sm">{l.name}</span>
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                            l.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-500/10 text-slate-400"
                          }`}>
                            {l.status}
                          </span>
                        </div>
                        <div className="mt-1 text-sm text-[#0EA5E9] font-medium">{l.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Order History */}
              {slideSeller.orderHistory.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                    <FileText className="size-4 text-slate-400" /> Order History
                  </h3>
                  <div className="space-y-2">
                    {slideSeller.orderHistory.map((o) => (
                      <div key={o.id} className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white text-sm">{o.id}</span>
                          <span className="text-xs text-slate-400">{o.date}</span>
                        </div>
                        <div className="mt-1 flex items-center justify-between text-xs">
                          <span className="text-slate-300">{o.amount}</span>
                          <span className="text-emerald-400">Commission: {o.commission}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              <div>
                <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                  <FileText className="size-4 text-slate-400" /> Admin Notes
                </h3>
                <textarea
                  value={slideNotes}
                  onChange={(e) => setSlideNotes(e.target.value)}
                  placeholder="Add internal notes about this seller..."
                  rows={3}
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#0b50c4]/40 focus:border-[#0b50c4] resize-none"
                />
                <button className="mt-2 inline-flex items-center gap-1.5 rounded-lg bg-[#0EA5E9] px-4 py-2 text-xs font-semibold text-white hover:bg-[#0EA5E9]/90 transition-colors">
                  <Save className="size-3.5" /> Save Notes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
