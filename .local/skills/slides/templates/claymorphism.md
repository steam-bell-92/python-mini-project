# Claymorphism

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "Claymorphism" template embodies a soft, rounded aesthetic characterized by a clay-like appearance with depth and shadow effects. It features a background color of #E8E2D9 and utilizes a base color of #F4F0EA for its main elements. The text color is #5C544D, with accents in #8E867E and #3D3833 for headings. The font family used is 'DM Sans', applied throughout the component for a modern, clean look. Key layout elements include rounded shapes with varying border radii and soft drop shadows, creating a three-dimensional effect, along with decorative blobs in gradients such as #FFDAB9 to #FFCBA4, #E6E6FA to #D8BFD8, and #CFFFE5 to #98FF98. The overall aesthetic feel is "soft, modern, organic."

## Source Code

**Component:** `Claymorphism`

### Slide 1 — Title (`slide-styles/Claymorphism.tsx`)

```tsx
export function Claymorphism() {
  // Claymorphism style relies heavily on soft, double inner shadows to create the 3D rounded look
  // along with soft drop shadows for depth against the background.
  
  const clayBase = {
    background: "#F4F0EA", 
    borderRadius: "3vw",
    boxShadow: "1.5vw 1.5vw 3vw rgba(166, 154, 143, 0.4), -1vw -1vw 2.5vw rgba(255,255,255,0.9), inset -0.4vw -0.4vw 1vw rgba(166, 154, 143, 0.2), inset 0.4vw 0.4vw 1vw rgba(255,255,255,1)"
  };

  const clayButton = {
    ...clayBase,
    padding: "1.5vh 3vw",
    borderRadius: "2.5vw",
    boxShadow: "0.8vw 0.8vw 1.6vw rgba(166, 154, 143, 0.3), -0.5vw -0.5vw 1.5vw rgba(255,255,255,0.9), inset -0.2vw -0.2vw 0.5vw rgba(166, 154, 143, 0.15), inset 0.2vw 0.2vw 0.5vw rgba(255,255,255,0.9)"
  };

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden", 
      backgroundColor: "#E8E2D9", 
      fontFamily: "'DM Sans', sans-serif", 
      position: "relative", 
      color: "#5C544D" 
    }}>
      {/* Background blobs / clay shapes */}
      <div style={{ 
        position: "absolute", 
        top: "-5vh", 
        right: "-5vw", 
        width: "45vw", 
        height: "45vw", 
        borderRadius: "45% 55% 70% 30% / 40% 50% 60% 50%", 
        background: "linear-gradient(135deg, #FFDAB9 0%, #FFCBA4 100%)", 
        boxShadow: "2vw 2vw 4vw rgba(166, 154, 143, 0.3), inset -1.5vw -1.5vw 3vw rgba(220, 150, 110, 0.4), inset 1vw 1vw 2vw rgba(255,255,255,0.8)",
        transition: "all 3s ease-in-out"
      }} />
      <div style={{ 
        position: "absolute", 
        bottom: "-15vh", 
        left: "5vw", 
        width: "35vw", 
        height: "35vw", 
        borderRadius: "50% 50% 30% 70% / 50% 40% 60% 50%", 
        background: "linear-gradient(135deg, #E6E6FA 0%, #D8BFD8 100%)", 
        boxShadow: "1.5vw 1.5vw 3vw rgba(166, 154, 143, 0.3), inset -1vw -1vw 2.5vw rgba(180, 150, 180, 0.4), inset 1vw 1vw 2vw rgba(255,255,255,0.9)" 
      }} />
      <div style={{ 
        position: "absolute", 
        top: "20vh", 
        left: "60vw", 
        width: "18vw", 
        height: "18vw", 
        borderRadius: "60% 40% 50% 50% / 40% 60% 50% 50%", 
        background: "linear-gradient(135deg, #CFFFE5 0%, #98FF98 100%)", 
        boxShadow: "1vw 1vw 2vw rgba(166, 154, 143, 0.2), inset -0.8vw -0.8vw 1.5vw rgba(100, 200, 130, 0.3), inset 0.5vw 0.5vw 1vw rgba(255,255,255,0.8)" 
      }} />

      <div style={{ 
        padding: "6vh 7vw", 
        display: "flex", 
        flexDirection: "column", 
        height: "100%", 
        justifyContent: "space-between", 
        position: "relative", 
        zIndex: 1, 
        boxSizing: "border-box" 
      }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ 
            ...clayButton,
            fontSize: "1.2vw", 
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "0.8vw"
          }}>
            acme.co 
            <span style={{ fontSize: "0.9vw", fontWeight: 500, color: "#8E867E", opacity: 0.8 }}>
              (by Example Company)
            </span>
          </div>
          <div style={{ 
            ...clayButton,
            fontSize: "1.2vw", 
            fontWeight: 700,
            color: "#8E867E"
          }}>
            2026
          </div>
        </div>

        {/* Main Content */}
        <div style={{ 
          ...clayBase,
          borderRadius: "4vw", 
          padding: "8vh 6vw", 
          maxWidth: "70vw",
        }}>
          <h1 style={{ 
            fontSize: "7vw", 
            fontWeight: 800, 
            lineHeight: 1.05, 
            margin: 0,
            color: "#3D3833",
            letterSpacing: "-0.03em",
            textShadow: "0.1vw 0.1vw 0.1vw rgba(255,255,255,0.8)"
          }}>
            Example Deck
          </h1>
          <p style={{ 
            fontSize: "2vw", 
            fontWeight: 500,
            color: "#736A61", 
            marginTop: "3vh", 
            marginBottom: 0,
            maxWidth: "55vw", 
            lineHeight: 1.4,
            textShadow: "0.05vw 0.05vw 0.1vw rgba(255,255,255,0.5)"
          }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", gap: "2vw", fontSize: "1.1vw", fontWeight: 700, color: "#8E867E" }}>
          <span style={{ ...clayButton, padding: "1vh 2vw" }}>
            Example Company, Inc.
          </span>
          <span style={{ ...clayButton, padding: "1vh 2vw" }}>
            Confidential
          </span>
        </div>

      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/ClaymorphismPage2.tsx`)

