# Brutalist Web Punk

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "BrutalistWebPunk" template embodies a brutalist aesthetic with a web punk twist, featuring a stark and utilitarian design. The background color is a solid light gray (#D9D9D9), while the main content area has a white background (#FFFFFF) with black accents (#000000) and vibrant red highlights (#FF3B00). The font families used include 'Space Grotesk' for general text and 'DM Mono' for monospace elements, emphasizing a digital and retro feel. Key layout elements include a structured grid with a left sidebar, a central title area, and decorative elements like dashed borders and a fake scrollbar. The overall aesthetic feel can be described as "raw, digital, chaotic."

## Source Code

**Component:** `BrutalistWebPunk`

### Slide 1 — Title (`slide-styles/BrutalistWebPunk.tsx`)

```tsx
export function BrutalistWebPunk() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#D9D9D9",
        color: "#000000",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "2vw",
      }}
    >
      {/* Browser Window Chrome */}
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FFFFFF",
          border: "0.4vw solid #000000",
          boxShadow: "1vw 1vw 0vw #FF3B00",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {/* Fake Title Bar */}
        <div
          style={{
            height: "5vh",
            backgroundColor: "#000000",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            padding: "0 1vw",
            fontFamily: "'DM Mono', monospace",
            fontSize: "1vw",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "0.5vw" }}>
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#FF3B00", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#D9D9D9", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#FFFFFF", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
          </div>
          <div>C:\SYSTEM\ACME\INDEX.HTML</div>
          <div style={{ fontWeight: "bold" }}>[X]</div>
        </div>

        {/* Fake Address Bar */}
        <div
          style={{
            height: "6vh",
            borderBottom: "0.3vw solid #000000",
            backgroundColor: "#D9D9D9",
            display: "flex",
            alignItems: "center",
            padding: "0 1vw",
            gap: "1vw",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: "bold" }}>BACK</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: "bold" }}>FWD</div>
          <div
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              border: "0.2vw solid #000000",
              height: "3.5vh",
              display: "flex",
              alignItems: "center",
              padding: "0 1vw",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1vw",
            }}
          >
            HTTP://WWW.ACME.CO/2026
          </div>
        </div>

        {/* Content Area */}
        <div
          style={{
            flex: 1,
            position: "relative",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "1fr 2fr 1fr",
            gridTemplateRows: "1fr 1fr",
          }}
        >
          {/* Left Sidebar */}
          <div
            style={{
              borderRight: "0.3vw solid #000000",
              padding: "2vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              backgroundColor: "#FFFFFF",
            }}
          >
            <div>
              <div style={{ border: "0.3vw solid #000000", display: "inline-block", padding: "1vw", backgroundColor: "#FF3B00", color: "#FFFFFF", fontWeight: 900, fontSize: "2vw", transform: "rotate(-5deg)" }}>
                acme.co
              </div>
            </div>
            
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", lineHeight: 1.5, borderTop: "0.3vw solid #000", paddingTop: "1vh" }}>
              <div style={{ fontWeight: "bold", marginBottom: "1vh" }}>SYSTEM STATUS:</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>YEAR</span><span>2026</span></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>SEC</span><span>CONFIDENTIAL</span></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span>CORP</span><span>EXAMPLE_INC</span></div>
            </div>
          </div>

          {/* Main Title Area */}
          <div
            style={{
              gridColumn: "2 / 4",
              gridRow: "1 / 3",
              padding: "4vw",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              position: "relative",
              backgroundImage: "radial-gradient(#000 0.15vw, transparent 0.15vw)",
              backgroundSize: "2vw 2vw",
            }}
          >
            <div style={{ backgroundColor: "#FFFFFF", padding: "3vw", border: "0.4vw solid #000000", boxShadow: "0.8vw 0.8vw 0vw #000000", position: "relative", zIndex: 10 }}>
              <h1
                style={{
                  fontSize: "9vw",
                  fontWeight: 900,
                  margin: 0,
                  lineHeight: 0.9,
                  textTransform: "uppercase",
                  letterSpacing: "-0.05em",
                  wordBreak: "break-word",
                }}
              >
                EXAMPLE
                <br />
                <span style={{ color: "#FFFFFF", WebkitTextStroke: "0.2vw #000000" }}>DECK</span>
              </h1>
              
              <div style={{ marginTop: "4vh", backgroundColor: "#FF3B00", padding: "1.5vw", border: "0.2vw solid #000000", color: "#FFFFFF" }}>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "1.5vw",
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.4,
                  }}
                >
                  {">"} Your compelling subtitle goes here. Describe your big idea in a single sentence. _
                </p>
              </div>
            </div>

            {/* Decorative Brutalist Elements */}
            <div style={{ position: "absolute", top: "5vw", right: "5vw", width: "10vw", height: "10vw", border: "0.4vw solid #000", borderRadius: "50%", borderStyle: "dashed", animation: "spin 20s linear infinite" }} />
            <div style={{ position: "absolute", bottom: "3vw", right: "8vw", border: "0.3vw solid #000", padding: "0.5vw 2vw", backgroundColor: "#D9D9D9", fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: "bold", transform: "rotate(15deg)" }}>
              CLICK HERE
            </div>
            
            {/* Fake Scrollbar */}
            <div style={{ position: "absolute", right: 0, top: 0, width: "3vw", height: "100%", borderLeft: "0.3vw solid #000", backgroundColor: "#D9D9D9", display: "flex", flexDirection: "column" }}>
              <div style={{ height: "3vw", borderBottom: "0.3vw solid #000", display: "flex", justifyContent: "center", alignItems: "center" }}>▲</div>
              <div style={{ flex: 1, padding: "0.3vw" }}>
                <div style={{ width: "100%", height: "20%", backgroundColor: "#000" }} />
              </div>
              <div style={{ height: "3vw", borderTop: "0.3vw solid #000", display: "flex", justifyContent: "center", alignItems: "center" }}>▼</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BrutalistWebPunkPage2.tsx`)

