# Healthcare Clarity

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "HealthcareClarity" template presents a clean and modern aesthetic, characterized by a minimalist design. The background color is solid white (#FFFFFF), while a decorative circular element in the background features a light teal border (#2A7B7B) with 20% opacity. Text colors include a dark navy (#1A1A2E) for the main heading, a muted teal (#2A7B7B) for the company name, and a soft grayish-blue (#4A4A68) for the subtitle. The font family used throughout is 'Inter', with bold weights for headings and lighter weights for body text. Key layout elements include a large circular shape positioned off-screen, a structured layout with a header, main content area, and a footer that contrasts with the background using a teal color (#2A7B7B). The overall aesthetic feel is "clean, modern, professional."

## Source Code

**Component:** `HealthcareClarity`

### Slide 1 — Title (`slide-styles/HealthcareClarity.tsx`)

```tsx
export function HealthcareClarity() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          right: "-10vw",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          border: "0.2vw solid #2A7B7B",
          opacity: 0.2,
        }}
      />
      
      <div
        style={{
          padding: "8vh 8vw",
          height: "90vh",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "absolute", top: "8vh", left: "8vw" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#2A7B7B", letterSpacing: "0.05em" }}>acme.co</div>
        </div>

        <div style={{ zIndex: 1 }}>
          <h1
            style={{
              fontSize: "7vw",
              fontWeight: 600,
              color: "#1A1A2E",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Example Deck
          </h1>
          
          <div style={{ display: "flex", alignItems: "center", marginTop: "4vh" }}>
            <div style={{ width: "4vw", height: "0.3vh", backgroundColor: "#2A7B7B", marginRight: "2vw" }} />
            <p
              style={{
                fontSize: "1.8vw",
                fontWeight: 400,
                color: "#4A4A68",
                margin: 0,
                maxWidth: "60vw",
                lineHeight: 1.5,
              }}
            >
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "10vh",
          backgroundColor: "#2A7B7B",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 8vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.05em" }}>
          Example Company, Inc.
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#FFFFFF", opacity: 0.8 }}>
          Confidential • 2026
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/HealthcareClarityPage2.tsx`)

```tsx
export function HealthcareClarityPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          right: "-10vw",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          border: "0.2vw solid #2A7B7B",
          opacity: 0.2,
        }}
      />
      
      <div
        style={{
          padding: "10vh 8vw",
          height: "90vh",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6vh" }}>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2A7B7B", letterSpacing: "0.05em", marginBottom: "1vh" }}>01. OUR APPROACH</div>
            <h2
              style={{
                fontSize: "4vw",
                fontWeight: 600,
                color: "#1A1A2E",
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Systemic Solutions
            </h2>
          </div>
        </div>

        <div style={{ display: "flex", gap: "4vw", marginTop: "2vh", zIndex: 1 }}>
          <div style={{ flex: 1, backgroundColor: "#F8F9FA", padding: "4vh 3vw", borderRadius: "1vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw", backgroundColor: "#2A7B7B", opacity: 0.8, marginBottom: "3vh" }} />
            <h3 style={{ fontSize: "1.8vw", fontWeight: 600, color: "#1A1A2E", margin: "0 0 1.5vh 0" }}>Patient-Centric Care</h3>
            <p style={{ fontSize: "1.2vw", color: "#4A4A68", margin: 0, lineHeight: 1.6 }}>
              Our methodology places the patient at the core, ensuring personalized treatment plans and enhanced overall outcomes.
            </p>
          </div>

          <div style={{ flex: 1, backgroundColor: "#F8F9FA", padding: "4vh 3vw", borderRadius: "1vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw", backgroundColor: "#2A7B7B", opacity: 0.8, marginBottom: "3vh" }} />
            <h3 style={{ fontSize: "1.8vw", fontWeight: 600, color: "#1A1A2E", margin: "0 0 1.5vh 0" }}>Data Integration</h3>
            <p style={{ fontSize: "1.2vw", color: "#4A4A68", margin: 0, lineHeight: 1.6 }}>
              Seamlessly connecting fragmented health records into a singular, comprehensive longitudinal patient timeline.
            </p>
          </div>

          <div style={{ flex: 1, backgroundColor: "#F8F9FA", padding: "4vh 3vw", borderRadius: "1vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "0.5vw", backgroundColor: "#2A7B7B", opacity: 0.8, marginBottom: "3vh" }} />
            <h3 style={{ fontSize: "1.8vw", fontWeight: 600, color: "#1A1A2E", margin: "0 0 1.5vh 0" }}>Proactive Analytics</h3>
            <p style={{ fontSize: "1.2vw", color: "#4A4A68", margin: 0, lineHeight: 1.6 }}>
              Leveraging advanced algorithms to predict health risks and intervene before acute incidents occur.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "10vh",
          backgroundColor: "#2A7B7B",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 8vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.05em" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#FFFFFF", opacity: 0.8 }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/HealthcareClarityPage3.tsx`)

