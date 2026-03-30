# CyberAutomations — AI Spokesperson Scripts

**Format:** Written for HeyGen / Synthesia delivery. Each script includes:
- Delivery notes (pace, tone, gestures)
- On-screen text overlays (show while speaking)
- B-roll / screen recording suggestions

**General voice direction:**
- Calm, confident, not salesy. Infrastructure engineer energy, not hype marketer.
- Slight forward lean when making key points.
- Eye contact with camera throughout. No looking away.
- Pace: measured. Not rushed. Let key numbers land.
- Wardrobe: Clean, dark background. Minimal branding (small logo lower-third).

---

## Script 1 — Hero Intro (60 seconds)
**Placement:** Hero section, right side of screen
**Purpose:** Establish credibility + get the viewer to scroll

---

[DELIVERY: calm, direct, slight forward lean]

"If you're a creator or educator doing five to fifty thousand dollars a month —

[OVERLAY: "$5K–$50K/month"]

you already know what the problem is.

You have ideas. You know your audience. But content takes ten hours a week you don't have.

[OVERLAY: "10 hours/week → 5 minutes/week"]

We built something to fix that.

CyberAutomations runs your content department. You send a voice memo Monday morning. By Monday afternoon, you have twenty pieces of publication-ready content — YouTube scripts, Reels, emails, community posts, everything.

[OVERLAY: "20 pieces. 5 minutes of your time."]

Written in your voice. Routed to your platforms automatically.

I'm a cybersecurity engineer by background. Six years protecting critical infrastructure at Verizon. This isn't an agency that learned n8n last year.

[OVERLAY: "Built like infrastructure. Not like an agency."]

This is a system with documentation, isolation, and a runbook.

Scroll down to see exactly how it works. Or book a free audit right now.

[OVERLAY: "↓ See how it works" + "→ Book Free Audit"]

No pitch. Just a conversation."

---

**Script 1 — Production Notes:**
- B-roll: Animated content pipeline graphic (voice memo → 20 pieces flowing out)
- Lower-third: "Teon Moore | CyberAutomations" for first 5 seconds
- End frame: Logo + "cyberautomations.com"
- Aspect ratio: 9:16 (vertical, for embed in hero)

---

## Script 2 — How It Works Walkthrough (90 seconds)
**Placement:** "How It Works" section
**Purpose:** Concrete product demo — reduce skepticism

---

[DELIVERY: slightly faster pace, gestures on each step]

"Let me show you exactly what happens when you become a client.

[OVERLAY: "STEP 1: RECORD — 5 minutes"]

Monday morning, you record a five-minute voice memo. Your topic for the week. Any offers you're running. Anything you want your community to know. That's your entire content meeting.

[OVERLAY: "STEP 2: REVIEW — 15 minutes"]

By Monday afternoon, your Google Drive has twenty pieces ready.

[OVERLAY: "2 YouTube Scripts · 6 Reels Scripts · 3 Emails · 5 Community Posts · 4 Carousel Outlines"]

All written in your voice. Not generic AI output — your voice. We trained the system on your ten to twenty best-performing pieces. Your frameworks, your vocabulary, your structure.

You spend fifteen minutes reviewing. Approve what you like. Request changes on what you don't.

[OVERLAY: "STEP 3: PUBLISH — 0 minutes from you"]

Approved content routes automatically. GHL, Buffer, Skool, wherever your audience lives. It goes live on schedule. You don't touch a scheduler.

[OVERLAY: "Your weekly time: 20 minutes total"]

That's it. Twenty pieces of content. Twenty minutes of your time.

[OVERLAY: "vs. 8–10 hours the manual way"]

The system gets better every week. It pulls your engagement data — what performed, what didn't — and adjusts topic selection and format weighting automatically.

[OVERLAY: "Performance feedback loop built in"]

Ready to see it in action? Book the free audit."

---

**Script 2 — Production Notes:**
- B-roll: Screen recording of Google Drive delivery folder opening with 20 files
- Screen recording of n8n workflow animation (optional — abstract is fine)
- Overlay animations timed to speech beats
- Aspect ratio: 9:16

---

## Script 3 — Case Study / Social Proof (45 seconds)
**Placement:** Case Study section
**Purpose:** Named proof, reduce "this sounds too good" skepticism

---

[DELIVERY: conversational, slightly slower — building trust]

"Here's what it looked like for our first client.

[OVERLAY: "Reinvented Consulting — 9,100+ Skool members"]

Dub runs a business credit education community. Nine thousand one hundred members. He was posting three to five times a week — inconsistently — and spending most of that time in production.

[OVERLAY: "Before: 3–5 pieces/week · 8 hrs/week on content"]

Now he records one voice memo Monday morning.

[OVERLAY: "After: 20 pieces/week · 5 min/week from Dub"]

Same voice. Same frameworks. Same results his audience expects. None of the production work.

And here's what matters — this isn't AI slop distributed across his channels. His community hasn't noticed a change in quality. They've noticed more consistency.

[OVERLAY: "More consistent. Less work. Same voice."]

That's what the system is designed to do.

Your audit starts with a gap analysis of your specific setup. Book it below."

---

**Script 3 — Production Notes:**
- B-roll: Skool community screenshot (blurred/stylized if needed for privacy)
- Consider: short testimonial clip from Dub himself once Week 8 data is available
- Aspect ratio: 9:16

---

## Script 4 — Final CTA Close (30 seconds)
**Placement:** Final CTA section, left side
**Purpose:** Remove last friction, drive the booking

---

[DELIVERY: direct, unhurried, looking straight at camera]

"If you watched this far, you already know whether this is for you.

The audit is free. Thirty minutes. We look at your setup specifically — not a generic pitch.

[OVERLAY: "Free · 30 min · No commitment"]

We'll show you what a Content Machine would produce for your niche. Your platforms. Your audience.

If it fits, we'll tell you exactly what it looks like and what it costs. If it doesn't, we'll tell you that too.

[OVERLAY: "3 audit slots per week"]

Three slots available each week. Book yours now."

[End with: direct eye contact, slight nod]

---

**Script 4 — Production Notes:**
- No B-roll — pure spokesperson to camera, builds trust at close
- End frame: Logo + Calendly link QR code
- Aspect ratio: 9:16

---

## Embedding into the Site

Once videos are generated in HeyGen or Synthesia:

1. Get the embed URL for each video
2. Open `components/Hero.tsx`, `HowItWorks.tsx`, `CaseStudy.tsx`, `FinalCTA.tsx`
3. Find the `<SpokespersonVideo>` component in each file
4. Add the `embedUrl` prop with the video URL:

```tsx
<SpokespersonVideo
  scriptId="hero-intro"
  label="Watch: How It Works (60 sec)"
  embedUrl="https://app.heygen.com/share/your-video-id"
  aspectRatio="9/16"
/>
```

The placeholder component will automatically switch from the placeholder view to the embedded video once `embedUrl` is populated.

---

## Future Videos (when ready)

| Script ID | Section | Length | Status |
|-----------|---------|--------|--------|
| `hero-intro` | Hero | 60 sec | Script ready — generate when model is ready |
| `how-it-works-walkthrough` | How It Works | 90 sec | Script ready |
| `case-study-proof` | Case Study | 45 sec | Script ready — wait for Week 8 Dub data |
| `final-cta-close` | Final CTA | 30 sec | Script ready |

**Recommended production order:** Script 4 first (shortest, easiest to iterate), then 1, then 2, then 3 (needs real data).
