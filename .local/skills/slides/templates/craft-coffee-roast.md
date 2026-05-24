# Craft Coffee Roast

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "CraftCoffeeRoast" template embodies a rustic and sophisticated aesthetic, ideal for showcasing coffee-related content. The background features a linear gradient with colors rgba(25, 15, 8, 0.9) to rgba(25, 15, 8, 0.5) transitioning to transparent, set against a full-screen image of coffee roasting located at "/__mockup/photos/coffee-roasting.png". Text elements utilize the font families 'Inter' for body text, 'DM Mono' for accent details, and 'Playfair Display' for the main heading, creating a blend of modern and classic styles. Key colors include #B87333 for accents and #F5E8D4 for primary text, contributing to a warm, inviting feel. The layout is structured with a flexible design, featuring a prominent title, subtitle, and additional details, all positioned thoughtfully within the frame. Overall, the aesthetic feel can be described as "rustic elegance."

## Source Code

**Component:** `CraftCoffeeRoast`

### Slide 1 — Title (`slide-styles/CraftCoffeeRoast.tsx`)

```tsx
export function CraftCoffeeRoast() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <img
        src="/__mockup/photos/coffee-roasting.png"
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
          background: "linear-gradient(to right, rgba(25,15,8,0.9) 0%, rgba(25,15,8,0.5) 50%, transparent 65%)",
          zIndex: 1,
        }}
      />
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
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "45vw" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#B87333",
              fontSize: "1vw",
              letterSpacing: "0.15em",
            }}
          >
            SINGLE ORIGIN
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.6,
              fontSize: "0.9vw",
              textAlign: "right",
            }}
          >
            Lot No. 2026
          </div>
        </div>

        <div style={{ marginTop: "18vh", width: "45vw" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F5E8D4",
              fontSize: "6vw",
              lineHeight: 1.1,
              margin: "0 0 4vh 0",
              fontWeight: 600,
            }}
          >
            Example Deck
          </h1>
          <div
            style={{
              width: "4vw",
              height: "2px",
              backgroundColor: "#B87333",
              marginBottom: "4vh",
            }}
          />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#F5E8D4",
              opacity: 0.8,
              fontSize: "1.5vw",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "35vw",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "1.5vh",
            width: "45vw",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.7,
              fontSize: "1vw",
              letterSpacing: "0.05em",
            }}
          >
            ALTITUDE: 1,800m
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.7,
              fontSize: "1vw",
              letterSpacing: "0.05em",
            }}
          >
            ROAST PROFILE: MEDIUM
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "8vh",
            left: "6vw",
            fontFamily: "'DM Mono', monospace",
            color: "#F5E8D4",
            opacity: 0.5,
            fontSize: "1vw",
          }}
        >
          acme.co
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CraftCoffeeRoastPage2.tsx`)

