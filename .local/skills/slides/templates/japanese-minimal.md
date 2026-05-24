# Japanese Minimal

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "JapaneseMinimal" template embodies a clean and understated aesthetic, reflecting minimalism with a touch of Japanese design principles. The background color is a soft off-white (#FAF8F5), complemented by accent lines in a muted taupe (#D4CFC8) that create vertical and horizontal divisions. Text is primarily rendered in a dark gray (#2C2C2C) with secondary text in a lighter taupe (#A0978D) and a subtle beige (#8C8478) for the subtitle, all using the 'Inter' sans-serif font for a modern and legible appearance. Key layout elements include thin lines for separation, a circular decorative element, and a structured arrangement of text that emphasizes hierarchy and spacing. No background images are utilized, contributing to the overall clean and serene feel of the design. The overall aesthetic can be described as "clean, serene, minimal."

## Source Code

**Component:** `JapaneseMinimal`

### Slide 1 — Title (`slide-styles/JapaneseMinimal.tsx`)

```tsx
export function JapaneseMinimal() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FAF8F5", fontFamily: "'Inter', sans-serif", position: "relative", color: "#2C2C2C" }}>
      <div style={{ position: "absolute", top: "15vh", right: "12vw", width: "0.5px", height: "55vh", background: "#D4CFC8" }} />
      <div style={{ position: "absolute", bottom: "10vh", left: "15vw", width: "20vw", height: "0.5px", background: "#D4CFC8" }} />
      <div style={{ padding: "8vh 10vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.15em", color: "#A0978D" }}>
          acme.co
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: "4vw" }}>
          <div>
            <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", color: "#A0978D", textTransform: "uppercase", marginBottom: "2vh" }}>
              Presentation Title
            </div>
            <h1 style={{ fontSize: "5vw", fontWeight: 300, lineHeight: 1, margin: 0, letterSpacing: "-0.02em" }}>
              Example
            </h1>
            <h1 style={{ fontSize: "5vw", fontWeight: 300, lineHeight: 1, margin: 0, letterSpacing: "-0.02em" }}>
              Deck
            </h1>
          </div>
          <div style={{ width: "0.5px", height: "12vh", background: "#D4CFC8" }} />
          <p style={{ fontSize: "1.1vw", color: "#8C8478", maxWidth: "25vw", lineHeight: 1.8, fontWeight: 300 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "0.8vw", color: "#C4BCB2", letterSpacing: "0.1em" }}>
            Example Company, Inc. / 2026
          </div>
          <div style={{ width: "6vw", height: "6vw", border: "0.5px solid #D4CFC8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "2vw", height: "2vw", background: "#C4BCB2", borderRadius: "50%" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/JapaneseMinimalPage2.tsx`)

```tsx
export function JapaneseMinimalPage2() {
  const principles = [
    {
      name: "Simplicity",
      desc: "Strip away the non-essential. Find clarity in the minimal, allowing what remains to speak with greater force."
    },
    {
      name: "Harmony",
      desc: "Balance disparate elements to create a unified whole, where every part supports the underlying purpose."
    },
    {
      name: "Intention",
      desc: "Every choice must have a deliberate purpose. Nothing is left to chance in the pursuit of perfection."
    },
    {
      name: "Craft",
      desc: "Honor the process. Pay deep attention to the smallest details, for they are the foundation of quality."
    }
  ];

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      background: "#FAF8F5",
      fontFamily: "'Inter', sans-serif",
      position: "relative",
      color: "#2C2C2C",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Top right header */}
      <div style={{
        position: "absolute",
        top: "6vh",
        right: "6vw",
        fontSize: "0.9vw",
        fontWeight: 300,
        letterSpacing: "0.15em",
        color: "#A0978D",
        fontFamily: "'Inter', sans-serif"
      }}>
        原則 — Principles
      </div>

      {/* Main vertical accent line */}
      <div style={{
        position: "absolute",
        top: "15vh",
        bottom: "15vh",
        left: "12vw",
        width: "2px",
        background: "#C53D43"
      }} />

      {/* Main content container */}
      <div style={{
        position: "absolute",
        left: "24vw",
        top: "22vh",
        width: "55vw",
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {principles.map((p, i) => (
            <div key={i} style={{ 
              display: "flex", 
              flexDirection: "column", 
              paddingTop: "4vh",
              paddingBottom: "4vh",
              borderBottom: i < principles.length - 1 ? "1px solid rgba(0, 0, 0, 0.08)" : "none"
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "1.5vw", marginBottom: "1.5vh" }}>
                <span style={{ 
                  color: "#C53D43", 
                  fontSize: "1vw", 
                  opacity: 0.9 
                }}>○</span>
                <h2 style={{
                  margin: 0,
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "2.2vw",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  color: "#2C2C2C"
                }}>
                  {p.name}
                </h2>
              </div>
              <p style={{
                margin: 0,
                marginLeft: "2.5vw",
                fontSize: "1.1vw",
                fontWeight: 300,
                color: "#8C8478",
                lineHeight: 1.6,
                maxWidth: "40vw"
              }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "5vh",
        left: "12vw",
        right: "6vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{ fontSize: "0.75vw", color: "#C4BCB2", letterSpacing: "0.1em", fontWeight: 300 }}>
          02
        </div>
        <div style={{ fontSize: "0.75vw", color: "#C4BCB2", letterSpacing: "0.05em", fontWeight: 300 }}>
          Example Company, Inc. / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/JapaneseMinimalPage3.tsx`)

