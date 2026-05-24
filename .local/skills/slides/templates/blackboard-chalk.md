# Blackboard Chalk

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "BlackboardChalk" template features a dark, educational aesthetic reminiscent of a chalkboard. It uses a solid background color of #2D3436 and text color #E8E2D5, creating a high-contrast look. The font families include 'Space Grotesk' for general text and 'DM Mono' for specific elements, emphasizing a modern yet retro typewriter style. Key layout elements include a flexbox structure with a chalk-like underline and a decorative chalk tray edge at the bottom, enhancing the theme. There are no background images specified in the code. The overall aesthetic feel is "modern chalkboard."

## Source Code

**Component:** `BlackboardChalk`

### Slide 1 — Title (`slide-styles/BlackboardChalk.tsx`)

```tsx
export function BlackboardChalk() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#2D3436",
        color: "#E8E2D5",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.8 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw" }}>acme.co</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw" }}>2026</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "-10vh" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.5vw",
            letterSpacing: "0.2em",
            marginBottom: "2vh",
            opacity: 0.9,
            transform: "rotate(-1deg)",
          }}
        >
          LESSON 01
        </div>
        
        <div style={{ position: "relative" }}>
          <h1
            style={{
              fontSize: "9vw",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              transform: "rotate(0.5deg)",
            }}
          >
            Example Deck
          </h1>
          {/* Chalk-like underline */}
          <div
            style={{
              width: "105%",
              height: "0.4vh",
              backgroundColor: "#E8E2D5",
              marginTop: "2vh",
              transform: "rotate(-1deg)",
              opacity: 0.8,
              borderRadius: "50%",
            }}
          />
        </div>

        <p
          style={{
            fontSize: "2.2vw",
            fontWeight: 400,
            maxWidth: "60vw",
            marginTop: "6vh",
            lineHeight: 1.4,
            opacity: 0.85,
            transform: "rotate(0.2deg)",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div style={{ position: "relative" }}>
        {/* Chalk tray edge */}
        <div
          style={{
            position: "absolute",
            bottom: "-4vh",
            left: "-8vw",
            width: "100vw",
            height: "1vh",
            backgroundColor: "#222728",
            borderTop: "1px solid #3F484B",
          }}
        />
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.6, transform: "rotate(-0.5deg)" }}>
          Example Company, Inc. / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/BlackboardChalkPage2.tsx`)

```tsx
export function BlackboardChalkPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#2D3436",
        color: "#E8E2D5",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.8 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw" }}>acme.co</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw" }}>2026</div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "4vh" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.5vw",
            letterSpacing: "0.2em",
            marginBottom: "1vh",
            opacity: 0.9,
            transform: "rotate(-0.5deg)",
          }}
        >
          CHAPTER 2
        </div>
        
        <div style={{ position: "relative", marginBottom: "6vh" }}>
          <h2
            style={{
              fontSize: "5vw",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              transform: "rotate(0.2deg)",
            }}
          >
            Core Principles
          </h2>
          <div
            style={{
              width: "45vw",
              height: "0.3vh",
              backgroundColor: "#E8E2D5",
              marginTop: "1.5vh",
              transform: "rotate(-0.5deg)",
              opacity: 0.7,
              borderRadius: "50%",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "6vw", marginTop: "2vh" }}>
          <div style={{ flex: 1, transform: "rotate(0.5deg)" }}>
            <h3 style={{ fontSize: "2.5vw", fontWeight: 600, marginBottom: "2vh", fontFamily: "'DM Mono', monospace" }}>
              01. SIMPLICITY
            </h3>
            <p style={{ fontSize: "1.6vw", lineHeight: 1.5, opacity: 0.85 }}>
              Strip away the unnecessary. In an increasingly noisy world, clarity is the ultimate competitive advantage.
            </p>
          </div>
          
          <div style={{ flex: 1, transform: "rotate(-0.3deg)" }}>
            <h3 style={{ fontSize: "2.5vw", fontWeight: 600, marginBottom: "2vh", fontFamily: "'DM Mono', monospace" }}>
              02. UTILITY
            </h3>
            <p style={{ fontSize: "1.6vw", lineHeight: 1.5, opacity: 0.85 }}>
              Form follows function. Design is not just how it looks and feels, design is how it works under pressure.
            </p>
          </div>

          <div style={{ flex: 1, transform: "rotate(0.2deg)" }}>
            <h3 style={{ fontSize: "2.5vw", fontWeight: 600, marginBottom: "2vh", fontFamily: "'DM Mono', monospace" }}>
              03. DURABILITY
            </h3>
            <p style={{ fontSize: "1.6vw", lineHeight: 1.5, opacity: 0.85 }}>
              Build things that last. Temporary solutions yield temporary results. Invest in robust foundational layers.
            </p>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            bottom: "-4vh",
            left: "-8vw",
            width: "100vw",
            height: "1vh",
            backgroundColor: "#222728",
            borderTop: "1px solid #3F484B",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.6, transform: "rotate(-0.5deg)" }}>
            Example Company, Inc. / Confidential
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.6 }}>
            Page 02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/BlackboardChalkPage3.tsx`)

