import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { useEffect, useState } from "react";
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
  LogIn,
  ShoppingCart,
  Package,
} from "lucide-react";
import { toast } from "sonner";
import { useAuthUser } from "@/lib/auth-store";
import { useCart, placeOrder } from "@/lib/platform-store";
import { computeTotals, formatNaira, parseNaira } from "@/lib/payments";
import type { PlatformOrder } from "@/lib/admin-models";

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
  const [placedOrders, setPlacedOrders] = useState<PlatformOrder[] | null>(null);
  const [authChecked, setAuthChecked] = useState(false);
  const user = useAuthUser();
  const cart = useCart();
  const navigate = useNavigate();

  const totals = computeTotals(cart);
  const methodMap: Record<string, PlatformOrder["paymentMethod"]> = {
    card: "Card",
    bank: "Bank Transfer",
    wallet: "Wallet",
    po: "Bank Transfer",
  };

  const complete = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    if (cart.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }
    const orders = placeOrder(
      { id: user.email, name: user.name, email: user.email },
      methodMap[pay] ?? "Card",
    );
    setPlacedOrders(orders);
    toast.success("Payment received — held safely in escrow by Aluminium Village.");
  };

  useEffect(() => {
    setAuthChecked(true);
  }, []);

  if (authChecked && !user) {
    return (
      <SiteLayout>
        <section className="mx-auto max-w-md px-4 sm:px-6 py-20">
          <div className="rounded-2xl border bg-card p-8 text-center shadow-sm">
            <div className="mx-auto grid place-items-center size-14 rounded-full bg-brand/10 text-brand">
              <Lock className="size-6" />
            </div>
            <h1 className="mt-5 text-2xl font-bold tracking-tight">Sign in to continue</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              You need an account to complete checkout. Sign in or create one to keep your order
              history, tracking, and saved items in one place.
            </p>
            <button
              type="button"
              onClick={() => navigate({ to: "/login", search: { redirect: "/checkout" } })}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground py-3 text-sm font-semibold hover:bg-brand/90 active:scale-[0.99] transition"
            >
              <LogIn className="size-4" />
              Sign in to checkout
            </button>
            <Link
              to="/join"
              className="mt-3 block text-xs font-semibold text-brand hover:underline"
            >
              Create an account
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  if (placedOrders) {
    return (
      <SiteLayout>
        <section className="mx-auto max-w-xl px-4 sm:px-6 py-16 text-center">
          <div className="mx-auto grid place-items-center size-16 rounded-full bg-emerald-100 text-emerald-600">
            <Check className="size-8" />
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight">Order placed</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your payment is held securely in escrow by Aluminium Village and released to the vendor
            once your order is fulfilled.
          </p>
          <div className="mt-6 space-y-2 text-left">
            {placedOrders.map((o) => (
              <div
                key={o.id}
                className="flex items-center justify-between rounded-lg border bg-card px-4 py-3"
              >
                <div>
                  <div className="text-sm font-semibold">#{o.orderNumber}</div>
                  <div className="text-xs text-muted-foreground">{o.sellerName}</div>
                </div>
                <div className="text-sm font-bold">{o.total}</div>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <button
              onClick={() => navigate({ to: "/tracking" })}
              className="inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:bg-brand/90 transition"
            >
              <Package className="size-4" /> Track your order
            </button>
            <Link
              to="/marketplace"
              className="inline-flex items-center justify-center gap-2 rounded-md border bg-card px-5 py-2.5 text-sm font-semibold hover:bg-secondary transition"
            >
              Continue shopping
            </Link>
          </div>
        </section>
      </SiteLayout>
    );
  }

  if (authChecked && cart.length === 0) {
    return (
      <SiteLayout>
        <section className="mx-auto max-w-md px-4 sm:px-6 py-20 text-center">
          <div className="mx-auto grid place-items-center size-14 rounded-full bg-brand/10 text-brand">
            <ShoppingCart className="size-6" />
          </div>
          <h1 className="mt-5 text-2xl font-bold tracking-tight">Your cart is empty</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Browse the marketplace and add products to get started.
          </p>
          <Link
            to="/marketplace"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:bg-brand/90 transition"
          >
            Go to Marketplace
          </Link>
        </section>
      </SiteLayout>
    );
  }

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
          onSubmit={complete}
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
                {cart.map((l) => (
                  <li key={l.productId} className="flex gap-3">
                    <div className="size-14 rounded-md bg-secondary shrink-0 overflow-hidden">
                      <img src={l.image} alt="" className="size-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold leading-snug line-clamp-1">{l.name}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        Qty: {l.quantity} · {l.sellerName}
                      </div>
                    </div>
                    <div className="text-sm font-bold whitespace-nowrap">
                      {formatNaira(parseNaira(l.unitPrice) * l.quantity)}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="my-4 border-t" />
              <dl className="space-y-2 text-sm">
                <Row k="Subtotal" v={formatNaira(totals.subtotal)} />
                <Row k="Escrow protection" v="Included" />
              </dl>
              <div className="mt-4 flex items-baseline justify-between">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-brand">{formatNaira(totals.total)}</span>
              </div>
              <button
                type="submit"
                className="mt-5 w-full rounded-md bg-brand text-brand-foreground py-3 text-sm font-semibold hover:bg-brand/90 active:scale-[0.99] transition"
              >
                Pay {formatNaira(totals.total)}
              </button>
              <div className="mt-4 rounded-md border bg-secondary/50 px-3 py-2.5 flex gap-2 text-xs">
                <ShieldCheck className="size-4 text-brand shrink-0 mt-0.5" />
                <span>
                  <b>Escrow-protected.</b> Aluminium Village holds your payment and releases it to the
                  vendor only after your order is fulfilled.
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

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="font-medium">{v}</dd>
    </div>
  );
}
