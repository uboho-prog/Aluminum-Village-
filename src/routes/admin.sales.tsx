import { createFileRoute } from "@tanstack/react-router";
import { useMemo } from "react";
import { Receipt, Wallet, Clock, CheckCircle2 } from "lucide-react";
import { useAuthUser, type AdminRole } from "@/lib/auth-store";
import { isAdminRole } from "@/lib/admin-access";
import { usePlatform } from "@/lib/platform-store";
import { parseNaira, formatNaira } from "@/lib/payments";
import {
  AdminCard,
  AdminTable,
  EmptyState,
  PageHeader,
  StatCard,
  StatusPill,
} from "@/components/admin-ui";

export const Route = createFileRoute("/admin/sales")({
  head: () => ({
    meta: [
      { title: "Sales | Business Suite" },
      { name: "description", content: "Your sales records, commissions, and vendor payouts." },
    ],
  }),
  component: AdminSalesPage,
});

function AdminSalesPage() {
  const user = useAuthUser();
  const role: AdminRole | null = user && isAdminRole(user.role) ? user.role : null;
  const { orders } = usePlatform();

  const rows = useMemo(
    () => (role === "overall" ? orders : orders.filter((o) => o.sellerId === user?.email)),
    [orders, role, user?.email],
  );

  const totals = useMemo(() => {
    let gross = 0;
    let escrow = 0;
    let released = 0;
    for (const o of rows) {
      const payout = parseNaira(o.subtotal) - parseNaira(o.platformFee);
      gross += parseNaira(o.total);
      if (o.paymentStatus === "Escrow") escrow += payout;
      if (o.paymentStatus === "Released") released += payout;
    }
    return { gross, escrow, released, count: rows.length };
  }, [rows]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <PageHeader
        title="Sales Records"
        description={
          role === "overall"
            ? "Every order across the platform, with commission and payout status."
            : "Your orders, the platform commission, and your payout status."
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="GROSS SALES" value={formatNaira(totals.gross)} icon={Receipt} tone="sky" />
        <StatCard label="ORDERS" value={totals.count} icon={CheckCircle2} tone="violet" />
        <StatCard
          label="HELD IN ESCROW"
          value={formatNaira(totals.escrow)}
          hint="Awaiting release by Aluminium Village"
          icon={Clock}
          tone="amber"
        />
        <StatCard
          label="PAID OUT"
          value={formatNaira(totals.released)}
          hint="Released to your account"
          icon={Wallet}
          tone="emerald"
        />
      </div>

      <AdminCard title="Orders" subtitle={`${rows.length} record(s)`}>
        {rows.length === 0 ? (
          <EmptyState
            icon={Receipt}
            title="No sales yet"
            hint="When a buyer orders one of your products, it appears here with its escrow and payout status."
          />
        ) : (
          <AdminTable
            head={
              <>
                <th className="py-2.5 pr-3 font-semibold">Order</th>
                <th className="py-2.5 pr-3 font-semibold">Buyer</th>
                {role === "overall" && <th className="py-2.5 pr-3 font-semibold">Vendor</th>}
                <th className="py-2.5 pr-3 font-semibold">Items</th>
                <th className="py-2.5 pr-3 font-semibold">Total</th>
                <th className="py-2.5 pr-3 font-semibold">Commission</th>
                <th className="py-2.5 pr-3 font-semibold">Your Payout</th>
                <th className="py-2.5 font-semibold">Payment</th>
              </>
            }
          >
            {rows.map((o) => {
              const payout = parseNaira(o.subtotal) - parseNaira(o.platformFee);
              return (
                <tr
                  key={o.id}
                  className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors"
                >
                  <td className="py-3 pr-3">
                    <div className="font-semibold text-white">#{o.orderNumber}</div>
                    <div className="text-[11px] text-slate-500">
                      {new Date(o.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="py-3 pr-3 text-slate-300">{o.buyerName}</td>
                  {role === "overall" && (
                    <td className="py-3 pr-3 text-slate-300">{o.sellerName}</td>
                  )}
                  <td className="py-3 pr-3 text-slate-400">
                    {o.items.reduce((n, it) => n + it.quantity, 0)} unit(s)
                  </td>
                  <td className="py-3 pr-3 font-semibold text-white">{o.total}</td>
                  <td className="py-3 pr-3 text-rose-300">-{o.platformFee}</td>
                  <td className="py-3 pr-3 font-semibold text-emerald-400">
                    {formatNaira(payout)}
                  </td>
                  <td className="py-3">
                    <StatusPill status={o.paymentStatus} />
                  </td>
                </tr>
              );
            })}
          </AdminTable>
        )}
      </AdminCard>
    </div>
  );
}
