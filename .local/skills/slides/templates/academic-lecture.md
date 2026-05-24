# Academic Lecture

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "AcademicLecture" template presents a clean and modern aesthetic suitable for educational contexts. It features a solid background color of #FBF7F0, complemented by decorative borders in a muted green (#2D4A3E) with varying opacities for a subtle layered effect. The text primarily uses the same green color (#2D4A3E) for headings and accents, while the main title is rendered in a darker shade (#1A2C25). The font families include 'Inter' for general text and 'Playfair Display' for headings, providing a contrast between modern sans-serif and classic serif styles. Key layout elements include circular decorative shapes, a centered title, and a structured arrangement of text blocks, creating a balanced and professional look. Overall, the aesthetic feel can be described as "academic elegance."

## Source Code

**Component:** `AcademicLecture`

### Slide 1 — Title (`slide-styles/AcademicLecture.tsx`)

```tsx
export function AcademicLecture() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FBF7F0",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "0.5vw solid #2D4A3E", margin: "2vh 2vw", pointerEvents: "none", opacity: 0.1 }}></div>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "0.1vw solid #2D4A3E", margin: "2.8vh 2.8vw", pointerEvents: "none", opacity: 0.2 }}></div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", border: "0.2vw solid #2D4A3E", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "0.1vw solid #2D4A3E" }}></div>
          </div>
          <div>
            <div style={{ color: "#2D4A3E", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>acme.co</div>
            <div style={{ color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.8, marginTop: "0.5vh" }}>UNIVERSITY</div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#2D4A3E", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05em" }}>CS 301</div>
          <div style={{ color: "#2D4A3E", fontSize: "1vw", fontWeight: 400, opacity: 0.8, marginTop: "0.5vh" }}>Fall 2026</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", zIndex: 1 }}>
        <div style={{ color: "#2D4A3E", fontSize: "1vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "3vh", opacity: 0.9 }}>
          DEPT. OF COMPUTER SCIENCE
        </div>
        
        <div style={{ width: "15vw", borderTop: "0.1vw solid #2D4A3E", marginBottom: "4vh", opacity: 0.3 }} />
        
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#1A2C25",
            fontSize: "6.5vw",
            margin: "0 0 3vh 0",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "80vw"
          }}
        >
          Example Deck
        </h1>
        
        <div style={{ width: "15vw", borderBottom: "0.1vw solid #2D4A3E", marginTop: "1vh", marginBottom: "4vh", opacity: 0.3 }} />
        
        <p
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#2D4A3E",
            fontSize: "2.2vw",
            margin: 0,
            fontWeight: 400,
            fontStyle: "italic",
            lineHeight: 1.4,
            maxWidth: "60vw",
            opacity: 0.9
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", zIndex: 1 }}>
        <div style={{ color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.7 }}>
          Example Company, Inc.
        </div>
        <div style={{ color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.7 }}>
          Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/AcademicLecturePage2.tsx`)

