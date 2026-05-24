# Brutalist Studio

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "BrutalistStudio" template embodies a modern brutalist aesthetic, characterized by its stark and bold design elements. The background color is a solid #121212, with a full-bleed architecture photo sourced from "/__mockup/photos/brutalist-golden.png" that covers the entire viewport. A dark overlay band at the bottom, with a background color of rgba(18, 18, 18, 0.92), features text in accent colors: #C4A060 for headers and #888888 for project details, alongside #FFFFFF for the main title and #AAAAAA for the subtitle. The font families used include 'Space Grotesk' for headers and titles, and 'DM Mono' for body text, creating a contrast between modern sans-serif and classic monospace styles. Key layout elements include a structured band at the bottom with a border-top of #C4A060, and a clean, organized arrangement of text that emphasizes hierarchy and readability. The overall aesthetic feel is "bold, modern, stark."

## Source Code

**Component:** `BrutalistStudio`

### Slide 1 — Title (`slide-styles/BrutalistStudio.tsx`)

```tsx
export function BrutalistStudio() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#121212" }}>
      {/* Full-bleed architecture photo */}
      <img 
        src="/__mockup/photos/brutalist-golden.png" 
        alt="Brutalist concrete architecture" 
        style={{ width: "100vw", height: "100vh", objectFit: "cover", position: "absolute", top: 0, left: 0 }} 
      />

      {/* Dark horizontal band overlay */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100vw",
        height: "35vh",
        backgroundColor: "rgba(18, 18, 18, 0.92)",
        borderTop: "0.3vh solid #C4A060",
        display: "flex",
        flexDirection: "column",
        padding: "4vh 5vw",
        boxSizing: "border-box"
      }}>
        
        {/* Top Header Row inside Band */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "baseline",
          marginBottom: "2vh"
        }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#C4A060",
            fontSize: "0.9vw",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase"
          }}>
            CONCRETE + LIGHT
          </div>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            color: "#888888",
            fontSize: "0.9vw",
            letterSpacing: "0.1em"
          }}>
            PROJECT NO. 2026-A
          </div>
        </div>

        {/* Title and Subtitle Row */}
        <div style={{ display: "flex", gap: "5vw", alignItems: "flex-end", flexGrow: 1 }}>
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "4.5vw",
              color: "#FFFFFF",
              margin: "0 0 1vh 0",
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: "-0.02em"
            }}>
              Example Deck
            </h1>
          </div>
          <div style={{ flex: 1, paddingBottom: "0.5vh" }}>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              color: "#AAAAAA",
              fontSize: "1.1vw",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "35vw"
            }}>
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "0.1vh solid rgba(255, 255, 255, 0.1)",
          paddingTop: "2vh",
          marginTop: "2vh"
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            color: "#FFFFFF",
            fontSize: "1vw"
          }}>
            acme.co
          </div>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#C4A060",
            fontSize: "1vw",
            letterSpacing: "0.05em",
            textTransform: "uppercase"
          }}>
            Architecture & Design
          </div>
        </div>
        
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BrutalistStudioPage2.tsx`)

```tsx
export function BrutalistStudioPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#121212", display: "flex", flexDirection: "column", padding: "8vh 5vw", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "8vh", borderBottom: "0.3vh solid rgba(255, 255, 255, 0.1)", paddingBottom: "2vh" }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C4A060", fontSize: "1vw", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          CORE PHILOSOPHY
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "1vw", letterSpacing: "0.1em" }}>
          PHASE 01
        </div>
      </div>
      
      <div style={{ display: "flex", gap: "8vw", flexGrow: 1 }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4.5vw", color: "#FFFFFF", margin: "0 0 4vh 0", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Form follows <br />
            function, but <br />
            material dictates <br />
            feeling.
          </h2>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh", paddingTop: "1vh" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", color: "#AAAAAA", fontSize: "1.2vw", lineHeight: 1.6, margin: 0 }}>
            Our approach strips away the non-essential to reveal the raw, structural truth of the project. We believe in brutal honesty in both material and method, shaping spaces that leave a lasting impact.
          </p>
          <div style={{ borderLeft: "0.3vh solid #C4A060", paddingLeft: "2vw" }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "1.5vw", margin: "0 0 1vh 0", fontWeight: 500 }}>Structural Integrity</h3>
            <p style={{ fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "1vw", lineHeight: 1.5, margin: 0 }}>Exposing the bones of the operation rather than hiding them behind decorative facades. Form must be justified by its load.</p>
          </div>
          <div style={{ borderLeft: "0.3vh solid #C4A060", paddingLeft: "2vw" }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "1.5vw", margin: "0 0 1vh 0", fontWeight: 500 }}>Uncompromising Scale</h3>
            <p style={{ fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "1vw", lineHeight: 1.5, margin: 0 }}>Embracing mass and presence to create volumes that demand attention and command the surrounding environment.</p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "0.1vh solid rgba(255, 255, 255, 0.1)", paddingTop: "2vh", marginTop: "4vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "1vw" }}>
          acme.co
        </div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C4A060", fontSize: "1vw", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/BrutalistStudioPage3.tsx`)

