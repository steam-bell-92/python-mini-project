# 90s Board Deck

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "BoardDeck90s" template presents a retro aesthetic reminiscent of the 1990s, characterized by its bold color contrasts and structured layout. The background features a linear gradient transitioning from #1a2744 at the top to #0d1a33 at the bottom. Text and accent colors include white (#fff) for primary text, a gold hue (#c5a044) for accents, and a soft beige (#e8d08c) in the decorative elements. The font family used is Georgia, Times New Roman, serif for the main body, while Arial, sans-serif is employed for headings and accent text. Key layout elements include a bordered central content area, decorative gradient bars at the top and bottom, and a structured arrangement of text and shapes that emphasize clarity and organization. No background images are specified in the code. The overall aesthetic feel can be described as "retro elegance."

## Source Code

**Component:** `BoardDeck90s`

### Slide 1 — Title (`slide-styles/BoardDeck90s.tsx`)

```tsx
export function BoardDeck90s() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "linear-gradient(180deg, #1a2744 0%, #0d1a33 100%)", fontFamily: "Georgia, Times New Roman, serif", position: "relative", color: "#fff" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.8vh", background: "linear-gradient(90deg, #c5a044, #e8d08c, #c5a044)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.8vh", background: "linear-gradient(90deg, #c5a044, #e8d08c, #c5a044)" }} />
      <div style={{ position: "absolute", top: "2vh", left: "3vw", right: "3vw", bottom: "2vh", border: "1px solid rgba(197,160,68,0.3)" }} />
      <div style={{ padding: "7vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "3vw", height: "3vw", background: "#c5a044", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8vw", fontWeight: 700, fontFamily: "Arial, sans-serif" }}>
              B
            </div>
            <span style={{ fontSize: "1.3vw", fontFamily: "Arial, sans-serif", fontWeight: 700, letterSpacing: "0.05em" }}>EXAMPLE COMPANY</span>
          </div>
          <div style={{ fontSize: "1vw", color: "#c5a044", fontStyle: "italic" }}>Confidential</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "1.2vw", color: "#c5a044", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "2vh" }}>
            Strategic Business Proposal
          </div>
          <h1 style={{ fontSize: "5vw", fontWeight: 400, margin: 0, lineHeight: 1.1, fontStyle: "italic" }}>
            Example Deck
          </h1>
          <div style={{ width: "8vw", height: "2px", background: "#c5a044", margin: "2.5vh auto" }} />
          <p style={{ fontSize: "1.6vw", color: "rgba(255,255,255,0.7)", maxWidth: "50vw", margin: "0 auto", lineHeight: 1.5 }}>
            A compelling subtitle for your presentation
          </p>
        </div>
        <div style={{ textAlign: "center", fontSize: "1vw", color: "rgba(255,255,255,0.5)", fontFamily: "Arial, sans-serif" }}>
          <div>Prepared for the Board of Directors</div>
          <div style={{ marginTop: "0.5vh" }}>March 2026</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BoardDeck90sPage2.tsx`)

