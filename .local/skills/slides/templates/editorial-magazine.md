# Editorial Magazine

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference images (filename pattern: `query-choice-<timestamp>-editorial-magazine.png` for slide 1, plus `-page2.png`, `-page3.png`, `-page4.png` for interior slides). Open and visually read ALL 4 images. Your first slide MUST match the title slide preview as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Use the interior slide images as reference for the remaining slides, maintaining consistent styling guided by the description below.

The \

## Source Code

**Component:** `EditorialMagazine`

### Slide 1 — Title (`slide-styles/EditorialMagazine.tsx`)

```tsx
export function EditorialMagazine() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      backgroundColor: "#F5F2ED",
      color: "#2C2C2C",
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      boxSizing: "border-box",
      padding: "5vh 5vw"
    }}>
      {/* Decorative large serif letter as anchor */}
      <div style={{
        position: "absolute",
        top: "-5vh",
        right: "-2vw",
        fontSize: "80vh",
        fontFamily: "'Playfair Display', serif",
        color: "rgba(140, 140, 140, 0.08)",
        lineHeight: 1,
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 0
      }}>
        B
      </div>

      {/* Top Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderBottom: "1px solid rgba(140, 140, 140, 0.4)",
        paddingBottom: "2vh",
        marginBottom: "10vh",
        zIndex: 1
      }}>
        <div style={{
          fontSize: "1vw",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: "#8C8C8C",
          fontWeight: 400
        }}>
          acme.co (by Example Company)
        </div>
        <div style={{
          fontSize: "1vw",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: "#8C8C8C"
        }}>
          2026
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        zIndex: 1
      }}>
        {/* Left Side: Huge Title */}
        <div style={{ flex: 1.5, paddingRight: "5vw" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "10vw",
            lineHeight: 0.9,
            fontWeight: 400,
            margin: 0,
            color: "#2C2C2C",
            letterSpacing: "-0.02em"
          }}>
            Example<br />
            <span style={{ fontStyle: "italic", color: "#C45B28" }}>Deck</span>
          </h1>
        </div>

        {/* Right Side: Supporting text offset */}
        <div style={{ flex: 1, borderLeft: "1px solid rgba(140, 140, 140, 0.4)", paddingLeft: "4vw", paddingTop: "5vh", paddingBottom: "5vh" }}>
          <div style={{
            fontSize: "0.9vw",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            color: "#C45B28",
            marginBottom: "3vh",
            fontWeight: 500
          }}>
            The Overview
          </div>
          <p style={{
            fontSize: "2vw",
            lineHeight: 1.4,
            fontWeight: 300,
            margin: 0,
            color: "#2C2C2C"
          }}>
            Your compelling subtitle goes here.
          </p>
          <p style={{
            fontSize: "1.2vw",
            lineHeight: 1.6,
            color: "#8C8C8C",
            marginTop: "3vh",
            maxWidth: "85%",
            fontWeight: 400
          }}>
            Describe your big idea in a single sentence.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "auto",
        borderTop: "1px solid rgba(140, 140, 140, 0.4)",
        paddingTop: "2vh",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 1
      }}>
        <div style={{
          fontSize: "0.8vw",
          textTransform: "uppercase",
          letterSpacing: "0.4em",
          color: "#8C8C8C"
        }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{
          fontSize: "0.8vw",
          textTransform: "uppercase",
          letterSpacing: "0.4em",
          color: "#8C8C8C"
        }}>
          Vol. 1
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/EditorialMagazinePage2.tsx`)

