# Moroccan Tile

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "MoroccanTile" template embodies a vibrant and intricate Moroccan aesthetic, characterized by geometric patterns and rich colors. The background color is a solid #C4724E, while the text and accent colors include #1E3054 for the primary text and #B8860B for borders and decorative elements. The font families used are 'Inter' for general text and 'Playfair Display' for the main heading, providing a modern yet classic contrast. Key layout elements include a series of rotated squares forming a border pattern, a central ornament, and various decorative lines, all positioned to create a visually engaging frame. There are no background images specified in the code. The overall aesthetic feel can be described as "vibrant geometric elegance."

## Source Code

**Component:** `MoroccanTile`

### Slide 1 — Title (`slide-styles/MoroccanTile.tsx`)

```tsx
export function MoroccanTile() {
  const renderBorderPattern = () => {
    const squares = [];
    for (let i = 0; i < 40; i++) {
      squares.push(
        <div
          key={`top-${i}`}
          style={{
            position: "absolute",
            top: "2vh",
            left: `${2.5 * i}vw`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
      squares.push(
        <div
          key={`bottom-${i}`}
          style={{
            position: "absolute",
            bottom: "2vh",
            left: `${2.5 * i}vw`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
    }
    for (let i = 0; i < 20; i++) {
      squares.push(
        <div
          key={`left-${i}`}
          style={{
            position: "absolute",
            left: "2vw",
            top: `${5 * i}vh`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
      squares.push(
        <div
          key={`right-${i}`}
          style={{
            position: "absolute",
            right: "2vw",
            top: `${5 * i}vh`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
    }
    return squares;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#C4724E",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#1E3054",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      {/* Intricate Border Frame */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          bottom: "4vh",
          left: "4vw",
          right: "4vw",
          border: "2px solid #B8860B",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "5vh",
          bottom: "5vh",
          left: "4.5vw",
          right: "4.5vw",
          border: "1px solid rgba(184, 134, 11, 0.4)",
          pointerEvents: "none"
        }}
      />
      
      {/* Geometric Tile Pattern Border Elements */}
      {renderBorderPattern()}

      {/* Center Ornament */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          width: "12vw",
          height: "12vw",
          border: "1px solid #B8860B",
          transform: "rotate(45deg)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "8vw",
            height: "8vw",
            border: "1px solid #1E3054",
            transform: "rotate(45deg)"
          }}
        />
      </div>
      
      <div
        style={{
          position: "absolute",
          bottom: "15vh",
          width: "8vw",
          height: "8vw",
          border: "1px solid #B8860B",
          transform: "rotate(45deg)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <div
          style={{
            width: "4vw",
            height: "4vw",
            border: "1px solid #1E3054",
            transform: "rotate(45deg)"
          }}
        />
      </div>

      <div style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 15vw" }}>
        <div style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "3vh", color: "#1E3054" }}>
          acme.co
        </div>
        
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6vw",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: "0 0 4vh 0",
            color: "#1E3054",
            textShadow: "1px 1px 0px rgba(184, 134, 11, 0.3)"
          }}
        >
          Example Deck
        </h1>
        
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "4vh" }}>
          <div style={{ width: "4vw", height: "1px", backgroundColor: "#B8860B" }} />
          <div style={{ width: "1vw", height: "1vw", backgroundColor: "#1E3054", transform: "rotate(45deg)" }} />
          <div style={{ width: "4vw", height: "1px", backgroundColor: "#B8860B" }} />
        </div>
        
        <p
          style={{
            fontSize: "1.6vw",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#1E3054",
            opacity: 0.9,
            maxWidth: "45vw",
            margin: 0
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "8vh",
          display: "flex",
          gap: "4vw",
          alignItems: "center",
          zIndex: 10
        }}
      >
        <span style={{ fontSize: "0.9vw", letterSpacing: "0.15em", textTransform: "uppercase" }}>Example Company, Inc.</span>
        <div style={{ width: "0.5vw", height: "0.5vw", backgroundColor: "#B8860B", transform: "rotate(45deg)" }} />
        <span style={{ fontSize: "0.9vw", letterSpacing: "0.15em", textTransform: "uppercase" }}>Confidential</span>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/MoroccanTilePage2.tsx`)

