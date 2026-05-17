// ============================================
// DOTS & BOXES AI 
// ============================================

function getDotsBoxesHTML() {
    return `
    <div class="project-content">
        <h2>🔲 Dots &amp; Boxes AI</h2>

        <div class="dots-game-container">

            <div class="dots-controls">
                <select id="gridSize" aria-label="Grid size">
                    <option value="3">3 x 3</option>
                    <option value="4" selected>4 x 4</option>
                    <option value="5">5 x 5</option>
                    <option value="6">6 x 6</option>
                    <option value="7">7 x 7</option>
                    <option value="8">8 x 8</option>
                </select>

                <button id="startCPU">🤖 Vs AI</button>

                <select id="aiDifficulty" aria-label="AI difficulty">
                    <option value="easy">🟢 Easy AI</option>
                    <option value="medium" selected>🟡 Intermediate AI</option>
                    <option value="hard">🔴 Hard AI</option>
                </select>

                <button id="startPVP">👥 2 Players</button>
                <button id="resetDots">🔄 Reset</button>
            </div>

            <div class="dots-scoreboard" aria-label="Scoreboard">

                <div class="score-card">
                    <div class="player-header">
                        <div id="p1Ball" class="player-ball" style="background:#3b82f6;"></div>
                        <h3>Player 1</h3>
                    </div>
                    <div id="scoreP1" aria-label="Player 1 score">0</div>
                    <label for="p1Color" class="sr-only">Player 1 colour</label>
                    <input type="color" id="p1Color" value="#3b82f6" title="Player 1 colour">
                </div>

                <div class="score-card">
                    <div class="player-header">
                        <div id="p2Ball" class="player-ball" style="background:#ef4444;"></div>
                        <h3 id="player2Title">Player 2</h3>
                    </div>
                    <div id="scoreP2" aria-label="Player 2 score">0</div>
                    <label for="p2Color" class="sr-only">Player 2 colour</label>
                    <input type="color" id="p2Color" value="#ef4444" title="Player 2 colour">
                </div>
            </div>

            <div id="turnIndicator" class="turn-indicator" role="status" aria-live="polite">
                🔵 Player 1 Turn
            </div>

            <div class="board-wrapper">
                <div id="dotsBoard" class="dots-board" role="grid" aria-label="Dots and Boxes board"></div>
            </div>

        </div>
    </div>

    <style>
        /* ── Layout ── */
        .dots-game-container {
            padding: 2rem;
            text-align: center;
        }

        /* ── Controls bar ── */
        .dots-controls {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 2rem;
        }

        .dots-controls button,
        .dots-controls select {
            padding: 0.8rem 1.2rem;
            border: 2px solid var(--border-color);
            border-radius: 12px;
            background: var(--surface-color);
            color: var(--text-color);
            cursor: pointer;
            transition: var(--transition);
            font-size: 0.95rem;
        }

        .dots-controls button:hover {
            transform: translateY(-2px);
            border-color: var(--primary-color);
        }

        /* ── Scoreboard ── */
        .dots-scoreboard {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }

        .score-card {
            background: var(--surface-color);
            padding: 1rem 2rem;
            border-radius: 18px;
            border: 2px solid var(--border-color);
            min-width: 220px;
        }

        .player-header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            margin-bottom: 1rem;
        }

        .player-ball {
            width: 24px;
            height: 24px;
            border-radius: 50%;
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
            flex-shrink: 0;
        }

        .score-card > div[id^="score"] {
            font-size: 2rem;
            font-weight: bold;
            margin-top: 0.5rem;
        }

        .score-card input[type="color"] {
            margin-top: 1rem;
            width: 60px;
            height: 40px;
            border: none;
            background: none;
            cursor: pointer;
        }

        /* Screen-reader only helper */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        /* ── Turn indicator ── */
        .turn-indicator {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            font-weight: bold;
            color: var(--primary-color);
        }

        /* ── Board ── */
        .board-wrapper {
            overflow: auto;
        }

        .dots-board {
            display: grid;
            justify-content: center;
            gap: 0;
            margin: auto;
            width: max-content;
        }

        /* Dots */
        .dot {
            width: 12px;
            height: 12px;
            background: var(--text-color);
            border-radius: 50%;
        }

        /* Horizontal lines */
        .line-h {
            width: 50px;
            height: 10px;
            background: #cbd5e1;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.2s;
        }

        /* Vertical lines */
        .line-v {
            width: 10px;
            height: 50px;
            background: #cbd5e1;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.2s;
        }

        .line-h:hover,
        .line-v:hover {
            opacity: 0.7;
            transform: scale(1.05);
        }

        /* Claimed boxes */
        .box {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
            font-weight: bold;
            transition: 0.3s;
        }

        /* ── Winner overlay ── */
        .winner-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .winner-popup {
            background: var(--surface-color);
            padding: 3rem;
            border-radius: 24px;
            text-align: center;
            border: 2px solid var(--primary-color);
            animation: popupShow 0.3s ease;
            min-width: 320px;
        }

        .winner-popup h2 {
            margin-bottom: 1rem;
            color: var(--primary-color);
            font-size: 2rem;
        }

        .winner-popup p {
            margin: 0.8rem 0;
            font-size: 1.2rem;
        }

        .winner-popup button {
            margin-top: 1.5rem;
            padding: 1rem 2rem;
            border: none;
            border-radius: 12px;
            background: var(--primary-color);
            color: white;
            cursor: pointer;
            font-size: 1rem;
        }

        .winner-popup button:hover {
            transform: scale(1.05);
        }

        @keyframes popupShow {
            from { transform: scale(0.7); opacity: 0; }
            to   { transform: scale(1);   opacity: 1; }
        }

        /* ── Responsive: mobile ── */
        @media (max-width: 768px) {
            .line-h { width: 35px; }
            .line-v { height: 35px; }
            .box    { width: 35px; height: 35px; font-size: 1rem; }
        }
    </style>
    `;
}

