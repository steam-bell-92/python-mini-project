# Zen Meditation

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "ZenMeditation" template embodies a serene and minimalist aesthetic, characterized by a calming layout and soft color palette. The background color is a solid #F4F1ED, while text colors include #2C2C2A for primary text, #7A7874 for secondary text, #D1C9BE for a decorative line, #1A1A19 for the main heading, #5A5854 for the subtitle, and #A39E96 for the footer text. The font family used is 'Space Grotesk' for general text and 'DM Mono' for specific elements, providing a modern yet understated feel. Key layout elements include a flexible column structure with a decorative horizontal line, a prominent heading, and a background image of a zen garden located at "/__mockup/photos/zen-garden.jpg". The overall aesthetic feel is tranquil and modern.

## Source Code

**Component:** `ZenMeditation`

### Slide 1 — Title (`slide-styles/ZenMeditation.tsx`)

```tsx
export function ZenMeditation() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F1ED",
        color: "#2C2C2A",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.05em" }}>acme.co</div>
          <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#7A7874" }}>2026</div>
        </div>
        
        <div style={{ marginBottom: "10vh" }}>
          <div style={{ width: "3vw", height: "0.2vh", backgroundColor: "#D1C9BE", marginBottom: "4vh" }}></div>
          <h1 style={{ fontSize: "7vw", margin: 0, fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A19" }}>
            Example<br />Deck
          </h1>
          <p style={{ fontSize: "1.5vw", marginTop: "4vh", color: "#5A5854", lineHeight: 1.4, fontWeight: 400, maxWidth: "35vw" }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div>
          <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", color: "#A39E96", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Example Company, Inc. / Confidential
          </div>
        </div>
      </div>

      <div
        style={{
          width: "45vw",
          height: "100vh",
          backgroundImage: 'url("/__mockup/photos/zen-garden.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ZenMeditationPage2.tsx`)

```tsx
export function ZenMeditationPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F1ED",
        color: "#2C2C2A",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 5vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.05em" }}>acme.co</div>
        <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#7A7874" }}>02</div>
      </div>
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", marginTop: "4vh" }}>
        <div style={{ width: "3vw", height: "0.2vh", backgroundColor: "#D1C9BE", marginBottom: "4vh" }}></div>
        <h2 style={{ fontSize: "4vw", margin: 0, fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A19", maxWidth: "60vw" }}>
          Finding balance in a chaotic market.
        </h2>
        
        <div style={{ display: "flex", gap: "6vw", marginTop: "8vh" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", color: "#7A7874", marginBottom: "2vh", borderBottom: "0.1vh solid #D1C9BE", paddingBottom: "1vh" }}>01. THE PROBLEM</div>
            <p style={{ fontSize: "1.2vw", color: "#5A5854", lineHeight: 1.5, fontWeight: 400 }}>
              Teams are overwhelmed by noise, constant notifications, and scattered information across multiple platforms, leading to cognitive fatigue.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", color: "#7A7874", marginBottom: "2vh", borderBottom: "0.1vh solid #D1C9BE", paddingBottom: "1vh" }}>02. THE APPROACH</div>
            <p style={{ fontSize: "1.2vw", color: "#5A5854", lineHeight: 1.5, fontWeight: 400 }}>
              We introduced mindful workflows, limiting interruptions and organizing data thoughtfully to restore focus and drive meaningful progress.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", color: "#7A7874", marginBottom: "2vh", borderBottom: "0.1vh solid #D1C9BE", paddingBottom: "1vh" }}>03. THE OUTCOME</div>
            <p style={{ fontSize: "1.2vw", color: "#5A5854", lineHeight: 1.5, fontWeight: 400 }}>
              A serene, productive environment where deep work happens naturally, creativity flourishes, and team burnout is significantly reduced.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", color: "#A39E96", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Market Analysis
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ZenMeditationPage3.tsx`)

