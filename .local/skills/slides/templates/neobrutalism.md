# Neobrutalism

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The Neobrutalism template features a bold and playful aesthetic characterized by vibrant colors and geometric shapes. The background color is a solid light green (#E8FF8B), while accent colors include a bright pink (#FF90E8) and a soft blue (#90C8FF). The text color is black (#000) with highlights in light green (#E8FF8B) and white (#fff) for contrast. The font family used is 'DM Sans', sans-serif, primarily for body text and headings, emphasizing a modern and clean look. Key layout elements include a large rectangular pink shape with rounded corners and a circular blue shape, both positioned absolutely within the viewport, along with a structured layout of text elements that utilize flexbox for alignment. There are no background images specified in the code. The overall aesthetic feel can be described as vibrant and geometric.

## Source Code

**Component:** `Neobrutalism`

### Slide 1 — Title (`slide-styles/Neobrutalism.tsx`)

```tsx
export function Neobrutalism() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#E8FF8B", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#000" }}>
      <div style={{ position: "absolute", top: "10vh", right: "8vw", width: "28vw", height: "28vw", background: "#FF90E8", border: "3px solid #000", borderRadius: "2vw", boxShadow: "6px 6px 0 #000" }} />
      <div style={{ position: "absolute", bottom: "12vh", right: "20vw", width: "12vw", height: "12vw", background: "#90C8FF", border: "3px solid #000", borderRadius: "50%", boxShadow: "5px 5px 0 #000" }} />
      <div style={{ padding: "6vh 6vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ background: "#000", color: "#E8FF8B", padding: "0.6vh 1.5vw", fontSize: "1.2vw", fontWeight: 700, border: "3px solid #000", boxShadow: "3px 3px 0 #000" }}>
            acme.co
          </div>
          <div style={{ background: "#fff", border: "3px solid #000", padding: "0.4vh 1.2vw", fontSize: "0.9vw", fontWeight: 700, boxShadow: "3px 3px 0 #000" }}>
            2026
          </div>
        </div>
        <div style={{ maxWidth: "55vw" }}>
          <div style={{ display: "inline-block", background: "#fff", border: "3px solid #000", padding: "0.4vh 1.2vw", fontSize: "1vw", fontWeight: 700, boxShadow: "3px 3px 0 #000", marginBottom: "2vh", textTransform: "uppercase" }}>
            Presentation Title
          </div>
          <h1 style={{ fontSize: "7vw", fontWeight: 900, lineHeight: 0.88, margin: 0 }}>
            Example
          </h1>
          <h1 style={{ fontSize: "7vw", fontWeight: 900, lineHeight: 0.88, margin: 0 }}>
            Deck
          </h1>
          <p style={{ fontSize: "1.5vw", marginTop: "2.5vh", maxWidth: "38vw", lineHeight: 1.5, fontWeight: 500 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>
        <div style={{ display: "flex", gap: "2vw", alignItems: "center" }}>
          <div style={{ background: "#fff", border: "2px solid #000", padding: "0.3vh 1vw", fontSize: "0.9vw", fontWeight: 600, boxShadow: "2px 2px 0 #000" }}>
            Example Company, Inc.
          </div>
          <div style={{ background: "#fff", border: "2px solid #000", padding: "0.3vh 1vw", fontSize: "0.9vw", fontWeight: 600, boxShadow: "2px 2px 0 #000" }}>
            Confidential
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/NeobrutalismPage2.tsx`)

