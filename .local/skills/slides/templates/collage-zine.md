# Collage / Zine

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "CollageZine" template embodies a modern, eclectic aesthetic with a playful and artistic flair. The background color is a soft yellow (#FFFDE7), while accent colors include a bold red (#FF1744) and black (#000). The font families used are 'Courier New' for general text and 'Inter' for headings, providing a contrast between a classic typewriter style and a contemporary sans-serif look. Key layout elements include various rotated rectangular shapes in black and red, creating a dynamic composition, along with a repeating linear gradient in the bottom section. There are no background images specified in the code. The overall aesthetic feel can be described as vibrant and contemporary.

## Source Code

**Component:** `CollageZine`

### Slide 1 — Title (`slide-styles/CollageZine.tsx`)

```tsx
export function CollageZine() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFDE7", fontFamily: "'Courier New', monospace", position: "relative", color: "#000" }}>
      <div style={{ position: "absolute", top: "5vh", right: "8vw", width: "30vw", height: "35vh", background: "#000", transform: "rotate(3deg)" }} />
      <div style={{ position: "absolute", top: "6vh", right: "9vw", width: "28vw", height: "33vh", background: "#FF1744", transform: "rotate(2deg)" }} />
      <div style={{ position: "absolute", bottom: "8vh", left: "5vw", width: "22vw", height: "15vh", background: "repeating-linear-gradient(45deg, #000 0px, #000 2px, #FFFDE7 2px, #FFFDE7 8px)" }} />
      <div style={{ position: "absolute", top: "45vh", right: "5vw", width: "15vw", height: "15vw", border: "4px solid #000", transform: "rotate(-5deg)" }} />
      <div style={{ padding: "6vh 6vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ background: "#000", color: "#FFFDE7", padding: "0.5vh 1vw", fontSize: "1vw", fontWeight: 700, transform: "rotate(-2deg)" }}>
            acme.co
          </div>
          <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.2em", transform: "rotate(1deg)" }}>
            ISSUE No. 01 / 2026
          </div>
        </div>
        <div style={{ transform: "rotate(-1deg)" }}>
          <h1 style={{ fontSize: "9vw", fontWeight: 900, lineHeight: 0.8, margin: 0, fontFamily: "'Inter', sans-serif", textTransform: "uppercase" }}>
            EXAMPLE
          </h1>
          <div style={{ display: "inline-block", background: "#FF1744", color: "#fff", padding: "0.5vh 2vw", transform: "rotate(1deg)", marginTop: "0.5vh" }}>
            <h1 style={{ fontSize: "4vw", fontWeight: 900, margin: 0, fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              DECK
            </h1>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <p style={{ fontSize: "1.2vw", maxWidth: "35vw", lineHeight: 1.5, margin: 0, transform: "rotate(0.5deg)", borderTop: "2px solid #000", paddingTop: "1vh" }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence. No kidding.
          </p>
          <div style={{ fontSize: "0.7vw", textTransform: "uppercase", textAlign: "right", transform: "rotate(-1deg)" }}>
            <div>EXAMPLE COMPANY, INC.</div>
            <div style={{ color: "#FF1744", fontWeight: 700 }}>CONFIDENTIAL</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CollageZinePage2.tsx`)

