# Blueprint

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "Blueprint" template presents a modern, technical aesthetic reminiscent of architectural designs. It features a solid background color of #1B3A5C, complemented by a subtle linear gradient overlay with two layers of white lines at varying opacities (rgba(255,255,255,0.05) and rgba(255,255,255,0.1)). The text color is #FFFFFF, while the font family used throughout is 'Inter' for body text and 'monospace' for specific labels and values, emphasizing a clean and structured look. Key layout elements include multiple bordered sections with varying opacities, a prominent title area with large text (6vw) for "EXAMPLE DECK," and a decorative line in rgba(255,255,255,0.4) to separate content. The overall aesthetic feel can be described as "sleek, professional, technical."

## Source Code

**Component:** `Blueprint`

### Slide 1 — Title (`slide-styles/Blueprint.tsx`)

```tsx
export function Blueprint() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#1B3A5C", fontFamily: "'Inter', sans-serif", position: "relative", color: "#FFFFFF" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "2vw 2vh" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "10vw 10vh" }} />
      <div style={{ position: "absolute", top: "3vh", left: "3vw", right: "3vw", bottom: "3vh", border: "1px solid rgba(255,255,255,0.2)" }} />
      <div style={{ position: "absolute", top: "5vh", left: "5vw", right: "5vw", bottom: "5vh", border: "0.5px solid rgba(255,255,255,0.1)" }} />
      <div style={{ padding: "7vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "0.7vw", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.5 }}>Drawing No.</div>
            <div style={{ fontSize: "1vw", fontWeight: 600, fontFamily: "monospace" }}>EX-DCK-001</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.7vw", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.5 }}>Date</div>
            <div style={{ fontSize: "1vw", fontFamily: "monospace" }}>2026-03-11</div>
          </div>
        </div>
        <div>
          <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.3em", opacity: 0.5, marginBottom: "1.5vh" }}>
            Project Title
          </div>
          <h1 style={{ fontSize: "6vw", fontWeight: 300, lineHeight: 0.9, margin: 0, letterSpacing: "0.05em" }}>
            EXAMPLE
          </h1>
          <h1 style={{ fontSize: "6vw", fontWeight: 300, lineHeight: 0.9, margin: 0, letterSpacing: "0.05em" }}>
            DECK
          </h1>
          <div style={{ width: "8vw", height: "1px", background: "rgba(255,255,255,0.4)", marginTop: "2vh" }} />
          <p style={{ fontSize: "1.2vw", opacity: 0.6, marginTop: "1.5vh", maxWidth: "40vw", lineHeight: 1.6, fontWeight: 300 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "0.5px solid rgba(255,255,255,0.2)", paddingTop: "1.5vh" }}>
          <div>
            <div style={{ fontSize: "0.6vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.4 }}>Prepared By</div>
            <div style={{ fontSize: "0.9vw", fontFamily: "monospace" }}>Example Company, Inc.</div>
          </div>
          <div>
            <div style={{ fontSize: "0.6vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.4 }}>Classification</div>
            <div style={{ fontSize: "0.9vw", fontFamily: "monospace" }}>CONFIDENTIAL</div>
          </div>
          <div>
            <div style={{ fontSize: "0.6vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.4 }}>Scale</div>
            <div style={{ fontSize: "0.9vw", fontFamily: "monospace" }}>1:1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BlueprintPage2.tsx`)