```tsx
export function CraftCoffeeRoastPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#190F08",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <img
        src="/__mockup/photos/coffee-roasting.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.15,
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
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", marginBottom: "6vh" }}>
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#B87333",
                fontSize: "1vw",
                letterSpacing: "0.15em",
                marginBottom: "2vh",
              }}
            >
              THE PROCESS
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F5E8D4",
                fontSize: "4vw",
                margin: 0,
                fontWeight: 600,
                lineHeight: 1.1,
              }}
            >
              Artisan Roasting
            </h2>
            <div
              style={{
                width: "4vw",
                height: "2px",
                backgroundColor: "#B87333",
                marginTop: "3vh",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.6,
              fontSize: "0.9vw",
              textAlign: "right",
            }}
          >
            Lot No. 2026
          </div>
        </div>

        <div style={{ display: "flex", gap: "6vw", flex: 1, marginTop: "4vh" }}>
          <div style={{ flex: 1 }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#F5E8D4",
                opacity: 0.8,
                fontSize: "1.4vw",
                lineHeight: 1.6,
                margin: "0 0 3vh 0",
              }}
            >
              We believe that roasting is a delicate balance of art and science. Each batch is carefully monitored by our master roasters to ensure the unique characteristics of the beans are preserved.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                color: "#F5E8D4",
                opacity: 0.8,
                fontSize: "1.4vw",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Our small-batch process allows us to adapt to the nuances of every harvest, bringing out the distinct flavor notes that make our coffee truly exceptional.
            </p>
          </div>
          
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
            <div style={{ borderLeft: "2px solid #B87333", paddingLeft: "2vw" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#F5E8D4", fontSize: "2vw", margin: "0 0 1vh 0", fontWeight: 500 }}>Temperature Control</h3>
              <p style={{ color: "#F5E8D4", opacity: 0.7, fontSize: "1.1vw", margin: 0, lineHeight: 1.5 }}>
                Precise adjustments at critical stages of the roast curve.
              </p>
            </div>
            <div style={{ borderLeft: "2px solid #B87333", paddingLeft: "2vw" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#F5E8D4", fontSize: "2vw", margin: "0 0 1vh 0", fontWeight: 500 }}>Development Time</h3>
              <p style={{ color: "#F5E8D4", opacity: 0.7, fontSize: "1.1vw", margin: 0, lineHeight: 1.5 }}>
                Optimizing the Maillard reaction for perfect sweetness.
              </p>
            </div>
            <div style={{ borderLeft: "2px solid #B87333", paddingLeft: "2vw" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#F5E8D4", fontSize: "2vw", margin: "0 0 1vh 0", fontWeight: 500 }}>Cooling Phase</h3>
              <p style={{ color: "#F5E8D4", opacity: 0.7, fontSize: "1.1vw", margin: 0, lineHeight: 1.5 }}>
                Rapid cooling to halt the roasting process instantly.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.5,
              fontSize: "1vw",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.5,
              fontSize: "1vw",
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

### Slide 3 (`slide-pages/CraftCoffeeRoastPage3.tsx`)

```tsx
export function CraftCoffeeRoastPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#190F08",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <img
        src="/__mockup/photos/coffee-roasting.png"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.15,
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
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", marginBottom: "6vh" }}>
          <div>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                color: "#B87333",
                fontSize: "1vw",
                letterSpacing: "0.15em",
                marginBottom: "2vh",
              }}
            >
              SOURCING METRICS
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "#F5E8D4",
                fontSize: "4vw",
                margin: 0,
                fontWeight: 600,
                lineHeight: 1.1,
              }}
            >
              Harvest Yields
            </h2>
            <div
              style={{
                width: "4vw",
                height: "2px",
                backgroundColor: "#B87333",
                marginTop: "3vh",
              }}
            />
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.6,
              fontSize: "0.9vw",
              textAlign: "right",
            }}
          >
            Lot No. 2026
          </div>
        </div>

        <div style={{ display: "flex", flex: 1, alignItems: "center", gap: "8vw" }}>
          <div style={{ flex: "0 0 30%" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: "#F5E8D4", fontSize: "2.5vw", margin: "0 0 2vh 0", fontWeight: 500 }}>
              Sustainable Growth
            </h3>
            <p style={{ color: "#F5E8D4", opacity: 0.8, fontSize: "1.3vw", lineHeight: 1.6, margin: "0 0 4vh 0" }}>
              Our commitment to ethical sourcing has resulted in consistent quality improvements and higher yields year over year.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", color: "#B87333", fontSize: "0.9vw", letterSpacing: "0.05em", marginBottom: "0.5vh" }}>Q-GRADE AVERAGE</div>
                <div style={{ color: "#F5E8D4", fontSize: "2.5vw", fontWeight: 600 }}>87.5</div>
              </div>
              <div>
                <div style={{ fontFamily: "'DM Mono', monospace", color: "#B87333", fontSize: "0.9vw", letterSpacing: "0.05em", marginBottom: "0.5vh" }}>PARTNER FARMS</div>
                <div style={{ color: "#F5E8D4", fontSize: "2.5vw", fontWeight: 600 }}>124</div>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, height: "45vh", display: "flex", alignItems: "flex-end", gap: "4vw", paddingBottom: "2vh", borderBottom: "1px solid rgba(245, 232, 212, 0.2)" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#F5E8D4", opacity: 0.8, fontSize: "1.2vw" }}>65%</div>
              <div style={{ width: "100%", height: "25vh", backgroundColor: "rgba(184, 115, 51, 0.4)", position: "relative" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", backgroundColor: "#B87333", opacity: 0.8 }} />
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#F5E8D4", opacity: 0.6, fontSize: "1vw" }}>2021</div>
            </div>
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#F5E8D4", opacity: 0.8, fontSize: "1.2vw" }}>78%</div>
              <div style={{ width: "100%", height: "32vh", backgroundColor: "rgba(184, 115, 51, 0.4)", position: "relative" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", backgroundColor: "#B87333", opacity: 0.9 }} />
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#F5E8D4", opacity: 0.6, fontSize: "1vw" }}>2022</div>
            </div>
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#F5E8D4", opacity: 0.8, fontSize: "1.2vw" }}>92%</div>
              <div style={{ width: "100%", height: "40vh", backgroundColor: "rgba(184, 115, 51, 0.4)", position: "relative" }}>
                <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", backgroundColor: "#B87333", opacity: 1 }} />
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#F5E8D4", opacity: 0.6, fontSize: "1vw" }}>2023</div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.5,
              fontSize: "1vw",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.5,
              fontSize: "1vw",
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

### Slide 4 (`slide-pages/CraftCoffeeRoastPage4.tsx`)

```tsx
export function CraftCoffeeRoastPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <img
        src="/__mockup/photos/coffee-roasting.png"
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
          background: "linear-gradient(to right, rgba(25,15,8,0.95) 0%, rgba(25,15,8,0.85) 100%)",
          zIndex: 1,
        }}
      />
      
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
          padding: "8vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.6,
              fontSize: "0.9vw",
              textAlign: "right",
            }}
          >
            Lot No. 2026
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#B87333",
              fontSize: "1.2vw",
              letterSpacing: "0.2em",
              marginBottom: "4vh",
            }}
          >
            JOIN THE JOURNEY
          </div>
          
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#F5E8D4",
              fontSize: "7vw",
              lineHeight: 1.1,
              margin: "0 0 4vh 0",
              fontWeight: 600,
            }}
          >
            Taste the Origin
          </h2>
          
          <div
            style={{
              width: "6vw",
              height: "2px",
              backgroundColor: "#B87333",
              marginBottom: "5vh",
            }}
          />
          
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              color: "#F5E8D4",
              opacity: 0.8,
              fontSize: "1.6vw",
              lineHeight: 1.5,
              margin: "0 0 6vh 0",
              maxWidth: "40vw",
            }}
          >
            Experience the careful craft of our small-batch roasting process. Order your sample kit today.
          </p>
          
          <div
            style={{
              padding: "2vh 4vw",
              border: "1px solid #B87333",
              color: "#F5E8D4",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.1vw",
              letterSpacing: "0.1em",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            REQUEST SAMPLES
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.5,
              fontSize: "1vw",
            }}
          >
            hello@acme.co
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              color: "#F5E8D4",
              opacity: 0.5,
              fontSize: "1vw",
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
