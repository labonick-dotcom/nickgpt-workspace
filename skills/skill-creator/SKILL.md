---
name: skill-creator
description: Create, edit, or optimize a reusable agent skill from scratch or a working session. Use to turn a workflow into a skill, fix triggering, or tune a description.
---

# Skill Creator

A skill for creating new skills and iteratively improving them, built to produce deployable, self-contained skills that load and trigger correctly on this platform.

## When to use this skill

Use this skill whenever the user wants to build, edit, or improve a reusable skill. This includes: creating a skill from scratch, turning the current working conversation into a reusable skill, editing or optimizing an existing skill, running evals to test a skill, benchmarking skill performance, fixing a skill that under-triggers or over-triggers, or tuning a skill's description against the rest of the installed skill roster. Use it even when the user says "turn this into a skill" or "make this repeatable" without using the word "skill."

Boundary against adjacent skills: this skill **builds** skills. It does not run a build-scoping interview from scratch (route to the scoping skill if scope is fuzzy, see below), and it does not run the final quality pass itself (hand off to the quality-control skill, see "QA handoff"). It also is not for building custom projects, coaching workspaces, or any non-skill deliverable. If the user wants something built that is not a reusable skill, this is the wrong skill.

## How this fits the build chain

This skill is the build engine in the middle of a three-step chain:

1. A **scoping** step locks WHAT to build (deliverable, stakes, acceptance criteria, dependencies).
2. **skill-creator** (this skill) builds it.
3. A **quality-control** step verifies the finished skill against the locked scope.

A skill cannot programmatically call another skill on this platform. Where this chain references another skill, it means: consult that skill's methodology and run its protocol yourself, or tell the user to invoke that skill next. There is no automatic handoff.

Before building, check whether scope is already locked. If the user landed here with a clear, confirmed spec (they can state what the skill does, when it triggers, what the output is, and what "done" looks like), proceed. If the request is fuzzy ("I want a skill that grades things" with no acceptance criteria), do not start drafting blind. Say so and run a scoping interview first: "Before I build, let's lock the scope so the skill hits the right target. I'll run the scoping interview first." One question stream, then build. This prevents the most expensive failure: building the wrong skill perfectly.

After the draft is solid, hand off to quality-control for a verification pass before the user deploys (see "QA handoff" near the end). Keep build and QA separate so neither bloats.

At a high level, the build process goes:

- Confirm or lock scope (run a scoping interview if fuzzy)
- Write a draft of the skill
- Apply the deployment constraints (self-contained, description within the limit, references embedded)
- Test it (lightweight by hand, or the full eval loop when sub-agents and a filesystem are available)
- Check the trigger description against the existing skill roster for collisions
- Hand the draft to quality-control for verification
- Package or present for deployment

Figure out where the user is in this process and jump in to help them progress. If they say "I want to make a skill for X," help narrow it, write a draft, test it, and iterate. If they already have a draft, go straight to the test/improve loop. If they say "just vibe with me, no evals," do that instead. Be flexible about order.

## Communicating with the user

Skill creators range widely in technical familiarity. Read context cues. In the default case, "evaluation" and "benchmark" are fine, but "JSON" and "assertion" need a cue that the user knows them before you use them unexplained. Briefly define terms when in doubt. (For a technical user who works in AI and prompt engineering daily, that is the default; do not over-explain.)

---

## Platform format and deployment constraints (non-negotiable)

Skills on this platform follow the AgentSkills standard: a folder containing a `SKILL.md` with YAML frontmatter (`name` and `description` required) plus a markdown body. The agent loads the name and description at all times, and loads the full body only when the skill triggers. Every skill built here must satisfy all of these:

1. **Valid frontmatter.** `name`: lowercase letters, digits, and hyphens only, max 64 characters, no leading/trailing hyphen, no consecutive hyphens, and it must match the skill's directory name. `description`: a single line. Do not put angle brackets (`<` `>`) in frontmatter; they can inject into the system prompt.
2. **Description under 160 characters.** This is the platform's hard ceiling for the description shown to the agent. Count it. The description must say both what the skill does AND when to use it, in that budget. Because the description is the entire trigger surface and every skill's description sits in context at all times, keep it tight; do not pad toward the limit. Put detailed trigger phrases, anti-triggers, and collision boundaries in the body under "## When to use this skill," not in the description.
3. **Self-contained by default.** The skill should work when SKILL.md is the only file present. If the skill needs reference material, templates, schemas, or examples, the cleanest default is to embed them as clearly headed appendices at the bottom of SKILL.md (e.g., `## Appendix A: Output template`). The platform does support bundled resource folders (`scripts/`, `references/`, `assets/`) loaded on demand, and a script too large or too executable to inline can live in `scripts/` referenced with the skill's own base-directory path placeholder. Default to embedding; use bundled files only when a resource genuinely cannot be inlined, and say so when you do.
4. **Body length.** Keep the SKILL.md body focused (the standard recommends roughly under 500 lines / ~5,000 tokens for the always-on-trigger body). If a skill needs more than that, move detailed reference sections into bundled `references/` files loaded on demand, with clear pointers from the body.
5. **Output hygiene.** For any output the skill produces that the user will paste elsewhere, follow the user's standing formatting rules (no em dashes, no AI-tells, voice match) inside the generated output, not just in the skill text.

