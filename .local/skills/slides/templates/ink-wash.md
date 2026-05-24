# Ink Wash

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "InkWash" template features a soft, organic aesthetic reminiscent of traditional ink wash painting. The background color is a light beige (#F5F0E6), complemented by various translucent dark gray circles (#1A1A1A) with different opacities (0.05, 0.08, 0.12, 0.08) that create a layered, blurred effect. The text color is primarily a dark gray (#1A1A1A) with variations in opacity for different elements, while the accent color for the Hanko seal is a vibrant red (#D93829). The font families used are 'Inter' for general text and 'Playfair Display' for headings and decorative elements, providing a contrast between modern and classic styles. Key layout elements include the circular ink wash shapes positioned throughout the background, a content container that is centered and left-aligned, and a footer with company information. There are no background images used. The overall aesthetic feel is "elegant, serene."

## Source Code

**Component:** `InkWash`

### Slide 1 — Title (`slide-styles/InkWash.tsx`)

```tsx
export function InkWash() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#F5F0E6", fontFamily: "'Inter', sans-serif", position: "relative", color: "#1A1A1A" }}>
      {/* Ink wash circles for organic background flow */}
      <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "60vw", height: "55vw", background: "#1A1A1A", opacity: 0.05, borderRadius: "45% 55% 40% 60% / 55% 45% 60% 40%", filter: "blur(2vw)" }} />
      <div style={{ position: "absolute", top: "15vh", right: "5vw", width: "40vw", height: "45vw", background: "#1A1A1A", opacity: 0.08, borderRadius: "50% 50% 50% 50% / 60% 40% 60% 40%", filter: "blur(4vw)" }} />
      <div style={{ position: "absolute", bottom: "-20vh", right: "15vw", width: "70vw", height: "50vw", background: "#1A1A1A", opacity: 0.12, borderRadius: "40% 60% 50% 50% / 50% 50% 40% 60%", filter: "blur(6vw)" }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "25vw", width: "20vw", height: "20vw", background: "#1A1A1A", opacity: 0.08, borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%", filter: "blur(1vw)" }} />

      {/* Content Container */}
      <div style={{ padding: "0", display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", position: "relative", zIndex: 10, maxWidth: "50vw", marginLeft: "12vw" }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "4vh" }}>
          {/* Hanko seal */}
          <div style={{ width: "2.5vw", height: "2.5vw", background: "#D93829", display: "flex", alignItems: "center", justifyContent: "center", border: "0.2vw solid #F5F0E6", outline: "1px solid #D93829" }}>
            <span style={{ color: "#F5F0E6", writingMode: "vertical-rl", fontSize: "0.9vw", fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: "-0.1em" }}>
              印
            </span>
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 300, letterSpacing: "0.3em", color: "rgba(26, 26, 26, 0.6)", textTransform: "uppercase" }}>
            Presentation Title
          </div>
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "8vw", fontWeight: 400, lineHeight: 1.1, margin: "0 0 1vh 0", color: "rgba(26, 26, 26, 0.9)", letterSpacing: "-0.02em" }}>
          Example
        </h1>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "8vw", fontWeight: 400, lineHeight: 1.1, margin: 0, color: "rgba(26, 26, 26, 0.75)", letterSpacing: "-0.02em" }}>
          Deck
        </h1>

        <p style={{ fontSize: "1.6vw", color: "rgba(26, 26, 26, 0.65)", marginTop: "6vh", maxWidth: "35vw", lineHeight: 1.8, fontWeight: 200, letterSpacing: "0.02em" }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ position: "absolute", bottom: "8vh", left: "12vw", display: "flex", gap: "4vw", fontSize: "0.9vw", color: "rgba(26, 26, 26, 0.5)", letterSpacing: "0.1em", fontWeight: 300 }}>
        <span>acme.co</span>
        <span>Example Company, Inc.</span>
        <span>2026</span>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/InkWashPage2.tsx`)