```tsx
export function BoardDeck90sPage2() {
  const tableData = [
    { label: "Revenue", q1: "$12.4M", q2: "$14.1M", q3: "$15.8M", q4: "$18.2M", ytd: "$60.5M" },
    { label: "EBITDA", q1: "$2.1M", q2: "$2.8M", q3: "$3.5M", q4: "$4.6M", ytd: "$13.0M" },
    { label: "Net Income", q1: "$1.5M", q2: "$2.0M", q3: "$2.5M", q4: "$3.3M", ytd: "$9.3M" },
    { label: "Headcount", q1: "142", q2: "158", q3: "185", q4: "210", ytd: "210" },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "linear-gradient(180deg, #1a2744 0%, #0d1a33 100%)", fontFamily: "Georgia, Times New Roman, serif", position: "relative", color: "#fff" }}>
      {/* Top and Bottom Gold Bars */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.8vh", background: "linear-gradient(90deg, #c5a044, #e8d08c, #c5a044)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.8vh", background: "linear-gradient(90deg, #c5a044, #e8d08c, #c5a044)" }} />
      
      {/* Outer Thin Frame */}
      <div style={{ position: "absolute", top: "2vh", left: "3vw", right: "3vw", bottom: "2vh", border: "1px solid rgba(197,160,68,0.3)" }} />
      
      <div style={{ padding: "8vh 8vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "flex-start", position: "relative" }}>
        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4vh" }}>
          <h1 style={{ fontSize: "3.5vw", fontWeight: 400, margin: 0, color: "#fff", fontStyle: "italic" }}>
            Financial Summary — FY2026
          </h1>
          <div style={{ width: "3vw", height: "3vw", background: "#c5a044", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.8vw", fontWeight: 700, fontFamily: "Arial, sans-serif" }}>
            B
          </div>
        </div>
        
        {/* Gold Divider */}
        <div style={{ width: "100%", height: "2px", background: "linear-gradient(90deg, #c5a044, transparent)", marginBottom: "8vh" }} />

        {/* Content Area - Table */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 4vw" }}>
          
          {/* Table Container with Frame */}
          <div style={{ border: "2px solid rgba(197,160,68,0.5)", padding: "3vh 3vw", background: "rgba(13,26,51,0.5)", boxShadow: "0 10px 30px rgba(0,0,0,0.5)" }}>
            
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "right" }}>
              <thead>
                <tr style={{ borderBottom: "2px solid #c5a044" }}>
                  <th style={{ padding: "2vh 1vw", textAlign: "left", fontSize: "1.8vw", fontWeight: "normal", color: "#c5a044", fontStyle: "italic", width: "25%" }}>Metric</th>
                  <th style={{ padding: "2vh 1vw", fontSize: "1.6vw", fontWeight: "bold", color: "#e8d08c" }}>Q1</th>
                  <th style={{ padding: "2vh 1vw", fontSize: "1.6vw", fontWeight: "bold", color: "#e8d08c" }}>Q2</th>
                  <th style={{ padding: "2vh 1vw", fontSize: "1.6vw", fontWeight: "bold", color: "#e8d08c" }}>Q3</th>
                  <th style={{ padding: "2vh 1vw", fontSize: "1.6vw", fontWeight: "bold", color: "#e8d08c" }}>Q4</th>
                  <th style={{ padding: "2vh 1vw", fontSize: "1.6vw", fontWeight: "bold", color: "#fff", backgroundColor: "rgba(197,160,68,0.15)" }}>YTD</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, index) => (
                  <tr key={index} style={{ borderBottom: index < tableData.length - 1 ? "1px solid rgba(197,160,68,0.3)" : "none" }}>
                    <td style={{ padding: "2.5vh 1vw", textAlign: "left", fontSize: "1.6vw", fontWeight: "bold", color: "#fff" }}>{row.label}</td>
                    <td style={{ padding: "2.5vh 1vw", fontSize: "1.6vw", color: "rgba(255,255,255,0.9)" }}>{row.q1}</td>
                    <td style={{ padding: "2.5vh 1vw", fontSize: "1.6vw", color: "rgba(255,255,255,0.9)" }}>{row.q2}</td>
                    <td style={{ padding: "2.5vh 1vw", fontSize: "1.6vw", color: "rgba(255,255,255,0.9)" }}>{row.q3}</td>
                    <td style={{ padding: "2.5vh 1vw", fontSize: "1.6vw", color: "rgba(255,255,255,0.9)" }}>{row.q4}</td>
                    <td style={{ padding: "2.5vh 1vw", fontSize: "1.6vw", fontWeight: "bold", color: "#c5a044", backgroundColor: "rgba(197,160,68,0.05)" }}>{row.ytd}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            
          </div>

        </div>

        {/* Footer */}
        <div style={{ position: "absolute", bottom: "4vh", left: "8vw", right: "8vw", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(197,160,68,0.3)", paddingTop: "1.5vh", fontSize: "1vw", color: "rgba(255,255,255,0.5)", fontFamily: "Arial, sans-serif" }}>
          <div>Example Company, Inc. / Confidential — Board of Directors</div>
          <div>Page 2</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/BoardDeck90sPage3.tsx`)

