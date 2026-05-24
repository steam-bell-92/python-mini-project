# Engineering Blueprint

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "EngineeringBlueprint" template embodies a technical and modern aesthetic, reminiscent of engineering schematics. It features a solid background color of #0F2537, complemented by a complex layered linear gradient of white shades for a subtle grid effect. The primary text color is #E0F2FE, with accents in #7DD3FC for borders and decorative elements. The font families used include 'DM Mono' for general text, conveying a monospaced, technical feel, and 'Space Grotesk' for the main title, which is bold and modern. Key layout elements include a central content area framed by dashed borders, crosshairs for precision, and dimension markers, all contributing to a structured and organized appearance. There are no background images used in this template. The overall aesthetic feel can be described as "technical blueprint."

## Source Code

**Component:** `EngineeringBlueprint`

### Slide 1 — Title (`slide-styles/EngineeringBlueprint.tsx`)

```tsx
export function EngineeringBlueprint() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F2537",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255, 255, 255, 0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0.05vw, transparent 0.05vw)",
        backgroundSize: "5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw",
        color: "#E0F2FE",
        fontFamily: "'DM Mono', monospace",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Outer border and main dashed frame */}
      <div
        style={{
          position: "absolute",
          top: "2vh",
          left: "2vw",
          right: "2vw",
          bottom: "2vh",
          border: "0.2vw solid #7DD3FC",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1vh",
            left: "1vw",
            right: "1vw",
            bottom: "1vh",
            border: "0.1vw dashed rgba(125, 211, 252, 0.5)",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Crosshairs */}
      <div style={{ position: "absolute", top: "10vh", left: "10vw", width: "2vw", height: "0.1vh", backgroundColor: "#7DD3FC" }} />
      <div style={{ position: "absolute", top: "9vw", left: "10.95vw", width: "0.1vw", height: "2vw", backgroundColor: "#7DD3FC" }} />

      <div style={{ position: "absolute", bottom: "10vh", right: "10vw", width: "2vw", height: "0.1vh", backgroundColor: "#7DD3FC" }} />
      <div style={{ position: "absolute", bottom: "9vw", right: "10.95vw", width: "0.1vw", height: "2vw", backgroundColor: "#7DD3FC" }} />

      {/* Dimension markers */}
      <div style={{ position: "absolute", top: "4vh", left: "50vw", transform: "translateX(-50%)", fontSize: "0.8vw", color: "#7DD3FC", display: "flex", alignItems: "center", gap: "1vw" }}>
        <span>|</span>
        <span style={{ borderTop: "0.1vh solid #7DD3FC", width: "10vw" }}></span>
        <span>ELEVATION A</span>
        <span style={{ borderTop: "0.1vh solid #7DD3FC", width: "10vw" }}></span>
        <span>|</span>
      </div>

      <div style={{ position: "absolute", top: "50vh", right: "3vw", transform: "translateY(-50%) rotate(90deg)", fontSize: "0.8vw", color: "#7DD3FC", display: "flex", alignItems: "center", gap: "1vw" }}>
        <span>|</span>
        <span style={{ borderTop: "0.1vh solid #7DD3FC", width: "15vw" }}></span>
        <span>SECT. 4</span>
        <span style={{ borderTop: "0.1vh solid #7DD3FC", width: "15vw" }}></span>
        <span>|</span>
      </div>

      {/* Content Area */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "15vw",
          width: "70vw",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "1vw", color: "#7DD3FC", letterSpacing: "0.2vw", marginBottom: "1vh" }}>
              [ acme.co ]
            </div>
            <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)", letterSpacing: "0.1vw" }}>
              PROJECT NO. 2026-X
            </div>
          </div>
          <div style={{ textAlign: "right", fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)", letterSpacing: "0.1vw" }}>
            <div style={{ marginBottom: "0.5vh" }}>STATUS: CONFIDENTIAL</div>
            <div>REV: 01</div>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          {/* Annotation lines */}
          <div style={{ position: "absolute", left: "-5vw", top: "5vh", width: "4vw", height: "0.1vh", backgroundColor: "#7DD3FC" }} />
          <div style={{ position: "absolute", left: "-5vw", top: "5vh", width: "0.1vw", height: "10vh", backgroundColor: "#7DD3FC" }} />
          
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "8vw",
              fontWeight: 700,
              lineHeight: 0.9,
              margin: "0 0 2vh 0",
              textTransform: "uppercase",
              letterSpacing: "-0.2vw",
              color: "#FFFFFF",
              textShadow: "0.2vw 0.2vw 0 rgba(125, 211, 252, 0.2)"
            }}
          >
            Example<br />Deck
          </h1>
          
          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "2vw", height: "0.2vh", backgroundColor: "#7DD3FC", marginTop: "1vh" }} />
            <p
              style={{
                fontSize: "1.2vw",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#E0F2FE",
                margin: 0,
                maxWidth: "40vw",
              }}
            >
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "0.1vh solid rgba(125, 211, 252, 0.3)", paddingTop: "2vh" }}>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            DRAWN BY: Example Company, Inc.
          </div>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            DATE: 2026
          </div>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            SHEET: 01/01
          </div>
        </div>
      </div>
      
      {/* Bottom right title block detail */}
      <div style={{
        position: "absolute",
        bottom: "4vh",
        right: "4vw",
        width: "15vw",
        height: "8vh",
        border: "0.1vw solid #7DD3FC",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{ flex: 1, borderBottom: "0.1vw solid #7DD3FC", display: "flex", alignItems: "center", paddingLeft: "0.5vw", fontSize: "0.7vw" }}>
          APPR: _________
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", paddingLeft: "0.5vw", fontSize: "0.7vw" }}>
          SCALE: NTS
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/EngineeringBlueprintPage2.tsx`)

