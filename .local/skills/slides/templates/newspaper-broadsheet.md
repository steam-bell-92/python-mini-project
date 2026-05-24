# Newspaper Broadsheet

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "NewspaperBroadsheet" template embodies a classic, editorial aesthetic reminiscent of traditional newspaper layouts. It features a solid background color of #F7F4EF, with text primarily in #111111 for a stark contrast. The font family used is 'Inter' for general text, while 'Georgia, serif' is employed for headings and emphasized text, enhancing the formal newspaper feel. Key layout elements include a structured header with a border, a prominent title section, and a two-column layout for the main content, separated by a thin vertical line. There are no background images specified in the code. The overall aesthetic feel can be described as "classic editorial."

## Source Code

**Component:** `NewspaperBroadsheet`

### Slide 1 — Title (`slide-styles/NewspaperBroadsheet.tsx`)

```tsx
export function NewspaperBroadsheet() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F7F4EF",
        color: "#111111",
        fontFamily: "'Inter', sans-serif",
        padding: "4vh 4vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #111111",
          paddingBottom: "1vh",
          marginBottom: "1vh",
        }}
      >
        <div style={{ fontSize: "0.9vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "0.9vw", fontStyle: "italic", fontFamily: "Georgia, serif" }}>
          "All the Ideas That Are Fit to Print"
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Vol. MMXXVI
        </div>
      </div>

      <div style={{ textAlign: "center", borderBottom: "3px solid #111111", paddingBottom: "2vh", marginBottom: "0.5vh" }}>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "8vw",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          Example Deck
        </h1>
      </div>
      <div style={{ borderBottom: "1px solid #111111", marginBottom: "3vh" }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.8vw",
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          borderBottom: "1px solid #E0DDD6",
          paddingBottom: "1vh",
          marginBottom: "3vh",
        }}
      >
        <div>NEW YORK, {new Date().getFullYear()}</div>
        <div>EDITION NO. 1</div>
        <div>CONFIDENTIAL REPORT</div>
      </div>

      <div style={{ display: "flex", flex: 1, gap: "3vw" }}>
        <div style={{ flex: 2, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "0.9vw",
              fontWeight: 700,
              backgroundColor: "#111111",
              color: "#F7F4EF",
              display: "inline-block",
              padding: "0.4vh 0.8vw",
              alignSelf: "flex-start",
              marginBottom: "2vh",
              letterSpacing: "0.1em",
            }}
          >
            BREAKING
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "4vw",
              fontWeight: 400,
              margin: "0 0 2vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            A Compelling Subtitle Goes Here: The Big Idea
          </h2>
          <div style={{ fontSize: "0.9vw", fontWeight: 600, marginBottom: "2vh", textTransform: "uppercase" }}>
            By EXAMPLE COMPANY, INC.
          </div>
          <p
            style={{
              fontSize: "1.2vw",
              lineHeight: 1.6,
              margin: 0,
              columnCount: 2,
              columnGap: "2vw",
              textAlign: "justify",
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence. 
            This abstract presents an unprecedented opportunity to revolutionize the current 
            market landscape through strategic innovation and operational excellence. 
            The forthcoming presentation will detail the methodology, financial projections, 
            and implementation timeline required to achieve market dominance. 
            Stakeholders are advised to review the core metrics outlined in the subsequent 
            sections, as they form the foundation of our strategic thesis. 
            The board's approval will initiate phase one immediately.
          </p>
        </div>

        <div style={{ width: "1px", backgroundColor: "#D1CEC7", margin: "0 1vw" }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h3
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "1.8vw",
              fontWeight: 400,
              margin: "0 0 2vh 0",
              borderBottom: "1px solid #111111",
              paddingBottom: "1vh",
              lineHeight: 1.2,
            }}
          >
            Inside This Issue
          </h3>
          <ul
            style={{
              listStyleType: "none",
              padding: 0,
              margin: 0,
              fontSize: "1.1vw",
              lineHeight: 2,
              fontFamily: "Georgia, serif",
            }}
          >
            <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E0DDD6", paddingBottom: "1vh", marginBottom: "1vh" }}>
              <span>Executive Summary</span> <span>A2</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E0DDD6", paddingBottom: "1vh", marginBottom: "1vh" }}>
              <span>Market Analysis</span> <span>B1</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E0DDD6", paddingBottom: "1vh", marginBottom: "1vh" }}>
              <span>Financial Projections</span> <span>C4</span>
            </li>
            <li style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E0DDD6", paddingBottom: "1vh", marginBottom: "1vh" }}>
              <span>Implementation Plan</span> <span>D2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/NewspaperBroadsheetPage2.tsx`)

