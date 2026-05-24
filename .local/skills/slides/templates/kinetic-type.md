# Kinetic Type

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The KineticType template features a clean and modern aesthetic, primarily utilizing a minimalist style. The background color is solid white (#FFFFFF), while the text color is black (#000000) with accents in a vibrant red (#C41E3A). The font family used throughout is 'Space Grotesk', a sans-serif typeface, which is employed for both metadata and main content to maintain a contemporary look. Key layout elements include absolute positioning for small metadata text at the corners, a centered title section with uppercase lettering, and a prominent display of the words "EXAMPLE" and "DECK" in large font sizes (18vw) with a bold weight (900). There are no background images used in this template. The overall aesthetic feel can be described as modern, bold, and minimalist.

## Source Code

**Component:** `KineticType`

### Slide 1 — Title (`slide-styles/KineticType.tsx`)

```tsx
export function KineticType() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", position: "relative", color: "#000000" }}>
      {/* Small metadata text at edges */}
      <div style={{ position: "absolute", top: "4vh", left: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        acme.co
      </div>
      <div style={{ position: "absolute", top: "4vh", right: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em" }}>
        2026
      </div>
      <div style={{ position: "absolute", bottom: "4vh", left: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C41E3A" }}>
        Confidential
      </div>
      <div style={{ position: "absolute", bottom: "4vh", right: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em" }}>
        Example Company, Inc.
      </div>

      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", paddingLeft: "8vw" }}>
        <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.4em", fontWeight: 700, marginBottom: "4vh", color: "#C41E3A" }}>
          Presentation Title
        </div>
        
        <h1 style={{ fontSize: "18vw", fontWeight: 900, lineHeight: 0.8, margin: 0, textTransform: "uppercase", letterSpacing: "-0.04em" }}>
          EXAMPLE
        </h1>
        <h1 style={{ fontSize: "18vw", fontWeight: 900, lineHeight: 0.8, margin: 0, textTransform: "uppercase", letterSpacing: "-0.04em", color: "#C41E3A" }}>
          DECK
        </h1>

        <p style={{ fontSize: "1.6vw", fontWeight: 500, marginTop: "6vh", maxWidth: "45vw", lineHeight: 1.4, letterSpacing: "-0.01em" }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/KineticTypePage2.tsx`)

```tsx
export function KineticTypePage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", position: "relative", color: "#000000" }}>
      {/* Small metadata text at edges */}
      <div style={{ position: "absolute", top: "4vh", left: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        acme.co
      </div>
      <div style={{ position: "absolute", top: "4vh", right: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em" }}>
        2026
      </div>
      <div style={{ position: "absolute", bottom: "4vh", left: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C41E3A" }}>
        Confidential
      </div>
      <div style={{ position: "absolute", bottom: "4vh", right: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em" }}>
        02
      </div>

      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", paddingLeft: "8vw", paddingRight: "8vw" }}>
        <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.4em", fontWeight: 700, marginBottom: "2vh", color: "#C41E3A" }}>
          Market Overview
        </div>
        
        <h2 style={{ fontSize: "8vw", fontWeight: 900, lineHeight: 0.85, margin: 0, textTransform: "uppercase", letterSpacing: "-0.04em", marginBottom: "8vh" }}>
          SHIFTING<br />
          <span style={{ color: "#C41E3A" }}>DYNAMICS</span>
        </h2>

        <div style={{ display: "flex", gap: "6vw" }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "2vw", fontWeight: 700, margin: "0 0 2vh 0", letterSpacing: "-0.02em" }}>
              The Old Way
            </h3>
            <p style={{ fontSize: "1.2vw", fontWeight: 500, lineHeight: 1.5, letterSpacing: "-0.01em", opacity: 0.7, margin: 0 }}>
              Traditional approaches rely on fragmented systems, manual updates, and slow iteration cycles. This leads to massive inefficiencies and increased risk.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "2vw", fontWeight: 700, margin: "0 0 2vh 0", letterSpacing: "-0.02em", color: "#C41E3A" }}>
              The New Standard
            </h3>
            <p style={{ fontSize: "1.2vw", fontWeight: 500, lineHeight: 1.5, letterSpacing: "-0.01em", margin: 0 }}>
              Integrated platforms enable real-time collaboration, automated pipelines, and rapid deployment. This is the foundation of the modern enterprise.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/KineticTypePage3.tsx`)