```tsx
export function BoardDeck90sPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "linear-gradient(180deg, #1a2744 0%, #0d1a33 100%)", fontFamily: "Georgia, Times New Roman, serif", position: "relative", color: "#fff" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.8vh", background: "linear-gradient(90deg, #c5a044, #e8d08c, #c5a044)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.8vh", background: "linear-gradient(90deg, #c5a044, #e8d08c, #c5a044)" }} />
      <div style={{ position: "absolute", top: "2vh", left: "3vw", right: "3vw", bottom: "2vh", border: "1px solid rgba(197,160,68,0.3)" }} />
      
      <div style={{ padding: "7vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "space-between", position: "relative" }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "1vw", color: "#c5a044", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "1vh", fontFamily: "Arial, sans-serif" }}>
              Q3 FY26 Performance
            </div>
            <h2 style={{ fontSize: "3.5vw", fontWeight: 400, margin: 0, fontStyle: "italic", lineHeight: 1.1 }}>
              Key Financial Metrics
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", background: "#c5a044", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5vw", fontWeight: 700, fontFamily: "Arial, sans-serif" }}>
              B
            </div>
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", gap: "4vw", height: "55vh" }}>
          
          {/* Main Chart Area */}
          <div style={{ flex: 2, border: "1px solid rgba(197,160,68,0.2)", background: "rgba(0,0,0,0.2)", padding: "3vw", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.2vw", fontFamily: "Arial, sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#c5a044", marginBottom: "3vh" }}>Revenue Growth (YoY)</div>
            
            <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "2vw", borderBottom: "2px solid rgba(197,160,68,0.5)", paddingBottom: "1vh" }}>
              {/* Bar 1 */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div style={{ fontSize: "1.2vw", fontFamily: "Arial, sans-serif", color: "rgba(255,255,255,0.7)" }}>$42M</div>
                <div style={{ width: "100%", height: "15vh", background: "linear-gradient(180deg, rgba(197,160,68,0.8) 0%, rgba(197,160,68,0.2) 100%)" }} />
                <div style={{ fontSize: "1vw", fontFamily: "Arial, sans-serif", color: "rgba(255,255,255,0.5)" }}>Q1</div>
              </div>
              
              {/* Bar 2 */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div style={{ fontSize: "1.2vw", fontFamily: "Arial, sans-serif", color: "rgba(255,255,255,0.7)" }}>$56M</div>
                <div style={{ width: "100%", height: "22vh", background: "linear-gradient(180deg, rgba(197,160,68,0.8) 0%, rgba(197,160,68,0.2) 100%)" }} />
                <div style={{ fontSize: "1vw", fontFamily: "Arial, sans-serif", color: "rgba(255,255,255,0.5)" }}>Q2</div>
              </div>
              
              {/* Bar 3 */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div style={{ fontSize: "1.2vw", fontFamily: "Arial, sans-serif", color: "#fff", fontWeight: "bold" }}>$84M</div>
                <div style={{ width: "100%", height: "32vh", background: "linear-gradient(180deg, #c5a044 0%, rgba(197,160,68,0.4) 100%)", border: "1px solid #e8d08c" }} />
                <div style={{ fontSize: "1vw", fontFamily: "Arial, sans-serif", color: "#c5a044", fontWeight: "bold" }}>Q3</div>
              </div>
            </div>
          </div>
          
          {/* Stats Sidebar */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh", justifyContent: "space-between" }}>
            <div style={{ borderTop: "2px solid #c5a044", paddingTop: "2vh" }}>
              <div style={{ fontSize: "1vw", fontFamily: "Arial, sans-serif", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>EBITDA Margin</div>
              <div style={{ fontSize: "4vw", fontWeight: 400, color: "#e8d08c", lineHeight: 1 }}>24.5%</div>
              <div style={{ fontSize: "1vw", fontFamily: "Arial, sans-serif", color: "#4CAF50", marginTop: "1vh" }}>+320 bps YoY</div>
            </div>
            
            <div style={{ borderTop: "1px solid rgba(197,160,68,0.3)", paddingTop: "2vh" }}>
              <div style={{ fontSize: "1vw", fontFamily: "Arial, sans-serif", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Customer Acquisition Cost</div>
              <div style={{ fontSize: "3vw", fontWeight: 400, color: "#fff", lineHeight: 1 }}>$1,240</div>
              <div style={{ fontSize: "1vw", fontFamily: "Arial, sans-serif", color: "#4CAF50", marginTop: "1vh" }}>-15% YoY</div>
            </div>
            
            <div style={{ borderTop: "1px solid rgba(197,160,68,0.3)", paddingTop: "2vh" }}>
              <div style={{ fontSize: "1vw", fontFamily: "Arial, sans-serif", color: "rgba(255,255,255,0.6)", textTransform: "uppercase" }}>Lifetime Value</div>
              <div style={{ fontSize: "3vw", fontWeight: 400, color: "#fff", lineHeight: 1 }}>$14,800</div>
              <div style={{ fontSize: "1vw", fontFamily: "Arial, sans-serif", color: "#4CAF50", marginTop: "1vh" }}>+8% YoY</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(197,160,68,0.3)", paddingTop: "2vh" }}>
          <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.5)", fontFamily: "Arial, sans-serif" }}>Confidential and Proprietary</div>
          <div style={{ fontSize: "1vw", color: "#c5a044", fontFamily: "Arial, sans-serif" }}>03</div>
        </div>

      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/BoardDeck90sPage4.tsx`)