```tsx
export function NeobrutalismPage2() {
  const features = [
    { name: "Unlimited Projects", free: "✗", pro: "✓", business: "✓" },
    { name: "Priority Support", free: "✗", pro: "✓", business: "✓" },
    { name: "Custom Domain", free: "✗", pro: "✗", business: "✓" },
    { name: "Analytics", free: "✗", pro: "✓", business: "✓" },
    { name: "API Access", free: "✗", pro: "✗", business: "✓" },
  ];

  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      backgroundColor: "#fff",
      fontFamily: "'DM Sans', sans-serif",
      color: "#000",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "6vh 6vw",
      boxSizing: "border-box"
    }}>
      {/* Decorative background shapes */}
      <div style={{ position: "absolute", top: "-5vw", right: "-5vw", width: "20vw", height: "20vw", backgroundColor: "#C6F135", border: "0.4vw solid #000", borderRadius: "50%", zIndex: 0, boxShadow: "0.5vw 0.5vw 0px #000" }}></div>
      <div style={{ position: "absolute", bottom: "10vh", left: "-2vw", width: "12vw", height: "12vw", backgroundColor: "#FF6B9D", border: "0.4vw solid #000", zIndex: 0, transform: "rotate(15deg)", boxShadow: "0.5vw 0.5vw 0px #000" }}></div>

      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
        
        <h1 style={{ 
          fontSize: "4.5vw", 
          fontWeight: 900, 
          margin: "0 0 4vh 0", 
          display: "inline-block", 
          borderBottom: "0.6vw solid #000", 
          paddingBottom: "1vh",
          alignSelf: "flex-start",
          textShadow: "0.3vw 0.3vw 0px #C6F135"
        }}>
          Choose Your Plan
        </h1>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          
          {/* Table Container */}
          <div style={{ display: "flex", flexDirection: "column", width: "95%", backgroundColor: "transparent" }}>
            
            {/* Table Header Row */}
            <div style={{ display: "flex", marginBottom: "3vh", gap: "2vw" }}>
              <div style={{ flex: 1.5, display: "flex", alignItems: "flex-end", paddingBottom: "1vh" }}>
                <span style={{ fontSize: "2.5vw", fontWeight: 900 }}>Features</span>
              </div>
              
              <div style={{ 
                flex: 1, 
                backgroundColor: "#FFE156", 
                border: "0.4vw solid #000", 
                boxShadow: "0.5vw 0.5vw 0px #000",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                padding: "2vh 0"
              }}>
                <span style={{ fontSize: "2.5vw", fontWeight: 900 }}>Free</span>
              </div>
              
              <div style={{ 
                flex: 1, 
                backgroundColor: "#FF6B9D", 
                border: "0.5vw solid #000", 
                boxShadow: "0.6vw 0.6vw 0px #000",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                padding: "2.5vh 0",
                transform: "translateY(-1vh)",
                zIndex: 2
              }}>
                <span style={{ fontSize: "3vw", fontWeight: 900, color: "#fff", textShadow: "0.2vw 0.2vw 0px #000" }}>Pro</span>
              </div>
              
              <div style={{ 
                flex: 1, 
                backgroundColor: "#4ECDC4", 
                border: "0.4vw solid #000", 
                boxShadow: "0.5vw 0.5vw 0px #000",
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                padding: "2vh 0"
              }}>
                <span style={{ fontSize: "2.5vw", fontWeight: 900 }}>Business</span>
              </div>
            </div>

            {/* Table Body rows */}
            <div style={{ border: "0.4vw solid #000", boxShadow: "0.6vw 0.6vw 0px #000", backgroundColor: "#fff", display: "flex", flexDirection: "column" }}>
              {features.map((feat, i) => (
                <div key={i} style={{ display: "flex", borderBottom: i === features.length - 1 ? "none" : "0.3vw solid #000" }}>
                  <div style={{ flex: 1.5, padding: "2.5vh 2vw", fontSize: "1.6vw", fontWeight: 800, display: "flex", alignItems: "center" }}>
                    {feat.name}
                  </div>
                  
                  <div style={{ flex: 1, padding: "2.5vh 2vw", borderLeft: "0.3vw solid #000", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5vw", fontWeight: 900, color: feat.free === "✓" ? "#00A86B" : "#FF3B30" }}>
                    {feat.free}
                  </div>
                  
                  <div style={{ flex: 1, padding: "2.5vh 2vw", borderLeft: "0.4vw solid #000", borderRight: "0.4vw solid #000", backgroundColor: "rgba(255, 107, 157, 0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5vw", fontWeight: 900, color: feat.pro === "✓" ? "#00A86B" : "#FF3B30", position: "relative" }}>
                    {feat.pro}
                  </div>
                  
                  <div style={{ flex: 1, padding: "2.5vh 2vw", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5vw", fontWeight: 900, color: feat.business === "✓" ? "#00A86B" : "#FF3B30" }}>
                    {feat.business}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4vh" }}>
          <div style={{ border: "0.3vw solid #000", padding: "1vh 1.5vw", fontWeight: 800, fontSize: "1.1vw", boxShadow: "0.3vw 0.3vw 0px #000", backgroundColor: "#fff" }}>
            Example Company, Inc. / Confidential
          </div>
          <div style={{ border: "0.3vw solid #000", padding: "1vh 1.5vw", fontWeight: 900, fontSize: "1.3vw", boxShadow: "0.3vw 0.3vw 0px #000", backgroundColor: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            02
          </div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/NeobrutalismPage3.tsx`)