```tsx
export function KineticTypePage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", position: "relative", color: "#000000" }}>
      {/* Small metadata text at edges */}
      <div style={{ position: "absolute", top: "4vh", left: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        acme.co
      </div>
      <div style={{ position: "absolute", top: "4vh", right: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em" }}>
        2026
      </div>
      <div style={{ position: "absolute", bottom: "4vh", left: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C41E3A" }}>
        Confidential
      </div>
      <div style={{ position: "absolute", bottom: "4vh", right: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em" }}>
        03
      </div>

      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", paddingLeft: "8vw", paddingRight: "8vw" }}>
        <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.4em", fontWeight: 700, marginBottom: "2vh", color: "#C41E3A" }}>
          Key Metrics
        </div>
        
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "4vh" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2 style={{ fontSize: "28vw", fontWeight: 900, lineHeight: 0.75, margin: 0, letterSpacing: "-0.06em" }}>
              400<span style={{ color: "#C41E3A" }}>%</span>
            </h2>
            <div style={{ fontSize: "2vw", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "2vh" }}>
              YoY Growth
            </div>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "4vh", width: "25vw" }}>
            <div style={{ borderBottom: "0.2vw solid #000000", paddingBottom: "2vh" }}>
              <div style={{ fontSize: "3vw", fontWeight: 900, letterSpacing: "-0.02em" }}>$2.4M</div>
              <div style={{ fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6 }}>Annual Recurring Rev</div>
            </div>
            <div style={{ borderBottom: "0.2vw solid #000000", paddingBottom: "2vh" }}>
              <div style={{ fontSize: "3vw", fontWeight: 900, letterSpacing: "-0.02em" }}>120k</div>
              <div style={{ fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6 }}>Active Users</div>
            </div>
            <div style={{ borderBottom: "0.2vw solid #C41E3A", paddingBottom: "2vh" }}>
              <div style={{ fontSize: "3vw", fontWeight: 900, letterSpacing: "-0.02em", color: "#C41E3A" }}>98%</div>
              <div style={{ fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#C41E3A" }}>Retention Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/KineticTypePage4.tsx`)

```tsx
export function KineticTypePage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFFFF", fontFamily: "'Space Grotesk', sans-serif", position: "relative", color: "#000000" }}>
      {/* Small metadata text at edges */}
      <div style={{ position: "absolute", top: "4vh", left: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
        acme.co
      </div>
      <div style={{ position: "absolute", top: "4vh", right: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em" }}>
        2026
      </div>
      <div style={{ position: "absolute", bottom: "4vh", left: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#C41E3A" }}>
        Confidential
      </div>
      <div style={{ position: "absolute", bottom: "4vh", right: "4vw", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em" }}>
        04
      </div>

      <div style={{ display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.4em", fontWeight: 700, marginBottom: "4vh", color: "#C41E3A" }}>
          Ready to Start?
        </div>
        
        <h1 style={{ fontSize: "16vw", fontWeight: 900, lineHeight: 0.8, margin: 0, textTransform: "uppercase", letterSpacing: "-0.04em" }}>
          LET'S
        </h1>
        <h1 style={{ fontSize: "16vw", fontWeight: 900, lineHeight: 0.8, margin: 0, textTransform: "uppercase", letterSpacing: "-0.04em", color: "#C41E3A" }}>
          BUILD
        </h1>

        <div style={{ display: "flex", gap: "4vw", marginTop: "8vh" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, letterSpacing: "0.05em", padding: "1.5vh 3vw", border: "0.2vw solid #000000" }}>
            hello@acme.co
          </div>
          <div style={{ fontSize: "1.5vw", fontWeight: 600, letterSpacing: "0.05em", padding: "1.5vh 3vw", background: "#C41E3A", color: "#FFFFFF" }}>
            acme.co/book
          </div>
        </div>
      </div>
    </div>
  );
}
```
