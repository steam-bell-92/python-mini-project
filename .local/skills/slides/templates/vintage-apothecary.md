# Vintage Apothecary

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "VintageApothecary" template embodies a warm, vintage aesthetic reminiscent of old apothecary labels. It features a background color of #EBE3D5 (warm parchment) and uses a dark forest green (#2C3E2D) for text and accent elements. The font family is primarily 'Playfair Display' for headings and Georgia, serif for body text, providing a classic and elegant feel. Key layout elements include a thick outer border, inner double border, and decorative corner ornaments, all styled with circular shapes and lines. There are no background images specified in the code. The overall aesthetic feel can be described as "classic vintage."

## Source Code

**Component:** `VintageApothecary`

### Slide 1 — Title (`slide-styles/VintageApothecary.tsx`)

```tsx
export function VintageApothecary() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EBE3D5", // Warm parchment
        fontFamily: "'Playfair Display', Georgia, serif",
        color: "#2C3E2D", // Dark forest green
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "3vw",
        position: "relative",
      }}
    >
      {/* Texture overlay (CSS gradient simulation) */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 40%, rgba(139, 115, 85, 0.1) 100%)", pointerEvents: "none" }} />

      {/* Outer thick border */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "0.8vw solid #2C3E2D",
          padding: "0.8vw",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Inner double border */}
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "0.2vw solid #2C3E2D",
            outline: "0.1vw solid #2C3E2D",
            outlineOffset: "-0.4vw",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Top Section */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2vw 4vw", borderBottom: "0.2vw solid #2C3E2D" }}>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 700 }}>
              Est. 2026
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
              <div style={{ width: "3vw", height: "0.1vw", backgroundColor: "#2C3E2D" }} />
              <div style={{ fontSize: "1.5vw", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
                acme.co
              </div>
              <div style={{ width: "3vw", height: "0.1vw", backgroundColor: "#2C3E2D" }} />
            </div>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 700 }}>
              Vol. 01
            </div>
          </div>

          {/* Center Content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 10vw", textAlign: "center", position: "relative" }}>
            
            {/* Corner Ornaments (CSS circles and lines) */}
            <div style={{ position: "absolute", top: "2vw", left: "2vw", width: "2vw", height: "2vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.8vw", height: "0.8vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", top: "2vw", right: "2vw", width: "2vw", height: "2vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.8vw", height: "0.8vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", bottom: "2vw", left: "2vw", width: "2vw", height: "2vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.8vw", height: "0.8vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", bottom: "2vw", right: "2vw", width: "2vw", height: "2vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.8vw", height: "0.8vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>

            <div style={{ fontSize: "1.2vw", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "3vh", fontWeight: 600 }}>
              Genuine & Authentic
            </div>

            <h1 style={{ fontSize: "8vw", fontStyle: "italic", fontWeight: 700, margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
              Example Deck
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "2vw", margin: "4vh 0", width: "100%", justifyContent: "center" }}>
              <div style={{ width: "15vw", height: "0.1vw", backgroundColor: "#2C3E2D" }} />
              <div style={{ width: "1vw", height: "1vw", transform: "rotate(45deg)", border: "0.15vw solid #2C3E2D" }} />
              <div style={{ width: "15vw", height: "0.1vw", backgroundColor: "#2C3E2D" }} />
            </div>

            <p style={{ fontSize: "2vw", color: "#4A5D4E", maxWidth: "60vw", lineHeight: 1.5, margin: 0, fontStyle: "italic" }}>
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>

            <div style={{ marginTop: "5vh", padding: "1vw 2vw", border: "0.15vw dashed #2C3E2D", fontSize: "1vw", letterSpacing: "0.2em", textTransform: "uppercase", backgroundColor: "rgba(44,62,45,0.05)" }}>
              Prepared by Example Company, Inc.
            </div>
          </div>

          {/* Bottom Section */}
          <div style={{ display: "flex", borderTop: "0.2vw solid #2C3E2D", height: "10vh" }}>
            <div style={{ flex: 1, borderRight: "0.2vw solid #2C3E2D", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 2vw" }}>
              <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.2em", textAlign: "center" }}>
                Guaranteed Quality
              </div>
            </div>
            <div style={{ flex: 2, borderRight: "0.2vw solid #2C3E2D", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 2vw" }}>
              <div style={{ fontSize: "1.2vw", fontStyle: "italic", textAlign: "center" }}>
                Confidential Document • Handle with Care
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 2vw" }}>
              <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.2em", textAlign: "center" }}>
                Strictly Private
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/VintageApothecaryPage2.tsx`)

