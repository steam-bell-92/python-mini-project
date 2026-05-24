# Sustainability ESG

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "SustainabilityEsg" template embodies an organic and eco-friendly aesthetic, characterized by soft, natural colors and rounded shapes. The background color is a light greenish-gray (#F5F7F2), complemented by organic shapes in muted green (#5B7C5A) and a warm beige (#C4A962) with low opacity. Text is primarily in a dark green (#2C3E2D) and lighter shades like (#4A5D4B) and (#6B7C6A), with accents in a soft beige (#C4A962) and a muted gray (#8A998A). The font family used is 'Inter' for body text and 'Playfair Display' for headings, providing a modern yet classic feel. Key layout elements include large circular shapes in the background, a structured two-column layout for content, and a header and footer with subtle borders. There are no background images used. The overall aesthetic feel is "natural elegance."

## Source Code

**Component:** `SustainabilityEsg`

### Slide 1 — Title (`slide-styles/SustainabilityEsg.tsx`)

```tsx
export function SustainabilityEsg() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F7F2",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        color: "#2C3E2D",
      }}
    >
      {/* Organic Shapes Background */}
      <div
        style={{
          position: "absolute",
          top: "-15vh",
          right: "-10vw",
          width: "50vw",
          height: "50vw",
          backgroundColor: "#5B7C5A",
          borderRadius: "50%",
          opacity: 0.1,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20vh",
          left: "-5vw",
          width: "60vw",
          height: "60vw",
          backgroundColor: "#C4A962",
          borderRadius: "50%",
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "6vh 8vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", borderBottom: "1px solid rgba(91, 124, 90, 0.2)", paddingBottom: "3vh", marginBottom: "8vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            {/* Leaf Motif */}
            <div style={{ position: "relative", width: "2vw", height: "2vw" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "1.5vw", height: "1.5vw", backgroundColor: "#5B7C5A", borderTopLeftRadius: "1.5vw", borderBottomRightRadius: "1.5vw" }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "1vw", height: "1vw", backgroundColor: "#C4A962", borderTopLeftRadius: "1vw", borderBottomRightRadius: "1vw", opacity: 0.8 }} />
            </div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#5B7C5A", letterSpacing: "0.05em" }}>
              acme.co
            </div>
          </div>
          <div style={{ display: "flex", gap: "3vw", alignItems: "center" }}>
            <div style={{ fontSize: "1vw", fontWeight: 500, color: "#6B7C6A", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Sustainability Report 2026
            </div>
            <div style={{ padding: "0.8vh 1.5vw", backgroundColor: "#5B7C5A", color: "#F5F7F2", fontSize: "0.9vw", borderRadius: "2vw", fontWeight: 500 }}>
              Annual Edition
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ display: "flex", flex: 1 }}>
          {/* Left Column */}
          <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "center", paddingRight: "5vw" }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 500, color: "#C4A962", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "3vh" }}>
              Environmental Impact
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "7vw",
                fontWeight: 400,
                color: "#2C3E2D",
                margin: "0 0 4vh 0",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Example Deck
            </h1>
            <p
              style={{
                fontSize: "1.6vw",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "#4A5D4B",
                margin: 0,
                maxWidth: "35vw",
              }}
            >
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>

          {/* Right Column / Structured Data */}
          <div style={{ flex: "0.8", display: "flex", flexDirection: "column", justifyContent: "center", borderLeft: "1px solid rgba(91, 124, 90, 0.2)", paddingLeft: "5vw" }}>
            <div style={{ backgroundColor: "#FFFFFF", padding: "4vh 3vw", borderRadius: "1vw", boxShadow: "0 1vw 3vw rgba(91, 124, 90, 0.05)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "0.4vw", height: "100%", backgroundColor: "#5B7C5A" }} />
              <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#8A998A", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>
                Key Commitment
              </div>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "3vw", color: "#5B7C5A", lineHeight: 1.2, marginBottom: "2vh" }}>
                Net Zero by 2030
              </div>
              <p style={{ fontSize: "1vw", color: "#6B7C6A", lineHeight: 1.5, margin: 0 }}>
                Accelerating our transition to renewable energy and circular economy practices across all global operations.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: "auto", borderTop: "1px solid rgba(91, 124, 90, 0.2)", paddingTop: "3vh" }}>
          <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8A998A", letterSpacing: "0.05em" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8A998A" }}>
            Confidential & Proprietary
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/SustainabilityEsgPage2.tsx`)

