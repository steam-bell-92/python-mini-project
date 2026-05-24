# Figma Geometric

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The FigmaGeometric template features a clean and modern aesthetic characterized by geometric shapes and a minimalist layout. The background color is a soft off-white, specifically #F5F5F0. Text and accent colors include a dark gray #1E1E1E for primary text, a lighter gray #666666 for the year, and #555555 for the subtitle, with additional accents in #888888 for the company name and a white background #FFFFFF for the "Confidential" label. The font families used are 'Inter' for general text and 'Space Grotesk' for the main heading, providing a contemporary feel. Key layout elements include decorative overlapping circles with borders in #E8878C, #7B9FCC, and #7BC8A4, positioned absolutely in the top right corner, and a structured flexbox layout that organizes content vertically and horizontally. There are no background images used in this template. The overall aesthetic feel can be described as modern, geometric, and minimalist.

## Source Code

**Component:** `FigmaGeometric`

### Slide 1 — Title (`slide-styles/FigmaGeometric.tsx`)

```tsx
export function FigmaGeometric() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F5F0",
        fontFamily: "'Inter', sans-serif",
        color: "#1E1E1E",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Decorative overlapping circles */}
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "30vw", height: "30vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box" }} />
        <div style={{ position: "absolute", top: "5vw", right: "15vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box" }} />
        <div style={{ position: "absolute", top: "15vw", right: "5vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
          acme.co
        </div>
        <div style={{ fontSize: "1vw", color: "#666666" }}>
          2026
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "3vh", zIndex: 1, marginTop: "10vh" }}>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "7vw",
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#1E1E1E",
          }}
        >
          Example Deck
        </h1>
        <p
          style={{
            fontSize: "2vw",
            fontWeight: 400,
            color: "#555555",
            margin: 0,
            maxWidth: "45vw",
            lineHeight: 1.5,
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888" }}>
          Example Company, Inc.
        </div>
        <div
          style={{
            padding: "0.8vw 1.5vw",
            backgroundColor: "#FFFFFF",
            borderRadius: "1vw",
            fontSize: "1vw",
            fontWeight: 500,
            color: "#1E1E1E",
            boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)",
          }}
        >
          Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/FigmaGeometricPage2.tsx`)

```tsx
export function FigmaGeometricPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F5F0",
        fontFamily: "'Inter', sans-serif",
        color: "#1E1E1E",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Decorative overlapping circles */}
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "30vw", height: "30vw" }}>
        <div style={{ position: "absolute", top: "10vw", right: "10vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "5vw", right: "15vw", width: "12vw", height: "12vw", borderRadius: "50%", border: "0.3vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.5 }} />
        <div style={{ position: "absolute", top: "15vw", right: "5vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.5 }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
          acme.co
        </div>
        <div style={{ fontSize: "1vw", color: "#666666" }}>
          2026
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 1, marginTop: "6vh", gap: "4vh" }}>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "4vw",
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "#1E1E1E",
            maxWidth: "60vw"
          }}
        >
          Core Objectives
        </h1>

        <div style={{ display: "flex", gap: "4vw", marginTop: "2vh" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
             <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#E8878C", marginBottom: "1vh" }} />
             <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2vw", margin: 0, fontWeight: 600 }}>Innovation</h3>
             <p style={{ fontSize: "1.2vw", lineHeight: 1.5, color: "#555555", margin: 0 }}>
               Driving technological advancements through rapid prototyping and user-centered design methodologies.
             </p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
             <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#7B9FCC", marginBottom: "1vh" }} />
             <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2vw", margin: 0, fontWeight: 600 }}>Scalability</h3>
             <p style={{ fontSize: "1.2vw", lineHeight: 1.5, color: "#555555", margin: 0 }}>
               Building robust infrastructure capable of handling exponential growth without compromising performance.
             </p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.5vh" }}>
             <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#7BC8A4", marginBottom: "1vh" }} />
             <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2vw", margin: 0, fontWeight: 600 }}>Sustainability</h3>
             <p style={{ fontSize: "1.2vw", lineHeight: 1.5, color: "#555555", margin: 0 }}>
               Committing to eco-friendly practices across all operations and product lifecycles.
             </p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>02</span>
          <span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} />
          <span>Example Company, Inc.</span>
        </div>
        <div
          style={{
            padding: "0.8vw 1.5vw",
            backgroundColor: "#FFFFFF",
            borderRadius: "1vw",
            fontSize: "1vw",
            fontWeight: 500,
            color: "#1E1E1E",
            boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)",
          }}
        >
          Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/FigmaGeometricPage3.tsx`)

