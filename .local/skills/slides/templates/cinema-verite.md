# Cinema Vérité

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The CinemaVerite template features a sleek, modern aesthetic reminiscent of a cinematic experience. The background color is a solid black (#050505) with a top and bottom bar in pure black (#000000), creating a stark contrast with the text color of light gray (#F0F0F0) and accent colors of medium gray (#666) and dark gray (#444). The font families used include 'Space Grotesk' for the main body text, 'DM Mono' for headers and footer elements, and 'Inter' for the subtitle, emphasizing a contemporary and tech-savvy feel. Key layout elements include a large title block positioned to the left, a decorative focal crosshair in the center-right, and a structured arrangement of header and footer elements, all contributing to a balanced and visually engaging composition. The overall aesthetic feel can be described as "modern cinematic."

## Source Code

**Component:** `CinemaVerite`

### Slide 1 — Title (`slide-styles/CinemaVerite.tsx`)

```tsx
export function CinemaVerite() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#050505",
        color: "#F0F0F0",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Top cinematic bar */}
      <div style={{ height: "15vh", width: "100vw", backgroundColor: "#000000", borderBottom: "1px solid #222" }} />

      {/* Main content area */}
      <div style={{ flex: 1, padding: "8vh 8vw", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
        
        {/* Header elements */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#666", textTransform: "uppercase", letterSpacing: "0.2em" }}>
          <div>Scene_01 / acme.co</div>
          <div>Take_2026</div>
        </div>

        {/* Title block - pushed to the left, very large */}
        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <h1
            style={{
              fontSize: "12vw",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Example<br />
            <span style={{ color: "#444" }}>Deck</span>
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.8vw",
              fontWeight: 300,
              color: "#999",
              maxWidth: "40vw",
              marginTop: "4vh",
              lineHeight: 1.5,
              marginLeft: "1vw",
              borderLeft: "2px solid #333",
              paddingLeft: "2vw"
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Footer elements */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          <div>Dir: Example Company, Inc.</div>
          <div>[ Confidential ]</div>
        </div>
        
        {/* Decorative focal crosshairs */}
        <div style={{ position: "absolute", top: "50%", right: "15vw", width: "4vw", height: "4vw", border: "1px solid #333", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "1vw", height: "1px", backgroundColor: "#666" }} />
          <div style={{ width: "1px", height: "1vw", backgroundColor: "#666", position: "absolute" }} />
        </div>

      </div>

      {/* Bottom cinematic bar */}
      <div style={{ height: "15vh", width: "100vw", backgroundColor: "#000000", borderTop: "1px solid #222" }} />
    </div>
  );
}
```

### Slide 2 (`slide-pages/CinemaVeritePage2.tsx`)

```tsx
export function CinemaVeritePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#050505",
        color: "#F0F0F0",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Top cinematic bar */}
      <div style={{ height: "15vh", width: "100vw", backgroundColor: "#000000", borderBottom: "1px solid #222" }} />

      {/* Main content area */}
      <div style={{ flex: 1, padding: "8vh 8vw", display: "flex", flexDirection: "column", position: "relative" }}>
        
        {/* Header elements */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#666", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "6vh" }}>
          <div>Scene_02 / acme.co</div>
          <div>Take_2026</div>
        </div>

        {/* Content body */}
        <div style={{ display: "flex", flex: 1, gap: "8vw" }}>
          {/* Left Column */}
          <div style={{ flex: "0 0 40%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2
              style={{
                fontSize: "5vw",
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.04em",
                margin: "0 0 3vh 0",
                textTransform: "uppercase",
              }}
            >
              The Core<br />
              <span style={{ color: "#444" }}>Conflict</span>
            </h2>
            <div style={{ borderLeft: "2px solid #333", paddingLeft: "2vw" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.2vw",
                  fontWeight: 300,
                  color: "#999",
                  margin: "0 0 2vh 0",
                  lineHeight: 1.6,
                }}
              >
                In every great narrative, there is tension. Our market is currently defined by friction between legacy systems and modern expectations.
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.2vw",
                  fontWeight: 300,
                  color: "#999",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                We resolve this by bringing cinematic clarity to complex operational challenges.
              </p>
            </div>
          </div>

          {/* Right Column / Visual Block */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", position: "relative" }}>
            <div style={{ width: "100%", height: "100%", border: "1px solid #222", position: "relative", backgroundColor: "#0a0a0a" }}>
              {/* Frame marks */}
              <div style={{ position: "absolute", top: "2vw", left: "2vw", width: "2vw", height: "2vw", borderTop: "2px solid #555", borderLeft: "2px solid #555" }} />
              <div style={{ position: "absolute", top: "2vw", right: "2vw", width: "2vw", height: "2vw", borderTop: "2px solid #555", borderRight: "2px solid #555" }} />
              <div style={{ position: "absolute", bottom: "2vw", left: "2vw", width: "2vw", height: "2vw", borderBottom: "2px solid #555", borderLeft: "2px solid #555" }} />
              <div style={{ position: "absolute", bottom: "2vw", right: "2vw", width: "2vw", height: "2vw", borderBottom: "2px solid #555", borderRight: "2px solid #555" }} />
              
              {/* Central text in frame */}
              <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}>
                 <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.5vw", color: "#666", letterSpacing: "0.1em", textAlign: "center" }}>
                   [ INT. OPERATIONS - DAY ]<br />
                   <br />
                   <span style={{ color: "#333", fontSize: "1vw" }}>NO SIGNAL DETECTED</span>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative focal crosshairs */}
        <div style={{ position: "absolute", top: "50%", right: "8vw", width: "4vw", height: "4vw", border: "1px dashed #333", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", opacity: 0.5, pointerEvents: "none" }}>
          <div style={{ width: "1vw", height: "1px", backgroundColor: "#666" }} />
          <div style={{ width: "1px", height: "1vw", backgroundColor: "#666", position: "absolute" }} />
        </div>

      </div>

      {/* Bottom cinematic bar */}
      <div style={{ height: "15vh", width: "100vw", backgroundColor: "#000000", borderTop: "1px solid #222", padding: "0 8vw", display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Dir: Example Company, Inc.
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          [ Confidential ] | Page 02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CinemaVeritePage3.tsx`)

