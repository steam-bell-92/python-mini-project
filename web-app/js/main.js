/*
  main.js – lightweight app wiring
  ─────────────────────────────────────────────────────────────────────
  CHANGES vs original (search "── PLAYGROUND" for every touched area):
    1. projectsSection reference added (to hide/show vs playground)
    2. applyCategoryFilter() guards against 'playground' category
    3. Tab click handler detects playground tab and delegates to
       window.playgroundAPI (defined in playground.js)
    4. moveTabFocus() skips playground-only activation; other tabs
       call deactivatePlayground automatically
    5. randomProjectBtn is hidden while playground is active
  ─────────────────────────────────────────────────────────────────────
  Everything else is 100 % identical to the original.
*/

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Accessibility helper referenced by modal code
function setMainInert(isInert) {
    var main = document.getElementById('main-content');
    if (!main) return;
    if (isInert) main.setAttribute('inert', ''); else main.removeAttribute('inert');
}

function safeRun(fn) {
    try { fn(); } catch (err) { console.error(err); }
}

// Debounce function for smooth search performance
function debounce(func, delay) {
    var timeoutId;
    return function () {
        var args = arguments;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(function () { func.apply(null, args); }, delay);
    };
}

// Sync the theme-color <meta> tag with the current theme
function syncThemeColor(theme) {
    var meta = document.getElementById('themeColorMeta');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#fffdf8' : '#201a18');
}