```tsx
export function ZenMeditationPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F1ED",
        color: "#2C2C2A",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "40vw",
          padding: "6vh 5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          backgroundColor: "#EBE6E0",
        }}
      >
        <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.05em" }}>acme.co</div>
        
        <div>
          <div style={{ width: "3vw", height: "0.2vh", backgroundColor: "#D1C9BE", marginBottom: "4vh" }}></div>
          <h2 style={{ fontSize: "3.5vw", margin: 0, fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#1A1A19" }}>
            Measurable<br />clarity.
          </h2>
          <p style={{ fontSize: "1.2vw", marginTop: "3vh", color: "#5A5854", lineHeight: 1.5 }}>
            Our metrics show a significant shift towards focused execution when distractions are minimized.
          </p>
        </div>
        
        <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", color: "#A39E96", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Data & Insights
        </div>
      </div>

      <div
        style={{
          flex: 1,
          padding: "6vh 5vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "10vh" }}>
          <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#7A7874" }}>03</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6vh", maxWidth: "40vw", margin: "0 auto", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: "2vw" }}>
            <div style={{ fontSize: "7vw", fontWeight: 300, lineHeight: 0.8, letterSpacing: "-0.05em", color: "#1A1A19" }}>84%</div>
            <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#5A5854", paddingBottom: "1vh", borderBottom: "0.1vh solid #D1C9BE", flex: 1 }}>
              INCREASE IN DEEP WORK
            </div>
          </div>
          
          <div style={{ display: "flex", alignItems: "flex-end", gap: "2vw" }}>
            <div style={{ fontSize: "7vw", fontWeight: 300, lineHeight: 0.8, letterSpacing: "-0.05em", color: "#1A1A19" }}>-60%</div>
            <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#5A5854", paddingBottom: "1vh", borderBottom: "0.1vh solid #D1C9BE", flex: 1 }}>
              REDUCTION IN CONTEXT SWITCHING
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: "2vw" }}>
            <div style={{ fontSize: "7vw", fontWeight: 300, lineHeight: 0.8, letterSpacing: "-0.05em", color: "#1A1A19" }}>2.5x</div>
            <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#5A5854", paddingBottom: "1vh", borderBottom: "0.1vh solid #D1C9BE", flex: 1 }}>
              FASTER PROJECT COMPLETION
            </div>
          </div>
        </div>
        
        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ZenMeditationPage4.tsx`)

```tsx
export function ZenMeditationPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A1A19",
        color: "#F4F1ED",
        fontFamily: "'Space Grotesk', sans-serif",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 5vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 1 }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 700, letterSpacing: "-0.05em" }}>acme.co</div>
        <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#A39E96" }}>04</div>
      </div>
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", zIndex: 1 }}>
        <div style={{ width: "0.2vh", height: "8vh", backgroundColor: "#5A5854", marginBottom: "4vh" }}></div>
        <h2 style={{ fontSize: "5vw", margin: 0, fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
          Begin your practice.
        </h2>
        <p style={{ fontSize: "1.5vw", marginTop: "3vh", color: "#A39E96", lineHeight: 1.5, fontWeight: 400, maxWidth: "40vw" }}>
          Join us in building a calmer, more deliberate future of work.
        </p>
        
        <div style={{ marginTop: "6vh", display: "inline-block", border: "0.1vh solid #D1C9BE", padding: "2vh 4vw", borderRadius: "10vh", fontSize: "1vw", fontFamily: "'DM Mono', monospace", letterSpacing: "0.05em", cursor: "pointer", transition: "all 0.3s ease" }}>
          hello@acme.co
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", zIndex: 1 }}>
        <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", color: "#5A5854", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          Example Company, Inc.
        </div>
        <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", color: "#5A5854" }}>
          San Francisco / Tokyo / London
        </div>
      </div>

      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at center, rgba(44,44,42,0.5) 0%, rgba(26,26,25,1) 70%)",
        zIndex: 0,
        pointerEvents: "none"
      }}></div>
    </div>
  );
}
```