```tsx
export function CollageZinePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#F0EDE5",
        fontFamily: "'Courier New', monospace",
        position: "relative",
        color: "#000",
        boxSizing: "border-box",
      }}
    >
      {/* Background rough elements */}
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "5vw",
          width: "90vw",
          height: "80vh",
          background: "repeating-linear-gradient(45deg, #F0EDE5, #F0EDE5 10px, #e8e4d9 10px, #e8e4d9 20px)",
          opacity: 0.5,
          zIndex: 0,
        }}
      />
      
      {/* Scattered decorative elements */}
      <div style={{ position: "absolute", top: "15vh", left: "8vw", fontSize: "4vw", fontWeight: "bold", transform: "rotate(-15deg)" }}>*</div>
      <div style={{ position: "absolute", top: "75vh", left: "12vw", fontSize: "3vw", fontWeight: "bold", transform: "rotate(25deg)", color: "#E33" }}>X</div>
      <div style={{ position: "absolute", top: "25vh", right: "15vw", fontSize: "5vw", fontWeight: "bold", transform: "rotate(45deg)" }}>+</div>
      <div style={{ position: "absolute", top: "80vh", right: "20vw", fontSize: "6vw", fontWeight: "bold", transform: "rotate(-35deg)", opacity: 0.3 }}>*</div>
      <div style={{ position: "absolute", top: "40vh", left: "4vw", fontSize: "8vw", fontWeight: "bold", transform: "rotate(90deg)", color: "#E33", opacity: 0.2 }}>!!!</div>

      <div
        style={{
          padding: "6vh 6vw",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "flex-start",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header - Cut-out letters */}
        <div style={{ display: "flex", gap: "0.5vw", marginBottom: "8vh", transform: "rotate(-2deg)", marginLeft: "4vw" }}>
          {["W", "H", "A", "T", " ", "T", "H", "E", "Y", " ", "S", "A", "Y"].map((letter, i) => (
            letter === " " ? <div key={i} style={{ width: "2vw" }} /> : (
              <div
                key={i}
                style={{
                  background: i % 2 === 0 ? "#000" : "#E33",
                  color: "#FFF",
                  padding: "0.5vw 1.5vw",
                  fontSize: i % 3 === 0 ? "5vw" : "6vw",
                  fontWeight: 900,
                  fontFamily: i % 2 === 0 ? "'Inter', sans-serif" : "'DM Sans', sans-serif",
                  transform: `rotate(${Math.random() * 20 - 10}deg) translateY(${Math.random() * 2 - 1}vh)`,
                  border: "0.2vw solid #000",
                  boxShadow: "0.4vw 0.4vw 0 #000",
                }}
              >
                {letter}
              </div>
            )
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ display: "flex", gap: "4vw", justifyContent: "center", alignItems: "center", flex: 1 }}>
          
          {/* Testimonial 1 */}
          <div
            style={{
              width: "25vw",
              background: "#FFD54F", // yellow
              border: "0.4vw solid #000",
              padding: "3vh 2vw",
              transform: "rotate(-4deg)",
              boxShadow: "0.8vw 0.8vw 0 rgba(0,0,0,0.8)",
              clipPath: "polygon(0% 0%, 100% 0%, 98% 95%, 90% 100%, 80% 95%, 70% 100%, 60% 96%, 50% 100%, 40% 95%, 30% 100%, 20% 96%, 10% 100%, 0% 95%)",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "-1.5vh", left: "1vw", background: "#E33", width: "4vw", height: "3vh", transform: "rotate(-10deg)" }}></div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2vw", fontWeight: 700, lineHeight: 1.2, margin: "0 0 2vh 0" }}>
              "ABSOLUTELY <span style={{ background: "#000", color: "#FFD54F", padding: "0 0.5vw", transform: "rotate(2deg)", display: "inline-block" }}>REVOLUTIONARY</span>"
            </p>
            <p style={{ fontFamily: "'Courier New', monospace", fontSize: "1vw", marginTop: "2vh", borderTop: "0.2vw dashed #000", paddingTop: "1vh", fontWeight: "bold" }}>
              — J. DOE, CEO
            </p>
          </div>

          {/* Testimonial 2 */}
          <div
            style={{
              width: "28vw",
              background: "#FF8A80", // pink
              border: "0.5vw solid #000",
              padding: "4vh 2.5vw",
              transform: "rotate(3deg) translateY(-4vh)",
              boxShadow: "-0.6vw 0.8vw 0 #000",
              clipPath: "polygon(2% 0%, 98% 2%, 100% 90%, 90% 95%, 85% 98%, 75% 94%, 60% 100%, 45% 95%, 30% 98%, 15% 92%, 0% 100%, 0% 5%)",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div style={{ fontSize: "4vw", color: "#E33", position: "absolute", top: "-2vh", right: "1vw", transform: "rotate(15deg)", WebkitTextStroke: "0.1vw black" }}>★★★★★</div>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: "2.5vw", fontWeight: 700, lineHeight: 1.1, margin: "0 0 2vh 0" }}>
              "Changed <span style={{ textDecoration: "underline", textDecorationColor: "#E33", textDecorationThickness: "0.4vw", textUnderlineOffset: "0.4vw" }}>EVERYTHING</span> for us. Best in class."
            </p>
            <p style={{ fontFamily: "shadows into light, 'Courier New', monospace", fontSize: "1.2vw", marginTop: "3vh", textAlign: "right", fontWeight: "bold", fontStyle: "italic" }}>
              - THE TEAM @ ACME
            </p>
          </div>

          {/* Testimonial 3 */}
          <div
            style={{
              width: "24vw",
              background: "#FFF", // white
              border: "0.4vw solid #000",
              padding: "3vh 2vw",
              transform: "rotate(-6deg) translateY(4vh)",
              boxShadow: "0.5vw 0.5vw 0 #E33",
              clipPath: "polygon(0% 5%, 5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 80% 96%, 70% 100%, 55% 94%, 40% 100%, 25% 96%, 10% 100%, 0% 95%)",
              position: "relative",
            }}
          >
            <div style={{ position: "absolute", top: "-1vh", left: "50%", background: "#000", width: "3vw", height: "3vh", transform: "rotate(45deg) translateX(-50%)" }}></div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.8vw", fontWeight: 900, lineHeight: 1.3, margin: "0 0 2vh 0", textTransform: "uppercase" }}>
              "We couldn't <span style={{ background: "#E33", color: "#FFF", padding: "0 0.5vw", transform: "rotate(-3deg)", display: "inline-block" }}>survive</span> without it."
            </p>
            <p style={{ fontFamily: "'Courier New', monospace", fontSize: "1vw", marginTop: "2vh", borderTop: "0.3vw solid #000", paddingTop: "1vh", fontWeight: "bold", background: "#000", color: "#FFF", display: "inline-block", padding: "0.5vh 1vw" }}>
              — DIRECTOR OF OPS
            </p>
          </div>

        </div>

        {/* Footer */}
        <div style={{ position: "absolute", bottom: "4vh", left: "6vw", right: "6vw", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "4vw", fontWeight: 900, fontFamily: "'Inter', sans-serif", WebkitTextStroke: "0.1vw black", color: "transparent", transform: "rotate(-2deg)" }}>
            02
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 700, fontFamily: "'Courier New', monospace", transform: "rotate(1deg)", background: "#000", color: "#F0EDE5", padding: "0.5vh 1vw", border: "0.2vw solid #E33" }}>
            EXAMPLE COMPANY, INC. / <span style={{ color: "#E33" }}>CONFIDENTIAL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CollageZinePage3.tsx`)

