# Risograph

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "Risograph" template features a playful and artistic aesthetic, reminiscent of traditional printmaking techniques. The background color is a soft beige (#f5f0e6), complemented by various shapes in muted tones, including a large yellow shape (#DAC070) and a dusty pink shape (#E8A0BF), both with 85% opacity. The text color is a deep teal (#1a3636), while accent colors include a cyan blue (#5B8FB9) and pink (#E8A0BF) for the main title, which is rendered in a bold, sans-serif font ('DM Sans') for a modern look. Key layout elements include overlapping circular and rounded shapes, a paper texture overlay, and a halftone dot pattern, creating a layered visual effect. The overall aesthetic feel is vibrant and eclectic.

## Source Code

**Component:** `Risograph`

### Slide 1 — Title (`slide-styles/Risograph.tsx`)

```tsx
export function Risograph() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#f5f0e6",
      fontFamily: "'DM Sans', sans-serif",
      color: "#1a3636",
    }}>
      {/* Paper texture overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.4,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        mixBlendMode: "multiply",
        pointerEvents: "none",
        zIndex: 10,
      }} />

      {/* Halftone dot pattern background element */}
      <div style={{
        position: "absolute",
        top: "-10vh",
        right: "-10vw",
        width: "70vw",
        height: "70vw",
        borderRadius: "50%",
        opacity: 0.15,
        backgroundImage: "radial-gradient(#1a3636 20%, transparent 20%)",
        backgroundSize: "1vw 1vw",
        backgroundPosition: "0 0",
        mixBlendMode: "multiply",
      }} />

      {/* Large Yellow Shape */}
      <div style={{
        position: "absolute",
        bottom: "-15vh",
        right: "5vw",
        width: "55vw",
        height: "55vh",
        backgroundColor: "#DAC070",
        borderRadius: "40vw 40vw 0 0",
        mixBlendMode: "multiply",
        opacity: 0.85,
      }} />

      {/* Large Dusty Pink Shape (Misregistered) */}
      <div style={{
        position: "absolute",
        bottom: "-14vh",
        right: "4vw",
        width: "55vw",
        height: "55vh",
        backgroundColor: "#E8A0BF",
        borderRadius: "40vw 40vw 0 0",
        mixBlendMode: "multiply",
        opacity: 0.85,
      }} />
      
      {/* Blue Circle */}
      <div style={{
        position: "absolute",
        top: "15vh",
        left: "45vw",
        width: "25vw",
        height: "25vw",
        backgroundColor: "#5B8FB9",
        borderRadius: "50%",
        mixBlendMode: "multiply",
        opacity: 0.85,
      }} />

      {/* Content Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "6vh 6vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 2,
      }}>
        
        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1vw",
          fontSize: "1.2vw",
        }}>
          <div>
            <span style={{ fontWeight: 900 }}>acme.co</span>
            <span style={{ opacity: 0.6, marginLeft: "1vw" }}>by Example Company</span>
          </div>
          <div style={{
            backgroundColor: "#1a3636",
            color: "#f5f0e6",
            padding: "0.5vh 1.5vw",
            borderRadius: "2vw",
            fontSize: "1vw",
          }}>
            2026
          </div>
        </div>

        {/* Main Title (Misregistered effect) */}
        <div style={{
          position: "relative",
          marginTop: "auto",
          marginBottom: "10vh",
        }}>
          {/* Cyan/Blue layer */}
          <h1 style={{
            position: "absolute",
            top: "-0.5vh",
            left: "-0.3vw",
            fontSize: "10vw",
            fontWeight: 900,
            lineHeight: 0.9,
            margin: 0,
            color: "#5B8FB9",
            mixBlendMode: "multiply",
            letterSpacing: "-0.04em",
          }}>
            EXAMPLE<br/>DECK
          </h1>
          
          {/* Pink layer */}
          <h1 style={{
            position: "absolute",
            top: "0.3vh",
            left: "0.4vw",
            fontSize: "10vw",
            fontWeight: 900,
            lineHeight: 0.9,
            margin: 0,
            color: "#E8A0BF",
            mixBlendMode: "multiply",
            letterSpacing: "-0.04em",
          }}>
            EXAMPLE<br/>DECK
          </h1>

          {/* Top/Main Teal layer */}
          <h1 style={{
            position: "relative",
            fontSize: "10vw",
            fontWeight: 900,
            lineHeight: 0.9,
            margin: 0,
            color: "#1a3636",
            mixBlendMode: "multiply",
            letterSpacing: "-0.04em",
          }}>
            EXAMPLE<br/>DECK
          </h1>
        </div>

        {/* Footer */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}>
          <p style={{
            fontSize: "1.8vw",
            fontWeight: 500,
            maxWidth: "40vw",
            lineHeight: 1.3,
            margin: 0,
            backgroundColor: "#f5f0e6",
            padding: "1vh 1vw",
            marginLeft: "-1vw",
            boxShadow: "0.5vw 0.5vw 0 #1a3636",
            border: "0.2vw solid #1a3636"
          }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>

          <div style={{
            fontSize: "1.2vw",
            fontWeight: 700,
            textTransform: "uppercase",
            textAlign: "right",
            lineHeight: 1.4,
            opacity: 0.8
          }}>
            <div>Confidential</div>
            <div>Example Company, Inc.</div>
          </div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/RisographPage2.tsx`)