```tsx
export function CinemaVeritePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#050505",
        color: "#F0F0F0",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Top cinematic bar */}
      <div style={{ height: "15vh", width: "100vw", backgroundColor: "#000000", borderBottom: "1px solid #222" }} />

      {/* Main content area */}
      <div style={{ flex: 1, padding: "8vh 8vw", display: "flex", flexDirection: "column", position: "relative" }}>
        
        {/* Header elements */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#666", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "4vh" }}>
          <div>Scene_03 / acme.co</div>
          <div>Take_2026</div>
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: "3vw",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            margin: "0 0 6vh 0",
            textTransform: "uppercase",
          }}
        >
          Performance <span style={{ color: "#444" }}>Metrics</span>
        </h2>

        {/* Data Grid */}
        <div style={{ display: "flex", flex: 1, gap: "4vw" }}>
          
          {/* Stat 1 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", borderLeft: "1px solid #222", paddingLeft: "2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#666", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "auto" }}>
              REC: 00:01:24:15
            </div>
            <div style={{ margin: "4vh 0" }}>
              <div style={{ fontSize: "7vw", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.05em", color: "#E0E0E0" }}>
                84<span style={{ color: "#444", fontSize: "4vw" }}>%</span>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2vw", color: "#888", marginTop: "2vh", fontWeight: 300, lineHeight: 1.5 }}>
                Increase in scene engagement across all measured cohorts.
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", borderLeft: "1px solid #222", paddingLeft: "2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#666", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "auto" }}>
              ISO: 800
            </div>
            <div style={{ margin: "4vh 0" }}>
              <div style={{ fontSize: "7vw", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.05em", color: "#E0E0E0" }}>
                2.5<span style={{ color: "#444", fontSize: "4vw" }}>x</span>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2vw", color: "#888", marginTop: "2vh", fontWeight: 300, lineHeight: 1.5 }}>
                Faster render times for complex data pipelines.
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", borderLeft: "1px solid #222", paddingLeft: "2vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#666", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "auto" }}>
              FPS: 23.976
            </div>
            <div style={{ margin: "4vh 0" }}>
              <div style={{ fontSize: "7vw", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.05em", color: "#E0E0E0" }}>
                12<span style={{ color: "#444", fontSize: "4vw" }}>k</span>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2vw", color: "#888", marginTop: "2vh", fontWeight: 300, lineHeight: 1.5 }}>
                Frames processed daily with zero dropped frames.
              </div>
            </div>
          </div>

        </div>

        {/* Cinematic Grid Lines Overlay (Subtle) */}
        <div style={{ position: "absolute", top: "25%", left: 0, width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "75%", left: 0, width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.03)", pointerEvents: "none" }} />

      </div>

      {/* Bottom cinematic bar */}
      <div style={{ height: "15vh", width: "100vw", backgroundColor: "#000000", borderTop: "1px solid #222", padding: "0 8vw", display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Dir: Example Company, Inc.
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          [ Confidential ] | Page 03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CinemaVeritePage4.tsx`)

