# Urban Golden

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "UrbanGolden" template features a modern and sleek aesthetic, characterized by a dark urban theme with golden accents. The background color is a solid #111111, while the text color is primarily #f8f9fa, with accents in #d4af37 for highlights and #a0a0a0 for secondary text. The font family used is 'Space Grotesk', sans-serif, which is applied to all text elements for a contemporary look. Key layout elements include a two-column design, with the left column containing text and decorative elements like a horizontal line in #d4af37, and the right column featuring a background image of a city during golden hour (URL: "/__mockup/photos/city-golden-hour.jpg"). The overall aesthetic feel can be described as "modern elegance."

## Source Code

**Component:** `UrbanGolden`

### Slide 1 — Title (`slide-styles/UrbanGolden.tsx`)

```tsx
export function UrbanGolden() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        backgroundColor: "#111111",
        color: "#f8f9fa",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div
        style={{
          width: "50vw",
          height: "100vh",
          padding: "8vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.05em", color: "#d4af37" }}>
            acme.co
          </div>
          <div style={{ width: "4vw", height: "0.5vh", backgroundColor: "#d4af37" }} />
        </div>

        <div>
          <h1
            style={{
              fontSize: "7vw",
              fontWeight: 300,
              margin: "0 0 4vh 0",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#ffffff",
            }}
          >
            Example<br />
            <span style={{ fontWeight: 700, color: "#d4af37" }}>Deck</span>
          </h1>
          <p
            style={{
              fontSize: "1.6vw",
              fontWeight: 400,
              color: "#a0a0a0",
              margin: 0,
              maxWidth: "35vw",
              lineHeight: 1.6,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#666666", letterSpacing: "0.05em" }}>
            2026 / CONFIDENTIAL
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#666666" }}>
            Example Company, Inc.
          </div>
        </div>
      </div>

      <div
        style={{
          width: "50vw",
          height: "100vh",
          backgroundImage: 'url("/__mockup/photos/city-golden-hour.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, #111111 0%, rgba(17,17,17,0) 20%)",
          }}
        />
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/UrbanGoldenPage2.tsx`)

```tsx
export function UrbanGoldenPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#111111",
        color: "#f8f9fa",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.05em", color: "#d4af37" }}>
            acme.co
          </div>
          <div style={{ width: "4vw", height: "0.5vh", backgroundColor: "#d4af37" }} />
        </div>
        <h2 style={{ fontSize: "3vw", fontWeight: 300, color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>
          The <span style={{ fontWeight: 700, color: "#d4af37" }}>Vision</span>
        </h2>
      </div>

      <div style={{ display: "flex", gap: "6vw", flex: 1 }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "2vw", fontWeight: 500, color: "#ffffff", marginBottom: "3vh" }}>
            Market Evolution
          </h3>
          <p style={{ fontSize: "1.4vw", color: "#a0a0a0", lineHeight: 1.6, marginBottom: "4vh" }}>
            The landscape of urban development is shifting rapidly. With new technologies emerging daily, the need for sustainable, intelligent infrastructure has never been more pressing. We are positioned at the forefront of this transformation.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2vh" }}>
            {["Sustainable Architecture", "Smart Grid Integration", "Community-Centric Design", "Future-Proof Infrastructure"].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: "1vw", fontSize: "1.2vw", color: "#f8f9fa" }}>
                <div style={{ width: "0.8vw", height: "0.8vw", backgroundColor: "#d4af37", borderRadius: "50%" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1, backgroundColor: "#1a1a1a", border: "1px solid #333333", padding: "4vw", borderRadius: "1vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "4vw", fontWeight: 700, color: "#d4af37", lineHeight: 1, marginBottom: "1vh" }}>85%</div>
          <div style={{ fontSize: "1.5vw", color: "#a0a0a0", marginBottom: "4vh" }}>Increase in efficiency</div>
          
          <div style={{ fontSize: "4vw", fontWeight: 700, color: "#d4af37", lineHeight: 1, marginBottom: "1vh" }}>3x</div>
          <div style={{ fontSize: "1.5vw", color: "#a0a0a0" }}>Faster deployment</div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "4vh" }}>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#666666", letterSpacing: "0.05em" }}>
          2026 / CONFIDENTIAL
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#666666" }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/UrbanGoldenPage3.tsx`)

