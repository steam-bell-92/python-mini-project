// ============================================
// WORD SCRAMBLE GAME
// ============================================
function getWordScrambleHTML() {
    return `
        <div class="project-content">
            <h2>&#128292; Word Scramble</h2>
            <div class="scramble-container">
                <div class="game-stats">
                    <div class="stat">
                        <span class="stat-label">Score:</span>
                        <span class="stat-value" id="scrambleScore">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Streak:</span>
                        <span class="stat-value" id="scrambleStreak">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Attempts:</span>
                        <span class="stat-value" id="scrambleAttempts">3</span>
                    </div>
                </div>

                <div class="scramble-board">
                    <div class="scramble-word" id="scrambleWord"></div>
                    <div class="scramble-hint" id="scrambleHint"></div>
                </div>

                <div class="scramble-input-row">
                    <input id="scrambleGuess" type="text" autocomplete="off" placeholder="Type the original word">
                    <button class="btn-check-word" id="checkScrambleBtn">Check</button>
                </div>

                <div class="scramble-actions">
                    <button class="btn-scramble-action" id="shuffleScrambleBtn">Shuffle</button>
                    <button class="btn-scramble-action" id="nextScrambleBtn">Next Word</button>
                    <button class="btn-scramble-reset" id="resetScrambleBtn">New Game</button>
                </div>

                <div class="game-message" id="scrambleMessage"></div>
            </div>
        </div>

        <style>
            .scramble-container {
                padding: 2rem;
                max-width: 800px;
                margin: 0 auto;
                text-align: center;
            }

            .scramble-container .game-stats {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-bottom: 2rem;
                flex-wrap: wrap;
            }

            .scramble-container .stat {
                background: var(--surface-color);
                padding: 1rem 1.8rem;
                border-radius: 10px;
                border: 2px solid var(--border-color);
                min-width: 135px;
            }

            .scramble-container .stat-label {
                display: block;
                font-size: 0.9rem;
                color: var(--text-secondary);
                margin-bottom: 0.5rem;
            }

            .scramble-container .stat-value {
                display: block;
                font-size: 2rem;
                font-weight: bold;
                color: var(--primary-color);
            }

            .scramble-board {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                padding: 2rem;
                margin: 2rem auto;
                box-shadow: var(--shadow);
            }

            .scramble-word {
                display: flex;
                justify-content: center;
                gap: 0.6rem;
                flex-wrap: wrap;
                min-height: 78px;
                align-items: center;
                margin-bottom: 1rem;
            }

            .scramble-tile {
                width: 58px;
                height: 64px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                border-radius: 12px;
                font-size: 2rem;
                font-weight: 800;
                box-shadow: 0 8px 18px rgba(99, 102, 241, 0.28);
                animation: popIn 0.28s ease both;
            }

            .scramble-hint {
                color: var(--text-secondary);
                font-size: 1.05rem;
                line-height: 1.6;
            }

            .scramble-input-row {
                display: flex;
                gap: 0.8rem;
                justify-content: center;
                align-items: stretch;
                margin: 1.5rem auto;
                max-width: 560px;
            }

            #scrambleGuess {
                flex: 1;
                min-width: 0;
                background: var(--surface-color);
                color: var(--text-color);
                border: 2px solid var(--border-color);
                border-radius: 12px;
                padding: 0.9rem 1rem;
                font-size: 1.05rem;
                outline: none;
                transition: var(--transition);
            }

            #scrambleGuess:focus {
                border-color: var(--primary-color);
                box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.18);
            }

            .btn-check-word,
            .btn-scramble-action,
            .btn-scramble-reset {
                color: white;
                border: none;
                border-radius: 50px;
                cursor: pointer;
                font-weight: 700;
                transition: var(--transition);
                white-space: nowrap;
            }

            .btn-check-word {
                background: linear-gradient(135deg, var(--success-color), #059669);
                padding: 0.9rem 1.8rem;
                font-size: 1rem;
            }

            .scramble-actions {
                display: flex;
                gap: 0.8rem;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 1.5rem;
            }

            .btn-scramble-action {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                padding: 0.75rem 1.6rem;
                font-size: 1rem;
            }

            .btn-scramble-reset {
                background: var(--danger-color);
                padding: 0.75rem 1.6rem;
                font-size: 1rem;
            }

            .btn-check-word:hover,
            .btn-scramble-action:hover,
            .btn-scramble-reset:hover {
                transform: scale(1.05);
            }

            .scramble-container .game-message {
                font-size: 1.35rem;
                font-weight: bold;
                min-height: 2.5rem;
            }

            .scramble-container .game-message.win {
                color: var(--success-color);
            }

            .scramble-container .game-message.lose {
                color: var(--danger-color);
            }

            @keyframes popIn {
                from {
                    opacity: 0;
                    transform: translateY(12px) scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
            }

            @media (max-width: 600px) {
                .scramble-container {
                    padding: 1rem 0.25rem;
                }

                .scramble-board {
                    padding: 1.25rem 0.8rem;
                }

                .scramble-tile {
                    width: 42px;
                    height: 50px;
                    font-size: 1.45rem;
                    border-radius: 9px;
                }

                .scramble-input-row {
                    flex-direction: column;
                }

                .btn-check-word {
                    width: 100%;
                }
            }
        </style>
    `;
}

