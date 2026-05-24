# Bioluminescent Sea

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "BioluminescentSea" template features a serene and ethereal aesthetic, evoking the beauty of bioluminescent waves. The background consists of a full-bleed image sourced from "/__mockup/photos/bioluminescent-waves.png" with a subtle gradient overlay that transitions from rgba(5,5,15,0.6) at the top to transparent at 40%. Text elements utilize a color palette of #D0E8F0 for primary text and #4A7A8C for accents. The font families include 'Inter' for general text and 'Playfair Display' for headings and decorative text, enhancing the elegant feel. Key layout elements include a flexible content container with a structured arrangement of text and decorative lines, creating a balanced composition. The overall aesthetic feel can be described as tranquil and sophisticated.

## Source Code

**Component:** `BioluminescentSea`

### Slide 1 — Title (`slide-styles/BioluminescentSea.tsx`)

```tsx
export function BioluminescentSea() {
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
      {/* Full-bleed background image */}
      <img
        src="/__mockup/photos/bioluminescent-waves.png"
        alt="Bioluminescent Waves"
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

      {/* Subtle gradient overlay on top portion */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(5,5,15,0.6) 0%, transparent 40%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "5vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Top Content */}
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "2vw",
                  marginBottom: "2vh",
                }}
              >
                <div
                  style={{
                    color: "#4A7A8C",
                    fontSize: "0.8vw",
                    letterSpacing: "0.35em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  PHOSPHORESCENCE
                </div>
                <div
                  style={{
                    color: "#4A7A8C",
                    fontSize: "1vw",
                    fontStyle: "italic",
                    fontFamily: "'Playfair Display', serif",
                    opacity: 0.8,
                  }}
                >
                  Chapter I
                </div>
              </div>

              <h1
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#D0E8F0",
                  fontSize: "6.5vw",
                  fontWeight: 400,
                  margin: 0,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                Example Deck
              </h1>
              
              <div
                style={{
                  width: "15vw",
                  height: "1px",
                  background: "#D0E8F0",
                  marginTop: "3vh",
                  marginBottom: "3vh",
                  opacity: 0.4,
                }}
              />

              <p
                style={{
                  color: "#D0E8F0",
                  fontSize: "1.4vw",
                  maxWidth: "45vw",
                  lineHeight: 1.6,
                  fontWeight: 300,
                  opacity: 0.85,
                }}
              >
                Your compelling subtitle goes here. Describe your big idea in a single sentence.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "0.5vh",
              }}
            >
              <div
                style={{
                  color: "#D0E8F0",
                  fontSize: "1vw",
                  fontWeight: 400,
                  opacity: 0.9,
                  letterSpacing: "0.05em",
                }}
              >
                acme.co
              </div>
              <div
                style={{
                  color: "#4A7A8C",
                  fontSize: "0.8vw",
                  fontStyle: "italic",
                  fontFamily: "'Playfair Display', serif",
                  opacity: 0.8,
                }}
              >
                After Dark
              </div>
            </div>
          </div>
        </div>

        {/* Bottom area (empty but takes up space) */}
        <div />
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BioluminescentSeaPage2.tsx`)

