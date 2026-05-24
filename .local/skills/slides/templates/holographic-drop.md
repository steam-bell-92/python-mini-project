# Holographic Drop

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "HolographicDrop" template features a modern, futuristic aesthetic with a dark, immersive background. The primary background color is #05050A, complemented by a linear gradient that transitions from transparent to rgba(5,5,10,0.92) at the bottom. Text colors include #B8A9D4 for the main title, rgba(184, 169, 212, 0.6) for the subtitle, and #FFFFFF for the "COMING SOON" label, with additional text in rgba(255,255,255,0.7). The template utilizes the 'Inter' font for most text elements, providing a clean and contemporary look, while 'Space Grotesk' is used for the main heading to add a distinctive flair. Key layout elements include a full-screen background image of iridescent bubbles located at "/__mockup/photos/iridescent-bubbles.png," and various flexbox arrangements for positioning text and decorative elements. The overall aesthetic feel can be described as "futuristic elegance."

## Source Code

**Component:** `HolographicDrop`

### Slide 1 — Title (`slide-styles/HolographicDrop.tsx`)

```tsx
export function HolographicDrop() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#05050A",
      }}
    >
      <img
        src="/__mockup/photos/iridescent-bubbles.png"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        alt="Iridescent bubbles"
      />

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to bottom, transparent 50%, rgba(5,5,10,0.92) 100%)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "3vh" }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#B8A9D4",
              fontSize: "0.9vw",
              letterSpacing: "0.2vw",
              fontWeight: 500,
              textTransform: "uppercase",
            }}
          >
            DROP 001
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(184, 169, 212, 0.6)",
              fontSize: "0.9vw",
              letterSpacing: "0.1vw",
            }}
          >
            LIMITED EDITION
          </span>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "10vw",
              padding: "0.6vh 1.2vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#FFFFFF",
                fontSize: "0.7vw",
                fontWeight: 600,
                letterSpacing: "0.1vw",
              }}
            >
              COMING SOON
            </span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4vh" }}>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "8vw",
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 0.9,
              fontWeight: 700,
              letterSpacing: "-0.2vw",
            }}
          >
            Example
            <br />
            Deck
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.4vw",
              lineHeight: 1.5,
              maxWidth: "24vw",
              margin: 0,
              paddingBottom: "1vh",
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
            borderTop: "1px solid rgba(184, 169, 212, 0.2)",
            paddingTop: "3vh",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#FFFFFF",
              fontSize: "1vw",
              fontWeight: 500,
            }}
          >
            acme.co
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(184, 169, 212, 0.7)",
              fontSize: "1vw",
            }}
          >
            ©2026
          </span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/HolographicDropPage2.tsx`)

```tsx
export function HolographicDropPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#05050A",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at 80% 20%, rgba(184, 169, 212, 0.08) 0%, transparent 40%)",
          zIndex: 0,
        }}
      />
      
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "8vh" }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#B8A9D4",
              fontSize: "0.9vw",
              letterSpacing: "0.2vw",
              fontWeight: 500,
            }}
          >
            02
          </span>
          <div style={{ width: "2vw", height: "1px", background: "rgba(184, 169, 212, 0.3)" }}></div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(184, 169, 212, 0.6)",
              fontSize: "0.9vw",
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
            }}
          >
            The Concept
          </span>
        </div>

        {/* Content */}
        <div style={{ display: "flex", gap: "6vw", flex: 1 }}>
          <div style={{ flex: "1" }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "5vw",
                color: "#FFFFFF",
                margin: "0 0 4vh 0",
                lineHeight: 1,
                fontWeight: 700,
                letterSpacing: "-0.1vw",
              }}
            >
              Immersive
              <br />
              Digital
              <br />
              Experiences
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.4vw",
                lineHeight: 1.6,
                maxWidth: "35vw",
                margin: 0,
              }}
            >
              We are redefining the boundaries between physical and digital spaces. By blending cutting-edge holographic projection with generative AI, we create environments that respond to human emotion and intent in real-time.
            </p>
          </div>

          <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4vh", justifyContent: "center" }}>
            {[
              { title: "Sensory Integration", desc: "Haptic feedback combined with spatial audio creates a full-body experience." },
              { title: "Generative Environments", desc: "Spaces that evolve and adapt based on user interactions and biometric data." },
              { title: "Seamless Connectivity", desc: "No headsets required. The environment itself becomes the interface." }
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderLeft: "2px solid rgba(184, 169, 212, 0.2)",
                  paddingLeft: "2vw",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#FFFFFF",
                    fontSize: "1.4vw",
                    fontWeight: 600,
                    margin: "0 0 1vh 0",
                    letterSpacing: "0.05vw",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(184, 169, 212, 0.7)",
                    fontSize: "1vw",
                    lineHeight: 1.5,
                    margin: 0,
                    maxWidth: "25vw",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(184, 169, 212, 0.2)",
            paddingTop: "3vh",
            marginTop: "auto",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#FFFFFF",
              fontSize: "1vw",
              fontWeight: 500,
            }}
          >
            acme.co
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(184, 169, 212, 0.7)",
              fontSize: "1vw",
            }}
          >
            02
          </span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/HolographicDropPage3.tsx`)

