import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { useState } from "react";
import {
  CreditCard,
  Landmark,
  Wallet,
  FileText,
  ShieldCheck,
  Lock,
  Shield,
  Headphones,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Secure Checkout | Aluminium Village" },
      {
        name: "description",
        content:
          "Complete your industrial aluminium procurement with confidence. SSL-encrypted secure checkout.",
      },
    ],
  }),
  component: Checkout,
});

const payMethods = [
  { id: "card", label: "Credit / Debit Card", icon: CreditCard },
  { id: "bank", label: "Bank Transfer", icon: Landmark },
  { id: "wallet", label: "Digital Wallet", icon: Wallet },
  { id: "po", label: "Purchase Order", icon: FileText },
];

function Checkout() {
  const [pay, setPay] = useState("card");
  const [createAcct, setCreateAcct] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Secure Checkout</h1>
          <p className="text-muted-foreground mt-2">
            Complete your industrial procurement with confidence.
          </p>
        </header>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="grid lg:grid-cols-[1fr_380px] gap-8"
        >
          {/* LEFT */}
          <div className="space-y-6">
            <Section step={1} title="Account Information">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="First Name" defaultValue="John" />
                <Field label="Last Name" defaultValue="Doe" />
              </div>
              <Field
                label="Email Address"
                type="email"
                defaultValue="john.doe@industrial-solutions.com"
              />
              <label className="flex items-center gap-2.5 mt-4 rounded-md border bg-secondary/50 px-3 py-3 cursor-pointer hover:bg-secondary transition">
                <span
                  className={`grid place-items-center size-4 rounded border transition ${
                    createAcct
                      ? "bg-brand border-brand text-brand-foreground"
                      : "bg-card border-input"
                  }`}
                >
                  {createAcct && <Check className="size-3" />}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={createAcct}
                  onChange={(e) => setCreateAcct(e.target.checked)}
                />
                <span className="text-sm">Create an account for faster procurement next time?</span>
              </label>
            </Section>

            <Section step={2} title="Shipping Destination">
              <Field label="Company Name (Optional)" defaultValue="Global Aluminium Corp" />
              <Field label="Street Address" defaultValue="12 Industrial Way" />
              <div className="grid sm:grid-cols-3 gap-4">
                <Field label="City" defaultValue="Lagos" />
                <Field label="State/Province" defaultValue="LA" />
                <Field label="Postal Code" defaultValue="101233" />
              </div>
            </Section>

            <Section step={3} title="Payment Method">
              <div className="grid sm:grid-cols-2 gap-3">
                {payMethods.map((m) => {
                  const active = pay === m.id;
                  const Icon = m.icon;
                  return (
                    <button
                      type="button"
                      key={m.id}
                      onClick={() => setPay(m.id)}
                      className={`relative flex items-center gap-2.5 rounded-lg border px-4 py-3 text-sm font-medium transition ${
                        active
                          ? "border-brand bg-brand/5 text-brand ring-1 ring-brand"
                          : "bg-card hover:border-brand/40 hover:bg-secondary"
                      }`}
                    >
                      <Icon className="size-4" />
                      {m.label}
                      {active && (
                        <span className="ml-auto grid place-items-center size-5 rounded-full bg-brand text-brand-foreground">
                          <Check className="size-3" />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {pay === "card" && (
                <div className="mt-5 space-y-4">
                  <Field label="Card Number" placeholder="0000 0000 0000 0000" icon={Lock} />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Expiry Date" placeholder="MM / YY" />
                    <Field label="CVV" placeholder="123" />
                  </div>
                </div>
              )}
              {pay === "bank" && (
                <p className="mt-5 text-sm text-muted-foreground">
                  You'll receive bank transfer details on the next screen.
                </p>
              )}
              {pay === "wallet" && (
                <p className="mt-5 text-sm text-muted-foreground">
                  You'll be redirected to your digital wallet provider.
                </p>
              )}
              {pay === "po" && (
                <div className="mt-5 space-y-4">
                  <Field label="PO Reference Number" placeholder="PO-2026-0001" />
                </div>
              )}
            </Section>
          </div>

          {/* RIGHT */}
          <aside className="space-y-5 lg:sticky lg:top-20 self-start">
            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <h2 className="text-lg font-bold">Order Summary</h2>
              <ul className="mt-4 space-y-4">
                <SummaryItem
                  title="Extruded 6061-T6 Aluminium Pipe"
                  meta={["Qty: 25 Units", "Length: 6 meters"]}
                  price="₦1,240,000"
                />
                <SummaryItem
                  title="Extruded 6063-T5 Aluminium Sheet"
                  meta={["Qty: 10 Panels", "Size: 4' x 8'"]}
                  price="₦850,000"
                />
              </ul>
              <div className="my-4 border-t" />
              <dl className="space-y-2 text-sm">
                <Row k="Subtotal" v="₦2,090,000" />
                <Row k="Shipping (Freight)" v="₦145,000" />
                <Row k="Estimated Tax" v="₦167,200" />
              </dl>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-brand">₦2,402,200</span>
              </div>
              <button
                type="submit"
                className="mt-5 w-full rounded-md bg-brand text-brand-foreground py-3 text-sm font-semibold hover:bg-brand/90 active:scale-[0.99] transition"
              >
                {submitted ? "Order Placed ✓" : "Complete Order"}
              </button>
              <div className="mt-4 rounded-md border bg-secondary/50 px-3 py-2.5 flex gap-2 text-xs">
                <ShieldCheck className="size-4 text-brand shrink-0 mt-0.5" />
                <span>
                  <b>SSL Encrypted Checkout.</b> Your data is protected by industry-standard
                  encryption.
                </span>
              </div>
              <div className="mt-3 flex items-center justify-center gap-4 text-muted-foreground">
                <Shield className="size-5" />
                <ShieldCheck className="size-5" />
                <Lock className="size-5" />
              </div>
            </div>

            <div className="rounded-xl border bg-card p-4 flex gap-3">
              <div className="grid place-items-center size-9 rounded-full bg-brand/10 text-brand shrink-0">
                <Headphones className="size-4" />
              </div>
              <div className="text-sm">
                <div className="font-semibold">Need Procurement Assistance?</div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Our industrial specialists are available 24/7 to help with complex orders.
                </p>
                <Link
                  to="/contact"
                  className="mt-1.5 inline-block text-xs font-semibold text-brand hover:underline"
                >
                  Contact Expert Support
                </Link>
              </div>
            </div>
          </aside>
        </form>
      </section>
    </SiteLayout>
  );
}

function Section({
  step,
  title,
  children,
}: {
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border bg-card p-5 sm:p-6">
      <div className="flex items-center gap-3 mb-5">
        <span className="grid place-items-center size-7 rounded-full bg-muted text-foreground text-sm font-bold">
          {step}
        </span>
        <h2 className="text-lg font-bold">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({
  label,
  type = "text",
  defaultValue,
  placeholder,
  icon: Icon,
}: {
  label: string;
  type?: string;
  defaultValue?: string;
  placeholder?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium text-muted-foreground mb-1.5">{label}</span>
      <div className="relative">
        <input
          type={type}
          defaultValue={defaultValue}
          placeholder={placeholder}
          className="w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition"
        />
        {Icon && (
          <Icon className="size-4 text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2" />
        )}
      </div>
    </label>
  );
}

function SummaryItem({
  title,
  meta,
  price,
}: {
  title: string;
  meta: string[];
  price: string;
}) {
  return (
    <li className="flex gap-3">
      <div className="size-14 rounded-md bg-secondary shrink-0 grid place-items-center text-[10px] text-muted-foreground">
        IMG
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold leading-snug">{title}</div>
        <div className="text-xs text-muted-foreground mt-0.5">{meta.join(" · ")}</div>
      </div>
      <div className="text-sm font-bold whitespace-nowrap">{price}</div>
    </li>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="font-medium">{v}</dd>
    </div>
  );
}
