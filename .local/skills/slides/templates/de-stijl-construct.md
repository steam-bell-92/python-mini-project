# De Stijl Construct

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "DeStijlConstruct" template embodies a modernist aesthetic inspired by the De Stijl movement, characterized by geometric abstraction and a primary color palette. The background color is #FFFFFF (white), with thick black lines (#111111) creating a grid layout. The text color is also #111111, while accent colors include #D92E2E (red), #F2B807 (yellow), and #1A3B8C (blue). The font family used is 'Inter', sans-serif, for both headings and body text, emphasizing clarity and modernity. Key layout elements include a series of positioned divs that simulate a grid with colored blocks, and the overall feel is minimalist and structured. No background images are used in this template.

## Source Code

**Component:** `DeStijlConstruct`

### Slide 1 — Title (`slide-styles/DeStijlConstruct.tsx`)

```tsx
export function DeStijlConstruct() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* 
        Grid setup representing the De Stijl asymmetric layout.
        Using pure div positioning to simulate the thick black lines and colored blocks.
      */}
      
      {/* Vertical Lines */}
      <div style={{ position: "absolute", top: 0, left: "20vw", width: "1.5vw", height: "100vh", backgroundColor: "#111111", zIndex: 10 }} />
      <div style={{ position: "absolute", top: 0, left: "70vw", width: "1.5vw", height: "100vh", backgroundColor: "#111111", zIndex: 10 }} />
      <div style={{ position: "absolute", top: "60vh", left: "85vw", width: "1.5vw", height: "40vh", backgroundColor: "#111111", zIndex: 10 }} />

      {/* Horizontal Lines */}
      <div style={{ position: "absolute", top: "30vh", left: 0, width: "100vw", height: "1.5vw", backgroundColor: "#111111", zIndex: 10 }} />
      <div style={{ position: "absolute", top: "60vh", left: "20vw", width: "80vw", height: "1.5vw", backgroundColor: "#111111", zIndex: 10 }} />
      <div style={{ position: "absolute", top: "85vh", left: 0, width: "21.5vw", height: "1.5vw", backgroundColor: "#111111", zIndex: 10 }} />

      {/* Colored Blocks */}
      {/* Top Left (White, logo) */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "20vw", height: "30vh", backgroundColor: "#FFFFFF", padding: "2vw", boxSizing: "border-box" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 900, letterSpacing: "-0.05vw", color: "#111111" }}>
          ACME.CO
        </div>
      </div>

      {/* Top Middle (Red) */}
      <div style={{ position: "absolute", top: 0, left: "21.5vw", width: "48.5vw", height: "30vh", backgroundColor: "#D92E2E" }} />

      {/* Top Right (Yellow) */}
      <div style={{ position: "absolute", top: 0, left: "71.5vw", width: "28.5vw", height: "30vh", backgroundColor: "#F2B807" }} />

      {/* Middle Left (White) */}
      <div style={{ position: "absolute", top: "31.5vw", left: 0, width: "20vw", height: "calc(60vh - 31.5vw)" /* Approximation to fill gap */, backgroundColor: "#FFFFFF" }} />

      {/* Main Center Block (White, Title) */}
      <div style={{ position: "absolute", top: "calc(30vh + 1.5vw)", left: "21.5vw", width: "48.5vw", height: "calc(30vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "4vw", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1
          style={{
            fontSize: "7vw",
            fontWeight: 900,
            textTransform: "uppercase",
            lineHeight: 0.85,
            letterSpacing: "-0.3vw",
            color: "#111111",
            margin: 0,
          }}
        >
          Example<br />Deck
        </h1>
      </div>

      {/* Middle Right (Blue) */}
      <div style={{ position: "absolute", top: "calc(30vh + 1.5vw)", left: "71.5vw", width: "28.5vw", height: "calc(30vh - 1.5vw)", backgroundColor: "#1A3B8C" }} />

      {/* Bottom Left Top (Yellow) */}
      <div style={{ position: "absolute", top: "calc(30vh + 1.5vw)", left: 0, width: "20vw", height: "calc(55vh - 1.5vw)", backgroundColor: "#F2B807" }} />

      {/* Bottom Left Bottom (White) */}
      <div style={{ position: "absolute", top: "calc(85vh + 1.5vw)", left: 0, width: "20vw", height: "calc(15vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "2vw", boxSizing: "border-box", display: "flex", alignItems: "flex-end" }}>
        <div style={{ fontSize: "1vw", fontWeight: 700, color: "#111111" }}>
          2026
        </div>
      </div>

      {/* Bottom Middle (White, Subtitle) */}
      <div style={{ position: "absolute", top: "calc(60vh + 1.5vw)", left: "21.5vw", width: "48.5vw", height: "calc(40vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "4vw", boxSizing: "border-box" }}>
        <p
          style={{
            fontSize: "1.8vw",
            fontWeight: 500,
            lineHeight: 1.4,
            color: "#111111",
            margin: 0,
            maxWidth: "35vw",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
        <div style={{ marginTop: "4vw", fontSize: "1vw", fontWeight: 700, color: "#111111", textTransform: "uppercase" }}>
          Example Company, Inc.
        </div>
      </div>

      {/* Bottom Right Left (White) */}
      <div style={{ position: "absolute", top: "calc(60vh + 1.5vw)", left: "71.5vw", width: "13.5vw", height: "calc(40vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "2vw", boxSizing: "border-box", display: "flex", alignItems: "flex-end" }}>
        <div style={{ fontSize: "1vw", fontWeight: 700, color: "#111111", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          CONFIDENTIAL
        </div>
      </div>

      {/* Bottom Right Right (Red) */}
      <div style={{ position: "absolute", top: "calc(60vh + 1.5vw)", left: "86.5vw", width: "13.5vw", height: "calc(40vh - 1.5vw)", backgroundColor: "#D92E2E" }} />
      
    </div>
  );
}
```

