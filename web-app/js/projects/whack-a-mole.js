function getWhackAMoleHTML() {
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
                <div id="gameOverModal" class="whack-modal">
                    <div class="whack-modal-content">
                        <h2>🏆 Game Over!</h2>
                        <p id="finalScoreText"></p>
                        <p id="motivationalText"></p>

                        <div class="whack-modal-actions">
                            <button id="playAgainBtn" class="btn-primary">Play Again</button>
                        <button id="closeModalBtn" class="btn-primary">Close</button>
                        </div>
                    </div>
                </div>
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
            .btn-primary {
                background: var(--primary-color, #6366f1);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 30px;
                cursor: pointer;
                font-weight: 600;
                font-size: 1rem;
                transition: all 0.2s ease;
            }

            .btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
                filter: brightness(1.05);
            }

            .btn-primary:active {
                transform: translateY(0);
            }

            .btn-primary:disabled {
                opacity: 0.5;
                cursor: not-allowed;
                transform: none;
            }
        .whack-modal {
            display: none;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.7);
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .whack-modal.show {
            display: flex;
        }

        .whack-modal-content {
            background: #1f2937;
            color: white;
            padding: 2rem;
            border-radius: 16px;
            text-align: center;
            min-width: 320px;
        }

        .whack-modal-actions {
            margin-top: 1rem;
            display: flex;
            gap: 10px;
            justify-content: center;
        }

       </style>
         `;
    
}

function initWhackAMole() {
    const board = document.getElementById('whackBoard');
    const startBtn = document.getElementById('startWhackBtn');
    const resetBtn = document.getElementById('resetWhackBtn');
    const scoreEl = document.getElementById('whackScore');
    const timeEl = document.getElementById('whackTime');
    const messageEl = document.getElementById('whackMessage');
    const gameOverModal = document.getElementById('gameOverModal');
    const finalScoreText = document.getElementById('finalScoreText');
    const motivationalText = document.getElementById('motivationalText');
    const playAgainBtn = document.getElementById('playAgainBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');

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
    function showGameOverModal() {

        finalScoreText.textContent = `Your score: ${score}`;

        if (score < 5) {
            motivationalText.textContent =
                "Keep practicing! You'll get faster!";
        } else if (score < 15) {
            motivationalText.textContent =
                "Nice job! Great reflexes!";
        } else {
            motivationalText.textContent =
                "Amazing! You're a Whack-a-Mole champion!";
        }

        gameOverModal.classList.add('show');
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
        showGameOverModal();
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
    playAgainBtn.addEventListener('click', () => {
        gameOverModal.classList.remove('show');
        startGame();
    });

    closeModalBtn.addEventListener('click', () => {
        gameOverModal.classList.remove('show');
    });
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
