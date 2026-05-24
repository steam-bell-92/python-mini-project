# Strategy One-Pager

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "StrategyOnePager" template presents a clean and modern aesthetic, characterized by a minimalist design. The background color is solid white (#FFFFFF), while the primary text color is a dark navy (#0A1628) and the secondary text color is a muted gray (#4A5568). Accent text appears in a lighter gray (#A0AEC0) for labels, and a subtle light gray (#E2E8F0) is used for a decorative horizontal line. The font families utilized are 'Inter' for general text and 'DM Mono' for specific details, providing a contemporary and professional look. Key layout elements include a flexible layout with a header section, a prominent title area with a semi-transparent dark rectangle behind it, and a structured arrangement of project details on the right. Overall, the aesthetic feel can be described as "modern minimalist."

## Source Code

**Component:** `StrategyOnePager`

### Slide 1 — Title (`slide-styles/StrategyOnePager.tsx`)

```tsx
export function StrategyOnePager() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "5vh 5vw",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>
          acme.co
        </div>
        
        <div style={{ 
          fontFamily: "'DM Mono', monospace", 
          fontSize: "0.9vw", 
          color: "#4A5568", 
          display: "flex", 
          flexDirection: "column", 
          gap: "1vh",
          textAlign: "right"
        }}>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Project:</span>Example Deck</div>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Date:</span>Q4 2026</div>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Lead:</span>Example Company, Inc.</div>
          <div><span style={{ color: "#A0AEC0", marginRight: "1vw" }}>Status:</span>Confidential</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "15vh", left: "5vw", width: "90vw" }}>
        <div style={{ position: "relative" }}>
          <div 
            style={{ 
              position: "absolute", 
              left: "-2vw", 
              top: "2vh", 
              width: "25vw", 
              height: "5vh", 
              backgroundColor: "#0A1628", 
              opacity: 0.1,
              zIndex: 0
            }} 
          />
          <h1
            style={{
              fontSize: "8vw",
              fontWeight: 900,
              color: "#0A1628",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              position: "relative",
              zIndex: 1
            }}
          >
            Example Deck
          </h1>
        </div>
        
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "flex-end",
          marginTop: "6vh" 
        }}>
          <p
            style={{
              fontSize: "1.8vw",
              fontWeight: 500,
              color: "#4A5568",
              margin: 0,
              maxWidth: "50vw",
              lineHeight: 1.4,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
          
          <div style={{ width: "30vw", height: "1px", backgroundColor: "#E2E8F0" }} />
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/StrategyOnePagerPage2.tsx`)

