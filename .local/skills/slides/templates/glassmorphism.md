# Glassmorphism

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "Glassmorphism" template features a modern, translucent aesthetic characterized by a vibrant linear gradient background transitioning from #667eea to #764ba2 and finally to #f093fb. The text color is set to white (#fff), while various accent elements utilize shades of white with varying opacities, such as rgba(255,255,255,0.15) and rgba(255,255,255,0.12). The primary font family used is 'Inter', which is applied throughout the component for a clean and contemporary look. Key layout elements include several circular, blurred decorative shapes positioned at various corners of the viewport, enhancing the glass-like effect. There are no background images specified in the code. The overall aesthetic feel can be described as "modern, sleek, vibrant."

## Source Code

**Component:** `Glassmorphism`

### Slide 1 — Title (`slide-styles/Glassmorphism.tsx`)

```tsx
export function Glassmorphism() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)", fontFamily: "'Inter', sans-serif", position: "relative", color: "#fff" }}>
      <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "35vw", height: "35vw", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(2px)" }} />
      <div style={{ position: "absolute", bottom: "-15vh", left: "10vw", width: "25vw", height: "25vw", borderRadius: "50%", background: "rgba(240,147,251,0.3)", filter: "blur(3px)" }} />
      <div style={{ position: "absolute", top: "20vh", left: "60vw", width: "15vw", height: "15vw", borderRadius: "50%", background: "rgba(102,126,234,0.4)", filter: "blur(2px)" }} />
      <div style={{ padding: "6vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "1vw", padding: "0.8vh 1.5vw", fontSize: "1.2vw", fontWeight: 600 }}>
            acme.co
          </div>
          <div style={{ fontSize: "1vw", opacity: 0.7 }}>2026</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "2vw", padding: "5vh 4vw", maxWidth: "65vw" }}>
          <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.7, marginBottom: "1.5vh" }}>Presentation Title</div>
          <h1 style={{ fontSize: "5.5vw", fontWeight: 800, lineHeight: 0.95, margin: 0 }}>
            Example Deck
          </h1>
          <p style={{ fontSize: "1.6vw", opacity: 0.8, marginTop: "2vh", maxWidth: "45vw", lineHeight: 1.5 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "0.9vw", opacity: 0.6 }}>
          <span>Example Company, Inc.</span>
          <span>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/GlassmorphismPage2.tsx`)

