# Artisan Ceramics

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The ArtisanCeramics template features a warm, earthy aesthetic that reflects a handmade pottery style. The background consists of a full-screen image of a pottery studio located at the URL "/__mockup/photos/pottery-studio.png". The overlay has a semi-transparent background color of rgba(245, 240, 232, 0.92). Text colors include a deep brown (#2A2520) for primary text and a muted clay color (#B87A5E) for accents, with the latter also used for decorative elements like a circular border and a horizontal line. The font families used are 'DM Sans' for general text and 'DM Mono' for accentuated phrases, emphasizing a modern yet artisanal feel. Key layout elements include a right-aligned sidebar that contains the title, subtitle, and additional information, creating a structured yet inviting composition. The overall aesthetic feel can be described as "earthy, artisanal, inviting."

## Source Code

**Component:** `ArtisanCeramics`

### Slide 1 — Title (`slide-styles/ArtisanCeramics.tsx`)

```tsx
export function ArtisanCeramics() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <img
        src="/__mockup/photos/pottery-studio.png"
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
          right: 0,
          width: "30vw",
          height: "100%",
          backgroundColor: "rgba(245,240,232,0.92)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          padding: "6vh 3vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "auto" }}>
          <div
            style={{
              width: "3vw",
              height: "3vw",
              border: "1px solid #B87A5E",
              borderRadius: "50%",
              opacity: 0.8,
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#B87A5E",
              fontSize: "0.8vw",
              letterSpacing: "0.3em",
              fontWeight: 500,
            }}
          >
            HANDMADE
          </span>
        </div>

        <div style={{ marginTop: "10vh" }}>
          <h1
            style={{
              color: "#2A2520",
              fontSize: "4.5vw",
              lineHeight: 1.1,
              fontWeight: 400,
              margin: "0 0 3vh 0",
              letterSpacing: "-0.02em",
            }}
          >
            Example Deck
          </h1>
          
          <p
            style={{
              color: "#2A2520",
              opacity: 0.7,
              fontSize: "1.2vw",
              lineHeight: 1.6,
              margin: 0,
              fontWeight: 400,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "3vw",
            right: "3vw",
            height: "1px",
            backgroundColor: "#B87A5E",
            opacity: 0.4,
          }}
        />

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#B87A5E",
              fontSize: "0.9vw",
              letterSpacing: "0.1em",
            }}
          >
            EST. 2026
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#2A2520",
              opacity: 0.5,
              fontSize: "0.8vw",
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ArtisanCeramicsPage2.tsx`)

```tsx
export function ArtisanCeramicsPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F0E8",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'DM Sans', sans-serif",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "8vh" }}>
        <div
          style={{
            width: "3vw",
            height: "3vw",
            border: "1px solid #B87A5E",
            borderRadius: "50%",
            opacity: 0.8,
          }}
        />
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#B87A5E",
            fontSize: "0.8vw",
            letterSpacing: "0.3em",
            fontWeight: 500,
          }}
        >
          OUR PROCESS
        </span>
      </div>

      <div style={{ display: "flex", gap: "6vw", height: "100%" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              color: "#2A2520",
              fontSize: "3.5vw",
              lineHeight: 1.1,
              fontWeight: 400,
              margin: "0 0 4vh 0",
              letterSpacing: "-0.02em",
            }}
          >
            Crafting with Intent
          </h2>
          <p
            style={{
              color: "#2A2520",
              opacity: 0.7,
              fontSize: "1.2vw",
              lineHeight: 1.6,
              margin: "0 0 6vh 0",
              fontWeight: 400,
              maxWidth: "80%",
            }}
          >
            Every piece we create is born from a deep respect for natural materials and traditional techniques. We embrace the unpredictable nature of the kiln.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "4vh" }}>
            {[
              { num: "01", title: "Sourcing Clay", desc: "Locally harvested materials from riverbeds." },
              { num: "02", title: "Wheel Throwing", desc: "Shaping forms with steady hands and focus." },
              { num: "03", title: "Wood Firing", desc: "A 48-hour process that leaves unique ash deposits." },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: "#B87A5E",
                    fontSize: "1vw",
                    paddingTop: "0.2vh",
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <h3
                    style={{
                      color: "#2A2520",
                      fontSize: "1.4vw",
                      margin: "0 0 1vh 0",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      color: "#2A2520",
                      opacity: 0.6,
                      fontSize: "1vw",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, position: "relative" }}>
          <img
            src="/__mockup/photos/pottery-studio.png"
            alt=""
            style={{
              width: "100%",
              height: "60vh",
              objectFit: "cover",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-2vh",
              left: "-2vw",
              width: "20vw",
              height: "20vh",
              backgroundColor: "#B87A5E",
              zIndex: -1,
            }}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(184, 122, 94, 0.2)",
          paddingTop: "3vh",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#2A2520",
            opacity: 0.5,
            fontSize: "0.8vw",
            letterSpacing: "0.05em",
          }}
        >
          acme.co
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#B87A5E",
            fontSize: "0.8vw",
          }}
        >
          02
        </span>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/ArtisanCeramicsPage3.tsx`)

