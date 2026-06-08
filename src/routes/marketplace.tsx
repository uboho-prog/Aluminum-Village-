import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { img } from "@/lib/images";
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
} from "lucide-react";
import { useState } from "react";

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
  { id: "profiles", label: "Profiles & Extrusions", icon: Compass },
  { id: "doors", label: "Doors", icon: DoorOpen },
  { id: "gates", label: "Gates", icon: Grid3x3 },
  { id: "windows", label: "Windows", icon: Square },
  { id: "railings", label: "Railings", icon: Frame },
];

const alloyGrades = ["6061-T6", "6063-T5", "5052-H32", "7075 Aircraft"];
const finishes = ["Mill Finish", "Anodized Silver", "Powder Coated"];


const items = [
  {
    img: img.prod1,
    badge: "IN STOCK",
    badgeTone: "emerald",
    grade: "6061-T6",
    wall: "3.2mm",
    finish: "Mill",
    qty: "Per Meter",
    price: "₦21,750",
    sub: "Excl. Tax",
  },
  {
    img: img.prod2,
    badge: "BEST SELLER",
    badgeTone: "brand",
    grade: "5052",
    wall: "2.5mm",
    finish: "Brushed",
    qty: "Per Pc",
    price: "₦123,000",
    sub: "Per 6m Length",
  },
  {
    img: img.prod3,
    badge: "",
    badgeTone: "",
    grade: "6063",
    wall: "1.5mm",
    finish: "Anodized",
    qty: "Per Meter",
    price: "₦16,875",
    sub: "Anodized Silver",
  },
];

