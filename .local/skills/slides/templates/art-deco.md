# Art Deco

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "ArtDeco" template features a sleek, modern aesthetic with a dark and luxurious feel. The background color is a solid black (#0C0C0C), while the text and accent colors include a gold shade (#D4AF37) and a lighter gold with transparency (rgba(212,175,55,0.3) and rgba(212,175,55,0.7)). The font family used is 'DM Sans', sans-serif, which is applied throughout the component for a clean and contemporary look. Key layout elements include multiple horizontal and vertical lines created with linear gradients, positioned at the top, bottom, and sides of the slide, along with a centered text block that features decorative elements like horizontal lines and arrows (&#9670;). The overall aesthetic feel can be described as "elegant, modern, luxurious."

## Source Code

**Component:** `ArtDeco`

### Slide 1 — Title (`slide-styles/ArtDeco.tsx`)

```tsx
export function ArtDeco() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#0C0C0C", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#D4AF37" }}>
      <div style={{ position: "absolute", top: 0, left: "5vw", right: "5vw", height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: "5vw", right: "5vw", height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
      <div style={{ position: "absolute", top: "3vh", left: "5vw", right: "5vw", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      <div style={{ position: "absolute", bottom: "3vh", left: "5vw", right: "5vw", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      <div style={{ position: "absolute", top: "3vh", left: "5vw", width: "1px", bottom: "3vh", background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      <div style={{ position: "absolute", top: "3vh", right: "5vw", width: "1px", bottom: "3vh", background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      <div style={{ padding: "7vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", textAlign: "center" }}>
        <div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2vw" }}>
            <div style={{ width: "8vw", height: "1px", background: "#D4AF37" }} />
            <div style={{ fontSize: "0.9vw", letterSpacing: "0.5em", textTransform: "uppercase" }}>Example Company Presents</div>
            <div style={{ width: "8vw", height: "1px", background: "#D4AF37" }} />
          </div>
        </div>
        <div>
          <div style={{ fontSize: "1.5vw", letterSpacing: "1em", textTransform: "uppercase", marginBottom: "2vh" }}>
            Introducing
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1vw", marginBottom: "1vh" }}>
            <div style={{ fontSize: "3vw" }}>&#9670;</div>
            <div style={{ fontSize: "3vw" }}>&#9670;</div>
            <div style={{ fontSize: "3vw" }}>&#9670;</div>
          </div>
          <h1 style={{ fontSize: "7vw", fontWeight: 700, margin: 0, lineHeight: 0.9, color: "#FFFFFF", letterSpacing: "0.1em" }}>
            EXAMPLE
          </h1>
          <h1 style={{ fontSize: "3.5vw", fontWeight: 400, margin: 0, letterSpacing: "0.6em" }}>
            DECK
          </h1>
          <div style={{ width: "15vw", height: "2px", background: "#D4AF37", margin: "2.5vh auto" }} />
          <p style={{ fontSize: "1.2vw", color: "rgba(212,175,55,0.7)", letterSpacing: "0.15em", maxWidth: "45vw", margin: "0 auto", lineHeight: 1.6 }}>
            A subtitle that captures your vision
          </p>
        </div>
        <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(212,175,55,0.5)" }}>
          Confidential / MMXXVI
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ArtDecoPage2.tsx`)

