# Infographic Title

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "InfographicTitle" template presents a modern and clean aesthetic, characterized by a professional layout suitable for data presentation. The background color is a solid light gray (#F0F2F5), while the stat cards feature soft pastel colors: soft blue (#E0E7ED), soft green (#E1EDE4), and soft orange (#F0E4D8). Text colors include a dark slate (#1A1A2E) for headings and key information, a medium gray (#5A5A6E) for subtitles, and a lighter gray (#888) for secondary text. The font family used is 'Inter', sans-serif, which is applied to all text elements for a cohesive look. Key layout elements include a flexible two-column structure with a left side for text and a right side for stat cards, each card having rounded corners and a subtle shadow for depth. Overall, the aesthetic feel can be described as "modern, professional, clean."

## Source Code

**Component:** `InfographicTitle`

### Slide 1 — Title (`slide-styles/InfographicTitle.tsx`)

```tsx
export function InfographicTitle() {
  const statCards = [
    { num: "01", label: "KEY METRIC", color: "#E0E7ED" },   // soft blue
    { num: "02", label: "GROWTH DATA", color: "#E1EDE4" },  // soft green
    { num: "03", label: "MARKET SHARE", color: "#F0E4D8" }  // soft orange
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F0F2F5",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "6vh", left: "6vw", fontSize: "1.2vw", fontWeight: 600, color: "#1A1A2E" }}>
        acme.co
      </div>
      <div style={{ position: "absolute", top: "6vh", right: "6vw", fontSize: "1.2vw", color: "#888" }}>
        2026 / Confidential
      </div>

      <div style={{ display: "flex", width: "100%", height: "100%", marginTop: "10vh" }}>
        {/* Left side: Text */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "4vw" }}>
          <h1
            style={{
              fontSize: "8vw",
              fontWeight: 800,
              color: "#1A1A2E",
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Example<br />Deck
          </h1>
          <p
            style={{
              fontSize: "2vw",
              color: "#5A5A6E",
              marginTop: "4vh",
              maxWidth: "40vw",
              lineHeight: 1.4,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
          <div style={{ marginTop: "auto", fontSize: "1vw", color: "#999" }}>
            Example Company, Inc.
          </div>
        </div>

        {/* Right side: Stat cards */}
        <div style={{ width: "35vw", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3vh" }}>
          {statCards.map((card, i) => (
            <div
              key={i}
              style={{
                backgroundColor: card.color,
                borderRadius: "1.5vw",
                padding: "3vh 3vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 1vh 2vh rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ fontSize: "5vw", fontWeight: 800, color: "#1A1A2E", letterSpacing: "-0.05em" }}>
                {card.num}
              </div>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#5A5A6E", letterSpacing: "0.1em" }}>
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/InfographicTitlePage2.tsx`)

```tsx
export function InfographicTitlePage2() {
  const points = [
    { title: "Research Phase", desc: "Gathering insights from market data.", color: "#E0E7ED" },
    { title: "Development", desc: "Building the core infrastructure.", color: "#E1EDE4" },
    { title: "Launch", desc: "Executing the go-to-market strategy.", color: "#F0E4D8" }
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F0F2F5",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "6vh", left: "6vw", fontSize: "1.2vw", fontWeight: 600, color: "#1A1A2E" }}>
        acme.co
      </div>
      <div style={{ position: "absolute", top: "6vh", right: "6vw", fontSize: "1.2vw", color: "#888" }}>
        2026 / Confidential
      </div>
      <div style={{ position: "absolute", bottom: "6vh", right: "6vw", fontSize: "1.2vw", color: "#888" }}>
        02
      </div>

      <div style={{ marginTop: "12vh", marginBottom: "4vh" }}>
        <h2 style={{ fontSize: "4vw", fontWeight: 800, color: "#1A1A2E", margin: 0, letterSpacing: "-0.04em" }}>
          Strategic Approach
        </h2>
        <p style={{ fontSize: "1.5vw", color: "#5A5A6E", marginTop: "2vh", maxWidth: "60vw", lineHeight: 1.4 }}>
          Our methodology ensures comprehensive coverage from initial concept to final execution, delivering sustained value.
        </p>
      </div>

      <div style={{ display: "flex", flex: 1, gap: "4vw", marginTop: "4vh" }}>
        {points.map((pt, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ height: "40vh", backgroundColor: pt.color, borderRadius: "1.5vw", marginBottom: "3vh", boxShadow: "0 1vh 2vh rgba(0,0,0,0.02)" }} />
            <h3 style={{ fontSize: "2vw", fontWeight: 700, color: "#1A1A2E", margin: "0 0 1.5vh 0", letterSpacing: "-0.02em" }}>{pt.title}</h3>
            <p style={{ fontSize: "1.2vw", color: "#5A5A6E", margin: 0, lineHeight: 1.5 }}>{pt.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/InfographicTitlePage3.tsx`)

