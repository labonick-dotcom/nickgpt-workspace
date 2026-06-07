---
name: "cost-analysis"
description: "Estimate token cost across Sonnet, Haiku, GPT-4o, GPT-4o-mini, DeepSeek. Price table, model recommendation, OpenClaw vs Claude.ai comparison."
---

# Cost Analysis

Instant cost estimate for any task. Shows what this will cost across models, recommends the most economical choice for the job, and compares OpenClaw API cost vs Claude.ai flat-fee value.

## When to use

Trigger on: "cost check," "how much does this cost," "price comparison," "is this worth doing here," "compare models," "which model should I use for this," or any question about token economics.

Run proactively when the task is unusually large (long document analysis, multi-step skill execution, bulk processing), or when the user seems uncertain about where to run something.

## Model pricing reference

Approximate API prices per million tokens (input / output). Verify at provider pricing pages if precision matters.

| Model | Input /M | Output /M | Notes |
|---|---|---|---|
| Claude Sonnet 4.6 (current) | $3.00 | $15.00 | Best writing quality, voice matching, nuanced judgment |
| Claude Haiku 4.5 | $0.80 | $4.00 | Fast, cheap, weaker on complex reasoning and voice |
| GPT-4o | $2.50 | $10.00 | Competitive with Sonnet, different strengths |
| GPT-4o-mini | $0.15 | $0.60 | Very cheap, meaningful quality drop on complex tasks |
| DeepSeek V3 | $0.27 | $1.10 | Excellent value for analysis/research, weaker on voice |
| DeepSeek R1 | $0.55 | $2.19 | Strong reasoning, cheap, slower |

Claude.ai Plus flat fee: $20/month. Break-even vs Sonnet API is roughly 6M input tokens/month. Most individual users stay well under that.

Cache note: OpenClaw caches repeated context (MEMORY.md, AGENTS.md, skill files) at a significant discount. When cache hit rate is above 70%, real effective cost is substantially lower than list price on cached tokens.

## Step 1: Identify task type and estimate tokens

Match the current task to the closest profile. Adjust up or down based on actual complexity.

| Task type | Input tokens | Output tokens | Notes |
|---|---|---|---|
| Quick Q&A / conversational | 500–2k | 200–500 | |
| Email or text draft | 1k–3k | 300–800 | |
| Document analysis, short (<2k words) | 3k–6k | 500–1.5k | |
| Document analysis, long (5k+ words) | 8k–20k | 1k–3k | |
| Skill execution (grade-and-score, QC) | 6k–15k | 1.5k–4k | Scales with artifact size |
| Morning brief / nightly wrap | 15k–25k | 600–1k | Heavy web + email + calendar |
| Fathom transcript (1hr call) | 12k–18k | 800–2k | |
| Multi-step research | 10k–30k | 2k–6k | Scales with sources |
| SCP'd doc analysis (file on disk) | 5k–15k | 1k–3k | More efficient than pasting |
| Fresh isolated session (webhook/cron) | +30k–40k overhead | — | Bootstrap context reload |

State which profile applies and any adjustments made. Add bootstrap overhead for isolated/cron sessions.

## Step 2: Calculate cost across models

For each model:
- Input cost = (input tokens / 1,000,000) × input rate
- Output cost = (output tokens / 1,000,000) × output rate
- Total = input + output

Apply cache discount when relevant: if session cache hit rate is above 70%, reduce effective input cost by ~50% on cached tokens (bootstrap context, not new task content).

Present as a table:

| Model | Est. cost | Quality fit | Notes |
|---|---|---|---|
| Claude Sonnet 4.6 | $X.XX | High/Medium/Low | |
| Claude Haiku 4.5 | $X.XX | | |
| GPT-4o | $X.XX | | |
| GPT-4o-mini | $X.XX | | |
| DeepSeek V3 | $X.XX | | |

Quality fit is task-specific, not generic. A task requiring voice matching gets Low for DeepSeek regardless of DeepSeek's general capability.

## Step 3: Claude.ai flat-fee comparison

Break-even formula: $20 / (cost per task at Sonnet) = tasks/month before Claude.ai wins.

If break-even is under 50 tasks/month, flag it explicitly.

Note where Claude.ai clearly wins (high token count, repeated tasks, no automation needed) vs where OpenClaw wins (automation, context persistence, cron delivery, multi-tool integration, cross-session memory).

## Step 4: Recommendation

One line: which model, and why. Be direct. Do not default to Sonnet if cheaper options genuinely fit the task.

If the task is better run on Claude.ai, say so.

Include the model switch command if recommending something other than Sonnet: `/model haiku` or `/model deepseek` etc.

## Output format

Cost table first. Claude.ai comparison in one or two lines. Recommendation last. Tight -- this is reference data, not an essay. No preamble.

Wrap the entire output in a code block so it's tap-to-copy in Telegram.

---

*Skill: cost-analysis | Version: 1.0*
*Token economics engine. Cost estimates across models, OpenClaw API vs Claude.ai flat fee, model recommendation per task.*
*Update: when model pricing changes, or when a new task type profile is needed.*
