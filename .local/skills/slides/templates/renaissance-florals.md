# Renaissance Florals

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "RenaissanceFlorals" template embodies a sophisticated and elegant aesthetic, characterized by its dark floral theme. The background features a solid color of #050505 combined with a linear gradient from rgba(0,0,0,0.9) to rgba(0,0,0,0.4), overlaid with a background image sourced from "/__mockup/photos/dark-florals.jpg". Text elements are rendered in #FDFBF7 for primary text, with accents in #D4C5B9 for secondary text and #A89F96 for subtitles, while additional text appears in #8A8179. The primary font used is 'Playfair Display' for headings, conveying a classic feel, while 'DM Sans' is employed for body text, providing a modern contrast. The layout includes a flexible structure with decorative elements positioned to create a balanced composition, featuring ample padding and spacing to enhance readability. The overall aesthetic feel can be described as "elegant, dark, floral."

## Source Code

**Component:** `RenaissanceFlorals`

### Slide 1 — Title (`slide-styles/RenaissanceFlorals.tsx`)

```tsx
export function RenaissanceFlorals() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#050505",
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 100%), url("/__mockup/photos/dark-florals.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FDFBF7",
        fontFamily: "'Playfair Display', Georgia, serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ fontSize: "1.2vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4C5B9" }}>acme.co</div>
        <div style={{ fontSize: "1.2vw", color: "#D4C5B9" }}>2026</div>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "60vw" }}>
        <h1 style={{ fontSize: "8vw", margin: 0, fontWeight: 400, lineHeight: 1, letterSpacing: "-0.02em" }}>Example Deck</h1>
        <p style={{ fontSize: "1.8vw", marginTop: "3vh", fontFamily: "'DM Sans', sans-serif", color: "#A89F96", lineHeight: 1.5, fontWeight: 300, maxWidth: "45vw" }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ fontSize: "1vw", color: "#8A8179", letterSpacing: "0.05em" }}>Example Company, Inc.</div>
        <div style={{ fontSize: "1vw", color: "#8A8179", letterSpacing: "0.05em" }}>Confidential</div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/RenaissanceFloralsPage2.tsx`)

```tsx
export function RenaissanceFloralsPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#050505",
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 100%), url("/__mockup/photos/dark-florals.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FDFBF7",
        fontFamily: "'Playfair Display', Georgia, serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ fontSize: "1.2vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4C5B9" }}>acme.co</div>
        <div style={{ fontSize: "1.2vw", color: "#D4C5B9" }}>Our Philosophy</div>
      </div>
      
      <div style={{ display: "flex", flex: 1, marginTop: "6vh", marginBottom: "6vh" }}>
        <div style={{ flex: "0 0 45%", paddingRight: "4vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontSize: "4.5vw", margin: 0, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
            The art of <br /><span style={{ fontStyle: "italic", color: "#D4C5B9" }}>cultivating</span> beauty.
          </h2>
        </div>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid rgba(212, 197, 185, 0.2)", paddingLeft: "4vw" }}>
          <p style={{ fontSize: "1.6vw", fontFamily: "'DM Sans', sans-serif", color: "#FDFBF7", lineHeight: 1.6, fontWeight: 300, marginBottom: "3vh", marginTop: 0 }}>
            We believe that true elegance lies in the meticulous attention to detail. Every element is carefully chosen to create a harmonious symphony of form and function.
          </p>
          <p style={{ fontSize: "1.4vw", fontFamily: "'DM Sans', sans-serif", color: "#A89F96", lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
            Our approach blends classical aesthetics with modern sensibilities, ensuring that our work stands the test of time while remaining deeply relevant to contemporary life. The delicate balance between heritage and innovation defines our unique signature.
          </p>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ fontSize: "1vw", color: "#8A8179", letterSpacing: "0.05em" }}>Example Company, Inc.</div>
        <div style={{ fontSize: "1vw", color: "#8A8179", letterSpacing: "0.05em" }}>02</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/RenaissanceFloralsPage3.tsx`)

