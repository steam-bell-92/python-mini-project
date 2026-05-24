# Ocean Breeze

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "OceanBreeze" template features a clean and modern aesthetic, evoking a serene coastal vibe. The background is an image of an ocean aerial view located at the URL "/__mockup/photos/ocean-aerial.jpg", styled to cover the entire viewport. The overlay has a semi-transparent white background with an RGBA value of rgba(255, 255, 255, 0.85), complemented by a backdrop blur effect. Text colors include a deep blue (#1a365d) for the header, a lighter blue (#2c5282) for the main title, and a muted gray (#4a5568) for subtitles and additional text. The font families used are 'DM Sans' for general text and 'Playfair Display' for the main title, enhancing the template's elegant feel. Key layout elements include rounded corners, a shadow effect for depth, and a structured arrangement of text and decorative lines, contributing to an overall aesthetic that feels fresh and inviting.

## Source Code

**Component:** `OceanBreeze`

### Slide 1 — Title (`slide-styles/OceanBreeze.tsx`)

```tsx
export function OceanBreeze() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: 'url("/__mockup/photos/ocean-aerial.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          width: "80vw",
          height: "70vh",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          borderRadius: "2vw",
          padding: "6vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          boxShadow: "0 2vh 4vh rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1a365d", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#4a5568", letterSpacing: "0.05em" }}>
            2026
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "8vw",
              fontWeight: 400,
              color: "#2c5282",
              margin: "0 0 2vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Example Deck
          </h1>
          <p
            style={{
              fontSize: "1.8vw",
              fontWeight: 400,
              color: "#4a5568",
              margin: "0 auto",
              maxWidth: "50vw",
              lineHeight: 1.5,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(44, 82, 130, 0.2)", paddingTop: "3vh" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#2c5282" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 400, color: "#718096", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Confidential
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/OceanBreezePage2.tsx`)

```tsx
export function OceanBreezePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: 'url("/__mockup/photos/ocean-aerial.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          width: "80vw",
          height: "70vh",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          borderRadius: "2vw",
          padding: "6vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          boxShadow: "0 2vh 4vh rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1a365d", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#4a5568", letterSpacing: "0.05em" }}>
            2026
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "4vh" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4vw",
              fontWeight: 400,
              color: "#2c5282",
              margin: "0 0 4vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            The Ocean Paradigm
          </h2>
          
          <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontSize: "1.5vw",
                  fontWeight: 400,
                  color: "#4a5568",
                  margin: "0 0 2vh 0",
                  lineHeight: 1.6,
                }}
              >
                Our approach emphasizes fluidity and adaptability in an ever-changing market. Just as the ocean shapes the coastline, our strategies continuously refine and optimize your business operations.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Sustainable Growth", "Deep Analytics", "Current Trends", "Wave Momentum"].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", marginBottom: "1.5vh" }}>
                    <span style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#3182ce", marginRight: "1vw", display: "inline-block" }}></span>
                    <span style={{ fontSize: "1.2vw", color: "#2d3748" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ flex: 1, backgroundColor: "rgba(49, 130, 206, 0.1)", borderRadius: "1vw", padding: "3vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: "1.4vw", color: "#2b6cb0", fontStyle: "italic", lineHeight: 1.5, fontFamily: "'Playfair Display', serif" }}>
                "We harness the natural momentum of your industry to propel you forward, navigating through the complexities with unparalleled clarity and focus."
              </div>
              <div style={{ marginTop: "2vh", fontSize: "1.1vw", color: "#4a5568", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                &mdash; The Executive Team
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(44, 82, 130, 0.2)", paddingTop: "3vh", marginTop: "4vh" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#2c5282" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 400, color: "#718096", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/OceanBreezePage3.tsx`)

```tsx
export function OceanBreezePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: 'url("/__mockup/photos/ocean-aerial.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          width: "80vw",
          height: "70vh",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          borderRadius: "2vw",
          padding: "6vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          boxShadow: "0 2vh 4vh rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1a365d", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#4a5568", letterSpacing: "0.05em" }}>
            2026
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "4vh" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4vw",
              fontWeight: 400,
              color: "#2c5282",
              margin: "0 0 2vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Metrics Overview
          </h2>
          <p
            style={{
              fontSize: "1.5vw",
              fontWeight: 400,
              color: "#4a5568",
              margin: "0 0 4vh 0",
            }}
          >
            A clear view of our global impact and continued market expansion.
          </p>
          
          <div style={{ display: "flex", gap: "2vw", flex: 1 }}>
            {[
              { label: "Active Users", value: "2.4M", trend: "+14%", color: "#3182ce" },
              { label: "Retention Rate", value: "94%", trend: "+5%", color: "#2b6cb0" },
              { label: "Global Reach", value: "48", trend: "Countries", color: "#2c5282" },
            ].map((metric, i) => (
              <div key={i} style={{ flex: 1, backgroundColor: "rgba(255, 255, 255, 0.6)", borderRadius: "1.5vw", padding: "3vw", display: "flex", flexDirection: "column", justifyContent: "space-between", border: "1px solid rgba(49, 130, 206, 0.2)" }}>
                <div style={{ fontSize: "1.2vw", color: "#4a5568", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {metric.label}
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "4.5vw", color: metric.color, lineHeight: 1, marginBottom: "1vh" }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: "1.4vw", color: "#38a169", fontWeight: 500 }}>
                    {metric.trend}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(44, 82, 130, 0.2)", paddingTop: "3vh", marginTop: "4vh" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#2c5282" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 400, color: "#718096", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/OceanBreezePage4.tsx`)

```tsx
export function OceanBreezePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: 'url("/__mockup/photos/ocean-aerial.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <div
        style={{
          width: "80vw",
          height: "70vh",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          backdropFilter: "blur(10px)",
          borderRadius: "2vw",
          padding: "6vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          boxShadow: "0 2vh 4vh rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1a365d", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#4a5568", letterSpacing: "0.05em" }}>
            2026
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6vw",
              fontWeight: 400,
              color: "#2c5282",
              margin: "0 0 3vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Dive Deeper
          </h2>
          <p
            style={{
              fontSize: "1.8vw",
              fontWeight: 400,
              color: "#4a5568",
              margin: "0 0 6vh 0",
              maxWidth: "50vw",
              lineHeight: 1.5,
            }}
          >
            Ready to explore the opportunities ahead? Let's connect and chart the course for our shared success.
          </p>
          
          <div style={{ display: "flex", gap: "3vw" }}>
            <div style={{ fontSize: "1.2vw", color: "#2c5282", fontWeight: 500, padding: "1.5vh 3vw", border: "2px solid #2c5282", borderRadius: "3vw" }}>
              hello@acme.co
            </div>
            <div style={{ fontSize: "1.2vw", color: "#fff", fontWeight: 500, padding: "1.5vh 3vw", backgroundColor: "#2c5282", borderRadius: "3vw" }}>
              Visit Website
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(44, 82, 130, 0.2)", paddingTop: "3vh" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#2c5282" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 400, color: "#718096", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
