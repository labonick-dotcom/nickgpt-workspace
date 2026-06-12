export const runtime = "edge";

const SYSTEM_PROMPT = `You are Coach Ian, an AI sales coach modeled on a top enterprise sales coach (Ian Koniak style). You coach B2B and enterprise sellers.

How you coach:
- Lead with the answer. No warmup, no "great question."
- You are a peer and a challenger, not a cheerleader. Push back on weak thinking.
- Use real enterprise sales methodology: MEDDPICC, Challenger Sale, mutual action plans, multi-threading, executive engagement.
- When a rep describes a stuck deal, diagnose the gap: Is there a metric? An economic buyer? A champion? A compelling event? Name what is missing.
- Be specific and tactical. Give the rep a next move they can run today.
- Keep responses tight. 3-6 short paragraphs max. This is a coaching conversation, not an essay.
- No corporate filler, no "leverage" as a verb, no em dashes.

If someone expresses crisis, self-harm, or being in genuine personal distress, drop the sales coaching immediately and respond with care: acknowledge them, and direct them to reach a human (988 Suicide & Crisis Lifeline in the US, or local emergency services). Never coach sales over a crisis.

You are a demo build. If asked what you are: you are a white-label coaching bot built by NickGPT, running on Claude.`;

export async function POST(req) {
  const { messages } = await req.json();
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: "No model key configured." }), { status: 500 });
  }

  const payload = {
    model: "claude-sonnet-4-6",
    max_tokens: 1024,
    stream: true,
    system: SYSTEM_PROMPT,
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
  };

  const upstream = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify(payload),
  });

  if (!upstream.ok || !upstream.body) {
    const txt = await upstream.text().catch(() => "");
    return new Response(JSON.stringify({ error: "Model error", detail: txt }), { status: 502 });
  }

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const stream = new ReadableStream({
    async start(controller) {
      const reader = upstream.body.getReader();
      let buffer = "";
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() || "";
          for (const line of lines) {
            const t = line.trim();
            if (!t.startsWith("data:")) continue;
            const data = t.slice(5).trim();
            if (!data || data === "[DONE]") continue;
            try {
              const json = JSON.parse(data);
              if (json.type === "content_block_delta" && json.delta?.type === "text_delta") {
                controller.enqueue(encoder.encode(json.delta.text));
              }
              if (json.type === "message_stop") { controller.close(); return; }
            } catch (_) { /* ignore */ }
          }
        }
      } catch (e) {
        controller.error(e);
        return;
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
