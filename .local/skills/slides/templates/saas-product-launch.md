# SaaS Product Launch

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "SaasProductLaunch" template features a modern, tech-oriented aesthetic with a dark theme. The background color is a solid #0C0F1A, complemented by accent shapes in light blue (#4F7FFF) and purple (#7C6BF0) with low opacity and blur effects. Text is primarily in white (#FFFFFF) and light gray (#rgba(255, 255, 255, 0.7)), with accents in a lighter purple (#7C6BF0) for the version badge. The font family used is 'Inter', sans-serif, which is applied throughout for a clean and contemporary look. Key layout elements include large circular accent shapes, a grid overlay for texture, and a structured arrangement of content with a central focus on the title and action buttons. There are no background images used, and the overall aesthetic feel can be described as sleek, modern, and professional.

## Source Code

**Component:** `SaasProductLaunch`

### Slide 1 — Title (`slide-styles/SaasProductLaunch.tsx`)

```tsx
export function SaasProductLaunch() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0C0F1A",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: "#FFFFFF",
      }}
    >
      {/* Background Accent Shapes */}
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          right: "-10vw",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          backgroundColor: "#4F7FFF",
          opacity: 0.05,
          filter: "blur(8vw)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30vh",
          left: "-15vw",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          backgroundColor: "#7C6BF0",
          opacity: 0.05,
          filter: "blur(10vw)",
        }}
      />

      {/* Grid Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "4vw 4vw",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "70vw",
        }}
      >
        {/* Version Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.6vh 1.2vw",
            backgroundColor: "rgba(124, 107, 240, 0.15)",
            border: "1px solid rgba(124, 107, 240, 0.3)",
            borderRadius: "2vw",
            color: "#7C6BF0",
            fontSize: "1vw",
            fontWeight: 500,
            marginBottom: "4vh",
            letterSpacing: "0.05em",
          }}
        >
          <span style={{ marginRight: "0.5vw" }}>🚀</span> Introducing v2.0
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: "6.5vw",
            fontWeight: 800,
            margin: "0 0 2vh 0",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Example Deck
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.8vw",
            fontWeight: 300,
            color: "rgba(255, 255, 255, 0.7)",
            margin: "0 0 6vh 0",
            lineHeight: 1.5,
            maxWidth: "55vw",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        {/* Action Area */}
        <div style={{ display: "flex", alignItems: "center", gap: "2vw", marginBottom: "8vh" }}>
          <div
            style={{
              padding: "1.5vh 3vw",
              backgroundColor: "#4F7FFF",
              color: "#FFFFFF",
              borderRadius: "0.5vw",
              fontSize: "1.2vw",
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 1vh 2vh rgba(79, 127, 255, 0.2)",
            }}
          >
            Get Started Free
          </div>
          <div
            style={{
              padding: "1.5vh 3vw",
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "0.5vw",
              fontSize: "1.2vw",
              fontWeight: 500,
            }}
          >
            Read the Docs
          </div>
        </div>

        {/* Feature Pills */}
        <div style={{ display: "flex", gap: "1.5vw", opacity: 0.8 }}>
          {[
            { label: "API First", icon: "⚡" },
            { label: "99.9% Uptime", icon: "🟢" },
            { label: "SOC2 Certified", icon: "🛡️" },
          ].map((pill, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5vw",
                padding: "1vh 1.5vw",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "0.4vw",
                fontSize: "1vw",
                fontWeight: 400,
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <span>{pill.icon}</span>
              <span>{pill.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Header Info */}
      <div
        style={{
          position: "absolute",
          top: "5vh",
          left: "5vw",
          display: "flex",
          alignItems: "center",
          gap: "1vw",
        }}
      >
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>acme.co</div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "5vh",
          right: "5vw",
          fontSize: "1vw",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.5)",
        }}
      >
        2026
      </div>

      {/* Footer Info */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "5vw",
          fontSize: "0.9vw",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.4)",
          letterSpacing: "0.05em",
        }}
      >
        EXAMPLE COMPANY, INC.
      </div>
      
      {/* Decorative UI Element mock */}
      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          right: "-5vw",
          width: "25vw",
          height: "15vh",
          backgroundColor: "#131726",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "1vw",
          padding: "2vw",
          boxShadow: "0 2vh 4vh rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          gap: "1.5vh",
          transform: "rotate(-5deg)",
          opacity: 0.8,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", borderRadius: "50%", backgroundColor: "#7C6BF0" }} />
          <div style={{ height: "1vw", width: "10vw", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "0.2vw" }} />
        </div>
        <div style={{ height: "1vw", width: "15vw", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "0.2vw" }} />
        <div style={{ height: "1vw", width: "12vw", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "0.2vw" }} />
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/SaasProductLaunchPage2.tsx`)

