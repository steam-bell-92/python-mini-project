# Bauhaus Avant Garde

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "BauhausAvantGarde" template embodies a modernist aesthetic with bold geometric shapes and a vibrant color palette. The background color is a soft beige (#EBE6DE), complemented by a diagonal red element (#D9281C) and a large yellow circle (#F2B705). Text is primarily in a dark gray (#111111), with accents in light gray (#F2F2F2) for the subtitle background. The font family used is 'Inter', with varying weights for headers and body text to create a hierarchy. Key layout elements include a large blue rectangle (#033E8C), a triangular shape created with borders, and heavy black rules for visual separation. There are no background images specified. The overall aesthetic feel is "bold geometric."

## Source Code

**Component:** `BauhausAvantGarde`

### Slide 1 — Title (`slide-styles/BauhausAvantGarde.tsx`)

```tsx
export function BauhausAvantGarde() {
  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      backgroundColor: "#EBE6DE", position: "relative",
      fontFamily: "'Inter', sans-serif", color: "#111111",
      boxSizing: "border-box"
    }}>
      {/* Diagonal background element */}
      <div style={{
        position: "absolute", top: "-20vh", right: "-10vw",
        width: "120vw", height: "60vh",
        backgroundColor: "#D9281C",
        transform: "rotate(-15deg)", transformOrigin: "top right",
        zIndex: 1
      }} />

      {/* Large Yellow Circle */}
      <div style={{
        position: "absolute", top: "10vh", left: "10vw",
        width: "40vw", height: "40vw", borderRadius: "50%",
        backgroundColor: "#F2B705", zIndex: 2, mixBlendMode: "multiply"
      }} />

      {/* Heavy rules */}
      <div style={{
        position: "absolute", top: "0", left: "30vw",
        width: "2vw", height: "100vh", backgroundColor: "#111111", zIndex: 3
      }} />
      <div style={{
        position: "absolute", bottom: "25vh", left: "-5vw",
        width: "110vw", height: "1vw", backgroundColor: "#111111",
        transform: "rotate(-15deg)", zIndex: 3
      }} />

      {/* Blue Rectangle */}
      <div style={{
        position: "absolute", bottom: "5vh", right: "15vw",
        width: "20vw", height: "35vh", backgroundColor: "#033E8C", zIndex: 2
      }} />

      {/* Triangle created with borders */}
      <div style={{
        position: "absolute", top: "40vh", right: "5vw",
        width: 0, height: 0,
        borderLeft: "10vw solid transparent",
        borderRight: "10vw solid transparent",
        borderBottom: "15vw solid #111111",
        transform: "rotate(35deg)", zIndex: 4
      }} />

      {/* Content wrapper */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh",
        padding: "5vw", boxSizing: "border-box", zIndex: 10,
        display: "flex", flexDirection: "column", justifyContent: "space-between"
      }}>
        
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{
            fontSize: "1.5vw", fontWeight: 900, textTransform: "lowercase",
            letterSpacing: "-0.05vw", backgroundColor: "#111111", color: "#EBE6DE",
            padding: "0.5vw 1vw", display: "inline-block"
          }}>
            acme.co
          </div>
          <div style={{
            fontSize: "1vw", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.2vw", textAlign: "right"
          }}>
            2026<br/>CONFIDENTIAL
          </div>
        </div>

        {/* Title Area */}
        <div style={{ marginTop: "auto", marginBottom: "10vh" }}>
          <h1 style={{
            fontSize: "11vw", fontWeight: 900, textTransform: "lowercase",
            lineHeight: 0.8, letterSpacing: "-0.5vw", margin: 0,
            color: "#111111", mixBlendMode: "normal"
          }}>
            example<br/>deck
          </h1>
          <div style={{
            marginTop: "3vh", width: "40vw", backgroundColor: "#F2F2F2",
            padding: "2vw", borderLeft: "1vw solid #D9281C"
          }}>
            <p style={{
              fontSize: "1.8vw", fontWeight: 500, lineHeight: 1.3,
              margin: 0, letterSpacing: "-0.02vw"
            }}>
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.1vw"
        }}>
          example company, inc.
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BauhausAvantGardePage2.tsx`)

