# Workspace Modern

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "WorkspaceModern" template features a clean and contemporary aesthetic, characterized by a minimalist design. The background color is a solid light gray (#F4F4F5), while the text colors include a dark gray (#18181B) for primary text, a medium gray (#71717A) for the year, and a lighter gray (#52525B) for the subtitle, with an accent color of a muted gray (#A1A1AA) for the footer text. The font families used are 'Inter' for general text, 'DM Mono' for the year, and 'Space Grotesk' for the main heading, emphasizing a modern and professional look. Key layout elements include a left text panel with structured spacing and a right image panel featuring a background image from the URL "/__mockup/photos/workspace-minimal.jpg," complemented by a subtle linear gradient overlay. The overall aesthetic feel can be described as "modern minimalist."

## Source Code

**Component:** `WorkspaceModern`

### Slide 1 — Title (`slide-styles/WorkspaceModern.tsx`)

```tsx
export function WorkspaceModern() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F4F5",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Left Text Panel */}
      <div
        style={{
          width: "50vw",
          height: "100vh",
          padding: "8vh 6vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#18181B", letterSpacing: "-0.02em" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 400, color: "#71717A", fontFamily: "'DM Mono', monospace" }}>
            2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div style={{ width: "3vw", height: "0.4vh", backgroundColor: "#18181B" }} />
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "6.5vw",
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#18181B",
              margin: 0,
              letterSpacing: "-0.04em",
            }}
          >
            Example
            <br />
            Deck
          </h1>
          <p
            style={{
              fontSize: "1.6vw",
              lineHeight: 1.5,
              color: "#52525B",
              fontWeight: 400,
              maxWidth: "35vw",
              margin: 0,
              marginTop: "1vh",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ fontSize: "0.9vw", color: "#A1A1AA", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Example Company, Inc. / Confidential
        </div>
      </div>

      {/* Right Image Panel */}
      <div
        style={{
          width: "50vw",
          height: "100vh",
          backgroundImage: 'url("/__mockup/photos/workspace-minimal.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(244,244,245,1) 0%, rgba(244,244,245,0) 10%)",
          }}
        />
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/WorkspaceModernPage2.tsx`)

```tsx
export function WorkspaceModernPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F4F5",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', sans-serif",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8vh" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#18181B", letterSpacing: "-0.02em" }}>
          acme.co
        </div>
        <div style={{ width: "3vw", height: "0.4vh", backgroundColor: "#18181B" }} />
      </div>

      <div style={{ display: "flex", flex: 1, gap: "8vw" }}>
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "4.5vw",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#18181B",
              margin: 0,
              letterSpacing: "-0.03em",
              marginBottom: "4vh",
            }}
          >
            The New Standard
            <br />
            in Work
          </h2>
          <p
            style={{
              fontSize: "1.5vw",
              lineHeight: 1.6,
              color: "#52525B",
              margin: 0,
              maxWidth: "90%",
            }}
          >
            We are redefining how teams collaborate by stripping away the unnecessary and focusing on what truly drives impact.
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh", paddingTop: "2vh" }}>
          <div>
            <h3 style={{ fontSize: "1.8vw", fontWeight: 600, color: "#18181B", margin: 0, marginBottom: "1vh" }}>
              Focus on Clarity
            </h3>
            <p style={{ fontSize: "1.2vw", lineHeight: 1.6, color: "#71717A", margin: 0 }}>
              Eliminate distractions and bring your most important work front and center. Our approach guarantees that signal always overcomes noise.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.8vw", fontWeight: 600, color: "#18181B", margin: 0, marginBottom: "1vh" }}>
              Built for Speed
            </h3>
            <p style={{ fontSize: "1.2vw", lineHeight: 1.6, color: "#71717A", margin: 0 }}>
              Performance isn't just a metric; it's a foundation. Deliver results faster with streamlined processes and modern tools.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.8vw", fontWeight: 600, color: "#18181B", margin: 0, marginBottom: "1vh" }}>
              Seamless Integration
            </h3>
            <p style={{ fontSize: "1.2vw", lineHeight: 1.6, color: "#71717A", margin: 0 }}>
              Work where you are comfortable. Connect your existing tools and workflows without skipping a beat.
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
        <div style={{ fontSize: "0.9vw", color: "#A1A1AA", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#71717A", fontFamily: "'DM Mono', monospace" }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/WorkspaceModernPage3.tsx`)

```tsx
export function WorkspaceModernPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F4F5",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', sans-serif",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8vh" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#18181B", letterSpacing: "-0.02em" }}>
          acme.co
        </div>
        <div style={{ width: "3vw", height: "0.4vh", backgroundColor: "#18181B" }} />
      </div>

      <div style={{ marginBottom: "6vh" }}>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "3.5vw",
            fontWeight: 700,
            color: "#18181B",
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          Quarterly Momentum
        </h2>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div
          style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
            border: "1px solid #E4E4E7",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "4vh 3vw",
            boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
          }}
        >
          <div style={{ fontSize: "1.2vw", color: "#71717A", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Active Users
          </div>
          <div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "7vw", fontWeight: 700, color: "#18181B", lineHeight: 1 }}>
              2.4M
            </div>
            <div style={{ fontSize: "1.5vw", color: "#10B981", fontWeight: 500, marginTop: "1vh" }}>
              +42% from last quarter
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
          <div
            style={{
              flex: 1,
              backgroundColor: "#18181B",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 3vw",
            }}
          >
            <div style={{ fontSize: "1vw", color: "#A1A1AA", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>
              Enterprise adoption
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 700, color: "#F4F4F5", lineHeight: 1 }}>
              64%
            </div>
          </div>

          <div
            style={{
              flex: 1,
              backgroundColor: "#E4E4E7",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 3vw",
            }}
          >
            <div style={{ fontSize: "1vw", color: "#71717A", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>
              Retention rate
            </div>
            <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "4vw", fontWeight: 700, color: "#18181B", lineHeight: 1 }}>
              98.2%
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "6vh" }}>
        <div style={{ fontSize: "0.9vw", color: "#A1A1AA", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#71717A", fontFamily: "'DM Mono', monospace" }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/WorkspaceModernPage4.tsx`)

```tsx
export function WorkspaceModernPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#18181B",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Inter', sans-serif",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#F4F4F5", letterSpacing: "-0.02em" }}>
          acme.co
        </div>
        <div style={{ width: "3vw", height: "0.4vh", backgroundColor: "#F4F4F5" }} />
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "6.5vw",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#F4F4F5",
            margin: 0,
            letterSpacing: "-0.04em",
            marginBottom: "3vh",
          }}
        >
          Let's build the
          <br />
          future together.
        </h2>
        
        <p
          style={{
            fontSize: "1.6vw",
            color: "#A1A1AA",
            maxWidth: "40vw",
            margin: 0,
            marginBottom: "6vh",
            lineHeight: 1.5,
          }}
        >
          Join us in transforming how modern teams operate. Reach out to start the conversation today.
        </p>

        <div
          style={{
            display: "inline-block",
            padding: "2vh 4vw",
            backgroundColor: "#F4F4F5",
            color: "#18181B",
            fontSize: "1.2vw",
            fontWeight: 600,
            fontFamily: "'DM Mono', monospace",
            letterSpacing: "-0.02em",
          }}
        >
          hello@acme.co
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontSize: "0.9vw", color: "#71717A", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#71717A", fontFamily: "'DM Mono', monospace" }}>
          04
        </div>
      </div>
    </div>
  );
}
```