```tsx
export function HolographicDropPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#05050A",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at 20% 80%, rgba(184, 169, 212, 0.08) 0%, transparent 40%)",
          zIndex: 0,
        }}
      />
      
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "8vh" }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#B8A9D4",
              fontSize: "0.9vw",
              letterSpacing: "0.2vw",
              fontWeight: 500,
            }}
          >
            03
          </span>
          <div style={{ width: "2vw", height: "1px", background: "rgba(184, 169, 212, 0.3)" }}></div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(184, 169, 212, 0.6)",
              fontSize: "0.9vw",
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
            }}
          >
            System Metrics
          </span>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "4vw",
              color: "#FFFFFF",
              margin: "0 0 8vh 0",
              lineHeight: 1.1,
              fontWeight: 700,
              letterSpacing: "-0.1vw",
              maxWidth: "45vw",
            }}
          >
            Performance & Adoption
          </h2>

          <div style={{ display: "flex", gap: "4vw", marginBottom: "8vh" }}>
            {[
              { value: "4.2B", label: "Interactions processed daily", highlight: true },
              { value: "0.8ms", label: "Average latency per request", highlight: false },
              { value: "99.9%", label: "System uptime SLA", highlight: false },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(184, 169, 212, 0.1)",
                  borderRadius: "1vw",
                  padding: "4vh 3vw",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "4.5vw",
                    color: stat.highlight ? "#B8A9D4" : "#FFFFFF",
                    fontWeight: 700,
                    marginBottom: "2vh",
                    letterSpacing: "-0.15vw",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "1.1vw",
                    lineHeight: 1.4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: "1vw", height: "15vh" }}>
            {[30, 45, 35, 60, 50, 75, 65, 85, 95, 100].map((height, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${height}%`,
                  background: i === 9 ? "#B8A9D4" : "rgba(184, 169, 212, 0.2)",
                  borderRadius: "0.3vw 0.3vw 0 0",
                  transition: "height 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(184, 169, 212, 0.2)",
            paddingTop: "3vh",
            marginTop: "auto",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#FFFFFF",
              fontSize: "1vw",
              fontWeight: 500,
            }}
          >
            acme.co
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(184, 169, 212, 0.7)",
              fontSize: "1vw",
            }}
          >
            03
          </span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/HolographicDropPage4.tsx`)

```tsx
export function HolographicDropPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#05050A",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle at center, rgba(184, 169, 212, 0.15) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />
      
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "auto" }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#B8A9D4",
              fontSize: "0.9vw",
              letterSpacing: "0.2vw",
              fontWeight: 500,
            }}
          >
            04
          </span>
          <div style={{ width: "2vw", height: "1px", background: "rgba(184, 169, 212, 0.3)" }}></div>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(184, 169, 212, 0.6)",
              fontSize: "0.9vw",
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
            }}
          >
            Next Steps
          </span>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", margin: "auto 0" }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "9vw",
              color: "#FFFFFF",
              margin: "0 0 3vh 0",
              lineHeight: 0.9,
              fontWeight: 700,
              letterSpacing: "-0.2vw",
            }}
          >
            Step Into
            <br />
            The Light
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.4vw",
              lineHeight: 1.5,
              maxWidth: "35vw",
              margin: "0 0 6vh 0",
            }}
          >
            Early access opens next month. Join the vanguard of creators defining the next spatial computing paradigm.
          </p>
          
          <div
            style={{
              background: "#FFFFFF",
              color: "#05050A",
              padding: "2vh 4vw",
              borderRadius: "10vw",
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1vw",
              fontWeight: 600,
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "1vw",
            }}
          >
            Request Access
            <span style={{ fontSize: "1.2vw" }}>&rarr;</span>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(184, 169, 212, 0.2)",
            paddingTop: "3vh",
            marginTop: "auto",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#FFFFFF",
              fontSize: "1vw",
              fontWeight: 500,
            }}
          >
            acme.co
          </span>
          <div style={{ display: "flex", gap: "2vw" }}>
            {["Twitter", "Discord", "GitHub"].map((link) => (
              <span
                key={link}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "rgba(184, 169, 212, 0.7)",
                  fontSize: "1vw",
                }}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```