```tsx
export function AcademicLecturePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FBF7F0",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "0.5vw solid #2D4A3E", margin: "2vh 2vw", pointerEvents: "none", opacity: 0.1 }}></div>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "0.1vw solid #2D4A3E", margin: "2.8vh 2.8vw", pointerEvents: "none", opacity: 0.2 }}></div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", border: "0.2vw solid #2D4A3E", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "0.1vw solid #2D4A3E" }}></div>
          </div>
          <div>
            <div style={{ color: "#2D4A3E", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>acme.co</div>
            <div style={{ color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.8, marginTop: "0.5vh" }}>UNIVERSITY</div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#2D4A3E", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05em" }}>CS 301</div>
          <div style={{ color: "#2D4A3E", fontSize: "1vw", fontWeight: 400, opacity: 0.8, marginTop: "0.5vh" }}>Fall 2026</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "row", marginTop: "8vh", marginBottom: "6vh", gap: "6vw", zIndex: 1 }}>
        <div style={{ flex: "0 0 40%", display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#2D4A3E", fontSize: "1vw", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "2vh", opacity: 0.9 }}>
            CHAPTER 01
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#1A2C25",
              fontSize: "4.5vw",
              margin: "0 0 3vh 0",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em"
            }}
          >
            Theoretical Frameworks
          </h2>
          <div style={{ width: "8vw", borderTop: "0.1vw solid #2D4A3E", marginBottom: "4vh", opacity: 0.3 }} />
          <p
            style={{
              color: "#2D4A3E",
              fontSize: "1.3vw",
              margin: 0,
              fontWeight: 400,
              lineHeight: 1.6,
              opacity: 0.9
            }}
          >
            The foundation of our approach relies on established computational models, integrating classical algorithms with modern heuristic paradigms.
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "3vh", borderLeft: "0.1vw solid rgba(45, 74, 62, 0.2)", paddingLeft: "4vw" }}>
          {[
            { title: "Cognitive Load", desc: "Evaluating how memory structures impact the processing of complex logical operations." },
            { title: "Algorithmic Efficiency", desc: "Minimizing time complexity without sacrificing the accuracy of data retrieval methods." },
            { title: "Heuristic Optimization", desc: "Employing approximate solutions where absolute precision is computationally expensive." }
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ color: "#2D4A3E", fontSize: "1.2vw", fontWeight: 600, fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", marginTop: "0.2vh" }}>
                0{i + 1}.
              </div>
              <div>
                <div style={{ color: "#1A2C25", fontSize: "1.5vw", fontWeight: 600, marginBottom: "0.5vh" }}>{item.title}</div>
                <div style={{ color: "#2D4A3E", fontSize: "1.1vw", lineHeight: 1.5, opacity: 0.8 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", zIndex: 1 }}>
        <div style={{ color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.7 }}>
          Example Company, Inc.
        </div>
        <div style={{ display: "flex", gap: "2vw", color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.7 }}>
          <span>Confidential</span>
          <span>02</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/AcademicLecturePage3.tsx`)

```tsx
export function AcademicLecturePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FBF7F0",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "0.5vw solid #2D4A3E", margin: "2vh 2vw", pointerEvents: "none", opacity: 0.1 }}></div>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "0.1vw solid #2D4A3E", margin: "2.8vh 2.8vw", pointerEvents: "none", opacity: 0.2 }}></div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", border: "0.2vw solid #2D4A3E", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "0.1vw solid #2D4A3E" }}></div>
          </div>
          <div>
            <div style={{ color: "#2D4A3E", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>acme.co</div>
            <div style={{ color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.8, marginTop: "0.5vh" }}>UNIVERSITY</div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#2D4A3E", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05em" }}>CS 301</div>
          <div style={{ color: "#2D4A3E", fontSize: "1vw", fontWeight: 400, opacity: 0.8, marginTop: "0.5vh" }}>Fall 2026</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "4vh", marginBottom: "4vh", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4vh" }}>
          <div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#1A2C25",
                fontSize: "3.5vw",
                margin: "0 0 1vh 0",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em"
              }}
            >
              Performance Metrics
            </h2>
            <p style={{ color: "#2D4A3E", fontSize: "1.2vw", margin: 0, opacity: 0.8 }}>
              Comparative analysis of execution times across datasets
            </p>
          </div>
          <div style={{ textAlign: "right", color: "#2D4A3E", fontSize: "0.9vw", opacity: 0.7, fontStyle: "italic", fontFamily: "'Playfair Display', Georgia, serif" }}>
            Fig. 1: Execution Time (ms)
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", gap: "4vw", alignItems: "flex-end", padding: "4vh 0", borderBottom: "0.2vw solid rgba(45, 74, 62, 0.8)", position: "relative" }}>
          {/* Y-axis lines */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, borderBottom: "0.1vw dashed rgba(45, 74, 62, 0.2)", height: "25%", zIndex: 0 }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, borderBottom: "0.1vw dashed rgba(45, 74, 62, 0.2)", height: "50%", zIndex: 0 }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, borderBottom: "0.1vw dashed rgba(45, 74, 62, 0.2)", height: "75%", zIndex: 0 }} />
          
          {/* Bars */}
          {[
            { label: "Control", value: 35, color: "rgba(45, 74, 62, 0.2)" },
            { label: "Test A", value: 65, color: "rgba(45, 74, 62, 0.5)" },
            { label: "Test B", value: 45, color: "rgba(45, 74, 62, 0.3)" },
            { label: "Optimized", value: 90, color: "rgba(45, 74, 62, 0.9)" }
          ].map((bar, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5vh", zIndex: 1 }}>
              <div style={{ 
                width: "60%", 
                height: `${bar.value}%`, 
                backgroundColor: bar.color,
                border: "0.1vw solid #2D4A3E",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start"
              }}>
                <div style={{ marginTop: "-2.5vh", color: "#1A2C25", fontSize: "1.2vw", fontWeight: 600 }}>
                  {bar.value}
                </div>
              </div>
              <div style={{ color: "#1A2C25", fontSize: "1.1vw", fontWeight: 500 }}>
                {bar.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", zIndex: 1 }}>
        <div style={{ color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.7 }}>
          Example Company, Inc.
        </div>
        <div style={{ display: "flex", gap: "2vw", color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.7 }}>
          <span>Confidential</span>
          <span>03</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/AcademicLecturePage4.tsx`)

