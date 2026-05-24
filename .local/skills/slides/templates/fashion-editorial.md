# Fashion Editorial

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "FashionEditorial" template embodies a modern and chic aesthetic, suitable for high-end fashion presentations. The background color is solid black (#000), while a linear gradient overlay at the bottom features a transition from rgba(0,0,0,0.4) to transparent. Text elements are primarily in white (#FFFFFF) with accents of pink (#FF2D78) for decorative elements, and a lighter white (rgba(255,255,255,0.8)) for secondary text. The font families used include 'Playfair Display' in an italic style for the main title "NOVA," and 'Inter' for the supporting text, providing a contemporary and elegant feel. Key layout elements include a full-screen background image of a fashion face, a vertical pink accent line, and a structured layout with text positioned at the bottom, creating a sophisticated and visually striking presentation. The overall aesthetic feel is "modern elegance."

## Source Code

**Component:** `FashionEditorial`

### Slide 1 — Title (`slide-styles/FashionEditorial.tsx`)

```tsx
export function FashionEditorial() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000" }}>
      <img 
        src="/__mockup/images/photo-fashion-face.png" 
        alt="Fashion Face" 
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "25vh",
        background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 100%)",
        zIndex: 2
      }} />
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "8vh 6vw",
        boxSizing: "border-box"
      }}>
        <div style={{
          position: "absolute",
          left: "3vw",
          bottom: "8vh",
          width: "2px",
          height: "22vh",
          backgroundColor: "#FF2D78"
        }} />
        <div style={{ paddingLeft: "1vw" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "12vw",
            fontStyle: "italic",
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 0.8,
            textShadow: "0 4px 12px rgba(0,0,0,0.3)"
          }}>
            NOVA
          </h1>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            textTransform: "uppercase",
            fontSize: "1.2vw",
            letterSpacing: "0.6em",
            color: "#FFFFFF",
            marginTop: "3vh",
            fontWeight: 400,
            textShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }}>
            Creative Agency
          </div>
          <div style={{
            fontFamily: "'Inter', sans-serif",
            fontStyle: "italic",
            fontSize: "1.2vw",
            color: "rgba(255,255,255,0.8)",
            marginTop: "1.5vh",
            fontWeight: 300,
            textShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }}>
            Redefining beauty through bold expression.
          </div>
        </div>
        
        <div style={{
          position: "absolute",
          bottom: "4vh",
          right: "6vw",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8vw",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.7)",
          textTransform: "uppercase"
        }}>
          Example Company, Inc. / Confidential &copy; 2026
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/FashionEditorialPage2.tsx`)

```tsx
export function FashionEditorialPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Top Section Label */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "0",
          width: "100%",
          textAlign: "center",
          fontSize: "1vw",
          letterSpacing: "0.8em",
          textTransform: "uppercase",
          zIndex: 10,
          mixBlendMode: "difference",
        }}
      >
        Collection
      </div>

      {/* Grid Container */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "1px",
          backgroundColor: "#ffffff", // Acts as 1px white grid lines due to gap
        }}
      >
        {/* Top-Left: Pink Tint Overlay */}
        <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#000" }}>
          <img
            src="/__mockup/images/photo-fashion-face.png"
            alt="Fashion Face"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#FF2D78",
              mixBlendMode: "multiply",
              opacity: 0.8,
            }}
          />
        </div>

        {/* Top-Right: High-contrast B&W */}
        <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#000" }}>
          <img
            src="/__mockup/images/photo-fashion-face.png"
            alt="Fashion Face B&W"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "grayscale(1) contrast(1.3)",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        {/* Bottom-Left: Cropped Tight */}
        <div style={{ position: "relative", overflow: "hidden", backgroundColor: "#000" }}>
          <img
            src="/__mockup/images/photo-fashion-face.png"
            alt="Fashion Face Zoomed"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "30% 20%",
              transform: "scale(1.8)",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>

        {/* Bottom-Right: Dark Overlay with Text */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/__mockup/images/photo-fashion-face.png"
            alt="Fashion Face Dark"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.6)",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              fontFamily: "'Playfair Display', serif",
              fontSize: "12vw",
              fontStyle: "italic",
              color: "#FF2D78",
              lineHeight: 1,
              textShadow: "0 10px 30px rgba(0,0,0,0.8)",
            }}
          >
            SS26
          </div>
        </div>
      </div>

      {/* Footer / Page Number */}
      <div
        style={{
          position: "absolute",
          bottom: "3vh",
          left: "3vw",
          fontSize: "0.8vw",
          letterSpacing: "0.2em",
          color: "#ffffff",
          textTransform: "uppercase",
          mixBlendMode: "difference",
          zIndex: 10,
        }}
      >
        02
      </div>
      
      <div
        style={{
          position: "absolute",
          bottom: "3vh",
          right: "3vw",
          fontSize: "0.8vw",
          letterSpacing: "0.2em",
          color: "#ffffff",
          textTransform: "uppercase",
          mixBlendMode: "difference",
          zIndex: 10,
        }}
      >
        Example Company, Inc. / Confidential
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/FashionEditorialPage3.tsx`)

