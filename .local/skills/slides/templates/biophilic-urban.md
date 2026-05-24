# Biophilic Urban

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "BiophilicUrban" template embodies a modern, nature-inspired aesthetic, featuring a vertical garden background image sourced from "/__mockup/photos/vertical-garden.png". The primary background color is black (#000), while the frosted glass panel uses a semi-transparent white background (rgba(255, 255, 255, 0.8)). Text colors include a muted green (#6B8E6B) for accents and a dark green (#1A3A2A) for main text. The font families used are 'Inter' for general text and 'DM Sans' for headings, creating a clean and contemporary look. Key layout elements include a frosted glass panel with rounded corners positioned at the bottom of the screen, and a structured arrangement of headers, subtitles, and footers. The overall aesthetic feel is "modern organic".

## Source Code

**Component:** `BiophilicUrban`

### Slide 1 — Title (`slide-styles/BiophilicUrban.tsx`)

```tsx
export function BiophilicUrban() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/vertical-garden.png" 
        alt="Vertical Garden Background" 
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

      {/* Frosted Glass Panel */}
      <div style={{
        position: "absolute",
        bottom: "5vh",
        left: "15vw",
        width: "70vw",
        height: "35vh",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(1.5vw)",
        WebkitBackdropFilter: "blur(1.5vw)",
        zIndex: 1,
        borderRadius: "1vw",
        padding: "4vh 4vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 2vw 4vw rgba(0, 0, 0, 0.1)"
      }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <span style={{ fontSize: "1vw" }}>🌱</span>
            <span style={{ 
              color: "#6B8E6B", 
              fontSize: "0.9vw", 
              letterSpacing: "0.15vw", 
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif"
            }}>
              LIVING ARCHITECTURE
            </span>
          </div>
          
          <div style={{ 
            border: "0.1vw solid #6B8E6B", 
            borderRadius: "2vw", 
            padding: "0.5vh 1vw",
            color: "#1A3A2A",
            fontSize: "0.8vw",
            fontWeight: 500
          }}>
            Carbon Neutral by 2030
          </div>
        </div>

        {/* Main Title Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <h1 style={{ 
            fontFamily: "'DM Sans', sans-serif", 
            fontSize: "4.5vw", 
            color: "#1A3A2A", 
            margin: 0,
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: "-0.1vw"
          }}>
            Example Deck
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.3vw",
            color: "#1A3A2A",
            opacity: 0.8,
            margin: 0,
            lineHeight: 1.4,
            fontWeight: 400,
            maxWidth: "50vw"
          }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Footer Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ width: "100%", height: "0.1vh", backgroundColor: "#6B8E6B", opacity: 0.3 }} />
          <div style={{ 
            color: "#1A3A2A", 
            fontFamily: "'DM Sans', sans-serif", 
            fontSize: "1vw",
            fontWeight: 600
          }}>
            acme.co
          </div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BiophilicUrbanPage2.tsx`)

