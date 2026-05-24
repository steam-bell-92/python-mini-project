# Ceramics Artisan

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "CeramicsArtisan" template embodies a soft, artisanal aesthetic, characterized by a warm and inviting design. The background color is a solid #F5F1EB, complemented by a gradient that transitions from #F5F1EB to a transparent version of itself at the top of the image section. Text colors include #A2988E for the header elements, #3E2E21 for the main title, and #8B7D6B for the subtitle. The font families used are 'Inter' for general text and 'Playfair Display' for the title, creating a contrast between modern and classic styles. Key layout elements include a top section with centered text and a bottom section featuring a full-width image of ceramics, which is blended with a gradient fade to soften the transition. The overall aesthetic feel is warm and artisanal.

## Source Code

**Component:** `CeramicsArtisan`

### Slide 1 — Title (`slide-styles/CeramicsArtisan.tsx`)

```tsx
export function CeramicsArtisan() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F1EB",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Top Section */}
      <div
        style={{
          height: "35vh",
          width: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        {/* Header content: Top Left */}
        <div
          style={{
            position: "absolute",
            top: "4vh",
            left: "4vw",
            fontSize: "0.8vw",
            color: "#A2988E",
            letterSpacing: "0.05em",
            fontWeight: 400,
          }}
        >
          Example Company, Inc.
        </div>

        {/* Header content: Top Right */}
        <div
          style={{
            position: "absolute",
            top: "4vh",
            right: "4vw",
            fontSize: "0.8vw",
            color: "#A2988E",
            letterSpacing: "0.05em",
            fontWeight: 400,
          }}
        >
          2026 / Confidential
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "5.5vw",
            color: "#3E2E21",
            margin: 0,
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Kiln{" "}
          <span
            style={{
              fontWeight: 300,
              fontSize: "6vw",
              fontStyle: "italic",
              margin: "0 0.5vw",
            }}
          >
            &
          </span>{" "}
          Clay
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.2vw",
            fontWeight: 300,
            color: "#8B7D6B",
            margin: "1vh 0 0 0",
            letterSpacing: "0.02em",
          }}
        >
          The beauty of imperfection.
        </p>
      </div>

      {/* Bottom Photo Section */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "65vh",
          zIndex: 1,
        }}
      >
        <img
          src="/__mockup/images/photo-ceramics.png"
          alt="Ceramics Artisan"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "bottom center",
          }}
        />
        {/* Gradient Fade to blend the hard edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "8vh",
            background: "linear-gradient(to bottom, #F5F1EB 0%, rgba(245, 241, 235, 0) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CeramicsArtisanPage2.tsx`)

