# Swiss Archive

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "SwissArchive" template embodies a modern, minimalist aesthetic with a structured layout. It features a solid background color of #F4F4F0, complemented by text and accent colors of #111111 for primary text, #E32929 for a decorative element, and #666666 and #333333 for secondary text. The font families used include 'Space Grotesk' for general text, 'DM Mono' for specific sections like reference numbers and footer details, and 'Inter' for the subtitle, creating a clean and contemporary feel. Key layout elements include a grid structure with two main columns, a circular accent, and a horizontal line for separation, all contributing to a balanced and organized presentation. The overall aesthetic feel can be described as "modern minimalist."

## Source Code

**Component:** `SwissArchive`

### Slide 1 — Title (`slide-styles/SwissArchive.tsx`)

```tsx
export function SwissArchive() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F4F0",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#111111",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gridTemplateRows: "1fr auto",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          borderRight: "0.2vw solid #111111",
          borderBottom: "0.2vw solid #111111",
          padding: "4vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "1vw",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
              marginBottom: "1vh",
            }}
          >
            Ref. No.
          </div>
          <div style={{ fontSize: "1.5vw", fontFamily: "'DM Mono', monospace" }}>
            2026-ARCH
          </div>
        </div>

        <div>
          <div
            style={{
              width: "3vw",
              height: "3vw",
              backgroundColor: "#E32929",
              borderRadius: "50%",
              marginBottom: "2vh",
            }}
          />
          <div
            style={{
              fontSize: "0.9vw",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontWeight: 600,
            }}
          >
            acme.co
          </div>
        </div>
      </div>

      <div
        style={{
          borderBottom: "0.2vw solid #111111",
          padding: "4vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "4vw",
            right: "4vw",
            fontSize: "1vw",
            fontFamily: "'DM Mono', monospace",
            color: "#666666",
          }}
        >
          [ CONFIDENTIAL ]
        </div>
        
        <h1
          style={{
            fontSize: "9vw",
            fontWeight: 700,
            lineHeight: 0.9,
            margin: "0 0 4vh 0",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
          }}
        >
          Example
          <br />
          Deck
        </h1>

        <div style={{ width: "15vw", height: "0.4vw", backgroundColor: "#111111", marginBottom: "4vh" }} />

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.8vw",
            fontWeight: 400,
            color: "#333333",
            maxWidth: "45vw",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      <div
        style={{
          gridColumn: "1 / -1",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2vw 4vw",
          fontFamily: "'DM Mono', monospace",
          fontSize: "1vw",
          textTransform: "uppercase",
          backgroundColor: "#111111",
          color: "#F4F4F0",
        }}
      >
        <div>Example Company, Inc.</div>
        <div style={{ display: "flex", gap: "2vw" }}>
          <span>SYS.IDX: 001</span>
          <span>DATE: 2026</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/SwissArchivePage2.tsx`)

