# Gallery Modern

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "GalleryModern" template features a contemporary aesthetic, characterized by a clean and minimalistic design. The background color is a soft off-white, specifically #FCFAF8, with a background image sourced from "/__mockup/photos/art-gallery.png" that covers the entire viewport. A white overlay gradient is applied, transitioning from transparent to rgba(252,250,248,0.95) and rgba(252,250,248,0.98) towards the bottom. Text elements utilize the 'Inter' font for body text and 'Space Grotesk' for headings, with colors including #666666 for secondary text and #1A1A1A for primary headings. The layout includes a flexible content container positioned at the bottom, with elements arranged in a row and aligned to create a balanced composition. The overall aesthetic feel is modern and sophisticated.

## Source Code

**Component:** `GalleryModern`

### Slide 1 — Title (`slide-styles/GalleryModern.tsx`)

```tsx
export function GalleryModern() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#FCFAF8",
      }}
    >
      {/* Background Photo */}
      <img
        src="/__mockup/photos/art-gallery.png"
        alt="Art Gallery"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* White Overlay Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, transparent 55%, rgba(252,250,248,0.95) 70%, rgba(252,250,248,0.98) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "40vh",
          padding: "5vh 8vw",
          zIndex: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "60vw" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8vw",
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: "#666666",
              textTransform: "uppercase",
              marginBottom: "2vh",
            }}
          >
            CONTEMPORARY EXHIBITION
          </div>
          
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "6vw",
              fontWeight: 400,
              color: "#1A1A1A",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Example Deck
          </h1>
          
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              fontWeight: 300,
              color: "#666666",
              marginTop: "2vh",
              marginBottom: 0,
              lineHeight: 1.5,
              maxWidth: "45vw",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right", gap: "1vh" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9vw",
              fontWeight: 400,
              color: "#1A1A1A",
              letterSpacing: "0.05em",
            }}
          >
            Gallery III
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9vw",
              fontWeight: 400,
              color: "#666666",
              letterSpacing: "0.05em",
            }}
          >
            Opening Reception
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8vw",
              fontWeight: 500,
              color: "#1A1A1A",
              letterSpacing: "0.1em",
              marginTop: "3vh",
            }}
          >
            acme.co
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/GalleryModernPage2.tsx`)

```tsx
export function GalleryModernPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#FCFAF8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1, display: "flex", padding: "10vh 8vw 0 8vw", gap: "8vw", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "4vw",
              fontWeight: 400,
              color: "#1A1A1A",
              margin: "0 0 4vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Curated Approach to Modern Design
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              fontWeight: 300,
              color: "#666666",
              lineHeight: 1.6,
              marginBottom: "3vh",
              maxWidth: "90%",
            }}
          >
            We believe that space shapes human experience. By stripping away the unnecessary, we create room for what truly matters in your visual storytelling.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              fontWeight: 300,
              color: "#666666",
              lineHeight: 1.6,
              maxWidth: "90%",
            }}
          >
            Our methodology bridges the gap between artistic expression and functional necessity.
          </p>
        </div>
        <div style={{ flex: 1, height: "60vh", position: "relative" }}>
          <img
            src="/__mockup/photos/art-gallery.png"
            alt="Gallery"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
          />
        </div>
      </div>
      
      {/* Footer Container */}
      <div
        style={{
          width: "100%",
          padding: "5vh 8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", fontWeight: 500, letterSpacing: "0.2em", color: "#666666", textTransform: "uppercase" }}>
          EXHIBIT 01
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", fontWeight: 500, letterSpacing: "0.2em", color: "#666666" }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/GalleryModernPage3.tsx`)

```tsx
export function GalleryModernPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#FCFAF8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "10vh 8vw 0 8vw", justifyContent: "center" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8vh" }}>
          <div style={{ flex: 1, borderTop: "1px solid #E5E5E5", paddingTop: "4vh", marginRight: "4vw" }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "6vw", color: "#1A1A1A", lineHeight: 1 }}>78%</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "#666666", marginTop: "2vh", letterSpacing: "0.05em" }}>Increase in engagement</div>
          </div>
          <div style={{ flex: 1, borderTop: "1px solid #E5E5E5", paddingTop: "4vh", marginRight: "4vw" }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "6vw", color: "#1A1A1A", lineHeight: 1 }}>1.2M</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "#666666", marginTop: "2vh", letterSpacing: "0.05em" }}>Visitors annually</div>
          </div>
          <div style={{ flex: 1, borderTop: "1px solid #E5E5E5", paddingTop: "4vh" }}>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "6vw", color: "#1A1A1A", lineHeight: 1 }}>45+</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "#666666", marginTop: "2vh", letterSpacing: "0.05em" }}>Exhibitions hosted</div>
          </div>
        </div>
        
        <div style={{ width: "100%", height: "30vh", display: "flex", alignItems: "flex-end", gap: "1vw", paddingBottom: "2vh", borderBottom: "1px solid #E5E5E5" }}>
          {[35, 50, 20, 65, 80, 45, 90, 60, 75, 40].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                backgroundColor: "#1A1A1A",
                opacity: i === 6 ? 1 : 0.1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Footer Container */}
      <div
        style={{
          width: "100%",
          padding: "5vh 8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", fontWeight: 500, letterSpacing: "0.2em", color: "#666666", textTransform: "uppercase" }}>
          METRICS & IMPACT
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", fontWeight: 500, letterSpacing: "0.2em", color: "#666666" }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/GalleryModernPage4.tsx`)

```tsx
export function GalleryModernPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#FCFAF8",
      }}
    >
      <img
        src="/__mockup/photos/art-gallery.png"
        alt="Art Gallery"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          transform: "scale(-1, 1)",
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, transparent 40%, rgba(252,250,248,0.95) 60%, rgba(252,250,248,1) 100%)",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          zIndex: 2,
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "5vw",
              fontWeight: 400,
              color: "#1A1A1A",
              margin: "0 0 3vh 0",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Let's Collaborate.
          </h2>
          
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              fontWeight: 400,
              color: "#666666",
              marginBottom: "4vh",
            }}
          >
            studio@example.com
          </div>
          
          <div
            style={{
              display: "inline-block",
              border: "1px solid #1A1A1A",
              padding: "1.5vh 3vw",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9vw",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#1A1A1A",
            }}
          >
            Get in touch
          </div>
        </div>

        {/* Footer Container */}
        <div
          style={{
            width: "100%",
            padding: "5vh 8vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            boxSizing: "border-box",
          }}
        >
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", fontWeight: 500, letterSpacing: "0.2em", color: "#666666", textTransform: "uppercase" }}>
            THE CONCLUSION
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8vw", fontWeight: 500, letterSpacing: "0.2em", color: "#666666" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
