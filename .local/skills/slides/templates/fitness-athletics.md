# Fitness Athletics

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The FitnessAthletics template features a modern and dynamic aesthetic, characterized by a bold and energetic design. The background color is a solid #141414, complemented by a diagonal stripe in #C84B31 and a secondary darker accent in #2A2A2A. Text is primarily rendered in white (#FFFFFF) and light gray (#A0A0A0), with accents in #C84B31. The font family used is 'Inter', a sans-serif typeface, which is applied throughout for headers and body text. Key layout elements include skewed diagonal stripes for visual interest, a structured header with a logo and performance label, and a footer that provides company information and metrics. There are no background images specified in the code. The overall aesthetic feel can be described as "bold, modern, energetic."

## Source Code

**Component:** `FitnessAthletics`

### Slide 1 — Title (`slide-styles/FitnessAthletics.tsx`)

```tsx
export function FitnessAthletics() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#141414",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        color: "#FFFFFF",
      }}
    >
      {/* Background diagonal stripe element */}
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          right: "-10vw",
          width: "45vw",
          height: "140vh",
          backgroundColor: "#C84B31",
          transform: "skewX(-15deg)",
          zIndex: 1,
          opacity: 0.9,
        }}
      />
      
      {/* Secondary darker accent diagonal */}
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          right: "25vw",
          width: "5vw",
          height: "140vh",
          backgroundColor: "#2A2A2A",
          transform: "skewX(-15deg)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "8vh 6vw",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#C84B31" }} />
            <div style={{ fontSize: "1.2vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              acme.co
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#141414",
              padding: "0.5vh 1vw",
              border: "2px solid #C84B31",
              fontSize: "1vw",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            PERFORMANCE
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "10vh", maxWidth: "60vw" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#C84B31", letterSpacing: "0.2em", marginBottom: "2vh", textTransform: "uppercase" }}>
            Unleash Potential
          </div>
          <h1
            style={{
              fontSize: "11vw",
              fontWeight: 900,
              margin: 0,
              lineHeight: 0.85,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
            }}
          >
            Example
          </h1>
          <h1
            style={{
              fontSize: "11vw",
              fontWeight: 900,
              margin: 0,
              lineHeight: 0.85,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              color: "transparent",
              WebkitTextStroke: "2px #FFFFFF",
            }}
          >
            Deck
          </h1>
          
          <div style={{ width: "8vw", height: "0.8vh", backgroundColor: "#C84B31", margin: "4vh 0" }} />
          
          <p
            style={{
              fontSize: "2vw",
              fontWeight: 300,
              lineHeight: 1.4,
              margin: 0,
              color: "#A0A0A0",
              maxWidth: "45vw",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Footer with Metric */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", marginTop: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#888888", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.5vh" }}>
              Example Company, Inc.
            </div>
            <div style={{ fontSize: "0.8vw", fontWeight: 400, color: "#555555" }}>
              CONFIDENTIAL 2026
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "2vw" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#C84B31", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Target Achieved
              </div>
              <div style={{ fontSize: "4vw", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1 }}>
                42:15 PR
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/FitnessAthleticsPage2.tsx`)

