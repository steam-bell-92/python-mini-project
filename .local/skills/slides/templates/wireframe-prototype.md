# Wireframe Prototype

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "WireframePrototype" template represents a clean and minimalistic wireframe aesthetic. It features a solid background color of #F9F9F9 and uses #FFFFFF for the main content area, with text in #333333 and accents in #666666 and #555555. The font family used is 'DM Sans', sans-serif, which is applied throughout for a modern and readable appearance. Key layout elements include a fake browser/app chrome with rounded corners, a top bar with wireframe buttons, a main content area split into text and image placeholders, and decorative elements like dashed borders and a large "X" in the image placeholder area. The overall aesthetic feel is "clean, modern, minimal."

## Source Code

**Component:** `WireframePrototype`

### Slide 1 — Title (`slide-styles/WireframePrototype.tsx`)

```tsx
export function WireframePrototype() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F9F9F9",
        color: "#333333",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "4vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Fake Browser/App Chrome */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "0.2vw solid #333333",
          borderRadius: "1vw",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          boxShadow: "0.5vw 0.5vw 0vw rgba(0,0,0,0.05)",
        }}
      >
        {/* Top Bar Wireframe */}
        <div
          style={{
            height: "6vh",
            borderBottom: "0.2vw solid #333333",
            display: "flex",
            alignItems: "center",
            padding: "0 2vw",
            gap: "1vw",
          }}
        >
          {/* Wireframe buttons */}
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          
          <div style={{ flex: 1 }}></div>
          {/* Logo placeholder */}
          <div style={{ fontSize: "1.2vw", fontWeight: 400, letterSpacing: "0.1em" }}>
            [ acme.co ]
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: "4vw", display: "flex", position: "relative" }}>
          
          {/* Left Side: Text Content */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 10 }}>
            
            {/* Tag/Label wireframe */}
            <div
              style={{
                border: "0.15vw dashed #888888",
                padding: "0.5vw 1vw",
                display: "inline-block",
                alignSelf: "flex-start",
                marginBottom: "3vh",
                fontSize: "1vw",
                color: "#666666",
                borderRadius: "0.5vw",
              }}
            >
              Placeholder: Version 1.0 (Draft)
            </div>

            <h1
              style={{
                fontSize: "7vw",
                fontWeight: 300,
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                textDecoration: "underline",
                textDecorationStyle: "wavy",
                textDecorationColor: "#CCCCCC",
                textUnderlineOffset: "0.5vw",
              }}
            >
              Example Deck
            </h1>
            
            <p
              style={{
                fontSize: "2vw",
                fontWeight: 400,
                color: "#555555",
                marginTop: "4vh",
                maxWidth: "40vw",
                lineHeight: 1.5,
                borderLeft: "0.4vw solid #E0E0E0",
                paddingLeft: "2vw",
              }}
            >
              Your compelling subtitle goes here.<br/>
              Describe your big idea in a single sentence.
            </p>

            {/* Wireframe Button */}
            <div
              style={{
                marginTop: "6vh",
                border: "0.2vw solid #333333",
                padding: "1.5vw 3vw",
                display: "inline-block",
                alignSelf: "flex-start",
                fontSize: "1.2vw",
                fontWeight: 500,
                borderRadius: "0.5vw",
                backgroundColor: "#F0F0F0",
                position: "relative",
              }}
            >
              [ Primary Action Button ]
              {/* Fake cursor */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1vw",
                  right: "-1vw",
                  width: "2vw",
                  height: "2vw",
                  borderLeft: "0.2vw solid #000",
                  borderTop: "0.2vw solid #000",
                  transform: "rotate(-15deg)",
                  zIndex: 20,
                }}
              />
            </div>
          </div>

          {/* Right Side: Image Placeholder */}
          <div
            style={{
              width: "35vw",
              height: "100%",
              border: "0.2vw solid #333333",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              backgroundColor: "#FAFAFA",
              overflow: "hidden",
            }}
          >
            {/* The Big X */}
            <div style={{ position: "absolute", width: "150%", height: "0.15vw", backgroundColor: "#333333", transform: "rotate(45deg)" }}></div>
            <div style={{ position: "absolute", width: "150%", height: "0.15vw", backgroundColor: "#333333", transform: "rotate(-45deg)" }}></div>
            
            {/* Placeholder Text */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "0.15vw solid #333333",
                padding: "1vw 2vw",
                zIndex: 5,
                fontSize: "1.5vw",
                fontWeight: 400,
                boxShadow: "0.3vw 0.3vw 0vw #EEEEEE",
              }}
            >
              Image Placeholder
            </div>
          </div>
        </div>

        {/* Footer Wireframe */}
        <div
          style={{
            height: "5vh",
            borderTop: "0.2vw solid #333333",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 3vw",
            fontSize: "1vw",
            color: "#888888",
          }}
        >
          <div>Example Company, Inc.</div>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div>2026</div>
            <div>Confidential</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/WireframePrototypePage2.tsx`)

