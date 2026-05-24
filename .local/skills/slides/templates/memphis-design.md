# Memphis Design

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The MemphisDesign template features a playful and vibrant aesthetic, characteristic of the Memphis design style. The background color is a soft peach (#FFE8D6), while the text color is a dark gray (#1A1A1A) and accents include a bright coral (#FF6B6B), teal (#4ECDC4), and a sunny yellow (#FFE66D). The font family used is 'DM Sans', a sans-serif typeface, applied for both headings and body text. Key layout elements include various geometric shapes such as circles and rectangles, positioned at different angles and locations to create a dynamic composition, along with a decorative SVG path in a light coral hue (#FF6B6B) that adds visual interest. Overall, the aesthetic feel can be described as vibrant, playful, and modern.

## Source Code

**Component:** `MemphisDesign`

### Slide 1 — Title (`slide-styles/MemphisDesign.tsx`)

```tsx
export function MemphisDesign() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFE8D6", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#1A1A1A" }}>
      <div style={{ position: "absolute", top: "8vh", right: "10vw", width: "18vw", height: "18vw", border: "5px solid #FF6B6B", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "10vh", left: "8vw", width: "14vw", height: "14vw", background: "#4ECDC4", transform: "rotate(15deg)" }} />
      <div style={{ position: "absolute", top: "50vh", right: "25vw", width: "8vw", height: "8vw", background: "#FFE66D", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "20vh", right: "6vw", width: "10vw", height: "3vw", background: "#FF6B6B", transform: "rotate(-20deg)", borderRadius: "1.5vw" }} />
      <svg style={{ position: "absolute", top: "15vh", left: "40vw", width: "12vw", height: "12vw", opacity: 0.4 }} viewBox="0 0 100 100">
        <path d="M10,50 Q25,10 50,50 Q75,90 90,50" stroke="#FF6B6B" strokeWidth="3" fill="none" strokeDasharray="8,4" />
      </svg>
      <div style={{ padding: "6vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#FF6B6B" }}>acme.co</div>
          <div style={{ background: "#FF6B6B", color: "#fff", padding: "0.5vh 1.5vw", fontSize: "0.9vw", fontWeight: 700, textTransform: "uppercase", transform: "rotate(-3deg)" }}>
            New!
          </div>
        </div>
        <div>
          <h1 style={{ fontSize: "7vw", fontWeight: 700, lineHeight: 0.9, margin: 0 }}>
            Example
          </h1>
          <h1 style={{ fontSize: "7vw", fontWeight: 700, lineHeight: 0.9, margin: 0, color: "#FF6B6B" }}>
            Deck
          </h1>
          <p style={{ fontSize: "1.5vw", color: "#666", marginTop: "2vh", maxWidth: "40vw", lineHeight: 1.5 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "0.9vw", color: "#999" }}>
          <span>Example Company</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/MemphisDesignPage2.tsx`)

