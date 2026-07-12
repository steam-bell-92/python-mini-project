// ═══════════════════════════════════════════════════════════
//  ♟️ Chess Game  —  web-app/js/projects/chess.js
//  Category : games
//  Features : 2-Player Pass-and-Play | vs Stockfish AI (with local Minimax fallback) | 
//             Theme Customization (including Pygame original assets) | Game-Over Overlay
// ═══════════════════════════════════════════════════════════

// ── 1. HTML Template ──────────────────────────────────────
function getChessHTML() {
  return `
    <div class="project-content">
      <div class="game-container ui-panel">
        <h2>♟️ Chess Game</h2>
        <p class="subtitle">Play against a friend locally or challenge the computer AI!</p>

        <div class="game-settings">
          <div class="control-group">
            <label for="chess-mode">Game Mode</label>
            <select id="chess-mode">
              <option value="ai">🤖 vs Computer AI</option>
              <option value="2p">👥 Pass & Play</option>
            </select>
          </div>

          <div class="control-group">
            <label for="chess-theme">Board Theme</label>
            <select id="chess-theme">
              <option value="pygame">♟️ Pygame Chess (Original)</option>
              <option value="classic">🟢 Classic Forest</option>
              <option value="wood">🟫 Warm Wood</option>
              <option value="charcoal">⬛ Charcoal</option>
            </select>
          </div>
        </div>

        <div class="status-panel">
          <div class="turn-indicator" id="chess-turn">
            <span class="indicator-dot w"></span>
            <span id="turn-text">White to move</span>
          </div>
          <div class="check-warning" id="chess-warning" style="display: none;">⚠️ CHECK!</div>
        </div>

        <div class="board-wrapper">
          <div class="chess-board" id="chess-board"></div>
          
          <!-- Game Over Overlay (Styled after Pygame screen overlay) -->
          <div class="game-over-overlay" id="chess-gameover" style="display: none;">
            <div class="game-over-content">
              <h1 id="gameover-title">WHITE WINS!</h1>
              <button class="control-btn play-again-btn" id="chess-playAgainBtn">Play Again</button>
            </div>
          </div>
        </div>

        <div class="game-actions">
          <button class="control-btn" id="chess-resetBtn">🔄 Reset Game</button>
        </div>

        <!-- Pawn Promotion Dialog -->
        <div class="promotion-modal" id="promotion-modal">
          <div class="promotion-content">
            <h3>Promote Pawn To:</h3>
            <div class="promotion-choices">
              <button data-type="q" class="promo-choice">♛ Queen</button>
              <button data-type="r" class="promo-choice">♜ Rook</button>
              <button data-type="b" class="promo-choice">♝ Bishop</button>
              <button data-type="n" class="promo-choice">♞ Knight</button>
            </div>
          </div>
        </div>

      </div>
    </div>

    <style>
      .game-container {
        width: 100%;
        max-width: 650px;
        margin: auto;
        background: var(--surface-color, #1a202c);
        border-radius: 24px;
        padding: 25px;
        text-align: center;
        color: var(--text-color, #f7fafc);
        box-shadow: var(--shadow, 0 10px 15px -3px rgba(0, 0, 0, 0.1));
      }

      .subtitle {
        color: var(--text-secondary, #a0aec0);
        margin-bottom: 20px;
      }

      .game-settings {
        display: flex;
        justify-content: space-around;
        gap: 15px;
        margin-bottom: 20px;
        flex-wrap: wrap;
      }

      .control-group {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;
      }

      .control-group label {
        font-size: 0.85rem;
        color: var(--text-secondary, #a0aec0);
        font-weight: 600;
      }

      .control-group select {
        padding: 8px 12px;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.05);
        color: var(--text-color, #fff);
        border: 1px solid rgba(255, 255, 255, 0.1);
        outline: none;
        cursor: pointer;
      }

      .status-panel {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
        height: 35px;
      }

      .turn-indicator {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 600;
        background: rgba(255, 255, 255, 0.05);
        padding: 6px 12px;
        border-radius: 20px;
      }

      .indicator-dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        display: inline-block;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      .indicator-dot.w { background: #fff; }
      .indicator-dot.b { background: #333; }

      .check-warning {
        background: #e53e3e;
        color: white;
        font-weight: bold;
        padding: 4px 10px;
        border-radius: 6px;
        animation: pulse 1s infinite alternate;
      }

      @keyframes pulse {
        0% { transform: scale(0.95); opacity: 0.8; }
        100% { transform: scale(1.05); opacity: 1; }
      }

      .board-wrapper {
        width: 100%;
        max-width: 480px;
        margin: 0 auto 20px auto;
        aspect-ratio: 1;
        background: #111;
        padding: 8px;
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        position: relative;
      }

      .chess-board {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(8, 1fr);
        width: 100%;
        height: 100%;
        border-radius: 6px;
        overflow: hidden;
      }

      /* Chess Board Themes */
      .chess-board.classic .square.light { background: #ececd7; }
      .chess-board.classic .square.dark  { background: #739552; }

      .chess-board.wood .square.light { background: #f0d9b5; }
      .chess-board.wood .square.dark  { background: #b58863; }

      .chess-board.charcoal .square.light { background: #e8ebef; }
      .chess-board.charcoal .square.dark  { background: #7d8796; }

      /* Pygame Board Textures */
      .chess-board.pygame .square.light { 
        background-image: url('assets/projects/chess/board_pixels/white_square.jpeg');
        background-size: cover;
      }
      .chess-board.pygame .square.dark  { 
        background-image: url('assets/projects/chess/board_pixels/black_square.jpeg');
        background-size: cover;
      }

      .square {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        user-select: none;
        transition: background 0.15s ease;
      }

      .piece {
        font-size: 2.8rem;
        z-index: 2;
        transition: transform 0.1s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .piece img {
        width: 80%;
        height: 80%;
        pointer-events: none;
        user-select: none;
      }

      .piece.w {
        color: #ffffff;
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.6));
      }

      .piece.b {
        color: #1c2024;
        filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.35));
      }

      .square:hover .piece {
        transform: scale(1.08);
      }

      /* Pygame-Chess Highlighting (rgba yellow selected square, blue circle moves) */
      .square.selected {
        background-color: rgba(255, 255, 0, 0.4) !important;
        box-shadow: none;
        outline: none;
      }

      .square.legal-move::after {
        content: "";
        width: 20px;
        height: 20px;
        background: rgba(0, 100, 255, 0.45);
        border-radius: 50%;
        position: absolute;
        z-index: 3;
      }

      .square.legal-move.has-piece::after {
        width: 80%;
        height: 80%;
        border: 4px solid rgba(0, 100, 255, 0.45);
        background: transparent;
        border-radius: 50%;
      }

      .game-actions {
        display: flex;
        justify-content: center;
        gap: 15px;
      }

      .control-btn {
        background: var(--primary-color, #48bb78);
        color: white;
        border: none;
        padding: 10px 20px;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        transition: opacity 0.2s;
      }

      .control-btn:hover {
        opacity: 0.9;
      }

      /* Pygame Game Over Overlay Screen */
      .game-over-overlay {
        position: absolute;
        top: 8px;
        left: 8px;
        right: 8px;
        bottom: 8px;
        background: rgba(0, 0, 0, 0.85);
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;
        border-radius: 6px;
      }

      .game-over-content h1 {
        color: #ffffff;
        font-size: 2.8rem;
        margin-bottom: 20px;
        font-family: 'Outfit', sans-serif;
        font-weight: 800;
        letter-spacing: 2px;
      }

      .play-again-btn {
        background: #3182ce;
      }

      /* Promotion Modal */
      .promotion-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 1000;
      }

      .promotion-content {
        background: #2d3748;
        padding: 24px;
        border-radius: 12px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        text-align: center;
      }

      .promotion-content h3 {
        margin-top: 0;
        margin-bottom: 15px;
      }

      .promotion-choices {
        display: flex;
        gap: 10px;
      }

      .promo-choice {
        background: rgba(255, 255, 255, 0.05);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
        padding: 10px 15px;
        font-size: 1.5rem;
        border-radius: 6px;
        cursor: pointer;
        transition: background 0.2s;
      }

      .promo-choice:hover {
        background: rgba(255, 255, 255, 0.15);
      }

      @media (max-width: 500px) {
        .piece { font-size: 2rem; }
        .square.legal-move::after { width: 12px; height: 12px; }
        .game-over-content h1 { font-size: 2rem; }
      }
    </style>
  `;
}

