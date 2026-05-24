# Scandinavian

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "Scandinavian" template features a minimalist and clean aesthetic typical of Scandinavian design. The background color is a soft beige (#F7F3EE), complemented by a light taupe accent (#E8DFD3) used in a rounded shape at the bottom right. Text colors include a dark brown (#3D3832) for primary text, a muted olive (#8B7E6E) for subtitles, and a light taupe (#B5A898) for secondary text elements. The font family used is 'DM Sans', which is applied throughout for a modern and legible appearance. Key layout elements include a large rounded shape in the bottom right corner, a circular decorative element, and a structured layout with flexbox for alignment. There are no background images specified in the code. The overall aesthetic feel can be described as "minimalist elegance."

## Source Code

**Component:** `Scandinavian`

### Slide 1 — Title (`slide-styles/Scandinavian.tsx`)

```tsx
export function Scandinavian() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#F7F3EE", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#3D3832" }}>
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "40vw", height: "55vh", background: "#E8DFD3", borderTopLeftRadius: "50%" }} />
      <div style={{ position: "absolute", top: "12vh", right: "15vw", width: "8vw", height: "8vw", border: "1.5px solid #C4B8A8", borderRadius: "50%" }} />
      <div style={{ padding: "7vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#8B7E6E" }}>acme.co</div>
          <div style={{ fontSize: "0.9vw", color: "#B5A898", letterSpacing: "0.1em" }}>2026</div>
        </div>
        <div style={{ maxWidth: "55vw" }}>
          <div style={{ fontSize: "0.9vw", color: "#B5A898", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2vh" }}>
            Presentation Title
          </div>
          <h1 style={{ fontSize: "5.5vw", fontWeight: 700, lineHeight: 1, margin: 0, color: "#3D3832" }}>
            Example Deck
          </h1>
          <p style={{ fontSize: "1.5vw", color: "#8B7E6E", marginTop: "2.5vh", maxWidth: "40vw", lineHeight: 1.7, fontWeight: 400 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>
        <div style={{ display: "flex", gap: "3vw", alignItems: "center" }}>
          <div style={{ width: "6vw", height: "1px", background: "#C4B8A8" }} />
          <span style={{ fontSize: "0.9vw", color: "#B5A898", letterSpacing: "0.1em" }}>Example Company, Inc.</span>
          <span style={{ fontSize: "0.9vw", color: "#B5A898" }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ScandinavianPage2.tsx`)

