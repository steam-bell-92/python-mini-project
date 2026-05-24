# Sneaker Drop

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "SneakerDrop" template embodies a modern, urban aesthetic with a focus on sneaker culture. It features a solid black background color (#0A0A0A) with a subtle radial gradient texture in white (#ffffff) at 5% opacity. The primary text color is white (#ffffff), while accents are highlighted in neon green (#39FF14). The font family used is 'Inter' for general text, with 'Courier New' for technical details, and 'DM Sans' for descriptive text, creating a contemporary and tech-inspired feel. Key layout elements include a dramatic diagonal neon green slash, oversized text elements ("VELO" and "X1"), and a prominent sneaker image, all positioned dynamically to create visual interest. The overall aesthetic feel can be described as "edgy, vibrant, urban."

## Source Code

**Component:** `SneakerDrop`

### Slide 1 — Title (`slide-styles/SneakerDrop.tsx`)

```tsx
export function SneakerDrop() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0A0A0A",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#ffffff",
      }}
    >
      {/* Background noise / texture approximation */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)",
          backgroundSize: "2vw 2vw",
          zIndex: 1,
        }}
      />

      {/* Dramatic diagonal slash */}
      <div
        style={{
          position: "absolute",
          top: "40vh",
          left: "-10vw",
          width: "120vw",
          height: "35vh",
          backgroundColor: "#39FF14",
          transform: "rotate(-12deg)",
          transformOrigin: "center",
          zIndex: 2,
          mixBlendMode: "normal",
        }}
      />

      {/* Ticker tape text inside the slash */}
      <div
        style={{
          position: "absolute",
          top: "43vh",
          left: "-5vw",
          width: "110vw",
          transform: "rotate(-12deg)",
          transformOrigin: "center",
          zIndex: 3,
          display: "flex",
          whiteSpace: "nowrap",
          overflow: "hidden",
          color: "#0A0A0A",
          fontSize: "2vw",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          opacity: 0.7,
        }}
      >
        <span>
          NOT FOR RESALE // LIMITED EDITION // OFF-WHITE // HIGHSNOBIETY //
          HYPEBEAST // NOT FOR RESALE // LIMITED EDITION // OFF-WHITE //
        </span>
      </div>

      {/* MASSIVE "VELO" Text - Behind the sneaker */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "5vw",
          fontSize: "22vw",
          fontWeight: 900,
          lineHeight: 0.8,
          letterSpacing: "-0.06em",
          zIndex: 4,
          color: "#ffffff",
          textTransform: "uppercase",
          textShadow: "0 2vh 4vh rgba(0,0,0,0.5)",
        }}
      >
        VELO
      </div>

      {/* "X1" Accent Text */}
      <div
        style={{
          position: "absolute",
          top: "55vh",
          right: "8vw",
          fontSize: "14vw",
          fontWeight: 900,
          lineHeight: 0.8,
          letterSpacing: "-0.04em",
          zIndex: 4,
          color: "#39FF14",
          textTransform: "uppercase",
          textShadow: "0 1vh 2vh rgba(0,0,0,0.8)",
        }}
      >
        X1
      </div>

      {/* Enormous Sneaker Image - The Hero */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "20vw",
          width: "60vw",
          height: "70vh",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="/__mockup/images/product-sneaker.png"
          alt="VELO X1 Sneaker"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transform: "rotate(-18deg) scale(1.2)",
            filter:
              "drop-shadow(-2vw 4vh 3vw rgba(0, 0, 0, 0.9)) drop-shadow(0 0 4vw rgba(57, 255, 20, 0.3))",
          }}
        />
      </div>

      {/* Distressed / Technical Details */}
      <div
        style={{
          position: "absolute",
          top: "5vh",
          left: "5vw",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          gap: "1vh",
        }}
      >
        <div
          style={{
            fontSize: "1vw",
            fontWeight: 800,
            color: "#39FF14",
            letterSpacing: "0.2em",
          }}
        >
          // PROTOTYPE_01
        </div>
        <div
          style={{
            fontSize: "0.8vw",
            color: "#666",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.1em",
          }}
        >
          AUTHORIZATION: REQUIRED
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "5vw",
          zIndex: 5,
        }}
      >
        <div
          style={{
            fontSize: "1vw",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
          }}
        >
          LIMITED DROP • 03.26
        </div>
        <div
          style={{
            marginTop: "1vh",
            width: "15vw",
            height: "2px",
            backgroundColor: "#39FF14",
          }}
        />
      </div>

      {/* Branding / Agency marks */}
      <div
        style={{
          position: "absolute",
          top: "5vh",
          right: "5vw",
          zIndex: 5,
          textAlign: "right",
        }}
      >
        <div
          style={{
            fontSize: "1.2vw",
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "0.1em",
          }}
        >
          SNKRS
        </div>
        <div
          style={{
            fontSize: "0.9vw",
            color: "#39FF14",
            fontWeight: 700,
            letterSpacing: "0.1em",
            marginTop: "0.5vh",
          }}
        >
          X VIRGIL ABLOH
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          right: "5vw",
          zIndex: 5,
          width: "25vw",
        }}
      >
        <p
          style={{
            fontSize: "1vw",
            lineHeight: 1.5,
            color: "#888",
            textAlign: "right",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 500,
          }}
        >
          Constructed with hyper-responsive neon tech and breathable mesh. The
          X1 defies gravity.{" "}
          <span style={{ color: "#ffffff", fontWeight: 700 }}>
            Don't sleep on this drop.
          </span>
        </p>
      </div>

      {/* Abstract technical elements */}
      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          right: "35vw",
          width: "5vw",
          height: "5vw",
          border: "2px solid #39FF14",
          borderRadius: "50%",
          zIndex: 1,
          opacity: 0.3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1vw",
            height: "1vw",
            backgroundColor: "#39FF14",
            borderRadius: "50%",
          }}
        />
      </div>
      
      {/* Target reticle */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          right: "20vw",
          width: "4vw",
          height: "4vw",
          zIndex: 5,
          opacity: 0.5,
        }}
      >
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", backgroundColor: "#fff" }} />
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", backgroundColor: "#fff" }} />
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/SneakerDropPage2.tsx`)

