# Corporate Grid

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "CorporateGrid" template presents a clean, professional aesthetic characterized by a structured grid layout. The background color is #FFFFFF (white), while the grid lines are rendered in #F0F0F0 (light gray). Text colors include #3D5A80 (dark blue) for headings and accents, #999999 (light gray) for secondary text, #111111 (black) for the main title, and #666666 (medium gray) for the subtitle. The font family used is 'Inter', sans-serif, which is applied throughout for a modern and readable appearance. Key layout elements include a grid of horizontal and vertical lines, a small blue square positioned at the top left, and text elements aligned to the right and bottom left of the slide. There are no background images specified in the code. The overall aesthetic feel can be described as "modern corporate."

## Source Code

**Component:** `CorporateGrid`

### Slide 1 — Title (`slide-styles/CorporateGrid.tsx`)

```tsx
export function CorporateGrid() {
  const gridLinesH = Array.from({ length: 20 }).map((_, i) => (
    <div key={`h-${i}`} style={{ position: "absolute", top: `${i * 5}vh`, left: 0, width: "100vw", height: "1px", backgroundColor: "#F0F0F0", zIndex: 0 }} />
  ));
  
  const gridLinesV = Array.from({ length: 20 }).map((_, i) => (
    <div key={`v-${i}`} style={{ position: "absolute", top: 0, left: `${i * 5}vw`, width: "1px", height: "100vh", backgroundColor: "#F0F0F0", zIndex: 0 }} />
  ));

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative"
      }}
    >
      {gridLinesH}
      {gridLinesV}

      <div style={{ position: "absolute", top: "5vh", left: "5vw", width: "3vw", height: "3vw", backgroundColor: "#3D5A80", zIndex: 1 }} />
      
      <div style={{ position: "absolute", top: "5vh", right: "5vw", zIndex: 1, textAlign: "right" }}>
        <div style={{ color: "#3D5A80", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5vh" }}>
          Example Company, Inc.
        </div>
        <div style={{ color: "#999999", fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Confidential / 2026
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "10vh", left: "10vw", zIndex: 1, maxWidth: "60vw" }}>
        <div style={{ color: "#3D5A80", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "2vh" }}>
          acme.co
        </div>
        <h1
          style={{
            color: "#111111",
            fontSize: "7vw",
            margin: "0 0 2vh 0",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em"
          }}
        >
          Example Deck
        </h1>
        <p
          style={{
            color: "#666666",
            fontSize: "1.8vw",
            margin: 0,
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: "50vw"
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CorporateGridPage2.tsx`)

