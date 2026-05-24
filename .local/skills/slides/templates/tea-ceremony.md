# Tea Ceremony

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "TeaCeremony" template embodies a serene and elegant aesthetic, reflecting the tranquility associated with traditional tea ceremonies. The background color is a solid dark gray (#1A1A1A), overlaid with a soft linear gradient that transitions from a light beige (rgba(245,240,230,0.9)) to transparent. Text and accent colors include a rich brown (#3B2F20) for the main text elements. The font families used are 'Inter' for body text and 'Playfair Display' for the main heading, providing a modern yet classic feel. Key layout elements include a full-screen background image of a tea ceremony, positioned absolutely, and a structured layout with flexbox that organizes content into distinct sections, including a circular decorative element. The overall aesthetic feel is "calm elegance."

## Source Code

**Component:** `TeaCeremony`

### Slide 1 — Title (`slide-styles/TeaCeremony.tsx`)

```tsx
export function TeaCeremony() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#1A1A1A" }}>
      <img 
        src="/__mockup/photos/tea-ceremony.png" 
        alt="" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} 
      />
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(245,240,230,0.9) 0%, rgba(245,240,230,0.9) 20%, rgba(245,240,230,0.75) 45%, transparent 55%)"
        }}
      />
      
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "50vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        color: "#3B2F20"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 200, fontSize: "1.2vw", letterSpacing: "0.1vw" }}>
            acme.co
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
             <div style={{
               width: "2.5vw",
               height: "2.5vw",
               borderRadius: "50%",
               border: "0.15vw solid #3B2F20",
               borderTop: "none",
               transform: "rotate(15deg)"
             }} />
             <div style={{
               fontFamily: "'Inter', sans-serif",
               fontWeight: 200,
               fontSize: "0.9vw",
               writingMode: "vertical-rl",
               letterSpacing: "0.5vh",
               opacity: 0.8
             }}>
               一期一会
             </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "4vh", marginBottom: "10vh" }}>
          <h1 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "6vw", 
            fontWeight: 400, 
            margin: 0, 
            lineHeight: 1.1,
            letterSpacing: "-0.02em"
          }}>
            Example Deck
          </h1>
          <p style={{ 
            fontFamily: "'Inter', sans-serif", 
            fontSize: "1.5vw", 
            fontWeight: 100, 
            margin: 0, 
            lineHeight: 1.6,
            maxWidth: "35vw",
            opacity: 0.9
          }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 200, fontSize: "1vw", letterSpacing: "0.05vw", opacity: 0.8 }}>
          2026
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/TeaCeremonyPage2.tsx`)

```tsx
export function TeaCeremonyPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#F5F0E6", color: "#3B2F20" }}>
      {/* Background subtle gradient */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
        pointerEvents: "none"
      }} />

      {/* Header */}
      <div style={{
        position: "absolute",
        top: "8vh",
        left: "8vw",
        right: "8vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 200, fontSize: "1.2vw", letterSpacing: "0.1vw" }}>
          acme.co
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
           <div style={{
             width: "2.5vw",
             height: "2.5vw",
             borderRadius: "50%",
             border: "0.15vw solid #3B2F20",
             borderTop: "none",
             transform: "rotate(15deg)"
           }} />
           <div style={{
             fontFamily: "'Inter', sans-serif",
             fontWeight: 200,
             fontSize: "0.9vw",
             writingMode: "vertical-rl",
             letterSpacing: "0.5vh",
             opacity: 0.8
           }}>
             一期一会
           </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        position: "absolute",
        top: "25vh",
        left: "8vw",
        width: "84vw",
        display: "flex",
        flexDirection: "column",
        gap: "6vh"
      }}>
        <h2 style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: "4.5vw", 
          fontWeight: 400, 
          margin: 0, 
          lineHeight: 1.1,
          letterSpacing: "-0.01em"
        }}>
          The Art of Subtlety
        </h2>
        
        <div style={{ display: "flex", gap: "4vw", marginTop: "4vh" }}>
          {[
            { num: "01", title: "Preparation", desc: "Before the journey begins, the mind must clear. Every tool has its place, every breath a purpose." },
            { num: "02", title: "The Process", desc: "Deliberate actions without rush. The water pours, the leaves bloom, time slows to the present." },
            { num: "03", title: "Reflection", desc: "What remains is the essence. A moment shared, never to be repeated, fading gently." }
          ].map((item, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh", borderTop: "0.1vw solid rgba(59,47,32,0.2)", paddingTop: "3vh" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1vw", fontWeight: 200, opacity: 0.6 }}>{item.num}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2vw" }}>{item.title}</div>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1vw", fontWeight: 200, lineHeight: 1.6, opacity: 0.8, margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "8vh",
        left: "8vw",
        right: "8vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif", 
        fontWeight: 200, 
        fontSize: "1vw", 
        letterSpacing: "0.05vw", 
        opacity: 0.8
      }}>
        <div>2026</div>
        <div>02</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/TeaCeremonyPage3.tsx`)

