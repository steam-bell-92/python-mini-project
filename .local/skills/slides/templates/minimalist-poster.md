# Minimalist Poster

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "MinimalistPoster" template embodies a clean and modern aesthetic, characterized by its simplicity and spacious layout. The background color is pure white (#FFFFFF), while the text colors include a dark gray (#111111) for primary text, a lighter gray (#666666) for the "DECK" label, a medium gray (#444444) for the subtitle, and a softer gray (#999999) for the "Confidential" label. The font family used is 'Inter', sans-serif, which is applied throughout for a contemporary feel. Key layout elements include a flexible positioning of text blocks, with the main title "EXAMPLE" prominently displayed in bold at the center bottom, and additional text elements strategically placed in the upper corners. There are no background images used in this template. The overall aesthetic feel can be described as "clean, modern, minimalist."

## Source Code

**Component:** `MinimalistPoster`

### Slide 1 — Title (`slide-styles/MinimalistPoster.tsx`)

```tsx
export function MinimalistPoster() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        color: "#111111",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "12vh",
          left: "8vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: "12vw",
            fontWeight: 200,
            lineHeight: 0.8,
            letterSpacing: "-0.05em",
            marginLeft: "2vw",
            color: "#666666",
          }}
        >
          DECK
        </div>
        <div
          style={{
            fontSize: "12vw",
            fontWeight: 900,
            lineHeight: 0.8,
            letterSpacing: "-0.06em",
          }}
        >
          EXAMPLE
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          maxWidth: "30vw",
          fontSize: "1.2vw",
          fontWeight: 400,
          color: "#444444",
          lineHeight: 1.4,
        }}
      >
        Your compelling subtitle goes here. Describe your big idea in a single sentence.
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "6vw",
          fontSize: "0.8vw",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        acme.co / 2026
      </div>
      
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "6vw",
          fontSize: "0.8vw",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#999999",
        }}
      >
        Confidential
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/MinimalistPosterPage2.tsx`)

```tsx
export function MinimalistPosterPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        color: "#111111",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          fontSize: "1.2vw",
          fontWeight: 400,
          color: "#444444",
          lineHeight: 1.4,
        }}
      >
        Strategy Overview
      </div>

      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "8vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: "6vw",
            fontWeight: 200,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            color: "#666666",
          }}
        >
          CORE
        </div>
        <div
          style={{
            fontSize: "6vw",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
          }}
        >
          PRINCIPLES
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "45vh",
          left: "8vw",
          width: "40vw",
          display: "flex",
          flexDirection: "column",
          gap: "4vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.01em" }}>01. Simplicity</div>
          <div style={{ fontSize: "1vw", fontWeight: 400, color: "#666666", lineHeight: 1.5 }}>
            Removing the unnecessary so the necessary may speak. We focus on absolute clarity in every interaction.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.01em" }}>02. Utility</div>
          <div style={{ fontSize: "1vw", fontWeight: 400, color: "#666666", lineHeight: 1.5 }}>
            Form follows function. Every element must serve a distinct and measurable purpose.
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.01em" }}>03. Elegance</div>
          <div style={{ fontSize: "1vw", fontWeight: 400, color: "#666666", lineHeight: 1.5 }}>
            Achieving maximum impact with minimal effort. Refinement through reduction.
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          fontSize: "0.8vw",
          fontWeight: 500,
          letterSpacing: "0.1em",
          color: "#999999",
        }}
      >
        02
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "6vw",
          fontSize: "0.8vw",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        acme.co / 2026
      </div>
      
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "6vw",
          fontSize: "0.8vw",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#999999",
        }}
      >
        Confidential
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/MinimalistPosterPage3.tsx`)

```tsx
export function MinimalistPosterPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        color: "#111111",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          fontSize: "1.2vw",
          fontWeight: 400,
          color: "#444444",
          lineHeight: 1.4,
        }}
      >
        Performance Metrics
      </div>

      <div
        style={{
          position: "absolute",
          top: "30vh",
          left: "8vw",
          display: "flex",
          flexDirection: "row",
          gap: "8vw",
          width: "84vw",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "12vw",
              fontWeight: 900,
              lineHeight: 0.8,
              letterSpacing: "-0.06em",
            }}
          >
            84%
          </div>
          <div
            style={{
              marginTop: "2vh",
              fontSize: "1.2vw",
              fontWeight: 500,
              color: "#666666",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Growth Rate
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "12vw",
              fontWeight: 200,
              lineHeight: 0.8,
              letterSpacing: "-0.06em",
              color: "#666666",
            }}
          >
            $2.4
          </div>
          <div
            style={{
              marginTop: "2vh",
              fontSize: "1.2vw",
              fontWeight: 500,
              color: "#666666",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Million Revenue
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20vh",
          left: "8vw",
          width: "50vw",
          fontSize: "1.5vw",
          fontWeight: 400,
          lineHeight: 1.4,
          color: "#444444",
        }}
      >
        Our metrics speak volumes. By focusing on essentials, we have outpaced industry standards and redefined the benchmark for operational efficiency.
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          fontSize: "0.8vw",
          fontWeight: 500,
          letterSpacing: "0.1em",
          color: "#999999",
        }}
      >
        03
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "6vw",
          fontSize: "0.8vw",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        acme.co / 2026
      </div>
      
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "6vw",
          fontSize: "0.8vw",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#999999",
        }}
      >
        Confidential
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/MinimalistPosterPage4.tsx`)

```tsx
export function MinimalistPosterPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#111111",
        color: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          fontSize: "1.2vw",
          fontWeight: 400,
          color: "#AAAAAA",
          lineHeight: 1.4,
        }}
      >
        Next Steps
      </div>

      <div
        style={{
          position: "absolute",
          top: "35vh",
          left: "8vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: "12vw",
            fontWeight: 200,
            lineHeight: 0.8,
            letterSpacing: "-0.05em",
            marginLeft: "2vw",
            color: "#888888",
          }}
        >
          LET&apos;S
        </div>
        <div
          style={{
            fontSize: "12vw",
            fontWeight: 900,
            lineHeight: 0.8,
            letterSpacing: "-0.06em",
          }}
        >
          CONNECT
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "20vh",
          left: "8vw",
          display: "flex",
          gap: "4vw",
          fontSize: "1.2vw",
          fontWeight: 400,
          color: "#CCCCCC",
        }}
      >
        <div>
          <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5vh" }}>Email</div>
          <div>hello@acme.co</div>
        </div>
        <div>
          <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5vh" }}>Phone</div>
          <div>+1 (555) 123-4567</div>
        </div>
        <div>
          <div style={{ fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5vh" }}>Office</div>
          <div>100 Market St, SF</div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          fontSize: "0.8vw",
          fontWeight: 500,
          letterSpacing: "0.1em",
          color: "#666666",
        }}
      >
        04
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "6vw",
          fontSize: "0.8vw",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#FFFFFF",
        }}
      >
        acme.co / 2026
      </div>
      
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "6vw",
          fontSize: "0.8vw",
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#666666",
        }}
      >
        Confidential
      </div>
    </div>
  );
}
```
