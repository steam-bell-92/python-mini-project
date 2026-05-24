# Underwater Dream

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "UnderwaterDream" template presents a serene underwater aesthetic, characterized by deep blues and soft gradients. The background color is a solid #0A1432, complemented by a gradient overlay transitioning from rgba(10,20,50,0.7) to transparent. Text colors include #9AA8C8 for accents and #E8E4F0 for primary text. The font families used are 'Inter' for body text and 'Playfair Display' for titles, creating a modern yet elegant feel. Key layout elements include a full-screen background image of an underwater dancer, positioned absolutely, and a content container that occupies the left half of the screen, featuring a structured arrangement of headers, titles, and footers. The overall aesthetic feel is tranquil and elegant.

## Source Code

**Component:** `UnderwaterDream`

### Slide 1 — Title (`slide-styles/UnderwaterDream.tsx`)

```tsx
export function UnderwaterDream() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#0A1432", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/underwater-dancer.png" 
        alt="Underwater Dancer" 
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

      {/* Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to right, rgba(10,20,50,0.7) 0%, rgba(10,20,50,0.3) 40%, transparent 65%)",
        zIndex: 1
      }} />

      {/* Content Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "50vw",
        height: "100vh",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10vh 8vw"
      }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <span style={{ 
              color: "#9AA8C8", 
              fontSize: "0.8vw", 
              letterSpacing: "0.25em", 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              textTransform: "uppercase"
            }}>
              BENEATH THE SURFACE
            </span>
            <div style={{ 
              width: "1px", 
              height: "8vh", 
              backgroundColor: "#9AA8C8",
              opacity: 0.7
            }} />
          </div>
          <span style={{ 
            color: "#9AA8C8", 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "1.2vw",
            fontStyle: "italic",
            fontWeight: 300
          }}>
            Vol. I
          </span>
        </div>

        {/* Main Title Section */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh", maxWidth: "40vw", paddingBottom: "10vh" }}>
          <h1 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "6vw", 
            color: "#E8E4F0", 
            margin: 0,
            lineHeight: 1.1,
            fontStyle: "italic",
            fontWeight: 400
          }}>
            Example Deck
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.4vw",
            color: "#E8E4F0",
            opacity: 0.8,
            margin: 0,
            lineHeight: 1.6,
            fontWeight: 100
          }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
          <span style={{ 
            color: "#E8E4F0", 
            fontFamily: "'Inter', sans-serif", 
            fontSize: "1vw",
            letterSpacing: "0.1vw",
            fontWeight: 300
          }}>
            acme.co
          </span>
          <span style={{ 
            color: "#9AA8C8", 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "1vw",
            fontStyle: "italic",
            fontWeight: 300
          }}>
            A Meditation
          </span>
        </div>

      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/UnderwaterDreamPage2.tsx`)

```tsx
export function UnderwaterDreamPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#0A1432", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/underwater-dancer.png" 
        alt="Underwater Dancer" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.5
        }} 
      />

      {/* Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom right, rgba(10,20,50,0.85) 0%, rgba(10,20,50,0.7) 60%, rgba(10,20,50,0.4) 100%)",
        zIndex: 1
      }} />

      {/* Content Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        padding: "10vh 8vw"
      }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "8vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2vw" }}>
            <span style={{ 
              color: "#9AA8C8", 
              fontSize: "0.8vw", 
              letterSpacing: "0.25em", 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              textTransform: "uppercase"
            }}>
              BENEATH THE SURFACE
            </span>
            <div style={{ 
              width: "4vw", 
              height: "1px", 
              backgroundColor: "#9AA8C8",
              opacity: 0.7
            }} />
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ display: "flex", gap: "8vw", flex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: "4vw", 
              color: "#E8E4F0", 
              margin: 0,
              lineHeight: 1.1,
              fontStyle: "italic",
              fontWeight: 400
            }}>
              Discovering New Depths
            </h2>
            <div style={{ width: "2vw", height: "2px", backgroundColor: "#9AA8C8" }} />
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              color: "#E8E4F0",
              opacity: 0.8,
              margin: 0,
              lineHeight: 1.8,
              fontWeight: 300
            }}>
              We explore the uncharted territories of design, diving deep into the fluid concepts that shape our reality. By understanding the currents that drive innovation, we create experiences that are both profound and beautiful.
            </p>
          </div>
          
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh", paddingTop: "6vh" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", color: "#E8E4F0", fontStyle: "italic", fontWeight: 400, margin: 0 }}>
                Immersive Experiences
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "#E8E4F0", opacity: 0.7, margin: 0, lineHeight: 1.6, fontWeight: 300 }}>
                Our approach immerses the audience, wrapping them in a cohesive aesthetic that feels natural and inevitable, much like the ocean itself.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", color: "#E8E4F0", fontStyle: "italic", fontWeight: 400, margin: 0 }}>
                Fluid Mechanics
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "#E8E4F0", opacity: 0.7, margin: 0, lineHeight: 1.6, fontWeight: 300 }}>
                Systems are designed to adapt and flow, responding gracefully to the changing tides of technology and user needs.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", marginTop: "auto" }}>
          <span style={{ 
            color: "#E8E4F0", 
            fontFamily: "'Inter', sans-serif", 
            fontSize: "1vw",
            letterSpacing: "0.1vw",
            fontWeight: 300
          }}>
            acme.co
          </span>
          <span style={{ 
            color: "#9AA8C8", 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "1vw",
            fontStyle: "italic",
            fontWeight: 300
          }}>
            02
          </span>
        </div>

      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/UnderwaterDreamPage3.tsx`)

