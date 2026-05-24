# Artisan Food

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The ArtisanFood template features a modern and elegant aesthetic, characterized by a dark and sophisticated style. The background color is a solid black (#111), complemented by a full-bleed background image of artisan sourdough bread on dark marble, located at "/__mockup/images/photo-food-bread.png". A gradient overlay is applied on the left side, transitioning from rgba(0,0,0,0.6) to transparent, enhancing text readability. Text colors include a soft white (#FFF8F0) for most text elements and a warm gold (#D4A86A) for accents, while the font families used are 'Inter' for body text and 'Playfair Display' for headings, creating a refined contrast. Key layout elements include a structured content container with a top-left quadrant for the main text and a bottom section for additional information, all arranged with ample padding and spacing for a clean presentation. The overall aesthetic feel can be described as "sophisticated elegance."

## Source Code

**Component:** `ArtisanFood`

### Slide 1 — Title (`slide-styles/ArtisanFood.tsx`)

```tsx
export function ArtisanFood() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#111",
      }}
    >
      {/* Background Image - FULL BLEED */}
      <img
        src="/__mockup/images/photo-food-bread.png"
        alt="Artisan sourdough bread on dark marble"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Gradient Overlay for Text Readability (Left side only) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(90deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 30%, transparent 60%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top Content: Top-left quadrant */}
        <div style={{ maxWidth: "45vw" }}>
          <div
            style={{
              color: "#FFF8F0",
              opacity: 0.8,
              fontSize: "1vw",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              marginBottom: "3vh",
            }}
          >
            Example Company
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6vw",
              lineHeight: 1.1,
              margin: 0,
              color: "#FFF8F0",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Hearth
            <br />
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "7vw",
                fontWeight: 300,
                color: "#D4A86A",
                fontStyle: "italic",
                marginRight: "1vw",
              }}
            >
              &
            </span>
            Grain
          </h1>

          <div
            style={{
              marginTop: "4vh",
              width: "3vw",
              height: "2px",
              backgroundColor: "#D4A86A",
              opacity: 0.8,
            }}
          />

          <p
            style={{
              marginTop: "4vh",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              color: "#FFF8F0",
              opacity: 0.9,
              margin: 0,
              fontWeight: 300,
              letterSpacing: "0.02em",
            }}
          >
            The honest craft of slow baking.
          </p>
        </div>

        {/* Bottom Content */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#FFF8F0",
              opacity: 0.5,
              fontSize: "0.8vw",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Example Company, Inc. / Confidential
          </div>
          
          <div
            style={{
              color: "#FFF8F0",
              opacity: 0.5,
              fontSize: "0.8vw",
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
            }}
          >
            2026
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ArtisanFoodPage2.tsx`)

```tsx
export function ArtisanFoodPage2() {
  const steps = [
    { num: "01", name: "Mill", desc: "Stone-ground heritage wheat" },
    { num: "02", name: "Ferment", desc: "72-hour natural levain" },
    { num: "03", name: "Shape", desc: "Hand-formed with intention" },
    { num: "04", name: "Bake", desc: "Wood-fired at 450°F" },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#2A1F14",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Top 40% Photo */}
      <div style={{ height: "40vh", width: "100vw", position: "relative" }}>
        <img
          src="/__mockup/images/photo-food-bread.png"
          alt="Artisan food process"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      {/* Bottom 60% */}
      <div
        style={{
          height: "60vh",
          width: "100vw",
          padding: "6vh 8vw",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          backgroundColor: "#2A1F14",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            color: "#FFF8F0",
            fontSize: "3vw",
            textAlign: "center",
            margin: "0 0 6vh 0",
            fontWeight: 400,
          }}
        >
          The Process
        </h2>

        {/* Process Steps Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            flex: 1,
            padding: "0 2vw",
            marginTop: "2vh",
          }}
        >
          {/* Connecting Line */}
          <div
            style={{
              position: "absolute",
              top: "2.5vw", // Half of the 5vw circle to center it
              left: "10vw",
              right: "10vw",
              height: "0",
              borderTop: "2px dashed #D4A86A",
              opacity: 0.4,
              zIndex: 0,
            }}
          />

          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "16vw",
                zIndex: 1,
              }}
            >
              {/* Gold Circle */}
              <div
                style={{
                  width: "5vw",
                  height: "5vw",
                  borderRadius: "50%",
                  backgroundColor: "#D4A86A",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#2A1F14",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.8vw",
                  fontWeight: 600,
                  marginBottom: "3vh",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                {step.num}
              </div>

              {/* Step Name */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#FFF8F0",
                  fontSize: "1.8vw",
                  margin: "0 0 1.5vh 0",
                  fontWeight: 400,
                }}
              >
                {step.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#FFF8F0",
                  opacity: 0.7,
                  fontSize: "0.9vw",
                  textAlign: "center",
                  margin: 0,
                  lineHeight: 1.5,
                  fontWeight: 300,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "4vh",
            left: "8vw",
            right: "8vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              color: "#FFF8F0",
              opacity: 0.5,
              fontSize: "0.8vw",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Example Company, Inc. / Confidential
          </div>
          <div
            style={{
              color: "#FFF8F0",
              opacity: 0.5,
              fontSize: "1vw",
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
            }}
          >
            02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ArtisanFoodPage3.tsx`)

