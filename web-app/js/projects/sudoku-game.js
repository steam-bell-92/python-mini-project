// ============================================
// SUDOKU GAME & VISUAL BACKTRACKING SOLVER
// ============================================

function getSudokuGameHTML() {
    return `
        <div class="project-content">
            <div class="sudoku-shell">
                <div class="sudoku-shell-header">
                    <div class="terminal-dots">
                        <span class="terminal-dot red"></span>
                        <span class="terminal-dot yellow"></span>
                        <span class="terminal-dot green"></span>
                    </div>
                    <span class="terminal-title">~/games/sudoku</span>
                </div>
                <div class="sudoku-shell-body">
                    <h2>🧩 Interactive Sudoku Terminal</h2>
                    <p class="sudoku-subtitle">Choose a difficulty, fill the grid, and watch the recursive solver trace each step in real time.</p>
            
            <div class="sudoku-container">
                <!-- Difficulty Screen -->
                <div id="sudokuDifficultyScreen">
                    <p class="sudoku-intro">Choose your difficulty!</p>
                    <div class="difficulty-cards">
                        <button class="difficulty-card easy" data-difficulty="easy">
                            <span class="diff-icon">🟢</span>
                            <span class="diff-name">Easy</span>
                            <span class="diff-desc">35 clues · Great for beginners</span>
                        </button>
                        <button class="difficulty-card medium" data-difficulty="medium">
                            <span class="diff-icon">🟡</span>
                            <span class="diff-name">Medium</span>
                            <span class="diff-desc">28 clues · A balanced challenge</span>
                        </button>
                        <button class="difficulty-card hard" data-difficulty="hard">
                            <span class="diff-icon">🔴</span>
                            <span class="diff-name">Hard</span>
                            <span class="diff-desc">20 clues · For Sudoku masters</span>
                        </button>
                    </div>
                </div>

                <!-- Game Screen -->
                <div id="sudokuGameScreen" style="display:none;">
                    <div class="sudoku-layout">
                        <!-- Controls Sidebar -->
                        <div class="sudoku-sidebar">
                            <div class="sudoku-section">
                                <h3>Difficulty</h3>
                                <div class="sudoku-active-diff-row">
                                    <span id="sudokuActiveDiffLabel" class="sudoku-stat-val">—</span>
                                    <button id="sudokuChangeDiffBtn" class="sudoku-btn" style="padding: 6px 12px; font-size: 0.8rem;">Change ⚙️</button>
                                </div>
                            </div>
                            
                            <div class="sudoku-section">
                                <h3>Game Controls</h3>
                                <div class="sudoku-btn-grid">
                                    <button id="sudokuNewBtn" class="sudoku-btn sudoku-btn-primary">New Game 🎮</button>
                                    <button id="sudokuResetBtn" class="sudoku-btn">Reset Board ↺</button>
                                    <button id="sudokuHintBtn" class="sudoku-btn">Get Hint 💡</button>
                                </div>
                            </div>
                            
                            <div class="sudoku-section">
                                <h3>Backtracking Solver 🤖</h3>
                                <div class="sudoku-btn-grid">
                                    <button id="sudokuAnimateSolveBtn" class="sudoku-btn sudoku-btn-success">Animate Solve 🎥</button>
                                    <button id="sudokuInstantSolveBtn" class="sudoku-btn">Instant Solve ⚡</button>
                                    <button id="sudokuClearSolveBtn" class="sudoku-btn sudoku-btn-danger hidden">Stop Solver 🛑</button>
                                </div>
                                
                                <div class="sudoku-speed-control">
                                    <label for="sudokuSpeedSlider">Solve Delay: <span id="sudokuSpeedVal">25ms</span></label>
                                    <input type="range" id="sudokuSpeedSlider" min="1" max="200" step="5" value="25">
                                </div>
                            </div>

                            <div class="sudoku-section sudoku-stats-box">
                                <h3>Solver Statistics</h3>
                                <div class="sudoku-stat-row">
                                    <span>Operations / Steps:</span>
                                    <span id="sudokuStepsCount" class="sudoku-stat-val">0</span>
                                </div>
                                <div class="sudoku-stat-row">
                                    <span>Time Elapsed:</span>
                                    <span id="sudokuTimeElapsed" class="sudoku-stat-val">0.00s</span>
                                </div>
                            </div>
                        </div>

                        <!-- Board Game Area -->
                        <div class="sudoku-board-area">
                            <div class="sudoku-grid-container" id="sudokuGrid">
                                <!-- 9x9 grid cells will be injected dynamically -->
                            </div>
                            <div id="sudokuStatusMessage" class="sudoku-status-message">Fill the grid and verify!</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <style>
            .sudoku-shell {
                border: 1px solid var(--border);
                border-radius: 20px;
                overflow: hidden;
                background: linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(15, 23, 42, 0.88));
                box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
                font-family: var(--font-mono, "Fira Code", monospace);
            }
            .sudoku-shell-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.8rem 1rem;
                background: rgba(255, 255, 255, 0.04);
                border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            }
            .terminal-dots {
                display: flex;
                gap: 0.4rem;
            }
            .terminal-dot {
                width: 10px;
                height: 10px;
                border-radius: 999px;
                display: inline-block;
            }
            .terminal-dot.red { background: #ff5f56; }
            .terminal-dot.yellow { background: #ffbd2e; }
            .terminal-dot.green { background: #27c93f; }
            .terminal-title {
                font-size: 0.9rem;
                color: #9db2c7;
                letter-spacing: 0.05em;
            }
            .sudoku-shell-body {
                padding: 1rem 1rem 1.5rem;
            }
            .sudoku-subtitle {
                color: var(--text-secondary);
                text-align: center;
                margin-bottom: 2rem;
                font-size: 1.05rem;
                max-width: 600px;
                margin-inline: auto;
            }
            .sudoku-layout {
                display: flex;
                gap: 30px;
                align-items: flex-start;
                justify-content: center;
                flex-wrap: wrap;
                width: 100%;
                max-width: 900px;
                margin: 0 auto;
                font-family: var(--font-sans);
            }
            .sudoku-sidebar {
                flex: 1;
                min-width: 280px;
                max-width: 320px;
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
            .sudoku-section {
                background: var(--surface);
                border: 1px solid var(--border);
                border-radius: 16px;
                padding: 18px;
                box-shadow: var(--shadow-sm);
            }
            .sudoku-section h3 {
                font-size: 0.95rem;
                font-family: var(--font-mono);
                color: var(--text-secondary);
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin-bottom: 12px;
                border-bottom: 1px solid var(--border);
                padding-bottom: 6px;
            }
            .sudoku-container {
                padding: 0.5rem 0 0;
                max-width: 900px;
                margin: 0 auto;
                text-align: center;
            }
            .sudoku-intro {
                font-size: 1.15rem;
                margin-bottom: 1.5rem;
                color: #dce7f5;
                text-transform: uppercase;
                letter-spacing: 0.08em;
            }
            .difficulty-cards {
                display: flex;
                gap: 1.25rem;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 2rem;
            }
            .difficulty-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.4rem;
                width: 180px;
                padding: 1.25rem 0.9rem;
                border-radius: 14px;
                border: 1px solid rgba(255, 255, 255, 0.08);
                background: rgba(255, 255, 255, 0.03);
                cursor: pointer;
                transition: all var(--duration-fast) ease;
                color: var(--text);
                font-family: inherit;
            }
            .difficulty-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 24px rgba(99, 102, 241, 0.25);
            }
            .difficulty-card.easy:hover   { border-color: #22c55e; }
            .difficulty-card.medium:hover { border-color: #eab308; }
            .difficulty-card.hard:hover   { border-color: #ef4444; }
            .diff-icon { font-size: 2.2rem; }
            .diff-name { font-size: 1.2rem; font-weight: bold; }
            .diff-desc { font-size: 0.82rem; color: var(--text-secondary); }
            
            .sudoku-active-diff-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .sudoku-btn-grid {
                display: grid;
                grid-template-columns: 1fr;
                gap: 10px;
            }
            .sudoku-sidebar .sudoku-btn-grid {
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            }
            .sudoku-btn {
                padding: 10px 14px;
                border-radius: 10px;
                font-size: 0.9rem;
                font-weight: 600;
                border: 1px solid rgba(255, 255, 255, 0.09);
                background: rgba(255, 255, 255, 0.04);
                color: var(--text);
                transition: all var(--duration-fast) ease;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 6px;
                font-family: var(--font-mono, "Fira Code", monospace);
            }
            .sudoku-btn:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow-md);
                background: var(--surface-hover);
            }
            .sudoku-btn:active {
                transform: translateY(0);
            }
            .sudoku-btn-primary {
                background: linear-gradient(135deg, var(--accent) 0%, #10b981 100%);
                color: white;
                border: none;
            }
            .sudoku-btn-primary:hover {
                background: linear-gradient(135deg, #10b981 0%, var(--accent) 100%);
            }
            .sudoku-btn-success {
                background: rgba(16, 185, 129, 0.15);
                color: #10b981;
                border-color: rgba(16, 185, 129, 0.3);
            }
            .sudoku-btn-success:hover {
                background: #10b981;
                color: white;
            }
            .sudoku-btn-danger {
                background: rgba(239, 68, 68, 0.15);
                color: #ef4444;
                border-color: rgba(239, 68, 68, 0.3);
            }
            .sudoku-btn-danger:hover {
                background: #ef4444;
                color: white;
            }
            .sudoku-speed-control {
                margin-top: 15px;
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            .sudoku-speed-control label {
                font-size: 0.85rem;
                color: var(--text-secondary);
                display: flex;
                justify-content: space-between;
            }
            .sudoku-speed-control input[type="range"] {
                width: 100%;
                accent-color: var(--accent);
                cursor: pointer;
            }
            .sudoku-stats-box {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .sudoku-stat-row {
                display: flex;
                justify-content: space-between;
                font-size: 0.85rem;
                color: var(--text-secondary);
            }
            .sudoku-stat-val {
                font-family: var(--font-mono);
                font-weight: 700;
                color: var(--text);
            }
            
            /* Game Board */
            .sudoku-board-area {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 20px;
                flex: 1;
                min-width: 320px;
                max-width: 480px;
            }
            .sudoku-grid-container {
                display: grid;
                grid-template-columns: repeat(9, 1fr);
                grid-template-rows: repeat(9, 1fr);
                aspect-ratio: 1;
                width: 100%;
                background: var(--surface);
                border: 3px solid var(--text);
                border-radius: 14px;
                overflow: hidden;
                box-shadow: var(--shadow-lg);
            }
            .sudoku-cell-container {
                position: relative;
                width: 100%;
                height: 100%;
                border-right: 1px solid var(--border);
                border-bottom: 1px solid var(--border);
                background: transparent;
                transition: background 0.15s ease;
            }
            .sudoku-cell-container[data-col="2"], .sudoku-cell-container[data-col="5"] {
                border-right: 3px solid var(--text);
            }
            .sudoku-cell-container[data-row="2"], .sudoku-cell-container[data-row="5"] {
                border-bottom: 3px solid var(--text);
            }
            .sudoku-cell {
                width: 100%;
                height: 100%;
                border: none;
                background: transparent;
                text-align: center;
                font-size: clamp(1rem, 4vw, 1.4rem);
                font-weight: 500;
                color: var(--text);
                font-family: var(--font-sans);
                outline: none;
                transition: all 0.2s ease;
                padding: 0;
            }
            /* Chrome, Safari, Edge, Opera: Remove spin buttons */
            .sudoku-cell::-webkit-outer-spin-button,
            .sudoku-cell::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }
            /* Firefox */
            .sudoku-cell[type=number] {
                -moz-appearance: textfield;
            }
            
            /* Cell Types & States */
            .sudoku-cell.clue-cell {
                font-weight: 800;
                color: #60a5fa;
                background: rgba(96, 165, 250, 0.05);
                pointer-events: none; /* Make clues unclickable */
            }
            .sudoku-cell.user-cell {
                color: var(--accent);
            }
            
            /* Highlighting & Animation */
            .sudoku-cell-container.hover-highlight {
                background: rgba(255, 255, 255, 0.03);
            }
            .sudoku-cell-container.hover-center {
                background: rgba(34, 197, 94, 0.12) !important;
            }
            .sudoku-cell.solving {
                background: rgba(245, 158, 11, 0.25) !important;
                color: #f59e0b !important;
                font-weight: 800;
                transform: scale(1.05);
                box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
            }
            .sudoku-cell.backtracking {
                background: rgba(239, 68, 68, 0.25) !important;
                color: #ef4444 !important;
                font-weight: 800;
                transform: scale(0.95);
            }
            .sudoku-cell.error-cell {
                background: rgba(239, 68, 68, 0.15) !important;
                color: #ef4444 !important;
                font-weight: 700;
                animation: sudokuShake 0.3s ease;
            }
            
            @keyframes sudokuShake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-4px); }
                75% { transform: translateX(4px); }
            }

            .sudoku-status-message {
                font-size: 0.95rem;
                font-weight: 600;
                color: #9db2c7;
                text-align: center;
                background: rgba(255, 255, 255, 0.03);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 12px;
                padding: 10px 20px;
                width: 100%;
                transition: all 0.3s ease;
                font-family: var(--font-mono, "Fira Code", monospace);
            }
            .sudoku-status-message.success {
                color: #10b981;
                border-color: rgba(16, 185, 129, 0.3);
                background: rgba(16, 185, 129, 0.05);
            }
            .sudoku-status-message.error {
                color: #ef4444;
                border-color: rgba(239, 68, 68, 0.3);
                background: rgba(239, 68, 68, 0.05);
            }
            .hidden {
                display: none !important;
            }
        </style>
    `;
}