document.addEventListener('DOMContentLoaded', function () {

    // Sort project cards lexicographically (alphabetically) by title
    var projectsGrid = document.querySelector('.projects-grid');
    var rawCards = projectsGrid ? Array.from(projectsGrid.querySelectorAll('.project-card')) : [];
    if (rawCards.length > 0) {
        rawCards.sort(function (a, b) {
            var h3A = a.querySelector('h3');
            var h3B = b.querySelector('h3');
            var titleA = h3A ? h3A.textContent.trim() : '';
            var titleB = h3B ? h3B.textContent.trim() : '';
            return titleA.localeCompare(titleB);
        });
        var reorderedCards = document.createDocumentFragment();
        rawCards.forEach(function (card) {
            reorderedCards.appendChild(card);
        });
        projectsGrid.appendChild(reorderedCards);
    }

    // ── DOM references ──────────────────────────────────────────────
    var html = document.documentElement;
    var themeToggle = document.getElementById('themeToggle');
    var soundToggle = document.getElementById('soundToggle');
    var backToTopButton = document.getElementById('backToTop');
    var tabs = document.querySelectorAll('.tab');
    var projectCards = Array.from(document.querySelectorAll('.project-card'));
    var searchInput = document.getElementById('projectSearch') || document.getElementById('searchInput');
    var searchClear = document.getElementById('searchClear');
    var searchDropdown = document.getElementById('searchDropdown');
    var searchShortcut = document.getElementById('searchShortcut');
    var searchLoader = document.getElementById('searchLoader');
    var projectsSection = document.getElementById('projectsSection');
    var playgroundSection = document.getElementById('playgroundSection');
    var stickyFilterBar = document.getElementById('stickyFilterBar');
    var stickyTabs = document.querySelectorAll('.sticky-tab');
    var heroSection = document.querySelector('.hero-section');
    var cursorGlow = document.getElementById('cursorGlow');
    var heroTypewriter = document.getElementById('heroTypewriter');
    var heroProjectCount = document.getElementById('heroProjectCount');
    var heroGameCount = document.getElementById('heroGameCount');
    var heroUtilityCount = document.getElementById('heroUtilityCount');
    var revealItems = document.querySelectorAll('.reveal-on-scroll');
    var featureLaunchers = document.querySelectorAll('[data-project-target]');
    var emptyState = document.getElementById('emptyState');
    var resultsList = document.getElementById('resultsList');
    var resultsSection = document.getElementById('resultsSection');
    var recentSearchesList = document.getElementById('recentSearchesList');
    var recentSearchesSection = document.getElementById('recentSearchesSection');
    var tipsSection = document.getElementById('tipsSection');
    var noResultsMessage = document.getElementById('noResultsMessage');
    var modal = document.getElementById('projectModal');
    var modalBody = document.getElementById('modalBody');
    var modalClose = document.getElementById('modalClose');
    var modalTitle = document.getElementById('modalDialogTitle');
    /* randomProjectBtn and playgroundHeroBtn removed — sidebar handles those actions */


    var currentCategory = 'all';
    var currentSearchQuery = '';
    var playgroundActive = false;
    var selectedSuggestionIndex = -1;
    var removeTrap = null;
    var lastFocusedElement = null;
    var recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    //-----------------------project count badge------------------------------------
    const projectCountBadge = document.getElementById("projectCountBadge");
    const projectCount = document.querySelectorAll(".project-card").length;
    const gameCount = projectCards.filter(function (card) { return card.getAttribute('data-category') === 'games'; }).length;
    const utilityCount = projectCards.filter(function (card) { return card.getAttribute('data-category') === 'utilities'; }).length;

    if (projectCountBadge) {
        projectCountBadge.textContent = `${projectCount} projects`;
    }
    if (heroProjectCount) heroProjectCount.textContent = String(projectCount);
    if (heroGameCount) heroGameCount.textContent = String(gameCount);
    if (heroUtilityCount) heroUtilityCount.textContent = String(utilityCount);

    var rotatePhrases = [
        'typing speed drills',
        'math quiz rounds',
        'logic puzzle practice',
        'browser-ready Python wins'
    ];

    if (heroTypewriter && !prefersReducedMotion()) {
        var phraseIndex = 0;
        setInterval(function () {
            phraseIndex = (phraseIndex + 1) % rotatePhrases.length;
            heroTypewriter.textContent = rotatePhrases[phraseIndex];
        }, 2200);
    }

    if (cursorGlow && !prefersReducedMotion()) {
        document.addEventListener('pointermove', function (event) {
            cursorGlow.style.left = event.clientX + 'px';
            cursorGlow.style.top = event.clientY + 'px';
        });
        document.addEventListener('pointerleave', function () {
            cursorGlow.style.opacity = '0';
        });
        document.addEventListener('pointerenter', function () {
            cursorGlow.style.opacity = '0.5';
        });
    }
    // ── Theme Toggle ────────────────────────────────────────────────
    function updateThemeToggleAria(isLightTheme) {
        if (!themeToggle) return;
        themeToggle.setAttribute(
            'aria-label',
            isLightTheme ? 'Switch to dark mode' : 'Switch to light mode'
        );
    }

    if (themeToggle) {
        var savedTheme = localStorage.getItem('theme') || 'light';
        html.setAttribute('data-theme', savedTheme);
        syncThemeColor(savedTheme);
        themeToggle.innerHTML =
            savedTheme === 'light'
                ? '<img src="assets/sun.svg" alt="" aria-hidden="true" class="theme-icon">'
                : '<img src="assets/moon.svg" alt="" aria-hidden="true" class="theme-icon">';
        updateThemeToggleAria(savedTheme === 'light');

        themeToggle.addEventListener('click', function () {
            var currentTheme = html.getAttribute('data-theme');
            var newTheme = currentTheme === 'light' ? 'dark' : 'light';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            syncThemeColor(newTheme);

            themeToggle.innerHTML =
                newTheme === 'light'
                    ? '<img src="assets/sun.svg" alt="" aria-hidden="true" class="theme-icon">'
                    : '<img src="assets/moon.svg" alt="" aria-hidden="true" class="theme-icon">';
            updateThemeToggleAria(newTheme === 'light');
        });
    }

    // ── Sound Toggle ─────────────────────────────────────────────────
    if (soundToggle) {
        var updateSoundIcon = function () {
            if (window.audioController) {
                soundToggle.innerHTML = window.audioController.isMuted
                    ? '<i class="fas fa-volume-mute"></i>'
                    : '<i class="fas fa-volume-up"></i>';
            }
        };
        updateSoundIcon();
        soundToggle.addEventListener('click', function () {
            if (window.audioController && typeof window.audioController.toggleMute === 'function') {
                window.audioController.toggleMute();
                updateSoundIcon();
                if (!window.audioController.isMuted && typeof window.audioController.play === 'function') {
                    window.audioController.play('click');
                }
            }
        });
    }

    // ── Back to Top ──────────────────────────────────────────────────
    if (backToTopButton) {
        var toggleBackToTopButton = function () {
            backToTopButton.classList.toggle('visible', window.scrollY > 300);
            var navbar = document.querySelector('.navbar');
            if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 12);
        };
        window.addEventListener('scroll', toggleBackToTopButton, { passive: true });
        toggleBackToTopButton();

        backToTopButton.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
        });
    }

    // ── PLAYGROUND: helpers to show / hide sections ─────────────────
    /* ← PLAYGROUND ADD (entire block) */
    function showProjectsSection() {
        playgroundActive = false;
        if (playgroundSection) playgroundSection.style.display = 'none';
        if (projectsSection) projectsSection.style.display = '';
        if (window.playgroundAPI && typeof window.playgroundAPI.deactivate === 'function') {
            window.playgroundAPI.deactivate();
        }
    }

    function showPlaygroundSection() {
        playgroundActive = true;
        syncStickyTabs('playground');
        if (projectsSection) projectsSection.style.display = 'none';
        if (window.playgroundAPI && typeof window.playgroundAPI.activate === 'function') {
            window.playgroundAPI.activate();
        }
    }
    /* ← PLAYGROUND ADD end */
    // ── Sticky Filter Bar: position + show/hide on scroll ────────────
