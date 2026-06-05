// ============================================
// WORD SCRAMBLE GAME
// ============================================


function getWordScrambleHTML() {
    console.log('🎨 Generating Word Scramble HTML');
    return ` ... your HTML ... `;
}

function initWordScramble() {
    console.log('🚀 Initializing Word Scramble');
    // Your existing code
}
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
                    <div class="stat">
                        <span class="stat-label">Time Left:</span>
                        <span class="stat-value" id="scrambleTimer">30s</span>
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
    const timerEl = document.getElementById('scrambleTimer');

    const words = [
        // Space & Science
        { word: 'planet', hint: 'A celestial body that orbits a star.' },
        { word: 'galaxy', hint: 'A massive system of stars, gas, and dust.' },
        { word: 'comet', hint: 'An icy celestial body with a glowing tail.' },
        { word: 'telescope', hint: 'Instrument used to observe distant objects in space.' },
        { word: 'gravity', hint: 'The force that pulls objects toward Earth.' },
        { word: 'molecule', hint: 'Two or more atoms bonded together.' },


        // Music
        { word: 'guitar', hint: 'String instrument played by strumming.' },
        { word: 'piano', hint: 'Keyboard instrument with black and white keys.' },
        { word: 'drums', hint: 'Percussion instrument played with sticks.' },
        { word: 'violin', hint: 'Small string instrument played with a bow.' },
        { word: 'melody', hint: 'A sequence of musical notes that is pleasing.' },

        //Food
        { word: 'pizza', hint: 'Italian dish with cheese, sauce, and toppings.' },
        { word: 'burger', hint: 'Sandwich with a patty between buns.' },
        { word: 'sushi', hint: 'Japanese dish with raw fish and rice.' },
        { word: 'chocolate', hint: 'Sweet brown treat made from cocoa beans.' },
        { word: 'icecream', hint: 'Frozen dessert that melts in the sun.'},


        // Nature
        { word: 'mountain', hint: 'Large natural elevation of Earth\'s surface.' },
        { word: 'ocean', hint: 'Vast body of saltwater covering most of Earth.' },
        { word: 'forest', hint: 'Large area covered with trees.' },
        { word: 'desert', hint: 'Dry area with little rainfall and sand.' },
        { word: 'volcano', hint: 'Mountain that erupts with lava and ash.' },
        { word: 'waterfall', hint: 'Water flowing over a vertical drop.' },

         // Technology
        { word: 'keyboard', hint: 'Device with keys for typing.' },
        { word: 'monitor', hint: 'Screen that displays computer output.' },
        { word: 'speaker', hint: 'Device that produces sound.' },
        { word: 'printer', hint: 'Device that puts text/images on paper.' },
        { word: 'internet', hint: 'Global network connecting millions of computers.' },
        { word: 'browser', hint: 'App like Chrome or Firefox to surf the web.' },

        // Sports
        { word: 'football', hint: 'Sport where you kick a ball into a goal.' },
        { word: 'basketball', hint: 'Sport where you shoot a ball through a hoop.' },
        { word: 'tennis', hint: 'Sport played with rackets and a yellow ball.' },
        { word: 'cricket', hint: 'Popular bat-and-ball sport in England and India.' },
        { word: 'swimming', hint: 'Sport where you move through water.' },
        { word: 'chess', hint: 'Strategic board game with kings, queens, and pawns.' },
        ];

    let current = null;
    let score = 0;
    let streak = 0;
    let attempts = 3;
    let usedWords = [];
    let roundOver = false;
    
    // Timer background trackers
    let timerId = null;
    let timeLeft = 30;

    function startTimer() {
        clearInterval(timerId); // Terminate any existing background loops
        timeLeft = 30;
        timerEl.textContent = `${timeLeft}s`;

        timerId = setInterval(() => {
            if (roundOver) {
                clearInterval(timerId);
                return;
            }

            timeLeft--;
            timerEl.textContent = `${timeLeft}s`;

            if (timeLeft <= 0) {
                clearInterval(timerId);
                streak = 0; 
                updateStats();
                revealAnswer('lose');
                setMessage('Time ran out! ⏰', 'lose');
            }
        }, 1000);
    }

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
        wordEl.textContent = '';
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
        guessInput.focus({ preventScroll: true });
        
        // Launch countdown engine for the active round
        startTimer();
    }

    function revealAnswer(state) {
        roundOver = true;
        guessInput.disabled = true;
        checkBtn.disabled = true;
        renderWord(current.word);
        setMessage(`The word was ${current.word.toUpperCase()}.`, state);
        clearInterval(timerId); // Stop running the timer loop
    }
function checkGuess() {
    if (roundOver) return;

    const guess = normalize(guessInput.value);
    if (!guess) {
        setMessage('Type your guess first.', 'lose');
        return;
    }

    if (guess === current.word) {
        // Calculate time taken for this round
        // timeLeft counts DOWN from 30, so timeTaken = 30 - timeLeft
        const timeTaken = 30 - timeLeft;
        
        // Calculate points based on time taken (FASTER = MORE POINTS)
        let points = 0;
        let speedCategory = '';
        
        if (timeTaken <= 5) {
            points = 15;
            speedCategory = 'LIGHTNING FAST!';
        } else if (timeTaken <= 10) {
            points = 12;
            speedCategory = 'VERY FAST!';
        } else if (timeTaken <= 20) {
            points = 8;
            speedCategory = 'GOOD!';
        } else {
            points = 5;
            speedCategory = 'SLOW...';
        }
        
        // Update score
        score += points;
        
        // Increase streak by 1
        streak++;
        
        updateStats();
        revealAnswer('win');

        setMessage(`✅ Correct!<br><br>Time taken:${timeTaken} seconds <br></br> Speed: ${speedCategory} <br><br>Points Received:+${points} points!`, 'win');
        return;
    }

    attempts--;
    if (attempts <= 0) {
        attempts = 0;
        streak = 0;
        updateStats();
        revealAnswer('lose');
        setMessage(`❌ Out of attempts! The word was ${current.word.toUpperCase()}.`, 'lose');
        return;
    }

    updateStats();
    setMessage(`❌ Not quite. ${attempts} attempt${attempts === 1 ? '' : 's'} left.`, 'lose');
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
        guessInput.focus({ preventScroll: true });
    });

    nextBtn.addEventListener('click', () => {
        if (!roundOver) {
            streak = 0;
        }
        startRound(roundOver);
    });

    resetBtn.addEventListener('click', () => {
        clearInterval(timerId);
        score = 0;
        streak = 0;
        usedWords = [];
        startRound(false);
    });

    startRound(false);
}