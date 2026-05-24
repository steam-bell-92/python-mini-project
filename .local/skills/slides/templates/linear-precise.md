# Linear Precise

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "LinearPrecise" template features a modern and minimalistic aesthetic, characterized by a dark theme. The background color is a solid #0A0A0B, while the text color is #EDEDEF, with accents in #8B7EC8 and #6B6B76. The primary font used is 'Inter' for general text, and 'DM Mono' for specific elements, providing a clean and contemporary look. Key layout elements include vertical lines with a subtle opacity (rgba(255, 255, 255, 0.03)) positioned at 8vw and 40vw from the left, and a structured arrangement of text and decorative elements that emphasize clarity and organization. The overall aesthetic feel can be described as sleek and professional.

## Source Code

**Component:** `LinearPrecise`

### Slide 1 — Title (`slide-styles/LinearPrecise.tsx`)

```tsx
export function LinearPrecise() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A0A0B",
        fontFamily: "'Inter', sans-serif",
        color: "#EDEDEF",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "6vh 8vw",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "8vw",
          width: "1px",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "40vw",
          width: "1px",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
        }}
      />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", fontSize: "1vw", fontWeight: 500, color: "#8B7EC8" }}>
          <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#8B7EC8", borderRadius: "50%" }} />
          <span>acme.co — 2026</span>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#6B6B76" }}>
          CONFIDENTIAL_REV_A
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h1
          style={{
            fontSize: "6vw",
            fontWeight: 500,
            margin: "0 0 3vh 0",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Example Deck
        </h1>
        <p
          style={{
            fontSize: "2vw",
            fontWeight: 400,
            color: "#6B6B76",
            margin: 0,
            maxWidth: "50vw",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "3vh", fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#6B6B76" }}>
        <span>Example Company, Inc.</span>
        <span>SLIDE_01</span>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/LinearPrecisePage2.tsx`)

```tsx
export function LinearPrecisePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A0A0B",
        fontFamily: "'Inter', sans-serif",
        color: "#EDEDEF",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "6vh 8vw",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "8vw",
          width: "1px",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "40vw",
          width: "1px",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
        }}
      />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", fontSize: "1vw", fontWeight: 500, color: "#8B7EC8" }}>
          <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#8B7EC8", borderRadius: "50%" }} />
          <span>acme.co — 2026</span>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#6B6B76" }}>
          CONFIDENTIAL_REV_A
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "row", marginTop: "10vh", gap: "6vw" }}>
        <div style={{ width: "26vw", display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontSize: "4vw",
              fontWeight: 500,
              margin: "0 0 2vh 0",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Core Features
          </h2>
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 400,
              color: "#6B6B76",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            Our platform is designed to provide unparalleled performance and security for modern enterprises.
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1vw", color: "#8B7EC8", fontFamily: "'DM Mono', monospace" }}>01</div>
            <div>
              <h3 style={{ fontSize: "1.5vw", fontWeight: 500, margin: "0 0 1vh 0" }}>High Performance Architecture</h3>
              <p style={{ fontSize: "1vw", color: "#6B6B76", margin: 0, lineHeight: 1.5, maxWidth: "30vw" }}>
                Built from the ground up to ensure ultra-low latency and maximum throughput across all services.
              </p>
            </div>
          </div>
          
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1vw", color: "#8B7EC8", fontFamily: "'DM Mono', monospace" }}>02</div>
            <div>
              <h3 style={{ fontSize: "1.5vw", fontWeight: 500, margin: "0 0 1vh 0" }}>End-to-End Encryption</h3>
              <p style={{ fontSize: "1vw", color: "#6B6B76", margin: 0, lineHeight: 1.5, maxWidth: "30vw" }}>
                Military-grade security protocols applied to every data point, ensuring total privacy.
              </p>
            </div>
          </div>
          
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.1)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "1vw", color: "#8B7EC8", fontFamily: "'DM Mono', monospace" }}>03</div>
            <div>
              <h3 style={{ fontSize: "1.5vw", fontWeight: 500, margin: "0 0 1vh 0" }}>Global Scalability</h3>
              <p style={{ fontSize: "1vw", color: "#6B6B76", margin: 0, lineHeight: 1.5, maxWidth: "30vw" }}>
                Deploy anywhere in the world with consistent reliability and minimal configuration overhead.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "3vh", fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#6B6B76" }}>
        <span>Example Company, Inc.</span>
        <span>SLIDE_02</span>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/LinearPrecisePage3.tsx`)

