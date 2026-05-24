# Music Label

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "MusicLabel" template embodies a modern and sophisticated aesthetic, suitable for a music studio presentation. The background color is a solid #0C080F, complemented by a full-bleed background image of a recording studio located at "/__mockup/photos/recording-studio.png". A gradient overlay transitions from transparent to rgba(12,8,15,0.88) on the right half of the slide. Text colors include #9B8BB4 for general text, #C4A060 for accents, and #F0ECE4 for the main title. The font families used are 'DM Mono', a monospace font for captions and details, and 'Playfair Display', a serif font for the main title and subtitle, enhancing the elegant feel. Key layout elements include right-aligned text, decorative horizontal lines, and a structured arrangement of content that creates a clean and organized look. The overall aesthetic feel is modern elegance.

## Source Code

**Component:** `MusicLabel`

### Slide 1 — Title (`slide-styles/MusicLabel.tsx`)

```tsx
export function MusicLabel() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0C080F",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Full Bleed Background Image */}
      <img
        src="/__mockup/photos/recording-studio.png"
        alt="Recording Studio"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      
      {/* Gradient Overlay on right 50% */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to right, transparent 40%, rgba(12,8,15,0.88) 100%)",
          zIndex: 2,
        }}
      />
      
      {/* Content right-aligned */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: "6vw",
          zIndex: 3,
          textAlign: "right",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#9B8BB4",
            fontSize: "1.2vw",
            letterSpacing: "0.2em",
            marginBottom: "3vh",
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
          }}
        >
          <span style={{ textTransform: "uppercase" }}>SOUND & VISION</span>
          <span style={{ color: "#C4A060" }}>—</span>
          <span>STUDIO SESSION</span>
        </div>
        
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#F0ECE4",
            fontSize: "6vw",
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            marginBottom: "4vh",
            maxWidth: "45vw",
          }}
        >
          Example Deck
        </div>

        <div
          style={{
            width: "8vw",
            height: "0.2vh",
            backgroundColor: "#C4A060",
            marginBottom: "4vh",
          }}
        />

        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#9B8BB4",
            fontSize: "1.8vw",
            fontWeight: 400,
            maxWidth: "40vw",
            lineHeight: 1.5,
            fontStyle: "italic",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          right: "6vw",
          zIndex: 3,
          fontFamily: "'DM Mono', monospace",
          color: "#9B8BB4",
          fontSize: "1vw",
          letterSpacing: "0.1em",
        }}
      >
        acme.co
      </div>

      <div
        style={{
          position: "absolute",
          top: "4vh",
          right: "6vw",
          zIndex: 3,
          fontFamily: "'DM Mono', monospace",
          color: "#9B8BB4",
          fontSize: "1vw",
          letterSpacing: "0.1em",
        }}
      >
        Vol. I
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/MusicLabelPage2.tsx`)

```tsx
export function MusicLabelPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0C080F",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          right: "-10vw",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(155,139,180,0.05) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      <div style={{ zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.2em",
              display: "flex",
              alignItems: "center",
              gap: "1.5vw",
            }}
          >
            <span style={{ textTransform: "uppercase" }}>THE ROSTER</span>
            <span style={{ color: "#C4A060" }}>—</span>
            <span>ARTIST DEVELOPMENT</span>
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            Vol. I
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", gap: "8vw", flex: 1 }}>
          <div style={{ flex: "0 0 35vw" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F0ECE4",
                fontSize: "4.5vw",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                margin: "0 0 3vh 0",
              }}
            >
              Cultivating the next generation of sound.
            </h2>
            <div
              style={{
                width: "4vw",
                height: "0.2vh",
                backgroundColor: "#C4A060",
                marginBottom: "4vh",
              }}
            />
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#9B8BB4",
                fontSize: "1.5vw",
                fontWeight: 400,
                lineHeight: 1.5,
                fontStyle: "italic",
                margin: 0,
              }}
            >
              Our approach to A&amp;R focuses on long-term career building rather than fleeting viral moments.
            </p>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5vh", justifyContent: "center" }}>
            {[
              { title: "Global Reach", desc: "Connecting local scenes to worldwide audiences through strategic partnerships." },
              { title: "Creative Freedom", desc: "Providing the resources and space for artists to realize their vision without compromise." },
              { title: "Catalog Legacy", desc: "Building enduring bodies of work that stand the test of time and shifting trends." }
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "2vw" }}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "#C4A060",
                    fontSize: "1.2vw",
                    marginTop: "0.5vh",
                  }}
                >
                  0{i + 1}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "#F0ECE4",
                      fontSize: "2vw",
                      fontWeight: 600,
                      margin: "0 0 1vh 0",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: "#9B8BB4",
                      fontSize: "0.9vw",
                      lineHeight: 1.6,
                      margin: 0,
                      maxWidth: "28vw",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            02
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            acme.co
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/MusicLabelPage3.tsx`)

