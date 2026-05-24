# Riso Zine

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The RisoZine template features a playful and modern aesthetic, characterized by its use of vibrant colors and organic shapes. The background color is a soft beige (#f4f0e6), complemented by a repeating radial gradient texture in black with an opacity of 0.15. Text and accent colors include a deep slate blue (#1a2a3a), teal (#008080), and coral (#ff6b5b). The font families used are 'Space Grotesk' and 'DM Sans' for body text, while 'DM Mono' is employed for headers and footers, providing a contemporary and slightly retro feel. Key layout elements include large, overlapping circular blobs and a prominent arch graphic, all positioned dynamically across the slide. The overall aesthetic feel can be described as vibrant, modern, and artistic.

## Source Code

**Component:** `RisoZine`

### Slide 1 — Title (`slide-styles/RisoZine.tsx`)

```tsx
export function RisoZine() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f4f0e6",
        fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
        position: "relative",
        color: "#1a2a3a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Texture Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          opacity: 0.15,
          background:
            "repeating-radial-gradient(#000 0, #000 0.1vw, transparent 0.1vw, transparent 0.4vw)",
          backgroundSize: "0.8vw 0.8vw",
          zIndex: 10,
          mixBlendMode: "multiply",
        }}
      />

      {/* Misregistered Background Shapes */}
      {/* Teal Blob */}
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "5vw",
          width: "40vw",
          height: "40vw",
          backgroundColor: "#008080",
          borderRadius: "50%",
          mixBlendMode: "multiply",
          opacity: 0.8,
          zIndex: 1,
        }}
      />
      {/* Coral Blob Offset */}
      <div
        style={{
          position: "absolute",
          top: "12vh",
          left: "8vw",
          width: "38vw",
          height: "38vw",
          backgroundColor: "#ff6b5b",
          borderRadius: "50%",
          mixBlendMode: "multiply",
          opacity: 0.8,
          zIndex: 1,
        }}
      />

      {/* Big Arch Graphic */}
      <div
        style={{
          position: "absolute",
          bottom: "-10vh",
          right: "10vw",
          width: "35vw",
          height: "60vh",
          backgroundColor: "#ff6b5b",
          borderTopLeftRadius: "20vw",
          borderTopRightRadius: "20vw",
          mixBlendMode: "multiply",
          opacity: 0.9,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10vh",
          right: "12vw",
          width: "35vw",
          height: "60vh",
          border: "0.4vw solid #008080",
          borderTopLeftRadius: "20vw",
          borderTopRightRadius: "20vw",
          mixBlendMode: "multiply",
          zIndex: 1,
        }}
      />

      {/* Grid Pattern Element */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          right: "15vw",
          width: "15vw",
          height: "15vw",
          background:
            "linear-gradient(90deg, #1a2a3a 0.2vw, transparent 0.2vw), linear-gradient(180deg, #1a2a3a 0.2vw, transparent 0.2vw)",
          backgroundSize: "2vw 2vw",
          opacity: 0.3,
          zIndex: 1,
          transform: "rotate(15deg)",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            textTransform: "uppercase",
            letterSpacing: "0.1vw",
            fontWeight: 700,
            fontSize: "1.2vw",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "2vw",
                height: "2vw",
                backgroundColor: "#1a2a3a",
                display: "inline-block",
              }}
            />
            acme.co
          </div>
          <div>Vol. 1 — 2026</div>
        </div>

        {/* Title Area */}
        <div style={{ maxWidth: "60vw", marginTop: "10vh" }}>
          {/* Overprinting Text Effect */}
          <div style={{ position: "relative" }}>
            <h1
              style={{
                fontSize: "10vw",
                fontWeight: 900,
                lineHeight: 0.9,
                margin: 0,
                color: "#1a2a3a",
                textTransform: "uppercase",
                letterSpacing: "-0.2vw",
                mixBlendMode: "multiply",
              }}
            >
              Example
            </h1>
            <h1
              style={{
                fontSize: "10vw",
                fontWeight: 900,
                lineHeight: 0.9,
                margin: 0,
                color: "#ff6b5b",
                position: "absolute",
                top: "0.4vw",
                left: "-0.4vw",
                textTransform: "uppercase",
                letterSpacing: "-0.2vw",
                mixBlendMode: "multiply",
                zIndex: -1,
              }}
            >
              Example
            </h1>
          </div>
          
          <div style={{ position: "relative" }}>
            <h1
              style={{
                fontSize: "10vw",
                fontWeight: 900,
                lineHeight: 0.9,
                margin: 0,
                color: "#1a2a3a",
                textTransform: "uppercase",
                letterSpacing: "-0.2vw",
                mixBlendMode: "multiply",
              }}
            >
              Deck
            </h1>
             <h1
              style={{
                fontSize: "10vw",
                fontWeight: 900,
                lineHeight: 0.9,
                margin: 0,
                color: "#008080",
                position: "absolute",
                top: "0.5vw",
                left: "0.5vw",
                textTransform: "uppercase",
                letterSpacing: "-0.2vw",
                mixBlendMode: "multiply",
                zIndex: -1,
              }}
            >
              Deck
            </h1>
          </div>

          <div
            style={{
              marginTop: "4vh",
              paddingLeft: "2vw",
              borderLeft: "0.6vw solid #008080",
            }}
          >
            <p
              style={{
                fontSize: "2.2vw",
                fontWeight: 600,
                margin: 0,
                maxWidth: "40vw",
                lineHeight: 1.3,
                color: "#1a2a3a",
              }}
            >
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
            fontWeight: 700,
            fontSize: "1.2vw",
            fontFamily: "'DM Mono', monospace",
            textTransform: "uppercase",
          }}
        >
          <div>Example Company, Inc.</div>
          <div
            style={{
              backgroundColor: "#1a2a3a",
              color: "#f4f0e6",
              padding: "1vh 1.5vw",
              display: "inline-block",
            }}
          >
            Confidential
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/RisoZinePage2.tsx`)

