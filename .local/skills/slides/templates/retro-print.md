# Retro Print / Mystical

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "RetroPrint" template features a vintage aesthetic with a clean and modern twist. It has a background color of #F5F0E6, complemented by a subtle radial gradient of rgba(0,0,0,0.05) that creates a textured effect. The primary text and accent color is #1B2A4A, while the secondary accent color is #E8573A, used for emphasis. The font families include 'Inter' for general text and 'Playfair Display' for the main heading, providing a mix of modern sans-serif and classic serif styles. Key layout elements include two decorative frames with a solid border, a left content column with structured text, and a right column featuring an image of a glowing crystal orb. The image is sourced from "/__mockup/images/illust-retro-orb-nobg.png". Overall, the aesthetic feel can be described as "vintage elegance."

## Source Code

**Component:** `RetroPrint`

### Slide 1 — Title (`slide-styles/RetroPrint.tsx`)

```tsx
export function RetroPrint() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F0E6",
        backgroundImage: "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
        backgroundSize: "4px 4px",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer Decorative Frame */}
      <div
        style={{
          position: "absolute",
          top: "2.5vh",
          bottom: "2.5vh",
          left: "2.5vw",
          right: "2.5vw",
          border: "1px solid #1B2A4A",
          pointerEvents: "none",
        }}
      >
        {/* Inner Decorative Frame */}
        <div
          style={{
            position: "absolute",
            top: "0.8vh",
            bottom: "0.8vh",
            left: "0.4vw",
            right: "0.4vw",
            border: "1px solid #1B2A4A",
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10vh 8vw",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Left Content Column */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: "45vw",
          }}
        >
          <div
            style={{
              fontSize: "1.2vw",
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#1B2A4A",
              marginBottom: "4vh",
              fontWeight: 600,
            }}
          >
            Example Company Deck
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "7.5vw",
              fontWeight: 700,
              color: "#1B2A4A",
              margin: "0 0 1vh 0",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}
          >
            Oracle
          </h1>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5vw",
              marginBottom: "3vh",
            }}
          >
            <div style={{ height: "1px", width: "4vw", backgroundColor: "#1B2A4A" }} />
            <div style={{ color: "#1B2A4A", fontSize: "1vw" }}>◆</div>
            <div style={{ height: "1px", width: "4vw", backgroundColor: "#1B2A4A" }} />
          </div>

          <h2
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "2.2vw",
              fontWeight: 400,
              color: "#E8573A",
              margin: 0,
              letterSpacing: "0.02em",
            }}
          >
            See what others cannot.
          </h2>

          <div
            style={{
              marginTop: "8vh",
              fontSize: "0.9vw",
              lineHeight: 1.6,
              color: "rgba(27, 42, 74, 0.7)",
              maxWidth: "30vw",
            }}
          >
            Discover the hidden patterns that drive tomorrow's markets. Our
            proprietary methodology uncovers insights where others see only noise.
          </div>
        </div>

        {/* Right Image Column */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <img
            src="/__mockup/images/illust-retro-orb-nobg.png"
            alt="Glowing crystal orb with geometric patterns"
            style={{
              height: "65vh",
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 4vw rgba(212, 175, 55, 0.4))",
              transform: "translateX(-2vw)",
            }}
          />
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "0",
          right: "0",
          textAlign: "center",
          fontSize: "0.85vw",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#1B2A4A",
          fontVariant: "small-caps",
        }}
      >
        Example Company, Inc. / Confidential / 2026
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/RetroPrintPage2.tsx`)

