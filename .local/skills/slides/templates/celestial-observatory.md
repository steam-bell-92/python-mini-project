# Celestial Observatory

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "CelestialObservatory" template embodies a cosmic and modern aesthetic, featuring a dark, starry background. The background color is a radial gradient transitioning from #152243 at the center to #0B1026 at the edges. Text and accent colors include #ffffff for primary text and #D4C5A0 for decorative elements, with additional rgba variations for subtle effects. The font families used are 'DM Sans' for general text, 'DM Mono' for coordinate notations and bottom bar text, and 'Playfair Display' for the main title, providing a mix of modern and classic styles. Key layout elements include decorative constellation shapes, connecting lines, and grid lines, all positioned strategically to create a celestial theme. The overall aesthetic feel is "cosmic elegance."

## Source Code

**Component:** `CelestialObservatory`

### Slide 1 — Title (`slide-styles/CelestialObservatory.tsx`)

```tsx
export function CelestialObservatory() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0B1026",
        background: "radial-gradient(circle at 50% 120%, #152243 0%, #0B1026 60%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Decorative Constellations */}
      <div style={{ position: "absolute", top: "15vh", left: "10vw" }}>
        <div style={{ width: "0.3vw", height: "0.3vw", borderRadius: "50%", backgroundColor: "#D4C5A0", position: "absolute", top: 0, left: 0, boxShadow: "0 0 4px #D4C5A0" }} />
        <div style={{ width: "0.2vw", height: "0.2vw", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "4vh", left: "6vw", opacity: 0.7 }} />
        <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", backgroundColor: "#D4C5A0", position: "absolute", top: "10vh", left: "2vw", boxShadow: "0 0 6px #D4C5A0" }} />
        <div style={{ width: "0.2vw", height: "0.2vw", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "7vh", left: "12vw", opacity: 0.6 }} />
        
        {/* Connecting Lines */}
        <div style={{ position: "absolute", top: "0.15vw", left: "0.15vw", width: "7vw", height: "1px", backgroundColor: "rgba(212, 197, 160, 0.3)", transformOrigin: "0 0", transform: "rotate(30deg)" }} />
        <div style={{ position: "absolute", top: "0.15vw", left: "0.15vw", width: "10vw", height: "1px", backgroundColor: "rgba(212, 197, 160, 0.2)", transformOrigin: "0 0", transform: "rotate(78deg)" }} />
        <div style={{ position: "absolute", top: "4vh", left: "6vw", width: "7.5vw", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.2)", transformOrigin: "0 0", transform: "rotate(25deg)" }} />
        <div style={{ position: "absolute", top: "10vh", left: "2vw", width: "10.5vw", height: "1px", backgroundColor: "rgba(212, 197, 160, 0.2)", transformOrigin: "0 0", transform: "rotate(-15deg)" }} />
      </div>

      <div style={{ position: "absolute", bottom: "25vh", right: "15vw" }}>
        <div style={{ width: "0.3vw", height: "0.3vw", borderRadius: "50%", backgroundColor: "#D4C5A0", position: "absolute", top: 0, left: 0, boxShadow: "0 0 4px #D4C5A0" }} />
        <div style={{ width: "0.2vw", height: "0.2vw", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "-5vh", left: "-4vw", opacity: 0.8 }} />
        <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", backgroundColor: "#D4C5A0", position: "absolute", top: "8vh", left: "-6vw", boxShadow: "0 0 5px #D4C5A0" }} />
        <div style={{ width: "0.2vw", height: "0.2vw", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "6vh", left: "5vw", opacity: 0.5 }} />
        
        {/* Connecting Lines */}
        <div style={{ position: "absolute", top: "0.15vw", left: "0.15vw", width: "6vw", height: "1px", backgroundColor: "rgba(212, 197, 160, 0.3)", transformOrigin: "0 0", transform: "rotate(-128deg)" }} />
        <div style={{ position: "absolute", top: "0.15vw", left: "0.15vw", width: "10vw", height: "1px", backgroundColor: "rgba(212, 197, 160, 0.2)", transformOrigin: "0 0", transform: "rotate(125deg)" }} />
        <div style={{ position: "absolute", top: "0.15vw", left: "0.15vw", width: "7vw", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.2)", transformOrigin: "0 0", transform: "rotate(50deg)" }} />
      </div>

      {/* Grid Lines */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "20vw", width: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, right: "20vw", width: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: "20vh", height: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: "20vh", height: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />

      {/* Coordinate Notations */}
      <div style={{ position: "absolute", top: "4vh", right: "4vw", fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)", textAlign: "right", lineHeight: 1.5 }}>
        <div>RA 05h 34m 31.97s</div>
        <div>DEC +22° 00' 52.1"</div>
        <div>FOV 45.00°</div>
      </div>
      <div style={{ position: "absolute", bottom: "4vh", left: "4vw", fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)", lineHeight: 1.5 }}>
        <div>OBSERVATION LOG</div>
        <div>SEC 001 / QUAD 4</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 25vw", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "3vh" }}>
          <div style={{ width: "3vw", height: "1px", backgroundColor: "#D4C5A0" }} />
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#D4C5A0", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            acme.co
          </div>
        </div>
        
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "6.5vw",
            fontWeight: 400,
            lineHeight: 1.1,
            margin: "0 0 3vh 0",
            color: "#ffffff"
          }}
        >
          Example Deck
        </h1>
        
        <p
          style={{
            fontSize: "1.5vw",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.8)",
            margin: 0,
            maxWidth: "40vw"
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      {/* Bottom Bar */}
      <div style={{ position: "absolute", bottom: "4vh", right: "4vw", display: "flex", gap: "3vw", alignItems: "center", zIndex: 10 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)", letterSpacing: "0.1em" }}>EXAMPLE COMPANY, INC.</span>
        <div style={{ width: "1px", height: "1.5vh", backgroundColor: "rgba(212, 197, 160, 0.3)" }} />
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)" }}>CONFIDENTIAL</span>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CelestialObservatoryPage2.tsx`)

