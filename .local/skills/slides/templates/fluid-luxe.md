# Fluid Luxe

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The FluidLuxe template features a sophisticated and elegant aesthetic, characterized by a dark and luxurious style. The background color is a solid #08060c, complemented by a linear gradient overlay transitioning from transparent to rgba(8,6,12,0.95). Text colors include #D4B896 for accents and headings, and #E8DFD0 for secondary text, with a subtle opacity effect on some elements. The font families used are 'Inter' for general text and 'Playfair Display' for the main heading, enhancing the refined look. Key layout elements include a full-screen background image of fluid gold and navy art, positioned absolutely, and a right-aligned content area that features various text elements and decorative lines. The overall aesthetic feel can be described as "luxurious elegance."

## Source Code

**Component:** `FluidLuxe`

### Slide 1 — Title (`slide-styles/FluidLuxe.tsx`)

```tsx
export function FluidLuxe() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#08060c",
      }}
    >
      <img
        src="/__mockup/photos/fluid-gold.png"
        alt="Fluid gold and navy art"
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
          background: "linear-gradient(to right, transparent 58%, rgba(8,6,12,0.9) 65%, rgba(8,6,12,0.95) 100%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "38vw",
          height: "100vh",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingRight: "6vw",
          paddingLeft: "4vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            color: "#D4B896",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            marginBottom: "1vh",
          }}
        >
          MAISON
        </div>
        <div
          style={{
            fontSize: "0.7vw",
            color: "#E8DFD0",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "4vh",
            opacity: 0.7,
          }}
        >
          COLLECTION PRIVÉE
        </div>

        <div
          style={{
            width: "4vw",
            height: "1px",
            backgroundColor: "#D4B896",
            marginBottom: "4vh",
            opacity: 0.5,
          }}
        />

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4.5vw",
            fontWeight: 400,
            color: "#D4B896",
            margin: 0,
            lineHeight: 1.1,
            marginBottom: "3vh",
          }}
        >
          Example Deck
        </h1>

        <p
          style={{
            fontWeight: 300,
            fontSize: "1.2vw",
            color: "#E8DFD0",
            lineHeight: 1.6,
            margin: 0,
            opacity: 0.9,
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        <div
          style={{
            position: "absolute",
            bottom: "6vh",
            right: "6vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "1vh",
          }}
        >
          <div
            style={{
              fontSize: "0.7vw",
              color: "#D4B896",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontSize: "0.6vw",
              color: "#E8DFD0",
              letterSpacing: "0.2em",
              opacity: 0.5,
            }}
          >
            MMXXVI
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/FluidLuxePage2.tsx`)

```tsx
export function FluidLuxePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#08060c",
        display: "flex",
        flexDirection: "column",
        padding: "8vw",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "8vh",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.8vw",
              color: "#D4B896",
              textTransform: "uppercase",
              letterSpacing: "0.4em",
              marginBottom: "1vh",
            }}
          >
            CHAPTER I
          </div>
          <div
            style={{
              fontSize: "0.7vw",
              color: "#E8DFD0",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.7,
            }}
          >
            THE VISION
          </div>
        </div>
        <div
          style={{
            width: "40vw",
            height: "1px",
            backgroundColor: "#D4B896",
            opacity: 0.3,
            marginTop: "1.5vh",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ display: "flex", flex: 1, gap: "8vw" }}>
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5vw",
              fontWeight: 400,
              color: "#D4B896",
              margin: 0,
              lineHeight: 1.2,
              marginBottom: "4vh",
            }}
          >
            Redefining the <br /> Modern Aesthetic
          </h2>
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#D4B896",
              marginBottom: "4vh",
              opacity: 0.5,
            }}
          />
        </div>
        <div style={{ flex: 1, paddingTop: "1.5vh" }}>
          <p
            style={{
              fontWeight: 300,
              fontSize: "1.2vw",
              color: "#E8DFD0",
              lineHeight: 1.8,
              margin: 0,
              marginBottom: "4vh",
              opacity: 0.9,
            }}
          >
            We believe that true luxury lies in the absence of the unnecessary. By stripping away the superfluous, we reveal the essential beauty of form, material, and space. Our approach is rooted in an unwavering commitment to craftsmanship and a deep appreciation for the subtle interplay of light and shadow.
          </p>
          <p
            style={{
              fontWeight: 300,
              fontSize: "1.2vw",
              color: "#E8DFD0",
              lineHeight: 1.8,
              margin: 0,
              opacity: 0.9,
            }}
          >
            Every detail is considered, every curve is deliberate. The result is an experience that feels both timeless and entirely new, a sanctuary of calm in an otherwise chaotic world. This is the essence of our philosophy, the guiding principle behind everything we create.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            fontSize: "0.7vw",
            color: "#D4B896",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          acme.co
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            color: "#E8DFD0",
            letterSpacing: "0.2em",
            opacity: 0.5,
          }}
        >
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/FluidLuxePage3.tsx`)

