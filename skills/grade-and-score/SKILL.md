---
name: grade-and-score
description: Grade an artifact 1-10 and teach what would make it better, without changing it. Use to score, critique, or tear down a finished build, prompt, or design.
---

# Grade and Score

This skill delivers a verdict and a lesson. It evaluates how well an artifact is built, scores it against a real rubric, and teaches the user what separates this artifact from an excellent one. It does not repair the artifact. That distinction is the entire reason this skill exists separately from quality-control.

## When to use this skill

Use this skill when the user wants an artifact assessed and explained, not fixed. It works on things the user did not build and cannot edit (a prompt, GPT, skill, landing page, framework, post, or workflow seen online) and on the user's own builds. It always runs the full deep teardown.

Trigger phrases: "grade this," "score this," "rate this build," "how well is this built," "tear this apart," "critique this build," "what's good and bad about this," "red flags in this," "how would you make this better," or any request for a verdict-plus-lesson on a finished artifact.

Do NOT use for: fixing or rewriting a deliverable (that is the quality-control skill, which repairs and ships a corrected version). Do NOT use for client-facing milestone progress reports (that is the progress-scorecard skill). Do NOT use for brainstorming or quick questions.

**The line you must not cross:** You evaluate and teach. You do not fix. quality-control fixes and ships a corrected deliverable with a terse change log; it suppresses the teardown by design. This skill is the inverse: it leaves the artifact untouched and produces the teardown quality-control hides. If you find yourself rewriting the artifact, editing it, or producing a "corrected version," stop. That is a different skill. Here you tell the user what you would change and why, and you let them decide whether to act. This also means the skill works on artifacts the user cannot edit at all (something they saw online), where fixing is impossible and only evaluation makes sense.

## Operating principles

**Depth:** Always run the full deep teardown, every time, for every artifact, regardless of how casual the source. The user has chosen maximum signal over speed. A throwaway prompt someone posted online gets the same six-dimension treatment as the user's own high-stakes build. Do not shorten the analysis because the artifact seems trivial; trivial artifacts often teach the sharpest lessons about what good looks like. The only bounded exceptions are the edge cases below: a fragment you can only partially assess, or an artifact whose purpose you genuinely cannot determine without asking. Those aside, depth is not optional.

**Honesty over kindness:** The value of this skill is accurate signal. Do not inflate scores to be encouraging, and do not soften red flags. A 6 is a 6. If the user's own build scores lower than they hoped, say so plainly and show why; that is what they are paying for. Equally, do not manufacture problems to seem rigorous. Every weakness and red flag must be a specific, defensible observation tied to something actually in the artifact, not a generic checklist item. If the artifact is genuinely strong, score it high and say what makes it strong.

## Step 1: Identify the artifact and its intended job

Before grading anything, establish what the artifact is trying to do. You cannot grade an artifact against the wrong standard. A landing page, a custom GPT, a skill, a cold email, and a territory-planning framework are graded on different things. Determine:

- **What type of artifact is this?** (prompt, skill, GPT/system instruction, document, landing page, framework, automation, post, code, other)
- **What is its intended job?** What is it supposed to accomplish, and for whom? If the artifact states its own purpose, use that. If it does not, infer the most charitable reasonable purpose and state your inference, because grading against a purpose the author never intended is unfair and useless.
- **Who is the end user, and what is the stake?** A prompt for personal use and a client-facing deliverable are held to different bars.

State your read of the artifact's job in one line before scoring. Ask a clarifying question only when the artifact's purpose is genuinely unclear and the grade would swing materially on it (the "cannot determine purpose" edge case below is the strongest form of this). Otherwise proceed on your stated inference; one wrong-but-stated inference the user can correct beats stalling for a question.

## Step 2: Score against the rubric

Score the artifact 1-10 overall, and show the dimension scores that drive it. Use this rubric, adapting the weight of each dimension to the artifact type (a prompt leans on Clarity and Robustness; a landing page leans on Purpose fit and Craft). The dimensions:

- **Purpose fit (does it do its job?):** How well does the artifact accomplish what it set out to do? This is the heaviest dimension for almost every artifact. A beautifully crafted thing that does not do its job scores low here.
- **Clarity and structure:** Is it organized so its intended reader or executor can actually use it? For a prompt or skill, would a model follow it correctly on first read? For a document, can a human navigate it?
- **Robustness (does it hold up?):** What happens at the edges, malformed input, out-of-scope requests, missing data, contradictory instructions? Strong artifacts handle the boundary; weak ones only work on the happy path.
- **Craft and polish:** Execution quality. Tells of care versus tells of carelessness. For AI-built artifacts, watch for the generic-AI signature (hedging, filler, "cutting-edge," structural sameness) as a craft failure.
- **Efficiency (no wasted weight):** Is anything bloated, redundant, or not pulling its weight? For prompts and skills, is context being wasted on instructions that do not change behavior?
- **Originality (where relevant):** Does it do anything genuinely well-conceived, or is it a default pattern? This scores novelty already present *in* the artifact, distinct from the novel-angles section of the teardown, which proposes novelty *not yet there*; do not let a missing idea count against this dimension and also reappear as a novel angle. Not every artifact needs to be original, so weight this low when the job calls for a reliable standard approach, and do not penalize a solid conventional artifact for lacking novelty it did not need.

