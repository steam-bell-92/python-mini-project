# Origami Couture

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "OrigamiCouture" template features a modern and sophisticated aesthetic, reminiscent of high-fashion magazine layouts. The background color is pure white (#FFFFFF), complemented by a full-screen background image of origami fashion located at "/__mockup/photos/origami-fashion.png". Text elements utilize a dark gray color (#0A0A0A) for prominent titles and a lighter gray (#888888) for subtitles, while the watermark is rendered in a very light opacity of the same dark gray. The font families used include 'Inter' for body text and 'Space Grotesk' for titles and decorative elements, creating a clean and contemporary look. Key layout elements include a vertical black bar on the left side, a large rotated title, and a bottom content area that organizes text in a structured manner. The overall aesthetic feel can be described as "elegant, modern, chic."

## Source Code

**Component:** `OrigamiCouture`

### Slide 1 — Title (`slide-styles/OrigamiCouture.tsx`)

```tsx
export function OrigamiCouture() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/origami-fashion.png" 
        alt="Origami Fashion Background" 
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

      {/* Watermark */}
      <div style={{
        position: "absolute",
        top: "30vh",
        left: "10vw",
        fontSize: "18vw",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 800,
        color: "#0A0A0A",
        opacity: 0.04,
        zIndex: 1,
        letterSpacing: "1vw",
        pointerEvents: "none",
        whiteSpace: "nowrap"
      }}>
        COUTURE
      </div>

      {/* Magazine Spine (Black Bar) */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "8vw",
        height: "100vh",
        backgroundColor: "#0A0A0A",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{
          color: "#FFFFFF",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.8vw",
          fontWeight: 400,
          letterSpacing: "0.2vw",
          marginTop: "4vh",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)"
        }}>
          ISSUE 01
        </div>
      </div>

      {/* Rotated Title */}
      <div style={{
        position: "absolute",
        left: "5vw",
        top: "50vh",
        transform: "translateY(-50%) rotate(-90deg)",
        transformOrigin: "left center",
        zIndex: 3,
        whiteSpace: "nowrap"
      }}>
        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "10vw",
          fontWeight: 700,
          color: "#0A0A0A",
          margin: 0,
          lineHeight: 0.8,
          letterSpacing: "-0.5vw"
        }}>
          Example Deck
        </h1>
      </div>

      {/* Bottom Content Area */}
      <div style={{
        position: "absolute",
        bottom: "8vh",
        left: "12vw",
        zIndex: 4,
        display: "flex",
        flexDirection: "column",
        gap: "4vh",
        maxWidth: "35vw"
      }}>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.2vw",
          fontWeight: 400,
          color: "#888888",
          lineHeight: 1.6,
          margin: 0
        }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
        <div style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.9vw",
          fontWeight: 600,
          color: "#0A0A0A",
          letterSpacing: "0.1vw"
        }}>
          acme.co
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/OrigamiCouturePage2.tsx`)

