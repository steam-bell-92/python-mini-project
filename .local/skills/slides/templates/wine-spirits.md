# Wine & Spirits

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "WineSpirits" template features a sophisticated and elegant aesthetic, characterized by a dark, moody style. The background color is a solid #1A1216, while the text and accent colors are primarily #F0E8DC with varying opacities (rgba(240,232,220,0.6), rgba(240,232,220,0.7), and rgba(240,232,220,0.5)). The template uses the font family 'Playfair Display' for the main text and 'Inter' for secondary text, creating a contrast between a classic and modern feel. Key layout elements include a centered title, decorative lines, and a rotated accent element, all arranged in a flexible column layout. There are no background images specified in the code. The overall aesthetic feel can be described as "elegant sophistication."

## Source Code

**Component:** `WineSpirits`

### Slide 1 — Title (`slide-styles/WineSpirits.tsx`)

```tsx
export function WineSpirits() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#1A1216", fontFamily: "'Playfair Display', serif", color: "#F0E8DC", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,232,220,0.6)" }}>
          acme.co
        </div>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: "4vh", color: "rgba(240,232,220,0.7)" }}>
          EST. 2026
        </div>
        
        <h1 style={{ fontSize: "7vw", margin: 0, fontStyle: "italic", fontWeight: 400, letterSpacing: "0.05em", textAlign: "center" }}>
          Example Deck
        </h1>
        
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", margin: "4vh 0" }}>
          <div style={{ width: "8vw", height: "1px", background: "rgba(240,232,220,0.4)" }} />
          <div style={{ width: "0.5vw", height: "0.5vw", background: "none", border: "1px solid rgba(240,232,220,0.8)", transform: "rotate(45deg)" }} />
          <div style={{ width: "8vw", height: "1px", background: "rgba(240,232,220,0.4)" }} />
        </div>
        
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2vw", color: "rgba(240,232,220,0.6)", maxWidth: "40vw", textAlign: "center", lineHeight: 1.6, fontWeight: 300 }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", color: "rgba(240,232,220,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        <div>Example Company, Inc.</div>
        <div>Confidential</div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/WineSpiritsPage2.tsx`)

```tsx
export function WineSpiritsPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#1A1216", fontFamily: "'Playfair Display', serif", color: "#F0E8DC", position: "relative", display: "flex", flexDirection: "column", padding: "6vh 6vw", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,232,220,0.6)" }}>
          acme.co
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(240,232,220,0.7)" }}>
          The Process
        </div>
      </div>
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <h2 style={{ fontSize: "4vw", margin: "0 0 2vh 0", fontStyle: "italic", fontWeight: 400, letterSpacing: "0.02em" }}>
          Crafted with Patience
        </h2>
        <div style={{ width: "4vw", height: "1px", background: "rgba(240,232,220,0.4)", marginBottom: "6vh" }} />
        
        <div style={{ display: "flex", gap: "6vw" }}>
          {[
            { title: "Terroir", desc: "Sourced from the finest high-altitude vineyards, where the soil dictates the soul of the vine." },
            { title: "Distillation", desc: "A double-distillation process utilizing copper alembic stills for unparalleled purity." },
            { title: "Maturation", desc: "Aged for a minimum of 12 years in bespoke European oak casks to develop complex notes." }
          ].map((item, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ width: "2vw", height: "2vw", marginBottom: "2vh", border: "1px solid rgba(240,232,220,0.3)", transform: "rotate(45deg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "0.5vw", height: "0.5vw", background: "rgba(240,232,220,0.8)" }} />
              </div>
              <h3 style={{ fontSize: "1.8vw", marginBottom: "1.5vh", fontWeight: 400 }}>{item.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "rgba(240,232,220,0.6)", lineHeight: 1.6, fontWeight: 300 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", color: "rgba(240,232,220,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        <div>Example Company, Inc.</div>
        <div>02</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/WineSpiritsPage3.tsx`)