```tsx
export function ClaymorphismPage2() {
  const clayBase = {
    background: "#F0EBE3", 
    borderRadius: "3vw",
    boxShadow: "1.5vw 1.5vw 3vw rgba(166, 154, 143, 0.4), -1vw -1vw 2.5vw rgba(255,255,255,0.9), inset -0.4vw -0.4vw 1vw rgba(166, 154, 143, 0.2), inset 0.4vw 0.4vw 1vw rgba(255,255,255,1)"
  };

  const clayButton = {
    ...clayBase,
    padding: "1.5vh 3vw",
    borderRadius: "2.5vw",
    boxShadow: "0.8vw 0.8vw 1.6vw rgba(166, 154, 143, 0.3), -0.5vw -0.5vw 1.5vw rgba(255,255,255,0.9), inset -0.2vw -0.2vw 0.5vw rgba(166, 154, 143, 0.15), inset 0.2vw 0.2vw 0.5vw rgba(255,255,255,0.9)"
  };

  const centerCardStyle = {
    ...clayBase,
    background: "linear-gradient(135deg, #F4A3B5 0%, #B8A9E8 100%)",
    width: "30vw",
    height: "30vw",
    borderRadius: "4vw",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    justifyContent: "center",
    position: "relative" as const,
    zIndex: 10,
    boxShadow: "1.5vw 1.5vw 3vw rgba(166, 154, 143, 0.4), -1vw -1vw 2.5vw rgba(255,255,255,0.9), inset -0.4vw -0.4vw 1.5vw rgba(200, 100, 150, 0.4), inset 0.4vw 0.4vw 1.5vw rgba(255,255,255,0.8)"
  };

  const pillStyle = {
    ...clayBase,
    position: "absolute" as const,
    padding: "2vh 3vw",
    borderRadius: "3vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.8vw",
    fontWeight: 700,
    color: "#5C544D",
    zIndex: 5,
    background: "linear-gradient(135deg, #F9F6F0 0%, #E8E2D9 100%)",
    whiteSpace: "nowrap" as const
  };

  // The lines connect the center card to the pills
  const lineStyle = {
    position: "absolute" as const,
    borderTop: "0.3vw dotted #B8A9E8",
    zIndex: 1,
    opacity: 0.6
  };

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden", 
      backgroundColor: "#F0EBE3", 
      fontFamily: "'DM Sans', sans-serif", 
      position: "relative", 
      color: "#5C544D",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      padding: "5vh 5vw"
    }}>
      
      {/* Background soft shapes */}
      <div style={{ 
        position: "absolute", 
        top: "-10vh", 
        left: "-5vw", 
        width: "40vw", 
        height: "40vw", 
        borderRadius: "45% 55% 70% 30% / 40% 50% 60% 50%", 
        background: "linear-gradient(135deg, #A8E6CF 0%, #F0EBE3 100%)", 
        boxShadow: "2vw 2vw 4vw rgba(166, 154, 143, 0.3), inset -1.5vw -1.5vw 3vw rgba(150, 200, 180, 0.4), inset 1vw 1vw 2vw rgba(255,255,255,0.8)",
        opacity: 0.5,
        zIndex: 0
      }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", zIndex: 20 }}>
        <div>
          <h2 style={{ 
            fontSize: "2vw", 
            fontWeight: 700, 
            color: "#B8A9E8", 
            margin: 0,
            letterSpacing: "0.1vw",
            textTransform: "uppercase"
          }}>
            Key Feature
          </h2>
          <h1 style={{
            fontSize: "4vw",
            fontWeight: 800,
            margin: "1vh 0 0 0",
            color: "#3D3833",
            textShadow: "0.1vw 0.1vw 0.1vw rgba(255,255,255,0.8)"
          }}>
            Platform Capabilities
          </h1>
        </div>
        <div style={{ 
          ...clayButton,
          fontSize: "1.5vw", 
          fontWeight: 700,
          color: "#B8A9E8"
        }}>
          02
        </div>
      </div>

      {/* Feature Showcase Area */}
      <div style={{ 
        flex: 1, 
        position: "relative", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        marginTop: "2vh"
      }}>
        
        {/* Lines connecting pills to center */}
        {/* Top Left */}
        <div style={{ ...lineStyle, width: "12vw", top: "25vh", left: "28vw", transform: "rotate(45deg)" }} />
        {/* Top Right */}
        <div style={{ ...lineStyle, width: "12vw", top: "25vh", right: "28vw", transform: "rotate(-45deg)" }} />
        {/* Bottom Left */}
        <div style={{ ...lineStyle, width: "12vw", bottom: "25vh", left: "28vw", transform: "rotate(-45deg)" }} />
        {/* Bottom Right */}
        <div style={{ ...lineStyle, width: "12vw", bottom: "25vh", right: "28vw", transform: "rotate(45deg)" }} />

        {/* Center Card */}
        <div style={centerCardStyle}>
          <div style={{ 
            fontSize: "6vw", 
            filter: "drop-shadow(0.5vw 0.5vw 0.5vw rgba(0,0,0,0.1))" 
          }}>
            📊
          </div>
          <h3 style={{ 
            fontSize: "2.5vw", 
            fontWeight: 800, 
            color: "#fff", 
            marginTop: "2vh",
            textShadow: "0.1vw 0.1vw 0.3vw rgba(0,0,0,0.1)"
          }}>
            Smart Analytics
          </h3>
        </div>

        {/* Pills */}
        <div style={{ ...pillStyle, top: "15vh", left: "12vw" }}>
          Real-time Data
        </div>
        
        <div style={{ ...pillStyle, top: "15vh", right: "12vw" }}>
          AI Powered
        </div>
        
        <div style={{ ...pillStyle, bottom: "15vh", left: "12vw" }}>
          Team Dashboards
        </div>
        
        <div style={{ ...pillStyle, bottom: "15vh", right: "12vw" }}>
          Custom Reports
        </div>

      </div>

      {/* Footer */}
      <div style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center",
        zIndex: 20,
        marginTop: "auto"
      }}>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1.1vw", fontWeight: 700, color: "#8E867E" }}>
          <span style={{ ...clayButton, padding: "1vh 2vw" }}>
            Example Company, Inc.
          </span>
          <span style={{ ...clayButton, padding: "1vh 2vw" }}>
            Confidential
          </span>
        </div>
      </div>

    </div>
  );
}
```

