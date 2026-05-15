"use client";

const metricCards = [
  { value: "50.2K", label: "Followers",      change: "+12.4%", sub: "this month" },
  { value: "2.1M",  label: "Reach",          change: "+34%",   sub: "this month" },
  { value: "8.7M",  label: "Impressions",    change: "+28%",   sub: "this month" },
  { value: "142K",  label: "Profile Visits", change: "+19%",   sub: "this month" },
];

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const barHeights = [30,35,40,38,45,52,58,65,70,78,85,92];

const demographics = [
  { label: "Age 18–24", pct: 42 },
  { label: "Age 25–34", pct: 31 },
  { label: "Age 35–44", pct: 18 },
  { label: "Age 45+",   pct: 9  },
];

const contentTypes = [
  { label: "Reels",        pct: 68, color: "#c9a84c" },
  { label: "Carousels",    pct: 22, color: "#e8c97a" },
  { label: "Static Posts", pct: 10, color: "rgba(107,107,107,0.6)" },
];

export default function GrowthDashboard() {
  return (
    <section
      id="dashboard"
      style={{ background: "#050505", padding: "96px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Subtle top glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "500px",
          height: "300px",
          background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <span className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}>
            01 · Instagram Growth Dashboard
          </span>
          <div style={{ height: "1px", flex: 1, background: "rgba(201,168,76,0.15)" }} />
        </div>

        {/* Headline */}
        <h2
          className="font-serif"
          style={{ fontSize: "clamp(2.2rem,5vw,5rem)", lineHeight: 1, color: "#f5f0e8", fontWeight: 300, marginBottom: "64px" }}
        >
          The numbers{" "}
          <span
            style={{
              fontStyle: "italic",
              background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            don&apos;t lie
          </span>
        </h2>

        {/* Mock Instagram Insights UI */}
        <div
          style={{
            background: "#0f0f0f",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            overflow: "hidden",
          }}
        >
          {/* Dashboard header bar */}
          <div
            style={{
              background: "#111111",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg, #c9a84c, #e8c97a)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#080808" }}>M</span>
              </div>
              <div>
                <p className="font-sans" style={{ fontSize: "12px", color: "#ffffff", fontWeight: 600 }}>manav.arora</p>
                <p className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)" }}>Instagram Insights</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>Last 30 days</span>
              <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4ade80" }} />
            </div>
          </div>

          <div style={{ padding: "24px" }}>
            {/* Metric cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {metricCards.map((m) => (
                <div
                  key={m.label}
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "8px",
                    padding: "20px",
                    transition: "border-color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
                >
                  <p className="font-sans" style={{ fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "8px" }}>
                    {m.label}
                  </p>
                  <p className="font-serif" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#ffffff", fontWeight: 600, lineHeight: 1, marginBottom: "8px" }}>
                    {m.value}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span className="font-sans" style={{ fontSize: "11px", color: "#4ade80", fontWeight: 600 }}>{m.change}</span>
                    <span className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)" }}>{m.sub}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Follower Growth Chart */}
              <div
                style={{
                  gridColumn: "span 2",
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "8px",
                  padding: "24px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                  <p className="font-sans" style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)", fontWeight: 600, letterSpacing: "0.05em" }}>
                    Follower Growth
                  </p>
                  <span className="font-sans" style={{ fontSize: "10px", color: "rgba(201,168,76,0.6)", letterSpacing: "0.1em" }}>2024</span>
                </div>

                {/* Bar chart */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: "6px", height: "120px", marginBottom: "12px" }}>
                  {barHeights.map((h, i) => (
                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", height: "100%" }}>
                      <div
                        style={{
                          width: "100%",
                          height: `${h}%`,
                          background: i >= 9
                            ? "linear-gradient(180deg, #e8c97a 0%, #c9a84c 100%)"
                            : "rgba(201,168,76,0.35)",
                          borderRadius: "3px 3px 0 0",
                          transition: "background 0.3s ease",
                          alignSelf: "flex-end",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", gap: "6px" }}>
                  {months.map((m) => (
                    <div key={m} style={{ flex: 1, textAlign: "center" }}>
                      <span className="font-sans" style={{ fontSize: "8px", color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {/* Audience Demographics */}
                <div
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "8px",
                    padding: "20px",
                    flex: 1,
                  }}
                >
                  <p className="font-sans" style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em" }}>
                    Audience Demographics
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {demographics.map((d) => (
                      <div key={d.label}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                          <span className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)" }}>{d.label}</span>
                          <span className="font-sans" style={{ fontSize: "10px", color: "#c9a84c", fontWeight: 600 }}>{d.pct}%</span>
                        </div>
                        <div style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", overflow: "hidden" }}>
                          <div
                            style={{
                              height: "100%",
                              width: `${d.pct}%`,
                              background: "linear-gradient(90deg, #c9a84c, #e8c97a)",
                              borderRadius: "2px",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Content Types */}
                <div
                  style={{
                    background: "#111111",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "8px",
                    padding: "20px",
                  }}
                >
                  <p className="font-sans" style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: "16px", letterSpacing: "0.05em" }}>
                    Top Content Types
                  </p>
                  {/* Stacked bar */}
                  <div style={{ height: "8px", borderRadius: "4px", overflow: "hidden", display: "flex", marginBottom: "12px" }}>
                    {contentTypes.map((c) => (
                      <div key={c.label} style={{ width: `${c.pct}%`, background: c.color }} />
                    ))}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {contentTypes.map((c) => (
                      <div key={c.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                          <div style={{ width: "8px", height: "8px", borderRadius: "2px", background: c.color, flexShrink: 0 }} />
                          <span className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)" }}>{c.label}</span>
                        </div>
                        <span className="font-sans" style={{ fontSize: "10px", color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>{c.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