```tsx
export function RisoZinePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f4f0e6",
        fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
        position: "relative",
        color: "#1a2a3a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Texture Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          opacity: 0.15,
          background:
            "repeating-radial-gradient(#000 0, #000 0.1vw, transparent 0.1vw, transparent 0.4vw)",
          backgroundSize: "0.8vw 0.8vw",
          zIndex: 10,
          mixBlendMode: "multiply",
        }}
      />

      {/* Misregistered Background Shapes */}
      {/* Teal Blob */}
      <div
        style={{
          position: "absolute",
          top: "-15vh",
          left: "-10vw",
          width: "50vw",
          height: "50vw",
          backgroundColor: "#008080",
          borderRadius: "50%",
          mixBlendMode: "multiply",
          opacity: 0.8,
          zIndex: 1,
        }}
      />
      {/* Coral Blob Offset */}
      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          right: "-5vw",
          width: "40vw",
          height: "40vw",
          backgroundColor: "#ff6b5b",
          borderRadius: "50%",
          mixBlendMode: "multiply",
          opacity: 0.8,
          zIndex: 1,
        }}
      />
      
      {/* Arch Outline Offset */}
      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          right: "-3vw",
          width: "38vw",
          height: "38vw",
          border: "0.4vw solid #1a2a3a",
          borderRadius: "50%",
          mixBlendMode: "multiply",
          opacity: 0.9,
          zIndex: 1,
        }}
      />

      {/* Grid Pattern Element */}
      <div
        style={{
          position: "absolute",
          bottom: "15vh",
          left: "5vw",
          width: "20vw",
          height: "20vw",
          background:
            "linear-gradient(90deg, #1a2a3a 0.2vw, transparent 0.2vw), linear-gradient(180deg, #1a2a3a 0.2vw, transparent 0.2vw)",
          backgroundSize: "2vw 2vw",
          opacity: 0.2,
          zIndex: 1,
          transform: "rotate(-10deg)",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            textTransform: "uppercase",
            letterSpacing: "0.1vw",
            fontWeight: 700,
            fontSize: "1.2vw",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "2vw",
                height: "2vw",
                backgroundColor: "#1a2a3a",
                display: "inline-block",
              }}
            />
            acme.co
          </div>
          <div>Vol. 1 — 2026</div>
        </div>

        {/* Content Area */}
        <div style={{ display: "flex", gap: "8vw", marginTop: "8vh", flex: 1 }}>
          {/* Left Column: Heading */}
          <div style={{ flex: "1" }}>
            {/* Overprinting Text Effect */}
            <div style={{ position: "relative", marginBottom: "4vh" }}>
              <h2
                style={{
                  fontSize: "6vw",
                  fontWeight: 900,
                  lineHeight: 0.9,
                  margin: 0,
                  color: "#1a2a3a",
                  textTransform: "uppercase",
                  letterSpacing: "-0.1vw",
                  mixBlendMode: "multiply",
                }}
              >
                Core
              </h2>
              <h2
                style={{
                  fontSize: "6vw",
                  fontWeight: 900,
                  lineHeight: 0.9,
                  margin: 0,
                  color: "#ff6b5b",
                  position: "absolute",
                  top: "0.3vw",
                  left: "-0.3vw",
                  textTransform: "uppercase",
                  letterSpacing: "-0.1vw",
                  mixBlendMode: "multiply",
                  zIndex: -1,
                }}
              >
                Core
              </h2>
            </div>
            
            <div style={{ position: "relative" }}>
              <h2
                style={{
                  fontSize: "6vw",
                  fontWeight: 900,
                  lineHeight: 0.9,
                  margin: 0,
                  color: "#1a2a3a",
                  textTransform: "uppercase",
                  letterSpacing: "-0.1vw",
                  mixBlendMode: "multiply",
                }}
              >
                Concept
              </h2>
               <h2
                style={{
                  fontSize: "6vw",
                  fontWeight: 900,
                  lineHeight: 0.9,
                  margin: 0,
                  color: "#008080",
                  position: "absolute",
                  top: "0.4vw",
                  left: "0.4vw",
                  textTransform: "uppercase",
                  letterSpacing: "-0.1vw",
                  mixBlendMode: "multiply",
                  zIndex: -1,
                }}
              >
                Concept
              </h2>
            </div>
            
            <div
              style={{
                marginTop: "6vh",
                paddingLeft: "1.5vw",
                borderLeft: "0.4vw solid #ff6b5b",
              }}
            >
              <p
                style={{
                  fontSize: "1.8vw",
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: 1.4,
                  color: "#1a2a3a",
                }}
              >
                The risograph technique relies on spot colors layered over each other, creating a unique, tactile feel.
              </p>
            </div>
          </div>

          {/* Right Column: Text */}
          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4vh", paddingTop: "2vh" }}>
            <p
              style={{
                fontSize: "1.4vw",
                lineHeight: 1.5,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Our approach brings the charm of printmaking into the digital space. We embrace the imperfections: misregistration, overprinting, and high-contrast color palettes.
            </p>
            <p
              style={{
                fontSize: "1.4vw",
                lineHeight: 1.5,
                margin: 0,
                fontWeight: 500,
              }}
            >
              By utilizing a stark background paired with punchy, saturated spot colors like bright teal and vibrant coral, the resulting composition feels lively and unexpected.
            </p>
            
            <div style={{ marginTop: "4vh" }}>
              <ul style={{ 
                listStyle: "none", 
                padding: 0, 
                margin: 0, 
                display: "flex", 
                flexDirection: "column", 
                gap: "2vh",
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.2vw",
                textTransform: "uppercase",
                fontWeight: 700
              }}>
                <li style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                  <span style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#ff6b5b", display: "inline-block", borderRadius: "50%" }}></span>
                  Tactile Textures
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                  <span style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#008080", display: "inline-block", borderRadius: "50%" }}></span>
                  Spot Colors
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                  <span style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#1a2a3a", display: "inline-block", borderRadius: "50%" }}></span>
                  Misregistration
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
            fontWeight: 700,
            fontSize: "1.2vw",
            fontFamily: "'DM Mono', monospace",
            textTransform: "uppercase",
          }}
        >
          <div>Example Company, Inc.</div>
          <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
            <div>02 // Content</div>
            <div
              style={{
                backgroundColor: "#1a2a3a",
                color: "#f4f0e6",
                padding: "1vh 1.5vw",
                display: "inline-block",
              }}
            >
              Confidential
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/RisoZinePage3.tsx`)

