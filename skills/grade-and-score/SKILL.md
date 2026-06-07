---
name: "grade-and-score"
description: "Grade an artifact 1-10 and teach what would make it better, without changing it. Use to score, critique, or tear down a finished build, prompt, or design."
---

# Grade and Score

This skill delivers a verdict and a lesson. It evaluates how well an artifact is built, scores it against a real rubric, and teaches the user what separates this artifact from an excellent one. It does not repair the artifact. That distinction is the entire reason this skill exists separately from quality-control.

**The line:** Evaluate and teach. Do not fix. quality-control fixes and ships a corrected deliverable with a terse change log. This skill is the inverse: it leaves the artifact untouched and produces the teardown quality-control hides. This also means the skill works on artifacts the user cannot edit (something they saw online), where fixing is impossible and only evaluation makes sense.

## When to use this skill

Use when the user wants an artifact assessed and explained, not fixed. Works on things the user did not build and cannot edit (a prompt, GPT, skill, landing page, framework, post, or workflow seen online) and on the user's own builds. Always runs the full deep teardown.

Trigger phrases: "grade this," "score this," "rate this build," "how well is this built," "tear this apart," "critique this build," "what's good and bad about this," "red flags in this," "how would you make this better," or any request for a verdict-plus-lesson on a finished artifact.

Do NOT use for: fixing or rewriting a deliverable (quality-control repairs and ships). Do NOT use for client-facing milestone progress reports (progress-scorecard). Do NOT use for brainstorming or quick questions.

## Operating principles

**Depth:** Always run the full deep teardown, every time, for every artifact, regardless of how casual the source. A throwaway prompt someone posted online gets the same six-dimension treatment as the user's own high-stakes build. Trivial artifacts often teach the sharpest lessons. The only bounded exceptions are the edge cases below.

**Honesty over kindness:** The value of this skill is accurate signal. Do not inflate scores to be encouraging, and do not manufacture problems to seem rigorous. A 6 is a 6. Every weakness and red flag must be a specific, defensible observation tied to something actually in the artifact. If the artifact is genuinely strong, score it high and say what makes it strong.

## Step 1: Identify the artifact and its intended job

Before grading anything, establish what the artifact is trying to do. You cannot grade an artifact against the wrong standard.

- **What type of artifact is this?** (prompt, skill, GPT/system instruction, document, landing page, framework, automation, post, code, other)
- **What is its intended job?** What is it supposed to accomplish, and for whom? If the artifact states its own purpose, use that. If it does not, infer the most charitable reasonable purpose and state your inference.
- **Who is the end user, and what is the stake?** A prompt for personal use and a client-facing deliverable are held to different bars.

State your read of the artifact's job in one line before scoring. Ask a clarifying question only when the artifact's purpose is genuinely unclear and the grade would swing materially on it. Otherwise proceed on your stated inference; one wrong-but-stated inference the user can correct beats stalling for a question.

**Optional — comparative grading:** If the user asks to grade against a reference class (e.g., "top 10% of cold emails" or "against the best skills you've seen"), name the reference class explicitly before scoring and hold the artifact to that bar. Grading against a named standard adds calibration and sharpens the score. If no reference class is given, grade the artifact on its own merits using the rubric below.

## Step 2: Score against the rubric

Score the artifact 1-10 overall. Score each dimension 1-10 using the same scale. The overall score is a holistic judgment weighted toward the dimensions that matter most for this artifact's job — not a literal average. Use the dimension weight table below to make that weighting consistent and reproducible across runs.

**The scale (applies to both dimension scores and the overall):**
- 9–10: Exceptional — would study it as a model
- 7–8: Strong — ships well with minor gaps
- 5–6: Functional but real weaknesses limit it
- 3–4: Significant problems, needs rework
- 1–2: Fundamentally broken or off-purpose

**The dimensions:**

- **Purpose fit (does it do its job?):** How well does the artifact accomplish what it set out to do? The heaviest dimension for almost every artifact. A beautifully crafted thing that does not do its job scores low here.
- **Clarity and structure:** Is it organized so its intended reader or executor can use it? For a prompt or skill, would a model follow it correctly on first read?
- **Robustness (does it hold up?):** What happens at the edges — malformed input, out-of-scope requests, missing data, contradictory instructions? Strong artifacts handle the boundary; weak ones only work on the happy path.
- **Craft and polish:** Execution quality. Tells of care versus carelessness. For AI-built artifacts, watch for the generic-AI signature (hedging, filler, "cutting-edge," structural sameness) as a craft failure.
- **Efficiency (no wasted weight):** Is anything bloated, redundant, or not pulling its weight? For prompts and skills, is context being wasted on instructions that do not change behavior?
- **Originality (where relevant):** Does it do anything genuinely well-conceived, or is it a default pattern? This scores novelty already present *in* the artifact — distinct from the novel-angles section of the teardown, which proposes novelty *not yet there*. Do not let a missing idea count against this dimension and also reappear as a novel angle. Weight low when the job calls for a reliable standard approach.

**Dimension weight table by artifact type:**

