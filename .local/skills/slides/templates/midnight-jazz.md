# Midnight Jazz

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "MidnightJazz" template features a sophisticated and moody aesthetic, characterized by a deep, dark color palette. The background color is a solid #1A1612, complemented by radial gradients in shades of #D4A84B (rgba(212,168,75,0.15) and rgba(158,107,107,0.1)) that create a smoky effect. Text and accent colors include #D4A84B for primary text, #9E6B6B for secondary text, and a soft rgba(255,255,255,0.6) for subtitles. The font families used are 'Inter' for body text and 'Playfair Display' for headings, providing a modern yet elegant contrast. Key layout elements include abstract shapes with rounded edges and decorative rhythm dots, positioned dynamically across the slide, enhancing the musical theme. There are no background images specified in the code. The overall aesthetic feel can be described as "elegant, moody, artistic."

## Source Code

**Component:** `MidnightJazz`

### Slide 1 — Title (`slide-styles/MidnightJazz.tsx`)

```tsx
export function MidnightJazz() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#1A1612", fontFamily: "'Inter', sans-serif", position: "relative", color: "#D4A84B" }}>
      {/* Smoky / lighting effects */}
      <div style={{ position: "absolute", top: "-20vh", left: "-10vw", width: "60vw", height: "60vw", background: "radial-gradient(circle, rgba(212,168,75,0.15) 0%, rgba(26,22,18,0) 70%)" }} />
      <div style={{ position: "absolute", bottom: "-30vh", right: "-20vw", width: "80vw", height: "80vw", background: "radial-gradient(circle, rgba(158,107,107,0.1) 0%, rgba(26,22,18,0) 60%)" }} />
      
      {/* Musical notation / rhythm abstract shapes */}
      <div style={{ position: "absolute", top: "15vh", right: "10vw", width: "40vw", height: "70vh", borderRight: "1px solid rgba(212,168,75,0.3)", borderRadius: "50%", transform: "rotate(15deg)" }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "35vw", height: "60vh", borderRight: "1px solid rgba(212,168,75,0.15)", borderRadius: "50%", transform: "rotate(10deg)" }} />
      <div style={{ position: "absolute", top: "25vh", right: "20vw", width: "30vw", height: "50vh", borderRight: "1px solid rgba(158,107,107,0.2)", borderRadius: "50%", transform: "rotate(5deg)" }} />

      {/* Rhythm dots */}
      <div style={{ position: "absolute", bottom: "25vh", right: "25vw", width: "0.4vw", height: "0.4vw", background: "#D4A84B", borderRadius: "50%", boxShadow: "0 0 10px #D4A84B" }} />
      <div style={{ position: "absolute", bottom: "30vh", right: "22vw", width: "0.6vw", height: "0.6vw", background: "#9E6B6B", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "20vh", right: "18vw", width: "0.3vw", height: "0.3vw", background: "#D4A84B", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "38vh", right: "28vw", width: "0.5vw", height: "0.5vw", background: "rgba(212,168,75,0.5)", borderRadius: "50%" }} />
      
      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.1vw", fontWeight: 400, color: "#9E6B6B", letterSpacing: "0.2em", textTransform: "uppercase" }}>acme.co</div>
          <div style={{ display: "flex", gap: "0.5vw" }}>
            <div style={{ width: "0.3vw", height: "1.5vh", background: "#D4A84B", opacity: 0.4 }} />
            <div style={{ width: "0.3vw", height: "2.5vh", background: "#D4A84B", opacity: 0.7 }} />
            <div style={{ width: "0.3vw", height: "1.8vh", background: "#D4A84B", opacity: 0.5 }} />
            <div style={{ width: "0.3vw", height: "3vh", background: "#D4A84B", opacity: 0.9 }} />
            <div style={{ width: "0.3vw", height: "1.2vh", background: "#D4A84B", opacity: 0.3 }} />
          </div>
        </div>

        <div style={{ maxWidth: "55vw", paddingLeft: "2vw" }}>
          <div style={{ fontSize: "1vw", color: "#9E6B6B", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "4vh" }}>
            Late Night Sessions
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "8vw", fontWeight: 400, lineHeight: 1, margin: 0, color: "#D4A84B", fontStyle: "italic", textShadow: "0 4px 20px rgba(212,168,75,0.2)" }}>
            Example Deck
          </h1>
          <div style={{ width: "5vw", height: "2px", background: "linear-gradient(90deg, #D4A84B, transparent)", margin: "4vh 0" }} />
          <p style={{ fontSize: "1.5vw", color: "rgba(255,255,255,0.6)", maxWidth: "40vw", lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(212,168,75,0.2)", paddingTop: "3vh" }}>
          <span style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>CONFIDENTIAL &mdash; 2026</span>
          <span style={{ fontSize: "0.9vw", color: "#D4A84B", letterSpacing: "0.2em", fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>Volume I</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/MidnightJazzPage2.tsx`)

