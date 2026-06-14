# Larry Helms / Astelia — Strategic Brief
**Prepared for Nick Labo | Thursday Meeting Prep | June 2026**

---

## 1. COMPANY SNAPSHOT

**Astelia**
- **Founded:** Late 2024, out of Team8's Venture Creation model
- **Out of stealth:** February 24, 2026
- **HQ:** New York, R&D in Israel
- **Employees:** ~30 today, scaling to 60-70 by end of 2026
- **Total raise:** $35M (Seed $10M + Series A $25M announced together)
- **Investors:** Team8 (led seed, built the company), Index Ventures (led Series A), Holly Ventures (both rounds)
- **Founders:** Alon Noy (CEO), Nadav Ostrovsky (CTO), Roy Rajwan (CPO) — all from Israel's National Red Team / Unit 8200

**What they sell:** AI-native exposure management. Traditional vulnerability scanners produce millions of "risks" and bury security teams in noise. Astelia uses agentic AI to map actual network architecture and isolate the tiny fraction that are genuinely reachable and exploitable.

**Their headline proof point:** 3 million vulnerabilities scanned → ~30 that actually mattered.

**Tagline:** "Vulnerability Management is broken. Fix what matters."

---

## 2. WHO LARRY IS

- **Role:** GTM / Sales leadership — standing up Astelia's US sales motion from scratch
- **Context:** Joined less than 6 months in, building the team with fresh Series A capital
- **Why he reached out:** Wants AI training for the sales team at their Vegas QBR in August
- **The real opportunity:** He's not just buying a speaking slot. He's building a team and needs a repeatable system for how they sell.

**Your email sent:** Clean, short, no pitch. Showed you understood the moment. Asked for a call next week.

---

## 3. THE COMPETITIVE BATTLEFIELD

The exposure management market is **$2.2B in 2024, projected $7.6B by 2029 (28% CAGR).**

### Incumbents Astelia's team walks into every deal against:

| Competitor | Threat Level | Their Play |
|---|---|---|
| **Tenable** | Highest | Installed in most enterprise accounts, just launched "Hexa AI" agentic engine + Anthropic/Claude partnership (May 2026). "We do AI now too." |
| **Palo Alto Cortex Xpanse** | High | Bundled into platform deals. "You already own PANW? Xpanse is basically included." |
| **CrowdStrike Falcon** | High | Platform consolidation play, same "we do everything" motion |
| **Qualys / Rapid7** | Medium | Legacy scanners adding AI noise. Astelia explicitly names these as displacement targets. |
| **Wiz** | Medium | Cloud-specific, not a direct overlap but competes for same budget |
| **XM Cyber / Cymulate** | Medium | Israeli attack-path specialists, most direct technical competitors |

**Astelia's own positioning explicitly names Rapid7 and Tenable as the incumbents they're displacing.** Palo Alto is the harder objection to handle because they're already in accounts via firewall/NGFW relationships.

---

## 4. PALO ALTO COMPETITIVE PLAYBOOK

### How Palo Alto sells (their weapon)

**Platformization.** PANW's entire GTM for the last 2 years has been consolidation: "drop 3-4 point solutions, buy our platform, we'll give you Cortex Xpanse bundled in at a discount." If a prospect already has PANW NGFWs or Prisma, they will hear "we already handle exposure management." That's the kill shot Astelia reps face in every deal where Palo Alto is entrenched.

**By the numbers:**
- PANW reports $4.52B in Next-Gen Security ARR
- Cortex XSIAM alone has $1B+ ARR
- 125% Net Revenue Retention — their customers keep buying more
- $1M+ deals grew 13% YoY — they're moving upmarket and consolidating spend

### Palo Alto's Real Weaknesses (exploitable in the field)

**1. Cortex Xpanse is a bolt-on, not a purpose-built product**
Xpanse was acquired in 2020 (from a company called Expanse) and stitched into the Cortex platform. It does asset inventory and passive scanning. It is NOT an exploitability engine. Independent analysis (GigaOm 2026 Radar, CyCognito competitor teardown) confirms:
- Xpanse requires seed data and customer input — it doesn't do autonomous discovery
- Xpanse relies primarily on passive scanning, missing web apps, APIs, cloud instances
- Xpanse active testing only covers ~100 CVEs and requires scheduling
- Asset business context must be added manually
- Cannot show risk at subsidiary or regional level

