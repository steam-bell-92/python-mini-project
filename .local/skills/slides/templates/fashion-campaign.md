# Fashion Campaign

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "FashionCampaign" template embodies a modern and sophisticated aesthetic, suitable for high-end fashion presentations. It features a solid black background color (#000000) with a dark overlay gradient that transitions from rgba(0,0,0,0.85) to rgba(0,0,0,0.4) and then to transparent. The text is primarily in white (#FFFFFF) and light gray (#C0C0C0), utilizing the 'Inter' sans-serif font for body text and the 'Playfair Display' serif font for the main heading, creating a stylish contrast. Key layout elements include a full-screen background image of a fashion studio, positioned absolutely, and a content container that is flexibly arranged to center the text, with decorative horizontal lines and a corner label for branding. The overall aesthetic feel is "chic elegance."

## Source Code

**Component:** `FashionCampaign`

### Slide 1 — Title (`slide-styles/FashionCampaign.tsx`)

```tsx
export function FashionCampaign() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000000",
      }}
    >
      {/* Background Photo */}
      <img
        src="/__mockup/photos/fashion-studio.png"
        alt="Fashion Studio"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      {/* Dark Overlay Gradient */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 35%, transparent 55%)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "55vw",
          height: "100%",
          padding: "10vh 8vw",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.4em",
            color: "#FFFFFF",
            textTransform: "uppercase",
            marginBottom: "3vh",
          }}
        >
          CAMPAIGN SS/26
        </div>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "7vw",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "0.02em",
          }}
        >
          Example Deck
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.4vw",
            fontWeight: 100,
            color: "#C0C0C0",
            marginTop: "4vh",
            marginBottom: 0,
            lineHeight: 1.6,
            maxWidth: "35vw",
            letterSpacing: "0.02em",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        <div
          style={{
            marginTop: "8vh",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "2vw",
          }}
        >
          <div
            style={{
              width: "4vw",
              height: "1px",
              backgroundColor: "#FFFFFF",
              opacity: 0.5,
            }}
          />
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.7vw",
              fontWeight: 300,
              letterSpacing: "0.5em",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            LOOK BOOK
          </div>
        </div>
      </div>

      {/* Corner Label */}
      <div
        style={{
          position: "absolute",
          bottom: "6vh",
          right: "6vw",
          zIndex: 2,
          fontFamily: "'Inter', sans-serif",
          fontSize: "0.8vw",
          fontWeight: 300,
          letterSpacing: "0.3em",
          color: "#FFFFFF",
          textTransform: "lowercase",
          opacity: 0.7,
        }}
      >
        acme.co
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/FashionCampaignPage2.tsx`)

```tsx
export function FashionCampaignPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000000",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "10vh",
          left: "8vw",
          right: "8vw",
          zIndex: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "40vw" }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8vw",
              fontWeight: 300,
              letterSpacing: "0.4em",
              color: "#FFFFFF",
              textTransform: "uppercase",
              marginBottom: "3vh",
            }}
          >
            THE VISION
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "4.5vw",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#FFFFFF",
              margin: 0,
              lineHeight: 1.1,
              letterSpacing: "0.02em",
            }}
          >
            A New Direction
          </h2>
        </div>
        <div style={{ width: "35vw", paddingTop: "5vh" }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              fontWeight: 100,
              color: "#C0C0C0",
              margin: 0,
              lineHeight: 1.6,
              letterSpacing: "0.02em",
              marginBottom: "4vh",
            }}
          >
            We are redefining the boundaries of modern aesthetics. Our approach blends timeless elegance with avant-garde innovation, creating silhouettes that speak to both the past and the future.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              fontWeight: 100,
              color: "#C0C0C0",
              margin: 0,
              lineHeight: 1.6,
              letterSpacing: "0.02em",
            }}
          >
            The new collection focuses on texture, movement, and the subtle interplay of light and shadow across carefully selected fabrics.
          </p>
          
          <div
            style={{
              marginTop: "8vh",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "2vw",
            }}
          >
            <div
              style={{
                width: "4vw",
                height: "1px",
                backgroundColor: "#FFFFFF",
                opacity: 0.5,
              }}
            />
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7vw",
                fontWeight: 300,
                letterSpacing: "0.5em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              READ MORE
            </div>
          </div>
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
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: "#FFFFFF",
            opacity: 0.7,
          }}
        >
          02
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: "#FFFFFF",
            textTransform: "lowercase",
            opacity: 0.7,
          }}
        >
          acme.co
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/FashionCampaignPage3.tsx`)

```tsx
export function FashionCampaignPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Background Image / Texture idea */}
      <img
        src="/__mockup/photos/fashion-studio.png"
        alt="Fashion Studio Detail"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.6,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to right, rgba(0,0,0,1) 40%, rgba(0,0,0,0.5) 70%, transparent 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "10vh 8vw",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "50vw",
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.4em",
            color: "#FFFFFF",
            textTransform: "uppercase",
            marginBottom: "6vh",
          }}
        >
          COLLECTION STATS
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6vh" }}>
          {/* Stat 1 */}
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "5vw",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1,
              }}
            >
              24
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9vw",
                fontWeight: 300,
                letterSpacing: "0.2em",
                color: "#C0C0C0",
                marginTop: "1vh",
                textTransform: "uppercase",
              }}
            >
              Distinct Looks
            </div>
          </div>

          {/* Stat 2 */}
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "5vw",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1,
              }}
            >
              12
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9vw",
                fontWeight: 300,
                letterSpacing: "0.2em",
                color: "#C0C0C0",
                marginTop: "1vh",
                textTransform: "uppercase",
              }}
            >
              Bespoke Fabrics
            </div>
          </div>

          {/* Stat 3 */}
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "5vw",
                fontStyle: "italic",
                fontWeight: 400,
                color: "#FFFFFF",
                margin: 0,
                lineHeight: 1,
              }}
            >
              03
            </div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.9vw",
                fontWeight: 300,
                letterSpacing: "0.2em",
                color: "#C0C0C0",
                marginTop: "1vh",
                textTransform: "uppercase",
              }}
            >
              Global Showrooms
            </div>
          </div>
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
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: "#FFFFFF",
            opacity: 0.7,
          }}
        >
          03
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: "#FFFFFF",
            textTransform: "lowercase",
            opacity: 0.7,
          }}
        >
          acme.co
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/FashionCampaignPage4.tsx`)

```tsx
export function FashionCampaignPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="/__mockup/photos/fashion-studio.png"
        alt="Fashion Studio"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.8) 100%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "6vw",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#FFFFFF",
            margin: 0,
            lineHeight: 1.1,
            letterSpacing: "0.02em",
          }}
        >
          Join the Movement
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.2vw",
            fontWeight: 100,
            color: "#C0C0C0",
            marginTop: "3vh",
            marginBottom: "6vh",
            maxWidth: "30vw",
            lineHeight: 1.6,
            letterSpacing: "0.02em",
          }}
        >
          Discover the collection exclusively in our flagship stores and select boutique partners worldwide.
        </p>

        <div
          style={{
            padding: "1.5vh 3vw",
            border: "1px solid #FFFFFF",
            color: "#FFFFFF",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          CONTACT US
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
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: "#FFFFFF",
            opacity: 0.7,
          }}
        >
          04
        </div>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.8vw",
            fontWeight: 300,
            letterSpacing: "0.3em",
            color: "#FFFFFF",
            textTransform: "lowercase",
            opacity: 0.7,
          }}
        >
          acme.co
        </div>
      </div>
    </div>
  );
}
```