```tsx
export function MusicLabelPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0C080F",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6vh" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.2em",
              display: "flex",
              alignItems: "center",
              gap: "1.5vw",
            }}
          >
            <span style={{ textTransform: "uppercase" }}>MARKET IMPACT</span>
            <span style={{ color: "#C4A060" }}>—</span>
            <span>STREAMING METRICS</span>
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            Vol. I
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F0ECE4",
              fontSize: "3.5vw",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              margin: "0 0 6vh 0",
              textAlign: "center",
            }}
          >
            Global Streaming Growth
          </h2>

          <div style={{ display: "flex", justifyContent: "center", gap: "6vw", alignItems: "flex-end", height: "40vh", marginBottom: "6vh" }}>
            {[
              { year: "2021", value: 35, label: "1.2B" },
              { year: "2022", value: 50, label: "2.8B" },
              { year: "2023", value: 75, label: "5.4B" },
              { year: "2024", value: 100, label: "8.9B" },
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "#C4A060",
                    fontSize: "1.2vw",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    width: "8vw",
                    height: `${stat.value * 0.4}vh`,
                    background: i === 3 ? "linear-gradient(to top, rgba(196,160,96,0.2), rgba(196,160,96,1))" : "rgba(155,139,180,0.2)",
                    borderTop: i === 3 ? "none" : "1px solid #9B8BB4",
                  }}
                />
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "#9B8BB4",
                    fontSize: "1vw",
                  }}
                >
                  {stat.year}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "8vw" }}>
            {[
              { stat: "+214%", text: "YOY Growth" },
              { stat: "45M", text: "Monthly Listeners" },
              { stat: "12", text: "Platinum Records" }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#F0ECE4",
                    fontSize: "3vw",
                    fontWeight: 600,
                    marginBottom: "1vh",
                  }}
                >
                  {item.stat}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "#9B8BB4",
                    fontSize: "0.9vw",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            03
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            acme.co
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/MusicLabelPage4.tsx`)

```tsx
export function MusicLabelPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0C080F",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      {/* Background aesthetic lines */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        width: "1px",
        height: "100vh",
        backgroundColor: "rgba(155,139,180,0.1)",
        zIndex: 1
      }} />
      <div style={{
        position: "absolute",
        top: "50%",
        left: 0,
        width: "100vw",
        height: "1px",
        backgroundColor: "rgba(155,139,180,0.1)",
        zIndex: 1
      }} />

      <div style={{ zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.2em",
            }}
          >
            CONTACT
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            Vol. I
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#C4A060",
              fontSize: "1vw",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "3vh",
            }}
          >
            Join the Movement
          </div>
          
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F0ECE4",
              fontSize: "6vw",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              margin: "0 0 4vh 0",
              maxWidth: "60vw",
            }}
          >
            Shape the future of sound with us.
          </h2>

          <div
            style={{
              width: "6vw",
              height: "0.2vh",
              backgroundColor: "#C4A060",
              marginBottom: "6vh",
            }}
          />

          <div style={{ display: "flex", gap: "4vw" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#9B8BB4", fontSize: "0.9vw", textTransform: "uppercase" }}>Inquiries</div>
              <div style={{ fontFamily: "'Playfair Display', serif", color: "#F0ECE4", fontSize: "1.5vw", fontStyle: "italic" }}>hello@acme.co</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#9B8BB4", fontSize: "0.9vw", textTransform: "uppercase" }}>Studio</div>
              <div style={{ fontFamily: "'Playfair Display', serif", color: "#F0ECE4", fontSize: "1.5vw", fontStyle: "italic" }}>Los Angeles, CA</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            04
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#9B8BB4",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            acme.co
          </div>
        </div>
      </div>
    </div>
  );
}
```
