import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { img } from "@/lib/images";
import { BadgeCheck, ShieldCheck, ChevronLeft, ChevronRight, Search } from "lucide-react";

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

const items = [
  {
    img: img.prod1,
    badge: "IN STOCK",
    title: "6061-T6 Industrial T-Slot Profile",
    desc: "High-strength architectural extrusion for framing and modular automation systems.",
    grade: "6061-T6",
    wall: "3.2mm",
    finish: "Mill",
    qty: "Per Meter",
    price: "$14.50",
    sub: "Excl. Tax",
  },
  {
    img: img.prod2,
    badge: "BEST SELLER",
    title: "5052 Marine Grade Square Tube",
    desc: "Highly corrosion-resistant aluminium tube, perfect for nautical and coastal applications.",
    grade: "5052",
    wall: "2.5mm",
    finish: "Brushed",
    qty: "Per Pc",
    price: "$82.00",
    sub: "Per 6m Length",
  },
  {
    img: img.prod3,
    badge: "",
    title: "6063 Custom L-Angle Profile",
    desc: "Architectural grade angle for structural support and visible trim work.",
    grade: "6063",
    wall: "1.5mm",
    finish: "Anodized",
    qty: "Per Meter",
    price: "$11.25",
    sub: "Anodized Silver",
  },
  {
    img: img.part1,
    badge: "NEW",
    title: "Standard Grade Partition Frame",
    desc: "Versatile partition framing for office and retail interior systems.",
    grade: "6063-T5",
    wall: "1.8mm",
    finish: "Powder",
    qty: "Per Unit",
    price: "$28.00",
    sub: "Excl. Tax",
  },
  {
    img: img.part2,
    badge: "",
    title: "Heavy Duty Industrial Frame",
    desc: "Reinforced framing system for warehouse and shop-floor partitions.",
    grade: "6061",
    wall: "4.0mm",
    finish: "Anodized",
    qty: "Per Set",
    price: "$120.00",
    sub: "Per Set",
  },
  {
    img: img.part3,
    badge: "IN STOCK",
    title: "Architectural Curtain Wall System",
    desc: "Complete curtain wall framing with thermal break for commercial facades.",
    grade: "6063-T6",
    wall: "2.0mm",
    finish: "PVDF",
    qty: "Per Bay",
    price: "$185.00",
    sub: "Per m²",
  },
];

function Marketplace() {
  return (
    <SiteLayout>
      <section className="border-b bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Profiles & Extrusions</h1>
              <p className="text-muted-foreground mt-2">248 products found</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2 w-64 max-w-full">
                <Search className="size-4 text-muted-foreground" />
                <input
                  placeholder="Search products..."
                  className="bg-transparent outline-none text-sm flex-1"
                />
              </div>
              <select className="rounded-md border bg-card px-3 py-2 text-sm">
                <option>Sort: Recommended</option>
                <option>Price: Low to High</option>
                <option>Newest First</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <article key={p.title} className="rounded-xl border bg-card overflow-hidden flex flex-col">
              <div className="relative aspect-[4/3] bg-secondary">
                <img src={p.img} alt={p.title} className="size-full object-cover" />
                {p.badge && (
                  <span className="absolute top-3 left-3 rounded-full bg-accent text-accent-foreground text-[10px] font-bold tracking-wider px-2.5 py-1">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold leading-tight">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">{p.desc}</p>
                <dl className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  {[
                    ["Grade", p.grade],
                    ["Wall", p.wall],
                    ["Finish", p.finish],
                    ["Qty", p.qty],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center gap-1.5">
                      <BadgeCheck className="size-3.5 text-accent" />
                      <span className="text-muted-foreground">{k}:</span>
                      <span className="font-medium">{v}</span>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <div className="text-lg font-bold">{p.price}</div>
                    <div className="text-[11px] text-muted-foreground">{p.sub}</div>
                  </div>
                  <button className="rounded-md bg-brand text-brand-foreground px-4 py-2 text-sm font-medium hover:opacity-90">
                    Add to Cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-1">
          <button className="grid place-items-center size-9 rounded-md border bg-card hover:bg-secondary">
            <ChevronLeft className="size-4" />
          </button>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`size-9 rounded-md text-sm ${
                n === 1
                  ? "bg-primary text-primary-foreground"
                  : "border bg-card hover:bg-secondary"
              }`}
            >
              {n}
            </button>
          ))}
          <span className="px-2 text-muted-foreground">...</span>
          <button className="size-9 rounded-md border bg-card text-sm hover:bg-secondary">
            21
          </button>
          <button className="grid place-items-center size-9 rounded-md border bg-card hover:bg-secondary">
            <ChevronRight className="size-4" />
          </button>
        </div>

        <div className="mt-12 rounded-xl border bg-card p-6 flex items-center gap-4">
          <ShieldCheck className="size-8 text-accent shrink-0" />
          <div>
            <div className="font-semibold">Escrow-protected payments</div>
            <div className="text-sm text-muted-foreground">
              Your funds are held securely until you confirm delivery and quality.
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
