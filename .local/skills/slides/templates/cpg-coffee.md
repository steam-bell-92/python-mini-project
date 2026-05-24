# CPG (Cold Brew Coffee)

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "CpgCoffee" template features a modern and sophisticated aesthetic, characterized by a dark and light split background. The left side has a background color of #1A0E08 (dark brown), while the right side is #F5E6D3 (cream). Text and accent colors include #F5E6D3 for light text and #1A0E08 for darker text elements. The font families used are 'Inter' for body text and 'Playfair Display' for headings, providing a contemporary yet elegant feel. Key layout elements include large decorative arcs with a subtle border, positioned content areas for text, and a product image of a coffee bottle bridging the split. The overall aesthetic feel can be described as "modern elegance."

## Source Code

**Component:** `CpgCoffee`

### Slide 1 — Title (`slide-styles/CpgCoffee.tsx`)

```tsx
export function CpgCoffee() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Split */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", display: "flex", zIndex: 0 }}>
        {/* Left Dark Side (55%) */}
        <div style={{ width: "55%", height: "100%", backgroundColor: "#1A0E08" }}></div>
        {/* Right Cream Side (45%) */}
        <div style={{ width: "45%", height: "100%", backgroundColor: "#F5E6D3" }}></div>
      </div>

      {/* Background large typography / texture */}
      <div 
        style={{
          position: "absolute",
          top: "50%",
          left: "55%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
          color: "#F5E6D3",
          opacity: 0.02,
          fontFamily: "'Playfair Display', serif",
          fontSize: "30vw",
          fontWeight: 900,
          whiteSpace: "nowrap",
          pointerEvents: "none",
          mixBlendMode: "overlay"
        }}
      >
        DUSK
      </div>

      {/* Decorative Arc/Curve Elements */}
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          left: "25vw",
          width: "60vw",
          height: "140vh",
          border: "1px solid rgba(245, 230, 211, 0.15)",
          borderRadius: "50%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "35vw",
          width: "40vw",
          height: "80vh",
          border: "1px solid rgba(26, 14, 8, 0.08)",
          borderRadius: "45%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      ></div>

      {/* Content Layer */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 3, display: "flex", pointerEvents: "none" }}>
        
        {/* Left Side Content */}
        <div
          style={{
            width: "55vw",
            height: "100vh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "8vh 6vw",
            boxSizing: "border-box",
            pointerEvents: "auto",
          }}
        >
          {/* Top subtle text */}
          <div
            style={{
              color: "#F5E6D3",
              opacity: 0.6,
              fontSize: "0.9vw",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
            }}
          >
            Example Company
          </div>
          
          {/* Hero Typography */}
          <div style={{ position: "relative", zIndex: 10, marginTop: "-5vh" }}>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "10vw",
                lineHeight: 0.85,
                margin: 0,
                color: "#F5E6D3",
                fontStyle: "italic",
                letterSpacing: "-0.04em",
                position: "relative",
                left: "-0.5vw",
                whiteSpace: "nowrap"
              }}
            >
              Dusk
              <br />
              <span style={{ paddingLeft: "4vw", fontSize: "9vw" }}>Brew Co.</span>
            </h1>
          </div>

          {/* Bottom subtle text */}
          <div
            style={{
              color: "#F5E6D3",
              opacity: 0.4,
              fontSize: "0.75vw",
              fontFamily: "'Courier New', monospace",
              letterSpacing: "0.15em",
            }}
          >
            EST. 2026 / CONFIDENTIAL
          </div>
        </div>

        {/* Right Side Content */}
        <div
          style={{
            width: "45vw",
            height: "100vh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "8vh 6vw",
            boxSizing: "border-box",
            pointerEvents: "auto",
          }}
        >
          {/* Tagline positioning */}
          <div
            style={{
              position: "absolute",
              bottom: "20vh",
              left: "6vw",
              zIndex: 10,
            }}
          >
            <div style={{ width: "2vw", height: "1.5px", backgroundColor: "#1A0E08", marginBottom: "2vh", opacity: 0.8 }}></div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1vw",
                color: "#1A0E08",
                margin: 0,
                fontWeight: 600,
                letterSpacing: "0.05em",
                lineHeight: 1.6,
                textTransform: "uppercase",
              }}
            >
              Crafted cold.
              <br />
              Brewed bold.
            </p>
          </div>
        </div>
      </div>

      {/* Product Image Bridging the Split */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "55%",
          transform: "translate(-50%, -50%)",
          zIndex: 20,
          height: "80vh",
          width: "35vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
        }}
      >
        <img
          src="/__mockup/images/product-coffee.png"
          alt="Dusk Brew Co. Cold Brew Bottle"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            filter: "drop-shadow(-20px 30px 45px rgba(0, 0, 0, 0.6))",
            transform: "rotate(2deg)"
          }}
        />
      </div>
      
    </div>
  );
}
```

