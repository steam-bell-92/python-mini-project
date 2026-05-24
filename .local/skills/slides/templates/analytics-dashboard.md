# Analytics Dashboard

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "AnalyticsDashboard" template presents a clean and modern aesthetic, characterized by a professional layout suitable for data presentation. The background color is a soft light grayish-blue, specifically #FAFBFC. Text and accent colors include a deep navy blue (#1E3A5F) for primary text, a teal (#0D9488) for highlights, and a muted gray (#64748B) for secondary text. The font family used is 'Inter', sans-serif, which is employed for both headings and body text to ensure readability and a contemporary feel. Key layout elements include a grid structure with a header, main content area divided into two columns, and a footer, all featuring rounded corners and subtle shadows for depth. There are no background images used in this template. The overall aesthetic feel can be described as "clean, modern, professional."

## Source Code

**Component:** `AnalyticsDashboard`

### Slide 1 — Title (`slide-styles/AnalyticsDashboard.tsx`)

```tsx
export function AnalyticsDashboard() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FAFBFC",
        fontFamily: "'Inter', sans-serif",
        padding: "4vh 4vw",
        boxSizing: "border-box",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "3fr 2fr",
        gridTemplateRows: "auto 1fr auto",
        gap: "4vh 4vw",
        color: "#1E3A5F"
      }}
    >
      {/* Header */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "2vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.02em" }}>acme.co</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "#64748B" }}>
          <div>Q3 PERFORMANCE</div>
          <div>2026</div>
        </div>
      </div>

      {/* Main Content Left */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0D9488", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Growth Metrics
        </div>
        <h1 style={{ fontSize: "5vw", fontWeight: 800, margin: "0 0 2vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Example Deck
        </h1>
        <p style={{ fontSize: "1.5vw", fontWeight: 400, color: "#475569", margin: "0 0 4vh 0", lineHeight: 1.5, maxWidth: "40vw" }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
        
        {/* KPI Cards */}
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ background: "#FFFFFF", padding: "2.5vh 2vw", borderRadius: "1vw", border: "1px solid #E2E8F0", flex: 1, boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#64748B", marginBottom: "1vh", textTransform: "uppercase" }}>Monthly Active Users</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "1vw" }}>
              <div style={{ fontSize: "3.5vw", fontWeight: 700, color: "#1E3A5F" }}>2.4M</div>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0D9488", backgroundColor: "rgba(13, 148, 136, 0.1)", padding: "0.5vh 0.8vw", borderRadius: "2vw" }}>+12.3%</div>
            </div>
          </div>
          
          <div style={{ background: "#FFFFFF", padding: "2.5vh 2vw", borderRadius: "1vw", border: "1px solid #E2E8F0", flex: 1, boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#64748B", marginBottom: "1vh", textTransform: "uppercase" }}>Retention Rate</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "1vw" }}>
              <div style={{ fontSize: "3.5vw", fontWeight: 700, color: "#1E3A5F" }}>86%</div>
              <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0D9488", backgroundColor: "rgba(13, 148, 136, 0.1)", padding: "0.5vh 0.8vw", borderRadius: "2vw" }}>+4.1%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Right (Charts) */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div style={{ background: "#FFFFFF", padding: "4vh 3vw", borderRadius: "1vw", border: "1px solid #E2E8F0", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box", boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#1E3A5F" }}>User Engagement Trend</div>
          
          {/* Bar Chart */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "1.5vw", height: "20vh", marginTop: "4vh", borderBottom: "2px solid #E2E8F0", paddingBottom: "1vh" }}>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
              <div style={{ width: "100%", height: "8vh", backgroundColor: "rgba(13, 148, 136, 0.2)", borderRadius: "0.4vw 0.4vw 0 0", transition: "height 0.3s ease" }} />
              <div style={{ fontSize: "0.9vw", color: "#64748B", fontWeight: 500 }}>Q1</div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
              <div style={{ width: "100%", height: "12vh", backgroundColor: "rgba(13, 148, 136, 0.4)", borderRadius: "0.4vw 0.4vw 0 0" }} />
              <div style={{ fontSize: "0.9vw", color: "#64748B", fontWeight: 500 }}>Q2</div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
              <div style={{ width: "100%", height: "15vh", backgroundColor: "rgba(13, 148, 136, 0.7)", borderRadius: "0.4vw 0.4vw 0 0" }} />
              <div style={{ fontSize: "0.9vw", color: "#64748B", fontWeight: 500 }}>Q3</div>
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
              <div style={{ width: "100%", height: "19vh", backgroundColor: "#0D9488", borderRadius: "0.4vw 0.4vw 0 0" }} />
              <div style={{ fontSize: "0.9vw", color: "#64748B", fontWeight: 500 }}>Q4</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh", fontSize: "0.9vw", color: "#94A3B8", fontWeight: 500 }}>
        <div>Example Company, Inc.</div>
        <div style={{ display: "flex", gap: "1vw" }}>
          <span>Confidential & Proprietary</span>
          <span>•</span>
          <span>Internal Use Only</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/AnalyticsDashboardPage2.tsx`)

