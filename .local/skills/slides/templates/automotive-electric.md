# Automotive Electric

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "AutomotiveElectric" template embodies a modern and sleek aesthetic, suitable for showcasing electric vehicles. The background color is a solid dark shade, specifically #08080C, with a full-bleed background image of an electric car sourced from "/__mockup/photos/electric-car.png". A gradient overlay at the bottom 45% of the slide transitions from transparent to rgba(8,8,12,0.92), enhancing depth. Text elements utilize the 'DM Mono' font for headings and footer labels in #A0A8B4, while the main title is presented in 'Space Grotesk' with a striking #FFFFFF color, emphasizing its importance. Key layout features include a decorative blue accent line (#4A90D9) and strategic positioning of content elements, creating a visually engaging hierarchy. The overall feel is contemporary and sophisticated.

## Source Code

**Component:** `AutomotiveElectric`

### Slide 1 — Title (`slide-styles/AutomotiveElectric.tsx`)

```tsx
export function AutomotiveElectric() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#08080C",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Full Bleed Background Image */}
      <img
        src="/__mockup/photos/electric-car.png"
        alt="Electric Car"
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
      
      {/* Gradient Overlay on Bottom 45% */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "45vh",
          background: "linear-gradient(to bottom, transparent 0%, rgba(8,8,12,0.92) 100%)",
          zIndex: 2,
        }}
      />
      
      {/* Content over overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "12vh",
          left: "6vw",
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#A0A8B4",
            fontSize: "1.2vw",
            letterSpacing: "0.2em",
            marginBottom: "2vh",
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
          }}
        >
          <span style={{ textTransform: "uppercase" }}>PERFORMANCE SERIES</span>
          <span style={{ color: "#4A90D9" }}>/</span>
          <span>0–60 IN 2.8s</span>
        </div>
        
        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#FFFFFF",
            fontSize: "6vw",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "3vh",
          }}
        >
          Example Deck
        </div>

        <div
          style={{
            width: "8vw",
            height: "0.2vh",
            backgroundColor: "#4A90D9",
            marginBottom: "3vh",
          }}
        />

        <div
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#A0A8B4",
            fontSize: "1.8vw",
            fontWeight: 400,
            maxWidth: "50vw",
            lineHeight: 1.4,
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </div>
      </div>

      {/* Footer labels */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "6vw",
          zIndex: 3,
          fontFamily: "'DM Mono', monospace",
          color: "#A0A8B4",
          fontSize: "1vw",
          letterSpacing: "0.1em",
        }}
      >
        acme.co
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          right: "6vw",
          zIndex: 3,
          fontFamily: "'DM Mono', monospace",
          color: "#A0A8B4",
          fontSize: "1vw",
          letterSpacing: "0.2em",
        }}
      >
        CONFIDENTIAL
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/AutomotiveElectricPage2.tsx`)

