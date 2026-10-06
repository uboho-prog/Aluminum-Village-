import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  Wallet,
  Landmark,
  ArrowRight,
  ShieldCheck,
  CircleDollarSign,
  Clock,
  Undo2,
  Receipt,
} from "lucide-react";
import { usePlatform, releasePaymentToVendor, refundOrder } from "@/lib/platform-store";
import { parseNaira, formatNaira } from "@/lib/payments";
import type { PlatformOrder } from "@/lib/admin-models";
import {
  AdminCard,
  AdminModal,
  AdminTable,
  EmptyState,
  GhostButton,
  PageHeader,
  PrimaryButton,
  StatCard,
  StatusPill,
} from "@/components/admin-ui";

export const Route = createFileRoute("/admin/payments")({
  head: () => ({
    meta: [
      { title: "Payments | Overall Admin" },
      { name: "description", content: "Escrow holds, vendor payouts, and the transaction ledger." },
    ],
  }),
  component: AdminPaymentsPage,
});

type Confirm = { title: string; body: string; label: string; danger?: boolean; run: () => void };

function AdminPaymentsPage() {
  const { orders, payments } = usePlatform();
  const [confirm, setConfirm] = useState<Confirm | null>(null);

  const escrow = useMemo(() => orders.filter((o) => o.paymentStatus === "Escrow"), [orders]);

  const totals = useMemo(() => {
    let processed = 0;
    let held = 0;
    let released = 0;
    let commission = 0;
    for (const o of orders) {
      const payout = parseNaira(o.subtotal) - parseNaira(o.platformFee);
      if (o.paymentStatus !== "Refunded") {
        processed += parseNaira(o.total);
        commission += parseNaira(o.platformFee);
      }
      if (o.paymentStatus === "Escrow") held += payout;
      if (o.paymentStatus === "Released") released += payout;
    }
    return { processed, held, released, commission };
  }, [orders]);

  const payout = (o: PlatformOrder) => formatNaira(parseNaira(o.subtotal) - parseNaira(o.platformFee));

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <PageHeader
        title="Payments"
        description="Every order is paid into Aluminium Village and held in escrow. Release funds to the vendor once fulfilment is confirmed."
      />

      {/* Flow strip */}
      <div className="rounded-2xl bg-gradient-to-br from-[#0b50c4] to-[#1a3a7a] p-5">
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white sm:gap-6">
          <span className="inline-flex items-center gap-2">
            <Wallet className="size-5" /> Buyer pays
          </span>
          <ArrowRight className="size-4 text-white/70" />
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5">
            <ShieldCheck className="size-5" /> Held by Aluminium Village (escrow)
          </span>
          <ArrowRight className="size-4 text-white/70" />
          <span className="inline-flex items-center gap-2">
            <Landmark className="size-5" /> Released to vendor
          </span>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="TOTAL PROCESSED" value={formatNaira(totals.processed)} icon={CircleDollarSign} tone="sky" />
        <StatCard label="HELD IN ESCROW" value={formatNaira(totals.held)} hint={`${escrow.length} order(s)`} icon={Clock} tone="amber" />
        <StatCard label="RELEASED TO VENDORS" value={formatNaira(totals.released)} icon={Wallet} tone="emerald" />
        <StatCard label="PLATFORM COMMISSION" value={formatNaira(totals.commission)} icon={Receipt} tone="violet" />
      </div>

      {/* Escrow holds */}
      <AdminCard title="Funds held in escrow" subtitle="Awaiting release to the vendor">
        {escrow.length === 0 ? (
          <EmptyState icon={ShieldCheck} title="No funds in escrow" hint="New orders will appear here until you release them." />
        ) : (
          <AdminTable
            head={
              <>
                <th className="py-2.5 pr-3 font-semibold">Order</th>
                <th className="py-2.5 pr-3 font-semibold">Buyer → Vendor</th>
                <th className="py-2.5 pr-3 font-semibold">Total</th>
                <th className="py-2.5 pr-3 font-semibold">Commission</th>
                <th className="py-2.5 pr-3 font-semibold">Vendor Payout</th>
                <th className="py-2.5 font-semibold text-right">Action</th>
              </>
            }
          >
            {escrow.map((o) => (
              <tr key={o.id} className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors">
                <td className="py-3 pr-3">
                  <div className="font-semibold text-white">#{o.orderNumber}</div>
                  <div className="text-[11px] text-slate-500">{new Date(o.createdAt).toLocaleDateString()}</div>
                </td>
                <td className="py-3 pr-3 text-slate-300">
                  <span className="text-white">{o.buyerName}</span> → <span className="text-white">{o.sellerName}</span>
                </td>
                <td className="py-3 pr-3 font-semibold text-white">{o.total}</td>
                <td className="py-3 pr-3 text-violet-300">{o.platformFee}</td>
                <td className="py-3 pr-3 font-semibold text-emerald-400">{payout(o)}</td>
                <td className="py-3 text-right">
                  <div className="inline-flex items-center gap-2">
                    <PrimaryButton
                      className="px-3 py-2"
                      onClick={() =>
                        setConfirm({
                          title: `Release ${payout(o)} to ${o.sellerName}?`,
                          body: `This releases the escrowed funds for order #${o.orderNumber} to the vendor. Aluminium Village keeps ${o.platformFee} commission.`,
                          label: "Release to Vendor",
                          run: () => {
                            releasePaymentToVendor(o.id);
                            toast.success(`Released ${payout(o)} to ${o.sellerName}.`);
                          },
                        })
                      }
                    >
                      Release
                    </PrimaryButton>
                    <button
                      onClick={() =>
                        setConfirm({
                          title: `Refund order #${o.orderNumber}?`,
                          body: `This refunds ${o.total} to ${o.buyerName} and cancels the order. This cannot be undone.`,
                          label: "Refund buyer",
                          danger: true,
                          run: () => {
                            refundOrder(o.id);
                            toast(`Refunded ${o.total} to ${o.buyerName}.`);
                          },
                        })
                      }
                      className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 hover:underline"
                    >
                      <Undo2 className="size-3.5" /> Refund
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </AdminTable>
        )}
      </AdminCard>

      {/* Ledger */}
      <AdminCard title="Transaction Ledger" subtitle={`${payments.length} transaction(s)`}>
        {payments.length === 0 ? (
          <EmptyState icon={Receipt} title="No transactions yet" />
        ) : (
          <AdminTable
            head={
              <>
                <th className="py-2.5 pr-3 font-semibold">Reference</th>
                <th className="py-2.5 pr-3 font-semibold">Type</th>
                <th className="py-2.5 pr-3 font-semibold">Order</th>
                <th className="py-2.5 pr-3 font-semibold">Amount</th>
                <th className="py-2.5 pr-3 font-semibold">Status</th>
                <th className="py-2.5 font-semibold">Date</th>
              </>
            }
          >
            {payments.map((t) => (
              <tr key={t.id} className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors">
                <td className="py-3 pr-3 font-mono text-[11px] text-slate-400">{t.paystackReference}</td>
                <td className="py-3 pr-3 text-slate-300">{t.type}</td>
                <td className="py-3 pr-3 text-slate-400">#{t.orderNumber}</td>
                <td className="py-3 pr-3 font-semibold text-white">{t.amount}</td>
                <td className="py-3 pr-3">
                  <StatusPill status={t.status} />
                </td>
                <td className="py-3 text-slate-400">{new Date(t.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </AdminTable>
        )}
      </AdminCard>

      <AdminModal
        open={!!confirm}
        onClose={() => setConfirm(null)}
        title={confirm?.title ?? ""}
        footer={
          <>
            <GhostButton onClick={() => setConfirm(null)}>Cancel</GhostButton>
            <PrimaryButton
              className={confirm?.danger ? "bg-rose-600 shadow-rose-600/25 hover:bg-rose-700" : ""}
              onClick={() => {
                confirm?.run();
                setConfirm(null);
              }}
            >
              {confirm?.label}
            </PrimaryButton>
          </>
        }
      >
        <p className="text-sm text-slate-300">{confirm?.body}</p>
      </AdminModal>
    </div>
  );
}