```tsx
export function BauhausAvantGardePage2() {
  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      backgroundColor: "#EBE6DE", position: "relative",
      fontFamily: "'Inter', sans-serif", color: "#111111",
      boxSizing: "border-box"
    }}>
      {/* Background shapes */}
      <div style={{
        position: "absolute", top: "0", left: "60vw",
        width: "40vw", height: "100vh", backgroundColor: "#F2F2F2", zIndex: 1
      }} />
      <div style={{
        position: "absolute", top: "20vh", left: "70vw",
        width: "15vw", height: "15vw", borderRadius: "50%",
        backgroundColor: "#033E8C", zIndex: 2, mixBlendMode: "multiply"
      }} />
      <div style={{
        position: "absolute", bottom: "10vh", left: "0vw",
        width: "40vw", height: "2vw", backgroundColor: "#D9281C", zIndex: 3
      }} />

      {/* Content wrapper */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh",
        padding: "5vw", boxSizing: "border-box", zIndex: 10,
        display: "flex", flexDirection: "column"
      }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{
            fontSize: "1.5vw", fontWeight: 900, textTransform: "lowercase",
            letterSpacing: "-0.05vw", backgroundColor: "#111111", color: "#EBE6DE",
            padding: "0.5vw 1vw", display: "inline-block"
          }}>
            acme.co
          </div>
          <div style={{
            fontSize: "1vw", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.2vw", textAlign: "right"
          }}>
            2026<br/>CONFIDENTIAL
          </div>
        </div>

        {/* Content */}
        <div style={{ marginTop: "10vh", display: "flex", gap: "5vw" }}>
          <div style={{ width: "50vw" }}>
            <h2 style={{
              fontSize: "7vw", fontWeight: 900, textTransform: "lowercase",
              lineHeight: 0.85, letterSpacing: "-0.3vw", margin: 0,
              color: "#111111"
            }}>
              our core<br/>principles
            </h2>
            <div style={{ marginTop: "4vh", borderLeft: "1vw solid #F2B705", paddingLeft: "2vw" }}>
              <p style={{
                fontSize: "1.8vw", fontWeight: 500, lineHeight: 1.4,
                margin: "0 0 2vh 0", letterSpacing: "-0.02vw"
              }}>
                Function dictates form. We strip away the unnecessary to reveal the essential structure beneath.
              </p>
              <p style={{
                fontSize: "1.4vw", fontWeight: 400, lineHeight: 1.5,
                margin: 0, color: "#333333"
              }}>
                The harmony of our process relies on strict geometric proportions, bold use of primary colors, and absolute truth to materials. Nothing is hidden, everything is deliberate.
              </p>
            </div>
          </div>
          
          <div style={{ width: "30vw", marginTop: "15vh" }}>
            <div style={{ marginBottom: "4vh" }}>
              <h3 style={{ fontSize: "2vw", fontWeight: 800, margin: "0 0 1vh 0", textTransform: "lowercase" }}>01. honesty</h3>
              <p style={{ fontSize: "1.2vw", lineHeight: 1.5, margin: 0 }}>Materials must be true to themselves. No artificial veneers or hidden structures.</p>
            </div>
            <div style={{ marginBottom: "4vh" }}>
              <h3 style={{ fontSize: "2vw", fontWeight: 800, margin: "0 0 1vh 0", textTransform: "lowercase" }}>02. geometry</h3>
              <p style={{ fontSize: "1.2vw", lineHeight: 1.5, margin: 0 }}>The square, the circle, and the triangle form the basis of all functional design.</p>
            </div>
            <div>
              <h3 style={{ fontSize: "2vw", fontWeight: 800, margin: "0 0 1vh 0", textTransform: "lowercase" }}>03. purity</h3>
              <p style={{ fontSize: "1.2vw", lineHeight: 1.5, margin: 0 }}>Red, yellow, and blue. Primary elements combined to create infinite complexity.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "auto", display: "flex", justifyContent: "space-between",
          fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.1vw"
        }}>
          <div>example company, inc.</div>
          <div>02</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/BauhausAvantGardePage3.tsx`)

```tsx
export function BauhausAvantGardePage3() {
  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      backgroundColor: "#EBE6DE", position: "relative",
      fontFamily: "'Inter', sans-serif", color: "#111111",
      boxSizing: "border-box"
    }}>
      {/* Background shapes */}
      <div style={{
        position: "absolute", top: "15vh", left: "0",
        width: "100vw", height: "0.5vw", backgroundColor: "#111111", zIndex: 1
      }} />
      <div style={{
        position: "absolute", bottom: "30vh", right: "0",
        width: "60vw", height: "1vw", backgroundColor: "#111111", zIndex: 1
      }} />
      <div style={{
        position: "absolute", bottom: "-5vh", left: "-5vw",
        width: "30vw", height: "30vw", borderRadius: "50%",
        backgroundColor: "#D9281C", zIndex: 1, mixBlendMode: "multiply"
      }} />

      {/* Content wrapper */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh",
        padding: "5vw", boxSizing: "border-box", zIndex: 10,
        display: "flex", flexDirection: "column"
      }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{
            fontSize: "1.5vw", fontWeight: 900, textTransform: "lowercase",
            letterSpacing: "-0.05vw", backgroundColor: "#111111", color: "#EBE6DE",
            padding: "0.5vw 1vw", display: "inline-block"
          }}>
            acme.co
          </div>
          <div style={{
            fontSize: "1vw", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.2vw", textAlign: "right"
          }}>
            2026<br/>CONFIDENTIAL
          </div>
        </div>

        {/* Content */}
        <div style={{ marginTop: "5vh", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flex: 1, marginBottom: "8vh" }}>
          <div style={{ width: "30vw", paddingBottom: "10vh" }}>
            <h2 style={{
              fontSize: "6vw", fontWeight: 900, textTransform: "lowercase",
              lineHeight: 0.85, letterSpacing: "-0.2vw", margin: 0,
              color: "#111111"
            }}>
              growth<br/>metrics
            </h2>
            <p style={{
              fontSize: "1.5vw", fontWeight: 500, lineHeight: 1.4,
              marginTop: "3vh", letterSpacing: "-0.02vw"
            }}>
              A stark look at our year-over-year expansion. Numbers stripped of narrative.
            </p>
          </div>
          
          {/* Bauhaus Chart */}
          <div style={{ 
            width: "55vw", height: "50vh", display: "flex", 
            alignItems: "flex-end", gap: "2vw", borderBottom: "1vw solid #111111",
            paddingBottom: "1vw", position: "relative"
          }}>
            <div style={{
              position: "absolute", left: "-2vw", top: 0, bottom: 0,
              width: "0.5vw", backgroundColor: "#111111"
            }} />
            
            {/* Bar 1 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 800, marginBottom: "1vh" }}>25%</div>
              <div style={{ width: "100%", height: "15vh", backgroundColor: "#033E8C" }} />
              <div style={{ fontSize: "1vw", fontWeight: 700, marginTop: "1vh" }}>2023</div>
            </div>
            
            {/* Bar 2 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 800, marginBottom: "1vh" }}>42%</div>
              <div style={{ width: "100%", height: "25vh", backgroundColor: "#F2B705" }} />
              <div style={{ fontSize: "1vw", fontWeight: 700, marginTop: "1vh" }}>2024</div>
            </div>

            {/* Bar 3 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ fontSize: "1.5vw", fontWeight: 800, marginBottom: "1vh" }}>86%</div>
              <div style={{ width: "100%", height: "45vh", backgroundColor: "#D9281C" }} />
              <div style={{ fontSize: "1vw", fontWeight: 700, marginTop: "1vh" }}>2025</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "auto", display: "flex", justifyContent: "space-between",
          fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.1vw"
        }}>
          <div>example company, inc.</div>
          <div>03</div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/BauhausAvantGardePage4.tsx`)