// Game State variables
let sudokuPuzzle = [];
let sudokuSolution = [];
let sudokuCurrent = [];
let isSolvingActive = false;
let stopSolvingFlag = false;
let sudokuSolveSpeed = 25;
let sudokuStepsCount = 0;
let sudokuTimerInterval = null;
let sudokuStartTime = null;

function generateSudokuBoard(difficulty) {
    // 1. Create empty 9x9 board
    const board = Array(9).fill(null).map(() => Array(9).fill(0));
    
    // 2. Generate a fully solved board
    fillSudokuRandom(board);
    sudokuSolution = board.map(row => [...row]);
    
    // 3. Remove cells based on difficulty
    // Easy: 35 clues (remove 46)
    // Medium: 28 clues (remove 53)
    // Hard: 20 clues (remove 61)
    let cellsToRemove = 46;
    if (difficulty === 'medium') cellsToRemove = 53;
    else if (difficulty === 'hard') cellsToRemove = 61;
    
    const puzzle = board.map(row => [...row]);
    const cells = [];
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            cells.push({r, c});
        }
    }
    
    // Shuffle cells
    for (let i = cells.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cells[i], cells[j]] = [cells[j], cells[i]];
    }
    
    for (let i = 0; i < cellsToRemove; i++) {
        const {r, c} = cells[i];
        puzzle[r][c] = 0;
    }
    
    sudokuPuzzle = puzzle.map(row => [...row]);
    sudokuCurrent = puzzle.map(row => [...row]);
}

