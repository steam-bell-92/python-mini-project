# Astronomy Log

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The AstronomyLog template features a modern, celestial aesthetic with a dark theme. The background color is a solid #0F1423, complemented by a subtle grid pattern created with a linear gradient of rgba(212, 222, 235, 0.05) and transparent. Text and accent colors include #D4DEEB for primary text, with various shades of rgba(212, 222, 235, 0.2) and rgba(212, 222, 235, 0.6) for secondary elements. The font families used are 'DM Mono' for general text and 'Playfair Display' for the main heading, providing a mix of modern and classic styles. Key layout elements include crosshairs and circular borders positioned centrally, creating a focal point, while the content is organized in a flexible layout with padding for readability. Overall, the aesthetic feel is sleek and futuristic.

## Source Code

**Component:** `AstronomyLog`

### Slide 1 — Title (`slide-styles/AstronomyLog.tsx`)

```tsx
export function AstronomyLog() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F1423",
        color: "#D4DEEB",
        fontFamily: "'DM Mono', monospace",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(212, 222, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 222, 235, 0.05) 1px, transparent 1px)",
          backgroundSize: "4vw 4vw",
          zIndex: 0,
        }}
      />

      {/* Crosshairs */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "80vw",
          height: "1px",
          backgroundColor: "rgba(212, 222, 235, 0.2)",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "1px",
          height: "80vh",
          backgroundColor: "rgba(212, 222, 235, 0.2)",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "30vw",
          height: "30vw",
          border: "1px solid rgba(212, 222, 235, 0.15)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "10vw",
          height: "10vw",
          border: "1px dashed rgba(212, 222, 235, 0.3)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8vw", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <div>OBSERVATION: acme.co</div>
          <div>EPOCH: 2026</div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1vw", letterSpacing: "0.3em", marginBottom: "2vh", color: "rgba(212, 222, 235, 0.6)" }}>
            SECTOR 7G / ALIGNMENT
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "7vw",
              fontWeight: 400,
              margin: 0,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Example Deck
          </h1>
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 300,
              color: "rgba(212, 222, 235, 0.7)",
              maxWidth: "45vw",
              margin: "3vh auto 0",
              lineHeight: 1.6,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8vw", letterSpacing: "0.1em", color: "rgba(212, 222, 235, 0.5)" }}>
          <div>COORD: 45.92° N, 14.38° E</div>
          <div>Example Company, Inc. / Confidential</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/AstronomyLogPage2.tsx`)

```tsx
export function AstronomyLogPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F1423",
        color: "#D4DEEB",
        fontFamily: "'DM Mono', monospace",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(212, 222, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 222, 235, 0.05) 1px, transparent 1px)",
          backgroundSize: "4vw 4vw",
          zIndex: 0,
        }}
      />

      {/* Decorative Line */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "0",
          width: "100vw",
          height: "1px",
          backgroundColor: "rgba(212, 222, 235, 0.2)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "85vh",
          left: "0",
          width: "100vw",
          height: "1px",
          backgroundColor: "rgba(212, 222, 235, 0.2)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8vw", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <div>OBSERVATION: acme.co / SYSTEM_ANALYSIS</div>
          <div>EPOCH: 2026 / 02</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "4vh" }}>
          <div style={{ fontSize: "1vw", letterSpacing: "0.3em", marginBottom: "2vh", color: "rgba(212, 222, 235, 0.6)" }}>
            SECTOR 2 / MISSION PARAMETERS
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4.5vw",
              fontWeight: 400,
              margin: "0 0 4vh 0",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            System Objectives
          </h2>

          <div style={{ display: "flex", gap: "6vw", marginTop: "2vh" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 600, marginBottom: "1.5vh", color: "#D4DEEB" }}>
                01. Orbital Trajectory
              </div>
              <p style={{ fontSize: "1.1vw", lineHeight: 1.7, color: "rgba(212, 222, 235, 0.7)", margin: 0 }}>
                Identify and map the primary vectors for market expansion. This requires precise calculation of entry velocity and constant monitoring of atmospheric resistance from competitors.
              </p>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 600, marginBottom: "1.5vh", color: "#D4DEEB" }}>
                02. Payload Delivery
              </div>
              <p style={{ fontSize: "1.1vw", lineHeight: 1.7, color: "rgba(212, 222, 235, 0.7)", margin: 0 }}>
                Ensure all essential features are developed and deployed without critical failure. Focus on stabilizing the core architecture before engaging secondary thrusters.
              </p>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 600, marginBottom: "1.5vh", color: "#D4DEEB" }}>
                03. Deep Space Comm
              </div>
              <p style={{ fontSize: "1.1vw", lineHeight: 1.7, color: "rgba(212, 222, 235, 0.7)", margin: 0 }}>
                Establish a reliable feedback loop with the initial user base. Latency in communication can lead to significant drift from the optimal product-market fit.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8vw", letterSpacing: "0.1em", color: "rgba(212, 222, 235, 0.5)", marginTop: "auto" }}>
          <div>PAGE 02</div>
          <div>Example Company, Inc. / Confidential</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/AstronomyLogPage3.tsx`)

