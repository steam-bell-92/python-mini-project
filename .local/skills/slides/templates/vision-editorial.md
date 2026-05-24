# Vision Editorial

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference image (filename pattern: `query-choice-<timestamp>-<template-id>.png`). Open and visually read that image. Your first slide MUST match this preview image as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Only after confirming a close match should you proceed with the remaining slides, maintaining consistent styling guided by the description below.

The "VisionEditorial" template embodies a modern and sophisticated aesthetic, characterized by its use of a dark color palette and elegant typography. The background features a solid black color (#000) with a background image of an eye macro located at "/__mockup/photos/eye-macro.png", which is overlaid with a linear gradient transitioning from rgba(0,0,0,0.8) to rgba(0,0,0,0.3) and then to transparent. Text elements utilize a color scheme of white (#FFFFFF) and a soft pinkish hue (#C4A0A0), with the font families "Inter" for body text and "Playfair Display" for headings, creating a contrast between modern sans-serif and classic serif styles. Key layout elements include a content container positioned on the left side of the screen, a vertical accent line, and a structured arrangement of headers, titles, and footers, all contributing to a clean and organized presentation. The overall aesthetic feel can be described as elegant and contemporary.

## Source Code

**Component:** `VisionEditorial`

### Slide 1 — Title (`slide-styles/VisionEditorial.tsx`)

```tsx
export function VisionEditorial() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/eye-macro.png" 
        alt="Vision Editorial Background" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0
        }} 
      />

      {/* Gradient Overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 45%, transparent 60%)",
        zIndex: 1
      }} />

      {/* Content Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "50vw",
        height: "100vh",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 6vw"
      }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2vw", height: "0.1vh", backgroundColor: "#C4A0A0" }} />
            <span style={{ 
              color: "#C4A0A0", 
              fontSize: "0.8vw", 
              letterSpacing: "0.2vw", 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300
            }}>
              THE VISION ISSUE
            </span>
          </div>
          <span style={{ 
            color: "#C4A0A0", 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "1vw",
            fontStyle: "italic"
          }}>
            NO. 01
          </span>
        </div>

        {/* Main Title Section */}
        <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          gap: "2vw" 
        }}>
          {/* Vertical Accent Line */}
          <div style={{ 
            width: "0.2vw", 
            height: "auto", 
            backgroundColor: "#C4A0A0",
            opacity: 0.6
          }} />
          
          <div style={{ display: "flex", flexDirection: "column", gap: "3vh", maxWidth: "35vw" }}>
            <h1 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: "6vw", 
              color: "#FFFFFF", 
              margin: 0,
              lineHeight: 1.1,
              fontStyle: "italic",
              fontWeight: 400
            }}>
              Example Deck
            </h1>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.2vw",
              color: "#FFFFFF",
              opacity: 0.8,
              margin: 0,
              lineHeight: 1.5,
              fontWeight: 300
            }}>
              Your compelling subtitle goes here. Describe your big idea in a single sentence.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
          <span style={{ 
            color: "#FFFFFF", 
            fontFamily: "'Inter', sans-serif", 
            fontSize: "1vw",
            letterSpacing: "0.1vw",
            textTransform: "lowercase",
            fontVariant: "small-caps"
          }}>
            acme.co
          </span>
          <span style={{ 
            color: "#C4A0A0", 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "0.9vw",
            fontStyle: "italic"
          }}>
            Beauty & Culture
          </span>
        </div>

      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/VisionEditorialPage2.tsx`)