### Slide 2 (`slide-pages/DeStijlConstructPage2.tsx`)

```tsx
export function DeStijlConstructPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Lines */}
      <div style={{ position: "absolute", top: 0, left: "20vw", width: "1.5vw", height: "100vh", backgroundColor: "#111111", zIndex: 10 }} />
      <div style={{ position: "absolute", top: "25vh", left: 0, width: "100vw", height: "1.5vw", backgroundColor: "#111111", zIndex: 10 }} />
      <div style={{ position: "absolute", top: "85vh", left: 0, width: "100vw", height: "1.5vw", backgroundColor: "#111111", zIndex: 10 }} />

      {/* Top Left (Red) */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "20vw", height: "25vh", backgroundColor: "#D92E2E" }} />
      
      {/* Top Right (White, Title) */}
      <div style={{ position: "absolute", top: 0, left: "21.5vw", width: "78.5vw", height: "25vh", backgroundColor: "#FFFFFF", padding: "4vw", boxSizing: "border-box", display: "flex", alignItems: "flex-end" }}>
        <h2 style={{ fontSize: "5vw", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.2vw", color: "#111111", margin: 0, lineHeight: 1 }}>
          Our Core Vision
        </h2>
      </div>

      {/* Middle Left (Blue) */}
      <div style={{ position: "absolute", top: "calc(25vh + 1.5vw)", left: 0, width: "20vw", height: "calc(60vh - 1.5vw)", backgroundColor: "#1A3B8C" }} />

      {/* Middle Right (White, Content) */}
      <div style={{ position: "absolute", top: "calc(25vh + 1.5vw)", left: "21.5vw", width: "78.5vw", height: "calc(60vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "4vw", boxSizing: "border-box", display: "flex", gap: "6vw", alignItems: "center" }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "2vw", fontWeight: 800, color: "#111111", marginTop: 0, marginBottom: "2vw", textTransform: "uppercase" }}>01. Structure</h3>
          <p style={{ fontSize: "1.4vw", fontWeight: 500, color: "#111111", lineHeight: 1.5, margin: 0 }}>
            The structural integrity of our process ensures robust and reliable outcomes. We leverage asymmetrical balance to provide clarity and precision in every project we undertake.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "2vw", fontWeight: 800, color: "#111111", marginTop: 0, marginBottom: "2vw", textTransform: "uppercase" }}>02. Method</h3>
          <p style={{ fontSize: "1.4vw", fontWeight: 500, color: "#111111", lineHeight: 1.5, margin: 0 }}>
            By constraining our palette and organizing space with rigorous grid systems, we achieve a universal aesthetic that speaks clearly and stands the test of time.
          </p>
        </div>
      </div>

      {/* Bottom Left (Yellow, Page Number) */}
      <div style={{ position: "absolute", top: "calc(85vh + 1.5vw)", left: 0, width: "20vw", height: "calc(15vh - 1.5vw)", backgroundColor: "#F2B807", padding: "2vw", boxSizing: "border-box", display: "flex", alignItems: "flex-end" }}>
         <div style={{ fontSize: "1.2vw", fontWeight: 900, color: "#111111" }}>02</div>
      </div>

      {/* Bottom Right (White, Footer) */}
      <div style={{ position: "absolute", top: "calc(85vh + 1.5vw)", left: "21.5vw", width: "78.5vw", height: "calc(15vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "2vw 4vw", boxSizing: "border-box", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
         <div style={{ fontSize: "1vw", fontWeight: 700, color: "#111111", textTransform: "uppercase" }}>Content Outline</div>
         <div style={{ fontSize: "1vw", fontWeight: 700, color: "#111111", textTransform: "uppercase" }}>ACME.CO</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/DeStijlConstructPage3.tsx`)