```tsx
export function ArtisanFoodPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#111",
      }}
    >
      <img
        src="/__mockup/images/photo-food-bread.png"
        alt="Artisan food background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.15,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#FFF8F0",
              opacity: 0.8,
              fontSize: "1vw",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              marginBottom: "2vh",
            }}
          >
            The Numbers
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5vw",
              lineHeight: 1.1,
              margin: 0,
              color: "#FFF8F0",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Sourcing &amp; Sustainability
          </h2>
          <div
            style={{
              marginTop: "2vh",
              width: "3vw",
              height: "2px",
              backgroundColor: "#D4A86A",
              opacity: 0.8,
            }}
          />
        </div>

        {/* Content: 3 Columns for Stats */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "6vh",
            marginBottom: "6vh",
          }}
        >
          {[
            { value: "100%", label: "Organic Grain", desc: "Sourced directly from local farms." },
            { value: "48h", label: "Fermentation", desc: "Cold fermented for optimal flavor." },
            { value: "0", label: "Preservatives", desc: "Clean ingredients, naturally." }
          ].map((stat, i) => (
            <div key={i} style={{ width: "25vw", borderLeft: "1px solid rgba(212, 168, 106, 0.3)", paddingLeft: "2vw" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "5vw",
                  color: "#D4A86A",
                  fontWeight: 300,
                  fontStyle: "italic",
                  lineHeight: 1,
                  marginBottom: "1.5vh",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.5vw",
                  color: "#FFF8F0",
                  fontWeight: 500,
                  marginBottom: "1vh",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1vw",
                  color: "#FFF8F0",
                  opacity: 0.7,
                  fontWeight: 300,
                  lineHeight: 1.5,
                }}
              >
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#FFF8F0",
              opacity: 0.5,
              fontSize: "0.8vw",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Example Company, Inc. / Confidential
          </div>
          <div
            style={{
              color: "#FFF8F0",
              opacity: 0.5,
              fontSize: "0.8vw",
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
            }}
          >
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ArtisanFoodPage4.tsx`)

```tsx
export function ArtisanFoodPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#111",
      }}
    >
      <img
        src="/__mockup/images/photo-food-bread.png"
        alt="Artisan food background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.4,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(0deg, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.4) 50%, rgba(17,17,17,0.8) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div /> {/* Spacer for top */}

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div
            style={{
              width: "2px",
              height: "6vh",
              backgroundColor: "#D4A86A",
              opacity: 0.8,
              marginBottom: "4vh",
            }}
          />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6vw",
              lineHeight: 1.1,
              margin: 0,
              color: "#FFF8F0",
              fontWeight: 400,
              letterSpacing: "-0.02em",
            }}
          >
            Taste the Difference
          </h2>
          
          <p
            style={{
              marginTop: "3vh",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              color: "#FFF8F0",
              opacity: 0.8,
              margin: 0,
              fontWeight: 300,
              letterSpacing: "0.02em",
              maxWidth: "35vw",
              lineHeight: 1.6,
            }}
          >
            Join us in our mission to bring authentic, slow-crafted bread back to the table.
          </p>

          <div
            style={{
              marginTop: "5vh",
              padding: "1.5vh 3vw",
              border: "1px solid #D4A86A",
              color: "#D4A86A",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1vw",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Partner With Us
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <div
            style={{
              color: "#FFF8F0",
              opacity: 0.5,
              fontSize: "0.8vw",
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            Example Company, Inc. / Confidential
          </div>
          <div
            style={{
              color: "#FFF8F0",
              opacity: 0.5,
              fontSize: "0.8vw",
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
            }}
          >
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
