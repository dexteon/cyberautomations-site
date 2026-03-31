"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  ["#services", "Services"],
  ["#pricing", "Pricing"],
  ["#portfolio", "Portfolio"],
  ["#about", "About"],
  ["#faq", "FAQ"],
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ca-cream/85 backdrop-blur-xl border-b border-ca-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-display text-sm font-bold tracking-widest uppercase text-ca-text"
            style={{ letterSpacing: "0.06em" }}
          >
            CYBER<span className="text-ca-accent">AUTOMATIONS</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ca-muted">
            {NAV_LINKS.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="hover:text-ca-text transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          <Link
            href="/apply"
            className="hidden md:inline-flex btn-accent px-5 py-2 text-sm"
          >
            Apply Now
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-ca-muted hover:text-ca-text transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <line x1="3" y1="6" x2="19" y2="6" />
              <line x1="3" y1="11" x2="19" y2="11" />
              <line x1="3" y1="16" x2="19" y2="16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Full-screen mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-ca-cream flex flex-col animate-fadeIn">
          {/* Close row */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-ca-border">
            <span
              className="font-display text-sm font-bold tracking-widest uppercase text-ca-text"
              style={{ letterSpacing: "0.06em" }}
            >
              CYBER<span className="text-ca-accent">AUTOMATIONS</span>
            </span>
            <button
              className="w-10 h-10 flex items-center justify-center text-ca-muted hover:text-ca-text transition-colors"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <line x1="4" y1="4" x2="18" y2="18" />
                <line x1="18" y1="4" x2="4" y2="18" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col flex-1 px-6 pt-10 gap-2">
            {NAV_LINKS.map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="font-display text-2xl font-bold text-ca-text py-3 border-b border-ca-border hover:text-ca-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="px-6 pb-12">
            <Link
              href="/apply"
              className="btn-accent w-full py-4 text-base flex items-center justify-center"
              onClick={() => setMenuOpen(false)}
            >
              Apply Now →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