```tsx
export function CelestialObservatoryPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0B1026",
        background: "radial-gradient(circle at 50% 120%, #152243 0%, #0B1026 60%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Decorative Constellations */}
      <div style={{ position: "absolute", top: "8vh", left: "5vw" }}>
        <div style={{ width: "0.3vw", height: "0.3vw", borderRadius: "50%", backgroundColor: "#D4C5A0", position: "absolute", top: 0, left: 0, boxShadow: "0 0 4px #D4C5A0" }} />
        <div style={{ width: "0.2vw", height: "0.2vw", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "4vh", left: "6vw", opacity: 0.7 }} />
        <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", backgroundColor: "#D4C5A0", position: "absolute", top: "10vh", left: "2vw", boxShadow: "0 0 6px #D4C5A0" }} />
        
        {/* Connecting Lines */}
        <div style={{ position: "absolute", top: "0.15vw", left: "0.15vw", width: "7vw", height: "1px", backgroundColor: "rgba(212, 197, 160, 0.3)", transformOrigin: "0 0", transform: "rotate(30deg)" }} />
        <div style={{ position: "absolute", top: "0.15vw", left: "0.15vw", width: "10vw", height: "1px", backgroundColor: "rgba(212, 197, 160, 0.2)", transformOrigin: "0 0", transform: "rotate(78deg)" }} />
      </div>

      {/* Grid Lines */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "15vw", width: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", top: 0, bottom: 0, right: "15vw", width: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: "20vh", height: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: "15vh", height: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />

      {/* Coordinate Notations */}
      <div style={{ position: "absolute", top: "4vh", right: "4vw", fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)", textAlign: "right", lineHeight: 1.5 }}>
        <div>RA 05h 34m 31.97s</div>
        <div>DEC +22° 00' 52.1"</div>
      </div>
      <div style={{ position: "absolute", bottom: "4vh", left: "4vw", fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)", lineHeight: 1.5 }}>
        <div>SEC 001 / QUAD 4</div>
      </div>

      {/* Header */}
      <div style={{ position: "absolute", top: "8vh", left: "20vw", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "1vh" }}>
          <div style={{ width: "2vw", height: "1px", backgroundColor: "#D4C5A0" }} />
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#D4C5A0", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Discovery Phase
          </div>
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "3.5vw", fontWeight: 400, margin: 0, color: "#ffffff" }}>
          Navigating the Unknown
        </h2>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", margin: "25vh 20vw 20vh 20vw", gap: "5vw", zIndex: 10 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
          <div>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#D4C5A0", marginBottom: "1.5vh", letterSpacing: "0.1em" }}>01. OBSERVATION</h3>
            <p style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", margin: 0 }}>
              The initial phase involves mapping the current landscape. We deploy advanced telemetry to gather data points across all visible quadrants, ensuring no anomaly goes unnoticed.
            </p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#D4C5A0", marginBottom: "1.5vh", letterSpacing: "0.1em" }}>02. CALIBRATION</h3>
            <p style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", margin: 0 }}>
              Once data is collected, our instruments undergo rigorous calibration. We align our findings with established cosmic constants to filter out background noise and focus on true signals.
            </p>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
          <div>
            <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#D4C5A0", marginBottom: "1.5vh", letterSpacing: "0.1em" }}>03. SYNTHESIS</h3>
            <p style={{ fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.8, color: "rgba(255,255,255,0.8)", margin: 0 }}>
              Raw data transforms into actionable intelligence. We weave discrete observations into a unified model, revealing patterns that were previously obscured by the void.
            </p>
          </div>
          
          {/* Decorative element */}
          <div style={{ marginTop: "2vh", padding: "2.5vh 2vw", borderLeft: "1px solid rgba(212, 197, 160, 0.3)", backgroundColor: "rgba(255,255,255,0.02)" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.5vw", color: "#D4C5A0", margin: 0, lineHeight: 1.4 }}>
              "To look out into the cosmos is to realize how much remains to be discovered within our own systems."
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ position: "absolute", bottom: "4vh", right: "4vw", display: "flex", gap: "3vw", alignItems: "center", zIndex: 10 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)", letterSpacing: "0.1em" }}>EXAMPLE COMPANY, INC.</span>
        <div style={{ width: "1px", height: "1.5vh", backgroundColor: "rgba(212, 197, 160, 0.3)" }} />
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)" }}>PAGE 02</span>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CelestialObservatoryPage3.tsx`)

