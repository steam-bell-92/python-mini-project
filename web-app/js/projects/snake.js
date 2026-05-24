function getSnakeGameHTML() {
    return `
        <div class="project-content">
            <h2>🐍 Classic Snake Game</h2>
            <div class="snake-container">
                <div class="controls-top">
                    <div class="difficulty-box">
                        <label for="difficultySelect">Difficulty: </label>
                        <select id="difficultySelect">
                            <option value="easy">Easy (1x Score)</option>
                            <option value="medium" selected>Medium (2x Score)</option>
                            <option value="hard">Hard (3x Score)</option>
                        </select>
                    </div>
                </div>

                <div class="game-area">
                    <div id="canvas-wrapper" class="ui-canvas-frame">
                        <canvas id="snakeCanvas" width="600" height="400"></canvas>
                        <div id="pause-overlay" class="hidden">
                            <h1>⏸ PAUSED</h1>
                        </div>
                        
                        <div id="game-over-overlay" class="hidden">
                            <h1>GAME OVER!!</h1>
                            <p>Score: <span id="final-score">0</span></p>
                            <button id="overlayRestartBtn" class="btn-primary">Restart Game</button>
                        </div>
                    </div>

                    <div id="score-board">
                        <div class="score-card">
                            <span>Score</span>
                            <div id="score">0</div>
                        </div>
                        <div class="score-card high-score-card">
                            <span>Best</span>
                            <div id="best-score">0</div>
                        </div>
                    </div>
                </div>

                <div class="button-group">
                    <button id="startGameBtn" class="btn-primary">Start Game</button>
                    <button id="pauseGameBtn" class="btn-primary">Pause</button>
                    <button id="restartSnakeBtn" class="btn-primary">Restart Game</button>
                </div>
                <div class="instruction-box">
                    <p>Use arrow keys to control the snake.</p>
                    <p>Eat the red food to grow. Don't hit the walls or yourself!</p>
                </div>
            </div>
        </div>
        <style>
            .snake-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .controls-top {
                margin-bottom: 15px;
                margin-right: 140px; /* Aligns with canvas center offset */
            }
            .difficulty-box select {
                padding: 6px 10px;
                border-radius: 6px;
                border: 1px solid var(--accent-border, #ccc);
                background-color: #ffffff !important; /* Explicitly forces white background */
                color: #222222 !important;            /* Explicitly forces dark gray/black text */
                font-size: 14px;
                font-family: inherit;
                font-weight: 500;
                cursor: pointer;
                outline: none;
            }
            .difficulty-box select {
                padding: 4px 8px;
                border-radius: 4px;
                border: 1px solid #aaa;
                background-color: #ffffff;
                color: #222222;
                font-weight: normal;
                cursor: pointer;
            }
            .game-area {
                display: flex;
                align-items: flex-start;
                gap: 20px;
                margin-bottom: 25px;
                width: 100%;
                max-width: 850px;
                justify-content: center;
                flex-wrap: nowrap;
            }
            #canvas-wrapper {
                position: relative;
                border: 4px solid var(--success-color, #2ecc71);
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            }
            #snakeCanvas {
                background-color: var(--panel-color, #222);
                background-image: 
                    linear-gradient(var(--border-color, rgba(255,255,255,0.05)) 1px, transparent 1px),
                    linear-gradient(90deg, var(--border-color, rgba(255,255,255,0.05)) 1px, transparent 1px);
                background-size: 20px 20px;
                display: block;
                width: 100%;
                max-width: 600px;
                height: auto;
                touch-action: none;
            }
            #score-board {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            .score-card {
                background: var(--accent-soft, #fafafa);
                border: 1px solid var(--accent-border, #ddd);
                color: var(--text-color, #333);
                padding: 10px 25px;
                border-radius: 10px;
                text-align: center;
                min-width: 120px;
                box-shadow: var(--shadow, 0 4px 6px rgba(0,0,0,0.1));
            }
            .high-score-card {
                border-color: #f1c40f;
                background: rgba(241, 196, 15, 0.05);
            }
            .score-card span {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            .score-card div {
                font-size: 28px;
                font-weight: bold;
            }
            .button-group {
                display: flex;
                justify-content: center;
                gap: 30px;
                margin-top: 10px;
                margin-right: 140px;
            }
            .instruction-box {
                margin-top: 20px;
                margin-right: 140px;
                text-align: center;
                color: var(--text-secondary, #666);
                font-size: 15px;
            }
            #game-over-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: var(--overlay-color, rgba(0, 0, 0, 0.75));
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 10;
                color: var(--success-color, #2ecc71);
            }
            #game-over-overlay h1 { font-size: 3rem; margin-bottom: 10px; }
            .hidden { display: none !important; }
            .btn-primary {
                padding: 12px 25px;
                cursor: pointer;
            }
                #pause-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    color: white;
}

#pause-overlay h1 {
    font-size: 3rem;
}
        </style>
    `;
}