```tsx
export function FluidLuxePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#08060c",
        display: "flex",
        flexDirection: "column",
        padding: "8vw",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "8vh",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "0.8vw",
              color: "#D4B896",
              textTransform: "uppercase",
              letterSpacing: "0.4em",
              marginBottom: "1vh",
            }}
          >
            CHAPTER II
          </div>
          <div
            style={{
              fontSize: "0.7vw",
              color: "#E8DFD0",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              opacity: 0.7,
            }}
          >
            THE METRICS
          </div>
        </div>
        <div
          style={{
            width: "40vw",
            height: "1px",
            backgroundColor: "#D4B896",
            opacity: 0.3,
            marginTop: "1.5vh",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ display: "flex", flex: 1, gap: "6vw" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3vw",
              fontWeight: 400,
              color: "#D4B896",
              margin: 0,
              lineHeight: 1.2,
              marginBottom: "3vh",
            }}
          >
            Measured Elegance
          </h2>
          <p
            style={{
              fontWeight: 300,
              fontSize: "1.1vw",
              color: "#E8DFD0",
              lineHeight: 1.8,
              margin: 0,
              marginBottom: "4vh",
              opacity: 0.9,
              maxWidth: "80%",
            }}
          >
            Our growth trajectory is a testament to the resonance of our design philosophy. By maintaining a steadfast commitment to quality, we have cultivated a discerning and loyal clientele.
          </p>
          
          <div style={{ display: "flex", gap: "4vw", marginTop: "2vh" }}>
            <div>
              <div style={{ fontSize: "2.5vw", fontFamily: "'Playfair Display', serif", color: "#D4B896", marginBottom: "0.5vh" }}>
                $4.2M
              </div>
              <div style={{ fontSize: "0.7vw", color: "#E8DFD0", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.7 }}>
                Annual Revenue
              </div>
            </div>
            <div>
              <div style={{ fontSize: "2.5vw", fontFamily: "'Playfair Display', serif", color: "#D4B896", marginBottom: "0.5vh" }}>
                315%
              </div>
              <div style={{ fontSize: "0.7vw", color: "#E8DFD0", textTransform: "uppercase", letterSpacing: "0.15em", opacity: 0.7 }}>
                YOY Growth
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", justifyContent: "space-between", paddingBottom: "2vh", borderBottom: "1px solid rgba(212, 184, 150, 0.3)" }}>
          {/* Chart Bars */}
          {[
            { label: "Q1", height: "15vh" },
            { label: "Q2", height: "22vh" },
            { label: "Q3", height: "35vh" },
            { label: "Q4", height: "45vh" },
          ].map((bar, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "4vw" }}>
              <div
                style={{
                  width: "100%",
                  height: bar.height,
                  backgroundColor: i === 3 ? "#D4B896" : "rgba(212, 184, 150, 0.15)",
                  border: i !== 3 ? "1px solid rgba(212, 184, 150, 0.3)" : "none",
                  marginBottom: "2vh",
                  transition: "all 0.3s ease",
                }}
              />
              <div style={{ fontSize: "0.7vw", color: "#E8DFD0", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7 }}>
                {bar.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            fontSize: "0.7vw",
            color: "#D4B896",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          acme.co
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            color: "#E8DFD0",
            letterSpacing: "0.2em",
            opacity: 0.5,
          }}
        >
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/FluidLuxePage4.tsx`)

```tsx
export function FluidLuxePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#08060c",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
      }}
    >
      <img
        src="/__mockup/photos/fluid-gold.png"
        alt="Fluid gold and navy art"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.4,
          filter: "saturate(0.8) contrast(1.2)",
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at center, rgba(8,6,12,0.6) 0%, rgba(8,6,12,0.95) 70%, rgba(8,6,12,1) 100%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "50vw",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            color: "#D4B896",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            marginBottom: "4vh",
          }}
        >
          THE INVITATION
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "5vw",
            fontWeight: 400,
            color: "#D4B896",
            margin: 0,
            lineHeight: 1.1,
            marginBottom: "4vh",
          }}
        >
          Join the <br /> Collection
        </h2>

        <div
          style={{
            width: "6vw",
            height: "1px",
            backgroundColor: "#D4B896",
            marginBottom: "5vh",
            opacity: 0.5,
          }}
        />

        <p
          style={{
            fontWeight: 300,
            fontSize: "1.2vw",
            color: "#E8DFD0",
            lineHeight: 1.6,
            margin: 0,
            marginBottom: "6vh",
            opacity: 0.9,
          }}
        >
          Discover a new standard of refined living. We invite you to experience the subtle luxury of our private collection.
        </p>

        <div
          style={{
            padding: "1.5vh 3vw",
            border: "1px solid #D4B896",
            color: "#D4B896",
            fontSize: "0.8vw",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            cursor: "pointer",
            transition: "all 0.3s ease",
            backgroundColor: "rgba(212, 184, 150, 0.05)",
          }}
        >
          Inquire Now
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontSize: "0.7vw",
            color: "#D4B896",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          acme.co
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            color: "#E8DFD0",
            letterSpacing: "0.2em",
            opacity: 0.5,
          }}
        >
          04
        </div>
      </div>
    </div>
  );
}
```