```tsx
export function AnalyticsDashboardPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FAFBFC",
        fontFamily: "'Inter', sans-serif",
        padding: "4vh 4vw",
        boxSizing: "border-box",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "auto 1fr auto",
        gap: "4vh 4vw",
        color: "#1E3A5F"
      }}
    >
      {/* Header */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "2vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.02em" }}>acme.co</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "#64748B" }}>
          <div>EXECUTIVE SUMMARY</div>
          <div>2026</div>
        </div>
      </div>

      {/* Main Content Left */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0D9488", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Key Objectives
        </div>
        <h1 style={{ fontSize: "4vw", fontWeight: 800, margin: "0 0 2vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Accelerating Growth
        </h1>
        <p style={{ fontSize: "1.3vw", fontWeight: 400, color: "#475569", margin: "0 0 4vh 0", lineHeight: 1.6, maxWidth: "40vw" }}>
          Our primary focus for this quarter is to expand our user base while maintaining best-in-class retention rates. We plan to achieve this through targeted campaigns and product enhancements.
        </p>
        
        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          {[
            { title: "Market Expansion", desc: "Launch in 3 new international markets" },
            { title: "Product Innovation", desc: "Release version 3.0 of our core platform" },
            { title: "Enterprise Sales", desc: "Close 5 major Fortune 500 accounts" }
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", background: "#FFFFFF", padding: "2vh 2vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#0D9488", backgroundColor: "rgba(13, 148, 136, 0.1)", width: "3vw", height: "3vw", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}>
                {i + 1}
              </div>
              <div>
                <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#1E3A5F", marginBottom: "0.5vh" }}>{item.title}</div>
                <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.4 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Right */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ background: "#FFFFFF", padding: "4vh 3vw", borderRadius: "1vw", border: "1px solid #E2E8F0", width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3vh", boxSizing: "border-box", boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)" }}>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1E3A5F", borderBottom: "1px solid #E2E8F0", paddingBottom: "2vh" }}>
            Strategic Milestones
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "3vh", position: "relative" }}>
            <div style={{ position: "absolute", left: "0.5vw", top: "2vh", bottom: "2vh", width: "2px", backgroundColor: "#E2E8F0" }} />
            
            {[
              { month: "January", event: "Q1 Kickoff & Planning" },
              { month: "February", event: "Beta Launch of V3.0" },
              { month: "March", event: "Global Marketing Campaign" },
              { month: "April", event: "Q1 Performance Review" }
            ].map((milestone, i) => (
              <div key={i} style={{ display: "flex", gap: "2vw", alignItems: "center", position: "relative", zIndex: 1 }}>
                <div style={{ width: "1vw", height: "1vw", backgroundColor: "#0D9488", borderRadius: "50%", border: "4px solid #FFFFFF", boxShadow: "0 0 0 1px #E2E8F0" }} />
                <div>
                  <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em" }}>{milestone.month}</div>
                  <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#1E3A5F" }}>{milestone.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh", fontSize: "0.9vw", color: "#94A3B8", fontWeight: 500 }}>
        <div>Example Company, Inc.</div>
        <div style={{ display: "flex", gap: "1vw" }}>
          <span>Confidential & Proprietary</span>
          <span>•</span>
          <span>Page 2</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/AnalyticsDashboardPage3.tsx`)

