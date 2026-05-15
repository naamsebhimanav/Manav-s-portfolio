"use client";

import Link from "next/link";

const quotes = [
  {
    text: "I don't perform to be seen. I perform so others can see themselves.",
    context: "On theatre",
  },
  {
    text: "Every character I wear is a mirror. Every performance, a confession.",
    context: "On acting",
  },
  {
    text: "Art is not decoration. It is the thing that makes the unbearable bearable.",
    context: "On art",
  },
  {
    text: "The stage is not where I go to escape. It's where I go to arrive.",
    context: "On performance",
  },
  {
    text: "I am not a multi-disciplinary artist. I am one artist with many voices. And they are all saying the same thing.",
    context: "On creative practice",
  },
  {
    text: "The work that scared me most became the work that defined me.",
    context: "On Bahurupiya",
  },
];

const closingMonologue = `There is a moment at the end of every performance — after the last line, before the lights change — where everything is suspended. The character is still alive. The story is still happening. And the audience is holding their breath, not because they don't know it's over, but because they don't want it to be.

I live for that moment. Not the applause that follows. Not the reviews. That suspended second where something real has passed between the stage and the seats, and everyone in the room knows it.

That is what I am trying to create. In every medium. In every piece of work. That moment of suspension where you forget, briefly, that you are sitting in a chair watching someone else's story — and you remember, suddenly, that it is yours.

I am Manav Arora. I am a performer, a visual artist, a storyteller, and a person who is still figuring out what all of those things mean.

The curtain hasn't fallen yet.

I'm still in the middle of the scene.`;

export default function InMyOwnWords() {
  return (
    <section
      id="words"
      style={{
        background: "#0a0a0a",
        padding: "120px 0 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top divider */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(201,168,76,0.15), transparent)",
        }}
      />

      {/* Spotlight */}
      <div
        style={{
          position: "absolute",
          top: 0, left: "50%",
          transform: "translateX(-50%)",
          width: "600px", height: "400px",
          background: "radial-gradient(ellipse 50% 80% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "40px", background: "rgba(201,168,76,0.4)" }} />
            <span
              className="font-sans"
              style={{ fontSize: "9px", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}
            >
              In My Own Words
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem,4vw,3.5rem)",
              fontWeight: 300,
              color: "#f5f0e8",
              lineHeight: 1.05,
            }}
          >
            Things I have said
            <br />
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #c9a84c 0%, #e8c97a 50%, #c9a84c 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              and meant
            </span>
          </h2>
        </div>

        {/* Quote grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2px",
            marginBottom: "100px",
          }}
        >
          {quotes.map((q, i) => (
            <div
              key={i}
              style={{
                background: i % 2 === 0 ? "#0f0f0f" : "#111111",
                padding: "36px 28px",
                position: "relative",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#161616")}
              onMouseLeave={(e) => (e.currentTarget.style.background = i % 2 === 0 ? "#0f0f0f" : "#111111")}
            >
              {/* Opening quote mark */}
              <div
                className="font-serif"
                style={{
                  fontSize: "4rem",
                  color: "rgba(201,168,76,0.1)",
                  lineHeight: 1,
                  marginBottom: "8px",
                  fontWeight: 300,
                  userSelect: "none",
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <p
                className="font-serif"
                style={{
                  fontSize: "clamp(1rem,1.5vw,1.1rem)",
                  color: "rgba(245,240,232,0.75)",
                  lineHeight: 1.7,
                  fontStyle: "italic",
                  fontWeight: 300,
                  marginBottom: "20px",
                }}
              >
                {q.text}
              </p>

              <p
                className="font-sans"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "rgba(201,168,76,0.45)",
                }}
              >
                {q.context}
              </p>

              {/* Bottom accent */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  height: "1px",
                  background: "linear-gradient(to right, rgba(201,168,76,0.15), transparent)",
                }}
              />
            </div>
          ))}
        </div>

        {/* ── Closing monologue ── */}
        <div
          style={{
            borderTop: "1px solid rgba(201,168,76,0.1)",
            paddingTop: "80px",
            paddingBottom: "120px",
          }}
        >
          {/* Stage direction */}
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(0.7rem,1vw,0.85rem)",
              fontStyle: "italic",
              color: "rgba(201,168,76,0.35)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            [ The final monologue. No music. Just the voice. ]
          </p>

          {/* Monologue text */}
          <div
            style={{
              maxWidth: "680px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {closingMonologue.split("\n\n").map((para, i) => {
              const isSignature = para.startsWith("I am Manav");
              const isEnding    = para === "The curtain hasn't fallen yet." || para === "I'm still in the middle of the scene.";

              return (
                <p
                  key={i}
                  className="font-serif"
                  style={{
                    fontSize: isSignature
                      ? "clamp(1.1rem,1.8vw,1.3rem)"
                      : isEnding
                      ? "clamp(1.2rem,2vw,1.5rem)"
                      : "clamp(1rem,1.5vw,1.1rem)",
                    color: isSignature
                      ? "rgba(245,240,232,0.85)"
                      : isEnding
                      ? "rgba(201,168,76,0.8)"
                      : i === 0
                      ? "rgba(245,240,232,0.7)"
                      : "rgba(245,240,232,0.5)",
                    lineHeight: 1.95,
                    fontWeight: 300,
                    fontStyle: isEnding ? "italic" : "normal",
                    textAlign: isEnding ? "center" : "left",
                  }}
                >
                  {para}
                </p>
              );
            })}
          </div>

          {/* Signature */}
          <div
            style={{
              marginTop: "64px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                height: "1px",
                width: "80px",
                background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)",
              }}
            />
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(1.5rem,3vw,2.2rem)",
                color: "rgba(245,240,232,0.6)",
                fontStyle: "italic",
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            >
              Manav Arora
            </p>
            <p
              className="font-sans"
              style={{
                fontSize: "9px",
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "rgba(201,168,76,0.4)",
              }}
            >
              Performer · Visual Artist · Storyteller
            </p>
          </div>

          {/* CTA row */}
          <div
            style={{
              marginTop: "64px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <Link
              href="/#contact"
              style={{
                background: "#c9a84c",
                color: "#050505",
                fontWeight: 700,
                fontSize: "11px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "16px 36px",
                textDecoration: "none",
                transition: "background 0.3s ease",
                display: "inline-block",
              }}
              className="font-sans"
              onMouseEnter={(e) => (e.currentTarget.style.background = "#e8c97a")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#c9a84c")}
            >
              Work with me
            </Link>
            <Link
              href="/theatre"
              style={{
                border: "1px solid rgba(201,168,76,0.35)",
                color: "rgba(201,168,76,0.8)",
                fontSize: "11px",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                padding: "16px 36px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "inline-block",
              }}
              className="font-sans"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                e.currentTarget.style.borderColor = "#c9a84c";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)";
              }}
            >
              See the work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
