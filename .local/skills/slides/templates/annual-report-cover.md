# Annual Report Cover

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "AnnualReportCover" template presents a clean and modern aesthetic, characterized by a minimalist design. The background color is a solid light gray (#FDFDFD), while the prominent text "2026" is rendered in a soft gray (#ECECEC) using the serif font "Playfair Display" at a large size for emphasis. The main text color is a dark gray (#111111), with accent colors including medium gray (#666666) for the company name and lighter gray (#888888) for the confidentiality note. The font family "Inter" is used for body text, ensuring readability. Key layout elements include a large, centered year at the bottom, a header with company branding, and a title and subtitle section that are flexibly positioned to create a structured yet open feel. There are no background images used in this template. The overall aesthetic feel can be described as "modern minimalism."

## Source Code

**Component:** `AnnualReportCover`

### Slide 1 — Title (`slide-styles/AnnualReportCover.tsx`)

```tsx
export function AnnualReportCover() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FDFDFD",
        fontFamily: "'Inter', sans-serif",
        color: "#111111",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-4vh",
          right: "-2vw",
          fontSize: "25vw",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#ECECEC",
          lineHeight: 0.8,
          zIndex: 0,
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
      >
        2026
      </div>

      <div
        style={{
          padding: "6vh 6vw",
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "4vh",
            borderBottom: "0.15vh solid #E0E0E0",
          }}
        >
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#666666", letterSpacing: "0.05em" }}>
            Example Company, Inc.
          </div>
        </div>

        <div style={{ marginTop: "12vh", maxWidth: "65vw" }}>
          <h1
            style={{
              fontSize: "7vw",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Example Deck
          </h1>
          <p
            style={{
              fontSize: "2vw",
              fontWeight: 400,
              color: "#555555",
              marginTop: "5vh",
              lineHeight: 1.4,
              maxWidth: "50vw",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        <div
          style={{
            marginTop: "auto",
            fontSize: "1vw",
            fontWeight: 500,
            color: "#888888",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Confidential Information
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/AnnualReportCoverPage2.tsx`)

```tsx
export function AnnualReportCoverPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FDFDFD",
        fontFamily: "'Inter', sans-serif",
        color: "#111111",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-4vh",
          right: "-2vw",
          fontSize: "25vw",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#ECECEC",
          lineHeight: 0.8,
          zIndex: 0,
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
      >
        02
      </div>

      <div
        style={{
          padding: "6vh 6vw",
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "4vh",
            borderBottom: "0.15vh solid #E0E0E0",
          }}
        >
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#666666", letterSpacing: "0.05em" }}>
            Key Operations
          </div>
        </div>

        <div style={{ display: "flex", marginTop: "10vh", flex: 1, gap: "6vw" }}>
          <div style={{ flex: "0 0 35%" }}>
            <h2
              style={{
                fontSize: "4vw",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Strategic Initiatives
            </h2>
            <p
              style={{
                fontSize: "1.4vw",
                color: "#555555",
                marginTop: "4vh",
                lineHeight: 1.5,
              }}
            >
              Our focus remains on delivering sustainable growth through strategic investments and operational excellence across all major divisions.
            </p>
          </div>

          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "5vh" }}>
            {[
              {
                title: "Global Expansion",
                desc: "Entering emerging markets in APAC and EMEA to capture new demographics and diversify revenue streams.",
              },
              {
                title: "Digital Transformation",
                desc: "Overhauling legacy systems with cloud-native infrastructure, improving operational efficiency by 34%.",
              },
              {
                title: "Sustainable Practices",
                desc: "Achieved carbon-neutral operations ahead of our 2030 pledge, leading the industry in environmental responsibility.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "2vw",
                  borderTop: "1px solid #E0E0E0",
                  paddingTop: "3vh",
                }}
              >
                <div
                  style={{
                    fontSize: "1.2vw",
                    fontWeight: 600,
                    color: "#888888",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  0{i + 1}.
                </div>
                <div>
                  <h3 style={{ fontSize: "1.6vw", fontWeight: 600, margin: "0 0 1vh 0" }}>{item.title}</h3>
                  <p style={{ fontSize: "1.1vw", color: "#666666", margin: 0, lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1vw",
            fontWeight: 500,
            color: "#888888",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          <div>Confidential Information</div>
          <div>02</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/AnnualReportCoverPage3.tsx`)

