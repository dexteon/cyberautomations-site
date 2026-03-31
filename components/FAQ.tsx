"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What kind of businesses do you work with?",
    a: "We work with solopreneurs, consultants, small-medium businesses, and enterprise teams. If you have repetitive processes, content needs, or data workflows — we can automate them.",
  },
  {
    q: "How long does it take to build?",
    a: "Most projects are delivered in 2–4 weeks. Complex enterprise builds may take 4–8 weeks. We provide a timeline during the discovery call so there are no surprises.",
  },
  {
    q: "Do I need to be technical?",
    a: "Not at all. We handle everything from architecture to deployment. You tell us what you need done in plain language — we handle the engineering.",
  },
  {
    q: "What's included in managed services?",
    a: "Monitoring, optimization, bug fixes, feature updates, and regular strategy calls depending on your tier. You don't manage any tools or troubleshoot any pipelines.",
  },
  {
    q: "Can I start with one service and add more later?",
    a: "Absolutely. Many clients start with a single workflow automation and expand as they see ROI. Each service is modular and designed to stack.",
  },
  {
    q: "How is this different from hiring a freelancer?",
    a: "A freelancer delivers and leaves. We architect, deploy, and maintain. There's a runbook, monitoring, and an SLA — not just a handoff. You get infrastructure, not a project.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-ca-cream">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14 space-y-3">
          <span className="section-label">FAQ</span>
          <h2 className="display-lg mt-4">Common Questions</h2>
        </div>

        <div className="warm-card divide-y divide-ca-border overflow-hidden">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left group"
              >
                <span className={`font-medium text-[15px] leading-relaxed transition-colors ${
                  open === i ? "text-ca-text" : "text-ca-muted group-hover:text-ca-text"
                }`}>
                  {f.q}
                </span>
                <span className={`shrink-0 mt-1 transition-transform duration-200 ${
                  open === i ? "rotate-180 text-ca-accent" : "text-ca-light"
                }`}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 7l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 animate-accordionOpen">
                  <p className="text-ca-muted text-sm leading-relaxed">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