```tsx
export function EngineeringBlueprintPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F2537",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255, 255, 255, 0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0.05vw, transparent 0.05vw)",
        backgroundSize: "5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw",
        color: "#E0F2FE",
        fontFamily: "'DM Mono', monospace",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Outer border and main dashed frame */}
      <div
        style={{
          position: "absolute",
          top: "2vh",
          left: "2vw",
          right: "2vw",
          bottom: "2vh",
          border: "0.2vw solid #7DD3FC",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1vh",
            left: "1vw",
            right: "1vw",
            bottom: "1vh",
            border: "0.1vw dashed rgba(125, 211, 252, 0.5)",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Crosshairs */}
      <div style={{ position: "absolute", top: "10vh", left: "10vw", width: "2vw", height: "0.1vh", backgroundColor: "#7DD3FC" }} />
      <div style={{ position: "absolute", top: "9vw", left: "10.95vw", width: "0.1vw", height: "2vw", backgroundColor: "#7DD3FC" }} />

      <div style={{ position: "absolute", bottom: "10vh", right: "10vw", width: "2vw", height: "0.1vh", backgroundColor: "#7DD3FC" }} />
      <div style={{ position: "absolute", bottom: "9vw", right: "10.95vw", width: "0.1vw", height: "2vw", backgroundColor: "#7DD3FC" }} />

      {/* Dimension markers */}
      <div style={{ position: "absolute", top: "4vh", left: "50vw", transform: "translateX(-50%)", fontSize: "0.8vw", color: "#7DD3FC", display: "flex", alignItems: "center", gap: "1vw" }}>
        <span>|</span>
        <span style={{ borderTop: "0.1vh solid #7DD3FC", width: "10vw" }}></span>
        <span>ELEVATION B</span>
        <span style={{ borderTop: "0.1vh solid #7DD3FC", width: "10vw" }}></span>
        <span>|</span>
      </div>

      {/* Content Area */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "10vw",
          width: "80vw",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4vh", borderBottom: "0.1vh solid rgba(125, 211, 252, 0.3)", paddingBottom: "2vh" }}>
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "4vw",
                fontWeight: 700,
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "-0.1vw",
                color: "#FFFFFF",
                textShadow: "0.1vw 0.1vw 0 rgba(125, 211, 252, 0.2)"
              }}
            >
              System Architecture
            </h2>
            <div style={{ fontSize: "1vw", color: "#7DD3FC", letterSpacing: "0.1vw", marginTop: "1vh" }}>
              FIG. 01 - CORE COMPONENTS
            </div>
          </div>
          <div style={{ textAlign: "right", fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)", letterSpacing: "0.1vw" }}>
            <div>SPEC: ALPHA-9</div>
            <div>STATUS: ACTIVE</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "5vw", flex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
            <div style={{ position: "relative", paddingLeft: "2vw" }}>
              <div style={{ position: "absolute", left: 0, top: "0", width: "0.2vw", height: "100%", backgroundColor: "#7DD3FC" }} />
              <h3 style={{ fontSize: "1.5vw", color: "#FFFFFF", margin: "0 0 1vh 0", fontFamily: "'Space Grotesk', sans-serif" }}>Scalable Infrastructure</h3>
              <p style={{ fontSize: "1.1vw", color: "rgba(224, 242, 254, 0.8)", lineHeight: 1.6, margin: 0 }}>
                Built on a foundation of microservices, our architecture ensures high availability and fault tolerance across global regions.
              </p>
            </div>
            <div style={{ position: "relative", paddingLeft: "2vw" }}>
              <div style={{ position: "absolute", left: 0, top: "0", width: "0.2vw", height: "100%", backgroundColor: "rgba(125, 211, 252, 0.4)" }} />
              <h3 style={{ fontSize: "1.5vw", color: "#FFFFFF", margin: "0 0 1vh 0", fontFamily: "'Space Grotesk', sans-serif" }}>Real-time Processing</h3>
              <p style={{ fontSize: "1.1vw", color: "rgba(224, 242, 254, 0.8)", lineHeight: 1.6, margin: 0 }}>
                Data streams are processed with sub-millisecond latency, providing immediate insights and actionable intelligence.
              </p>
            </div>
            <div style={{ position: "relative", paddingLeft: "2vw" }}>
              <div style={{ position: "absolute", left: 0, top: "0", width: "0.2vw", height: "100%", backgroundColor: "rgba(125, 211, 252, 0.4)" }} />
              <h3 style={{ fontSize: "1.5vw", color: "#FFFFFF", margin: "0 0 1vh 0", fontFamily: "'Space Grotesk', sans-serif" }}>Secure By Design</h3>
              <p style={{ fontSize: "1.1vw", color: "rgba(224, 242, 254, 0.8)", lineHeight: 1.6, margin: 0 }}>
                End-to-end encryption and zero-trust principles govern all internal and external communication protocols.
              </p>
            </div>
          </div>
          
          <div style={{ flex: 1, position: "relative", border: "0.1vw solid rgba(125, 211, 252, 0.3)", backgroundColor: "rgba(15, 37, 55, 0.8)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, padding: "1vw", borderBottom: "0.1vw solid rgba(125, 211, 252, 0.3)", borderRight: "0.1vw solid rgba(125, 211, 252, 0.3)", fontSize: "0.8vw", color: "#7DD3FC" }}>DIAGRAM A.1</div>
            
            {/* Abstract Diagram */}
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <div style={{ width: "15vw", height: "15vw", border: "0.2vw solid #7DD3FC", borderRadius: "50%", position: "absolute", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "10vw", height: "10vw", border: "0.1vw dashed #7DD3FC", borderRadius: "50%", animation: "spin 20s linear infinite" }} />
              </div>
              
              {/* Connection Lines */}
              <div style={{ position: "absolute", width: "8vw", height: "0.1vw", backgroundColor: "#7DD3FC", left: "4vw", top: "50%" }} />
              <div style={{ position: "absolute", width: "8vw", height: "0.1vw", backgroundColor: "#7DD3FC", right: "4vw", top: "50%" }} />
              <div style={{ position: "absolute", width: "0.1vw", height: "8vw", backgroundColor: "#7DD3FC", top: "4vh", left: "50%" }} />
              <div style={{ position: "absolute", width: "0.1vw", height: "8vw", backgroundColor: "#7DD3FC", bottom: "4vh", left: "50%" }} />
              
              {/* Nodes */}
              <div style={{ position: "absolute", width: "3vw", height: "3vw", border: "0.1vw solid #7DD3FC", left: "2.5vw", top: "calc(50% - 1.5vw)", backgroundColor: "#0F2537", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7vw" }}>IN</div>
              <div style={{ position: "absolute", width: "3vw", height: "3vw", border: "0.1vw solid #7DD3FC", right: "2.5vw", top: "calc(50% - 1.5vw)", backgroundColor: "#0F2537", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7vw" }}>OUT</div>
              <div style={{ position: "absolute", width: "4vw", height: "2vw", border: "0.1vw solid #7DD3FC", top: "2.5vh", left: "calc(50% - 2vw)", backgroundColor: "#0F2537", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7vw" }}>CPU</div>
              <div style={{ position: "absolute", width: "4vw", height: "2vw", border: "0.1vw solid #7DD3FC", bottom: "2.5vh", left: "calc(50% - 2vw)", backgroundColor: "#0F2537", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7vw" }}>MEM</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "0.1vh solid rgba(125, 211, 252, 0.3)", paddingTop: "2vh", marginTop: "auto" }}>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            DRAWN BY: Example Company, Inc.
          </div>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            DATE: 2026
          </div>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            SHEET: 02/04
          </div>
        </div>
      </div>
      
      {/* Bottom right title block detail */}
      <div style={{
        position: "absolute",
        bottom: "4vh",
        right: "4vw",
        width: "15vw",
        height: "8vh",
        border: "0.1vw solid #7DD3FC",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{ flex: 1, borderBottom: "0.1vw solid #7DD3FC", display: "flex", alignItems: "center", paddingLeft: "0.5vw", fontSize: "0.7vw" }}>
          APPR: _________
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", paddingLeft: "0.5vw", fontSize: "0.7vw" }}>
          SCALE: 1:100
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/EngineeringBlueprintPage3.tsx`)