```tsx
export function MemphisDesignPage2() {
  const features = [
    {
      title: "Fast Deploy",
      description: "Push your code to production in seconds with zero downtime.",
      color: "#FF6B9D", // Hot pink
      icon: (
        <div style={{ position: "relative", width: "4vw", height: "4vw", marginBottom: "1.5vh" }}>
          <div style={{ position: "absolute", top: 0, left: 0, width: "3vw", height: "3vw", background: "#fff", border: "0.2vw solid #000" }} />
          <div style={{ position: "absolute", bottom: 0, right: 0, width: "3vw", height: "3vw", background: "#45B7D1", border: "0.2vw solid #000", borderRadius: "50%" }} />
        </div>
      )
    },
    {
      title: "Auto Scale",
      description: "Seamlessly handle traffic spikes without breaking a sweat.",
      color: "#FFDE59", // Yellow
      icon: (
        <div style={{ position: "relative", width: "4vw", height: "4vw", marginBottom: "1.5vh" }}>
          <div style={{ position: "absolute", bottom: "0.5vw", left: 0, width: 0, height: 0, borderLeft: "2vw solid transparent", borderRight: "2vw solid transparent", borderBottom: "3.5vw solid #96CEB4" }} />
          <svg style={{ position: "absolute", top: 0, right: "-1vw", width: "3vw", height: "3vw", zIndex: 1 }} viewBox="0 0 100 100">
             <path d="M10,50 Q25,20 50,50 T90,50" fill="none" stroke="#000" strokeWidth="8" />
          </svg>
        </div>
      )
    },
    {
      title: "Smart AI",
      description: "Intelligent features that learn from your user behaviors.",
      color: "#45B7D1", // Electric blue
      icon: (
        <div style={{ position: "relative", width: "4vw", height: "4vw", marginBottom: "1.5vh", display: "flex", gap: "0.5vw", flexWrap: "wrap", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "1.2vw", height: "1.2vw", background: "#FF6B9D", borderRadius: "50%" }} />
          <div style={{ width: "1.2vw", height: "1.2vw", background: "#FF6B9D" }} />
          <div style={{ width: "1.2vw", height: "1.2vw", background: "#FF6B9D", transform: "rotate(45deg)" }} />
        </div>
      )
    },
    {
      title: "Team Chat",
      description: "Collaborate in real-time with your entire organization.",
      color: "#96CEB4", // Mint
      icon: (
        <div style={{ position: "relative", width: "4vw", height: "4vw", marginBottom: "1.5vh" }}>
          <div style={{ position: "absolute", top: "0.5vw", left: "0.5vw", width: "3.5vw", height: "2.5vw", background: "#fff", border: "0.2vw solid #000", borderRadius: "1vw" }} />
          <div style={{ position: "absolute", top: "1vw", left: 0, width: "3.5vw", height: "2.5vw", background: "#FFDE59", border: "0.2vw solid #000", borderRadius: "1vw", zIndex: -1 }} />
        </div>
      )
    },
    {
      title: "Analytics",
      description: "Deep insights into your performance metrics and growth.",
      color: "#C2A3FF", // Lavender
      icon: (
        <div style={{ position: "relative", width: "4vw", height: "4vw", marginBottom: "1.5vh", display: "flex", alignItems: "flex-end", gap: "0.4vw" }}>
          <div style={{ width: "1vw", height: "1.5vw", background: "#000" }} />
          <div style={{ width: "1vw", height: "2.5vw", background: "#FF6B9D" }} />
          <div style={{ width: "1vw", height: "3.5vw", background: "#45B7D1" }} />
        </div>
      )
    },
    {
      title: "Integrations",
      description: "Connect with all the tools you already know and love.",
      color: "#FF9F43", // Orange
      icon: (
        <div style={{ position: "relative", width: "4vw", height: "4vw", marginBottom: "1.5vh" }}>
           <svg style={{ position: "absolute", top: 0, left: 0, width: "4vw", height: "4vw" }} viewBox="0 0 100 100">
             <polygon points="50,10 90,50 50,90 10,50" fill="#96CEB4" stroke="#000" strokeWidth="4" />
             <circle cx="50" cy="50" r="15" fill="#fff" stroke="#000" strokeWidth="4" />
           </svg>
        </div>
      )
    }
  ];

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      overflow: "hidden", 
      backgroundColor: "#FDFDFD", 
      fontFamily: "'DM Sans', sans-serif", 
      position: "relative", 
      color: "#000",
      boxSizing: "border-box"
    }}>
      {/* Memphis Background Decorations */}
      <div style={{ position: "absolute", top: "5vh", left: "5vw", width: "8vw", height: "8vw", background: "transparent", border: "0.4vw solid #FF6B9D", borderRadius: "50%", opacity: 0.8 }} />
      <div style={{ position: "absolute", bottom: "15vh", right: "8vw", width: "6vw", height: "6vw", background: "#FFDE59", transform: "rotate(45deg)", border: "0.3vw solid #000" }} />
      <div style={{ position: "absolute", top: "30vh", right: "3vw", width: "4vw", height: "4vw", background: "#45B7D1", borderRadius: "50%", border: "0.3vw solid #000" }} />
      <div style={{ position: "absolute", bottom: "10vh", left: "10vw", width: "5vw", height: "5vw", border: "0.4vw dashed #96CEB4" }} />
      <svg style={{ position: "absolute", top: "12vh", right: "20vw", width: "10vw", height: "5vw" }} viewBox="0 0 100 50">
        <path d="M0,25 Q12.5,0 25,25 T50,25 T75,25 T100,25" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" />
      </svg>
      <svg style={{ position: "absolute", bottom: "40vh", left: "2vw", width: "6vw", height: "15vw" }} viewBox="0 0 50 150">
         <path d="M25,0 L25,150" fill="none" stroke="#FF9F43" strokeWidth="6" strokeDasharray="15, 10" />
      </svg>
      <div style={{ position: "absolute", top: "60vh", right: "15vw", width: "2vw", height: "2vw", background: "#FF6B9D", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: "75vh", left: "25vw", width: "1.5vw", height: "1.5vw", background: "#000", borderRadius: "50%" }} />

      {/* Main Content Area */}
      <div style={{ position: "relative", width: "100%", height: "100%", padding: "8vh 8vw", display: "flex", flexDirection: "column" }}>
        
        {/* Header Section */}
        <div style={{ marginBottom: "6vh", position: "relative", display: "inline-block" }}>
          <h1 style={{ 
            fontSize: "5vw", 
            fontWeight: 900, 
            margin: 0, 
            textTransform: "uppercase", 
            letterSpacing: "-0.1vw",
            textShadow: "0.3vw 0.3vw 0px #FFDE59, 0.6vw 0.6vw 0px #45B7D1"
          }}>
            Features
          </h1>
          <svg style={{ position: "absolute", bottom: "-1.5vh", left: 0, width: "25vw", height: "2vw" }} viewBox="0 0 200 20" preserveAspectRatio="none">
            <path d="M0,10 Q20,20 40,10 T80,10 T120,10 T160,10 T200,10" fill="none" stroke="#FF6B9D" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        {/* 3x2 Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(3, 1fr)", 
          gridTemplateRows: "repeat(2, 1fr)", 
          gap: "3vw",
          flexGrow: 1,
          marginBottom: "4vh"
        }}>
          {features.map((feature, i) => (
            <div key={i} style={{
              background: feature.color,
              border: "0.3vw solid #000",
              boxShadow: "0.6vw 0.6vw 0px #000",
              padding: "2.5vw",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden"
            }}>
              {/* Box Background Pattern Overlay */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "1vw 1vw",
                opacity: 0.1,
                zIndex: 0
              }} />

              <div style={{ position: "relative", zIndex: 1, flexGrow: 1 }}>
                {feature.icon}
                <h3 style={{ 
                  fontSize: "1.8vw", 
                  fontWeight: 800, 
                  margin: "0 0 1vh 0", 
                  textTransform: "uppercase",
                  background: "#fff",
                  display: "inline-block",
                  padding: "0.2vw 0.6vw",
                  border: "0.2vw solid #000"
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  fontSize: "1vw", 
                  fontWeight: 600,
                  lineHeight: 1.4, 
                  margin: 0, 
                  color: "#000",
                  background: "rgba(255,255,255,0.7)",
                  padding: "0.5vw",
                  borderLeft: "0.3vw solid #000"
                }}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "flex-end",
          paddingTop: "2vh",
          borderTop: "0.2vw solid #000"
        }}>
          <div style={{ 
            fontSize: "1vw", 
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1vw"
          }}>
            Example Company, Inc. / Confidential
          </div>
          <div style={{ 
            fontSize: "2vw", 
            fontWeight: 900,
            background: "#000",
            color: "#fff",
            padding: "0.5vw 1vw",
            borderRadius: "50%",
            width: "3vw",
            height: "3vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/MemphisDesignPage3.tsx`)

