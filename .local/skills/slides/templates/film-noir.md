# Film Noir

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "FilmNoir" template embodies a dark, cinematic aesthetic reminiscent of classic film noir. It features a solid background color of #0D0D0D, complemented by a dramatic linear gradient of #1A1A1A and #2A2A2A for a light beam effect. Text and accent colors include #E0E0E0 for primary text, #D4C36A for highlights, and #808080 for secondary text. The font families used are 'Inter' for general text and 'DM Mono' and 'Georgia' for specific elements, creating a mix of modern and vintage styles. Key layout elements include a dramatic diagonal light beam, Venetian blind slats, and a vignette effect that darkens the corners, enhancing the overall moody atmosphere. The template does not utilize any background images. The overall aesthetic feel is "dark, cinematic."

## Source Code

**Component:** `FilmNoir`

### Slide 1 — Title (`slide-styles/FilmNoir.tsx`)

```tsx
export function FilmNoir() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0D0D0D",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#E0E0E0",
      }}
    >
      {/* Dramatic diagonal light beam */}
      <div
        style={{
          position: "absolute",
          top: "-50vh",
          left: "-50vw",
          width: "200vw",
          height: "200vh",
          background: "linear-gradient(135deg, transparent 35%, #1A1A1A 45%, #2A2A2A 50%, #1A1A1A 55%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Venetian blind slats */}
      <div
        style={{
          position: "absolute",
          top: "-50vh",
          left: "-50vw",
          width: "200vw",
          height: "200vh",
          transform: "rotate(45deg)",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2vw",
        }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "0.4vw",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              boxShadow: "0 0 1vw rgba(0,0,0,0.9)",
            }}
          />
        ))}
      </div>

      {/* Case file stamp top right */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "6vw",
          fontFamily: "'DM Mono', monospace",
          fontSize: "1.1vw",
          color: "#D4C36A",
          border: "0.2vw solid #D4C36A",
          padding: "1.5vh 1.5vw",
          transform: "rotate(4deg)",
          opacity: 0.85,
          letterSpacing: "0.15em",
          fontWeight: 600,
        }}
      >
        CASE FILE NO. 2026
      </div>

      {/* Scattered metadata */}
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "8vw",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#808080",
          letterSpacing: "0.15em",
          lineHeight: 1.8,
        }}
      >
        REF: ACME-01-A<br/>
        DATE: UNKNOWN<br/>
        STATUS: CONFIDENTIAL
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          right: "8vw",
          textAlign: "right",
        }}
      >
        <div style={{ fontSize: "1.4vw", fontWeight: 400, color: "#D4C36A", marginBottom: "1vh", fontStyle: "italic", fontFamily: "Georgia, serif" }}>
          acme.co
        </div>
        <div style={{ fontSize: "0.8vw", color: "#666666", letterSpacing: "0.2em", textTransform: "uppercase" }}>
          Example Company, Inc.
        </div>
      </div>

      {/* Lower-left anchored title section */}
      <div
        style={{
          position: "absolute",
          bottom: "12vh",
          left: "8vw",
          maxWidth: "65vw",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontSize: "1vw",
            color: "#A0A0A0",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "3vh",
            fontWeight: 500,
          }}
        >
          A PRESENTATION BY
        </div>

        <h1
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "9vw",
            color: "#E0E0E0",
            margin: "0 0 3vh -0.5vw",
            lineHeight: 0.9,
            fontWeight: 400,
            textShadow: "0.5vw 0.5vw 1.5vw rgba(0,0,0,0.9)",
          }}
        >
          Example Deck
        </h1>

        <p
          style={{
            fontSize: "1.6vw",
            color: "#B0B0B0",
            maxWidth: "45vw",
            lineHeight: 1.6,
            margin: 0,
            fontWeight: 300,
            borderLeft: "0.3vw solid #D4C36A",
            paddingLeft: "2vw",
            textShadow: "0.2vw 0.2vw 0.5vw rgba(0,0,0,0.8)",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>
      </div>

      {/* Overall vignette to make corners darker */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.9) 120%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
```

### Slide 2 (`slide-pages/FilmNoirPage2.tsx`)

