# Botanical Wellness

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "BotanicalWellness" template embodies a modern and serene aesthetic, characterized by its botanical theme. The background features a solid black color (#000) with a botanical image sourced from "/__mockup/images/photo-botanical.png" that covers the entire viewport. The text and accent colors include a soft green (#52796F) for most text elements, a deeper green (#1B4332) for the main heading, and a light green (#95D5B2) for a decorative accent. The template utilizes the 'Inter' sans-serif font for body text and footer, while 'Playfair Display' serif font is used for the main heading, creating a contrast between modern and classic styles. Key layout elements include a glass panel with a white semi-transparent background (rgba(255, 255, 255, 0.85)) and rounded corners, positioned centrally with a shadow effect, enhancing the overall depth. The overall aesthetic feel can be described as "natural elegance."

## Source Code

**Component:** `BotanicalWellness`

### Slide 1 — Title (`slide-styles/BotanicalWellness.tsx`)

```tsx
export function BotanicalWellness() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/images/photo-botanical.png" 
        alt="Botanical background" 
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

      {/* Glass Panel */}
      <div style={{
        position: "absolute",
        top: "25vh",
        left: "8vw",
        width: "35vw",
        height: "50vh",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "1.5vw",
        zIndex: 1,
        padding: "4vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 2vw 4vw rgba(0, 0, 0, 0.15)"
      }}>
        {/* Top Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "0.8vw", color: "#52796F", letterSpacing: "0.1vw", textTransform: "uppercase" }}>
            Example Company
          </div>
          {/* Decorative Leaf-like Accent */}
          <div style={{
            width: "1vw",
            height: "1vw",
            backgroundColor: "#95D5B2",
            borderRadius: "50%",
            marginTop: "0.2vw"
          }} />
        </div>

        {/* Middle Section - Typography */}
        <div>
          <h1 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "5vw", 
            fontStyle: "italic",
            color: "#1B4332", 
            margin: "0 0 2vh 0",
            lineHeight: 1.1
          }}>
            Verdure
          </h1>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.5vw",
            color: "#52796F",
            margin: 0,
            lineHeight: 1.4,
            fontWeight: 400
          }}>
            Rooted in nature.<br/>Growing with purpose.
          </p>
        </div>

        {/* Bottom Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "0.7vw", color: "#52796F", opacity: 0.8 }}>
            2026
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "3vh",
        right: "3vw",
        zIndex: 1,
        fontSize: "0.8vw",
        color: "rgba(255, 255, 255, 0.8)",
        fontFamily: "'Inter', sans-serif",
        letterSpacing: "0.05vw"
      }}>
        Example Company, Inc. / Confidential
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BotanicalWellnessPage2.tsx`)