```tsx
export function FigmaGeometricPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F5F0",
        fontFamily: "'Inter', sans-serif",
        color: "#1E1E1E",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Decorative overlapping circles */}
      <div style={{ position: "absolute", bottom: "-10vw", left: "-5vw", width: "40vw", height: "40vw" }}>
        <div style={{ position: "absolute", bottom: "10vw", left: "10vw", width: "20vw", height: "20vw", borderRadius: "50%", border: "0.3vw solid #E8878C", boxSizing: "border-box", opacity: 0.3 }} />
        <div style={{ position: "absolute", bottom: "5vw", left: "15vw", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.3vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.3 }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
          acme.co
        </div>
        <div style={{ fontSize: "1vw", color: "#666666" }}>
          2026
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 1, marginTop: "4vh", gap: "5vh" }}>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "4vw",
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "#1E1E1E",
          }}
        >
          Growth Metrics
        </h1>

        <div style={{ display: "flex", gap: "2vw", height: "40vh" }}>
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "3vw", display: "flex", flexDirection: "column", justifyContent: "center", boxShadow: "0 1vw 3vw rgba(0,0,0,0.03)" }}>
            <div style={{ fontSize: "5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#E8878C", lineHeight: 1 }}>
              150%
            </div>
            <div style={{ fontSize: "1.2vw", fontWeight: 500, marginTop: "1vh", color: "#1E1E1E" }}>Year-over-Year Growth</div>
            <p style={{ fontSize: "1vw", color: "#666666", marginTop: "2vh", lineHeight: 1.5 }}>
              Exceeding expectations across all major markets with unprecedented adoption rates.
            </p>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vw" }}>
            <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 1vw 3vw rgba(0,0,0,0.03)" }}>
              <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", backgroundColor: "#7B9FCC", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontSize: "1.5vw", fontWeight: "bold" }}>
                1
              </div>
              <div>
                <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#1E1E1E", lineHeight: 1 }}>2.4M</div>
                <div style={{ fontSize: "1vw", color: "#666666", marginTop: "0.5vh" }}>Active daily users</div>
              </div>
            </div>

            <div style={{ flex: 1, backgroundColor: "#FFFFFF", borderRadius: "1.5vw", padding: "2vw", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 1vw 3vw rgba(0,0,0,0.03)" }}>
               <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", backgroundColor: "#7BC8A4", display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontSize: "1.5vw", fontWeight: "bold" }}>
                2
              </div>
              <div>
                <div style={{ fontSize: "2.5vw", fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: "#1E1E1E", lineHeight: 1 }}>$84M</div>
                <div style={{ fontSize: "1vw", color: "#666666", marginTop: "0.5vh" }}>Annual recurring revenue</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>03</span>
          <span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} />
          <span>Example Company, Inc.</span>
        </div>
        <div
          style={{
            padding: "0.8vw 1.5vw",
            backgroundColor: "#FFFFFF",
            borderRadius: "1vw",
            fontSize: "1vw",
            fontWeight: 500,
            color: "#1E1E1E",
            boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)",
          }}
        >
          Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/FigmaGeometricPage4.tsx`)

```tsx
export function FigmaGeometricPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F5F0",
        fontFamily: "'Inter', sans-serif",
        color: "#1E1E1E",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Decorative overlapping circles */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "40vw", height: "40vw", zIndex: 0 }}>
        <div style={{ position: "absolute", top: "10%", left: "10%", width: "25vw", height: "25vw", borderRadius: "50%", border: "0.2vw solid #E8878C", boxSizing: "border-box", opacity: 0.2 }} />
        <div style={{ position: "absolute", top: "15%", left: "20%", width: "20vw", height: "20vw", borderRadius: "50%", border: "0.2vw solid #7B9FCC", boxSizing: "border-box", opacity: 0.2 }} />
        <div style={{ position: "absolute", top: "25%", left: "5%", width: "15vw", height: "15vw", borderRadius: "50%", border: "0.2vw solid #7BC8A4", boxSizing: "border-box", opacity: 0.2 }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5vw" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", backgroundColor: "#1E1E1E" }} />
          acme.co
        </div>
        <div style={{ fontSize: "1vw", color: "#666666" }}>
          2026
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 1, textAlign: "center", gap: "3vh" }}>
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "6vw",
            fontWeight: 700,
            margin: 0,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#1E1E1E",
          }}
        >
          Let&apos;s Build the Future
        </h1>
        <p
          style={{
            fontSize: "1.8vw",
            fontWeight: 400,
            color: "#555555",
            margin: 0,
            maxWidth: "45vw",
            lineHeight: 1.5,
          }}
        >
          Partner with us to create sustainable, scalable, and innovative solutions for tomorrow.
        </p>

        <div style={{ marginTop: "4vh", display: "flex", gap: "2vw" }}>
           <div style={{ padding: "1.5vw 3vw", backgroundColor: "#1E1E1E", color: "#FFF", borderRadius: "2vw", fontSize: "1.2vw", fontWeight: 600, cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif" }}>
             Get in Touch
           </div>
           <div style={{ padding: "1.5vw 3vw", backgroundColor: "transparent", color: "#1E1E1E", borderRadius: "2vw", border: "0.2vw solid #1E1E1E", fontSize: "1.2vw", fontWeight: 600, cursor: "pointer", fontFamily: "'Space Grotesk', sans-serif" }}>
             View Documentation
           </div>
        </div>
        
        <div style={{ display: "flex", gap: "3vw", marginTop: "6vh", fontSize: "1.1vw", color: "#666666", fontWeight: 500 }}>
          <span>hello@acme.co</span>
          <span>+1 (555) 123-4567</span>
          <span>123 Innovation Dr, SF</span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "1vw", color: "#888888", display: "flex", alignItems: "center", gap: "1vw" }}>
          <span>04</span>
          <span style={{ width: "2vw", height: "1px", backgroundColor: "#888888" }} />
          <span>Example Company, Inc.</span>
        </div>
        <div
          style={{
            padding: "0.8vw 1.5vw",
            backgroundColor: "#FFFFFF",
            borderRadius: "1vw",
            fontSize: "1vw",
            fontWeight: 500,
            color: "#1E1E1E",
            boxShadow: "0 0.5vw 1vw rgba(0,0,0,0.05)",
          }}
        >
          Confidential
        </div>
      </div>
    </div>
  );
}
```
