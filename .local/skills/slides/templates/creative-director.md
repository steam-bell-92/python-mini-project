# Creative Director

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "CreativeDirector" template features a modern and professional aesthetic, characterized by a clean layout and a creative workspace theme. The background is a full-screen image sourced from "/__mockup/photos/creative-flatlay.png," which visually enhances the design. The floating card has a solid white background color (#ffffff) and is positioned at the top right, slightly rotated for a dynamic effect. Text colors include a dark gray (#1A1A1A) for primary text, a lighter gray (#4A4A4A) for subtitles, and a soft gray (#F0F0F0) for the large "01" detail. The font families used are 'Inter' for body text and 'Space Grotesk' for headings, creating a contemporary feel. Key layout elements include a circular accent in a warm tone (#C4786E) and a subtle shadow effect on the card, contributing to a layered appearance. The overall aesthetic feel can be described as "modern elegance."

## Source Code

**Component:** `CreativeDirector`

### Slide 1 — Title (`slide-styles/CreativeDirector.tsx`)

```tsx
export function CreativeDirector() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/creative-flatlay.png"
        alt="Creative Workspace"
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

      {/* Floating White Card */}
      <div
        style={{
          position: "absolute",
          top: "22.5vh",
          right: "8vw",
          width: "42vw",
          height: "55vh",
          backgroundColor: "#ffffff",
          transform: "rotate(-2deg)",
          boxShadow: "0 4vh 6vw rgba(0, 0, 0, 0.15), 0 1vh 2vw rgba(0, 0, 0, 0.1)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "4vw",
          boxSizing: "border-box",
          color: "#1A1A1A",
        }}
      >
        {/* Large "01" background detail */}
        <div
          style={{
            position: "absolute",
            top: "-2vh",
            right: "2vw",
            fontSize: "18vw",
            fontWeight: 800,
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#F0F0F0",
            lineHeight: 1,
            zIndex: 0,
            userSelect: "none",
          }}
        >
          01
        </div>

        {/* Card Content Container (above the 01) */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Top Header: Dot + CREATIVE BRIEF */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              marginBottom: "6vh",
            }}
          >
            <div
              style={{
                width: "0.8vw",
                height: "0.8vw",
                backgroundColor: "#C4786E",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                fontSize: "0.9vw",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#1A1A1A",
              }}
            >
              CREATIVE BRIEF
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "4.5vw",
                fontWeight: 700,
                lineHeight: 1.1,
                margin: "0 0 2vh 0",
                color: "#1A1A1A",
                letterSpacing: "-0.02em",
              }}
            >
              Example Deck
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.4vw",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#4A4A4A",
                margin: 0,
                maxWidth: "30vw",
              }}
            >
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>

          {/* Footer of Card */}
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#E5E5E5",
              }}
            />
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1vw",
                fontWeight: 500,
                color: "#1A1A1A",
              }}
            >
              acme.co
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CreativeDirectorPage2.tsx`)

```tsx
export function CreativeDirectorPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/creative-flatlay.png"
        alt="Creative Workspace"
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

      {/* Floating White Card */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "12vw",
          width: "65vw",
          height: "70vh",
          backgroundColor: "#ffffff",
          transform: "rotate(1.5deg)",
          boxShadow: "0 4vh 6vw rgba(0, 0, 0, 0.15), 0 1vh 2vw rgba(0, 0, 0, 0.1)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "4vw",
          boxSizing: "border-box",
          color: "#1A1A1A",
        }}
      >
        {/* Large "02" background detail */}
        <div
          style={{
            position: "absolute",
            top: "-2vh",
            right: "2vw",
            fontSize: "18vw",
            fontWeight: 800,
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#F0F0F0",
            lineHeight: 1,
            zIndex: 0,
            userSelect: "none",
          }}
        >
          02
        </div>

        {/* Card Content Container */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Top Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              marginBottom: "4vh",
            }}
          >
            <div
              style={{
                width: "0.8vw",
                height: "0.8vw",
                backgroundColor: "#C4786E",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                fontSize: "0.9vw",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#1A1A1A",
              }}
            >
              OUR APPROACH
            </div>
          </div>

          {/* Main Title */}
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "3.5vw",
              fontWeight: 700,
              lineHeight: 1.1,
              margin: "0 0 4vh 0",
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
              maxWidth: "45vw",
            }}
          >
            A cohesive strategy for modern brands
          </h2>

          {/* Body Content - Two Columns */}
          <div
            style={{
              display: "flex",
              gap: "4vw",
              flex: 1,
            }}
          >
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.4vw",
                  fontWeight: 600,
                  margin: "0 0 1.5vh 0",
                  color: "#1A1A1A",
                }}
              >
                Discovery &amp; Research
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1vw",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#4A4A4A",
                  margin: 0,
                }}
              >
                We immerse ourselves in your world to uncover the core truths that define your brand and audience.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.4vw",
                  fontWeight: 600,
                  margin: "0 0 1.5vh 0",
                  color: "#1A1A1A",
                }}
              >
                Creative Execution
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1vw",
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: "#4A4A4A",
                  margin: 0,
                }}
              >
                Translating strategy into striking visual narratives that command attention and drive engagement.
              </p>
            </div>
          </div>

          {/* Footer of Card */}
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#E5E5E5",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1vw",
                  fontWeight: 500,
                  color: "#1A1A1A",
                }}
              >
                acme.co
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1vw",
                  fontWeight: 500,
                  color: "#888888",
                }}
              >
                Page 02
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CreativeDirectorPage3.tsx`)

