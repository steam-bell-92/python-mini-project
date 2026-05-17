function getSpotTheDifferenceHTML() {
    return `
        <div class="project-content">
            <h2>🔍 Spot the Difference</h2>
            <!-- START SCREEN -->
            <div id="stdStartScreen" style="display: flex; flex-direction: column; align-items: center; gap: 2rem; padding: 2rem 0;">
                <h3 style="margin: 0;">Choose Your Difficulty</h3>
                <div class="std-difficulty">
                    <button class="std-btn active" data-diff="easy">Easy (3)</button>
                    <button class="std-btn" data-diff="medium">Medium (5)</button>
                    <button class="std-btn" data-diff="hard">Hard (7)</button>
                </div>
                <button class="std-btn-action" id="stdStartPlayingBtn" style="font-size: 1.2rem; padding: 1rem 3rem; background: var(--primary-color); color: white;">Start Playing</button>
            </div>

            <!-- GAME SCREEN -->
            <div id="stdGameScreen" style="display: none;">
                <div class="std-controls">
                    <div class="std-stats">
                        <div class="std-stat">Time: <span id="stdTimer">00:00</span></div>
                        <div class="std-stat">Found: <span id="stdFound">0</span> / <span id="stdTotal">3</span></div>
                    </div>
                    <div class="std-actions">
                        <button class="std-btn-action" id="stdHintBtn">💡 Hint</button>
                        <button class="std-btn-action" id="stdGiveUpBtn">Show Answers</button>
                    </div>
                </div>
                
                <div class="std-game-area">
                    <div class="std-canvas-container">
                        <h3 class="std-canvas-label">Original 🖼️</h3>
                        <canvas id="stdCanvasLeft" width="400" height="400"></canvas>
                    </div>
                    <div class="std-canvas-container">
                        <h3 class="std-canvas-label">Find Differences 🔍</h3>
                        <canvas id="stdCanvasRight" width="400" height="400"></canvas>
                    </div>
                </div>
            </div>
            
            <div class="std-win-overlay" id="stdWinOverlay" style="display: none;">
                <div class="std-win-content">
                    <h3>🎉 You Found Them All! 🎉</h3>
                    <p>Differences: <span id="stdWinFound">0</span></p>
                    <p>Time: <span id="stdWinTime">00:00</span></p>
                    <div class="std-actions" style="justify-content: center; margin-top: 1rem;">
                        <button class="std-btn-action" id="stdPlayAgainBtn">Play Again</button>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .std-controls {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                margin-bottom: 2rem;
                align-items: center;
            }
            .std-difficulty {
                display: flex;
                gap: 0.5rem;
            }
            .std-btn, .std-btn-action {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                color: var(--text-color);
                padding: 0.5rem 1rem;
                border-radius: 8px;
                cursor: pointer;
                transition: var(--transition);
                font-weight: bold;
            }
            .std-btn.active {
                background: var(--primary-color);
                color: white;
                border-color: var(--primary-color);
            }
            .std-btn:hover, .std-btn-action:hover {
                border-color: var(--primary-color);
            }
            .std-stats {
                display: flex;
                gap: 2rem;
                font-size: 1.2rem;
                font-weight: bold;
            }
            .std-actions {
                display: flex;
                gap: 1rem;
            }
            .std-game-area {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: nowrap;
                position: relative;
                width: 100%;
            }
            .std-canvas-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                flex: 1;
                min-width: 0;
            }
            .std-canvas-label {
                margin: 0;
                color: var(--text-color);
            }
            canvas {
                border: 4px solid var(--border-color);
                border-radius: 12px;
                cursor: crosshair;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                width: 100%;
                max-width: 400px;
                height: auto;
            }
            #stdCanvasRight {
                cursor: crosshair;
            }
            .std-win-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 12px;
                z-index: 10;
            }
            .std-win-content {
                background: var(--surface-color);
                padding: 2rem;
                border-radius: 15px;
                text-align: center;
                box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            }
            .std-win-content h3 {
                color: var(--primary-color);
                margin-top: 0;
            }
            @media (max-width: 768px) {
                .std-game-area {
                    flex-direction: column;
                    align-items: center;
                }
            }
        </style>
    `;
}

