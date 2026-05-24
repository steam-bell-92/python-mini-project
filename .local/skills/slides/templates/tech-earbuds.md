# Tech Product (Earbuds)

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "TechEarbuds" template presents a sleek, modern aesthetic with a focus on technology and sophistication. The background color is a solid black (#050505), complemented by a radial gradient featuring a vibrant purple (#4F46E5) transitioning to a semi-transparent version of the same color and fading into the background. Text is primarily white (#ffffff) for the main title and a muted gray (#9ca3af) for metadata, with an accent color of a lighter gray (#6b7280) for the subtitle. The font family used is 'Inter', a sans-serif typeface, which is applied to all text elements for a clean and contemporary look. Key layout elements include a large, circular glow effect behind the product image, positioned centrally, and a floating product image that occupies a significant portion of the screen. The design also features a linear gradient vignette at the bottom and inset shadows around the edges, enhancing the cinematic feel. The product image is sourced from "/__mockup/images/product-earbuds.png". Overall, the aesthetic feel can be described as "modern, sleek, cinematic."

## Source Code

**Component:** `TechEarbuds`

### Slide 1 — Title (`slide-styles/TechEarbuds.tsx`)

```tsx
export function TechEarbuds() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#050505",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#ffffff",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      {/* Cinematic Glow Behind Product */}
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vw",
          background: "radial-gradient(circle, #4F46E5 0%, rgba(79, 70, 229, 0.3) 25%, rgba(5, 5, 5, 0) 65%)",
          zIndex: 1,
          filter: "blur(90px)",
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.9,
        }}
      />

      {/* Metadata Top Left */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "4vw",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#9ca3af",
          letterSpacing: "0.15em",
          zIndex: 10,
          textTransform: "uppercase",
        }}
      >
        Example Company
      </div>

      {/* Metadata Top Right */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          right: "4vw",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#9ca3af",
          letterSpacing: "0.15em",
          zIndex: 10,
        }}
      >
        2026
      </div>

      {/* Typography - Behind Product */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 2,
          textAlign: "center",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: "11vw",
            fontWeight: 200,
            margin: 0,
            letterSpacing: "-0.05em",
            lineHeight: 1,
            color: "#ffffff",
            whiteSpace: "nowrap",
          }}
        >
          AuraPods Pro
        </h1>
        <p
          style={{
            fontSize: "1.2vw",
            fontWeight: 400,
            color: "#6b7280",
            textTransform: "uppercase",
            letterSpacing: "0.6em",
            marginTop: "2vh",
            marginLeft: "0.6em", // visual centering for tracking
          }}
        >
          Sound, reimagined.
        </p>
      </div>

      {/* Product Image - Massive and floating in front, taking 50-60% */}
      <div
        style={{
          position: "absolute",
          top: "65%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "55vw",
          height: "65vh",
          zIndex: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/__mockup/images/product-earbuds.png"
          alt="AuraPods Pro Wireless Earbuds"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            filter: "drop-shadow(0 50px 70px rgba(0, 0, 0, 0.9)) drop-shadow(0 20px 40px rgba(79, 70, 229, 0.4))",
            transform: "scale(1.15)",
          }}
        />
      </div>

      {/* Cinematic Floor/Vignette */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "25vh",
          background: "linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0) 100%)",
          zIndex: 4,
          pointerEvents: "none",
        }}
      />
      
      {/* Vignette Edges */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          boxShadow: "inset 0 0 15vw rgba(0,0,0,0.8)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
```

### Slide 2 (`slide-pages/TechEarbudsPage2.tsx`)

```tsx
export function TechEarbudsPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#0A0A0A",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#ffffff",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "25%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background: "radial-gradient(circle, rgba(79, 70, 229, 0.15) 0%, rgba(10, 10, 10, 0) 60%)",
          zIndex: 1,
          filter: "blur(50px)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: "6vh",
          left: "6vw",
          fontSize: "1vw",
          fontWeight: 600,
          color: "#9ca3af",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          zIndex: 10,
        }}
      >
        Specifications
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "6vw",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#4b5563",
          letterSpacing: "0.05em",
          zIndex: 10,
        }}
      >
        Example Company, Inc. / Confidential
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          right: "6vw",
          fontSize: "0.9vw",
          fontWeight: 600,
          color: "#6b7280",
          letterSpacing: "0.05em",
          zIndex: 10,
        }}
      >
        02
      </div>

      {/* Main Content Layout */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          zIndex: 2,
          position: "relative",
        }}
      >
        {/* Left Side: Product Image */}
        <div
          style={{
            width: "45%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <img
            src="/__mockup/images/product-earbuds.png"
            alt="Product"
            style={{
              width: "70%",
              height: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 30px 40px rgba(0, 0, 0, 0.8)) drop-shadow(0 10px 20px rgba(79, 70, 229, 0.2))",
              transform: "rotate(-10deg) scale(1.1)",
            }}
          />
        </div>

        {/* Right Side: Specs */}
        <div
          style={{
            width: "55%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: "10vw",
            paddingLeft: "2vw",
          }}
        >
          {/* Spec 1 */}
          <div style={{ marginBottom: "4vh" }}>
            <div
              style={{
                fontSize: "3.5vw",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              40dB
            </div>
            <div
              style={{
                height: "1px",
                width: "100%",
                background: "linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                margin: "1vh 0",
              }}
            />
            <div
              style={{
                fontSize: "1.1vw",
                fontWeight: 400,
                color: "#9ca3af",
                letterSpacing: "0.05em",
              }}
            >
              Active Noise Cancellation
            </div>
          </div>

          {/* Spec 2 */}
          <div style={{ marginBottom: "4vh" }}>
            <div
              style={{
                fontSize: "3.5vw",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              36hr
            </div>
            <div
              style={{
                height: "1px",
                width: "100%",
                background: "linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                margin: "1vh 0",
              }}
            />
            <div
              style={{
                fontSize: "1.1vw",
                fontWeight: 400,
                color: "#9ca3af",
                letterSpacing: "0.05em",
              }}
            >
              Battery Life
            </div>
          </div>

          {/* Spec 3 */}
          <div style={{ marginBottom: "4vh" }}>
            <div
              style={{
                fontSize: "3.5vw",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              12mm
            </div>
            <div
              style={{
                height: "1px",
                width: "100%",
                background: "linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                margin: "1vh 0",
              }}
            />
            <div
              style={{
                fontSize: "1.1vw",
                fontWeight: 400,
                color: "#9ca3af",
                letterSpacing: "0.05em",
              }}
            >
              Custom Drivers
            </div>
          </div>

          {/* Spec 4 */}
          <div>
            <div
              style={{
                fontSize: "3.5vw",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              IPX5
            </div>
            <div
              style={{
                height: "1px",
                width: "100%",
                background: "linear-gradient(to right, rgba(255,255,255,0.2), rgba(255,255,255,0))",
                margin: "1vh 0",
              }}
            />
            <div
              style={{
                fontSize: "1.1vw",
                fontWeight: 400,
                color: "#9ca3af",
                letterSpacing: "0.05em",
              }}
            >
              Water Resistance
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/TechEarbudsPage3.tsx`)

