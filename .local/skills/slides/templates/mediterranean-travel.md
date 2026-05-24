# Mediterranean Travel

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "MediterraneanTravel" template embodies a warm and inviting Mediterranean aesthetic. The background color is a soft beige (#F5EEE4), complemented by a background image of the Mediterranean coast located at "/__mockup/photos/mediterranean-coast.png". Text and accent colors include a warm brown (#A0674A) for labels and footer elements, and a deep brown (#2C1E0F) for the main title and subtitle. The font families used are 'Inter' for general text and 'Playfair Display' for the title and footer, creating a contrast between modern and classic styles. Key layout elements include a full-screen background image, a warm gradient overlay, and a content container positioned at the bottom left, featuring decorative elements like icons and horizontal lines. The overall aesthetic feel is "warm, inviting, coastal."

## Source Code

**Component:** `MediterraneanTravel`

### Slide 1 — Title (`slide-styles/MediterraneanTravel.tsx`)

```tsx
export function MediterraneanTravel() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#F5EEE4",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/mediterranean-coast.png"
        alt="Mediterranean Coast"
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
      
      {/* Warm Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to top right, rgba(245,238,228,0.92) 0%, rgba(245,238,228,0.6) 40%, transparent 70%)",
          zIndex: 2,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "6vw",
          zIndex: 3,
          width: "50vw",
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
        }}
      >
        {/* Top Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1vw",
            color: "#A0674A",
          }}
        >
          <div style={{ fontSize: "1.2vw", lineHeight: 1 }}>☀</div>
          <div
            style={{
              fontSize: "0.8vw",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            LA DOLCE VITA
          </div>
          <div
            style={{
              width: "3vw",
              height: "0.1vh",
              backgroundColor: "#A0674A",
              opacity: 0.5,
            }}
          />
          <div
            style={{
              fontSize: "0.8vw",
              fontWeight: 400,
              letterSpacing: "0.05em",
            }}
          >
            Summer 2026
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6vw",
            fontWeight: 400,
            lineHeight: 1.1,
            color: "#2C1E0F",
            margin: 0,
            letterSpacing: "-0.02em",
          }}
        >
          Example Deck
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.4vw",
            fontWeight: 300,
            lineHeight: 1.5,
            color: "#2C1E0F",
            opacity: 0.8,
            margin: "1vh 0 3vh 0",
            maxWidth: "35vw",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        {/* Footer info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5vh",
            marginTop: "2vh",
          }}
        >
          <div
            style={{
              fontSize: "0.9vw",
              fontWeight: 500,
              color: "#2C1E0F",
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.9vw",
              fontStyle: "italic",
              color: "#A0674A",
            }}
          >
            Curated Journeys
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/MediterraneanTravelPage2.tsx`)

