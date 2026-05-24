# Tropical Lush

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "TropicalLush" template embodies a lush, nature-inspired aesthetic. It features a background color of #0A120D, complemented by a linear gradient that transitions from rgba(10, 18, 13, 0.9) to rgba(10, 18, 13, 0.2), overlaid with a background image of a forest canopy located at "/__mockup/photos/forest-canopy.jpg". The text color is primarily #F4F7F5, with accents in #8EAF96 for secondary text, and #D1E0D5 for paragraph text. The font families used are 'Inter' for general text and 'Playfair Display' for the main heading, creating a contrast between modern and classic styles. Key layout elements include a flexible column layout with padding, a border accent on the paragraph, and a structured positioning of text elements that enhances readability. The overall aesthetic feel is "natural elegance."

## Source Code

**Component:** `TropicalLush`

### Slide 1 — Title (`slide-styles/TropicalLush.tsx`)

```tsx
export function TropicalLush() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A120D",
        backgroundImage: 'linear-gradient(to right, rgba(10, 18, 13, 0.9) 0%, rgba(10, 18, 13, 0.7) 40%, rgba(10, 18, 13, 0.2) 100%), url("/__mockup/photos/forest-canopy.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#F4F7F5",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "40vw" }}>
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8EAF96" }}>
          acme.co
        </div>
      </div>

      <div style={{ maxWidth: "45vw" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "7vw",
            fontWeight: 400,
            margin: "0 0 3vh 0",
            lineHeight: 1.1,
            color: "#FFFFFF",
          }}
        >
          Example Deck
        </h1>
        <p
          style={{
            fontSize: "1.5vw",
            fontWeight: 300,
            color: "#D1E0D5",
            lineHeight: 1.6,
            margin: 0,
            borderLeft: "2px solid #8EAF96",
            paddingLeft: "2vw",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "40vw" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8EAF96", letterSpacing: "0.05em" }}>
          Example Company, Inc.
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8EAF96", letterSpacing: "0.05em" }}>
          2026 / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/TropicalLushPage2.tsx`)

```tsx
export function TropicalLushPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A120D",
        backgroundImage: 'linear-gradient(to right, rgba(10, 18, 13, 0.95) 0%, rgba(10, 18, 13, 0.85) 60%, rgba(10, 18, 13, 0.3) 100%), url("/__mockup/photos/forest-canopy.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#F4F7F5",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8EAF96" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8EAF96" }}>
          02
        </div>
      </div>

      <div style={{ display: "flex", gap: "8vw", flex: 1, marginTop: "8vh" }}>
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4vw",
              fontWeight: 400,
              margin: "0 0 4vh 0",
              lineHeight: 1.1,
              color: "#FFFFFF",
            }}
          >
            Sustainable Growth
          </h2>
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 300,
              color: "#D1E0D5",
              lineHeight: 1.6,
              margin: "0 0 3vh 0",
            }}
          >
            Our core philosophy centers around nurturing an environment where innovation thrives naturally, much like a well-tended ecosystem. We believe in sustainable practices that promote long-term vitality.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            {[
              "Organic scaling methodologies",
              "Symbiotic partnership models",
              "Renewable resource allocation",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#8EAF96", borderRadius: "50%" }}></div>
                <span style={{ fontSize: "1.1vw", fontWeight: 300, color: "#F4F7F5" }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ flex: 1 }}></div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8EAF96", letterSpacing: "0.05em" }}>
          Example Company, Inc.
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8EAF96", letterSpacing: "0.05em" }}>
          2026 / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/TropicalLushPage3.tsx`)

```tsx
export function TropicalLushPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A120D",
        backgroundImage: 'linear-gradient(to bottom, rgba(10, 18, 13, 0.95) 0%, rgba(10, 18, 13, 0.8) 100%), url("/__mockup/photos/forest-canopy.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#F4F7F5",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8EAF96" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8EAF96" }}>
          03
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyItems: "center", flex: 1, padding: "4vh 0", marginTop: "6vh" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3.5vw",
            fontWeight: 400,
            margin: "0 0 8vh 0",
            lineHeight: 1.1,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          Ecosystem Vitality
        </h2>
        
        <div style={{ display: "flex", justifyContent: "space-between", width: "100%", maxWidth: "70vw", gap: "4vw" }}>
          {[
            { value: "40%", label: "Canopy Growth" },
            { value: "120M", label: "Seedlings Planted" },
            { value: "85%", label: "Water Retention" }
          ].map((stat, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "4vh 2vw", borderTop: "2px solid #8EAF96", backgroundColor: "rgba(142, 175, 150, 0.05)" }}>
              <div style={{ 
                fontFamily: "'Playfair Display', serif",
                fontSize: "5vw", 
                fontWeight: 400, 
                color: "#FFFFFF",
                marginBottom: "1vh"
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "1.1vw", fontWeight: 300, color: "#D1E0D5", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8EAF96", letterSpacing: "0.05em" }}>
          Example Company, Inc.
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8EAF96", letterSpacing: "0.05em" }}>
          2026 / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/TropicalLushPage4.tsx`)

```tsx
export function TropicalLushPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A120D",
        backgroundImage: 'linear-gradient(to top right, rgba(10, 18, 13, 0.95) 0%, rgba(10, 18, 13, 0.6) 100%), url("/__mockup/photos/forest-canopy.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#F4F7F5",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8EAF96" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8EAF96" }}>
          04
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", flex: 1, textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6vw",
            fontWeight: 400,
            margin: "0 0 3vh 0",
            lineHeight: 1.1,
            color: "#FFFFFF",
          }}
        >
          Let's Cultivate.
        </h1>
        <p
          style={{
            fontSize: "1.5vw",
            fontWeight: 300,
            color: "#D1E0D5",
            lineHeight: 1.6,
            margin: "0 0 6vh 0",
            maxWidth: "40vw"
          }}
        >
          Join us in nurturing the next generation of sustainable ventures.
        </p>
        
        <div style={{ display: "flex", gap: "4vw" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
            <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#8EAF96" }}>Email</span>
            <span style={{ fontSize: "1.2vw", fontWeight: 300 }}>hello@acme.co</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
            <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#8EAF96" }}>Website</span>
            <span style={{ fontSize: "1.2vw", fontWeight: 300 }}>acme.co</span>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8EAF96", letterSpacing: "0.05em" }}>
          Example Company, Inc.
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8EAF96", letterSpacing: "0.05em" }}>
          2026 / Confidential
        </div>
      </div>
    </div>
  );
}
```
