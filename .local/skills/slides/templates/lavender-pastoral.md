# Lavender Pastoral

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "LavenderPastoral" template embodies a serene and elegant aesthetic, reminiscent of the French countryside. The background features a full-screen image of lavender fields located at the URL path "/__mockup/photos/lavender-provence.png". The overlaying content area has a soft background color of rgba(255, 252, 245, 0.88) and is bordered with a light, translucent brown (#B4A082) border. Text colors include a deep mauve (#4A2040) for the title, a muted lavender (#7A5A80) for the subtitle and decorative elements, and an italicized date. The font families used are 'Inter' for general text and 'Playfair Display' for the title and metadata, enhancing the template's refined feel. Key layout elements include a centered content box with rounded corners, a decorative fleur-de-lis icon, and a subtle separator line, all contributing to a tranquil and pastoral vibe. Overall, the aesthetic feel can be described as "elegant pastoral."

## Source Code

**Component:** `LavenderPastoral`

### Slide 1 — Title (`slide-styles/LavenderPastoral.tsx`)

```tsx
export function LavenderPastoral() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src="/__mockup/photos/lavender-provence.png"
        alt="Lavender Provence"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0,
        }}
      />
      
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "45vw",
          height: "55vh",
          backgroundColor: "rgba(255,252,245,0.88)",
          border: "1px solid rgba(180,160,130,0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "5vh 4vw",
          boxSizing: "border-box",
          boxShadow: "0 2vh 4vh rgba(0,0,0,0.1)",
        }}
      >
        {/* Top Provence + Fleur-de-lis */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5vh",
            color: "#7A5A80",
          }}
        >
          <div style={{ fontSize: "1.5vw", lineHeight: 1 }}>⚜</div>
          <div
            style={{
              fontSize: "0.8vw",
              letterSpacing: "0.3em",
              fontWeight: 500,
            }}
          >
            PROVENCE
          </div>
        </div>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#4A2040",
            fontSize: "4.5vw",
            margin: "4vh 0 2vh 0",
            fontWeight: 400,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Example Deck
        </h1>

        {/* Subtitle */}
        <p
          style={{
            color: "#7A5A80",
            fontSize: "1.2vw",
            lineHeight: 1.6,
            textAlign: "center",
            fontWeight: 300,
            margin: "0 0 4vh 0",
            maxWidth: "35vw",
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        {/* Separator Line */}
        <div
          style={{
            width: "15vw",
            height: "1px",
            backgroundColor: "#7A5A80",
            opacity: 0.3,
            margin: "auto 0",
          }}
        />

        {/* Bottom Metadata */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            color: "#7A5A80",
            alignItems: "flex-end",
            marginTop: "auto",
          }}
        >
          <div
            style={{
              fontStyle: "italic",
              fontSize: "1.1vw",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Été 2026
          </div>
          <div
            style={{
              fontSize: "0.9vw",
              letterSpacing: "0.1em",
              fontWeight: 500,
            }}
          >
            acme.co
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/LavenderPastoralPage2.tsx`)

