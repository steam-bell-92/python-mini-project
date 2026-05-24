# Workspace Design

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "WorkspaceDesign" template features a modern and sleek aesthetic, characterized by a dark theme. The background color is a solid #121216, complemented by a background image of a skyline located at "/__mockup/photos/coworking-skyline.png". A dark overlay gradient transitions from transparent to rgba(18,18,22,0.98), enhancing depth. Text colors include #FFFFFF for primary text and #A0A0A0 for secondary elements. The font families used are 'Inter' for general text and 'Space Grotesk' for the title, with 'DM Mono' for footer information, creating a contemporary feel. Key layout elements include a content container positioned to the right, a top label, a title, a separator line, and a footer, all contributing to a structured and organized presentation. The overall aesthetic feel is "modern, sleek, dark".

## Source Code

**Component:** `WorkspaceDesign`

### Slide 1 — Title (`slide-styles/WorkspaceDesign.tsx`)

```tsx
export function WorkspaceDesign() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#121216",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/coworking-skyline.png"
        alt="Workspace Skyline"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      
      {/* Dark Overlay on Right */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to right, transparent 40%, rgba(18,18,22,0.85) 60%, rgba(18,18,22,0.98) 100%)",
          zIndex: 2,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 3,
          width: "45vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "8vw",
          boxSizing: "border-box",
        }}
      >
        {/* Top Label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "6vh",
          }}
        >
          <div
            style={{
              fontSize: "0.8vw",
              fontWeight: 500,
              letterSpacing: "0.2em",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            WORKSPACE & INTERIORS
          </div>
          <div
            style={{
              fontSize: "0.8vw",
              fontWeight: 400,
              color: "#A0A0A0",
              letterSpacing: "0.05em",
            }}
          >
            Project Brief
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "5vw",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#FFFFFF",
            margin: "0 0 4vh 0",
            letterSpacing: "-0.03em",
          }}
        >
          Example Deck
        </h1>

        {/* Separator */}
        <div
          style={{
            width: "100%",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.2)",
            margin: "0 0 4vh 0",
          }}
        />

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.2vw",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "#A0A0A0",
            margin: 0,
            maxWidth: "30vw",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        {/* Footer info */}
        <div
          style={{
            position: "absolute",
            bottom: "6vh",
            right: "8vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: "1vh",
          }}
        >
          <div
            style={{
              fontSize: "1vw",
              fontWeight: 500,
              color: "#FFFFFF",
              letterSpacing: "0.05em",
            }}
          >
            acme.co
          </div>
          <div
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.8vw",
              color: "#A0A0A0",
              letterSpacing: "0.1em",
            }}
          >
            2026
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/WorkspaceDesignPage2.tsx`)

```tsx
export function WorkspaceDesignPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#121216",
        color: "#FFFFFF",
      }}
    >
      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 500,
            letterSpacing: "0.2em",
            color: "#A0A0A0",
            textTransform: "uppercase",
          }}
        >
          Project Brief — Overview
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "8vw",
          width: "84vw",
          display: "flex",
          gap: "8vw",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "4vw",
              fontWeight: 300,
              lineHeight: 1.1,
              margin: "0 0 4vh 0",
              letterSpacing: "-0.03em",
            }}
          >
            A New Approach<br />
            To Spatial Design
          </h2>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "rgba(255,255,255,0.2)",
              margin: "0 0 4vh 0",
            }}
          />
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "#A0A0A0",
              margin: "0 0 3vh 0",
            }}
          >
            Our core philosophy centers on the intersection of human behavior and environmental psychology. We believe that modern workspaces should adapt to the way people actually work, rather than forcing people to adapt to the space.
          </p>
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "#A0A0A0",
              margin: 0,
            }}
          >
            By integrating biophilic elements and flexible zoning, we create environments that foster both deep focus and spontaneous collaboration.
          </p>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4vh" }}>
          {[
            {
              title: "Adaptive Architecture",
              desc: "Modular layouts that can be reconfigured in minutes to support varying team sizes and project phases.",
            },
            {
              title: "Biophilic Integration",
              desc: "Seamless inclusion of natural light, vegetation, and organic materials to reduce stress and elevate mood.",
            },
            {
              title: "Acoustic Excellence",
              desc: "Advanced sound dampening materials integrated directly into the aesthetic framework of the space.",
            }
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "2vw" }}>
              <div
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1vw",
                  color: "#FFFFFF",
                  opacity: 0.5,
                  paddingTop: "0.4vh",
                }}
              >
                0{i + 1}
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.5vw",
                    fontWeight: 400,
                    margin: "0 0 1vh 0",
                    color: "#FFFFFF",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "1vw",
                    fontWeight: 300,
                    lineHeight: 1.5,
                    color: "#A0A0A0",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            color: "#A0A0A0",
            letterSpacing: "0.1em",
          }}
        >
          02
        </div>
        <div
          style={{
            fontSize: "1vw",
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: "0.05em",
          }}
        >
          acme.co
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/WorkspaceDesignPage3.tsx`)

