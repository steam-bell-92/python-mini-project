# Swiss Typographic

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "SwissTypographic" template embodies a clean, minimalist aesthetic typical of Swiss design. It features a solid white background (#FFFFFF) with light gray vertical lines (#E0E0E0 and #F0F0F0) creating a structured grid layout. The text colors include dark gray (#999) for secondary text, black (#000) for primary headings, and a lighter gray (#666) for the subtitle, while the accent color is a bold red (#FF0000) used for a decorative square. The font family is 'Inter', with Helvetica and Arial as fallbacks, used throughout for a modern, sans-serif look. Key layout elements include a centered vertical line and a horizontal line at the midpoint, along with a prominent title area featuring large headings and a subtitle. There are no background images used in this template. The overall aesthetic feel can be described as "clean, structured, modern."

## Source Code

**Component:** `SwissTypographic`

### Slide 1 — Title (`slide-styles/SwissTypographic.tsx`)

```tsx
export function SwissTypographic() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFFFF", fontFamily: "'Inter', Helvetica, Arial, sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: "50vw", width: "1px", height: "100vh", background: "#E0E0E0" }} />
      <div style={{ position: "absolute", top: 0, left: "25vw", width: "1px", height: "100vh", background: "#F0F0F0" }} />
      <div style={{ position: "absolute", top: 0, left: "75vw", width: "1px", height: "100vh", background: "#F0F0F0" }} />
      <div style={{ position: "absolute", left: 0, top: "50vh", width: "100vw", height: "1px", background: "#F0F0F0" }} />
      <div style={{ position: "absolute", top: "5vh", left: "5vw", width: "6vw", height: "6vw", background: "#FF0000" }} />
      <div style={{ padding: "5vh 5vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "7vh" }}>
          <div>
            <div style={{ fontSize: "0.8vw", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em", color: "#999", marginBottom: "1vh" }}>
              Example Company, Inc. / 2026
            </div>
          </div>
          <div style={{ fontSize: "0.8vw", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: "#999" }}>
            Presentation Title
          </div>
        </div>
        <div>
          <h1 style={{ fontSize: "7vw", fontWeight: 800, lineHeight: 0.9, margin: 0, color: "#000", letterSpacing: "-0.04em" }}>
            Example
          </h1>
          <h1 style={{ fontSize: "7vw", fontWeight: 300, lineHeight: 0.9, margin: 0, color: "#000", letterSpacing: "-0.04em" }}>
            Deck
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <p style={{ fontSize: "1.2vw", color: "#666", maxWidth: "35vw", lineHeight: 1.6, margin: 0 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
          <div style={{ fontSize: "6vw", fontWeight: 100, color: "#E0E0E0", lineHeight: 1 }}>01</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/SwissTypographicPage2.tsx`)

```tsx
export function SwissTypographicPage2() {
  const steps = [
    { num: "1", title: "Research", desc: "Analyze market trends and user needs to identify core opportunities." },
    { num: "2", title: "Prototype", desc: "Develop low-fidelity models to quickly test and iterate on concepts." },
    { num: "3", title: "Validate", desc: "Gather user feedback to ensure the proposed solutions meet requirements." },
    { num: "4", title: "Launch", desc: "Deploy the final product to the market with a targeted go-to-market strategy." },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', Helvetica, Arial, sans-serif",
        position: "relative",
        color: "#000000",
      }}
    >
      {/* Background Grid Lines */}
      <div style={{ position: "absolute", top: 0, left: "20vw", width: "1px", height: "100vh", backgroundColor: "#F0F0F0" }} />
      <div style={{ position: "absolute", top: 0, left: "40vw", width: "1px", height: "100vh", backgroundColor: "#F0F0F0" }} />
      <div style={{ position: "absolute", top: 0, left: "60vw", width: "1px", height: "100vh", backgroundColor: "#F0F0F0" }} />
      <div style={{ position: "absolute", top: 0, left: "80vw", width: "1px", height: "100vh", backgroundColor: "#F0F0F0" }} />
      <div style={{ position: "absolute", top: "30vh", left: 0, width: "100vw", height: "1px", backgroundColor: "#F0F0F0" }} />
      <div style={{ position: "absolute", top: "70vh", left: 0, width: "100vw", height: "1px", backgroundColor: "#F0F0F0" }} />

      {/* Main Container */}
      <div
        style={{
          padding: "5vh 5vw",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "2vh" }}>
          <div
            style={{
              fontSize: "1vw",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "#FF0000",
            }}
          >
            Process
          </div>
        </div>

        {/* Timeline Content */}
        <div style={{ position: "relative", width: "100%", height: "40vh", display: "flex", alignItems: "center" }}>
          {/* Connecting Line */}
          <div
            style={{
              position: "absolute",
              top: "5vw",
              left: "5vw",
              width: "80vw",
              height: "0.2vw",
              backgroundColor: "#FF0000",
              zIndex: 1,
            }}
          />

          {/* Steps */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              padding: "0 2vw",
              position: "relative",
              zIndex: 2,
            }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "18vw",
                }}
              >
                {/* Circle */}
                <div
                  style={{
                    width: "10vw",
                    height: "10vw",
                    borderRadius: "50%",
                    backgroundColor: "#FF0000",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#FFFFFF",
                    fontSize: "4vw",
                    fontWeight: 300,
                    marginBottom: "3vh",
                  }}
                >
                  {step.num}
                </div>

                {/* Text Content */}
                <h3
                  style={{
                    fontSize: "1.8vw",
                    fontWeight: 700,
                    margin: "0 0 1.5vh 0",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "1vw",
                    lineHeight: 1.5,
                    color: "#888888",
                    margin: 0,
                    fontWeight: 400,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2vh" }}>
          <div
            style={{
              fontSize: "0.8vw",
              fontWeight: 500,
              color: "#999999",
              letterSpacing: "0.05em",
            }}
          >
            Example Company, Inc. / Confidential
          </div>
          <div
            style={{
              fontSize: "1.2vw",
              fontWeight: 700,
              color: "#000000",
            }}
          >
            02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/SwissTypographicPage3.tsx`)