```tsx
export function SaasProductLaunchPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0C0F1A",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: "#FFFFFF",
      }}
    >
      {/* Background Accent Shapes */}
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          right: "-10vw",
          width: "50vw",
          height: "50vw",
          borderRadius: "50%",
          backgroundColor: "#4F7FFF",
          opacity: 0.05,
          filter: "blur(8vw)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-30vh",
          left: "-15vw",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          backgroundColor: "#7C6BF0",
          opacity: 0.05,
          filter: "blur(10vw)",
        }}
      />

      {/* Grid Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "4vw 4vw",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Header Info */}
      <div
        style={{
          position: "absolute",
          top: "5vh",
          left: "5vw",
          display: "flex",
          alignItems: "center",
          gap: "1vw",
          zIndex: 10,
        }}
      >
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>acme.co</div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "5vh",
          right: "5vw",
          fontSize: "1vw",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.5)",
          zIndex: 10,
        }}
      >
        2026
      </div>

      {/* Content Area */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          width: "90vw",
          maxWidth: "80vw",
          height: "70vh",
          alignItems: "center",
          gap: "6vw",
        }}
      >
        {/* Left Text */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.5vh 1vw",
              backgroundColor: "rgba(79, 127, 255, 0.15)",
              border: "1px solid rgba(79, 127, 255, 0.3)",
              borderRadius: "2vw",
              color: "#4F7FFF",
              fontSize: "0.9vw",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              alignSelf: "flex-start",
            }}
          >
            Core Infrastructure
          </div>
          <h2
            style={{
              fontSize: "4vw",
              fontWeight: 800,
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Built for scale. <br />
            <span style={{ color: "rgba(255, 255, 255, 0.5)" }}>Designed for speed.</span>
          </h2>
          <p
            style={{
              fontSize: "1.3vw",
              fontWeight: 300,
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: 1.6,
              maxWidth: "35vw",
              margin: 0,
            }}
          >
            We re-engineered our entire platform from the ground up to give you unparalleled performance and reliability. It is the solid foundation your team deserves.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "2vh", marginTop: "2vh" }}>
            {[
              { title: "Global Edge Network", desc: "Deploy your code closer to your users for sub-50ms latency worldwide." },
              { title: "Automated Scaling", desc: "Traffic spikes are handled gracefully without manual intervention." },
              { title: "Zero Downtime Deployments", desc: "Ship new features instantly with confidence." }
            ].map((feature, idx) => (
              <div key={idx} style={{ display: "flex", gap: "1vw" }}>
                <div style={{ marginTop: "0.5vh" }}>
                  <svg width="1.5vw" height="1.5vw" viewBox="0 0 24 24" fill="none" stroke="#7C6BF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.2vw", fontWeight: 600, margin: "0 0 0.5vh 0" }}>{feature.title}</h4>
                  <p style={{ fontSize: "1vw", fontWeight: 300, color: "rgba(255, 255, 255, 0.5)", margin: 0, lineHeight: 1.4 }}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right UI Mockup */}
        <div
          style={{
            flex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "80%",
              backgroundColor: "#131726",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "1vw",
              boxShadow: "0 2vh 5vh rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            {/* Mock Header */}
            <div style={{ padding: "1.5vw", borderBottom: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "center", gap: "0.5vw" }}>
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#FF5F56" }} />
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#FFBD2E" }} />
              <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", backgroundColor: "#27C93F" }} />
            </div>
            {/* Mock Content */}
            <div style={{ padding: "2vw", flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
              <div style={{ height: "2vw", width: "40%", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "0.3vw" }} />
              <div style={{ display: "flex", gap: "1vw", marginTop: "1vh" }}>
                <div style={{ height: "8vh", flex: 1, backgroundColor: "rgba(79, 127, 255, 0.1)", border: "1px solid rgba(79, 127, 255, 0.2)", borderRadius: "0.5vw", display: "flex", alignItems: "center", padding: "1vw", gap: "1vw" }}>
                  <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.3vw" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh", flex: 1 }}>
                    <div style={{ height: "0.8vw", width: "60%", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "0.2vw" }} />
                    <div style={{ height: "0.6vw", width: "40%", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "0.2vw" }} />
                  </div>
                </div>
                <div style={{ height: "8vh", flex: 1, backgroundColor: "rgba(255, 255, 255, 0.03)", border: "1px solid rgba(255, 255, 255, 0.05)", borderRadius: "0.5vw", display: "flex", alignItems: "center", padding: "1vw", gap: "1vw" }}>
                  <div style={{ width: "2vw", height: "2vw", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "0.3vw" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh", flex: 1 }}>
                    <div style={{ height: "0.8vw", width: "50%", backgroundColor: "rgba(255, 255, 255, 0.2)", borderRadius: "0.2vw" }} />
                    <div style={{ height: "0.6vw", width: "30%", backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "0.2vw" }} />
                  </div>
                </div>
              </div>
              <div style={{ height: "15vh", width: "100%", backgroundColor: "rgba(255, 255, 255, 0.02)", borderRadius: "0.5vw", marginTop: "2vh", border: "1px dashed rgba(255, 255, 255, 0.1)" }} />
              <div style={{ display: "flex", flexDirection: "column", gap: "1vh", marginTop: "1vh" }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{ height: "0.8vw", width: i === 2 ? "80%" : "100%", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "0.2vw" }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "5vw",
          fontSize: "0.9vw",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.4)",
          letterSpacing: "0.05em",
        }}
      >
        EXAMPLE COMPANY, INC.
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          right: "5vw",
          fontSize: "0.9vw",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.4)",
          letterSpacing: "0.05em",
        }}
      >
        02 / 04
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/SaasProductLaunchPage3.tsx`)

