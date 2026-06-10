import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { useEffect, useState } from "react";
import {
  ClipboardList,
  MapPin,
  Inbox,
  Pencil,
  Plus,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useAuthUser } from "@/lib/auth-store";

export const Route = createFileRoute("/dashboard")({
  component: DashboardPage,
});

type Order = {
  id: string;
  ref: string;
  title: string;
  date: string;
  amount: string;
  status: "Shipped" | "Delivered" | "Processing";
};

const ORDERS: Order[] = [
  {
    id: "1",
    ref: "AV-982341",
    title: "6061 Aluminium T-Slot Profile (x20)",
    date: "Jan 12, 2024",
    amount: "₦2,450,000",
    status: "Shipped",
  },
  {
    id: "2",
    ref: "AV-982105",
    title: "6061 Aluminium T-Slot Profile (x20)",
    date: "Dec 28, 2023",
    amount: "₦1,120,000",
    status: "Delivered",
  },
];

function StatusBadge({ status }: { status: Order["status"] }) {
  const map = {
    Shipped: "bg-emerald-100 text-emerald-700",
    Delivered: "bg-sky-100 text-sky-700",
    Processing: "bg-amber-100 text-amber-700",
  } as const;
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${map[status]}`}>
      {status}
    </span>
  );
}

function DashboardPage() {
  const user = useAuthUser();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
    if (!user) navigate({ to: "/login", search: { redirect: "/dashboard" } as never });
  }, [user, navigate]);

  if (!checked || !user) return <SiteLayout><div /></SiteLayout>;

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <header className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Account Dashboard</h1>
          <p className="mt-2 text-muted-foreground">
            Manage your industrial procurements, delivery addresses, and logistics inquiries.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Order History */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5">
                  <ClipboardList className="size-5 text-brand" />
                  <h2 className="text-xl font-bold">Order History</h2>
                </div>
                <Link to="/tracking" className="text-sm font-semibold text-brand hover:underline">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {ORDERS.map((o) => (
                  <Link
                    key={o.id}
                    to="/tracking"
                    className="group flex items-center gap-4 rounded-xl border bg-background p-3 hover:border-brand/40 hover:shadow-sm transition-all"
                  >
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-lg bg-muted text-[10px] font-semibold text-muted-foreground">
                      img
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold truncate">{o.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        ID: #{o.ref} • {o.date}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{o.amount}</div>
                      <div className="mt-1"><StatusBadge status={o.status} /></div>
                    </div>
                    <ChevronRight className="size-5 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Return Requests */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-5">
                <Inbox className="size-5 text-brand" />
                <h2 className="text-xl font-bold">Return Requests</h2>
              </div>
              <div className="rounded-xl border-2 border-dashed p-10 text-center">
                <div className="mx-auto mb-3 grid size-10 place-items-center rounded-lg bg-muted">
                  <Inbox className="size-5 text-muted-foreground" />
                </div>
                <div className="font-semibold">No active return requests</div>
                <p className="mx-auto mt-1.5 max-w-sm text-sm text-muted-foreground">
                  Need to initiate a return? Select an item from your order history to start the process.
                </p>
                <button
                  type="button"
                  className="mt-5 inline-flex items-center rounded-md border border-brand bg-background px-5 py-2 text-sm font-semibold text-brand hover:bg-brand hover:text-brand-foreground active:scale-[0.98] transition-colors"
                >
                  Initiate Return
                </button>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2.5 mb-5">
                <MapPin className="size-5 text-brand" />
                <h2 className="text-xl font-bold">Address Book</h2>
              </div>
              <div className="space-y-3">
                <AddressCard
                  tag="SHIPPING DEFAULT"
                  title="Corporate HQ - Logistics Bay"
                  lines={["4500 Industrial Parkway", "Suite 200, Building B", "Detroit, MI 48201"]}
                  highlight
                />
                <AddressCard
                  tag="BILLING ADDRESS"
                  title="Aluminium Village Procurement"
                  lines={["4500 Industrial Parkway", "PO Box 1289", "Detroit, MI 48201"]}
                />
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-md border bg-background px-4 py-2.5 text-sm font-semibold hover:bg-secondary hover:border-brand/40 active:scale-[0.98] transition-colors"
                >
                  <Plus className="size-4" /> Add New Address
                </button>
              </div>
            </div>

            {/* Verified Account */}
            <div className="rounded-2xl bg-primary text-primary-foreground p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="size-5" />
                <h3 className="text-xl font-bold">Verified Account</h3>
              </div>
              <p className="text-sm opacity-80">
                Your account is certified for wholesale pricing and net-30 payment terms.
              </p>
              <div className="mt-4 rounded-lg bg-white/10 px-3 py-2.5 flex items-center justify-between text-sm">
                <span className="opacity-80">Dedicated Agent</span>
                <span className="font-semibold">Marcus Chen</span>
              </div>
              <button
                type="button"
                className="mt-4 w-full rounded-md bg-emerald-400 px-4 py-2.5 text-sm font-bold text-emerald-950 hover:bg-emerald-300 active:scale-[0.98] transition-colors"
              >
                Contact Specialist
              </button>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function AddressCard({
  tag,
  title,
  lines,
  highlight,
}: {
  tag: string;
  title: string;
  lines: string[];
  highlight?: boolean;
}) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? "bg-secondary/60" : "bg-background"}`}>
      <div className="flex items-start justify-between">
        <div className="text-[10px] font-bold tracking-wider text-brand">{tag}</div>
        <button aria-label="Edit address" className="text-muted-foreground hover:text-foreground">
          <Pencil className="size-3.5" />
        </button>
      </div>
      <div className="mt-2 font-semibold">{title}</div>
      <div className="mt-1 text-sm text-muted-foreground leading-relaxed">
        {lines.map((l) => (
          <div key={l}>{l}</div>
        ))}
      </div>
    </div>
  );
}