```tsx
export function FilmNoirPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0D0D0D",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#E0E0E0",
      }}
    >
      {/* Dramatic diagonal light beam */}
      <div
        style={{
          position: "absolute",
          top: "-50vh",
          left: "-50vw",
          width: "200vw",
          height: "200vh",
          background: "linear-gradient(135deg, transparent 35%, #1A1A1A 45%, #2A2A2A 50%, #1A1A1A 55%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Venetian blind slats */}
      <div
        style={{
          position: "absolute",
          top: "-50vh",
          left: "-50vw",
          width: "200vw",
          height: "200vh",
          transform: "rotate(45deg)",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2vw",
        }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "0.4vw",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              boxShadow: "0 0 1vw rgba(0,0,0,0.9)",
            }}
          />
        ))}
      </div>

      {/* Page Header */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1vw",
            color: "#D4C36A",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "2vh",
          }}
        >
          Section 01 / The Motive
        </div>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "4.5vw",
            color: "#E0E0E0",
            margin: 0,
            lineHeight: 1,
            fontWeight: 400,
            textShadow: "0.2vw 0.2vw 0.5vw rgba(0,0,0,0.9)",
          }}
        >
          Uncovering the Truth
        </h2>
      </div>

      {/* Content Area */}
      <div
        style={{
          position: "absolute",
          top: "30vh",
          left: "8vw",
          width: "84vw",
          display: "flex",
          justifyContent: "space-between",
          zIndex: 10,
        }}
      >
        {/* Left Column */}
        <div style={{ width: "40vw" }}>
          <p
            style={{
              fontSize: "1.5vw",
              color: "#B0B0B0",
              lineHeight: 1.6,
              margin: "0 0 4vh 0",
              fontWeight: 300,
              borderLeft: "0.2vw solid #D4C36A",
              paddingLeft: "1.5vw",
            }}
          >
            The evidence points to a single undeniable conclusion. We must connect the dots before time runs out.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
            {[
              { id: "EXH-A", text: "Initial Findings show a pattern of irregular activities in the primary sector." },
              { id: "EXH-B", text: "Witness Testimony corroborates the timeline established during the preliminary review." },
              { id: "EXH-C", text: "Forensic Analysis confirms the presence of undocumented variables." }
            ].map((item, index) => (
              <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
                <div
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "1vw",
                    color: "#D4C36A",
                    border: "0.1vw solid #D4C36A",
                    padding: "0.5vh 0.5vw",
                    whiteSpace: "nowrap",
                    opacity: 0.8,
                  }}
                >
                  {item.id}
                </div>
                <div style={{ fontSize: "1.2vw", color: "#A0A0A0", lineHeight: 1.5, paddingTop: "0.2vh" }}>
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Classified Document Mockup */}
        <div
          style={{
            width: "35vw",
            height: "45vh",
            backgroundColor: "#E6E2D3",
            padding: "3vw",
            position: "relative",
            transform: "rotate(-2deg)",
            boxShadow: "0.5vw 0.5vw 2vw rgba(0,0,0,0.8)",
          }}
        >
          {/* Top Secret Stamp */}
          <div
            style={{
              position: "absolute",
              top: "2vh",
              right: "2vw",
              fontFamily: "'DM Mono', monospace",
              fontSize: "1.5vw",
              color: "#8B0000",
              border: "0.3vw solid #8B0000",
              padding: "1vh 1vw",
              transform: "rotate(15deg)",
              opacity: 0.7,
              letterSpacing: "0.1em",
              fontWeight: "bold",
            }}
          >
            CONFIDENTIAL
          </div>
          
          <div style={{ borderBottom: "0.2vw solid #333", paddingBottom: "1vh", marginBottom: "2vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#333", display: "flex", justifyContent: "space-between" }}>
              <span>DEPARTMENT OF RECORDS</span>
              <span>DATE: 11/24</span>
            </div>
          </div>
          
          <div style={{ fontFamily: "Georgia, serif", fontSize: "1.2vw", color: "#222", lineHeight: 1.8 }}>
            <p style={{ margin: "0 0 1.5vh 0" }}>Subject: Project Overview</p>
            <p style={{ margin: "0 0 1.5vh 0" }}>
              The following details represent a comprehensive summary of our recent operations. All personnel are advised to treat this information with the utmost discretion.
            </p>
            <div style={{ width: "100%", height: "1vw", backgroundColor: "#000", margin: "2vh 0", opacity: 0.8 }} />
            <div style={{ width: "80%", height: "1vw", backgroundColor: "#000", margin: "1vh 0", opacity: 0.8 }} />
            <div style={{ width: "90%", height: "1vw", backgroundColor: "#000", margin: "1vh 0", opacity: 0.8 }} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#666",
          letterSpacing: "0.1em",
          zIndex: 10,
        }}
      >
        <div>CONFIDENTIAL REPORT</div>
        <div style={{ color: "#D4C36A" }}>02</div>
      </div>

      {/* Overall vignette to make corners darker */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.9) 120%)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />
    </div>
  );
}
```

