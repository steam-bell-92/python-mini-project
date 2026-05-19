function getRockPaperScissorHTML() {
    return `
        <div class="project-content">
            <h2>🪨 Rock Paper Scissors</h2>
            <div class="game-container">
                <div class="score-board">
                    <div class="score-item">
                        <span class="score-label">You</span>
                        <span class="score-value" id="playerScore">0</span>
                    </div>
                    <div class="score-item">
                        <span class="score-label">Computer</span>
                        <span class="score-value" id="computerScore">0</span>
                    </div>
                </div>
                
                <div class="game-display">
                    <div class="choice-display">
                        <div class="player-choice">
                            <p>You</p>
                            <div class="choice-emoji" id="playerChoice">❓</div>
                        </div>
                        <div class="vs">VS</div>
                        <div class="computer-choice">
                            <p>Computer</p>
                            <div class="computer-cards">
                                <div class="comp-card" id="comp-rock">
                                    <span class="choice-icon">🪨</span>
                                    <span>Rock</span>
                                </div>
                                <div class="comp-card" id="comp-paper">
                                    <span class="choice-icon">📄</span>
                                    <span>Paper</span>
                                </div>
                                <div class="comp-card" id="comp-scissors">
                                    <span class="choice-icon">✂️</span>
                                    <span>Scissors</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="result-message" id="resultMessage">Make your choice!</div>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <span class="stat-label">Games Played</span>
                        <strong id="gamesPlayed">0</strong>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Wins</span>
                        <strong id="wins">0</strong>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Losses</span>
                        <strong id="losses">0</strong>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Current Streak</span>
                        <strong id="currentStreak">0</strong>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Best Streak</span>
                        <strong id="bestStreak">0</strong>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Best Score</span>
                        <strong id="bestScore">0</strong>
                    </div>
                </div>

                <div class="choices">
                    <button class="choice-btn" data-choice="rock">
                        <span class="choice-icon">🪨</span>
                        <span>Rock</span>
                    </button>
                    <button class="choice-btn" data-choice="paper">
                        <span class="choice-icon">📄</span>
                        <span>Paper</span>
                    </button>
                    <button class="choice-btn" data-choice="scissors">
                        <span class="choice-icon">✂️</span>
                        <span>Scissors</span>
                    </button>
                </div>
                
                <button class="btn-reset" id="resetRPS">Reset Game</button>
            </div>
        </div>
        
        <style>
            .game-container {
                text-align: center;
                padding: 2rem;
            }
            
            .score-board {
                display: flex;
                justify-content: center;
                gap: 3rem;
                margin-bottom: 2rem;
            }
            
            .score-item {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
            
            .score-label {
                font-size: 1rem;
                color: var(--text-secondary);
            }
            
            .score-value {
                font-size: 2.5rem;
                font-weight: bold;
                color: var(--primary-color);
            }
            
            .game-display {
                margin: 2rem 0;
            }
            
            .choice-display {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                margin-bottom: 1.5rem;
            }
            
            .choice-emoji {
                font-size: 5rem;
                padding: 1rem;
                animation: bounce 2s infinite;
            }
            
            .vs {
                font-size: 2rem;
                font-weight: bold;
                color: var(--primary-color);
            }
            
            .result-message {
                font-size: 1.5rem;
                font-weight: bold;
                min-height: 2rem;
                color: var(--primary-color);
            }

            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
                gap: 1rem;
                margin: 1.5rem 0 2rem;
            }

            .stat-card {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 16px;
                padding: 1rem;
                text-align: center;
            }

            .stat-label {
                display: block;
                font-size: 0.9rem;
                color: var(--text-secondary);
                margin-bottom: 0.5rem;
            }

            .stat-card strong {
                font-size: 1.5rem;
                color: var(--primary-color);
            }

            .computer-cards {
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                margin-top: 0.5rem;
            }

            .comp-card {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.3rem;
                padding: 0.75rem;
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                min-width: 70px;
                opacity: 0.35;
                pointer-events: none;
                transition: var(--transition);
            }

            .comp-card .choice-icon {
                font-size: 1.8rem;
            }

            .comp-card.selected {
                opacity: 1;
                border-color: var(--primary-color);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.3);
            }
            
            .choices {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin: 2rem 0;
                flex-wrap: wrap;
            }
            
            .choice-btn {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                padding: 1.5rem;
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                cursor: pointer;
                transition: var(--transition);
                min-width: 120px;
            }
            
            .choice-btn:hover {
                transform: translateY(-5px);
                border-color: var(--primary-color);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.3);
            }
            
            .choice-icon {
                font-size: 3rem;
            }
            
            .btn-reset {
                background: var(--danger-color);
                color: white;
                border: none;
                padding: 0.75rem 2rem;
                border-radius: 50px;
                cursor: pointer;
                font-size: 1rem;
                margin-top: 1rem;
                transition: var(--transition);
            }
            
            .btn-reset:hover {
                transform: scale(1.05);
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }
        </style>
    `;
}

