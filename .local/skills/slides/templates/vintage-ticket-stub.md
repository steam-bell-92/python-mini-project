# Vintage Ticket Stub

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "VintageTicketStub" template embodies a retro aesthetic reminiscent of classic ticket designs. It features a warm cream background color (#EBE3D5) with a lighter ticket area in a soft beige (#F9F6F0). The text is primarily deep slate/navy (#2C3539) with accents in deep red (#BA3B31) and muted gray (#6B7280). The font family used is 'DM Sans' for general text, 'DM Mono' for ticket details, and 'Space Grotesk' for the main title, creating a vintage yet modern feel. Key layout elements include rounded corners, a dashed border for a perforation effect, and decorative notches at the top and bottom of the ticket. There are no background images used in this design. The overall aesthetic feel is "retro elegance."

## Source Code

**Component:** `VintageTicketStub`

### Slide 1 — Title (`slide-styles/VintageTicketStub.tsx`)

```tsx
export function VintageTicketStub() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EBE3D5", // Warm cream background
        fontFamily: "'DM Sans', sans-serif",
        color: "#2C3539", // Deep slate/navy text
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "5vh 5vw",
      }}
    >
      {/* The Ticket Container */}
      <div
        style={{
          width: "90vw",
          height: "80vh",
          display: "flex",
          backgroundColor: "#F9F6F0",
          borderRadius: "2vw",
          boxShadow: "0 2vh 4vh rgba(0,0,0,0.15), inset 0 0 10vw rgba(210,180,140,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Main Ticket Area */}
        <div
          style={{
            flex: 1,
            padding: "6vh 5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* Top Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.2vw solid #2C3539", paddingBottom: "2vh" }}>
            <div style={{ fontSize: "2vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#BA3B31" /* Deep red accent */ }}>
              acme.co
            </div>
            <div style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", letterSpacing: "0.2em" }}>
              CLASS: FIRST
            </div>
            <div style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", fontWeight: "bold" }}>
              TICKET N° 08492026
            </div>
          </div>

          {/* Main Content Area */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh", marginTop: "4vh" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7280" }}>
              Boarding Pass / Admit One
            </div>
            <h1 style={{ fontSize: "8vw", fontWeight: 900, margin: 0, lineHeight: 0.9, letterSpacing: "-0.04em", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif" }}>
              Example<br/>Deck
            </h1>
            <p style={{ fontSize: "1.8vw", fontWeight: 500, color: "#4A5568", maxWidth: "45vw", marginTop: "3vh", lineHeight: 1.4, borderLeft: "0.4vw solid #BA3B31", paddingLeft: "1.5vw" }}>
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>

          {/* Bottom Metadata / Gate Info */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", borderTop: "0.2vw dashed #2C3539", paddingTop: "3vh" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Date</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>2026</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Gate</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>A-12</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Seat</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>1A</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Status</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, textTransform: "uppercase", color: "#BA3B31" }}>Confidential</span>
            </div>
          </div>
        </div>

        {/* Tear Line / Perforation */}
        <div style={{ width: "0", borderRight: "0.4vw dashed #2C3539", position: "relative", zIndex: 2 }}>
          {/* Top Notch */}
          <div style={{ position: "absolute", top: "-1.5vw", left: "-1.5vw", width: "3vw", height: "3vw", backgroundColor: "#EBE3D5", borderRadius: "50%", boxShadow: "inset 0 -0.5vh 1vh rgba(0,0,0,0.1)" }} />
          {/* Bottom Notch */}
          <div style={{ position: "absolute", bottom: "-1.5vw", left: "-1.5vw", width: "3vw", height: "3vw", backgroundColor: "#EBE3D5", borderRadius: "50%", boxShadow: "inset 0 0.5vh 1vh rgba(0,0,0,0.1)" }} />
        </div>

        {/* Stub Section */}
        <div
          style={{
            width: "25vw",
            backgroundColor: "#BA3B31",
            color: "#F9F6F0",
            padding: "6vh 3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1vh" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              acme.co
            </div>
            <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", opacity: 0.8 }}>
              TICKET N° 08492026
            </div>
          </div>

          <div style={{ marginTop: "auto" }}>
            {/* CSS Barcode */}
            <div
              style={{
                height: "8vh",
                width: "100%",
                background: "repeating-linear-gradient(90deg, #F9F6F0, #F9F6F0 0.2vw, transparent 0.2vw, transparent 0.4vw, #F9F6F0 0.4vw, #F9F6F0 0.7vw, transparent 0.7vw, transparent 1vw, #F9F6F0 1vw, #F9F6F0 1.1vw, transparent 1.1vw, transparent 1.5vw)",
                marginBottom: "2vh",
                opacity: 0.9
              }}
            />
            <div style={{ fontSize: "0.9vw", fontWeight: 500, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Example Company, Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/VintageTicketStubPage2.tsx`)

