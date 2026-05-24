# Luxury Watch

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "LuxuryWatch" template presents a sleek, modern aesthetic characterized by a high-contrast black and gold color scheme. The background color is solid black (#000000), while the text and accent colors include a soft gold (#B8956A) and white (#FFFFFF). The font families used are 'Inter' for general text and 'Playfair Display' for the main heading, emphasizing elegance and sophistication. Key layout elements include a left content area that occupies 40% of the width, featuring a structured arrangement of text and decorative lines, and a right image area showcasing a luxury watch with a soft gradient overlay to blend edges. The overall aesthetic feel is "elegant luxury."

## Source Code

**Component:** `LuxuryWatch`

### Slide 1 — Title (`slide-styles/LuxuryWatch.tsx`)

```tsx
export function LuxuryWatch() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Left Content Area */}
      <div
        style={{
          width: "40vw",
          height: "100vh",
          padding: "6vw 4vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
        <div
          style={{
            color: "#B8956A",
            fontSize: "0.7vw",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            fontWeight: 300,
          }}
        >
          Example Company
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "7vw",
              fontWeight: 400,
              color: "#FFFFFF",
              letterSpacing: "0.1em",
              margin: 0,
              lineHeight: 1,
              marginLeft: "-0.5vw", // optical alignment
            }}
          >
            CHRONOS
          </h1>
          <div
            style={{
              color: "#B8956A",
              fontSize: "0.85vw",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginTop: "2vh",
              fontWeight: 400,
            }}
          >
            Precision. Heritage. Craft.
          </div>
          <div
            style={{
              width: "6vw",
              height: "1px",
              backgroundColor: "#B8956A",
              marginTop: "4vh",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#B8956A",
            fontSize: "0.6vw",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 300,
            opacity: 0.8,
          }}
        >
          <span>Est. 2026</span>
          <span>Example Company, Inc. / Confidential</span>
        </div>
      </div>

      {/* Right Image Area */}
      <div style={{ width: "60vw", height: "100vh", position: "relative" }}>
        {/* Soft gradient to blend the harsh edge into black if the photo has a slight edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "10vw",
            background: "linear-gradient(to right, #000000 0%, transparent 100%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <img
          src="/__mockup/images/photo-watch.png"
          alt="Luxury Watch"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "left center",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/LuxuryWatchPage2.tsx`)

```tsx
export function LuxuryWatchPage2() {
  const specs = [
    { label: "Caliber", value: "Manufacture Movement" },
    { label: "Power Reserve", value: "72 Hours" },
    { label: "Case", value: "40mm Platinum" },
    { label: "Water Resistance", value: "30m" },
    { label: "Crystal", value: "Sapphire" },
    { label: "Strap", value: "Hand-stitched Alligator" },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Left Content Area */}
      <div
        style={{
          width: "60vw",
          height: "100vh",
          padding: "6vw 4vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
          <div
            style={{
              color: "#B8956A",
              fontSize: "0.7vw",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              fontWeight: 300,
              marginBottom: "4vh",
            }}
          >
            Technical Details
          </div>

          <div style={{ display: "flex", flexDirection: "column", width: "80%" }}>
            {specs.map((spec, index) => (
              <div key={index} style={{ marginBottom: "2.5vh" }}>
                <div style={{ display: "flex", flexDirection: "column", marginBottom: "1vh" }}>
                  <span
                    style={{
                      color: "#B8956A",
                      fontSize: "0.6vw",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "0.5vh",
                      opacity: 0.9,
                    }}
                  >
                    {spec.label}
                  </span>
                  <span
                    style={{
                      color: "#FFFFFF",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.5vw",
                      fontWeight: 400,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {spec.value}
                  </span>
                </div>
                {index < specs.length - 1 && (
                  <div
                    style={{
                      width: "100%",
                      height: "1px",
                      backgroundColor: "#B8956A",
                      opacity: 0.3,
                      marginTop: "1.5vh",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#B8956A",
            fontSize: "0.6vw",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 300,
            opacity: 0.8,
            alignItems: "center",
          }}
        >
          <span>EST. MMXXVI</span>
          <span>Example Company, Inc. / Confidential</span>
          <span>02</span>
        </div>
      </div>

      {/* Right Image Area */}
      <div style={{ width: "40vw", height: "100vh", position: "relative" }}>
        {/* Soft radial gradient behind the watch */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "30vw",
            height: "30vw",
            background: "radial-gradient(circle, rgba(184,149,106,0.15) 0%, rgba(0,0,0,0) 70%)",
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        {/* Soft edge gradient from black to transparent to blend left edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            width: "5vw",
            background: "linear-gradient(to right, #000000 0%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <img
          src="/__mockup/images/photo-watch.png"
          alt="Luxury Watch Details"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/LuxuryWatchPage3.tsx`)

