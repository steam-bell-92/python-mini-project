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

document.addEventListener('DOMContentLoaded', function () {

    // ── Core DOM references ──────────────────────────────────────────
    var html = document.documentElement;
    var themeColorMeta = document.getElementById('themeColorMeta');
    var themeToggle = document.getElementById('themeToggle');
    var soundToggle = document.getElementById('soundToggle');
    var backToTopButton = document.getElementById('backToTop');
    var tabs = Array.from(document.querySelectorAll('.tab'));
    var projectCards = Array.from(document.querySelectorAll('.project-card'));
    var modal = document.getElementById('projectModal');
    var modalClose = document.getElementById('modalClose');
    var modalBody = document.getElementById('modalBody');
    var modalTitle = document.getElementById('modalDialogTitle');
    var randomProjectBtn = document.getElementById('randomProjectBtn');

    // ── PLAYGROUND: sections we need to show / hide ──────────────────
    var projectsSection = document.querySelector('.projects-section');   // ← PLAYGROUND ADD
    var playgroundSection = document.getElementById('playgroundSection');  // ← PLAYGROUND ADD

    // Search elements
    var searchInput = document.getElementById('projectSearch');
    var searchClear = document.getElementById('searchClear');
    var searchDropdown = document.getElementById('searchDropdown');
    var searchShortcut = document.getElementById('searchShortcut');
    var searchLoader = document.getElementById('searchLoader');
    var emptyState = document.getElementById('emptyState');
    var resultsList = document.getElementById('resultsList');
    var resultsSection = document.getElementById('resultsSection');
    var recentSearchesList = document.getElementById('recentSearchesList');
    var recentSearchesSection = document.getElementById('recentSearchesSection');
    var tipsSection = document.getElementById('tipsSection');

    var recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    var currentSearchQuery = '';
    var selectedSuggestionIndex = -1;
    var currentCategory = 'all';
    var lastFocusedElement = null;
    var removeTrap = null;

    // ── PLAYGROUND: track whether playground tab is active ──────────
    var playgroundActive = false;  // ← PLAYGROUND ADD

    // ── Theme ────────────────────────────────────────────────────────
    function syncThemeColor(theme) {
        if (!themeColorMeta) return;
        themeColorMeta.setAttribute('content', theme === 'light' ? '#f8fafc' : '#0f172a');
    }

    function updateThemeToggleAria(isLightTheme) {
        if (!themeToggle) return;
        themeToggle.setAttribute(
            'aria-label',
            isLightTheme ? 'Switch to dark mode' : 'Switch to light mode'
        );
    }

    if (themeToggle) {
        var savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
        syncThemeColor(savedTheme);
        themeToggle.innerHTML =
            savedTheme === 'light'
                ? '<i class="fas fa-sun" aria-hidden="true"></i>'
                : '<i class="fas fa-moon" aria-hidden="true"></i>';
        updateThemeToggleAria(savedTheme === 'light');

        themeToggle.addEventListener('click', function () {
            var currentTheme = html.getAttribute('data-theme');
            var newTheme = currentTheme === 'light' ? 'dark' : 'light';

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
        if (randomProjectBtn) randomProjectBtn.style.display = '';
        if (window.playgroundAPI && typeof window.playgroundAPI.deactivate === 'function') {
            window.playgroundAPI.deactivate();
        }
    }

    function showPlaygroundSection() {
        playgroundActive = true;
        if (projectsSection) projectsSection.style.display = 'none';
        if (randomProjectBtn) randomProjectBtn.style.display = 'none';
        if (window.playgroundAPI && typeof window.playgroundAPI.activate === 'function') {
            window.playgroundAPI.activate();
        }
    }
    /* ← PLAYGROUND ADD end */

    // ── Category Filtering ───────────────────────────────────────────
    function applyCategoryFilter(category) {
        /* ── PLAYGROUND ADD: skip filtering when playground tab is selected ── */
        if (category === 'playground') return;
        /* ── PLAYGROUND ADD end ── */

        currentCategory = category;
        projectCards.forEach(function (card) {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = '';
                card.style.animation = prefersReducedMotion() ? 'none' : 'fadeIn 0.6s ease';
            } else {
                card.style.display = 'none';
            }
        });
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
        const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const chunks = text.split(new RegExp(`(${safeQuery})`, 'gi'));

        chunks.forEach((part) => {
            if (part.toLowerCase() === query.toLowerCase()) {
                const highlight = document.createElement('mark');
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
    }

    function performSearch() {
        var query = currentSearchQuery;
        if (!query) {
            applyCategoryFilter(currentCategory);
            return;
        }

        recentSearches = recentSearches.filter(function (s) { return s !== query; });
        recentSearches.unshift(query);
        recentSearches = recentSearches.slice(0, 10);
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));

        projectCards.forEach(function (card) {
            var category    = card.getAttribute('data-category');
            var title       = card.querySelector('h3').textContent.toLowerCase();
            var description = card.querySelector('p').textContent.toLowerCase();
            var tags        = (card.getAttribute('data-tags') || '').toLowerCase();

            var categoryMatch = currentCategory === 'all' || category === currentCategory;
            var searchMatch   = title.includes(query) ||
                                description.includes(query) ||
                                tags.includes(query);

            card.style.display = (categoryMatch && searchMatch) ? '' : 'none';
        });
    }

    function closeDropdown() {
        if (searchDropdown) searchDropdown.classList.remove('active');
    }

    function renderRecentSearches() {
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
                const recentText = document.createElement('div');
                recentText.className = 'dropdown-recent-text';

                const clockIcon = document.createElement('i');
                clockIcon.className = 'fas fa-history';
                clockIcon.style.opacity = '0.5';
                clockIcon.style.fontSize = '0.9rem';

                const searchLabel = document.createElement('span');
                searchLabel.style.flex = '1';
                searchLabel.style.cursor = 'pointer';
                searchLabel.style.color = 'var(--text-secondary)';
                searchLabel.textContent = search;

                recentText.append(clockIcon, searchLabel);

                const removeButton = document.createElement('button');
                removeButton.className = 'dropdown-recent-remove';
                removeButton.setAttribute('aria-label', 'Remove search');

                const removeIcon = document.createElement('i');
                removeIcon.className = 'fas fa-x';
                removeButton.appendChild(removeIcon);

                item.append(recentText, removeButton);

                searchLabel.addEventListener('click', () => {
                    if (searchInput) {
                        searchInput.value = search;
                        currentSearchQuery = search;
                        performSearch();
                        closeDropdown();
                    }
                });

                removeButton.addEventListener('click', (e) => {
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
        if (!query) { renderRecentSearches(); return; }

        var matches = getMatchingProjects(query);

        if (matches.length === 0) {
            if (resultsSection) resultsSection.style.display = 'none';
            if (recentSearchesSection) recentSearchesSection.style.display = 'none';
            if (tipsSection) tipsSection.style.display = 'block';
            return;
        }

        if (resultsList) {
            resultsList.innerHTML = '';
            matches.slice(0, 8).forEach(function (project, index) {
                var item = document.createElement('div');
                item.className = 'dropdown-item' + (index === selectedSuggestionIndex ? ' selected' : '');
                const iconEl = project.card.querySelector('.card-icon');
                const iconText = iconEl ? iconEl.textContent : '';
                const iconBox = document.createElement('div');
                iconBox.className = 'dropdown-item-icon';
                iconBox.textContent = iconText;

                const titleBox = document.createElement('div');
                titleBox.className = 'dropdown-item-text';
                highlightText(titleBox, project.title, query);

                const categoryTag = document.createElement('span');
                categoryTag.className = 'dropdown-item-tag';
                categoryTag.textContent = project.category;

                item.append(iconBox, titleBox, categoryTag);
                item.addEventListener('click', () => selectSuggestion(project.title));
                item.addEventListener('mouseenter', () => {
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
                e.preventDefault(); last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault(); first.focus();
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

        removeTrap = trapFocus(modal);
        var focusables = getFocusableElements(modalBody);
        var firstFocusable = focusables[0] || modalClose;
        if (firstFocusable && typeof firstFocusable.focus === 'function') {
            firstFocusable.focus();
        }
    }

    function closeProjectSafe() {
        if (!modal || !modal.classList.contains('active')) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setMainInert(false);
        if (removeTrap) { removeTrap(); removeTrap = null; }
        if (modalBody) modalBody.innerHTML = '';
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
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
        var play = card.querySelector('.btn-play');
        if (play) {
            play.setAttribute('aria-label', 'Open ' + name);
            play.addEventListener('click', function (e) {
                e.stopPropagation();
                openProjectSafe(name, play);
            });
        }
        card.addEventListener('click', function () { openProjectSafe(name, card); });
    });

    // ── Random Project Generator ──────────────────────────────────────
    if (randomProjectBtn) {
        function getRandomProject() {
            var visibleCards = projectCards.filter(function (card) {
                return card.style.display !== 'none';
            });
            if (visibleCards.length === 0) {
                return projectCards[Math.floor(Math.random() * projectCards.length)];
            }
            return visibleCards[Math.floor(Math.random() * visibleCards.length)];
        }

        function selectRandomProject() {
            /*
             * PLAYGROUND ADD: ignore random button while playground is active
             * (button is already hidden, but guard defensively)
             */
            if (playgroundActive) return;

            var randomCard = getRandomProject();
            if (!randomCard) return;

            randomProjectBtn.classList.add('shuffle');
            setTimeout(function () { randomProjectBtn.classList.remove('shuffle'); }, 600);

            setTimeout(function () {
                var projectName = randomCard.getAttribute('data-project');
                openProjectSafe(projectName, randomProjectBtn);
                randomCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 300);
        }

        randomProjectBtn.addEventListener('click', selectRandomProject);
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

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 1: Skeleton Loader — show skeleton, then reveal grid
    // ══════════════════════════════════════════════════════════════════
    var skeletonLoader = document.getElementById('skeletonLoader');
    var projectsGrid = document.getElementById('projectsGrid');
    if (skeletonLoader && projectsGrid) {
        setTimeout(function () {
            skeletonLoader.style.display = 'none';
            projectsGrid.style.display = '';
            // Re-init lucide icons for any icons inside the grid
            if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
        }, 800);
    }

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 2: Scroll-Reveal for .reveal sections
    // ══════════════════════════════════════════════════════════════════
    if (!prefersReducedMotion()) {
        var revealElements = document.querySelectorAll('.reveal');
        if (revealElements.length) {
            var revealObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        revealObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });
            revealElements.forEach(function (el) { revealObserver.observe(el); });
        }
    }

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 3: Difficulty Badges on project cards
    // ══════════════════════════════════════════════════════════════════
    projectCards.forEach(function (card) {
        var difficulty = card.getAttribute('data-difficulty');
        if (difficulty) {
            var badge = document.createElement('span');
            badge.className = 'difficulty-badge difficulty-' + difficulty;
            badge.textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
            card.style.position = 'relative';
            card.appendChild(badge);
        }
    });

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 4: Project Count Badges on category tabs
    // ══════════════════════════════════════════════════════════════════
    tabs.forEach(function (tab) {
        var cat = tab.getAttribute('data-category');
        if (cat === 'playground') return;
        var count = cat === 'all'
            ? projectCards.length
            : projectCards.filter(function (c) { return c.getAttribute('data-category') === cat; }).length;
        var existing = tab.querySelector('.count-badge');
        if (!existing) {
            var countBadge = document.createElement('span');
            countBadge.className = 'count-badge';
            countBadge.textContent = count;
            tab.appendChild(countBadge);
        }
    });

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 5: Sort Controls
    // ══════════════════════════════════════════════════════════════════
    var sortBtns = document.querySelectorAll('.sort-btn');
    var originalOrder = Array.from(projectCards);
    sortBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            sortBtns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            var sortType = btn.getAttribute('data-sort');
            var grid = document.getElementById('projectsGrid');
            if (!grid) return;

            var cards = Array.from(grid.querySelectorAll('.project-card'));
            if (sortType === 'name') {
                cards.sort(function (a, b) {
                    return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
                });
            } else if (sortType === 'category') {
                cards.sort(function (a, b) {
                    return (a.getAttribute('data-category') || '').localeCompare(b.getAttribute('data-category') || '');
                });
            } else {
                cards = originalOrder.slice();
            }
            cards.forEach(function (c) { grid.appendChild(c); });
        });
    });

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 6: Featured Projects Carousel
    // ══════════════════════════════════════════════════════════════════
    var featuredTrack = document.getElementById('featuredTrack');
    var featuredPrev = document.getElementById('featuredPrev');
    var featuredNext = document.getElementById('featuredNext');
    if (featuredTrack && featuredPrev && featuredNext) {
        var scrollAmount = 320;
        featuredPrev.addEventListener('click', function () {
            featuredTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
        featuredNext.addEventListener('click', function () {
            featuredTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
        // Click featured card to open the project
        var featuredCards = featuredTrack.querySelectorAll('.featured-card');
        featuredCards.forEach(function (fc) {
            fc.addEventListener('click', function () {
                var proj = fc.getAttribute('data-project');
                if (proj) openProjectSafe(proj, fc);
            });
            fc.style.cursor = 'pointer';
        });
    }

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 7: Keyboard Navigation (J/K to move between cards)
    // ══════════════════════════════════════════════════════════════════
    var focusedCardIndex = -1;
    document.addEventListener('keydown', function (e) {
        // Don't capture when typing in input or modal is open
        if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA')) return;
        if (modal && modal.classList.contains('active')) return;

        var visibleCards = projectCards.filter(function (c) { return c.style.display !== 'none'; });
        if (!visibleCards.length) return;

        if (e.key === 'j' || e.key === 'J') {
            e.preventDefault();
            focusedCardIndex = Math.min(focusedCardIndex + 1, visibleCards.length - 1);
            visibleCards[focusedCardIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            visibleCards[focusedCardIndex].classList.add('keyboard-focused');
            if (focusedCardIndex > 0) visibleCards[focusedCardIndex - 1].classList.remove('keyboard-focused');
        } else if (e.key === 'k' || e.key === 'K') {
            e.preventDefault();
            focusedCardIndex = Math.max(focusedCardIndex - 1, 0);
            visibleCards[focusedCardIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            visibleCards[focusedCardIndex].classList.add('keyboard-focused');
            if (focusedCardIndex < visibleCards.length - 1) visibleCards[focusedCardIndex + 1].classList.remove('keyboard-focused');
        } else if (e.key === 'Enter' && focusedCardIndex >= 0 && focusedCardIndex < visibleCards.length) {
            var proj = visibleCards[focusedCardIndex].getAttribute('data-project');
            openProjectSafe(proj, visibleCards[focusedCardIndex]);
        }
    });

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 8: Toast Notification System
    // ══════════════════════════════════════════════════════════════════
    window.showToast = function (message, type) {
        type = type || 'info';
        var container = document.getElementById('toastContainer');
        if (!container) return;
        var toast = document.createElement('div');
        toast.className = 'toast toast-' + type;
        var icons = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle', warning: 'fa-exclamation-triangle' };
        toast.innerHTML = '<i class="fas ' + (icons[type] || icons.info) + '"></i><span>' + message + '</span>';
        container.appendChild(toast);
        requestAnimationFrame(function () { toast.classList.add('show'); });
        setTimeout(function () {
            toast.classList.remove('show');
            setTimeout(function () { toast.remove(); }, 400);
        }, 3500);
    };

    // Show welcome toast
    setTimeout(function () {
        if (typeof window.showToast === 'function') {
            window.showToast('Welcome! Press J/K to navigate cards, Ctrl+K to search.', 'info');
        }
    }, 1500);

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 9: FAQ Accordion
    // ══════════════════════════════════════════════════════════════════
    var faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var item = btn.parentElement;
            var isOpen = item.classList.contains('open');
            // Close all
            document.querySelectorAll('.faq-item').forEach(function (fi) { fi.classList.remove('open'); });
            // Toggle current
            if (!isOpen) item.classList.add('open');
        });
    });

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 10: Theme Transition Overlay (flash effect)
    // ══════════════════════════════════════════════════════════════════
    if (themeToggle) {
        var overlay = document.getElementById('themeOverlay');
        // Wrap existing theme toggle click to add flash
        themeToggle.addEventListener('click', function () {
            if (overlay && !prefersReducedMotion()) {
                overlay.classList.add('active');
                setTimeout(function () { overlay.classList.remove('active'); }, 400);
            }
        });
    }

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 11: Custom Cursor Dot (desktop only)
    // ══════════════════════════════════════════════════════════════════
    var cursorDot = document.getElementById('cursorDot');
    if (cursorDot && !('ontouchstart' in window) && !prefersReducedMotion()) {
        document.addEventListener('mousemove', function (e) {
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            cursorDot.style.opacity = '1';
        });
        document.addEventListener('mouseleave', function () {
            cursorDot.style.opacity = '0';
        });
    }

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 12: GitHub Stats Widget (fetch real data)
    // ══════════════════════════════════════════════════════════════════
    (function fetchGitHubStats() {
        var starsEl = document.getElementById('repoStars');
        var forksEl = document.getElementById('repoForks');
        var issuesEl = document.getElementById('repoIssues');
        if (!starsEl || !forksEl || !issuesEl) return;

        fetch('https://api.github.com/repos/steam-bell-92/python-mini-project')
            .then(function (r) { return r.json(); })
            .then(function (data) {
                if (data.stargazers_count !== undefined) starsEl.textContent = data.stargazers_count;
                if (data.forks_count !== undefined) forksEl.textContent = data.forks_count;
                if (data.open_issues_count !== undefined) issuesEl.textContent = data.open_issues_count;
            })
            .catch(function () { /* silently fail */ });
    })();

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 13: Newsletter form toast integration
    // ══════════════════════════════════════════════════════════════════
    var newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var emailInput = newsletterForm.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                if (typeof window.showToast === 'function') {
                    window.showToast('Thanks for subscribing! 🎉', 'success');
                }
                emailInput.value = '';
            }
        });
    }

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 14: Smooth card entrance stagger
    // ══════════════════════════════════════════════════════════════════
    if (!prefersReducedMotion()) {
        projectCards.forEach(function (card, i) {
            card.style.animationDelay = (i * 0.05) + 's';
        });
    }

    // ══════════════════════════════════════════════════════════════════
    // FEATURE 15: Active nav highlight on scroll
    // ══════════════════════════════════════════════════════════════════
    var sections = document.querySelectorAll('section[id]');
    if (sections.length) {
        window.addEventListener('scroll', function () {
            var scrollY = window.scrollY + 200;
            sections.forEach(function (section) {
                var top = section.offsetTop;
                var height = section.offsetHeight;
                if (scrollY >= top && scrollY < top + height) {
                    section.classList.add('section-active');
                } else {
                    section.classList.remove('section-active');
                }
            });
        }, { passive: true });
    }

});

// Smooth scroll to projects section
const exploreBtn = document.getElementById('exploreBtn');
if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
        const projectsSection = document.querySelector('.projects-section');
        if (projectsSection) {
            const prefersReducedMotionValue = prefersReducedMotion();
            projectsSection.scrollIntoView({
                behavior: prefersReducedMotionValue ? 'auto' : 'smooth',
                block: 'start'
            });
            // Focus on the projects section after scrolling
            setTimeout(() => {
                const firstTab = document.querySelector('.tab');
                if (firstTab) firstTab.focus();
            }, prefersReducedMotionValue ? 0 : 500);
        }
    });
}

// Accessibility helper referenced by modal code
function setMainInert(isInert) {
    const main = document.getElementById('main-content');
    if (!main) return;
    if (isInert) main.setAttribute('inert', ''); else main.removeAttribute('inert');
}

let lastFocusedElement = null;

// End of file (single coherent main.js implementation above)