```tsx
export function RisographPage2() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#F5F0E8",
      fontFamily: "'DM Sans', sans-serif",
      color: "#1B2A4A",
    }}>
      {/* Paper texture overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.4,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        mixBlendMode: "multiply",
        pointerEvents: "none",
        zIndex: 10,
      }} />

      {/* Scattered decorations */}
      <div style={{
        position: "absolute",
        top: "15vh",
        left: "10vw",
        width: "2vw",
        height: "2vw",
        backgroundColor: "#E8573A",
        borderRadius: "50%",
        opacity: 0.6,
        mixBlendMode: "multiply",
      }} />
      <div style={{
        position: "absolute",
        top: "16vh",
        left: "10.3vw",
        width: "2vw",
        height: "2vw",
        border: "0.2vw solid #2D8A8E",
        borderRadius: "50%",
        opacity: 0.8,
        mixBlendMode: "multiply",
      }} />

      <div style={{
        position: "absolute",
        bottom: "25vh",
        right: "12vw",
        width: 0,
        height: 0,
        borderLeft: "1.5vw solid transparent",
        borderRight: "1.5vw solid transparent",
        borderBottom: "2.6vw solid #2D8A8E",
        opacity: 0.7,
        mixBlendMode: "multiply",
        transform: "rotate(15deg)",
      }} />
      <div style={{
        position: "absolute",
        bottom: "24.6vh",
        right: "11.7vw",
        width: 0,
        height: 0,
        borderLeft: "1.5vw solid transparent",
        borderRight: "1.5vw solid transparent",
        borderBottom: "2.6vw solid #E8573A",
        opacity: 0.6,
        mixBlendMode: "multiply",
        transform: "rotate(15deg)",
      }} />

      {/* Large abstract background shape */}
      <div style={{
        position: "absolute",
        top: "-10vh",
        right: "-5vw",
        width: "35vw",
        height: "35vw",
        backgroundColor: "#2D8A8E",
        borderRadius: "50%",
        opacity: 0.15,
        mixBlendMode: "multiply",
      }} />

      {/* Main Content */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "8vh 8vw",
        display: "flex",
        flexDirection: "column",
        zIndex: 2,
      }}>
        
        {/* Header */}
        <div style={{
          position: "relative",
          marginBottom: "12vh",
        }}>
          {/* Header Misregistration */}
          <h2 style={{
            position: "absolute",
            top: "0.2vh",
            left: "0.2vw",
            fontSize: "4.5vw",
            fontWeight: 800,
            color: "#E8573A",
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            mixBlendMode: "multiply",
          }}>
            The Team
          </h2>
          <h2 style={{
            position: "relative",
            fontSize: "4.5vw",
            fontWeight: 800,
            color: "#1B2A4A",
            margin: 0,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            mixBlendMode: "multiply",
          }}>
            The Team
          </h2>
          <div style={{
            width: "15vw",
            height: "0.4vw",
            backgroundColor: "#2D8A8E",
            marginTop: "2vh",
            mixBlendMode: "multiply",
          }} />
          <div style={{
            width: "15vw",
            height: "0.4vw",
            backgroundColor: "#E8573A",
            marginTop: "-0.2vh",
            marginLeft: "0.3vw",
            mixBlendMode: "multiply",
          }} />
        </div>

        {/* Team Grid */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          flex: 1,
        }}>
          {/* Member 1 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20%" }}>
            <div style={{ position: "relative", width: "10vw", height: "10vw", marginBottom: "3vh" }}>
              <div style={{
                position: "absolute",
                top: "0.3vw",
                left: "0.3vw",
                width: "100%",
                height: "100%",
                backgroundColor: "#2D8A8E",
                borderRadius: "50%",
                mixBlendMode: "multiply",
                opacity: 0.8,
              }} />
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#E8573A",
                borderRadius: "50%",
                mixBlendMode: "multiply",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.9,
              }}>
                <span style={{ fontSize: "3.5vw", fontWeight: 800, color: "#F5F0E8", mixBlendMode: "screen" }}>A.K.</span>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ position: "relative" }}>
                <h3 style={{ position: "absolute", top: "0.1vw", left: "0.1vw", margin: 0, fontSize: "1.8vw", fontWeight: 700, color: "#E8573A", mixBlendMode: "multiply" }}>Alex Kim</h3>
                <h3 style={{ position: "relative", margin: 0, fontSize: "1.8vw", fontWeight: 700, color: "#1B2A4A", mixBlendMode: "multiply" }}>Alex Kim</h3>
              </div>
              <p style={{ margin: "0.5vh 0 0 0", fontSize: "1.2vw", fontWeight: 500, color: "#2D8A8E", mixBlendMode: "multiply" }}>CEO</p>
            </div>
          </div>

          {/* Member 2 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20%", marginTop: "4vh" }}>
            <div style={{ position: "relative", width: "10vw", height: "10vw", marginBottom: "3vh" }}>
              <div style={{
                position: "absolute",
                top: "0.3vw",
                left: "-0.2vw",
                width: "100%",
                height: "100%",
                backgroundColor: "#E8573A",
                borderRadius: "50%",
                mixBlendMode: "multiply",
                opacity: 0.8,
              }} />
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#2D8A8E",
                borderRadius: "50%",
                mixBlendMode: "multiply",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.9,
              }}>
                <span style={{ fontSize: "3.5vw", fontWeight: 800, color: "#F5F0E8", mixBlendMode: "screen" }}>S.R.</span>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ position: "relative" }}>
                <h3 style={{ position: "absolute", top: "0.1vw", left: "-0.1vw", margin: 0, fontSize: "1.8vw", fontWeight: 700, color: "#2D8A8E", mixBlendMode: "multiply" }}>Sam Rivera</h3>
                <h3 style={{ position: "relative", margin: 0, fontSize: "1.8vw", fontWeight: 700, color: "#1B2A4A", mixBlendMode: "multiply" }}>Sam Rivera</h3>
              </div>
              <p style={{ margin: "0.5vh 0 0 0", fontSize: "1.2vw", fontWeight: 500, color: "#E8573A", mixBlendMode: "multiply" }}>CTO</p>
            </div>
          </div>

          {/* Member 3 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20%" }}>
            <div style={{ position: "relative", width: "10vw", height: "10vw", marginBottom: "3vh" }}>
              <div style={{
                position: "absolute",
                top: "-0.2vw",
                left: "0.3vw",
                width: "100%",
                height: "100%",
                backgroundColor: "#2D8A8E",
                borderRadius: "50%",
                mixBlendMode: "multiply",
                opacity: 0.8,
              }} />
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#1B2A4A",
                borderRadius: "50%",
                mixBlendMode: "multiply",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.9,
              }}>
                <span style={{ fontSize: "3.5vw", fontWeight: 800, color: "#F5F0E8", mixBlendMode: "screen" }}>J.P.</span>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ position: "relative" }}>
                <h3 style={{ position: "absolute", top: "-0.1vw", left: "0.1vw", margin: 0, fontSize: "1.8vw", fontWeight: 700, color: "#1B2A4A", mixBlendMode: "multiply", opacity: 0.5 }}>Jordan Park</h3>
                <h3 style={{ position: "relative", margin: 0, fontSize: "1.8vw", fontWeight: 700, color: "#1B2A4A", mixBlendMode: "multiply" }}>Jordan Park</h3>
              </div>
              <p style={{ margin: "0.5vh 0 0 0", fontSize: "1.2vw", fontWeight: 500, color: "#2D8A8E", mixBlendMode: "multiply" }}>VP Design</p>
            </div>
          </div>

          {/* Member 4 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "20%", marginTop: "4vh" }}>
            <div style={{ position: "relative", width: "10vw", height: "10vw", marginBottom: "3vh" }}>
              <div style={{
                position: "absolute",
                top: "0.3vw",
                left: "0.2vw",
                width: "100%",
                height: "100%",
                backgroundColor: "#1B2A4A",
                borderRadius: "50%",
                mixBlendMode: "multiply",
                opacity: 0.4,
              }} />
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "#E8573A",
                borderRadius: "50%",
                mixBlendMode: "multiply",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                opacity: 0.9,
              }}>
                <span style={{ fontSize: "3.5vw", fontWeight: 800, color: "#F5F0E8", mixBlendMode: "screen" }}>M.T.</span>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ position: "relative" }}>
                <h3 style={{ position: "absolute", top: "0.1vw", left: "0.1vw", margin: 0, fontSize: "1.8vw", fontWeight: 700, color: "#E8573A", mixBlendMode: "multiply" }}>Morgan Torres</h3>
                <h3 style={{ position: "relative", margin: 0, fontSize: "1.8vw", fontWeight: 700, color: "#1B2A4A", mixBlendMode: "multiply" }}>Morgan Torres</h3>
              </div>
              <p style={{ margin: "0.5vh 0 0 0", fontSize: "1.2vw", fontWeight: 500, color: "#1B2A4A", mixBlendMode: "multiply" }}>VP Sales</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          paddingTop: "2vh",
        }}>
          {/* Border elements */}
          <div style={{
            position: "absolute",
            top: 0,
            left: "20%",
            width: "60%",
            display: "flex",
            justifyContent: "center",
          }}>
            <div style={{ width: "100%", height: "0.2vw", backgroundColor: "#1B2A4A", mixBlendMode: "multiply" }} />
            <div style={{ position: "absolute", top: "0.2vw", left: "0.1vw", width: "100%", height: "0.2vw", backgroundColor: "#E8573A", mixBlendMode: "multiply", opacity: 0.7 }} />
          </div>
          
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "2vh",
          }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1B2A4A", mixBlendMode: "multiply" }}>
              Example Company, Inc. / Confidential
            </div>
            
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", top: "0.1vw", left: "0.1vw", fontSize: "1.5vw", fontWeight: 800, color: "#E8573A", mixBlendMode: "multiply" }}>
                02
              </div>
              <div style={{ position: "relative", fontSize: "1.5vw", fontWeight: 800, color: "#1B2A4A", mixBlendMode: "multiply" }}>
                02
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/RisographPage3.tsx`)

