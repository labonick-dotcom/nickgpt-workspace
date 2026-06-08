# Methodology: The Build Chain (Coaching Project Build + Cowork Discipline)

> Summary: The pre-build-scoping → build → quality-control chain as usable documentation. Covers the six-phase coaching project build pipeline (Brad Figler reference case), the coaching-project-build skill, Cowork prompt-engineering best practices, quality standards discovered, the ten obstacles and their solutions, session strategy patterns, and the coaching-ops Cowork workspace playbook with its data-integrity rules.

## The Six-Phase Coaching Project Build Pipeline

Built from the Brad Figler engagement. The coaching-project-build skill (in Cowork) automates Phases 0-5; this is the thinking behind it.

**Phase 0: Intake Brief Assembly (NickGPT).** Coaching-prep skill runs first (prep brief: AI maturity tier, personality, voice signals, session arc, pre-scope). Then scan raw documents, build a file manifest (filename, type, size, account assignment), flag largest files (transcripts over 50KB need context management) and voice source material.

**Phase 1: Generate and Run the Processing Prompt (Cowork Task 1).** The master processing prompt reads every raw document and produces consolidated source files (Brad: 28 docs → 11 source files). Key designs: sequential processing with disk-based extraction (not parallel sub-agents — Cowork processes sequentially); one file at a time, extract to working directory, move on; cross-reference phase at the end (master stakeholder list, master action items, number verification, voice inventory); Phase 1 stops and presents output for Nick's review.

**Phase 2: Generate and Run the Builder Prompt (Cowork Task 2).** ALWAYS a fresh Cowork task (clean context — Phase 1 consumed it). The project-builder skill processes source files into upload-ready knowledge files. The prompt tells the builder the client is the end user (replace "Nick" with the client name); pre-approves all data inclusion (no sensitivity redaction for deal documents); specifies split-vs-compress rules for large account files; includes merge guidance for the 12-file cap.

**Phase 3: QA Audit (NickGPT).** Upload all delivered files back into NickGPT. Run the **8-dimension audit:** Completeness, Accuracy, Voice Quality, Architecture, Usability, Innovation, Client Alignment, Production Readiness.

**Phase 4: Session Strategy (NickGPT).** Generate the minute-by-minute session arc. The project is pre-built, so the session shifts from "building together" to "revealing what's built and teaching daily usage."

**Phase 5: Test Cases (NickGPT or Claude.ai).** Run 10 test cases: pre-call prep, post-call processing, executive outreach, competitive coaching, MEDDPICC analysis, weekly review, champion enablement, voice calibration, business case, comp impact.

**Phase 6: Package, Deploy, and Session.** Create the project in Claude.ai, upload files, configure starters, run the session, schedule walkthrough.

## The coaching-project-build Skill

Cowork skill automating Phases 0-5. At `/mnt/skills/user/coaching-project-build/`. Structure: SKILL.md (348 lines, 6-phase pipeline, 12 edge cases, quality gates, metrics tracker); references/phase1-template.md (parameterized processing prompt); references/phase2-template.md (parameterized builder prompt); references/qa-checklist.md (8-dimension audit); references/session-template.md (minute-by-minute arc); references/test-cases-template.md (10 test cases). Parameterization variables: [CLIENT_NAME], [CLIENT_TITLE], [COMPANY], [PRODUCT_DESCRIPTION], [ACCOUNT_1..N], [RECORDING_TOOL], [DICTATION_TOOL], [METHODOLOGY], [SIGN_OFF], [PROJECT_SLUG], [DOMAIN_TYPE], [VOICE_CONFIDENCE], and others. Target pipeline times: Client 1 (Brad) ~14 hrs (no skill); Client 2: 4-6 hrs; Client 3-5: 2-3 hrs; Client 10+: 90 min.

## Cowork Prompt-Engineering Best Practices

1. **Context window management is non-negotiable for large document sets.** Brad's build had 500KB+ raw. Every processing prompt: working-directory creation (mkdir at start); incremental extraction to disk (read, extract to .md, move on); "Do not try to hold multiple large files in memory"; save-to-disk-before-reading-next.
2. **Always use a fresh Cowork task for Phase 2** — never run Phase 1 and Phase 2 in the same task.
3. **Sub-agent framing does not work in Cowork Phase 1** — Cowork processes sequentially. Reframe as sequential phases A-F with explicit extraction-to-disk discipline.
4. **Scan the folder before processing** — Google Drive downloads append timestamps to folder names (e.g. "Charter-20260527T002950Z-3-001"). Include a Step 0 that runs `find`.
5. **The prompt IS the quality.** Brad's Phase 1 prompt = 4,665 words; Phase 2 = 2,351 words. Complete operational specifications, not short instructions. Don't shortcut.
6. **Tell the builder what exceptional looks like** — a "What Exceptional Looks Like" section with 7 specific scenarios at the end of both prompts.

