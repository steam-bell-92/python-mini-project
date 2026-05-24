# Studio Noir

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "StudioNoir" template embodies a modern, minimalist aesthetic with a dark theme. It features a solid background color of #0A0A0A and uses white (#FFFFFF) for primary text, with accents in a lighter gray (#888888) for subtitles and a darker gray (#666666) for footer text. The font family is set to 'Inter' for general text and 'Playfair Display' in italic for the main heading, creating a contrast between modern sans-serif and classic serif styles. Key layout elements include a flexible column structure with centered text, a decorative horizontal line in rgba(255, 255, 255, 0.2) positioned near the bottom, and overall positioning that emphasizes space and clarity. The overall aesthetic feel can be described as sleek, sophisticated, and contemporary.

## Source Code

**Component:** `StudioNoir`

### Slide 1 — Title (`slide-styles/StudioNoir.tsx`)

```tsx
export function StudioNoir() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ fontSize: "1.5vw", fontWeight: 300, letterSpacing: "0.05em", color: "#FFFFFF" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.5vw", fontWeight: 300, color: "#FFFFFF" }}>
          2026
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "15vh" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "9vw",
            fontWeight: 400,
            margin: 0,
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          Example Deck
        </h1>
        <p
          style={{
            fontSize: "1.8vw",
            fontWeight: 300,
            color: "#888888",
            marginTop: "4vh",
            maxWidth: "60vw",
            lineHeight: 1.5,
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          position: "absolute",
          bottom: "10vh",
          left: 0,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          position: "absolute",
          bottom: "4vh",
          left: 0,
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 300, color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Example Company, Inc. / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/StudioNoirPage2.tsx`)

```tsx
export function StudioNoirPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ fontSize: "1.5vw", fontWeight: 300, letterSpacing: "0.05em", color: "#FFFFFF" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.5vw", fontWeight: 300, color: "#FFFFFF" }}>
          2026
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", flex: 1, marginTop: "8vh" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "6vw",
            fontWeight: 400,
            margin: "0 0 6vh 0",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          Our Philosophy
        </h2>

        <div style={{ display: "flex", justifyContent: "space-between", gap: "4vw" }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "2vw", fontWeight: 400, margin: "0 0 2vh 0", color: "#FFFFFF" }}>
              01. Uncompromising Quality
            </h3>
            <p style={{ fontSize: "1.2vw", fontWeight: 300, color: "#888888", lineHeight: 1.6, margin: 0 }}>
              We believe that every detail matters. By obsessing over the smallest interactions, we craft experiences that feel inevitable and profound. Our approach strips away the unnecessary until only the essential remains.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "2vw", fontWeight: 400, margin: "0 0 2vh 0", color: "#FFFFFF" }}>
              02. Enduring Design
            </h3>
            <p style={{ fontSize: "1.2vw", fontWeight: 300, color: "#888888", lineHeight: 1.6, margin: 0 }}>
              Trends fade, but true craftsmanship endures. We build products designed to stand the test of time, marrying classic aesthetics with modern technological capability to create something truly timeless.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "2vw", fontWeight: 400, margin: "0 0 2vh 0", color: "#FFFFFF" }}>
              03. Silent Power
            </h3>
            <p style={{ fontSize: "1.2vw", fontWeight: 300, color: "#888888", lineHeight: 1.6, margin: 0 }}>
              The best tools get out of your way. Our infrastructure is robust yet invisible, providing unparalleled performance without demanding attention. It simply works, beautifully.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          position: "absolute",
          bottom: "10vh",
          left: 0,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          position: "absolute",
          bottom: "4vh",
          left: 0,
          padding: "0 5vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 300, color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 300, color: "#666666" }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/StudioNoirPage3.tsx`)

```tsx
export function StudioNoirPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ fontSize: "1.5vw", fontWeight: 300, letterSpacing: "0.05em", color: "#FFFFFF" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.5vw", fontWeight: 300, color: "#FFFFFF" }}>
          2026
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "row", flex: 1, marginTop: "8vh", gap: "5vw" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "6vw",
              fontWeight: 400,
              margin: "0 0 4vh 0",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            The Impact
          </h2>
          <p style={{ fontSize: "1.5vw", fontWeight: 300, color: "#888888", lineHeight: 1.6, maxWidth: "80%" }}>
            Our metrics reflect a quiet revolution in how businesses operate, prioritizing depth over noise and substance over flash.
          </p>
        </div>

        <div style={{ flex: 1.5, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4vh 2vw", alignContent: "start" }}>
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "3vh" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "4.5vw", fontWeight: 400, color: "#FFFFFF", lineHeight: 1 }}>
              99.9%
            </div>
            <div style={{ fontSize: "1vw", fontWeight: 300, color: "#888888", marginTop: "1vh", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              System Reliability
            </div>
          </div>
          
          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "3vh" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "4.5vw", fontWeight: 400, color: "#FFFFFF", lineHeight: 1 }}>
              450M
            </div>
            <div style={{ fontSize: "1vw", fontWeight: 300, color: "#888888", marginTop: "1vh", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Events Processed
            </div>
          </div>

          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "3vh" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "4.5vw", fontWeight: 400, color: "#FFFFFF", lineHeight: 1 }}>
              12x
            </div>
            <div style={{ fontSize: "1vw", fontWeight: 300, color: "#888888", marginTop: "1vh", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Performance Gain
            </div>
          </div>

          <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "3vh" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "4.5vw", fontWeight: 400, color: "#FFFFFF", lineHeight: 1 }}>
              $2.4B
            </div>
            <div style={{ fontSize: "1vw", fontWeight: 300, color: "#888888", marginTop: "1vh", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Value Generated
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          position: "absolute",
          bottom: "10vh",
          left: 0,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          position: "absolute",
          bottom: "4vh",
          left: 0,
          padding: "0 5vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 300, color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 300, color: "#666666" }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/StudioNoirPage4.tsx`)

```tsx
export function StudioNoirPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ fontSize: "1.5vw", fontWeight: 300, letterSpacing: "0.05em", color: "#FFFFFF" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.5vw", fontWeight: 300, color: "#FFFFFF" }}>
          2026
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "8vw",
            fontWeight: 400,
            margin: "0 0 4vh 0",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}
        >
          Let's Begin.
        </h2>
        
        <div style={{ display: "flex", gap: "6vw", marginTop: "4vh" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 300, color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1vh" }}>
              Inquiries
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 300, color: "#FFFFFF" }}>
              hello@acme.co
            </div>
          </div>
          
          <div style={{ width: "1px", height: "100%", backgroundColor: "rgba(255,255,255,0.2)" }} />
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 300, color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1vh" }}>
              Location
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 300, color: "#FFFFFF" }}>
              New York / London
            </div>
          </div>
          
          <div style={{ width: "1px", height: "100%", backgroundColor: "rgba(255,255,255,0.2)" }} />
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 300, color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1vh" }}>
              Social
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 300, color: "#FFFFFF" }}>
              @acmestudio
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          position: "absolute",
          bottom: "10vh",
          left: 0,
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          position: "absolute",
          bottom: "4vh",
          left: 0,
          padding: "0 5vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 300, color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 300, color: "#666666" }}>
          04
        </div>
      </div>
    </div>
  );
}
```
