# Corporate Memphis Flat

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference images (filename pattern: `query-choice-<timestamp>-corporate-memphis-flat.png` for slide 1, plus `-page2.png`, `-page3.png`, `-page4.png` for interior slides). Open and visually read ALL 4 images. Your first slide MUST match the title slide preview as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Use the interior slide images as reference for the remaining slides, maintaining consistent styling guided by the description below.

The \

## Source Code

**Component:** `CorporateMemphisFlat`

### Slide 1 — Title (`slide-styles/CorporateMemphisFlat.tsx`)

```tsx
export function CorporateMemphisFlat() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#2d3748",
        display: "flex",
      }}
    >
      {/* Abstract Corporate Memphis Shapes */}
      {/* Background large shapes */}
      <div
        style={{
          position: "absolute",
          top: "-15vh",
          right: "-5vw",
          width: "45vw",
          height: "45vw",
          backgroundColor: "#f4e8c1", // sand
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10vh",
          left: "-10vw",
          width: "35vw",
          height: "35vw",
          backgroundColor: "#aed9e0", // soft blue
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Foreground geometric shapes */}
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "55vw",
          width: "8vw",
          height: "24vw",
          backgroundColor: "#ffbca6", // warm peach
          borderRadius: "4vw",
          transform: "rotate(15deg)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25vh",
          right: "20vw",
          width: "12vw",
          height: "12vw",
          backgroundColor: "#c8b6ff", // gentle purple
          borderRadius: "50% 50% 0 0",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40vh",
          right: "8vw",
          width: "4vw",
          height: "4vw",
          backgroundColor: "#aed9e0",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      
      {/* Squiggle / lines */}
      <div
        style={{
          position: "absolute",
          bottom: "15vh",
          left: "45vw",
          width: "10vw",
          height: "2vw",
          background: "radial-gradient(circle, #2d3748 0.5vw, transparent 0.6vw)",
          backgroundSize: "2vw 2vw",
          zIndex: 1,
        }}
      />

      {/* Main Content Card */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          margin: "8vh 8vw",
          width: "calc(100vw - 16vw)",
          height: "calc(100vh - 16vh)",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(1vw)",
          WebkitBackdropFilter: "blur(1vw)",
          borderRadius: "2vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "3vw",
                height: "3vw",
                backgroundColor: "#2d3748",
                borderRadius: "0.8vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "1.5vw",
              }}
            >
              a
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700 }}>acme.co</div>
          </div>
          <div
            style={{
              backgroundColor: "#ffbca6",
              padding: "0.8vh 1.5vw",
              borderRadius: "2vw",
              fontSize: "1vw",
              fontWeight: 700,
              color: "#2d3748",
            }}
          >
            Confidential
          </div>
        </div>

        {/* Title Content */}
        <div style={{ maxWidth: "50vw", marginBottom: "auto", marginTop: "15vh" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.5vh 1vw",
              backgroundColor: "#e2e8f0",
              borderRadius: "0.5vw",
              fontSize: "1vw",
              fontWeight: 700,
              color: "#4a5568",
              marginBottom: "2vh",
              textTransform: "uppercase",
              letterSpacing: "0.1vw",
            }}
          >
            2026 Presentation
          </div>
          <h1
            style={{
              fontSize: "6.5vw",
              fontWeight: 800,
              lineHeight: 1.1,
              margin: 0,
              color: "#1a202c",
              letterSpacing: "-0.1vw",
            }}
          >
            Example Deck
          </h1>
          <p
            style={{
              fontSize: "2vw",
              fontWeight: 400,
              color: "#4a5568",
              marginTop: "3vh",
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
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "4vh",
            borderTop: "0.2vw solid rgba(45, 55, 72, 0.1)",
          }}
        >
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>
            Example Company, Inc.
          </div>
          <div style={{ display: "flex", gap: "1vw" }}>
            {/* Decorative footer dots */}
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#ffbca6" }} />
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#aed9e0" }} />
            <div style={{ width: "1vw", height: "1vw", borderRadius: "50%", backgroundColor: "#c8b6ff" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/CorporateMemphisFlatPage2.tsx`)