function initSpotTheDifference() {
    const canvasL = document.getElementById('stdCanvasLeft');
    const canvasR = document.getElementById('stdCanvasRight');
    if (!canvasL || !canvasR) return;
    const ctxL = canvasL.getContext('2d');
    const ctxR = canvasR.getContext('2d');
    
    const diffBtns = document.querySelectorAll('.std-btn');
    const hintBtn = document.getElementById('stdHintBtn');
    const giveUpBtn = document.getElementById('stdGiveUpBtn');
    const playAgainBtn = document.getElementById('stdPlayAgainBtn');
    const timerEl = document.getElementById('stdTimer');
    const foundEl = document.getElementById('stdFound');
    const totalEl = document.getElementById('stdTotal');
    const winOverlay = document.getElementById('stdWinOverlay');
    const winFoundEl = document.getElementById('stdWinFound');
    const winTimeEl = document.getElementById('stdWinTime');
    
    let difficulty = 'easy';
    let differences = [];
    let foundDifferences = new Set();
    let timer = null;
    let seconds = 0;
    let isGameOver = false;
    let activeHint = null;
    let clickAnimations = [];
    let animationFrameId = null;
    
    // EASY: House Scene
    const EASY_CONFIG = {
        sun: { x: 50, y: 50, radius: 30, color: '#FFD700', diffColor: '#FFA500', diffRadius: 40 },
        cloud1: { x: 150, y: 60 },
        cloud2: { x: 300, y: 40 },
        house: { x: 100, y: 200, width: 140, height: 120, color: '#f4f4f4', diffColor: '#e0e0e0' },
        roof: { color: '#cd5c5c', diffColor: '#4169e1' },
        door: { x: 150, y: 260, w: 40, h: 60, color: '#8b4513', diffColor: '#654321' },
        window: { x: 110, y: 230, w: 30, h: 30, color: '#87cefa', diffColor: '#4682b4' },
        tree1: { x: 300, y: 150, trunkW: 20, trunkH: 60, leavesR: 40 },
        tree2: { x: 350, y: 180, trunkW: 15, trunkH: 40, leavesR: 30 },
        fence: { color: '#deb887', diffColor: '#d2b48c' },
        bird: { x: 200, y: 100 },
        flower: { x: 50, y: 340, color: '#ff69b4', diffColor: '#ff1493' }
    };
    
    const EASY_DIFFERENCES = [
        { id: 'roofColor', x: 170, y: 170, r: 50 },
        { id: 'cloud1Removed', x: 150, y: 60, r: 40 },
        { id: 'doorColor', x: 170, y: 290, r: 35 },
        { id: 'flowerRemoved', x: 50, y: 340, r: 30 },
        { id: 'sunSize', x: 50, y: 50, r: 40 },
        { id: 'birdRemoved', x: 200, y: 100, r: 30 }
    ];

    // MEDIUM: City Scene
    const MEDIUM_DIFFERENCES = [
        { id: 'carColor', x: 200, y: 320, r: 40 },
        { id: 'trafficLight', x: 80, y: 200, r: 30 },
        { id: 'missingWindow', x: 60, y: 180, r: 25 },
        { id: 'extraCloud', x: 320, y: 70, r: 30 },
        { id: 'antennaRemoved', x: 310, y: 50, r: 25 },
        { id: 'moonSize', x: 60, y: 50, r: 30 },
        { id: 'buildingColor', x: 300, y: 200, r: 60 }
    ];

    // HARD: Space Scene
    const HARD_DIFFERENCES = [
        { id: 'planetColor', x: 300, y: 100, r: 50 },
        { id: 'spaceshipWindow', x: 200, y: 180, r: 25 },
        { id: 'missingStar', x: 80, y: 80, r: 20 },
        { id: 'craterSize', x: 100, y: 350, r: 30 },
        { id: 'satelliteRemoved', x: 350, y: 240, r: 30 },
        { id: 'flameSize', x: 200, y: 280, r: 35 },
        { id: 'extraAsteroid', x: 150, y: 50, r: 25 },
        { id: 'craterMoved', x: 250, y: 330, r: 30 }
    ];
    
    function startGame(diff) {
        difficulty = diff;
        const diffCounts = { easy: 3, medium: 5, hard: 7 };
        const numDiffs = diffCounts[difficulty];
        
        let available = [];
        if (difficulty === 'easy') available = [...EASY_DIFFERENCES];
        else if (difficulty === 'medium') available = [...MEDIUM_DIFFERENCES];
        else available = [...HARD_DIFFERENCES];
        
        available.sort(() => Math.random() - 0.5);
        differences = available.slice(0, numDiffs);
        
        foundDifferences.clear();
        isGameOver = false;
        clickAnimations = [];
        activeHint = null;
        winOverlay.style.display = 'none';
        
        foundEl.textContent = '0';
        totalEl.textContent = numDiffs;
        
        resetTimer();
        startTimer();
        
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        drawGame();
    }
    
    function resetTimer() {
        if (timer) clearInterval(timer);
        seconds = 0;
        updateTimerDisplay();
    }
    
    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            updateTimerDisplay();
        }, 1000);
    }
    
    function updateTimerDisplay() {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        timerEl.textContent = `${m}:${s}`;
    }
    
    function hasDiff(id) {
        return differences.some(d => d.id === id);
    }
    
    function isFound(id) {
        return foundDifferences.has(id);
    }
    
    function drawGame() {
        ctxL.clearRect(0, 0, canvasL.width, canvasL.height);
        ctxR.clearRect(0, 0, canvasR.width, canvasR.height);
        
        drawScene(ctxL, false);
        drawScene(ctxR, true);
        
        drawOverlays(ctxL, false);
        drawOverlays(ctxR, true);
        
        if (!isGameOver || clickAnimations.length > 0) {
            animationFrameId = requestAnimationFrame(drawGame);
        } else {
            drawOverlays(ctxL, false);
            drawOverlays(ctxR, true);
        }
    }
    
    function drawScene(ctx, isRight) {
        if (difficulty === 'easy') {
            drawEasyScene(ctx, isRight);
        } else if (difficulty === 'medium') {
            drawMediumScene(ctx, isRight);
        } else {
            drawHardScene(ctx, isRight);
        }
    }

    function drawEasyScene(ctx, isRight) {
        // Background Sky
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, 400, 400);

        // Ground
        ctx.fillStyle = '#90EE90';
        ctx.fillRect(0, 320, 400, 80);
        
        // Sun
        let sun = EASY_CONFIG.sun;
        let sR = (isRight && hasDiff('sunSize')) ? sun.diffRadius : sun.radius;
        ctx.fillStyle = sun.color;
        ctx.beginPath();
        ctx.arc(sun.x, sun.y, sR, 0, Math.PI * 2);
        ctx.fill();
        
        // Clouds
        ctx.fillStyle = '#ffffff';
        if (!(isRight && hasDiff('cloud1Removed'))) {
            drawCloud(ctx, EASY_CONFIG.cloud1.x, EASY_CONFIG.cloud1.y);
        }
        drawCloud(ctx, EASY_CONFIG.cloud2.x, EASY_CONFIG.cloud2.y);
        
        // Bird
        if (!(isRight && hasDiff('birdRemoved'))) {
            drawBird(ctx, EASY_CONFIG.bird.x, EASY_CONFIG.bird.y);
        }
        
        // Fence
        let fColor = (isRight && hasDiff('fenceColor')) ? EASY_CONFIG.fence.diffColor : EASY_CONFIG.fence.color;
        ctx.fillStyle = fColor;
        for (let i = 0; i < 400; i += 20) {
            ctx.fillRect(i, 300, 10, 40);
        }
        ctx.fillRect(0, 310, 400, 5);
        ctx.fillRect(0, 325, 400, 5);
        
        // House Base
        let h = EASY_CONFIG.house;
        let hColor = (isRight && hasDiff('subtleHouseColor')) ? h.diffColor : h.color;
        ctx.fillStyle = hColor;
        ctx.fillRect(h.x, h.y, h.width, h.height);
        
        // Roof
        let rColor = (isRight && hasDiff('roofColor')) ? EASY_CONFIG.roof.diffColor : EASY_CONFIG.roof.color;
        ctx.fillStyle = rColor;
        ctx.beginPath();
        ctx.moveTo(h.x - 10, h.y);
        ctx.lineTo(h.x + h.width / 2, h.y - 60);
        ctx.lineTo(h.x + h.width + 10, h.y);
        ctx.closePath();
        ctx.fill();
        
        // Door
        let d = EASY_CONFIG.door;
        let dColor = (isRight && hasDiff('doorColor')) ? d.diffColor : d.color;
        ctx.fillStyle = dColor;
        ctx.fillRect(d.x, d.y, d.w, d.h);
        ctx.fillStyle = '#ffd700'; // knob
        ctx.beginPath();
        ctx.arc(d.x + 30, d.y + 30, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Window 1
        let w = EASY_CONFIG.window;
        drawWindow(ctx, w.x, w.y, w.w, w.h, w.color);
        
        // Window 2 (Added)
        if (isRight && hasDiff('extraWindow')) {
            drawWindow(ctx, w.x + 75, w.y, w.w, w.h, w.color);
        }
        
        // Trees
        let t1 = EASY_CONFIG.tree1;
        let t1x = (isRight && hasDiff('tree1Moved')) ? t1.x - 20 : t1.x;
        drawTree(ctx, t1x, t1.y, t1.trunkW, t1.trunkH, t1.leavesR);
        
        let t2 = EASY_CONFIG.tree2;
        drawTree(ctx, t2.x, t2.y, t2.trunkW, t2.trunkH, t2.leavesR);
        
        // Flower
        if (!(isRight && hasDiff('flowerRemoved'))) {
            drawFlower(ctx, EASY_CONFIG.flower.x, EASY_CONFIG.flower.y, EASY_CONFIG.flower.color);
        }
    }

    function drawMediumScene(ctx, isRight) {
        // Background Sky
        ctx.fillStyle = '#4682B4'; // Steel Blue
        ctx.fillRect(0, 0, 400, 400);

        // Ground (Road)
        ctx.fillStyle = '#696969'; // Dim Gray
        ctx.fillRect(0, 250, 400, 150);
        
        // Road Lines
        ctx.fillStyle = '#FFD700';
        for (let i = 10; i < 400; i += 60) {
            ctx.fillRect(i, 315, 40, 10);
        }

        // Moon
        let mR = (isRight && hasDiff('moonSize')) ? 40 : 25;
        ctx.fillStyle = '#F0F8FF';
        ctx.beginPath();
        ctx.arc(60, 50, mR, 0, Math.PI * 2);
        ctx.fill();

        // Clouds
        ctx.fillStyle = '#ffffff';
        drawCloud(ctx, 150, 40);
        if (isRight && hasDiff('extraCloud')) {
            drawCloud(ctx, 320, 70);
        }

        // Buildings
        ctx.fillStyle = '#A9A9A9';
        ctx.fillRect(20, 100, 100, 150);
        
        let bColor = (isRight && hasDiff('buildingColor')) ? '#808080' : '#778899';
        ctx.fillStyle = bColor;
        ctx.fillRect(250, 80, 120, 170);

        // Building Windows
        ctx.fillStyle = '#FFD700'; // Lights on
        ctx.fillRect(40, 120, 20, 30);
        ctx.fillRect(80, 120, 20, 30);
        if (!(isRight && hasDiff('missingWindow'))) {
            ctx.fillRect(40, 170, 20, 30);
        }
        ctx.fillRect(80, 170, 20, 30);

        ctx.fillRect(270, 100, 25, 25);
        ctx.fillRect(320, 100, 25, 25);
        ctx.fillRect(270, 150, 25, 25);
        ctx.fillRect(320, 150, 25, 25);
        ctx.fillRect(270, 200, 25, 25);
        ctx.fillRect(320, 200, 25, 25);

        // Antenna
        if (!(isRight && hasDiff('antennaRemoved'))) {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(310, 80);
            ctx.lineTo(310, 30);
            ctx.moveTo(310, 45);
            ctx.lineTo(290, 25);
            ctx.moveTo(310, 45);
            ctx.lineTo(330, 25);
            ctx.stroke();
        }

        // Traffic Light
        ctx.fillStyle = '#333';
        ctx.fillRect(70, 180, 20, 50);
        ctx.fillRect(78, 230, 4, 20); // pole
        let tlColor = (isRight && hasDiff('trafficLight')) ? '#00FF00' : '#FF0000';
        ctx.fillStyle = tlColor;
        ctx.beginPath();
        ctx.arc(80, 195, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = tlColor === '#00FF00' ? '#FF0000' : '#00FF00';
        ctx.beginPath();
        ctx.arc(80, 215, 6, 0, Math.PI * 2);
        ctx.fill();

        // Car
        let cColor = (isRight && hasDiff('carColor')) ? '#FF4500' : '#1E90FF';
        ctx.fillStyle = cColor;
        ctx.fillRect(150, 290, 100, 40); // Body
        ctx.fillRect(170, 260, 60, 30);  // Roof
        
        ctx.fillStyle = '#ADD8E6'; // Car Windows
        ctx.fillRect(175, 265, 20, 25);
        ctx.fillRect(205, 265, 20, 25);

        ctx.fillStyle = '#000'; // Wheels
        ctx.beginPath();
        ctx.arc(170, 330, 15, 0, Math.PI * 2);
        ctx.arc(230, 330, 15, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#FFF'; // Hubcaps
        ctx.beginPath();
        ctx.arc(170, 330, 5, 0, Math.PI * 2);
        ctx.arc(230, 330, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawHardScene(ctx, isRight) {
        // Background Space
        ctx.fillStyle = '#0B0B1A';
        ctx.fillRect(0, 0, 400, 400);

        // Stars
        ctx.fillStyle = '#FFF';
        const stars = [
            [20, 30], [100, 50], [250, 20], [350, 80],
            [40, 150], [120, 120], [300, 180], [380, 200]
        ];
        stars.forEach(s => {
            ctx.beginPath();
            ctx.arc(s[0], s[1], 2, 0, Math.PI * 2);
            ctx.fill();
        });

        // Missing Star
        if (!(isRight && hasDiff('missingStar'))) {
            ctx.beginPath();
            ctx.arc(80, 80, 3, 0, Math.PI * 2);
            ctx.fill();
        }

        // Background Planet
        let pColor = (isRight && hasDiff('planetColor')) ? '#8A2BE2' : '#DC143C';
        ctx.fillStyle = pColor;
        ctx.beginPath();
        ctx.arc(300, 100, 40, 0, Math.PI * 2);
        ctx.fill();
        
        // Planet Rings
        ctx.strokeStyle = '#DAA520';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.ellipse(300, 100, 60, 15, Math.PI / 6, 0, Math.PI * 2);
        ctx.stroke();

        // Moon Surface (Ground)
        ctx.fillStyle = '#696969';
        ctx.beginPath();
        ctx.arc(200, 550, 250, 0, Math.PI * 2);
        ctx.fill();

        // Craters
        ctx.fillStyle = '#555555';
        let cSize = (isRight && hasDiff('craterSize')) ? 25 : 15;
        ctx.beginPath();
        ctx.ellipse(100, 350, cSize, cSize/2, 0, 0, Math.PI * 2);
        ctx.fill();
        
        let cX = (isRight && hasDiff('craterMoved')) ? 220 : 250;
        ctx.beginPath();
        ctx.ellipse(cX, 330, 20, 10, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(320, 370, 18, 9, 0, 0, Math.PI * 2);
        ctx.fill();

        // Asteroids
        ctx.fillStyle = '#808080';
        ctx.beginPath();
        ctx.arc(50, 250, 12, 0, Math.PI * 2);
        ctx.fill();

        if (isRight && hasDiff('extraAsteroid')) {
            ctx.beginPath();
            ctx.arc(150, 50, 15, 0, Math.PI * 2);
            ctx.fill();
        }

        // Spaceship
        ctx.fillStyle = '#D3D3D3';
        ctx.beginPath();
        ctx.ellipse(200, 200, 20, 60, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Spaceship Window
        let swColor = (isRight && hasDiff('spaceshipWindow')) ? '#32CD32' : '#00BFFF';
        ctx.fillStyle = swColor;
        ctx.beginPath();
        ctx.arc(200, 180, 10, 0, Math.PI * 2);
        ctx.fill();

        // Fins
        ctx.fillStyle = '#FF4500';
        ctx.beginPath();
        ctx.moveTo(180, 230);
        ctx.lineTo(160, 260);
        ctx.lineTo(185, 250);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(220, 230);
        ctx.lineTo(240, 260);
        ctx.lineTo(215, 250);
        ctx.fill();

        // Flame
        let fSize = (isRight && hasDiff('flameSize')) ? 50 : 30;
        ctx.fillStyle = '#FFA500';
        ctx.beginPath();
        ctx.moveTo(190, 260);
        ctx.lineTo(200, 260 + fSize);
        ctx.lineTo(210, 260);
        ctx.fill();

        // Satellite
        if (!(isRight && hasDiff('satelliteRemoved'))) {
            ctx.fillStyle = '#A9A9A9';
            ctx.fillRect(340, 240, 20, 10);
            ctx.fillStyle = '#4169E1';
            ctx.fillRect(320, 235, 15, 20); // solar panel left
            ctx.fillRect(365, 235, 15, 20); // solar panel right
            ctx.strokeStyle = '#FFF';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(350, 240);
            ctx.lineTo(350, 220);
            ctx.arc(350, 220, 5, 0, Math.PI);
            ctx.stroke();
        }
    }
    
    function drawCloud(ctx, x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.arc(x + 20, y - 10, 25, 0, Math.PI * 2);
        ctx.arc(x + 40, y, 20, 0, Math.PI * 2);
        ctx.fill();
    }
    
    function drawBird(ctx, x, y) {
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x + 10, y - 10, x + 20, y);
        ctx.quadraticCurveTo(x + 30, y - 10, x + 40, y);
        ctx.stroke();
    }
    
    function drawWindow(ctx, x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + w / 2, y);
        ctx.lineTo(x + w / 2, y + h);
        ctx.moveTo(x, y + h / 2);
        ctx.lineTo(x + w, y + h / 2);
        ctx.stroke();
    }
    
    function drawTree(ctx, x, y, tw, th, lr) {
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(x - tw / 2, y, tw, th);
        ctx.fillStyle = '#228b22';
        ctx.beginPath();
        ctx.arc(x, y - 10, lr, 0, Math.PI * 2);
        ctx.fill();
    }
    
    function drawFlower(ctx, x, y, color) {
        ctx.fillStyle = '#228b22';
        ctx.fillRect(x - 2, y, 4, 20); // stem
        ctx.fillStyle = color;
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(x + Math.cos(i * Math.PI * 0.4) * 8, y - 5 + Math.sin(i * Math.PI * 0.4) * 8, 6, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(x, y - 5, 5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    function drawOverlays(ctx, isRight) {
        differences.forEach(diff => {
            if (isFound(diff.id)) {
                ctx.strokeStyle = '#00ff00';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(diff.x, diff.y, diff.r, 0, Math.PI * 2);
                ctx.stroke();
            }
            
            if (!isFound(diff.id) && (activeHint === diff.id || isGameOver)) {
                ctx.strokeStyle = isGameOver ? '#ffff00' : `rgba(255, 255, 0, ${0.5 + 0.5 * Math.sin(Date.now() / 150)})`;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(diff.x, diff.y, diff.r, 0, Math.PI * 2);
                ctx.stroke();
            }
        });
        
        for (let i = clickAnimations.length - 1; i >= 0; i--) {
            let anim = clickAnimations[i];
            if (anim.isRight !== isRight) continue;
            
            let age = Date.now() - anim.time;
            if (age > 500) {
                clickAnimations.splice(i, 1);
                continue;
            }
            
            let alpha = 1 - age / 500;
            let radius = 10 + (age / 500) * 20;
            
            ctx.strokeStyle = anim.success ? `rgba(0, 255, 0, ${alpha})` : `rgba(255, 0, 0, ${alpha})`;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(anim.x, anim.y, radius, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    
    canvasR.addEventListener('click', (e) => {
        if (isGameOver) return;
        
        const rect = canvasR.getBoundingClientRect();
        const scaleX = canvasR.width / rect.width;
        const scaleY = canvasR.height / rect.height;
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        let hit = false;
        
        for (let diff of differences) {
            if (!isFound(diff.id)) {
                let dx = x - diff.x;
                let dy = y - diff.y;
                if (Math.sqrt(dx * dx + dy * dy) <= diff.r) {
                    foundDifferences.add(diff.id);
                    hit = true;
                    foundEl.textContent = foundDifferences.size;
                    
                    clickAnimations.push({ x: diff.x, y: diff.y, success: true, time: Date.now(), isRight: true });
                    clickAnimations.push({ x: diff.x, y: diff.y, success: true, time: Date.now(), isRight: false });
                    
                    if (activeHint === diff.id) activeHint = null;
                    
                    if (foundDifferences.size === differences.length) {
                        endGame(true);
                    }
                    break;
                }
            }
        }
        
        if (!hit) {
            clickAnimations.push({ x, y, success: false, time: Date.now(), isRight: true });
            if (animationFrameId === null) drawGame();
        }
    });
    
    function endGame(win) {
        isGameOver = true;
        clearInterval(timer);
        if (win) {
            setTimeout(() => {
                winOverlay.style.display = 'flex';
                winFoundEl.textContent = foundDifferences.size;
                winTimeEl.textContent = timerEl.textContent;
            }, 500);
        }
        drawGame(); 
    }
    
    const startScreen = document.getElementById('stdStartScreen');
    const gameScreen = document.getElementById('stdGameScreen');
    const startPlayingBtn = document.getElementById('stdStartPlayingBtn');

    diffBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            diffBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            difficulty = btn.getAttribute('data-diff');
        });
    });
    
    startPlayingBtn.addEventListener('click', () => {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        startGame(difficulty);
    });
    
    hintBtn.addEventListener('click', () => {
        if (isGameOver || activeHint) return;
        
        let unfound = differences.filter(d => !isFound(d.id));
        if (unfound.length > 0) {
            let r = unfound[Math.floor(Math.random() * unfound.length)];
            activeHint = r.id;
            setTimeout(() => {
                if (activeHint === r.id) activeHint = null;
            }, 1500);
        }
    });
    
    giveUpBtn.addEventListener('click', () => {
        if (isGameOver) return;
        endGame(false);
    });
    
    playAgainBtn.addEventListener('click', () => {
        winOverlay.style.display = 'none';
        startScreen.style.display = 'flex';
        gameScreen.style.display = 'none';
    });
}