```tsx
export function AnnualReportCoverPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FDFDFD",
        fontFamily: "'Inter', sans-serif",
        color: "#111111",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-4vh",
          right: "-2vw",
          fontSize: "25vw",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#ECECEC",
          lineHeight: 0.8,
          zIndex: 0,
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
      >
        03
      </div>

      <div
        style={{
          padding: "6vh 6vw",
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "4vh",
            borderBottom: "0.15vh solid #E0E0E0",
          }}
        >
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#666666", letterSpacing: "0.05em" }}>
            Financial Overview
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginTop: "8vh", flex: 1 }}>
          <h2
            style={{
              fontSize: "3vw",
              fontWeight: 700,
              margin: "0 0 6vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            By The Numbers
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2vw",
              marginBottom: "8vh",
            }}
          >
            {[
              { label: "Annual Revenue", val: "$1.2B", change: "+14.5%" },
              { label: "Net Profit", val: "$340M", change: "+8.2%" },
              { label: "Active Users", val: "4.5M", change: "+22.4%" },
              { label: "Markets", val: "32", change: "+4" },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  padding: "3vh 2vw",
                  backgroundColor: "#F5F5F5",
                  borderLeft: "4px solid #111111",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1vh",
                }}
              >
                <div style={{ fontSize: "1vw", color: "#666666", fontWeight: 500 }}>{stat.label}</div>
                <div style={{ fontSize: "3vw", fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: "1.1vw", color: "#333333", fontWeight: 600 }}>{stat.change} YoY</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, marginBottom: "3vh", color: "#555" }}>
                Revenue Growth (2020 - 2025)
              </div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "2vw",
                  borderBottom: "2px solid #E0E0E0",
                  paddingBottom: "2vh",
                  height: "25vh",
                }}
              >
                {[40, 55, 65, 80, 95, 120].map((h, i) => (
                  <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                    <div
                      style={{
                        width: "100%",
                        height: `${h}%`,
                        backgroundColor: i === 5 ? "#111111" : "#D4D4D4",
                      }}
                    />
                    <div style={{ fontSize: "0.9vw", color: "#888" }}>202{i}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, marginBottom: "3vh", color: "#555" }}>
                Revenue by Region
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
                {[
                  { region: "North America", pct: 45 },
                  { region: "Europe", pct: 30 },
                  { region: "Asia Pacific", pct: 20 },
                  { region: "Rest of World", pct: 5 },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5vh", fontSize: "1vw", color: "#333" }}>
                      <span>{item.region}</span>
                      <span style={{ fontWeight: 600 }}>{item.pct}%</span>
                    </div>
                    <div style={{ width: "100%", height: "1vh", backgroundColor: "#E0E0E0" }}>
                      <div style={{ width: `${item.pct}%`, height: "100%", backgroundColor: "#111111" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1vw",
            fontWeight: 500,
            color: "#888888",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          <div>Confidential Information</div>
          <div>03</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/AnnualReportCoverPage4.tsx`)

```tsx
export function AnnualReportCoverPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#111111",
        fontFamily: "'Inter', sans-serif",
        color: "#FDFDFD",
        position: "relative",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-4vh",
          right: "-2vw",
          fontSize: "25vw",
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#222222",
          lineHeight: 0.8,
          zIndex: 0,
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
      >
        04
      </div>

      <div
        style={{
          padding: "6vh 6vw",
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "4vh",
            borderBottom: "0.15vh solid #333333",
          }}
        >
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            acme.co
          </div>
          <div style={{ fontSize: "1vw", fontWeight: 500, color: "#888888", letterSpacing: "0.05em" }}>
            Summary
          </div>
        </div>

        <div style={{ marginTop: "15vh", maxWidth: "60vw" }}>
          <h2
            style={{
              fontSize: "6vw",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Thank You.
          </h2>
          <p
            style={{
              fontSize: "2vw",
              fontWeight: 400,
              color: "#CCCCCC",
              marginTop: "4vh",
              lineHeight: 1.4,
              maxWidth: "45vw",
            }}
          >
            We appreciate your continued partnership and look forward to an even brighter future together.
          </p>

          <div style={{ display: "flex", gap: "4vw", marginTop: "10vh" }}>
            <div>
              <div style={{ fontSize: "0.9vw", color: "#888888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>
                General Inquiries
              </div>
              <div style={{ fontSize: "1.4vw", fontWeight: 500 }}>hello@acme.co</div>
            </div>
            <div>
              <div style={{ fontSize: "0.9vw", color: "#888888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>
                Investor Relations
              </div>
              <div style={{ fontSize: "1.4vw", fontWeight: 500 }}>investors@acme.co</div>
            </div>
            <div>
              <div style={{ fontSize: "0.9vw", color: "#888888", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>
                Headquarters
              </div>
              <div style={{ fontSize: "1.4vw", fontWeight: 500 }}>San Francisco, CA</div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1vw",
            fontWeight: 500,
            color: "#666666",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          <div>Confidential Information</div>
          <div>04</div>
        </div>
      </div>
    </div>
  );
}
```