```tsx
export function BiophilicUrbanPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/vertical-garden.png" 
        alt="Vertical Garden Background" 
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

      {/* Frosted Glass Panel */}
      <div style={{
        position: "absolute",
        top: "10vh",
        left: "10vw",
        width: "80vw",
        height: "80vh",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(1.5vw)",
        WebkitBackdropFilter: "blur(1.5vw)",
        zIndex: 1,
        borderRadius: "1vw",
        padding: "5vh 5vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 2vw 4vw rgba(0, 0, 0, 0.1)"
      }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <span style={{ fontSize: "1vw" }}>🌱</span>
            <span style={{ 
              color: "#6B8E6B", 
              fontSize: "0.9vw", 
              letterSpacing: "0.15vw", 
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif"
            }}>
              SUSTAINABLE APPROACH
            </span>
          </div>
          
          <div style={{ 
            border: "0.1vw solid #6B8E6B", 
            borderRadius: "2vw", 
            padding: "0.5vh 1vw",
            color: "#1A3A2A",
            fontSize: "0.8vw",
            fontWeight: 500
          }}>
            Core Principles
          </div>
        </div>

        {/* Main Content Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh", flex: 1, marginTop: "4vh" }}>
          <h2 style={{ 
            fontFamily: "'DM Sans', sans-serif", 
            fontSize: "3.5vw", 
            color: "#1A3A2A", 
            margin: 0,
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: "-0.05vw"
          }}>
            Integrating Nature into Modern Infrastructure
          </h2>
          
          <div style={{ display: "flex", gap: "4vw", marginTop: "2vh" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.5vw", color: "#1A3A2A", margin: 0, fontWeight: 600 }}>
                Ecological Synergy
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1vw",
                color: "#1A3A2A",
                opacity: 0.8,
                margin: 0,
                lineHeight: 1.6,
                fontWeight: 400
              }}>
                By blending organic elements with structural design, we create spaces that breathe. Our approach prioritizes native plant species and passive cooling techniques to reduce energy consumption while improving air quality for all inhabitants.
              </p>
            </div>
            
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
              <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.5vw", color: "#1A3A2A", margin: 0, fontWeight: 600 }}>
                Community Well-being
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1vw",
                color: "#1A3A2A",
                opacity: 0.8,
                margin: 0,
                lineHeight: 1.6,
                fontWeight: 400
              }}>
                Access to green spaces has been proven to lower stress, enhance cognitive function, and foster social connection. We design environments that act as natural sanctuaries within the urban grid, promoting health and vitality.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh", marginTop: "4vh" }}>
          <div style={{ width: "100%", height: "0.1vh", backgroundColor: "#6B8E6B", opacity: 0.3 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ 
              color: "#1A3A2A", 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: "1vw",
              fontWeight: 600
            }}>
              acme.co
            </div>
            <div style={{ 
              color: "#6B8E6B", 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: "1vw",
              fontWeight: 600
            }}>
              02
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/BiophilicUrbanPage3.tsx`)

```tsx
export function BiophilicUrbanPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/vertical-garden.png" 
        alt="Vertical Garden Background" 
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

      {/* Frosted Glass Panel */}
      <div style={{
        position: "absolute",
        top: "10vh",
        left: "10vw",
        width: "80vw",
        height: "80vh",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(1.5vw)",
        WebkitBackdropFilter: "blur(1.5vw)",
        zIndex: 1,
        borderRadius: "1vw",
        padding: "5vh 5vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 2vw 4vw rgba(0, 0, 0, 0.1)"
      }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <span style={{ fontSize: "1vw" }}>🌱</span>
            <span style={{ 
              color: "#6B8E6B", 
              fontSize: "0.9vw", 
              letterSpacing: "0.15vw", 
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif"
            }}>
              ENVIRONMENTAL IMPACT
            </span>
          </div>
          
          <div style={{ 
            border: "0.1vw solid #6B8E6B", 
            borderRadius: "2vw", 
            padding: "0.5vh 1vw",
            color: "#1A3A2A",
            fontSize: "0.8vw",
            fontWeight: 500
          }}>
            Metrics & Data
          </div>
        </div>

        {/* Main Content Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh", flex: 1, marginTop: "4vh" }}>
          <h2 style={{ 
            fontFamily: "'DM Sans', sans-serif", 
            fontSize: "3.5vw", 
            color: "#1A3A2A", 
            margin: 0,
            lineHeight: 1.1,
            fontWeight: 500,
            letterSpacing: "-0.05vw"
          }}>
            Measurable Ecosystem Benefits
          </h2>
          
          <div style={{ display: "flex", gap: "2vw", marginTop: "4vh", height: "25vh" }}>
            {/* Stat 1 */}
            <div style={{ 
              flex: 1, 
              backgroundColor: "rgba(107, 142, 107, 0.1)", 
              borderRadius: "0.8vw", 
              padding: "3vh 2vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "0.1vw solid rgba(107, 142, 107, 0.2)"
            }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "4vw", fontWeight: 700, color: "#1A3A2A", lineHeight: 1 }}>
                45%
              </div>
              <div style={{ width: "3vw", height: "0.4vh", backgroundColor: "#6B8E6B", margin: "1.5vh 0" }} />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "#1A3A2A", opacity: 0.8, lineHeight: 1.4 }}>
                Reduction in ambient local temperature during peak summer months.
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{ 
              flex: 1, 
              backgroundColor: "rgba(107, 142, 107, 0.1)", 
              borderRadius: "0.8vw", 
              padding: "3vh 2vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "0.1vw solid rgba(107, 142, 107, 0.2)"
            }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "4vw", fontWeight: 700, color: "#1A3A2A", lineHeight: 1 }}>
                2.5x
              </div>
              <div style={{ width: "3vw", height: "0.4vh", backgroundColor: "#6B8E6B", margin: "1.5vh 0" }} />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "#1A3A2A", opacity: 0.8, lineHeight: 1.4 }}>
                Increase in local biodiversity and native pollinator populations.
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{ 
              flex: 1, 
              backgroundColor: "rgba(107, 142, 107, 0.1)", 
              borderRadius: "0.8vw", 
              padding: "3vh 2vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              border: "0.1vw solid rgba(107, 142, 107, 0.2)"
            }}>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "4vw", fontWeight: 700, color: "#1A3A2A", lineHeight: 1 }}>
                -60%
              </div>
              <div style={{ width: "3vw", height: "0.4vh", backgroundColor: "#6B8E6B", margin: "1.5vh 0" }} />
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "#1A3A2A", opacity: 0.8, lineHeight: 1.4 }}>
                Decrease in stormwater runoff entering municipal sewer systems.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh", marginTop: "4vh" }}>
          <div style={{ width: "100%", height: "0.1vh", backgroundColor: "#6B8E6B", opacity: 0.3 }} />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ 
              color: "#1A3A2A", 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: "1vw",
              fontWeight: 600
            }}>
              acme.co
            </div>
            <div style={{ 
              color: "#6B8E6B", 
              fontFamily: "'DM Sans', sans-serif", 
              fontSize: "1vw",
              fontWeight: 600
            }}>
              03
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/BiophilicUrbanPage4.tsx`)

