# NickGPT Master Build Plan (Final)
## A repeatable production system for selling durable, high-ROI custom sales projects at scale
### Built June 6, 2026 | Synthesizes nine strategy responses across three rounds, scrutinized against verified Anthropic documentation, primary-source review of the contested RAG bug report, and verified 2026 market pricing

---

## Why this is the final version, and what each round corrected

Three rounds of independent strategy responses, each round catching what the last missed:
- **Round 1** established the spine: ~8-week lifespan, silent staleness as the killer, price on recurring outcome not build cost, one golden template plus structured intake plus mechanical gates.
- **Round 2** surfaced the contested "13-file RAG threshold" and the verified instructions-persist-under-RAG fact, and forced the self-serve-vs-recurring tension into the open.
- **Round 3** killed the centerpiece error: CRM-as-live-source, which an earlier version (mine included) called "the moat," fails for enterprise sellers because their CRMs are behind corporate IT and cannot be connected to a personal Claude project. You caught that. It is removed here with the reason on record.

Built on your three standing decisions: optimize for quality, longevity, and ROI above all; timeline is irrelevant because the system repeats hundreds of times; fully self-serve, you touch nothing, honored honestly as low-touch rather than no-touch.

**The meta-discipline that runs through all of it:** do not act on a precise claim because a prior analysis called it verified. Two prior responses sold "13 files breaks it, verified" as settled fact. It is one bug report, closed by Anthropic as invalid, contradicted by Anthropic's own docs. Directionally useful, not stage-quotable. Say what's verified, label what's inferred, and never let a borrowed certainty be the thing that fails in front of a thousand people.

---

## PART 0: The verified-facts foundation

**VERIFIED (Anthropic official documentation, this round):**
- Claude does not read the project name or description. Routing context lives in instructions and knowledge files.
- **Custom instructions are a separate mechanism from the knowledge base. They apply to every chat, work like a persistent system prompt, and do not depend on retrieval the way knowledge files do.** This is the linchpin: directives in instructions survive RAG; directives in a knowledge file may not be retrieved on the query where they matter. CONFIRMED, not assumed.
- On paid plans, Projects auto-switch to RAG as knowledge grows; RAG retrieves the most relevant chunks per query, not every file whole. Anthropic claims quality is "maintained"; a user report disputes this.
- Anthropic's guidance: keep project instructions concise and focused (role, key guidelines, general context); reserve task-specifics for the chat. Remove unused files. Lean wins, by the vendor's own advice.

