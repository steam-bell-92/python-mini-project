# Glass Artisan

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "GlassArtisan" template features a modern, elegant aesthetic with a dark and sophisticated style. The background color is a solid #0A0A0F, complemented by a full-bleed background image located at "/__mockup/photos/glass-art.png". A dark gradient overlay is applied to the bottom 55% of the slide, transitioning from transparent to rgba(10,10,15,1). Text elements utilize the font families 'DM Mono' for labels and footers, and 'Playfair Display' for the title, creating a contrast between a modern and classic feel. Key layout elements include a thin amber line (#D4A84B) for decoration, positioned content at the bottom, and a clean, structured arrangement of text. The overall aesthetic feel can be described as "dark elegance."

## Source Code

**Component:** `GlassArtisan`

### Slide 1 — Title (`slide-styles/GlassArtisan.tsx`)

```tsx
export function GlassArtisan() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0A0A0F",
      }}
    >
      {/* Full-bleed background image */}
      <img
        src="/__mockup/photos/glass-art.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      
      {/* Dark gradient overlay on the bottom 50% */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "55%",
          background: "linear-gradient(to bottom, rgba(10,10,15,0) 0%, rgba(10,10,15,0.9) 70%, rgba(10,10,15,1) 100%)",
          zIndex: 2,
        }}
      />

      {/* Content Container positioned at the bottom */}
      <div
        style={{
          position: "absolute",
          bottom: "12vh",
          left: "8vw",
          right: "8vw",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {/* Thin amber horizontal line */}
        <div
          style={{
            width: "5vw",
            height: "0.2vh",
            backgroundColor: "#D4A84B",
            marginBottom: "3vh",
          }}
        />

        {/* Label */}
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            color: "#D4A84B",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            marginBottom: "1.5vh",
          }}
        >
          MASTER ARTISAN SERIES
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6vw",
            color: "#F0ECE4",
            margin: "0 0 2vh 0",
            fontWeight: 400,
            lineHeight: 1.05,
          }}
        >
          Example Deck
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.2vw",
            color: "rgba(240, 236, 228, 0.7)",
            margin: 0,
            maxWidth: "50vw",
            lineHeight: 1.5,
            fontWeight: 300,
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      {/* Footer Elements */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "8vw",
          zIndex: 3,
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.8vw",
          color: "#D4A84B",
          letterSpacing: "0.1em",
        }}
      >
        acme.co
      </div>
      
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          right: "8vw",
          zIndex: 3,
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.8vw",
          color: "#D4A84B",
          letterSpacing: "0.1em",
        }}
      >
        MMXXVI
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/GlassArtisanPage2.tsx`)