```tsx
export function SwissTypographicPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFFFF", fontFamily: "'Inter', Helvetica, Arial, sans-serif", position: "relative" }}>
      {/* Grid Lines */}
      <div style={{ position: "absolute", top: 0, left: "50vw", width: "1px", height: "100vh", background: "#E0E0E0" }} />
      <div style={{ position: "absolute", top: 0, left: "25vw", width: "1px", height: "100vh", background: "#F0F0F0" }} />
      <div style={{ position: "absolute", top: 0, left: "75vw", width: "1px", height: "100vh", background: "#F0F0F0" }} />
      <div style={{ position: "absolute", left: 0, top: "50vh", width: "100vw", height: "1px", background: "#F0F0F0" }} />
      <div style={{ position: "absolute", left: 0, top: "25vh", width: "100vw", height: "1px", background: "#F0F0F0" }} />
      <div style={{ position: "absolute", left: 0, top: "75vh", width: "100vw", height: "1px", background: "#F0F0F0" }} />

      {/* Red Accent Square */}
      <div style={{ position: "absolute", top: "5vh", left: "5vw", width: "2vw", height: "2vw", background: "#FF0000" }} />

      <div style={{ padding: "5vh 5vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "3vh" }}>
          <div>
            <div style={{ fontSize: "0.8vw", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em", color: "#999", marginBottom: "1vh" }}>
              Key Metrics / Performance
            </div>
            <h2 style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 0.9, margin: 0, color: "#000", letterSpacing: "-0.04em" }}>
              Data Overview
            </h2>
          </div>
        </div>

        {/* Content - Data & Metrics */}
        <div style={{ display: "flex", flex: 1, marginTop: "8vh", gap: "5vw" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5vh" }}>
            <div>
              <div style={{ fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#666", marginBottom: "1vh" }}>Growth Rate</div>
              <div style={{ fontSize: "8vw", fontWeight: 800, lineHeight: 0.8, color: "#000", letterSpacing: "-0.05em" }}>+245<span style={{ fontSize: "4vw", color: "#FF0000" }}>%</span></div>
              <p style={{ fontSize: "1vw", color: "#666", marginTop: "2vh", maxWidth: "20vw" }}>Year over year user acquisition growth across global markets.</p>
            </div>
            <div>
              <div style={{ fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "#666", marginBottom: "1vh" }}>Active Users</div>
              <div style={{ fontSize: "8vw", fontWeight: 300, lineHeight: 0.8, color: "#000", letterSpacing: "-0.05em" }}>12.4<span style={{ fontSize: "4vw", color: "#FF0000" }}>M</span></div>
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh", justifyContent: "center" }}>
            {/* Bar Charts */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
              {[
                { label: "Q1 Performance", value: 45, color: "#000" },
                { label: "Q2 Performance", value: 65, color: "#666" },
                { label: "Q3 Performance", value: 85, color: "#999" },
                { label: "Q4 Projection", value: 100, color: "#FF0000" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "2vw" }}>
                  <div style={{ width: "8vw", fontSize: "0.9vw", fontWeight: 500, color: "#666", textTransform: "uppercase", letterSpacing: "0.05em" }}>{item.label}</div>
                  <div style={{ flex: 1, height: "2vh", background: "#F0F0F0", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: `${item.value}%`, background: item.color }} />
                  </div>
                  <div style={{ width: "3vw", fontSize: "1vw", fontWeight: 800, color: "#000", textAlign: "right" }}>{item.value}</div>
                </div>
              ))}
            </div>
            
            <p style={{ fontSize: "1vw", color: "#666", lineHeight: 1.6, marginTop: "4vh", borderLeft: "2px solid #FF0000", paddingLeft: "2vw" }}>
              The current quarter demonstrates significant improvement in all targeted sectors. The implementation of our revised strategy has yielded unprecedented results in engagement.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "0.8vw", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: "#999" }}>
            Proprietary & Confidential
          </div>
          <div style={{ fontSize: "6vw", fontWeight: 100, color: "#E0E0E0", lineHeight: 1 }}>03</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/SwissTypographicPage4.tsx`)

