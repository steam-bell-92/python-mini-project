# Developer Api Docs

**Visual Reference**: Before generating any slides or styles, list the `attached_assets/` directory to find the template reference images (filename pattern: `query-choice-<timestamp>-developer-api-docs.png` for slide 1, plus `-page2.png`, `-page3.png`, `-page4.png` for interior slides). Open and visually read ALL 4 images. Your first slide MUST match the title slide preview as closely as possible — replicate its exact layout, color palette, typography, and composition. Build the first slide, then take a screenshot and compare it against the reference image to verify fidelity. Use the interior slide images as reference for the remaining slides, maintaining consistent styling guided by the description below.

The \

## Source Code

**Component:** `DeveloperApiDocs`

### Slide 1 — Title (`slide-styles/DeveloperApiDocs.tsx`)

```tsx
export function DeveloperApiDocs() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A1B26",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        color: "#C0CAF5",
        position: "relative",
      }}
    >
      {/* Left Sidebar Mockup */}
      <div
        style={{
          width: "22vw",
          height: "100vh",
          borderRight: "1px solid rgba(255, 255, 255, 0.05)",
          padding: "5vh 3vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "6vh" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#7AA2F7", borderRadius: "0.3vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#FFFFFF" }}>acme.co</div>
        </div>

        <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#565F89", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2vh" }}>
          Getting Started
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh", marginBottom: "4vh" }}>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Authentication</div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Pagination</div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Errors</div>
        </div>

        <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#565F89", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2vh" }}>
          Resources
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ fontSize: "1vw", color: "#7AA2F7", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <span style={{ width: "4px", height: "1.2vw", backgroundColor: "#7AA2F7", borderRadius: "2px", marginLeft: "-3vw" }} />
            Example Deck
          </div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Users</div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Workspaces</div>
        </div>
        
        <div style={{ marginTop: "auto", fontSize: "0.8vw", color: "#565F89" }}>
          v2.0.0 • 2026
        </div>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          padding: "8vh 6vw",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div style={{ fontSize: "1vw", color: "#7AA2F7", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: "2vh" }}>
          API Reference
        </div>
        
        <h1
          style={{
            fontSize: "4.5vw",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 2vh 0",
            letterSpacing: "-0.02em",
          }}
        >
          Example Deck
        </h1>
        
        <p
          style={{
            fontSize: "1.4vw",
            color: "#9AA5CE",
            lineHeight: 1.6,
            maxWidth: "40vw",
            margin: "0 0 6vh 0",
            fontWeight: 400,
          }}
        >
          Your compelling subtitle goes here. Describe your big idea in a single sentence.
        </p>

        {/* Endpoint Box */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "2vh 2vw",
            backgroundColor: "rgba(158, 206, 106, 0.1)",
            border: "1px solid rgba(158, 206, 106, 0.2)",
            borderRadius: "0.5vw",
            marginBottom: "4vh",
            width: "fit-content",
          }}
        >
          <div style={{ fontSize: "1.1vw", fontWeight: 700, color: "#9ECE6A", marginRight: "1.5vw", fontFamily: "'DM Mono', monospace" }}>
            GET
          </div>
          <div style={{ fontSize: "1.2vw", color: "#FFFFFF", fontFamily: "'DM Mono', monospace" }}>
            /api/v2/resources
          </div>
        </div>

        <div style={{ display: "flex", gap: "4vw" }}>
          {/* Code Example Column */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#FFFFFF", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "1vh" }}>
              Request Example
            </div>
            
            <div
              style={{
                backgroundColor: "#16161E",
                borderRadius: "0.5vw",
                padding: "2.5vh 2vw",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                fontFamily: "'DM Mono', monospace",
                fontSize: "1vw",
                lineHeight: 1.6,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ color: "#7AA2F7" }}>curl <span style={{ color: "#C0CAF5" }}>-X GET</span> \</div>
              <div style={{ color: "#E0AF68", paddingLeft: "2vw" }}>"https://api.acme.co/v2/resources" <span style={{ color: "#C0CAF5" }}>\</span></div>
              <div style={{ color: "#C0CAF5", paddingLeft: "2vw" }}>-H <span style={{ color: "#9ECE6A" }}>"Authorization: Bearer YOUR_API_KEY"</span></div>
            </div>
          </div>

          {/* Response Column */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "3vh" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "1vh" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#FFFFFF" }}>Response</div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5vw" }}>
                <div style={{ width: "0.6vw", height: "0.6vw", backgroundColor: "#9ECE6A", borderRadius: "50%" }} />
                <div style={{ fontSize: "0.9vw", fontFamily: "'DM Mono', monospace", color: "#9ECE6A" }}>200 OK</div>
              </div>
            </div>
            
            <div
              style={{
                backgroundColor: "#16161E",
                borderRadius: "0.5vw",
                padding: "2.5vh 2vw",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                fontFamily: "'DM Mono', monospace",
                fontSize: "1vw",
                lineHeight: 1.6,
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.5)",
              }}
            >
              <div style={{ color: "#C0CAF5" }}>{`{`}</div>
              <div style={{ paddingLeft: "2vw", color: "#C0CAF5" }}>
                <span style={{ color: "#7AA2F7" }}>"id"</span>: <span style={{ color: "#E0AF68" }}>"res_12345"</span>,
              </div>
              <div style={{ paddingLeft: "2vw", color: "#C0CAF5" }}>
                <span style={{ color: "#7AA2F7" }}>"object"</span>: <span style={{ color: "#E0AF68" }}>"resource"</span>,
              </div>
              <div style={{ paddingLeft: "2vw", color: "#C0CAF5" }}>
                <span style={{ color: "#7AA2F7" }}>"created_at"</span>: <span style={{ color: "#FF9E64" }}>1689345200</span>,
              </div>
              <div style={{ paddingLeft: "2vw", color: "#C0CAF5" }}>
                <span style={{ color: "#7AA2F7" }}>"status"</span>: <span style={{ color: "#E0AF68" }}>"active"</span>
              </div>
              <div style={{ color: "#C0CAF5" }}>{`}`}</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "auto", display: "flex", justifyContent: "flex-end", width: "100%" }}>
          <div style={{ fontSize: "0.9vw", color: "#565F89" }}>
            Example Company, Inc.
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 2 (`slide-pages/DeveloperApiDocsPage2.tsx`)

```tsx
export function DeveloperApiDocsPage2() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A1B26",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        color: "#C0CAF5",
        position: "relative",
      }}
    >
      {/* Left Sidebar Mockup */}
      <div
        style={{
          width: "22vw",
          height: "100vh",
          borderRight: "1px solid rgba(255, 255, 255, 0.05)",
          padding: "5vh 3vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "6vh" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#7AA2F7", borderRadius: "0.3vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#FFFFFF" }}>acme.co</div>
        </div>

        <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#565F89", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2vh" }}>
          Getting Started
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh", marginBottom: "4vh" }}>
          <div style={{ fontSize: "1vw", color: "#7AA2F7", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <span style={{ width: "4px", height: "1.2vw", backgroundColor: "#7AA2F7", borderRadius: "2px", marginLeft: "-3vw" }} />
            Authentication
          </div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Pagination</div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Errors</div>
        </div>

        <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#565F89", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2vh" }}>
          Resources
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Example Deck</div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Users</div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Workspaces</div>
        </div>
        
        <div style={{ marginTop: "auto", fontSize: "0.8vw", color: "#565F89" }}>
          v2.0.0 • 2026
        </div>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          padding: "8vh 6vw",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div style={{ fontSize: "1vw", color: "#7AA2F7", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: "2vh" }}>
          Core Concepts
        </div>
        
        <h1
          style={{
            fontSize: "4.5vw",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 2vh 0",
            letterSpacing: "-0.02em",
          }}
        >
          Authentication
        </h1>
        
        <p
          style={{
            fontSize: "1.4vw",
            color: "#9AA5CE",
            lineHeight: 1.6,
            maxWidth: "40vw",
            margin: "0 0 4vh 0",
            fontWeight: 400,
          }}
        >
          Authenticate your API requests using Bearer tokens. All API requests must be made over HTTPS.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "4vh", width: "100%", maxWidth: "50vw" }}>
          
          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "rgba(122, 162, 247, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#7AA2F7", fontSize: "1.2vw", fontWeight: "bold", flexShrink: 0 }}>1</div>
            <div>
              <div style={{ fontSize: "1.4vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "1vh" }}>Obtain your API Key</div>
              <div style={{ fontSize: "1.1vw", color: "#9AA5CE", lineHeight: 1.5 }}>
                You can generate API keys from the developer dashboard. Keep your keys secure and do not share them in publicly accessible areas.
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "rgba(158, 206, 106, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ECE6A", fontSize: "1.2vw", fontWeight: "bold", flexShrink: 0 }}>2</div>
            <div style={{ width: "100%" }}>
              <div style={{ fontSize: "1.4vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "1vh" }}>Set the Authorization Header</div>
              <div style={{ fontSize: "1.1vw", color: "#9AA5CE", lineHeight: 1.5, marginBottom: "2vh" }}>
                Include the key in the HTTP headers of your requests.
              </div>
              <div
                style={{
                  backgroundColor: "#16161E",
                  borderRadius: "0.5vw",
                  padding: "2vh 2vw",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "1vw",
                  lineHeight: 1.6,
                  boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.5)",
                }}
              >
                <div style={{ color: "#C0CAF5" }}>Authorization: Bearer <span style={{ color: "#9ECE6A" }}>sk_live_123456789</span></div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: "2vw" }}>
            <div style={{ width: "3vw", height: "3vw", borderRadius: "50%", backgroundColor: "rgba(224, 175, 104, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#E0AF68", fontSize: "1.2vw", fontWeight: "bold", flexShrink: 0 }}>3</div>
            <div>
              <div style={{ fontSize: "1.4vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "1vh" }}>Handle Errors</div>
              <div style={{ fontSize: "1.1vw", color: "#9AA5CE", lineHeight: 1.5 }}>
                Requests with invalid or missing tokens will return a <span style={{ fontFamily: "'DM Mono', monospace", color: "#FF9E64", backgroundColor: "rgba(255, 158, 100, 0.1)", padding: "0.2vh 0.5vw", borderRadius: "0.2vw" }}>401 Unauthorized</span> error.
              </div>
            </div>
          </div>

        </div>

        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <div style={{ fontSize: "1vw", color: "#565F89", fontWeight: 500 }}>
            02
          </div>
          <div style={{ fontSize: "0.9vw", color: "#565F89" }}>
            Example Company, Inc.
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 3 (`slide-pages/DeveloperApiDocsPage3.tsx`)

```tsx
export function DeveloperApiDocsPage3() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A1B26",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        color: "#C0CAF5",
        position: "relative",
      }}
    >
      {/* Left Sidebar Mockup */}
      <div
        style={{
          width: "22vw",
          height: "100vh",
          borderRight: "1px solid rgba(255, 255, 255, 0.05)",
          padding: "5vh 3vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1vw", marginBottom: "6vh" }}>
          <div style={{ width: "1.5vw", height: "1.5vw", backgroundColor: "#7AA2F7", borderRadius: "0.3vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#FFFFFF" }}>acme.co</div>
        </div>

        <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#565F89", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2vh" }}>
          Getting Started
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh", marginBottom: "4vh" }}>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Authentication</div>
          <div style={{ fontSize: "1vw", color: "#7AA2F7", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.5vw" }}>
            <span style={{ width: "4px", height: "1.2vw", backgroundColor: "#7AA2F7", borderRadius: "2px", marginLeft: "-3vw" }} />
            Pagination
          </div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Errors</div>
        </div>

        <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#565F89", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2vh" }}>
          Resources
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Example Deck</div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Users</div>
          <div style={{ fontSize: "1vw", color: "#C0CAF5", opacity: 0.7 }}>Workspaces</div>
        </div>
        
        <div style={{ marginTop: "auto", fontSize: "0.8vw", color: "#565F89" }}>
          v2.0.0 • 2026
        </div>
      </div>

      {/* Main Content Area */}
      <div
        style={{
          flex: 1,
          padding: "8vh 6vw",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div style={{ fontSize: "1vw", color: "#7AA2F7", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600, marginBottom: "2vh" }}>
          Core Concepts
        </div>
        
        <h1
          style={{
            fontSize: "4.5vw",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 2vh 0",
            letterSpacing: "-0.02em",
          }}
        >
          Cursor Pagination
        </h1>
        
        <p
          style={{
            fontSize: "1.4vw",
            color: "#9AA5CE",
            lineHeight: 1.6,
            maxWidth: "40vw",
            margin: "0 0 5vh 0",
            fontWeight: 400,
          }}
        >
          We use cursor-based pagination for faster, more reliable list requests. 
          Use the <span style={{ fontFamily: "'DM Mono', monospace", color: "#7AA2F7" }}>next_cursor</span> from a response to fetch the subsequent page.
        </p>

        {/* Visual Data Section */}
        <div style={{ display: "flex", gap: "4vw", alignItems: "center" }}>
          
          {/* Code Represenation */}
          <div style={{ flex: 1, backgroundColor: "#16161E", borderRadius: "0.5vw", border: "1px solid rgba(255, 255, 255, 0.05)", padding: "3vh 2vw", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.5)" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#FFFFFF", marginBottom: "2vh", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1vh" }}>
              Page 1 Response
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", lineHeight: 1.6, color: "#C0CAF5" }}>
              <div>{`{`}</div>
              <div style={{ paddingLeft: "2vw" }}>
                <span style={{ color: "#7AA2F7" }}>"data"</span>: <span style={{ color: "#C0CAF5" }}>[ ...items... ],</span>
              </div>
              <div style={{ paddingLeft: "2vw" }}>
                <span style={{ color: "#7AA2F7" }}>"has_more"</span>: <span style={{ color: "#FF9E64" }}>true,</span>
              </div>
              <div style={{ paddingLeft: "2vw", backgroundColor: "rgba(158, 206, 106, 0.15)", borderRadius: "0.3vw", padding: "0.5vh 2vw", margin: "0.5vh -2vw" }}>
                <span style={{ color: "#7AA2F7" }}>"next_cursor"</span>: <span style={{ color: "#9ECE6A" }}>"eyJpZCI6IjEyMyJ9"</span>
              </div>
              <div>{`}`}</div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", color: "#565F89", fontSize: "2vw" }}>
            →
          </div>

          {/* Request Representation */}
          <div style={{ flex: 1, backgroundColor: "#16161E", borderRadius: "0.5vw", border: "1px solid rgba(255, 255, 255, 0.05)", padding: "3vh 2vw", boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.5)" }}>
            <div style={{ fontSize: "1.2vw", fontWeight: 600, color: "#FFFFFF", marginBottom: "2vh", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1vh" }}>
              Page 2 Request
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "1vw", lineHeight: 1.6, color: "#C0CAF5" }}>
              <div style={{ color: "#7AA2F7", marginBottom: "1vh" }}>GET /api/v2/users</div>
              <div style={{ paddingLeft: "2vw" }}>
                ?limit=50
              </div>
              <div style={{ paddingLeft: "2vw", backgroundColor: "rgba(158, 206, 106, 0.15)", borderRadius: "0.3vw", padding: "0.5vh 2vw", margin: "0.5vh -2vw" }}>
                &cursor=<span style={{ color: "#9ECE6A" }}>eyJpZCI6IjEyMyJ9</span>
              </div>
            </div>
          </div>

        </div>

        <div style={{ marginTop: "6vh", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw" }}>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", padding: "2.5vh 2vw", borderRadius: "0.5vw", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ fontSize: "1.1vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "1vh" }}>Performance</div>
            <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>O(1) database queries, ensuring constant latency regardless of page depth.</div>
          </div>
          <div style={{ backgroundColor: "rgba(255, 255, 255, 0.02)", padding: "2.5vh 2vw", borderRadius: "0.5vw", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
            <div style={{ fontSize: "1.1vw", color: "#FFFFFF", fontWeight: 600, marginBottom: "1vh" }}>Data Consistency</div>
            <div style={{ fontSize: "1vw", color: "#9AA5CE", lineHeight: 1.5 }}>Eliminates duplicate items if new records are inserted while paginating.</div>
          </div>
        </div>

        <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
          <div style={{ fontSize: "1vw", color: "#565F89", fontWeight: 500 }}>
            03
          </div>
          <div style={{ fontSize: "0.9vw", color: "#565F89" }}>
            Example Company, Inc.
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Slide 4 (`slide-pages/DeveloperApiDocsPage4.tsx`)

```tsx
export function DeveloperApiDocsPage4() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#1A1B26",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        color: "#C0CAF5",
        position: "relative",
      }}
    >
      {/* Content Area - Full Width for closing slide */}
      <div
        style={{
          flex: 1,
          padding: "10vh 8vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          background: "radial-gradient(circle at center, rgba(122, 162, 247, 0.1) 0%, transparent 60%)",
        }}
      >
        <div style={{ width: "4vw", height: "4vw", backgroundColor: "#7AA2F7", borderRadius: "1vw", marginBottom: "4vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#1A1B26", borderRadius: "0.5vw" }} />
        </div>
        
        <h1
          style={{
            fontSize: "5vw",
            fontWeight: 700,
            color: "#FFFFFF",
            margin: "0 0 3vh 0",
            letterSpacing: "-0.02em",
            textAlign: "center",
          }}
        >
          Start Building Today
        </h1>
        
        <p
          style={{
            fontSize: "1.5vw",
            color: "#9AA5CE",
            lineHeight: 1.6,
            maxWidth: "40vw",
            margin: "0 0 6vh 0",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Join thousands of developers building scalable, reliable integrations with our robust API infrastructure.
        </p>

        <div style={{ display: "flex", gap: "2vw" }}>
          <div
            style={{
              padding: "2vh 3vw",
              backgroundColor: "#7AA2F7",
              color: "#1A1B26",
              fontSize: "1.2vw",
              fontWeight: 600,
              borderRadius: "0.5vw",
              cursor: "pointer",
            }}
          >
            Get API Key
          </div>
          <div
            style={{
              padding: "2vh 3vw",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              color: "#FFFFFF",
              fontSize: "1.2vw",
              fontWeight: 600,
              borderRadius: "0.5vw",
              cursor: "pointer",
            }}
          >
            View Full Reference
          </div>
        </div>
        
        <div style={{ marginTop: "10vh", display: "flex", gap: "4vw", borderTop: "1px solid rgba(255, 255, 255, 0.05)", paddingTop: "4vh" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "1vw", height: "1vw", backgroundColor: "#9ECE6A", borderRadius: "50%" }} />
            <div style={{ fontSize: "1.1vw", color: "#C0CAF5" }}>99.99% Uptime</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "1vw", height: "1vw", backgroundColor: "#E0AF68", borderRadius: "50%" }} />
            <div style={{ fontSize: "1.1vw", color: "#C0CAF5" }}>24/7 Developer Support</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
            <div style={{ width: "1vw", height: "1vw", backgroundColor: "#7AA2F7", borderRadius: "50%" }} />
            <div style={{ fontSize: "1.1vw", color: "#C0CAF5" }}>SDKs for Node, Python & Go</div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "8vh", left: "8vw", right: "8vw", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "1vw", color: "#565F89", fontWeight: 500 }}>
            04
          </div>
          <div style={{ fontSize: "0.9vw", color: "#565F89" }}>
            Example Company, Inc.
          </div>
        </div>
      </div>
    </div>
  );
}
```
