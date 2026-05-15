"use client";

const moments = [
  {
    year: "Age 8",
    act: "The First Stage",
    text: `I didn't choose theatre. Theatre chose me the way a fever chooses you — suddenly, completely, without asking permission.

I was eight years old, standing in the wings of a school auditorium, watching the older kids perform. The lights were too bright. The costumes were cheap. The script was forgettable. But something happened in that room that I have spent the rest of my life trying to understand.

The audience stopped being an audience. They became witnesses. And the performers stopped being people I knew from class. They became something else entirely.

I walked home that night and told my mother I wanted to be on stage. She thought it was a phase.`,
    aside: "It was not a phase.",
  },
  {
    year: "Age 14",
    act: "The First Character",
    text: `My first real role was a villain in a school production. I was terrible. I knew I was terrible. But I remember the moment I stopped trying to act and started trying to feel — and something shifted.

The character had a reason for everything he did. He wasn't evil. He was afraid. And the moment I understood his fear, I stopped performing him and started being him.

That's when I learned the first truth of theatre: every character, no matter how broken, believes they are the hero of their own story. Your job is not to judge them. Your job is to understand them so completely that the audience has no choice but to feel something.`,
    aside: "Understanding, not judgment. That became my compass.",
  },
  {
    year: "Age 17",
    act: "The First Failure",
    text: `I failed. Publicly. Completely.

A competition I had prepared for months. I forgot my lines in the middle of the most important monologue. Not a small forget — a total blank. The kind where you're standing in front of 400 people and the words you've said a thousand times in your bedroom simply cease to exist.

I stood there for what felt like an hour. It was probably twelve seconds.

I didn't win. I didn't even place. I walked off stage and sat in a bathroom stall and cried in a way I hadn't cried since I was a child.

But here's what I didn't know then: that failure was the most important performance of my life. Because it taught me that the stage doesn't care about your preparation. It only cares about your presence. And presence is not something you can rehearse. It's something you have to earn, over and over, every single time.`,
    aside: "Twelve seconds of silence taught me more than twelve months of rehearsal.",
  },
  {
    year: "Age 19",
    act: "The First Original Work",
    text: `I wrote my first original piece at nineteen. It was called Bahurupiya — the shape-shifter. A one-man show about a folk performer who earns his living by becoming other people, and slowly forgets who he is when he stops.

I didn't know it at the time, but I was writing about myself.

Every artist who performs long enough starts to wonder: where does the character end and the person begin? I had played so many people — villains, heroes, fools, kings — that I had started to feel like a collection of borrowed identities rather than a person with my own.

Bahurupiya was my attempt to answer that question. It won Best Solo Performance at the National Youth Theatre Festival. But more than the award, it gave me something I hadn't expected: a voice that was entirely my own.`,
    aside: "The work that scared me most became the work that defined me.",
  },
  {
    year: "Now",
    act: "The Ongoing Act",
    text: `I am still learning. I think that's the only honest thing I can say.

I paint because the stage isn't always available and the feeling doesn't wait. I design because visual language is another kind of performance — every composition is a scene, every colour choice is a mood, every typeface is a character.

I create content because I believe the stories that matter most are the ones that make people feel less alone. And I have felt alone enough to know how much that matters.

I am a performer. A visual artist. A storyteller. Not because I chose these things, but because they chose me, one by one, in the moments when I needed them most.

The stage is not where I go to escape. It's where I go to arrive.`,
    aside: "The work continues. The curtain never fully falls.",
  },
];

export default function TheJourney() {
  return (
    <section
      id="journey"
      style={{
        background: "#050505",
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Curtain lines */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.04,
          backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(201,168,76,1) 80px, rgba(201,168,76,1) 81px)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 lg:px-12">

        {/* Section opener */}
        <div style={{ marginBottom: "80px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ height: "1px", width: "40px", background: "rgba(201,168,76,0.4)" }} />
            <span
              className="font-sans"
              style={{ fontSize: "9px", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(201,168,76,0.6)" }}
            >
              The Journey
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
            How I became
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
              who I am
            </span>
          </h2>
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(1rem,1.6vw,1.15rem)",
              fontStyle: "italic",
              color: "rgba(245,240,232,0.35)",
              lineHeight: 1.8,
              maxWidth: "520px",
            }}
          >
            Not a résumé. Not a timeline. A series of moments that changed the way I see everything.
          </p>
        </div>

        {/* Moments */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {moments.map((m, i) => (
            <div
              key={m.year}
              style={{
                display: "grid",
                gridTemplateColumns: "80px 1fr",
                gap: "0 40px",
                paddingBottom: i < moments.length - 1 ? "72px" : "0",
                position: "relative",
              }}
            >
              {/* Left: year + line */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "6px" }}>
                <div
                  style={{
                    width: "36px", height: "36px",
                    borderRadius: "50%",
                    border: "1px solid rgba(201,168,76,0.35)",
                    background: "#0a0a0a",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, zIndex: 1,
                  }}
                >
                  <span
                    className="font-sans"
                    style={{ fontSize: "7px", color: "#c9a84c", fontWeight: 700, letterSpacing: "0.05em", textAlign: "center", lineHeight: 1.2 }}
                  >
                    {m.year}
                  </span>
                </div>
                {i < moments.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      width: "1px",
                      background: "linear-gradient(180deg, rgba(201,168,76,0.3) 0%, rgba(201,168,76,0.05) 100%)",
                      marginTop: "8px",
                    }}
                  />
                )}
              </div>

              {/* Right: content */}
              <div>
                {/* Act label */}
                <p
                  className="font-sans"
                  style={{
                    fontSize: "9px", letterSpacing: "0.4em", textTransform: "uppercase",
                    color: "rgba(201,168,76,0.5)", marginBottom: "12px",
                  }}
                >
                  {m.act}
                </p>

                {/* Body text — monologue style */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                  {m.text.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className="font-serif"
                      style={{
                        fontSize: "clamp(1rem,1.5vw,1.1rem)",
                        color: j === 0 ? "rgba(245,240,232,0.75)" : "rgba(245,240,232,0.55)",
                        lineHeight: 1.9,
                        fontWeight: 300,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Aside — like a stage direction */}
                <div
                  style={{
                    borderLeft: "2px solid rgba(201,168,76,0.35)",
                    paddingLeft: "20px",
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  }}
                >
                  <p
                    className="font-serif"
                    style={{
                      fontSize: "clamp(0.9rem,1.3vw,1rem)",
                      fontStyle: "italic",
                      color: "rgba(201,168,76,0.65)",
                      lineHeight: 1.7,
                    }}
                  >
                    {m.aside}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