## Quality Standards Discovered

**Voice profile:** minimum 10 vocabulary items, 5 never-uses, 8 calibrated examples, 10 anti-patterns. Voice confidence 4/5 requires 5+ emails, 30+ transcript quotes, LinkedIn posts, and at least one other content type. The 3-layer content-generation self-check (personal voice, universal AI, structure/tone) is mandatory in every voice file. Highest-leverage gap: cold outreach emails. **Knowledge file architecture:** 12-file cap is tight for 5+ accounts — pre-plan merges (comp into context, methodology into context); split top-2 account files (overview + deal detail); standalone stakeholder directory is high-value (name disambiguation differentiates); templates file extends lifespan. **Instructions:** under 400 words; every instruction directive ("Always"/"Never"/"When X, do Y"), never descriptive. **Cross-file consistency:** every pricing figure, comp number, stakeholder name identical across files; build a verification table during QA (Brad: zero inconsistencies across 13 files).

## The Ten Obstacles & Solutions (Brad Build)

1. **Drive folder names have timestamps appended** → Step 0 to scan actual structure, map expected→real paths.
2. **Cowork context overflow on large sets** (28 files / 500KB+) → sequential processing with disk-based extraction.
3. **Sub-agent framing confused Cowork** → reframe as sequential phases A-F (project-builder Phase 2 uses Claude Code sub-agents correctly).
4. **Sensitivity flags exclude needed data** (skill auto-flags emails/financials to EXCLUDE) → add a "PRE-APPROVED" build rule to include all data and note in gap analysis.
5. **12-file cap vs rich deal intelligence** → merge comp/priorities into context; pre-plan fallback merges; builder stayed at exactly 12.
6. **"Update project" not producing downloadable files** (Claude read "labeled blocks BEFORE/AFTER" as inline text) → require explicit ".md file" format with anti-pattern language; batch all files at end with REPLACE/NEW labels; cross-reference consistency rule. Same root cause found and fixed in **Kevin Castro's project.** Design rule: always say "produce the COMPLETE updated file as a downloadable .md file, not as in-chat text, code blocks, or diffs"; never use "labeled blocks"/"BEFORE/AFTER"; require Code Execution and File Creation toggled ON.
7. **Internal discrepancies inside client source documents** (e.g., a summary figure not matching its own detail page) → flag inline rather than silently resolving; surface for the client to confirm. (The specific Brad pricing example is dropped — irrelevant; Brad is a completed 1:1 coaching + custom-project-build client.)
8. **Pablo Ramirez stakeholder ambiguity** → flagged UNRESOLVED; ask Brad which Pablo.
9. **Plaud transcription name errors** ("Suri Limantara" → Zuri/Saudi/Zoli/Zudi/Rudy; "Danielle Pearson" → "Peterson"; "NK" → "Bova") → Name Disambiguation table, marked "load-bearing."
10. **Phase 1 + Phase 2 initially one Cowork task** → split into two; Phase 2 gets clean context; 11 source files carry Phase 1 forward.

## Session Strategy Patterns

**Core shift: reveal, don't build.** Pre-built project changes "let's build together" into "let me show you what's already built." **The 6 demo moments that create "How did it know that?":** (1) pre-call prep referencing meetings from 3 weeks ago; (2) name resolution (recording-tool errors auto-corrected); (3) voice match in a follow-up email; (4) comp impact math (deals → paycheck); (5) competitive coaching naming unarticulated vulnerabilities; (6) executive outreach referencing the target's comp incentives. **The referral seed:** "[Name], this project knows your deals better than any tool you've ever used because it was built on YOUR data. If anyone on your team or in UYSP could use something like this, I'm taking clients." Do not push harder.

## What To Do Differently Next Time (15 lessons)

Start the skill from the beginning; process intake in NickGPT not Cowork; ask for 3-5 cold outreach emails at intake; pre-build the meeting summary format spec; set up the project in Claude.ai 48 hrs before the session; run all 10 test cases the night before; have the client's actual Plaud transcript ready for the live demo; track effective hourly rate per client; simplify conversation starters (1-3 lines, no file references); include the full deliverable package as standard; apply quality-control at every phase boundary; educate clients on the "update project" limitation (one-thread-per-account, update Friday); recommend Claude Max during the session; test the "update project" instruction before delivering; deploy the Ask Ian Reasoning Layer for UYSP members.

