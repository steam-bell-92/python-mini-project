# Vinyl Crate

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "VinylCrate" template embodies a retro aesthetic reminiscent of classic vinyl records. It features a solid background color of #C4A872, complemented by a subtle noise texture overlay. The text and accent colors include #2C1E0F for general text, #8B3A3A for decorative elements, and #F0E6D2 for highlighted text. The font families used are 'DM Mono' for metadata and labels, 'Space Grotesk' for the main title, and Georgia for the subtitle, creating a mix of modern and vintage styles. Key layout elements include a large circular vinyl record graphic positioned on the right side, with concentric borders representing grooves, and a content container on the left side that organizes the header, main content, and footer metadata. The overall aesthetic feel is "retro vintage."

## Source Code

**Component:** `VinylCrate`

### Slide 1 — Title (`slide-styles/VinylCrate.tsx`)

```tsx
export function VinylCrate() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#C4A872",
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.08%22/%3E%3C/svg%3E')",
        position: "relative",
        display: "flex",
        color: "#2C1E0F",
        boxSizing: "border-box"
      }}
    >
      {/* Vinyl Record Graphic (Right side, partially cropped) */}
      <div
        style={{
          position: "absolute",
          right: "-15vh",
          top: "50%",
          transform: "translateY(-50%)",
          width: "90vh",
          height: "90vh",
          backgroundColor: "#18130E",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "-2vw 0 4vw rgba(0,0,0,0.2), inset 0 0 2vw rgba(0,0,0,0.5)",
          zIndex: 0
        }}
      >
        {/* Grooves */}
        <div style={{ width: "85vh", height: "85vh", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "75vh", height: "75vh", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "65vh", height: "65vh", border: "2px solid rgba(255,255,255,0.04)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "55vh", height: "55vh", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: "45vh", height: "45vh", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{ width: "35vh", height: "35vh", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {/* Center Label */}
                    <div
                      style={{
                        width: "25vh",
                        height: "25vh",
                        backgroundColor: "#8B3A3A",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        position: "relative",
                        boxShadow: "inset 0 0 2vh rgba(0,0,0,0.3)"
                      }}
                    >
                      {/* Spindle hole */}
                      <div
                        style={{
                          width: "2vh",
                          height: "2vh",
                          backgroundColor: "#C4A872",
                          borderRadius: "50%",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          boxShadow: "inset 0 0 0.5vh rgba(0,0,0,0.5)"
                        }}
                      />
                      <div style={{ fontFamily: "'DM Mono', monospace", color: "#F0E6D2", fontSize: "1.5vh", letterSpacing: "0.2em", marginBottom: "4vh", opacity: 0.8 }}>
                        SIDE A
                      </div>
                      <div style={{ fontFamily: "'DM Mono', monospace", color: "#F0E6D2", fontSize: "1vh", letterSpacing: "0.1em", marginTop: "4vh", opacity: 0.6 }}>
                        33 ⅓ RPM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container (Left side) */}
      <div
        style={{
          width: "55vw",
          height: "100%",
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1
        }}
      >
        {/* Header Metadata */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'DM Mono', monospace" }}>
          <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
            <div style={{ width: "3vw", height: "2px", backgroundColor: "#8B3A3A" }} />
            <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.15em", color: "#8B3A3A" }}>
              CAT. NO. 2026-001
            </div>
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.15em", opacity: 0.8 }}>
            STEREO
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", letterSpacing: "0.2em", opacity: 0.7, textTransform: "uppercase" }}>
            Presentation Title
          </div>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "6vw",
              fontWeight: 700,
              lineHeight: 0.9,
              margin: 0,
              letterSpacing: "-0.03em"
            }}
          >
            Example Deck
          </h1>
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.6vw",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "40vw",
              opacity: 0.85,
              fontStyle: "italic"
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Footer Metadata */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "'DM Mono', monospace" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.1em" }}>
            acme.co
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1vh" }}>
            <div style={{ fontSize: "0.9vw", opacity: 0.7, letterSpacing: "0.1em" }}>
              Example Company, Inc.
            </div>
            <div style={{ fontSize: "0.8vw", opacity: 0.5, letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Confidential
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/VinylCratePage2.tsx`)