function initWordScramble() {
    const wordEl = document.getElementById('scrambleWord');
    const hintEl = document.getElementById('scrambleHint');
    const guessInput = document.getElementById('scrambleGuess');
    const checkBtn = document.getElementById('checkScrambleBtn');
    const shuffleBtn = document.getElementById('shuffleScrambleBtn');
    const nextBtn = document.getElementById('nextScrambleBtn');
    const resetBtn = document.getElementById('resetScrambleBtn');
    const scoreEl = document.getElementById('scrambleScore');
    const streakEl = document.getElementById('scrambleStreak');
    const attemptsEl = document.getElementById('scrambleAttempts');
    const messageEl = document.getElementById('scrambleMessage');

    const words = [
        { word: 'python', hint: 'A friendly programming language used across this project.' },
        { word: 'variable', hint: 'A named place where a program stores a value.' },
        { word: 'function', hint: 'Reusable code that performs one clear task.' },
        { word: 'keyboard', hint: 'The device you use to type your answers.' },
        { word: 'algorithm', hint: 'A step-by-step method for solving a problem.' },
        { word: 'database', hint: 'An organized collection of information.' },
        { word: 'developer', hint: 'Someone who builds software.' },
        { word: 'network', hint: 'Connected computers that can share data.' },
        { word: 'software', hint: 'Programs and apps that run on a computer.' },
        { word: 'internet', hint: 'The global network that connects websites and services.' },
        { word: 'browser', hint: 'The app you are using to play this web game.' },
        { word: 'syntax', hint: 'The rules for writing valid code.' }
    ];

    let current = null;
    let score = 0;
    let streak = 0;
    let attempts = 3;
    let usedWords = [];
    let roundOver = false;

    function normalize(value) {
        return value.toLowerCase().replace(/[^a-z]/g, '');
    }

    function shuffleWord(word) {
        const letters = word.split('');
        for (let i = letters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letters[i], letters[j]] = [letters[j], letters[i]];
        }

        const shuffled = letters.join('');
        if (shuffled === word && word.length > 3) {
            return shuffleWord(word);
        }
        return shuffled;
    }

    function setMessage(text, state) {
        messageEl.textContent = text;
        messageEl.className = state ? `game-message ${state}` : 'game-message';
    }

    function renderWord(scrambled) {
        wordEl.innerHTML = '';
        scrambled.toUpperCase().split('').forEach((letter, index) => {
            const tile = document.createElement('span');
            tile.className = 'scramble-tile';
            tile.textContent = letter;
            tile.style.animationDelay = `${index * 35}ms`;
            wordEl.appendChild(tile);
        });
    }

    function updateStats() {
        scoreEl.textContent = score;
        streakEl.textContent = streak;
        attemptsEl.textContent = attempts;
    }

    function chooseWord() {
        if (usedWords.length === words.length) {
            usedWords = [];
        }

        let index;
        do {
            index = Math.floor(Math.random() * words.length);
        } while (usedWords.includes(index));

        usedWords.push(index);
        return words[index];
    }

    function startRound(keepStreak = true) {
        current = chooseWord();
        attempts = 3;
        roundOver = false;
        guessInput.value = '';
        guessInput.disabled = false;
        checkBtn.disabled = false;
        hintEl.textContent = `Hint: ${current.hint}`;
        renderWord(shuffleWord(current.word));
        updateStats();
        setMessage(keepStreak ? 'Unscramble the letters.' : 'Fresh word loaded.');
        guessInput.focus();
    }

    function revealAnswer(state) {
        roundOver = true;
        guessInput.disabled = true;
        checkBtn.disabled = true;
        renderWord(current.word);
        setMessage(`The word was ${current.word.toUpperCase()}.`, state);
    }

    function checkGuess() {
        if (roundOver) return;

        const guess = normalize(guessInput.value);
        if (!guess) {
            setMessage('Type your guess first.', 'lose');
            return;
        }

        if (guess === current.word) {
            const earned = attempts * 10 + streak * 5;
            score += earned;
            streak++;
            updateStats();
            revealAnswer('win');
            setMessage(`Correct! +${earned} points.`, 'win');
            return;
        }

        attempts--;
        if (attempts <= 0) {
            attempts = 0;
            streak = 0;
            updateStats();
            revealAnswer('lose');
            return;
        }

        updateStats();
        setMessage(`Not quite. ${attempts} attempt${attempts === 1 ? '' : 's'} left.`, 'lose');
        guessInput.select();
    }

    checkBtn.addEventListener('click', checkGuess);
    guessInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            checkGuess();
        }
    });

    shuffleBtn.addEventListener('click', () => {
        if (!current) return;
        renderWord(shuffleWord(current.word));
        guessInput.focus();
    });

    nextBtn.addEventListener('click', () => {
        if (!roundOver) {
            streak = 0;
        }
        startRound(roundOver);
    });

    resetBtn.addEventListener('click', () => {
        score = 0;
        streak = 0;
        usedWords = [];
        startRound(false);
    });

    startRound(false);
}