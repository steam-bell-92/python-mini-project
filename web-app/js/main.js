/*
  main.js - lightweight app wiring
  - safe: guards around missing functions/elements
  - ensures Try It / Play buttons open modal even if project rendering fails
*/

function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function syncThemeColor(theme) {
    if (!themeColorMeta) return;
    themeColorMeta.setAttribute('content', theme === 'light' ? '#f8fafc' : '#0f172a');
}

function updateThemeToggleAria(isLightTheme) {
    themeToggle.setAttribute(
        'aria-label',
        isLightTheme ? 'Switch to dark mode' : 'Switch to light mode'
    );
}

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

const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
syncThemeColor(savedTheme);
themeToggle.innerHTML =
    savedTheme === 'light'
        ? '<i class="fas fa-sun" aria-hidden="true"></i>'
        : '<i class="fas fa-moon" aria-hidden="true"></i>';
updateThemeToggleAria(savedTheme === 'light');


// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

const toggleBackToTopButton = () => {
    backToTopButton.classList.toggle('visible', window.scrollY > 300);
};

window.addEventListener('scroll', toggleBackToTopButton, { passive: true });
toggleBackToTopButton();

backToTopButton.addEventListener('click', () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
});

// Category Filtering
const tabs = document.querySelectorAll('.tab');
const projectCards = document.querySelectorAll('.project-card');

let recentSearches = JSON.parse(localStorage.getItem('recentSearches') || '[]');
// Restore persisted filter state so it survives modal open/close (fix: issue #601)
let currentSearchQuery = sessionStorage.getItem('filterSearchQuery') || '';
let selectedSuggestionIndex = -1;
let currentCategory = sessionStorage.getItem('filterCategory') || 'all';

// Category Filtering (tabs)
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

// Debounce function for smooth search performance
function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
    };
}

// Get all matching projects for search query
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
            const project = {
                card: card,
                title: card.querySelector('h3').textContent,
                tags: card.getAttribute('data-tags') || '',
                category: category
            };
            matches.push(project);
        }
    });
    
    return matches;
}