```tsx
export function DeStijlConstructPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Grid Lines */}
      <div style={{ position: "absolute", top: 0, left: "40vw", width: "1.5vw", height: "100vh", backgroundColor: "#111111", zIndex: 10 }} />
      <div style={{ position: "absolute", top: 0, left: "80vw", width: "1.5vw", height: "100vh", backgroundColor: "#111111", zIndex: 10 }} />
      <div style={{ position: "absolute", top: "20vh", left: "40vw", width: "60vw", height: "1.5vw", backgroundColor: "#111111", zIndex: 10 }} />
      <div style={{ position: "absolute", top: "60vh", left: 0, width: "100vw", height: "1.5vw", backgroundColor: "#111111", zIndex: 10 }} />

      {/* Top Left (Yellow, Title) */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "40vw", height: "60vh", backgroundColor: "#F2B807", padding: "4vw", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ fontSize: "6vw", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.2vw", color: "#111111", margin: 0, lineHeight: 0.9 }}>
          Key<br/>Metrics
        </h2>
        <p style={{ marginTop: "2vw", fontSize: "1.5vw", fontWeight: 500, color: "#111111", maxWidth: "25vw", lineHeight: 1.4 }}>
          Analyzing performance through structural geometry.
        </p>
      </div>

      {/* Top Middle (Red) */}
      <div style={{ position: "absolute", top: 0, left: "calc(40vw + 1.5vw)", width: "calc(40vw - 1.5vw)", height: "20vh", backgroundColor: "#D92E2E" }} />

      {/* Top Right (White) */}
      <div style={{ position: "absolute", top: 0, left: "calc(80vw + 1.5vw)", width: "calc(20vw - 1.5vw)", height: "20vh", backgroundColor: "#FFFFFF" }} />

      {/* Middle Center (White, Data 1) */}
      <div style={{ position: "absolute", top: "calc(20vh + 1.5vw)", left: "calc(40vw + 1.5vw)", width: "calc(40vw - 1.5vw)", height: "calc(40vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "4vw", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "8vw", fontWeight: 900, color: "#111111", lineHeight: 0.8, letterSpacing: "-0.4vw" }}>78%</div>
        <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#111111", marginTop: "1.5vw", textTransform: "uppercase" }}>Efficiency Increase</div>
      </div>

      {/* Middle Right (Blue) */}
      <div style={{ position: "absolute", top: "calc(20vh + 1.5vw)", left: "calc(80vw + 1.5vw)", width: "calc(20vw - 1.5vw)", height: "calc(40vh - 1.5vw)", backgroundColor: "#1A3B8C" }} />

      {/* Bottom Left (White, Data 2) */}
      <div style={{ position: "absolute", top: "calc(60vh + 1.5vw)", left: 0, width: "40vw", height: "calc(40vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "4vw", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "6vw", fontWeight: 900, color: "#111111", lineHeight: 0.8, letterSpacing: "-0.3vw" }}>2.4x</div>
        <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1A3B8C", marginTop: "1.5vw", textTransform: "uppercase" }}>Revenue Multiplier</div>
      </div>

      {/* Bottom Center (White, Abstract Chart) */}
      <div style={{ position: "absolute", top: "calc(60vh + 1.5vw)", left: "calc(40vw + 1.5vw)", width: "calc(40vw - 1.5vw)", height: "calc(40vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "4vw", boxSizing: "border-box", display: "flex", alignItems: "flex-end", gap: "2vw" }}>
        <div style={{ width: "6vw", height: "40%", backgroundColor: "#111111" }} />
        <div style={{ width: "6vw", height: "65%", backgroundColor: "#111111" }} />
        <div style={{ width: "6vw", height: "90%", backgroundColor: "#D92E2E" }} />
      </div>

      {/* Bottom Right (White, Footer) */}
      <div style={{ position: "absolute", top: "calc(60vh + 1.5vw)", left: "calc(80vw + 1.5vw)", width: "calc(20vw - 1.5vw)", height: "calc(40vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "2vw", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 900, color: "#111111", textTransform: "uppercase", alignSelf: "flex-end" }}>03</div>
        <div style={{ fontSize: "1vw", fontWeight: 700, color: "#111111", textTransform: "uppercase" }}>Data & Stats</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/DeStijlConstructPage4.tsx`)

