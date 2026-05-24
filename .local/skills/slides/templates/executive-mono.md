# Executive Mono

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "ExecutiveMono" template presents a clean, modern aesthetic with a focus on minimalism and clarity. It features a solid white background color (#FFFFFF) and utilizes a monochrome color palette for text and accents, including light gray (#E5E5E5) for the large "01" element, black (#000000) for various text elements and lines, and a medium gray (#555555) for the subtitle. The font family used is "'DM Mono', Courier, monospace," which conveys a technical and professional feel, with varying weights for emphasis. Key layout elements include a large title area, a subtitle section, and a footer with company information, all arranged in a structured, flexible layout that emphasizes vertical space. There are no background images used in this template. The overall aesthetic feel can be described as "modern minimalism."

## Source Code

**Component:** `ExecutiveMono`

### Slide 1 — Title (`slide-styles/ExecutiveMono.tsx`)

```tsx
export function ExecutiveMono() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'DM Mono', Courier, monospace",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      <div style={{ position: "absolute", top: "4vh", right: "6vw", fontSize: "12vw", color: "#E5E5E5", fontWeight: 400, lineHeight: 1, zIndex: 0 }}>
        01
      </div>

      <div style={{ width: "100%", height: "2px", backgroundColor: "#000000", zIndex: 1 }} />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "3vh", zIndex: 1 }}>
        <div style={{ color: "#000000", fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.05em" }}>
          [acme.co]
        </div>
        <div style={{ color: "#000000", fontSize: "1vw", fontWeight: 400 }}>
          DATE: 2026
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", zIndex: 1, marginTop: "10vh" }}>
        <div style={{ color: "#000000", fontSize: "1vw", fontWeight: 400, marginBottom: "2vh", letterSpacing: "0.1em" }}>
          DOCUMENT // TITLE
        </div>
        <h1
          style={{
            color: "#000000",
            fontSize: "6vw",
            margin: "0 0 4vh 0",
            fontWeight: 500,
            lineHeight: 1.1,
            textTransform: "uppercase",
            letterSpacing: "-0.02em"
          }}
        >
          EXAMPLE DECK
        </h1>
        
        <p
          style={{
            color: "#555555",
            fontSize: "1.5vw",
            margin: 0,
            fontWeight: 400,
            lineHeight: 1.5,
            maxWidth: "50vw"
          }}
        >
          {">"} Your compelling subtitle goes here.
          <br />
          {">"} Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3vh", zIndex: 1 }}>
        <div style={{ color: "#000000", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          COMPANY: Example Company, Inc.<br />
          STATUS: Confidential
        </div>
      </div>
      
      <div style={{ width: "100%", height: "2px", backgroundColor: "#000000", zIndex: 1 }} />
    </div>
  );
}
```

### Slide 2 (`slide-pages/ExecutiveMonoPage2.tsx`)

```tsx
export function ExecutiveMonoPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'DM Mono', Courier, monospace",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      <div style={{ position: "absolute", top: "4vh", right: "6vw", fontSize: "12vw", color: "#E5E5E5", fontWeight: 400, lineHeight: 1, zIndex: 0 }}>
        02
      </div>

      <div style={{ width: "100%", height: "2px", backgroundColor: "#000000", zIndex: 1 }} />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "3vh", zIndex: 1 }}>
        <div style={{ color: "#000000", fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.05em" }}>
          [acme.co]
        </div>
        <div style={{ color: "#000000", fontSize: "1vw", fontWeight: 400 }}>
          DATE: 2026
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", zIndex: 1, marginTop: "8vh" }}>
        <div style={{ color: "#000000", fontSize: "1vw", fontWeight: 400, marginBottom: "2vh", letterSpacing: "0.1em" }}>
          CORE // FEATURES
        </div>
        <h2
          style={{
            color: "#000000",
            fontSize: "4.5vw",
            margin: "0 0 6vh 0",
            fontWeight: 500,
            lineHeight: 1.1,
            textTransform: "uppercase",
            letterSpacing: "-0.02em"
          }}
        >
          SYSTEM ARCHITECTURE
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "4vh", width: "70vw" }}>
          {[
            { title: "DECENTRALIZED PROTOCOL", desc: "A robust framework that removes single points of failure while ensuring maximum uptime and reliability." },
            { title: "ENCRYPTED COMMUNICATIONS", desc: "End-to-end security via advanced cryptographic primitives, guaranteeing privacy by default." },
            { title: "REAL-TIME SYNC", desc: "State resolution happens in milliseconds across global nodes without compromising consistency." }
          ].map((feature, i) => (
            <div key={i} style={{ display: "flex", gap: "3vw", alignItems: "flex-start" }}>
              <div style={{ color: "#000000", fontSize: "1.2vw", fontWeight: 600, minWidth: "20vw" }}>
                {">"} {feature.title}
              </div>
              <div style={{ color: "#555555", fontSize: "1.1vw", lineHeight: 1.6, fontWeight: 400 }}>
                {feature.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3vh", zIndex: 1 }}>
        <div style={{ color: "#000000", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          COMPANY: Example Company, Inc.<br />
          STATUS: Confidential
        </div>
      </div>
      
      <div style={{ width: "100%", height: "2px", backgroundColor: "#000000", zIndex: 1 }} />
    </div>
  );
}
```

### Slide 3 (`slide-pages/ExecutiveMonoPage3.tsx`)

```tsx
export function ExecutiveMonoPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'DM Mono', Courier, monospace",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      <div style={{ position: "absolute", top: "4vh", right: "6vw", fontSize: "12vw", color: "#E5E5E5", fontWeight: 400, lineHeight: 1, zIndex: 0 }}>
        03
      </div>

      <div style={{ width: "100%", height: "2px", backgroundColor: "#000000", zIndex: 1 }} />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "3vh", zIndex: 1 }}>
        <div style={{ color: "#000000", fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.05em" }}>
          [acme.co]
        </div>
        <div style={{ color: "#000000", fontSize: "1vw", fontWeight: 400 }}>
          DATE: 2026
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", zIndex: 1, marginTop: "8vh" }}>
        <div style={{ color: "#000000", fontSize: "1vw", fontWeight: 400, marginBottom: "2vh", letterSpacing: "0.1em" }}>
          METRICS // PERFORMANCE
        </div>
        <h2
          style={{
            color: "#000000",
            fontSize: "4.5vw",
            margin: "0 0 8vh 0",
            fontWeight: 500,
            lineHeight: 1.1,
            textTransform: "uppercase",
            letterSpacing: "-0.02em"
          }}
        >
          Q3 GROWTH DATA
        </h2>

        <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "5vh", width: "40%" }}>
            <div style={{ borderLeft: "4px solid #000000", paddingLeft: "2vw" }}>
              <div style={{ color: "#555555", fontSize: "1vw", marginBottom: "1vh" }}>ACTIVE USERS (YOY)</div>
              <div style={{ color: "#000000", fontSize: "5vw", fontWeight: 500, lineHeight: 1 }}>+245%</div>
            </div>
            <div style={{ borderLeft: "4px solid #000000", paddingLeft: "2vw" }}>
              <div style={{ color: "#555555", fontSize: "1vw", marginBottom: "1vh" }}>SYSTEM LATENCY</div>
              <div style={{ color: "#000000", fontSize: "5vw", fontWeight: 500, lineHeight: 1 }}>14ms</div>
            </div>
          </div>

          <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
            <div style={{ width: "100%", height: "1px", backgroundColor: "#000000", marginBottom: "2vh", opacity: 0.3 }} />
            <div style={{ display: "flex", alignItems: "flex-end", height: "20vh", gap: "2vw", paddingBottom: "1vh", borderBottom: "2px solid #000000" }}>
              {[30, 45, 60, 85, 100].map((h, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                  <div style={{ width: "100%", height: `${h}%`, backgroundColor: "#000000" }} />
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1vh" }}>
              {["MAY", "JUN", "JUL", "AUG", "SEP"].map((month, i) => (
                <div key={i} style={{ flex: 1, textAlign: "center", color: "#555555", fontSize: "0.9vw" }}>
                  {month}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3vh", zIndex: 1 }}>
        <div style={{ color: "#000000", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          COMPANY: Example Company, Inc.<br />
          STATUS: Confidential
        </div>
      </div>
      
      <div style={{ width: "100%", height: "2px", backgroundColor: "#000000", zIndex: 1 }} />
    </div>
  );
}
```

### Slide 4 (`slide-pages/ExecutiveMonoPage4.tsx`)

```tsx
export function ExecutiveMonoPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'DM Mono', Courier, monospace",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      <div style={{ position: "absolute", top: "4vh", right: "6vw", fontSize: "12vw", color: "#E5E5E5", fontWeight: 400, lineHeight: 1, zIndex: 0 }}>
        04
      </div>

      <div style={{ width: "100%", height: "2px", backgroundColor: "#000000", zIndex: 1 }} />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "3vh", zIndex: 1 }}>
        <div style={{ color: "#000000", fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.05em" }}>
          [acme.co]
        </div>
        <div style={{ color: "#000000", fontSize: "1vw", fontWeight: 400 }}>
          DATE: 2026
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", zIndex: 1 }}>
        <div style={{ color: "#000000", fontSize: "1vw", fontWeight: 400, marginBottom: "2vh", letterSpacing: "0.1em" }}>
          NEXT // STEPS
        </div>
        <h2
          style={{
            color: "#000000",
            fontSize: "6vw",
            margin: "0 0 6vh 0",
            fontWeight: 500,
            lineHeight: 1.1,
            textTransform: "uppercase",
            letterSpacing: "-0.02em"
          }}
        >
          DEPLOY PHASE 1
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ color: "#555555", fontSize: "1.5vw", fontWeight: 400 }}>
            {">"} EXECUTE INTEGRATION AGREEMENT
          </div>
          <div style={{ color: "#555555", fontSize: "1.5vw", fontWeight: 400 }}>
            {">"} INITIALIZE ONBOARDING SEQUENCE
          </div>
          <div style={{ color: "#555555", fontSize: "1.5vw", fontWeight: 400 }}>
            {">"} SECURE ALLOCATIONS
          </div>
        </div>

        <div style={{ marginTop: "10vh", display: "flex", gap: "6vw" }}>
          <div>
            <div style={{ color: "#555555", fontSize: "0.9vw", marginBottom: "1vh", letterSpacing: "0.1em" }}>CONTACT</div>
            <div style={{ color: "#000000", fontSize: "1.5vw", fontWeight: 500 }}>hello@acme.co</div>
          </div>
          <div>
            <div style={{ color: "#555555", fontSize: "0.9vw", marginBottom: "1vh", letterSpacing: "0.1em" }}>HQ</div>
            <div style={{ color: "#000000", fontSize: "1.5vw", fontWeight: 500 }}>San Francisco, CA</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3vh", zIndex: 1 }}>
        <div style={{ color: "#000000", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          COMPANY: Example Company, Inc.<br />
          STATUS: Confidential
        </div>
      </div>
      
      <div style={{ width: "100%", height: "2px", backgroundColor: "#000000", zIndex: 1 }} />
    </div>
  );
}
```