```tsx
export function RisographPage3() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#f5f0e6",
      fontFamily: "'DM Sans', sans-serif",
      color: "#1a3636",
    }}>
      {/* Paper texture overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.4,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        mixBlendMode: "multiply",
        pointerEvents: "none",
        zIndex: 10,
      }} />

      {/* Halftone dot pattern background element */}
      <div style={{
        position: "absolute",
        top: "20vh",
        left: "-5vw",
        width: "40vw",
        height: "40vw",
        borderRadius: "50%",
        opacity: 0.15,
        backgroundImage: "radial-gradient(#1a3636 20%, transparent 20%)",
        backgroundSize: "1vw 1vw",
        backgroundPosition: "0 0",
        mixBlendMode: "multiply",
      }} />

      {/* Decorative Shapes */}
      <div style={{
        position: "absolute",
        top: "-10vh",
        right: "15vw",
        width: "30vw",
        height: "40vh",
        backgroundColor: "#E8A0BF",
        borderRadius: "0 0 20vw 20vw",
        mixBlendMode: "multiply",
        opacity: 0.85,
      }} />

      <div style={{
        position: "absolute",
        bottom: "10vh",
        left: "35vw",
        width: "25vw",
        height: "25vw",
        backgroundColor: "#DAC070",
        borderRadius: "50%",
        mixBlendMode: "multiply",
        opacity: 0.85,
      }} />
      
      {/* Content Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "6vh 6vw",
        display: "flex",
        flexDirection: "column",
        zIndex: 2,
      }}>
        
        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1vw",
          fontSize: "1.2vw",
          marginBottom: "6vh"
        }}>
          <div>
            <span style={{ fontWeight: 900 }}>acme.co</span>
            <span style={{ opacity: 0.6, marginLeft: "1vw" }}>By Example Company</span>
          </div>
          <div style={{
            backgroundColor: "#1a3636",
            color: "#f5f0e6",
            padding: "0.5vh 1.5vw",
            borderRadius: "2vw",
            fontSize: "1vw",
          }}>
            03
          </div>
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{
            position: "relative",
            marginBottom: "6vh",
          }}>
            <h2 style={{
              position: "absolute",
              top: "-0.4vh",
              left: "-0.2vw",
              fontSize: "6vw",
              fontWeight: 900,
              lineHeight: 0.9,
              margin: 0,
              color: "#5B8FB9",
              mixBlendMode: "multiply",
              letterSpacing: "-0.04em",
            }}>
              BY THE<br/>NUMBERS
            </h2>
            <h2 style={{
              position: "absolute",
              top: "0.3vh",
              left: "0.3vw",
              fontSize: "6vw",
              fontWeight: 900,
              lineHeight: 0.9,
              margin: 0,
              color: "#E8A0BF",
              mixBlendMode: "multiply",
              letterSpacing: "-0.04em",
            }}>
              BY THE<br/>NUMBERS
            </h2>
            <h2 style={{
              position: "relative",
              fontSize: "6vw",
              fontWeight: 900,
              lineHeight: 0.9,
              margin: 0,
              color: "#1a3636",
              mixBlendMode: "multiply",
              letterSpacing: "-0.04em",
            }}>
              BY THE<br/>NUMBERS
            </h2>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "4vw",
            marginTop: "auto",
            marginBottom: "8vh"
          }}>
            
            {/* Stat 1 */}
            <div style={{
              backgroundColor: "#f5f0e6",
              padding: "4vh 2vw",
              boxShadow: "0.8vw 0.8vw 0 #5B8FB9",
              border: "0.3vw solid #1a3636",
              position: "relative",
            }}>
              <div style={{
                fontSize: "4.5vw",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 1,
                marginBottom: "2vh",
                color: "#1a3636",
              }}>
                85%
              </div>
              <p style={{
                fontSize: "1.4vw",
                fontWeight: 600,
                margin: 0,
                lineHeight: 1.4,
              }}>
                Increase in total print volume year over year.
              </p>
            </div>

            {/* Stat 2 */}
            <div style={{
              backgroundColor: "#f5f0e6",
              padding: "4vh 2vw",
              boxShadow: "0.8vw 0.8vw 0 #E8A0BF",
              border: "0.3vw solid #1a3636",
              position: "relative",
            }}>
              <div style={{
                fontSize: "4.5vw",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 1,
                marginBottom: "2vh",
                color: "#1a3636",
              }}>
                12M
              </div>
              <p style={{
                fontSize: "1.4vw",
                fontWeight: 600,
                margin: 0,
                lineHeight: 1.4,
              }}>
                Impressions generated across our active campaigns.
              </p>
            </div>

            {/* Stat 3 */}
            <div style={{
              backgroundColor: "#f5f0e6",
              padding: "4vh 2vw",
              boxShadow: "0.8vw 0.8vw 0 #DAC070",
              border: "0.3vw solid #1a3636",
              position: "relative",
            }}>
              <div style={{
                fontSize: "4.5vw",
                fontWeight: 900,
                letterSpacing: "-0.05em",
                lineHeight: 1,
                marginBottom: "2vh",
                color: "#1a3636",
              }}>
                4.2x
              </div>
              <p style={{
                fontSize: "1.4vw",
                fontWeight: 600,
                margin: 0,
                lineHeight: 1.4,
              }}>
                Return on investment for primary brand partners.
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          borderTop: "0.2vw solid #1a3636",
          paddingTop: "2vh"
        }}>
          <p style={{
            fontSize: "1.2vw",
            fontWeight: 700,
            textTransform: "uppercase",
            margin: 0,
          }}>
            DATA COMPILED Q4 2025
          </p>

          <div style={{
            fontSize: "1.2vw",
            fontWeight: 700,
            textTransform: "uppercase",
            textAlign: "right",
            lineHeight: 1.4,
            opacity: 0.8
          }}>
            <div>Confidential</div>
            <div>Example Company, Inc.</div>
          </div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/RisographPage4.tsx`)

