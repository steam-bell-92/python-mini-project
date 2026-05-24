# Origami Paper

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "OrigamiPaper" template features a soft, minimalist aesthetic reminiscent of folded paper art. The background color is a light beige (#FAF8F5), complemented by text in a dark gray (#2C2C2C). The design employs the 'DM Sans' font for body text and 'Space Grotesk' for the main title, creating a modern and clean look. Key layout elements include diagonal dashed lines representing paper creases in muted colors (rgba(61, 79, 124, 0.15) and rgba(196, 120, 110, 0.2)), and a cluster of origami-inspired shapes in shades of dusty coral (#C4786E), muted indigo (#3D4F7C), and light paper fold (#F0EAE1). The overall aesthetic feel is "soft elegance."

## Source Code

**Component:** `OrigamiPaper`

### Slide 1 — Title (`slide-styles/OrigamiPaper.tsx`)

```tsx
export function OrigamiPaper() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FAF8F5", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#2C2C2C" }}>
      {/* Fold lines - diagonal dashed lines suggesting paper creases */}
      <div style={{ position: "absolute", top: "-10vh", right: "25vw", width: "1px", height: "130vh", borderLeft: "1px dashed rgba(61, 79, 124, 0.15)", transform: "rotate(35deg)", transformOrigin: "center" }} />
      <div style={{ position: "absolute", top: "45vh", left: "-10vw", width: "120vw", height: "1px", borderTop: "1px dashed rgba(196, 120, 110, 0.2)", transform: "rotate(-18deg)", transformOrigin: "center" }} />
      <div style={{ position: "absolute", bottom: "-20vh", right: "40vw", width: "1px", height: "80vh", borderLeft: "1px dashed rgba(61, 79, 124, 0.1)", transform: "rotate(-45deg)", transformOrigin: "center" }} />
      
      {/* Origami Shapes Cluster */}
      <div style={{ position: "absolute", bottom: "8vh", right: "12vw", width: "30vw", height: "40vw", filter: "drop-shadow(0 1.5vw 2.5vw rgba(0,0,0,0.08))", zIndex: 1 }}>
        {/* Background light paper fold */}
        <div style={{
          position: "absolute",
          bottom: "5vw",
          right: "0vw",
          width: 0,
          height: 0,
          borderLeft: "22vw solid transparent",
          borderRight: "0vw solid transparent",
          borderBottom: "32vw solid #F0EAE1",
          transform: "rotate(5deg)",
          transformOrigin: "bottom right"
        }} />
        
        {/* Main Dusty Coral shape */}
        <div style={{
          position: "absolute",
          bottom: "2vw",
          right: "4vw",
          width: 0,
          height: 0,
          borderLeft: "14vw solid transparent",
          borderRight: "0vw solid transparent",
          borderBottom: "26vw solid #C4786E",
          transform: "rotate(18deg)",
          transformOrigin: "bottom right"
        }} />
        
        {/* Front Muted Indigo shape */}
        <div style={{
          position: "absolute",
          bottom: "4vw",
          right: "8vw",
          width: 0,
          height: 0,
          borderLeft: "0vw solid transparent",
          borderRight: "20vw solid transparent",
          borderBottom: "18vw solid #3D4F7C",
          transform: "rotate(-12deg)",
          transformOrigin: "bottom left",
          filter: "drop-shadow(0.5vw 0.5vw 1vw rgba(0,0,0,0.1))"
        }} />
        
        {/* Small folded flap in coral */}
        <div style={{
          position: "absolute",
          bottom: "20vw",
          right: "12vw",
          width: 0,
          height: 0,
          borderLeft: "6vw solid transparent",
          borderRight: "4vw solid transparent",
          borderTop: "10vw solid #B3685F",
          transform: "rotate(35deg)",
          opacity: 0.9
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#3D4F7C", letterSpacing: "0.15em" }}>
            acme.co
          </div>
          <div style={{ fontSize: "0.9vw", color: "#C4786E", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>
            2026
          </div>
        </div>
        
        {/* Main Title Area */}
        <div style={{ maxWidth: "55vw", marginTop: "8vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "4vh" }}>
            <div style={{ width: "4vw", height: "1px", background: "#C4786E" }} />
            <div style={{ fontSize: "0.9vw", color: "#C4786E", letterSpacing: "0.25em", textTransform: "uppercase", fontWeight: 500 }}>
              Presentation Title
            </div>
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "7vw", fontWeight: 400, lineHeight: 1.05, margin: 0, color: "#3D4F7C", letterSpacing: "-0.04em" }}>
            Example Deck
          </h1>
          <p style={{ fontSize: "1.6vw", color: "#6B768B", marginTop: "5vh", maxWidth: "42vw", lineHeight: 1.6, fontWeight: 300, letterSpacing: "0.01em" }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>
        
        {/* Footer */}
        <div style={{ display: "flex", gap: "4vw", alignItems: "center", paddingBottom: "1vh" }}>
          <span style={{ fontSize: "0.9vw", color: "#8E99AF", letterSpacing: "0.1em" }}>Example Company, Inc.</span>
          <span style={{ fontSize: "0.9vw", color: "#8E99AF", fontStyle: "italic", letterSpacing: "0.05em" }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/OrigamiPaperPage2.tsx`)