Verify all of these before presenting the skill as done. If a constraint cannot be met (e.g., the skill genuinely needs an executable script that cannot be inlined), flag it explicitly and explain the tradeoff rather than shipping a skill that will not load or deploy.

---

## Creating a skill

### Capture intent

Start by understanding intent. The current conversation may already contain the workflow to capture (the user says "turn this into a skill"). If so, extract from history first: the tools used, the sequence of steps, corrections the user made, input/output formats observed. Fill gaps with the user and confirm before proceeding.

If scope is not yet locked (see "How this fits the build chain"), run a scoping interview. Otherwise, confirm these four things, then build:

1. What should this skill enable the agent to do?
2. When should it trigger? (what user phrases and contexts)
3. What is the expected output format?
4. Does it need test cases? Skills with objectively verifiable outputs (file transforms, data extraction, code generation, fixed workflow steps) benefit from tests. Subjective-output skills (writing voice, design, art) often do not. Suggest the right default for the skill type; let the user decide.

### Write the SKILL.md

Fill in these components based on the captured intent:

- **name:** Skill identifier. When updating an existing skill, preserve the original name exactly. Follow the frontmatter naming rules above.
- **description:** The primary triggering mechanism, under 160 characters. Include both what the skill does AND when to use it. The detailed "when to use" lives in the body. Agents tend to *under*-trigger skills, so within the tight budget, lead with concrete intent and the highest-value use case rather than abstract description. (Example: instead of "A skill for dashboards," write "Build a dashboard from internal data. Use when the user wants metrics, charts, or company data displayed.")
- **the body:** the actual instructions, including a "## When to use this skill" section carrying the full trigger phrases, anti-triggers, and collision boundaries that did not fit in the description.

### Skill writing guide

#### Anatomy of a skill

```
skill-name/
├── SKILL.md (required)
│ ├── YAML frontmatter (name, description required)
│ └── Markdown instructions
└── Bundled Resources (optional, loaded on demand)
 ├── scripts/ - Executable code for deterministic tasks
 ├── references/ - Docs loaded into context as needed
 └── assets/ - Files used in output (templates, fonts)
```

Default to a single self-contained SKILL.md with reference material as headed appendices (see deployment constraints). Use bundled resource folders only when a resource genuinely cannot be inlined.

#### Progressive disclosure

Skills load in three levels:
1. **Metadata** (name + description): always in context.
2. **SKILL.md body**: in context whenever the skill triggers (keep focused, roughly under 500 lines).
3. **Bundled resources**: loaded as needed.

Keep SKILL.md focused. If approaching the length ceiling, add a layer of hierarchy with clear pointers to where the agent should look next. For large reference sections, include a short table of contents.

When a skill supports multiple domains or frameworks, organize by variant so the agent reads only the relevant section. These can be separate bundled reference files (`references/aws.md`, `references/gcp.md`) or, in a self-contained skill, headed appendices in the one file.

#### Principle of lack of surprise

Skills must not contain malware, exploit code, or anything that compromises security. A skill's contents should not surprise the user relative to its description. Do not build misleading skills or skills designed for unauthorized access or data exfiltration. ("Roleplay as X" is fine.) On this platform, third-party skills are treated as untrusted code, so a clean, transparent skill that does exactly what its description says is also what passes review and is safe to install.

#### Writing patterns

Prefer the imperative form.

Defining output formats:
```markdown
## Report structure
ALWAYS use this exact template:
# [Title]
## Executive summary
## Key findings
## Recommendations
```

Examples pattern:
```markdown
## Commit message format
Input: Added user authentication with JWT tokens
Output: feat(auth): implement JWT-based authentication
```

#### Writing style

Explain WHY things matter rather than stacking heavy-handed MUSTs. Today's models have good theory of mind; a well-explained reason produces better behavior than a rigid rule. If you catch yourself writing ALWAYS or NEVER in all caps, treat it as a yellow flag and reframe with reasoning instead. The one legitimate exception is a genuinely non-negotiable hard constraint such as the deployment constraints above (the 160-character description limit and the frontmatter naming rules are real platform ceilings, not stylistic preferences); those stay as hard rules because the reason IS the rule. Keep the skill general, not overfit to specific examples. Draft, then reread with fresh eyes and improve.

