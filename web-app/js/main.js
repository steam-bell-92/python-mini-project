/* ═══════════════════════════════════════════════════════════════
   main.js — App wiring for Premium Python Projects Gallery
   ═══════════════════════════════════════════════════════════════ */

import { updateProjectVisibility } from "./modules/utils.js";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function safeRun(fn) {
  try {
    fn();
  } catch (e) {
    console.error(e);
  }
}

function debounce(fn, ms) {
  var timer;
  return function () {
    var args = arguments;
    var ctx = this;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(ctx, args);
    }, ms);
  };
}

function syncThemeColor(theme) {
  var meta = document.getElementById("themeColorMeta");
  if (meta)
    meta.setAttribute("content", theme === "light" ? "#f4f6f9" : "#0c0f1a");
}

function escapeHtml(str) {
  var d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

function setMainInert(isInert) {
  var main = document.getElementById("main-content");
  if (!main) return;
  if (isInert) main.setAttribute("inert", "");
  else main.removeAttribute("inert");
}

var modal = null;
var modalBody = null;
var modalClose = null;
var modalTitle = null;
var removeTrap = null;
var lastFocusedElement = null;
var currentCategory = "all";
var currentSearchQuery = "";
var playgroundActive = false;
var selectedSuggestionIndex = -1;
var projectCards = [];
var recentSearches = JSON.parse(localStorage.getItem("recentSearches") || "[]");

// ============================================
// INFO MODAL FUNCTIONS
// ============================================

function showInfoModal(title, steps) {
  var overlay = document.getElementById("infoModalOverlay");
  var titleEl = document.getElementById("infoModalTitle");
  var listEl = document.getElementById("infoModalList");

  if (!overlay || !titleEl || !listEl) return;

  titleEl.textContent = title;
  listEl.innerHTML = ""; // Safely clear the existing list
  steps.forEach(function (step) {
    const li = document.createElement("li");
    li.textContent = step; // textContent automatically escapes malicious scripts!
    listEl.appendChild(li);
  });

  overlay.classList.add("active");

  function closeModal() {
    overlay.classList.remove("active");
    closeBtn.removeEventListener("click", closeModal);
    gotItBtn.removeEventListener("click", closeModal);
    overlay.removeEventListener("click", overlayClick);
  }

  function overlayClick(e) {
    if (e.target === overlay) closeModal();
  }

  var closeBtn = document.getElementById("infoModalClose");
  var gotItBtn = document.getElementById("infoModalGotIt");

  closeBtn.addEventListener("click", closeModal);
  gotItBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", overlayClick);
}

// Themed confirmation modal (in-page) helper
function showConfirm(message, onConfirm, onCancel) {
  var overlay = document.getElementById('confirmModalOverlay');
  var msg = document.getElementById('confirmModalMessage');
  var okBtn = document.getElementById('confirmOkBtn');
  var cancelBtn = document.getElementById('confirmCancelBtn');
  if (!overlay || !msg || !okBtn || !cancelBtn) {
    // fallback to window.confirm
    var ok = window.confirm(message);
    if (ok && typeof onConfirm === 'function') onConfirm();
    else if (!ok && typeof onCancel === 'function') onCancel();
    return;
  }

  msg.textContent = message;
  overlay.classList.add('active');

  function cleanup() {
    overlay.classList.remove('active');
    okBtn.removeEventListener('click', okHandler);
    cancelBtn.removeEventListener('click', cancelHandler);
    overlay.removeEventListener('click', overlayClick);
    document.removeEventListener('keydown', keyHandler);
  }

  function okHandler(e) { e.stopPropagation(); cleanup(); if (typeof onConfirm === 'function') onConfirm(); }
  function cancelHandler(e) { e.stopPropagation(); cleanup(); if (typeof onCancel === 'function') onCancel(); }
  function overlayClick(e) { if (e.target === overlay) { cancelHandler(e); } }
  function keyHandler(e) { if (e.key === 'Escape') cancelHandler(e); }

  okBtn.addEventListener('click', okHandler);
  cancelBtn.addEventListener('click', cancelHandler);
  overlay.addEventListener('click', overlayClick);
  document.addEventListener('keydown', keyHandler);
}

var currentProjectName = "";

function setupModalInfoButton(projectName) {
  currentProjectName = projectName;
  var infoBtn = document.getElementById("modalInfoBtn");
  if (!infoBtn) return;

  // Remove old listener by cloning
  var newBtn = infoBtn.cloneNode(true);
  infoBtn.parentNode.replaceChild(newBtn, infoBtn);

  newBtn.addEventListener("click", function () {
    if (typeof getProjectInstructions === "function") {
      var info = getProjectInstructions(currentProjectName);
      showInfoModal(info.title, info.steps);
    }
  });
}

/* ── DOMContentLoaded ──────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  function repairLegacyHomeLayoutNow() {
    var legacyHost = document.querySelector(".hero-code-snippets")
      ? document.querySelector(".hero-code-snippets").closest(".hero-section")
      : null;

    if (!legacyHost) {
      return;
    }

    var allMains = Array.from(document.querySelectorAll("main#main-content"));
    var visibleMain = allMains[1] || allMains[0] || null;
    var timelineSectionNode = document.getElementById("timelineSection");
    var projectsSectionNode = document.getElementById("projectsSection");
    var playgroundSectionNode = document.getElementById("playgroundSection");
    var footerNode = document.querySelector("footer.footer");
    var backToTopNode = document.getElementById("backToTop");
    var infoModalNode = document.getElementById("infoModalOverlay");
    var projectModalNode = document.getElementById("projectModal");
    var sidebarDockNode = document.getElementById("mainSidebar");
    var mobileToggleNode = document.getElementById("mobileSidebarToggle");
    var heroControlsNode = document.querySelector(".hero-controls");
    var fragment = document.createDocumentFragment();

    if (mobileToggleNode) fragment.appendChild(mobileToggleNode);
    if (sidebarDockNode) fragment.appendChild(sidebarDockNode);
    if (visibleMain) fragment.appendChild(visibleMain);
    if (footerNode) fragment.appendChild(footerNode);
    if (backToTopNode) fragment.appendChild(backToTopNode);
    if (infoModalNode) fragment.appendChild(infoModalNode);
    if (projectModalNode) fragment.appendChild(projectModalNode);
    if (heroControlsNode) heroControlsNode.remove();

    document.body.appendChild(fragment);

    legacyHost.classList.add("legacy-home-hero");
  }

  repairLegacyHomeLayoutNow();
  window.addEventListener("load", repairLegacyHomeLayoutNow, { once: true });

  var html = document.documentElement;
  var backToTopButton = document.getElementById("backToTop");
  var searchInput = document.querySelector(".sidebar-dock #searchInput");
  var navSearchInput = document.getElementById("navSearchInput");
  var searchDropdown = document.getElementById("searchDropdown");
  var searchLoader = document.getElementById("searchLoader");
  var recentSearchesList = document.getElementById("recentSearchesList");
  var recentSearchesSection = document.getElementById("recentSearchesSection");
  var resultsList = document.getElementById("resultsList");
  var resultsSection = document.getElementById("resultsSection");
  var tipsSection = document.getElementById("tipsSection");
  var noResultsMessage = document.getElementById("noResultsMessage");
  var projectsSection = document.getElementById("projectsSection");
  var playgroundSection = document.getElementById("playgroundSection");
  var stickyFilterBar = document.getElementById("stickyFilterBar");
  var stickyTabs = document.querySelectorAll(".sticky-tab");
  var heroSection = document.querySelector(".hero-section");
  var cursorGlow = document.getElementById("cursorGlow");
  var heroProjectCounts = document.querySelectorAll("#heroProjectCount");
  var heroGameCounts = document.querySelectorAll("#heroGameCount");
  var heroMathCounts = document.querySelectorAll("#heroMathCount");
  var heroUtilityCounts = document.querySelectorAll("#heroUtilityCount");
  modal = document.getElementById("projectModal");
  modalBody = document.getElementById("modalBody");
  modalClose = document.getElementById("modalClose");
  modalTitle = document.getElementById("modalDialogTitle");
  var exploreBtn = document.getElementById("exploreBtn");
  var randomProjectBtn = document.getElementById("randomProjectBtn");
  var randomProjectBtnSidebar = document.querySelector(
    ".projects-section #randomProjectBtnSidebar"
  );
  var emptyState = document.getElementById("emptyState");
  var emptyStateHint = document.getElementById("emptyStateHint");
  var projectCountBadge = document.getElementById("projectCountBadge");
  var mobileMenuToggle = document.getElementById("mobileMenuToggle");
  var navControls = document.getElementById("navControls");
  var navbar = document.getElementById("mainNavbar");

  function syncSearchInputs(value, sourceInput) {
    [searchInput, navSearchInput].forEach(function (input) {
      if (input && input !== sourceInput && input.value !== value) {
        input.value = value;
      }
    });
  }

  function syncCountNodes(nodes, value) {
    Array.from(nodes || []).forEach(function (node) {
      node.textContent = value;
    });
  }

  /* ── Sound Toggle (Multi-Element Support) ─────────────────────────── */
  var soundToggles = document.querySelectorAll(".sound-toggle");

  function updateSoundIcons() {
    var isMuted = window.audioController
      ? window.audioController.isMuted
      : false;
    var iconHtml = isMuted
      ? '<i class="fas fa-volume-mute"></i>'
      : '<i class="fas fa-volume-up"></i>';
    soundToggles.forEach(function (btn) {
      btn.innerHTML = iconHtml;
    });
  }

  if (window.audioController) {
    updateSoundIcons();
    soundToggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        if (typeof window.audioController.toggleMute === "function") {
          window.audioController.toggleMute();
          updateSoundIcons(); // Instantly updates every sound button on the screen
          if (
            !window.audioController.isMuted &&
            typeof window.audioController.play === "function"
          ) {
            window.audioController.play("click");
          }
        }
      });
    });
  } else {
    // Fallback if audioController isn't loaded
    soundToggles.forEach(function (toggle) {
      toggle.addEventListener("click", function () {
        var icon = this.querySelector("i");
        if (icon) {
          var newClass =
            icon.className === "fas fa-volume-up"
              ? "fas fa-volume-mute"
              : "fas fa-volume-up";
          soundToggles.forEach(function (btn) {
            var i = btn.querySelector("i");
            if (i) i.className = newClass;
          });
        }
      });
    });
  }

  // Initial sync on load
  setTimeout(syncHeroControlsIcons, 100);

  /* ── Mobile Sidebar Toggle ──────────────────────────────── */
  var mobileSidebarToggle = document.getElementById("mobileSidebarToggle");
  var mainSidebar = document.getElementById("mainSidebar");
  if (mobileSidebarToggle && mainSidebar) {
    mobileSidebarToggle.addEventListener("click", function () {
      var active = mainSidebar.classList.toggle("open");
      mobileSidebarToggle.setAttribute("aria-expanded", active);
      var icon = mobileSidebarToggle.querySelector("i");
      if (icon) icon.className = active ? "fas fa-times" : "fas fa-bars";
    });

    document.addEventListener("click", function (e) {
      if (
        mainSidebar &&
        mobileSidebarToggle &&
        !mainSidebar.contains(e.target) &&
        e.target !== mobileSidebarToggle &&
        mainSidebar.classList.contains("open")
      ) {
        mainSidebar.classList.remove("open");
        mobileSidebarToggle.setAttribute("aria-expanded", "false");
        var icon = mobileSidebarToggle.querySelector("i");
        if (icon) icon.className = "fas fa-bars";
      }
    });
  }

  /* ── Desktop Sidebar Toggle ──────────────────────────────── */
  var desktopSidebarToggle = document.getElementById("sidebarCollapseBtn");
  if (desktopSidebarToggle && mainSidebar) {
    desktopSidebarToggle.addEventListener("click", function () {
      var collapsed = mainSidebar.classList.toggle("collapsed");
      document.body.classList.toggle("sidebar-collapsed", collapsed);

      var icon = desktopSidebarToggle.querySelector("i");
      if (icon) {
        icon.className = collapsed
          ? "fas fa-chevron-right"
          : "fas fa-chevron-left";
      }
    });
  }

  if (backToTopButton) {
    var toggleBackToTop = function () {
      backToTopButton.classList.toggle("visible", window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleBackToTop, { passive: true });
    toggleBackToTop();

    backToTopButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion() ? "auto" : "smooth",
      });
    });
  }

  /* ── Cursor Glow ──────────────────────────────────────────── */
  if (
    cursorGlow &&
    !prefersReducedMotion() &&
    html.getAttribute("data-theme") !== "light"
  ) {
    var glowTimeout;
    document.addEventListener("pointermove", function (e) {
      cursorGlow.style.left = e.clientX + "px";
      cursorGlow.style.top = e.clientY + "px";
      cursorGlow.style.opacity = "0.5";
      clearTimeout(glowTimeout);
      glowTimeout = setTimeout(function () {
        cursorGlow.style.opacity = "0";
      }, 3000);
    });
    document.addEventListener("pointerleave", function () {
      cursorGlow.style.opacity = "0";
    });
  }

  /* ── Gather Project Cards ─────────────────────────────────── */
  var projectsGrid = document.querySelector(".projects-grid");
  var projectsTemplate = document.getElementById("projectsTemplate");
  if (
    projectsGrid &&
    projectsGrid.children.length === 0 &&
    projectsTemplate &&
    projectsTemplate.content
  ) {
    Array.from(
      projectsTemplate.content.querySelectorAll(".project-card")
    ).forEach(function (card) {
      projectsGrid.appendChild(card.cloneNode(true));
    });
  }

  projectCards = projectsGrid
    ? Array.from(projectsGrid.querySelectorAll(".project-card"))
    : Array.from(document.querySelectorAll(".project-card"));

  projectCards.sort(function (a, b) {
    var titleA = (a.querySelector("h3") || {}).textContent || "";
    var titleB = (b.querySelector("h3") || {}).textContent || "";
    return titleA.localeCompare(titleB, undefined, {
      sensitivity: "base",
      numeric: true,
    });
  });

  if (projectsGrid) {
    projectCards.forEach(function (card) {
      projectsGrid.appendChild(card);
    });
  }

  /* ── Hero Stats ───────────────────────────────────────────── */
  var totalCount = projectCards.length;
  var gameCount = projectCards.filter(function (c) {
    return c.getAttribute("data-category") === "games";
  }).length;
  var mathCount = projectCards.filter(function (c) {
    return c.getAttribute("data-category") === "math";
  }).length;
  var utilityCount = projectCards.filter(function (c) {
    return c.getAttribute("data-category") === "utilities";
  }).length;

  syncCountNodes(heroProjectCounts, String(totalCount));
  syncCountNodes(heroGameCounts, String(gameCount));
  syncCountNodes(heroMathCounts, String(mathCount));
  syncCountNodes(heroUtilityCounts, String(utilityCount));
  if (projectCountBadge)
    projectCountBadge.textContent = String(totalCount) + " projects";

  /* ── Explore Button ───────────────────────────────────────── */
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function () {
      if (projectsSection)
        projectsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ── Category Filtering ───────────────────────────────────── */
  var sidebarTabs = document.querySelectorAll(".sidebar-dock .sidebar-tab");
  var sidebarBadge = null;

  function applyCategoryFilter(category) {
    if (category === "playground") return;
    currentCategory = category;
    syncSidebarTabs(category);
    syncStickyTabs(category);
    var visibleCount = 0;
    var favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    projectCards.forEach(function (card) {
      var cardCat = card.getAttribute("data-category");
      var projectName = card.getAttribute("data-project");
      var isFav = favorites.includes(projectName);
      if (
        category === "all" ||
        (category === "favorites" && isFav) ||
        (category !== "favorites" && cardCat === category)
      ) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });
    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? "block" : "none";
    }
    if (projectCountBadge) {
      projectCountBadge.textContent = String(visibleCount) + " projects";
    }
  }

  function syncSidebarTabs(category) {
    sidebarTabs.forEach(function (st) {
      var selected = st.getAttribute("data-category") === category;
      st.classList.toggle("active", selected);
      st.setAttribute("aria-selected", selected ? "true" : "false");
      st.setAttribute("tabindex", selected ? "0" : "-1");
    });
  }

  function syncStickyTabs(category) {
    stickyTabs.forEach(function (st) {
      var selected = st.getAttribute("data-sticky-category") === category;
      st.classList.toggle("active", selected);
      st.setAttribute("aria-selected", selected ? "true" : "false");
      st.setAttribute("tabindex", selected ? "0" : "-1");
    });
  }

  /* ── Playground Section Toggle ────────────────────────────── */
  function showProjectsSection() {
    playgroundActive = false;
    if (playgroundSection) playgroundSection.style.display = "none";
    if (projectsSection) projectsSection.style.display = "";
    if (
      window.playgroundAPI &&
      typeof window.playgroundAPI.deactivate === "function"
    ) {
      window.playgroundAPI.deactivate();
    }
  }

  function showPlaygroundSection() {
    playgroundActive = true;
    syncStickyTabs("playground");
    if (projectsSection) projectsSection.style.display = "none";
    if (playgroundSection) {
      playgroundSection.style.display = "";
      if (
        window.playgroundAPI &&
        typeof window.playgroundAPI.activate === "function"
      ) {
        window.playgroundAPI.activate();
      }
    }
  }

  /* ── Sidebar Tabs ─────────────────────────────────────────── */
  sidebarTabs.forEach(function (st) {
    st.addEventListener("click", function () {
      var category = st.getAttribute("data-category");

      var pageCategory = document.body.getAttribute("data-page");
      if (pageCategory) {
        // We are on a subpage (games, math, or utilities)
        if (category === pageCategory) {
          var grid = document.getElementById("projectsGrid");
          if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }
    });
    st.addEventListener("click", function () {
      var category = st.getAttribute("data-category");

      var pageCategory = document.body.getAttribute("data-page");
      if (pageCategory && category !== pageCategory) {
        var pageMap = {
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

      // If we're already on the matching subpage, just scroll to the grid
      if (pageCategory && category === pageCategory) {
        var grid = document.getElementById("projectsGrid");
        if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      syncSidebarTabs(category);
      syncStickyTabs(category);

      if (category === "playground") {
        showPlaygroundSection();
        if (playgroundSection)
          playgroundSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      } else {
        showProjectsSection();
        applyCategoryFilter(category);
        if (projectsSection)
          projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }
    });
  });

  /* ── Sticky Tabs ──────────────────────────────────────────── */
  stickyTabs.forEach(function (st) {
    st.addEventListener("click", function () {
      var category = st.getAttribute("data-sticky-category");
      syncStickyTabs(category);
      syncSidebarTabs(category);

      if (category === "playground") {
        showPlaygroundSection();
        if (playgroundSection)
          playgroundSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      } else {
        showProjectsSection();
        applyCategoryFilter(category);
        if (projectsSection)
          projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }
    });
  });

  /* ── Sticky Filter Bar Visibility ─────────────────────────── */
  if (stickyFilterBar && heroSection) {
    var heroObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          stickyFilterBar.classList.toggle("visible", !entry.isIntersecting);
        });
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );
    heroObserver.observe(heroSection);

    window.addEventListener(
      "scroll",
      function () {
        var navH = navbar ? navbar.getBoundingClientRect().height : 72;
        stickyFilterBar.style.top = navH + 16 + "px";
      },
      { passive: true }
    );
  }

  /* ── Random Project ───────────────────────────────────────── */
  function openRandomProject(trigger) {
    var visible = projectCards.filter(function (c) {
      return c.style.display !== "none";
    });
    var pool = visible.length ? visible : projectCards;
    var pick = pool[Math.floor(Math.random() * pool.length)];
    var name = pick.getAttribute("data-project");
    if (name && typeof openProjectSafe === "function") {
      openProjectSafe(name, trigger);
    }
  }

  if (randomProjectBtn) {
    randomProjectBtn.addEventListener("click", function () {
      openRandomProject(randomProjectBtn);
    });
  }
  if (randomProjectBtnSidebar) {
    randomProjectBtnSidebar.addEventListener("click", function () {
      openRandomProject(randomProjectBtnSidebar);
    });
  }

  /* ── Init sidebar ─────────────────────────────────────────── */
  var pageCategory = document.body.getAttribute("data-page");
  if (sidebarTabs.length) {
    if (pageCategory) {
      syncSidebarTabs(pageCategory);
    } else {
      syncSidebarTabs("all");
    }
  }
  if (stickyTabs.length) syncStickyTabs("all");

  /* ── Sidebar Active Scroll Observer ───────────────────────── */
  if (!pageCategory && projectsSection) {
    // On homepage, observe projectsSection to toggle sidebar-active class
    var sidebarActiveObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var isVisible =
            entry.isIntersecting || entry.boundingClientRect.top < 200;
          document.body.classList.toggle("sidebar-active", isVisible);
        });
      },
      { threshold: 0.05 }
    );
    sidebarActiveObserver.observe(projectsSection);
  } else if (pageCategory) {
    // On subpages, always ensure sidebar is active
    document.body.classList.add("sidebar-active");
  }

  /* ═══════════════════════════════════════════════════════════════
     SEARCH
     ═══════════════════════════════════════════════════════════════ */
  function getMatchingProjects(query) {
    if (!query) return [];
    var matches = [];
    projectCards.forEach(function (card) {
      var category = card.getAttribute("data-category");
      var title = (card.querySelector("h3") || {}).textContent || "";
      var desc = (card.querySelector("p") || {}).textContent || "";
      var tags = (card.getAttribute("data-tags") || "").toLowerCase();
      var q = query.toLowerCase();

      var catMatch = currentCategory === "all" || category === currentCategory;
      var searchMatch =
        title.toLowerCase().includes(q) ||
        desc.toLowerCase().includes(q) ||
        tags.includes(q);

      if (catMatch && searchMatch) {
        matches.push({
          card: card,
          title: title,
          tags: tags,
          category: category,
        });
      }
    });
    return matches;
  }

  function highlightText(container, text, query) {
    var safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var parts = text.split(new RegExp("(" + safe + ")", "gi"));
    parts.forEach(function (part) {
      if (part.toLowerCase() === query.toLowerCase()) {
        var mark = document.createElement("mark");
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
      recentSearches.slice(0, 5).forEach(function (search) {
        var item = document.createElement("div");
        item.className = "dropdown-recent-item";
        var text = document.createElement("div");
        text.className = "dropdown-recent-text";

        var clock = document.createElement("i");
        clock.className = "fas fa-history";
        clock.style.opacity = "0.5";
        clock.style.fontSize = "0.8rem";

        var label = document.createElement("span");
        label.textContent = search;

        text.append(clock, label);

        var removeBtn = document.createElement("button");
        removeBtn.className = "dropdown-recent-remove";
        removeBtn.setAttribute("aria-label", "Remove search");
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';

        item.append(text, removeBtn);

        label.addEventListener("click", function () {
          syncSearchInputs(search, searchInput);
          currentSearchQuery = search;
          performSearch(true);
          closeDropdown();
        });

        removeBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          recentSearches = recentSearches.filter(function (s) {
            return s !== search;
          });
          localStorage.setItem(
            "recentSearches",
            JSON.stringify(recentSearches)
          );
          renderRecentSearches();
        });

          recentSearchesList.appendChild(item);
        });

        // Wire up header Clear All button (if present)
        var headerClearBtn = document.getElementById('clearRecentBtn');
        if (headerClearBtn) {
          headerClearBtn.style.display = recentSearches.length ? 'inline-flex' : 'none';
          headerClearBtn.onclick = function (e) {
            e.stopPropagation();
            if (!recentSearches || recentSearches.length === 0) return;
            showConfirm('Clear all recent searches? This cannot be undone.', function () {
              recentSearches = [];
              localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
              renderRecentSearches();
              closeDropdown();
            }, function () {
              // cancelled
            });
          };
        }
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

    var matches = getMatchingProjects(query);

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
      matches.slice(0, 8).forEach(function (project, index) {
        var item = document.createElement("div");
        item.className =
          "dropdown-item" +
          (index === selectedSuggestionIndex ? " selected" : "");

        var iconBox = document.createElement("div");
        iconBox.className = "dropdown-item-icon";
        var banner = project.card.querySelector(".card-banner");
        if (banner) {
          var img = document.createElement("img");
          img.src = banner.src;
          img.alt = "";
          iconBox.appendChild(img);
        }

        var titleBox = document.createElement("div");
        titleBox.className = "dropdown-item-text";
        highlightText(titleBox, project.title, query);

        var tag = document.createElement("span");
        tag.className = "dropdown-item-tag";
        tag.textContent = project.category;

        item.append(iconBox, titleBox, tag);
        item.addEventListener("click", function () {
          selectSuggestion(project.title);
        });
        item.addEventListener("mouseenter", function () {
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
    var items = resultsList.querySelectorAll(".dropdown-item");
    items.forEach(function (item, i) {
      item.classList.toggle("selected", i === selectedSuggestionIndex);
    });
  }

  function selectSuggestion(title) {
    if (!searchInput) return;
    searchInput.value = title;
    currentSearchQuery = title.toLowerCase();
    performSearch(true);
    closeDropdown();
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "start",
      });
    }
  }

  function performSearch(commit) {
    if (commit === undefined) commit = true;
    var query = currentSearchQuery;
    if (!query) {
      applyCategoryFilter(currentCategory);
      if (emptyStateHint)
        emptyStateHint.textContent =
          "Try adjusting your search or category filter.";
      return;
    }

    if (currentCategory !== "all") {
      currentCategory = "all";
      syncSidebarTabs("all");
      syncStickyTabs("all");
    }

    if (commit) {
      recentSearches = recentSearches.filter(function (s) {
        return s !== query;
      });
      recentSearches.unshift(query);
      recentSearches = recentSearches.slice(0, 10);
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }

    var visibleCount = 0;
    var favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    projectCards.forEach(function (card) {
      var category = card.getAttribute("data-category");
      var title = (card.querySelector("h3") || {}).textContent || "";
      var desc = (card.querySelector("p") || {}).textContent || "";
      var tags = (card.getAttribute("data-tags") || "").toLowerCase();
      var projectName = card.getAttribute("data-project");
      var isFav = favorites.includes(projectName);

      var catMatch =
        currentCategory === "all" ||
        (currentCategory === "favorites" && isFav) ||
        (currentCategory !== "favorites" && category === currentCategory);
      var searchMatch =
        title.toLowerCase().includes(query) ||
        desc.toLowerCase().includes(query) ||
        tags.includes(query);

      if (catMatch && searchMatch) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? "block" : "none";
      if (visibleCount === 0 && emptyStateHint) {
        emptyStateHint.textContent =
          'No projects match "' + query + '". Try a different keyword.';
      }
    }
    if (projectCountBadge)
      projectCountBadge.textContent = String(visibleCount) + " projects";
  }

  var searchInputs = [searchInput, navSearchInput].filter(Boolean);
  if (searchInputs.length) {
    var debouncedSearch = debounce(function (query) {
      renderSuggestions(query);
    }, 200);

    searchInputs.forEach(function (input) {
      input.addEventListener("input", function (e) {
        var rawValue = e.target.value;
        var query = rawValue.trim().toLowerCase();
        syncSearchInputs(rawValue, e.target);
        currentSearchQuery = query;
        if (searchLoader) searchLoader.style.display = query ? "block" : "none";
        debouncedSearch(query);
        performSearch(false);
      });

      input.addEventListener("focus", function () {
        if (input === searchInput && searchDropdown)
          searchDropdown.classList.add("active");
        if (input === searchInput && !currentSearchQuery)
          renderRecentSearches();
      });

      input.addEventListener("blur", function () {
        if (currentSearchQuery && currentSearchQuery.trim()) {
          performSearch(true);
        }
      });

      input.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          closeDropdown();
          input.blur();
        }
        if (e.key === "Enter") {
          e.preventDefault();
          performSearch(true);
          closeDropdown();
        }
      });
    });
  }

  document.addEventListener("click", function (e) {
    if (
      searchDropdown &&
      searchInput &&
      !searchDropdown.contains(e.target) &&
      e.target !== searchInput &&
      e.target !== navSearchInput
    ) {
      closeDropdown();
    }
  });

  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      if (navSearchInput) navSearchInput.focus();
      else if (searchInput) searchInput.focus();
    }
  });

  renderRecentSearches();

  /* ═══════════════════════════════════════════════════════════════
      MODAL
    ═══════════════════════════════════════════════════════════════ */