function initRockPaperScissor() {
    let playerScore = 0;
    let computerScore = 0;
    
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = { rock: '🪨', paper: '📄', scissors: '✂️' };
    
    const storage = window.appStorage || {
        saveToStorage(key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        },
        loadFromStorage(key, defaultValue = null) {
            const data = localStorage.getItem(key);
            if (!data) return defaultValue;
            try {
                return JSON.parse(data);
            } catch {
                return defaultValue;
            }
        },
    };

    const choiceBtns = document.querySelectorAll('.choice-btn');
    const resetBtn = document.getElementById('resetRPS');

    const gamesPlayedDisplay = document.getElementById('gamesPlayed');
    const winsDisplay = document.getElementById('wins');
    const lossesDisplay = document.getElementById('losses');
    const currentStreakDisplay = document.getElementById('currentStreak');
    const bestStreakDisplay = document.getElementById('bestStreak');
    const bestScoreDisplay = document.getElementById('bestScore');

    const stats = storage.loadFromStorage('rpsStats', {
        gamesPlayed: 0,
        wins: 0,
        losses: 0,
        currentStreak: 0,
        bestStreak: 0,
    });

    let bestScore = storage.loadFromStorage('rpsBestScore', 0);
    updateStatsDisplay();
    updateRpsBestScore();

    choiceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const playerChoice = btn.getAttribute('data-choice');
            playRound(playerChoice);
        });
    });
    
    resetBtn.addEventListener('click', () => {
        playerScore = 0;
        computerScore = 0;
        updateScore();
        document.getElementById('resultMessage').textContent = 'Make your choice!';
        document.getElementById('playerChoice').textContent = '❓';
        document.querySelectorAll('.comp-card').forEach(card => {
            card.classList.remove('selected');
        });
    });

    function updateStatsDisplay() {
        gamesPlayedDisplay.textContent = stats.gamesPlayed;
        winsDisplay.textContent = stats.wins;
        lossesDisplay.textContent = stats.losses;
        currentStreakDisplay.textContent = stats.currentStreak;
        bestStreakDisplay.textContent = stats.bestStreak;
    }

    function updateRpsBestScore() {
        bestScoreDisplay.textContent = bestScore || 0;
    }

    function saveRpsStats() {
        storage.saveToStorage('rpsStats', stats);
    }

    function playRound(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        document.querySelectorAll('.comp-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.getElementById(`comp-${computerChoice}`).classList.add('selected');
        document.getElementById('playerChoice').textContent = emojis[playerChoice];

        let result = '';
        if (playerChoice === computerChoice) {
            result = "It's a tie! 🤝";
            stats.gamesPlayed++;
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'You win! 🎉';
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
        } else {
            result = 'Computer wins! 🤖';
            computerScore++;
            stats.gamesPlayed++;
            stats.losses++;
            stats.currentStreak = 0;
        }

        document.getElementById('resultMessage').textContent = result;
        updateScore();
        saveRpsStats();
        updateStatsDisplay();
        updateRpsBestScore();
    }
    
    function updateScore() {
        document.getElementById('playerScore').textContent = playerScore;
        document.getElementById('computerScore').textContent = computerScore;
    }
}
