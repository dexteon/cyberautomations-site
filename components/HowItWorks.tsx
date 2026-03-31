const steps = [
  {
    num: "01",
    title: "Apply",
    desc: "Fill out the 2-minute intake form. Tell us what you do, what you want automated, and your budget.",
    outcome: "You hear back within 48 hours.",
  },
  {
    num: "02",
    title: "Discovery",
    desc: "We research your business, map your existing tools and workflows, then schedule a strategy call to align on scope.",
    outcome: "Scope and timeline locked.",
  },
  {
    num: "03",
    title: "Build",
    desc: "We architect and deploy your AI systems in 2–4 weeks. You stay updated on progress. No technical knowledge required.",
    outcome: "Systems go live.",
  },
  {
    num: "04",
    title: "Manage",
    desc: "Ongoing monitoring, optimization, bug fixes, and feature updates. Plus regular strategy calls depending on your tier.",
    outcome: "You focus on your business.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-ca-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <span className="section-label">Process</span>
          <h2 className="display-lg mt-4">Four Steps. Four Weeks.</h2>
          <p className="text-ca-muted max-w-lg mx-auto">
            From first conversation to live AI infrastructure in under a month.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Steps row */}
          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Large background number */}
                <span className="absolute -top-4 left-0 font-display text-[80px] font-800 text-ca-border/60 leading-none select-none" aria-hidden="true">
                  {step.num}
                </span>

                <div className="relative pt-16 space-y-3">
                  <h3 className="font-display text-xl font-bold text-ca-text">{step.title}</h3>
                  <p className="text-sm text-ca-muted leading-relaxed">{step.desc}</p>
                  <p className="text-sm font-semibold text-ca-accent">{step.outcome}</p>
                </div>

                {/* Connector line (between steps) */}
                {i < steps.length - 1 && (
                  <div className="absolute top-[72px] -right-4 w-8 h-0.5" aria-hidden="true">
                    <div className="w-full h-full border-t-2 border-dashed border-ca-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical cards */}
        <div className="lg:hidden space-y-4">
          {steps.map((step) => (
            <div key={step.num} className="warm-card p-6 flex gap-5">
              <span className="font-display text-3xl font-800 text-ca-accent/30 leading-none shrink-0 pt-1">
                {step.num}
              </span>
              <div className="space-y-2">
                <h3 className="font-display text-lg font-bold text-ca-text">{step.title}</h3>
                <p className="text-sm text-ca-muted leading-relaxed">{step.desc}</p>
                <p className="text-sm font-semibold text-ca-accent">{step.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