```tsx
export function CollageZinePage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFDE7", fontFamily: "'Courier New', monospace", position: "relative", color: "#000" }}>
      {/* Background Textures & Shapes */}
      <div style={{ position: "absolute", top: "-5vh", left: "-5vw", width: "40vw", height: "30vh", background: "repeating-linear-gradient(45deg, #000 0px, #000 2px, #FFFDE7 2px, #FFFDE7 10px)", transform: "rotate(-10deg)" }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "2vw", width: "25vw", height: "40vh", background: "#FF1744", transform: "rotate(4deg)", border: "4px solid #000" }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "10vw", height: "10vw", borderRadius: "50%", border: "6px dashed #000" }} />
      
      <div style={{ padding: "6vh 6vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ background: "#000", color: "#FFFDE7", padding: "1vh 2vw", fontSize: "1.5vw", fontWeight: 700, transform: "rotate(-3deg)" }}>
            THE METRICS
          </div>
          <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em", transform: "rotate(2deg)", background: "#FFFDE7", border: "2px solid #000", padding: "0.5vh 1vw" }}>
            DATA DUMP // 2026
          </div>
        </div>

        {/* Content - Data & Visuals */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "70%" }}>
          {/* Left Column - Stats */}
          <div style={{ width: "40%", display: "flex", flexDirection: "column", gap: "5vh" }}>
            <div style={{ transform: "rotate(1deg)" }}>
              <div style={{ fontSize: "8vw", fontWeight: 900, fontFamily: "'Inter', sans-serif", lineHeight: 0.8, color: "#FF1744" }}>
                98%
              </div>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, background: "#000", color: "#fff", display: "inline-block", padding: "0.5vh 1vw", marginTop: "1vh" }}>
                MARKET PENETRATION
              </div>
            </div>
            
            <div style={{ transform: "rotate(-2deg)", marginLeft: "4vw" }}>
              <div style={{ fontSize: "6vw", fontWeight: 900, fontFamily: "'Inter', sans-serif", lineHeight: 0.8 }}>
                $4.2M
              </div>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, borderBottom: "4px solid #FF1744", display: "inline-block", paddingBottom: "0.5vh" }}>
                REVENUE (Q3)
              </div>
            </div>
          </div>

          {/* Right Column - "Chart" */}
          <div style={{ width: "50%", height: "100%", position: "relative", display: "flex", alignItems: "flex-end", gap: "2vw", paddingBottom: "5vh" }}>
            <div style={{ background: "#000", height: "40%", width: "8vw", position: "relative", transform: "rotate(-1deg)" }}>
              <div style={{ position: "absolute", top: "-3vh", left: 0, width: "100%", textAlign: "center", fontWeight: "bold", fontSize: "1.5vw" }}>Q1</div>
            </div>
            <div style={{ background: "repeating-linear-gradient(-45deg, #FF1744 0px, #FF1744 4px, transparent 4px, transparent 8px)", border: "3px solid #000", height: "60%", width: "8vw", position: "relative", transform: "rotate(2deg)" }}>
              <div style={{ position: "absolute", top: "-3vh", left: 0, width: "100%", textAlign: "center", fontWeight: "bold", fontSize: "1.5vw" }}>Q2</div>
            </div>
            <div style={{ background: "#FF1744", height: "85%", width: "8vw", position: "relative", transform: "rotate(-3deg)", border: "4px solid #000" }}>
              <div style={{ position: "absolute", top: "-3vh", left: 0, width: "100%", textAlign: "center", fontWeight: "bold", fontSize: "1.5vw" }}>Q3</div>
              <div style={{ position: "absolute", bottom: "2vh", left: "-2vw", background: "#000", color: "#FFFDE7", padding: "0.5vh 1vw", fontSize: "1.2vw", transform: "rotate(-15deg)", whiteSpace: "nowrap" }}>
                RECORD BREAKING!
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
            * SOURCED FROM INTERNAL CHAOS
          </div>
          <div style={{ fontSize: "2vw", fontWeight: 900, fontFamily: "'Inter', sans-serif" }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CollageZinePage4.tsx`)