```tsx
export function SustainabilityEsgPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F7F2",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        color: "#2C3E2D",
      }}
    >
      {/* Organic Shapes Background */}
      <div
        style={{
          position: "absolute",
          top: "-15vh",
          right: "-10vw",
          width: "50vw",
          height: "50vw",
          backgroundColor: "#5B7C5A",
          borderRadius: "50%",
          opacity: 0.1,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20vh",
          left: "-5vw",
          width: "60vw",
          height: "60vw",
          backgroundColor: "#C4A962",
          borderRadius: "50%",
          opacity: 0.08,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "6vh 8vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", borderBottom: "1px solid rgba(91, 124, 90, 0.2)", paddingBottom: "3vh", marginBottom: "6vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            {/* Leaf Motif */}
            <div style={{ position: "relative", width: "2vw", height: "2vw" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "1.5vw", height: "1.5vw", backgroundColor: "#5B7C5A", borderTopLeftRadius: "1.5vw", borderBottomRightRadius: "1.5vw" }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "1vw", height: "1vw", backgroundColor: "#C4A962", borderTopLeftRadius: "1vw", borderBottomRightRadius: "1vw", opacity: 0.8 }} />
            </div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#5B7C5A", letterSpacing: "0.05em" }}>
              acme.co
            </div>
          </div>
          <div style={{ display: "flex", gap: "3vw", alignItems: "center" }}>
            <div style={{ fontSize: "1vw", fontWeight: 500, color: "#6B7C6A", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Sustainability Report 2026
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ display: "flex", flex: 1, gap: "6vw" }}>
          {/* Left Column */}
          <div style={{ flex: "0.4", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 500, color: "#C4A962", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "2vh" }}>
              Our Approach
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "4vw",
                fontWeight: 400,
                color: "#2C3E2D",
                margin: "0 0 4vh 0",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Driving Real Impact
            </h1>
            <p
              style={{
                fontSize: "1.2vw",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "#4A5D4B",
                margin: "0 0 3vh 0",
              }}
            >
              We believe that environmental responsibility and operational excellence are not mutually exclusive. By embedding sustainable practices into our core business model, we create long-term value for both our stakeholders and the planet.
            </p>
            <p
              style={{
                fontSize: "1.2vw",
                fontWeight: 300,
                lineHeight: 1.7,
                color: "#4A5D4B",
                margin: 0,
              }}
            >
              Our holistic framework focuses on three key pillars: emissions reduction, ethical sourcing, and community resilience.
            </p>
          </div>

          {/* Right Column */}
          <div style={{ flex: "0.6", display: "flex", flexDirection: "column", gap: "3vh", justifyContent: "center" }}>
            {/* Pillar 1 */}
            <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 3vw", borderRadius: "1vw", boxShadow: "0 1vw 3vw rgba(91, 124, 90, 0.05)", position: "relative", overflow: "hidden", display: "flex", gap: "2vw", alignItems: "center" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "0.4vw", height: "100%", backgroundColor: "#5B7C5A" }} />
              <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", backgroundColor: "rgba(91, 124, 90, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", color: "#5B7C5A", fontWeight: 600 }}>
                01
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.8vw", color: "#2C3E2D", marginBottom: "0.5vh" }}>
                  Emissions Reduction
                </div>
                <div style={{ fontSize: "1vw", color: "#6B7C6A", lineHeight: 1.5 }}>
                  Targeting a 50% reduction in Scope 1 and 2 emissions by optimizing our energy grid and electrifying our fleet.
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 3vw", borderRadius: "1vw", boxShadow: "0 1vw 3vw rgba(91, 124, 90, 0.05)", position: "relative", overflow: "hidden", display: "flex", gap: "2vw", alignItems: "center" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "0.4vw", height: "100%", backgroundColor: "#C4A962" }} />
              <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", backgroundColor: "rgba(196, 169, 98, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", color: "#C4A962", fontWeight: 600 }}>
                02
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.8vw", color: "#2C3E2D", marginBottom: "0.5vh" }}>
                  Ethical Sourcing
                </div>
                <div style={{ fontSize: "1vw", color: "#6B7C6A", lineHeight: 1.5 }}>
                  Transitioning to 100% certified organic and fair-trade materials across our entire supply chain network.
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div style={{ backgroundColor: "#FFFFFF", padding: "3vh 3vw", borderRadius: "1vw", boxShadow: "0 1vw 3vw rgba(91, 124, 90, 0.05)", position: "relative", overflow: "hidden", display: "flex", gap: "2vw", alignItems: "center" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "0.4vw", height: "100%", backgroundColor: "#2C3E2D" }} />
              <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", backgroundColor: "rgba(44, 62, 45, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", color: "#2C3E2D", fontWeight: 600 }}>
                03
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.8vw", color: "#2C3E2D", marginBottom: "0.5vh" }}>
                  Circular Economy
                </div>
                <div style={{ fontSize: "1vw", color: "#6B7C6A", lineHeight: 1.5 }}>
                  Implementing closed-loop systems to eliminate manufacturing waste and promote product recyclability.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: "auto", borderTop: "1px solid rgba(91, 124, 90, 0.2)", paddingTop: "3vh" }}>
          <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8A998A", letterSpacing: "0.05em" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#5B7C5A" }}>
            02
          </div>
          <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8A998A" }}>
            Confidential & Proprietary
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/SustainabilityEsgPage3.tsx`)