```tsx
export function AstronomyLogPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F1423",
        color: "#D4DEEB",
        fontFamily: "'DM Mono', monospace",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(212, 222, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 222, 235, 0.05) 1px, transparent 1px)",
          backgroundSize: "4vw 4vw",
          zIndex: 0,
        }}
      />

      {/* Decorative Ornaments */}
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "60%",
          width: "25vw",
          height: "25vw",
          border: "1px dashed rgba(212, 222, 235, 0.4)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "60%",
          width: "15vw",
          height: "15vw",
          border: "1px solid rgba(212, 222, 235, 0.2)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8vw", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <div>OBSERVATION: acme.co / TELEMETRY_DATA</div>
          <div>EPOCH: 2026 / 03</div>
        </div>

        <div style={{ flex: 1, display: "flex", marginTop: "4vh", alignItems: "center" }}>
          <div style={{ flex: "0 0 35%", paddingRight: "4vw" }}>
            <div style={{ fontSize: "1vw", letterSpacing: "0.3em", marginBottom: "2vh", color: "rgba(212, 222, 235, 0.6)" }}>
              SECTOR 3 / METRICS
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "4.5vw",
                fontWeight: 400,
                margin: "0 0 4vh 0",
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                lineHeight: 1.1,
              }}
            >
              Signal Strength
            </h2>
            <p style={{ fontSize: "1.1vw", lineHeight: 1.7, color: "rgba(212, 222, 235, 0.7)", margin: "0 0 4vh 0" }}>
              Our sensors indicate a massive spike in engagement metrics. The anomaly was detected in Q3 and has maintained a stable high-altitude trajectory since initial contact.
            </p>
            
            <div style={{ borderLeft: "2px solid rgba(212, 222, 235, 0.3)", paddingLeft: "2vw" }}>
              <div style={{ fontSize: "3vw", fontFamily: "'Playfair Display', serif", marginBottom: "0.5vh" }}>+428%</div>
              <div style={{ fontSize: "0.9vw", letterSpacing: "0.1em", color: "rgba(212, 222, 235, 0.6)" }}>VELOCITY INCREASE</div>
            </div>
          </div>
          
          <div style={{ flex: 1, height: "50vh", position: "relative" }}>
            {/* Fake Data Visualization */}
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "1px", backgroundColor: "rgba(212, 222, 235, 0.3)" }} />
            <div style={{ position: "absolute", top: 0, left: 0, width: "1px", height: "100%", backgroundColor: "rgba(212, 222, 235, 0.3)" }} />
            
            {/* Grid lines for chart */}
            <div style={{ position: "absolute", bottom: "25%", left: 0, width: "100%", height: "1px", backgroundColor: "rgba(212, 222, 235, 0.1)", borderTop: "1px dashed rgba(212, 222, 235, 0.2)" }} />
            <div style={{ position: "absolute", bottom: "50%", left: 0, width: "100%", height: "1px", backgroundColor: "rgba(212, 222, 235, 0.1)", borderTop: "1px dashed rgba(212, 222, 235, 0.2)" }} />
            <div style={{ position: "absolute", bottom: "75%", left: 0, width: "100%", height: "1px", backgroundColor: "rgba(212, 222, 235, 0.1)", borderTop: "1px dashed rgba(212, 222, 235, 0.2)" }} />

            {/* Data Bars */}
            <div style={{ position: "absolute", bottom: "1px", left: "10%", width: "4vw", height: "15%", backgroundColor: "rgba(212, 222, 235, 0.2)", border: "1px solid rgba(212, 222, 235, 0.5)" }} />
            <div style={{ position: "absolute", bottom: "1px", left: "30%", width: "4vw", height: "25%", backgroundColor: "rgba(212, 222, 235, 0.2)", border: "1px solid rgba(212, 222, 235, 0.5)" }} />
            <div style={{ position: "absolute", bottom: "1px", left: "50%", width: "4vw", height: "45%", backgroundColor: "rgba(212, 222, 235, 0.4)", border: "1px solid rgba(212, 222, 235, 0.8)" }} />
            <div style={{ position: "absolute", bottom: "1px", left: "70%", width: "4vw", height: "85%", backgroundColor: "rgba(212, 222, 235, 0.8)", border: "1px solid rgba(212, 222, 235, 1)" }} />
            
            {/* Labels */}
            <div style={{ position: "absolute", bottom: "-4vh", left: "11%", fontSize: "0.8vw", color: "rgba(212, 222, 235, 0.6)" }}>T-03</div>
            <div style={{ position: "absolute", bottom: "-4vh", left: "31%", fontSize: "0.8vw", color: "rgba(212, 222, 235, 0.6)" }}>T-02</div>
            <div style={{ position: "absolute", bottom: "-4vh", left: "51%", fontSize: "0.8vw", color: "rgba(212, 222, 235, 0.6)" }}>T-01</div>
            <div style={{ position: "absolute", bottom: "-4vh", left: "71%", fontSize: "0.8vw", color: "rgba(212, 222, 235, 0.6)" }}>T-00</div>

            {/* Target indicator */}
            <div style={{ position: "absolute", bottom: "85%", left: "72%", width: "2vw", height: "2vw", border: "1px solid #D4DEEB", borderRadius: "50%", transform: "translate(-50%, 50%)" }} />
            <div style={{ position: "absolute", bottom: "85%", left: "72%", width: "0.5vw", height: "0.5vw", backgroundColor: "#D4DEEB", borderRadius: "50%", transform: "translate(-50%, 50%)" }} />
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8vw", letterSpacing: "0.1em", color: "rgba(212, 222, 235, 0.5)", marginTop: "auto" }}>
          <div>PAGE 03</div>
          <div>Example Company, Inc. / Confidential</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/AstronomyLogPage4.tsx`)