```tsx
export function VinylCratePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#C4A872",
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.08%22/%3E%3C/svg%3E')",
        position: "relative",
        color: "#2C1E0F",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "-10vh",
          bottom: "-30vh",
          width: "70vh",
          height: "70vh",
          backgroundColor: "#18130E",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "-1vw -1vw 3vw rgba(0,0,0,0.2), inset 0 0 1.5vw rgba(0,0,0,0.5)",
          zIndex: 0
        }}
      >
        <div style={{ width: "65vh", height: "65vh", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "55vh", height: "55vh", border: "1px solid rgba(255,255,255,0.03)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "45vh", height: "45vh", border: "2px solid rgba(255,255,255,0.04)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "20vh", height: "20vh", backgroundColor: "#8B3A3A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", boxShadow: "inset 0 0 1.5vh rgba(0,0,0,0.3)" }}>
                <div style={{ width: "1.5vh", height: "1.5vh", backgroundColor: "#C4A872", borderRadius: "50%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", boxShadow: "inset 0 0 0.5vh rgba(0,0,0,0.5)" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
          boxSizing: "border-box"
        }}
      >
        {/* Header Metadata */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'DM Mono', monospace" }}>
          <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
            <div style={{ width: "3vw", height: "2px", backgroundColor: "#8B3A3A" }} />
            <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.15em", color: "#8B3A3A" }}>
              TRACK 01
            </div>
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.15em", opacity: 0.8 }}>
            STEREO
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "5vh" }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "4vw",
              fontWeight: 700,
              lineHeight: 1,
              margin: 0,
              letterSpacing: "-0.02em",
              maxWidth: "60vw"
            }}
          >
            The Analogue Revival
          </h2>

          <div style={{ display: "flex", gap: "6vw" }}>
            <div style={{ flex: 1, maxWidth: "35vw" }}>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.4vw",
                  lineHeight: 1.6,
                  margin: "0 0 3vh 0",
                  opacity: 0.9
                }}
              >
                In an era dominated by digital convenience, the tactile experience of physical media has seen a remarkable resurgence. The ritual of placing a needle on a groove offers a mindful counterpoint to the endless scroll.
              </p>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "1.4vw",
                  lineHeight: 1.6,
                  margin: 0,
                  opacity: 0.9
                }}
              >
                This isn't merely nostalgia; it's a profound shift in how we choose to consume and value art, prioritizing presence over accessibility.
              </p>
            </div>
            
            <div style={{ flex: 1, maxWidth: "25vw", borderLeft: "2px solid #8B3A3A", paddingLeft: "3vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", letterSpacing: "0.15em", opacity: 0.6, marginBottom: "1vh" }}>KEY INSIGHT</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2vw", fontWeight: 600, lineHeight: 1.2, color: "#8B3A3A" }}>
                Physical interaction increases perceived value by over 60%.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Metadata */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "'DM Mono', monospace" }}>
          <div style={{ fontSize: "1vw", opacity: 0.6, letterSpacing: "0.1em" }}>
            PAGE 02
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.1em" }}>
            acme.co
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/VinylCratePage3.tsx`)

