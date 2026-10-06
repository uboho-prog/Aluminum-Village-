import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { Briefcase, Plus, Pencil, Trash2, Clock, RefreshCw, X } from "lucide-react";
import { useMyProfile, saveService, removeService, uid } from "@/lib/platform-store";
import type { ProfessionalService } from "@/lib/admin-models";
import {
  AdminCard,
  AdminModal,
  EmptyState,
  FieldLabel,
  GhostButton,
  PageHeader,
  PrimaryButton,
  SelectInput,
  StatusPill,
  TextArea,
  TextInput,
} from "@/components/admin-ui";

export const Route = createFileRoute("/admin/services")({
  head: () => ({
    meta: [
      { title: "Services | Professional Suite" },
      { name: "description", content: "List the services you render and your rates." },
    ],
  }),
  component: AdminServicesPage,
});

const PRICE_TYPES: ProfessionalService["priceType"][] = ["Fixed", "Hourly", "Project-based"];
const STATUSES: ProfessionalService["status"][] = ["Active", "Paused", "Draft"];

type SvcForm = {
  title: string;
  category: string;
  description: string;
  priceType: ProfessionalService["priceType"];
  price: string;
  deliveryTime: string;
  revisions: string;
  features: string[];
  status: ProfessionalService["status"];
};

const blank: SvcForm = {
  title: "",
  category: "",
  description: "",
  priceType: "Fixed",
  price: "",
  deliveryTime: "",
  revisions: "1",
  features: [],
  status: "Active",
};