function initDotsBoxes() {

    const board          = document.getElementById('dotsBoard');
    const gridSelect     = document.getElementById('gridSize');
    const aiSelect       = document.getElementById('aiDifficulty');
    const scoreP1        = document.getElementById('scoreP1');
    const scoreP2        = document.getElementById('scoreP2');
    const turnIndicator  = document.getElementById('turnIndicator');
    const startCPU       = document.getElementById('startCPU');
    const startPVP       = document.getElementById('startPVP');
    const player2Title   = document.getElementById('player2Title');
    const p1ColorInput   = document.getElementById('p1Color');
    const p2ColorInput   = document.getElementById('p2Color');
    const p1Ball         = document.getElementById('p1Ball');
    const p2Ball         = document.getElementById('p2Ball');

    let p1Color      = '#3b82f6';
    let p2Color      = '#ef4444';
    let size         = 4;           
    let currentPlayer = 1;
    let gameMode     = 'pvp';      
    let aiDifficulty = 'medium';    
    let scores       = { 1: 0, 2: 0 };
    let boxes        = {};          
    let horizontal   = {};          
    let vertical     = {};          

    p1ColorInput.addEventListener('input', (e) => {
        p1Color = e.target.value;
        p1Ball.style.background = p1Color;
    });

    p2ColorInput.addEventListener('input', (e) => {
        p2Color = e.target.value;
        p2Ball.style.background = p2Color;
    });

    startPVP.addEventListener('click', () => {
        gameMode = 'pvp';
        player2Title.innerHTML = 'Player 2';
        resetGame();
    });

    startCPU.addEventListener('click', () => {
        gameMode = 'cpu';
        player2Title.innerHTML = '🤖 AI';
        resetGame();
    });

    aiSelect.addEventListener('change',  (e) => { aiDifficulty = e.target.value; });
    gridSelect.addEventListener('change', (e) => { size = parseInt(e.target.value); resetGame(); });
    document.getElementById('resetDots').addEventListener('click', resetGame);

    function resetGame() {
        currentPlayer = 1;
        scores        = { 1: 0, 2: 0 };
        boxes         = {};
        horizontal    = {};
        vertical      = {};
        updateScores();
        createBoard();
        updateTurnText();
    }

    function createBoard() {
        board.innerHTML = '';
        board.style.gridTemplateColumns = `repeat(${size * 2 - 1}, auto)`;

        for (let row = 0; row < size * 2 - 1; row++) {
            for (let col = 0; col < size * 2 - 1; col++) {

                if (row % 2 === 0 && col % 2 === 0) {
                    const dot = document.createElement('div');
                    dot.className = 'dot';
                    board.appendChild(dot);

                } else if (row % 2 === 0) {
                    const line = document.createElement('div');
                    line.className = 'line-h';
                    const key = `${row}-${col}`;
                    horizontal[key] = false;
                    line.dataset.key = key;
                    line.setAttribute('role', 'button');
                    line.setAttribute('aria-label', `Horizontal line ${row}-${col}`);

                    line.addEventListener('click', () => {
                        if (horizontal[key]) return;  // ❌ already drawn
                        horizontal[key] = true;
                        drawLine(line);
                        const scored = checkBoxes();
                        if (!scored) switchTurn();
                        // Trigger AI if it's now the AI's turn
                        if (gameMode === 'cpu' && currentPlayer === 2) {
                            setTimeout(aiMove, 400);
                        }
                    });
                    board.appendChild(line);

                } else if (col % 2 === 0) {
                    const line = document.createElement('div');
                    line.className = 'line-v';
                    const key = `${row}-${col}`;
                    vertical[key] = false;
                    line.dataset.key = key;
                    line.setAttribute('role', 'button');
                    line.setAttribute('aria-label', `Vertical line ${row}-${col}`);

                    line.addEventListener('click', () => {
                        if (vertical[key]) return;  // ❌ already drawn
                        vertical[key] = true;
                        drawLine(line);
                        const scored = checkBoxes();
                        if (!scored) switchTurn();
                        // Trigger AI if it's now the AI's turn
                        if (gameMode === 'cpu' && currentPlayer === 2) {
                            setTimeout(aiMove, 400);
                        }
                    });
                    board.appendChild(line);

                } else {
                    const box = document.createElement('div');
                    box.className = 'box';
                    box.id = `box-${row}-${col}`;
                    board.appendChild(box);
                }
            }
        }
    }

    function drawLine(line) {
        line.style.background = currentPlayer === 1 ? p1Color : p2Color;
    }

    function switchTurn() {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        updateTurnText();
    }

    function updateTurnText() {
        if (currentPlayer === 1) {
            turnIndicator.innerHTML = '🔵 Player 1 Turn';
        } else {
            turnIndicator.innerHTML = gameMode === 'cpu' ? '🤖 AI Turn' : '🔴 Player 2 Turn';
        }
    }

    function updateScores() {
        scoreP1.textContent = scores[1];
        scoreP2.textContent = scores[2];
    }

    function checkBoxes() {
        let anyCompleted = false;

        for (let row = 1; row < size * 2 - 1; row += 2) {
            for (let col = 1; col < size * 2 - 1; col += 2) {
                const boxKey = `${row}-${col}`;
                if (boxes[boxKey]) continue;  // already claimed

                const top    = horizontal[`${row - 1}-${col}`];
                const bottom = horizontal[`${row + 1}-${col}`];
                const left   = vertical[`${row}-${col - 1}`];
                const right  = vertical[`${row}-${col + 1}`];

                if (top && bottom && left && right) {
                    anyCompleted         = true;
                    boxes[boxKey]        = currentPlayer;
                    scores[currentPlayer]++;
                    updateScores();

                    // ✅ Visually claim the box
                    const boxEl = document.getElementById(`box-${row}-${col}`);
                    if (currentPlayer === 1) {
                        boxEl.style.background = p1Color + '55';
                        boxEl.innerHTML        = '🔵';
                    } else {
                        boxEl.style.background = p2Color + '55';
                        boxEl.innerHTML        = gameMode === 'cpu' ? '🤖' : '🔴';
                    }
                }
            }
        }

        checkWinner();
        return anyCompleted;
    }

    function checkWinner() {
        const totalBoxes = (size - 1) * (size - 1);
        if (scores[1] + scores[2] !== totalBoxes) return;

        let message;
        if      (scores[1] > scores[2]) message = '🎉 Player 1 Wins!';
        else if (scores[2] > scores[1]) message = gameMode === 'cpu' ? '🤖 AI Wins!' : '🎉 Player 2 Wins!';
        else                            message = "🤝 It's a Tie!";

        turnIndicator.innerHTML = message;

        document.querySelector('.winner-overlay')?.remove();

        const overlay = document.createElement('div');
        overlay.className = 'winner-overlay';
        overlay.innerHTML = `
            <div class="winner-popup" role="dialog" aria-modal="true" aria-label="Game over">
                <h2>${message}</h2>
                <p>🔵 Player 1: ${scores[1]}</p>
                <p>${gameMode === 'cpu' ? '🤖 AI' : '🔴 Player 2'}: ${scores[2]}</p>
                <button id="playAgainBtn">🎮 Play Again</button>
            </div>
        `;
        document.body.appendChild(overlay);

        document.getElementById('playAgainBtn').addEventListener('click', () => {
            overlay.remove();
            resetGame();
        });
    }

    function aiMove() {
        const available = getAvailableMoves();
        if (available.length === 0) return;

        let selected;
        if      (aiDifficulty === 'easy')   selected = randomMove(available);
        else if (aiDifficulty === 'medium') selected = findCompletingMove(available) || randomMove(available);
        else                                selected = findBestMove(available);

        if (selected) selected.click();
    }

    function getAvailableMoves() {
        const moves = [];
        document.querySelectorAll('.line-h, .line-v').forEach(line => {
            if (line.style.background === '') moves.push(line);
        });
        return moves;
    }

    function randomMove(moves) {
        return moves[Math.floor(Math.random() * moves.length)];
    }

    function findCompletingMove(moves) {
        for (const move of moves) {
            simulateMove(move);
            const completes = countCompletedBoxes() > 0;
            undoSimulation(move);
            if (completes) return move;
        }
        return null;
    }

    function findBestMove(moves) {
        let bestMove  = null;
        let bestScore = -Infinity;

        for (const move of moves) {
            simulateMove(move);
            const score = evaluateBoard();
            undoSimulation(move);

            if (score > bestScore) {
                bestScore = score;
                bestMove  = move;
            }
        }
        return bestMove || randomMove(moves);
    }

    function evaluateBoard() {
        let score = 0;
        for (let row = 1; row < size * 2 - 1; row += 2) {
            for (let col = 1; col < size * 2 - 1; col += 2) {
                const sides = countBoxSides(row, col);
                if      (sides === 4) score += 100;
                else if (sides === 3) score -= 80;
                else                  score += sides;
            }
        }
        return score;
    }

    function countBoxSides(row, col) {
        let count = 0;
        if (horizontal[`${row - 1}-${col}`]) count++;
        if (horizontal[`${row + 1}-${col}`]) count++;
        if (vertical[`${row}-${col - 1}`])   count++;
        if (vertical[`${row}-${col + 1}`])   count++;
        return count;
    }

    function countCompletedBoxes() {
        let completed = 0;
        for (let row = 1; row < size * 2 - 1; row += 2) {
            for (let col = 1; col < size * 2 - 1; col += 2) {
                if (countBoxSides(row, col) === 4) completed++;
            }
        }
        return completed;
    }

    function simulateMove(move) {
        const key = move.dataset.key;
        if (move.classList.contains('line-h')) horizontal[key] = true;
        else                                    vertical[key]   = true;
    }

    function undoSimulation(move) {
        const key = move.dataset.key;
        if (move.classList.contains('line-h')) horizontal[key] = false;
        else                                    vertical[key]   = false;
    }

    resetGame();
}