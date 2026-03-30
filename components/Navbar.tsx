"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ca-navy/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-ca-electric font-bold text-lg tracking-tight">
            CYBR<span className="text-ca-white">AUTOMATIONS</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-ca-muted">
          <a href="#how-it-works" className="hover:text-ca-white transition-colors">How It Works</a>
          <a href="#services" className="hover:text-ca-white transition-colors">Services</a>
          <a href="#pricing" className="hover:text-ca-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-ca-white transition-colors">FAQ</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#audit"
            className="px-4 py-2 text-sm font-semibold text-ca-navy bg-ca-electric rounded-lg hover:brightness-110 transition-all"
          >
            Book Free Audit
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-ca-muted hover:text-ca-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-ca-charcoal border-t border-white/5 px-6 py-4 flex flex-col gap-4 text-sm">
          <a href="#how-it-works" className="text-ca-muted hover:text-ca-white" onClick={() => setOpen(false)}>How It Works</a>
          <a href="#services" className="text-ca-muted hover:text-ca-white" onClick={() => setOpen(false)}>Services</a>
          <a href="#pricing" className="text-ca-muted hover:text-ca-white" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#faq" className="text-ca-muted hover:text-ca-white" onClick={() => setOpen(false)}>FAQ</a>
          <a href="#audit" className="px-4 py-2 text-center font-semibold text-ca-navy bg-ca-electric rounded-lg" onClick={() => setOpen(false)}>
            Book Free Audit
          </a>
        </div>
      )}
    </nav>
  );
}
