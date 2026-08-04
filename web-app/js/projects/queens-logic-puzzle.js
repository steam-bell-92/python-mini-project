// ═══════════════════════════════════════════════════════════
//  👑 Queens Logic Puzzle — Interactive Solver & Game
//  web-app/js/projects/queens-logic-puzzle.js
//  Features: Interactive board | Region-based constraints
//            Move validation | Undo/Hint | Timer | Win detection
// ═══════════════════════════════════════════════════════════

// ── 1. GAME STATE MANAGEMENT ───────────────────────────────

class QueensGame {
  static MAX_BOARD_SIZE = 13;

  constructor(boardSize = 6) {
    this.boardSize = Math.min(Math.max(1, boardSize), QueensGame.MAX_BOARD_SIZE);
    this.board = Array(this.boardSize).fill(null).map(() => Array(this.boardSize).fill(0));
    this.regions = this.initializeRegions();
    this.moveHistory = [];
    this.startTime = Date.now();
    this.isWon = false;
  }

  initializeRegions() {
    // Create irregular colored regions based on the reference image pattern
    // 6x6 board with 6 irregular regions
    const regions = [
      // Region 0 (Pink) - Top-left, 3x3 area
      [0, 0, 0, 1, 1, 1],
      [0, 0, 0, 1, 1, 1],
      [2, 2, 3, 3, 4, 4],
      [2, 3, 3, 3, 4, 4],
      [2, 3, 3, 5, 5, 4],
      [2, 2, 5, 5, 5, 5]
    ];
    return regions;
  }

  placeQueen(row, col) {
    if (this.board[row][col] === 1) {
      return { valid: false, reason: 'Queen already placed' };
    }

    if (!this.isValidPlacement(row, col)) {
      return { valid: false, reason: 'Invalid placement: violates rules' };
    }

    this.moveHistory.push({ row, col, type: 'place' });
    this.board[row][col] = 1;
    return { valid: true };
  }

  removeQueen(row, col) {
    if (this.board[row][col] === 0) {
      return { valid: false, reason: 'No queen to remove' };
    }

    this.moveHistory.push({ row, col, type: 'remove' });
    this.board[row][col] = 0;
    return { valid: true };
  }

  isValidPlacement(row, col) {
    // Temporarily place queen to test
    this.board[row][col] = 1;

    // Check all constraints
    const valid = 
      this.checkRowConstraint(row) &&
      this.checkColConstraint(col) &&
      this.checkAdjacentConstraint(row, col) &&
      this.checkRegionConstraint();

    // Remove temporary placement
    this.board[row][col] = 0;

    return valid;
  }

  checkRowConstraint(row) {
    const count = this.board[row].filter(cell => cell === 1).length;
    return count <= 1;
  }

  checkColConstraint(col) {
    let count = 0;
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board[i][col] === 1) count++;
    }
    return count <= 1;
  }

  checkAdjacentConstraint(row, col) {
    // Check 8 adjacent cells
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1],  [1, 0],  [1, 1]
    ];

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (newRow >= 0 && newRow < this.boardSize &&
          newCol >= 0 && newCol < this.boardSize) {
        if (this.board[newRow][newCol] === 1) {
          return false;
        }
      }
    }

    return true;
  }

  checkRegionConstraint() {
    const regionCounts = {};

    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (this.board[i][j] === 1) {
          const regionId = this.regions[i][j];
          regionCounts[regionId] = (regionCounts[regionId] || 0) + 1;

          if (regionCounts[regionId] > 1) {
            return false;
          }
        }
      }
    }

    return true;
  }

  checkWinCondition() {
    // All rows have 1 queen
    for (let i = 0; i < this.boardSize; i++) {
      if (this.board[i].filter(c => c === 1).length !== 1) return false;
    }

    // All columns have 1 queen
    for (let j = 0; j < this.boardSize; j++) {
      let colCount = 0;
      for (let i = 0; i < this.boardSize; i++) {
        if (this.board[i][j] === 1) colCount++;
      }
      if (colCount !== 1) return false;
    }

    // All regions have 1 queen
    const regionCounts = {};
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (this.board[i][j] === 1) {
          const regionId = this.regions[i][j];
          regionCounts[regionId] = (regionCounts[regionId] || 0) + 1;
        }
      }
    }

    for (let regionId = 0; regionId < this.boardSize; regionId++) {
      if ((regionCounts[regionId] || 0) !== 1) return false;
    }

    return true;
  }

  undo() {
    if (this.moveHistory.length === 0) return false;

    const lastMove = this.moveHistory.pop();
    this.board[lastMove.row][lastMove.col] = lastMove.type === 'place' ? 0 : 1;
    return true;
  }

  reset() {
    this.board = Array(this.boardSize).fill(null).map(() => Array(this.boardSize).fill(0));
    this.moveHistory = [];
    this.startTime = Date.now();
    this.isWon = false;
  }

  getHint() {
    // Find first empty cell that could have a queen
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (this.board[i][j] === 0 && this.isValidPlacement(i, j)) {
          return { row: i, col: j };
        }
      }
    }
    return null;
  }

  getElapsedTime() {
    return Math.floor((Date.now() - this.startTime) / 1000);
  }
}