function fillSudokuRandom(board) {
    const empty = findSudokuEmpty(board);
    if (!empty) return true;
    const [r, c] = empty;
    
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // Shuffle digits
    for (let i = digits.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [digits[i], digits[j]] = [digits[j], digits[i]];
    }
    
    for (let val of digits) {
        if (isSudokuValid(board, r, c, val)) {
            board[r][c] = val;
            if (fillSudokuRandom(board)) return true;
            board[r][c] = 0;
        }
    }
    return false;
}

function findSudokuEmpty(board) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === 0) return [r, c];
        }
    }
    return null;
}

function isSudokuValid(board, r, c, val) {
    // Check row
    for (let col = 0; col < 9; col++) {
        if (board[r][col] === val && col !== c) return false;
    }
    // Check col
    for (let row = 0; row < 9; row++) {
        if (board[row][c] === val && row !== r) return false;
    }
    // Check 3x3 box
    const startRow = 3 * Math.floor(r / 3);
    const startCol = 3 * Math.floor(c / 3);
    for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
            if (board[row][col] === val && (row !== r || col !== c)) return false;
        }
    }
    return true;
}

function renderSudokuBoard() {
    const gridContainer = document.getElementById('sudokuGrid');
    if (!gridContainer) return;
    
    gridContainer.innerHTML = '';
    
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const val = sudokuCurrent[r][c];
            const isClue = sudokuPuzzle[r][c] !== 0;
            
            const cellContainer = document.createElement('div');
            cellContainer.className = 'sudoku-cell-container';
            cellContainer.setAttribute('data-row', r);
            cellContainer.setAttribute('data-col', c);
            
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.inputMode = 'numeric';
            cell.pattern = '[1-9]';
            cell.maxLength = 1;
            cell.className = 'sudoku-cell';
            cell.id = `sudoku-cell-${r}-${c}`;
            cell.setAttribute('data-row', r);
            cell.setAttribute('data-col', c);
            
            if (isClue) {
                cell.value = val;
                cell.className += ' clue-cell';
                cell.readOnly = true;
            } else {
                cell.className += ' user-cell';
                cell.value = val === 0 ? '' : val;
                
                // Set up event listeners for input validation
                cell.addEventListener('input', (e) => handleSudokuInput(e, r, c));
                cell.addEventListener('keydown', (e) => handleSudokuNavigation(e, r, c));
            }
            
            // Set up hover highlighting listeners on the container
            cellContainer.addEventListener('mouseenter', () => highlightSudokuGroup(r, c));
            cellContainer.addEventListener('mouseleave', clearSudokuHighlight);
            
            cellContainer.appendChild(cell);
            gridContainer.appendChild(cellContainer);
        }
    }
    
    clearSudokuConflicts();
    updateSudokuStatus('Fill the empty cells and solve the puzzle!', 'info');
}

