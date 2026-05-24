# Apple Minimal

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "AppleMinimal" template embodies a clean and modern aesthetic, characterized by its simplicity and elegance. It features a solid white background color (#FFFFFF) and utilizes a monochromatic color scheme with text colors including dark gray (#000000) and lighter shades of gray (#666666, #999999), alongside a vibrant blue accent (#007AFF) for emphasis. The font family used is 'Inter', a sans-serif typeface, which is applied for both body text and headings, enhancing readability and a contemporary feel. Key layout elements include a flexible, columnar arrangement with centered text, and the overall design is structured with ample padding and negative margins to create a spacious and uncluttered look. There are no background images used in this template. The overall aesthetic feel can be described as "clean, modern, minimal."

## Source Code

**Component:** `AppleMinimal`

### Slide 1 — Title (`slide-styles/AppleMinimal.tsx`)

```tsx
export function AppleMinimal() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        color: "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 400, letterSpacing: "-0.01em", color: "#666666" }}>
          acme.co <span style={{ color: "#999999" }}>(by Example Company)</span>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#999999" }}>
          2026
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginTop: "-5vh" }}>
        <h1
          style={{
            fontSize: "8vw",
            fontWeight: 200,
            letterSpacing: "-0.04em",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Example <span style={{ color: "#007AFF" }}>Deck</span>
        </h1>
        <p
          style={{
            fontSize: "2vw",
            fontWeight: 300,
            color: "#666666",
            maxWidth: "60vw",
            marginTop: "4vh",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          Your compelling subtitle goes here.<br />
          Describe your big idea in a single sentence.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#999999", letterSpacing: "0.02em" }}>
          Example Company, Inc. / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/AppleMinimalPage2.tsx`)

```tsx
export function AppleMinimalPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        color: "#1D1D1F",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "6vh 6vw",
        position: "relative",
      }}
    >
      {/* Header / New Features Label */}
      <div
        style={{
          marginLeft: "30vw",
          marginTop: "15vh",
          marginBottom: "6vh",
          color: "#0071E3",
          fontSize: "1vw",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        New Features
      </div>

      {/* Features List */}
      <div
        style={{
          marginLeft: "30vw",
          display: "flex",
          flexDirection: "column",
          gap: "5vh",
        }}
      >
        {/* Feature 1 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "#0071E3",
              fontSize: "1.2vw",
              width: "3vw",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            ◉
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "2vw" }}>
            <span
              style={{
                fontSize: "1.6vw",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Blazing Performance
            </span>
            <span
              style={{
                fontSize: "1.4vw",
                fontWeight: 400,
                color: "#86868B",
                letterSpacing: "-0.01em",
              }}
            >
              Industry-leading speed that adapts to your workflow.
            </span>
          </div>
        </div>

        {/* Feature 2 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "#0071E3",
              fontSize: "1.2vw",
              width: "3vw",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            ◆
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "2vw" }}>
            <span
              style={{
                fontSize: "1.6vw",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              All-Day Battery
            </span>
            <span
              style={{
                fontSize: "1.4vw",
                fontWeight: 400,
                color: "#86868B",
                letterSpacing: "-0.01em",
              }}
            >
              Power through your tasks from morning until night.
            </span>
          </div>
        </div>

        {/* Feature 3 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "#0071E3",
              fontSize: "1.2vw",
              width: "3vw",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            ▸
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "2vw" }}>
            <span
              style={{
                fontSize: "1.6vw",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Pro Camera System
            </span>
            <span
              style={{
                fontSize: "1.4vw",
                fontWeight: 400,
                color: "#86868B",
                letterSpacing: "-0.01em",
              }}
            >
              Capture every detail with advanced computational photography.
            </span>
          </div>
        </div>

        {/* Feature 4 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "#0071E3",
              fontSize: "1.2vw",
              width: "3vw",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            ◎
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "2vw" }}>
            <span
              style={{
                fontSize: "1.6vw",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Secure by Design
            </span>
            <span
              style={{
                fontSize: "1.4vw",
                fontWeight: 400,
                color: "#86868B",
                letterSpacing: "-0.01em",
              }}
            >
              Enterprise-grade encryption built into the core.
            </span>
          </div>
        </div>

        {/* Feature 5 */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "#0071E3",
              fontSize: "1.2vw",
              width: "3vw",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            ✦
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "2vw" }}>
            <span
              style={{
                fontSize: "1.6vw",
                fontWeight: 600,
                letterSpacing: "-0.02em",
              }}
            >
              Seamless Integration
            </span>
            <span
              style={{
                fontSize: "1.4vw",
                fontWeight: 400,
                color: "#86868B",
                letterSpacing: "-0.01em",
              }}
            >
              Works effortlessly across your entire ecosystem.
            </span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "6vw",
          right: "6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "1vw",
            fontWeight: 500,
            color: "#1D1D1F",
          }}
        >
          02
        </div>
        <div
          style={{
            fontSize: "0.9vw",
            fontWeight: 400,
            color: "#86868B",
            letterSpacing: "0.02em",
          }}
        >
          Example Company, Inc. / Confidential
        </div>
        <div style={{ width: "1vw" }}>{/* Spacer to balance the 02 */}</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/AppleMinimalPage3.tsx`)