```tsx
export function StrategyOnePagerPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "5vh 5vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
        <div style={{ position: "relative" }}>
          <div 
            style={{ 
              position: "absolute", 
              left: "-1vw", 
              top: "1.5vh", 
              width: "12vw", 
              height: "3vh", 
              backgroundColor: "#0A1628", 
              opacity: 0.1,
              zIndex: 0
            }} 
          />
          <h2
            style={{
              fontSize: "3.5vw",
              fontWeight: 900,
              color: "#0A1628",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              position: "relative",
              zIndex: 1
            }}
          >
            Core Strategy
          </h2>
        </div>
        
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>
          acme.co
        </div>
      </div>

      {/* Content Body */}
      <div style={{ display: "flex", gap: "5vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
          <p style={{ fontSize: "1.6vw", fontWeight: 500, color: "#4A5568", lineHeight: 1.5, margin: 0 }}>
            Our approach focuses on combining rigorous analytical research with bold creative execution to deliver unprecedented results.
          </p>
          
          <div style={{ width: "100%", height: "1px", backgroundColor: "#E2E8F0" }} />
          
          <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", color: "#A0AEC0", fontWeight: 600 }}>01</div>
              <div>
                <h3 style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0A1628", margin: "0 0 1vh 0" }}>Market Penetration</h3>
                <p style={{ fontSize: "1.1vw", color: "#4A5568", lineHeight: 1.5, margin: 0 }}>
                  Expanding our footprint in emerging markets by leveraging local partnerships and adaptive product positioning.
                </p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", color: "#A0AEC0", fontWeight: 600 }}>02</div>
              <div>
                <h3 style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0A1628", margin: "0 0 1vh 0" }}>Product Innovation</h3>
                <p style={{ fontSize: "1.1vw", color: "#4A5568", lineHeight: 1.5, margin: 0 }}>
                  Developing next-generation solutions that anticipate user needs before they become apparent in the mainstream market.
                </p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", color: "#A0AEC0", fontWeight: 600 }}>03</div>
              <div>
                <h3 style={{ fontSize: "1.4vw", fontWeight: 700, color: "#0A1628", margin: "0 0 1vh 0" }}>Operational Excellence</h3>
                <p style={{ fontSize: "1.1vw", color: "#4A5568", lineHeight: 1.5, margin: 0 }}>
                  Streamlining internal processes to maximize efficiency, reduce overhead, and accelerate time-to-market for new initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ flex: 1, backgroundColor: "#F7FAFC", border: "1px solid #E2E8F0", padding: "4vh 3vw", display: "flex", flexDirection: "column" }}>
          <h4 style={{ fontSize: "1vw", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#718096", margin: "0 0 3vh 0" }}>
            Strategic Imperatives
          </h4>
          <p style={{ fontSize: "2vw", fontWeight: 800, color: "#0A1628", lineHeight: 1.2, margin: "0 0 4vh 0", letterSpacing: "-0.02em" }}>
            "We must pivot from reactive problem-solving to proactive value creation to secure our market position for the next decade."
          </p>
          <div style={{ marginTop: "auto" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#0A1628" }}>Jane Doe</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#718096" }}>Chief Strategy Officer</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        position: "absolute", 
        bottom: "5vh", 
        left: "5vw", 
        right: "5vw", 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #E2E8F0",
        paddingTop: "2vh"
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>
          Strategy Overview / Example Deck
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/StrategyOnePagerPage3.tsx`)

```tsx
export function StrategyOnePagerPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "5vh 5vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
        <div style={{ position: "relative" }}>
          <div 
            style={{ 
              position: "absolute", 
              left: "-1vw", 
              top: "1.5vh", 
              width: "18vw", 
              height: "3vh", 
              backgroundColor: "#0A1628", 
              opacity: 0.1,
              zIndex: 0
            }} 
          />
          <h2
            style={{
              fontSize: "3.5vw",
              fontWeight: 900,
              color: "#0A1628",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              position: "relative",
              zIndex: 1
            }}
          >
            Performance Metrics
          </h2>
        </div>
        
        <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.02em" }}>
          acme.co
        </div>
      </div>

      {/* Content Body */}
      <div style={{ display: "flex", flexDirection: "column", gap: "4vh", flex: 1 }}>
        <div style={{ display: "flex", gap: "2vw" }}>
          {/* Main Stat */}
          <div style={{ flex: 1, backgroundColor: "#0A1628", color: "#FFFFFF", padding: "4vh 3vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#A0AEC0", marginBottom: "1vh" }}>
              Q3 Revenue Growth
            </div>
            <div style={{ fontSize: "6vw", fontWeight: 900, lineHeight: 1, letterSpacing: "-0.04em" }}>
              +142%
            </div>
            <div style={{ fontSize: "1.1vw", color: "#E2E8F0", marginTop: "2vh", maxWidth: "80%" }}>
              Exceeding projected targets across all major global markets.
            </div>
          </div>
          
          {/* Secondary Stats */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vw" }}>
            <div style={{ flex: 1, border: "1px solid #E2E8F0", padding: "3vh 2vw", display: "flex", alignItems: "center", gap: "2vw" }}>
              <div style={{ fontSize: "4vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.04em", width: "12vw" }}>
                $24.5M
              </div>
              <div>
                <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.5vh" }}>ARR (Annual Recurring Revenue)</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>Up from $10.1M in previous fiscal year.</div>
              </div>
            </div>
            
            <div style={{ flex: 1, border: "1px solid #E2E8F0", padding: "3vh 2vw", display: "flex", alignItems: "center", gap: "2vw" }}>
              <div style={{ fontSize: "4vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.04em", width: "12vw" }}>
                89%
              </div>
              <div>
                <div style={{ fontSize: "1vw", fontWeight: 700, color: "#0A1628", marginBottom: "0.5vh" }}>Customer Retention Rate</div>
                <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>Industry average currently sitting at 64%.</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Timeline / Grid */}
        <div style={{ display: "flex", gap: "2vw", marginTop: "2vh" }}>
          {[
            { phase: "Phase 1", title: "Foundation", metric: "100%", desc: "Infrastructure deployed" },
            { phase: "Phase 2", title: "Expansion", metric: "75%", desc: "New markets entered" },
            { phase: "Phase 3", title: "Optimization", metric: "40%", desc: "Efficiency metrics met" },
            { phase: "Phase 4", title: "Scale", metric: "15%", desc: "Global rollout" },
          ].map((item, i) => (
            <div key={i} style={{ flex: 1, padding: "2vh 0", borderTop: "2px solid #0A1628" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85vw", color: "#718096", marginBottom: "1vh" }}>
                {item.phase}
              </div>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#0A1628", marginBottom: "2vh" }}>
                {item.title}
              </div>
              <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#0A1628", letterSpacing: "-0.04em", marginBottom: "1vh" }}>
                {item.metric}
              </div>
              <div style={{ fontSize: "0.9vw", color: "#4A5568" }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        position: "absolute", 
        bottom: "5vh", 
        left: "5vw", 
        right: "5vw", 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid #E2E8F0",
        paddingTop: "2vh"
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>
          Data Analysis / Example Deck
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#0A1628", fontWeight: 600 }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/StrategyOnePagerPage4.tsx`)