```tsx
export function VintageTicketStubPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EBE3D5",
        fontFamily: "'DM Sans', sans-serif",
        color: "#2C3539",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "5vh 5vw",
      }}
    >
      <div
        style={{
          width: "90vw",
          height: "80vh",
          display: "flex",
          backgroundColor: "#F9F6F0",
          borderRadius: "2vw",
          boxShadow: "0 2vh 4vh rgba(0,0,0,0.15), inset 0 0 10vw rgba(210,180,140,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "6vh 5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.2vw solid #2C3539", paddingBottom: "2vh" }}>
            <div style={{ fontSize: "2vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#BA3B31" }}>
              acme.co
            </div>
            <div style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", letterSpacing: "0.2em" }}>
              CLASS: FIRST
            </div>
            <div style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", fontWeight: "bold" }}>
              TICKET N° 08492026
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2vh", flex: 1, marginTop: "4vh" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7280" }}>
              Passenger Manifest / Objectives
            </div>
            <h2 style={{ fontSize: "4vw", fontWeight: 900, margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif" }}>
              Our Core Strategy
            </h2>
            
            <div style={{ display: "flex", gap: "4vw", marginTop: "3vh", flex: 1 }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1vh", borderLeft: "0.2vw solid #BA3B31", paddingLeft: "1.5vw" }}>
                  <span style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", color: "#BA3B31", fontWeight: "bold" }}>01. Discovery</span>
                  <p style={{ fontSize: "1.4vw", lineHeight: 1.5, color: "#4A5568", margin: 0 }}>
                    Uncovering the fundamental truths about our target audience and market position.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1vh", borderLeft: "0.2vw solid #2C3539", paddingLeft: "1.5vw" }}>
                  <span style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", color: "#2C3539", fontWeight: "bold" }}>02. Alignment</span>
                  <p style={{ fontSize: "1.4vw", lineHeight: 1.5, color: "#4A5568", margin: 0 }}>
                    Ensuring all internal stakeholders share a unified vision for the upcoming launch.
                  </p>
                </div>
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1vh", borderLeft: "0.2vw solid #2C3539", paddingLeft: "1.5vw" }}>
                  <span style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", color: "#2C3539", fontWeight: "bold" }}>03. Execution</span>
                  <p style={{ fontSize: "1.4vw", lineHeight: 1.5, color: "#4A5568", margin: 0 }}>
                    Rapid prototyping and deployment of our minimal viable product to early adopters.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1vh", borderLeft: "0.2vw solid #2C3539", paddingLeft: "1.5vw" }}>
                  <span style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", color: "#2C3539", fontWeight: "bold" }}>04. Scale</span>
                  <p style={{ fontSize: "1.4vw", lineHeight: 1.5, color: "#4A5568", margin: 0 }}>
                    Expanding our infrastructure and team to meet the demands of a growing user base.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", borderTop: "0.2vw dashed #2C3539", paddingTop: "3vh" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Date</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>2026</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Page</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>02</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Section</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>STRATEGY</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Status</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, textTransform: "uppercase", color: "#BA3B31" }}>Confidential</span>
            </div>
          </div>
        </div>

        <div style={{ width: "0", borderRight: "0.4vw dashed #2C3539", position: "relative", zIndex: 2 }}>
          <div style={{ position: "absolute", top: "-1.5vw", left: "-1.5vw", width: "3vw", height: "3vw", backgroundColor: "#EBE3D5", borderRadius: "50%", boxShadow: "inset 0 -0.5vh 1vh rgba(0,0,0,0.1)" }} />
          <div style={{ position: "absolute", bottom: "-1.5vw", left: "-1.5vw", width: "3vw", height: "3vw", backgroundColor: "#EBE3D5", borderRadius: "50%", boxShadow: "inset 0 0.5vh 1vh rgba(0,0,0,0.1)" }} />
        </div>

        <div
          style={{
            width: "25vw",
            backgroundColor: "#BA3B31",
            color: "#F9F6F0",
            padding: "6vh 3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1vh" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              acme.co
            </div>
            <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", opacity: 0.8 }}>
              TICKET N° 08492026
            </div>
          </div>

          <div style={{ marginTop: "auto" }}>
            <div
              style={{
                height: "8vh",
                width: "100%",
                background: "repeating-linear-gradient(90deg, #F9F6F0, #F9F6F0 0.2vw, transparent 0.2vw, transparent 0.4vw, #F9F6F0 0.4vw, #F9F6F0 0.7vw, transparent 0.7vw, transparent 1vw, #F9F6F0 1vw, #F9F6F0 1.1vw, transparent 1.1vw, transparent 1.5vw)",
                marginBottom: "2vh",
                opacity: 0.9
              }}
            />
            <div style={{ fontSize: "0.9vw", fontWeight: 500, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Example Company, Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/VintageTicketStubPage3.tsx`)

