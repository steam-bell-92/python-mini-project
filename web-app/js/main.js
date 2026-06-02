/* ═══════════════════════════════════════════════════════════════
   main.js — App wiring for Premium Python Projects Gallery
   ═══════════════════════════════════════════════════════════════ */

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function safeRun(fn) { try { fn(); } catch (e) { console.error(e); } }

function debounce(fn, ms) {
  var timer;
  return function () {
    var args = arguments; var ctx = this;
    clearTimeout(timer);
    timer = setTimeout(function () { fn.apply(ctx, args); }, ms);
  };
}

function syncThemeColor(theme) {
  var meta = document.getElementById('themeColorMeta');
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f4f6f9' : '#0c0f1a');
}

function escapeHtml(str) {
  var d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// ============================================
// INFO MODAL FUNCTIONS
// ============================================

function showInfoModal(title, steps) {
    var overlay = document.getElementById('infoModalOverlay');
    var titleEl = document.getElementById('infoModalTitle');
    var listEl = document.getElementById('infoModalList');
    
    if (!overlay || !titleEl || !listEl) return;
    
    titleEl.textContent = title;
    listEl.innerHTML = steps.map(function(step) {
        return '<li>' + step + '</li>';
    }).join('');
    
    overlay.classList.add('active');
    
    function closeModal() {
        overlay.classList.remove('active');
        closeBtn.removeEventListener('click', closeModal);
        gotItBtn.removeEventListener('click', closeModal);
        overlay.removeEventListener('click', overlayClick);
    }
    
    function overlayClick(e) {
        if (e.target === overlay) closeModal();
    }
    
    var closeBtn = document.getElementById('infoModalClose');
    var gotItBtn = document.getElementById('infoModalGotIt');
    
    closeBtn.addEventListener('click', closeModal);
    gotItBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', overlayClick);
}

var currentProjectName = '';

function setupModalInfoButton(projectName) {
    currentProjectName = projectName;
    var infoBtn = document.getElementById('modalInfoBtn');
    if (!infoBtn) return;
    
    var newBtn = infoBtn.cloneNode(true);
    infoBtn.parentNode.replaceChild(newBtn, infoBtn);
    
    newBtn.addEventListener('click', function() {
        if (typeof getProjectInstructions === 'function') {
            var info = getProjectInstructions(currentProjectName);
            showInfoModal(info.title, info.steps);
        }
    });
}

/* ── DOMContentLoaded ──────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  var html = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');
  var soundToggle = document.getElementById('soundToggle');
  var backToTopButton = document.getElementById('backToTop');
  var searchInput = document.getElementById('searchInput');
  var searchDropdown = document.getElementById('searchDropdown');
  var searchLoader = document.getElementById('searchLoader');
  var recentSearchesList = document.getElementById('recentSearchesList');
  var recentSearchesSection = document.getElementById('recentSearchesSection');
  var resultsList = document.getElementById('resultsList');
  var resultsSection = document.getElementById('resultsSection');
  var tipsSection = document.getElementById('tipsSection');
  var noResultsMessage = document.getElementById('noResultsMessage');
  var projectsSection = document.getElementById('projectsSection');
  var playgroundSection = document.getElementById('playgroundSection');
  var stickyFilterBar = document.getElementById('stickyFilterBar');
  var stickyTabs = document.querySelectorAll('.sticky-tab');
  var heroSection = document.querySelector('.hero-section');
  var cursorGlow = document.getElementById('cursorGlow');
  var heroProjectCount = document.getElementById('heroProjectCount');
  var heroGameCount = document.getElementById('heroGameCount');
  var heroMathCount = document.getElementById('heroMathCount');
  var heroUtilityCount = document.getElementById('heroUtilityCount');
  var modal = document.getElementById('projectModal');
  var modalBody = document.getElementById('modalBody');
  var modalClose = document.getElementById('modalClose');
  var modalTitle = document.getElementById('modalDialogTitle');
  var exploreBtn = document.getElementById('exploreBtn');
  var randomProjectBtn = document.getElementById('randomProjectBtn');
  var randomProjectBtnSidebar = document.getElementById('randomProjectBtnSidebar');
  var emptyState = document.getElementById('emptyState');
  var emptyStateHint = document.getElementById('emptyStateHint');
  var projectCountBadge = document.getElementById('projectCountBadge');
  var mobileMenuToggle = document.getElementById('mobileMenuToggle');
  var navControls = document.getElementById('navControls');
  var navbar = document.getElementById('mainNavbar');

  var currentCategory = 'all';
  var currentSearchQuery = '';
  var playgroundActive = false;
  var selectedSuggestionIndex = -1;
  var removeTrap = null;
  var lastFocusedElement = null;
  var projectCards = [];
  var recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');

  function setMainInert(isInert) {
    var main = document.getElementById('main-content');
    if (!main) return;
    if (isInert) main.setAttribute('inert', ''); else main.removeAttribute('inert');
  }

  function updateThemeToggleAria(isLight) {
    if (!themeToggle) return;
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
  }

  if (themeToggle) {
    var savedTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', savedTheme);
    syncThemeColor(savedTheme);
    themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    updateThemeToggleAria(savedTheme === 'light');

    themeToggle.addEventListener('click', function () {
      var current = html.getAttribute('data-theme');
      var next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      syncThemeColor(next);
      themeToggle.innerHTML = next === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
      updateThemeToggleAria(next === 'light');
    });
  }

  if (soundToggle && window.audioController) {
    function updateSoundIcon() {
      soundToggle.innerHTML = window.audioController.isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    }
    updateSoundIcon();
    soundToggle.addEventListener('click', function () {
      if (typeof window.audioController.toggleMute === 'function') {
        window.audioController.toggleMute();
        updateSoundIcon();
        if (!window.audioController.isMuted && typeof window.audioController.play === 'function') {
          window.audioController.play('click');
        }
      }
    });
  } else if (soundToggle) {
    soundToggle.addEventListener('click', function () {
      var icon = soundToggle.querySelector('i');
      if (icon) icon.className = icon.className === 'fas fa-volume-up' ? 'fas fa-volume-mute' : 'fas fa-volume-up';
    });
  }

  var heroSoundToggle = document.getElementById('heroSoundToggle');
  var heroThemeToggle = document.getElementById('heroThemeToggle');

  function syncHeroControlsIcons() {
    if (heroSoundToggle && soundToggle) {
      var realSoundIcon = soundToggle.querySelector('i');
      var heroSoundIcon = heroSoundToggle.querySelector('i');
      if (realSoundIcon && heroSoundIcon) heroSoundIcon.className = realSoundIcon.className;
    }
    if (heroThemeToggle && themeToggle) {
      var realThemeIcon = themeToggle.querySelector('i');
      var heroThemeIcon = heroThemeToggle.querySelector('i');
      if (realThemeIcon && heroThemeIcon) heroThemeIcon.className = realThemeIcon.className;
    }
  }

  if (heroSoundToggle && soundToggle) heroSoundToggle.addEventListener('click', function () { soundToggle.click(); setTimeout(syncHeroControlsIcons, 50); });
  if (heroThemeToggle && themeToggle) heroThemeToggle.addEventListener('click', function () { themeToggle.click(); setTimeout(syncHeroControlsIcons, 50); });
  setTimeout(syncHeroControlsIcons, 100);

  var mobileSidebarToggle = document.getElementById('mobileSidebarToggle');
  var mainSidebar = document.getElementById('mainSidebar');
  if (mobileSidebarToggle && mainSidebar) {
    mobileSidebarToggle.addEventListener('click', function () {
      var active = mainSidebar.classList.toggle('open');
      mobileSidebarToggle.setAttribute('aria-expanded', active);
      var icon = mobileSidebarToggle.querySelector('i');
      if (icon) icon.className = active ? 'fas fa-times' : 'fas fa-bars';
    });
    document.addEventListener('click', function (e) {
      if (mainSidebar && mobileSidebarToggle && !mainSidebar.contains(e.target) && e.target !== mobileSidebarToggle && mainSidebar.classList.contains('open')) {
        mainSidebar.classList.remove('open');
        mobileSidebarToggle.setAttribute('aria-expanded', 'false');
        var icon = mobileSidebarToggle.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      }
    });
  }

  var desktopSidebarToggle = document.getElementById("sidebarCollapseBtn");
  if (desktopSidebarToggle && mainSidebar) {
    desktopSidebarToggle.addEventListener("click", function () {
      var collapsed = mainSidebar.classList.toggle("collapsed");
      document.body.classList.toggle("sidebar-collapsed", collapsed);
      var icon = desktopSidebarToggle.querySelector("i");
      if (icon) icon.className = collapsed ? "fas fa-chevron-right" : "fas fa-chevron-left";
    });
  }

  if (backToTopButton) {
    var toggleBackToTop = function () { backToTopButton.classList.toggle('visible', window.scrollY > 300); };
    window.addEventListener('scroll', toggleBackToTop, { passive: true });
    toggleBackToTop();
    backToTopButton.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' }); });
  }

  if (cursorGlow && !prefersReducedMotion() && html.getAttribute('data-theme') !== 'light') {
    var glowTimeout;
    document.addEventListener('pointermove', function (e) {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
      cursorGlow.style.opacity = '0.5';
      clearTimeout(glowTimeout);
      glowTimeout = setTimeout(function () { cursorGlow.style.opacity = '0'; }, 3000);
    });
    document.addEventListener('pointerleave', function () { cursorGlow.style.opacity = '0'; });
  }

  var projectsGrid = document.querySelector('.projects-grid');
  var projectsTemplate = document.getElementById('projectsTemplate');
  if (projectsGrid && projectsGrid.children.length === 0 && projectsTemplate && projectsTemplate.content) {
    Array.from(projectsTemplate.content.querySelectorAll('.project-card')).forEach(function (card) { projectsGrid.appendChild(card.cloneNode(true)); });
  }

  projectCards = projectsGrid ? Array.from(projectsGrid.querySelectorAll('.project-card')) : Array.from(document.querySelectorAll('.project-card'));
  projectCards.sort(function (a, b) {
    var titleA = (a.querySelector('h3') || {}).textContent || '';
    var titleB = (b.querySelector('h3') || {}).textContent || '';
    return titleA.localeCompare(titleB, undefined, { sensitivity: 'base', numeric: true });
  });
  if (projectsGrid) projectCards.forEach(function (card) { projectsGrid.appendChild(card); });

  var totalCount = projectCards.length;
  var gameCount = projectCards.filter(function (c) { return c.getAttribute('data-category') === 'games'; }).length;
  var mathCount = projectCards.filter(function (c) { return c.getAttribute('data-category') === 'math'; }).length;
  var utilityCount = projectCards.filter(function (c) { return c.getAttribute('data-category') === 'utilities'; }).length;
  if (heroProjectCount) heroProjectCount.textContent = String(totalCount);
  if (heroGameCount) heroGameCount.textContent = String(gameCount);
  if (heroMathCount) heroMathCount.textContent = String(mathCount);
  if (heroUtilityCount) heroUtilityCount.textContent = String(utilityCount);
  if (projectCountBadge) projectCountBadge.textContent = String(totalCount) + ' projects';

  if (exploreBtn) exploreBtn.addEventListener('click', function () { if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); });

  var sidebarTabs = document.querySelectorAll('.sidebar-tab');

  function applyCategoryFilter(category) {
    if (category === 'playground') return;
    currentCategory = category;
    syncSidebarTabs(category);
    syncStickyTabs(category);
    var visibleCount = 0;
    var favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    projectCards.forEach(function (card) {
      var cardCat = card.getAttribute('data-category');
      var projectName = card.getAttribute('data-project');
      var isFav = favorites.includes(projectName);
      if (category === 'all' || (category === 'favorites' && isFav) || (category !== 'favorites' && cardCat === category)) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    if (emptyState) emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    if (projectCountBadge) projectCountBadge.textContent = String(visibleCount) + ' projects';
  }

  function syncSidebarTabs(category) {
    sidebarTabs.forEach(function (st) {
      var selected = st.getAttribute('data-category') === category;
      st.classList.toggle('active', selected);
      st.setAttribute('aria-selected', selected ? 'true' : 'false');
      st.setAttribute('tabindex', selected ? '0' : '-1');
    });
  }

  function syncStickyTabs(category) {
    stickyTabs.forEach(function (st) {
      var selected = st.getAttribute('data-sticky-category') === category;
      st.classList.toggle('active', selected);
      st.setAttribute('aria-selected', selected ? 'true' : 'false');
      st.setAttribute('tabindex', selected ? '0' : '-1');
    });
  }

  function showProjectsSection() {
    playgroundActive = false;
    if (playgroundSection) playgroundSection.style.display = 'none';
    if (projectsSection) projectsSection.style.display = '';
    if (window.playgroundAPI && typeof window.playgroundAPI.deactivate === 'function') window.playgroundAPI.deactivate();
  }

  function showPlaygroundSection() {
    playgroundActive = true;
    syncStickyTabs('playground');
    if (projectsSection) projectsSection.style.display = 'none';
    if (playgroundSection) {
      playgroundSection.style.display = '';
      if (window.playgroundAPI && typeof window.playgroundAPI.activate === 'function') window.playgroundAPI.activate();
    }
  }

  sidebarTabs.forEach(function (st) {
    st.addEventListener('click', function () {
      var category = st.getAttribute('data-category');
      var pageCategory = document.body.getAttribute('data-page');
      if (pageCategory) {
        if (category === pageCategory) {
          var grid = document.getElementById('projectsGrid');
          if (grid) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
    });
    st.addEventListener("click", function () {
      var category = st.getAttribute("data-category");
      var pageCategory = document.body.getAttribute("data-page");
      if (pageCategory && category !== pageCategory) {
        var pageMap = { 'all': 'index.html', 'games': 'games.html', 'math': 'math.html', 'utilities': 'utilities.html', 'favorites': 'index.html?category=favorites', 'playground': 'index.html?category=playground' };
        window.location.href = pageMap[category] || 'index.html';
        return;
      }
      if (pageCategory && category === pageCategory) {
        var grid = document.getElementById("projectsGrid");
        if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      syncSidebarTabs(category);
      syncStickyTabs(category);
      if (category === 'playground') {
        showPlaygroundSection();
        if (playgroundSection) playgroundSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        showProjectsSection();
        applyCategoryFilter(category);
        if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  stickyTabs.forEach(function (st) {
    st.addEventListener('click', function () {
      var category = st.getAttribute('data-sticky-category');
      syncStickyTabs(category);
      syncSidebarTabs(category);
      if (category === 'playground') {
        showPlaygroundSection();
        if (playgroundSection) playgroundSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        showProjectsSection();
        applyCategoryFilter(category);
        if (projectsSection) projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  if (stickyFilterBar && heroSection) {
    var heroObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { stickyFilterBar.classList.toggle('visible', !entry.isIntersecting); });
    }, { threshold: 0, rootMargin: '-80px 0px 0px 0px' });
    heroObserver.observe(heroSection);
    window.addEventListener('scroll', function () {
      var navH = navbar ? navbar.getBoundingClientRect().height : 72;
      stickyFilterBar.style.top = (navH + 16) + 'px';
    }, { passive: true });
  }

  function openRandomProject(trigger) {
    var visible = projectCards.filter(function (c) { return c.style.display !== 'none'; });
    var pool = visible.length ? visible : projectCards;
    var pick = pool[Math.floor(Math.random() * pool.length)];
    var name = pick.getAttribute('data-project');
    if (name && typeof openProjectSafe === 'function') openProjectSafe(name, trigger);
  }

  if (randomProjectBtn) randomProjectBtn.addEventListener('click', function () { openRandomProject(randomProjectBtn); });
  if (randomProjectBtnSidebar) randomProjectBtnSidebar.addEventListener('click', function () { openRandomProject(randomProjectBtnSidebar); });

  var pageCategory = document.body.getAttribute('data-page');
  if (sidebarTabs.length) syncSidebarTabs(pageCategory || 'all');
  if (stickyTabs.length) syncStickyTabs('all');

  if (!pageCategory && projectsSection) {
    var sidebarActiveObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var isVisible = entry.isIntersecting || entry.boundingClientRect.top < 200;
        document.body.classList.toggle('sidebar-active', isVisible);
      });
    }, { threshold: 0.05 });
    sidebarActiveObserver.observe(projectsSection);
  } else if (pageCategory) {
    document.body.classList.add('sidebar-active');
  }

  var searchKbdHint = document.getElementById('searchKbdHint');
  var kbdHintTimer;

  function showKbdHint() {
    if (!searchKbdHint) return;
    clearTimeout(kbdHintTimer);
    searchKbdHint.classList.add('visible');
    kbdHintTimer = setTimeout(function () { searchKbdHint.classList.remove('visible'); }, 3000);
  }

  var bodyClassObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === 'class') {
        var isActive = document.body.classList.contains('sidebar-active');
        if (isActive) showKbdHint();
        else { clearTimeout(kbdHintTimer); if (searchKbdHint) searchKbdHint.classList.remove('visible'); }
      }
    });
  });
  bodyClassObserver.observe(document.body, { attributes: true });
  if (searchInput) searchInput.addEventListener('focus', function () { clearTimeout(kbdHintTimer); if (searchKbdHint) searchKbdHint.classList.remove('visible'); });

  function getMatchingProjects(query) {
    if (!query) return [];
    var matches = [];
    projectCards.forEach(function (card) {
      var category = card.getAttribute('data-category');
      var title = (card.querySelector('h3') || {}).textContent || '';
      var desc = (card.querySelector('p') || {}).textContent || '';
      var tags = (card.getAttribute('data-tags') || '').toLowerCase();
      var q = query.toLowerCase();
      var catMatch = currentCategory === 'all' || category === currentCategory;
      var searchMatch = title.toLowerCase().includes(q) || desc.toLowerCase().includes(q) || tags.includes(q);
      if (catMatch && searchMatch) matches.push({ card: card, title: title, tags: tags, category: category });
    });
    return matches;
  }

  function highlightText(container, text, query) {
    var safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    var parts = text.split(new RegExp('(' + safe + ')', 'gi'));
    parts.forEach(function (part) {
      if (part.toLowerCase() === query.toLowerCase()) {
        var mark = document.createElement('mark');
        mark.style.background = 'var(--accent-soft)';
        mark.style.color = 'var(--accent)';
        mark.style.fontWeight = '600';
        mark.style.borderRadius = '2px';
        mark.style.padding = '0 2px';
        mark.textContent = part;
        container.appendChild(mark);
      } else if (part) container.appendChild(document.createTextNode(part));
    });
  }

  function closeDropdown() { if (searchDropdown) searchDropdown.classList.remove('active'); }

  function renderRecentSearches() {
    if (noResultsMessage) noResultsMessage.style.display = 'none';
    if (!recentSearchesSection) return;
    if (recentSearches.length === 0) {
      recentSearchesSection.style.display = 'none';
      if (tipsSection) tipsSection.style.display = 'block';
      if (resultsSection) resultsSection.style.display = 'none';
      return;
    }
    if (recentSearchesList) {
      recentSearchesList.innerHTML = '';
      recentSearches.slice(0, 5).forEach(function (search) {
        var item = document.createElement('div');
        item.className = 'dropdown-recent-item';
        var text = document.createElement('div');
        text.className = 'dropdown-recent-text';
        var clock = document.createElement('i');
        clock.className = 'fas fa-history';
        clock.style.opacity = '0.5';
        clock.style.fontSize = '0.8rem';
        var label = document.createElement('span');
        label.textContent = search;
        text.append(clock, label);
        var removeBtn = document.createElement('button');
        removeBtn.className = 'dropdown-recent-remove';
        removeBtn.setAttribute('aria-label', 'Remove search');
        removeBtn.innerHTML = '<i class="fas fa-times"></i>';
        item.append(text, removeBtn);
        label.addEventListener('click', function () {
          if (searchInput) searchInput.value = search;
          currentSearchQuery = search;
          performSearch();
          closeDropdown();
        });
        removeBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          recentSearches = recentSearches.filter(function (s) { return s !== search; });
          localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
          renderRecentSearches();
        });
        recentSearchesList.appendChild(item);
      });
    }
    recentSearchesSection.style.display = 'block';
    if (resultsSection) resultsSection.style.display = 'none';
    if (tipsSection) tipsSection.style.display = 'block';
  }

  function renderSuggestions(query) {
    if (searchLoader) searchLoader.style.display = 'none';
    if (!query) { renderRecentSearches(); return; }
    var matches = getMatchingProjects(query);
    if (matches.length === 0) {
      if (resultsSection) resultsSection.style.display = 'none';
      if (recentSearchesSection) recentSearchesSection.style.display = 'none';
      if (tipsSection) tipsSection.style.display = 'block';
      if (noResultsMessage) noResultsMessage.style.display = 'block';
      return;
    }
    if (noResultsMessage) noResultsMessage.style.display = 'none';
    if (resultsList) {
      resultsList.innerHTML = '';
      matches.slice(0, 8).forEach(function (project, index) {
        var item = document.createElement('div');
        item.className = 'dropdown-item' + (index === selectedSuggestionIndex ? ' selected' : '');
        var iconBox = document.createElement('div');
        iconBox.className = 'dropdown-item-icon';
        var banner = project.card.querySelector('.card-banner');
        if (banner) {
          var img = document.createElement('img');
          img.src = banner.src;
          img.alt = '';
          iconBox.appendChild(img);
        }
        var titleBox = document.createElement('div');
        titleBox.className = 'dropdown-item-text';
        highlightText(titleBox, project.title, query);
        var tag = document.createElement('span');
        tag.className = 'dropdown-item-tag';
        tag.textContent = project.category;
        item.append(iconBox, titleBox, tag);
        item.addEventListener('click', function () { selectSuggestion(project.title); });
        item.addEventListener('mouseenter', function () { selectedSuggestionIndex = index; updateSuggestionHighlight(); });
        resultsList.appendChild(item);
      });
    }
    if (resultsSection) resultsSection.style.display = 'block';
    if (recentSearchesSection) recentSearchesSection.style.display = 'none';
    if (tipsSection) tipsSection.style.display = 'none';
    selectedSuggestionIndex = -1;
  }

  function updateSuggestionHighlight() {
    if (!resultsList) return;
    var items = resultsList.querySelectorAll('.dropdown-item');
    items.forEach(function (item, i) { item.classList.toggle('selected', i === selectedSuggestionIndex); });
  }

  function selectSuggestion(title) {
    if (!searchInput) return;
    searchInput.value = title;
    currentSearchQuery = title.toLowerCase();
    performSearch();
    closeDropdown();
    if (projectsSection) projectsSection.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  }

  function performSearch() {
    var query = currentSearchQuery;
    if (!query) {
        applyCategoryFilter(currentCategory);
        if (emptyStateHint) emptyStateHint.textContent = 'Try adjusting your search or category filter.';
        return;
    }
    
    // Get fresh DOM cards every time
    var domCards = document.querySelectorAll('.project-card');
    
    if (currentCategory !== 'all') {
        currentCategory = 'all';
        syncSidebarTabs('all');
        syncStickyTabs('all');
    }
    
    recentSearches = recentSearches.filter(function (s) { return s !== query; });
    recentSearches.unshift(query);
    recentSearches = recentSearches.slice(0, 10);
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
    
    var visibleCount = 0;
    var favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    domCards.forEach(function (card) {
        var category = card.getAttribute('data-category');
        var title = (card.querySelector('h3') || {}).textContent || '';
        var desc = (card.querySelector('p') || {}).textContent || '';
        var tags = (card.getAttribute('data-tags') || '').toLowerCase();
        var projectName = card.getAttribute('data-project');
        var isFav = favorites.includes(projectName);
        
        var catMatch = (currentCategory === 'all') || (currentCategory === 'favorites' && isFav) || (currentCategory !== 'favorites' && category === currentCategory);
        var searchMatch = title.toLowerCase().includes(query) || desc.toLowerCase().includes(query) || tags.includes(query);
        
        if (catMatch && searchMatch) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        if (visibleCount === 0 && emptyStateHint) {
            emptyStateHint.textContent = 'No projects match "' + query + '". Try a different keyword.';
        }
    }
    if (projectCountBadge) projectCountBadge.textContent = String(visibleCount) + ' projects';
  }

  if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.project-card');
        let visibleCount = 0;
        
        cards.forEach(card => {
            const title = card.querySelector('h3')?.textContent?.toLowerCase() || '';
            const desc = card.querySelector('p')?.textContent?.toLowerCase() || '';
            const tags = card.getAttribute('data-tags')?.toLowerCase() || '';
            
            if (title.includes(query) || desc.includes(query) || tags.includes(query) || query === '') {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        if (projectCountBadge) projectCountBadge.textContent = visibleCount + ' projects';
        
        if (emptyState) {
            emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
            if (visibleCount === 0 && emptyStateHint) {
                emptyStateHint.textContent = 'No projects match "' + query + '". Try a different keyword.';
            }
        }
    });
    
    searchInput.addEventListener('focus', function () {
        if (searchDropdown) searchDropdown.classList.add('active');
        if (!currentSearchQuery) renderRecentSearches();
    });
    
    searchInput.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { closeDropdown(); searchInput.blur(); }
    });
  }
  document.addEventListener('click', function (e) {
    if (searchDropdown && searchInput && !searchDropdown.contains(e.target) && e.target !== searchInput) closeDropdown();
  });
  document.addEventListener('keydown', function (e) { if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); if (searchInput) searchInput.focus(); } });
  renderRecentSearches();

  // ============================================
  // MODAL FUNCTIONS
  // ============================================

  function getFocusableElements(root) {
    var sel = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(root.querySelectorAll(sel)).filter(function (el) {
      return !el.closest('[aria-hidden="true"]') && !el.classList.contains('visually-hidden');
    });
  }

  function trapFocus(modalEl) {
    var handler = function (e) {
      if (e.key !== 'Tab' || !modalEl.classList.contains('active')) return;
      var focusables = getFocusableElements(modalEl);
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus({ preventScroll: true });
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus({ preventScroll: true });
      }
    };
    document.addEventListener('keydown', handler, true);
    return function () { document.removeEventListener('keydown', handler, true); };
  }

  function openProjectSafe(name, trigger) {
    if (!modal || !modalBody) return;
    lastFocusedElement = trigger || document.activeElement;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = scrollbarWidth + 'px';
    document.body.style.overflow = 'hidden';
    setMainInert(true);

    safeRun(function () {
      if (typeof getProjectHTML === 'function') {
        modalBody.innerHTML = getProjectHTML(name) || '<div style="padding:1rem;color:var(--text-secondary)">Project content unavailable.</div>';
      } else {
        modalBody.innerHTML = '<div style="padding:1rem;color:var(--text-secondary)">Project content unavailable.</div>';
      }
      if (typeof initializeProject === 'function') initializeProject(name);if (typeof initializeProject === 'function') {
        console.log('Calling initializeProject for:', name);
        initializeProject(name);
      } else {
        console.warn('initializeProject is not a function');
      }
      setupModalInfoButton(name);
    });

    removeTrap = trapFocus(modal);
    var focusables = getFocusableElements(modalBody);
    var firstFocusable = focusables[0] || modalClose;
    if (firstFocusable && typeof firstFocusable.focus === 'function') {
      firstFocusable.focus({ preventScroll: true });
    }
  }

  function closeProjectSafe() {
    if (!modal || !modal.classList.contains('active')) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.paddingRight = '';
    document.body.style.overflow = '';
    setMainInert(false);
    if (removeTrap) { removeTrap(); removeTrap = null; }
    if (modalBody) modalBody.innerHTML = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus({ preventScroll: true });
    lastFocusedElement = null;
  }

  if (modalClose) modalClose.addEventListener('click', closeProjectSafe);
  if (modal) modal.addEventListener('click', function (e) { if (e.target === modal) closeProjectSafe(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeProjectSafe(); });

  window.openProjectSafe = openProjectSafe;
  window.closeProjectSafe = closeProjectSafe;

  projectCards.forEach(function (card) {
    var name = card.getAttribute('data-project');
    var favBtn = document.createElement('button');
    favBtn.className = 'btn-favorite';
    favBtn.setAttribute('aria-label', 'Toggle favorite');
    favBtn.innerHTML = '<i class="far fa-star"></i>';
    var favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (favorites.includes(name)) { favBtn.classList.add('active'); favBtn.innerHTML = '<i class="fas fa-star"></i>'; }
    favBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var favs = JSON.parse(localStorage.getItem('favorites') || '[]');
      var idx = favs.indexOf(name);
      if (idx === -1) {
        favs.push(name);
        favBtn.classList.add('active');
        favBtn.innerHTML = '<i class="fas fa-star"></i>';
      } else {
        favs.splice(idx, 1);
        favBtn.classList.remove('active');
        favBtn.innerHTML = '<i class="far fa-star"></i>';
        if (currentCategory === 'favorites') card.style.display = 'none';
      }
      localStorage.setItem('favorites', JSON.stringify(favs));
    });
    var cardActions = card.querySelector('.card-actions');
    if (cardActions) cardActions.appendChild(favBtn);
    var shareBtn = document.createElement('button');
    shareBtn.className = 'btn-share';
    shareBtn.setAttribute('aria-label', 'Share ' + name);
    shareBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
    shareBtn.title = 'Copy shareable link';
    shareBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var url = window.location.origin + window.location.pathname + '?project=' + encodeURIComponent(name);
      navigator.clipboard.writeText(url).then(function () { showToast('Link copied!'); }).catch(function () { showToast('Copy this: ' + url); });
    });
    if (cardActions) cardActions.appendChild(shareBtn);
    var playBtns = card.querySelectorAll('.btn-play');
    playBtns.forEach(function (play) {
      play.setAttribute('aria-label', 'Open ' + name);
      play.addEventListener('click', function (e) { e.stopPropagation(); openProjectSafe(name, play); });
    });
    card.addEventListener('click', function (e) {
      if (e.target.closest('.btn-play') || e.target.closest('.btn-favorite') || e.target.closest('.btn-share')) return;
      openProjectSafe(name, card);
    });
    if (!prefersReducedMotion()) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width) * 100;
        var y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', x + '%');
        card.style.setProperty('--mouse-y', y + '%');
      });
    }
  });

  function showToast(message) {
    var existing = document.getElementById('shareToast');
    if (existing) existing.remove();
    var toast = document.createElement('div');
    toast.id = 'shareToast';
    toast.className = 'share-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    requestAnimationFrame(function () { toast.classList.add('share-toast--visible'); });
    setTimeout(function () {
      toast.classList.remove('share-toast--visible');
      setTimeout(function () { toast.remove(); }, 300);
    }, 2500);
  }

  (function () {
    var params = new URLSearchParams(window.location.search);
    var projectParam = params.get('project');
    if (projectParam) {
      var match = projectCards.find(function (c) { return c.getAttribute('data-project') === projectParam; });
      if (match) setTimeout(function () { openProjectSafe(projectParam, match); match.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 300);
    }
    var catParam = params.get('category');
    var valid = ['all', 'games', 'math', 'utilities', 'playground', 'favorites'];
    if (catParam && valid.includes(catParam)) {
      var tab = document.querySelector('[data-category="' + catParam + '"]');
      if (tab) setTimeout(function () { tab.click(); }, 100);
    }
  })();

  var timelineItems = document.querySelectorAll('.timeline-item[data-reveal]');
  if (timelineItems.length && !prefersReducedMotion()) {
    var timelineObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.25, rootMargin: '0px 0px -50px 0px' });
    timelineItems.forEach(function (item) { timelineObserver.observe(item); });
  } else if (timelineItems.length) {
    timelineItems.forEach(function (item) { item.classList.add('visible'); });
  }

  var revealItems = document.querySelectorAll('.reveal-on-scroll');
  if (revealItems.length && !prefersReducedMotion()) {
    var revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealItems.forEach(function (item) { revealObserver.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  document.querySelectorAll('.footer-cat-link').forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      var cat = link.getAttribute("data-cat");
      var tab = document.querySelector('.sidebar-tab[data-category="' + cat + '"]');
      if (tab) tab.click();
    });
  });

  var progressBar = document.getElementById("scrollProgressBar");
  if (progressBar) {
    var ticking = false;
    function updateScrollProgress() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var progress = docHeight ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = progress + "%";
      ticking = false;
    }
    window.addEventListener("scroll", function () {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    }, { passive: true });
    updateScrollProgress();
  }
  window.performSearch = performSearch;
  window.renderSuggestions = renderSuggestions;
  window.applyCategoryFilter = applyCategoryFilter;
  window.currentCategory = currentCategory;
  window.projectCards = projectCards;
});