function getsnakeGameHTML() {
    return `
        <div class="project-content">
            <h2>🐍 Classic Snake Game</h2>
            <div class="snake-container">
                <div class="game-area">
                    <div id="canvas-wrapper">
                        <canvas id="snakeCanvas" width="600" height="400"></canvas>
                        
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
                    </div>
                </div>

                <div class="button-group">
                    <button id="startGameBtn" class="btn-primary">Start Game</button>
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
                border: 4px solid #2ecc71;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            }
            #snakeCanvas {
                background-color: #1b262c;
                background-image: 
                    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
                background-size: 20px 20px;
                display: block;
            }
            #score-board {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            .score-card {
                background: linear-gradient(135deg, #2ecc71, #27ae60);
                color: white;
                padding: 10px 25px;
                border-radius: 10px;
                text-align: center;
                min-width: 120px;
                box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
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
                gap: 30px; /* Space between buttons fixed */
                margin-top: 10px;
                margin-right: 140px; /* Offset to align with canvas center */
            }
            .instruction-box {
                margin-top: 20px;
                margin-right: 140px;
                text-align: center;
                color: #7f8c8d;
                font-size: 15px;
            }
            #game-over-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(27, 38, 44, 0.9);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 10;
                color: #2ecc71;
            }
            #game-over-overlay h1 { font-size: 3rem; margin-bottom: 10px; }
            .hidden { display: none !important; }
            .btn-primary {
                background-color: #2ecc71;
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 8px;
                font-weight: bold;
                cursor: pointer;
                transition: 0.3s;
            }
            .btn-primary:hover {
                background-color: #27ae60;
                transform: translateY(-2px);
            }
        </style>
    `;
}

// --- GAME LOGIC ---
let direction = { x: 0, y: 0 };
let speed = 7;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 10 }];
let food = { x: 6, y: 7 };

function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
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

function gameEngine() {
    if (isCollide(snakeArr)) {
        direction = { x: 0, y: 0 };
        document.getElementById('final-score').innerHTML = score;
        document.getElementById('game-over-overlay').classList.remove('hidden');
        snakeArr = [{ x: 13, y: 10 }];
        score = 0;
        document.getElementById('score').innerHTML = score;
        return;
    }

    // Eating food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        score += 1;
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

// IMPORTANT: Function to initialize listeners after HTML is loaded
function initSnakeGame() {
    window.requestAnimationFrame(main);

    document.getElementById('startGameBtn').addEventListener('click', () => {
        direction = { x: 1, y: 0 }; // Start moving right
    });

    document.getElementById('restartSnakeBtn').addEventListener('click', () => {
        location.reload();
    });

    document.getElementById('overlayRestartBtn').addEventListener('click', () => {
        document.getElementById('game-over-overlay').classList.add('hidden');
        direction = { x: 0, y: 0 };
        snakeArr = [{ x: 13, y: 10 }];
        score = 0;
        document.getElementById('score').innerHTML = score;
    });

    window.addEventListener('keydown', e => {
        switch (e.key) {
            case "ArrowUp": if (direction.y !== 1) { direction.x = 0; direction.y = -1; } break;
            case "ArrowDown": if (direction.y !== -1) { direction.x = 0; direction.y = 1; } break;
            case "ArrowLeft": if (direction.x !== 1) { direction.x = -1; direction.y = 0; } break;
            case "ArrowRight": if (direction.x !== -1) { direction.x = 1; direction.y = 0; } break;
        }
    });
}
