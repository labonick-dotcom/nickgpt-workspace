# MANIFEST — Coverage Map & Verification

> Summary: Provenance and verification record for the OpenClaw workspace rebuild. Maps each of the 23 source files to the output files its content landed in, logs every cross-source conflict (kept inline, never silently resolved), records redactions (none), and lists orphans/gaps. Built June 8, 2026 from three source folders: `Buddys data`, `Nicks business data`, `Nicks Personal Information`.

## Output Inventory

- **Root:** MEMORY.md (always-loaded index), MANIFEST.md (this file).
- **buddy/ (7 files):** buddy-profile, buddy-health-history, buddy-health-labs, buddy-health-medications, buddy-health-allergies-and-skin, buddy-behavior-and-care, buddy-health-action-plan.
- **nickgpt-business/ (27 files):** business-deep-context, business-microsoft-career, business-career-history, business-track-record, business-nickgpt-brand, business-transition-goal, business-positioning; clients-overview, clients-figler, clients-civalier, clients-barry, clients-coakley, clients-castro, clients-holmes-wan, clients-seminar-prospect, clients-christina, clients-pipeline-and-referrals; uysp, uysp-people, uysp-projects, uysp-webinar; methodologies, methodologies-coaching-lifecycle, methodologies-sales-frameworks, methodologies-build-chain, methodologies-implementation-and-openclaw, methodologies-ask-ian-layer.
- **personal/ (12 files):** identity-and-values, life-history, goals-and-vision, family, relationships-romantic, karly-profile, friendships-and-support-network, health-and-training, substances-and-recovery, leadership-igknight, personality-and-patterns, career-and-professional-identity.

**Total: 46 detailed files + MEMORY.md + MANIFEST.md = 48 files. All detailed files ≤ ~20KB; MEMORY.md ≤ 10KB.**

## Source-to-Output Map