```tsx
export function SneakerDropPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0A0A0A",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#ffffff",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)",
          backgroundSize: "2vw 2vw",
          zIndex: 1,
        }}
      />

      {/* Decorative grid lines */}
      <div style={{ position: "absolute", top: 0, left: "33.33vw", width: "1px", height: "100vh", backgroundColor: "rgba(255,255,255,0.05)", zIndex: 1 }} />
      <div style={{ position: "absolute", top: 0, left: "66.66vw", width: "1px", height: "100vh", backgroundColor: "rgba(255,255,255,0.05)", zIndex: 1 }} />
      <div style={{ position: "absolute", top: "20vh", left: 0, width: "100vw", height: "1px", backgroundColor: "rgba(255,255,255,0.05)", zIndex: 1 }} />

      {/* Header section */}
      <div style={{ zIndex: 5, position: "relative", marginBottom: "8vh" }}>
        <h1
          style={{
            fontSize: "6vw",
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.04em",
            margin: 0,
            lineHeight: 1,
          }}
        >
          AVAILABLE COLORWAYS
        </h1>
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginTop: "2vh" }}>
          <div style={{ height: "4px", width: "10vw", backgroundColor: "#39FF14" }} />
          <span style={{ fontFamily: "'Courier New', monospace", color: "#888", fontSize: "1vw", letterSpacing: "0.2em" }}>
            // FW26 COLLECTION
          </span>
        </div>
      </div>

      {/* 3 Columns Grid */}
      <div
        style={{
          display: "flex",
          flex: 1,
          gap: "4vw",
          zIndex: 5,
          position: "relative",
        }}
      >
        {/* Column 1: SHADOW BLACK */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
          <div style={{ height: "1vh", width: "100%", backgroundColor: "#333333", marginBottom: "4vh" }} />
          
          <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "absolute", fontSize: "10vw", fontWeight: 900, color: "rgba(255,255,255,0.03)", top: "10%", left: "-10%", zIndex: 0 }}>01</div>
            <img 
              src="/__mockup/images/product-sneaker.png" 
              alt="Shadow Black" 
              style={{ width: "100%", height: "auto", objectFit: "contain", transform: "rotate(-15deg)", filter: "grayscale(100%) drop-shadow(0 2vh 2vw rgba(0,0,0,0.8))", zIndex: 2 }} 
            />
          </div>

          <div style={{ marginTop: "auto" }}>
            <h2 style={{ fontSize: "2vw", fontWeight: 800, margin: "0 0 1vh 0", letterSpacing: "0.05em" }}>SHADOW BLACK</h2>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "1.5vw", color: "#888", fontFamily: "'Courier New', monospace" }}>$189</span>
              <span style={{ fontSize: "0.8vw", color: "#555", letterSpacing: "0.1em" }}>STANDARD</span>
            </div>
          </div>
        </div>

        {/* Column 2: ARCTIC WHITE */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
          <div style={{ height: "1vh", width: "100%", backgroundColor: "#ffffff", marginBottom: "4vh" }} />
          
          <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "absolute", fontSize: "10vw", fontWeight: 900, color: "rgba(255,255,255,0.03)", top: "10%", left: "-10%", zIndex: 0 }}>02</div>
            <img 
              src="/__mockup/images/product-sneaker.png" 
              alt="Arctic White" 
              style={{ width: "100%", height: "auto", objectFit: "contain", transform: "rotate(-15deg)", filter: "brightness(1.5) grayscale(50%) drop-shadow(0 2vh 2vw rgba(0,0,0,0.8))", zIndex: 2 }} 
            />
          </div>

          <div style={{ marginTop: "auto" }}>
            <h2 style={{ fontSize: "2vw", fontWeight: 800, margin: "0 0 1vh 0", letterSpacing: "0.05em" }}>ARCTIC WHITE</h2>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "1.5vw", color: "#888", fontFamily: "'Courier New', monospace" }}>$189</span>
              <span style={{ fontSize: "0.8vw", color: "#555", letterSpacing: "0.1em" }}>STANDARD</span>
            </div>
          </div>
        </div>

        {/* Column 3: VOLT GREEN */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
          <div style={{ height: "1vh", width: "100%", backgroundColor: "#39FF14", marginBottom: "4vh", boxShadow: "0 0 2vw rgba(57,255,20,0.5)" }} />
          
          <div style={{ position: "absolute", top: "5vh", right: 0, backgroundColor: "#39FF14", color: "#0A0A0A", padding: "0.5vh 1vw", fontWeight: 900, fontSize: "0.8vw", letterSpacing: "0.1em", zIndex: 10, transform: "rotate(5deg)" }}>
            LIMITED
          </div>

          <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "absolute", fontSize: "10vw", fontWeight: 900, color: "rgba(57,255,20,0.05)", top: "10%", left: "-10%", zIndex: 0 }}>03</div>
            <img 
              src="/__mockup/images/product-sneaker.png" 
              alt="Volt Green" 
              style={{ width: "100%", height: "auto", objectFit: "contain", transform: "rotate(-15deg) scale(1.1)", filter: "drop-shadow(0 0 3vw rgba(57,255,20,0.4))", zIndex: 2 }} 
            />
          </div>

          <div style={{ marginTop: "auto" }}>
            <h2 style={{ fontSize: "2vw", fontWeight: 800, margin: "0 0 1vh 0", color: "#39FF14", letterSpacing: "0.05em" }}>VOLT GREEN</h2>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "1.5vw", color: "#fff", fontFamily: "'Courier New', monospace", fontWeight: "bold" }}>$199</span>
              <span style={{ fontSize: "0.8vw", color: "#39FF14", letterSpacing: "0.1em" }}>EXCLUSIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 5,
          position: "relative",
          paddingTop: "4vh",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div style={{ fontSize: "0.8vw", color: "#555", letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif" }}>
            Example Company, Inc. / Confidential
          </div>
        </div>
        
        <div style={{ fontSize: "1.5vw", fontWeight: 900, color: "#39FF14", letterSpacing: "0.1em", border: "2px solid #39FF14", padding: "1vh 2vw", transform: "skewX(-10deg)" }}>
          <span style={{ transform: "skewX(10deg)", display: "inline-block" }}>DROP DATE: MARCH 15, 2026</span>
        </div>

        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#555" }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/SneakerDropPage3.tsx`)