```tsx
export function RetroPrintPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F0E6",
        backgroundImage: "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
        backgroundSize: "4px 4px",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#1B2A4A",
      }}
    >
      {/* Outer Decorative Frame */}
      <div
        style={{
          position: "absolute",
          top: "2.5vh",
          bottom: "2.5vh",
          left: "2.5vw",
          right: "2.5vw",
          border: "1px solid #1B2A4A",
          pointerEvents: "none",
        }}
      >
        {/* Inner Decorative Frame */}
        <div
          style={{
            position: "absolute",
            top: "0.8vh",
            bottom: "0.8vh",
            left: "0.4vw",
            right: "0.4vw",
            border: "1px solid #1B2A4A",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "2vw",
          position: "absolute",
          top: "12vh",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ height: "1px", width: "10vw", backgroundColor: "#1B2A4A" }} />
          <div style={{ fontSize: "0.8vw", marginLeft: "0.5vw" }}>◆</div>
        </div>
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4vw",
            fontWeight: 700,
            margin: 0,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          Our Practice
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ fontSize: "0.8vw", marginRight: "0.5vw" }}>◆</div>
          <div style={{ height: "1px", width: "10vw", backgroundColor: "#1B2A4A" }} />
        </div>
      </div>

      <div
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.2vw",
          letterSpacing: "0.1em",
          color: "#E8573A",
          position: "absolute",
          top: "22vh",
          textTransform: "uppercase",
        }}
      >
        We see what others cannot
      </div>

      {/* Cards Container */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2vw",
          marginTop: "10vh",
          zIndex: 1,
        }}
      >
        {/* Card 1 - Strategy */}
        <div
          style={{
            width: "20vw",
            height: "45vh",
            backgroundColor: "#F5F0E6", // Cream
            border: "1px solid #1B2A4A",
            padding: "0.8vw",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              border: "1px solid #1B2A4A",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "3vh 2vw",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2.5vw", color: "#1B2A4A", marginBottom: "2vh" }}>◆</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8vw",
                fontWeight: 700,
                margin: "0 0 2vh 0",
                letterSpacing: "0.05em",
              }}
            >
              STRATEGY
            </h2>
            <div style={{ width: "3vw", height: "1px", backgroundColor: "#E8573A", marginBottom: "3vh" }} />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9vw",
                lineHeight: 1.6,
                margin: 0,
                color: "rgba(27, 42, 74, 0.8)",
              }}
            >
              Navigate complexity with clarity. We chart paths through uncertain terrain to secure your advantage.
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ fontSize: "1.5vw", color: "#E8573A" }}>✦</div>

        {/* Card 2 - Design */}
        <div
          style={{
            width: "20vw",
            height: "45vh",
            backgroundColor: "rgba(27, 42, 74, 0.05)", // Very light navy
            border: "1px solid #1B2A4A",
            padding: "0.8vw",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            transform: "translateY(-2vh)",
          }}
        >
          <div
            style={{
              border: "1px solid #1B2A4A",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "3vh 2vw",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2.5vw", color: "#1B2A4A", marginBottom: "2vh" }}>★</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8vw",
                fontWeight: 700,
                margin: "0 0 2vh 0",
                letterSpacing: "0.05em",
              }}
            >
              DESIGN
            </h2>
            <div style={{ width: "3vw", height: "1px", backgroundColor: "#E8573A", marginBottom: "3vh" }} />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9vw",
                lineHeight: 1.6,
                margin: 0,
                color: "rgba(27, 42, 74, 0.8)",
              }}
            >
              Craft experiences that resonate. We forge deep connections between your brand and the world.
            </p>
          </div>
        </div>

        {/* Spacer */}
        <div style={{ fontSize: "1.5vw", color: "#E8573A" }}>✦</div>

        {/* Card 3 - Growth */}
        <div
          style={{
            width: "20vw",
            height: "45vh",
            backgroundColor: "rgba(232, 87, 58, 0.05)", // Very light coral
            border: "1px solid #1B2A4A",
            padding: "0.8vw",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              border: "1px solid #1B2A4A",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "3vh 2vw",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "2.5vw", color: "#1B2A4A", marginBottom: "2vh" }}>◎</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.8vw",
                fontWeight: 700,
                margin: "0 0 2vh 0",
                letterSpacing: "0.05em",
              }}
            >
              GROWTH
            </h2>
            <div style={{ width: "3vw", height: "1px", backgroundColor: "#E8573A", marginBottom: "3vh" }} />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9vw",
                lineHeight: 1.6,
                margin: 0,
                color: "rgba(27, 42, 74, 0.8)",
              }}
            >
              Scale with purpose and precision. We plant the seeds of enduring prosperity and market dominance.
            </p>
          </div>
        </div>
      </div>

      {/* Footer & Page Number */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "5vw",
          right: "5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.85vw",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <div>Example Company, Inc. / Confidential</div>
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.5vw",
            fontWeight: 600,
          }}
        >
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/RetroPrintPage3.tsx`)

