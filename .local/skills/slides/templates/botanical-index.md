# Botanical Index

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "BotanicalIndex" template presents a sophisticated and elegant aesthetic, characterized by a clean and botanical-inspired design. The background color is a soft beige (#F4F1EA), complemented by a border in a muted taupe (#D1C7B7). Text is primarily in a dark slate green (#2C3531) with accents in a muted olive green (#4A5D4E) and a warm gray (#7D7461) for secondary elements. The font families used include "Playfair Display" for the main title, conveying a classic feel, "DM Mono" for the specimen details, adding a modern touch, and "Inter" for the subtitle, ensuring readability. Key layout elements include a two-column structure with a left side for indexing information and a right side for the main title, featuring decorative corner elements and a horizontal line accent. There are no background images specified in the code. The overall aesthetic feel can be described as "elegant botanical."

## Source Code

**Component:** `BotanicalIndex`

### Slide 1 — Title (`slide-styles/BotanicalIndex.tsx`)

```tsx
export function BotanicalIndex() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F1EA",
        color: "#2C3531",
        fontFamily: "'Playfair Display', serif",
        display: "flex",
        boxSizing: "border-box",
        padding: "4vh 4vw",
      }}
    >
      {/* Outer Border */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid #D1C7B7",
          display: "flex",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* Left Side: Indexing Info */}
        <div
          style={{
            width: "30%",
            borderRight: "1px solid #D1C7B7",
            padding: "5vh 3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#7D7461",
                marginBottom: "1vh",
              }}
            >
              Specimen
            </div>
            <div style={{ fontSize: "1.5vw", fontStyle: "italic" }}>acme.co</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
            <div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8vw",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#7D7461",
                  borderBottom: "1px solid #D1C7B7",
                  paddingBottom: "0.5vh",
                  marginBottom: "1vh",
                }}
              >
                Collection Year
              </div>
              <div style={{ fontSize: "1.2vw" }}>2026</div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8vw",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#7D7461",
                  borderBottom: "1px solid #D1C7B7",
                  paddingBottom: "0.5vh",
                  marginBottom: "1vh",
                }}
              >
                Classification
              </div>
              <div style={{ fontSize: "1.2vw" }}>Confidential</div>
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8vw",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#7D7461",
                  borderBottom: "1px solid #D1C7B7",
                  paddingBottom: "0.5vh",
                  marginBottom: "1vh",
                }}
              >
                Institution
              </div>
              <div style={{ fontSize: "1.2vw" }}>Example Company, Inc.</div>
            </div>
          </div>
        </div>

        {/* Right Side: Main Title */}
        <div
          style={{
            width: "70%",
            padding: "10vh 5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Decorative Corner Elements */}
          <div style={{ position: "absolute", top: "3vh", right: "3vw", fontSize: "1vw", color: "#D1C7B7" }}>
            FIG. 1
          </div>

          <div style={{ marginBottom: "4vh" }}>
            <h1
              style={{
                fontSize: "8vw",
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Example
              <br />
              <span style={{ fontStyle: "italic", color: "#4A5D4E" }}>Deck</span>
            </h1>
          </div>

          <div style={{ width: "4vw", height: "2px", backgroundColor: "#4A5D4E", marginBottom: "4vh" }} />

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.5vw",
              fontWeight: 300,
              lineHeight: 1.6,
              maxWidth: "40vw",
              color: "#5C6661",
              margin: 0,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BotanicalIndexPage2.tsx`)