```tsx
export function OrigamiPaperPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FAF8F5", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#2C2C2C" }}>
      {/* Fold lines */}
      <div style={{ position: "absolute", top: "-10vh", right: "25vw", width: "1px", height: "130vh", borderLeft: "1px dashed rgba(61, 79, 124, 0.15)", transform: "rotate(35deg)", transformOrigin: "center" }} />
      <div style={{ position: "absolute", top: "70vh", left: "-10vw", width: "120vw", height: "1px", borderTop: "1px dashed rgba(196, 120, 110, 0.2)", transform: "rotate(-5deg)", transformOrigin: "center" }} />
      
      {/* Subtle background origami shape */}
      <div style={{ position: "absolute", top: "20vh", right: "10vw", width: 0, height: 0, borderLeft: "15vw solid transparent", borderRight: "0vw solid transparent", borderBottom: "25vw solid #F0EAE1", transform: "rotate(45deg)", opacity: 0.5 }} />

      {/* Content */}
      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#3D4F7C", letterSpacing: "0.15em" }}>acme.co</div>
          <div style={{ fontSize: "0.9vw", color: "#C4786E", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>Overview</div>
        </div>
        
        {/* Body Area */}
        <div style={{ flex: 1, marginTop: "12vh", display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 400, margin: "0 0 6vh 0", color: "#3D4F7C", letterSpacing: "-0.02em" }}>
            The Core Philosophy
          </h2>
          
          <div style={{ display: "flex", gap: "8vw", marginTop: "2vh", maxWidth: "80vw" }}>
            <div style={{ flex: 1 }}>
              <div style={{ width: "3vw", height: "3px", background: "#C4786E", marginBottom: "3vh" }} />
              <h3 style={{ fontSize: "1.5vw", color: "#3D4F7C", marginBottom: "2vh", fontWeight: 500 }}>Precision & Intent</h3>
              <p style={{ fontSize: "1.2vw", color: "#6B768B", lineHeight: 1.6, fontWeight: 300 }}>
                Every fold matters. We approach our strategy with the same meticulous care as a master paper folder. By removing the unnecessary, we amplify the impact of what remains, ensuring each decision carries absolute weight and purpose.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ width: "3vw", height: "3px", background: "#3D4F7C", marginBottom: "3vh" }} />
              <h3 style={{ fontSize: "1.5vw", color: "#3D4F7C", marginBottom: "2vh", fontWeight: 500 }}>Structural Integrity</h3>
              <p style={{ fontSize: "1.2vw", color: "#6B768B", lineHeight: 1.6, fontWeight: 300 }}>
                A foundation built on solid principles can withstand tremendous pressure. Our methodologies emphasize resilience, scalability, and long-term viability over short-term gains, creating lasting, structural value for the future.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "1vh" }}>
          <div style={{ display: "flex", gap: "4vw" }}>
            <span style={{ fontSize: "0.9vw", color: "#8E99AF", letterSpacing: "0.1em" }}>Example Company, Inc.</span>
            <span style={{ fontSize: "0.9vw", color: "#8E99AF", fontStyle: "italic", letterSpacing: "0.05em" }}>Confidential</span>
          </div>
          <span style={{ fontSize: "0.9vw", color: "#3D4F7C", fontWeight: 500 }}>02</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/OrigamiPaperPage3.tsx`)

