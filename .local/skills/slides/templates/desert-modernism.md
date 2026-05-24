# Desert Modernism

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "DesertModernism" template features a contemporary aesthetic with a warm, earthy color palette. The background color is a soft beige (#EFEBE3), complemented by accent colors including a muted teal (#638C80), a warm terracotta (#D48B6A), and a sandy orange (#E3A881). The primary font used is 'DM Sans' for general text, while 'Playfair Display' is employed for the main heading, creating a contrast between modern and classic styles. Key layout elements include abstract geometric shapes, such as circular and arched frames, positioned strategically to enhance the design. There are no background images specified in the code. The overall aesthetic feel can be described as "modern, warm, inviting."

## Source Code

**Component:** `DesertModernism`

### Slide 1 — Title (`slide-styles/DesertModernism.tsx`)

```tsx
export function DesertModernism() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EFEBE3",
        color: "#2C3531",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      {/* Abstract geometric background elements */}
      <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#E3A881", opacity: 0.8 }} />
      <div style={{ position: "absolute", bottom: "0", left: "15vw", width: "30vw", height: "15vw", backgroundColor: "#638C80", borderTopLeftRadius: "15vw", borderTopRightRadius: "15vw" }} />
      <div style={{ position: "absolute", top: "30vh", right: "25vw", width: "8vw", height: "8vw", backgroundColor: "#D48B6A", borderRadius: "50%" }} />

      {/* Split layout - Left content */}
      <div style={{ width: "55vw", zIndex: 10, padding: "8vh 6vw", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.1em", color: "#2C3531", textTransform: "uppercase" }}>
          acme.co
        </div>

        <div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "7vw",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
              color: "#2C3531",
            }}
          >
            Example Deck
          </h1>
          <div style={{ width: "5vw", height: "0.4vh", backgroundColor: "#D48B6A", marginTop: "3vh", marginBottom: "4vh" }} />
          <p
            style={{
              fontSize: "1.8vw",
              fontWeight: 400,
              color: "#5B645E",
              lineHeight: 1.4,
              maxWidth: "40vw",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#8E9791", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Example Company, Inc. — Confidential
        </div>

      </div>

      {/* Split layout - Right decorative panel */}
      <div style={{ width: "45vw", zIndex: 10, padding: "8vh 6vw", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "flex-end", borderLeft: "1px solid rgba(44, 53, 49, 0.1)" }}>
        
        <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#2C3531" }}>
          2026
        </div>

        {/* Decorative arched frame holding text */}
        <div style={{ 
          width: "20vw", 
          height: "30vw", 
          border: "2px solid #2C3531", 
          borderTopLeftRadius: "10vw", 
          borderTopRightRadius: "10vw",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          paddingBottom: "4vh"
        }}>
          <div style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.2em", color: "#2C3531", textTransform: "uppercase" }}>
            Strategic Overview
          </div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/DesertModernismPage2.tsx`)

```tsx
export function DesertModernismPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EFEBE3",
        color: "#2C3531",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "8vh 6vw",
      }}
    >
      {/* Background decorations */}
      <div style={{ position: "absolute", top: "-10vh", left: "-5vw", width: "30vw", height: "30vw", borderRadius: "50%", backgroundColor: "#E3A881", opacity: 0.3 }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "10vw", width: "4vw", height: "4vw", backgroundColor: "#D48B6A", borderRadius: "50%" }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8E9791" }}>
          Overview
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", marginTop: "12vh", zIndex: 10, flex: 1, gap: "8vw" }}>
        
        {/* Left Column - Heading */}
        <div style={{ width: "35vw" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4.5vw",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            A new approach to market dynamics
          </h2>
          <div style={{ width: "4vw", height: "0.4vh", backgroundColor: "#D48B6A", marginTop: "4vh" }} />
        </div>

        {/* Right Column - Body content */}
        <div style={{ width: "45vw", display: "flex", flexDirection: "column", gap: "4vh", paddingTop: "1vh" }}>
          <p
            style={{
              fontSize: "1.6vw",
              fontWeight: 400,
              color: "#5B645E",
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            We are redefining the landscape by combining traditional methodologies with modern insights. Our framework adapts to changing conditions while maintaining core stability.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "3vh", marginTop: "2vh" }}>
            {["Adaptability", "Resilience", "Innovation"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
                <div style={{ 
                  fontFamily: "'Playfair Display', serif", 
                  fontSize: "1.5vw", 
                  color: "#638C80",
                  fontStyle: "italic",
                  marginTop: "0.2vh"
                }}>
                  0{i + 1}
                </div>
                <div>
                  <div style={{ fontSize: "1.4vw", fontWeight: 600, color: "#2C3531", marginBottom: "0.5vh" }}>
                    {item}
                  </div>
                  <div style={{ fontSize: "1.2vw", color: "#5B645E", lineHeight: 1.4 }}>
                    Leveraging emerging patterns to build sustainable growth over long-term market cycles.
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 10, marginTop: "auto" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#8E9791", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Example Company, Inc. — Confidential
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#2C3531" }}>
          02
        </div>
      </div>

    </div>
  );
}
```

### Slide 3 (`slide-pages/DesertModernismPage3.tsx`)

