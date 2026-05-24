# Motorsport

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "Motorsport" template features a sleek, high-energy aesthetic that embodies the excitement of racing. The background color is solid black (#000000), complemented by a full-bleed background image of an F1 racecar at night located at "/__mockup/images/photo-racecar.png". A subtle dark gradient at the bottom, transitioning from rgba(0,0,0,0.8) to transparent, enhances readability. Text elements utilize the 'Inter' font for the company name and year, both in a striking red (#E11D48), while the subtitle and the massive "APEX" title are rendered in white (#ffffff). Key layout elements include a racing stripe in red (#E11D48) and a footer in a semi-transparent white (rgba(255, 255, 255, 0.5)), creating a dynamic and modern feel. Overall, the aesthetic is best described as "dynamic, bold, modern."

## Source Code

**Component:** `Motorsport`

### Slide 1 — Title (`slide-styles/Motorsport.tsx`)

```tsx
export function Motorsport() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Full Bleed Background Image */}
      <img
        src="/__mockup/images/photo-racecar.png"
        alt="F1 racecar at night"
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

      {/* Subtle dark gradient at the bottom for readability */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "40vh",
          background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
          zIndex: 2,
        }}
      />

      {/* Top Corners: Company & Year */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "4vw",
          zIndex: 3,
          color: "#E11D48",
          fontSize: "1vw",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        Example Company
      </div>

      <div
        style={{
          position: "absolute",
          top: "4vh",
          right: "4vw",
          zIndex: 3,
          color: "#E11D48",
          fontSize: "1vw",
          fontWeight: 700,
          letterSpacing: "0.2em",
        }}
      >
        2026
      </div>

      {/* Racing Stripe */}
      <div
        style={{
          position: "absolute",
          top: "70vh",
          left: 0,
          width: "100vw",
          height: "0.3vh",
          backgroundColor: "#E11D48",
          zIndex: 3,
        }}
      />

      {/* Subtitle above the stripe */}
      <div
        style={{
          position: "absolute",
          bottom: "31vh", // just above the 70vh stripe
          left: "4vw",
          zIndex: 3,
          color: "#ffffff",
          fontSize: "1.2vw",
          fontWeight: 600,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
        }}
      >
        Performance Engineering
      </div>

      {/* MASSIVE "APEX" Title */}
      <div
        style={{
          position: "absolute",
          bottom: "-4vh", // partially cropped by slide edge
          left: "2vw",
          zIndex: 3,
          color: "#ffffff",
          fontSize: "18vw",
          fontWeight: 900,
          lineHeight: 0.8,
          letterSpacing: "-0.04em",
          transform: "skewX(-3deg)",
          transformOrigin: "bottom left",
        }}
      >
        APEX
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "2vh",
          right: "4vw",
          zIndex: 3,
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.8vw",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.05em",
        }}
      >
        Example Company, Inc. / Confidential
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/MotorsportPage2.tsx`)