// ── 2. COLOR PALETTE FOR REGIONS ───────────────────────────

const REGION_COLORS = [
  '#FF6B6B', '#4ECDC4', '#45B7D1',
  '#FFA07A', '#98D8C8', '#F7DC6F',
  '#BB8FCE', '#85C1E2', '#F8B88B'
];

function getRegionColor(regionId) {
  return REGION_COLORS[regionId % REGION_COLORS.length];
}

// ── 3. HTML TEMPLATE ───────────────────────────────────────

function getQueensLogicPuzzleHTML() {
  return `
    <div class="project-content">
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem 0 1rem 0; width: 100%; border-bottom: 1px solid var(--border-color, #333); margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <h2 style="margin: 0; display: inline-block; font-size: 1.5rem;">👑 Queens Logic Puzzle</h2>
          <button 
            class="info-tip-btn" 
            id="queensInfoBtn" 
            style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--accent, #22c55e); padding: 0; line-height: 1; display: inline-flex; align-items: center; transition: transform 0.2s ease;"
            aria-label="How to play Queens Logic Puzzle"
            onmouseover="this.style.transform='scale(1.2)'"
            onmouseout="this.style.transform='scale(1)'"
          >
            ⓘ
          </button>
        </div>
      </div>

      <div class="queens-container">
        <!-- Stats Row -->
        <div class="queens-stats" aria-live="polite" aria-label="Game statistics">
          <div class="stat-box">
            <span class="stat-label">⏱️ Time</span>
            <span class="stat-value" id="queens-timer" aria-label="Elapsed time">0:00</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">🎯 Moves</span>
            <span class="stat-value" id="queens-moves" aria-label="Move counter">0</span>
          </div>
          <div class="stat-box">
            <span class="stat-label">👑 Queens</span>
            <span class="stat-value" id="queens-count" aria-label="Queens placed">0/6</span>
          </div>
        </div>

        <!-- Game Board with Irregular Colored Regions -->
        <div class="queens-board-wrapper">
          <div class="queens-board" id="queensBoard"></div>
        </div>

        <!-- Controls -->
        <div class="queens-controls">
          <button class="queens-btn queens-btn-secondary" id="queensHintBtn" title="Press H for hint">💡 Hint</button>
          <button class="queens-btn queens-btn-secondary" id="queensUndoBtn" title="Press U to undo">↶ Undo</button>
          <button class="queens-btn queens-btn-primary" id="queensResetBtn" title="Press R to reset">🔄 Restart</button>
        </div>

        <!-- Win Modal -->
        <div class="queens-modal" id="queensWinModal" role="dialog" aria-modal="true" aria-labelledby="queens-win-title">
          <div class="queens-modal-content">
            <h3 id="queens-win-title">🎉 Puzzle Solved!</h3>
            <p id="queens-win-message" role="alert">Great job!</p>
            <button class="queens-btn queens-btn-primary" id="queensPlayAgainBtn">Play Again</button>
          </div>
        </div>
      </div>

      <style>
        .queens-container {
          padding: 1.5rem;
          max-width: 700px;
          margin: 0 auto;
        }

        .queens-stats {
          display: flex;
          justify-content: space-around;
          gap: 1rem;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
        }

        .stat-box {
          background: var(--surface-color, #1e293b);
          border: 1px solid var(--border-color, #334155);
          padding: 1rem;
          border-radius: 12px;
          flex: 1;
          min-width: 100px;
          text-align: center;
          box-shadow: var(--shadow, 0 4px 6px -1px rgba(0,0,0,0.1));
        }

        .stat-label {
          display: block;
          font-size: 0.85rem;
          color: var(--text-secondary, #94a3b8);
          margin-bottom: 0.5rem;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--primary-color, #3b82f6);
        }

        .queens-board-wrapper {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: 0 auto 1.5rem;
          aspect-ratio: 1 / 1;
          background: rgba(20, 20, 35, 0.8);
          border: 3px solid rgba(159, 221, 181, 0.4);
          border-radius: 16px;
          padding: 12px;
          box-sizing: border-box;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(159, 221, 181, 0.1);
          backdrop-filter: blur(10px);
        }

        .queens-board {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          grid-template-rows: repeat(6, 1fr);
          gap: 3px;
          background: transparent;
        }

        .queens-cell {
          position: relative;
          aspect-ratio: 1 / 1;
          border-radius: 8px;
          cursor: pointer;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          user-select: none;
          overflow: hidden;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
        }

        /* Region Colors - Matching Reference Image */
        .queens-cell[data-region="0"] { background: linear-gradient(135deg, rgba(219, 112, 147, 0.4), rgba(199, 92, 127, 0.3)); border-color: rgba(219, 112, 147, 0.6); }
        .queens-cell[data-region="1"] { background: linear-gradient(135deg, rgba(70, 130, 180, 0.4), rgba(50, 110, 160, 0.3)); border-color: rgba(70, 130, 180, 0.6); }
        .queens-cell[data-region="2"] { background: linear-gradient(135deg, rgba(144, 238, 144, 0.4), rgba(124, 218, 124, 0.3)); border-color: rgba(144, 238, 144, 0.6); }
        .queens-cell[data-region="3"] { background: linear-gradient(135deg, rgba(255, 215, 0, 0.4), rgba(235, 195, 0, 0.3)); border-color: rgba(255, 215, 0, 0.6); }
        .queens-cell[data-region="4"] { background: linear-gradient(135deg, rgba(186, 85, 211, 0.4), rgba(166, 65, 191, 0.3)); border-color: rgba(186, 85, 211, 0.6); }
        .queens-cell[data-region="5"] { background: linear-gradient(135deg, rgba(135, 206, 250, 0.4), rgba(115, 186, 230, 0.3)); border-color: rgba(135, 206, 250, 0.6); }

        .queens-cell:hover {
          border-color: rgba(159, 221, 181, 0.8);
          box-shadow: inset 0 0 15px rgba(159, 221, 181, 0.3), 0 0 12px rgba(159, 221, 181, 0.4);
          transform: scale(1.02);
        }

        .queens-cell:focus {
          outline: none;
          border-color: rgba(159, 221, 181, 1) !important;
          box-shadow: inset 0 0 20px rgba(159, 221, 181, 0.5), 0 0 20px rgba(159, 221, 181, 0.6) !important;
          transform: scale(1.05);
        }

        .queens-cell:focus-visible {
          outline: 3px solid rgba(159, 221, 181, 0.9);
          outline-offset: 2px;
        }

        .queens-cell.has-queen {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.5), rgba(16, 185, 129, 0.3)) !important;
          border-color: rgba(34, 197, 94, 0.8) !important;
          box-shadow: inset 0 0 15px rgba(34, 197, 94, 0.4), 0 0 15px rgba(34, 197, 94, 0.5) !important;
        }

        .queens-cell.invalid-hint {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.5), rgba(220, 38, 38, 0.3)) !important;
          border-color: rgba(239, 68, 68, 0.8) !important;
          box-shadow: inset 0 0 15px rgba(239, 68, 68, 0.4) !important;
        }

        .queens-cell.hint {
          border-color: rgba(245, 158, 11, 0.8);
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.4), rgba(217, 119, 6, 0.3)) !important;
          animation: pulse-hint 1s ease-in-out infinite;
        }

        @keyframes pulse-hint {
          0%, 100% { box-shadow: inset 0 0 8px rgba(245, 158, 11, 0.3), 0 0 8px rgba(245, 158, 11, 0.3); }
          50% { box-shadow: inset 0 0 16px rgba(245, 158, 11, 0.6), 0 0 16px rgba(245, 158, 11, 0.6); }
        }

        .queens-controls {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }

        .queens-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 0.95rem;
        }

        .queens-btn-primary {
          background: linear-gradient(135deg, rgba(159, 221, 181, 0.8), rgba(127, 201, 161, 0.7));
          color: #0f0c0a;
          box-shadow: 0 4px 14px rgba(159, 221, 181, 0.4);
        }

        .queens-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(159, 221, 181, 0.5);
        }

        .queens-btn-secondary {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-color, #f8fafc);
          border: 1px solid rgba(159, 221, 181, 0.4);
          backdrop-filter: blur(10px);
        }

        .queens-btn-secondary:hover {
          background: rgba(159, 221, 181, 0.2);
          border-color: rgba(159, 221, 181, 0.7);
        }

        .queens-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .queens-modal {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 1000;
          align-items: center;
          justify-content: center;
        }

        .queens-modal.show {
          display: flex;
        }

        .queens-modal-content {
          background: rgba(20, 20, 35, 0.95);
          border: 2px solid rgba(159, 221, 181, 0.5);
          border-radius: 16px;
          padding: 2rem;
          text-align: center;
          max-width: 400px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
          animation: slide-up 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .queens-modal-content h3 {
          font-size: 1.8rem;
          margin: 0 0 0.5rem 0;
          color: rgba(159, 221, 181, 0.9);
        }

        .queens-modal-content p {
          color: var(--text-secondary, #d8c6b6);
          margin: 0 0 1.5rem 0;
        }

        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @media (max-width: 640px) {
          .queens-container {
            padding: 1rem;
          }

          .queens-board-wrapper {
            max-width: 90vw;
          }

          .queens-cell {
            font-size: 1.5rem;
          }

          .queens-btn {
            padding: 0.6rem 1rem;
            font-size: 0.85rem;
          }
        }
      </style>
    </div>
  `;
}

