# Noir Fragrance

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "NoirFragrance" template embodies a luxurious and elegant aesthetic, characterized by a dark and sophisticated style. The background color is solid black (#000000), complemented by a radial gradient overlay that transitions from transparent to rgba(0,0,0,0.4). Text and accent colors include a soft beige (#D4C4A0) for primary text and a muted gray (#A0A0A0) for secondary text. The font families used are 'Inter' for body text and 'Playfair Display' for headings, with 'Inter' providing a modern sans-serif look and 'Playfair Display' adding a classic serif touch. Key layout elements include a full-screen background image of a perfume crystal, positioned absolutely, and various text elements arranged in a structured manner on the top left and bottom corners. The overall aesthetic feel is "luxurious elegance."

## Source Code

**Component:** `NoirFragrance`

### Slide 1 — Title (`slide-styles/NoirFragrance.tsx`)

```tsx
export function NoirFragrance() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000000",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/perfume-crystal.png"
        alt="Noir Fragrance"
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

      {/* Vignette Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 100%)",
          zIndex: 2,
        }}
      />

      {/* Top Left Content */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          maxWidth: "40vw",
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "0.8vw",
            color: "#D4C4A0",
            letterSpacing: "0.5em",
            marginBottom: "3vh",
          }}
        >
          N O I R
        </div>

        <div
          style={{
            width: "8vw",
            height: "1px",
            backgroundColor: "#D4C4A0",
            marginBottom: "4vh",
            opacity: 0.6,
          }}
        />

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "4.5vw",
            color: "#D4C4A0",
            margin: 0,
            marginBottom: "2vh",
            lineHeight: 1.1,
          }}
        >
          Example Deck
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            fontSize: "1vw",
            color: "#A0A0A0",
            margin: 0,
            lineHeight: 1.6,
            maxWidth: "30vw",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      {/* Bottom Left: Brand */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          zIndex: 3,
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.7vw",
          color: "#A0A0A0",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        acme.co
      </div>

      {/* Bottom Right: Label */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "8vw",
          zIndex: 3,
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "1vw",
          color: "#D4C4A0",
          opacity: 0.8,
        }}
      >
        Eau de Parfum
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/NoirFragrancePage2.tsx`)

```tsx
export function NoirFragrancePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000000",
      }}
    >
      {/* Background with subtle vignette/grain or pure black. Let's stick to the dark luxe look with pure black background for body to make text legible */}
      
      {/* Top Border line */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          right: "8vw",
          height: "1px",
          backgroundColor: "#D4C4A0",
          opacity: 0.3,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "12vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "0 0 30vw" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "0.8vw",
              color: "#D4C4A0",
              letterSpacing: "0.5em",
              marginBottom: "2vh",
              textTransform: "uppercase",
            }}
          >
            T h e  E s s e n c e
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "3vw",
              color: "#D4C4A0",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Curated elegance for the modern soul
          </h2>
        </div>

        <div style={{ flex: "0 0 45vw", display: "flex", flexDirection: "column", gap: "4vh", marginTop: "1vh" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "1.2vw",
              color: "#A0A0A0",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            Our approach focuses on the distillation of complex elements into pure, recognizable forms. 
            We strip away the unnecessary to reveal the core identity of every project.
          </p>
          <div style={{ display: "flex", gap: "4vw" }}>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "1.5vw",
                  color: "#D4C4A0",
                  marginBottom: "1.5vh",
                }}
              >
                Purity
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9vw",
                  color: "#A0A0A0",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Embracing minimalism to amplify the primary message and aesthetics.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "1.5vw",
                  color: "#D4C4A0",
                  marginBottom: "1.5vh",
                }}
              >
                Contrast
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.9vw",
                  color: "#A0A0A0",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Utilizing shadow and light to define form and evoke deep emotion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.7vw",
          color: "#A0A0A0",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        acme.co
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "8vw",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.8vw",
          color: "#D4C4A0",
          letterSpacing: "0.1em",
        }}
      >
        02
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/NoirFragrancePage3.tsx`)