```tsx
export function MotorsportPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0A0A0A",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Image with Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          opacity: 0.15,
        }}
      >
        <img
          src="/__mockup/images/photo-racecar.png"
          alt="Racecar background"
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            filter: "grayscale(100%) contrast(120%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.4) 100%)",
          }}
        />
      </div>

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: "6vh",
          left: "6vw",
          zIndex: 3,
          color: "#E11D48",
          fontSize: "1vw",
          fontWeight: 900,
          letterSpacing: "0.4em",
          textTransform: "uppercase",
        }}
      >
        PERFORMANCE DATA
      </div>

      {/* Top right Page Number */}
      <div
        style={{
          position: "absolute",
          top: "6vh",
          right: "6vw",
          zIndex: 3,
          color: "rgba(255,255,255,0.3)",
          fontSize: "1vw",
          fontWeight: 900,
        }}
      >
        02
      </div>

      {/* Grid Layout Container */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "6vw",
          width: "88vw",
          height: "70vh",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        {/* Quadrant 1 */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4vw",
            borderRight: "1px solid #E11D48",
            borderBottom: "1px solid #E11D48",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "8vw",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              transform: "skewX(-5deg)",
            }}
          >
            3.2<span style={{ fontSize: "4vw", color: "#E11D48" }}>s</span>
          </div>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "1.2vw",
              fontWeight: 700,
              marginTop: "2vh",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            0-100 KM/H
          </div>
        </div>

        {/* Quadrant 2 */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4vw",
            borderBottom: "1px solid #E11D48",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "8vw",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              transform: "skewX(-5deg)",
            }}
          >
            847<span style={{ fontSize: "4vw", color: "#E11D48" }}>HP</span>
          </div>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "1.2vw",
              fontWeight: 700,
              marginTop: "2vh",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Peak Power
          </div>
        </div>

        {/* Quadrant 3 */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4vw",
            borderRight: "1px solid #E11D48",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "8vw",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              transform: "skewX(-5deg)",
            }}
          >
            1,200<span style={{ fontSize: "4vw", color: "#E11D48" }}>KG</span>
          </div>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "1.2vw",
              fontWeight: 700,
              marginTop: "2vh",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Dry Weight
          </div>
        </div>

        {/* Quadrant 4 */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "4vw",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "8vw",
              fontWeight: 900,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              transform: "skewX(-5deg)",
            }}
          >
            342<span style={{ fontSize: "4vw", color: "#E11D48" }}>KM/H</span>
          </div>
          <div
            style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "1.2vw",
              fontWeight: 700,
              marginTop: "2vh",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Top Speed
          </div>
        </div>
      </div>

      {/* Red Racing Stripe Center (Horizontal) */}
      <div
        style={{
          position: "absolute",
          top: "50vh",
          left: 0,
          width: "100vw",
          height: "2px",
          backgroundColor: "#E11D48",
          zIndex: 4,
          boxShadow: "0 0 15px rgba(225, 29, 72, 0.8)",
        }}
      />

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "6vw",
          zIndex: 3,
          color: "rgba(255, 255, 255, 0.3)",
          fontSize: "0.8vw",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Example Company, Inc. / Confidential
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/MotorsportPage3.tsx`)

```tsx
export function MotorsportPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#080808",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "4vw",
          zIndex: 3,
          color: "#E11D48",
          fontSize: "1vw",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        Example Company
      </div>

      <div
        style={{
          position: "absolute",
          top: "4vh",
          right: "4vw",
          zIndex: 3,
          color: "#E11D48",
          fontSize: "1vw",
          fontWeight: 700,
          letterSpacing: "0.2em",
        }}
      >
        2026
      </div>

      {/* Grid Pattern Background for Data Slide */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "linear-gradient(rgba(225, 29, 72, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(225, 29, 72, 0.05) 1px, transparent 1px)",
          backgroundSize: "4vw 4vw",
          zIndex: 1,
        }}
      />
      
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "4vw",
          zIndex: 3,
          color: "#ffffff",
          fontSize: "4.5vw",
          fontWeight: 900,
          letterSpacing: "-0.02em",
          transform: "skewX(-3deg)",
          transformOrigin: "bottom left",
        }}
      >
        TELEMETRY DATA
      </div>

      <div
        style={{
          position: "absolute",
          top: "23vh",
          left: "4vw",
          width: "15vw",
          height: "0.3vh",
          backgroundColor: "#E11D48",
          zIndex: 3,
        }}
      />

      {/* Data Cards */}
      <div
        style={{
          position: "absolute",
          top: "32vh",
          left: "4vw",
          width: "92vw",
          display: "flex",
          gap: "3vw",
          zIndex: 3,
        }}
      >
        {/* Metric 1 */}
        <div style={{ flex: 1, backgroundColor: "#111111", borderTop: "0.4vh solid #E11D48", padding: "3vw", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
          <div style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.9vw", fontWeight: 600, letterSpacing: "0.2em", marginBottom: "2vh" }}>TOP SPEED</div>
          <div style={{ color: "#ffffff", fontSize: "5.5vw", fontWeight: 900, fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>342</div>
          <div style={{ color: "#E11D48", fontSize: "1.5vw", fontWeight: 700, marginTop: "1vh" }}>KM/H</div>
        </div>

        {/* Metric 2 */}
        <div style={{ flex: 1, backgroundColor: "#111111", borderTop: "0.4vh solid #ffffff", padding: "3vw", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
          <div style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.9vw", fontWeight: 600, letterSpacing: "0.2em", marginBottom: "2vh" }}>DOWNFORCE</div>
          <div style={{ color: "#ffffff", fontSize: "5.5vw", fontWeight: 900, fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>8.5</div>
          <div style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "1.5vw", fontWeight: 700, marginTop: "1vh" }}>TONNES</div>
        </div>

        {/* Metric 3 */}
        <div style={{ flex: 1, backgroundColor: "#111111", borderTop: "0.4vh solid #E11D48", padding: "3vw", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
          <div style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.9vw", fontWeight: 600, letterSpacing: "0.2em", marginBottom: "2vh" }}>LATERAL G</div>
          <div style={{ color: "#ffffff", fontSize: "5.5vw", fontWeight: 900, fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>6.2</div>
          <div style={{ color: "#E11D48", fontSize: "1.5vw", fontWeight: 700, marginTop: "1vh" }}>PEAK</div>
        </div>
      </div>

      {/* Chart mock */}
      <div
        style={{
          position: "absolute",
          top: "70vh",
          left: "4vw",
          width: "92vw",
          height: "18vh",
          zIndex: 3,
          display: "flex",
          alignItems: "flex-end",
          gap: "0.8vw",
        }}
      >
        {[40, 60, 45, 80, 50, 90, 100, 75, 85, 60, 40, 30, 55, 70, 65, 85].map((h, i) => (
          <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i % 4 === 0 ? "#E11D48" : "rgba(255,255,255,0.08)", transition: "height 0.3s ease" }} />
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "2vh",
          left: "4vw",
          zIndex: 3,
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.8vw",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.05em",
        }}
      >
        03
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "2vh",
          right: "4vw",
          zIndex: 3,
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.8vw",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.05em",
        }}
      >
        Example Company, Inc. / Confidential
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/MotorsportPage4.tsx`)

