# Investor Memo

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "InvestorMemo" template presents a clean and modern aesthetic, characterized by a minimalist design. The background color is solid white (#FFFFFF), while the primary text color is a dark gray (#1C1C1C), with accents in lighter gray (#666666) and (#4A4A4A). The font family used is 'Inter' for the main text and 'DM Mono' for the footer details, providing a contemporary and professional look. Key layout elements include a horizontal line at the top, large text for the slide number (01) in a very light gray (#F5F5F5), and a structured footer with three columns for date, prepared by, and status information, separated by a light gray border (#E0E0E0). There are no background images used in this template. The overall aesthetic feel is "clean, modern, professional."

## Source Code

**Component:** `InvestorMemo`

### Slide 1 — Title (`slide-styles/InvestorMemo.tsx`)

```tsx
export function InvestorMemo() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        color: "#1C1C1C",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 8vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "84vw",
          height: "0.2vh",
          backgroundColor: "#1C1C1C",
          position: "absolute",
          top: "8vh",
          left: "8vw",
        }}
      />
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "2vh",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#666666" }}>
          Example Company, Inc.
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35vh",
          left: "8vw",
          fontSize: "25vw",
          fontWeight: 700,
          color: "#F5F5F5",
          lineHeight: 0.8,
          zIndex: 0,
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
      >
        01
      </div>

      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 1, position: "relative", marginTop: "10vh" }}>
        <h1
          style={{
            fontSize: "6vw",
            fontWeight: 600,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "70vw",
          }}
        >
          Example Deck
        </h1>
        <p
          style={{
            fontSize: "1.8vw",
            fontWeight: 400,
            color: "#4A4A4A",
            marginTop: "3vh",
            maxWidth: "50vw",
            lineHeight: 1.4,
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8vw",
          borderTop: "0.1vh solid #E0E0E0",
          paddingTop: "3vh",
          marginTop: "auto",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#4A4A4A",
          zIndex: 1,
        }}
      >
        <div>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Date</div>
          <div>October 2026</div>
        </div>
        <div>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Prepared By</div>
          <div>Strategy Group</div>
        </div>
        <div>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Status</div>
          <div style={{ color: "#1C1C1C", fontWeight: 600 }}>Confidential</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/InvestorMemoPage2.tsx`)

```tsx
export function InvestorMemoPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        color: "#1C1C1C",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 8vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "84vw",
          height: "0.2vh",
          backgroundColor: "#1C1C1C",
          position: "absolute",
          top: "8vh",
          left: "8vw",
        }}
      />
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "2vh",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#666666" }}>
          Strategic Focus
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35vh",
          left: "8vw",
          fontSize: "25vw",
          fontWeight: 700,
          color: "#F5F5F5",
          lineHeight: 0.8,
          zIndex: 0,
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
      >
        02
      </div>

      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", zIndex: 1, position: "relative", marginTop: "8vh" }}>
        <h2 style={{ fontSize: "3.5vw", fontWeight: 600, margin: "0 0 6vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Key Objectives
        </h2>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "4vh", maxWidth: "60vw" }}>
          <div style={{ display: "flex", gap: "3vw" }}>
            <div style={{ fontWeight: 600, fontSize: "1.4vw", width: "16vw", letterSpacing: "-0.01em" }}>Market Expansion</div>
            <div style={{ fontSize: "1.3vw", lineHeight: 1.5, color: "#4A4A4A", flex: 1 }}>Aggressively target emerging markets in APAC and EMEA, establishing local presence and localized product offerings.</div>
          </div>
          
          <div style={{ width: "100%", height: "0.1vh", backgroundColor: "#E0E0E0" }} />
          
          <div style={{ display: "flex", gap: "3vw" }}>
            <div style={{ fontWeight: 600, fontSize: "1.4vw", width: "16vw", letterSpacing: "-0.01em" }}>Product Innovation</div>
            <div style={{ fontSize: "1.3vw", lineHeight: 1.5, color: "#4A4A4A", flex: 1 }}>Launch three new major product lines leveraging our proprietary models to solve core enterprise workflow constraints.</div>
          </div>
          
          <div style={{ width: "100%", height: "0.1vh", backgroundColor: "#E0E0E0" }} />
          
          <div style={{ display: "flex", gap: "3vw" }}>
            <div style={{ fontWeight: 600, fontSize: "1.4vw", width: "16vw", letterSpacing: "-0.01em" }}>Operational Efficiency</div>
            <div style={{ fontSize: "1.3vw", lineHeight: 1.5, color: "#4A4A4A", flex: 1 }}>Streamline internal supply chain operations to reduce overhead costs by 15% over the next four financial quarters.</div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8vw",
          borderTop: "0.1vh solid #E0E0E0",
          paddingTop: "3vh",
          marginTop: "auto",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#4A4A4A",
          zIndex: 1,
        }}
      >
        <div>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Date</div>
          <div>October 2026</div>
        </div>
        <div>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Prepared By</div>
          <div>Strategy Group</div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Page</div>
          <div style={{ color: "#1C1C1C", fontWeight: 600 }}>02</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/InvestorMemoPage3.tsx`)

