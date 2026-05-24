# Flat Vector Illustration

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "FlatVector" template presents a modern, minimalistic aesthetic with a clean layout. The background color is a solid light gray, specifically #FAFAFA. Text and accent colors include a dark gray (#111827) for primary text, a muted gray (#4B5563) for secondary text, and a vibrant orange (#F97316) and deep blue (#4F46E5) for accents. The font family used is 'DM Sans', sans-serif, which is applied throughout for a contemporary feel. Key layout elements include circular geometric accents in the background, positioned flexibly within the viewport, and a structured left content area that features a company logo, title, description, and footer details. A background shape in a light blue tint (rgba(79, 70, 229, 0.03)) complements the right side, which showcases an illustration of team collaboration sourced from "/__mockup/images/illust-team-collab-nobg.png". The overall aesthetic feel can be described as clean, modern, and professional.

## Source Code

**Component:** `FlatVector`

### Slide 1 — Title (`slide-styles/FlatVector.tsx`)

```tsx
export function FlatVector() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FAFAFA",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
      }}
    >
      {/* Background geometric accents */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          left: "8vw",
          width: "2vw",
          height: "2vw",
          borderRadius: "50%",
          backgroundColor: "#F97316",
          opacity: 0.2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20vh",
          left: "40vw",
          width: "4vw",
          height: "4vw",
          borderRadius: "50%",
          backgroundColor: "#4F46E5",
          opacity: 0.1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "10vh",
          right: "45vw",
          width: "1.5vw",
          height: "1.5vw",
          borderRadius: "0.2vw",
          backgroundColor: "#4F46E5",
          opacity: 0.8,
          transform: "rotate(45deg)",
        }}
      />

      {/* Left Content Side */}
      <div
        style={{
          width: "45vw",
          height: "100vh",
          padding: "6vh 8vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 10,
          boxSizing: "border-box",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div
            style={{
              width: "1.5vw",
              height: "1.5vw",
              backgroundColor: "#4F46E5",
              borderRadius: "0.3vw",
            }}
          />
          <div
            style={{
              fontSize: "1.2vw",
              fontWeight: 700,
              color: "#111827",
              letterSpacing: "-0.02em",
            }}
          >
            Example Company
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "3vh", marginTop: "-10vh" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5vw",
              padding: "0.5vh 1vw",
              backgroundColor: "rgba(79, 70, 229, 0.1)",
              borderRadius: "2vw",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: "0.5vw",
                height: "0.5vw",
                backgroundColor: "#4F46E5",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                fontSize: "0.9vw",
                fontWeight: 600,
                color: "#4F46E5",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Company Overview
            </span>
          </div>

          <h1
            style={{
              fontSize: "5.5vw",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "#111827",
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Growth
            <br />
            Platform
            <span style={{ color: "#F97316" }}>.</span>
          </h1>

          <p
            style={{
              fontSize: "1.4vw",
              color: "#4B5563",
              lineHeight: 1.5,
              margin: 0,
              maxWidth: "30vw",
              fontWeight: 400,
            }}
          >
            Scaling teams through better collaboration.
          </p>
          
          <div style={{ width: "4vw", height: "0.3vh", backgroundColor: "#111827", marginTop: "1vh" }} />
        </div>

        <div
          style={{
            display: "flex",
            gap: "2vw",
            fontSize: "0.85vw",
            color: "#9CA3AF",
            fontWeight: 500,
          }}
        >
          <span>Example Company, Inc.</span>
          <span>/</span>
          <span>Confidential</span>
          <span>/</span>
          <span>2026</span>
        </div>
      </div>

      {/* Right Illustration Side */}
      <div
        style={{
          width: "55vw",
          height: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Background shape for illustration */}
        <div
          style={{
            position: "absolute",
            width: "45vw",
            height: "45vw",
            backgroundColor: "rgba(79, 70, 229, 0.03)",
            borderRadius: "50%",
            zIndex: 1,
            right: "-10vw",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        
        <img
          src="/__mockup/images/illust-team-collab-nobg.png"
          alt="Team Collaboration"
          style={{
            width: "85%",
            height: "85%",
            objectFit: "contain",
            zIndex: 2,
            position: "relative",
            marginRight: "4vw",
          }}
        />
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/FlatVectorPage2.tsx`)