function handleSudokuInput(e, r, c) {
    const cell = e.target;
    let val = cell.value.replace(/[^1-9]/g, ''); // Allow only 1-9
    cell.value = val;
    
    const intVal = val === '' ? 0 : parseInt(val, 10);
    sudokuCurrent[r][c] = intVal;
    
    clearSudokuConflicts();
    
    if (intVal !== 0) {
        // Validate placements in real-time
        if (!isSudokuValid(sudokuCurrent, r, c, intVal)) {
            cell.classList.add('error-cell');
            updateSudokuStatus(`Conflict placing ${intVal} at Row ${r+1}, Col ${c+1}!`, 'error');
            
            // Find what conflicts and mark them
            markConflicts(r, c, intVal);
        } else {
            // Check if solved successfully
            if (findSudokuEmpty(sudokuCurrent) === null) {
                let solvedSuccessfully = true;
                for (let row = 0; row < 9; row++) {
                    for (let col = 0; col < 9; col++) {
                        if (!isSudokuValid(sudokuCurrent, row, col, sudokuCurrent[row][col])) {
                            solvedSuccessfully = false;
                            break;
                        }
                    }
                }
                if (solvedSuccessfully) {
                    updateSudokuStatus('🎉 Congratulations! You solved the Sudoku! 🏆', 'success');
                } else {
                    updateSudokuStatus('Board is full but contains errors.', 'error');
                }
            } else {
                updateSudokuStatus('Number placed! Keep going.', 'info');
            }
        }
    } else {
        updateSudokuStatus('Cell cleared.', 'info');
    }
}

