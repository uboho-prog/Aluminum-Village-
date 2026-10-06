import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Inbox, Mail, Phone, Wallet, CalendarClock, Send, Quote } from "lucide-react";
import { useMyProfile, useMyRequests, respondToRequest, setRequestStatus } from "@/lib/platform-store";
import type { ServiceRequest } from "@/lib/admin-models";
import {
  AdminCard,
  AdminModal,
  EmptyState,
  FieldLabel,
  GhostButton,
  PageHeader,
  PrimaryButton,
  StatCard,
  StatusPill,
  TextArea,
  TextInput,
} from "@/components/admin-ui";

export const Route = createFileRoute("/admin/requests")({
  head: () => ({
    meta: [
      { title: "Requests | Professional Suite" },
      { name: "description", content: "Clients requesting your services." },
    ],
  }),
  component: AdminRequestsPage,
});

function AdminRequestsPage() {
  const profile = useMyProfile();
  const requests = useMyRequests();
  const [quoteFor, setQuoteFor] = useState<ServiceRequest | null>(null);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [terms, setTerms] = useState("");

  const stats = useMemo(() => {
    return {
      total: requests.length,
      newCount: requests.filter((r) => r.status === "New").length,
      quoted: requests.filter((r) => r.status === "Quoted").length,
      won: requests.filter((r) => ["Accepted", "In Progress", "Completed"].includes(r.status)).length,
    };
  }, [requests]);

  const openQuote = (r: ServiceRequest) => {
    setQuoteFor(r);
    setAmount(r.quote?.amount ?? r.budget);
    setDescription(r.quote?.description ?? "");
    setDeliveryTime(r.quote?.deliveryTime ?? "");
    setTerms(r.quote?.terms ?? "50% upfront via escrow, balance on delivery.");
  };

  const sendQuote = () => {
    if (!quoteFor) return;
    if (!amount.trim()) {
      toast.error("Add a quote amount.");
      return;
    }
    respondToRequest(quoteFor.id, {
      amount: amount.trim(),
      description: description.trim(),
      deliveryTime: deliveryTime.trim() || "To be agreed",
      terms: terms.trim(),
    });
    toast.success(`Quote sent to ${quoteFor.clientName}.`);
    setQuoteFor(null);
  };

  if (!profile) {
    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <PageHeader title="Requests" description="Clients requesting your services." />
        <AdminCard>
          <EmptyState
            icon={Inbox}
            title="Set up your profile first"
            hint="Once your profile and services are live, client requests show up here."
            action={
              <Link to="/admin/profile">
                <PrimaryButton>Go to profile</PrimaryButton>
              </Link>
            }
          />
        </AdminCard>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <PageHeader title="Service Requests" description="See who wants your services and respond with a quote." />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="TOTAL" value={stats.total} icon={Inbox} tone="sky" />
        <StatCard label="NEW" value={stats.newCount} icon={Mail} tone="amber" />
        <StatCard label="QUOTED" value={stats.quoted} icon={Quote} tone="violet" />
        <StatCard label="WON" value={stats.won} icon={Wallet} tone="emerald" />
      </div>

      {requests.length === 0 ? (
        <AdminCard>
          <EmptyState
            icon={Inbox}
            title="No requests yet"
            hint="When a buyer requests a service from your public profile, it lands here."
          />
        </AdminCard>
      ) : (
        <div className="space-y-4">
          {requests.map((r) => (
            <AdminCard key={r.id}>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white">{r.serviceTitle}</h3>
                    <StatusPill status={r.status} />
                  </div>
                  <p className="mt-1 text-sm text-slate-300">{r.message}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-slate-200">{r.clientName}</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Mail className="size-3.5" /> {r.clientEmail}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="size-3.5" /> {r.clientPhone}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Wallet className="size-3.5" /> Budget {r.budget}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarClock className="size-3.5" /> {r.timeline}
                    </span>
                  </div>

                  {r.quote && (
                    <div className="mt-3 rounded-lg border border-slate-700 bg-slate-800/50 p-3">
                      <div className="flex items-center justify-between">
                        <div className="text-[11px] font-bold tracking-wider text-slate-400">YOUR QUOTE</div>
                        <StatusPill status={r.quote.status} />
                      </div>
                      <div className="mt-1 text-lg font-bold text-white">{r.quote.amount}</div>
                      <div className="text-xs text-slate-400">{r.quote.description}</div>
                      <div className="mt-1 text-[11px] text-slate-500">
                        {r.quote.deliveryTime} · {r.quote.terms}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex shrink-0 flex-col gap-2 sm:w-40">
                  <PrimaryButton onClick={() => openQuote(r)}>
                    <Send className="size-4" /> {r.quote ? "Update Quote" : "Send Quote"}
                  </PrimaryButton>
                  {r.status !== "Completed" && r.status !== "Cancelled" && (
                    <>
                      <GhostButton onClick={() => (setRequestStatus(r.id, "In Progress"), toast.success("Marked in progress."))}>
                        Mark In Progress
                      </GhostButton>
                      <button
                        onClick={() => (setRequestStatus(r.id, "Cancelled"), toast("Request declined."))}
                        className="text-xs font-semibold text-rose-400 hover:underline"
                      >
                        Decline
                      </button>
                    </>
                  )}
                </div>
              </div>
            </AdminCard>
          ))}
        </div>
      )}

      <AdminModal
        open={!!quoteFor}
        onClose={() => setQuoteFor(null)}
        title="Send a Quote"
        description={quoteFor ? `To ${quoteFor.clientName} · ${quoteFor.serviceTitle}` : undefined}
        footer={
          <>
            <GhostButton onClick={() => setQuoteFor(null)}>Cancel</GhostButton>
            <PrimaryButton onClick={sendQuote}>
              <Send className="size-4" /> Send Quote
            </PrimaryButton>
          </>
        }
      >
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <FieldLabel>Amount (₦)</FieldLabel>
              <TextInput value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="₦720,000" />
            </div>
            <div>
              <FieldLabel>Delivery Time</FieldLabel>
              <TextInput value={deliveryTime} onChange={(e) => setDeliveryTime(e.target.value)} placeholder="2 weeks" />
            </div>
          </div>
          <div>
            <FieldLabel>Scope / Description</FieldLabel>
            <TextArea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What the quote covers…"
            />
          </div>
          <div>
            <FieldLabel>Terms</FieldLabel>
            <TextInput value={terms} onChange={(e) => setTerms(e.target.value)} />
          </div>
        </div>
      </AdminModal>
    </div>
  );
}