```tsx
export function CelestialObservatoryPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0B1026",
        background: "radial-gradient(circle at 50% 120%, #152243 0%, #0B1026 60%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Grid Lines */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "20vw", width: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: "20vh", height: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, bottom: "20vh", height: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />
      <div style={{ position: "absolute", top: "20vh", bottom: "20vh", left: "60vw", width: "1px", backgroundColor: "rgba(255,255,255,0.05)" }} />

      {/* Coordinate Notations */}
      <div style={{ position: "absolute", top: "4vh", right: "4vw", fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)", textAlign: "right", lineHeight: 1.5 }}>
        <div>MAGNITUDE LOG</div>
        <div>FREQ 1420.40 MHz</div>
      </div>

      {/* Header */}
      <div style={{ position: "absolute", top: "8vh", left: "25vw", zIndex: 10 }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "3vw", fontWeight: 400, margin: 0, color: "#ffffff" }}>
          Orbital Metrics
        </h2>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", margin: "25vh 10vw 25vh 25vw", zIndex: 10 }}>
        
        {/* Left Side: Metrics */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "6vh", paddingRight: "5vw" }}>
          
          <div style={{ display: "flex", alignItems: "flex-end", gap: "1.5vw" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#D4C5A0", lineHeight: 0.8 }}>
              87<span style={{ fontSize: "3vw" }}>%</span>
            </div>
            <div style={{ paddingBottom: "0.5vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", marginBottom: "0.5vh" }}>TRAJECTORY ALIGNMENT</div>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.8)", fontWeight: 300 }}>Increase in targeted acquisitions.</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: "1.5vw" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#ffffff", lineHeight: 0.8 }}>
              3.2<span style={{ fontSize: "3vw" }}>x</span>
            </div>
            <div style={{ paddingBottom: "0.5vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", marginBottom: "0.5vh" }}>SIGNAL AMPLIFICATION</div>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.8)", fontWeight: 300 }}>Multiplication of core retention rates.</div>
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "flex-end", gap: "1.5vw" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#ffffff", lineHeight: 0.8 }}>
              14<span style={{ fontSize: "3vw" }}>k</span>
            </div>
            <div style={{ paddingBottom: "0.5vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", marginBottom: "0.5vh" }}>DATA POINTS LOGGED</div>
              <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.8)", fontWeight: 300 }}>Unique celestial bodies mapped.</div>
            </div>
          </div>

        </div>

        {/* Right Side: Visual Graph */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "5vw", position: "relative" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#D4C5A0", letterSpacing: "0.15em", marginBottom: "4vh" }}>SPECTRAL ANALYSIS</div>
          
          {/* Abstract Chart */}
          <div style={{ height: "30vh", display: "flex", alignItems: "flex-end", gap: "1.5vw", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
            {[40, 65, 30, 85, 55, 95].map((height, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div style={{ 
                  width: "100%", 
                  height: `${height}%`, 
                  background: i === 3 ? "linear-gradient(to top, rgba(212, 197, 160, 0.2), rgba(212, 197, 160, 0.8))" : "linear-gradient(to top, rgba(255,255,255,0.05), rgba(255,255,255,0.2))",
                  borderTop: i === 3 ? "2px solid #D4C5A0" : "1px solid rgba(255,255,255,0.4)",
                  transition: "height 1s ease-out"
                }} />
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7vw", color: "rgba(255,255,255,0.5)" }}>
                  Q{i + 1}
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ position: "absolute", top: "15vh", left: "5vw", right: 0, height: "1px", borderTop: "1px dashed rgba(212, 197, 160, 0.3)" }} />
          <div style={{ position: "absolute", top: "13vh", right: "2vw", fontFamily: "'DM Mono', monospace", fontSize: "0.7vw", color: "#D4C5A0" }}>Nadir Threshold</div>
        </div>
      </div>

      {/* Decorative Constellations */}
      <div style={{ position: "absolute", bottom: "10vh", right: "8vw" }}>
        <div style={{ width: "0.3vw", height: "0.3vw", borderRadius: "50%", backgroundColor: "#D4C5A0", position: "absolute", top: 0, left: 0, boxShadow: "0 0 4px #D4C5A0" }} />
        <div style={{ width: "0.2vw", height: "0.2vw", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "-5vh", left: "-4vw", opacity: 0.8 }} />
        <div style={{ position: "absolute", top: "0.15vw", left: "0.15vw", width: "6vw", height: "1px", backgroundColor: "rgba(212, 197, 160, 0.3)", transformOrigin: "0 0", transform: "rotate(-128deg)" }} />
      </div>

      {/* Bottom Bar */}
      <div style={{ position: "absolute", bottom: "4vh", right: "4vw", display: "flex", gap: "3vw", alignItems: "center", zIndex: 10 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)", letterSpacing: "0.1em" }}>EXAMPLE COMPANY, INC.</span>
        <div style={{ width: "1px", height: "1.5vh", backgroundColor: "rgba(212, 197, 160, 0.3)" }} />
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)" }}>PAGE 03</span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CelestialObservatoryPage4.tsx`)