```tsx
export function GlassmorphismPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "linear-gradient(135deg, #1e0b3d 0%, #3a1c71 50%, #4a54c4 100%)",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 7vw",
        boxSizing: "border-box"
      }}
    >
      {/* Background ambient blurs */}
      <div style={{ position: "absolute", top: "-10vh", right: "-10vw", width: "40vw", height: "40vw", borderRadius: "50%", background: "rgba(102,126,234,0.3)", filter: "blur(80px)", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-15vh", left: "-5vw", width: "45vw", height: "45vw", borderRadius: "50%", background: "rgba(240,147,251,0.2)", filter: "blur(100px)", zIndex: 0 }} />

      {/* Header */}
      <div style={{ zIndex: 1, position: "relative" }}>
        <h2 style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.2em", opacity: 0.7, margin: 0 }}>
          Why Us
        </h2>
      </div>

      {/* Content Grid */}
      <div style={{ zIndex: 1, position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3vw", marginTop: "4vh", marginBottom: "4vh", flex: 1 }}>
        
        {/* Card 1 */}
        <div style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "2vw",
          padding: "4vh 3vw",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <div style={{ fontSize: "3vw", marginBottom: "2vh" }}>⚡</div>
          <h3 style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 1.5vh 0", letterSpacing: "-0.02em" }}>Lightning Fast</h3>
          <p style={{ fontSize: "0.9vw", opacity: 0.8, margin: 0, lineHeight: 1.6 }}>
            Experience unparalleled speeds with our optimized infrastructure. Zero latency ensures your workflow remains uninterrupted and seamless across all devices.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "2vw",
          padding: "4vh 3vw",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <div style={{ fontSize: "3vw", marginBottom: "2vh" }}>🔒</div>
          <h3 style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 1.5vh 0", letterSpacing: "-0.02em" }}>Enterprise Security</h3>
          <p style={{ fontSize: "0.9vw", opacity: 0.8, margin: 0, lineHeight: 1.6 }}>
            Bank-grade encryption and advanced threat detection keep your data safe. We meet the highest compliance standards so you can operate with total peace of mind.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "2vw",
          padding: "4vh 3vw",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <div style={{ fontSize: "3vw", marginBottom: "2vh" }}>🌍</div>
          <h3 style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 1.5vh 0", letterSpacing: "-0.02em" }}>Global Scale</h3>
          <p style={{ fontSize: "0.9vw", opacity: 0.8, margin: 0, lineHeight: 1.6 }}>
            Deploy anywhere in the world instantly. Our globally distributed network guarantees high availability and localized performance for users everywhere.
          </p>
        </div>

        {/* Card 4 */}
        <div style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "2vw",
          padding: "4vh 3vw",
          boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.15)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}>
          <div style={{ fontSize: "3vw", marginBottom: "2vh" }}>🎯</div>
          <h3 style={{ fontSize: "1.5vw", fontWeight: 600, margin: "0 0 1.5vh 0", letterSpacing: "-0.02em" }}>Precision Analytics</h3>
          <p style={{ fontSize: "0.9vw", opacity: 0.8, margin: 0, lineHeight: 1.6 }}>
            Gain deep insights with our powerful analytics engine. Turn complex data into actionable strategies with real-time tracking and comprehensive reporting.
          </p>
        </div>

      </div>

      {/* Footer */}
      <div style={{ zIndex: 1, position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.8vw", opacity: 0.6, borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "2vh" }}>
        <div>Example Company, Inc. / Confidential</div>
        <div>2</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/GlassmorphismPage3.tsx`)

```tsx
export function GlassmorphismPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)", fontFamily: "'Inter', sans-serif", position: "relative", color: "#fff" }}>
      {/* Background Orbs */}
      <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "35vw", height: "35vw", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(2px)" }} />
      <div style={{ position: "absolute", bottom: "-15vh", left: "10vw", width: "25vw", height: "25vw", borderRadius: "50%", background: "rgba(240,147,251,0.3)", filter: "blur(3px)" }} />
      <div style={{ position: "absolute", top: "20vh", left: "60vw", width: "15vw", height: "15vw", borderRadius: "50%", background: "rgba(102,126,234,0.4)", filter: "blur(2px)" }} />
      
      <div style={{ padding: "6vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "1vw", padding: "0.8vh 1.5vw", fontSize: "1.2vw", fontWeight: 600 }}>
            acme.co
          </div>
          <div style={{ fontSize: "1vw", opacity: 0.7 }}>03</div>
        </div>

        {/* Content Area */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4vh", marginTop: "4vh" }}>
          <div style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "2vw", padding: "3vh 4vw", alignSelf: "flex-start" }}>
            <h2 style={{ fontSize: "2.5vw", fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>Performance Metrics</h2>
            <p style={{ fontSize: "1.2vw", opacity: 0.8, marginTop: "0.5vh", margin: 0 }}>Year-over-year growth breakdown</p>
          </div>

          <div style={{ display: "flex", gap: "3vw" }}>
            {/* Main Chart Card */}
            <div style={{ flex: 2, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "2vw", padding: "4vh 3vw", display: "flex", flexDirection: "column", gap: "3vh" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                <div>
                  <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7 }}>Total Revenue</div>
                  <div style={{ fontSize: "3.5vw", fontWeight: 700, lineHeight: 1 }}>$4.2M</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.2)", padding: "0.5vh 1vw", borderRadius: "1vw", fontSize: "1vw", fontWeight: 600 }}>
                  +24.5%
                </div>
              </div>

              {/* Bar Chart Mockup */}
              <div style={{ display: "flex", alignItems: "flex-end", height: "20vh", gap: "1.5vw", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "1vh" }}>
                {[30, 45, 25, 60, 40, 75, 55, 90].map((height, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                    <div style={{ width: "100%", height: `${height}%`, background: "linear-gradient(to top, rgba(255,255,255,0.4), rgba(255,255,255,0.9))", borderRadius: "0.5vw 0.5vw 0 0" }} />
                    <div style={{ fontSize: "0.8vw", opacity: 0.6 }}>Q{i+1}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Side Stats */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vw" }}>
              <div style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "2vw", padding: "3vh 2.5vw" }}>
                <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7 }}>Active Users</div>
                <div style={{ fontSize: "2.5vw", fontWeight: 700, margin: "1vh 0" }}>125K</div>
                <div style={{ fontSize: "0.9vw", opacity: 0.8 }}>Across 42 countries</div>
              </div>
              
              <div style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: "2vw", padding: "3vh 2.5vw", flex: 1 }}>
                <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.7 }}>Retention Rate</div>
                <div style={{ fontSize: "2.5vw", fontWeight: 700, margin: "1vh 0" }}>94%</div>
                
                <div style={{ width: "100%", height: "0.5vh", background: "rgba(255,255,255,0.2)", borderRadius: "1vw", marginTop: "2vh" }}>
                  <div style={{ width: "94%", height: "100%", background: "#fff", borderRadius: "1vw" }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", gap: "2vw", fontSize: "0.9vw", opacity: 0.6 }}>
          <span>Example Company, Inc.</span>
          <span>Confidential</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/GlassmorphismPage4.tsx`)