```tsx
export function LavenderPastoralPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#FFFCF5",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: "1px solid rgba(180,160,130,0.4)",
          paddingBottom: "3vh",
          marginBottom: "6vh",
        }}
      >
        <div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#4A2040",
              fontSize: "3.5vw",
              margin: 0,
              fontWeight: 400,
            }}
          >
            The Art of Cultivation
          </h2>
          <p
            style={{
              color: "#7A5A80",
              fontSize: "1.2vw",
              margin: "1vh 0 0 0",
              fontWeight: 300,
            }}
          >
            Nurturing ideas from seed to blossom
          </p>
        </div>
        <div style={{ fontSize: "2.5vw", color: "#7A5A80", lineHeight: 1 }}>⚜</div>
      </div>

      <div style={{ display: "flex", gap: "4vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh", justifyContent: "center" }}>
          <p style={{ color: "#4A2040", fontSize: "1.3vw", lineHeight: 1.6, margin: 0 }}>
            In the heart of the valley, our approach combines traditional wisdom with 
            modern innovation. We believe that true quality cannot be rushed, and 
            that patience is the essential ingredient in any masterpiece.
          </p>
          
          <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start", marginTop: "2vh" }}>
            <div style={{ color: "#7A5A80", fontSize: "1.2vw", marginTop: "0.2vh", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>01</div>
            <div>
              <h3 style={{ color: "#4A2040", fontSize: "1.4vw", margin: "0 0 0.5vh 0", fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Preparation</h3>
              <p style={{ color: "#7A5A80", fontSize: "1vw", margin: 0, lineHeight: 1.5 }}>Laying the groundwork through careful research and deep understanding of the environment.</p>
            </div>
          </div>
          
          <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ color: "#7A5A80", fontSize: "1.2vw", marginTop: "0.2vh", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>02</div>
            <div>
              <h3 style={{ color: "#4A2040", fontSize: "1.4vw", margin: "0 0 0.5vh 0", fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Cultivation</h3>
              <p style={{ color: "#7A5A80", fontSize: "1vw", margin: 0, lineHeight: 1.5 }}>Tending to the delicate process with precision, care, and unwavering attention to detail.</p>
            </div>
          </div>
          
          <div style={{ display: "flex", gap: "1.5vw", alignItems: "flex-start" }}>
            <div style={{ color: "#7A5A80", fontSize: "1.2vw", marginTop: "0.2vh", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>03</div>
            <div>
              <h3 style={{ color: "#4A2040", fontSize: "1.4vw", margin: "0 0 0.5vh 0", fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>Harvest</h3>
              <p style={{ color: "#7A5A80", fontSize: "1vw", margin: 0, lineHeight: 1.5 }}>Reaping the rewards of patience, delivering exceptional results that stand the test of time.</p>
            </div>
          </div>
        </div>
        
        <div style={{ flex: 1, position: "relative", padding: "2vh 0 2vh 2vw" }}>
          <div style={{ 
            position: "absolute", 
            top: "4vh", 
            left: "4vw", 
            width: "calc(100% - 4vw)", 
            height: "calc(100% - 8vh)", 
            border: "1px solid rgba(180,160,130,0.6)", 
            zIndex: 0 
          }} />
          <img
            src="/__mockup/photos/lavender-provence.png"
            alt="Lavender fields"
            style={{
              width: "calc(100% - 4vw)",
              height: "calc(100% - 8vh)",
              objectFit: "cover",
              position: "relative",
              zIndex: 1,
              marginTop: "2vh",
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(180,160,130,0.4)",
          paddingTop: "2vh",
          marginTop: "4vh",
          color: "#7A5A80",
          fontSize: "0.9vw",
          letterSpacing: "0.05em",
        }}
      >
        <div>acme.co</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.1vw" }}>Page 2</div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/LavenderPastoralPage3.tsx`)

```tsx
export function LavenderPastoralPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#FFFCF5",
        display: "flex",
        flexDirection: "column",
        padding: "8vh 6vw",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "8vh",
        }}
      >
        <div>
          <p
            style={{
              color: "#7A5A80",
              fontSize: "1vw",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              margin: "0 0 1vh 0",
              fontWeight: 500,
            }}
          >
            By The Numbers
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#4A2040",
              fontSize: "3.5vw",
              margin: 0,
              fontWeight: 400,
            }}
          >
            A Year of Growth
          </h2>
        </div>
        <div style={{ fontSize: "2.5vw", color: "#7A5A80", lineHeight: 1 }}>⚜</div>
      </div>

      <div style={{ display: "flex", gap: "3vw", flex: 1, alignItems: "center", justifyContent: "center" }}>
        
        {/* Stat 1 */}
        <div style={{ 
          flex: 1, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          padding: "5vh 2vw",
          backgroundColor: "rgba(255,255,255,0.5)",
          border: "1px solid rgba(180,160,130,0.3)",
          boxShadow: "0 1vh 2vh rgba(0,0,0,0.03)",
        }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#4A2040", lineHeight: 1, marginBottom: "2vh" }}>
            14k
          </div>
          <div style={{ width: "4vw", height: "1px", backgroundColor: "#7A5A80", margin: "1vh 0 2vh 0", opacity: 0.5 }} />
          <div style={{ fontSize: "1.1vw", color: "#7A5A80", textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center" }}>
            Hectares Tended
          </div>
          <p style={{ fontSize: "0.9vw", color: "#4A2040", textAlign: "center", marginTop: "2vh", lineHeight: 1.5, opacity: 0.8 }}>
            Expanded across the pristine valleys of the southern region.
          </p>
        </div>

        {/* Stat 2 */}
        <div style={{ 
          flex: 1, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          padding: "5vh 2vw",
          backgroundColor: "#4A2040",
          border: "1px solid #4A2040",
          boxShadow: "0 2vh 4vh rgba(74,32,64,0.15)",
          transform: "scale(1.05)",
          zIndex: 2,
        }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "6vw", color: "#FFFCF5", lineHeight: 1, marginBottom: "2vh" }}>
            89%
          </div>
          <div style={{ width: "4vw", height: "1px", backgroundColor: "#FFFCF5", margin: "1vh 0 2vh 0", opacity: 0.5 }} />
          <div style={{ fontSize: "1.1vw", color: "#FFFCF5", textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center" }}>
            Purity Yield
          </div>
          <p style={{ fontSize: "0.9vw", color: "#FFFCF5", textAlign: "center", marginTop: "2vh", lineHeight: 1.5, opacity: 0.8 }}>
            Setting a new standard for organic essential extraction.
          </p>
        </div>

        {/* Stat 3 */}
        <div style={{ 
          flex: 1, 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          padding: "5vh 2vw",
          backgroundColor: "rgba(255,255,255,0.5)",
          border: "1px solid rgba(180,160,130,0.3)",
          boxShadow: "0 1vh 2vh rgba(0,0,0,0.03)",
        }}>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5vw", color: "#4A2040", lineHeight: 1, marginBottom: "2vh" }}>
            2.4m
          </div>
          <div style={{ width: "4vw", height: "1px", backgroundColor: "#7A5A80", margin: "1vh 0 2vh 0", opacity: 0.5 }} />
          <div style={{ fontSize: "1.1vw", color: "#7A5A80", textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center" }}>
            Artisan Units
          </div>
          <p style={{ fontSize: "0.9vw", color: "#4A2040", textAlign: "center", marginTop: "2vh", lineHeight: 1.5, opacity: 0.8 }}>
            Carefully packaged and delivered to our global partners.
          </p>
        </div>

      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(180,160,130,0.4)",
          paddingTop: "2vh",
          marginTop: "4vh",
          color: "#7A5A80",
          fontSize: "0.9vw",
          letterSpacing: "0.05em",
        }}
      >
        <div>acme.co</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.1vw" }}>Page 3</div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/LavenderPastoralPage4.tsx`)

