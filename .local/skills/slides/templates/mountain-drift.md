# Mountain Drift

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "MountainDrift" template features a dark, moody aesthetic with a focus on nature and adventure. The background color is solid black (#000), while a semi-transparent overlay in a dark brown shade (rgba(15,12,10,0.85)) is applied to the right side of the slide. Text elements utilize a warm gold color (#C49A6C) for accents, a soft off-white (#F0E8DD) for the main title, and a muted gray (#A8A096) for the subtitle. The font families used include 'DM Mono', a monospace font for headings and details, and 'Space Grotesk', a sans-serif font for the main title and subtitle, enhancing readability and modernity. Key layout elements include a full-screen background image of a mountain road (URL: /__mockup/photos/autumn-mountain-road.png) and a structured right-side content area that employs flexbox for alignment. The overall aesthetic feel is "dark, adventurous."

## Source Code

**Component:** `MountainDrift`

### Slide 1 — Title (`slide-styles/MountainDrift.tsx`)

```tsx
export function MountainDrift() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000" }}>
      <img 
        src="/__mockup/photos/autumn-mountain-road.png" 
        alt="Mountain Road" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} 
      />
      <div style={{ 
        position: "absolute", 
        top: 0, 
        right: 0, 
        width: "50vw", 
        height: "55vh", 
        background: "rgba(15,12,10,0.85)",
        display: "flex",
        flexDirection: "column",
        padding: "5vh 5vw",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#C49A6C", fontSize: "0.8vw", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            The Drift
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "1px", height: "2vh", background: "#C49A6C", marginBottom: "0.5vh" }} />
            <div style={{ fontFamily: "'DM Mono', monospace", color: "#C49A6C", fontSize: "0.9vw", fontWeight: "bold" }}>N</div>
          </div>
        </div>
        
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#C49A6C", fontSize: "0.8vw", letterSpacing: "0.2em", marginBottom: "1vh" }}>
          ALTITUDE / 48.2082° N, 16.3738° E
        </div>
        
        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8DD", fontSize: "4.5vw", margin: "0 0 2vh 0", lineHeight: 1.1, fontWeight: 500 }}>
          Example Deck
        </h1>
        
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A8A096", fontSize: "1.2vw", lineHeight: 1.5, margin: 0, maxWidth: "30vw" }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        <div style={{ marginTop: "auto", fontFamily: "'DM Mono', monospace", color: "#7A736A", fontSize: "0.8vw", letterSpacing: "0.1em" }}>
          acme.co
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/MountainDriftPage2.tsx`)

```tsx
export function MountainDriftPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#0F0C0A", display: "flex" }}>
      <div style={{ width: "35vw", height: "100vh", position: "relative" }}>
        <img 
          src="/__mockup/photos/autumn-mountain-road.png" 
          alt="Mountain Road" 
          style={{ width: "100%", height: "100%", objectFit: "cover" }} 
        />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(to right, rgba(15,12,10,0) 0%, rgba(15,12,10,1) 100%)" }} />
      </div>
      
      <div style={{ 
        width: "65vw", 
        height: "100vh", 
        display: "flex",
        flexDirection: "column",
        padding: "8vh 8vw",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#C49A6C", fontSize: "0.8vw", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            The Drift &gt; Core Concepts
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#7A736A", fontSize: "0.8vw" }}>
            02
          </div>
        </div>
        
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8DD", fontSize: "3.5vw", margin: "0 0 4vh 0", lineHeight: 1.1, fontWeight: 500 }}>
          Navigating the Terrain
        </h2>
        
        <div style={{ display: "flex", gap: "4vw", marginTop: "2vh" }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: "2vw", height: "1px", background: "#C49A6C", marginBottom: "2vh" }} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8DD", fontSize: "1.5vw", margin: "0 0 1.5vh 0", fontWeight: 400 }}>
              Adaptability
            </h3>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A8A096", fontSize: "1.1vw", lineHeight: 1.6, margin: 0 }}>
              Our approach shifts with the landscape. We don't force a straight line when the conditions demand a winding path. True progress requires reading the environment and adjusting our speed accordingly.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ width: "2vw", height: "1px", background: "#C49A6C", marginBottom: "2vh" }} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8DD", fontSize: "1.5vw", margin: "0 0 1.5vh 0", fontWeight: 400 }}>
              Endurance
            </h3>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A8A096", fontSize: "1.1vw", lineHeight: 1.6, margin: 0 }}>
              The journey is long and often steep. We build systems that are designed to last, prioritizing sustainable growth over quick sprints that lead to early burnout.
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "4vw", marginTop: "6vh" }}>
          <div style={{ flex: 1 }}>
            <div style={{ width: "2vw", height: "1px", background: "#C49A6C", marginBottom: "2vh" }} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8DD", fontSize: "1.5vw", margin: "0 0 1.5vh 0", fontWeight: 400 }}>
              Precision
            </h3>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A8A096", fontSize: "1.1vw", lineHeight: 1.6, margin: 0 }}>
              Every movement must be calculated. A misstep in challenging conditions can have compounding effects. We measure, analyze, and execute with absolute focus.
            </p>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ width: "2vw", height: "1px", background: "#C49A6C", marginBottom: "2vh" }} />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8DD", fontSize: "1.5vw", margin: "0 0 1.5vh 0", fontWeight: 400 }}>
              Vision
            </h3>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A8A096", fontSize: "1.1vw", lineHeight: 1.6, margin: 0 }}>
              We keep our eyes on the horizon. Short-term obstacles are just variations in the terrain. Maintaining a clear line of sight to our ultimate destination is non-negotiable.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#7A736A", fontSize: "0.8vw", letterSpacing: "0.1em" }}>
            acme.co
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#C49A6C", fontSize: "0.8vw", letterSpacing: "0.2em" }}>
            STRATEGY / 2024
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/MountainDriftPage3.tsx`)

