# Street Mural

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "StreetMural" template features a vibrant urban aesthetic, characterized by a full-bleed background image of a street mural located at "/__mockup/photos/street-mural.png". The background is complemented by a solid black rectangle (#0A0A0A) positioned at the bottom, which houses various text elements. The text colors include a warm accent of #D4695A for headers, #FFFFFF for the main title, and #A0A0A0 for the subtitle, with additional shades of #666666 and varying opacities for other text elements. The font families used are "'Space Grotesk', sans-serif" for the overall layout and "'DM Mono', monospace" for the text, providing a modern and clean look. Key layout elements include a structured arrangement of text within the black rectangle, with a focus on hierarchy and spacing, creating a dynamic yet organized presentation. The overall aesthetic feel is urban and contemporary.

## Source Code

**Component:** `StreetMural`

### Slide 1 — Title (`slide-styles/StreetMural.tsx`)

```tsx
export function StreetMural() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Full-bleed background image */}
      <img
        src="/__mockup/photos/street-mural.png"
        alt="Street Mural"
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

      {/* Solid black rectangle */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "52vw",
          height: "40vh",
          background: "#0A0A0A",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "4vh 4vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top area of the black block */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5vw",
              marginBottom: "1vh",
            }}
          >
            <div
              style={{
                color: "#D4695A",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                fontWeight: 600,
                letterSpacing: "0.2em",
              }}
            >
              /////
            </div>
            <div
              style={{
                color: "#D4695A",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.8vw",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              DISTRICT
            </div>
            <div
              style={{
                color: "#666666",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7vw",
                fontWeight: 500,
                letterSpacing: "0.1em",
              }}
            >
              PUBLIC ART PROJECT
            </div>
          </div>

          <h1
            style={{
              color: "#FFFFFF",
              fontSize: "6vw",
              fontWeight: 800,
              lineHeight: 1,
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            EXAMPLE DECK
          </h1>

          <p
            style={{
              color: "#A0A0A0",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.2vw",
              marginTop: "2vh",
              maxWidth: "40vw",
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Bottom area of the black block */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "0.9vw",
              opacity: 0.8,
            }}
          >
            acme.co
          </div>
          <div
            style={{
              color: "#FFFFFF",
              fontSize: "0.9vw",
              opacity: 0.5,
            }}
          >
            2026
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/StreetMuralPage2.tsx`)

```tsx
export function StreetMuralPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0A0A0A",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Decorative top */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "6vw",
          display: "flex",
          alignItems: "center",
          gap: "1.5vw",
        }}
      >
        <div
          style={{
            color: "#D4695A",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            fontWeight: 600,
            letterSpacing: "0.2em",
          }}
        >
          /////
        </div>
        <div
          style={{
            color: "#D4695A",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          OVERVIEW
        </div>
        <div
          style={{
            color: "#666666",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.7vw",
            fontWeight: 500,
            letterSpacing: "0.1em",
          }}
        >
          PROJECT SCOPE
        </div>
      </div>

      <div style={{ position: "absolute", top: "20vh", left: "6vw", right: "6vw" }}>
        <h2
          style={{
            color: "#FFFFFF",
            fontSize: "5.5vw",
            fontWeight: 800,
            margin: "0 0 4vh 0",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          THE URBAN CANVAS
        </h2>

        <div style={{ display: "flex", gap: "8vw", marginTop: "8vh" }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: "4vw", height: "4px", backgroundColor: "#D4695A", marginBottom: "3vh" }} />
            <p
              style={{
                color: "#A0A0A0",
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.2vw",
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 400,
              }}
            >
              Cities are defined not just by their architecture, but by the spaces between buildings. Our initiative transforms these blank walls into vibrant expressions of local culture, community identity, and shared history, giving voice to neighborhood stories.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ width: "4vw", height: "4px", backgroundColor: "#333333", marginBottom: "3vh" }} />
            <p
              style={{
                color: "#A0A0A0",
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.2vw",
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 400,
              }}
            >
              By engaging local artists and community members in the design process, we ensure that every mural reflects the unique character of its surroundings, fostering a deep sense of pride and collective ownership among residents.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "6vw",
          right: "6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <div style={{ color: "#FFFFFF", fontSize: "0.9vw", opacity: 0.8 }}>acme.co</div>
        <div style={{ color: "#FFFFFF", fontSize: "0.9vw", opacity: 0.5 }}>02</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/StreetMuralPage3.tsx`)

