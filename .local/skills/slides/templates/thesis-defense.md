# Thesis Defense

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "ThesisDefense" template presents a modern and professional aesthetic suitable for academic presentations. The background color is a solid dark blue-gray, specifically #1A2332. Text colors include white (#FFFFFF) for primary text and a muted blue-gray (#8E9EBB) for secondary text and accents. The font families used are 'Inter' for general text and 'Playfair Display' for the main title, creating a contrast between a clean sans-serif and a classic serif style. Key layout elements include a horizontal flexbox for the header, a decorative blue bar (#4A90E2) beneath the title, and a structured arrangement for candidate and committee information. No background images are specified in the code. The overall aesthetic feel can be described as "modern, academic, professional."

## Source Code

**Component:** `ThesisDefense`

### Slide 1 — Title (`slide-styles/ThesisDefense.tsx`)

```tsx
export function ThesisDefense() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A2332",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
        color: "#FFFFFF"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
        <div>
          <div style={{ color: "#8E9EBB", fontSize: "1.1vw", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1vh" }}>
            Doctoral Thesis Defense
          </div>
          <div style={{ color: "#FFFFFF", fontSize: "1vw", fontWeight: 300, letterSpacing: "0.05em", opacity: 0.8 }}>
            Department of Computer Science
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#FFFFFF", fontSize: "1.1vw", fontWeight: 600, letterSpacing: "0.05em" }}>
            acme.co
          </div>
          <div style={{ color: "#8E9EBB", fontSize: "1vw", fontWeight: 400, marginTop: "0.5vh" }}>
            October 2026
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", marginTop: "4vh" }}>
        <div style={{ width: "4vw", height: "0.3vw", backgroundColor: "#4A90E2", marginBottom: "4vh" }} />
        
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#FFFFFF",
            fontSize: "6vw",
            margin: "0 0 3vh 0",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            maxWidth: "85vw"
          }}
        >
          Example Deck
        </h1>
        
        <p
          style={{
            color: "#8E9EBB",
            fontSize: "1.8vw",
            margin: "0 0 6vh 0",
            fontWeight: 300,
            lineHeight: 1.5,
            maxWidth: "70vw"
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        <div style={{ display: "flex", gap: "6vw", marginTop: "auto", marginBottom: "2vh" }}>
          <div>
            <div style={{ color: "#8E9EBB", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1vh" }}>Candidate</div>
            <div style={{ color: "#FFFFFF", fontSize: "1.4vw", fontWeight: 400 }}>Jane Doe, M.S.</div>
          </div>
          <div>
            <div style={{ color: "#8E9EBB", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1vh" }}>Advisors</div>
            <div style={{ color: "#FFFFFF", fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.4 }}>
              Prof. Alan Turing<br />
              Prof. Grace Hopper
            </div>
          </div>
          <div>
            <div style={{ color: "#8E9EBB", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1vh" }}>Committee</div>
            <div style={{ color: "#FFFFFF", fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.4 }}>
              Dr. John von Neumann<br />
              Dr. Ada Lovelace
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: "4vh", borderTop: "1px solid rgba(142, 158, 187, 0.2)", paddingTop: "3vh" }}>
        <div style={{ color: "#8E9EBB", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          Example Company, Inc.
        </div>
        <div style={{ color: "#8E9EBB", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ThesisDefensePage2.tsx`)

```tsx
export function ThesisDefensePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A2332",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
        color: "#FFFFFF"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
        <div>
          <div style={{ color: "#8E9EBB", fontSize: "1.1vw", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1vh" }}>
            Problem Statement
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#FFFFFF", fontSize: "1.1vw", fontWeight: 600, letterSpacing: "0.05em" }}>
            acme.co
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "4vh" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#FFFFFF",
            fontSize: "4vw",
            margin: "0 0 2vh 0",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.01em"
          }}
        >
          Research Methodology
        </h2>
        <div style={{ width: "4vw", height: "0.3vw", backgroundColor: "#4A90E2", marginBottom: "5vh" }} />
        
        <div style={{ display: "flex", gap: "6vw", flex: 1 }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "1.8vw", color: "#FFFFFF", marginBottom: "2vh", fontWeight: 500 }}>Theoretical Framework</h3>
            <p style={{ color: "#8E9EBB", fontSize: "1.4vw", lineHeight: 1.6, marginBottom: "3vh", fontWeight: 300 }}>
              The current approach relies on establishing a comprehensive model of decentralized systems.
              Our framework attempts to bridge the gap between deterministic structures and stochastic behavior.
            </p>
            <ul style={{ color: "#8E9EBB", fontSize: "1.4vw", lineHeight: 1.8, fontWeight: 300, margin: 0, paddingLeft: "2vw" }}>
              <li>Analysis of temporal constraints</li>
              <li>Evaluation of legacy system overhead</li>
              <li>Stochastic modeling of network requests</li>
            </ul>
          </div>
          <div style={{ flex: 1, backgroundColor: "rgba(142, 158, 187, 0.05)", border: "1px solid rgba(142, 158, 187, 0.2)", borderRadius: "0.5vw", padding: "4vh 3vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "1.2vw", color: "#4A90E2", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2vh" }}>Key Findings</div>
            <div style={{ fontSize: "2vw", color: "#FFFFFF", fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1.4, marginBottom: "2vh" }}>
              "The integration of modular nodes resulted in a 40% reduction in cognitive latency during peak load."
            </div>
            <div style={{ color: "#8E9EBB", fontSize: "1.1vw", fontWeight: 400 }}>
              &mdash; Pre-defense validation report
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: "4vh", borderTop: "1px solid rgba(142, 158, 187, 0.2)", paddingTop: "3vh" }}>
        <div style={{ color: "#8E9EBB", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          Example Company, Inc.
        </div>
        <div style={{ color: "#8E9EBB", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          Page 2
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ThesisDefensePage3.tsx`)

