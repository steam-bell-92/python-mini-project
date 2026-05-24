# Pastel Playground

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "PastelPlayground" template embodies a soft, playful aesthetic characterized by pastel colors and rounded shapes. The background color is a light cream (#fdfbf7), complemented by decorative shapes in pastel pink (#ffd8d8), mint green (#d8f0e6), lavender (#e2d8ff), soft yellow (#ffe8a1), and peach (#ffc4a3). The text colors include dark gray (#1a1a1a) for headers, a muted purple (#5c3ca8) for accent text, and lighter grays (#666666, #555555, #888888) for additional text elements. The font family used is 'DM Sans', which is applied throughout for a modern, clean look. Key layout elements include multiple circular decorative shapes positioned at various angles and a central content container with rounded corners and a semi-transparent white background. No background images are specified in the code. The overall aesthetic feel can be described as "soft, whimsical, cheerful."

## Source Code

**Component:** `PastelPlayground`

### Slide 1 — Title (`slide-styles/PastelPlayground.tsx`)

```tsx
export function PastelPlayground() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fdfbf7",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Decorative Shapes */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          left: "-5vw",
          width: "40vw",
          height: "40vw",
          backgroundColor: "#ffd8d8",
          borderRadius: "50%",
          opacity: 0.6,
          filter: "blur(4vw)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-15vh",
          right: "-10vw",
          width: "50vw",
          height: "50vw",
          backgroundColor: "#d8f0e6",
          borderRadius: "50%",
          opacity: 0.6,
          filter: "blur(5vw)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "20vh",
          right: "15vw",
          width: "15vw",
          height: "15vw",
          backgroundColor: "#e2d8ff",
          borderRadius: "4vw",
          transform: "rotate(15deg)",
          opacity: 0.7,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "25vh",
          left: "15vw",
          width: "10vw",
          height: "10vw",
          backgroundColor: "#ffe8a1",
          borderRadius: "50%",
          opacity: 0.8,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "30vw",
          width: "5vw",
          height: "5vw",
          backgroundColor: "#ffc4a3",
          borderRadius: "2vw",
          transform: "rotate(-20deg)",
          opacity: 0.7,
        }}
      ></div>

      {/* Main Content Container */}
      <div
        style={{
          width: "80vw",
          height: "80vh",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(2vw)",
          WebkitBackdropFilter: "blur(2vw)",
          borderRadius: "6vw",
          border: "0.2vw solid rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4vh 8vh rgba(0, 0, 0, 0.03)",
          display: "flex",
          flexDirection: "column",
          padding: "6vh 6vw",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "3vw",
                height: "3vw",
                backgroundColor: "#1a1a1a",
                borderRadius: "1vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.5vw",
              }}
            >
              a.
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1a1a1a" }}>
              acme.co
            </div>
          </div>
          <div style={{ display: "flex", gap: "1vw" }}>
            <div
              style={{
                padding: "1vh 2vw",
                backgroundColor: "#ffffff",
                borderRadius: "4vw",
                fontSize: "1.2vw",
                fontWeight: 500,
                color: "#666666",
                border: "0.1vw solid #eeeeee",
              }}
            >
              2026
            </div>
            <div
              style={{
                padding: "1vh 2vw",
                backgroundColor: "#ffe1e1",
                borderRadius: "4vw",
                fontSize: "1.2vw",
                fontWeight: 600,
                color: "#d94b4b",
              }}
            >
              Confidential
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              padding: "1.5vh 3vw",
              backgroundColor: "#e2d8ff",
              borderRadius: "4vw",
              fontSize: "1.5vw",
              fontWeight: 600,
              color: "#5c3ca8",
              marginBottom: "4vh",
              display: "inline-block",
              transform: "rotate(-2deg)",
            }}
          >
            Welcome to the future
          </div>
          <h1
            style={{
              fontSize: "8vw",
              fontWeight: 800,
              color: "#1a1a1a",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Example Deck
          </h1>
          <p
            style={{
              fontSize: "2.5vw",
              fontWeight: 400,
              color: "#555555",
              marginTop: "3vh",
              maxWidth: "60vw",
              lineHeight: 1.4,
            }}
          >
            Your compelling subtitle goes here. Describe your big idea in a single sentence.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              fontSize: "1.2vw",
              fontWeight: 500,
              color: "#888888",
              display: "flex",
              alignItems: "center",
              gap: "0.5vw",
            }}
          >
            <span
              style={{
                width: "0.8vw",
                height: "0.8vw",
                backgroundColor: "#888888",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
            Example Company, Inc.
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/PastelPlaygroundPage2.tsx`)

