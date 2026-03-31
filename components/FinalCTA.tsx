import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-ca-accent relative overflow-hidden">
      {/* Subtle mesh overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-2xl mx-auto px-6 text-center space-y-7">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
          Ready to Automate?
        </h2>

        <p className="text-white/85 text-lg leading-relaxed">
          Apply below and we&apos;ll research your business before our first call.
          No generic demos — we come prepared with your specific use cases mapped out.
        </p>

        <div className="pt-2">
          <Link href="/apply">
            <button className="bg-white text-ca-accent font-bold px-8 py-4 text-base rounded-lg transition-all hover:shadow-xl hover:shadow-black/10 hover:-translate-y-0.5">
              Apply Now →
            </button>
          </Link>
        </div>

        <p className="text-white/50 text-xs">
          We review every application. Response within 48 hours.
        </p>
      </div>
    </section>
  );
}