```tsx
export function CreativeDirectorPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/creative-flatlay.png"
        alt="Creative Workspace"
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

      {/* Floating White Card */}
      <div
        style={{
          position: "absolute",
          top: "18vh",
          left: "20vw",
          width: "60vw",
          height: "65vh",
          backgroundColor: "#ffffff",
          transform: "rotate(-1.5deg)",
          boxShadow: "0 4vh 6vw rgba(0, 0, 0, 0.15), 0 1vh 2vw rgba(0, 0, 0, 0.1)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "4vw",
          boxSizing: "border-box",
          color: "#1A1A1A",
        }}
      >
        {/* Large "03" background detail */}
        <div
          style={{
            position: "absolute",
            top: "-2vh",
            right: "2vw",
            fontSize: "18vw",
            fontWeight: 800,
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#F0F0F0",
            lineHeight: 1,
            zIndex: 0,
            userSelect: "none",
          }}
        >
          03
        </div>

        {/* Card Content Container */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Top Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              marginBottom: "5vh",
            }}
          >
            <div
              style={{
                width: "0.8vw",
                height: "0.8vw",
                backgroundColor: "#C4786E",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                fontSize: "0.9vw",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#1A1A1A",
              }}
            >
              MARKET IMPACT
            </div>
          </div>

          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "3vw",
              fontWeight: 700,
              lineHeight: 1.1,
              margin: "0 0 5vh 0",
              color: "#1A1A1A",
              letterSpacing: "-0.02em",
            }}
          >
            Measurable Growth
          </h2>

          {/* Data Grid */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flex: 1,
            }}
          >
            <div style={{ flex: 1, paddingRight: "2vw" }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "5vw",
                  fontWeight: 800,
                  color: "#C4786E",
                  lineHeight: 1,
                  marginBottom: "1vh",
                }}
              >
                150%
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1vw",
                  fontWeight: 500,
                  color: "#4A4A4A",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Audience Lift
              </div>
            </div>

            <div style={{ flex: 1, paddingRight: "2vw" }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "5vw",
                  fontWeight: 800,
                  color: "#1A1A1A",
                  lineHeight: 1,
                  marginBottom: "1vh",
                }}
              >
                2.4M
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1vw",
                  fontWeight: 500,
                  color: "#4A4A4A",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Impressions
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "5vw",
                  fontWeight: 800,
                  color: "#1A1A1A",
                  lineHeight: 1,
                  marginBottom: "1vh",
                }}
              >
                98%
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.1vw",
                  fontWeight: 500,
                  color: "#4A4A4A",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Retention
              </div>
            </div>
          </div>

          {/* Footer of Card */}
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#E5E5E5",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1vw",
                  fontWeight: 500,
                  color: "#1A1A1A",
                }}
              >
                acme.co
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1vw",
                  fontWeight: 500,
                  color: "#888888",
                }}
              >
                Page 03
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CreativeDirectorPage4.tsx`)

```tsx
export function CreativeDirectorPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/creative-flatlay.png"
        alt="Creative Workspace"
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

      {/* Floating White Card */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          right: "15vw",
          width: "45vw",
          height: "60vh",
          backgroundColor: "#ffffff",
          transform: "rotate(2deg)",
          boxShadow: "0 4vh 6vw rgba(0, 0, 0, 0.15), 0 1vh 2vw rgba(0, 0, 0, 0.1)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "4vw",
          boxSizing: "border-box",
          color: "#1A1A1A",
        }}
      >
        {/* Large "04" background detail */}
        <div
          style={{
            position: "absolute",
            top: "-2vh",
            right: "2vw",
            fontSize: "18vw",
            fontWeight: 800,
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#F0F0F0",
            lineHeight: 1,
            zIndex: 0,
            userSelect: "none",
          }}
        >
          04
        </div>

        {/* Card Content Container */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {/* Top Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              marginBottom: "6vh",
            }}
          >
            <div
              style={{
                width: "0.8vw",
                height: "0.8vw",
                backgroundColor: "#C4786E",
                borderRadius: "50%",
              }}
            />
            <div
              style={{
                fontSize: "0.9vw",
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "#1A1A1A",
              }}
            >
              NEXT STEPS
            </div>
          </div>

          {/* Main Title & CTA */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "4vw",
                fontWeight: 700,
                lineHeight: 1.1,
                margin: "0 0 2vh 0",
                color: "#1A1A1A",
                letterSpacing: "-0.02em",
              }}
            >
              Let&apos;s talk.
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.4vw",
                fontWeight: 400,
                lineHeight: 1.5,
                color: "#4A4A4A",
                margin: "0 0 4vh 0",
              }}
            >
              Ready to elevate your brand&apos;s narrative? Reach out to start the conversation.
            </p>
            <div
              style={{
                display: "inline-block",
                padding: "1.5vw 3vw",
                backgroundColor: "#1A1A1A",
                color: "#ffffff",
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.2vw",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                alignSelf: "flex-start",
              }}
            >
              Contact Us
            </div>
          </div>

          {/* Footer of Card */}
          <div
            style={{
              marginTop: "auto",
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#E5E5E5",
              }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1vw",
                  fontWeight: 500,
                  color: "#1A1A1A",
                }}
              >
                acme.co
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1vw",
                  fontWeight: 500,
                  color: "#888888",
                }}
              >
                Page 04
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