```tsx
export function LinearPrecisePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A0A0B",
        fontFamily: "'Inter', sans-serif",
        color: "#EDEDEF",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "6vh 8vw",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "8vw",
          width: "1px",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "40vw",
          width: "1px",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
        }}
      />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", fontSize: "1vw", fontWeight: 500, color: "#8B7EC8" }}>
          <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#8B7EC8", borderRadius: "50%" }} />
          <span>acme.co — 2026</span>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#6B6B76" }}>
          CONFIDENTIAL_REV_A
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "8vh" }}>
        <h2
          style={{
            fontSize: "3vw",
            fontWeight: 500,
            margin: "0 0 1vh 0",
            letterSpacing: "-0.02em",
          }}
        >
          Key Metrics
        </h2>
        <p style={{ fontSize: "1vw", color: "#6B6B76", margin: "0 0 6vh 0", fontFamily: "'DM Mono', monospace" }}>
          Q3_2025_PERFORMANCE_DATA
        </p>

        <div style={{ display: "flex", gap: "2vw", marginBottom: "6vh" }}>
          <div style={{ flex: 1, borderTop: "1px solid #8B7EC8", paddingTop: "2vh" }}>
            <div style={{ fontSize: "0.8vw", color: "#6B6B76", fontFamily: "'DM Mono', monospace", marginBottom: "1vh" }}>01_ACTIVE_USERS</div>
            <div style={{ fontSize: "4vw", fontWeight: 400, letterSpacing: "-0.03em" }}>2.4M</div>
            <div style={{ fontSize: "1vw", color: "#4CAF50", marginTop: "1vh" }}>+14.2% YoY</div>
          </div>
          <div style={{ flex: 1, borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "2vh" }}>
            <div style={{ fontSize: "0.8vw", color: "#6B6B76", fontFamily: "'DM Mono', monospace", marginBottom: "1vh" }}>02_ARR_GROWTH</div>
            <div style={{ fontSize: "4vw", fontWeight: 400, letterSpacing: "-0.03em" }}>$84M</div>
            <div style={{ fontSize: "1vw", color: "#4CAF50", marginTop: "1vh" }}>+22.4% YoY</div>
          </div>
          <div style={{ flex: 1, borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "2vh" }}>
            <div style={{ fontSize: "0.8vw", color: "#6B6B76", fontFamily: "'DM Mono', monospace", marginBottom: "1vh" }}>03_RETENTION</div>
            <div style={{ fontSize: "4vw", fontWeight: 400, letterSpacing: "-0.03em" }}>98.2%</div>
            <div style={{ fontSize: "1vw", color: "#6B6B76", marginTop: "1vh" }}>Industry leading</div>
          </div>
        </div>

        <div style={{ display: "flex", flex: 1, gap: "4vw", borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "4vh" }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "1.2vw", fontWeight: 500, margin: "0 0 2vh 0" }}>Quarterly Progression</h3>
            <div style={{ height: "15vh", width: "100%", display: "flex", alignItems: "flex-end", gap: "1vw" }}>
              <div style={{ flex: 1, height: "40%", backgroundColor: "rgba(139, 126, 200, 0.2)" }} />
              <div style={{ flex: 1, height: "55%", backgroundColor: "rgba(139, 126, 200, 0.4)" }} />
              <div style={{ flex: 1, height: "70%", backgroundColor: "rgba(139, 126, 200, 0.6)" }} />
              <div style={{ flex: 1, height: "100%", backgroundColor: "#8B7EC8" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1vh", fontSize: "0.8vw", color: "#6B6B76", fontFamily: "'DM Mono', monospace" }}>
              <span>Q4 24</span>
              <span>Q1 25</span>
              <span>Q2 25</span>
              <span>Q3 25</span>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: "1.2vw", color: "#EDEDEF", margin: 0, lineHeight: 1.5 }}>
              Our metrics indicate a strong upward trajectory, fueled by strategic enterprise partnerships and rigorous operational optimization.
            </p>
          </div>
        </div>

      </div>

      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "3vh", fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#6B6B76" }}>
        <span>Example Company, Inc.</span>
        <span>SLIDE_03</span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/LinearPrecisePage4.tsx`)

```tsx
export function LinearPrecisePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A0A0B",
        fontFamily: "'Inter', sans-serif",
        color: "#EDEDEF",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "6vh 8vw",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "8vw",
          width: "1px",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "40vw",
          width: "1px",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.03)",
        }}
      />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", fontSize: "1vw", fontWeight: 500, color: "#8B7EC8" }}>
          <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#8B7EC8", borderRadius: "50%" }} />
          <span>acme.co — 2026</span>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#6B6B76" }}>
          CONFIDENTIAL_REV_A
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "5vw",
            fontWeight: 500,
            margin: "0 0 3vh 0",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Let's build the future.
        </h2>
        <p
          style={{
            fontSize: "1.5vw",
            fontWeight: 400,
            color: "#6B6B76",
            margin: "0 0 6vh 0",
            maxWidth: "40vw",
            lineHeight: 1.5,
          }}
        >
          Join us in redefining standard industry practices and accelerating the next generation of enterprise architecture.
        </p>
        
        <div style={{ display: "flex", gap: "2vw" }}>
          <div
            style={{
              padding: "1.5vh 3vw",
              backgroundColor: "#EDEDEF",
              color: "#0A0A0B",
              fontSize: "1vw",
              fontWeight: 500,
              borderRadius: "0.2vw",
              cursor: "pointer",
            }}
          >
            Partner with us
          </div>
          <div
            style={{
              padding: "1.5vh 3vw",
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#EDEDEF",
              fontSize: "1vw",
              fontWeight: 500,
              borderRadius: "0.2vw",
              cursor: "pointer",
            }}
          >
            View Documentation
          </div>
        </div>

        <div style={{ display: "flex", gap: "4vw", marginTop: "10vh" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "0.8vw", color: "#6B6B76", fontFamily: "'DM Mono', monospace", marginBottom: "0.5vh" }}>EMAIL</span>
            <span style={{ fontSize: "1vw", color: "#EDEDEF" }}>partners@acme.co</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "0.8vw", color: "#6B6B76", fontFamily: "'DM Mono', monospace", marginBottom: "0.5vh" }}>HQ</span>
            <span style={{ fontSize: "1vw", color: "#EDEDEF" }}>San Francisco, CA</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "3vh", fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#6B6B76" }}>
        <span>Example Company, Inc.</span>
        <span>SLIDE_04</span>
      </div>
    </div>
  );
}
```
