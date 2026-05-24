# Brand Book Page

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "BrandBookPage" template presents a modern and clean aesthetic, characterized by a minimalist design. The background color is set to pure white (#FFFFFF), while the primary text color is a dark gray (#1A1A1A). The font family used for the main content is 'Inter', sans-serif, with 'DM Mono', monospace, used for displaying color codes. Key layout elements include a centered title ("Example Deck") in a large font size (6vw) and a subtitle, along with decorative horizontal lines in light gray (#E5E5E5) separating sections. The template also features a color palette display with five colors: Dark Navy (#1A2530), Warm Gray (#EBE9E4), Sage Green (#8F9B8B), Terracotta (#C27A65), and Cream (#F7F5F0). The overall aesthetic feel is modern, clean, and professional.

## Source Code

**Component:** `BrandBookPage`

### Slide 1 — Title (`slide-styles/BrandBookPage.tsx`)

```tsx
export function BrandBookPage() {
  const colors = [
    { hex: "#1A2530", name: "Dark Navy" },
    { hex: "#EBE9E4", name: "Warm Gray" },
    { hex: "#8F9B8B", name: "Sage Green" },
    { hex: "#C27A65", name: "Terracotta" },
    { hex: "#F7F5F0", name: "Cream" },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        color: "#1A1A1A",
        fontFamily: "'Inter', sans-serif",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "8vw",
          fontSize: "1vw",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#1A1A1A",
        }}
      >
        Brand Guidelines / 2026
      </div>

      <div style={{ maxWidth: "70vw" }}>
        <h1
          style={{
            fontSize: "6vw",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#1A1A1A",
          }}
        >
          Example Deck
        </h1>
        <p
          style={{
            fontSize: "2vw",
            fontWeight: 400,
            color: "#666666",
            marginTop: "3vh",
            marginBottom: "8vh",
            maxWidth: "50vw",
            lineHeight: 1.4,
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        <div style={{ width: "100%", height: "1px", backgroundColor: "#E5E5E5", marginBottom: "4vh" }} />
        
        <div style={{ display: "flex", gap: "2vw" }}>
          {colors.map((color, idx) => (
            <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "1vh" }}>
              <div
                style={{
                  width: "6vw",
                  height: "6vw",
                  backgroundColor: color.hex,
                  border: color.hex === "#FFFFFF" || color.hex === "#F7F5F0" ? "1px solid #E5E5E5" : "none",
                }}
              />
              <div style={{ fontSize: "0.8vw", fontFamily: "'DM Mono', monospace", color: "#666666" }}>
                {color.hex}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ width: "100%", height: "1px", backgroundColor: "#E5E5E5", marginTop: "4vh" }} />
      </div>
      
      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          left: "8vw",
          fontSize: "1vw",
          fontWeight: 400,
          color: "#999999",
        }}
      >
        acme.co — Example Company, Inc.
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BrandBookPagePage2.tsx`)

```tsx
export function BrandBookPagePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        color: "#1A1A1A",
        fontFamily: "'Inter', sans-serif",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        paddingTop: "20vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "8vw",
          fontSize: "1vw",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#1A1A1A",
        }}
      >
        Brand Guidelines / 2026
      </div>

      <div style={{ maxWidth: "80vw" }}>
        <h2
          style={{
            fontSize: "4vw",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#1A1A1A",
            marginBottom: "6vh",
          }}
        >
          Core Brand Principles
        </h2>

        <div style={{ display: "flex", gap: "4vw", marginTop: "4vh" }}>
          {[
            { title: "Simplicity", desc: "We believe in removing the unnecessary so that the necessary may speak. Our designs are clean, purposeful, and focused." },
            { title: "Authenticity", desc: "We stay true to our roots. Our communication is honest, transparent, and grounded in real human experiences." },
            { title: "Innovation", desc: "We are always moving forward. We embrace new technologies and methodologies while respecting timeless design principles." }
          ].map((item, idx) => (
            <div key={idx} style={{ flex: 1 }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 600, color: "#1A1A1A", marginBottom: "2vh" }}>
                0{idx + 1}. {item.title}
              </div>
              <div style={{ width: "2vw", height: "3px", backgroundColor: "#C27A65", marginBottom: "2vh" }} />
              <p style={{ fontSize: "1.2vw", lineHeight: 1.6, color: "#666666", margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          left: "8vw",
          fontSize: "1vw",
          fontWeight: 400,
          color: "#999999",
        }}
      >
        acme.co — Example Company, Inc.
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          right: "8vw",
          fontSize: "1vw",
          fontWeight: 600,
          color: "#1A1A1A",
        }}
      >
        02
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/BrandBookPagePage3.tsx`)

