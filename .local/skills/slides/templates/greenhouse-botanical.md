# Greenhouse Botanical

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "GreenhouseBotanical" template embodies a natural and serene aesthetic, reminiscent of a botanical garden. The background color is a deep green, specifically #1A3A2A, complemented by a linear gradient overlay featuring rgba(245,240,232,0.7) and rgba(245,240,232,0.95) for a soft, light touch. The text color is also #1A3A2A, while the font families used are 'Inter' for general text and 'Playfair Display' for titles and subtitles, creating a contrast between modern and classic styles. Key layout elements include a full-screen background image of a greenhouse interior, positioned absolutely, with content aligned to the bottom right, featuring decorative elements like a leaf emoji and a subtle border. The overall aesthetic feel can be described as "natural elegance."

## Source Code

**Component:** `GreenhouseBotanical`

### Slide 1 — Title (`slide-styles/GreenhouseBotanical.tsx`)

```tsx
export function GreenhouseBotanical() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#1A3A2A",
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/greenhouse-interior.png" 
        alt="Greenhouse interior" 
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

      {/* Overlay Gradient */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom right, transparent 0%, transparent 40%, rgba(245,240,232,0.7) 60%, rgba(245,240,232,0.95) 100%)",
        zIndex: 1
      }} />

      {/* Content Area */}
      <div style={{
        position: "absolute",
        bottom: "10vh",
        right: "8vw",
        width: "50vw",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        textAlign: "right",
        color: "#1A3A2A"
      }}>
        {/* Label */}
        <div style={{
          fontSize: "1vw",
          letterSpacing: "0.2vw",
          textTransform: "uppercase",
          fontWeight: 500,
          marginBottom: "2vh",
          display: "flex",
          alignItems: "center",
          gap: "0.5vw"
        }}>
          <span>🌿</span> BOTANICAL COLLECTION
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "6vw",
          fontStyle: "italic",
          fontWeight: 400,
          margin: "0 0 3vh 0",
          lineHeight: 1.1
        }}>
          Example Deck
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: "1.8vw",
          fontWeight: 300,
          lineHeight: 1.5,
          margin: "0 0 4vh 0",
          maxWidth: "40vw",
          opacity: 0.9
        }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        {/* Est. Detail */}
        <div style={{
          fontSize: "0.9vw",
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          opacity: 0.7,
          borderTop: "0.1vw solid rgba(26, 58, 42, 0.3)",
          paddingTop: "1.5vh",
          width: "10vw",
          textAlign: "right"
        }}>
          EST. 2026
        </div>
      </div>

      {/* Footer Area */}
      <div style={{
        position: "absolute",
        bottom: "3vh",
        left: "4vw",
        right: "4vw",
        zIndex: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#1A3A2A",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 200,
        fontSize: "1vw",
        letterSpacing: "0.05vw"
      }}>
        <div>acme.co</div>
        <div>Confidential</div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/GreenhouseBotanicalPage2.tsx`)

```tsx
export function GreenhouseBotanicalPage2() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#F5F0E8",
      fontFamily: "'Inter', sans-serif",
      color: "#1A3A2A"
    }}>
      {/* Left Sidebar Image */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "30vw",
        height: "100vh"
      }}>
        <img 
          src="/__mockup/photos/greenhouse-interior.png" 
          alt="Greenhouse interior" 
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }} 
        />
        {/* Dark overlay on image to make it less distracting */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(26, 58, 42, 0.4)"
        }} />
      </div>

      {/* Main Content Area */}
      <div style={{
        position: "absolute",
        top: "15vh",
        left: "38vw",
        width: "52vw",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}>
        {/* Label */}
        <div style={{
          fontSize: "0.9vw",
          letterSpacing: "0.2vw",
          textTransform: "uppercase",
          fontWeight: 500,
          marginBottom: "3vh",
          display: "flex",
          alignItems: "center",
          gap: "0.5vw",
          borderBottom: "0.1vw solid rgba(26, 58, 42, 0.2)",
          paddingBottom: "1vh",
          width: "100%"
        }}>
          <span>🌿</span> STRATEGIC VISION
        </div>

        {/* Title */}
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "4.5vw",
          fontStyle: "italic",
          fontWeight: 400,
          margin: "0 0 4vh 0",
          lineHeight: 1.1
        }}>
          Cultivating Sustainable Growth
        </h2>

        {/* Content Columns */}
        <div style={{
          display: "flex",
          gap: "4vw",
          width: "100%"
        }}>
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: "1.2vw",
              fontWeight: 600,
              marginBottom: "1.5vh",
              letterSpacing: "0.05vw"
            }}>
              Root Systems
            </h3>
            <p style={{
              fontSize: "1vw",
              fontWeight: 300,
              lineHeight: 1.6,
              opacity: 0.8
            }}>
              Establishing a strong foundation requires careful attention to the underlying infrastructure. By nurturing the core components of our ecosystem, we ensure resilience against market fluctuations and environmental shifts.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: "1.2vw",
              fontWeight: 600,
              marginBottom: "1.5vh",
              letterSpacing: "0.05vw"
            }}>
              Canopy Expansion
            </h3>
            <p style={{
              fontSize: "1vw",
              fontWeight: 300,
              lineHeight: 1.6,
              opacity: 0.8
            }}>
              Reaching new heights means extending our reach into untapped markets. We are developing strategic partnerships that act as sunlight, driving photosynthesis across our entire product line and service offerings.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div style={{
          marginTop: "6vh",
          paddingLeft: "2vw",
          borderLeft: "0.2vw solid #1A3A2A"
        }}>
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8vw",
            fontStyle: "italic",
            margin: 0,
            lineHeight: 1.4,
            opacity: 0.9
          }}>
            "The best time to plant a tree was twenty years ago. The second best time is now."
          </p>
        </div>
      </div>

      {/* Footer Area */}
      <div style={{
        position: "absolute",
        bottom: "3vh",
        left: "34vw",
        right: "4vw",
        zIndex: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#1A3A2A",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: "0.9vw",
        letterSpacing: "0.05vw",
        opacity: 0.6
      }}>
        <div>acme.co</div>
        <div>02</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/GreenhouseBotanicalPage3.tsx`)