```tsx
export function CinemaVeritePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#050505",
        color: "#F0F0F0",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      {/* Top cinematic bar */}
      <div style={{ height: "15vh", width: "100vw", backgroundColor: "#000000", borderBottom: "1px solid #222" }} />

      {/* Main content area */}
      <div style={{ flex: 1, padding: "8vh 8vw", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
        
        {/* Header elements */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#666", textTransform: "uppercase", letterSpacing: "0.2em" }}>
          <div>Scene_04 / acme.co</div>
          <div>Take_2026</div>
        </div>

        {/* Centered Closing Block */}
        <div style={{ margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#555", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "2vh" }}>
            Cut To Black
          </div>
          <h1
            style={{
              fontSize: "8vw",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.05em",
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Ready<br />
            <span style={{ color: "#444" }}>Action</span>
          </h1>
          
          <div style={{ marginTop: "6vh", display: "flex", gap: "4vw", fontFamily: "'Inter', sans-serif", fontSize: "1.2vw", fontWeight: 300, color: "#999" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh", borderTop: "1px solid #333", paddingTop: "2vh", width: "15vw" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#555", textTransform: "uppercase" }}>Producer</span>
              <span style={{ color: "#CCC" }}>hello@acme.co</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh", borderTop: "1px solid #333", paddingTop: "2vh", width: "15vw" }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#555", textTransform: "uppercase" }}>Studio</span>
              <span style={{ color: "#CCC" }}>acme.co/studio</span>
            </div>
          </div>
        </div>
        
        {/* Decorative focal crosshairs */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "40vw", height: "40vw", border: "1px solid rgba(255,255,255,0.02)", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-2vw", width: "1px", height: "4vw", backgroundColor: "#222" }} />
          <div style={{ position: "absolute", bottom: "-2vw", width: "1px", height: "4vw", backgroundColor: "#222" }} />
          <div style={{ position: "absolute", left: "-2vw", width: "4vw", height: "1px", backgroundColor: "#222" }} />
          <div style={{ position: "absolute", right: "-2vw", width: "4vw", height: "1px", backgroundColor: "#222" }} />
        </div>

      </div>

      {/* Bottom cinematic bar */}
      <div style={{ height: "15vh", width: "100vw", backgroundColor: "#000000", borderTop: "1px solid #222", padding: "0 8vw", display: "flex", alignItems: "center", justifyContent: "space-between", boxSizing: "border-box" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Dir: Example Company, Inc.
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#444", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          [ Confidential ] | Page 04
        </div>
      </div>
    </div>
  );
}
```
