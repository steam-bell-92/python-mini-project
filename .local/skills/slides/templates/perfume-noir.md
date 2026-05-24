# Perfume Noir

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "PerfumeNoir" template embodies a sophisticated and elegant aesthetic, characterized by its dark and luxurious style. The background color is solid black (#000000), while the text color is white (#FFFFFF) with accents in a muted burgundy (#5C0A2A) and varying opacities of white (rgba(255, 255, 255, 0.6) and rgba(255, 255, 255, 0.7)). The font family used for the main text is 'Inter', a sans-serif typeface, while the title employs 'Playfair Display', a serif font, to convey a classic and refined feel. Key layout elements include a vertical burgundy line positioned on the left, uppercase text with letter spacing for a modern touch, and a structured arrangement that balances text and decorative elements. The overall aesthetic feel can be described as "luxurious elegance."

## Source Code

**Component:** `PerfumeNoir`

### Slide 1 — Title (`slide-styles/PerfumeNoir.tsx`)

```tsx
export function PerfumeNoir() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "8vw",
          bottom: "10vh",
          width: "1px",
          backgroundColor: "#5C0A2A",
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "12vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          acme.co
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          Collection 2026
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "15vh",
          left: "12vw",
          width: "70vw",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#5C0A2A",
            marginBottom: "3vh",
          }}
        >
          Essence de la Nuit
        </div>
        
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "10vw",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 0.85,
            margin: "0 0 5vh 0",
            letterSpacing: "-0.02em",
          }}
        >
          Example Deck
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 200,
              lineHeight: 1.8,
              color: "rgba(255, 255, 255, 0.7)",
              maxWidth: "35vw",
              margin: 0,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>

          <div
            style={{
              fontSize: "0.7vw",
              fontWeight: 200,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "rgba(255, 255, 255, 0.4)",
              textAlign: "right",
            }}
          >
            Example Company, Inc.
            <br />
            Confidential
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/PerfumeNoirPage2.tsx`)

```tsx
export function PerfumeNoirPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "8vw",
          bottom: "10vh",
          width: "1px",
          backgroundColor: "#5C0A2A",
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "12vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          acme.co
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          Collection 2026
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "25vh",
          left: "12vw",
          width: "70vw",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#5C0A2A",
            marginBottom: "3vh",
          }}
        >
          Chapter 01
        </div>
        
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "5vw",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1,
            margin: "0 0 8vh 0",
            letterSpacing: "-0.02em",
          }}
        >
          The Olfactory Experience
        </h2>

        <div style={{ display: "flex", gap: "5vw" }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "1.2vw", fontWeight: 400, marginBottom: "2vh", color: "#FFFFFF" }}>
              Top Notes
            </h3>
            <p style={{ fontSize: "1vw", fontWeight: 200, lineHeight: 1.8, color: "rgba(255, 255, 255, 0.7)", margin: 0 }}>
              Bergamot and bitter orange provide an immediate, fleeting freshness that awakens the senses before dissolving into the deeper essence.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "1.2vw", fontWeight: 400, marginBottom: "2vh", color: "#FFFFFF" }}>
              Heart Notes
            </h3>
            <p style={{ fontSize: "1vw", fontWeight: 200, lineHeight: 1.8, color: "rgba(255, 255, 255, 0.7)", margin: 0 }}>
              Damask rose and midnight jasmine intertwine to create a rich, floral core that beats with passion and undeniable intensity.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "1.2vw", fontWeight: 400, marginBottom: "2vh", color: "#FFFFFF" }}>
              Base Notes
            </h3>
            <p style={{ fontSize: "1vw", fontWeight: 200, lineHeight: 1.8, color: "rgba(255, 255, 255, 0.7)", margin: 0 }}>
              Smoky oud, vetiver, and dark amber linger on the skin, leaving a mysterious trail that endures long into the night.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          left: "12vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            fontSize: "0.7vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.4)",
          }}
        >
          Confidential
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/PerfumeNoirPage3.tsx`)

