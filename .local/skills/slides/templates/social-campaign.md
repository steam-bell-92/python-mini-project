# Social Campaign

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "SocialCampaign" template features a modern and vibrant aesthetic, characterized by a light and inviting color palette. The background color is a soft peach (#FFF8F0), complemented by accent colors of deep mauve (#5B2C6F) and a warm coral (#E8634A). The font families used are 'Inter' for general text and 'DM Sans' for headers and titles, providing a clean and contemporary look. Key layout elements include circular background shapes with varying opacities positioned at the corners, a structured content area with a header, main title, subtitle, and footer, all arranged in a flexible column layout. The overall feel of the design is fresh and engaging.

## Source Code

**Component:** `SocialCampaign`

### Slide 1 — Title (`slide-styles/SocialCampaign.tsx`)

```tsx
export function SocialCampaign() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFF8F0",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        color: "#5B2C6F"
      }}
    >
      {/* Background Shapes */}
      <div style={{ position: "absolute", top: "-10vh", right: "-5vw", width: "40vw", height: "40vw", backgroundColor: "#E8634A", borderRadius: "50%", opacity: 0.1, zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-15vh", left: "-10vw", width: "50vw", height: "50vw", backgroundColor: "#5B2C6F", borderRadius: "50%", opacity: 0.05, zIndex: 0 }} />
      <div style={{ position: "absolute", top: "20vh", right: "15vw", width: "10vw", height: "10vw", border: "1vw solid #E8634A", borderRadius: "2vw", transform: "rotate(15deg)", opacity: 0.8, zIndex: 0 }} />

      {/* Content Container */}
      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em", color: "#E8634A" }}>
            acme.co
          </div>
          <div style={{ display: "flex", gap: "1vw" }}>
            <div style={{ padding: "0.8vh 1.5vw", backgroundColor: "#5B2C6F", color: "#FFF8F0", borderRadius: "2vw", fontSize: "0.9vw", fontWeight: 600 }}>
              #LaunchDay
            </div>
            <div style={{ padding: "0.8vh 1.5vw", border: "2px solid #5B2C6F", color: "#5B2C6F", borderRadius: "2vw", fontSize: "0.9vw", fontWeight: 600 }}>
              2026
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div style={{ maxWidth: "65vw" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#E8634A", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif" }}>
            SUMMER '26
          </div>
          <h1 style={{ fontSize: "7.5vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", margin: "0 0 3vh 0", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Example Deck
          </h1>
          <p style={{ fontSize: "1.8vw", fontWeight: 500, lineHeight: 1.5, margin: 0, maxWidth: "45vw", opacity: 0.8 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>

          {/* Metric Highlight */}
          <div style={{ marginTop: "5vh", display: "inline-flex", alignItems: "center", gap: "1.5vw", backgroundColor: "#FFF8F0", padding: "1.5vh 2.5vw", borderRadius: "1vw", boxShadow: "0.5vw 0.5vw 0px #E8634A", border: "2px solid #5B2C6F" }}>
            <div style={{ width: "1vw", height: "1vw", backgroundColor: "#E8634A", borderRadius: "50%" }} />
            <div style={{ fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Target:</div>
            <div style={{ fontSize: "2.5vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", color: "#E8634A" }}>2.1M Reach</div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "1vw", fontWeight: 600, opacity: 0.6, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Example Company, Inc.
          </div>
          <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
            <div style={{ width: "4vw", height: "4vw", backgroundColor: "#5B2C6F", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: "1.5vw", height: "1.5vw", border: "0.3vw solid #FFF8F0", borderRadius: "50%" }} />
            </div>
            <div style={{ width: "4vw", height: "4vw", backgroundColor: "#E8634A", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: "0", height: "0", borderTop: "0.8vw solid transparent", borderBottom: "0.8vw solid transparent", borderLeft: "1.2vw solid #FFF8F0", marginLeft: "0.3vw" }} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/SocialCampaignPage2.tsx`)