```tsx
export function BoardDeck90sPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", background: "linear-gradient(180deg, #1a2744 0%, #0d1a33 100%)", fontFamily: "Georgia, Times New Roman, serif", position: "relative", color: "#fff" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "0.8vh", background: "linear-gradient(90deg, #c5a044, #e8d08c, #c5a044)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "0.8vh", background: "linear-gradient(90deg, #c5a044, #e8d08c, #c5a044)" }} />
      <div style={{ position: "absolute", top: "2vh", left: "3vw", right: "3vw", bottom: "2vh", border: "1px solid rgba(197,160,68,0.3)" }} />
      
      <div style={{ padding: "7vh 7vw", display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", alignItems: "center", position: "relative" }}>
        
        {/* Main Content Area */}
        <div style={{ textAlign: "center", maxWidth: "60vw", display: "flex", flexDirection: "column", alignItems: "center" }}>
          
          <div style={{ width: "5vw", height: "5vw", background: "#c5a044", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3vw", fontWeight: 700, fontFamily: "Arial, sans-serif", marginBottom: "4vh" }}>
            B
          </div>
          
          <div style={{ fontSize: "1.2vw", color: "#c5a044", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "2vh", fontFamily: "Arial, sans-serif" }}>
            Summary & Next Steps
          </div>
          
          <h2 style={{ fontSize: "4.5vw", fontWeight: 400, margin: 0, fontStyle: "italic", lineHeight: 1.2, marginBottom: "3vh" }}>
            Moving Forward Together
          </h2>
          
          <p style={{ fontSize: "1.5vw", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: "6vh" }}>
            The board is requested to approve the strategic allocation of capital toward our Q4 expansion initiatives as outlined in Section III.
          </p>
          
          {/* Action Boxes */}
          <div style={{ display: "flex", gap: "2vw", width: "100%", justifyContent: "center" }}>
            <div style={{ flex: 1, maxWidth: "20vw", padding: "2vw", border: "1px solid rgba(197,160,68,0.4)", background: "rgba(0,0,0,0.2)", textAlign: "left" }}>
              <div style={{ fontSize: "1vw", fontFamily: "Arial, sans-serif", color: "#c5a044", textTransform: "uppercase", marginBottom: "1vh", fontWeight: 700 }}>Resolution 1</div>
              <div style={{ fontSize: "1.2vw", lineHeight: 1.4 }}>Approve the M&A targeting framework.</div>
            </div>
            <div style={{ flex: 1, maxWidth: "20vw", padding: "2vw", border: "1px solid rgba(197,160,68,0.4)", background: "rgba(0,0,0,0.2)", textAlign: "left" }}>
              <div style={{ fontSize: "1vw", fontFamily: "Arial, sans-serif", color: "#c5a044", textTransform: "uppercase", marginBottom: "1vh", fontWeight: 700 }}>Resolution 2</div>
              <div style={{ fontSize: "1.2vw", lineHeight: 1.4 }}>Authorize Series D funding round prep.</div>
            </div>
          </div>
          
        </div>
        
        {/* Footer info absolute to the layout content */}
        <div style={{ position: "absolute", bottom: "7vh", left: "7vw", right: "7vw", display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderTop: "1px solid rgba(197,160,68,0.3)", paddingTop: "2vh" }}>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: "bold", marginBottom: "0.5vh" }}>Johnathan Doe</div>
            <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.6)", fontFamily: "Arial, sans-serif" }}>Chief Executive Officer</div>
            <div style={{ fontSize: "1vw", color: "#c5a044", fontFamily: "Arial, sans-serif", marginTop: "0.5vh" }}>j.doe@example.com</div>
          </div>
          <div style={{ fontSize: "1vw", color: "#c5a044", fontFamily: "Arial, sans-serif" }}>04</div>
        </div>

      </div>
    </div>
  );
}
```
