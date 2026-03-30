const pains = [
  {
    icon: "⏱",
    headline: "Content takes 5–10 hours a week you don't have.",
    body: "You know what to say. Writing, filming, editing, scheduling, formatting for six platforms — that's where the time goes. By the time you're done, you've spent half your week on production, not your actual work.",
  },
  {
    icon: "🤖",
    headline: "Generic AI tools don't write in your voice.",
    body: "ChatGPT outputs content that sounds like everyone else. Your audience follows you for a reason. A tool that doesn't know your frameworks, your stories, or the way you explain things will always sound generic.",
  },
  {
    icon: "🔁",
    headline: "Your community asks the same questions every day.",
    body: "\"How do I access the course?\" \"What's the refund policy?\" \"Can you explain X again?\" Every answer takes 5 minutes. At 2,000+ members, that's hours a week handling questions a system could answer in 30 seconds.",
  },
  {
    icon: "💸",
    headline: "You can't afford a full content team. Yet.",
    body: "Hiring in-house costs $8K–$15K/month and months of onboarding. Agencies charge $3K–$20K/month for generic deliverables. CyberAutomations gives you the output of a full team at a fraction of the cost.",
  },
];

export default function ProblemSection() {
  return (
    <section className="py-24 bg-ca-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ca-electric text-sm font-semibold uppercase tracking-widest">The Bottleneck</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-ca-white">
            You&apos;re not out of ideas.<br />You&apos;re out of time.
          </h2>
          <p className="mt-4 text-ca-muted max-w-xl mx-auto">
            Creators at the $5K–$50K/month level all hit the same wall. Content production becomes
            the thing that caps growth — not the offer, not the audience, not the market.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {pains.map((p) => (
            <div key={p.headline} className="card-dark p-6 flex gap-4">
              <span className="text-2xl shrink-0 mt-1">{p.icon}</span>
              <div>
                <h3 className="font-semibold text-ca-white mb-2">{p.headline}</h3>
                <p className="text-ca-muted text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
