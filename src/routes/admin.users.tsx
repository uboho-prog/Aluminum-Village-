import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  Search,
  Download,
  Calendar,
  X,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/admin/users")({
  head: () => ({
    meta: [
      { title: "Users | Aluminium Village Admin" },
      { name: "description", content: "Manage all registered customers and their order history." },
    ],
  }),
  component: AdminUsersPage,
});

type User = {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  totalOrders: number;
  totalSpent: string;
  lastActive: string;
  status: "Active" | "Inactive";
  orders: { id: string; product: string; amount: string; status: string; date: string }[];
};

const USERS: User[] = [
  {
    id: "USR-0012", name: "Chidinma Okafor", phone: "+234 803 456 7890", email: "chidinma@forge-ng.com", location: "Lagos",
    totalOrders: 8, totalSpent: "₦18,400,000", lastActive: "Nov 18, 2024", status: "Active",
    orders: [
      { id: "ORD-4401", product: "Industrial Extrusions", amount: "₦4,200,000", status: "Completed", date: "Nov 18, 2024" },
      { id: "ORD-4380", product: "Hollow Core Profiles", amount: "₦2,800,000", status: "Completed", date: "Oct 22, 2024" },
      { id: "ORD-4350", product: "Aluminium Sheets", amount: "₦6,500,000", status: "In Delivery", date: "Oct 10, 2024" },
      { id: "ORD-4310", product: "Window Frames (200 units)", amount: "₦4,900,000", status: "Completed", date: "Sep 15, 2024" },
    ],
  },
  {
    id: "USR-0034", name: "Emeka Adeyemi", phone: "+234 812 345 6789", email: "emeka@buildit.com", location: "Abuja",
    totalOrders: 5, totalSpent: "₦9,200,000", lastActive: "Nov 15, 2024", status: "Active",
    orders: [
      { id: "ORD-4395", product: "Standard Beam Order", amount: "₦3,400,000", status: "Completed", date: "Nov 15, 2024" },
      { id: "ORD-4370", product: "Anodized Window Frames", amount: "₦2,100,000", status: "Completed", date: "Oct 5, 2024" },
    ],
  },
  {
    id: "USR-0056", name: "Fatima Bello", phone: "+234 705 678 1234", email: "fatima@structurall.com", location: "Port Harcourt",
    totalOrders: 12, totalSpent: "₦34,800,000", lastActive: "Nov 20, 2024", status: "Active",
    orders: [
      { id: "ORD-4405", product: "Custom Fabrication Batch", amount: "₦8,600,000", status: "Escrow", date: "Nov 20, 2024" },
      { id: "ORD-4390", product: "Coil Stock (500kg)", amount: "₦5,200,000", status: "Completed", date: "Nov 2, 2024" },
      { id: "ORD-4360", product: "Railings Set", amount: "₦3,800,000", status: "Completed", date: "Sep 28, 2024" },
    ],
  },
  {
    id: "USR-0078", name: "Tunde Ogundimu", phone: "+234 809 876 5432", email: "tunde@metrodev.com", location: "Ibadan",
    totalOrders: 3, totalSpent: "₦5,100,000", lastActive: "Oct 30, 2024", status: "Active",
    orders: [
      { id: "ORD-4340", product: "Aluminium Sheets", amount: "₦2,900,000", status: "Completed", date: "Oct 30, 2024" },
    ],
  },
  {
    id: "USR-0091", name: "Ngozi Eze", phone: "+234 811 234 5678", email: "ngozi@urbanbuild.com", location: "Enugu",
    totalOrders: 1, totalSpent: "₦1,200,000", lastActive: "Sep 12, 2024", status: "Inactive",
    orders: [
      { id: "ORD-4290", product: "Door Frames", amount: "₦1,200,000", status: "Completed", date: "Sep 12, 2024" },
    ],
  },
  {
    id: "USR-0103", name: "Yusuf Abdullahi", phone: "+234 802 345 6789", email: "yusuf@skyarch.com", location: "Kano",
    totalOrders: 6, totalSpent: "₦12,600,000", lastActive: "Nov 12, 2024", status: "Active",
    orders: [
      { id: "ORD-4388", product: "Hollow Core Profiles", amount: "₦3,100,000", status: "Completed", date: "Nov 12, 2024" },
      { id: "ORD-4365", product: "Industrial Extrusions", amount: "₦4,500,000", status: "Completed", date: "Sep 20, 2024" },
    ],
  },
];