// Render autocomplete suggestions
function renderSuggestions(query) {
    if (!query) {
        renderRecentSearches();
        return;
    }
    
    const matches = getMatchingProjects(query);
    
    if (matches.length === 0) {
        resultsSection.style.display = 'none';
        recentSearchesSection.style.display = 'none';
        tipsSection.style.display = 'block';
        return;
    }
    
    resultsList.innerHTML = '';
    matches.slice(0, 8).forEach((project, index) => {
        const item = document.createElement('div');
        item.className = 'dropdown-item' + (index === selectedSuggestionIndex ? ' selected' : '');
        item.innerHTML = `
            <div class="dropdown-item-icon">
                ${project.card.querySelector('.card-icon').textContent}
            </div>
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
    
    resultsSection.style.display = 'block';
    recentSearchesSection.style.display = 'none';
    tipsSection.style.display = 'none';
    selectedSuggestionIndex = -1;
}

// Highlight matching text in suggestions
function highlightMatch(text, query) {
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map(part => 
        part.toLowerCase() === query.toLowerCase() 
            ? `<mark style="background: rgba(99, 102, 241, 0.3); color: var(--primary-color); font-weight: 600;">${part}</mark>`
            : part
    ).join('');
}

// Render recent searches
function renderRecentSearches() {
    if (!recentSearchesSection) return;
    
    if (recentSearches.length === 0) {
        recentSearchesSection.style.display = 'none';
        if (tipsSection) tipsSection.style.display = 'block';
        if (resultsSection) resultsSection.style.display = 'none';
        return;
    }
    
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
            searchInput.value = search;
            currentSearchQuery = search;
            performSearch();
            closeDropdown();
        });
        
        removeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            recentSearches = recentSearches.filter(s => s !== search);
            localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
            renderRecentSearches();
        });
        
        recentSearchesList.appendChild(item);
    });
    
    recentSearchesSection.style.display = 'block';
    resultsSection.style.display = 'none';
    tipsSection.style.display = 'block';
}

function applyCategoryFilter(category) {
    projectCards.forEach((card) => {
        if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
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

// Fix #601: performSearch filters cards by currentSearchQuery within the active category
function performSearch() {
    const query = currentSearchQuery.toLowerCase().trim();
    projectCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        const categoryMatch = currentCategory === 'all' || category === currentCategory;

        if (!query) {
            // No query — show/hide by category only
            card.style.display = categoryMatch ? 'block' : 'none';
            return;
        }

        const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
        const desc  = (card.querySelector('p')?.textContent  || '').toLowerCase();
        const tags  = (card.getAttribute('data-tags')        || '').toLowerCase();
        const searchMatch = title.includes(query) || desc.includes(query) || tags.includes(query);

        card.style.display = (categoryMatch && searchMatch) ? 'block' : 'none';
    });

    // Show/hide empty state
    const anyVisible = Array.from(projectCards).some(c => c.style.display !== 'none');
    if (emptyState) emptyState.style.display = anyVisible ? 'none' : 'block';
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
    // Fix #601: persist category on keyboard navigation too
    currentCategory = tabs[next].getAttribute('data-category');
    sessionStorage.setItem('filterCategory', currentCategory);
    applyCategoryFilter(currentCategory);
    if (currentSearchQuery) performSearch();
}

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach((t, i) => {
            const selected = t === tab;
            t.classList.toggle('active', selected);
            t.setAttribute('aria-selected', selected ? 'true' : 'false');
            t.setAttribute('tabindex', selected ? '0' : '-1');
        });
        // Fix #601: persist selected category so it survives modal open/close
        currentCategory = tab.getAttribute('data-category');
        sessionStorage.setItem('filterCategory', currentCategory);
        applyCategoryFilter(currentCategory);
        // Re-apply search filter on top of the new category
        if (currentSearchQuery) performSearch();
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

// Initialize – restore persisted filter state on page load (fix: issue #601)
renderRecentSearches();

// Wire up search input — persist query to sessionStorage on every keystroke
if (searchInput) {
    const debouncedSearch = debounce(() => {
        currentSearchQuery = searchInput.value.trim();
        sessionStorage.setItem('filterSearchQuery', currentSearchQuery);
        // Toggle clear button
        if (searchClear) searchClear.style.display = currentSearchQuery ? 'inline-flex' : 'none';
        if (searchShortcut) searchShortcut.style.display = currentSearchQuery ? 'none' : '';
        performSearch();
        renderSuggestions(currentSearchQuery.toLowerCase());
    }, 200);

    searchInput.addEventListener('input', debouncedSearch);

    // Ctrl+K shortcut to focus search
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
            searchInput.select();
        }
    });
}

// Wire up clear button
if (searchClear) {
    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        currentSearchQuery = '';
        sessionStorage.removeItem('filterSearchQuery');
        searchClear.style.display = 'none';
        if (searchShortcut) searchShortcut.style.display = '';
        performSearch();
        searchInput.focus();
    });
}

// Restore category tab active state
if (currentCategory && currentCategory !== 'all') {
    tabs.forEach(tab => {
        const selected = tab.getAttribute('data-category') === currentCategory;
        tab.classList.toggle('active', selected);
        tab.setAttribute('aria-selected', selected ? 'true' : 'false');
        tab.setAttribute('tabindex', selected ? '0' : '-1');
    });
    applyCategoryFilter(currentCategory);
}

// Restore search query
if (currentSearchQuery && searchInput) {
    searchInput.value = currentSearchQuery;
    if (searchClear) searchClear.style.display = 'inline-flex';
    if (searchShortcut) searchShortcut.style.display = 'none';
    performSearch();
}

// Modal Management
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const modalDialogTitle = document.getElementById('modalDialogTitle');

let lastFocusedElement = null;
let modalTabTrapHandler = null;

function getFocusableElements(root) {
    const selector = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    return Array.from(root.querySelectorAll(selector)).filter(el => !el.closest('[aria-hidden="true"]') && !el.classList.contains('visually-hidden'));
}

function trapFocus(modalEl) {
    let handler = (e) => {
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

function safeRun(fn) {
    try { fn(); } catch (err) { console.error(err); }
}

document.addEventListener('DOMContentLoaded', () => {
    const html = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const soundToggle = document.getElementById('soundToggle');
    const backToTop = document.getElementById('backToTop');
    const tabs = Array.from(document.querySelectorAll('.tab'));
    const projectCards = Array.from(document.querySelectorAll('.project-card'));
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');
    const modalBody = document.getElementById('modalBody');
    const modalTitle = document.getElementById('modalDialogTitle');

    // Theme
    if (themeToggle) {
        const saved = localStorage.getItem('theme') || 'dark';
        html.setAttribute('data-theme', saved);
        themeToggle.addEventListener('click', () => {
            const cur = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            html.setAttribute('data-theme', cur);
            localStorage.setItem('theme', cur);
        });
    }

    // Sound (safe)
    if (soundToggle) {
        const update = () => {
            if (window.audioController) soundToggle.innerHTML = window.audioController.isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
        };
        update();
        soundToggle.addEventListener('click', () => {
            if (window.audioController && typeof window.audioController.toggleMute === 'function') {
                const muted = window.audioController.toggleMute();
                update();
                if (!muted && typeof window.audioController.play === 'function') window.audioController.play('click');
            }
        });
    }

    // Tabs
    function applyFilter(category) {
        projectCards.forEach(card => {
            const cat = card.getAttribute('data-category') || 'all';
            card.style.display = (category === 'all' || cat === category) ? '' : 'none';
        });
    }
    tabs.forEach(tab => tab.addEventListener('click', () => { tabs.forEach(t => t.classList.remove('active')); tab.classList.add('active'); applyFilter(tab.getAttribute('data-category') || 'all'); }));

    // Modal helpers
    let removeTrap = null;
    function openProjectSafe(name, trigger) {
        if (!modal || !modalBody) return;
        lastFocusedElement = trigger || document.activeElement;
        if (modalTitle && trigger) {
            const card = trigger.closest('.project-card');
            const h = card?.querySelector('h3')?.textContent?.trim();
            modalTitle.textContent = h || (name || 'Project');
        }
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        setMainInert(true);

        // load content safely
        safeRun(() => {
            if (typeof getProjectHTML === 'function') {
                modalBody.innerHTML = getProjectHTML(name) || '<div style="padding:1rem">Project content unavailable.</div>';
            } else {
                modalBody.innerHTML = '<div style="padding:1rem">Project content unavailable.</div>';
            }
            if (typeof initializeProject === 'function') initializeProject(name);
        });

        // focus trap
        removeTrap = trapFocus(modal);
        // initial focus
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
        if (lastFocusedElement) { lastFocusedElement.focus(); lastFocusedElement = null; }
        // Fix #601: re-apply category filter and search query after modal closes
        applyCategoryFilter(currentCategory);
        if (currentSearchQuery) performSearch();
    }
});

// Open Project Modal
projectCards.forEach(card => {
    const playButton = card.querySelector('.btn-play');
    
    playButton.addEventListener('click', (e) => {
        e.stopPropagation();
        const projectName = card.getAttribute('data-project');
        openProject(projectName);
    });
    
    card.addEventListener('click', () => {
        const projectName = card.getAttribute('data-project');
        openProject(projectName);
    });
});

function openProject(projectName) {
    modal.classList.add('active');
    loadProjectContent(projectName);
}

function loadProjectContent(projectName) {
    // This will be populated by projects.js
    const projectContent = getProjectHTML(projectName);
    modalBody.innerHTML = projectContent;
    
    // Initialize project-specific JavaScript
    initializeProject(projectName);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add entrance animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease';
        }
    });
}, observerOptions);

projectCards.forEach(card => observer.observe(card));
