# Hypercar Launch

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "HypercarLaunch" template embodies a sleek, modern aesthetic suitable for high-tech presentations. It features a solid black background color (#030303) with white text (#ffffff) and accents in shades of gray (#8c8c8c, #a3a3a3, #b3b3b3, #595959). The primary font used is 'Space Grotesk' for general text, while 'Inter' is employed for the main heading, which is styled with a gradient from white to gray (#ffffff to #8c8c8c) and has a transparent text fill effect. Key layout elements include a flexible column layout, decorative speed lines created with linear gradients, and a radial gradient overlay that adds depth. There are no background images specified. The overall aesthetic feel can be described as "futuristic, sleek, minimal."

## Source Code

**Component:** `HypercarLaunch`

### Slide 1 — Title (`slide-styles/HypercarLaunch.tsx`)

```tsx
export function HypercarLaunch() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#030303",
        color: "#ffffff",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Metallic Gradient Accents */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Speed lines */}
      <div style={{ position: "absolute", top: "20vh", right: "0vw", width: "40vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", transform: "skewX(-45deg)" }} />
      <div style={{ position: "absolute", top: "45vh", left: "-5vw", width: "30vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)", transform: "skewX(-45deg)" }} />
      <div style={{ position: "absolute", bottom: "30vh", right: "-10vw", width: "50vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)", transform: "skewX(-45deg)" }} />

      {/* Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 300, letterSpacing: "0.5vw", textTransform: "uppercase", color: "#8c8c8c" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 300, letterSpacing: "0.3vw", color: "#8c8c8c" }}>
          2026 / CONFIDENTIAL
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          flexGrow: 1,
          zIndex: 1,
          paddingLeft: "4vw",
          borderLeft: "0.2vw solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.8vw", color: "#a3a3a3", textTransform: "uppercase", marginBottom: "3vh" }}>
          {">"} Vision Interface
        </div>
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "8vw",
            fontWeight: 200,
            margin: "0 0 2vh 0",
            lineHeight: 1,
            letterSpacing: "-0.2vw",
            background: "linear-gradient(180deg, #ffffff 0%, #8c8c8c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "uppercase",
          }}
        >
          Example Deck
        </h1>
        <p
          style={{
            fontSize: "1.6vw",
            fontWeight: 300,
            margin: 0,
            maxWidth: "50vw",
            lineHeight: 1.4,
            color: "#b3b3b3",
            letterSpacing: "0.05vw",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      {/* Bottom Tech Specs */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 1,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <div style={{ fontSize: "0.9vw", color: "#595959", display: "flex", gap: "4vw" }}>
          <div>SYS_ID: 8X-994</div>
          <div>STATUS: ONLINE</div>
          <div>VER: 4.2.0</div>
        </div>
        <div style={{ fontSize: "0.9vw", color: "#595959", letterSpacing: "0.2vw", textTransform: "uppercase" }}>
          Example Company, Inc. // Engineering Div
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/HypercarLaunchPage2.tsx`)

