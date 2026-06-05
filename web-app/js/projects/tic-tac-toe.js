// ═══════════════════════════════════════════════════════════
//  🎮  Tic Tac Toe  —  web-app/js/projects/tic-tac-toe.js
//  Category : games
//  Features : 2-Player | vs AI (Easy/Medium/Hard) |
//             Score tracking | Best-of-1/3/5 rounds
// ═══════════════════════════════════════════════════════════

// ── 1.  HTML Template ──────────────────────────────────────
function getTicTacToeHTML() {
  return `
<div class="wrap">
 
  <!-- SETUP SCREEN -->
  <div id="screen-setup" class="screen screen--active">
    <div class="logo">
      <span class="logo-x">X</span>
      <span class="logo-dot">·</span>
      <span class="logo-o">O</span>
    </div>
    <p class="subtitle">Two players or vs AI — classic strategy game!</p>
 
    <div class="card">
      <div class="field">
        <span class="label">Game Mode</span>
        <div class="pills" id="mode-group">
          <button class="pill pill--on" data-val="2p">👥 Two Players</button>
          <button class="pill" data-val="ai">🤖 vs Computer</button>
        </div>
      </div>
 
      <div class="field" id="diff-group">
        <span class="label">Difficulty</span>
        <div class="pills" id="diff-pills">
          <button class="pill pill--on" data-val="easy">🟢 Easy</button>
          <button class="pill" data-val="medium">🟡 Medium</button>
          <button class="pill" data-val="hard">🔴 Hard</button>
        </div>
      </div>
 
      <div class="field">
        <span class="label">Rounds</span>
        <div class="pills" id="rounds-group">
          <button class="pill" data-val="1">1</button>
          <button class="pill pill--on" data-val="3">Best of 3</button>
          <button class="pill" data-val="5">Best of 5</button>
        </div>
      </div>
 
      <div class="field">
        <div class="input-row">
          <div class="input-box">
            <label>Player 1 <span class="sym-x">✕</span></label>
            <input class="input" type="text" id="p1-input" placeholder="Player 1" maxlength="12"/>
          </div>
          <div class="input-box" id="p2-box">
            <label>Player 2 <span class="sym-o">○</span></label>
            <input class="input" type="text" id="p2-input" placeholder="Player 2" maxlength="12"/>
          </div>
        </div>
      </div>
    </div>
 
    <button class="btn-primary" id="start-btn">START GAME</button>
  </div>
 
  <!-- GAME SCREEN -->
  <div id="screen-game" class="screen">
    <div class="game-top-row">
      <button class="btn-ghost" id="back-btn">← Menu</button>
      <div class="round-tag" id="round-tag">Round 1 of 3</div>
    </div>
 
    <div class="scoreboard">
      <div class="score-block">
        <div class="score-name x" id="sn1">P1</div>
        <div class="score-val x" id="sv1">0</div>
      </div>
      <div class="score-block">
        <div class="score-name d">Draws</div>
        <div class="score-val d" id="svd">0</div>
      </div>
      <div class="score-block">
        <div class="score-name o" id="sn2">P2</div>
        <div class="score-val o" id="sv2">0</div>
      </div>
    </div>
 
    <div class="turn-banner" id="turn-banner">
      <span class="turn-sym" id="turn-sym">X</span>
      <span id="turn-name">Player 1</span>'s turn
    </div>
 
    <div class="board-wrap">
      <div id="board"></div>
      <svg class="win-svg" id="win-svg" viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" style="display:none">
        <line id="win-line" x1="0" y1="0" x2="0" y2="0"
              stroke="#ffe566" stroke-width="5"
              stroke-linecap="round" opacity="0.9"/>
      </svg>
    </div>
  </div>
 
  <!-- FINAL SCREEN -->
  <div id="screen-final" class="screen">
    <div class="final-trophy">🏆</div>
    <div class="final-title" id="final-title">Player 1 Wins the Match!</div>
 
    <div class="final-scores">
      <div class="final-row">
        <span class="final-pname x" id="fp1n">P1</span>
        <span class="final-pval x" id="fp1s">0</span>
      </div>
      <div class="final-row">
        <span class="final-pname o" id="fp2n">P2</span>
        <span class="final-pval o" id="fp2s">0</span>
      </div>
      <div class="final-row">
        <span class="final-pname d">Draws</span>
        <span class="final-pval d" id="fpds">0</span>
      </div>
    </div>
 
    <div class="final-actions">
      <button class="btn-primary" id="rematch-btn">🔄 REMATCH</button>
      <button class="btn-ghost" id="menu-btn">← Main Menu</button>
    </div>
  </div>
 
</div><!-- /wrap -->
 
<!-- Result overlay -->
<div class="result-overlay" id="result-overlay">
  <div class="result-card">
    <div class="result-emoji" id="res-emoji">🏆</div>
    <div class="result-text" id="res-text">Player 1 wins!</div>
    <button class="btn-primary" id="next-btn" style="font-size:0.9rem;padding:11px">Next Round →</button>
  </div>
</div>
<style>
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
  :root {
    --bg:        #0b0b12;
    --surface:   #18182a;
    --surface2:  #22223a;
    --border:    #37375a;
    --border2:   #5555aa;
    --text:      #f0f0f8;
    --muted:     #8888b0;
    --x:         #50aaff;
    --o:         #ff6455;
    --draw:      #aaaacc;
    --win-bg-x:  #0a2040;
    --win-bg-o:  #401510;
    --radius:    14px;
    --gap:       10px;
  }
 
  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Space Mono', monospace;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
 
  /* ── SCREENS ── */
  .screen { display: none; }
  .screen--active { display: block; }
 
  .wrap {
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
  }
 
  /* ── SETUP ── */
  #screen-setup { text-align: center; }
 
  .logo {
    font-family: 'Syne', sans-serif;
    font-size: 3.2rem;
    font-weight: 800;
    letter-spacing: -2px;
    margin-bottom: 6px;
  }
  .logo-x { color: var(--x); }
  .logo-dot { color: var(--muted); margin: 0 6px; }
  .logo-o { color: var(--o); }
 
  .subtitle {
    color: var(--muted);
    font-size: 0.78rem;
    margin-bottom: 24px;
    letter-spacing: 0.5px;
  }
 
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 20px;
    text-align: left;
    margin-bottom: 20px;
  }
 
  .field { margin-bottom: 18px; }
  .field:last-child { margin-bottom: 0; }
 
  .label {
    display: block;
    font-size: 0.7rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }
 
  .pills { display: flex; gap: 8px; flex-wrap: wrap; }
 
  .pill {
    padding: 7px 14px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--surface2);
    color: var(--muted);
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    cursor: pointer;
    transition: all 0.15s;
  }
  .pill:hover { border-color: var(--border2); color: var(--text); }
  .pill--on { border-color: var(--border2); background: #2a2a4a; color: var(--text); }
 
  .input-row { display: flex; gap: 12px; }
  .input-box { flex: 1; }
  .input-box label {
    display: block;
    font-size: 0.7rem;
    color: var(--muted);
    margin-bottom: 6px;
  }
  .sym-x { color: var(--x); }
  .sym-o { color: var(--o); }
 
  .input {
    width: 100%;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text);
    font-family: 'Space Mono', monospace;
    font-size: 0.82rem;
    padding: 9px 12px;
    outline: none;
    transition: border-color 0.15s;
  }
  .input:focus { border-color: var(--border2); }
  .input:disabled { opacity: 0.45; cursor: not-allowed; }
 
  /* ── BUTTONS ── */
  .btn-primary {
    display: block;
    width: 100%;
    padding: 13px;
    background: linear-gradient(135deg, #3366cc, #5544aa);
    border: none;
    border-radius: var(--radius);
    color: #fff;
    font-family: 'Syne', sans-serif;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 1px;
    cursor: pointer;
    transition: opacity 0.15s, transform 0.1s;
  }
  .btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
  .btn-primary:active { transform: translateY(0); }
 
  .btn-ghost {
    background: none;
    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--muted);
    font-family: 'Space Mono', monospace;
    font-size: 0.78rem;
    padding: 7px 14px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .btn-ghost:hover { border-color: var(--border2); color: var(--text); }
 
  /* ── GAME SCREEN ── */
  #screen-game { max-width: 420px; margin: 0 auto; }
 
  .game-top-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }
 
  .round-tag {
    font-size: 0.72rem;
    color: var(--muted);
    letter-spacing: 0.5px;
  }
 
  .scoreboard {
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
  }
 
  .score-block {
    flex: 1;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 12px 8px;
    text-align: center;
  }
 
  .score-name {
    font-size: 0.68rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--muted);
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .score-name.x { color: var(--x); }
  .score-name.o { color: var(--o); }
  .score-name.d { color: var(--draw); }
 
  .score-val {
    font-family: 'Syne', sans-serif;
    font-size: 1.8rem;
    font-weight: 800;
    color: var(--muted);
  }
  .score-val.x { color: var(--x); }
  .score-val.o { color: var(--o); }
  .score-val.d { color: var(--draw); }
 
  .turn-banner {
    text-align: center;
    font-size: 1rem;
    color: var(--muted);
    margin-bottom: 16px;
    padding: 10px;
    border-radius: 8px;
    background: var(--surface);
    border: 1px solid var(--border);
    transition: all 0.2s;
  }
  .turn-banner.is-x { border-color: var(--x); color: var(--x); background: #0a1a30; }
  .turn-banner.is-o { border-color: var(--o); color: var(--o); background: #2a0d0a; }
 
  .turn-sym {
    font-family: 'Syne', sans-serif;
    font-weight: 800;
    font-size: 1.1rem;
    margin-right: 6px;
  }
 
  /* ── BOARD ── */
  .board-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    max-width: 360px;
    margin: 0 auto;
  }
 
  #board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--gap);
    width: 100%;
    height: 100%;
  }
 
  .cell {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 10vw, 3.2rem);
    font-weight: 800;
    color: var(--text);
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, transform 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cell:hover:not(:disabled) { background: var(--surface2); border-color: var(--border2); transform: scale(1.03); }
  .cell:disabled { cursor: default; }
  .cell.is-x { color: var(--x); }
  .cell.is-o { color: var(--o); }
  .cell.is-win { background: var(--win-bg-x); border-color: var(--x); }
  .cell.is-win.is-o-win { background: var(--win-bg-o); border-color: var(--o); }
 
  .cell.pop { animation: pop 0.2s ease; }
  @keyframes pop {
    0%   { transform: scale(0.7); }
    70%  { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
 
  .win-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
 
  /* ── RESULT OVERLAY ── */
  .result-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s;
  }
  .result-overlay.show { opacity: 1; pointer-events: all; }
 
  .result-card {
    background: var(--surface);
    border: 1px solid var(--border2);
    border-radius: 20px;
    padding: 36px 40px;
    text-align: center;
    min-width: 280px;
    transform: translateY(20px);
    transition: transform 0.25s;
  }
  .result-overlay.show .result-card { transform: translateY(0); }
 
  .result-emoji { font-size: 3rem; margin-bottom: 10px; }
  .result-text {
    font-family: 'Syne', sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text);
    margin-bottom: 20px;
  }
 
  /* ── FINAL SCREEN ── */
  #screen-final { text-align: center; max-width: 360px; margin: 0 auto; }
 
  .final-trophy { font-size: 4rem; margin-bottom: 12px; }
  .final-title {
    font-family: 'Syne', sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 24px;
  }
 
  .final-scores {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 16px;
    margin-bottom: 24px;
  }
 
  .final-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid var(--border);
    font-size: 0.9rem;
  }
  .final-row:last-child { border-bottom: none; }
 
  .final-pname { color: var(--muted); }
  .final-pname.x { color: var(--x); }
  .final-pname.o { color: var(--o); }
 
  .final-pval {
    font-family: 'Syne', sans-serif;
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--muted);
  }
  .final-pval.x { color: var(--x); }
  .final-pval.o { color: var(--o); }
 
  .final-actions { display: flex; flex-direction: column; gap: 10px; }
  </style>
`;
}

