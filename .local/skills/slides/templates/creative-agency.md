# Creative Agency

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "CreativeAgency" template features a modern and vibrant aesthetic, characterized by a clean layout and bold color contrasts. The background color is a soft cream (#FFFBF0), while a striking accent color of orange (#FF4D00) is used for a prominent rectangular element. Text colors include black (#000) for primary text, a muted gray (#666) for subtitles, and a lighter gray (#999) for footer details. The font family used is 'DM Sans', which is applied throughout for a contemporary feel. Key layout elements include a rounded rectangle positioned in the top right, a circular border element, and a structured vertical alignment of text blocks. There are no background images specified in the code. The overall aesthetic feel can be described as "modern, vibrant, clean."

## Source Code

**Component:** `CreativeAgency`

### Slide 1 — Title (`slide-styles/CreativeAgency.tsx`)

```tsx
export function CreativeAgency() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFBF0", fontFamily: "'DM Sans', sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", top: "8vh", right: "6vw", width: "38vw", height: "75vh", background: "#FF4D00", borderRadius: "2vw" }} />
      <div style={{ position: "absolute", top: "12vh", right: "8vw", width: "10vw", height: "10vw", border: "3px solid #000", borderRadius: "50%" }} />
      <div style={{ padding: "6vh 6vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#000" }}>acme.co</div>
          <div style={{ fontSize: "0.9vw", color: "#000", textTransform: "uppercase", letterSpacing: "0.15em", writingMode: "vertical-rl" as const, transform: "rotate(180deg)" }}>
            Presentation Title 2026
          </div>
        </div>
        <div style={{ maxWidth: "50vw" }}>
          <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.25em", color: "#FF4D00", fontWeight: 600, marginBottom: "1.5vh" }}>
            The Brief
          </div>
          <h1 style={{ fontSize: "6.5vw", fontWeight: 700, lineHeight: 0.9, margin: 0, color: "#000" }}>
            Example
          </h1>
          <h1 style={{ fontSize: "6.5vw", fontWeight: 700, lineHeight: 0.9, margin: 0, color: "#000" }}>
            Deck
          </h1>
          <p style={{ fontSize: "1.5vw", color: "#666", marginTop: "3vh", maxWidth: "35vw", lineHeight: 1.6 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>
        <div style={{ display: "flex", gap: "3vw", fontSize: "0.9vw", color: "#999", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          <span>Example Company, Inc.</span>
          <span>Confidential</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CreativeAgencyPage2.tsx`)

```tsx
export function CreativeAgencyPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFBF0", fontFamily: "'DM Sans', sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, right: 0, width: "8vw", height: "100vh", background: "#FF4D00" }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "12vw", width: "6vw", height: "6vw", border: "2px solid #FF4D00", borderRadius: "50%", opacity: 0.3 }} />

      <div style={{ padding: "6vh 6vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#000" }}>acme.co</div>
          <div style={{ fontSize: "0.9vw", color: "#FF4D00", textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 600 }}>
            What We Do
          </div>
        </div>

        <div style={{ display: "flex", gap: "4vw", marginTop: "8vh", flex: 1, alignItems: "flex-start", paddingTop: "4vh" }}>
          <div style={{ flex: 1, borderTop: "2px solid #000", paddingTop: "3vh" }}>
            <div style={{ fontSize: "3.5vw", fontWeight: 700, color: "#FF4D00", lineHeight: 1, marginBottom: "2vh" }}>01</div>
            <div style={{ fontSize: "2vw", fontWeight: 700, color: "#000", marginBottom: "1.5vh", letterSpacing: "-0.02em" }}>Strategy</div>
            <div style={{ fontSize: "1vw", color: "#666", lineHeight: 1.6 }}>
              We decode market signals and define clear, actionable roadmaps that align with your long-term vision.
            </div>
          </div>

          <div style={{ flex: 1, borderTop: "2px solid #000", paddingTop: "3vh" }}>
            <div style={{ fontSize: "3.5vw", fontWeight: 700, color: "#FF4D00", lineHeight: 1, marginBottom: "2vh" }}>02</div>
            <div style={{ fontSize: "2vw", fontWeight: 700, color: "#000", marginBottom: "1.5vh", letterSpacing: "-0.02em" }}>Design</div>
            <div style={{ fontSize: "1vw", color: "#666", lineHeight: 1.6 }}>
              We craft bold, memorable brand identities and digital experiences that captivate and convert.
            </div>
          </div>

          <div style={{ flex: 1, borderTop: "2px solid #000", paddingTop: "3vh" }}>
            <div style={{ fontSize: "3.5vw", fontWeight: 700, color: "#FF4D00", lineHeight: 1, marginBottom: "2vh" }}>03</div>
            <div style={{ fontSize: "2vw", fontWeight: 700, color: "#000", marginBottom: "1.5vh", letterSpacing: "-0.02em" }}>Engineering</div>
            <div style={{ fontSize: "1vw", color: "#666", lineHeight: 1.6 }}>
              We build robust, scalable architectures and seamless interactive products with precision.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "3vw", fontSize: "0.9vw", color: "#999", textTransform: "uppercase", letterSpacing: "0.1em" }}>
          <span>Example Company, Inc.</span>
          <span>Confidential</span>
          <span>02</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CreativeAgencyPage3.tsx`)