### Slide 3 (`slide-pages/ClaymorphismPage3.tsx`)

```tsx
export function ClaymorphismPage3() {
  const clayBase = {
    background: "#F4F0EA", 
    borderRadius: "3vw",
    boxShadow: "1.5vw 1.5vw 3vw rgba(166, 154, 143, 0.4), -1vw -1vw 2.5vw rgba(255,255,255,0.9), inset -0.4vw -0.4vw 1vw rgba(166, 154, 143, 0.2), inset 0.4vw 0.4vw 1vw rgba(255,255,255,1)"
  };

  const clayButton = {
    background: "#F4F0EA", 
    padding: "1.5vh 3vw",
    borderRadius: "2.5vw",
    boxShadow: "0.8vw 0.8vw 1.6vw rgba(166, 154, 143, 0.3), -0.5vw -0.5vw 1.5vw rgba(255,255,255,0.9), inset -0.2vw -0.2vw 0.5vw rgba(166, 154, 143, 0.15), inset 0.2vw 0.2vw 0.5vw rgba(255,255,255,0.9)"
  };

  const clayCard = {
    ...clayBase,
    padding: "4vh 3vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  };

  const clayInner = {
    background: "#E8E2D9",
    borderRadius: "2vw",
    boxShadow: "inset 1vw 1vw 2vw rgba(166, 154, 143, 0.3), inset -0.5vw -0.5vw 1.5vw rgba(255,255,255,0.9)",
  };

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden", 
      backgroundColor: "#E8E2D9", 
      fontFamily: "'DM Sans', sans-serif", 
      position: "relative", 
      color: "#5C544D" 
    }}>
      {/* Background blobs / clay shapes */}
      <div style={{ 
        position: "absolute", 
        top: "10vh", 
        right: "-10vw", 
        width: "35vw", 
        height: "35vw", 
        borderRadius: "45% 55% 70% 30% / 40% 50% 60% 50%", 
        background: "linear-gradient(135deg, #FFDAB9 0%, #FFCBA4 100%)", 
        boxShadow: "2vw 2vw 4vw rgba(166, 154, 143, 0.3), inset -1.5vw -1.5vw 3vw rgba(220, 150, 110, 0.4), inset 1vw 1vw 2vw rgba(255,255,255,0.8)",
        opacity: 0.8
      }} />
      <div style={{ 
        position: "absolute", 
        bottom: "-5vh", 
        left: "-5vw", 
        width: "25vw", 
        height: "25vw", 
        borderRadius: "50% 50% 30% 70% / 50% 40% 60% 50%", 
        background: "linear-gradient(135deg, #E6E6FA 0%, #D8BFD8 100%)", 
        boxShadow: "1.5vw 1.5vw 3vw rgba(166, 154, 143, 0.3), inset -1vw -1vw 2.5vw rgba(180, 150, 180, 0.4), inset 1vw 1vw 2vw rgba(255,255,255,0.9)",
        opacity: 0.8
      }} />

      <div style={{ 
        padding: "6vh 7vw", 
        display: "flex", 
        flexDirection: "column", 
        height: "100%", 
        justifyContent: "space-between", 
        position: "relative", 
        zIndex: 1, 
        boxSizing: "border-box" 
      }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ 
            ...clayButton,
            fontSize: "1.2vw", 
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "0.8vw"
          }}>
            acme.co 
          </div>
          <div style={{ 
            ...clayButton,
            fontSize: "1.2vw", 
            fontWeight: 700,
            color: "#8E867E"
          }}>
            Metrics
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4vh", marginTop: "2vh" }}>
          <div style={{ 
            ...clayBase,
            borderRadius: "3vw", 
            padding: "4vh 4vw", 
            width: "fit-content"
          }}>
            <h2 style={{ 
              fontSize: "4vw", 
              fontWeight: 800, 
              lineHeight: 1, 
              margin: 0,
              color: "#3D3833",
              letterSpacing: "-0.03em",
              textShadow: "0.1vw 0.1vw 0.1vw rgba(255,255,255,0.8)"
            }}>
              Growth & Traction
            </h2>
          </div>

          <div style={{ display: "flex", gap: "3vw" }}>
            <div style={clayCard as any}>
              <h3 style={{ fontSize: "5vw", fontWeight: 800, color: "#D48C6B", margin: 0, lineHeight: 1 }}>78%</h3>
              <p style={{ fontSize: "1.5vw", fontWeight: 600, color: "#736A61", margin: "1vh 0 0 0" }}>YoY Growth</p>
            </div>
            <div style={clayCard as any}>
              <h3 style={{ fontSize: "5vw", fontWeight: 800, color: "#9CA4D1", margin: 0, lineHeight: 1 }}>2.4M</h3>
              <p style={{ fontSize: "1.5vw", fontWeight: 600, color: "#736A61", margin: "1vh 0 0 0" }}>Active Users</p>
            </div>
            <div style={clayCard as any}>
              <h3 style={{ fontSize: "5vw", fontWeight: 800, color: "#7BB594", margin: 0, lineHeight: 1 }}>$12M</h3>
              <p style={{ fontSize: "1.5vw", fontWeight: 600, color: "#736A61", margin: "1vh 0 0 0" }}>ARR</p>
            </div>
          </div>

          <div style={{ 
            ...clayBase,
            padding: "4vh 4vw",
            display: "flex",
            alignItems: "center",
            gap: "4vw"
          }}>
            <div style={{ ...clayInner, width: "30vw", height: "15vh", position: "relative", overflow: "hidden" }}>
              <div style={{ 
                position: "absolute", bottom: "2vh", left: "2vw", width: "4vw", height: "5vh", 
                background: "linear-gradient(180deg, #FFCBA4 0%, #FFDAB9 100%)", borderRadius: "1vw",
                boxShadow: "0.5vw 0.5vw 1vw rgba(166, 154, 143, 0.3), inset -0.2vw -0.2vw 0.5vw rgba(220, 150, 110, 0.4), inset 0.2vw 0.2vw 0.5vw rgba(255,255,255,0.8)"
              }} />
              <div style={{ 
                position: "absolute", bottom: "2vh", left: "8vw", width: "4vw", height: "8vh", 
                background: "linear-gradient(180deg, #FFCBA4 0%, #FFDAB9 100%)", borderRadius: "1vw",
                boxShadow: "0.5vw 0.5vw 1vw rgba(166, 154, 143, 0.3), inset -0.2vw -0.2vw 0.5vw rgba(220, 150, 110, 0.4), inset 0.2vw 0.2vw 0.5vw rgba(255,255,255,0.8)"
              }} />
              <div style={{ 
                position: "absolute", bottom: "2vh", left: "14vw", width: "4vw", height: "6vh", 
                background: "linear-gradient(180deg, #D8BFD8 0%, #E6E6FA 100%)", borderRadius: "1vw",
                boxShadow: "0.5vw 0.5vw 1vw rgba(166, 154, 143, 0.3), inset -0.2vw -0.2vw 0.5vw rgba(180, 150, 180, 0.4), inset 0.2vw 0.2vw 0.5vw rgba(255,255,255,0.9)"
              }} />
              <div style={{ 
                position: "absolute", bottom: "2vh", left: "20vw", width: "4vw", height: "11vh", 
                background: "linear-gradient(180deg, #98FF98 0%, #CFFFE5 100%)", borderRadius: "1vw",
                boxShadow: "0.5vw 0.5vw 1vw rgba(166, 154, 143, 0.3), inset -0.2vw -0.2vw 0.5vw rgba(100, 200, 130, 0.3), inset 0.2vw 0.2vw 0.5vw rgba(255,255,255,0.8)"
              }} />
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ fontSize: "2vw", fontWeight: 700, margin: "0 0 1vh 0", color: "#3D3833", textShadow: "0.1vw 0.1vw 0.1vw rgba(255,255,255,0.8)" }}>Steady Upward Trajectory</h4>
              <p style={{ fontSize: "1.3vw", fontWeight: 500, color: "#736A61", margin: 0, lineHeight: 1.5 }}>
                Our quarter-over-quarter metrics continue to outperform expectations, solidifying our market position.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "1.1vw", fontWeight: 700, color: "#8E867E" }}>
          <div style={{ display: "flex", gap: "2vw" }}>
            <span style={{ ...clayButton, padding: "1vh 2vw" }}>
              Example Company, Inc.
            </span>
          </div>
          <div style={{ ...clayButton, padding: "1vh 2vw" }}>
            03
          </div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/ClaymorphismPage4.tsx`)

