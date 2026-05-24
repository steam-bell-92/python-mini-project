# Watercolor Illustration

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "WatercolorCity" template features a modern and artistic aesthetic, characterized by a watercolor cityscape background. The background color is solid black (#000), with a subtle dark overlay gradient transitioning from transparent to rgba(0,0,0,0.5). The text color is a soft white (#FDFDFD), while the font families used include 'Inter' for general text and 'Playfair Display' for the main heading, creating a contrast between modern sans-serif and elegant serif styles. Key layout elements include a full-screen background image of a watercolor city, positioned absolutely, with a content container that utilizes flexbox for vertical alignment and spacing. The overall aesthetic feel can be described as "artistic elegance." The background image is sourced from "/__mockup/images/illust-watercolor-city.png".

## Source Code

**Component:** `WatercolorCity`

### Slide 1 — Title (`slide-styles/WatercolorCity.tsx`)

```tsx
export function WatercolorCity() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#FDFDFD",
        backgroundColor: "#000",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/images/illust-watercolor-city.png"
        alt="Watercolor City"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Subtle Dark Overlay Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.5) 100%)",
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
          padding: "5vh 5vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            fontSize: "1vw",
            fontWeight: 300,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          <div>Example Company</div>
          <div>2026</div>
        </div>

        {/* Bottom Content Area */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "12vw",
              fontStyle: "italic",
              fontWeight: 400,
              margin: 0,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              textShadow: "0 2vh 4vh rgba(0,0,0,0.2)",
            }}
          >
            Horizon
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.5vw",
              fontWeight: 300,
              marginTop: "2vh",
              marginBottom: "4vh",
              letterSpacing: "0.05em",
              opacity: 0.9,
              textShadow: "0 1vh 2vh rgba(0,0,0,0.2)",
            }}
          >
            Where vision meets the skyline.
          </p>

          <div
            style={{
              fontSize: "0.8vw",
              fontWeight: 300,
              opacity: 0.6,
              letterSpacing: "0.05em",
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

### Slide 2 (`slide-pages/WatercolorCityPage2.tsx`)

```tsx
export function WatercolorCityPage2() {
  const milestones = [
    {
      year: "2024",
      title: "Founded",
      desc: "Started with a vision",
      blobColor: "radial-gradient(ellipse at center, rgba(255,127,80,0.6) 0%, rgba(255,127,80,0.2) 50%, rgba(255,127,80,0) 70%)",
      blobWidth: "15vw",
      blobHeight: "15vw",
      topOffset: "0",
    },
    {
      year: "2025",
      title: "Product Launch",
      desc: "First users onboarded",
      blobColor: "radial-gradient(ellipse at center, rgba(255,215,0,0.6) 0%, rgba(255,215,0,0.2) 50%, rgba(255,215,0,0) 70%)",
      blobWidth: "18vw",
      blobHeight: "14vw",
      topOffset: "-2vh",
    },
    {
      year: "2026",
      title: "Series A",
      desc: "$12M raised",
      blobColor: "radial-gradient(ellipse at center, rgba(230,230,250,0.8) 0%, rgba(230,230,250,0.3) 50%, rgba(230,230,250,0) 70%)",
      blobWidth: "16vw",
      blobHeight: "16vw",
      topOffset: "1vh",
    },
    {
      year: "2027",
      title: "Global",
      desc: "Expanding worldwide",
      blobColor: "radial-gradient(ellipse at center, rgba(0,128,128,0.5) 0%, rgba(0,128,128,0.15) 50%, rgba(0,128,128,0) 70%)",
      blobWidth: "14vw",
      blobHeight: "17vw",
      topOffset: "-1vh",
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#FDF8F0",
        fontFamily: "'Inter', sans-serif",
        color: "#2C2C2C",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      {/* Abstract Background Watercolor Washes */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          left: "-10vw",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, rgba(230,230,250,0.4) 0%, rgba(230,230,250,0) 70%)",
          filter: "blur(4vw)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15vh",
          right: "-5vw",
          width: "50vw",
          height: "50vw",
          background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, rgba(255,215,0,0) 70%)",
          filter: "blur(5vw)",
          zIndex: 0,
        }}
      />

      {/* Header */}
      <div style={{ position: "relative", zIndex: 1, marginBottom: "12vh" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4.5vw",
            fontStyle: "italic",
            fontWeight: 400,
            margin: 0,
            color: "#1A1A1A",
          }}
        >
          Our Journey
        </h2>
      </div>

      {/* Roadmap Container */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 4vw",
        }}
      >
        {/* Organic Connecting Line */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "6vw",
            right: "6vw",
            height: "10vh",
            transform: "translateY(-50%)",
            borderBottom: "0.2vw solid rgba(44, 44, 44, 0.15)",
            borderRadius: "50%",
            zIndex: 0,
          }}
        />

        {milestones.map((m, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "16vw",
              marginTop: m.topOffset,
            }}
          >
            {/* Watercolor Blob */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: m.blobWidth,
                height: m.blobHeight,
                background: m.blobColor,
                borderRadius: "40% 60% 70% 30% / 40% 50% 60% 50%",
                filter: "blur(1vw)",
                zIndex: -1,
                opacity: 0.9,
              }}
            />

            {/* Content */}
            <div
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1.5vh",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.5vw",
                  fontWeight: 600,
                  color: "#1A1A1A",
                  fontStyle: "italic",
                }}
              >
                {m.year}
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.2vw",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {m.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1vw",
                    fontWeight: 400,
                    color: "rgba(44, 44, 44, 0.7)",
                    lineHeight: 1.4,
                  }}
                >
                  {m.desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "auto",
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "rgba(44, 44, 44, 0.5)",
          letterSpacing: "0.05em",
        }}
      >
        <div>Example Company, Inc. / Confidential</div>
        <div style={{ fontSize: "1vw", fontWeight: 500 }}>02</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/WatercolorCityPage3.tsx`)

```tsx
export function WatercolorCityPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#FDFDFD",
        backgroundColor: "#000",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/images/illust-watercolor-city.png"
        alt="Watercolor City"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Subtle Dark Overlay Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%)",
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
          padding: "5vh 5vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            fontSize: "1vw",
            fontWeight: 300,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.8,
            marginBottom: "8vh",
          }}
        >
          <div>Growth Metrics</div>
          <div>2026</div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4vw",
              fontStyle: "italic",
              fontWeight: 400,
              margin: "0 0 4vh 0",
              letterSpacing: "-0.01em",
              textShadow: "0 1vh 2vh rgba(0,0,0,0.2)",
            }}
          >
            Expanding Horizons
          </h2>

          <div
            style={{
              display: "flex",
              gap: "3vw",
              marginTop: "4vh",
            }}
          >
            {/* Stat 1 */}
            <div
              style={{
                flex: 1,
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "4vh 3vw",
                borderRadius: "1vw",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "5vw",
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1,
                  marginBottom: "2vh",
                }}
              >
                142%
              </div>
              <div
                style={{
                  fontSize: "1.2vw",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  marginBottom: "1vh",
                }}
              >
                MARKET GROWTH
              </div>
              <div
                style={{
                  fontSize: "0.9vw",
                  fontWeight: 300,
                  opacity: 0.8,
                  lineHeight: 1.5,
                }}
              >
                Accelerated expansion across global metropolitan districts.
              </div>
            </div>

            {/* Stat 2 */}
            <div
              style={{
                flex: 1,
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "4vh 3vw",
                borderRadius: "1vw",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "5vw",
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1,
                  marginBottom: "2vh",
                }}
              >
                $8.4B
              </div>
              <div
                style={{
                  fontSize: "1.2vw",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  marginBottom: "1vh",
                }}
              >
                URBAN INVESTMENT
              </div>
              <div
                style={{
                  fontSize: "0.9vw",
                  fontWeight: 300,
                  opacity: 0.8,
                  lineHeight: 1.5,
                }}
              >
                Capital allocated for sustainable skyline development.
              </div>
            </div>

            {/* Stat 3 */}
            <div
              style={{
                flex: 1,
                background: "rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                padding: "4vh 3vw",
                borderRadius: "1vw",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "5vw",
                  fontWeight: 400,
                  fontStyle: "italic",
                  lineHeight: 1,
                  marginBottom: "2vh",
                }}
              >
                36
              </div>
              <div
                style={{
                  fontSize: "1.2vw",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  marginBottom: "1vh",
                }}
              >
                NEW PROJECTS
              </div>
              <div
                style={{
                  fontSize: "0.9vw",
                  fontWeight: 300,
                  opacity: 0.8,
                  lineHeight: 1.5,
                }}
              >
                Upcoming architectural landmarks commissioned this year.
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
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontSize: "0.8vw",
              fontWeight: 300,
              opacity: 0.6,
              letterSpacing: "0.05em",
            }}
          >
            Example Company, Inc. / Confidential
          </div>
          <div
            style={{
              fontSize: "1vw",
              fontWeight: 300,
              opacity: 0.8,
              fontFamily: "'Playfair Display', serif",
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

### Slide 4 (`slide-pages/WatercolorCityPage4.tsx`)

```tsx
export function WatercolorCityPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#FDFDFD",
        backgroundColor: "#000",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/images/illust-watercolor-city.png"
        alt="Watercolor City"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />

      {/* Dark Overlay Gradient for better text readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)",
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
          padding: "5vh 5vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            fontSize: "1vw",
            fontWeight: 300,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.8,
          }}
        >
          <div>Connect</div>
          <div>2026</div>
        </div>

        {/* Center Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "8vw",
              fontStyle: "italic",
              fontWeight: 400,
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textShadow: "0 2vh 4vh rgba(0,0,0,0.3)",
            }}
          >
            Shape the Future
          </h2>
          <p
            style={{
              fontSize: "1.5vw",
              fontWeight: 300,
              marginTop: "3vh",
              marginBottom: "6vh",
              letterSpacing: "0.05em",
              opacity: 0.9,
              maxWidth: "40vw",
              lineHeight: 1.4,
            }}
          >
            Join us in redefining the modern skyline. Let's create something extraordinary together.
          </p>

          <div
            style={{
              display: "flex",
              gap: "4vw",
              background: "rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(12px)",
              padding: "3vh 5vw",
              borderRadius: "1vw",
              border: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.8vw", opacity: 0.6, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5vh" }}>Email</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 400 }}>vision@example.com</div>
            </div>
            <div style={{ width: "1px", background: "rgba(255, 255, 255, 0.2)" }} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.8vw", opacity: 0.6, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5vh" }}>Phone</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 400 }}>+1 (555) 019-2026</div>
            </div>
            <div style={{ width: "1px", background: "rgba(255, 255, 255, 0.2)" }} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: "0.8vw", opacity: 0.6, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5vh" }}>Office</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 400 }}>100 Horizon Way, NY</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              fontSize: "0.8vw",
              fontWeight: 300,
              opacity: 0.6,
              letterSpacing: "0.05em",
            }}
          >
            Example Company, Inc. / Confidential
          </div>
          <div
            style={{
              fontSize: "1vw",
              fontWeight: 300,
              opacity: 0.8,
              fontFamily: "'Playfair Display', serif",
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