```tsx
export function AutomotiveElectricPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#08080C", overflow: "hidden", position: "relative" }}>
      {/* Header */}
      <div style={{ position: "absolute", top: "12vh", left: "6vw", zIndex: 3 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#A0A8B4", fontSize: "1.2vw", letterSpacing: "0.2em", marginBottom: "2vh", display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <span style={{ textTransform: "uppercase" }}>ENGINEERING</span>
          <span style={{ color: "#4A90D9" }}>/</span>
          <span>SYSTEM ARCHITECTURE</span>
        </div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "4vw", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "3vh" }}>
          The Architecture<br/>of Speed
        </div>
        <div style={{ width: "8vw", height: "0.2vh", backgroundColor: "#4A90D9", marginBottom: "3vh" }} />
      </div>

      {/* Content */}
      <div style={{ position: "absolute", top: "45vh", left: "6vw", right: "6vw", display: "flex", gap: "6vw", zIndex: 3 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "2vw", fontWeight: 700, marginBottom: "2vh" }}>Dual-Motor AWD</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A0A8B4", fontSize: "1.4vw", lineHeight: 1.5 }}>
            Our proprietary dual-motor all-wheel-drive system delivers instant torque to all four wheels, ensuring unparalleled traction and acceleration in any condition.
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "2vw", fontWeight: 700, marginBottom: "2vh" }}>800V Architecture</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A0A8B4", fontSize: "1.4vw", lineHeight: 1.5 }}>
            Advanced 800-volt battery architecture enables ultra-fast charging capabilities, allowing you to add 200 miles of range in just 15 minutes.
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "2vw", fontWeight: 700, marginBottom: "2vh" }}>Active Aerodynamics</div>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A0A8B4", fontSize: "1.4vw", lineHeight: 1.5 }}>
            Intelligent active aerodynamic elements continuously adjust to minimize drag, optimizing both high-speed stability and overall efficiency.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: "4vh", left: "6vw", zIndex: 3, fontFamily: "'DM Mono', monospace", color: "#A0A8B4", fontSize: "1vw", letterSpacing: "0.1em" }}>acme.co</div>
      <div style={{ position: "absolute", bottom: "4vh", left: "50%", transform: "translateX(-50%)", zIndex: 3, fontFamily: "'DM Mono', monospace", color: "#A0A8B4", fontSize: "1vw", letterSpacing: "0.2em" }}>02</div>
      <div style={{ position: "absolute", bottom: "4vh", right: "6vw", zIndex: 3, fontFamily: "'DM Mono', monospace", color: "#A0A8B4", fontSize: "1vw", letterSpacing: "0.2em" }}>CONFIDENTIAL</div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/AutomotiveElectricPage3.tsx`)

```tsx
export function AutomotiveElectricPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#08080C", overflow: "hidden", position: "relative" }}>
      {/* Header */}
      <div style={{ position: "absolute", top: "12vh", left: "6vw", zIndex: 3 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#A0A8B4", fontSize: "1.2vw", letterSpacing: "0.2em", marginBottom: "2vh", display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <span style={{ textTransform: "uppercase" }}>PERFORMANCE METRICS</span>
          <span style={{ color: "#4A90D9" }}>/</span>
          <span>Q3 DATA</span>
        </div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "4vw", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "3vh" }}>
          Setting New Benchmarks
        </div>
        <div style={{ width: "8vw", height: "0.2vh", backgroundColor: "#4A90D9", marginBottom: "3vh" }} />
      </div>

      {/* Data Visual */}
      <div style={{ position: "absolute", top: "45vh", left: "6vw", width: "60vw", zIndex: 3, display: "flex", flexDirection: "column", gap: "4vh" }}>
        {/* Metric 1 */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Mono', monospace", color: "#FFFFFF", fontSize: "1.2vw", letterSpacing: "0.1em", marginBottom: "1vh" }}>
            <span>ACCELERATION (0-60 MPH)</span>
            <span style={{ color: "#4A90D9" }}>2.8s</span>
          </div>
          <div style={{ width: "100%", height: "1vh", backgroundColor: "#1A1A24", borderRadius: "0.5vh", overflow: "hidden" }}>
            <div style={{ width: "95%", height: "100%", backgroundColor: "#4A90D9" }} />
          </div>
        </div>

        {/* Metric 2 */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Mono', monospace", color: "#FFFFFF", fontSize: "1.2vw", letterSpacing: "0.1em", marginBottom: "1vh" }}>
            <span>EPA ESTIMATED RANGE</span>
            <span style={{ color: "#4A90D9" }}>412 MILES</span>
          </div>
          <div style={{ width: "100%", height: "1vh", backgroundColor: "#1A1A24", borderRadius: "0.5vh", overflow: "hidden" }}>
            <div style={{ width: "88%", height: "100%", backgroundColor: "#4A90D9" }} />
          </div>
        </div>

        {/* Metric 3 */}
        <div>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Mono', monospace", color: "#FFFFFF", fontSize: "1.2vw", letterSpacing: "0.1em", marginBottom: "1vh" }}>
            <span>PEAK POWER OUTPUT</span>
            <span style={{ color: "#4A90D9" }}>1020 HP</span>
          </div>
          <div style={{ width: "100%", height: "1vh", backgroundColor: "#1A1A24", borderRadius: "0.5vh", overflow: "hidden" }}>
            <div style={{ width: "100%", height: "100%", backgroundColor: "#4A90D9" }} />
          </div>
        </div>
      </div>

      {/* Callout box */}
      <div style={{ position: "absolute", top: "45vh", right: "6vw", width: "22vw", backgroundColor: "#1A1A24", borderLeft: "0.4vw solid #4A90D9", padding: "3vw", zIndex: 3 }}>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "3vw", fontWeight: 700, marginBottom: "1vh" }}>+42%</div>
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A0A8B4", fontSize: "1.2vw", lineHeight: 1.5 }}>
          Improvement in thermal efficiency compared to previous generation architecture.
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: "4vh", left: "6vw", zIndex: 3, fontFamily: "'DM Mono', monospace", color: "#A0A8B4", fontSize: "1vw", letterSpacing: "0.1em" }}>acme.co</div>
      <div style={{ position: "absolute", bottom: "4vh", left: "50%", transform: "translateX(-50%)", zIndex: 3, fontFamily: "'DM Mono', monospace", color: "#A0A8B4", fontSize: "1vw", letterSpacing: "0.2em" }}>03</div>
      <div style={{ position: "absolute", bottom: "4vh", right: "6vw", zIndex: 3, fontFamily: "'DM Mono', monospace", color: "#A0A8B4", fontSize: "1vw", letterSpacing: "0.2em" }}>CONFIDENTIAL</div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/AutomotiveElectricPage4.tsx`)