```tsx
export function BlueprintPage2() {
  const specs = [
    { label: "Max Load", value: "10,000 concurrent" },
    { label: "Response Time", value: "12ms avg" },
    { label: "Bandwidth", value: "40Gbps" },
    { label: "Storage", value: "2PB" },
    { label: "Availability", value: "99.99%" },
    { label: "Encryption", value: "AES-256" },
    { label: "Regions", value: "24 global" },
    { label: "Compliance", value: "SOC2, ISO27001" },
  ];

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      backgroundColor: "#1B3A5C",
      color: "#FFFFFF",
      fontFamily: "'Courier New', Courier, monospace",
      position: "relative",
      boxSizing: "border-box"
    }}>
      {/* Blueprint Grids */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        backgroundSize: "2vw 2vh",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
        backgroundSize: "10vw 10vh",
        pointerEvents: "none"
      }} />

      {/* Main Borders */}
      <div style={{
        position: "absolute",
        top: "3vh",
        left: "3vw",
        right: "3vw",
        bottom: "3vh",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute",
        top: "4vh",
        left: "4vw",
        right: "4vw",
        bottom: "4vh",
        border: "2px solid rgba(255, 255, 255, 0.5)",
        pointerEvents: "none"
      }} />

      {/* Title */}
      <div style={{
        position: "absolute",
        top: "8vh",
        left: "8vw",
      }}>
        <h1 style={{
          fontSize: "4vw",
          fontWeight: "bold",
          margin: 0,
          letterSpacing: "0.1vw",
          color: "#E0F2FE",
          textShadow: "0 0 5px rgba(224, 242, 254, 0.5)"
        }}>
          TECHNICAL SPECIFICATIONS
        </h1>
        <div style={{
          fontSize: "1.5vw",
          color: "#BAE6FD",
          marginTop: "1vh",
          letterSpacing: "0.05vw"
        }}>
          DOCUMENT REF: T-SPEC-001
        </div>
      </div>

      {/* REV Stamp */}
      <div style={{
        position: "absolute",
        top: "8vh",
        right: "8vw",
        border: "0.3vw solid #EF4444",
        padding: "1vh 1vw",
        color: "#EF4444",
        fontSize: "2vw",
        fontWeight: "bold",
        transform: "rotate(15deg)",
        opacity: 0.8,
        letterSpacing: "0.2vw",
        pointerEvents: "none"
      }}>
        REV 2.0
      </div>

      {/* Specs Table */}
      <div style={{
        position: "absolute",
        top: "25vh",
        left: "8vw",
        right: "30vw", // leaving space for title block on right
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4vw 6vw",
      }}>
        {specs.map((spec, index) => (
          <div key={index} style={{
            display: "flex",
            alignItems: "flex-end",
            width: "100%",
            fontSize: "1.6vw",
            position: "relative"
          }}>
            <span style={{
              color: "#BAE6FD",
              whiteSpace: "nowrap"
            }}>
              {spec.label}
            </span>
            <div style={{
              flexGrow: 1,
              borderBottom: "0.2vw dotted rgba(255, 255, 255, 0.3)",
              margin: "0 1vw",
              position: "relative",
              top: "-0.4vw"
            }} />
            <span style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              whiteSpace: "nowrap"
            }}>
              {spec.value}
            </span>
          </div>
        ))}
      </div>

      {/* Compass / N Arrow */}
      <div style={{
        position: "absolute",
        bottom: "15vh",
        left: "8vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "6vw",
        height: "6vw",
        border: "1px solid rgba(255, 255, 255, 0.5)",
        borderRadius: "50%",
      }}>
        <div style={{ fontSize: "1vw", fontWeight: "bold" }}>N</div>
        <div style={{
          width: 0,
          height: 0,
          borderLeft: "0.5vw solid transparent",
          borderRight: "0.5vw solid transparent",
          borderBottom: "2vw solid #FFFFFF",
          margin: "0.5vh 0"
        }} />
        <div style={{
          width: "2vw",
          height: "1px",
          backgroundColor: "rgba(255, 255, 255, 0.5)"
        }} />
      </div>

      {/* Engineering Title Block (Bottom Right) */}
      <div style={{
        position: "absolute",
        bottom: "4vh",
        right: "4vw",
        width: "35vw",
        border: "2px solid rgba(255, 255, 255, 0.5)",
        borderRight: "none",
        borderBottom: "none",
        backgroundColor: "rgba(27, 58, 92, 0.9)", // slight solid bg to cover grid
        display: "flex",
        flexDirection: "column",
      }}>
        {/* Row 1 */}
        <div style={{ display: "flex", borderBottom: "1px solid rgba(255, 255, 255, 0.5)" }}>
          <div style={{ flex: 1, padding: "0.5vh 0.5vw", borderRight: "1px solid rgba(255, 255, 255, 0.5)" }}>
            <div style={{ fontSize: "0.7vw", color: "#BAE6FD" }}>PROJECT:</div>
            <div style={{ fontSize: "1.2vw", fontWeight: "bold" }}>CORE PLATFORM UPGRADE</div>
          </div>
        </div>
        
        {/* Row 2 */}
        <div style={{ display: "flex", borderBottom: "1px solid rgba(255, 255, 255, 0.5)" }}>
          <div style={{ flex: 2, padding: "0.5vh 0.5vw", borderRight: "1px solid rgba(255, 255, 255, 0.5)" }}>
            <div style={{ fontSize: "0.7vw", color: "#BAE6FD" }}>CLIENT:</div>
            <div style={{ fontSize: "1.1vw" }}>EXAMPLE COMPANY, INC.</div>
          </div>
          <div style={{ flex: 1, padding: "0.5vh 0.5vw", borderRight: "1px solid rgba(255, 255, 255, 0.5)" }}>
            <div style={{ fontSize: "0.7vw", color: "#BAE6FD" }}>DATE:</div>
            <div style={{ fontSize: "1.1vw" }}>2025-05-15</div>
          </div>
        </div>
        
        {/* Row 3 */}
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, padding: "0.5vh 0.5vw", borderRight: "1px solid rgba(255, 255, 255, 0.5)" }}>
            <div style={{ fontSize: "0.7vw", color: "#BAE6FD" }}>DRAWN BY:</div>
            <div style={{ fontSize: "1.1vw" }}>ENG DEPT</div>
          </div>
          <div style={{ flex: 1, padding: "0.5vh 0.5vw", borderRight: "1px solid rgba(255, 255, 255, 0.5)" }}>
            <div style={{ fontSize: "0.7vw", color: "#BAE6FD" }}>CHK BY:</div>
            <div style={{ fontSize: "1.1vw" }}>LEAD ARCH</div>
          </div>
          <div style={{ flex: 1, padding: "0.5vh 0.5vw", borderRight: "1px solid rgba(255, 255, 255, 0.5)" }}>
            <div style={{ fontSize: "0.7vw", color: "#BAE6FD" }}>PAGE:</div>
            <div style={{ fontSize: "1.4vw", fontWeight: "bold" }}>02</div>
          </div>
        </div>
      </div>
      
      {/* Confidential Footer Text */}
      <div style={{
        position: "absolute",
        bottom: "1vh",
        left: "5vw",
        fontSize: "0.8vw",
        color: "#BAE6FD",
        letterSpacing: "0.1vw"
      }}>
        Example Company, Inc. / Confidential
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/BlueprintPage3.tsx`)

