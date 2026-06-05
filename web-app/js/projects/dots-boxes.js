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
            background: rgba(12, 15, 26, 0.65);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            animation: overlayFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .winner-popup {
            background: var(--surface-hover, var(--surface, rgba(18, 22, 36, 0.96)));
            padding: 2.5rem 3rem;
            border-radius: 24px;
            text-align: center;
            border: 1px solid var(--border-accent, var(--border, rgba(255, 255, 255, 0.1)));
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(106, 191, 141, 0.1);
            animation: popupEnter 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            min-width: 360px;
            max-width: 90%;
            transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .winner-popup h2 {
            margin-bottom: 0.5rem;
            color: var(--accent-color, var(--primary-color, #6abf8d));
            font-size: 2rem;
            font-family: var(--font-sans);
            font-weight: 700;
            letter-spacing: -0.02em;
        }

        .winner-subtitle {
            color: var(--text-secondary, #8892a4);
            font-size: 1rem;
            margin-bottom: 1.5rem;
        }

        /* Score comparison grid */
        .winner-scores-wrapper {
            display: flex;
            gap: 1.2rem;
            justify-content: center;
            margin: 1.8rem 0;
            flex-wrap: wrap;
        }

        .winner-score-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border, rgba(255, 255, 255, 0.06));
            border-radius: 16px;
            padding: 1.2rem;
            min-width: 140px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.4rem;
            transition: transform 0.3s ease, border-color 0.3s ease;
            position: relative;
        }

        .winner-score-card:hover {
            transform: translateY(-2px);
        }

        .winner-score-card.winner-highlight {
            border-color: var(--accent-color, var(--primary-color, #6abf8d));
            box-shadow: 0 0 20px rgba(106, 191, 141, 0.15);
            background: rgba(106, 191, 141, 0.04);
        }

        .winner-score-card .player-badge {
            font-size: 0.8rem;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: var(--text-secondary, #8892a4);
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }

        .winner-score-card .player-val {
            font-size: 2.2rem;
            font-weight: 700;
            color: var(--text-color, #f0f2f5);
            line-height: 1.2;
        }

        .winner-score-card .crown-icon {
            position: absolute;
            top: -16px;
            font-size: 1.6rem;
            animation: crownFloat 2s ease-in-out infinite;
        }

        /* Action buttons container */
        .winner-actions {
            display: flex;
            gap: 1rem;
            justify-content: center;
            margin-top: 1.8rem;
            flex-wrap: wrap;
        }

        .winner-btn {
            padding: 0.8rem 1.6rem;
            border-radius: 12px;
            font-weight: 600;
            font-size: 0.95rem;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
            border: 2px solid transparent;
            font-family: var(--font-sans);
        }

        .winner-btn-primary {
            background: var(--accent-color, var(--primary-color, #6abf8d));
            color: var(--bg-color, #13100f);
        }

        .winner-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(106, 191, 141, 0.3);
        }

        .winner-btn-secondary {
            background: transparent;
            border-color: var(--border-color, rgba(255, 255, 255, 0.15));
            color: var(--text-color, #f0f2f5);
        }

        .winner-btn-secondary:hover {
            background: rgba(255, 255, 255, 0.04);
            border-color: var(--text-secondary, #8892a4);
            transform: translateY(-2px);
        }

        /* Minimized State (View Board Mode) */
        .winner-overlay.minimized {
            background: rgba(12, 15, 26, 0.25);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
            align-items: flex-end;
            padding-bottom: 2rem;
            pointer-events: none;
        }

        .winner-overlay.minimized .winner-popup {
            pointer-events: auto;
            transform: translateY(0) scale(0.95);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            padding: 1.2rem 2rem;
            display: flex;
            align-items: center;
            gap: 2rem;
            min-width: unset;
            max-width: 90%;
            flex-direction: row;
            justify-content: space-between;
            border-color: var(--accent-color, var(--primary-color, #6abf8d));
            animation: slideUpDock 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .winner-overlay.minimized h2 {
            margin: 0;
            font-size: 1.3rem;
        }

        .winner-overlay.minimized .winner-subtitle {
            display: none;
        }

        .winner-overlay.minimized .winner-scores-wrapper {
            margin: 0;
            gap: 0.8rem;
        }

        .winner-overlay.minimized .winner-score-card {
            padding: 0.4rem 0.8rem;
            flex-direction: row;
            min-width: unset;
            gap: 0.6rem;
            background: transparent;
            border-color: transparent;
            box-shadow: none;
        }

        .winner-overlay.minimized .winner-score-card .player-badge {
            font-size: 0.75rem;
        }

        .winner-overlay.minimized .winner-score-card .player-val {
            font-size: 1.2rem;
        }

        .winner-overlay.minimized .winner-score-card .crown-icon {
            top: -10px;
            font-size: 1.1rem;
        }

        .winner-overlay.minimized .winner-actions {
            margin: 0;
            gap: 0.6rem;
        }

        .winner-overlay.minimized .winner-btn {
            padding: 0.5rem 1rem;
            font-size: 0.85rem;
            border-radius: 8px;
        }

        /* ── Animations ── */
        @keyframes overlayFadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        @keyframes popupEnter {
            from { transform: scale(0.85) translateY(30px); opacity: 0; }
            to   { transform: scale(1) translateY(0); opacity: 1; }
        }

        @keyframes slideUpDock {
            from { transform: translateY(80px) scale(0.9); opacity: 0; }
            to   { transform: translateY(0) scale(0.95); opacity: 1; }
        }

        @keyframes crownFloat {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-4px) rotate(4deg); }
        }

        @media (max-width: 768px) {
            .winner-overlay.minimized .winner-popup {
                flex-direction: column;
                gap: 1rem;
                align-items: center;
                width: 95%;
            }
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
        player2Title.textContent = 'Player 2';
        resetGame();
    });

    startCPU.addEventListener('click', () => {
        gameMode = 'cpu';
        player2Title.textContent = '🤖 AI';
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
        board.textContent = '';
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
            turnIndicator.textContent = '🔵 Player 1 Turn';
        } else {
            turnIndicator.textContent = gameMode === 'cpu' ? '🤖 AI Turn' : '🔴 Player 2 Turn';
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
                        boxEl.textContent        = '🔵';
                    } else {
                        boxEl.style.background = p2Color + '55';
                        boxEl.textContent        = gameMode === 'cpu' ? '🤖' : '🔴';
                    }
                }
            }
        }

        checkWinner();
        return anyCompleted;
    }

    function triggerConfetti() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '10000';
        document.body.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        const colors = [p1Color, p2Color, '#22c55e', '#ec4899', '#f59e0b', '#8b5cf6'];
        const particles = [];

        // Spawn particles
        for (let i = 0; i < 120; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height - height,
                r: Math.random() * 6 + 4,
                d: Math.random() * height,
                color: colors[Math.floor(Math.random() * colors.length)],
                tilt: Math.random() * 10 - 5,
                tiltAngleIncremental: Math.random() * 0.07 + 0.02,
                tiltAngle: 0
            });
        }

        let animationFrame;
        function draw() {
            ctx.clearRect(0, 0, width, height);
            let active = false;

            particles.forEach((p, idx) => {
                p.tiltAngle += p.tiltAngleIncremental;
                p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
                p.x += Math.sin(p.tiltAngle);
                p.tilt = Math.sin(p.tiltAngle - idx / 3) * 15;

                if (p.y < height) {
                    active = true;
                }

                ctx.beginPath();
                ctx.lineWidth = p.r;
                ctx.strokeStyle = p.color;
                ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
                ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
                ctx.stroke();
            });

            if (active) {
                animationFrame = requestAnimationFrame(draw);
            } else {
                cleanup();
            }
        }

        function cleanup() {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrame);
            canvas.remove();
        }

        draw();
        setTimeout(cleanup, 6000);
    }

    function checkWinner() {
        const totalBoxes = (size - 1) * (size - 1);
        if (scores[1] + scores[2] !== totalBoxes) return;

        let title, subtitle, winner = 0;
        const p2Name = gameMode === 'cpu' ? '🤖 AI' : '🔴 Player 2';

        if (scores[1] > scores[2]) {
            title = '🏆 Player 1 Victory!';
            subtitle = 'Player 1 dominates the board!';
            winner = 1;
        } else if (scores[2] > scores[1]) {
            if (gameMode === 'cpu') {
                title = '💀 Defeat!';
                subtitle = 'The AI outsmarted you this time.';
            } else {
                title = '🏆 Player 2 Victory!';
                subtitle = 'Player 2 dominates the board!';
            }
            winner = 2;
        } else {
            title = "🤝 It's a Tie!";
            subtitle = 'A perfectly contested match!';
        }

        // Set game status to "Game Over" to avoid background text overlap clutter
        turnIndicator.textContent = '🏆 Game Over';

        // Trigger confetti for any human victory, or general winner (not tie)
        if (winner > 0) {
            triggerConfetti();
        }

        document.querySelector('.winner-overlay')?.remove();

        const overlay = document.createElement('div');
        overlay.className = 'winner-overlay';
        overlay.innerHTML = `
            <div class="winner-popup" role="dialog" aria-modal="true" aria-label="Game over">
                <h2>${title}</h2>
                <div class="winner-subtitle">${subtitle}</div>
                
                <div class="winner-scores-wrapper">
                    <div class="winner-score-card ${winner === 1 ? 'winner-highlight' : ''}">
                        ${winner === 1 ? '<div class="crown-icon">👑</div>' : ''}
                        <div class="player-badge">
                            <span class="player-ball" style="background: ${p1Color}; width: 14px; height: 14px; box-shadow: none;"></span>
                            Player 1
                        </div>
                        <div class="player-val">${scores[1]}</div>
                    </div>
                    <div class="winner-score-card ${winner === 2 ? 'winner-highlight' : ''}">
                        ${winner === 2 ? '<div class="crown-icon">👑</div>' : ''}
                        <div class="player-badge">
                            <span class="player-ball" style="background: ${p2Color}; width: 14px; height: 14px; box-shadow: none;"></span>
                            ${p2Name}
                        </div>
                        <div class="player-val">${scores[2]}</div>
                    </div>
                </div>

                <div class="winner-actions">
                    <button id="viewBoardBtn" class="winner-btn winner-btn-secondary">🔍 View Board</button>
                    <button id="playAgainBtn" class="winner-btn winner-btn-primary">🎮 Play Again</button>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);

        const playAgainBtn = document.getElementById('playAgainBtn');
        const viewBoardBtn = document.getElementById('viewBoardBtn');

        playAgainBtn.addEventListener('click', () => {
            overlay.remove();
            resetGame();
        });

        viewBoardBtn.addEventListener('click', () => {
            overlay.classList.toggle('minimized');
            if (overlay.classList.contains('minimized')) {
                viewBoardBtn.textContent = '📊 Show Stats';
            } else {
                viewBoardBtn.textContent = '🔍 View Board';
            }
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