```tsx
export function GlassArtisanPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0A0A0F",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Subtle texture/gradient background */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 100% 0%, rgba(212, 168, 75, 0.05) 0%, rgba(10, 10, 15, 0) 50%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "12vh 8vw",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "8vh" }}>
          <div>
            <div
              style={{
                width: "5vw",
                height: "0.2vh",
                backgroundColor: "#D4A84B",
                marginBottom: "3vh",
              }}
            />
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#D4A84B",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "1.5vh",
              }}
            >
              CRAFT & PRECISION
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "4vw",
                color: "#F0ECE4",
                margin: 0,
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              The Master's Process
            </h2>
          </div>
        </div>

        {/* Content Section */}
        <div
          style={{
            display: "flex",
            gap: "6vw",
            flex: 1,
          }}
        >
          {/* Left Column */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5vh" }}>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1.2vw",
                color: "rgba(240, 236, 228, 0.8)",
                margin: 0,
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              Every piece begins with raw materials and a vision. The transformative journey from sand and fire to pristine art requires both technical mastery and intuitive understanding of the medium.
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "1vw",
                color: "rgba(240, 236, 228, 0.6)",
                margin: 0,
                lineHeight: 1.6,
                fontWeight: 300,
              }}
            >
              Our artisans spend decades honing their skills, learning to read the subtle shifts in temperature and viscosity that dictate the final form of each creation. This dedication ensures that no two pieces are ever exactly alike.
            </p>
          </div>

          {/* Right Column / Image placeholder area */}
          <div style={{ flex: 1, position: "relative" }}>
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid rgba(212, 168, 75, 0.2)",
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "3vw",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2vw",
                  color: "#F0ECE4",
                  fontStyle: "italic",
                  lineHeight: 1.3,
                  marginBottom: "2vh",
                }}
              >
                "The fire reveals what the hands can only guess."
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8vw",
                  color: "#D4A84B",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                — Head Glassblower
              </div>
            </div>
            
            {/* Decorative corner accents */}
            <div style={{ position: "absolute", top: "-0.5vw", left: "-0.5vw", width: "1vw", height: "1vw", borderTop: "1px solid #D4A84B", borderLeft: "1px solid #D4A84B" }} />
            <div style={{ position: "absolute", bottom: "-0.5vw", right: "-0.5vw", width: "1vw", height: "1vw", borderBottom: "1px solid #D4A84B", borderRight: "1px solid #D4A84B" }} />
          </div>
        </div>

        {/* Footer Elements */}
        <div
          style={{
            position: "absolute",
            bottom: "4vh",
            left: "8vw",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            color: "#D4A84B",
            letterSpacing: "0.1em",
          }}
        >
          acme.co
        </div>
        
        <div
          style={{
            position: "absolute",
            bottom: "4vh",
            right: "8vw",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            color: "#D4A84B",
            letterSpacing: "0.1em",
          }}
        >
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/GlassArtisanPage3.tsx`)

```tsx
export function GlassArtisanPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0A0A0F",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "12vh 8vw",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "6vh" }}>
          <div>
            <div
              style={{
                width: "5vw",
                height: "0.2vh",
                backgroundColor: "#D4A84B",
                marginBottom: "3vh",
              }}
            />
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.9vw",
                color: "#D4A84B",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: "1.5vh",
              }}
            >
              MEASuring EXCELLENCE
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "4vw",
                color: "#F0ECE4",
                margin: 0,
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              Global Distribution
            </h2>
          </div>
        </div>

        {/* Data Visualization Section */}
        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            padding: "0 4vw 4vh 4vw",
            position: "relative",
          }}
        >
          {/* Background grid lines */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: "4vh", borderBottom: "1px solid rgba(212, 168, 75, 0.2)", zIndex: 1 }} />
          <div style={{ position: "absolute", top: "25%", left: 0, right: 0, borderBottom: "1px dashed rgba(240, 236, 228, 0.1)", zIndex: 1 }} />
          <div style={{ position: "absolute", top: "50%", left: 0, right: 0, borderBottom: "1px dashed rgba(240, 236, 228, 0.1)", zIndex: 1 }} />
          <div style={{ position: "absolute", top: "75%", left: 0, right: 0, borderBottom: "1px dashed rgba(240, 236, 228, 0.1)", zIndex: 1 }} />

          {/* Data Bars */}
          {[
            { label: "North America", value: 85, metric: "2.4M" },
            { label: "Europe", value: 65, metric: "1.8M" },
            { label: "Asia Pacific", value: 45, metric: "1.2M" },
            { label: "Middle East", value: 30, metric: "0.8M" }
          ].map((item, index) => (
            <div key={index} style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 2, width: "15%" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.5vw",
                  color: "#F0ECE4",
                  marginBottom: "2vh",
                  fontWeight: 400,
                }}
              >
                {item.metric}
              </div>
              <div
                style={{
                  width: "100%",
                  height: `${item.value * 0.4}vh`,
                  background: "linear-gradient(to top, rgba(212, 168, 75, 0.1) 0%, rgba(212, 168, 75, 0.6) 100%)",
                  borderTop: "2px solid #D4A84B",
                  borderLeft: "1px solid rgba(212, 168, 75, 0.3)",
                  borderRight: "1px solid rgba(212, 168, 75, 0.3)",
                  backdropFilter: "blur(4px)",
                  position: "relative",
                }}
              >
                {/* Inner glass reflection line */}
                <div style={{ position: "absolute", top: 0, left: "10%", width: "2px", height: "100%", backgroundColor: "rgba(255, 255, 255, 0.1)" }} />
              </div>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.9vw",
                  color: "rgba(240, 236, 228, 0.7)",
                  marginTop: "3vh",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Elements */}
        <div
          style={{
            position: "absolute",
            bottom: "4vh",
            left: "8vw",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            color: "#D4A84B",
            letterSpacing: "0.1em",
          }}
        >
          acme.co
        </div>
        
        <div
          style={{
            position: "absolute",
            bottom: "4vh",
            right: "8vw",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            color: "#D4A84B",
            letterSpacing: "0.1em",
          }}
        >
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/GlassArtisanPage4.tsx`)