// ── 4. INITIALIZATION & EVENT HANDLERS ──────────────────────

let gameInstance = null;
let timerInterval = null;

function initQueensLogicPuzzle() {
  gameInstance = new QueensGame(6);

  renderBoard();
  setupEventListeners();
  startTimer();

  // Info button
  const infoBtn = document.getElementById('queensInfoBtn');
  if (infoBtn) {
    infoBtn.addEventListener('click', () => {
      showGameInstructions('queens-logic-puzzle');
    });
  }
}

function renderBoard() {
  const boardEl = document.getElementById('queensBoard');
  boardEl.innerHTML = '';
  boardEl.setAttribute('role', 'grid');
  boardEl.setAttribute('aria-label', 'Queens Logic Puzzle Game Board');

  for (let i = 0; i < gameInstance.boardSize; i++) {
    for (let j = 0; j < gameInstance.boardSize; j++) {
      const cell = document.createElement('div');
      cell.className = 'queens-cell';
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.dataset.region = gameInstance.regions[i][j];
      
      // Accessibility attributes
      cell.setAttribute('role', 'button');
      cell.setAttribute('tabindex', '0');
      cell.setAttribute('aria-label', `Cell row ${i + 1} column ${j + 1}`);

      const hasQueen = gameInstance.board[i][j] === 1;
      if (hasQueen) {
        cell.textContent = '👑';
        cell.classList.add('has-queen');
        cell.setAttribute('aria-label', `Queen at row ${i + 1} column ${j + 1}`);
      }

      // Click handler
      cell.addEventListener('click', () => handleCellClick(i, j, cell));
      
      // Keyboard handlers
      cell.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCellClick(i, j, cell);
        }
      });

      boardEl.appendChild(cell);
    }
  }

  updateStats();
}

