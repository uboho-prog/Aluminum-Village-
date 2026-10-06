import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import {
  Package,
  Plus,
  Pencil,
  Send,
  ImagePlus,
  Link2,
  Trash2,
  TrendingUp,
  Eye,
  MessageSquare,
  ShoppingBag,
  AlertTriangle,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { useAuthUser } from "@/lib/auth-store";
import {
  useMyProducts,
  createProduct,
  updateProduct,
  submitProductForApproval,
  type ProductDraft,
} from "@/lib/platform-store";
import { parseNaira, formatNaira } from "@/lib/payments";
import type { BusinessProduct } from "@/lib/admin-models";
import {
  AdminCard,
  AdminModal,
  AdminTable,
  EmptyState,
  FieldLabel,
  GhostButton,
  PageHeader,
  PrimaryButton,
  SelectInput,
  StatCard,
  StatusPill,
  TextArea,
  TextInput,
} from "@/components/admin-ui";

export const Route = createFileRoute("/admin/products")({
  head: () => ({
    meta: [
      { title: "Products | Business Suite" },
      { name: "description", content: "Post products, add images, and track approvals." },
    ],
  }),
  component: AdminProductsPage,
});

const CATEGORIES = ["Profiles & Extrusions", "Doors", "Gates", "Windows", "Railings"];
const UNITS = ["Per Meter", "Per Pc", "Per 6m Length", "Per Kg", "Per Sheet", "Per Unit"];

type SpecRow = { key: string; value: string };

type FormState = {
  name: string;
  category: string;
  price: string;
  unit: string;
  stock: string;
  minOrder: string;
  description: string;
  specs: SpecRow[];
  images: string[];
};

const blankForm: FormState = {
  name: "",
  category: CATEGORIES[0],
  price: "",
  unit: UNITS[0],
  stock: "",
  minOrder: "1",
  description: "",
  specs: [
    { key: "Grade", value: "" },
    { key: "Finish", value: "" },
  ],
  images: [],
};

function toForm(p: BusinessProduct): FormState {
  return {
    name: p.name,
    category: p.category,
    price: p.price,
    unit: p.unit,
    stock: String(p.stock),
    minOrder: String(p.minOrder),
    description: p.description,
    specs: Object.entries(p.specifications).map(([key, value]) => ({ key, value })),
    images: p.images,
  };
}

function AdminProductsPage() {
  const user = useAuthUser();
  const products = useMyProducts();
  const [tab, setTab] = useState<"catalog" | "performance">("catalog");
  const [editing, setEditing] = useState<BusinessProduct | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState<FormState>(blankForm);

  const openNew = () => {
    setEditing(null);
    setForm(blankForm);
    setModalOpen(true);
  };
  const openEdit = (p: BusinessProduct) => {
    setEditing(p);
    setForm(toForm(p));
    setModalOpen(true);
  };

  const buildDraft = (): ProductDraft => ({
    name: form.name.trim(),
    description: form.description.trim(),
    category: form.category,
    price: form.price.trim().startsWith("₦") ? form.price.trim() : formatNaira(parseNaira(form.price)),
    unit: form.unit,
    stock: Number(form.stock) || 0,
    minOrder: Number(form.minOrder) || 1,
    specifications: Object.fromEntries(
      form.specs.filter((s) => s.key.trim() && s.value.trim()).map((s) => [s.key.trim(), s.value.trim()]),
    ),
    images: form.images,
  });

  const save = (submit: boolean) => {
    if (!form.name.trim() || !form.price.trim()) {
      toast.error("Add at least a product name and price.");
      return;
    }
    const seller = { id: user?.email ?? "", name: user?.name ?? "Business" };
    if (editing) {
      const draft = buildDraft();
      updateProduct(editing.id, {
        ...draft,
        status: submit ? "Pending Approval" : editing.status,
      });
      toast.success(submit ? "Product resubmitted for approval." : "Product updated.");
    } else {
      createProduct(seller, buildDraft(), submit);
      toast.success(submit ? "Product submitted for approval." : "Product saved as draft.");
    }
    setModalOpen(false);
  };

  const totals = useMemo(() => {
    return products.reduce(
      (acc, p) => ({
        views: acc.views + p.views,
        inquiries: acc.inquiries + p.inquiries,
        orders: acc.orders + p.orders,
        revenue: acc.revenue + parseNaira(p.totalRevenue),
      }),
      { views: 0, inquiries: 0, orders: 0, revenue: 0 },
    );
  }, [products]);

  const chartData = products.map((p) => ({
    name: p.name.length > 14 ? p.name.slice(0, 12) + "…" : p.name,
    orders: p.orders,
    revenue: Math.round(parseNaira(p.totalRevenue) / 1000),
  }));

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <PageHeader
        title="Products"
        description="Post your catalog, add images, and track approvals and sales."
        actions={
          <PrimaryButton onClick={openNew}>
            <Plus className="size-4" /> Post Product
          </PrimaryButton>
        }
      />

      {/* Tabs */}
      <div className="flex items-center gap-1 rounded-lg bg-slate-800/60 p-1 w-fit">
        {(["catalog", "performance"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-md px-4 py-1.5 text-sm font-semibold capitalize transition ${
              tab === t ? "bg-[#0b50c4] text-white" : "text-slate-400 hover:text-white"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {tab === "catalog" ? (
        <AdminCard title="Your Catalog" subtitle={`${products.length} product(s)`}>
          {products.length === 0 ? (
            <EmptyState
              icon={Package}
              title="No products yet"
              hint="Post your first product. It will go to the overall admin for approval before appearing on the marketplace."
              action={
                <PrimaryButton onClick={openNew}>
                  <Plus className="size-4" /> Post Product
                </PrimaryButton>
              }
            />
          ) : (
            <AdminTable
              head={
                <>
                  <th className="py-2.5 pr-3 font-semibold">Product</th>
                  <th className="py-2.5 pr-3 font-semibold">Category</th>
                  <th className="py-2.5 pr-3 font-semibold">Price</th>
                  <th className="py-2.5 pr-3 font-semibold">Stock</th>
                  <th className="py-2.5 pr-3 font-semibold">Orders</th>
                  <th className="py-2.5 pr-3 font-semibold">Status</th>
                  <th className="py-2.5 font-semibold text-right">Actions</th>
                </>
              }
            >
              {products.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-slate-700/30 last:border-0 hover:bg-slate-800/50 transition-colors"
                >
                  <td className="py-3 pr-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.images[0]}
                        alt=""
                        className="size-10 rounded-md object-cover bg-slate-700 shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="font-semibold text-white truncate max-w-[220px]">{p.name}</div>
                        {p.status === "Draft" && p.rejectionReason && (
                          <div className="flex items-center gap-1 text-[11px] text-amber-400">
                            <AlertTriangle className="size-3" /> Changes requested
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-3 pr-3 text-slate-300">{p.category}</td>
                  <td className="py-3 pr-3 text-white font-semibold">
                    {p.price}
                    <span className="text-[11px] text-slate-500"> / {p.unit}</span>
                  </td>
                  <td className="py-3 pr-3 text-slate-300">{p.stock}</td>
                  <td className="py-3 pr-3 text-slate-300">{p.orders}</td>
                  <td className="py-3 pr-3">
                    <StatusPill status={p.status} />
                  </td>
                  <td className="py-3 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => openEdit(p)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-slate-300 hover:text-white"
                      >
                        <Pencil className="size-3.5" /> Edit
                      </button>
                      {(p.status === "Draft" || p.status === "Rejected") && (
                        <button
                          onClick={() => {
                            submitProductForApproval(p.id);
                            toast.success("Submitted for approval.");
                          }}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#4d8dff] hover:underline"
                        >
                          <Send className="size-3.5" /> Submit
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </AdminTable>
          )}
          {products.some((p) => p.status === "Draft" && p.rejectionReason) && (
            <div className="mt-4 rounded-lg border border-amber-500/20 bg-amber-500/10 px-4 py-3 text-xs text-amber-300">
              Some products have change requests from the overall admin — edit and resubmit them.
            </div>
          )}
        </AdminCard>
      ) : (
        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="TOTAL VIEWS" value={totals.views.toLocaleString()} icon={Eye} tone="sky" />
            <StatCard label="INQUIRIES" value={totals.inquiries.toLocaleString()} icon={MessageSquare} tone="violet" />
            <StatCard label="ORDERS" value={totals.orders.toLocaleString()} icon={ShoppingBag} tone="emerald" />
            <StatCard label="REVENUE" value={formatNaira(totals.revenue)} icon={TrendingUp} tone="amber" />
          </div>
          <AdminCard title="How your products are doing" subtitle="Orders and revenue (₦'000) by product">
            {chartData.length === 0 ? (
              <EmptyState icon={TrendingUp} title="No performance data yet" />
            ) : (
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                    <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                    <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                    <Tooltip
                      contentStyle={{
                        background: "#0f172a",
                        border: "1px solid #334155",
                        borderRadius: 8,
                        color: "#fff",
                        fontSize: 12,
                      }}
                      cursor={{ fill: "rgba(148,163,184,0.08)" }}
                    />
                    <Bar dataKey="orders" fill="#0b50c4" radius={[4, 4, 0, 0]} name="Orders" />
                    <Bar dataKey="revenue" fill="#a855f7" radius={[4, 4, 0, 0]} name="Revenue (₦'000)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </AdminCard>
        </div>
      )}

      <ProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        editing={!!editing}
        form={form}
        setForm={setForm}
        onSave={save}
      />
    </div>
  );
}

function ProductModal({
  open,
  onClose,
  editing,
  form,
  setForm,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  editing: boolean;
  form: FormState;
  setForm: React.Dispatch<React.SetStateAction<FormState>>;
  onSave: (submit: boolean) => void;
}) {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const addUrl = () => {
    const u = imageUrl.trim();
    if (!u) return;
    setForm((f) => ({ ...f, images: [...f.images, u] }));
    setImageUrl("");
  };
  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setForm((f) => ({ ...f, images: [...f.images, String(reader.result)] }));
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  return (
    <AdminModal
      open={open}
      onClose={onClose}
      wide
      title={editing ? "Edit Product" : "Post a Product"}
      description="Products are reviewed by the overall admin before going live on the marketplace."
      footer={
        <>
          <GhostButton onClick={() => onSave(false)}>Save as Draft</GhostButton>
          <PrimaryButton onClick={() => onSave(true)}>
            <Send className="size-4" /> {editing ? "Save & Submit" : "Submit for Approval"}
          </PrimaryButton>
        </>
      }
    >
      <div className="space-y-4">
        <div>
          <FieldLabel>Product Name</FieldLabel>
          <TextInput
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            placeholder="e.g. 6061-T6 Structural Pipe"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <FieldLabel>Category</FieldLabel>
            <SelectInput
              value={form.category}
              onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
            >
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </SelectInput>
          </div>
          <div>
            <FieldLabel>Unit</FieldLabel>
            <SelectInput value={form.unit} onChange={(e) => setForm((f) => ({ ...f, unit: e.target.value }))}>
              {UNITS.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </SelectInput>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <FieldLabel>Price (₦)</FieldLabel>
            <TextInput
              value={form.price}
              onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
              placeholder="21,750"
            />
          </div>
          <div>
            <FieldLabel>Stock</FieldLabel>
            <TextInput
              type="number"
              value={form.stock}
              onChange={(e) => setForm((f) => ({ ...f, stock: e.target.value }))}
              placeholder="1000"
            />
          </div>
          <div>
            <FieldLabel>Min Order</FieldLabel>
            <TextInput
              type="number"
              value={form.minOrder}
              onChange={(e) => setForm((f) => ({ ...f, minOrder: e.target.value }))}
              placeholder="10"
            />
          </div>
        </div>

        <div>
          <FieldLabel>Description</FieldLabel>
          <TextArea
            rows={3}
            value={form.description}
            onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
            placeholder="Describe the product, its grade, uses and finish…"
          />
        </div>

        {/* Specifications */}
        <div>
          <FieldLabel>Specifications</FieldLabel>
          <div className="space-y-2">
            {form.specs.map((spec, i) => (
              <div key={i} className="flex items-center gap-2">
                <TextInput
                  value={spec.key}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      specs: f.specs.map((s, j) => (j === i ? { ...s, key: e.target.value } : s)),
                    }))
                  }
                  placeholder="Grade"
                  className="max-w-[40%]"
                />
                <TextInput
                  value={spec.value}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      specs: f.specs.map((s, j) => (j === i ? { ...s, value: e.target.value } : s)),
                    }))
                  }
                  placeholder="6061-T6"
                />
                <button
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, specs: f.specs.filter((_, j) => j !== i) }))}
                  className="rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-rose-400"
                  aria-label="Remove spec"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => setForm((f) => ({ ...f, specs: [...f.specs, { key: "", value: "" }] }))}
              className="text-xs font-semibold text-[#4d8dff] hover:underline"
            >
              + Add specification
            </button>
          </div>
        </div>

        {/* Images */}
        <div>
          <FieldLabel>Images</FieldLabel>
          {form.images.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-2">
              {form.images.map((src, i) => (
                <div key={i} className="relative size-20 overflow-hidden rounded-lg border border-slate-700">
                  <img src={src} alt="" className="size-full object-cover" />
                  <button
                    type="button"
                    onClick={() => setForm((f) => ({ ...f, images: f.images.filter((_, j) => j !== i) }))}
                    className="absolute right-1 top-1 grid size-5 place-items-center rounded-full bg-black/70 text-white hover:bg-rose-500"
                    aria-label="Remove image"
                  >
                    <Trash2 className="size-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="flex flex-1 items-center gap-2">
              <Link2 className="size-4 text-slate-500" />
              <TextInput
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addUrl())}
                placeholder="Paste an image URL…"
              />
              <GhostButton type="button" onClick={addUrl}>
                Add
              </GhostButton>
            </div>
            <GhostButton type="button" onClick={() => fileRef.current?.click()}>
              <ImagePlus className="size-4" /> Upload
            </GhostButton>
            <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onFile} />
          </div>
        </div>
      </div>
    </AdminModal>
  );
}