```tsx
export function PastelPlaygroundPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fdfbf7",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Decorative Shapes */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          left: "-5vw",
          width: "40vw",
          height: "40vw",
          backgroundColor: "#ffd8d8",
          borderRadius: "50%",
          opacity: 0.6,
          filter: "blur(4vw)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-15vh",
          right: "-10vw",
          width: "50vw",
          height: "50vw",
          backgroundColor: "#d8f0e6",
          borderRadius: "50%",
          opacity: 0.6,
          filter: "blur(5vw)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "20vh",
          right: "15vw",
          width: "15vw",
          height: "15vw",
          backgroundColor: "#e2d8ff",
          borderRadius: "4vw",
          transform: "rotate(15deg)",
          opacity: 0.7,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "25vh",
          left: "15vw",
          width: "10vw",
          height: "10vw",
          backgroundColor: "#ffe8a1",
          borderRadius: "50%",
          opacity: 0.8,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "30vw",
          width: "5vw",
          height: "5vw",
          backgroundColor: "#ffc4a3",
          borderRadius: "2vw",
          transform: "rotate(-20deg)",
          opacity: 0.7,
        }}
      ></div>

      {/* Main Content Container */}
      <div
        style={{
          width: "80vw",
          height: "80vh",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(2vw)",
          WebkitBackdropFilter: "blur(2vw)",
          borderRadius: "6vw",
          border: "0.2vw solid rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4vh 8vh rgba(0, 0, 0, 0.03)",
          display: "flex",
          flexDirection: "column",
          padding: "6vh 6vw",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: "4vh",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "3vw",
                height: "3vw",
                backgroundColor: "#1a1a1a",
                borderRadius: "1vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.5vw",
              }}
            >
              a.
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1a1a1a" }}>
              acme.co
            </div>
          </div>
          <div style={{ display: "flex", gap: "1vw" }}>
            <div
              style={{
                padding: "1vh 2vw",
                backgroundColor: "#e2d8ff",
                borderRadius: "4vw",
                fontSize: "1.2vw",
                fontWeight: 600,
                color: "#5c3ca8",
              }}
            >
              Overview
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            gap: "6vw",
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1 }}>
            <h2
              style={{
                fontSize: "4.5vw",
                fontWeight: 800,
                color: "#1a1a1a",
                margin: "0 0 3vh 0",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              A fresh approach to design
            </h2>
            <p
              style={{
                fontSize: "1.8vw",
                fontWeight: 400,
                color: "#555555",
                lineHeight: 1.5,
                margin: "0 0 4vh 0",
              }}
            >
              We combine playful aesthetics with rigorous functionality. Soft edges, vibrant pastels, and a user-centric flow make complex tools feel welcoming and intuitive.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
              {[
                { title: "Intuitive Structure", color: "#d8f0e6", text: "#2e7d5d" },
                { title: "Playful Aesthetics", color: "#ffe8a1", text: "#9a7c00" },
                { title: "Rigorous Functionality", color: "#ffd8d8", text: "#a83232" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
                  <div
                    style={{
                      width: "1vw",
                      height: "1vw",
                      borderRadius: "50%",
                      backgroundColor: item.color,
                      border: `0.2vw solid ${item.text}`,
                    }}
                  />
                  <div style={{ fontSize: "1.6vw", fontWeight: 600, color: "#1a1a1a" }}>
                    {item.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "2vh",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "3vw",
                padding: "3vh 3vw",
                border: "0.1vw solid #f0f0f0",
                boxShadow: "0 2vh 4vh rgba(0,0,0,0.02)",
                transform: "rotate(2deg)",
              }}
            >
              <h3 style={{ fontSize: "1.5vw", fontWeight: 700, margin: "0 0 1vh 0", color: "#1a1a1a" }}>
                Step 1: Discover
              </h3>
              <p style={{ fontSize: "1.2vw", margin: 0, color: "#777777", lineHeight: 1.4 }}>
                Uncover the core insights that drive engagement and shape our foundation.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#e2d8ff",
                borderRadius: "3vw",
                padding: "3vh 3vw",
                border: "0.1vw solid #d4c4fa",
                boxShadow: "0 2vh 4vh rgba(0,0,0,0.02)",
                transform: "rotate(-1deg)",
              }}
            >
              <h3 style={{ fontSize: "1.5vw", fontWeight: 700, margin: "0 0 1vh 0", color: "#5c3ca8" }}>
                Step 2: Prototype
              </h3>
              <p style={{ fontSize: "1.2vw", margin: 0, color: "#6b4eb5", lineHeight: 1.4 }}>
                Quickly iterate and build touchable concepts that validate our hypothesis.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#d8f0e6",
                borderRadius: "3vw",
                padding: "3vh 3vw",
                border: "0.1vw solid #bce6d5",
                boxShadow: "0 2vh 4vh rgba(0,0,0,0.02)",
                transform: "rotate(1.5deg)",
              }}
            >
              <h3 style={{ fontSize: "1.5vw", fontWeight: 700, margin: "0 0 1vh 0", color: "#2e7d5d" }}>
                Step 3: Elevate
              </h3>
              <p style={{ fontSize: "1.2vw", margin: 0, color: "#3f9c76", lineHeight: 1.4 }}>
                Add the polish and delight that turns ordinary software into magic.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontSize: "1.2vw",
              fontWeight: 500,
              color: "#888888",
              display: "flex",
              alignItems: "center",
              gap: "0.5vw",
            }}
          >
            <span
              style={{
                width: "0.8vw",
                height: "0.8vw",
                backgroundColor: "#888888",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#888888" }}>
            02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/PastelPlaygroundPage3.tsx`)

