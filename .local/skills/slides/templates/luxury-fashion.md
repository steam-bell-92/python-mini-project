# Luxury Fashion

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "LuxuryFashion" template presents a sleek, modern aesthetic characterized by a minimalist design. It features a solid background color of #111111 (dark gray) and uses white (#FFFFFF) for the primary text color, with accents in rgba(255,255,255,0.4) for muted text and rgba(255,255,255,0.5) for subtitles. The font family is primarily Georgia and 'Times New Roman' for the overall text, while 'Inter' is used for various headings and accents, emphasizing a contemporary feel. Key layout elements include a centered title with italic styling, uppercase text for branding, and a subtle border around the main content area, enhancing the luxurious vibe. The overall aesthetic feel can be described as "elegant minimalism."

## Source Code

**Component:** `LuxuryFashion`

### Slide 1 — Title (`slide-styles/LuxuryFashion.tsx`)

```tsx
export function LuxuryFashion() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#111111", fontFamily: "Georgia, 'Times New Roman', serif", position: "relative", color: "#FFFFFF" }}>
      <div style={{ position: "absolute", inset: "3vh 3vw", border: "0.5px solid rgba(255,255,255,0.1)" }} />
      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", letterSpacing: "0.5em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            acme.co
          </div>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
            MMXXVI
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", marginBottom: "3vh" }}>
            Introducing
          </div>
          <h1 style={{ fontSize: "8vw", fontWeight: 400, margin: 0, lineHeight: 0.85, letterSpacing: "0.02em", fontStyle: "italic" }}>
            Example
          </h1>
          <h1 style={{ fontSize: "3vw", fontWeight: 400, margin: 0, letterSpacing: "0.8em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontStyle: "normal" }}>
            Deck
          </h1>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.5)", margin: "0 auto", maxWidth: "40vw", lineHeight: 1.8, fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Your compelling subtitle goes here
          </p>
          <div style={{ width: "5vw", height: "0.5px", background: "rgba(255,255,255,0.3)", margin: "2vh auto 0" }} />
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/LuxuryFashionPage2.tsx`)

```tsx
export function LuxuryFashionPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#000000", color: "#FFFFFF", fontFamily: "'Playfair Display', Georgia, serif", position: "relative", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      {/* Top Header */}
      <div style={{ position: "absolute", top: "4vh", left: "4vw", color: "#C9A96E", fontSize: "0.75vw", fontFamily: "'Inter', sans-serif", letterSpacing: "0.3em", textTransform: "uppercase", fontWeight: 300 }}>
        Example Company
      </div>

      {/* Top 60% - Statement */}
      <div style={{ height: "60vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 12vw" }}>
        <h2 style={{ fontSize: "3.5vw", fontWeight: 400, fontStyle: "italic", textAlign: "center", margin: 0, lineHeight: 1.3, letterSpacing: "0.02em" }}>
          We don't follow trends.<br />We define them.
        </h2>
      </div>

      {/* Separator */}
      <div style={{ width: "100vw", height: "1px", background: "rgba(201, 169, 110, 0.2)" }} />

      {/* Bottom 40% - Stats */}
      <div style={{ height: "40vh", display: "flex", alignItems: "center", justifyContent: "center", gap: "6vw", padding: "0 8vw", paddingBottom: "4vh" }}>
        {[
          { num: "47", label: "COUNTRIES" },
          { num: "12M", label: "CUSTOMERS" },
          { num: "340", label: "STORES" },
          { num: "98%", label: "RETENTION" },
        ].map((stat, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "12vw" }}>
            <div style={{ fontSize: "4vw", color: "#C9A96E", fontWeight: 400, marginBottom: "2vh", lineHeight: 1 }}>
              {stat.num}
            </div>
            <div style={{ width: "3vw", height: "1px", background: "rgba(201, 169, 110, 0.5)", marginBottom: "2.5vh" }} />
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.65vw", letterSpacing: "0.3em", color: "#FFFFFF", opacity: 0.8, fontWeight: 300 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: "4vh", left: "4vw", fontFamily: "'Inter', sans-serif", fontSize: "0.6vw", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", fontWeight: 300 }}>
        Example Company, Inc. / Confidential
      </div>
      <div style={{ position: "absolute", bottom: "4vh", right: "4vw", fontFamily: "'Inter', sans-serif", fontSize: "0.6vw", color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", fontWeight: 300 }}>
        02
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/LuxuryFashionPage3.tsx`)

