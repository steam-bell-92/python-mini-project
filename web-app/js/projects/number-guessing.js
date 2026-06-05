function getNumberGuessingHTML() {
    return `
        <div class="project-content">
            <h2>Number Guessing Game</h2>
            <div class="guessing-container">

                <!-- Difficulty Screen -->
                <div id="difficultyScreen">
                    <p class="game-instructions">Choose your difficulty to start!</p>
                    <div class="difficulty-cards">
                        <button class="difficulty-card easy" data-difficulty="easy">
                            <span class="diff-icon">🟢</span>
                            <span class="diff-name">Easy</span>
                            <span class="diff-desc">1 – 100 · 10 attempts</span>
                        </button>
                        <button class="difficulty-card medium" data-difficulty="medium">
                            <span class="diff-icon">🟡</span>
                            <span class="diff-name">Medium</span>
                            <span class="diff-desc">1 – 100 · 7 attempts</span>
                        </button>
                        <button class="difficulty-card hard" data-difficulty="hard">
                            <span class="diff-icon">🔴</span>
                            <span class="diff-name">Hard</span>
                            <span class="diff-desc">1 – 200 · 5 attempts</span>
                        </button>
                    </div>
                </div>

                <!-- Game Screen -->
                <div id="gameScreen" style="display:none;">
                    <div class="difficulty-badge" id="difficultyBadge"></div>
                    <p class="game-instructions" id="gameInstructions"></p>

                    <div class="attempts-bar-wrap">
                        <div class="attempts-bar" id="attemptsBar"></div>
                    </div>

                    <div class="guess-input-group">
                        <input type="number" id="guessInput" placeholder="Enter your guess">
                        <button class="btn-guess" id="submitGuess">Guess!</button>
                    </div>

                    <p class="keyboard-hint">⌨️ Press <kbd>Enter</kbd> to submit your guess</p>

                    <div class="feedback" id="feedback"></div>

                    <div class="game-info">
                        <div class="info-item">
                            <span>Attempts Left:</span>
                            <span id="attemptsLeft">—</span>
                        </div>
                        <div class="info-item">
                            <span>Range:</span>
                            <span id="range">—</span>
                        </div>
                        <div class="info-item">
                            <span>Best Score:</span>
                            <span id="bestScore">—</span>
                        </div>
                    </div>

                    <div class="action-row">
                        <button class="btn-reset" id="resetGuessing">🔄 New Game</button>
                        <button class="btn-change-diff" id="changeDifficulty">⚙️ Change Difficulty</button>
                    </div>
                </div>

            </div>
        </div>

        <style>
            .guessing-container {
                padding: 2rem;
                text-align: center;
            }

            /* ── Difficulty selector ── */
            .game-instructions {
                font-size: 1.3rem;
                margin-bottom: 2rem;
            }

            .difficulty-cards {
                display: flex;
                gap: 1.25rem;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 2rem;
            }

            .difficulty-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.4rem;
                width: 150px;
                padding: 1.5rem 1rem;
                border-radius: 14px;
                border: 2px solid var(--border-color);
                background: var(--surface-color);
                cursor: pointer;
                transition: var(--transition);
                color: var(--text-color);
                font-family: inherit;
            }

            .difficulty-card:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 24px rgba(99, 102, 241, 0.25);
                border-color: var(--primary-color);
            }

            .difficulty-card.easy:hover  { border-color: #22c55e; }
            .difficulty-card.medium:hover { border-color: #eab308; }
            .difficulty-card.hard:hover   { border-color: #ef4444; }

            .diff-icon { font-size: 2rem; }
            .diff-name { font-size: 1.2rem; font-weight: bold; }
            .diff-desc { font-size: 0.82rem; color: var(--text-secondary); }

            /* ── Difficulty badge ── */
            .difficulty-badge {
                display: inline-block;
                padding: 0.3rem 1rem;
                border-radius: 50px;
                font-size: 0.9rem;
                font-weight: bold;
                margin-bottom: 1rem;
            }
            .difficulty-badge.easy   { background: #dcfce7; color: #166534; }
            .difficulty-badge.medium { background: #fef9c3; color: #854d0e; }
            .difficulty-badge.hard   { background: #fee2e2; color: #991b1b; }

            /* ── Attempts progress bar ── */
            .attempts-bar-wrap {
                background: var(--border-color);
                border-radius: 8px;
                height: 10px;
                margin: 0 auto 1.5rem;
                max-width: 400px;
                overflow: hidden;
            }
            .attempts-bar {
                height: 100%;
                border-radius: 8px;
                background: var(--primary-color);
                transition: width 0.4s ease, background 0.4s ease;
            }

            /* ── Input & buttons ── */
            .guess-input-group {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-bottom: 0.75rem;
            }

            .guess-input-group input {
                padding: 1rem;
                font-size: 1.2rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
                width: 200px;
                text-align: center;
            }

            .btn-guess {
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 10px;
                cursor: pointer;
                font-size: 1.2rem;
            }

            .keyboard-hint {
                font-size: 0.9rem;
                color: var(--text-secondary);
                margin-bottom: 1rem;
            }

            .keyboard-hint kbd {
                display: inline-block;
                padding: 0.15rem 0.45rem;
                font-size: 0.85rem;
                font-family: monospace;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 5px;
                color: var(--primary-color);
                font-weight: bold;
            }

            .feedback {
                font-size: 1.5rem;
                font-weight: bold;
                min-height: 3rem;
                margin: 2rem 0;
            }

            .game-info {
                display: flex;
                gap: 3rem;
                justify-content: center;
                margin: 2rem 0;
                font-size: 1.2rem;
                flex-wrap: wrap;
            }

            .action-row {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
            }

            .btn-reset, .btn-change-diff {
                color: white;
                border: none;
                padding: 0.85rem 1.75rem;
                border-radius: 10px;
                cursor: pointer;
                font-size: 1rem;
            }

            .btn-reset        { background: var(--primary-color); }
            .btn-change-diff  { background: var(--surface-color); color: var(--text-color); border: 2px solid var(--border-color); }
            .btn-change-diff:hover { border-color: var(--primary-color); }
        </style>
    `;
}

