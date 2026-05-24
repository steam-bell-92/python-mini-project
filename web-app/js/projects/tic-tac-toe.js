// ═══════════════════════════════════════════════════════════
//  🎮  Tic Tac Toe  —  web-app/js/projects/tic-tac-toe.js
//  Category : games
//  Features : 2-Player | vs AI (Easy/Medium/Hard) |
//             Score tracking | Best-of-1/3/5 rounds
// ═══════════════════════════════════════════════════════════

// ── 1.  HTML Template ──────────────────────────────────────
function getTicTacToeHTML() {
  return `
<div class="ttt-wrap">

  <!-- ░░ SETUP SCREEN ░░ -->
  <div id="ttt-setup" class="ttt-screen ttt-screen--active">
    <div class="ttt-logo">
      <span class="ttt-logo-x">X</span>
      <span class="ttt-logo-dot">·</span>
      <span class="ttt-logo-o">O</span>
    </div>
    <h2 class="ttt-title">Tic Tac Toe</h2>
    <p class="ttt-sub">Two players or vs AI — classic strategy game!</p>

    <div class="ttt-field-group">
      <span class="ttt-label">Game Mode</span>
      <div class="ttt-pill-group" id="ttt-mode-group">
        <button class="ttt-pill ttt-pill--on" data-val="2p">👥 Two Players</button>
        <button class="ttt-pill" data-val="ai">🤖 vs Computer</button>
      </div>
    </div>

    <div class="ttt-field-group" id="ttt-diff-group" style="display:none">
      <span class="ttt-label">Difficulty</span>
      <div class="ttt-pill-group" id="ttt-diff-pills">
        <button class="ttt-pill ttt-pill--on" data-val="easy">🟢 Easy</button>
        <button class="ttt-pill" data-val="medium">🟡 Medium</button>
        <button class="ttt-pill" data-val="hard">🔴 Hard</button>
      </div>
    </div>

    <div class="ttt-field-group">
      <span class="ttt-label">Rounds</span>
      <div class="ttt-pill-group" id="ttt-rounds-group">
        <button class="ttt-pill" data-val="1">1</button>
        <button class="ttt-pill ttt-pill--on" data-val="3">Best of 3</button>
        <button class="ttt-pill" data-val="5">Best of 5</button>
      </div>
    </div>

    <div class="ttt-names-row">
      <div class="ttt-name-box">
        <span class="ttt-label">Player 1 <em class="ttt-x-tag">❌</em></span>
        <input class="ttt-input" type="text" id="ttt-p1" placeholder="Player 1" maxlength="12"/>
      </div>
      <div class="ttt-name-box" id="ttt-p2-box">
        <span class="ttt-label">Player 2 <em class="ttt-o-tag">⭕</em></span>
        <input class="ttt-input" type="text" id="ttt-p2" placeholder="Player 2" maxlength="12"/>
      </div>
    </div>

    <button class="ttt-cta" id="ttt-start">🚀 Start Game</button>
  </div><!-- /setup -->

  <!-- ░░ GAME SCREEN ░░ -->
  <div id="ttt-game" class="ttt-screen">

    <!-- Scoreboard -->
    <div class="ttt-scores">
      <div class="ttt-score ttt-score--x">
        <div class="ttt-score-name" id="ttt-sn1">P1</div>
        <div class="ttt-score-val"  id="ttt-sv1">0</div>
      </div>
      <div class="ttt-score ttt-score--d">
        <div class="ttt-score-name">Draws</div>
        <div class="ttt-score-val" id="ttt-svd">0</div>
      </div>
      <div class="ttt-score ttt-score--o">
        <div class="ttt-score-name" id="ttt-sn2">P2</div>
        <div class="ttt-score-val"  id="ttt-sv2">0</div>
      </div>
    </div>

    <div class="ttt-round-tag" id="ttt-round-tag">Round 1 of 3</div>

    <!-- Turn banner -->
    <div class="ttt-turn-banner" id="ttt-turn-banner">
      <span class="ttt-turn-sym" id="ttt-turn-sym">❌</span>
      <span id="ttt-turn-name">Player 1</span>'s turn
    </div>

    <!-- Board -->
    <div style="position:relative;">
    <div id="ttt-board">
      ${[0,1,2,3,4,5,6,7,8].map(i =>
        `<button class="ttt-cell" data-i="${i}" aria-label="Cell ${i+1}"></button>`
      ).join('')}
    </div>

    <!-- Win-line SVG overlay -->
    <svg class="ttt-win-svg" id="ttt-win-svg" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg">
      <line id="ttt-win-line" x1="0" y1="0" x2="0" y2="0"
            stroke="var(--ttt-accent)" stroke-width="0.18"
            stroke-linecap="round" opacity="0"/>
    </svg>
</div>
    <!-- Result overlay -->
    <div class="ttt-result-overlay" id="ttt-result-overlay" style="display:none">
      <div class="ttt-result-card">
        <div class="ttt-result-emoji" id="ttt-res-emoji">🏆</div>
        <div class="ttt-result-text"  id="ttt-res-text">Player 1 wins!</div>
        <button class="ttt-cta ttt-cta--sm" id="ttt-next">Next Round →</button>
      </div>
    </div>

    <button class="ttt-ghost-btn" id="ttt-back">← Menu</button>
  </div><!-- /game -->

  <!-- ░░ FINAL SCREEN ░░ -->
  <div id="ttt-final" class="ttt-screen">
    <div class="ttt-final-trophy">🏆</div>
    <div class="ttt-final-title" id="ttt-final-title">Player 1 Wins!</div>
    <div class="ttt-final-scoreline">
      <span class="ttt-fs-name ttt-fs-x" id="ttt-fp1">P1</span>
      <span class="ttt-fs-score" id="ttt-fp1s">0</span>
      <span class="ttt-fs-sep">—</span>
      <span class="ttt-fs-score" id="ttt-fp2s">0</span>
      <span class="ttt-fs-name ttt-fs-o" id="ttt-fp2">P2</span>
    </div>
    <div class="ttt-final-draws" id="ttt-final-draws">0 draws</div>
    <div class="ttt-final-actions">
      <button class="ttt-cta" id="ttt-rematch">🔄 Rematch</button>
      <button class="ttt-ghost-btn" id="ttt-menu">← Main Menu</button>
    </div>
  </div><!-- /final -->

</div><!-- /ttt-wrap -->
`;
}

