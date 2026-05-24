# Geodesic Future

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "GeodesicFuture" template presents a modern, eco-centric aesthetic, featuring a dark background with a geodesic greenhouse image. The background color is #080C08, complemented by a gradient overlay transitioning from transparent to rgba(8, 12, 8, 0.92). Text colors include #5A8A5A for accents and #E0EBE0 for primary text, with a subtle opacity for some elements. The font families used are 'DM Sans' for most text and 'DM Mono' for specific metadata and footer elements, creating a clean and contemporary look. Key layout elements include a right-aligned content area with a flexible layout, decorative icons, and a structured footer, all contributing to a cohesive and sophisticated design. The background image is sourced from "/__mockup/photos/geodesic-greenhouse.png". Overall, the aesthetic feel can be described as "modern, sustainable, organic."

## Source Code

**Component:** `GeodesicFuture`

### Slide 1 — Title (`slide-styles/GeodesicFuture.tsx`)

```tsx
export function GeodesicFuture() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#080C08", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/geodesic-greenhouse.png" 
        alt="Geodesic Greenhouse Background" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0
        }} 
      />

      {/* Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to right, transparent 50%, rgba(8, 12, 8, 0.88) 58%, rgba(8, 12, 8, 0.92) 100%)",
        zIndex: 1
      }} />

      {/* Right Content Area */}
      <div style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: "45vw",
        height: "100vh",
        zIndex: 2,
        padding: "8vh 6vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box"
      }}>
        
        {/* Top Metadata */}
        <div style={{ 
          display: "flex", 
          alignItems: "center", 
          gap: "1.5vw", 
          marginBottom: "6vh" 
        }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5vw",
            color: "#5A8A5A",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.9vw",
            fontWeight: 700,
            letterSpacing: "0.15vw"
          }}>
            <span>⬡</span>
            <span>BIODOME</span>
          </div>
          <div style={{
            color: "#E0EBE0",
            opacity: 0.6,
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            letterSpacing: "0.1vw"
          }}>
            SECTOR 7
          </div>
        </div>

        {/* Title & Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
          <h1 style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "5.5vw",
            fontWeight: 400,
            color: "#E0EBE0",
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: "-0.1vw"
          }}>
            Example Deck
          </h1>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.4vw",
            fontWeight: 400,
            color: "#E0EBE0",
            opacity: 0.7,
            margin: 0,
            lineHeight: 1.5,
            maxWidth: "35vw"
          }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Footer Area */}
        <div style={{ 
          marginTop: "auto", 
          display: "flex", 
          flexDirection: "column", 
          gap: "1vh" 
        }}>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1vw",
            fontStyle: "italic",
            color: "#5A8A5A"
          }}>
            Sustainable Futures
          </div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1vw",
            fontWeight: 500,
            color: "#E0EBE0",
            opacity: 0.5,
            letterSpacing: "0.05vw"
          }}>
            acme.co
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/GeodesicFuturePage2.tsx`)

```tsx
export function GeodesicFuturePage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#080C08", fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", padding: "6vh 6vw", boxSizing: "border-box" }}>
      
      {/* Top Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "8vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5vw", color: "#5A8A5A", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9vw", fontWeight: 700, letterSpacing: "0.15vw" }}>
          <span>⬡</span>
          <span>BIODOME</span>
        </div>
        <div style={{ color: "#E0EBE0", opacity: 0.6, fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", letterSpacing: "0.1vw" }}>
          SECTOR 7
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", flex: 1, gap: "8vw" }}>
        {/* Left Col */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "4.5vw", fontWeight: 400, color: "#E0EBE0", margin: "0 0 4vh 0", lineHeight: 1.1, letterSpacing: "-0.1vw" }}>
            Cultivating the<br/>Next Generation
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.4vw", fontWeight: 400, color: "#E0EBE0", opacity: 0.7, margin: 0, lineHeight: 1.6, maxWidth: "35vw" }}>
            Our closed-loop systems represent a fundamental shift in agricultural paradigms. By maintaining absolute control over environmental variables, we eliminate external dependencies and ensure predictable, high-yield growth cycles regardless of seasonal fluctuations.
          </p>
        </div>

        {/* Right Col: List */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "5vh" }}>
          {[
            { title: "Climate Control", desc: "Automated regulation of temperature, humidity, and atmospheric composition." },
            { title: "Nutrient Delivery", desc: "Precision hydroponics reducing water consumption by up to ninety percent." },
            { title: "Energy Harvesting", desc: "Solar-integrated geodesic structures that power internal LED arrays." }
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "2vw" }}>
              <div style={{ color: "#5A8A5A", fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", paddingTop: "0.5vh" }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.8vw", fontWeight: 500, color: "#E0EBE0", margin: "0 0 1vh 0" }}>
                  {item.title}
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.2vw", fontWeight: 400, color: "#E0EBE0", opacity: 0.6, margin: 0, lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontStyle: "italic", color: "#5A8A5A" }}>
            Sustainable Futures
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1vw", fontWeight: 500, color: "#E0EBE0", opacity: 0.5, letterSpacing: "0.05vw" }}>
            acme.co
          </div>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#E0EBE0", opacity: 0.5 }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/GeodesicFuturePage3.tsx`)

