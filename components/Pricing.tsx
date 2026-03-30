const tiers = [
  {
    name: "Starter",
    price: "$997",
    period: "/mo",
    buildFee: "$1,500 setup",
    contract: "Month-to-month",
    description: "For creators ready to systematize content production without a long-term commitment.",
    features: [
      "10 pieces of content per week",
      "1 platform focus (YouTube + email OR Skool + social)",
      "Brand voice training on your content library",
      "Weekly delivery to Google Drive",
      "Compliance gate included",
      "Monthly ROI report",
    ],
    cta: "Start with Starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,497",
    period: "/mo",
    buildFee: "$2,000 setup",
    contract: "3-month minimum",
    description: "For creators scaling to $20K+/month who need all platforms covered and trend intelligence.",
    features: [
      "20 pieces of content per week",
      "All platforms (YouTube, Reels, Email, Community, Carousel)",
      "Trend Scout + Community Intel agents active",
      "Performance feedback loop",
      "Brand voice improves over time (Content Library)",
      "Monthly strategy call",
    ],
    cta: "Start Growing",
    highlight: true,
  },
  {
    name: "Full Stack",
    price: "$1,997",
    period: "/mo",
    buildFee: "$2,500 setup",
    contract: "6-month minimum",
    description: "For established educators doing $10K+/month who want the complete managed infrastructure.",
    features: [
      "Everything in Growth",
      "Video Distribution automation included",
      "Slack review workflow for team approvals",
      "Priority support (4-hour response)",
      "Quarterly brand voice retraining",
      "Dedicated account management",
    ],
    cta: "Go Full Stack",
    highlight: false,
  },
];

const addons = [
  { name: "Video Distribution", price: "+$400/mo", desc: "Multi-platform video publishing (add-on to any tier)" },
  { name: "Community Support Bot", price: "+$450/mo", desc: "White-label AI bot for Skool, Discord, or website" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-ca-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ca-electric text-sm font-semibold uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Transparent pricing. No surprises.
          </h2>
          <p className="mt-4 text-ca-muted max-w-xl mx-auto">
            Setup fee covers brand voice training, infrastructure build, and your first two
            live runs with QA. Monthly retainer covers everything after that.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-2xl p-7 border transition-all ${
                t.highlight
                  ? "bg-ca-electric/5 border-ca-electric/40 bg-electric-glow"
                  : "bg-ca-charcoal border-white/6 hover:border-white/12"
              }`}
            >
              {t.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-ca-electric text-ca-navy text-xs font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-5">
                <p className="text-ca-muted text-sm font-medium">{t.name}</p>
                <p className="mt-1">
                  <span className="text-4xl font-bold text-ca-white">{t.price}</span>
                  <span className="text-ca-muted">{t.period}</span>
                </p>
                <p className="text-ca-muted/60 text-xs mt-1">{t.buildFee} · {t.contract}</p>
              </div>

              <p className="text-ca-muted text-sm mb-5 leading-relaxed">{t.description}</p>

              <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ca-muted">
                    <svg className="w-4 h-4 text-ca-mint shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#audit"
                className={`w-full text-center py-3 rounded-xl text-sm font-semibold transition-all ${
                  t.highlight
                    ? "bg-ca-electric text-ca-navy hover:brightness-110"
                    : "border border-white/15 text-ca-white hover:border-white/30 hover:bg-white/5"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div className="mt-8 grid sm:grid-cols-2 gap-4">
          {addons.map((a) => (
            <div key={a.name} className="card-dark p-5 flex items-center gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-ca-white">{a.name}</p>
                  <span className="text-ca-electric font-bold text-sm">{a.price}</span>
                </div>
                <p className="text-ca-muted text-sm">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Annual discount note */}
        <p className="mt-6 text-center text-ca-muted text-sm">
          15% off with an annual commitment. Ask about annual pricing on your audit call.
        </p>
      </div>
    </section>
  );
}