```tsx
export function InkWashPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#F5F0E6", fontFamily: "'Inter', sans-serif", position: "relative", color: "#1A1A1A" }}>
      {/* Ink wash circles */}
      <div style={{ position: "absolute", top: "-10vh", left: "-5vw", width: "50vw", height: "50vw", background: "#1A1A1A", opacity: 0.04, borderRadius: "55% 45% 60% 40% / 45% 55% 40% 60%", filter: "blur(3vw)" }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "-5vw", width: "40vw", height: "45vw", background: "#1A1A1A", opacity: 0.06, borderRadius: "50% 50% 50% 50% / 60% 40% 60% 40%", filter: "blur(4vw)" }} />
      
      <div style={{ position: "absolute", top: "10vh", left: "12vw", display: "flex", alignItems: "center", gap: "1.5vw" }}>
        <div style={{ width: "2vw", height: "2vw", background: "#D93829", display: "flex", alignItems: "center", justifyContent: "center", border: "0.15vw solid #F5F0E6", outline: "0.1vw solid #D93829" }}>
          <span style={{ color: "#F5F0E6", writingMode: "vertical-rl", fontSize: "0.8vw", fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: "-0.1em" }}>印</span>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 300, letterSpacing: "0.3em", color: "rgba(26, 26, 26, 0.6)", textTransform: "uppercase" }}>
          Philosophy &amp; Approach
        </div>
      </div>

      <div style={{ position: "absolute", top: "25vh", left: "12vw", width: "76vw", display: "flex", gap: "8vw" }}>
        <div style={{ width: "34vw" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", fontWeight: 400, lineHeight: 1.2, margin: "0 0 4vh 0", color: "rgba(26, 26, 26, 0.9)", letterSpacing: "-0.02em" }}>
            Finding clarity<br />in the complex.
          </h2>
          <p style={{ fontSize: "1.2vw", color: "rgba(26, 26, 26, 0.65)", lineHeight: 1.8, fontWeight: 300, marginBottom: "3vh" }}>
            Like the ancient practice of ink wash painting, our approach embraces both intention and spontaneity. We believe that true innovation emerges when structured methodology meets organic creative flow.
          </p>
          <p style={{ fontSize: "1.2vw", color: "rgba(26, 26, 26, 0.65)", lineHeight: 1.8, fontWeight: 300 }}>
            By distilling complex challenges down to their essential elements, we create solutions that are both elegant and profoundly effective.
          </p>
        </div>
        
        <div style={{ width: "34vw", display: "flex", flexDirection: "column", gap: "4vh", paddingTop: "2vh" }}>
          <div style={{ paddingLeft: "2vw", borderLeft: "0.15vw solid rgba(26, 26, 26, 0.1)" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", fontWeight: 400, margin: "0 0 1vh 0", color: "rgba(26, 26, 26, 0.8)" }}>Intention</h3>
            <p style={{ fontSize: "1vw", color: "rgba(26, 26, 26, 0.6)", lineHeight: 1.6, fontWeight: 300 }}>Every mark serves a purpose. We begin with deep research to understand the core landscape before making our first move.</p>
          </div>
          <div style={{ paddingLeft: "2vw", borderLeft: "0.15vw solid #D93829" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", fontWeight: 400, margin: "0 0 1vh 0", color: "rgba(26, 26, 26, 0.8)" }}>Execution</h3>
            <p style={{ fontSize: "1vw", color: "rgba(26, 26, 26, 0.6)", lineHeight: 1.6, fontWeight: 300 }}>Swift, decisive action based on rigorous preparation. True mastery looks effortless but requires immense discipline.</p>
          </div>
          <div style={{ paddingLeft: "2vw", borderLeft: "0.15vw solid rgba(26, 26, 26, 0.1)" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", fontWeight: 400, margin: "0 0 1vh 0", color: "rgba(26, 26, 26, 0.8)" }}>Reflection</h3>
            <p style={{ fontSize: "1vw", color: "rgba(26, 26, 26, 0.6)", lineHeight: 1.6, fontWeight: 300 }}>We leave space for the solution to breathe, allowing the unspoken elements to communicate as powerfully as the spoken.</p>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "8vh", left: "12vw", right: "12vw", display: "flex", justifyContent: "space-between", fontSize: "0.9vw", color: "rgba(26, 26, 26, 0.5)", letterSpacing: "0.1em", fontWeight: 300 }}>
        <div style={{ display: "flex", gap: "4vw" }}>
          <span>acme.co</span>
          <span>Example Company, Inc.</span>
        </div>
        <span>02</span>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/InkWashPage3.tsx`)