```tsx
export function MediterraneanTravelPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#F5EEE4",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "6vh 6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              color: "#A0674A",
            }}
          >
            <div style={{ fontSize: "1.2vw", lineHeight: 1 }}>☀</div>
            <div
              style={{
                fontSize: "0.8vw",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              LA DOLCE VITA
            </div>
            <div
              style={{
                width: "3vw",
                height: "0.1vh",
                backgroundColor: "#A0674A",
                opacity: 0.5,
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4vw",
              fontWeight: 400,
              color: "#2C1E0F",
              margin: 0,
              letterSpacing: "-0.01em",
              maxWidth: "50vw",
            }}
          >
            Curating the Perfect Itinerary
          </h2>
        </div>
      </div>

      {/* Content Area */}
      <div
        style={{
          flex: 1,
          padding: "0 6vw 6vh 6vw",
          display: "flex",
          gap: "4vw",
        }}
      >
        {/* Left Column */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
          <p
            style={{
              fontSize: "1.4vw",
              lineHeight: 1.6,
              color: "#2C1E0F",
              margin: 0,
              fontWeight: 300,
              opacity: 0.9,
            }}
          >
            Our philosophy focuses on the slow and mindful exploration of the coastal regions. We believe that true luxury lies in the authenticity of experience, blending world-class comfort with local charm.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            {[
              {
                title: "Immersive Experiences",
                desc: "Connecting deeply with local artisans, chefs, and historians to reveal the hidden soul of the coast.",
              },
              {
                title: "Sustainable Travel",
                desc: "Preserving the beauty of our destinations through thoughtful, low-impact journey planning.",
              },
              {
                title: "Bespoke Comfort",
                desc: "Tailoring every accommodation and transport detail to your personal definition of luxury.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "1.5vw",
                  paddingTop: "2vh",
                  borderTop: "1px solid rgba(160, 103, 74, 0.2)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5vw",
                    color: "#A0674A",
                    fontStyle: "italic",
                    width: "3vw",
                  }}
                >
                  0{i + 1}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.2vw",
                      fontWeight: 500,
                      color: "#2C1E0F",
                      margin: "0 0 0.5vh 0",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "1vw",
                      lineHeight: 1.5,
                      color: "#2C1E0F",
                      opacity: 0.7,
                      margin: 0,
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column / Visual Accent */}
        <div
          style={{
            flex: 1,
            position: "relative",
            backgroundColor: "#E8DEC8",
            borderRadius: "1vw",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid rgba(160, 103, 74, 0.1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "2vw",
              left: "2vw",
              right: "2vw",
              bottom: "2vw",
              border: "1px solid #A0674A",
              opacity: 0.3,
              borderRadius: "0.5vw",
            }}
          />
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3vw",
              color: "#A0674A",
              textAlign: "center",
              lineHeight: 1.2,
              padding: "4vw",
              fontStyle: "italic",
            }}
          >
            "To travel is to discover that everyone is wrong about other countries."
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "3vh",
          left: "6vw",
          right: "6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.9vw",
            fontWeight: 500,
            color: "#2C1E0F",
            letterSpacing: "0.05em",
          }}
        >
          acme.co
        </div>
        <div
          style={{
            fontSize: "0.9vw",
            color: "#A0674A",
            fontWeight: 500,
          }}
        >
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/MediterraneanTravelPage3.tsx`)

```tsx
export function MediterraneanTravelPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#F5EEE4",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "6vh 6vw 4vh 6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1vw",
              color: "#A0674A",
            }}
          >
            <div style={{ fontSize: "1.2vw", lineHeight: 1 }}>☀</div>
            <div
              style={{
                fontSize: "0.8vw",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              LA DOLCE VITA
            </div>
            <div
              style={{
                width: "3vw",
                height: "0.1vh",
                backgroundColor: "#A0674A",
                opacity: 0.5,
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4vw",
              fontWeight: 400,
              color: "#2C1E0F",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Seasonal Destinations
          </h2>
        </div>
        <div
          style={{
            fontSize: "1.1vw",
            color: "#2C1E0F",
            opacity: 0.7,
            maxWidth: "30vw",
            textAlign: "right",
            lineHeight: 1.5,
            fontWeight: 300,
          }}
        >
          Analyzing the flow of travelers across our most coveted coastal retreats during the peak summer months.
        </div>
      </div>

      {/* Content Area */}
      <div
        style={{
          flex: 1,
          padding: "0 6vw 6vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            height: "50vh",
            paddingBottom: "2vh",
            borderBottom: "1px solid rgba(160, 103, 74, 0.3)",
            gap: "2vw",
          }}
        >
          {[
            { label: "Amalfi Coast", value: 85, color: "#2C1E0F" },
            { label: "Santorini", value: 65, color: "#A0674A" },
            { label: "Cinque Terre", value: 45, color: "rgba(160, 103, 74, 0.6)" },
            { label: "Mallorca", value: 95, color: "#E8DEC8" },
            { label: "Corsica", value: 55, color: "rgba(44, 30, 15, 0.4)" },
          ].map((bar, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "2vh",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.5vw",
                  color: "#2C1E0F",
                  opacity: bar.value === 95 ? 1 : 0.7,
                }}
              >
                {bar.value}%
              </div>
              <div
                style={{
                  width: "100%",
                  height: `${(bar.value / 100) * 35}vh`,
                  backgroundColor: bar.color,
                  border: bar.value === 95 ? "1px solid #A0674A" : "none",
                  borderRadius: "0.5vw 0.5vw 0 0",
                  transition: "height 1s ease-out",
                }}
              />
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "2vh",
            gap: "2vw",
          }}
        >
          {[
            { label: "Amalfi Coast" },
            { label: "Santorini" },
            { label: "Cinque Terre" },
            { label: "Mallorca" },
            { label: "Corsica" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: "1vw",
                fontWeight: 500,
                color: "#2C1E0F",
                letterSpacing: "0.05em",
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "3vh",
          left: "6vw",
          right: "6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.9vw",
            fontWeight: 500,
            color: "#2C1E0F",
            letterSpacing: "0.05em",
          }}
        >
          acme.co
        </div>
        <div
          style={{
            fontSize: "0.9vw",
            color: "#A0674A",
            fontWeight: 500,
          }}
        >
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/MediterraneanTravelPage4.tsx`)