```tsx
export function MountainDriftPage3() {
  const data = [
    { label: "Q1", value: 35, accent: false },
    { label: "Q2", value: 48, accent: false },
    { label: "Q3", value: 62, accent: false },
    { label: "Q4", value: 85, accent: true },
    { label: "Q1*", value: 70, accent: false },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#0F0C0A", padding: "8vh 8vw", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(196,154,108,0.05) 0%, rgba(15,12,10,0) 70%)", pointerEvents: "none" }} />
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#C49A6C", fontSize: "0.8vw", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          The Drift &gt; Metrics
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#7A736A", fontSize: "0.8vw" }}>
          03
        </div>
      </div>
      
      <div style={{ display: "flex", gap: "5vw" }}>
        <div style={{ flex: "0 0 35vw" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8DD", fontSize: "3.5vw", margin: "0 0 3vh 0", lineHeight: 1.1, fontWeight: 500 }}>
            Elevation Gains
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A8A096", fontSize: "1.2vw", lineHeight: 1.6, margin: "0 0 4vh 0" }}>
            Our trajectory shows consistent upward momentum. The final quarter represents our steepest climb, validating the shift in our routing strategy and the endurance of our core systems.
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", background: "#C49A6C" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", color: "#F0E8DD", fontSize: "0.9vw" }}>Peak Velocity (+42%)</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", background: "rgba(196,154,108,0.3)" }} />
              <span style={{ fontFamily: "'DM Mono', monospace", color: "#A8A096", fontSize: "0.9vw" }}>Baseline Trajectory</span>
            </div>
          </div>
        </div>
        
        <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "2vw", height: "50vh", borderBottom: "1px solid rgba(196,154,108,0.3)", paddingBottom: "2vh", position: "relative" }}>
          {/* Chart Grid Lines */}
          <div style={{ position: "absolute", top: "0", left: 0, width: "100%", height: "1px", background: "rgba(196,154,108,0.1)" }} />
          <div style={{ position: "absolute", top: "25%", left: 0, width: "100%", height: "1px", background: "rgba(196,154,108,0.1)" }} />
          <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "1px", background: "rgba(196,154,108,0.1)" }} />
          <div style={{ position: "absolute", top: "75%", left: 0, width: "100%", height: "1px", background: "rgba(196,154,108,0.1)" }} />
          
          {data.map((item, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5vh", zIndex: 1 }}>
              <div style={{ fontFamily: "'DM Mono', monospace", color: item.accent ? "#F0E8DD" : "#A8A096", fontSize: "1.2vw", fontWeight: item.accent ? "bold" : "normal" }}>
                {item.value}
              </div>
              <div style={{ 
                width: "100%", 
                height: `${item.value * 0.45}vh`, 
                background: item.accent ? "#C49A6C" : "rgba(196,154,108,0.3)",
                transition: "height 1s ease-out"
              }} />
              <div style={{ fontFamily: "'DM Mono', monospace", color: "#7A736A", fontSize: "0.9vw" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#7A736A", fontSize: "0.8vw", letterSpacing: "0.1em" }}>
          acme.co
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <div style={{ width: "1px", height: "2vh", background: "#C49A6C", marginBottom: "0.5vh" }} />
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#C49A6C", fontSize: "0.8vw", letterSpacing: "0.2em" }}>
            ELEV / +850M
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/MountainDriftPage4.tsx`)

```tsx
export function MountainDriftPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img 
        src="/__mockup/photos/autumn-mountain-road.png" 
        alt="Mountain Road" 
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.6) grayscale(0.2)" }} 
      />
      
      <div style={{ 
        position: "relative", 
        width: "60vw", 
        background: "rgba(15,12,10,0.85)",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 6vw",
        boxSizing: "border-box",
        borderTop: "2px solid #C49A6C",
        alignItems: "center",
        textAlign: "center"
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "4vh" }}>
          <div style={{ width: "1px", height: "4vh", background: "#C49A6C", marginBottom: "1vh" }} />
          <div style={{ fontFamily: "'DM Mono', monospace", color: "#C49A6C", fontSize: "1vw", fontWeight: "bold" }}>N</div>
        </div>
        
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#F0E8DD", fontSize: "4.5vw", margin: "0 0 3vh 0", lineHeight: 1.1, fontWeight: 500 }}>
          Begin the Ascent.
        </h2>
        
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", color: "#A8A096", fontSize: "1.2vw", lineHeight: 1.6, margin: "0 0 5vh 0", maxWidth: "35vw" }}>
          The path is clear and the conditions are optimal. We are ready to move forward and tackle the challenges ahead.
        </p>
        
        <div style={{ 
          padding: "1.5vh 3vw", 
          border: "1px solid #C49A6C", 
          color: "#C49A6C", 
          fontFamily: "'DM Mono', monospace", 
          fontSize: "1vw",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer",
          marginBottom: "4vh"
        }}>
          Initiate Contact
        </div>
        
        <div style={{ fontFamily: "'DM Mono', monospace", color: "#7A736A", fontSize: "0.9vw", letterSpacing: "0.2em" }}>
          HELLO@ACME.CO &nbsp;|&nbsp; +1 800 555 0199
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "5vh", left: "5vw", fontFamily: "'DM Mono', monospace", color: "#A8A096", fontSize: "0.8vw", letterSpacing: "0.1em" }}>
        acme.co
      </div>
      
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", fontFamily: "'DM Mono', monospace", color: "#A8A096", fontSize: "0.8vw" }}>
        04
      </div>
    </div>
  );
}
```
