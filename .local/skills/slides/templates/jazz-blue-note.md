# Jazz Blue Note

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "JazzBlueNote" template features a modern and sophisticated aesthetic, characterized by a clean layout and a mix of bold and subtle colors. The background color is a soft beige (#F4F0EA), complemented by a deep navy blue block (#1C2A43) on the left side. Text colors include a dark gray (#1A1A1A) for primary text, a lighter gray (#8C8C8C) for secondary text, and an accent color of warm gold (#D4A373) used for highlights. The font family used is 'Space Grotesk' for general text and 'DM Mono' for specific elements, providing a contemporary and tech-inspired feel. Key layout elements include a thick left color block, a right content area with a large header and subtitle, and a decorative overlapping circle with a gold border positioned centrally. There are no background images used in this template. The overall aesthetic feel can be described as "modern elegance."

## Source Code

**Component:** `JazzBlueNote`

### Slide 1 — Title (`slide-styles/JazzBlueNote.tsx`)

```tsx
export function JazzBlueNote() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F0EA",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#1A1A1A",
        display: "flex",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Left thick color block */}
      <div
        style={{
          width: "35vw",
          height: "100vh",
          backgroundColor: "#1C2A43",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5vh 4vw",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ color: "#F4F0EA", fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.02em" }}>
          acme.co
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ width: "3vw", height: "0.5vh", backgroundColor: "#D4A373" }}></div>
          <div style={{ color: "#F4F0EA", fontSize: "1vw", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Vol. 2026
          </div>
        </div>
      </div>

      {/* Right content area */}
      <div
        style={{
          width: "65vw",
          height: "100vh",
          padding: "5vh 5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#8C8C8C" }}>
            STEREO / CONFIDENTIAL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: "10vh" }}>
          <h1
            style={{
              fontSize: "12vw",
              fontWeight: 700,
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
              margin: 0,
              textTransform: "uppercase",
              color: "#1A1A1A",
            }}
          >
            EXAMPLE
            <br />
            <span style={{ color: "#D4A373" }}>DECK</span>
          </h1>
          <p
            style={{
              fontSize: "2vw",
              fontWeight: 400,
              color: "#4A4A4A",
              maxWidth: "45vw",
              marginTop: "6vh",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid #1A1A1A", paddingTop: "3vh" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "-0.01em" }}>
            Example Company, Inc.
          </div>
          <div style={{ display: "flex", gap: "0.5vw" }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: i === 1 ? "#D4A373" : "#1C2A43" }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative overlapping circle */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "25vw",
          width: "20vw",
          height: "20vw",
          borderRadius: "50%",
          border: "2px solid #D4A373",
          zIndex: 0,
          opacity: 0.5,
        }}
      ></div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/JazzBlueNotePage2.tsx`)

```tsx
export function JazzBlueNotePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F0EA",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#1A1A1A",
        display: "flex",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Left nav/title block */}
      <div
        style={{
          width: "25vw",
          height: "100vh",
          backgroundColor: "#1C2A43",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5vh 3vw",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ color: "#F4F0EA", fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.02em" }}>
          acme.co
        </div>
        <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
          <h2 style={{ 
            color: "#F4F0EA", 
            fontSize: "5vw", 
            fontWeight: 700, 
            margin: 0, 
            lineHeight: 1,
            textTransform: "uppercase"
          }}>
            THE<br/><span style={{ color: "#D4A373" }}>VISION</span>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ width: "3vw", height: "0.5vh", backgroundColor: "#D4A373" }}></div>
          <div style={{ color: "#F4F0EA", fontSize: "1vw", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            PAGE 02
          </div>
        </div>
      </div>

      {/* Right content area */}
      <div
        style={{
          width: "75vw",
          height: "100vh",
          padding: "5vh 5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#8C8C8C" }}>
            STEREO / CONFIDENTIAL
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: "5vh", flex: 1, justifyContent: "center" }}>
          <div style={{ display: "flex", gap: "4vw", marginBottom: "6vh" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1C2A43", marginBottom: "2vh", display: "flex", alignItems: "center", gap: "1vw" }}>
                <div style={{ width: "1vw", height: "1vw", backgroundColor: "#D4A373", borderRadius: "50%" }}></div>
                Modern Aesthetics
              </div>
              <p style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "#4A4A4A", margin: 0 }}>
                A sophisticated blend of striking typography and minimal layouts that resonate with today's design standards.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1C2A43", marginBottom: "2vh", display: "flex", alignItems: "center", gap: "1vw" }}>
                <div style={{ width: "1vw", height: "1vw", backgroundColor: "#D4A373", borderRadius: "50%" }}></div>
                Timeless Appeal
              </div>
              <p style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "#4A4A4A", margin: 0 }}>
                Drawing inspiration from classic jazz album covers, we create experiences that are deeply rooted in artistic tradition.
              </p>
            </div>
          </div>
          
          <div style={{ backgroundColor: "#1C2A43", padding: "4vh 4vw", color: "#F4F0EA", display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", color: "#D4A373" }}>// KEY TAKEAWAY</div>
            <div style={{ fontSize: "2.5vw", fontWeight: 700, lineHeight: 1.2 }}>
              "Design is not just what it looks like and feels like. Design is how it works."
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "2px solid #1A1A1A", paddingTop: "3vh" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "-0.01em" }}>
            Example Company, Inc.
          </div>
          <div style={{ display: "flex", gap: "0.5vw" }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: i === 2 ? "#D4A373" : "#1C2A43" }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative overlapping circle */}
      <div
        style={{
          position: "absolute",
          top: "60vh",
          left: "15vw",
          width: "20vw",
          height: "20vw",
          borderRadius: "50%",
          border: "2px solid #D4A373",
          zIndex: 0,
          opacity: 0.5,
        }}
      ></div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/JazzBlueNotePage3.tsx`)