```tsx
export function LuxuryWatchPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
        padding: "6vw 4vw",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5vw",
              fontWeight: 400,
              color: "#FFFFFF",
              letterSpacing: "0.05em",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Performance Metrics
          </h2>
          <div
            style={{
              color: "#B8956A",
              fontSize: "0.85vw",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginTop: "2vh",
              fontWeight: 400,
            }}
          >
            Engineering Excellence
          </div>
        </div>
        <div
          style={{
            color: "#B8956A",
            fontSize: "0.7vw",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            fontWeight: 300,
          }}
        >
          Example Company
        </div>
      </div>

      {/* Content */}
      <div style={{ display: "flex", flex: 1, gap: "4vw", alignItems: "center" }}>
        {/* Left Column - Stats */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "6vh" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "5vw",
                fontWeight: 400,
                color: "#B8956A",
                lineHeight: 1,
              }}
            >
              28,800
            </div>
            <div
              style={{
                color: "#FFFFFF",
                fontSize: "1vw",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: "1vh",
              }}
            >
              Vibrations Per Hour
            </div>
            <div
              style={{
                color: "#888888",
                fontSize: "0.9vw",
                lineHeight: 1.6,
                marginTop: "1.5vh",
                maxWidth: "80%",
              }}
            >
              Ensuring unparalleled accuracy and precision in every movement.
            </div>
          </div>

          <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(184, 149, 106, 0.3)" }} />

          <div style={{ display: "flex", gap: "4vw" }}>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "3vw",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                72h
              </div>
              <div
                style={{
                  color: "#B8956A",
                  fontSize: "0.8vw",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "1vh",
                }}
              >
                Power Reserve
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "3vw",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  lineHeight: 1,
                }}
              >
                300m
              </div>
              <div
                style={{
                  color: "#B8956A",
                  fontSize: "0.8vw",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: "1vh",
                }}
              >
                Water Resistance
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Visual representation */}
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {/* Abstract Circular Graphic representing a watch face / movement */}
          <div
            style={{
              width: "28vw",
              height: "28vw",
              borderRadius: "50%",
              border: "1px solid rgba(184, 149, 106, 0.2)",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "22vw",
                height: "22vw",
                borderRadius: "50%",
                border: "1px solid rgba(184, 149, 106, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "16vw",
                  height: "16vw",
                  borderRadius: "50%",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "radial-gradient(circle, rgba(184, 149, 106, 0.1) 0%, transparent 70%)",
                }}
              />
            </div>
            
            {/* Crosshairs */}
            <div style={{ position: "absolute", top: "10%", bottom: "10%", left: "50%", width: "1px", backgroundColor: "rgba(184, 149, 106, 0.15)", transform: "translateX(-50%)" }} />
            <div style={{ position: "absolute", left: "10%", right: "10%", top: "50%", height: "1px", backgroundColor: "rgba(184, 149, 106, 0.15)", transform: "translateY(-50%)" }} />
            
            {/* Markers */}
            <div style={{ position: "absolute", top: "-0.5vw", left: "50%", width: "0.2vw", height: "1vw", backgroundColor: "#B8956A", transform: "translateX(-50%)" }} />
            <div style={{ position: "absolute", bottom: "-0.5vw", left: "50%", width: "0.2vw", height: "1vw", backgroundColor: "#B8956A", transform: "translateX(-50%)" }} />
            <div style={{ position: "absolute", left: "-0.5vw", top: "50%", height: "0.2vw", width: "1vw", backgroundColor: "#B8956A", transform: "translateY(-50%)" }} />
            <div style={{ position: "absolute", right: "-0.5vw", top: "50%", height: "0.2vw", width: "1vw", backgroundColor: "#B8956A", transform: "translateY(-50%)" }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#B8956A",
          fontSize: "0.6vw",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontWeight: 300,
          opacity: 0.8,
          marginTop: "auto",
        }}
      >
        <span>Example Company, Inc. / Confidential</span>
        <span>03</span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/LuxuryWatchPage4.tsx`)

