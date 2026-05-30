// ── 1. Project cards: populate grid from <template> if still empty ─────
(function () {
  const grid = document.getElementById('projectsGrid');
  if (!grid || grid.children.length > 0) return;
  const tmpl = document.getElementById('projectsTemplate');
  if (!tmpl) return;
  const tmplGrid = tmpl.content.querySelector('.projects-grid');
  if (tmplGrid) grid.innerHTML = tmplGrid.innerHTML;
})();

// ── 2. Timeline items: reveal on scroll ───────────────────────────────
(function () {
  const items = document.querySelectorAll('.timeline-item[data-reveal]');
  if (!items.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  items.forEach(el => io.observe(el));
})();

// ── 3. Track-Route badge: hidden until timeline scrolls into view ──────
(function () {
  const badge   = document.querySelector('.timeline-route-badge');
  const section = document.getElementById('timelineSection');
  if (!badge || !section) return;
  Object.assign(badge.style, {
    opacity: '0', transform: 'translateY(-16px)',
    transition: 'opacity .55s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1)'
  });
  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      badge.style.opacity = '1'; badge.style.transform = 'translateY(0)';
      io.disconnect();
    }
  }, { threshold: 0.05 });
  io.observe(section);
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

// ── 5. Timeline: one continuous S-snake dotted line, card border to card border ──
(function () {
  function buildTimelinePath() {
    const container = document.querySelector('.timeline-container');
    const grid      = document.querySelector('.timeline-grid');
    if (!container || !grid) return;

    const old = container.querySelector('.timeline-svg');
    if (old) old.remove();

    const items = Array.from(grid.querySelectorAll('.timeline-item'));
    if (items.length < 2) return;

    const cRect = container.getBoundingClientRect();
    const svgW  = cRect.width;
    const svgH  = cRect.height;

    // Collect the anchor point on the card border facing the centre for each item.
    // Odd  items (i=0,2,4): card is on LEFT  → anchor = right-centre border of card
    // Even items (i=1,3,5): card is on RIGHT → anchor = left-centre  border of card
    const anchors = items.map((item, i) => {
      const cardEl = item.querySelector('.timeline-content');
      if (!cardEl) return null;
      const cr = cardEl.getBoundingClientRect();
      const isLeft = (i % 2 === 0);
      return {
        x: isLeft ? (cr.right - cRect.left) : (cr.left - cRect.left),
        y: cr.top  - cRect.top + cr.height / 2
      };
    }).filter(Boolean);

    if (anchors.length < 2) return;

    // Build ONE continuous cubic Bézier path through all anchors.
    // The trick for a smooth S with no breaks:
    //   At every interior anchor the tangent must be continuous.
    //   We achieve this by using the same horizontal pull direction and
    //   making control points symmetric around each anchor.
    //
    // For segment i → i+1:
    //   a = anchors[i],  b = anchors[i+1]
    //   The path travels horizontally out of a (CP1 at same Y as a),
    //   crosses over, then arrives horizontally into b (CP2 at same Y as b).
    //   Pull distance = half the horizontal span between a and b.
    //
    // To keep the path CONTINUOUS and SMOOTH at every junction we use
    // a Catmull-Rom → cubic Bézier conversion approach:
    // each segment's control points are tangent-matched to neighbours.

    // Compute tangent at each anchor using Catmull-Rom rule
    // (for the endpoints we mirror the first/last interior tangent)
    function catmullTangent(prev, curr, next) {
      return {
        tx: (next.x - prev.x) * 0.5,
        ty: (next.y - prev.y) * 0.5
      };
    }

    const n   = anchors.length;
    const tan = anchors.map((_, i) => {
      const prev = anchors[Math.max(i - 1, 0)];
      const next = anchors[Math.min(i + 1, n - 1)];
      return catmullTangent(prev, anchors[i], next);
    });

    // Override tangents to be PURELY HORIZONTAL at each card border.
    // This ensures the line exits/enters every card border at 90° (clean T-junction).
    // We keep the sign (direction) from Catmull-Rom but zero out the Y component.
    const horizontalTan = anchors.map((a, i) => {
      const raw = tan[i];
      // Magnitude = half the horizontal gap to the nearest neighbour
      const prev = anchors[Math.max(i - 1, 0)];
      const next = anchors[Math.min(i + 1, n - 1)];
      const mag  = Math.abs(next.x - prev.x) * 1;
      const sign = raw.tx >= 0 ? 1 : -1;
      return { tx: sign * mag, ty: 0 };
    });

    let d = `M ${anchors[0].x.toFixed(2)} ${anchors[0].y.toFixed(2)}`;

    for (let i = 0; i < n - 1; i++) {
      const a  = anchors[i];
      const b  = anchors[i + 1];
      const t0 = horizontalTan[i];
      const t1 = horizontalTan[i + 1];

      // Cubic Bézier from Catmull-Rom:
      // CP1 = a + t0/3,  CP2 = b - t1/3
      const cp1x = a.x + t0.tx;
      const cp1y = a.y + t0.ty;
      const cp2x = b.x - t1.tx;
      const cp2y = b.y - t1.ty;

      d += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${b.x.toFixed(2)} ${b.y.toFixed(2)}`;
    }

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'timeline-svg');
    svg.setAttribute('viewBox', `0 0 ${svgW} ${svgH}`);
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText = `position:absolute;left:0;top:0;width:100%;height:${svgH}px;pointer-events:none;z-index:2;overflow:visible;`;

    // Dim ghost track
    const track = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    track.setAttribute('class', 'timeline-svg-track');
    track.setAttribute('d', d);
    track.setAttribute('fill', 'none');

    // Glowing accent fill — animated draw-in
    const fill = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    fill.setAttribute('class', 'timeline-svg-fill');
    fill.setAttribute('d', d);
    fill.setAttribute('fill', 'none');

    svg.appendChild(track);
    svg.appendChild(fill);
    container.insertBefore(svg, container.firstChild);

    // Scroll-triggered draw-in animation
    requestAnimationFrame(() => {
      const totalLen = fill.getTotalLength ? fill.getTotalLength() : 5000;
      fill.style.strokeDasharray  = '5 16';
      fill.style.strokeDashoffset = String(totalLen);
      fill.style.transition       = 'none';

      const section = document.getElementById('timelineSection');
      const io2 = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(() => {
            fill.style.transition       = 'stroke-dashoffset 2.4s cubic-bezier(0.16,1,0.3,1)';
            fill.style.strokeDashoffset = '0';
          });
          io2.disconnect();
        }
      }, { threshold: 0.05 });
      if (section) io2.observe(section);
    });
  }

  if (document.readyState === 'complete') {
    buildTimelinePath();
  } else {
    window.addEventListener('load', buildTimelinePath);
  }

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(buildTimelinePath, 150);
  });
})();

// ── 6. Sidebar: hidden during hero+timeline, appears at projects section
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