```tsx
export function VintageTicketStubPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EBE3D5",
        fontFamily: "'DM Sans', sans-serif",
        color: "#2C3539",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "5vh 5vw",
      }}
    >
      <div
        style={{
          width: "90vw",
          height: "80vh",
          display: "flex",
          backgroundColor: "#F9F6F0",
          borderRadius: "2vw",
          boxShadow: "0 2vh 4vh rgba(0,0,0,0.15), inset 0 0 10vw rgba(210,180,140,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "6vh 5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.2vw solid #2C3539", paddingBottom: "2vh" }}>
            <div style={{ fontSize: "2vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#BA3B31" }}>
              acme.co
            </div>
            <div style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", letterSpacing: "0.2em" }}>
              CLASS: FIRST
            </div>
            <div style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", fontWeight: "bold" }}>
              TICKET N° 08492026
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2vh", flex: 1, marginTop: "4vh" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7280" }}>
                  Flight Metrics / Telemetry
                </div>
                <h2 style={{ fontSize: "4vw", fontWeight: 900, margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif" }}>
                  Q4 Performance
                </h2>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "3vw", fontWeight: 900, fontFamily: "'Space Grotesk', sans-serif", color: "#BA3B31", lineHeight: 1 }}>
                  +84%
                </div>
                <div style={{ fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280" }}>
                  Year over Year
                </div>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-end", height: "25vh", marginTop: "4vh", paddingBottom: "1vh", borderBottom: "0.2vw solid #2C3539" }}>
              {[
                { label: "OCT", value: 40, color: "#2C3539" },
                { label: "NOV", value: 65, color: "#2C3539" },
                { label: "DEC", value: 100, color: "#BA3B31" },
              ].map((bar, i) => (
                <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                  <div 
                    style={{ 
                      width: "100%", 
                      height: `${bar.value}%`, 
                      backgroundColor: bar.color,
                      position: "relative",
                      overflow: "hidden"
                    }}
                  >
                    <div style={{ 
                      position: "absolute", 
                      top: 0, left: 0, right: 0, bottom: 0, 
                      background: "repeating-linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 0.5vw, transparent 0.5vw, transparent 1vw)"
                    }} />
                  </div>
                  <div style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", fontWeight: "bold", letterSpacing: "0.1em" }}>
                    {bar.label}
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1vh" }}>
              <div style={{ fontSize: "1vw", color: "#4A5568", maxWidth: "20vw" }}>
                Strong finish in December leading to record-breaking quarterly revenue.
              </div>
              <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", color: "#6B7280" }}>
                *UNAUDITED DATA
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", borderTop: "0.2vw dashed #2C3539", paddingTop: "3vh" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Date</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>2026</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Page</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>03</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Section</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>METRICS</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Status</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, textTransform: "uppercase", color: "#BA3B31" }}>Confidential</span>
            </div>
          </div>
        </div>

        <div style={{ width: "0", borderRight: "0.4vw dashed #2C3539", position: "relative", zIndex: 2 }}>
          <div style={{ position: "absolute", top: "-1.5vw", left: "-1.5vw", width: "3vw", height: "3vw", backgroundColor: "#EBE3D5", borderRadius: "50%", boxShadow: "inset 0 -0.5vh 1vh rgba(0,0,0,0.1)" }} />
          <div style={{ position: "absolute", bottom: "-1.5vw", left: "-1.5vw", width: "3vw", height: "3vw", backgroundColor: "#EBE3D5", borderRadius: "50%", boxShadow: "inset 0 0.5vh 1vh rgba(0,0,0,0.1)" }} />
        </div>

        <div
          style={{
            width: "25vw",
            backgroundColor: "#BA3B31",
            color: "#F9F6F0",
            padding: "6vh 3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1vh" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              acme.co
            </div>
            <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", opacity: 0.8 }}>
              TICKET N° 08492026
            </div>
          </div>

          <div style={{ marginTop: "auto" }}>
            <div
              style={{
                height: "8vh",
                width: "100%",
                background: "repeating-linear-gradient(90deg, #F9F6F0, #F9F6F0 0.2vw, transparent 0.2vw, transparent 0.4vw, #F9F6F0 0.4vw, #F9F6F0 0.7vw, transparent 0.7vw, transparent 1vw, #F9F6F0 1vw, #F9F6F0 1.1vw, transparent 1.1vw, transparent 1.5vw)",
                marginBottom: "2vh",
                opacity: 0.9
              }}
            />
            <div style={{ fontSize: "0.9vw", fontWeight: 500, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Example Company, Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/VintageTicketStubPage4.tsx`)