**STRONG SIGNAL BUT UNVERIFIED (GitHub issue #25759, Feb 14 2026):**
- One user reports RAG activating at ~13 files regardless of token size, with degraded instruction-adherence and hallucination in RAG mode.
- Closed by Anthropic as "not planned," labeled "invalid." Contradicts Anthropic's official size-based, quality-maintained position. One careful data point vs the vendor's stance. Treat as directional, never quote "13 files" as fact.
- Doesn't change the decision: fewer-denser-files wins under every version of the truth. Verify the real behavior on your own account in Step 1.

**VERIFIED (2026 market pricing):**
- Gong / revenue-intelligence: ~$1,500-$2,600/seat/yr + non-waivable $5,000-$50,000/yr platform fee + ~$7,500+ onboarding; effective cost 2-3x sticker; 50-seat team $85K-$130K+ year one.
- Mid-tier CI (Sybill, Chorus): ~$79-$100/user/month, no platform fee.
- Lavender (AI email): ~$30/seat/month.

---

## PART 1: Lifespan and the honest durability model (CRM-moat removed)

**Verdict (high confidence, nine passes converged, four real builds): ~8 weeks of genuine value, drifting by week 4, untrustworthy by week 8, abandoned by week 12 without maintenance. Not a year.**

Two independent silent-failure paths, not one:
1. **Staleness (time):** volatile deal layer stale in 2-4 weeks; voice 4-6 months; methodology 6-12 months. The project is only as trustworthy as its most volatile file, because the seller can't see which file an answer came from.
2. **RAG crossing (size):** at size, retrieval goes partial and instruction-adherence can degrade, producing the same "quietly wrong" symptom on day one, not day ninety. The lean architecture (Part 2) keeps the project out of this mode.

**The durability dial, with the CRM setting removed for this ICP:**
- **Setting 1 — Honest Self-Serve (zero-touch, the floor).** Cannot refresh itself, but knows it's stale and says so. ~8-12 weeks of genuine value, then graceful honest degradation. Fully self-serve.
- **Setting 2 — Self-Serve + Ritual (near-zero-touch for you).** Prompted weekly 30-second update via the starter prompt. Sharp ~6 months. The discipline is the user's.
- **Setting 3 — Low-touch quarterly rebuild (what the subscription actually buys).** Every 90 days the snapshot resets from accumulated session history. Not zero-touch today: ~40-60 min of your (or Daniel's) time per client on the now-fast templated pipeline. Automatable via OpenClaw later. This is the honest "lasts a year" answer.
- **KILLED — CRM-as-live-source.** Your catch. Enterprise sellers' CRMs sit behind corporate IT (Brad on IBM-governed Salesforce, Nate on a corporate instance); they cannot grant a personal project access. The moat fails on contact with corporate security. Survives only for SMB-owner and coach verticals who own their CRM, which is a second-vertical opportunity, not a webinar-one feature.

**GRADE: 9.5/10.** Convergence is the evidence; reasoned not yet measured; the pilot measures it.

---

## PART 2: Architecture (quality-first, RAG-safe, fail-safe)

**Fewest, densest, highest-fidelity files**, because it wins on your three criteria (quality, value, longevity) simultaneously and keeps the project in direct-loading mode with headroom. ~8-10 working files for deal content, leaving room for Ask Ian (1-2) and update-driven growth before any RAG flip. Top-2 accounts split (overview + deal detail); lower-value files merged (comp into context, methodology into context), as the Brad build did. The ceiling is whatever protects direct-loading longevity, not a vanity number.

**The fail-safe rule (the most important architecture decision):** every load-bearing directive lives in the project INSTRUCTIONS, not a knowledge file. Truth rule, staleness directive, voice self-check, index/routing logic. Verified this round: instructions persist regardless of RAG; knowledge files may not be retrieved on the query that needs them. This makes the project fail safe even if you misjudge the RAG threshold. It matters more than file count, because it holds even when file count doesn't. Keep instructions concise per Anthropic's own guidance.

**The maintenance layer, graded against verified mechanics:**

| Mechanism | Grade | Build? | The constraint that makes it real |
|---|---|---|---|
| Inline staleness flag (dated facts) | 9.5 | First | In INSTRUCTIONS; fires inline on answers, not via an unreliable session hook |
| Freshness check at session start | 9 (reframed; 5 as autonomous) | Yes | Bake into the STARTER PROMPT the user pastes; deterministic that way |
| Truth rule (refuse to invent, name what's missing) | 9.5 | Yes | In INSTRUCTIONS so it survives RAG. The #1 defense against confident-wrong |
| Retrieval regression harness (RETRIEVAL-TESTS.md) | 9 | Yes | Runs on every update; already in project-builder v3.3; wire into the cycle |
| Voice-drift defense (immutable baseline + diff) | 8 | Yes | Ship a frozen voice-baseline file the update NEVER regenerates; diff against it. Mirrors the proven immutable-intake-notes pattern |
| Scheduled health check (defect list, never a score) | 8 | Yes | Starter-prompt-driven, not autonomous cron; mechanical defect list only |
| Quarterly rebuild | 9 | Yes | The commercial keystone; what the subscription buys; OpenClaw-automatable later |
| Transcript auto-ingestion | 8 long-term / 4 at launch | Premium only | Connector-dependent support burden; keep where you control the wiring |
| CRM-as-live-source | KILLED | No | Corporate IT blocks it for the enterprise-seller ICP |
| "Project maintains itself" claim | KILLED | No | It can't fetch new deal reality alone; say "low-touch," never "self-maintaining" |
| A "health score" | KILLED | No | Scores drift run-to-run (your five-run experiment proved it); defect list only |

---

## PART 3: The self-serve / recurring-revenue resolution (the honest model)

"Self-serve, I touch nothing" and "$97/month recurring" cannot both be fully true. A truly zero-touch product is a one-time sale; buyers churn from a subscription with no one on the other end the moment self-policing misses something. The honest model is **low-touch, not no-touch:**
- **Freshness self-policing: genuinely zero-Nick-time.** Client-side instruction layer. Most of the value, none of your time.
- **Quarterly rebuild: the low-touch thing the subscription actually buys.** ~40-60 min/client on the templated pipeline, batchable.
- **OpenClaw later runs the rebuilds: the path to true zero-touch-for-you** while still a real recurring service for the buyer. Not available today (lean v1 not built), so the rebuild is your-time until then; cost that into the margin.

**The operational constraint that drives the whole design:** a paid subscription is a support commitment to potentially hundreds of sellers on top of your Microsoft job and the UYSP retainer. Every mechanism is evaluated on "does it cost Nick ongoing time," not just "does it help the buyer." Freshness passes (zero). Quarterly rebuild is the controlled, batchable, automatable cost. Anything requiring ad-hoc response to individual subscribers is rejected by design.

**GRADE: 7/10, the part I'm least commercially certain of.** The model is honest and defensible, but whether buyers pay $97/month for "self-policing plus a quarterly rebuild" is unproven. The pilot must test willingness-to-pay for maintenance specifically. If they love the build but won't subscribe, it's a one-time-build business, and you must know that before the webinar, not after.

---

## PART 4: Pricing (verified comps, committed)

- **Webinar entry: $1,997 one-time** (from $2,500 standard) for the built system + maintenance layer + first 90-day rebuild.
- **Maintenance subscription: $97/month.** Anchor every pitch on the monthly; the build is acquisition cost, the subscription is the business.
- **Premium done-for-you: $4,000-$5,000 + $300-$500/month**, live build, transcript-ingestion where you control wiring, quarterly rebuilds.

**Anchor sentence (verified):** "Your company pays Gong fifteen-hundred to twenty-six-hundred a seat per year plus a five-figure platform fee for call intelligence you didn't pick. This is your own deal-intelligence system, built on your accounts, for less than one Gong seat, no procurement, on your own card. Three to five hours a week back, and if it tips one deal this year it returns thirty to a hundred times its cost."

Why not >$2,500 build: triggers procurement, kills webinar conversion. Why not $750: founder rates anchor you forever; the next buyers are customers. **GRADE: 9/10**; deal-impact ROI is plausibility until the pilot yields a real outcome story. Re-verify comps near the date; pricing moves.

---

## PART 5: The fulfillment engine (repeatable, near-zero manual QA)

1. **One frozen golden template, enterprise-seller vertical.** GRADE 9. Fixed 8-10 dense files, instruction block with maintenance directives baked in, immutable voice baseline, retrieval harness, standard skills, starter prompts with freshness check inside. 4 hours to ~40-60 min. Freeze ONE vertical; templatize the other three shapes (strategic AE, owner, coach) from revenue.
2. **Structured intake, build-ready.** GRADE 9.5, highest leverage. Fixed form per vertical, hard requirements (account list, 5+ real sent emails incl. cold outreach, methodology docs), AI-research-into-a-separate-unverified-bucket rule. Phase 1 becomes verification, not discovery. ~40% saved at the source. (The recurring tax was mixed/incomplete inputs: Nate "the mixing was the problem," Steve legacy formats, Brad cold-outreach gap.)
3. **Auto-blocking mechanical gates.** GRADE 9. Extends project-builder v3.2/v3.3 (boundary-delimited wc -w, fail-loud empty-glob guard, contradiction scan, retrieval test). Unfinished piece: make them block and auto-re-spawn, not report to you. Mechanical only, never a score.
4. **Template QA once, instance QA per build.** GRADE 9. QA the template to 10/10 once; each build needs only instance QA (data landed right, voice calibrated, numbers consistent). Human keeps the voice ear; the rest is gated.

Combined: same-day ~40-60 min instance builds, one focused check, ~10-15/week solo. GRADE 9; auto-blocking gates unbuilt, stress them in the pilot.

---

## PART 6: The sequenced build (correctness-gated)

**Step 1 — Verify platform assumptions on your own account (cheap, first).** Build a test project, add dense files one at a time, find the real RAG flip point for your files, and test whether instruction-adherence holds once RAG engages (the bug report's scariest claim, and the thing your fail-safe rule depends on). Converts "strangers disagree online" into "I watched it on my build." Gate: real behavior documented.

**Step 2 — Freeze the enterprise-seller golden template, RAG-safe and fail-safe.** Lean files, directives in instructions, immutable voice baseline, harness wired. QA exhaustively once. Gate: passes own gates + 9.5+ manual audit; confirmed to stay in direct-loading with headroom; a deliberately-bloated test confirms the directives still hold if RAG activates.

**Step 3 — Structured intake + auto-blocking gates.** Gate: a clean build clears with zero manual passes; a broken input is caught by gates, not you.

**Step 4 — Cohort pilot, 3-5 enterprise sellers, ~60 days live.** Build each from the template (proving 40-60 min builds). Deploy the full low-touch maintenance layer. Measure where it degrades (staleness AND any RAG crossing), whether freshness flags fire, whether sellers run the prompted updates, one real outcome story, and critically whether they'll pay monthly. Gate: a measured degradation curve, evidence the maintenance layer flattens it, and a willingness-to-pay read. Cohort not solo: five is a pattern and five testimonials; one is an anecdote.

**Step 5 — Productize and prep the webinar around proven results.** Lock pricing, build the offer on pilot evidence, demo the trust receipt and freshness check as the visible production-grade moments. Gate: every stage claim maps to a verified fact or a pilot result; nothing rests on the contested "13 files" number or an unproven hypothesis.

**Step 6 — The webinar.** A formality if the gates are met.

---

## PART 7: Angles examined across all rounds

1. **Instruction placement is the real safety mechanism, not file design.** GRADE 9. Verified this round. Holds even if you misjudge the RAG threshold; the project fails safe in RAG mode.
2. **The trust receipt.** GRADE 8. Micro-citation on deal facts (source file + last-confirmed date). Makes confidence legible; a demo moment no competitor offers.
3. **Invert the frame: subscribe to a living system, the build is included onboarding.** GRADE 8. Reframes a degrading asset into a subscription to currency; makes recurring revenue the headline.
4. **Cohort pilot, not solo.** GRADE 9. Folded into Step 4.
5. **The webinar sells the pilot's RESULT, not the product's promise.** GRADE 9. The reason pilot-first is right for a career-stakes launch.
6. **Vertical portability.** GRADE 7. CRM-as-source is dead for sellers but alive for SMB owners and coaches who own their CRM, so the second vertical template could carry the live-source advantage the enterprise one can't. Know it now so the enterprise template's limit isn't mistaken for universal.

---

## PART 8: Honest risk register

1. **Maintenance might not flatten the curve.** Core unproven assumption; the pilot is the gate; don't launch on it unproven.
2. **Buyers might not pay monthly.** The Part 3 willingness-to-pay risk; if they won't subscribe it's a one-time-build business; know before the webinar.
3. **RAG threshold uncertain.** Mitigated by designing safe under every version and never quoting the number.
4. **Starter-prompt freshness check depends on users pasting the starter prompt.** Measure paste-rate in the pilot.
5. **Auto-blocking gates may have edge cases under volume.** The 3-5 varied pilot builds are the stress test.
6. **OpenClaw isn't built, so true zero-touch isn't available at launch.** The quarterly rebuild is your-time until it is; cost it into the margin.

---

## What I verified, what I didn't

- **Verified:** Gong/CI/Lavender pricing; custom instructions are a separate mechanism that persists regardless of RAG; RAG auto-activation is real on paid plans; the bug report exists and says what was claimed; Anthropic's docs contradict its severity. The "13 files" threshold is one contested source, treated as directional, never settled.
- **Inferred, needs pilot measurement:** the real degradation curve; exact RAG behavior on your file structures; starter-prompt paste rates; maintenance willingness-to-pay; deal-impact ROI.
- **Did not do:** build the golden template (the Step 2 deliverable and your approved next artifact); re-read the JSX/HTML deliverables; survey every competitor; operate a live Project to nail the exact RAG flip (that's Step 1, on your account).

---

## The one thing, above everything

Re-architect to keep the project in direct-loading mode with the safety directives in instructions so it fails safe at size, prove the low-touch maintenance layer AND the willingness to pay for it on a 3-5 seller cohort over 60 days, then walk on stage selling evidence. The contested "13 files" number doesn't change what you build, because the safe design wins under every version of the truth. The discipline of not quoting it as fact is the same discipline that protects your whole reputation: say what's verified, label what's inferred, and never let a borrowed certainty be the thing that fails you in front of a thousand people. Everything flows through the golden template; build it, verify it on your own account first, prove it on five sellers, and the webinar is a formality.

*Master Build Plan (Final) | Built June 6, 2026 | Nine strategy responses across three rounds | RAG threshold labeled directional-not-settled per primary-source review of GitHub #25759 (closed as not-planned by Anthropic) against official RAG docs | Instructions-persist-under-RAG verified via Anthropic help docs | CRM-as-source killed for the enterprise-seller ICP with reason recorded | Self-serve/recurring resolved as low-touch | Market pricing verified | Every proposal graded; unproven assumptions routed to the pilot.*
