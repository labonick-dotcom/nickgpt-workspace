# Methodology: Client Software Implementation (HubSpot) & OpenClaw Build

> Summary: Two methodologies as usable documentation — the agent-driven client software implementation method (build-vs-run, the auth boundary, read-only-first with the actual prompt, HubSpot connector vs private-app token, the realtor CRM blueprint) and Nick's OpenClaw build (locked decisions, hosting, architecture, skill library, the Daniel benchmark, lean-v1 execution, and the productized client offering).

## Client Software Implementation (HubSpot for Realtors as Worked Case)

### The Build-vs-Run Frame
Every engagement splits into: **Build layer** — standing the thing up (an agent you watch and steer, Cowork or Claude Code, driving the software via a token/connector); **Run layer** — the delivered system the client operates daily (a Claude Project on their connector), optionally an always-on operator (OpenClaw or Make). Rule: stop asking "which tool is best"; ask "what has to be built, and what has to run it." A false contrast to avoid: "tedious manual Cowork vs easy OpenClaw" is not real — Cowork is the agent doing the build via the token, same as OpenClaw; the only difference is **watch-and-steer (Cowork)** vs **delegate-and-walk-away (OpenClaw).**

### The Auth Boundary
Every tool bottleneck reduces to who authorizes the connection — you cannot automate authorization away, and that is a feature. Rule: **the agent has the hands and the speed; the human holds the keys. Never flip that.** Agent builds/operates under read-only or staging; human reviews and clicks authorize on writes; human keeps their own keys.

### Read-Only First (non-negotiable on a live client system)
Connect with read scopes only for the first pass(es). Run two distinct passes before any write: **(1) Map** — pipelines, stages, properties, workflows, owners, record counts. **(2) Diagnose** — where the data model is wrong vs a good setup, duplicates, unused fields, anything that breaks reporting. Then propose a change list, get sign-off, then grant write access and implement supervised. This is also where you learn the client's *real* problem vs their stated one.

