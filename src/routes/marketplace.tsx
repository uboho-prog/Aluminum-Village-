import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { useActiveProducts, useCart, addToCart } from "@/lib/platform-store";
import { parseNaira } from "@/lib/payments";
import { toast } from "sonner";
import {
  ChevronLeft,
  ChevronRight,
  ChevronRight as ChevronRt,
  Search,
  Ruler,
  DoorOpen,
  Grid3x3,
  Square,
  Frame,
  BadgeCheck,
  Wallet,
  Layers,
  Package,
  Compass,
  LayoutGrid,
  Star,
  Store,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace | Aluminium Village" },
      {
        name: "description",
        content:
          "Browse certified aluminium profiles, extrusions, sheets and fittings from verified suppliers.",
      },
    ],
  }),
  component: Marketplace,
});

const categories = [
  { id: "all", label: "All Products", icon: LayoutGrid },
  { id: "Profiles & Extrusions", label: "Profiles & Extrusions", icon: Compass },
  { id: "Doors", label: "Doors", icon: DoorOpen },
  { id: "Gates", label: "Gates", icon: Grid3x3 },
  { id: "Windows", label: "Windows", icon: Square },
  { id: "Railings", label: "Railings", icon: Frame },
];

const PAGE_SIZE = 9;

type SortKey = "recommended" | "price-asc" | "price-desc" | "newest";