```tsx
export function BlueprintPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#1B3A5C", fontFamily: "'Inter', sans-serif", position: "relative", color: "#FFFFFF" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "2vw 2vh" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "10vw 10vh" }} />
      <div style={{ position: "absolute", top: "3vh", left: "3vw", right: "3vw", bottom: "3vh", border: "1px solid rgba(255,255,255,0.2)" }} />
      <div style={{ position: "absolute", top: "5vh", left: "5vw", right: "5vw", bottom: "5vh", border: "0.5px solid rgba(255,255,255,0.1)" }} />
      
      <div style={{ padding: "7vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "0.7vw", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.5 }}>Section 3</div>
            <div style={{ fontSize: "1vw", fontWeight: 600, fontFamily: "monospace" }}>SYSTEM METRICS</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.7vw", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.5 }}>Ref No.</div>
            <div style={{ fontSize: "1vw", fontFamily: "monospace" }}>DAT-03X</div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "4vh", marginBottom: "4vh" }}>
          <h2 style={{ fontSize: "2.5vw", fontWeight: 300, margin: 0, letterSpacing: "0.05em", marginBottom: "4vh" }}>PERFORMANCE SPECIFICATIONS</h2>
          
          <div style={{ display: "flex", gap: "4vw", height: "35vh" }}>
            {/* Main Graph Box */}
            <div style={{ flex: 2, border: "1px solid rgba(255,255,255,0.3)", position: "relative", padding: "2vw", display: "flex", flexDirection: "column", background: "rgba(255,255,255,0.02)" }}>
              <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.6, marginBottom: "2vh", fontFamily: "monospace" }}>Load Distribution Array</div>
              <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "1.5vw", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                {[40, 65, 30, 85, 55, 95, 70].map((height, i) => (
                  <div key={i} style={{ flex: 1, height: `${height}%`, background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)", position: "relative" }}>
                    <div style={{ position: "absolute", top: "-1.5vw", left: "50%", transform: "translateX(-50%)", fontSize: "0.7vw", fontFamily: "monospace", opacity: 0.8 }}>{height}%</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Stats */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
              <div style={{ flex: 1, border: "1px solid rgba(255,255,255,0.3)", padding: "1.5vw", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontSize: "0.6vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.5 }}>Operating Threshold</div>
                <div style={{ fontSize: "3vw", fontWeight: 300, margin: "1vh 0", fontFamily: "monospace" }}>99.9%</div>
                <div style={{ fontSize: "0.8vw", opacity: 0.6, borderTop: "1px dashed rgba(255,255,255,0.2)", paddingTop: "1vh" }}>Tolerance: ±0.05</div>
              </div>
              <div style={{ flex: 1, border: "1px solid rgba(255,255,255,0.3)", padding: "1.5vw", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ fontSize: "0.6vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.5 }}>Throughput Cap</div>
                <div style={{ fontSize: "3vw", fontWeight: 300, margin: "1vh 0", fontFamily: "monospace" }}>24.5k</div>
                <div style={{ fontSize: "0.8vw", opacity: 0.6, borderTop: "1px dashed rgba(255,255,255,0.2)", paddingTop: "1vh" }}>Units / Second</div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: "4vh", border: "1px solid rgba(255,255,255,0.3)", padding: "2vw", background: "rgba(255,255,255,0.02)", display: "flex", gap: "2vw" }}>
             <div style={{ flex: 1 }}>
               <div style={{ fontSize: "0.8vw", fontFamily: "monospace", opacity: 0.7, marginBottom: "0.5vh" }}>&gt; COMPONENT ALPHA</div>
               <div style={{ fontSize: "0.8vw", opacity: 0.5 }}>Structural integrity verified. Load capacity exceeds base requirements by 42%.</div>
             </div>
             <div style={{ width: "1px", background: "rgba(255,255,255,0.2)" }} />
             <div style={{ flex: 1 }}>
               <div style={{ fontSize: "0.8vw", fontFamily: "monospace", opacity: 0.7, marginBottom: "0.5vh" }}>&gt; COMPONENT BETA</div>
               <div style={{ fontSize: "0.8vw", opacity: 0.5 }}>Thermal dynamics nominal. Heat dissipation operating at peak efficiency.</div>
             </div>
             <div style={{ width: "1px", background: "rgba(255,255,255,0.2)" }} />
             <div style={{ flex: 1 }}>
               <div style={{ fontSize: "0.8vw", fontFamily: "monospace", opacity: 0.7, marginBottom: "0.5vh" }}>&gt; COMPONENT GAMMA</div>
               <div style={{ fontSize: "0.8vw", opacity: 0.5 }}>Signal routing optimized. Latency reduced to near-zero tolerance levels.</div>
             </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "0.5px solid rgba(255,255,255,0.2)", paddingTop: "1.5vh" }}>
          <div>
            <div style={{ fontSize: "0.6vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.4 }}>Status</div>
            <div style={{ fontSize: "0.9vw", fontFamily: "monospace" }}>VERIFIED</div>
          </div>
          <div>
            <div style={{ fontSize: "0.6vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.4 }}>Revision</div>
            <div style={{ fontSize: "0.9vw", fontFamily: "monospace" }}>C.4</div>
          </div>
          <div>
            <div style={{ fontSize: "0.6vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.4 }}>Page</div>
            <div style={{ fontSize: "0.9vw", fontFamily: "monospace" }}>03</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/BlueprintPage4.tsx`)