function handleCellClick(row, col, cellEl) {
  if (gameInstance.isWon) return;

  if (gameInstance.board[row][col] === 1) {
    // Remove queen
    gameInstance.removeQueen(row, col);
  } else {
    // Try to place queen
    const result = gameInstance.placeQueen(row, col);
    if (!result.valid) {
      showInvalidPlacementFeedback(cellEl);
      return;
    }
  }

  renderBoard();
  updateStats();

  if (gameInstance.checkWinCondition()) {
    gameInstance.isWon = true;
    showWinModal();
  }
}

function showInvalidPlacementFeedback(cellEl) {
  cellEl.classList.add('invalid-hint');
  setTimeout(() => {
    cellEl.classList.remove('invalid-hint');
  }, 600);
}

function setupEventListeners() {
  const hintBtn = document.getElementById('queensHintBtn');
  const undoBtn = document.getElementById('queensUndoBtn');
  const resetBtn = document.getElementById('queensResetBtn');
  const playAgainBtn = document.getElementById('queensPlayAgainBtn');

  hintBtn.setAttribute('aria-label', 'Get a hint for the next valid move');
  undoBtn.setAttribute('aria-label', 'Undo the last move');
  resetBtn.setAttribute('aria-label', 'Reset the game board');
  playAgainBtn.setAttribute('aria-label', 'Play another game');

  hintBtn.addEventListener('click', showHint);
  undoBtn.addEventListener('click', undoMove);
  resetBtn.addEventListener('click', resetGame);
  playAgainBtn.addEventListener('click', resetGame);

  // Global keyboard navigation
  document.addEventListener('keydown', handleGlobalKeyboard);
}