// ── 2.  Init Function ──────────────────────────────────────
function initTicTacToe() {
 
  const WINS = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
 
  // Win line coords mapped to a 360×360 viewBox with 10px gap, 3 cells of ~113px each
  // Cell centers: col0=56, col1=180, col2=304 | row0=56, row1=180, row2=304
  const WIN_LINES = [
    [30, 56,  330, 56],   // row 0
    [30, 180, 330, 180],  // row 1
    [30, 304, 330, 304],  // row 2
    [56, 30,  56,  330],  // col 0
    [180,30,  180, 330],  // col 1
    [304,30,  304, 330],  // col 2
    [30, 30,  330, 330],  // diag TL-BR
    [330,30,  30,  330],  // diag TR-BL
  ];
 
  // ── STATE ──
  let mode = "2p";
  let difficulty = "easy";
  let maxRounds = 3;
  let p1 = "Player 1";
  let p2 = "Player 2";
  let scores = { p1: 0, p2: 0, draws: 0 };
  let board = Array(9).fill(null);
  let current = "X";
  let round = 1;
  let gameOver = false;
 
  function isMatchDone() {
    const majority = Math.ceil(maxRounds / 2);
    return round >= maxRounds || scores.p1 >= majority || scores.p2 >= majority;
  }
 
  // ── SCREEN ──
 function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => {
        s.classList.toggle("screen--active", s.id === id);
    });
  }
 
  // ── PILLS ──
  const diffGroup = document.getElementById("diff-group");
  if (diffGroup) diffGroup.style.display = "none";
 
  function initPills(groupId, cb) {
    const grp = document.getElementById(groupId);
    if (!grp) return;
    grp.querySelectorAll(".pill").forEach(btn => {
        btn.addEventListener("click", () => {
            grp.querySelectorAll(".pill").forEach(b => b.classList.remove("pill--on"));
            btn.classList.add("pill--on");
            cb(btn.dataset.val);
        });
    });
  }
  initPills("mode-group", val => {
    mode = val;
    const diffGrp = document.getElementById("diff-group");
    const p2box   = document.getElementById("p2-box");
    const p2inp   = document.getElementById("p2-input");
    if (val === "ai") {
      diffGrp.style.display = "block";
      p2inp.disabled = true;
      p2inp.placeholder = "Computer ";
      p2box.style.opacity = "0.5";
    } else {
      diffGrp.style.display = "none";
      p2inp.disabled = false;
      p2inp.placeholder = "Player 2";
      p2box.style.opacity = "1";
    }
  });
 
  initPills("diff-pills",   val => { difficulty = val; });
  initPills("rounds-group", val => { maxRounds = parseInt(val); });
 
  // ── BOARD ──
  function buildBoard() {
    const boardEl = document.getElementById("board");
    if (!boardEl) return;
    boardEl.textContent = "";
    for (let i = 0; i < 9; i++) {
      const btn = document.createElement("button");
      btn.className = "cell";
      btn.dataset.i = i;
      btn.setAttribute("aria-label", `Cell ${i + 1}`);
      btn.addEventListener("click", onCellClick);
      boardEl.appendChild(btn);
    }
  }
 
  // ── EVENT LISTENERS ──
  document.getElementById("start-btn").addEventListener("click", () => {
    p1 = document.getElementById("p1-input").value.trim() || "Player 1";
    p2 = mode === "ai" ? "Computer" : (document.getElementById("p2-input").value.trim() || "Player 2");
    scores = { p1: 0, p2: 0, draws: 0 };
    round = 1;
    buildBoard();
    startRound();
    showScreen("screen-game");
  });
 
  document.getElementById("back-btn").addEventListener("click", () => {
    document.getElementById("result-overlay").classList.remove("show");
    showScreen("screen-setup");
  });
 
  document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("result-overlay").classList.remove("show");
    showScreen("screen-setup");
  });
 
  document.getElementById("rematch-btn").addEventListener("click", () => {
    p1 = document.getElementById("p1-input").value.trim() || "Player 1";
    p2 = mode === "ai"
      ? "Computer "
      : (document.getElementById("p2-input").value.trim() || "Player 2");
    scores = { p1: 0, p2: 0, draws: 0 };
    round = 1;
    buildBoard();
    startRound();
    showScreen("screen-game");
  });
 
  document.getElementById("next-btn").addEventListener("click", () => {
    document.getElementById("result-overlay").classList.remove("show");
    if (isMatchDone()) {
      renderFinal();
      showScreen("screen-final");
    } else {
      round++;
      startRound();
    }
  });
 
  // ── ROUND ──
  function startRound() {
    board = Array(9).fill(null);
    current = "X";
    gameOver = false;
 
    document.querySelectorAll(".cell").forEach(c => {
      c.textContent = "";
      c.className = "cell";
      c.disabled = false;
    });
 
    clearWinLine();
    syncScoreboard();
 
    const tag = document.getElementById("round-tag");
    if (tag) tag.textContent = maxRounds === 1 ? "Single Round" : `Round ${round} of ${maxRounds}`;
 
    refreshTurnBanner();
  }
 
  function syncScoreboard() {
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set("sn1", p1); set("sn2", p2);
    set("sv1", scores.p1); set("sv2", scores.p2); set("svd", scores.draws);
  }
 
  function refreshTurnBanner() {
    const name   = current === "X" ? p1 : p2;
    const banner = document.getElementById("turn-banner");
    const symEl  = document.getElementById("turn-sym");
    const nameEl = document.getElementById("turn-name");
    if (symEl)  symEl.textContent  = current;
    if (nameEl) nameEl.textContent = name;
    if (banner) {
      banner.classList.toggle("is-x", current === "X");
      banner.classList.toggle("is-o", current === "O");
    }
  }
 
  // ── CELL CLICK ──
  function onCellClick() {
    const i = parseInt(this.dataset.i);
    if (gameOver || board[i]) return;
    if (mode === "ai" && current === "O") return;
    placeMove(i, current);
    afterMove();
  }
 
  function placeMove(i, sym) {
    board[i] = sym;
    const cell = document.querySelector(`.cell[data-i="${i}"]`);
    if (!cell) return;
    cell.textContent = sym;
    cell.classList.add(sym === "X" ? "is-x" : "is-o", "pop");
    cell.disabled = true;
  }
 
  function afterMove() {
    const win = getWinner();
    if (win) { endRound(win); return; }
    if (board.every(c => c)) { endRound(null); return; }
    current = current === "X" ? "O" : "X";
    refreshTurnBanner();
    if (mode === "ai" && current === "O") {
      lockBoard(true);
      setTimeout(aiTurn, 480 + Math.random() * 220);
    }
  }
 
  function lockBoard(on) {
    document.querySelectorAll(".cell").forEach(c => {
      if (!board[parseInt(c.dataset.i)]) c.disabled = on;
    });
  }
 
  // ── WIN DETECTION ──
  function getWinner() {
    for (let idx = 0; idx < WINS.length; idx++) {
      const [a, mid, c] = WINS[idx];
      if (board[a] && board[a] === board[mid] && board[mid] === board[c]) {
        return { sym: board[a], combo: WINS[idx], lineIdx: idx };
      }
    }
    return null;
  }
 
  // ── END ROUND ──
  function endRound(win) {
    gameOver = true;
    lockBoard(true);
 
    if (win) {
      win.combo.forEach(i => {
        const cell = document.querySelector(`.cell[data-i="${i}"]`);
        if (cell) {
          cell.classList.add("is-win");
          if (win.sym === "O") cell.classList.add("is-o-win");
          cell.classList.remove("is-x", "is-o");
        }
      });
      drawWinLine(win.lineIdx);
      if (win.sym === "X") scores.p1++; else scores.p2++;
      syncScoreboard();
      const winner = win.sym === "X" ? p1 : p2;
      showResult(`${winner} wins this round!`);
    } else {
      scores.draws++;
      syncScoreboard();
      showResult( "It's a draw!");
    }
  }
 
  function showResult(emoji, text) {
    setTimeout(() => {
      document.getElementById("res-emoji").textContent = emoji;
      document.getElementById("res-text").textContent  = text;
      document.getElementById("next-btn").textContent  = isMatchDone() ? "See Results →" : "Next Round →";
      document.getElementById("result-overlay").classList.add("show");
    }, 700);
  }
 
  // ── WIN LINE ──
  function drawWinLine(idx) {
    const svg  = document.getElementById("win-svg");
    const line = document.getElementById("win-line");
    const [x1, y1, x2, y2] = WIN_LINES[idx];
    line.setAttribute("x1", x1); line.setAttribute("y1", y1);
    line.setAttribute("x2", x2); line.setAttribute("y2", y2);
    svg.style.display = "block";
  }
 
  function clearWinLine() {
    const svg = document.getElementById("win-svg");
    if (svg) svg.style.display = "none";
  }
 
  // ── FINAL ──
  function renderFinal() {
    const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
    set("fp1n", p1); set("fp2n", p2);
    set("fp1s", scores.p1); set("fp2s", scores.p2); set("fpds", scores.draws);
 
    let title;
    if (scores.p1 > scores.p2)      title = ` ${p1} Wins the Match!`;
    else if (scores.p2 > scores.p1) title = `${p2} Wins the Match!`;
    else                             title = " The Match is Tied!";
    set("final-title", title);
  }
 
  // ── AI ──
  function freeCells(b) {
    return b.reduce((acc, v, i) => { if (!v) acc.push(i); return acc; }, []);
  }
 
  function checkWinFor(b, sym) {
    return WINS.some(([a, mid, c]) => b[a] === sym && b[mid] === sym && b[c] === sym);
  }
 
  function minimax(b, isMax, alpha, beta, depth) {
    if (checkWinFor(b, "O")) return 10 - depth;
    if (checkWinFor(b, "X")) return depth - 10;
    if (b.every(c => c)) return 0;
 
    const moves = freeCells(b);
    if (isMax) {
      let best = -Infinity;
      for (const m of moves) {
        b[m] = "O";
        best = Math.max(best, minimax(b, false, alpha, beta, depth + 1));
        b[m] = null;
        alpha = Math.max(alpha, best);
        if (beta <= alpha) break;
      }
      return best;
    } else {
      let best = Infinity;
      for (const m of moves) {
        b[m] = "X";
        best = Math.min(best, minimax(b, true, alpha, beta, depth + 1));
        b[m] = null;
        beta = Math.min(beta, best);
        if (beta <= alpha) break;
      }
      return best;
    }
  }
 
  function chooseMove(b, diff) {
    const moves = freeCells(b);
    if (!moves.length) return null;
 
    if (diff === "easy") return moves[Math.floor(Math.random() * moves.length)];
 
    if (diff === "medium") {
      for (const m of moves) { b[m] = "O"; if (checkWinFor(b,"O")) { b[m]=null; return m; } b[m]=null; }
      for (const m of moves) { b[m] = "X"; if (checkWinFor(b,"X")) { b[m]=null; return m; } b[m]=null; }
      for (const p of [4,0,2,6,8,1,3,5,7]) { if (!b[p]) return p; }
      return moves[0];
    }
 
    let bestScore = -Infinity, bestMove = moves[0];
    for (const m of moves) {
      b[m] = "O";
      const s = minimax(b, false, -Infinity, Infinity, 0);
      b[m] = null;
      if (s > bestScore) { bestScore = s; bestMove = m; }
    }
    return bestMove;
  }
 
  function aiTurn() {
    if (gameOver) return;
    const move = chooseMove([...board], difficulty);
    if (move !== null) placeMove(move, "O");
    afterMove();
    if (!gameOver) lockBoard(false);
  }
}
if (document.getElementById("start-btn")) {
  initTicTacToe();
}
//end of init function