```tsx
export function CollageZinePage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFDE7", fontFamily: "'Courier New', monospace", position: "relative", color: "#000" }}>
      {/* Background Textures & Shapes */}
      <div style={{ position: "absolute", top: "0", left: "0", width: "100vw", height: "100vh", background: "radial-gradient(circle at 50% 50%, transparent 20%, #000 150%)", opacity: 0.1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-10vh", left: "15vw", width: "40vw", height: "30vh", background: "#000", transform: "rotate(-5deg)" }} />
      <div style={{ position: "absolute", top: "10vh", right: "5vw", width: "20vw", height: "50vh", background: "repeating-linear-gradient(0deg, #FF1744 0px, #FF1744 5px, transparent 5px, transparent 15px)", transform: "rotate(8deg)" }} />
      <div style={{ position: "absolute", top: "40vh", left: "8vw", width: "15vw", height: "15vw", background: "#FFFDE7", border: "5px solid #000", transform: "rotate(45deg)" }} />

      <div style={{ padding: "6vh 6vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <div style={{ background: "#FF1744", color: "#fff", padding: "0.5vh 2vw", fontSize: "1.2vw", fontWeight: 700, transform: "rotate(3deg)", border: "3px solid #000" }}>
            END OF TRANSMISSION
          </div>
        </div>

        {/* Content - CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
          <div style={{ transform: "rotate(-2deg)", textAlign: "center", position: "relative" }}>
            <h2 style={{ fontSize: "4vw", fontWeight: 900, margin: 0, fontFamily: "'Inter', sans-serif", textTransform: "uppercase" }}>
              READY TO CAUSE
            </h2>
            <div style={{ display: "inline-block", background: "#000", color: "#FFFDE7", padding: "1vh 3vw", transform: "rotate(4deg)", marginTop: "-1vh" }}>
              <h1 style={{ fontSize: "7vw", fontWeight: 900, margin: 0, fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                SOME CHAOS?
              </h1>
            </div>
          </div>

          <div style={{ display: "flex", gap: "4vw", marginTop: "10vh", transform: "rotate(1deg)" }}>
            <div style={{ border: "4px solid #000", padding: "3vh 2vw", background: "#FFFDE7", width: "25vw" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: "bold", borderBottom: "2px solid #000", paddingBottom: "1vh", marginBottom: "2vh" }}>
                DROP A LINE
              </div>
              <div style={{ fontSize: "1.5vw", fontWeight: "bold" }}>hello@acme.co</div>
              <div style={{ fontSize: "1.5vw", fontWeight: "bold" }}>+1 800 NO RULEZ</div>
            </div>

            <div style={{ border: "4px solid #000", padding: "3vh 2vw", background: "#FF1744", color: "#fff", width: "25vw", transform: "rotate(-3deg)", position: "relative", top: "2vh" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: "bold", borderBottom: "2px solid #fff", paddingBottom: "1vh", marginBottom: "2vh" }}>
                STALK US
              </div>
              <div style={{ fontSize: "1.5vw", fontWeight: "bold" }}>@acme_chaos</div>
              <div style={{ fontSize: "1.5vw", fontWeight: "bold" }}>acme.co/void</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "1.2vw", textTransform: "uppercase", background: "#000", color: "#FFFDE7", padding: "0.5vh 1vw", transform: "rotate(-1deg)" }}>
            acme.co // 2026
          </div>
          <div style={{ fontSize: "2vw", fontWeight: 900, fontFamily: "'Inter', sans-serif", transform: "rotate(5deg)" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
