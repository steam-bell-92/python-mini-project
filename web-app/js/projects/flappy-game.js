function getFlappyGameHTML() {
    return `
        <div class="project-content">
            <h2>🐦 Flappy Game</h2>
            
            <!-- START SCREEN -->
            <div id="flappyStartScreen" class="flappy-start-screen">
                <div class="flappy-instructions">
                    <h3>🎮 How to Play</h3>
                    <ul>
                        <li>👆 <strong>Click anywhere</strong> on the game screen to make the bird jump!</li>
                        <li>🚫 Avoid touching the neon purple pipes (balls).</li>
                        <li>⚡ Stay within the top and bottom bounds of the screen.</li>
                    </ul>
                    
                    <h3>🏆 Scoring System</h3>
                    <ul>
                        <li>⭐️ Earn <strong>1 point</strong> for every pipe you successfully dodge and pass.</li>
                    </ul>
                </div>
                
                <button id="flappyStartBtn" class="flappy-btn-action">▶️ Start Playing</button>
            </div>

            <!-- GAME SCREEN -->
            <div id="flappyGameScreen" class="flappy-container" style="display: none;">
                <div class="game-area">
                    <div id="flappy-canvas-wrapper">
                        <canvas id="flappyCanvas" width="400" height="400"></canvas>
                    </div>
                </div>
                <div class="flappy-controls">
                    <button id="flappyBackBtn" class="flappy-btn-action flappy-btn-secondary">🔙 Back to Menu</button>
                </div>
            </div>
        </div>
        <style>
            .flappy-start-screen {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 2rem;
                padding: 2rem;
                background: var(--surface-color);
                border-radius: 12px;
                border: 1px solid var(--border-color);
                margin: 1rem auto;
                max-width: 500px;
                box-shadow: 0 8px 30px rgba(0,0,0,0.12);
            }
            .flappy-instructions {
                width: 100%;
                color: var(--text-color);
            }
            .flappy-instructions h3 {
                color: var(--primary-color);
                margin-bottom: 1rem;
                border-bottom: 2px solid var(--border-color);
                padding-bottom: 0.5rem;
            }
            .flappy-instructions ul {
                margin-bottom: 1.5rem;
                padding-left: 1.5rem;
            }
            .flappy-instructions li {
                margin-bottom: 0.5rem;
                line-height: 1.5;
            }
            .flappy-btn-action {
                font-size: 1.2rem;
                padding: 1rem 3rem;
                background: var(--primary-color);
                color: white;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                transition: transform 0.2s, background 0.2s;
                font-weight: bold;
                box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
            }
            .flappy-btn-action:hover {
                transform: translateY(-2px);
                background: var(--primary-hover, #4f46e5);
            }
            .flappy-btn-secondary {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                color: var(--text-color);
                padding: 0.8rem 2rem;
                font-size: 1rem;
                box-shadow: none;
            }
            .flappy-btn-secondary:hover {
                background: var(--border-color);
            }
            .flappy-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px;
                font-family: Arial, sans-serif;
                gap: 1.5rem;
            }
            #flappy-canvas-wrapper {
                position: relative;
                border: 3px solid var(--border-color);
                background: #0f172a; /* Sleek dark slate background */
                overflow: hidden;
                width: 400px;
                height: 400px;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.15);
            }
            #flappyCanvas {
                display: block;
                cursor: pointer;
            }
            .flappy-controls {
                display: flex;
                gap: 1rem;
                justify-content: center;
                width: 100%;
            }
        </style>
    `;
}

function initFlappyGame() {
    const startScreen = document.getElementById('flappyStartScreen');
    const gameScreen = document.getElementById('flappyGameScreen');
    const startBtn = document.getElementById('flappyStartBtn');
    const backBtn = document.getElementById('flappyBackBtn');

    const canvas = document.getElementById('flappyCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // turtle coordinates: center is (0,0), x goes -200 to 200, y goes -200 to 200.
    // canvas coordinates: top-left is (0,0), x goes 0 to 400, y goes 0 to 400.
    // convert turtle(x,y) to canvas(cx,cy):
    // cx = x + 200
    // cy = 200 - y

    let bird = { x: 0, y: 0 };
    let balls = [];
    let score = 0;
    let gameOver = false;
    let gameLoop;

    function draw() {
        //clear screen
        ctx.fillStyle = '#0f172a'; // dark slate
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        //draw score
        ctx.fillStyle = 'white';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Score: ${score}`, 10, 20);

        //draw balls
        ctx.fillStyle = '#8b5cf6'; // neon purple
        balls.forEach(ball => {
            let cx = ball.x + 200;
            let cy = 200 - ball.y;
            ctx.beginPath();
            ctx.arc(cx, cy, 10, 0, Math.PI * 2);
            ctx.fill();
        });

        //draw bird
        let bx = bird.x + 200;
        let by = 200 - bird.y;

        ctx.fillStyle = gameOver ? '#ef4444' : '#06b6d4'; // neon red or cyan
        ctx.beginPath();
        ctx.arc(bx, by, 5, 0, Math.PI * 2);
        ctx.fill();

        //draw game over text
        if (gameOver) {
            ctx.fillStyle = 'white';
            ctx.textAlign = 'center';
            ctx.font = 'bold 24px Arial';
            ctx.fillText("💥 GAME OVER 💥", 200, 180);
            ctx.font = 'normal 14px Arial';
            ctx.fillText("🔄 Click anywhere to Play Again", 200, 220);
        }
    }

    function inside(p) {
        return -200 < p.x && p.x < 200 && -200 < p.y && p.y < 200;
    }

    function move() {
        if (gameOver) return;

        bird.y -= 5;

        balls.forEach(ball => {
            ball.x -= 3;
        });

        if (Math.floor(Math.random() * 10) === 0) {
            let y = Math.floor(Math.random() * 398) - 199;
            balls.push({ x: 199, y: y });
        }

        while (balls.length > 0 && !inside(balls[0])) {
            balls.shift();
            score += 1;
        }

        if (!inside(bird)) {
            gameOver = true;
            draw();
            return;
        }

        for (let i = 0; i < balls.length; i++) {
            let dx = balls[i].x - bird.x;
            let dy = balls[i].y - bird.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 15) {
                gameOver = true;
                draw();
                return;
            }
        }

        draw();
    }

    function resetGame() {
        gameOver = false;
        score = 0;
        bird = { x: 0, y: 0 };
        balls = [];
        if (gameLoop) clearInterval(gameLoop);
        gameLoop = setInterval(move, 50);
        draw();
    }

    function tap() {
        if (gameOver) {
            resetGame();
        } else {
            bird.y += 30;
        }
    }

    canvas.addEventListener('mousedown', tap);

    // UI Event Listeners
    startBtn.addEventListener('click', () => {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'flex';
        resetGame(); // Start the game
    });

    backBtn.addEventListener('click', () => {
        gameScreen.style.display = 'none';
        startScreen.style.display = 'flex';
        if (gameLoop) clearInterval(gameLoop);
    });

    const modalCloseBtn = document.getElementById('modalClose');
    if (modalCloseBtn) {
        const cleanup = () => {
            if (gameLoop) clearInterval(gameLoop);
            modalCloseBtn.removeEventListener('click', cleanup);
        };
        modalCloseBtn.addEventListener('click', cleanup);
    }
}