### Slide 2 (`slide-pages/CpgCoffeePage2.tsx`)

```tsx
export function CpgCoffeePage2() {
  const steps = [
    {
      number: "01",
      title: "Source",
      description: "Single-origin beans from Guatemala",
    },
    {
      number: "02",
      title: "Roast",
      description: "Small-batch artisan roasting",
    },
    {
      number: "03",
      title: "Brew",
      description: "Cold-brewed for 18 hours",
    },
    {
      number: "04",
      title: "Bottle",
      description: "Hand-packed and sealed",
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A1410",
        color: "#F5E6D3",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        padding: "8vh 6vw",
      }}
    >
      {/* Background Decorative Element */}
      <div
        style={{
          position: "absolute",
          top: "-10vh",
          right: "-5vw",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          border: "1px solid rgba(245, 230, 211, 0.05)",
          zIndex: 0,
        }}
      />
      
      {/* Small corner product reference */}
      <div
        style={{
          position: "absolute",
          top: "6vh",
          right: "6vw",
          height: "15vh",
          zIndex: 10,
          opacity: 0.9,
          filter: "drop-shadow(0px 10px 15px rgba(0,0,0,0.5))",
        }}
      >
        <img 
          src="/__mockup/images/product-coffee.png" 
          alt="Product Reference" 
          style={{ height: "100%", width: "auto", objectFit: "contain", transform: "rotate(5deg)" }}
        />
      </div>

      {/* Header Section */}
      <div style={{ position: "relative", zIndex: 2, marginTop: "4vh" }}>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "5.5vw",
            fontStyle: "italic",
            fontWeight: 400,
            margin: 0,
            color: "#F5E6D3",
            letterSpacing: "-0.02em",
          }}
        >
          From Bean to Bottle
        </h2>
        <div style={{ width: "6vw", height: "2px", backgroundColor: "#B87333", marginTop: "2vh" }} />
      </div>

      {/* Process Steps Section */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          alignItems: "center",
          marginTop: "4vh",
        }}
      >
        {/* The horizontal connecting line */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "5vw",
            right: "5vw",
            height: "2px",
            borderTop: "2px dashed rgba(245, 230, 211, 0.3)",
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
            zIndex: 2,
            padding: "0 2vw",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                width: "18vw",
              }}
            >
              {/* Circle with Number */}
              <div
                style={{
                  width: "6vw",
                  height: "6vw",
                  borderRadius: "50%",
                  border: "2px solid #F5E6D3",
                  backgroundColor: "#1A1410",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "3vh",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2vw",
                  fontWeight: 600,
                  color: "#B87333",
                  boxShadow: "0 0 0 0.5vw #1A1410", // to mask the dashed line behind
                }}
              >
                {step.number}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.2vw",
                  margin: "0 0 1.5vh 0",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                }}
              >
                {step.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1vw",
                  margin: 0,
                  opacity: 0.8,
                  lineHeight: 1.5,
                  fontWeight: 300,
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "6vw",
          right: "6vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontSize: "0.85vw",
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            opacity: 0.5,
          }}
        >
          Example Company, Inc. / Confidential
        </div>
        <div
          style={{
            fontSize: "1.2vw",
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            opacity: 0.8,
            color: "#B87333",
          }}
        >
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/CpgCoffeePage3.tsx`)