```tsx
export function StrategyOnePagerPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0A1628",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "5vh 5vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10vh" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
          acme.co
        </div>
        
        <div style={{ 
          fontFamily: "'DM Mono', monospace", 
          fontSize: "0.9vw", 
          color: "#A0AEC0", 
          display: "flex", 
          gap: "3vw"
        }}>
          <div>partnerships@acme.co</div>
          <div>+1 (555) 019-2834</div>
        </div>
      </div>

      {/* Content Body */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center" }}>
        <div style={{ position: "relative" }}>
          <div 
            style={{ 
              position: "absolute", 
              left: "50%", 
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "40vw", 
              height: "10vh", 
              backgroundColor: "#FFFFFF", 
              opacity: 0.05,
              zIndex: 0
            }} 
          />
          <h2
            style={{
              fontSize: "6vw",
              fontWeight: 900,
              color: "#FFFFFF",
              margin: "0 0 3vh 0",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              position: "relative",
              zIndex: 1
            }}
          >
            Ready to Build.
          </h2>
        </div>
        
        <p style={{ fontSize: "1.8vw", color: "#E2E8F0", maxWidth: "50vw", lineHeight: 1.5, margin: "0 0 6vh 0", fontWeight: 400 }}>
          The future belongs to those who prepare for it today. Let's create something extraordinary together.
        </p>

        <div style={{ 
          display: "flex", 
          gap: "2vw"
        }}>
          <div style={{
            padding: "2vh 3vw",
            backgroundColor: "#FFFFFF",
            color: "#0A1628",
            fontSize: "1.2vw",
            fontWeight: 700,
            cursor: "pointer",
          }}>
            Initiate Project
          </div>
          <div style={{
            padding: "2vh 3vw",
            border: "1px solid #FFFFFF",
            color: "#FFFFFF",
            fontSize: "1.2vw",
            fontWeight: 700,
            cursor: "pointer",
          }}>
            Download Full Deck
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        position: "absolute", 
        bottom: "5vh", 
        left: "5vw", 
        right: "5vw", 
        display: "flex", 
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,0.2)",
        paddingTop: "2vh"
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#A0AEC0" }}>
          Thank You / Example Deck
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#FFFFFF", fontWeight: 600 }}>
          04
        </div>
      </div>
    </div>
  );
}
```