function syncStickyTabs(category) {
    stickyTabs.forEach(function (st) {
        var selected = st.getAttribute('data-sticky-category') === category;
        st.classList.toggle('active', selected);
        st.setAttribute('aria-selected', selected ? 'true' : 'false');
        st.setAttribute('tabindex', selected ? '0' : '-1');
    });
}

if (stickyFilterBar && heroSection) {
    // Position the bar directly below the navbar
    var navbar = document.querySelector('.navbar');
    function positionStickyBar() {
        var navHeight = navbar ? navbar.getBoundingClientRect().height : 0;
        stickyFilterBar.style.top = navHeight + 'px';
    }
    positionStickyBar();
    window.addEventListener('resize', positionStickyBar);

    var heroObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            stickyFilterBar.classList.toggle('visible', !entry.isIntersecting);
        });
    }, { threshold: 0 });
    heroObserver.observe(heroSection);
}

    // Wire sticky tab clicks — mirrors main tab behaviour
    stickyTabs.forEach(function (st) {
        st.addEventListener('click', function () {
            var category = st.getAttribute('data-sticky-category');

            // Sync sticky tabs UI
            syncStickyTabs(category);

            // Sync hero tabs UI
            tabs.forEach(function (t) {
                var selected = t.getAttribute('data-category') === category;
                t.classList.toggle('active', selected);
                t.setAttribute('aria-selected', selected ? 'true' : 'false');
                t.setAttribute('tabindex', selected ? '0' : '-1');
            });

            // Delegate section logic (same as hero tab click)
            if (category === 'playground') {
                showPlaygroundSection();
            } else {
                showProjectsSection();
                applyCategoryFilter(category);
            }
        });
    });

    // ── Category Filtering ───────────────────────────────────────────
    function applyCategoryFilter(category) {
        /* ── PLAYGROUND ADD: skip filtering when playground tab is selected ── */
        if (category === 'playground') return;
        /* ── PLAYGROUND ADD end ── */

        currentCategory = category;
        syncStickyTabs(category);
        var visibleCount = 0;
        var favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        projectCards.forEach(function (card) {
            var cardCategory = card.getAttribute('data-category');
            var projectName = card.getAttribute('data-project');
            var isFavorite = favorites.includes(projectName);

            if (category === 'all' || 
                (category === 'favorites' && isFavorite) || 
                (category !== 'favorites' && cardCategory === category)) {
                card.style.display = '';
                card.style.animation = prefersReducedMotion() ? 'none' : 'fadeIn 0.6s ease';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        if (emptyState) {
            emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
        }
        if (sidebarBadge) {
            sidebarBadge.textContent = String(visibleCount);
        }
    }

    function moveTabFocus(fromIndex, delta) {
        var len = tabs.length;
        var next = (fromIndex + delta + len) % len;
        tabs.forEach(function (t, i) {
            var selected = i === next;
            t.classList.toggle('active', selected);
            t.setAttribute('aria-selected', selected ? 'true' : 'false');
            t.setAttribute('tabindex', selected ? '0' : '-1');
        });
        tabs[next].focus();

        /* ── PLAYGROUND ADD: delegate to section helpers ── */
        var nextCategory = tabs[next].getAttribute('data-category');
        if (nextCategory === 'playground') {
            showPlaygroundSection();
        } else {
            showProjectsSection();
            applyCategoryFilter(nextCategory);
        }
        /* ── PLAYGROUND ADD end ── */
    }

    tabs.forEach(function (tab, index) {
        tab.addEventListener('click', function () {
            /* Update active state on all tabs */
            tabs.forEach(function (t) {
                var selected = t === tab;
                t.classList.toggle('active', selected);
                t.setAttribute('aria-selected', selected ? 'true' : 'false');
                t.setAttribute('tabindex', selected ? '0' : '-1');
            });

            var category = tab.getAttribute('data-category');

            /* ── PLAYGROUND ADD: playground tab gets its own section ── */
            if (category === 'playground') {
                showPlaygroundSection();
            } else {
                showProjectsSection();
                applyCategoryFilter(category);
            }
            /* ── PLAYGROUND ADD end ── */
        });

        tab.addEventListener('keydown', function (e) {
            var handled = false;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                moveTabFocus(index, 1);
                handled = true;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                moveTabFocus(index, -1);
                handled = true;
            } else if (e.key === 'Home') {
                moveTabFocus(index, -index);
                handled = true;
            } else if (e.key === 'End') {
                moveTabFocus(index, tabs.length - 1 - index);
                handled = true;
            }
            if (handled) e.preventDefault();
        });
    });

    // ── Sidebar Filter Tabs ───────────────────────────────────────────
    var sidebarTabs = document.querySelectorAll('.sidebar-tab');
    var sidebarBadge = document.getElementById('sidebarProjectCount');
    var sidebarRandomBtn = document.getElementById('randomProjectBtnSidebar');

    function syncSidebarTabs(category) {
        sidebarTabs.forEach(function (st) {
            var selected = st.getAttribute('data-category') === category;
            st.classList.toggle('active', selected);
            st.setAttribute('aria-selected', selected ? 'true' : 'false');
            st.setAttribute('tabindex', selected ? '0' : '-1');
        });
        if (sidebarBadge) {
            var visible = projectCards.filter(function (c) { return c.style.display !== 'none'; }).length;
            sidebarBadge.textContent = String(visible);
        }
    }

    sidebarTabs.forEach(function (st) {
        st.addEventListener('click', function () {
            var category = st.getAttribute('data-category');
            syncSidebarTabs(category);
            syncStickyTabs(category);

            if (category === 'playground') {
                showPlaygroundSection();
                var pg = document.getElementById('playgroundSection');
                if (pg) pg.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                showProjectsSection();
                applyCategoryFilter(category);
                if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    if (sidebarRandomBtn) {
        sidebarRandomBtn.addEventListener('click', function () {
            var visible = projectCards.filter(function (c) { return c.style.display !== 'none'; });
            var pool = visible.length ? visible : projectCards;
            var pick = pool[Math.floor(Math.random() * pool.length)];
            var name = pick.getAttribute('data-project');
            if (name && typeof openProjectSafe === 'function') {
                openProjectSafe(name, sidebarRandomBtn);
                setTimeout(function () {
                    pick.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        });
    }

    // ── Search / Autocomplete ─────────────────────────────────────────
    function getMatchingProjects(query) {
        if (!query) return [];
        var matches = [];
        projectCards.forEach(function (card) {
            var category = card.getAttribute('data-category');
            var title = card.querySelector('h3').textContent.toLowerCase();
            var description = card.querySelector('p').textContent.toLowerCase();
            var tags = (card.getAttribute('data-tags') || '').toLowerCase();

            var categoryMatch = currentCategory === 'all' || category === currentCategory;
            var searchMatch = title.includes(query) ||
                description.includes(query) ||
                tags.includes(query);

            if (categoryMatch && searchMatch) {
                matches.push({
                    card: card,
                    title: card.querySelector('h3').textContent,
                    tags: card.getAttribute('data-tags') || '',
                    category: category
                });
            }
        });
        return matches;
    }

    function highlightText(container, text, query) {
        var safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        var chunks = text.split(new RegExp('(' + safeQuery + ')', 'gi'));

        chunks.forEach(function (part) {
            if (part.toLowerCase() === query.toLowerCase()) {
                var highlight = document.createElement('mark');
                highlight.style.background = 'rgba(99, 102, 241, 0.3)';
                highlight.style.color = 'var(--primary-color)';
                highlight.style.fontWeight = '600';
                highlight.textContent = part;
                container.appendChild(highlight);
            } else if (part) {
                container.appendChild(document.createTextNode(part));
            }
        });
    }

    function updateSuggestionHighlight() {
        if (!resultsList) return;
        var items = resultsList.querySelectorAll('.dropdown-item');
        items.forEach(function (item, i) {
            item.classList.toggle('selected', i === selectedSuggestionIndex);
        });
    }

    function selectSuggestion(title) {
        if (!searchInput) return;
        searchInput.value = title;
        currentSearchQuery = title.toLowerCase();
        performSearch();
        closeDropdown();
        if (projectsSection) {
            projectsSection.scrollIntoView({
                behavior: prefersReducedMotion() ? 'auto' : 'smooth',
                block: 'start'
            });
        }
    }

    function cleanSearchHighlights() {
        projectCards.forEach(function (card) {
            var titleEl = card.querySelector('h3');
            var descEl = card.querySelector('p');
            [titleEl, descEl].forEach(function (el) {
                if (!el) return;
                el.querySelectorAll('mark.search-highlight').forEach(function (m) {
                    m.replaceWith(m.textContent);
                });
            });
        });
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function highlightCardText(el, query) {
        var safe = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        var regex = new RegExp('(' + safe + ')', 'gi');
        var escaped = escapeHtml(el.textContent);
        var html = escaped.replace(regex, '<mark class="search-highlight" style="background:rgba(255,198,132,0.35);color:inherit;border-radius:3px;padding:0 2px;font-weight:600">$1</mark>');
        el.innerHTML = html;
    }

    function performSearch() {
        var query = currentSearchQuery;
        cleanSearchHighlights();

        if (!query) {
            applyCategoryFilter(currentCategory);
            updateSearchResultCount(0);
            var hint = document.getElementById('emptyStateHint');
            if (hint) hint.textContent = 'Try adjusting your search or category filter.';
            return;
        }

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
        projectCards.forEach(function (card) {
            var category    = card.getAttribute('data-category');
            var titleText   = (card.querySelector('h3') || {}).textContent || '';
            var descText    = (card.querySelector('p') || {}).textContent || '';
            var title       = titleText.toLowerCase();
            var description = descText.toLowerCase();
            var tags        = (card.getAttribute('data-tags') || '').toLowerCase();
            var projectName = card.getAttribute('data-project');
            var isFavorite  = favorites.includes(projectName);

            var categoryMatch = currentCategory === 'all' || 
                                (currentCategory === 'favorites' && isFavorite) ||
                                (currentCategory !== 'favorites' && category === currentCategory);
            var searchMatch   = title.includes(query) ||
                                description.includes(query) ||
                                tags.includes(query);

            if (categoryMatch && searchMatch) {
                card.style.display = '';
                card.style.animation = prefersReducedMotion() ? 'none' : 'fadeIn 0.5s ease';
                visibleCount++;
                var titleEl = card.querySelector('h3');
                var descEl = card.querySelector('p');
                if (titleEl) highlightCardText(titleEl, query);
                if (descEl) highlightCardText(descEl, query);
            } else {
                card.style.display = 'none';
            }
        });
        
        if (emptyState) {
            var showEmpty = visibleCount === 0;
            emptyState.style.display = showEmpty ? 'block' : 'none';
            if (showEmpty) {
                var hint = document.getElementById('emptyStateHint');
                if (hint) hint.textContent = 'No projects match "' + query + '". Try a different keyword.';
            }
        }

        updateSearchResultCount(visibleCount);
    }

    function updateSearchResultCount(count) {
        var badge = document.getElementById('searchResultCount');
        if (!badge) {
            if (!searchInput) return;
            badge = document.createElement('span');
            badge.id = 'searchResultCount';
            badge.style.cssText = 'font-family:IBM Plex Mono,monospace;font-size:0.72rem;color:var(--text-secondary);margin-left:0.5rem;white-space:nowrap;opacity:0;transition:opacity 0.2s ease';
            searchInput.parentNode.appendChild(badge);
        }
        if (count > 0) {
            badge.textContent = count + ' result' + (count !== 1 ? 's' : '');
            badge.style.opacity = '1';
        } else {
            badge.style.opacity = '0';
        }
    }

    function closeDropdown() {
        if (searchDropdown) searchDropdown.classList.remove('active');
    }

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
                var recentText = document.createElement('div');
                recentText.className = 'dropdown-recent-text';

                var clockIcon = document.createElement('i');
                clockIcon.className = 'fas fa-history';
                clockIcon.style.opacity = '0.5';
                clockIcon.style.fontSize = '0.9rem';

                var searchLabel = document.createElement('span');
                searchLabel.style.flex = '1';
                searchLabel.style.cursor = 'pointer';
                searchLabel.style.color = 'var(--text-secondary)';
                searchLabel.textContent = search;

                recentText.append(clockIcon, searchLabel);

                var removeButton = document.createElement('button');
                removeButton.className = 'dropdown-recent-remove';
                removeButton.setAttribute('aria-label', 'Remove search');

                var removeIcon = document.createElement('i');
                removeIcon.className = 'fas fa-x';
                removeButton.appendChild(removeIcon);

                item.append(recentText, removeButton);

                searchLabel.addEventListener('click', function () {
                    if (searchInput) {
                        searchInput.value = search;
                        currentSearchQuery = search;
                        performSearch();
                        closeDropdown();
                    }
                });

                removeButton.addEventListener('click', function (e) {
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
                var bannerEl = project.card.querySelector('.card-banner');
                var iconBox = document.createElement('div');
                iconBox.className = 'dropdown-item-icon';
                if (bannerEl) {
                    var img = document.createElement('img');
                    img.src = bannerEl.src;
                    img.alt = '';
                    img.style.cssText = 'width:24px;height:24px;border-radius:4px;object-fit:cover';
                    iconBox.appendChild(img);
                }

                var titleBox = document.createElement('div');
                titleBox.className = 'dropdown-item-text';
                highlightText(titleBox, project.title, query);

                var categoryTag = document.createElement('span');
                categoryTag.className = 'dropdown-item-tag';
                categoryTag.textContent = project.category;

                item.append(iconBox, titleBox, categoryTag);
                item.addEventListener('click', function () { selectSuggestion(project.title); });
                item.addEventListener('mouseenter', function () {
                    selectedSuggestionIndex = index;
                    updateSuggestionHighlight();
                });
                resultsList.appendChild(item);
            });
        }

        if (resultsSection) resultsSection.style.display = 'block';
        if (recentSearchesSection) recentSearchesSection.style.display = 'none';
        if (tipsSection) tipsSection.style.display = 'none';
        selectedSuggestionIndex = -1;
    }

    if (searchInput) {
        var debouncedSearch = debounce(function (query) {
            renderSuggestions(query);
        }, 200);

        searchInput.addEventListener('input', function (e) {
            var query = e.target.value.trim().toLowerCase();
            currentSearchQuery = query;
            if (searchClear) searchClear.style.display = query ? 'flex' : 'none';
            if (searchLoader) searchLoader.style.display = query ? 'block' : 'none';
            debouncedSearch(query);
            performSearch();
            if (query && projectsSection && document.activeElement === searchInput) {
                projectsSection.scrollIntoView({
                    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        });

        searchInput.addEventListener('focus', function () {
            if (searchDropdown) searchDropdown.classList.add('active');
            if (searchShortcut) searchShortcut.style.display = 'none';
            if (!currentSearchQuery) renderRecentSearches();
        });

        searchInput.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') { closeDropdown(); searchInput.blur(); }
        });
    }

    if (searchClear) {
        searchClear.addEventListener('click', function () {
            if (searchInput) searchInput.value = '';
            currentSearchQuery = '';
            searchClear.style.display = 'none';
            if (searchLoader) searchLoader.style.display = 'none';
            cleanSearchHighlights();
            updateSearchResultCount(0);
            var hint = document.getElementById('emptyStateHint');
            if (hint) hint.textContent = 'Try adjusting your search or category filter.';
            applyCategoryFilter(currentCategory);
            closeDropdown();
        });
    }

    document.addEventListener('click', function (e) {
        if (searchDropdown && searchInput &&
            !searchDropdown.contains(e.target) && e.target !== searchInput) {
            closeDropdown();
        }
    });

    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchInput) searchInput.focus();
        }
    });

    renderRecentSearches();

    // ── Init sidebar ─────────────────────────────────────────────────
    if (sidebarTabs.length) syncSidebarTabs('all');

    // ── Central Dynamic Auto-Scaling (ResizeObserver) ─────────────────
    var modalResizeObserver = null;

    function applyModalScaling() {
        var modalContent = document.querySelector('.modal-content');
        var modalBody = document.getElementById('modalBody');
        if (!modalContent || !modalBody) return;

        modalContent.scrollTop = 0;
        modalBody.scrollTop = 0;

        modalContent.style.overflow = 'auto';

        modalBody.style.transform = '';
        modalBody.style.transformOrigin = '';
        modalBody.style.width = '100%';
        modalBody.style.height = '';
        modalBody.style.display = 'flex';
        modalBody.style.flexDirection = 'column';
        modalBody.style.alignItems = 'stretch';
        modalBody.style.gap = '1rem';

        var targetEl = Array.from(modalBody.children).find(function (el) {
            return el.tagName.toLowerCase() !== 'style';
        }) || modalBody.firstElementChild;
        if (!targetEl) return;

        targetEl.style.transform = '';
        targetEl.style.transformOrigin = '';
        targetEl.style.width = '100%';
        targetEl.style.maxWidth = '100%';
    }

    function initModalScaling() {
        applyModalScaling();

        if (modalResizeObserver) {
            modalResizeObserver.disconnect();
        }

        var modalBody = document.getElementById('modalBody');
        var targetEl = modalBody ? Array.from(modalBody.children).find(function (el) {
            return el.tagName.toLowerCase() !== 'style';
        }) || modalBody.firstElementChild : null;
        if (targetEl) {
            modalResizeObserver = new ResizeObserver(function () {
                requestAnimationFrame(applyModalScaling);
            });
            modalResizeObserver.observe(targetEl);
        }

        window.addEventListener('resize', applyModalScaling);
    }

    function destroyModalScaling() {
        if (modalResizeObserver) {
            modalResizeObserver.disconnect();
            modalResizeObserver = null;
        }
        window.removeEventListener('resize', applyModalScaling);
    }

    // ── Focus Trap for Modal ──────────────────────────────────────────
    function getFocusableElements(root) {
        var selector =
            'button:not([disabled]), [href], input:not([disabled]), ' +
            'select:not([disabled]), textarea:not([disabled]), ' +
            '[tabindex]:not([tabindex="-1"])';
        return Array.from(root.querySelectorAll(selector)).filter(function (el) {
            return !el.closest('[aria-hidden="true"]') &&
                !el.classList.contains('visually-hidden');
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

    // ── Open / Close Project Modal ────────────────────────────────────
    /*
     * PLAYGROUND NOTE: openProjectSafe() is called synchronously from
     * card clicks. It NEVER touches Pyodide and NEVER waits for it.
     * The modal opens instantly regardless of Pyodide load state.
     */
    function openProjectSafe(name, trigger) {
        if (!modal || !modalBody) return;

        lastFocusedElement = trigger || document.activeElement;

        if (modalTitle) modalTitle.textContent = name || 'Interactive project';

        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        
        // Prevent scroll shift by adding padding equal to scrollbar width
        var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.paddingRight = scrollbarWidth + 'px';
        document.body.style.overflow = 'hidden';
        setMainInert(true);

        safeRun(function () {
            if (typeof getProjectHTML === 'function') {
                modalBody.innerHTML =
                    getProjectHTML(name) ||
                    '<div style="padding:1rem">Project content unavailable.</div>';
            } else {
                modalBody.innerHTML = '<div style="padding:1rem">Project content unavailable.</div>';
            }
            if (typeof initializeProject === 'function') initializeProject(name);
        });

        // Initialize reactive scale calculations
        initModalScaling();

        removeTrap = trapFocus(modal);
        var focusables = getFocusableElements(modalBody);
        var firstFocusable = focusables[0] || modalClose;
        if (firstFocusable && typeof firstFocusable.focus === 'function') {
            firstFocusable.focus({ preventScroll: true });
        }
    }

    function closeProjectSafe() {
        if (!modal || !modal.classList.contains('active')) return;

        destroyModalScaling();

        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.paddingRight = '';
        document.body.style.overflow = '';
        setMainInert(false);
        if (removeTrap) { removeTrap(); removeTrap = null; }
        if (modalBody) {
            modalBody.innerHTML = '';
            modalBody.style.transform = '';
            modalBody.style.transformOrigin = '';
            modalBody.style.width = '';
            modalBody.style.height = '';
            modalBody.style.display = '';
            modalBody.style.alignItems = '';
            modalBody.style.gap = '';
        }
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus({ preventScroll: true });
        }
        lastFocusedElement = null;
    }

    if (modalClose) modalClose.addEventListener('click', closeProjectSafe);
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) closeProjectSafe();
        });
    }
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeProjectSafe();
    });

    // ── Wire Cards and Play Buttons ───────────────────────────────────
    projectCards.forEach(function (card) {
        var name = card.getAttribute('data-project');
        var categoryName = card.getAttribute('data-category') || 'project';
        var metaRow = document.createElement('div');
        metaRow.className = 'project-card-meta';

        var categoryBadge = document.createElement('span');
        categoryBadge.className = 'project-card-badge';
        categoryBadge.textContent = categoryName;
        metaRow.appendChild(categoryBadge);

        var favBtn = document.createElement('button');
        favBtn.className = 'btn-favorite';
        favBtn.setAttribute('aria-label', 'Toggle favorite');
        favBtn.textContent = '\u2606';

        var favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        if (favorites.includes(name)) {
            favBtn.classList.add('active');
            favBtn.textContent = '\u2605';
        }

        favBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            var favs = JSON.parse(localStorage.getItem('favorites') || '[]');
            var idx = favs.indexOf(name);
            if (idx === -1) {
                favs.push(name);
                favBtn.classList.add('active');
                favBtn.textContent = '\u2605';
            } else {
                favs.splice(idx, 1);
                favBtn.classList.remove('active');
                favBtn.textContent = '\u2606';
                if (currentCategory === 'favorites') {
                    card.style.display = 'none';
                }
            }
            localStorage.setItem('favorites', JSON.stringify(favs));
        });
        var cardActions = card.querySelector('.card-actions');
        if (cardActions) {
            cardActions.appendChild(favBtn);
        } else {
            card.appendChild(favBtn);
        }

        var play = card.querySelector('.btn-play');
        if (play) {
            play.setAttribute('aria-label', 'Open ' + name);
            play.addEventListener('click', function (e) {
                e.stopPropagation();
                openProjectSafe(name, play);
            });
        }
        card.appendChild(metaRow);
        card.addEventListener('click', function () { openProjectSafe(name, card); });
    });

    // ── Random button is in the sidebar (#randomProjectBtnSidebar) ─────

    featureLaunchers.forEach(function (node) {
        node.addEventListener('click', function (e) {
            if (e.target.closest('[data-project-target]') === node) {
                var targetProject = node.getAttribute('data-project-target');
                if (targetProject) openProjectSafe(targetProject, node);
            }
        });
    });

    if (!prefersReducedMotion()) {
        projectCards.forEach(function (card) {
            card.addEventListener('mousemove', function (event) {
                var rect = card.getBoundingClientRect();
                var px = (event.clientX - rect.left) / rect.width;
                var py = (event.clientY - rect.top) / rect.height;
                var rotateY = (px - 0.5) * 10;
                var rotateX = (0.5 - py) * 8;
                card.style.transform = 'perspective(900px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) translateY(-8px)';
            });
            card.addEventListener('mouseleave', function () {
                card.style.transform = '';
            });
        });

        var parallaxItems = document.querySelectorAll('[data-parallax]');
        window.addEventListener('scroll', function () {
            var scrollY = window.scrollY;
            parallaxItems.forEach(function (item) {
                var ratio = parseFloat(item.getAttribute('data-parallax') || '0');
                item.style.transform = 'translateY(' + Math.round(scrollY * ratio) + 'px)';
            });
        }, { passive: true });
    }

    // ── Intersection Observer Animations ─────────────────────────────
    if (!prefersReducedMotion()) {
        try {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeInUp 0.6s ease';
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
            projectCards.forEach(function (c) { observer.observe(c); });
        } catch (e) { /* ignore */ }
    }

    if (!prefersReducedMotion()) {
        try {
            var revealObserver = new IntersectionObserver(function (entries, obs) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                });
            }, { threshold: 0.2 });

            revealItems.forEach(function (item) { revealObserver.observe(item); });
        } catch (e) { /* ignore */ }
    } else {
        revealItems.forEach(function (item) { item.classList.add('is-visible'); });
    }

    // ── Hero Timeline scroll reveal ────────────────────────────
    var timelineNodes = document.querySelectorAll('.timeline-node[data-reveal]');
    var heroTimeline = document.getElementById('heroTimeline');

    function updateSpineProgress() {
        if (!heroTimeline) return;
        var revealed = document.querySelectorAll('.timeline-node.revealed').length;
        var total = timelineNodes.length;
        var pct = total > 0 ? (revealed / total) * 100 : 0;
        heroTimeline.style.setProperty('--spine-progress', pct);
    }

    if (timelineNodes.length) {
        timelineNodes[0].classList.add('revealed');
        updateSpineProgress();
    }

    if (timelineNodes.length > 1 && !prefersReducedMotion()) {
        var revealedCount = 1;
        var scrollAccum = 0;
        var prevScrollY = window.scrollY;

        window.addEventListener('scroll', function () {
            var currentScrollY = window.scrollY;
            var delta = currentScrollY - prevScrollY;
            scrollAccum += delta;
            prevScrollY = currentScrollY;

            if (scrollAccum >= 60) {
                while (scrollAccum >= 60 && revealedCount < timelineNodes.length) {
                    timelineNodes[revealedCount].classList.add('revealed');
                    revealedCount++;
                    scrollAccum -= 60;
                }
            } else if (scrollAccum <= -60) {
                while (scrollAccum <= -60 && revealedCount > 1) {
                    revealedCount--;
                    timelineNodes[revealedCount].classList.remove('revealed');
                    scrollAccum += 60;
                }
            }
            updateSpineProgress();
        }, { passive: true });
    } else if (timelineNodes.length > 1) {
        for (var i = 1; i < timelineNodes.length; i++) {
            timelineNodes[i].classList.add('revealed');
        }
        updateSpineProgress();
    }

    // ── Share Button Feature ──────────────────────────────────────────

