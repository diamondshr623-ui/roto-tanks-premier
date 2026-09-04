import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="text-2xl font-extrabold tracking-tighter mb-6">
            ROTO<span className="text-gold">TANKS</span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed max-w-xs">
            Kenya's trusted manufacturer of triple-layer polyethylene storage tanks for over a decade.
          </p>
        </div>
        <div>
          <h5 className="text-[10px] font-mono uppercase tracking-widest text-gold mb-6">Headquarters</h5>
          <p className="text-sm text-white/70 leading-loose">
            Mombasa Road<br />
            Industrial Area<br />
            Nairobi, Kenya
          </p>
        </div>
        <div>
          <h5 className="text-[10px] font-mono uppercase tracking-widest text-gold mb-6">Navigate</h5>
          <ul className="text-sm text-white/70 space-y-3">
            <li><Link to="/products" className="hover:text-gold">Products</Link></li>
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-[10px] font-mono uppercase tracking-widest text-gold mb-6">Sales Desk</h5>
          <p className="text-2xl font-extrabold text-gold mb-2">+254 750 379 893</p>
          <p className="text-sm text-white/60">sales@rototanks.co.ke</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-3 text-[10px] font-mono uppercase tracking-widest text-white/40">
          <span>© {new Date().getFullYear()} ROTO TANKS KENYA LTD.</span>
          <span>ISO 9001:2015 Certified Manufacturer</span>
        </div>
      </div>
    </footer>
  );
}