function getFocusableElements(root) {
  var sel =
    'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
  return Array.from(root.querySelectorAll(sel)).filter(function (el) {
    return (
      !el.closest('[aria-hidden="true"]') &&
      !el.classList.contains("visually-hidden")
    );
  });
}

function trapFocus(modalEl) {
  var handler = function (e) {
    if (e.key !== "Tab" || !modalEl.classList.contains("active")) return;
    var focusables = getFocusableElements(modalEl);
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus({ preventScroll: true });
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus({ preventScroll: true });
    }
  };
  document.addEventListener("keydown", handler, true);
  return function () {
    document.removeEventListener("keydown", handler, true);
  };
}

function openProjectSafe(name, trigger) {
  if (!modal || !modalBody) return;
  lastFocusedElement = trigger || document.activeElement;
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = scrollbarWidth + "px";
  document.body.style.overflow = "hidden";
  setMainInert(true);

  safeRun(function () {
    if (typeof getProjectHTML === "function") {
      const rawHTML =
        getProjectHTML(name) ||
        '<div style="padding:1rem;color:var(--text-secondary)">Project content unavailable.</div>';

      // Sanitize the HTML before it touches the DOM
      if (window.DOMPurify) {
        modalBody.innerHTML = DOMPurify.sanitize(rawHTML);
      } else {
        modalBody.textContent = "Security Error: Sanitizer failed to load.";
      }
    } else {
      modalBody.innerHTML =
        '<div style="padding:1rem;color:var(--text-secondary)">Project content unavailable.</div>';
    }
    if (typeof initializeProject === "function") initializeProject(name);
    setupModalInfoButton(name);

    // Inject info button next to the title (works for all projects)
    var projectContent = modalBody.querySelector(".project-content");
    if (projectContent) {
      // Try to find the title element (could be h2, or other heading)
      var firstHeading = projectContent.querySelector(
        "h2, h3, .resume-analyzer-copy h2, .pet-title"
      );

      if (!firstHeading) {
        // If no heading found, look for any element with a title-like class
        firstHeading = projectContent.querySelector(
          '[class*="title"], [class*="header"] h2'
        );
      }

      if (firstHeading && !projectContent.querySelector(".inline-info-btn")) {
        // Create info button
        var infoBtn = document.createElement("button");
        infoBtn.className = "inline-info-btn";
        infoBtn.innerHTML = "ⓘ";
        infoBtn.setAttribute("aria-label", "How to use this project");

        // Style the button
        infoBtn.style.marginLeft = "12px";
        infoBtn.style.background = "none";
        infoBtn.style.border = "none";
        infoBtn.style.fontSize = "1.3rem";
        infoBtn.style.cursor = "pointer";
        infoBtn.style.color = "var(--accent)";
        infoBtn.style.verticalAlign = "middle";

        infoBtn.addEventListener("click", function (e) {
          e.stopPropagation();
          if (typeof getProjectInstructions === "function") {
            var info = getProjectInstructions(name);
            showInfoModal(info.title, info.steps);
          }
        });

        // Make heading display inline if it's a block element
        if (firstHeading.style.display !== "inline-block") {
          firstHeading.style.display = "inline-block";
        }
        firstHeading.appendChild(infoBtn);
      }
    }
  });

  removeTrap = trapFocus(modal);
  var focusables = getFocusableElements(modalBody);
  var firstFocusable = focusables[0] || modalClose;
  if (firstFocusable && typeof firstFocusable.focus === "function") {
    firstFocusable.focus({ preventScroll: true });
  }
}