```tsx
export function ArtDecoPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#0A0A0A", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#D4AF37" }}>
      {/* Outer Border */}
      <div style={{ position: "absolute", top: "2vh", left: "2vw", right: "2vw", bottom: "2vh", border: "1px solid #D4AF37", opacity: 0.8 }} />
      <div style={{ position: "absolute", top: "3vh", left: "3vw", right: "3vw", bottom: "3vh", border: "2px solid #D4AF37" }} />
      
      {/* Corner Ornaments */}
      <div style={{ position: "absolute", top: "2vh", left: "2vw", width: "3vw", height: "3vw", borderRight: "2px solid #D4AF37", borderBottom: "2px solid #D4AF37", background: "#0A0A0A" }} />
      <div style={{ position: "absolute", top: "2vh", right: "2vw", width: "3vw", height: "3vw", borderLeft: "2px solid #D4AF37", borderBottom: "2px solid #D4AF37", background: "#0A0A0A" }} />
      <div style={{ position: "absolute", bottom: "2vh", left: "2vw", width: "3vw", height: "3vw", borderRight: "2px solid #D4AF37", borderTop: "2px solid #D4AF37", background: "#0A0A0A" }} />
      <div style={{ position: "absolute", bottom: "2vh", right: "2vw", width: "3vw", height: "3vw", borderLeft: "2px solid #D4AF37", borderTop: "2px solid #D4AF37", background: "#0A0A0A" }} />

      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2vw", marginBottom: "8vh", marginTop: "4vh" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "1vw", height: "1vw", background: "#D4AF37", transform: "rotate(45deg)" }} />
            <div style={{ width: "15vw", height: "1px", background: "#D4AF37" }} />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3vw", fontWeight: 700, margin: 0, letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Our Pillars
          </h2>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "15vw", height: "1px", background: "#D4AF37" }} />
            <div style={{ width: "1vw", height: "1vw", background: "#D4AF37", transform: "rotate(45deg)" }} />
          </div>
        </div>

        {/* 3 Columns */}
        <div style={{ display: "flex", flex: 1, justifyContent: "space-between", alignItems: "stretch", padding: "0 2vw" }}>
          
          {/* Column 1 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 2vw" }}>
            <div style={{ fontSize: "4vw", color: "#D4AF37", marginBottom: "3vh" }}>&#9670;</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5vw", margin: "0 0 3vh 0", letterSpacing: "0.1em" }}>Excellence</h3>
            <div style={{ width: "4vw", height: "2px", background: "#D4AF37", marginBottom: "3vh" }} />
            <p style={{ fontSize: "1.2vw", color: "#FDFBF7", lineHeight: 1.8, opacity: 0.9 }}>
              Upholding the highest standards in every endeavor.
              <br />
              Relentless pursuit of quality and precision.
              <br />
              Delivering unparalleled results consistently.
            </p>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", background: "#D4AF37", transform: "rotate(45deg)", marginBottom: "1vh" }} />
            <div style={{ width: "1px", flex: 1, background: "#D4AF37" }} />
            <div style={{ width: "0.5vw", height: "0.5vw", background: "#D4AF37", transform: "rotate(45deg)", marginTop: "1vh" }} />
          </div>

          {/* Column 2 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 2vw" }}>
            <div style={{ display: "flex", gap: "0.5vw", marginBottom: "3vh", alignItems: "flex-end" }}>
              <div style={{ width: "1vw", height: "2vw", border: "1px solid #D4AF37" }} />
              <div style={{ width: "1vw", height: "3vw", border: "1px solid #D4AF37", background: "#D4AF37" }} />
              <div style={{ width: "1vw", height: "4vw", border: "1px solid #D4AF37", background: "#D4AF37" }} />
              <div style={{ width: "1vw", height: "3vw", border: "1px solid #D4AF37", background: "#D4AF37" }} />
              <div style={{ width: "1vw", height: "2vw", border: "1px solid #D4AF37" }} />
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5vw", margin: "0 0 3vh 0", letterSpacing: "0.1em" }}>Innovation</h3>
            <div style={{ width: "4vw", height: "2px", background: "#D4AF37", marginBottom: "3vh" }} />
            <p style={{ fontSize: "1.2vw", color: "#FDFBF7", lineHeight: 1.8, opacity: 0.9 }}>
              Pioneering solutions for tomorrow's challenges.
              <br />
              Embracing bold ideas and creative thinking.
              <br />
              Transforming industries through vision.
            </p>
          </div>

          {/* Divider */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", background: "#D4AF37", transform: "rotate(45deg)", marginBottom: "1vh" }} />
            <div style={{ width: "1px", flex: 1, background: "#D4AF37" }} />
            <div style={{ width: "0.5vw", height: "0.5vw", background: "#D4AF37", transform: "rotate(45deg)", marginTop: "1vh" }} />
          </div>

          {/* Column 3 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 2vw" }}>
            <div style={{ position: "relative", width: "4vw", height: "4vw", marginBottom: "3vh" }}>
              <div style={{ position: "absolute", top: "1vw", left: 0, width: "4vw", height: "2vw", border: "1px solid #D4AF37" }} />
              <div style={{ position: "absolute", top: 0, left: "1vw", width: "2vw", height: "4vw", border: "1px solid #D4AF37" }} />
              <div style={{ position: "absolute", top: "1.5vw", left: "1.5vw", width: "1vw", height: "1vw", background: "#D4AF37", transform: "rotate(45deg)" }} />
            </div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5vw", margin: "0 0 3vh 0", letterSpacing: "0.1em" }}>Integrity</h3>
            <div style={{ width: "4vw", height: "2px", background: "#D4AF37", marginBottom: "3vh" }} />
            <p style={{ fontSize: "1.2vw", color: "#FDFBF7", lineHeight: 1.8, opacity: 0.9 }}>
              Operating with unwavering ethical principles.
              <br />
              Building trust through absolute transparency.
              <br />
              Commitment to honorable practices always.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div style={{ position: "absolute", bottom: "4vh", left: "8vw", right: "8vw", display: "flex", justifyContent: "space-between", fontSize: "0.8vw", letterSpacing: "0.2em", opacity: 0.7 }}>
          <span>EXAMPLE COMPANY, INC. / CONFIDENTIAL</span>
          <span>02</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ArtDecoPage3.tsx`)