```tsx
export function ThesisDefensePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A2332",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
        color: "#FFFFFF"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
        <div>
          <div style={{ color: "#8E9EBB", fontSize: "1.1vw", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1vh" }}>
            Experimental Results
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#FFFFFF", fontSize: "1.1vw", fontWeight: 600, letterSpacing: "0.05em" }}>
            acme.co
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "4vh" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#FFFFFF",
            fontSize: "4vw",
            margin: "0 0 2vh 0",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.01em"
          }}
        >
          Performance Metrics
        </h2>
        <div style={{ width: "4vw", height: "0.3vw", backgroundColor: "#4A90E2", marginBottom: "5vh" }} />
        
        <div style={{ display: "flex", gap: "6vw", flex: 1, alignItems: "flex-end", paddingBottom: "2vh" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
            <p style={{ color: "#8E9EBB", fontSize: "1.4vw", lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
              The empirical data demonstrates a clear advantage over conventional baseline models. Significant efficiency gains were observed across all three test environments.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw" }}>
              <div style={{ borderLeft: "2px solid #4A90E2", paddingLeft: "1.5vw" }}>
                <div style={{ fontSize: "3vw", color: "#FFFFFF", fontWeight: 600, fontFamily: "'Playfair Display', Georgia, serif" }}>87%</div>
                <div style={{ fontSize: "1vw", color: "#8E9EBB", textTransform: "uppercase", letterSpacing: "0.05em" }}>Throughput Increase</div>
              </div>
              <div style={{ borderLeft: "2px solid #4A90E2", paddingLeft: "1.5vw" }}>
                <div style={{ fontSize: "3vw", color: "#FFFFFF", fontWeight: 600, fontFamily: "'Playfair Display', Georgia, serif" }}>1.2s</div>
                <div style={{ fontSize: "1vw", color: "#8E9EBB", textTransform: "uppercase", letterSpacing: "0.05em" }}>Average Latency</div>
              </div>
            </div>
          </div>
          
          <div style={{ flex: 1, height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 2vw" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
              <div style={{ color: "#FFFFFF", fontSize: "1.2vw", fontWeight: 600 }}>45%</div>
              <div style={{ width: "5vw", height: "15vh", backgroundColor: "rgba(142, 158, 187, 0.2)" }} />
              <div style={{ color: "#8E9EBB", fontSize: "1vw" }}>Trial 1</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
              <div style={{ color: "#FFFFFF", fontSize: "1.2vw", fontWeight: 600 }}>62%</div>
              <div style={{ width: "5vw", height: "22vh", backgroundColor: "rgba(142, 158, 187, 0.4)" }} />
              <div style={{ color: "#8E9EBB", fontSize: "1vw" }}>Trial 2</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
              <div style={{ color: "#FFFFFF", fontSize: "1.2vw", fontWeight: 600 }}>91%</div>
              <div style={{ width: "5vw", height: "35vh", backgroundColor: "#4A90E2" }} />
              <div style={{ color: "#8E9EBB", fontSize: "1vw" }}>Trial 3</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: "4vh", borderTop: "1px solid rgba(142, 158, 187, 0.2)", paddingTop: "3vh" }}>
        <div style={{ color: "#8E9EBB", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          Example Company, Inc.
        </div>
        <div style={{ color: "#8E9EBB", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          Page 3
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ThesisDefensePage4.tsx`)

```tsx
export function ThesisDefensePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A2332",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
        color: "#FFFFFF"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
        <div>
          <div style={{ color: "#8E9EBB", fontSize: "1.1vw", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1vh" }}>
            Conclusion
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#FFFFFF", fontSize: "1.1vw", fontWeight: 600, letterSpacing: "0.05em" }}>
            acme.co
          </div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "4vh", textAlign: "center" }}>
        <div style={{ width: "4vw", height: "0.3vw", backgroundColor: "#4A90E2", marginBottom: "4vh" }} />
        
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#FFFFFF",
            fontSize: "6vw",
            margin: "0 0 3vh 0",
            fontWeight: 600,
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            maxWidth: "85vw"
          }}
        >
          Questions &amp; Discussion
        </h1>
        
        <p
          style={{
            color: "#8E9EBB",
            fontSize: "1.8vw",
            margin: "0 0 6vh 0",
            fontWeight: 300,
            lineHeight: 1.5,
            maxWidth: "60vw"
          }}
        >
          Thank you to the committee, my advisors, and all contributors who made this research possible.
        </p>

        <div style={{ display: "flex", gap: "4vw", marginTop: "4vh", backgroundColor: "rgba(142, 158, 187, 0.05)", padding: "3vh 5vw", borderRadius: "0.5vw", border: "1px solid rgba(142, 158, 187, 0.2)" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#8E9EBB", fontSize: "0.9vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1vh" }}>Contact</div>
            <div style={{ color: "#FFFFFF", fontSize: "1.2vw", fontWeight: 400 }}>jane.doe@university.edu</div>
          </div>
          <div style={{ width: "1px", backgroundColor: "rgba(142, 158, 187, 0.2)" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "#8E9EBB", fontSize: "0.9vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1vh" }}>Publications</div>
            <div style={{ color: "#FFFFFF", fontSize: "1.2vw", fontWeight: 400 }}>acme.co/jane-research</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: "4vh", borderTop: "1px solid rgba(142, 158, 187, 0.2)", paddingTop: "3vh" }}>
        <div style={{ color: "#8E9EBB", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          Example Company, Inc.
        </div>
        <div style={{ color: "#8E9EBB", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em" }}>
          Page 4
        </div>
      </div>
    </div>
  );
}
```
