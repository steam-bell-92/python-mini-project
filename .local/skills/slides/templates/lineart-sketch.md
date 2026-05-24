# Line Art Sketch

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "LineartSketch" template embodies a modern, artistic aesthetic with a hand-drawn feel. The background color is a soft off-white, specifically #FEFCF8, complemented by a repeating linear gradient that introduces a subtle texture with rgba(0,0,0,0.05). Text elements are primarily in dark gray (#333) and accented with a vibrant orange (#E54D2E) for emphasis. The font families used include 'Courier New' for general text, giving a typewriter-like appearance, and 'DM Sans' for headings and accents, providing a clean, contemporary look. Key layout elements include decorative vertical margin lines in varying opacities of rgba(229, 77, 46, 0.4) and rgba(229, 77, 46, 0.2), an accent circle behind the title, and a hero illustration of a rocket launching from a laptop, sourced from "/__mockup/images/illust-lineart-rocket-nobg.png". The overall aesthetic feel can be described as "artistic, modern, playful."

## Source Code

**Component:** `LineartSketch`

### Slide 1 — Title (`slide-styles/LineartSketch.tsx`)

```tsx
export function LineartSketch() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FEFCF8",
        backgroundImage:
          "repeating-linear-gradient(transparent, transparent 4.9vh, rgba(0,0,0,0.05) 4.9vh, rgba(0,0,0,0.05) 5vh)",
        fontFamily: "'Courier New', Courier, monospace",
        color: "#333",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Red vertical margin line for notebook paper effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "8vw",
          width: "0.2vw",
          backgroundColor: "rgba(229, 77, 46, 0.4)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "8.5vw",
          width: "0.1vw",
          backgroundColor: "rgba(229, 77, 46, 0.2)",
          zIndex: 1,
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: "6vh",
          left: "12vw",
          display: "flex",
          justifyContent: "space-between",
          width: "80vw",
          zIndex: 2,
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: "bold", letterSpacing: "0.1vw" }}>
          EXAMPLE COMPANY
        </div>
        <div style={{ fontSize: "1.2vw", color: "#E54D2E", fontWeight: "bold" }}>2026</div>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          position: "absolute",
          top: "25vh",
          left: "12vw",
          width: "45vw",
          zIndex: 3,
        }}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          {/* Accent Circle behind title */}
          <div
            style={{
              position: "absolute",
              top: "-2vh",
              left: "-3vw",
              width: "10vw",
              height: "10vw",
              border: "0.3vw solid rgba(229, 77, 46, 0.6)",
              borderRadius: "45% 55% 40% 60% / 55% 45% 60% 40%",
              transform: "rotate(-15deg)",
              zIndex: -1,
            }}
          />

          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10vw",
              fontWeight: 800,
              margin: 0,
              lineHeight: 1,
              transform: "rotate(-1deg)",
              color: "#333",
              letterSpacing: "-0.2vw",
            }}
          >
            Launchpad
          </h1>

          {/* Wavy underline */}
          <div
            style={{
              position: "absolute",
              bottom: "0.5vh",
              left: "1vw",
              width: "100%",
              height: "0.8vh",
              backgroundColor: "#E54D2E",
              borderRadius: "50%",
              transform: "rotate(1deg)",
              opacity: 0.8,
            }}
          />

          {/* Asterisk Accent */}
          <div
            style={{
              position: "absolute",
              top: "2vh",
              right: "-5vw",
              fontSize: "6vw",
              color: "#E54D2E",
              fontFamily: "'DM Sans', sans-serif",
              transform: "rotate(15deg)",
              fontWeight: 400,
            }}
          >
            *
          </div>
        </div>

        <p
          style={{
            fontSize: "2.2vw",
            marginTop: "6vh",
            marginLeft: "2vw",
            maxWidth: "35vw",
            lineHeight: 1.5,
            transform: "rotate(1deg)",
            fontWeight: 600,
            color: "#444",
          }}
        >
          Every great idea starts with a sketch.
        </p>

        <div style={{
            marginTop: "10vh",
            marginLeft: "2vw",
            fontSize: "1.4vw",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            color: "#E54D2E",
            border: "0.2vw solid #E54D2E",
            padding: "1.5vh 3vw",
            display: "inline-block",
            borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
            transform: "rotate(-2deg)",
            textTransform: "uppercase"
        }}>
            Explore Deck
        </div>
      </div>

      {/* Hero Illustration Area */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          right: "5vw",
          width: "45vw",
          height: "70vh",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/__mockup/images/illust-lineart-rocket-nobg.png"
          alt="Hand-drawn sketch of a rocket launching from a laptop"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transform: "rotate(2deg) scale(1.1)",
            filter: "drop-shadow(0.5vw 0.5vw 0 rgba(0,0,0,0.05))",
          }}
        />
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "12vw",
          display: "flex",
          justifyContent: "space-between",
          width: "80vw",
          zIndex: 2,
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
          EXAMPLE COMPANY, INC. / <span style={{ color: "#E54D2E" }}>CONFIDENTIAL</span>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
          SLIDE_01
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/LineartSketchPage2.tsx`)