```tsx
export function WineSpiritsPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#1A1216", fontFamily: "'Playfair Display', serif", color: "#F0E8DC", position: "relative", display: "flex", flexDirection: "column", padding: "6vh 6vw", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,232,220,0.6)" }}>
          acme.co
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(240,232,220,0.7)" }}>
          By the Numbers
        </div>
      </div>
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "6vh" }}>
          <div style={{ width: "4vw", height: "1px", background: "rgba(240,232,220,0.4)" }} />
          <div style={{ width: "0.5vw", height: "0.5vw", background: "none", border: "1px solid rgba(240,232,220,0.8)", transform: "rotate(45deg)" }} />
          <div style={{ width: "4vw", height: "1px", background: "rgba(240,232,220,0.4)" }} />
        </div>
        
        <div style={{ display: "flex", justifyContent: "center", gap: "8vw", width: "100%" }}>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "6vw", fontStyle: "italic", lineHeight: 1 }}>18</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,232,220,0.5)", marginTop: "2vh" }}>Years Aged</div>
          </div>
          
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "6vw", fontStyle: "italic", lineHeight: 1 }}>250</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,232,220,0.5)", marginTop: "2vh" }}>Casks Produced</div>
          </div>

          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: "6vw", fontStyle: "italic", lineHeight: 1 }}>3</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,232,220,0.5)", marginTop: "2vh" }}>Gold Medals</div>
          </div>
        </div>

        <div style={{ marginTop: "10vh", padding: "4vh", border: "1px solid rgba(240,232,220,0.15)", width: "60vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "2vw", fontStyle: "italic" }}>Limited Reserve Allocation</div>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "rgba(240,232,220,0.8)" }}>Domestic: <span style={{ color: "rgba(240,232,220,0.5)" }}>45%</span></div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "rgba(240,232,220,0.8)" }}>Export: <span style={{ color: "rgba(240,232,220,0.5)" }}>55%</span></div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", color: "rgba(240,232,220,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        <div>Example Company, Inc.</div>
        <div>03</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/WineSpiritsPage4.tsx`)

```tsx
export function WineSpiritsPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#1A1216", fontFamily: "'Playfair Display', serif", color: "#F0E8DC", position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "6vh 6vw", boxSizing: "border-box" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,232,220,0.6)" }}>
          acme.co
        </div>
      </div>
      
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
        <h2 style={{ fontSize: "5vw", margin: 0, fontStyle: "italic", fontWeight: 400, letterSpacing: "0.02em", textAlign: "center" }}>
          Raise a Glass
        </h2>
        
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", margin: "4vh 0" }}>
          <div style={{ width: "8vw", height: "1px", background: "rgba(240,232,220,0.4)" }} />
          <div style={{ width: "0.5vw", height: "0.5vw", background: "none", border: "1px solid rgba(240,232,220,0.8)", transform: "rotate(45deg)" }} />
          <div style={{ width: "8vw", height: "1px", background: "rgba(240,232,220,0.4)" }} />
        </div>
        
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2vw", color: "rgba(240,232,220,0.6)", maxWidth: "35vw", textAlign: "center", lineHeight: 1.6, fontWeight: 300, marginBottom: "6vh" }}>
          Join us in our journey of crafting exceptional spirits. For allocation requests and exclusive tastings, connect with our cellar master.
        </p>

        <div style={{ padding: "2vh 4vw", border: "1px solid rgba(240,232,220,0.3)", display: "inline-block", fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "#F0E8DC" }}>
          Request Allocation
        </div>
        
        <div style={{ display: "flex", gap: "3vw", marginTop: "8vh", fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", color: "rgba(240,232,220,0.5)" }}>
          <span>cellar@acme.co</span>
          <span>+1 (800) 555-1234</span>
          <span>123 Vineyard Lane, CA</span>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", color: "rgba(240,232,220,0.5)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        <div>Example Company, Inc.</div>
        <div>04</div>
      </div>
    </div>
  );
}
```
