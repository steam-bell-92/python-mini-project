# Coral Reef

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The CoralReef template features a deep oceanic aesthetic, characterized by a linear gradient background transitioning from #0A3D5C to #051B2C. The text color is #E8E0D0, with accent colors including #C4726E and #6B9E8E used for decorative organic shapes and bubbles throughout the design. The primary font family is 'DM Sans' for general text, while 'Playfair Display' is used for the main heading, creating a contrast between modern and classic styles. Key layout elements include various blurred, rounded shapes positioned throughout the background, simulating underwater coral and seafoam, along with strategically placed bubbles. The overall aesthetic feel can be described as tranquil and immersive.

## Source Code

**Component:** `CoralReef`

### Slide 1 — Title (`slide-styles/CoralReef.tsx`)

```tsx
export function CoralReef() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #0A3D5C, #051B2C)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#E8E0D0",
      }}
    >
      {/* Background organic shapes (Coral, Seafoam, Sandy) */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          left: "-10vw",
          width: "45vw",
          height: "45vw",
          background: "#C4726E",
          opacity: 0.2,
          borderRadius: "40% 60% 70% 30% / 50% 40% 60% 50%",
          filter: "blur(2vw)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15vh",
          right: "-5vw",
          width: "55vw",
          height: "55vw",
          background: "#6B9E8E",
          opacity: 0.15,
          borderRadius: "60% 40% 30% 70% / 40% 50% 60% 50%",
          filter: "blur(3vw)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40vh",
          left: "60vw",
          width: "30vw",
          height: "30vw",
          background: "#C4B896",
          opacity: 0.2,
          borderRadius: "30% 70% 50% 50% / 50% 30% 70% 50%",
          filter: "blur(1.5vw)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "60vh",
          left: "10vw",
          width: "25vw",
          height: "25vw",
          background: "#C4726E",
          opacity: 0.25,
          borderRadius: "70% 30% 60% 40% / 30% 60% 40% 70%",
          filter: "blur(2vw)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "15vh",
          right: "20vw",
          width: "20vw",
          height: "20vw",
          background: "#6B9E8E",
          opacity: 0.2,
          borderRadius: "45% 55% 40% 60% / 55% 45% 60% 40%",
          filter: "blur(1vw)",
        }}
      />

      {/* Bubbles */}
      <div style={{ position: "absolute", top: "25vh", left: "20vw", width: "0.5vw", height: "0.5vw", background: "white", borderRadius: "50%", opacity: 0.15 }} />
      <div style={{ position: "absolute", top: "15vh", left: "22vw", width: "0.3vw", height: "0.3vw", background: "white", borderRadius: "50%", opacity: 0.2 }} />
      <div style={{ position: "absolute", top: "30vh", left: "18vw", width: "0.4vw", height: "0.4vw", background: "white", borderRadius: "50%", opacity: 0.1 }} />
      
      <div style={{ position: "absolute", top: "65vh", right: "25vw", width: "0.6vw", height: "0.6vw", background: "white", borderRadius: "50%", opacity: 0.15 }} />
      <div style={{ position: "absolute", top: "55vh", right: "28vw", width: "0.4vw", height: "0.4vw", background: "white", borderRadius: "50%", opacity: 0.1 }} />
      <div style={{ position: "absolute", top: "60vh", right: "22vw", width: "0.5vw", height: "0.5vw", background: "white", borderRadius: "50%", opacity: 0.2 }} />

      <div style={{ position: "absolute", top: "45vh", left: "10vw", width: "0.5vw", height: "0.5vw", background: "white", borderRadius: "50%", opacity: 0.15 }} />
      <div style={{ position: "absolute", top: "80vh", left: "40vw", width: "0.4vw", height: "0.4vw", background: "white", borderRadius: "50%", opacity: 0.1 }} />
      <div style={{ position: "absolute", top: "20vh", right: "10vw", width: "0.5vw", height: "0.5vw", background: "white", borderRadius: "50%", opacity: 0.15 }} />
      <div style={{ position: "absolute", top: "75vh", right: "45vw", width: "0.3vw", height: "0.3vw", background: "white", borderRadius: "50%", opacity: 0.2 }} />

      {/* Main Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header */}
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05em", opacity: 0.9 }}>acme.co</div>
          <div style={{ fontSize: "1vw", letterSpacing: "0.1em", opacity: 0.7 }}>2026</div>
        </div>

        {/* Center Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "65vw" }}>
          <div
            style={{
              fontSize: "0.9vw",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "3vh",
              color: "#6B9E8E",
              fontWeight: 600,
            }}
          >
            Deep Exploration
          </div>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "7.5vw",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
              color: "white",
              letterSpacing: "-0.01em",
            }}
          >
            Example Deck
          </h1>
          <p
            style={{
              fontSize: "1.5vw",
              marginTop: "4vh",
              maxWidth: "45vw",
              lineHeight: 1.6,
              fontWeight: 300,
              opacity: 0.85,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Bottom Footer */}
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2vw" }}>
            <div style={{ width: "4vw", height: "1px", background: "#E8E0D0", opacity: 0.5 }} />
            <span style={{ fontSize: "0.9vw", letterSpacing: "0.1em", opacity: 0.7 }}>Example Company, Inc.</span>
          </div>
          <span style={{ fontSize: "0.9vw", opacity: 0.6, letterSpacing: "0.1em", textTransform: "uppercase" }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CoralReefPage2.tsx`)

