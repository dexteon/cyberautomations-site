"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What does 'managed' actually mean?",
    a: "You send a voice memo once a week. We handle transcription, research, writing, brand voice QA, compliance review, and routing to your platforms. You review the output and approve or request changes. That's it. You don't manage tools, fix broken workflows, or wonder why something didn't post. We do.",
  },
  {
    q: "What if the content doesn't sound like me?",
    a: "We train on 10–20 of your best-performing pieces before going live. Your brand voice is encoded in Qdrant — the way you structure arguments, the phrases you use, the tone you take. If approval rates drop below 85% for two consecutive weeks, we do a brand voice retraining session. In practice, clients tell us it sounds more consistent than content they write themselves.",
  },
  {
    q: "How is this different from just using ChatGPT?",
    a: "ChatGPT doesn't know your voice, your frameworks, your audience, or what worked for you last month. It doesn't route content to your platforms. It doesn't have a compliance gate for financial claims. It doesn't improve based on your engagement data. And it doesn't run while you sleep. What we build is a production system, not a writing prompt.",
  },
  {
    q: "What happens if a platform's API breaks or changes?",
    a: "We monitor all platform integrations with uptime alerts. If an API changes, we handle the update — you'll receive a notification with the timeline. This is the difference between infrastructure and a freelancer: there's a runbook, not a guess.",
  },
  {
    q: "I'm in the financial education / credit niche. Is this safe?",
    a: "Yes — and this is specifically designed for your niche. Every piece of content passes through a Compliance Gate agent that flags personalized financial advice, specific return guarantees, and FTC-triggerable language before delivery. You review and approve everything before it goes live. We also log all AI-generated output with timestamps for your records.",
  },
  {
    q: "How long does setup take?",
    a: "5 business days from signed contract + setup fee received. Day 1: intake and credentials. Day 2: content audit. Days 3–4: build and calibration run. Day 5: live first run and walkthrough call.",
  },
  {
    q: "What if I want to cancel?",
    a: "Starter tier: 30 days written notice, no penalties. Growth tier: 3-month minimum, then 30-day notice. Full Stack: 6-month minimum, then 30-day notice. Setup fees are non-refundable — they cover real labor to build and configure your system.",
  },
  {
    q: "Do you work with clients outside the US?",
    a: "Yes. We work with creators in the US, Canada, UK, and Caribbean markets. The Video Distribution product can geo-target specific regions including PR and USVI. Our team operates on EST timezone.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-ca-charcoal">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-ca-electric text-sm font-semibold uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            Questions we get every time.
          </h2>
        </div>

        <div className="flex flex-col divide-y divide-white/5">
          {faqs.map((f, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-5 flex items-start justify-between gap-4 text-left hover:text-ca-white transition-colors"
              >
                <span className={`font-medium text-sm leading-relaxed ${open === i ? "text-ca-white" : "text-ca-white/80"}`}>
                  {f.q}
                </span>
                <span className={`text-ca-muted shrink-0 mt-0.5 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              {open === i && (
                <p className="pb-5 text-ca-muted text-sm leading-relaxed">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
