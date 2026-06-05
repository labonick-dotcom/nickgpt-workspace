---
name: quality-control
description: Find and fix every flaw in a deliverable, then ship the corrected version with a short change log. Use to QA, audit, or pressure-test work for production.
---

# Universal Quality Control

The first pass is never the final pass. Your job is to find what's wrong, not confirm what's right. Identify every issue, consolidate all fixes, verify nothing broke, and present the best verified deliverable.

## When to use this skill

Use this skill when the user explicitly asks for a quality review of a deliverable they intend to send, deploy, or rely on. It works on a single file or a multi-component system (a project, a skill ecosystem, a workspace, prompts, documents, code, communications) and runs as an overlay on top of whatever else you are doing.

Trigger phrases: "QA this," "triple check," "double check," "audit this," "pressure test this," "make sure this is perfect," "build this to the highest standard," "high stakes build," "make this a 10 out of 10," "check for gaps," "find what's broken," or any explicit quality-review request.

Do NOT use for: quick questions, brainstorming, ideation, casual conversation, or tasks the user marks as drafts. Do NOT trigger on ambiguous phrasing like "is this ready," "look for issues," or "review before I send" unless the user explicitly invokes a quality review.

Boundary against adjacent skills: this skill **fixes and ships** a corrected deliverable with a terse change log. If the user wants a graded teardown that teaches what would make the work better but leaves the artifact untouched, that is the grade-and-score skill, not this one. If the user wants a client-facing milestone progress report, that is the progress-scorecard skill. This skill repairs; it does not grade-for-teaching or report on client progress.

## Output discipline (read first)

The protocol below is how you think, not what you write. Run the steps internally, in your reasoning. By default the response contains just two things: the corrected deliverable, then a short change log (format at the bottom). Do not narrate the steps, do not produce a QA audit report, do not write step-by-step tables or a recap of what you checked. The work is internal; the deliverable and a few lines of change log are the output. (Documented exceptions keep their own short formats: a Step 0 dealbreaker flag, a ship-now risk flag, or a phase-boundary handoff. When tool calls are visible in an agentic run, the tool calls will show, but do not add a prose autopsy on top of them.)

## Core rules

**Anti-performative rule:** Every QA claim must be backed by a specific check actually performed, source verified, issue found, or fix applied. This evidence lives in your internal reasoning and, where it concerns an actual fix, in the change log. It is not a transcript to paste into the response. Never fake a check, and never claim "I checked everything," "no issues found," or "looks good" without having done the work. The rule forces real checking, not visible narration of checking.

**Truth and access rule:** Do not imply access to files, tools, code execution, or environment state unless it is actually available in the current context. If verification is not possible, mark the item Unverified and state what would be needed to verify it.

**Verification labeling:** Any claim, source, calculation, or verification that materially affects the deliverable must be labeled Verified (directly confirmed against source), Inferred (logically derived but not directly confirmed), or Unverified (could not be checked). Do not present inferred or unverified items with the same confidence as verified ones.

**Severity definitions (used throughout):**
- **Critical:** Could cause a wrong decision, failed delivery, broken execution, factual error, or reputational damage. Must fix before delivery.
- **Medium:** Reduces usefulness, clarity, completeness, or trust but does not break the deliverable. Fix before delivery.
- **Low:** Style, polish, formatting, or optional enhancement. Fix if possible, document the remainder.

**Resolution order when steps conflict:** (1) Accuracy over completeness: fix what is wrong before adding what is missing. (2) Core requirements over enhancements: the foundation must be solid before adding extras. (3) Usability over thoroughness: a deliverable that works beats one that is comprehensive but confusing.

## Pick the flow

This skill has three flows. Detect which one applies based on context:

- **Build Flow:** The user is starting something new or beginning a multi-phase build. Run Setup, then apply quality standards throughout, then run the Review Protocol before delivery.
- **Review Flow:** A deliverable exists (finished or in-progress). Run the Review Protocol on it and present the best verified version.
- **Phase Boundary:** The user wants to check work before moving to the next phase. Run the Review Protocol on current state, plus validate the execution environment can support the next phase.

If ambiguous, ask one question: "Are we starting a build or reviewing something that exists?"

---

## Setup Flow (Build-Start Only)

Run these before any building begins.

### 1. Confirm the right deliverable
Re-read the user's original request. Confirm the planned deliverable directly addresses what was asked for. If the goal could be better served by a different output type, format, or approach, flag it now. Building the wrong thing perfectly is the most expensive failure mode.

### 2. Define stakes and emotional target
State in one sentence: what real-world outcome depends on this deliverable's quality? Then state: how should the end user FEEL when they see the finished product? These two answers guide every decision throughout the build.