### Slide 3 (`slide-pages/FilmNoirPage3.tsx`)

```tsx
export function FilmNoirPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0D0D0D",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#E0E0E0",
      }}
    >
      {/* Dramatic diagonal light beam */}
      <div
        style={{
          position: "absolute",
          top: "-50vh",
          left: "-50vw",
          width: "200vw",
          height: "200vh",
          background: "linear-gradient(135deg, transparent 35%, #1A1A1A 45%, #2A2A2A 50%, #1A1A1A 55%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      {/* Venetian blind slats */}
      <div
        style={{
          position: "absolute",
          top: "-50vh",
          left: "-50vw",
          width: "200vw",
          height: "200vh",
          transform: "rotate(45deg)",
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2vw",
        }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "0.4vw",
              backgroundColor: "rgba(0, 0, 0, 0.75)",
              boxShadow: "0 0 1vw rgba(0,0,0,0.9)",
            }}
          />
        ))}
      </div>

      {/* Page Header */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          zIndex: 10,
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1vw",
            color: "#D4C36A",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "2vh",
          }}
        >
          Section 02 / The Evidence
        </div>
        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "4.5vw",
            color: "#E0E0E0",
            margin: 0,
            lineHeight: 1,
            fontWeight: 400,
            textShadow: "0.2vw 0.2vw 0.5vw rgba(0,0,0,0.9)",
          }}
        >
          By the Numbers
        </h2>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          position: "absolute",
          top: "30vh",
          left: "8vw",
          width: "84vw",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "6vh",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: "4vw" }}>
          {/* Large Stat 1 */}
          <div style={{ flex: 1, borderBottom: "0.1vw solid rgba(212, 195, 106, 0.3)", paddingBottom: "3vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#808080", letterSpacing: "0.1em", marginBottom: "1vh" }}>
              ITEM 01. MARKET CAP
            </div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "6vw", color: "#D4C36A", lineHeight: 1, marginBottom: "1vh", fontStyle: "italic" }}>
              $42.8M
            </div>
            <div style={{ fontSize: "1vw", color: "#A0A0A0", lineHeight: 1.5, maxWidth: "80%" }}>
              Traced transactions indicating a significant upward trajectory in undisclosed assets over the fiscal year.
            </div>
          </div>

          {/* Large Stat 2 */}
          <div style={{ flex: 1, borderBottom: "0.1vw solid rgba(212, 195, 106, 0.3)", paddingBottom: "3vh" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.9vw", color: "#808080", letterSpacing: "0.1em", marginBottom: "1vh" }}>
              ITEM 02. GROWTH RATE
            </div>
            <div style={{ fontFamily: "Georgia, serif", fontSize: "6vw", color: "#E0E0E0", lineHeight: 1, marginBottom: "1vh", fontStyle: "italic" }}>
              +340%
            </div>
            <div style={{ fontSize: "1vw", color: "#A0A0A0", lineHeight: 1.5, maxWidth: "80%" }}>
              A sudden spike in volume, contradicting earlier projections from the initial briefing documents.
            </div>
          </div>
        </div>

        {/* Abstract Chart Section */}
        <div style={{ display: "flex", gap: "4vw", alignItems: "center" }}>
          <div style={{ flex: "0 0 30vw" }}>
             <p
              style={{
                fontSize: "1.4vw",
                color: "#B0B0B0",
                lineHeight: 1.6,
                margin: "0",
                fontWeight: 300,
                borderLeft: "0.2vw solid #D4C36A",
                paddingLeft: "1.5vw",
              }}
            >
              The pattern is clear. Look closely at the distribution across the secondary channels. The anomaly speaks for itself.
            </p>
          </div>
          
          <div style={{ flex: 1, display: "flex", alignItems: "flex-end", gap: "1.5vw", height: "20vh" }}>
            {[40, 65, 30, 85, 55, 95, 45, 70].map((height, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", flex: 1, gap: "1vh" }}>
                <div
                  style={{
                    width: "100%",
                    height: `${height}%`,
                    backgroundColor: i === 3 || i === 5 ? "#D4C36A" : "#2A2A2A",
                    boxShadow: i === 3 || i === 5 ? "0 0 1vw rgba(212, 195, 106, 0.4)" : "none",
                    position: "relative",
                  }}
                >
                  {/* Grain texture overlay on bars */}
                  <div style={{ position: "absolute", inset: 0, opacity: 0.1, background: "repeating-linear-gradient(45deg, transparent, transparent 2px, #000 2px, #000 4px)" }} />
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8vw", color: "#666" }}>
                  Q{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#666",
          letterSpacing: "0.1em",
          zIndex: 10,
        }}
      >
        <div>CONFIDENTIAL REPORT</div>
        <div style={{ color: "#D4C36A" }}>03</div>
      </div>

      {/* Overall vignette to make corners darker */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.9) 120%)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />
    </div>
  );
}
```