```tsx
export function VintageApothecaryPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EBE3D5",
        fontFamily: "'Playfair Display', Georgia, serif",
        color: "#2C3E2D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "3vw",
        position: "relative",
      }}
    >
      {/* Texture overlay */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 40%, rgba(139, 115, 85, 0.1) 100%)", pointerEvents: "none" }} />

      {/* Outer thick border */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "0.8vw solid #2C3E2D",
          padding: "0.8vw",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Inner double border */}
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "0.2vw solid #2C3E2D",
            outline: "0.1vw solid #2C3E2D",
            outlineOffset: "-0.4vw",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2vw 4vw", borderBottom: "0.2vw solid #2C3E2D" }}>
            <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
              Section I
            </div>
            <div style={{ fontSize: "2.5vw", fontStyle: "italic", fontWeight: 700 }}>
              The Core Philosophy
            </div>
            <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
              acme.co
            </div>
          </div>

          {/* Center Content */}
          <div style={{ flex: 1, display: "flex", padding: "4vw", position: "relative", gap: "4vw" }}>
            {/* Corner Ornaments */}
            <div style={{ position: "absolute", top: "2vw", left: "2vw", width: "1.5vw", height: "1.5vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", top: "2vw", right: "2vw", width: "1.5vw", height: "1.5vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", bottom: "2vw", left: "2vw", width: "1.5vw", height: "1.5vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", bottom: "2vw", right: "2vw", width: "1.5vw", height: "1.5vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>

            {/* Left Column - Large Image Placeholder or Accent */}
            <div style={{ flex: "0 0 35%", display: "flex", flexDirection: "column", border: "0.15vw dashed #2C3E2D", padding: "2vw", alignItems: "center", justifyContent: "center", textAlign: "center", backgroundColor: "rgba(44,62,45,0.03)" }}>
              <div style={{ width: "4vw", height: "4vw", border: "0.2vw solid #2C3E2D", transform: "rotate(45deg)", marginBottom: "3vw" }}>
                <div style={{ width: "100%", height: "100%", border: "0.1vw solid #2C3E2D", margin: "0.4vw", boxSizing: "border-box" }} />
              </div>
              <h3 style={{ fontSize: "2.5vw", fontStyle: "italic", margin: "0 0 1vw 0" }}>Time-Honored</h3>
              <div style={{ width: "10vw", height: "0.1vw", backgroundColor: "#2C3E2D", margin: "1vw 0" }} />
              <p style={{ fontSize: "1.2vw", margin: 0, lineHeight: 1.6 }}>
                Rooted in traditions of excellence, crafted with utmost precision.
              </p>
            </div>

            {/* Right Column - Text Content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2 style={{ fontSize: "3.5vw", margin: "0 0 2vw 0", lineHeight: 1.1 }}>
                A Commitment to Uncompromising Quality
              </h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "2vw" }}>
                <div style={{ display: "flex", gap: "1.5vw" }}>
                  <div style={{ fontSize: "2vw", fontStyle: "italic", fontWeight: 700, flexShrink: 0 }}>01.</div>
                  <div>
                    <div style={{ fontSize: "1.5vw", fontWeight: 700, marginBottom: "0.5vw", letterSpacing: "0.05em", textTransform: "uppercase" }}>Finest Ingredients</div>
                    <p style={{ fontSize: "1.2vw", margin: 0, lineHeight: 1.5, color: "#4A5D4E" }}>We source only the rarest and most potent materials from across the globe, ensuring every element meets our rigorous standards.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1.5vw" }}>
                  <div style={{ fontSize: "2vw", fontStyle: "italic", fontWeight: 700, flexShrink: 0 }}>02.</div>
                  <div>
                    <div style={{ fontSize: "1.5vw", fontWeight: 700, marginBottom: "0.5vw", letterSpacing: "0.05em", textTransform: "uppercase" }}>Meticulous Process</div>
                    <p style={{ fontSize: "1.2vw", margin: 0, lineHeight: 1.5, color: "#4A5D4E" }}>Our artisans employ time-tested methods, refusing to rush perfection. Every step is monitored with unwavering attention to detail.</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1.5vw" }}>
                  <div style={{ fontSize: "2vw", fontStyle: "italic", fontWeight: 700, flexShrink: 0 }}>03.</div>
                  <div>
                    <div style={{ fontSize: "1.5vw", fontWeight: 700, marginBottom: "0.5vw", letterSpacing: "0.05em", textTransform: "uppercase" }}>Enduring Legacy</div>
                    <p style={{ fontSize: "1.2vw", margin: 0, lineHeight: 1.5, color: "#4A5D4E" }}>Building a foundation that will last for generations, creating products designed not just for today, but for tomorrow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{ display: "flex", borderTop: "0.2vw solid #2C3E2D", height: "6vh" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 2vw" }}>
              <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Confidential
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", padding: "0 2vw", borderLeft: "0.2vw solid #2C3E2D" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700 }}>
                Pg. 02
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/VintageApothecaryPage3.tsx`)