```tsx
export function SocialCampaignPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFF8F0",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        color: "#5B2C6F"
      }}
    >
      {/* Background Shapes */}
      <div style={{ position: "absolute", top: "40vh", right: "-10vw", width: "30vw", height: "30vw", backgroundColor: "#E8634A", borderRadius: "50%", opacity: 0.1, zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10vh", left: "-5vw", width: "20vw", height: "20vw", border: "1vw solid #5B2C6F", borderRadius: "50%", opacity: 0.1, zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em", color: "#E8634A" }}>
            acme.co
          </div>
          <div style={{ display: "flex", gap: "1vw" }}>
            <div style={{ padding: "0.8vh 1.5vw", backgroundColor: "#5B2C6F", color: "#FFF8F0", borderRadius: "2vw", fontSize: "0.9vw", fontWeight: 600 }}>
              #LaunchDay
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", height: "60vh", gap: "5vw", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#E8634A", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif" }}>
              THE STRATEGY
            </div>
            <h2 style={{ fontSize: "5vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", margin: "0 0 3vh 0", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Engage &amp; Convert
            </h2>
            <p style={{ fontSize: "1.5vw", fontWeight: 500, lineHeight: 1.6, margin: 0, opacity: 0.8 }}>
              We are shifting focus towards high-impact conversational touchpoints. By leveraging authentic voices, we maximize cultural resonance and drive deeper community ties.
            </p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
            {['Cultural Relevance', 'Micro-Influencer Amplification', 'Always-On Community'].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "2vw", backgroundColor: "#FFF8F0", padding: "3vh 2vw", borderRadius: "1vw", boxShadow: "0.4vw 0.4vw 0px #E8634A", border: "2px solid #5B2C6F" }}>
                <div style={{ fontSize: "2vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", color: "#E8634A" }}>
                  0{i+1}
                </div>
                <div style={{ fontSize: "1.5vw", fontWeight: 600, fontFamily: "'DM Sans', sans-serif" }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "1vw", fontWeight: 600, opacity: 0.6, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", color: "#5B2C6F" }}>
            02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/SocialCampaignPage3.tsx`)

```tsx
export function SocialCampaignPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFF8F0",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        color: "#5B2C6F"
      }}
    >
      {/* Background Shapes */}
      <div style={{ position: "absolute", top: "-5vh", left: "20vw", width: "40vw", height: "40vw", backgroundColor: "#E8634A", borderRadius: "50%", opacity: 0.05, zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "10vw", width: "15vw", height: "15vw", border: "1vw solid #5B2C6F", transform: "rotate(45deg)", opacity: 0.1, zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em", color: "#E8634A" }}>
            acme.co
          </div>
          <div style={{ display: "flex", gap: "1vw" }}>
            <div style={{ padding: "0.8vh 1.5vw", border: "2px solid #5B2C6F", color: "#5B2C6F", borderRadius: "2vw", fontSize: "0.9vw", fontWeight: 600 }}>
              Metrics
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5vh" }}>
          <div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#E8634A", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif" }}>
              THE NUMBERS
            </div>
            <h2 style={{ fontSize: "4.5vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", margin: 0, lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Projected Impact
            </h2>
          </div>

          <div style={{ display: "flex", gap: "4vw", height: "35vh", alignItems: "flex-end" }}>
            {[ 
              { label: "Q1", h: "15vh", val: "1.2M", c: "#5B2C6F", outline: "#E8634A" }, 
              { label: "Q2", h: "20vh", val: "2.5M", c: "#E8634A", outline: "#5B2C6F" }, 
              { label: "Q3", h: "30vh", val: "4.8M", c: "#5B2C6F", outline: "#E8634A" }, 
              { label: "Q4", h: "40vh", val: "8.4M", c: "#E8634A", outline: "#5B2C6F" } 
            ].map((bar, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
                <div style={{ fontSize: "2.5vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", color: bar.c }}>
                  {bar.val}
                </div>
                <div style={{ width: "100%", height: bar.h, backgroundColor: bar.c, borderRadius: "1vw 1vw 0 0", border: `2px solid ${bar.outline}`, borderBottom: "none", boxShadow: `0.4vw 0px 0px ${bar.outline}` }} />
                <div style={{ fontSize: "1.2vw", fontWeight: 700, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em" }}>
                  {bar.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "1vw", fontWeight: 600, opacity: 0.6, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", color: "#5B2C6F" }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/SocialCampaignPage4.tsx`)

```tsx
export function SocialCampaignPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#5B2C6F",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        color: "#FFF8F0"
      }}
    >
      {/* Background Shapes */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60vw", height: "60vw", backgroundColor: "#E8634A", borderRadius: "50%", opacity: 0.15, zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.05em", color: "#E8634A" }}>
            acme.co
          </div>
        </div>

        {/* Content */}
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "4vh" }}>
          <h2 style={{ fontSize: "7vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", margin: 0, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
            Let's Build<br/>The Future
          </h2>
          <p style={{ fontSize: "1.8vw", fontWeight: 500, lineHeight: 1.5, margin: 0, maxWidth: "45vw", opacity: 0.9 }}>
            Join us in reshaping the digital landscape. Contact our partnerships team to get started.
          </p>
          <div style={{ marginTop: "3vh", display: "inline-flex", alignItems: "center", gap: "1vw", backgroundColor: "#E8634A", color: "#FFF8F0", padding: "2vh 4vw", borderRadius: "3vw", boxShadow: "0.5vw 0.5vw 0px #FFF8F0", border: "2px solid #FFF8F0", fontSize: "1.5vw", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", fontFamily: "'DM Sans', sans-serif" }}>
            Partner With Us
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "1vw", fontWeight: 600, opacity: 0.6, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            hi@acme.co
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 800, fontFamily: "'DM Sans', sans-serif", color: "#FFF8F0" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