```tsx
export function NeobrutalismPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#E8FF8B", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#000" }}>
      <div style={{ position: "absolute", top: "-5vh", left: "-5vw", width: "15vw", height: "15vw", background: "#FF90E8", border: "3px solid #000", borderRadius: "2vw", boxShadow: "6px 6px 0 #000", transform: "rotate(-10deg)" }} />
      <div style={{ position: "absolute", bottom: "-10vh", right: "-5vw", width: "25vw", height: "25vw", background: "#90C8FF", border: "3px solid #000", borderRadius: "50%", boxShadow: "6px 6px 0 #000" }} />
      
      <div style={{ padding: "6vh 6vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ display: "inline-block", background: "#fff", border: "3px solid #000", padding: "0.4vh 1.2vw", fontSize: "1vw", fontWeight: 700, boxShadow: "3px 3px 0 #000", marginBottom: "2vh", textTransform: "uppercase" }}>
              Key Metrics
            </div>
            <h2 style={{ fontSize: "4.5vw", fontWeight: 900, lineHeight: 0.9, margin: 0 }}>
              By The Numbers
            </h2>
          </div>
          <div style={{ background: "#000", color: "#E8FF8B", padding: "0.6vh 1.5vw", fontSize: "1.2vw", fontWeight: 700, border: "3px solid #000", boxShadow: "3px 3px 0 #000" }}>
            acme.co
          </div>
        </div>

        {/* Content - Stats Grid */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3vh", flex: 1, marginTop: "6vh", marginBottom: "4vh" }}>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ flex: 1, background: "#fff", border: "3px solid #000", padding: "3vh 2vw", boxShadow: "6px 6px 0 #000" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase", marginBottom: "1vh" }}>Total Revenue</div>
              <div style={{ fontSize: "4vw", fontWeight: 900, background: "#FF90E8", display: "inline-block", padding: "0 1vw", border: "3px solid #000", boxShadow: "3px 3px 0 #000", transform: "rotate(-2deg)" }}>$12.4M</div>
              <div style={{ fontSize: "1vw", fontWeight: 600, marginTop: "2vh", borderTop: "2px solid #000", paddingTop: "1vh" }}>+45% year over year</div>
            </div>
            <div style={{ flex: 1, background: "#fff", border: "3px solid #000", padding: "3vh 2vw", boxShadow: "6px 6px 0 #000" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase", marginBottom: "1vh" }}>Active Users</div>
              <div style={{ fontSize: "4vw", fontWeight: 900, background: "#90C8FF", display: "inline-block", padding: "0 1vw", border: "3px solid #000", boxShadow: "3px 3px 0 #000", transform: "rotate(2deg)" }}>840K</div>
              <div style={{ fontSize: "1vw", fontWeight: 600, marginTop: "2vh", borderTop: "2px solid #000", paddingTop: "1vh" }}>Across 120 countries</div>
            </div>
          </div>
          
          {/* Chart Area */}
          <div style={{ flex: 1, background: "#fff", border: "3px solid #000", padding: "3vh 2vw", boxShadow: "6px 6px 0 #000", display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative" }}>
            <div style={{ position: "absolute", top: "2vh", left: "2vw", fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase" }}>Quarterly Growth</div>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", height: "80%", width: "100%", gap: "2vw", paddingBottom: "1vh", borderBottom: "3px solid #000" }}>
              <div style={{ width: "100%", height: "30%", background: "#000", border: "2px solid #000", boxShadow: "3px -3px 0 #FF90E8" }}></div>
              <div style={{ width: "100%", height: "50%", background: "#000", border: "2px solid #000", boxShadow: "3px -3px 0 #90C8FF" }}></div>
              <div style={{ width: "100%", height: "70%", background: "#000", border: "2px solid #000", boxShadow: "3px -3px 0 #FF90E8" }}></div>
              <div style={{ width: "100%", height: "100%", background: "#E8FF8B", border: "2px solid #000", boxShadow: "3px -3px 0 #000" }}></div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1vh", fontWeight: 700, fontSize: "1vw" }}>
              <span>Q1</span>
              <span>Q2</span>
              <span>Q3</span>
              <span>Q4</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ background: "#fff", border: "2px solid #000", padding: "0.3vh 1vw", fontSize: "0.9vw", fontWeight: 600, boxShadow: "2px 2px 0 #000" }}>
            Example Company, Inc.
          </div>
          <div style={{ background: "#fff", border: "2px solid #000", padding: "0.3vh 1vw", fontSize: "0.9vw", fontWeight: 900, boxShadow: "2px 2px 0 #000" }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/NeobrutalismPage4.tsx`)