function Marketplace() {
  const [activeCat, setActiveCat] = useState("profiles");
  const [selectedGrades, setSelectedGrades] = useState<string[]>(["6061-T6", "6063-T5"]);
  const [selectedFinish, setSelectedFinish] = useState<string[]>(["Anodized Silver"]);
  const [wall, setWall] = useState(2.5);
  const [cart, setCart] = useState<number[]>([]);
  const [page, setPage] = useState(1);

  const toggle = (
    list: string[],
    setList: (v: string[]) => void,
    value: string,
  ) => setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRt className="size-3.5" />
          <Link to="/marketplace" className="hover:text-foreground">Marketplace</Link>
          <ChevronRt className="size-3.5" />
          <span className="text-foreground font-medium">Profiles</span>
        </nav>

        <div className="mt-6 grid lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Categories */}
            <div className="space-y-1">
              {categories.map((c) => {
                const Icon = c.icon;
                const active = activeCat === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setActiveCat(c.id)}
                    className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition ${
                      active
                        ? "bg-brand/10 text-brand"
                        : "text-foreground hover:bg-secondary"
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

            {/* Filters */}
            <div className="border-t pt-5">
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                  Filters
                </div>
                <button
                  onClick={() => {
                    setSelectedGrades([]);
                    setSelectedFinish([]);
                  }}
                  className="text-xs font-semibold text-brand hover:underline"
                >
                  Clear
                </button>
              </div>

              <div className="mt-5">
                <div className="text-sm font-semibold mb-3">Alloy Grade</div>
                <div className="space-y-2">
                  {alloyGrades.map((g) => {
                    const checked = selectedGrades.includes(g);
                    return (
                      <label
                        key={g}
                        className="flex items-center gap-2.5 text-sm cursor-pointer group"
                      >
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

              <div className="mt-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-semibold">Wall Thickness</div>
                  <div className="inline-flex items-baseline gap-0.5 rounded-md bg-brand/10 text-brand px-2 py-0.5 font-mono text-xs font-bold tabular-nums">
                    {wall.toFixed(1)}<span className="text-[10px] opacity-70">mm</span>
                  </div>
                </div>

                <div className="rounded-lg border bg-card p-3">
                  {/* Tick meter */}
                  <div className="relative h-6 mb-1.5" aria-hidden>
                    <div className="absolute inset-x-0 bottom-0 flex justify-between">
                      {Array.from({ length: 101 }).map((_, i) => {
                        const major = i % 10 === 0;
                        const mid = i % 5 === 0;
                        const active = i / 10 <= wall;
                        return (
                          <span
                            key={i}
                            className={`w-px ${major ? "h-5" : mid ? "h-3" : "h-1.5"} ${
                              active ? "bg-brand" : "bg-muted-foreground/30"
                            }`}
                          />
                        );
                      })}
                    </div>
                  </div>

                  <input
                    type="range"
                    min={0}
                    max={10}
                    step={0.1}
                    value={wall}
                    onChange={(e) => setWall(parseFloat(e.target.value))}
                    className="w-full h-1.5 appearance-none rounded-full bg-secondary accent-brand cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:size-4
                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand
                      [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-background
                      [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition
                      hover:[&::-webkit-slider-thumb]:scale-110
                      [&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:rounded-full
                      [&::-moz-range-thumb]:bg-brand [&::-moz-range-thumb]:border-2
                      [&::-moz-range-thumb]:border-background [&::-moz-range-thumb]:shadow-md"
                  />

                  <div className="mt-2 flex justify-between text-[10px] font-mono text-muted-foreground tabular-nums">
                    <span>0.0</span>
                    <span>2.5</span>
                    <span>5.0</span>
                    <span>7.5</span>
                    <span>10.0</span>
                  </div>

                  <div className="mt-3 flex items-center gap-1.5">
                    <button
                      onClick={() => setWall((w) => Math.max(0, +(w - 0.1).toFixed(1)))}
                      className="grid place-items-center size-7 rounded-md border bg-card hover:bg-secondary active:scale-95 transition text-sm font-bold"
                      aria-label="Decrease 0.1mm"
                    >
                      −
                    </button>
                    <input
                      type="number"
                      min={0}
                      max={10}
                      step={0.1}
                      value={wall.toFixed(1)}
                      onChange={(e) => {
                        const v = parseFloat(e.target.value);
                        if (!isNaN(v)) setWall(Math.min(10, Math.max(0, v)));
                      }}
                      className="flex-1 h-7 rounded-md border bg-card px-2 text-xs font-mono font-semibold text-center tabular-nums focus:outline-none focus:ring-2 focus:ring-brand/30"
                    />
                    <button
                      onClick={() => setWall((w) => Math.min(10, +(w + 0.1).toFixed(1)))}
                      className="grid place-items-center size-7 rounded-md border bg-card hover:bg-secondary active:scale-95 transition text-sm font-bold"
                      aria-label="Increase 0.1mm"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground px-4 py-2.5 text-sm font-semibold hover:bg-brand/90 active:scale-[0.99] transition">
              <Wallet className="size-4" /> Request Quote
            </button>
          </aside>

          {/* Main grid */}
          <div>
            <div className="flex items-center justify-end gap-3">
              <label className="text-sm text-muted-foreground">Sort:</label>
              <div className="relative">
                <select className="appearance-none rounded-md border bg-card pl-3 pr-9 py-2 text-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-brand/30">
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
                <ChevronRight className="size-4 absolute right-2 top-1/2 -translate-y-1/2 rotate-90 pointer-events-none text-muted-foreground" />
              </div>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {items.map((p, i) => {
                const inCart = cart.includes(i);
                return (
                  <article
                    key={i}
                    className="rounded-xl border bg-card overflow-hidden flex flex-col group hover:shadow-lg hover:-translate-y-0.5 transition"
                  >
                    <div className="relative aspect-square bg-secondary overflow-hidden">
                      <img
                        src={p.img}
                        alt=""
                        className="size-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                      {p.badge && (
                        <span
                          className={`absolute top-3 left-3 rounded-md text-[10px] font-bold tracking-wider px-2.5 py-1 ${
                            p.badgeTone === "brand"
                              ? "bg-brand text-brand-foreground"
                              : "bg-emerald-500 text-white"
                          }`}
                        >
                          {p.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <div className="rounded-lg border bg-secondary/40 p-3 grid grid-cols-2 gap-2 text-[11px]">
                        <Spec icon={BadgeCheck} k="Grade" v={p.grade} />
                        <Spec icon={Ruler} k="Wall" v={p.wall} />
                        <Spec icon={Layers} k="Finish" v={p.finish} />
                        <Spec icon={Package} k="Qty" v={p.qty} />
                      </div>
                      <div className="mt-4 flex items-end justify-between gap-3">
                        <div>
                          <div className="text-xl font-bold leading-none">{p.price}</div>
                          <div className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
                            {p.sub}
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            setCart((c) => (c.includes(i) ? c.filter((x) => x !== i) : [...c, i]))
                          }
                          className={`rounded-md px-4 py-2 text-sm font-semibold active:scale-[0.98] transition ${
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

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-1.5">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                className="grid place-items-center size-9 rounded-md border bg-card hover:bg-secondary disabled:opacity-40 active:scale-95 transition"
                disabled={page === 1}
              >
                <ChevronLeft className="size-4" />
              </button>
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`size-9 rounded-md text-sm font-medium transition active:scale-95 ${
                    page === n
                      ? "bg-brand text-brand-foreground"
                      : "border bg-card hover:bg-secondary"
                  }`}
                >
                  {n}
                </button>
              ))}
              <span className="px-2 text-muted-foreground">...</span>
              <button
                onClick={() => setPage(21)}
                className={`size-9 rounded-md text-sm font-medium transition active:scale-95 ${
                  page === 21 ? "bg-brand text-brand-foreground" : "border bg-card hover:bg-secondary"
                }`}
              >
                21
              </button>
              <button
                onClick={() => setPage((p) => Math.min(21, p + 1))}
                className="grid place-items-center size-9 rounded-md border bg-card hover:bg-secondary active:scale-95 transition"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
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