```tsx
export function HypercarLaunchPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#030303",
        color: "#ffffff",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Metallic Gradient Accents */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Speed lines */}
      <div style={{ position: "absolute", top: "20vh", right: "0vw", width: "40vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", transform: "skewX(-45deg)" }} />
      <div style={{ position: "absolute", top: "45vh", left: "-5vw", width: "30vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)", transform: "skewX(-45deg)" }} />
      <div style={{ position: "absolute", bottom: "30vh", right: "-10vw", width: "50vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)", transform: "skewX(-45deg)" }} />

      {/* Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 300, letterSpacing: "0.5vw", textTransform: "uppercase", color: "#8c8c8c" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 300, letterSpacing: "0.3vw", color: "#8c8c8c" }}>
          2026 / CONFIDENTIAL
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexGrow: 1,
          zIndex: 1,
          marginTop: "6vh",
          marginBottom: "6vh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            width: "45%",
            paddingLeft: "4vw",
            borderLeft: "0.2vw solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.8vw", color: "#a3a3a3", textTransform: "uppercase", marginBottom: "3vh" }}>
            {">"} System Architecture
          </div>
          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "4.5vw",
              fontWeight: 200,
              margin: "0 0 3vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.1vw",
              background: "linear-gradient(180deg, #ffffff 0%, #8c8c8c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textTransform: "uppercase",
            }}
          >
            Core Components
          </h2>
          <p
            style={{
              fontSize: "1.4vw",
              fontWeight: 300,
              margin: "0 0 3vh 0",
              lineHeight: 1.5,
              color: "#b3b3b3",
              letterSpacing: "0.05vw",
            }}
          >
            The integration of advanced aerodynamics and uncompromised power delivery sets a new benchmark in performance engineering.
          </p>
        </div>

        <div style={{ width: "45%", display: "flex", flexDirection: "column", gap: "4vh" }}>
          {[
            { id: "01", title: "Aero-Vector Chassis", desc: "Optimized downforce coefficient." },
            { id: "02", title: "Kinetic E-Drive", desc: "Instantaneous torque vectoring." },
            { id: "03", title: "Carbon Monocoque", desc: "Ultra-lightweight structural integrity." }
          ].map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "flex-start", borderBottom: "0.1vw solid rgba(255, 255, 255, 0.1)", paddingBottom: "2vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", color: "#595959", marginRight: "2vw", paddingTop: "0.2vh" }}>
                {item.id}
              </div>
              <div>
                <div style={{ fontSize: "1.6vw", fontWeight: 400, color: "#ffffff", marginBottom: "0.5vh", textTransform: "uppercase", letterSpacing: "0.1vw" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "1.1vw", color: "#8c8c8c", fontWeight: 300 }}>
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tech Specs */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 1,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <div style={{ fontSize: "0.9vw", color: "#595959", display: "flex", gap: "4vw" }}>
          <div>SYS_ID: 8X-994</div>
          <div>STATUS: ONLINE</div>
          <div>VER: 4.2.0</div>
        </div>
        <div style={{ fontSize: "0.9vw", color: "#595959", letterSpacing: "0.2vw", textTransform: "uppercase" }}>
          Page 02 // 04
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/HypercarLaunchPage3.tsx`)

```tsx
export function HypercarLaunchPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#030303",
        color: "#ffffff",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Metallic Gradient Accents */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Speed lines */}
      <div style={{ position: "absolute", top: "20vh", right: "0vw", width: "40vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", transform: "skewX(-45deg)" }} />
      <div style={{ position: "absolute", top: "45vh", left: "-5vw", width: "30vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)", transform: "skewX(-45deg)" }} />
      <div style={{ position: "absolute", bottom: "30vh", right: "-10vw", width: "50vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)", transform: "skewX(-45deg)" }} />

      {/* Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 300, letterSpacing: "0.5vw", textTransform: "uppercase", color: "#8c8c8c" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 300, letterSpacing: "0.3vw", color: "#8c8c8c" }}>
          2026 / CONFIDENTIAL
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          flexGrow: 1,
          zIndex: 1,
          paddingLeft: "4vw",
          borderLeft: "0.2vw solid rgba(255, 255, 255, 0.1)",
          marginTop: "4vh",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.8vw", color: "#a3a3a3", textTransform: "uppercase", marginBottom: "3vh" }}>
          {">"} Performance Metrics
        </div>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "5vw",
            fontWeight: 200,
            margin: "0 0 6vh 0",
            lineHeight: 1,
            letterSpacing: "-0.1vw",
            background: "linear-gradient(180deg, #ffffff 0%, #8c8c8c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "uppercase",
          }}
        >
          Velocity Data
        </h2>

        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "flex-end", gap: "2vw" }}>
          {[
            { label: "Top Speed", value: "350", unit: "KM/H", height: "25vh" },
            { label: "0-100 km/h", value: "1.9", unit: "SEC", height: "15vh" },
            { label: "Output", value: "1200", unit: "BHP", height: "35vh" },
            { label: "Downforce", value: "800", unit: "KG", height: "20vh" }
          ].map((stat, idx) => (
            <div key={idx} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "baseline", marginBottom: "1vh", borderBottom: "0.1vw solid rgba(255,255,255,0.2)", paddingBottom: "1vh" }}>
                <span style={{ fontSize: "4vw", fontWeight: 300, fontFamily: "'Inter', sans-serif", lineHeight: 0.9 }}>{stat.value}</span>
                <span style={{ fontSize: "1vw", color: "#8c8c8c", marginLeft: "0.5vw", letterSpacing: "0.1vw" }}>{stat.unit}</span>
              </div>
              <div style={{ fontSize: "1vw", color: "#595959", textTransform: "uppercase", letterSpacing: "0.2vw", marginBottom: "2vh" }}>
                {stat.label}
              </div>
              {/* Fake bar chart */}
              <div style={{ width: "100%", height: stat.height, background: "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)", borderTop: "0.2vw solid #ffffff" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Tech Specs */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 1,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <div style={{ fontSize: "0.9vw", color: "#595959", display: "flex", gap: "4vw" }}>
          <div>SYS_ID: 8X-994</div>
          <div>STATUS: ONLINE</div>
          <div>VER: 4.2.0</div>
        </div>
        <div style={{ fontSize: "0.9vw", color: "#595959", letterSpacing: "0.2vw", textTransform: "uppercase" }}>
          Page 03 // 04
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/HypercarLaunchPage4.tsx`)