function Marketplace() {
  const products = useActiveProducts();
  const cartLines = useCart();

  const [activeCat, setActiveCat] = useState("all");
  const [query, setQuery] = useState("");
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const [selectedFinish, setSelectedFinish] = useState<string[]>([]);
  const [maxWall, setMaxWall] = useState(10);
  const [sort, setSort] = useState<SortKey>("recommended");
  const [page, setPage] = useState(1);

  // Filter options derived from the live catalog.
  const { grades, finishes } = useMemo(() => {
    const g = new Set<string>();
    const f = new Set<string>();
    for (const p of products) {
      if (p.specifications.Grade) g.add(p.specifications.Grade);
      if (p.specifications.Finish) f.add(p.specifications.Finish);
    }
    return { grades: [...g].sort(), finishes: [...f].sort() };
  }, [products]);

  const toggle = (list: string[], setList: (v: string[]) => void, value: string) => {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
    setPage(1);
  };

  const clearFilters = () => {
    setSelectedGrades([]);
    setSelectedFinish([]);
    setMaxWall(10);
    setQuery("");
    setActiveCat("all");
    setPage(1);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const result = products.filter((p) => {
      if (activeCat !== "all" && p.category !== activeCat) return false;
      if (q) {
        const hay = `${p.name} ${p.sellerName} ${p.category} ${Object.values(p.specifications).join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (selectedGrades.length && !selectedGrades.some((g) => (p.specifications.Grade ?? "").includes(g)))
        return false;
      if (selectedFinish.length && !selectedFinish.includes(p.specifications.Finish ?? "")) return false;
      const wallSpec = p.specifications.Wall;
      if (wallSpec) {
        const w = parseFloat(wallSpec);
        if (!Number.isNaN(w) && w > maxWall) return false;
      }
      return true;
    });

    const sorted = [...result];
    if (sort === "price-asc") sorted.sort((a, b) => parseNaira(a.price) - parseNaira(b.price));
    else if (sort === "price-desc") sorted.sort((a, b) => parseNaira(b.price) - parseNaira(a.price));
    else if (sort === "newest") sorted.sort((a, b) => b.submittedAt.localeCompare(a.submittedAt));
    else sorted.sort((a, b) => b.orders - a.orders);
    return sorted;
  }, [products, activeCat, query, selectedGrades, selectedFinish, maxWall, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);
  const activeFilterCount =
    selectedGrades.length + selectedFinish.length + (maxWall < 10 ? 1 : 0) + (activeCat !== "all" ? 1 : 0);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
          <ChevronRt className="size-3.5" />
          <span className="text-foreground font-medium">Marketplace</span>
        </nav>

        {/* Hero */}
        <div className="mt-4 rounded-2xl border bg-gradient-to-br from-brand/10 via-card to-card p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Certified Aluminium Marketplace
          </h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Source extrusions, sheets, doors and fittings from verified Nigerian suppliers. Every
            order is escrow-protected — your payment is held by Aluminium Village until you're served.
          </p>
          <div className="mt-5 flex max-w-xl items-center gap-2 rounded-lg border bg-background px-4 py-2.5 focus-within:ring-2 focus-within:ring-brand/30">
            <Search className="size-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Search products, grades, suppliers…"
              className="flex-1 bg-transparent text-sm outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-muted-foreground hover:text-foreground">
                <X className="size-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="space-y-1">
              {categories.map((c) => {
                const Icon = c.icon;
                const active = activeCat === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setActiveCat(c.id);
                      setPage(1);
                    }}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition ${
                      active ? "bg-brand/10 text-brand" : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="size-4" />
                      {c.label}
                    </span>
                    <ChevronRight className="size-4 opacity-60" />
                  </button>
                );
              })}
            </div>

            <div className="border-t pt-5">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
                </div>
                <button onClick={clearFilters} className="text-xs font-semibold text-brand hover:underline">
                  Clear
                </button>
              </div>

              {grades.length > 0 && (
                <div className="mt-5">
                  <div className="text-sm font-semibold mb-3">Alloy Grade</div>
                  <div className="space-y-2">
                    {grades.map((g) => {
                      const checked = selectedGrades.includes(g);
                      return (
                        <label key={g} className="flex items-center gap-2.5 text-sm cursor-pointer group">
                          <span
                            className={`grid place-items-center size-4 rounded border transition ${
                              checked
                                ? "bg-brand border-brand text-brand-foreground"
                                : "bg-card border-input group-hover:border-brand/50"
                            }`}
                          >
                            {checked && (
                              <svg viewBox="0 0 12 12" className="size-3 stroke-current" fill="none" strokeWidth="2">
                                <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={checked}
                            onChange={() => toggle(selectedGrades, setSelectedGrades, g)}
                          />
                          {g}
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              {finishes.length > 0 && (
                <div className="mt-6">
                  <div className="text-sm font-semibold mb-3">Finish Type</div>
                  <div className="space-y-2">
                    {finishes.map((f) => {
                      const checked = selectedFinish.includes(f);
                      return (
                        <label key={f} className="flex items-center gap-2.5 text-sm cursor-pointer group">
                          <span
                            className={`grid place-items-center size-4 rounded border transition ${
                              checked
                                ? "bg-brand border-brand text-brand-foreground"
                                : "bg-card border-input group-hover:border-brand/50"
                            }`}
                          >
                            {checked && (
                              <svg viewBox="0 0 12 12" className="size-3 stroke-current" fill="none" strokeWidth="2">
                                <path d="M2.5 6.5l2.5 2.5 4.5-5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            )}
                          </span>
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={checked}
                            onChange={() => toggle(selectedFinish, setSelectedFinish, f)}
                          />
                          {f}
                        </label>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-semibold">Max Wall Thickness</div>
                  <div className="inline-flex items-baseline gap-0.5 rounded-md bg-brand/10 text-brand px-2 py-0.5 font-mono text-xs font-bold tabular-nums">
                    {maxWall.toFixed(1)}
                    <span className="text-[10px] opacity-70">mm</span>
                  </div>
                </div>
                <input
                  type="range"
                  min={0}
                  max={10}
                  step={0.1}
                  value={maxWall}
                  onChange={(e) => {
                    setMaxWall(parseFloat(e.target.value));
                    setPage(1);
                  }}
                  className="w-full h-1.5 appearance-none rounded-full bg-secondary accent-brand cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4
                    [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand
                    [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background
                    [&::-webkit-slider-thumb]:shadow-md"
                />
                <div className="mt-2 flex justify-between text-[10px] font-mono text-muted-foreground tabular-nums">
                  <span>0.0</span>
                  <span>5.0</span>
                  <span>10.0</span>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground px-4 py-2.5 text-sm font-semibold hover:bg-brand/90 active:scale-[0.99] transition"
            >
              <Wallet className="size-4" /> Request a Quote
            </Link>
          </aside>

          {/* Main grid */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
                product{filtered.length === 1 ? "" : "s"}
                {activeCat !== "all" && (
                  <>
                    {" "}
                    in <span className="font-medium text-foreground">{activeCat}</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-3">
                <label className="text-sm text-muted-foreground">Sort:</label>
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    className="appearance-none rounded-md border bg-card pl-3 pr-9 py-2 text-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-brand/30"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                  </select>
                  <ChevronRight className="size-4 absolute right-2 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none text-muted-foreground" />
                </div>
              </div>
            </div>

            {pageItems.length === 0 ? (
              <div className="mt-10 rounded-xl border bg-card p-12 text-center">
                <Package className="mx-auto size-10 text-muted-foreground" />
                <div className="mt-3 font-semibold">No products match your filters</div>
                <p className="mt-1 text-sm text-muted-foreground">Try clearing filters or searching for something else.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 rounded-md border bg-card px-4 py-2 text-sm font-semibold hover:bg-secondary"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {pageItems.map((p) => {
                  const inCart = cartLines.some((l) => l.productId === p.id);
                  const badge = p.orders > 40 ? "BEST SELLER" : p.stock > 0 ? "IN STOCK" : "OUT OF STOCK";
                  const badgeTone = p.orders > 40 ? "brand" : p.stock > 0 ? "emerald" : "muted";
                  return (
                    <article
                      key={p.id}
                      className="rounded-xl border bg-card overflow-hidden flex flex-col group hover:shadow-lg hover:-translate-y-0.5 transition"
                    >
                      <div className="relative aspect-square bg-secondary overflow-hidden">
                        <img
                          src={p.images[0]}
                          alt={p.name}
                          className="size-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                        />
                        <span
                          className={`absolute top-3 left-3 rounded-md text-[10px] font-bold tracking-wider px-2.5 py-1 ${
                            badgeTone === "brand"
                              ? "bg-brand text-brand-foreground"
                              : badgeTone === "emerald"
                                ? "bg-emerald-500 text-white"
                                : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {badge}
                        </span>
                        {p.rating > 0 && (
                          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 text-[10px] font-bold text-white backdrop-blur">
                            <Star className="size-3 fill-amber-400 text-amber-400" />
                            {p.rating}
                          </span>
                        )}
                      </div>
                      <div className="p-4 flex flex-col flex-1">
                        <h3 className="text-sm font-semibold leading-snug line-clamp-1">{p.name}</h3>
                        <div className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground">
                          <Store className="size-3" /> {p.sellerName}
                        </div>
                        <div className="mt-3 rounded-lg border bg-secondary/40 p-3 grid grid-cols-2 gap-2 text-[11px]">
                          <Spec icon={BadgeCheck} k="Grade" v={p.specifications.Grade ?? p.category} />
                          <Spec icon={Ruler} k="Wall" v={p.specifications.Wall ?? "—"} />
                          <Spec icon={Layers} k="Finish" v={p.specifications.Finish ?? "—"} />
                          <Spec icon={Package} k="Qty" v={p.unit} />
                        </div>
                        <div className="mt-4 flex items-end justify-between gap-3">
                          <div>
                            <div className="text-xl font-bold leading-none">{p.price}</div>
                            <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                              {p.unit} · Min {p.minOrder}
                            </div>
                          </div>
                          <button
                            disabled={p.stock === 0}
                            onClick={() => {
                              addToCart({
                                productId: p.id,
                                name: p.name,
                                image: p.images[0],
                                unitPrice: p.price,
                                quantity: p.minOrder || 1,
                                sellerId: p.sellerId,
                                sellerName: p.sellerName,
                                sellerType: "business",
                              });
                              toast.success(`${p.name} added to cart.`);
                            }}
                            className={`rounded-md px-4 py-2 text-sm font-semibold active:scale-[0.98] transition disabled:opacity-50 disabled:cursor-not-allowed ${
                              inCart
                                ? "bg-emerald-600 text-white hover:bg-emerald-700"
                                : "bg-brand text-brand-foreground hover:bg-brand/90"
                            }`}
                          >
                            {inCart ? "Added ✓" : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}

            {/* Pagination */}
            {pageCount > 1 && (
              <div className="mt-10 flex items-center justify-center gap-1.5">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="grid place-items-center size-9 rounded-md border bg-card hover:bg-secondary disabled:opacity-40 active:scale-95 transition"
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="size-4" />
                </button>
                {Array.from({ length: pageCount }).map((_, i) => {
                  const n = i + 1;
                  return (
                    <button
                      key={n}
                      onClick={() => setPage(n)}
                      className={`size-9 rounded-md text-sm font-medium transition active:scale-95 ${
                        currentPage === n ? "bg-brand text-brand-foreground" : "border bg-card hover:bg-secondary"
                      }`}
                    >
                      {n}
                    </button>
                  );
                })}
                <button
                  onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                  className="grid place-items-center size-9 rounded-md border bg-card hover:bg-secondary disabled:opacity-40 active:scale-95 transition"
                  disabled={currentPage === pageCount}
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Spec({
  icon: Icon,
  k,
  v,
}: {
  icon: React.ComponentType<{ className?: string }>;
  k: string;
  v: string;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon className="size-3.5 text-muted-foreground shrink-0" />
      <span className="text-muted-foreground">{k}:</span>
      <span className="font-semibold truncate">{v}</span>
    </div>
  );
}
