import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { img } from "@/lib/images";
import { Building2, Send, Wallet, Wrench, BadgeCheck } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Aluminium Village" },
      {
        name: "description",
        content:
          "Reach our industrial consultants for technical procurement, logistics, and global trade compliance.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Connect With Us
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Get in Touch</h1>
          <p className="mt-4 text-muted-foreground max-w-xl">
            Our specialised industrial consultants are ready to assist with technical procurement,
            logistics coordination, and global trade compliance.
          </p>

          <div className="mt-8 space-y-4">
            {[
              {
                icon: Building2,
                title: "Headquarters",
                a: "Metals Trade Plaza, Level 42",
                b: "Industrial District, London, UK",
              },
              {
                icon: Wallet,
                title: "Sales Inquiry",
                a: "+44 (0) 20 7946 0123",
                b: "sales@aluminiumvillage.com",
              },
              {
                icon: Wrench,
                title: "Support Center",
                a: "+44 (0) 20 7946 0456",
                b: "support@aluminiumvillage.com",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-xl border bg-card p-5 flex gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-lg bg-brand/10 text-brand shrink-0">
                  <c.icon className="size-5" />
                </div>
                <div>
                  <div className="font-semibold">{c.title}</div>
                  <div className="text-sm">{c.a}</div>
                  <div className="text-sm text-muted-foreground">{c.b}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl overflow-hidden border aspect-[16/9]">
            <img src={img.contactA} alt="Operations" className="size-full object-cover" />
          </div>
        </div>

        <div>
          <div className="sticky top-24 rounded-2xl border bg-card p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold">Inquiry Specification</h2>
            <form className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" placeholder="John Doe" />
                <Field label="Corporate Email" placeholder="you@company.com" type="email" />
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Subject Area</label>
                <select className="mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm">
                  <option>Sales & Bulk Procurement</option>
                  <option>Technical Support</option>
                  <option>Logistics & Supply Chain</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-medium text-muted-foreground">Detailed Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm"
                />
              </div>
              <button className="w-full rounded-md bg-brand text-brand-foreground py-3 text-sm font-semibold inline-flex items-center justify-center gap-2 hover:opacity-90">
                Transmit Message <Send className="size-4" />
              </button>
            </form>

            <div className="mt-6 rounded-xl border bg-secondary/40 p-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-accent">
                <BadgeCheck className="size-4" /> REAL PERSON RESPONSE
              </div>
              <div className="mt-2 font-semibold">Industrial speed, human accuracy</div>
              <p className="mt-1 text-sm text-muted-foreground">
                "A real person responds to every enquiry within 2 hours. Always."
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-card border p-3 text-center">
                  <div className="text-xl font-bold">100%</div>
                  <div className="text-[11px] text-muted-foreground">Human Response</div>
                </div>
                <div className="rounded-lg bg-card border p-3 text-center">
                  <div className="text-xl font-bold">&lt;120m</div>
                  <div className="text-[11px] text-muted-foreground">Average Wait</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <input {...rest} className="mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm" />
    </label>
  );
}
