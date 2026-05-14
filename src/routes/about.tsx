import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ROTO TANKS Kenya" },
      { name: "description", content: "ROTO TANKS has manufactured polyethylene water storage in Kenya since 2008. Triple-layer HDPE, ISO 9001 certified, nationwide distribution." },
      { property: "og:title", content: "About — ROTO TANKS Kenya" },
      { property: "og:description", content: "Kenya's trusted manufacturer of premium water tanks since 2008." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const stats = [
  { value: "15+", label: "Years Manufacturing" },
  { value: "120K+", label: "Tanks Delivered" },
  { value: "47", label: "Counties Served" },
  { value: "ISO", label: "9001 Certified" },
];

const milestones = [
  { year: "2008", title: "Founded in Nairobi", body: "Started with a single rotational molding line in Industrial Area." },
  { year: "2013", title: "Triple-Layer Technology", body: "Introduced HDPE triple-layer molding — the first in East Africa." },
  { year: "2017", title: "Coastal Expansion", body: "Opened Mombasa distribution hub serving the entire coastal region." },
  { year: "2021", title: "ISO 9001:2015", body: "Achieved international quality management certification." },
  { year: "2024", title: "Industrial Range", body: "Launched 24,000L bulk storage and chemical-grade tanks." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="px-6 lg:px-10 py-24 border-b border-border">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-mono font-bold text-gold uppercase tracking-[0.3em] mb-4">Our Story</p>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter uppercase mb-8">
              Engineered<br />in Kenya.
            </h1>
            <p className="text-lg text-slate-warm leading-relaxed mb-6">
              ROTO TANKS began in 2008 with a simple conviction: Kenyan homes,
              farms and industries deserve storage built for the Kenyan sun, not
              imported guesswork.
            </p>
            <p className="text-lg text-slate-warm leading-relaxed">
              Today we operate the most advanced rotational molding facility in
              East Africa, producing over 120,000 tanks for customers from Lamu
              to Lodwar.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-secondary p-8 border-l-4 border-gold">
                <div className="text-4xl md:text-5xl font-extrabold tracking-tighter text-navy mb-2">{s.value}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-slate-warm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-24 bg-navy text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase mb-16">Our Journey</h2>
          <div className="space-y-12">
            {milestones.map((m) => (
              <div key={m.year} className="grid md:grid-cols-[180px_1fr] gap-6 md:gap-12 border-l-2 border-gold/40 pl-6 md:border-0 md:pl-0">
                <div className="text-3xl md:text-4xl font-extrabold tracking-tighter text-gold font-mono">{m.year}</div>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{m.title}</h3>
                  <p className="text-white/60 leading-relaxed">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