```tsx
export function PastelPlaygroundPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fdfbf7",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Decorative Shapes */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          left: "-5vw",
          width: "40vw",
          height: "40vw",
          backgroundColor: "#ffd8d8",
          borderRadius: "50%",
          opacity: 0.6,
          filter: "blur(4vw)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-15vh",
          right: "-10vw",
          width: "50vw",
          height: "50vw",
          backgroundColor: "#d8f0e6",
          borderRadius: "50%",
          opacity: 0.6,
          filter: "blur(5vw)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "20vh",
          right: "15vw",
          width: "15vw",
          height: "15vw",
          backgroundColor: "#e2d8ff",
          borderRadius: "4vw",
          transform: "rotate(15deg)",
          opacity: 0.7,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "25vh",
          left: "15vw",
          width: "10vw",
          height: "10vw",
          backgroundColor: "#ffe8a1",
          borderRadius: "50%",
          opacity: 0.8,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "30vw",
          width: "5vw",
          height: "5vw",
          backgroundColor: "#ffc4a3",
          borderRadius: "2vw",
          transform: "rotate(-20deg)",
          opacity: 0.7,
        }}
      ></div>

      {/* Main Content Container */}
      <div
        style={{
          width: "80vw",
          height: "80vh",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(2vw)",
          WebkitBackdropFilter: "blur(2vw)",
          borderRadius: "6vw",
          border: "0.2vw solid rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4vh 8vh rgba(0, 0, 0, 0.03)",
          display: "flex",
          flexDirection: "column",
          padding: "6vh 6vw",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginBottom: "2vh",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "3vw",
                height: "3vw",
                backgroundColor: "#1a1a1a",
                borderRadius: "1vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.5vw",
              }}
            >
              a.
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1a1a1a" }}>
              acme.co
            </div>
          </div>
          <div style={{ display: "flex", gap: "1vw" }}>
            <div
              style={{
                padding: "1vh 2vw",
                backgroundColor: "#d8f0e6",
                borderRadius: "4vw",
                fontSize: "1.2vw",
                fontWeight: 600,
                color: "#2e7d5d",
              }}
            >
              The Numbers
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2
            style={{
              fontSize: "3.5vw",
              fontWeight: 800,
              color: "#1a1a1a",
              margin: "0 0 1vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            Growth is accelerating
          </h2>
          <p
            style={{
              fontSize: "1.5vw",
              fontWeight: 400,
              color: "#555555",
              margin: "0 0 4vh 0",
            }}
          >
            A look at our primary metrics over the last four quarters.
          </p>

          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-around",
              padding: "0 4vw 4vh 4vw",
              gap: "2vw",
              borderBottom: "0.2vw solid #e0e0e0",
              position: "relative",
            }}
          >
            {[
              { label: "Q1", value: "32%", height: "20%", color: "#ffd8d8", textColor: "#a83232" },
              { label: "Q2", value: "48%", height: "40%", color: "#ffe8a1", textColor: "#9a7c00" },
              { label: "Q3", value: "64%", height: "65%", color: "#ffc4a3", textColor: "#a65121" },
              { label: "Q4", value: "92%", height: "100%", color: "#e2d8ff", textColor: "#5c3ca8" },
            ].map((bar, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: "12vw",
                  height: "100%",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5vw",
                    fontWeight: 700,
                    color: bar.textColor,
                    marginBottom: "1vh",
                  }}
                >
                  {bar.value}
                </div>
                <div
                  style={{
                    width: "100%",
                    height: bar.height,
                    backgroundColor: bar.color,
                    borderRadius: "2vw 2vw 0 0",
                    transition: "height 0.5s ease-out",
                  }}
                />
                <div
                  style={{
                    fontSize: "1.4vw",
                    fontWeight: 600,
                    color: "#555555",
                    marginTop: "2vh",
                  }}
                >
                  {bar.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "3vh",
          }}
        >
          <div
            style={{
              fontSize: "1.2vw",
              fontWeight: 500,
              color: "#888888",
              display: "flex",
              alignItems: "center",
              gap: "0.5vw",
            }}
          >
            <span
              style={{
                width: "0.8vw",
                height: "0.8vw",
                backgroundColor: "#888888",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#888888" }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/PastelPlaygroundPage4.tsx`)