```tsx
export function SwissArchivePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F4F0",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#111111",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gridTemplateRows: "1fr auto",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          borderRight: "0.2vw solid #111111",
          borderBottom: "0.2vw solid #111111",
          padding: "4vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "1vw",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
              marginBottom: "1vh",
            }}
          >
            Sect. 01
          </div>
          <div style={{ fontSize: "1.5vw", fontFamily: "'DM Mono', monospace" }}>
            OVERVIEW
          </div>
        </div>

        <div>
          <div
            style={{
              width: "3vw",
              height: "3vw",
              backgroundColor: "#E32929",
              borderRadius: "50%",
              marginBottom: "2vh",
            }}
          />
          <div
            style={{
              fontSize: "0.9vw",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontWeight: 600,
            }}
          >
            acme.co
          </div>
        </div>
      </div>

      <div
        style={{
          borderBottom: "0.2vw solid #111111",
          padding: "4vw",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "4vw",
            right: "4vw",
            fontSize: "1vw",
            fontFamily: "'DM Mono', monospace",
            color: "#666666",
          }}
        >
          [ CONFIDENTIAL ]
        </div>
        
        <h2
          style={{
            fontSize: "4vw",
            fontWeight: 700,
            lineHeight: 1,
            margin: "0 0 2vh 0",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          System Architecture
        </h2>

        <div style={{ width: "8vw", height: "0.4vw", backgroundColor: "#E32929", marginBottom: "4vh" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4vw", marginTop: "2vh" }}>
          <div>
            <h3 style={{ fontSize: "1.5vw", fontWeight: 600, marginBottom: "2vh", textTransform: "uppercase" }}>Core Principles</h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.2vw",
                fontWeight: 400,
                color: "#333333",
                lineHeight: 1.5,
                margin: "0 0 2vh 0",
              }}
            >
              Our methodology centers on rigorous structuring of data, ensuring both high availability and complete fidelity across all functional endpoints. The architecture is defined by clear boundaries and robust fail-safes.
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.2vw",
                fontWeight: 400,
                color: "#333333",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              By leveraging immutable audit logs, we maintain a secure state that can be referenced indefinitely without degradation of original source materials.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ borderTop: "0.1vw solid #111111", paddingTop: "1.5vh" }}>
              <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", marginBottom: "0.5vh", color: "#666" }}>001</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Scalable Infrastructure</div>
            </div>
            <div style={{ borderTop: "0.1vw solid #111111", paddingTop: "1.5vh" }}>
              <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", marginBottom: "0.5vh", color: "#666" }}>002</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Redundant Data Stores</div>
            </div>
            <div style={{ borderTop: "0.1vw solid #111111", paddingTop: "1.5vh", borderBottom: "0.1vw solid #111111", paddingBottom: "1.5vh" }}>
              <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", marginBottom: "0.5vh", color: "#666" }}>003</div>
              <div style={{ fontSize: "1.2vw", fontWeight: 600 }}>Zero-Trust Validation</div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          gridColumn: "1 / -1",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2vw 4vw",
          fontFamily: "'DM Mono', monospace",
          fontSize: "1vw",
          textTransform: "uppercase",
          backgroundColor: "#111111",
          color: "#F4F4F0",
        }}
      >
        <div>Example Company, Inc.</div>
        <div style={{ display: "flex", gap: "2vw" }}>
          <span>SYS.IDX: 002</span>
          <span>PAGE: 02</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/SwissArchivePage3.tsx`)

```tsx
export function SwissArchivePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F4F0",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#111111",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gridTemplateRows: "1fr auto",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          borderRight: "0.2vw solid #111111",
          borderBottom: "0.2vw solid #111111",
          padding: "4vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "1vw",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
              marginBottom: "1vh",
            }}
          >
            Sect. 02
          </div>
          <div style={{ fontSize: "1.5vw", fontFamily: "'DM Mono', monospace" }}>
            METRICS
          </div>
        </div>

        <div>
          <div
            style={{
              width: "3vw",
              height: "3vw",
              backgroundColor: "#E32929",
              borderRadius: "50%",
              marginBottom: "2vh",
            }}
          />
          <div
            style={{
              fontSize: "0.9vw",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontWeight: 600,
            }}
          >
            acme.co
          </div>
        </div>
      </div>

      <div
        style={{
          borderBottom: "0.2vw solid #111111",
          padding: "4vw",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "4vw",
            right: "4vw",
            fontSize: "1vw",
            fontFamily: "'DM Mono', monospace",
            color: "#666666",
          }}
        >
          [ CONFIDENTIAL ]
        </div>
        
        <h2
          style={{
            fontSize: "4vw",
            fontWeight: 700,
            lineHeight: 1,
            margin: "0 0 2vh 0",
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          Performance Data
        </h2>

        <div style={{ width: "8vw", height: "0.4vw", backgroundColor: "#111111", marginBottom: "6vh" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2vw", marginBottom: "4vh" }}>
          <div style={{ border: "0.2vw solid #111111", padding: "2vw", backgroundColor: "#111111", color: "#F4F4F0" }}>
            <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", marginBottom: "1vh", opacity: 0.7 }}>UPTIME</div>
            <div style={{ fontSize: "4vw", fontWeight: 700, lineHeight: 1 }}>99.9%</div>
          </div>
          <div style={{ border: "0.2vw solid #111111", padding: "2vw" }}>
            <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", marginBottom: "1vh", color: "#666" }}>LATENCY</div>
            <div style={{ fontSize: "4vw", fontWeight: 700, lineHeight: 1, color: "#E32929" }}>12ms</div>
          </div>
          <div style={{ border: "0.2vw solid #111111", padding: "2vw" }}>
            <div style={{ fontSize: "1vw", fontFamily: "'DM Mono', monospace", marginBottom: "1vh", color: "#666" }}>CAPACITY</div>
            <div style={{ fontSize: "4vw", fontWeight: 700, lineHeight: 1 }}>10TB</div>
          </div>
        </div>

        <div style={{ display: "flex", gap: "4vw", alignItems: "flex-end", height: "15vh", borderBottom: "0.1vw solid #111111", paddingBottom: "1vh", marginTop: "auto" }}>
          <div style={{ width: "100%", height: "20%", backgroundColor: "#111111" }} />
          <div style={{ width: "100%", height: "35%", backgroundColor: "#111111" }} />
          <div style={{ width: "100%", height: "60%", backgroundColor: "#111111" }} />
          <div style={{ width: "100%", height: "45%", backgroundColor: "#111111" }} />
          <div style={{ width: "100%", height: "80%", backgroundColor: "#111111" }} />
          <div style={{ width: "100%", height: "100%", backgroundColor: "#E32929" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1vh", fontSize: "0.8vw", fontFamily: "'DM Mono', monospace", color: "#666" }}>
          <span>Q1</span>
          <span>Q2</span>
          <span>Q3</span>
          <span>Q4</span>
          <span>Q5</span>
          <span style={{ color: "#E32929", fontWeight: "bold" }}>Q6 (PROJ)</span>
        </div>

      </div>

      <div
        style={{
          gridColumn: "1 / -1",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2vw 4vw",
          fontFamily: "'DM Mono', monospace",
          fontSize: "1vw",
          textTransform: "uppercase",
          backgroundColor: "#111111",
          color: "#F4F4F0",
        }}
      >
        <div>Example Company, Inc.</div>
        <div style={{ display: "flex", gap: "2vw" }}>
          <span>SYS.IDX: 003</span>
          <span>PAGE: 03</span>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/SwissArchivePage4.tsx`)