```tsx
export function NewspaperBroadsheetPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F7F4EF",
        color: "#111111",
        fontFamily: "'Inter', sans-serif",
        padding: "4vh 4vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #111111",
          paddingBottom: "1vh",
          marginBottom: "1vh",
        }}
      >
        <div style={{ fontSize: "0.9vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "0.9vw", fontStyle: "italic", fontFamily: "Georgia, serif" }}>
          "All the Ideas That Are Fit to Print"
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Vol. MMXXVI
        </div>
      </div>

      <div style={{ textAlign: "center", borderBottom: "3px solid #111111", paddingBottom: "2vh", marginBottom: "0.5vh" }}>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "5vw",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          Market Analysis
        </h1>
      </div>
      <div style={{ borderBottom: "1px solid #111111", marginBottom: "3vh" }} />

      <div style={{ display: "flex", flex: 1, gap: "3vw", minHeight: 0 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "2.5vw",
              fontWeight: 400,
              margin: "0 0 2vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            The Shift in Consumer Behavior Continues
          </h2>
          <div style={{ fontSize: "0.9vw", fontWeight: 600, marginBottom: "2vh", textTransform: "uppercase" }}>
            By J. DOE, SENIOR ANALYST
          </div>
          <p
            style={{
              fontSize: "1.1vw",
              lineHeight: 1.6,
              margin: "0 0 2vh 0",
              textAlign: "justify",
            }}
          >
            <span style={{ fontSize: "3vw", float: "left", lineHeight: 0.8, paddingTop: "0.5vh", paddingRight: "0.5vw", fontFamily: "Georgia, serif", fontWeight: 700 }}>T</span>
            he unprecedented changes we have witnessed over the past year are not merely temporary fluctuations but represent a fundamental restructuring of the market ecosystem. Our latest research indicates a profound shift toward digital-first interactions, prioritizing speed and transparency above traditional brand loyalty metrics.
          </p>
          <p
            style={{
              fontSize: "1.1vw",
              lineHeight: 1.6,
              margin: 0,
              textAlign: "justify",
            }}
          >
            Companies that failed to adapt during the initial transition phase are now finding themselves at a significant disadvantage. The gap between industry leaders and laggards is widening, with technological integration serving as the primary differentiator.
          </p>
        </div>

        <div style={{ width: "1px", backgroundColor: "#D1CEC7", margin: "0 1vw" }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              border: "1px solid #111111",
              padding: "2vw",
              marginBottom: "3vh",
              backgroundColor: "#EBE7DF",
            }}
          >
            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "1.8vw",
                fontWeight: 700,
                margin: "0 0 1.5vh 0",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Key Findings
            </h3>
            <ul style={{ margin: 0, padding: "0 0 0 1.5vw", fontSize: "1vw", lineHeight: 1.8, fontFamily: "Georgia, serif" }}>
              <li style={{ marginBottom: "1vh" }}>A 45% increase in cross-channel integration demand.</li>
              <li style={{ marginBottom: "1vh" }}>Retention costs have escalated by 30% year-over-year.</li>
              <li>Automation adoption is no longer optional; it is imperative for survival.</li>
            </ul>
          </div>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "2vw",
              fontWeight: 400,
              margin: "0 0 2vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Strategic Implications
          </h2>
          <p
            style={{
              fontSize: "1.1vw",
              lineHeight: 1.6,
              margin: 0,
              textAlign: "justify",
            }}
          >
            Looking ahead, organizations must prioritize agile frameworks that allow for rapid iteration. The traditional five-year planning cycle has been rendered obsolete by the current pace of technological advancement and shifting regulatory landscapes across global markets.
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "auto",
          paddingTop: "2vh",
          borderTop: "1px solid #111111",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Georgia, serif",
          fontSize: "0.9vw",
          fontStyle: "italic",
        }}
      >
        <div>CONFIDENTIAL REPORT</div>
        <div>PAGE 2</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/NewspaperBroadsheetPage3.tsx`)

