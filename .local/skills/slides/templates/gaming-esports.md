# Gaming Esports

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "GamingEsports" template embodies a modern, tech-inspired aesthetic suitable for gaming presentations. It features a solid background color of #0D0D12, complemented by angular elements in #15151C and decorative accents in #8B1A2B and #3D5AF1. The text is primarily rendered in white (#FFFFFF) and shades of gray (#8A8A9E, #A0A0B5), using the 'DM Mono' font for body text and 'Space Grotesk' for headers, emphasizing a sleek, contemporary look. Key layout elements include angular shapes, a hexagon placeholder, and a structured header and footer, creating a dynamic and engaging composition. The overall feel is futuristic and bold.

## Source Code

**Component:** `GamingEsports`

### Slide 1 — Title (`slide-styles/GamingEsports.tsx`)

```tsx
export function GamingEsports() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#0D0D12", fontFamily: "'DM Mono', monospace", display: "flex", flexDirection: "column", position: "relative", color: "#FFFFFF" }}>
      {/* Background Angular Elements */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "30vw", height: "100vh", backgroundColor: "#15151C", clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-10vh", right: "-10vw", width: "60vw", height: "60vh", borderTop: "2px solid #8B1A2B", borderLeft: "2px solid #8B1A2B", transform: "rotate(-15deg)", opacity: 0.3, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "20vw", height: "1px", backgroundColor: "#3D5AF1", opacity: 0.5, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "1px", height: "10vh", backgroundColor: "#3D5AF1", opacity: 0.5, zIndex: 0 }} />
      
      {/* HUD Borders */}
      <div style={{ position: "absolute", top: "3vh", left: "3vw", width: "5vw", height: "5vh", borderTop: "2px solid #3D5AF1", borderLeft: "2px solid #3D5AF1", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "3vh", right: "3vw", width: "5vw", height: "5vh", borderBottom: "2px solid #8B1A2B", borderRight: "2px solid #8B1A2B", zIndex: 1 }} />
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>acme.co</div>
          <div style={{ width: "2px", height: "2vh", backgroundColor: "#4A4A5A" }} />
          <div style={{ fontSize: "0.9vw", letterSpacing: "0.2em", color: "#8B1A2B" }}>[ SYS.ONLINE ]</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#3D5AF1" }} />
          <div style={{ fontSize: "1vw", letterSpacing: "0.1em", color: "#8A8A9E" }}>2026 // CONFIDENTIAL</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 10vw", position: "relative", zIndex: 10 }}>
        
        {/* Season Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "3vh" }}>
          <div style={{ backgroundColor: "#8B1A2B", color: "#FFFFFF", padding: "0.5vh 1vw", fontSize: "0.9vw", fontWeight: 700, letterSpacing: "0.15em", clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}>
            SEASON 4
          </div>
          <div style={{ fontSize: "1vw", letterSpacing: "0.2em", color: "#8A8A9E", textTransform: "uppercase" }}>
            Championship Series
          </div>
        </div>
        
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "7.5vw", margin: "0 0 2vh 0", fontWeight: 700, lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
          <span style={{ color: "#FFFFFF" }}>Example</span><br />
          <span style={{ color: "#3D5AF1" }}>Deck</span>
        </h1>
        
        <div style={{ width: "8vw", height: "4px", backgroundColor: "#8B1A2B", marginBottom: "3vh" }} />
        
        <p style={{ fontSize: "1.4vw", margin: 0, lineHeight: 1.6, maxWidth: "45vw", color: "#A0A0B5" }}>
          Your compelling subtitle goes here.<br/>
          Describe your big idea in a single sentence.
        </p>

        {/* Team/Company Info */}
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginTop: "8vh", backgroundColor: "rgba(21, 21, 28, 0.7)", padding: "2vh 2vw", borderLeft: "4px solid #3D5AF1", width: "fit-content" }}>
          {/* Hexagon Placeholder */}
          <div style={{ width: "4vw", height: "4.5vw", backgroundColor: "#2A2A3A", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "3vw", height: "3.5vw", backgroundColor: "#15151C", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
          </div>
          <div>
            <div style={{ fontSize: "0.8vw", letterSpacing: "0.15em", color: "#8A8A9E", marginBottom: "0.5vh" }}>PRESENTED BY</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05em", color: "#FFFFFF" }}>Example Company, Inc.</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4vh 6vw", position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ display: "flex", gap: "0.5vw" }}>
          <div style={{ width: "2vw", height: "4px", backgroundColor: "#4A4A5A" }} />
          <div style={{ width: "0.5vw", height: "4px", backgroundColor: "#4A4A5A" }} />
          <div style={{ width: "0.5vw", height: "4px", backgroundColor: "#4A4A5A" }} />
        </div>
        <div style={{ fontSize: "0.8vw", letterSpacing: "0.2em", color: "#4A4A5A" }}>
          V.1.0 // DO NOT DISTRIBUTE
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/GamingEsportsPage2.tsx`)