```tsx
export function SwissArchivePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F4F4F0",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#111111",
        display: "grid",
        gridTemplateColumns: "1fr 3fr",
        gridTemplateRows: "1fr auto",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          borderRight: "0.2vw solid #111111",
          borderBottom: "0.2vw solid #111111",
          padding: "4vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "1vw",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 700,
              marginBottom: "1vh",
            }}
          >
            Sect. 03
          </div>
          <div style={{ fontSize: "1.5vw", fontFamily: "'DM Mono', monospace" }}>
            CONTACT
          </div>
        </div>

        <div>
          <div
            style={{
              width: "3vw",
              height: "3vw",
              backgroundColor: "#E32929",
              borderRadius: "50%",
              marginBottom: "2vh",
            }}
          />
          <div
            style={{
              fontSize: "0.9vw",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              fontWeight: 600,
            }}
          >
            acme.co
          </div>
        </div>
      </div>

      <div
        style={{
          borderBottom: "0.2vw solid #111111",
          padding: "4vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          position: "relative",
          backgroundColor: "#111111",
          color: "#F4F4F0",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "4vw",
            right: "4vw",
            fontSize: "1vw",
            fontFamily: "'DM Mono', monospace",
            color: "#999999",
          }}
        >
          [ END OF FILE ]
        </div>
        
        <h2
          style={{
            fontSize: "8vw",
            fontWeight: 700,
            lineHeight: 0.9,
            margin: "0 0 4vh 0",
            letterSpacing: "-0.03em",
            textTransform: "uppercase",
          }}
        >
          Ready to
          <br />
          <span style={{ color: "#E32929" }}>Deploy.</span>
        </h2>

        <div style={{ width: "15vw", height: "0.4vw", backgroundColor: "#E32929", marginBottom: "6vh" }} />

        <div style={{ display: "flex", gap: "4vw", fontFamily: "'DM Mono', monospace", fontSize: "1.5vw" }}>
          <div>
            <div style={{ color: "#999999", fontSize: "1vw", marginBottom: "1vh" }}>EMAIL</div>
            <div>init@acme.co</div>
          </div>
          <div>
            <div style={{ color: "#999999", fontSize: "1vw", marginBottom: "1vh" }}>PORTAL</div>
            <div>secure.acme.co</div>
          </div>
        </div>
      </div>

      <div
        style={{
          gridColumn: "1 / -1",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "2vw 4vw",
          fontFamily: "'DM Mono', monospace",
          fontSize: "1vw",
          textTransform: "uppercase",
          backgroundColor: "#E32929",
          color: "#111111",
          fontWeight: 700,
        }}
      >
        <div>Example Company, Inc.</div>
        <div style={{ display: "flex", gap: "2vw" }}>
          <span>SYS.IDX: 004</span>
          <span>PAGE: 04</span>
        </div>
      </div>
    </div>
  );
}
```
