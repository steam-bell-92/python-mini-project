# Arctic Minimal

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The ArcticMinimal template features a clean and modern aesthetic, characterized by a light and airy design. The background color is a soft light blue, specifically #F0F4F8, complemented by a radial gradient of rgba(148, 163, 184, 0.15) that adds subtle texture. Text elements utilize a color palette of #334155 for primary text, #94A3B8 for secondary text, and #3B82F6 for decorative lines. The font family used is 'Inter', sans-serif, which is applied for both headings and body text to maintain a contemporary feel. Key layout elements include a centered alignment of content, a decorative horizontal line, and absolute positioning for the header and footer sections. There are no background images specified in the code. The overall aesthetic feel can be described as "clean, modern, minimal."

## Source Code

**Component:** `ArcticMinimal`

### Slide 1 — Title (`slide-styles/ArcticMinimal.tsx`)

```tsx
export function ArcticMinimal() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F0F4F8",
        backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.15) 0.15vw, transparent 0)",
        backgroundSize: "4vw 4vw",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#334155",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "0.8vw", fontWeight: 300, color: "#94A3B8", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          acme.co
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6vh" }}>
        <div style={{ width: "2vw", height: "1px", backgroundColor: "#3B82F6" }} />
        
        <div>
          <div style={{ fontSize: "0.9vw", fontWeight: 300, color: "#94A3B8", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "3vh" }}>
            Presentation Title
          </div>
          <h1 style={{ fontSize: "6vw", fontWeight: 700, lineHeight: 1.1, margin: 0, color: "#334155", letterSpacing: "-0.03em" }}>
            Example Deck
          </h1>
        </div>

        <p style={{ fontSize: "1.4vw", color: "#64748B", maxWidth: "45vw", lineHeight: 1.8, fontWeight: 200, margin: 0 }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "4vw",
          fontSize: "0.8vw",
          color: "#94A3B8",
          fontWeight: 300,
          letterSpacing: "0.1em",
        }}
      >
        <span>Example Company, Inc.</span>
        <span>2026</span>
        <span>Confidential</span>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ArcticMinimalPage2.tsx`)

```tsx
export function ArcticMinimalPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F0F4F8",
        backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.15) 0.15vw, transparent 0)",
        backgroundSize: "4vw 4vw",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#334155",
        display: "flex",
        flexDirection: "column",
        padding: "16vh 8vw",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div style={{ fontSize: "0.8vw", fontWeight: 300, color: "#94A3B8", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          acme.co
        </div>
      </div>

      <div style={{ display: "flex", gap: "6vw", height: "100%" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "4vh" }}>
          <div style={{ width: "2vw", height: "1px", backgroundColor: "#3B82F6" }} />
          
          <div>
            <div style={{ fontSize: "0.9vw", fontWeight: 300, color: "#94A3B8", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2vh" }}>
              Core Philosophy
            </div>
            <h2 style={{ fontSize: "4vw", fontWeight: 700, lineHeight: 1.1, margin: 0, color: "#334155", letterSpacing: "-0.03em" }}>
              Minimalism in<br/>Design &amp; Function
            </h2>
          </div>

          <p style={{ fontSize: "1.4vw", color: "#64748B", lineHeight: 1.8, fontWeight: 300, margin: 0, maxWidth: "35vw" }}>
            We believe that less is more. By removing the unnecessary, we allow the essential to speak. Our approach focuses on clarity, purpose, and deliberate choices to create experiences that resonate without overwhelming the senses.
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "4vh" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh", padding: "4vh", backgroundColor: "rgba(255, 255, 255, 0.6)", backdropFilter: "blur(10px)", border: "1px solid rgba(148, 163, 184, 0.2)", borderRadius: "1vw" }}>
            <h3 style={{ fontSize: "1.2vw", fontWeight: 600, color: "#334155", margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>01. Clarity</h3>
            <p style={{ fontSize: "1.1vw", color: "#64748B", lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
              Every element serves a distinct purpose. No ornamentation for its own sake.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2vh", padding: "4vh", backgroundColor: "rgba(255, 255, 255, 0.6)", backdropFilter: "blur(10px)", border: "1px solid rgba(148, 163, 184, 0.2)", borderRadius: "1vw" }}>
            <h3 style={{ fontSize: "1.2vw", fontWeight: 600, color: "#334155", margin: 0, textTransform: "uppercase", letterSpacing: "0.1em" }}>02. Purpose</h3>
            <p style={{ fontSize: "1.1vw", color: "#64748B", lineHeight: 1.6, fontWeight: 300, margin: 0 }}>
              Function dictates form. We build systems that naturally solve complex problems.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          width: "84vw",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.8vw",
          color: "#94A3B8",
          fontWeight: 300,
          letterSpacing: "0.1em",
        }}
      >
        <span>Example Company, Inc.</span>
        <span>02</span>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ArcticMinimalPage3.tsx`)