```tsx
export function ClaymorphismPage4() {
  const clayBase = {
    background: "#F4F0EA", 
    borderRadius: "3vw",
    boxShadow: "1.5vw 1.5vw 3vw rgba(166, 154, 143, 0.4), -1vw -1vw 2.5vw rgba(255,255,255,0.9), inset -0.4vw -0.4vw 1vw rgba(166, 154, 143, 0.2), inset 0.4vw 0.4vw 1vw rgba(255,255,255,1)"
  };

  const clayButton = {
    background: "#F4F0EA", 
    padding: "1.5vh 3vw",
    borderRadius: "2.5vw",
    boxShadow: "0.8vw 0.8vw 1.6vw rgba(166, 154, 143, 0.3), -0.5vw -0.5vw 1.5vw rgba(255,255,255,0.9), inset -0.2vw -0.2vw 0.5vw rgba(166, 154, 143, 0.15), inset 0.2vw 0.2vw 0.5vw rgba(255,255,255,0.9)"
  };

  const clayInput = {
    background: "#E8E2D9",
    borderRadius: "2vw",
    padding: "2vh 2vw",
    boxShadow: "inset 1vw 1vw 2vw rgba(166, 154, 143, 0.3), inset -0.5vw -0.5vw 1.5vw rgba(255,255,255,0.9)",
    border: "none",
    outline: "none",
    fontSize: "1.5vw",
    color: "#5C544D",
    fontFamily: "'DM Sans', sans-serif",
    fontWeight: 500,
    width: "100%",
    boxSizing: "border-box" as const,
  };

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden", 
      backgroundColor: "#E8E2D9", 
      fontFamily: "'DM Sans', sans-serif", 
      position: "relative", 
      color: "#5C544D" 
    }}>
      {/* Background blobs / clay shapes */}
      <div style={{ 
        position: "absolute", 
        top: "20vh", 
        left: "-15vw", 
        width: "45vw", 
        height: "45vw", 
        borderRadius: "45% 55% 70% 30% / 40% 50% 60% 50%", 
        background: "linear-gradient(135deg, #FFDAB9 0%, #FFCBA4 100%)", 
        boxShadow: "2vw 2vw 4vw rgba(166, 154, 143, 0.3), inset -1.5vw -1.5vw 3vw rgba(220, 150, 110, 0.4), inset 1vw 1vw 2vw rgba(255,255,255,0.8)",
        transition: "all 3s ease-in-out",
        opacity: 0.6
      }} />
      <div style={{ 
        position: "absolute", 
        top: "-10vh", 
        right: "10vw", 
        width: "35vw", 
        height: "35vw", 
        borderRadius: "60% 40% 50% 50% / 40% 60% 50% 50%", 
        background: "linear-gradient(135deg, #CFFFE5 0%, #98FF98 100%)", 
        boxShadow: "1.5vw 1.5vw 3vw rgba(166, 154, 143, 0.2), inset -1vw -1vw 2.5vw rgba(100, 200, 130, 0.3), inset 1vw 1vw 2vw rgba(255,255,255,0.8)",
        opacity: 0.7
      }} />

      <div style={{ 
        padding: "6vh 7vw", 
        display: "flex", 
        flexDirection: "column", 
        height: "100%", 
        justifyContent: "space-between", 
        position: "relative", 
        zIndex: 1, 
        boxSizing: "border-box" 
      }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ 
            ...clayButton,
            fontSize: "1.2vw", 
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "0.8vw"
          }}>
            acme.co 
          </div>
          <div style={{ 
            ...clayButton,
            fontSize: "1.2vw", 
            fontWeight: 700,
            color: "#8E867E"
          }}>
            Get in touch
          </div>
        </div>

        {/* Main Content */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          justifyContent: "center",
          flex: 1
        }}>
          <div style={{ 
            ...clayBase,
            borderRadius: "4vw", 
            padding: "8vh 8vw", 
            maxWidth: "60vw",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4vh"
          }}>
            <h1 style={{ 
              fontSize: "5vw", 
              fontWeight: 800, 
              lineHeight: 1.1, 
              margin: 0,
              color: "#3D3833",
              letterSpacing: "-0.03em",
              textShadow: "0.1vw 0.1vw 0.1vw rgba(255,255,255,0.8)"
            }}>
              Let's shape the future together.
            </h1>
            <p style={{ 
              fontSize: "1.8vw", 
              fontWeight: 500,
              color: "#736A61", 
              margin: 0,
              maxWidth: "40vw", 
              lineHeight: 1.5,
              textShadow: "0.05vw 0.05vw 0.1vw rgba(255,255,255,0.5)"
            }}>
              Join us on our journey to revolutionize the industry. We're opening up our next round of partnerships.
            </p>

            <div style={{ width: "100%", display: "flex", gap: "2vw", marginTop: "2vh" }}>
              <div style={{ flex: 1 }}>
                <input 
                  type="text" 
                  placeholder="name@company.com" 
                  style={clayInput}
                  disabled
                />
              </div>
              <div style={{ 
                ...clayButton,
                background: "linear-gradient(135deg, #FFDAB9 0%, #FFCBA4 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5vw",
                fontWeight: 700,
                color: "#9A6B4E",
                cursor: "pointer",
                padding: "2vh 4vw"
              }}>
                Send
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "1.1vw", fontWeight: 700, color: "#8E867E" }}>
          <div style={{ display: "flex", gap: "2vw" }}>
            <span style={{ ...clayButton, padding: "1vh 2vw" }}>
              hello@example.com
            </span>
            <span style={{ ...clayButton, padding: "1vh 2vw" }}>
              @exampleco
            </span>
          </div>
          <div style={{ ...clayButton, padding: "1vh 2vw" }}>
            04
          </div>
        </div>

      </div>
    </div>
  );
}
```
