import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import {
  ShieldCheck,
  Building2,
  UserCircle,
  Package,
  Check,
  X,
  MessageSquareWarning,
  BadgeCheck,
} from "lucide-react";
import { useAuthUser } from "@/lib/auth-store";
import {
  usePlatform,
  approveApplication,
  rejectApplication,
  approveProduct,
  rejectProduct,
  requestProductChanges,
} from "@/lib/platform-store";
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
} from "@/components/admin-ui";

export const Route = createFileRoute("/admin/approvals")({
  head: () => ({
    meta: [
      { title: "Approvals | Overall Admin" },
      { name: "description", content: "Approve businesses, professionals, and products." },
    ],
  }),
  component: AdminApprovalsPage,
});

type NoteAction = { title: string; label: string; run: (note: string) => void };

function AdminApprovalsPage() {
  const user = useAuthUser();
  const reviewer = user?.name ?? "Overall Admin";
  const { applications, products } = usePlatform();
  const [noteAction, setNoteAction] = useState<NoteAction | null>(null);
  const [note, setNote] = useState("");

  const pendingBiz = applications.business.filter(
    (a) => a.status === "Pending" || a.status === "Under Review",
  );
  const pendingPro = applications.professional.filter(
    (a) => a.status === "Pending" || a.status === "Under Review",
  );
  const pendingProducts = useMemo(
    () => products.filter((p) => p.status === "Pending Approval"),
    [products],
  );

  const openNote = (action: NoteAction) => {
    setNote("");
    setNoteAction(action);
  };
  const confirmNote = () => {
    if (!noteAction) return;
    if (!note.trim()) {
      toast.error("Add a short note.");
      return;
    }
    noteAction.run(note.trim());
    setNoteAction(null);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <PageHeader
        title="Approvals"
        description="Approve business suites, professionals, and the products they post before they go live."
      />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard
          label="BUSINESS APPLICATIONS"
          value={pendingBiz.length}
          icon={Building2}
          tone="sky"
        />
        <StatCard
          label="PROFESSIONAL APPLICATIONS"
          value={pendingPro.length}
          icon={UserCircle}
          tone="violet"
        />
        <StatCard
          label="PRODUCTS PENDING"
          value={pendingProducts.length}
          icon={Package}
          tone="amber"
        />
      </div>

      {/* Business applications */}
      <AdminCard
        title="Business Applications"
        subtitle="New vendors applying to sell on the platform"
      >
        {pendingBiz.length === 0 ? (
          <EmptyState icon={BadgeCheck} title="No pending business applications" />
        ) : (
          <div className="space-y-3">
            {pendingBiz.map((a) => (
              <div key={a.id} className="rounded-lg border border-slate-700 bg-slate-800/40 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white">{a.businessName}</h3>
                      <StatusPill status={a.status} />
                    </div>
                    <div className="mt-1 text-sm text-slate-400">
                      {a.ownerName} · {a.category} · {a.email} · {a.phone}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      {a.address} · CAC {a.cacNumber} · Bank: {a.bankDetails.bankName}{" "}
                      {a.bankDetails.accountNumber}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <PrimaryButton
                      onClick={() => {
                        approveApplication("business", a.id, reviewer);
                        toast.success(`${a.businessName} approved.`);
                      }}
                    >
                      <Check className="size-4" /> Approve
                    </PrimaryButton>
                    <GhostButton
                      onClick={() =>
                        openNote({
                          title: `Reject ${a.businessName}`,
                          label: "Reject application",
                          run: (n) => {
                            rejectApplication("business", a.id, reviewer, n);
                            toast("Application rejected.");
                          },
                        })
                      }
                    >
                      <X className="size-4" /> Reject
                    </GhostButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </AdminCard>

      {/* Professional applications */}
      <AdminCard
        title="Professional Applications"
        subtitle="Individuals applying to render services"
      >
        {pendingPro.length === 0 ? (
          <EmptyState icon={BadgeCheck} title="No pending professional applications" />
        ) : (
          <div className="space-y-3">
            {pendingPro.map((a) => (
              <div key={a.id} className="rounded-lg border border-slate-700 bg-slate-800/40 p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white">{a.fullName}</h3>
                      <StatusPill status={a.status} />
                    </div>
                    <div className="mt-1 text-sm text-slate-400">
                      {a.headline} · {a.experience} · {a.email} · {a.phone}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {a.skills.map((s) => (
                        <span
                          key={s}
                          className="rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-[11px] text-slate-300"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <PrimaryButton
                      onClick={() => {
                        approveApplication("professional", a.id, reviewer);
                        toast.success(`${a.fullName} approved and added to the directory.`);
                      }}
                    >
                      <Check className="size-4" /> Approve
                    </PrimaryButton>
                    <GhostButton
                      onClick={() =>
                        openNote({
                          title: `Reject ${a.fullName}`,
                          label: "Reject application",
                          run: (n) => {
                            rejectApplication("professional", a.id, reviewer, n);
                            toast("Application rejected.");
                          },
                        })
                      }
                    >
                      <X className="size-4" /> Reject
                    </GhostButton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </AdminCard>

      {/* Product approvals */}
      <AdminCard
        title="Product Approvals"
        subtitle="Products awaiting review before appearing on the marketplace"
      >
        {pendingProducts.length === 0 ? (
          <EmptyState icon={BadgeCheck} title="No products pending approval" />
        ) : (
          <div className="grid gap-3 md:grid-cols-2">
            {pendingProducts.map((p) => (
              <div key={p.id} className="rounded-lg border border-slate-700 bg-slate-800/40 p-4">
                <div className="flex gap-3">
                  <img
                    src={p.images[0]}
                    alt=""
                    className="size-16 rounded-md object-cover bg-slate-700 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white truncate">{p.name}</h3>
                    <div className="text-xs text-slate-400">
                      {p.sellerName} · {p.category}
                    </div>
                    <div className="mt-0.5 text-sm font-semibold text-white">
                      {p.price} <span className="text-[11px] text-slate-500">/ {p.unit}</span>
                    </div>
                  </div>
                </div>
                <p className="mt-2 text-xs text-slate-400 line-clamp-2">{p.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <PrimaryButton
                    className="px-3 py-2"
                    onClick={() => {
                      approveProduct(p.id, reviewer);
                      toast.success(`${p.name} approved — now live on the marketplace.`);
                    }}
                  >
                    <Check className="size-4" /> Approve
                  </PrimaryButton>
                  <GhostButton
                    className="px-3 py-2"
                    onClick={() =>
                      openNote({
                        title: `Request changes · ${p.name}`,
                        label: "Request changes",
                        run: (n) => {
                          requestProductChanges(p.id, reviewer, n);
                          toast("Changes requested — sent back to the vendor.");
                        },
                      })
                    }
                  >
                    <MessageSquareWarning className="size-4" /> Request changes
                  </GhostButton>
                  <button
                    onClick={() =>
                      openNote({
                        title: `Reject · ${p.name}`,
                        label: "Reject product",
                        run: (n) => {
                          rejectProduct(p.id, reviewer, n);
                          toast("Product rejected.");
                        },
                      })
                    }
                    className="text-xs font-semibold text-rose-400 hover:underline"
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </AdminCard>

      <AdminModal
        open={!!noteAction}
        onClose={() => setNoteAction(null)}
        title={noteAction?.title ?? ""}
        footer={
          <>
            <GhostButton onClick={() => setNoteAction(null)}>Cancel</GhostButton>
            <PrimaryButton onClick={confirmNote}>{noteAction?.label}</PrimaryButton>
          </>
        }
      >
        <FieldLabel>Note to the applicant / vendor</FieldLabel>
        <TextArea
          rows={3}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Explain what needs to change or why this was rejected…"
          autoFocus
        />
      </AdminModal>
    </div>
  );
}