```tsx
export function JazzBlueNotePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F0EA",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#1A1A1A",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Top Header */}
      <div style={{ height: "15vh", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 5vw", borderBottom: "2px solid #1C2A43", zIndex: 2 }}>
        <div style={{ color: "#1C2A43", fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.02em" }}>acme.co</div>
        <div style={{ fontSize: "3vw", fontWeight: 700, textTransform: "uppercase", letterSpacing: "-0.02em" }}>
          Q3 <span style={{ color: "#D4A373" }}>METRICS</span>
        </div>
        <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#8C8C8C" }}>STEREO / CONFIDENTIAL</div>
      </div>

      {/* Content */}
      <div style={{ flex: 1, display: "flex", padding: "5vh 5vw", gap: "5vw", zIndex: 2 }}>
        {/* Left Data Viz */}
        <div style={{ flex: 1.5, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "3vh", borderRight: "2px dashed #1C2A43", paddingRight: "5vw" }}>
          <div style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", color: "#1C2A43", textTransform: "uppercase", letterSpacing: "0.05em" }}>Growth Trajectory</div>
          
          {/* Chart area */}
          <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "2vw", height: "40vh" }}>
            {[
              { label: 'Q1', height: '30%', val: '24M' },
              { label: 'Q2', height: '45%', val: '36M' },
              { label: 'Q3', height: '65%', val: '52M' },
              { label: 'Q4', height: '90%', val: '84M' }
            ].map((col, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div style={{ fontSize: "1.2vw", fontWeight: 700, color: i === 3 ? "#D4A373" : "#1C2A43" }}>{col.val}</div>
                <div style={{ 
                  width: "100%", 
                  height: col.height, 
                  backgroundColor: i === 3 ? "#D4A373" : "#1C2A43",
                  position: "relative"
                }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.5vh", backgroundColor: "#F4F0EA", opacity: 0.5 }}></div>
                </div>
                <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#4A4A4A" }}>{col.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Info */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "4vh" }}>
          <div>
            <div style={{ fontSize: "6vw", fontWeight: 700, lineHeight: 1, color: "#1C2A43", letterSpacing: "-0.03em" }}>+250%</div>
            <div style={{ fontSize: "1.5vw", color: "#D4A373", fontWeight: 600, marginTop: "1vh", letterSpacing: "0.05em" }}>YEAR OVER YEAR GROWTH</div>
          </div>
          
          <p style={{ fontSize: "1.5vw", lineHeight: 1.5, color: "#4A4A4A", margin: 0 }}>
            Our strategic initiatives have successfully penetrated new markets, driving unprecedented adoption and retention rates across all key demographics.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2vh", marginTop: "2vh" }}>
            {['Market expansion in APAC', 'Product line extension', 'Strategic acquisitions'].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.5vw", fontSize: "1.2vw", fontWeight: 500 }}>
                <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "2px solid #D4A373", display: "flex", alignItems: "center", justifyContent: "center", color: "#1C2A43", fontSize: "1vw", fontWeight: 700 }}>{i+1}</div>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ height: "10vh", padding: "0 5vw", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 2 }}>
        <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#1A1A1A", letterSpacing: "0.1em" }}>PAGE 03</div>
        <div style={{ display: "flex", gap: "0.5vw" }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: i === 3 ? "#D4A373" : "#1C2A43" }}></div>
          ))}
        </div>
      </div>

      {/* Decorative overlapping circle */}
      <div
        style={{
          position: "absolute",
          top: "-5vh",
          right: "20vw",
          width: "25vw",
          height: "25vw",
          borderRadius: "50%",
          border: "2px solid #D4A373",
          zIndex: 1,
          opacity: 0.3,
        }}
      ></div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/JazzBlueNotePage4.tsx`)

```tsx
export function JazzBlueNotePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1C2A43",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#F4F0EA",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{ padding: "5vh 5vw", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 2 }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.02em" }}>acme.co</div>
        <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#D4A373", letterSpacing: "0.05em" }}>END OF TRANSMISSION</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", zIndex: 2 }}>
        <h2 style={{ 
          fontSize: "10vw", 
          fontWeight: 700, 
          lineHeight: 0.9, 
          margin: 0, 
          textAlign: "center",
          letterSpacing: "-0.05em"
        }}>
          LET'S MAKE IT
          <br />
          <span style={{ color: "#D4A373" }}>HAPPEN</span>
        </h2>
        
        <div style={{ width: "5vw", height: "0.5vh", backgroundColor: "#D4A373", margin: "8vh 0" }}></div>

        <div style={{ display: "flex", gap: "4vw", fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", letterSpacing: "0.02em" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <span style={{ color: "#D4A373" }}>E:</span> hello@acme.co
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <span style={{ color: "#D4A373" }}>P:</span> +1 (555) 123-4567
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <span style={{ color: "#D4A373" }}>W:</span> www.acme.co
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "5vh 5vw", display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 2 }}>
        <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em" }}>PAGE 04</div>
        <div style={{ display: "flex", gap: "0.5vw" }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: i === 4 ? "#D4A373" : "#4A5B7A" }}></div>
          ))}
        </div>
      </div>

      {/* Decorative overlapping circles */}
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "-10vw",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          border: "2px solid #D4A373",
          zIndex: 1,
          opacity: 0.2,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-15vh",
          right: "-10vw",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          border: "2px solid #F4F0EA",
          zIndex: 1,
          opacity: 0.05,
        }}
      ></div>
    </div>
  );
}
```