```tsx
export function FashionEditorialPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", color: "#FFFFFF" }}>
      <div style={{
        position: "absolute",
        top: "8vh",
        left: "6vw",
        width: "2px",
        height: "15vh",
        backgroundColor: "#FF2D78"
      }} />
      <div style={{ padding: "8vh 6vw", paddingLeft: "8vw", boxSizing: "border-box", display: "flex", flexDirection: "column", height: "100%" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "6vw",
          fontStyle: "italic",
          color: "#FFFFFF",
          margin: 0,
          lineHeight: 1,
          textShadow: "0 4px 12px rgba(0,0,0,0.3)"
        }}>
          The Impact
        </h2>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          textTransform: "uppercase",
          fontSize: "1vw",
          letterSpacing: "0.4em",
          color: "#FF2D78",
          marginTop: "2vh",
          fontWeight: 400
        }}>
          Global Reach & Resonance
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "12vh", width: "80vw" }}>
          <div style={{ width: "22vw" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "7vw", fontStyle: "italic", lineHeight: 1 }}>
              4.2M
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2vw", letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)", marginTop: "2vh" }}>
              ENGAGEMENTS
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.2)", marginTop: "3vh" }} />
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", marginTop: "2vh", lineHeight: 1.6 }}>
              Across all digital campaigns and social channels over the past quarter.
            </div>
          </div>

          <div style={{ width: "22vw" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "7vw", fontStyle: "italic", lineHeight: 1 }}>
              85%
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2vw", letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)", marginTop: "2vh" }}>
              CONVERSION
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.2)", marginTop: "3vh" }} />
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", marginTop: "2vh", lineHeight: 1.6 }}>
              Increase in audience-to-customer pipeline efficiency.
            </div>
          </div>

          <div style={{ width: "22vw" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "7vw", fontStyle: "italic", lineHeight: 1 }}>
              12
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2vw", letterSpacing: "0.1em", color: "rgba(255,255,255,0.7)", marginTop: "2vh" }}>
              NEW MARKETS
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(255,255,255,0.2)", marginTop: "3vh" }} />
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", marginTop: "2vh", lineHeight: 1.6 }}>
              Successfully entered key luxury demographics in EMEA and APAC.
            </div>
          </div>
        </div>

        <div style={{
          position: "absolute",
          bottom: "4vh",
          left: "6vw",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8vw",
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.7)",
          textTransform: "uppercase",
          display: "flex",
          justifyContent: "space-between",
          width: "88vw"
        }}>
          <span>Example Company, Inc. / Confidential &copy; 2026</span>
          <span>03</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/FashionEditorialPage4.tsx`)

```tsx
export function FashionEditorialPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", color: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at center, rgba(255,45,120,0.1) 0%, transparent 60%)",
        zIndex: 1
      }} />
      
      <div style={{ zIndex: 2, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: "2px",
          height: "10vh",
          backgroundColor: "#FF2D78",
          marginBottom: "4vh"
        }} />
        
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "10vw",
          fontStyle: "italic",
          color: "#FFFFFF",
          margin: 0,
          lineHeight: 1,
          textShadow: "0 4px 12px rgba(0,0,0,0.3)"
        }}>
          Discover Nova.
        </h1>
        
        <div style={{
          fontFamily: "'Inter', sans-serif",
          textTransform: "uppercase",
          fontSize: "1.2vw",
          letterSpacing: "0.6em",
          color: "#FFFFFF",
          marginTop: "4vh",
          fontWeight: 400
        }}>
          Join The Movement
        </div>
        
        <div style={{
          marginTop: "8vh",
          padding: "2vh 4vw",
          border: "1px solid #FF2D78",
          fontFamily: "'Inter', sans-serif",
          fontSize: "1vw",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#FF2D78"
        }}>
          Contact Us
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: "4vh",
        left: "6vw",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.8vw",
        letterSpacing: "0.2em",
        color: "rgba(255,255,255,0.7)",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "space-between",
        width: "88vw",
        zIndex: 2
      }}>
        <span>Example Company, Inc. / Confidential &copy; 2026</span>
        <span>04</span>
      </div>
    </div>
  );
}
```
