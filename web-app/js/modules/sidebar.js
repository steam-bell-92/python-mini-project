/*
  sidebar.js - Sidebar layout, category tabs, and mobile drawers.
*/

import { debounce } from "./utils.js";

export function initSidebar(onCategoryChange, showPlayground, showProjects) {
  const sidebarTabs = document.querySelectorAll(".sidebar-tab");
  const stickyTabs = document.querySelectorAll(".sticky-tab");
  const mobileSidebarToggle = document.getElementById("mobileSidebarToggle");
  const mainSidebar = document.getElementById("mainSidebar");
  const projectsSection = document.getElementById("projectsSection");
  const playgroundSection = document.getElementById("playgroundSection");
  const searchKbdHint = document.getElementById("searchKbdHint");
  const searchInput = document.getElementById("searchInput");

  const pageCategory = document.body.getAttribute("data-page");

  // Drawer Toggling
  if (mobileSidebarToggle && mainSidebar) {
    mobileSidebarToggle.addEventListener("click", () => {
      const active = mainSidebar.classList.toggle("open");
      mobileSidebarToggle.setAttribute("aria-expanded", active);
      const icon = mobileSidebarToggle.querySelector("i");
      if (icon) icon.className = active ? "fas fa-times" : "fas fa-bars";
    });

    document.addEventListener("click", (e) => {
      if (
        mainSidebar.classList.contains("open") &&
        !mainSidebar.contains(e.target) &&
        e.target !== mobileSidebarToggle
      ) {
        mainSidebar.classList.remove("open");
        mobileSidebarToggle.setAttribute("aria-expanded", "false");
        const icon = mobileSidebarToggle.querySelector("i");
        if (icon) icon.className = "fas fa-bars";
      }
    });
  }

  // Tabs Sync Helpers
  function syncSidebarTabs(category) {
    sidebarTabs.forEach((st) => {
      const selected = st.getAttribute("data-category") === category;
      st.classList.toggle("active", selected);
      st.setAttribute("aria-selected", selected ? "true" : "false");
      st.setAttribute("tabindex", selected ? "0" : "-1");
    });
  }

  function syncStickyTabs(category) {
    stickyTabs.forEach((st) => {
      const selected = st.getAttribute("data-sticky-category") === category;
      st.classList.toggle("active", selected);
      st.setAttribute("aria-selected", selected ? "true" : "false");
      st.setAttribute("tabindex", selected ? "0" : "-1");
    });
  }

  function handleCategoryClick(category) {
    if (pageCategory) {
      if (category === pageCategory) {
        const grid = document.getElementById("projectsGrid");
        if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      const pageMap = {
        all: "index.html",
        games: "games.html",
        math: "math.html",
        utilities: "utilities.html",
        favorites: "index.html?category=favorites",
        playground: "index.html?category=playground",
      };
      window.location.href = pageMap[category] || "index.html";
      return;
    }

    syncSidebarTabs(category);
    syncStickyTabs(category);

    if (category === "playground") {
      showPlayground();
      if (playgroundSection) {
        playgroundSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      showProjects();
      onCategoryChange(category);
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  sidebarTabs.forEach((st) => {
    st.addEventListener("click", () => {
      handleCategoryClick(st.getAttribute("data-category"));
    });
  });

  stickyTabs.forEach((st) => {
    st.addEventListener("click", () => {
      handleCategoryClick(st.getAttribute("data-sticky-category"));
    });
  });

  // Sidebar Active Scroll Observer
  if (!pageCategory && projectsSection) {
    const sidebarActiveObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible =
            entry.isIntersecting || entry.boundingClientRect.top < 200;
          document.body.classList.toggle("sidebar-active", isVisible);
        });
      },
      { threshold: 0.05 }
    );
    sidebarActiveObserver.observe(projectsSection);
  } else if (pageCategory) {
    document.body.classList.add("sidebar-active");
  }

  // Search Kbd Hint Watcher
  let kbdHintTimer;
  function showKbdHint() {
    if (!searchKbdHint) return;
    clearTimeout(kbdHintTimer);
    searchKbdHint.classList.add("visible");
    kbdHintTimer = setTimeout(() => {
      searchKbdHint.classList.remove("visible");
    }, 3000);
  }

  const bodyClassObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        const isActive = document.body.classList.contains("sidebar-active");
        if (isActive) {
          showKbdHint();
        } else {
          clearTimeout(kbdHintTimer);
          if (searchKbdHint) searchKbdHint.classList.remove("visible");
        }
      }
    });
  });

  bodyClassObserver.observe(document.body, { attributes: true });

  if (searchInput) {
    searchInput.addEventListener("focus", () => {
      clearTimeout(kbdHintTimer);
      if (searchKbdHint) searchKbdHint.classList.remove("visible");
    });
  }

  // Stats updates
  const projectCards = Array.from(document.querySelectorAll(".project-card"));
  const heroProjectCount = document.getElementById("heroProjectCount");
  const heroGameCount = document.getElementById("heroGameCount");
  const heroMathCount = document.getElementById("heroMathCount");
  const heroUtilityCount = document.getElementById("heroUtilityCount");
  const projectCountBadge = document.getElementById("projectCountBadge");

  const totalCount = projectCards.length;
  const gameCount = projectCards.filter(
    (c) => c.getAttribute("data-category") === "games"
  ).length;
  const mathCount = projectCards.filter(
    (c) => c.getAttribute("data-category") === "math"
  ).length;
  const utilityCount = projectCards.filter(
    (c) => c.getAttribute("data-category") === "utilities"
  ).length;

  if (heroProjectCount) heroProjectCount.textContent = String(totalCount);
  if (heroGameCount) heroGameCount.textContent = String(gameCount);
  if (heroMathCount) heroMathCount.textContent = String(mathCount);
  if (heroUtilityCount) heroUtilityCount.textContent = String(utilityCount);
  if (projectCountBadge)
    projectCountBadge.textContent = String(totalCount) + " projects";

  // Initial sync
  if (pageCategory) {
    syncSidebarTabs(pageCategory);
  } else {
    syncSidebarTabs("all");
  }
  syncStickyTabs("all");

  // Expose helpers for external updates (e.g. from search module)
  return {
    syncSidebarTabs,
    syncStickyTabs,
  };
}
