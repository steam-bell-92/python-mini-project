/*
  utils.js - Shared utilities and card visibility helper.
*/

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function safeRun(fn) {
  try {
    fn();
  } catch (e) {
    console.error(e);
  }
}

export function debounce(fn, ms) {
  let timer;
  return function (...args) {
    const ctx = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(ctx, args);
    }, ms);
  };
}

export function escapeHtml(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

/**
 * Unified project card filtering helper.
 * Filters cards based on both category and search query criteria.
 */
export function updateProjectVisibility(currentCategory, currentSearchQuery) {
  const projectCards = Array.from(document.querySelectorAll(".project-card"));
  const emptyState = document.getElementById("emptyState");
  const emptyStateHint = document.getElementById("emptyStateHint");
  const projectCountBadge = document.getElementById("projectCountBadge");
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  let visibleCount = 0;
  const query = currentSearchQuery
    ? currentSearchQuery.toLowerCase().trim()
    : "";

  projectCards.forEach((card) => {
    const category = card.getAttribute("data-category");
    const projectName = card.getAttribute("data-project");
    const isFav = favorites.includes(projectName);

    // Category match logic
    const catMatch =
      currentCategory === "all" ||
      (currentCategory === "favorites" && isFav) ||
      (currentCategory !== "favorites" && category === currentCategory);

    // Search match logic
    let searchMatch = true;
    if (query) {
      const title = (card.querySelector("h3")?.textContent || "").toLowerCase();
      const desc = (card.querySelector("p")?.textContent || "").toLowerCase();
      const tags = (card.getAttribute("data-tags") || "").toLowerCase();
      searchMatch =
        title.includes(query) || desc.includes(query) || tags.includes(query);
    }

    if (catMatch && searchMatch) {
      card.style.display = "";
      if (!prefersReducedMotion()) {
        card.style.animation = "fadeIn 0.6s ease";
      } else {
        card.style.animation = "none";
      }
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  if (emptyState) {
    emptyState.style.display = visibleCount === 0 ? "block" : "none";
    if (visibleCount === 0 && emptyStateHint && query) {
      emptyStateHint.textContent = `No projects match "${query}". Try a different keyword.`;
    } else if (visibleCount === 0 && emptyStateHint) {
      emptyStateHint.textContent =
        "Try adjusting your search or category filter.";
    }
  }

  if (projectCountBadge) {
    projectCountBadge.textContent = `${visibleCount} projects`;
  }
}
