# Marble Elegance

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "MarbleElegance" template features a sophisticated and refined aesthetic, characterized by its use of a light marble texture. The background color is a soft off-white, specifically #F9F8F6, complemented by a marble texture image located at "/__mockup/photos/marble-texture.jpg". Text is rendered in a dark gray color (#2C2A29) for the main content, with lighter gray accents (#666 for secondary text and #555 for paragraph text) and a very light gray (#999) for footer text. The primary font used is 'Playfair Display', a serif font for the main title, while 'Inter', a sans-serif font, is used for the subtitle and other text elements, providing a modern contrast. The layout includes a split design with a left section for the marble background and a right section for text, featuring absolute positioning for branding elements and a clean, structured arrangement that enhances readability. The overall aesthetic feel can be described as elegant and modern.

## Source Code

**Component:** `MarbleElegance`

### Slide 1 — Title (`slide-styles/MarbleElegance.tsx`)

```tsx
export function MarbleElegance() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F9F8F6",
        fontFamily: "'Playfair Display', serif",
        display: "flex",
        color: "#2C2A29",
      }}
    >
      <div
        style={{
          width: "40vw",
          height: "100vh",
          backgroundImage: 'url("/__mockup/photos/marble-texture.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRight: "1px solid rgba(0,0,0,0.1)",
        }}
      />
      
      <div
        style={{
          width: "60vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10vh 8vw",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: "6vh", left: "8vw", fontFamily: "'Inter', sans-serif", fontSize: "1vw", fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666" }}>
          acme.co
        </div>
        
        <div style={{ position: "absolute", top: "6vh", right: "8vw", fontFamily: "'Inter', sans-serif", fontSize: "1vw", fontWeight: 400, color: "#666" }}>
          2026
        </div>

        <h1 style={{ fontSize: "7vw", fontWeight: 400, margin: "0 0 4vh 0", lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          Example <br/> Deck
        </h1>
        
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.5vw", fontWeight: 300, color: "#555", margin: 0, maxWidth: "40vw", lineHeight: 1.6 }}>
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        <div style={{ position: "absolute", bottom: "6vh", left: "8vw", fontFamily: "'Inter', sans-serif", fontSize: "0.9vw", fontWeight: 400, color: "#999", letterSpacing: "0.05em" }}>
          Example Company, Inc. / Confidential
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/MarbleElegancePage2.tsx`)

```tsx
export function MarbleElegancePage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F9F8F6",
        fontFamily: "'Inter', sans-serif",
        color: "#2C2A29",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "6vh",
          left: "6vw",
          fontSize: "1vw",
          fontWeight: 400,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#666",
        }}
      >
        acme.co
      </div>
      
      <div
        style={{
          position: "absolute",
          top: "6vh",
          right: "6vw",
          fontSize: "1vw",
          fontWeight: 400,
          color: "#666",
        }}
      >
        2026
      </div>

      <div
        style={{
          padding: "20vh 15vw",
          display: "flex",
          gap: "10vw",
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4.5vw",
              fontWeight: 400,
              margin: "0 0 4vh 0",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            The Art of<br />Simplicity
          </h2>
          <p
            style={{
              fontSize: "1.2vw",
              fontWeight: 300,
              color: "#555",
              lineHeight: 1.6,
              marginBottom: "3vh",
            }}
          >
            Discover how elegant design principles can transform complex problems into clear, actionable solutions. Our approach focuses on what matters most.
          </p>
        </div>
        
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: "4vh",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2vw",
                fontWeight: 400,
                margin: "0 0 1vh 0",
                color: "#2C2A29",
              }}
            >
              Refined Process
            </h3>
            <p
              style={{
                fontSize: "1vw",
                fontWeight: 300,
                color: "#666",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              We distill information down to its purest form, ensuring that every element serves a distinct purpose and drives understanding.
            </p>
          </div>
          
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#2C2A29",
            }}
          />
          
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2vw",
                fontWeight: 400,
                margin: "0 0 1vh 0",
                color: "#2C2A29",
              }}
            >
              Timeless Execution
            </h3>
            <p
              style={{
                fontSize: "1vw",
                fontWeight: 300,
                color: "#666",
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              By relying on foundational aesthetic concepts, we build frameworks that outlast fleeting trends and provide lasting value.
            </p>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "6vw",
          fontSize: "0.9vw",
          fontWeight: 400,
          color: "#999",
          letterSpacing: "0.05em",
        }}
      >
        Example Company, Inc. / Confidential
      </div>
      
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "6vw",
          fontSize: "0.9vw",
          fontWeight: 400,
          color: "#999",
        }}
      >
        02
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/MarbleElegancePage3.tsx`)