```tsx
export function CoralReefPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #0A3D5C, #051B2C)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#E8E0D0",
      }}
    >
      {/* Background organic shapes (Coral, Seafoam, Sandy) */}
      <div style={{ position: "absolute", top: "-5vh", left: "40vw", width: "45vw", height: "45vw", background: "#C4726E", opacity: 0.15, borderRadius: "40% 60% 70% 30% / 50% 40% 60% 50%", filter: "blur(2vw)" }} />
      <div style={{ position: "absolute", bottom: "-20vh", left: "-10vw", width: "60vw", height: "60vw", background: "#6B9E8E", opacity: 0.1, borderRadius: "60% 40% 30% 70% / 40% 50% 60% 50%", filter: "blur(3vw)" }} />
      <div style={{ position: "absolute", top: "30vh", right: "-5vw", width: "35vw", height: "35vw", background: "#C4B896", opacity: 0.15, borderRadius: "30% 70% 50% 50% / 50% 30% 70% 50%", filter: "blur(1.5vw)" }} />
      
      {/* Bubbles */}
      <div style={{ position: "absolute", top: "15vh", left: "10vw", width: "0.4vw", height: "0.4vw", background: "white", borderRadius: "50%", opacity: 0.15 }} />
      <div style={{ position: "absolute", top: "85vh", right: "20vw", width: "0.6vw", height: "0.6vw", background: "white", borderRadius: "50%", opacity: 0.2 }} />
      <div style={{ position: "absolute", top: "50vh", left: "5vw", width: "0.3vw", height: "0.3vw", background: "white", borderRadius: "50%", opacity: 0.1 }} />
      <div style={{ position: "absolute", top: "30vh", left: "45vw", width: "0.5vw", height: "0.5vw", background: "white", borderRadius: "50%", opacity: 0.15 }} />
      <div style={{ position: "absolute", top: "70vh", left: "60vw", width: "0.4vw", height: "0.4vw", background: "white", borderRadius: "50%", opacity: 0.2 }} />

      {/* Main Content Container */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top Header */}
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05em", opacity: 0.9 }}>acme.co</div>
          <div style={{ fontSize: "1vw", letterSpacing: "0.1em", opacity: 0.7 }}>Our Approach</div>
        </div>

        {/* Body Content */}
        <div style={{ display: "flex", flex: 1, marginTop: "8vh", gap: "8vw" }}>
          {/* Left Column */}
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "4.5vw",
                fontWeight: 400,
                lineHeight: 1.1,
                margin: "0 0 4vh 0",
                color: "white",
                letterSpacing: "-0.01em",
              }}
            >
              Navigating the Current
            </h2>
            <p
              style={{
                fontSize: "1.4vw",
                lineHeight: 1.7,
                fontWeight: 300,
                opacity: 0.85,
                marginBottom: "3vh",
              }}
            >
              Just as coral reefs support vibrant ecosystems, our foundation provides the infrastructure needed for sustainable growth. We build resilient frameworks that adapt to changing environments.
            </p>
            <p
              style={{
                fontSize: "1.4vw",
                lineHeight: 1.7,
                fontWeight: 300,
                opacity: 0.85,
              }}
            >
              By focusing on systemic balance and organic expansion, we ensure that every new development is grounded in solid, reliable principles.
            </p>
          </div>

          {/* Right Column */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "4vh" }}>
            {[
              { title: "Adaptability", desc: "Flexing with the tides of market shifts to maintain stability.", color: "#C4726E" },
              { title: "Ecosystem Growth", desc: "Fostering partnerships that benefit all participants.", color: "#6B9E8E" },
              { title: "Endurance", desc: "Creating long-lasting value through robust architectures.", color: "#C4B896" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "2vw", alignItems: "flex-start", padding: "2vh 0", borderBottom: i < 2 ? "1px solid rgba(232, 224, 208, 0.15)" : "none" }}>
                <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", background: item.color, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2vw", color: "#0A3D5C", fontWeight: 600, flexShrink: 0 }}>
                  0{i + 1}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.5vw", margin: "0 0 1vh 0", color: "white", fontWeight: 500 }}>{item.title}</h3>
                  <p style={{ fontSize: "1.1vw", margin: 0, opacity: 0.7, lineHeight: 1.5, fontWeight: 300 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
          <span style={{ fontSize: "0.9vw", letterSpacing: "0.1em", opacity: 0.7 }}>02</span>
          <span style={{ fontSize: "0.9vw", opacity: 0.6, letterSpacing: "0.1em", textTransform: "uppercase" }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CoralReefPage3.tsx`)

