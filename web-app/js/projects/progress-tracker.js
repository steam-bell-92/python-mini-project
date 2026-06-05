function getProgressTrackerHTML() {
    return `
    <div class="project-content" id="pt-root">
      <style>
        #pt-root{font-family:inherit}
        .pt-header{text-align:center;margin-bottom:1.5rem}
        .pt-header h2{font-size:1.6rem;margin-bottom:.25rem}
        .pt-header p{opacity:.65;font-size:.9rem}
        .pt-bar-wrap{background:rgba(255,255,255,.08);border-radius:999px;height:14px;margin:.5rem 0 .25rem;overflow:hidden}
        .pt-bar-fill{height:100%;border-radius:999px;background:linear-gradient(90deg,#4ade80,#22d3ee);transition:width .5s ease}
        .pt-bar-label{font-size:.8rem;opacity:.6;text-align:right}
        .pt-stats{display:flex;gap:10px;margin:1rem 0}
        .pt-stat{flex:1;background:rgba(255,255,255,.07);border-radius:10px;padding:.6rem .5rem;text-align:center}
        .pt-stat .val{font-size:1.4rem;font-weight:700}
        .pt-stat .lbl{font-size:.72rem;opacity:.55;margin-top:2px}
        .pt-cats{display:flex;flex-direction:column;gap:1rem;margin-top:1rem}
        .pt-cat-title{font-size:.8rem;font-weight:600;opacity:.5;text-transform:uppercase;letter-spacing:.08em;margin-bottom:.4rem}
        .pt-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:8px}
        .pt-card{display:flex;align-items:center;gap:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:10px;padding:.55rem .75rem;cursor:pointer;transition:all .2s;user-select:none;font-size:.82rem}
        .pt-card:hover{background:rgba(255,255,255,.1);transform:translateY(-1px)}
        .pt-card.done{background:rgba(74,222,128,.12);border-color:rgba(74,222,128,.35)}
        .pt-card .pt-tick{font-size:1rem;flex-shrink:0;color:rgba(255,255,255,.2);transition:color .2s}
        .pt-card.done .pt-tick{color:#4ade80}
        .pt-card .pt-name{flex:1;line-height:1.3;word-break:break-word}
        .pt-card.done .pt-name{opacity:.7}
        .pt-actions{display:flex;gap:8px;margin-top:1.2rem}
        .pt-btn{flex:1;padding:.6rem;border-radius:8px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.07);color:inherit;font-size:.82rem;cursor:pointer;transition:background .2s}
        .pt-btn:hover{background:rgba(255,255,255,.14)}
        .pt-btn.danger{border-color:rgba(248,113,113,.4);color:#f87171}
        .pt-btn.danger:hover{background:rgba(248,113,113,.1)}
        .pt-toast{position:fixed;bottom:1.5rem;left:50%;transform:translateX(-50%) translateY(80px);background:#1a1a2e;border:1px solid #4ade80;color:#4ade80;padding:.6rem 1.2rem;border-radius:999px;font-size:.82rem;transition:transform .35s ease,opacity .35s ease;opacity:0;pointer-events:none;z-index:999}
        .pt-toast.show{transform:translateX(-50%) translateY(0);opacity:1}
      </style>
      <div class="pt-header">
        <h2>🏆 Progress Tracker</h2>
        <p>Click any project to mark it as completed</p>
      </div>
      <div class="pt-bar-wrap"><div id="pt-bar-fill" class="pt-bar-fill" style="width:0%"></div></div>
      <div id="pt-bar-label" class="pt-bar-label">0 / 18 completed</div>
      <div class="pt-stats">
        <div class="pt-stat"><div class="val" id="pt-s-done">0</div><div class="lbl">Completed</div></div>
        <div class="pt-stat"><div class="val" id="pt-s-left">18</div><div class="lbl">Remaining</div></div>
        <div class="pt-stat"><div class="val" id="pt-s-pct">0%</div><div class="lbl">Progress</div></div>
      </div>
      <div class="pt-cats" id="pt-cats"></div>
      <div class="pt-actions">
        <button class="pt-btn" onclick="ptSelectAll()">✅ Mark All Done</button>
        <button class="pt-btn danger" onclick="ptClearAll()">🗑 Reset All</button>
      </div>
      <div class="pt-toast" id="pt-toast"></div>
    </div>`;
}

function initProgressTracker() {
    const PROJECTS = {
        '🎲 Games': ['Rock-Paper-Scissor','Dice-Rolling','Coin-Flip','Number-Guessing-Game','Hangman-Game','FLAMES-Game'],
        '🔢 Math': ['Fibonacci-Series','Pascals-Triangle','Armstrong-Number','Simple-Calculator','Collatz-Conjecture','Prime-Number-Analyzer','Projectile-Motion-Game','Coordinate-to-Polar','Derivative-Calculator','AP-GP-AGP-HP-Recognizer'],
        '🔐 Utilities': ['Text-to-Morse','Tower-of-Hanoi']
    };
    const TOTAL = Object.values(PROJECTS).flat().length;
    const KEY = 'pt_completed_v1';

    const load = () => { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch { return []; } };
    const save = (l) => localStorage.setItem(KEY, JSON.stringify(l));

    function render() {
        const done = load();
        const count = done.length;
        const pct = Math.round((count / TOTAL) * 100);
        document.getElementById('pt-bar-fill').style.width = pct + '%';
        document.getElementById('pt-bar-label').textContent = count + ' / ' + TOTAL + ' completed';
        document.getElementById('pt-s-done').textContent = count;
        document.getElementById('pt-s-left').textContent = TOTAL - count;
        document.getElementById('pt-s-pct').textContent = pct + '%';
        const container = document.getElementById('pt-cats');
        if (!container) return;
        container.textContent = '';
        for (const [cat, projects] of Object.entries(PROJECTS)) {
            const catDone = projects.filter(p => done.includes(p)).length;
            const sec = document.createElement('div');
            sec.innerHTML = '<div class="pt-cat-title">' + cat + ' &nbsp;·&nbsp; ' + catDone + '/' + projects.length + '</div>';
            const grid = document.createElement('div');
            grid.className = 'pt-grid';
            projects.forEach(name => {
                const isDone = done.includes(name);
                const card = document.createElement('div');
                card.className = 'pt-card' + (isDone ? ' done' : '');
                card.innerHTML = '<span class="pt-tick">' + (isDone ? '✅' : '⬜') + '</span><span class="pt-name">' + name + '</span>';
                card.onclick = () => toggle(name);
                grid.appendChild(card);
            });
            sec.appendChild(grid);
            container.appendChild(sec);
        }
    }

    function toggle(name) {
        const list = load();
        const idx = list.indexOf(name);
        if (idx === -1) { list.push(name); showToast('🎊 "' + name + '" completed!'); if (list.length === TOTAL) showToast('🏅 All done!'); }
        else { list.splice(idx, 1); showToast('↩ "' + name + '" unmarked'); }
        save(list); render();
    }

    window.ptSelectAll = function() { save(Object.values(PROJECTS).flat()); render(); showToast('🏅 All marked done!'); };
    window.ptClearAll = function() { if (confirm('Reset all progress?')) { save([]); render(); showToast('🗑 Progress cleared'); } };

    function showToast(msg) {
        const t = document.getElementById('pt-toast');
        if (!t) return;
        t.textContent = msg; t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 2800);
    }

    render();
}