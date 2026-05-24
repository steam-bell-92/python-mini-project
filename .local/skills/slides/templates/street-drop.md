# Street Drop

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "StreetDrop" template features a modern, urban aesthetic with a focus on sneaker culture. It has a solid background color of #080808 (black) and includes a background image of a floating sneaker located at "/__mockup/photos/sneaker-float.png". A dark gradient overlay is applied, transitioning from rgba(8,8,8,0.92) to rgba(8,8,8,0.5) and then to transparent. The text colors include #7AB87A (a soft green) for accents and #ffffff (white) for primary text, with additional text in rgba(255, 255, 255, 0.7) for a subtle effect. The font families used are 'Inter' for general text, 'Space Grotesk' for the main title, and 'DM Mono' for technical details, creating a contemporary and tech-inspired feel. Key layout elements include a flexbox structure for content organization, with a prominent title and subtitle positioned centrally, and decorative badges at the top. The overall aesthetic feel can be described as "urban chic."

## Source Code

**Component:** `StreetDrop`

### Slide 1 — Title (`slide-styles/StreetDrop.tsx`)

```tsx
export function StreetDrop() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#080808",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/sneaker-float.png"
        alt="Floating Sneaker"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Dark Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to right, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.5) 50%, transparent 65%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "55vw",
          height: "100vh",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: "8vw 6vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top Badges / Labels */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5vw",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              padding: "0.6vh 1.2vw",
              border: "1px solid #7AB87A",
              borderRadius: "2vw",
              fontSize: "0.85vw",
              fontWeight: 700,
              color: "#7AB87A",
              letterSpacing: "0.1em",
            }}
          >
            NEW DROP
          </div>
          <div
            style={{
              fontSize: "0.85vw",
              fontWeight: 600,
              color: "#ffffff",
              letterSpacing: "0.1em",
              opacity: 0.8,
            }}
          >
            SS/26 COLLECTION
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3vh",
            marginTop: "15vh",
            marginBottom: "10vh",
          }}
        >
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "7vw",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 0.9,
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
            }}
          >
            EXAMPLE DECK
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.5vw",
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "40vw",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Technical Details */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.9vw",
              color: "#7AB87A",
              letterSpacing: "0.05em",
            }}
          >
            COLORWAY: ARCTIC WHITE
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.9vw",
              color: "#7AB87A",
              letterSpacing: "0.05em",
            }}
          >
            STYLE: EX-2026
          </div>
        </div>

        {/* Footer Brand */}
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.1vw",
            fontWeight: 500,
            color: "#ffffff",
            letterSpacing: "0.05em",
            opacity: 0.9,
            marginTop: "auto",
          }}
        >
          acme.co
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/StreetDropPage2.tsx`)

```tsx
export function StreetDropPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#080808",
      }}
    >
      <img
        src="/__mockup/photos/sneaker-float.png"
        alt="Floating Sneaker"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
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
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to right, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.7) 100%)",
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
          padding: "6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6vh" }}>
           <div
            style={{
              padding: "0.6vh 1.2vw",
              border: "1px solid #7AB87A",
              borderRadius: "2vw",
              fontSize: "0.85vw",
              fontWeight: 700,
              color: "#7AB87A",
              letterSpacing: "0.1em",
            }}
          >
            02 / THE VISION
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#7AB87A", letterSpacing: "0.05em" }}>
            STYLE: EX-2026
          </div>
        </div>

        <div style={{ display: "flex", gap: "8vw", flex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
            <h2
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "4.5vw",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1,
                margin: "0 0 4vh 0",
                textTransform: "uppercase",
                letterSpacing: "-0.03em",
              }}
            >
              ELEVATING STREETWEAR
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.2vw",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.6,
                margin: "0 0 3vh 0",
              }}
            >
              We are blending high-fashion aesthetics with technical streetwear utility. 
              The new drop focuses on breathable fabrics, modular components, and an undeniable 
              silhouette that stands out in any urban environment.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.2vw",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Every seam, stitch, and panel has been re-engineered for maximum mobility 
              without compromising the avant-garde shape that defines our brand.
            </p>
          </div>
          
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "4vh" }}>
             {[
               { title: "MODULAR DESIGN", desc: "Adaptable elements for changing climates." },
               { title: "TECHNICAL FABRICS", desc: "Water-resistant, breathable, and durable." },
               { title: "SUSTAINABLE SOURCING", desc: "Recycled materials in 80% of the collection." }
             ].map((item, i) => (
               <div key={i} style={{ borderLeft: "2px solid #7AB87A", paddingLeft: "2vw" }}>
                 <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5vw", fontWeight: 700, color: "#fff", margin: "0 0 1vh 0", letterSpacing: "0.05em" }}>
                   {item.title}
                 </h3>
                 <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.5 }}>
                   {item.desc}
                 </p>
               </div>
             ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.1vw",
            fontWeight: 500,
            color: "#ffffff",
            letterSpacing: "0.05em",
            opacity: 0.9,
          }}
        >
          <div>acme.co</div>
          <div>02</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/StreetDropPage3.tsx`)