// ── 2.  Init Function ──────────────────────────────────────
function initTicTacToe() {

  // Win combos
  const WINS = [
    [0,1,2],[3,4,5],[6,7,8],   // rows
    [0,3,6],[1,4,7],[2,5,8],   // cols
    [0,4,8],[2,4,6]            // diagonals
  ];

  // Win-line centre coordinates (column, row) in 0-2 grid space
  const WIN_COORDS = [
    [[0,0],[2,0]], [[0,1],[2,1]], [[0,2],[2,2]],  // rows
    [[0,0],[0,2]], [[1,0],[1,2]], [[2,0],[2,2]],  // cols
    [[0,0],[2,2]], [[2,0],[0,2]]                   // diagonals
  ];

  // ── State ──
  let mode       = "2p";
  let difficulty = "easy";
  let maxRounds  = 3;
  let p1         = "Player 1";
  let p2         = "Player 2";
  let scores     = { p1:0, p2:0, draws:0 };
  let board      = [];
  let current    = "X";   // "X" | "O"
  let round      = 1;
  let gameOver   = false;

  // ── Helpers ──
  function qs(sel, ctx) { return (ctx||document).querySelector(sel); }

  // Show one of the three screens
  function showScreen(id) {
    ["ttt-setup","ttt-game","ttt-final"].forEach(s => {
      const el = document.getElementById(s);
      if (el) {
        el.classList.toggle("ttt-screen--active", s === id);
      }
    });
  }

  // Pill-toggle group helper
  function initPillGroup(groupId, onChange) {
    const grp = document.getElementById(groupId);
    if (!grp) return;
    grp.querySelectorAll(".ttt-pill").forEach(btn => {
      btn.addEventListener("click", () => {
        grp.querySelectorAll(".ttt-pill").forEach(b => b.classList.remove("ttt-pill--on"));
        btn.classList.add("ttt-pill--on");
        onChange(btn.dataset.val);
      });
    });
  }

  // ── Wire up Setup ──
  initPillGroup("ttt-mode-group", val => {
    mode = val;
    const diffGroup = document.getElementById("ttt-diff-group");
    const p2box     = document.getElementById("ttt-p2-box");
    const p2inp     = document.getElementById("ttt-p2");
    if (val === "ai") {
      diffGroup.style.display = "block";
      p2box.classList.add("ttt-dimmed");
      p2inp.disabled = true;
      p2inp.placeholder = "Computer 🤖";
    } else {
      diffGroup.style.display = "none";
      p2box.classList.remove("ttt-dimmed");
      p2inp.disabled = false;
      p2inp.placeholder = "Player 2";
    }
  });

  initPillGroup("ttt-diff-pills",   val => { difficulty = val; });
  initPillGroup("ttt-rounds-group", val => { maxRounds = parseInt(val); });

  // Start button
  const startBtn = document.getElementById("ttt-start");
  if (startBtn) {
    startBtn.addEventListener("click", () => {
      p1 = (document.getElementById("ttt-p1").value.trim()) || "Player 1";
      p2 = mode === "ai"
        ? "Computer 🤖"
        : ((document.getElementById("ttt-p2").value.trim()) || "Player 2");
      scores = { p1:0, p2:0, draws:0 };
      round  = 1;
      newRound();
      showScreen("ttt-game");
    });
  }

  // Back / Menu buttons
  const backBtn = document.getElementById("ttt-back");
  if (backBtn) backBtn.addEventListener("click", () => showScreen("ttt-setup"));

  const menuBtn = document.getElementById("ttt-menu");
  if (menuBtn) menuBtn.addEventListener("click", () => showScreen("ttt-setup"));

  // Rematch button
  const rematchBtn = document.getElementById("ttt-rematch");
  if (rematchBtn) {
    rematchBtn.addEventListener("click", () => {
      scores = { p1:0, p2:0, draws:0 };
      round  = 1;
      newRound();
      showScreen("ttt-game");
    });
  }

  // Next-round button
  const nextBtn = document.getElementById("ttt-next");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      const majority = Math.ceil(maxRounds / 2);
      const matchDone = round >= maxRounds
        || scores.p1 >= majority
        || scores.p2 >= majority;
      if (matchDone) {
        renderFinal();
        showScreen("ttt-final");
      } else {
        round++;
        newRound();
      }
    });
  }

  // ── Round management ──
  function newRound() {
    board    = Array(9).fill(null);
    current  = "X";
    gameOver = false;

    // Reset cells
    document.querySelectorAll(".ttt-cell").forEach(c => {
      c.textContent = "";
      c.className   = "ttt-cell";
      c.disabled    = false;
    });

    // Hide result overlay
    const overlay = document.getElementById("ttt-result-overlay");
    if (overlay) overlay.style.display = "none";

    // Clear win line
    clearWinLine();

    // Update scoreboard
    syncScoreboard();

    // Round label
    const tag = document.getElementById("ttt-round-tag");
    if (tag) {
      tag.textContent = maxRounds === 1
        ? "Single Round"
        : `Round ${round} of ${maxRounds}`;
    }

    refreshTurnBanner();

    // If AI goes first (not default, but safe to handle)
    if (mode === "ai" && current === "O") {
      lockBoard(true);
      setTimeout(aiTurn, 600);
    }
  }

  function syncScoreboard() {
    const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
    set("ttt-sn1", p1);
    set("ttt-sn2", p2);
    set("ttt-sv1", scores.p1);
    set("ttt-sv2", scores.p2);
    set("ttt-svd", scores.draws);
  }

  function refreshTurnBanner() {
    const name = current === "X" ? p1 : p2;
    const sym  = current === "X" ? "X" : "O";
    const symEl  = document.getElementById("ttt-turn-sym");
    const nameEl = document.getElementById("ttt-turn-name");
    const banner = document.getElementById("ttt-turn-banner");
    if (symEl)  symEl.textContent  = sym;
    if (nameEl) nameEl.textContent = name;
    if (banner) {
      banner.classList.toggle("ttt-turn-banner--x", current === "X");
      banner.classList.toggle("ttt-turn-banner--o", current === "O");
    }
  }

  // ── Cell clicks ──
  document.querySelectorAll(".ttt-cell").forEach(cell => {
    cell.addEventListener("click", () => {
      const i = parseInt(cell.dataset.i);
      if (gameOver || board[i]) return;
      if (mode === "ai" && current === "O") return; // AI's turn

      placeMove(i, current);
      afterMove();
    });
  });

  function placeMove(i, sym) {
    board[i] = sym;
    const cell = document.querySelector(`.ttt-cell[data-i="${i}"]`);
    if (!cell) return;
    cell.textContent = sym;
    cell.classList.add(sym === "X" ? "ttt-cell--x" : "ttt-cell--o");
    cell.disabled = true;
  }

  function afterMove() {
    const win = getWinner(board);
    if (win)              { endRound(win);  return; }
    if (board.every(c=>c)){ endRound(null); return; }

    current = current === "X" ? "O" : "X";
    refreshTurnBanner();

    if (mode === "ai" && current === "O") {
      lockBoard(true);
      setTimeout(aiTurn, 480 + Math.random()*200);
    }
  }

  function lockBoard(on) {
    document.querySelectorAll(".ttt-cell").forEach(c => {
      if (!board[parseInt(c.dataset.i)]) c.disabled = on;
    });
  }

  // ── Win detection ──
  function getWinner(b) {
    for (let idx=0; idx<WINS.length; idx++) {
      const [a,x,c] = WINS[idx];
      if (b[a] && b[a]===b[x] && b[x]===b[c]) {
        return { sym: b[a], combo: WINS[idx], coordIdx: idx };
      }
    }
    return null;
  }

  // ── End of round ──
  function endRound(win) {
    gameOver = true;
    lockBoard(true);

    if (win) {
      // Highlight winning cells
      win.combo.forEach(i => {
        const cell = document.querySelector(`.ttt-cell[data-i="${i}"]`);
        if (cell) cell.classList.add("ttt-cell--win");
      });
      // Draw SVG win line
      drawWinLine(win.coordIdx);

      const winnerName = win.sym === "X" ? p1 : p2;
      if (win.sym === "X") scores.p1++; else scores.p2++;
      syncScoreboard();

      setResult("🏆", `${winnerName} wins this round!`);
    } else {
      scores.draws++;
      syncScoreboard();
      setResult("🤝", "It's a draw!");
    }

    // Update Next button label
    setTimeout(() => {
      const majority  = Math.ceil(maxRounds / 2);
      const matchDone = round >= maxRounds
        || scores.p1 >= majority
        || scores.p2 >= majority;
      const nextBtn = document.getElementById("ttt-next");
      if (nextBtn) nextBtn.textContent = matchDone ? "See Results →" : "Next Round →";

      const overlay = document.getElementById("ttt-result-overlay");
      if (overlay) overlay.style.display = "flex";
    }, 600);
  }

  function setResult(emoji, text) {
    const e = document.getElementById("ttt-res-emoji");
    const t = document.getElementById("ttt-res-text");
    if (e) e.textContent = emoji;
    if (t) t.textContent = text;
  }

  // ── Win-line SVG ──
  // Grid cells are (col, row) 0-indexed; centre of cell = col+0.5, row+0.5
  function drawWinLine(comboIdx) {
  const line = document.getElementById("ttt-win-line");
  const svg  = document.getElementById("ttt-win-svg");
  if (!line || !svg) return;

  const [[c1,r1],[c2,r2]] = WIN_COORDS[comboIdx];
  line.setAttribute("x1", c1 + 0.5);
  line.setAttribute("y1", r1 + 0.5);
  line.setAttribute("x2", c2 + 0.5);
  line.setAttribute("y2", r2 + 0.5);
  line.setAttribute("opacity", "1");
  svg.classList.add("ttt-win-svg--visible");
}
 function clearWinLine() {
    const line = document.getElementById("ttt-win-line");
    const svg  = document.getElementById("ttt-win-svg");
    if (line) line.setAttribute("opacity","0");
    if (svg)  svg.classList.remove("ttt-win-svg--visible");
  }

  // ── Final screen ──
  function renderFinal() {
    const set = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
    set("ttt-fp1",  p1);
    set("ttt-fp2",  p2);
    set("ttt-fp1s", scores.p1);
    set("ttt-fp2s", scores.p2);
    set("ttt-final-draws", `${scores.draws} draw${scores.draws!==1?"s":""}`);

    let title;
    if      (scores.p1 > scores.p2) title = `🏆 ${p1} wins the match!`;
    else if (scores.p2 > scores.p1) title = `🏆 ${p2} wins the match!`;
    else                             title = "🤝 The match is tied!";
    set("ttt-final-title", title);
  }

  // ── AI engines ──
  function freeCells(b) {
    return b.reduce((acc,v,i) => { if(!v) acc.push(i); return acc; }, []);
  }

  function checkWinFor(b, sym) {
    return WINS.some(([a,x,c]) => b[a]===sym && b[x]===sym && b[c]===sym);
  }

  function minimax(b, isMax, alpha, beta, depth) {
    if (checkWinFor(b,"O")) return 10 - depth;
    if (checkWinFor(b,"X")) return depth - 10;
    if (b.every(c=>c))      return 0;

    const moves = freeCells(b);
    if (isMax) {
      let best = -Infinity;
      for (const m of moves) {
        b[m] = "O";
        best = Math.max(best, minimax(b, false, alpha, beta, depth+1));
        b[m] = null;
        alpha = Math.max(alpha, best);
        if (beta <= alpha) break;
      }
      return best;
    } else {
      let best = Infinity;
      for (const m of moves) {
        b[m] = "X";
        best = Math.min(best, minimax(b, true, alpha, beta, depth+1));
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

    // Easy — random
    if (diff === "easy") return moves[Math.floor(Math.random()*moves.length)];

    // Medium — win → block → center/corners
    if (diff === "medium") {
      for (const m of moves) { b[m]="O"; if(checkWinFor(b,"O")){b[m]=null;return m;} b[m]=null; }
      for (const m of moves) { b[m]="X"; if(checkWinFor(b,"X")){b[m]=null;return m;} b[m]=null; }
      for (const p of [4,0,2,6,8,1,3,5,7]) { if(!b[p]) return p; }
      return moves[0];
    }

    // Hard — minimax
    let bestScore=-Infinity, bestMove=moves[0];
    for (const m of moves) {
      b[m]="O";
      const s = minimax(b, false, -Infinity, Infinity, 0);
      b[m]=null;
      if (s > bestScore) { bestScore=s; bestMove=m; }
    }
    return bestMove;
  }

  function aiTurn() {
    if (gameOver) return;
    const move = chooseMove([...board], difficulty); // pass copy so minimax doesn't corrupt state
    lockBoard(false);
    if (move !== null) placeMove(move, "O");
    afterMove();
  }

} // end initTicTacToe