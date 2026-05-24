# Slate Modern

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The SlateModern template features a clean and contemporary aesthetic, characterized by a minimalist design. The background color is solid white (#FFFFFF), with a dark accent strip on the left side in a deep grayish-blue (#3D4852). Text colors include a darker grayish-blue (#3D4852) for the main headings, a lighter gray (#99A3A4) for secondary text, and a muted teal (#7F8C8D) for the subtitle. The font family used is 'Inter', sans-serif, which is applied throughout for a modern and readable appearance. Key layout elements include a vertical accent bar, a large bold heading, and a circular decorative element positioned near the subtitle. There are no background images used in this template. The overall aesthetic feel can be described as "modern minimalist."

## Source Code

**Component:** `SlateModern`

### Slide 1 — Title (`slide-styles/SlateModern.tsx`)

```tsx
export function SlateModern() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2vw",
          backgroundColor: "#3D4852",
        }}
      />
      
      <div
        style={{
          padding: "8vh 8vw",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#3D4852" }}>acme.co</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#99A3A4" }}>Confidential</div>
        </div>

        <div style={{ paddingLeft: "4vw", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-1vw",
              top: "1.5vh",
              width: "1.5vw",
              height: "1.5vw",
              backgroundColor: "#5A8A7A",
              borderRadius: "50%",
            }}
          />
          <h1
            style={{
              fontSize: "8vw",
              fontWeight: 800,
              color: "#3D4852",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            Example Deck
          </h1>
          <p
            style={{
              fontSize: "2vw",
              fontWeight: 400,
              color: "#7F8C8D",
              marginTop: "3vh",
              maxWidth: "50vw",
              lineHeight: 1.5,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#99A3A4" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#99A3A4" }}>
            2026
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/SlateModernPage2.tsx`)

```tsx
export function SlateModernPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2vw",
          backgroundColor: "#3D4852",
        }}
      />
      
      <div
        style={{
          padding: "8vh 8vw",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#3D4852" }}>acme.co</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#99A3A4" }}>Confidential</div>
        </div>

        <div style={{ paddingLeft: "4vw", position: "relative", flex: 1, marginTop: "8vh" }}>
          <div
            style={{
              position: "absolute",
              left: "-1vw",
              top: "1.5vh",
              width: "1.5vw",
              height: "1.5vw",
              backgroundColor: "#5A8A7A",
              borderRadius: "50%",
            }}
          />
          <h2
            style={{
              fontSize: "4vw",
              fontWeight: 800,
              color: "#3D4852",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "6vh"
            }}
          >
            Strategic Priorities
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "4vh" }}>
            {[
              { title: "Market Expansion", desc: "Penetrating new demographics through targeted digital campaigns and strategic regional partnerships across major coastal hubs." },
              { title: "Product Innovation", desc: "Accelerating our R&D pipeline to deliver the next generation of intuitive, enterprise-grade collaboration tools by Q3." },
              { title: "Operational Excellence", desc: "Streamlining internal workflows and adopting robust automated systems to reduce overhead and improve delivery timelines by 25%." }
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
                <div style={{ 
                  fontSize: "1.5vw", 
                  fontWeight: 700, 
                  color: "#5A8A7A", 
                  width: "3vw", 
                  flexShrink: 0 
                }}>
                  0{i + 1}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: "1.8vw", 
                    fontWeight: 600, 
                    color: "#3D4852", 
                    margin: "0 0 1vh 0" 
                  }}>
                    {item.title}
                  </h3>
                  <p style={{ 
                    fontSize: "1.4vw", 
                    fontWeight: 400, 
                    color: "#7F8C8D", 
                    margin: 0, 
                    lineHeight: 1.6,
                    maxWidth: "60vw"
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#99A3A4" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#99A3A4" }}>
            02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/SlateModernPage3.tsx`)

