const credentials = [
  {
    label: "Verizon OT/ICS Security",
    detail: "Cybersecurity Engineer III — managing security for 12,000+ network assets across enterprise infrastructure",
    icon: "🏛",
  },
  {
    label: "U.S. Army Cyber Warfare Officer",
    detail: "Red team operator, 1st IO Command. OIC for Cyber Flag 22-1 — the largest multinational cyber exercise ever run (200+ operators, 23 nations)",
    icon: "🎖",
  },
  {
    label: "Multi-Tenant Architecture",
    detail: "Your brand voice data is isolated in its own Qdrant namespace. API credentials managed via GCP Secret Manager. No client data commingles.",
    icon: "🔐",
  },
  {
    label: "CISM, CASP+, Security+, PEN-200",
    detail: "Certified Information Security Manager (ISACA), CompTIA CASP+, PEN-200/PWK (Offensive Security). Not a marketer who learned n8n.",
    icon: "📋",
  },
];

export default function Credibility() {
  return (
    <section className="py-24 bg-ca-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <span className="text-ca-electric text-sm font-semibold uppercase tracking-widest">Why We&apos;re Different</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
              Built by an engineer,<br />not an agency.
            </h2>
            <p className="mt-5 text-ca-muted leading-relaxed">
              Most &ldquo;AI automation agencies&rdquo; are marketers who learned n8n last year.
              CyberAutomations was built by someone who spent six years protecting
              critical infrastructure at Fortune 50 scale — where systems can&apos;t break,
              data can&apos;t mix, and there are no shortcuts.
            </p>
            <p className="mt-4 text-ca-muted leading-relaxed">
              That background means your content system is built with the same rigor
              as a telecom network: documented SOPs, isolated tenant architecture,
              monitoring, and a runbook for when things go wrong. Because they do.
              And when they do, we have a procedure — not a guess.
            </p>

            <div className="mt-8 p-5 rounded-xl border border-ca-electric/20 bg-ca-electric/5">
              <p className="text-ca-white font-medium mb-1">What this means for you:</p>
              <p className="text-ca-muted text-sm">
                You can explain to your team, your lawyer, or your business partner exactly
                how your content infrastructure is secured. Your brand voice data doesn&apos;t
                touch another client&apos;s system. Your credentials aren&apos;t in a spreadsheet.
                The system has a runbook. That&apos;s not standard in this space. It should be.
              </p>
            </div>
          </div>

          {/* Right — credential cards */}
          <div className="flex flex-col gap-4">
            {credentials.map((c) => (
              <div key={c.label} className="card-dark p-5 flex gap-4">
                <span className="text-2xl shrink-0">{c.icon}</span>
                <div>
                  <p className="font-semibold text-ca-white mb-1">{c.label}</p>
                  <p className="text-ca-muted text-sm leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}

            {/* Security badges row */}
            <div className="card-dark p-4 flex flex-wrap gap-2 mt-2">
              {["GCP Infrastructure", "Secret Manager", "Per-Client Isolation", "Documented SOPs", "Uptime Monitoring"].map((b) => (
                <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-ca-slate text-ca-muted border border-white/5">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