function markConflicts(r, c, val) {
    // Row conflict
    for (let col = 0; col < 9; col++) {
        if (sudokuCurrent[r][col] === val && col !== c) {
            document.getElementById(`sudoku-cell-${r}-${col}`)?.classList.add('error-cell');
        }
    }
    // Column conflict
    for (let row = 0; row < 9; row++) {
        if (sudokuCurrent[row][c] === val && row !== r) {
            document.getElementById(`sudoku-cell-${row}-${c}`)?.classList.add('error-cell');
        }
    }
    // 3x3 block conflict
    const startRow = 3 * Math.floor(r / 3);
    const startCol = 3 * Math.floor(c / 3);
    for (let row = startRow; row < startRow + 3; row++) {
        for (let col = startCol; col < startCol + 3; col++) {
            if (sudokuCurrent[row][col] === val && (row !== r || col !== c)) {
                document.getElementById(`sudoku-cell-${row}-${col}`)?.classList.add('error-cell');
            }
        }
    }
}

function clearSudokuConflicts() {
    document.querySelectorAll('.sudoku-cell').forEach(cell => {
        cell.classList.remove('error-cell');
    });
}

function handleSudokuNavigation(e, r, c) {
    let targetRow = r;
    let targetCol = c;
    
    switch (e.key) {
        case 'ArrowUp': targetRow = Math.max(0, r - 1); break;
        case 'ArrowDown': targetRow = Math.min(8, r + 1); break;
        case 'ArrowLeft': targetCol = Math.max(0, c - 1); break;
        case 'ArrowRight': targetCol = Math.min(8, c + 1); break;
        case 'Backspace':
            if (e.target.value === '') {
                // Navigate left on backspace if cell is empty
                targetCol = Math.max(0, c - 1);
            }
            break;
        default: return;
    }
    
    const targetCell = document.getElementById(`sudoku-cell-${targetRow}-${targetCol}`);
    if (targetCell) {
        targetCell.focus();
        // Place cursor at the end
        setTimeout(() => {
            targetCell.setSelectionRange(targetCell.value.length, targetCell.value.length);
        }, 0);
    }
}

function highlightSudokuGroup(row, col) {
    const containers = document.querySelectorAll('.sudoku-cell-container');
    const boxStartRow = 3 * Math.floor(row / 3);
    const boxStartCol = 3 * Math.floor(col / 3);
    
    containers.forEach(container => {
        const r = parseInt(container.getAttribute('data-row'), 10);
        const c = parseInt(container.getAttribute('data-col'), 10);
        
        container.classList.remove('hover-highlight', 'hover-center');
        
        if (r === row && c === col) {
            container.classList.add('hover-center');
        } else if (r === row || c === col || (r >= boxStartRow && r < boxStartRow + 3 && c >= boxStartCol && c < boxStartCol + 3)) {
            container.classList.add('hover-highlight');
        }
    });
}

