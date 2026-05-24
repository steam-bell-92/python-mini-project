function getRockPaperScissorHTML() {
    return `
        <div class="rps-game">
            <!-- Difficulty Tabs -->
            <div class="rps-difficulty-tabs">
                <button class="rps-diff-tab" data-diff="easy">🎲 Easy</button>
                <button class="rps-diff-tab active" data-diff="medium">🧠 Medium</button>
                <button class="rps-diff-tab" data-diff="hard">🔥 Hard</button>
            </div>

            <!-- Scoreboard -->
            <div class="rps-scoreboard">
                <div class="rps-player-score">
                    <span class="rps-score-num" id="playerScore">0</span>
                    <span class="rps-score-label">You</span>
                </div>
                <div class="rps-vs-badge">VS</div>
                <div class="rps-computer-score">
                    <span class="rps-score-num" id="computerScore">0</span>
                    <span class="rps-score-label">Computer</span>
                </div>
            </div>

            <!-- Arena -->
            <div class="rps-arena">
                <div class="rps-fighter rps-fighter-player">
                    <div class="rps-fighter-emoji" id="playerChoice">❓</div>
                </div>
                <div class="rps-clash-effect" id="clashEffect"></div>
                <div class="rps-fighter rps-fighter-computer">
                    <div class="rps-fighter-emoji" id="computerChoice">❓</div>
                </div>
            </div>

            <!-- Result Banner -->
            <div class="rps-result" id="resultMessage">Choose your weapon!</div>

            <!-- Tendency Bar -->
            <div class="rps-tendency-bar" id="tendencyBar">
                <div class="rps-tend-segment rps-tend-rock" id="tendRock" style="flex:1"></div>
                <div class="rps-tend-segment rps-tend-paper" id="tendPaper" style="flex:1"></div>
                <div class="rps-tend-segment rps-tend-scissors" id="tendScissors" style="flex:1"></div>
            </div>
            <div class="rps-tendency-labels">
                <span>🪨 <span id="tendRockPct">0%</span></span>
                <span>📄 <span id="tendPaperPct">0%</span></span>
                <span>✂️ <span id="tendScissorsPct">0%</span></span>
            </div>

            <!-- Choice Buttons -->
            <div class="rps-choices">
                <button class="rps-choice-btn" data-choice="rock" id="btnRock">
                    <span class="rps-choice-icon">🪨</span>
                    <span class="rps-choice-label">Rock</span>
                    <span class="rps-choice-key">R</span>
                </button>
                <button class="rps-choice-btn" data-choice="paper" id="btnPaper">
                    <span class="rps-choice-icon">📄</span>
                    <span class="rps-choice-label">Paper</span>
                    <span class="rps-choice-key">P</span>
                </button>
                <button class="rps-choice-btn" data-choice="scissors" id="btnScissors">
                    <span class="rps-choice-icon">✂️</span>
                    <span class="rps-choice-label">Scissors</span>
                    <span class="rps-choice-key">S</span>
                </button>
            </div>

            <!-- Stats Row -->
            <div class="rps-stats-row">
                <div class="rps-stat"><span id="gamesPlayed">0</span> played</div>
                <div class="rps-stat">🏆 <span id="wins">0</span>W</div>
                <div class="rps-stat">💀 <span id="losses">0</span>L</div>
                <div class="rps-stat">🔥 <span id="currentStreak">0</span> streak</div>
                <div class="rps-stat">⭐ best <span id="bestStreak">0</span></div>
            </div>

            <button class="rps-reset-btn" id="resetRPS">↺ Reset</button>
        </div>

        <style>
            .rps-game {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 1rem 1.5rem;
                font-family: 'Segoe UI', system-ui, sans-serif;
                max-width: 520px;
                margin: 0 auto;
                gap: 0.75rem;
            }

            /* ── Difficulty Tabs ── */
            .rps-difficulty-tabs {
                display: flex;
                gap: 0.4rem;
                background: var(--surface-color, #f1f5f9);
                padding: 4px;
                border-radius: 12px;
                border: 1px solid var(--border-color, #e2e8f0);
            }
            .rps-diff-tab {
                padding: 0.4rem 1rem;
                border: none;
                border-radius: 9px;
                background: transparent;
                color: var(--text-secondary, #64748b);
                font-size: 0.85rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.25s ease;
            }
            .rps-diff-tab:hover {
                background: rgba(99, 102, 241, 0.08);
                color: var(--text-color, #1e293b);
            }
            .rps-diff-tab.active {
                background: var(--primary-color, #6366f1);
                color: #fff;
                box-shadow: 0 2px 8px rgba(99, 102, 241, 0.35);
            }

            /* ── Scoreboard ── */
            .rps-scoreboard {
                display: flex;
                align-items: center;
                gap: 1.5rem;
            }
            .rps-player-score, .rps-computer-score {
                display: flex;
                flex-direction: column;
                align-items: center;
                min-width: 70px;
            }
            .rps-score-num {
                font-size: 2.4rem;
                font-weight: 800;
                line-height: 1;
                background: linear-gradient(135deg, var(--primary-color, #6366f1), #a855f7);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            .rps-score-label {
                font-size: 0.8rem;
                color: var(--text-secondary, #64748b);
                text-transform: uppercase;
                letter-spacing: 1px;
                font-weight: 600;
            }
            .rps-vs-badge {
                font-size: 0.9rem;
                font-weight: 800;
                color: var(--text-secondary, #94a3b8);
                background: var(--surface-color, #f1f5f9);
                border: 1px solid var(--border-color, #e2e8f0);
                padding: 0.3rem 0.8rem;
                border-radius: 20px;
            }

            /* ── Arena ── */
            .rps-arena {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                margin: 0.25rem 0;
                position: relative;
            }
            .rps-fighter {
                width: 90px;
                height: 90px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            .rps-fighter-player {
                background: linear-gradient(135deg, rgba(99, 102, 241, 0.12), rgba(168, 85, 247, 0.12));
                border: 2px solid rgba(99, 102, 241, 0.25);
            }
            .rps-fighter-computer {
                background: linear-gradient(135deg, rgba(239, 68, 68, 0.12), rgba(249, 115, 22, 0.12));
                border: 2px solid rgba(239, 68, 68, 0.25);
            }
            .rps-fighter-emoji {
                font-size: 2.8rem;
                transition: all 0.3s ease;
            }
            .rps-fighter.rps-shake {
                animation: rpsShake 0.5s ease;
            }
            .rps-fighter.rps-win {
                transform: scale(1.15);
                box-shadow: 0 0 25px rgba(34, 197, 94, 0.4);
                border-color: #22c55e;
            }
            .rps-fighter.rps-lose {
                transform: scale(0.9);
                opacity: 0.5;
            }

            @keyframes rpsShake {
                0%, 100% { transform: translateX(0) rotate(0deg); }
                20% { transform: translateX(-8px) rotate(-5deg); }
                40% { transform: translateX(8px) rotate(5deg); }
                60% { transform: translateX(-5px) rotate(-3deg); }
                80% { transform: translateX(5px) rotate(3deg); }
            }

            /* ── Clash Effect ── */
            .rps-clash-effect {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.8rem;
                opacity: 0;
                transform: scale(0);
                transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            }
            .rps-clash-effect.rps-clash-show {
                opacity: 1;
                transform: scale(1);
            }

            /* ── Result Banner ── */
            .rps-result {
                font-size: 1.15rem;
                font-weight: 700;
                padding: 0.4rem 1.5rem;
                border-radius: 25px;
                transition: all 0.3s ease;
                color: var(--text-secondary, #64748b);
                background: var(--surface-color, #f8fafc);
                border: 1px solid var(--border-color, #e2e8f0);
                min-height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .rps-result.rps-result-win {
                background: linear-gradient(135deg, rgba(34, 197, 94, 0.12), rgba(16, 185, 129, 0.12));
                color: #16a34a;
                border-color: rgba(34, 197, 94, 0.3);
                animation: rpsPulse 0.5s ease;
            }
            .rps-result.rps-result-lose {
                background: linear-gradient(135deg, rgba(239, 68, 68, 0.12), rgba(249, 115, 22, 0.12));
                color: #dc2626;
                border-color: rgba(239, 68, 68, 0.3);
            }
            .rps-result.rps-result-tie {
                background: linear-gradient(135deg, rgba(234, 179, 8, 0.12), rgba(245, 158, 11, 0.12));
                color: #ca8a04;
                border-color: rgba(234, 179, 8, 0.3);
            }
            @keyframes rpsPulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }

            /* ── Tendency Bar ── */
            .rps-tendency-bar {
                display: flex;
                width: 100%;
                height: 6px;
                border-radius: 3px;
                overflow: hidden;
                gap: 2px;
            }
            .rps-tend-segment {
                transition: flex 0.5s ease;
                border-radius: 3px;
            }
            .rps-tend-rock { background: #94a3b8; }
            .rps-tend-paper { background: #60a5fa; }
            .rps-tend-scissors { background: #f472b6; }

            .rps-tendency-labels {
                display: flex;
                justify-content: space-between;
                width: 100%;
                font-size: 0.75rem;
                color: var(--text-secondary, #64748b);
                font-weight: 600;
            }

            /* ── Choice Buttons ── */
            .rps-choices {
                display: flex;
                gap: 0.75rem;
                width: 100%;
            }
            .rps-choice-btn {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.25rem;
                padding: 0.9rem 0.5rem;
                background: var(--surface-color, #ffffff);
                border: 2px solid var(--border-color, #e2e8f0);
                border-radius: 16px;
                cursor: pointer;
                transition: all 0.2s ease;
                position: relative;
                overflow: hidden;
            }
            .rps-choice-btn::before {
                content: '';
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, rgba(99, 102, 241, 0.08), rgba(168, 85, 247, 0.08));
                opacity: 0;
                transition: opacity 0.2s ease;
            }
            .rps-choice-btn:hover::before,
            .rps-choice-btn.rps-key-active::before {
                opacity: 1;
            }
            .rps-choice-btn:hover, .rps-choice-btn.rps-key-active {
                transform: translateY(-4px);
                border-color: var(--primary-color, #6366f1);
                box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
            }
            .rps-choice-btn:active {
                transform: translateY(-2px) scale(0.97);
            }
            .rps-choice-btn.rps-btn-disabled {
                pointer-events: none;
                opacity: 0.5;
            }
            .rps-choice-icon {
                font-size: 2rem;
                position: relative;
            }
            .rps-choice-label {
                font-size: 0.8rem;
                font-weight: 600;
                color: var(--text-color, #1e293b);
                position: relative;
            }
            .rps-choice-key {
                font-size: 0.65rem;
                font-weight: 700;
                color: var(--text-secondary, #94a3b8);
                background: var(--surface-color, #f1f5f9);
                border: 1px solid var(--border-color, #e2e8f0);
                border-radius: 4px;
                padding: 0px 5px;
                font-family: monospace;
                position: relative;
            }

            /* ── Stats Row ── */
            .rps-stats-row {
                display: flex;
                gap: 0.5rem;
                flex-wrap: wrap;
                justify-content: center;
            }
            .rps-stat {
                font-size: 0.75rem;
                color: var(--text-secondary, #64748b);
                background: var(--surface-color, #f8fafc);
                border: 1px solid var(--border-color, #e2e8f0);
                padding: 0.25rem 0.6rem;
                border-radius: 8px;
                font-weight: 600;
            }
            .rps-stat span {
                color: var(--text-color, #1e293b);
                font-weight: 700;
            }

            /* ── Reset Button ── */
            .rps-reset-btn {
                background: transparent;
                color: var(--text-secondary, #94a3b8);
                border: 1px solid var(--border-color, #e2e8f0);
                padding: 0.4rem 1.2rem;
                border-radius: 8px;
                cursor: pointer;
                font-size: 0.8rem;
                font-weight: 600;
                transition: all 0.2s ease;
            }
            .rps-reset-btn:hover {
                background: rgba(239, 68, 68, 0.08);
                color: #ef4444;
                border-color: rgba(239, 68, 68, 0.3);
            }
        </style>
    `;
}