```tsx
export function VintageTicketStubPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#EBE3D5",
        fontFamily: "'DM Sans', sans-serif",
        color: "#2C3539",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "5vh 5vw",
      }}
    >
      <div
        style={{
          width: "90vw",
          height: "80vh",
          display: "flex",
          backgroundColor: "#F9F6F0",
          borderRadius: "2vw",
          boxShadow: "0 2vh 4vh rgba(0,0,0,0.15), inset 0 0 10vw rgba(210,180,140,0.2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            flex: 1,
            padding: "6vh 5vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.2vw solid #2C3539", paddingBottom: "2vh" }}>
            <div style={{ fontSize: "2vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: "#BA3B31" }}>
              acme.co
            </div>
            <div style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", letterSpacing: "0.2em" }}>
              CLASS: FIRST
            </div>
            <div style={{ fontSize: "1.2vw", fontFamily: "'DM Mono', monospace", fontWeight: "bold" }}>
              TICKET N° 08492026
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2vh", flex: 1, marginTop: "4vh", textAlign: "center" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6B7280" }}>
              Final Destination / Arrived
            </div>
            <h2 style={{ fontSize: "7vw", fontWeight: 900, margin: "2vh 0 0 0", lineHeight: 0.9, letterSpacing: "-0.04em", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif" }}>
              Ready For<br/>Takeoff
            </h2>
            <p style={{ fontSize: "1.8vw", fontWeight: 500, color: "#4A5568", maxWidth: "40vw", marginTop: "3vh", lineHeight: 1.4 }}>
              Join us on this journey to redefine industry standards. Contact our team to book your next flight.
            </p>
            <div style={{ 
              marginTop: "4vh",
              padding: "1.5vh 3vw",
              backgroundColor: "#2C3539",
              color: "#F9F6F0",
              fontSize: "1.2vw",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              borderRadius: "0.5vw",
              border: "0.2vw solid #2C3539",
              display: "inline-block"
            }}>
              invest@acme.co
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", borderTop: "0.2vw dashed #2C3539", paddingTop: "3vh" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Date</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>2026</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Page</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>04</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Section</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, fontFamily: "'DM Mono', monospace" }}>CONTACT</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7280", marginBottom: "0.5vh" }}>Status</span>
              <span style={{ fontSize: "1.5vw", fontWeight: 700, textTransform: "uppercase", color: "#BA3B31" }}>Confidential</span>
            </div>
          </div>
        </div>

        <div style={{ width: "0", borderRight: "0.4vw dashed #2C3539", position: "relative", zIndex: 2 }}>
          <div style={{ position: "absolute", top: "-1.5vw", left: "-1.5vw", width: "3vw", height: "3vw", backgroundColor: "#EBE3D5", borderRadius: "50%", boxShadow: "inset 0 -0.5vh 1vh rgba(0,0,0,0.1)" }} />
          <div style={{ position: "absolute", bottom: "-1.5vw", left: "-1.5vw", width: "3vw", height: "3vw", backgroundColor: "#EBE3D5", borderRadius: "50%", boxShadow: "inset 0 0.5vh 1vh rgba(0,0,0,0.1)" }} />
        </div>

        <div
          style={{
            width: "25vw",
            backgroundColor: "#BA3B31",
            color: "#F9F6F0",
            padding: "6vh 3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "1vh" }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              acme.co
            </div>
            <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", letterSpacing: "0.1em", opacity: 0.8 }}>
              TICKET N° 08492026
            </div>
          </div>

          <div style={{ marginTop: "auto" }}>
            <div
              style={{
                height: "8vh",
                width: "100%",
                background: "repeating-linear-gradient(90deg, #F9F6F0, #F9F6F0 0.2vw, transparent 0.2vw, transparent 0.4vw, #F9F6F0 0.4vw, #F9F6F0 0.7vw, transparent 0.7vw, transparent 1vw, #F9F6F0 1vw, #F9F6F0 1.1vw, transparent 1.1vw, transparent 1.5vw)",
                marginBottom: "2vh",
                opacity: 0.9
              }}
            />
            <div style={{ fontSize: "0.9vw", fontWeight: 500, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Example Company, Inc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```