```tsx
export function InvestorMemoPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        color: "#1C1C1C",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 8vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "84vw",
          height: "0.2vh",
          backgroundColor: "#1C1C1C",
          position: "absolute",
          top: "8vh",
          left: "8vw",
        }}
      />
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "2vh",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#666666" }}>
          Performance Metrics
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35vh",
          left: "8vw",
          fontSize: "25vw",
          fontWeight: 700,
          color: "#F5F5F5",
          lineHeight: 0.8,
          zIndex: 0,
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
      >
        03
      </div>

      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", zIndex: 1, position: "relative", marginTop: "8vh" }}>
        <h2 style={{ fontSize: "3.5vw", fontWeight: 600, margin: "0 0 6vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Financial Trajectory
        </h2>
        
        <div style={{ display: "flex", gap: "6vw", marginBottom: "8vh" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", borderLeft: "0.2vh solid #1C1C1C", paddingLeft: "1.5vw" }}>
            <div style={{ fontSize: "1vw", color: "#666666", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh", fontWeight: 600 }}>ARR Growth</div>
            <div style={{ fontSize: "4.5vw", fontWeight: 600, lineHeight: 1, color: "#1C1C1C", letterSpacing: "-0.03em" }}>$42M</div>
            <div style={{ fontSize: "1.1vw", color: "#4A4A4A", marginTop: "1.5vh" }}>+124% YoY</div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", borderLeft: "0.2vh solid #1C1C1C", paddingLeft: "1.5vw" }}>
            <div style={{ fontSize: "1vw", color: "#666666", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh", fontWeight: 600 }}>Net Retention</div>
            <div style={{ fontSize: "4.5vw", fontWeight: 600, lineHeight: 1, color: "#1C1C1C", letterSpacing: "-0.03em" }}>138%</div>
            <div style={{ fontSize: "1.1vw", color: "#4A4A4A", marginTop: "1.5vh" }}>Top quartile standard</div>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", borderLeft: "0.2vh solid #1C1C1C", paddingLeft: "1.5vw" }}>
            <div style={{ fontSize: "1vw", color: "#666666", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh", fontWeight: 600 }}>Gross Margin</div>
            <div style={{ fontSize: "4.5vw", fontWeight: 600, lineHeight: 1, color: "#1C1C1C", letterSpacing: "-0.03em" }}>82%</div>
            <div style={{ fontSize: "1.1vw", color: "#4A4A4A", marginTop: "1.5vh" }}>+400bps improvement</div>
          </div>
        </div>

        <div style={{ width: "60vw", height: "18vh", backgroundColor: "#FAFAFA", position: "relative", display: "flex", alignItems: "flex-end", padding: "0 2vw", borderBottom: "0.1vh solid #1C1C1C" }}>
           <div style={{ width: "8vw", height: "30%", backgroundColor: "#E0E0E0", marginRight: "3vw" }} />
           <div style={{ width: "8vw", height: "45%", backgroundColor: "#C0C0C0", marginRight: "3vw" }} />
           <div style={{ width: "8vw", height: "65%", backgroundColor: "#888888", marginRight: "3vw" }} />
           <div style={{ width: "8vw", height: "90%", backgroundColor: "#1C1C1C", marginRight: "3vw" }} />
        </div>
        <div style={{ display: "flex", padding: "1.5vh 2vw 0 2vw", width: "60vw" }}>
           <div style={{ width: "8vw", marginRight: "3vw", textAlign: "center", fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#666666" }}>Q1</div>
           <div style={{ width: "8vw", marginRight: "3vw", textAlign: "center", fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#666666" }}>Q2</div>
           <div style={{ width: "8vw", marginRight: "3vw", textAlign: "center", fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#666666" }}>Q3</div>
           <div style={{ width: "8vw", marginRight: "3vw", textAlign: "center", fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#1C1C1C", fontWeight: 600 }}>Q4</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8vw",
          borderTop: "0.1vh solid #E0E0E0",
          paddingTop: "3vh",
          marginTop: "auto",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#4A4A4A",
          zIndex: 1,
        }}
      >
        <div>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Date</div>
          <div>October 2026</div>
        </div>
        <div>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Prepared By</div>
          <div>Strategy Group</div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Page</div>
          <div style={{ color: "#1C1C1C", fontWeight: 600 }}>03</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/InvestorMemoPage4.tsx`)