function clearSudokuHighlight() {
    const containers = document.querySelectorAll('.sudoku-cell-container');
    containers.forEach(container => {
        container.classList.remove('hover-highlight', 'hover-center');
    });
}

function updateSudokuStatus(msg, type) {
    const statusEl = document.getElementById('sudokuStatusMessage');
    if (!statusEl) return;
    
    statusEl.textContent = msg;
    statusEl.className = 'sudoku-status-message';
    
    if (type === 'success') statusEl.classList.add('success');
    if (type === 'error') statusEl.classList.add('error');
}

// Visual Solver helpers
const sudokuSleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function startVisualSudokuSolve() {
    if (isSolvingActive) return;
    
    // Disable inputs & controls
    setSudokuControlsEnabled(false);
    clearSudokuConflicts();
    
    isSolvingActive = true;
    stopSolvingFlag = false;
    sudokuStepsCount = 0;
    
    document.getElementById('sudokuClearSolveBtn').classList.remove('hidden');
    document.getElementById('sudokuAnimateSolveBtn').classList.add('hidden');
    document.getElementById('sudokuStepsCount').textContent = '0';
    
    // Start Timer
    sudokuStartTime = performance.now();
    sudokuTimerInterval = setInterval(() => {
        const elapsed = (performance.now() - sudokuStartTime) / 1000;
        document.getElementById('sudokuTimeElapsed').textContent = elapsed.toFixed(2) + 's';
    }, 50);
    
    // Load board state (start from the original puzzle board)
    sudokuCurrent = sudokuPuzzle.map(row => [...row]);
    renderSudokuBoard(); // Refresh DOM
    
    updateSudokuStatus('Solving puzzle using Backtracking Algorithm...', 'info');
    
    const solved = await solveSudokuVisualAsync();
    
    // Stop Timer
    clearInterval(sudokuTimerInterval);
    const totalTime = ((performance.now() - sudokuStartTime) / 1000).toFixed(3);
    document.getElementById('sudokuTimeElapsed').textContent = totalTime + 's';
    
    isSolvingActive = false;
    document.getElementById('sudokuClearSolveBtn').classList.add('hidden');
    document.getElementById('sudokuAnimateSolveBtn').classList.remove('hidden');
    setSudokuControlsEnabled(true);
    
    if (solved) {
        updateSudokuStatus(`✅ Board Solved in ${sudokuStepsCount} operations! Time: ${totalTime}s`, 'success');
    } else if (stopSolvingFlag) {
        updateSudokuStatus('Solver stopped by user.', 'error');
        // Restore board to puzzle state
        sudokuCurrent = sudokuPuzzle.map(row => [...row]);
        renderSudokuBoard();
    } else {
        updateSudokuStatus('❌ Unsolvable board configuration!', 'error');
    }
}

async function solveSudokuVisualAsync() {
    if (stopSolvingFlag) return false;
    
    const empty = findSudokuEmpty(sudokuCurrent);
    if (!empty) return true;
    const [r, c] = empty;
    
    const cellEl = document.getElementById(`sudoku-cell-${r}-${c}`);
    
    for (let val = 1; val <= 9; val++) {
        if (stopSolvingFlag) return false;
        
        sudokuStepsCount++;
        document.getElementById('sudokuStepsCount').textContent = sudokuStepsCount;
        
        if (isSudokuValid(sudokuCurrent, r, c, val)) {
            sudokuCurrent[r][c] = val;
            
            if (cellEl) {
                cellEl.value = val;
                cellEl.className = 'sudoku-cell user-cell solving';
            }
            
            await sudokuSleep(sudokuSolveSpeed);
            
            if (await solveSudokuVisualAsync()) {
                if (cellEl) cellEl.className = 'sudoku-cell user-cell';
                return true;
            }
            
            sudokuCurrent[r][c] = 0;
            if (cellEl) {
                cellEl.value = '';
                cellEl.className = 'sudoku-cell user-cell backtracking';
            }
            await sudokuSleep(sudokuSolveSpeed);
        }
    }
    
    if (cellEl) cellEl.className = 'sudoku-cell user-cell';
    return false;
}

function stopVisualSudokuSolve() {
    stopSolvingFlag = true;
}