```tsx
export function GeodesicFuturePage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#080C08", fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", padding: "6vh 6vw", boxSizing: "border-box" }}>
      
      {/* Top Header */}
      <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "8vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5vw", color: "#5A8A5A", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9vw", fontWeight: 700, letterSpacing: "0.15vw" }}>
          <span>⬡</span>
          <span>BIODOME</span>
        </div>
        <div style={{ color: "#E0EBE0", opacity: 0.6, fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", letterSpacing: "0.1vw" }}>
          SYSTEM METRICS
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center" }}>
        <div style={{ marginBottom: "8vh" }}>
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "3.5vw", fontWeight: 400, color: "#E0EBE0", margin: "0 0 2vh 0", letterSpacing: "-0.05vw" }}>
            Operational Efficiency
          </h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.4vw", fontWeight: 400, color: "#E0EBE0", opacity: 0.7, margin: 0, maxWidth: "50vw" }}>
            Comparing traditional agriculture metrics against our enclosed geodesic systems over a 12-month continuous cycle.
          </p>
        </div>

        <div style={{ display: "flex", gap: "4vw" }}>
          {[
            { value: "94%", label: "Water Retention", sub: "Recycled through condensation capture" },
            { value: "3.2x", label: "Yield Multiplier", sub: "Compared to traditional open-field farming" },
            { value: "-78%", label: "Carbon Footprint", sub: "Reduction in transport and supply chain emissions" }
          ].map((stat, i) => (
            <div key={i} style={{ flex: 1, borderTop: "1px solid #5A8A5A", paddingTop: "4vh" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "5vw", color: "#5A8A5A", margin: "0 0 2vh 0", lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.6vw", fontWeight: 500, color: "#E0EBE0", margin: "0 0 1vh 0" }}>
                {stat.label}
              </div>
              <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1vw", color: "#E0EBE0", opacity: 0.5, lineHeight: 1.5 }}>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", fontStyle: "italic", color: "#5A8A5A" }}>
            Sustainable Futures
          </div>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1vw", fontWeight: 500, color: "#E0EBE0", opacity: 0.5, letterSpacing: "0.05vw" }}>
            acme.co
          </div>
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#E0EBE0", opacity: 0.5 }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/GeodesicFuturePage4.tsx`)

```tsx
export function GeodesicFuturePage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#080C08", fontFamily: "'DM Sans', sans-serif", display: "flex", flexDirection: "column", padding: "6vh 6vw", boxSizing: "border-box" }}>
      
      {/* Background Image Subdued */}
      <img 
        src="/__mockup/photos/geodesic-greenhouse.png" 
        alt="Geodesic Greenhouse Background" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.15
        }} 
      />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5vw", color: "#5A8A5A", fontFamily: "'DM Sans', sans-serif", fontSize: "0.9vw", fontWeight: 700, letterSpacing: "0.15vw" }}>
            <span>⬡</span>
            <span>BIODOME</span>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", alignItems: "center", textAlign: "center" }}>
          <div style={{ color: "#5A8A5A", marginBottom: "4vh" }}>
            <svg width="6vw" height="6vw" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          
          <h2 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "6vw", fontWeight: 400, color: "#E0EBE0", margin: "0 0 3vh 0", lineHeight: 1, letterSpacing: "-0.1vw" }}>
            Enter the Canopy
          </h2>
          
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.6vw", fontWeight: 400, color: "#E0EBE0", opacity: 0.7, margin: "0 0 6vh 0", maxWidth: "40vw" }}>
            Join our network of atmospheric habitats and pioneer the future of environmental isolation.
          </p>

          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ padding: "1.5vh 3vw", backgroundColor: "#5A8A5A", color: "#080C08", fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05vw", cursor: "pointer" }}>
              INITIATE CONTACT
            </div>
            <div style={{ padding: "1.5vh 3vw", border: "1px solid #5A8A5A", color: "#5A8A5A", fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05vw", cursor: "pointer" }}>
              VIEW SCHEMATICS
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "auto" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#E0EBE0", opacity: 0.5 }}>
              communications@biodome.co
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1vw", fontWeight: 500, color: "#E0EBE0", opacity: 0.5, letterSpacing: "0.05vw" }}>
              1-800-HABITAT
            </div>
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", color: "#E0EBE0", opacity: 0.5 }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
