function getFlappyGameHTML() {
    return `
        <div class="project-content">
            <h2>🐦 Flappy Bird - Enhanced</h2>

            <div id="flappyStartScreen" class="flappy-start-screen">
                <div class="flappy-instructions">
                    <h3>🎮 How to Play</h3>
                    <ul>
                        <li>Press <strong>SPACE</strong> or <strong>click</strong> to jump.</li>
                        <li>Avoid the green pipes.</li>
                        <li>Difficulty increases as your score grows!</li>
                        <li>Stay focused and enjoy the smooth gameplay.</li>
                    </ul>
                </div>

                <button id="flappyStartBtn" class="flappy-btn-action">▶️ Start Playing</button>
            </div>

            <div id="flappyGameScreen" class="flappy-container" style="display: none;">
                <div id="flappy-canvas-wrapper">
                    <canvas id="flappyCanvas" width="400" height="600"></canvas>
                    <div id="flappyGameOverlay" class="flappy-game-overlay" style="display: none;">
                        <div class="flappy-game-over-card">
                            <h2>Game Over!</h2>
                            <div class="flappy-score-display">
                                <div class="score-label">Final Score</div>
                                <div class="score-value" id="gameOverScore">0</div>
                            </div>
                            <div class="flappy-restart-hint">
                                Press <strong>SPACE</strong> or <strong>Click</strong> to Restart
                            </div>
                        </div>
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
                background: var(--surface-color, #ffffff);
                border-radius: 12px;
                border: 1px solid var(--border-color, #e5e7eb);
                margin: 1rem auto;
                max-width: 500px;
                box-shadow: 0 8px 30px rgba(0,0,0,0.12);
            }

            .flappy-instructions {
                width: 100%;
                color: var(--text-color, #111827);
            }

            .flappy-instructions h3 {
                color: var(--primary-color, #4f46e5);
                margin-bottom: 1rem;
                border-bottom: 2px solid var(--border-color, #e5e7eb);
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
                font-size: 1.1rem;
                padding: 0.9rem 2rem;
                background: var(--primary-color, #4f46e5);
                color: white;
                border: none;
                border-radius: 30px;
                cursor: pointer;
                font-weight: bold;
                transition: all 0.3s ease;
            }

            .flappy-btn-action:hover {
                transform: scale(1.05);
                box-shadow: 0 4px 12px rgba(79, 70, 229, 0.4);
            }

            .flappy-btn-secondary {
                background: var(--surface-color, #ffffff);
                border: 2px solid var(--border-color, #e5e7eb);
                color: var(--text-color, #111827);
                margin-top: 1rem;
            }

            .flappy-btn-secondary:hover {
                transform: scale(1.05);
                box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            }

            .flappy-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 10px;
                gap: 1rem;
            }

            #flappy-canvas-wrapper {
                position: relative;
                border: 3px solid var(--border-color);
                background: #0f172a;
                overflow: hidden;
                width: 100%;
                max-width: 400px;
                aspect-ratio: 2 / 3;
                border-radius: 8px;
                box-shadow: 0 10px 25px rgba(0,0,0,0.15);
                touch-action: none;
            }

            #flappyCanvas {
                display: block;
                cursor: pointer;
                width: 100%;
                height: 100%;
            }

            .flappy-game-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10;
                backdrop-filter: blur(2px);
            }

            .flappy-game-over-card {
                background: white;
                padding: 2rem;
                border-radius: 16px;
                text-align: center;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
                animation: slideUp 0.3s ease-out;
            }

            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .flappy-game-over-card h2 {
                color: #ef4444;
                font-size: 2rem;
                margin-bottom: 1.5rem;
                font-weight: bold;
            }

            .flappy-score-display {
                margin-bottom: 1.5rem;
                background: #f3f4f6;
                padding: 1.5rem;
                border-radius: 12px;
            }

            .score-label {
                font-size: 0.9rem;
                color: #6b7280;
                margin-bottom: 0.5rem;
                font-weight: 500;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            .score-value {
                font-size: 3rem;
                color: var(--primary-color, #4f46e5);
                font-weight: bold;
            }

            .flappy-restart-hint {
                font-size: 0.95rem;
                color: #374151;
                line-height: 1.5;
            }

            .flappy-controls {
                display: flex;
                gap: 1rem;
                justify-content: center;
            }
        </style>
    `;
}