```tsx
export function PastelPlaygroundPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#fdfbf7",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Background Decorative Shapes */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          left: "-5vw",
          width: "40vw",
          height: "40vw",
          backgroundColor: "#ffd8d8",
          borderRadius: "50%",
          opacity: 0.6,
          filter: "blur(4vw)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "-15vh",
          right: "-10vw",
          width: "50vw",
          height: "50vw",
          backgroundColor: "#d8f0e6",
          borderRadius: "50%",
          opacity: 0.6,
          filter: "blur(5vw)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "20vh",
          right: "15vw",
          width: "15vw",
          height: "15vw",
          backgroundColor: "#e2d8ff",
          borderRadius: "4vw",
          transform: "rotate(15deg)",
          opacity: 0.7,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          bottom: "25vh",
          left: "15vw",
          width: "10vw",
          height: "10vw",
          backgroundColor: "#ffe8a1",
          borderRadius: "50%",
          opacity: 0.8,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "30vw",
          width: "5vw",
          height: "5vw",
          backgroundColor: "#ffc4a3",
          borderRadius: "2vw",
          transform: "rotate(-20deg)",
          opacity: 0.7,
        }}
      ></div>

      {/* Main Content Container */}
      <div
        style={{
          width: "80vw",
          height: "80vh",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(2vw)",
          WebkitBackdropFilter: "blur(2vw)",
          borderRadius: "6vw",
          border: "0.2vw solid rgba(255, 255, 255, 0.8)",
          boxShadow: "0 4vh 8vh rgba(0, 0, 0, 0.03)",
          display: "flex",
          flexDirection: "column",
          padding: "6vh 6vw",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "3vw",
                height: "3vw",
                backgroundColor: "#1a1a1a",
                borderRadius: "1vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.5vw",
              }}
            >
              a.
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1a1a1a" }}>
              acme.co
            </div>
          </div>
          <div style={{ display: "flex", gap: "1vw" }}>
            <div
              style={{
                padding: "1vh 2vw",
                backgroundColor: "#ffc4a3",
                borderRadius: "4vw",
                fontSize: "1.2vw",
                fontWeight: 600,
                color: "#a65121",
              }}
            >
              Next Steps
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "7vw",
              fontWeight: 800,
              color: "#1a1a1a",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Ready to play?
          </h1>
          <p
            style={{
              fontSize: "2vw",
              fontWeight: 400,
              color: "#555555",
              marginTop: "3vh",
              marginBottom: "6vh",
              maxWidth: "50vw",
              lineHeight: 1.4,
            }}
          >
            Join us in redefining the boundaries of what is possible.
          </p>
          <div
            style={{
              display: "flex",
              gap: "2vw",
            }}
          >
            <div
              style={{
                padding: "2vh 4vw",
                backgroundColor: "#1a1a1a",
                borderRadius: "4vw",
                fontSize: "1.6vw",
                fontWeight: 700,
                color: "#ffffff",
                cursor: "pointer",
                boxShadow: "0 1vh 2vh rgba(0,0,0,0.1)",
              }}
            >
              Get Started
            </div>
            <div
              style={{
                padding: "2vh 4vw",
                backgroundColor: "transparent",
                borderRadius: "4vw",
                fontSize: "1.6vw",
                fontWeight: 700,
                color: "#1a1a1a",
                border: "0.2vw solid #1a1a1a",
                cursor: "pointer",
              }}
            >
              Contact Us
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontSize: "1.2vw",
              fontWeight: 500,
              color: "#888888",
              display: "flex",
              alignItems: "center",
              gap: "0.5vw",
            }}
          >
            <span
              style={{
                width: "0.8vw",
                height: "0.8vw",
                backgroundColor: "#888888",
                borderRadius: "50%",
                display: "inline-block",
              }}
            ></span>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#888888" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