```tsx
export function MemphisDesignPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFE8D6", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#1A1A1A" }}>
      {/* Background Shapes */}
      <div style={{ position: "absolute", top: "10vh", right: "5vw", width: "12vw", height: "12vw", border: "5px solid #FF6B6B", borderRadius: "50%", opacity: 0.6 }} />
      <div style={{ position: "absolute", bottom: "15vh", left: "10vw", width: "8vw", height: "8vw", background: "#FFE66D", borderRadius: "50%", opacity: 0.8 }} />
      <svg style={{ position: "absolute", top: "40vh", left: "30vw", width: "15vw", height: "15vw", opacity: 0.3 }} viewBox="0 0 100 100">
        <path d="M10,50 Q25,10 50,50 Q75,90 90,50" stroke="#4ECDC4" strokeWidth="4" fill="none" strokeDasharray="8,4" />
      </svg>
      <div style={{ position: "absolute", bottom: "30vh", right: "12vw", width: "10vw", height: "10vw", background: "#4ECDC4", transform: "rotate(-10deg)", opacity: 0.5 }} />

      <div style={{ padding: "6vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#FF6B6B" }}>acme.co</div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flex: 1, marginTop: "6vh" }}>
          {/* Left Column */}
          <div style={{ flex: 1, paddingRight: "5vw" }}>
            <h2 style={{ fontSize: "4vw", fontWeight: 700, lineHeight: 1, margin: 0 }}>
              Performance
              <br />
              <span style={{ color: "#4ECDC4" }}>Metrics</span>
            </h2>
            <p style={{ fontSize: "1.5vw", color: "#666", marginTop: "3vh", lineHeight: 1.5, maxWidth: "30vw" }}>
              Our system tracks key performance indicators to ensure maximum efficiency.
            </p>

            <div style={{ display: "flex", gap: "2vw", marginTop: "6vh" }}>
              <div style={{ background: "#fff", padding: "2vw", border: "4px solid #1A1A1A", borderRadius: "1vw", boxShadow: "0.5vw 0.5vw 0 #FF6B6B", transform: "rotate(-2deg)", width: "14vw" }}>
                <div style={{ fontSize: "3vw", fontWeight: 700, color: "#1A1A1A" }}>85%</div>
                <div style={{ fontSize: "1vw", fontWeight: 700, textTransform: "uppercase", color: "#666", marginTop: "0.5vh" }}>Conversion Rate</div>
              </div>
              <div style={{ background: "#fff", padding: "2vw", border: "4px solid #1A1A1A", borderRadius: "1vw", boxShadow: "0.5vw 0.5vw 0 #4ECDC4", transform: "rotate(3deg)", width: "14vw" }}>
                <div style={{ fontSize: "3vw", fontWeight: 700, color: "#1A1A1A" }}>2.4x</div>
                <div style={{ fontSize: "1vw", fontWeight: 700, textTransform: "uppercase", color: "#666", marginTop: "0.5vh" }}>Growth Multiple</div>
              </div>
            </div>
          </div>

          {/* Right Column: Chart area */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
             <div style={{ width: "100%", height: "45vh", background: "#fff", border: "4px solid #1A1A1A", position: "relative", padding: "2vw" }}>
                {/* Decorative border accent */}
                <div style={{ position: "absolute", top: "-1vw", right: "-1vw", width: "3vw", height: "3vw", background: "#FFE66D", border: "3px solid #1A1A1A", borderRadius: "50%" }}></div>
                
                <h3 style={{ fontSize: "1.5vw", fontWeight: 700, margin: "0 0 4vh 0", textTransform: "uppercase", letterSpacing: "0.1vw" }}>Monthly Users</h3>
                
                {/* Bar Chart Mockup */}
                <div style={{ display: "flex", alignItems: "flex-end", height: "30vh", gap: "2vw", paddingBottom: "2vh", borderBottom: "4px solid #1A1A1A" }}>
                   <div style={{ flex: 1, background: "#FF6B6B", height: "40%" }}></div>
                   <div style={{ flex: 1, background: "#4ECDC4", height: "65%" }}></div>
                   <div style={{ flex: 1, background: "#FFE66D", height: "50%" }}></div>
                   <div style={{ flex: 1, background: "#1A1A1A", height: "90%" }}></div>
                </div>
                
                {/* X Axis Labels */}
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1vh", fontWeight: 700, fontSize: "1vw", color: "#666" }}>
                   <div style={{ width: "25%", textAlign: "center" }}>Q1</div>
                   <div style={{ width: "25%", textAlign: "center" }}>Q2</div>
                   <div style={{ width: "25%", textAlign: "center" }}>Q3</div>
                   <div style={{ width: "25%", textAlign: "center" }}>Q4</div>
                </div>
             </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9vw", color: "#999", borderTop: "2px solid #1A1A1A", paddingTop: "2vh" }}>
          <span>Example Company</span>
          <span style={{ fontWeight: 700, color: "#1A1A1A" }}>03</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/MemphisDesignPage4.tsx`)