```tsx
export function TechEarbudsPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#050505",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#ffffff",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      {/* Cinematic Glow Behind Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90vw",
          height: "90vw",
          background: "radial-gradient(circle, #4F46E5 0%, rgba(79, 70, 229, 0.2) 30%, rgba(5, 5, 5, 0) 70%)",
          zIndex: 1,
          filter: "blur(100px)",
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.7,
        }}
      />

      {/* Metadata Top Left */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "4vw",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#9ca3af",
          letterSpacing: "0.15em",
          zIndex: 10,
          textTransform: "uppercase",
        }}
      >
        Performance Metrics
      </div>

      {/* Metadata Top Right */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          right: "4vw",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#9ca3af",
          letterSpacing: "0.15em",
          zIndex: 10,
        }}
      >
        2026
      </div>

      {/* Main Content Area */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10vw",
          width: "80vw",
          zIndex: 3,
        }}
      >
        <h2
          style={{
            fontSize: "4vw",
            fontWeight: 200,
            margin: 0,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          Uncompromised Fidelity.
        </h2>
        <p
          style={{
            fontSize: "1.2vw",
            fontWeight: 400,
            color: "#6b7280",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            marginTop: "2vh",
            maxWidth: "40vw",
            lineHeight: 1.6,
          }}
        >
          Engineered for the purest audio experience.
        </p>

        {/* Stats Grid */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "12vh",
            gap: "4vw",
          }}
        >
          {[
            { value: "48h", label: "Battery Life", desc: "With charging case" },
            { value: "11mm", label: "Custom Drivers", desc: "Pure bass & crisp highs" },
            { value: "-40dB", label: "Active Noise Cancellation", desc: "Total immersion" },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: "3vh",
              }}
            >
              <div
                style={{
                  fontSize: "5vw",
                  fontWeight: 200,
                  letterSpacing: "-0.05em",
                  color: "#ffffff",
                  lineHeight: 1,
                  marginBottom: "2vh",
                  textShadow: "0 0 40px rgba(79, 70, 229, 0.4)",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "1.2vw",
                  fontWeight: 500,
                  color: "#e5e7eb",
                  marginBottom: "1vh",
                  letterSpacing: "0.05em",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontSize: "0.9vw",
                  fontWeight: 400,
                  color: "#6b7280",
                }}
              >
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Floor/Vignette */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "25vh",
          background: "linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0) 100%)",
          zIndex: 4,
          pointerEvents: "none",
        }}
      />
      
      {/* Vignette Edges */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          boxShadow: "inset 0 0 15vw rgba(0,0,0,0.8)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* Page Number */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          right: "4vw",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#4b5563",
          letterSpacing: "0.1em",
          zIndex: 10,
        }}
      >
        03
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/TechEarbudsPage4.tsx`)