```tsx
export function BioluminescentSeaPage2() {
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
      {/* Full-bleed background image */}
      <img
        src="/__mockup/photos/bioluminescent-waves.png"
        alt="Bioluminescent Waves"
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

      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(5, 5, 15, 0.7)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "5vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "#4A7A8C",
              fontSize: "0.8vw",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            PHOSPHORESCENCE
          </div>
          <div
            style={{
              color: "#D0E8F0",
              fontSize: "1vw",
              fontWeight: 400,
              opacity: 0.9,
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
        </div>

        {/* Main Body */}
        <div
          style={{
            display: "flex",
            gap: "6vw",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#D0E8F0",
                fontSize: "4vw",
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              The Glowing Truth
            </h2>
            <div
              style={{
                width: "8vw",
                height: "1px",
                background: "#D0E8F0",
                marginTop: "3vh",
                marginBottom: "4vh",
                opacity: 0.4,
              }}
            />
            <p
              style={{
                color: "#D0E8F0",
                fontSize: "1.2vw",
                lineHeight: 1.6,
                fontWeight: 300,
                opacity: 0.85,
                marginBottom: "3vh",
              }}
            >
              Our oceans hide secrets that only reveal themselves in the dark. The bioluminescence phenomenon is not just a spectacle of nature, but a complex biological process.
            </p>
            <p
              style={{
                color: "#D0E8F0",
                fontSize: "1.2vw",
                lineHeight: 1.6,
                fontWeight: 300,
                opacity: 0.85,
              }}
            >
              By harnessing this natural light, we can develop sustainable illumination technologies that reduce our carbon footprint and reconnect us with the ecosystem.
            </p>
          </div>
          
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "3vh",
            }}
          >
            {[
              { title: "Natural Radiance", desc: "Chemical reactions producing light within living organisms without emitting heat." },
              { title: "Deep Sea Ecosystems", desc: "Over 75% of deep-sea creatures possess some form of bioluminescent ability." },
              { title: "Sustainable Future", desc: "Translating marine biology into energy-efficient urban lighting solutions." }
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "3vh 2vw",
                  background: "rgba(208, 232, 240, 0.05)",
                  borderLeft: "2px solid #4A7A8C",
                }}
              >
                <div
                  style={{
                    color: "#D0E8F0",
                    fontSize: "1.4vw",
                    fontWeight: 500,
                    marginBottom: "1vh",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    color: "#D0E8F0",
                    fontSize: "1vw",
                    opacity: 0.7,
                    lineHeight: 1.5,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
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
              color: "#4A7A8C",
              fontSize: "0.8vw",
              fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
              opacity: 0.8,
            }}
          >
            Chapter II
          </div>
          <div
            style={{
              color: "#4A7A8C",
              fontSize: "1vw",
              fontFamily: "'DM Mono', monospace",
              opacity: 0.8,
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

### Slide 3 (`slide-pages/BioluminescentSeaPage3.tsx`)

```tsx
export function BioluminescentSeaPage3() {
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
      {/* Full-bleed background image */}
      <img
        src="/__mockup/photos/bioluminescent-waves.png"
        alt="Bioluminescent Waves"
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

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(5, 5, 15, 0.75)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "5vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "#4A7A8C",
              fontSize: "0.8vw",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            PHOSPHORESCENCE
          </div>
          <div
            style={{
              color: "#D0E8F0",
              fontSize: "1vw",
              fontWeight: 400,
              opacity: 0.9,
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
        </div>

        {/* Data/Visual Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#D0E8F0",
              fontSize: "3.5vw",
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Market Penetration
          </h2>
          <div
            style={{
              width: "6vw",
              height: "1px",
              background: "#D0E8F0",
              marginTop: "2vh",
              marginBottom: "6vh",
              opacity: 0.4,
            }}
          />
          
          <div
            style={{
              display: "flex",
              gap: "4vw",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {[
              { label: "Oceanic Reach", value: "78%", desc: "Global waters illuminated" },
              { label: "Energy Saved", value: "45M", desc: "Kilowatt hours per year" },
              { label: "New Species", value: "12k", desc: "Discovered in the depths" }
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  padding: "5vh 3vw",
                  background: "rgba(74, 122, 140, 0.1)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid rgba(74, 122, 140, 0.2)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    color: "#D0E8F0",
                    fontSize: "5vw",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 400,
                    marginBottom: "1vh",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    color: "#4A7A8C",
                    fontSize: "1.2vw",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "1vh",
                  }}
                >
                  {stat.label}
                </div>
                <div
                  style={{
                    color: "#D0E8F0",
                    fontSize: "0.9vw",
                    opacity: 0.7,
                    fontWeight: 300,
                  }}
                >
                  {stat.desc}
                </div>
              </div>
            ))}
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
              color: "#4A7A8C",
              fontSize: "0.8vw",
              fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
              opacity: 0.8,
            }}
          >
            Chapter III
          </div>
          <div
            style={{
              color: "#4A7A8C",
              fontSize: "1vw",
              fontFamily: "'DM Mono', monospace",
              opacity: 0.8,
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

### Slide 4 (`slide-pages/BioluminescentSeaPage4.tsx`)

```tsx
export function BioluminescentSeaPage4() {
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
      {/* Full-bleed background image */}
      <img
        src="/__mockup/photos/bioluminescent-waves.png"
        alt="Bioluminescent Waves"
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

      {/* Gradient overlay for dramatic closing */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(180deg, rgba(5,5,15,0.4) 0%, rgba(5,5,15,0.95) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "5vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "#4A7A8C",
              fontSize: "0.8vw",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            PHOSPHORESCENCE
          </div>
          <div
            style={{
              color: "#D0E8F0",
              fontSize: "1vw",
              fontWeight: 400,
              opacity: 0.9,
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
        </div>

        {/* CTA Content */}
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
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#D0E8F0",
              fontSize: "7vw",
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Illuminate.
          </h2>
          
          <p
            style={{
              color: "#D0E8F0",
              fontSize: "1.5vw",
              maxWidth: "40vw",
              lineHeight: 1.6,
              fontWeight: 300,
              opacity: 0.85,
              marginTop: "4vh",
              marginBottom: "6vh",
            }}
          >
            Join us in exploring the unseen and bringing light to the darkest depths. The future is glowing.
          </p>
          
          <div
            style={{
              padding: "2vh 4vw",
              border: "1px solid #4A7A8C",
              color: "#D0E8F0",
              fontSize: "1vw",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              cursor: "pointer",
            }}
          >
            Get in touch
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
              color: "#4A7A8C",
              fontSize: "0.8vw",
              fontStyle: "italic",
              fontFamily: "'Playfair Display', serif",
              opacity: 0.8,
            }}
          >
            Epilogue
          </div>
          <div
            style={{
              color: "#4A7A8C",
              fontSize: "1vw",
              fontFamily: "'DM Mono', monospace",
              opacity: 0.8,
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