```tsx
export function OrigamiCouturePage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Subtle Element */}
      <div style={{
        position: "absolute",
        top: "10vh",
        right: "-10vw",
        width: "50vw",
        height: "80vh",
        backgroundColor: "#0A0A0A",
        opacity: 0.03,
        transform: "rotate(15deg)",
        zIndex: 0
      }} />

      {/* Watermark */}
      <div style={{
        position: "absolute",
        top: "20vh",
        left: "15vw",
        fontSize: "12vw",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 800,
        color: "#0A0A0A",
        opacity: 0.03,
        zIndex: 1,
        letterSpacing: "0.5vw",
        pointerEvents: "none",
        whiteSpace: "nowrap"
      }}>
        VISION
      </div>

      {/* Magazine Spine (Black Bar) */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "8vw",
        height: "100vh",
        backgroundColor: "#0A0A0A",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{
          color: "#FFFFFF",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.8vw",
          fontWeight: 400,
          letterSpacing: "0.2vw",
          marginTop: "4vh",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)"
        }}>
          ISSUE 01
        </div>
      </div>

      {/* Header */}
      <div style={{
        position: "absolute",
        top: "10vh",
        left: "15vw",
        zIndex: 3,
        maxWidth: "70vw"
      }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "5vw",
          fontWeight: 700,
          color: "#0A0A0A",
          margin: 0,
          lineHeight: 0.9,
          letterSpacing: "-0.2vw"
        }}>
          The New Standard
        </h2>
        <div style={{ width: "6vw", height: "0.4vh", backgroundColor: "#0A0A0A", marginTop: "3vh" }} />
      </div>

      {/* Content Area */}
      <div style={{
        position: "absolute",
        top: "35vh",
        left: "15vw",
        zIndex: 4,
        display: "flex",
        gap: "6vw",
        width: "75vw"
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.8vw",
            fontWeight: 600,
            color: "#0A0A0A",
            marginBottom: "2vh",
            letterSpacing: "-0.05vw"
          }}>
            Defining Excellence
          </h3>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.1vw",
            fontWeight: 400,
            color: "#555555",
            lineHeight: 1.6,
            margin: 0
          }}>
            We believe that true luxury lies in the details. Every interaction, every pixel, and every word is crafted with intention. By stripping away the unnecessary, we reveal the core essence of what matters most to our audience.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "1.8vw",
            fontWeight: 600,
            color: "#0A0A0A",
            marginBottom: "2vh",
            letterSpacing: "-0.05vw"
          }}>
            Uncompromising Quality
          </h3>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.1vw",
            fontWeight: 400,
            color: "#555555",
            lineHeight: 1.6,
            margin: 0
          }}>
            Our approach blends timeless editorial design with modern digital sensibilities. The result is an experience that feels both familiar and entirely new, establishing a profound connection with users across every touchpoint.
          </p>
        </div>
      </div>

      {/* Page Number */}
      <div style={{
        position: "absolute",
        bottom: "6vh",
        right: "6vw",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "1vw",
        fontWeight: 600,
        color: "#0A0A0A",
        letterSpacing: "0.1vw",
        zIndex: 5
      }}>
        02
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/OrigamiCouturePage3.tsx`)

```tsx
export function OrigamiCouturePage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#FFFFFF", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Graphic */}
      <div style={{
        position: "absolute",
        bottom: "-20vh",
        left: "20vw",
        width: "60vw",
        height: "60vw",
        borderRadius: "50%",
        border: "0.2vw solid #F0F0F0",
        zIndex: 0
      }} />

      {/* Magazine Spine (Black Bar) */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "8vw",
        height: "100vh",
        backgroundColor: "#0A0A0A",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{
          color: "#FFFFFF",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.8vw",
          fontWeight: 400,
          letterSpacing: "0.2vw",
          marginTop: "4vh",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)"
        }}>
          ISSUE 01
        </div>
      </div>

      {/* Header */}
      <div style={{
        position: "absolute",
        top: "10vh",
        left: "15vw",
        zIndex: 3
      }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "3vw",
          fontWeight: 700,
          color: "#0A0A0A",
          margin: 0,
          letterSpacing: "-0.1vw"
        }}>
          By the Numbers
        </h2>
      </div>

      {/* Stats Grid */}
      <div style={{
        position: "absolute",
        top: "30vh",
        left: "15vw",
        width: "75vw",
        display: "flex",
        flexWrap: "wrap",
        gap: "6vw",
        zIndex: 4
      }}>
        {/* Stat 1 */}
        <div style={{ width: "30vw", borderTop: "0.2vh solid #0A0A0A", paddingTop: "3vh" }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "8vw",
            fontWeight: 800,
            color: "#0A0A0A",
            lineHeight: 1,
            letterSpacing: "-0.4vw",
            marginBottom: "1vh"
          }}>
            84<span style={{ fontSize: "5vw", color: "#888888" }}>%</span>
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.2vw",
            color: "#555555",
            margin: 0,
            lineHeight: 1.5
          }}>
            Increase in brand engagement across all digital touchpoints over the last quarter.
          </p>
        </div>

        {/* Stat 2 */}
        <div style={{ width: "30vw", borderTop: "0.2vh solid #0A0A0A", paddingTop: "3vh" }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "8vw",
            fontWeight: 800,
            color: "#0A0A0A",
            lineHeight: 1,
            letterSpacing: "-0.4vw",
            marginBottom: "1vh"
          }}>
            2.5<span style={{ fontSize: "5vw", color: "#888888" }}>x</span>
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.2vw",
            color: "#555555",
            margin: 0,
            lineHeight: 1.5
          }}>
            Multiplier effect on user retention when implementing editorial-led design systems.
          </p>
        </div>

        {/* Stat 3 */}
        <div style={{ width: "30vw", borderTop: "0.2vh solid #E0E0E0", paddingTop: "3vh", marginTop: "4vh" }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "5vw",
            fontWeight: 700,
            color: "#0A0A0A",
            lineHeight: 1,
            letterSpacing: "-0.2vw",
            marginBottom: "1vh"
          }}>
            10k+
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1vw",
            color: "#888888",
            margin: 0
          }}>
            Active monthly subscribers
          </p>
        </div>

        {/* Stat 4 */}
        <div style={{ width: "30vw", borderTop: "0.2vh solid #E0E0E0", paddingTop: "3vh", marginTop: "4vh" }}>
          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "5vw",
            fontWeight: 700,
            color: "#0A0A0A",
            lineHeight: 1,
            letterSpacing: "-0.2vw",
            marginBottom: "1vh"
          }}>
            $4.2M
          </div>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1vw",
            color: "#888888",
            margin: 0
          }}>
            Revenue generated in 2024
          </p>
        </div>
      </div>

      {/* Page Number */}
      <div style={{
        position: "absolute",
        bottom: "6vh",
        right: "6vw",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "1vw",
        fontWeight: 600,
        color: "#0A0A0A",
        letterSpacing: "0.1vw",
        zIndex: 5
      }}>
        03
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/OrigamiCouturePage4.tsx`)