```tsx
export function CreativeAgencyPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFBF0", fontFamily: "'DM Sans', sans-serif", position: "relative" }}>
      {/* Background Shapes */}
      <div style={{ position: "absolute", bottom: "-10vh", left: "-5vw", width: "40vw", height: "40vw", background: "#FF4D00", borderRadius: "50%", opacity: 0.1 }} />
      <div style={{ position: "absolute", top: "15vh", right: "20vw", width: "15vw", height: "15vw", border: "2px solid #FF4D00", borderRadius: "2vw", transform: "rotate(15deg)" }} />
      
      <div style={{ padding: "6vh 6vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#000" }}>acme.co</div>
          <div style={{ fontSize: "0.9vw", color: "#000", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Data & Insights
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flex: 1, marginTop: "8vh", gap: "6vw" }}>
          <div style={{ flex: "0 0 35%" }}>
            <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.25em", color: "#FF4D00", fontWeight: 600, marginBottom: "1.5vh" }}>
              The Results
            </div>
            <h2 style={{ fontSize: "4.5vw", fontWeight: 700, lineHeight: 1.1, margin: 0, color: "#000" }}>
              Growth By<br/>The Numbers
            </h2>
            <p style={{ fontSize: "1.2vw", color: "#666", marginTop: "3vh", lineHeight: 1.6 }}>
              Our strategic approach delivered exceptional results across all key performance indicators during the initial launch phase.
            </p>
          </div>

          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3vw" }}>
            <div style={{ background: "#fff", padding: "3vw", borderRadius: "1.5vw", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 1vw 3vw rgba(0,0,0,0.03)" }}>
              <div style={{ fontSize: "4vw", fontWeight: 700, color: "#FF4D00", lineHeight: 1 }}>245%</div>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#000", marginTop: "1vh", textTransform: "uppercase", letterSpacing: "0.1em" }}>Traffic Increase</div>
              <p style={{ fontSize: "0.9vw", color: "#666", marginTop: "1vh", lineHeight: 1.5 }}>Organic acquisition grew exponentially following the new campaign rollout.</p>
            </div>
            <div style={{ background: "#000", padding: "3vw", borderRadius: "1.5vw" }}>
              <div style={{ fontSize: "4vw", fontWeight: 700, color: "#FF4D00", lineHeight: 1 }}>1.2M</div>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#fff", marginTop: "1vh", textTransform: "uppercase", letterSpacing: "0.1em" }}>Active Users</div>
              <p style={{ fontSize: "0.9vw", color: "#999", marginTop: "1vh", lineHeight: 1.5 }}>Monthly active users retained beyond the 90-day threshold.</p>
            </div>
            <div style={{ background: "#fff", padding: "3vw", borderRadius: "1.5vw", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 1vw 3vw rgba(0,0,0,0.03)" }}>
              <div style={{ fontSize: "4vw", fontWeight: 700, color: "#000", lineHeight: 1 }}>84%</div>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#000", marginTop: "1vh", textTransform: "uppercase", letterSpacing: "0.1em" }}>Conversion Rate</div>
              <p style={{ fontSize: "0.9vw", color: "#666", marginTop: "1vh", lineHeight: 1.5 }}>Significantly higher conversion compared to industry benchmark.</p>
            </div>
            <div style={{ background: "#FF4D00", padding: "3vw", borderRadius: "1.5vw", color: "#fff" }}>
              <div style={{ fontSize: "4vw", fontWeight: 700, lineHeight: 1 }}>$4M</div>
              <div style={{ fontSize: "1vw", fontWeight: 600, marginTop: "1vh", textTransform: "uppercase", letterSpacing: "0.1em" }}>Revenue Generated</div>
              <p style={{ fontSize: "0.9vw", color: "rgba(255,255,255,0.8)", marginTop: "1vh", lineHeight: 1.5 }}>Direct revenue attributed to the redesigned funnel experience.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "3vw", fontSize: "0.9vw", color: "#999", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            <span>Example Company, Inc.</span>
            <span>Confidential</span>
            <span>2026</span>
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 700, color: "#000" }}>03</div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CreativeAgencyPage4.tsx`)

