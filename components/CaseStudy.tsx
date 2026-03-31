import SpokespersonVideo from "./SpokespersonVideo";

// Update these once the Dub case study is complete (Week 8 of engagement)
const stats = [
  { before: "3–5", after: "20", unit: "pieces/week", label: "Content Output" },
  { before: "8 hrs", after: "5 min", unit: "per week", label: "Time Invested" },
  { before: "Sporadic", after: "Consistent", unit: "", label: "Posting Cadence" },
];

export default function CaseStudy() {
  return (
    <section className="py-24 bg-ca-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ca-electric text-sm font-semibold uppercase tracking-widest">Case Study</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            From sporadic to 20 pieces/week.<br />Without Dub writing a word.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div className="flex flex-col gap-6">
            {/* Client info */}
            <div className="card-dark p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-ca-electric/20 flex items-center justify-center text-ca-electric font-bold text-lg shrink-0">
                D
              </div>
              <div>
                <p className="font-semibold text-ca-white">Reinvented Consulting</p>
                <p className="text-ca-muted text-sm">9,100+ Skool members · Business Credit Education</p>
              </div>
              <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-ca-mint/10 text-ca-mint font-medium border border-ca-mint/20">
                Active Client
              </span>
            </div>

            {/* Before/After stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="card-dark p-4 text-center">
                  <p className="text-xs text-ca-muted uppercase tracking-wide mb-3">{s.label}</p>
                  <div className="space-y-1">
                    <p className="text-sm text-ca-muted line-through">{s.before}</p>
                    <p className="text-2xl font-bold text-ca-electric">{s.after}</p>
                    {s.unit && <p className="text-xs text-ca-muted">{s.unit}</p>}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="card-dark p-6 border-l-2 border-ca-electric">
              <p className="text-ca-white/80 italic leading-relaxed text-sm">
                &ldquo;Before CyberAutomations, I was spending half my week thinking about content
                and still posting inconsistently. Now I record a voice note Monday morning
                and the rest handles itself. My community is getting more from me, not less.&rdquo;
              </p>
              <footer className="mt-4 text-ca-muted text-xs">
                — Dub Washington, Reinvented Consulting
                <span className="ml-2 text-ca-muted/50">(results pending full 8-week run)</span>
              </footer>
            </blockquote>

            <a href="/apply" className="w-full text-center px-6 py-3 text-sm font-semibold text-ca-navy bg-ca-electric rounded-xl hover:brightness-110 transition-all">
              Get results like this →
            </a>
          </div>

          {/* Video */}
          <div className="flex justify-center">
            <SpokespersonVideo
              scriptId="case-study-proof"
              label="Dub's story (45 sec)"
              aspectRatio="9/16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
