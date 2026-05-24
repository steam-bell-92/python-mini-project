# Retro Vinyl Sleeve

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "RetroVinylSleeve" template embodies a retro aesthetic, reminiscent of vintage vinyl record covers. It features a solid background color of #D3A052 (a warm beige) and utilizes #1A1A1A (a deep black) for text and accents, with #F4F0EA (a light cream) used for contrast in the "VOL. 26" label. The primary font is "'Space Grotesk', sans-serif" for the main text, while "'Inter', sans-serif" is used for secondary text elements, providing a modern touch. Key layout elements include a large circular shape representing a vinyl record, positioned at the top right, and various text blocks arranged in a flexible layout that emphasizes hierarchy and readability. There are no background images specified in the code. The overall aesthetic feel is "vintage chic."

## Source Code

**Component:** `RetroVinylSleeve`

### Slide 1 — Title (`slide-styles/RetroVinylSleeve.tsx`)

```tsx
export function RetroVinylSleeve() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#D3A052", fontFamily: "'Space Grotesk', sans-serif", color: "#1A1A1A", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "8vh 8vw", boxSizing: "border-box" }}>
      {/* Giant record circle */}
      <div style={{ position: "absolute", top: "-10vh", right: "-10vw", width: "80vh", height: "80vh", borderRadius: "50%", backgroundColor: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: "20vh", height: "20vh", borderRadius: "50%", backgroundColor: "#D3A052" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A1A1A" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#F4F0EA", mixBlendMode: "difference" }}>
          VOL. 26
        </div>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", maxWidth: "55vw", position: "relative", zIndex: 1 }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", fontWeight: 600, letterSpacing: "0.2em", marginBottom: "2vh", color: "#1A1A1A" }}>
          STEREO / HIGH-FIDELITY
        </div>
        <h1 style={{ fontSize: "9vw", fontWeight: 700, margin: 0, lineHeight: 0.9, letterSpacing: "-0.03em", textTransform: "uppercase" }}>
          Example<br/>Deck
        </h1>
        <p style={{ fontSize: "1.8vw", fontWeight: 400, color: "#1A1A1A", marginTop: "4vh", lineHeight: 1.3, borderLeft: "4px solid #1A1A1A", paddingLeft: "2vw" }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", position: "relative", zIndex: 1, fontFamily: "'Inter', sans-serif", borderTop: "2px solid #1A1A1A", paddingTop: "2vh" }}>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#1A1A1A" }}>Example Company, Inc.</div>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#1A1A1A", textTransform: "uppercase" }}>Confidential • 2026</div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/RetroVinylSleevePage2.tsx`)