```tsx
export function OrigamiPaperPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FAF8F5", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#2C2C2C" }}>
      {/* Fold lines */}
      <div style={{ position: "absolute", top: "20vh", left: "-10vw", width: "120vw", height: "1px", borderTop: "1px dashed rgba(61, 79, 124, 0.15)", transform: "rotate(12deg)", transformOrigin: "center" }} />
      <div style={{ position: "absolute", bottom: "10vh", left: "30vw", width: "1px", height: "100vh", borderLeft: "1px dashed rgba(196, 120, 110, 0.2)", transform: "rotate(-25deg)", transformOrigin: "center" }} />

      {/* Content */}
      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#3D4F7C", letterSpacing: "0.15em" }}>acme.co</div>
          <div style={{ fontSize: "0.9vw", color: "#C4786E", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>Metrics</div>
        </div>
        
        {/* Body Area */}
        <div style={{ flex: 1, marginTop: "10vh", display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 400, margin: "0 0 8vh 0", color: "#3D4F7C", letterSpacing: "-0.02em" }}>
            Performance Metrics
          </h2>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flex: 1, paddingBottom: "8vh", paddingRight: "4vw" }}>
            
            {/* Stat 1 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "25vw" }}>
              <div style={{ position: "relative", width: "15vw", height: "15vw", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "4vh" }}>
                <div style={{ position: "absolute", width: 0, height: 0, borderLeft: "7.5vw solid transparent", borderRight: "7.5vw solid transparent", borderBottom: "15vw solid #F0EAE1", transform: "rotate(180deg)" }} />
                <div style={{ position: "absolute", width: 0, height: 0, borderLeft: "7.5vw solid transparent", borderRight: "0 solid transparent", borderBottom: "15vw solid #C4786E", transform: "rotate(180deg)", opacity: 0.9 }} />
                <span style={{ position: "relative", zIndex: 2, fontFamily: "'Space Grotesk', sans-serif", fontSize: "3.5vw", color: "#FAF8F5", fontWeight: 500 }}>82%</span>
              </div>
              <h3 style={{ fontSize: "1.4vw", color: "#3D4F7C", margin: "0 0 1vh 0", fontWeight: 500 }}>Efficiency Gain</h3>
              <p style={{ fontSize: "1vw", color: "#6B768B", textAlign: "center", margin: 0, maxWidth: "16vw" }}>Reduction in operational overhead.</p>
            </div>

            {/* Stat 2 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "25vw" }}>
              <div style={{ position: "relative", width: "18vw", height: "18vw", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "4vh" }}>
                <div style={{ position: "absolute", width: 0, height: 0, borderLeft: "9vw solid transparent", borderRight: "9vw solid transparent", borderBottom: "18vw solid #3D4F7C", transform: "rotate(0deg)" }} />
                <div style={{ position: "absolute", width: 0, height: 0, borderLeft: "0 solid transparent", borderRight: "9vw solid transparent", borderBottom: "18vw solid rgba(0,0,0,0.15)", transform: "rotate(0deg)" }} />
                <span style={{ position: "relative", zIndex: 2, fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", color: "#FAF8F5", fontWeight: 500, marginTop: "5vw" }}>4.5x</span>
              </div>
              <h3 style={{ fontSize: "1.4vw", color: "#3D4F7C", margin: "0 0 1vh 0", fontWeight: 500 }}>Revenue Multiplier</h3>
              <p style={{ fontSize: "1vw", color: "#6B768B", textAlign: "center", margin: 0, maxWidth: "16vw" }}>Year-over-year growth rate.</p>
            </div>

            {/* Stat 3 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "25vw" }}>
              <div style={{ position: "relative", width: "12vw", height: "12vw", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "4vh" }}>
                <div style={{ position: "absolute", width: 0, height: 0, borderLeft: "6vw solid transparent", borderRight: "6vw solid transparent", borderBottom: "12vw solid #B3685F", transform: "rotate(90deg)" }} />
                <span style={{ position: "relative", zIndex: 2, fontFamily: "'Space Grotesk', sans-serif", fontSize: "3vw", color: "#FAF8F5", fontWeight: 500, marginRight: "2vw" }}>99%</span>
              </div>
              <h3 style={{ fontSize: "1.4vw", color: "#3D4F7C", margin: "0 0 1vh 0", fontWeight: 500 }}>Retention Rate</h3>
              <p style={{ fontSize: "1vw", color: "#6B768B", textAlign: "center", margin: 0, maxWidth: "16vw" }}>Client satisfaction and renewal metrics.</p>
            </div>

          </div>
        </div>
        
        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "1vh" }}>
          <div style={{ display: "flex", gap: "4vw" }}>
            <span style={{ fontSize: "0.9vw", color: "#8E99AF", letterSpacing: "0.1em" }}>Example Company, Inc.</span>
            <span style={{ fontSize: "0.9vw", color: "#8E99AF", fontStyle: "italic", letterSpacing: "0.05em" }}>Confidential</span>
          </div>
          <span style={{ fontSize: "0.9vw", color: "#3D4F7C", fontWeight: 500 }}>03</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/OrigamiPaperPage4.tsx`)