```tsx
export function VinylCratePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#C4A872",
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.08%22/%3E%3C/svg%3E')",
        position: "relative",
        color: "#2C1E0F",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
          boxSizing: "border-box"
        }}
      >
        {/* Header Metadata */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'DM Mono', monospace" }}>
          <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
            <div style={{ width: "3vw", height: "2px", backgroundColor: "#8B3A3A" }} />
            <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.15em", color: "#8B3A3A" }}>
              TRACK 02
            </div>
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.15em", opacity: 0.8 }}>
            STEREO
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "6vh" }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "3vw",
              fontWeight: 700,
              lineHeight: 1,
              margin: "0 0 6vh 0",
              letterSpacing: "-0.02em"
            }}
          >
            Market Dynamics
          </h2>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: 1 }}>
            {/* Left Data Column */}
            <div style={{ display: "flex", flexDirection: "column", gap: "6vh", width: "25vw" }}>
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "5vw", fontWeight: 700, color: "#8B3A3A", lineHeight: 1 }}>42%</div>
                <div style={{ width: "100%", height: "2px", backgroundColor: "rgba(44, 30, 15, 0.1)", margin: "1vh 0" }} />
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.2vw", opacity: 0.8, fontStyle: "italic" }}>Year-over-year growth in physical format sales.</div>
              </div>
              
              <div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "5vw", fontWeight: 700, color: "#18130E", lineHeight: 1 }}>$1.2B</div>
                <div style={{ width: "100%", height: "2px", backgroundColor: "rgba(44, 30, 15, 0.1)", margin: "1vh 0" }} />
                <div style={{ fontFamily: "Georgia, serif", fontSize: "1.2vw", opacity: 0.8, fontStyle: "italic" }}>Total revenue generated from analogue goods in Q3.</div>
              </div>
            </div>

            {/* Right Visual Graphic */}
            <div style={{ position: "relative", width: "40vw", height: "40vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: "35vw", height: "35vw", backgroundColor: "#18130E", borderRadius: "50%", position: "absolute", boxShadow: "0 2vw 4vw rgba(0,0,0,0.3), inset 0 0 2vw rgba(0,0,0,0.5)" }} />
              
              {/* Record Grooves (Charts) */}
              <div style={{ width: "31vw", height: "31vw", border: "0.2vw solid #C4A872", borderRadius: "50%", position: "absolute", borderLeftColor: "transparent", borderBottomColor: "transparent", transform: "rotate(45deg)" }} />
              <div style={{ width: "27vw", height: "27vw", border: "0.4vw solid #8B3A3A", borderRadius: "50%", position: "absolute", borderTopColor: "transparent", transform: "rotate(-20deg)" }} />
              <div style={{ width: "23vw", height: "23vw", border: "0.2vw solid #F0E6D2", borderRadius: "50%", position: "absolute", borderRightColor: "transparent", transform: "rotate(110deg)", opacity: 0.5 }} />

              <div style={{ width: "12vw", height: "12vw", backgroundColor: "#8B3A3A", borderRadius: "50%", position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "inset 0 0 1vw rgba(0,0,0,0.4)" }}>
                <div style={{ width: "1vw", height: "1vw", backgroundColor: "#C4A872", borderRadius: "50%", boxShadow: "inset 0 0 0.5vw rgba(0,0,0,0.5)" }} />
                <div style={{ position: "absolute", fontFamily: "'DM Mono', monospace", color: "#F0E6D2", fontSize: "0.8vw", letterSpacing: "0.2em", top: "2vw" }}>DATA</div>
                <div style={{ position: "absolute", fontFamily: "'DM Mono', monospace", color: "#F0E6D2", fontSize: "0.7vw", letterSpacing: "0.1em", bottom: "2vw", opacity: 0.6 }}>33 ⅓ RPM</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Metadata */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "'DM Mono', monospace" }}>
          <div style={{ fontSize: "1vw", opacity: 0.6, letterSpacing: "0.1em" }}>
            PAGE 03
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.1em" }}>
            acme.co
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/VinylCratePage4.tsx`)

```tsx
export function VinylCratePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#18130E",
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.08%22/%3E%3C/svg%3E')",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        color: "#C4A872",
        boxSizing: "border-box",
      }}
    >
      {/* Central Groove Graphic */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "120vh",
          height: "120vh",
          border: "1px solid rgba(196, 168, 114, 0.05)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 0
        }}
      >
        <div style={{ width: "100vh", height: "100vh", border: "1px solid rgba(196, 168, 114, 0.08)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "80vh", height: "80vh", border: "1px solid rgba(196, 168, 114, 0.05)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ width: "60vh", height: "60vh", border: "2px solid rgba(196, 168, 114, 0.03)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: "40vh", height: "40vh", backgroundColor: "#8B3A3A", borderRadius: "50%", boxShadow: "0 0 5vw rgba(0,0,0,0.5)" }} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "100%",
          padding: "8vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 1,
          boxSizing: "border-box"
        }}
      >
        {/* Header Metadata */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "'DM Mono', monospace" }}>
          <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
            <div style={{ width: "3vw", height: "2px", backgroundColor: "#8B3A3A" }} />
            <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.15em", color: "#8B3A3A" }}>
              OUTRO
            </div>
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.15em", opacity: 0.8 }}>
            STEREO
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "4vh", margin: "auto" }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "6vw",
              fontWeight: 700,
              lineHeight: 1,
              margin: 0,
              letterSpacing: "-0.02em",
              color: "#F0E6D2"
            }}
          >
            Ready to Drop the Needle?
          </h2>
          
          <p
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.6vw",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "40vw",
              opacity: 0.85,
              fontStyle: "italic"
            }}
          >
            Join us in redefining the tactile experience for the next generation of sound.
          </p>

          <button
            style={{
              marginTop: "2vh",
              padding: "2vh 4vw",
              backgroundColor: "#C4A872",
              color: "#18130E",
              border: "none",
              borderRadius: "0",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.2vw",
              fontWeight: 600,
              letterSpacing: "0.15em",
              cursor: "pointer"
            }}
          >
            GET IN TOUCH
          </button>
        </div>

        {/* Footer Metadata */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontFamily: "'DM Mono', monospace" }}>
          <div style={{ fontSize: "1vw", opacity: 0.6, letterSpacing: "0.1em" }}>
            PAGE 04
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.1em" }}>
            acme.co
          </div>
        </div>
      </div>
    </div>
  );
}
```