```tsx
export function BotanicalIndexPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F1EA",
        color: "#2C3531",
        fontFamily: "'Playfair Display', serif",
        display: "flex",
        boxSizing: "border-box",
        padding: "4vh 4vw",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid #D1C7B7",
          display: "flex",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* Left Side: Metadata & Page Info */}
        <div
          style={{
            width: "30%",
            borderRight: "1px solid #D1C7B7",
            padding: "5vh 3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#7D7461",
                marginBottom: "2vh",
              }}
            >
              Section 01
            </div>
            <h2
              style={{
                fontSize: "3vw",
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.1,
                color: "#2C3531",
              }}
            >
              Methodology &<br />
              <span style={{ fontStyle: "italic", color: "#4A5D4E" }}>Approach</span>
            </h2>
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.9vw",
              color: "#7D7461",
            }}
          >
            Page 02
          </div>
        </div>

        {/* Right Side: Content */}
        <div
          style={{
            width: "70%",
            padding: "10vh 5vw",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "3vh",
              right: "3vw",
              fontSize: "1vw",
              color: "#D1C7B7",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            FIG. 2
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4vh", marginTop: "4vh" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.5vw",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "#5C6661",
                margin: 0,
              }}
            >
              Our methodology centers on rigorous observation and documentation. Each specimen is carefully cataloged, preserving both its physical characteristics and contextual habitat data.
            </p>

            <div style={{ display: "flex", gap: "3vw", marginTop: "2vh" }}>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.8vw",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#7D7461",
                    borderBottom: "1px solid #D1C7B7",
                    paddingBottom: "1vh",
                    marginBottom: "2vh",
                  }}
                >
                  Phase I
                </div>
                <h3
                  style={{
                    fontSize: "1.8vw",
                    fontWeight: 400,
                    margin: "0 0 1.5vh 0",
                    fontStyle: "italic",
                    color: "#4A5D4E",
                  }}
                >
                  Collection
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.1vw",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "#5C6661",
                    margin: 0,
                  }}
                >
                  Systematic gathering of primary sources across diverse ecosystems to ensure a comprehensive foundation for our studies.
                </p>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.8vw",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#7D7461",
                    borderBottom: "1px solid #D1C7B7",
                    paddingBottom: "1vh",
                    marginBottom: "2vh",
                  }}
                >
                  Phase II
                </div>
                <h3
                  style={{
                    fontSize: "1.8vw",
                    fontWeight: 400,
                    margin: "0 0 1.5vh 0",
                    fontStyle: "italic",
                    color: "#4A5D4E",
                  }}
                >
                  Analysis
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.1vw",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "#5C6661",
                    margin: 0,
                  }}
                >
                  Microscopic and macroscopic examination of structures, documenting patterns and recording variances meticulously.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "3vw" }}>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.8vw",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "#7D7461",
                    borderBottom: "1px solid #D1C7B7",
                    paddingBottom: "1vh",
                    marginBottom: "2vh",
                  }}
                >
                  Phase III
                </div>
                <h3
                  style={{
                    fontSize: "1.8vw",
                    fontWeight: 400,
                    margin: "0 0 1.5vh 0",
                    fontStyle: "italic",
                    color: "#4A5D4E",
                  }}
                >
                  Synthesis
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1.1vw",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "#5C6661",
                    margin: 0,
                  }}
                >
                  Integration of individual findings into our comprehensive taxonomy database, drawing connections between distinct species.
                </p>
              </div>
              <div style={{ flex: 1 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/BotanicalIndexPage3.tsx`)