```tsx
export function ArtisanCeramicsPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F5F0E8",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'DM Sans', sans-serif",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "8vh" }}>
        <div
          style={{
            width: "3vw",
            height: "3vw",
            border: "1px solid #B87A5E",
            borderRadius: "50%",
            opacity: 0.8,
          }}
        />
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#B87A5E",
            fontSize: "0.8vw",
            letterSpacing: "0.3em",
            fontWeight: 500,
          }}
        >
          IMPACT & SCALE
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "8vh" }}>
        <h2
          style={{
            color: "#2A2520",
            fontSize: "3.5vw",
            lineHeight: 1.1,
            fontWeight: 400,
            margin: "0 0 2vh 0",
            letterSpacing: "-0.02em",
          }}
        >
          Growth & Production
        </h2>
        <p
          style={{
            color: "#2A2520",
            opacity: 0.7,
            fontSize: "1.2vw",
            lineHeight: 1.6,
            margin: 0,
            fontWeight: 400,
            maxWidth: "40vw",
          }}
        >
          Scaling traditional craftsmanship without compromising the soul of the work.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "4vw", padding: "0 4vw", height: "35vh", borderBottom: "1px solid rgba(184, 122, 94, 0.4)" }}>
        {[
          { label: "2023", value: 30, height: "30%" },
          { label: "2024", value: 45, height: "45%" },
          { label: "2025", value: 65, height: "65%" },
          { label: "2026", value: 100, height: "100%" },
        ].map((bar, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh", flex: 1, height: "100%", justifyContent: "flex-end" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#B87A5E",
                fontSize: "1.2vw",
                fontWeight: 500,
                opacity: i === 3 ? 1 : 0.6,
              }}
            >
              {bar.value}k
            </span>
            <div
              style={{
                width: "100%",
                height: bar.height,
                backgroundColor: i === 3 ? "#B87A5E" : "rgba(184, 122, 94, 0.3)",
                transition: "height 0.5s ease-out",
              }}
            />
          </div>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", padding: "2vh 4vw 0 4vw" }}>
        {["2023", "2024", "2025", "2026"].map((year, i) => (
          <div key={i} style={{ flex: 1, textAlign: "center" }}>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#2A2520",
                fontSize: "0.9vw",
                opacity: 0.6,
              }}
            >
              {year}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(184, 122, 94, 0.2)",
          paddingTop: "3vh",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#2A2520",
            opacity: 0.5,
            fontSize: "0.8vw",
            letterSpacing: "0.05em",
          }}
        >
          acme.co
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#B87A5E",
            fontSize: "0.8vw",
          }}
        >
          03
        </span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ArtisanCeramicsPage4.tsx`)

```tsx
export function ArtisanCeramicsPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <img
        src="/__mockup/photos/pottery-studio.png"
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
          backgroundColor: "rgba(42, 37, 32, 0.4)",
          zIndex: 1,
        }}
      />
      
      <div
        style={{
          position: "relative",
          zIndex: 2,
          margin: "auto",
          width: "50vw",
          backgroundColor: "#F5F0E8",
          padding: "8vh 5vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          boxShadow: "0 2vh 4vh rgba(0,0,0,0.2)",
        }}
      >
        <div
          style={{
            width: "4vw",
            height: "4vw",
            border: "1px solid #B87A5E",
            borderRadius: "50%",
            marginBottom: "4vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "2vw",
              height: "2vw",
              backgroundColor: "#B87A5E",
              borderRadius: "50%",
              opacity: 0.8,
            }}
          />
        </div>

        <h2
          style={{
            color: "#2A2520",
            fontSize: "4vw",
            lineHeight: 1.1,
            fontWeight: 400,
            margin: "0 0 3vh 0",
            letterSpacing: "-0.02em",
          }}
        >
          Join Our Studio
        </h2>
        
        <p
          style={{
            color: "#2A2520",
            opacity: 0.7,
            fontSize: "1.2vw",
            lineHeight: 1.6,
            margin: "0 0 6vh 0",
            fontWeight: 400,
          }}
        >
          Experience the tactile joy of creation. Connect with us to start your journey in clay.
        </p>

        <button
          style={{
            backgroundColor: "#B87A5E",
            color: "#FFF",
            border: "none",
            padding: "2vh 4vw",
            fontSize: "1vw",
            fontFamily: "'DM Mono', monospace",
            letterSpacing: "0.1em",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            marginBottom: "4vh",
          }}
        >
          GET IN TOUCH
        </button>

        <div style={{ display: "flex", gap: "3vw" }}>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#2A2520",
              opacity: 0.6,
              fontSize: "0.9vw",
              letterSpacing: "0.05em",
            }}
          >
            studio@acme.co
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#2A2520",
              opacity: 0.6,
              fontSize: "0.9vw",
              letterSpacing: "0.05em",
            }}
          >
            +1 (555) 123-4567
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "6vw",
          right: "6vw",
          zIndex: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "rgba(255,255,255,0.7)",
            fontSize: "0.8vw",
            letterSpacing: "0.05em",
          }}
        >
          acme.co
        </span>
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            color: "#FFF",
            fontSize: "0.8vw",
          }}
        >
          04
        </span>
      </div>
    </div>
  );
}
```