```tsx
export function NoirFragrancePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.8vw",
          color: "#D4C4A0",
          letterSpacing: "0.5em",
          textTransform: "uppercase",
        }}
      >
        K e y  M e t r i c s
      </div>

      <div
        style={{
          position: "absolute",
          top: "16vh",
          left: "8vw",
          right: "8vw",
          height: "1px",
          backgroundColor: "#D4C4A0",
          opacity: 0.3,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "25vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* Metric 1 */}
        <div style={{ flex: 1, borderRight: "1px solid rgba(212, 196, 160, 0.2)", paddingRight: "4vw" }}>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "6vw",
              color: "#D4C4A0",
              lineHeight: 1,
              marginBottom: "2vh",
            }}
          >
            42%
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "1vw",
              color: "#A0A0A0",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1vh",
            }}
          >
            Market Share
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "0.85vw",
              color: "#A0A0A0",
              margin: 0,
              lineHeight: 1.5,
              opacity: 0.7,
            }}
          >
            Expansion across key demographics in top-tier global markets.
          </p>
        </div>

        {/* Metric 2 */}
        <div style={{ flex: 1, paddingLeft: "4vw", borderRight: "1px solid rgba(212, 196, 160, 0.2)", paddingRight: "4vw" }}>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "6vw",
              color: "#D4C4A0",
              lineHeight: 1,
              marginBottom: "2vh",
            }}
          >
            18k
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "1vw",
              color: "#A0A0A0",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1vh",
            }}
          >
            Boutique Partners
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "0.85vw",
              color: "#A0A0A0",
              margin: 0,
              lineHeight: 1.5,
              opacity: 0.7,
            }}
          >
            Exclusive retailers curating our signature collection worldwide.
          </p>
        </div>

        {/* Metric 3 */}
        <div style={{ flex: 1, paddingLeft: "4vw" }}>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "6vw",
              color: "#D4C4A0",
              lineHeight: 1,
              marginBottom: "2vh",
            }}
          >
            2.5x
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "1vw",
              color: "#A0A0A0",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1vh",
            }}
          >
            Revenue Growth
          </div>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "0.85vw",
              color: "#A0A0A0",
              margin: 0,
              lineHeight: 1.5,
              opacity: 0.7,
            }}
          >
            Year-over-year increase driven by an uncompromising commitment to quality.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.7vw",
          color: "#A0A0A0",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        acme.co
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "8vw",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.8vw",
          color: "#D4C4A0",
          letterSpacing: "0.1em",
        }}
      >
        03
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/NoirFragrancePage4.tsx`)

```tsx
export function NoirFragrancePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.8vw",
          color: "#A0A0A0",
          letterSpacing: "0.5em",
          marginBottom: "4vh",
          textTransform: "uppercase",
        }}
      >
        E x p e r i e n c e
      </div>

      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "5vw",
          color: "#D4C4A0",
          margin: 0,
          lineHeight: 1.1,
          textAlign: "center",
          maxWidth: "70vw",
        }}
      >
        Discover the signature
      </h2>

      <div
        style={{
          width: "4vw",
          height: "1px",
          backgroundColor: "#D4C4A0",
          margin: "4vh 0",
          opacity: 0.6,
        }}
      />

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "1.1vw",
          color: "#A0A0A0",
          margin: 0,
          textAlign: "center",
          maxWidth: "40vw",
          lineHeight: 1.6,
        }}
      >
        Reach out to arrange a private viewing of our latest collection or to discuss bespoke collaborative opportunities.
      </p>

      <div
        style={{
          marginTop: "6vh",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.9vw",
          color: "#D4C4A0",
          letterSpacing: "0.1em",
          border: "1px solid rgba(212, 196, 160, 0.4)",
          padding: "1.5vh 3vw",
          cursor: "pointer",
          textTransform: "uppercase",
        }}
      >
        contact@acme.co
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.7vw",
          color: "#A0A0A0",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        acme.co
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "8vw",
          fontFamily: "'Inter', sans-serif",
          fontWeight: 300,
          fontSize: "0.8vw",
          color: "#D4C4A0",
          letterSpacing: "0.1em",
        }}
      >
        04
      </div>
    </div>
  );
}
```