```tsx
export function CelestialObservatoryPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0B1026",
        background: "radial-gradient(circle at 50% 120%, #152243 0%, #0B1026 60%)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Decorative Constellations */}
      <div style={{ position: "absolute", top: "20vh", right: "20vw" }}>
        <div style={{ width: "0.4vw", height: "0.4vw", borderRadius: "50%", backgroundColor: "#D4C5A0", position: "absolute", top: 0, left: 0, boxShadow: "0 0 8px #D4C5A0" }} />
        <div style={{ width: "0.2vw", height: "0.2vw", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "6vh", left: "4vw", opacity: 0.7 }} />
        <div style={{ width: "0.3vw", height: "0.3vw", borderRadius: "50%", backgroundColor: "#D4C5A0", position: "absolute", top: "12vh", left: "-3vw", boxShadow: "0 0 6px #D4C5A0" }} />
        <div style={{ width: "0.2vw", height: "0.2vw", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "15vh", left: "5vw", opacity: 0.5 }} />
        
        {/* Connecting Lines */}
        <div style={{ position: "absolute", top: "0.2vw", left: "0.2vw", width: "7vw", height: "1px", backgroundColor: "rgba(212, 197, 160, 0.3)", transformOrigin: "0 0", transform: "rotate(40deg)" }} />
        <div style={{ position: "absolute", top: "0.2vw", left: "0.2vw", width: "12vw", height: "1px", backgroundColor: "rgba(212, 197, 160, 0.2)", transformOrigin: "0 0", transform: "rotate(104deg)" }} />
        <div style={{ position: "absolute", top: "12vh", left: "-3vw", width: "9vw", height: "1px", backgroundColor: "rgba(255, 255, 255, 0.2)", transformOrigin: "0 0", transform: "rotate(20deg)" }} />
      </div>

      <div style={{ position: "absolute", bottom: "30vh", left: "15vw" }}>
        <div style={{ width: "0.3vw", height: "0.3vw", borderRadius: "50%", backgroundColor: "#D4C5A0", position: "absolute", top: 0, left: 0, boxShadow: "0 0 4px #D4C5A0" }} />
        <div style={{ width: "0.2vw", height: "0.2vw", borderRadius: "50%", backgroundColor: "#fff", position: "absolute", top: "-8vh", left: "5vw", opacity: 0.6 }} />
        
        {/* Connecting Lines */}
        <div style={{ position: "absolute", top: "0.15vw", left: "0.15vw", width: "9vw", height: "1px", backgroundColor: "rgba(212, 197, 160, 0.2)", transformOrigin: "0 0", transform: "rotate(-58deg)" }} />
      </div>

      {/* Central Targeting Reticle */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "40vw", height: "40vw", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "30vw", height: "30vw", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%", pointerEvents: "none" }} />
      
      {/* Grid Lines */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", width: "1px", backgroundColor: "rgba(255,255,255,0.03)" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: "1px", backgroundColor: "rgba(255,255,255,0.03)" }} />

      {/* Coordinate Notations */}
      <div style={{ position: "absolute", top: "4vh", left: "4vw", fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)", lineHeight: 1.5 }}>
        <div>END TRANSMISSION</div>
        <div>T+ 04:32:11</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", zIndex: 10, padding: "0 20vw" }}>
        
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#D4C5A0", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "4vh" }}>
          Initiate Contact
        </div>
        
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "5.5vw",
            fontWeight: 400,
            lineHeight: 1.1,
            margin: "0 0 3vh 0",
            color: "#ffffff"
          }}
        >
          Chart the Course
        </h2>
        
        <p
          style={{
            fontSize: "1.4vw",
            fontWeight: 300,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.7)",
            margin: "0 0 6vh 0",
            maxWidth: "35vw"
          }}
        >
          The universe of possibilities awaits. Align your coordinates with our team to embark on the next phase of discovery.
        </p>

        <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
          <div style={{ padding: "1.5vh 3vw", border: "1px solid #D4C5A0", color: "#D4C5A0", fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", letterSpacing: "0.1em", cursor: "pointer", transition: "all 0.3s ease", backgroundColor: "rgba(212, 197, 160, 0.05)" }}>
            ESTABLISH LINK
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "rgba(255,255,255,0.6)" }}>
            hello@acme.co
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div style={{ position: "absolute", bottom: "4vh", right: "4vw", display: "flex", gap: "3vw", alignItems: "center", zIndex: 10 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)", letterSpacing: "0.1em" }}>EXAMPLE COMPANY, INC.</span>
        <div style={{ width: "1px", height: "1.5vh", backgroundColor: "rgba(212, 197, 160, 0.3)" }} />
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "rgba(212, 197, 160, 0.6)" }}>PAGE 04</span>
      </div>
    </div>
  );
}
```