```tsx
export function MoroccanTilePage2() {
  const renderBorderPattern = () => {
    const squares = [];
    for (let i = 0; i < 40; i++) {
      squares.push(
        <div
          key={`top-${i}`}
          style={{
            position: "absolute",
            top: "2vh",
            left: `${2.5 * i}vw`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
      squares.push(
        <div
          key={`bottom-${i}`}
          style={{
            position: "absolute",
            bottom: "2vh",
            left: `${2.5 * i}vw`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
    }
    for (let i = 0; i < 20; i++) {
      squares.push(
        <div
          key={`left-${i}`}
          style={{
            position: "absolute",
            left: "2vw",
            top: `${5 * i}vh`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
      squares.push(
        <div
          key={`right-${i}`}
          style={{
            position: "absolute",
            right: "2vw",
            top: `${5 * i}vh`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
    }
    return squares;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#C4724E",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#1E3054",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Intricate Border Frame */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          bottom: "4vh",
          left: "4vw",
          right: "4vw",
          border: "2px solid #B8860B",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "5vh",
          bottom: "5vh",
          left: "4.5vw",
          right: "4.5vw",
          border: "1px solid rgba(184, 134, 11, 0.4)",
          pointerEvents: "none"
        }}
      />
      
      {/* Geometric Tile Pattern Border Elements */}
      {renderBorderPattern()}

      {/* Main Content Area */}
      <div style={{ zIndex: 10, padding: "12vh 12vw", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "4vw", fontWeight: 700, margin: "0 0 2vh 0", color: "#1E3054" }}>
          The Philosophy
        </h2>
        
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "5vh" }}>
          <div style={{ width: "3vw", height: "1px", backgroundColor: "#B8860B" }} />
          <div style={{ width: "0.8vw", height: "0.8vw", backgroundColor: "#1E3054", transform: "rotate(45deg)" }} />
        </div>

        <div style={{ display: "flex", gap: "8vw", flex: 1 }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
            <p style={{ fontSize: "1.4vw", lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
              Our approach is rooted in the synthesis of timeless geometry and modern practicality. We believe that structure provides the necessary foundation for creativity to flourish.
            </p>
            <p style={{ fontSize: "1.4vw", lineHeight: 1.6, margin: 0, opacity: 0.9 }}>
              By carefully balancing intricate patterns with intentional negative space, we create experiences that are both visually stimulating and highly functional, honoring traditional aesthetics while embracing contemporary needs.
            </p>
          </div>
          
          <div style={{ flex: 1, position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Geometric ornament */}
            <div style={{ position: "absolute", width: "18vw", height: "18vw", border: "2px solid #B8860B", transform: "rotate(45deg)", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgba(30, 48, 84, 0.05)" }}>
              <div style={{ width: "14vw", height: "14vw", border: "1px solid #1E3054", transform: "rotate(0deg)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ width: "10vw", height: "10vw", backgroundColor: "#1E3054", transform: "rotate(45deg)", opacity: 0.9, display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <div style={{ width: "6vw", height: "6vw", border: "1px solid #C4724E", transform: "rotate(45deg)" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "6vh", left: "12vw", right: "12vw", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
        <span style={{ fontSize: "0.9vw", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>02</span>
        <div style={{ width: "4vw", height: "1px", backgroundColor: "#B8860B", opacity: 0.5 }} />
        <span style={{ fontSize: "0.9vw", letterSpacing: "0.15em", textTransform: "uppercase" }}>The Philosophy</span>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/MoroccanTilePage3.tsx`)

