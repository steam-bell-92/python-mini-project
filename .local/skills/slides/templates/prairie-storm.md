# Prairie Storm

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "PrairieStorm" template features a rustic and atmospheric aesthetic, evoking the feeling of a stormy wheat field. The background consists of a full-screen image of a stormy wheat field located at "/__mockup/photos/stormy-wheat-field.png," overlaid with a linear gradient that transitions from transparent to rgba(25,20,15,0.85) at 70% and rgba(25,20,15,0.95) at 100%. Text elements utilize the 'Inter' sans-serif font for body and subtitle text, while the title is rendered in Georgia serif, creating a contrast between modern and classic styles. Key colors include a soft beige (#E8DFD0) for the title, a muted gold (#B5A07A) for accents, and a dark brown gradient for the overlay. The layout features a right-aligned content area with a chapter label, title, separator line, and subtitle, all positioned to create a balanced and visually appealing composition. The overall aesthetic feel is "rustic elegance."

## Source Code

**Component:** `PrairieStorm`

### Slide 1 — Title (`slide-styles/PrairieStorm.tsx`)

```tsx
export function PrairieStorm() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/stormy-wheat-field.png"
        alt="Stormy Wheat Field"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, transparent 0%, transparent 30%, rgba(25,20,15,0.85) 70%, rgba(25,20,15,0.95) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: "8vw",
          paddingLeft: "45vw", // Keep text on the right side
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: "100%" }}>
          {/* Chapter Label */}
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1vw",
              fontWeight: 500,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#B5A07A",
              marginBottom: "2vh",
            }}
          >
            CHAPTER ONE
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "6vw",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
              color: "#E8DFD0",
              letterSpacing: "-0.02em",
            }}
          >
            Example Deck
          </h1>

          {/* Separator Line */}
          <div
            style={{
              width: "12vw",
              height: "0.2vh",
              backgroundColor: "#B5A07A",
              margin: "4vh 0",
              opacity: 0.8,
            }}
          />

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.8vw",
              lineHeight: 1.5,
              fontWeight: 300,
              color: "#B5A07A",
              margin: 0,
              maxWidth: "35vw",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>
      </div>

      {/* Bottom Right Corner Text */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          right: "4vw",
          zIndex: 2,
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#B5A07A",
          letterSpacing: "0.1em",
          opacity: 0.6,
        }}
      >
        acme.co
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/PrairieStormPage2.tsx`)

```tsx
export function PrairieStormPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#19140F",
      }}
    >
      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          padding: "10vh 8vw",
          boxSizing: "border-box",
        }}
      >
        {/* Left Column: Title & Intro */}
        <div style={{ flex: "1", paddingRight: "4vw", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9vw",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B5A07A",
              marginBottom: "2vh",
            }}
          >
            01 / Strategy Overview
          </div>

          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "4.5vw",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: "0 0 4vh 0",
              color: "#E8DFD0",
              letterSpacing: "-0.01em",
            }}
          >
            Weathering the market shifts
          </h2>

          <div
            style={{
              width: "4vw",
              height: "0.2vh",
              backgroundColor: "#B5A07A",
              marginBottom: "4vh",
              opacity: 0.8,
            }}
          />

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.4vw",
              lineHeight: 1.6,
              fontWeight: 300,
              color: "#B5A07A",
              margin: 0,
            }}
          >
            To thrive in volatile conditions, we must anchor our approach in resilience. We are shifting from short-term reactivity to long-term structural integrity.
          </p>
        </div>

        {/* Right Column: Key Points */}
        <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", gap: "5vh", paddingLeft: "4vw", borderLeft: "1px solid rgba(181, 160, 122, 0.2)" }}>
          {[
            {
              title: "Strategic Depth",
              desc: "Deepening our core competencies rather than expanding horizontally into unproven markets.",
            },
            {
              title: "Resource Allocation",
              desc: "Conserving capital for high-impact, defensible initiatives that guarantee return on investment.",
            },
            {
              title: "Market Positioning",
              desc: "Securing premium positioning to offset volume fluctuations through higher margin capture.",
            },
          ].map((item, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "column" }}>
              <h3
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.8vw",
                  fontWeight: 400,
                  color: "#E8DFD0",
                  margin: "0 0 1vh 0",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1vw",
                  lineHeight: 1.5,
                  fontWeight: 300,
                  color: "#B5A07A",
                  margin: 0,
                  opacity: 0.8,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "8vw",
          right: "8vw",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#B5A07A",
          letterSpacing: "0.1em",
          opacity: 0.6,
        }}
      >
        <span>acme.co</span>
        <span>02</span>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/PrairieStormPage3.tsx`)

