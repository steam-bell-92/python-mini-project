# Skater Culture

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "SkaterCulture" template features a gritty, urban aesthetic that resonates with skateboarding culture. The background color is a solid #0A0805, complemented by a linear gradient that transitions from transparent to rgba(10,8,5,0.85). Text and accent colors include #C4865A for highlights and #F5EDE0 for primary text, with the latter appearing in a 'Space Grotesk' font for headings and a 'DM Mono' font for supporting text. Key layout elements include a full-screen background image of a skater at sunset (URL: /__mockup/photos/skater-sunset.png), layered with a gradient overlay, and a structured bottom section that organizes text and interactive elements in a flexible column layout. The overall aesthetic feel can be described as "urban, edgy, dynamic."

## Source Code

**Component:** `SkaterCulture`

### Slide 1 — Title (`slide-styles/SkaterCulture.tsx`)

```tsx
export function SkaterCulture() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Space Grotesk', sans-serif",
        backgroundColor: "#0A0805",
      }}
    >
      <img
        src="/__mockup/photos/skater-sunset.png"
        alt="Skater at sunset"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to bottom, transparent 45%, rgba(10,8,5,0.85) 100%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "50vh",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%" }}>
          <div style={{ maxWidth: "60vw" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "2vh" }}>
              <div
                style={{
                  fontSize: "0.9vw",
                  color: "#C4865A",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                }}
              >
                MADE FOR THE CULTURE
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.9vw",
                  color: "#F5EDE0",
                  opacity: 0.6,
                }}
              >
                ISSUE 26
              </div>
            </div>

            <h1
              style={{
                fontSize: "7vw",
                fontWeight: 700,
                color: "#F5EDE0",
                margin: 0,
                lineHeight: 0.9,
                textTransform: "uppercase",
                letterSpacing: "-0.02em",
                marginBottom: "3vh",
              }}
            >
              EXAMPLE DECK
            </h1>

            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.2vw",
                color: "#F5EDE0",
                lineHeight: 1.5,
                margin: 0,
                maxWidth: "40vw",
                opacity: 0.8,
              }}
            >
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8vh" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5vw",
                color: "#C4865A",
                cursor: "pointer",
              }}
            >
              <span
                style={{
                  fontSize: "1.2vw",
                  fontWeight: 700,
                  textDecoration: "underline",
                  textUnderlineOffset: "0.4vw",
                }}
              >
                EXPLORE
              </span>
              <span style={{ fontSize: "1.5vw" }}>↗</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1vh" }}>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8vw",
                  color: "#F5EDE0",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  opacity: 0.5,
                }}
              >
                NO RULES
              </div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1vw",
                  fontWeight: 700,
                  color: "#C4865A",
                }}
              >
                acme.co
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/SkaterCulturePage2.tsx`)

```tsx
export function SkaterCulturePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Space Grotesk', sans-serif",
        backgroundColor: "#0A0805",
        color: "#F5EDE0",
        padding: "6vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <div
            style={{
              fontSize: "0.9vw",
              color: "#C4865A",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
            }}
          >
            OUR MANIFESTO
          </div>
        </div>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            color: "#F5EDE0",
            opacity: 0.6,
          }}
        >
          02
        </div>
      </div>

      <div style={{ display: "flex", gap: "8vw", flex: 1 }}>
        <div style={{ flex: "1" }}>
          <h2
            style={{
              fontSize: "5vw",
              fontWeight: 700,
              margin: "0 0 4vh 0",
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            NOT JUST<br />A HOBBY
          </h2>
          <div
            style={{
              width: "4vw",
              height: "0.4vw",
              backgroundColor: "#C4865A",
              marginBottom: "4vh",
            }}
          />
        </div>
        
        <div style={{ flex: "1", paddingTop: "1vw" }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.4vw",
              lineHeight: 1.6,
              margin: "0 0 4vh 0",
              opacity: 0.8,
            }}
          >
            Skateboarding is more than a sport; it is a creative outlet and a global community. We are building the infrastructure to support the next generation of creators, rebels, and visionaries.
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.4vw",
              lineHeight: 1.6,
              margin: 0,
              opacity: 0.8,
            }}
          >
            Our mission is to embrace the raw, unfiltered energy of the streets and channel it into products that resonate with authenticity.
          </p>
          
          <div style={{ marginTop: "6vh", display: "flex", flexDirection: "column", gap: "2vh" }}>
            {["AUTHENTICITY", "COMMUNITY", "REBELLION"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                <div style={{ color: "#C4865A", fontSize: "1.2vw" }}>→</div>
                <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.05em" }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          NO RULES
        </div>
        <div
          style={{
            fontSize: "1vw",
            fontWeight: 700,
            color: "#C4865A",
          }}
        >
          acme.co
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/SkaterCulturePage3.tsx`)

