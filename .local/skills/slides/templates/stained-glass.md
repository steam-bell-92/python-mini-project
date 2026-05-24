# Stained Glass

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "StainedGlass" template features a gothic aesthetic reminiscent of stained glass windows, characterized by its rich colors and intricate shapes. The background color is a deep navy blue, specifically #0F1B2D, with a radial gradient glow in the background using rgba(255,255,255,0.15) and rgba(15,27,45,0). Text and accent colors include white (#FFFFFF), a muted gray (#1A1A2E), and gold shades (#B8860B, #8B1A1A) for decorative elements. The font family used is 'Inter' for general text and 'Playfair Display' for the main title, providing a contrast between modern and classic styles. Key layout elements include a central arch panel with a rose window design, flanked by side panels, and a bottom sill that features decorative diamond shapes. The overall aesthetic feel is "elegant, intricate, gothic."

## Source Code

**Component:** `StainedGlass`

### Slide 1 — Title (`slide-styles/StainedGlass.tsx`)

```tsx
export function StainedGlass() {
  const leading = "0.3vw solid #1A1A2E";
  
  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden", 
      background: "#0F1B2D", 
      fontFamily: "'Inter', sans-serif", 
      position: "relative", 
      color: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {/* Background glow behind the window */}
      <div style={{
        position: "absolute",
        top: "10vh",
        left: "50%",
        transform: "translateX(-50%)",
        width: "60vw",
        height: "80vh",
        background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(15,27,45,0) 70%)",
        pointerEvents: "none"
      }} />

      {/* Main Window Container */}
      <div style={{
        position: "relative",
        width: "80vw",
        height: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end"
      }}>
        
        {/* Left Side Panel */}
        <div style={{
          width: "18vw",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          border: leading,
          borderRight: "none",
          borderTopLeftRadius: "9vw 18vw",
          borderTopRightRadius: "9vw 18vw",
          overflow: "hidden"
        }}>
          {/* Top arch of left panel */}
          <div style={{ flex: 1, background: "#1B4F72", borderBottom: leading }} />
          {/* Middle diamond section left panel */}
          <div style={{ height: "15vh", background: "#B8860B", borderBottom: leading, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(45deg)", width: "10vh", height: "10vh", background: "#8B1A1A", border: leading }} />
          </div>
          <div style={{ flex: 1.5, background: "#145A32" }} />
        </div>

        {/* Center Main Arch Panel */}
        <div style={{
          width: "40vw",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          border: leading,
          borderTopLeftRadius: "20vw 35vw",
          borderTopRightRadius: "20vw 35vw",
          overflow: "hidden",
          position: "relative",
          zIndex: 2,
          boxShadow: "0 0 5vw rgba(0,0,0,0.5)"
        }}>
          {/* Top Rose Window area */}
          <div style={{ 
            height: "30vh", 
            background: "#8B1A1A", 
            borderBottom: leading,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative"
          }}>
            {/* Inner Rose Window */}
            <div style={{
              width: "18vw",
              height: "18vw",
              borderRadius: "50%",
              border: leading,
              background: "#B8860B",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}>
              <div style={{
                width: "10vw",
                height: "10vw",
                borderRadius: "50%",
                border: leading,
                background: "#1B4F72"
              }} />
              {/* Radial lines */}
              <div style={{ position: "absolute", width: "100%", height: "0.3vw", background: "#1A1A2E" }} />
              <div style={{ position: "absolute", width: "100%", height: "0.3vw", background: "#1A1A2E", transform: "rotate(45deg)" }} />
              <div style={{ position: "absolute", width: "100%", height: "0.3vw", background: "#1A1A2E", transform: "rotate(90deg)" }} />
              <div style={{ position: "absolute", width: "100%", height: "0.3vw", background: "#1A1A2E", transform: "rotate(135deg)" }} />
            </div>
          </div>

          {/* Main Title Area */}
          <div style={{ 
            flex: 1, 
            background: "#1B4F72", 
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "4vw",
            textAlign: "center"
          }}>
            <div style={{ 
              fontSize: "1vw", 
              letterSpacing: "0.3em", 
              textTransform: "uppercase", 
              color: "rgba(255,255,255,0.7)",
              marginBottom: "3vh"
            }}>
              acme.co
            </div>
            
            <h1 style={{ 
              fontFamily: "'Playfair Display', serif",
              fontSize: "5vw", 
              fontWeight: 700, 
              lineHeight: 1.1, 
              margin: 0, 
              color: "#FFFFFF",
              textShadow: "0 0.5vw 1vw rgba(0,0,0,0.5)"
            }}>
              Example Deck
            </h1>
            
            <div style={{ 
              width: "10vw", 
              height: "0.3vw", 
              background: "#B8860B", 
              margin: "3vh 0" 
            }} />
            
            <p style={{ 
              fontSize: "1.2vw", 
              color: "rgba(255,255,255,0.85)", 
              lineHeight: 1.6, 
              fontWeight: 400,
              maxWidth: "28vw"
            }}>
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>
        </div>

        {/* Right Side Panel */}
        <div style={{
          width: "18vw",
          height: "60vh",
          display: "flex",
          flexDirection: "column",
          border: leading,
          borderLeft: "none",
          borderTopLeftRadius: "9vw 18vw",
          borderTopRightRadius: "9vw 18vw",
          overflow: "hidden"
        }}>
          {/* Top arch of right panel */}
          <div style={{ flex: 1, background: "#1B4F72", borderBottom: leading }} />
          {/* Middle diamond section right panel */}
          <div style={{ height: "15vh", background: "#B8860B", borderBottom: leading, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(45deg)", width: "10vh", height: "10vh", background: "#8B1A1A", border: leading }} />
          </div>
          <div style={{ flex: 1.5, background: "#145A32" }} />
        </div>

      </div>

      {/* Bottom Sill / Base */}
      <div style={{
        position: "absolute",
        bottom: 0,
        width: "100vw",
        height: "10vh",
        background: "#0A1220",
        borderTop: leading,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10vw",
        boxSizing: "border-box"
      }}>
        <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>CONFIDENTIAL</div>
        <div style={{ display: "flex", gap: "1vw" }}>
          {[1,2,3,4,5].map(i => (
            <div key={i} style={{ width: "2vw", height: "2vw", background: "#145A32", border: leading, transform: "rotate(45deg)" }} />
          ))}
        </div>
        <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>MMXXVI</div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/StainedGlassPage2.tsx`)