```tsx
export function RisoZinePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#f4f0e6",
        fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
        position: "relative",
        color: "#1a2a3a",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Texture Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          opacity: 0.15,
          background:
            "repeating-radial-gradient(#000 0, #000 0.1vw, transparent 0.1vw, transparent 0.4vw)",
          backgroundSize: "0.8vw 0.8vw",
          zIndex: 10,
          mixBlendMode: "multiply",
        }}
      />

      {/* Misregistered Background Shapes */}
      {/* Graphic elements for data viz */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          right: "-10vw",
          width: "45vw",
          height: "45vw",
          border: "0.5vw solid #008080",
          borderRadius: "50%",
          mixBlendMode: "multiply",
          opacity: 0.6,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "12vh",
          right: "-8vw",
          width: "45vw",
          height: "45vw",
          border: "0.5vw solid #ff6b5b",
          borderRadius: "50%",
          mixBlendMode: "multiply",
          opacity: 0.6,
          zIndex: 1,
        }}
      />

      {/* Grid Pattern Element */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "40vw",
          width: "30vw",
          height: "50vh",
          background:
            "linear-gradient(90deg, #1a2a3a 0.2vw, transparent 0.2vw), linear-gradient(180deg, #1a2a3a 0.2vw, transparent 0.2vw)",
          backgroundSize: "4vw 4vh",
          opacity: 0.15,
          zIndex: 1,
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            textTransform: "uppercase",
            letterSpacing: "0.1vw",
            fontWeight: 700,
            fontSize: "1.2vw",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "2vw",
                height: "2vw",
                backgroundColor: "#1a2a3a",
                display: "inline-block",
              }}
            />
            acme.co
          </div>
          <div>Vol. 1 — 2026</div>
        </div>

        {/* Content Area */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4vh", marginTop: "4vh", flex: 1 }}>
          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontSize: "5vw",
                fontWeight: 900,
                lineHeight: 0.9,
                margin: 0,
                color: "#1a2a3a",
                textTransform: "uppercase",
                letterSpacing: "-0.1vw",
                mixBlendMode: "multiply",
              }}
            >
              Metrics
            </h2>
            <h2
              style={{
                fontSize: "5vw",
                fontWeight: 900,
                lineHeight: 0.9,
                margin: 0,
                color: "#008080",
                position: "absolute",
                top: "0.3vw",
                left: "0.3vw",
                textTransform: "uppercase",
                letterSpacing: "-0.1vw",
                mixBlendMode: "multiply",
                zIndex: -1,
              }}
            >
              Metrics
            </h2>
          </div>

          {/* Pseudo Chart / Diagram */}
          <div style={{ display: "flex", height: "45vh", alignItems: "flex-end", gap: "2vw", position: "relative", zIndex: 5, paddingBottom: "2vh", borderBottom: "0.4vw solid #1a2a3a" }}>
            
            {/* Bar 1 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "#1a2a3a" }}>24%</div>
              <div style={{ width: "100%", height: "15vh", position: "relative" }}>
                <div style={{ position: "absolute", bottom: 0, left: "10%", width: "80%", height: "100%", backgroundColor: "#ff6b5b", mixBlendMode: "multiply" }} />
                <div style={{ position: "absolute", bottom: "-0.4vw", left: "12%", width: "80%", height: "100%", border: "0.3vw solid #1a2a3a", mixBlendMode: "multiply" }} />
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase" }}>Q1</div>
            </div>

            {/* Bar 2 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "#1a2a3a" }}>48%</div>
              <div style={{ width: "100%", height: "25vh", position: "relative" }}>
                <div style={{ position: "absolute", bottom: 0, left: "10%", width: "80%", height: "100%", backgroundColor: "#008080", mixBlendMode: "multiply" }} />
                <div style={{ position: "absolute", bottom: "0.4vw", left: "8%", width: "80%", height: "100%", border: "0.3vw solid #1a2a3a", mixBlendMode: "multiply" }} />
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase" }}>Q2</div>
            </div>

            {/* Bar 3 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "#1a2a3a" }}>76%</div>
              <div style={{ width: "100%", height: "35vh", position: "relative" }}>
                <div style={{ position: "absolute", bottom: 0, left: "10%", width: "80%", height: "100%", backgroundColor: "#1a2a3a", mixBlendMode: "multiply" }} />
                <div style={{ position: "absolute", bottom: "-0.3vw", left: "13%", width: "80%", height: "100%", border: "0.3vw solid #ff6b5b", mixBlendMode: "multiply" }} />
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase" }}>Q3</div>
            </div>

            {/* Bar 4 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontSize: "2.5vw", fontWeight: 900, color: "#1a2a3a" }}>92%</div>
              <div style={{ width: "100%", height: "42vh", position: "relative" }}>
                <div style={{ position: "absolute", bottom: 0, left: "10%", width: "80%", height: "100%", backgroundColor: "#008080", mixBlendMode: "multiply" }} />
                <div style={{ position: "absolute", bottom: "-0.5vw", left: "5%", width: "80%", height: "100%", backgroundColor: "#ff6b5b", mixBlendMode: "multiply", opacity: 0.8 }} />
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase" }}>Q4</div>
            </div>

          </div>

          <div style={{ width: "60vw" }}>
             <p style={{ fontSize: "1.4vw", lineHeight: 1.5, fontWeight: 500, margin: 0 }}>
               By overlaying data directly on our rough grid structures, we achieve a dynamic sense of motion and growth. Notice how the registration offsets add emphasis.
             </p>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
            fontWeight: 700,
            fontSize: "1.2vw",
            fontFamily: "'DM Mono', monospace",
            textTransform: "uppercase",
          }}
        >
          <div>Example Company, Inc.</div>
          <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
            <div>03 // Data</div>
            <div
              style={{
                backgroundColor: "#1a2a3a",
                color: "#f4f0e6",
                padding: "1vh 1.5vw",
                display: "inline-block",
              }}
            >
              Confidential
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/RisoZinePage4.tsx`)

