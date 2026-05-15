"use client";

const steps = [
  {
    num: "01",
    title: "The Hook (0–3 seconds)",
    desc: "Every piece of content starts with a question or a contradiction. Something that makes the viewer stop and think 'wait, what?'",
  },
  {
    num: "02",
    title: "The Story (3–30 seconds)",
    desc: "The middle builds tension. A personal story, a surprising fact, or a visual journey that keeps the viewer watching.",
  },
  {
    num: "03",
    title: "The Insight (30–50 seconds)",
    desc: "The payoff. A reframe, a lesson, or a moment of beauty that makes the viewer feel something they didn't expect.",
  },
  {
    num: "04",
    title: "The CTA (50–60 seconds)",
    desc: "Not 'follow for more' — a genuine invitation. 'Save this if you needed to hear it.' 'Tag someone who gets it.'",
  },
  {
    num: "05",
    title: "The Loop",
    desc: "Content that references other content. A universe, not a feed. Each post points to another, keeping the audience in the ecosystem.",
  },
];

const insights = [
  {
    title: "Post Timing",
    desc: "Tuesday–Thursday, 7–9pm IST. When the audience is winding down and most receptive to reflective content.",
    icon: "🕐",
  },
  {
    title: "Caption Strategy",
    desc: "First line is the hook. Second paragraph is the story. Last line is the question that drives comments.",
    icon: "✍️",
  },
  {
    title: "Hashtag Approach",
    desc: "3 niche + 3 medium + 2 broad. Never more than 8. Quality over quantity, always.",
    icon: "#",
  },
  {
    title: "Consistency Formula",
    desc: "4 reels + 2 carousels + 1 static per week. The algorithm rewards rhythm, not volume.",
    icon: "📅",
  },
];

export default function StrategyInsight() {
  return (
    <section
      id="strategy"
      style={{ background: "#080808", padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "400px",
          height: "400px",
          background: "radial-gradient(ellipse 60% 60% at 100% 0%, rgba(201,168,76,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>
            04 · Strategy Insight
          </span>
          <div style={{ height: "1px", flex: 1, background: "rgba(201,168,76,0.15)" }} />
        </div>

        {/* Headline */}
        <h2
          className="font-serif"
          style={{ fontSize: "clamp(2.2rem,5vw,5rem)", lineHeight: 1, color: "#f5f0e8", fontWeight: 300, marginBottom: "64px" }}
        >
          Why it{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            works
          </span>
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left: Step-by-step process */}
          <div>
            <p className="font-sans" style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "32px" }}>
              The Content Framework
            </p>
            <div style={{ position: "relative" }}>
              {/* Vertical line */}
              <div
                style={{
                  position: "absolute",
                  left: "19px",
                  top: "8px",
                  bottom: "8px",
                  width: "1px",
                  background: "linear-gradient(180deg, rgba(201,168,76,0.4) 0%, rgba(201,168,76,0.1) 100%)",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                {steps.map((s, i) => (
                  <div key={s.num} style={{ display: "flex", gap: "24px", paddingBottom: i < steps.length - 1 ? "32px" : "0" }}>
                    {/* Node */}
                    <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "50%",
                          background: "#111111",
                          border: "1px solid rgba(201,168,76,0.35)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          zIndex: 1,
                          position: "relative",
                        }}
                      >
                        <span className="font-sans" style={{ fontSize: "9px", color: "#c9a84c", fontWeight: 700, letterSpacing: "0.05em" }}>{s.num}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div style={{ paddingTop: "6px" }}>
                      <p className="font-sans" style={{ fontSize: "13px", color: "#ffffff", fontWeight: 600, marginBottom: "8px" }}>
                        {s.title}
                      </p>
                      <p className="font-sans" style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Insight cards */}
          <div>
            <p className="font-sans" style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "32px" }}>
              Tactical Playbook
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {insights.map((ins) => (
                <div
                  key={ins.title}
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    padding: "20px 24px",
                    display: "flex",
                    gap: "16px",
                    alignItems: "flex-start",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: "rgba(201,168,76,0.1)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "16px",
                    }}
                  >
                    {ins.icon}
                  </div>
                  <div>
                    <p className="font-sans" style={{ fontSize: "13px", color: "#ffffff", fontWeight: 600, marginBottom: "6px" }}>
                      {ins.title}
                    </p>
                    <p className="font-sans" style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
                      {ins.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content Pillars Venn Diagram */}
        <div
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            padding: "48px 32px",
            textAlign: "center",
          }}
        >
          <p className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)", marginBottom: "8px" }}>
            Content Pillars
          </p>
          <p className="font-serif" style={{ fontSize: "clamp(1.3rem,2.5vw,2rem)", color: "#f5f0e8", fontWeight: 300, marginBottom: "48px" }}>
            Where the magic happens
          </p>

          {/* Venn diagram */}
          <div style={{ position: "relative", width: "320px", height: "260px", margin: "0 auto" }}>
            {/* Personal circle */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translateX(-50%)",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.25)",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: "20px",
              }}
            >
              <span className="font-sans" style={{ fontSize: "11px", color: "#c9a84c", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Personal</span>
            </div>

            {/* Educational circle */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "20px",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background: "rgba(232,201,122,0.06)",
                border: "1px solid rgba(232,201,122,0.2)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                paddingBottom: "20px",
                paddingLeft: "20px",
              }}
            >
              <span className="font-sans" style={{ fontSize: "11px", color: "#e8c97a", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Educational</span>
            </div>

            {/* Entertaining circle */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                right: "20px",
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
                paddingBottom: "20px",
                paddingRight: "20px",
              }}
            >
              <span className="font-sans" style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>Entertaining</span>
            </div>

            {/* Center label */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -30%)",
                textAlign: "center",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.4)",
                  borderRadius: "8px",
                  padding: "8px 14px",
                  backdropFilter: "blur(4px)",
                }}
              >
                <span className="font-sans" style={{ fontSize: "10px", color: "#e8c97a", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
                  Viral Content
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
