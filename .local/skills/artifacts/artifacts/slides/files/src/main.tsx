import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Router } from "wouter";

import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <App />
    </Router>
  </StrictMode>,
);