```tsx
export function TechEarbudsPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#050505",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        color: "#ffffff",
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      }}
    >
      {/* Cinematic Glow Behind Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100vw",
          height: "100vw",
          background: "radial-gradient(circle, #4F46E5 0%, rgba(79, 70, 229, 0.15) 20%, rgba(5, 5, 5, 0) 60%)",
          zIndex: 1,
          filter: "blur(120px)",
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.8,
        }}
      />

      {/* Metadata Top Left */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "4vw",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#9ca3af",
          letterSpacing: "0.15em",
          zIndex: 10,
          textTransform: "uppercase",
        }}
      >
        Example Company
      </div>

      {/* Metadata Top Right */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          right: "4vw",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#9ca3af",
          letterSpacing: "0.15em",
          zIndex: 10,
        }}
      >
        2026
      </div>

      {/* Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 3,
          textAlign: "center",
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontSize: "6vw",
            fontWeight: 200,
            margin: 0,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "#ffffff",
          }}
        >
          Hear the future.
        </h2>
        <p
          style={{
            fontSize: "1.2vw",
            fontWeight: 400,
            color: "#6b7280",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            marginTop: "3vh",
            marginBottom: "8vh",
          }}
        >
          Available now worldwide
        </p>

        {/* CTA Button */}
        <div
          style={{
            padding: "1.5vw 4vw",
            backgroundColor: "#ffffff",
            color: "#050505",
            fontSize: "1vw",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            borderRadius: "100px",
            cursor: "pointer",
            boxShadow: "0 0 40px rgba(255,255,255,0.2)",
            transition: "all 0.3s ease",
          }}
        >
          Pre-order AuraPods
        </div>
        
        {/* Contact Links */}
        <div
          style={{
            display: "flex",
            gap: "3vw",
            marginTop: "10vh",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "4vh",
            width: "40vw",
            justifyContent: "center",
          }}
        >
          {["aurapods.com", "press@example.com", "@aurapods"].map((link, i) => (
            <div
              key={i}
              style={{
                fontSize: "0.9vw",
                color: "#9ca3af",
                letterSpacing: "0.05em",
                cursor: "pointer",
              }}
            >
              {link}
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Floor/Vignette */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "25vh",
          background: "linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0) 100%)",
          zIndex: 4,
          pointerEvents: "none",
        }}
      />
      
      {/* Vignette Edges */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          boxShadow: "inset 0 0 15vw rgba(0,0,0,0.8)",
          zIndex: 5,
          pointerEvents: "none",
        }}
      />

      {/* Page Number */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          right: "4vw",
          fontSize: "0.8vw",
          fontWeight: 400,
          color: "#4b5563",
          letterSpacing: "0.1em",
          zIndex: 10,
        }}
      >
        04
      </div>
    </div>
  );
}
```
