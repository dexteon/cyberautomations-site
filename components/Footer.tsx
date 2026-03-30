export default function Footer() {
  return (
    <footer className="bg-ca-charcoal border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="text-ca-electric font-bold text-base tracking-tight">
              CYBR<span className="text-ca-white">AUTOMATIONS</span>
            </p>
            <p className="text-ca-muted text-sm mt-1 max-w-xs">
              Managed AI infrastructure for creators and educators.
            </p>
            <p className="text-ca-muted/60 text-xs mt-2">
              CyberAutomations LLC · EIN 93-4366410 · Virginia
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 text-sm text-ca-muted">
            <div className="flex flex-col gap-2">
              <p className="text-ca-white/60 text-xs uppercase tracking-wide font-medium mb-1">Services</p>
              <a href="#how-it-works" className="hover:text-ca-white transition-colors">How It Works</a>
              <a href="#services" className="hover:text-ca-white transition-colors">Content Machine</a>
              <a href="#services" className="hover:text-ca-white transition-colors">Video Distribution</a>
              <a href="#services" className="hover:text-ca-white transition-colors">Support Bot</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-ca-white/60 text-xs uppercase tracking-wide font-medium mb-1">Company</p>
              <a href="#pricing" className="hover:text-ca-white transition-colors">Pricing</a>
              <a href="#faq" className="hover:text-ca-white transition-colors">FAQ</a>
              <a href="#audit" className="hover:text-ca-white transition-colors">Book Audit</a>
              <a href="mailto:hello@cyberautomations.com" className="hover:text-ca-white transition-colors">Contact</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ca-muted/60">
          <p>© {new Date().getFullYear()} CyberAutomations LLC. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-ca-muted transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-ca-muted transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