```tsx
export function EditorialMagazinePage2() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      backgroundColor: "#F5F2ED",
      color: "#2C2C2C",
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      padding: "5vh 5vw",
      position: "relative"
    }}>
      {/* Top Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: "6vh"
      }}>
        <div style={{
          fontSize: "0.8vw",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: "#8C8C8C",
          fontWeight: 400
        }}>
          Example Company Quarterly
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1
      }}>
        {/* Pull Quote Section */}
        <div style={{
          marginBottom: "6vh",
          position: "relative",
          paddingLeft: "3vw",
          paddingRight: "10vw"
        }}>
          <span style={{
            position: "absolute",
            left: "-1vw",
            top: "-2vh",
            fontSize: "12vw",
            fontFamily: "'Playfair Display', serif",
            color: "rgba(196, 91, 40, 0.15)",
            lineHeight: 1,
            pointerEvents: "none",
            userSelect: "none"
          }}>
            "
          </span>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "3vw",
            lineHeight: 1.3,
            fontWeight: 400,
            margin: 0,
            color: "#2C2C2C"
          }}>
            Innovation is not about saying yes to everything. It's about saying no to all but the most crucial features.
          </h2>
        </div>

        {/* Horizontal Rule */}
        <div style={{
          width: "100%",
          height: "1px",
          backgroundColor: "rgba(44, 44, 44, 0.8)",
          marginBottom: "6vh"
        }} />

        {/* 2 Columns Section */}
        <div style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          justifyContent: "space-between"
        }}>
          {/* Column 1 */}
          <div style={{
            flex: "0 0 45%",
            textAlign: "justify",
            fontSize: "0.95vw",
            lineHeight: 1.8,
            color: "#4A4A4A"
          }}>
            <span style={{
              float: "left",
              fontFamily: "'Playfair Display', serif",
              fontSize: "4.5vw",
              lineHeight: 0.8,
              paddingTop: "0.5vh",
              paddingRight: "1vw",
              color: "#C45B28"
            }}>
              I
            </span>
            n the rapidly evolving landscape of modern business, the ability to focus on what truly matters is the defining characteristic of successful enterprises. We often find ourselves surrounded by an overwhelming abundance of opportunities, each promising unprecedented growth and innovation. However, the disciplined approach to product development requires a rigorous filtering process. By identifying the core value proposition and stripping away the non-essential, organizations can deliver experiences that resonate deeply with their target audience.
            <br /><br />
            This methodology is not merely about reduction; it is about concentration. When resources are dedicated to refining the most crucial features, the resulting product achieves a level of polish and utility that a sprawling, feature-heavy alternative simply cannot match. The elegance of a streamlined solution often speaks louder than the cacophony of a complex system.
          </div>

          {/* Vertical Gutter Rule */}
          <div style={{
            width: "1px",
            backgroundColor: "rgba(140, 140, 140, 0.4)",
            height: "100%"
          }} />

          {/* Column 2 */}
          <div style={{
            flex: "0 0 45%",
            textAlign: "justify",
            fontSize: "0.95vw",
            lineHeight: 1.8,
            color: "#4A4A4A"
          }}>
            Furthermore, the commitment to simplicity fosters an environment where true innovation can thrive. When teams are not bogged down by the maintenance of tangential features, they are free to iterate rapidly on the core functionality. This iterative process, guided by continuous user feedback, ensures that the product remains relevant and highly effective.
            <br /><br />
            In our strategic outlook for the upcoming quarters, we are doubling down on this philosophy. Our roadmap is defined not by the sheer volume of new capabilities we plan to introduce, but by the strategic impact of a select few enhancements. We are prioritizing depth over breadth, ensuring that every addition serves a distinct purpose and directly contributes to our overarching objectives. This focused approach will enable us to maintain our competitive edge and continue delivering exceptional value to our stakeholders.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "auto",
        borderTop: "1px solid rgba(140, 140, 140, 0.4)",
        paddingTop: "2vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <div style={{
          fontSize: "0.8vw",
          textTransform: "uppercase",
          letterSpacing: "0.4em",
          color: "#8C8C8C"
        }}>
          Example Company, Inc. / Confidential
        </div>
        
        {/* Page Number Circle */}
        <div style={{
          width: "3vw",
          height: "3vw",
          borderRadius: "50%",
          border: "1px solid #C45B28",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "'Playfair Display', serif",
          fontSize: "1vw",
          color: "#C45B28",
          fontStyle: "italic"
        }}>
          02
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/EditorialMagazinePage3.tsx`)