```tsx
export function MotorsportPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000000",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Image heavily tinted */}
      <img
        src="/__mockup/images/photo-racecar.png"
        alt="F1 racecar at night"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.25,
          filter: "grayscale(100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at center, transparent 0%, #000000 85%)",
          zIndex: 2,
        }}
      />

      {/* Top Corners */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "4vw",
          zIndex: 3,
          color: "#E11D48",
          fontSize: "1vw",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
        }}
      >
        Example Company
      </div>

      <div
        style={{
          position: "absolute",
          top: "4vh",
          right: "4vw",
          zIndex: 3,
          color: "#E11D48",
          fontSize: "1vw",
          fontWeight: 700,
          letterSpacing: "0.2em",
        }}
      >
        2026
      </div>

      {/* Center content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#E11D48",
            fontSize: "1.2vw",
            fontWeight: 600,
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            marginBottom: "2vh",
          }}
        >
          Join The Grid
        </div>

        <div
          style={{
            color: "#ffffff",
            fontSize: "14vw",
            fontWeight: 900,
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            transform: "skewX(-3deg)",
            marginBottom: "8vh",
            whiteSpace: "nowrap",
          }}
        >
          ACCELERATE
        </div>

        <div
          style={{
            backgroundColor: "#E11D48",
            color: "#ffffff",
            padding: "2.5vh 5vw",
            fontSize: "1.2vw",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            border: "none",
            cursor: "pointer",
            transform: "skewX(-10deg)",
            boxShadow: "0 10px 30px rgba(225, 29, 72, 0.3)",
          }}
        >
          <div style={{ transform: "skewX(10deg)" }}>
            Partner With Us
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "2vh",
          left: "4vw",
          zIndex: 3,
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.8vw",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.05em",
        }}
      >
        04
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "2vh",
          right: "4vw",
          zIndex: 3,
          color: "rgba(255, 255, 255, 0.5)",
          fontSize: "0.8vw",
          fontFamily: "'Courier New', monospace",
          letterSpacing: "0.05em",
        }}
      >
        Example Company, Inc. / Confidential
      </div>
    </div>
  );
}
```