```tsx
export function CorporateMemphisFlatPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#2d3748",
        display: "flex",
      }}
    >
      {/* Abstract Corporate Memphis Shapes */}
      <div
        style={{
          position: "absolute",
          top: "-15vh",
          right: "-5vw",
          width: "45vw",
          height: "45vw",
          backgroundColor: "#f4e8c1",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10vh",
          left: "-10vw",
          width: "35vw",
          height: "35vw",
          backgroundColor: "#aed9e0",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "55vw",
          width: "8vw",
          height: "24vw",
          backgroundColor: "#ffbca6",
          borderRadius: "4vw",
          transform: "rotate(15deg)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25vh",
          right: "20vw",
          width: "12vw",
          height: "12vw",
          backgroundColor: "#c8b6ff",
          borderRadius: "50% 50% 0 0",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40vh",
          right: "8vw",
          width: "4vw",
          height: "4vw",
          backgroundColor: "#aed9e0",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15vh",
          left: "45vw",
          width: "10vw",
          height: "2vw",
          background: "radial-gradient(circle, #2d3748 0.5vw, transparent 0.6vw)",
          backgroundSize: "2vw 2vw",
          zIndex: 1,
        }}
      />

      {/* Main Content Card */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          margin: "8vh 8vw",
          width: "calc(100vw - 16vw)",
          height: "calc(100vh - 16vh)",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(1vw)",
          WebkitBackdropFilter: "blur(1vw)",
          borderRadius: "2vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          padding: "4vh 4vw",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "3vw",
                height: "3vw",
                backgroundColor: "#2d3748",
                borderRadius: "0.8vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "1.5vw",
              }}
            >
              a
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700 }}>acme.co</div>
          </div>
          <div
            style={{
              backgroundColor: "#ffbca6",
              padding: "0.8vh 1.5vw",
              borderRadius: "2vw",
              fontSize: "1vw",
              fontWeight: 700,
              color: "#2d3748",
            }}
          >
            Our Mission
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", height: "100%", marginTop: "6vh", gap: "4vw" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <h2
              style={{
                fontSize: "4vw",
                fontWeight: 800,
                color: "#1a202c",
                lineHeight: 1.1,
                margin: "0 0 3vh 0",
                letterSpacing: "-0.05vw",
              }}
            >
              Designing for the modern web ecosystem.
            </h2>
            <p
              style={{
                fontSize: "1.8vw",
                color: "#4a5568",
                lineHeight: 1.5,
                margin: "0 0 4vh 0",
              }}
            >
              We believe in creating interfaces that not only look spectacular but also provide seamless, accessible experiences for every user on any device.
            </p>
            <div style={{ display: "flex", gap: "2vw" }}>
              <div style={{ flex: 1, backgroundColor: "#ffffff", padding: "2vw", borderRadius: "1.5vw", boxShadow: "0 1vw 2vw rgba(0,0,0,0.05)" }}>
                <div style={{ width: "3vw", height: "3vw", backgroundColor: "#c8b6ff", borderRadius: "50%", marginBottom: "1.5vh" }} />
                <h3 style={{ fontSize: "1.5vw", fontWeight: 700, margin: "0 0 1vh 0", color: "#2d3748" }}>Fast</h3>
                <p style={{ fontSize: "1.1vw", color: "#718096", margin: 0, lineHeight: 1.4 }}>Optimized for performance and speed.</p>
              </div>
              <div style={{ flex: 1, backgroundColor: "#ffffff", padding: "2vw", borderRadius: "1.5vw", boxShadow: "0 1vw 2vw rgba(0,0,0,0.05)" }}>
                <div style={{ width: "3vw", height: "3vw", backgroundColor: "#aed9e0", borderRadius: "50%", marginBottom: "1.5vh" }} />
                <h3 style={{ fontSize: "1.5vw", fontWeight: 700, margin: "0 0 1vh 0", color: "#2d3748" }}>Fluid</h3>
                <p style={{ fontSize: "1.1vw", color: "#718096", margin: 0, lineHeight: 1.4 }}>Responsive across all screen sizes.</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
             <div style={{ width: "25vw", height: "25vw", backgroundColor: "#f4e8c1", borderRadius: "2vw", transform: "rotate(-5deg)", position: "relative", boxShadow: "0 2vw 4vw rgba(0,0,0,0.1)" }}>
                <div style={{ position: "absolute", top: "2vw", left: "2vw", right: "2vw", bottom: "2vw", backgroundColor: "#ffffff", borderRadius: "1vw" }} />
                <div style={{ position: "absolute", bottom: "-2vw", right: "-2vw", width: "10vw", height: "10vw", backgroundColor: "#ffbca6", borderRadius: "50%" }} />
             </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2vh",
            marginTop: "2vh",
            borderTop: "0.2vw solid rgba(45, 55, 72, 0.1)",
          }}
        >
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>
            02
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CorporateMemphisFlatPage3.tsx`)