```tsx
export function StreetDropPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#080808",
      }}
    >
      <img
        src="/__mockup/photos/sneaker-float.png"
        alt="Floating Sneaker"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
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
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to bottom, rgba(8,8,8,0.9) 0%, rgba(8,8,8,0.95) 100%)",
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
          padding: "6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8vh" }}>
           <div
            style={{
              padding: "0.6vh 1.2vw",
              border: "1px solid #7AB87A",
              borderRadius: "2vw",
              fontSize: "0.85vw",
              fontWeight: 700,
              color: "#7AB87A",
              letterSpacing: "0.1em",
            }}
          >
            03 / MARKET IMPACT
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh", marginBottom: "8vh" }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "5vw",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1,
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "-0.03em",
            }}
          >
            GLOBAL REACH
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "40vw",
            }}
          >
            Our projected growth metrics across key metropolitan hubs for the upcoming Q4 drop.
          </p>
        </div>

        <div style={{ display: "flex", gap: "4vw", alignItems: "flex-end", height: "35vh", paddingBottom: "4vh", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
          {[
            { label: "TOKYO", value: 85, metric: "2.4M" },
            { label: "LONDON", value: 60, metric: "1.8M" },
            { label: "NEW YORK", value: 95, metric: "3.1M" },
            { label: "PARIS", value: 45, metric: "1.2M" },
            { label: "SEOUL", value: 75, metric: "2.1M" }
          ].map((item, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "2vw", fontWeight: 700, color: "#fff" }}>
                {item.metric}
              </div>
              <div style={{ width: "100%", height: "25vh", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
                <div 
                  style={{ 
                    width: "4vw", 
                    height: `${item.value}%`, 
                    backgroundColor: i === 2 ? "#7AB87A" : "rgba(255,255,255,0.15)",
                    transition: "height 1s ease-out"
                  }} 
                />
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.1vw",
            fontWeight: 500,
            color: "#ffffff",
            letterSpacing: "0.05em",
            opacity: 0.9,
          }}
        >
          <div>acme.co</div>
          <div>03</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/StreetDropPage4.tsx`)

```tsx
export function StreetDropPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#080808",
      }}
    >
      <img
        src="/__mockup/photos/sneaker-float.png"
        alt="Floating Sneaker"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to right, rgba(8,8,8,0.92) 0%, rgba(8,8,8,0.85) 50%, rgba(8,8,8,0.92) 100%)",
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
          padding: "6vw",
          boxSizing: "border-box",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "0.6vh 1.2vw",
            border: "1px solid #7AB87A",
            borderRadius: "2vw",
            fontSize: "0.85vw",
            fontWeight: 700,
            color: "#7AB87A",
            letterSpacing: "0.1em",
            marginBottom: "6vh",
          }}
        >
          JOIN THE MOVEMENT
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "8vw",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 0.9,
            margin: "0 0 3vh 0",
            textTransform: "uppercase",
            letterSpacing: "-0.03em",
          }}
        >
          SECURE<br />YOUR DROP
        </h1>
        
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.5vw",
            fontWeight: 400,
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: 1.5,
            margin: "0 0 6vh 0",
            maxWidth: "40vw",
          }}
        >
          Early access opens next week. Register now to guarantee your spot in the queue.
        </p>

        <div
          style={{
            display: "flex",
            gap: "2vw",
          }}
        >
          <div
            style={{
              padding: "2vh 4vw",
              backgroundColor: "#7AB87A",
              color: "#080808",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.2vw",
              fontWeight: 700,
              letterSpacing: "0.05em",
              borderRadius: "0.5vw",
              cursor: "pointer",
            }}
          >
            REGISTER NOW
          </div>
          <div
            style={{
              padding: "2vh 4vw",
              backgroundColor: "transparent",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#ffffff",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.2vw",
              fontWeight: 700,
              letterSpacing: "0.05em",
              borderRadius: "0.5vw",
              cursor: "pointer",
            }}
          >
            VIEW LOOKBOOK
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "6vw",
            left: "6vw",
            right: "6vw",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.1vw",
            fontWeight: 500,
            color: "#ffffff",
            letterSpacing: "0.05em",
            opacity: 0.9,
          }}
        >
          <div>acme.co</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#7AB87A" }}>
            STYLE: EX-2026
          </div>
          <div>04</div>
        </div>
      </div>
    </div>
  );
}
```
