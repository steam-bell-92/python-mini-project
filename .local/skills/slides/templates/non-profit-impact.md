# Non-Profit Impact

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "NonProfitImpact" template embodies a clean and modern aesthetic suitable for nonprofit presentations. It features a solid background color of #FDF8F0 (a soft cream) with decorative elements in the form of two large, semi-transparent circular shapes in #1B5E5A (a deep teal) and #C4654A (a warm coral). The text primarily uses #1B5E5A for headings and #C4654A for accents, with the font family set to 'Inter' for body text and 'Playfair Display' for headings, creating a contrast between modern and classic styles. Key layout elements include a structured header, a main content area with a prominent impact badge on the right, and a footer line, all contributing to a balanced and organized presentation. The overall aesthetic feel can be described as "elegant and professional."

## Source Code

**Component:** `NonProfitImpact`

### Slide 1 — Title (`slide-styles/NonProfitImpact.tsx`)

```tsx
export function NonProfitImpact() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#FDF8F0", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column", position: "relative", color: "#1B5E5A" }}>
      {/* Background Shapes */}
      <div style={{ position: "absolute", top: "-10vw", right: "-10vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#1B5E5A", opacity: 0.03 }} />
      <div style={{ position: "absolute", bottom: "-5vw", left: "-5vw", width: "30vw", height: "30vw", borderRadius: "50%", backgroundColor: "#C4654A", opacity: 0.03 }} />
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "2px solid #C4654A", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#C4654A" }} />
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>acme.co</div>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.05em", color: "#C4654A" }}>ANNUAL REPORT 2026</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", padding: "0 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: "1vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4654A", marginBottom: "2vh" }}>
            Global Initiative
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "7vw", margin: "0 0 3vh 0", fontWeight: 400, lineHeight: 1.1, color: "#1B5E5A", maxWidth: "60vw" }}>
            Example Deck
          </h1>
          <p style={{ fontSize: "1.6vw", margin: 0, fontWeight: 300, lineHeight: 1.6, maxWidth: "45vw", opacity: 0.85 }}>
            Your compelling subtitle goes here. Describe your big idea in a single sentence. Empowering communities for a better tomorrow.
          </p>
          
          <div style={{ marginTop: "6vh", display: "flex", gap: "4vw", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6, marginBottom: "0.5vh" }}>Presented By</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>Example Company, Inc.</div>
            </div>
            <div style={{ width: "1px", height: "4vh", backgroundColor: "#1B5E5A", opacity: 0.2 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6, marginBottom: "0.5vh" }}>Date</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 500 }}>October 24, 2026</div>
            </div>
          </div>
        </div>
        
        {/* Right side impact badge */}
        <div style={{ flex: "0 0 30vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "22vw", height: "22vw", borderRadius: "50%", border: "1px solid rgba(27, 94, 90, 0.2)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <div style={{ width: "19vw", height: "19vw", borderRadius: "50%", backgroundColor: "#1B5E5A", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#FDF8F0", textAlign: "center", padding: "2vw" }}>
              <div style={{ fontSize: "4.5vw", fontWeight: 600, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>1.2M</div>
              <div style={{ fontSize: "1.1vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "1vh", opacity: 0.9 }}>Lives Reached</div>
              <div style={{ width: "3vw", height: "2px", backgroundColor: "#C4654A", margin: "2vh 0" }} />
              <div style={{ fontSize: "0.9vw", lineHeight: 1.4, opacity: 0.8, fontWeight: 300 }}>
                Across 42 countries in our mission to provide sustainable access.
              </div>
            </div>
            
            {/* Decorative orbit line */}
            <div style={{ position: "absolute", top: "-1vw", left: "10vw", width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#C4654A" }} />
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 6vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.2 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6 }}>Confidential</div>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.2 }} />
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/NonProfitImpactPage2.tsx`)