function initNumberGuessing() {
    // ── Difficulty config ──────────────────────────────────────
    const DIFFICULTIES = {
        easy:   { label: '🟢 Easy',   min: 1, max: 100, attempts: 10 },
        medium: { label: '🟡 Medium', min: 1, max: 100, attempts: 7  },
        hard:   { label: '🔴 Hard',   min: 1, max: 200, attempts: 5  },
    };

    // ── Storage ────────────────────────────────────────────────
    const storage = window.appStorage || {
        saveToStorage(key, value) { localStorage.setItem(key, JSON.stringify(value)); },
        loadFromStorage(key, defaultValue = null) {
            const data = localStorage.getItem(key);
            if (!data) return defaultValue;
            try { return JSON.parse(data); } catch { return defaultValue; }
        },
    };

    // ── DOM refs ───────────────────────────────────────────────
    const difficultyScreen  = document.getElementById('difficultyScreen');
    const gameScreen        = document.getElementById('gameScreen');
    const difficultyBadge   = document.getElementById('difficultyBadge');
    const gameInstructions  = document.getElementById('gameInstructions');
    const attemptsBar       = document.getElementById('attemptsBar');
    const guessInput        = document.getElementById('guessInput');
    const submitBtn         = document.getElementById('submitGuess');
    const feedback          = document.getElementById('feedback');
    const attemptsLeftEl    = document.getElementById('attemptsLeft');
    const rangeDisplay      = document.getElementById('range');
    const bestScoreDisplay  = document.getElementById('bestScore');
    const resetBtn          = document.getElementById('resetGuessing');
    const changeDiffBtn     = document.getElementById('changeDifficulty');

    // ── State 
    let secretNumber, attempts, minRange, maxRange, maxAttempts, currentDiff;

    // ── Difficulty selection 
    document.querySelectorAll('.difficulty-card').forEach(card => {
        card.addEventListener('click', () => startGame(card.dataset.difficulty));
    });

    function startGame(diffKey) {
    currentDiff  = diffKey;
    const config = DIFFICULTIES[diffKey];
    maxAttempts  = config.attempts;
    secretNumber = Math.floor(Math.random() * (config.max - config.min + 1)) + config.min;
    attempts     = 0;
    minRange     = config.min;
    maxRange     = config.max;
    guessInput.min = minRange;
    guessInput.max = maxRange;

    // Badge
    difficultyBadge.textContent = config.label;
    difficultyBadge.className   = `difficulty-badge ${diffKey}`;

    // Instruction
    gameInstructions.textContent =
        `I'm thinking of a number between ${config.min} and ${config.max}!`;

    // Input bounds - IMPORTANT!
    guessInput.min = config.min;
    guessInput.max = config.max;
    guessInput.value = '';

    // Stats
    attemptsLeftEl.textContent = maxAttempts;
    rangeDisplay.textContent   = `${config.min}–${config.max}`;
    feedback.textContent       = '';
    feedback.style.color       = '';

    updateBar(maxAttempts, maxAttempts);
    updateBestScore(diffKey);

    guessInput.disabled = false;
    submitBtn.disabled  = false;

    difficultyScreen.style.display = 'none';
    gameScreen.style.display       = '';
    guessInput.focus();
}

    // Gameplay 
    submitBtn.addEventListener('click', makeGuess);
    guessInput.addEventListener('keydown', e => { if (e.key === 'Enter') makeGuess(); });

    function makeGuess() {
    const config = DIFFICULTIES[currentDiff];
    const guess = parseInt(guessInput.value);
    
    // Simple validation - just check if it's a number
    if (isNaN(guess)) {
        feedback.textContent = `⚠️ Please enter a valid number!`;
        feedback.style.color = 'var(--warning-color)';
        guessInput.value = '';
        guessInput.focus();
        return;
    }
    
    // Check if guess is within current possible range
    if (guess < minRange || guess > maxRange) {
        feedback.textContent = `⚠️ Please enter a number between ${minRange} and ${maxRange}!`;
        feedback.style.color = 'var(--warning-color)';
        guessInput.value = '';
        guessInput.focus();
        return;
    }

    attempts++;
    const remaining = maxAttempts - attempts;
    attemptsLeftEl.textContent = remaining;
    updateBar(remaining, maxAttempts);

    if (guess === secretNumber) {
        feedback.textContent = `🎉 Correct! You found it in ${attempts} attempt${attempts === 1 ? '' : 's'}!`;
        feedback.style.color = 'var(--success-color)';
        guessInput.disabled = true;
        submitBtn.disabled = true;
        saveBestScore(currentDiff, attempts);
    } else {
        if (guess < secretNumber) {
            feedback.textContent = '📈 Too low! Try higher!';
            minRange = guess + 1;
        } else {
            feedback.textContent = '📉 Too high! Try lower!';
            maxRange = guess - 1;
        }
        
        feedback.style.color = guess < secretNumber ? 'var(--primary-color)' : 'var(--danger-color)';
        
        // Update the input's min/max attributes
        guessInput.min = minRange;
        guessInput.max = maxRange;
        
        // Display narrowed range
        rangeDisplay.textContent = `${minRange}–${maxRange}`;

        if (remaining <= 1) {
            if (remaining === 1) {
                feedback.textContent = `⚠️ Last attempt! The number is between ${minRange} and ${maxRange}`;
            } else {
                feedback.textContent = `💀 Out of attempts! The number was ${secretNumber}.`;
                feedback.style.color = 'var(--danger-color)';
                guessInput.disabled = true;
                submitBtn.disabled = true;
            }
        }
    }

    guessInput.value = '';
    guessInput.focus();
}

    // Progress bar
    function updateBar(left, total) {
        const pct = (left / total) * 100;
        attemptsBar.style.width = pct + '%';
        if (pct > 50)      attemptsBar.style.background = 'var(--primary-color)';
        else if (pct > 25) attemptsBar.style.background = '#eab308';
        else               attemptsBar.style.background = '#ef4444';
    }

    function getBestScoreKey(diffKey) { return `numberGuessBest_${diffKey}`; }

    function updateBestScore(diffKey) {
        const best = storage.loadFromStorage(getBestScoreKey(diffKey), null);
        bestScoreDisplay.textContent = best === null ? '—' : `${best} attempt${best === 1 ? '' : 's'}`;
    }

    function saveBestScore(diffKey, score) {
        const key  = getBestScoreKey(diffKey);
        const best = storage.loadFromStorage(key, null);
        if (best === null || score < best) {
            storage.saveToStorage(key, score);
            bestScoreDisplay.textContent = `${score} attempt${score === 1 ? '' : 's'} 🏆`;
        }
    }

    resetBtn.addEventListener('click', () => startGame(currentDiff));

    changeDiffBtn.addEventListener('click', () => {
        gameScreen.style.display       = 'none';
        difficultyScreen.style.display = '';
    });
}