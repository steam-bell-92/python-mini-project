/*
  search.js - Interactive search suggestions, history, and keyboard navigations.
*/

import { debounce, prefersReducedMotion } from "./utils.js";

let recentSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");
let selectedSuggestionIndex = -1;

export function getRecentSearches() {
  return recentSearches;
}

export function initSearch(onSearchChange) {
  const searchInput = document.getElementById("searchInput");
  const searchDropdown = document.getElementById("searchDropdown");
  const searchLoader = document.getElementById("searchLoader");
  const recentSearchesList = document.getElementById("recentSearchesList");
  const recentSearchesSection = document.getElementById(
    "recentSearchesSection"
  );
  const resultsList = document.getElementById("resultsList");
  const resultsSection = document.getElementById("resultsSection");
  const tipsSection = document.getElementById("tipsSection");
  const noResultsMessage = document.getElementById("noResultsMessage");
  const projectsSection = document.getElementById("projectsSection");

  if (!searchInput) return;

  function getMatchingProjects(query) {
    if (!query) return [];
    const projectCards = Array.from(document.querySelectorAll(".project-card"));
    const matches = [];
    const q = query.toLowerCase();

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");
      const title = card.querySelector("h3")?.textContent || "";
      const desc = card.querySelector("p")?.textContent || "";
      const tags = (card.getAttribute("data-tags") || "").toLowerCase();

      const searchMatch =
        title.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        tags.includes(q);

      if (searchMatch) {
        matches.push({
          card,
          title,
          category,
        });
      }
    });
    return matches;
  }

  function highlightText(container, text, query) {
    const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp("(" + safe + ")", "gi"));
    parts.forEach((part) => {
      if (part.toLowerCase() === query.toLowerCase()) {
        const mark = document.createElement("mark");
        mark.style.background = "var(--accent-soft)";
        mark.style.color = "var(--accent)";
        mark.style.fontWeight = "600";
        mark.style.borderRadius = "2px";
        mark.style.padding = "0 2px";
        mark.textContent = part;
        container.appendChild(mark);
      } else if (part) {
        container.appendChild(document.createTextNode(part));
      }
    });
  }

  function closeDropdown() {
    if (searchDropdown) searchDropdown.classList.remove("active");
    searchInput.setAttribute("aria-expanded", "false");
  }

  function renderRecentSearches() {
    if (noResultsMessage) noResultsMessage.style.display = "none";
    if (!recentSearchesSection) return;

    if (recentSearches.length === 0) {
      recentSearchesSection.style.display = "none";
      if (tipsSection) tipsSection.style.display = "block";
      if (resultsSection) resultsSection.style.display = "none";
      return;
    }

    if (recentSearchesList) {
      recentSearchesList.innerHTML = "";
      recentSearches.slice(0, 5).forEach((search) => {
        const item = document.createElement("div");
        item.className = "dropdown-recent-item";

        const text = document.createElement("div");
        text.className = "dropdown-recent-text";

        const clock = document.createElement("i");
        clock.className = "fas fa-history";
        clock.style.opacity = "0.5";
        clock.style.fontSize = "0.8rem";

        const label = document.createElement("span");
        label.textContent = search;

        text.append(clock, label);

        const removeBtn = document.createElement("button");
        removeBtn.className = "dropdown-recent-remove";
        removeBtn.setAttribute("aria-label", "Remove search");
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';

        item.append(text, removeBtn);

        label.addEventListener("click", () => {
          searchInput.value = search;
          triggerSearch(search);
          closeDropdown();
        });

        removeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          recentSearches = recentSearches.filter((s) => s !== search);
          localStorage.setItem(
            "recentSearches",
            JSON.stringify(recentSearches)
          );
          renderRecentSearches();
        });

        recentSearchesList.appendChild(item);
      });
    }

    recentSearchesSection.style.display = "block";
    if (resultsSection) resultsSection.style.display = "none";
    if (tipsSection) tipsSection.style.display = "block";
  }

  function renderSuggestions(query) {
    if (searchLoader) searchLoader.style.display = "none";
    if (!query) {
      renderRecentSearches();
      return;
    }

    const matches = getMatchingProjects(query);

    if (matches.length === 0) {
      if (resultsSection) resultsSection.style.display = "none";
      if (recentSearchesSection) recentSearchesSection.style.display = "none";
      if (tipsSection) tipsSection.style.display = "block";
      if (noResultsMessage) noResultsMessage.style.display = "block";
      return;
    }

    if (noResultsMessage) noResultsMessage.style.display = "none";

    if (resultsList) {
      resultsList.innerHTML = "";
      matches.slice(0, 8).forEach((project, index) => {
        const item = document.createElement("div");
        item.className =
          "dropdown-item" +
          (index === selectedSuggestionIndex ? " selected" : "");
        item.setAttribute("role", "option");
        item.id = "search-option-" + index;
        if (index === selectedSuggestionIndex) {
          item.setAttribute("aria-selected", "true");
        }

        const iconBox = document.createElement("div");
        iconBox.className = "dropdown-item-icon";
        const banner = project.card.querySelector(".card-banner");
        if (banner) {
          const img = document.createElement("img");
          img.src = banner.src;
          img.alt = "";
          iconBox.appendChild(img);
        }

        const titleBox = document.createElement("div");
        titleBox.className = "dropdown-item-text";
        highlightText(titleBox, project.title, query);

        const tag = document.createElement("span");
        tag.className = "dropdown-item-tag";
        tag.textContent = project.category;

        item.append(iconBox, titleBox, tag);
        item.addEventListener("click", () => {
          selectSuggestion(project.title);
        });
        item.addEventListener("mouseenter", () => {
          selectedSuggestionIndex = index;
          updateSuggestionHighlight();
        });
        resultsList.appendChild(item);
      });
    }

    if (resultsSection) resultsSection.style.display = "block";
    if (recentSearchesSection) recentSearchesSection.style.display = "none";
    if (tipsSection) tipsSection.style.display = "none";
    selectedSuggestionIndex = -1;
  }

  function updateSuggestionHighlight() {
    if (!resultsList) return;
    const items = resultsList.querySelectorAll(".dropdown-item");
    items.forEach((item, i) => {
      const isSelected = i === selectedSuggestionIndex;
      item.classList.toggle("selected", isSelected);
      item.setAttribute("aria-selected", isSelected ? "true" : "false");
    });
    if (
      selectedSuggestionIndex >= 0 &&
      selectedSuggestionIndex < items.length
    ) {
      searchInput.setAttribute(
        "aria-activedescendant",
        "search-option-" + selectedSuggestionIndex
      );
    } else {
      searchInput.removeAttribute("aria-activedescendant");
    }
  }

  function selectSuggestion(title) {
    searchInput.value = title;
    triggerSearch(title);
    closeDropdown();
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
    }
  }

  function triggerSearch(query) {
    if (query) {
      recentSearches = recentSearches.filter((s) => s !== query);
      recentSearches.unshift(query);
      recentSearches = recentSearches.slice(0, 10);
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }
    onSearchChange(query);
  }

  const debouncedSearch = debounce((query) => {
    renderSuggestions(query);
  }, 200);

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (searchLoader) searchLoader.style.display = query ? "block" : "none";
    debouncedSearch(query);
    triggerSearch(query);
  });

  searchInput.addEventListener("focus", () => {
    if (searchDropdown) searchDropdown.classList.add("active");
    searchInput.setAttribute("aria-expanded", "true");
    if (!searchInput.value.trim()) renderRecentSearches();
  });

  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDropdown();
      searchInput.blur();
      return;
    }

    const items = resultsList
      ? resultsList.querySelectorAll(".dropdown-item")
      : [];
    if (items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedSuggestionIndex =
        selectedSuggestionIndex < items.length - 1
          ? selectedSuggestionIndex + 1
          : 0;
      updateSuggestionHighlight();
      if (items[selectedSuggestionIndex]) {
        items[selectedSuggestionIndex].scrollIntoView({ block: "nearest" });
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedSuggestionIndex =
        selectedSuggestionIndex > 0
          ? selectedSuggestionIndex - 1
          : items.length - 1;
      updateSuggestionHighlight();
      if (items[selectedSuggestionIndex]) {
        items[selectedSuggestionIndex].scrollIntoView({ block: "nearest" });
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (
        selectedSuggestionIndex >= 0 &&
        selectedSuggestionIndex < items.length
      ) {
        items[selectedSuggestionIndex].click();
      }
    }
  });

  document.addEventListener("click", (e) => {
    if (
      searchDropdown &&
      !searchDropdown.contains(e.target) &&
      e.target !== searchInput
    ) {
      closeDropdown();
    }
  });

  document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      searchInput.focus();
    }
  });

  // Wire up clear button if it exists in DOM
  const searchClear = document.getElementById("searchClear");
  const searchShortcut = document.getElementById("searchShortcut");
  if (searchClear) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      if (searchShortcut) searchShortcut.style.display = "";
      closeDropdown();
      triggerSearch("");
      searchInput.focus();
    });
  }

  renderRecentSearches();
}
