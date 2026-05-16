/*
  main.js - lightweight app wiring
  - safe: guards around missing functions/elements
  - ensures Try It / Play buttons open modal even if project rendering fails
*/

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Accessibility helper referenced by modal code
function setMainInert(isInert) {
    const main = document.getElementById('main-content');
    if (!main) return;
    if (isInert) main.setAttribute('inert', ''); else main.removeAttribute('inert');
}

function safeRun(fn) {
    try { fn(); } catch (err) { console.error(err); }
}

// Debounce function for smooth search performance
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

document.addEventListener('DOMContentLoaded', () => {
    // ── Core DOM references ──
    const html = document.documentElement;
    const themeColorMeta = document.getElementById('themeColorMeta');
    const themeToggle = document.getElementById('themeToggle');
    const soundToggle = document.getElementById('soundToggle');
    const backToTopButton = document.getElementById('backToTop');
    const tabs = Array.from(document.querySelectorAll('.tab'));
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');
    const modalTitle = document.getElementById('modalDialogTitle');
    const randomProjectBtn = document.getElementById('randomProjectBtn');

    // Search elements
    const searchInput = document.getElementById('projectSearch');
    const searchClear = document.getElementById('searchClear');
    const searchDropdown = document.getElementById('searchDropdown');
    const searchShortcut = document.getElementById('searchShortcut');
    const searchLoader = document.getElementById('searchLoader');
    const emptyState = document.getElementById('emptyState');
    const resultsList = document.getElementById('resultsList');
    const resultsSection = document.getElementById('resultsSection');
    const recentSearchesList = document.getElementById('recentSearchesList');
    const recentSearchesSection = document.getElementById('recentSearchesSection');
    const tipsSection = document.getElementById('tipsSection');

    let recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    let currentSearchQuery = '';
    let selectedSuggestionIndex = -1;
    let currentCategory = 'all';
    let lastFocusedElement = null;
    let removeTrap = null;

    // ── Theme ──
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
        const savedTheme = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', savedTheme);
        syncThemeColor(savedTheme);
        themeToggle.innerHTML =
            savedTheme === 'light'
                ? '<i class="fas fa-sun" aria-hidden="true"></i>'
                : '<i class="fas fa-moon" aria-hidden="true"></i>';
        updateThemeToggleAria(savedTheme === 'light');

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

    // ── Sound Toggle ──
    if (soundToggle) {
        const updateSoundIcon = () => {
            if (window.audioController) {
                soundToggle.innerHTML = window.audioController.isMuted
                    ? '<i class="fas fa-volume-mute"></i>'
                    : '<i class="fas fa-volume-up"></i>';
            }
        };
        updateSoundIcon();
        soundToggle.addEventListener('click', () => {
            if (window.audioController && typeof window.audioController.toggleMute === 'function') {
                window.audioController.toggleMute();
                updateSoundIcon();
                if (!window.audioController.isMuted && typeof window.audioController.play === 'function') {
                    window.audioController.play('click');
                }
            }
        });
    }

    // ── Back to Top ──
    if (backToTopButton) {
        const toggleBackToTopButton = () => {
            backToTopButton.classList.toggle('visible', window.scrollY > 300);
        };

        window.addEventListener('scroll', toggleBackToTopButton, { passive: true });
        toggleBackToTopButton();

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
        });
    }

    // ── Category Filtering ──
    function applyCategoryFilter(category) {
        currentCategory = category;
        projectCards.forEach((card) => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = '';
                if (!prefersReducedMotion()) {
                    card.style.animation = 'fadeIn 0.6s ease';
                } else {
                    card.style.animation = 'none';
                }
            } else {
                card.style.display = 'none';
            }
        });
    }

    function moveTabFocus(fromIndex, delta) {
        const len = tabs.length;
        const next = (fromIndex + delta + len) % len;
        tabs.forEach((t, i) => {
            const selected = i === next;
            t.classList.toggle('active', selected);
            t.setAttribute('aria-selected', selected ? 'true' : 'false');
            t.setAttribute('tabindex', selected ? '0' : '-1');
        });
        tabs[next].focus();
        applyCategoryFilter(tabs[next].getAttribute('data-category'));
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => {
                const selected = t === tab;
                t.classList.toggle('active', selected);
                t.setAttribute('aria-selected', selected ? 'true' : 'false');
                t.setAttribute('tabindex', selected ? '0' : '-1');
            });
            applyCategoryFilter(tab.getAttribute('data-category'));
        });

        tab.addEventListener('keydown', (e) => {
            let handled = false;
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
            if (handled) {
                e.preventDefault();
            }
        });
    });

    // ── Search / Autocomplete ──
    function getMatchingProjects(query) {
        if (!query) return [];

        const matches = [];
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const tags = (card.getAttribute('data-tags') || '').toLowerCase();

            const categoryMatch = currentCategory === 'all' || category === currentCategory;
            const searchMatch = title.includes(query) ||
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

    function highlightMatch(text, query) {
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));
        return parts.map(part =>
            part.toLowerCase() === query.toLowerCase()
                ? `<mark style="background: rgba(99, 102, 241, 0.3); color: var(--primary-color); font-weight: 600;">${part}</mark>`
                : part
        ).join('');
    }

    function updateSuggestionHighlight() {
        if (!resultsList) return;
        const items = resultsList.querySelectorAll('.dropdown-item');
        items.forEach((item, i) => {
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
        const query = currentSearchQuery;
        if (!query) {
            // Reset filter to show all in current category
            applyCategoryFilter(currentCategory);
            return;
        }

        // Save to recent searches
        recentSearches = recentSearches.filter(s => s !== query);
        recentSearches.unshift(query);
        recentSearches = recentSearches.slice(0, 10);
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));

        // Filter cards
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const tags = (card.getAttribute('data-tags') || '').toLowerCase();

            const categoryMatch = currentCategory === 'all' || category === currentCategory;
            const searchMatch = title.includes(query) ||
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
            recentSearches.slice(0, 5).forEach((search) => {
                const item = document.createElement('div');
                item.className = 'dropdown-recent-item';
                item.innerHTML = `
                    <div class="dropdown-recent-text">
                        <i class="fas fa-history" style="opacity: 0.5; font-size: 0.9rem;"></i>
                        <span style="flex: 1; cursor: pointer; color: var(--text-secondary);">${search}</span>
                    </div>
                    <button class="dropdown-recent-remove" aria-label="Remove search">
                        <i class="fas fa-x"></i>
                    </button>
                `;

                const textElement = item.querySelector('span');
                const removeBtn = item.querySelector('.dropdown-recent-remove');

                textElement.addEventListener('click', () => {
                    if (searchInput) {
                        searchInput.value = search;
                        currentSearchQuery = search;
                        performSearch();
                        closeDropdown();
                    }
                });

                removeBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    recentSearches = recentSearches.filter(s => s !== search);
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
        if (!query) {
            renderRecentSearches();
            return;
        }

        const matches = getMatchingProjects(query);

        if (matches.length === 0) {
            if (resultsSection) resultsSection.style.display = 'none';
            if (recentSearchesSection) recentSearchesSection.style.display = 'none';
            if (tipsSection) tipsSection.style.display = 'block';
            return;
        }

        if (resultsList) {
            resultsList.innerHTML = '';
            matches.slice(0, 8).forEach((project, index) => {
                const item = document.createElement('div');
                item.className = 'dropdown-item' + (index === selectedSuggestionIndex ? ' selected' : '');
                const iconEl = project.card.querySelector('.card-icon');
                const iconText = iconEl ? iconEl.textContent : '';
                item.innerHTML = `
                    <div class="dropdown-item-icon">${iconText}</div>
                    <div class="dropdown-item-text">${highlightMatch(project.title, query)}</div>
                    <span class="dropdown-item-tag">${project.category}</span>
                `;
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

    // Wire up search input if present
    if (searchInput) {
        const debouncedSearch = debounce((query) => {
            renderSuggestions(query);
        }, 200);

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim().toLowerCase();
            currentSearchQuery = query;
            if (searchClear) searchClear.style.display = query ? 'flex' : 'none';
            if (searchLoader) searchLoader.style.display = query ? 'block' : 'none';
            debouncedSearch(query);
        });

        searchInput.addEventListener('focus', () => {
            if (searchDropdown) searchDropdown.classList.add('active');
            if (searchShortcut) searchShortcut.style.display = 'none';
            if (!currentSearchQuery) renderRecentSearches();
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeDropdown();
                searchInput.blur();
            }
        });
    }

    if (searchClear) {
        searchClear.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            currentSearchQuery = '';
            searchClear.style.display = 'none';
            applyCategoryFilter(currentCategory);
            closeDropdown();
        });
    }

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
        if (searchDropdown && searchInput &&
            !searchDropdown.contains(e.target) && e.target !== searchInput) {
            closeDropdown();
        }
    });

    // Keyboard shortcut for search
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            if (searchInput) searchInput.focus();
        }
    });

    // Initialize recent searches
    renderRecentSearches();

    // ── Focus Trap for Modal ──
    function getFocusableElements(root) {
        const selector = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
        return Array.from(root.querySelectorAll(selector)).filter(
            el => !el.closest('[aria-hidden="true"]') && !el.classList.contains('visually-hidden')
        );
    }

    function trapFocus(modalEl) {
        const handler = (e) => {
            if (e.key !== 'Tab' || !modalEl.classList.contains('active')) return;
            const focusables = getFocusableElements(modalEl);
            if (!focusables.length) return;
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', handler, true);
        return () => document.removeEventListener('keydown', handler, true);
    }

    // ── Open / Close Project Modal ──
    function openProjectSafe(name, trigger) {
        if (!modal || !modalBody) return;

        lastFocusedElement = trigger || document.activeElement;

        // Set title
        if (modalTitle) modalTitle.textContent = name || 'Interactive project';

        // Show modal
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        setMainInert(true);

        // Load content safely
        safeRun(() => {
            if (typeof getProjectHTML === 'function') {
                modalBody.innerHTML = getProjectHTML(name) || '<div style="padding:1rem">Project content unavailable.</div>';
            } else {
                modalBody.innerHTML = '<div style="padding:1rem">Project content unavailable.</div>';
            }
            if (typeof initializeProject === 'function') initializeProject(name);
        });

        // Focus trap
        removeTrap = trapFocus(modal);
        // Initial focus
        const focusables = getFocusableElements(modalBody);
        (focusables[0] || modalClose)?.focus();
    }

    function closeProjectSafe() {
        if (!modal || !modal.classList.contains('active')) return;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        setMainInert(false);
        if (removeTrap) { removeTrap(); removeTrap = null; }
        if (modalBody) modalBody.innerHTML = '';
        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') lastFocusedElement.focus();
        lastFocusedElement = null;
    }

    // Modal close handlers
    if (modalClose) modalClose.addEventListener('click', closeProjectSafe);
    if (modal) modal.addEventListener('click', (e) => { if (e.target === modal) closeProjectSafe(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeProjectSafe(); });

    // ── Wire Cards and Play Buttons ──
    projectCards.forEach(card => {
        const name = card.getAttribute('data-project');
        const play = card.querySelector('.btn-play');
        if (play) {
            play.setAttribute('aria-label', `Open ${name}`);
            play.addEventListener('click', (e) => {
                e.stopPropagation();
                openProjectSafe(name, play);
            });
        }
        card.addEventListener('click', () => openProjectSafe(name, card));
    });

    // ── Random Project Generator ──
    if (randomProjectBtn) {
        function getRandomProject() {
            const visibleCards = projectCards.filter(card => card.style.display !== 'none');
            if (visibleCards.length === 0) {
                return projectCards[Math.floor(Math.random() * projectCards.length)];
            }
            return visibleCards[Math.floor(Math.random() * visibleCards.length)];
        }

        function selectRandomProject() {
            const randomCard = getRandomProject();
            if (!randomCard) return;

            // Add shuffle animation to the button
            randomProjectBtn.classList.add('shuffle');
            setTimeout(() => {
                randomProjectBtn.classList.remove('shuffle');
            }, 600);

            // Open the random project after a short delay for effect
            setTimeout(() => {
                const projectName = randomCard.getAttribute('data-project');
                openProjectSafe(projectName, randomProjectBtn);

                // Scroll to project card smoothly
                randomCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }, 300);
        }

        randomProjectBtn.addEventListener('click', selectRandomProject);
    }

    // ── Intersection Observer Animations ──
    if (!prefersReducedMotion()) {
        try {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.style.animation = 'fadeInUp 0.6s ease';
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });
            projectCards.forEach(c => observer.observe(c));
        } catch (e) { /* ignore */ }
    }
});

// End of file
