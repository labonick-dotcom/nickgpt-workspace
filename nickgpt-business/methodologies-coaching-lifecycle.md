# Methodology: 1:1 Coaching Client Lifecycle

> Summary: The complete UYSP 1:1 AI coaching workflow as usable documentation — the offering, the five-stage workflow (booking → intake → session → post-session → build/delivery), data collection by client type, margin management, the connector recommendations, and the seven reusable client email templates with voice rules.

## The Offering

UYSP members (Gold, Platinum, Silver) book a 1-hour AI strategy session through UYSP's booking system. Client pays **$1,000**; revenue split 50/50 ($500 Nick, $500 UYSP). Capacity: **15 hours/month max.**

Every coaching client receives: full pre-session intake processing (AI Audit + Intake Form + LinkedIn); a 60-minute live AI strategy session via Zoom; a custom Claude project or ChatGPT setup built after the session; an interactive project dashboard (JSX); a starter-kit PDF; a strategic insights brief (3-5 patterns); a 5-day quickstart card; a 15-20 minute walkthrough call; and 7-day and 30-day check-ins. The free custom build is what makes the $1,000 feel like a steal and generates referrals/upsells. **Do not cut scope on the build.**

## The Five-Stage Workflow

### Stage 1: Booking and Auto-Send
On booking via UYSP Calendly: confirmation email auto-sends with two documents — (1) the **AI Audit Prompt** (client copies into their AI platform, sends output to Nick), (2) the **Pre-Session Intake Form** (8 questions). Nick gets the booking notification and creates `Coaching Clients/[Last-Name]-[First-Name]/` with subdirectories `intake/`, `prep-briefs/`, `session-transcripts/`, `build-specs/`, `follow-ups/`. Nick sends a personalized onboarding email (Template 1) differentiating the two docs and setting the 48-hour-before-session deadline.

Client-facing documents (live URLs):
- AI Audit Prompt: https://docs.google.com/document/d/1WK5rMLeVY2Lk9vfxgEFx3yWUgwOic04upV_hTavuX2A/edit
- Pre-Session Intake Form (8 questions): https://docs.google.com/document/d/1gT9Ywop-pskdc2GPHC4D5g1Qcr96w8RjlzMKzfZyWCw/edit

### Stage 2: Intake Processing (24-48 hours before)
Nick collects three inputs: AI Audit Output, **LinkedIn Analysis** (Nick runs via Claude Chrome — open profile, scroll the whole thing, paste the LinkedIn Chrome Analysis Prompt from the coaching-prep skill, save output to `intake/`), and Intake Form Answers. Then he drops all materials in NickGPT and says "Build the coaching prep brief for [Client Name]."

The **coaching-prep skill** generates a full prep brief: client snapshot; AI maturity classification (Tier 1-4); who they are/how they think/how they learn; the real problem (stated goal vs actual need, mismatches flagged); strengths; knowledge gaps; customized 60-minute session arc; custom project pre-scope; data collection checklist; coaching approach notes; power moves; The One Thing; Coaching Priority Summary (top 3 ranked). Nick reviews in 5 minutes.

### Stage 3: The Session (60 minutes)
Default arc: 0-5 open with a specific intake reference + calibrate; 5-20 diagnose live, validate prep brief, identify highest-impact build; 20-45 build/demonstrate live using the client's real accounts and deals; 45-55 walk through custom project scope, confirm what gets built; 55-60 confirm next steps, delivery timeline, one action this week. Fathom records the call. Pre-session technical checklist: Fathom running, Claude open, ChatGPT in second tab, prep brief reviewed, backup platform ready. **Every demonstration uses the client's real data — generic demos do not land at $1,000/hour.** Working session, not a lecture.

Tier-specific session approaches: Tier 1 lead with demonstration, create "aha," starter project; Tier 2 show custom instructions, demo one workflow with their data; Tier 3 build a connected workflow live, show system design; Tier 4 audit existing setup, optimize, introduce new capabilities.

### Stage 4: Post-Session Processing (within 24 hours)
Process the Fathom transcript and produce: (1) follow-up email (Template 2) — references specific moments, confirms scope, lists 3-5 materials needed, sets delivery timeline, one action this week; (2) custom project build spec (internal, for Nick or Daniel); (3) client record update (date, tier, project status, rebook/referral signals).

