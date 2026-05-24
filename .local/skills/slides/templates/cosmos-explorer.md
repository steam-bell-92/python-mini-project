# Cosmos Explorer

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "CosmosExplorer" template embodies a futuristic and space-themed aesthetic. It features a solid background color of #05050F, complemented by a gradient overlay transitioning from transparent to rgba(5,5,15,0.85). The text and accent colors include #E0E8F0 for primary text, #6A8AAA for secondary text, and rgba(224, 232, 240, 0.7) for subtle text elements. The font families used are 'Space Grotesk' for headings and key text, 'DM Mono' for monospace elements, and Georgia in italic for a stylistic touch, enhancing the overall theme. Key layout elements include a full-screen astronaut image positioned absolutely, a gradient overlay for depth, and a structured layout with flexbox for content alignment. The background image is sourced from "/__mockup/photos/astronaut-space.png". The overall aesthetic feel is "futuristic space."

## Source Code

**Component:** `CosmosExplorer`

### Slide 1 — Title (`slide-styles/CosmosExplorer.tsx`)

```tsx
export function CosmosExplorer() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#05050F",
        color: "#E0E8F0",
      }}
    >
      <img
        src="/__mockup/photos/astronaut-space.png"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        alt="Astronaut floating in space"
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to right, transparent 55%, rgba(5,5,15,0.7) 65%, rgba(5,5,15,0.85) 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "45vw",
          height: "100vh",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#6A8AAA",
                fontSize: "0.9vw",
                fontWeight: 600,
                letterSpacing: "0.15vw",
              }}
            >
              MISSION BRIEF
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#E0E8F0",
                fontSize: "1vw",
                letterSpacing: "0.05vw",
              }}
            >
              ORBIT: LEO-7
            </span>
          </div>

          <div
            style={{
              width: "2.5vw",
              height: "2.5vw",
              borderRadius: "50%",
              border: "1px solid #6A8AAA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "0.5vw",
                height: "0.5vw",
                borderRadius: "50%",
                background: "#E0E8F0",
              }}
            />
          </div>
        </div>

        <div style={{ marginTop: "auto", marginBottom: "auto" }}>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "6vw",
              color: "#E0E8F0",
              margin: "0 0 3vh 0",
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: "-0.1vw",
            }}
          >
            Example
            <br />
            Deck
          </h1>
          
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(224, 232, 240, 0.7)",
              fontSize: "1.2vw",
              lineHeight: 1.6,
              margin: 0,
              maxWidth: "30vw",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#6A8AAA",
                fontSize: "0.8vw",
                letterSpacing: "0.05vw",
              }}
            >
              ALT: 408 KM
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#6A8AAA",
                fontSize: "0.8vw",
                letterSpacing: "0.05vw",
              }}
            >
              VEL: 7.66 KM/S
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1vh" }}>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                color: "#E0E8F0",
                fontSize: "1vw",
                letterSpacing: "0.05vw",
              }}
            >
              AD ASTRA
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#6A8AAA",
                fontSize: "0.9vw",
                opacity: 0.8,
              }}
            >
              acme.co
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CosmosExplorerPage2.tsx`)