| Artifact type | Purpose fit | Clarity | Robustness | Craft | Efficiency | Originality |
|---|---|---|---|---|---|---|
| Prompt / skill / GPT | 35% | 25% | 20% | 10% | 10% | 0% |
| Cold email / outbound | 35% | 20% | 10% | 25% | 10% | 0% |
| Landing page | 40% | 20% | 10% | 20% | 10% | 0% |
| Document / framework / playbook | 30% | 30% | 15% | 15% | 10% | 0% |
| Code / automation / workflow | 30% | 20% | 30% | 10% | 10% | 0% |
| Social post / content | 30% | 20% | 5% | 30% | 5% | 10% |
| Novel / creative artifact | 25% | 15% | 10% | 25% | 5% | 20% |

For artifact types not in the table, use the closest row and state which one you applied. Adjust individual weights by ±10% if the artifact's specific job clearly shifts priorities (e.g., a prompt for a safety-critical system should shift more weight to Robustness). State any adjustment you make.

Justify the overall score in one or two sentences tied to the dimensions, so it is defensible rather than asserted.

## Step 3: The teardown

Deliver the six-part teardown. This is the body of the output and where the teaching lives. Be specific and tie every point to something actually in the artifact. Quote or reference the exact element you mean.

**1. What's strong.** Name the 2–4 things this artifact does genuinely well, and explain *why* each works so the lesson transfers. Do not skip this even for low-scoring artifacts; isolating what works is as instructive as finding what fails. If almost nothing works, say that honestly and name the one thing closest to working.

**2. What's weak.** The 2–5 most consequential weaknesses, ordered by how much they hold the artifact back. For each: what it is, why it weakens the artifact, and what better would look like. The "what better looks like" matters as much as the diagnosis. These are observations and directions, not edits you apply. If the artifact scores 8 or higher, this section may be thin — do not manufacture weaknesses to fill space. State plainly when a remaining weakness is minor.

**3. Enhancement ideas.** 2–4 improvements within the artifact's existing scope and intent — things that would make a competent version excellent without changing what it fundamentally is. Prioritize by impact on the artifact's actual job.

**4. Novel / out-of-the-box angles.** 1–3 ideas that go beyond incremental improvement — reframes, capabilities, or approaches the author likely did not consider, that could make the artifact categorically better or open a use it was not built for. These should be genuinely non-obvious. If you cannot think of a real one, say so rather than padding with an obvious idea dressed up as novel. This is the highest-value section when it lands, so spend real thought here.

**5. Biggest red flags.** The 1–3 things most likely to cause real failure, embarrassment, or wrong outcomes in actual use. Distinguish a red flag (will bite in production) from a mere weakness (suboptimal but survivable). For each red flag, also ask: *what would have to be true for this artifact to succeed despite this?* That inversion often surfaces the real fix. If there are no red flags, say so. Do not invent them. For artifacts that make factual or capability claims, flag anything the artifact tells a system or reader to do that it cannot actually do.

**6. The one thing.** The single highest-leverage change. If the author fixed only one thing, this is it. Make it concrete and specific to this artifact.

## Step 4: Transferable lesson (the user's own builds only)

When the artifact is the user's own work, add one final line: the transferable principle. What does this build's strongest weakness teach that will carry to future builds, not just this one? This is the difference between fixing one artifact and getting better as a builder. Skip this section when grading something the user found online; the lesson is already embedded in the teardown.

## Output format

Lead with the score and a one-line justification. Then the six-part teardown under clear headings. Then the transferable lesson if applicable. Use prose within each section, not nested bullet sprawl — this is analysis. Keep it tight and high-signal. No preamble, no "great question," no closing affirmation.

Do not produce a corrected version of the artifact. If the user wants it fixed after seeing the grade, that is a separate request that routes to quality-control.

## Edge cases

**Incomplete artifact or fragment:** Grade what is present and explicitly mark what you could not assess because it was missing. Do not infer quality of parts you cannot see.

**User is emotionally invested:** Hold the line on honesty. The transferable-lesson section is where you make the critique constructive — not by softening the score.

**Cannot determine the artifact's purpose:** Ask one question rather than grading against a guess that could be wrong. This is the one place a clarifying question is worth the interruption.

**User asks to grade and also fix in the same breath:** Grade first with this skill, then state that fixing is a separate pass and offer to route it to quality-control. Do not blur the two; the clean separation is what makes each one sharp.

**Artifact is itself a grading or evaluation tool:** Grade it normally, but be alert to the meta-risk that it scores on vibe rather than a defined rubric — the most common failure of evaluation artifacts.

---

*Skill: grade-and-score | Version: 2.0*
*Evaluation-and-teaching engine. The inverse of quality-control: leaves the artifact untouched and produces the teardown QC suppresses.*
*Updated: v1.1 → v2.0. Added dimension weight table by artifact type, explicit 1-10 scale anchors for dimension scores, high-score calibration note for "what's weak," consolidated "do not fix" to two instances, optional comparative grading mode, failure-condition inversion in red flags section.*
*Update trigger: after any grade that missed a red flag, scored on vibe rather than the rubric, or produced inconsistent scores for comparable artifacts.*