```tsx
export function BrandBookPagePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        color: "#1A1A1A",
        fontFamily: "'Inter', sans-serif",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "8vw",
          fontSize: "1vw",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#1A1A1A",
        }}
      >
        Brand Guidelines / 2026
      </div>

      <div style={{ width: "100%" }}>
        <h2
          style={{
            fontSize: "4vw",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#1A1A1A",
            marginBottom: "2vh",
          }}
        >
          Brand Adoption Metrics
        </h2>
        <p style={{ fontSize: "1.5vw", color: "#666666", marginBottom: "6vh", maxWidth: "50vw" }}>
          Measuring the impact and consistency of our visual identity across all touchpoints and channels.
        </p>

        <div style={{ display: "flex", gap: "2vw", marginBottom: "4vh" }}>
          {[
            { value: "98%", label: "Brand Consistency", color: "#1A2530" },
            { value: "4.2M", label: "Monthly Impressions", color: "#8F9B8B" },
            { value: "150+", label: "Global Partners", color: "#C27A65" },
            { value: "12", label: "Design Awards", color: "#1A1A1A" }
          ].map((stat, idx) => (
            <div key={idx} style={{ flex: 1, backgroundColor: "#F7F5F0", padding: "3vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: "4vw", fontWeight: 700, color: stat.color, marginBottom: "1vh", lineHeight: 1 }}>
                {stat.value}
              </div>
              <div style={{ fontSize: "1.1vw", fontWeight: 500, color: "#666666", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ flex: 2, height: "20vh", backgroundColor: "#EBE9E4", position: "relative", overflow: "hidden" }}>
             <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "40%", backgroundColor: "#1A2530", opacity: 0.1 }} />
             <div style={{ position: "absolute", bottom: 0, left: "10%", width: "15%", height: "30%", backgroundColor: "#8F9B8B" }} />
             <div style={{ position: "absolute", bottom: 0, left: "35%", width: "15%", height: "60%", backgroundColor: "#C27A65" }} />
             <div style={{ position: "absolute", bottom: 0, left: "60%", width: "15%", height: "45%", backgroundColor: "#1A2530" }} />
             <div style={{ position: "absolute", bottom: 0, left: "85%", width: "15%", height: "80%", backgroundColor: "#1A1A1A" }} />
          </div>
          <div style={{ flex: 1, height: "20vh", border: "1px solid #E5E5E5", padding: "2vw", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Quarterly Growth</div>
            <div style={{ fontSize: "3vw", fontWeight: 700, color: "#C27A65" }}>+24%</div>
            <div style={{ fontSize: "0.9vw", color: "#999999" }}>Compared to Q3 2025</div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          left: "8vw",
          fontSize: "1vw",
          fontWeight: 400,
          color: "#999999",
        }}
      >
        acme.co — Example Company, Inc.
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          right: "8vw",
          fontSize: "1vw",
          fontWeight: 600,
          color: "#1A1A1A",
        }}
      >
        03
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/BrandBookPagePage4.tsx`)

```tsx
export function BrandBookPagePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        color: "#1A1A1A",
        fontFamily: "'Inter', sans-serif",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "8vw",
          fontSize: "1vw",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#1A1A1A",
        }}
      >
        Brand Guidelines / 2026
      </div>

      <div style={{ maxWidth: "60vw" }}>
        <h2
          style={{
            fontSize: "5vw",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            color: "#1A1A1A",
            marginBottom: "4vh",
          }}
        >
          Let's build something remarkable.
        </h2>
        
        <p
          style={{
            fontSize: "1.8vw",
            fontWeight: 400,
            color: "#666666",
            marginBottom: "6vh",
            lineHeight: 1.5,
          }}
        >
          For brand assets, detailed guidelines, and press inquiries, please reach out to our communications team.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "2vw" }}>
          <div
            style={{
              padding: "1.5vw 3vw",
              backgroundColor: "#1A2530",
              color: "#FFFFFF",
              fontSize: "1.2vw",
              fontWeight: 600,
              borderRadius: "4px",
            }}
          >
            Download Brand Kit
          </div>
          <div
            style={{
              padding: "1.5vw 3vw",
              backgroundColor: "transparent",
              color: "#1A1A1A",
              border: "1px solid #E5E5E5",
              fontSize: "1.2vw",
              fontWeight: 600,
              borderRadius: "4px",
            }}
          >
            Contact Team
          </div>
        </div>
        
        <div style={{ marginTop: "8vh", display: "flex", justifyContent: "center", gap: "4vw", fontSize: "1.1vw", color: "#666666", fontFamily: "'DM Mono', monospace" }}>
          <div>press@acme.co</div>
          <div>+1 (555) 123-4567</div>
          <div>acme.co/brand</div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          left: "8vw",
          fontSize: "1vw",
          fontWeight: 400,
          color: "#999999",
        }}
      >
        acme.co — Example Company, Inc.
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          right: "8vw",
          fontSize: "1vw",
          fontWeight: 600,
          color: "#1A1A1A",
        }}
      >
        04
      </div>
    </div>
  );
}
```