```tsx
export function NewspaperBroadsheetPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F7F4EF",
        color: "#111111",
        fontFamily: "'Inter', sans-serif",
        padding: "4vh 4vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #111111",
          paddingBottom: "1vh",
          marginBottom: "1vh",
        }}
      >
        <div style={{ fontSize: "0.9vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "0.9vw", fontStyle: "italic", fontFamily: "Georgia, serif" }}>
          "All the Ideas That Are Fit to Print"
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Vol. MMXXVI
        </div>
      </div>

      <div style={{ textAlign: "center", borderBottom: "3px solid #111111", paddingBottom: "2vh", marginBottom: "0.5vh" }}>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "5vw",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          By The Numbers
        </h1>
      </div>
      <div style={{ borderBottom: "1px solid #111111", marginBottom: "4vh" }} />

      <div style={{ display: "flex", flex: 1, gap: "4vw", alignItems: "center", justifyContent: "center" }}>
        
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
          <div style={{ borderBottom: "1px solid #111111", paddingBottom: "2vh" }}>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>Q1 Revenue Growth</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "6vw", fontWeight: 700, lineHeight: 1 }}>
              +142%
            </div>
            <div style={{ fontSize: "1.1vw", marginTop: "1vh", fontFamily: "Georgia, serif", fontStyle: "italic", color: "#444" }}>
              Exceeding initial street estimates
            </div>
          </div>
          
          <div style={{ borderBottom: "1px solid #111111", paddingBottom: "2vh" }}>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>New User Acquisition</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "6vw", fontWeight: 700, lineHeight: 1 }}>
              2.4M
            </div>
            <div style={{ fontSize: "1.1vw", marginTop: "1vh", fontFamily: "Georgia, serif", fontStyle: "italic", color: "#444" }}>
              Active accounts across all regions
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div
            style={{
              border: "2px solid #111111",
              padding: "3vw",
              backgroundColor: "#111111",
              color: "#F7F4EF",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "2vw",
                fontWeight: 400,
                margin: "0 0 3vh 0",
                borderBottom: "1px solid #444",
                paddingBottom: "2vh",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Quarterly Projections
            </h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
              <div style={{ display: "flex", alignItems: "flex-end", gap: "1vw" }}>
                <div style={{ width: "25%", fontSize: "1vw", fontFamily: "Georgia, serif" }}>Q1</div>
                <div style={{ flex: 1, height: "1.5vh", backgroundColor: "#444", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "40%", backgroundColor: "#F7F4EF" }} />
                </div>
                <div style={{ width: "20%", fontSize: "1vw", textAlign: "right" }}>$4.2M</div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-end", gap: "1vw" }}>
                <div style={{ width: "25%", fontSize: "1vw", fontFamily: "Georgia, serif" }}>Q2</div>
                <div style={{ flex: 1, height: "1.5vh", backgroundColor: "#444", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "65%", backgroundColor: "#F7F4EF" }} />
                </div>
                <div style={{ width: "20%", fontSize: "1vw", textAlign: "right" }}>$6.8M</div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-end", gap: "1vw" }}>
                <div style={{ width: "25%", fontSize: "1vw", fontFamily: "Georgia, serif" }}>Q3</div>
                <div style={{ flex: 1, height: "1.5vh", backgroundColor: "#444", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "85%", backgroundColor: "#F7F4EF" }} />
                </div>
                <div style={{ width: "20%", fontSize: "1vw", textAlign: "right" }}>$9.1M</div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-end", gap: "1vw" }}>
                <div style={{ width: "25%", fontSize: "1vw", fontFamily: "Georgia, serif" }}>Q4 (Est.)</div>
                <div style={{ flex: 1, height: "1.5vh", backgroundColor: "#444", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, height: "100%", width: "100%", backgroundColor: "#F7F4EF" }} />
                </div>
                <div style={{ width: "20%", fontSize: "1vw", textAlign: "right", fontWeight: "bold" }}>$12.5M</div>
              </div>
            </div>
            
            <p style={{ fontSize: "0.9vw", marginTop: "4vh", opacity: 0.8, fontStyle: "italic", fontFamily: "Georgia, serif" }}>
              *Projections based on current market trends and assumption of successful Series B funding round.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          marginTop: "auto",
          paddingTop: "2vh",
          borderTop: "1px solid #111111",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Georgia, serif",
          fontSize: "0.9vw",
          fontStyle: "italic",
        }}
      >
        <div>FINANCIAL SECTION</div>
        <div>PAGE 3</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/NewspaperBroadsheetPage4.tsx`)