```tsx
export function RetroVinylSleevePage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#D3A052", fontFamily: "'Space Grotesk', sans-serif", color: "#1A1A1A", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "8vh 8vw", boxSizing: "border-box" }}>
      {/* Vinyl record half shape */}
      <div style={{ position: "absolute", bottom: "-15vh", right: "-5vw", width: "50vh", height: "50vh", borderRadius: "50%", backgroundColor: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.1 }}>
        <div style={{ width: "15vh", height: "15vh", borderRadius: "50%", backgroundColor: "#D3A052" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A1A1A" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.2em", fontFamily: "'Inter', sans-serif", color: "#1A1A1A" }}>
          TRACK 01
        </div>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", flex: 1, marginTop: "6vh", position: "relative", zIndex: 1 }}>
        <h2 style={{ fontSize: "5vw", fontWeight: 700, margin: "0 0 4vh 0", lineHeight: 0.9, letterSpacing: "-0.03em", textTransform: "uppercase" }}>
          The Sound of<br/>Tomorrow
        </h2>
        
        <div style={{ display: "flex", gap: "4vw", marginTop: "2vh" }}>
          <div style={{ flex: 1, borderTop: "4px solid #1A1A1A", paddingTop: "3vh" }}>
            <h3 style={{ fontSize: "1.8vw", fontWeight: 700, margin: "0 0 2vh 0", textTransform: "uppercase" }}>High Fidelity</h3>
            <p style={{ fontSize: "1.2vw", fontFamily: "'Inter', sans-serif", lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
              We are pushing the boundaries of what is possible in the modern audio landscape. By leveraging analog warmth with digital precision, the results are nothing short of revolutionary.
            </p>
          </div>
          
          <div style={{ flex: 1, borderTop: "4px solid #1A1A1A", paddingTop: "3vh" }}>
            <h3 style={{ fontSize: "1.8vw", fontWeight: 700, margin: "0 0 2vh 0", textTransform: "uppercase" }}>Stereo Scope</h3>
            <p style={{ fontSize: "1.2vw", fontFamily: "'Inter', sans-serif", lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
              Our proprietary mastering process ensures every frequency is captured exactly as the artist intended. From the deepest bass to the most shimmering highs.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "6vh", display: "flex", gap: "2vw", alignItems: "center" }}>
          <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#D3A052" }} />
          </div>
          <div style={{ fontSize: "1.2vw", fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.1em" }}>
            33 ⅓ RPM RECORDING
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", position: "relative", zIndex: 1, fontFamily: "'Inter', sans-serif", borderTop: "2px solid #1A1A1A", paddingTop: "2vh" }}>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#1A1A1A" }}>Example Company, Inc.</div>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#1A1A1A", textTransform: "uppercase" }}>02</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/RetroVinylSleevePage3.tsx`)

```tsx
export function RetroVinylSleevePage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#D3A052", fontFamily: "'Space Grotesk', sans-serif", color: "#1A1A1A", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "8vh 8vw", boxSizing: "border-box" }}>
      {/* Background graphic elements */}
      <div style={{ position: "absolute", top: "20vh", left: "-5vw", width: "40vh", height: "40vh", borderRadius: "50%", border: "2px solid #1A1A1A", opacity: 0.2 }} />
      <div style={{ position: "absolute", top: "22vh", left: "-3vw", width: "36vh", height: "36vh", borderRadius: "50%", border: "1px dashed #1A1A1A", opacity: 0.3 }} />

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#1A1A1A" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.2em", fontFamily: "'Inter', sans-serif", color: "#1A1A1A" }}>
          TRACK 02
        </div>
      </div>
      
      <div style={{ display: "flex", flex: 1, marginTop: "4vh", position: "relative", zIndex: 1 }}>
        <div style={{ flex: "0 0 35%", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "4vw", borderRight: "4px solid #1A1A1A" }}>
          <h2 style={{ fontSize: "4.5vw", fontWeight: 700, margin: "0 0 2vh 0", lineHeight: 0.9, letterSpacing: "-0.03em", textTransform: "uppercase" }}>
            Sales<br/>Volume
          </h2>
          <p style={{ fontSize: "1.2vw", fontFamily: "'Inter', sans-serif", lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
            Record-breaking growth across all domestic and international territories. The analog resurgence is officially here.
          </p>
          <div style={{ marginTop: "4vh", fontSize: "3.5vw", fontWeight: 700 }}>
            +145%
          </div>
          <div style={{ fontSize: "0.9vw", fontFamily: "'Inter', sans-serif", fontWeight: 600, letterSpacing: "0.1em", marginTop: "0.5vh" }}>
            YEAR OVER YEAR
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "2vw", paddingLeft: "4vw", paddingBottom: "2vh" }}>
          {/* Bar Chart styled like a retro equalizer */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", gap: "1vh" }}>
            <div style={{ fontSize: "1vw", fontFamily: "'Inter', sans-serif", fontWeight: 600, textAlign: "center" }}>Q1</div>
            <div style={{ width: "100%", height: "30%", backgroundColor: "#1A1A1A", position: "relative" }}>
              <div style={{ position: "absolute", top: "1vh", left: "10%", right: "10%", height: "2px", backgroundColor: "#D3A052" }} />
            </div>
          </div>
          
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", gap: "1vh" }}>
            <div style={{ fontSize: "1vw", fontFamily: "'Inter', sans-serif", fontWeight: 600, textAlign: "center" }}>Q2</div>
            <div style={{ width: "100%", height: "45%", backgroundColor: "#1A1A1A", position: "relative" }}>
              <div style={{ position: "absolute", top: "1vh", left: "10%", right: "10%", height: "2px", backgroundColor: "#D3A052" }} />
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", gap: "1vh" }}>
            <div style={{ fontSize: "1vw", fontFamily: "'Inter', sans-serif", fontWeight: 600, textAlign: "center" }}>Q3</div>
            <div style={{ width: "100%", height: "65%", backgroundColor: "#1A1A1A", position: "relative" }}>
              <div style={{ position: "absolute", top: "1vh", left: "10%", right: "10%", height: "2px", backgroundColor: "#D3A052" }} />
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", gap: "1vh" }}>
            <div style={{ fontSize: "1vw", fontFamily: "'Inter', sans-serif", fontWeight: 600, textAlign: "center" }}>Q4</div>
            <div style={{ width: "100%", height: "85%", backgroundColor: "#1A1A1A", position: "relative" }}>
              <div style={{ position: "absolute", top: "1vh", left: "10%", right: "10%", height: "2px", backgroundColor: "#D3A052" }} />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", position: "relative", zIndex: 1, fontFamily: "'Inter', sans-serif", borderTop: "2px solid #1A1A1A", paddingTop: "2vh", marginTop: "4vh" }}>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#1A1A1A" }}>Example Company, Inc.</div>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#1A1A1A", textTransform: "uppercase" }}>03</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/RetroVinylSleevePage4.tsx`)

