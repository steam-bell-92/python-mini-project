# Desert Dunes

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "DesertDunes" template features a warm, earthy aesthetic inspired by desert landscapes. The background is a full-screen image of desert dunes located at the URL "/__mockup/photos/desert-dunes.jpg", overlaid with a dark gradient that transitions from rgba(30,20,10,0.8) to rgba(30,20,10,0.2). The primary text color is #FDFBF7, with accent colors including #E2C792 for headings and decorative elements. The font family used for body text is 'DM Sans', while the main title utilizes 'Playfair Display', creating a contrast between modern and classic styles. Key layout elements include a flexible content container with a header, main title area, and footer, all positioned to enhance readability against the background. The overall aesthetic feel can be described as "earthy elegance."

## Source Code

**Component:** `DesertDunes`

### Slide 1 — Title (`slide-styles/DesertDunes.tsx`)

```tsx
export function DesertDunes() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'DM Sans', sans-serif",
        color: "#FDFBF7",
        backgroundImage: 'url("/__mockup/photos/desert-dunes.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(30,20,10,0.8) 0%, rgba(30,20,10,0.2) 100%)",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.4vw", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 300, opacity: 0.8 }}>
            2026
          </div>
        </div>

        {/* Main Title Area */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "10vh" }}>
          <div style={{ 
            fontSize: "1.2vw", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "#E2C792",
            marginBottom: "3vh",
            fontWeight: 500
          }}>
            Vision & Strategy
          </div>
          
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "8vw",
              fontWeight: 400,
              lineHeight: 1,
              margin: 0,
              letterSpacing: "-0.01em",
              textShadow: "0 4px 12px rgba(0,0,0,0.3)"
            }}
          >
            Example Deck
          </h1>
          
          <div style={{
            width: "8vw",
            height: "1px",
            backgroundColor: "#E2C792",
            margin: "4vh 0",
            opacity: 0.7
          }} />

          <p
            style={{
              fontSize: "1.8vw",
              lineHeight: 1.6,
              fontWeight: 300,
              maxWidth: "45vw",
              margin: 0,
              opacity: 0.9,
              textShadow: "0 2px 4px rgba(0,0,0,0.2)"
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <div style={{ 
            fontSize: "1vw", 
            fontWeight: 300, 
            opacity: 0.6,
            letterSpacing: "0.05em"
          }}>
            Example Company, Inc. &mdash; Confidential
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/DesertDunesPage2.tsx`)

```tsx
export function DesertDunesPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'DM Sans', sans-serif",
        color: "#FDFBF7",
        backgroundImage: 'url("/__mockup/photos/desert-dunes.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(30,20,10,0.8) 0%, rgba(30,20,10,0.3) 100%)",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.4vw", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 300, opacity: 0.8 }}>
            2026
          </div>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "8vh" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4.5vw",
            fontWeight: 400,
            margin: "0 0 4vh 0",
            lineHeight: 1.1,
            textShadow: "0 4px 12px rgba(0,0,0,0.3)"
          }}>
            Strategic Imperatives
          </h2>
          
          <div style={{ display: "flex", gap: "6vw", marginTop: "2vh" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.2vw", color: "#E2C792", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2vh", fontWeight: 500 }}>
                01. Market Expansion
              </div>
              <p style={{ fontSize: "1.4vw", lineHeight: 1.6, fontWeight: 300, opacity: 0.9, margin: 0 }}>
                Establishing a robust presence in emerging markets by leveraging our adaptive supply chain and forging strategic local partnerships to ensure sustainable growth.
              </p>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.2vw", color: "#E2C792", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2vh", fontWeight: 500 }}>
                02. Digital Innovation
              </div>
              <p style={{ fontSize: "1.4vw", lineHeight: 1.6, fontWeight: 300, opacity: 0.9, margin: 0 }}>
                Accelerating our technological roadmap to deliver frictionless user experiences, driven by AI-powered insights and an agile development methodology.
              </p>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.2vw", color: "#E2C792", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "2vh", fontWeight: 500 }}>
                03. Operational Excellence
              </div>
              <p style={{ fontSize: "1.4vw", lineHeight: 1.6, fontWeight: 300, opacity: 0.9, margin: 0 }}>
                Optimizing core processes to reduce overhead while simultaneously increasing output quality and maintaining our commitment to environmental sustainability.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.6, letterSpacing: "0.05em" }}>
            Example Company, Inc. &mdash; Confidential
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.6 }}>
            02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/DesertDunesPage3.tsx`)