```tsx
export function AutomotiveElectricPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: "#08080C", overflow: "hidden", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      
      {/* Background Image with heavy overlay */}
      <img
        src="/__mockup/photos/electric-car.png"
        alt="Electric Car"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.3,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at center, transparent 0%, #08080C 80%)",
          zIndex: 2,
        }}
      />

      <div style={{ zIndex: 3, textAlign: "center", maxWidth: "60vw" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#4A90D9", fontSize: "1.2vw", letterSpacing: "0.3em", marginBottom: "3vh", textTransform: "uppercase" }}>
          The Future Is Now
        </div>
        
        <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "7vw", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.02em", marginBottom: "4vh" }}>
          Reserve Yours
        </div>

        <div style={{ width: "6vw", height: "0.2vh", backgroundColor: "#4A90D9", margin: "0 auto 4vh auto" }} />

        <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A0A8B4", fontSize: "1.8vw", fontWeight: 400, lineHeight: 1.4, marginBottom: "6vh" }}>
          Join the exclusive list of early adopters and experience the pinnacle of electric performance.
        </div>

        <div style={{ display: "flex", gap: "2vw", justifyContent: "center", fontFamily: "'DM Mono', monospace", fontSize: "1vw", letterSpacing: "0.1em" }}>
          <div style={{ padding: "1.5vw 3vw", backgroundColor: "#4A90D9", color: "#FFFFFF", fontWeight: 600, cursor: "pointer" }}>
            BUILD & PRICE
          </div>
          <div style={{ padding: "1.5vw 3vw", border: "0.1vw solid #4A90D9", color: "#4A90D9", fontWeight: 600, cursor: "pointer" }}>
            CONTACT SALES
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: "4vh", left: "6vw", zIndex: 3, fontFamily: "'DM Mono', monospace", color: "#A0A8B4", fontSize: "1vw", letterSpacing: "0.1em" }}>acme.co</div>
      <div style={{ position: "absolute", bottom: "4vh", left: "50%", transform: "translateX(-50%)", zIndex: 3, fontFamily: "'DM Mono', monospace", color: "#A0A8B4", fontSize: "1vw", letterSpacing: "0.2em" }}>04</div>
      <div style={{ position: "absolute", bottom: "4vh", right: "6vw", zIndex: 3, fontFamily: "'DM Mono', monospace", color: "#A0A8B4", fontSize: "1vw", letterSpacing: "0.2em" }}>CONFIDENTIAL</div>
    </div>
  );
}
```
