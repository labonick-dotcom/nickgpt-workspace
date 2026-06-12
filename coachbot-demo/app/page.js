"use client";

import { useState, useRef, useEffect } from "react";

const SUGGESTIONS = [
  "My deal has gone dark. Three weeks of silence.",
  "I have a C-suite call tomorrow and one shot.",
  "Discovery went sideways. They wouldn't open up.",
  "Champion left the company. Deal is stalling.",
];

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, [messages, loading]);

  async function send(text) {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    setInput("");
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok || !res.body) throw new Error("stream failed");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      setMessages((m) => [...m, { role: "assistant", content: "" }]);
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch (e) {
      setMessages((m) => [...m, { role: "assistant", content: "Connection dropped. Try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: "-apple-system, system-ui, sans-serif" }}>
      <header style={{ padding: "20px 18px 14px", borderBottom: "1px solid #1d1d25" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 9, background: "linear-gradient(135deg,#5b8cff,#7a5bff)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>CI</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Coach Ian</div>
            <div style={{ fontSize: 12, color: "#8a8a96" }}>Enterprise sales coach · live demo</div>
          </div>
        </div>
      </header>

      <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "18px" }}>
        {messages.length === 0 && (
          <div style={{ marginTop: 8 }}>
            <p style={{ color: "#b8b8c0", fontSize: 15, lineHeight: 1.5 }}>
              Tell me about a deal. A discovery that went sideways. A C-suite call tomorrow. I will coach you through it and push back on the parts that need it.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
              {SUGGESTIONS.map((s) => (
                <button key={s} onClick={() => send(s)}
                  style={{ textAlign: "left", background: "#14141c", border: "1px solid #24242e", color: "#d8d8e0", padding: "11px 13px", borderRadius: 11, fontSize: 14, cursor: "pointer" }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start", marginBottom: 12 }}>
            <div style={{
              maxWidth: "82%", padding: "11px 14px", borderRadius: 14, fontSize: 15, lineHeight: 1.5, whiteSpace: "pre-wrap",
              background: m.role === "user" ? "linear-gradient(135deg,#5b8cff,#7a5bff)" : "#15151e",
              color: m.role === "user" ? "#fff" : "#e8e8ea",
              border: m.role === "user" ? "none" : "1px solid #24242e",
            }}>
              {m.content || "…"}
            </div>
          </div>
        ))}
        {loading && messages[messages.length - 1]?.role === "user" && (
          <div style={{ color: "#6a6a76", fontSize: 14 }}>Coach Ian is thinking…</div>
        )}
      </div>

      <div style={{ padding: "12px 14px 20px", borderTop: "1px solid #1d1d25" }}>
        <form onSubmit={(e) => { e.preventDefault(); send(); }} style={{ display: "flex", gap: 8 }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your deal or call…"
            style={{ flex: 1, background: "#14141c", border: "1px solid #2a2a36", color: "#fff", padding: "13px 15px", borderRadius: 12, fontSize: 15, outline: "none" }}
          />
          <button type="submit" disabled={loading}
            style={{ background: loading ? "#3a3a48" : "linear-gradient(135deg,#5b8cff,#7a5bff)", color: "#fff", border: "none", padding: "0 18px", borderRadius: 12, fontWeight: 600, fontSize: 15, cursor: loading ? "default" : "pointer" }}>
            Send
          </button>
        </form>
        <div style={{ textAlign: "center", color: "#5a5a66", fontSize: 11, marginTop: 10 }}>
          White-label demo · built by NickGPT
        </div>
      </div>
    </main>
  );
}