```tsx
export function FlatVectorPage2() {
  const teamMembers = [
    { initials: "J.C.", name: "Jamie Chen", title: "CEO", color: "#4F46E5" },
    { initials: "R.P.", name: "Riley Park", title: "CTO", color: "#F97316" },
    { initials: "A.S.", name: "Avery Shah", title: "Design Lead", color: "#4F46E5" },
    { initials: "T.M.", name: "Taylor Martinez", title: "Eng Lead", color: "#F97316" },
    { initials: "K.W.", name: "Kim Wong", title: "Head of Growth", color: "#4F46E5" },
    { initials: "D.L.", name: "Dana Lee", title: "Head of Ops", color: "#F97316" },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FAFAFA",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "8vh 8vw",
      }}
    >
      {/* Subtle Geometric Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "10vh",
          right: "10vw",
          width: "3vw",
          height: "3vw",
          borderRadius: "50%",
          backgroundColor: "#F97316",
          opacity: 0.15,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15vh",
          left: "5vw",
          width: "5vw",
          height: "5vw",
          borderRadius: "50%",
          backgroundColor: "#4F46E5",
          opacity: 0.08,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40vh",
          left: "4vw",
          width: "1vw",
          height: "1vw",
          borderRadius: "0.2vw",
          backgroundColor: "#4F46E5",
          opacity: 0.6,
          transform: "rotate(45deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30vh",
          right: "6vw",
          width: "1.5vw",
          height: "1.5vw",
          borderRadius: "50%",
          border: "0.2vw solid #F97316",
          opacity: 0.3,
        }}
      />

      {/* Header Section */}
      <div style={{ marginBottom: "8vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "2vh" }}>
          <div
            style={{
              width: "1vw",
              height: "1vw",
              backgroundColor: "#4F46E5",
              borderRadius: "50%",
            }}
          />
          <h2
            style={{
              fontSize: "1.5vw",
              fontWeight: 700,
              color: "#4F46E5",
              margin: 0,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Our Team
          </h2>
        </div>
        <h1
          style={{
            fontSize: "4.5vw",
            fontWeight: 800,
            color: "#111827",
            margin: 0,
            letterSpacing: "-0.03em",
          }}
        >
          Built by experts<span style={{ color: "#F97316" }}>.</span>
        </h1>
      </div>

      {/* Team Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: "4vw 6vw",
          flex: 1,
          alignContent: "center",
          paddingBottom: "4vh",
        }}
      >
        {teamMembers.map((member, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "12vw",
                height: "12vw",
                borderRadius: "50%",
                backgroundColor: member.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2vh",
                color: "#FFFFFF",
                fontSize: "4.5vw",
                fontWeight: 700,
                boxShadow: "0 1vw 2vw -0.5vw rgba(0, 0, 0, 0.1)",
              }}
            >
              {member.initials}
            </div>
            <h3
              style={{
                fontSize: "1.8vw",
                fontWeight: 700,
                color: "#111827",
                margin: "0 0 0.5vh 0",
                letterSpacing: "-0.01em",
              }}
            >
              {member.name}
            </h3>
            <p
              style={{
                fontSize: "1.2vw",
                color: "#6B7280",
                margin: 0,
                fontWeight: 500,
              }}
            >
              {member.title}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "1vw",
          color: "#9CA3AF",
          fontWeight: 500,
          borderTop: "1px solid rgba(0, 0, 0, 0.05)",
          paddingTop: "2vh",
        }}
      >
        <div style={{ display: "flex", gap: "2vw" }}>
          <span>Example Company, Inc.</span>
          <span>/</span>
          <span>Confidential</span>
        </div>
        <div
          style={{
            fontWeight: 700,
            color: "#111827",
          }}
        >
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/FlatVectorPage3.tsx`)

