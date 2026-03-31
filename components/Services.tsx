const creatorProducts = [
  {
    tag: "Flagship",
    tagClass: "text-ca-accent bg-ca-accent-light border-ca-accent/30",
    title: "Distribution Engine",
    desc: "You create the content. We route it everywhere — formatted, scheduled, and published across all your platforms automatically.",
    features: [
      "Auto-format and distribute across 6+ platforms",
      "Brand voice trained on your existing content library",
      "Compliance gate for financial / health / legal niches",
      "Routes to GHL, Buffer, Skool, Google Drive",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
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
    tag: "Add-On",
    tagClass: "text-ca-muted bg-ca-cream-mid border-ca-border",
    title: "Video Distribution",
    desc: "Upload once, publish everywhere. FFmpeg processing, Whisper transcription, Claude-generated captions. 7 platforms, 24-hour SLA.",
    features: [
      "All aspect ratios (16:9, 9:16, 1:1)",
      "Whisper transcription + bilingual captions",
      "7-platform auto-publish within 24 hours",
      "A/B tested hook lines for Shorts and Reels",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    ),
  },
  {
    tag: "Add-On",
    tagClass: "text-ca-muted bg-ca-cream-mid border-ca-border",
    title: "Community Support Bot",
    desc: "White-label AI assistant deployed under your brand. Trained on your courses and FAQs. 70–80% containment rate.",
    features: [
      "Trained on your courses, FAQs, and support history",
      "White-labeled under your brand name",
      "Deployed in Skool, Discord, or your website",
      "Monthly containment rate report",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        <circle cx="12" cy="10" r="1" fill="currentColor"/>
        <circle cx="8" cy="10" r="1" fill="currentColor"/>
        <circle cx="16" cy="10" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    tag: "New",
    tagClass: "text-ca-accent bg-ca-accent-light border-ca-accent/30",
    title: "Creator Data Shield",
    desc: "Automated personal data removal across 100+ data broker sites. Starting at $15/mo per person, +$5/mo per additional family member. Built for public-facing creators.",
    features: [
      "Automated removal across 100+ data brokers",
      "Scheduled re-checks and re-submissions",
      "Personal + business entity coverage",
      "CDPA-compliant removal reports",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.32C17.25 22.15 21 17.25 21 12V7l-9-5z"/>
        <path d="M9 12l2 2 4-4"/>
      </svg>
    ),
  },
];

function CheckIcon({ accent }: { accent?: boolean }) {
  return (
    <svg className={`w-4 h-4 shrink-0 mt-0.5 ${accent ? "text-ca-accent" : "text-ca-accent/60"}`} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 bg-ca-cream">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <span className="section-label">What We Build</span>
          <h2 className="display-lg mt-4">Four Systems. One Infrastructure.</h2>
          <p className="text-ca-muted max-w-xl mx-auto text-base">
            Distribution, customer service, privacy protection, and custom AI tools —
            built and managed so you can focus on your business.
          </p>
        </div>

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {creatorProducts.map((s) => (
            <div key={s.title} className="warm-card warm-card-hover p-7 flex flex-col space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-ca-accent-light text-ca-accent flex items-center justify-center">
                  {s.icon}
                </div>
                <span className={`tag-pill text-[10px] ${s.tagClass}`}>
                  {s.tag}
                </span>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-ca-text">{s.title}</h3>
                <p className="text-ca-muted text-sm leading-relaxed mt-2">{s.desc}</p>
              </div>

              <ul className="flex-1 space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ca-muted">
                    <CheckIcon accent={s.tag === "Flagship" || s.tag === "New"} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-ca-border">
                <a href={s.tag === "Flagship" ? "#pricing" : "/apply"} className="text-sm font-semibold text-ca-accent hover:underline">
                  {s.tag === "Flagship" ? "See Pricing →" : "Apply to get pricing →"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom callout strip */}
        <div className="mt-8 warm-card-subtle p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-display font-semibold text-ca-text">Need something custom?</p>
            <p className="text-ca-muted text-sm mt-0.5">
              We also build custom AI agents, deep research systems, and backend automation tools.
            </p>
          </div>
          <a href="/apply" className="shrink-0">
            <button className="btn-outline px-5 py-2.5 text-sm">
              Custom Scope →
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