```tsx
export function SneakerDropPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0A0A0A",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#ffffff",
      }}
    >
      {/* Background noise / texture approximation */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)",
          backgroundSize: "2vw 2vw",
          zIndex: 1,
        }}
      />

      {/* Dramatic diagonal slash */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          right: "-10vw",
          width: "60vw",
          height: "140vh",
          backgroundColor: "#39FF14",
          transform: "rotate(15deg)",
          transformOrigin: "center",
          zIndex: 2,
          mixBlendMode: "normal",
          opacity: 0.9,
        }}
      />

      {/* Ticker tape text inside the slash */}
      <div
        style={{
          position: "absolute",
          top: "40vh",
          right: "-20vw",
          width: "140vh",
          transform: "rotate(-75deg)",
          transformOrigin: "center",
          zIndex: 3,
          display: "flex",
          whiteSpace: "nowrap",
          overflow: "hidden",
          color: "#0A0A0A",
          fontSize: "2vw",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          opacity: 0.7,
        }}
      >
        <span>
          PERFORMANCE METRICS // CARBON FIBER PLATE // RESPONSIVE FOAM //
          PERFORMANCE METRICS // CARBON FIBER PLATE //
        </span>
      </div>

      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "5vw",
          zIndex: 4,
        }}
      >
        <div
          style={{
            fontSize: "1vw",
            fontWeight: 800,
            color: "#39FF14",
            letterSpacing: "0.2em",
            marginBottom: "1vh",
          }}
        >
          // DATA_ANALYSIS
        </div>
        <div
          style={{
            fontSize: "6vw",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.04em",
            textTransform: "uppercase",
          }}
        >
          TECH<br />SPECS
        </div>
      </div>

      {/* Metrics Grid */}
      <div
        style={{
          position: "absolute",
          top: "40vh",
          left: "5vw",
          width: "50vw",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4vh 2vw",
          zIndex: 5,
        }}
      >
        {/* Metric 1 */}
        <div style={{ borderTop: "2px solid rgba(255,255,255,0.2)", paddingTop: "2vh" }}>
          <div style={{ fontSize: "4vw", fontWeight: 900, color: "#39FF14", lineHeight: 1 }}>
            85%
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, marginTop: "1vh" }}>
            ENERGY RETURN
          </div>
          <div style={{ fontSize: "0.9vw", color: "#888", fontFamily: "'DM Sans', sans-serif", marginTop: "1vh" }}>
            Proprietary foam compound maximizes rebound.
          </div>
        </div>

        {/* Metric 2 */}
        <div style={{ borderTop: "2px solid rgba(255,255,255,0.2)", paddingTop: "2vh" }}>
          <div style={{ fontSize: "4vw", fontWeight: 900, color: "#ffffff", lineHeight: 1 }}>
            210<span style={{ fontSize: "2vw" }}>g</span>
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, marginTop: "1vh" }}>
            ULTRALIGHT MASS
          </div>
          <div style={{ fontSize: "0.9vw", color: "#888", fontFamily: "'DM Sans', sans-serif", marginTop: "1vh" }}>
            Stripped down upper reduces fatigue.
          </div>
        </div>

        {/* Metric 3 */}
        <div style={{ borderTop: "2px solid rgba(255,255,255,0.2)", paddingTop: "2vh" }}>
          <div style={{ fontSize: "4vw", fontWeight: 900, color: "#ffffff", lineHeight: 1 }}>
            4.2<span style={{ fontSize: "2vw" }}>mm</span>
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, marginTop: "1vh" }}>
            DROP OFFSET
          </div>
          <div style={{ fontSize: "0.9vw", color: "#888", fontFamily: "'DM Sans', sans-serif", marginTop: "1vh" }}>
            Engineered for forefoot strikers.
          </div>
        </div>

        {/* Metric 4 */}
        <div style={{ borderTop: "2px solid #39FF14", paddingTop: "2vh" }}>
          <div style={{ fontSize: "4vw", fontWeight: 900, color: "#39FF14", lineHeight: 1 }}>
            100+
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, marginTop: "1vh" }}>
            PROTOTYPES
          </div>
          <div style={{ fontSize: "0.9vw", color: "#888", fontFamily: "'DM Sans', sans-serif", marginTop: "1vh" }}>
            Iterative design process for perfection.
          </div>
        </div>
      </div>

      {/* Target reticle */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          right: "20vw",
          width: "4vw",
          height: "4vw",
          zIndex: 5,
          opacity: 0.5,
        }}
      >
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", backgroundColor: "#0A0A0A" }} />
        <div style={{ position: "absolute", left: "50%", top: 0, bottom: 0, width: "1px", backgroundColor: "#0A0A0A" }} />
      </div>

      {/* Technical Details */}
      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          right: "5vw",
          zIndex: 5,
          textAlign: "right",
          color: "#0A0A0A"
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontFamily: "'Courier New', monospace",
            fontWeight: 800,
            letterSpacing: "0.1em",
          }}
        >
          SYS.DIAGNOSTIC: OK
          <br />
          TENSION_CAL: [||||||||||] 100%
        </div>
      </div>

      {/* Page Number */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          right: "5vw",
          zIndex: 5,
          fontSize: "1vw",
          fontWeight: 700,
          color: "#0A0A0A",
          letterSpacing: "0.2em",
        }}
      >
        03
      </div>
      
      {/* Distressed / Technical Details */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "5vw",
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          gap: "2vw",
        }}
      >
        <div
          style={{
            fontSize: "1vw",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
          }}
        >
          LIMITED DROP • 03.26
        </div>
        <div
          style={{
            width: "5vw",
            height: "2px",
            backgroundColor: "#39FF14",
          }}
        />
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/SneakerDropPage4.tsx`)