```tsx
export function CoralReefPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #0A3D5C, #051B2C)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#E8E0D0",
      }}
    >
      {/* Background organic shapes */}
      <div style={{ position: "absolute", top: "10vh", left: "10vw", width: "40vw", height: "40vw", background: "#6B9E8E", opacity: 0.15, borderRadius: "50% 40% 60% 50% / 40% 60% 70% 30%", filter: "blur(2.5vw)" }} />
      <div style={{ position: "absolute", bottom: "-10vh", right: "10vw", width: "50vw", height: "50vw", background: "#C4726E", opacity: 0.15, borderRadius: "30% 70% 50% 50% / 50% 30% 70% 50%", filter: "blur(2vw)" }} />
      <div style={{ position: "absolute", top: "40vh", left: "40vw", width: "25vw", height: "25vw", background: "#C4B896", opacity: 0.15, borderRadius: "70% 30% 60% 40% / 30% 60% 40% 70%", filter: "blur(1.5vw)" }} />

      {/* Bubbles */}
      <div style={{ position: "absolute", top: "20vh", left: "30vw", width: "0.7vw", height: "0.7vw", background: "white", borderRadius: "50%", opacity: 0.15 }} />
      <div style={{ position: "absolute", top: "70vh", left: "15vw", width: "0.4vw", height: "0.4vw", background: "white", borderRadius: "50%", opacity: 0.2 }} />
      <div style={{ position: "absolute", top: "40vh", right: "25vw", width: "0.5vw", height: "0.5vw", background: "white", borderRadius: "50%", opacity: 0.1 }} />
      <div style={{ position: "absolute", top: "80vh", right: "40vw", width: "0.6vw", height: "0.6vw", background: "white", borderRadius: "50%", opacity: 0.15 }} />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05em", opacity: 0.9 }}>acme.co</div>
          <div style={{ fontSize: "1vw", letterSpacing: "0.1em", opacity: 0.7 }}>Performance Metrics</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "3.5vw",
              fontWeight: 400,
              margin: "0 0 8vh 0",
              color: "white",
              letterSpacing: "-0.01em",
              textAlign: "center"
            }}
          >
            Measuring Our Depth
          </h2>

          <div style={{ display: "flex", gap: "6vw", justifyContent: "center", width: "100%" }}>
            {[
              { value: "84%", label: "Market Penetration", desc: "Expanding our reach across global currents", color: "#C4726E" },
              { value: "2.5x", label: "Year Over Year", desc: "Multiplying our impact within the ecosystem", color: "#6B9E8E" },
              { value: "99.9%", label: "System Reliability", desc: "Maintaining stability in turbulent waters", color: "#C4B896" }
            ].map((stat, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", width: "20vw" }}>
                <div 
                  style={{ 
                    width: "14vw", 
                    height: "14vw", 
                    borderRadius: "50%", 
                    border: `0.2vw solid ${stat.color}`,
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center",
                    marginBottom: "3vh",
                    position: "relative",
                    background: "rgba(255,255,255,0.02)"
                  }}
                >
                  <div style={{ position: "absolute", width: "12vw", height: "12vw", borderRadius: "50%", border: `0.1vw dashed ${stat.color}`, opacity: 0.5 }} />
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", color: "white", fontWeight: 400 }}>
                    {stat.value}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.4vw", fontWeight: 600, color: "white", margin: "0 0 1.5vh 0", letterSpacing: "0.05em" }}>{stat.label}</h3>
                <p style={{ fontSize: "1vw", opacity: 0.7, lineHeight: 1.5, margin: 0, fontWeight: 300 }}>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
          <span style={{ fontSize: "0.9vw", letterSpacing: "0.1em", opacity: 0.7 }}>03</span>
          <span style={{ fontSize: "0.9vw", opacity: 0.6, letterSpacing: "0.1em", textTransform: "uppercase" }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CoralReefPage4.tsx`)