```tsx
export function BrutalistStudioPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#121212", display: "flex", flexDirection: "column", padding: "8vh 5vw", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6vh" }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C4A060", fontSize: "1vw", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          METRICS & MASS
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "1vw", letterSpacing: "0.1em" }}>
          ANALYSIS
        </div>
      </div>

      <div style={{ display: "flex", flexGrow: 1, gap: "2vw" }}>
        {/* Stat 1 */}
        <div style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "3vw", position: "relative" }}>
          <div style={{ position: "absolute", top: "3vw", left: "3vw", fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "1vw" }}>01 / VOLUME</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "7vw", fontWeight: 500, lineHeight: 1, marginBottom: "2vh", letterSpacing: "-0.04em" }}>
            45K
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#C4A060", fontSize: "1.2vw", letterSpacing: "0.05em" }}>
            CUBIC METERS POURED
          </div>
        </div>
        
        {/* Stat 2 */}
        <div style={{ flex: 1, backgroundColor: "rgba(196,160,96,0.1)", border: "0.2vh solid #C4A060", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "3vw", position: "relative" }}>
          <div style={{ position: "absolute", top: "3vw", left: "3vw", fontFamily: "'DM Mono', monospace", color: "#C4A060", fontSize: "1vw" }}>02 / EFFICIENCY</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C4A060", fontSize: "7vw", fontWeight: 500, lineHeight: 1, marginBottom: "2vh", letterSpacing: "-0.04em" }}>
            92%
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#FFFFFF", fontSize: "1.2vw", letterSpacing: "0.05em" }}>
            MATERIAL UTILIZATION
          </div>
        </div>

        {/* Stat 3 */}
        <div style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.03)", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "3vw", position: "relative" }}>
          <div style={{ position: "absolute", top: "3vw", left: "3vw", fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "1vw" }}>03 / DURATION</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "7vw", fontWeight: 500, lineHeight: 1, marginBottom: "2vh", letterSpacing: "-0.04em" }}>
            18
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#C4A060", fontSize: "1.2vw", letterSpacing: "0.05em" }}>
            MONTHS TO COMPLETION
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "0.1vh solid rgba(255, 255, 255, 0.1)", paddingTop: "2vh", marginTop: "4vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "1vw" }}>
          acme.co
        </div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C4A060", fontSize: "1vw", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/BrutalistStudioPage4.tsx`)

```tsx
export function BrutalistStudioPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#121212" }}>
      <img 
        src="/__mockup/photos/brutalist-golden.png" 
        alt="Brutalist concrete architecture" 
        style={{ width: "100vw", height: "100vh", objectFit: "cover", position: "absolute", top: 0, left: 0, opacity: 0.3, filter: "grayscale(100%)" }} 
      />

      <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(18, 18, 18, 0.7)" }} />

      <div style={{
        position: "absolute",
        inset: "8vh 5vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box"
      }}>
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C4A060", fontSize: "1vw", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            INITIATE
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "1vw", letterSpacing: "0.1em" }}>
            END OF TRANSMISSION
          </div>
        </div>

        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "8vw",
            color: "#FFFFFF",
            margin: "0 0 2vh 0",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            textTransform: "uppercase"
          }}>
            Construct<br />With Us
          </h1>
          <div style={{ 
            display: "inline-block", 
            border: "0.3vh solid #C4A060", 
            padding: "2vh 4vw", 
            marginTop: "4vh",
            backgroundColor: "rgba(18, 18, 18, 0.9)"
          }}>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              color: "#C4A060",
              fontSize: "1.5vw",
              letterSpacing: "0.1em"
            }}>
              studio@acme.co
            </span>
          </div>
        </div>

        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center",
          borderTop: "0.1vh solid rgba(255, 255, 255, 0.1)",
          paddingTop: "2vh"
        }}>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#FFFFFF", fontSize: "1vw" }}>
            acme.co
          </div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#C4A060", fontSize: "1vw", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            04
          </div>
        </div>
        
      </div>
    </div>
  );
}
```
