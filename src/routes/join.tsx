import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { useState } from "react";
import { Check, MapPin, Upload, FileText, BadgeCheck, Shield, Award } from "lucide-react";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join as a Professional | Aluminium Village" },
      {
        name: "description",
        content: "Register as a verified professional and grow your business with high-quality leads.",
      },
    ],
  }),
  component: Join,
});

const steps = ["Account Type", "Details", "Verification"];

function Join() {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState<"business" | "individual">("business");

  return (
    <SiteLayout>
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent">
            Professional Registration
          </div>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold">Expand Your Reach</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Join Africa's most trusted aluminium professional network. Get verified, showcase your
            projects, and grow your business with high-quality leads.
          </p>
        </div>

        {/* Stepper */}
        <ol className="mt-10 flex items-center justify-center gap-4">
          {steps.map((label, i) => {
            const n = i + 1;
            const done = n < step;
            const active = n === step;
            return (
              <li key={label} className="flex items-center gap-3">
                <div
                  className={`grid h-9 w-9 place-items-center rounded-full text-sm font-semibold border ${
                    done
                      ? "bg-accent text-accent-foreground border-accent"
                      : active
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-card text-muted-foreground"
                  }`}
                >
                  {done ? <Check className="size-4" /> : n}
                </div>
                <span
                  className={`text-sm ${active ? "font-semibold" : "text-muted-foreground"}`}
                >
                  {label}
                </span>
                {i < steps.length - 1 && <div className="w-8 h-px bg-border" />}
              </li>
            );
          })}
        </ol>

        <div className="mt-10 rounded-2xl border bg-card p-6 md:p-8">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold">Choose Account Type</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Select the option that best matches your professional setup.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {[
                  { id: "business", title: "Business / Company", desc: "Registered fabricator, supplier, or installation firm." },
                  { id: "individual", title: "Individual Professional", desc: "Freelance technician, artisan, or consultant." },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setAccountType(opt.id as "business" | "individual")}
                    className={`text-left rounded-xl border p-5 transition-colors ${
                      accountType === opt.id
                        ? "border-brand bg-brand/5 ring-2 ring-brand"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <div className="font-semibold">{opt.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{opt.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold">Professional Details</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your specialization and service area.
              </p>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Business Representative Name" placeholder="Jane Adekunle" />
                <Field label="Contact Number" placeholder="+234 ..." />
                <div>
                  <label className="text-xs font-medium text-muted-foreground">
                    Professional Specialization
                  </label>
                  <select className="mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm">
                    <option>Aluminium Fabricator</option>
                    <option>System Installer</option>
                    <option>Material Supplier</option>
                    <option>Technical Consultant</option>
                  </select>
                </div>
                <Field label="Years of Experience" placeholder="e.g. 8" type="number" />
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-muted-foreground">
                    Primary Service Area
                  </label>
                  <div className="mt-1 flex items-center gap-2 rounded-md border bg-card px-3 py-2.5">
                    <MapPin className="size-4 text-muted-foreground" />
                    <input
                      placeholder="Lagos, Nigeria"
                      className="bg-transparent outline-none text-sm flex-1"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs font-medium text-muted-foreground">
                    Professional Description
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your work, capabilities and notable projects..."
                    className="mt-1 w-full rounded-md border bg-card px-3 py-2.5 text-sm"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold">Verification</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Upload the following documents. Our compliance team reviews within 24–48 hours.
              </p>
              <div className="mt-6 space-y-4">
                <Dropzone label="Business License / Registration *" hint="PDF, JPG, PNG (Max 10MB)" />
                <FilePick label="Tax Clearance Certificate *" placeholder="Upload certificate..." />
                <FilePick
                  label="Professional Certifications (Optional)"
                  placeholder="ISO, ASTM, or industry specific certs..."
                />
                <label className="flex items-start gap-2 text-sm text-muted-foreground">
                  <input type="checkbox" className="mt-0.5" />
                  I certify the information is accurate and I agree to the{" "}
                  <a className="text-brand hover:underline">professional terms of service</a>.
                </label>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between">
            <button
              onClick={() => setStep((s) => Math.max(1, s - 1))}
              disabled={step === 1}
              className="rounded-md border bg-card px-5 py-2.5 text-sm font-medium hover:bg-secondary disabled:opacity-40"
            >
              Back
            </button>
            {step < 3 ? (
              <button
                onClick={() => setStep((s) => s + 1)}
                className="rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90"
              >
                Continue
              </button>
            ) : (
              <button className="rounded-md bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90">
                Submit for Verification
              </button>
            )}
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {[
            { icon: BadgeCheck, t: "Verified Suppliers", d: "Vetted industrial partners" },
            { icon: Shield, t: "Secure Transactions", d: "End-to-end encryption" },
            { icon: Award, t: "Quality Certified", d: "Global manufacturing standards" },
          ].map((b) => (
            <div key={b.t} className="rounded-xl border bg-card p-5 flex gap-3">
              <b.icon className="size-5 text-accent shrink-0" />
              <div>
                <div className="text-sm font-semibold">{b.t}</div>
                <div className="text-xs text-muted-foreground">{b.d}</div>
              </div>
            </div>
          ))}
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

function Dropzone({ label, hint }: { label: string; hint: string }) {
  return (
    <div>
      <div className="text-xs font-medium text-muted-foreground mb-1.5">{label}</div>
      <div className="rounded-xl border-2 border-dashed bg-secondary/40 p-8 text-center">
        <Upload className="size-7 mx-auto text-muted-foreground" />
        <div className="mt-2 text-sm font-medium">
          Drag and drop your file here, or <span className="text-brand">browse</span>
        </div>
        <div className="mt-1 text-xs text-muted-foreground">Accepted formats: {hint}</div>
      </div>
    </div>
  );
}

function FilePick({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div>
      <div className="text-xs font-medium text-muted-foreground mb-1.5">{label}</div>
      <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2.5 text-sm">
        <FileText className="size-4 text-muted-foreground" />
        <span className="flex-1 text-muted-foreground">{placeholder}</span>
        <button type="button" className="rounded-md border px-3 py-1 text-xs hover:bg-secondary">
          Choose File
        </button>
      </div>
    </div>
  );
}