```tsx
export function GlassmorphismPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)", fontFamily: "'Inter', sans-serif", position: "relative", color: "#fff" }}>
      {/* Background Orbs */}
      <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "35vw", height: "35vw", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(2px)" }} />
      <div style={{ position: "absolute", bottom: "-15vh", left: "10vw", width: "25vw", height: "25vw", borderRadius: "50%", background: "rgba(240,147,251,0.3)", filter: "blur(3px)" }} />
      <div style={{ position: "absolute", top: "20vh", left: "60vw", width: "15vw", height: "15vw", borderRadius: "50%", background: "rgba(102,126,234,0.4)", filter: "blur(2px)" }} />
      <div style={{ position: "absolute", top: "50vh", left: "40vw", width: "30vw", height: "30vw", borderRadius: "50%", background: "rgba(255,255,255,0.15)", filter: "blur(4px)" }} />
      
      <div style={{ padding: "6vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "1vw", padding: "0.8vh 1.5vw", fontSize: "1.2vw", fontWeight: 600 }}>
            acme.co
          </div>
          <div style={{ fontSize: "1vw", opacity: 0.7 }}>04</div>
        </div>

        {/* Content Area */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, gap: "5vh" }}>
          <div style={{ textAlign: "center", maxWidth: "60vw" }}>
            <h1 style={{ fontSize: "5vw", fontWeight: 800, lineHeight: 1.1, margin: 0, letterSpacing: "-0.02em" }}>
              Ready to build the future?
            </h1>
            <p style={{ fontSize: "1.6vw", opacity: 0.8, marginTop: "2vh", lineHeight: 1.5 }}>
              Join us in revolutionizing the way teams collaborate and create.
            </p>
          </div>

          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ background: "#ffffff", color: "#667eea", padding: "2vh 4vw", borderRadius: "3vw", fontSize: "1.4vw", fontWeight: 700, cursor: "pointer", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              Get Started
            </div>
            <div style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.3)", padding: "2vh 4vw", borderRadius: "3vw", fontSize: "1.4vw", fontWeight: 600, cursor: "pointer" }}>
              Contact Sales
            </div>
          </div>

          <div style={{ background: "rgba(255,255,255,0.1)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "2vw", padding: "4vh 6vw", marginTop: "4vh", display: "flex", gap: "6vw" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6 }}>Email</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>hello@acme.co</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6 }}>Website</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>www.acme.co</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6 }}>Social</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>@acme_hq</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", gap: "2vw", fontSize: "0.9vw", opacity: 0.6, justifyContent: "center" }}>
          <span>© 2026 Example Company, Inc.</span>
        </div>
      </div>
    </div>
  );
}
```
