import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import {
  UserCircle,
  Star,
  CheckCircle2,
  Briefcase,
  ImagePlus,
  X,
  ExternalLink,
  Plus,
  Trash2,
} from "lucide-react";
import { useAuthUser } from "@/lib/auth-store";
import { useMyProfile, upsertOwnProfile, uid } from "@/lib/platform-store";
import type { PortfolioItem, ProfessionalProfile } from "@/lib/admin-models";
import {
  AdminCard,
  FieldLabel,
  GhostButton,
  PageHeader,
  PrimaryButton,
  SelectInput,
  StatCard,
  StatusPill,
  TextArea,
  TextInput,
} from "@/components/admin-ui";

export const Route = createFileRoute("/admin/profile")({
  head: () => ({
    meta: [
      { title: "My Profile | Professional Suite" },
      { name: "description", content: "Showcase who you are, your skills, and your work." },
    ],
  }),
  component: AdminProfilePage,
});

const AVAILABILITY: ProfessionalProfile["availability"][] = ["Available", "Busy", "Offline"];

function AdminProfilePage() {
  const user = useAuthUser();
  const profile = useMyProfile();

  const [fullName, setFullName] = useState("");
  const [headline, setHeadline] = useState("");
  const [location, setLocation] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");
  const [availability, setAvailability] = useState<ProfessionalProfile["availability"]>("Available");
  const [responseTime, setResponseTime] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
  const [skills, setSkills] = useState<string[]>([]);
  const [skillDraft, setSkillDraft] = useState("");
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  // Seed the form from the stored profile once it hydrates.
  useEffect(() => {
    if (!profile) return;
    setFullName(profile.fullName);
    setHeadline(profile.headline);
    setLocation(profile.location);
    setHourlyRate(profile.hourlyRate);
    setAvailability(profile.availability);
    setResponseTime(profile.responseTime);
    setBio(profile.bio);
    setAvatar(profile.avatar);
    setSkills(profile.skills);
    setPortfolio(profile.portfolio);
  }, [profile?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const addSkill = () => {
    const s = skillDraft.trim();
    if (!s || skills.includes(s)) return setSkillDraft("");
    setSkills((prev) => [...prev, s]);
    setSkillDraft("");
  };

  const onAvatarFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(String(reader.result));
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const addPortfolioItem = () =>
    setPortfolio((prev) => [
      ...prev,
      { id: uid("AV-PF"), title: "", description: "", images: [], category: "", completedAt: "" },
    ]);

  const save = () => {
    if (!user) return;
    if (!fullName.trim() || !headline.trim()) {
      toast.error("Add at least your name and a headline.");
      return;
    }
    upsertOwnProfile(
      { email: user.email, name: user.name },
      {
        fullName: fullName.trim(),
        headline: headline.trim(),
        location: location.trim(),
        hourlyRate: hourlyRate.trim(),
        availability,
        responseTime: responseTime.trim() || "Within a day",
        bio: bio.trim(),
        avatar: avatar.trim(),
        skills,
        portfolio: portfolio.filter((p) => p.title.trim()),
      },
    );
    toast.success("Profile saved. Buyers can now find you in the directory.");
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <PageHeader
        title="My Profile"
        description="This is your public profile — like your storefront. Keep it sharp to win client requests."
        actions={
          profile ? (
            <Link to="/pro/$id" params={{ id: profile.id }} target="_blank">
              <GhostButton>
                <ExternalLink className="size-4" /> View public profile
              </GhostButton>
            </Link>
          ) : null
        }
      />

      {profile && (
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard label="RATING" value={profile.rating ? `${profile.rating} ★` : "New"} icon={Star} tone="amber" />
          <StatCard label="COMPLETED JOBS" value={profile.completedJobs} icon={CheckCircle2} tone="emerald" />
          <StatCard label="REVIEWS" value={profile.reviews} icon={Briefcase} tone="sky" />
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Editor */}
        <AdminCard title="Edit Profile">
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <FieldLabel>Full Name</FieldLabel>
                <TextInput value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Chidi Okonkwo" />
              </div>
              <div>
                <FieldLabel>Location</FieldLabel>
                <TextInput value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Lagos, NG" />
              </div>
            </div>

            <div>
              <FieldLabel>Headline</FieldLabel>
              <TextInput
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                placeholder="Aluminium Fabrication & Facade Specialist"
              />
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <FieldLabel>Hourly Rate (₦)</FieldLabel>
                <TextInput value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} placeholder="₦35,000" />
              </div>
              <div>
                <FieldLabel>Availability</FieldLabel>
                <SelectInput
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value as ProfessionalProfile["availability"])}
                >
                  {AVAILABILITY.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </SelectInput>
              </div>
              <div>
                <FieldLabel>Response Time</FieldLabel>
                <TextInput
                  value={responseTime}
                  onChange={(e) => setResponseTime(e.target.value)}
                  placeholder="Under 2 hours"
                />
              </div>
            </div>

            <div>
              <FieldLabel>Bio — what you do</FieldLabel>
              <TextArea
                rows={4}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Describe your experience, specialities and the services you render…"
              />
            </div>

            <div>
              <FieldLabel>Skills</FieldLabel>
              <div className="mb-2 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1 rounded-full bg-slate-700/60 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {s}
                    <button
                      type="button"
                      onClick={() => setSkills((prev) => prev.filter((x) => x !== s))}
                      className="text-slate-400 hover:text-rose-400"
                    >
                      <X className="size-3" />
                    </button>
                  </span>
                ))}
                {skills.length === 0 && <span className="text-xs text-slate-500">No skills added yet.</span>}
              </div>
              <div className="flex items-center gap-2">
                <TextInput
                  value={skillDraft}
                  onChange={(e) => setSkillDraft(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
                  placeholder="Add a skill and press Enter"
                />
                <GhostButton type="button" onClick={addSkill}>
                  Add
                </GhostButton>
              </div>
            </div>

            {/* Portfolio */}
            <div>
              <div className="flex items-center justify-between">
                <FieldLabel>Portfolio</FieldLabel>
                <button type="button" onClick={addPortfolioItem} className="text-xs font-semibold text-[#4d8dff] hover:underline">
                  <Plus className="inline size-3.5" /> Add item
                </button>
              </div>
              <div className="space-y-3">
                {portfolio.map((item, i) => (
                  <div key={item.id} className="rounded-lg border border-slate-700 bg-slate-800/40 p-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <TextInput
                        value={item.title}
                        onChange={(e) =>
                          setPortfolio((prev) => prev.map((p, j) => (j === i ? { ...p, title: e.target.value } : p)))
                        }
                        placeholder="Project title"
                      />
                      <button
                        type="button"
                        onClick={() => setPortfolio((prev) => prev.filter((_, j) => j !== i))}
                        className="rounded-md p-2 text-slate-400 hover:bg-slate-700 hover:text-rose-400"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>
                    <TextArea
                      rows={2}
                      value={item.description}
                      onChange={(e) =>
                        setPortfolio((prev) => prev.map((p, j) => (j === i ? { ...p, description: e.target.value } : p)))
                      }
                      placeholder="What did you deliver?"
                    />
                  </div>
                ))}
                {portfolio.length === 0 && (
                  <p className="text-xs text-slate-500">Showcase past projects to build trust.</p>
                )}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <PrimaryButton onClick={save}>Save Profile</PrimaryButton>
            </div>
          </div>
        </AdminCard>

        {/* Live preview */}
        <div className="space-y-4">
          <AdminCard title="Live Preview">
            <div className="flex flex-col items-center text-center">
              <div className="size-20 overflow-hidden rounded-full border-2 border-slate-700 bg-slate-800">
                {avatar ? (
                  <img src={avatar} alt="" className="size-full object-cover" />
                ) : (
                  <div className="grid size-full place-items-center text-slate-500">
                    <UserCircle className="size-10" />
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#4d8dff] hover:underline"
              >
                <ImagePlus className="size-3.5" /> Change photo
              </button>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={onAvatarFile} />
              <div className="mt-3 text-base font-bold text-white">{fullName || "Your Name"}</div>
              <div className="text-xs text-[#4d8dff] font-medium">{headline || "Your headline"}</div>
              <div className="mt-1 text-xs text-slate-400">{location || "Location"}</div>
              <div className="mt-3">
                <StatusPill status={availability} />
              </div>
              {hourlyRate && (
                <div className="mt-3 text-sm font-semibold text-white">{hourlyRate}<span className="text-xs text-slate-500">/hr</span></div>
              )}
            </div>
          </AdminCard>

          <AdminCard title="Next steps">
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link to="/admin/services" className="font-semibold text-[#4d8dff] hover:underline">
                  Add services →
                </Link>{" "}
                list what you can do.
              </li>
              <li>
                <Link to="/admin/requests" className="font-semibold text-[#4d8dff] hover:underline">
                  View requests →
                </Link>{" "}
                see who wants your services.
              </li>
            </ul>
          </AdminCard>
        </div>
      </div>
    </div>
  );
}