```tsx
export function ArtDecoPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#0C0C0C", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#D4AF37" }}>
      <div style={{ position: "absolute", top: 0, left: "5vw", right: "5vw", height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: "5vw", right: "5vw", height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
      <div style={{ position: "absolute", top: "3vh", left: "5vw", right: "5vw", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      <div style={{ position: "absolute", bottom: "3vh", left: "5vw", right: "5vw", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      <div style={{ position: "absolute", top: "3vh", left: "5vw", width: "1px", bottom: "3vh", background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      <div style={{ position: "absolute", top: "3vh", right: "5vw", width: "1px", bottom: "3vh", background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      
      <div style={{ padding: "7vh 8vw", display: "flex", flexDirection: "column", height: "100%", position: "relative" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
          <div>
            <h2 style={{ fontSize: "3vw", fontWeight: 700, margin: 0, color: "#FFFFFF", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              PERFORMANCE
            </h2>
            <div style={{ fontSize: "1.2vw", letterSpacing: "0.5em", textTransform: "uppercase", marginTop: "1vh" }}>
              Key Metrics
            </div>
          </div>
          <div style={{ fontSize: "2vw" }}>&#9670;</div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
          {/* Main Stat */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "1px solid rgba(212,175,55,0.3)", paddingRight: "4vw" }}>
            <div style={{ fontSize: "1vw", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2vh", color: "rgba(212,175,55,0.7)" }}>Year over Year Growth</div>
            <div style={{ fontSize: "8vw", fontWeight: 700, color: "#FFFFFF", lineHeight: 1, marginBottom: "2vh" }}>+145%</div>
            <div style={{ width: "10vw", height: "2px", background: "#D4AF37", marginBottom: "3vh" }} />
            <p style={{ fontSize: "1.2vw", lineHeight: 1.6, color: "rgba(255,255,255,0.8)" }}>
              A monumental leap in operational excellence, driving unprecedented returns across all primary sectors.
            </p>
          </div>

          {/* Grid of Stats */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "4vh" }}>
            {[
              { label: "Global Revenue", value: "$4.2B", desc: "Across 42 active markets" },
              { label: "Client Retention", value: "98.5%", desc: "Industry-leading loyalty" },
              { label: "Market Share", value: "32%", desc: "Dominant category position" }
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "3vw" }}>
                <div style={{ fontSize: "1vw" }}>&#9670;</div>
                <div>
                  <div style={{ fontSize: "3vw", fontWeight: 700, color: "#FFFFFF", lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontSize: "1.1vw", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.5vh", color: "#D4AF37" }}>{stat.label}</div>
                  <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", marginTop: "0.5vh" }}>{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "4vh" }}>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(212,175,55,0.5)" }}>
            Example Company / Q4 Report
          </div>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", color: "rgba(212,175,55,0.5)" }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ArtDecoPage4.tsx`)

```tsx
export function ArtDecoPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#0C0C0C", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#D4AF37" }}>
      <div style={{ position: "absolute", top: 0, left: "5vw", right: "5vw", height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
      <div style={{ position: "absolute", bottom: 0, left: "5vw", right: "5vw", height: "2px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
      <div style={{ position: "absolute", top: "3vh", left: "5vw", right: "5vw", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      <div style={{ position: "absolute", bottom: "3vh", left: "5vw", right: "5vw", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      <div style={{ position: "absolute", top: "3vh", left: "5vw", width: "1px", bottom: "3vh", background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      <div style={{ position: "absolute", top: "3vh", right: "5vw", width: "1px", bottom: "3vh", background: "linear-gradient(180deg, transparent, rgba(212,175,55,0.3), transparent)" }} />
      
      <div style={{ padding: "7vh 8vw", display: "flex", flexDirection: "column", height: "100%", position: "relative", textAlign: "center" }}>
        
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2vw", marginBottom: "4vh" }}>
            <div style={{ width: "6vw", height: "1px", background: "#D4AF37" }} />
            <div style={{ fontSize: "1.5vw" }}>&#9670;</div>
            <div style={{ width: "6vw", height: "1px", background: "#D4AF37" }} />
          </div>

          <h2 style={{ fontSize: "5vw", fontWeight: 700, margin: 0, color: "#FFFFFF", letterSpacing: "0.2em", textTransform: "uppercase", lineHeight: 1.1 }}>
            JOIN THE
            <br />
            AVANT-GARDE
          </h2>
          
          <div style={{ width: "12vw", height: "2px", background: "#D4AF37", margin: "4vh 0" }} />
          
          <p style={{ fontSize: "1.4vw", color: "rgba(255,255,255,0.8)", letterSpacing: "0.05em", maxWidth: "50vw", margin: "0 0 6vh 0", lineHeight: 1.6 }}>
            Step into the future of luxury and precision. Contact our partnership team to schedule a private viewing of our latest collection.
          </p>

          <div style={{ display: "flex", gap: "4vw" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(212,175,55,0.7)", marginBottom: "1vh" }}>Inquiries</div>
              <div style={{ fontSize: "1.2vw", color: "#FFFFFF", letterSpacing: "0.1em" }}>hello@example.com</div>
            </div>
            <div style={{ width: "1px", height: "4vh", background: "rgba(212,175,55,0.3)" }} />
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.9vw", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(212,175,55,0.7)", marginBottom: "1vh" }}>Direct</div>
              <div style={{ fontSize: "1.2vw", color: "#FFFFFF", letterSpacing: "0.1em" }}>+1 (800) 555-0199</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "4vh" }}>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(212,175,55,0.5)" }}>
            Thank You
          </div>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", color: "rgba(212,175,55,0.5)" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
