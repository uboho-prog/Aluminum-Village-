import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { d as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteLayout } from "./site-layout-sJ8_umK4.mjs";
import { u as useAuthUser } from "./auth-store-DPAAHcGi.mjs";
import { o as Lock, l as LogIn, c as Check, y as CreditCard, z as Landmark, G as Wallet, I as FileText, S as ShieldCheck, m as Shield, q as Headphones } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./logo-DOvfSOrI.mjs";
const payMethods = [{
  id: "card",
  label: "Credit / Debit Card",
  icon: CreditCard
}, {
  id: "bank",
  label: "Bank Transfer",
  icon: Landmark
}, {
  id: "wallet",
  label: "Digital Wallet",
  icon: Wallet
}, {
  id: "po",
  label: "Purchase Order",
  icon: FileText
}];
function Checkout() {
  const [pay, setPay] = reactExports.useState("card");
  const [createAcct, setCreateAcct] = reactExports.useState(false);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [authChecked, setAuthChecked] = reactExports.useState(false);
  const user = useAuthUser();
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    setAuthChecked(true);
  }, []);
  if (authChecked && !user) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-md px-4 sm:px-6 py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border bg-card p-8 text-center shadow-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid place-items-center size-14 rounded-full bg-brand/10 text-brand", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 text-2xl font-bold tracking-tight", children: "Sign in to continue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "You need an account to complete checkout. Sign in or create one to keep your order history, tracking, and saved items in one place." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => navigate({
        to: "/login",
        search: {
          redirect: "/checkout"
        }
      }), className: "mt-6 w-full inline-flex items-center justify-center gap-2 rounded-md bg-brand text-brand-foreground py-3 text-sm font-semibold hover:bg-brand/90 active:scale-[0.99] transition", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(LogIn, { className: "size-4" }),
        "Sign in to checkout"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join", className: "mt-3 block text-xs font-semibold text-brand hover:underline", children: "Create an account" })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-4 sm:px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl md:text-4xl font-bold tracking-tight", children: "Secure Checkout" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-2", children: "Complete your industrial procurement with confidence." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      setSubmitted(true);
    }, className: "grid lg:grid-cols-[1fr_380px] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { step: 1, title: "Account Information", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First Name", defaultValue: "John" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last Name", defaultValue: "Doe" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email Address", type: "email", defaultValue: "john.doe@industrial-solutions.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2.5 mt-4 rounded-md border bg-secondary/50 px-3 py-3 cursor-pointer hover:bg-secondary transition", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid place-items-center size-4 rounded border transition ${createAcct ? "bg-brand border-brand text-brand-foreground" : "bg-card border-input"}`, children: createAcct && /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "sr-only", checked: createAcct, onChange: (e) => setCreateAcct(e.target.checked) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Create an account for faster procurement next time?" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { step: 2, title: "Shipping Destination", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Company Name (Optional)", defaultValue: "Global Aluminium Corp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Street Address", defaultValue: "12 Industrial Way" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City", defaultValue: "Lagos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "State/Province", defaultValue: "LA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Postal Code", defaultValue: "101233" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { step: 3, title: "Payment Method", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-3", children: payMethods.map((m) => {
            const active = pay === m.id;
            const Icon = m.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setPay(m.id), className: `relative flex items-center gap-2.5 rounded-lg border px-4 py-3 text-sm font-medium transition ${active ? "border-brand bg-brand/5 text-brand ring-1 ring-brand" : "bg-card hover:border-brand/40 hover:bg-secondary"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4" }),
              m.label,
              active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto grid place-items-center size-5 rounded-full bg-brand text-brand-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-3" }) })
            ] }, m.id);
          }) }),
          pay === "card" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Card Number", placeholder: "0000 0000 0000 0000", icon: Lock }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Expiry Date", placeholder: "MM / YY" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "CVV", placeholder: "123" })
            ] })
          ] }),
          pay === "bank" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground", children: "You'll receive bank transfer details on the next screen." }),
          pay === "wallet" && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-muted-foreground", children: "You'll be redirected to your digital wallet provider." }),
          pay === "po" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "PO Reference Number", placeholder: "PO-2026-0001" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-5 lg:sticky lg:top-20 self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold", children: "Order Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryItem, { title: "Extruded 6061-T6 Aluminium Pipe", meta: ["Qty: 25 Units", "Length: 6 meters"], price: "₦1,240,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SummaryItem, { title: "Extruded 6063-T5 Aluminium Sheet", meta: ["Qty: 10 Panels", "Size: 4' x 8'"], price: "₦850,000" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-4 border-t" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Subtotal", v: "₦2,090,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Shipping (Freight)", v: "₦145,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Estimated Tax", v: "₦167,200" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-semibold", children: "Total" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-bold text-brand", children: "₦2,402,200" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-5 w-full rounded-md bg-brand text-brand-foreground py-3 text-sm font-semibold hover:bg-brand/90 active:scale-[0.99] transition", children: submitted ? "Order Placed ✓" : "Complete Order" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-md border bg-secondary/50 px-3 py-2.5 flex gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-4 text-brand shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "SSL Encrypted Checkout." }),
              " Your data is protected by industry-standard encryption."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center justify-center gap-4 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "size-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "size-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "size-5" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-4 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center size-9 rounded-full bg-brand/10 text-brand shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Headphones, { className: "size-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Need Procurement Assistance?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Our industrial specialists are available 24/7 to help with complex orders." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-1.5 inline-block text-xs font-semibold text-brand hover:underline", children: "Contact Expert Support" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function Section({
  step,
  title,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-5 sm:p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid place-items-center size-7 rounded-full bg-muted text-foreground text-sm font-bold", children: step }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold", children: title })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children })
  ] });
}
function Field({
  label,
  type = "text",
  defaultValue,
  placeholder,
  icon: Icon
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-medium text-muted-foreground mb-1.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, defaultValue, placeholder, className: "w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand transition" }),
      Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "size-4 text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2" })
    ] })
  ] });
}
function SummaryItem({
  title,
  meta,
  price
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "size-14 rounded-md bg-secondary shrink-0 grid place-items-center text-[10px] text-muted-foreground", children: "IMG" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold leading-snug", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: meta.join(" · ") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold whitespace-nowrap", children: price })
  ] });
}
function Row({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-medium", children: v })
  ] });
}
export {
  Checkout as component
};