```tsx
export function VintageApothecaryPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EBE3D5",
        fontFamily: "'Playfair Display', Georgia, serif",
        color: "#2C3E2D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "3vw",
        position: "relative",
      }}
    >
      {/* Texture overlay */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 40%, rgba(139, 115, 85, 0.1) 100%)", pointerEvents: "none" }} />

      {/* Outer thick border */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "0.8vw solid #2C3E2D",
          padding: "0.8vw",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Inner double border */}
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "0.2vw solid #2C3E2D",
            outline: "0.1vw solid #2C3E2D",
            outlineOffset: "-0.4vw",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2vw 4vw", borderBottom: "0.2vw solid #2C3E2D" }}>
            <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
              Section II
            </div>
            <div style={{ fontSize: "2.5vw", fontStyle: "italic", fontWeight: 700 }}>
              Empirical Results
            </div>
            <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
              acme.co
            </div>
          </div>

          {/* Center Content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "4vw", position: "relative" }}>
            {/* Corner Ornaments */}
            <div style={{ position: "absolute", top: "2vw", left: "2vw", width: "1.5vw", height: "1.5vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", top: "2vw", right: "2vw", width: "1.5vw", height: "1.5vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", bottom: "2vw", left: "2vw", width: "1.5vw", height: "1.5vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", bottom: "2vw", right: "2vw", width: "1.5vw", height: "1.5vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>

            <div style={{ textAlign: "center", marginBottom: "3vw" }}>
              <h2 style={{ fontSize: "3vw", margin: "0 0 1vw 0" }}>Measured Efficacy & Growth</h2>
              <p style={{ fontSize: "1.2vw", color: "#4A5D4E", margin: 0, fontStyle: "italic" }}>A careful examination of our historical progression and projected outcomes.</p>
            </div>

            <div style={{ display: "flex", gap: "4vw", flex: 1, alignItems: "center", justifyContent: "center" }}>
              
              {/* Chart container */}
              <div style={{ flex: 2, height: "100%", border: "0.2vw solid #2C3E2D", padding: "2vw", display: "flex", flexDirection: "column", backgroundColor: "#E4DCCB" }}>
                <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, borderBottom: "0.1vw solid #2C3E2D", paddingBottom: "1vw", marginBottom: "2vw" }}>
                  Quarterly Yields (Vol. 1-4)
                </div>
                
                <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "2vw", paddingBottom: "1vw", borderBottom: "0.2vw solid #2C3E2D" }}>
                  {/* Bar 1 */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vw" }}>
                    <div style={{ fontSize: "1.5vw", fontStyle: "italic" }}>35%</div>
                    <div style={{ width: "100%", height: "30%", backgroundColor: "transparent", border: "0.2vw solid #2C3E2D", backgroundImage: "repeating-linear-gradient(45deg, #2C3E2D 25%, transparent 25%, transparent 75%, #2C3E2D 75%, #2C3E2D), repeating-linear-gradient(45deg, #2C3E2D 25%, #E4DCCB 25%, #E4DCCB 75%, #2C3E2D 75%, #2C3E2D)", backgroundPosition: "0 0, 0.4vw 0.4vw", backgroundSize: "0.8vw 0.8vw" }} />
                    <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Q1</div>
                  </div>
                  {/* Bar 2 */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vw" }}>
                    <div style={{ fontSize: "1.5vw", fontStyle: "italic" }}>52%</div>
                    <div style={{ width: "100%", height: "50%", backgroundColor: "transparent", border: "0.2vw solid #2C3E2D", backgroundImage: "repeating-linear-gradient(45deg, #2C3E2D 25%, transparent 25%, transparent 75%, #2C3E2D 75%, #2C3E2D), repeating-linear-gradient(45deg, #2C3E2D 25%, #E4DCCB 25%, #E4DCCB 75%, #2C3E2D 75%, #2C3E2D)", backgroundPosition: "0 0, 0.4vw 0.4vw", backgroundSize: "0.8vw 0.8vw" }} />
                    <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Q2</div>
                  </div>
                  {/* Bar 3 */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vw" }}>
                    <div style={{ fontSize: "1.5vw", fontStyle: "italic" }}>78%</div>
                    <div style={{ width: "100%", height: "70%", backgroundColor: "transparent", border: "0.2vw solid #2C3E2D", backgroundImage: "repeating-linear-gradient(45deg, #2C3E2D 25%, transparent 25%, transparent 75%, #2C3E2D 75%, #2C3E2D), repeating-linear-gradient(45deg, #2C3E2D 25%, #E4DCCB 25%, #E4DCCB 75%, #2C3E2D 75%, #2C3E2D)", backgroundPosition: "0 0, 0.4vw 0.4vw", backgroundSize: "0.8vw 0.8vw" }} />
                    <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Q3</div>
                  </div>
                  {/* Bar 4 */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vw" }}>
                    <div style={{ fontSize: "1.5vw", fontStyle: "italic" }}>94%</div>
                    <div style={{ width: "100%", height: "90%", backgroundColor: "#2C3E2D" }} />
                    <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>Q4</div>
                  </div>
                </div>
              </div>

              {/* Data Callouts */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vw" }}>
                <div style={{ border: "0.15vw dashed #2C3E2D", padding: "2vw", textAlign: "center", backgroundColor: "rgba(44,62,45,0.05)" }}>
                  <div style={{ fontSize: "4vw", fontWeight: 700, fontStyle: "italic", lineHeight: 1 }}>94<span style={{ fontSize: "2vw" }}>%</span></div>
                  <div style={{ width: "4vw", height: "0.1vw", backgroundColor: "#2C3E2D", margin: "1vw auto" }} />
                  <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em" }}>Year-End Purity Rate</div>
                </div>
                
                <div style={{ border: "0.15vw dashed #2C3E2D", padding: "2vw", textAlign: "center", backgroundColor: "rgba(44,62,45,0.05)" }}>
                  <div style={{ fontSize: "4vw", fontWeight: 700, fontStyle: "italic", lineHeight: 1 }}>3<span style={{ fontSize: "2vw" }}>X</span></div>
                  <div style={{ width: "4vw", height: "0.1vw", backgroundColor: "#2C3E2D", margin: "1vw auto" }} />
                  <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em" }}>Production Increase</div>
                </div>
              </div>

            </div>
          </div>

          {/* Footer */}
          <div style={{ display: "flex", borderTop: "0.2vw solid #2C3E2D", height: "6vh" }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 2vw" }}>
              <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Confidential
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", padding: "0 2vw", borderLeft: "0.2vw solid #2C3E2D" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700 }}>
                Pg. 03
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/VintageApothecaryPage4.tsx`)