```tsx
export function MoroccanTilePage3() {
  const renderBorderPattern = () => {
    const squares = [];
    for (let i = 0; i < 40; i++) {
      squares.push(
        <div
          key={`top-${i}`}
          style={{
            position: "absolute",
            top: "2vh",
            left: `${2.5 * i}vw`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
      squares.push(
        <div
          key={`bottom-${i}`}
          style={{
            position: "absolute",
            bottom: "2vh",
            left: `${2.5 * i}vw`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
    }
    for (let i = 0; i < 20; i++) {
      squares.push(
        <div
          key={`left-${i}`}
          style={{
            position: "absolute",
            left: "2vw",
            top: `${5 * i}vh`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
      squares.push(
        <div
          key={`right-${i}`}
          style={{
            position: "absolute",
            right: "2vw",
            top: `${5 * i}vh`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
    }
    return squares;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#C4724E",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#1E3054",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Intricate Border Frame */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          bottom: "4vh",
          left: "4vw",
          right: "4vw",
          border: "2px solid #B8860B",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "5vh",
          bottom: "5vh",
          left: "4.5vw",
          right: "4.5vw",
          border: "1px solid rgba(184, 134, 11, 0.4)",
          pointerEvents: "none"
        }}
      />
      
      {/* Geometric Tile Pattern Border Elements */}
      {renderBorderPattern()}

      <div style={{ zIndex: 10, padding: "10vh 12vw", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5vw", fontWeight: 700, margin: "0 0 1vh 0", color: "#1E3054", textAlign: "center" }}>
          Performance Metrics
        </h2>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1vw", marginBottom: "6vh" }}>
          <div style={{ width: "3vw", height: "1px", backgroundColor: "#B8860B" }} />
          <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#1E3054", transform: "rotate(45deg)" }} />
          <div style={{ width: "3vw", height: "1px", backgroundColor: "#B8860B" }} />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flex: 1, padding: "0 4vw" }}>
          
          {/* Metric 1 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3vh" }}>
            <div style={{ width: "12vw", height: "12vw", border: "1px solid #1E3054", transform: "rotate(45deg)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
              <div style={{ width: "9vw", height: "9vw", backgroundColor: "rgba(184, 134, 11, 0.1)", transform: "rotate(0deg)", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #B8860B" }}>
                <span style={{ transform: "rotate(-45deg)", fontSize: "3vw", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>84%</span>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "2vh" }}>
              <h3 style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 1vh 0" }}>Efficiency</h3>
              <p style={{ fontSize: "1vw", opacity: 0.8, margin: 0 }}>Operational throughput</p>
            </div>
          </div>

          {/* Metric 2 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3vh" }}>
            <div style={{ width: "14vw", height: "14vw", border: "2px solid #B8860B", transform: "rotate(45deg)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
              <div style={{ width: "10vw", height: "10vw", backgroundColor: "#1E3054", transform: "rotate(0deg)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <span style={{ transform: "rotate(-45deg)", fontSize: "3.5vw", fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#C4724E" }}>3.2x</span>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "2vh" }}>
              <h3 style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 1vh 0" }}>Growth</h3>
              <p style={{ fontSize: "1vw", opacity: 0.8, margin: 0 }}>Year over year scaling</p>
            </div>
          </div>

          {/* Metric 3 */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "3vh" }}>
            <div style={{ width: "12vw", height: "12vw", border: "1px solid #1E3054", transform: "rotate(45deg)", display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
              <div style={{ width: "9vw", height: "9vw", backgroundColor: "rgba(184, 134, 11, 0.1)", transform: "rotate(0deg)", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #B8860B" }}>
                <span style={{ transform: "rotate(-45deg)", fontSize: "3vw", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>12k</span>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "2vh" }}>
              <h3 style={{ fontSize: "1.2vw", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 1vh 0" }}>Adoption</h3>
              <p style={{ fontSize: "1vw", opacity: 0.8, margin: 0 }}>Active global users</p>
            </div>
          </div>

        </div>
      </div>

      <div style={{ position: "absolute", bottom: "6vh", left: "12vw", right: "12vw", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
        <span style={{ fontSize: "0.9vw", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>03</span>
        <div style={{ width: "4vw", height: "1px", backgroundColor: "#B8860B", opacity: 0.5 }} />
        <span style={{ fontSize: "0.9vw", letterSpacing: "0.15em", textTransform: "uppercase" }}>Performance Metrics</span>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/MoroccanTilePage4.tsx`)