```tsx
export function SkaterCulturePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Space Grotesk', sans-serif",
        backgroundColor: "#0A0805",
        color: "#F5EDE0",
        padding: "6vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6vh" }}>
        <div
          style={{
            fontSize: "0.9vw",
            color: "#C4865A",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 700,
          }}
        >
          THE LANDSCAPE
        </div>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            color: "#F5EDE0",
            opacity: 0.6,
          }}
        >
          03
        </div>
      </div>

      <h2
        style={{
          fontSize: "4.5vw",
          fontWeight: 700,
          margin: "0 0 8vh 0",
          lineHeight: 0.9,
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
        }}
      >
        GLOBAL IMPACT
      </h2>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ fontSize: "6vw", fontWeight: 700, color: "#C4865A", lineHeight: 1, marginBottom: "1vh" }}>$2.4B</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.1em" }}>Market Size</div>
          <div style={{ width: "100%", height: "20vh", backgroundColor: "#1A1510", marginTop: "2vh", position: "relative" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "60%", backgroundColor: "#C4865A" }} />
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ fontSize: "6vw", fontWeight: 700, color: "#F5EDE0", lineHeight: 1, marginBottom: "1vh" }}>85M+</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.1em" }}>Active Skaters</div>
          <div style={{ width: "100%", height: "20vh", backgroundColor: "#1A1510", marginTop: "2vh", position: "relative" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "85%", backgroundColor: "#F5EDE0", opacity: 0.9 }} />
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div style={{ fontSize: "6vw", fontWeight: 700, color: "#C4865A", lineHeight: 1, marginBottom: "1vh" }}>120%</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.8, textTransform: "uppercase", letterSpacing: "0.1em" }}>YOY Growth</div>
          <div style={{ width: "100%", height: "20vh", backgroundColor: "#1A1510", marginTop: "2vh", position: "relative" }}>
            <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "40%", backgroundColor: "#C4865A", opacity: 0.6 }} />
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "8vh" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          NO RULES
        </div>
        <div
          style={{
            fontSize: "1vw",
            fontWeight: 700,
            color: "#C4865A",
          }}
        >
          acme.co
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/SkaterCulturePage4.tsx`)

```tsx
export function SkaterCulturePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Space Grotesk', sans-serif",
        backgroundColor: "#0A0805",
      }}
    >
      <img
        src="/__mockup/photos/skater-sunset.png"
        alt="Skater at sunset"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.4,
          filter: "grayscale(50%) contrast(1.2)",
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to right, rgba(10,8,5,0.95) 0%, rgba(10,8,5,0.4) 100%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          padding: "6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
          <div
            style={{
              fontSize: "0.9vw",
              color: "#C4865A",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
            }}
          >
            READY TO RIDE?
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.9vw",
              color: "#F5EDE0",
              opacity: 0.6,
            }}
          >
            04
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "60vw" }}>
          <h1
            style={{
              fontSize: "8vw",
              fontWeight: 700,
              color: "#F5EDE0",
              margin: "0 0 2vh 0",
              lineHeight: 0.9,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            JOIN THE<br />MOVEMENT
          </h1>

          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.4vw",
              color: "#F5EDE0",
              lineHeight: 1.5,
              margin: "0 0 6vh 0",
              opacity: 0.8,
              maxWidth: "40vw",
            }}
          >
            Don't just watch from the sidelines. Be part of the culture that is shaping tomorrow.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              color: "#0A0805",
              backgroundColor: "#C4865A",
              padding: "1.5vw 3vw",
              width: "fit-content",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontSize: "1.2vw",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              GET STARTED
            </span>
            <span style={{ fontSize: "1.5vw" }}>→</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.8vw",
              color: "#F5EDE0",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              opacity: 0.5,
            }}
          >
            NO RULES
          </div>
          <div
            style={{
              fontSize: "1vw",
              fontWeight: 700,
              color: "#C4865A",
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
