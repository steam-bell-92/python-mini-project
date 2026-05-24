# Private Equity Dark

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "PrivateEquityDark" template features a sleek, modern aesthetic with a dark theme. The background color is a solid #141414, while an accent line at the bottom is colored #A0785A. The primary text color is #FFFFFF, with a secondary text color of #888888 for the paragraph and #666666 for the footer details. The font family used is 'Inter', sans-serif, with varying weights for headings and body text. Key layout elements include a centered title and subtitle in a flexbox arrangement, with a decorative horizontal line positioned at the bottom of the main content area. The overall aesthetic feel is "sleek, modern, dark."

## Source Code

**Component:** `PrivateEquityDark`

### Slide 1 — Title (`slide-styles/PrivateEquityDark.tsx`)

```tsx
export function PrivateEquityDark() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#141414",
        fontFamily: "'Inter', sans-serif",
        color: "#FFFFFF",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "70vh",
          left: "0",
          width: "100vw",
          height: "0.1vh",
          backgroundColor: "#A0785A",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          padding: "0 15vw",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "5.5vw",
            fontWeight: 300,
            margin: 0,
            letterSpacing: "0.02em",
            lineHeight: 1.2,
          }}
        >
          Example Deck
        </h1>
        <p
          style={{
            fontSize: "1.4vw",
            fontWeight: 400,
            color: "#888888",
            marginTop: "4vh",
            maxWidth: "50vw",
            lineHeight: 1.5,
            letterSpacing: "0.01em",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div
        style={{
          height: "30vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 500,
            color: "#666666",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1vh",
          }}
        >
          <span style={{ color: "#A0785A" }}>acme.co</span>
          <span>Example Company, Inc.</span>
          <span>Confidential &bull; 2026</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/PrivateEquityDarkPage2.tsx`)

```tsx
export function PrivateEquityDarkPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#141414",
        fontFamily: "'Inter', sans-serif",
        color: "#FFFFFF",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "0",
          width: "100vw",
          height: "0.1vh",
          backgroundColor: "#A0785A",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "15vh",
          padding: "0 10vw",
        }}
      >
        <h2
          style={{
            fontSize: "2.5vw",
            fontWeight: 300,
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          Core Investment Strategy
        </h2>
      </div>

      {/* Body */}
      <div
        style={{
          display: "flex",
          height: "75vh",
          padding: "8vh 10vw",
          gap: "8vw",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
          <div>
            <h3 style={{ fontSize: "1.5vw", fontWeight: 400, color: "#A0785A", margin: "0 0 1vh 0", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Value Creation
            </h3>
            <p style={{ fontSize: "1.2vw", fontWeight: 400, color: "#888888", margin: 0, lineHeight: 1.6 }}>
              We identify market inefficiencies and apply rigorous operational improvements to unlock sustainable, long-term value across our portfolio companies.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: "1.5vw", fontWeight: 400, color: "#A0785A", margin: "0 0 1vh 0", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              Strategic Acquisitions
            </h3>
            <p style={{ fontSize: "1.2vw", fontWeight: 400, color: "#888888", margin: 0, lineHeight: 1.6 }}>
              Targeting established middle-market enterprises with defensible market positions and untapped potential for geographic expansion and digital transformation.
            </p>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh", borderLeft: "0.1vh solid #333333", paddingLeft: "5vw" }}>
           <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "3vh" }}>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#A0785A", marginTop: "0.8vh", flexShrink: 0 }} />
              <span style={{ fontSize: "1.3vw", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.5 }}>
                Proprietary deal sourcing network prioritizing off-market opportunities.
              </span>
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#A0785A", marginTop: "0.8vh", flexShrink: 0 }} />
              <span style={{ fontSize: "1.3vw", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.5 }}>
                Data-driven due diligence and comprehensive risk mitigation frameworks.
              </span>
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#A0785A", marginTop: "0.8vh", flexShrink: 0 }} />
              <span style={{ fontSize: "1.3vw", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.5 }}>
                Active board-level engagement and deep management partnerships.
              </span>
            </li>
            <li style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#A0785A", marginTop: "0.8vh", flexShrink: 0 }} />
              <span style={{ fontSize: "1.3vw", fontWeight: 400, color: "#FFFFFF", lineHeight: 1.5 }}>
                Disciplined exit strategies maximizing capital returns.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "10vw",
          right: "10vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.8vw",
          fontWeight: 500,
          color: "#666666",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        <span>Confidential &bull; 2026</span>
        <span style={{ color: "#A0785A" }}>02</span>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/PrivateEquityDarkPage3.tsx`)