```tsx
export function CosmosExplorerPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#05050F",
        color: "#E0E8F0",
      }}
    >
      <img
        src="/__mockup/photos/astronaut-space.png"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.3,
        }}
        alt="Space Background"
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to bottom, rgba(5,5,15,0.7) 0%, rgba(5,5,15,0.95) 100%)",
          zIndex: 1,
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
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#6A8AAA",
                fontSize: "0.9vw",
                fontWeight: 600,
                letterSpacing: "0.15vw",
              }}
            >
              MISSION ARCHITECTURE
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "3vw",
                color: "#E0E8F0",
                margin: "1vh 0 0 0",
                lineHeight: 1.1,
                fontWeight: 500,
                letterSpacing: "-0.05vw",
              }}
            >
              System Capabilities
            </h2>
          </div>

          <div
            style={{
              width: "2.5vw",
              height: "2.5vw",
              borderRadius: "50%",
              border: "1px solid #6A8AAA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "0.5vw",
                height: "0.5vw",
                borderRadius: "50%",
                background: "#E0E8F0",
              }}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "8vh",
            display: "flex",
            gap: "4vw",
            flex: 1,
          }}
        >
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
            <div
              style={{
                padding: "3vh 2vw",
                borderTop: "1px solid rgba(106, 138, 170, 0.3)",
                background: "linear-gradient(to right, rgba(106, 138, 170, 0.05), transparent)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1.2vw",
                  color: "#E0E8F0",
                  margin: "0 0 1.5vh 0",
                  letterSpacing: "0.05vw",
                }}
              >
                01 / ORBITAL INSERTION
              </h3>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "rgba(224, 232, 240, 0.7)",
                  fontSize: "1vw",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Precision maneuvering systems capable of multi-stage deployment across varied gravitational fields. Optimized for deep space trajectories.
              </p>
            </div>
            <div
              style={{
                padding: "3vh 2vw",
                borderTop: "1px solid rgba(106, 138, 170, 0.3)",
                background: "linear-gradient(to right, rgba(106, 138, 170, 0.05), transparent)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1.2vw",
                  color: "#E0E8F0",
                  margin: "0 0 1.5vh 0",
                  letterSpacing: "0.05vw",
                }}
              >
                02 / TELEMETRY LINK
              </h3>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "rgba(224, 232, 240, 0.7)",
                  fontSize: "1vw",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Quantum-encrypted communications array ensuring zero-latency data transmission. High fidelity link preservation.
              </p>
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
            <div
              style={{
                padding: "3vh 2vw",
                borderTop: "1px solid rgba(106, 138, 170, 0.3)",
                background: "linear-gradient(to right, rgba(106, 138, 170, 0.05), transparent)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1.2vw",
                  color: "#E0E8F0",
                  margin: "0 0 1.5vh 0",
                  letterSpacing: "0.05vw",
                }}
              >
                03 / LIFE SUPPORT
              </h3>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "rgba(224, 232, 240, 0.7)",
                  fontSize: "1vw",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Closed-loop resource generation with advanced biomimetic filtration. Built for extended habitation beyond Earth-normal parameters.
              </p>
            </div>
            <div
              style={{
                padding: "3vh 2vw",
                borderTop: "1px solid rgba(106, 138, 170, 0.3)",
                background: "linear-gradient(to right, rgba(106, 138, 170, 0.05), transparent)",
              }}
            >
              <h3
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1.2vw",
                  color: "#E0E8F0",
                  margin: "0 0 1.5vh 0",
                  letterSpacing: "0.05vw",
                }}
              >
                04 / PROPULSION
              </h3>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "rgba(224, 232, 240, 0.7)",
                  fontSize: "1vw",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                Next-generation ion drives utilizing magnetically confined plasma. Unprecedented efficiency for long-haul operations.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#6A8AAA",
                fontSize: "0.8vw",
                letterSpacing: "0.05vw",
              }}
            >
              SYS: NOMINAL
            </span>
          </div>

          <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                color: "rgba(224, 232, 240, 0.5)",
                fontSize: "1vw",
                letterSpacing: "0.05vw",
              }}
            >
              AD ASTRA
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#E0E8F0",
                fontSize: "1vw",
                fontWeight: 600,
              }}
            >
              02
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CosmosExplorerPage3.tsx`)