```tsx
export function UnderwaterDreamPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#0A1432", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/underwater-dancer.png" 
        alt="Underwater Dancer" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.3
        }} 
      />

      {/* Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(135deg, rgba(10,20,50,0.9) 0%, rgba(10,20,50,0.6) 100%)",
        zIndex: 1
      }} />

      {/* Content Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        padding: "10vh 8vw"
      }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", marginBottom: "8vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2vw" }}>
            <span style={{ 
              color: "#9AA8C8", 
              fontSize: "0.8vw", 
              letterSpacing: "0.25em", 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              textTransform: "uppercase"
            }}>
              DATA & METRICS
            </span>
            <div style={{ 
              width: "4vw", 
              height: "1px", 
              backgroundColor: "#9AA8C8",
              opacity: 0.7
            }} />
          </div>
        </div>

        <h2 style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: "3.5vw", 
          color: "#E8E4F0", 
          margin: "0 0 8vh 0",
          lineHeight: 1.1,
          fontStyle: "italic",
          fontWeight: 400,
          textAlign: "center"
        }}>
          Currents of Change
        </h2>

        {/* Metrics Grid */}
        <div style={{ display: "flex", justifyContent: "center", gap: "6vw", flex: 1, alignItems: "center" }}>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh", position: "relative" }}>
            <div style={{ 
              width: "16vw", 
              height: "16vw", 
              borderRadius: "50%", 
              border: "1px solid rgba(154, 168, 200, 0.3)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "2px solid #9AA8C8",
                clipPath: "polygon(0 0, 100% 0, 100% 75%, 0 75%)"
              }} />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", color: "#E8E4F0", fontWeight: 400 }}>
                75<span style={{ fontSize: "2vw" }}>%</span>
              </span>
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "#9AA8C8", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 300 }}>
              Market Saturation
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh", position: "relative" }}>
            <div style={{ 
              width: "16vw", 
              height: "16vw", 
              borderRadius: "50%", 
              border: "1px solid rgba(154, 168, 200, 0.3)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "2px solid #E8E4F0",
                clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 40%)"
              }} />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", color: "#E8E4F0", fontWeight: 400 }}>
                40<span style={{ fontSize: "2vw" }}>%</span>
              </span>
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "#9AA8C8", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 300 }}>
              Growth Velocity
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh", position: "relative" }}>
            <div style={{ 
              width: "16vw", 
              height: "16vw", 
              borderRadius: "50%", 
              border: "1px solid rgba(154, 168, 200, 0.3)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative"
            }}>
              <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                border: "2px solid #9AA8C8",
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
              }} />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", color: "#E8E4F0", fontWeight: 400 }}>
                3<span style={{ fontSize: "2vw" }}>x</span>
              </span>
            </div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", color: "#9AA8C8", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 300 }}>
              Return on Depth
            </span>
          </div>

        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", marginTop: "auto" }}>
          <span style={{ 
            color: "#E8E4F0", 
            fontFamily: "'Inter', sans-serif", 
            fontSize: "1vw",
            letterSpacing: "0.1vw",
            fontWeight: 300
          }}>
            acme.co
          </span>
          <span style={{ 
            color: "#9AA8C8", 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "1vw",
            fontStyle: "italic",
            fontWeight: 300
          }}>
            03
          </span>
        </div>

      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/UnderwaterDreamPage4.tsx`)

```tsx
export function UnderwaterDreamPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#0A1432", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/underwater-dancer.png" 
        alt="Underwater Dancer" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.6
        }} 
      />

      {/* Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "radial-gradient(circle at center, rgba(10,20,50,0.4) 0%, rgba(10,20,50,0.9) 100%)",
        zIndex: 1
      }} />

      {/* Content Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "10vh 8vw"
      }}>
        
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: "4vh",
          textAlign: "center",
          maxWidth: "60vw"
        }}>
          <span style={{ 
            color: "#9AA8C8", 
            fontSize: "1vw", 
            letterSpacing: "0.3em", 
            fontFamily: "'Inter', sans-serif",
            fontWeight: 300,
            textTransform: "uppercase"
          }}>
            THE NEXT HORIZON
          </span>
          
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "5.5vw", 
            color: "#E8E4F0", 
            margin: 0,
            lineHeight: 1.1,
            fontStyle: "italic",
            fontWeight: 400
          }}>
            Dive in with us.
          </h2>
          
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.4vw",
            color: "#E8E4F0",
            opacity: 0.8,
            margin: "2vh 0 4vh 0",
            lineHeight: 1.6,
            fontWeight: 100
          }}>
            Ready to explore the depths of your brand's potential? Let's chart a course together.
          </p>

          <div style={{
            padding: "2vh 4vw",
            border: "1px solid rgba(154, 168, 200, 0.5)",
            borderRadius: "100px",
            color: "#E8E4F0",
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.1vw",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontWeight: 300,
            cursor: "pointer",
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(10, 20, 50, 0.3)"
          }}>
            Get in Touch
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          position: "absolute",
          bottom: "10vh",
          left: "8vw",
          right: "8vw",
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "flex-end"
        }}>
          <span style={{ 
            color: "#E8E4F0", 
            fontFamily: "'Inter', sans-serif", 
            fontSize: "1vw",
            letterSpacing: "0.1vw",
            fontWeight: 300
          }}>
            acme.co
          </span>
          <span style={{ 
            color: "#9AA8C8", 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "1vw",
            fontStyle: "italic",
            fontWeight: 300
          }}>
            04
          </span>
        </div>

      </div>
    </div>
  );
}
```