```tsx
export function BlackboardChalkPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#2D3436",
        color: "#E8E2D5",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.8 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw" }}>acme.co</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw" }}>2026</div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "4vh" }}>
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.5vw",
            letterSpacing: "0.2em",
            marginBottom: "1vh",
            opacity: 0.9,
            transform: "rotate(0.5deg)",
          }}
        >
          CHAPTER 3
        </div>
        
        <div style={{ position: "relative", marginBottom: "4vh" }}>
          <h2
            style={{
              fontSize: "5vw",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              transform: "rotate(-0.2deg)",
            }}
          >
            The Equation
          </h2>
          <div
            style={{
              width: "35vw",
              height: "0.4vh",
              backgroundColor: "#E8E2D5",
              marginTop: "1.5vh",
              transform: "rotate(0.8deg)",
              opacity: 0.6,
              borderRadius: "50%",
            }}
          />
        </div>

        <div style={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center", gap: "8vw" }}>
          {/* Big Stat 1 */}
          <div style={{ textAlign: "center", transform: "rotate(-1deg)" }}>
            <div style={{ fontSize: "8vw", fontWeight: 700, fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>
              42<span style={{ fontSize: "5vw", opacity: 0.7 }}>%</span>
            </div>
            <div
              style={{
                width: "120%",
                height: "0.2vh",
                backgroundColor: "#E8E2D5",
                margin: "2vh -10%",
                opacity: 0.5,
                borderRadius: "50%",
              }}
            />
            <div style={{ fontSize: "1.5vw", opacity: 0.8 }}>Efficiency Increase</div>
          </div>

          <div style={{ fontSize: "4vw", fontFamily: "'DM Mono', monospace", opacity: 0.6, transform: "rotate(2deg)" }}>
            +
          </div>

          {/* Big Stat 2 */}
          <div style={{ textAlign: "center", transform: "rotate(0.5deg)" }}>
            <div style={{ fontSize: "8vw", fontWeight: 700, fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>
              15<span style={{ fontSize: "5vw", opacity: 0.7 }}>k</span>
            </div>
            <div
              style={{
                width: "120%",
                height: "0.3vh",
                backgroundColor: "#E8E2D5",
                margin: "2vh -10%",
                opacity: 0.5,
                borderRadius: "50%",
                transform: "rotate(-1deg)"
              }}
            />
            <div style={{ fontSize: "1.5vw", opacity: 0.8 }}>Active Users</div>
          </div>

          <div style={{ fontSize: "4vw", fontFamily: "'DM Mono', monospace", opacity: 0.6, transform: "rotate(-1deg)" }}>
            =
          </div>

          {/* Big Stat 3 */}
          <div style={{ textAlign: "center", transform: "rotate(-0.5deg)" }}>
            <div style={{ fontSize: "8vw", fontWeight: 700, fontFamily: "'DM Mono', monospace", lineHeight: 1 }}>
              $2<span style={{ fontSize: "5vw", opacity: 0.7 }}>m</span>
            </div>
            <div
              style={{
                width: "120%",
                height: "0.3vh",
                backgroundColor: "#E8E2D5",
                margin: "2vh -10%",
                opacity: 0.5,
                borderRadius: "50%",
                transform: "rotate(1deg)"
              }}
            />
            <div style={{ fontSize: "1.5vw", opacity: 0.8 }}>Annual Revenue</div>
          </div>
        </div>
      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            bottom: "-4vh",
            left: "-8vw",
            width: "100vw",
            height: "1vh",
            backgroundColor: "#222728",
            borderTop: "1px solid #3F484B",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.6, transform: "rotate(0.5deg)" }}>
            Example Company, Inc. / Confidential
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.6 }}>
            Page 03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/BlackboardChalkPage4.tsx`)

```tsx
export function BlackboardChalkPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#2D3436",
        color: "#E8E2D5",
        fontFamily: "'Space Grotesk', sans-serif",
        padding: "8vh 8vw",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", opacity: 0.8 }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw" }}>acme.co</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1.2vw" }}>2026</div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        
        <div style={{ position: "relative", marginBottom: "8vh" }}>
          <h2
            style={{
              fontSize: "8vw",
              fontWeight: 700,
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              transform: "rotate(-1deg)",
            }}
          >
            Class Dismissed
          </h2>
          <div
            style={{
              width: "105%",
              height: "0.5vh",
              backgroundColor: "#E8E2D5",
              marginTop: "2vh",
              marginLeft: "-2.5%",
              transform: "rotate(1.5deg)",
              opacity: 0.8,
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              width: "90%",
              height: "0.2vh",
              backgroundColor: "#E8E2D5",
              marginTop: "1vh",
              marginLeft: "5%",
              transform: "rotate(-0.5deg)",
              opacity: 0.5,
              borderRadius: "50%",
            }}
          />
        </div>

        <p
          style={{
            fontSize: "2vw",
            fontWeight: 400,
            maxWidth: "50vw",
            lineHeight: 1.5,
            opacity: 0.85,
            transform: "rotate(0.5deg)",
            marginBottom: "6vh"
          }}
        >
          Any questions before we begin building the future together?
        </p>
        
        <div
          style={{
            border: "2px solid rgba(232, 226, 213, 0.4)",
            padding: "2vh 4vw",
            borderRadius: "0.5vw",
            transform: "rotate(-0.5deg)",
            display: "inline-block",
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.5vw"
          }}
        >
          hello@acme.co
        </div>

      </div>

      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            bottom: "-4vh",
            left: "-8vw",
            width: "100vw",
            height: "1vh",
            backgroundColor: "#222728",
            borderTop: "1px solid #3F484B",
          }}
        />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.6, transform: "rotate(-0.2deg)" }}>
            Example Company, Inc. / Confidential
          </div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", opacity: 0.6 }}>
            Page 04
          </div>
        </div>
      </div>
    </div>
  );
}
```
