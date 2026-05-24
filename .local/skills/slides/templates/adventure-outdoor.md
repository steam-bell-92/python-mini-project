# Adventure Outdoor

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "AdventureOutdoor" template embodies an adventurous and rustic aesthetic, featuring a dark background that enhances the outdoor theme. The background color is a solid #0F0C08, complemented by a linear gradient overlay from transparent to rgba(15,12,8,0.85). Text and accent colors include #C4A060 for decorative elements and headings, and #F0E8DA for primary text, creating a warm contrast against the dark background. The font families used are 'Inter' for body text and 'Space Grotesk' for headings, with 'DM Mono' used for decorative compass elements, contributing to a modern yet rugged feel. Key layout elements include a full-screen background image of an autumn road (URL: /__mockup/photos/autumn-road.png), a circular compass in the top right corner, and a structured layout that positions text at the bottom with ample padding. The overall aesthetic feel is "adventurous, rustic."

## Source Code

**Component:** `AdventureOutdoor`

### Slide 1 — Title (`slide-styles/AdventureOutdoor.tsx`)

```tsx
export function AdventureOutdoor() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#0F0C08",
      }}
    >
      <img
        src="/__mockup/photos/autumn-road.png"
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
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(15,12,8,0.85) 100%)",
          zIndex: 1,
        }}
      />
      
      {/* Compass detail top right */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "6vw",
          zIndex: 2,
          width: "4vw",
          height: "4vw",
          border: "1px solid rgba(196, 160, 96, 0.3)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", top: "0.2vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>N</div>
        <div style={{ position: "absolute", bottom: "0.2vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>S</div>
        <div style={{ position: "absolute", left: "0.3vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>W</div>
        <div style={{ position: "absolute", right: "0.3vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>E</div>
        <div style={{ width: "2vw", height: "1px", backgroundColor: "rgba(196, 160, 96, 0.3)", transform: "rotate(45deg)" }} />
        <div style={{ width: "2vw", height: "1px", backgroundColor: "rgba(196, 160, 96, 0.3)", transform: "rotate(-45deg)", position: "absolute" }} />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "3vh" }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#C4A060",
              fontSize: "1.1vw",
              letterSpacing: "0.2em",
              fontWeight: 600,
            }}
          >
            THE OPEN ROAD
          </div>
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#C4A060",
              opacity: 0.5,
            }}
          />
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F0E8DA",
              opacity: 0.7,
              fontSize: "1vw",
              letterSpacing: "0.1em",
            }}
          >
            ROUTE 26
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ maxWidth: "65vw" }}>
            <h1
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#F0E8DA",
                fontSize: "7vw",
                lineHeight: 1.05,
                margin: "0 0 2vh 0",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Example Deck
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#F0E8DA",
                opacity: 0.8,
                fontSize: "1.6vw",
                lineHeight: 1.4,
                margin: 0,
                maxWidth: "45vw",
              }}
            >
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontStyle: "italic",
                color: "#F0E8DA",
                opacity: 0.6,
                fontSize: "1vw",
                marginBottom: "1vh",
              }}
            >
              Field Guide
            </div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#F0E8DA",
                opacity: 0.5,
                fontSize: "0.9vw",
                textTransform: "uppercase",
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

### Slide 2 (`slide-pages/AdventureOutdoorPage2.tsx`)

```tsx
export function AdventureOutdoorPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#0F0C08",
      }}
    >
      <img
        src="/__mockup/photos/autumn-road.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.3,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(15,12,8,1) 40%, rgba(15,12,8,0.7) 100%)",
          zIndex: 1,
        }}
      />

      {/* Compass detail top right */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "6vw",
          zIndex: 2,
          width: "4vw",
          height: "4vw",
          border: "1px solid rgba(196, 160, 96, 0.3)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", top: "0.2vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>N</div>
        <div style={{ position: "absolute", bottom: "0.2vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>S</div>
        <div style={{ position: "absolute", left: "0.3vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>W</div>
        <div style={{ position: "absolute", right: "0.3vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>E</div>
        <div style={{ width: "2vw", height: "1px", backgroundColor: "rgba(196, 160, 96, 0.3)", transform: "rotate(45deg)" }} />
        <div style={{ width: "2vw", height: "1px", backgroundColor: "rgba(196, 160, 96, 0.3)", transform: "rotate(-45deg)", position: "absolute" }} />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: "12vh 8vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "6vh" }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#C4A060",
              fontSize: "1vw",
              letterSpacing: "0.2em",
              fontWeight: 600,
            }}
          >
            CHAPTER I
          </div>
          <div
            style={{
              width: "3vw",
              height: "1px",
              backgroundColor: "#C4A060",
              opacity: 0.5,
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "6vw", flex: 1 }}>
          <div style={{ flex: "0 0 35vw" }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                color: "#F0E8DA",
                fontSize: "4.5vw",
                lineHeight: 1.1,
                margin: "0 0 4vh 0",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              Navigating Uncharted Territories.
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#F0E8DA",
                opacity: 0.8,
                fontSize: "1.3vw",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Our methodology combines rugged exploration with precision planning. We don't just find paths; we forge them, leaving a trail for others to follow.
            </p>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh", paddingTop: "2vh" }}>
            {[
              { num: "01", title: "Terrain Assessment", desc: "Analyzing the landscape to identify optimal routes and potential hazards before we set out." },
              { num: "02", title: "Resource Allocation", desc: "Equipping our expedition with the right gear, ensuring every pound carries its weight." },
              { num: "03", title: "Forward Momentum", desc: "Executing the plan with relentless drive, adapting to changing conditions on the fly." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "2vw", borderBottom: "1px solid rgba(196, 160, 96, 0.2)", paddingBottom: "3vh" }}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "#C4A060",
                    fontSize: "1.2vw",
                    paddingTop: "0.5vh",
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      color: "#F0E8DA",
                      fontSize: "1.6vw",
                      margin: "0 0 1vh 0",
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      color: "#F0E8DA",
                      opacity: 0.6,
                      fontSize: "1vw",
                      lineHeight: 1.5,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          zIndex: 2,
          fontFamily: "'DM Mono', monospace",
          color: "#F0E8DA",
          opacity: 0.5,
          fontSize: "0.9vw",
          textTransform: "uppercase",
        }}
      >
        Field Guide — 2024
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "8vw",
          zIndex: 2,
          fontFamily: "'DM Mono', monospace",
          color: "#C4A060",
          fontSize: "1vw",
        }}
      >
        02
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/AdventureOutdoorPage3.tsx`)

```tsx
export function AdventureOutdoorPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#0F0C08",
      }}
    >
      <img
        src="/__mockup/photos/autumn-road.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.2,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at center, rgba(15,12,8,0.8) 0%, rgba(15,12,8,1) 100%)",
          zIndex: 1,
        }}
      />

      {/* Compass detail top right */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "6vw",
          zIndex: 2,
          width: "4vw",
          height: "4vw",
          border: "1px solid rgba(196, 160, 96, 0.3)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", top: "0.2vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>N</div>
        <div style={{ position: "absolute", bottom: "0.2vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>S</div>
        <div style={{ position: "absolute", left: "0.3vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>W</div>
        <div style={{ position: "absolute", right: "0.3vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>E</div>
        <div style={{ width: "2vw", height: "1px", backgroundColor: "rgba(196, 160, 96, 0.3)", transform: "rotate(45deg)" }} />
        <div style={{ width: "2vw", height: "1px", backgroundColor: "rgba(196, 160, 96, 0.3)", transform: "rotate(-45deg)", position: "absolute" }} />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: "12vh 8vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "4vh" }}>
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#C4A060",
              fontSize: "1vw",
              letterSpacing: "0.2em",
              fontWeight: 600,
            }}
          >
            METRICS & TOPOGRAPHY
          </div>
          <div
            style={{
              width: "3vw",
              height: "1px",
              backgroundColor: "#C4A060",
              opacity: 0.5,
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "8vw", flex: 1, alignItems: "center" }}>
          <div style={{ flex: "1" }}>
            {/* Abstract Topographic/Bar Chart */}
            <div style={{ position: "relative", width: "100%", height: "40vh", display: "flex", alignItems: "flex-end", gap: "1.5vw" }}>
              {[
                { h: "40%", c: "rgba(240, 232, 218, 0.2)", l: "Q1" },
                { h: "55%", c: "rgba(240, 232, 218, 0.4)", l: "Q2" },
                { h: "35%", c: "rgba(240, 232, 218, 0.3)", l: "Q3" },
                { h: "85%", c: "#C4A060", l: "Q4" },
                { h: "60%", c: "rgba(240, 232, 218, 0.5)", l: "Q1'" },
              ].map((bar, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
                  <div
                    style={{
                      width: "100%",
                      height: bar.h,
                      backgroundColor: bar.c,
                      position: "relative",
                    }}
                  >
                    {/* Pattern overlay for top bar */}
                    {i === 3 && (
                      <div style={{
                        position: "absolute",
                        top: 0, left: 0, right: 0, bottom: 0,
                        backgroundImage: "linear-gradient(45deg, rgba(15,12,8,0.2) 25%, transparent 25%, transparent 50%, rgba(15,12,8,0.2) 50%, rgba(15,12,8,0.2) 75%, transparent 75%, transparent)",
                        backgroundSize: "1vw 1vw"
                      }} />
                    )}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: "#F0E8DA",
                      opacity: 0.6,
                      fontSize: "0.9vw",
                    }}
                  >
                    {bar.l}
                  </div>
                </div>
              ))}
              
              {/* Grid lines */}
              <div style={{ position: "absolute", top: "20%", left: 0, width: "100%", height: "1px", borderTop: "1px dashed rgba(240, 232, 218, 0.1)", zIndex: -1 }} />
              <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "1px", borderTop: "1px dashed rgba(240, 232, 218, 0.1)", zIndex: -1 }} />
              <div style={{ position: "absolute", top: "80%", left: 0, width: "100%", height: "1px", borderTop: "1px dashed rgba(240, 232, 218, 0.1)", zIndex: -1 }} />
            </div>
          </div>

          <div style={{ flex: "0 0 30vw", display: "flex", flexDirection: "column", gap: "6vh" }}>
            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#F0E8DA",
                  fontSize: "5vw",
                  lineHeight: 1,
                  fontWeight: 700,
                  marginBottom: "1vh",
                }}
              >
                14,000<span style={{ color: "#C4A060", fontSize: "3vw" }}>ft</span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#F0E8DA",
                  opacity: 0.7,
                  fontSize: "1.1vw",
                  lineHeight: 1.5,
                  margin: 0,
                  borderLeft: "2px solid #C4A060",
                  paddingLeft: "1.5vw",
                }}
              >
                Elevation gained in our core metrics across the rugged landscape of our market sector.
              </p>
            </div>

            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: "#F0E8DA",
                  fontSize: "4vw",
                  lineHeight: 1,
                  fontWeight: 700,
                  marginBottom: "1vh",
                }}
              >
                2.4<span style={{ color: "#C4A060", fontSize: "2.5vw" }}>x</span>
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#F0E8DA",
                  opacity: 0.7,
                  fontSize: "1.1vw",
                  lineHeight: 1.5,
                  margin: 0,
                  borderLeft: "2px solid rgba(240, 232, 218, 0.3)",
                  paddingLeft: "1.5vw",
                }}
              >
                Multiplier of expedition distance compared to previous fiscal milestones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          zIndex: 2,
          fontFamily: "'DM Mono', monospace",
          color: "#F0E8DA",
          opacity: 0.5,
          fontSize: "0.9vw",
          textTransform: "uppercase",
        }}
      >
        Field Guide — 2024
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "8vw",
          zIndex: 2,
          fontFamily: "'DM Mono', monospace",
          color: "#C4A060",
          fontSize: "1vw",
        }}
      >
        03
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/AdventureOutdoorPage4.tsx`)

```tsx
export function AdventureOutdoorPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#0F0C08",
      }}
    >
      <img
        src="/__mockup/photos/autumn-road.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.5,
          transform: "scale(1.05)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, rgba(15,12,8,1) 0%, rgba(15,12,8,0.6) 50%, rgba(15,12,8,0.9) 100%)",
          zIndex: 1,
        }}
      />

      {/* Compass detail top right */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "6vw",
          zIndex: 2,
          width: "4vw",
          height: "4vw",
          border: "1px solid rgba(196, 160, 96, 0.3)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ position: "absolute", top: "0.2vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>N</div>
        <div style={{ position: "absolute", bottom: "0.2vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>S</div>
        <div style={{ position: "absolute", left: "0.3vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>W</div>
        <div style={{ position: "absolute", right: "0.3vw", fontSize: "0.6vw", color: "#C4A060", fontFamily: "'DM Mono', monospace" }}>E</div>
        <div style={{ width: "2vw", height: "1px", backgroundColor: "rgba(196, 160, 96, 0.3)", transform: "rotate(45deg)" }} />
        <div style={{ width: "2vw", height: "1px", backgroundColor: "rgba(196, 160, 96, 0.3)", transform: "rotate(-45deg)", position: "absolute" }} />
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "8vh 6vw",
          boxSizing: "border-box",
          textAlign: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "4vh" }}>
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#C4A060",
              opacity: 0.5,
            }}
          />
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              color: "#C4A060",
              fontSize: "1vw",
              letterSpacing: "0.2em",
              fontWeight: 600,
            }}
          >
            THE EXPEDITION CONTINUES
          </div>
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#C4A060",
              opacity: 0.5,
            }}
          />
        </div>

        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: "#F0E8DA",
            fontSize: "6vw",
            lineHeight: 1.1,
            margin: "0 0 4vh 0",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            maxWidth: "70vw",
          }}
        >
          Join the Journey.
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#F0E8DA",
            opacity: 0.8,
            fontSize: "1.4vw",
            lineHeight: 1.6,
            margin: "0 0 6vh 0",
            maxWidth: "40vw",
          }}
        >
          We've mapped the terrain. Now it's time to take the first step. Equip yourself and let's explore what lies beyond the horizon.
        </p>

        <button
          style={{
            backgroundColor: "#C4A060",
            color: "#0F0C08",
            border: "none",
            padding: "2vh 4vw",
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.2vw",
            fontWeight: 600,
            letterSpacing: "0.1em",
            cursor: "pointer",
            textTransform: "uppercase",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            gap: "1vw",
          }}
        >
          Begin Ascent
          <span style={{ fontSize: "1.5vw" }}>&rarr;</span>
        </button>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          zIndex: 2,
          fontFamily: "'DM Mono', monospace",
          color: "#F0E8DA",
          opacity: 0.5,
          fontSize: "0.9vw",
          textTransform: "uppercase",
        }}
      >
        Field Guide — 2024
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "8vw",
          zIndex: 2,
          fontFamily: "'DM Mono', monospace",
          color: "#C4A060",
          fontSize: "1vw",
        }}
      >
        04
      </div>
    </div>
  );
}
```