```tsx
export function MidnightJazzPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#1A1612", fontFamily: "'Inter', sans-serif", position: "relative", color: "#D4A84B" }}>
      {/* Smoky / lighting effects */}
      <div style={{ position: "absolute", top: "-20vh", left: "-10vw", width: "60vw", height: "60vw", background: "radial-gradient(circle, rgba(212,168,75,0.1) 0%, rgba(26,22,18,0) 70%)" }} />
      
      {/* Rhythm dots */}
      <div style={{ position: "absolute", top: "25vh", right: "8vw", width: "0.4vw", height: "0.4vw", background: "#D4A84B", borderRadius: "50%", boxShadow: "0 0 10px #D4A84B" }} />
      <div style={{ position: "absolute", top: "30vh", right: "12vw", width: "0.6vw", height: "0.6vw", background: "#9E6B6B", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "0.3vw", height: "0.3vw", background: "#D4A84B", borderRadius: "50%" }} />

      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.1vw", fontWeight: 400, color: "#9E6B6B", letterSpacing: "0.2em", textTransform: "uppercase" }}>acme.co</div>
          <div style={{ display: "flex", gap: "0.5vw" }}>
            <div style={{ width: "0.3vw", height: "1.5vh", background: "#D4A84B", opacity: 0.4 }} />
            <div style={{ width: "0.3vw", height: "2.5vh", background: "#D4A84B", opacity: 0.7 }} />
            <div style={{ width: "0.3vw", height: "1.8vh", background: "#D4A84B", opacity: 0.5 }} />
          </div>
        </div>

        <div style={{ display: "flex", flex: 1, marginTop: "8vh", gap: "6vw" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4.5vw", fontWeight: 400, lineHeight: 1.1, margin: "0 0 3vh 0", color: "#D4A84B", fontStyle: "italic" }}>
              The Rhythm of Business
            </h2>
            <div style={{ width: "4vw", height: "2px", background: "linear-gradient(90deg, #D4A84B, transparent)", marginBottom: "4vh" }} />
            
            <p style={{ fontSize: "1.4vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontWeight: 300, marginBottom: "3vh" }}>
              Just like a well-composed jazz piece, modern enterprises require a delicate balance of structure and improvisation. We provide the underlying tempo that allows your team to perform at their best.
            </p>
            <p style={{ fontSize: "1.4vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, fontWeight: 300 }}>
              When the harmony is right, innovation flows naturally. Our approach ensures that every department is playing in the same key.
            </p>
          </div>
          
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh", justifyContent: "center" }}>
            <div style={{ padding: "4vh 3vw", borderLeft: "2px solid #D4A84B", background: "linear-gradient(90deg, rgba(212,168,75,0.05) 0%, transparent 100%)" }}>
              <div style={{ fontSize: "1.2vw", color: "#9E6B6B", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1vh" }}>01. Syncopation</div>
              <div style={{ fontSize: "1.6vw", color: "#fff", fontWeight: 300 }}>Finding opportunities in the spaces between standard procedures.</div>
            </div>
            <div style={{ padding: "4vh 3vw", borderLeft: "2px solid rgba(212,168,75,0.3)", background: "linear-gradient(90deg, rgba(212,168,75,0.02) 0%, transparent 100%)" }}>
              <div style={{ fontSize: "1.2vw", color: "rgba(158,107,107,0.6)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1vh" }}>02. Harmony</div>
              <div style={{ fontSize: "1.6vw", color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>Aligning cross-functional teams to a single, unified vision.</div>
            </div>
            <div style={{ padding: "4vh 3vw", borderLeft: "2px solid rgba(212,168,75,0.3)", background: "linear-gradient(90deg, rgba(212,168,75,0.02) 0%, transparent 100%)" }}>
              <div style={{ fontSize: "1.2vw", color: "rgba(158,107,107,0.6)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1vh" }}>03. Resonance</div>
              <div style={{ fontSize: "1.6vw", color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>Creating lasting impact that echoes throughout the market.</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(212,168,75,0.2)", paddingTop: "3vh" }}>
          <span style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>CONFIDENTIAL &mdash; 2026</span>
          <span style={{ fontSize: "0.9vw", color: "#D4A84B", letterSpacing: "0.2em", fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>02</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/MidnightJazzPage3.tsx`)