```tsx
export function BotanicalWellnessPage2() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      position: "relative",
      backgroundColor: "#1B4332",
      fontFamily: "'Inter', sans-serif",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {/* Subtle Background Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/__mockup/images/photo-botanical.png')",
        backgroundSize: "cover",
        opacity: 0.15,
        zIndex: 0
      }} />

      {/* Header Section */}
      <div style={{ zIndex: 1, textAlign: "center", marginBottom: "6vh", marginTop: "-4vh" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "4vw",
          fontStyle: "italic",
          color: "#95D5B2",
          margin: 0,
          fontWeight: 400
        }}>
          The Collection
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1vw",
          color: "rgba(255, 255, 255, 0.6)",
          marginTop: "1.5vh",
          letterSpacing: "0.15vw",
          textTransform: "uppercase"
        }}>
          Curated botanical formulations
        </p>
      </div>

      {/* Product Cards Container */}
      <div style={{
        display: "flex",
        gap: "3vw",
        zIndex: 1,
        width: "75vw",
        height: "50vh",
        justifyContent: "center"
      }}>
        {/* Product 1 */}
        <div style={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "1vw",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderTop: "0.3vw solid #95D5B2",
          padding: "3.5vw 2.5vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          boxShadow: "0 2vw 4vw rgba(0,0,0,0.15)"
        }}>
          <div style={{ fontSize: "4vw", marginBottom: "2.5vh" }}>🌿</div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8vw",
            color: "white",
            margin: "0 0 1vh 0",
            fontWeight: 400
          }}>
            Botanical Cleanser
          </h3>
          <p style={{
            color: "#95D5B2",
            fontSize: "1.1vw",
            lineHeight: 1.5,
            margin: "0 0 auto 0",
            opacity: 0.9
          }}>
            Gentle daily purification
          </p>
          <div style={{
            fontSize: "1.3vw",
            fontWeight: "600",
            color: "white",
            marginTop: "3vh",
            letterSpacing: "0.05vw"
          }}>
            $38
          </div>
        </div>

        {/* Product 2 */}
        <div style={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "1vw",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderTop: "0.3vw solid #95D5B2",
          padding: "3.5vw 2.5vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          boxShadow: "0 2vw 4vw rgba(0,0,0,0.15)"
        }}>
          <div style={{ fontSize: "4vw", marginBottom: "2.5vh" }}>🍃</div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8vw",
            color: "white",
            margin: "0 0 1vh 0",
            fontWeight: 400
          }}>
            Renewal Serum
          </h3>
          <p style={{
            color: "#95D5B2",
            fontSize: "1.1vw",
            lineHeight: 1.5,
            margin: "0 0 auto 0",
            opacity: 0.9
          }}>
            Deep cellular repair
          </p>
          <div style={{
            fontSize: "1.3vw",
            fontWeight: "600",
            color: "white",
            marginTop: "3vh",
            letterSpacing: "0.05vw"
          }}>
            $62
          </div>
        </div>

        {/* Product 3 */}
        <div style={{
          flex: 1,
          backgroundColor: "rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          borderRadius: "1vw",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderTop: "0.3vw solid #95D5B2",
          padding: "3.5vw 2.5vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          boxShadow: "0 2vw 4vw rgba(0,0,0,0.15)"
        }}>
          <div style={{ fontSize: "4vw", marginBottom: "2.5vh" }}>🌱</div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.8vw",
            color: "white",
            margin: "0 0 1vh 0",
            fontWeight: 400
          }}>
            Night Cream
          </h3>
          <p style={{
            color: "#95D5B2",
            fontSize: "1.1vw",
            lineHeight: 1.5,
            margin: "0 0 auto 0",
            opacity: 0.9
          }}>
            Restorative overnight
          </p>
          <div style={{
            fontSize: "1.3vw",
            fontWeight: "600",
            color: "white",
            marginTop: "3vh",
            letterSpacing: "0.05vw"
          }}>
            $48
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "4vh",
        left: "5vw",
        right: "5vw",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1,
        fontSize: "0.85vw",
        color: "rgba(255, 255, 255, 0.5)",
        fontFamily: "'Inter', sans-serif",
        letterSpacing: "0.05vw",
        textTransform: "uppercase"
      }}>
        <div>02</div>
        <div>Example Company, Inc. / Confidential</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/BotanicalWellnessPage3.tsx`)

```tsx
export function BotanicalWellnessPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/images/photo-botanical.png" 
        alt="Botanical background" 
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

      {/* Main Glass Panel */}
      <div style={{
        position: "absolute",
        top: "15vh",
        left: "8vw",
        width: "84vw",
        height: "70vh",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "1.5vw",
        zIndex: 1,
        padding: "4vw",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 2vw 4vw rgba(0, 0, 0, 0.15)"
      }}>
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4vh" }}>
          <div>
            <div style={{ fontSize: "0.8vw", color: "#52796F", letterSpacing: "0.1vw", textTransform: "uppercase", marginBottom: "1vh" }}>
              Our Growth
            </div>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: "3vw", 
              fontStyle: "italic",
              color: "#1B4332", 
              margin: 0,
              lineHeight: 1.1
            }}>
              Cultivating Success
            </h2>
          </div>
          <div style={{
            width: "3vw",
            height: "3vw",
            backgroundColor: "#95D5B2",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1B4332",
            fontSize: "1.2vw",
            fontWeight: 600
          }}>
            Q4
          </div>
        </div>

        {/* Content Section - Data Grid */}
        <div style={{ display: "flex", gap: "2vw", height: "100%" }}>
          {/* Left Column - Metrics */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh", justifyContent: "center" }}>
            <div style={{ borderLeft: "0.3vw solid #95D5B2", paddingLeft: "1.5vw" }}>
              <div style={{ fontSize: "3.5vw", fontFamily: "'Playfair Display', serif", color: "#1B4332", lineHeight: 1 }}>
                250%
              </div>
              <div style={{ fontSize: "1vw", color: "#52796F", marginTop: "1vh" }}>
                Year-over-Year Growth
              </div>
            </div>
            <div style={{ borderLeft: "0.3vw solid #52796F", paddingLeft: "1.5vw" }}>
              <div style={{ fontSize: "3.5vw", fontFamily: "'Playfair Display', serif", color: "#1B4332", lineHeight: 1 }}>
                1.2M
              </div>
              <div style={{ fontSize: "1vw", color: "#52796F", marginTop: "1vh" }}>
                Active Subscribers
              </div>
            </div>
            <div style={{ borderLeft: "0.3vw solid #1B4332", paddingLeft: "1.5vw" }}>
              <div style={{ fontSize: "3.5vw", fontFamily: "'Playfair Display', serif", color: "#1B4332", lineHeight: 1 }}>
                45+
              </div>
              <div style={{ fontSize: "1vw", color: "#52796F", marginTop: "1vh" }}>
                Sourced Botanicals
              </div>
            </div>
          </div>

          {/* Right Column - Visual Chart */}
          <div style={{ flex: 2, backgroundColor: "rgba(255,255,255,0.5)", borderRadius: "1vw", padding: "2vw", display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative" }}>
            <div style={{ position: "absolute", top: "2vw", left: "2vw", fontSize: "1vw", color: "#1B4332", fontWeight: 500 }}>
              Quarterly Revenue (M)
            </div>
            
            <div style={{ display: "flex", alignItems: "flex-end", gap: "1.5vw", height: "80%", width: "100%" }}>
              {/* Bar 1 */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div style={{ width: "100%", height: "30%", backgroundColor: "#95D5B2", borderRadius: "0.5vw 0.5vw 0 0", transition: "height 0.5s ease" }} />
                <div style={{ fontSize: "0.8vw", color: "#52796F" }}>Q1</div>
              </div>
              {/* Bar 2 */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div style={{ width: "100%", height: "45%", backgroundColor: "#74C69D", borderRadius: "0.5vw 0.5vw 0 0" }} />
                <div style={{ fontSize: "0.8vw", color: "#52796F" }}>Q2</div>
              </div>
              {/* Bar 3 */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div style={{ width: "100%", height: "65%", backgroundColor: "#52B788", borderRadius: "0.5vw 0.5vw 0 0" }} />
                <div style={{ fontSize: "0.8vw", color: "#52796F" }}>Q3</div>
              </div>
              {/* Bar 4 */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div style={{ width: "100%", height: "90%", backgroundColor: "#2D6A4F", borderRadius: "0.5vw 0.5vw 0 0" }} />
                <div style={{ fontSize: "0.8vw", color: "#52796F", fontWeight: 600 }}>Q4</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "3vh",
        left: "3vw",
        right: "3vw",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 1,
        fontSize: "0.8vw",
        color: "rgba(255, 255, 255, 0.8)",
        fontFamily: "'Inter', sans-serif",
        letterSpacing: "0.05vw"
      }}>
        <div>Example Company, Inc. / Confidential</div>
        <div>3</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/BotanicalWellnessPage4.tsx`)