```tsx
export function OrigamiCouturePage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#0A0A0A", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Background Graphic */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(45deg, #0A0A0A 0%, #1A1A1A 100%)",
        zIndex: 0
      }} />

      {/* Watermark */}
      <div style={{
        position: "absolute",
        top: "40vh",
        right: "-5vw",
        fontSize: "20vw",
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 800,
        color: "#FFFFFF",
        opacity: 0.02,
        zIndex: 1,
        letterSpacing: "0vw",
        pointerEvents: "none",
        whiteSpace: "nowrap"
      }}>
        FIN
      </div>

      {/* Magazine Spine (White Bar to contrast) */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "8vw",
        height: "100vh",
        backgroundColor: "#FFFFFF",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <div style={{
          color: "#0A0A0A",
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "0.8vw",
          fontWeight: 600,
          letterSpacing: "0.2vw",
          marginTop: "4vh",
          writingMode: "vertical-rl",
          transform: "rotate(180deg)"
        }}>
          ISSUE 01
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        position: "absolute",
        top: "35vh",
        left: "15vw",
        zIndex: 3
      }}>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "8vw",
          fontWeight: 700,
          color: "#FFFFFF",
          margin: 0,
          lineHeight: 0.9,
          letterSpacing: "-0.3vw"
        }}>
          Shape the<br />Future.
        </h2>
        
        <div style={{
          marginTop: "8vh",
          display: "flex",
          gap: "8vw"
        }}>
          <div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8vw",
              fontWeight: 600,
              color: "#888888",
              textTransform: "uppercase",
              letterSpacing: "0.1vw",
              marginBottom: "1vh"
            }}>
              Contact Us
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.5vw",
              color: "#FFFFFF",
              fontWeight: 400
            }}>
              hello@acme.co
            </div>
          </div>
          
          <div>
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8vw",
              fontWeight: 600,
              color: "#888888",
              textTransform: "uppercase",
              letterSpacing: "0.1vw",
              marginBottom: "1vh"
            }}>
              Follow
            </div>
            <div style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.5vw",
              color: "#FFFFFF",
              fontWeight: 400
            }}>
              @acme.couture
            </div>
          </div>
        </div>
      </div>

      {/* Page Number */}
      <div style={{
        position: "absolute",
        bottom: "6vh",
        right: "6vw",
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: "1vw",
        fontWeight: 600,
        color: "#FFFFFF",
        letterSpacing: "0.1vw",
        zIndex: 5
      }}>
        04
      </div>
    </div>
  );
}
```