```tsx
export function LuxuryWatchPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#000000",
        fontFamily: "'Inter', sans-serif",
        padding: "6vw 4vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* Decorative lines */}
      <div style={{ position: "absolute", top: "10vh", left: 0, right: 0, height: "1px", backgroundColor: "rgba(184, 149, 106, 0.15)" }} />
      <div style={{ position: "absolute", bottom: "10vh", left: 0, right: 0, height: "1px", backgroundColor: "rgba(184, 149, 106, 0.15)" }} />
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div
          style={{
            color: "#B8956A",
            fontSize: "0.7vw",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            fontWeight: 300,
          }}
        >
          Example Company
        </div>
        <div
          style={{
            color: "#FFFFFF",
            fontSize: "0.7vw",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            fontWeight: 300,
            opacity: 0.5,
          }}
        >
          Discover The Collection
        </div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div
          style={{
            color: "#B8956A",
            fontSize: "1vw",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            marginBottom: "3vh",
            fontWeight: 400,
          }}
        >
          Begin Your Journey
        </div>
        
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6vw",
            fontWeight: 400,
            color: "#FFFFFF",
            letterSpacing: "0.05em",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Timeless Elegance
        </h2>
        
        <div
          style={{
            width: "4vw",
            height: "2px",
            backgroundColor: "#B8956A",
            margin: "4vh auto",
          }}
        />
        
        <div
          style={{
            display: "flex",
            gap: "4vw",
            marginTop: "2vh",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <span style={{ color: "#888888", fontSize: "0.8vw", letterSpacing: "0.1em", textTransform: "uppercase" }}>General Inquiries</span>
            <span style={{ color: "#FFFFFF", fontSize: "1.1vw", letterSpacing: "0.05em", fontFamily: "'Playfair Display', serif" }}>contact@example.com</span>
          </div>
          
          <div style={{ width: "1px", height: "4vh", backgroundColor: "rgba(184, 149, 106, 0.3)", alignSelf: "center" }} />
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <span style={{ color: "#888888", fontSize: "0.8vw", letterSpacing: "0.1em", textTransform: "uppercase" }}>Boutique Appointments</span>
            <span style={{ color: "#FFFFFF", fontSize: "1.1vw", letterSpacing: "0.05em", fontFamily: "'Playfair Display', serif" }}>+1 (555) 123-4567</span>
          </div>
        </div>
        
        <div
          style={{
            marginTop: "6vh",
            padding: "1.5vh 3vw",
            border: "1px solid #B8956A",
            color: "#B8956A",
            fontSize: "0.9vw",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          View Lookbook
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "#B8956A",
          fontSize: "0.6vw",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontWeight: 300,
          opacity: 0.8,
        }}
      >
        <span>Est. 2026</span>
        <span>04</span>
      </div>
    </div>
  );
}
```
