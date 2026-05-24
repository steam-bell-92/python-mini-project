# Isometric 3D Data

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "IsometricData" template features a modern, sleek aesthetic with a dark theme. The background color is a solid #0F172A, complemented by a subtle grid pattern created with a linear gradient of rgba(255,255,255,0.03). Text elements utilize white (#FFFFFF) for primary content, with accents in #14B8A6 for highlights and #94A3B8 for secondary text. The font family used is 'DM Sans' for the main body and 'Inter' for smaller text, providing a clean and contemporary look. Key layout elements include a left content area with a rounded accent box, a prominent header, and a right illustration area featuring a blurred green circle behind an isometric data dashboard image sourced from "/__mockup/images/illust-isometric-data-nobg.png". The overall aesthetic feel is modern and professional.

## Source Code

**Component:** `IsometricData`

### Slide 1 — Title (`slide-styles/IsometricData.tsx`)

```tsx
export function IsometricData() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F172A",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#FFFFFF",
        display: "flex",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "4vw 4vh",
          pointerEvents: "none",
        }}
      />
      
      {/* Top Header */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "5vw",
          right: "5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ color: "#14B8A6", fontSize: "1vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Example Company
        </div>
        <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif" }}>
          2026
        </div>
      </div>

      {/* Left Content Area */}
      <div
        style={{
          width: "50vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "8vw",
          paddingRight: "4vw",
          position: "relative",
          zIndex: 5,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5vh 1vw",
            backgroundColor: "rgba(20, 184, 166, 0.1)",
            border: "1px solid rgba(20, 184, 166, 0.2)",
            borderRadius: "2vw",
            marginBottom: "3vh",
            alignSelf: "flex-start",
          }}
        >
          <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#14B8A6", marginRight: "0.5vw" }} />
          <span style={{ color: "#14B8A6", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Platform Overview
          </span>
        </div>
        
        <h1
          style={{
            fontSize: "6vw",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: "0 0 2vh 0",
            letterSpacing: "-0.02em",
          }}
        >
          DataStack
        </h1>
        
        <p
          style={{
            fontSize: "1.8vw",
            color: "#94A3B8",
            margin: "0 0 4vh 0",
            lineHeight: 1.4,
            fontWeight: 400,
            fontFamily: "'Inter', sans-serif",
            maxWidth: "35vw",
          }}
        >
          Analytics that speak for themselves. Empower your team with real-time insights and unparalleled data visualization.
        </p>

        <div style={{ width: "4vw", height: "0.4vh", backgroundColor: "#14B8A6", borderRadius: "0.2vh" }} />
      </div>

      {/* Right Illustration Area */}
      <div
        style={{
          width: "50vw",
          height: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Glow effect behind image */}
        <div
          style={{
            position: "absolute",
            width: "30vw",
            height: "30vw",
            backgroundColor: "#14B8A6",
            borderRadius: "50%",
            filter: "blur(10vw)",
            opacity: 0.15,
            zIndex: 1,
          }}
        />
        
        <img
          src="/__mockup/images/illust-isometric-data-nobg.png"
          alt="Isometric 3D Data Dashboard"
          style={{
            width: "55vw", // Make it slightly larger to overflow boundaries
            height: "auto",
            maxHeight: "90vh",
            objectFit: "contain",
            position: "relative",
            zIndex: 2,
            transform: "translateX(-2vw) translateY(2vh)", // Slight offset for composition
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))",
          }}
        />
      </div>

      {/* Bottom Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "5vw",
          right: "5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "2vh",
        }}
      >
        <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif" }}>
          Example Deck
        </div>
        <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif" }}>
          Example Company, Inc. / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/IsometricDataPage2.tsx`)