function closeProjectSafe() {
  if (!modal || !modal.classList.contains("active")) return;
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.paddingRight = "";
  document.body.style.overflow = "";
  setMainInert(false);
  if (removeTrap) {
    removeTrap();
    removeTrap = null;
  }
  if (modalBody) {
    modalBody.innerHTML = "";
  }
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus({ preventScroll: true });
  }
  lastFocusedElement = null;
}

if (modalClose) modalClose.addEventListener("click", closeProjectSafe);
if (modal) {
  modal.addEventListener("click", function (e) {
    if (e.target === modal) closeProjectSafe();
  });
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeProjectSafe();
});

/* ── Expose for inline use ────────────────────────────────── */
window.openProjectSafe = openProjectSafe;
window.closeProjectSafe = closeProjectSafe;
window.setMainInert = setMainInert;

/* ═══════════════════════════════════════════════════════════════
     WIRE PROJECT CARDS
     ═══════════════════════════════════════════════════════════════ */
projectCards.forEach(function (card) {
  var name = card.getAttribute("data-project");

  /* ── Favorite Button ──────────────────────────────────── */
  var favBtn = document.createElement("button");
  favBtn.className = "btn-favorite";
  favBtn.setAttribute("aria-label", "Toggle favorite");
  favBtn.innerHTML = '<i class="far fa-star"></i>';

  var favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  if (favorites.includes(name)) {
    favBtn.classList.add("active");
    favBtn.innerHTML = '<i class="fas fa-star"></i>';
  }

  favBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    var idx = favs.indexOf(name);
    if (idx === -1) {
      favs.push(name);
      favBtn.classList.add("active");
      favBtn.innerHTML = '<i class="fas fa-star"></i>';
    } else {
      favs.splice(idx, 1);
      favBtn.classList.remove("active");
      favBtn.innerHTML = '<i class="far fa-star"></i>';
      if (currentCategory === "favorites") {
        card.style.display = "none";
      }
    }
    localStorage.setItem("favorites", JSON.stringify(favs));
  });

  var cardActions = card.querySelector(".card-actions");
  if (cardActions) cardActions.appendChild(favBtn);

  /* ── Share Button ─────────────────────────────────────── */
  var shareBtn = document.createElement("button");
  shareBtn.className = "btn-share";
  shareBtn.setAttribute("aria-label", "Share " + name);
  shareBtn.innerHTML =
    '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
  shareBtn.title = "Copy shareable link";

  shareBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    var url =
      window.location.origin +
      window.location.pathname +
      "?project=" +
      encodeURIComponent(name);
    navigator.clipboard
      .writeText(url)
      .then(function () {
        showToast("Link copied!");
      })
      .catch(function () {
        showToast("Copy this: " + url);
      });
  });

  if (cardActions) cardActions.appendChild(shareBtn);

  /* ── Play Button ──────────────────────────────────────── */
  var playBtns = card.querySelectorAll(".btn-play");
  playBtns.forEach(function (play) {
    play.setAttribute("aria-label", "Open " + name);
    play.addEventListener("click", function (e) {
      e.stopPropagation();
      openProjectSafe(name, play);
    });
  });

  /* ── Card Click ───────────────────────────────────────── */
  card.addEventListener("click", function (e) {
    if (
      e.target.closest(".btn-play") ||
      e.target.closest(".btn-favorite") ||
      e.target.closest(".btn-share")
    )
      return;
    openProjectSafe(name, card);
  });

  /* ── Card Mouse Tracking for Border Glow ──────────────── */
  if (!prefersReducedMotion()) {
    card.addEventListener("mousemove", function (e) {
      var rect = card.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mouse-x", x + "%");
      card.style.setProperty("--mouse-y", y + "%");
    });
  }
});