```tsx
export function SneakerDropPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0A0A0A",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#ffffff",
      }}
    >
      {/* Background noise / texture approximation */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px)",
          backgroundSize: "2vw 2vw",
          zIndex: 1,
        }}
      />

      {/* Massive centered slash */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "-10vw",
          width: "120vw",
          height: "70vh",
          backgroundColor: "#39FF14",
          transform: "rotate(-5deg)",
          transformOrigin: "center",
          zIndex: 2,
          mixBlendMode: "normal",
        }}
      />

      {/* Ticker tape text inside the slash */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "-5vw",
          width: "110vw",
          transform: "rotate(-5deg)",
          transformOrigin: "center",
          zIndex: 3,
          display: "flex",
          whiteSpace: "nowrap",
          overflow: "hidden",
          color: "#0A0A0A",
          fontSize: "1.5vw",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          opacity: 0.5,
        }}
      >
        <span>
          JOIN THE WAITLIST // JOIN THE WAITLIST // JOIN THE WAITLIST // JOIN THE WAITLIST //
        </span>
      </div>
      
      <div
        style={{
          position: "absolute",
          bottom: "20vh",
          left: "-5vw",
          width: "110vw",
          transform: "rotate(-5deg)",
          transformOrigin: "center",
          zIndex: 3,
          display: "flex",
          whiteSpace: "nowrap",
          overflow: "hidden",
          color: "#0A0A0A",
          fontSize: "1.5vw",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          opacity: 0.5,
        }}
      >
        <span>
          DON'T MISS OUT // DON'T MISS OUT // DON'T MISS OUT // DON'T MISS OUT // DON'T MISS OUT //
        </span>
      </div>

      {/* Centered CTA Content */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "1.5vw",
            fontWeight: 800,
            color: "#0A0A0A",
            letterSpacing: "0.3em",
            marginBottom: "2vh",
          }}
        >
          // ACCESS_GRANTED
        </div>
        
        <div
          style={{
            fontSize: "12vw",
            fontWeight: 900,
            lineHeight: 0.8,
            letterSpacing: "-0.04em",
            color: "#0A0A0A",
            textTransform: "uppercase",
            textShadow: "0 1vh 2vh rgba(0,0,0,0.2)",
            marginBottom: "4vh",
          }}
        >
          SECURE
          <br />
          YOUR PAIR
        </div>

        <div
          style={{
            display: "flex",
            gap: "2vw",
            marginTop: "2vh",
          }}
        >
          <div
            style={{
              padding: "2vh 4vw",
              backgroundColor: "#0A0A0A",
              color: "#39FF14",
              fontSize: "1.2vw",
              fontWeight: 900,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "2px solid #0A0A0A",
              cursor: "pointer",
            }}
          >
            ENTER RAFFLE
          </div>
          <div
            style={{
              padding: "2vh 4vw",
              backgroundColor: "transparent",
              color: "#0A0A0A",
              fontSize: "1.2vw",
              fontWeight: 900,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "2px solid #0A0A0A",
              cursor: "pointer",
            }}
          >
            VIEW GALLERY
          </div>
        </div>
      </div>

      {/* Abstract technical elements */}
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "10vw",
          width: "8vw",
          height: "8vw",
          border: "2px solid #39FF14",
          borderRadius: "50%",
          zIndex: 1,
          opacity: 0.3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "1.5vw",
            height: "1.5vw",
            backgroundColor: "#39FF14",
            borderRadius: "50%",
          }}
        />
      </div>

      {/* Footer Info */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "5vw",
          right: "5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 5,
        }}
      >
        <div
          style={{
            fontSize: "0.9vw",
            color: "#666",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.1em",
            display: "flex",
            flexDirection: "column",
            gap: "0.5vh",
          }}
        >
          <div>RELEASE: 03.26.24 @ 10:00AM EST</div>
          <div>LOCATION: VELO-SNKRS.COM</div>
        </div>

        <div
          style={{
            fontSize: "1vw",
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "0.2em",
          }}
        >
          04
        </div>
      </div>
    </div>
  );
}
```
