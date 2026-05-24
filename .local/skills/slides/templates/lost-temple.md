# Lost Temple

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "LostTemple" template features a dark, adventurous aesthetic, reminiscent of ancient ruins and exploration themes. The background color is a solid #0C0A08, complemented by a linear gradient overlay that transitions from transparent to rgba(12,10,8,0.88) at the bottom 45%. Text colors include #B8965A for accents and #E8D8C4 for primary text, creating a warm contrast against the dark background. The font families used are 'DM Mono' for metadata and footer elements, 'Playfair Display' for headings and italicized text, and 'Inter' for the subtitle, providing a mix of modern and classic styles. Key layout elements include a full-screen background image of a jungle temple, positioned absolutely, and a content container that flexibly positions text at the bottom, enhancing readability. The overall aesthetic feel is "mysterious, adventurous."

## Source Code

**Component:** `LostTemple`

### Slide 1 — Title (`slide-styles/LostTemple.tsx`)

```tsx
export function LostTemple() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0C0A08",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/jungle-temple.png"
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

      {/* Dark Gradient Overlay on the bottom 45% */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, transparent 55%, rgba(12,10,8,0.88) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh", marginBottom: "8vh" }}>
          {/* Top Metadata Row */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#B8965A",
                fontSize: "0.8vw",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
              }}
            >
              LOST KINGDOMS
            </div>
            <div
              style={{
                width: "12vw",
                height: "1px",
                backgroundColor: "#B8965A",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#E8D8C4",
                opacity: 0.8,
                fontSize: "0.8vw",
                letterSpacing: "0.1em",
              }}
            >
              EXPEDITION LOG
            </div>
          </div>

          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#B8965A",
              fontSize: "1.2vw",
            }}
          >
            ◆ Field Report No. 1
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#E8D8C4",
              fontSize: "8vw",
              lineHeight: 1,
              margin: 0,
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            Example Deck
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#E8D8C4",
              opacity: 0.85,
              fontSize: "1.6vw",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "50vw",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#E8D8C4",
              opacity: 0.6,
              fontSize: "0.9vw",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#B8965A",
              opacity: 0.8,
              fontSize: "1vw",
            }}
          >
            Est. MMXXVI
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/LostTemplePage2.tsx`)

