import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  Star,
  MapPin,
  BadgeCheck,
  Clock,
  Briefcase,
  CheckCircle2,
  ArrowLeft,
  Send,
  X,
} from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { useAuthUser } from "@/lib/auth-store";
import { usePlatform, createServiceRequest } from "@/lib/platform-store";
import type { ProfessionalService } from "@/lib/admin-models";

export const Route = createFileRoute("/pro/$id")({
  head: () => ({
    meta: [
      { title: "Professional Profile | Aluminium Village" },
      { name: "description", content: "View a verified professional's profile and request their services." },
    ],
  }),
  component: ProProfilePage,
});

function ProProfilePage() {
  const { id } = useParams({ from: "/pro/$id" });
  const { professionals } = usePlatform();
  const user = useAuthUser();
  const pro = professionals.find((p) => p.id === id);

  const [requestService, setRequestService] = useState<ProfessionalService | null>(null);

  if (!pro) {
    return (
      <SiteLayout>
        <section className="mx-auto max-w-2xl px-4 sm:px-6 py-20 text-center">
          <h1 className="text-2xl font-bold">Professional not found</h1>
          <p className="mt-2 text-muted-foreground">This profile may have been removed.</p>
          <Link to="/directory" className="mt-6 inline-flex items-center gap-2 text-brand font-semibold hover:underline">
            <ArrowLeft className="size-4" /> Back to directory
          </Link>
        </section>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-8">
        <Link to="/directory" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="size-4" /> Directory
        </Link>

        {/* Header */}
        <div className="mt-6 rounded-2xl border bg-card p-6 sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="size-24 shrink-0 overflow-hidden rounded-2xl bg-secondary">
              <img src={pro.avatar} alt={pro.fullName} className="size-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl font-bold">{pro.fullName}</h1>
                {pro.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-semibold px-2 py-0.5">
                    <BadgeCheck className="size-3" /> Verified
                  </span>
                )}
              </div>
              <div className="mt-1 text-brand font-medium">{pro.headline}</div>
              <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Star className="size-4 fill-amber-500 text-amber-500" />
                  <span className="font-semibold text-foreground">{pro.rating || "New"}</span>
                  {pro.reviews > 0 && <span>({pro.reviews})</span>}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="size-4" /> {pro.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="size-4" /> Responds {pro.responseTime}
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="size-4" /> {pro.completedJobs} jobs
                </span>
              </div>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-2xl font-bold">{pro.hourlyRate}</div>
              <div className="text-xs text-muted-foreground">per hour</div>
              <button
                onClick={() => setRequestService(pro.services[0] ?? null)}
                className="mt-3 w-full rounded-md bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:bg-brand/90 active:scale-[0.98] transition"
              >
                Request Service
              </button>
            </div>
          </div>

          {pro.bio && <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{pro.bio}</p>}

          {pro.skills.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {pro.skills.map((s) => (
                <span key={s} className="rounded-md border bg-background px-2.5 py-0.5 text-xs">
                  {s}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Services */}
          <div>
            <h2 className="text-xl font-bold">Services</h2>
            {pro.services.length === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">This professional hasn't listed services yet.</p>
            ) : (
              <div className="mt-4 space-y-4">
                {pro.services
                  .filter((s) => s.status === "Active")
                  .map((svc) => (
                    <div key={svc.id} className="rounded-xl border bg-card p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold">{svc.title}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{svc.description}</p>
                        </div>
                        <div className="shrink-0 text-right">
                          <div className="text-lg font-bold">{svc.price}</div>
                          <div className="text-[11px] text-muted-foreground">{svc.priceType}</div>
                        </div>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {svc.features.map((f) => (
                          <span key={f} className="rounded-md border bg-background px-2 py-0.5 text-[11px]">
                            {f}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t pt-3">
                        <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="size-3.5" /> {svc.deliveryTime}
                        </span>
                        <button
                          onClick={() => setRequestService(svc)}
                          className="inline-flex items-center gap-1.5 rounded-md border border-brand text-brand px-4 py-1.5 text-sm font-semibold hover:bg-brand hover:text-brand-foreground transition"
                        >
                          Request this
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Portfolio */}
          <div>
            <h2 className="text-xl font-bold">Portfolio</h2>
            {pro.portfolio.length === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">No portfolio items yet.</p>
            ) : (
              <div className="mt-4 space-y-4">
                {pro.portfolio.map((item) => (
                  <div key={item.id} className="rounded-xl border bg-card overflow-hidden">
                    {item.images[0] && (
                      <div className="aspect-video bg-secondary">
                        <img src={item.images[0]} alt={item.title} className="size-full object-cover" />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="size-3.5 text-brand" />
                        <h3 className="text-sm font-semibold">{item.title}</h3>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                      {item.clientFeedback && (
                        <p className="mt-2 text-xs italic text-muted-foreground">"{item.clientFeedback}"</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {requestService !== null && (
        <RequestModal
          pro={pro}
          service={requestService}
          defaultName={user?.name ?? ""}
          defaultEmail={user?.email ?? ""}
          onClose={() => setRequestService(null)}
        />
      )}
    </SiteLayout>
  );
}

function RequestModal({
  pro,
  service,
  defaultName,
  defaultEmail,
  onClose,
}: {
  pro: { id: string; fullName: string; services: ProfessionalService[] };
  service: ProfessionalService | null;
  defaultName: string;
  defaultEmail: string;
  onClose: () => void;
}) {
  const [serviceId, setServiceId] = useState(service?.id ?? pro.services[0]?.id ?? "");
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please add your name, email and a short message.");
      return;
    }
    const svc = pro.services.find((s) => s.id === serviceId);
    createServiceRequest({
      professionalId: pro.id,
      professionalName: pro.fullName,
      client: { id: `USR-${Date.now().toString(36)}`, name: name.trim(), email: email.trim(), phone: phone.trim() },
      serviceId,
      serviceTitle: svc?.title ?? "General enquiry",
      message: message.trim(),
      budget: budget.trim() || "To discuss",
      timeline: timeline.trim() || "Flexible",
    });
    toast.success(`Request sent to ${pro.fullName}.`);
    onClose();
  };

  const field = "mt-1 w-full rounded-md border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand";

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 sm:p-6">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative my-8 w-full max-w-lg rounded-2xl border bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b px-6 py-4">
          <div>
            <h3 className="text-lg font-bold">Request a Service</h3>
            <p className="text-sm text-muted-foreground">from {pro.fullName}</p>
          </div>
          <button onClick={onClose} className="rounded-md p-1.5 text-muted-foreground hover:bg-secondary" aria-label="Close">
            <X className="size-5" />
          </button>
        </div>
        <form onSubmit={submit} className="px-6 py-5 space-y-4">
          {pro.services.length > 0 && (
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Service</span>
              <select value={serviceId} onChange={(e) => setServiceId(e.target.value)} className={field}>
                {pro.services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </label>
          )}
          <div className="grid sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Your Name</span>
              <input value={name} onChange={(e) => setName(e.target.value)} className={field} placeholder="Jane Doe" />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Email</span>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={field} placeholder="you@company.com" />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Phone</span>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className={field} placeholder="+234 ..." />
            </label>
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Budget</span>
              <input value={budget} onChange={(e) => setBudget(e.target.value)} className={field} placeholder="₦ ..." />
            </label>
            <label className="block sm:col-span-2">
              <span className="text-xs font-medium text-muted-foreground">Timeline</span>
              <input value={timeline} onChange={(e) => setTimeline(e.target.value)} className={field} placeholder="e.g. 4 weeks" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs font-medium text-muted-foreground">Message</span>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={field}
              placeholder="Describe your project and what you need…"
            />
          </label>
          <div className="flex justify-end gap-2 pt-1">
            <button type="button" onClick={onClose} className="rounded-md border bg-card px-4 py-2.5 text-sm font-medium hover:bg-secondary">
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:bg-brand/90 active:scale-[0.98] transition"
            >
              <Send className="size-4" /> Send Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
