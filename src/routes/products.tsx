import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { products, categories } from "@/lib/products";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — ROTO TANKS Kenya" },
      { name: "description", content: "Browse the full ROTO TANKS catalog: vertical, horizontal, loft, septic, cone-bottom and chemical storage tanks. Capacities from 1,000L to 10,000L+." },
      { property: "og:title", content: "Products — ROTO TANKS Kenya" },
      { property: "og:description", content: "Full catalog of polyethylene storage tanks for domestic, industrial and agricultural use." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<typeof categories[number]>("All");
  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <SiteLayout>
      <section className="border-b border-border px-6 lg:px-10 py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono font-bold text-gold uppercase tracking-[0.3em] mb-4">Catalog</p>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter uppercase">
            Every Tank,<br />Every Need.
          </h1>
          <p className="mt-6 text-lg text-slate-warm max-w-2xl">
            From compact loft units to bulk industrial reservoirs — every ROTO TANK
            ships with the same triple-layer guarantee.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-4 mb-10 -mx-2 px-2">
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-widest whitespace-nowrap border transition-colors ${
                    isActive
                      ? "bg-navy text-white border-navy"
                      : "bg-background border-border hover:border-navy"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="border border-border bg-background hover:border-gold transition-colors group"
              >
                <div className="p-6 pb-0">
                  <div className="flex justify-between items-start mb-5">
                    <span className="text-3xl font-extrabold tracking-tighter">{p.capacity}</span>
                    <span className="font-mono text-[10px] bg-secondary px-2 py-1">{p.ref}</span>
                  </div>
                  <div className="w-full aspect-square bg-secondary grid place-items-center mb-6 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      width={768}
                      height={768}
                      loading="lazy"
                      className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
                <div className="p-6 pt-0 border-t border-border mt-2">
                  <h3 className="font-bold uppercase text-sm tracking-tight mb-1 mt-4">{p.name}</h3>
                  <p className="text-xs font-mono text-gold uppercase tracking-wider mb-4">{p.category}</p>
                  <p className="text-sm text-slate-warm leading-relaxed mb-5">{p.description}</p>
                  <dl className="grid grid-cols-2 gap-3 mb-6">
                    {p.specs.map((s) => (
                      <div key={s.label}>
                        <dt className="text-[10px] uppercase font-mono text-slate-warm/70">{s.label}</dt>
                        <dd className="font-bold text-sm">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                  <Link
                    to="/contact"
                    className="block text-center w-full py-3 border-2 border-navy text-navy font-bold uppercase text-xs tracking-widest hover:bg-navy hover:text-white transition-colors"
                  >
                    Request Quote
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
