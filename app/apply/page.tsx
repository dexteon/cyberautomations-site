"use client";
import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ApplyPage() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    website: "",
    what_you_do: "",
    what_to_automate: "",
    budget: "",
    source: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Submission failed");
      setState("success");
    } catch {
      setState("error");
    }
  };

  const inputClass =
    "w-full bg-ca-white border border-ca-border rounded-lg px-4 py-3 text-sm text-ca-text placeholder-ca-light focus:outline-none focus:border-ca-accent/50 focus:ring-2 focus:ring-ca-accent/10 transition-all";

  const labelClass = "block text-sm font-medium text-ca-text mb-1.5";

  return (
    <div className="min-h-screen py-20 px-6 bg-ca-cream">
      {/* Back link */}
      <div className="max-w-2xl mx-auto mb-8">
        <Link href="/" className="text-ca-muted hover:text-ca-text text-sm flex items-center gap-1.5 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-10 space-y-3">
          <span className="section-label">Application</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-ca-text mt-4">Apply to Work with Us</h1>
          <p className="text-ca-muted leading-relaxed">
            Fill this out and we&apos;ll research your business before our first call.
            No generic demos — we show up prepared.
          </p>
        </div>

        {state === "success" ? (
          <div className="warm-card p-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-xl bg-ca-accent-light flex items-center justify-center mx-auto">
              <svg className="w-7 h-7 text-ca-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <h2 className="text-xl font-display font-bold text-ca-text">Application Received</h2>
            <p className="text-ca-muted">
              We&apos;ll research your business and be in touch within 48 hours.
            </p>
            <Link href="/" className="inline-block text-ca-accent text-sm font-semibold hover:underline mt-4">
              Back to home →
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="warm-card p-8 space-y-6">
            {/* Row 1 */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full Name <span className="text-ca-accent">*</span>
                </label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-ca-accent">*</span>
                </label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="business" className={labelClass}>
                  Business Name <span className="text-ca-accent">*</span>
                </label>
                <input id="business" name="business" type="text" required value={form.business} onChange={handleChange} className={inputClass} placeholder="Acme Corp" />
              </div>
              <div>
                <label htmlFor="website" className={labelClass}>Website URL</label>
                <input id="website" name="website" type="url" value={form.website} onChange={handleChange} className={inputClass} placeholder="https://yoursite.com" />
              </div>
            </div>

            {/* What you do */}
            <div>
              <label htmlFor="what_you_do" className={labelClass}>
                What does your business do? <span className="text-ca-accent">*</span>
              </label>
              <textarea id="what_you_do" name="what_you_do" required rows={3} value={form.what_you_do} onChange={handleChange} className={inputClass} placeholder="We help X do Y by doing Z..." />
            </div>

            {/* What to automate */}
            <div>
              <label htmlFor="what_to_automate" className={labelClass}>
                What are you looking to automate? <span className="text-ca-accent">*</span>
              </label>
              <textarea id="what_to_automate" name="what_to_automate" required rows={3} value={form.what_to_automate} onChange={handleChange} className={inputClass} placeholder="We spend X hours/week on Y. We want to automate Z..." />
            </div>

            {/* Row 3 */}
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="budget" className={labelClass}>
                  Monthly Budget Range <span className="text-ca-accent">*</span>
                </label>
                <select id="budget" name="budget" required value={form.budget} onChange={handleChange} className={inputClass}>
                  <option value="" disabled>Select a range</option>
                  <option value="under-1000">Under $1,000/mo</option>
                  <option value="1000-2000">$1,000–$2,000/mo</option>
                  <option value="2000-3000">$2,000–$3,000/mo</option>
                  <option value="3000+">$3,000+/mo</option>
                </select>
              </div>
              <div>
                <label htmlFor="source" className={labelClass}>How did you hear about us?</label>
                <select id="source" name="source" value={form.source} onChange={handleChange} className={inputClass}>
                  <option value="">Select one</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="referral">Referral</option>
                  <option value="google">Google</option>
                  <option value="twitter">Twitter / X</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {state === "error" && (
              <p className="text-red-600 text-sm">
                Something went wrong. Please try again or email hello@cyberautomations.com directly.
              </p>
            )}

            <button
              type="submit"
              disabled={state === "submitting"}
              className="btn-accent w-full py-3.5 text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {state === "submitting" ? "Submitting..." : "Submit Application →"}
            </button>

            <p className="text-center text-xs text-ca-light">
              We review every application. Response within 48 hours.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
