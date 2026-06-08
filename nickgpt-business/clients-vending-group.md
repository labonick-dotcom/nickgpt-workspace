# Client: Vending Group

> Summary: National vending location matchmaker (~12-15 employees). Contracts declining from 326 (2022) to 151 projected (2026). Organic traffic cratering while PPC spend quadrupled with no conversion lift. Decision maker: Aja Pascale (President). Nick + Daniel relationship. Active pipeline -- first call happened, second call (Wednesday) to present two-use-case proposal.

## Who They Are

- **Company:** Vending Group -- national matchmaker connecting vending locations with independent vending operators.
- **Size:** ~12-15 employees. Deliberately lean.
- **Decision maker:** Aja Pascale (President). Sharp. Ran her own Copilot analysis before the first call. Tested AI visibility herself. Knows her numbers.
- **Tech person:** On staff, can handle implementation once spec is built.
- **HubSpot:** Integrated (Daniel's original proposal had an error saying no integration -- needs to be corrected).

## Business Problem

| Metric | 2022 | 2025 | 2026 (projected) |
|--------|------|------|-----------------|
| Contracts | 326 | 181 | 151 |
| Organic traffic | 54K | 39K | declining |
| PPC spend | baseline | 4x'd | still climbing |

- Organic traffic down, paid up, conversion flat. Classic 2015 HubSpot inbound model. Doesn't work anymore.
- Current lead capture: 90+ forms on a bloated website. 12-question email qualification sequence. 10-day lag between form submit and qualified lead. No instant feedback. 30% of form submitters drop off during the email sequence.
- **Commission leakage** on $100K+ micro market accounts -- zero automated detection. (Phase 2 opportunity, needs Access DB schema -- gated on trust.)

## What Daniel Built (Pre-Call)

- **HTML proposal** showing the business case, current state vs. future state, and two recommendations.
- **Working demo website on Vercel**: AI-native lead capture experience with single entry point, location/company type questions, instant qualification, enrichment via Apollo, HubSpot integration pathway. Built it in ~6.5 hours. Converts measurably better than the current 90-form monster.
- Visual showing: standard forms convert 2-3%, AI experiences converting 15-20% (2026 data).

## Proposal Strategy (Two Use Cases)

**Lead with these two -- kill the SEO Health Monitor:**

1. **AI Lead Capture + Qualification System**
   - Replace 90 forms + 12-question email sequence with a single AI widget
   - Front-loads the qualification (asks questions in real time, not over email)
   - Enriches lead data via Apollo on submission (no manual qualification lag)
   - Fires qualified leads into HubSpot with full data already attached
   - Kills Power Automate workflow Beth is running manually
   - Impact: recover the 30% drop-off, cut qualification lag from 10 days to hours

2. **Website AI Optimization + AI-Native Lead Page**
   - Don't pitch a full rebuild yet. Pitch a standalone AI-native landing page (like Daniel's Vercel demo) as a parallel entry point
   - Paid ads route here instead of the existing site
   - Builds the proof case for a full rebuild later
   - References the AI search optimization layer (LLMS.txt file, structured content for AI crawlers)

**Do NOT pitch:**
- Full website rebuild as primary scope. Market rate is $20-25K and we don't want to maintain it long-term.
- SEO Health Monitor (killed -- good idea in theory, explains the problem they already know they have).

## Pricing / Deal Structure

- **Performance model (preferred if Aja is open):** Don't charge upfront. Take a % of additional contracts above 200. Currently at 151. If we get them above 200, we earn on every lead above the baseline. Like Gorski's metal dealer model.
- **Flat project:** Lead capture system could be $8-12K. Website work varies by scope.
- Get Gorski on the phone (Wednesday call) to understand dev capacity before committing to build + maintain.

## Roles

- **Nick:** M365/Power Automate framing, commercial case, executive relationship with Aja.
- **Daniel:** AI pipelines, the Vercel demo, the HTML proposal, document parsing, monitoring builds.
- **Gorski:** Developer team for production implementation (website build, HubSpot integration, maintenance).

## Current Phase / Next Steps

- [ ] Wednesday call with Aja -- present two use cases, gauge interest, do NOT commit to full rebuild scope
- [ ] Gorski call Wednesday 5pm -- get developer capacity and rates
- [ ] If Aja asks "can you deliver it?" -- answer yes, say "we'll put together a proposal"
- [ ] Explore performance model (% of leads above 200) as deal structure
- [ ] Phase 2 (commission reconciliation agent) is gated on trust + Access DB schema access

## Key Decision (from June 8 Nick + Daniel sync)

Nick's position: "I'd rather do three jobs we're capable of today that don't require maintaining it for 10 years." Daniel's position: "I don't want to maintain it either -- we build it, hand the spec to their tech person." Aligned: build + hand off, don't sign up for ongoing maintenance. Gorski handles dev production if needed.

---
*Source: memory/sessions-june2026.md (Vending Group June 7 entry), Nick + Daniel call transcript June 8 2026*