function AdminServicesPage() {
  const profile = useMyProfile();
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<SvcForm>(blank);
  const [featureDraft, setFeatureDraft] = useState("");

  if (!profile) {
    return (
      <div className="max-w-5xl mx-auto space-y-6">
        <PageHeader title="Services" description="List what you can do for clients." />
        <AdminCard>
          <EmptyState
            icon={Briefcase}
            title="Set up your profile first"
            hint="Create your professional profile before adding services."
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

  const openNew = () => {
    setEditingId(null);
    setForm(blank);
    setOpen(true);
  };
  const openEdit = (svc: ProfessionalService) => {
    setEditingId(svc.id);
    setForm({
      title: svc.title,
      category: svc.category,
      description: svc.description,
      priceType: svc.priceType,
      price: svc.price,
      deliveryTime: svc.deliveryTime,
      revisions: String(svc.revisions),
      features: svc.features,
      status: svc.status,
    });
    setOpen(true);
  };

  const addFeature = () => {
    const f = featureDraft.trim();
    if (!f) return;
    setForm((s) => ({ ...s, features: [...s.features, f] }));
    setFeatureDraft("");
  };

  const save = () => {
    if (!form.title.trim() || !form.price.trim()) {
      toast.error("A service needs at least a title and price.");
      return;
    }
    const svc: ProfessionalService = {
      id: editingId ?? uid("AV-SVC"),
      title: form.title.trim(),
      description: form.description.trim(),
      category: form.category.trim() || "General",
      priceType: form.priceType,
      price: form.price.trim(),
      deliveryTime: form.deliveryTime.trim() || "Flexible",
      revisions: Number(form.revisions) || 0,
      features: form.features,
      status: form.status,
    };
    saveService(profile.id, svc);
    toast.success(editingId ? "Service updated." : "Service added.");
    setOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <PageHeader
        title="Services"
        description="The services you render — like gigs on your profile. Clients request these directly."
        actions={
          <PrimaryButton onClick={openNew}>
            <Plus className="size-4" /> Add Service
          </PrimaryButton>
        }
      />

      {profile.services.length === 0 ? (
        <AdminCard>
          <EmptyState
            icon={Briefcase}
            title="No services yet"
            hint="Add the services you offer so buyers know what they can request from you."
            action={
              <PrimaryButton onClick={openNew}>
                <Plus className="size-4" /> Add Service
              </PrimaryButton>
            }
          />
        </AdminCard>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {profile.services.map((svc) => (
            <div key={svc.id} className="rounded-2xl bg-[#1e293b] border border-slate-700/50 p-5">
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-bold text-white">{svc.title}</h3>
                <StatusPill status={svc.status} />
              </div>
              <p className="mt-1.5 text-sm text-slate-400 line-clamp-3">{svc.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {svc.features.map((f) => (
                  <span key={f} className="rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 text-[11px] text-slate-300">
                    {f}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-slate-700/50 pt-3">
                <div>
                  <div className="text-lg font-bold text-white">{svc.price}</div>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500">
                    <span>{svc.priceType}</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-3" /> {svc.deliveryTime}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <RefreshCw className="size-3" /> {svc.revisions} rev
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => openEdit(svc)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white"
                  >
                    <Pencil className="size-3.5" /> Edit
                  </button>
                  <button
                    onClick={() => {
                      removeService(profile.id, svc.id);
                      toast.success("Service removed.");
                    }}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-rose-400 hover:underline"
                  >
                    <Trash2 className="size-3.5" /> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <AdminModal
        open={open}
        onClose={() => setOpen(false)}
        wide
        title={editingId ? "Edit Service" : "Add a Service"}
        footer={
          <>
            <GhostButton onClick={() => setOpen(false)}>Cancel</GhostButton>
            <PrimaryButton onClick={save}>{editingId ? "Save" : "Add Service"}</PrimaryButton>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <FieldLabel>Title</FieldLabel>
            <TextInput
              value={form.title}
              onChange={(e) => setForm((s) => ({ ...s, title: e.target.value }))}
              placeholder="Custom Aluminium Window Fabrication"
            />
          </div>
          <div>
            <FieldLabel>Description</FieldLabel>
            <TextArea
              rows={3}
              value={form.description}
              onChange={(e) => setForm((s) => ({ ...s, description: e.target.value }))}
              placeholder="What's included, your process, and what the client gets."
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <FieldLabel>Category</FieldLabel>
              <TextInput
                value={form.category}
                onChange={(e) => setForm((s) => ({ ...s, category: e.target.value }))}
                placeholder="Fabrication"
              />
            </div>
            <div>
              <FieldLabel>Status</FieldLabel>
              <SelectInput
                value={form.status}
                onChange={(e) => setForm((s) => ({ ...s, status: e.target.value as ProfessionalService["status"] }))}
              >
                {STATUSES.map((st) => (
                  <option key={st} value={st}>
                    {st}
                  </option>
                ))}
              </SelectInput>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <FieldLabel>Pricing</FieldLabel>
              <SelectInput
                value={form.priceType}
                onChange={(e) => setForm((s) => ({ ...s, priceType: e.target.value as ProfessionalService["priceType"] }))}
              >
                {PRICE_TYPES.map((pt) => (
                  <option key={pt} value={pt}>
                    {pt}
                  </option>
                ))}
              </SelectInput>
            </div>
            <div>
              <FieldLabel>Price (₦)</FieldLabel>
              <TextInput
                value={form.price}
                onChange={(e) => setForm((s) => ({ ...s, price: e.target.value }))}
                placeholder="₦250,000"
              />
            </div>
            <div>
              <FieldLabel>Delivery</FieldLabel>
              <TextInput
                value={form.deliveryTime}
                onChange={(e) => setForm((s) => ({ ...s, deliveryTime: e.target.value }))}
                placeholder="2–3 weeks"
              />
            </div>
          </div>
          <div>
            <FieldLabel>What's included</FieldLabel>
            <div className="mb-2 flex flex-wrap gap-2">
              {form.features.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-700/60 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {f}
                  <button
                    type="button"
                    onClick={() => setForm((s) => ({ ...s, features: s.features.filter((x) => x !== f) }))}
                    className="text-slate-400 hover:text-rose-400"
                  >
                    <X className="size-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <TextInput
                value={featureDraft}
                onChange={(e) => setFeatureDraft(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
                placeholder="Add a feature and press Enter"
              />
              <GhostButton type="button" onClick={addFeature}>
                Add
              </GhostButton>
            </div>
          </div>
        </div>
      </AdminModal>
    </div>
  );
}