**Astelia counter:** "Cortex Xpanse tells you what's exposed. We tell you what's exploitable. That's a completely different product."

**2. Platform fatigue is real and documented**
PANW's own Q2 FY24 guidance cut was attributed in part to "customer spending fatigue" on the platformization push. Their sales motion requires restructuring how the entire security budget is bought — more stakeholders, longer cycles, procurement complexity. That's a CFO and procurement problem, not just a CISO conversation.

**Astelia counter:** "You don't need to restructure anything to buy us. We sit alongside your Palo Alto stack, we don't replace it. Your CISO can get this approved without touching the platform deal."

**3. Their own salesforce can't articulate AI value**
From PANW's own SWOT analysis: *"Sales team lacks deep expertise in articulating AI value props. Current sales processes are not optimized with AI-driven insights."* PANW is selling AI features their own reps don't fully understand. That creates real openings.

**Astelia counter:** When a Palo Alto rep says "we have AI-powered exposure management" — ask them to show you. Ask them to run a live demo in your environment. They'll struggle. Astelia's 48-hour POC is the closer.

**4. Complexity creates long deal cycles**
PANW portfolio breadth creates confusion. Enterprise buyers have learned that buying Palo Alto means a long procurement process, many stakeholders, and a complex contract. Mid-market and fast-moving enterprise buyers are fatigued.

**Astelia counter:** Position as surgical. "We're not asking you to restructure your security stack. We're asking for 48 hours to show you something your current tools can't."

**5. The "we do that too" reversal (the field play)**
When prospects say "Palo Alto already does this," don't argue features. Say:
*"When did they last show you the specific 5 vulnerabilities in your environment that are reachable from the internet right now? We'll show you in 48 hours. If we can't beat what you're seeing from Cortex Xpanse, we'll tell you."*

Make it a proof-of-concept challenge. Palo Alto can't match Astelia's POC speed because Xpanse isn't built for this.

---

## 5. TENABLE-SPECIFIC INTEL (bonus — they'll hear this constantly too)

Tenable just launched "Hexa AI" with an Anthropic/Claude partnership (announced May 2026). Every prospect is going to hear "Tenable has AI now too."

The counter: Tenable bolted AI onto a 25-year-old vulnerability scanner. The data model, the architecture, the way it ingests and scores findings — all of it is legacy infrastructure with an AI layer on top. Astelia was designed from scratch, by people who spent careers breaking into systems, to answer one question: *which of these millions of findings can an attacker actually use today?* That's not an AI feature. That's a different architecture.

---

## 6. WHAT NICK BRINGS TO LARRY'S TEAM

### The core pitch

You're not there to teach them software features. You're there to give a challenger team the unfair advantage that incumbents can't match: AI-powered sales execution at the rep level.

Specific outcomes you can deliver:

**A. Prospecting at scale against entrenched incumbents**
- AI-researched account lists: identify every company with PANW or Tenable as primary vulnerability management — these are Astelia's best targets
- Personalized outreach at volume: give each rep an AI system that writes CISO-specific messaging at scale, referencing the exact incumbent they're displacing
- Signal monitoring: news, leadership changes, budget cycles, M&A — the triggers that open deals

**B. Real-time objection handling tools**
- Build a custom Claude project loaded with Astelia's competitive positioning, product differentiators, and POC playbook
- Reps query it live in calls: "prospect says Palo Alto already does this — what do I say?"
- Beats any internal playbook because it's interactive, searchable, and always current

**C. Meeting prep automation**
- Pre-call research brief built in minutes: CISO background, recent company news, security stack, tech debt signals, LinkedIn intel
- Proposal generation framework: custom POV decks mapped to each account's pain
- Follow-up drafting: email sequences, next-step summaries, CRM updates — all AI-assisted

**D. Deal coaching system**
- Build a "deal intelligence" Claude project per rep: all their accounts, discovery notes, stakeholder maps, next actions
- The system tells reps what to do next based on where each deal is
- Eliminates the "I don't know what to do in this account" paralysis that stalls deals