```tsx
export function AcademicLecturePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FBF7F0",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "6vh 6vw",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "0.5vw solid #2D4A3E", margin: "2vh 2vw", pointerEvents: "none", opacity: 0.1 }}></div>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, border: "0.1vw solid #2D4A3E", margin: "2.8vh 2.8vw", pointerEvents: "none", opacity: 0.2 }}></div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <div style={{ width: "4vw", height: "4vw", borderRadius: "50%", border: "0.2vw solid #2D4A3E", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "2.5vw", height: "2.5vw", borderRadius: "50%", border: "0.1vw solid #2D4A3E" }}></div>
          </div>
          <div>
            <div style={{ color: "#2D4A3E", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>acme.co</div>
            <div style={{ color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.8, marginTop: "0.5vh" }}>UNIVERSITY</div>
          </div>
        </div>
        <div style={{ textAlign: "right" }}>
          <div style={{ color: "#2D4A3E", fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.05em" }}>CS 301</div>
          <div style={{ color: "#2D4A3E", fontSize: "1vw", fontWeight: 400, opacity: 0.8, marginTop: "0.5vh" }}>Fall 2026</div>
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", zIndex: 1 }}>
        
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#1A2C25",
            fontSize: "6.5vw",
            margin: "0 0 4vh 0",
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            maxWidth: "70vw"
          }}
        >
          Discussion & Synthesis
        </h1>
        
        <div style={{ width: "15vw", borderBottom: "0.1vw solid #2D4A3E", marginBottom: "5vh", opacity: 0.3 }} />
        
        <p
          style={{
            color: "#2D4A3E",
            fontSize: "1.5vw",
            margin: "0 0 6vh 0",
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: "50vw",
            opacity: 0.9
          }}
        >
          We invite inquiries, critical analyses, and further collaborative exploration of these computational paradigms.
        </p>

        <div style={{ display: "flex", gap: "3vw" }}>
          <div style={{ 
            padding: "1.5vh 3vw", 
            backgroundColor: "#2D4A3E", 
            color: "#FBF7F0", 
            fontSize: "1.1vw", 
            fontWeight: 600, 
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            border: "0.1vw solid #2D4A3E",
            cursor: "pointer"
          }}>
            Review Materials
          </div>
          <div style={{ 
            padding: "1.5vh 3vw", 
            backgroundColor: "transparent", 
            color: "#2D4A3E", 
            fontSize: "1.1vw", 
            fontWeight: 600, 
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            border: "0.1vw solid #2D4A3E",
            cursor: "pointer"
          }}>
            Submit Queries
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", width: "100%", zIndex: 1 }}>
        <div style={{ color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.7 }}>
          Example Company, Inc.
        </div>
        <div style={{ display: "flex", gap: "2vw", color: "#2D4A3E", fontSize: "0.9vw", fontWeight: 400, letterSpacing: "0.05em", opacity: 0.7 }}>
          <span>Confidential</span>
          <span>04</span>
        </div>
      </div>
    </div>
  );
}
```
