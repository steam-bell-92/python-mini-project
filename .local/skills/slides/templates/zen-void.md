# Zen Void

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The ZenVoid template features a serene and minimalist aesthetic, characterized by a soft, neutral background color of #FAF8F5. It incorporates a background image of a zen garden located at "/__mockup/photos/zen-garden.png," which is displayed in full cover. The text elements utilize the font family 'DM Sans' for the main title, styled in #1A1A1A, and 'Inter' for the subtitle and footer text, with colors #8A8578 and #1A1A1A respectively. Key layout elements include a rotated title positioned at the bottom right, a decorative horizontal line in #8A8578, and a circular accent in #1A1A1A at the bottom left. The overall aesthetic feel can be described as tranquil and modern.

## Source Code

**Component:** `ZenVoid`

### Slide 1 — Title (`slide-styles/ZenVoid.tsx`)

```tsx
export function ZenVoid() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#FAF8F5" }}>
      <img 
        src="/__mockup/photos/zen-garden.png" 
        alt="Zen Garden" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} 
      />
      
      <div style={{
        position: "absolute",
        right: "5vw",
        bottom: "10vh",
        transform: "rotate(-90deg)",
        transformOrigin: "right bottom",
        display: "flex",
        alignItems: "center",
        gap: "2vw",
        whiteSpace: "nowrap"
      }}>
        <h1 style={{ 
          fontFamily: "'DM Sans', sans-serif", 
          color: "#1A1A1A", 
          fontSize: "4.5vw", 
          margin: 0, 
          fontWeight: 400,
          letterSpacing: "-0.02em"
        }}>
          Example Deck
        </h1>
        <div style={{ width: "3vw", height: "1px", background: "#8A8578" }} />
        <p style={{
          fontFamily: "'Inter', sans-serif",
          color: "#8A8578",
          fontSize: "1.2vw",
          margin: 0,
          fontWeight: 300,
          letterSpacing: "0.02em"
        }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{
        position: "absolute",
        bottom: "6vh",
        left: "5vw",
        width: "1.5vw",
        height: "1.5vw",
        borderRadius: "50%",
        background: "#1A1A1A"
      }} />

      <div style={{
        position: "absolute",
        bottom: "6vh",
        right: "5vw",
        fontFamily: "'Inter', sans-serif",
        color: "#1A1A1A",
        fontSize: "0.8vw",
        letterSpacing: "0.1em",
        opacity: 0.8
      }}>
        acme.co
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ZenVoidPage2.tsx`)

```tsx
export function ZenVoidPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#FAF8F5", color: "#1A1A1A", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Header */}
      <div style={{ position: "absolute", top: "15vh", left: "10vw", width: "80vw" }}>
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "3.5vw", fontWeight: 400, margin: 0, letterSpacing: "-0.02em" }}>
          01. The Approach
        </h2>
        <div style={{ width: "100%", height: "1px", background: "#8A8578", marginTop: "2vh", opacity: 0.3 }} />
      </div>

      {/* Content */}
      <div style={{ position: "absolute", top: "35vh", left: "10vw", width: "40vw" }}>
        <p style={{ fontSize: "1.5vw", lineHeight: 1.6, color: "#1A1A1A", fontWeight: 300, margin: "0 0 4vh 0" }}>
          We focus on reduction. By stripping away the non-essential, we reveal the core truth of the product. The remaining elements are given room to breathe and purpose to serve.
        </p>
        <p style={{ fontSize: "1.2vw", lineHeight: 1.6, color: "#8A8578", fontWeight: 300, margin: 0 }}>
          This philosophy extends across our entire design system, creating experiences that are both calm and highly functional. Emptiness is not a lack of content, but a presence of space.
        </p>
      </div>

      <div style={{ position: "absolute", top: "35vh", left: "55vw", width: "35vw" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
          {[
            { title: "Clarity", desc: "Removing noise to amplify the signal." },
            { title: "Intention", desc: "Every element must serve a distinct purpose." },
            { title: "Space", desc: "Allowing concepts the room they need to land." }
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", background: "#1A1A1A", marginTop: "0.6vw", flexShrink: 0 }} />
              <div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.5vw", fontWeight: 400, margin: "0 0 0.5vh 0" }}>{item.title}</h3>
                <p style={{ fontSize: "1.1vw", color: "#8A8578", fontWeight: 300, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: "6vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw" }}>
        <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", background: "#1A1A1A" }} />
        <span style={{ fontSize: "0.8vw", letterSpacing: "0.1em", fontWeight: 400 }}>02</span>
      </div>

      <div style={{ position: "absolute", bottom: "6vh", right: "5vw", fontSize: "0.8vw", letterSpacing: "0.1em", opacity: 0.8 }}>
        acme.co
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ZenVoidPage3.tsx`)

