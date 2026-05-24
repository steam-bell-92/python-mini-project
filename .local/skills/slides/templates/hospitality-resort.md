# Hospitality Resort

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "HospitalityResort" template features a luxurious and elegant aesthetic, suitable for a high-end resort presentation. The background color is a solid black (#111), overlaid with a linear gradient that transitions from a dark brown (#231912) to a semi-transparent brown (#231912) and then to transparent. Text colors include a goldish hue (#C4A265), a light beige (#E8D5B8), and a soft off-white (#F5EDE0). The font families used are "serif" for the establishment date and "Playfair Display" for the main title, conveying sophistication, while "Inter" is used for subtitles and body text for modern readability. Key layout elements include a full-screen background image of a resort pool, a structured layout with flexbox for content positioning, and decorative horizontal lines in gold. The background image is sourced from "/__mockup/photos/resort-pool.png". The overall aesthetic feel is "luxurious elegance."

## Source Code

**Component:** `HospitalityResort`

### Slide 1 — Title (`slide-styles/HospitalityResort.tsx`)

```tsx
export function HospitalityResort() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#111",
      }}
    >
      <img
        src="/__mockup/photos/resort-pool.png"
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
          background:
            "linear-gradient(90deg, rgba(35,25,18,0.88) 0%, rgba(35,25,18,0.88) 25%, rgba(35,25,18,0.6) 45%, transparent 60%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "8vh 8vw",
          boxSizing: "border-box",
          width: "55vw",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2vh",
          }}
        >
          <div
            style={{
              fontFamily: "serif",
              fontSize: "1vw",
              color: "#C4A265",
              letterSpacing: "0.05em",
            }}
          >
            Est. 2026
          </div>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8vw",
              color: "#E8D5B8",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            HOSPITALITY & EXPERIENCES
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4vh" }}>
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#C4A265",
            }}
          />
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "6vw",
              color: "#E8D5B8",
              margin: 0,
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Example Deck
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "1.4vw",
              color: "#F5EDE0",
              margin: 0,
              maxWidth: "35vw",
              lineHeight: 1.6,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
          <div
            style={{
              fontFamily: "serif",
              fontSize: "1.1vw",
              color: "#C4A265",
              fontStyle: "italic",
              marginTop: "2vh",
            }}
          >
            Five-Star Collection
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            color: "#E8D5B8",
            opacity: 0.6,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          <div>acme.co</div>
          <div>Confidential</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/HospitalityResortPage2.tsx`)