```tsx
export function GreenhouseBotanicalPage3() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#1A3A2A",
      fontFamily: "'Inter', sans-serif",
      color: "#F5F0E8"
    }}>
      {/* Background Subtle Elements */}
      <div style={{
        position: "absolute",
        top: "-10vh",
        right: "-5vw",
        width: "40vw",
        height: "40vw",
        borderRadius: "50%",
        border: "0.1vw solid rgba(245, 240, 232, 0.1)",
        zIndex: 0
      }} />
      <div style={{
        position: "absolute",
        bottom: "-20vh",
        left: "-10vw",
        width: "60vw",
        height: "60vw",
        borderRadius: "50%",
        border: "0.1vw solid rgba(245, 240, 232, 0.05)",
        zIndex: 0
      }} />

      {/* Content Area */}
      <div style={{
        position: "absolute",
        top: "12vh",
        left: "8vw",
        right: "8vw",
        zIndex: 2,
        display: "flex",
        flexDirection: "column"
      }}>
        {/* Label */}
        <div style={{
          fontSize: "0.9vw",
          letterSpacing: "0.2vw",
          textTransform: "uppercase",
          fontWeight: 500,
          marginBottom: "2vh",
          display: "flex",
          alignItems: "center",
          gap: "0.5vw",
          color: "rgba(245, 240, 232, 0.7)"
        }}>
          <span>🌿</span> YIELD METRICS
        </div>

        {/* Title & Description Row */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "8vh",
          borderBottom: "0.1vw solid rgba(245, 240, 232, 0.2)",
          paddingBottom: "3vh"
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "4vw",
            fontStyle: "italic",
            fontWeight: 400,
            margin: 0,
            lineHeight: 1.1
          }}>
            Harvest Results
          </h2>
          <p style={{
            fontSize: "1.1vw",
            fontWeight: 300,
            maxWidth: "30vw",
            margin: 0,
            opacity: 0.8,
            lineHeight: 1.5,
            textAlign: "right"
          }}>
            Quarterly analysis showing unprecedented growth across all major biological asset categories and synthetic derivatives.
          </p>
        </div>

        {/* Data Grid */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "3vw"
        }}>
          {/* Stat 1 */}
          <div style={{
            flex: 1,
            backgroundColor: "rgba(245, 240, 232, 0.03)",
            padding: "4vh 2vw",
            borderTop: "0.2vw solid #F5F0E8"
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "5vw",
              fontStyle: "italic",
              fontWeight: 300,
              marginBottom: "1vh",
              lineHeight: 1
            }}>
              248<span style={{ fontSize: "3vw", opacity: 0.7 }}>%</span>
            </div>
            <div style={{
              fontSize: "1vw",
              fontWeight: 600,
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
              marginBottom: "1vh"
            }}>
              Biomass Increase
            </div>
            <p style={{ fontSize: "0.9vw", fontWeight: 300, opacity: 0.6, margin: 0, lineHeight: 1.4 }}>
              Year-over-year growth in primary vegetative assets.
            </p>
          </div>

          {/* Stat 2 */}
          <div style={{
            flex: 1,
            backgroundColor: "rgba(245, 240, 232, 0.03)",
            padding: "4vh 2vw",
            borderTop: "0.2vw solid #F5F0E8"
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "5vw",
              fontStyle: "italic",
              fontWeight: 300,
              marginBottom: "1vh",
              lineHeight: 1
            }}>
              14<span style={{ fontSize: "3vw", opacity: 0.7 }}>k</span>
            </div>
            <div style={{
              fontSize: "1vw",
              fontWeight: 600,
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
              marginBottom: "1vh"
            }}>
              New Seedlings
            </div>
            <p style={{ fontSize: "0.9vw", fontWeight: 300, opacity: 0.6, margin: 0, lineHeight: 1.4 }}>
              Successfully germinated units integrated into the system.
            </p>
          </div>

          {/* Stat 3 */}
          <div style={{
            flex: 1,
            backgroundColor: "rgba(245, 240, 232, 0.03)",
            padding: "4vh 2vw",
            borderTop: "0.2vw solid #F5F0E8"
          }}>
            <div style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "5vw",
              fontStyle: "italic",
              fontWeight: 300,
              marginBottom: "1vh",
              lineHeight: 1
            }}>
              92<span style={{ fontSize: "3vw", opacity: 0.7 }}>%</span>
            </div>
            <div style={{
              fontSize: "1vw",
              fontWeight: 600,
              letterSpacing: "0.1vw",
              textTransform: "uppercase",
              marginBottom: "1vh"
            }}>
              Survival Rate
            </div>
            <p style={{ fontSize: "0.9vw", fontWeight: 300, opacity: 0.6, margin: 0, lineHeight: 1.4 }}>
              Historic high retention in optimal climate conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Area */}
      <div style={{
        position: "absolute",
        bottom: "3vh",
        left: "4vw",
        right: "4vw",
        zIndex: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#F5F0E8",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 300,
        fontSize: "0.9vw",
        letterSpacing: "0.05vw",
        opacity: 0.5
      }}>
        <div>acme.co</div>
        <div>03</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/GreenhouseBotanicalPage4.tsx`)