```tsx
export function PrairieStormPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#19140F",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "10vh 8vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "8vh" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9vw",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#B5A07A",
              marginBottom: "2vh",
            }}
          >
            02 / Market Data
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "3.5vw",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
              color: "#E8DFD0",
              letterSpacing: "-0.01em",
            }}
          >
            Performance Metrics
          </h2>
        </div>

        {/* Data Visualization */}
        <div style={{ display: "flex", flex: 1, gap: "6vw", alignItems: "flex-end", paddingBottom: "10vh" }}>
          
          {/* Chart Area */}
          <div style={{ flex: "2", display: "flex", alignItems: "flex-end", gap: "2vw", height: "100%", borderBottom: "1px solid rgba(181, 160, 122, 0.3)" }}>
            {[
              { label: "Q1", value: 30, color: "rgba(181, 160, 122, 0.3)" },
              { label: "Q2", value: 45, color: "rgba(181, 160, 122, 0.5)" },
              { label: "Q3", value: 65, color: "rgba(181, 160, 122, 0.8)" },
              { label: "Q4", value: 100, color: "#E8DFD0" },
            ].map((bar, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%" }}>
                <div
                  style={{
                    width: "100%",
                    height: `${bar.value}%`,
                    backgroundColor: bar.color,
                    transition: "height 1s ease-out",
                  }}
                />
                <div
                  style={{
                    marginTop: "2vh",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1vw",
                    color: "#B5A07A",
                    letterSpacing: "0.1em",
                  }}
                >
                  {bar.label}
                </div>
              </div>
            ))}
          </div>

          {/* Stats Area */}
          <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "6vh" }}>
            {[
              { value: "+42%", label: "YOY Growth", desc: "Sustained momentum in key demographics." },
              { value: "18.5%", label: "Margin Increase", desc: "Driven by operational efficiencies." }
            ].map((stat, i) => (
              <div key={i}>
                <div
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "5vw",
                    color: "#E8DFD0",
                    lineHeight: 1,
                    marginBottom: "1vh",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.2vw",
                    fontWeight: 500,
                    color: "#B5A07A",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "1vh",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1vw",
                    fontWeight: 300,
                    color: "#B5A07A",
                    opacity: 0.7,
                    lineHeight: 1.5,
                  }}
                >
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "8vw",
          right: "8vw",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#B5A07A",
          letterSpacing: "0.1em",
          opacity: 0.6,
        }}
      >
        <span>acme.co</span>
        <span>03</span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/PrairieStormPage4.tsx`)

```tsx
export function PrairieStormPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/stormy-wheat-field.png"
        alt="Stormy Wheat Field"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          transform: "scale(1.05)", // Slight zoom for a different feel
        }}
      />

      {/* Gradient Overlay - Darker for the closing slide */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, rgba(25,20,15,0.95) 0%, rgba(25,20,15,0.8) 50%, rgba(25,20,15,0.6) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 15vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1vw",
            fontWeight: 500,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#B5A07A",
            marginBottom: "3vh",
          }}
        >
          The Path Forward
        </div>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "5vw",
            fontWeight: 400,
            lineHeight: 1.1,
            margin: "0 0 4vh 0",
            color: "#E8DFD0",
            letterSpacing: "-0.01em",
          }}
        >
          Let's build resilience together.
        </h2>

        <div
          style={{
            width: "8vw",
            height: "0.2vh",
            backgroundColor: "#B5A07A",
            margin: "0 auto 5vh auto",
            opacity: 0.8,
          }}
        />

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.4vw",
            lineHeight: 1.6,
            fontWeight: 300,
            color: "#B5A07A",
            margin: "0 0 6vh 0",
            maxWidth: "40vw",
          }}
        >
          Reach out to our strategy team to begin adapting your approach for the upcoming market cycles.
        </p>

        <div
          style={{
            padding: "1.5vh 3vw",
            border: "1px solid #B5A07A",
            color: "#E8DFD0",
            fontFamily: "'Inter', sans-serif",
            fontSize: "1vw",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            backgroundColor: "rgba(181, 160, 122, 0.1)",
            transition: "all 0.3s ease",
          }}
        >
          Contact Us
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "8vw",
          right: "8vw",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#B5A07A",
          letterSpacing: "0.1em",
          opacity: 0.6,
        }}
      >
        <span>acme.co</span>
        <span>04</span>
      </div>
    </div>
  );
}
```