```tsx
export function EditorialMagazinePage3() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      backgroundColor: "#F5F2ED",
      color: "#2C2C2C",
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      boxSizing: "border-box",
      padding: "5vh 5vw"
    }}>
      {/* Decorative large serif letter as anchor */}
      <div style={{
        position: "absolute",
        top: "-5vh",
        right: "-2vw",
        fontSize: "80vh",
        fontFamily: "'Playfair Display', serif",
        color: "rgba(140, 140, 140, 0.08)",
        lineHeight: 1,
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 0
      }}>
        D
      </div>

      {/* Top Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderBottom: "1px solid rgba(140, 140, 140, 0.4)",
        paddingBottom: "2vh",
        marginBottom: "6vh",
        zIndex: 1
      }}>
        <div style={{
          fontSize: "1vw",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: "#8C8C8C",
          fontWeight: 400
        }}>
          acme.co (by Example Company)
        </div>
        <div style={{
          fontSize: "1vw",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: "#8C8C8C"
        }}>
          2026
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        zIndex: 1
      }}>
        {/* Left Side: Title and Intro */}
        <div style={{ flex: 1, paddingRight: "4vw", paddingTop: "2vh", display: "flex", flexDirection: "column" }}>
          <div style={{
            fontSize: "0.9vw",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            color: "#C45B28",
            marginBottom: "3vh",
            fontWeight: 500
          }}>
            The Metrics
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "5vw",
            lineHeight: 1,
            fontWeight: 400,
            margin: "0 0 3vh 0",
            color: "#2C2C2C",
            letterSpacing: "-0.02em"
          }}>
            Growth in <span style={{ fontStyle: "italic", color: "#C45B28" }}>Numbers</span>
          </h2>
          <p style={{
            fontSize: "1.2vw",
            lineHeight: 1.6,
            color: "#8C8C8C",
            fontWeight: 400,
            maxWidth: "90%"
          }}>
            A quantitative look at our year-over-year performance, highlighting key areas of expansion and market penetration across global sectors.
          </p>
        </div>

        {/* Right Side: Data Grid */}
        <div style={{ 
          flex: 1.5, 
          borderLeft: "1px solid rgba(140, 140, 140, 0.4)", 
          paddingLeft: "4vw", 
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "4vh 4vw"
        }}>
          {/* Stat 1 */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "5vw", fontFamily: "'Playfair Display', serif", color: "#2C2C2C", lineHeight: 1 }}>
              245<span style={{ color: "#C45B28", fontSize: "3vw" }}>%</span>
            </div>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "#8C8C8C", marginTop: "1vh", borderTop: "1px solid rgba(140, 140, 140, 0.2)", paddingTop: "1vh" }}>
              Revenue Growth
            </div>
            <p style={{ fontSize: "0.9vw", color: "#2C2C2C", marginTop: "1vh", lineHeight: 1.5 }}>
              Consistent upward trajectory over the last four quarters.
            </p>
          </div>

          {/* Stat 2 */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "5vw", fontFamily: "'Playfair Display', serif", color: "#2C2C2C", lineHeight: 1 }}>
              1.2<span style={{ color: "#C45B28", fontSize: "3vw" }}>M</span>
            </div>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "#8C8C8C", marginTop: "1vh", borderTop: "1px solid rgba(140, 140, 140, 0.2)", paddingTop: "1vh" }}>
              Active Users
            </div>
            <p style={{ fontSize: "0.9vw", color: "#2C2C2C", marginTop: "1vh", lineHeight: 1.5 }}>
              Monthly active engagement across all primary platforms.
            </p>
          </div>

          {/* Stat 3 */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "5vw", fontFamily: "'Playfair Display', serif", color: "#2C2C2C", lineHeight: 1 }}>
              89<span style={{ color: "#C45B28", fontSize: "3vw" }}>k</span>
            </div>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "#8C8C8C", marginTop: "1vh", borderTop: "1px solid rgba(140, 140, 140, 0.2)", paddingTop: "1vh" }}>
              Enterprise Clients
            </div>
            <p style={{ fontSize: "0.9vw", color: "#2C2C2C", marginTop: "1vh", lineHeight: 1.5 }}>
              B2B integration and long-term contract renewals.
            </p>
          </div>

          {/* Stat 4 */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ fontSize: "5vw", fontFamily: "'Playfair Display', serif", color: "#2C2C2C", lineHeight: 1 }}>
              98<span style={{ color: "#C45B28", fontSize: "3vw" }}>%</span>
            </div>
            <div style={{ fontSize: "1vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "#8C8C8C", marginTop: "1vh", borderTop: "1px solid rgba(140, 140, 140, 0.2)", paddingTop: "1vh" }}>
              Retention Rate
            </div>
            <p style={{ fontSize: "0.9vw", color: "#2C2C2C", marginTop: "1vh", lineHeight: 1.5 }}>
              Industry-leading customer loyalty and satisfaction scores.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "auto",
        borderTop: "1px solid rgba(140, 140, 140, 0.4)",
        paddingTop: "2vh",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 1
      }}>
        <div style={{
          fontSize: "0.8vw",
          textTransform: "uppercase",
          letterSpacing: "0.4em",
          color: "#8C8C8C"
        }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{
          fontSize: "0.8vw",
          textTransform: "uppercase",
          letterSpacing: "0.4em",
          color: "#8C8C8C"
        }}>
          03
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/EditorialMagazinePage4.tsx`)