```tsx
export function CpgCoffeePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Split */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", display: "flex", zIndex: 0 }}>
        {/* Left Dark Side (55%) */}
        <div style={{ width: "55%", height: "100%", backgroundColor: "#1A0E08" }}></div>
        {/* Right Cream Side (45%) */}
        <div style={{ width: "45%", height: "100%", backgroundColor: "#F5E6D3" }}></div>
      </div>

      {/* Decorative Arc/Curve Elements */}
      <div
        style={{
          position: "absolute",
          top: "-20vh",
          left: "25vw",
          width: "60vw",
          height: "140vh",
          border: "1px solid rgba(245, 230, 211, 0.15)",
          borderRadius: "50%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      ></div>

      {/* Content Layer */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 3, display: "flex" }}>
        
        {/* Left Side Content */}
        <div
          style={{
            width: "55vw",
            height: "100vh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "8vh 6vw",
            boxSizing: "border-box",
          }}
        >
          {/* Top subtle text */}
          <div
            style={{
              color: "#F5E6D3",
              opacity: 0.6,
              fontSize: "0.9vw",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
            }}
          >
            Example Company
          </div>
          
          {/* Main Typography & Stats */}
          <div style={{ marginTop: "-10vh" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "4vw",
                color: "#F5E6D3",
                fontStyle: "italic",
                margin: "0 0 2vh 0",
                fontWeight: 400,
                lineHeight: 1.1,
              }}
            >
              The Cold Brew<br />Market is Surging
            </h2>
            <p
              style={{
                color: "#F5E6D3",
                opacity: 0.8,
                fontSize: "1vw",
                lineHeight: 1.6,
                maxWidth: "35vw",
                margin: 0,
              }}
            >
              Consumer preference is shifting rapidly towards premium, ready-to-drink options that don't compromise on flavor or origin.
            </p>
            
            <div style={{ display: "flex", marginTop: "8vh", gap: "5vw" }}>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#F5E6D3", margin: 0, lineHeight: 1 }}>
                  85<span style={{ fontSize: "3vw" }}>%</span>
                </div>
                <div style={{ color: "#F5E6D3", opacity: 0.6, fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "1vh", fontWeight: 600 }}>
                  YoY Growth
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#F5E6D3", margin: 0, lineHeight: 1 }}>
                  $2.4<span style={{ fontSize: "3vw" }}>B</span>
                </div>
                <div style={{ color: "#F5E6D3", opacity: 0.6, fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: "1vh", fontWeight: 600 }}>
                  Market Size 2025
                </div>
              </div>
            </div>
          </div>

          {/* Bottom subtle text */}
          <div
            style={{
              color: "#F5E6D3",
              opacity: 0.4,
              fontSize: "0.75vw",
              fontFamily: "'Courier New', monospace",
              letterSpacing: "0.15em",
            }}
          >
            03 / DATA & METRICS
          </div>
        </div>

        {/* Right Side Content */}
        <div
          style={{
            width: "45vw",
            height: "100vh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "8vh 6vw",
            boxSizing: "border-box",
          }}
        >
          <div style={{ width: "100%", borderBottom: "1px solid rgba(26, 14, 8, 0.2)", paddingBottom: "2vh", marginBottom: "5vh" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2vw", color: "#1A0E08", margin: 0, fontStyle: "italic" }}>
              Target Demographics
            </h3>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "4vh" }}>
            {/* Bar 1 */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5vh" }}>
                <span style={{ color: "#1A0E08", fontSize: "0.9vw", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Millennials</span>
                <span style={{ color: "#1A0E08", fontSize: "0.9vw", fontWeight: 700 }}>45%</span>
              </div>
              <div style={{ width: "100%", height: "0.8vh", backgroundColor: "rgba(26, 14, 8, 0.1)", borderRadius: "1vh", overflow: "hidden" }}>
                <div style={{ width: "45%", height: "100%", backgroundColor: "#1A0E08" }}></div>
              </div>
            </div>
            
            {/* Bar 2 */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5vh" }}>
                <span style={{ color: "#1A0E08", fontSize: "0.9vw", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Gen Z</span>
                <span style={{ color: "#1A0E08", fontSize: "0.9vw", fontWeight: 700 }}>38%</span>
              </div>
              <div style={{ width: "100%", height: "0.8vh", backgroundColor: "rgba(26, 14, 8, 0.1)", borderRadius: "1vh", overflow: "hidden" }}>
                <div style={{ width: "38%", height: "100%", backgroundColor: "#1A0E08" }}></div>
              </div>
            </div>
            
            {/* Bar 3 */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5vh" }}>
                <span style={{ color: "#1A0E08", fontSize: "0.9vw", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Gen X</span>
                <span style={{ color: "#1A0E08", fontSize: "0.9vw", fontWeight: 700 }}>17%</span>
              </div>
              <div style={{ width: "100%", height: "0.8vh", backgroundColor: "rgba(26, 14, 8, 0.1)", borderRadius: "1vh", overflow: "hidden" }}>
                <div style={{ width: "17%", height: "100%", backgroundColor: "#1A0E08" }}></div>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: "8vh", padding: "3vh", backgroundColor: "rgba(26, 14, 8, 0.04)", borderLeft: "2px solid #1A0E08" }}>
            <p style={{ color: "#1A0E08", fontSize: "1.1vw", lineHeight: 1.5, margin: 0, fontStyle: "italic", fontFamily: "'Playfair Display', serif" }}>
              "Dusk has identified a key gap in the premium RTD segment, offering a craft experience with mass-market scalability."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/CpgCoffeePage4.tsx`)