```tsx
export function ScandinavianPage2() {
  const benefitsLeft = [
    {
      title: "Sustainable Materials",
      description: "Carefully sourced natural elements that age beautifully and respect our environment.",
      color: "#8FAE8B", // sage
    },
    {
      title: "Timeless Design",
      description: "Clean lines and functional forms intended to outlast seasonal trends.",
      color: "#C4775A", // terracotta
    },
    {
      title: "Local Craft",
      description: "Partnering with skilled regional artisans to preserve traditional techniques.",
      color: "#3D5A73", // navy
    },
  ];

  const benefitsRight = [
    {
      title: "Ethical Supply Chain",
      description: "Complete transparency and fair labor practices from origin to final product.",
      color: "#8FAE8B", // sage
    },
    {
      title: "Lifetime Warranty",
      description: "Built for generations, backed by our comprehensive structural guarantee.",
      color: "#C4775A", // terracotta
    },
    {
      title: "Carbon Neutral",
      description: "Offsetting our footprint through verified regenerative agriculture programs.",
      color: "#3D5A73", // navy
    },
  ];

  const renderBenefit = (benefit: { title: string; description: string; color: string }, index: number) => (
    <div key={index} style={{ display: "flex", gap: "1.5vw", marginBottom: "4vh" }}>
      <div style={{ paddingTop: "0.5vh" }}>
        <div
          style={{
            width: "1vw",
            height: "1vw",
            borderRadius: "50%",
            backgroundColor: benefit.color,
          }}
        />
      </div>
      <div>
        <h3
          style={{
            margin: 0,
            fontSize: "1.4vw",
            fontWeight: 600,
            color: "#4A4A4A",
            marginBottom: "0.8vh",
          }}
        >
          {benefit.title}
        </h3>
        <p
          style={{
            margin: 0,
            fontSize: "1vw",
            lineHeight: 1.6,
            color: "#6B6B6B", // Slightly lighter warm gray for text
            maxWidth: "28vw",
          }}
        >
          {benefit.description}
        </p>
      </div>
    </div>
  );

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FAFAF7",
        fontFamily: "'DM Sans', sans-serif",
        color: "#4A4A4A",
        position: "relative",
        boxSizing: "border-box",
        padding: "6vh 8vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Decorative rounded rectangle outline */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "4vw",
          right: "4vw",
          bottom: "4vh",
          border: "1px solid rgba(74, 74, 74, 0.1)",
          borderRadius: "4vw",
          pointerEvents: "none",
        }}
      />

      {/* Header Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.5vw",
          marginBottom: "8vh",
          marginTop: "4vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: "3vw",
            height: "3vw",
            backgroundColor: "#8FAE8B",
            borderRadius: "50% 50% 0 50%", // Leaf-like shape
            opacity: 0.8,
          }}
        />
        <h2
          style={{
            margin: 0,
            fontSize: "3.5vw",
            fontWeight: 600,
            letterSpacing: "-0.02em",
          }}
        >
          Our Promise
        </h2>
      </div>

      {/* Thin warm-gray horizontal line */}
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(74, 74, 74, 0.15)",
          marginBottom: "8vh",
          position: "relative",
          zIndex: 1,
        }}
      />

      {/* 2-Column Layout */}
      <div
        style={{
          display: "flex",
          gap: "10vw",
          flex: 1,
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1vh" }}>
          {benefitsLeft.map((benefit, index) => renderBenefit(benefit, index))}
        </div>

        {/* Right Column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1vh" }}>
          {benefitsRight.map((benefit, index) => renderBenefit(benefit, index))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.8vw",
          color: "rgba(74, 74, 74, 0.5)",
          letterSpacing: "0.05em",
          zIndex: 1,
        }}
      >
        <div>02</div>
        <div>Example Company, Inc. / Confidential</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ScandinavianPage3.tsx`)

```tsx
export function ScandinavianPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#F7F3EE", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#3D3832" }}>
      {/* Decorative Elements */}
      <div style={{ position: "absolute", top: "0", right: "20vw", width: "30vw", height: "10vh", background: "#E8DFD3", borderBottomLeftRadius: "50%", borderBottomRightRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "10vh", left: "5vw", width: "10vw", height: "10vw", border: "1.5px solid #C4B8A8", borderRadius: "50%" }} />
      
      <div style={{ padding: "7vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#8B7E6E" }}>acme.co</div>
          <div style={{ fontSize: "0.9vw", color: "#B5A898", letterSpacing: "0.1em", textTransform: "uppercase" }}>Key Metrics</div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, marginTop: "8vh" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "6vh" }}>
            <h2 style={{ fontSize: "3.5vw", fontWeight: 700, lineHeight: 1, margin: 0, color: "#3D3832", maxWidth: "45vw" }}>
              Sustainable Growth
            </h2>
            <p style={{ fontSize: "1.2vw", color: "#8B7E6E", maxWidth: "30vw", lineHeight: 1.6, margin: 0 }}>
              Our performance indicators reflect a balanced approach to market expansion and product development.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", flex: 1, gap: "4vw" }}>
            {/* Metric 1 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", borderTop: "2px solid #C4B8A8", paddingTop: "4vh" }}>
              <div style={{ fontSize: "0.85vw", color: "#B5A898", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2vh" }}>Revenue</div>
              <div style={{ fontSize: "4.5vw", fontWeight: 600, color: "#3D3832", lineHeight: 1, marginBottom: "1.5vh" }}>$12M</div>
              <p style={{ fontSize: "1vw", color: "#8B7E6E", lineHeight: 1.5 }}>Consistent year-over-year organic growth across all major regions.</p>
            </div>

            {/* Metric 2 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", borderTop: "2px solid #C4B8A8", paddingTop: "4vh" }}>
              <div style={{ fontSize: "0.85vw", color: "#B5A898", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2vh" }}>Retention</div>
              <div style={{ fontSize: "4.5vw", fontWeight: 600, color: "#3D3832", lineHeight: 1, marginBottom: "1.5vh" }}>94%</div>
              <p style={{ fontSize: "1vw", color: "#8B7E6E", lineHeight: 1.5 }}>Industry-leading customer loyalty driven by exceptional service.</p>
            </div>

            {/* Metric 3 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", borderTop: "2px solid #C4B8A8", paddingTop: "4vh" }}>
              <div style={{ fontSize: "0.85vw", color: "#B5A898", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2vh" }}>Expansion</div>
              <div style={{ fontSize: "4.5vw", fontWeight: 600, color: "#3D3832", lineHeight: 1, marginBottom: "1.5vh" }}>3.5x</div>
              <p style={{ fontSize: "1vw", color: "#8B7E6E", lineHeight: 1.5 }}>Market penetration multiple compared to our initial projections.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "3vw", alignItems: "center" }}>
            <div style={{ width: "6vw", height: "1px", background: "#C4B8A8" }} />
            <span style={{ fontSize: "0.9vw", color: "#B5A898", letterSpacing: "0.1em" }}>Example Company, Inc.</span>
          </div>
          <span style={{ fontSize: "0.9vw", color: "#B5A898" }}>03</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ScandinavianPage4.tsx`)