function solveSudokuInstant() {
    if (isSolvingActive) return;
    
    clearSudokuConflicts();
    
    // Copy the original puzzle
    const board = sudokuPuzzle.map(row => [...row]);
    
    const startTime = performance.now();
    sudokuStepsCount = 0;
    
    const stats = { steps: 0 };
    const solved = solveSudokuInstantBacktracking(board, stats);
    const endTime = performance.now();
    
    if (solved) {
        sudokuCurrent = board;
        renderSudokuBoard();
        
        const timeTaken = ((endTime - startTime) / 1000).toFixed(4);
        document.getElementById('sudokuStepsCount').textContent = stats.steps;
        document.getElementById('sudokuTimeElapsed').textContent = timeTaken + 's';
        updateSudokuStatus(`⚡ Solved instantly in ${stats.steps} operations! Time: ${timeTaken}s`, 'success');
    } else {
        updateSudokuStatus('❌ Unsolvable board configuration!', 'error');
    }
}

function solveSudokuInstantBacktracking(board, stats) {
    stats.steps++;
    const empty = findSudokuEmpty(board);
    if (!empty) return true;
    const [r, c] = empty;
    
    for (let val = 1; val <= 9; val++) {
        if (isSudokuValid(board, r, c, val)) {
            board[r][c] = val;
            if (solveSudokuInstantBacktracking(board, stats)) return true;
            board[r][c] = 0;
        }
    }
    return false;
}

function setSudokuControlsEnabled(enabled) {
    const changeDiff = document.getElementById('sudokuChangeDiffBtn');
    if (changeDiff) changeDiff.disabled = !enabled;
    document.getElementById('sudokuNewBtn').disabled = !enabled;
    document.getElementById('sudokuResetBtn').disabled = !enabled;
    document.getElementById('sudokuHintBtn').disabled = !enabled;
    document.getElementById('sudokuInstantSolveBtn').disabled = !enabled;
}

function getSudokuHint() {
    if (isSolvingActive) return;
    
    const emptyCells = [];
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (sudokuCurrent[r][c] === 0) {
                emptyCells.push({r, c});
            }
        }
    }
    
    if (emptyCells.length === 0) {
        updateSudokuStatus('Board is already complete!', 'success');
        return;
    }
    
    // Pick a random empty cell
    const {r, c} = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const correctVal = sudokuSolution[r][c];
    
    sudokuCurrent[r][c] = correctVal;
    
    const cellEl = document.getElementById(`sudoku-cell-${r}-${c}`);
    if (cellEl) {
        cellEl.value = correctVal;
        cellEl.className = 'sudoku-cell user-cell solving';
        // Remove solving class after 1 second
        setTimeout(() => {
            cellEl.classList.remove('solving');
        }, 1000);
    }
    
    updateSudokuStatus(`💡 Hint: Placed ${correctVal} at Row ${r+1}, Col ${c+1}`, 'success');
    
    // Check if board complete
    if (findSudokuEmpty(sudokuCurrent) === null) {
        updateSudokuStatus('🎉 Puzzle completed! Great job! 🏆', 'success');
    }
}

