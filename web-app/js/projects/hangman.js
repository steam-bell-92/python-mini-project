function getHangmanHTML() {
    return `
        <div class="project-content">
            <h2>Hangman Game</h2>
            <div class="hangman-container">

                <!-- Difficulty Screen -->
                <div id="hangmanDifficultyScreen">
                    <p class="hangman-intro">Choose your difficulty!</p>
                    <div class="difficulty-cards">
                        <button class="difficulty-card easy" data-difficulty="easy">
                            <span class="diff-icon">🟢</span>
                            <span class="diff-name">Easy</span>
                            <span class="diff-desc">Short common words · 8 attempts</span>
                        </button>
                        <button class="difficulty-card medium" data-difficulty="medium">
                            <span class="diff-icon">🟡</span>
                            <span class="diff-name">Medium</span>
                            <span class="diff-desc">Everyday words · 6 attempts</span>
                        </button>
                        <button class="difficulty-card hard" data-difficulty="hard">
                            <span class="diff-icon">🔴</span>
                            <span class="diff-name">Hard</span>
                            <span class="diff-desc">Long technical words · 5 attempts</span>
                        </button>
                    </div>
                </div>

                <!-- Game Screen -->
                <div id="hangmanGameScreen" style="display:none;">
                    <div class="game-stats">
                        <div class="stat">
                            <span class="stat-label">Difficulty</span>
                            <span class="stat-value" id="currentDiffLabel">—</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Attempts Left</span>
                            <span class="stat-value" id="attemptsLeft">6</span>
                        </div>
                        <div class="stat">
                            <span class="stat-label">Word Length</span>
                            <span class="stat-value" id="wordLength">0</span>
                        </div>
                    </div>

                    <canvas id="hangmanCanvas" width="300" height="350"></canvas>

                    <div class="word-display" id="wordDisplay"></div>

                    <div class="hint-box" id="hintBox"></div>

                    <div class="guessed-letters">
                        <h4>Guessed Letters:</h4>
                        <div id="guessedList">None</div>
                    </div>

                    <div class="keyboard" id="keyboard"></div>

                    <p class="keyboard-hint">⌨️ Type any letter key to guess directly</p>

                    <div class="game-message" id="gameMessage"></div>

                    <div class="action-row">
                        <button class="btn-new-game" id="newGameBtn">🎮 New Game</button>
                        <button class="btn-change-diff" id="hangmanChangeDiff">⚙️ Change Difficulty</button>
                    </div>
                </div>

            </div>
        </div>

        <style>
            .hangman-container {
                padding: 2rem;
                max-width: 800px;
                margin: 0 auto;
                text-align: center;
            }

            /* ── Difficulty selector ── */
            .hangman-intro {
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
                width: 165px;
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
            }

            .difficulty-card.easy:hover   { border-color: #22c55e; }
            .difficulty-card.medium:hover { border-color: #eab308; }
            .difficulty-card.hard:hover   { border-color: #ef4444; }

            .diff-icon { font-size: 2rem; }
            .diff-name { font-size: 1.2rem; font-weight: bold; }
            .diff-desc { font-size: 0.82rem; color: var(--text-secondary); }

            /* ── Game stats ── */
            .game-stats {
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin-bottom: 2rem;
                flex-wrap: wrap;
            }

            .stat {
                background: var(--surface-color);
                padding: 1rem 2rem;
                border-radius: 10px;
                border: 2px solid var(--border-color);
            }

            .stat-label {
                display: block;
                font-size: 0.9rem;
                color: var(--text-secondary);
                margin-bottom: 0.5rem;
            }

            .stat-value {
                display: block;
                font-size: 1.8rem;
                font-weight: bold;
                color: var(--primary-color);
            }

            /* ── Canvas ── */
            #hangmanCanvas {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                margin: 2rem auto;
                display: block;
                box-shadow: var(--shadow);
            }

            /* ── Word display ── */
            .word-display {
                font-size: 3rem;
                letter-spacing: 1rem;
                margin: 2rem 0;
                font-family: 'Courier New', monospace;
                font-weight: bold;
                min-height: 4rem;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
            }

            .letter-box {
                display: inline-block;
                width: 50px;
                height: 60px;
                line-height: 60px;
                margin: 0.25rem;
                border-bottom: 3px solid var(--primary-color);
                color: var(--text-color);
            }

            /* ── Hint box ── */
            .hint-box {
                font-size: 1rem;
                color: var(--text-secondary);
                font-style: italic;
                margin-bottom: 1rem;
                min-height: 1.5rem;
            }

            /* ── Guessed letters ── */
            .guessed-letters {
                margin: 2rem 0;
            }

            .guessed-letters h4 {
                color: var(--text-secondary);
                margin-bottom: 1rem;
            }

            #guessedList {
                font-size: 1.2rem;
                color: var(--text-color);
                min-height: 2rem;
            }

            /* ── Keyboard ── */
            .keyboard {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                justify-content: center;
                margin: 2rem 0;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            }

            .key-btn {
                width: 45px;
                height: 45px;
                background: var(--primary-color);
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 1.2rem;
                font-weight: bold;
                cursor: pointer;
                transition: var(--transition);
            }

            .key-btn:hover:not(:disabled) {
                transform: scale(1.1);
                box-shadow: 0 3px 10px rgba(99, 102, 241, 0.4);
            }

            .key-btn:disabled {
                background: var(--border-color);
                cursor: not-allowed;
                opacity: 0.5;
            }

            .key-btn.correct { background: var(--success-color); }
            .key-btn.wrong   { background: var(--danger-color); }

            .key-btn.key-flash {
                transform: scale(1.2);
                box-shadow: 0 3px 10px rgba(99, 102, 241, 0.6);
            }

            /* ── Messages ── */
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

            .game-message {
                font-size: 1.5rem;
                font-weight: bold;
                min-height: 3rem;
                margin: 2rem 0;
            }

            .game-message.win  { color: var(--success-color); }
            .game-message.lose { color: var(--danger-color); }

            /* ── Buttons ── */
            .action-row {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
            }

            .btn-new-game {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                border: none;
                padding: 1rem 3rem;
                border-radius: 50px;
                font-size: 1.2rem;
                cursor: pointer;
                transition: var(--transition);
            }

            .btn-new-game:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
            }

            .btn-change-diff {
                background: var(--surface-color);
                color: var(--text-color);
                border: 2px solid var(--border-color);
                padding: 1rem 2rem;
                border-radius: 50px;
                font-size: 1rem;
                cursor: pointer;
                transition: var(--transition);
            }

            .btn-change-diff:hover {
                border-color: var(--primary-color);
            }
        </style>
    `;
}

