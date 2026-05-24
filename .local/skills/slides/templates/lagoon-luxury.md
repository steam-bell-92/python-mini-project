# Lagoon Luxury

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "LagoonLuxury" template embodies a luxurious and serene aesthetic, featuring a rich teal background color (#0D4F4F) that evokes a sense of tranquility. The layout includes a full-bleed background image of a turquoise lagoon (URL: /__mockup/photos/lagoon-aerial.png) that enhances the theme. The overlay card is styled with a semi-transparent white background (rgba(255, 255, 255, 0.95)) and incorporates text in various shades: a deep teal (#0D4F4F) for headings, a soft gray (#888888) for body text, and a subtle shadow effect for depth. The font families used are 'Inter' for general text and 'Playfair Display' for titles, creating a contrast between modern and classic styles. Key layout elements include a positioned info card at the bottom right, decorative spacing, and a rating section with star icons, contributing to an overall elegant and sophisticated feel.

## Source Code

**Component:** `LagoonLuxury`

### Slide 1 — Title (`slide-styles/LagoonLuxury.tsx`)

```tsx
export function LagoonLuxury() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#0D4F4F" }}>
      {/* Full-bleed background photo */}
      <img 
        src="/__mockup/photos/lagoon-aerial.png" 
        alt="Turquoise lagoon aerial view" 
        style={{ width: "100vw", height: "100vh", objectFit: "cover", position: "absolute", top: 0, left: 0 }} 
      />
      
      {/* White info card overlay */}
      <div style={{
        position: "absolute",
        bottom: "8vh",
        right: "6vw",
        width: "35vw",
        height: "38vh",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 2vh 4vh rgba(0, 0, 0, 0.15)",
        display: "flex",
        flexDirection: "column",
        padding: "4vh 3vw",
        boxSizing: "border-box",
        fontFamily: "'Inter', sans-serif"
      }}>
        
        {/* Top Label */}
        <div style={{
          color: "#0D4F4F",
          fontSize: "0.8vw",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "2vh"
        }}>
          PRIVATE ISLAND COLLECTION
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "3.5vw",
          color: "#0D4F4F",
          margin: "0 0 1.5vh 0",
          lineHeight: 1.1,
          fontWeight: 600
        }}>
          Example Deck
        </h1>

        {/* Subtitle / Body */}
        <p style={{
          color: "#888888",
          fontSize: "1.2vw",
          lineHeight: 1.5,
          margin: "0 0 3vh 0",
          fontWeight: 400
        }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        <div style={{ flexGrow: 1 }} />

        {/* Rating and Exclusive Access */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "1vw",
          marginBottom: "2vh"
        }}>
          <span style={{ color: "#0D4F4F", fontSize: "1vw", letterSpacing: "0.1em" }}>★★★★★</span>
          <span style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontStyle: "italic", 
            color: "#888888", 
            fontSize: "1vw" 
          }}>
            Exclusive Access
          </span>
        </div>

        {/* Footer */}
        <div style={{
          borderTop: "0.1vh solid rgba(13, 79, 79, 0.2)",
          paddingTop: "1.5vh",
          color: "#0D4F4F",
          fontSize: "0.9vw",
          fontWeight: 500,
          letterSpacing: "0.05em"
        }}>
          acme.co
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/LagoonLuxuryPage2.tsx`)

```tsx
export function LagoonLuxuryPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#FAFAFA", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ padding: "6vh 6vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: "#0D4F4F", fontSize: "0.8vw", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          EXECUTIVE SUMMARY
        </div>
      </div>
      
      {/* Content */}
      <div style={{ display: "flex", flexGrow: 1, padding: "0 6vw" }}>
        {/* Left Column */}
        <div style={{ width: "40vw", paddingRight: "6vw" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", color: "#0D4F4F", margin: "0 0 3vh 0", lineHeight: 1.1, fontWeight: 600 }}>
            Elevating the standard of living.
          </h1>
          <p style={{ color: "#888888", fontSize: "1.2vw", lineHeight: 1.6, margin: "0 0 3vh 0", fontWeight: 400 }}>
            We focus on integrating world-class amenities with breathtaking natural landscapes to create unparalleled experiences.
          </p>
        </div>
        
        {/* Right Column */}
        <div style={{ width: "48vw", display: "flex", flexDirection: "column", justifyContent: "center", gap: "4vh" }}>
          {[
            { title: "Curated Locations", desc: "Hand-picked private islands and pristine coastal properties." },
            { title: "Sustainable Luxury", desc: "Eco-friendly materials and renewable energy sources seamlessly integrated." },
            { title: "Bespoke Architecture", desc: "Award-winning designers creating homes that complement nature." }
          ].map((item, i) => (
            <div key={i} style={{ borderLeft: "0.2vw solid #0D4F4F", paddingLeft: "2vw" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8vw", color: "#0D4F4F", margin: "0 0 1vh 0", fontWeight: 600 }}>{item.title}</h3>
              <p style={{ color: "#666666", fontSize: "1.1vw", margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "3vh 6vw", borderTop: "0.1vh solid rgba(13, 79, 79, 0.1)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: "#0D4F4F", fontSize: "0.9vw", fontWeight: 500, letterSpacing: "0.05em" }}>acme.co</div>
        <div style={{ color: "#888888", fontSize: "0.9vw", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>Page 2</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/LagoonLuxuryPage3.tsx`)