```tsx
export function BlueprintPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#1B3A5C", fontFamily: "'Inter', sans-serif", position: "relative", color: "#FFFFFF" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "2vw 2vh" }} />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "10vw 10vh" }} />
      <div style={{ position: "absolute", top: "3vh", left: "3vw", right: "3vw", bottom: "3vh", border: "1px solid rgba(255,255,255,0.2)" }} />
      <div style={{ position: "absolute", top: "5vh", left: "5vw", right: "5vw", bottom: "5vh", border: "0.5px solid rgba(255,255,255,0.1)" }} />
      
      <div style={{ padding: "7vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: "0.7vw", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.5 }}>Section 4</div>
            <div style={{ fontSize: "1vw", fontWeight: 600, fontFamily: "monospace" }}>EXECUTION SUMMARY</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontSize: "0.7vw", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.5 }}>Ref No.</div>
            <div style={{ fontSize: "1vw", fontFamily: "monospace" }}>END-04X</div>
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "2vh", marginBottom: "2vh", textAlign: "center" }}>
          
          <div style={{ width: "15vw", height: "15vw", border: "1px solid rgba(255,255,255,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "5vh", position: "relative" }}>
             <div style={{ position: "absolute", inset: "-1vw", border: "1px dashed rgba(255,255,255,0.2)", borderRadius: "50%" }}></div>
             <div style={{ width: "8vw", height: "8vw", border: "2px solid rgba(255,255,255,0.8)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.05)" }}>
               <div style={{ fontSize: "3vw", fontWeight: 300 }}>&gt;_</div>
             </div>
          </div>

          <h1 style={{ fontSize: "4.5vw", fontWeight: 300, margin: 0, letterSpacing: "0.1em" }}>INITIATE BUILD</h1>
          <div style={{ width: "12vw", height: "1px", background: "rgba(255,255,255,0.5)", margin: "3vh 0" }} />
          
          <p style={{ fontSize: "1.2vw", opacity: 0.7, maxWidth: "45vw", lineHeight: 1.6, fontWeight: 300, marginBottom: "5vh" }}>
            All systems verified and structural components detailed. The blueprint is complete and ready for immediate deployment. Awaiting authorization to commence phase one.
          </p>

          <div style={{ display: "flex", gap: "2vw" }}>
             <div style={{ border: "1px solid rgba(255,255,255,0.4)", padding: "1.5vw 3vw", background: "rgba(255,255,255,0.1)", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "15vw" }}>
               <div style={{ fontSize: "0.7vw", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.5, marginBottom: "1vh" }}>Primary Contact</div>
               <div style={{ fontSize: "1vw", fontFamily: "monospace" }}>init@example.com</div>
             </div>
             <div style={{ border: "1px solid rgba(255,255,255,0.4)", padding: "1.5vw 3vw", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "15vw" }}>
               <div style={{ fontSize: "0.7vw", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.5, marginBottom: "1vh" }}>Secure Line</div>
               <div style={{ fontSize: "1vw", fontFamily: "monospace" }}>+1 (555) 019-8247</div>
             </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", borderTop: "0.5px solid rgba(255,255,255,0.2)", paddingTop: "1.5vh" }}>
          <div>
            <div style={{ fontSize: "0.6vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.4 }}>Status</div>
            <div style={{ fontSize: "0.9vw", fontFamily: "monospace" }}>FINAL</div>
          </div>
          <div>
            <div style={{ fontSize: "0.6vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.4 }}>Authorization</div>
            <div style={{ fontSize: "0.9vw", fontFamily: "monospace" }}>REQUIRED</div>
          </div>
          <div>
            <div style={{ fontSize: "0.6vw", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.4 }}>Page</div>
            <div style={{ fontSize: "0.9vw", fontFamily: "monospace" }}>04</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