```tsx
export function CorporateGridPage2() {
  const gridLinesH = Array.from({ length: 20 }).map((_, i) => (
    <div key={`h-${i}`} style={{ position: "absolute", top: `${i * 5}vh`, left: 0, width: "100vw", height: "1px", backgroundColor: "#F0F0F0", zIndex: 0 }} />
  ));
  
  const gridLinesV = Array.from({ length: 20 }).map((_, i) => (
    <div key={`v-${i}`} style={{ position: "absolute", top: 0, left: `${i * 5}vw`, width: "1px", height: "100vh", backgroundColor: "#F0F0F0", zIndex: 0 }} />
  ));

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative"
      }}
    >
      {gridLinesH}
      {gridLinesV}

      <div style={{ position: "absolute", top: "5vh", left: "5vw", width: "3vw", height: "3vw", backgroundColor: "#3D5A80", zIndex: 1 }} />
      
      <div style={{ position: "absolute", top: "5vh", right: "5vw", zIndex: 1, textAlign: "right" }}>
        <div style={{ color: "#3D5A80", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5vh" }}>
          Example Company, Inc.
        </div>
        <div style={{ color: "#999999", fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Confidential / 2026
        </div>
      </div>

      <div style={{ position: "absolute", top: "20vh", left: "10vw", zIndex: 1, maxWidth: "80vw" }}>
        <h2
          style={{
            color: "#111111",
            fontSize: "4vw",
            margin: "0 0 4vh 0",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em"
          }}
        >
          Core Objectives
        </h2>
        
        <div style={{ display: "flex", gap: "5vw", marginTop: "5vh" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", padding: "3vw", border: "1px solid #E0E0E0", boxShadow: "0 1vh 2vh rgba(0,0,0,0.02)" }}>
            <div style={{ width: "2vw", height: "2vw", backgroundColor: "#3D5A80", marginBottom: "2vh" }} />
            <h3 style={{ color: "#111111", fontSize: "1.5vw", fontWeight: 600, margin: "0 0 1.5vh 0" }}>Operational Efficiency</h3>
            <p style={{ color: "#666666", fontSize: "1.1vw", lineHeight: 1.6, margin: 0 }}>
              Streamline internal processes to reduce overhead and accelerate project delivery times across all departments by 25%.
            </p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", padding: "3vw", border: "1px solid #E0E0E0", boxShadow: "0 1vh 2vh rgba(0,0,0,0.02)" }}>
            <div style={{ width: "2vw", height: "2vw", backgroundColor: "#98C1D9", marginBottom: "2vh" }} />
            <h3 style={{ color: "#111111", fontSize: "1.5vw", fontWeight: 600, margin: "0 0 1.5vh 0" }}>Market Expansion</h3>
            <p style={{ color: "#666666", fontSize: "1.1vw", lineHeight: 1.6, margin: 0 }}>
              Identify and penetrate three new geographic markets within the next fiscal year, leveraging our established logistics network.
            </p>
          </div>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", padding: "3vw", border: "1px solid #E0E0E0", boxShadow: "0 1vh 2vh rgba(0,0,0,0.02)" }}>
            <div style={{ width: "2vw", height: "2vw", backgroundColor: "#EE6C4D", marginBottom: "2vh" }} />
            <h3 style={{ color: "#111111", fontSize: "1.5vw", fontWeight: 600, margin: "0 0 1.5vh 0" }}>Product Innovation</h3>
            <p style={{ color: "#666666", fontSize: "1.1vw", lineHeight: 1.6, margin: 0 }}>
              Launch the next-generation platform with AI-driven analytics, ensuring we remain at the forefront of industry technology.
            </p>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", color: "#999999", fontSize: "0.9vw", fontWeight: 600 }}>
        02
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CorporateGridPage3.tsx`)

```tsx
export function CorporateGridPage3() {
  const gridLinesH = Array.from({ length: 20 }).map((_, i) => (
    <div key={`h-${i}`} style={{ position: "absolute", top: `${i * 5}vh`, left: 0, width: "100vw", height: "1px", backgroundColor: "#F0F0F0", zIndex: 0 }} />
  ));
  
  const gridLinesV = Array.from({ length: 20 }).map((_, i) => (
    <div key={`v-${i}`} style={{ position: "absolute", top: 0, left: `${i * 5}vw`, width: "1px", height: "100vh", backgroundColor: "#F0F0F0", zIndex: 0 }} />
  ));

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative"
      }}
    >
      {gridLinesH}
      {gridLinesV}

      <div style={{ position: "absolute", top: "5vh", left: "5vw", width: "3vw", height: "3vw", backgroundColor: "#3D5A80", zIndex: 1 }} />
      
      <div style={{ position: "absolute", top: "5vh", right: "5vw", zIndex: 1, textAlign: "right" }}>
        <div style={{ color: "#3D5A80", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5vh" }}>
          Example Company, Inc.
        </div>
        <div style={{ color: "#999999", fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Confidential / 2026
        </div>
      </div>

      <div style={{ position: "absolute", top: "20vh", left: "10vw", zIndex: 1, width: "80vw" }}>
        <h2
          style={{
            color: "#111111",
            fontSize: "4vw",
            margin: "0 0 2vh 0",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em"
          }}
        >
          Quarterly Growth
        </h2>
        <p style={{ color: "#666666", fontSize: "1.2vw", margin: "0 0 5vh 0", maxWidth: "40vw" }}>
          Consistent upward trajectory across all primary business sectors over the past 12 months.
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "40vh", borderBottom: "2px solid #3D5A80", paddingBottom: "2vh" }}>
          {[
            { q: "Q1", h: "40%", val: "$2.4M", col: "#98C1D9" },
            { q: "Q2", h: "55%", val: "$3.1M", col: "#98C1D9" },
            { q: "Q3", h: "75%", val: "$4.5M", col: "#98C1D9" },
            { q: "Q4", h: "100%", val: "$6.2M", col: "#3D5A80" }
          ].map((bar, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "15%" }}>
              <div style={{ color: "#111111", fontSize: "1.4vw", fontWeight: 700, marginBottom: "1vh" }}>{bar.val}</div>
              <div style={{ width: "100%", height: "30vh", display: "flex", alignItems: "flex-end", backgroundColor: "#F9F9F9" }}>
                <div style={{ width: "100%", height: bar.h, backgroundColor: bar.col, transition: "height 0.5s ease" }} />
              </div>
              <div style={{ color: "#666666", fontSize: "1.1vw", fontWeight: 600, marginTop: "2vh" }}>{bar.q}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", color: "#999999", fontSize: "0.9vw", fontWeight: 600 }}>
        03
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CorporateGridPage4.tsx`)

