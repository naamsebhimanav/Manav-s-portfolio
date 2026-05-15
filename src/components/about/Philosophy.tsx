"use client";

const beliefs = [
  {
    number: "I",
    title: "Stories are not entertainment. They are survival.",
    body: `Long before we had medicine, we had stories. Long before we had science, we had myths. Long before we had therapy, we had theatre.

Stories are how human beings process the things that are too large to hold alone. Grief. Love. Fear. The particular terror of being alive and not knowing why. We tell stories because we have to. Because the alternative — carrying everything in silence — is unbearable.

When I perform, I am not entertaining you. I am offering you a container for something you might not have words for yet. That is the oldest and most important function of art. Not to decorate life. To make it liveable.`,
  },
  {
    number: "II",
    title: "The body knows things the mind refuses to admit.",
    body: `I learned this on stage. You can rehearse a scene a hundred times and still not find it. And then one night, something shifts — a breath, a pause, a weight in the hands — and suddenly the scene is alive in a way it never was in rehearsal.

The body is not a vehicle for the mind. It is a mind of its own. It holds memory, trauma, joy, and instinct in ways that language cannot access. Physical theatre taught me this. Painting taught me this. The way a brushstroke changes when you're angry versus when you're at peace — the body knows.

My practice, across every medium, is an attempt to listen to what the body already knows and give it a form that others can witness.`,
  },
  {
    number: "III",
    title: "Vulnerability is not weakness. It is the only honest currency.",
    body: `The most powerful moments I have witnessed on stage — and in life — are moments of complete, unguarded honesty. Not the performed kind. The real kind. The kind that makes the performer look away and the audience lean forward.

We live in a world that rewards confidence and punishes doubt. That celebrates the finished product and hides the process. That asks you to be certain when certainty is the least honest thing you can offer.

I make art that is uncertain. That asks questions it cannot answer. That shows the doubt alongside the beauty. Because I believe the audience can feel the difference between a performance and a confession. And I would rather confess.`,
  },
  {
    number: "IV",
    title: "Every medium is the same conversation in a different language.",
    body: `Theatre. Painting. Design. Content creation. People ask me how I do all of these things, as if they are separate disciplines requiring separate selves.

They are not. They are the same impulse — the need to take something internal and make it external. To take the invisible and give it a body. The medium changes. The conversation doesn't.

A painting is a performance with no audience. A performance is a painting that breathes. A design is a story told in negative space. A reel is a monologue with a soundtrack.

I am not a multi-disciplinary artist. I am one artist with many voices. And they are all saying the same thing.`,
  },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{
        background: "#0a0a0a",
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

      {/* Ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px", height: "600px",
          background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,168,76,0.03) 0%, transparent 70%)",
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
              Philosophy
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
            What I believe
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
              about all of this
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
            Not a manifesto. Not a mission statement. Just the things I keep coming back to, no matter what I&apos;m making.
          </p>
        </div>

        {/* Beliefs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "72px" }}>
          {beliefs.map((b, i) => (
            <div
              key={b.number}
              style={{
                display: "grid",
                gridTemplateColumns: "48px 1fr",
                gap: "0 32px",
              }}
            >
              {/* Roman numeral */}
              <div style={{ paddingTop: "4px" }}>
                <span
                  className="font-serif"
                  style={{
                    fontSize: "clamp(2rem,3vw,2.5rem)",
                    color: "rgba(201,168,76,0.15)",
                    fontWeight: 300,
                    lineHeight: 1,
                    display: "block",
                  }}
                >
                  {b.number}
                </span>
              </div>

              {/* Content */}
              <div>
                {/* Title */}
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "clamp(1.1rem,2vw,1.5rem)",
                    color: "#f5f0e8",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    marginBottom: "28px",
                  }}
                >
                  {b.title}
                </h3>

                {/* Body */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {b.body.split("\n\n").map((para, j) => (
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

                {/* Divider after each belief except last */}
                {i < beliefs.length - 1 && (
                  <div
                    style={{
                      marginTop: "48px",
                      height: "1px",
                      background: "linear-gradient(to right, rgba(201,168,76,0.12), transparent)",
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