## The coaching-ops Cowork Workspace Playbook (Christi Reference Case)

The replicable method for building a coach's full Cowork operating workspace. Model: Nick uses a Claude project (planning, prompt-drafting, strategy) and a SEPARATE Cowork session (execution against the client's synced workspace folder). Prompts built and QA'd in the project, run in Cowork.

**What you build (layers):** (1) Client intelligence layer — one folder per client with `client-profile.md` (facts only), `coach-intel.md` (INTERNAL strategic playbook), `session-notes.md` (INTERNAL running log), `intake-notes.md` (IMMUTABLE source record), `transcripts/`. (2) Context layer — `voice-and-tone.md` (master voice profile, single source of truth), `[program]-methodology.md`, `coaching-philosophy.md`, `voice-library/`. (3) Skills layer — four core skills triggered by voice command: post-call-summary, pre-call-prep, new-client-intake, progress-scorecard (each with fallbacks). (4) Automation layer — call-recording connector + email connector, no third-party tools/code. (5) `CLAUDE.md` operating contract — always-loaded, lean, integrity-critical. (6) Companion Claude.ai chat project.

**Decisive architecture choices:** Cowork-only (no Make/Zapier/code — non-technical end user); voice-in/output-out (WhisperFlow standard; assume no keyboard shortcuts/right-click); **Dropbox for Desktop** as sync (Google Drive has a VM-mounting bug with Cowork on Mac; iCloud has data-loss risk); skills run as uploaded zips in Cowork's registry, NOT folder-loaded (folder-loading has silent-failure bugs; the `.plugin` format is a hallucination, never reference it); three internal files + one immutable record + transcripts per client (separate internal intelligence from client-facing output); the call-recording connector (Fathom MCP) solved the front of the automation pipeline, making the heavy Make/Zapier layer largely unnecessary.

**Build sequence:** discovery/scoping → confirm live schema from a real reference file (for Christi: Sara Mathes) → build context layer (voice profile is highest-leverage) → build skills one at a time to a rigorous standard (load full context, build, adversarial critique, refine, simulate against real client data) → populate client folders (read-only inventory BEFORE bulk creation) → write CLAUDE.md → pre-delivery audit (check for PARTIAL header presence, not just missing files; confirm Claude Desktop version) → deliver live on a call (demo every skill; never send written instructions as substitute; never send .md files as email attachments — macOS blocks them) → enrich and iterate post-delivery.

## Data-Integrity Rules (Forged on Christi, the most transferable asset)

- **Verify the value against the source, not just that the write landed.** THE DEFINING LESSON. An enrichment pass that verified writes landed still shipped four wrong values (a transposed code, a wrong email, a scraped vendor phone number, an unsupported payment plan) because it never compared back to source.
- Quote the source for every extracted value when reporting.
- **Do not scrape adjacent data** (footers, vendor info, other people's data) — confirm it's the client's, never the first matching string.
- **Preserve scored ties** (e.g. Enneagram RHETI within ~2 points — record both, flag the tie; never collapse to the higher number).
- Profile and coach-intel must agree; correcting one means checking the other.
- A fresh document can supersede stale data, but **never intake-notes** (immutable; superseding fact goes in session-notes).
- Never invent client data ("Unknown, confirm with [coach]," never a guess).
- Self-audit after any multi-file EXTRACTION pass (not generation).
- A deliberate disagreement stays a flag (don't force an invented reconciliation).
- **Propose-then-execute** on anything touching populated files (caught every overwrite error; protects against overwrites but NOT accuracy errors — both controls required).
- One operation type per pass, never bundle (mechanical fills vs interpretive prose = separate passes; format/em-dash cleanup standalone).
- Run a content-fidelity audit (source-vs-folder), not just a presence audit, after large extraction.
- QA write prompts for partial-failure and regression, not just correctness.
- Check blast radius before correcting an interpretive value (a wrong Enneagram type shapes a whole playbook).
- Name the trap — Cowork executes literally; spell out edge cases and what NOT to touch.
- Confirm the file version before editing (know the line count of the production file).

## Known Landmines (every coaching-ops build)

Client roster data is rarely what you assume (read-only inventory first); filenames lie (map every source file to a real person); the member/billing database is for enrichment not active-roster truth (call history is the reliable active signal); a membership-level field may encode coach assignment; confirm annual vs arc-based renewal cycles before trusting auto-calculated dates; bash `rm` returns false success (use native delete tools); departed-client folders default to KEEP unless the client says otherwise.

---
*Source: 10_Coaching_Project_Build_Methodology.md, coaching-ops-cowork-build-playbook.md*