### Slide 4 (`slide-pages/FilmNoirPage4.tsx`)

```tsx
export function FilmNoirPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0D0D0D",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
        color: "#E0E0E0",
      }}
    >
      {/* Dramatic diagonal light beam - Centered for finale */}
      <div
        style={{
          position: "absolute",
          top: "-50vh",
          left: "-50vw",
          width: "200vw",
          height: "200vh",
          background: "linear-gradient(90deg, transparent 40%, #1A1A1A 48%, #2A2A2A 50%, #1A1A1A 52%, transparent 60%)",
          pointerEvents: "none",
        }}
      />

      {/* Venetian blind slats */}
      <div
        style={{
          position: "absolute",
          top: "-50vh",
          left: "-50vw",
          width: "200vw",
          height: "200vh",
          transform: "rotate(0deg)", // Horizontal for final slide
          pointerEvents: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "2.5vw",
          opacity: 0.7,
        }}
      >
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: "0.5vw",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              boxShadow: "0 0 1vw rgba(0,0,0,0.9)",
            }}
          />
        ))}
      </div>

      {/* Centered Closing Content */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          zIndex: 10,
          width: "60vw",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "1vw",
            color: "#D4C36A",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            marginBottom: "3vh",
            display: "inline-block",
            borderBottom: "0.1vw solid #D4C36A",
            paddingBottom: "1vh",
          }}
        >
          End of Line
        </div>

        <h2
          style={{
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            fontSize: "7vw",
            color: "#E0E0E0",
            margin: "0 0 4vh 0",
            lineHeight: 1,
            fontWeight: 400,
            textShadow: "0.5vw 0.5vw 1.5vw rgba(0,0,0,0.9)",
          }}
        >
          Make Your Move.
        </h2>

        <p
          style={{
            fontSize: "1.5vw",
            color: "#A0A0A0",
            lineHeight: 1.6,
            margin: "0 auto 6vh auto",
            fontWeight: 300,
            maxWidth: "40vw",
          }}
        >
          The pieces are in place. The next step is yours. Contact our operatives to initiate the sequence.
        </p>

        {/* CTA Button */}
        <div
          style={{
            display: "inline-block",
            border: "0.2vw solid #D4C36A",
            padding: "2vh 4vw",
            fontFamily: "'DM Mono', monospace",
            fontSize: "1.2vw",
            color: "#0D0D0D",
            backgroundColor: "#D4C36A",
            letterSpacing: "0.15em",
            fontWeight: 600,
            textTransform: "uppercase",
            cursor: "pointer",
            boxShadow: "0 0 2vw rgba(212, 195, 106, 0.2)",
          }}
        >
          Initiate Contact
        </div>
      </div>

      {/* Metadata tags */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.8vw",
          color: "#666",
          letterSpacing: "0.15em",
        }}
      >
        FILE: CLOSED<br/>
        AUTH: REQUIRED
      </div>

      <div
        style={{
          position: "absolute",
          top: "8vh",
          right: "8vw",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.8vw",
          color: "#666",
          letterSpacing: "0.15em",
          textAlign: "right",
        }}
      >
        DEST: [REDACTED]<br/>
        TIME: {new Date().getHours()}:{new Date().getMinutes().toString().padStart(2, '0')}
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.9vw",
          color: "#666",
          letterSpacing: "0.1em",
          zIndex: 10,
        }}
      >
        <div>CONFIDENTIAL REPORT</div>
        <div style={{ color: "#D4C36A" }}>04</div>
      </div>

      {/* Overall vignette to make corners darker */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.95) 120%)",
          pointerEvents: "none",
          zIndex: 20,
        }}
      />
    </div>
  );
}
```
