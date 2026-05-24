# Aurora Expedition

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "AuroraExpedition" template embodies a modern and ethereal aesthetic, reminiscent of the northern lights. It features a solid black background color (#000000) with a background image of northern lights over snowy mountains located at "/__mockup/images/photo-aurora.png". The text color is pure white (#FFFFFF), and a bottom gradient overlay uses a linear gradient from rgba(0,0,20,0.5) to transparent for enhanced readability. The font family used is 'Inter', sans-serif, with varying weights for different text elements, including a bold 8vw for the main title "POLARIS". Key layout elements include a centered title, a decorative horizontal line in white (#FFFFFF), and a footer with a lower opacity for subtlety. The overall aesthetic feel can be described as "mystical and modern."

## Source Code

**Component:** `AuroraExpedition`

### Slide 1 — Title (`slide-styles/AuroraExpedition.tsx`)

```tsx
export function AuroraExpedition() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#FFFFFF",
        backgroundColor: "#000000",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/images/photo-aurora.png"
        alt="Northern lights over snowy mountains"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      
      {/* Bottom Gradient for Text Readability */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "40vh",
          background: "linear-gradient(to top, rgba(0,0,20,0.5), transparent)",
          zIndex: 2,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "4vh 4vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1vw",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          <div>Example Company</div>
          <div>2026</div>
        </div>

        {/* Center Content (Bottom Center) */}
        <div
          style={{
            position: "absolute",
            bottom: "8vh",
            left: 0,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "8vw",
              fontWeight: 200,
              letterSpacing: "0.2em",
              margin: 0,
              lineHeight: 1,
              textTransform: "uppercase",
              transform: "translateX(0.1em)", // optical centering due to letter-spacing
            }}
          >
            POLARIS
          </h1>
          
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#FFFFFF",
              margin: "3vh 0",
              opacity: 0.8,
            }}
          />

          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 300,
              letterSpacing: "0.1em",
              margin: 0,
              opacity: 0.9,
            }}
          >
            Navigate beyond the horizon.
          </p>
        </div>

        {/* Bottom Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            fontSize: "0.8vw",
            fontWeight: 400,
            letterSpacing: "0.05em",
            opacity: 0.4,
          }}
        >
          Example Company, Inc. / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/AuroraExpeditionPage2.tsx`)

```tsx
export function AuroraExpeditionPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#FFFFFF",
        backgroundColor: "#0A0A14",
        boxSizing: "border-box",
      }}
    >
      {/* Subtle background photo */}
      <img
        src="/__mockup/images/photo-aurora.png"
        alt="Aurora"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          opacity: 0.15,
          zIndex: 0,
          filter: "grayscale(50%)",
        }}
      />

      {/* Faint aurora-colored gradient in top-right */}
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          right: "-20vw",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100, 255, 150, 0.05) 0%, rgba(150, 50, 255, 0.05) 50%, transparent 70%)",
          filter: "blur(8vw)",
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.7,
            marginBottom: "15vh",
          }}
        >
          Expedition Routes
        </div>

        {/* Expeditions Container */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "10vh",
            marginLeft: "10vw",
            flex: 1,
          }}
        >
          {/* Vertical Route Line */}
          <div
            style={{
              position: "absolute",
              top: "2vh",
              bottom: "2vh",
              left: 0,
              width: "1px",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          />

          {/* Expedition 1 */}
          <div style={{ position: "relative", paddingLeft: "4vw" }}>
            {/* Dot Marker */}
            <div
              style={{
                position: "absolute",
                left: "-0.2vw",
                top: "1.2vh",
                width: "0.5vw",
                height: "0.5vw",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            />
            <h2
              style={{
                fontSize: "2vw",
                fontWeight: 600,
                letterSpacing: "0.1em",
                margin: "0 0 2vh 0",
                textTransform: "uppercase",
              }}
            >
              Northern Lights Chase
            </h2>
            <div
              style={{
                width: "15vw",
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                margin: "0 0 2vh 0",
              }}
            />
            <p
              style={{
                fontSize: "1vw",
                fontWeight: 200,
                letterSpacing: "0.05em",
                margin: 0,
                opacity: 0.8,
              }}
            >
              7 days — Advanced — October–March
            </p>
          </div>

          {/* Expedition 2 */}
          <div style={{ position: "relative", paddingLeft: "4vw" }}>
            {/* Dot Marker */}
            <div
              style={{
                position: "absolute",
                left: "-0.2vw",
                top: "1.2vh",
                width: "0.5vw",
                height: "0.5vw",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            />
            <h2
              style={{
                fontSize: "2vw",
                fontWeight: 600,
                letterSpacing: "0.1em",
                margin: "0 0 2vh 0",
                textTransform: "uppercase",
              }}
            >
              Glacier Traverse
            </h2>
            <div
              style={{
                width: "15vw",
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                margin: "0 0 2vh 0",
              }}
            />
            <p
              style={{
                fontSize: "1vw",
                fontWeight: 200,
                letterSpacing: "0.05em",
                margin: 0,
                opacity: 0.8,
              }}
            >
              5 days — Moderate — June–September
            </p>
          </div>

          {/* Expedition 3 */}
          <div style={{ position: "relative", paddingLeft: "4vw" }}>
            {/* Dot Marker */}
            <div
              style={{
                position: "absolute",
                left: "-0.2vw",
                top: "1.2vh",
                width: "0.5vw",
                height: "0.5vw",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
              }}
            />
            <h2
              style={{
                fontSize: "2vw",
                fontWeight: 600,
                letterSpacing: "0.1em",
                margin: "0 0 2vh 0",
                textTransform: "uppercase",
              }}
            >
              Midnight Sun Trek
            </h2>
            <div
              style={{
                width: "15vw",
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                margin: "0 0 2vh 0",
              }}
            />
            <p
              style={{
                fontSize: "1vw",
                fontWeight: 200,
                letterSpacing: "0.05em",
                margin: 0,
                opacity: 0.8,
              }}
            >
              10 days — Beginner — May–July
            </p>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.05em",
            opacity: 0.5,
            marginTop: "auto",
          }}
        >
          <div>02</div>
          <div>Example Company, Inc. / Confidential</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/AuroraExpeditionPage3.tsx`)