```tsx
export function EngineeringBlueprintPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F2537",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255, 255, 255, 0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0.05vw, transparent 0.05vw)",
        backgroundSize: "5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw",
        color: "#E0F2FE",
        fontFamily: "'DM Mono', monospace",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Outer border and main dashed frame */}
      <div
        style={{
          position: "absolute",
          top: "2vh",
          left: "2vw",
          right: "2vw",
          bottom: "2vh",
          border: "0.2vw solid #7DD3FC",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1vh",
            left: "1vw",
            right: "1vw",
            bottom: "1vh",
            border: "0.1vw dashed rgba(125, 211, 252, 0.5)",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Crosshairs */}
      <div style={{ position: "absolute", top: "10vh", left: "10vw", width: "2vw", height: "0.1vh", backgroundColor: "#7DD3FC" }} />
      <div style={{ position: "absolute", top: "9vw", left: "10.95vw", width: "0.1vw", height: "2vw", backgroundColor: "#7DD3FC" }} />

      <div style={{ position: "absolute", bottom: "10vh", right: "10vw", width: "2vw", height: "0.1vh", backgroundColor: "#7DD3FC" }} />
      <div style={{ position: "absolute", bottom: "9vw", right: "10.95vw", width: "0.1vw", height: "2vw", backgroundColor: "#7DD3FC" }} />

      {/* Dimension markers */}
      <div style={{ position: "absolute", top: "4vh", left: "50vw", transform: "translateX(-50%)", fontSize: "0.8vw", color: "#7DD3FC", display: "flex", alignItems: "center", gap: "1vw" }}>
        <span>|</span>
        <span style={{ borderTop: "0.1vh solid #7DD3FC", width: "10vw" }}></span>
        <span>ELEVATION C</span>
        <span style={{ borderTop: "0.1vh solid #7DD3FC", width: "10vw" }}></span>
        <span>|</span>
      </div>

      {/* Content Area */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "10vw",
          width: "80vw",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4vh", borderBottom: "0.1vh solid rgba(125, 211, 252, 0.3)", paddingBottom: "2vh" }}>
          <div>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "4vw",
                fontWeight: 700,
                margin: 0,
                textTransform: "uppercase",
                letterSpacing: "-0.1vw",
                color: "#FFFFFF",
                textShadow: "0.1vw 0.1vw 0 rgba(125, 211, 252, 0.2)"
              }}
            >
              Performance Metrics
            </h2>
            <div style={{ fontSize: "1vw", color: "#7DD3FC", letterSpacing: "0.1vw", marginTop: "1vh" }}>
              DATA SET: Q4-ANALYSIS
            </div>
          </div>
          <div style={{ textAlign: "right", fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)", letterSpacing: "0.1vw" }}>
            <div>VAR: DELTA-T</div>
            <div>UNITS: METRIC</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
          {/* Data Chart */}
          <div style={{ flex: 2, display: "flex", flexDirection: "column", border: "0.1vw solid rgba(125, 211, 252, 0.3)", backgroundColor: "rgba(15, 37, 55, 0.5)", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: 0, padding: "1vw", borderBottom: "0.1vw solid rgba(125, 211, 252, 0.3)", borderRight: "0.1vw solid rgba(125, 211, 252, 0.3)", fontSize: "0.8vw", color: "#7DD3FC" }}>CHART 1.0</div>
            
            <div style={{ padding: "4vw 2vw 2vw 4vw", flex: 1, display: "flex", alignItems: "flex-end", gap: "2vw", position: "relative" }}>
              {/* Y Axis */}
              <div style={{ position: "absolute", left: "3vw", top: "4vw", bottom: "2vw", width: "0.1vw", backgroundColor: "#7DD3FC" }} />
              {/* X Axis */}
              <div style={{ position: "absolute", left: "3vw", bottom: "2vw", right: "2vw", height: "0.1vw", backgroundColor: "#7DD3FC" }} />
              
              {/* Grid Lines */}
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{ position: "absolute", left: "3vw", right: "2vw", bottom: `calc(2vw + ${i * 20}%)`, height: "0.1vw", borderBottom: "0.1vw dashed rgba(125, 211, 252, 0.2)" }} />
              ))}
              
              {/* Bars */}
              <div style={{ flex: 1, height: "40%", backgroundColor: "rgba(125, 211, 252, 0.2)", border: "0.1vw solid #7DD3FC", position: "relative" }}>
                <div style={{ position: "absolute", top: "-1.5vw", width: "100%", textAlign: "center", fontSize: "0.8vw", color: "#7DD3FC" }}>42%</div>
                <div style={{ position: "absolute", bottom: "-1.5vw", width: "100%", textAlign: "center", fontSize: "0.8vw", color: "#7DD3FC" }}>Q1</div>
              </div>
              <div style={{ flex: 1, height: "65%", backgroundColor: "rgba(125, 211, 252, 0.4)", border: "0.1vw solid #7DD3FC", position: "relative" }}>
                <div style={{ position: "absolute", top: "-1.5vw", width: "100%", textAlign: "center", fontSize: "0.8vw", color: "#7DD3FC" }}>65%</div>
                <div style={{ position: "absolute", bottom: "-1.5vw", width: "100%", textAlign: "center", fontSize: "0.8vw", color: "#7DD3FC" }}>Q2</div>
              </div>
              <div style={{ flex: 1, height: "55%", backgroundColor: "rgba(125, 211, 252, 0.3)", border: "0.1vw solid #7DD3FC", position: "relative" }}>
                <div style={{ position: "absolute", top: "-1.5vw", width: "100%", textAlign: "center", fontSize: "0.8vw", color: "#7DD3FC" }}>55%</div>
                <div style={{ position: "absolute", bottom: "-1.5vw", width: "100%", textAlign: "center", fontSize: "0.8vw", color: "#7DD3FC" }}>Q3</div>
              </div>
              <div style={{ flex: 1, height: "90%", backgroundColor: "rgba(125, 211, 252, 0.6)", border: "0.1vw solid #7DD3FC", position: "relative" }}>
                <div style={{ position: "absolute", top: "-1.5vw", width: "100%", textAlign: "center", fontSize: "0.8vw", color: "#FFFFFF", fontWeight: "bold" }}>90%</div>
                <div style={{ position: "absolute", bottom: "-1.5vw", width: "100%", textAlign: "center", fontSize: "0.8vw", color: "#7DD3FC" }}>Q4</div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ padding: "1.5vw", border: "0.1vw solid #7DD3FC", backgroundColor: "rgba(125, 211, 252, 0.05)" }}>
              <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)", marginBottom: "0.5vh" }}>EFFICIENCY GAIN</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "3vw", color: "#FFFFFF", lineHeight: 1 }}>+314%</div>
            </div>
            
            <div style={{ padding: "1.5vw", border: "0.1vw solid rgba(125, 211, 252, 0.4)", backgroundColor: "rgba(125, 211, 252, 0.02)" }}>
              <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)", marginBottom: "0.5vh" }}>PROCESSING TIME</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "3vw", color: "#FFFFFF", lineHeight: 1 }}>1.2ms</div>
            </div>

            <div style={{ padding: "1.5vw", border: "0.1vw solid rgba(125, 211, 252, 0.4)", backgroundColor: "rgba(125, 211, 252, 0.02)" }}>
              <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)", marginBottom: "0.5vh" }}>ERROR RATE</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "3vw", color: "#FFFFFF", lineHeight: 1 }}>{"<0.01%"}</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "0.1vh solid rgba(125, 211, 252, 0.3)", paddingTop: "2vh", marginTop: "auto" }}>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            DRAWN BY: Example Company, Inc.
          </div>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            DATE: 2026
          </div>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            SHEET: 03/04
          </div>
        </div>
      </div>
      
      {/* Bottom right title block detail */}
      <div style={{
        position: "absolute",
        bottom: "4vh",
        right: "4vw",
        width: "15vw",
        height: "8vh",
        border: "0.1vw solid #7DD3FC",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{ flex: 1, borderBottom: "0.1vw solid #7DD3FC", display: "flex", alignItems: "center", paddingLeft: "0.5vw", fontSize: "0.7vw" }}>
          APPR: _________
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", paddingLeft: "0.5vw", fontSize: "0.7vw" }}>
          SCALE: NTS
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/EngineeringBlueprintPage4.tsx`)

