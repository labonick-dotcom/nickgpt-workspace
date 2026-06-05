# Skills Inbox
Files received from Nick, pending full port to ~/.openclaw/skills/

## coaching-project-build (v4) — received 2026-06-05
- Source: PDF via Telegram (coaching-project-build-SKILL-v4)
- Status: PARTIAL — PDF cut off midway through Phase 0, phases 1-9 and Appendices C-G missing
- What came through: trigger phrases, description, relationship to project-builder, sub-agent architecture, required inputs, input validation, pipeline structure, Phase 0 start
- What's missing: Phases 1-9 full detail, all 5 templates (Appendices C-G)
- Key notes:
  - Wrapper around a second skill called "project-builder" (not yet received)
  - Phases 1+2 must run in separate Cowork tasks (hard rule)
  - Reference build: Brad Figler, 28 docs, 12 files, ~14 hrs, target <4 hrs by client 5
  - Self-contained: all templates live in the appendices, nothing loaded externally
  - Sub-agents parallelized at both Phase 1 and Phase 2
  - Runs partly in NickGPT project context, partly in Cowork

## Still needed from Nick (8 skills total)
- coaching-project-build full version (Phases 1-9 + Appendices C-G)
- project-builder skill (this skill depends on it)
- 6 remaining skills