```tsx
export function BotanicalWellnessPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/images/photo-botanical.png" 
        alt="Botanical background" 
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

      {/* Center Glass Panel */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50vw",
        height: "60vh",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: "1.5vw",
        zIndex: 1,
        padding: "5vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "0 2vw 4vw rgba(0, 0, 0, 0.15)"
      }}>
        {/* Decorative Leaf-like Accent */}
        <div style={{
          width: "2vw",
          height: "2vw",
          backgroundColor: "#95D5B2",
          borderRadius: "50%",
          marginBottom: "3vh"
        }} />

        {/* Typography */}
        <h2 style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontSize: "4vw", 
          fontStyle: "italic",
          color: "#1B4332", 
          margin: "0 0 2vh 0",
          lineHeight: 1.1
        }}>
          Flourish with Us
        </h2>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.2vw",
          color: "#52796F",
          margin: "0 0 5vh 0",
          lineHeight: 1.5,
          fontWeight: 400,
          maxWidth: "80%"
        }}>
          Join our ecosystem of wellness and sustainable living. We are ready to branch out into new markets and cultivate lasting partnerships.
        </p>

        {/* CTA Details */}
        <div style={{
          display: "flex",
          gap: "4vw",
          borderTop: "0.1vw solid rgba(82, 121, 111, 0.2)",
          paddingTop: "4vh",
          width: "100%",
          justifyContent: "center"
        }}>
          <div>
            <div style={{ fontSize: "0.8vw", color: "#52796F", textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "0.5vh" }}>Email</div>
            <div style={{ fontSize: "1.2vw", color: "#1B4332", fontWeight: 500 }}>hello@verdure.example.com</div>
          </div>
          <div>
            <div style={{ fontSize: "0.8vw", color: "#52796F", textTransform: "uppercase", letterSpacing: "0.1vw", marginBottom: "0.5vh" }}>Website</div>
            <div style={{ fontSize: "1.2vw", color: "#1B4332", fontWeight: 500 }}>www.verdure.example.com</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "3vh",
        left: "3vw",
        right: "3vw",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 1,
        fontSize: "0.8vw",
        color: "rgba(255, 255, 255, 0.8)",
        fontFamily: "'Inter', sans-serif",
        letterSpacing: "0.05vw"
      }}>
        <div>Example Company, Inc. / Confidential</div>
        <div>4</div>
      </div>
    </div>
  );
}
```
