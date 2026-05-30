function getWhackaMoleHTML() {
    return `
        <div class="project-content">
            <h2>🔨 Whack-a-Mole</h2>
            <div class="whack-container">
                <div class="whack-stats">
                    <div>Score: <span id="whackScore">0</span></div>
                    <div>Time: <span id="whackTime">30</span>s</div>
                </div>
                <div class="whack-board" id="whackBoard"></div>
                <div class="whack-actions">
                    <button class="btn-primary" id="startWhackBtn">Start Game</button>
                    <button class="btn-primary" id="resetWhackBtn">Reset</button>
                </div>
                <div id="whackMessage" class="whack-message">Hit the mole when it appears.</div>
            </div>
        </div>
        <style>
            .whack-container { max-width: 720px; margin: 0 auto; padding: 1.5rem; text-align: center; }
            .whack-stats { display: flex; justify-content: center; gap: 1rem; margin-bottom: 1rem; font-weight: 700; flex-wrap: wrap; }
            .whack-board { display: grid; grid-template-columns: repeat(3, minmax(80px, 1fr)); gap: 0.8rem; margin: 1rem auto; max-width: 420px; }
            .whack-hole { aspect-ratio: 1 / 1; border-radius: 18px; border: 2px solid var(--border-color); background: var(--surface-color); font-size: 2rem; cursor: pointer; display: grid; place-items: center; touch-action: manipulation; }
            .whack-hole.active { background: linear-gradient(135deg, #f59e0b, #ef4444); color: white; }
            .whack-actions { display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap; margin-top: 1rem; }
            .whack-message { margin-top: 1rem; font-weight: 600; min-height: 1.5rem; }
            .btn-primary{
                padding:15px;
                border-radius:30px;            
            }
        </style>
    `;
}

function initWhackaMole() {
    const board = document.getElementById('whackBoard');
    const startBtn = document.getElementById('startWhackBtn');
    const resetBtn = document.getElementById('resetWhackBtn');
    const scoreEl = document.getElementById('whackScore');
    const timeEl = document.getElementById('whackTime');
    const messageEl = document.getElementById('whackMessage');

    if (!board || !startBtn || !resetBtn || !scoreEl || !timeEl || !messageEl) return;

    let score = 0;
    let timeLeft = 30;
    let gameActive = false;
    let activeIndex = -1;
    let lastActiveIndex = -1;
    let lastActiveTime = 0;
    let timerId = null;
    let moleId = null;

    const holes = Array.from({ length: 9 }, (_, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'whack-hole';
        button.textContent = '🕳️';
        button.setAttribute('aria-label', `Hole ${index + 1}`);
        function handleHit(e) {
            if (e && e.preventDefault) e.preventDefault();
            if (!gameActive || index !== activeIndex) return;
            score += 1;
            scoreEl.textContent = String(score);
            messageEl.textContent = 'Hit! 🔨';
            if (window.AudioManager) AudioManager.play("mole_hit");
            button.textContent = '💥';
            button.classList.remove('active');
            
            // Set to -1 immediately to prevent double hits
            activeIndex = -1;
            lastActiveIndex = -1;
            
            clearTimeout(moleId);
            showMole();
        }
        button.addEventListener('mousedown', handleHit);
        button.addEventListener('touchstart', handleHit, { passive: false });
        board.appendChild(button);
        return button;
    });

    function showMole() {
        if (!gameActive) return;
        
        // Save previous active mole state for grace period
        if (activeIndex !== -1) {
            lastActiveIndex = activeIndex;
            lastActiveTime = Date.now();
        }
        
        holes.forEach(hole => {
            hole.classList.remove('active');
            hole.textContent = '🕳️';
        });
        
        // Choose a new hole, ensuring it is different from the current one
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * holes.length);
        } while (newIndex === activeIndex && holes.length > 1);
        
        activeIndex = newIndex;
        holes[activeIndex].classList.add('active');
        holes[activeIndex].textContent = '🐭';
        
        moleId = setTimeout(showMole, 850);
    }

    function stopGame(finalMessage) {
        gameActive = false;
        clearInterval(timerId);
        timerId = null;
        clearTimeout(moleId);
        moleId = null;
        activeIndex = -1;
        lastActiveIndex = -1;
        holes.forEach(hole => {
            hole.classList.remove('active');
            hole.textContent = '🕳️';
        });
        if (window.AudioManager) AudioManager.play("game_over");
        messageEl.textContent = finalMessage;
        startBtn.disabled = false;
    }

    function startGame() {
        score = 0;
        timeLeft = 30;
        gameActive = true;
        scoreEl.textContent = '0';
        timeEl.textContent = '30';
        messageEl.textContent = 'Go!';
        startBtn.disabled = true;
        clearInterval(timerId);
        clearTimeout(moleId);
        timerId = setInterval(() => {
            timeLeft -= 1;
            timeEl.textContent = String(timeLeft);
            if (timeLeft <= 0) {
                stopGame(`Time! Final score: ${score}`);
            }
        }, 1000);
        showMole();
    }

    startBtn.addEventListener('click', startGame);
    resetBtn.addEventListener('click', () => {
        clearInterval(timerId);
        timerId = null;
        clearTimeout(moleId);
        moleId = null;
        score = 0;
        timeLeft = 30;
        gameActive = false;
        activeIndex = -1;
        lastActiveIndex = -1;
        holes.forEach(hole => {
            hole.classList.remove('active');
            hole.textContent = '🕳️';
        });
        scoreEl.textContent = '0';
        timeEl.textContent = '30';
        messageEl.textContent = 'Hit the mole when it appears.';
        startBtn.disabled = false;
    });
}