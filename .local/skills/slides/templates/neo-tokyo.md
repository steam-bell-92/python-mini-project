# Neo Tokyo

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "NeoTokyo" template embodies a futuristic, cyberpunk aesthetic, characterized by its dark color palette and neon accents. The background color is a solid #0A0A0F, with a background image sourced from "/__mockup/photos/tokyo-neon.png" that covers the entire viewport. Text colors include #7B9CC4 for accents and #FFFFFF for primary text, with additional use of rgba(255,255,255,0.6) for a subtitle. The font families used are 'DM Mono', a monospace font for various text elements, and 'Space Grotesk', a sans-serif font for the main heading, emphasizing a modern look. Key layout elements include a semi-transparent sidebar with a backdrop blur effect, decorative borders, and a structured arrangement of text elements that create a clean, organized presentation. The overall aesthetic feel is "futuristic neon."

## Source Code

**Component:** `NeoTokyo`

### Slide 1 — Title (`slide-styles/NeoTokyo.tsx`)

```tsx
export function NeoTokyo() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#0A0A0F",
      }}
    >
      <img
        src="/__mockup/photos/tokyo-neon.png"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        alt="Tokyo Neon"
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "42vw",
          height: "100vh",
          background: "rgba(10,10,20,0.7)",
          backdropFilter: "blur(2vw)",
          WebkitBackdropFilter: "blur(2vw)",
          borderRight: "1px solid rgba(255,255,255,0.1)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "6vh 4vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #7B9CC4",
            paddingTop: "2vh",
            marginBottom: "auto",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "1vw",
              letterSpacing: "0.1vw",
            }}
          >
            DISTRICT 09
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "0.8vw",
              letterSpacing: "0.05vw",
              opacity: 0.7,
            }}
          >
            NEXT_GEN
          </span>
        </div>

        <div style={{ marginBottom: "15vh" }}>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "5vw",
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.1,
              fontWeight: 600,
              letterSpacing: "-0.1vw",
            }}
          >
            Example
            <br />
            Deck
          </h1>
          
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.2vw",
              lineHeight: 1.6,
              marginTop: "4vh",
              maxWidth: "28vw",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#FFFFFF",
              fontSize: "1vw",
              opacity: 0.9,
            }}
          >
            acme.co
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "1vw",
              opacity: 0.8,
            }}
          >
            2026.03
          </span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/NeoTokyoPage2.tsx`)

```tsx
export function NeoTokyoPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#0A0A0F",
      }}
    >
      <img
        src="/__mockup/photos/tokyo-neon.png"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        alt="Tokyo Neon"
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "65vw",
          height: "100vh",
          background: "rgba(10,10,20,0.75)",
          backdropFilter: "blur(2vw)",
          WebkitBackdropFilter: "blur(2vw)",
          borderLeft: "1px solid rgba(255,255,255,0.1)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "6vh 5vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #7B9CC4",
            paddingTop: "2vh",
            marginBottom: "8vh",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "1vw",
              letterSpacing: "0.1vw",
            }}
          >
            SYSTEM_ARCHITECTURE
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "0.8vw",
              letterSpacing: "0.05vw",
              opacity: 0.7,
            }}
          >
            02 // 04
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "4vw",
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: "-0.1vw",
            marginBottom: "6vh",
          }}
        >
          Core Infrastructure
        </h2>

        <div style={{ display: "flex", gap: "3vw", flex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", color: "#FFFFFF", margin: "0 0 1.5vh 0" }}>01. Data Ingestion</h3>
              <p style={{ fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.6)", fontSize: "1vw", lineHeight: 1.6, margin: 0 }}>
                High-throughput event streaming architecture designed for real-time processing of millions of concurrent connections with sub-millisecond latency.
              </p>
            </div>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", color: "#FFFFFF", margin: "0 0 1.5vh 0" }}>02. Neural Processing</h3>
              <p style={{ fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.6)", fontSize: "1vw", lineHeight: 1.6, margin: 0 }}>
                Distributed inference layer utilizing proprietary tensor acceleration to analyze behavioral patterns and predictive anomalies.
              </p>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
            <div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.8vw", color: "#FFFFFF", margin: "0 0 1.5vh 0" }}>03. State Management</h3>
              <p style={{ fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.6)", fontSize: "1vw", lineHeight: 1.6, margin: 0 }}>
                Globally replicated in-memory data grid ensuring consistent state distribution across availability zones without consensus bottlenecks.
              </p>
            </div>
            <div style={{ marginTop: "auto", padding: "2vw", background: "rgba(123, 156, 196, 0.1)", borderLeft: "0.2vw solid #7B9CC4" }}>
              <p style={{ fontFamily: "'DM Mono', monospace", color: "#7B9CC4", fontSize: "1.1vw", lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
                "The architecture operates not as a machine, but as an emergent digital organism."
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
            paddingTop: "4vh",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#FFFFFF",
              fontSize: "1vw",
              opacity: 0.9,
            }}
          >
            acme.co
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "1vw",
              opacity: 0.8,
            }}
          >
            2026.03
          </span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/NeoTokyoPage3.tsx`)