// ── 2. Game Logic and AI Engine ───────────────────────────
function initChess() {
  const boardEl = document.getElementById("chess-board");
  const turnText = document.getElementById("turn-text");
  const turnDot = document.querySelector(".indicator-dot");
  const warningEl = document.getElementById("chess-warning");
  const resetBtn = document.getElementById("chess-resetBtn");
  const modeSelect = document.getElementById("chess-mode");
  const themeSelect = document.getElementById("chess-theme");
  const promoModal = document.getElementById("promotion-modal");
  const gameoverEl = document.getElementById("chess-gameover");
  const gameoverTitle = document.getElementById("gameover-title");
  const playAgainBtn = document.getElementById("chess-playAgainBtn");

  // Unicode Chess Pieces Map (using solid shapes for both, colored via CSS)
  const UNICODE_PIECES = {
    wk: "♚", wq: "♛", wr: "♜", wb: "♝", wn: "♞", wp: "♟",
    bk: "♚", bq: "♛", br: "♜", bb: "♝", bn: "♞", bp: "♟"
  };

  // Pygame Chess Asset Mapping Names
  const PIECE_NAMES = {
    p: "pawn",
    r: "rook",
    n: "knight",
    b: "bishop",
    q: "queen",
    k: "king"
  };

  // State representation (flat array of 64 elements)
  let board = Array(64).fill(null);
  let turn = "w"; // "w" or "b"
  let selectedIdx = null;
  let legalMoves = [];
  let kingMoved = { w: false, b: false };
  let rookMoved = { w: { q: false, k: false }, b: { q: false, k: false } }; // q = queen side, k = king side
  let lastMove = null; // Tracked for en passant: { from, to, piece }
  let activePromotion = null; // { from, to } if pawn is promoting

  // Piece evaluation values for AI (Minimax)
  const PIECE_VALUES = { p: 10, n: 30, b: 30, r: 50, q: 90, k: 900 };

  // Setup Initial Board
  function initBoardState() {
    board.fill(null);
    // Back Row
    const backRow = ["r", "n", "b", "q", "k", "b", "n", "r"];
    for (let c = 0; c < 8; c++) {
      board[c] = "b" + backRow[c];       // Row 0: Black Pieces
      board[8 + c] = "bp";               // Row 1: Black Pawns
      board[48 + c] = "wp";              // Row 6: White Pawns
      board[56 + c] = "w" + backRow[c];  // Row 7: White Pieces
    }
    turn = "w";
    selectedIdx = null;
    legalMoves = [];
    kingMoved = { w: false, b: false };
    rookMoved = { w: { q: false, k: false }, b: { q: false, k: false } };
    lastMove = null;
    activePromotion = null;
    
    if (gameoverEl) gameoverEl.style.display = "none";
  }

  // Render board to DOM
  function renderBoard() {
    boardEl.innerHTML = "";
    for (let i = 0; i < 64; i++) {
      const r = Math.floor(i / 8);
      const c = i % 8;
      const isLight = (r + c) % 2 === 0;

      const sq = document.createElement("div");
      sq.className = `square ${isLight ? "light" : "dark"}`;
      sq.dataset.idx = i;

      const piece = board[i];
      if (piece) {
        const pieceEl = document.createElement("div");
        pieceEl.className = `piece ${piece[0]}`; // Adds class 'w' or 'b'
        
        if (themeSelect.value === "pygame") {
          const imgEl = document.createElement("img");
          const colorName = piece[0] === "w" ? "white" : "black";
          const pieceName = PIECE_NAMES[piece[1]];
          imgEl.src = `assets/projects/chess/pieces/${colorName}/${pieceName}.png`;
          pieceEl.appendChild(imgEl);
        } else {
          pieceEl.textContent = UNICODE_PIECES[piece];
        }
        
        sq.appendChild(pieceEl);
      }

      // Highlights
      if (selectedIdx === i) sq.classList.add("selected");
      if (legalMoves.includes(i)) {
        sq.classList.add("legal-move");
        if (piece) sq.classList.add("has-piece");
      }

      sq.addEventListener("click", () => handleSquareClick(i));
      boardEl.appendChild(sq);
    }

    // Update Indicators
    turnText.textContent = turn === "w" ? "White to move" : "Black to move";
    turnDot.className = `indicator-dot ${turn}`;
    
    const kingIdx = findKing(turn);
    if (kingIdx !== -1 && isSquareAttacked(kingIdx, turn === "w" ? "b" : "w")) {
      warningEl.style.display = "block";
    } else {
      warningEl.style.display = "none";
    }
  }

  // Handle Square Clicks
  function handleSquareClick(idx) {
    if (turn === "b" && modeSelect.value === "ai") return; // AI is thinking

    const piece = board[idx];
    if (selectedIdx === null) {
      // Select Piece
      if (piece && piece[0] === turn) {
        selectedIdx = idx;
        legalMoves = getSafeMoves(idx);
        renderBoard();
      }
    } else {
      // Try to move
      if (legalMoves.includes(idx)) {
        makeMove(selectedIdx, idx);
        selectedIdx = null;
        legalMoves = [];
        renderBoard();
        
        // Trigger AI if playing vs AI and it's Black's turn
        if (modeSelect.value === "ai" && turn === "b" && !checkGameEnded()) {
          setTimeout(makeAIMove, 400);
        }
      } else {
        // Change selection
        if (piece && piece[0] === turn) {
          selectedIdx = idx;
          legalMoves = getSafeMoves(idx);
        } else {
          selectedIdx = null;
          legalMoves = [];
        }
        renderBoard();
      }
    }
  }

  // Base Moves Generator (Pseudo-legal moves)
  function getPseudoMoves(from) {
    const piece = board[from];
    if (!piece) return [];

    const color = piece[0];
    const type = piece[1];
    const r = Math.floor(from / 8);
    const c = from % 8;
    const moves = [];

    const addMove = (targetIdx) => {
      const target = board[targetIdx];
      if (!target || target[0] !== color) {
        moves.push(targetIdx);
        return !target; // Stop tracing ray if we hit a capture
      }
      return false; // Obstacle
    };

    if (type === "p") {
      const dir = color === "w" ? -1 : 1;
      const startRow = color === "w" ? 6 : 1;

      // Forward 1
      const f1 = from + dir * 8;
      if (f1 >= 0 && f1 < 64 && !board[f1]) {
        moves.push(f1);
        // Forward 2 from start row
        const f2 = from + dir * 16;
        if (r === startRow && !board[f2]) {
          moves.push(f2);
        }
      }

      // Diagonal captures
      for (const dc of [-1, 1]) {
        const tc = c + dc;
        if (tc >= 0 && tc < 8) {
          const targetIdx = from + dir * 8 + dc;
          const target = board[targetIdx];
          if (target && target[0] !== color) {
            moves.push(targetIdx);
          }
          // En Passant
          if (lastMove && lastMove.piece && lastMove.piece[1] === "p" && lastMove.to === from + dc) {
            const lastRowFrom = Math.floor(lastMove.from / 8);
            const lastRowTo = Math.floor(lastMove.to / 8);
            if (Math.abs(lastRowFrom - lastRowTo) === 2) {
              moves.push(targetIdx);
            }
          }
        }
      }
    }

    else if (type === "n") {
      const offsets = [
        [-2, -1], [-2, 1], [-1, -2], [-1, 2],
        [1, -2], [1, 2], [2, -1], [2, 1]
      ];
      for (const [dr, dc] of offsets) {
        const tr = r + dr, tc = c + dc;
        if (tr >= 0 && tr < 8 && tc >= 0 && tc < 8) {
          addMove(tr * 8 + tc);
        }
      }
    }

    else if (type === "b" || type === "q") {
      const rays = [[-1, -1], [-1, 1], [1, -1], [1, 1]];
      for (const [dr, dc] of rays) {
        let tr = r + dr, tc = c + dc;
        while (tr >= 0 && tr < 8 && tc >= 0 && tc < 8) {
          if (!addMove(tr * 8 + tc)) break;
          tr += dr; tc += dc;
        }
      }
    }

    if (type === "r" || type === "q") {
      const rays = [[-1, 0], [1, 0], [0, -1], [0, 1]];
      for (const [dr, dc] of rays) {
        let tr = r + dr, tc = c + dc;
        while (tr >= 0 && tr < 8 && tc >= 0 && tc < 8) {
          if (!addMove(tr * 8 + tc)) break;
          tr += dr; tc += dc;
        }
      }
    }

    else if (type === "k") {
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const tr = r + dr, tc = c + dc;
          if (tr >= 0 && tr < 8 && tc >= 0 && tc < 8) {
            addMove(tr * 8 + tc);
          }
        }
      }
    }

    return moves;
  }

  // Safe Moves Generator (Filters moves that leave own King in check)
  function getSafeMoves(from) {
    const pseudo = getPseudoMoves(from);
    const piece = board[from];
    if (!piece) return [];
    
    const color = piece[0];
    const type = piece[1];
    
    const safe = pseudo.filter(to => {
      // Simulate move
      const originalTo = board[to];
      const originalFrom = board[from];
      
      // En Passant check simulation
      let enPassantPiece = null;
      let enPassantIdx = null;
      if (originalFrom[1] === "p" && (to % 8 !== from % 8) && !originalTo) {
        enPassantIdx = to + (color === "w" ? 8 : -8);
        enPassantPiece = board[enPassantIdx];
        board[enPassantIdx] = null;
      }

      board[to] = originalFrom;
      board[from] = null;

      const kingIdx = findKing(color);
      const isCheck = isSquareAttacked(kingIdx, color === "w" ? "b" : "w");

      // Undo Simulation
      board[from] = originalFrom;
      board[to] = originalTo;
      if (enPassantIdx !== null) {
        board[enPassantIdx] = enPassantPiece;
      }

      return !isCheck;
    });

    // Add castling moves if safe
    if (type === "k") {
      const opponentColor = color === "w" ? "b" : "w";
      if (!kingMoved[color] && !isSquareAttacked(from, opponentColor)) {
        // King Side (Right)
        if (!rookMoved[color].k && !board[from + 1] && !board[from + 2]) {
          if (!isSquareAttacked(from + 1, opponentColor) && !isSquareAttacked(from + 2, opponentColor)) {
            safe.push(from + 2);
          }
        }
        // Queen Side (Left)
        if (!rookMoved[color].q && !board[from - 1] && !board[from - 2] && !board[from - 3]) {
          if (!isSquareAttacked(from - 1, opponentColor) && !isSquareAttacked(from - 2, opponentColor)) {
            safe.push(from - 2);
          }
        }
      }
    }

    return safe;
  }

  // Find King Index
  function findKing(color) {
    for (let i = 0; i < 64; i++) {
      if (board[i] === color + "k") return i;
    }
    return -1;
  }

  // Is Square Attacked?
  function isSquareAttacked(squareIdx, attackerColor) {
    if (squareIdx === -1) return false;
    const sr = Math.floor(squareIdx / 8);
    const sc = squareIdx % 8;

    for (let i = 0; i < 64; i++) {
      const piece = board[i];
      if (!piece || piece[0] !== attackerColor) continue;

      const type = piece[1];
      const r = Math.floor(i / 8);
      const c = i % 8;

      if (type === "p") {
        const dir = attackerColor === "w" ? -1 : 1;
        // Pawns attack diagonally forward
        if (r + dir === sr && Math.abs(c - sc) === 1) {
          return true;
        }
      } else {
        const moves = getPseudoMoves(i);
        if (moves.includes(squareIdx)) return true;
      }
    }
    return false;
  }

  // Apply a Move to the Board
  function makeMove(from, to, promoType = null) {
    const piece = board[from];
    if (!piece) return;
    const color = piece[0];
    const type = piece[1];

    // Handle Castling moves
    if (type === "k" && Math.abs(to - from) === 2) {
      if (to === from + 2) { // King Side
        board[from + 1] = board[from + 3];
        board[from + 3] = null;
      } else if (to === from - 2) { // Queen Side
        board[from - 1] = board[from - 4];
        board[from - 4] = null;
      }
    }

    // Handle En Passant Capture
    if (type === "p" && to % 8 !== from % 8 && !board[to]) {
      const epIdx = to + (color === "w" ? 8 : -8);
      board[epIdx] = null;
    }

    // Move Piece
    board[to] = piece;
    board[from] = null;

    // Castling Rights Update
    if (type === "k") kingMoved[color] = true;
    if (type === "r") {
      if (from === 56 || from === 0) rookMoved[color].q = true;
      if (from === 63 || from === 7) rookMoved[color].k = true;
    }

    // Pawn Promotion check
    const destRow = Math.floor(to / 8);
    if (type === "p" && (destRow === 0 || destRow === 7)) {
      if (promoType) {
        board[to] = color + promoType;
      } else {
        activePromotion = { from, to };
        showPromotionDialog();
        return; // Delay turn switch until promotion completes
      }
    }

    lastMove = { from, to, piece: board[to] };
    turn = turn === "w" ? "b" : "w";
    checkGameEnded();
  }

  // Show/Hide Promotion Dialog
  function showPromotionDialog() {
    promoModal.style.display = "flex";
    const buttons = promoModal.querySelectorAll(".promo-choice");
    buttons.forEach(btn => {
      btn.onclick = () => {
        const type = btn.dataset.type;
        board[activePromotion.to] = turn + type;
        promoModal.style.display = "none";
        
        lastMove = { from: activePromotion.from, to: activePromotion.to, piece: turn + type };
        activePromotion = null;
        turn = turn === "w" ? "b" : "w";
        renderBoard();

        if (modeSelect.value === "ai" && turn === "b" && !checkGameEnded()) {
          setTimeout(makeAIMove, 400);
        }
      };
    });
  }

  // Check Game Ended (Checkmate, Stalemate or Insufficient Material Draw)
  function checkGameEnded() {
    let hasMoves = false;
    for (let i = 0; i < 64; i++) {
      const piece = board[i];
      if (piece && piece[0] === turn) {
        if (getSafeMoves(i).length > 0) {
          hasMoves = true;
          break;
        }
      }
    }

    if (!hasMoves) {
      const kingIdx = findKing(turn);
      const isCheck = isSquareAttacked(kingIdx, turn === "w" ? "b" : "w");
      if (isCheck) {
        const winner = turn === "w" ? "BLACK WINS!" : "WHITE WINS!";
        showWinnerOverlay(winner);
      } else {
        showWinnerOverlay("STALEMATE");
      }
      return true;
    }

    if (isInsufficientMaterial()) {
      showWinnerOverlay("DRAW");
      return true;
    }

    return false;
  }

  // Insufficient Material Checker
  function isInsufficientMaterial() {
    let pieces = [];
    for (let i = 0; i < 64; i++) {
      if (board[i]) pieces.push(board[i]);
    }
    if (pieces.length === 2) {
      return true; // Only 2 kings left
    }
    if (pieces.length === 3) {
      const otherPiece = pieces.find(p => p[1] !== "k");
      if (otherPiece && (otherPiece[1] === "b" || otherPiece[1] === "n")) {
        return true; // King & Bishop or King & Knight vs King
      }
    }
    return false;
  }

  // Winner overlay management
  function showWinnerOverlay(message) {
    if (gameoverTitle && gameoverEl) {
      gameoverTitle.textContent = message;
      gameoverEl.style.display = "flex";
    }
  }

  // Convert current board position to FEN notation for Stockfish API
  function generateFEN() {
    let fen = "";
    for (let r = 0; r < 8; r++) {
      let emptyCount = 0;
      for (let c = 0; c < 8; c++) {
        const idx = r * 8 + c;
        const piece = board[idx];
        if (piece === null) {
          emptyCount++;
        } else {
          if (emptyCount > 0) {
            fen += emptyCount;
            emptyCount = 0;
          }
          const color = piece[0];
          const type = piece[1];
          const symbol = color === "w" ? type.toUpperCase() : type.toLowerCase();
          fen += symbol;
        }
      }
      if (emptyCount > 0) {
        fen += emptyCount;
      }
      if (r < 7) {
        fen += "/";
      }
    }

    // Active color
    fen += " " + turn;

    // Castling rights
    let castling = "";
    if (!kingMoved.w) {
      if (!rookMoved.w.k) castling += "K";
      if (!rookMoved.w.q) castling += "Q";
    }
    if (!kingMoved.b) {
      if (!rookMoved.b.k) castling += "k";
      if (!rookMoved.b.q) castling += "q";
    }
    fen += " " + (castling || "-");

    // En passant square
    let epSquare = "-";
    if (lastMove && lastMove.piece && lastMove.piece[1] === "p") {
      const fromRow = Math.floor(lastMove.from / 8);
      const toRow = Math.floor(lastMove.to / 8);
      const toCol = lastMove.to % 8;
      if (Math.abs(fromRow - toRow) === 2) {
        const epRow = fromRow + (toRow - fromRow) / 2;
        const file = String.fromCharCode(97 + toCol);
        const rank = 8 - epRow;
        epSquare = file + rank;
      }
    }
    fen += " " + epSquare;

    // Halfmove clock and fullmove number (defaults)
    fen += " 0 1";

    return fen;
  }

  // Convert algebraic square string (e.g. "e2") to array index (0-63)
  function squareToIdx(square) {
    const col = square.charCodeAt(0) - 97; // 'a' is 97
    const row = 8 - parseInt(square[1]);
    return row * 8 + col;
  }

  // ── 3. Stockfish Online / Minimax AI Engine ────────────────
  async function makeAIMove() {
    // Before computing, make sure Black is active and AI mode is enabled
    if (turn !== "b" || modeSelect.value !== "ai") return;

    const moves = [];
    for (let i = 0; i < 64; i++) {
      const piece = board[i];
      if (piece && piece[0] === "b") {
        const safe = getSafeMoves(i);
        safe.forEach(to => moves.push({ from: i, to }));
      }
    }

    if (moves.length === 0) return;

    // Update Turn Text to show AI status
    turnText.textContent = "Computer is thinking...";

    try {
      const fen = generateFEN();
      const url = `https://stockfish.online/api/s/v2.php?fen=${encodeURIComponent(fen)}&depth=10`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error("Stockfish API request failed");
      
      const data = await response.json();
      
      if (turn !== "b" || modeSelect.value !== "ai") return; // Safety check for mid-turn changes

      if (data.success && data.bestmove) {
        const moveTokens = data.bestmove.split(" ");
        const bestMoveUCI = moveTokens[1]; // e.g. "e7e8q"
        if (bestMoveUCI && bestMoveUCI !== "(none)") {
          const fromSquare = bestMoveUCI.slice(0, 2);
          const toSquare = bestMoveUCI.slice(2, 4);
          const promo = bestMoveUCI.length > 4 ? bestMoveUCI[4] : null;

          const fromIdx = squareToIdx(fromSquare);
          const toIdx = squareToIdx(toSquare);

          makeMove(fromIdx, toIdx, promo);
          renderBoard();
          return;
        }
      }
      throw new Error("Invalid bestmove format");
    } catch (e) {
      console.warn("Stockfish API failed. Falling back to local Minimax engine:", e);
      if (turn !== "b" || modeSelect.value !== "ai") return;
      runMinimaxAI(moves);
    }
  }

  // Fallback minimax algorithm
  function runMinimaxAI(moves) {
    let bestScore = -Infinity;
    let bestMoves = [];

    // Simple one-level lookahead with material valuation
    for (const move of moves) {
      const origTo = board[move.to];
      const origFrom = board[move.from];

      // Simulate
      board[move.to] = origFrom;
      board[move.from] = null;

      const score = -evaluateBoard(); // Evaluate from Black's perspective

      // Undo
      board[move.from] = origFrom;
      board[move.to] = origTo;

      if (score > bestScore) {
        bestScore = score;
        bestMoves = [move];
      } else if (score === bestScore) {
        bestMoves.push(move);
      }
    }

    const selectedMove = bestMoves[Math.floor(Math.random() * bestMoves.length)];
    
    // Auto-promote to queen for minimax moves
    let promo = null;
    const movingPiece = board[selectedMove.from];
    if (movingPiece && movingPiece[1] === "p" && Math.floor(selectedMove.to / 8) === 7) {
      promo = "q";
    }

    makeMove(selectedMove.from, selectedMove.to, promo);
    renderBoard();
  }

  // Evaluate board score: positive favors White, negative favors Black
  function evaluateBoard() {
    let score = 0;
    for (let i = 0; i < 64; i++) {
      const piece = board[i];
      if (piece) {
        const val = PIECE_VALUES[piece[1]] || 0;
        score += piece[0] === "w" ? val : -val;
      }
    }
    return score;
  }

  // Settings & Resets Handlers
  themeSelect.addEventListener("change", () => {
    boardEl.className = `chess-board ${themeSelect.value}`;
    renderBoard();
  });

  resetBtn.addEventListener("click", () => {
    initBoardState();
    renderBoard();
  });

  modeSelect.addEventListener("change", () => {
    initBoardState();
    renderBoard();
  });

  playAgainBtn.addEventListener("click", () => {
    initBoardState();
    renderBoard();
  });

  // Start Session
  themeSelect.value = "pygame";
  boardEl.className = "chess-board pygame";
  initBoardState();
  renderBoard();
}