```tsx
export function OrigamiPaperPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#3D4F7C", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#FAF8F5" }}>
      {/* Inverse Fold lines */}
      <div style={{ position: "absolute", top: "10vh", left: "20vw", width: "1px", height: "150vh", borderLeft: "1px dashed rgba(250, 248, 245, 0.15)", transform: "rotate(45deg)", transformOrigin: "center" }} />
      <div style={{ position: "absolute", top: "60vh", right: "-20vw", width: "150vw", height: "1px", borderTop: "1px dashed rgba(196, 120, 110, 0.3)", transform: "rotate(-15deg)", transformOrigin: "center" }} />
      
      {/* Central Origami Structure Background */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "40vw", height: "40vw", opacity: 0.15, pointerEvents: "none", zIndex: 1 }}>
        <div style={{ position: "absolute", top: "0", left: "10vw", width: 0, height: 0, borderLeft: "10vw solid transparent", borderRight: "10vw solid transparent", borderBottom: "20vw solid #FAF8F5", transform: "rotate(0deg)" }} />
        <div style={{ position: "absolute", top: "10vw", left: "0", width: 0, height: 0, borderLeft: "10vw solid transparent", borderRight: "10vw solid transparent", borderBottom: "20vw solid #C4786E", transform: "rotate(180deg)" }} />
        <div style={{ position: "absolute", top: "10vw", left: "20vw", width: 0, height: 0, borderLeft: "10vw solid transparent", borderRight: "10vw solid transparent", borderBottom: "20vw solid #F0EAE1", transform: "rotate(180deg)" }} />
        <div style={{ position: "absolute", top: "20vw", left: "10vw", width: 0, height: 0, borderLeft: "10vw solid transparent", borderRight: "10vw solid transparent", borderBottom: "20vw solid #B3685F", transform: "rotate(0deg)" }} />
      </div>

      {/* Content */}
      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#FAF8F5", letterSpacing: "0.15em", opacity: 0.8 }}>acme.co</div>
          <div style={{ fontSize: "0.9vw", color: "#C4786E", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500 }}>Next Steps</div>
        </div>
        
        {/* Body Area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <div style={{ width: "6vw", height: "2px", background: "#C4786E", marginBottom: "5vh" }} />
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "7vw", fontWeight: 400, margin: "0", color: "#FAF8F5", letterSpacing: "-0.04em", lineHeight: 1.1 }}>
            Unfold the future.
          </h2>
          <p style={{ fontSize: "1.6vw", color: "rgba(250, 248, 245, 0.7)", marginTop: "4vh", maxWidth: "42vw", lineHeight: 1.6, fontWeight: 300, letterSpacing: "0.01em" }}>
            Reach out to our team to discover how we can transform your complex challenges into elegant, structured solutions.
          </p>
          
          <div style={{ marginTop: "7vh", padding: "1.5vw 4vw", border: "1px solid rgba(250, 248, 245, 0.4)", borderRadius: "100px", fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.15em", cursor: "pointer", color: "#FAF8F5", fontWeight: 500 }}>
            Contact Us
          </div>
        </div>
        
        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "1vh" }}>
          <div style={{ display: "flex", gap: "4vw", opacity: 0.6 }}>
            <span style={{ fontSize: "0.9vw", letterSpacing: "0.1em" }}>hello@acme.co</span>
            <span style={{ fontSize: "0.9vw", letterSpacing: "0.1em" }}>+1 (800) 555-0199</span>
          </div>
          <span style={{ fontSize: "0.9vw", fontWeight: 500, opacity: 0.8 }}>04</span>
        </div>
      </div>
    </div>
  );
}
```