```tsx
export function LagoonLuxuryPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#FAFAFA", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{ padding: "6vh 6vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ color: "#0D4F4F", fontSize: "0.8vw", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>
          MARKET GROWTH
        </div>
      </div>
      
      {/* Content */}
      <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, padding: "0 6vw" }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5vw", color: "#0D4F4F", margin: "0 0 1.5vh 0", lineHeight: 1.1, fontWeight: 600 }}>
          Unprecedented Demand
        </h1>
        <p style={{ color: "#888888", fontSize: "1.2vw", lineHeight: 1.5, margin: "0 0 6vh 0", fontWeight: 400, maxWidth: "50vw" }}>
          A visual representation of our consistent year-over-year expansion across prime real estate markets.
        </p>
        
        {/* Chart Area */}
        <div style={{ flexGrow: 1, display: "flex", alignItems: "flex-end", gap: "3vw", paddingBottom: "4vh", borderBottom: "0.2vh solid #0D4F4F" }}>
          {[
            { year: "2020", value: 30 },
            { year: "2021", value: 45 },
            { year: "2022", value: 65 },
            { year: "2023", value: 85 },
            { year: "2024", value: 100 }
          ].map((bar, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ 
                width: "100%", 
                height: `${bar.value * 0.4}vh`, 
                backgroundColor: i === 4 ? "#0D4F4F" : "rgba(13, 79, 79, 0.2)",
                transition: "height 0.5s ease"
              }} />
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2vw", color: "#0D4F4F", fontWeight: 600 }}>
                {bar.year}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: "3vh 6vw", borderTop: "0.1vh solid rgba(13, 79, 79, 0.1)", display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "2vh" }}>
        <div style={{ color: "#0D4F4F", fontSize: "0.9vw", fontWeight: 500, letterSpacing: "0.05em" }}>acme.co</div>
        <div style={{ color: "#888888", fontSize: "0.9vw", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>Page 3</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/LagoonLuxuryPage4.tsx`)

```tsx
export function LagoonLuxuryPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#0D4F4F" }}>
      {/* Full-bleed background photo with overlay */}
      <img 
        src="/__mockup/photos/lagoon-aerial.png" 
        alt="Turquoise lagoon aerial view" 
        style={{ width: "100vw", height: "100vh", objectFit: "cover", position: "absolute", top: 0, left: 0 }} 
      />
      <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(13, 79, 79, 0.6)" }} />
      
      {/* Center info card overlay */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50vw",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        boxShadow: "0 2vh 4vh rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "8vh 6vw",
        boxSizing: "border-box",
        fontFamily: "'Inter', sans-serif",
        textAlign: "center"
      }}>
        
        {/* Top Label */}
        <div style={{
          color: "#0D4F4F",
          fontSize: "0.8vw",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "3vh"
        }}>
          BECOME A MEMBER
        </div>

        {/* Title */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "4vw",
          color: "#0D4F4F",
          margin: "0 0 2vh 0",
          lineHeight: 1.1,
          fontWeight: 600
        }}>
          Join the Elite
        </h1>

        {/* Subtitle / Body */}
        <p style={{
          color: "#888888",
          fontSize: "1.2vw",
          lineHeight: 1.6,
          margin: "0 0 5vh 0",
          fontWeight: 400
        }}>
          Experience the pinnacle of luxury living. Connect with our dedicated concierge to begin your journey.
        </p>

        {/* CTA Button */}
        <div style={{
          backgroundColor: "#0D4F4F",
          color: "white",
          padding: "1.5vh 3vw",
          fontSize: "1vw",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          cursor: "pointer"
        }}>
          Contact Concierge
        </div>
      </div>
      
      {/* Footer */}
      <div style={{
        position: "absolute",
        bottom: "3vh",
        left: "6vw",
        right: "6vw",
        display: "flex",
        justifyContent: "space-between",
        color: "rgba(255, 255, 255, 0.8)",
        fontSize: "0.9vw",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        letterSpacing: "0.05em"
      }}>
        <div>acme.co</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>Page 4</div>
      </div>
    </div>
  );
}
```