```tsx
export function CorporateGridPage4() {
  const gridLinesH = Array.from({ length: 20 }).map((_, i) => (
    <div key={`h-${i}`} style={{ position: "absolute", top: `${i * 5}vh`, left: 0, width: "100vw", height: "1px", backgroundColor: "#F0F0F0", zIndex: 0 }} />
  ));
  
  const gridLinesV = Array.from({ length: 20 }).map((_, i) => (
    <div key={`v-${i}`} style={{ position: "absolute", top: 0, left: `${i * 5}vw`, width: "1px", height: "100vh", backgroundColor: "#F0F0F0", zIndex: 0 }} />
  ));

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative"
      }}
    >
      {gridLinesH}
      {gridLinesV}

      <div style={{ position: "absolute", top: "5vh", left: "5vw", width: "3vw", height: "3vw", backgroundColor: "#3D5A80", zIndex: 1 }} />
      
      <div style={{ position: "absolute", top: "5vh", right: "5vw", zIndex: 1, textAlign: "right" }}>
        <div style={{ color: "#3D5A80", fontSize: "0.9vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5vh" }}>
          Example Company, Inc.
        </div>
        <div style={{ color: "#999999", fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Confidential / 2026
        </div>
      </div>

      <div style={{ position: "absolute", top: "30vh", left: "10vw", zIndex: 1, maxWidth: "60vw" }}>
        <h2
          style={{
            color: "#111111",
            fontSize: "5vw",
            margin: "0 0 2vh 0",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em"
          }}
        >
          Let's Build the Future
        </h2>
        <p
          style={{
            color: "#666666",
            fontSize: "1.8vw",
            margin: "0 0 6vh 0",
            fontWeight: 400,
            lineHeight: 1.4,
            maxWidth: "50vw"
          }}
        >
          Connect with our enterprise team to start your transformation journey today.
        </p>

        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ backgroundColor: "#3D5A80", color: "#FFFFFF", padding: "1.5vw 3vw", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", display: "inline-block" }}>
            Contact Us
          </div>
          <div style={{ border: "2px solid #3D5A80", color: "#3D5A80", padding: "1.5vw 3vw", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", display: "inline-block" }}>
            View Documentation
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "10vh", right: "10vw", zIndex: 1, textAlign: "right" }}>
        <div style={{ color: "#111111", fontSize: "1.5vw", fontWeight: 600, marginBottom: "1vh" }}>hello@example.com</div>
        <div style={{ color: "#666666", fontSize: "1.2vw" }}>+1 (555) 123-4567</div>
        <div style={{ color: "#666666", fontSize: "1.2vw", marginTop: "1vh" }}>100 Innovation Drive<br/>San Francisco, CA 94105</div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", color: "#999999", fontSize: "0.9vw", fontWeight: 600 }}>
        04
      </div>
    </div>
  );
}
```