```tsx
export function HypercarLaunchPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#030303",
        color: "#ffffff",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Metallic Gradient Accents */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 50% -20%, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 50%)",
          pointerEvents: "none",
        }}
      />
      
      {/* Speed lines */}
      <div style={{ position: "absolute", top: "20vh", right: "0vw", width: "40vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)", transform: "skewX(-45deg)" }} />
      <div style={{ position: "absolute", top: "45vh", left: "-5vw", width: "30vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)", transform: "skewX(-45deg)" }} />
      <div style={{ position: "absolute", bottom: "30vh", right: "-10vw", width: "50vw", height: "0.1vh", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)", transform: "skewX(-45deg)" }} />

      {/* Top Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 300, letterSpacing: "0.5vw", textTransform: "uppercase", color: "#8c8c8c" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 300, letterSpacing: "0.3vw", color: "#8c8c8c" }}>
          2026 / CONFIDENTIAL
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          flexGrow: 1,
          zIndex: 1,
          paddingLeft: "4vw",
          borderLeft: "0.2vw solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.8vw", color: "#a3a3a3", textTransform: "uppercase", marginBottom: "3vh" }}>
          {">"} Next Steps
        </div>
        <h1
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "7vw",
            fontWeight: 200,
            margin: "0 0 4vh 0",
            lineHeight: 1,
            letterSpacing: "-0.2vw",
            background: "linear-gradient(180deg, #ffffff 0%, #8c8c8c 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textTransform: "uppercase",
          }}
        >
          Initiate Sequence
        </h1>
        
        <div style={{ display: "flex", gap: "3vw", marginTop: "2vh" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "0.9vw", color: "#595959", textTransform: "uppercase", letterSpacing: "0.2vw", marginBottom: "1vh" }}>Pre-order Inquiries</span>
            <span style={{ fontSize: "1.5vw", color: "#ffffff", fontWeight: 300, borderBottom: "0.1vw solid rgba(255,255,255,0.3)", paddingBottom: "0.5vh" }}>reserve@acme.co</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "0.9vw", color: "#595959", textTransform: "uppercase", letterSpacing: "0.2vw", marginBottom: "1vh" }}>Press & Media</span>
            <span style={{ fontSize: "1.5vw", color: "#ffffff", fontWeight: 300, borderBottom: "0.1vw solid rgba(255,255,255,0.3)", paddingBottom: "0.5vh" }}>press@acme.co</span>
          </div>
        </div>
      </div>

      {/* Bottom Tech Specs */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 1,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <div style={{ fontSize: "0.9vw", color: "#595959", display: "flex", gap: "4vw" }}>
          <div>SYS_ID: 8X-994</div>
          <div>STATUS: OFFLINE</div>
          <div>VER: 4.2.0</div>
        </div>
        <div style={{ fontSize: "0.9vw", color: "#595959", letterSpacing: "0.2vw", textTransform: "uppercase" }}>
          Page 04 // 04
        </div>
      </div>
    </div>
  );
}
```