```tsx
export function LineartSketchPage2() {
  const checklistItems = [
    { text: "Market Research", checked: true },
    { text: "MVP Development", checked: true },
    { text: "Beta Launch", checked: true },
    { text: "Seed Funding", checked: true, star: true },
    { text: "Series A", checked: false, highlight: true, arrow: true },
    { text: "International Expansion", checked: false },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FEFCF8",
        backgroundImage:
          "repeating-linear-gradient(transparent, transparent 4.9vh, rgba(0,0,0,0.05) 4.9vh, rgba(0,0,0,0.05) 5vh)",
        fontFamily: "'Courier New', Courier, monospace",
        color: "#333",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Red vertical margin lines for notebook paper effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "8vw",
          width: "0.2vw",
          backgroundColor: "rgba(229, 77, 46, 0.4)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "8.5vw",
          width: "0.1vw",
          backgroundColor: "rgba(229, 77, 46, 0.2)",
          zIndex: 1,
        }}
      />

      {/* Tiny text header */}
      <div
        style={{
          position: "absolute",
          top: "6vh",
          left: "12vw",
          fontSize: "1vw",
          fontWeight: "bold",
          letterSpacing: "0.2vw",
          color: "#888",
          zIndex: 2,
        }}
      >
        LAUNCHPAD
      </div>

      {/* Main Content Area */}
      <div
        style={{
          position: "absolute",
          top: "18vh",
          left: "15vw",
          width: "70vw",
          zIndex: 3,
        }}
      >
        <div style={{ position: "relative", display: "inline-block", marginBottom: "8vh" }}>
          <h1
            style={{
              fontSize: "6vw",
              fontWeight: "bold",
              margin: 0,
              lineHeight: 1,
              transform: "rotate(-1deg)",
              color: "#333",
            }}
          >
            Progress
          </h1>

          {/* Wavy underline */}
          <div
            style={{
              position: "absolute",
              bottom: "-1vh",
              left: "-1vw",
              width: "110%",
              height: "0.6vh",
              backgroundColor: "#E54D2E",
              borderRadius: "50%",
              transform: "rotate(1deg)",
              opacity: 0.8,
            }}
          />
        </div>

        {/* Checklist */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5vh",
            transform: "rotate(-1deg)",
            marginLeft: "2vw",
          }}
        >
          {checklistItems.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              {/* Checkbox */}
              <div
                style={{
                  width: "2.5vw",
                  height: "2.5vw",
                  border: "0.2vw solid #333",
                  borderRadius: "0.3vw",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "2vw",
                  transform: `rotate(${index % 2 === 0 ? "2deg" : "-1deg"})`,
                  backgroundColor: "#FEFCF8",
                }}
              >
                {item.checked && (
                  <span
                    style={{
                      color: "#E54D2E",
                      fontSize: "3vw",
                      fontWeight: "bold",
                      transform: "translate(0.2vw, -0.2vw) rotate(-5deg)",
                    }}
                  >
                    ✓
                  </span>
                )}
              </div>

              {/* Task Text */}
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    fontSize: "2.5vw",
                    fontWeight: item.checked ? "normal" : "bold",
                    color: item.checked ? "#666" : "#333",
                    position: "relative",
                  }}
                >
                  {item.text}
                </span>

                {/* Strikethrough for checked items */}
                {item.checked && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "-2%",
                      width: "105%",
                      height: "0.2vw",
                      backgroundColor: "rgba(51, 51, 51, 0.6)",
                      transform: `rotate(${Math.random() > 0.5 ? 1 : -1}deg)`,
                    }}
                  />
                )}

                {/* Highlight Circle */}
                {item.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-20%",
                      left: "-5%",
                      width: "110%",
                      height: "140%",
                      border: "0.2vw solid #E54D2E",
                      borderRadius: "60% 40% 50% 50% / 50% 50% 40% 60%",
                      transform: "rotate(-2deg)",
                      pointerEvents: "none",
                    }}
                  />
                )}

                {/* Arrow Doodle */}
                {item.arrow && (
                  <div
                    style={{
                      position: "absolute",
                      left: "-10vw",
                      top: "50%",
                      fontSize: "3vw",
                      color: "#E54D2E",
                      transform: "translateY(-50%) rotate(15deg)",
                      fontWeight: "bold",
                    }}
                  >
                    →
                  </div>
                )}

                {/* Star Doodle */}
                {item.star && (
                  <div
                    style={{
                      position: "absolute",
                      right: "-4vw",
                      top: "-1vw",
                      fontSize: "3vw",
                      color: "#E54D2E",
                      transform: "rotate(20deg)",
                    }}
                  >
                    ★
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "12vw",
          display: "flex",
          justifyContent: "space-between",
          width: "80vw",
          zIndex: 2,
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: "bold", color: "#666" }}>
          EXAMPLE COMPANY, INC. / <span style={{ color: "#E54D2E" }}>CONFIDENTIAL</span>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: "bold", color: "#333" }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/LineartSketchPage3.tsx`)

