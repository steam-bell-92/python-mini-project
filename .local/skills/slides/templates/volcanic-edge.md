# Volcanic Edge

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "VolcanicEdge" template embodies a dark, dramatic aesthetic, featuring a background color of #080505. It includes a background image of a volcanic coast located at the URL path "/__mockup/photos/volcanic-coast.png". The design utilizes a diagonal overlay with a semi-transparent black color (rgba(8,5,5,0.9)) to enhance depth. Text elements are styled with the font family 'DM Mono' for headers and metadata, and 'Space Grotesk' for the main title, with colors including #E85A3A for accents and #F0E8E0 for primary text. Key layout elements include a content container positioned on the left side, with a structured arrangement of a header, title, subtitle, and metadata, creating a visually engaging and modern presentation. The overall aesthetic feel is "bold, modern, volcanic."

## Source Code

**Component:** `VolcanicEdge`

### Slide 1 — Title (`slide-styles/VolcanicEdge.tsx`)

```tsx
export function VolcanicEdge() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        backgroundColor: "#080505",
      }}
    >
      <img
        src="/__mockup/photos/volcanic-coast.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      
      {/* Diagonal overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(8,5,5,0.9)",
          clipPath: "polygon(0 0, 55% 0, 40% 100%, 0 100%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "45vw",
          height: "100%",
          padding: "8vh 4vw",
          boxSizing: "border-box",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Top Header Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#E85A3A",
              fontSize: "1vw",
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            ▲ TECTONIC
          </div>
        </div>

        {/* Main Title Section */}
        <div style={{ marginTop: "auto", marginBottom: "15vh" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(240, 232, 224, 0.5)",
              fontSize: "0.8vw",
              letterSpacing: "0.2em",
              marginBottom: "1vh",
            }}
          >
            MAGNITUDE
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#F0E8E0",
              fontSize: "5.5vw",
              fontWeight: 700,
              lineHeight: 1.1,
              margin: "0 0 3vh 0",
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
            }}
          >
            Example Deck
          </h1>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(240, 232, 224, 0.7)",
              fontSize: "1.2vw",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "30vw",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Bottom Metadata Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(240, 232, 224, 0.5)",
              fontSize: "1vw",
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
          
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#E85A3A",
                fontSize: "0.8vw",
                letterSpacing: "0.1em",
                marginBottom: "0.5vh",
              }}
            >
              CORE TEMP
            </div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#F0E8E0",
                fontSize: "1.8vw",
                fontWeight: 700,
                letterSpacing: "0.02em",
              }}
            >
              1,170°C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/VolcanicEdgePage2.tsx`)

```tsx
export function VolcanicEdgePage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#080505", display: "flex", flexDirection: "column", position: "relative" }}>
      {/* Header */}
      <div style={{ padding: "6vh 6vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(240, 232, 224, 0.1)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#E85A3A", fontSize: "1vw", letterSpacing: "0.15em", fontWeight: 600 }}>▲ TECTONIC</div>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.5)", fontSize: "0.8vw", letterSpacing: "0.2em" }}>02 // CONTEXT</div>
      </div>
      
      {/* Content */}
      <div style={{ flex: 1, display: "flex", padding: "8vh 6vw", gap: "6vw" }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8E0", fontSize: "4vw", fontWeight: 700, lineHeight: 1.1, margin: "0 0 4vh 0", textTransform: "uppercase" }}>
            The Seismic<br />Shift in Market<br /><span style={{ color: "#E85A3A" }}>Dynamics</span>
          </h2>
          <div style={{ width: "4vw", height: "0.5vh", backgroundColor: "#E85A3A", marginBottom: "4vh" }} />
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh", paddingTop: "2vh" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.8)", fontSize: "1.2vw", lineHeight: 1.6, margin: 0 }}>
            Our underlying foundation is shifting. The pressures that have been building below the surface over the last decade are finally creating permanent alterations to the competitive landscape.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#E85A3A", fontSize: "1.5vw", fontWeight: 600 }}>01</div>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.7)", fontSize: "1.1vw", lineHeight: 1.5 }}>
                Increased pressure on legacy systems resulting in structural fractures.
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#E85A3A", fontSize: "1.5vw", fontWeight: 600 }}>02</div>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.7)", fontSize: "1.1vw", lineHeight: 1.5 }}>
                Rapidly heating consumer expectations driving new volcanic growth vectors.
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#E85A3A", fontSize: "1.5vw", fontWeight: 600 }}>03</div>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.7)", fontSize: "1.1vw", lineHeight: 1.5 }}>
                Formation of new ecosystem islands ready for immediate colonization.
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div style={{ padding: "4vh 6vw", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.4)", fontSize: "0.9vw", letterSpacing: "0.05em" }}>acme.co</div>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.4)", fontSize: "0.9vw" }}>02</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/VolcanicEdgePage3.tsx`)