```tsx
export function StreetMuralPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0A0A0A",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      {/* Decorative top */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "6vw",
          display: "flex",
          alignItems: "center",
          gap: "1.5vw",
        }}
      >
        <div
          style={{
            color: "#D4695A",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            fontWeight: 600,
            letterSpacing: "0.2em",
          }}
        >
          /////
        </div>
        <div
          style={{
            color: "#D4695A",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          IMPACT METRICS
        </div>
      </div>

      <div style={{ position: "absolute", top: "20vh", left: "6vw", right: "6vw" }}>
        <h2
          style={{
            color: "#FFFFFF",
            fontSize: "5.5vw",
            fontWeight: 800,
            margin: "0 0 10vh 0",
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          COMMUNITY REACH
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            height: "40vh",
            borderBottom: "2px solid #333",
            paddingBottom: "2vh",
            position: "relative",
          }}
        >
          {/* Bar 1 */}
          <div style={{ width: "25%", display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ color: "#FFFFFF", fontSize: "4vw", fontWeight: 800, lineHeight: 1 }}>24</div>
              <div style={{ color: "#A0A0A0", fontFamily: "'DM Mono', monospace", fontSize: "1vw", textTransform: "uppercase", paddingBottom: "0.5vh" }}>MURALS</div>
            </div>
            <div style={{ width: "100%", height: "15vh", backgroundColor: "#333333" }}></div>
          </div>

          {/* Bar 2 */}
          <div style={{ width: "25%", display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ color: "#FFFFFF", fontSize: "4vw", fontWeight: 800, lineHeight: 1 }}>142</div>
              <div style={{ color: "#A0A0A0", fontFamily: "'DM Mono', monospace", fontSize: "1vw", textTransform: "uppercase", paddingBottom: "0.5vh" }}>ARTISTS</div>
            </div>
            <div style={{ width: "100%", height: "25vh", backgroundColor: "#666666" }}></div>
          </div>

          {/* Bar 3 */}
          <div style={{ width: "25%", display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div style={{ color: "#D4695A", fontSize: "4vw", fontWeight: 800, lineHeight: 1 }}>85K</div>
              <div style={{ color: "#D4695A", fontFamily: "'DM Mono', monospace", fontSize: "1vw", textTransform: "uppercase", paddingBottom: "0.5vh", opacity: 0.8 }}>VISITORS</div>
            </div>
            <div style={{ width: "100%", height: "35vh", backgroundColor: "#D4695A" }}></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "6vw",
          right: "6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <div style={{ color: "#FFFFFF", fontSize: "0.9vw", opacity: 0.8 }}>acme.co</div>
        <div style={{ color: "#FFFFFF", fontSize: "0.9vw", opacity: 0.5 }}>03</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/StreetMuralPage4.tsx`)

```tsx
export function StreetMuralPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Space Grotesk', sans-serif",
        backgroundColor: "#0A0A0A",
      }}
    >
      <img
        src="/__mockup/photos/street-mural.png"
        alt="Street Mural"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          filter: "grayscale(100%) brightness(0.6)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "60vw",
          height: "100vh",
          background: "linear-gradient(to right, rgba(10,10,10,0.2) 0%, #0A0A0A 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50vw",
          height: "100vh",
          backgroundColor: "#0A0A0A",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 6vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
            marginBottom: "4vh",
          }}
        >
          <div
            style={{
              color: "#D4695A",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.9vw",
              fontWeight: 600,
              letterSpacing: "0.2em",
            }}
          >
            /////
          </div>
          <div
            style={{
              color: "#D4695A",
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.8vw",
              fontWeight: 500,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            GET INVOLVED
          </div>
        </div>

        <h2
          style={{
            color: "#FFFFFF",
            fontSize: "6vw",
            fontWeight: 800,
            margin: "0 0 3vh 0",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          JOIN THE<br />
          MOVEMENT
        </h2>

        <p
          style={{
            color: "#A0A0A0",
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.2vw",
            lineHeight: 1.5,
            margin: "0 0 8vh 0",
            fontWeight: 400,
            maxWidth: "30vw",
          }}
        >
          Partner with us to transform the next blank wall in your neighborhood into a local landmark.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh", fontFamily: "'DM Mono', monospace", maxWidth: "35vw" }}>
          <div style={{ color: "#FFFFFF", fontSize: "1.1vw", borderBottom: "1px solid #333", paddingBottom: "1.5vh", display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#666", fontWeight: 500 }}>WEB</span>
            <span>streetmural.art</span>
          </div>
          <div style={{ color: "#FFFFFF", fontSize: "1.1vw", borderBottom: "1px solid #333", paddingBottom: "1.5vh", display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#666", fontWeight: 500 }}>EMAIL</span>
            <span>hello@streetmural.art</span>
          </div>
          <div style={{ color: "#FFFFFF", fontSize: "1.1vw", borderBottom: "1px solid #333", paddingBottom: "1.5vh", display: "flex", justifyContent: "space-between" }}>
            <span style={{ color: "#666", fontWeight: 500 }}>SOCIAL</span>
            <span>@streetmural_project</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "6vw",
          zIndex: 3,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <div style={{ color: "#FFFFFF", fontSize: "0.9vw", opacity: 0.8 }}>acme.co</div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          right: "6vw",
          zIndex: 3,
          fontFamily: "'DM Mono', monospace",
        }}
      >
        <div style={{ color: "#FFFFFF", fontSize: "0.9vw", opacity: 0.5 }}>04</div>
      </div>
    </div>
  );
}
```
