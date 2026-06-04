import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { img } from "@/lib/images";
import { BadgeCheck, MapPin, Search, Star, Trophy } from "lucide-react";

export const Route = createFileRoute("/directory")({
  head: () => ({
    meta: [
      { title: "Business Directory | Aluminium Village" },
      {
        name: "description",
        content:
          "Connect with Africa's leading aluminium fabricators, suppliers, and installation specialists. All professionals are vetted.",
      },
    ],
  }),
  component: Directory,
});

const pros = [
  {
    img: img.pro1,
    name: "Lagos Extrusion Hub",
    type: "Fabricator",
    rating: 4.9,
    reviews: 128,
    loc: "Lagos, NG",
    tags: ["Precision Extrusions", "Industrial Frames"],
  },
  {
    img: img.pro2,
    name: "Abuja Pro Installers",
    type: "Installers",
    rating: 4.8,
    reviews: 94,
    loc: "Abuja, NG",
    tags: ["Sliding Doors", "Glass Curtain Walls"],
  },
  {
    img: img.pro3,
    name: "Delta Metal Solutions",
    type: "Suppliers",
    rating: 4.7,
    reviews: 215,
    loc: "Asaba, NG",
    tags: ["Raw Ingots", "Custom Alloys"],
  },
  {
    img: img.pro4,
    name: "Elite Aluminium Fabrications",
    type: "Fabricator",
    rating: 5.0,
    reviews: 42,
    loc: "Port Harcourt, NG",
    tags: ["Luxury Windows", "Facades"],
  },
  {
    img: img.part2,
    name: "Swift Modular Installers",
    type: "Installers",
    rating: 4.9,
    reviews: 78,
    loc: "Kano, NG",
    tags: ["Partitions", "Fast-track"],
  },
  {
    img: img.part1,
    name: "Northern Alloys Co.",
    type: "Suppliers",
    rating: 4.6,
    reviews: 161,
    loc: "Kaduna, NG",
    tags: ["5052 Sheet", "6061 Bar"],
  },
];

const featured = [
  {
    img: img.pro4,
    badge: "PLATINUM PARTNER",
    name: "Elite Aluminium Fabrications",
    desc: "Luxury architectural window systems and commercial facades, 15+ years experience.",
    metric: "Perfect Score (42 Reviews)",
  },
  {
    img: img.pro2,
    badge: "FASTEST COMPLETION",
    name: "Swift Modular Installers",
    desc: "Rapid deployment of commercial partitions and modular aluminium structures.",
    metric: "98% Success Rate",
  },
];

function Directory() {
  return (
    <SiteLayout>
      <section className="border-b bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Business Directory
          </div>
          <h1 className="mt-2 text-3xl md:text-5xl font-bold">Verified Aluminium Professionals</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Connect with Africa's leading fabricators, suppliers, and installation specialists.
            Every professional is vetted for quality and reliability.
          </p>

          <div className="mt-6 flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2 rounded-md border bg-card px-4 py-2.5">
              <Search className="size-4 text-muted-foreground" />
              <input
                placeholder="Search professionals..."
                className="bg-transparent outline-none text-sm flex-1"
              />
            </div>
            <div className="flex items-center gap-2 rounded-md border bg-card px-4 py-2.5 md:w-72">
              <MapPin className="size-4 text-muted-foreground" />
              <input
                placeholder="All locations"
                className="bg-transparent outline-none text-sm flex-1"
              />
            </div>
            <button className="rounded-md bg-brand text-brand-foreground px-6 py-2.5 text-sm font-semibold">
              Search
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {["All", "Fabricators", "Suppliers", "Installers", "Specialized Services"].map(
              (f, i) => (
                <button
                  key={f}
                  className={`px-4 py-1.5 rounded-full text-sm border ${
                    i === 0 ? "bg-primary text-primary-foreground" : "bg-card hover:bg-secondary"
                  }`}
                >
                  {f}
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pros.map((p) => (
            <article key={p.name} className="rounded-xl border bg-card overflow-hidden">
              <div className="relative aspect-[4/3] bg-secondary">
                <img src={p.img} alt={p.name} className="size-full object-cover" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-card text-foreground text-[10px] font-bold tracking-wider px-2.5 py-1 shadow">
                  <BadgeCheck className="size-3.5 text-accent" />
                  Verified
                </span>
              </div>
              <div className="p-5">
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {p.type}
                </div>
                <h3 className="font-semibold mt-1">{p.name}</h3>
                <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="size-3.5 fill-amber-500 text-amber-500" /> {p.rating} (
                    {p.reviews})
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3.5" /> {p.loc}
                  </span>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] rounded-full bg-secondary px-2.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <button className="mt-4 w-full rounded-md border py-2 text-sm font-medium hover:bg-secondary">
                  View Profile
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="rounded-md border bg-card px-6 py-3 text-sm font-medium hover:bg-secondary">
            Load More Professionals
          </button>
        </div>
      </section>

      <section className="border-t bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Top-Rated Fabricators of the Month</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Exceptional performance and customer satisfaction based on recent project data.
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            {featured.map((f) => (
              <div key={f.badge} className="rounded-xl border bg-card overflow-hidden md:flex">
                <div className="md:w-48 aspect-video md:aspect-auto shrink-0">
                  <img src={f.img} alt={f.name} className="size-full object-cover" />
                </div>
                <div className="p-5 flex-1">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-wider rounded-full bg-accent/10 text-accent px-2.5 py-1">
                    <Trophy className="size-3.5" /> {f.badge}
                  </span>
                  <h3 className="font-semibold mt-2">{f.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
                  <div className="mt-3 text-xs flex items-center gap-1 text-amber-500">
                    <Star className="size-3.5 fill-amber-500" />
                    <span className="text-foreground font-medium">{f.metric}</span>
                  </div>
                  <button className="mt-4 text-sm font-medium text-brand hover:underline">
                    Connect →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