```tsx
export function NeobrutalismPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FF90E8", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#000" }}>
      
      {/* Decorative Background Elements */}
      <div style={{ position: "absolute", top: "20vh", left: "10vw", width: "80vw", height: "60vh", background: "#E8FF8B", border: "4px solid #000", borderRadius: "1vw", boxShadow: "12px 12px 0 #000", transform: "rotate(-2deg)" }} />
      <div style={{ position: "absolute", bottom: "5vh", right: "5vw", width: "18vw", height: "18vw", background: "#90C8FF", border: "3px solid #000", borderRadius: "50%", boxShadow: "6px 6px 0 #000", zIndex: 10 }} />
      
      <div style={{ padding: "6vh 6vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative", zIndex: 5 }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ background: "#000", color: "#E8FF8B", padding: "0.6vh 1.5vw", fontSize: "1.2vw", fontWeight: 700, border: "3px solid #000", boxShadow: "3px 3px 0 #000" }}>
            acme.co
          </div>
          <div style={{ background: "#fff", border: "3px solid #000", padding: "0.4vh 1.2vw", fontSize: "0.9vw", fontWeight: 700, boxShadow: "3px 3px 0 #000" }}>
            Let's Talk
          </div>
        </div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center" }}>
          
          <div style={{ display: "inline-block", background: "#90C8FF", border: "3px solid #000", padding: "0.8vh 2vw", fontSize: "1.5vw", fontWeight: 800, boxShadow: "4px 4px 0 #000", marginBottom: "3vh", textTransform: "uppercase", transform: "rotate(2deg)" }}>
            Ready to start?
          </div>
          
          <h1 style={{ fontSize: "8vw", fontWeight: 900, lineHeight: 0.9, margin: "0 0 4vh 0", textShadow: "4px 4px 0 #fff" }}>
            GET IN TOUCH
          </h1>
          
          <div style={{ display: "flex", gap: "2vw", marginTop: "2vh" }}>
            <div style={{ background: "#fff", border: "3px solid #000", padding: "2vh 3vw", fontSize: "1.5vw", fontWeight: 700, boxShadow: "6px 6px 0 #000", cursor: "pointer", transition: "all 0.2s" }}>
              hello@acme.co
            </div>
            <div style={{ background: "#000", color: "#fff", border: "3px solid #000", padding: "2vh 3vw", fontSize: "1.5vw", fontWeight: 700, boxShadow: "6px 6px 0 #fff", cursor: "pointer" }}>
              @acmeco
            </div>
          </div>
          
          <div style={{ display: "flex", gap: "1vw", marginTop: "6vh" }}>
            <div style={{ width: "3vw", height: "3vw", background: "#fff", border: "2px solid #000", borderRadius: "50%", boxShadow: "2px 2px 0 #000" }} />
            <div style={{ width: "3vw", height: "3vw", background: "#fff", border: "2px solid #000", borderRadius: "50%", boxShadow: "2px 2px 0 #000" }} />
            <div style={{ width: "3vw", height: "3vw", background: "#fff", border: "2px solid #000", borderRadius: "50%", boxShadow: "2px 2px 0 #000" }} />
          </div>

        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ background: "#fff", border: "2px solid #000", padding: "0.3vh 1vw", fontSize: "0.9vw", fontWeight: 600, boxShadow: "2px 2px 0 #000" }}>
            Thank You
          </div>
          <div style={{ background: "#fff", border: "2px solid #000", padding: "0.3vh 1vw", fontSize: "0.9vw", fontWeight: 900, boxShadow: "2px 2px 0 #000" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