```tsx
export function PrivateEquityDarkPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#141414",
        fontFamily: "'Inter', sans-serif",
        color: "#FFFFFF",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "0",
          width: "100vw",
          height: "0.1vh",
          backgroundColor: "#A0785A",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "15vh",
          padding: "0 10vw",
        }}
      >
        <h2
          style={{
            fontSize: "2.5vw",
            fontWeight: 300,
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          Performance Metrics
        </h2>
      </div>

      {/* Body */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "75vh",
          padding: "8vh 10vw",
          gap: "6vh",
        }}
      >
        {/* Top Stats */}
        <div style={{ display: "flex", justifyContent: "space-between", gap: "4vw" }}>
          <div style={{ flex: 1, backgroundColor: "#1A1A1A", padding: "4vh 3vw", borderTop: "0.3vh solid #A0785A" }}>
            <div style={{ fontSize: "1vw", fontWeight: 500, color: "#888888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2vh" }}>AUM</div>
            <div style={{ fontSize: "4vw", fontWeight: 300, color: "#FFFFFF", lineHeight: 1 }}>$4.2B</div>
            <div style={{ fontSize: "1vw", color: "#666666", marginTop: "1vh" }}>Total Assets Under Management</div>
          </div>
          <div style={{ flex: 1, backgroundColor: "#1A1A1A", padding: "4vh 3vw", borderTop: "0.3vh solid #333333" }}>
            <div style={{ fontSize: "1vw", fontWeight: 500, color: "#888888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2vh" }}>Gross IRR</div>
            <div style={{ fontSize: "4vw", fontWeight: 300, color: "#FFFFFF", lineHeight: 1 }}>28.5%</div>
            <div style={{ fontSize: "1vw", color: "#666666", marginTop: "1vh" }}>Historical Average Returns</div>
          </div>
          <div style={{ flex: 1, backgroundColor: "#1A1A1A", padding: "4vh 3vw", borderTop: "0.3vh solid #333333" }}>
            <div style={{ fontSize: "1vw", fontWeight: 500, color: "#888888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2vh" }}>MOIC</div>
            <div style={{ fontSize: "4vw", fontWeight: 300, color: "#FFFFFF", lineHeight: 1 }}>2.9x</div>
            <div style={{ fontSize: "1vw", color: "#666666", marginTop: "1vh" }}>Multiple on Invested Capital</div>
          </div>
        </div>

        {/* Data Chart / Comparison */}
        <div style={{ display: "flex", flex: 1, borderTop: "0.1vh solid #333333", paddingTop: "5vh" }}>
          <div style={{ flex: 1 }}>
             <h3 style={{ fontSize: "1.2vw", fontWeight: 400, color: "#FFFFFF", margin: "0 0 3vh 0" }}>Historical Growth Trajectory</h3>
             <div style={{ display: "flex", alignItems: "flex-end", height: "20vh", gap: "2vw" }}>
               {[40, 60, 50, 80, 100].map((height, i) => (
                 <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                   <div style={{ width: "100%", height: `${height}%`, backgroundColor: i === 4 ? "#A0785A" : "#333333", transition: "height 0.3s ease" }} />
                   <span style={{ fontSize: "0.9vw", color: "#666666" }}>20{21 + i}</span>
                 </div>
               ))}
             </div>
          </div>
          <div style={{ flex: 1, paddingLeft: "5vw", borderLeft: "0.1vh solid #333333", marginLeft: "5vw" }}>
             <h3 style={{ fontSize: "1.2vw", fontWeight: 400, color: "#FFFFFF", margin: "0 0 3vh 0" }}>Capital Allocation</h3>
             <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
                {[
                  { label: "Technology & Software", val: "45%" },
                  { label: "Healthcare IT", val: "30%" },
                  { label: "Business Services", val: "25%" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.1vh solid #222222", paddingBottom: "1vh" }}>
                    <span style={{ fontSize: "1.1vw", color: "#888888" }}>{item.label}</span>
                    <span style={{ fontSize: "1.1vw", color: "#FFFFFF" }}>{item.val}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "10vw",
          right: "10vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.8vw",
          fontWeight: 500,
          color: "#666666",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        <span>Confidential &bull; 2026</span>
        <span style={{ color: "#A0785A" }}>03</span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/PrivateEquityDarkPage4.tsx`)