```tsx
export function InkWashPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#F5F0E6", fontFamily: "'Inter', sans-serif", position: "relative", color: "#1A1A1A" }}>
      {/* Ink wash circles */}
      <div style={{ position: "absolute", top: "20vh", left: "30vw", width: "40vw", height: "40vw", background: "#1A1A1A", opacity: 0.05, borderRadius: "60% 40% 50% 50% / 50% 50% 40% 60%", filter: "blur(5vw)" }} />
      <div style={{ position: "absolute", bottom: "-10vh", left: "-10vw", width: "60vw", height: "60vw", background: "#1A1A1A", opacity: 0.03, borderRadius: "50%", filter: "blur(4vw)" }} />
      <div style={{ position: "absolute", top: "-5vh", right: "10vw", width: "30vw", height: "30vw", background: "#D93829", opacity: 0.03, borderRadius: "45% 55% 40% 60%", filter: "blur(6vw)" }} />

      <div style={{ position: "absolute", top: "10vh", left: "12vw", display: "flex", alignItems: "center", gap: "1.5vw" }}>
        <div style={{ width: "2vw", height: "2vw", background: "#D93829", display: "flex", alignItems: "center", justifyContent: "center", border: "0.15vw solid #F5F0E6", outline: "0.1vw solid #D93829" }}>
          <span style={{ color: "#F5F0E6", writingMode: "vertical-rl", fontSize: "0.8vw", fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: "-0.1em" }}>印</span>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 300, letterSpacing: "0.3em", color: "rgba(26, 26, 26, 0.6)", textTransform: "uppercase" }}>
          Impact &amp; Scale
        </div>
      </div>

      <div style={{ position: "absolute", top: "22vh", left: "12vw", width: "76vw" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5vw", fontWeight: 400, lineHeight: 1.2, margin: "0 0 8vh 0", color: "rgba(26, 26, 26, 0.9)", letterSpacing: "-0.02em" }}>
          The resonance of our work across<br />the global landscape.
        </h2>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8vh" }}>
          {/* Stat 1 */}
          <div style={{ width: "22vw", position: "relative" }}>
            <div style={{ position: "absolute", top: "-2vw", left: "-2vw", width: "8vw", height: "8vw", background: "rgba(26,26,26,0.06)", borderRadius: "50%", filter: "blur(1vw)", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#1A1A1A", lineHeight: 1 }}>42<span style={{ fontSize: "2.5vw", color: "#D93829" }}>%</span></div>
              <div style={{ height: "0.15vw", width: "4vw", background: "#D93829", margin: "2vh 0" }} />
              <div style={{ fontSize: "1.1vw", fontWeight: 400, color: "rgba(26, 26, 26, 0.8)", marginBottom: "1vh" }}>Market Expansion</div>
              <div style={{ fontSize: "0.9vw", fontWeight: 300, color: "rgba(26, 26, 26, 0.5)", lineHeight: 1.5 }}>Organic growth observed across all secondary markets in Q3.</div>
            </div>
          </div>

          {/* Stat 2 */}
          <div style={{ width: "22vw", position: "relative" }}>
            <div style={{ position: "absolute", top: "-2vw", left: "-2vw", width: "10vw", height: "9vw", background: "rgba(26,26,26,0.04)", borderRadius: "40% 60%", filter: "blur(1vw)", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#1A1A1A", lineHeight: 1 }}>8.5<span style={{ fontSize: "2.5vw", color: "rgba(26, 26, 26, 0.4)" }}>x</span></div>
              <div style={{ height: "0.15vw", width: "4vw", background: "rgba(26, 26, 26, 0.2)", margin: "2vh 0" }} />
              <div style={{ fontSize: "1.1vw", fontWeight: 400, color: "rgba(26, 26, 26, 0.8)", marginBottom: "1vh" }}>Velocity Multiplier</div>
              <div style={{ fontSize: "0.9vw", fontWeight: 300, color: "rgba(26, 26, 26, 0.5)", lineHeight: 1.5 }}>Accelerated delivery cycles due to refined methodologies.</div>
            </div>
          </div>

          {/* Stat 3 */}
          <div style={{ width: "22vw", position: "relative" }}>
            <div style={{ position: "absolute", top: "-1vw", left: "-3vw", width: "11vw", height: "10vw", background: "rgba(217, 56, 41, 0.05)", borderRadius: "60% 40%", filter: "blur(1.5vw)", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#1A1A1A", lineHeight: 1 }}>140<span style={{ fontSize: "2.5vw", color: "rgba(26, 26, 26, 0.4)" }}>k</span></div>
              <div style={{ height: "0.15vw", width: "4vw", background: "rgba(26, 26, 26, 0.2)", margin: "2vh 0" }} />
              <div style={{ fontSize: "1.1vw", fontWeight: 400, color: "rgba(26, 26, 26, 0.8)", marginBottom: "1vh" }}>Global Impressions</div>
              <div style={{ fontSize: "0.9vw", fontWeight: 300, color: "rgba(26, 26, 26, 0.5)", lineHeight: 1.5 }}>Subtle but powerful reach across targeted demographic segments.</div>
            </div>
          </div>
        </div>

      </div>

      <div style={{ position: "absolute", bottom: "8vh", left: "12vw", right: "12vw", display: "flex", justifyContent: "space-between", fontSize: "0.9vw", color: "rgba(26, 26, 26, 0.5)", letterSpacing: "0.1em", fontWeight: 300 }}>
        <div style={{ display: "flex", gap: "4vw" }}>
          <span>acme.co</span>
          <span>Example Company, Inc.</span>
        </div>
        <span>03</span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/InkWashPage4.tsx`)