```tsx
export function CpgCoffeePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Background Split */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", display: "flex", zIndex: 0 }}>
        {/* Left Dark Side (55%) */}
        <div style={{ width: "55%", height: "100%", backgroundColor: "#1A0E08" }}></div>
        {/* Right Cream Side (45%) */}
        <div style={{ width: "45%", height: "100%", backgroundColor: "#F5E6D3" }}></div>
      </div>

      {/* Decorative Arc/Curve Elements */}
      <div
        style={{
          position: "absolute",
          top: "40vh",
          left: "-10vw",
          width: "40vw",
          height: "80vh",
          border: "1px solid rgba(245, 230, 211, 0.1)",
          borderRadius: "50%",
          zIndex: 2,
          pointerEvents: "none",
        }}
      ></div>

      {/* Content Layer */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 3, display: "flex" }}>
        
        {/* Left Side Content */}
        <div
          style={{
            width: "55vw",
            height: "100vh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "8vh 6vw",
            boxSizing: "border-box",
          }}
        >
          {/* Top subtle text */}
          <div
            style={{
              color: "#F5E6D3",
              opacity: 0.6,
              fontSize: "0.9vw",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
            }}
          >
            Example Company
          </div>
          
          {/* Main Typography & CTA */}
          <div style={{ marginTop: "-5vh" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "7vw",
                color: "#F5E6D3",
                fontStyle: "italic",
                margin: "0 0 2vh 0",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              Taste the<br />Difference.
            </h2>
            <p
              style={{
                color: "#F5E6D3",
                opacity: 0.8,
                fontSize: "1.2vw",
                lineHeight: 1.6,
                maxWidth: "35vw",
                margin: "0 0 5vh 0",
                fontWeight: 300,
              }}
            >
              We're redefining the daily ritual. Join us in bringing craft cold brew to every corner of the country.
            </p>
            
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2vh 3vw",
                backgroundColor: "#F5E6D3",
                color: "#1A0E08",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                fontSize: "0.9vw",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Invest Now
            </div>
          </div>

          {/* Footer Contact Info */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div style={{ color: "#F5E6D3", opacity: 0.8, fontSize: "0.9vw", lineHeight: 1.6 }}>
              <strong style={{ letterSpacing: "0.05em", color: "#F5E6D3" }}>Dusk Brew Co.</strong><br />
              123 Roaster Way, Portland, OR<br />
              partners@duskbrew.com
            </div>
            <div
              style={{
                color: "#F5E6D3",
                opacity: 0.4,
                fontSize: "0.75vw",
                fontFamily: "'Courier New', monospace",
                letterSpacing: "0.15em",
              }}
            >
              04 / CONTACT
            </div>
          </div>
        </div>

        {/* Right Side Content */}
        <div
          style={{
            width: "45vw",
            height: "100vh",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "8vh 6vw",
            boxSizing: "border-box",
          }}
        >
          {/* Subtle Background Text */}
          <div 
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#1A0E08",
              opacity: 0.03,
              fontFamily: "'Playfair Display', serif",
              fontSize: "18vw",
              fontWeight: 900,
              whiteSpace: "nowrap",
              pointerEvents: "none",
            }}
          >
            END
          </div>

          <img
            src="/__mockup/images/product-coffee.png"
            alt="Dusk Brew Co. Cold Brew Bottle"
            style={{
              height: "75vh",
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(10px 20px 30px rgba(0, 0, 0, 0.15))",
              zIndex: 10,
              position: "relative",
              left: "-3vw",
            }}
          />
        </div>
      </div>
    </div>
  );
}
```