```tsx
export function VolcanicEdgePage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#080505", display: "flex", flexDirection: "column", position: "relative" }}>
      {/* Header */}
      <div style={{ padding: "6vh 6vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#E85A3A", fontSize: "1vw", letterSpacing: "0.15em", fontWeight: 600 }}>▲ TECTONIC</div>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.5)", fontSize: "0.8vw", letterSpacing: "0.2em" }}>03 // MAGNITUDE</div>
      </div>
      
      {/* Content */}
      <div style={{ flex: 1, padding: "2vh 6vw", display: "flex", flexDirection: "column" }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8E0", fontSize: "3vw", fontWeight: 700, margin: "0 0 8vh 0", textTransform: "uppercase" }}>
          Measuring the <span style={{ color: "#E85A3A" }}>Impact</span>
        </h2>
        
        <div style={{ display: "flex", justifyContent: "space-between", gap: "4vw", flex: 1 }}>
          {/* Stat 1 */}
          <div style={{ flex: 1, backgroundColor: "rgba(240, 232, 224, 0.03)", borderTop: "2px solid #E85A3A", padding: "4vh 3vw", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.5)", fontSize: "1vw", letterSpacing: "0.1em" }}>THERMAL EXPANSION</div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8E0", fontSize: "6vw", fontWeight: 700, lineHeight: 1 }}>4.8x</div>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#E85A3A", fontSize: "1.2vw", marginTop: "2vh" }}>+12% vs previous cycle</div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.6)", fontSize: "1vw", lineHeight: 1.5, marginTop: "4vh" }}>
              Market capacity growth rate over the last 18 months, indicating extreme subsurface heat.
            </div>
          </div>
          
          {/* Stat 2 */}
          <div style={{ flex: 1, backgroundColor: "rgba(240, 232, 224, 0.03)", borderTop: "2px solid rgba(240, 232, 224, 0.2)", padding: "4vh 3vw", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.5)", fontSize: "1vw", letterSpacing: "0.1em" }}>FAULT LINE DEPTH</div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8E0", fontSize: "6vw", fontWeight: 700, lineHeight: 1 }}>92%</div>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.5)", fontSize: "1.2vw", marginTop: "2vh" }}>Penetration rate</div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.6)", fontSize: "1vw", lineHeight: 1.5, marginTop: "4vh" }}>
              Percentage of legacy infrastructure showing critical vulnerabilities to new technology.
            </div>
          </div>
          
          {/* Stat 3 */}
          <div style={{ flex: 1, backgroundColor: "rgba(240, 232, 224, 0.03)", borderTop: "2px solid rgba(240, 232, 224, 0.2)", padding: "4vh 3vw", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.5)", fontSize: "1vw", letterSpacing: "0.1em" }}>ERUPTION PROBABILITY</div>
            <div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8E0", fontSize: "6vw", fontWeight: 700, lineHeight: 1 }}>24m</div>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.5)", fontSize: "1.2vw", marginTop: "2vh" }}>Time to critical mass</div>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.6)", fontSize: "1vw", lineHeight: 1.5, marginTop: "4vh" }}>
              Estimated timeframe before permanent market restructuring completes.
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div style={{ padding: "4vh 6vw", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.4)", fontSize: "0.9vw", letterSpacing: "0.05em" }}>acme.co</div>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.4)", fontSize: "0.9vw" }}>03</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/VolcanicEdgePage4.tsx`)

```tsx
export function VolcanicEdgePage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#080505", display: "flex", flexDirection: "column", position: "relative" }}>
      {/* Diagonal background accent */}
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "60vw", height: "60vh", background: "linear-gradient(135deg, rgba(232, 90, 58, 0) 0%, rgba(232, 90, 58, 0.05) 100%)", clipPath: "polygon(100% 0, 100% 100%, 0 100%)", zIndex: 0 }} />
      
      {/* Header */}
      <div style={{ padding: "6vh 6vw", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#E85A3A", fontSize: "1vw", letterSpacing: "0.15em", fontWeight: 600 }}>▲ TECTONIC</div>
        </div>
      </div>
      
      {/* Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 1, textAlign: "center" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.5)", fontSize: "1vw", letterSpacing: "0.3em", marginBottom: "3vh" }}>INITIATE SEQUENCE</div>
        
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8E0", fontSize: "6vw", fontWeight: 700, lineHeight: 1.1, margin: "0 0 4vh 0", textTransform: "uppercase" }}>
          Harness the <br /><span style={{ color: "#E85A3A" }}>Eruption</span>
        </h2>
        
        <p style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.7)", fontSize: "1.2vw", lineHeight: 1.6, margin: "0 0 6vh 0", maxWidth: "40vw" }}>
          Join us at the epicenter. Contact our team to begin structural integration.
        </p>
        
        <div style={{ display: "flex", gap: "3vw", marginTop: "2vh" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.4)", fontSize: "0.8vw", letterSpacing: "0.1em" }}>EMAIL</div>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "#F0E8E0", fontSize: "1.2vw" }}>core@tectonic.io</div>
          </div>
          <div style={{ width: "1px", backgroundColor: "rgba(240, 232, 224, 0.2)", height: "4vh" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.4)", fontSize: "0.8vw", letterSpacing: "0.1em" }}>COORDINATES</div>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "#F0E8E0", fontSize: "1.2vw" }}>45.5231° N, 122.6765° W</div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div style={{ padding: "4vh 6vw", display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.4)", fontSize: "0.9vw", letterSpacing: "0.05em" }}>acme.co</div>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "rgba(240, 232, 224, 0.4)", fontSize: "0.9vw" }}>04</div>
      </div>
    </div>
  );
}
```