```tsx
export function WorkspaceDesignPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#121216",
        color: "#FFFFFF",
      }}
    >
      {/* Background Graphic Element */}
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          right: "-10vw",
          width: "60vw",
          height: "60vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 500,
            letterSpacing: "0.2em",
            color: "#A0A0A0",
            textTransform: "uppercase",
          }}
        >
          Project Brief — Metrics
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "8vw",
          width: "84vw",
          zIndex: 1,
        }}
      >
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "4vw",
            fontWeight: 300,
            lineHeight: 1.1,
            margin: "0 0 2vh 0",
            letterSpacing: "-0.03em",
          }}
        >
          Performance Impact
        </h2>
        <p
          style={{
            fontSize: "1.2vw",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "#A0A0A0",
            margin: "0 0 8vh 0",
            maxWidth: "40vw",
          }}
        >
          Quantifiable improvements in employee well-being, operational efficiency, and overall productivity post-implementation.
        </p>

        <div
          style={{
            display: "flex",
            gap: "4vw",
            alignItems: "flex-end",
          }}
        >
          {[
            { label: "Productivity Increase", value: "+34%", barHeight: "25vh" },
            { label: "Space Utilization", value: "85%", barHeight: "35vh" },
            { label: "Employee Retention", value: "92%", barHeight: "40vh" },
            { label: "Energy Efficiency", value: "+40%", barHeight: "20vh" },
          ].map((stat, idx) => (
            <div
              key={idx}
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "3.5vw",
                  fontWeight: 300,
                  color: "#FFFFFF",
                  lineHeight: 1,
                  marginBottom: "1vh",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.9vw",
                  fontWeight: 400,
                  color: "#A0A0A0",
                  marginBottom: "3vh",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  width: "100%",
                  height: stat.barHeight,
                  backgroundColor: "rgba(255,255,255,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to top, rgba(255,255,255,0.2), rgba(255,255,255,0.05))",
                    borderTop: "1px solid rgba(255,255,255,0.4)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 1,
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            color: "#A0A0A0",
            letterSpacing: "0.1em",
          }}
        >
          03
        </div>
        <div
          style={{
            fontSize: "1vw",
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: "0.05em",
          }}
        >
          acme.co
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/WorkspaceDesignPage4.tsx`)

```tsx
export function WorkspaceDesignPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#121216",
      }}
    >
      {/* Background Image */}
      <img
        src="/__mockup/photos/coworking-skyline.png"
        alt="Workspace Skyline"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 1,
          opacity: 0.3,
          filter: "grayscale(100%)",
        }}
      />
      
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(to bottom, rgba(18,18,22,0.9) 0%, rgba(18,18,22,1) 100%)",
          zIndex: 2,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "8vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontSize: "0.8vw",
            fontWeight: 500,
            letterSpacing: "0.2em",
            color: "#A0A0A0",
            textTransform: "uppercase",
          }}
        >
          Project Brief — Next Steps
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "6vw",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "#FFFFFF",
            margin: "0 0 3vh 0",
            letterSpacing: "-0.03em",
          }}
        >
          Let's Begin.
        </h2>
        <div
          style={{
            width: "8vw",
            height: "1px",
            backgroundColor: "rgba(255,255,255,0.3)",
            margin: "0 0 4vh 0",
          }}
        />
        <p
          style={{
            fontSize: "1.2vw",
            fontWeight: 300,
            lineHeight: 1.6,
            color: "#A0A0A0",
            margin: "0 0 6vh 0",
            maxWidth: "30vw",
          }}
        >
          Ready to transform your workspace into an environment that inspires your best work.
        </p>

        <div
          style={{
            display: "flex",
            gap: "4vw",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.8vw",
                color: "#A0A0A0",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1vh",
              }}
            >
              Email
            </div>
            <div
              style={{
                fontSize: "1.2vw",
                fontWeight: 400,
                color: "#FFFFFF",
              }}
            >
              hello@acme.co
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.8vw",
                color: "#A0A0A0",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "1vh",
              }}
            >
              Office
            </div>
            <div
              style={{
                fontSize: "1.2vw",
                fontWeight: 400,
                color: "#FFFFFF",
              }}
            >
              123 Design District, NY
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "8vw",
          right: "8vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8vw",
            color: "#A0A0A0",
            letterSpacing: "0.1em",
          }}
        >
          04
        </div>
        <div
          style={{
            fontSize: "1vw",
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: "0.05em",
          }}
        >
          acme.co
        </div>
      </div>
    </div>
  );
}
```