```tsx
export function AnalyticsDashboardPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FAFBFC",
        fontFamily: "'Inter', sans-serif",
        padding: "4vh 4vw",
        boxSizing: "border-box",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
        gap: "4vh 4vw",
        color: "#1E3A5F"
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "2vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.02em" }}>acme.co</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "#64748B" }}>
          <div>PERFORMANCE DATA</div>
          <div>2026</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
        <div style={{ textAlign: "center", marginBottom: "2vh" }}>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#0D9488", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Revenue Metrics
          </div>
          <h1 style={{ fontSize: "3.5vw", fontWeight: 800, margin: "0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Annual Recurring Revenue
          </h1>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2vw" }}>
          <div style={{ background: "#FFFFFF", padding: "3vh 2vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)", textAlign: "center" }}>
            <div style={{ fontSize: "1vw", fontWeight: 600, color: "#64748B", marginBottom: "1vh", textTransform: "uppercase" }}>Total ARR</div>
            <div style={{ fontSize: "4vw", fontWeight: 700, color: "#1E3A5F" }}>$12.4M</div>
            <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0D9488", marginTop: "1vh" }}>+24% YoY</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "3vh 2vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)", textAlign: "center" }}>
            <div style={{ fontSize: "1vw", fontWeight: 600, color: "#64748B", marginBottom: "1vh", textTransform: "uppercase" }}>New Logos</div>
            <div style={{ fontSize: "4vw", fontWeight: 700, color: "#1E3A5F" }}>142</div>
            <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0D9488", marginTop: "1vh" }}>+18% YoY</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "3vh 2vw", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)", textAlign: "center" }}>
            <div style={{ fontSize: "1vw", fontWeight: 600, color: "#64748B", marginBottom: "1vh", textTransform: "uppercase" }}>Net Retention</div>
            <div style={{ fontSize: "4vw", fontWeight: 700, color: "#1E3A5F" }}>114%</div>
            <div style={{ fontSize: "1vw", fontWeight: 600, color: "#0D9488", marginTop: "1vh" }}>+2% YoY</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "4vh 4vw", borderRadius: "1vw", border: "1px solid #E2E8F0", flex: 1, display: "flex", flexDirection: "column", boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4vh" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#1E3A5F" }}>Monthly Revenue Growth</div>
            <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}><div style={{ width: "1vw", height: "1vw", backgroundColor: "#0D9488", borderRadius: "2px" }} /><span style={{ fontSize: "0.9vw", color: "#64748B" }}>Actual</span></div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}><div style={{ width: "1vw", height: "1vw", backgroundColor: "rgba(13, 148, 136, 0.3)", borderRadius: "2px" }} /><span style={{ fontSize: "0.9vw", color: "#64748B" }}>Target</span></div>
            </div>
          </div>
          
          {/* Chart Graphic */}
          <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "2vw", borderBottom: "2px solid #E2E8F0", paddingBottom: "1vh", height: "25vh" }}>
            {[30, 45, 40, 60, 55, 70, 65, 85, 80, 95, 90, 100].map((val, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh", height: "100%", justifyContent: "flex-end" }}>
                <div style={{ width: "100%", display: "flex", gap: "0.2vw", height: "100%", alignItems: "flex-end" }}>
                  <div style={{ flex: 1, height: `${val}%`, backgroundColor: "#0D9488", borderRadius: "0.2vw 0.2vw 0 0" }} />
                  <div style={{ flex: 1, height: `${val + 10}%`, backgroundColor: "rgba(13, 148, 136, 0.3)", borderRadius: "0.2vw 0.2vw 0 0" }} />
                </div>
                <div style={{ fontSize: "0.8vw", color: "#64748B", fontWeight: 500 }}>{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh", fontSize: "0.9vw", color: "#94A3B8", fontWeight: 500 }}>
        <div>Example Company, Inc.</div>
        <div style={{ display: "flex", gap: "1vw" }}>
          <span>Confidential & Proprietary</span>
          <span>•</span>
          <span>Page 3</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/AnalyticsDashboardPage4.tsx`)

```tsx
export function AnalyticsDashboardPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FAFBFC",
        fontFamily: "'Inter', sans-serif",
        padding: "4vh 4vw",
        boxSizing: "border-box",
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr",
        gridTemplateRows: "auto 1fr auto",
        gap: "4vh 4vw",
        color: "#1E3A5F"
      }}
    >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "2vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.02em" }}>acme.co</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "#64748B" }}>
          <div>NEXT STEPS</div>
          <div>2026</div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ width: "6vw", height: "6vw", backgroundColor: "rgba(13, 148, 136, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "4vh" }}>
          <div style={{ width: "3vw", height: "3vw", backgroundColor: "#0D9488", borderRadius: "50%" }} />
        </div>
        
        <h1 style={{ fontSize: "6vw", fontWeight: 800, margin: "0 0 2vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Let's Build the Future
        </h1>
        <p style={{ fontSize: "1.5vw", fontWeight: 400, color: "#475569", margin: "0 0 6vh 0", lineHeight: 1.5, maxWidth: "50vw" }}>
          Join us in transforming the analytics landscape. We are actively looking for strategic partners to accelerate our next phase of growth.
        </p>
        
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ background: "#0D9488", color: "#FFFFFF", padding: "2vh 4vw", borderRadius: "0.5vw", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.02em", cursor: "pointer", boxShadow: "0 1vw 2vw rgba(13, 148, 136, 0.2)" }}>
            Partner With Us
          </div>
          <div style={{ background: "#FFFFFF", color: "#1E3A5F", padding: "2vh 4vw", borderRadius: "0.5vw", border: "1px solid #E2E8F0", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.02em", cursor: "pointer", boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)" }}>
            View Documentation
          </div>
        </div>

        <div style={{ marginTop: "8vh", display: "flex", gap: "4vw", padding: "4vh 6vw", background: "#FFFFFF", borderRadius: "1vw", border: "1px solid #E2E8F0", boxShadow: "0 0.5vw 1.5vw rgba(30, 58, 95, 0.05)" }}>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#64748B", marginBottom: "0.5vh", textTransform: "uppercase" }}>Contact Us</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#1E3A5F" }}>partners@acme.co</div>
          </div>
          <div style={{ width: "1px", backgroundColor: "#E2E8F0" }} />
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#64748B", marginBottom: "0.5vh", textTransform: "uppercase" }}>Visit Us</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#1E3A5F" }}>123 Data Drive, San Francisco, CA</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh", fontSize: "0.9vw", color: "#94A3B8", fontWeight: 500 }}>
        <div>Example Company, Inc.</div>
        <div style={{ display: "flex", gap: "1vw" }}>
          <span>Confidential & Proprietary</span>
          <span>•</span>
          <span>Page 4</span>
        </div>
      </div>
    </div>
  );
}
```
