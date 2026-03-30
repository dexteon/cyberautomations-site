import SpokespersonVideo from "./SpokespersonVideo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-ca-electric/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Copy */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 px-3 py-1.5 rounded-full border border-ca-electric/30 bg-ca-electric/5 text-ca-electric text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-ca-electric animate-pulse" />
              Managed AI Infrastructure for Creators
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              We Run Your{" "}
              <span className="text-gradient-electric">Content Department.</span>
            </h1>

            {/* Sub */}
            <p className="text-lg text-ca-muted leading-relaxed max-w-lg">
              One voice memo Monday morning. Twenty pieces of publication-ready
              content by afternoon. You review, we handle the rest.
            </p>

            {/* Social proof mini */}
            <p className="text-sm text-ca-muted/70 italic">
              Built on the same infrastructure principles used in Fortune 500 security operations.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="#audit"
                className="px-6 py-3.5 text-sm font-semibold text-ca-navy bg-ca-electric rounded-xl hover:brightness-110 transition-all text-center shadow-lg shadow-ca-electric/25"
              >
                Book a Free Content Audit →
              </a>
              <a
                href="#how-it-works"
                className="px-6 py-3.5 text-sm font-semibold text-ca-white border border-white/15 rounded-xl hover:border-white/30 hover:bg-white/5 transition-all text-center"
              >
                See How It Works
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex items-center gap-6 pt-2 text-xs text-ca-muted">
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-ca-mint" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                No long-term lock-in on Starter
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-ca-mint" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Live in 5 business days
              </div>
            </div>
          </div>

          {/* Right — Spokesperson Video */}
          <div className="flex justify-center lg:justify-end">
            <SpokespersonVideo
              scriptId="hero-intro"
              label="Watch: How It Works (60 sec)"
              aspectRatio="9/16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