```tsx
export function MidnightJazzPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#1A1612", fontFamily: "'Inter', sans-serif", position: "relative", color: "#D4A84B" }}>
      {/* Smoky / lighting effects */}
      <div style={{ position: "absolute", bottom: "-20vh", right: "-10vw", width: "70vw", height: "70vw", background: "radial-gradient(circle, rgba(158,107,107,0.15) 0%, rgba(26,22,18,0) 60%)" }} />
      
      {/* Abstract circles for data visualization feel */}
      <div style={{ position: "absolute", top: "40vh", right: "25vw", width: "30vw", height: "30vw", border: "1px dashed rgba(212,168,75,0.2)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: "45vh", right: "30vw", width: "20vw", height: "20vw", border: "1px dashed rgba(158,107,107,0.3)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: "50vh", right: "35vw", width: "10vw", height: "10vw", border: "1px solid rgba(212,168,75,0.5)", borderRadius: "50%" }} />

      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.1vw", fontWeight: 400, color: "#9E6B6B", letterSpacing: "0.2em", textTransform: "uppercase" }}>acme.co</div>
          <div style={{ display: "flex", gap: "0.5vw" }}>
            <div style={{ width: "0.3vw", height: "1.5vh", background: "#D4A84B", opacity: 0.4 }} />
            <div style={{ width: "0.3vw", height: "2.5vh", background: "#D4A84B", opacity: 0.7 }} />
            <div style={{ width: "0.3vw", height: "3.5vh", background: "#D4A84B", opacity: 0.9 }} />
          </div>
        </div>

        <div style={{ flex: 1, marginTop: "6vh" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5vw", fontWeight: 400, margin: "0 0 2vh 0", color: "#D4A84B", fontStyle: "italic" }}>
            Crescendo of Growth
          </h2>
          <div style={{ width: "5vw", height: "2px", background: "linear-gradient(90deg, #9E6B6B, transparent)", marginBottom: "6vh" }} />

          <div style={{ display: "flex", gap: "4vw", height: "45vh", alignItems: "flex-end" }}>
            {/* Chart bars */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2vw", fontFamily: "'Playfair Display', serif", color: "#D4A84B", fontStyle: "italic" }}>24%</div>
              <div style={{ width: "100%", height: "15vh", background: "linear-gradient(0deg, rgba(212,168,75,0.1), rgba(212,168,75,0.3))", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: 0, width: "100%", height: "1px", background: "#D4A84B" }} />
              </div>
              <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>Q1</div>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2vw", fontFamily: "'Playfair Display', serif", color: "#D4A84B", fontStyle: "italic" }}>42%</div>
              <div style={{ width: "100%", height: "25vh", background: "linear-gradient(0deg, rgba(212,168,75,0.1), rgba(212,168,75,0.4))", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: 0, width: "100%", height: "1px", background: "#D4A84B" }} />
              </div>
              <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>Q2</div>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2vw", fontFamily: "'Playfair Display', serif", color: "#D4A84B", fontStyle: "italic" }}>68%</div>
              <div style={{ width: "100%", height: "35vh", background: "linear-gradient(0deg, rgba(158,107,107,0.2), rgba(158,107,107,0.6))", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", bottom: 0, width: "100%", height: "1px", background: "#9E6B6B" }} />
              </div>
              <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>Q3</div>
            </div>

            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2.5vw", fontFamily: "'Playfair Display', serif", color: "#fff", fontStyle: "italic" }}>96%</div>
              <div style={{ width: "100%", height: "45vh", background: "linear-gradient(0deg, rgba(212,168,75,0.2), rgba(212,168,75,0.8))", position: "relative", overflow: "hidden", boxShadow: "0 0 30px rgba(212,168,75,0.2)" }}>
                <div style={{ position: "absolute", bottom: 0, width: "100%", height: "2px", background: "#fff" }} />
              </div>
              <div style={{ fontSize: "1.1vw", color: "#D4A84B", letterSpacing: "0.1em", fontWeight: "bold" }}>Q4</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(212,168,75,0.2)", paddingTop: "3vh", marginTop: "4vh" }}>
          <span style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>CONFIDENTIAL &mdash; 2026</span>
          <span style={{ fontSize: "0.9vw", color: "#D4A84B", letterSpacing: "0.2em", fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>03</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/MidnightJazzPage4.tsx`)