```tsx
export function NonProfitImpactPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#FDF8F0", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column", position: "relative", color: "#1B5E5A" }}>
      {/* Background Shapes */}
      <div style={{ position: "absolute", top: "-10vw", right: "-10vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#1B5E5A", opacity: 0.03 }} />
      <div style={{ position: "absolute", bottom: "-5vw", left: "-5vw", width: "30vw", height: "30vw", borderRadius: "50%", backgroundColor: "#C4654A", opacity: 0.03 }} />
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "2px solid #C4654A", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#C4654A" }} />
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>acme.co</div>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.05em", color: "#C4654A" }}>OUR APPROACH</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", padding: "0 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ marginBottom: "6vh" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "4.5vw", margin: "0 0 2vh 0", fontWeight: 400, lineHeight: 1.1, color: "#1B5E5A" }}>
            Empowering Local Communities
          </h2>
          <div style={{ width: "6vw", height: "3px", backgroundColor: "#C4654A" }} />
        </div>

        <div style={{ display: "flex", gap: "6vw", flex: 1 }}>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "1.4vw", margin: "0 0 3vh 0", fontWeight: 300, lineHeight: 1.7, opacity: 0.85 }}>
              We believe that sustainable change starts at the grassroots level. By partnering directly with local leaders, we ensure that resources are allocated where they are needed most, building resilience from within.
            </p>
            <p style={{ fontSize: "1.4vw", margin: 0, fontWeight: 300, lineHeight: 1.7, opacity: 0.85 }}>
              Our methodology combines rigorous data analysis with deep community empathy, allowing us to design interventions that are both scalable and culturally attuned.
            </p>
          </div>
          
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", backgroundColor: "#1B5E5A", display: "flex", justifyContent: "center", alignItems: "center", color: "#FDF8F0", fontSize: "1.5vw", fontWeight: 600, flexShrink: 0 }}>
                01
              </div>
              <div>
                <h3 style={{ fontSize: "1.5vw", margin: "0 0 1vh 0", fontWeight: 600, color: "#1B5E5A" }}>Identify Needs</h3>
                <p style={{ fontSize: "1.1vw", margin: 0, fontWeight: 300, lineHeight: 1.5, opacity: 0.8 }}>Conduct thorough assessments in collaboration with community members to pinpoint critical gaps.</p>
              </div>
            </div>
            
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", backgroundColor: "#1B5E5A", display: "flex", justifyContent: "center", alignItems: "center", color: "#FDF8F0", fontSize: "1.5vw", fontWeight: 600, flexShrink: 0 }}>
                02
              </div>
              <div>
                <h3 style={{ fontSize: "1.5vw", margin: "0 0 1vh 0", fontWeight: 600, color: "#1B5E5A" }}>Co-create Solutions</h3>
                <p style={{ fontSize: "1.1vw", margin: 0, fontWeight: 300, lineHeight: 1.5, opacity: 0.8 }}>Design programs that leverage local knowledge and prioritize long-term self-sufficiency.</p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", backgroundColor: "#C4654A", display: "flex", justifyContent: "center", alignItems: "center", color: "#FDF8F0", fontSize: "1.5vw", fontWeight: 600, flexShrink: 0 }}>
                03
              </div>
              <div>
                <h3 style={{ fontSize: "1.5vw", margin: "0 0 1vh 0", fontWeight: 600, color: "#1B5E5A" }}>Measure & Iterate</h3>
                <p style={{ fontSize: "1.1vw", margin: 0, fontWeight: 300, lineHeight: 1.5, opacity: 0.8 }}>Establish rigorous tracking frameworks to measure impact and continuously refine our approach.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 4vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.2 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6 }}>02</div>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.2 }} />
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/NonProfitImpactPage3.tsx`)

```tsx
export function NonProfitImpactPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#FDF8F0", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column", position: "relative", color: "#1B5E5A" }}>
      {/* Background Shapes */}
      <div style={{ position: "absolute", top: "-10vw", right: "-10vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#1B5E5A", opacity: 0.03 }} />
      <div style={{ position: "absolute", bottom: "-5vw", left: "-5vw", width: "30vw", height: "30vw", borderRadius: "50%", backgroundColor: "#C4654A", opacity: 0.03 }} />
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "2px solid #C4654A", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#C4654A" }} />
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>acme.co</div>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.05em", color: "#C4654A" }}>IMPACT METRICS</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ textAlign: "center", marginBottom: "8vh" }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "4.5vw", margin: "0 0 2vh 0", fontWeight: 400, lineHeight: 1.1, color: "#1B5E5A" }}>
            Measurable Outcomes
          </h2>
          <p style={{ fontSize: "1.4vw", margin: 0, fontWeight: 300, opacity: 0.85, maxWidth: "50vw", marginLeft: "auto", marginRight: "auto" }}>
            Our commitment to transparency and accountability ensures that every dollar invested translates into tangible, lasting impact.
          </p>
        </div>

        <div style={{ display: "flex", gap: "6vw", justifyContent: "center", alignItems: "flex-end" }}>
          {/* Stat 1 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "16vw", height: "16vw", borderRadius: "50%", border: "1px solid rgba(27, 94, 90, 0.2)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
              <div style={{ width: "13vw", height: "13vw", borderRadius: "50%", backgroundColor: "#FDF8F0", border: "2px solid #1B5E5A", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#1B5E5A", textAlign: "center" }}>
                <div style={{ fontSize: "3.5vw", fontWeight: 600, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>85%</div>
              </div>
            </div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, marginTop: "3vh" }}>Graduation Rate</div>
            <div style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.7, textAlign: "center", maxWidth: "14vw", marginTop: "1vh" }}>Among program participants within 2 years.</div>
          </div>

          {/* Stat 2 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "20vw", height: "20vw", borderRadius: "50%", border: "1px solid rgba(27, 94, 90, 0.2)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
              <div style={{ width: "17vw", height: "17vw", borderRadius: "50%", backgroundColor: "#1B5E5A", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#FDF8F0", textAlign: "center" }}>
                <div style={{ fontSize: "4.5vw", fontWeight: 600, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>250K</div>
              </div>
              <div style={{ position: "absolute", bottom: "1vw", right: "2vw", width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#C4654A" }} />
            </div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, marginTop: "3vh" }}>Meals Provided</div>
            <div style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.7, textAlign: "center", maxWidth: "16vw", marginTop: "1vh" }}>Nutritious meals distributed in food deserts.</div>
          </div>

          {/* Stat 3 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ width: "16vw", height: "16vw", borderRadius: "50%", border: "1px solid rgba(27, 94, 90, 0.2)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
              <div style={{ width: "13vw", height: "13vw", borderRadius: "50%", backgroundColor: "#C4654A", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#FDF8F0", textAlign: "center" }}>
                <div style={{ fontSize: "3.5vw", fontWeight: 600, fontFamily: "'Playfair Display', Georgia, serif", lineHeight: 1 }}>$14M</div>
              </div>
            </div>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, marginTop: "3vh" }}>Economic Value</div>
            <div style={{ fontSize: "1vw", fontWeight: 300, opacity: 0.7, textAlign: "center", maxWidth: "14vw", marginTop: "1vh" }}>Generated locally through micro-grants.</div>
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 4vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.2 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6 }}>03</div>
        <div style={{ height: "1px", backgroundColor: "#1B5E5A", flex: 1, opacity: 0.2 }} />
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/NonProfitImpactPage4.tsx`)