```tsx
export function InkWashPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#F5F0E6", fontFamily: "'Inter', sans-serif", position: "relative", color: "#1A1A1A", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      {/* Ink wash circles */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "70vw", height: "70vw", background: "#1A1A1A", opacity: 0.04, borderRadius: "45% 55% 40% 60% / 55% 45% 60% 40%", filter: "blur(6vw)" }} />
      <div style={{ position: "absolute", top: "45%", left: "45%", transform: "translate(-50%, -50%)", width: "40vw", height: "45vw", background: "#D93829", opacity: 0.03, borderRadius: "50% 50% 50% 50% / 60% 40% 60% 40%", filter: "blur(4vw)" }} />
      
      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        {/* Large Hanko seal */}
        <div style={{ width: "5vw", height: "5vw", background: "#D93829", display: "flex", alignItems: "center", justifyContent: "center", border: "0.3vw solid #F5F0E6", outline: "0.15vw solid #D93829", marginBottom: "6vh" }}>
          <span style={{ color: "#F5F0E6", writingMode: "vertical-rl", fontSize: "2vw", fontFamily: "'Playfair Display', serif", fontWeight: 700, letterSpacing: "-0.1em" }}>印</span>
        </div>
        
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "6vw", fontWeight: 400, lineHeight: 1.1, margin: "0 0 3vh 0", color: "rgba(26, 26, 26, 0.9)", letterSpacing: "-0.02em" }}>
          Begin the dialogue.
        </h2>
        
        <p style={{ fontSize: "1.4vw", color: "rgba(26, 26, 26, 0.6)", marginBottom: "8vh", maxWidth: "40vw", lineHeight: 1.6, fontWeight: 300 }}>
          Mastery is a journey shared. Reach out to explore how our principles can elevate your vision.
        </p>

        <div style={{ display: "flex", gap: "4vw", borderTop: "0.1vw solid rgba(26, 26, 26, 0.1)", paddingTop: "4vh" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(26, 26, 26, 0.4)", fontWeight: 400 }}>Email</span>
            <span style={{ fontSize: "1.2vw", fontFamily: "'Playfair Display', serif", color: "#1A1A1A" }}>studio@acme.co</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(26, 26, 26, 0.4)", fontWeight: 400 }}>Location</span>
            <span style={{ fontSize: "1.2vw", fontFamily: "'Playfair Display', serif", color: "#1A1A1A" }}>Kyoto, JP &middot; New York, US</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(26, 26, 26, 0.4)", fontWeight: 400 }}>Social</span>
            <span style={{ fontSize: "1.2vw", fontFamily: "'Playfair Display', serif", color: "#1A1A1A" }}>@acme_studio</span>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "8vh", left: "12vw", right: "12vw", display: "flex", justifyContent: "space-between", fontSize: "0.9vw", color: "rgba(26, 26, 26, 0.5)", letterSpacing: "0.1em", fontWeight: 300 }}>
        <div style={{ display: "flex", gap: "4vw" }}>
          <span>acme.co</span>
          <span>Example Company, Inc.</span>
        </div>
        <span>04</span>
      </div>
    </div>
  );
}
```
