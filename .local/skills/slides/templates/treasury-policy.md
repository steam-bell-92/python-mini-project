# Treasury Policy

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "TreasuryPolicy" template features a modern and professional aesthetic, primarily using a clean layout with a strong contrast between dark and light elements. The background color is #FFFFFF (white), while the header section has a background color of #1C2541 (dark blue) with text in #FFFFFF (white). The main text color is #333333 (dark gray), with accent colors including #555555 (medium gray) and #888888 (light gray) for secondary text. The font family used is 'Inter' for general text and 'DM Mono' for specific sections, providing a contemporary and tech-savvy feel. Key layout elements include a circular decorative element in the header, positioned at the bottom right, and a grid layout for additional information in the lower section. There are no background images specified in the code. The overall aesthetic feel can be described as "modern corporate."

## Source Code

**Component:** `TreasuryPolicy`

### Slide 1 — Title (`slide-styles/TreasuryPolicy.tsx`)

```tsx
export function TreasuryPolicy() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        color: "#333333",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "35vh",
          backgroundColor: "#1C2541",
          color: "#FFFFFF",
          padding: "6vh 8vw",
          boxSizing: "border-box",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.8 }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.1em", opacity: 0.8 }}>
            acme.co
          </div>
        </div>

        <h1
          style={{
            fontSize: "4.5vw",
            fontWeight: 600,
            margin: 0,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}
        >
          Example Deck
        </h1>
        
        <div
          style={{
            position: "absolute",
            bottom: "-4vw",
            right: "8vw",
            width: "8vw",
            height: "8vw",
            borderRadius: "50%",
            border: "0.2vw solid #1C2541",
            backgroundColor: "#FFFFFF",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "6.5vw",
              height: "6.5vw",
              borderRadius: "50%",
              border: "0.1vw solid #1C2541",
              opacity: 0.5,
            }}
          />
        </div>
      </div>

      <div
        style={{
          height: "65vh",
          padding: "8vh 8vw",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: "1.8vw",
            fontWeight: 400,
            color: "#555555",
            margin: 0,
            maxWidth: "60vw",
            lineHeight: 1.5,
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        <div
          style={{
            marginTop: "auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4vh 8vw",
            fontFamily: "'DM Mono', monospace",
            fontSize: "1vw",
            maxWidth: "50vw",
            borderTop: "0.1vh solid #E0E0E0",
            paddingTop: "4vh",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <span style={{ color: "#888888", fontSize: "0.8vw", textTransform: "uppercase" }}>Prepared for:</span>
            <span style={{ fontWeight: 600 }}>Internal Review Committee</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <span style={{ color: "#888888", fontSize: "0.8vw", textTransform: "uppercase" }}>Date:</span>
            <span style={{ fontWeight: 600 }}>Q4 2026</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <span style={{ color: "#888888", fontSize: "0.8vw", textTransform: "uppercase" }}>Classification:</span>
            <span style={{ fontWeight: 600, color: "#1C2541" }}>CONFIDENTIAL</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <span style={{ color: "#888888", fontSize: "0.8vw", textTransform: "uppercase" }}>Reference:</span>
            <span style={{ fontWeight: 600 }}>POL-2026-001</span>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/TreasuryPolicyPage2.tsx`)