```tsx
export function CeramicsArtisanPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F1EB",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#3E2E21",
      }}
    >
      {/* Header section */}
      <div
        style={{
          position: "absolute",
          top: "12vh",
          left: "0",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.2vw",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "#8B7D6B",
            margin: 0,
            fontWeight: 400,
          }}
        >
          Current Collection
        </h2>
      </div>

      {/* Grid container */}
      <div
        style={{
          display: "flex",
          gap: "4vw",
          marginTop: "6vh",
          alignItems: "flex-start",
        }}
      >
        {/* Item 1 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: "22vw",
              height: "22vw",
              position: "relative",
              marginBottom: "3vh",
              boxShadow: "0 2vh 4vh rgba(62, 46, 33, 0.05)",
              overflow: "hidden",
            }}
          >
            <img 
              src="/__mockup/images/photo-ceramics.png" 
              alt="Ceramics" 
              style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} 
            />
            <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, background: "linear-gradient(135deg, rgba(217, 200, 184, 0.6) 0%, rgba(195, 169, 149, 0.8) 100%)", mixBlendMode: "multiply" }}></div>
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8vw",
              fontWeight: 400,
              margin: "0 0 1vh 0",
              color: "#3E2E21",
            }}
          >
            Vessel No. 1
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9vw",
              fontWeight: 300,
              color: "#8B7D6B",
              margin: 0,
              letterSpacing: "0.05em",
            }}
          >
            12 × 8 cm — $120
          </p>
        </div>

        {/* Item 2 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: "22vw",
              height: "22vw",
              position: "relative",
              marginBottom: "3vh",
              boxShadow: "0 2vh 4vh rgba(62, 46, 33, 0.05)",
              overflow: "hidden",
            }}
          >
            <img 
              src="/__mockup/images/photo-ceramics.png" 
              alt="Ceramics" 
              style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} 
            />
            <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, background: "linear-gradient(135deg, rgba(230, 218, 202, 0.6) 0%, rgba(212, 193, 173, 0.8) 100%)", mixBlendMode: "multiply" }}></div>
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8vw",
              fontWeight: 400,
              margin: "0 0 1vh 0",
              color: "#3E2E21",
            }}
          >
            Bowl No. 3
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9vw",
              fontWeight: 300,
              color: "#8B7D6B",
              margin: 0,
              letterSpacing: "0.05em",
            }}
          >
            18 × 6 cm — $85
          </p>
        </div>

        {/* Item 3 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div
            style={{
              width: "22vw",
              height: "22vw",
              position: "relative",
              marginBottom: "3vh",
              boxShadow: "0 2vh 4vh rgba(62, 46, 33, 0.05)",
              overflow: "hidden",
            }}
          >
            <img 
              src="/__mockup/images/photo-ceramics.png" 
              alt="Ceramics" 
              style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute", top: 0, left: 0 }} 
            />
            <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0, background: "linear-gradient(135deg, rgba(194, 182, 169, 0.6) 0%, rgba(165, 152, 138, 0.8) 100%)", mixBlendMode: "multiply" }}></div>
          </div>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.8vw",
              fontWeight: 400,
              margin: "0 0 1vh 0",
              color: "#3E2E21",
            }}
          >
            Vase No. 7
          </h3>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9vw",
              fontWeight: 300,
              color: "#8B7D6B",
              margin: 0,
              letterSpacing: "0.05em",
            }}
          >
            22 × 14 cm — $165
          </p>
        </div>
      </div>

      {/* Footer italic text */}
      <div
        style={{
          marginTop: "6vh",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "1.5vw",
            color: "#8B7D6B",
            margin: 0,
          }}
        >
          Each piece is one of a kind.
        </p>
      </div>

      {/* Bottom Footer Details */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "4vw",
          right: "4vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8vw",
          color: "#A2988E",
          letterSpacing: "0.05em",
          fontWeight: 400,
        }}
      >
        <div>02</div>
        <div>Example Company, Inc. / Confidential</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CeramicsArtisanPage3.tsx`)

```tsx
export function CeramicsArtisanPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F1EB",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "4vw",
          fontSize: "0.8vw",
          color: "#A2988E",
          letterSpacing: "0.05em",
          fontWeight: 400,
        }}
      >
        Example Company, Inc.
      </div>
      <div
        style={{
          position: "absolute",
          top: "4vh",
          right: "4vw",
          fontSize: "0.8vw",
          color: "#A2988E",
          letterSpacing: "0.05em",
          fontWeight: 400,
        }}
      >
        2026 / Confidential
      </div>

      {/* Main Content */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "8vw",
          width: "84vw",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Title */}
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4vw",
            color: "#3E2E21",
            margin: "0 0 2vh 0",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Production Growth
        </h2>
        
        <p
          style={{
            fontSize: "1.2vw",
            fontWeight: 300,
            color: "#8B7D6B",
            margin: "0 0 8vh 0",
            maxWidth: "40vw",
            lineHeight: 1.6,
          }}
        >
          A steady increase in handcrafted pieces over the last four quarters, reflecting our expanding artisan network and refined kiln processes.
        </p>

        {/* Data Visualization (Bar Chart) */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            height: "35vh",
            width: "60vw",
            borderBottom: "1px solid #D1C9C0",
            paddingBottom: "1vh",
            gap: "4vw",
          }}
        >
          {[
            { label: "Q1", value: 35, number: "3,500" },
            { label: "Q2", value: 50, number: "5,000" },
            { label: "Q3", value: 75, number: "7,500" },
            { label: "Q4", value: 100, number: "10,000" },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
              }}
            >
              <div
                style={{
                  fontSize: "1vw",
                  color: "#8B7D6B",
                  marginBottom: "1vh",
                  fontWeight: 400,
                }}
              >
                {item.number}
              </div>
              <div
                style={{
                  width: "100%",
                  height: `${item.value * 0.25}vh`,
                  backgroundColor: index === 3 ? "#3E2E21" : "#D1C9C0",
                  transition: "height 0.5s ease-out",
                }}
              />
              <div
                style={{
                  marginTop: "2vh",
                  fontSize: "0.9vw",
                  color: "#A2988E",
                  letterSpacing: "0.05em",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "4vw",
          fontSize: "0.8vw",
          color: "#A2988E",
          letterSpacing: "0.05em",
          fontWeight: 400,
        }}
      >
        Kiln & Clay
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          right: "4vw",
          fontSize: "0.8vw",
          color: "#A2988E",
          letterSpacing: "0.05em",
          fontWeight: 400,
        }}
      >
        03
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CeramicsArtisanPage4.tsx`)