```tsx
export function LineartSketchPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FEFCF8",
        backgroundImage:
          "repeating-linear-gradient(transparent, transparent 4.9vh, rgba(0,0,0,0.05) 4.9vh, rgba(0,0,0,0.05) 5vh)",
        fontFamily: "'Courier New', Courier, monospace",
        color: "#333",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Red vertical margin line for notebook paper effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "8vw",
          width: "0.2vw",
          backgroundColor: "rgba(229, 77, 46, 0.4)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "8.5vw",
          width: "0.1vw",
          backgroundColor: "rgba(229, 77, 46, 0.2)",
          zIndex: 1,
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: "6vh",
          left: "12vw",
          display: "flex",
          justifyContent: "space-between",
          width: "80vw",
          zIndex: 2,
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: "bold", letterSpacing: "0.1vw" }}>
          PERFORMANCE METRICS
        </div>
        <div style={{ fontSize: "1.2vw", color: "#E54D2E", fontWeight: "bold" }}>Q3 2026</div>
      </div>

      {/* Main Content */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "12vw",
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          gap: "8vh",
          zIndex: 3,
        }}
      >
        {/* Title */}
        <div>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "4.5vw",
              fontWeight: 800,
              margin: 0,
              color: "#333",
              letterSpacing: "-0.1vw",
              transform: "rotate(-1deg)",
            }}
          >
            Growth Trajectory
          </h2>
          <div
            style={{
              width: "35vw",
              height: "0.4vh",
              backgroundColor: "#E54D2E",
              borderRadius: "50%",
              transform: "rotate(1deg)",
              marginTop: "0.5vh",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "5vw" }}>
          {/* KPI Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "4vh", width: "25vw" }}>
            <div
              style={{
                border: "0.2vw solid #333",
                borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
                padding: "3vh 2vw",
                transform: "rotate(-2deg)",
                backgroundColor: "#fff",
              }}
            >
              <div style={{ fontSize: "1.2vw", fontWeight: "bold", color: "#666" }}>User Growth</div>
              <div style={{ fontSize: "4vw", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, color: "#E54D2E", marginTop: "1vh" }}>
                +142%
              </div>
              <div style={{ fontSize: "1vw", marginTop: "1vh" }}>MoM active users</div>
            </div>

            <div
              style={{
                border: "0.2vw solid #333",
                borderRadius: "15px 225px 15px 255px/255px 15px 225px 15px",
                padding: "3vh 2vw",
                transform: "rotate(1.5deg)",
                backgroundColor: "#fff",
              }}
            >
              <div style={{ fontSize: "1.2vw", fontWeight: "bold", color: "#666" }}>Revenue</div>
              <div style={{ fontSize: "4vw", fontFamily: "'DM Sans', sans-serif", fontWeight: 800, color: "#333", marginTop: "1vh" }}>
                $4.2M
              </div>
              <div style={{ fontSize: "1vw", marginTop: "1vh" }}>ARR run rate</div>
            </div>
          </div>

          {/* Sketched Bar Chart */}
          <div
            style={{
              flex: 1,
              position: "relative",
              borderLeft: "0.2vw solid #333",
              borderBottom: "0.2vw solid #333",
              paddingTop: "2vh",
              paddingRight: "2vw",
            }}
          >
             {/* Y-axis labels */}
             <div style={{ position: "absolute", left: "-3vw", bottom: "10%", fontSize: "1vw" }}>20k</div>
             <div style={{ position: "absolute", left: "-3vw", bottom: "40%", fontSize: "1vw" }}>40k</div>
             <div style={{ position: "absolute", left: "-3vw", bottom: "70%", fontSize: "1vw" }}>60k</div>

             {/* Sketchy Grid lines */}
             <div style={{ position: "absolute", left: 0, right: 0, bottom: "40%", height: "0.1vw", borderTop: "0.1vw dashed rgba(0,0,0,0.2)" }} />
             <div style={{ position: "absolute", left: 0, right: 0, bottom: "70%", height: "0.1vw", borderTop: "0.1vw dashed rgba(0,0,0,0.2)" }} />

             <div style={{ display: "flex", alignItems: "flex-end", height: "100%", paddingLeft: "2vw", gap: "3vw" }}>
                {/* Bar 1 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: "4vw",
                      height: "15vh",
                      border: "0.2vw solid #333",
                      backgroundColor: "rgba(229, 77, 46, 0.1)",
                      borderRadius: "5px 5px 2px 2px",
                      transform: "rotate(-1deg)",
                    }}
                  />
                  <div style={{ marginTop: "1vh", fontSize: "1vw", fontWeight: "bold" }}>Jan</div>
                </div>
                {/* Bar 2 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: "4vw",
                      height: "22vh",
                      border: "0.2vw solid #333",
                      backgroundColor: "rgba(229, 77, 46, 0.3)",
                      borderRadius: "3px 6px 2px 2px",
                      transform: "rotate(2deg)",
                    }}
                  />
                  <div style={{ marginTop: "1vh", fontSize: "1vw", fontWeight: "bold" }}>Feb</div>
                </div>
                {/* Bar 3 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: "4vw",
                      height: "35vh",
                      border: "0.2vw solid #333",
                      backgroundColor: "rgba(229, 77, 46, 0.6)",
                      borderRadius: "6px 4px 2px 2px",
                      transform: "rotate(-0.5deg)",
                    }}
                  />
                  <div style={{ marginTop: "1vh", fontSize: "1vw", fontWeight: "bold" }}>Mar</div>
                </div>
                {/* Bar 4 */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div
                    style={{
                      width: "4vw",
                      height: "45vh",
                      border: "0.2vw solid #333",
                      backgroundColor: "#E54D2E",
                      borderRadius: "5px 8px 2px 2px",
                      transform: "rotate(1deg)",
                      position: "relative",
                    }}
                  >
                    <div style={{ position: "absolute", top: "-4vh", left: "50%", transform: "translateX(-50%) rotate(-5deg)", fontSize: "1.2vw", fontWeight: "bold", color: "#E54D2E", whiteSpace: "nowrap" }}>
                      Peak!
                    </div>
                  </div>
                  <div style={{ marginTop: "1vh", fontSize: "1vw", fontWeight: "bold" }}>Apr</div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "12vw",
          display: "flex",
          justifyContent: "space-between",
          width: "80vw",
          zIndex: 2,
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
          EXAMPLE COMPANY, INC. / <span style={{ color: "#E54D2E" }}>CONFIDENTIAL</span>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
          SLIDE_03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/LineartSketchPage4.tsx`)