```tsx
export function RetroVinylSleevePage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#1A1A1A", fontFamily: "'Space Grotesk', sans-serif", color: "#D3A052", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "8vh 8vw", boxSizing: "border-box" }}>
      {/* Giant record circle but inverted */}
      <div style={{ position: "absolute", top: "15vh", left: "20vw", width: "60vw", height: "60vw", borderRadius: "50%", backgroundColor: "#D3A052", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 0 }}>
        <div style={{ width: "15vw", height: "15vw", borderRadius: "50%", backgroundColor: "#1A1A1A", display: "flex", alignItems: "center", justifyContent: "center" }}>
           <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#D3A052" }} />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#D3A052", mixBlendMode: "difference" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.2em", fontFamily: "'Inter', sans-serif", color: "#D3A052", mixBlendMode: "difference" }}>
          B-SIDE
        </div>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, position: "relative", zIndex: 1, textAlign: "center", mixBlendMode: "difference" }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.3em", marginBottom: "2vh", color: "#D3A052" }}>
          END OF PLAYBACK
        </div>
        <h2 style={{ fontSize: "11vw", fontWeight: 700, margin: 0, lineHeight: 0.9, letterSpacing: "-0.03em", textTransform: "uppercase", color: "#D3A052" }}>
          Let's<br/>Spin It
        </h2>
        <div style={{ marginTop: "6vh", border: "2px solid #D3A052", padding: "1.5vh 3vw", fontSize: "1.2vw", fontWeight: 600, fontFamily: "'Inter', sans-serif", textTransform: "uppercase", letterSpacing: "0.1em", color: "#D3A052", cursor: "pointer", transition: "all 0.2s" }}>
          Contact Us
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", position: "relative", zIndex: 1, fontFamily: "'Inter', sans-serif", borderTop: "2px solid #D3A052", paddingTop: "2vh", mixBlendMode: "difference" }}>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#D3A052" }}>hello@acme.co</div>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#D3A052", textTransform: "uppercase" }}>04</div>
      </div>
    </div>
  );
}
```