```tsx
export function VintageApothecaryPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EBE3D5",
        fontFamily: "'Playfair Display', Georgia, serif",
        color: "#2C3E2D",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "3vw",
        position: "relative",
      }}
    >
      {/* Texture overlay */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at center, transparent 40%, rgba(139, 115, 85, 0.1) 100%)", pointerEvents: "none" }} />

      {/* Outer thick border */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "0.8vw solid #2C3E2D",
          padding: "0.8vw",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Inner double border */}
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "0.2vw solid #2C3E2D",
            outline: "0.1vw solid #2C3E2D",
            outlineOffset: "-0.4vw",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2vw 4vw", borderBottom: "0.2vw solid #2C3E2D" }}>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 700 }}>
              Conclusion
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
              <div style={{ width: "3vw", height: "0.1vw", backgroundColor: "#2C3E2D" }} />
              <div style={{ fontSize: "1.5vw", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 700 }}>
                acme.co
              </div>
              <div style={{ width: "3vw", height: "0.1vw", backgroundColor: "#2C3E2D" }} />
            </div>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.3em", fontWeight: 700 }}>
              Inquiries
            </div>
          </div>

          {/* Center Content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 10vw", textAlign: "center", position: "relative" }}>
            
            {/* Corner Ornaments */}
            <div style={{ position: "absolute", top: "2vw", left: "2vw", width: "2vw", height: "2vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.8vw", height: "0.8vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", top: "2vw", right: "2vw", width: "2vw", height: "2vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.8vw", height: "0.8vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", bottom: "2vw", left: "2vw", width: "2vw", height: "2vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.8vw", height: "0.8vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>
            <div style={{ position: "absolute", bottom: "2vw", right: "2vw", width: "2vw", height: "2vw", border: "0.1vw solid #2C3E2D", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}><div style={{ width: "0.8vw", height: "0.8vw", backgroundColor: "#2C3E2D", borderRadius: "50%" }} /></div>

            <div style={{ width: "6vw", height: "6vw", border: "0.2vw solid #2C3E2D", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "4vw" }}>
              <div style={{ width: "4vw", height: "4vw", backgroundColor: "#2C3E2D", transform: "rotate(-45deg)" }} />
            </div>

            <h1 style={{ fontSize: "6vw", fontStyle: "italic", fontWeight: 700, margin: 0, lineHeight: 1, letterSpacing: "-0.02em" }}>
              Awaiting Your Correspondence
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "2vw", margin: "4vh 0", width: "100%", justifyContent: "center" }}>
              <div style={{ width: "10vw", height: "0.1vw", backgroundColor: "#2C3E2D" }} />
              <div style={{ fontSize: "1.2vw", letterSpacing: "0.3em", textTransform: "uppercase" }}>Reach Out</div>
              <div style={{ width: "10vw", height: "0.1vw", backgroundColor: "#2C3E2D" }} />
            </div>

            <div style={{ display: "flex", gap: "6vw", marginTop: "2vw" }}>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "1vw", fontWeight: 700 }}>Postmaster</div>
                <div style={{ fontSize: "1.5vw", fontStyle: "italic" }}>hello@acme.co</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "1vw", fontWeight: 700 }}>Telegraph</div>
                <div style={{ fontSize: "1.5vw", fontStyle: "italic" }}>+1 (800) 555-0199</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: "1vw", fontWeight: 700 }}>Parlor</div>
                <div style={{ fontSize: "1.5vw", fontStyle: "italic" }}>123 Vintage Lane, NY</div>
              </div>
            </div>

          </div>

          {/* Bottom Section */}
          <div style={{ display: "flex", borderTop: "0.2vw solid #2C3E2D", height: "10vh" }}>
            <div style={{ flex: 1, borderRight: "0.2vw solid #2C3E2D", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 2vw" }}>
              <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.2em", textAlign: "center" }}>
                End of Volume
              </div>
            </div>
            <div style={{ flex: 2, borderRight: "0.2vw solid #2C3E2D", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 2vw" }}>
              <div style={{ fontSize: "1.2vw", fontStyle: "italic", textAlign: "center" }}>
                Thank You for Your Distinguished Attention
              </div>
            </div>
            <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 2vw" }}>
              <div style={{ fontSize: "1vw", fontWeight: 700, textAlign: "center" }}>
                Pg. 04
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
```