```tsx
export function InfographicTitlePage3() {
  const bars = [
    { label: "Q1", value: 40, color: "#E0E7ED" },
    { label: "Q2", value: 65, color: "#E1EDE4" },
    { label: "Q3", value: 85, color: "#F0E4D8" },
    { label: "Q4", value: 100, color: "#1A1A2E" }
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F0F2F5",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "6vh", left: "6vw", fontSize: "1.2vw", fontWeight: 600, color: "#1A1A2E" }}>
        acme.co
      </div>
      <div style={{ position: "absolute", top: "6vh", right: "6vw", fontSize: "1.2vw", color: "#888" }}>
        2026 / Confidential
      </div>
      <div style={{ position: "absolute", bottom: "6vh", right: "6vw", fontSize: "1.2vw", color: "#888" }}>
        03
      </div>

      <div style={{ display: "flex", width: "100%", height: "100%", marginTop: "12vh" }}>
        {/* Left side text */}
        <div style={{ width: "40vw", paddingRight: "6vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: "4.5vw", fontWeight: 800, color: "#1A1A2E", margin: 0, lineHeight: 1.1, letterSpacing: "-0.04em" }}>
            Performance<br />Metrics
          </h2>
          <p style={{ fontSize: "1.5vw", color: "#5A5A6E", marginTop: "3vh", lineHeight: 1.4 }}>
            Significant quarter-over-quarter growth demonstrated across all major KPIs, establishing a strong foundation for next year.
          </p>
          
          <div style={{ display: "flex", gap: "2vw", marginTop: "6vh" }}>
            <div>
              <div style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1A1A2E" }}>+150%</div>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#5A5A6E", letterSpacing: "0.05em", marginTop: "1vh" }}>YOY REVENUE</div>
            </div>
            <div>
              <div style={{ fontSize: "3.5vw", fontWeight: 800, color: "#1A1A2E" }}>2.4M</div>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#5A5A6E", letterSpacing: "0.05em", marginTop: "1vh" }}>ACTIVE USERS</div>
            </div>
          </div>
        </div>

        {/* Right side chart */}
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingBottom: "10vh", gap: "2vw" }}>
          {bars.map((bar, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1 }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1A1A2E", marginBottom: "2vh" }}>{bar.value}%</div>
              <div 
                style={{ 
                  width: "100%", 
                  height: `${bar.value * 0.45}vh`, 
                  backgroundColor: bar.color, 
                  borderRadius: "1vw 1vw 0 0",
                  boxShadow: "0 1vh 2vh rgba(0,0,0,0.02)"
                }} 
              />
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#5A5A6E", marginTop: "2vh" }}>{bar.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/InfographicTitlePage4.tsx`)

```tsx
export function InfographicTitlePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F0F2F5",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: "6vh", left: "6vw", fontSize: "1.2vw", fontWeight: 600, color: "#1A1A2E" }}>
        acme.co
      </div>
      <div style={{ position: "absolute", top: "6vh", right: "6vw", fontSize: "1.2vw", color: "#888" }}>
        2026 / Confidential
      </div>
      <div style={{ position: "absolute", bottom: "6vh", right: "6vw", fontSize: "1.2vw", color: "#888" }}>
        04
      </div>

      <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
        <div style={{ 
          backgroundColor: "#1A1A2E", 
          borderRadius: "2vw", 
          padding: "10vh 8vw",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <div style={{ maxWidth: "45vw" }}>
            <h2 style={{ fontSize: "6vw", fontWeight: 800, color: "#F0F2F5", margin: 0, lineHeight: 1.1, letterSpacing: "-0.04em" }}>
              Let's build<br />the future.
            </h2>
            <p style={{ fontSize: "1.5vw", color: "#A0A0B0", marginTop: "4vh", lineHeight: 1.5 }}>
              Ready to transform your vision into reality? Our team is standing by to help you take the next step.
            </p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
            <div style={{ backgroundColor: "#F0F2F5", padding: "3vh 4vw", borderRadius: "1vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#5A5A6E", letterSpacing: "0.1em", marginBottom: "0.5vh" }}>EMAIL US</div>
              <div style={{ fontSize: "1.8vw", fontWeight: 600, color: "#1A1A2E" }}>hello@acme.co</div>
            </div>
            <div style={{ backgroundColor: "#F0F2F5", padding: "3vh 4vw", borderRadius: "1vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, color: "#5A5A6E", letterSpacing: "0.1em", marginBottom: "0.5vh" }}>CALL US</div>
              <div style={{ fontSize: "1.8vw", fontWeight: 600, color: "#1A1A2E" }}>+1 (555) 123-4567</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
