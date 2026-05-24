# Terracotta Studio

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "TerracottaStudio" template embodies a warm, earthy aesthetic, characterized by its terracotta color palette. The background color is a soft beige (#F5EDE0), complemented by organic shapes in light brown (#D2B48C) and dark brown (#A0522D) with varying opacities. Text elements utilize the font families 'DM Sans' for general text and 'Playfair Display' for the main heading, creating a modern yet classic feel. Key layout elements include rounded organic shapes positioned throughout the background, with a structured content area that features a mix of flexbox layouts for alignment. The overall aesthetic feel can be described as "warm organic."

## Source Code

**Component:** `TerracottaStudio`

### Slide 1 — Title (`slide-styles/TerracottaStudio.tsx`)

```tsx
export function TerracottaStudio() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#F5EDE0", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#B85C38" }}>
      {/* Background Organic Shapes */}
      <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "45vw", height: "60vh", background: "#D2B48C", borderRadius: "50% 30% 60% 40%", opacity: 0.6 }} />
      <div style={{ position: "absolute", bottom: "-15vh", left: "-10vw", width: "55vw", height: "55vw", background: "#A0522D", borderRadius: "40% 60% 50% 50%", opacity: 0.8 }} />
      <div style={{ position: "absolute", top: "20vh", left: "15vw", width: "12vw", height: "12vw", background: "#B85C38", borderRadius: "50%", opacity: 0.9 }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "20vw", width: "20vw", height: "15vh", background: "rgba(210, 180, 140, 0.4)", borderRadius: "100px", transform: "rotate(-15deg)" }} />

      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#8B4513", letterSpacing: "0.05em" }}>acme.co</div>
          <div style={{ fontSize: "1vw", color: "#A0522D", fontWeight: 500 }}>STUDIO EDITION</div>
        </div>

        <div style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ maxWidth: "60vw", textAlign: "right", paddingRight: "5vw" }}>
            <div style={{ fontSize: "1.2vw", color: "#A0522D", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "3vh", fontWeight: 600 }}>
              Artisanal Collection
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "7.5vw", fontWeight: 600, lineHeight: 1.1, margin: 0, color: "#4A2F1D", fontStyle: "italic" }}>
              Example Deck
            </h1>
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "4vh" }}>
              <p style={{ fontSize: "1.6vw", color: "#6B4423", maxWidth: "45vw", lineHeight: 1.6, fontWeight: 400, margin: 0 }}>
                Your compelling subtitle goes here. Describe your big idea in a single sentence.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
          <span style={{ fontSize: "1vw", color: "#F5EDE0", background: "#B85C38", padding: "0.5vh 1.5vw", borderRadius: "50px", fontWeight: 600, letterSpacing: "0.1em" }}>2026</span>
          <span style={{ fontSize: "1vw", color: "#8B4513", letterSpacing: "0.05em" }}>Crafted with care</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/TerracottaStudioPage2.tsx`)

```tsx
export function TerracottaStudioPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#F5EDE0", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#B85C38" }}>
      {/* Background Organic Shapes */}
      <div style={{ position: "absolute", top: "-15vh", left: "-5vw", width: "30vw", height: "40vh", background: "#D2B48C", borderRadius: "30% 70% 70% 30%", opacity: 0.5 }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "-10vw", width: "25vw", height: "25vw", background: "#B85C38", borderRadius: "50%", opacity: 0.1 }} />

      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#8B4513", letterSpacing: "0.05em" }}>acme.co</div>
          <div style={{ fontSize: "1vw", color: "#A0522D", fontWeight: 500 }}>OUR APPROACH</div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", height: "100%", marginTop: "8vh", gap: "6vw" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4.5vw", fontWeight: 600, lineHeight: 1.1, margin: "0 0 4vh 0", color: "#4A2F1D", fontStyle: "italic" }}>
              The Artisan Method
            </h2>
            <div style={{ fontSize: "1.2vw", color: "#A0522D", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2vh", fontWeight: 600 }}>
              Crafting Excellence
            </div>
            <p style={{ fontSize: "1.4vw", color: "#6B4423", lineHeight: 1.7, fontWeight: 400, margin: "0 0 3vh 0" }}>
              We believe in the power of careful, deliberate creation. Every detail is considered, every material is sourced with intention, and every process is refined to produce the highest quality results.
            </p>
            <p style={{ fontSize: "1.4vw", color: "#6B4423", lineHeight: 1.7, fontWeight: 400, margin: 0 }}>
              Our methodology combines traditional techniques with modern innovation, resulting in products that are both timeless and forward-thinking.
            </p>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh", justifyContent: "center" }}>
            {[
              { title: "Sourcing", desc: "Selecting only the finest sustainable materials." },
              { title: "Refining", desc: "Meticulous preparation and processing." },
              { title: "Creation", desc: "Expert assembly by master artisans." }
            ].map((item, i) => (
              <div key={i} style={{ background: "rgba(210, 180, 140, 0.2)", padding: "3vh 3vw", borderRadius: "16px", borderLeft: "0.5vw solid #A0522D" }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2vw", fontWeight: 600, color: "#8B4513", margin: "0 0 1vh 0" }}>{item.title}</h3>
                <p style={{ fontSize: "1.2vw", color: "#6B4423", margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", color: "#8B4513", letterSpacing: "0.05em" }}>Crafted with care</div>
          <span style={{ fontSize: "1vw", color: "#F5EDE0", background: "#B85C38", padding: "0.5vh 1.5vw", borderRadius: "50px", fontWeight: 600 }}>02</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/TerracottaStudioPage3.tsx`)