/* ── Toast ─────────────────────────────────────────────────── */
function showToast(message) {
  var existing = document.getElementById("shareToast");
  if (existing) existing.remove();
  var toast = document.createElement("div");
  toast.id = "shareToast";
  toast.className = "share-toast";
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(function () {
    toast.classList.add("share-toast--visible");
  });
  setTimeout(function () {
    toast.classList.remove("share-toast--visible");
    setTimeout(function () {
      toast.remove();
    }, 300);
  }, 2500);
}

/* ── URL params auto-open ──────────────────────────────────── */
(function () {
  var params = new URLSearchParams(window.location.search);
  var projectParam = params.get("project");
  if (projectParam) {
    var match = projectCards.find(function (c) {
      return c.getAttribute("data-project") === projectParam;
    });
    if (match) {
      setTimeout(function () {
        openProjectSafe(projectParam, match);
        match.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }
  var catParam = params.get("category");
  var valid = ["all", "games", "math", "utilities", "playground", "favorites"];
  if (catParam && valid.includes(catParam)) {
    var tab = document.querySelector('[data-category="' + catParam + '"]');
    if (tab)
      setTimeout(function () {
        tab.click();
      }, 100);
  }
})();

/* ═══════════════════════════════════════════════════════════════
     TIMELINE SCROLL REVEAL
     ═══════════════════════════════════════════════════════════════ */
var timelineItems = document.querySelectorAll(".timeline-item[data-reveal]");
var timelineFill = document.getElementById("timelineFill");
var timelineSection = document.getElementById("timelineSection");

if (timelineItems.length && !prefersReducedMotion()) {
  var timelineObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.25, rootMargin: "0px 0px -50px 0px" }
  );

  timelineItems.forEach(function (item) {
    timelineObserver.observe(item);
  });

  /* ── Serpentine SVG Winding Timeline Path ─────────────────── */
  var svgNamespace = "http://www.w3.org/2000/svg";

  function getElementOffset(el, parent) {
    var top = 0;
    var left = 0;
    var curr = el;
    while (curr && curr !== parent) {
      top += curr.offsetTop || 0;
      left += curr.offsetLeft || 0;
      curr = curr.offsetParent;
    }
    return { top: top, left: left };
  }

  function rebuildTimelineSvg() {
    var container = document.querySelector(".timeline-container");
    if (!container) return;
    var dots = document.querySelectorAll(".timeline-dot");
    if (dots.length < 2) return;

    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    var svg = document.getElementById("timelineSvg");
    if (!svg) {
      svg = document.createElementNS(svgNamespace, "svg");
      svg.id = "timelineSvg";
      svg.setAttribute("class", "timeline-svg");

      var defs = document.createElementNS(svgNamespace, "defs");
      var grad = document.createElementNS(svgNamespace, "linearGradient");
      grad.id = "timelineGrad";
      grad.setAttribute("x1", "0%");
      grad.setAttribute("y1", "0%");
      grad.setAttribute("x2", "0%");
      grad.setAttribute("y2", "100%");

      var stop1 = document.createElementNS(svgNamespace, "stop");
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", "var(--accent)");

      var stop2 = document.createElementNS(svgNamespace, "stop");
      stop2.setAttribute("offset", "100%");
      stop2.setAttribute("stop-color", "#06b6d4");

      grad.appendChild(stop1);
      grad.appendChild(stop2);
      defs.appendChild(grad);

      // Define a dynamic layout mask path for progress crawling
      var mask = document.createElementNS(svgNamespace, "mask");
      mask.id = "timelineMask";

      var maskPath = document.createElementNS(svgNamespace, "path");
      maskPath.id = "timelineMaskPath";
      maskPath.setAttribute("fill", "none");
      maskPath.setAttribute("stroke", "#ffffff");
      maskPath.setAttribute("stroke-width", "24"); // Wide enough to fully cover glowing dots
      maskPath.setAttribute("stroke-linecap", "round");

      mask.appendChild(maskPath);
      defs.appendChild(mask);
      svg.appendChild(defs);

      var track = document.createElementNS(svgNamespace, "path");
      track.id = "timelineSvgTrack";
      track.setAttribute("class", "timeline-svg-track");
      track.setAttribute("fill", "none");

      var fill = document.createElementNS(svgNamespace, "path");
      fill.id = "timelineSvgFill";
      fill.setAttribute("class", "timeline-svg-fill");
      fill.setAttribute("fill", "none");
      fill.setAttribute("stroke", "var(--accent)");
      fill.setAttribute("mask", "url(#timelineMask)");

      svg.appendChild(track);
      svg.appendChild(fill);

      var grid = document.querySelector(".timeline-grid");
      container.insertBefore(svg, grid);
    }

    // Determine layout stable coordinate points for all timeline dots
    var coords = [];
    dots.forEach(function (dot) {
      var offset = getElementOffset(dot, container);
      var x = offset.left + dot.offsetWidth / 2;
      var y = offset.top + dot.offsetHeight / 2;
      coords.push({ x: x, y: y });
    });

    // Create the winding path
    var d = "";
    var startX = containerWidth / 2;
    d += "M " + startX + " 0";
    d += " L " + coords[0].x + " " + coords[0].y;

    // Calculate a sweep width that is perfectly responsive
    // e.g. 16% of container width, capped at 180px for desktop beauty
    var W = Math.min(180, containerWidth * 0.16);

    for (var i = 0; i < coords.length - 1; i++) {
      var pStart = coords[i];
      var pEnd = coords[i + 1];
      var H = pEnd.y - pStart.y;
      var dy = H * 0.35; // Symmetrical control point height

      // Even segments (0, 2, 4...) snake to the right, odd segments to the left
      var dx = i % 2 === 0 ? W : -W;

      var cp1x = pStart.x + dx;
      var cp1y = pStart.y + dy;
      var cp2x = pEnd.x + dx;
      var cp2y = pEnd.y - dy;

      d +=
        " C " +
        cp1x +
        " " +
        cp1y +
        ", " +
        cp2x +
        " " +
        cp2y +
        ", " +
        pEnd.x +
        " " +
        pEnd.y;
    }

    // Straight exit to the bottom
    d += " L " + coords[coords.length - 1].x + " " + containerHeight;

    var trackPath = document.getElementById("timelineSvgTrack");
    var fillPath = document.getElementById("timelineSvgFill");
    var maskPath = document.getElementById("timelineMaskPath");
    if (trackPath && fillPath && maskPath) {
      trackPath.setAttribute("d", d);
      fillPath.setAttribute("d", d);
      maskPath.setAttribute("d", d);

      var totalLength = maskPath.getTotalLength();
      maskPath.style.strokeDasharray = totalLength;
      maskPath.dataset.totalLength = totalLength;

      // Trigger scroll progress sync immediately
      updateTimelineFill();
    }
  }

  /* ── Timeline Fill Progress ───────────────────────────── */
  function updateTimelineFill() {
    if (!timelineSection) return;
    var container = document.querySelector(".timeline-container");
    if (!container) return;

    var containerRect = container.getBoundingClientRect();
    var viewportCenterY = window.innerHeight / 2;

    // Calculate relative vertical scroll position of the viewport center relative to the container
    var relativeY = viewportCenterY - containerRect.top;
    var offset = Math.max(0, Math.min(1, relativeY / containerRect.height));

    /* ── Dynamic SVG path mask scroll synchronization ──────── */
    var maskPath = document.getElementById("timelineMaskPath");
    if (maskPath && maskPath.dataset.totalLength) {
      var totalLength = parseFloat(maskPath.dataset.totalLength);
      var dashoffset = totalLength - offset * totalLength;
      maskPath.style.strokeDashoffset = Math.max(
        0,
        Math.min(totalLength, dashoffset)
      );
    }

    /* ── Activate item based on viewport center crossing timeline dots ── */
    var activeIdx = -1;
    var dots = document.querySelectorAll(".timeline-dot");

    dots.forEach(function (dot, i) {
      var dotRect = dot.getBoundingClientRect();
      var dotCenterY = dotRect.top + dotRect.height / 2;

      // A dot is crossed/passed if its vertical center in the viewport is <= the viewport center
      if (dotCenterY <= viewportCenterY) {
        activeIdx = i;
      }
    });

    timelineItems.forEach(function (item, i) {
      item.classList.toggle("active", i === activeIdx);
    });
  }

  // Initialize SVG path layout recalculations on page render & resize
  rebuildTimelineSvg();
  window.addEventListener("resize", debounce(rebuildTimelineSvg, 150));
  window.addEventListener("scroll", updateTimelineFill, { passive: true });
} else if (timelineItems.length) {
  timelineItems.forEach(function (item) {
    item.classList.add("visible");
  });
}

/* ── Reveal on Scroll (general) ────────────────────────────── */
var revealItems = document.querySelectorAll(".reveal-on-scroll");
if (revealItems.length && !prefersReducedMotion()) {
  var revealObserver = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
  );
  revealItems.forEach(function (item) {
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach(function (item) {
    item.classList.add("is-visible");
  });
}

document.querySelectorAll(".footer-cat-link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    var cat = link.getAttribute("data-cat");
    var tab = document.querySelector(
      '.sidebar-tab[data-category="' + cat + '"]'
    );
    if (tab) tab.click();
  });
});

/* ── Scroll Progress Bar ───────────────────────────── */

var progressBar = document.getElementById("scrollProgressBar");

if (progressBar) {
  let ticking = false;

  function updateScrollProgress() {
    var scrollTop = window.scrollY || document.documentElement.scrollTop;

    var docHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    var progress = docHeight ? (scrollTop / docHeight) * 100 : 0;

    progressBar.style.width = progress + "%";

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollProgress);
      ticking = true;
    }
  });
}

// URL parameters auto-open logic
(function () {
  const params = new URLSearchParams(window.location.search);
  const projectParam = params.get("project");
  if (projectParam) {
    const match = projectCards.find(
      (c) => c.getAttribute("data-project") === projectParam
    );
    if (match) {
      setTimeout(() => {
        openProjectSafe(projectParam, match);
        match.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }
  const catParam = params.get("category");
  const valid = [
    "all",
    "games",
    "math",
    "utilities",
    "playground",
    "favorites",
  ];
  if (catParam && valid.includes(catParam)) {
    const tab = document.querySelector(`[data-category="${catParam}"]`);
    if (tab) {
      setTimeout(() => tab.click(), 100);
    }
  }
})();

// Initial card filtering state update
updateProjectVisibility(currentCategory, currentSearchQuery);
