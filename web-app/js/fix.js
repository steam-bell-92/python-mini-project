// ── 1. Project cards: populate grid from <template> if still empty ─────
(function () {
  const grid = document.getElementById('projectsGrid');
  if (!grid || grid.children.length > 0) return;
  const tmpl = document.getElementById('projectsTemplate');
  if (!tmpl) return;
  const tmplGrid = tmpl.content.querySelector('.projects-grid');
  if (tmplGrid) grid.textContent = tmplGrid.textContent;
})();

// ── 4. Hero content: guarantee visibility if animations stall ──────────
(function () {
  const shell = document.querySelector('.hero-shell');
  if (!shell) return;
  setTimeout(() => {
    shell.querySelectorAll('.hero-logo-header,.hero-badge-row,.hero-title-wrapper,.hero-subtitle,.hero-cta-row,.hero-meta')
      .forEach(el => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; });
  }, 800);
})();

// ── 6. Sidebar: hidden during hero, appears at projects section
(function () {
  const projectsSection = document.getElementById('projectsSection');

  if (!projectsSection) {
    document.body.classList.add('sidebar-active');
    return;
  }

  document.body.classList.remove('sidebar-active');

  const THRESHOLD = 0.05;

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.body.classList.add('sidebar-active');
      } else {
        const rect = projectsSection.getBoundingClientRect();
        if (rect.top > 0) document.body.classList.remove('sidebar-active');
      }
    });
  }, { threshold: THRESHOLD });

  io.observe(projectsSection);
})();