```tsx
export function GamingEsportsPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#0D0D12", fontFamily: "'DM Mono', monospace", display: "flex", flexDirection: "column", position: "relative", color: "#FFFFFF" }}>
      {/* Background Angular Elements */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "30vw", height: "100vh", backgroundColor: "#15151C", clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-10vh", right: "-10vw", width: "60vw", height: "60vh", borderTop: "2px solid #8B1A2B", borderLeft: "2px solid #8B1A2B", transform: "rotate(-15deg)", opacity: 0.3, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "20vw", height: "1px", backgroundColor: "#3D5AF1", opacity: 0.5, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "1px", height: "10vh", backgroundColor: "#3D5AF1", opacity: 0.5, zIndex: 0 }} />
      
      {/* HUD Borders */}
      <div style={{ position: "absolute", top: "3vh", left: "3vw", width: "5vw", height: "5vh", borderTop: "2px solid #3D5AF1", borderLeft: "2px solid #3D5AF1", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "3vh", right: "3vw", width: "5vw", height: "5vh", borderBottom: "2px solid #8B1A2B", borderRight: "2px solid #8B1A2B", zIndex: 1 }} />
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>acme.co</div>
          <div style={{ width: "2px", height: "2vh", backgroundColor: "#4A4A5A" }} />
          <div style={{ fontSize: "0.9vw", letterSpacing: "0.2em", color: "#8B1A2B" }}>[ SYS.ONLINE ]</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#3D5AF1" }} />
          <div style={{ fontSize: "1vw", letterSpacing: "0.1em", color: "#8A8A9E" }}>2026 // CONFIDENTIAL</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 10vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "2vh", marginTop: "4vh" }}>
          <div style={{ backgroundColor: "#3D5AF1", color: "#FFFFFF", padding: "0.5vh 1vw", fontSize: "0.9vw", fontWeight: 700, letterSpacing: "0.15em", clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}>
            MODULE 02
          </div>
          <div style={{ fontSize: "1vw", letterSpacing: "0.2em", color: "#8A8A9E", textTransform: "uppercase" }}>
            Core Mechanics
          </div>
        </div>
        
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", margin: "0 0 1vh 0", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
          Strategic <span style={{ color: "#3D5AF1" }}>Overview</span>
        </h2>
        
        <div style={{ width: "8vw", height: "4px", backgroundColor: "#8B1A2B", marginBottom: "6vh" }} />

        <div style={{ display: "flex", gap: "6vw" }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.2vw", lineHeight: 1.6, color: "#A0A0B5", marginBottom: "4vh", margin: 0 }}>
              Our approach leverages cross-platform synchronization to maximize engagement. We establish dominance through coordinated multi-channel deployments.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "3vh", marginTop: "4vh" }}>
              {[
                { title: "GLOBAL SYNC", desc: "Real-time updates across all regions.", color: "#3D5AF1" },
                { title: "RAPID DEPLOY", desc: "Automated patch delivery systems.", color: "#8B1A2B" },
                { title: "SECURE COMM", desc: "Encrypted peer-to-peer routing.", color: "#4A4A5A" }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "2vw", backgroundColor: "rgba(21, 21, 28, 0.7)", padding: "2vh 2vw", borderLeft: `2px solid ${item.color}` }}>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5vw", fontWeight: 700, color: item.color }}>0{i+1}</div>
                  <div>
                    <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "0.5vh", letterSpacing: "0.05em" }}>{item.title}</div>
                    <div style={{ fontSize: "0.9vw", color: "#8A8A9E", lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ flex: 1, position: "relative" }}>
            <div style={{ position: "absolute", top: "2vh", left: "2vw", width: "100%", height: "100%", border: "1px solid #3D5AF1", opacity: 0.3, zIndex: 0 }} />
            <div style={{ position: "relative", width: "100%", height: "100%", backgroundColor: "#15151C", border: "1px solid #4A4A5A", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "4vw" }}>
              <div style={{ width: "8vw", height: "8vw", backgroundColor: "rgba(61, 90, 241, 0.1)", border: "2px solid #3D5AF1", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "3vh" }}>
                <div style={{ width: "4vw", height: "4vw", backgroundColor: "#3D5AF1", borderRadius: "50%" }} />
              </div>
              <div style={{ fontSize: "1vw", letterSpacing: "0.15em", color: "#8A8A9E", textAlign: "center" }}>
                SYSTEM STATUS: <span style={{ color: "#3D5AF1" }}>OPTIMAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4vh 6vw", position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: "0.8vw", letterSpacing: "0.2em", color: "#4A4A5A" }}>
          PAGE // 02
        </div>
        <div style={{ display: "flex", gap: "0.5vw" }}>
          <div style={{ width: "0.5vw", height: "4px", backgroundColor: "#4A4A5A" }} />
          <div style={{ width: "2vw", height: "4px", backgroundColor: "#3D5AF1" }} />
          <div style={{ width: "0.5vw", height: "4px", backgroundColor: "#4A4A5A" }} />
        </div>
        <div style={{ fontSize: "0.8vw", letterSpacing: "0.2em", color: "#4A4A5A" }}>
          V.1.0 // DO NOT DISTRIBUTE
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/GamingEsportsPage3.tsx`)

