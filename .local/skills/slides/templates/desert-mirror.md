# Desert Mirror

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "DesertMirror" template features a serene and modern aesthetic, characterized by a soft desert-inspired color palette. The background color is a solid #D4C4A8, complemented by a background image located at "/__mockup/photos/desert-mirror.png" that covers the entire viewport. Text elements utilize a combination of colors: the main title is in #FFFFFF, while accents and labels are in #D4C4A8. The font families used include 'Inter' for general text and 'Space Grotesk' for the main title and footer, creating a clean and contemporary look. Key layout elements include a frosted horizontal band with a slight blur effect positioned at 36vh, containing centered text elements and a footer that aligns at the bottom of the slide. The overall aesthetic feel is tranquil and modern.

## Source Code

**Component:** `DesertMirror`

### Slide 1 — Title (`slide-styles/DesertMirror.tsx`)

```tsx
export function DesertMirror() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#D4C4A8", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/desert-mirror.png" 
        alt="Desert Mirror Installation" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0
        }} 
      />

      {/* Frosted Horizontal Band */}
      <div style={{
        position: "absolute",
        top: "36vh",
        left: 0,
        width: "100vw",
        height: "28vh",
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(1.5vw)",
        WebkitBackdropFilter: "blur(1.5vw)",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 10vw",
        boxSizing: "border-box"
      }}>
        
        {/* Top Label */}
        <span style={{ 
          color: "#D4C4A8", 
          fontSize: "0.9vw", 
          letterSpacing: "0.3vw", 
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          textTransform: "uppercase",
          marginBottom: "1vh"
        }}>
          INFINITE REFLECTIONS
        </span>

        {/* Main Title */}
        <h1 style={{ 
          fontFamily: "'Space Grotesk', sans-serif", 
          fontSize: "4.5vw", 
          color: "#FFFFFF", 
          margin: 0,
          lineHeight: 1,
          fontWeight: 500,
          letterSpacing: "0.05em",
          textAlign: "center",
          marginBottom: "1vh"
        }}>
          Example Deck
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.2vw",
          color: "#FFFFFF",
          opacity: 0.9,
          margin: 0,
          lineHeight: 1.5,
          fontWeight: 300,
          textAlign: "center",
          maxWidth: "60vw"
        }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        {/* Separator */}
        <span style={{
          color: "#D4C4A8",
          fontSize: "1vw",
          margin: "1vh 0",
          fontWeight: 300
        }}>
          —
        </span>

        {/* Footer */}
        <div style={{
          position: "absolute",
          bottom: "1vh",
          width: "100%",
          display: "flex",
          justifyContent: "center"
        }}>
          <span style={{ 
            color: "#D4C4A8", 
            fontFamily: "'Space Grotesk', sans-serif", 
            fontSize: "0.8vw",
            letterSpacing: "0.1vw",
            textTransform: "lowercase"
          }}>
            acme.co
          </span>
        </div>

      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/DesertMirrorPage2.tsx`)

