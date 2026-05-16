function getMinesweeperHTML() {
    return `
        <div class="project-content">
            <h2>💣 Minesweeper</h2>
            <div class="minesweeper-container">
                <div class="game-header">
                    <div class="stat-box">
                        <span class="stat-label">Mines</span>
                        <span class="stat-value" id="mineCount">10</span>
                    </div>
                    <div class="stat-box">
                        <span class="stat-label">Time</span>
                        <span class="stat-value" id="timer">000</span>
                    </div>
                </div>

                <div class="minesweeper-board" id="minesweeperBoard"></div>

                <div class="game-controls">
                    <button class="btn-game" id="resetMinesweeper">🔄 New Game</button>
                    <div class="mode-toggle">
                        <span id="clickModeLabel">Current Action: Reveal 👆</span>
                        <p class="hint">Tip: Right-click to flag, or click the label to toggle</p>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .minesweeper-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1.5rem;
                padding: 1rem;
            }

            .game-header {
                display: flex;
                gap: 2rem;
                background: var(--surface-color);
                padding: 1rem 2rem;
                border-radius: 15px;
                border: 2px solid var(--border-color);
            }

            .stat-box {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .stat-label {
                font-size: 0.8rem;
                color: var(--text-secondary);
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .stat-value {
                font-size: 1.5rem;
                font-weight: bold;
                color: var(--primary-color);
                font-family: 'Courier New', Courier, monospace;
            }

            .minesweeper-board {
                display: grid;
                gap: 4px;
                background: var(--border-color);
                padding: 4px;
                border-radius: 8px;
                user-select: none;
            }

            .ms-cell {
                width: 40px;
                height: 40px;
                background: var(--surface-color);
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 1.2rem;
                cursor: pointer;
                transition: transform 0.1s, background 0.2s;
            }

            .ms-cell:hover {
                background: var(--border-color);
                transform: scale(1.05);
            }

            .ms-cell.revealed {
                background: #e2e8f0;
                cursor: default;
                color: #1a202c;
            }

            .dark-theme .ms-cell.revealed {
                background: #2d3748;
                color: #e2e8f0;
            }

            .ms-cell.mine {
                background: var(--danger-color) !important;
            }

            .ms-cell.flagged {
                color: var(--danger-color);
            }

            .game-controls {
                text-align: center;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .btn-game {
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 0.8rem 2rem;
                border-radius: 50px;
                cursor: pointer;
                font-weight: bold;
                transition: var(--transition);
            }

            .btn-game:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
            }

            .mode-toggle {
                cursor: pointer;
                padding: 0.5rem;
                border-radius: 8px;
                transition: background 0.2s;
            }

            .mode-toggle:hover {
                background: var(--border-color);
            }

            .hint {
                font-size: 0.8rem;
                color: var(--text-secondary);
                margin-top: 0.5rem;
            }

            /* Number Colors */
            .n-1 { color: #3182ce; }
            .n-2 { color: #38a169; }
            .n-3 { color: #e53e3e; }
            .n-4 { color: #805ad5; }
            .n-5 { color: #dd6b20; }
            .n-6 { color: #319795; }
            .n-7 { color: #1a202c; }
            .n-8 { color: #718096; }
        </style>
    `;
}