```tsx
export function LineartSketchPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FEFCF8",
        backgroundImage:
          "repeating-linear-gradient(transparent, transparent 4.9vh, rgba(0,0,0,0.05) 4.9vh, rgba(0,0,0,0.05) 5vh)",
        fontFamily: "'Courier New', Courier, monospace",
        color: "#333",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      {/* Red vertical margin line for notebook paper effect */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "8vw",
          width: "0.2vw",
          backgroundColor: "rgba(229, 77, 46, 0.4)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: "8.5vw",
          width: "0.1vw",
          backgroundColor: "rgba(229, 77, 46, 0.2)",
          zIndex: 1,
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: "6vh",
          left: "12vw",
          display: "flex",
          justifyContent: "space-between",
          width: "80vw",
          zIndex: 2,
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: "bold", letterSpacing: "0.1vw" }}>
          NEXT STEPS
        </div>
        <div style={{ fontSize: "1.2vw", color: "#E54D2E", fontWeight: "bold" }}>2026</div>
      </div>

      {/* Main Content */}
      <div
        style={{
          position: "absolute",
          top: "25vh",
          left: "12vw",
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 3,
        }}
      >
        <div style={{ position: "relative", display: "inline-block" }}>
          <h2
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "8vw",
              fontWeight: 800,
              margin: 0,
              color: "#333",
              letterSpacing: "-0.2vw",
              transform: "rotate(-1deg)",
            }}
          >
            Ready to Launch?
          </h2>
          
          {/* Arrow pointing to CTA */}
          <svg 
            width="10vw" 
            height="10vh" 
            viewBox="0 0 100 100" 
            style={{
              position: "absolute",
              right: "-8vw",
              bottom: "2vh",
              transform: "rotate(15deg)",
              overflow: "visible"
            }}
          >
            <path 
              d="M10,10 Q40,80 90,90" 
              fill="none" 
              stroke="#E54D2E" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
            <path 
              d="M70,80 L90,90 L80,70" 
              fill="none" 
              stroke="#E54D2E" 
              strokeWidth="4" 
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p
          style={{
            fontSize: "2vw",
            marginTop: "4vh",
            maxWidth: "50vw",
            lineHeight: 1.5,
            fontWeight: 600,
            color: "#555",
            transform: "rotate(0.5deg)",
          }}
        >
          Join us in building the next generation of sketchy, beautifully imperfect tools.
        </p>

        <div style={{
            marginTop: "8vh",
            fontSize: "1.8vw",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            color: "#fff",
            backgroundColor: "#E54D2E",
            border: "0.2vw solid #333",
            padding: "2vh 4vw",
            display: "inline-block",
            borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
            transform: "rotate(-2deg)",
            cursor: "pointer",
            boxShadow: "0.5vw 0.5vw 0 #333",
            textTransform: "uppercase"
        }}>
            Let's Talk
        </div>
        
        <div style={{ 
            marginTop: "6vh", 
            display: "flex", 
            gap: "4vw",
            fontSize: "1.2vw",
            fontWeight: "bold",
            transform: "rotate(1deg)"
        }}>
            <div>hello@example.com</div>
            <div>@example_co</div>
            <div>example.com</div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "12vw",
          display: "flex",
          justifyContent: "space-between",
          width: "80vw",
          zIndex: 2,
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
          EXAMPLE COMPANY, INC. / <span style={{ color: "#E54D2E" }}>CONFIDENTIAL</span>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: "bold" }}>
          SLIDE_04
        </div>
      </div>
    </div>
  );
}
```
