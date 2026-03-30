import SpokespersonVideo from "./SpokespersonVideo";

export default function FinalCTA() {
  return (
    <section id="audit" className="py-28 bg-ca-navy relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-ca-electric/6 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Spokesperson close video */}
          <div className="flex justify-center order-2 lg:order-1">
            <SpokespersonVideo
              scriptId="final-cta-close"
              label="Book your audit (30 sec)"
              aspectRatio="9/16"
            />
          </div>

          {/* Right — CTA form */}
          <div className="order-1 lg:order-2">
            <span className="text-ca-electric text-sm font-semibold uppercase tracking-widest">Free Content Audit</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold leading-tight">
              Ready to stop being<br />the bottleneck?
            </h2>
            <p className="mt-5 text-ca-muted leading-relaxed">
              Book a free 30-minute Content Audit. We&apos;ll analyze your current content
              output, identify the exact gaps a Content Machine would fill for your
              specific setup, and show you what 20 pieces/week would look like for you.
            </p>
            <p className="mt-3 text-ca-muted text-sm">
              No pitch. No hard sell. If it&apos;s a fit, we&apos;ll show you. If it&apos;s not,
              we&apos;ll tell you that too.
            </p>

            {/* What you get in the audit */}
            <ul className="mt-6 flex flex-col gap-2.5">
              {[
                "30-minute 1:1 call with the founder",
                "Custom content gap analysis for your channels",
                "A sample week of content output for your niche",
                "Honest recommendation: is a Content Machine right for you?",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ca-muted">
                  <svg className="w-4 h-4 text-ca-mint shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA Button — replace href with Calendly link */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="https://calendly.com/cyberautomations"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 text-base font-bold text-ca-navy bg-ca-electric rounded-xl hover:brightness-110 transition-all text-center shadow-xl shadow-ca-electric/20"
              >
                Book My Free Content Audit →
              </a>
            </div>

            <p className="mt-4 text-xs text-ca-muted/60">
              Limited to 3 audit slots per week. No commitment required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