### 3. Set acceptance criteria
Write 5-10 specific pass/fail criteria BEFORE building. Example: "Every data point must match the source. The output must be under 2,000 words. All file references must point to real files." Each criterion must be objectively verifiable by a third party with no knowledge of your intent. "Feels premium" fails this test; "every data point traces to a named source file" passes. Rewrite any subjective criterion into an observable one before building. Reference this list at every phase gate and during final review.

### 4. Map dependencies (multi-phase builds only)
Draw the chain: Input A feeds Phase 1, which produces Output X, which feeds Phase 2, which produces Output Y. Identify every dependency. Flag dependencies where a quality failure in an earlier phase silently corrupts a later phase.

### 5. Set refinement budget
Default: 3 passes maximum. Within a single pass, the Review Protocol runs once linearly and fixes all Critical and Medium issues it finds. Additional passes exist only for two cases: when fixing one layer of issues exposes a deeper layer, or when the system is too large to fully review in one turn. Pass 1: full protocol, fix all Critical and Medium found. Pass 2: re-run on the revised deliverable to catch issues the first round of fixes exposed or that were missed under context load. Pass 3: final verification only. If a pass surfaces no new Critical or Medium issues, stop and present. For complex multi-component systems too large for one turn, complete one pass per session turn, label which pass the output represents, and ask before continuing. Low-severity issues get documented for the next update cycle. The user can override this default.

### 6. Lock in quality posture
For the duration of this build: prioritize thoroughness over speed. Do not rush to present. Approach every component as the leading specialist in this domain would, applying the most sophisticated techniques available, not default patterns. Challenge every shortcut. It must justify itself against the thorough approach before being accepted.

---

## Review Protocol

Run every applicable step, every time, as internal reasoning rather than written output (see Output discipline above). Steps that cannot execute due to unavailable sources, tools, or prior versions must be marked Not Applicable with the reason documented. Never silently skip a step. Steps 0-11 identify, classify, and may apply fixes as found. Step 12 is the consolidation and regression-verification gate: confirm every identified issue is resolved and that no fix broke previously-correct content. The output of this protocol is the best verified deliverable plus a short change log, never a step-by-step report.

### Step 0: Dealbreaker scan
Before investing in line-level review, check fundamentals. Is this the right format? Is it addressed to the right audience? Does it answer the question that was actually asked? Is it completely off-scope? If any of these fail, stop immediately and flag before proceeding. Do not polish something that needs rebuilding.

### Step 1: Re-read source material
If source files exist on disk or in the workspace, load them now. Do not rely on memory from earlier in the conversation. For each file re-read, state the filename AND one specific fact pulled from it. Where possible, the cited fact should be one that a later step will actually use (a data point you will cross-check, a name you will verify, an instruction you will test). Tying the proof to downstream work makes shallow compliance harder.

If only some source files are available, explicitly name what is missing and flag which subsequent steps have blind spots as a result. Do not silently skip verification on unavailable material.

If the deliverable was generated purely from conversation context with no source files, re-read the original user request that initiated the work and confirm the deliverable addresses it.

This is the single highest-impact quality method. Non-negotiable. For large systems with many components, prioritize re-reading files that are referenced by other components, contain data used across the system, or have been recently modified. Evidence (filename + fact) is required for every file re-read.

### Step 2: Verify inputs, inventory, and component map
Confirm that every input referenced in the deliverable actually exists and matches reality. Force explicit enumeration: not "these files" but "these 7 files: [list each one]." If file counts, names, or structures are referenced, verify them against the actual source.

For multi-component systems (projects, workspaces, skill ecosystems): enumerate every component and map their relationships. Which files reference which other files? Which skills depend on which knowledge files? Which outputs feed into which inputs? Which triggers could overlap across skills? This component map is the foundation for cross-component checks in subsequent steps.

### Step 3: Validate execution environment
Assess whether the current context (conversation length, loaded files, remaining capacity) can support the remaining work. If context is degraded from a long conversation, recommend starting fresh. If the deliverable will be handed off to another system, verify alignment between what you are producing and what the target system can actually execute. If direct verification is not possible, state that limitation and mark the item as unverified.

For multi-component systems, estimate total system weight (sum of knowledge files plus instructions) against the target platform's usable context budget. Flag if the system risks exceeding context or crowding out room for the user's actual query and the model's response. Mark Verified if measured via code execution, Inferred if estimated.

### Step 4: Completeness pass
Does this cover everything specified? Any sections missing? Any placeholders, brackets, or TODO markers remaining? Scan the ENTIRE deliverable, not just the beginning. Check against acceptance criteria if they exist. Re-read the user's original request and confirm every stated requirement maps to something in the deliverable.

For multi-component systems: verify that every cross-reference between components is valid. Every file referenced in instructions must exist. Every path in a skill must point to a real file. Every component the system claims to have must be present. Identify orphaned components (files nothing references) and missing components (references that point to nothing). Confirm that the system as a whole covers the user's full workflow, not just individual pieces of it.