```tsx
export function MidnightJazzPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#1A1612", fontFamily: "'Inter', sans-serif", position: "relative", color: "#D4A84B" }}>
      {/* Smoky / lighting effects */}
      <div style={{ position: "absolute", top: "10vh", left: "20vw", width: "60vw", height: "60vw", background: "radial-gradient(circle, rgba(212,168,75,0.12) 0%, rgba(26,22,18,0) 60%)" }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "10vw", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(158,107,107,0.15) 0%, rgba(26,22,18,0) 70%)" }} />
      
      {/* Musical notation / rhythm abstract shapes */}
      <div style={{ position: "absolute", top: "5vh", left: "5vw", width: "90vw", height: "90vh", border: "1px solid rgba(212,168,75,0.05)", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: "10vh", left: "10vw", width: "80vw", height: "80vh", border: "1px solid rgba(158,107,107,0.05)", borderRadius: "50%" }} />

      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.1vw", fontWeight: 400, color: "#9E6B6B", letterSpacing: "0.2em", textTransform: "uppercase" }}>acme.co</div>
          <div style={{ display: "flex", gap: "0.5vw" }}>
            <div style={{ width: "0.3vw", height: "1.5vh", background: "#D4A84B", opacity: 0.8 }} />
            <div style={{ width: "0.3vw", height: "1.5vh", background: "#D4A84B", opacity: 0.8 }} />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center" }}>
          <div style={{ fontSize: "1.2vw", color: "#9E6B6B", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "4vh" }}>
            The Finale
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "7vw", fontWeight: 400, lineHeight: 1.1, margin: "0 0 4vh 0", color: "#D4A84B", fontStyle: "italic", textShadow: "0 4px 20px rgba(212,168,75,0.3)" }}>
            Let's Make Music
          </h1>
          <p style={{ fontSize: "1.6vw", color: "rgba(255,255,255,0.7)", maxWidth: "50vw", lineHeight: 1.6, fontWeight: 300, margin: "0 0 6vh 0" }}>
            Join us in orchestrating the next big shift in your industry. The stage is set, and the audience is waiting.
          </p>
          
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ padding: "2vh 4vw", border: "1px solid #D4A84B", color: "#1A1612", background: "#D4A84B", fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s ease" }}>
              Take the Stage
            </div>
            <div style={{ padding: "2vh 4vw", border: "1px solid rgba(212,168,75,0.4)", color: "#D4A84B", background: "transparent", fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.3s ease" }}>
              View the Score
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(212,168,75,0.2)", paddingTop: "3vh" }}>
          <span style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>hello@acme.co &nbsp;&nbsp;|&nbsp;&nbsp; +1 (800) 555-JAZZ</span>
          <span style={{ fontSize: "0.9vw", color: "#D4A84B", letterSpacing: "0.2em", fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>04</span>
        </div>
      </div>
    </div>
  );
}
```