```tsx
export function NonProfitImpactPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", backgroundColor: "#1B5E5A", fontFamily: "'Inter', sans-serif", display: "flex", flexDirection: "column", position: "relative", color: "#FDF8F0" }}>
      {/* Background Shapes */}
      <div style={{ position: "absolute", top: "-10vw", left: "-10vw", width: "50vw", height: "50vw", borderRadius: "50%", backgroundColor: "#FDF8F0", opacity: 0.05 }} />
      <div style={{ position: "absolute", bottom: "-15vw", right: "-10vw", width: "40vw", height: "40vw", borderRadius: "50%", backgroundColor: "#C4654A", opacity: 0.1 }} />
      
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "2px solid #C4654A", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#C4654A" }} />
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>acme.co</div>
        </div>
        <div style={{ fontSize: "1vw", fontWeight: 500, letterSpacing: "0.05em", color: "#C4654A" }}>GET INVOLVED</div>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 6vw", position: "relative", zIndex: 10, textAlign: "center" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C4654A", marginBottom: "3vh" }}>
          Partner With Us
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "7vw", margin: "0 0 4vh 0", fontWeight: 400, lineHeight: 1.1, color: "#FDF8F0", maxWidth: "70vw" }}>
          Together, we can build a better tomorrow.
        </h2>
        
        <p style={{ fontSize: "1.6vw", margin: "0 0 6vh 0", fontWeight: 300, lineHeight: 1.6, maxWidth: "50vw", opacity: 0.85 }}>
          Your support enables us to expand our reach and deepen our impact. Join our network of advocates, donors, and volunteers.
        </p>

        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ padding: "2vh 4vw", backgroundColor: "#C4654A", color: "#FDF8F0", fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: "4px", cursor: "pointer" }}>
            Donate Now
          </div>
          <div style={{ padding: "2vh 4vw", border: "1px solid #FDF8F0", color: "#FDF8F0", fontSize: "1.2vw", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase", borderRadius: "4px", cursor: "pointer" }}>
            Contact Team
          </div>
        </div>

        <div style={{ marginTop: "10vh", display: "flex", gap: "6vw", borderTop: "1px solid rgba(253, 248, 240, 0.2)", paddingTop: "4vh" }}>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6, marginBottom: "1vh" }}>General Inquiries</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 400 }}>hello@acme.co</div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6, marginBottom: "1vh" }}>Partnerships</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 400 }}>partners@acme.co</div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: "0.9vw", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.6, marginBottom: "1vh" }}>Office</div>
            <div style={{ fontSize: "1.2vw", fontWeight: 400 }}>123 Impact Way, NY</div>
          </div>
        </div>
      </div>

      {/* Footer Line */}
      <div style={{ display: "flex", alignItems: "flex-end", padding: "0 6vw 4vh 6vw", position: "relative", zIndex: 10 }}>
        <div style={{ height: "1px", backgroundColor: "#FDF8F0", flex: 1, opacity: 0.2 }} />
        <div style={{ padding: "0 2vw", fontSize: "0.9vw", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6 }}>04</div>
        <div style={{ height: "1px", backgroundColor: "#FDF8F0", flex: 1, opacity: 0.2 }} />
      </div>
    </div>
  );
}
```