### Step 5: Accuracy pass
Verify every name, number, date, path, file reference, and factual claim against the source material. If a data point appears in multiple places, verify consistency across all of them. For word counts, quantities, and numeric consistency checks, use code execution when available rather than manual counting. If code execution is not available, perform the check manually and label the result Inferred.

For multi-component systems: verify data consistency across components. If a name, number, methodology, or process appears in multiple files, confirm they match everywhere. If one file describes a workflow and another file's instructions depend on that workflow, confirm the descriptions are aligned. Check that knowledge file sizes and structures support effective retrieval (high-signal content in the first 200 words, files not excessively long). For knowledge-heavy systems, test retrieval reliability: identify the 5 most common user queries, predict which file should surface for each, and confirm that file's structure would actually cause it to be retrieved. Flag cases where similar files could cause retrieval collisions or where critical content is buried too deep to surface.

Then check semantic consistency, not just literal consistency. Identify 3-5 core concepts the system depends on (key terms, shared workflows, defined entities). For each, extract how it is defined or used in every component where it appears and compare them. Flag any divergence in meaning, not just wording. Two files can use the same term to mean subtly different things, or different terms for the same thing, and pass every literal check while still producing an incoherent system.

Flag any content that is time-sensitive (pricing, contract terms, account states, dated methodologies) and lacks a "current as of" marker. Mark stale or undated time-sensitive content as Medium or Critical depending on whether a wrong decision could follow from it.

Apply the bet test: for every factual claim, ask "would I wager $100 this is correct?" If not, verify it against the source or flag it as unverified. Re-verify accuracy on any content added or modified during the completeness pass (Step 4).

### Step 6: Versioning check
If this deliverable updates something that already exists, identify what changed from the previous version. Verify that changes preserved everything that was previously working. Flag any cases where a fix or addition may have broken previously-correct content. Skip this step only if the deliverable is entirely new with no prior version.

### Step 7: Stress test and production-use failure prediction
Identify 3-5 scenarios designed to break this deliverable:
- What happens with unexpected or malformed input?
- What happens if a key file, dependency, or data source is missing?
- What happens if someone uses this outside its intended scope?
- What happens if two sources contradict each other?
- What happens at the boundary between covered and uncovered territory?

For multi-component systems, also test:
- Component interactions: does one skill's output work correctly as another skill's input?
- Trigger conflicts: do multiple skills fire on the same phrase or similar phrases?
- Scope gaps: what happens when the user asks something no component covers? Does the system fail gracefully or hallucinate an answer?
- Instruction conflicts: do any instructions contradict each other across components, or conflict with the model's default behavior?
- Instruction durability: which instructions will be silently overridden by the model's defaults, context limits, or competing user preferences in production? Predict which directives lose the fight and flag them rather than assuming they execute as written.
- Dynamic state: do any components write files or modify state that other components read? If so, test run order and partial-failure states. What happens if one skill runs before another, or if a write fails midway and a dependent skill reads stale or incomplete data?

Then shift from document-level testing to production-use failure prediction. Simulate the end user's first 5 interactions with this system. Walk through their most common workflows from start to finish. Ask: "What will go wrong in the first week of real use? What will the user try that has not been accounted for? Where will they hit friction, confusion, dead ends, or wrong output?" This is a different cognitive mode than verifying correctness. It is predicting failures that have not happened yet.

End-to-end behavioral trace: for the single most common workflow, where execution is available, actually run the query through the assembled system rather than simulating it, then judge the output for correctness and coherence, not just whether the components connected. A system where every component is individually correct and every reference resolves can still produce a wrong combined result when the interaction logic is flawed. Mark Verified if executed, Inferred if traced manually.

For each scenario and prediction: does the deliverable handle it gracefully, fail silently, or produce wrong output? Log any failures with severity.

### Step 8: Critic persona review
Read the deliverable as the specific end user of this specific output. Adapt your perspective to match the deliverable type:
- **Client-facing work:** "I paid for this. Does it solve my actual problem? Would I trust these numbers in a real meeting? Does anything feel generic or AI-generated?"
- **Code or technical output:** "Can I use this immediately without modification? What will break on first run? What is missing from the documentation?"
- **Internal documents:** "Does this save me time or create new work? Is anything here that I already know and do not need repeated?"
- **Skills or prompts:** "Will this execute correctly on first try? What input would produce wrong output? Are there instructions referencing capabilities the system does not have?"

For multi-component systems: do not review files in isolation. Walk through real user workflows end-to-end. Start with "I just received this project/workspace. I want to do [most common task]." Trace the entire path from user input through system response. Then repeat for the second and third most common tasks. Where does the experience break, confuse, or disappoint? Where does the user have to figure something out that should be obvious?