```tsx
export function FitnessAthleticsPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#141414",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        color: "#FFFFFF",
      }}
    >
      {/* Background diagonal stripe element */}
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          left: "-10vw",
          width: "25vw",
          height: "140vh",
          backgroundColor: "#C84B31",
          transform: "skewX(-15deg)",
          zIndex: 1,
          opacity: 0.9,
        }}
      />
      
      {/* Secondary darker accent diagonal */}
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          left: "12vw",
          width: "3vw",
          height: "140vh",
          backgroundColor: "#2A2A2A",
          transform: "skewX(-15deg)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "8vh 6vw",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#C84B31" }} />
            <div style={{ fontSize: "1.2vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              acme.co
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#141414",
              padding: "0.5vh 1vw",
              border: "2px solid #C84B31",
              fontSize: "1vw",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            TRAINING PROTOCOL
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "6vh", marginLeft: "15vw", flex: 1 }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#C84B31", letterSpacing: "0.2em", marginBottom: "1vh", textTransform: "uppercase" }}>
            Core Philosophy
          </div>
          <h2
            style={{
              fontSize: "5vw",
              fontWeight: 900,
              margin: 0,
              lineHeight: 1,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: "4vh",
            }}
          >
            Engineered For
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px #FFFFFF" }}>Endurance</span>
          </h2>
          
          <div style={{ display: "flex", gap: "4vw", marginTop: "2vh" }}>
            {/* Column 1 */}
            <div style={{ flex: 1 }}>
              <div style={{ width: "4vw", height: "0.5vh", backgroundColor: "#C84B31", marginBottom: "2vh" }} />
              <h3 style={{ fontSize: "1.8vw", fontWeight: 800, margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Adaptation Phase
              </h3>
              <p style={{ fontSize: "1.2vw", fontWeight: 400, color: "#A0A0A0", lineHeight: 1.5, margin: 0 }}>
                Initial physical response to targeted stress. Neuromuscular pathways are forged while the central nervous system learns efficient movement patterns.
              </p>
            </div>
            
            {/* Column 2 */}
            <div style={{ flex: 1 }}>
              <div style={{ width: "4vw", height: "0.5vh", backgroundColor: "#2A2A2A", marginBottom: "2vh" }} />
              <h3 style={{ fontSize: "1.8vw", fontWeight: 800, margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Hypertrophy
              </h3>
              <p style={{ fontSize: "1.2vw", fontWeight: 400, color: "#A0A0A0", lineHeight: 1.5, margin: 0 }}>
                Muscular expansion through progressive overload. Volume and intensity scale non-linearly to force cellular synthesis and density upgrades.
              </p>
            </div>
            
            {/* Column 3 */}
            <div style={{ flex: 1 }}>
              <div style={{ width: "4vw", height: "0.5vh", backgroundColor: "#FFFFFF", marginBottom: "2vh" }} />
              <h3 style={{ fontSize: "1.8vw", fontWeight: 800, margin: "0 0 1.5vh 0", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Peak Output
              </h3>
              <p style={{ fontSize: "1.2vw", fontWeight: 400, color: "#A0A0A0", lineHeight: 1.5, margin: 0 }}>
                Tapering volume while maintaining intensity allows the body to dissipate fatigue, resulting in maximum force generation capability.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", marginTop: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#888888", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.5vh" }}>
              Example Company, Inc.
            </div>
            <div style={{ fontSize: "0.8vw", fontWeight: 400, color: "#555555" }}>
              CONFIDENTIAL 2026
            </div>
          </div>
          
          <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#555555" }}>
            02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/FitnessAthleticsPage3.tsx`)

```tsx
export function FitnessAthleticsPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#141414",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        color: "#FFFFFF",
      }}
    >
      {/* Background diagonal stripe element */}
      <div
        style={{
          position: "absolute",
          top: "40vh",
          right: "-10vw",
          width: "110vw",
          height: "2vh",
          backgroundColor: "#C84B31",
          transform: "skewY(-15deg)",
          zIndex: 1,
          opacity: 0.2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "55vh",
          right: "-10vw",
          width: "110vw",
          height: "0.5vh",
          backgroundColor: "#FFFFFF",
          transform: "skewY(-15deg)",
          zIndex: 1,
          opacity: 0.1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "8vh 6vw",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#C84B31" }} />
            <div style={{ fontSize: "1.2vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              acme.co
            </div>
          </div>
          <div
            style={{
              backgroundColor: "#141414",
              padding: "0.5vh 1vw",
              border: "2px solid #C84B31",
              fontSize: "1vw",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            PERFORMANCE METRICS
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", marginTop: "4vh", flex: 1 }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#C84B31", letterSpacing: "0.2em", marginBottom: "1vh", textTransform: "uppercase" }}>
            System Analytics
          </div>
          <h2
            style={{
              fontSize: "4vw",
              fontWeight: 900,
              margin: 0,
              lineHeight: 1,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: "6vh",
            }}
          >
            Output By The Numbers
          </h2>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "40vh", paddingBottom: "2vh", borderBottom: "2px solid #2A2A2A" }}>
            {/* Bar 1 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh", width: "15%" }}>
              <div style={{ fontSize: "2.5vw", fontWeight: 800 }}>12.4</div>
              <div style={{ width: "100%", height: "12vh", backgroundColor: "#2A2A2A" }} />
              <div style={{ fontSize: "1vw", color: "#A0A0A0", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.05em" }}>Q1 BASE</div>
            </div>
            
            {/* Bar 2 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh", width: "15%" }}>
              <div style={{ fontSize: "2.5vw", fontWeight: 800 }}>18.8</div>
              <div style={{ width: "100%", height: "18vh", backgroundColor: "#555555" }} />
              <div style={{ fontSize: "1vw", color: "#A0A0A0", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.05em" }}>Q2 BUILD</div>
            </div>
            
            {/* Bar 3 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh", width: "15%" }}>
              <div style={{ fontSize: "2.5vw", fontWeight: 800 }}>24.1</div>
              <div style={{ width: "100%", height: "24vh", backgroundColor: "#A0A0A0" }} />
              <div style={{ fontSize: "1vw", color: "#A0A0A0", textTransform: "uppercase", fontWeight: 600, letterSpacing: "0.05em" }}>Q3 PEAK</div>
            </div>
            
            {/* Bar 4 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh", width: "15%" }}>
              <div style={{ fontSize: "3.5vw", fontWeight: 900, color: "#C84B31" }}>32.0</div>
              <div style={{ width: "100%", height: "32vh", backgroundColor: "#C84B31", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, transparent 100%)" }} />
              </div>
              <div style={{ fontSize: "1.2vw", color: "#FFFFFF", textTransform: "uppercase", fontWeight: 800, letterSpacing: "0.05em" }}>Q4 LIMIT</div>
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "3vh" }}>
            <p style={{ fontSize: "1.2vw", color: "#888888", width: "45%", margin: 0, lineHeight: 1.5 }}>
              *Metrics derived from standard multi-modal telemetry. Measurements are relative to individual baseline establishment phase.
            </p>
            <div style={{ display: "flex", gap: "4vw" }}>
              <div>
                <div style={{ fontSize: "1vw", color: "#C84B31", fontWeight: 700, textTransform: "uppercase" }}>VO2 MAX</div>
                <div style={{ fontSize: "2vw", fontWeight: 800 }}>+14%</div>
              </div>
              <div>
                <div style={{ fontSize: "1vw", color: "#C84B31", fontWeight: 700, textTransform: "uppercase" }}>RECOVERY</div>
                <div style={{ fontSize: "2vw", fontWeight: 800 }}>-22%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", marginTop: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#888888", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.5vh" }}>
              Example Company, Inc.
            </div>
            <div style={{ fontSize: "0.8vw", fontWeight: 400, color: "#555555" }}>
              CONFIDENTIAL 2026
            </div>
          </div>
          
          <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#555555" }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/FitnessAthleticsPage4.tsx`)