**E. Onboarding acceleration**
- New reps at a 4-month-old company have no institutional playbook to learn from
- AI system encodes the best practices as they develop — every win, every objection, every POC outcome
- 30 days vs. 90 days to productivity

---

## 7. PITCH IDEAS FOR THURSDAY

### Leading options (pick 2-3 to bring up)

**Option 1: The QBR + Retainer play**
"I'll do the Vegas session as the entry point. But what I'd actually pitch is a 90-day engagement after the QBR: build the systems, train the reps, then stay as an advisor while they ramp. The QBR plants the flag, the retainer is where we actually do the work."

**Option 2: The Playbook Build**
"I build Astelia's AI Sales Playbook — competitive intelligence, objection handling, prospecting system, deal coaching — as a single deliverable. Then I train the team to run it. That becomes your unfair advantage before the first rep even hits quota."

**Option 3: Rep-Level AI Stack**
"Every rep at Astelia gets a custom Claude project with their accounts, your competitive positioning, and a deal coaching framework built in. I build the template, I train the team, and I stay available for 90 days as you scale. The ROI is one extra deal closed in the first quarter."

**Option 4: The Land-and-Expand with Daniel**
"If Daniel is already connected to Larry or Astelia, this becomes a joint engagement — Nick handles the AI sales training, Daniel handles the OpenClaw infrastructure. One engagement turns into an ongoing platform relationship."

### Lines that will land in the meeting

- "Your reps are walking into rooms where the CISO already owns Tenable and has a Palo Alto relationship. The only way to win those rooms is to be sharper, faster, and more prepared than the rep who's been calling on that account for 3 years. That's exactly what AI gives you."

- "Tenable just announced their own agentic AI. Palo Alto bundles exposure management into their platform deal. Your differentiation story is strong but your reps are going to get 'we do that too' in every conversation. I help them cut through that without starting a features debate."

- "You're building this team right now. The habits, the systems, the playbook they learn in the first 90 days are what they'll run with for the next 3 years. This is the highest-leverage window to get it right."

---

## 8. WHAT FLYING TO VEGAS IS WORTH

### Market rates (2026 verified):

| Engagement Type | Rate |
|---|---|
| AI keynote / QBR speaking slot | $5,000–$25,000 (established specialist tier) |
| Private group AI training day | $10,000–$25,000 (group up to 15) |
| AI sales training half-day workshop | $5,000–$15,000 |
| AI consultant day rate (senior independent) | $1,500–$3,000/day |
| AI consultant retainer (ongoing advisory) | $3,000–$10,000/month |

### What to charge Larry

**The floor for a Vegas QBR speaking engagement + workshop:** $10,000–$15,000 flat fee plus travel. This is the Tier 2 established specialist rate, which is where you sit with UYSP credibility + Resident AI Strategist title.

**The ceiling if this becomes a full engagement:** $25,000 for the QBR + a 90-day retainer at $5,000–$7,500/month. That's $40,000–$50,000 in the first 120 days for a 30-person funded startup. Totally reasonable for a Series A company that just raised $35M.

**Don't go below $8,500 for the speaking slot alone.** At that number you're leaving significant money on the table for a well-funded company that explicitly sought you out.

**Flight + hotel:** Vegas from Tampa is ~$300 round trip + 1-2 nights at ~$200-300/night. Under $1,000 all-in. Entirely worth it to plant the flag in person with a funded company building from scratch.

---

## 9. OPEN THREADS TO PUSH BEFORE THURSDAY

1. **Larry call — get it on the calendar this week.** Your email is fresh, strike now.
2. **Daniel message re: Larry — send if you haven't.** Early team + fresh funding = short window.
3. **Prep 3 specific "live POC" scenarios** to reference in the Thursday meeting: "Here's what I'd build in 48 hours for a rep walking into a Tenable account."
4. **Know Astelia's product cold.** Spend 20 minutes on their website before the call. Be able to talk about the "3M → 30" story without pausing.
5. **Have a pricing range ready.** Don't name a number first, but know your floor ($10K) and your ceiling ($25K+) before you get on.

---

*Prepared by NickGPT OS | June 13, 2026*