```tsx
export function NeoTokyoPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#0A0A0F",
      }}
    >
      <img
        src="/__mockup/photos/tokyo-neon.png"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        alt="Tokyo Neon"
      />

      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "5vw",
          width: "90vw",
          height: "80vh",
          background: "rgba(10,10,20,0.8)",
          backdropFilter: "blur(2.5vw)",
          WebkitBackdropFilter: "blur(2.5vw)",
          border: "1px solid rgba(255,255,255,0.1)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "5vh 4vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #7B9CC4",
            paddingTop: "2vh",
            marginBottom: "6vh",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "1vw",
              letterSpacing: "0.1vw",
            }}
          >
            METRICS_OVERVIEW
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "0.8vw",
              letterSpacing: "0.05vw",
              opacity: 0.7,
            }}
          >
            03 // 04
          </span>
        </div>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "3.5vw",
            color: "#FFFFFF",
            margin: "0 0 6vh 0",
            lineHeight: 1.1,
            fontWeight: 600,
            letterSpacing: "-0.1vw",
          }}
        >
          Performance Telemetry
        </h2>

        <div style={{ display: "flex", gap: "2vw", flex: 1 }}>
          <div style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(123, 156, 196, 0.2)", padding: "3vw", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "0.3vw", height: "100%", background: "#7B9CC4" }}></div>
            <h4 style={{ fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.5)", fontSize: "1vw", margin: "0 0 1vh 0", letterSpacing: "0.1vw" }}>LATENCY</h4>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "4.5vw", fontWeight: 700, lineHeight: 1 }}>
              12<span style={{ fontSize: "2vw", color: "#7B9CC4" }}>ms</span>
            </div>
            <p style={{ fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.6)", fontSize: "0.9vw", margin: "2vh 0 0 0" }}>Global average p99 response time</p>
          </div>
          
          <div style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(123, 156, 196, 0.2)", padding: "3vw", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "0.3vw", height: "100%", background: "#7B9CC4" }}></div>
            <h4 style={{ fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.5)", fontSize: "1vw", margin: "0 0 1vh 0", letterSpacing: "0.1vw" }}>UPTIME</h4>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "4.5vw", fontWeight: 700, lineHeight: 1 }}>
              99.99<span style={{ fontSize: "2vw", color: "#7B9CC4" }}>%</span>
            </div>
            <p style={{ fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.6)", fontSize: "0.9vw", margin: "2vh 0 0 0" }}>Guaranteed structural integrity</p>
          </div>

          <div style={{ flex: 1, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(123, 156, 196, 0.2)", padding: "3vw", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, width: "0.3vw", height: "100%", background: "#7B9CC4" }}></div>
            <h4 style={{ fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.5)", fontSize: "1vw", margin: "0 0 1vh 0", letterSpacing: "0.1vw" }}>NODES</h4>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#FFFFFF", fontSize: "4.5vw", fontWeight: 700, lineHeight: 1 }}>
              14<span style={{ fontSize: "2vw", color: "#7B9CC4" }}>k+</span>
            </div>
            <p style={{ fontFamily: "'DM Mono', monospace", color: "rgba(255,255,255,0.6)", fontSize: "0.9vw", margin: "2vh 0 0 0" }}>Active edge computing points</p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
            paddingTop: "2vh",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#FFFFFF",
              fontSize: "1vw",
              opacity: 0.9,
            }}
          >
            acme.co
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "1vw",
              opacity: 0.8,
            }}
          >
            2026.03
          </span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/NeoTokyoPage4.tsx`)

```tsx
export function NeoTokyoPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#0A0A0F",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/__mockup/photos/tokyo-neon.png"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        alt="Tokyo Neon"
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(10,10,20,0.85)",
          backdropFilter: "blur(3vw)",
          WebkitBackdropFilter: "blur(3vw)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #7B9CC4",
            paddingTop: "2vh",
            width: "100%",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "1vw",
              letterSpacing: "0.1vw",
            }}
          >
            INITIALIZE_SEQUENCE
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "0.8vw",
              letterSpacing: "0.05vw",
              opacity: 0.7,
            }}
          >
            04 // 04
          </span>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "7vw",
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1,
              fontWeight: 600,
              letterSpacing: "-0.2vw",
            }}
          >
            Plug In to the
            <br />
            <span style={{ color: "#7B9CC4" }}>Future.</span>
          </h1>
          
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.2vw",
              lineHeight: 1.6,
              marginTop: "4vh",
              maxWidth: "40vw",
            }}
          >
            The network is ready. Deployment codes have been generated. Connect with our engineering team to begin your integration.
          </p>

          <div
            style={{
              marginTop: "6vh",
              padding: "2vh 4vw",
              background: "#FFFFFF",
              color: "#0A0A0F",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1vw",
              fontWeight: 600,
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
              display: "inline-block",
              border: "1px solid #FFFFFF",
            }}
          >
            ACCESS_PORTAL &rarr;
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#FFFFFF",
              fontSize: "1vw",
              opacity: 0.9,
            }}
          >
            acme.co
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#7B9CC4",
              fontSize: "1vw",
              opacity: 0.8,
            }}
          >
            2026.03
          </span>
        </div>
      </div>
    </div>
  );
}
```