function initMinesweeper() {
    const ROWS = 10;
    const COLS = 10;
    const MINES_COUNT = 15;
    
    let board = [];
    let gameActive = true;
    let timer = 0;
    let timerInterval = null;
    let isFlagMode = false;
    let minesRemaining = MINES_COUNT;

    const boardElement = document.getElementById('minesweeperBoard');
    const mineCountElement = document.getElementById('mineCount');
    const timerElement = document.getElementById('timer');
    const resetBtn = document.getElementById('resetMinesweeper');
    const modeToggle = document.querySelector('.mode-toggle');
    const modeLabel = document.getElementById('clickModeLabel');

    function createBoard() {
        boardElement.style.gridTemplateColumns = `repeat(${COLS}, 1fr)`;
        boardElement.innerHTML = '';
        board = [];
        minesRemaining = MINES_COUNT;
        mineCountElement.textContent = minesRemaining;
        timer = 0;
        timerElement.textContent = '000';
        clearInterval(timerInterval);
        timerInterval = null;
        gameActive = true;

        // Create empty board
        for (let r = 0; r < ROWS; r++) {
            board[r] = [];
            for (let c = 0; c < COLS; c++) {
                const cell = {
                    r, c,
                    isMine: false,
                    isRevealed: false,
                    isFlagged: false,
                    neighborMines: 0,
                    element: document.createElement('div')
                };

                cell.element.classList.add('ms-cell');
                cell.element.addEventListener('click', () => handleCellClick(r, c));
                cell.element.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    toggleFlag(r, c);
                });

                boardElement.appendChild(cell.element);
                board[r][c] = cell;
            }
        }

        // Place mines
        let minesPlaced = 0;
        while (minesPlaced < MINES_COUNT) {
            const r = Math.floor(Math.random() * ROWS);
            const c = Math.floor(Math.random() * COLS);
            if (!board[r][c].isMine) {
                board[r][c].isMine = true;
                minesPlaced++;
            }
        }

        // Calculate numbers
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (!board[r][c].isMine) {
                    let count = 0;
                    for (let dr = -1; dr <= 1; dr++) {
                        for (let dc = -1; dc <= 1; dc++) {
                            const nr = r + dr, nc = c + dc;
                            if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc].isMine) {
                                count++;
                            }
                        }
                    }
                    board[r][c].neighborMines = count;
                }
            }
        }
    }

    function startTimer() {
        if (!timerInterval) {
            timerInterval = setInterval(() => {
                timer++;
                timerElement.textContent = timer.toString().padStart(3, '0');
                if (timer >= 999) clearInterval(timerInterval);
            }, 1000);
        }
    }

    function handleCellClick(r, c) {
        if (!gameActive || board[r][c].isRevealed) return;
        
        startTimer();

        if (isFlagMode) {
            toggleFlag(r, c);
            return;
        }

        if (board[r][c].isFlagged) return;

        if (board[r][c].isMine) {
            gameOver(false);
        } else {
            revealCell(r, c);
            checkWin();
        }
    }

    function toggleFlag(r, c) {
        if (!gameActive || board[r][c].isRevealed) return;
        
        startTimer();
        const cell = board[r][c];
        cell.isFlagged = !cell.isFlagged;
        
        if (cell.isFlagged) {
            cell.element.textContent = '🚩';
            cell.element.classList.add('flagged');
            minesRemaining--;
        } else {
            cell.element.textContent = '';
            cell.element.classList.remove('flagged');
            minesRemaining++;
        }
        mineCountElement.textContent = minesRemaining;
    }

    function revealCell(r, c) {
        const cell = board[r][c];
        if (cell.isRevealed || cell.isFlagged) return;

        cell.isRevealed = true;
        cell.element.classList.add('revealed');
        
        if (cell.neighborMines > 0) {
            cell.element.textContent = cell.neighborMines;
            cell.element.classList.add(`n-${cell.neighborMines}`);
        } else {
            // Reveal neighbors for 0
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    const nr = r + dr, nc = c + dc;
                    if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
                        revealCell(nr, nc);
                    }
                }
            }
        }
    }

    function checkWin() {
        let revealedCount = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c].isRevealed) revealedCount++;
            }
        }

        if (revealedCount === (ROWS * COLS - MINES_COUNT)) {
            gameOver(true);
        }
    }

    function gameOver(won) {
        gameActive = false;
        clearInterval(timerInterval);

        // Reveal all mines
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c].isMine) {
                    board[r][c].element.textContent = won ? '🚩' : '💣';
                    if (!won) board[r][c].element.classList.add('mine');
                }
            }
        }

        setTimeout(() => {
            alert(won ? '🎉 Congratulations! You won!' : '💥 BOOM! Game Over!');
        }, 100);
    }

    modeToggle.addEventListener('click', () => {
        isFlagMode = !isFlagMode;
        modeLabel.textContent = isFlagMode ? 'Current Action: Flag 🚩' : 'Current Action: Reveal 👆';
    });

    resetBtn.addEventListener('click', createBoard);

    createBoard();
}
