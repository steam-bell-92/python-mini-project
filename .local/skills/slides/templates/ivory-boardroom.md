# Ivory Boardroom

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "IvoryBoardroom" template presents a clean and professional aesthetic, characterized by a soft ivory background color (#F5F0E8) that evokes a sense of elegance. The text and accent colors are primarily dark brown (#2C1810) for the main text and a rich gold (#B8960C) for decorative elements, including borders and a diamond shape. The font families used are 'Inter' for body text, providing a modern sans-serif look, and 'Playfair Display' for the main heading, which adds a classic serif touch. Key layout elements include a structured flexbox design with a centered title, a decorative diamond shape, and a top and bottom border in gold, enhancing the overall composition. There are no background images used in this template. The overall aesthetic feel can be described as "elegant professionalism."

## Source Code

**Component:** `IvoryBoardroom`

### Slide 1 — Title (`slide-styles/IvoryBoardroom.tsx`)

```tsx
export function IvoryBoardroom() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F0E8",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      <div style={{ width: "100%", borderTop: "1px solid #B8960C", marginBottom: "2vh" }} />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div style={{ color: "#2C1810", fontSize: "1.1vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ color: "#2C1810", fontSize: "1vw", fontWeight: 300, letterSpacing: "0.02em" }}>
          2026
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#2C1810",
            fontSize: "7.5vw",
            margin: "0 0 4vh 0",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.01em"
          }}
        >
          Example Deck
        </h1>
        
        <div
          style={{
            width: "0.8vw",
            height: "0.8vw",
            backgroundColor: "#B8960C",
            transform: "rotate(45deg)",
            margin: "0 0 5vh 0"
          }}
        />
        
        <p
          style={{
            color: "#2C1810",
            fontSize: "1.8vw",
            margin: 0,
            fontWeight: 300,
            lineHeight: 1.5,
            maxWidth: "50vw",
            opacity: 0.8
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: "2vh" }}>
        <div style={{ color: "#2C1810", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>
          Example Company, Inc. • Confidential
        </div>
      </div>
      
      <div style={{ width: "100%", borderBottom: "1px solid #B8960C" }} />
    </div>
  );
}
```

### Slide 2 (`slide-pages/IvoryBoardroomPage2.tsx`)

```tsx
export function IvoryBoardroomPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F0E8",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      <div style={{ width: "100%", borderTop: "1px solid #B8960C", marginBottom: "2vh" }} />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div style={{ color: "#2C1810", fontSize: "1.1vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ color: "#2C1810", fontSize: "1vw", fontWeight: 300, letterSpacing: "0.02em" }}>
          02
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "4vh 0" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#2C1810",
            fontSize: "4.5vw",
            margin: "0 0 2vh 0",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.01em"
          }}
        >
          Executive Summary
        </h2>
        
        <div
          style={{
            width: "3vw",
            height: "2px",
            backgroundColor: "#B8960C",
            margin: "0 0 4vh 0"
          }}
        />

        <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
          <div style={{ flex: 1 }}>
            <p
              style={{
                color: "#2C1810",
                fontSize: "1.6vw",
                margin: "0 0 3vh 0",
                fontWeight: 300,
                lineHeight: 1.6,
                opacity: 0.9
              }}
            >
              We are revolutionizing the industry by combining traditional craftsmanship with modern innovation. Our approach ensures sustainable growth while maintaining the highest quality standards.
            </p>
            <p
              style={{
                color: "#2C1810",
                fontSize: "1.2vw",
                margin: "0",
                fontWeight: 400,
                lineHeight: 1.8,
                opacity: 0.7
              }}
            >
              Through a combination of strategic partnerships and relentless dedication to excellence, we have established a foundation that supports unprecedented scale. This framework allows us to address market demands efficiently while anticipating future trends.
            </p>
          </div>
          
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh", borderLeft: "1px solid rgba(184, 150, 12, 0.3)", paddingLeft: "3vw" }}>
            {[
              { title: "Strategic Vision", desc: "Aligning long-term goals with actionable immediate steps." },
              { title: "Market Leadership", desc: "Capturing significant market share through innovative solutions." },
              { title: "Operational Excellence", desc: "Streamlining processes to maximize efficiency and reduce overhead." }
            ].map((item, i) => (
              <div key={i}>
                <h3 style={{ 
                  fontFamily: "'Playfair Display', Georgia, serif", 
                  color: "#2C1810", 
                  fontSize: "1.8vw", 
                  margin: "0 0 1vh 0",
                  fontWeight: 600
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: "#2C1810",
                  fontSize: "1.1vw",
                  margin: 0,
                  fontWeight: 300,
                  opacity: 0.8,
                  lineHeight: 1.5
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "2vh" }}>
        <div style={{ color: "#2C1810", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>
          Example Company, Inc. • Confidential
        </div>
      </div>
      
      <div style={{ width: "100%", borderBottom: "1px solid #B8960C" }} />
    </div>
  );
}
```

### Slide 3 (`slide-pages/IvoryBoardroomPage3.tsx`)

```tsx
export function IvoryBoardroomPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F0E8",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      <div style={{ width: "100%", borderTop: "1px solid #B8960C", marginBottom: "2vh" }} />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div style={{ color: "#2C1810", fontSize: "1.1vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ color: "#2C1810", fontSize: "1vw", fontWeight: 300, letterSpacing: "0.02em" }}>
          03
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "2vh 0" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#2C1810",
            fontSize: "4.5vw",
            margin: "0 0 1vh 0",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            textAlign: "center"
          }}
        >
          Key Metrics
        </h2>
        
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "4vh" }}>
          <div
            style={{
              width: "0.8vw",
              height: "0.8vw",
              backgroundColor: "#B8960C",
              transform: "rotate(45deg)"
            }}
          />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2vw", marginBottom: "4vh" }}>
          {[
            { label: "Revenue Growth", value: "+145%", sub: "Year over Year" },
            { label: "Active Users", value: "2.4M", sub: "Global Reach" },
            { label: "Retention Rate", value: "94%", sub: "Industry Leading" }
          ].map((stat, i) => (
            <div key={i} style={{ 
              border: "1px solid rgba(184, 150, 12, 0.4)", 
              padding: "3vh 2vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "rgba(255, 255, 255, 0.3)"
            }}>
              <div style={{ color: "#B8960C", fontSize: "4vw", fontWeight: 300, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ color: "#2C1810", fontSize: "1.2vw", fontWeight: 600, marginTop: "2vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {stat.label}
              </div>
              <div style={{ color: "#2C1810", fontSize: "0.9vw", fontWeight: 400, opacity: 0.6, marginTop: "0.5vh" }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "4vw", flex: 1, alignItems: "flex-end" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "2vh" }}>
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#2C1810", fontSize: "2vw", margin: "0 0 2vh 0" }}>Growth Trajectory</h3>
            <p style={{ color: "#2C1810", fontSize: "1.1vw", opacity: 0.8, margin: 0, lineHeight: 1.6 }}>
              Our expansion strategy has yielded consistent positive results across all major markets, outperforming initial projections by a significant margin.
            </p>
          </div>
          <div style={{ flex: 2, height: "100%", display: "flex", alignItems: "flex-end", gap: "1vw", paddingBottom: "2vh", borderBottom: "1px solid rgba(184, 150, 12, 0.3)" }}>
            {[40, 55, 45, 70, 65, 85, 100].map((h, i) => (
              <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i === 6 ? "#B8960C" : "rgba(44, 24, 16, 0.8)", transition: "height 0.3s ease" }} />
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "2vh" }}>
        <div style={{ color: "#2C1810", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>
          Example Company, Inc. • Confidential
        </div>
      </div>
      
      <div style={{ width: "100%", borderBottom: "1px solid #B8960C" }} />
    </div>
  );
}
```

### Slide 4 (`slide-pages/IvoryBoardroomPage4.tsx`)

```tsx
export function IvoryBoardroomPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F0E8",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "5vh 5vw",
        boxSizing: "border-box",
        position: "relative"
      }}
    >
      <div style={{ width: "100%", borderTop: "1px solid #B8960C", marginBottom: "2vh" }} />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
        <div style={{ color: "#2C1810", fontSize: "1.1vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ color: "#2C1810", fontSize: "1vw", fontWeight: 300, letterSpacing: "0.02em" }}>
          04
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div
          style={{
            width: "3vw",
            height: "1px",
            backgroundColor: "#B8960C",
            margin: "0 0 4vh 0"
          }}
        />
        
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#2C1810",
            fontSize: "6vw",
            margin: "0 0 2vh 0",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.01em"
          }}
        >
          Join Our Journey
        </h2>
        
        <p
          style={{
            color: "#2C1810",
            fontSize: "1.5vw",
            margin: "0 0 6vh 0",
            fontWeight: 300,
            lineHeight: 1.5,
            maxWidth: "40vw",
            opacity: 0.8
          }}
        >
          Partner with us to redefine what is possible in the industry.
        </p>

        <div style={{ display: "flex", gap: "4vw", alignItems: "center" }}>
          <div style={{ textAlign: "right", borderRight: "1px solid rgba(184, 150, 12, 0.4)", paddingRight: "4vw" }}>
            <div style={{ color: "#2C1810", fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>
              Contact
            </div>
            <div style={{ color: "#B8960C", fontSize: "1.4vw", fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
              partners@example.co
            </div>
            <div style={{ color: "#2C1810", fontSize: "1.2vw", fontWeight: 300, marginTop: "0.5vh" }}>
              +1 (555) 123-4567
            </div>
          </div>
          
          <div style={{ textAlign: "left" }}>
            <div style={{ color: "#2C1810", fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>
              Headquarters
            </div>
            <div style={{ color: "#2C1810", fontSize: "1.2vw", fontWeight: 300, lineHeight: 1.4 }}>
              100 Innovation Drive<br />
              Suite 400<br />
              New York, NY 10001
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "2vh" }}>
        <div style={{ color: "#2C1810", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7 }}>
          Example Company, Inc. • Confidential
        </div>
      </div>
      
      <div style={{ width: "100%", borderBottom: "1px solid #B8960C" }} />
    </div>
  );
}
```
