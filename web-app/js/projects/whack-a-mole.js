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
            .whack-hole { aspect-ratio: 1 / 1; border-radius: 18px; border: 2px solid var(--border-color); background: var(--surface-color); font-size: 2rem; cursor: pointer; display: grid; place-items: center; }
            .whack-hole.active { background: linear-gradient(135deg, #f59e0b, #ef4444); color: white; }
            .whack-actions { display: flex; justify-content: center; gap: 0.75rem; flex-wrap: wrap; margin-top: 1rem; }
            .whack-message { margin-top: 1rem; font-weight: 600; min-height: 1.5rem; }
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
    let timerId = null;
    let moleId = null;

    const holes = Array.from({ length: 9 }, (_, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'whack-hole';
        button.setAttribute('aria-label', `Hole ${index + 1}`);
        button.addEventListener('click', () => {
            if (!gameActive || index !== activeIndex) return;
            score += 1;
            scoreEl.textContent = String(score);
            messageEl.textContent = 'Hit!';
            clearTimeout(moleId);
            showMole();
        });
        board.appendChild(button);
        return button;
    });

    function showMole() {
        holes.forEach(hole => hole.classList.remove('active'));
        activeIndex = Math.floor(Math.random() * holes.length);
        holes[activeIndex].classList.add('active');
        moleId = setTimeout(showMole, 850);
    }

    function stopGame(finalMessage) {
        gameActive = false;
        clearInterval(timerId);
        clearTimeout(moleId);
        holes.forEach(hole => hole.classList.remove('active'));
        messageEl.textContent = finalMessage;
    }

    function startGame() {
        score = 0;
        timeLeft = 30;
        gameActive = true;
        scoreEl.textContent = '0';
        timeEl.textContent = '30';
        messageEl.textContent = 'Go!';
        clearInterval(timerId);
        clearTimeout(moleId);
        showMole();
        timerId = setInterval(() => {
            timeLeft -= 1;
            timeEl.textContent = String(timeLeft);
            if (timeLeft <= 0) {
                stopGame(`Time! Final score: ${score}`);
            }
        }, 1000);
    }

    startBtn.addEventListener('click', startGame);
    resetBtn.addEventListener('click', () => {
        clearInterval(timerId);
        clearTimeout(moleId);
        score = 0;
        timeLeft = 30;
        gameActive = false;
        activeIndex = -1;
        holes.forEach(hole => hole.classList.remove('active'));
        scoreEl.textContent = '0';
        timeEl.textContent = '30';
        messageEl.textContent = 'Hit the mole when it appears.';
    });
}