```tsx
export function LavenderPastoralPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4A2040",
      }}
    >
      <div style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh", opacity: 0.15, zIndex: 0 }}>
        <img
          src="/__mockup/photos/lavender-provence.png"
          alt="Background"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "50vw",
          backgroundColor: "#FFFCF5",
          border: "1px solid rgba(180,160,130,0.5)",
          padding: "8vh 6vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxShadow: "0 4vh 8vh rgba(0,0,0,0.3)",
        }}
      >
        <div style={{ fontSize: "2.5vw", color: "#7A5A80", lineHeight: 1, marginBottom: "3vh" }}>⚜</div>
        
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#4A2040",
            fontSize: "4vw",
            margin: "0 0 2vh 0",
            fontWeight: 400,
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          Savor the Essence
        </h2>
        
        <p
          style={{
            color: "#7A5A80",
            fontSize: "1.2vw",
            textAlign: "center",
            lineHeight: 1.6,
            margin: "0 0 4vh 0",
            maxWidth: "30vw",
          }}
        >
          Join us in bringing the unparalleled beauty of Provence to the rest of the world.
        </p>

        <div style={{ display: "flex", gap: "2vw", marginBottom: "4vh" }}>
          <div style={{ 
            padding: "1.5vh 3vw", 
            backgroundColor: "#4A2040", 
            color: "#FFFCF5", 
            fontSize: "1vw", 
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            border: "1px solid #4A2040"
          }}>
            Partner With Us
          </div>
          <div style={{ 
            padding: "1.5vh 3vw", 
            backgroundColor: "transparent", 
            color: "#4A2040", 
            fontSize: "1vw", 
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            cursor: "pointer",
            border: "1px solid #4A2040"
          }}>
            View Catalog
          </div>
        </div>

        <div style={{ width: "100%", height: "1px", backgroundColor: "rgba(180,160,130,0.4)", margin: "2vh 0 4vh 0" }} />

        <div style={{ display: "flex", width: "100%", justifyContent: "space-between", color: "#4A2040", fontSize: "0.9vw" }}>
          <div>
            <strong>Email</strong><br />
            bonjour@acme.co
          </div>
          <div style={{ textAlign: "center" }}>
            <strong>Phone</strong><br />
            +33 1 23 45 67 89
          </div>
          <div style={{ textAlign: "right" }}>
            <strong>Address</strong><br />
            Valensole, France
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "4vh",
          left: "6vw",
          right: "6vw",
          display: "flex",
          justifyContent: "space-between",
          color: "#FFFCF5",
          fontSize: "0.9vw",
          letterSpacing: "0.05em",
          opacity: 0.8,
          zIndex: 1,
        }}
      >
        <div>acme.co</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: "1.1vw" }}>Page 4</div>
      </div>
    </div>
  );
}
```