```tsx
export function WireframePrototypePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F9F9F9",
        color: "#333333",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "4vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Fake Browser/App Chrome */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "0.2vw solid #333333",
          borderRadius: "1vw",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          boxShadow: "0.5vw 0.5vw 0vw rgba(0,0,0,0.05)",
        }}
      >
        {/* Top Bar Wireframe */}
        <div
          style={{
            height: "6vh",
            borderBottom: "0.2vw solid #333333",
            display: "flex",
            alignItems: "center",
            padding: "0 2vw",
            gap: "1vw",
          }}
        >
          {/* Wireframe buttons */}
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          
          <div style={{ flex: 1 }}></div>
          {/* Logo placeholder */}
          <div style={{ fontSize: "1.2vw", fontWeight: 400, letterSpacing: "0.1em" }}>
            [ acme.co ]
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: "4vw", display: "flex", flexDirection: "column", position: "relative" }}>
          
          <h2
            style={{
              fontSize: "4vw",
              fontWeight: 300,
              margin: "0 0 4vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textDecoration: "underline",
              textDecorationStyle: "wavy",
              textDecorationColor: "#CCCCCC",
              textUnderlineOffset: "0.5vw",
            }}
          >
            Core Features Overview
          </h2>

          <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
            
            {/* Left Content */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
              <div
                style={{
                  border: "0.15vw dashed #888888",
                  padding: "2vw",
                  borderRadius: "0.5vw",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <h3 style={{ fontSize: "2vw", fontWeight: 500, margin: "0 0 1vh 0" }}>[ Section Header 1 ]</h3>
                <div style={{ width: "100%", height: "0.5vw", backgroundColor: "#EEEEEE", marginBottom: "2vh" }}></div>
                <div style={{ width: "80%", height: "0.5vw", backgroundColor: "#EEEEEE", marginBottom: "1vh" }}></div>
                <div style={{ width: "90%", height: "0.5vw", backgroundColor: "#EEEEEE", marginBottom: "1vh" }}></div>
                <div style={{ width: "70%", height: "0.5vw", backgroundColor: "#EEEEEE" }}></div>
              </div>

              <div
                style={{
                  border: "0.15vw dashed #888888",
                  padding: "2vw",
                  borderRadius: "0.5vw",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <h3 style={{ fontSize: "2vw", fontWeight: 500, margin: "0 0 1vh 0" }}>[ Section Header 2 ]</h3>
                <div style={{ width: "100%", height: "0.5vw", backgroundColor: "#EEEEEE", marginBottom: "2vh" }}></div>
                <div style={{ width: "85%", height: "0.5vw", backgroundColor: "#EEEEEE", marginBottom: "1vh" }}></div>
                <div style={{ width: "75%", height: "0.5vw", backgroundColor: "#EEEEEE", marginBottom: "1vh" }}></div>
                <div style={{ width: "60%", height: "0.5vw", backgroundColor: "#EEEEEE" }}></div>
              </div>
            </div>

            {/* Right Side UI Wireframe */}
            <div style={{ flex: 1, border: "0.2vw solid #333333", borderRadius: "0.5vw", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              {/* Fake UI Header */}
              <div style={{ borderBottom: "0.2vw solid #333333", height: "4vh", backgroundColor: "#F0F0F0", display: "flex", alignItems: "center", padding: "0 1vw", gap: "1vw" }}>
                <div style={{ width: "2vw", height: "1vw", backgroundColor: "#DDDDDD", borderRadius: "0.2vw" }}></div>
                <div style={{ width: "4vw", height: "1vw", backgroundColor: "#DDDDDD", borderRadius: "0.2vw" }}></div>
              </div>
              {/* Fake UI Content */}
              <div style={{ flex: 1, padding: "2vw", display: "flex", flexDirection: "column", gap: "2vh", backgroundColor: "#FFFFFF" }}>
                <div style={{ width: "100%", height: "10vh", border: "0.15vw dashed #CCCCCC", display: "flex", alignItems: "center", justifyContent: "center", color: "#AAAAAA", fontSize: "1vw" }}>
                  &lt; UI Component A /&gt;
                </div>
                <div style={{ width: "100%", height: "10vh", border: "0.15vw dashed #CCCCCC", display: "flex", alignItems: "center", justifyContent: "center", color: "#AAAAAA", fontSize: "1vw" }}>
                  &lt; UI Component B /&gt;
                </div>
                <div style={{ width: "100%", height: "10vh", border: "0.15vw dashed #CCCCCC", display: "flex", alignItems: "center", justifyContent: "center", color: "#AAAAAA", fontSize: "1vw" }}>
                  &lt; UI Component C /&gt;
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Wireframe */}
        <div
          style={{
            height: "5vh",
            borderTop: "0.2vw solid #333333",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 3vw",
            fontSize: "1vw",
            color: "#888888",
          }}
        >
          <div>Example Company, Inc.</div>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div>2026</div>
            <div>02</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/WireframePrototypePage3.tsx`)

