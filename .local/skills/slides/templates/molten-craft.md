# Molten Craft

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "MoltenCraft" template features a modern and artistic aesthetic, characterized by a striking visual of molten glass. The background consists of a radial gradient transitioning from transparent to rgba(0,0,0,0.7), layered over a full-screen image sourced from "/__mockup/photos/molten-glass.png". The primary text color is #E8A84C, with accents in #C4652A and #FFFFFF for contrast. The font families used include 'DM Sans' for body text and 'DM Mono' for secondary elements, while 'Playfair Display' is employed for headings, creating a sophisticated yet approachable feel. Key layout elements include a large, semi-transparent text overlay reading "STUDIO" and a structured footer with additional text elements, all positioned to enhance readability against the dynamic background. The overall aesthetic feel is "artistic, modern, molten."

## Source Code

**Component:** `MoltenCraft`

### Slide 1 — Title (`slide-styles/MoltenCraft.tsx`)

```tsx
export function MoltenCraft() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
      }}
    >
      <img
        src="/__mockup/photos/molten-glass.png"
        alt=""
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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.7) 100%)",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "5vw",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "20vw",
          fontWeight: 800,
          color: "#E8A84C",
          opacity: 0.06,
          letterSpacing: "0.05em",
          lineHeight: 1,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        STUDIO
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          padding: "8vh 6vw",
          boxSizing: "border-box",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#E8A84C",
            fontSize: "1vw",
            letterSpacing: "0.2em",
            fontWeight: 500,
            marginBottom: "3vh",
          }}
        >
          FIRE & FORM
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#E8A84C",
            fontSize: "7vw",
            lineHeight: 1.05,
            fontWeight: 500,
            margin: "0 0 2vh 0",
            letterSpacing: "-0.01em",
            textShadow: "0 4px 12px rgba(0,0,0,0.4)",
          }}
        >
          Example Deck
        </h1>
        
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#FFFFFF",
            opacity: 0.85,
            fontSize: "1.6vw",
            lineHeight: 1.5,
            margin: "0 0 4vh 0",
            maxWidth: "40vw",
            textShadow: "0 2px 8px rgba(0,0,0,0.5)",
            fontWeight: 300,
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", marginTop: "auto" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#C4652A",
              fontSize: "1vw",
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#C4652A",
              fontSize: "1.5vw",
              fontStyle: "italic",
              letterSpacing: "0.02em",
            }}
          >
            Master Series
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/MoltenCraftPage2.tsx`)

```tsx
export function MoltenCraftPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0d0a08",
      }}
    >
      <img
        src="/__mockup/photos/molten-glass.png"
        alt=""
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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(10, 8, 5, 0.95) 0%, rgba(10, 8, 5, 0.7) 100%)",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: "15vh",
          right: "-5vw",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "22vw",
          fontWeight: 800,
          color: "#E8A84C",
          opacity: 0.04,
          letterSpacing: "0.05em",
          lineHeight: 1,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        VISION
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "8vh 6vw",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#E8A84C",
                fontSize: "1vw",
                letterSpacing: "0.2em",
                fontWeight: 500,
                marginBottom: "2vh",
              }}
            >
              01 // THE APPROACH
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#E8A84C",
                fontSize: "4.5vw",
                lineHeight: 1.1,
                fontWeight: 500,
                margin: "0 0 6vh 0",
                letterSpacing: "-0.01em",
              }}
            >
              Forging the Future
            </h2>
          </div>
        </div>

        <div style={{ display: "flex", gap: "6vw", marginTop: "4vh" }}>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#FFFFFF",
                fontSize: "2vw",
                marginBottom: "2vh",
                fontWeight: 400,
                borderBottom: "1px solid rgba(232, 168, 76, 0.3)",
                paddingBottom: "2vh",
              }}
            >
              Raw Materials
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#FFFFFF",
                opacity: 0.8,
                fontSize: "1.2vw",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              We source the finest inputs, understanding that true quality begins long before the forging process starts. Every element is selected with meticulous care and intention.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#FFFFFF",
                fontSize: "2vw",
                marginBottom: "2vh",
                fontWeight: 400,
                borderBottom: "1px solid rgba(232, 168, 76, 0.3)",
                paddingBottom: "2vh",
              }}
            >
              The Crucible
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#FFFFFF",
                opacity: 0.8,
                fontSize: "1.2vw",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              Subjecting our concepts to intense pressure and heat, we burn away the impurities until only the strongest, most resilient core remains.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#FFFFFF",
                fontSize: "2vw",
                marginBottom: "2vh",
                fontWeight: 400,
                borderBottom: "1px solid rgba(232, 168, 76, 0.3)",
                paddingBottom: "2vh",
              }}
            >
              Refinement
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: "#FFFFFF",
                opacity: 0.8,
                fontSize: "1.2vw",
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              The final stages require a delicate touch. Through repeated iterations, we polish the rough edges to reveal the brilliance beneath.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", marginTop: "auto" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#C4652A",
              fontSize: "1vw",
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#C4652A",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/MoltenCraftPage3.tsx`)