```tsx
export function AppleMinimalPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        color: "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 400, letterSpacing: "-0.01em", color: "#666666" }}>
          acme.co <span style={{ color: "#999999" }}>(by Example Company)</span>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#999999" }}>
          Metrics & Performance
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", marginTop: "2vh", flex: 1 }}>
        <h2
          style={{
            fontSize: "4.5vw",
            fontWeight: 200,
            letterSpacing: "-0.04em",
            margin: "0 0 1vh 0",
            lineHeight: 1.1,
          }}
        >
          Growth <span style={{ color: "#007AFF" }}>Metrics</span>
        </h2>
        <p
          style={{
            fontSize: "1.8vw",
            fontWeight: 300,
            color: "#666666",
            maxWidth: "60vw",
            marginBottom: "6vh",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          Key performance indicators over the last quarter.
        </p>

        <div style={{ display: "flex", gap: "4vw", width: "100%", height: "40vh" }}>
          {/* Stat 1 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#F5F5F7", borderRadius: "1.5vw", padding: "4vw" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#666666", marginBottom: "1vh" }}>Active Users</div>
            <div style={{ fontSize: "6vw", fontWeight: 200, letterSpacing: "-0.04em", color: "#000000", lineHeight: 1 }}>2.4M</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#007AFF", marginTop: "1vh" }}>+124% Year over Year</div>
          </div>
          
          {/* Stat 2 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#F5F5F7", borderRadius: "1.5vw", padding: "4vw" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#666666", marginBottom: "1vh" }}>Revenue</div>
            <div style={{ fontSize: "6vw", fontWeight: 200, letterSpacing: "-0.04em", color: "#000000", lineHeight: 1 }}>$18M</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#007AFF", marginTop: "1vh" }}>+85% Quarter over Quarter</div>
          </div>
          
          {/* Stat 3 */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "#000000", borderRadius: "1.5vw", padding: "4vw" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#999999", marginBottom: "1vh" }}>Retention</div>
            <div style={{ fontSize: "6vw", fontWeight: 200, letterSpacing: "-0.04em", color: "#FFFFFF", lineHeight: 1 }}>94%</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#FFFFFF", opacity: 0.8, marginTop: "1vh" }}>Industry leading metric</div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#999999", letterSpacing: "0.02em" }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#999999" }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/AppleMinimalPage4.tsx`)

```tsx
export function AppleMinimalPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        color: "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ fontSize: "1.2vw", fontWeight: 400, letterSpacing: "-0.01em", color: "#666666" }}>
          acme.co <span style={{ color: "#999999" }}>(by Example Company)</span>
        </div>
        <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#999999" }}>
          Next Steps
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", flex: 1, marginTop: "-5vh" }}>
        <h2
          style={{
            fontSize: "6vw",
            fontWeight: 200,
            letterSpacing: "-0.04em",
            margin: "0 0 2vh 0",
            lineHeight: 1.1,
          }}
        >
          Let's build the <span style={{ color: "#007AFF" }}>future</span>.
        </h2>
        <p
          style={{
            fontSize: "2vw",
            fontWeight: 300,
            color: "#666666",
            maxWidth: "50vw",
            marginBottom: "6vh",
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          Join us in redefining the industry standard.
        </p>

        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{
            padding: "1.5vw 4vw",
            backgroundColor: "#000000",
            color: "#FFFFFF",
            borderRadius: "4vw",
            fontSize: "1.5vw",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            cursor: "pointer"
          }}>
            Get Started
          </div>
          <div style={{
            padding: "1.5vw 4vw",
            backgroundColor: "#F5F5F7",
            color: "#000000",
            borderRadius: "4vw",
            fontSize: "1.5vw",
            fontWeight: 400,
            letterSpacing: "-0.01em",
            cursor: "pointer"
          }}>
            Contact Sales
          </div>
        </div>

        <div style={{ marginTop: "8vh", display: "flex", gap: "4vw", fontSize: "1.2vw", color: "#666666" }}>
          <div>hello@example.com</div>
          <div>+1 (555) 123-4567</div>
          <div>example.com</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#999999", letterSpacing: "0.02em" }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#999999" }}>
          04
        </div>
      </div>
    </div>
  );
}
```