```tsx
export function BauhausAvantGardePage4() {
  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      backgroundColor: "#111111", position: "relative",
      fontFamily: "'Inter', sans-serif", color: "#EBE6DE",
      boxSizing: "border-box"
    }}>
      {/* Background shapes */}
      <div style={{
        position: "absolute", top: "0", right: "0",
        width: "50vw", height: "100vh", backgroundColor: "#033E8C", zIndex: 1
      }} />
      <div style={{
        position: "absolute", top: "20vh", left: "30vw",
        width: "40vw", height: "40vw", borderRadius: "50%",
        backgroundColor: "#D9281C", zIndex: 2, mixBlendMode: "normal"
      }} />
      <div style={{
        position: "absolute", bottom: "15vh", right: "10vw",
        width: "25vw", height: "25vw", backgroundColor: "#F2B705", zIndex: 3,
        transform: "rotate(45deg)"
      }} />
      <div style={{
        position: "absolute", top: "0", left: "20vw",
        width: "1vw", height: "100vh", backgroundColor: "#EBE6DE", zIndex: 4
      }} />

      {/* Content wrapper */}
      <div style={{
        position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh",
        padding: "5vw", boxSizing: "border-box", zIndex: 10,
        display: "flex", flexDirection: "column"
      }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{
            fontSize: "1.5vw", fontWeight: 900, textTransform: "lowercase",
            letterSpacing: "-0.05vw", backgroundColor: "#EBE6DE", color: "#111111",
            padding: "0.5vw 1vw", display: "inline-block"
          }}>
            acme.co
          </div>
          <div style={{
            fontSize: "1vw", fontWeight: 700, textTransform: "uppercase",
            letterSpacing: "0.2vw", textAlign: "right", color: "#111111"
          }}>
            2026<br/>CONFIDENTIAL
          </div>
        </div>

        {/* Content */}
        <div style={{ marginTop: "auto", marginBottom: "auto", display: "flex", alignItems: "center" }}>
          <div style={{ width: "60vw" }}>
            <h1 style={{
              fontSize: "10vw", fontWeight: 900, textTransform: "lowercase",
              lineHeight: 0.8, letterSpacing: "-0.4vw", margin: 0,
              color: "#EBE6DE", textShadow: "0.5vw 0.5vw 0 #111111"
            }}>
              let's build<br/>the future.
            </h1>
            <div style={{
              marginTop: "5vh", backgroundColor: "#111111", display: "inline-block",
              padding: "2vw 3vw", borderLeft: "1vw solid #F2B705"
            }}>
              <p style={{
                fontSize: "2vw", fontWeight: 500, lineHeight: 1.3,
                margin: 0, letterSpacing: "-0.02vw", color: "#EBE6DE"
              }}>
                hello@acme.co
              </p>
              <p style={{
                fontSize: "1.5vw", fontWeight: 400, lineHeight: 1.3,
                margin: "1vh 0 0 0", color: "#A0A0A0"
              }}>
                1.800.555.0199
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: "auto", display: "flex", justifyContent: "space-between",
          fontSize: "1.2vw", fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.1vw"
        }}>
          <div>example company, inc.</div>
          <div style={{ color: "#111111" }}>04</div>
        </div>
      </div>
    </div>
  );
}
```