```tsx
export function DeStijlConstructPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Grid Lines */}
      <div style={{ position: "absolute", top: 0, left: "30vw", width: "1.5vw", height: "100vh", backgroundColor: "#111111", zIndex: 10 }} />
      <div style={{ position: "absolute", top: 0, left: "65vw", width: "1.5vw", height: "100vh", backgroundColor: "#111111", zIndex: 10 }} />
      <div style={{ position: "absolute", top: "45vh", left: 0, width: "100vw", height: "1.5vw", backgroundColor: "#111111", zIndex: 10 }} />

      {/* Top Left (Blue) */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "30vw", height: "45vh", backgroundColor: "#1A3B8C" }} />

      {/* Top Center (White, Title) */}
      <div style={{ position: "absolute", top: 0, left: "calc(30vw + 1.5vw)", width: "calc(35vw - 1.5vw)", height: "45vh", backgroundColor: "#FFFFFF", padding: "4vw", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ fontSize: "6vw", fontWeight: 900, textTransform: "uppercase", letterSpacing: "-0.3vw", color: "#111111", margin: 0, lineHeight: 0.9 }}>
          Get In<br/>Touch
        </h2>
      </div>

      {/* Top Right (Red) */}
      <div style={{ position: "absolute", top: 0, left: "calc(65vw + 1.5vw)", width: "calc(35vw - 1.5vw)", height: "45vh", backgroundColor: "#D92E2E" }} />

      {/* Bottom Left (White, Contact Info) */}
      <div style={{ position: "absolute", top: "calc(45vh + 1.5vw)", left: 0, width: "30vw", height: "calc(55vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "4vw", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#111111", textTransform: "uppercase", marginBottom: "0.5vw" }}>Email</div>
          <div style={{ fontSize: "1.6vw", fontWeight: 500, color: "#111111", marginBottom: "3vw" }}>hello@acme.co</div>
          
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#111111", textTransform: "uppercase", marginBottom: "0.5vw" }}>Phone</div>
          <div style={{ fontSize: "1.6vw", fontWeight: 500, color: "#111111", marginBottom: "2vw" }}>+1 (555) 123-4567</div>
        </div>
        
        <div style={{ fontSize: "1.2vw", fontWeight: 900, color: "#111111" }}>04</div>
      </div>

      {/* Bottom Center (Yellow) */}
      <div style={{ position: "absolute", top: "calc(45vh + 1.5vw)", left: "calc(30vw + 1.5vw)", width: "calc(35vw - 1.5vw)", height: "calc(55vh - 1.5vw)", backgroundColor: "#F2B807" }} />

      {/* Bottom Right (White, Logo & Footer) */}
      <div style={{ position: "absolute", top: "calc(45vh + 1.5vw)", left: "calc(65vw + 1.5vw)", width: "calc(35vw - 1.5vw)", height: "calc(55vh - 1.5vw)", backgroundColor: "#FFFFFF", padding: "4vw", boxSizing: "border-box", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end" }}>
        <div style={{ fontSize: "4vw", fontWeight: 900, letterSpacing: "-0.2vw", color: "#111111", textTransform: "uppercase", lineHeight: 1 }}>
          ACME.CO
        </div>
        <div style={{ marginTop: "1vw", fontSize: "1vw", fontWeight: 700, color: "#111111", textTransform: "uppercase", letterSpacing: "0.1vw" }}>
          Constructing the Future
        </div>
      </div>
    </div>
  );
}
```