```tsx
export function BrutalistWebPunkPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#D9D9D9",
        color: "#000000",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "2vw",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FFFFFF",
          border: "0.4vw solid #000000",
          boxShadow: "1vw 1vw 0vw #FF3B00",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "5vh",
            backgroundColor: "#000000",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            padding: "0 1vw",
            fontFamily: "'DM Mono', monospace",
            fontSize: "1vw",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "0.5vw" }}>
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#FF3B00", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#D9D9D9", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#FFFFFF", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
          </div>
          <div>C:\SYSTEM\ACME\ABOUT.HTML</div>
          <div style={{ fontWeight: "bold" }}>[X]</div>
        </div>

        <div
          style={{
            height: "6vh",
            borderBottom: "0.3vw solid #000000",
            backgroundColor: "#D9D9D9",
            display: "flex",
            alignItems: "center",
            padding: "0 1vw",
            gap: "1vw",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: "bold" }}>BACK</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: "bold" }}>FWD</div>
          <div
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              border: "0.2vw solid #000000",
              height: "3.5vh",
              display: "flex",
              alignItems: "center",
              padding: "0 1vw",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1vw",
            }}
          >
            HTTP://WWW.ACME.CO/MISSION
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "row",
            position: "relative",
            overflow: "hidden",
            backgroundImage: "radial-gradient(#000 0.15vw, transparent 0.15vw)",
            backgroundSize: "2vw 2vw",
            padding: "3vw",
            gap: "3vw"
          }}
        >
          <div style={{ flex: 1, backgroundColor: "#FFFFFF", border: "0.4vw solid #000000", boxShadow: "0.8vw 0.8vw 0vw #000000", padding: "3vw", display: "flex", flexDirection: "column" }}>
             <h2 style={{ fontSize: "5vw", fontWeight: 900, margin: "0 0 2vh 0", textTransform: "uppercase", lineHeight: 1 }}>
               CORE<br /><span style={{ color: "#FFFFFF", WebkitTextStroke: "0.15vw #000000" }}>MANIFEST0</span>
             </h2>
             <div style={{ width: "100%", height: "0.4vw", backgroundColor: "#000000", marginBottom: "3vh" }} />
             <p style={{ fontSize: "1.5vw", lineHeight: 1.6, fontWeight: 500, margin: "0 0 2vh 0" }}>
               We exist to break the mold. The standard patterns are dead, long live the chaotic good. We build things that scale infinitely and break standard conventions.
             </p>
             <p style={{ fontSize: "1.5vw", lineHeight: 1.6, fontWeight: 500, margin: 0 }}>
               Our approach is brutal but effective. No fluff, just pure performance wrapped in undeniable style.
             </p>
          </div>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vw" }}>
             <div style={{ backgroundColor: "#FF3B00", border: "0.4vw solid #000000", boxShadow: "0.8vw 0.8vw 0vw #000000", padding: "2vw", color: "#FFFFFF" }}>
               <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "2vw", margin: "0 0 1vh 0" }}>{">"} INITIATIVE 01</h3>
               <p style={{ fontSize: "1.2vw", margin: 0 }}>Disrupt the established paradigms of enterprise software.</p>
             </div>
             <div style={{ backgroundColor: "#D9D9D9", border: "0.4vw solid #000000", boxShadow: "0.8vw 0.8vw 0vw #000000", padding: "2vw", color: "#000000" }}>
               <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "2vw", margin: "0 0 1vh 0" }}>{">"} INITIATIVE 02</h3>
               <p style={{ fontSize: "1.2vw", margin: 0 }}>Maximize throughput while maintaining uncompromising aesthetics.</p>
             </div>
             <div style={{ backgroundColor: "#000000", border: "0.4vw solid #000000", boxShadow: "0.8vw 0.8vw 0vw #FF3B00", padding: "2vw", color: "#FFFFFF" }}>
               <h3 style={{ fontFamily: "'DM Mono', monospace", fontSize: "2vw", margin: "0 0 1vh 0", color: "#FF3B00" }}>{">"} INITIATIVE 03</h3>
               <p style={{ fontSize: "1.2vw", margin: 0 }}>Scale global operations without losing our edge.</p>
             </div>
          </div>
          
          <div style={{ position: "absolute", bottom: "1vw", right: "2vw", fontFamily: "'DM Mono', monospace", fontSize: "1.5vw", fontWeight: "bold", backgroundColor: "#FFFFFF", padding: "0.5vw 1vw", border: "0.2vw solid #000" }}>
            PAGE 02 / 04
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/BrutalistWebPunkPage3.tsx`)

