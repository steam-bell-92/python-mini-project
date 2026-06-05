// ============================================
// 2048 GAME
// ============================================

function get2048GameHTML() {
    return `
        <div class="project-content">
            <h2>🎮 2048 Game</h2>

            <div class="game2048-container">
                <div class="score-board">
                    <div class="score-box">
                        Score: <span id="score">0</span>
                    </div>
                    <div class="score-box">
                        Best: <span id="best-score">0</span>
                    </div>
                </div>

                <div id="game-message"></div>

                <div class="game-layout">
                    <div id="grid-container"></div>

                    <div class="controls">
                        <button id="ctrl-2048-up">⬆️</button>
                        <div class="side-by-side-ctrls">
                            <button id="ctrl-2048-left">⬅️</button>
                            <button id="ctrl-2048-right">➡️</button>
                        </div>
                        <button id="ctrl-2048-down">⬇️</button>
                    </div>
                </div>

                <button id="restart-btn" class="game-btn">🔄 Restart Game</button>
            </div>

            <style>
                .game2048-container {
                    text-align: center;
                    margin-top: 20px;
                    background: var(--surface-color, #fff);
                    border: 1px solid var(--border-color, #ccc);
                    padding: 20px;
                    border-radius: 15px;
                    color: var(--text-color, #333);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    touch-action: none;
                }

                .score-board {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-bottom: 25px;
                    width: 100%;
                    max-width: 480px;
                }

                #game-message {
                    margin-bottom: 15px;
                    min-height: 24px;
                    font-weight: bold;
                    color: #ef4444;
                }

                .score-box {
                    background: var(--accent-soft, #f3f4f6);
                    border: 1px solid var(--accent-border, #e5e7eb);
                    color: var(--text-color, #1f2937);
                    padding: 12px 20px;
                    border-radius: 12px;
                    font-weight: bold;
                    flex: 1;
                    font-size: 1.1rem;
                    box-shadow: var(--shadow, 0 2px 4px rgba(0,0,0,0.05));
                }

                #grid-container {
                    width: 100%;
                    max-width: 440px;
                    margin: auto;
                }

                #grid-container {
                    width: 340px;
                    height: 340px;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 10px;
                    background: var(--panel-color, #bbada0);
                    border: 10px solid var(--panel-color, #bbada0);
                    padding: 0;
                    border-radius: 10px;
                    touch-action: none;
                }

                .tile {
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    height: auto;
                    background: var(--control-color);

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    font-size: clamp(16px, 5vw, 28px);
                    font-weight: bold;

                    border-radius: 12px;
                }
                /* Right Side Controls Layout */
                .controls {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 10px;
                    background: var(--accent-soft, #f9fafb);
                    padding: 15px;
                    border-radius: 15px;
                    border: 1px solid var(--accent-border, #f3f4f6);
                    box-shadow: var(--shadow, 0 4px 6px rgba(0,0,0,0.05));
                }

                .side-by-side-ctrls {
                    display: flex;
                    gap: 12px;
                }

                .controls button {
                    width: 55px;
                    height: 55px;
                    font-size: 22px;
                    border-radius: 12px;
                    border: 1px solid var(--border-color, #e5e7eb);
                    cursor: pointer;
                    background: var(--surface-color, #ffffff);
                    color: var(--text-color, #374151);
                    box-shadow: 0 3px 6px rgba(0,0,0,0.08);
                    transition: all 0.15s ease;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .controls button:hover {
                    background: var(--accent-border, #e5e7eb);
                    transform: translateY(-2px);
                }

                .controls button:active {
                    transform: translateY(1px);
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }

                #restart-btn {
                    margin-top: 30px;
                    transition: 0.3s;
                    cursor: pointer;
                    background: var(--primary-color, #10b981);
                    color: white;
                    border: none;
                    font-size: 1.05rem;
                    box-shadow: 0 4px 12px rgba(16, 185, 129, 0.2);
                }

                #restart-btn:hover {
                    transform: scale(1.05);
                    box-shadow: 0 6px 16px rgba(16, 185, 129, 0.3);
                }

                .game-btn {
                    padding: 14px 28px;
                    border-radius: 30px;
                    font-weight: bold;
                }

                /* Mobile View Fallback: Drops controls below the board automatically */
                @media (max-width: 520px) {
                    .game-layout {
                        flex-direction: column;
                        gap: 20px;
                    }
                    .controls {
                        padding: 10px;
                    }
                }
            </style>
        </div>
    `;
}

// ============================================
// INIT WRAPPER
// ============================================