```tsx
export function MarbleElegancePage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F9F8F6",
        fontFamily: "'Inter', sans-serif",
        color: "#2C2A29",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "6vh",
          left: "6vw",
          fontSize: "1vw",
          fontWeight: 400,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#666",
        }}
      >
        acme.co
      </div>
      
      <div
        style={{
          position: "absolute",
          top: "6vh",
          right: "6vw",
          fontSize: "1vw",
          fontWeight: 400,
          color: "#666",
        }}
      >
        2026
      </div>

      <div
        style={{
          padding: "15vh 6vw",
          boxSizing: "border-box",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "3.5vw",
            fontWeight: 400,
            margin: "0 0 6vh 0",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
            textAlign: "center",
          }}
        >
          Measured Impact
        </h2>

        <div
          style={{
            display: "flex",
            gap: "4vw",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "22vw",
              height: "45vh",
              backgroundColor: "#EAE7E1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "2vw",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "4vw",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                color: "#2C2A29",
                lineHeight: 1,
              }}
            >
              74%
            </div>
            <div
              style={{
                fontSize: "1vw",
                color: "#666",
                marginTop: "1vh",
                fontWeight: 300,
              }}
            >
              Increase in Engagement
            </div>
            <div
              style={{
                position: "absolute",
                top: "2vw",
                right: "2vw",
                width: "1vw",
                height: "1vw",
                borderRadius: "50%",
                backgroundColor: "#2C2A29",
              }}
            />
          </div>

          <div
            style={{
              width: "22vw",
              height: "55vh",
              backgroundColor: "#DCD8CF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "2vw",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "4vw",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                color: "#2C2A29",
                lineHeight: 1,
              }}
            >
              2.5x
            </div>
            <div
              style={{
                fontSize: "1vw",
                color: "#666",
                marginTop: "1vh",
                fontWeight: 300,
              }}
            >
              Return on Investment
            </div>
            <div
              style={{
                position: "absolute",
                top: "2vw",
                right: "2vw",
                width: "1vw",
                height: "1vw",
                borderRadius: "50%",
                backgroundColor: "#2C2A29",
              }}
            />
          </div>

          <div
            style={{
              width: "22vw",
              height: "40vh",
              backgroundColor: "#EAE7E1",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "2vw",
              boxSizing: "border-box",
              position: "relative",
            }}
          >
            <div
              style={{
                fontSize: "4vw",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                color: "#2C2A29",
                lineHeight: 1,
              }}
            >
              1M+
            </div>
            <div
              style={{
                fontSize: "1vw",
                color: "#666",
                marginTop: "1vh",
                fontWeight: 300,
              }}
            >
              Active Users Reached
            </div>
            <div
              style={{
                position: "absolute",
                top: "2vw",
                right: "2vw",
                width: "1vw",
                height: "1vw",
                borderRadius: "50%",
                backgroundColor: "#2C2A29",
              }}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          left: "6vw",
          fontSize: "0.9vw",
          fontWeight: 400,
          color: "#999",
          letterSpacing: "0.05em",
        }}
      >
        Example Company, Inc. / Confidential
      </div>
      
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "6vw",
          fontSize: "0.9vw",
          fontWeight: 400,
          color: "#999",
        }}
      >
        03
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/MarbleElegancePage4.tsx`)

```tsx
export function MarbleElegancePage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#F9F8F6",
        fontFamily: "'Inter', sans-serif",
        color: "#2C2A29",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "50vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "10vh 8vw",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "6vh",
            left: "8vw",
            fontSize: "1vw",
            fontWeight: 400,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#666",
          }}
        >
          acme.co
        </div>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6vw",
            fontWeight: 400,
            margin: "0 0 3vh 0",
            lineHeight: 1.1,
            letterSpacing: "-0.01em",
          }}
        >
          Begin the<br />Journey
        </h2>
        
        <p
          style={{
            fontSize: "1.3vw",
            fontWeight: 300,
            color: "#555",
            lineHeight: 1.6,
            margin: "0 0 6vh 0",
            maxWidth: "30vw",
          }}
        >
          Reach out to discover how we can collaborate to elevate your brand's presence and impact.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ fontSize: "1.1vw", fontWeight: 400, color: "#2C2A29" }}>
            hello@acme.co
          </div>
          <div style={{ fontSize: "1.1vw", fontWeight: 400, color: "#2C2A29" }}>
            +1 (555) 123-4567
          </div>
          <div style={{ fontSize: "1.1vw", fontWeight: 400, color: "#2C2A29" }}>
            123 Design Avenue, NY
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "6vh",
            left: "8vw",
            fontSize: "0.9vw",
            fontWeight: 400,
            color: "#999",
            letterSpacing: "0.05em",
          }}
        >
          Example Company, Inc. / Confidential
        </div>
      </div>
      
      <div
        style={{
          width: "50vw",
          height: "100vh",
          backgroundColor: "#EAE7E1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "6vh",
            right: "6vw",
            fontSize: "1vw",
            fontWeight: 400,
            color: "#666",
          }}
        >
          2026
        </div>
        
        <div
          style={{
            width: "25vw",
            height: "25vw",
            border: "1px solid #2C2A29",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "23vw",
              height: "23vw",
              border: "1px solid rgba(44, 42, 41, 0.3)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              fontSize: "1.5vw",
              fontFamily: "'Playfair Display', serif",
              fontWeight: 400,
            }}
          >
            Thank You
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: "6vh",
            right: "6vw",
            fontSize: "0.9vw",
            fontWeight: 400,
            color: "#999",
          }}
        >
          04
        </div>
      </div>
    </div>
  );
}
```