```tsx
export function GlassArtisanPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#0A0A0F",
      }}
    >
      {/* Background with slight gradient overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "radial-gradient(circle at 50% 50%, rgba(212, 168, 75, 0.08) 0%, rgba(10, 10, 15, 1) 70%)",
          zIndex: 1,
        }}
      />

      {/* Decorative borders */}
      <div style={{ position: "absolute", top: "4vh", left: "4vw", right: "4vw", bottom: "4vh", border: "1px solid rgba(212, 168, 75, 0.1)", zIndex: 1 }} />
      <div style={{ position: "absolute", top: "3.5vh", left: "4.5vw", width: "1vw", height: "1vw", borderTop: "1px solid #D4A84B", borderLeft: "1px solid #D4A84B", zIndex: 2 }} />
      <div style={{ position: "absolute", top: "3.5vh", right: "4.5vw", width: "1vw", height: "1vw", borderTop: "1px solid #D4A84B", borderRight: "1px solid #D4A84B", zIndex: 2 }} />
      <div style={{ position: "absolute", bottom: "3.5vh", left: "4.5vw", width: "1vw", height: "1vw", borderBottom: "1px solid #D4A84B", borderLeft: "1px solid #D4A84B", zIndex: 2 }} />
      <div style={{ position: "absolute", bottom: "3.5vh", right: "4.5vw", width: "1vw", height: "1vw", borderBottom: "1px solid #D4A84B", borderRight: "1px solid #D4A84B", zIndex: 2 }} />

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "0.1vw",
            height: "8vh",
            backgroundColor: "#D4A84B",
            marginBottom: "5vh",
          }}
        />

        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1vw",
            color: "#D4A84B",
            textTransform: "uppercase",
            letterSpacing: "0.3em",
            marginBottom: "3vh",
          }}
        >
          COMMISSION A PIECE
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6vw",
            color: "#F0ECE4",
            margin: "0 0 4vh 0",
            fontWeight: 400,
            lineHeight: 1.1,
            maxWidth: "70vw",
          }}
        >
          Shape the Future <br />of Glass Art
        </h1>

        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.1vw",
            color: "rgba(240, 236, 228, 0.6)",
            margin: "0 0 6vh 0",
            maxWidth: "40vw",
            lineHeight: 1.6,
            fontWeight: 300,
          }}
        >
          Join our exclusive collective of collectors and patrons. Begin your journey with a private consultation.
        </p>

        <div
          style={{
            padding: "1.5vh 3vw",
            border: "1px solid #D4A84B",
            color: "#D4A84B",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            cursor: "pointer",
            backgroundColor: "rgba(212, 168, 75, 0.05)",
            transition: "all 0.3s ease",
          }}
        >
          Inquire Now
        </div>
      </div>

      {/* Footer Elements */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          zIndex: 3,
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.8vw",
          color: "rgba(240, 236, 228, 0.4)",
          letterSpacing: "0.1em",
        }}
      >
        acme.co
      </div>
      
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "8vw",
          zIndex: 3,
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.8vw",
          color: "rgba(240, 236, 228, 0.4)",
          letterSpacing: "0.1em",
        }}
      >
        04
      </div>
    </div>
  );
}
```