```tsx
export function CosmosExplorerPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#05050F",
        color: "#E0E8F0",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at center, rgba(106, 138, 170, 0.1) 0%, #05050F 70%)",
          zIndex: 1,
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
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#6A8AAA",
                fontSize: "0.9vw",
                fontWeight: 600,
                letterSpacing: "0.15vw",
              }}
            >
              FLIGHT DYNAMICS
            </span>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "3vw",
                color: "#E0E8F0",
                margin: "1vh 0 0 0",
                lineHeight: 1.1,
                fontWeight: 500,
                letterSpacing: "-0.05vw",
              }}
            >
              Velocity Profiles
            </h2>
          </div>

          <div
            style={{
              width: "2.5vw",
              height: "2.5vw",
              borderRadius: "50%",
              border: "1px solid #6A8AAA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "0.5vw",
                height: "0.5vw",
                borderRadius: "50%",
                background: "#E0E8F0",
              }}
            />
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4vw",
            marginTop: "4vh",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              height: "40vh",
              gap: "2vw",
              paddingBottom: "2vh",
              borderBottom: "1px solid rgba(106, 138, 170, 0.3)",
            }}
          >
            {[
              { label: "T+10", value: 35, color: "rgba(106, 138, 170, 0.4)" },
              { label: "T+20", value: 60, color: "rgba(106, 138, 170, 0.6)" },
              { label: "T+30", value: 45, color: "rgba(106, 138, 170, 0.8)" },
              { label: "T+40", value: 90, color: "#E0E8F0" },
              { label: "T+50", value: 75, color: "rgba(106, 138, 170, 0.8)" },
            ].map((bar, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: bar.color,
                    fontSize: "1vw",
                  }}
                >
                  {bar.value}%
                </span>
                <div
                  style={{
                    width: "4vw",
                    height: `${bar.value * 0.3}vh`,
                    background: bar.color,
                    borderRadius: "0.2vw",
                  }}
                />
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "#6A8AAA",
                    fontSize: "0.8vw",
                    letterSpacing: "0.05vw",
                    marginTop: "1vh",
                  }}
                >
                  {bar.label}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              width: "25vw",
              display: "flex",
              flexDirection: "column",
              gap: "3vh",
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "3vw",
                  color: "#E0E8F0",
                  margin: "0 0 0.5vh 0",
                  lineHeight: 1,
                }}
              >
                90<span style={{ fontSize: "1.5vw", color: "#6A8AAA" }}>%</span>
              </h3>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "rgba(224, 232, 240, 0.7)",
                  fontSize: "1vw",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Peak efficiency reached at T+40 interval during primary burn sequence.
              </p>
            </div>
            
            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(106, 138, 170, 0.3)",
              }}
            />
            
            <div>
              <h3
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "3vw",
                  color: "#E0E8F0",
                  margin: "0 0 0.5vh 0",
                  lineHeight: 1,
                }}
              >
                11.2<span style={{ fontSize: "1.5vw", color: "#6A8AAA" }}>KM/S</span>
              </h3>
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "rgba(224, 232, 240, 0.7)",
                  fontSize: "1vw",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                Escape velocity confirmed, trajectory locked for trans-lunar injection.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginTop: "auto",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#6A8AAA",
                fontSize: "0.8vw",
                letterSpacing: "0.05vw",
              }}
            >
              DATA: TELEMETRY_V2
            </span>
          </div>

          <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                color: "rgba(224, 232, 240, 0.5)",
                fontSize: "1vw",
                letterSpacing: "0.05vw",
              }}
            >
              AD ASTRA
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#E0E8F0",
                fontSize: "1vw",
                fontWeight: 600,
              }}
            >
              03
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CosmosExplorerPage4.tsx`)

```tsx
export function CosmosExplorerPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        background: "#05050F",
        color: "#E0E8F0",
      }}
    >
      <img
        src="/__mockup/photos/astronaut-space.png"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          opacity: 0.5,
          filter: "grayscale(50%)",
        }}
        alt="Space Background"
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to top, #05050F 10%, transparent 50%, #05050F 90%)",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "rgba(5, 5, 15, 0.6)",
          zIndex: 1,
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
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              width: "3vw",
              height: "3vw",
              borderRadius: "50%",
              border: "1px solid #6A8AAA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "0.6vw",
                height: "0.6vw",
                borderRadius: "50%",
                background: "#E0E8F0",
              }}
            />
          </div>
        </div>

        <div 
          style={{ 
            flex: 1, 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "center", 
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#6A8AAA",
              fontSize: "1.2vw",
              fontWeight: 600,
              letterSpacing: "0.2vw",
              marginBottom: "3vh",
            }}
          >
            INITIATE SEQUENCE
          </span>
          
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "7vw",
              color: "#E0E8F0",
              margin: "0 0 4vh 0",
              lineHeight: 1,
              fontWeight: 500,
              letterSpacing: "-0.2vw",
            }}
          >
            Launch<br />Ready
          </h1>
          
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "rgba(224, 232, 240, 0.8)",
              fontSize: "1.4vw",
              lineHeight: 1.6,
              margin: "0 0 6vh 0",
              maxWidth: "40vw",
            }}
          >
            All systems go. The frontier awaits our next giant leap. Join us as we push the boundaries of known space.
          </p>

          <div
            style={{
              padding: "2vh 4vw",
              border: "1px solid #6A8AAA",
              color: "#E0E8F0",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1vw",
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
              background: "rgba(106, 138, 170, 0.1)",
              cursor: "pointer",
            }}
          >
            ENGAGE THRUSTERS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#6A8AAA",
                fontSize: "0.9vw",
                opacity: 0.8,
              }}
            >
              hello@acme.co
            </span>
          </div>

          <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
            <span
              style={{
                fontFamily: "Georgia, serif",
                fontStyle: "italic",
                color: "rgba(224, 232, 240, 0.5)",
                fontSize: "1vw",
                letterSpacing: "0.05vw",
              }}
            >
              AD ASTRA
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#E0E8F0",
                fontSize: "1vw",
                fontWeight: 600,
              }}
            >
              04
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
```