// --- GAME LOGIC STATE ---
let direction = { x: 0, y: 0 };
let speed = 9; // System baseline operational configuration state
let scoreMultiplier = 2; // Baseline multiplier scalar state
let score = 0;
let lastPaintTime = 0;
let isPaused = false;
let snakeArr = [{ x: 13, y: 10 }];
let food = { x: 6, y: 7 };

// Profile configuration mapping matrices
const CONFIG_DIFFICULTY = {
    easy: { speed: 5, multiplier: 1 },
    medium: { speed: 9, multiplier: 2 },
    hard: { speed: 14, multiplier: 3 }
};

function main(ctime) {
    const canvas = document.getElementById('snakeCanvas');
    if (!canvas) return; // Exit loop if the game modal has been closed

    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    if (!isPaused) {
        gameEngine();
    }
}

function isCollide(snake) {
    // Hits itself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }
    // Hits walls
    if (snake[0].x >= 30 || snake[0].x < 0 || snake[0].y >= 20 || snake[0].y < 0) return true;

    return false;
}

function applyDifficultySettings() {
    const selector = document.getElementById('difficultySelect');
    if (selector) {
        const value = selector.value;
        speed = CONFIG_DIFFICULTY[value].speed;
        scoreMultiplier = CONFIG_DIFFICULTY[value].multiplier;
    }
}

function updateBestScoreUI() {
    const bestScore = localStorage.getItem('snakeBestScore') || 0;
    const bestScoreElement = document.getElementById('best-score');
    if (bestScoreElement) {
        bestScoreElement.innerHTML = bestScore;
    }
}

function checkAndSaveHighScore() {
    const currentBest = parseInt(localStorage.getItem('snakeBestScore') || '0', 10);
    if (score > currentBest) {
        localStorage.setItem('snakeBestScore', score);
        updateBestScoreUI();
    }
}

function gameEngine() {
    if (isCollide(snakeArr)) {
        direction = { x: 0, y: 0 };
        document.getElementById('final-score').innerHTML = score;
        document.getElementById('game-over-overlay').classList.remove('hidden');

        // Execute persistent local evaluations
        checkAndSaveHighScore();

        // Restore controls visibility states
        const selector = document.getElementById('difficultySelect');
        if (selector) selector.disabled = false;

        return;
    }

    // Eating food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        score += (1 * scoreMultiplier); // Scaled multiplier calculations
        document.getElementById('score').innerHTML = score;
        snakeArr.unshift({ x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y });
        let a = 2, b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }

    // Moving snake (only if direction is set)
    if (direction.x !== 0 || direction.y !== 0) {
        for (let i = snakeArr.length - 2; i >= 0; i--) {
            snakeArr[i + 1] = { ...snakeArr[i] };
        }
        snakeArr[0].x += direction.x;
        snakeArr[0].y += direction.y;
    }

    const canvas = document.getElementById('snakeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Snake
    snakeArr.forEach((e, index) => {
        ctx.fillStyle = index === 0 ? "orange" : "#2ecc71";
        ctx.fillRect(e.x * 20, e.y * 20, 18, 18);
    });

    // Draw Food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * 20, food.y * 20, 18, 18);
}