```tsx
export function GreenhouseBotanicalPage4() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#1A3A2A",
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Background Image - reversed gradient for right side focus */}
      <img 
        src="/__mockup/photos/greenhouse-interior.png" 
        alt="Greenhouse interior" 
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

      {/* Overlay Gradient - Darker, coming from left to right */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to right, rgba(26,58,42,0.95) 0%, rgba(26,58,42,0.8) 50%, transparent 100%)",
        zIndex: 1
      }} />

      {/* Content Area */}
      <div style={{
        position: "absolute",
        top: "25vh",
        left: "8vw",
        width: "50vw",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        textAlign: "left",
        color: "#F5F0E8"
      }}>
        {/* Label */}
        <div style={{
          fontSize: "1vw",
          letterSpacing: "0.2vw",
          textTransform: "uppercase",
          fontWeight: 500,
          marginBottom: "3vh",
          display: "flex",
          alignItems: "center",
          gap: "0.5vw",
          opacity: 0.8
        }}>
          <span>🌿</span> NEXT STEPS
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "5.5vw",
          fontStyle: "italic",
          fontWeight: 400,
          margin: "0 0 3vh 0",
          lineHeight: 1.1
        }}>
          Let's Cultivate<br />Your Future
        </h1>

        {/* Subtitle */}
        <p style={{
          fontSize: "1.4vw",
          fontWeight: 300,
          lineHeight: 1.5,
          margin: "0 0 5vh 0",
          maxWidth: "35vw",
          opacity: 0.8
        }}>
          Ready to plant the seeds of innovation? Connect with our botanical strategy team to design a bespoke ecosystem for your organization.
        </p>

        {/* Contact Info */}
        <div style={{
          display: "flex",
          gap: "4vw",
          borderTop: "0.1vw solid rgba(245, 240, 232, 0.3)",
          paddingTop: "4vh",
          width: "100%"
        }}>
          <div>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1vw", opacity: 0.6, marginBottom: "1vh" }}>Inquiries</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>hello@acme.co</div>
          </div>
          <div>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1vw", opacity: 0.6, marginBottom: "1vh" }}>Location</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>The Conservatory, NY</div>
          </div>
        </div>
      </div>

      {/* Footer Area */}
      <div style={{
        position: "absolute",
        bottom: "3vh",
        left: "4vw",
        right: "4vw",
        zIndex: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#F5F0E8",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 300,
        fontSize: "0.9vw",
        letterSpacing: "0.05vw",
        opacity: 0.6
      }}>
        <div>acme.co</div>
        <div>04</div>
      </div>
    </div>
  );
}
```
