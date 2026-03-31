"use client";
import Link from "next/link";

// Pipeline node definitions
const NODES = [
  {
    label: "Your Content",
    sub: "You create it",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2a4 4 0 014 4v6a4 4 0 01-8 0V6a4 4 0 014-4z"/>
        <path d="M19 10a7 7 0 01-14 0"/>
        <line x1="12" y1="19" x2="12" y2="23"/>
        <line x1="8" y1="23" x2="16" y2="23"/>
      </svg>
    ),
  },
  {
    label: "Auto-Distribution",
    sub: "Multi-platform posting",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="18" cy="5" r="2"/>
        <circle cx="18" cy="19" r="2"/>
        <circle cx="6" cy="12" r="2"/>
        <line x1="8" y1="12" x2="16" y2="6"/>
        <line x1="8" y1="12" x2="16" y2="18"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>
    ),
  },
  {
    label: "Marketing Engine",
    sub: "Campaigns on autopilot",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    label: "Support Bot",
    sub: "24/7 customer service",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        <circle cx="12" cy="10" r="1" fill="currentColor"/>
        <circle cx="8" cy="10" r="1" fill="currentColor"/>
        <circle cx="16" cy="10" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Custom AI Agents",
    sub: "Built for your workflow",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="3"/>
        <circle cx="4" cy="7" r="2"/>
        <circle cx="20" cy="7" r="2"/>
        <circle cx="4" cy="17" r="2"/>
        <circle cx="20" cy="17" r="2"/>
        <line x1="6" y1="8" x2="10" y2="11"/>
        <line x1="18" y1="8" x2="14" y2="11"/>
        <line x1="6" y1="16" x2="10" y2="13"/>
        <line x1="18" y1="16" x2="14" y2="13"/>
      </svg>
    ),
  },
  {
    label: "Deep Research",
    sub: "Business intelligence",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <line x1="11" y1="8" x2="11" y2="14"/>
        <line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
];

const TICKER_ITEMS = [
  "Multi-platform distribution",
  "Custom AI agents",
  "24/7 AI customer support",
  "70% ticket reduction",
  "Automated marketing funnels",
  "Deep business research",
  "2–4 week deploy",
  "10+ hrs reclaimed weekly",
  "Enterprise-grade infrastructure",
];

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-ca-cream">
        {/* Warm gradient mesh background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(255,200,160,0.18) 0%, transparent 60%), " +
              "radial-gradient(ellipse 50% 50% at 20% 60%, rgba(255,92,53,0.06) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6 w-full py-20">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
            {/* ── Left column ── */}
            <div className="space-y-8">
              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {["For Creators & Educators", "Enterprise-Grade Systems", "2–4 Week Deploy"].map((b) => (
                  <span key={b} className="section-label">{b}</span>
                ))}
              </div>

              {/* Headline */}
              <h1 className="display-xl">
                We Automate Your{" "}
                <span className="text-ca-accent">Backend.</span>
              </h1>

              {/* Subhead */}
              <p className="text-ca-muted text-lg leading-relaxed max-w-md">
                You create the content. We build the AI systems that distribute it,
                run your marketing, handle customer service, and automate your backend
                — from custom agents to deep research.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <a href="#pricing">
                  <button className="btn-accent px-7 py-3.5 text-[15px]">
                    See Pricing →
                  </button>
                </a>
                <Link href="/apply">
                  <button className="btn-outline px-7 py-3.5 text-[15px]">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>

            {/* ── Right column — Pipeline diagram ── */}
            <div className="warm-card p-6 lg:p-8 shadow-sm">
              {/* Card label */}
              <p className="text-xs font-semibold text-ca-light uppercase tracking-widest mb-6">
                Your automation stack
              </p>

              {/* Pipeline nodes row */}
              <div className="flex items-center gap-0">
                {NODES.map((node, i) => (
                  <div key={node.label} className="flex items-center flex-1 last:flex-none">
                    {/* Node */}
                    <div className="flex flex-col items-center gap-2 min-w-0">
                      <div
                        className="w-12 h-12 rounded-xl border border-ca-border bg-ca-cream flex items-center justify-center text-ca-accent pipeline-node-pulse shrink-0"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      >
                        {node.icon}
                      </div>
                      <div className="text-center hidden lg:block">
                        <p className="text-[10px] font-semibold text-ca-text leading-tight whitespace-nowrap">{node.label}</p>
                        <p className="text-[9px] text-ca-light mt-0.5 whitespace-nowrap">{node.sub}</p>
                      </div>
                    </div>

                    {/* Connector */}
                    {i < NODES.length - 1 && (
                      <div
                        className={`pipeline-connector pipeline-connector-${i + 1} mx-1`}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile labels */}
              <div className="lg:hidden mt-4 flex flex-wrap gap-1 justify-center">
                {NODES.map((n, i) => (
                  <span key={n.label} className="text-[10px] text-ca-muted">
                    {n.label}{i < NODES.length - 1 ? " →" : ""}
                  </span>
                ))}
              </div>

              {/* Output stats */}
              <div className="mt-6 pt-5 border-t border-ca-border grid grid-cols-3 gap-4">
                {[
                  { v: "6+", u: "platforms" },
                  { v: "24/7", u: "AI support" },
                  { v: "2–4 wk", u: "deploy" },
                ].map(({ v, u }) => (
                  <div key={u} className="text-center">
                    <div className="font-display text-2xl font-bold text-ca-accent">{v}</div>
                    <div className="text-xs text-ca-muted mt-0.5">{u}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ticker strip ── */}
      <div className="bg-ca-accent overflow-hidden py-3.5" aria-hidden="true">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-6 text-white text-sm font-medium">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
