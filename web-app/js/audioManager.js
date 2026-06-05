const AudioManager = (() => {
  let _ctx = null;
  let soundLocks = new Set();

  function ctx() {
    if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (_ctx.state === 'suspended') _ctx.resume();
    return _ctx;
  }
  function enabled() {
    const v = localStorage.getItem('soundEnabled');
    return v === null ? true : v === 'true';
  }

  function beep(freq, dur, type = 'sine', gain = 0.3, t = null) {
    const c = ctx();
    const now = t ?? c.currentTime;

    const osc = c.createOscillator(),
      g = c.createGain();

    osc.connect(g);
    g.connect(c.destination);

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);

    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(gain, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.001, now + dur);

    osc.start(now);
    osc.stop(now + dur + 0.01);
  }

  function noise(dur = 0.1, gain = 0.2) {
    const c = ctx(),
      buf = c.createBuffer(1, c.sampleRate * dur, c.sampleRate);

    const d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;

    const src = c.createBufferSource();
    src.buffer = buf;

    const g = c.createGain(),
      f = c.createBiquadFilter();

    f.type = 'highpass';
    f.frequency.value = 1000;

    src.connect(f);
    f.connect(g);
    g.connect(c.destination);

    const t = c.currentTime;
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);

    src.start(t);
    src.stop(t + dur + 0.01);
  }

  const sounds = {
    snake_eat() {
      const c = ctx(),
        n = c.currentTime;
      beep(300, 0.06, 'square', 0.25, n);
      beep(600, 0.08, 'square', 0.2, n + 0.05);
    },

    snake_die() {
      const c = ctx(),
        n = c.currentTime;
      beep(400, 0.12, 'sawtooth', 0.3, n);
      beep(200, 0.2, 'sawtooth', 0.25, n + 0.1);
      beep(100, 0.3, 'sine', 0.2, n + 0.25);
    },

    mole_hit() {
      noise(0.08, 0.35);
      const c = ctx();
      beep(180, 0.1, 'sine', 0.2, c.currentTime + 0.02);
    },

    card_flip() {
      noise(0.05, 0.12);
      const c = ctx();
      beep(800, 0.04, 'sine', 0.08, c.currentTime + 0.01);
    },

    card_deal() {
      noise(0.07, 0.18);
      const c = ctx();
      beep(300, 0.06, 'sine', 0.12, c.currentTime + 0.02);
    },

    game_win() {
      const c = ctx(),
        n = c.currentTime;
      [523, 659, 784, 1047].forEach((f, i) =>
        beep(f, 0.15, 'sine', 0.25, n + i * 0.12)
      );
    },

    game_over() {
      const c = ctx(),
        n = c.currentTime;
      beep(440, 0.15, 'sawtooth', 0.3, n);
      beep(349, 0.2, 'sawtooth', 0.28, n + 0.18);
      beep(262, 0.35, 'sine', 0.25, n + 0.4);
    },

    score_point() {
      beep(880, 0.08, 'sine', 0.2);
    },

    wrong() {
      beep(150, 0.15, 'sawtooth', 0.2);
    },

    click() {
      beep(600, 0.04, 'sine', 0.1);
    },
  };

  return {
    play(name) {
      if (!enabled()) return false;

      // 🛑 Strict permanent lock until game reset explicitly clears it
      if (name === "snake_die" || name === "game_over") {
        if (soundLocks.has(name)) return false;
        soundLocks.add(name);
      }

      if (sounds[name]) {
        try {
          sounds[name]();
        } catch (e) {}
        return true;
      }

      return false;
    },

    setEnabled(v) {
      localStorage.setItem('soundEnabled', String(!!v));
    },

    isEnabled() {
      return enabled();
    },

    list() {
      return Object.keys(sounds);
    },

    reset() {
      soundLocks.clear();
    }
  };
})();
window.AudioManager = AudioManager;