```tsx
export function CeramicsArtisanPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F1EB",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "4vw",
          fontSize: "0.8vw",
          color: "#A2988E",
          letterSpacing: "0.05em",
          fontWeight: 400,
        }}
      >
        Example Company, Inc.
      </div>
      <div
        style={{
          position: "absolute",
          top: "4vh",
          right: "4vw",
          fontSize: "0.8vw",
          color: "#A2988E",
          letterSpacing: "0.05em",
          fontWeight: 400,
        }}
      >
        2026 / Confidential
      </div>

      {/* Main Content */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "1vw",
            color: "#A2988E",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "3vh",
          }}
        >
          Let's create together
        </p>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "5vw",
            color: "#3E2E21",
            margin: "0 0 4vh 0",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Shape the Future
        </h2>

        <p
          style={{
            fontSize: "1.2vw",
            fontWeight: 300,
            color: "#8B7D6B",
            margin: "0 0 6vh 0",
            maxWidth: "35vw",
            lineHeight: 1.6,
          }}
        >
          Reach out to discover our latest collections or to discuss bespoke commissions for your space.
        </p>

        <div
          style={{
            display: "flex",
            gap: "2vw",
          }}
        >
          <div
            style={{
              padding: "1.5vh 3vw",
              backgroundColor: "#3E2E21",
              color: "#F5F1EB",
              fontSize: "1vw",
              letterSpacing: "0.05em",
              border: "1px solid #3E2E21",
              cursor: "pointer",
            }}
          >
            Contact Us
          </div>
          <div
            style={{
              padding: "1.5vh 3vw",
              backgroundColor: "transparent",
              color: "#3E2E21",
              fontSize: "1vw",
              letterSpacing: "0.05em",
              border: "1px solid #3E2E21",
              cursor: "pointer",
            }}
          >
            View Gallery
          </div>
        </div>

        <div
          style={{
            marginTop: "8vh",
            display: "flex",
            gap: "4vw",
            borderTop: "1px solid #D1C9C0",
            paddingTop: "4vh",
          }}
        >
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.8vw", color: "#A2988E", marginBottom: "0.5vh" }}>Email</div>
            <div style={{ fontSize: "1vw", color: "#3E2E21" }}>hello@kilnandclay.com</div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.8vw", color: "#A2988E", marginBottom: "0.5vh" }}>Studio</div>
            <div style={{ fontSize: "1vw", color: "#3E2E21" }}>124 Potter's Lane, NY</div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.8vw", color: "#A2988E", marginBottom: "0.5vh" }}>Social</div>
            <div style={{ fontSize: "1vw", color: "#3E2E21" }}>@kilnandclay</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "4vw",
          fontSize: "0.8vw",
          color: "#A2988E",
          letterSpacing: "0.05em",
          fontWeight: 400,
        }}
      >
        Kiln & Clay
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          right: "4vw",
          fontSize: "0.8vw",
          color: "#A2988E",
          letterSpacing: "0.05em",
          fontWeight: 400,
        }}
      >
        04
      </div>
    </div>
  );
}
```