```tsx
export function CorporateMemphisFlatPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#2d3748",
        display: "flex",
      }}
    >
      {/* Abstract Corporate Memphis Shapes */}
      <div
        style={{
          position: "absolute",
          top: "-15vh",
          right: "-5vw",
          width: "45vw",
          height: "45vw",
          backgroundColor: "#f4e8c1",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10vh",
          left: "-10vw",
          width: "35vw",
          height: "35vw",
          backgroundColor: "#aed9e0",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "55vw",
          width: "8vw",
          height: "24vw",
          backgroundColor: "#ffbca6",
          borderRadius: "4vw",
          transform: "rotate(15deg)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25vh",
          right: "20vw",
          width: "12vw",
          height: "12vw",
          backgroundColor: "#c8b6ff",
          borderRadius: "50% 50% 0 0",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40vh",
          right: "8vw",
          width: "4vw",
          height: "4vw",
          backgroundColor: "#aed9e0",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15vh",
          left: "45vw",
          width: "10vw",
          height: "2vw",
          background: "radial-gradient(circle, #2d3748 0.5vw, transparent 0.6vw)",
          backgroundSize: "2vw 2vw",
          zIndex: 1,
        }}
      />

      {/* Main Content Card */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          margin: "8vh 8vw",
          width: "calc(100vw - 16vw)",
          height: "calc(100vh - 16vh)",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(1vw)",
          WebkitBackdropFilter: "blur(1vw)",
          borderRadius: "2vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          padding: "4vh 4vw",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "3vw",
                height: "3vw",
                backgroundColor: "#2d3748",
                borderRadius: "0.8vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "1.5vw",
              }}
            >
              a
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700 }}>acme.co</div>
          </div>
          <div
            style={{
              backgroundColor: "#ffbca6",
              padding: "0.8vh 1.5vw",
              borderRadius: "2vw",
              fontSize: "1vw",
              fontWeight: 700,
              color: "#2d3748",
            }}
          >
            Performance Metrics
          </div>
        </div>

        {/* Content */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", marginTop: "4vh" }}>
          <h2
            style={{
              fontSize: "3.5vw",
              fontWeight: 800,
              color: "#1a202c",
              lineHeight: 1.1,
              margin: "0 0 1vh 0",
              letterSpacing: "-0.05vw",
            }}
          >
            Growth Trajectory
          </h2>
          <p
            style={{
              fontSize: "1.5vw",
              color: "#4a5568",
              lineHeight: 1.5,
              margin: "0 0 4vh 0",
              maxWidth: "40vw",
            }}
          >
            Analyzing our recent quarter performance against target KPIs and engagement metrics.
          </p>

          <div style={{ display: "flex", gap: "3vw", height: "100%", paddingBottom: "2vh" }}>
            {/* Chart Area */}
            <div style={{ flex: 2, backgroundColor: "#ffffff", borderRadius: "2vw", padding: "3vw", display: "flex", alignItems: "flex-end", gap: "2vw", boxShadow: "0 1vw 3vw rgba(0,0,0,0.05)", position: "relative" }}>
              {/* Bars */}
              <div style={{ flex: 1, backgroundColor: "#c8b6ff", height: "40%", borderRadius: "1vw 1vw 0 0" }} />
              <div style={{ flex: 1, backgroundColor: "#aed9e0", height: "65%", borderRadius: "1vw 1vw 0 0" }} />
              <div style={{ flex: 1, backgroundColor: "#f4e8c1", height: "85%", borderRadius: "1vw 1vw 0 0" }} />
              <div style={{ flex: 1, backgroundColor: "#ffbca6", height: "100%", borderRadius: "1vw 1vw 0 0" }} />
              
              {/* Grid Lines */}
              <div style={{ position: "absolute", top: "3vw", left: "3vw", right: "3vw", height: "0.1vw", backgroundColor: "#e2e8f0" }} />
              <div style={{ position: "absolute", top: "calc(3vw + 25%)", left: "3vw", right: "3vw", height: "0.1vw", backgroundColor: "#e2e8f0" }} />
              <div style={{ position: "absolute", top: "calc(3vw + 50%)", left: "3vw", right: "3vw", height: "0.1vw", backgroundColor: "#e2e8f0" }} />
              <div style={{ position: "absolute", top: "calc(3vw + 75%)", left: "3vw", right: "3vw", height: "0.1vw", backgroundColor: "#e2e8f0" }} />
            </div>

            {/* Key Stats */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vw", justifyContent: "space-between" }}>
              <div style={{ backgroundColor: "#2d3748", borderRadius: "1.5vw", padding: "2.5vw", color: "#ffffff", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1 }}>
                <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.1vw", opacity: 0.8, marginBottom: "1vh" }}>Q4 Revenue</div>
                <div style={{ fontSize: "4vw", fontWeight: 800, lineHeight: 1 }}>$4.2M</div>
                <div style={{ fontSize: "1.2vw", color: "#aed9e0", marginTop: "1vh" }}>+124% YoY Growth</div>
              </div>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "1.5vw", padding: "2.5vw", display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, border: "0.2vw solid #e2e8f0" }}>
                <div style={{ fontSize: "1.2vw", textTransform: "uppercase", letterSpacing: "0.1vw", color: "#718096", marginBottom: "1vh" }}>Active Users</div>
                <div style={{ fontSize: "4vw", fontWeight: 800, color: "#1a202c", lineHeight: 1 }}>1.8M</div>
                <div style={{ fontSize: "1.2vw", color: "#ffbca6", marginTop: "1vh", fontWeight: 700 }}>Record High</div>
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
            paddingTop: "2vh",
            borderTop: "0.2vw solid rgba(45, 55, 72, 0.1)",
          }}
        >
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>
            03
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CorporateMemphisFlatPage4.tsx`)

