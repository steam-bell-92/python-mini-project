/* ═══════════════════════════════════════════════════════════════
  main.js — App wiring for Premium Python Projects Gallery
   ═══════════════════════════════════════════════════════════════ */

import { updateProjectVisibility } from "./modules/utils.js";
import CopyButton from "./modules/copyButton.js";

// Add spin animation
if (!document.getElementById('spinStyle')) {
  const style = document.createElement('style');
  style.id = 'spinStyle';
  style.textContent = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}

const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeColorMeta = document.querySelector('meta[name="theme-color"]');

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

function updateThemeToggleAria(isLightTheme) {
  if (!themeToggle) return;
  themeToggle.setAttribute(
    'aria-label',
    isLightTheme ? 'Switch to dark mode' : 'Switch to light mode'
  );
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    syncThemeColor(newTheme);

    themeToggle.innerHTML =
      newTheme === 'light'
        ? '<i class="fas fa-sun" aria-hidden="true"></i>'
        : '<i class="fas fa-moon" aria-hidden="true"></i>';
    updateThemeToggleAria(newTheme === 'light');
  });
}

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
syncThemeColor(savedTheme);
if (themeToggle) {
  themeToggle.innerHTML =
    savedTheme === 'light'
      ? '<i class="fas fa-sun" aria-hidden="true"></i>'
      : '<i class="fas fa-moon" aria-hidden="true"></i>';
  updateThemeToggleAria(savedTheme === 'light');
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
// INFO MODAL FUNCTIONS - FIXED
// ============================================

function showInfoModal(title, steps) {
  var overlay = document.getElementById("infoModalOverlay");
  var titleEl = document.getElementById("infoModalTitle");
  var listEl = document.getElementById("infoModalList");

  if (!overlay || !titleEl || !listEl) return;

  titleEl.textContent = title;
  listEl.innerHTML = "";
  steps.forEach(function (step) {
    const li = document.createElement("li");
    li.textContent = step;
    listEl.appendChild(li);
  });

  // Show modal
  overlay.style.display = 'flex';
  overlay.style.visibility = 'visible';
  overlay.style.opacity = '1';
  overlay.classList.add("active");
  overlay.setAttribute('aria-hidden', 'false');

  function closeModal() {
    overlay.style.display = 'none';
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
    overlay.classList.remove("active");
    overlay.setAttribute('aria-hidden', 'true');
    document.removeEventListener("keydown", escapeHandler);
  }

  function escapeHandler(e) {
    if (e.key === 'Escape') closeModal();
  }

  // Setup close buttons
  var closeBtn = document.getElementById("infoModalClose");
  var gotItBtn = document.getElementById("infoModalGotIt");

  if (closeBtn) {
    closeBtn.onclick = function(e) {
      e.preventDefault();
      closeModal();
    };
  }

  if (gotItBtn) {
    gotItBtn.onclick = function(e) {
      e.preventDefault();
      closeModal();
    };
  }

  overlay.onclick = function(e) {
    if (e.target === overlay) closeModal();
  };

  document.addEventListener("keydown", escapeHandler);
}

// Themed confirmation modal (in-page) helper
function showConfirm(message, onConfirm, onCancel) {
  var overlay = document.getElementById('confirmModalOverlay');
  var msg = document.getElementById('confirmModalMessage');
  var okBtn = document.getElementById('confirmOkBtn');
  var cancelBtn = document.getElementById('confirmCancelBtn');
  if (!overlay || !msg || !okBtn || !cancelBtn) {
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

window.showConfirm = showConfirm;

/* ── DOMContentLoaded ──────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  // Initially hide sidebar - will be shown by IntersectionObserver
  var pageCategory = document.body.getAttribute("data-page");
  document.body.classList.remove("sidebar-active");
  if (pageCategory && window.innerWidth >= 1100) {
    document.body.classList.add("sidebar-active");
  }
  
  function repairLegacyHomeLayoutNow() {
    var legacyHost = document.querySelector(".hero-code-snippets")
      ? document.querySelector(".hero-code-snippets").closest(".hero-section")
      : null;

    if (!legacyHost) {
      return;
    }

    var allMains = Array.from(document.querySelectorAll("main#main-content"));
    var visibleMain = allMains[1] || allMains[0] || null;
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
  const clearSearchBtn = document.getElementById("clearSearchBtn");
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
          updateSoundIcons();
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

  /* ── Mobile Sidebar Close ──────────────────────────────── */
  var mainSidebar = document.getElementById("mainSidebar");
  var mobileSidebarToggle = document.getElementById("mobileSidebarToggle");
  if (mobileSidebarToggle && mainSidebar) {
    mobileSidebarToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      var active = mainSidebar.classList.toggle("open");
      document.body.classList.toggle("sidebar-active", active);
      mobileSidebarToggle.setAttribute("aria-expanded", active);
      var icon = mobileSidebarToggle.querySelector("i");
      if (icon) icon.className = active ? "fas fa-times" : "fas fa-bars";
    });

    document.addEventListener("click", function (e) {
      if (
        mainSidebar &&
        mobileSidebarToggle &&
        !mainSidebar.contains(e.target) &&
        !mobileSidebarToggle.contains(e.target) &&
        mainSidebar.classList.contains("open")
      ) {
        closeMobileSidebar();
      }
    });
  }

  var sidebarBackdrop = document.getElementById("sidebarBackdrop");

  function closeMobileSidebar() {
    document.body.classList.remove("sidebar-active");
    if (mobileMenuToggle) {
      mobileMenuToggle.setAttribute("aria-expanded", "false");
    }
    if (mainSidebar) mainSidebar.classList.remove("open");
    if (mobileSidebarToggle) {
      mobileSidebarToggle.setAttribute("aria-expanded", "false");
      var icon = mobileSidebarToggle.querySelector("i");
      if (icon) icon.className = "fas fa-bars";
    }
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      var isActive = document.body.classList.toggle("sidebar-active");
      mobileMenuToggle.setAttribute("aria-expanded", isActive);
    });
  }

  if (window.innerWidth <= 768) {
    closeMobileSidebar();
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener("click", closeMobileSidebar);
  }
  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      document.body.classList.contains("sidebar-active")
    ) {
      closeMobileSidebar();
    }
  });

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

  document.addEventListener("click", function (e) {
    if (window.innerWidth < 1100) {
      var isClickInsideSidebar = mainSidebar && mainSidebar.contains(e.target);
      var isClickOnToggle = mobileMenuToggle && mobileMenuToggle.contains(e.target);
      if (!isClickInsideSidebar && !isClickOnToggle && document.body.classList.contains("sidebar-active")) {
        document.body.classList.remove("sidebar-active");
      }
    }
  });

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
  var projectsGrid = document.getElementById("projectsGrid");
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

  updateSidebarCategoryCounts();

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

  function updateSidebarCategoryCounts() {
    const allBadge = document.getElementById("allProjectsCountBadge");
    const gamesBadge = document.getElementById("gamesProjectsCountBadge");
    const mathBadge = document.getElementById("mathProjectsCountBadge");
    const utilitiesBadge = document.getElementById("utilitiesProjectsCountBadge");
    const favoritesBadge = document.getElementById("favoritesCountBadge");

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    const allCount = projectCards.length;
    const gamesCount = projectCards.filter(card => card.dataset.category === "games").length;
    const mathCount = projectCards.filter(card => card.dataset.category === "math").length;
    const utilitiesCount = projectCards.filter(card => card.dataset.category === "utilities").length;

    if (allBadge) allBadge.textContent = `(${allCount})`;
    if (gamesBadge) gamesBadge.textContent = `(${gamesCount})`;
    if (mathBadge) mathBadge.textContent = `(${mathCount})`;
    if (utilitiesBadge) utilitiesBadge.textContent = `(${utilitiesCount})`;
    if (favoritesBadge) favoritesBadge.textContent = `(${favorites.length})`;
  }

  function applyCategoryFilter(category) {
    if (category === "playground") return;
    currentCategory = category;
    syncSidebarTabs(category);
    syncStickyTabs(category);
    
    var statsCards = document.querySelectorAll(".stats-card");
    statsCards.forEach(function (card) {
      card.classList.toggle("active", card.getAttribute("data-filter") === category);
    });

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
    var statsCards = document.querySelectorAll(".stats-card");
    statsCards.forEach(function (card) {
      card.classList.remove("active");
    });
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
      if (window.innerWidth < 1100) {
        document.body.classList.remove("sidebar-active");
        if (mainSidebar) mainSidebar.classList.remove("open");
        if (mobileSidebarToggle) {
          mobileSidebarToggle.setAttribute("aria-expanded", "false");
          var icon = mobileSidebarToggle.querySelector("i");
          if (icon) icon.className = "fas fa-bars";
        }
      }
    });
    st.addEventListener("click", function () {
      var category = st.getAttribute("data-category");

      var pageCategory = document.body.getAttribute("data-page");
      if (pageCategory) {
        if (category === pageCategory) {
          var grid = document.getElementById("projectsGrid");
          if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
          if (window.innerWidth <= 768) {
            closeMobileSidebar();
          }
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

      if (pageCategory && category === pageCategory) {
        var grid = document.getElementById("projectsGrid");
        if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
        if (window.innerWidth <= 768) {
          closeMobileSidebar();
        }
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
      if (window.innerWidth <= 768) {
        closeMobileSidebar();
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
  /* ==========================================================
   FIX ISSUE #1703
   Wire Hero Category Navigation
========================================================== */

const heroNavButtons = document.querySelectorAll(".hero-nav-btn");

heroNavButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const category = button.dataset.category;

        heroNavButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        syncSidebarTabs(category);
        syncStickyTabs(category);

        if (category === "playground") {

            showPlaygroundSection();

            if (playgroundSection) {
                playgroundSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }

        } else {

            showProjectsSection();
            applyCategoryFilter(category);

            if (projectsSection) {
                projectsSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }

        }

    });

});


  /* ── Stats Cards ──────────────────────────────────────────── */
  var statsCards = document.querySelectorAll(".stats-card");
  statsCards.forEach(function (card) {
    card.addEventListener("click", function () {
      var category = card.getAttribute("data-filter");
      
      statsCards.forEach(function (c) {
        c.classList.toggle("active", c === card);
      });

      if (category === "recent") {
        var section = document.getElementById("recentlyViewedSection");
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        showProjectsSection();
        applyCategoryFilter(category);
        if (projectsSection) {
          projectsSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
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
    console.log('Setting up sidebar observer');
 
    const checkAndToggleSidebar = () => {
      if (playgroundActive) {
        document.body.classList.remove("sidebar-active");
        const fixedThemeToggle = document.getElementById("fixed-theme-toggle");
        if (fixedThemeToggle) {
          fixedThemeToggle.style.display = "block";
        }
        return;
      }

      if (window.innerWidth <= 768) {
        return;
      }
      const rect = projectsSection.getBoundingClientRect();
      const heroSection = document.querySelector('.hero-section');
      const heroBottom = heroSection ? heroSection.getBoundingClientRect().bottom : 0;
      // FIX ISSUE #1704: Hide the fixed sidebar when the footer enters the viewport
      const footer = document.querySelector(".footer");
      const isFooterVisible = footer
        ? footer.getBoundingClientRect().top < window.innerHeight
        : false;
      const showSidebar =
        rect.top < window.innerHeight &&
        !isFooterVisible &&
        window.scrollY > heroBottom - 100;
 
      document.body.classList.toggle("sidebar-active", showSidebar);
      console.log('Sidebar active:', showSidebar, 'scrollY:', window.scrollY, 'playgroundActive:', playgroundActive);

      const fixedThemeToggle = document.getElementById("fixed-theme-toggle");
      if (fixedThemeToggle) {
        if (showSidebar) {
          fixedThemeToggle.style.display = "none";
        }
        else {
          fixedThemeToggle.style.display = "block";
        }
      }
    };
 
    window.addEventListener('scroll', checkAndToggleSidebar);
    checkAndToggleSidebar();
  }

  /* ═══════════════════════════════════════════════════════════════
     SEARCH - FIXED & IMPROVED
     ═══════════════════════════════════════════════════════════════ */

  // Get search elements
  var searchInput = document.querySelector(".sidebar-dock #searchInput");
  var searchDropdown = document.getElementById("searchDropdown");
  var searchLoader = document.getElementById("searchLoader");
  var recentSearchesLists = document.querySelectorAll("#recentSearchesList, #dropdownRecentSearchesList, #sidebarRecentSearchesList");
  var recentSearchesSections = document.querySelectorAll("#recentSearchesSection, #dropdownRecentSearchesSection, #sidebarRecentSearchesSection");
  var dropdownRecentSearchesSection = document.getElementById("dropdownRecentSearchesSection") || document.getElementById("recentSearchesSection");
  var resultsList = document.getElementById("resultsList");
  var resultsSection = document.getElementById("resultsSection");
  var tipsSection = document.getElementById("tipsSection");
  var noResultsMessage = document.getElementById("noResultsMessage");

  // Hide top navigation search
  var navSearchInput = document.getElementById("navSearchInput");
  if (navSearchInput) {
    var navSearchContainer = navSearchInput.closest('.nav-search-container');
    if (navSearchContainer) {
      navSearchContainer.style.display = 'none';
    } else {
      navSearchInput.style.display = 'none';
    }
  }

  function getMatchingProjects(query) {
    if (!query || query.trim() === '') return [];
    
    var q = query.toLowerCase().trim();
    var matches = [];
    var favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    
    projectCards.forEach(function (card) {
      var title = (card.querySelector("h3") || {}).textContent || "";
      var desc = (card.querySelector("p") || {}).textContent || "";
      var tags = (card.getAttribute("data-tags") || "").toLowerCase();
      var category = card.getAttribute("data-category") || "";
      var projectName = card.getAttribute("data-project") || "";
      var isFav = favorites.includes(projectName);
      
      var catMatch = currentCategory === "all" || 
                     (currentCategory === "favorites" && isFav) ||
                     (currentCategory !== "favorites" && category === currentCategory);
      
      var searchMatch = title.toLowerCase().includes(q) ||
                       desc.toLowerCase().includes(q) ||
                       tags.includes(q);
      
      if (catMatch && searchMatch) {
        matches.push({
          card: card,
          title: title,
          desc: desc,
          tags: tags,
          category: category,
          projectName: projectName,
          isFav: isFav
        });
      }
    });
    
    return matches;
  }

  function highlightText(container, text, query) {
    var safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var parts = text.split(new RegExp("(" + safe + ")", "gi"));
    parts.forEach(function (part) {
      if (part && part.toLowerCase() === query.toLowerCase()) {
        var mark = document.createElement("mark");
        mark.style.background = "var(--accent-soft, #e8f0fe)";
        mark.style.color = "var(--accent, #1a73e8)";
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
    if (searchDropdown) {
      searchDropdown.classList.remove("active");
      searchDropdown.style.display = 'none';
    }
  }

  function openDropdown() {
    if (searchDropdown) {
      searchDropdown.classList.add("active");
      searchDropdown.style.display = 'block';
    }
  }

  function renderRecentSearches() {
    if (noResultsMessage) noResultsMessage.style.display = "none";
    if (recentSearchesSections.length === 0) return;

    recentSearchesLists.forEach(function (listContainer) {
      if (!listContainer) return;
      listContainer.innerHTML = "";

      if (recentSearches.length === 0) {
        var emptyEl = document.createElement("p");
        emptyEl.className = "recent-searches-empty";
        emptyEl.textContent = "No recent searches yet. Start exploring projects!";
        listContainer.appendChild(emptyEl);
      } else {
        recentSearches.slice(0, 5).forEach(function (search) {
          var chip = document.createElement("div");
          chip.className = "recent-search-chip";
          chip.setAttribute("role", "listitem");

          var labelBtn = document.createElement("button");
          labelBtn.type = "button";
          labelBtn.className = "recent-search-chip-label";
          labelBtn.setAttribute("aria-label", "Search for " + search);
          var labelSpan = document.createElement("span");
          labelSpan.textContent = search;
          labelBtn.appendChild(labelSpan);

          var removeBtn = document.createElement("button");
          removeBtn.type = "button";
          removeBtn.className = "recent-search-chip-remove";
          removeBtn.setAttribute("aria-label", "Remove search");
          removeBtn.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';

          chip.append(labelBtn, removeBtn);

          labelBtn.addEventListener("click", function () {
            if (searchInput) {
              searchInput.value = search;
              currentSearchQuery = search;
              performSearch(true);
              closeDropdown();
            }
          });

          removeBtn.addEventListener("click", function (e) {
            e.stopPropagation();
            recentSearches = recentSearches.filter(function (s) {
              return s !== search;
            });
            localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
            renderRecentSearches();
          });

          listContainer.appendChild(chip);
        });
      }
    });

    var clearRecentBtns = document.querySelectorAll("#clearRecentBtn, #clearRecentDropdownBtn, #clearRecentSidebarBtn");
    clearRecentBtns.forEach(function (btn) {
      if (!btn) return;
      btn.style.display = recentSearches.length ? "inline-flex" : "none";
      btn.onclick = function (e) {
        e.stopPropagation();
        if (!recentSearches || recentSearches.length === 0) return;
        showConfirm(
          "Clear all recent searches? This cannot be undone.",
          function () {
            recentSearches = [];
            localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
            renderRecentSearches();
            closeDropdown();
          },
          function () {}
        );
      };
    });

    recentSearchesSections.forEach(function (section) {
      if (!section) return;
      section.style.display = "block";
    });
    if (resultsSection) resultsSection.style.display = "none";
    if (tipsSection) tipsSection.style.display = "block";
  }

  function renderSuggestions(query) {
    if (searchLoader) searchLoader.style.display = "none";
    
    if (!query || query.trim() === '') {
      renderRecentSearches();
      return;
    }

    var matches = getMatchingProjects(query);

    if (matches.length === 0) {
      if (resultsSection) resultsSection.style.display = "none";
      if (dropdownRecentSearchesSection) dropdownRecentSearchesSection.style.display = "none";
      if (tipsSection) tipsSection.style.display = "block";
      if (noResultsMessage) {
        noResultsMessage.style.display = "block";
        noResultsMessage.textContent = 'No projects found for "' + query + '"';
      }
      return;
    }

    if (noResultsMessage) noResultsMessage.style.display = "none";

    if (resultsList) {
      resultsList.innerHTML = "";
      matches.slice(0, 8).forEach(function (project, index) {
        var item = document.createElement("div");
        item.className = "dropdown-item" + (index === selectedSuggestionIndex ? " selected" : "");

        var iconBox = document.createElement("div");
        iconBox.className = "dropdown-item-icon";
        var banner = project.card.querySelector(".card-banner");
        if (banner) {
          var img = document.createElement("img");
          img.src = banner.src || "assets/banners/default.webp";
          img.alt = project.title + " project preview";
          img.loading = "lazy";
          iconBox.appendChild(img);
        }

        var titleBox = document.createElement("div");
        titleBox.className = "dropdown-item-text";
        highlightText(titleBox, project.title, query);
        
        if (project.desc) {
          var descSpan = document.createElement("span");
          descSpan.className = "dropdown-item-desc";
          descSpan.textContent = " — " + project.desc.substring(0, 60);
          if (project.desc.length > 60) descSpan.textContent += "...";
          titleBox.appendChild(descSpan);
        }

        var tag = document.createElement("span");
        tag.className = "dropdown-item-tag";
        tag.textContent = project.category || "project";

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
    if (dropdownRecentSearchesSection) dropdownRecentSearchesSection.style.display = "none";
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
    currentSearchQuery = title;
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
    var query = currentSearchQuery ? currentSearchQuery.trim().toLowerCase() : '';
    
    if (!query) {
      applyCategoryFilter(currentCategory);
      if (emptyStateHint) {
        emptyStateHint.textContent = "Try adjusting your search or category filter.";
      }
      var visibleCount = projectCards.filter(function(c) { 
        return c.style.display !== "none"; 
      }).length;
      if (projectCountBadge) {
        projectCountBadge.textContent = String(visibleCount) + " projects";
      }
      return;
    }

    if (currentCategory !== "all") {
      currentCategory = "all";
      syncSidebarTabs("all");
      syncStickyTabs("all");
    }

    if (commit) {
      recentSearches = recentSearches.filter(function (s) {
        return s.toLowerCase() !== query;
      });
      recentSearches.unshift(query);
      recentSearches = recentSearches.slice(0, 10);
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }

    var visibleCount = 0;
    var favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    
    projectCards.forEach(function (card) {
      var category = card.getAttribute("data-category") || "";
      var title = (card.querySelector("h3") || {}).textContent || "";
      var desc = (card.querySelector("p") || {}).textContent || "";
      var tags = (card.getAttribute("data-tags") || "").toLowerCase();
      var projectName = card.getAttribute("data-project") || "";
      var isFav = favorites.includes(projectName);

      var searchMatch = title.toLowerCase().includes(query) ||
                       desc.toLowerCase().includes(query) ||
                       tags.includes(query);

      if (searchMatch) {
        card.style.display = "";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? "block" : "none";
      if (visibleCount === 0 && emptyStateHint) {
        emptyStateHint.textContent = 'No projects match "' + query + '". Try a different keyword.';
      }
    }
    
    if (projectCountBadge) {
      projectCountBadge.textContent = String(visibleCount) + " projects";
    }
  }

  var searchInputs = [searchInput].filter(Boolean);

  if (searchInputs.length) {
    var debouncedSearch = debounce(function (query) {
      renderSuggestions(query);
    }, 200);

    searchInputs.forEach(function (input) {
      input.addEventListener("input", function (e) {
        var rawValue = e.target.value;
        var query = rawValue.trim();
        currentSearchQuery = query;

        if (clearSearchBtn) {
          clearSearchBtn.hidden = query === "";
        }
        
        if (searchLoader) {
          searchLoader.style.display = query ? "block" : "none";
        }
        
        debouncedSearch(query);
        performSearch(false);
      });

      input.addEventListener("focus", function () {
        if (searchDropdown) {
          openDropdown();
        }
        if (!currentSearchQuery || currentSearchQuery.trim() === '') {
          renderRecentSearches();
        } else {
          renderSuggestions(currentSearchQuery);
        }
      });

      input.addEventListener("blur", function () {
        setTimeout(function() {
          if (searchDropdown && !searchDropdown.matches(':hover')) {
            closeDropdown();
          }
        }, 200);
      });

      input.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
          input.value = "";
          currentSearchQuery = "";
          if (clearSearchBtn) {
            clearSearchBtn.hidden = true;
          }
          performSearch(false);
          closeDropdown();
          input.blur();
        }
        
        if (e.key === "Enter") {
          e.preventDefault();
          var query = currentSearchQuery ? currentSearchQuery.trim() : '';
          if (query) {
            performSearch(true);
            closeDropdown();
            if (projectsSection) {
              projectsSection.scrollIntoView({
                behavior: prefersReducedMotion() ? "auto" : "smooth",
                block: "start"
              });
            }
          }
        }
        
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault();
          var items = resultsList ? resultsList.querySelectorAll(".dropdown-item") : [];
          if (items.length === 0) return;
          
          var currentIndex = selectedSuggestionIndex;
          if (e.key === "ArrowDown") {
            selectedSuggestionIndex = Math.min(currentIndex + 1, items.length - 1);
          } else {
            selectedSuggestionIndex = Math.max(currentIndex - 1, -1);
          }
          updateSuggestionHighlight();
          
          if (selectedSuggestionIndex >= 0 && items[selectedSuggestionIndex]) {
            items[selectedSuggestionIndex].scrollIntoView({ block: 'nearest' });
          }
        }
      });
    });

    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", function () {
        searchInputs.forEach(function (input) {
          input.value = "";
        });
        currentSearchQuery = "";
        performSearch(false);
        closeDropdown();
        clearSearchBtn.hidden = true;
        if (searchInput) {
          searchInput.focus();
        }
      });
    }
  }

  document.addEventListener("click", function (e) {
    if (searchDropdown && searchInput && 
        !searchDropdown.contains(e.target) && 
        e.target !== searchInput) {
      closeDropdown();
    }
  });

  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
      return;
    }

    if (e.key === "/" && !isTypingInField(e.target)) {
      e.preventDefault();
      if (searchInput) {
        searchInput.focus();
        searchInput.select();
      }
    }
  });

  function isTypingInField(target) {
    if (!target) return false;
    var tag = target.tagName ? target.tagName.toLowerCase() : "";
    return tag === "input" || tag === "textarea" || tag === "select" || target.isContentEditable;
  }

  renderRecentSearches();
  console.log("🔍 Search functionality initialized successfully!");

  /* ═══════════════════════════════════════════════════════════════
      MODAL - COMPLETE FIX
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

  // ============================================
  // FIX: openProjectSafe - COMPLETE WORKING VERSION
  // ============================================
  function openProjectSafe(name, trigger) {
    if (!modal || !modalBody) return;

    console.log('📂 Opening project:', name);

    // Close any existing modal
    if (modal.classList.contains("active")) {
      modal.classList.remove("active");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
      setMainInert(false);
      if (removeTrap) {
        removeTrap();
        removeTrap = null;
      }
      modalBody.innerHTML = "";
      if (modalTitle) modalTitle.textContent = "";
    }

    lastFocusedElement = trigger || document.activeElement;

    // Set modal active
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = scrollbarWidth + "px";
    document.body.style.overflow = "hidden";
    setMainInert(true);

    // Show loading
    modalBody.innerHTML = `
      <div style="text-align:center;padding:60px 20px;">
        <div style="font-size:3rem;margin-bottom:20px;">⏳</div>
        <h3 style="color:#e2e8f0;">Loading ${name.replace(/-/g, ' ')}...</h3>
        <div style="margin:20px auto;width:40px;height:40px;border:4px solid #1e293b;border-top-color:#a78bfa;border-radius:50%;animation:spin 0.8s linear infinite;"></div>
      </div>
    `;

    // Add to recently viewed
    if (name) {
      var recent = JSON.parse(localStorage.getItem("recentProjects") || "[]");
      recent = recent.filter(function (r) { return r !== name; });
      recent.unshift(name);
      recent = recent.slice(0, 4);
      localStorage.setItem("recentProjects", JSON.stringify(recent));
      if (typeof window.updateRecentlyViewed === "function") window.updateRecentlyViewed();
    }

    // Load the project
    setTimeout(function() {
      try {
        var htmlContent = null;
        
        // Try getProjectHTML from project.js
        if (typeof getProjectHTML === 'function') {
          try {
            htmlContent = getProjectHTML(name);
            console.log('📄 getProjectHTML returned:', htmlContent ? 'content' : 'null');
          } catch(e) {
            console.warn('getProjectHTML error:', e.message);
          }
        }
        
        // If that failed, try direct function
        if (!htmlContent || htmlContent.trim().length < 50 || htmlContent.includes('error-state')) {
          var fnName = 'get' + name.split('-').map(function(w) {
            return w.charAt(0).toUpperCase() + w.slice(1);
          }).join('') + 'HTML';
          
          if (typeof window[fnName] === 'function') {
            try {
              htmlContent = window[fnName]();
              console.log('📄 Direct function loaded:', fnName);
            } catch(e) {
              console.warn(fnName + ' error:', e.message);
            }
          }
        }
        
        // If we have content, show it
        if (htmlContent && typeof htmlContent === 'string' && htmlContent.trim().length > 50 && !htmlContent.includes('error-state')) {
          modalBody.innerHTML = htmlContent;
          console.log('✅ Loaded:', name);
          
          // Initialize the project
          setTimeout(function() {
            try {
              // Try initializeProject from project.js
              if (typeof initializeProject === 'function') {
                initializeProject(name);
                console.log('✅ Initialized via project.js');
              }
              
              // Also try direct init function
              var initFn = 'init' + name.split('-').map(function(w) {
                return w.charAt(0).toUpperCase() + w.slice(1);
              }).join('');
              if (typeof window[initFn] === 'function') {
                window[initFn]();
                console.log('✅ Initialized via direct function:', initFn);
              }
            } catch(e) {
              console.warn('Init error:', e.message);
            }
          }, 100);
          
          // Setup focus trap
          if (removeTrap) removeTrap();
          removeTrap = trapFocus(modal);
          
          setTimeout(function () {
            if (modalClose && modalClose.focus) {
              modalClose.focus({ preventScroll: true });
            }
          }, 100);
          
          return;
        }
        
        // If nothing worked, show coming soon
        modalBody.innerHTML = `
          <div style="text-align:center;padding:60px 20px;">
            <div style="font-size:4rem;margin-bottom:1rem;">🚀</div>
            <h2 style="color:#e2e8f0;margin-bottom:0.5rem;">${name.replace(/-/g, ' ').toUpperCase()}</h2>
            <p style="color:#94a3b8;margin-bottom:1.5rem;">This project is coming soon!</p>
            <button onclick="closeProjectSafe()" 
                    style="background:#a78bfa;color:white;border:none;padding:12px 32px;border-radius:50px;cursor:pointer;font-size:1rem;">
              Close
            </button>
          </div>
        `;
        console.warn('⚠️ Project not available:', name);
        
      } catch (error) {
        console.error('Error loading project:', error);
        modalBody.innerHTML = `
          <div style="text-align:center;padding:60px 20px;">
            <div style="font-size:3rem;margin-bottom:20px;">⚠️</div>
            <h3 style="color:#e2e8f0;">Error Loading Project</h3>
            <p style="color:#94a3b8;">${error.message || 'Unknown error'}</p>
            <button onclick="closeProjectSafe()" 
                    style="margin-top:20px;background:#a78bfa;color:white;border:none;padding:12px 32px;border-radius:50px;cursor:pointer;">
              Close
            </button>
          </div>
        `;
      }
    }, 300);

    // Setup focus trap
    if (removeTrap) removeTrap();
    removeTrap = trapFocus(modal);

    setTimeout(function () {
      if (modalClose && modalClose.focus) {
        modalClose.focus({ preventScroll: true });
      }
    }, 100);
  }

  function closeProjectSafe() {
    if (!modal) return;
    if (!modal.classList.contains("active")) return;

    console.log('❌ Closing modal');

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.paddingRight = "";
    document.body.style.overflow = "";
    setMainInert(false);

    if (removeTrap) {
      removeTrap();
      removeTrap = null;
    }
    
    // Clear content
    if (modalBody) {
      modalBody.innerHTML = "";
    }
    if (modalTitle) {
      modalTitle.textContent = "";
    }

    if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
      var elemToFocus = lastFocusedElement;
      setTimeout(function () {
        elemToFocus.focus({ preventScroll: true });
      }, 50);
    }
    lastFocusedElement = null;
  }

  // Wire modal close handlers
  if (modalClose) {
    modalClose.onclick = closeProjectSafe;
  }
  
  if (modal) {
    modal.onclick = function (e) {
      if (e.target === modal) closeProjectSafe();
    };
  }
  
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeProjectSafe();
  });

  // Expose functions globally
  window.openProjectSafe = openProjectSafe;
  window.closeProjectSafe = closeProjectSafe;
  window.setMainInert = setMainInert;

  function updateFavoritesCountBadge() {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const count = favorites.length;
    
    const badge = document.getElementById("favoritesCountBadge");
    if (badge) {
      badge.textContent = "(" + count + ")";
    }
    
    const heroFavoriteCount = document.getElementById("heroFavoriteCount");
    if (heroFavoriteCount) {
      heroFavoriteCount.textContent = count;
    }
  }
  updateFavoritesCountBadge();

  /* ═══════════════════════════════════════════════════════════════
       WIRE PROJECT CARDS
       ═══════════════════════════════════════════════════════════════ */
  function wireProjectCard(card) {
    var name = card.getAttribute("data-project");
    const difficulty = card.getAttribute("data-difficulty");

    if (difficulty) {
      const badge = document.createElement("span");
      badge.className = "difficulty-badge " + difficulty.toLowerCase();
      badge.textContent = difficulty;
      card.appendChild(badge);
    }

    // Favorite Button
    var existingFavBtn = card.querySelector(".btn-favorite");
    if (existingFavBtn) {
      existingFavBtn.remove();
    }

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
        favBtn.style.color = "#f5a623";
        console.log("⭐ Added " + name + " to favorites");
      } else {
        favs.splice(idx, 1);
        favBtn.classList.remove("active");
        favBtn.innerHTML = '<i class="far fa-star"></i>';
        favBtn.style.color = "";
        console.log("☆ Removed " + name + " from favorites");
        if (currentCategory === "favorites") {
          card.style.display = "none";
        }
      }
      
      localStorage.setItem("favorites", JSON.stringify(favs));
      
      if (typeof updateSidebarCategoryCounts === 'function') {
        updateSidebarCategoryCounts();
      }
      if (typeof updateFavoritesCountBadge === 'function') {
        updateFavoritesCountBadge();
      }
    });

    var cardActions = card.querySelector(".card-actions");
    if (cardActions) cardActions.appendChild(favBtn);

    // Share Button
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

    // Play Button
    var playBtns = card.querySelectorAll(".btn-play");
    playBtns.forEach(function (play) {
      play.setAttribute("aria-label", "Open " + name);
      play.addEventListener("click", function (e) {
        e.stopPropagation();
        openProjectSafe(name, play);
      });
    });

    // Card Click
    card.addEventListener("click", function (e) {
      if (
        e.target.closest(".btn-play") ||
        e.target.closest(".btn-favorite") ||
        e.target.closest(".btn-share")
      )
        return;
      openProjectSafe(name, card);
    });

    // Card Mouse Tracking
    if (!prefersReducedMotion()) {
      card.addEventListener("mousemove", function (e) {
        var rect = card.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width) * 100;
        var y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mouse-x", x + "%");
        card.style.setProperty("--mouse-y", y + "%");
      });
    }
  }
  window.wireProjectCard = wireProjectCard;

  projectCards.forEach(wireProjectCard);

  updateSidebarCategoryCounts();

  window.updateRecentlyViewed = function () {
    var grid = document.getElementById("recentlyViewedGrid");
    var section = document.getElementById("recentlyViewedSection");
    if (!grid || !section) return;
    var recent = JSON.parse(localStorage.getItem("recentProjects") || "[]");
    const historyBadge = document.getElementById("historyCountBadge");

    if (historyBadge) {
      historyBadge.textContent = `(${recent.length})`;
    }
    const heroViewedCount = document.getElementById("heroViewedCount");
    if (heroViewedCount) {
      heroViewedCount.textContent = String(recent.length);
    }
    console.log("[DEBUG] recentProjects array:", recent);
    if (recent.length === 0) {
      section.style.display = "none";
      return;
    }
    section.style.display = "block";
    grid.innerHTML = "";
    recent.forEach(function (name) {
      var originalCard = projectCards.find(function (c) { return c.getAttribute("data-project") === name; });
      if (originalCard) {
        var clonedCard = originalCard.cloneNode(true);
        var existingFav = clonedCard.querySelector(".btn-favorite");
        if (existingFav) existingFav.remove();
        var existingShare = clonedCard.querySelector(".btn-share");
        if (existingShare) existingShare.remove();
        clonedCard.style.display = "";
        wireProjectCard(clonedCard);
        grid.appendChild(clonedCard);
        console.log("[DEBUG] added recently viewed card", name);
      }
    });
  };

  // Toast function
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

  // URL params auto-open
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

  // Reveal on Scroll
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

  // Scroll Progress Bar
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

  // URL parameters auto-open logic (duplicate removed)
  // Initial card filtering state update
  updateProjectVisibility(currentCategory, currentSearchQuery);
  window.updateRecentlyViewed();

  const clearBtn = document.getElementById("clearHistoryBtn");
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      showConfirm(
        "Clear recently viewed projects?",
        () => {
          localStorage.removeItem("recentProjects");
          window.updateRecentlyViewed();
          showToast("History Cleared");
        }
      );
    });
  }
});