import SpokespersonVideo from "./SpokespersonVideo";

const steps = [
  {
    number: "01",
    title: "Record",
    time: "5 minutes",
    description:
      "Every Monday morning, send a voice memo with your topic, any news or offers, and anything you want your audience to know that week. That's your entire content meeting.",
  },
  {
    number: "02",
    title: "Review",
    time: "15 minutes",
    description:
      "By Monday afternoon, your Google Drive has 20 pieces ready — YouTube scripts, Reels scripts, emails, community posts, carousel outlines. All written in your voice. You review, request changes, or approve.",
  },
  {
    number: "03",
    title: "Publish",
    time: "0 minutes",
    description:
      "Approved content automatically routes to GHL, Buffer, Skool, or wherever your audience lives. It goes live on schedule. You don't touch a scheduler.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-ca-navy">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-ca-electric text-sm font-semibold uppercase tracking-widest">The System</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
            You talk. We build. Content goes live.
          </h2>
          <p className="mt-4 text-ca-muted max-w-xl mx-auto">
            Your total weekly time investment: one voice memo. We handle transcription,
            ideation, writing, formatting, brand voice QA, and routing to every platform.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <div key={step.number} className="flex gap-5">
                {/* Connector */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-ca-electric/10 border border-ca-electric/30 flex items-center justify-center text-ca-electric text-sm font-bold shrink-0">
                    {step.number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 mt-2 bg-ca-electric/15" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-ca-white text-lg">{step.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-ca-mint/10 text-ca-mint font-medium">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-ca-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}

            {/* Weekly output summary */}
            <div className="card-dark p-5 mt-2">
              <p className="text-xs text-ca-muted uppercase tracking-widest mb-3 font-medium">
                What you get each week
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                {[
                  ["2", "YouTube Scripts"],
                  ["6", "Reels Scripts"],
                  ["3", "Emails"],
                  ["5", "Community Posts"],
                  ["4", "Carousel Outlines"],
                  ["20", "Total Pieces"],
                ].map(([n, label]) => (
                  <div key={label} className="flex flex-col">
                    <span className={`text-2xl font-bold ${label === "Total Pieces" ? "text-ca-electric" : "text-ca-white"}`}>{n}</span>
                    <span className="text-ca-muted text-xs">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Spokesperson Video */}
          <div className="flex justify-center">
            <SpokespersonVideo
              scriptId="how-it-works-walkthrough"
              label="Watch: Product walkthrough (90 sec)"
              aspectRatio="9/16"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
