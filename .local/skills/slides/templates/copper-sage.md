# Copper & Sage

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The CopperSage template features a clean and modern aesthetic with a natural, earthy feel. The background color is a soft light gray (#E8EDE5), complemented by a border in a copper hue (#B87333). Text colors include a deep green (#2D3B2D) for primary text and a muted green (#546654) for secondary text. The font families used are 'Inter' for general text and 'Playfair Display' for the main heading, creating a contrast between modern sans-serif and classic serif styles. Key layout elements include a structured flexbox design with decorative elements like small rotated squares in copper, positioned strategically to enhance the overall composition. There are no background images used in this template. The overall aesthetic feel can be described as "natural elegance."

## Source Code

**Component:** `CopperSage`

### Slide 1 — Title (`slide-styles/CopperSage.tsx`)

```tsx
export function CopperSage() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#E8EDE5",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#2D3B2D",
        padding: "4vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #B87333",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#B87333", transform: "rotate(45deg)" }} />
            <div style={{ fontSize: "1vw", fontWeight: 400, color: "#2D3B2D", letterSpacing: "0.1em" }}>acme.co</div>
          </div>
          <div style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.1em" }}>2026</div>
        </div>

        <div style={{ maxWidth: "60vw" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "4vh" }}>
            <div style={{ width: "4vw", height: "1px", backgroundColor: "#B87333" }} />
            <div style={{ fontSize: "1vw", color: "#B87333", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
              Presentation Title
            </div>
          </div>
          
          <h1 style={{ fontSize: "7vw", fontWeight: 400, lineHeight: 1.1, margin: 0, color: "#2D3B2D", fontFamily: "'Playfair Display', serif" }}>
            Example Deck
          </h1>
          
          <p style={{ fontSize: "1.6vw", color: "#546654", marginTop: "4vh", maxWidth: "45vw", lineHeight: 1.6, fontWeight: 300 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ display: "flex", gap: "4vw", alignItems: "center" }}>
          <span style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.1em" }}>Example Company, Inc.</span>
          <div style={{ width: "0.4vw", height: "0.4vw", backgroundColor: "#B87333", transform: "rotate(45deg)" }} />
          <span style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.05em" }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CopperSagePage2.tsx`)

```tsx
export function CopperSagePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#E8EDE5",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#2D3B2D",
        padding: "4vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #B87333",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#B87333", transform: "rotate(45deg)" }} />
            <div style={{ fontSize: "1vw", fontWeight: 400, color: "#2D3B2D", letterSpacing: "0.1em" }}>acme.co</div>
          </div>
          <div style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.1em" }}>02</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "8vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "4vh" }}>
            <div style={{ width: "4vw", height: "1px", backgroundColor: "#B87333" }} />
            <div style={{ fontSize: "1vw", color: "#B87333", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Core Philosophy
            </div>
          </div>
          
          <h2 style={{ fontSize: "4.5vw", fontWeight: 400, lineHeight: 1.1, margin: 0, color: "#2D3B2D", fontFamily: "'Playfair Display', serif" }}>
            Cultivating Value
          </h2>
          
          <div style={{ display: "flex", gap: "6vw", marginTop: "8vh" }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: "1.4vw", color: "#546654", lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                Our approach blends traditional craftsmanship with modern efficiency. We believe in building enduring structures that stand the test of time, both physically and metaphorically.
              </p>
              <p style={{ fontSize: "1.4vw", color: "#546654", lineHeight: 1.6, fontWeight: 300, marginTop: "2vh" }}>
                By focusing on the intrinsic qualities of our materials and the people who work with them, we establish a foundation for unprecedented growth.
              </p>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
              {[
                { title: "Sustainable Sourcing", desc: "Materials chosen for longevity and minimal environmental impact." },
                { title: "Artisan Expertise", desc: "Craftsmen dedicated to perfecting their discipline over decades." },
                { title: "Measured Growth", desc: "Expanding our footprint thoughtfully to maintain quality." }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1.5vw" }}>
                  <div style={{ width: "1.5vw", height: "1.5vw", border: "1px solid #B87333", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "0.2vh" }}>
                    <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#B87333" }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.4vw", fontWeight: 500, margin: "0 0 0.5vh 0", color: "#2D3B2D" }}>{item.title}</h3>
                    <p style={{ fontSize: "1.1vw", color: "#546654", margin: 0, fontWeight: 300, lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "4vw", alignItems: "center" }}>
          <span style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.1em" }}>Example Company, Inc.</span>
          <div style={{ width: "0.4vw", height: "0.4vw", backgroundColor: "#B87333", transform: "rotate(45deg)" }} />
          <span style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.05em" }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CopperSagePage3.tsx`)

