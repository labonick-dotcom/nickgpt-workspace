# Methodology: The Ask Ian Reasoning Layer

> Summary: The reusable system for baking Ian Koniak's sales reasoning into a 1:1 coaching client's custom Claude project so they get Ask-Ian-quality strategic output natively. Three-artifact architecture (Master Reservoir, Knowledge File, Instruction Block), the build process, the two key design decisions, the IP boundary, per-client deployment, and validation criteria. Built and validated June 2026; first client Brad Figler.

## The Problem This Solves

Coaching clients who use Ask Ian round-trip constantly between Ask Ian and Claude: they get a strategic frame from Ask Ian, then feed it to Claude to get the output in their own voice. The real insight (from client feedback): what makes Ask Ian's output superior is **not Ian's voice or content — it is his strategic reasoning**, the reframe moves he applies (turning "catching up after PTO" into "positioning as the ongoing counterpart"). Clients want Ian's judgment applied to their situation, in their own voice. One client said Ask Ian's communication style was **"a bit much."** The deliverable is a **reasoning layer, not a voice clone or content dump.**

## The Architecture: Three Artifacts, Kept Separate

Conflating these is the main failure mode.

1. **Master Reservoir** (private, never ships to clients). Everything captured of Ian's content, exhaustive and source-tagged. Built in Cowork. Feeds two downstream consumers: client knowledge files and the future **Ask Ian GPT 2.0.** Optimize for maximum capture.
2. **Ask Ian Knowledge File** (the client deliverable). Tight, distilled. Two versions: **Core (~2,500 words)** — the reasoning engine, goes in every client project including Claude Pro; **Appendix (~1,800 words, optional)** — deeper worked examples, full talk tracks, analogies; add only for heavy users on higher tiers.
3. **Project Instruction Block** (the activation layer). Pasted into the client project's custom instructions. Tells Claude when and how to use the knowledge file.

The reservoir feeds the knowledge file; the knowledge file + instruction block go in the client project.

**Why lean beats comprehensive:** a knowledge file stuffed with everything retrieves worse (Claude pulls chunks; a bloated file means more noise per query, weaker matches, competing with the client's own deal files). A tight file built around how Ian thinks outperforms a giant file of his content. The lean version is both higher-quality design and a cleaner IP position.

## The Build Process

**Step 1: Build the reservoir (Cowork).** Point Cowork at the folder holding all Ian source material + coaching call transcripts. Use parallel sub-agents (wide mechanical work is Cowork's strength). Key prompt rules (hard-won): inventory first (Step 0) so every sub-agent works from the same file list; **do not summarize transcripts** (clean and keep whole — summaries strip the reasoning); no fabrication (a gap is fine, an invented Ian quote is not); mark inferred speakers in group-call transcripts; clean transcripts before mining reasoning (sequencing matters); source-tag everything. **The single most valuable source is Ian's coaching call transcripts, not his website or workbooks** (workbooks give clean frameworks; transcripts give the live reasoning the workbooks never capture).

**Step 2: Distill the knowledge file (in Claude, by hand).** A judgment job, not a volume job — one editorial hand making hundreds of small keep/cut calls (parallel agents produce a bloated average, the opposite of the goal). Read the strategic-reasoning and voice folders (~22,000 words), skim methodology pillars, cut to the core. **60+ reasoning moves collapse into ~8 master patterns.** Teach each pattern with one sharp example. Working structure (Core file): Part 0 (how to use this file), Part 1 (reasoning engine: 8 patterns, each as pattern + logic + when it fires + one example), Part 2 (methodology at concept level), Part 3 (Ian's voice, used only on request).

**Step 3: Build the instruction block.** Strategic-by-default, voice-on-request. Default behavior applies Ian's reasoning and outputs in the CLIENT's voice; Ian's actual voice engages only when explicitly asked. A non-sales off-ramp keeps it out of the way on non-sales tasks; a depth rule prevents over-application on trivial asks.

## The Two Key Design Decisions

- **Strategic-by-default, voice-on-request.** Clients want Ian's judgment in their own voice. Forcing Ian's voice on every output is what made Ask Ian feel "a bit much."
- **The reasoning is the product, the voice is optional seasoning.** The reframe moves are what clients round-trip for; the before/after examples make the reasoning transferable. Cut the examples and you're back to framework definitions, which the client already has.

## IP Boundary (modeled on the UYSP Light boundary)

Concept-level frameworks, never the full proprietary instrument:
- Capture and bake in Ian's reasoning patterns and methodology (method — fine to use).
- Use short representative quotes for voice, not full talk tracks.
- **Never reproduce the complete PREDICT scorecard questions, full workbook exercises, or complete sequences.** Name and explain the concept; do not reproduce the instrument.
- **Strip confidential member-deal details.** Reservoir transcripts name real companies and member deals; generalize in the client file (a named deal becomes "a partner-blocked deal"). Keep Ian's public credentials and public cultural references.
- **Relationship note:** distributing distilled Ian IP to private coaching clients while serving as UYSP Resident AI Strategist is better as something Ian knows about than discovers. The **July quarterly review** is the natural moment to surface it. The content boundary handles the IP risk; this is the relationship angle.

## Per-Client Deployment

Send the client three things: (1) Ask_Ian_Knowledge_File_Core.md, (2) Ask_Ian_Knowledge_File_Appendix.md (optional, heavy users only), (3) the instruction block pasted into custom instructions. Tell the client: paste instructions first, then start a FRESH chat; keep "Ask Ian" in the filename (the instruction block references it by name); upload files alongside other project knowledge.

**Critical per-client customization** (fit to each client's existing project, never paste blind):
- **Check for instruction conflicts.** Brad's "lead with the answer, no preamble" collided with "surface the strategic frame" — resolved by wording the frame as the lead itself.
- **Point the voice step at the client's own voice file** and honor any existing read-then-self-check rule.
- **Defer to the client's methodology stack.** If the client has a methodology file (Brad's 09 had MEDDPICC, Nasralla, Challenger, UYSP), the Ask Ian block defers to it as authority on which framework applies when.
- **UYSP-member vs non-member:** adjust the instruction's file pointer accordingly.

## Validation: What a Working Install Looks Like

Tested on Brad's project with a real stalled-deal prompt. A pass shows: (1) reads account files, then the Ask Ian layer, before answering; (2) leads with the strategic reframe (diagnosed get-to-power, not urgency), not an email; (3) defers to the client's stack (champion test and MEDDPICC as spine, Ian's reasoning layered on top); (4) output in the client's voice, anchored in real account numbers, no corporate filler; (5) asks one sharp question rather than guessing. **The single most important signal: does it lead with the strategic move before drafting anything?** Test-prompt template: give the project a real stalled-deal or executive-access scenario from the client's pipeline, using real stakeholder names, and confirm the five behaviors.

---
*Source: 16_Ask_Ian_Reasoning_Layer_Methodology.md, 10_Coaching_Project_Build_Methodology.md*