```tsx
export function StainedGlassPage2() {
  const leading = "0.3vw solid #1A1A2E";
  
  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden", 
      background: "#0F1B2D", 
      fontFamily: "'Inter', sans-serif", 
      position: "relative", 
      color: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end"
    }}>
      <div style={{
        position: "absolute",
        top: "10vh",
        left: "50%",
        transform: "translateX(-50%)",
        width: "60vw",
        height: "80vh",
        background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(15,27,45,0) 70%)",
        pointerEvents: "none"
      }} />

      <div style={{
        position: "relative",
        width: "80vw",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "2vw"
      }}>
        
        {/* Main Content Panel */}
        <div style={{
          width: "55vw",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          border: leading,
          borderTopLeftRadius: "15vw 15vw",
          borderTopRightRadius: "15vw 15vw",
          overflow: "hidden",
          position: "relative",
          zIndex: 2,
          boxShadow: "0 0 3vw rgba(0,0,0,0.5)",
          background: "#1B4F72"
        }}>
          <div style={{ height: "15vh", background: "#8B1A1A", borderBottom: leading, display: "flex", justifyContent: "center", alignItems: "center" }}>
             <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5vw", margin: 0, textShadow: "0 0.3vw 0.5vw rgba(0,0,0,0.5)" }}>Strategic Vision</h2>
          </div>
          <div style={{ flex: 1, padding: "4vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <p style={{ fontSize: "1.5vw", lineHeight: 1.6, color: "rgba(255,255,255,0.9)", marginBottom: "4vh", fontWeight: 300 }}>
              The future requires a robust foundation. Like the intricate assembly of stained glass, every piece of our methodology serves both a structural and aesthetic purpose.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
              {[
                { title: "Illumination", desc: "Shedding light on previously dark data silos to reveal insights." },
                { title: "Structure", desc: "A framework built to withstand immense pressure and scale." },
                { title: "Harmony", desc: "Integrating disparate systems into a unified, beautiful whole." }
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
                  <div style={{ width: "2vw", height: "2vw", background: "#B8860B", border: leading, transform: "rotate(45deg)", flexShrink: 0, marginTop: "0.5vh" }} />
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", margin: "0 0 0.5vh 0" }}>{item.title}</h3>
                    <p style={{ fontSize: "1.1vw", margin: 0, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Side Panel */}
        <div style={{
          width: "23vw",
          height: "65vh",
          display: "flex",
          flexDirection: "column",
          border: leading,
          borderTopLeftRadius: "11.5vw 15vw",
          borderTopRightRadius: "11.5vw 15vw",
          overflow: "hidden",
          boxShadow: "0 0 2vw rgba(0,0,0,0.4)"
        }}>
          <div style={{ flex: 1, background: "#145A32", borderBottom: leading, display: "flex", justifyContent: "center", alignItems: "center", padding: "3vw", textAlign: "center" }}>
            <p style={{ fontSize: "1.4vw", fontStyle: "italic", fontFamily: "'Playfair Display', serif", lineHeight: 1.4 }}>
              "Craftsmanship is not a luxury, it is a necessity."
            </p>
          </div>
          <div style={{ height: "15vh", background: "#B8860B", borderBottom: leading, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%) rotate(45deg)", width: "10vh", height: "10vh", background: "#8B1A1A", border: leading }} />
          </div>
          <div style={{ flex: 1, background: "#1B4F72" }} />
        </div>

      </div>

      <div style={{
        position: "absolute",
        bottom: 0,
        width: "100vw",
        height: "10vh",
        background: "#0A1220",
        borderTop: leading,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10vw",
        boxSizing: "border-box"
      }}>
        <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>CONFIDENTIAL</div>
        <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>02</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/StainedGlassPage3.tsx`)

