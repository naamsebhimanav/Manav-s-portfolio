"use client";

const content = {
  about: {
    heading: "about me",
    intro: "I believe every frame tells a story, and every story deserves to be told beautifully.",
    description: "I'm a content creator specializing in short-form video, visual storytelling, and AI-powered content design. I help brands and creators transform raw ideas into compelling narratives that resonate with audiences. From concept to execution, I craft content that moves people—whether it's a 15-second reel or a full campaign strategy. My work lives at the intersection of creativity and technology, where storytelling meets innovation."
  },
  skills: {
    hard: [
      "Video editing for social media",
      "Mobile video shooting",
      "Content design (posts + reels)",
      "AI-powered content creation",
      "Workflow automation for content"
    ],
    soft: [
      "Creativity",
      "Visual storytelling",
      "Attention to detail",
      "Adaptability",
      "Self-management"
    ]
  },
  tools: [
    { name: "CapCut", icon: "scissors" },
    { name: "Notion", icon: "file-text" },
    { name: "Figma", icon: "pen-tool" },
    { name: "Midjourney", icon: "image" },
    { name: "Runway", icon: "play-circle" },
    { name: "After Effects", icon: "layers" }
  ]
};

export default function Skills() {
  return (
    <section id="skills" style={{ background: "#0B0B0B", padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Subtle background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 50%)",
          pointerEvents: "none"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ position: "relative", zIndex: 10 }}>
        {/* Split-grid layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "48px" }}>
          {/* About Me - Left Section (7 columns) */}
          <div style={{ gridColumn: "span 12 lg:span 7" }}>
            {/* Section label */}
            <div style={{ marginBottom: "24px" }}>
              <span
                className="font-sans"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.5em",
                  textTransform: "uppercase",
                  color: "rgba(201,168,76,0.5)",
                }}
              >
                { content.about.heading }
              </span>
            </div>

            {/* Divider */}
            <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(201,168,76,0.3) 0%, transparent 100%)", marginBottom: "32px" }} />

            {/* Intro paragraph */}
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(1.2rem,2vw,1.6rem)",
                color: "#f5f0e8",
                fontWeight: 400,
                lineHeight: 1.4,
                marginBottom: "24px",
                fontStyle: "italic"
              }}
            >
              {content.about.intro}
            </p>

            {/* Description paragraph */}
            <p
              className="font-sans"
              style={{
                fontSize: "14px",
                color: "rgba(245,240,232,0.6)",
                lineHeight: 1.8,
                marginBottom: "40px"
              }}
            >
              {content.about.description}
            </p>

            {/* Portrait placeholder */}
            <div
              style={{
                width: "100%",
                maxWidth: "400px",
                aspectRatio: "3/4",
                background: "rgba(201,168,76,0.05)",
                borderRadius: "8px",
                border: "1px solid rgba(201,168,76,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <span
                className="font-sans"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(201,168,76,0.4)"
                }}
              >
                Portrait Image
              </span>
            </div>
          </div>

          {/* Right Section (5 columns) */}
          <div style={{ gridColumn: "span 12 lg:span 5", display: "flex", flexDirection: "column", gap: "48px" }}>
            {/* Skills Section */}
            <div>
              {/* Section label */}
              <div style={{ marginBottom: "24px" }}>
                <span
                  className="font-sans"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.5em",
                    textTransform: "uppercase",
                    color: "rgba(201,168,76,0.5)",
                  }}
                >
                  skills
                </span>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(201,168,76,0.3) 0%, transparent 100%)", marginBottom: "32px" }} />

              {/* Skills grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
                {/* Hard Skills */}
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(201,168,76,0.1)",
                      color: "#c9a84c",
                      fontSize: "8px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      marginBottom: "16px"
                    }}
                    className="font-sans"
                  >
                    hard
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {content.skills.hard.map((skill, index) => (
                      <li
                        key={index}
                        className="font-sans"
                        style={{
                          fontSize: "12px",
                          color: "rgba(245,240,232,0.7)",
                          lineHeight: 2,
                          paddingLeft: "12px",
                          position: "relative"
                        }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "rgba(201,168,76,0.5)" }}>—</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Soft Skills */}
                <div>
                  <div
                    style={{
                      display: "inline-block",
                      background: "rgba(201,168,76,0.1)",
                      color: "#c9a84c",
                      fontSize: "8px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: "4px",
                      marginBottom: "16px"
                    }}
                    className="font-sans"
                  >
                    soft
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {content.skills.soft.map((skill, index) => (
                      <li
                        key={index}
                        className="font-sans"
                        style={{
                          fontSize: "12px",
                          color: "rgba(245,240,232,0.7)",
                          lineHeight: 2,
                          paddingLeft: "12px",
                          position: "relative"
                        }}
                      >
                        <span style={{ position: "absolute", left: 0, color: "rgba(201,168,76,0.5)" }}>—</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Tools Section */}
            <div>
              {/* Section label */}
              <div style={{ marginBottom: "24px" }}>
                <span
                  className="font-sans"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.5em",
                    textTransform: "uppercase",
                    color: "rgba(201,168,76,0.5)",
                  }}
                >
                  tools
                </span>
              </div>

              {/* Divider */}
              <div style={{ height: "1px", background: "linear-gradient(90deg, rgba(201,168,76,0.3) 0%, transparent 100%)", marginBottom: "32px" }} />

              {/* Tools grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                {content.tools.map((tool, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "8px",
                      padding: "16px 8px",
                      borderRadius: "8px",
                      transition: "all 0.3s ease",
                      cursor: "pointer"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(201,168,76,0.05)";
                      e.currentTarget.style.transform = "translateY(-4px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Icon placeholder */}
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        border: "1px solid rgba(201,168,76,0.2)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <div
                        style={{
                          width: "16px",
                          height: "16px",
                          background: "rgba(201,168,76,0.3)",
                          borderRadius: "2px"
                        }}
                      />
                    </div>
                    {/* Label */}
                    <span
                      className="font-sans"
                      style={{
                        fontSize: "9px",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(245,240,232,0.5)"
                      }}
                    >
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