```tsx
export function MediterraneanTravelPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#F5EEE4",
      }}
    >
      {/* Background Image reused from page 1 */}
      <img
        src="/__mockup/photos/mediterranean-coast.png"
        alt="Mediterranean Coast"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          transform: "scale(1.1)", // Slight zoom for variety
          filter: "brightness(0.9)",
        }}
      />
      
      {/* Heavy Warm Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(44, 30, 15, 0.75)",
          zIndex: 2,
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
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1vw",
            color: "#F5EEE4",
            marginBottom: "3vh",
          }}
        >
          <div
            style={{
              width: "4vw",
              height: "0.1vh",
              backgroundColor: "#F5EEE4",
              opacity: 0.5,
            }}
          />
          <div style={{ fontSize: "1.5vw", lineHeight: 1 }}>☀</div>
          <div
            style={{
              width: "4vw",
              height: "0.1vh",
              backgroundColor: "#F5EEE4",
              opacity: 0.5,
            }}
          />
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6vw",
            fontWeight: 400,
            color: "#F5EEE4",
            margin: "0 0 2vh 0",
            letterSpacing: "-0.01em",
          }}
        >
          Begin Your Journey
        </h2>

        <p
          style={{
            fontSize: "1.4vw",
            color: "#F5EEE4",
            opacity: 0.8,
            maxWidth: "40vw",
            lineHeight: 1.6,
            fontWeight: 300,
            marginBottom: "6vh",
          }}
        >
          Join us in discovering the finest coastal experiences. Let us curate your perfect Mediterranean escape.
        </p>

        <div
          style={{
            padding: "1.5vw 4vw",
            border: "1px solid rgba(245, 238, 228, 0.4)",
            color: "#F5EEE4",
            fontSize: "1vw",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(245, 238, 228, 0.05)",
          }}
        >
          Contact Our Concierge
        </div>
      </div>

      {/* Footer info */}
      <div
        style={{
          position: "absolute",
          bottom: "3vh",
          left: "6vw",
          right: "6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 3,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5vh",
          }}
        >
          <div
            style={{
              fontSize: "0.9vw",
              fontWeight: 500,
              color: "#F5EEE4",
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "0.9vw",
              fontStyle: "italic",
              color: "rgba(245, 238, 228, 0.6)",
            }}
          >
            Curated Journeys
          </div>
        </div>
        <div
          style={{
            fontSize: "0.9vw",
            color: "#F5EEE4",
            fontWeight: 500,
          }}
        >
          04
        </div>
      </div>
    </div>
  );
}
```