```tsx
export function DesertDunesPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'DM Sans', sans-serif",
        color: "#FDFBF7",
        backgroundImage: 'url("/__mockup/photos/desert-dunes.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(30,20,10,0.85) 0%, rgba(30,20,10,0.6) 100%)",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.4vw", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 300, opacity: 0.8 }}>
            2026
          </div>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "8vh" }}>
          <div style={{ 
            fontSize: "1.2vw", 
            textTransform: "uppercase", 
            letterSpacing: "0.2em", 
            color: "#E2C792",
            marginBottom: "2vh",
            fontWeight: 500
          }}>
            Performance Metrics
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4vw",
            fontWeight: 400,
            margin: "0 0 6vh 0",
            lineHeight: 1.1,
            textShadow: "0 4px 12px rgba(0,0,0,0.3)"
          }}>
            Year Over Year Growth
          </h2>
          
          <div style={{ display: "flex", gap: "4vw", alignItems: "flex-end", height: "35vh", paddingBottom: "2vh", borderBottom: "1px solid rgba(226, 199, 146, 0.3)" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2vw", fontWeight: 300, opacity: 0.9 }}>$12M</div>
              <div style={{ width: "100%", height: "15vh", backgroundColor: "rgba(253, 251, 247, 0.1)", borderRadius: "4px 4px 0 0" }} />
              <div style={{ fontSize: "1vw", color: "#E2C792", letterSpacing: "0.1em" }}>Q1</div>
            </div>
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2vw", fontWeight: 300, opacity: 0.9 }}>$18M</div>
              <div style={{ width: "100%", height: "22vh", backgroundColor: "rgba(253, 251, 247, 0.2)", borderRadius: "4px 4px 0 0" }} />
              <div style={{ fontSize: "1vw", color: "#E2C792", letterSpacing: "0.1em" }}>Q2</div>
            </div>
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2vw", fontWeight: 300, opacity: 0.9 }}>$24M</div>
              <div style={{ width: "100%", height: "28vh", backgroundColor: "rgba(253, 251, 247, 0.3)", borderRadius: "4px 4px 0 0" }} />
              <div style={{ fontSize: "1vw", color: "#E2C792", letterSpacing: "0.1em" }}>Q3</div>
            </div>
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2.5vw", fontWeight: 400, color: "#E2C792" }}>$36M</div>
              <div style={{ width: "100%", height: "35vh", backgroundColor: "#E2C792", borderRadius: "4px 4px 0 0", boxShadow: "0 0 20px rgba(226, 199, 146, 0.4)" }} />
              <div style={{ fontSize: "1vw", color: "#E2C792", letterSpacing: "0.1em", fontWeight: 600 }}>Q4</div>
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "4vh" }}>
            <p style={{ fontSize: "1.2vw", fontWeight: 300, opacity: 0.8, maxWidth: "40vw", margin: 0 }}>
              * Revenue figures reflect consolidated global operations excluding newly acquired subsidiaries.
            </p>
            <div style={{ fontSize: "1.4vw", fontWeight: 400, color: "#E2C792" }}>
              +200% Annual Increase
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.6, letterSpacing: "0.05em" }}>
            Example Company, Inc. &mdash; Confidential
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.6 }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/DesertDunesPage4.tsx`)

```tsx
export function DesertDunesPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'DM Sans', sans-serif",
        color: "#FDFBF7",
        backgroundImage: 'url("/__mockup/photos/desert-dunes.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for text readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(30,20,10,0.9) 0%, rgba(30,20,10,0.4) 100%)",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.4vw", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 300, opacity: 0.8 }}>
            2026
          </div>
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6vw",
            fontWeight: 400,
            margin: "0 0 3vh 0",
            lineHeight: 1.1,
            textShadow: "0 4px 12px rgba(0,0,0,0.3)"
          }}>
            Ready to Build the Future?
          </h2>
          
          <p style={{
            fontSize: "1.6vw",
            lineHeight: 1.6,
            fontWeight: 300,
            maxWidth: "40vw",
            margin: "0 0 6vh 0",
            opacity: 0.9,
          }}>
            Join us on our journey to transform the landscape. Let's create something extraordinary together.
          </p>

          <div style={{
            display: "inline-block",
            padding: "2vh 4vw",
            backgroundColor: "#E2C792",
            color: "#1E140A",
            fontSize: "1.2vw",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderRadius: "2px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(226, 199, 146, 0.3)"
          }}>
            Partner With Us
          </div>
          
          <div style={{ display: "flex", gap: "4vw", marginTop: "8vh" }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.9vw", color: "#E2C792", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>Email</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 300 }}>hello@acme.co</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.9vw", color: "#E2C792", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>Office</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 300 }}>San Francisco, CA</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "0.9vw", color: "#E2C792", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>Social</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 300 }}>@acme_co</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.6, letterSpacing: "0.05em" }}>
            Example Company, Inc. &mdash; Confidential
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.6 }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