// 1. Inject share button into every card dynamically
projectCards.forEach(function (card) {
    var projectName = card.getAttribute('data-project');
    var shareBtn = document.createElement('button');
    shareBtn.className = 'btn-share';
    shareBtn.setAttribute('aria-label', 'Share ' + projectName);
    shareBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>';
    shareBtn.title = 'Copy shareable link';

    shareBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // prevent card click opening modal
        var url = window.location.origin + window.location.pathname + '?project=' + encodeURIComponent(projectName);
        navigator.clipboard.writeText(url).then(function () {
            showToast('Link copied!');
        }).catch(function () {
            // Fallback for browsers that block clipboard
            showToast('Copy this: ' + url);
        });
    });

    var cardActions = card.querySelector('.card-actions');
    if (cardActions) {
        cardActions.appendChild(shareBtn);
    } else {
        card.appendChild(shareBtn);
    }
});

// 2. Toast notification helper
function showToast(message) {
    var existing = document.getElementById('shareToast');
    if (existing) existing.remove();

    var toast = document.createElement('div');
    toast.id = 'shareToast';
    toast.className = 'share-toast';
    toast.textContent = message;
    document.body.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(function () {
        toast.classList.add('share-toast--visible');
    });

    setTimeout(function () {
        toast.classList.remove('share-toast--visible');
        setTimeout(function () { toast.remove(); }, 300);
    }, 2500);
}

// 3. On page load, check for ?project= param and auto-open it
(function () {
    var params = new URLSearchParams(window.location.search);
    var projectParam = params.get('project');
    if (!projectParam) return;

    var matchingCard = projectCards.find(function (card) {
        return card.getAttribute('data-project') === projectParam;
    });

    if (matchingCard) {
        setTimeout(function () {
            var projectName = matchingCard.getAttribute('data-project');
            openProjectSafe(projectName, matchingCard);
            matchingCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300); // small delay so the page fully loads first
    }
})();

// 4. On page load, check for ?category= param and apply filter
(function () {
    var params = new URLSearchParams(window.location.search);
    var categoryParam = params.get('category');
    var validCategories = ['all', 'games', 'math', 'utilities', 'playground', 'favorites'];
    if (!categoryParam || !validCategories.includes(categoryParam)) return;

    var matchingTab = document.querySelector('[data-category="' + categoryParam + '"]');
    if (matchingTab) {
        setTimeout(function () {
            matchingTab.click();
        }, 100);
    }
})();

});
