import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ca-cream-footer border-t border-ca-border py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + tagline */}
          <div className="space-y-3 sm:col-span-2 lg:col-span-1">
            <p
              className="font-display text-sm font-bold tracking-widest uppercase text-ca-text"
              style={{ letterSpacing: "0.12em" }}
            >
              CYBER<span className="text-ca-accent">AUTOMATIONS</span>
            </p>
            <p className="text-sm text-ca-muted max-w-[260px] leading-relaxed">
              AI systems built and managed for businesses that want to run leaner and scale faster.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-2.5 text-sm">
            <p className="text-xs uppercase tracking-widest font-semibold text-ca-light mb-1">Navigation</p>
            <a href="#services" className="text-ca-muted hover:text-ca-text transition-colors">Services</a>
            <a href="#pricing" className="text-ca-muted hover:text-ca-text transition-colors">Pricing</a>
            <a href="#portfolio" className="text-ca-muted hover:text-ca-text transition-colors">Portfolio</a>
            <a href="#about" className="text-ca-muted hover:text-ca-text transition-colors">About</a>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2.5 text-sm">
            <p className="text-xs uppercase tracking-widest font-semibold text-ca-light mb-1">Company</p>
            <Link href="/apply" className="text-ca-muted hover:text-ca-text transition-colors">Apply</Link>
            <a href="#faq" className="text-ca-muted hover:text-ca-text transition-colors">FAQ</a>
            <a href="mailto:teonmoore@gmail.com" className="text-ca-muted hover:text-ca-text transition-colors">Contact</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-2.5 text-sm">
            <p className="text-xs uppercase tracking-widest font-semibold text-ca-light mb-1">Legal</p>
            <p className="text-ca-muted">CyberAutomations LLC</p>
            <p className="text-ca-muted">Virginia</p>
          </div>
        </div>

        <div className="divider-warm my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ca-light">
          <p>&copy; {new Date().getFullYear()} CyberAutomations LLC. All rights reserved.</p>
          <p>Powered by AI. Built by humans.</p>
        </div>
      </div>
    </footer>
  );
}