```tsx
export function BotanicalIndexPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F1EA",
        color: "#2C3531",
        fontFamily: "'Playfair Display', serif",
        display: "flex",
        boxSizing: "border-box",
        padding: "4vh 4vw",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid #D1C7B7",
          display: "flex",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* Left Side: Metrics & Page Info */}
        <div
          style={{
            width: "30%",
            borderRight: "1px solid #D1C7B7",
            padding: "5vh 3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxSizing: "border-box",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#7D7461",
                marginBottom: "2vh",
              }}
            >
              Section 02
            </div>
            <h2
              style={{
                fontSize: "3vw",
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.1,
                color: "#2C3531",
              }}
            >
              Distribution<br />
              <span style={{ fontStyle: "italic", color: "#4A5D4E" }}>Metrics</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "4vh" }}>
            <div>
              <div style={{ fontSize: "4vw", lineHeight: 1, color: "#4A5D4E", marginBottom: "1vh" }}>
                84<span style={{ fontSize: "2vw" }}>%</span>
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1vw",
                  color: "#5C6661",
                  fontWeight: 300,
                  lineHeight: 1.5,
                }}
              >
                Survival rate in observed test groups across varied climates.
              </div>
            </div>
            <div>
              <div style={{ fontSize: "4vw", lineHeight: 1, color: "#4A5D4E", marginBottom: "1vh" }}>
                1.2<span style={{ fontSize: "2vw" }}>k</span>
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1vw",
                  color: "#5C6661",
                  fontWeight: 300,
                  lineHeight: 1.5,
                }}
              >
                Specimens currently cataloged in the primary database.
              </div>
            </div>
          </div>

          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.9vw",
              color: "#7D7461",
            }}
          >
            Page 03
          </div>
        </div>

        {/* Right Side: Data Visualization */}
        <div
          style={{
            width: "70%",
            padding: "8vh 5vw",
            display: "flex",
            flexDirection: "column",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "3vh",
              right: "3vw",
              fontSize: "1vw",
              color: "#D1C7B7",
              fontFamily: "'DM Mono', monospace",
            }}
          >
            FIG. 3
          </div>

          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.9vw",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: "#7D7461",
              marginBottom: "4vh",
              textAlign: "center",
              marginTop: "4vh",
            }}
          >
            Growth Trajectory by Region
          </div>

          {/* Chart Container */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "flex-end",
              gap: "2vw",
              paddingBottom: "4vh",
              borderBottom: "1px solid #D1C7B7",
            }}
          >
            {[
              { label: "North", height: "40%", value: "320" },
              { label: "South", height: "65%", value: "480" },
              { label: "East", height: "30%", value: "210" },
              { label: "West", height: "85%", value: "650" },
              { label: "Central", height: "55%", value: "410" },
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
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.9vw",
                    color: "#7D7461",
                  }}
                >
                  {bar.value}
                </div>
                <div
                  style={{
                    width: "100%",
                    height: bar.height,
                    backgroundColor: i === 3 ? "#4A5D4E" : "#D1C7B7",
                    transition: "height 0.5s ease",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Chart X-axis labels */}
          <div style={{ display: "flex", gap: "2vw", paddingTop: "2vh" }}>
            {["North", "South", "East", "West", "Central"].map((label, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  textAlign: "center",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1vw",
                  color: "#5C6661",
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/BotanicalIndexPage4.tsx`)

```tsx
export function BotanicalIndexPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F1EA",
        color: "#2C3531",
        fontFamily: "'Playfair Display', serif",
        display: "flex",
        boxSizing: "border-box",
        padding: "4vh 4vw",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "2px solid #D1C7B7",
          display: "flex",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* Full width content container */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "5vh 3vw",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* Top Row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                color: "#7D7461",
              }}
            >
              End of Report
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1vw",
                color: "#D1C7B7",
              }}
            >
              FIG. 4
            </div>
          </div>

          {/* Center Content */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "7vw",
                fontWeight: 400,
                margin: 0,
                lineHeight: 1.1,
                color: "#2C3531",
                letterSpacing: "-0.02em",
              }}
            >
              Join the <br />
              <span style={{ fontStyle: "italic", color: "#4A5D4E" }}>Expedition</span>
            </h2>

            <div
              style={{
                width: "6vw",
                height: "2px",
                backgroundColor: "#4A5D4E",
                margin: "5vh 0",
              }}
            />

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.5vw",
                fontWeight: 300,
                lineHeight: 1.6,
                color: "#5C6661",
                margin: "0 0 4vh 0",
                maxWidth: "40vw",
              }}
            >
              We are currently accepting new research partners for the upcoming collection season. Reach out to coordinate collaborative efforts.
            </p>

            <div
              style={{
                display: "flex",
                gap: "2vw",
                fontFamily: "'DM Mono', monospace",
                fontSize: "1vw",
                color: "#2C3531",
                border: "1px solid #D1C7B7",
                padding: "2vh 4vw",
                backgroundColor: "#F4F1EA",
              }}
            >
              contact@example.com
            </div>
          </div>

          {/* Bottom Row */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ display: "flex", gap: "4vw" }}>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8vw",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#7D7461",
                }}
              >
                <div style={{ borderBottom: "1px solid #D1C7B7", paddingBottom: "0.5vh", marginBottom: "1vh" }}>
                  Headquarters
                </div>
                <div style={{ color: "#2C3531", lineHeight: 1.4 }}>
                  123 Botanical Way<br />
                  San Francisco, CA
                </div>
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8vw",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#7D7461",
                }}
              >
                <div style={{ borderBottom: "1px solid #D1C7B7", paddingBottom: "0.5vh", marginBottom: "1vh" }}>
                  Digital
                </div>
                <div style={{ color: "#2C3531", lineHeight: 1.4 }}>
                  @example_co<br />
                  linkedin.com/example
                </div>
              </div>
            </div>

            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#7D7461",
              }}
            >
              Page 04
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
