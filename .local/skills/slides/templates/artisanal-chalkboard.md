# Artisanal Chalkboard

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "ArtisanalChalkboard" template embodies a rustic, hand-crafted aesthetic reminiscent of a chalkboard design. It features a background color of dark green (#1a251d) with text and accent colors in a soft cream (#e8ecd7). The font families used are 'DM Sans' for general text and 'Playfair Display' for headings, providing a contrast between modern and classic styles. Key layout elements include a central hand-drawn effect box with dashed borders and a chalk dust effect created through box shadows, enhancing the artisanal feel. There are no background images specified in the code. Overall, the aesthetic feel can be described as "rustic elegance."

## Source Code

**Component:** `ArtisanalChalkboard`

### Slide 1 — Title (`slide-styles/ArtisanalChalkboard.tsx`)

```tsx
export function ArtisanalChalkboard() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1a251d",
        color: "#e8ecd7",
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Chalk dust effect using box shadow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "1vw",
          height: "1vh",
          borderRadius: "50%",
          boxShadow: "10vw -20vh 3vw 1vw rgba(255,255,255,0.03), -30vw 40vh 5vw 2vw rgba(255,255,255,0.02), 40vw 30vh 4vw 1.5vw rgba(255,255,255,0.03), -20vw -40vh 6vw 3vw rgba(255,255,255,0.015), 15vw 10vh 2vw 0.5vw rgba(255,255,255,0.02)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: "0.2vh dashed rgba(232, 236, 215, 0.3)",
          paddingBottom: "2vh",
        }}
      >
        <div style={{ fontSize: "1.8vw", fontWeight: 400, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.1vw" }}>
          2026
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          position: "relative",
        }}
      >
        {/* Hand-drawn looking box behind title */}
        <div
          style={{
            position: "absolute",
            width: "80vw",
            height: "40vh",
            border: "0.3vh dashed rgba(232, 236, 215, 0.4)",
            borderRadius: "1vw 2vw 0.5vw 1.5vw",
            transform: "rotate(-1deg)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "82vw",
            height: "38vh",
            border: "0.2vh solid rgba(232, 236, 215, 0.2)",
            borderRadius: "2vw 1vw 1.5vw 0.5vw",
            transform: "rotate(0.5deg)",
            zIndex: 0,
          }}
        />

        <div style={{ zIndex: 1, textAlign: "center" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "10vw",
              fontWeight: 700,
              margin: "0",
              lineHeight: 1.1,
              letterSpacing: "0.2vw",
              textShadow: "0.2vw 0.2vw 0 rgba(232, 236, 215, 0.1), -0.1vw -0.1vw 0.4vw rgba(232, 236, 215, 0.2)",
            }}
          >
            Example Deck
          </h1>
          
          <div style={{ 
            width: "15vw", 
            height: "0.4vh", 
            backgroundColor: "#e8ecd7", 
            margin: "4vh auto",
            borderRadius: "0.2vw",
            opacity: 0.8,
            transform: "rotate(-1deg)"
          }} />

          <p
            style={{
              fontSize: "2.2vw",
              fontWeight: 400,
              margin: 0,
              maxWidth: "60vw",
              lineHeight: 1.6,
              opacity: 0.85,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingTop: "2vh",
          borderTop: "0.2vh dashed rgba(232, 236, 215, 0.3)",
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 400 }}>
          Example Company, Inc.
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2vw", opacity: 0.7 }}>
          Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ArtisanalChalkboardPage2.tsx`)

