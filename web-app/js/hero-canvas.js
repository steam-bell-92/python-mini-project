/* ═══════════════════════════════════════════════════════════════
   hero-canvas.js — Interactive Particle Mesh Background
   Smooth, performance-first particle grid that responds to
   mouse movement with subtle connections and gentle drift.
   ═══════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function ParticleMesh(canvasId) {
    var self = this;
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: null, y: null, radius: 120 };
    this.W = 0;
    this.H = 0;
    this.animFrame = null;
    this.isDark = document.documentElement.getAttribute('data-theme') !== 'light';

    this.CONFIG = {
      count: 60,
      maxDist: 140,
      speed: 0.15,
      connectionOpacity: this.isDark ? 0.12 : 0.08,
      particleRadius: this.isDark ? 3.0 : 2.5,
      color: this.isDark ? '255,255,255' : '0,0,0',
      mousePull: 0.03,
    };

    // Particle Object constructor inside instance scope
    function Particle() {
      this.x = Math.random() * self.W;
      this.y = Math.random() * self.H;
      this.vx = (Math.random() - 0.5) * self.CONFIG.speed;
      this.vy = (Math.random() - 0.5) * self.CONFIG.speed;
      this.phase = Math.random() * Math.PI * 2;
    }

    Particle.prototype.update = function () {
      this.phase += 0.005;
      this.x += this.vx + Math.sin(this.phase) * 0.1;
      this.y += this.vy + Math.cos(this.phase * 0.7) * 0.1;

      /* Mouse interaction */
      if (self.mouse.x !== null) {
        var dx = self.mouse.x - this.x;
        var dy = self.mouse.y - this.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < self.mouse.radius) {
          var force = (self.mouse.radius - dist) / self.mouse.radius;
          this.x -= dx * force * self.CONFIG.mousePull;
          this.y -= dy * force * self.CONFIG.mousePull;
        }
      }

      /* Wrap around edges */
      if (this.x < 0) this.x = self.W;
      if (this.x > self.W) this.x = 0;
      if (this.y < 0) this.y = self.H;
      if (this.y > self.H) this.y = 0;
    };

    Particle.prototype.draw = function () {
      self.ctx.beginPath();
      self.ctx.arc(this.x, this.y, self.CONFIG.particleRadius, 0, Math.PI * 2);
      self.ctx.fillStyle = 'rgba(' + self.CONFIG.color + ', 0.6)';
      self.ctx.fill();
    };

    this.resize = function () {
      var rect = self.canvas.parentElement.getBoundingClientRect();
      self.W = self.canvas.width = rect.width * window.devicePixelRatio;
      self.H = self.canvas.height = rect.height * window.devicePixelRatio;
      self.canvas.style.width = rect.width + 'px';
      self.canvas.style.height = rect.height + 'px';
      self.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      self.W = rect.width;
      self.H = rect.height;
    };

    this.drawConnections = function () {
      var len = self.particles.length;
      for (var i = 0; i < len; i++) {
        for (var j = i + 1; j < len; j++) {
          var dx = self.particles[i].x - self.particles[j].x;
          var dy = self.particles[i].y - self.particles[j].y;
          var dist = dx * dx + dy * dy;

          if (dist < self.CONFIG.maxDist * self.CONFIG.maxDist) {
            var opacity = (1 - dist / (self.CONFIG.maxDist * self.CONFIG.maxDist)) * self.CONFIG.connectionOpacity;
            self.ctx.beginPath();
            self.ctx.moveTo(self.particles[i].x, self.particles[i].y);
            self.ctx.lineTo(self.particles[j].x, self.particles[j].y);
            self.ctx.strokeStyle = 'rgba(' + self.CONFIG.color + ', ' + opacity + ')';
            self.ctx.lineWidth = 0.5;
            self.ctx.stroke();
          }
        }
      }
    };

    this.animate = function () {
      self.ctx.clearRect(0, 0, self.W, self.H);

      for (var i = 0; i < self.particles.length; i++) {
        self.particles[i].update();
        self.particles[i].draw();
      }

      self.drawConnections();

      self.animFrame = requestAnimationFrame(self.animate.bind(self));
    };

    this.onMouseMove = function (e) {
      var rect = self.canvas.getBoundingClientRect();
      self.mouse.x = e.clientX - rect.left;
      self.mouse.y = e.clientY - rect.top;
    };

    this.onMouseLeave = function () {
      self.mouse.x = null;
      self.mouse.y = null;
    };

    this.onThemeChange = function () {
      self.isDark = document.documentElement.getAttribute('data-theme') !== 'light';
      self.CONFIG.color = self.isDark ? '255,255,255' : '0,0,0';
      self.CONFIG.connectionOpacity = self.isDark ? 0.12 : 0.08;
      self.CONFIG.particleRadius = self.isDark ? 3.0 : 2.5;
    };

    this.init = function () {
      self.resize();
      self.particles = [];
      for (var i = 0; i < self.CONFIG.count; i++) {
        self.particles.push(new Particle());
      }
      self.animate();
    };

    this.destroy = function () {
      if (self.animFrame) cancelAnimationFrame(self.animFrame);
    };

    // Listen to resize and hover events
    window.addEventListener('resize', this.resize.bind(this));
    this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this));
    this.canvas.addEventListener('mouseleave', this.onMouseLeave.bind(this));

    this.init();
  }

  // Initialize animations on both canvases
  var mesh1 = new ParticleMesh('boardCanvas');
  var mesh2 = new ParticleMesh('timelineCanvas');

  /* ── Observe theme changes ───────────────────────────────── */
  var themeObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (m.attributeName === 'data-theme') {
        if (mesh1 && typeof mesh1.onThemeChange === 'function') mesh1.onThemeChange();
        if (mesh2 && typeof mesh2.onThemeChange === 'function') mesh2.onThemeChange();
      }
    });
  });
  themeObserver.observe(document.documentElement, { attributes: true });

  /* ── Cleanup on page unload ──────────────────────────────── */
  window.addEventListener('beforeunload', function () {
    if (mesh1 && typeof mesh1.destroy === 'function') mesh1.destroy();
    if (mesh2 && typeof mesh2.destroy === 'function') mesh2.destroy();
    themeObserver.disconnect();
  });

})();