```tsx
export function CoralReefPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(to bottom, #0A3D5C, #051B2C)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#E8E0D0",
      }}
    >
      {/* Background organic shapes */}
      <div style={{ position: "absolute", top: "20vh", left: "20vw", width: "60vw", height: "60vw", background: "#6B9E8E", opacity: 0.2, borderRadius: "50% 50% 40% 60% / 60% 40% 50% 50%", filter: "blur(3vw)" }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "15vw", width: "40vw", height: "40vw", background: "#C4726E", opacity: 0.15, borderRadius: "40% 60% 70% 30% / 50% 40% 60% 50%", filter: "blur(2vw)" }} />
      <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "30vw", height: "30vw", background: "#C4B896", opacity: 0.15, borderRadius: "60% 40% 30% 70% / 40% 50% 60% 50%", filter: "blur(2vw)" }} />

      {/* Bubbles */}
      <div style={{ position: "absolute", top: "35vh", left: "25vw", width: "0.6vw", height: "0.6vw", background: "white", borderRadius: "50%", opacity: 0.15 }} />
      <div style={{ position: "absolute", top: "65vh", right: "35vw", width: "0.8vw", height: "0.8vw", background: "white", borderRadius: "50%", opacity: 0.1 }} />
      <div style={{ position: "absolute", top: "45vh", right: "15vw", width: "0.4vw", height: "0.4vw", background: "white", borderRadius: "50%", opacity: 0.2 }} />
      <div style={{ position: "absolute", top: "25vh", right: "25vw", width: "0.5vw", height: "0.5vw", background: "white", borderRadius: "50%", opacity: 0.15 }} />
      <div style={{ position: "absolute", top: "75vh", left: "30vw", width: "0.3vw", height: "0.3vw", background: "white", borderRadius: "50%", opacity: 0.1 }} />

      {/* Main Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          padding: "6vh 6vw",
          boxSizing: "border-box",
        }}
      >
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05em", opacity: 0.9 }}>acme.co</div>
          <div style={{ fontSize: "1vw", letterSpacing: "0.1em", opacity: 0.7 }}>Next Steps</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center" }}>
          <div
            style={{
              fontSize: "0.9vw",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: "3vh",
              color: "#C4B896",
              fontWeight: 600,
            }}
          >
            Dive In Together
          </div>
          
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "6vw",
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0,
              color: "white",
              letterSpacing: "-0.01em",
              maxWidth: "70vw"
            }}
          >
            Ready to explore the depths?
          </h1>
          
          <p
            style={{
              fontSize: "1.5vw",
              marginTop: "4vh",
              marginBottom: "6vh",
              maxWidth: "40vw",
              lineHeight: 1.6,
              fontWeight: 300,
              opacity: 0.85,
            }}
          >
            Reach out to our team to discover how we can build a resilient, thriving ecosystem for your business.
          </p>

          <div style={{ display: "flex", gap: "3vw" }}>
            <div style={{ padding: "1.5vh 3vw", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "2vw", fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.05em", color: "white", cursor: "pointer" }}>
              hello@acme.co
            </div>
            <div style={{ padding: "1.5vh 3vw", background: "#6B9E8E", borderRadius: "2vw", fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.05em", color: "#051B2C", cursor: "pointer" }}>
              Book a Meeting
            </div>
          </div>
        </div>

        <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
          <span style={{ fontSize: "0.9vw", letterSpacing: "0.1em", opacity: 0.7 }}>04</span>
          <span style={{ fontSize: "0.9vw", opacity: 0.6, letterSpacing: "0.1em", textTransform: "uppercase" }}>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```