```tsx
export function WireframePrototypePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F9F9F9",
        color: "#333333",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "4vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Fake Browser/App Chrome */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "0.2vw solid #333333",
          borderRadius: "1vw",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          boxShadow: "0.5vw 0.5vw 0vw rgba(0,0,0,0.05)",
        }}
      >
        {/* Top Bar Wireframe */}
        <div
          style={{
            height: "6vh",
            borderBottom: "0.2vw solid #333333",
            display: "flex",
            alignItems: "center",
            padding: "0 2vw",
            gap: "1vw",
          }}
        >
          {/* Wireframe buttons */}
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          
          <div style={{ flex: 1 }}></div>
          {/* Logo placeholder */}
          <div style={{ fontSize: "1.2vw", fontWeight: 400, letterSpacing: "0.1em" }}>
            [ acme.co ]
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: "4vw", display: "flex", flexDirection: "column", position: "relative" }}>
          
          <h2
            style={{
              fontSize: "4vw",
              fontWeight: 300,
              margin: "0 0 2vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textDecoration: "underline",
              textDecorationStyle: "wavy",
              textDecorationColor: "#CCCCCC",
              textUnderlineOffset: "0.5vw",
            }}
          >
            Growth Metrics
          </h2>

          <p
            style={{
              fontSize: "1.5vw",
              color: "#666666",
              marginBottom: "4vh",
              maxWidth: "60vw",
            }}
          >
            Visualizing the projected increase over Q3 / Q4.
          </p>

          {/* Wireframe Chart Area */}
          <div
            style={{
              flex: 1,
              border: "0.2vw dashed #333333",
              borderRadius: "0.5vw",
              position: "relative",
              padding: "2vw",
              display: "flex",
              alignItems: "flex-end",
              gap: "2vw",
            }}
          >
            {/* Chart Grid Lines */}
            <div style={{ position: "absolute", top: "20%", left: 0, right: 0, borderTop: "0.1vw dotted #DDDDDD", zIndex: 0 }}></div>
            <div style={{ position: "absolute", top: "40%", left: 0, right: 0, borderTop: "0.1vw dotted #DDDDDD", zIndex: 0 }}></div>
            <div style={{ position: "absolute", top: "60%", left: 0, right: 0, borderTop: "0.1vw dotted #DDDDDD", zIndex: 0 }}></div>
            <div style={{ position: "absolute", top: "80%", left: 0, right: 0, borderTop: "0.1vw dotted #DDDDDD", zIndex: 0 }}></div>
            
            {/* Chart Bars */}
            <div style={{ flex: 1, height: "30%", backgroundColor: "#F0F0F0", border: "0.2vw solid #333333", zIndex: 1, position: "relative" }}>
              <div style={{ position: "absolute", top: "-2vw", width: "100%", textAlign: "center", fontSize: "1vw" }}>Q1</div>
            </div>
            <div style={{ flex: 1, height: "45%", backgroundColor: "#E0E0E0", border: "0.2vw solid #333333", zIndex: 1, position: "relative" }}>
              <div style={{ position: "absolute", top: "-2vw", width: "100%", textAlign: "center", fontSize: "1vw" }}>Q2</div>
            </div>
            <div style={{ flex: 1, height: "70%", backgroundColor: "#CCCCCC", border: "0.2vw solid #333333", zIndex: 1, position: "relative" }}>
              <div style={{ position: "absolute", top: "-2vw", width: "100%", textAlign: "center", fontSize: "1vw" }}>Q3</div>
            </div>
            <div style={{ flex: 1, height: "90%", backgroundColor: "#333333", border: "0.2vw solid #333333", zIndex: 1, position: "relative" }}>
              <div style={{ position: "absolute", top: "-2.5vw", width: "100%", textAlign: "center", fontSize: "1.2vw", fontWeight: 700, color: "#333333" }}>+120%</div>
              <div style={{ position: "absolute", bottom: "-2vw", width: "100%", textAlign: "center", fontSize: "1vw", color: "#666" }}>Q4</div>
            </div>

            {/* Fake cursor pointing to Q4 */}
            <div
              style={{
                position: "absolute",
                top: "10%",
                right: "12%",
                width: "2vw",
                height: "2vw",
                borderLeft: "0.2vw solid #000",
                borderTop: "0.2vw solid #000",
                transform: "rotate(45deg)",
                zIndex: 20,
              }}
            />
          </div>
        </div>

        {/* Footer Wireframe */}
        <div
          style={{
            height: "5vh",
            borderTop: "0.2vw solid #333333",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 3vw",
            fontSize: "1vw",
            color: "#888888",
          }}
        >
          <div>Example Company, Inc.</div>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div>2026</div>
            <div>03</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/WireframePrototypePage4.tsx`)