```tsx
export function DesertMirrorPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#D4C4A8", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/desert-mirror.png" 
        alt="Desert Mirror Installation" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0
        }} 
      />

      {/* Frosted Content Area */}
      <div style={{
        position: "absolute",
        top: "10vh",
        left: "10vw",
        width: "80vw",
        height: "80vh",
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(1.5vw)",
        WebkitBackdropFilter: "blur(1.5vw)",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        padding: "8vw 8vw",
        boxSizing: "border-box"
      }}>
        
        {/* Top Label */}
        <span style={{ 
          color: "#D4C4A8", 
          fontSize: "0.9vw", 
          letterSpacing: "0.3vw", 
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          textTransform: "uppercase",
          marginBottom: "2vh"
        }}>
          THE MIRAGE EFFECT
        </span>

        <div style={{ display: "flex", width: "100%", gap: "5vw" }}>
          {/* Left Column */}
          <div style={{ flex: 1 }}>
            <h2 style={{ 
              fontFamily: "'Space Grotesk', sans-serif", 
              fontSize: "3.5vw", 
              color: "#FFFFFF", 
              margin: 0,
              lineHeight: 1.1,
              fontWeight: 500,
              letterSpacing: "0.02em",
              marginBottom: "4vh"
            }}>
              Reflecting the Horizon
            </h2>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              color: "#FFFFFF",
              opacity: 0.9,
              margin: 0,
              lineHeight: 1.6,
              fontWeight: 300,
              marginBottom: "3vh"
            }}>
              By utilizing expansive, highly reflective surfaces in arid environments, we create an illusion of infinite space that challenges perception. The boundary between earth and sky begins to dissolve completely.
            </p>

            <ul style={{
              margin: 0,
              padding: 0,
              listStyle: "none",
              display: "flex",
              flexDirection: "column",
              gap: "2vh"
            }}>
              {["Seamless Integration", "Thermal Regulation", "Optical Expansion"].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
                  <div style={{ width: "0.4vw", height: "0.4vw", backgroundColor: "#D4C4A8", borderRadius: "50%" }} />
                  <span style={{ color: "#FFFFFF", fontSize: "1.1vw", fontWeight: 300 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Secondary frosted box */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{
              width: "100%",
              height: "40vh",
              background: "rgba(0,0,0,0.2)",
              border: "1px solid rgba(212,196,168,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "3vw",
              boxSizing: "border-box"
            }}>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.8vw",
                color: "#D4C4A8",
                lineHeight: 1.4,
                textAlign: "center",
                margin: 0,
                fontWeight: 300,
                fontStyle: "italic"
              }}>
                "The desert is no longer an empty void, but a canvas of continuous reflection."
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          position: "absolute",
          bottom: "4vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <span style={{ 
            color: "#D4C4A8", 
            fontFamily: "'Space Grotesk', sans-serif", 
            fontSize: "0.8vw",
            letterSpacing: "0.1vw"
          }}>
            acme.co
          </span>
          <span style={{ 
            color: "#D4C4A8", 
            fontFamily: "'Space Grotesk', sans-serif", 
            fontSize: "0.8vw",
            letterSpacing: "0.1vw"
          }}>
            02
          </span>
        </div>

      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/DesertMirrorPage3.tsx`)

```tsx
export function DesertMirrorPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#D4C4A8", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/desert-mirror.png" 
        alt="Desert Mirror Installation" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0
        }} 
      />

      {/* Title Band */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "20vh",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 8vw",
        boxSizing: "border-box"
      }}>
        <span style={{ 
          color: "#D4C4A8", 
          fontSize: "0.9vw", 
          letterSpacing: "0.3vw", 
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          textTransform: "uppercase",
          marginBottom: "1vh"
        }}>
          ENVIRONMENTAL IMPACT
        </span>
        <h2 style={{ 
          fontFamily: "'Space Grotesk', sans-serif", 
          fontSize: "2.5vw", 
          color: "#FFFFFF", 
          margin: 0,
          fontWeight: 500,
          letterSpacing: "0.02em"
        }}>
          Key Metrics & Data
        </h2>
      </div>

      {/* Data Cards Container */}
      <div style={{
        position: "absolute",
        top: "25vh",
        left: "8vw",
        width: "84vw",
        height: "60vh",
        zIndex: 1,
        display: "flex",
        gap: "2vw"
      }}>
        
        {[
          { metric: "84%", label: "Albedo Effect", desc: "Increase in solar radiation reflected back into the atmosphere compared to standard desert sand." },
          { metric: "-12°C", label: "Surface Cooling", desc: "Reduction in localized ground temperature underneath the installation structures." },
          { metric: "1.2M", label: "Sq Meters", desc: "Total area covered by the mirage array in the inaugural test site deployment." }
        ].map((item, i) => (
          <div key={i} style={{
            flex: 1,
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(2vw)",
            WebkitBackdropFilter: "blur(2vw)",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            borderLeft: "1px solid rgba(255,255,255,0.1)",
            padding: "4vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}>
            <div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "5vw",
                color: "#FFFFFF",
                margin: "0 0 2vh 0",
                lineHeight: 1,
                fontWeight: 300
              }}>
                {item.metric}
              </h3>
              <div style={{ width: "4vw", height: "2px", backgroundColor: "#D4C4A8", marginBottom: "3vh" }} />
              <h4 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.5vw",
                color: "#D4C4A8",
                margin: "0 0 2vh 0",
                fontWeight: 400,
                letterSpacing: "0.05em",
                textTransform: "uppercase"
              }}>
                {item.label}
              </h4>
            </div>
            
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1vw",
              color: "#FFFFFF",
              opacity: 0.8,
              margin: 0,
              lineHeight: 1.5,
              fontWeight: 300
            }}>
              {item.desc}
            </p>
          </div>
        ))}
        
      </div>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "4vh",
        left: "8vw",
        right: "8vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1
      }}>
        <span style={{ 
          color: "#D4C4A8", 
          fontFamily: "'Space Grotesk', sans-serif", 
          fontSize: "0.8vw",
          letterSpacing: "0.1vw"
        }}>
          acme.co
        </span>
        <span style={{ 
          color: "#D4C4A8", 
          fontFamily: "'Space Grotesk', sans-serif", 
          fontSize: "0.8vw",
          letterSpacing: "0.1vw"
        }}>
          03
        </span>
      </div>

    </div>
  );
}
```