```tsx
export function MoroccanTilePage4() {
  const renderBorderPattern = () => {
    const squares = [];
    for (let i = 0; i < 40; i++) {
      squares.push(
        <div
          key={`top-${i}`}
          style={{
            position: "absolute",
            top: "2vh",
            left: `${2.5 * i}vw`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
      squares.push(
        <div
          key={`bottom-${i}`}
          style={{
            position: "absolute",
            bottom: "2vh",
            left: `${2.5 * i}vw`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
    }
    for (let i = 0; i < 20; i++) {
      squares.push(
        <div
          key={`left-${i}`}
          style={{
            position: "absolute",
            left: "2vw",
            top: `${5 * i}vh`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
      squares.push(
        <div
          key={`right-${i}`}
          style={{
            position: "absolute",
            right: "2vw",
            top: `${5 * i}vh`,
            width: "1.5vw",
            height: "1.5vw",
            border: "1px solid #B8860B",
            transform: "rotate(45deg)",
            opacity: 0.6
          }}
        />
      );
    }
    return squares;
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#C4724E",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#1E3054",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
      }}
    >
      {/* Intricate Border Frame */}
      <div
        style={{
          position: "absolute",
          top: "4vh",
          bottom: "4vh",
          left: "4vw",
          right: "4vw",
          border: "2px solid #B8860B",
          pointerEvents: "none"
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "5vh",
          bottom: "5vh",
          left: "4.5vw",
          right: "4.5vw",
          border: "1px solid rgba(184, 134, 11, 0.4)",
          pointerEvents: "none"
        }}
      />
      
      {/* Geometric Tile Pattern Border Elements */}
      {renderBorderPattern()}

      <div style={{ zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 15vw" }}>
        
        <div style={{ position: "relative", width: "16vw", height: "16vw", marginBottom: "6vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ position: "absolute", width: "100%", height: "100%", border: "1px solid #B8860B", transform: "rotate(45deg)" }} />
          <div style={{ position: "absolute", width: "80%", height: "80%", border: "1px solid #1E3054", transform: "rotate(45deg)" }} />
          <div style={{ position: "absolute", width: "60%", height: "60%", backgroundColor: "#1E3054", transform: "rotate(45deg)", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "30%", height: "30%", backgroundColor: "#C4724E", transform: "rotate(45deg)" }} />
          </div>
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "5vw",
            fontWeight: 700,
            lineHeight: 1.1,
            margin: "0 0 3vh 0",
            color: "#1E3054",
            textShadow: "1px 1px 0px rgba(184, 134, 11, 0.3)"
          }}
        >
          Let's Connect
        </h1>
        
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "4vh" }}>
          <div style={{ width: "4vw", height: "1px", backgroundColor: "#B8860B" }} />
          <div style={{ width: "1vw", height: "1vw", backgroundColor: "#1E3054", transform: "rotate(45deg)" }} />
          <div style={{ width: "4vw", height: "1px", backgroundColor: "#B8860B" }} />
        </div>
        
        <div style={{ display: "flex", gap: "4vw", marginTop: "2vh" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "1vw", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, marginBottom: "0.5vh" }}>Email</span>
            <span style={{ fontSize: "1.4vw", fontWeight: 500 }}>hello@acme.co</span>
          </div>
          <div style={{ width: "1px", height: "4vh", backgroundColor: "#B8860B", opacity: 0.5 }} />
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <span style={{ fontSize: "1vw", letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.7, marginBottom: "0.5vh" }}>Studio</span>
            <span style={{ fontSize: "1.4vw", fontWeight: 500 }}>123 Geometry Ln.</span>
          </div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "6vh", left: "12vw", right: "12vw", display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
        <span style={{ fontSize: "0.9vw", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>04</span>
        <div style={{ width: "4vw", height: "1px", backgroundColor: "#B8860B", opacity: 0.5 }} />
        <span style={{ fontSize: "0.9vw", letterSpacing: "0.15em", textTransform: "uppercase" }}>End of Presentation</span>
      </div>
    </div>
  );
}
```