```tsx
export function UrbanGoldenPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#111111",
        color: "#f8f9fa",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6vh" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.05em", color: "#d4af37" }}>
            acme.co
          </div>
          <div style={{ width: "4vw", height: "0.5vh", backgroundColor: "#d4af37" }} />
        </div>
        <h2 style={{ fontSize: "3vw", fontWeight: 300, color: "#ffffff", margin: 0, letterSpacing: "-0.02em" }}>
          Performance <span style={{ fontWeight: 700, color: "#d4af37" }}>Metrics</span>
        </h2>
      </div>

      <div style={{ display: "flex", flex: 1, gap: "4vw" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: "2vh", paddingBottom: "4vh" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "2vw", height: "40vh", borderBottom: "1px solid #333333", paddingBottom: "2vh" }}>
            {[30, 45, 60, 85, 100].map((height, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div style={{ fontSize: "1vw", color: "#d4af37", fontWeight: 700 }}>{height}%</div>
                <div 
                  style={{ 
                    width: "100%", 
                    height: `${height * 0.35}vh`, 
                    background: i === 4 ? "linear-gradient(180deg, #d4af37 0%, rgba(212,175,55,0.2) 100%)" : "linear-gradient(180deg, #333333 0%, rgba(51,51,51,0.2) 100%)",
                    borderRadius: "0.5vw 0.5vw 0 0"
                  }} 
                />
              </div>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: "0 1vw" }}>
            {["Q1", "Q2", "Q3", "Q4", "Q1 '27"].map((q, i) => (
              <div key={i} style={{ fontSize: "1vw", color: "#666666" }}>{q}</div>
            ))}
          </div>
        </div>

        <div style={{ width: "25vw", display: "flex", flexDirection: "column", gap: "3vh", justifyContent: "center" }}>
          <div style={{ backgroundColor: "#1a1a1a", padding: "3vw", borderRadius: "1vw", borderLeft: "0.5vw solid #d4af37" }}>
            <div style={{ fontSize: "1.2vw", color: "#a0a0a0", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.1em" }}>Revenue Growth</div>
            <div style={{ fontSize: "3.5vw", fontWeight: 700, color: "#ffffff", lineHeight: 1 }}>+$2.4M</div>
          </div>
          <div style={{ backgroundColor: "#1a1a1a", padding: "3vw", borderRadius: "1vw", borderLeft: "0.5vw solid #333333" }}>
            <div style={{ fontSize: "1.2vw", color: "#a0a0a0", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.1em" }}>Market Share</div>
            <div style={{ fontSize: "3.5vw", fontWeight: 300, color: "#ffffff", lineHeight: 1 }}>14.2%</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "4vh" }}>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#666666", letterSpacing: "0.05em" }}>
          2026 / CONFIDENTIAL
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#666666" }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/UrbanGoldenPage4.tsx`)

```tsx
export function UrbanGoldenPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        backgroundColor: "#111111",
        color: "#f8f9fa",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div
        style={{
          width: "40vw",
          height: "100vh",
          backgroundColor: "#d4af37",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.05em", color: "#111111", marginBottom: "2vh" }}>
          acme.co
        </div>
        <div style={{ width: "4vw", height: "0.5vh", backgroundColor: "#111111", marginBottom: "6vh" }} />
        
        <h2 style={{ fontSize: "5vw", fontWeight: 700, color: "#111111", margin: "0 0 2vh 0", lineHeight: 1, letterSpacing: "-0.02em" }}>
          Let's<br />Connect
        </h2>
        <p style={{ fontSize: "1.4vw", color: "rgba(17,17,17,0.7)", margin: 0, maxWidth: "25vw" }}>
          Join us in reshaping the future of urban environments.
        </p>
      </div>

      <div
        style={{
          width: "60vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 8vw",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6vh" }}>
          <div>
            <div style={{ fontSize: "1vw", color: "#666666", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>Email</div>
            <div style={{ fontSize: "2.5vw", fontWeight: 300, color: "#ffffff" }}>hello@acme.co</div>
          </div>
          <div>
            <div style={{ fontSize: "1vw", color: "#666666", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>Office</div>
            <div style={{ fontSize: "2.5vw", fontWeight: 300, color: "#ffffff", lineHeight: 1.3 }}>
              100 Innovation Drive<br />
              San Francisco, CA 94105
            </div>
          </div>
          <div>
            <div style={{ fontSize: "1vw", color: "#666666", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>Phone</div>
            <div style={{ fontSize: "2.5vw", fontWeight: 300, color: "#ffffff" }}>+1 (555) 123-4567</div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "absolute", bottom: "8vh", width: "44vw", left: "8vw" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#666666", letterSpacing: "0.05em" }}>
            2026 / CONFIDENTIAL
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#666666" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