```tsx
export function GamingEsportsPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#0D0D12", fontFamily: "'DM Mono', monospace", display: "flex", flexDirection: "column", position: "relative", color: "#FFFFFF" }}>
      {/* Background Angular Elements */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "30vw", height: "100vh", backgroundColor: "#15151C", clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-10vh", right: "-10vw", width: "60vw", height: "60vh", borderTop: "2px solid #8B1A2B", borderLeft: "2px solid #8B1A2B", transform: "rotate(-15deg)", opacity: 0.3, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "20vw", height: "1px", backgroundColor: "#3D5AF1", opacity: 0.5, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "1px", height: "10vh", backgroundColor: "#3D5AF1", opacity: 0.5, zIndex: 0 }} />
      
      {/* HUD Borders */}
      <div style={{ position: "absolute", top: "3vh", left: "3vw", width: "5vw", height: "5vh", borderTop: "2px solid #3D5AF1", borderLeft: "2px solid #3D5AF1", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "3vh", right: "3vw", width: "5vw", height: "5vh", borderBottom: "2px solid #8B1A2B", borderRight: "2px solid #8B1A2B", zIndex: 1 }} />
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>acme.co</div>
          <div style={{ width: "2px", height: "2vh", backgroundColor: "#4A4A5A" }} />
          <div style={{ fontSize: "0.9vw", letterSpacing: "0.2em", color: "#8B1A2B" }}>[ SYS.ONLINE ]</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#3D5AF1" }} />
          <div style={{ fontSize: "1vw", letterSpacing: "0.1em", color: "#8A8A9E" }}>2026 // CONFIDENTIAL</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 10vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4vh", marginTop: "2vh" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "2vh" }}>
              <div style={{ backgroundColor: "#8B1A2B", color: "#FFFFFF", padding: "0.5vh 1vw", fontSize: "0.9vw", fontWeight: 700, letterSpacing: "0.15em", clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)" }}>
                METRICS
              </div>
              <div style={{ fontSize: "1vw", letterSpacing: "0.2em", color: "#8A8A9E", textTransform: "uppercase" }}>
                Telemetry Data
              </div>
            </div>
            
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", margin: "0 0 1vh 0", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
              Live <span style={{ color: "#8B1A2B" }}>Telemetry</span>
            </h2>
            <div style={{ width: "8vw", height: "4px", backgroundColor: "#3D5AF1" }} />
          </div>
          
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.8vw", color: "#8A8A9E", letterSpacing: "0.1em", marginBottom: "0.5vh" }}>PEAK CCU</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2.5vw", fontWeight: 700, color: "#FFFFFF" }}>2.4M</div>
            </div>
            <div style={{ width: "1px", height: "4vh", backgroundColor: "#4A4A5A", alignSelf: "center" }} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.8vw", color: "#8A8A9E", letterSpacing: "0.1em", marginBottom: "0.5vh" }}>AVG PING</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2.5vw", fontWeight: 700, color: "#3D5AF1" }}>12ms</div>
            </div>
          </div>
        </div>

        {/* Data Visualization */}
        <div style={{ flex: 1, display: "flex", gap: "2vw", padding: "2vh 0 4vh 0" }}>
          {/* Main Chart Area */}
          <div style={{ flex: 2, backgroundColor: "rgba(21, 21, 28, 0.7)", border: "1px solid #4A4A5A", position: "relative", padding: "3vw" }}>
            {/* Grid lines */}
            <div style={{ position: "absolute", top: 0, left: "20%", width: "1px", height: "100%", backgroundColor: "rgba(74, 74, 90, 0.2)" }} />
            <div style={{ position: "absolute", top: 0, left: "40%", width: "1px", height: "100%", backgroundColor: "rgba(74, 74, 90, 0.2)" }} />
            <div style={{ position: "absolute", top: 0, left: "60%", width: "1px", height: "100%", backgroundColor: "rgba(74, 74, 90, 0.2)" }} />
            <div style={{ position: "absolute", top: 0, left: "80%", width: "1px", height: "100%", backgroundColor: "rgba(74, 74, 90, 0.2)" }} />
            
            <div style={{ position: "absolute", top: "25%", left: 0, width: "100%", height: "1px", backgroundColor: "rgba(74, 74, 90, 0.2)" }} />
            <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "1px", backgroundColor: "rgba(74, 74, 90, 0.2)" }} />
            <div style={{ position: "absolute", top: "75%", left: 0, width: "100%", height: "1px", backgroundColor: "rgba(74, 74, 90, 0.2)" }} />

            {/* Bars */}
            <div style={{ display: "flex", alignItems: "flex-end", height: "100%", gap: "2vw", position: "relative", zIndex: 1, paddingBottom: "2vh" }}>
              {[60, 85, 45, 90, 70].map((height, i) => (
                <div key={i} style={{ flex: 1, height: `${height}%`, position: "relative", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                  <div style={{ width: "100%", height: "100%", backgroundColor: i % 2 === 0 ? "#3D5AF1" : "#8B1A2B", opacity: 0.8, borderTop: `2px solid #FFFFFF` }} />
                  <div style={{ position: "absolute", bottom: "-3vh", width: "100%", textAlign: "center", fontSize: "0.9vw", color: "#8A8A9E" }}>Q{i+1}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Side Stats */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
            {[
              { label: "SERVER UPTIME", value: "99.99%", bar: "95%" },
              { label: "MATCHMAKING SPEED", value: "< 2s", bar: "80%" },
              { label: "PLAYER RETENTION", value: "84%", bar: "84%" }
            ].map((stat, i) => (
              <div key={i} style={{ backgroundColor: "#15151C", padding: "2vw", borderLeft: `2px solid ${i === 1 ? "#8B1A2B" : "#3D5AF1"}` }}>
                <div style={{ fontSize: "0.8vw", color: "#8A8A9E", letterSpacing: "0.15em", marginBottom: "1vh" }}>{stat.label}</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "2vh" }}>{stat.value}</div>
                <div style={{ width: "100%", height: "4px", backgroundColor: "#2A2A3A" }}>
                  <div style={{ width: stat.bar, height: "100%", backgroundColor: i === 1 ? "#8B1A2B" : "#3D5AF1" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4vh 6vw", position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: "0.8vw", letterSpacing: "0.2em", color: "#4A4A5A" }}>
          PAGE // 03
        </div>
        <div style={{ display: "flex", gap: "0.5vw" }}>
          <div style={{ width: "0.5vw", height: "4px", backgroundColor: "#4A4A5A" }} />
          <div style={{ width: "0.5vw", height: "4px", backgroundColor: "#4A4A5A" }} />
          <div style={{ width: "2vw", height: "4px", backgroundColor: "#8B1A2B" }} />
        </div>
        <div style={{ fontSize: "0.8vw", letterSpacing: "0.2em", color: "#4A4A5A" }}>
          V.1.0 // DO NOT DISTRIBUTE
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/GamingEsportsPage4.tsx`)

```tsx
export function GamingEsportsPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#0D0D12", fontFamily: "'DM Mono', monospace", display: "flex", flexDirection: "column", position: "relative", color: "#FFFFFF" }}>
      {/* Background Angular Elements */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "30vw", height: "100vh", backgroundColor: "#15151C", clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-10vh", right: "-10vw", width: "60vw", height: "60vh", borderTop: "2px solid #8B1A2B", borderLeft: "2px solid #8B1A2B", transform: "rotate(-15deg)", opacity: 0.3, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "20vw", height: "1px", backgroundColor: "#3D5AF1", opacity: 0.5, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "1px", height: "10vh", backgroundColor: "#3D5AF1", opacity: 0.5, zIndex: 0 }} />
      
      {/* Central Target Reticle */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "40vw", height: "40vw", border: "1px dashed rgba(61, 90, 241, 0.2)", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "20vw", height: "20vw", border: "1px solid rgba(139, 26, 43, 0.3)", borderRadius: "50%", zIndex: 0 }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "2vw", height: "2vw", border: "2px solid #3D5AF1", zIndex: 0 }} />

      {/* HUD Borders */}
      <div style={{ position: "absolute", top: "3vh", left: "3vw", width: "5vw", height: "5vh", borderTop: "2px solid #3D5AF1", borderLeft: "2px solid #3D5AF1", zIndex: 1 }} />
      <div style={{ position: "absolute", bottom: "3vh", right: "3vw", width: "5vw", height: "5vh", borderBottom: "2px solid #8B1A2B", borderRight: "2px solid #8B1A2B", zIndex: 1 }} />
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.4vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>acme.co</div>
          <div style={{ width: "2px", height: "2vh", backgroundColor: "#4A4A5A" }} />
          <div style={{ fontSize: "0.9vw", letterSpacing: "0.2em", color: "#8B1A2B" }}>[ SYS.ONLINE ]</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#3D5AF1" }} />
          <div style={{ fontSize: "1vw", letterSpacing: "0.1em", color: "#8A8A9E" }}>2026 // CONFIDENTIAL</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 10vw", position: "relative", zIndex: 10, textAlign: "center" }}>
        
        <div style={{ display: "inline-flex", alignItems: "center", gap: "1vw", marginBottom: "3vh" }}>
          <div style={{ width: "1vw", height: "2px", backgroundColor: "#3D5AF1" }} />
          <div style={{ fontSize: "1vw", letterSpacing: "0.3em", color: "#3D5AF1", textTransform: "uppercase" }}>
            SEQUENCE COMPLETE
          </div>
          <div style={{ width: "1vw", height: "2px", backgroundColor: "#3D5AF1" }} />
        </div>
        
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "6vw", margin: "0 0 2vh 0", fontWeight: 700, lineHeight: 1, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
          INITIALIZE <span style={{ color: "#8B1A2B" }}>NEXT PHASE</span>
        </h1>
        
        <p style={{ fontSize: "1.4vw", margin: "0 0 6vh 0", lineHeight: 1.6, maxWidth: "45vw", color: "#A0A0B5" }}>
          Ready to deploy? Open comms with command center to begin integration.
        </p>

        {/* CTA Button */}
        <div style={{ display: "inline-flex", alignItems: "center", backgroundColor: "#3D5AF1", padding: "2vh 3vw", cursor: "pointer", clipPath: "polygon(5% 0, 100% 0, 95% 100%, 0% 100%)", transition: "transform 0.2s ease" }}>
          <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.15em", color: "#FFFFFF" }}>ESTABLISH CONNECTION</div>
          <div style={{ marginLeft: "1.5vw", width: "1vw", height: "1vw", borderTop: "2px solid #FFFFFF", borderRight: "2px solid #FFFFFF", transform: "rotate(45deg)" }} />
        </div>

        <div style={{ display: "flex", gap: "4vw", marginTop: "8vh" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.8vw", color: "#8A8A9E", letterSpacing: "0.15em", marginBottom: "1vh" }}>COMM CHANNEL</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2vw", color: "#FFFFFF" }}>hello@acme.co</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.8vw", color: "#8A8A9E", letterSpacing: "0.15em", marginBottom: "1vh" }}>HQ COORDINATES</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2vw", color: "#FFFFFF" }}>SECTOR 7 // NY</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.8vw", color: "#8A8A9E", letterSpacing: "0.15em", marginBottom: "1vh" }}>ENCRYPTION KEY</div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.2vw", color: "#FFFFFF" }}>[ REQ-AUTH ]</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4vh 6vw", position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontSize: "0.8vw", letterSpacing: "0.2em", color: "#4A4A5A" }}>
          PAGE // 04
        </div>
        <div style={{ display: "flex", gap: "0.5vw" }}>
          <div style={{ width: "2vw", height: "4px", backgroundColor: "#3D5AF1" }} />
          <div style={{ width: "2vw", height: "4px", backgroundColor: "#3D5AF1" }} />
          <div style={{ width: "2vw", height: "4px", backgroundColor: "#3D5AF1" }} />
        </div>
        <div style={{ fontSize: "0.8vw", letterSpacing: "0.2em", color: "#4A4A5A" }}>
          V.1.0 // DO NOT DISTRIBUTE
        </div>
      </div>
    </div>
  );
}
```