---

## Testing (lightweight, default)

Without sub-agents, there are no parallel runs and no baseline benchmarking. The test is a sanity check, and human review compensates for the lack of rigor. For each of 2-3 realistic test prompts:

1. Read the skill's SKILL.md.
2. Follow its instructions to complete the test prompt yourself, in the conversation.
3. Show the user the prompt and the output. If the output is a file, save it and tell them where so they can inspect it.
4. Ask for feedback inline: "How does this look? Anything you'd change?"

Write 2-3 test prompts that sound like something the user would actually say, not abstract ("Format this data"). Share them first: "Here are a few test cases I'd run. Look right, or want to add any?" Then run them one at a time.

Skip quantitative benchmarking, baseline comparison, and the eval viewer in this lightweight mode; they rely on sub-agents and a display. Focus on qualitative feedback and iterate.

---

## Improving the skill

This is the heart of the loop, in any environment. You have run the test cases, the user has reviewed, now make the skill better.

1. **Generalize from feedback.** Skills get used across thousands of prompts, not just your 2-3 examples. The user knows the examples cold, which makes iteration fast, but a skill that only works on those examples is useless. Avoid fiddly overfit changes and oppressive MUSTs. For a stubborn issue, try a different metaphor or a different working pattern rather than a tighter rule.
2. **Keep it lean.** Cut what is not pulling its weight. If the skill is making the model waste effort on something unproductive, remove the part causing it and see what happens.
3. **Explain the why.** Even when feedback is terse or frustrated, understand the underlying task and transmit that understanding into the instructions. Reasoning beats rigid structure.
4. **Look for repeated work.** If every test run independently wrote the same helper script or took the same multi-step approach, that is a signal to bundle that script once in `scripts/` rather than reinventing it each invocation. (In a self-contained skill, the analog is: if the skill keeps re-deriving the same structure, bake that structure into the skill as a template appendix.)

Take your time on revisions. Draft, reread anew, improve. Get into the user's head about what they actually need.

### The iteration loop

After improving: apply changes, rerun the test cases, get feedback, repeat. Keep going until the user is happy, feedback comes back empty, or you stop making meaningful progress.

---

## Trigger-collision check (run before finalizing the description)

A new skill does not live alone. The user runs roughly a dozen-plus installed skills that compete for activation. A description that triggers too aggressively will steal activations from an existing skill; one that is too narrow will lose activations it should win. This matters more on this platform because the eligible skill list is snapshotted when a session starts, so a wrong description locks in for the whole session.

Before finalizing the description:

1. Read the user's currently installed skills and their trigger conditions from the live roster (the available-skills list the agent sees, or the workspace skill files). Do not rely on a memorized list; the roster changes as the user adds, renames, or retires skills.
2. Compare the new skill's trigger phrases against each existing skill. Look for overlap: shared keywords, adjacent intents, phrasings that could match two skills.
3. For each genuine collision, flag it and resolve it one of two ways: (a) sharpen the new description to carve a clear boundary, or (b) add an explicit collision-boundary line in the body's "When to use" section naming the competing skill and when it should win instead. Because the description budget is tight, the body is usually where the boundary lives; keep the description clean and let the body disambiguate.
4. Report the collisions you found and how you resolved them, briefly. Do not silently skip a description that overlaps an existing skill.

The explicit "for X, use [other skill] instead" boundary is the single most effective collision-prevention tool. State it in the body whenever two skills are adjacent.

---

## Description optimization (requires sub-agents and a CLI)

The description is the primary trigger mechanism. After building or improving a skill, offer to optimize it for triggering accuracy. This requires sub-agent spawning and a model-runner CLI. When those are not available, do the manual roster collision check above instead.

### Step 1: Generate trigger eval queries

Create ~20 queries, a mix of should-trigger (8-10) and should-not-trigger (8-10). Save as JSON:
```json
[
 {"query": "the user prompt", "should_trigger": true},
 {"query": "another prompt", "should_trigger": false}
]
```
Queries must be realistic, concrete, detailed (file paths, job context, company names, casual phrasing, typos). Vary length. Focus on edge cases.

- **Should-trigger:** different phrasings of the same intent, formal and casual, cases where the user does not name the skill or file type, uncommon use cases, cases where this skill competes with another but should win.
- **Should-not-trigger:** the near-misses are the valuable ones. Queries sharing keywords with the skill but actually needing something else. Avoid obviously-irrelevant negatives ("write a fibonacci function" for a PDF skill tests nothing).

