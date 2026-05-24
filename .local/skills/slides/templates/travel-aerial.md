# Travel Aerial

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "TravelAerial" template features a modern and sleek aesthetic, emphasizing a travel theme with an aerial view. The background color is solid black (#000000), overlaid with a radial gradient vignette that transitions from transparent to rgba(0,0,0,0.5). The text color is white (#FFFFFF), providing a stark contrast against the dark background. The font family used is 'Inter', sans-serif, which is applied throughout for a clean and contemporary look. Key layout elements include a full-screen background image of an ocean aerial view located at "/__mockup/images/photo-ocean-aerial.png", a central header with the word "BOUNDLESS" in large, bold text, and a footer that aligns to the bottom right. The overall aesthetic feel can be described as "elegant adventure."

## Source Code

**Component:** `TravelAerial`

### Slide 1 — Title (`slide-styles/TravelAerial.tsx`)

```tsx
export function TravelAerial() {
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
        src="/__mockup/images/photo-ocean-aerial.png"
        alt="Ocean Aerial"
        style={{
          position: "absolute",
          inset: 0,
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
          inset: 0,
          background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.5) 100%)",
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
            opacity: 0.8,
          }}
        >
          <div>Example Company</div>
          <div>2026</div>
        </div>

        {/* Center Content (Upper Third) */}
        <div
          style={{
            position: "absolute",
            top: "30vh",
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
              fontSize: "10vw",
              fontWeight: 800,
              letterSpacing: "0.15em",
              margin: 0,
              lineHeight: 1,
              textTransform: "uppercase",
              textShadow: "0 2vh 4vh rgba(0,0,0,0.3)",
              transform: "translateX(0.075em)", // optical centering due to letter-spacing
            }}
          >
            BOUNDLESS
          </h1>
          
          <div
            style={{
              width: "50px",
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
              letterSpacing: "0.2em",
              margin: 0,
              opacity: 0.9,
              textTransform: "uppercase",
              textShadow: "0 1vh 2vh rgba(0,0,0,0.3)",
            }}
          >
            Where the wild meets the infinite.
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
            opacity: 0.6,
          }}
        >
          Example Company, Inc. / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/TravelAerialPage2.tsx`)

```tsx
export function TravelAerialPage2() {
  const destinations = [
    {
      name: "ICELAND",
      coords: "64.1466°N",
      tagline: "Land of fire and ice",
    },
    {
      name: "PATAGONIA",
      coords: "48.8566°S",
      tagline: "The end of the world",
    },
    {
      name: "BALI",
      coords: "8.3405°S",
      tagline: "Island of the gods",
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#FFFFFF",
        backgroundColor: "#0D1117",
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
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          opacity: 0.6,
        }}
      >
        <div>Destinations</div>
        <div>02</div>
      </div>

      {/* Main Content - Typographic Wall */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
          paddingTop: "4vh",
          paddingBottom: "4vh",
        }}
      >
        {destinations.map((dest, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: index < destinations.length - 1 ? "4vh" : 0,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                paddingBottom: "2vh",
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: "6vw",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  lineHeight: 0.9,
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                }}
              >
                {dest.name}
              </h2>
              
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  textAlign: "right",
                  paddingBottom: "0.5vh",
                }}
              >
                <div
                  style={{
                    fontSize: "1.2vw",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    opacity: 0.9,
                    marginBottom: "0.5vh",
                  }}
                >
                  {dest.coords}
                </div>
                <div
                  style={{
                    fontSize: "1vw",
                    fontWeight: 400,
                    letterSpacing: "0.05em",
                    opacity: 0.6,
                  }}
                >
                  {dest.tagline}
                </div>
              </div>
            </div>
            
            {/* Horizontal Rule */}
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
            />
          </div>
        ))}
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
          opacity: 0.5,
        }}
      >
        <div>Example Company, Inc. / Confidential</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/TravelAerialPage3.tsx`)

```tsx
export function TravelAerialPage3() {
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
        src="/__mockup/images/photo-ocean-aerial.png"
        alt="Ocean Aerial"
        style={{
          position: "absolute",
          inset: 0,
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
          inset: 0,
          background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.5) 100%)",
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
            opacity: 0.8,
          }}
        >
          <div>Example Company</div>
          <div>2026</div>
        </div>

        {/* Center Content - Data/Visual */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "80%",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "2vw",
              fontWeight: 300,
              letterSpacing: "0.2em",
              margin: "0 0 8vh 0",
              opacity: 0.9,
              textTransform: "uppercase",
              textShadow: "0 1vh 2vh rgba(0,0,0,0.3)",
            }}
          >
            By The Numbers
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              gap: "4vw",
            }}
          >
            {[
              { label: "Oceans Mapped", value: "3.2M", desc: "Square miles of deep blue charted" },
              { label: "Vessels Deployed", value: "142", desc: "Autonomous drones currently active" },
              { label: "Data Points", value: "8.9B", desc: "Real-time telemetry gathered daily" }
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "4vh 2vw",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0))",
                  backdropFilter: "blur(4px)",
                  borderTop: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <div
                  style={{
                    fontSize: "5vw",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    marginBottom: "1vh",
                    textShadow: "0 1vh 2vh rgba(0,0,0,0.3)",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "1vw",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    marginBottom: "2vh",
                    opacity: 0.9,
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    fontSize: "0.9vw",
                    fontWeight: 300,
                    lineHeight: 1.5,
                    opacity: 0.7,
                  }}
                >
                  {stat.desc}
                </div>
              </div>
            ))}
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
            opacity: 0.6,
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

### Slide 4 (`slide-pages/TravelAerialPage4.tsx`)

```tsx
export function TravelAerialPage4() {
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
        src="/__mockup/images/photo-ocean-aerial.png"
        alt="Ocean Aerial"
        style={{
          position: "absolute",
          inset: 0,
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
          inset: 0,
          background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.7) 100%)",
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
            opacity: 0.8,
          }}
        >
          <div>Example Company</div>
          <div>2026</div>
        </div>

        {/* Center Content (Closing) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "6vw",
              fontWeight: 800,
              letterSpacing: "0.15em",
              margin: 0,
              lineHeight: 1.1,
              textTransform: "uppercase",
              textShadow: "0 2vh 4vh rgba(0,0,0,0.5)",
            }}
          >
            THE HORIZON<br />AWAITS
          </h1>
          
          <div
            style={{
              width: "50px",
              height: "1px",
              backgroundColor: "#FFFFFF",
              margin: "4vh 0",
              opacity: 0.8,
            }}
          />

          <p
            style={{
              fontSize: "1.5vw",
              fontWeight: 300,
              letterSpacing: "0.2em",
              margin: "0 0 6vh 0",
              opacity: 0.9,
              textTransform: "uppercase",
              textShadow: "0 1vh 2vh rgba(0,0,0,0.3)",
            }}
          >
            Ready to dive in?
          </p>

          <div
            style={{
              padding: "2vh 4vw",
              border: "1px solid rgba(255,255,255,0.4)",
              fontSize: "1vw",
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(4px)",
            }}
          >
            example.com/boundless
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
            opacity: 0.6,
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