```tsx
export function FlatVectorPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#FAFAFA",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 8vw",
        boxSizing: "border-box",
      }}
    >
      {/* Background geometric accents */}
      <div
        style={{
          position: "absolute",
          top: "15vh",
          right: "8vw",
          width: "2vw",
          height: "2vw",
          borderRadius: "50%",
          backgroundColor: "#F97316",
          opacity: 0.2,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10vh",
          left: "5vw",
          width: "6vw",
          height: "6vw",
          borderRadius: "50%",
          backgroundColor: "#4F46E5",
          opacity: 0.05,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40vh",
          left: "45vw",
          width: "1.5vw",
          height: "1.5vw",
          borderRadius: "0.2vw",
          backgroundColor: "#4F46E5",
          opacity: 0.1,
          transform: "rotate(45deg)",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", zIndex: 10 }}>
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5vw",
              padding: "0.5vh 1vw",
              backgroundColor: "rgba(79, 70, 229, 0.1)",
              borderRadius: "2vw",
              marginBottom: "2vh",
            }}
          >
            <div
              style={{
                width: "0.5vw",
                height: "0.5vw",
                backgroundColor: "#4F46E5",
                borderRadius: "50%",
              }}
            />
            <span
              style={{
                fontSize: "0.9vw",
                fontWeight: 600,
                color: "#4F46E5",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Key Metrics
            </span>
          </div>

          <h2
            style={{
              fontSize: "3.5vw",
              fontWeight: 800,
              color: "#111827",
              margin: 0,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Accelerating Output<span style={{ color: "#F97316" }}>.</span>
          </h2>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div
            style={{
              width: "1.5vw",
              height: "1.5vw",
              backgroundColor: "#4F46E5",
              borderRadius: "0.3vw",
            }}
          />
          <div
            style={{
              fontSize: "1.2vw",
              fontWeight: 700,
              color: "#111827",
              letterSpacing: "-0.02em",
            }}
          >
            Example Company
          </div>
        </div>
      </div>

      {/* Main Content: Stats Grid */}
      <div
        style={{
          display: "flex",
          flex: 1,
          marginTop: "6vh",
          gap: "4vw",
          zIndex: 10,
        }}
      >
        {/* Left column: Chart area */}
        <div
          style={{
            flex: 2,
            backgroundColor: "white",
            borderRadius: "1vw",
            padding: "3vw",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ marginBottom: "3vh" }}>
            <h3 style={{ fontSize: "1.5vw", fontWeight: 700, margin: 0, color: "#111827" }}>Quarterly Growth</h3>
            <p style={{ fontSize: "1vw", color: "#6B7280", margin: "0.5vh 0 0 0" }}>User acquisition over the last 12 months</p>
          </div>

          {/* Bar Chart Mockup */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "2vw", flex: 1, height: "100%", paddingBottom: "2vh" }}>
            {[30, 45, 65, 100].map((height, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "1vh" }}>
                <div
                  style={{
                    width: "100%",
                    height: `${height}%`,
                    backgroundColor: i === 3 ? "#4F46E5" : "rgba(79, 70, 229, 0.2)",
                    borderRadius: "0.5vw 0.5vw 0 0",
                    transition: "height 0.5s ease",
                  }}
                />
                <span style={{ fontSize: "0.9vw", color: "#6B7280", fontWeight: 500 }}>Q{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Stats cards */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "3vh",
          }}
        >
          {/* Stat Card 1 */}
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "1vw",
              padding: "2.5vw",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={{ width: "2vw", height: "0.3vh", backgroundColor: "#F97316", marginBottom: "1.5vh" }} />
            <h4 style={{ fontSize: "3vw", fontWeight: 800, margin: 0, color: "#111827", lineHeight: 1 }}>340%</h4>
            <p style={{ fontSize: "1.1vw", color: "#4B5563", margin: "1vh 0 0 0", fontWeight: 500 }}>Revenue Increase</p>
          </div>

          {/* Stat Card 2 */}
          <div
            style={{
              backgroundColor: "#4F46E5",
              borderRadius: "1vw",
              padding: "2.5vw",
              boxShadow: "0 4px 20px rgba(79, 70, 229, 0.2)",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-2vw",
                right: "-2vw",
                width: "8vw",
                height: "8vw",
                borderRadius: "50%",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            />
            <div style={{ width: "2vw", height: "0.3vh", backgroundColor: "white", marginBottom: "1.5vh", opacity: 0.8 }} />
            <h4 style={{ fontSize: "3vw", fontWeight: 800, margin: 0, lineHeight: 1 }}>2.5M</h4>
            <p style={{ fontSize: "1.1vw", margin: "1vh 0 0 0", fontWeight: 500, opacity: 0.9 }}>Active Users</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "4vh",
          fontSize: "0.85vw",
          color: "#9CA3AF",
          fontWeight: 500,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", gap: "2vw" }}>
          <span>Example Company, Inc.</span>
          <span>/</span>
          <span>Confidential</span>
          <span>/</span>
          <span>2026</span>
        </div>
        <div>03</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/FlatVectorPage4.tsx`)

