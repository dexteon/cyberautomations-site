const services = [
  {
    name: "The Content Machine",
    tag: "Flagship",
    tagColor: "text-ca-electric bg-ca-electric/10 border-ca-electric/20",
    price: "From $997/mo",
    description:
      "Your full content production department, managed end-to-end. Voice memo in, 20 pieces out. Brand voice trained on your existing content library. Compliance gate for sensitive niches. Routes to every platform automatically.",
    features: [
      "9-agent AI pipeline (CrewAI + n8n)",
      "Brand voice training on your content library",
      "YouTube, Reels, Email, Community, Carousel formats",
      "Performance feedback loop — system improves weekly",
      "Compliance gate for financial/health/legal niches",
      "Direct routing to GHL, Buffer, Skool, Google Drive",
    ],
  },
  {
    name: "Video Distribution",
    tag: "Add-On",
    tagColor: "text-ca-muted bg-ca-muted/10 border-ca-muted/20",
    price: "From $400/mo",
    description:
      "Upload once. Publish everywhere. Long-form video processed into all aspect ratios, transcribed, captioned in English and Spanish, and distributed to every short-form platform within 24 hours of upload.",
    features: [
      "16:9, 9:16, and 1:1 format processing",
      "Whisper transcription + AI-generated captions",
      "English and Spanish caption generation",
      "Auto-publish to YouTube, Instagram, TikTok, X, Pinterest, Threads, Facebook",
      "A/B tested hook lines for Shorts/Reels",
      "24-hour delivery SLA",
    ],
  },
  {
    name: "Community Support Bot",
    tag: "Add-On",
    tagColor: "text-ca-muted bg-ca-muted/10 border-ca-muted/20",
    price: "From $450/mo",
    description:
      "A white-label AI assistant trained on your course content, community history, and FAQs. Deployed under your brand name. Handles 70–80% of repetitive community questions so you don't have to.",
    features: [
      "Trained on your course materials and community FAQs",
      "White-labeled under your brand name",
      "Deployed in Skool, Discord, or your website",
      "Voice-capable",
      "Escalates unresolved questions to you via Slack",
      "Monthly containment rate report",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-ca-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ca-electric text-sm font-semibold uppercase tracking-widest">What We Build</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Three systems. One infrastructure.
          </h2>
          <p className="mt-4 text-ca-muted max-w-xl mx-auto">
            Each product is designed to eliminate a specific bottleneck. Stack them to
            run your entire content operation on autopilot.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.name} className="card-dark p-6 flex flex-col gap-5 hover:border-white/10 transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <span className={`inline-block text-xs font-medium px-2.5 py-0.5 rounded-full border mb-3 ${s.tagColor}`}>
                    {s.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-ca-white">{s.name}</h3>
                  <p className="text-ca-electric font-semibold mt-1">{s.price}</p>
                </div>
              </div>

              <p className="text-ca-muted text-sm leading-relaxed">{s.description}</p>

              <ul className="flex flex-col gap-2.5 mt-auto">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ca-muted">
                    <svg className="w-4 h-4 text-ca-mint shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bundle callout */}
        <div className="mt-8 rounded-2xl border border-ca-electric/20 bg-ca-electric/5 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-ca-mint text-xs font-semibold uppercase tracking-widest">Best Value</span>
            <h3 className="text-xl font-bold text-ca-white mt-1">Full Creator OS</h3>
            <p className="text-ca-muted text-sm mt-1">All 3 systems. Complete content infrastructure. Save $347/month vs. individual pricing.</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-3xl font-bold text-ca-white">$2,500<span className="text-ca-muted text-base font-normal">/mo</span></p>
            <a href="#audit" className="mt-3 inline-block px-5 py-2.5 text-sm font-semibold text-ca-navy bg-ca-electric rounded-xl hover:brightness-110 transition-all">
              Get the Bundle →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
