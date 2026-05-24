# Architecture Studio

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "ArchitectureStudio" template embodies a modern and minimalist aesthetic, primarily featuring a clean and structured layout. The background color is solid white (#FFFFFF), while the text colors include a deep black (#000000) for the main heading, a medium gray (#666666) for the subheading, and a lighter gray (#999999) for the footer text. The font families used are 'Inter' for the heading and body text, providing a contemporary sans-serif feel, and 'Playfair Display' for the italicized subheading, adding a touch of elegance. Key layout elements include a large top section that occupies 60% of the height with a full-width image of a brutalist concrete building, and a bottom section that is centered and padded, featuring a prominent heading and a footer with company details. The background image is sourced from "/__mockup/images/photo-architecture.png". The overall aesthetic feel can be described as sleek and sophisticated.

## Source Code

**Component:** `ArchitectureStudio`

### Slide 1 — Title (`slide-styles/ArchitectureStudio.tsx`)

```tsx
export function ArchitectureStudio() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>
      {/* Top section: Photo 60% */}
      <div style={{ width: "100vw", height: "60vh", position: "relative" }}>
        <img 
          src="/__mockup/images/photo-architecture.png" 
          alt="Brutalist concrete building" 
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
        />
      </div>

      {/* Bottom section: Text 40% */}
      <div style={{ width: "100vw", height: "40vh", position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "4vh 4vw" }}>
        
        <div style={{ textAlign: "center", width: "100%" }}>
          <h1 style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontWeight: 900, 
            fontSize: "5vw", 
            textTransform: "uppercase", 
            letterSpacing: "0.3em", 
            color: "#000000",
            margin: "0 0 2vh 0",
            lineHeight: 1
          }}>
            MONOLITH
          </h1>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "1.5vw",
            color: "#666666",
            margin: 0
          }}>
            Form follows function follows light.
          </p>
        </div>

        {/* Footer */}
        <div style={{ 
          position: "absolute", 
          bottom: "3vh", 
          left: "4vw", 
          right: "4vw", 
          display: "flex", 
          justifyContent: "space-between",
          fontSize: "0.7vw",
          color: "#999999",
          textTransform: "uppercase",
          letterSpacing: "0.1em"
        }}>
          <div>Example Company, Inc. / Confidential</div>
          <div>2026</div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ArchitectureStudioPage2.tsx`)

```tsx
export function ArchitectureStudioPage2() {
  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden", 
      display: "flex", 
      background: "#FFFFFF", 
      fontFamily: "'Inter', sans-serif" 
    }}>
      {/* Left section: Photo 50% */}
      <div style={{ width: "50vw", height: "100vh", position: "relative" }}>
        <img 
          src="/__mockup/images/photo-architecture.png" 
          alt="Monolith Tower Project" 
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} 
        />
      </div>

      {/* Right section: Text 50% */}
      <div style={{ 
        width: "50vw", 
        height: "100vh", 
        position: "relative", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        padding: "8vw" 
      }}>
        
        <h1 style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontWeight: 900, 
          fontSize: "2.5vw", 
          textTransform: "uppercase", 
          letterSpacing: "0.3em", 
          color: "#000000",
          margin: "0 0 4vh 0",
          lineHeight: 1.1
        }}>
          MONOLITH TOWER
        </h1>

        <div style={{ width: "100%", borderTop: "1px solid #000" }}>
          {[
            { label: "Location", value: "São Paulo, Brazil" },
            { label: "Area", value: "42,000 sqm" },
            { label: "Height", value: "187m / 47 floors" },
            { label: "Status", value: "Completed 2025" },
            { label: "Awards", value: "AIA Gold Medal" },
          ].map((detail, idx) => (
            <div key={idx} style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center",
              padding: "2vh 0",
              borderBottom: "1px solid #000"
            }}>
              <span style={{ 
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1vw", 
                color: "#999999",
                letterSpacing: "0.05em"
              }}>
                {detail.label}
              </span>
              <span style={{ 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                fontSize: "1vw", 
                color: "#000000",
                letterSpacing: "0.02em"
              }}>
                {detail.value}
              </span>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "1.2vw",
          color: "#666666",
          marginTop: "6vh"
        }}>
          Form follows function follows light.
        </p>

        {/* Footer */}
        <div style={{ 
          position: "absolute", 
          bottom: "4vh", 
          left: "8vw", 
          right: "8vw", 
          display: "flex", 
          justifyContent: "space-between",
          fontSize: "0.7vw",
          color: "#999999",
          textTransform: "uppercase",
          letterSpacing: "0.1em"
        }}>
          <div>Example Company, Inc. / Confidential</div>
          <div>02</div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ArchitectureStudioPage3.tsx`)