function handleGlobalKeyboard(e) {
  // Skip if a button is focused (don't interfere with button navigation)
  if (document.activeElement.tagName === 'BUTTON') return;

  const activeCell = document.activeElement;
  
  // Only handle arrow keys on cells
  if (activeCell.classList && !activeCell.classList.contains('queens-cell')) return;

  let row = parseInt(activeCell.dataset.row) || 0;
  let col = parseInt(activeCell.dataset.col) || 0;

  switch(e.key) {
    case 'ArrowUp':
      e.preventDefault();
      row = Math.max(0, row - 1);
      break;
    case 'ArrowDown':
      e.preventDefault();
      row = Math.min(5, row + 1);
      break;
    case 'ArrowLeft':
      e.preventDefault();
      col = Math.max(0, col - 1);
      break;
    case 'ArrowRight':
      e.preventDefault();
      col = Math.min(5, col + 1);
      break;
    case 'h':
    case 'H':
      // H for Hint
      showHint();
      return;
    case 'u':
    case 'U':
      // U for Undo
      undoMove();
      return;
    case 'r':
    case 'R':
      // R for Reset
      resetGame();
      return;
    default:
      return;
  }

  // Focus the new cell
  const newCell = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
  if (newCell) {
    newCell.focus();
  }
}

function showHint() {
  const hint = gameInstance.getHint();
  if (!hint) {
    alert('No valid moves available or puzzle is solved!');
    return;
  }

  const cellEl = document.querySelector(`[data-row="${hint.row}"][data-col="${hint.col}"]`);
  if (cellEl) {
    cellEl.classList.add('hint');
    setTimeout(() => {
      cellEl.classList.remove('hint');
    }, 2000);
  }
}

function undoMove() {
  if (gameInstance.undo()) {
    renderBoard();
    updateStats();
  }
}

function resetGame() {
  gameInstance.reset();
  gameInstance.isWon = false;

  const modal = document.getElementById('queensWinModal');
  if (modal) {
    modal.classList.remove('show');
  }

  renderBoard();
  updateStats();
}

function updateStats() {
  const moveCount = gameInstance.moveHistory.length;
  let queensCount = 0;

  for (let i = 0; i < gameInstance.boardSize; i++) {
    queensCount += gameInstance.board[i].filter(c => c === 1).length;
  }

  document.getElementById('queens-moves').textContent = moveCount;
  document.getElementById('queens-count').textContent = `${queensCount}/${gameInstance.boardSize}`;
}

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    const elapsed = gameInstance.getElapsedTime();
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('queens-timer').textContent = 
      `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function showWinModal() {
  const modal = document.getElementById('queensWinModal');
  const elapsed = gameInstance.getElapsedTime();
  const minutes = Math.floor(elapsed / 60);
  const seconds = elapsed % 60;

  const message = `You solved it in ${minutes}m ${seconds}s with ${gameInstance.moveHistory.length} moves!`;
  document.getElementById('queens-win-message').textContent = message;

  modal.classList.add('show');
}

function showGameInstructions(projectName) {
  // Trigger instructions display through projects.js
  if (typeof getProjectInstructions === 'function') {
    const instructions = getProjectInstructions(projectName);
    console.log('Instructions:', instructions);
  }
}