```tsx
export function WireframePrototypePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F9F9F9",
        color: "#333333",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "4vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {/* Fake Browser/App Chrome */}
      <div
        style={{
          width: "100%",
          height: "100%",
          border: "0.2vw solid #333333",
          borderRadius: "1vw",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#FFFFFF",
          boxShadow: "0.5vw 0.5vw 0vw rgba(0,0,0,0.05)",
        }}
      >
        {/* Top Bar Wireframe */}
        <div
          style={{
            height: "6vh",
            borderBottom: "0.2vw solid #333333",
            display: "flex",
            alignItems: "center",
            padding: "0 2vw",
            gap: "1vw",
          }}
        >
          {/* Wireframe buttons */}
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          <div style={{ width: "1.5vw", height: "1.5vw", border: "0.15vw solid #333333", borderRadius: "50%" }}></div>
          
          <div style={{ flex: 1 }}></div>
          {/* Logo placeholder */}
          <div style={{ fontSize: "1.2vw", fontWeight: 400, letterSpacing: "0.1em" }}>
            [ acme.co ]
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ flex: 1, padding: "4vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "relative", textAlign: "center" }}>
          
          <h2
            style={{
              fontSize: "6vw",
              fontWeight: 300,
              margin: "0 0 2vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              textDecoration: "underline",
              textDecorationStyle: "wavy",
              textDecorationColor: "#CCCCCC",
              textUnderlineOffset: "0.5vw",
            }}
          >
            Ready to Build?
          </h2>

          <p
            style={{
              fontSize: "1.8vw",
              color: "#555555",
              margin: "0 0 6vh 0",
              maxWidth: "50vw",
            }}
          >
            Join the beta and start sketching your next big idea today.
          </p>

          {/* Wireframe Input & Button */}
          <div style={{ display: "flex", gap: "1vw", width: "40vw" }}>
            <div
              style={{
                flex: 1,
                border: "0.2vw solid #999999",
                borderRadius: "0.5vw",
                padding: "1.5vw 2vw",
                fontSize: "1.2vw",
                color: "#999999",
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FAFAFA",
              }}
            >
              Enter your email address...
            </div>
            
            <div
              style={{
                border: "0.2vw solid #333333",
                borderRadius: "0.5vw",
                padding: "1.5vw 3vw",
                fontSize: "1.2vw",
                fontWeight: 600,
                backgroundColor: "#333333",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                position: "relative",
              }}
            >
              Get Started
              {/* Fake cursor */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1.5vw",
                  right: "-1.5vw",
                  width: "2vw",
                  height: "2vw",
                  borderLeft: "0.2vw solid #000",
                  borderTop: "0.2vw solid #000",
                  transform: "rotate(-15deg)",
                  zIndex: 20,
                  filter: "invert(1)", /* Since background is dark, invert cursor or just make it white, actually let's just make it stand out */
                }}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: "4vh",
              fontSize: "1vw",
              color: "#999999",
              borderBottom: "0.1vw dashed #999999",
            }}
          >
            or view our documentation &rarr;
          </div>

        </div>

        {/* Footer Wireframe */}
        <div
          style={{
            height: "5vh",
            borderTop: "0.2vw solid #333333",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 3vw",
            fontSize: "1vw",
            color: "#888888",
          }}
        >
          <div>Example Company, Inc.</div>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div>2026</div>
            <div>04</div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