```tsx
export function InvestorMemoPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        color: "#1C1C1C",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 8vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "84vw",
          height: "0.2vh",
          backgroundColor: "#1C1C1C",
          position: "absolute",
          top: "8vh",
          left: "8vw",
        }}
      />
      
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "2vh",
        }}
      >
        <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 400, color: "#666666" }}>
          Next Steps
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "35vh",
          left: "8vw",
          fontSize: "25vw",
          fontWeight: 700,
          color: "#F5F5F5",
          lineHeight: 0.8,
          zIndex: 0,
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
      >
        04
      </div>

      <div style={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 1, position: "relative", marginTop: "4vh" }}>
        <h2 style={{ fontSize: "5vw", fontWeight: 600, margin: "0 0 3vh 0", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
          Ready to scale.
        </h2>
        <p style={{ fontSize: "1.8vw", lineHeight: 1.5, color: "#4A4A4A", maxWidth: "45vw", marginBottom: "8vh" }}>
          We are currently raising a $15M Series B to accelerate our product roadmap and scale our GTM motion globally. Join us on this journey.
        </p>
        
        <div style={{ display: "flex", gap: "10vw" }}>
          <div>
            <div style={{ fontSize: "1vw", color: "#888888", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh", fontWeight: 600 }}>Reach Out</div>
            <div style={{ fontSize: "1.6vw", fontWeight: 600, color: "#1C1C1C" }}>partners@acme.co</div>
            <div style={{ fontSize: "1.3vw", color: "#4A4A4A", marginTop: "1vh", fontFamily: "'DM Mono', monospace" }}>+1 (555) 123-4567</div>
          </div>
          <div>
            <div style={{ fontSize: "1vw", color: "#888888", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh", fontWeight: 600 }}>Office</div>
            <div style={{ fontSize: "1.3vw", color: "#4A4A4A", lineHeight: 1.6 }}>
              100 Innovation Drive<br/>
              Suite 400<br/>
              San Francisco, CA 94103
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "8vw",
          borderTop: "0.1vh solid #E0E0E0",
          paddingTop: "3vh",
          marginTop: "auto",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#4A4A4A",
          zIndex: 1,
        }}
      >
        <div>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Date</div>
          <div>October 2026</div>
        </div>
        <div>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Prepared By</div>
          <div>Strategy Group</div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div style={{ color: "#888888", marginBottom: "0.5vh", textTransform: "uppercase", fontSize: "0.7vw" }}>Page</div>
          <div style={{ color: "#1C1C1C", fontWeight: 600 }}>04</div>
        </div>
      </div>
    </div>
  );
}
```
