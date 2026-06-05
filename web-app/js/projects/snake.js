// ============================================
// SNAKE GAME - Fully Working Version
// ============================================

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
            }
            .difficulty-box select {
                padding: 6px 10px;
                border-radius: 6px;
                border: 1px solid #ccc;
                background-color: #ffffff;
                color: #222222;
                font-size: 14px;
                cursor: pointer;
            }
            .game-area {
                display: flex;
                align-items: flex-start;
                gap: 20px;
                margin-bottom: 25px;
                justify-content: center;
                flex-wrap: wrap;
            }
            #canvas-wrapper {
                position: relative;
                border: 4px solid #2ecc71;
                border-radius: 12px;
                overflow: hidden;
            }
            #snakeCanvas {
                background-color: #1a1a2e;
                display: block;
            }
            #score-board {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            .score-card {
                background: #fafafa;
                border: 1px solid #ddd;
                color: #333;
                padding: 10px 25px;
                border-radius: 10px;
                text-align: center;
                min-width: 120px;
            }
            .high-score-card {
                border-color: #f1c40f;
            }
            .score-card span {
                font-size: 12px;
                text-transform: uppercase;
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
            }
            .instruction-box {
                margin-top: 20px;
                text-align: center;
                color: #666;
                font-size: 15px;
            }
            #game-over-overlay, #pause-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 10;
                color: #2ecc71;
            }
            #game-over-overlay h1, #pause-overlay h1 {
                font-size: 2rem;
                margin-bottom: 10px;
            }
            .hidden { display: none !important; }
            .btn-primary {
                padding: 12px 25px;
                cursor: pointer;
                background: #2ecc71;
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 16px;
            }
            .btn-primary:hover {
                background: #27ae60;
            }
        </style>
    `;
}

// Game state variables
let snakeArr = [{ x: 13, y: 10 }];
let food = { x: 6, y: 7 };
let direction = { x: 1, y: 0 };
let score = 0;
let speed = 9;
let scoreMultiplier = 2;
let isPaused = false;
let isGameOver = false;
let gameRunning = false;
let animationId = null;
let lastPaintTime = 0;

const CONFIG_DIFFICULTY = {
    easy: { speed: 5, multiplier: 1 },
    medium: { speed: 9, multiplier: 2 },
    hard: { speed: 14, multiplier: 3 }
};

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
        bestScoreElement.textContent = bestScore;
    }
}

function checkAndSaveHighScore() {
    const currentBest = parseInt(localStorage.getItem('snakeBestScore') || '0', 10);
    if (score > currentBest) {
        localStorage.setItem('snakeBestScore', score);
        updateBestScoreUI();
    }
}

function isCollide(snake) {
    // Hit itself
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }
    // Hit walls
    if (snake[0].x >= 30 || snake[0].x < 0 || snake[0].y >= 20 || snake[0].y < 0) return true;
    return false;
}

function gameEngine() {
    if (!gameRunning || isPaused) return;
    
    if (isCollide(snakeArr)) {
        gameRunning = false;
        isGameOver = true;
        document.getElementById('final-score').textContent = score;
        document.getElementById("game-over-overlay").classList.remove("hidden");
        checkAndSaveHighScore();
        const selector = document.getElementById('difficultySelect');
        if (selector) selector.disabled = false;
        if (animationId) cancelAnimationFrame(animationId);
        animationId = null;
        return;
    }
    
    // Eat food
    if (snakeArr[0].x === food.x && snakeArr[0].y === food.y) {
        score += (1 * scoreMultiplier);
        document.getElementById('score').textContent = score;
        snakeArr.unshift({ x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y });
        food = {
            x: Math.round(2 + (16 - 2) * Math.random()),
            y: Math.round(2 + (16 - 2) * Math.random())
        };
    }
    
    // Move snake
    if ((direction.x !== 0 || direction.y !== 0) && gameRunning) {
        for (let i = snakeArr.length - 2; i >= 0; i--) {
            snakeArr[i + 1] = { ...snakeArr[i] };
        }
        snakeArr[0].x += direction.x;
        snakeArr[0].y += direction.y;
    }
    
    // Draw
    const canvas = document.getElementById('snakeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw snake
    snakeArr.forEach((e, index) => {
        ctx.fillStyle = index === 0 ? "orange" : "#2ecc71";
        ctx.fillRect(e.x * 20, e.y * 20, 18, 18);
    });
    
    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * 20, food.y * 20, 18, 18);
}

function gameLoop() {
    gameEngine();
    animationId = requestAnimationFrame(gameLoop);
}

function restartGame() {
    // Reset state
    direction = { x: 1, y: 0 };
    snakeArr = [{ x: 13, y: 10 }];
    score = 0;
    isPaused = false;
    isGameOver = false;
    gameRunning = true;
    
    // Reset UI
    document.getElementById('score').textContent = '0';
    document.getElementById('game-over-overlay').classList.add('hidden');
    document.getElementById('pause-overlay').classList.add('hidden');
    
    // Random food
    food = {
        x: Math.round(2 + (16 - 2) * Math.random()),
        y: Math.round(2 + (16 - 2) * Math.random())
    };
    
    applyDifficultySettings();
}

function togglePause() {
    if (!gameRunning) return;
    
    isPaused = !isPaused;
    const pauseOverlay = document.getElementById('pause-overlay');
    const pauseBtn = document.getElementById('pauseGameBtn');
    
    if (isPaused) {
        pauseOverlay.classList.remove('hidden');
        if (pauseBtn) pauseBtn.textContent = 'Resume';
    } else {
        pauseOverlay.classList.add('hidden');
        if (pauseBtn) pauseBtn.textContent = 'Pause';
    }
}

function startGame() {
    if (gameRunning) return;
    restartGame();
    if (!animationId) {
        animationId = requestAnimationFrame(gameLoop);
    }
}

function initSnakeGame() {
    console.log('🐍 Initializing Snake Game...');
    
    // Reset all state
    gameRunning = false;
    isPaused = false;
    isGameOver = false;
    direction = { x: 1, y: 0 };
    snakeArr = [{ x: 13, y: 10 }];
    score = 0;
    
    // Update UI
    const scoreEl = document.getElementById('score');
    if (scoreEl) scoreEl.textContent = '0';
    
    document.getElementById('game-over-overlay')?.classList.add('hidden');
    document.getElementById('pause-overlay')?.classList.add('hidden');
    
    // Random food
    food = {
        x: Math.round(2 + (16 - 2) * Math.random()),
        y: Math.round(2 + (16 - 2) * Math.random())
    };
    
    applyDifficultySettings();
    updateBestScoreUI();
    
    // Set up event listeners
    const startBtn = document.getElementById('startGameBtn');
    const restartBtn = document.getElementById('restartSnakeBtn');
    const pauseBtn = document.getElementById('pauseGameBtn');
    const overlayBtn = document.getElementById('overlayRestartBtn');
    const selector = document.getElementById('difficultySelect');
    
    if (startBtn) {
        const newStart = startBtn.cloneNode(true);
        startBtn.parentNode.replaceChild(newStart, startBtn);
        newStart.addEventListener('click', startGame);
    }
    
    if (restartBtn) {
        const newRestart = restartBtn.cloneNode(true);
        restartBtn.parentNode.replaceChild(newRestart, restartBtn);
        newRestart.addEventListener('click', () => { restartGame(); });
    }
    
    if (pauseBtn) {
        const newPause = pauseBtn.cloneNode(true);
        pauseBtn.parentNode.replaceChild(newPause, pauseBtn);
        newPause.addEventListener('click', togglePause);
    }
    
    if (overlayBtn) {
        const newOverlay = overlayBtn.cloneNode(true);
        overlayBtn.parentNode.replaceChild(newOverlay, overlayBtn);
        newOverlay.addEventListener('click', startGame);
    }
    
    if (selector) {
        const newSelector = selector.cloneNode(true);
        selector.parentNode.replaceChild(newSelector, selector);
        newSelector.addEventListener('change', () => {
            if (!gameRunning) {
                applyDifficultySettings();
            }
        });
    }
    
    // Keyboard controls
    const handleKeydown = (e) => {
        if (!gameRunning || isPaused) return;
        switch (e.key) {
            case "ArrowUp": if (direction.y !== 1) { direction.x = 0; direction.y = -1; } break;
            case "ArrowDown": if (direction.y !== -1) { direction.x = 0; direction.y = 1; } break;
            case "ArrowLeft": if (direction.x !== 1) { direction.x = -1; direction.y = 0; } break;
            case "ArrowRight": if (direction.x !== -1) { direction.x = 1; direction.y = 0; } break;
            case " ":
            case "p":
            case "P":
                e.preventDefault();
                togglePause();
                break;
        }
    };
    
    document.removeEventListener('keydown', handleKeydown);
    document.addEventListener('keydown', handleKeydown);
    
    // Draw initial board
    const canvas = document.getElementById('snakeCanvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = "#1a1a2e";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    console.log('✅ Snake Game initialized');
}

// Register globally
window.getSnakeGameHTML = getSnakeGameHTML;
window.initSnakeGame = initSnakeGame;

console.log('✅ Snake Game module loaded');