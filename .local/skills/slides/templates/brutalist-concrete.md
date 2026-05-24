# Brutalist Concrete

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "BrutalistConcrete" template embodies a modern, minimalist aesthetic with a focus on stark contrasts and functional design. The background color is a solid light gray (#E5E5E5) for the main container, while the right section features a slightly darker gray (#F2F2F2). Text is primarily in a dark gray (#1A1A1A) for headings and a medium gray (#4A4A4A) for body text, with the font family set to 'Space Grotesk' for general text and 'DM Mono' for monospace elements. Key layout elements include a left column with a solid border on the right side and a full-height background image of concrete architecture, which is displayed with a grayscale filter. The overall aesthetic feel can be described as "modern minimalist."

## Source Code

**Component:** `BrutalistConcrete`

### Slide 1 — Title (`slide-styles/BrutalistConcrete.tsx`)

```tsx
export function BrutalistConcrete() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#E5E5E5",
        color: "#1A1A1A",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "45vw",
          height: "100vh",
          padding: "6vh 5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          borderRight: "1px solid #1A1A1A",
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>
          ACME.CO
        </div>
        
        <div>
          <h1
            style={{
              fontSize: "6vw",
              fontWeight: 700,
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              margin: "0 0 4vh 0",
            }}
          >
            Example<br />Deck
          </h1>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1vw",
              fontWeight: 400,
              lineHeight: 1.5,
              color: "#4A4A4A",
              margin: 0,
              maxWidth: "30vw",
            }}
          >
            {">"} Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#4A4A4A" }}>
          <span>© 2026</span>
          <span>EXAMPLE COMPANY, INC.</span>
          <span>CONFIDENTIAL</span>
        </div>
      </div>
      
      <div
        style={{
          width: "55vw",
          height: "100vh",
          padding: "3vh",
          boxSizing: "border-box",
          backgroundColor: "#F2F2F2",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: 'url("/__mockup/photos/concrete-architecture.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(20%) contrast(1.1)",
          }}
        />
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BrutalistConcretePage2.tsx`)

```tsx
export function BrutalistConcretePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#E5E5E5",
        color: "#1A1A1A",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "35vw",
          height: "100vh",
          padding: "6vh 5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          borderRight: "1px solid #1A1A1A",
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>
          ACME.CO
        </div>
        
        <div>
          <h2
            style={{
              fontSize: "4vw",
              fontWeight: 700,
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              margin: "0",
            }}
          >
            Core<br />Strategy
          </h2>
        </div>

        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#4A4A4A" }}>
          02 / 04
        </div>
      </div>
      
      <div
        style={{
          width: "65vw",
          height: "100vh",
          padding: "6vh 5vw",
          boxSizing: "border-box",
          backgroundColor: "#F2F2F2",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6vh" }}>
          {[
            { title: "SYSTEM ARCHITECTURE", desc: "A robust foundation built on scalable, modular components designed for high throughput and reliability." },
            { title: "MARKET PENETRATION", desc: "Targeting key demographics through aggressive growth tactics and data-driven marketing campaigns." },
            { title: "USER EXPERIENCE", desc: "Streamlining interfaces and workflows to minimize friction and maximize engagement and retention." }
          ].map((item, i) => (
            <div key={i} style={{ borderTop: "1px solid #1A1A1A", paddingTop: "2vh" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.5vw", fontWeight: 700 }}>
                  0{i + 1}
                </span>
                <div>
                  <h3 style={{ fontSize: "2vw", fontWeight: 700, margin: "0 0 1vh 0", textTransform: "uppercase", letterSpacing: "-0.02em" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#4A4A4A", margin: 0, lineHeight: 1.5 }}>
                    {">"} {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/BrutalistConcretePage3.tsx`)

```tsx
export function BrutalistConcretePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#E5E5E5",
        color: "#1A1A1A",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          height: "20vh",
          padding: "6vh 5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxSizing: "border-box",
          borderBottom: "1px solid #1A1A1A",
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>
          ACME.CO
        </div>
        <h2
          style={{
            fontSize: "3vw",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            margin: "0",
          }}
        >
          Performance Metrics
        </h2>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#4A4A4A" }}>
          03 / 04
        </div>
      </div>
      
      <div
        style={{
          height: "80vh",
          display: "flex",
          boxSizing: "border-box",
        }}
      >
        <div style={{ width: "33.33vw", padding: "5vw", borderRight: "1px solid #1A1A1A", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "6vw", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.04em" }}>
            45<span style={{ fontSize: "4vw", color: "#4A4A4A" }}>%</span>
          </div>
          <div style={{ borderTop: "1px solid #1A1A1A", marginTop: "3vh", paddingTop: "2vh" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase", marginBottom: "1vh" }}>Growth Rate</div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#4A4A4A", margin: 0, lineHeight: 1.5 }}>
              {">"} Year over year expansion in primary markets.
            </p>
          </div>
        </div>
        <div style={{ width: "33.34vw", padding: "5vw", borderRight: "1px solid #1A1A1A", backgroundColor: "#F2F2F2", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "6vw", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.04em" }}>
            1.2<span style={{ fontSize: "4vw", color: "#4A4A4A" }}>M</span>
          </div>
          <div style={{ borderTop: "1px solid #1A1A1A", marginTop: "3vh", paddingTop: "2vh" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase", marginBottom: "1vh" }}>Active Users</div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#4A4A4A", margin: 0, lineHeight: 1.5 }}>
              {">"} Total monthly active users across all platforms.
            </p>
          </div>
        </div>
        <div style={{ width: "33.33vw", padding: "5vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "6vw", fontWeight: 700, lineHeight: 0.9, letterSpacing: "-0.04em" }}>
            $8<span style={{ fontSize: "4vw", color: "#4A4A4A" }}>M</span>
          </div>
          <div style={{ borderTop: "1px solid #1A1A1A", marginTop: "3vh", paddingTop: "2vh" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase", marginBottom: "1vh" }}>Revenue</div>
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#4A4A4A", margin: 0, lineHeight: 1.5 }}>
              {">"} Q4 recurring revenue projections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/BrutalistConcretePage4.tsx`)

```tsx
export function BrutalistConcretePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A1A1A",
        color: "#E5E5E5",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          flex: 1,
          padding: "6vh 5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>
            ACME.CO
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#888" }}>
            04 / 04
          </div>
        </div>
        
        <div>
          <h1
            style={{
              fontSize: "8vw",
              fontWeight: 700,
              textTransform: "uppercase",
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              margin: "0 0 4vh 0",
            }}
          >
            Let's<br />Build<br />The Future
          </h1>
          <div style={{ display: "flex", gap: "5vw" }}>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#888", marginBottom: "1vh" }}>CONTACT</div>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.02em" }}>hello@acme.co</div>
            </div>
            <div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#888", marginBottom: "1vh" }}>OFFICE</div>
              <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.02em" }}>123 Concrete Blvd.<br/>New York, NY</div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#888", borderTop: "1px solid #333", paddingTop: "3vh" }}>
          <span>© 2026 EXAMPLE COMPANY, INC.</span>
          <span>CONFIDENTIAL</span>
        </div>
      </div>
    </div>
  );
}
```