function init2048Game() {
    const gridContainer = document.getElementById("grid-container");
    const scoreDisplay = document.getElementById("score");
    const bestDisplay = document.getElementById("best-score");

    if (!gridContainer || !scoreDisplay || !bestDisplay) {
        setTimeout(init2048Game, 50);
        return;
    }

    if (gridContainer.dataset.initialized === "true") return;
    gridContainer.dataset.initialized = "true";

    let board = [];
    let score = 0;
    let bestScore = localStorage.getItem("best2048") || 0;
    bestDisplay.textContent = bestScore;

    function createBoard() {
        board = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ];
        score = 0;
        document.getElementById("game-message").textContent = "";
        addNewTile();
        addNewTile();
        drawBoard();
    }

    function addNewTile() {
        let empty = [];
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                if (board[r][c] === 0) empty.push({ r, c });
            }
        }
        if (!empty.length) return;

        const cell = empty[Math.floor(Math.random() * empty.length)];
        board[cell.r][cell.c] = Math.random() < 0.9 ? 2 : 4;
    }

    function drawBoard() {
        gridContainer.textContent = "";
        board.forEach(row => {
            row.forEach(cell => {
                const tile = document.createElement("div");
                tile.className = "tile";
                tile.textContent = cell || "";
                tile.style.backgroundColor = getColor(cell);
                tile.style.color = cell <= 4 ? "#776e65" : "#fff";
                gridContainer.appendChild(tile);
            });
        });

        scoreDisplay.textContent = score;

        if (score > bestScore) {
            bestScore = score;
            localStorage.setItem("best2048", bestScore);
            bestDisplay.textContent = bestScore;
        }
    }

    function getColor(v) {
        return {
            0: "#cdc1b4",
            2: "#eee4da",
            4: "#ede0c8",
            8: "#f2b179",
            16: "#f59563",
            32: "#f67c5f",
            64: "#f65e3b",
            128: "#edcf72",
            256: "#edcc61",
            512: "#edc850",
            1024: "#edc53f",
            2048: "#edc22e"
        }[v] || "#3c3a32";
    }

    function compress(row) {
        let arr = row.filter(v => v);
        while (arr.length < 4) arr.push(0);
        return arr;
    }

    function merge(row) {
        for (let i = 0; i < 3; i++) {
            if (row[i] && row[i] === row[i + 1]) {
                row[i] *= 2;
                if (window.AudioManager) AudioManager.play("score_point");
                score += row[i];
                row[i + 1] = 0;
            }
        }
        return row;
    }

    function moveLeft() {
        let moved = false;
        board = board.map(row => {
            const old = [...row];
            let newRow = compress(merge(compress(row)));
            if (old.toString() !== newRow.toString()) moved = true;
            return newRow;
        });
        return moved;
    }

    function moveRight() {
        board = board.map(row => row.reverse());
        let moved = moveLeft();
        board = board.map(row => row.reverse());
        return moved;
    }

    function transpose() {
        board = board[0].map((_, i) => board.map(row => row[i]));
    }

    function moveUp() {
        transpose();
        let moved = moveLeft();
        transpose();
        return moved;
    }

    function moveDown() {
        transpose();
        let moved = moveRight();
        transpose();
        return moved;
    }

    function checkGameOver() {
        for (let r = 0; r < 4; r++) {
            for (let c = 0; c < 4; c++) {
                
                if (board[r][c] === 0)
                    return false;

                
                if (
                    c < 3 &&
                    board[r][c] === board[r][c + 1]
                )
                    return false;

                
                if (
                    r < 3 &&
                    board[r][c] === board[r + 1][c]
                )
                    return false;
            }
        }

        return true;
    }

    function makeMove(dir) {

        let moved = false;

        if (dir === "left") moved = moveLeft();
        if (dir === "right") moved = moveRight();
        if (dir === "up") moved = moveUp();
        if (dir === "down") moved = moveDown();

        const gameMessage =
            document.getElementById("game-message");

        if (moved) {

            gameMessage.textContent = "";

            addNewTile();

            if (checkGameOver()) {
                gameMessage.textContent = "GAME OVER!";
                if (window.AudioManager) AudioManager.play("game_over");
            }

            drawBoard();

        } else {

            if (checkGameOver()) {
                gameMessage.textContent = "GAME OVER!";
                if (window.AudioManager) AudioManager.play("game_over");
            } else {
                gameMessage.textContent =
                    "No move possible in this direction!";
            }
        }
    }

    // On-Screen Controls Configuration
    document.getElementById("ctrl-2048-up").onclick = () => makeMove("up");
    document.getElementById("ctrl-2048-down").onclick = () => makeMove("down");
    document.getElementById("ctrl-2048-left").onclick = () => makeMove("left");
    document.getElementById("ctrl-2048-right").onclick = () => makeMove("right");

    // Restart Handling
    document.getElementById("restart-btn").onclick = createBoard;

    // Keyboard Fallback Setup
    const handleKeyDown = (e) => {
        if (!document.getElementById("grid-container")) {
            window.removeEventListener("keydown", handleKeyDown);
            return;
        }
        if (e.key === "ArrowLeft") { e.preventDefault(); makeMove("left"); }
        if (e.key === "ArrowRight") { e.preventDefault(); makeMove("right"); }
        if (e.key === "ArrowUp") { e.preventDefault(); makeMove("up"); }
        if (e.key === "ArrowDown") { e.preventDefault(); makeMove("down"); }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Pointer Swiping Mechanics
    let touchStartX = 0;
    let touchStartY = 0;
    const minSwipeDistance = 40;

    function handleSwipeEnd(endX, endY) {
        const diffX = endX - touchStartX;
        const diffY = endY - touchStartY;

        if (Math.max(Math.abs(diffX), Math.abs(diffY)) < minSwipeDistance) return;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) makeMove("right");
            else makeMove("left");
        } else {
            if (diffY > 0) makeMove("down");
            else makeMove("up");
        }
    }


    gridContainer.addEventListener('touchstart', e => {
        e.preventDefault();
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: false });

        gridContainer.addEventListener('touchend', e => {
        e.preventDefault();
        let touchEndX = e.changedTouches[0].screenX;
        let touchEndY = e.changedTouches[0].screenY;

        let dx = touchEndX - touchStartX;
        let dy = touchEndY - touchStartY;
        let moved = false;

        if (Math.abs(dx) > Math.abs(dy)) {
            if (dx > 30) makeMove("right");
            else if (dx < -30) makeMove("left");
        } else {
            if (dy > 30) makeMove("down");
            else if (dy < -30) makeMove("up");
        }
    }, { passive: false });

    createBoard();
}

// Global polling initializer fallback hook
const waitFor2048 = setInterval(() => {
    if (document.getElementById("grid-container")) {
        clearInterval(waitFor2048);
        init2048Game();
    }
}, 100);