```tsx
export function MoltenCraftPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0d0a08",
      }}
    >
      <img
        src="/__mockup/photos/molten-glass.png"
        alt=""
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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(10, 8, 5, 0.95) 0%, rgba(10, 8, 5, 0.85) 100%)",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: "40vh",
          left: "-10vw",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "25vw",
          fontWeight: 800,
          color: "#E8A84C",
          opacity: 0.03,
          letterSpacing: "0.05em",
          lineHeight: 1,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        METRICS
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "8vh 6vw",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#E8A84C",
            fontSize: "1vw",
            letterSpacing: "0.2em",
            fontWeight: 500,
            marginBottom: "2vh",
            textAlign: "center",
          }}
        >
          02 // THE IMPACT
        </div>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#E8A84C",
            fontSize: "4vw",
            lineHeight: 1.1,
            fontWeight: 500,
            margin: "0 0 8vh 0",
            letterSpacing: "-0.01em",
            textAlign: "center",
          }}
        >
          Heat &amp; Pressure Yield Results
        </h2>

        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flex: 1 }}>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "7vw",
                color: "#E8A84C",
                fontWeight: 400,
                lineHeight: 1,
                textShadow: "0 4px 12px rgba(232, 168, 76, 0.2)",
              }}
            >
              1200&deg;
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#FFFFFF",
                fontSize: "1.2vw",
                opacity: 0.7,
                marginTop: "2vh",
                letterSpacing: "0.1em",
              }}
            >
              OPTIMAL TEMP
            </div>
          </div>
          
          <div style={{ width: "1px", height: "15vh", backgroundColor: "rgba(232, 168, 76, 0.3)" }}></div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "7vw",
                color: "#E8A84C",
                fontWeight: 400,
                lineHeight: 1,
                textShadow: "0 4px 12px rgba(232, 168, 76, 0.2)",
              }}
            >
              84<span style={{ fontSize: "4vw" }}>%</span>
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#FFFFFF",
                fontSize: "1.2vw",
                opacity: 0.7,
                marginTop: "2vh",
                letterSpacing: "0.1em",
              }}
            >
              PURITY RATE
            </div>
          </div>

          <div style={{ width: "1px", height: "15vh", backgroundColor: "rgba(232, 168, 76, 0.3)" }}></div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "7vw",
                color: "#E8A84C",
                fontWeight: 400,
                lineHeight: 1,
                textShadow: "0 4px 12px rgba(232, 168, 76, 0.2)",
              }}
            >
              3.2<span style={{ fontSize: "4vw" }}>X</span>
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#FFFFFF",
                fontSize: "1.2vw",
                opacity: 0.7,
                marginTop: "2vh",
                letterSpacing: "0.1em",
              }}
            >
              STRENGTH MULTIPLIER
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", marginTop: "auto" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#C4652A",
              fontSize: "1vw",
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#C4652A",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/MoltenCraftPage4.tsx`)

```tsx
export function MoltenCraftPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0d0a08",
      }}
    >
      <img
        src="/__mockup/photos/molten-glass.png"
        alt=""
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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at center, transparent 0%, rgba(10,8,5,0.95) 100%)",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          bottom: "-5vh",
          left: "5vw",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "25vw",
          fontWeight: 800,
          color: "#E8A84C",
          opacity: 0.05,
          letterSpacing: "0.05em",
          lineHeight: 1,
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        NEXT
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "8vh 6vw",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#C4652A",
              fontSize: "1.2vw",
              letterSpacing: "0.3em",
              fontWeight: 500,
              marginBottom: "4vh",
            }}
          >
            LET'S BEGIN
          </div>
          
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#E8A84C",
              fontSize: "8vw",
              lineHeight: 1.1,
              fontWeight: 500,
              margin: "0 0 4vh 0",
              letterSpacing: "-0.02em",
              textAlign: "center",
              textShadow: "0 4px 16px rgba(0,0,0,0.5)",
            }}
          >
            Forge Ahead.
          </h2>
          
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#FFFFFF",
              opacity: 0.8,
              fontSize: "1.6vw",
              lineHeight: 1.6,
              fontWeight: 300,
              textAlign: "center",
              maxWidth: "40vw",
              marginBottom: "6vh",
            }}
          >
            Join us in crafting the next generation of masterpieces. The crucible awaits your boldest ideas.
          </p>

          <div
            style={{
              border: "1px solid #E8A84C",
              padding: "2vh 4vw",
              fontFamily: "'DM Mono', monospace",
              color: "#E8A84C",
              fontSize: "1.2vw",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backgroundColor: "rgba(232, 168, 76, 0.05)",
            }}
          >
            Contact the Studio
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", marginTop: "auto" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#C4652A",
              fontSize: "1vw",
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#C4652A",
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