function initSudokuGame() {
    console.log('🧩 Initializing Sudoku Game UI...');
    
    let currentDifficulty = 'medium';
    
    const difficultyScreen = document.getElementById('sudokuDifficultyScreen');
    const gameScreen = document.getElementById('sudokuGameScreen');
    const activeDiffLabel = document.getElementById('sudokuActiveDiffLabel');
    
    // Ensure correct screen visible at start
    if (difficultyScreen) difficultyScreen.style.display = '';
    if (gameScreen) gameScreen.style.display = 'none';
    
    // Reset stats UI
    const stepsCount = document.getElementById('sudokuStepsCount');
    const timeElapsed = document.getElementById('sudokuTimeElapsed');
    if (stepsCount) stepsCount.textContent = '0';
    if (timeElapsed) timeElapsed.textContent = '0.00s';
    
    // 1. Set up difficulty selection screen cards
    const diffCards = document.querySelectorAll('#sudokuDifficultyScreen .difficulty-card');
    diffCards.forEach(card => {
        // Clone to remove old listeners if re-initialized
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        newCard.addEventListener('click', () => {
            currentDifficulty = newCard.getAttribute('data-difficulty');
            if (difficultyScreen) difficultyScreen.style.display = 'none';
            if (gameScreen) gameScreen.style.display = '';
            
            // Set active difficulty label
            if (activeDiffLabel) {
                const diffLabels = {
                    easy: '🟢 Easy',
                    medium: '🟡 Medium',
                    hard: '🔴 Hard'
                };
                activeDiffLabel.textContent = diffLabels[currentDifficulty] || currentDifficulty;
            }
            
            generateSudokuBoard(currentDifficulty);
            renderSudokuBoard();
            
            // Reset stats UI
            if (stepsCount) stepsCount.textContent = '0';
            if (timeElapsed) timeElapsed.textContent = '0.00s';
        });
    });
    
    // 2. Set up "Change Difficulty" button
    const changeDiffBtn = document.getElementById('sudokuChangeDiffBtn');
    if (changeDiffBtn) {
        const changeDiffBtnCloned = changeDiffBtn.cloneNode(true);
        changeDiffBtn.parentNode.replaceChild(changeDiffBtnCloned, changeDiffBtn);
        changeDiffBtnCloned.addEventListener('click', () => {
            if (isSolvingActive) return;
            if (gameScreen) gameScreen.style.display = 'none';
            if (difficultyScreen) difficultyScreen.style.display = '';
            // Stop solver if running
            stopVisualSudokuSolve();
        });
    }
    
    // 3. New Game button
    const newBtn = document.getElementById('sudokuNewBtn');
    if (newBtn) {
        const newBtnCloned = newBtn.cloneNode(true);
        newBtn.parentNode.replaceChild(newBtnCloned, newBtn);
        newBtnCloned.addEventListener('click', () => {
            if (isSolvingActive) return;
            generateSudokuBoard(currentDifficulty);
            renderSudokuBoard();
            document.getElementById('sudokuStepsCount').textContent = '0';
            document.getElementById('sudokuTimeElapsed').textContent = '0.00s';
        });
    }
    
    // 4. Reset Board button
    const resetBtn = document.getElementById('sudokuResetBtn');
    if (resetBtn) {
        const resetBtnCloned = resetBtn.cloneNode(true);
        resetBtn.parentNode.replaceChild(resetBtnCloned, resetBtn);
        resetBtnCloned.addEventListener('click', () => {
            if (isSolvingActive) return;
            sudokuCurrent = sudokuPuzzle.map(row => [...row]);
            renderSudokuBoard();
            document.getElementById('sudokuStepsCount').textContent = '0';
            document.getElementById('sudokuTimeElapsed').textContent = '0.00s';
        });
    }
    
    // 5. Hint button
    const hintBtn = document.getElementById('sudokuHintBtn');
    if (hintBtn) {
        const hintBtnCloned = hintBtn.cloneNode(true);
        hintBtn.parentNode.replaceChild(hintBtnCloned, hintBtn);
        hintBtnCloned.addEventListener('click', getSudokuHint);
    }
    
    // 6. Animate Solver button
    const animateBtn = document.getElementById('sudokuAnimateSolveBtn');
    if (animateBtn) {
        const animateBtnCloned = animateBtn.cloneNode(true);
        animateBtn.parentNode.replaceChild(animateBtnCloned, animateBtn);
        animateBtnCloned.addEventListener('click', startVisualSudokuSolve);
    }
    
    // 7. Stop Solver button
    const stopBtn = document.getElementById('sudokuClearSolveBtn');
    if (stopBtn) {
        const stopBtnCloned = stopBtn.cloneNode(true);
        stopBtn.parentNode.replaceChild(stopBtnCloned, stopBtn);
        stopBtnCloned.addEventListener('click', stopVisualSudokuSolve);
    }
    
    // 8. Instant Solve button
    const instantBtn = document.getElementById('sudokuInstantSolveBtn');
    if (instantBtn) {
        const instantBtnCloned = instantBtn.cloneNode(true);
        instantBtn.parentNode.replaceChild(instantBtnCloned, instantBtn);
        instantBtnCloned.addEventListener('click', solveSudokuInstant);
    }
    
    // 9. Speed Slider
    const slider = document.getElementById('sudokuSpeedSlider');
    const sliderVal = document.getElementById('sudokuSpeedVal');
    if (slider) {
        const sliderCloned = slider.cloneNode(true);
        slider.parentNode.replaceChild(sliderCloned, slider);
        
        sliderCloned.addEventListener('input', (e) => {
            const val = parseInt(e.target.value, 10);
            sudokuSolveSpeed = val;
            if (sliderVal) sliderVal.textContent = val + 'ms';
        });
    }
    
    // Clean up timers/intervals when the project modal is closed
    const observer = new MutationObserver(() => {
        if (!document.getElementById('sudokuGrid')) {
            clearInterval(sudokuTimerInterval);
            stopVisualSudokuSolve();
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    
    console.log('✅ Sudoku Game UI initialized successfully');
}

// Register module entry points for the web app
const SudokuGameModule = {
    getHTML: getSudokuGameHTML,
    init: initSudokuGame
};

window.SudokuGame = SudokuGameModule;
window.getSudokuGameHTML = getSudokuGameHTML;
window.initSudokuGame = initSudokuGame;

console.log('✅ Sudoku Game module loaded');