```tsx
export function PrivateEquityDarkPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#141414",
        fontFamily: "'Inter', sans-serif",
        color: "#FFFFFF",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "0",
          width: "100vw",
          height: "0.1vh",
          backgroundColor: "#A0785A",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "15vh",
          padding: "0 10vw",
        }}
      >
        <h2
          style={{
            fontSize: "2.5vw",
            fontWeight: 300,
            margin: 0,
            letterSpacing: "0.02em",
          }}
        >
          Executive Summary
        </h2>
      </div>

      {/* Body */}
      <div
        style={{
          display: "flex",
          height: "75vh",
          padding: "10vh 10vw",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h3 style={{ fontSize: "2.2vw", fontWeight: 300, color: "#FFFFFF", margin: "0 0 4vh 0", lineHeight: 1.3, maxWidth: "35vw" }}>
              Partnering with exceptional management teams to build enduring value.
            </h3>
            <p style={{ fontSize: "1.2vw", fontWeight: 400, color: "#888888", margin: 0, lineHeight: 1.6, maxWidth: "30vw" }}>
              Our dedicated team of operating partners and investment professionals are ready to discuss potential opportunities and next steps.
            </p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 500, color: "#666666", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Contact Information
            </div>
            <div style={{ fontSize: "1.2vw", color: "#FFFFFF" }}>investments@example.co</div>
            <div style={{ fontSize: "1.2vw", color: "#888888" }}>+1 (555) 123-4567</div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
          <div style={{ width: "30vw", padding: "5vh 4vw", backgroundColor: "#1A1A1A", border: "0.1vh solid #333333", display: "flex", flexDirection: "column", gap: "4vh" }}>
            <h4 style={{ fontSize: "1.5vw", fontWeight: 400, color: "#A0785A", margin: 0 }}>Next Steps</h4>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "2.5vh" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ fontSize: "1vw", color: "#A0785A", fontWeight: 300 }}>01</div>
                <div style={{ fontSize: "1.1vw", color: "#FFFFFF" }}>Initial Discovery Meeting</div>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ fontSize: "1vw", color: "#666666", fontWeight: 300 }}>02</div>
                <div style={{ fontSize: "1.1vw", color: "#888888" }}>Data Room Access & Review</div>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ fontSize: "1vw", color: "#666666", fontWeight: 300 }}>03</div>
                <div style={{ fontSize: "1.1vw", color: "#888888" }}>Preliminary Term Sheet</div>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
                <div style={{ fontSize: "1vw", color: "#666666", fontWeight: 300 }}>04</div>
                <div style={{ fontSize: "1.1vw", color: "#888888" }}>Formal Due Diligence</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "10vw",
          right: "10vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.8vw",
          fontWeight: 500,
          color: "#666666",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        <span>Confidential &bull; 2026</span>
        <span style={{ color: "#A0785A" }}>04</span>
      </div>
    </div>
  );
}
```