```tsx
export function IsometricDataPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F172A",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 8vw",
        boxSizing: "border-box",
      }}
    >
      {/* Background Dot Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "2vw 2vw",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content Container */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "6vh" }}>
          <div
            style={{
              color: "#14B8A6",
              fontSize: "1.2vw",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1vh",
            }}
          >
            Platform Metrics
          </div>
          <h1
            style={{
              fontSize: "3.5vw",
              fontWeight: 700,
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Growth &amp; Performance
          </h1>
        </div>

        {/* Top row: 3 large metric cards side by side */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2vw",
            marginBottom: "8vh",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "1vw",
              padding: "4vh 2vw",
              display: "flex",
              flexDirection: "column",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ color: "#94A3B8", fontSize: "1.2vw", fontFamily: "'Inter', sans-serif", marginBottom: "2vh", fontWeight: 500 }}>
              Active Users
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "1vw", marginBottom: "1vh" }}>
              <div style={{ fontSize: "4vw", fontWeight: 700, lineHeight: 1 }}>1.2M</div>
              <div style={{ color: "#14B8A6", fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "0.3vw" }}>↑</span> 34%
              </div>
            </div>
            <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif", opacity: 0.7 }}>
              vs last month
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "1vw",
              padding: "4vh 2vw",
              display: "flex",
              flexDirection: "column",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ color: "#94A3B8", fontSize: "1.2vw", fontFamily: "'Inter', sans-serif", marginBottom: "2vh", fontWeight: 500 }}>
              MRR
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "1vw", marginBottom: "1vh" }}>
              <div style={{ fontSize: "4vw", fontWeight: 700, lineHeight: 1 }}>$8.4M</div>
              <div style={{ color: "#14B8A6", fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "0.3vw" }}>↑</span> 22%
              </div>
            </div>
            <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif", opacity: 0.7 }}>
              vs last month
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "1vw",
              padding: "4vh 2vw",
              display: "flex",
              flexDirection: "column",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ color: "#94A3B8", fontSize: "1.2vw", fontFamily: "'Inter', sans-serif", marginBottom: "2vh", fontWeight: 500 }}>
              Uptime
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "1vw", marginBottom: "1vh" }}>
              <div style={{ fontSize: "4vw", fontWeight: 700, lineHeight: 1 }}>99.97%</div>
              <div style={{ color: "#14B8A6", fontSize: "1.2vw", fontWeight: 600, display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: "0.3vw" }}>↑</span> 0.02%
              </div>
            </div>
            <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif", opacity: 0.7 }}>
              vs last month
            </div>
          </div>
        </div>

        {/* Sparkline area */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#94A3B8", fontSize: "1vw", fontFamily: "'Inter', sans-serif", marginBottom: "2vh", fontWeight: 500 }}>
            Trailing 12 Months Revenue
          </div>
          <div
            style={{
              flex: 1,
              backgroundColor: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.03)",
              borderRadius: "1vw",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              padding: "4vh 4vw",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            {/* Horizontal grid lines */}
            <div style={{ position: "absolute", top: "25%", left: 0, right: 0, height: "1px", backgroundColor: "rgba(255, 255, 255, 0.03)" }} />
            <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "1px", backgroundColor: "rgba(255, 255, 255, 0.03)" }} />
            <div style={{ position: "absolute", top: "75%", left: 0, right: 0, height: "1px", backgroundColor: "rgba(255, 255, 255, 0.03)" }} />

            {[30, 45, 40, 60, 55, 75, 70, 85, 80, 95, 90, 100].map((height, i) => (
              <div
                key={i}
                style={{
                  width: "3vw",
                  height: `${height}%`,
                  backgroundColor: "#14B8A6",
                  borderRadius: "0.3vw 0.3vw 0 0",
                  opacity: i === 11 ? 1 : 0.6,
                  transition: "height 1s ease-out, opacity 0.3s",
                  position: "relative",
                  zIndex: 2,
                }}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "2vh",
        }}
      >
        <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif" }}>
          02
        </div>
        <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif" }}>
          Example Company, Inc. / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/IsometricDataPage3.tsx`)

```tsx
export function IsometricDataPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F172A",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "4vw 4vh",
          pointerEvents: "none",
        }}
      />
      
      {/* Top Header */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "5vw",
          right: "5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ color: "#14B8A6", fontSize: "1vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Example Company
        </div>
        <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif" }}>
          2026
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "15vh 5vw 10vh 5vw", zIndex: 5, position: "relative" }}>
        <h2 style={{ fontSize: "3.5vw", fontWeight: 700, marginBottom: "1vh", letterSpacing: "-0.02em" }}>Platform Performance</h2>
        <p style={{ fontSize: "1.2vw", color: "#94A3B8", fontFamily: "'Inter', sans-serif", maxWidth: "40vw", marginBottom: "6vh" }}>
          Real-time analytics processing capability across all active nodes in the global network.
        </p>

        <div style={{ display: "flex", gap: "2vw", marginBottom: "6vh" }}>
          {[
            { label: "Queries Per Second", value: "2.4M", trend: "+14%" },
            { label: "Average Latency", value: "12ms", trend: "-5%" },
            { label: "Uptime SLA", value: "99.999%", trend: "0%" }
          ].map((stat, i) => (
            <div key={i} style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1vw", padding: "2vw", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.4vh", backgroundColor: "#14B8A6", opacity: 0.8 }} />
              <div style={{ fontSize: "1vw", color: "#94A3B8", fontFamily: "'Inter', sans-serif", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>{stat.label}</div>
              <div style={{ fontSize: "3.5vw", fontWeight: 700, color: "#FFFFFF", marginBottom: "1vh" }}>{stat.value}</div>
              <div style={{ display: "inline-flex", alignItems: "center", padding: "0.4vh 0.8vw", backgroundColor: stat.trend.startsWith("+") ? "rgba(20, 184, 166, 0.1)" : "rgba(255,255,255,0.05)", borderRadius: "1vw", color: stat.trend.startsWith("+") ? "#14B8A6" : "#94A3B8", fontSize: "0.8vw", fontWeight: 600 }}>
                {stat.trend} vs last quarter
              </div>
            </div>
          ))}
        </div>

        <div style={{ flex: 1, display: "flex", gap: "2vw" }}>
          <div style={{ flex: 2, backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1vw", padding: "2vw", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, marginBottom: "3vh" }}>Processing Volume (30 Days)</div>
            <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "1vw", paddingTop: "2vh" }}>
              {[40, 60, 45, 80, 55, 90, 70, 100, 85, 95].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, backgroundColor: i === 9 ? "#14B8A6" : "rgba(20, 184, 166, 0.3)", borderRadius: "0.5vw 0.5vw 0 0", transition: "height 0.3s ease" }} />
              ))}
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "1vw", padding: "2vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, marginBottom: "3vh" }}>System Distribution</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
              {[
                { name: "North America", pct: 45 },
                { name: "Europe", pct: 35 },
                { name: "Asia Pacific", pct: 20 }
              ].map((region, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9vw", marginBottom: "1vh", color: "#94A3B8" }}>
                    <span>{region.name}</span>
                    <span>{region.pct}%</span>
                  </div>
                  <div style={{ width: "100%", height: "0.8vh", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "0.4vh", overflow: "hidden" }}>
                    <div style={{ width: `${region.pct}%`, height: "100%", backgroundColor: "#14B8A6", borderRadius: "0.4vh" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "5vw",
          right: "5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "2vh",
        }}
      >
        <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif" }}>
          Example Deck
        </div>
        <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
          <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif" }}>
            Example Company, Inc. / Confidential
          </div>
          <div style={{ color: "#FFFFFF", fontSize: "0.9vw", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/IsometricDataPage4.tsx`)