```tsx
export function ArtisanalChalkboardPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1a251d",
        color: "#e8ecd7",
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "1vw",
          height: "1vh",
          borderRadius: "50%",
          boxShadow: "10vw -20vh 3vw 1vw rgba(255,255,255,0.03), -30vw 40vh 5vw 2vw rgba(255,255,255,0.02), 40vw 30vh 4vw 1.5vw rgba(255,255,255,0.03), -20vw -40vh 6vw 3vw rgba(255,255,255,0.015), 15vw 10vh 2vw 0.5vw rgba(255,255,255,0.02)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: "0.2vh dashed rgba(232, 236, 215, 0.3)",
          paddingBottom: "2vh",
        }}
      >
        <div style={{ fontSize: "1.8vw", fontWeight: 400, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.1vw" }}>
          THE VISION
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexGrow: 1,
          padding: "4vh 0",
          gap: "6vw",
          position: "relative",
        }}
      >
        <div style={{ flex: 1, position: "relative" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6vw",
              fontWeight: 700,
              margin: "0 0 3vh 0",
              lineHeight: 1.1,
              letterSpacing: "0.1vw",
              textShadow: "0.15vw 0.15vw 0 rgba(232, 236, 215, 0.1)",
            }}
          >
            Crafting the Future
          </h2>
          <p
            style={{
              fontSize: "2vw",
              lineHeight: 1.6,
              opacity: 0.85,
              margin: 0,
            }}
          >
            Our approach blends traditional techniques with modern innovation to deliver exceptional quality. We believe in taking the time to build things right.
          </p>
        </div>

        <div style={{ flex: 1, position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3vh" }}>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "80%",
              border: "0.2vh dashed rgba(232, 236, 215, 0.3)",
              borderRadius: "1vw 3vw 2vw 0.5vw",
              transform: "rotate(1deg)",
              zIndex: 0,
              top: "10%",
              left: 0,
            }}
          />
          {[
            { title: "Sourcing", text: "Selecting the finest raw materials" },
            { title: "Refining", text: "Perfecting through iteration" },
            { title: "Delivering", text: "Hand-crafted to your door" }
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "2vw", padding: "0 4vw", zIndex: 1 }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2.5vw",
                fontWeight: 700,
                opacity: 0.6,
                transform: `rotate(${(i % 2 === 0 ? -2 : 3)}deg)`
              }}>
                {i + 1}.
              </div>
              <div>
                <h3 style={{ fontSize: "1.8vw", margin: "0 0 0.5vh 0", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "1.2vw", margin: 0, opacity: 0.7 }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingTop: "2vh",
          borderTop: "0.2vh dashed rgba(232, 236, 215, 0.3)",
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 400 }}>
          Example Company, Inc.
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2vw", opacity: 0.7 }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ArtisanalChalkboardPage3.tsx`)

```tsx
export function ArtisanalChalkboardPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1a251d",
        color: "#e8ecd7",
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "1vw",
          height: "1vh",
          borderRadius: "50%",
          boxShadow: "10vw -20vh 3vw 1vw rgba(255,255,255,0.03), -30vw 40vh 5vw 2vw rgba(255,255,255,0.02), 40vw 30vh 4vw 1.5vw rgba(255,255,255,0.03), -20vw -40vh 6vw 3vw rgba(255,255,255,0.015), 15vw 10vh 2vw 0.5vw rgba(255,255,255,0.02)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: "0.2vh dashed rgba(232, 236, 215, 0.3)",
          paddingBottom: "2vh",
        }}
      >
        <div style={{ fontSize: "1.8vw", fontWeight: 400, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.1vw" }}>
          OUR IMPACT
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          padding: "4vh 0",
          position: "relative",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4.5vw",
            fontWeight: 700,
            margin: "0 0 6vh 0",
            lineHeight: 1.1,
            letterSpacing: "0.1vw",
            textShadow: "0.15vw 0.15vw 0 rgba(232, 236, 215, 0.1)",
            textAlign: "center"
          }}
        >
          Growth Trajectory
        </h2>

        <div style={{ display: "flex", alignItems: "flex-end", height: "40vh", gap: "4vw", position: "relative" }}>
          {/* Chart Axes */}
          <div style={{
            position: "absolute",
            bottom: 0,
            left: "-2vw",
            width: "50vw",
            height: "0.3vh",
            backgroundColor: "rgba(232, 236, 215, 0.6)",
            borderRadius: "0.15vw",
            transform: "rotate(0.5deg)"
          }} />
          <div style={{
            position: "absolute",
            bottom: 0,
            left: "-2vw",
            width: "0.3vh",
            height: "45vh",
            backgroundColor: "rgba(232, 236, 215, 0.6)",
            borderRadius: "0.15vw",
            transform: "rotate(-1deg)"
          }} />

          {/* Bars */}
          {[
            { label: "Q1", height: "30%", value: "24k" },
            { label: "Q2", height: "45%", value: "38k" },
            { label: "Q3", height: "65%", value: "52k" },
            { label: "Q4", height: "90%", value: "89k" }
          ].map((bar, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh", zIndex: 1 }}>
              <div style={{ fontSize: "1.4vw", fontFamily: "'Playfair Display', serif", fontStyle: "italic", opacity: 0.9 }}>
                {bar.value}
              </div>
              <div
                style={{
                  width: "6vw",
                  height: bar.height,
                  border: "0.3vh solid rgba(232, 236, 215, 0.8)",
                  borderBottom: "none",
                  borderRadius: "0.5vw 0.5vw 0 0",
                  backgroundColor: "rgba(232, 236, 215, 0.1)",
                  position: "relative"
                }}
              >
                {/* Diagonal hatching pattern */}
                <div style={{
                  position: "absolute",
                  top: 0, left: 0, right: 0, bottom: 0,
                  background: "repeating-linear-gradient(45deg, transparent, transparent 0.5vw, rgba(232, 236, 215, 0.2) 0.5vw, rgba(232, 236, 215, 0.2) 0.6vw)",
                  borderRadius: "0.5vw 0.5vw 0 0",
                }} />
              </div>
              <div style={{ fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.1vw", marginTop: "1vh" }}>
                {bar.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingTop: "2vh",
          borderTop: "0.2vh dashed rgba(232, 236, 215, 0.3)",
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 400 }}>
          Example Company, Inc.
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2vw", opacity: 0.7 }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ArtisanalChalkboardPage4.tsx`)

