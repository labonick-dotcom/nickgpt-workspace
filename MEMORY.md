# MEMORY.md
Behavioral rules, active state, and load-bearing operating context. Lean by design.
Session archives → `memory/sessions-june2026.md`. File index → `memory/file-index.md`.
Started: 2026-06-04

---

## Silent Replies
When you have nothing to say, respond with ONLY: NO_REPLY
⚠️ Rules:
- It must be your ENTIRE message — nothing else
- Never append it to an actual response (never include "NO_REPLY" in real replies)
- Never wrap it in markdown or code blocks
❌ Wrong: "Here's help... NO_REPLY"
❌ Wrong: "NO_REPLY"
✅ Right: NO_REPLY

---

## Formatting Rule: Tap-to-Copy in Telegram (set 2026-06-07)
Always wrap deliverables in a code block so Telegram shows the one-tap copy button.
Applies to: emails, texts, prompts, scripts, outbound messages -- anything Nick obviously needs to copy and send.
Use triple backticks with no language tag for plain text deliverables.
Do NOT wrap analysis, teardowns, or conversational replies in code blocks -- only copy-ready output.

---

## Skills Active (2026-06-07)
- grade-and-score v2.0: dimension weight table by artifact type, unified 1-10 scale, high-score calibration, consolidated do-not-fix, comparative grading mode, failure-condition inversion in red flags.
- quality-control: max QC protocol always. Nick explicitly does not want a lightweight mode. No scope calibration override.

---

## Nick as a User -- Character Analysis (logged 2026-06-07)
Observed from session behavior, not inferred from files. Use this to calibrate how to work with him.

- Thinks in systems and immediately maps new info to economics or leverage. Asks about cost at almost every opportunity. This is discipline, not cheapness.
- Low tolerance for process theater. Wants the thing done, not explained in advance. "Just do it" is a real directive.
- Catches vague statements fast and won't let them pass. Has been burned by hollow AI answers before and built a reflex against it. When he calls something out, fix it -- don't defend it.
- Meta-learner. Doesn't just want the output, wants to understand the mechanism so he can improve the system.
- Impatient but not sloppy. Pushes fast AND pushes for quality simultaneously. Unusual combination.
- Fires 6-10 questions per message. Brain moves faster than the conversation. Triage priority, give depth on the 2-3 that matter most, acknowledge the rest.
- Jumps topics while prior ones are still live. Don't let threads die -- track open items and close them.
- Always thinking one level above the current task. That's the register to match.
- Calls out when I say something without following through. He's right every time. Never leave an action item unanchored.
- Wants to be challenged, not validated. The mirror, not the empathy theater.
- Quick to give credit when things land, quick to flag when they don't. Calibrates fast.
- Builds things to production quality from the start. Max scrutiny, no shortcuts on deliverables he cares about.
- Prefers proactive surfacing. The goal is to anticipate, not wait.

---

## NickGPT Build System & Master Plan (locked 2026-06-07)

### The Webinar Business
- Goal: sell durable "Deal Intelligence System" custom Claude projects to enterprise sellers, built once as a repeatable production system.
- Three locked decisions: optimize for quality/longevity/ROI above all; timeline is irrelevant (system repeats hundreds of times); default tier is fully self-serve (Nick touches nothing).
- Pricing (committed, verified comps): $1,997 build (anchored from $2,500) + $97/month maintenance. Premium done-for-you: $4-5K + $300-500/month. Anchor every pitch on the monthly. Never exceed ~$2,500 on build (triggers corporate procurement). Do not use $750 founding rate.
- Verified anchor: Gong runs $1,500-2,600/seat/year + $5K-50K platform fee. Nick's offer is less than one Gong seat with no procurement overhead.
- Honest lifespan: frozen-file project is delightful week 1, drifting week 4, untrustworthy week 8, abandoned week 12 without maintenance. Durability dial: zero-touch (8-12 weeks), self-serve + weekly ritual (~6 months), low-touch quarterly rebuild (what subscription buys).

### Three Claims NEVER to State as Fact on Stage
1. "13 files breaks Projects" RAG threshold -- one bug report Anthropic closed as invalid, contradicts their docs. Contested, not verified.
2. Deal-impact ROI numbers -- plausibility, not measured.
3. Whether sellers will pay monthly -- unknown. All three route to a cohort pilot to prove or kill.

### KILLED Ideas (do not resurface)
- CRM-as-live-source as a moat for enterprise sellers. Their CRMs sit behind corporate IT (IBM-governed Salesforce, locked instances). Survives only for SMB owners and coaches who own their CRM.

### Verified Platform Facts
- Claude doesn't read project name/description. Routing must live in instructions + knowledge files.
- Custom instructions persist regardless of RAG mode; knowledge files may not be retrieved.
- All safety directives (truth rule, staleness flag, voice self-check, index) must live in INSTRUCTIONS, not knowledge files.
- Fewer, denser files is the correct architecture.
- Build sequence: verify RAG behavior → freeze golden template → build intake + auto-blocking gates → cohort pilot (3-5 real sellers through full degradation cycle) → productize → webinar.

### Skill Ecosystem (hardened June 6, 2026)
- quality-control v5.9: external-consumer contract mapping, forced primary-source fetch for live facts, verify-each-finding-before-fixing.
- pre-build-scoping v1.4: assumptions field is now a premise gate. Label every assumption, stop-and-ask for Nick's facts, fetch live facts, surface contradicting goals before scope locks.
- project-builder v3.3 and coaching-project-build v4.3: real retrieval tests, mechanical word counts, instrumentation markers.
- Build chain: pre-build-scoping → build → quality-control.

### Operating Principles (load-bearing)
- Trust the findings, discard the score. Confidence is not correlated with thoroughness.
- Every check that can be a command should be a command. Vibe checks are not gates.
- An output is a contract; changing it changes every downstream consumer.
- Nick over-engineers and over-refines. When something is good enough, stop. Direct rigor at the next artifact.
- Build factory machinery (gates, intake-to-template scripts) in Claude Code; deliver client work in Cowork. Keep that line clean.
- Staying on Claude is correct. Switching platforms turns Nick into a software vendor with a maintenance burden.

---

## Transcript Processing Rule (2026-06-08)
Before building any artifact that touches an existing client, project, or relationship:
1. Search memory_search for relevant context
2. Read the relevant workspace files
3. Then build

Never build from transcript context alone. Transcript gives the topic. Workspace files give the accuracy. This applies to every call drop -- no exceptions, no shortcuts.

---

## Note: personal/sexual/ files (2026-06-08)
If Nick references files in personal/sexual/ (fantasy-log.md, kink-history.md, angie-dynamics.md, sexual-self-analysis.md, etc.), immediately locate the directory and analyze/process the content as requested. These hold his personal documentation on sex life, fantasies, kink history, and related topics.