```tsx
export function LostTemplePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0C0A08",
      }}
    >
      {/* Background Image with Heavy Overlay */}
      <img
        src="/__mockup/photos/jungle-temple.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
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
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(12,10,8,0.95) 0%, rgba(12,10,8,0.8) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: "8vh 8vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "6vh" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#B8965A",
              fontSize: "0.8vw",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            DISCOVERY
          </div>
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#B8965A",
              opacity: 0.6,
            }}
          />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#E8D8C4",
              fontSize: "2.5vw",
              margin: 0,
              fontWeight: 400,
            }}
          >
            The Path Forward
          </h2>
        </div>

        {/* Body */}
        <div style={{ display: "flex", gap: "6vw", flexGrow: 1, marginTop: "4vh" }}>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E8D8C4",
                opacity: 0.9,
                fontSize: "1.4vw",
                lineHeight: 1.6,
                marginBottom: "4vh",
              }}
            >
              Every expedition begins with a profound sense of the unknown. We chart the unseen territories of the market, identifying areas of vast potential that others have left undisturbed.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E8D8C4",
                opacity: 0.7,
                fontSize: "1.2vw",
                lineHeight: 1.7,
              }}
            >
              Our methodology combines ancient wisdom with modern precision, allowing us to unearth opportunities that lie hidden beneath the dense canopy of conventional thinking. We don't just follow trails; we forge them.
            </p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
            {[
              { title: "Excavation", desc: "Deep diving into the strata of consumer behavior." },
              { title: "Navigation", desc: "Steering through complex regulatory environments." },
              { title: "Preservation", desc: "Securing long-term value for future generations." },
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: "2px solid #B8965A", paddingLeft: "2vw" }}>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#B8965A",
                    fontSize: "1.8vw",
                    margin: "0 0 1vh 0",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    color: "#E8D8C4",
                    opacity: 0.8,
                    fontSize: "1.1vw",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#E8D8C4",
              opacity: 0.6,
              fontSize: "0.9vw",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#B8965A",
              fontSize: "0.9vw",
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

### Slide 3 (`slide-pages/LostTemplePage3.tsx`)

```tsx
export function LostTemplePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0C0A08",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "radial-gradient(#B8965A 1px, transparent 1px)",
          backgroundSize: "3vw 3vw",
          opacity: 0.05,
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          padding: "8vh 8vw",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "8vh" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#B8965A",
              fontSize: "0.8vw",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            EVIDENCE
          </div>
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#B8965A",
              opacity: 0.6,
            }}
          />
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#E8D8C4",
              fontSize: "2.5vw",
              margin: 0,
              fontWeight: 400,
            }}
          >
            Treasures Unearthed
          </h2>
        </div>

        {/* Data Points */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexGrow: 1, padding: "0 2vw" }}>
          {[
            { value: "482", label: "ARTIFACTS RECOVERED", detail: "Rare market insights gathered over two decades." },
            { value: "15x", label: "RETURN ON EXPEDITION", label2: "MULTIPLIER", detail: "Exponential growth from baseline investments." },
            { value: "99%", label: "TERRAIN MAPPED", detail: "Comprehensive understanding of the ecosystem." },
          ].map((stat, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "25vw" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#B8965A",
                  fontSize: "8vw",
                  lineHeight: 1,
                  fontWeight: 400,
                  marginBottom: "2vh",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  color: "#E8D8C4",
                  fontSize: "1vw",
                  letterSpacing: "0.15em",
                  marginBottom: "2vh",
                }}
              >
                {stat.label}
                {stat.label2 && <><br />{stat.label2}</>}
              </div>
              <div
                style={{
                  width: "2vw",
                  height: "2px",
                  backgroundColor: "#B8965A",
                  opacity: 0.5,
                  marginBottom: "2vh",
                }}
              />
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#E8D8C4",
                  opacity: 0.7,
                  fontSize: "1vw",
                  lineHeight: 1.5,
                  margin: 0,
                }}
              >
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#E8D8C4",
              opacity: 0.6,
              fontSize: "0.9vw",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#B8965A",
              fontSize: "0.9vw",
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

### Slide 4 (`slide-pages/LostTemplePage4.tsx`)

```tsx
export function LostTemplePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0C0A08",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/jungle-temple.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          transform: "scale(1.1)",
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, rgba(12,10,8,0.95) 0%, rgba(12,10,8,0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "8vh 8vw",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            color: "#B8965A",
            fontSize: "1.5vw",
            marginBottom: "3vh",
          }}
        >
          ◆ The Journey Awaits
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#E8D8C4",
            fontSize: "6vw",
            lineHeight: 1.1,
            margin: "0 0 4vh 0",
            fontWeight: 400,
            maxWidth: "70vw",
          }}
        >
          Join the Expedition.
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#E8D8C4",
            opacity: 0.8,
            fontSize: "1.4vw",
            lineHeight: 1.6,
            margin: "0 0 6vh 0",
            maxWidth: "40vw",
          }}
        >
          Discover what lies beneath the surface. Reach out to our guild of explorers to chart your next course.
        </p>

        <div style={{ display: "flex", gap: "4vw" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#B8965A",
                fontSize: "0.8vw",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              DISPATCH
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E8D8C4",
                fontSize: "1.2vw",
              }}
            >
              hello@acme.co
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#B8965A",
                fontSize: "0.8vw",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              COORDINATES
            </span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#E8D8C4",
                fontSize: "1.2vw",
              }}
            >
              123 Hidden Valley
            </span>
          </div>
        </div>

        {/* Footer */}
        <div style={{ position: "absolute", bottom: "8vh", left: "8vw", right: "8vw", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#E8D8C4",
              opacity: 0.6,
              fontSize: "0.9vw",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#B8965A",
              fontSize: "0.9vw",
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