```tsx
export function TeaCeremonyPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#F5F0E6", color: "#3B2F20" }}>
      {/* Background subtle gradient */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
        pointerEvents: "none"
      }} />

      {/* Header */}
      <div style={{
        position: "absolute",
        top: "8vh",
        left: "8vw",
        right: "8vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start"
      }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 200, fontSize: "1.2vw", letterSpacing: "0.1vw" }}>
          acme.co
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
           <div style={{
             width: "2.5vw",
             height: "2.5vw",
             borderRadius: "50%",
             border: "0.15vw solid #3B2F20",
             borderTop: "none",
             transform: "rotate(15deg)"
           }} />
           <div style={{
             fontFamily: "'Inter', sans-serif",
             fontWeight: 200,
             fontSize: "0.9vw",
             writingMode: "vertical-rl",
             letterSpacing: "0.5vh",
             opacity: 0.8
           }}>
             一期一会
           </div>
        </div>
      </div>

      <div style={{
        position: "absolute",
        top: "25vh",
        left: "8vw",
        width: "84vw",
        display: "flex",
        alignItems: "center"
      }}>
        <div style={{ flex: "0 0 40%", display: "flex", flexDirection: "column", gap: "4vh" }}>
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "4vw", 
            fontWeight: 400, 
            margin: 0, 
            lineHeight: 1.1,
            letterSpacing: "-0.01em"
          }}>
            Measured<br/>Impact
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.2vw", fontWeight: 200, lineHeight: 1.6, opacity: 0.8, margin: 0 }}>
            Precision is quiet. The numbers speak for themselves without needing to shout. Growth is organic, rooted in deeply considered actions.
          </p>
        </div>

        <div style={{ flex: "1", display: "flex", justifyContent: "flex-end", gap: "6vw" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1vh" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "8vw", fontWeight: 400, lineHeight: 1 }}>
              73<span style={{ fontSize: "4vw" }}>%</span>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1vw", fontWeight: 200, opacity: 0.6, borderTop: "0.1vw solid rgba(59,47,32,0.2)", paddingTop: "1vh", width: "100%" }}>
              Clarity Achieved
            </div>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1vh" }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "8vw", fontWeight: 400, lineHeight: 1 }}>
              2.4<span style={{ fontSize: "4vw" }}>x</span>
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.1vw", fontWeight: 200, opacity: 0.6, borderTop: "0.1vw solid rgba(59,47,32,0.2)", paddingTop: "1vh", width: "100%" }}>
              Harmonic Resonance
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "8vh",
        left: "8vw",
        right: "8vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontFamily: "'Inter', sans-serif", 
        fontWeight: 200, 
        fontSize: "1vw", 
        letterSpacing: "0.05vw", 
        opacity: 0.8
      }}>
        <div>2026</div>
        <div>03</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/TeaCeremonyPage4.tsx`)

```tsx
export function TeaCeremonyPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#1A1A1A" }}>
      <img 
        src="/__mockup/photos/tea-ceremony.png" 
        alt="" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} 
      />
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, rgba(245,240,230,1) 0%, rgba(245,240,230,0.85) 100%)"
        }}
      />
      
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#3B2F20"
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh", marginBottom: "6vh" }}>
           <div style={{
             width: "4vw",
             height: "4vw",
             borderRadius: "50%",
             border: "0.15vw solid #3B2F20",
             borderTop: "none",
             transform: "rotate(15deg)"
           }} />
           <div style={{
             fontFamily: "'Inter', sans-serif",
             fontWeight: 200,
             fontSize: "1vw",
             writingMode: "vertical-rl",
             letterSpacing: "0.5vh",
             opacity: 0.8
           }}>
             一期一会
           </div>
        </div>

        <h2 style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: "5vw", 
          fontWeight: 400, 
          margin: 0, 
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
          textAlign: "center"
        }}>
          Begin the Journey
        </h2>
        <p style={{ 
          fontFamily: "'Inter', sans-serif", 
          fontSize: "1.2vw", 
          fontWeight: 200, 
          marginTop: "3vh", 
          marginBottom: "6vh",
          lineHeight: 1.6,
          opacity: 0.8,
          textAlign: "center",
          maxWidth: "40vw"
        }}>
          Reach out to discover how our quiet precision can elevate your vision.
        </p>

        <div style={{
          padding: "1.5vh 3vw",
          border: "0.1vw solid #3B2F20",
          fontFamily: "'Inter', sans-serif",
          fontSize: "1vw",
          fontWeight: 200,
          letterSpacing: "0.1vw",
          textTransform: "uppercase",
          cursor: "pointer",
          transition: "all 0.3s ease"
        }}>
          Contact Us
        </div>
      </div>

      <div style={{
        position: "absolute",
        bottom: "8vh",
        left: "8vw",
        right: "8vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#3B2F20",
        fontFamily: "'Inter', sans-serif", 
        fontWeight: 200, 
        fontSize: "1vw", 
        letterSpacing: "0.05vw", 
        opacity: 0.8
      }}>
        <div>acme.co</div>
        <div>04</div>
      </div>
    </div>
  );
}
```