```tsx
export function VisionEditorialPage2() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", fontFamily: "'Inter', sans-serif" }}>
      {/* Right Side Image */}
      <img 
        src="/__mockup/photos/fashion-studio.png" 
        alt="Vision Editorial Content" 
        style={{
          position: "absolute",
          top: "10vh",
          right: "5vw",
          width: "40vw",
          height: "80vh",
          objectFit: "cover",
          zIndex: 0,
          opacity: 0.8
        }} 
      />

      {/* Left Content Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "55vw",
        height: "100vh",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 6vw"
      }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2vw", height: "0.1vh", backgroundColor: "#C4A0A0" }} />
            <span style={{ 
              color: "#C4A0A0", 
              fontSize: "0.8vw", 
              letterSpacing: "0.2vw", 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300
            }}>
              BRAND ESSENCE
            </span>
          </div>
        </div>

        {/* Main Content Section */}
        <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          gap: "2vw" 
        }}>
          {/* Vertical Accent Line */}
          <div style={{ 
            width: "0.2vw", 
            height: "auto", 
            backgroundColor: "#C4A0A0",
            opacity: 0.6
          }} />
          
          <div style={{ display: "flex", flexDirection: "column", gap: "3vh", maxWidth: "40vw" }}>
            <h2 style={{ 
              fontFamily: "'Playfair Display', serif", 
              fontSize: "4vw", 
              color: "#FFFFFF", 
              margin: 0,
              lineHeight: 1.1,
              fontStyle: "italic",
              fontWeight: 400
            }}>
              A New Perspective
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1vw",
              color: "#FFFFFF",
              opacity: 0.8,
              margin: 0,
              lineHeight: 1.6,
              fontWeight: 300
            }}>
              We believe in the power of visual storytelling. Our approach merges classic editorial sensibilities with modern digital aesthetics, creating experiences that resonate on a deeper level. Every detail is curated to reflect a commitment to quality and timeless elegance.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1vw",
              color: "#C4A0A0",
              margin: 0,
              lineHeight: 1.6,
              fontWeight: 400,
              fontStyle: "italic"
            }}>
              "Elegance is not about being noticed, it's about being remembered."
            </p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span style={{ 
              color: "#FFFFFF", 
              fontFamily: "'Inter', sans-serif", 
              fontSize: "1vw",
              letterSpacing: "0.1vw",
              textTransform: "lowercase",
              fontVariant: "small-caps"
            }}>
              acme.co
            </span>
            <span style={{ 
              color: "#C4A0A0", 
              fontFamily: "'Playfair Display', serif", 
              fontSize: "0.9vw",
              fontStyle: "italic"
            }}>
              Beauty & Culture
            </span>
          </div>
          <span style={{ 
            color: "#C4A0A0", 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "1vw",
            fontStyle: "italic"
          }}>
            02
          </span>
        </div>

      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/VisionEditorialPage3.tsx`)

```tsx
export function VisionEditorialPage3() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#0A0A0A", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Content Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 6vw"
      }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2vw", height: "0.1vh", backgroundColor: "#C4A0A0" }} />
            <span style={{ 
              color: "#C4A0A0", 
              fontSize: "0.8vw", 
              letterSpacing: "0.2vw", 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300
            }}>
              BY THE NUMBERS
            </span>
          </div>
        </div>

        {/* Data Section */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8vh", marginTop: "4vh" }}>
          
          <h2 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "3.5vw", 
            color: "#FFFFFF", 
            margin: 0,
            lineHeight: 1.1,
            fontStyle: "italic",
            fontWeight: 400,
            textAlign: "center"
          }}>
            The Impact of Design
          </h2>

          <div style={{ display: "flex", justifyContent: "center", gap: "8vw", width: "100%" }}>
            {/* Stat 1 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: "7vw", 
                color: "#C4A0A0", 
                lineHeight: 1,
                fontStyle: "italic"
              }}>
                85<span style={{ fontSize: "4vw" }}>%</span>
              </div>
              <div style={{ width: "4vw", height: "0.1vh", backgroundColor: "#FFFFFF", opacity: 0.3 }} />
              <div style={{ 
                color: "#FFFFFF", 
                opacity: 0.8, 
                fontSize: "1vw", 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                textAlign: "center",
                maxWidth: "15vw"
              }}>
                Increase in brand recall through consistent visual language
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: "7vw", 
                color: "#C4A0A0", 
                lineHeight: 1,
                fontStyle: "italic"
              }}>
                2.4<span style={{ fontSize: "4vw" }}>x</span>
              </div>
              <div style={{ width: "4vw", height: "0.1vh", backgroundColor: "#FFFFFF", opacity: 0.3 }} />
              <div style={{ 
                color: "#FFFFFF", 
                opacity: 0.8, 
                fontSize: "1vw", 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                textAlign: "center",
                maxWidth: "15vw"
              }}>
                Higher engagement rates on editorial-style content
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2vh" }}>
              <div style={{ 
                fontFamily: "'Playfair Display', serif", 
                fontSize: "7vw", 
                color: "#C4A0A0", 
                lineHeight: 1,
                fontStyle: "italic"
              }}>
                12<span style={{ fontSize: "4vw" }}>m</span>
              </div>
              <div style={{ width: "4vw", height: "0.1vh", backgroundColor: "#FFFFFF", opacity: 0.3 }} />
              <div style={{ 
                color: "#FFFFFF", 
                opacity: 0.8, 
                fontSize: "1vw", 
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                textAlign: "center",
                maxWidth: "15vw"
              }}>
                Global audience reached in the past quarter alone
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span style={{ 
              color: "#FFFFFF", 
              fontFamily: "'Inter', sans-serif", 
              fontSize: "1vw",
              letterSpacing: "0.1vw",
              textTransform: "lowercase",
              fontVariant: "small-caps"
            }}>
              acme.co
            </span>
            <span style={{ 
              color: "#C4A0A0", 
              fontFamily: "'Playfair Display', serif", 
              fontSize: "0.9vw",
              fontStyle: "italic"
            }}>
              Beauty & Culture
            </span>
          </div>
          <span style={{ 
            color: "#C4A0A0", 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "1vw",
            fontStyle: "italic"
          }}>
            03
          </span>
        </div>

      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/VisionEditorialPage4.tsx`)