```tsx
export function HealthcareClarityPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          left: "-10vw",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          border: "0.2vw solid #2A7B7B",
          opacity: 0.15,
        }}
      />
      
      <div
        style={{
          padding: "10vh 8vw",
          height: "90vh",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ marginBottom: "6vh" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2A7B7B", letterSpacing: "0.05em", marginBottom: "1vh" }}>02. THE METRICS</div>
          <h2
            style={{
              fontSize: "4vw",
              fontWeight: 600,
              color: "#1A1A2E",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Measurable Impact
          </h2>
        </div>

        <div style={{ display: "flex", gap: "6vw", zIndex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
            <div style={{ borderBottom: "0.2vh solid #E2E8F0", paddingBottom: "3vh" }}>
              <div style={{ fontSize: "4vw", fontWeight: 700, color: "#2A7B7B", lineHeight: 1 }}>45%</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#1A1A2E", marginTop: "1vh" }}>Reduction in Readmissions</div>
              <div style={{ fontSize: "1vw", color: "#4A4A68", marginTop: "0.5vh" }}>Across partnered facilities within 12 months.</div>
            </div>
            
            <div style={{ borderBottom: "0.2vh solid #E2E8F0", paddingBottom: "3vh" }}>
              <div style={{ fontSize: "4vw", fontWeight: 700, color: "#2A7B7B", lineHeight: 1 }}>2.4M</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#1A1A2E", marginTop: "1vh" }}>Patient Records Unified</div>
              <div style={{ fontSize: "1vw", color: "#4A4A68", marginTop: "0.5vh" }}>Creating a cohesive data lake for research.</div>
            </div>

            <div style={{ borderBottom: "0.2vh solid #E2E8F0", paddingBottom: "3vh" }}>
              <div style={{ fontSize: "4vw", fontWeight: 700, color: "#2A7B7B", lineHeight: 1 }}>18%</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#1A1A2E", marginTop: "1vh" }}>Cost Efficiency</div>
              <div style={{ fontSize: "1vw", color: "#4A4A68", marginTop: "0.5vh" }}>Savings on operational overhead and redundant testing.</div>
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", alignItems: "flex-end" }}>
            <div style={{ width: "100%", height: "45vh", backgroundColor: "#F8F9FA", borderRadius: "1vw", position: "relative", overflow: "hidden", display: "flex", alignItems: "flex-end", padding: "4vw", gap: "2vw", boxSizing: "border-box" }}>
              <div style={{ width: "100%", height: "40%", backgroundColor: "#2A7B7B", opacity: 0.4, borderRadius: "0.5vw 0.5vw 0 0" }} />
              <div style={{ width: "100%", height: "65%", backgroundColor: "#2A7B7B", opacity: 0.7, borderRadius: "0.5vw 0.5vw 0 0" }} />
              <div style={{ width: "100%", height: "85%", backgroundColor: "#2A7B7B", borderRadius: "0.5vw 0.5vw 0 0" }} />
              <div style={{ width: "100%", height: "95%", backgroundColor: "#1A1A2E", borderRadius: "0.5vw 0.5vw 0 0" }} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "10vh",
          backgroundColor: "#2A7B7B",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 8vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.05em" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#FFFFFF", opacity: 0.8 }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/HealthcareClarityPage4.tsx`)

```tsx
export function HealthcareClarityPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vw",
          borderRadius: "50%",
          border: "0.2vw solid #2A7B7B",
          opacity: 0.1,
        }}
      />
      
      <div
        style={{
          padding: "0 8vw",
          height: "90vh",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        <div style={{ width: "6vw", height: "0.4vh", backgroundColor: "#2A7B7B", marginBottom: "4vh" }} />
        
        <h2
          style={{
            fontSize: "5vw",
            fontWeight: 600,
            color: "#1A1A2E",
            margin: "0 0 3vh 0",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
          }}
        >
          Ready to Transform Healthcare?
        </h2>
        
        <p
          style={{
            fontSize: "1.8vw",
            fontWeight: 400,
            color: "#4A4A68",
            margin: "0 0 6vh 0",
            maxWidth: "60vw",
            lineHeight: 1.5,
          }}
        >
          Join us in building the next generation of patient-centric, data-driven medical infrastructure. Let&apos;s talk about integration.
        </p>

        <div style={{ display: "flex", gap: "3vw" }}>
          <div
            style={{
              padding: "2vh 4vw",
              backgroundColor: "#2A7B7B",
              color: "#FFFFFF",
              fontSize: "1.2vw",
              fontWeight: 600,
              borderRadius: "0.5vw",
              cursor: "pointer",
              letterSpacing: "0.02em",
            }}
          >
            Contact Sales
          </div>
          <div
            style={{
              padding: "2vh 4vw",
              backgroundColor: "transparent",
              color: "#2A7B7B",
              border: "0.2vw solid #2A7B7B",
              fontSize: "1.2vw",
              fontWeight: 600,
              borderRadius: "0.5vw",
              cursor: "pointer",
              letterSpacing: "0.02em",
            }}
          >
            View Documentation
          </div>
        </div>

        <div style={{ marginTop: "8vh", display: "flex", gap: "4vw", color: "#4A4A68", fontSize: "1vw", fontWeight: 500 }}>
          <div>hello@acme.co</div>
          <div>+1 (555) 123-4567</div>
          <div>www.acme.co</div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: "10vh",
          backgroundColor: "#2A7B7B",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 8vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#FFFFFF", letterSpacing: "0.05em" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, color: "#FFFFFF", opacity: 0.8 }}>
          04
        </div>
      </div>
    </div>
  );
}
```