```tsx
export function EditorialMagazinePage4() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      backgroundColor: "#F5F2ED",
      color: "#2C2C2C",
      fontFamily: "'Inter', sans-serif",
      display: "flex",
      flexDirection: "column",
      position: "relative",
      boxSizing: "border-box",
      padding: "5vh 5vw"
    }}>
      {/* Decorative large serif letter as anchor */}
      <div style={{
        position: "absolute",
        top: "-5vh",
        left: "-2vw",
        fontSize: "80vh",
        fontFamily: "'Playfair Display', serif",
        color: "rgba(140, 140, 140, 0.08)",
        lineHeight: 1,
        pointerEvents: "none",
        userSelect: "none",
        zIndex: 0
      }}>
        C
      </div>

      {/* Top Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        borderBottom: "1px solid rgba(140, 140, 140, 0.4)",
        paddingBottom: "2vh",
        marginBottom: "10vh",
        zIndex: 1
      }}>
        <div style={{
          fontSize: "1vw",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: "#8C8C8C",
          fontWeight: 400
        }}>
          acme.co (by Example Company)
        </div>
        <div style={{
          fontSize: "1vw",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: "#8C8C8C"
        }}>
          2026
        </div>
      </div>

      {/* Main Content Area */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        zIndex: 1
      }}>
        {/* Left Side: Contact Info */}
        <div style={{ flex: 1, paddingRight: "4vw", borderRight: "1px solid rgba(140, 140, 140, 0.4)", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{
            fontSize: "0.9vw",
            textTransform: "uppercase",
            letterSpacing: "0.4em",
            color: "#C45B28",
            marginBottom: "4vh",
            fontWeight: 500
          }}>
            Get In Touch
          </div>
          
          <div style={{ marginBottom: "4vh" }}>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "#8C8C8C", marginBottom: "1vh" }}>Office</div>
            <div style={{ fontSize: "1.5vw", color: "#2C2C2C", fontFamily: "'Playfair Display', serif" }}>100 Editorial Ave<br/>New York, NY 10012</div>
          </div>
          
          <div style={{ marginBottom: "4vh" }}>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "#8C8C8C", marginBottom: "1vh" }}>Direct</div>
            <div style={{ fontSize: "1.5vw", color: "#2C2C2C", fontFamily: "'Playfair Display', serif" }}>hello@example.co<br/>+1 (555) 000-0000</div>
          </div>
          
          <div>
            <div style={{ fontSize: "0.8vw", textTransform: "uppercase", letterSpacing: "0.2em", color: "#8C8C8C", marginBottom: "1vh" }}>Digital</div>
            <div style={{ fontSize: "1.5vw", color: "#2C2C2C", fontFamily: "'Playfair Display', serif", textDecoration: "underline", textDecorationColor: "rgba(140,140,140,0.4)", textUnderlineOffset: "4px" }}>www.example.co</div>
          </div>
        </div>

        {/* Right Side: Huge Title */}
        <div style={{ flex: 1.5, paddingLeft: "6vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "9vw",
            lineHeight: 0.9,
            fontWeight: 400,
            margin: "0 0 2vh 0",
            color: "#2C2C2C",
            letterSpacing: "-0.02em"
          }}>
            Thank You.<br />
            <span style={{ fontStyle: "italic", color: "#C45B28" }}>Let's Build.</span>
          </h1>
          <p style={{
            fontSize: "1.5vw",
            lineHeight: 1.6,
            color: "#8C8C8C",
            marginTop: "2vh",
            maxWidth: "80%",
            fontWeight: 400
          }}>
            We look forward to creating exceptional experiences with your team.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "auto",
        borderTop: "1px solid rgba(140, 140, 140, 0.4)",
        paddingTop: "2vh",
        display: "flex",
        justifyContent: "space-between",
        zIndex: 1
      }}>
        <div style={{
          fontSize: "0.8vw",
          textTransform: "uppercase",
          letterSpacing: "0.4em",
          color: "#8C8C8C"
        }}>
          Example Company, Inc. / Confidential
        </div>
        <div style={{
          fontSize: "0.8vw",
          textTransform: "uppercase",
          letterSpacing: "0.4em",
          color: "#8C8C8C"
        }}>
          04
        </div>
      </div>
    </div>
  );
}
```