```tsx
export function SwissTypographicPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFFFFF", fontFamily: "'Inter', Helvetica, Arial, sans-serif", position: "relative" }}>
      {/* Grid Lines */}
      <div style={{ position: "absolute", top: 0, left: "50vw", width: "1px", height: "100vh", background: "#E0E0E0" }} />
      <div style={{ position: "absolute", top: 0, left: "25vw", width: "1px", height: "100vh", background: "#F0F0F0" }} />
      <div style={{ position: "absolute", top: 0, left: "75vw", width: "1px", height: "100vh", background: "#F0F0F0" }} />
      <div style={{ position: "absolute", left: 0, top: "50vh", width: "100vw", height: "1px", background: "#F0F0F0" }} />

      {/* Red Accent Square */}
      <div style={{ position: "absolute", bottom: "10vh", right: "5vw", width: "6vw", height: "6vw", background: "#FF0000" }} />

      <div style={{ padding: "5vh 5vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginTop: "3vh" }}>
          <div>
            <div style={{ fontSize: "0.8vw", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2em", color: "#999", marginBottom: "1vh" }}>
              Next Steps / Contact
            </div>
          </div>
        </div>

        {/* Content - Conclusion & CTA */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center" }}>
          <h1 style={{ fontSize: "8vw", fontWeight: 800, lineHeight: 0.9, margin: 0, color: "#000", letterSpacing: "-0.04em" }}>
            Let's Build
          </h1>
          <h1 style={{ fontSize: "8vw", fontWeight: 300, lineHeight: 0.9, margin: 0, color: "#000", letterSpacing: "-0.04em" }}>
            The Future.
          </h1>
          
          <div style={{ marginTop: "6vh", display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
            <p style={{ fontSize: "1.2vw", color: "#666", maxWidth: "40vw", lineHeight: 1.6, margin: 0 }}>
              Join us in revolutionizing the industry standard. Reach out to discuss partnership opportunities.
            </p>
            <div style={{ display: "inline-block", background: "#000", color: "#FFF", padding: "1.5vh 3vw", fontSize: "1vw", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "2vh" }}>
              hello@example.com
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "25vh", left: "25vw", width: "50vw", display: "flex", justifyContent: "space-between" }}>
            <div style={{ fontSize: "1vw", fontWeight: 500, color: "#000" }}>New York<br/><span style={{ fontSize: "0.9vw", color: "#999", fontWeight: 400 }}>HQ</span></div>
            <div style={{ fontSize: "1vw", fontWeight: 500, color: "#000" }}>London<br/><span style={{ fontSize: "0.9vw", color: "#999", fontWeight: 400 }}>EMEA</span></div>
            <div style={{ fontSize: "1vw", fontWeight: 500, color: "#000" }}>Tokyo<br/><span style={{ fontSize: "0.9vw", color: "#999", fontWeight: 400 }}>APAC</span></div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "0.8vw", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.15em", color: "#999" }}>
            Thank You
          </div>
          <div style={{ fontSize: "6vw", fontWeight: 100, color: "#E0E0E0", lineHeight: 1 }}>04</div>
        </div>
      </div>
    </div>
  );
}
```