**The read-only pass prompt (reusable):**
> You have read-only access to this HubSpot account. Do not create, update, or delete anything. Pass 1, inventory: list every pipeline and its stages; all custom properties on contacts, companies, deals (type, and whether used); active workflows; record counts per object and stage; owners and assignment. Pass 2, diagnose: compare against a strong real-estate setup (separate buyer and seller pipelines, lead-source tracking, stages that match the agent's real process, no duplicates); flag missing/redundant properties, messy records, wrong stages, data-quality problems. Output a findings report (by severity) and a proposed change list (riskiest flagged). Make no changes. Wait for my approval before anything gets write access.

### Claude to HubSpot: Two Doors
- **Built-in HubSpot connector (OAuth, already connected):** the client's safe chat layer. Reads/queries everything (objects, properties, owners, org/user info, campaign analytics, SQL-style queries) and creates/updates records + associations. CANNOT do config: no creating properties (schema), pipelines, dashboards, workflows, layouts, settings.
- **A private-app token (created in HubSpot, used by Cowork/Code/OpenClaw via REST API):** the build door. Reaches the structural layer — custom properties, pipelines and stages, custom objects, some automation.
- So: build the CRM with a token through Cowork; deliver it to the client as their HubSpot connected to their Claude Project via the connector.

### The Dashboard Wall (platform limit, not a tool limit)
HubSpot's API is strong on data/objects and weak-to-absent on the visual layer. Dashboards, reports, and page layouts are built by hand in the UI. **No agent** (connector, Cowork, Code, OpenClaw) can design a dashboard. Build dashboards by hand once, or start from HubSpot's prebuilt report library.

### Creating and Using a Private-App Token
Born in HubSpot; Cowork wields it. **Create (needs super-admin):** Settings → Integrations → Private Apps → Create a private app → name it → Scopes → add scopes → Create app → Show token → Copy (shown once). Rotate from the Auth tab if compromised. (Legacy API keys deprecated Nov 30, 2022; private-app tokens replaced them with granular scopes.) **Scope distinction (the expert point):** **object scopes** (`crm.objects.*.read/write`) edit *records*; **schema scopes** (`crm.schemas.*.read/write`) create *structure* (properties, pipelines, stages). A fresh CRM build needs schema scopes or you hit a 403. Add `crm.objects.custom.*` and `crm.schemas.custom.*` for a custom object. Grant least privilege. **Use in Cowork:** store the token in an env var (e.g. `HUBSPOT_TOKEN`) outside the workspace, never in a skill file or git. Give Cowork a HubSpot skill that calls `api.hubapi.com` with `Authorization: Bearer` from the env var. Then converse: "read-only audit first," then "build these pipelines and properties."

### The Realtor CRM Blueprint
- **Two deal pipelines.** Buyer: New Lead → Contacted → Pre-Approved → Actively Showing → Offer Made → Under Contract → Closed. Seller/Listing: New Lead → Listing Appointment → Agreement Signed → Active Listing → Under Contract → Closed.
- **Custom contact properties:** Lead Source, Buyer/Seller/Both, Price Range, Target Areas, Timeline, Pre-Approval Status, Lender, Property Type.
- **Optional "Listings" custom object** (address, list price, status, beds/baths) associated to contacts and deals.
- Lifecycle stages, owner assignment, lead-source tracking, associations. Dashboards/reports are the build-by-hand step. Logistics: it's the client's account — the realtor (super-admin) either creates the token and hands it over, or grants Nick admin to create it.

### The Leverage Principle: the Blueprint-Skill Is the Asset
The agent will not invent a great realtor CRM; the pipelines, properties, and stages are domain knowledge Nick encodes once. Rule: build one reusable realtor-CRM blueprint-skill, then any agent runs it. The tool is interchangeable; the skill is the product. **Cowork forges the skill** (one or two supervised runs to harden it — mistakes on a fresh CRM are cheap); **OpenClaw scales it** (text it per new client and walk away). This turns a 40-hour custom build into a ~90-minute supervised first build plus a skill that halves every future one.

## Nick's OpenClaw Build

**What it is for Nick:** an always-on, self-hosted agent layer on top of the Claude stack, running recurring ops, automations, and build pipelines, commanded from Telegram/voice/Claude.ai. It does not replace Claude (Cowork, Projects, artifacts stay the surface for high-judgment interactive work); OpenClaw is the proactive/scheduled/mobile and build-execution layer.

**Locked decisions:** (1) **Model provider: Claude only, via a pay-as-you-go Anthropic API key.** Never the Claude Pro/Max subscription login (OAuth) — since April 4, 2026 Anthropic does not permit third-party harnesses on subscription auth; accounts that do can be throttled or banned. **The single most important build rule.** (2) Single provider, not GPT (the OpenAI price gap is negligible at Nick's tiers; splitting costs a second key, drifting model strings, brand dilution). (3) Security deliberately deprioritized for convenience (backups + version control kept; heavy hardening not — a conscious tradeoff given client data on one shared instance).

**Hosting:** Hetzner Cloud CPX41 (8 vCPU / 16GB / 240GB NVMe), Ubuntu 24.04, ~$30/month, Docker install. Scale trigger: 3+ concurrent client builds → dedicated-vCPU CCX box. MacBook Air disqualified as host (it sleeps).

**Architecture:** one instance, one primary "NickGPT OS" agent (Telegram + voice + Claude bridge), a shared skills library, per-client workspaces. Sub-agents (build, research, qa) at depth 2 run pipelines in parallel, inherit operating rules but not persona. Workspace tree: personal, nickgpt-business (with mission-control), uysp, products, clients (with a `_TEMPLATE` clone unit).

**Skill library:** identical SKILL.md format to Claude, so Nick's 9 skills port (only tool dependencies rewired, each re-tested on the instance — real work, not free). Added from Daniel's build: **report-designer** (McKinsey-grade PDFs via Playwright) and **openclaw-builder** (builds client OpenClaw packages). New: **discovery-to-solution** (call transcript → research, solution plan, architecture, follow-up email, proposal, then logs the prospect and pauses) and **tool-selector v3** (product-neutral decision engine, build-layer vs run-layer split, anti-bias rule).

**Integrations:** Google Workspace via **gog** (deepest native option, direct OAuth, scoped MCP across Gmail/Calendar/Drive/Docs/Sheets/Slides, named multi-account, ships SKILL.md skills — chosen over Composio-for-Google); Perplexity (cited search); Composio (Fathom now, Slack/HubSpot later); Telegram + voice (primary channel); openclaw-mcp bridge (drive from Claude.ai).

**Mission Control dashboard:** visual command center (Next.js/React/TypeScript/Tailwind) surfacing client/prospect projects, stage, revenue, days-since-contact, tasks, kanban, pipeline, memory browser. Built **live-synced** (agent writes `projects.json` on every update; dashboard reads via API route on load — fixes the staleness in Daniel's version). Served persistently (pm2), reached over Tailscale.

**Model routing:** Haiku 4.5 routine/heartbeat, Sonnet 4.6 workhorse, Opus 4.8 for client builds/QA/discovery-to-solution design. Pin model strings, revisit quarterly, set a monthly API spend cap.

**Two flagship automations:** (1) Coaching pipeline — Google Form intake → client profile → tailored data-request email → custom project build → QA → zipped delivery. (2) discovery-to-solution — call transcript → solution package. Both pause for Nick's review; deliverables never auto-send.

**Productized client offering:** two replication mechanisms — clone `_TEMPLATE` internally, and snapshot the configured VPS as a golden image + run **openclaw-builder** to stand up a client's own instance (each with their own API key, model cost passes through). After the first build, a client instance is **~2-4 hours** vs **30-40 hours** of build one. Researched pricing tiers (not yet locked): solo $2,500-$5,000 setup + $500-$1,000/mo; small team $7,500-$15,000 + $1,000-$2,500/mo; corporate $20,000-$50,000+ + retainer. Differentiator justifying the top of each range: the instance doesn't just run admin, it **builds the client's other AI tools.**

**Benchmark vs Daniel (June 2026):** Daniel 72.5/100, Nick (as planned) 68/100. Decisive split: Daniel's is a real, running, three-month-old production system; Nick's is a plan not yet executed. Nick's design wins on paper (orchestration ceiling, model cost-tiering + spend cap, automation breadth, observability via the live-synced dashboard — essentially Daniel's build plus Daniel's own "what I'd do differently" list pre-fixed). Daniel wins on earned-not-designable (proven battle-tested skills, 3+ months of memory/transcripts, it runs; plus local mlx-whisper voice and dual-auth fallback). Daniel's known gaps (Nick's plan fixes most): stale manual dashboard, dev-server hosting that dies on terminal close, no spend cap, no dreaming/consolidation, one cron, loose API-key dotfiles in git-tracked workspace, 60+ unused skills. Nick's gaps: none of it exists yet; skills unproven; empty memory day one; added complexity is more surface to fail; he cut Apollo/Hunter lead-gen (sits oddly against bigger-fish strategy).

**Execution strategy: lean v1 first.** Build a lean v1 close to Daniel's proven core (single agent, one killer automation = morning brief, Google, Telegram, two trusted skills); get it running; then layer the genuinely-better pieces one at a time on a base that already runs. Steal Daniel's local-whisper voice and dual-auth fallback; lean on his battle-tested skills. The gap to close is execution; the trap is letting the plan's sophistication keep it perpetually 80% done. Full v5 is ~2.5-3x the build effort of a lean build; lean v1 runnable in ~1-2 focused days, full v5 stable ~4-8 weeks part-time solo (or ~3-5 weeks with Daniel on infra). Long poles in order: live-synced production dashboard, the six automations, porting/testing skills, multi-agent orchestration — all amplified because Nick is not a developer. Mitigation: lean on Daniel for server/Docker/infra. **The throwaway/disposable-first instance was removed from the plan** (Nick's call); the real instance is built directly, kept safe by snapshotting right after a clean install (rollback) and not loading real client data until the final phase.

---
*Source: 12_Client_Implementation_and_HubSpot_Build.md, 11_OpenClaw_Build_and_Architecture.md, 15_Tools_and_Market_Intelligence.md*