```tsx
export function JapaneseMinimalPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FAF8F5", fontFamily: "'Inter', sans-serif", position: "relative", color: "#2C2C2C" }}>
      <div style={{ position: "absolute", top: "15vh", left: "10vw", width: "80vw", height: "0.5px", background: "#D4CFC8" }} />
      <div style={{ position: "absolute", top: "15vh", right: "10vw", width: "0.5px", height: "65vh", background: "#D4CFC8" }} />
      
      <div style={{ padding: "8vh 10vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.15em", color: "#A0978D" }}>
            acme.co
          </div>
          <div style={{ fontSize: "0.8vw", letterSpacing: "0.3em", color: "#A0978D", textTransform: "uppercase" }}>
            Performance Metrics
          </div>
        </div>

        <div style={{ display: "flex", marginTop: "10vh", flex: 1 }}>
          <div style={{ flex: 1, paddingRight: "8vw" }}>
            <h2 style={{ fontSize: "4vw", fontWeight: 300, lineHeight: 1.1, margin: "0 0 4vh 0", letterSpacing: "-0.02em" }}>
              Sustainable<br />Growth
            </h2>
            <p style={{ fontSize: "1.1vw", color: "#8C8478", lineHeight: 1.8, fontWeight: 300, maxWidth: "25vw" }}>
              Our metrics indicate a steady upward trajectory, grounded in a philosophy of slow, intentional expansion rather than rapid iteration.
            </p>
          </div>

          <div style={{ flex: 1.5, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4vw", alignContent: "start", paddingTop: "2vh" }}>
            {[
              { label: "Revenue", value: "145%", desc: "Year over year increase" },
              { label: "Retention", value: "92%", desc: "Client renewal rate" },
              { label: "Efficiency", value: "+34%", desc: "Operational margin" },
              { label: "Reach", value: "2.1M", desc: "Active global users" }
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", borderTop: "0.5px solid #D4CFC8", paddingTop: "2vh" }}>
                <div style={{ fontSize: "0.8vw", letterSpacing: "0.2em", color: "#A0978D", textTransform: "uppercase", marginBottom: "1vh" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "3.5vw", fontWeight: 300, color: "#2C2C2C", marginBottom: "1vh", letterSpacing: "-0.02em" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "1vw", color: "#8C8478", fontWeight: 300 }}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4vh" }}>
          <div style={{ fontSize: "0.8vw", color: "#C4BCB2", letterSpacing: "0.1em" }}>
            Example Company, Inc. / 2026
          </div>
          <div style={{ fontSize: "0.9vw", color: "#A0978D", letterSpacing: "0.1em" }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/JapaneseMinimalPage4.tsx`)

```tsx
export function JapaneseMinimalPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FAF8F5", fontFamily: "'Inter', sans-serif", position: "relative", color: "#2C2C2C" }}>
      <div style={{ position: "absolute", top: "0", left: "20vw", width: "0.5px", height: "100vh", background: "#D4CFC8" }} />
      <div style={{ position: "absolute", bottom: "30vh", right: "0", width: "40vw", height: "0.5px", background: "#D4CFC8" }} />
      
      <div style={{ padding: "8vh 10vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.15em", color: "#A0978D" }}>
          acme.co
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
          <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "4vw", height: "4vw", border: "0.5px solid #D4CFC8", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "6vh" }}>
              <div style={{ width: "1.5vw", height: "1.5vw", background: "#C4BCB2", borderRadius: "50%" }} />
            </div>
            
            <h2 style={{ fontSize: "4.5vw", fontWeight: 300, lineHeight: 1.1, margin: "0 0 3vh 0", letterSpacing: "-0.02em" }}>
              Let's create something<br />meaningful together.
            </h2>
            
            <p style={{ fontSize: "1.2vw", color: "#8C8478", lineHeight: 1.8, fontWeight: 300, maxWidth: "35vw", margin: "0 0 6vh 0" }}>
              Reach out to explore how our intentional approach can elevate your brand and vision.
            </p>

            <div style={{ display: "flex", gap: "6vw" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "0.7vw", letterSpacing: "0.2em", color: "#A0978D", textTransform: "uppercase", marginBottom: "1vh" }}>Email</span>
                <span style={{ fontSize: "1.1vw", fontWeight: 300, color: "#2C2C2C" }}>hello@acme.co</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "0.7vw", letterSpacing: "0.2em", color: "#A0978D", textTransform: "uppercase", marginBottom: "1vh" }}>Office</span>
                <span style={{ fontSize: "1.1vw", fontWeight: 300, color: "#2C2C2C" }}>Kyoto, Japan</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span style={{ fontSize: "0.7vw", letterSpacing: "0.2em", color: "#A0978D", textTransform: "uppercase", marginBottom: "1vh" }}>Social</span>
                <span style={{ fontSize: "1.1vw", fontWeight: 300, color: "#2C2C2C" }}>@acme.co</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "0.8vw", color: "#C4BCB2", letterSpacing: "0.1em" }}>
            Example Company, Inc. / 2026
          </div>
          <div style={{ fontSize: "0.9vw", color: "#A0978D", letterSpacing: "0.1em" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