```tsx
export function BiophilicUrbanPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/vertical-garden.png" 
        alt="Vertical Garden Background" 
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

      {/* Frosted Glass Panel */}
      <div style={{
        position: "absolute",
        top: "20vh",
        left: "20vw",
        width: "60vw",
        height: "60vh",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(2vw)",
        WebkitBackdropFilter: "blur(2vw)",
        zIndex: 1,
        borderRadius: "1vw",
        padding: "6vh 5vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 2vw 4vw rgba(0, 0, 0, 0.15)"
      }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "0.5vw", marginBottom: "2vh" }}>
          <span style={{ fontSize: "1.2vw" }}>🌱</span>
          <span style={{ 
            color: "#6B8E6B", 
            fontSize: "1vw", 
            letterSpacing: "0.2vw", 
            fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            textTransform: "uppercase"
          }}>
            JOIN THE MOVEMENT
          </span>
        </div>

        <h2 style={{ 
          fontFamily: "'DM Sans', sans-serif", 
          fontSize: "4vw", 
          color: "#1A3A2A", 
          margin: "0 0 3vh 0",
          lineHeight: 1.1,
          fontWeight: 500,
          letterSpacing: "-0.05vw"
        }}>
          Let's cultivate a<br/>greener future.
        </h2>
        
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.2vw",
          color: "#1A3A2A",
          opacity: 0.8,
          margin: "0 0 5vh 0",
          lineHeight: 1.5,
          fontWeight: 400,
          maxWidth: "40vw"
        }}>
          Partner with us to transform urban environments into living, breathing ecosystems that sustain both people and the planet.
        </p>

        <div style={{
          backgroundColor: "#1A3A2A",
          color: "white",
          padding: "1.5vh 3vw",
          borderRadius: "3vw",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "1.1vw",
          fontWeight: 500,
          cursor: "pointer",
          boxShadow: "0 1vw 2vw rgba(26, 58, 42, 0.2)",
          transition: "transform 0.2s ease"
        }}>
          Contact Our Team
        </div>

        {/* Simple inline footer for center panel */}
        <div style={{ 
          position: "absolute",
          bottom: "3vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "2vw",
          color: "#1A3A2A", 
          fontFamily: "'DM Sans', sans-serif", 
          fontSize: "0.9vw",
          fontWeight: 600,
          opacity: 0.6
        }}>
          <span>hello@acme.co</span>
          <span>•</span>
          <span>acme.co</span>
          <span>•</span>
          <span>04</span>
        </div>

      </div>
    </div>
  );
}
```
