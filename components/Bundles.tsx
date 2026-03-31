const tiers = [
  {
    name: "Starter",
    price: "$997",
    cadence: "/mo",
    contract: "Month-to-month",
    tag: null,
    features: [
      "Full multi-platform distribution pipeline",
      "Brand voice training on your content library",
      "Platform routing to your key channels",
      "Email support",
      "Cancel anytime",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,497",
    cadence: "/mo",
    contract: "3-month minimum",
    tag: "Most Popular",
    features: [
      "Everything in Starter",
      "Full multi-platform routing",
      "Compliance gate for regulated niches",
      "Weekly performance report",
      "Bi-weekly strategy call",
      "Priority Slack support",
      "A/B tested hook variants",
    ],
    highlight: true,
  },
  {
    name: "Full Stack",
    price: "$1,997",
    cadence: "/mo",
    contract: "6-month minimum",
    tag: null,
    features: [
      "Everything in Growth",
      "Monthly brand voice retraining",
      "Quarterly system roadmap",
      "Dedicated Slack channel",
      "Custom integrations included",
      "White-glove onboarding",
      "Platform migration support",
      "Expansion priority for add-ons",
      "Annual business review",
    ],
    highlight: false,
  },
];

const addons = [
  { name: "Video Distribution", desc: "Upload once, publish to 7 platforms within 24 hours." },
  { name: "Community Support Bot", desc: "White-label AI assistant trained on your content." },
  { name: "Creator Data Shield", desc: "Automated data broker removal + compliance reporting." },
];

function CheckIcon({ highlight }: { highlight?: boolean }) {
  return (
    <svg
      className={`w-4 h-4 shrink-0 mt-0.5 ${highlight ? "text-ca-accent" : "text-ca-accent/50"}`}
      fill="currentColor" viewBox="0 0 20 20"
    >
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
    </svg>
  );
}

export default function Bundles() {
  return (
    <section id="pricing" className="py-20 bg-ca-cream-mid">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <span className="section-label">Pricing</span>
          <h2 className="display-lg mt-4">Automation Tiers</h2>
          <p className="text-ca-muted max-w-xl mx-auto">
            Every tier includes full distribution, support automation, and managed infrastructure.
            Higher tiers unlock expanded reporting, strategy, and custom integrations.
          </p>
        </div>

        {/* Tier cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`warm-card p-7 flex flex-col space-y-6 relative ${
                t.highlight
                  ? "border-t-2 border-t-ca-accent shadow-lg shadow-orange-500/8 md:scale-[1.02] z-10"
                  : ""
              }`}
            >
              {t.tag && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="section-label text-[10px] px-3 py-1">{t.tag}</span>
                </div>
              )}

              <div className="space-y-1.5 pt-1">
                <h3 className="font-display font-bold text-ca-text text-lg">{t.name}</h3>
                <div>
                  <span className="font-display text-3xl font-bold text-ca-text">{t.price}</span>
                  <span className="text-ca-muted text-sm">{t.cadence}</span>
                </div>
                <p className="text-xs text-ca-light">{t.contract}</p>
              </div>

              <ul className="flex-1 space-y-2.5">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ca-muted">
                    <CheckIcon highlight={t.highlight} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-ca-border">
                <a href="/apply">
                  <button
                    className={`w-full py-3 text-sm font-semibold rounded-lg transition-all ${
                      t.highlight ? "btn-accent" : "btn-outline"
                    }`}
                  >
                    Get Started →
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Annual badge */}
        <div className="text-center mt-6">
          <span className="inline-flex items-center gap-2 text-sm text-ca-accent font-semibold bg-ca-accent-light border border-ca-accent/20 rounded-lg px-4 py-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/>
              <circle cx="12" cy="12" r="9"/>
            </svg>
            15% off annual contracts
          </span>
        </div>

        {/* Add-ons */}
        <div className="mt-14 space-y-5">
          <h3 className="text-xs font-semibold text-ca-light uppercase tracking-widest text-center">
            Add-Ons — Stack on any tier
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {addons.map((a) => (
              <div key={a.name} className="warm-card p-5 space-y-1.5">
                <p className="font-display font-semibold text-sm text-ca-text">{a.name}</p>
                <p className="text-xs text-ca-muted">{a.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-ca-muted">
            Bundle multiple products and save.{" "}
            <a href="/apply" className="text-ca-accent hover:underline font-medium">
              Apply to discuss add-ons and bundle pricing.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