```tsx
export function LuxuryFashionPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#111111", fontFamily: "Georgia, 'Times New Roman', serif", position: "relative", color: "#FFFFFF" }}>
      <div style={{ position: "absolute", inset: "3vh 3vw", border: "0.5px solid rgba(255,255,255,0.1)" }} />
      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ fontSize: "0.8vw", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", marginBottom: "1vh" }}>
              Collection Stats
            </div>
            <h2 style={{ fontSize: "4vw", fontWeight: 400, margin: 0, lineHeight: 1, letterSpacing: "0.02em", fontStyle: "italic" }}>
              Performance
            </h2>
          </div>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
            03
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flex: 1, marginTop: "8vh", marginBottom: "4vh", gap: "6vw" }}>
          {/* Column 1 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ width: "3vw", height: "0.5px", background: "rgba(255,255,255,0.3)", marginBottom: "3vh" }} />
              <div style={{ fontSize: "5vw", lineHeight: 0.9, marginBottom: "1vh", fontStyle: "italic" }}>42%</div>
              <div style={{ fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", marginBottom: "3vh" }}>
                Growth Year Over Year
              </div>
              <p style={{ fontSize: "1vw", color: "rgba(255,255,255,0.4)", lineHeight: 1.8, fontFamily: "'Inter', sans-serif", fontWeight: 300, maxWidth: "80%" }}>
                Unprecedented expansion across major metropolitan centers, driven by bespoke capsule collections and exclusive VIP access tiers.
              </p>
            </div>
            
            <div>
              <div style={{ width: "3vw", height: "0.5px", background: "rgba(255,255,255,0.3)", marginBottom: "3vh" }} />
              <div style={{ fontSize: "5vw", lineHeight: 0.9, marginBottom: "1vh", fontStyle: "italic" }}>1.2M</div>
              <div style={{ fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", marginBottom: "3vh" }}>
                Active Global Clientele
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", borderLeft: "0.5px solid rgba(255,255,255,0.1)", paddingLeft: "6vw" }}>
            <div style={{ fontSize: "1.2vw", fontStyle: "italic", marginBottom: "4vh", color: "rgba(255,255,255,0.8)" }}>
              "Redefining the boundaries of modern elegance through uncompromising quality."
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "3vh", flex: 1 }}>
              {[
                { label: "Paris", value: "+ 24%", width: "80%" },
                { label: "Milan", value: "+ 18%", width: "65%" },
                { label: "Tokyo", value: "+ 31%", width: "95%" },
                { label: "New York", value: "+ 12%", width: "45%" }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>{item.label}</span>
                    <span>{item.value}</span>
                  </div>
                  <div style={{ width: "100%", height: "1px", background: "rgba(255,255,255,0.1)" }}>
                    <div style={{ width: item.width, height: "100%", background: "#FFFFFF" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "0.5px solid rgba(255,255,255,0.1)", paddingTop: "3vh" }}>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif" }}>
            acme.co
          </div>
          <div style={{ fontSize: "0.8vw", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            Confidential
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/LuxuryFashionPage4.tsx`)

```tsx
export function LuxuryFashionPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#111111", fontFamily: "Georgia, 'Times New Roman', serif", position: "relative", color: "#FFFFFF" }}>
      <div style={{ position: "absolute", inset: "3vh 3vw", border: "0.5px solid rgba(255,255,255,0.1)" }} />
      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", letterSpacing: "0.5em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
            acme.co
          </div>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif" }}>
            04
          </div>
        </div>

        {/* Main Content */}
        <div style={{ textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", marginBottom: "4vh" }}>
            The Future Awaits
          </div>
          
          <h1 style={{ fontSize: "7vw", fontWeight: 400, margin: 0, lineHeight: 0.9, letterSpacing: "0.02em", fontStyle: "italic", marginBottom: "2vh" }}>
            Connect
          </h1>
          <h1 style={{ fontSize: "2.5vw", fontWeight: 400, margin: 0, letterSpacing: "0.8em", textTransform: "uppercase", fontFamily: "'Inter', sans-serif", fontStyle: "normal", marginBottom: "8vh" }}>
            With Us
          </h1>
          
          <div style={{ display: "flex", gap: "6vw", marginTop: "2vh", borderTop: "0.5px solid rgba(255,255,255,0.2)", paddingTop: "6vh" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.7vw", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", marginBottom: "2vh" }}>
                Inquiries
              </div>
              <div style={{ fontSize: "1.2vw", fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: "0.05em" }}>
                atelier@acme.co
              </div>
            </div>
            
            <div style={{ width: "1px", height: "100%", background: "rgba(255,255,255,0.1)" }} />
            
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.7vw", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", marginBottom: "2vh" }}>
                Press
              </div>
              <div style={{ fontSize: "1.2vw", fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: "0.05em" }}>
                press@acme.co
              </div>
            </div>
            
            <div style={{ width: "1px", height: "100%", background: "rgba(255,255,255,0.1)" }} />
            
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.7vw", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', sans-serif", marginBottom: "2vh" }}>
                Flagship
              </div>
              <div style={{ fontSize: "1.2vw", fontFamily: "'Inter', sans-serif", fontWeight: 300, letterSpacing: "0.05em" }}>
                Paris, France
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", fontFamily: "'Inter', sans-serif" }}>
            © MMXXVI ACME CORPORATION
          </div>
        </div>
      </div>
    </div>
  );
}
```
