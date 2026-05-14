import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-tighter">
          ROTO<span className="text-gold">TANKS</span>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-xs font-bold uppercase tracking-widest">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: l.to === "/" }}
              className="hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          to="/contact"
          className="hidden md:inline-flex bg-navy text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-navy-deep transition-colors"
        >
          Get Quote
        </Link>
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-4 text-sm font-bold uppercase tracking-widest">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="bg-navy text-white px-6 py-3 text-center">
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