```tsx
export function SustainabilityEsgPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F7F2",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        color: "#2C3E2D",
      }}
    >
      {/* Organic Shapes Background */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          left: "20vw",
          width: "40vw",
          height: "40vw",
          backgroundColor: "#5B7C5A",
          borderRadius: "50%",
          opacity: 0.08,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15vh",
          right: "-10vw",
          width: "70vw",
          height: "70vw",
          backgroundColor: "#C4A962",
          borderRadius: "50%",
          opacity: 0.06,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "6vh 8vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", borderBottom: "1px solid rgba(91, 124, 90, 0.2)", paddingBottom: "3vh", marginBottom: "6vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            {/* Leaf Motif */}
            <div style={{ position: "relative", width: "2vw", height: "2vw" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "1.5vw", height: "1.5vw", backgroundColor: "#5B7C5A", borderTopLeftRadius: "1.5vw", borderBottomRightRadius: "1.5vw" }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "1vw", height: "1vw", backgroundColor: "#C4A962", borderTopLeftRadius: "1vw", borderBottomRightRadius: "1vw", opacity: 0.8 }} />
            </div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#5B7C5A", letterSpacing: "0.05em" }}>
              acme.co
            </div>
          </div>
          <div style={{ display: "flex", gap: "3vw", alignItems: "center" }}>
            <div style={{ fontSize: "1vw", fontWeight: 500, color: "#6B7C6A", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Progress Metrics
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "6vh" }}>
            <div style={{ fontSize: "1.1vw", fontWeight: 500, color: "#C4A962", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "2vh" }}>
              Performance Data
            </div>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "3.5vw",
                fontWeight: 400,
                color: "#2C3E2D",
                margin: "0 0 2vh 0",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              2025 Impact at a Glance
            </h1>
            <p style={{ fontSize: "1.2vw", color: "#6B7C6A", maxWidth: "40vw", margin: "0 auto" }}>
              Measurable progress toward our ambitious 2030 climate and sustainability goals across global operations.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "4vw", alignItems: "center" }}>
            {/* Stat Box 1 */}
            <div style={{ backgroundColor: "#FFFFFF", padding: "4vh 3vw", borderRadius: "1vw", boxShadow: "0 1vw 3vw rgba(91, 124, 90, 0.05)", width: "18vw", textAlign: "center", borderTop: "0.4vw solid #5B7C5A" }}>
              <div style={{ fontSize: "4vw", fontFamily: "'Playfair Display', Georgia, serif", color: "#5B7C5A", marginBottom: "1vh", lineHeight: 1 }}>
                -42%
              </div>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#2C3E2D", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>
                Carbon Footprint
              </div>
              <div style={{ fontSize: "0.9vw", color: "#6B7C6A", lineHeight: 1.5 }}>
                Reduction in CO2 emissions vs 2020 baseline.
              </div>
            </div>

            {/* Stat Box 2 */}
            <div style={{ backgroundColor: "#FFFFFF", padding: "4vh 3vw", borderRadius: "1vw", boxShadow: "0 1vw 3vw rgba(91, 124, 90, 0.05)", width: "18vw", textAlign: "center", borderTop: "0.4vw solid #C4A962" }}>
              <div style={{ fontSize: "4vw", fontFamily: "'Playfair Display', Georgia, serif", color: "#C4A962", marginBottom: "1vh", lineHeight: 1 }}>
                85%
              </div>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#2C3E2D", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>
                Renewable Energy
              </div>
              <div style={{ fontSize: "0.9vw", color: "#6B7C6A", lineHeight: 1.5 }}>
                Of our global facilities now powered by renewables.
              </div>
            </div>

            {/* Stat Box 3 */}
            <div style={{ backgroundColor: "#FFFFFF", padding: "4vh 3vw", borderRadius: "1vw", boxShadow: "0 1vw 3vw rgba(91, 124, 90, 0.05)", width: "18vw", textAlign: "center", borderTop: "0.4vw solid #2C3E2D" }}>
              <div style={{ fontSize: "4vw", fontFamily: "'Playfair Display', Georgia, serif", color: "#2C3E2D", marginBottom: "1vh", lineHeight: 1 }}>
                1.2M
              </div>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#2C3E2D", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>
                Trees Planted
              </div>
              <div style={{ fontSize: "0.9vw", color: "#6B7C6A", lineHeight: 1.5 }}>
                Through our reforestation partnerships this year.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginTop: "5vh" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
              <div style={{ width: "1.5vw", height: "0.2vw", backgroundColor: "#5B7C5A" }} />
              <div style={{ fontSize: "0.9vw", color: "#6B7C6A", fontStyle: "italic" }}>
                Data verified by independent third-party auditors (Q4 2025)
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: "auto", borderTop: "1px solid rgba(91, 124, 90, 0.2)", paddingTop: "3vh" }}>
          <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8A998A", letterSpacing: "0.05em" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#5B7C5A" }}>
            03
          </div>
          <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8A998A" }}>
            Confidential & Proprietary
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/SustainabilityEsgPage4.tsx`)