```tsx
export function VisionEditorialPage4() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative", backgroundColor: "#000", fontFamily: "'Inter', sans-serif" }}>
      {/* Background Image */}
      <img 
        src="/__mockup/photos/origami-fashion.png" 
        alt="Vision Editorial Closing" 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0
        }} 
      />

      {/* Dark Overlay for text readability */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.6)",
        zIndex: 1
      }} />

      {/* Content Container */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "8vh 6vw"
      }}>
        
        {/* Top Header */}
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "2vw", height: "0.1vh", backgroundColor: "#C4A0A0" }} />
            <span style={{ 
              color: "#C4A0A0", 
              fontSize: "0.8vw", 
              letterSpacing: "0.2vw", 
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300
            }}>
              GET IN TOUCH
            </span>
            <div style={{ width: "2vw", height: "0.1vh", backgroundColor: "#C4A0A0" }} />
          </div>
        </div>

        {/* Main Content Section */}
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center",
          justifyContent: "center",
          gap: "4vh",
          textAlign: "center"
        }}>
          
          <h1 style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "6vw", 
            color: "#FFFFFF", 
            margin: 0,
            lineHeight: 1.1,
            fontStyle: "italic",
            fontWeight: 400
          }}>
            Shape the Future
          </h1>
          
          <div style={{ width: "6vw", height: "0.2vh", backgroundColor: "#C4A0A0", margin: "1vh 0" }} />

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.2vw",
            color: "#FFFFFF",
            opacity: 0.8,
            margin: 0,
            lineHeight: 1.5,
            fontWeight: 300,
            maxWidth: "35vw"
          }}>
            Partner with us to create experiences that transcend the ordinary. Let's start the conversation.
          </p>

          <div style={{
            marginTop: "3vh",
            padding: "2vh 4vw",
            border: "1px solid rgba(196, 160, 160, 0.4)",
            color: "#FFFFFF",
            fontFamily: "'Inter', sans-serif",
            fontSize: "1vw",
            letterSpacing: "0.1vw",
            cursor: "pointer",
            transition: "all 0.3s ease"
          }}>
            STUDIO@ACME.CO
          </div>

        </div>

        {/* Footer */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5vh" }}>
            <span style={{ 
              color: "#FFFFFF", 
              fontFamily: "'Inter', sans-serif", 
              fontSize: "1vw",
              letterSpacing: "0.1vw",
              textTransform: "lowercase",
              fontVariant: "small-caps"
            }}>
              acme.co
            </span>
            <span style={{ 
              color: "#C4A0A0", 
              fontFamily: "'Playfair Display', serif", 
              fontSize: "0.9vw",
              fontStyle: "italic"
            }}>
              Beauty & Culture
            </span>
          </div>
          <span style={{ 
            color: "#C4A0A0", 
            fontFamily: "'Playfair Display', serif", 
            fontSize: "1vw",
            fontStyle: "italic"
          }}>
            04
          </span>
        </div>

      </div>
    </div>
  );
}
```