```tsx
export function BrutalistWebPunkPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#D9D9D9",
        color: "#000000",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "2vw",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FFFFFF",
          border: "0.4vw solid #000000",
          boxShadow: "1vw 1vw 0vw #FF3B00",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "5vh",
            backgroundColor: "#000000",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            padding: "0 1vw",
            fontFamily: "'DM Mono', monospace",
            fontSize: "1vw",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "0.5vw" }}>
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#FF3B00", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#D9D9D9", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#FFFFFF", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
          </div>
          <div>C:\SYSTEM\ACME\METRICS.HTML</div>
          <div style={{ fontWeight: "bold" }}>[X]</div>
        </div>

        <div
          style={{
            height: "6vh",
            borderBottom: "0.3vw solid #000000",
            backgroundColor: "#D9D9D9",
            display: "flex",
            alignItems: "center",
            padding: "0 1vw",
            gap: "1vw",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: "bold" }}>BACK</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: "bold" }}>FWD</div>
          <div
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              border: "0.2vw solid #000000",
              height: "3.5vh",
              display: "flex",
              alignItems: "center",
              padding: "0 1vw",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1vw",
            }}
          >
            HTTP://WWW.ACME.CO/TRACTION
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
            backgroundImage: "radial-gradient(#000 0.15vw, transparent 0.15vw)",
            backgroundSize: "2vw 2vw",
            padding: "3vw",
            gap: "2vw"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <h2 style={{ fontSize: "6vw", fontWeight: 900, margin: 0, lineHeight: 0.8, textTransform: "uppercase", backgroundColor: "#FF3B00", color: "#FFFFFF", padding: "1vw 2vw", border: "0.4vw solid #000000", boxShadow: "0.6vw 0.6vw 0vw #000000", display: "inline-block" }}>
              TRACTION
            </h2>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.5vw", fontWeight: "bold", backgroundColor: "#000", color: "#FFF", padding: "1vw", border: "0.2vw solid #FFF" }}>
              SYSTEM_LOAD: OPTIMAL
            </div>
          </div>

          <div style={{ flex: 1, display: "flex", gap: "2vw", alignItems: "flex-end", borderBottom: "0.4vw solid #000", paddingBottom: "1vw", marginTop: "4vh" }}>
            <div style={{ flex: 1, height: "40%", backgroundColor: "#D9D9D9", border: "0.3vw solid #000", position: "relative" }}>
               <div style={{ position: "absolute", top: "-3vw", width: "100%", textAlign: "center", fontFamily: "'DM Mono', monospace", fontSize: "1.5vw", fontWeight: "bold" }}>Q1</div>
               <div style={{ position: "absolute", bottom: "1vw", width: "100%", textAlign: "center", fontSize: "2vw", fontWeight: 900 }}>24%</div>
            </div>
            <div style={{ flex: 1, height: "60%", backgroundColor: "#000000", border: "0.3vw solid #000", color: "#FFF", position: "relative" }}>
               <div style={{ position: "absolute", top: "-3vw", width: "100%", textAlign: "center", fontFamily: "'DM Mono', monospace", fontSize: "1.5vw", fontWeight: "bold", color: "#000" }}>Q2</div>
               <div style={{ position: "absolute", bottom: "1vw", width: "100%", textAlign: "center", fontSize: "2vw", fontWeight: 900 }}>48%</div>
            </div>
            <div style={{ flex: 1, height: "30%", backgroundColor: "#FFFFFF", border: "0.3vw solid #000", position: "relative" }}>
               <div style={{ position: "absolute", top: "-3vw", width: "100%", textAlign: "center", fontFamily: "'DM Mono', monospace", fontSize: "1.5vw", fontWeight: "bold" }}>Q3</div>
               <div style={{ position: "absolute", bottom: "1vw", width: "100%", textAlign: "center", fontSize: "2vw", fontWeight: 900 }}>18%</div>
            </div>
            <div style={{ flex: 1, height: "90%", backgroundColor: "#FF3B00", border: "0.3vw solid #000", color: "#FFF", position: "relative" }}>
               <div style={{ position: "absolute", top: "-3vw", width: "100%", textAlign: "center", fontFamily: "'DM Mono', monospace", fontSize: "1.5vw", fontWeight: "bold" }}>Q4</div>
               <div style={{ position: "absolute", bottom: "1vw", width: "100%", textAlign: "center", fontSize: "3vw", fontWeight: 900 }}>110%</div>
               <div style={{ position: "absolute", top: "-1vw", right: "-1vw", backgroundColor: "#000", color: "#FFF", padding: "0.5vw", fontFamily: "'DM Mono', monospace", fontSize: "1vw", transform: "rotate(15deg)", border: "0.1vw solid #FFF" }}>{">"} BOOM</div>
            </div>
          </div>
          
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: "1.5vw", fontWeight: 500, width: "60%", margin: 0, padding: "1vw", backgroundColor: "#FFF", border: "0.2vw solid #000" }}>
              Massive spike in Q4 due to global network rollout. Engagement metrics have exceeded system thresholds.
            </p>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.5vw", fontWeight: "bold", backgroundColor: "#FFFFFF", padding: "0.5vw 1vw", border: "0.2vw solid #000" }}>
              PAGE 03 / 04
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/BrutalistWebPunkPage4.tsx`)