### Slide 4 (`slide-pages/DesertMirrorPage4.tsx`)

```tsx
export function DesertMirrorPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#D4C4A8", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/desert-mirror.png" 
        alt="Desert Mirror Installation" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.7)"
        }} 
      />

      {/* Frosted Vertical Block - Left aligned to contrast with Title slide */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "45vw",
        height: "100vh",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(2vw)",
        WebkitBackdropFilter: "blur(2vw)",
        borderLeft: "1px solid rgba(255,255,255,0.15)",
        zIndex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 8vw",
        boxSizing: "border-box"
      }}>
        
        <span style={{ 
          color: "#D4C4A8", 
          fontSize: "0.9vw", 
          letterSpacing: "0.3vw", 
          fontFamily: "'Inter', sans-serif",
          fontWeight: 400,
          textTransform: "uppercase",
          marginBottom: "2vh"
        }}>
          JOIN THE EXPEDITION
        </span>

        <h2 style={{ 
          fontFamily: "'Space Grotesk', sans-serif", 
          fontSize: "4vw", 
          color: "#FFFFFF", 
          margin: "0 0 4vh 0",
          lineHeight: 1.1,
          fontWeight: 500,
          letterSpacing: "0.02em"
        }}>
          See Beyond<br />The Sand.
        </h2>

        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "3vh",
          marginBottom: "6vh"
        }}>
          <div>
            <span style={{ display: "block", color: "#D4C4A8", fontSize: "0.8vw", letterSpacing: "0.1vw", textTransform: "uppercase", marginBottom: "0.5vh" }}>Contact</span>
            <span style={{ display: "block", color: "#FFFFFF", fontSize: "1.2vw", fontWeight: 300 }}>hello@acme.co</span>
          </div>
          <div>
            <span style={{ display: "block", color: "#D4C4A8", fontSize: "0.8vw", letterSpacing: "0.1vw", textTransform: "uppercase", marginBottom: "0.5vh" }}>Office</span>
            <span style={{ display: "block", color: "#FFFFFF", fontSize: "1.2vw", fontWeight: 300 }}>100 Mirage Way<br/>Los Angeles, CA</span>
          </div>
        </div>

        {/* CTA Button */}
        <div style={{
          padding: "1.5vw 3vw",
          border: "1px solid #D4C4A8",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "flex-start",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}>
          <span style={{ 
            color: "#D4C4A8", 
            fontFamily: "'Space Grotesk', sans-serif", 
            fontSize: "1vw", 
            letterSpacing: "0.15vw", 
            textTransform: "uppercase" 
          }}>
            Explore the site
          </span>
        </div>

      </div>

      {/* Footer (Left side) */}
      <div style={{
        position: "absolute",
        bottom: "4vh",
        left: "8vw",
        zIndex: 1
      }}>
        <span style={{ 
          color: "#D4C4A8", 
          fontFamily: "'Space Grotesk', sans-serif", 
          fontSize: "0.8vw",
          letterSpacing: "0.1vw"
        }}>
          04
        </span>
      </div>

    </div>
  );
}
```