function initHangman() {
    // ── Word lists by difficulty 
    const WORD_LISTS = {
        easy: [
            { word: 'cat',    hint: 'Small furry pet 🐱' },
            { word: 'dog',    hint: 'Man\'s best friend 🐶' },
            { word: 'sun',    hint: 'Shines in the sky ☀️' },
            { word: 'rain',   hint: 'Falls from clouds 🌧️' },
            { word: 'fish',   hint: 'Swims in water 🐟' },
            { word: 'bird',   hint: 'Has wings and can fly 🐦' },
            { word: 'cake',   hint: 'Sweet baked treat 🎂' },
            { word: 'star',   hint: 'Twinkles at night ⭐' },
            { word: 'tree',   hint: 'Has leaves and bark 🌳' },
            { word: 'frog',   hint: 'Green and hops around 🐸' },
            { word: 'milk',   hint: 'White drink from cows 🥛' },
            { word: 'ball',   hint: 'Round toy you throw ⚽' },
            { word: 'moon',   hint: 'Glows at night 🌙' },
            { word: 'lion',   hint: 'King of the jungle 🦁' },
            { word: 'rose',   hint: 'Fragrant red flower 🌹' },
        ],
        medium: [
            { word: 'python',      hint: 'Programming language 🐍' },
            { word: 'keyboard',    hint: 'Used to type input ⌨️' },
            { word: 'monitor',     hint: 'Displays output on screen 🖥️' },
            { word: 'internet',    hint: 'Global network 🌐' },
            { word: 'database',    hint: 'Stores structured data' },
            { word: 'elephant',    hint: 'Largest land animal 🐘' },
            { word: 'football',    hint: 'Played worldwide ⚽' },
            { word: 'cricket',     hint: 'Popular sport 🏏' },
            { word: 'teacher',     hint: 'Person who teaches' },
            { word: 'library',     hint: 'Place full of books 📚' },
            { word: 'battery',     hint: 'Stores electrical power 🔋' },
            { word: 'engineer',    hint: 'Designs and builds things 🔧' },
            { word: 'hospital',    hint: 'Where patients are treated 🏥' },
            { word: 'calendar',    hint: 'Tracks days and months 📅' },
            { word: 'adventure',   hint: 'An exciting journey 🗺️' },
        ],
        hard: [
            { word: 'algorithm',       hint: 'Step-by-step problem-solving method' },
            { word: 'cryptography',    hint: 'Science of secret codes 🔐' },
            { word: 'asynchronous',    hint: 'Not happening at the same time' },
            { word: 'polymorphism',    hint: 'OOP concept: many forms' },
            { word: 'encapsulation',   hint: 'OOP: bundling data with methods' },
            { word: 'microprocessor',  hint: 'Brain of a computer chip 💾' },
            { word: 'infrastructure',  hint: 'Underlying foundation of a system' },
            { word: 'authentication',  hint: 'Verifying who you are 🔑' },
            { word: 'concatenation',   hint: 'Joining strings end to end' },
            { word: 'parallelism',     hint: 'Running tasks simultaneously' },
            { word: 'semiconductor',   hint: 'Material used in electronics' },
            { word: 'extrapolation',   hint: 'Estimating beyond known data' },
            { word: 'vulnerability',   hint: 'A security weakness 🛡️' },
            { word: 'decomposition',   hint: 'Breaking a problem into parts' },
            { word: 'initialization',  hint: 'Setting up a starting value' },
        ],
    };

    const DIFFICULTIES = {
        easy:   { label: '🟢 Easy',   maxAttempts: 8 },
        medium: { label: '🟡 Medium', maxAttempts: 6 },
        hard:   { label: '🔴 Hard',   maxAttempts: 5 },
    };

    // ── DOM refs 
    const difficultyScreen  = document.getElementById('hangmanDifficultyScreen');
    const gameScreen        = document.getElementById('hangmanGameScreen');
    const canvas            = document.getElementById('hangmanCanvas');
    const ctx               = canvas.getContext('2d');
    const wordDisplay       = document.getElementById('wordDisplay');
    const guessedList       = document.getElementById('guessedList');
    const attemptsLeftEl    = document.getElementById('attemptsLeft');
    const wordLengthEl      = document.getElementById('wordLength');
    const keyboard          = document.getElementById('keyboard');
    const gameMessage       = document.getElementById('gameMessage');
    const newGameBtn        = document.getElementById('newGameBtn');
    const changeDiffBtn     = document.getElementById('hangmanChangeDiff');
    const currentDiffLabel  = document.getElementById('currentDiffLabel');
    const hintBox           = document.getElementById('hintBox');

    // ── State 
    let currentWord    = '';
    let currentHint    = '';
    let guessedLetters = [];
    let correctLetters = [];
    let wrongAttempts  = 0;
    let maxAttempts    = 6;
    let gameOver       = false;
    let currentDiff    = 'medium';

    // ── Difficulty selection 
    document.querySelectorAll('.difficulty-card').forEach(card => {
        card.addEventListener('click', () => {
            currentDiff = card.dataset.difficulty;
            difficultyScreen.style.display = 'none';
            gameScreen.style.display       = '';
            initGame();
            drawGallows();
        });
    });

    // ── Game init 
    function initGame() {
        const config  = DIFFICULTIES[currentDiff];
        maxAttempts   = config.maxAttempts;

        const list    = WORD_LISTS[currentDiff];
        const chosen  = list[Math.floor(Math.random() * list.length)];
        currentWord   = chosen.word;
        currentHint   = chosen.hint;

        guessedLetters = [];
        correctLetters = [];
        wrongAttempts  = 0;
        gameOver       = false;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        currentDiffLabel.textContent = config.label;
        wordLengthEl.textContent     = currentWord.length;
        attemptsLeftEl.textContent   = maxAttempts;
        guessedList.textContent      = 'None';
        gameMessage.textContent      = '';
        gameMessage.className        = 'game-message';
        hintBox.textContent          = `Hint: ${currentHint}`;

        createKeyboard();
        updateWordDisplay();
    }

    // ── Keyboard UI 
    function createKeyboard() {
        keyboard.textContent = '';
        'abcdefghijklmnopqrstuvwxyz'.split('').forEach(letter => {
            const btn = document.createElement('button');
            btn.className       = 'key-btn';
            btn.textContent     = letter.toUpperCase();
            btn.dataset.letter  = letter;
            btn.addEventListener('click', () => guessLetter(letter));
            keyboard.appendChild(btn);
        });
    }

    // ── Word display 
    function updateWordDisplay() {
        wordDisplay.textContent = '';
        for (const letter of currentWord) {
            const box       = document.createElement('div');
            box.className   = 'letter-box';
            box.textContent = correctLetters.includes(letter) ? letter.toUpperCase() : '';
            wordDisplay.appendChild(box);
        }
    }

    // ── Guess logic 
    function guessLetter(letter) {
        if (gameOver || guessedLetters.includes(letter)) return;

        guessedLetters.push(letter);

        const btn = keyboard.querySelector(`[data-letter="${letter}"]`);
        if (btn) {
            btn.disabled = true;
            btn.classList.add('key-flash');
            setTimeout(() => btn.classList.remove('key-flash'), 150);
        }

        if (currentWord.includes(letter)) {
            correctLetters.push(letter);
            btn && btn.classList.add('correct');
            updateWordDisplay();

            if (currentWord.split('').every(l => correctLetters.includes(l))) {
                gameOver = true;
                gameMessage.textContent  = ' Congratulations! You won!';
                gameMessage.className    = 'game-message win';
                disableAllKeys();
            }
        } else {
            wrongAttempts++;
            btn && btn.classList.add('wrong');
            drawHangman(wrongAttempts + 4);
            attemptsLeftEl.textContent = maxAttempts - wrongAttempts;

            if (wrongAttempts >= maxAttempts) {
                gameOver = true;
                gameMessage.textContent = ` Game Over! The word was: <strong>${currentWord.toUpperCase()}</strong>`;
                gameMessage.className = 'game-message lose';
                disableAllKeys();
                // Reveal word in red
                wordDisplay.textContent = '';
                for (const letter of currentWord) {
                    const box           = document.createElement('div');
                    box.className       = 'letter-box';
                    box.textContent     = letter.toUpperCase();
                    box.style.color     = 'var(--danger-color)';
                    wordDisplay.appendChild(box);
                }
            }
        }

        guessedList.textContent = guessedLetters.join(', ').toUpperCase();
    }

    function disableAllKeys() {
        keyboard.querySelectorAll('.key-btn').forEach(b => { b.disabled = true; });
    }

    // ── Draw hangman 
    function drawHangman(stage) {
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth   = 3;
        ctx.lineCap     = 'round';

        switch (stage) {
            case 1: ctx.beginPath(); ctx.moveTo(50, 320); ctx.lineTo(200, 320); ctx.stroke(); break;
            case 2: ctx.beginPath(); ctx.moveTo(100, 320); ctx.lineTo(100, 50); ctx.stroke(); break;
            case 3: ctx.beginPath(); ctx.moveTo(100, 50); ctx.lineTo(200, 50); ctx.stroke(); break;
            case 4: ctx.beginPath(); ctx.moveTo(200, 50); ctx.lineTo(200, 80); ctx.stroke(); break;
            case 5:
                ctx.beginPath(); ctx.arc(200, 100, 20, 0, Math.PI * 2); ctx.stroke();
                ctx.fillStyle = '#64748b';
                ctx.beginPath(); ctx.arc(195, 95, 2, 0, Math.PI * 2); ctx.fill();
                ctx.beginPath(); ctx.arc(205, 95, 2, 0, Math.PI * 2); ctx.fill();
                ctx.beginPath(); ctx.arc(200, 105, 8, 0, Math.PI, false); ctx.stroke();
                break;
            case 6: ctx.beginPath(); ctx.moveTo(200, 120); ctx.lineTo(200, 200); ctx.stroke(); break;
            case 7: ctx.beginPath(); ctx.moveTo(200, 140); ctx.lineTo(170, 170); ctx.stroke(); break;
            case 8: ctx.beginPath(); ctx.moveTo(200, 140); ctx.lineTo(230, 170); ctx.stroke(); break;
            case 9: ctx.beginPath(); ctx.moveTo(200, 200); ctx.lineTo(180, 250); ctx.stroke(); break;
            case 10: ctx.beginPath(); ctx.moveTo(200, 200); ctx.lineTo(220, 250); ctx.stroke(); break;
        }
    }

    function drawGallows() {
        drawHangman(1); drawHangman(2); drawHangman(3); drawHangman(4);
    }

    // ── Buttons 
    newGameBtn.addEventListener('click', () => { initGame(); drawGallows(); });

    changeDiffBtn.addEventListener('click', () => {
        gameScreen.style.display       = 'none';
        difficultyScreen.style.display = '';
    });

    // ── Physical keyboard 
    function handleKeydown(e) {
        if (gameOver) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
        const letter = e.key.toLowerCase();
        if (/^[a-z]$/.test(letter) && !guessedLetters.includes(letter)) guessLetter(letter);
    }
    document.addEventListener('keydown', handleKeydown);

    // Clean up when modal closes
    const observer = new MutationObserver(() => {
        if (!document.getElementById('newGameBtn')) {
            document.removeEventListener('keydown', handleKeydown);
            observer.disconnect();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
}