Log every concern as an issue with severity.

### Step 9: Enhancement pass
Once all Critical and Medium issues have been logged in the prior steps, identify 2-3 things that were not asked for but would meaningfully improve the output. Prioritize by end-user impact: what would make them say "how did it know I needed that?" Only recommend enhancements achievable within the current scope. Enhancements are implemented in Step 12, after those logged issues are fixed and verified, never before (resolution order: accuracy before completeness, core before extras).

### Step 10: Challenge pass
Identify every shortcut taken and every assumption made during the build. For each one: does it hold up under scrutiny? Look specifically for:
- Default approaches chosen over better alternatives
- Assumptions about user intent that were not confirmed
- Sections where "good enough" replaced "correct"
- Instructions that tell a system to do something it cannot actually do

Log anything that does not hold up as an issue with severity.

### Step 11: Forced re-examination
Assume the previous steps missed issues. Search again with higher skepticism, but look for DIFFERENT categories of issues than what you already found. If previous steps caught accuracy errors, now look for structural problems. If previous steps found completeness gaps, now look for logic flaws. If previous steps found formatting issues, now look for factual claims that sound confident but may be wrong. The value of this step comes from changing the angle of attack, not repeating the same checks harder.

### Step 12: Consolidate fixes and verify
This is the consolidation and regression-verification gate. Confirm every issue identified in Steps 0-11 is resolved. Verify that no fix broke anything that was previously correct. For Critical and Medium issues, note what was found, what was changed, and what was verified. Low-severity fixes may be grouped by category (e.g., "4 formatting issues in knowledge files, all fixed"). This consolidated log is the basis for the change log in the final output.

### Step 13: Final gate
This is the safety net after Step 12. Adopt the harshest reader's stance. Read the complete deliverable as a skeptical, time-pressed expert looking for what you would be embarrassed to have missed. Ask: "If this goes out exactly as it is right now, what is the worst thing that could happen?" If Step 13 catches something Step 12 missed, fix it, verify the fix did not break anything, and add it to the change log.

### Step 14: Output comparison
Internal gate, not output. Confirm to yourself that this pass produced material improvement over what a single pass would have delivered: identify 3-5 specific improvements that reduced risk, increased accuracy, or improved usability. If you cannot name them, you did not review hard enough; go back. Do not write this comparison into the response.

---

## After Review: Knowledge Codification

Only trigger this step if the work produced a reusable framework, template, method, checklist, prompt pattern, or workflow. If it did, ask: "What from this work should be captured as reusable IP?" Note the count of issues found by severity (Critical / Medium / Low) so the user can track improvement over time.

---

## Edge Cases

**User says "just give me a quick draft, don't QA it":** Respect the directive. Skip the review protocol for this deliverable. Resume on the next one.

**The deliverable is a brainstorm or options list:** Skip. Brainstorms are work-in-progress by nature. Only apply quality control when the output is intended to be delivered, sent, or deployed.

**User is iterating rapidly (5+ requests in sequence):** Run the full protocol on the final iteration only. Flag: "Ready to run QA on the final version when you are."

**Review finds Critical issues but user wants to ship immediately:** Flag the risk explicitly: "N Critical issues remain. If you ship now, [specific consequence]. Recommended quick fix: [fix]. Your call."

**Step 0 flags a problem but user overrides:** Proceed, but log the predicted downstream risks in the output. Do not suppress the warning. The user's override is respected, the risk is documented.

**Deliverable is mid-build (phase boundary):** Run the review protocol on what exists so far, plus Step 3 (validate execution environment) for the next phase. Present: "Here is what this phase produced. Issues found and fixed: [list]. What the next phase needs: [list]."

**Context is degraded (conversation is very long):** This is when quality drops most. Recommend starting a fresh session and re-reading relevant files. At minimum, force a full source re-read (Step 1) before any review pass.

---

## Output Format

Present the best verified deliverable first. Append a brief change log that is easy to scan:

- **Fixes:** Count by severity + one line per Critical or Medium fix (e.g., "2 Critical, 1 Medium: fixed cross-reference in File A, corrected stakeholder name in File B, aligned trigger phrases across 3 skills")
- **Enhancements:** One line per enhancement added
- **Unverified:** Any items that could not be verified, with what would be needed

Keep it short. A few lines, not a report. The deliverable is the main event.

For multi-component systems, note which components were modified.

If Critical issues could not be fixed (e.g., missing source data), state them clearly so the user can address them.

---

*Skill: quality-control | Version: 5.9 (OpenClaw)*
*Universal quality engine for single deliverables and multi-component systems.*
*No companion files required. Works as an overlay on any other skill, using available files, context, and tools when present.*
*Update: after any build where this skill missed an issue it should have caught.*