```tsx
export function ZenVoidPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#FAF8F5", color: "#1A1A1A", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Header */}
      <div style={{ position: "absolute", top: "15vh", left: "10vw", width: "80vw" }}>
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "3.5vw", fontWeight: 400, margin: 0, letterSpacing: "-0.02em" }}>
          02. The Metrics
        </h2>
        <div style={{ width: "100%", height: "1px", background: "#8A8578", marginTop: "2vh", opacity: 0.3 }} />
      </div>

      {/* Content - Data Viz */}
      <div style={{ position: "absolute", top: "35vh", left: "10vw", width: "80vw", display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "40vh" }}>
        
        {/* Metric 1 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
          <div style={{ fontSize: "3vw", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>84%</div>
          <div style={{ width: "12vw", height: "20vh", background: "#EAE6DF", position: "relative" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "84%", background: "#1A1A1A" }} />
          </div>
          <div style={{ fontSize: "1vw", color: "#8A8578", letterSpacing: "0.05em", textTransform: "uppercase" }}>RETENTION</div>
        </div>

        {/* Metric 2 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
          <div style={{ fontSize: "3vw", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>62%</div>
          <div style={{ width: "12vw", height: "20vh", background: "#EAE6DF", position: "relative" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "62%", background: "#1A1A1A" }} />
          </div>
          <div style={{ fontSize: "1vw", color: "#8A8578", letterSpacing: "0.05em", textTransform: "uppercase" }}>ENGAGEMENT</div>
        </div>

        {/* Metric 3 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
          <div style={{ fontSize: "3vw", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>91%</div>
          <div style={{ width: "12vw", height: "20vh", background: "#EAE6DF", position: "relative" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "91%", background: "#1A1A1A" }} />
          </div>
          <div style={{ fontSize: "1vw", color: "#8A8578", letterSpacing: "0.05em", textTransform: "uppercase" }}>ADOPTION</div>
        </div>

        {/* Metric 4 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
          <div style={{ fontSize: "3vw", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>45%</div>
          <div style={{ width: "12vw", height: "20vh", background: "#EAE6DF", position: "relative" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "45%", background: "#1A1A1A" }} />
          </div>
          <div style={{ fontSize: "1vw", color: "#8A8578", letterSpacing: "0.05em", textTransform: "uppercase" }}>GROWTH</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ position: "absolute", bottom: "6vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw" }}>
        <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", background: "#1A1A1A" }} />
        <span style={{ fontSize: "0.8vw", letterSpacing: "0.1em", fontWeight: 400 }}>03</span>
      </div>

      <div style={{ position: "absolute", bottom: "6vh", right: "5vw", fontSize: "0.8vw", letterSpacing: "0.1em", opacity: 0.8 }}>
        acme.co
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ZenVoidPage4.tsx`)

```tsx
export function ZenVoidPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#FAF8F5", color: "#1A1A1A", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Content */}
      <div style={{ position: "absolute", top: "0", left: "0", width: "100vw", height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "6vw", fontWeight: 400, margin: "0 0 2vh 0", letterSpacing: "-0.02em" }}>
          End of Deck
        </h2>
        <div style={{ width: "4vw", height: "1px", background: "#8A8578", marginBottom: "4vh" }} />
        <p style={{ fontSize: "1.2vw", color: "#8A8578", letterSpacing: "0.1em", margin: 0, fontWeight: 300, textTransform: "uppercase" }}>
          hello@acme.co
        </p>
      </div>

      {/* Decorative vertical line matching the Zen aesthetic */}
      <div style={{ position: "absolute", top: "0", left: "50%", width: "1px", height: "25vh", background: "linear-gradient(to bottom, transparent, #8A8578)" }} />
      <div style={{ position: "absolute", bottom: "0", left: "50%", width: "1px", height: "25vh", background: "linear-gradient(to top, transparent, #8A8578)" }} />

      {/* Footer */}
      <div style={{ position: "absolute", bottom: "6vh", left: "5vw", display: "flex", alignItems: "center", gap: "1vw" }}>
        <div style={{ width: "1.5vw", height: "1.5vw", borderRadius: "50%", background: "#1A1A1A" }} />
        <span style={{ fontSize: "0.8vw", letterSpacing: "0.1em", fontWeight: 400 }}>04</span>
      </div>

      <div style={{ position: "absolute", bottom: "6vh", right: "5vw", fontSize: "0.8vw", letterSpacing: "0.1em", opacity: 0.8 }}>
        acme.co
      </div>
    </div>
  );
}
```
