# Furniture Brand

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "FurnitureBrand" template represents a modern and elegant aesthetic, suitable for showcasing high-end furniture. The background color is a soft beige, specifically #F5F0E8, while the text color is a deep charcoal, #2C2520. The component utilizes the 'Inter' font for general text and 'Playfair Display' for the main title, creating a contrast between a clean sans-serif and a sophisticated serif style. Key layout elements include a left text panel that occupies 35% of the width, featuring a company name, title, subtitle, and footer, alongside a right photo panel that displays an image of furniture, sourced from "/__mockup/images/photo-furniture.png". The overall aesthetic feel can be described as "modern elegance."

## Source Code

**Component:** `FurnitureBrand`

### Slide 1 — Title (`slide-styles/FurnitureBrand.tsx`)

```tsx
export function FurnitureBrand() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#F5F0E8",
        color: "#2C2520",
      }}
    >
      {/* Left Text Panel */}
      <div
        style={{
          width: "35vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5vh 4vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top left - Company Name */}
        <div
          style={{
            fontSize: "0.8vw",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: 500,
            opacity: 0.6,
          }}
        >
          Example Company
        </div>

        {/* Center - Title & Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6vw",
              fontWeight: 400,
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "#2C2520",
            }}
          >
            Forma
          </h1>
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 300,
              letterSpacing: "0.2em",
              margin: 0,
              color: "#2C2520",
              opacity: 0.8,
            }}
          >
            Living, sculpted.
          </p>
          <div
            style={{
              width: "4vw",
              height: "2px",
              backgroundColor: "#C47D5A",
              marginTop: "1vh",
            }}
          />
        </div>

        {/* Bottom - Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.7vw",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            opacity: 0.5,
          }}
        >
          <span>Example Company, Inc. / Confidential</span>
          <span>2026</span>
        </div>
      </div>

      {/* Right Photo Panel */}
      <div
        style={{
          width: "65vw",
          height: "100vh",
          position: "relative",
        }}
      >
        <img
          src="/__mockup/images/photo-furniture.png"
          alt="High-end furniture"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/FurnitureBrandPage2.tsx`)

```tsx
export function FurnitureBrandPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#F5F0E8",
        color: "#2C2520",
      }}
    >
      {/* Left Photo Panel */}
      <div
        style={{
          width: "55vw",
          height: "100vh",
          position: "relative",
        }}
      >
        <img
          src="/__mockup/images/photo-furniture.png"
          alt="High-end furniture product"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Page number floating over image */}
        <div
          style={{
            position: "absolute",
            top: "5vh",
            left: "4vw",
            fontSize: "0.8vw",
            color: "#FFF",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: 500,
            opacity: 0.8,
            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
          }}
        >
          02
        </div>
      </div>

      {/* Right Details Panel */}
      <div
        style={{
          width: "45vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5vh 6vw",
          boxSizing: "border-box",
          backgroundColor: "#F5F0E8",
        }}
      >
        {/* Top Spacer to balance the top section */}
        <div style={{ flex: "1" }} />

        {/* Center - Product Info */}
        <div style={{ flex: "2", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div
            style={{
              fontSize: "0.7vw",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontWeight: 500,
              opacity: 0.6,
              marginBottom: "2vh",
            }}
          >
            Design: Studio Example
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3vw",
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "#2C2520",
            }}
          >
            The Forma Lounge
          </h2>
          
          <div
            style={{
              width: "3vw",
              height: "2px",
              backgroundColor: "#C47D5A",
              marginTop: "4vh",
              marginBottom: "4vh",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
              fontSize: "0.9vw",
              lineHeight: 1.6,
              opacity: 0.8,
              fontWeight: 300,
            }}
          >
            <div>
              <span style={{ fontWeight: 500, opacity: 1 }}>Dimensions:</span> 84 × 36 × 32 in
            </div>
            <div>
              <span style={{ fontWeight: 500, opacity: 1 }}>Materials:</span> Italian leather, walnut frame
            </div>
            <div>
              <span style={{ fontWeight: 500, opacity: 1 }}>Weight:</span> 65 lbs
            </div>
            <div>
              <span style={{ fontWeight: 500, opacity: 1 }}>Lead Time:</span> 8-10 weeks
            </div>
          </div>
        </div>

        {/* Bottom Section - Price and Footer */}
        <div style={{ flex: "1", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2vw",
              fontWeight: 600,
              marginBottom: "8vh",
            }}
          >
            $4,800
          </div>

          <div
            style={{
              fontSize: "0.7vw",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              opacity: 0.5,
              borderTop: "1px solid rgba(44, 37, 32, 0.1)",
              paddingTop: "2vh",
            }}
          >
            Example Company, Inc. / Confidential
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/FurnitureBrandPage3.tsx`)