```tsx
export function CopperSagePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#E8EDE5",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#2D3B2D",
        padding: "4vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #B87333",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#B87333", transform: "rotate(45deg)" }} />
            <div style={{ fontSize: "1vw", fontWeight: 400, color: "#2D3B2D", letterSpacing: "0.1em" }}>acme.co</div>
          </div>
          <div style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.1em" }}>03</div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "6vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "3vh" }}>
            <div style={{ width: "4vw", height: "1px", backgroundColor: "#B87333" }} />
            <div style={{ fontSize: "1vw", color: "#B87333", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Performance Metrics
            </div>
          </div>
          
          <h2 style={{ fontSize: "3.5vw", fontWeight: 400, lineHeight: 1.1, margin: 0, color: "#2D3B2D", fontFamily: "'Playfair Display', serif", marginBottom: "6vh" }}>
            Annual Trajectory
          </h2>

          <div style={{ display: "flex", gap: "4vw", height: "40vh" }}>
            <div style={{ flex: 2, position: "relative", display: "flex", alignItems: "flex-end", gap: "2vw", borderBottom: "1px solid #546654" }}>
              {[
                { height: "30%", value: "Q1" },
                { height: "55%", value: "Q2" },
                { height: "45%", value: "Q3" },
                { height: "85%", value: "Q4" }
              ].map((bar, i) => (
                <div key={i} style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center" }}>
                  <div style={{ width: "100%", height: bar.height, backgroundColor: i === 3 ? "#B87333" : "#C4CFC4", transition: "height 1s ease" }} />
                  <div style={{ marginTop: "2vh", fontSize: "1vw", color: "#546654", letterSpacing: "0.1em" }}>{bar.value}</div>
                </div>
              ))}
            </div>
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "4vh" }}>
              <div>
                <div style={{ fontSize: "4vw", fontWeight: 300, color: "#B87333", fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>+85%</div>
                <div style={{ fontSize: "1.1vw", color: "#546654", marginTop: "1vh", fontWeight: 300 }}>Year-over-year revenue increase across all major sectors.</div>
              </div>
              <div style={{ width: "100%", height: "1px", backgroundColor: "#C4CFC4" }} />
              <div>
                <div style={{ fontSize: "4vw", fontWeight: 300, color: "#2D3B2D", fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>2.4M</div>
                <div style={{ fontSize: "1.1vw", color: "#546654", marginTop: "1vh", fontWeight: 300 }}>New acquisitions and partnerships secured in Q4.</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "4vw", alignItems: "center" }}>
          <span style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.1em" }}>Example Company, Inc.</span>
          <div style={{ width: "0.4vw", height: "0.4vw", backgroundColor: "#B87333", transform: "rotate(45deg)" }} />
          <span style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.05em" }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CopperSagePage4.tsx`)

```tsx
export function CopperSagePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#E8EDE5",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#2D3B2D",
        padding: "4vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid #B87333",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#B87333", transform: "rotate(45deg)" }} />
            <div style={{ fontSize: "1vw", fontWeight: 400, color: "#2D3B2D", letterSpacing: "0.1em" }}>acme.co</div>
          </div>
          <div style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.1em" }}>04</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", justifyContent: "center", flex: 1 }}>
          <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#B87333", transform: "rotate(45deg)", marginBottom: "6vh" }} />
          
          <h2 style={{ fontSize: "6vw", fontWeight: 400, lineHeight: 1.1, margin: 0, color: "#2D3B2D", fontFamily: "'Playfair Display', serif" }}>
            Join the Journey
          </h2>
          
          <p style={{ fontSize: "1.6vw", color: "#546654", marginTop: "4vh", maxWidth: "40vw", lineHeight: 1.6, fontWeight: 300 }}>
            Partner with us to forge a legacy of excellence and sustainable success.
          </p>

          <div style={{ marginTop: "6vh", display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <span style={{ fontSize: "1.2vw", fontWeight: 400, color: "#B87333", letterSpacing: "0.1em" }}>contact@acme.co</span>
            <div style={{ width: "3vw", height: "1px", backgroundColor: "#B87333" }} />
          </div>
        </div>

        <div style={{ display: "flex", gap: "4vw", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.1em" }}>Example Company, Inc.</span>
          <div style={{ width: "0.4vw", height: "0.4vw", backgroundColor: "#B87333", transform: "rotate(45deg)" }} />
          <span style={{ fontSize: "0.9vw", color: "#546654", letterSpacing: "0.05em" }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```