```tsx
export function ArtisanalChalkboardPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1a251d",
        color: "#e8ecd7",
        fontFamily: "'DM Sans', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "1vw",
          height: "1vh",
          borderRadius: "50%",
          boxShadow: "10vw -20vh 3vw 1vw rgba(255,255,255,0.03), -30vw 40vh 5vw 2vw rgba(255,255,255,0.02), 40vw 30vh 4vw 1.5vw rgba(255,255,255,0.03), -20vw -40vh 6vw 3vw rgba(255,255,255,0.015), 15vw 10vh 2vw 0.5vw rgba(255,255,255,0.02)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: "0.2vh dashed rgba(232, 236, 215, 0.3)",
          paddingBottom: "2vh",
        }}
      >
        <div style={{ fontSize: "1.8vw", fontWeight: 400, fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.1vw" }}>
          GET IN TOUCH
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "50vw",
            height: "50vh",
            border: "0.2vh solid rgba(232, 236, 215, 0.2)",
            borderRadius: "50%",
            transform: "rotate(-5deg)",
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "52vw",
            height: "48vh",
            border: "0.2vh dashed rgba(232, 236, 215, 0.4)",
            borderRadius: "50%",
            transform: "rotate(10deg)",
            zIndex: 0,
          }}
        />

        <div style={{ zIndex: 1, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "3vh" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "7vw",
              fontWeight: 700,
              margin: "0",
              lineHeight: 1.1,
              letterSpacing: "0.1vw",
              textShadow: "0.2vw 0.2vw 0 rgba(232, 236, 215, 0.1)",
            }}
          >
            Join the craft.
          </h2>
          
          <div style={{ 
            width: "8vw", 
            height: "0.4vh", 
            backgroundColor: "#e8ecd7", 
            borderRadius: "0.2vw",
            opacity: 0.8,
            transform: "rotate(2deg)"
          }} />

          <p
            style={{
              fontSize: "2.5vw",
              fontWeight: 400,
              margin: "2vh 0",
              fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            hello@acme.co
          </p>
          
          <div style={{
            padding: "1.5vh 3vw",
            border: "0.3vh solid #e8ecd7",
            borderRadius: "3vw",
            fontSize: "1.2vw",
            fontWeight: 500,
            letterSpacing: "0.1vw",
            textTransform: "uppercase",
            cursor: "pointer",
            transform: "rotate(-1deg)"
          }}>
            Visit our workshop
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingTop: "2vh",
          borderTop: "0.2vh dashed rgba(232, 236, 215, 0.3)",
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 400 }}>
          Example Company, Inc.
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2vw", opacity: 0.7 }}>
          04
        </div>
      </div>
    </div>
  );
}
```
