const certs = ["CISM", "CASP+", "Security+", "AWS SAA", "PEN-200"];

const stats = [
  { value: "10+", label: "Years in enterprise security" },
  { value: "20+", label: "Production systems deployed" },
  { value: "5", label: "Industries served" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-ca-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="warm-card overflow-hidden">
          <div className="grid lg:grid-cols-[2fr_3fr]">
            {/* Left — photo + stats */}
            <div className="bg-ca-cream-mid p-8 lg:p-10 flex flex-col items-center justify-center gap-8 border-b lg:border-b-0 lg:border-r border-ca-border">
              {/* Photo placeholder */}
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-ca-white border-2 border-ca-border flex items-center justify-center">
                <svg className="w-16 h-16 text-ca-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 w-full">
                {stats.map((s) => (
                  <div key={s.label} className="text-center bg-ca-white rounded-xl p-3 border border-ca-border">
                    <div className="font-display text-xl font-bold text-ca-text">{s.value}</div>
                    <div className="text-[10px] text-ca-muted leading-tight mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — bio */}
            <div className="p-8 lg:p-10 space-y-5">
              <span className="section-label">Founder</span>

              <div className="mt-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ca-text">Teon Moore</h2>
                <p className="text-ca-accent text-sm font-semibold mt-1">Founder &amp; Lead Engineer</p>
              </div>

              <p className="text-ca-muted leading-relaxed">
                Enterprise infrastructure and cybersecurity engineer. Before CyberAutomations,
                I spent years designing and securing critical infrastructure across government
                and enterprise — systems that had no room for error. That standard is what
                every client deployment is held to.
              </p>

              <p className="text-ca-muted text-sm leading-relaxed">
                I bring that same engineering discipline to AI automation — designed for
                reliability, not just demos. Every system we ship comes with monitoring,
                a runbook, and an SLA.
              </p>

              {/* Certs */}
              <div className="flex flex-wrap gap-2 pt-1">
                {certs.map((c) => (
                  <span key={c} className="text-xs px-3 py-1.5 rounded-lg bg-ca-cream-mid border border-ca-border text-ca-muted font-mono font-medium">
                    {c}
                  </span>
                ))}
              </div>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/teondmoore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ca-muted hover:text-ca-accent transition-colors text-sm font-medium pt-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Connect on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