```tsx
export function TreasuryPolicyPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        color: "#333333",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "15vh",
          backgroundColor: "#1C2541",
          color: "#FFFFFF",
          padding: "4vh 8vw",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5vw", fontWeight: 600, margin: 0, letterSpacing: "-0.01em" }}>
          Core Objectives
        </h2>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.8 }}>
          POL-2026-001
        </div>
      </div>

      <div
        style={{
          flex: 1,
          padding: "8vh 8vw",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          gap: "6vw",
        }}
      >
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "0.9vw", textTransform: "uppercase" }}>01. Liquidity</div>
            <h3 style={{ fontSize: "1.8vw", fontWeight: 600, margin: 0, color: "#1C2541" }}>Maintain Optimal Cash Levels</h3>
            <p style={{ fontSize: "1.1vw", lineHeight: 1.6, color: "#555555", margin: 0 }}>
              Ensure sufficient liquid assets are available to meet all operating requirements, debt service obligations, and capital expenditures without incurring undue costs.
            </p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "0.9vw", textTransform: "uppercase" }}>02. Risk Management</div>
            <h3 style={{ fontSize: "1.8vw", fontWeight: 600, margin: 0, color: "#1C2541" }}>Mitigate Financial Exposure</h3>
            <p style={{ fontSize: "1.1vw", lineHeight: 1.6, color: "#555555", margin: 0 }}>
              Protect the company's financial assets from market volatility, credit risk, and operational vulnerabilities through systematic identification and hedging strategies.
            </p>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "0.9vw", textTransform: "uppercase" }}>03. Yield Optimization</div>
            <h3 style={{ fontSize: "1.8vw", fontWeight: 600, margin: 0, color: "#1C2541" }}>Maximize Return on Cash</h3>
            <p style={{ fontSize: "1.1vw", lineHeight: 1.6, color: "#555555", margin: 0 }}>
              Generate appropriate returns on excess cash balances within established risk parameters and liquidity constraints, prioritizing capital preservation.
            </p>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "#888888", fontSize: "0.9vw", textTransform: "uppercase" }}>04. Compliance</div>
            <h3 style={{ fontSize: "1.8vw", fontWeight: 600, margin: 0, color: "#1C2541" }}>Regulatory Adherence</h3>
            <p style={{ fontSize: "1.1vw", lineHeight: 1.6, color: "#555555", margin: 0 }}>
              Maintain strict compliance with all applicable laws, regulations, and internal governance frameworks regarding financial reporting and capital allocation.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          height: "8vh",
          padding: "0 8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "0.1vh solid #E0E0E0",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.85vw",
          color: "#888888",
          textTransform: "uppercase",
        }}
      >
        <span>Example Company, Inc.</span>
        <span>02</span>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/TreasuryPolicyPage3.tsx`)

```tsx
export function TreasuryPolicyPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        color: "#333333",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: "15vh",
          backgroundColor: "#1C2541",
          color: "#FFFFFF",
          padding: "4vh 8vw",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5vw", fontWeight: 600, margin: 0, letterSpacing: "-0.01em" }}>
          Allocation Targets
        </h2>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.8 }}>
          POL-2026-001
        </div>
      </div>

      <div
        style={{
          flex: 1,
          padding: "8vh 8vw",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "6vh",
        }}
      >
        <div style={{ display: "flex", gap: "4vw" }}>
          <div style={{ flex: 1, backgroundColor: "#F5F7FA", padding: "4vh", borderRadius: "0.5vw", borderLeft: "0.4vw solid #1C2541" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "#555555", fontSize: "1vw", marginBottom: "1vh" }}>Tier 1 Liquidity</div>
            <div style={{ fontSize: "3.5vw", fontWeight: 700, color: "#1C2541", marginBottom: "1vh" }}>45%</div>
            <div style={{ fontSize: "1vw", color: "#555555", lineHeight: 1.5 }}>Immediate access funds. Overnight deposits, money market funds, and highly liquid short-term instruments.</div>
          </div>
          <div style={{ flex: 1, backgroundColor: "#F5F7FA", padding: "4vh", borderRadius: "0.5vw", borderLeft: "0.4vw solid #5C6B89" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "#555555", fontSize: "1vw", marginBottom: "1vh" }}>Tier 2 Core</div>
            <div style={{ fontSize: "3.5vw", fontWeight: 700, color: "#1C2541", marginBottom: "1vh" }}>35%</div>
            <div style={{ fontSize: "1vw", color: "#555555", lineHeight: 1.5 }}>Short-duration fixed income, commercial paper, and government securities (1-3 year maturity).</div>
          </div>
          <div style={{ flex: 1, backgroundColor: "#F5F7FA", padding: "4vh", borderRadius: "0.5vw", borderLeft: "0.4vw solid #A0AABF" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", color: "#555555", fontSize: "1vw", marginBottom: "1vh" }}>Tier 3 Strategic</div>
            <div style={{ fontSize: "3.5vw", fontWeight: 700, color: "#1C2541", marginBottom: "1vh" }}>20%</div>
            <div style={{ fontSize: "1vw", color: "#555555", lineHeight: 1.5 }}>Longer-duration high-grade corporate bonds and diversified institutional mandates.</div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
          <h3 style={{ fontSize: "1.5vw", fontWeight: 600, margin: 0, color: "#1C2541" }}>Permitted Instrument Matrix</h3>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", borderTop: "0.2vh solid #1C2541" }}>
            {[
              { asset: "U.S. Treasury Securities", rating: "N/A", limit: "100%", maturity: "Up to 5 Years" },
              { asset: "Corporate Bonds", rating: "A- or higher", limit: "40%", maturity: "Up to 3 Years" },
              { asset: "Commercial Paper", rating: "A-1 / P-1", limit: "25%", maturity: "Up to 270 Days" },
              { asset: "Money Market Funds", rating: "AAA", limit: "50%", maturity: "Daily" },
            ].map((row, i) => (
              <div key={i} style={{ display: "flex", padding: "2vh 0", borderBottom: "0.1vh solid #E0E0E0", fontSize: "1.1vw", color: "#333333" }}>
                <div style={{ flex: 2, fontWeight: 500 }}>{row.asset}</div>
                <div style={{ flex: 1, fontFamily: "'DM Mono', monospace", fontSize: "0.95vw", color: "#555555" }}>{row.rating}</div>
                <div style={{ flex: 1, fontFamily: "'DM Mono', monospace", fontSize: "0.95vw", color: "#555555" }}>{row.limit}</div>
                <div style={{ flex: 1, fontFamily: "'DM Mono', monospace", fontSize: "0.95vw", color: "#555555" }}>{row.maturity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        style={{
          height: "8vh",
          padding: "0 8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "0.1vh solid #E0E0E0",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.85vw",
          color: "#888888",
          textTransform: "uppercase",
        }}
      >
        <span>Example Company, Inc.</span>
        <span>03</span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/TreasuryPolicyPage4.tsx`)