function initFlappyGame() {
    const startScreen = document.getElementById("flappyStartScreen");
    const gameScreen = document.getElementById("flappyGameScreen");
    const startBtn = document.getElementById("flappyStartBtn");
    const backBtn = document.getElementById("flappyBackBtn");
    const canvas = document.getElementById("flappyCanvas");
    const gameOverlay = document.getElementById("flappyGameOverlay");
    const gameOverScore = document.getElementById("gameOverScore");

    if (!startScreen || !gameScreen || !startBtn || !backBtn || !canvas || !gameOverlay) {
        console.warn("Flappy Bird elements not found.");
        return;
    }

    const ctx = canvas.getContext("2d");
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;

    // ========== Color Palette ==========
    const SKY_GRADIENT_TOP = "#87CEEB";
    const SKY_GRADIENT_BOTTOM = "#E0F6FF";
    const GREEN_PIPE = "#22C55E";
    const DARK_GREEN_PIPE = "#16A34A";
    const YELLOW_BIRD = "#FBBF24";
    const ORANGE_BIRD = "#F97316";
    const WHITE = "#FFFFFF";
    const BLACK = "#000000";
    const CLOUD_COLOR = "#E8F4F8";
    const BUILDING_COLOR = "#8B7355";
    const GROUND_COLOR = "#9c7a3b";
    const DARK_GROUND = "#5e4322";

    // ========== Game States ==========
    const GAME_STATE = {
        IDLE: "idle",
        PLAYING: "playing",
        GAME_OVER: "gameover"
    };

    let currentState = GAME_STATE.IDLE;
    let elapsedTime = 0; // For idle animation and difficulty scaling

    // ========== Bird Physics ==========
    const bird = {
        x: 80,
        y: HEIGHT / 2,
        radius: 15,
        velocity: 0,
        gravity: 0.08,
        jumpStrength: -3.8,
        rotation: 0,
        targetRotation: 0
    };

    // ========== Pipe Configuration ==========
    const pipeConfig = {
        width: 60,
        gap: 200,
        minGap: 170,
        speedBase: 1.0,
        speedMax: 3.5,
        spawnDistance: 220
    };

    let pipes = [];
    let score = 0;
    let currentDifficulty = 1;
    let animationId = null;
    let lastInputTime = 0;

    // ========== Cloud Objects ==========
    const clouds = [
        { x: 80, y: 50, width: 60, height: 35, speed: 0.2 },
        { x: 200, y: 80, width: 50, height: 30, speed: 0.15 },
        { x: 320, y: 60, width: 70, height: 40, speed: 0.18 }
    ];

    // ========== Background Buildings ==========
    const buildings = [
        { x: 0, y: 450, width: 50, height: 150, speed: 0.25 },
        { x: 100, y: 470, width: 45, height: 130, speed: 0.25 },
        { x: 200, y: 460, width: 55, height: 140, speed: 0.25 },
        { x: 320, y: 480, width: 50, height: 120, speed: 0.25 }
    ];

    // ========== Ground Terrain ==========
    const groundTerrain = {
        offset: 0,
        speed: 0.8,
        height: 42
    };

    // ========== Utility: Calculate Current Pipe Speed Based on Score ==========
    function getPipeSpeed() {
        // Very gradual difficulty scaling: +0.02 speed per point (gentle curve)
        const baseSpeed = pipeConfig.speedBase + (score * 0.02);
        return Math.min(baseSpeed, pipeConfig.speedMax);
    }

    // ========== Utility: Calculate Current Difficulty ==========
    function updateDifficulty() {
        // Gradual scaling: reaches 1.5x at score 20
        currentDifficulty = 1 + Math.min(score * 0.025, 0.5);
    }

    // ========== Pipe Management ==========
    function createPipe() {
        // Very gradual gap reduction: -0.5 per point (gentle curve)
        const effectiveGap = pipeConfig.gap - (score * 0.5);
        const gap = Math.max(effectiveGap, pipeConfig.minGap);
        const gapY = Math.floor(Math.random() * ((HEIGHT - groundTerrain.height - 200) - 100 + 1)) + 100;
        pipes.push({ x: WIDTH, gapY: gapY, passed: false, width: pipeConfig.width });
    }

    // ========== Drawing Functions ==========
    function drawSkyGradient() {
        const gradient = ctx.createLinearGradient(0, 0, 0, HEIGHT - groundTerrain.height);
        gradient.addColorStop(0, SKY_GRADIENT_TOP);
        gradient.addColorStop(1, SKY_GRADIENT_BOTTOM);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, WIDTH, HEIGHT - groundTerrain.height);
    }

    function drawClouds() {
        clouds.forEach(cloud => {
            // Main cloud body
            ctx.fillStyle = CLOUD_COLOR;
            ctx.beginPath();
            ctx.arc(cloud.x, cloud.y, cloud.width * 0.4, 0, Math.PI * 2);
            ctx.arc(cloud.x + cloud.width * 0.3, cloud.y - cloud.height * 0.2, cloud.width * 0.45, 0, Math.PI * 2);
            ctx.arc(cloud.x + cloud.width * 0.6, cloud.y, cloud.width * 0.4, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    function drawBuildings() {
        buildings.forEach(building => {
            // Main building body
            ctx.fillStyle = BUILDING_COLOR;
            ctx.fillRect(building.x, building.y, building.width, building.height);

            // Windows
            ctx.fillStyle = "#FFE5B4";
            const windowSize = 8;
            const windowPadding = 3;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < Math.floor(building.height / 15); j++) {
                    ctx.fillRect(
                        building.x + windowPadding + i * 12,
                        building.y + windowPadding + j * 15,
                        windowSize,
                        windowSize
                    );
                }
            }
        });
    }

    function drawGround() {
        const groundY = HEIGHT - groundTerrain.height;

        // Brown dirt base
        ctx.fillStyle = "#9C7A3B";
        ctx.fillRect(0, groundY, WIDTH, groundTerrain.height);

        // Green grass layer on top
        ctx.fillStyle = "#8BC34A";
        ctx.fillRect(0, groundY, WIDTH, 12);

        // Slight darker grass border
        ctx.fillStyle = "#6FA83A";
        ctx.fillRect(0, groundY + 10, WIDTH, 3);

        // Simple scrolling dirt lines
        ctx.strokeStyle = "#7A5C2E";
        ctx.lineWidth = 2;

        for (let x = -40; x < WIDTH + 40; x += 40) {
            const moveX = x - (groundTerrain.offset % 40);

            ctx.beginPath();
            ctx.moveTo(moveX, groundY + 25);
            ctx.lineTo(moveX + 18, groundY + 25);
            ctx.stroke();
        }
    }
    
    function drawBird() {
        ctx.save();
        ctx.translate(bird.x, bird.y);

        // Smooth rotation interpolation
        bird.targetRotation = Math.min(Math.max(bird.velocity * 2.5, -35), 45);
        bird.rotation = bird.rotation * 0.85 + bird.targetRotation * 0.15; // Smooth interpolation
        ctx.rotate(bird.rotation * (Math.PI / 180));

        // Main body (yellow)
        ctx.fillStyle = YELLOW_BIRD;
        ctx.beginPath();
        ctx.ellipse(0, 0, bird.radius * 1.1, bird.radius, 0, 0, Math.PI * 2);
        ctx.fill();

        // Wing (orange)
        ctx.fillStyle = ORANGE_BIRD;
        ctx.beginPath();
        ctx.arc(-bird.radius * 0.4, 0, bird.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Eye
        ctx.fillStyle = BLACK;
        ctx.beginPath();
        ctx.arc(bird.radius * 0.3, -bird.radius * 0.3, 3, 0, Math.PI * 2);
        ctx.fill();

        // Pupil
        ctx.fillStyle = WHITE;
        ctx.beginPath();
        ctx.arc(bird.radius * 0.4, -bird.radius * 0.35, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Beak
        ctx.fillStyle = ORANGE_BIRD;
        ctx.beginPath();
        ctx.moveTo(bird.radius * 0.5, 0);
        ctx.lineTo(bird.radius * 0.8, -bird.radius * 0.3);
        ctx.lineTo(bird.radius * 0.8, bird.radius * 0.3);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    function drawBirdIdle() {
        // Floating animation in idle state
        const floatOffset = Math.sin(elapsedTime * 0.05) * 8;
        ctx.save();
        ctx.translate(bird.x, bird.y + floatOffset);

        // Main body
        ctx.fillStyle = YELLOW_BIRD;
        ctx.beginPath();
        ctx.ellipse(0, 0, bird.radius * 1.1, bird.radius, 0, 0, Math.PI * 2);
        ctx.fill();

        // Wing
        ctx.fillStyle = ORANGE_BIRD;
        ctx.beginPath();
        ctx.arc(-bird.radius * 0.4, 0, bird.radius * 0.6, 0, Math.PI * 2);
        ctx.fill();

        // Eye
        ctx.fillStyle = BLACK;
        ctx.beginPath();
        ctx.arc(bird.radius * 0.3, -bird.radius * 0.3, 3, 0, Math.PI * 2);
        ctx.fill();

        // Pupil
        ctx.fillStyle = WHITE;
        ctx.beginPath();
        ctx.arc(bird.radius * 0.4, -bird.radius * 0.35, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Beak
        ctx.fillStyle = ORANGE_BIRD;
        ctx.beginPath();
        ctx.moveTo(bird.radius * 0.5, 0);
        ctx.lineTo(bird.radius * 0.8, -bird.radius * 0.3);
        ctx.lineTo(bird.radius * 0.8, bird.radius * 0.3);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
    }

    function drawPipes() {
        const pipeSpeed = getPipeSpeed();
        pipes.forEach(pipe => {
            const bottomY = pipe.gapY + pipeConfig.gap;

            // Top pipe
            ctx.fillStyle = GREEN_PIPE;
            ctx.fillRect(pipe.x, 0, pipe.width, pipe.gapY);

            // Bottom pipe
            ctx.fillRect(pipe.x, bottomY, pipe.width, HEIGHT - groundTerrain.height - bottomY);

            // Pipe caps
            ctx.fillStyle = DARK_GREEN_PIPE;
            ctx.fillRect(pipe.x - 5, pipe.gapY - 15, pipe.width + 10, 15);
            ctx.fillRect(pipe.x - 5, bottomY, pipe.width + 10, 15);

            // Pipe shine effect
            ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
            ctx.fillRect(pipe.x + 5, 0, 8, pipe.gapY);
            ctx.fillRect(pipe.x + 5, bottomY, 8, HEIGHT - groundTerrain.height - bottomY);
        });
    }

    function drawScore() {
        // Score background
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
        ctx.fillRect(5, 5, 150, 50);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        ctx.lineWidth = 1;
        ctx.strokeRect(5, 5, 150, 50);

        // Score text
        ctx.fillStyle = WHITE;
        ctx.font = "bold 28px Arial";
        ctx.textAlign = "left";
        ctx.fillText(`Score: ${score}`, 15, 40);

        // Difficulty indicator
        ctx.font = "12px Arial";
        ctx.fillText(`Difficulty: ${currentDifficulty.toFixed(2)}x`, 15, 52);
    }

    function drawIdleScreen() {
        drawSkyGradient();
        drawClouds();
        drawBuildings();
        drawBirdIdle();
        drawGround();

        // Instruction text
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, HEIGHT / 2 - 40, WIDTH, 80);

        ctx.fillStyle = WHITE;
        ctx.font = "bold 20px Arial";
        ctx.textAlign = "center";
        ctx.fillText("Press SPACE or Click to Start", WIDTH / 2, HEIGHT / 2);
    }

    function drawGameOverOverlay() {
        gameOverScore.textContent = score;
        gameOverlay.style.display = "flex";
    }

    function hideGameOverOverlay() {
        gameOverlay.style.display = "none";
    }

    // ========== Collision Detection ==========
    function checkCollision() {
        // Check ground collision
        if (bird.y + bird.radius >= HEIGHT - groundTerrain.height) {
            return true;
        }

        // Check ceiling collision
        if (bird.y - bird.radius <= 0) {
            return true;
        }

        // Check pipe collision
        for (const pipe of pipes) {
            const birdLeft = bird.x - bird.radius;
            const birdRight = bird.x + bird.radius;
            const birdTop = bird.y - bird.radius;
            const birdBottom = bird.y + bird.radius;

            const pipeLeft = pipe.x;
            const pipeRight = pipe.x + pipe.width;
            const topPipeBottom = pipe.gapY;
            const bottomPipeTop = pipe.gapY + pipeConfig.gap;

            const insidePipeX = birdRight > pipeLeft && birdLeft < pipeRight;
            const hitTopPipe = birdTop < topPipeBottom;
            const hitBottomPipe = birdBottom > bottomPipeTop;

            if (insidePipeX && (hitTopPipe || hitBottomPipe)) {
                return true;
            }
        }

        return false;
    }

    // ========== Game Logic ==========
    function update() {
        elapsedTime++;

        if (currentState === GAME_STATE.IDLE) {
            // Still update scenery during idle for smooth animations
            clouds.forEach(cloud => {
                cloud.x -= cloud.speed;
                if (cloud.x + cloud.width < 0) {
                    cloud.x = WIDTH;
                }
            });
            buildings.forEach(building => {
                building.x -= building.speed * 0.6;
                if (building.x + building.width < 0) {
                    building.x = WIDTH;
                }
            });
            groundTerrain.offset = (groundTerrain.offset + groundTerrain.speed) % 20;
            return;
        }

        if (currentState === GAME_STATE.PLAYING) {
            // Update bird physics
            bird.velocity += bird.gravity;
            bird.y += bird.velocity;

            // Update pipes
            const pipeSpeed = getPipeSpeed();
            pipes.forEach(pipe => {
                pipe.x -= pipeSpeed;
            });

            // Update scenery parallax
            clouds.forEach(cloud => {
                cloud.x -= cloud.speed;
                if (cloud.x + cloud.width < 0) {
                    cloud.x = WIDTH;
                }
            });
            buildings.forEach(building => {
                building.x -= building.speed * 0.6;
                if (building.x + building.width < 0) {
                    building.x = WIDTH;
                }
            });
            groundTerrain.offset = (groundTerrain.offset + groundTerrain.speed) % 20;

            // Spawn new pipes
            if (pipes.length === 0 || pipes[pipes.length - 1].x < WIDTH - pipeConfig.spawnDistance) {
                createPipe();
            }

            // Remove off-screen pipes
            pipes = pipes.filter(pipe => pipe.x + pipe.width > 0);

            // Update score
            pipes.forEach(pipe => {
                if (!pipe.passed && pipe.x + pipe.width < bird.x) {
                    score++;
                    pipe.passed = true;
                    updateDifficulty();
                }
            });

            // Check collision
            if (checkCollision()) {
                currentState = GAME_STATE.GAME_OVER;
                drawGameOverOverlay();
            }
        }
    }

    function draw() {
        if (currentState === GAME_STATE.IDLE) {
            drawIdleScreen();
        } else if (currentState === GAME_STATE.PLAYING) {
            drawSkyGradient();
            drawClouds();
            drawBuildings();
            drawPipes();
            drawBird();
            drawGround();
            drawScore();
        }
    }

    function gameLoop() {
        update();
        draw();
        animationId = requestAnimationFrame(gameLoop);
    }

    function startGameplay() {
        currentState = GAME_STATE.PLAYING;
        bird.velocity = 0;
    }

    function resetGame() {
        bird.y = HEIGHT / 2;
        bird.velocity = 0;
        bird.rotation = 0;
        pipes = [];
        score = 0;
        currentDifficulty = 1;
        elapsedTime = 0;
        currentState = GAME_STATE.IDLE;
        hideGameOverOverlay();
    }

    // ========== Input Handling (Deduplicated) ==========
    function handleInput() {
        const now = Date.now();
        if (now - lastInputTime < 100) return; // Debounce inputs
        lastInputTime = now;

        if (currentState === GAME_STATE.IDLE) {
            startGameplay();
        } else if (currentState === GAME_STATE.PLAYING) {
            bird.velocity = bird.jumpStrength;
        } else if (currentState === GAME_STATE.GAME_OVER) {
            resetGame(); // Return to idle state first
        }
    }

    function handleKeyDown(event) {
        if (gameScreen.style.display === "none") return;
        if (event.code === "Space") {
            event.preventDefault();
            handleInput();
        }
    }

    // ========== Event Listeners ==========
    startBtn.addEventListener("click", function () {
        startScreen.style.display = "none";
        gameScreen.style.display = "flex";
        resetGame();
        gameLoop();
    });

    backBtn.addEventListener("click", function () {
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
        gameScreen.style.display = "none";
        startScreen.style.display = "flex";
        resetGame();
    });

    // Single click handler (no duplicates)
    canvas.addEventListener("click", handleInput, { once: false });
    gameOverlay.addEventListener("click", handleInput, { once: false });
    document.addEventListener("keydown", handleKeyDown);
}