```tsx
export function RetroPrintPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F0E6",
        backgroundImage: "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
        backgroundSize: "4px 4px",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Outer Decorative Frame */}
      <div
        style={{
          position: "absolute",
          top: "2.5vh",
          bottom: "2.5vh",
          left: "2.5vw",
          right: "2.5vw",
          border: "1px solid #1B2A4A",
          pointerEvents: "none",
        }}
      >
        {/* Inner Decorative Frame */}
        <div
          style={{
            position: "absolute",
            top: "0.8vh",
            bottom: "0.8vh",
            left: "0.4vw",
            right: "0.4vw",
            border: "1px solid #1B2A4A",
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "10vh 8vw",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header Section */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: "6vh" }}>
          <div>
            <div
              style={{
                fontSize: "1vw",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#E8573A",
                marginBottom: "1.5vh",
                fontWeight: 600,
              }}
            >
              Market Analysis
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "4.5vw",
                fontWeight: 700,
                color: "#1B2A4A",
                margin: 0,
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}
            >
              Predictive Metrics
            </h2>
          </div>
          <div
            style={{
              fontSize: "1.2vw",
              lineHeight: 1.5,
              color: "rgba(27, 42, 74, 0.8)",
              maxWidth: "25vw",
              textAlign: "right",
            }}
          >
            Statistical validation of the Oracle methodology across emerging global sectors.
          </div>
        </div>

        {/* Content Section - 3 Column Grid */}
        <div
          style={{
            display: "flex",
            gap: "4vw",
            flex: 1,
            marginTop: "2vh",
          }}
        >
          {/* Stat Box 1 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div
              style={{
                borderTop: "2px solid #1B2A4A",
                paddingTop: "2vh",
                marginBottom: "3vh",
              }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "6vw", color: "#1B2A4A", lineHeight: 1 }}>
                84<span style={{ fontSize: "3.5vw", color: "#E8573A" }}>%</span>
              </div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#1B2A4A", marginTop: "1vh", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Accuracy Rate
              </div>
            </div>
            <div style={{ fontSize: "0.95vw", lineHeight: 1.6, color: "rgba(27, 42, 74, 0.7)" }}>
              Our proprietary modeling consistently outperforms traditional forecasting methods in volatile market conditions.
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", backgroundColor: "rgba(27, 42, 74, 0.2)", margin: "0 1vw" }} />

          {/* Stat Box 2 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <div
              style={{
                borderTop: "2px solid #1B2A4A",
                paddingTop: "2vh",
                marginBottom: "3vh",
              }}
            >
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "6vw", color: "#1B2A4A", lineHeight: 1 }}>
                2.5<span style={{ fontSize: "3.5vw", color: "#E8573A" }}>x</span>
              </div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#1B2A4A", marginTop: "1vh", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Growth Multiplier
              </div>
            </div>
            <div style={{ fontSize: "0.95vw", lineHeight: 1.6, color: "rgba(27, 42, 74, 0.7)" }}>
              Average accelerated valuation growth for clients implementing our core strategic insights.
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: "1px", backgroundColor: "rgba(27, 42, 74, 0.2)", margin: "0 1vw" }} />

          {/* Visual/List Section */}
          <div style={{ flex: 1.2, display: "flex", flexDirection: "column" }}>
            <div style={{ borderTop: "2px solid #1B2A4A", paddingTop: "2vh", marginBottom: "2vh", fontSize: "1vw", fontWeight: 600, color: "#1B2A4A", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Key Indicators
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2vh", flex: 1 }}>
              {[
                { label: "Algorithmic Confidence", value: "92.4" },
                { label: "Market Saturation", value: "18.1" },
                { label: "Vector Variance", value: "4.7" },
                { label: "Quantum Utility", value: "88.9" }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px dashed rgba(27, 42, 74, 0.3)", paddingBottom: "1vh" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                    <div style={{ color: "#E8573A", fontSize: "0.8vw" }}>◆</div>
                    <span style={{ fontSize: "1.1vw", color: "#1B2A4A" }}>{item.label}</span>
                  </div>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.1vw", color: "#1B2A4A", fontWeight: 600 }}>
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.85vw",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#1B2A4A",
          fontVariant: "small-caps",
        }}
      >
        <span>Example Company, Inc.</span>
        <span>03</span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/RetroPrintPage4.tsx`)