```tsx
export function ArchitectureStudioPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div style={{ padding: "8vh 4vw 0 4vw" }}>
        <h2 style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontWeight: 900, 
          fontSize: "2.5vw", 
          textTransform: "uppercase", 
          letterSpacing: "0.2em", 
          color: "#000000",
          margin: "0 0 1vh 0",
          lineHeight: 1
        }}>
          STRUCTURAL DATA
        </h2>
        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "1.2vw",
          color: "#666666",
          margin: 0
        }}>
          Load bearing capacities and material stress
        </p>
      </div>

      {/* Main Content - Data */}
      <div style={{ flex: 1, padding: "8vh 4vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        {/* Data Point 1 */}
        <div style={{ width: "30%", height: "100%", borderTop: "2px solid #000000", borderBottom: "2px solid #000000", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "6vw", fontWeight: 900, color: "#000000", letterSpacing: "-0.05em", lineHeight: 1 }}>84%</div>
          <div style={{ marginTop: "2vh", fontSize: "1vw", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>CONCRETE DENSITY</div>
        </div>

        {/* Data Point 2 */}
        <div style={{ width: "30%", height: "100%", borderTop: "2px solid #000000", borderBottom: "2px solid #000000", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "6vw", fontWeight: 900, color: "#000000", letterSpacing: "-0.05em", lineHeight: 1 }}>1.2M</div>
          <div style={{ marginTop: "2vh", fontSize: "1vw", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>TENSILE STRENGTH</div>
        </div>

        {/* Data Point 3 */}
        <div style={{ width: "30%", height: "100%", borderTop: "2px solid #000000", borderBottom: "2px solid #000000", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "6vw", fontWeight: 900, color: "#000000", letterSpacing: "-0.05em", lineHeight: 1 }}>450</div>
          <div style={{ marginTop: "2vh", fontSize: "1vw", color: "#666666", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>METRIC TONS</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        position: "absolute", 
        bottom: "3vh", 
        left: "4vw", 
        right: "4vw", 
        display: "flex", 
        justifyContent: "space-between",
        fontSize: "0.7vw",
        color: "#999999",
        textTransform: "uppercase",
        letterSpacing: "0.1em"
      }}>
        <div>Example Company, Inc. / Confidential</div>
        <div>03</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ArchitectureStudioPage4.tsx`)

```tsx
export function ArchitectureStudioPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column", background: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "4vh 4vw" }}>
        
        <h1 style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontWeight: 900, 
          fontSize: "6vw", 
          textTransform: "uppercase", 
          letterSpacing: "0.2em", 
          color: "#000000",
          margin: "0 0 2vh 0",
          lineHeight: 1,
          textAlign: "center"
        }}>
          BUILD<br />WITH US
        </h1>
        
        <div style={{ 
          width: "8vw", 
          height: "4px", 
          background: "#000000", 
          margin: "4vh 0" 
        }} />

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "1.8vw",
          color: "#666666",
          margin: "0 0 6vh 0",
          textAlign: "center",
          maxWidth: "40vw"
        }}>
          Contact our structural engineering team to begin the initial consultation.
        </p>

        <div style={{
          padding: "2vh 4vw",
          border: "2px solid #000000",
          fontSize: "1vw",
          fontWeight: 600,
          letterSpacing: "0.2em",
          color: "#000000",
          textTransform: "uppercase"
        }}>
          STUDIO@MONOLITH.COM
        </div>

      </div>

      {/* Footer */}
      <div style={{ 
        position: "absolute", 
        bottom: "3vh", 
        left: "4vw", 
        right: "4vw", 
        display: "flex", 
        justifyContent: "space-between",
        fontSize: "0.7vw",
        color: "#999999",
        textTransform: "uppercase",
        letterSpacing: "0.1em"
      }}>
        <div>Example Company, Inc. / Confidential</div>
        <div>04</div>
      </div>
    </div>
  );
}
```