```tsx
export function ScandinavianPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#F7F3EE", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#3D3832" }}>
      {/* Decorative Elements */}
      <div style={{ position: "absolute", top: "25vh", left: "-5vw", width: "20vw", height: "40vh", background: "#E8DFD3", borderTopRightRadius: "50%", borderBottomRightRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "15vh", right: "20vw", width: "15vw", height: "15vw", border: "1.5px solid #C4B8A8", borderRadius: "50%" }} />
      
      <div style={{ padding: "7vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#8B7E6E" }}>acme.co</div>
          <div style={{ fontSize: "0.9vw", color: "#B5A898", letterSpacing: "0.1em", textTransform: "uppercase" }}>Conclusion</div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "60vw" }}>
            <div style={{ fontSize: "0.9vw", color: "#B5A898", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "3vh" }}>
              Get In Touch
            </div>
            <h2 style={{ fontSize: "4.5vw", fontWeight: 700, lineHeight: 1.1, margin: 0, color: "#3D3832", marginBottom: "4vh" }}>
              Let's build something beautiful together.
            </h2>
            <p style={{ fontSize: "1.4vw", color: "#8B7E6E", lineHeight: 1.6, maxWidth: "45vw", marginBottom: "6vh" }}>
              We are currently accepting new partnerships for the upcoming quarter. Reach out to discuss how we can elevate your brand.
            </p>
            
            <div style={{ display: "flex", gap: "4vw", borderTop: "1px solid #C4B8A8", borderBottom: "1px solid #C4B8A8", padding: "3vh 0", width: "100%", justifyContent: "center" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "0.85vw", color: "#B5A898", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>Email</span>
                <span style={{ fontSize: "1.2vw", color: "#3D3832", fontWeight: 500 }}>hello@acme.co</span>
              </div>
              <div style={{ width: "1px", height: "4vh", background: "#E8DFD3" }} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "0.85vw", color: "#B5A898", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>Phone</span>
                <span style={{ fontSize: "1.2vw", color: "#3D3832", fontWeight: 500 }}>+1 (555) 123-4567</span>
              </div>
              <div style={{ width: "1px", height: "4vh", background: "#E8DFD3" }} />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "0.85vw", color: "#B5A898", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>Office</span>
                <span style={{ fontSize: "1.2vw", color: "#3D3832", fontWeight: 500 }}>Stockholm, SE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "3vw", alignItems: "center" }}>
            <div style={{ width: "6vw", height: "1px", background: "#C4B8A8" }} />
            <span style={{ fontSize: "0.9vw", color: "#B5A898", letterSpacing: "0.1em" }}>Example Company, Inc.</span>
          </div>
          <span style={{ fontSize: "0.9vw", color: "#B5A898" }}>04</span>
        </div>
      </div>
    </div>
  );
}
```
