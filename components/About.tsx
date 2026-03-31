const stats = [
  { value: "10+", label: "Years in enterprise tech" },
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
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-ca-white border border-ca-border flex items-center justify-center">
                <svg className="w-16 h-16 text-ca-light" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 w-full">
                {stats.map((s) => (
                  <div key={s.label} className="text-center bg-ca-white rounded-lg p-3 border border-ca-border">
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
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ca-text">The Founder</h2>
                <p className="text-ca-accent text-sm font-semibold mt-1">Founder &amp; Lead Engineer</p>
              </div>

              <p className="text-ca-muted leading-relaxed">
                Disciplined and trained across small business to enterprise multi-tenant
                environments. Over a decade of building, securing, and automating systems
                that have no room for error.
              </p>

              <p className="text-ca-muted text-sm leading-relaxed">
                That same engineering rigor is what every CyberAutomations deployment is
                built on — monitoring, runbooks, and SLAs included. Not just demos.
                Infrastructure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