```tsx
export function CorporateMemphisFlatPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        color: "#2d3748",
        display: "flex",
      }}
    >
      {/* Abstract Corporate Memphis Shapes */}
      <div
        style={{
          position: "absolute",
          top: "-15vh",
          right: "-5vw",
          width: "45vw",
          height: "45vw",
          backgroundColor: "#f4e8c1",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-10vh",
          left: "-10vw",
          width: "35vw",
          height: "35vw",
          backgroundColor: "#aed9e0",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "55vw",
          width: "8vw",
          height: "24vw",
          backgroundColor: "#ffbca6",
          borderRadius: "4vw",
          transform: "rotate(15deg)",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "25vh",
          right: "20vw",
          width: "12vw",
          height: "12vw",
          backgroundColor: "#c8b6ff",
          borderRadius: "50% 50% 0 0",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40vh",
          right: "8vw",
          width: "4vw",
          height: "4vw",
          backgroundColor: "#aed9e0",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15vh",
          left: "45vw",
          width: "10vw",
          height: "2vw",
          background: "radial-gradient(circle, #2d3748 0.5vw, transparent 0.6vw)",
          backgroundSize: "2vw 2vw",
          zIndex: 1,
        }}
      />

      {/* Main Content Card */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          margin: "8vh 8vw",
          width: "calc(100vw - 16vw)",
          height: "calc(100vh - 16vh)",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(1vw)",
          WebkitBackdropFilter: "blur(1vw)",
          borderRadius: "2vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxSizing: "border-box",
          padding: "4vh 4vw",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div
              style={{
                width: "3vw",
                height: "3vw",
                backgroundColor: "#2d3748",
                borderRadius: "0.8vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: "bold",
                fontSize: "1.5vw",
              }}
            >
              a
            </div>
            <div style={{ fontSize: "1.5vw", fontWeight: 700 }}>acme.co</div>
          </div>
          <div
            style={{
              backgroundColor: "#c8b6ff",
              padding: "0.8vh 1.5vw",
              borderRadius: "2vw",
              fontSize: "1vw",
              fontWeight: 700,
              color: "#2d3748",
            }}
          >
            Get Started
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.5vh 1.5vw",
              backgroundColor: "#2d3748",
              borderRadius: "2vw",
              fontSize: "1.2vw",
              fontWeight: 700,
              color: "#ffffff",
              marginBottom: "3vh",
              textTransform: "uppercase",
              letterSpacing: "0.1vw",
            }}
          >
            Join the Revolution
          </div>
          <h2
            style={{
              fontSize: "6vw",
              fontWeight: 800,
              color: "#1a202c",
              lineHeight: 1.1,
              margin: "0 0 2vh 0",
              letterSpacing: "-0.1vw",
              maxWidth: "60vw",
            }}
          >
            Ready to build something great?
          </h2>
          <p
            style={{
              fontSize: "2vw",
              color: "#4a5568",
              lineHeight: 1.4,
              margin: "0 0 5vh 0",
              maxWidth: "50vw",
            }}
          >
            Start your journey with us today and transform the way you interact with digital experiences.
          </p>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div
              style={{
                backgroundColor: "#ffbca6",
                color: "#1a202c",
                fontSize: "1.5vw",
                fontWeight: 700,
                padding: "2vh 4vw",
                borderRadius: "3vw",
                cursor: "pointer",
                boxShadow: "0 1vw 2vw rgba(255, 188, 166, 0.4)",
              }}
            >
              Sign Up Now
            </div>
            <div
              style={{
                backgroundColor: "transparent",
                color: "#2d3748",
                fontSize: "1.5vw",
                fontWeight: 700,
                padding: "2vh 4vw",
                borderRadius: "3vw",
                cursor: "pointer",
                border: "0.2vw solid #2d3748",
              }}
            >
              Contact Sales
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2vh",
            borderTop: "0.2vw solid rgba(45, 55, 72, 0.1)",
          }}
        >
          <div style={{ fontSize: "1.2vw", fontWeight: 500, color: "#718096" }}>
            Example Company, Inc.
          </div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#2d3748" }}>
            04
          </div>
        </div>
      </div>
    </div>
  );
}
```