```tsx
export function DesertModernismPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EFEBE3",
        color: "#2C3531",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "8vh 6vw",
      }}
    >
      {/* Background shapes */}
      <div style={{ position: "absolute", bottom: "-15vh", left: "40vw", width: "45vw", height: "30vh", backgroundColor: "#638C80", borderTopLeftRadius: "20vw", borderTopRightRadius: "20vw", opacity: 0.15 }} />
      <div style={{ position: "absolute", top: "20vh", right: "-5vw", width: "15vw", height: "15vw", backgroundColor: "#E3A881", borderRadius: "50%", opacity: 0.4 }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8E9791" }}>
          Metrics
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", flexDirection: "column", marginTop: "8vh", zIndex: 10, flex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "4vw",
                fontWeight: 400,
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Performance by the numbers
            </h2>
            <div style={{ width: "5vw", height: "0.4vh", backgroundColor: "#D48B6A", marginTop: "3vh" }} />
          </div>
          <p style={{ fontSize: "1.4vw", color: "#5B645E", maxWidth: "30vw", textAlign: "right", margin: 0 }}>
            Consistent quarter-over-quarter growth demonstrating product-market fit and operational efficiency.
          </p>
        </div>

        {/* Data Visualization Area */}
        <div style={{ 
          marginTop: "10vh", 
          display: "flex", 
          justifyContent: "space-between",
          alignItems: "flex-end",
          height: "35vh",
          padding: "0 2vw"
        }}>
          {/* Bar chart mock */}
          {[
            { label: "Q1", height: "40%", value: "2.4M", color: "#638C80" },
            { label: "Q2", height: "55%", value: "3.1M", color: "#638C80" },
            { label: "Q3", height: "70%", value: "4.8M", color: "#E3A881" },
            { label: "Q4", height: "95%", value: "6.2M", color: "#D48B6A" },
          ].map((bar, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "15vw" }}>
              <div style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: "2vw", 
                marginBottom: "2vh",
                color: bar.color
              }}>
                {bar.value}
              </div>
              <div style={{ 
                width: "6vw", 
                height: `calc(${bar.height} * 0.8)`, 
                backgroundColor: bar.color,
                borderTopLeftRadius: "1vw",
                borderTopRightRadius: "1vw"
              }} />
              <div style={{ 
                marginTop: "2vh", 
                fontSize: "1.2vw", 
                fontWeight: 600, 
                letterSpacing: "0.1em",
                color: "#2C3531" 
              }}>
                {bar.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 10, marginTop: "auto" }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#8E9791", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Example Company, Inc. — Confidential
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#2C3531" }}>
          03
        </div>
      </div>

    </div>
  );
}
```

### Slide 4 (`slide-pages/DesertModernismPage4.tsx`)

```tsx
export function DesertModernismPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#638C80", // inverted palette for closing
        color: "#EFEBE3",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        padding: "8vh 6vw",
        textAlign: "center"
      }}
    >
      {/* Background elements */}
      <div style={{ position: "absolute", top: "-15vh", left: "-10vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#EFEBE3", opacity: 0.1 }} />
      <div style={{ position: "absolute", bottom: "-20vh", right: "-10vw", width: "50vw", height: "50vw", borderRadius: "50%", backgroundColor: "#E3A881", opacity: 0.2 }} />
      <div style={{ position: "absolute", top: "15vh", right: "20vw", width: "6vw", height: "6vw", backgroundColor: "#D48B6A", borderRadius: "50%" }} />

      {/* Header */}
      <div style={{ position: "absolute", top: "8vh", left: "6vw", right: "6vw", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#EFEBE3" }}>
          acme.co
        </div>
      </div>

      {/* Main Content */}
      <div style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "60vw" }}>
        
        <div style={{ 
          fontSize: "1.5vw", 
          fontWeight: 500, 
          letterSpacing: "0.2em", 
          textTransform: "uppercase", 
          color: "#E3A881",
          marginBottom: "4vh"
        }}>
          Let's Build the Future
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6vw",
            fontWeight: 400,
            lineHeight: 1.1,
            margin: 0,
            color: "#EFEBE3"
          }}
        >
          Ready to partner with us?
        </h1>
        
        <div style={{ width: "6vw", height: "0.4vh", backgroundColor: "#D48B6A", marginTop: "5vh", marginBottom: "6vh" }} />
        
        <p
          style={{
            fontSize: "1.8vw",
            fontWeight: 400,
            color: "rgba(239, 235, 227, 0.8)",
            lineHeight: 1.5,
            marginBottom: "6vh"
          }}
        >
          Join us in redefining the standard. Reach out to our team to schedule a detailed strategy session.
        </p>

        {/* CTA Button */}
        <div style={{
          padding: "2vh 4vw",
          backgroundColor: "#D48B6A",
          color: "#EFEBE3",
          fontSize: "1.2vw",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          borderRadius: "50px",
          cursor: "pointer",
          border: "2px solid #D48B6A"
        }}>
          Contact Us
        </div>
        
        <div style={{ marginTop: "4vh", fontSize: "1.2vw", color: "rgba(239, 235, 227, 0.6)" }}>
          hello@example.co &nbsp;&bull;&nbsp; +1 (555) 123-4567
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: "8vh", left: "6vw", right: "6vw", display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 10 }}>
        <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "rgba(239, 235, 227, 0.6)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Example Company, Inc. — Confidential
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#EFEBE3" }}>
          04
        </div>
      </div>

    </div>
  );
}
```