```tsx
export function SaasProductLaunchPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0C0F1A",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: "#FFFFFF",
      }}
    >
      {/* Background Accent Shapes */}
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "20vw",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          backgroundColor: "#7C6BF0",
          opacity: 0.08,
          filter: "blur(12vw)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          right: "10vw",
          width: "45vw",
          height: "45vw",
          borderRadius: "50%",
          backgroundColor: "#4F7FFF",
          opacity: 0.06,
          filter: "blur(10vw)",
        }}
      />

      {/* Grid Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "4vw 4vw",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      {/* Header Info */}
      <div
        style={{
          position: "absolute",
          top: "5vh",
          left: "5vw",
          display: "flex",
          alignItems: "center",
          gap: "1vw",
          zIndex: 10,
        }}
      >
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>acme.co</div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "5vh",
          right: "5vw",
          fontSize: "1vw",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.5)",
          zIndex: 10,
        }}
      >
        2026
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80vw",
        }}
      >
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "6vh" }}>
          <h2
            style={{
              fontSize: "4vw",
              fontWeight: 800,
              margin: "0 0 2vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            The proof is in the metrics
          </h2>
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 300,
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "45vw",
              margin: "0 auto",
              lineHeight: 1.5,
            }}
          >
            Our customers see significant improvements across all key performance indicators within the first 30 days of migration.
          </p>
        </div>

        {/* Data Cards */}
        <div style={{ display: "flex", gap: "2vw", width: "100%", justifyContent: "center", marginBottom: "4vh" }}>
          {[
            { metric: "3.5x", label: "Faster Deployments", color: "#4F7FFF", trend: "+250%" },
            { metric: "99.99%", label: "Platform Uptime", color: "#7C6BF0", trend: "+0.09%" },
            { metric: "40%", label: "Cost Reduction", color: "#27C93F", trend: "-40%" }
          ].map((card, i) => (
            <div
              key={i}
              style={{
                width: "22vw",
                padding: "3vh 2vw",
                backgroundColor: "#131726",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "1vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 2vh 4vh rgba(0, 0, 0, 0.3)",
              }}
            >
              <div style={{ fontSize: "1vw", color: "rgba(255, 255, 255, 0.5)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1vh" }}>
                {card.label}
              </div>
              <div style={{ fontSize: "4.5vw", fontWeight: 800, color: card.color, lineHeight: 1 }}>
                {card.metric}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5vw", marginTop: "2vh", padding: "0.5vh 1vw", backgroundColor: "rgba(255, 255, 255, 0.05)", borderRadius: "2vw", fontSize: "0.9vw", color: "rgba(255, 255, 255, 0.8)" }}>
                <span>{card.trend.startsWith('+') ? '↑' : '↓'}</span> {card.trend} vs last year
              </div>
            </div>
          ))}
        </div>

        {/* Bar Chart Mock */}
        <div
          style={{
            width: "70vw",
            height: "25vh",
            backgroundColor: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            borderRadius: "1vw",
            padding: "2vw",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "1vw",
          }}
        >
          {[40, 55, 35, 60, 80, 65, 95, 85, 100].map((h, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
              <div
                style={{
                  width: "100%",
                  height: `${h * 0.15}vh`,
                  backgroundColor: i === 8 ? "#7C6BF0" : "rgba(79, 127, 255, 0.3)",
                  borderRadius: "0.3vw",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "20%", background: "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, transparent 100%)" }} />
              </div>
              <div style={{ fontSize: "0.8vw", color: "rgba(255, 255, 255, 0.3)" }}>M{i+1}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "5vw",
          fontSize: "0.9vw",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.4)",
          letterSpacing: "0.05em",
        }}
      >
        EXAMPLE COMPANY, INC.
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          right: "5vw",
          fontSize: "0.9vw",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.4)",
          letterSpacing: "0.05em",
        }}
      >
        03 / 04
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/SaasProductLaunchPage4.tsx`)