function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Users");
  const [slideUser, setSlideUser] = useState<User | null>(null);

  const filtered = USERS.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.phone.includes(search);
    const matchesFilter =
      filter === "All Users" ||
      (filter === "Active" && u.status === "Active") ||
      (filter === "Inactive" && u.status === "Inactive");
    return matchesSearch && matchesFilter;
  });

  const activeThisMonth = USERS.filter((u) => u.status === "Active").length;

  return (
    <>
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Users</h1>
            <p className="mt-1 text-sm text-slate-400">
              Manage all registered customers and their order history.
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
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
            <div className="text-[11px] font-bold tracking-wider text-slate-400">TOTAL REGISTERED USERS</div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">{USERS.length}</div>
            <div className="mt-1 text-xs text-slate-500">All time</div>
          </div>
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
            <div className="text-[11px] font-bold tracking-wider text-slate-400">ACTIVE USERS THIS MONTH</div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">{activeThisMonth}</div>
            <div className="mt-1 text-xs text-emerald-400 font-medium">
              {((activeThisMonth / USERS.length) * 100).toFixed(0)}% of total
            </div>
          </div>
          <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
            <div className="text-[11px] font-bold tracking-wider text-slate-400">TOTAL CUSTOMER SPEND</div>
            <div className="mt-2 text-3xl font-extrabold tracking-tight text-white">₦81.3M</div>
            <div className="mt-1 text-xs text-emerald-400 font-medium">+18.2% vs last month</div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name, phone, or email..."
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
            <option>All Users</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

        {/* Table */}
        <div className="rounded-2xl bg-[#1e293b] border border-slate-700/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-slate-400 border-b border-slate-700/50">
                  <th className="py-3 px-5 font-semibold">User ID</th>
                  <th className="py-3 px-5 font-semibold">Full Name</th>
                  <th className="py-3 px-5 font-semibold">Phone</th>
                  <th className="py-3 px-5 font-semibold">Email</th>
                  <th className="py-3 px-5 font-semibold">Location</th>
                  <th className="py-3 px-5 font-semibold">Orders</th>
                  <th className="py-3 px-5 font-semibold">Total Spent</th>
                  <th className="py-3 px-5 font-semibold">Last Active</th>
                  <th className="py-3 px-5 font-semibold">Status</th>
                  <th className="py-3 px-5 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((u) => (
                  <tr key={u.id} className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors">
                    <td className="py-3.5 px-5 font-semibold text-[#0EA5E9]">{u.id}</td>
                    <td className="py-3.5 px-5 font-semibold text-white">{u.name}</td>
                    <td className="py-3.5 px-5 text-slate-300">{u.phone}</td>
                    <td className="py-3.5 px-5 text-slate-300">{u.email}</td>
                    <td className="py-3.5 px-5 text-slate-400">{u.location}</td>
                    <td className="py-3.5 px-5 text-slate-300 text-center">{u.totalOrders}</td>
                    <td className="py-3.5 px-5 font-semibold text-white">{u.totalSpent}</td>
                    <td className="py-3.5 px-5 text-slate-400">{u.lastActive}</td>
                    <td className="py-3.5 px-5">
                      <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        u.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : "bg-slate-500/10 text-slate-400"
                      }`}>
                        <span className={`size-1.5 rounded-full ${u.status === "Active" ? "bg-emerald-400" : "bg-slate-400"}`} />
                        {u.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      <button
                        onClick={() => setSlideUser(u)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 px-3 py-1.5 text-xs font-semibold text-[#0EA5E9] hover:bg-[#0EA5E9]/20 transition-colors"
                      >
                        View Orders <ChevronRight className="size-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Slide-Over Panel */}
      {slideUser && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-black/60" onClick={() => setSlideUser(null)} />
          <div className="relative w-full max-w-lg bg-[#1e293b] border-l border-slate-700/50 shadow-2xl overflow-y-auto">
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 bg-[#1e293b] border-b border-slate-700/50">
              <div>
                <h2 className="text-lg font-bold text-white">{slideUser.name}</h2>
                <p className="text-xs text-slate-400">{slideUser.email} · {slideUser.phone}</p>
              </div>
              <button onClick={() => setSlideUser(null)} className="p-2 rounded-lg hover:bg-slate-700 text-slate-400">
                <X className="size-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              {/* User Info */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                  <div className="text-[10px] font-bold tracking-wider text-slate-500">LOCATION</div>
                  <div className="mt-1 text-sm font-semibold text-white">{slideUser.location}</div>
                </div>
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                  <div className="text-[10px] font-bold tracking-wider text-slate-500">STATUS</div>
                  <div className={`mt-1 text-sm font-semibold ${slideUser.status === "Active" ? "text-emerald-400" : "text-slate-400"}`}>
                    {slideUser.status}
                  </div>
                </div>
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                  <div className="text-[10px] font-bold tracking-wider text-slate-500">TOTAL ORDERS</div>
                  <div className="mt-1 text-sm font-semibold text-white">{slideUser.totalOrders}</div>
                </div>
                <div className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                  <div className="text-[10px] font-bold tracking-wider text-slate-500">TOTAL SPENT</div>
                  <div className="mt-1 text-sm font-semibold text-white">{slideUser.totalSpent}</div>
                </div>
              </div>

              {/* Order History */}
              <div>
                <h3 className="text-sm font-bold text-white mb-3">Order History</h3>
                <div className="space-y-2">
                  {slideUser.orders.map((o) => (
                    <div key={o.id} className="rounded-lg bg-slate-800/50 border border-slate-700/30 p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-white text-sm">{o.id}</div>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          o.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" :
                          o.status === "Escrow" ? "bg-amber-500/10 text-amber-400" :
                          "bg-sky-500/10 text-sky-400"
                        }`}>
                          {o.status}
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-slate-300">{o.product}</div>
                      <div className="mt-1 flex items-center justify-between text-xs text-slate-400">
                        <span>{o.amount}</span>
                        <span>{o.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