```tsx
export function RisoZinePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1a2a3a",
        fontFamily: "'Space Grotesk', 'DM Sans', sans-serif",
        position: "relative",
        color: "#f4f0e6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Texture Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: "none",
          opacity: 0.15,
          background:
            "repeating-radial-gradient(#fff 0, #fff 0.1vw, transparent 0.1vw, transparent 0.4vw)",
          backgroundSize: "0.8vw 0.8vw",
          zIndex: 10,
          mixBlendMode: "overlay",
        }}
      />

      {/* Misregistered Background Shapes */}
      {/* Huge Graphic Background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw",
          height: "90vh",
          backgroundColor: "#ff6b5b",
          borderBottomLeftRadius: "50vw",
          borderTopRightRadius: "50vw",
          mixBlendMode: "multiply",
          opacity: 0.9,
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "48%",
          left: "52%",
          transform: "translate(-50%, -50%)",
          width: "90vw",
          height: "90vh",
          backgroundColor: "#008080",
          borderBottomLeftRadius: "50vw",
          borderTopRightRadius: "50vw",
          mixBlendMode: "multiply",
          opacity: 0.8,
          zIndex: 1,
        }}
      />

      {/* Grid Pattern Element */}
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "10vw",
          width: "30vw",
          height: "30vw",
          background:
            "linear-gradient(90deg, #f4f0e6 0.2vw, transparent 0.2vw), linear-gradient(180deg, #f4f0e6 0.2vw, transparent 0.2vw)",
          backgroundSize: "2vw 2vw",
          opacity: 0.1,
          zIndex: 1,
          transform: "rotate(45deg)",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            textTransform: "uppercase",
            letterSpacing: "0.1vw",
            fontWeight: 700,
            fontSize: "1.2vw",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "2vw",
                height: "2vw",
                backgroundColor: "#f4f0e6",
                display: "inline-block",
              }}
            />
            acme.co
          </div>
          <div>Vol. 1 — 2026</div>
        </div>

        {/* Content Area */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginTop: "10vh", flex: 1 }}>
          <div style={{ position: "relative", marginBottom: "4vh" }}>
            <h1
              style={{
                fontSize: "12vw",
                fontWeight: 900,
                lineHeight: 0.9,
                margin: 0,
                color: "#f4f0e6",
                textTransform: "uppercase",
                letterSpacing: "-0.3vw",
              }}
            >
              Let's Talk
            </h1>
            <h1
              style={{
                fontSize: "12vw",
                fontWeight: 900,
                lineHeight: 0.9,
                margin: 0,
                color: "#1a2a3a",
                position: "absolute",
                top: "0.6vw",
                left: "0.6vw",
                textTransform: "uppercase",
                letterSpacing: "-0.3vw",
                mixBlendMode: "multiply",
                zIndex: -1,
              }}
            >
              Let's Talk
            </h1>
          </div>

          <p
            style={{
              fontSize: "2.4vw",
              fontWeight: 600,
              maxWidth: "50vw",
              margin: "0 0 6vh 0",
              lineHeight: 1.3,
            }}
          >
            Ready to bring some tactical, imperfect beauty to your next big project?
          </p>

          <div
            style={{
              display: "inline-block",
              padding: "2vh 4vw",
              backgroundColor: "#f4f0e6",
              color: "#1a2a3a",
              fontSize: "1.8vw",
              fontWeight: 800,
              textTransform: "uppercase",
              fontFamily: "'DM Mono', monospace",
              border: "0.4vw solid #1a2a3a",
              boxShadow: "0.8vw 0.8vw 0 #ff6b5b",
              cursor: "pointer",
            }}
          >
            hello@acme.co
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
            fontWeight: 700,
            fontSize: "1.2vw",
            fontFamily: "'DM Mono', monospace",
            textTransform: "uppercase",
          }}
        >
          <div>Example Company, Inc.</div>
          <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
            <div>04 // Contact</div>
            <div
              style={{
                backgroundColor: "#f4f0e6",
                color: "#1a2a3a",
                padding: "1vh 1.5vw",
                display: "inline-block",
              }}
            >
              Confidential
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