```tsx
export function ArcticMinimalPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F0F4F8",
        backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.15) 0.15vw, transparent 0)",
        backgroundSize: "4vw 4vw",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#334155",
        display: "flex",
        flexDirection: "column",
        padding: "12vh 8vw",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "0.8vw", fontWeight: 300, color: "#94A3B8", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          acme.co
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4vh", marginTop: "4vh", textAlign: "center" }}>
        <div style={{ width: "2vw", height: "1px", backgroundColor: "#3B82F6" }} />
        
        <div>
          <div style={{ fontSize: "0.9vw", fontWeight: 300, color: "#94A3B8", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "2vh" }}>
            The Numbers
          </div>
          <h2 style={{ fontSize: "3.5vw", fontWeight: 700, lineHeight: 1.1, margin: 0, color: "#334155", letterSpacing: "-0.03em" }}>
            Metrics That Matter
          </h2>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "6vw", marginTop: "12vh", width: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
          <div style={{ fontSize: "6vw", fontWeight: 700, color: "#3B82F6", letterSpacing: "-0.04em", lineHeight: 1 }}>
            84%
          </div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(148, 163, 184, 0.3)" }} />
          <div style={{ fontSize: "1vw", fontWeight: 400, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Efficiency Increase
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
          <div style={{ fontSize: "6vw", fontWeight: 700, color: "#3B82F6", letterSpacing: "-0.04em", lineHeight: 1 }}>
            2.4x
          </div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(148, 163, 184, 0.3)" }} />
          <div style={{ fontSize: "1vw", fontWeight: 400, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Revenue Growth
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
          <div style={{ fontSize: "6vw", fontWeight: 700, color: "#3B82F6", letterSpacing: "-0.04em", lineHeight: 1 }}>
            10M+
          </div>
          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(148, 163, 184, 0.3)" }} />
          <div style={{ fontSize: "1vw", fontWeight: 400, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Active Users
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "4vw",
          fontSize: "0.8vw",
          color: "#94A3B8",
          fontWeight: 300,
          letterSpacing: "0.1em",
        }}
      >
        <span>03</span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ArcticMinimalPage4.tsx`)

```tsx
export function ArcticMinimalPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F0F4F8",
        backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.15) 0.15vw, transparent 0)",
        backgroundSize: "4vw 4vw",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#334155",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "0.8vw", fontWeight: 300, color: "#94A3B8", letterSpacing: "0.3em", textTransform: "uppercase" }}>
          acme.co
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6vh", padding: "8vw" }}>
        <div style={{ width: "2vw", height: "1px", backgroundColor: "#3B82F6" }} />
        
        <div>
          <h2 style={{ fontSize: "5vw", fontWeight: 700, lineHeight: 1.1, margin: 0, color: "#334155", letterSpacing: "-0.03em" }}>
            Let's build<br/>something great.
          </h2>
        </div>

        <div style={{ display: "flex", gap: "4vw", marginTop: "2vh" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
            <span style={{ fontSize: "0.9vw", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 300 }}>Email</span>
            <span style={{ fontSize: "1.2vw", color: "#334155", fontWeight: 400 }}>hello@acme.co</span>
          </div>
          <div style={{ width: "1px", height: "4vh", backgroundColor: "rgba(148, 163, 184, 0.3)" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
            <span style={{ fontSize: "0.9vw", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 300 }}>Office</span>
            <span style={{ fontSize: "1.2vw", color: "#334155", fontWeight: 400 }}>123 Minimal St, SF</span>
          </div>
          <div style={{ width: "1px", height: "4vh", backgroundColor: "rgba(148, 163, 184, 0.3)" }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
            <span style={{ fontSize: "0.9vw", color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 300 }}>Social</span>
            <span style={{ fontSize: "1.2vw", color: "#334155", fontWeight: 400 }}>@acme_co</span>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "4vw",
          fontSize: "0.8vw",
          color: "#94A3B8",
          fontWeight: 300,
          letterSpacing: "0.1em",
        }}
      >
        <span>04</span>
      </div>
    </div>
  );
}
```
