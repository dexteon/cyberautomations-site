const projects = [
  {
    tag: "Content Automation",
    tagClass: "text-ca-accent",
    client: "Reinvented Consulting",
    industry: "Business Education · United States",
    summary:
      "Automated a full weekly content operation — from a single 5-minute voice input to 20 publication-ready pieces distributed across every channel by afternoon.",
    workflow: ["Voice memo ingested", "Topics & angles extracted", "5-format content generated", "Brand voice validated", "Compliance reviewed", "6-platform distribution"],
    metrics: [
      { value: "20 pieces", label: "every Monday" },
      { value: "10+ hrs", label: "reclaimed weekly" },
      { value: "9,100+", label: "community members" },
    ],
  },
  {
    tag: "Privacy Automation",
    tagClass: "text-violet-600",
    client: "The Meridian Group",
    industry: "Executive Consulting · Washington D.C.",
    summary:
      "Built an always-on data broker monitoring and removal system for a firm of high-profile professionals with public-facing exposure.",
    workflow: ["100+ brokers scanned", "Exposures flagged", "Opt-out requests submitted", "Removal verified", "Re-check scheduled", "Report delivered"],
    metrics: [
      { value: "95%+", label: "removal rate" },
      { value: "Continuous", label: "re-monitoring" },
      { value: "Full", label: "audit trail" },
    ],
  },
  {
    tag: "Operations Intelligence",
    tagClass: "text-rose-600",
    client: "Atlantic Industrial",
    industry: "Critical Infrastructure · East Coast",
    summary:
      "Designed and deployed a unified asset intelligence platform consolidating 7 disparate data sources into a single, queryable view of operational security posture.",
    workflow: ["7 sources ingested", "Devices discovered", "Risk correlated", "Compliance scored", "Alerts auto-routed", "Report generated"],
    metrics: [
      { value: "12,000+", label: "assets tracked" },
      { value: "80%", label: "less manual work" },
      { value: "Real-time", label: "visibility" },
    ],
  },
  {
    tag: "Community Automation",
    tagClass: "text-amber-600",
    client: "Pathwright Academy",
    industry: "Online Education · Remote",
    summary:
      "Deployed an AI-powered support system managing a 6,000-member learning community around the clock — without additional headcount.",
    workflow: ["Query received", "Intent classified", "Knowledge base searched", "Response sent", "Unresolved → escalated", "Metrics reported"],
    metrics: [
      { value: "70%", label: "ticket reduction" },
      { value: "<2 min", label: "avg response" },
      { value: "+34%", label: "satisfaction" },
    ],
  },
  {
    tag: "Lead Automation",
    tagClass: "text-emerald-600",
    client: "Apex Realty Partners",
    industry: "Real Estate · Southeast US",
    summary:
      "Built an intelligent lead qualification and follow-up system that automated the entire top-of-funnel — from capture to booked call.",
    workflow: ["Lead captured", "AI qualification", "Data enrichment", "Sequences triggered", "CRM updated", "Pipeline reported"],
    metrics: [
      { value: "3x", label: "discovery calls" },
      { value: "48h→<2h", label: "response time" },
      { value: "$2.1M", label: "pipeline" },
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-ca-cream-mid">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <span className="section-label">Portfolio</span>
          <h2 className="display-lg mt-4">What We&apos;ve Built</h2>
          <p className="text-ca-muted max-w-xl mx-auto">
            Production deployments across content, privacy, operations, community, and revenue automation.
          </p>
        </div>

        {/* Alternating editorial cards */}
        <div className="space-y-6">
          {projects.map((p, i) => (
            <div key={p.client} className={`warm-card overflow-hidden ${i % 2 === 0 ? "" : ""}`}>
              <div className={`flex flex-col lg:flex-row ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                {/* Metrics side */}
                <div className="lg:w-[38%] bg-ca-cream-mid p-7 lg:p-9 flex flex-col justify-center gap-5 border-b lg:border-b-0 border-ca-border">
                  <span className={`tag-pill self-start text-[10px] ${p.tagClass} bg-white/80`}>{p.tag}</span>

                  <div className="grid grid-cols-3 gap-4">
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display text-xl lg:text-2xl font-bold text-ca-text">{m.value}</div>
                        <div className="text-[11px] text-ca-muted mt-0.5 leading-tight">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:w-[62%] p-7 lg:p-9 space-y-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ca-text">{p.client}</h3>
                    <p className="text-xs text-ca-light mt-1">{p.industry}</p>
                  </div>

                  <p className="text-sm text-ca-muted leading-relaxed">{p.summary}</p>

                  {/* Workflow pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {p.workflow.map((step, j) => (
                      <span key={step} className="flex items-center gap-1.5">
                        <span className="text-[11px] bg-ca-cream-mid border border-ca-border px-2.5 py-1 rounded-full text-ca-muted whitespace-nowrap">
                          {step}
                        </span>
                        {j < p.workflow.length - 1 && (
                          <span className="text-ca-accent/40 text-xs">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