```tsx
export function StainedGlassPage3() {
  const leading = "0.3vw solid #1A1A2E";
  
  const data = [
    { value: "45%", label: "Market Growth", color: "#1B4F72", height: "45vh" },
    { value: "72%", label: "Efficiency", color: "#145A32", height: "65vh" },
    { value: "89%", label: "Adoption", color: "#8B1A1A", height: "55vh" }
  ];

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden", 
      background: "#0F1B2D", 
      fontFamily: "'Inter', sans-serif", 
      position: "relative", 
      color: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end"
    }}>
      <div style={{
        position: "absolute",
        top: "10vh",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80vw",
        height: "80vh",
        background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(15,27,45,0) 70%)",
        pointerEvents: "none"
      }} />

      <h2 style={{ 
        fontFamily: "'Playfair Display', serif", 
        fontSize: "4vw", 
        position: "absolute", 
        top: "8vh", 
        margin: 0,
        textShadow: "0 0.5vw 1vw rgba(0,0,0,0.5)"
      }}>
        Metrics & Milestones
      </h2>

      <div style={{
        position: "relative",
        width: "70vw",
        height: "70vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end"
      }}>
        
        {data.map((item, i) => (
          <div key={i} style={{
            width: "20vw",
            height: item.height,
            display: "flex",
            flexDirection: "column",
            border: leading,
            borderBottom: "none",
            borderTopLeftRadius: "10vw 15vw",
            borderTopRightRadius: "10vw 15vw",
            overflow: "hidden",
            boxShadow: "0 0 3vw rgba(0,0,0,0.5)"
          }}>
            <div style={{ flex: 1, background: item.color, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", borderBottom: leading }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "4.5vw", fontWeight: 700, textShadow: "0 0.3vw 0.5vw rgba(0,0,0,0.4)" }}>
                {item.value}
              </span>
            </div>
            <div style={{ height: "10vh", background: "#B8860B", borderBottom: leading, display: "flex", justifyContent: "center", alignItems: "center" }}>
               <span style={{ fontSize: "1.2vw", fontWeight: 600, color: "#1A1A2E", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                 {item.label}
               </span>
            </div>
            <div style={{ height: "15vh", background: "#0A1220", display: "flex", justifyContent: "center", alignItems: "center" }}>
               <div style={{ width: "6vw", height: "6vw", border: leading, transform: "rotate(45deg)", background: item.color }} />
            </div>
          </div>
        ))}
      </div>

      <div style={{
        position: "absolute",
        bottom: 0,
        width: "100vw",
        height: "10vh",
        background: "#0A1220",
        borderTop: leading,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10vw",
        boxSizing: "border-box",
        zIndex: 10
      }}>
        <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>CONFIDENTIAL</div>
        <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>03</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/StainedGlassPage4.tsx`)