```tsx
export function TreasuryPolicyPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1C2541",
        fontFamily: "'Inter', sans-serif",
        color: "#FFFFFF",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          padding: "12vh 8vw",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "8vw",
            height: "8vw",
            borderRadius: "50%",
            border: "0.15vw solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "6vh",
          }}
        >
          <div
            style={{
              width: "5vw",
              height: "5vw",
              borderRadius: "50%",
              backgroundColor: "#FFFFFF",
            }}
          />
        </div>

        <h2 style={{ fontSize: "4vw", fontWeight: 600, margin: "0 0 3vh 0", letterSpacing: "-0.02em" }}>
          Ready for Review
        </h2>
        
        <p style={{ fontSize: "1.5vw", color: "rgba(255,255,255,0.7)", maxWidth: "40vw", margin: "0 0 8vh 0", lineHeight: 1.5 }}>
          The updated treasury policy draft requires final authorization from the board of directors before implementation in Q4.
        </p>

        <div style={{ display: "flex", gap: "2vw" }}>
          <div
            style={{
              padding: "2vh 4vw",
              backgroundColor: "#FFFFFF",
              color: "#1C2541",
              fontSize: "1.2vw",
              fontWeight: 600,
              borderRadius: "0.5vw",
              cursor: "pointer",
            }}
          >
            Acknowledge Receipt
          </div>
          <div
            style={{
              padding: "2vh 4vw",
              backgroundColor: "transparent",
              border: "0.15vw solid rgba(255,255,255,0.3)",
              color: "#FFFFFF",
              fontSize: "1.2vw",
              fontWeight: 600,
              borderRadius: "0.5vw",
              cursor: "pointer",
            }}
          >
            Request Revision
          </div>
        </div>
      </div>

      <div
        style={{
          height: "8vh",
          padding: "0 8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "0.1vh solid rgba(255,255,255,0.1)",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.85vw",
          color: "rgba(255,255,255,0.5)",
          textTransform: "uppercase",
        }}
      >
        <span>Example Company, Inc.</span>
        <span>04</span>
      </div>
    </div>
  );
}
```
