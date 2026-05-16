import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { products } from "@/lib/products";
import heroTank from "@/assets/hero-tank.jpg";
import { ArrowRight, Shield, Layers, Award, Truck } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ad1 from "@/assets/ad-1.jpg";
import ad2 from "@/assets/ad-2.jpg";
import ad3 from "@/assets/ad-3.jpg";
import ad4 from "@/assets/ad-4.jpg";
import ad5 from "@/assets/ad-5.jpg";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROTO TANKS — Premium Water Storage Tanks Kenya" },
      { name: "description", content: "Triple-layer HDPE water tanks, septic tanks and industrial storage. Built in Kenya. ISO 9001 certified. Nationwide delivery." },
      { property: "og:title", content: "ROTO TANKS — Premium Water Storage Tanks Kenya" },
      { property: "og:description", content: "Triple-layer HDPE storage tanks engineered for Kenya." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 4);
  const ads = [ad1, ad2, ad3, ad4, ad5];
  const autoplay = useRef(Autoplay({ delay: 3500, stopOnInteraction: false }));
  return (
    <SiteLayout>
      {/* Auto-sliding ad carousel */}
      <section className="bg-navy">
        <Carousel
          opts={{ loop: true, align: "start" }}
          plugins={[autoplay.current]}
          className="w-full"
        >
          <CarouselContent className="ml-0">
            {ads.map((src, i) => (
              <CarouselItem key={i} className="pl-0 basis-full">
                <div className="w-full h-[60vh] md:h-[78vh] bg-navy overflow-hidden flex items-center justify-center">
                  <img
                    src={src}
                    alt={`ROTO TANKS advertisement ${i + 1}`}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="w-full h-full object-contain object-center"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Hero */}
      <section className="relative grid lg:grid-cols-2 items-stretch border-b border-border">
        <div className="p-8 lg:p-20 flex flex-col justify-center animate-fade-up">
          <div className="inline-flex w-fit px-3 py-1 bg-gold/15 border border-gold/40 text-navy text-[10px] font-mono font-bold uppercase tracking-tight mb-8">
            Certified ISO 9001:2015 · Made in Kenya
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.9] uppercase mb-8">
            Built for<br />Resilience.
          </h1>
          <p className="max-w-md text-lg text-slate-warm leading-relaxed mb-10">
            Engineered with triple-layer HDPE technology — the gold standard in
            high-capacity liquid storage for agriculture, industry and home.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/products"
              className="bg-gold text-navy px-10 py-4 font-bold uppercase text-sm tracking-widest hover:-translate-y-0.5 transition-transform shadow-gold"
            >
              Explore Range
            </Link>
            <Link
              to="/contact"
              className="border-2 border-navy px-10 py-4 font-bold uppercase text-sm tracking-widest hover:bg-navy hover:text-white transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>

        <div className="relative bg-secondary min-h-[500px] lg:min-h-[700px] grid place-items-center p-8 lg:p-16 overflow-hidden">
          <img
            src={heroTank}
            alt="Premium ROTO TANKS vertical water tank on architectural pedestal"
            width={1024}
            height={1280}
            className="w-full max-w-md object-contain drop-shadow-2xl"
          />
          <div className="absolute bottom-8 right-8 lg:bottom-12 lg:right-12 bg-navy text-white p-6 space-y-4 shadow-card">
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gold uppercase tracking-widest">Capacity Max</div>
              <div className="text-3xl font-extrabold">10,000L</div>
            </div>
            <div className="h-px bg-white/15" />
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gold uppercase tracking-widest">Material Grade</div>
              <div className="text-xl font-bold">Ultra-V HDPE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Roto */}
      <section className="px-6 lg:px-10 py-24 bg-navy text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase">Why Roto?</h2>
              <p className="text-white/60 max-w-md">
                Over a decade of manufacturing excellence condensed into every vessel we mold.
              </p>
            </div>
            <div className="text-7xl lg:text-8xl font-black text-white/5 tracking-tighter hidden lg:block">
              EST. 2008
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: Layers, title: "Triple Layer", body: "Outer UV shield, structural middle, food-grade inner lining keep water cool and pure." },
              { icon: Shield, title: "Reinforced Ribbing", body: "Precision-engineered ribs prevent bulging and fatigue under maximum load." },
              { icon: Award, title: "Lifetime Warranty", body: "Industry-leading guarantee backed by our rotational molding process." },
              { icon: Truck, title: "Nationwide Delivery", body: "From Mombasa to Eldoret — fleet logistics handle your site delivery." },
            ].map((f) => (
              <div key={f.title} className="space-y-5">
                <div className="size-12 bg-gold grid place-items-center text-navy">
                  <f.icon className="size-5" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-16">
            <p className="text-xs font-mono font-bold text-gold uppercase tracking-[0.3em]">The Collection</p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter uppercase">
              Precision Storage Solutions
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featured.map((p) => (
              <Link
                key={p.id}
                to="/products"
                className="border border-border p-4 hover:border-gold transition-colors group block"
              >
                <div className="w-full aspect-square bg-secondary mb-6 grid place-items-center overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={768}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold uppercase text-sm tracking-tight">{p.name}</h4>
                    <p className="text-xs text-slate-warm/70 font-mono mt-1">{p.capacity}</p>
                  </div>
                  <ArrowRight className="size-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 border-2 border-navy px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition-colors"
            >
              View All Products <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 py-24 bg-gold text-navy">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter uppercase mb-6">
            Secure Your Water Supply
          </h2>
          <p className="text-lg md:text-xl text-navy/75 max-w-2xl mx-auto mb-10">
            Talk to our engineering team for custom industrial specifications, residential bulk orders, or installation guidance.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-navy text-white px-12 py-5 font-bold uppercase text-sm tracking-widest hover:bg-navy-deep transition-colors"
          >
            Get a Direct Quote
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