```tsx
export function HospitalityResortPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#111",
      }}
    >
      {/* Subtle background image on the right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50vw",
          height: "100%",
          backgroundImage: "url('/__mockup/photos/resort-pool.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50vw",
          height: "100%",
          background: "linear-gradient(90deg, #111 0%, rgba(17,17,17,0.8) 40%, transparent 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "8vh 8vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8vw",
              color: "#C4A265",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            01 / Curated Experiences
          </div>
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#C4A265",
            }}
          />
        </div>

        <div style={{ display: "flex", width: "100%", gap: "8vw", alignItems: "center" }}>
          <div style={{ flex: 1, maxWidth: "50vw" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: "4.5vw",
                color: "#E8D5B8",
                margin: "0 0 4vh 0",
                lineHeight: 1.1,
                fontWeight: 400,
              }}
            >
              The Art of Exceptional Hospitality
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: "1.2vw",
                color: "#F5EDE0",
                margin: "0 0 4vh 0",
                lineHeight: 1.6,
                maxWidth: "40vw",
              }}
            >
              We believe that true luxury lies in the details. Every touchpoint is meticulously designed to create an environment where guests feel anticipated, understood, and genuinely cared for.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "3vh", marginTop: "2vh" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
                <div style={{ color: "#C4A265", fontFamily: "serif", fontSize: "1.5vw", fontStyle: "italic", lineHeight: 1 }}>01</div>
                <div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1.1vw", color: "#E8D5B8", margin: "0 0 0.8vh 0" }}>Immersive Design</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.9vw", color: "#F5EDE0", margin: 0, opacity: 0.8, lineHeight: 1.5 }}>Architecture that blends seamlessly with the natural landscape, offering a sense of place.</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
                <div style={{ color: "#C4A265", fontFamily: "serif", fontSize: "1.5vw", fontStyle: "italic", lineHeight: 1 }}>02</div>
                <div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1.1vw", color: "#E8D5B8", margin: "0 0 0.8vh 0" }}>Bespoke Wellness</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.9vw", color: "#F5EDE0", margin: 0, opacity: 0.8, lineHeight: 1.5 }}>Holistic treatments tailored to individual rhythms and rejuvenation needs.</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
                <div style={{ color: "#C4A265", fontFamily: "serif", fontSize: "1.5vw", fontStyle: "italic", lineHeight: 1 }}>03</div>
                <div>
                  <h3 style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "1.1vw", color: "#E8D5B8", margin: "0 0 0.8vh 0" }}>Culinary Mastery</h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300, fontSize: "0.9vw", color: "#F5EDE0", margin: 0, opacity: 0.8, lineHeight: 1.5 }}>Locally sourced ingredients transformed into world-class, memorable dining experiences.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            color: "#E8D5B8",
            opacity: 0.6,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
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

### Slide 3 (`slide-pages/HospitalityResortPage3.tsx`)

```tsx
export function HospitalityResortPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#111",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "8vh 8vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8vw",
              color: "#C4A265",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            02 / Performance & Growth
          </div>
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#C4A265",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: "10vh", marginTop: "4vh" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "4vw",
              color: "#E8D5B8",
              margin: 0,
              fontWeight: 400,
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Elevating the Global Standard
          </h2>

          <div style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "flex-start", padding: "0 4vw" }}>
            {/* Stat 1 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3vh", width: "22vw" }}>
              <div style={{ 
                fontFamily: "serif", 
                fontSize: "6vw", 
                color: "#C4A265", 
                fontStyle: "italic",
                lineHeight: 1,
                display: "flex",
                alignItems: "baseline"
              }}>
                98<span style={{ fontSize: "3vw", marginLeft: "0.2vw" }}>%</span>
              </div>
              <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(196, 162, 101, 0.3)" }} />
              <div style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: "1vw", 
                color: "#F5EDE0", 
                textAlign: "center",
                fontWeight: 300,
                lineHeight: 1.6
              }}>
                Guest satisfaction rate across all global premium properties.
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3vh", width: "22vw", marginTop: "6vh" }}>
              <div style={{ 
                fontFamily: "serif", 
                fontSize: "6vw", 
                color: "#E8D5B8", 
                fontStyle: "italic",
                lineHeight: 1
              }}>
                12
              </div>
              <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(232, 213, 184, 0.2)" }} />
              <div style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: "1vw", 
                color: "#F5EDE0", 
                textAlign: "center",
                fontWeight: 300,
                lineHeight: 1.6
              }}>
                New luxury destinations scheduled to open by Q4 2026.
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3vh", width: "22vw" }}>
              <div style={{ 
                fontFamily: "serif", 
                fontSize: "6vw", 
                color: "#C4A265", 
                fontStyle: "italic",
                lineHeight: 1,
                display: "flex",
                alignItems: "baseline"
              }}>
                4.5<span style={{ fontSize: "3vw", marginLeft: "0.2vw" }}>x</span>
              </div>
              <div style={{ height: "1px", width: "100%", backgroundColor: "rgba(196, 162, 101, 0.3)" }} />
              <div style={{ 
                fontFamily: "'Inter', sans-serif", 
                fontSize: "1vw", 
                color: "#F5EDE0", 
                textAlign: "center",
                fontWeight: 300,
                lineHeight: 1.6
              }}>
                Increase in direct premium bookings and loyalty signups year-over-year.
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            color: "#E8D5B8",
            opacity: 0.6,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
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

### Slide 4 (`slide-pages/HospitalityResortPage4.tsx`)

```tsx
export function HospitalityResortPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#111",
      }}
    >
      <img
        src="/__mockup/photos/resort-pool.png"
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
          background: "linear-gradient(0deg, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.7) 50%, rgba(17,17,17,0.4) 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          padding: "8vh 8vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#C4A265",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "4vh" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "6vw",
              color: "#E8D5B8",
              margin: 0,
              lineHeight: 1.1,
              fontWeight: 400,
            }}
          >
            Awaits Your Arrival
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: "1.4vw",
              color: "#F5EDE0",
              margin: 0,
              maxWidth: "40vw",
              lineHeight: 1.6,
            }}
          >
            Join us in redefining the future of luxury hospitality.
            Let us design your next unforgettable experience.
          </p>
          <div
            style={{
              marginTop: "4vh",
              border: "1px solid #C4A265",
              padding: "2vh 4vw",
              color: "#C4A265",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.9vw",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Contact Our Team
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.9vw",
            color: "#E8D5B8",
            opacity: 0.6,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          <div>acme.co</div>
          <div>04</div>
        </div>
      </div>
    </div>
  );
}
```
