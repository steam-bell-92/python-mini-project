/*
  theme.js - Core theme management and persistence.
*/

export function syncThemeColor(theme) {
  const meta = document.getElementById("themeColorMeta");
  if (meta) {
    meta.setAttribute("content", theme === "light" ? "#f8fafc" : "#0c0f1a");
  }
}

export function updateThemeToggleAria(themeToggle, isLight) {
  if (!themeToggle) return;
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark mode" : "Switch to light mode"
  );
}

export function initTheme() {
  const html = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const heroThemeToggle = document.getElementById("heroThemeToggle");

  const savedTheme = localStorage.getItem("theme") || "dark";
  html.setAttribute("data-theme", savedTheme);
  syncThemeColor(savedTheme);

  const updateIconAndAria = (theme) => {
    const isDark = theme === "dark";
    const iconClass = isDark ? "fas fa-sun" : "fas fa-moon";

    if (themeToggle) {
      themeToggle.innerHTML = `<i class="${iconClass}" aria-hidden="true"></i>`;
      updateThemeToggleAria(themeToggle, theme === "light");
    }
    if (heroThemeToggle) {
      heroThemeToggle.innerHTML = `<i class="${iconClass}" aria-hidden="true"></i>`;
    }
  };

  updateIconAndAria(savedTheme);

  const toggleTheme = () => {
    const current = html.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    syncThemeColor(next);
    updateIconAndAria(next);

    // Dispatch custom themeChanged event for other components to react (like dynamic canvas)
    const event = new CustomEvent("themeChanged", { detail: { theme: next } });
    document.dispatchEvent(event);
  };

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
  if (heroThemeToggle) {
    heroThemeToggle.addEventListener("click", toggleTheme);
  }
}