```tsx
export function CreativeAgencyPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFBF0", fontFamily: "'DM Sans', sans-serif", position: "relative" }}>
      
      {/* Background Shapes */}
      <div style={{ position: "absolute", top: "0", right: "0", width: "45vw", height: "100vh", background: "#FF4D00" }} />
      <div style={{ position: "absolute", top: "20vh", right: "35vw", width: "20vw", height: "20vw", borderRadius: "50%", border: "4px solid #000" }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "5vw", width: "15vw", height: "15vw", borderRadius: "2vw", border: "4px solid #fff", transform: "rotate(45deg)" }} />

      <div style={{ padding: "6vh 6vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 1 }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#000" }}>acme.co</div>
          <div style={{ fontSize: "0.9vw", color: "#fff", textTransform: "uppercase", letterSpacing: "0.15em" }}>
            Get In Touch
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flex: 1, marginTop: "10vh" }}>
          <div style={{ flex: "0 0 50%" }}>
            <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.25em", color: "#FF4D00", fontWeight: 600, marginBottom: "1.5vh" }}>
              Next Steps
            </div>
            <h1 style={{ fontSize: "6.5vw", fontWeight: 700, lineHeight: 0.9, margin: 0, color: "#000" }}>
              Let's Create<br/>Something<br/>Great.
            </h1>
            
            <div style={{ marginTop: "6vh", display: "flex", flexDirection: "column", gap: "3vh" }}>
              <div>
                <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.5vh" }}>Email Us</div>
                <div style={{ fontSize: "1.8vw", fontWeight: 600, color: "#000" }}>hello@acme.co</div>
              </div>
              <div>
                <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.5vh" }}>Call Us</div>
                <div style={{ fontSize: "1.8vw", fontWeight: 600, color: "#000" }}>+1 (555) 123-4567</div>
              </div>
              <div>
                <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em", color: "#999", marginBottom: "0.5vh" }}>Visit Us</div>
                <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#666", maxWidth: "20vw" }}>
                  123 Creative Studio Way<br/>Design District, NY 10001
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", gap: "3vw", fontSize: "0.9vw", color: "#999", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            <span>Example Company, Inc.</span>
            <span>Confidential</span>
            <span>2026</span>
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 700, color: "#fff" }}>04</div>
        </div>

      </div>
    </div>
  );
}
```