```tsx
export function AstronomyLogPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F1423",
        color: "#D4DEEB",
        fontFamily: "'DM Mono', monospace",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Background Grid */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "linear-gradient(rgba(212, 222, 235, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 222, 235, 0.05) 1px, transparent 1px)",
          backgroundSize: "4vw 4vw",
          zIndex: 0,
        }}
      />

      {/* Crosshairs & Circles */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "60vw",
          height: "1px",
          backgroundColor: "rgba(212, 222, 235, 0.15)",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "1px",
          height: "60vh",
          backgroundColor: "rgba(212, 222, 235, 0.15)",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "40vw",
          height: "40vw",
          border: "1px dashed rgba(212, 222, 235, 0.2)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8vw", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          <div>OBSERVATION: acme.co / TRANSMISSION_END</div>
          <div>EPOCH: 2026 / 04</div>
        </div>

        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
          <div style={{ width: "4vw", height: "4vw", border: "2px solid #D4DEEB", borderRadius: "50%", marginBottom: "4vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "1vw", height: "1vw", backgroundColor: "#D4DEEB", borderRadius: "50%" }} />
          </div>
          
          <div style={{ fontSize: "1vw", letterSpacing: "0.4em", marginBottom: "3vh", color: "rgba(212, 222, 235, 0.6)", textTransform: "uppercase" }}>
            INITIATE CONTACT SEQUENCE
          </div>
          
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6vw",
              fontWeight: 400,
              margin: 0,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            Awaiting Signal
          </h2>
          
          <div style={{ marginTop: "5vh", display: "flex", gap: "4vw" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.8vw", color: "rgba(212, 222, 235, 0.5)", letterSpacing: "0.1em", marginBottom: "1vh" }}>COMM FREQ</div>
              <div style={{ fontSize: "1.2vw", borderBottom: "1px solid rgba(212, 222, 235, 0.3)", paddingBottom: "0.5vh" }}>hello@example.com</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.8vw", color: "rgba(212, 222, 235, 0.5)", letterSpacing: "0.1em", marginBottom: "1vh" }}>COORDINATES</div>
              <div style={{ fontSize: "1.2vw", borderBottom: "1px solid rgba(212, 222, 235, 0.3)", paddingBottom: "0.5vh" }}>acme.co/launch</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8vw", letterSpacing: "0.1em", color: "rgba(212, 222, 235, 0.5)", marginTop: "auto" }}>
          <div>PAGE 04</div>
          <div>Example Company, Inc. / Confidential</div>
        </div>
      </div>
    </div>
  );
}
```