```tsx
export function PerfumeNoirPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "8vw",
          bottom: "10vh",
          width: "1px",
          backgroundColor: "#5C0A2A",
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "12vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          acme.co
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          Collection 2026
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "25vh",
          left: "12vw",
          width: "70vw",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#5C0A2A",
            marginBottom: "3vh",
          }}
        >
          Chapter 02
        </div>
        
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "5vw",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1,
            margin: "0 0 8vh 0",
            letterSpacing: "-0.02em",
          }}
        >
          Market Penetration
        </h2>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "30vh", marginTop: "5vh" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20%" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#FFFFFF", marginBottom: "2vh" }}>15%</div>
            <div style={{ width: "100%", height: "10vh", backgroundColor: "rgba(92, 10, 42, 0.3)", position: "relative" }}>
               <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100%", backgroundColor: "#5C0A2A", opacity: 0.5 }} />
            </div>
            <div style={{ fontSize: "0.8vw", fontWeight: 200, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.6)", marginTop: "2vh" }}>Europe</div>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20%" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#FFFFFF", marginBottom: "2vh" }}>28%</div>
            <div style={{ width: "100%", height: "18vh", backgroundColor: "rgba(92, 10, 42, 0.3)", position: "relative" }}>
               <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100%", backgroundColor: "#5C0A2A", opacity: 0.7 }} />
            </div>
            <div style={{ fontSize: "0.8vw", fontWeight: 200, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.6)", marginTop: "2vh" }}>Americas</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20%" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#FFFFFF", marginBottom: "2vh" }}>42%</div>
            <div style={{ width: "100%", height: "26vh", backgroundColor: "rgba(92, 10, 42, 0.3)", position: "relative" }}>
               <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100%", backgroundColor: "#5C0A2A", opacity: 0.9 }} />
            </div>
            <div style={{ fontSize: "0.8vw", fontWeight: 200, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.6)", marginTop: "2vh" }}>Asia Pacific</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20%" }}>
            <div style={{ fontSize: "3vw", fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#FFFFFF", marginBottom: "2vh" }}>15%</div>
            <div style={{ width: "100%", height: "10vh", backgroundColor: "rgba(92, 10, 42, 0.3)", position: "relative" }}>
               <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "100%", backgroundColor: "#5C0A2A", opacity: 0.5 }} />
            </div>
            <div style={{ fontSize: "0.8vw", fontWeight: 200, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.6)", marginTop: "2vh" }}>Middle East</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          left: "12vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            fontSize: "0.7vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.4)",
          }}
        >
          Confidential
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/PerfumeNoirPage4.tsx`)

```tsx
export function PerfumeNoirPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#000000",
        color: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "8vw",
          bottom: "10vh",
          width: "1px",
          backgroundColor: "#5C0A2A",
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "12vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          acme.co
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          Collection 2026
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35vh",
          left: "12vw",
          width: "70vw",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
          transform: "translateX(5vw)",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#5C0A2A",
            marginBottom: "3vh",
          }}
        >
          The Conclusion
        </div>
        
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "8vw",
            fontWeight: 300,
            fontStyle: "italic",
            lineHeight: 1,
            margin: "0 0 4vh 0",
            letterSpacing: "-0.02em",
          }}
        >
          Embrace the Night
        </h2>
        
        <p
          style={{
            fontSize: "1.2vw",
            fontWeight: 200,
            lineHeight: 1.8,
            color: "rgba(255, 255, 255, 0.7)",
            maxWidth: "40vw",
            margin: "0 auto 6vh auto",
          }}
        >
          Join us in redefining luxury fragrance. A scent that doesn't just linger, but lives within the memory of those who experience it.
        </p>
        
        <div
          style={{
            display: "inline-block",
            borderBottom: "1px solid #5C0A2A",
            paddingBottom: "1vh",
            fontSize: "1vw",
            fontWeight: 200,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#FFFFFF",
            cursor: "pointer",
          }}
        >
          Discover More
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          left: "12vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            fontSize: "0.7vw",
            fontWeight: 200,
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "rgba(255, 255, 255, 0.4)",
          }}
        >
          Confidential
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 200,
            color: "rgba(255, 255, 255, 0.6)",
          }}
        >
          04
        </div>
      </div>
    </div>
  );
}
```
