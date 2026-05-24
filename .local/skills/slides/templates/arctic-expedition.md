# Arctic Expedition

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "ArcticExpedition" template features a cold, minimalist aesthetic that evokes the serene and stark beauty of the Arctic. The background color is a deep navy blue, specifically #081423, complemented by a linear gradient overlay transitioning from rgba(8,20,35,0.92) to transparent. Text and accent colors include a soft light blue #C8DDE8, which is used for various text elements and a decorative line. The template employs three font families: 'DM Mono' for the uppercase labels, 'Playfair Display' for the main title, and 'Inter' for the subtitle, creating a contrast between modern and classic styles. Key layout elements include a full-screen background image of Arctic icebergs, positioned absolutely, and a structured layout with flexbox for content alignment, featuring decorative lines and ample padding. The overall aesthetic feel can be described as "cold elegance."

## Source Code

**Component:** `ArcticExpedition`

### Slide 1 — Title (`slide-styles/ArcticExpedition.tsx`)

```tsx
export function ArcticExpedition() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#081423",
      }}
    >
      <img
        src="/__mockup/photos/arctic-icebergs.png"
        alt="Arctic Icebergs"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(8,20,35,0.92) 0%, rgba(8,20,35,0.7) 40%, transparent 70%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#C8DDE8",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.1vw",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            display: "flex",
            justifyContent: "space-between",
            width: "40vw",
            opacity: 0.8,
          }}
        >
          <span>ARCTIC RESEARCH STATION</span>
          <span>71.7° N, 42.6° W</span>
        </div>

        <div
          style={{
            width: "45vw",
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
            paddingBottom: "4vh",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6.5vw",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Example Deck
          </h1>
          
          <div
            style={{
              width: "8vw",
              height: "0.2vh",
              backgroundColor: "#C8DDE8",
              opacity: 0.6,
            }}
          />

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.8vw",
              fontWeight: 300,
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "38vw",
              opacity: 0.9,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "flex",
            justifyContent: "space-between",
            width: "40vw",
            opacity: 0.6,
          }}
        >
          <span>EXPEDITION LOG</span>
          <span>acme.co</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ArcticExpeditionPage2.tsx`)

```tsx
export function ArcticExpeditionPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#081423",
        display: "flex",
        flexDirection: "column",
        color: "#C8DDE8",
      }}
    >
      <img
        src="/__mockup/photos/arctic-icebergs.png"
        alt="Arctic Icebergs"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.3,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(8,20,35,0.95) 0%, rgba(8,20,35,0.85) 60%, transparent 100%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 3,
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.1vw",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            opacity: 0.8,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>ARCTIC RESEARCH STATION</span>
          <span>RESEARCH METHODOLOGY</span>
        </div>

        <div style={{ display: "flex", width: "100%", height: "60vh", alignItems: "center" }}>
          <div
            style={{
              width: "45vw",
              display: "flex",
              flexDirection: "column",
              gap: "4vh",
            }}
          >
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "4.5vw",
                fontWeight: 400,
                lineHeight: 1.1,
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              The Science of Cold
            </h2>
            
            <div
              style={{
                width: "6vw",
                height: "0.2vh",
                backgroundColor: "#C8DDE8",
                opacity: 0.6,
              }}
            />

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.6vw",
                fontWeight: 300,
                lineHeight: 1.6,
                margin: 0,
                opacity: 0.9,
              }}
            >
              Our methodology involves deep core sampling across multiple glacial sites. We measure isotopic variations to understand historical climate shifts and current acceleration patterns.
            </p>
            
            <ul
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.4vw",
                fontWeight: 300,
                lineHeight: 1.8,
                margin: 0,
                paddingLeft: "1.5vw",
                opacity: 0.8,
                display: "flex",
                flexDirection: "column",
                gap: "2vh",
              }}
            >
              <li>Deep core isotopic extraction protocols</li>
              <li>Satellite topography mapping analysis</li>
              <li>Subglacial water pressure monitoring</li>
            </ul>
          </div>
        </div>

        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "flex",
            justifyContent: "space-between",
            opacity: 0.6,
          }}
        >
          <span>EXPEDITION LOG</span>
          <span>02</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ArcticExpeditionPage3.tsx`)

```tsx
export function ArcticExpeditionPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#081423",
        color: "#C8DDE8",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.1vw",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            opacity: 0.8,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>ARCTIC RESEARCH STATION</span>
          <span>CORE FINDINGS</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6vh" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5vw",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.01em",
              textAlign: "center",
            }}
          >
            Glacial Retreat Metrics
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              marginTop: "4vh",
            }}
          >
            {[
              { label: "ANNUAL RECESSION", value: "42.5", unit: "METERS" },
              { label: "ICE THICKNESS LOSS", value: "1.2", unit: "METERS/YR" },
              { label: "ALBEDO REDUCTION", value: "8.4", unit: "PERCENT" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  width: "25vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "4vh 0",
                  borderTop: "1px solid rgba(200, 221, 232, 0.2)",
                  borderBottom: "1px solid rgba(200, 221, 232, 0.2)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "6vw",
                    fontWeight: 400,
                    lineHeight: 1,
                    marginBottom: "1vh",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.9vw",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    opacity: 0.7,
                    marginBottom: "0.5vh",
                  }}
                >
                  {stat.unit}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.2vw",
                    fontWeight: 300,
                    opacity: 0.5,
                    marginTop: "2vh",
                    letterSpacing: "0.05em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "flex",
            justifyContent: "space-between",
            opacity: 0.6,
          }}
        >
          <span>EXPEDITION LOG</span>
          <span>03</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ArcticExpeditionPage4.tsx`)

```tsx
export function ArcticExpeditionPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#081423",
      }}
    >
      <img
        src="/__mockup/photos/arctic-icebergs.png"
        alt="Arctic Icebergs"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(8,20,35,0.95) 0%, rgba(8,20,35,0.6) 100%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          color: "#C8DDE8",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.1vw",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            opacity: 0.8,
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>ARCTIC RESEARCH STATION</span>
          <span>NEXT STEPS</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "5vh",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "5.5vw",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Join the Expedition
          </h1>
          
          <div
            style={{
              width: "4vw",
              height: "0.2vh",
              backgroundColor: "#C8DDE8",
              opacity: 0.6,
            }}
          />

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.6vw",
              fontWeight: 300,
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "40vw",
              opacity: 0.9,
            }}
          >
            We are actively seeking research partners and funding for the upcoming winter observation cycle. Let's uncover the future together.
          </p>

          <div
            style={{
              marginTop: "4vh",
              padding: "2vh 4vw",
              border: "1px solid rgba(200, 221, 232, 0.4)",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.2vw",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            CONTACT@ARCTICRESEARCH.ORG
          </div>
        </div>

        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            opacity: 0.6,
          }}
        >
          <span>EXPEDITION LOG</span>
          <span>04</span>
        </div>
      </div>
    </div>
  );
}
```