```tsx
export function RenaissanceFloralsPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#050505",
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 100%), url("/__mockup/photos/dark-florals.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FDFBF7",
        fontFamily: "'Playfair Display', Georgia, serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ fontSize: "1.2vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4C5B9" }}>acme.co</div>
        <div style={{ fontSize: "1.2vw", color: "#D4C5B9" }}>Market Presence</div>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", flex: 1, marginTop: "4vh" }}>
        <h2 style={{ fontSize: "3.5vw", margin: "0 0 6vh 0", fontWeight: 400, lineHeight: 1, letterSpacing: "-0.01em" }}>Global Reach</h2>
        
        <div style={{ display: "flex", justifyContent: "space-between", flex: 1, alignItems: "center", gap: "4vw" }}>
          {[
            { region: "Europe", growth: "+42%", value: "$12.4M", desc: "Flagship boutiques and heritage partnerships" },
            { region: "Americas", growth: "+38%", value: "$18.2M", desc: "Rapid expansion in luxury retail sectors" },
            { region: "Asia Pacific", growth: "+64%", value: "$24.8M", desc: "Unprecedented demand in emerging markets" }
          ].map((stat, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", borderTop: "2px solid #D4C5B9", paddingTop: "3vh", height: "100%", justifyContent: "flex-start" }}>
              <div style={{ fontSize: "1.4vw", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.1em", color: "#A89F96", textTransform: "uppercase", marginBottom: "2vh" }}>{stat.region}</div>
              <div style={{ fontSize: "5vw", fontWeight: 400, color: "#FDFBF7", marginBottom: "1vh", lineHeight: 1 }}>{stat.growth}</div>
              <div style={{ fontSize: "2vw", fontStyle: "italic", color: "#D4C5B9", marginBottom: "3vh" }}>{stat.value}</div>
              <p style={{ fontSize: "1.2vw", fontFamily: "'DM Sans', sans-serif", color: "#A89F96", lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "'DM Sans', sans-serif", marginTop: "4vh" }}>
        <div style={{ fontSize: "1vw", color: "#8A8179", letterSpacing: "0.05em" }}>Example Company, Inc.</div>
        <div style={{ fontSize: "1vw", color: "#8A8179", letterSpacing: "0.05em" }}>03</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/RenaissanceFloralsPage4.tsx`)

```tsx
export function RenaissanceFloralsPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#050505",
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 100%), url("/__mockup/photos/dark-florals.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#FDFBF7",
        fontFamily: "'Playfair Display', Georgia, serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ fontSize: "1.2vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4C5B9" }}>acme.co</div>
        <div style={{ fontSize: "1.2vw", color: "#D4C5B9" }}>Next Steps</div>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center" }}>
        <h2 style={{ fontSize: "6.5vw", margin: 0, fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Begin the <span style={{ fontStyle: "italic", color: "#D4C5B9" }}>journey</span>.
        </h2>
        
        <p style={{ fontSize: "1.6vw", fontFamily: "'DM Sans', sans-serif", color: "#A89F96", lineHeight: 1.6, fontWeight: 300, maxWidth: "40vw", marginTop: "4vh", marginBottom: "6vh" }}>
          Discover how our classical approach to modern aesthetics can elevate your brand's presence in a crowded world.
        </p>
        
        <div style={{ 
          padding: "1.5vw 4vw", 
          border: "1px solid #D4C5B9", 
          fontSize: "1.2vw", 
          fontFamily: "'DM Sans', sans-serif", 
          textTransform: "uppercase", 
          letterSpacing: "0.15em",
          color: "#FDFBF7",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          backdropFilter: "blur(4px)"
        }}>
          Contact Our Atelier
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ fontSize: "1vw", color: "#8A8179", letterSpacing: "0.05em" }}>hello@acme.co</div>
        <div style={{ fontSize: "1vw", color: "#8A8179", letterSpacing: "0.05em" }}>04</div>
      </div>
    </div>
  );
}
```