```tsx
export function SaasProductLaunchPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#0C0F1A",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        color: "#FFFFFF",
      }}
    >
      {/* Background Accent Shapes */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          backgroundColor: "#4F7FFF",
          opacity: 0.08,
          filter: "blur(15vw)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20vh",
          right: "-10vw",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          backgroundColor: "#7C6BF0",
          opacity: 0.1,
          filter: "blur(8vw)",
        }}
      />

      {/* Grid Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "4vw 4vw",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          maxWidth: "60vw",
          padding: "5vw",
          backgroundColor: "rgba(19, 23, 38, 0.6)",
          backdropFilter: "blur(2vw)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "2vw",
          boxShadow: "0 4vh 8vh rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ width: "4vw", height: "4vw", backgroundColor: "#4F7FFF", borderRadius: "1vw", marginBottom: "3vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg width="2vw" height="2vw" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        
        <h2
          style={{
            fontSize: "4.5vw",
            fontWeight: 800,
            margin: "0 0 2vh 0",
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
          }}
        >
          Ready to transform <br /> your workflow?
        </h2>
        
        <p
          style={{
            fontSize: "1.2vw",
            fontWeight: 300,
            color: "rgba(255, 255, 255, 0.7)",
            margin: "0 0 6vh 0",
            lineHeight: 1.6,
            maxWidth: "40vw",
          }}
        >
          Join thousands of innovative teams who are already building the future with our platform. Start your 14-day free trial today.
        </p>

        <div style={{ display: "flex", alignItems: "center", gap: "2vw" }}>
          <div
            style={{
              padding: "2vh 4vw",
              backgroundColor: "#FFFFFF",
              color: "#0C0F1A",
              borderRadius: "0.5vw",
              fontSize: "1.2vw",
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 1vh 3vh rgba(255, 255, 255, 0.2)",
            }}
          >
            Start Building Free
          </div>
          <div
            style={{
              padding: "2vh 4vw",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "#FFFFFF",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              borderRadius: "0.5vw",
              fontSize: "1.2vw",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Contact Sales
          </div>
        </div>
        
        <div style={{ marginTop: "4vh", fontSize: "0.9vw", color: "rgba(255, 255, 255, 0.4)" }}>
          No credit card required. Cancel anytime.
        </div>
      </div>

      {/* Header Info */}
      <div
        style={{
          position: "absolute",
          top: "5vh",
          left: "5vw",
          display: "flex",
          alignItems: "center",
          gap: "1vw",
          zIndex: 10,
        }}
      >
        <div style={{ width: "2vw", height: "2vw", backgroundColor: "#4F7FFF", borderRadius: "0.4vw" }} />
        <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "-0.02em" }}>acme.co</div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "5vh",
          right: "5vw",
          fontSize: "1vw",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.5)",
          zIndex: 10,
        }}
      >
        2026
      </div>

      {/* Footer Info */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "5vw",
          fontSize: "0.9vw",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.4)",
          letterSpacing: "0.05em",
        }}
      >
        EXAMPLE COMPANY, INC.
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          right: "5vw",
          fontSize: "0.9vw",
          fontWeight: 400,
          color: "rgba(255, 255, 255, 0.4)",
          letterSpacing: "0.05em",
        }}
      >
        04 / 04
      </div>
    </div>
  );
}
```