function initRockPaperScissor() {
    let playerScore = 0;
    let computerScore = 0;
    let isAnimating = false;

    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };
    const keyMap = { r: 'rock', p: 'paper', s: 'scissors' };

    const counterMove = {
        rock: 'paper',
        paper: 'scissors',
        scissors: 'rock'
    };

    const difficultyConfig = {
        easy:   { adaptiveWeight: 0 },
        medium: { adaptiveWeight: 0.35 },
        hard:   { adaptiveWeight: 0.55 }
    };

    const HISTORY_WINDOW = 10;

    const storage = window.appStorage || {
        saveToStorage(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        loadFromStorage(key, defaultValue = null) {
            const data = localStorage.getItem(key);
            if (!data) return defaultValue;
            try { return JSON.parse(data); } catch { return defaultValue; }
        },
    };

    // DOM Elements
    const choiceBtns = document.querySelectorAll('.rps-choice-btn');
    const resetBtn = document.getElementById('resetRPS');
    const diffTabs = document.querySelectorAll('.rps-diff-tab');
    const resultEl = document.getElementById('resultMessage');
    const playerChoiceEl = document.getElementById('playerChoice');
    const computerChoiceEl = document.getElementById('computerChoice');
    const clashEffect = document.getElementById('clashEffect');
    const playerFighter = document.querySelector('.rps-fighter-player');
    const computerFighter = document.querySelector('.rps-fighter-computer');

    const gamesPlayedDisplay = document.getElementById('gamesPlayed');
    const winsDisplay = document.getElementById('wins');
    const lossesDisplay = document.getElementById('losses');
    const currentStreakDisplay = document.getElementById('currentStreak');
    const bestStreakDisplay = document.getElementById('bestStreak');

    // State
    const stats = storage.loadFromStorage('rpsStats', {
        gamesPlayed: 0, wins: 0, losses: 0, currentStreak: 0, bestStreak: 0,
    });

    let bestScore = storage.loadFromStorage('rpsBestScore', 0);
    let playerHistory = storage.loadFromStorage('rpsPlayerHistory', []);
    let difficulty = storage.loadFromStorage('rpsDifficulty', 'medium');

    // Init difficulty tabs
    diffTabs.forEach(tab => {
        if (tab.dataset.diff === difficulty) tab.classList.add('active');
        else tab.classList.remove('active');

        tab.addEventListener('click', () => {
            diffTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            difficulty = tab.dataset.diff;
            storage.saveToStorage('rpsDifficulty', difficulty);
        });
    });

    updateStatsDisplay();
    updateTendencyDisplay();

    // --- Choice button clicks ---
    choiceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (isAnimating) return;
            playRound(btn.getAttribute('data-choice'));
        });
    });

    // --- Keyboard shortcuts ---
    function handleKeydown(e) {
        if (isAnimating) return;
        const key = e.key.toLowerCase();
        if (keyMap[key]) {
            const choice = keyMap[key];
            const matchingBtn = document.querySelector(`.rps-choice-btn[data-choice="${choice}"]`);
            if (matchingBtn) {
                matchingBtn.classList.add('rps-key-active');
                setTimeout(() => matchingBtn.classList.remove('rps-key-active'), 200);
            }
            playRound(choice);
        }
    }
    document.addEventListener('keydown', handleKeydown);

    // --- Reset ---
    resetBtn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        stats.gamesPlayed = 0;
        stats.wins = 0;
        stats.losses = 0;
        stats.currentStreak = 0;
        playerHistory = [];
        updateScore();
        updateStatsDisplay();
        updateTendencyDisplay();
        saveRpsStats();
        storage.saveToStorage('rpsPlayerHistory', playerHistory);
        resultEl.textContent = 'Choose your weapon!';
        resultEl.className = 'rps-result';
        playerChoiceEl.textContent = '❓';
        computerChoiceEl.textContent = '❓';
        playerFighter.classList.remove('rps-win', 'rps-lose');
        computerFighter.classList.remove('rps-win', 'rps-lose');
        clashEffect.className = 'rps-clash-effect';
        clashEffect.textContent = '';
    });

    // Clean up on modal close
    const observer = new MutationObserver(() => {
        if (!document.getElementById('resetRPS')) {
            document.removeEventListener('keydown', handleKeydown);
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // --- Adaptive AI ---
    function getAdaptiveComputerChoice() {
        const config = difficultyConfig[difficulty];
        if (config.adaptiveWeight === 0 || playerHistory.length < 5) {
            return choices[Math.floor(Math.random() * 3)];
        }
        const recentMoves = playerHistory.slice(-HISTORY_WINDOW);
        const freq = { rock: 0, paper: 0, scissors: 0 };
        recentMoves.forEach(m => freq[m]++);

        let dominant = 'rock';
        let maxCount = 0;
        for (const m of choices) {
            if (freq[m] > maxCount) { maxCount = freq[m]; dominant = m; }
        }

        return Math.random() < config.adaptiveWeight
            ? counterMove[dominant]
            : choices[Math.floor(Math.random() * 3)];
    }

    // --- Play Round with Animation ---
    function playRound(playerChoice) {
        isAnimating = true;
        choiceBtns.forEach(b => b.classList.add('rps-btn-disabled'));

        // Record history
        playerHistory.push(playerChoice);
        storage.saveToStorage('rpsPlayerHistory', playerHistory);

        // Reset visuals
        playerFighter.classList.remove('rps-win', 'rps-lose');
        computerFighter.classList.remove('rps-win', 'rps-lose');
        clashEffect.className = 'rps-clash-effect';
        clashEffect.textContent = '';
        resultEl.className = 'rps-result';
        resultEl.textContent = '...';

        // Show player choice immediately
        playerChoiceEl.textContent = emojis[playerChoice];

        // Shake animation for computer
        computerChoiceEl.textContent = '❓';
        computerFighter.classList.add('rps-shake');

        // Cycle through random emojis during shake
        let cycleCount = 0;
        const cycleInterval = setInterval(() => {
            computerChoiceEl.textContent = emojis[choices[cycleCount % 3]];
            cycleCount++;
        }, 80);

        // Reveal after delay
        setTimeout(() => {
            clearInterval(cycleInterval);
            computerFighter.classList.remove('rps-shake');

            const computerChoice = getAdaptiveComputerChoice();
            computerChoiceEl.textContent = emojis[computerChoice];

            // Determine result
            let result = '';
            let resultClass = '';
            let clashEmoji = '';

            if (playerChoice === computerChoice) {
                result = "It's a tie! 🤝";
                resultClass = 'rps-result-tie';
                clashEmoji = '🤝';
                stats.gamesPlayed++;
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                result = 'You win! 🎉';
                resultClass = 'rps-result-win';
                clashEmoji = '💥';
                playerScore++;
                stats.gamesPlayed++;
                stats.wins++;
                stats.currentStreak++;
                if (stats.currentStreak > stats.bestStreak) {
                    stats.bestStreak = stats.currentStreak;
                }
                if (playerScore > bestScore) {
                    bestScore = playerScore;
                    storage.saveToStorage('rpsBestScore', bestScore);
                }
                playerFighter.classList.add('rps-win');
                computerFighter.classList.add('rps-lose');
            } else {
                result = 'Computer wins! 🤖';
                resultClass = 'rps-result-lose';
                clashEmoji = '💀';
                computerScore++;
                stats.gamesPlayed++;
                stats.losses++;
                stats.currentStreak = 0;
                computerFighter.classList.add('rps-win');
                playerFighter.classList.add('rps-lose');
            }

            // Show clash effect
            clashEffect.textContent = clashEmoji;
            clashEffect.classList.add('rps-clash-show');

            // Show result
            resultEl.textContent = result;
            resultEl.classList.add(resultClass);

            updateScore();
            saveRpsStats();
            updateStatsDisplay();
            updateTendencyDisplay();

            // Re-enable buttons
            setTimeout(() => {
                isAnimating = false;
                choiceBtns.forEach(b => b.classList.remove('rps-btn-disabled'));
                clashEffect.classList.remove('rps-clash-show');
            }, 400);

        }, 600);
    }

    // --- UI Helpers ---
    function updateScore() {
        document.getElementById('playerScore').textContent = playerScore;
        document.getElementById('computerScore').textContent = computerScore;
    }

    function updateStatsDisplay() {
        gamesPlayedDisplay.textContent = stats.gamesPlayed;
        winsDisplay.textContent = stats.wins;
        lossesDisplay.textContent = stats.losses;
        currentStreakDisplay.textContent = stats.currentStreak;
        bestStreakDisplay.textContent = stats.bestStreak;
    }

    function saveRpsStats() {
        storage.saveToStorage('rpsStats', stats);
    }

    function updateTendencyDisplay() {
        const total = playerHistory.length;
        const freq = { rock: 0, paper: 0, scissors: 0 };
        playerHistory.forEach(m => freq[m]++);

        const rockPct = total > 0 ? Math.round((freq.rock / total) * 100) : 33;
        const paperPct = total > 0 ? Math.round((freq.paper / total) * 100) : 33;
        const scissorsPct = total > 0 ? Math.round((freq.scissors / total) * 100) : 34;

        document.getElementById('tendRock').style.flex = Math.max(freq.rock, 0.3);
        document.getElementById('tendPaper').style.flex = Math.max(freq.paper, 0.3);
        document.getElementById('tendScissors').style.flex = Math.max(freq.scissors, 0.3);

        document.getElementById('tendRockPct').textContent = rockPct + '%';
        document.getElementById('tendPaperPct').textContent = paperPct + '%';
        document.getElementById('tendScissorsPct').textContent = scissorsPct + '%';
    }
}