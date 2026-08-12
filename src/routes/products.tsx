import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { products, categories, WHATSAPP_NUMBER, CONTACT_PHONE_TEL, CONTACT_PHONE } from "@/lib/products";

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
      {/* Hero Section */}
      <section className="border-b border-border px-4 md:px-6 lg:px-10 py-12 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-mono font-bold text-gold uppercase tracking-[0.3em] mb-4">Catalog</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter uppercase">
            Every Tank,<br />Every Need.
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-slate-warm max-w-2xl">
            From compact loft units to bulk industrial reservoirs — every ROTO TANK
            ships with the same triple-layer guarantee.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 md:px-6 lg:px-10 py-8 md:py-16 bg-background sticky top-0 z-40 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-3 -mx-2 px-2">
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 md:px-5 py-2 text-xs md:text-sm font-bold uppercase tracking-widest whitespace-nowrap border transition-colors ${
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
        </div>
      </section>

      {/* Products Grid - 2 columns on mobile, 3 on tablet, 4 on desktop */}
      <section className="px-3 md:px-6 lg:px-10 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {filtered.map((p) => (
              <article
                key={p.id}
                className="border border-border bg-background hover:border-gold transition-colors group overflow-hidden flex flex-col h-full"
              >
                {/* Product Image */}
                <div className="p-2 md:p-4 pb-0 flex-1">
                  <div className="w-full aspect-square bg-secondary grid place-items-center mb-2 md:mb-4 overflow-hidden rounded">
                    <img
                      src={p.image}
                      alt={p.name}
                      width={768}
                      height={768}
                      loading="lazy"
                      className="w-full h-full object-contain p-2 md:p-4 group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-2 md:p-4 border-t border-border flex flex-col gap-2 md:gap-3">
                  {/* Capacity Badge */}
                  <div className="flex justify-between items-start gap-1">
                    <span className="text-lg md:text-2xl font-extrabold tracking-tighter leading-tight">{p.capacity}</span>
                    <span className="font-mono text-[7px] md:text-[10px] bg-secondary px-2 py-1 whitespace-nowrap">{p.category}</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-bold uppercase text-xs md:text-sm tracking-tight line-clamp-2">{p.name}</h3>

                  {/* Price */}
                  <p className="text-base md:text-xl font-extrabold text-gold">{p.price}</p>

                  {/* Description - Hide on mobile, show on tablet+ */}
                  <p className="text-[10px] md:text-xs text-slate-warm leading-relaxed hidden md:block line-clamp-2">{p.description}</p>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 pt-1 md:pt-2">
                    {/* WhatsApp Button */}
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ROTO TANKS, I'm interested in the ${p.name} (${p.capacity} - ${p.price}). Can you provide more details and delivery information?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1 md:gap-2 py-2 md:py-3 px-2 md:px-4 bg-[#25D366] text-white font-bold uppercase text-[9px] md:text-xs tracking-widest hover:bg-[#20a856] transition-colors rounded-sm"
                    >
                      <MessageCircle className="size-3 md:size-4" strokeWidth={2.5} />
                      <span>WhatsApp</span>
                    </a>

                    {/* Call Now Button */}
                    <a
                      href={`tel:${CONTACT_PHONE_TEL}`}
                      className="w-full flex items-center justify-center gap-1 md:gap-2 py-2 md:py-3 px-2 md:px-4 bg-navy text-white font-bold uppercase text-[9px] md:text-xs tracking-widest hover:bg-navy-deep transition-colors rounded-sm"
                    >
                      <Phone className="size-3 md:size-4" strokeWidth={2.5} />
                      <span>Call</span>
                    </a>

                    {/* Quote Request Button */}
                    <Link
                      to="/contact"
                      className="w-full text-center py-2 px-2 md:px-4 border-2 border-gold text-gold font-bold uppercase text-[9px] md:text-xs tracking-widest hover:bg-gold hover:text-navy transition-colors rounded-sm"
                    >
                      Quote
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Empty State */}
      {filtered.length === 0 && (
        <section className="px-4 md:px-6 lg:px-10 py-16">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-slate-warm text-lg">No products found in this category.</p>
          </div>
        </section>
      )}
    </SiteLayout>
  );
}