function restartGame() {
    const selector = document.getElementById('difficultySelect');
    // Apply difficulty settings immediately so speed/score multiplier are correct on restart
    applyDifficultySettings();
    if (selector) selector.disabled = true;

    // Hide overlays
    const gameOver = document.getElementById('game-over-overlay');
    if (gameOver) gameOver.classList.add('hidden');
    const pauseOverlay = document.getElementById('pause-overlay');
    if (pauseOverlay) pauseOverlay.classList.add('hidden');

    // Reset core game state
    direction = { x: 1, y: 0 };
    snakeArr = [{ x: 13, y: 10 }];
    score = 0;
    isPaused = false;
    lastPaintTime = 0;

    // Reset UI
    const pauseBtn = document.getElementById('pauseGameBtn');
    if (pauseBtn) pauseBtn.textContent = 'Pause';
    const scoreEl = document.getElementById('score');
    if (scoreEl) scoreEl.innerHTML = score;

    // Place food randomly inside playfield bounds
    food = {
        x: Math.round(2 + (16 - 2) * Math.random()),
        y: Math.round(2 + (16 - 2) * Math.random())
    };
}
function togglePause() {
    const pauseOverlay = document.getElementById('pause-overlay');
    const pauseBtn = document.getElementById('pauseGameBtn');

    // Don't pause before game starts
    if (direction.x === 0 && direction.y === 0) return;

    isPaused = !isPaused;

    if (isPaused) {
        pauseOverlay.classList.remove('hidden');
        pauseBtn.textContent = 'Resume';
    } else {
        pauseOverlay.classList.add('hidden');
        pauseBtn.textContent = 'Pause';
    }
}

// Initialize execution listeners
function initSnakeGame() {
    window.requestAnimationFrame(main);

    // Set initial rendering metrics
    updateBestScoreUI();

    // Map difficulty listener parameters
    const selector = document.getElementById('difficultySelect');
    if (selector) {
        selector.addEventListener('change', applyDifficultySettings);
    }
    // Initialize standard values configuration parameters
    applyDifficultySettings();

    document.getElementById('startGameBtn').addEventListener('click', () => {
        restartGame();
    });

    document.getElementById('restartSnakeBtn').addEventListener('click', restartGame);
    document.getElementById('pauseGameBtn').addEventListener('click', togglePause);
    document.getElementById('overlayRestartBtn').addEventListener('click', restartGame);

    window.addEventListener('keydown', e => {
        // Disable difficulty selection once arrow keys are pressed
        if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            if (selector && !selector.disabled) {
                selector.disabled = true;
            }
        }
        if (e.code === 'Space' || e.key.toLowerCase() === 'p') {
            e.preventDefault();
            togglePause();
            return;
        }
        if (isPaused) return;
        switch (e.key) {
            case "ArrowUp": if (direction.y !== 1) { direction.x = 0; direction.y = -1; } break;
            case "ArrowDown": if (direction.y !== -1) { direction.x = 0; direction.y = 1; } break;
            case "ArrowLeft": if (direction.x !== 1) { direction.x = -1; direction.y = 0; } break;
            case "ArrowRight": if (direction.x !== -1) { direction.x = 1; direction.y = 0; } break;
        }
    });

    let touchStartX = 0;
    let touchStartY = 0;
    const canvas = document.getElementById('snakeCanvas');
    if (canvas) {
        canvas.addEventListener('touchstart', e => {
            e.preventDefault();
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        }, { passive: false });

        canvas.addEventListener('touchend', e => {
            e.preventDefault();
            let touchEndX = e.changedTouches[0].screenX;
            let touchEndY = e.changedTouches[0].screenY;

            let dx = touchEndX - touchStartX;
            let dy = touchEndY - touchStartY;

            if (Math.abs(dx) > Math.abs(dy)) {
                if (dx > 30 && direction.x !== -1) { direction.x = 1; direction.y = 0; }
                else if (dx < -30 && direction.x !== 1) { direction.x = -1; direction.y = 0; }
            } else {
                if (dy > 30 && direction.y !== -1) { direction.x = 0; direction.y = 1; }
                else if (dy < -30 && direction.y !== 1) { direction.x = 0; direction.y = -1; }
            }
        }, { passive: false });
    }
}

// Global scope assignments
window.getSnakeGameHTML = getSnakeGameHTML;
window.initSnakeGame = initSnakeGame;