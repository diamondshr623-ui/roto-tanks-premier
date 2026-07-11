import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Quote Request — ROTO TANKS Kenya" },
      { name: "description", content: "Request a quote for water tanks, septic tanks or industrial storage. Talk to ROTO TANKS sales engineers — Nairobi, Mombasa, Eldoret." },
      { property: "og:title", content: "Contact ROTO TANKS Kenya" },
      { property: "og:description", content: "Request a quote for water and industrial storage tanks." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteLayout>
      <section className="px-6 lg:px-10 py-20 border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono font-bold text-gold uppercase tracking-[0.3em] mb-4">Talk to us</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter uppercase">
            Request a<br />Quote.
          </h1>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.3fr] gap-16">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-6">Sales Desk</h2>
              <p className="text-slate-warm mb-8 leading-relaxed">
                Our engineers respond to every quote within one business day, with full delivery and installation details.
              </p>
              <div className="space-y-5">
                <div className="flex gap-4 items-start">
                  <Phone className="size-5 text-gold mt-1 shrink-0" />
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-warm mb-1">Call</div>
                    <a href="tel:+254750379893" className="text-lg font-bold hover:text-gold">+254 750 379 893</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail className="size-5 text-gold mt-1 shrink-0" />
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-warm mb-1">Email</div>
                    <a href="mailto:sales@rototanks.co.ke" className="text-lg font-bold hover:text-gold">sales@rototanks.co.ke</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <MapPin className="size-5 text-gold mt-1 shrink-0" />
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-slate-warm mb-1">Headquarters</div>
                    <p className="text-lg font-bold">Mombasa Road, Industrial Area<br />Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <h3 className="text-xs font-mono uppercase tracking-widest text-slate-warm mb-4">Regional Depots</h3>
              <ul className="grid grid-cols-2 gap-3 text-sm font-bold">
                <li>Mombasa Hub</li>
                <li>Kisumu Depot</li>
                <li>Eldoret Branch</li>
                <li>Nakuru Centre</li>
              </ul>
            </div>
          </div>

          <div className="bg-navy text-white p-8 lg:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <CheckCircle2 className="size-16 text-gold mb-6" />
                <h3 className="text-3xl font-extrabold uppercase tracking-tight mb-4">Quote Received</h3>
                <p className="text-white/70 max-w-sm">
                  Our sales engineers will reach out within one business day with a tailored quote and delivery timeline.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-5"
              >
                <h2 className="text-2xl font-extrabold uppercase tracking-tight mb-6">Quote Form</h2>
                <Field label="Full Name">
                  <input required type="text" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white outline-none focus:border-gold transition-colors" />
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Phone">
                    <input required type="tel" placeholder="+254" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white outline-none focus:border-gold transition-colors" />
                  </Field>
                  <Field label="Email">
                    <input required type="email" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white outline-none focus:border-gold transition-colors" />
                  </Field>
                </div>
                <Field label="Tank Type">
                  <select className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white outline-none focus:border-gold transition-colors">
                    <option className="text-navy">Vertical (Domestic)</option>
                    <option className="text-navy">Vertical (Industrial)</option>
                    <option className="text-navy">Horizontal / Transport</option>
                    <option className="text-navy">Loft / Rectangular</option>
                    <option className="text-navy">Underground Septic</option>
                    <option className="text-navy">Chemical Storage</option>
                    <option className="text-navy">Cone Bottom</option>
                  </select>
                </Field>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Capacity (L)">
                    <input type="text" placeholder="e.g. 5000" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white outline-none focus:border-gold transition-colors" />
                  </Field>
                  <Field label="Delivery Town">
                    <input type="text" placeholder="Town / County" className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white outline-none focus:border-gold transition-colors" />
                  </Field>
                </div>
                <Field label="Message">
                  <textarea rows={4} placeholder="Site conditions, installation notes, quantities..." className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white outline-none focus:border-gold transition-colors resize-none" />
                </Field>
                <button
                  type="submit"
                  className="w-full py-4 bg-gold text-navy font-bold uppercase text-sm tracking-widest hover:bg-white transition-colors mt-2"
                >
                  Submit Quote Request
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-[10px] font-mono uppercase tracking-widest text-gold mb-2">{label}</span>
      {children}
    </label>
  );
}