```tsx
export function IsometricDataPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0F172A",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "4vw 4vh",
          pointerEvents: "none",
        }}
      />
      
      {/* Top Header */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          left: "5vw",
          right: "5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ color: "#14B8A6", fontSize: "1vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Example Company
        </div>
        <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif" }}>
          2026
        </div>
      </div>

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 5, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            width: "40vw",
            height: "40vw",
            backgroundColor: "#14B8A6",
            borderRadius: "50%",
            filter: "blur(12vw)",
            opacity: 0.1,
            zIndex: -1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        />

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.5vh 1vw",
            backgroundColor: "rgba(20, 184, 166, 0.1)",
            border: "1px solid rgba(20, 184, 166, 0.2)",
            borderRadius: "2vw",
            marginBottom: "4vh",
          }}
        >
          <span style={{ color: "#14B8A6", fontSize: "0.8vw", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Get Started
          </span>
        </div>

        <h1 style={{ fontSize: "5vw", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: "3vh", lineHeight: 1.1 }}>
          Ready to scale your<br />data infrastructure?
        </h1>
        
        <p style={{ fontSize: "1.5vw", color: "#94A3B8", fontFamily: "'Inter', sans-serif", maxWidth: "45vw", marginBottom: "6vh", lineHeight: 1.5 }}>
          Join industry leaders who rely on DataStack to power their next-generation analytics and operational intelligence.
        </p>

        <div style={{ display: "flex", gap: "1.5vw" }}>
          <div style={{ padding: "1.5vh 3vw", backgroundColor: "#14B8A6", color: "#0F172A", fontSize: "1.1vw", fontWeight: 600, borderRadius: "0.5vw", cursor: "pointer", transition: "all 0.2s" }}>
            Start Free Trial
          </div>
          <div style={{ padding: "1.5vh 3vw", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#FFFFFF", fontSize: "1.1vw", fontWeight: 600, borderRadius: "0.5vw", cursor: "pointer", transition: "all 0.2s" }}>
            Contact Sales
          </div>
        </div>

        <div style={{ marginTop: "10vh", display: "flex", gap: "4vw", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "4vh" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span style={{ color: "#94A3B8", fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.05em" }}>Email</span>
            <span style={{ fontSize: "1.1vw", fontWeight: 500 }}>hello@example.com</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span style={{ color: "#94A3B8", fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.05em" }}>Website</span>
            <span style={{ fontSize: "1.1vw", fontWeight: 500 }}>www.datastack.example</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span style={{ color: "#94A3B8", fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.05em" }}>HQ</span>
            <span style={{ fontSize: "1.1vw", fontWeight: 500 }}>San Francisco, CA</span>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "5vw",
          right: "5vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 10,
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "2vh",
        }}
      >
        <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif" }}>
          Example Deck
        </div>
        <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
          <div style={{ color: "#94A3B8", fontSize: "0.9vw", fontFamily: "'Inter', sans-serif" }}>
            Example Company, Inc. / Confidential
          </div>
          <div style={{ color: "#FFFFFF", fontSize: "0.9vw", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
