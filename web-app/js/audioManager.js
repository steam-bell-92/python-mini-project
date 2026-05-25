const AudioManager = (() => {
  let _ctx = null;
  function ctx() {
    if (!_ctx) _ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (_ctx.state === 'suspended') _ctx.resume();
    return _ctx;
  }
  function enabled() {
    const v = localStorage.getItem('soundEnabled');
    return v === null ? true : v === 'true';
  }
  function beep(freq, dur, type='sine', gain=0.3, t=null) {
    const c = ctx(); const now = t ?? c.currentTime;
    const osc = c.createOscillator(), g = c.createGain();
    osc.connect(g); g.connect(c.destination);
    osc.type = type; osc.frequency.setValueAtTime(freq, now);
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(gain, now+0.01);
    g.gain.exponentialRampToValueAtTime(0.001, now+dur);
    osc.start(now); osc.stop(now+dur+0.01);
  }
  function noise(dur=0.1, gain=0.2) {
    const c = ctx(), buf = c.createBuffer(1, c.sampleRate*dur, c.sampleRate);
    const d = buf.getChannelData(0);
    for (let i=0;i<d.length;i++) d[i]=Math.random()*2-1;
    const src = c.createBufferSource(); src.buffer = buf;
    const g = c.createGain(), f = c.createBiquadFilter();
    f.type='highpass'; f.frequency.value=1000;
    src.connect(f); f.connect(g); g.connect(c.destination);
    const t = c.currentTime;
    g.gain.setValueAtTime(gain, t);
    g.gain.exponentialRampToValueAtTime(0.001, t+dur);
    src.start(t); src.stop(t+dur+0.01);
  }
  const sounds = {
    snake_eat()   { const c=ctx(),n=c.currentTime; beep(300,.06,'square',.25,n); beep(600,.08,'square',.20,n+.05); },
    snake_die()   { const c=ctx(),n=c.currentTime; beep(400,.12,'sawtooth',.3,n); beep(200,.20,'sawtooth',.25,n+.10); beep(100,.30,'sine',.20,n+.25); },
    mole_hit()    { noise(.08,.35); const c=ctx(); beep(180,.10,'sine',.2,c.currentTime+.02); },
    card_flip()   { noise(.05,.12); const c=ctx(); beep(800,.04,'sine',.08,c.currentTime+.01); },
    card_deal()   { noise(.07,.18); const c=ctx(); beep(300,.06,'sine',.12,c.currentTime+.02); },
    game_win()    { const c=ctx(),n=c.currentTime; [523,659,784,1047].forEach((f,i)=>beep(f,.15,'sine',.25,n+i*.12)); },
    game_over()   { const c=ctx(),n=c.currentTime; beep(440,.15,'sawtooth',.3,n); beep(349,.20,'sawtooth',.28,n+.18); beep(262,.35,'sine',.25,n+.40); },
    score_point() { beep(880,.08,'sine',.2); },
    wrong()       { beep(150,.15,'sawtooth',.2); },
    click()       { beep(600,.04,'sine',.1); },
  };
  return {
    play(name) {
      if (!enabled()) return false;
      if (sounds[name]) { try { sounds[name](); } catch(e){} return true; }
      return false;
    },
    setEnabled(v) { localStorage.setItem('soundEnabled', String(!!v)); },
    isEnabled()   { return enabled(); },
    list()        { return Object.keys(sounds); },
  };
})();
window.AudioManager = AudioManager;