### Stage 5: Project Build and Delivery
Once client materials received (3-5 business days typical): Nick or Daniel builds the project, tests every starter prompt, schedules a 15-20 min walkthrough, delivers via screen share (runs 2-3 prompts live, walks context files, shows day-to-day usage), adds 7-day and 30-day check-ins to calendar. Build time by tier: Tier 1-2 = 2-3 hrs; Tier 3 = 3-5 hrs; Tier 4 = 5-8 hrs (flag as NickGPT implementation client). Check-ins: 7-day ("Have you used the project this week? Anything not working?"), 30-day ("What prompts are you using most? Want to go deeper?" + rebook/referral hooks).

## Data Collection by Client Type (keep to 3-5 items)

- **Every client:** 3-5 real emails for voice calibration, top 10 accounts, AI platform login confirmed.
- **Enterprise sellers (primary):** territory/account list, ICP definition, one current meeting-prep example, CRM screenshot, sales methodology, comp plan structure.
- **Sales managers:** all above + team roster, 1:1 structure, team performance data, forecast methodology.
- **Coaches:** client roster, sample session notes, coaching methodology, call-recording setup.
- **BDR/SDR:** prospecting sequences, target account list, cadence/volume, call scripts, booking metrics.

## Margin Management

Track effective hourly rate across the full engagement (Nick's $500 per session, not per hour of total work). Tier 1-2 ~$90-$110/hr (4.5-5.5 hrs); Tier 3 ~$65-$77/hr (6.5-7.5 hrs); Tier 4 ~$48-$65/hr (7.5-10.5 hrs). After every build, save reusable components to a templates folder. A Tier 2 enterprise seller project should be a 1.5-hour build by client 10.

## Key Process Improvements (from Brad)

- Project instructions carry all routing weight; conversation starters stay 1-3 lines, no file names or output structure.
- "Update project" only sees the current chat thread; recommended workflow is one running thread per active account during the week, "update project" in each on Friday.
- **Claude Max ($100/month)** recommended for all project users (projects load ~22,000 words / ~30,000 tokens every interaction; Pro throttles within days).

## Connector Recommendations for Coaching Clients

- **Gmail** (high value): draft/send follow-ups without leaving Claude.
- **Google Calendar** (medium): "What meetings do I have tomorrow" auto-triggers prep briefs.
- **Google Drive** (medium): access deal documents.
- **Fathom** (if applicable): auto-feed transcripts if the client uses Fathom instead of Plaud.
- Caveat: many enterprise sellers are transitioning email/calendar platforms (e.g. GSuite → MS365 due to IBM acquisition); ask about timeline first.

## Client Email Templates (7) — Nick's Voice

1. **New Coaching Client Onboarding** (within 24h of booking) — Subject: "Before Our Session: Two Things I Need From You." Differentiates the two docs (intake form to fill out vs AI audit to copy-paste); "If you have never used an AI tool before, skip the audit"; "Send both back to me at least 48 hours before our session"; sets the working-session expectation; build included.
2. **Post-Session Follow-Up** (within 24h, after Fathom) — Subject: "Your AI Strategy Session: Next Steps." Open with a specific session moment (not "Great session today"); WHAT WE BUILT/COVERED; YOUR CUSTOM PROJECT BUILD with components; 3-5 specific data items needed; WHAT TO DO THIS WEEK.
3. **Materials Reminder** (48-72h before, if no pre-work) — Subject: "Quick reminder before our session [Day]."
4. **7-Day Satisfaction Check-In** — Subject: "Quick check on your AI setup."
5. **30-Day Check-In** (rebook + referral hook) — Subject: "How is your AI system working?"
6. **No-Show Follow-Up** (within 2h) — Subject: "Missed our session today."
7. **Project Delivery and Walkthrough Scheduling** — Subject: "Your AI project is ready."

**Voice rules for all client emails:** short sentences, no fluff; specific references not generic; no "it was great connecting"/"I enjoyed our conversation"; no "please do not hesitate to reach out"; no "I hope this email finds you well"; no "certainly"/"great question"; no em dashes (commas, periods, parentheses); sound like someone who did the work and knows what comes next; always end with just **"Nick"** (not "Best, Nick" or "Thanks, Nick").

---
*Source: 08_1on1_Coaching_Playbook.md, 09_Client_Communication_Templates.md, 14_Service_Model_and_Pricing.md*