```tsx
export function SlateModernPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2vw",
          backgroundColor: "#3D4852",
        }}
      />
      
      <div
        style={{
          padding: "8vh 8vw",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#3D4852" }}>acme.co</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#99A3A4" }}>Confidential</div>
        </div>

        <div style={{ paddingLeft: "4vw", position: "relative", flex: 1, marginTop: "8vh", display: "flex", flexDirection: "column" }}>
          <div
            style={{
              position: "absolute",
              left: "-1vw",
              top: "1.5vh",
              width: "1.5vw",
              height: "1.5vw",
              backgroundColor: "#5A8A7A",
              borderRadius: "50%",
            }}
          />
          <h2
            style={{
              fontSize: "4vw",
              fontWeight: 800,
              color: "#3D4852",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "8vh"
            }}
          >
            Q4 Performance Metrics
          </h2>

          <div style={{ display: "flex", gap: "4vw", marginBottom: "6vh" }}>
            {[
              { label: "Active Users", value: "2.4M", trend: "+14%" },
              { label: "Revenue (ARR)", value: "$18.5M", trend: "+22%" },
              { label: "Retention Rate", value: "94.2%", trend: "+2.1%" },
            ].map((stat, i) => (
              <div key={i} style={{ 
                flex: 1, 
                backgroundColor: "#F8F9F9", 
                padding: "3vw", 
                borderTop: "0.4vw solid #5A8A7A"
              }}>
                <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#7F8C8D", marginBottom: "1vh" }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: "3.5vw", fontWeight: 800, color: "#3D4852", marginBottom: "1vh" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#5A8A7A" }}>
                  {stat.trend} vs last quarter
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", height: "15vh", alignItems: "flex-end", gap: "2vw", padding: "0 2vw" }}>
            {[40, 65, 45, 80, 55, 90, 70, 100].map((h, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div style={{ 
                  width: "100%", 
                  height: `${h}%`, 
                  backgroundColor: i === 7 ? "#5A8A7A" : "#D5D8DC",
                  transition: "height 0.3s ease"
                }} />
                <div style={{ fontSize: "0.9vw", color: "#99A3A4", fontWeight: 500 }}>
                  M{i+1}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "4vh" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#99A3A4" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#99A3A4" }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/SlateModernPage4.tsx`)

```tsx
export function SlateModernPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "2vw",
          backgroundColor: "#3D4852",
        }}
      />
      
      <div
        style={{
          padding: "8vh 8vw",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#3D4852" }}>acme.co</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 400, color: "#99A3A4" }}>Confidential</div>
        </div>

        <div style={{ 
          paddingLeft: "4vw", 
          position: "relative", 
          flex: 1, 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center" 
        }}>
          <div
            style={{
              position: "absolute",
              left: "-1vw",
              top: "calc(50% - 14vh)",
              width: "1.5vw",
              height: "1.5vw",
              backgroundColor: "#5A8A7A",
              borderRadius: "50%",
            }}
          />
          <h2
            style={{
              fontSize: "6vw",
              fontWeight: 800,
              color: "#3D4852",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "4vh"
            }}
          >
            Let's build the<br />future together.
          </h2>
          
          <p
            style={{
              fontSize: "1.8vw",
              fontWeight: 400,
              color: "#7F8C8D",
              margin: 0,
              marginBottom: "6vh",
              maxWidth: "45vw",
              lineHeight: 1.5,
            }}
          >
            We are looking for visionary partners to join our Series B round and help scale our operations globally.
          </p>

          <div style={{ display: "flex", gap: "4vw" }}>
            <div>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#99A3A4", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>
                Contact
              </div>
              <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#3D4852" }}>
                jane.doe@acme.co
              </div>
            </div>
            <div>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#99A3A4", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>
                Website
              </div>
              <div style={{ fontSize: "1.5vw", fontWeight: 500, color: "#3D4852" }}>
                www.acme.co/investors
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#99A3A4" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#99A3A4" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