```tsx
export function TerracottaStudioPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#F5EDE0", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#B85C38" }}>
      {/* Background Organic Shapes */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "70vw", height: "70vw", background: "radial-gradient(circle, rgba(210,180,140,0.3) 0%, rgba(245,237,224,0) 70%)", borderRadius: "50%", pointerEvents: "none" }} />
      
      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#8B4513", letterSpacing: "0.05em" }}>acme.co</div>
          <div style={{ fontSize: "1vw", color: "#A0522D", fontWeight: 500 }}>MARKET IMPACT</div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, marginTop: "4vh" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5vw", fontWeight: 600, color: "#4A2F1D", fontStyle: "italic", marginBottom: "6vh", textAlign: "center" }}>
            Growth in the Artisan Sector
          </h2>

          <div style={{ display: "flex", gap: "4vw", alignItems: "flex-end", height: "40vh", width: "70vw", borderBottom: "0.2vw solid #A0522D", paddingBottom: "2vh" }}>
            {/* Chart Bars */}
            {[
              { year: "2023", value: 30, label: "30%" },
              { year: "2024", value: 55, label: "55%" },
              { year: "2025", value: 75, label: "75%" },
              { year: "2026", value: 100, label: "100%" }
            ].map((bar, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ fontSize: "1.5vw", fontWeight: "bold", color: "#8B4513", marginBottom: "1vh" }}>{bar.label}</div>
                <div style={{ 
                  width: "100%", 
                  height: `${bar.value * 0.3}vh`, 
                  background: i === 3 ? "#B85C38" : "rgba(160, 82, 45, 0.4)",
                  borderRadius: "12px 12px 0 0"
                }} />
                <div style={{ fontSize: "1.2vw", color: "#6B4423", marginTop: "2vh", fontWeight: 600 }}>{bar.year}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", justifyContent: "space-around", width: "70vw", marginTop: "6vh" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "3vw", fontFamily: "'Playfair Display', serif", color: "#8B4513", fontWeight: 600 }}>2.4x</div>
              <div style={{ fontSize: "1vw", color: "#A0522D", textTransform: "uppercase", letterSpacing: "0.1em" }}>Revenue Multiplier</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "3vw", fontFamily: "'Playfair Display', serif", color: "#8B4513", fontWeight: 600 }}>98%</div>
              <div style={{ fontSize: "1vw", color: "#A0522D", textTransform: "uppercase", letterSpacing: "0.1em" }}>Client Retention</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "3vw", fontFamily: "'Playfair Display', serif", color: "#8B4513", fontWeight: 600 }}>15k+</div>
              <div style={{ fontSize: "1vw", color: "#A0522D", textTransform: "uppercase", letterSpacing: "0.1em" }}>Products Crafted</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", color: "#8B4513", letterSpacing: "0.05em" }}>Crafted with care</div>
          <span style={{ fontSize: "1vw", color: "#F5EDE0", background: "#B85C38", padding: "0.5vh 1.5vw", borderRadius: "50px", fontWeight: 600 }}>03</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/TerracottaStudioPage4.tsx`)

```tsx
export function TerracottaStudioPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#F5EDE0", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#B85C38" }}>
      {/* Background Organic Shapes */}
      <div style={{ position: "absolute", top: "0", right: "0", width: "50vw", height: "100vh", background: "#D2B48C", borderTopLeftRadius: "50%", borderBottomLeftRadius: "20%", opacity: 0.4 }} />
      <div style={{ position: "absolute", bottom: "-20vh", left: "-10vw", width: "40vw", height: "40vw", background: "#A0522D", borderRadius: "50%", opacity: 0.6 }} />
      
      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#8B4513", letterSpacing: "0.05em" }}>acme.co</div>
          <div style={{ fontSize: "1vw", color: "#A0522D", fontWeight: 500 }}>CONNECT</div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", maxWidth: "60vw", background: "rgba(245, 237, 224, 0.7)", padding: "6vh 6vw", borderRadius: "24px", backdropFilter: "blur(10px)" }}>
            <div style={{ fontSize: "1.2vw", color: "#A0522D", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "3vh", fontWeight: 600 }}>
              Let's Create Together
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "6vw", fontWeight: 600, lineHeight: 1.1, margin: "0 0 4vh 0", color: "#4A2F1D", fontStyle: "italic" }}>
              Ready to Begin?
            </h2>
            <p style={{ fontSize: "1.5vw", color: "#6B4423", lineHeight: 1.6, fontWeight: 400, margin: "0 auto 5vh auto", maxWidth: "40vw" }}>
              Join us in our studio to discuss your next project. We're currently accepting commissions for the upcoming season.
            </p>
            
            <div style={{ display: "inline-block", background: "#B85C38", color: "#F5EDE0", fontSize: "1.5vw", fontWeight: 600, padding: "2vh 4vw", borderRadius: "50px", letterSpacing: "0.05em", cursor: "pointer", boxShadow: "0 10px 20px rgba(184, 92, 56, 0.2)" }}>
              Book a Consultation
            </div>
            
            <div style={{ marginTop: "6vh", display: "flex", justifyContent: "center", gap: "3vw" }}>
              <div style={{ fontSize: "1.2vw", color: "#8B4513" }}>hello@acme.co</div>
              <div style={{ fontSize: "1.2vw", color: "#8B4513" }}>+1 (555) 123-4567</div>
              <div style={{ fontSize: "1.2vw", color: "#8B4513" }}>@acme.studio</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", color: "#8B4513", letterSpacing: "0.05em" }}>Crafted with care</div>
          <span style={{ fontSize: "1vw", color: "#F5EDE0", background: "#B85C38", padding: "0.5vh 1.5vw", borderRadius: "50px", fontWeight: 600 }}>04</span>
        </div>
      </div>
    </div>
  );
}
```