```tsx
export function AuroraExpeditionPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#FFFFFF",
        backgroundColor: "#0A0A14",
        boxSizing: "border-box",
      }}
    >
      {/* Subtle background photo */}
      <img
        src="/__mockup/images/photo-aurora.png"
        alt="Aurora background"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          opacity: 0.1,
          zIndex: 0,
          filter: "grayscale(70%) blur(4px)",
        }}
      />

      {/* Faint aurora-colored gradient in top-left */}
      <div
        style={{
          position: "absolute",
          top: "-30vh",
          left: "-10vw",
          width: "70vw",
          height: "70vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100, 255, 150, 0.04) 0%, rgba(100, 150, 255, 0.04) 50%, transparent 70%)",
          filter: "blur(10vw)",
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            opacity: 0.7,
            marginBottom: "10vh",
          }}
        >
          Expedition Data
        </div>

        {/* Main Data Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flex: 1,
            padding: "0 2vw",
          }}
        >
          {/* Left Text Block */}
          <div style={{ width: "35%" }}>
            <h2
              style={{
                fontSize: "3.5vw",
                fontWeight: 200,
                letterSpacing: "0.05em",
                margin: "0 0 4vh 0",
                lineHeight: 1.2,
              }}
            >
              SEASONAL PROBABILITIES
            </h2>
            <div
              style={{
                width: "4vw",
                height: "1px",
                backgroundColor: "#FFFFFF",
                margin: "0 0 4vh 0",
                opacity: 0.5,
              }}
            />
            <p
              style={{
                fontSize: "1.1vw",
                fontWeight: 300,
                letterSpacing: "0.05em",
                lineHeight: 1.6,
                margin: 0,
                opacity: 0.8,
              }}
            >
              Solar activity reaches its peak during the equinox months. Optimal viewing conditions are carefully modeled to maximize successful sightings across all expedition routes.
            </p>
          </div>

          {/* Right Data Visualization */}
          <div style={{ width: "50%", display: "flex", flexDirection: "column", gap: "6vh" }}>
            
            {/* Stat 1 */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5vh" }}>
                <span style={{ fontSize: "1vw", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.9 }}>October - March</span>
                <span style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.1em" }}>94%</span>
              </div>
              <div style={{ width: "100%", height: "2px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                <div style={{ width: "94%", height: "100%", backgroundColor: "#FFFFFF", boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }} />
              </div>
            </div>

            {/* Stat 2 */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5vh" }}>
                <span style={{ fontSize: "1vw", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.9 }}>September & April</span>
                <span style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.1em" }}>72%</span>
              </div>
              <div style={{ width: "100%", height: "2px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                <div style={{ width: "72%", height: "100%", backgroundColor: "#FFFFFF" }} />
              </div>
            </div>

            {/* Stat 3 */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5vh" }}>
                <span style={{ fontSize: "1vw", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.9 }}>Clear Sky Probability</span>
                <span style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.1em" }}>85%</span>
              </div>
              <div style={{ width: "100%", height: "2px", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>
                <div style={{ width: "85%", height: "100%", backgroundColor: "#FFFFFF" }} />
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.05em",
            opacity: 0.5,
            marginTop: "auto",
          }}
        >
          <div>03</div>
          <div>Example Company, Inc. / Confidential</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/AuroraExpeditionPage4.tsx`)

```tsx
export function AuroraExpeditionPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#FFFFFF",
        backgroundColor: "#000000",
        boxSizing: "border-box",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/images/photo-aurora.png"
        alt="Northern lights"
        style={{
          position: "absolute",
          inset: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.4,
        }}
      />
      
      {/* Overlay Gradient for Focus */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at center, rgba(0,0,0,0.2) 0%, #000000 80%)",
          zIndex: 2,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "4vh 4vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1vw",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          <div>Example Company</div>
          <div>Join Us</div>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            flex: 1,
          }}
        >
          <div
            style={{
              width: "1px",
              height: "8vh",
              backgroundColor: "#FFFFFF",
              marginBottom: "4vh",
              opacity: 0.5,
            }}
          />

          <h2
            style={{
              fontSize: "5vw",
              fontWeight: 200,
              letterSpacing: "0.15em",
              margin: 0,
              lineHeight: 1.1,
              textTransform: "uppercase",
              transform: "translateX(0.075em)", // optical centering
            }}
          >
            THE JOURNEY
            <br />
            BEGINS
          </h2>
          
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 300,
              letterSpacing: "0.1em",
              margin: "4vh 0 6vh 0",
              opacity: 0.8,
            }}
          >
            Secure your place under the lights.
          </p>

          <div
            style={{
              padding: "1.5vh 3vw",
              border: "1px solid rgba(255, 255, 255, 0.4)",
              fontSize: "0.9vw",
              fontWeight: 400,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Apply Now
          </div>
        </div>

        {/* Bottom Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: "0.8vw",
            fontWeight: 400,
            letterSpacing: "0.05em",
            opacity: 0.4,
          }}
        >
          <div>04</div>
          <div>Example Company, Inc. / Confidential</div>
        </div>
      </div>
    </div>
  );
}
```