```tsx
export function FlatVectorPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#111827",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        padding: "6vh 8vw",
        boxSizing: "border-box",
        color: "white",
      }}
    >
      {/* Background geometric accents */}
      <div
        style={{
          position: "absolute",
          top: "-15vw",
          right: "-5vw",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          backgroundColor: "#4F46E5",
          opacity: 0.2,
          filter: "blur(4vw)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15vh",
          left: "8vw",
          width: "2vw",
          height: "2vw",
          borderRadius: "50%",
          backgroundColor: "#F97316",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20vh",
          left: "40vw",
          width: "1.5vw",
          height: "1.5vw",
          borderRadius: "0.2vw",
          backgroundColor: "#4F46E5",
          transform: "rotate(45deg)",
        }}
      />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div
            style={{
              width: "1.5vw",
              height: "1.5vw",
              backgroundColor: "#F97316",
              borderRadius: "0.3vw",
            }}
          />
          <div
            style={{
              fontSize: "1.2vw",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
            }}
          >
            Example Company
          </div>
        </div>
        
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5vw",
            padding: "0.5vh 1vw",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "2vw",
          }}
        >
          <span
            style={{
              fontSize: "0.9vw",
              fontWeight: 600,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Get Started
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div style={{ width: "60vw" }}>
          <h1
            style={{
              fontSize: "6vw",
              fontWeight: 800,
              lineHeight: 1.05,
              color: "white",
              margin: "0 0 4vh 0",
              letterSpacing: "-0.03em",
            }}
          >
            Ready to scale
            <br />
            your team?
          </h1>

          <div style={{ display: "flex", gap: "2vw", alignItems: "center", marginBottom: "6vh" }}>
            <button
              style={{
                backgroundColor: "#4F46E5",
                color: "white",
                border: "none",
                borderRadius: "0.5vw",
                padding: "2vh 3vw",
                fontSize: "1.2vw",
                fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(79, 70, 229, 0.4)",
              }}
            >
              Start Free Trial
            </button>
            <button
              style={{
                backgroundColor: "transparent",
                color: "white",
                border: "0.2vw solid rgba(255,255,255,0.2)",
                borderRadius: "0.5vw",
                padding: "1.8vh 3vw",
                fontSize: "1.2vw",
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              Contact Sales
            </button>
          </div>

          {/* Contact Info */}
          <div style={{ display: "flex", gap: "4vw" }}>
            <div>
              <div style={{ fontSize: "0.9vw", color: "#9CA3AF", marginBottom: "0.5vh", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Email Us</div>
              <div style={{ fontSize: "1.4vw", fontWeight: 500 }}>hello@example.com</div>
            </div>
            <div>
              <div style={{ fontSize: "0.9vw", color: "#9CA3AF", marginBottom: "0.5vh", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Call Us</div>
              <div style={{ fontSize: "1.4vw", fontWeight: 500 }}>+1 (555) 123-4567</div>
            </div>
            <div>
              <div style={{ fontSize: "0.9vw", color: "#9CA3AF", marginBottom: "0.5vh", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>Visit Us</div>
              <div style={{ fontSize: "1.4vw", fontWeight: 500 }}>San Francisco, CA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.85vw",
          color: "#6B7280",
          fontWeight: 500,
          zIndex: 10,
        }}
      >
        <div style={{ display: "flex", gap: "2vw" }}>
          <span>Example Company, Inc.</span>
          <span>/</span>
          <span>Confidential</span>
          <span>/</span>
          <span>2026</span>
        </div>
        <div>04</div>
      </div>
    </div>
  );
}
```