```tsx
export function SustainabilityEsgPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F7F2",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        color: "#2C3E2D",
      }}
    >
      {/* Organic Shapes Background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vw",
          background: "radial-gradient(circle, rgba(91,124,90,0.15) 0%, rgba(245,247,242,0) 70%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10vh",
          left: "-10vw",
          width: "40vw",
          height: "40vw",
          backgroundColor: "#C4A962",
          borderRadius: "50%",
          opacity: 0.08,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-5vh",
          right: "-5vw",
          width: "30vw",
          height: "30vw",
          backgroundColor: "#5B7C5A",
          borderRadius: "50%",
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "6vh 8vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", borderBottom: "1px solid rgba(91, 124, 90, 0.2)", paddingBottom: "3vh", marginBottom: "auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            {/* Leaf Motif */}
            <div style={{ position: "relative", width: "2vw", height: "2vw" }}>
              <div style={{ position: "absolute", top: 0, left: 0, width: "1.5vw", height: "1.5vw", backgroundColor: "#5B7C5A", borderTopLeftRadius: "1.5vw", borderBottomRightRadius: "1.5vw" }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "1vw", height: "1vw", backgroundColor: "#C4A962", borderTopLeftRadius: "1vw", borderBottomRightRadius: "1vw", opacity: 0.8 }} />
            </div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#5B7C5A", letterSpacing: "0.05em" }}>
              acme.co
            </div>
          </div>
          <div style={{ display: "flex", gap: "3vw", alignItems: "center" }}>
            <div style={{ fontSize: "1vw", fontWeight: 500, color: "#6B7C6A", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Join The Initiative
            </div>
          </div>
        </div>

        {/* Content Area - Centered */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flex: 1 }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#C4A962", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "3vh" }}>
            The Future Is Green
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "6vw",
              fontWeight: 400,
              color: "#2C3E2D",
              margin: "0 0 3vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              maxWidth: "70vw",
            }}
          >
            Let's build a sustainable tomorrow, together.
          </h1>
          <p
            style={{
              fontSize: "1.4vw",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "#4A5D4B",
              margin: "0 0 6vh 0",
              maxWidth: "40vw",
            }}
          >
            Partner with us to accelerate the transition to a circular economy. Read our full report or schedule a consultation with our impact team.
          </p>
          
          <div style={{ display: "flex", gap: "2vw" }}>
            <div
              style={{
                backgroundColor: "#5B7C5A",
                color: "#F5F7F2",
                padding: "1.5vh 3vw",
                borderRadius: "3vw",
                fontSize: "1.1vw",
                fontWeight: 500,
                letterSpacing: "0.05em",
                cursor: "pointer",
                boxShadow: "0 1vw 2vw rgba(91, 124, 90, 0.2)",
              }}
            >
              Download Full Report
            </div>
            <div
              style={{
                backgroundColor: "transparent",
                color: "#5B7C5A",
                padding: "1.5vh 3vw",
                borderRadius: "3vw",
                fontSize: "1.1vw",
                fontWeight: 500,
                letterSpacing: "0.05em",
                border: "2px solid #5B7C5A",
                cursor: "pointer",
              }}
            >
              Contact Impact Team
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginTop: "auto", borderTop: "1px solid rgba(91, 124, 90, 0.2)", paddingTop: "3vh" }}>
          <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8A998A", letterSpacing: "0.05em" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#5B7C5A" }}>
            04
          </div>
          <div style={{ fontSize: "0.9vw", fontWeight: 400, color: "#8A998A" }}>
            sustainability@acme.co
          </div>
        </div>
      </div>
    </div>
  );
}
```
