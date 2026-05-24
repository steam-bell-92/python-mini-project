function getTowerOfHanoiHTML() {
    return `
        <div class="project-content">
            <h2>🗼 Tower of Hanoi</h2>
            <div class="hanoi-container">
                <div class="controls">
                    <label>
                        Number of Disks:
                        <input type="number" id="diskCount" min="3" max="7" value="3">
                    </label>
                    <button class="btn-solve" id="solveBtn">🎯 Solve</button>
                    <button class="btn-reset" id="resetHanoi">Reset</button>
                </div>
                
                <div class="stats">
                    <div>Moves: <span id="moveCount">0</span></div>
                    <div>Optimal: <span id="optimalMoves">7</span></div>
                </div>
                
                <canvas id="hanoiCanvas" width="800" height="400"></canvas>
            </div>
        </div>
        
        <style>
            .hanoi-container {
                padding: 2rem;
                text-align: center;
            }
            
            .controls {
                display: flex;
                gap: 1rem;
                justify-content: center;
                align-items: center;
                margin-bottom: 1rem;
                flex-wrap: wrap;
            }
            
            .controls label {
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .controls input {
                width: 80px;
                padding: 0.5rem;
                font-size: 1rem;
                border: 2px solid var(--border-color);
                border-radius: 8px;
                background: var(--bg-color);
                color: var(--text-color);
                text-align: center;
            }
            
            .btn-solve {
                background: var(--success-color);
                color: white;
                border: none;
                padding: 0.75rem 2rem;
                border-radius: 50px;
                cursor: pointer;
                font-size: 1rem;
                transition: var(--transition);
            }
            
            .btn-solve:hover {
                transform: scale(1.05);
            }
            
            .btn-solve:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            .stats {
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin-bottom: 2rem;
                font-size: 1.2rem;
                font-weight: bold;
            }
            
            .stats span {
                color: var(--primary-color);
            }
            
            #hanoiCanvas {
                background: var(--surface-color);
                border-radius: 15px;
                box-shadow: var(--shadow);
                max-width: 100%;
                height: auto;
                display: block;
                margin: 0 auto;
            }
        </style>
    `;
}

function initTowerOfHanoi() {
    const canvas = document.getElementById('hanoiCanvas');
    const ctx = canvas.getContext('2d');
    const diskCountInput = document.getElementById('diskCount');
    const solveBtn = document.getElementById('solveBtn');
    const resetBtn = document.getElementById('resetHanoi');
    const moveCountEl = document.getElementById('moveCount');
    const optimalMovesEl = document.getElementById('optimalMoves');
    
    let towers = [[], [], []];
    let diskCount = 3;
    let moveCount = 0;
    let isAnimating = false;
    let shouldStop = false;
    
    const towerX = [200, 400, 600];
    const baseY = 350;
    const diskHeight = 20;
    const maxDiskWidth = 120;
    const colors = ['#ff6b6b', '#f59e0b', '#10b981', '#06b6d4', '#6366f1', '#8b5cf6', '#ec4899'];
    
    function initTowers() {
        towers = [[], [], []];
        moveCount = 0;
        diskCount = parseInt(diskCountInput.value) || 3;
        isAnimating = false;
        solveBtn.disabled = false;
        
        for (let i = diskCount; i >= 1; i--) {
            towers[0].push(i);
        }
        
        optimalMovesEl.textContent = Math.pow(2, diskCount) - 1;
        moveCountEl.textContent = '0';
        drawTowers();
    }
    
    function drawTowers() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#64748b';
        for (let i = 0; i < 3; i++) {
            ctx.fillRect(towerX[i] - 5, baseY - 200, 10, 200);
            ctx.fillRect(towerX[i] - 80, baseY, 160, 10);
        }
        
        for (let tower = 0; tower < 3; tower++) {
            for (let disk = 0; disk < towers[tower].length; disk++) {
                const diskSize = towers[tower][disk];
                const diskWidth = (maxDiskWidth * diskSize) / diskCount;
                const x = towerX[tower] - diskWidth / 2;
                const y = baseY - (disk + 1) * diskHeight;
                
                const gradient = ctx.createLinearGradient(x, y, x + diskWidth, y + diskHeight);
                gradient.addColorStop(0, colors[diskSize - 1]);
                gradient.addColorStop(1, colors[diskSize - 1] + 'aa');
                
                ctx.fillStyle = gradient;
                ctx.fillRect(x, y, diskWidth, diskHeight - 2);
                
                ctx.strokeStyle = '#1e293b';
                ctx.lineWidth = 2;
                ctx.strokeRect(x, y, diskWidth, diskHeight - 2);
                
                ctx.fillStyle = 'white';
                ctx.font = 'bold 12px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(diskSize, towerX[tower], y + diskHeight / 2 + 4);
            }
        }
    }
    
    async function moveDisk(from, to) {
        if (shouldStop) return;

        const disk = towers[from].pop();
        towers[to].push(disk);
        moveCount++;
        moveCountEl.textContent = moveCount;
        
        drawTowers();
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    async function solveHanoi(n, from, to, aux) {
        if (n === 1) {
            await moveDisk(from, to);
            return;
        }
        
        await solveHanoi(n - 1, from, aux, to);
        await moveDisk(from, to);
        await solveHanoi(n - 1, aux, to, from);
    }
    
    async function solve() {
        if (isAnimating) return;

        if (diskCount < 3 || diskCount > 7) {
            alert("Visualization supports only 3 to 7 disks");
            return;
        }
        
        isAnimating = true;
        solveBtn.disabled = true;
        
        await solveHanoi(diskCount, 0, 2, 1);

        shouldStop = false;
        
        isAnimating = false;
        solveBtn.disabled = false;
    }
    
    solveBtn.addEventListener('click', solve);
    resetBtn.addEventListener('click', () => {
        shouldStop = true;
        initTowers();
    });
    diskCountInput.addEventListener('change', initTowers);
    
    initTowers();
}