```tsx
export function MemphisDesignPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "#FFE8D6", fontFamily: "'DM Sans', sans-serif", position: "relative", color: "#1A1A1A" }}>
      {/* Background Elements */}
      <div style={{ position: "absolute", top: "-5vh", left: "-5vw", width: "25vw", height: "25vw", background: "#FFE66D", borderRadius: "50%" }} />
      <div style={{ position: "absolute", bottom: "10vh", right: "5vw", width: "15vw", height: "15vw", border: "5px solid #4ECDC4", borderRadius: "50%" }} />
      <div style={{ position: "absolute", top: "15vh", right: "15vw", width: "8vw", height: "3vw", background: "#FF6B6B", transform: "rotate(25deg)", borderRadius: "1.5vw" }} />
      <div style={{ position: "absolute", bottom: "-5vh", left: "20vw", width: "30vw", height: "30vw", background: "#FF6B6B", borderRadius: "50%", opacity: 0.1 }} />

      <div style={{ padding: "6vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#FF6B6B" }}>acme.co</div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center" }}>
          
          <div style={{ background: "#fff", padding: "1vw 2vw", border: "3px solid #1A1A1A", borderRadius: "2vw", transform: "rotate(-2deg)", marginBottom: "4vh", boxShadow: "0.4vw 0.4vw 0 #FFE66D" }}>
            <span style={{ fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1vw" }}>Get in touch</span>
          </div>

          <h2 style={{ fontSize: "6vw", fontWeight: 700, lineHeight: 1, margin: "0 0 2vh 0" }}>
            Ready to <span style={{ color: "#FF6B6B" }}>start?</span>
          </h2>
          
          <p style={{ fontSize: "1.5vw", color: "#666", maxWidth: "40vw", margin: "0 0 6vh 0", lineHeight: 1.5 }}>
            Join the revolution of modern design and build something extraordinary together.
          </p>

          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "18vw", height: "6vh", background: "#4ECDC4", color: "#fff", border: "3px solid #1A1A1A", fontSize: "1.2vw", fontWeight: 700, cursor: "pointer", boxShadow: "0.4vw 0.4vw 0 #1A1A1A", transition: "transform 0.2s" }}>
              Start Free Trial
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "18vw", height: "6vh", background: "#fff", color: "#1A1A1A", border: "3px solid #1A1A1A", fontSize: "1.2vw", fontWeight: 700, cursor: "pointer", boxShadow: "0.4vw 0.4vw 0 #FF6B6B", transition: "transform 0.2s" }}>
              Contact Sales
            </div>
          </div>

          {/* Contact Details Grid */}
          <div style={{ display: "flex", gap: "4vw", marginTop: "8vh" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
               <div style={{ fontSize: "1vw", fontWeight: 700, textTransform: "uppercase", color: "#999", marginBottom: "1vh" }}>Email</div>
               <div style={{ fontSize: "1.2vw", fontWeight: 700 }}>hello@acme.co</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
               <div style={{ fontSize: "1vw", fontWeight: 700, textTransform: "uppercase", color: "#999", marginBottom: "1vh" }}>Phone</div>
               <div style={{ fontSize: "1.2vw", fontWeight: 700 }}>+1 (555) 123-4567</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
               <div style={{ fontSize: "1vw", fontWeight: 700, textTransform: "uppercase", color: "#999", marginBottom: "1vh" }}>Office</div>
               <div style={{ fontSize: "1.2vw", fontWeight: 700 }}>San Francisco, CA</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9vw", color: "#999", borderTop: "2px solid #1A1A1A", paddingTop: "2vh" }}>
          <span>Example Company</span>
          <span style={{ fontWeight: 700, color: "#1A1A1A" }}>04</span>
        </div>
      </div>
    </div>
  );
}
```