```tsx
export function RetroPrintPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F0E6",
        backgroundImage: "radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)",
        backgroundSize: "4px 4px",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Outer Decorative Frame */}
      <div
        style={{
          position: "absolute",
          top: "2.5vh",
          bottom: "2.5vh",
          left: "2.5vw",
          right: "2.5vw",
          border: "1px solid #1B2A4A",
          pointerEvents: "none",
        }}
      >
        {/* Inner Decorative Frame */}
        <div
          style={{
            position: "absolute",
            top: "0.8vh",
            bottom: "0.8vh",
            left: "0.4vw",
            right: "0.4vw",
            border: "1px solid #1B2A4A",
            pointerEvents: "none",
          }}
        />
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10vh 8vw",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: "1vw",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#E8573A",
            marginBottom: "3vh",
            fontWeight: 600,
          }}
        >
          The Future Awaits
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6.5vw",
            fontWeight: 700,
            color: "#1B2A4A",
            margin: "0 0 4vh 0",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            maxWidth: "60vw",
          }}
        >
          Begin your journey with Oracle.
        </h1>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
            marginBottom: "5vh",
          }}
        >
          <div style={{ height: "1px", width: "8vw", backgroundColor: "#1B2A4A" }} />
          <div style={{ color: "#1B2A4A", fontSize: "1vw" }}>◆</div>
          <div style={{ height: "1px", width: "8vw", backgroundColor: "#1B2A4A" }} />
        </div>

        <div
          style={{
            fontSize: "1.2vw",
            lineHeight: 1.6,
            color: "rgba(27, 42, 74, 0.8)",
            maxWidth: "40vw",
            marginBottom: "8vh",
          }}
        >
          Reach out to our principal partners to schedule a private consultation and unlock the proprietary insights your business requires.
        </div>

        <div
          style={{
            display: "flex",
            gap: "6vw",
            borderTop: "1px solid rgba(27, 42, 74, 0.2)",
            borderBottom: "1px solid rgba(27, 42, 74, 0.2)",
            padding: "4vh 0",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh", alignItems: "center" }}>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "#E8573A", fontWeight: 600 }}>
              Email
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", color: "#1B2A4A" }}>
              inquiries@oracle-example.com
            </div>
          </div>
          
          <div style={{ width: "1px", backgroundColor: "rgba(27, 42, 74, 0.2)" }} />
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh", alignItems: "center" }}>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "#E8573A", fontWeight: 600 }}>
              Office
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", color: "#1B2A4A" }}>
              +1 (555) 019-8472
            </div>
          </div>
          
          <div style={{ width: "1px", backgroundColor: "rgba(27, 42, 74, 0.2)" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: "1vh", alignItems: "center" }}>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "#E8573A", fontWeight: 600 }}>
              Headquarters
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", color: "#1B2A4A" }}>
              New York, NY
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.85vw",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "#1B2A4A",
          fontVariant: "small-caps",
        }}
      >
        <span>Example Company, Inc. / Confidential</span>
        <span>04</span>
      </div>
    </div>
  );
}
```
