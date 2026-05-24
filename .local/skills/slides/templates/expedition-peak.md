# Expedition Peak

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "ExpeditionPeak" template embodies a modern, adventurous aesthetic, suitable for presentations related to exploration or innovation. The background features a solid color of #111 (dark gray) combined with a gradient that transitions from rgba(0,0,0,0.9) to rgba(0,0,0,0.1), overlaid with a background image of a dramatic mountain scene located at "/__mockup/photos/mountain-dramatic.jpg". Text elements are rendered in white (#fff), with the font family set to 'Space Grotesk', sans-serif for a contemporary feel. Key layout elements include a flexible column structure with a prominent title ("Example Deck") in a large font size of 8vw, a decorative white line, and a footer with a subtle border, creating a clean and organized presentation. The overall aesthetic feel can be described as "modern adventure."

## Source Code

**Component:** `ExpeditionPeak`

### Slide 1 — Title (`slide-styles/ExpeditionPeak.tsx`)

```tsx
export function ExpeditionPeak() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#111",
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%), url("/__mockup/photos/mountain-dramatic.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.2vw", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, opacity: 0.7 }}>
          2026
        </div>
      </div>
      
      <div style={{ marginBottom: "5vh" }}>
        <h1 style={{ fontSize: "8vw", fontWeight: 700, margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
          Example Deck
        </h1>
        <div style={{ width: "10vw", height: "0.5vh", backgroundColor: "#fff", margin: "4vh 0" }} />
        <p style={{ fontSize: "2vw", fontWeight: 300, maxWidth: "50vw", margin: 0, opacity: 0.9, lineHeight: 1.4 }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "2vh" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, opacity: 0.6, letterSpacing: "0.05em" }}>
          Example Company, Inc. / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ExpeditionPeakPage2.tsx`)

```tsx
export function ExpeditionPeakPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#111",
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%), url("/__mockup/photos/mountain-dramatic.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.2vw", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, opacity: 0.7 }}>
          Our Approach
        </div>
      </div>
      
      <div style={{ display: "flex", flex: 1, marginTop: "8vh", marginBottom: "5vh" }}>
        <div style={{ flex: 1, paddingRight: "5vw" }}>
          <h2 style={{ fontSize: "4vw", fontWeight: 700, margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Reaching the Summit
          </h2>
          <div style={{ width: "6vw", height: "0.5vh", backgroundColor: "#fff", margin: "3vh 0" }} />
          <p style={{ fontSize: "1.5vw", fontWeight: 300, margin: 0, opacity: 0.8, lineHeight: 1.5 }}>
            Our strategy is built on resilience, forward planning, and flawless execution. We navigate complex terrain to deliver unparalleled results for our partners, scaling every obstacle.
          </p>
        </div>
        
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "4vh" }}>
          {[
            { title: "Preparation", desc: "Rigorous planning and assessment before every major initiative." },
            { title: "Adaptability", desc: "Dynamic pivoting to meet unexpected challenges in the market." },
            { title: "Endurance", desc: "Long-term vision securing sustainable growth and impact." }
          ].map((item, i) => (
            <div key={i} style={{ backgroundColor: "rgba(255,255,255,0.05)", padding: "3vh 2vw", borderLeft: "0.3vw solid #fff", backdropFilter: "blur(10px)" }}>
              <h3 style={{ fontSize: "1.8vw", fontWeight: 600, margin: "0 0 1vh 0" }}>{item.title}</h3>
              <p style={{ fontSize: "1.2vw", fontWeight: 300, margin: 0, opacity: 0.7, lineHeight: 1.4 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "2vh" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, opacity: 0.6, letterSpacing: "0.05em" }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, opacity: 0.6 }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ExpeditionPeakPage3.tsx`)

```tsx
export function ExpeditionPeakPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#111",
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%), url("/__mockup/photos/mountain-dramatic.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.2vw", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, opacity: 0.7 }}>
          Key Metrics
        </div>
      </div>
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "4vh" }}>
        <h2 style={{ fontSize: "3.5vw", fontWeight: 700, margin: "0 0 1vh 0", lineHeight: 1.1, letterSpacing: "-0.02em", textAlign: "center" }}>
          Performance at Altitude
        </h2>
        <p style={{ fontSize: "1.5vw", fontWeight: 300, margin: "0 auto 6vh auto", opacity: 0.8, textAlign: "center", maxWidth: "60vw" }}>
          By tracking our key indicators, we maintain steady progress toward our strategic summit.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "4vw" }}>
          {[
            { value: "4,500+", label: "New Partnerships", subtitle: "Formed globally this year" },
            { value: "98%", label: "Client Retention", subtitle: "Consistently exceeding norms" },
            { value: "12x", label: "Revenue Growth", subtitle: "Compared to previous fiscal" }
          ].map((stat, i) => (
            <div key={i} style={{ 
              flex: 1, 
              backgroundColor: "rgba(0,0,0,0.4)", 
              border: "1px solid rgba(255,255,255,0.1)",
              padding: "5vh 3vw", 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center",
              textAlign: "center",
              backdropFilter: "blur(12px)"
            }}>
              <div style={{ fontSize: "4.5vw", fontWeight: 700, margin: "0 0 1vh 0", color: "#fff", letterSpacing: "-0.02em" }}>
                {stat.value}
              </div>
              <div style={{ width: "3vw", height: "0.4vh", backgroundColor: "#fff", margin: "1vh 0 2vh 0" }} />
              <div style={{ fontSize: "1.4vw", fontWeight: 500, marginBottom: "0.5vh" }}>
                {stat.label}
              </div>
              <div style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.6 }}>
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "2vh", marginTop: "4vh" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, opacity: 0.6, letterSpacing: "0.05em" }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, opacity: 0.6 }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ExpeditionPeakPage4.tsx`)

```tsx
export function ExpeditionPeakPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#111",
        backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%), url("/__mockup/photos/mountain-dramatic.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.2vw", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, opacity: 0.7 }}>
          Next Steps
        </div>
      </div>
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <h2 style={{ fontSize: "6vw", fontWeight: 700, margin: "0 0 2vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Begin Your Journey
        </h2>
        <p style={{ fontSize: "1.8vw", fontWeight: 300, margin: "0 0 6vh 0", opacity: 0.9, maxWidth: "50vw", lineHeight: 1.4 }}>
          The path forward requires vision, courage, and the right partner. Let us scale new heights together.
        </p>
        
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ 
            padding: "2vh 4vw", 
            backgroundColor: "#fff", 
            color: "#000", 
            fontSize: "1.2vw", 
            fontWeight: 600, 
            textTransform: "uppercase", 
            letterSpacing: "0.1vw",
            cursor: "pointer"
          }}>
            Partner With Us
          </div>
          <div style={{ 
            padding: "2vh 4vw", 
            backgroundColor: "transparent", 
            color: "#fff", 
            border: "0.2vw solid #fff",
            fontSize: "1.2vw", 
            fontWeight: 600, 
            textTransform: "uppercase", 
            letterSpacing: "0.1vw",
            cursor: "pointer"
          }}>
            View Case Studies
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "2vh" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, opacity: 0.6, letterSpacing: "0.05em" }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, opacity: 0.6 }}>
          04
        </div>
      </div>
    </div>
  );
}
```