Use a defined scale, not a vibe: 9-10 exceptional, would study it as a model; 7-8 strong, ships well with minor gaps; 5-6 functional but with real weaknesses that limit it; 3-4 significant problems, needs rework; 1-2 fundamentally broken or off-purpose. Justify the overall number in one or two sentences tied to the dimensions, so the score is defensible rather than asserted. The overall is a holistic judgment informed by the dimensions, weighted toward the ones that matter most for this artifact's job, not a literal average of the dimension scores; do not present arithmetic the user would expect to reconcile.

## Step 3: The teardown

After the score, deliver the six-part teardown. This is the body of the output and where the teaching lives. Be specific and tie every point to something actually in the artifact; quote or reference the exact element you mean rather than speaking in generalities.

1. **What's strong.** Name the 2-4 things this artifact does genuinely well, and explain *why* each works, so the lesson transfers. Do not skip this even for low-scoring artifacts; isolating what works is as instructive as finding what fails. If almost nothing works, say that honestly and name the one thing closest to working.

2. **What's weak.** The 2-5 most consequential weaknesses, ordered by how much they hold the artifact back. For each: what it is, why it weakens the artifact, and what better would look like. You are teaching, so the "what better looks like" matters as much as the diagnosis. These are observations and directions, not edits you apply.

3. **Enhancement ideas.** 2-4 improvements within the artifact's existing scope and intent, things that would make a competent version excellent without changing what it fundamentally is. Prioritize by impact on the artifact's actual job.

4. **Novel / out-of-the-box angles.** 1-3 ideas that go beyond incremental improvement, reframes, capabilities, or approaches the author likely did not consider, that could make the artifact categorically better or open a use it was not built for. These should be genuinely non-obvious; if you cannot think of a real one, say so rather than padding with an obvious idea dressed up as novel. This is the highest-value section when it lands, so spend real thought here.

5. **Biggest red flags.** The 1-3 things most likely to cause real failure, embarrassment, or wrong outcomes in actual use. Distinguish a red flag (will bite in production) from a mere weakness (suboptimal but survivable). If there are none, say so; do not invent them. For artifacts that make factual or capability claims, flag anything the artifact tells a system or reader to do that it cannot actually do, or any claim you would not bet money is true.

6. **The one thing.** Close with the single highest-leverage change. If the author fixed only one thing, this is it. Make it concrete and specific to this artifact.

## Step 4: Transferable lesson (the user's own builds only)

When the artifact is the user's own work, add one final line: the transferable principle. What does this build's strongest weakness teach that will carry to future builds, not just this one? This is the difference between fixing one artifact and getting better as a builder. Skip this section when grading something the user found online; the lesson there is already embedded in the teardown.

## Output format

Lead with the score and a one-line justification. Then the six-part teardown under clear headings. Then the transferable lesson if applicable. Use prose within each section, not nested bullet sprawl; this is analysis, and the user's standing preference is prose for analysis, bullets only for genuine lists. Keep it tight and high-signal, no preamble, no "great question," no closing affirmation. The score and the teardown are the whole output.

Do not produce a corrected version of the artifact. If the user wants it fixed after seeing the grade, that is a separate request that routes to quality-control.

## Edge cases

**The artifact is incomplete or you only have a fragment:** Grade what is present, and explicitly mark what you could not assess because it was missing. Do not infer quality of parts you cannot see.

**The artifact is the user's own and they're emotionally invested:** Hold the line on honesty. The transferable-lesson section is where you make the critique constructive, not by softening the score.

**You cannot determine the artifact's purpose at all:** Ask one question rather than grading against a guess that could be wrong. This is the one place a clarifying question is worth the interruption.

**The user asks you to grade and also fix in the same breath:** Grade first with this skill, then state that fixing is a separate pass and offer to route it to quality-control. Do not blur the two; the clean separation is what makes each one sharp.

**The artifact is itself a grading/evaluation tool:** Grade it normally, but be alert to the meta-risk that it scores on vibe rather than a defined rubric, the most common failure of evaluation artifacts.

---

*Skill: grade-and-score | Version: 1.1 (OpenClaw)*
*Evaluation-and-teaching engine. The inverse of quality-control: it leaves the artifact untouched and produces the teardown QC suppresses.*
*Update: after any grade that missed a red flag it should have caught, or scored on vibe rather than the rubric.*
