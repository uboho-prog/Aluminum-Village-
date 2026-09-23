import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteLayout } from "./site-layout-sJ8_umK4.mjs";
import { c as Check, O as MapPin, b as BadgeCheck, m as Shield, a1 as Award, a2 as Upload, I as FileText } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./auth-store-DPAAHcGi.mjs";
const steps = ["Account Type", "Details", "Verification"];
function Join() {
  const [step, setStep] = reactExports.useState(1);
  const [accountType, setAccountType] = reactExports.useState("business");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SiteLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-4xl px-4 sm:px-6 py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Professional Registration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-3xl md:text-4xl font-bold", children: "Expand Your Reach" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-2xl mx-auto", children: "Join Africa's most trusted aluminium professional network. Get verified, showcase your projects, and grow your business with high-quality leads." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-10 flex items-center justify-center gap-4", children: steps.map((label, i) => {
      const n = i + 1;
      const done = n < step;
      const active = n === step;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid h-9 w-9 place-items-center rounded-full text-sm font-semibold border ${done ? "bg-accent text-accent-foreground border-accent" : active ? "bg-primary text-primary-foreground border-primary" : "bg-card text-muted-foreground"}`, children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "size-4" }) : n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm ${active ? "font-semibold" : "text-muted-foreground"}`, children: label }),
        i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-px bg-border" })
      ] }, label);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-2xl border bg-card p-6 md:p-8", children: [
      step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Choose Account Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Select the option that best matches your professional setup." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid sm:grid-cols-2 gap-4", children: [{
          id: "business",
          title: "Business / Company",
          desc: "Registered fabricator, supplier, or installation firm."
        }, {
          id: "individual",
          title: "Individual Professional",
          desc: "Freelance technician, artisan, or consultant."
        }].map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setAccountType(opt.id), className: `text-left rounded-xl border p-5 transition-colors ${accountType === opt.id ? "border-brand bg-brand/5 ring-2 ring-brand" : "hover:bg-secondary"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: opt.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: opt.desc })
        ] }, opt.id)) })
      ] }),
      step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Professional Details" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Tell us about your specialization and service area." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Business Representative Name", placeholder: "Jane Adekunle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Contact Number", placeholder: "+234 ..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Professional Specialization" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Aluminium Fabricator" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "System Installer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Material Supplier" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Technical Consultant" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Years of Experience", placeholder: "e.g. 8", type: "number" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Primary Service Area" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2 rounded-md border bg-card px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "size-4 text-muted-foreground" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { placeholder: "Lagos, Nigeria", className: "bg-transparent outline-none text-sm flex-1" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-medium text-muted-foreground", children: "Professional Description" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 4, placeholder: "Describe your work, capabilities and notable projects...", className: "mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm" })
          ] })
        ] })
      ] }),
      step === 3 && accountType === "business" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Verification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Upload the following documents. Our compliance team reviews within 24–48 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dropzone, { label: "Business License / Registration *", hint: "PDF, JPG, PNG (Max 10MB)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilePick, { label: "Tax Clearance Certificate *", placeholder: "Upload certificate..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilePick, { label: "Professional Certifications (Optional)", placeholder: "ISO, ASTM, or industry specific certs..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "mt-0.5" }),
            "I certify the information is accurate and I agree to the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-brand hover:underline", children: "professional terms of service" }),
            "."
          ] })
        ] })
      ] }),
      step === 3 && accountType === "individual" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold", children: "Individual Verification" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "To maintain our industrial standards, please upload the following documents for verification. Our compliance team will review these within 24-48 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Dropzone, { label: "Government Issued ID (Passport, NIN, or Driver's License) *", hint: "PDF, JPG, PNG (Max 10MB)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilePick, { label: "Proof of Address *", placeholder: "Upload utility bill or bank statement..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FilePick, { label: "Professional Certifications (Optional)", placeholder: "ISO, ASTM, or industry specific certs..." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "mt-0.5" }),
            "I certify that the information provided is accurate and I agree to the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-brand hover:underline", children: "professional terms of service" }),
            "."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep((s) => Math.max(1, s - 1)), disabled: step === 1, className: "rounded-md border bg-card px-5 py-2.5 text-sm font-medium hover:bg-secondary disabled:opacity-40", children: "Back" }),
        step < 3 ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setStep((s) => s + 1), className: "rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90", children: "Continue" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-md bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90", children: "Submit for Verification" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-3 gap-4", children: [{
      icon: BadgeCheck,
      t: "Verified Suppliers",
      d: "Vetted industrial partners"
    }, {
      icon: Shield,
      t: "Secure Transactions",
      d: "End-to-end encryption"
    }, {
      icon: Award,
      t: "Quality Certified",
      d: "Global manufacturing standards"
    }].map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border bg-card p-5 flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "size-5 text-accent shrink-0" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: b.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: b.d })
      ] })
    ] }, b.t)) })
  ] }) });
}
function Field({
  label,
  ...rest
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ...rest, className: "mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm" })
  ] });
}
function Dropzone({
  label,
  hint
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-muted-foreground mb-1.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-dashed bg-secondary/40 p-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "size-7 mx-auto text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm font-medium", children: [
        "Drag and drop your file here, or ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-brand", children: "browse" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-xs text-muted-foreground", children: [
        "Accepted formats: ",
        hint
      ] })
    ] })
  ] });
}
function FilePick({
  label,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-medium text-muted-foreground mb-1.5", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-md border bg-card px-3 py-2.5 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "size-4 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1 text-muted-foreground", children: placeholder }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-md border px-3 py-1 text-xs hover:bg-secondary", children: "Choose File" })
    ] })
  ] });
}
export {
  Join as component
};