```tsx
export function FurnitureBrandPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#F5F0E8",
        color: "#2C2520",
        padding: "5vh 4vw",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.8vw",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          fontWeight: 500,
          opacity: 0.6,
        }}
      >
        <span>Example Company</span>
        <span>Market Insights</span>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 10vw" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4vw",
            fontWeight: 400,
            margin: "0 0 2vh 0",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Sustainable Materials
        </h2>
        <div
          style={{
            width: "4vw",
            height: "2px",
            backgroundColor: "#C47D5A",
            marginBottom: "8vh",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", gap: "4vw" }}>
          {/* Stat 1 */}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "6vw", color: "#C47D5A", lineHeight: 1 }}>
              75%
            </div>
            <div style={{ borderTop: "1px solid rgba(44, 37, 32, 0.2)", marginTop: "2vh", paddingTop: "2vh", fontSize: "1vw", lineHeight: 1.6, opacity: 0.8 }}>
              Of our materials are ethically sourced from certified sustainable forests and recycled sources.
            </div>
          </div>
          
          {/* Stat 2 */}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "6vw", color: "#C47D5A", lineHeight: 1 }}>
              40%
            </div>
            <div style={{ borderTop: "1px solid rgba(44, 37, 32, 0.2)", marginTop: "2vh", paddingTop: "2vh", fontSize: "1vw", lineHeight: 1.6, opacity: 0.8 }}>
              Reduction in carbon footprint across our entire supply chain over the last three years.
            </div>
          </div>
          
          {/* Stat 3 */}
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "6vw", color: "#C47D5A", lineHeight: 1 }}>
              10k
            </div>
            <div style={{ borderTop: "1px solid rgba(44, 37, 32, 0.2)", marginTop: "2vh", paddingTop: "2vh", fontSize: "1vw", lineHeight: 1.6, opacity: 0.8 }}>
              Trees planted annually through our partnership with global reforestation initiatives.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.7vw",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          opacity: 0.5,
        }}
      >
        <span>Example Company, Inc. / Confidential</span>
        <span>03</span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/FurnitureBrandPage4.tsx`)

```tsx
export function FurnitureBrandPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#2C2520",
        color: "#F5F0E8",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "5vh 4vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            fontSize: "0.8vw",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontWeight: 500,
            opacity: 0.6,
          }}
        >
          Example Company
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "3vh", flex: 1, justifyContent: "center" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "7vw",
              fontWeight: 400,
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Thank You
          </h2>
          <div
            style={{
              width: "4vw",
              height: "2px",
              backgroundColor: "#C47D5A",
              margin: "2vh 0",
            }}
          />
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 300,
              letterSpacing: "0.1em",
              margin: 0,
              opacity: 0.8,
              maxWidth: "40vw",
              lineHeight: 1.6,
            }}
          >
            Let&apos;s shape the future of modern living, together. Reach out to discuss partnerships and bespoke commissions.
          </p>
          
          <div style={{ marginTop: "4vh", display: "flex", gap: "4vw", fontSize: "1vw", opacity: 0.9, letterSpacing: "0.05em" }}>
            <span style={{ borderBottom: "1px solid #C47D5A", paddingBottom: "0.5vh" }}>hello@example.com</span>
            <span style={{ borderBottom: "1px solid #C47D5A", paddingBottom: "0.5vh" }}>+1 (555) 123-4567</span>
            <span style={{ borderBottom: "1px solid #C47D5A", paddingBottom: "0.5vh" }}>example.com</span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.7vw",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            opacity: 0.5,
          }}
        >
          <span>Example Company, Inc. / Confidential</span>
          <span>04</span>
        </div>
      </div>
    </div>
  );
}
```