```tsx
export function EngineeringBlueprintPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F2537",
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.1) 0.1vh, transparent 0.1vh), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.1vw, transparent 0.1vw), linear-gradient(rgba(255, 255, 255, 0.05) 0.05vh, transparent 0.05vh), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0.05vw, transparent 0.05vw)",
        backgroundSize: "5vw 5vw, 5vw 5vw, 1vw 1vw, 1vw 1vw",
        color: "#E0F2FE",
        fontFamily: "'DM Mono', monospace",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Outer border and main dashed frame */}
      <div
        style={{
          position: "absolute",
          top: "2vh",
          left: "2vw",
          right: "2vw",
          bottom: "2vh",
          border: "0.2vw solid #7DD3FC",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "1vh",
            left: "1vw",
            right: "1vw",
            bottom: "1vh",
            border: "0.1vw dashed rgba(125, 211, 252, 0.5)",
            boxSizing: "border-box",
          }}
        />
      </div>

      {/* Crosshairs */}
      <div style={{ position: "absolute", top: "10vh", left: "10vw", width: "2vw", height: "0.1vh", backgroundColor: "#7DD3FC" }} />
      <div style={{ position: "absolute", top: "9vw", left: "10.95vw", width: "0.1vw", height: "2vw", backgroundColor: "#7DD3FC" }} />

      <div style={{ position: "absolute", bottom: "10vh", right: "10vw", width: "2vw", height: "0.1vh", backgroundColor: "#7DD3FC" }} />
      <div style={{ position: "absolute", bottom: "9vw", right: "10.95vw", width: "0.1vw", height: "2vw", backgroundColor: "#7DD3FC" }} />

      {/* Dimension markers */}
      <div style={{ position: "absolute", top: "4vh", left: "50vw", transform: "translateX(-50%)", fontSize: "0.8vw", color: "#7DD3FC", display: "flex", alignItems: "center", gap: "1vw" }}>
        <span>|</span>
        <span style={{ borderTop: "0.1vh solid #7DD3FC", width: "10vw" }}></span>
        <span>FINAL SPEC</span>
        <span style={{ borderTop: "0.1vh solid #7DD3FC", width: "10vw" }}></span>
        <span>|</span>
      </div>

      {/* Content Area */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "15vw",
          width: "70vw",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "1vw", color: "#7DD3FC", letterSpacing: "0.2vw", marginBottom: "1vh" }}>
              [ acme.co ]
            </div>
            <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)", letterSpacing: "0.1vw" }}>
              IMPLEMENTATION PHASE
            </div>
          </div>
          <div style={{ textAlign: "right", fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)", letterSpacing: "0.1vw" }}>
            <div style={{ marginBottom: "0.5vh" }}>ACTION REQUIRED</div>
            <div>PRIORITY: HIGH</div>
          </div>
        </div>

        <div style={{ position: "relative", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "6vw",
              fontWeight: 700,
              lineHeight: 1,
              margin: "0 0 3vh 0",
              textTransform: "uppercase",
              letterSpacing: "-0.1vw",
              color: "#FFFFFF",
              textShadow: "0.2vw 0.2vw 0 rgba(125, 211, 252, 0.2)"
            }}
          >
            Initiate Build
          </h1>
          
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 400,
              lineHeight: 1.6,
              color: "rgba(224, 242, 254, 0.8)",
              margin: "0 0 4vh 0",
              maxWidth: "40vw",
            }}
          >
            The blueprint is finalized. Proceed to deployment phase according to the defined specifications.
          </p>
          
          <div 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: "1vw", 
              padding: "1.5vw 3vw", 
              border: "0.1vw solid #7DD3FC", 
              backgroundColor: "rgba(125, 211, 252, 0.1)",
              cursor: "pointer"
            }}
          >
            <span style={{ fontSize: "1vw", color: "#FFFFFF", fontWeight: "bold", letterSpacing: "0.1vw" }}>DEPLOY_SYSTEM</span>
            <span style={{ fontSize: "1vw", color: "#7DD3FC" }}>→</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "0.1vh solid rgba(125, 211, 252, 0.3)", paddingTop: "2vh" }}>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            DRAWN BY: Example Company, Inc.
          </div>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            DATE: 2026
          </div>
          <div style={{ fontSize: "0.8vw", color: "rgba(224, 242, 254, 0.7)" }}>
            SHEET: 04/04
          </div>
        </div>
      </div>
      
      {/* Bottom right title block detail */}
      <div style={{
        position: "absolute",
        bottom: "4vh",
        right: "4vw",
        width: "15vw",
        height: "8vh",
        border: "0.1vw solid #7DD3FC",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{ flex: 1, borderBottom: "0.1vw solid #7DD3FC", display: "flex", alignItems: "center", paddingLeft: "0.5vw", fontSize: "0.7vw" }}>
          APPR: _________
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center", paddingLeft: "0.5vw", fontSize: "0.7vw" }}>
          SCALE: 1:1
        </div>
      </div>
    </div>
  );
}
```