```tsx
export function FitnessAthleticsPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#C84B31",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        color: "#FFFFFF",
      }}
    >
      {/* Background diagonal stripe element */}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "20vw",
          width: "40vw",
          height: "100vh",
          backgroundColor: "#141414",
          transform: "skewX(-15deg)",
          zIndex: 1,
        }}
      />
      
      {/* Secondary darker accent diagonal */}
      <div
        style={{
          position: "absolute",
          top: "0",
          right: "60vw",
          width: "2vw",
          height: "100vh",
          backgroundColor: "#2A2A2A",
          transform: "skewX(-15deg)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "8vh 6vw",
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#141414" }} />
            <div style={{ fontSize: "1.2vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              acme.co
            </div>
          </div>
          <div
            style={{
              backgroundColor: "transparent",
              padding: "0.5vh 1vw",
              border: "2px solid #FFFFFF",
              fontSize: "1vw",
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            NEXT STEPS
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#141414", letterSpacing: "0.2em", marginBottom: "2vh", textTransform: "uppercase" }}>
            The Time Is Now
          </div>
          <h1
            style={{
              fontSize: "12vw",
              fontWeight: 900,
              margin: 0,
              lineHeight: 0.85,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              textShadow: "0.5vw 0.5vw 0 rgba(20,20,20,0.2)",
            }}
          >
            COMMIT
          </h1>
          <h1
            style={{
              fontSize: "12vw",
              fontWeight: 900,
              margin: 0,
              lineHeight: 0.85,
              textTransform: "uppercase",
              letterSpacing: "-0.04em",
              color: "transparent",
              WebkitTextStroke: "3px #141414",
            }}
          >
            TODAY
          </h1>
          
          <div style={{ marginTop: "6vh" }}>
            <button
              style={{
                backgroundColor: "#141414",
                color: "#FFFFFF",
                border: "none",
                padding: "2vh 4vw",
                fontSize: "1.5vw",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                cursor: "pointer",
                boxShadow: "0.5vw 0.5vw 0 rgba(255,255,255,0.2)",
                transition: "all 0.2s ease",
              }}
            >
              Start Protocol
            </button>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", marginTop: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#141414", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.5vh" }}>
              Example Company, Inc.
            </div>
            <div style={{ fontSize: "0.8vw", fontWeight: 400, color: "rgba(255,255,255,0.7)" }}>
              CONFIDENTIAL 2026
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "center", gap: "2vw" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#141414", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Contact
              </div>
              <div style={{ fontSize: "1.5vw", fontWeight: 800, letterSpacing: "-0.02em", color: "#FFFFFF" }}>
                push@acme.co
              </div>
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#141414", marginLeft: "2vw" }}>
              04
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