Bad: `"Format this data"`. Good: `"ok my boss sent me an xlsx (in downloads, 'Q4 sales final FINAL v2.xlsx') and wants a profit margin % column, revenue's in col C costs in col D i think"`.

### Step 2: Run the optimization loop

Save the eval set, then run the optimization loop in the background using your local eval tooling: split the queries 60/40 train/test, evaluate each query 3 times for a reliable trigger rate, propose description improvements based on failures, re-evaluate, and iterate up to ~5 times, selecting the best description by **test** score (not train) to avoid overfitting. Tail the output periodically to update the user. (If a packaged loop script is bundled with this skill, invoke it from the skill's base directory; otherwise drive the loop manually with sub-agents.)

### Step 3: Apply the result

Take the best description, update the SKILL.md frontmatter, show before/after and scores. Re-verify it still satisfies the 160-character description limit.

### How triggering works

Skills appear in the agent's available-skills list with name + description; the agent decides whether to consult one based on the description. The agent only consults skills for tasks it cannot easily handle alone, so trivial one-step queries ("read this file") may not trigger a skill even on a perfect description match. Eval queries must therefore be substantive enough that consulting a skill is actually worthwhile. Note that the eligible list is snapshotted at session start and reused for the session, so test against a realistic full roster.

---

## QA handoff (run before the user deploys)

Once the skill draft is solid and tested, hand it to quality-control for a verification pass against the locked scope. Do not skip this for any skill the user intends to deploy; the first pass is never the final pass.

State the handoff plainly: "Draft's solid. Applying quality-control to verify it against the scope before you deploy." Then apply the quality-control skill's Review Protocol to the finished SKILL.md. A skill cannot call another skill programmatically, so you consult quality-control's instructions and run its protocol yourself, or tell the user to invoke it next. Use the locked scope's acceptance criteria as the checklist. At minimum run its core moves: re-read the skill against the acceptance criteria, run a dealbreaker scan (right format, right trigger, does what was asked), check the deployment constraints, and do one forced re-examination from a different angle than your build pass.

Keep build and QA separate. This skill builds; quality-control verifies. Merging them makes both worse and bloats the file.

---

## Advanced: full eval loop (requires sub-agents and a filesystem)

Everything below requires sub-agent spawning and a writable filesystem. Skip entirely in the lightweight mode.

The rigorous version of testing spawns, for each test case, two sub-agents in the same turn: one with the skill, one baseline (no skill for new builds; the old version for improvements, snapshotted first by copying the folder). Save outputs to a per-iteration, per-eval workspace folder (e.g., `<skill-name>-workspace/iteration-<N>/eval-<ID>/`). Capture total tokens and duration from each task result as it arrives (often the only chance to get this data). Draft objectively-verifiable assertions while runs are in progress. Grade with a grader sub-agent against the assertions, aggregate the benchmark, do an analyst pass for non-discriminating assertions and high-variance evals, then generate a review viewer (use a static export in a headless environment; never hand-write the HTML). Read the human's feedback when they are done, improve, and rerun into the next iteration folder.

Blind comparison (an independent agent judges two outputs without knowing which is which) is available for "is the new version actually better?" questions, but most builds do not need it; the human review loop is usually enough.

In a headless environment, generate the eval viewer BEFORE evaluating outputs yourself so the human sees examples first. Put it on the task list so it happens.

Packaging works anywhere with a filesystem: package the skill folder into the platform's installable skill format and point the user to the resulting file. Default to presenting the single SKILL.md for the user to save, and produce a package only when they ask for it.

---

## Updating an existing skill

- **Preserve the original name** (directory and `name` frontmatter), unchanged. If the installed skill is `research-helper`, output `research-helper`, not `research-helper-v2`.
- **Copy to a writeable location before editing** (e.g., a temp folder); the installed path may be read-only. Edit and package from the copy.
- Re-run the trigger-collision check and the deployment-constraint check after editing, not just on new builds.
- Hand off to quality-control before redeploying.

---

## The core loop, for emphasis

- Confirm or lock scope (run a scoping interview if fuzzy)
- Draft or edit the skill
- Apply the platform deployment constraints
- Test (lightweight by hand, or the full eval loop when sub-agents and a filesystem are available)
- Run the trigger-collision check against the installed roster
- Hand the draft to quality-control
- Present the finished single SKILL.md for saving, or package it

---

*Skill: skill-creator | Version: 2.1 (OpenClaw)*
*Build engine in the scope -> build -> QA chain. Pairs with a scoping step (front) and quality-control (back).*
*Lightweight testing by default; full eval loop available when sub-agents and a filesystem are present.*
*Update: after any skill that under-triggered, over-triggered, collided with an existing skill, or failed to load/deploy.*
