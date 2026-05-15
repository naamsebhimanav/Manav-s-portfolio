"use client";

const drivers = [
  {
    symbol: "◈",
    title: "The fear of being forgotten",
    body: `I don't mean that in a vain way. I mean it in the way that every human being, at some point in the dark, wonders whether their presence on this earth will leave any trace at all.

Art is my answer to that fear. Not because it makes me immortal — it doesn't — but because it forces me to be fully present. When I am on stage, or in front of a canvas, or writing a script, I am not thinking about legacy. I am thinking about this moment, this breath, this line. And that presence is the only antidote I have found to the terror of impermanence.

I make things because making things is the most alive I ever feel.`,
  },
  {
    symbol: "◇",
    title: "The people who never got to tell their story",
    body: `I grew up watching people carry things they couldn't name. Grief that had no ceremony. Joy that had no witness. Anger that had no language. People who were full of stories and had no stage to tell them on.

Theatre gave me a stage. But more than that, it gave me a responsibility. Every character I play is a stand-in for someone who never got to speak. Every painting is a portrait of a feeling that someone felt but couldn't express. Every piece of content I create is a message in a bottle, thrown into the ocean, hoping it reaches the person who needed it.

I create for the people who are sitting in the dark, feeling something they can't explain, wondering if anyone else has ever felt it too.

They have. I have. That's why I make things.`,
  },
  {
    symbol: "◉",
    title: "The unfinished conversation between art and life",
    body: `Art doesn't resolve things. That's what I love about it and what makes it maddening.

A painting doesn't answer the question it raises. A performance doesn't solve the problem it dramatises. A story doesn't tell you what to do with the feeling it gives you. Art opens a wound and then hands you the needle and thread and says: you figure out the rest.

I am drawn to that incompleteness. I am drawn to the work that sits with you after you leave the gallery, after the curtain falls, after you put down your phone. The work that follows you home and asks you something you weren't ready to answer.

That's what I want to make. Not comfort. Not resolution. The kind of beauty that unsettles you just enough to make you look at your own life differently.`,
  },
  {
    symbol: "◎",
    title: "The moment when a stranger becomes less of a stranger",
    body: `There is a specific moment in theatre — I have felt it as a performer and as an audience member — when the distance between the stage and the seats collapses. When something happens in the room that makes everyone present feel, for a few seconds, that they are not alone.

It doesn't happen every night. It can't be manufactured. It arrives when the work is honest enough and the audience is open enough and something in the air between them catches fire.

I have spent my entire creative life chasing that moment. Not the applause. Not the award. That moment. The one where a stranger in the third row leans forward slightly, and you know — you know — that something you made has reached them.

That is why I do this. That is the only reason that has ever been enough.`,
  },
];

export default function WhatDrivesMe() {
  return (
    <section
      id="drives"
      style={{
        background: "#050505",
        padding: "120px 0",
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

      {/* Side glow */}
      <div
        style={{
          position: "absolute",
          top: 0, left: 0,
          width: "40%", height: "100%",
          background: "radial-gradient(ellipse 60% 80% at 0% 50%, rgba(28,16,8,0.4) 0%, transparent 70%)",
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
              What Drives Me
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem,4vw,3.5rem)",
              fontWeight: 300,
              color: "#f5f0e8",
              lineHeight: 1.05,
              marginBottom: "24px",
            }}
          >
            The things that
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
              keep me making
            </span>
          </h2>
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(1rem,1.6vw,1.15rem)",
              fontStyle: "italic",
              color: "rgba(245,240,232,0.35)",
              lineHeight: 1.8,
              maxWidth: "500px",
            }}
          >
            Not ambition. Not discipline. The raw, irrational, deeply human reasons I cannot stop.
          </p>
        </div>

        {/* Drivers */}
        <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
          {drivers.map((d, i) => (
            <div key={d.title}>
              {/* Symbol + title row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                  marginBottom: "28px",
                }}
              >
                <span
                  className="font-serif"
                  style={{
                    fontSize: "1.8rem",
                    color: "rgba(201,168,76,0.4)",
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: "4px",
                  }}
                >
                  {d.symbol}
                </span>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "clamp(1.1rem,2vw,1.5rem)",
                    color: "#f5f0e8",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  {d.title}
                </h3>
              </div>

              {/* Body */}
              <div
                style={{
                  paddingLeft: "52px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {d.body.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    className="font-serif"
                    style={{
                      fontSize: "clamp(0.95rem,1.4vw,1.05rem)",
                      color: j === 0 ? "rgba(245,240,232,0.65)" : "rgba(245,240,232,0.45)",
                      lineHeight: 1.95,
                      fontWeight: 300,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Divider */}
              {i < drivers.length - 1 && (
                <div
                  style={{
                    marginTop: "56px",
                    height: "1px",
                    background: "linear-gradient(to right, rgba(201,168,76,0.1), transparent 60%)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