### Buddys data → buddy/
| Source file | Landed in |
|-------------|-----------|
| Buddy_Knowledge_Base_Combined_Batch1_Batch2.md | buddy-profile (identity, breed, weight, household), buddy-health-history (diagnoses, 2019–2022 chronology, vets), buddy-health-labs (early panels, vaccine titers), buddy-health-medications (full historical med/supplement tables, incl. **Clonidine + Rimadyl restored here**), buddy-health-allergies-and-skin (IDAT, food allergy), buddy-behavior-and-care (providers, protocols, routine, diet, preferences), buddy-health-action-plan (insurance, open flags) |
| Buddy_Knowledge_Base_Combined_Batch3_Batch4.md | buddy-health-history (Vet 2 Door visits 2023–2026, masses, thyroid trend), buddy-health-labs (Feb 2025 + Apr 2026 panels, microbiome), buddy-health-medications (cyclosporine, prednisolone, sedation protocol, tapers), buddy-behavior-and-care (Feb 2024 dog-freeze, sedation anxiety), buddy-health-action-plan |
| Buddy_Knowledge_Base_Combined_Allergy_Record_Batch5.md | buddy-health-allergies-and-skin (what's been tried, topicals, environmental controls, philosophy, Canfield questions), buddy-health-history (May 2026 MSU thyroid resolution), buddy-health-labs (MSU thyroid panel, NT-proBNP), buddy-behavior-and-care (May 2026 food-refusal regression), buddy-health-medications (CBD, Nupro discontinuation), buddy-health-action-plan |
| **Nicks Personal Information / nick_knowledge_base_batch4.md** (Buddy section — cross-folder) | **Integrated by orchestrator into** buddy-profile (46% DNA conflict; "mirror of me" framing), buddy-health-history (Feb 11/12 2026 visit detail + date conflict), buddy-health-medications (Cytopoint-current conflict; hydroxyzine/hydrocortisone naming note), buddy-behavior-and-care (trainers Sarah/Cathy; "Chill"/"Find it" cues) |

### Nicks business data → nickgpt-business/
| Source file | Landed in |
|-------------|-----------|
| nick-personal-business-intelligence-v11.md | business-deep-context, business-microsoft-career, business-career-history, business-nickgpt-brand, business-transition-goal, business-positioning, methodologies (operating principles), uysp |
| 06_Workshop_and_Speech_IP_Inventory.md | business-positioning, methodologies-sales-frameworks, uysp-people |
| 07_Key_Messaging_and_Language_Reference.md | business-positioning, uysp-people, uysp-projects |
| 08_1on1_Coaching_Playbook__3_.md | methodologies-coaching-lifecycle, methodologies-sales-frameworks, business-track-record, clients-figler |
| 09_Client_Communication_Templates.md | methodologies-coaching-lifecycle (templates + voice rules) |
| 10_Coaching_Project_Build_Methodology__2_.md | methodologies-build-chain, business-track-record, clients-figler, clients-castro |
| 11_OpenClaw_Build_and_Architecture.md | methodologies-implementation-and-openclaw, business-track-record (benchmark), business-nickgpt-brand |
| 12_Client_Implementation_and_HubSpot_Build.md | methodologies-implementation-and-openclaw |
| 13_Clients_and_Pipeline.md | all clients-*.md, uysp, uysp-people, uysp-projects, business-nickgpt-brand |
| 14_Service_Model_and_Pricing.md | business-nickgpt-brand, business-track-record, clients-figler, clients-civalier, uysp, methodologies-coaching-lifecycle |
| 15_Tools_and_Market_Intelligence.md | business-microsoft-career, business-positioning (ICP), methodologies-implementation-and-openclaw, clients-civalier |
| 16_Ask_Ian_Reasoning_Layer_Methodology.md | methodologies-ask-ian-layer, clients-figler, uysp-projects |
| UYSP_Advisory_Engagement_v2_April20.md | uysp, uysp-people, uysp-projects (retainer conflict captured) |
| coaching-ops-cowork-build-playbook.md | methodologies-build-chain, clients-civalier, clients-pipeline-and-referrals, business-track-record |

### Nicks Personal Information → personal/
| Source file | Landed in |
|-------------|-----------|
| nick-labo-master-context.md | all 12 personal/ files (comprehensive master, distributed by topic) |
| nick_knowledge_base_batch1.md | identity-and-values, health-and-training, substances-and-recovery, personality-and-patterns, relationships-romantic, goals-and-vision, leadership-igknight, career-and-professional-identity, family, life-history |
| nick_knowledge_base_batch2.md | life-history, family, relationships-romantic, leadership-igknight, substances-and-recovery, career-and-professional-identity, friendships-and-support-network |
| nick_knowledge_base_batch3.md | relationships-romantic, goals-and-vision, substances-and-recovery, health-and-training, personality-and-patterns, leadership-igknight, career-and-professional-identity |
| nick_knowledge_base_batch4.md | life-history, relationships-romantic, substances-and-recovery, leadership-igknight, friendships-and-support-network, career-and-professional-identity, health-and-training; **+ Buddy vet section → buddy/ files (see cross-folder row above)** |
| _PATTERN-ANALYSIS.md | personality-and-patterns (the "Perpetual Preparation Loop" analysis) |

## Conflict Log

### STILL OPEN (0)
*All conflicts resolved.*

### RESOLVED (Nick confirmation June 8 2026, except where a signed document is noted)

**Buddy**
1. **Weight Feb 2024 (73.5 vs 85 lbs):** Resolved at the Feb 2024 clinical 73.5 lbs (85 was an inaccurate owner reading). Separately, **current weight confirmed ~72 lb** (June 2026). → buddy-profile.md.
2. **Thyroid medication status:** Resolved — Buddy is NOT on thyroid medication and is not being started (May 2026 MSU panel / Batch5 authoritative). → buddy-health-medications.md, buddy-health-history.md.
3. **DNA breed %:** Resolved with the full confirmed breakdown — 36% Boxer, 14% American Pit Bull Terrier, 13% Chow Chow, 12% Chinese Shar-Pei, 8% Cocker Spaniel, 8% American Eskimo, 1% Australian Shepherd. Both prior figures (34% / 46%) superseded. → buddy-profile.md.
4. **Cytopoint status:** Resolved — single injection Dec 2022, never repeated, discontinued by owner choice (immune-system concern). NOT a current treatment; the Feb 2026 "current" note was wrong. → buddy-health-medications.md.
5. **Hydroxyzine vs hydrocortisone:** Resolved — the drug is **Hydroxyzine** (as-needed when really itchy). The "hydrocortisone" reference was a naming slip; removed. → buddy-health-medications.md.
6. **Feb 2026 visit date (Feb 11 vs 12):** One-day discrepancy, immaterial; both retained inline, no change needed. → buddy-health-history.md.

**Business**
7. **UYSP retainer figure:** Resolved — **$4,000/month**, confirmed by the **signed advisory agreement (effective May 1, 2026)**. The earlier draft's $6,000 was wrong and is superseded. Coaching $1,000/hr split 50/50 (Ian's half is $500). → uysp.md, uysp-projects.md (none), business-track-record.md.
8. **"Brooke" identity:** Resolved into **three distinct people, none a client** — Brooke Jennings (best friend of 15 yrs → friendships-and-support-network.md), Brooke Sowerwine (Karly's sister → relationships-romantic.md), Brooke Estin (UYSP marketing/branding/ops → uysp-people.md). The old clients-brooke.md was repurposed to clients-seminar-prospect.md (a real prospect; its operator is a separate person).
9. **Brad Figler Option A pricing:** Resolved by **dropping it** (irrelevant). Brad is a completed 1:1 coaching + custom-project-build client; the $307,755/$120,139 figures and "Brian Sapp" note were removed. → clients-figler.md, methodologies-build-chain.md.

**Personal**
10. **Divorce age:** Resolved — parents divorced when Nick was **around four or five**; "~6" variant dropped. → life-history.md.
11. **Adderall:** Resolved — on Adderall **consistently 15+ years**, **relapsed December 2025**, **gradually increasing since, currently 60mg/day** (current/ongoing, not a resolved recovery). "8 months / ~30mg" variants superseded. → substances-and-recovery.md.
12. **Name spellings:** Resolved — **Karly** always with a K ("Carly"/"Sowerine" were mis-spellings). **Christy/Cristy/Christi = one person, Christi Civalier** (UYSP coach Nick built a Cowork space for), distinct from "Christian" the Microsoft colleague. **Lauren 2.0** = an ex Nick dated before Karly (distinct from Lauren Renner). → relationships-romantic.md, friendships-and-support-network.md, karly-profile.md, career-and-professional-identity.md.

## Redaction Log

**None.** No API keys, passwords, OAuth tokens, or live credentials appeared in any of the 23 source files. Items deliberately preserved as legitimate record data (NOT secrets): Nick's own email/phone; Buddy's microchip, insurance policy/claim numbers; client-facing Google Doc URLs (AI Audit Prompt, Intake Form). HubSpot integration is described as method only (env var `HUBSPOT_TOKEN`) with no token value present.

## Orphan / Gap Check

**Source-side orphans (content with no clean home): none.** All source content was placed.

**Brief-side gaps from round 1 — all three NOW RESOLVED by Nick (June 8 2026); placeholder files converted to real content:**
1. **Barry (UYSP, financial services)** — confirmed a **real UYSP client** with a 1:1 AI coaching session scheduled ($1,000/hr custom-project build); build detail forthcoming after the session. Was absent from the 23 source files (lives elsewhere). → clients-barry.md (now real).
2. **July 9 webinar** — confirmed **real**: a public AI Q&A webinar hosted by Ian/UYSP, run by Nick and Daniel, dual lead-gen (UYSP + Nick/Daniel's own business). The "~1,000 sellers" figure was a planning assumption, not confirmed — no attendance number stated. → uysp-webinar.md (now real).
3. **Deal Intelligence System** — confirmed a **business idea only, not built, not active**; the $1,997 + $97/month recurring model was **considered and rejected** (Nick prefers one-time build-and-deliver). → methodologies.md (corrected from gap flag to "future idea, not built").

**Cross-folder content (found in one folder, belongs to another — placed correctly, nothing lost):**
4. **Buddy's full vet/care history sat inside personal/nick_knowledge_base_batch4.md.** Integrated into the buddy/ files (not duplicated into personal). This surfaced the Buddy DNA / Cytopoint / hydroxyzine / Feb-2026 visit-date items (all now resolved above) and three unique facts the Buddy-folder agent never saw: trainers **Sarah (Relaxed Rover)** and **Cathy**, and the **"Chill"/"Find it"** training cues — all now in buddy-behavior-and-care.md.
5. **NickGPT business specifics appeared in personal files** (offerings, taglines, Ask Ian mechanics, target sectors, IgKnight scaling ideas). Primary coverage is the nickgpt-business/ folder; personal career context kept in career-and-professional-identity.md with a note. Nothing dropped.

**Fact-loss caught and repaired during verification:**
6. **Clonidine and Rimadyl** were present in the Buddy source (Batch1_Batch2) but initially dropped from all output files by the domain agent. Restored to buddy-health-medications.md.

## Verification Notes

- Every output file opens with an H1 + a `> Summary:` block and uses H2 section headers.
- All 46 detailed files are ≤ ~20KB (largest: buddy-health-history.md at ~20.0KB, split into health-labs and health-action-plan to stay under ceiling). MEMORY.md is under 10KB.
- Verbatim third-party quotes preserved exactly (e.g., Dr. Dowling's "ragingly nervous when I come"; Nick's "Buddy is a mirror of me, even down to the itching"; trainer/Ian/client quotes in their respective files).
- **Round 2 (June 8 2026):** all 13 of Nick's confirmed resolutions applied; inline CONFLICT flags removed and replaced with confirmed facts; the two gap placeholder files (Barry, webinar) converted to real content; clients-brooke.md repurposed to clients-seminar-prospect.md. Only the "Angela" reference remains open.