```tsx
export function StainedGlassPage4() {
  const leading = "0.3vw solid #1A1A2E";
  
  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden", 
      background: "#0F1B2D", 
      fontFamily: "'Inter', sans-serif", 
      position: "relative", 
      color: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <div style={{
        position: "absolute",
        top: "10vh",
        left: "50%",
        transform: "translateX(-50%)",
        width: "80vw",
        height: "80vh",
        background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(15,27,45,0) 70%)",
        pointerEvents: "none"
      }} />

      <div style={{
        width: "70vh",
        height: "70vh",
        borderRadius: "50%",
        border: leading,
        background: "#1B4F72",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        boxShadow: "0 0 5vw rgba(0,0,0,0.8)",
        overflow: "hidden"
      }}>
        {/* Concentric circles and lines for the rose window effect */}
        <div style={{ position: "absolute", width: "100%", height: "100%", border: leading, borderRadius: "50%", boxSizing: "border-box" }} />
        <div style={{ position: "absolute", width: "80%", height: "80%", border: leading, borderRadius: "50%", boxSizing: "border-box", background: "#8B1A1A" }} />
        <div style={{ position: "absolute", width: "60%", height: "60%", border: leading, borderRadius: "50%", boxSizing: "border-box", background: "#B8860B" }} />
        
        <div style={{ position: "absolute", width: "100%", height: "0.3vw", background: "#1A1A2E" }} />
        <div style={{ position: "absolute", width: "100%", height: "0.3vw", background: "#1A1A2E", transform: "rotate(45deg)" }} />
        <div style={{ position: "absolute", width: "100%", height: "0.3vw", background: "#1A1A2E", transform: "rotate(90deg)" }} />
        <div style={{ position: "absolute", width: "100%", height: "0.3vw", background: "#1A1A2E", transform: "rotate(135deg)" }} />
        
        {/* Center content circle */}
        <div style={{ 
          position: "absolute",
          width: "45%", 
          height: "45%", 
          borderRadius: "50%",
          background: "#0A1220",
          border: leading,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
          padding: "2vw",
          textAlign: "center",
          boxShadow: "0 0 2vw rgba(0,0,0,0.5)"
        }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5vw", margin: "0 0 2vh 0", lineHeight: 1 }}>
            Join Us
          </h2>
          <p style={{ fontSize: "1.2vw", color: "rgba(255,255,255,0.7)", marginBottom: "3vh", maxWidth: "20vw" }}>
            Let's build something enduring together.
          </p>
          <div style={{ 
            padding: "1vw 2vw", 
            background: "#145A32", 
            border: leading, 
            fontSize: "1vw", 
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }}>
            Get in Touch
          </div>
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: 0,
        width: "100vw",
        height: "10vh",
        background: "#0A1220",
        borderTop: leading,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 10vw",
        boxSizing: "border-box",
        zIndex: 20
      }}>
        <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>CONFIDENTIAL</div>
        <div style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>04</div>
      </div>
    </div>
  );
}
```
