# Culinary Brand

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "CulinaryBrand" template features a sophisticated and elegant aesthetic, suitable for fine dining or culinary presentations. The background color is a solid #0F0C0A, complemented by a background image sourced from "/__mockup/photos/fine-dining.png" that covers the entire viewport. A linear gradient overlay transitions from transparent to rgba(15,12,10,0.9) and finally to rgba(15,12,10,1), adding depth to the design. Text elements utilize the 'DM Mono' monospace font for headings and body text, while 'Playfair Display' serif font is used for the main title, with colors including #B8A07A for accents and #F0E8DA for the title. Key layout elements include a structured flexbox arrangement with decorative horizontal lines in #B87333 and rgba(184, 160, 122, 0.3), creating a refined and upscale feel. Overall, the aesthetic can be described as "elegant sophistication."

## Source Code

**Component:** `CulinaryBrand`

### Slide 1 — Title (`slide-styles/CulinaryBrand.tsx`)

```tsx
export function CulinaryBrand() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0F0C0A",
      }}
    >
      <img
        src="/__mockup/photos/fine-dining.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, transparent 0%, transparent 40%, rgba(15,12,10,0.9) 75%, rgba(15,12,10,1) 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-end",
          height: "100%",
          padding: "8vh 8vw",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "2vh",
            width: "45vw",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.85vw",
              color: "#B8A07A",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            CULINARY EXCELLENCE
          </div>
          <div
            style={{
              width: "3vw",
              height: "1px",
              backgroundColor: "#B87333",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "45vw",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(184, 160, 122, 0.3)",
              marginBottom: "4vh",
            }}
          />
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "5.5vw",
              color: "#F0E8DA",
              margin: 0,
              lineHeight: 1.1,
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            Example Deck
          </h1>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(184, 160, 122, 0.3)",
              marginTop: "4vh",
              marginBottom: "5vh",
            }}
          />
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.1vw",
              color: "#B8A07A",
              margin: 0,
              maxWidth: "35vw",
              lineHeight: 1.6,
              fontWeight: 300,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "45vw",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            color: "#B8A07A",
            opacity: 0.8,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          <div>Chef's Table</div>
          <div>acme.co</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CulinaryBrandPage2.tsx`)

```tsx
export function CulinaryBrandPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0F0C0A",
        display: "flex",
      }}
    >
      {/* Left Content */}
      <div
        style={{
          width: "50vw",
          height: "100vh",
          padding: "8vh 6vw",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2vw",
              marginBottom: "6vh",
            }}
          >
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.85vw",
                color: "#B8A07A",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              THE PHILOSOPHY
            </div>
            <div
              style={{
                flex: 1,
                height: "1px",
                backgroundColor: "rgba(184, 160, 122, 0.3)",
              }}
            />
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5vw",
              color: "#F0E8DA",
              margin: "0 0 4vh 0",
              lineHeight: 1.2,
              fontWeight: 400,
            }}
          >
            Curating the finest ingredients from local purveyors.
          </h2>

          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.1vw",
              color: "#B8A07A",
              margin: "0 0 3vh 0",
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: "35vw",
            }}
          >
            Our approach to gastronomy is rooted in simplicity and respect for the
            natural environment. We believe that true culinary excellence begins
            at the source, working intimately with farmers, foragers, and artisans.
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.1vw",
              color: "#B8A07A",
              margin: 0,
              lineHeight: 1.7,
              fontWeight: 300,
              maxWidth: "35vw",
            }}
          >
            Every dish tells a story of the seasons, presenting flavors that are
            both innovative and deeply familiar, designed to evoke emotion and
            memory.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            color: "#B8A07A",
            opacity: 0.8,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          <div>acme.co</div>
          <div>02</div>
        </div>
      </div>

      {/* Right Image */}
      <div style={{ width: "50vw", height: "100vh", position: "relative" }}>
        <img
          src="/__mockup/photos/fine-dining.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, #0F0C0A 0%, transparent 30%)",
          }}
        />
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CulinaryBrandPage3.tsx`)

```tsx
export function CulinaryBrandPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0F0C0A",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2vw",
            marginBottom: "8vh",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.85vw",
              color: "#B8A07A",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            BY THE NUMBERS
          </div>
          <div
            style={{
              flex: 1,
              height: "1px",
              backgroundColor: "rgba(184, 160, 122, 0.3)",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginTop: "10vh",
          }}
        >
          <div
            style={{
              width: "25vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "6vw",
                color: "#F0E8DA",
                lineHeight: 1,
                marginBottom: "2vh",
              }}
            >
              12
            </div>
            <div
              style={{
                width: "3vw",
                height: "1px",
                backgroundColor: "#B87333",
                marginBottom: "3vh",
              }}
            />
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.1vw",
                color: "#B8A07A",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Michelin Stars
            </div>
          </div>

          <div
            style={{
              width: "1px",
              height: "25vh",
              backgroundColor: "rgba(184, 160, 122, 0.2)",
              marginTop: "2vh",
            }}
          />

          <div
            style={{
              width: "25vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "6vw",
                color: "#F0E8DA",
                lineHeight: 1,
                marginBottom: "2vh",
              }}
            >
              85
              <span style={{ fontSize: "3vw", color: "#B87333" }}>%</span>
            </div>
            <div
              style={{
                width: "3vw",
                height: "1px",
                backgroundColor: "#B87333",
                marginBottom: "3vh",
              }}
            />
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.1vw",
                color: "#B8A07A",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Local Sourcing
            </div>
          </div>

          <div
            style={{
              width: "1px",
              height: "25vh",
              backgroundColor: "rgba(184, 160, 122, 0.2)",
              marginTop: "2vh",
            }}
          />

          <div
            style={{
              width: "25vw",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "6vw",
                color: "#F0E8DA",
                lineHeight: 1,
                marginBottom: "2vh",
              }}
            >
              24
            </div>
            <div
              style={{
                width: "3vw",
                height: "1px",
                backgroundColor: "#B87333",
                marginBottom: "3vh",
              }}
            />
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.1vw",
                color: "#B8A07A",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Seasonal Menus
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#B8A07A",
          opacity: 0.8,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
        }}
      >
        <div>Chef's Table</div>
        <div>03</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CulinaryBrandPage4.tsx`)

```tsx
export function CulinaryBrandPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0F0C0A",
      }}
    >
      <img
        src="/__mockup/photos/fine-dining.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
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
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at center, transparent 0%, #0F0C0A 80%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          padding: "8vh 8vw",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "2vh",
            marginTop: "4vh",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.85vw",
              color: "#B8A07A",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            JOIN US
          </div>
          <div
            style={{
              width: "3vw",
              height: "1px",
              backgroundColor: "#B87333",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "50vw",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "5vw",
              color: "#F0E8DA",
              margin: 0,
              lineHeight: 1.1,
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            Experience the Extraordinary
          </h2>

          <div
            style={{
              width: "10vw",
              height: "1px",
              backgroundColor: "rgba(184, 160, 122, 0.3)",
              margin: "4vh 0",
            }}
          />

          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.2vw",
              color: "#B8A07A",
              margin: "0 0 2vh 0",
              letterSpacing: "0.05em",
            }}
          >
            RESERVATIONS@ACME.CO
          </p>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.2vw",
              color: "#B8A07A",
              margin: 0,
              letterSpacing: "0.05em",
            }}
          >
            +1 (555) 123-4567
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            color: "#B8A07A",
            opacity: 0.8,
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          <div>acme.co</div>
          <div>04</div>
        </div>
      </div>
    </div>
  );
}
```