```tsx
export function BrutalistWebPunkPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#D9D9D9",
        color: "#000000",
        fontFamily: "'Space Grotesk', sans-serif",
        position: "relative",
        boxSizing: "border-box",
        padding: "2vw",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FFFFFF",
          border: "0.4vw solid #000000",
          boxShadow: "1vw 1vw 0vw #FF3B00",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            height: "5vh",
            backgroundColor: "#000000",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            padding: "0 1vw",
            fontFamily: "'DM Mono', monospace",
            fontSize: "1vw",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", gap: "0.5vw" }}>
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#FF3B00", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#D9D9D9", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
            <div style={{ width: "1.2vw", height: "1.2vw", backgroundColor: "#FFFFFF", borderRadius: "50%", border: "0.1vw solid #FFF" }} />
          </div>
          <div>C:\SYSTEM\ACME\CONTACT.HTML</div>
          <div style={{ fontWeight: "bold" }}>[X]</div>
        </div>

        <div
          style={{
            height: "6vh",
            borderBottom: "0.3vw solid #000000",
            backgroundColor: "#D9D9D9",
            display: "flex",
            alignItems: "center",
            padding: "0 1vw",
            gap: "1vw",
          }}
        >
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: "bold" }}>BACK</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw", fontWeight: "bold" }}>FWD</div>
          <div
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              border: "0.2vw solid #000000",
              height: "3.5vh",
              display: "flex",
              alignItems: "center",
              padding: "0 1vw",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1vw",
            }}
          >
            HTTP://WWW.ACME.CO/JOIN_US
          </div>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
            backgroundImage: "radial-gradient(#000 0.15vw, transparent 0.15vw)",
            backgroundSize: "2vw 2vw",
            padding: "3vw",
          }}
        >
          <div style={{ textAlign: "center", backgroundColor: "#FFFFFF", border: "0.4vw solid #000000", boxShadow: "1vw 1vw 0vw #000000", padding: "5vw", position: "relative", zIndex: 10, maxWidth: "70%" }}>
            <h2 style={{ fontSize: "8vw", fontWeight: 900, margin: 0, lineHeight: 0.9, textTransform: "uppercase" }}>
              SYSTEM<br /><span style={{ color: "#FF3B00" }}>READY.</span>
            </h2>
            <div style={{ width: "100%", height: "0.4vw", backgroundColor: "#000", margin: "3vh 0" }} />
            <p style={{ fontSize: "2vw", fontWeight: 500, margin: "0 0 4vh 0" }}>
              Initialize sequence and start the revolution. Connect with us.
            </p>
            <div style={{ display: "inline-block", backgroundColor: "#000", color: "#FFF", padding: "1.5vw 3vw", fontSize: "2vw", fontWeight: "bold", border: "0.3vw solid #FF3B00", cursor: "pointer", fontFamily: "'DM Mono', monospace", textTransform: "uppercase" }}>
              {">"} EXECUTE_JOIN
            </div>
          </div>

          {/* Decorative Elements */}
          <div style={{ position: "absolute", top: "10vw", left: "10vw", width: "5vw", height: "5vw", backgroundColor: "#FF3B00", border: "0.3vw solid #000", transform: "rotate(45deg)" }} />
          <div style={{ position: "absolute", bottom: "10vw", right: "10vw", width: "8vw", height: "8vw", borderRadius: "50%", border: "0.4vw dashed #000", animation: "spin 10s linear infinite" }} />
          
          <div style={{ position: "absolute", bottom: "1vw", right: "2vw", fontFamily: "'DM Mono', monospace", fontSize: "1.5vw", fontWeight: "bold", backgroundColor: "#FFFFFF", padding: "0.5vw 1vw", border: "0.2vw solid #000" }}>
            PAGE 04 / 04
          </div>
        </div>
      </div>
    </div>
  );
}
```