```tsx
export function NewspaperBroadsheetPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F7F4EF",
        color: "#111111",
        fontFamily: "'Inter', sans-serif",
        padding: "4vh 4vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #111111",
          paddingBottom: "1vh",
          marginBottom: "1vh",
        }}
      >
        <div style={{ fontSize: "0.9vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          acme.co
        </div>
        <div style={{ fontSize: "0.9vw", fontStyle: "italic", fontFamily: "Georgia, serif" }}>
          "All the Ideas That Are Fit to Print"
        </div>
        <div style={{ fontSize: "0.9vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }}>
          Vol. MMXXVI
        </div>
      </div>

      <div style={{ textAlign: "center", borderBottom: "3px solid #111111", paddingBottom: "2vh", marginBottom: "0.5vh" }}>
        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "5vw",
            fontWeight: 700,
            margin: 0,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          The Final Word
        </h1>
      </div>
      <div style={{ borderBottom: "1px solid #111111", marginBottom: "6vh" }} />

      <div style={{ display: "flex", flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        
        <div style={{ maxWidth: "60vw", textAlign: "center", marginBottom: "6vh" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "3.5vw",
              fontWeight: 400,
              margin: "0 0 3vh 0",
              lineHeight: 1.1,
            }}
          >
            Ready to Make Headlines Together?
          </h2>
          <p
            style={{
              fontSize: "1.2vw",
              lineHeight: 1.6,
              margin: 0,
              color: "#333",
            }}
          >
            The opportunity is clear, the strategy is sound, and the market is waiting. 
            Join us in defining the next era of industry standards.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2vw",
            border: "1px solid #111111",
            padding: "0.5vw",
            backgroundColor: "#EBE7DF",
          }}
        >
          <div
            style={{
              backgroundColor: "#111111",
              color: "#F7F4EF",
              padding: "2vh 4vw",
              fontSize: "1.2vw",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              cursor: "pointer",
            }}
          >
            Invest Now
          </div>
          <div
            style={{
              padding: "2vh 4vw",
              fontSize: "1.2vw",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#111111",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Contact Partners
          </div>
        </div>

        <div style={{ marginTop: "8vh", display: "flex", gap: "4vw", borderTop: "1px solid #D1CEC7", paddingTop: "4vh" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5vh", color: "#666" }}>Email</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "1.1vw" }}>partners@acme.co</div>
          </div>
          <div style={{ width: "1px", backgroundColor: "#D1CEC7" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5vh", color: "#666" }}>Phone</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "1.1vw" }}>+1 (555) 019-2024</div>
          </div>
          <div style={{ width: "1px", backgroundColor: "#D1CEC7" }} />
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5vh", color: "#666" }}>Office</div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "1.1vw" }}>100 Broadway, NY</div>
          </div>
        </div>

      </div>

      <div
        style={{
          marginTop: "auto",
          paddingTop: "2vh",
          borderTop: "1px solid #111111",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Georgia, serif",
          fontSize: "0.9vw",
          fontStyle: "italic",
        }}
      >
        <div>END OF REPORT</div>
        <div>PAGE 4</div>
      </div>
    </div>
  );
}
```