```tsx
export function RisographPage4() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#f5f0e6",
      fontFamily: "'DM Sans', sans-serif",
      color: "#1a3636",
    }}>
      {/* Paper texture overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.4,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        mixBlendMode: "multiply",
        pointerEvents: "none",
        zIndex: 10,
      }} />

      {/* Halftone dot pattern background element */}
      <div style={{
        position: "absolute",
        bottom: "0vh",
        right: "0vw",
        width: "60vw",
        height: "60vw",
        borderRadius: "50%",
        opacity: 0.15,
        backgroundImage: "radial-gradient(#1a3636 20%, transparent 20%)",
        backgroundSize: "1vw 1vw",
        backgroundPosition: "0 0",
        mixBlendMode: "multiply",
      }} />

      {/* Large Abstract Background Shapes */}
      <div style={{
        position: "absolute",
        top: "20vh",
        left: "-10vw",
        width: "45vw",
        height: "60vh",
        backgroundColor: "#5B8FB9",
        borderRadius: "0 30vw 30vw 0",
        mixBlendMode: "multiply",
        opacity: 0.85,
        transform: "rotate(-15deg)",
      }} />

      <div style={{
        position: "absolute",
        bottom: "5vh",
        right: "15vw",
        width: "35vw",
        height: "35vw",
        backgroundColor: "#DAC070",
        borderRadius: "5vw",
        mixBlendMode: "multiply",
        opacity: 0.85,
        transform: "rotate(25deg)",
      }} />
      
      <div style={{
        position: "absolute",
        top: "10vh",
        right: "5vw",
        width: "20vw",
        height: "20vw",
        backgroundColor: "#E8A0BF",
        borderRadius: "50%",
        mixBlendMode: "multiply",
        opacity: 0.85,
      }} />

      {/* Content Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        padding: "6vh 6vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        zIndex: 2,
      }}>
        
        {/* Header */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1vw",
          fontSize: "1.2vw",
        }}>
          <div>
            <span style={{ fontWeight: 900 }}>acme.co</span>
            <span style={{ opacity: 0.6, marginLeft: "1vw" }}>By Example Company</span>
          </div>
          <div style={{
            backgroundColor: "#1a3636",
            color: "#f5f0e6",
            padding: "0.5vh 1.5vw",
            borderRadius: "2vw",
            fontSize: "1vw",
          }}>
            04
          </div>
        </div>

        {/* Center Content */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginTop: "10vh",
        }}>
          
          <div style={{
            position: "relative",
            marginBottom: "8vh",
          }}>
            <h1 style={{
              position: "absolute",
              top: "-0.6vh",
              left: "-0.4vw",
              fontSize: "11vw",
              fontWeight: 900,
              lineHeight: 0.9,
              margin: 0,
              color: "#E8A0BF",
              mixBlendMode: "multiply",
              letterSpacing: "-0.04em",
            }}>
              LET'S TALK.
            </h1>
            <h1 style={{
              position: "absolute",
              top: "0.4vh",
              left: "0.5vw",
              fontSize: "11vw",
              fontWeight: 900,
              lineHeight: 0.9,
              margin: 0,
              color: "#DAC070",
              mixBlendMode: "multiply",
              letterSpacing: "-0.04em",
            }}>
              LET'S TALK.
            </h1>
            <h1 style={{
              position: "relative",
              fontSize: "11vw",
              fontWeight: 900,
              lineHeight: 0.9,
              margin: 0,
              color: "#1a3636",
              mixBlendMode: "multiply",
              letterSpacing: "-0.04em",
            }}>
              LET'S TALK.
            </h1>
          </div>

          <div style={{
            backgroundColor: "#f5f0e6",
            padding: "4vh 6vw",
            boxShadow: "1vw 1vw 0 #1a3636",
            border: "0.4vw solid #1a3636",
            display: "inline-block",
            transform: "rotate(-2deg)",
          }}>
            <h3 style={{
              fontSize: "2.5vw",
              fontWeight: 900,
              margin: "0 0 2vh 0",
              textTransform: "uppercase",
              letterSpacing: "-0.02em"
            }}>
              Ready to start?
            </h3>
            <p style={{
              fontSize: "1.5vw",
              fontWeight: 500,
              margin: "0 0 1vh 0",
            }}>
              hello@example.com
            </p>
            <p style={{
              fontSize: "1.5vw",
              fontWeight: 500,
              margin: 0,
            }}>
              +1 (555) 123-4567
            </p>
            <div style={{
              marginTop: "4vh",
              display: "inline-block",
              backgroundColor: "#1a3636",
              color: "#f5f0e6",
              padding: "1.5vh 3vw",
              fontSize: "1.2vw",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1vw",
              borderRadius: "5vw",
              border: "0.2vw solid #1a3636",
              cursor: "pointer"
            }}>
              Visit Website {">"}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "auto"
        }}>
          <div style={{
            width: "5vw",
            height: "5vw",
            backgroundColor: "#1a3636",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#f5f0e6",
            fontSize: "2vw",
            fontWeight: 900,
          }}>
            a.
          </div>

          <div style={{
            fontSize: "1.2vw",
            fontWeight: 700,
            textTransform: "uppercase",
            textAlign: "right",
            lineHeight: 1.4,
            opacity: 0.8
          }}>
            <div>Confidential</div>
            <div>Example Company, Inc.</div>
          </div>
        </div>

      </div>
    </div>
  );
}
```
