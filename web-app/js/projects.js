// Project Registry
// Each project's HTML and logic lives in its own file under js/projects/

// ============================================
// PROJECT INSTRUCTIONS FOR INFO TOOLTIPS
// ============================================

// ============================================
// PROJECT INSTRUCTIONS FOR INFO TOOLTIPS
// ============================================

const projectInstructions = {
    // GAMES
    "2048-game": {
        title: "🎮 How to Play 2048",
        steps: [
            "Use arrow keys (← ↑ → ↓) or on-screen buttons to move tiles",
            "Same numbers merge into one (2+2=4, 4+4=8)",
            "Keep merging to reach 2048!",
            "Game ends when no moves are possible"
        ]
    },
    "snake-game": {
        title: "🐍 How to Play Snake",
        steps: [
            "Use arrow keys to control the snake",
            "Eat the red food to grow longer",
            "Don't hit the walls or yourself",
            "Score increases with each food eaten"
        ]
    },
    "tic-tac-toe": {
        title: "❌⭕ How to Play Tic Tac Toe",
        steps: [
            "Two players take turns (X and O)",
            "Click any empty cell to place your mark",
            "Get 3 in a row (horizontal, vertical, or diagonal) to win",
            "Game ends when someone wins or board is full (draw)"
        ]
    },
    "hangman": {
        title: "🎮 How to Play Hangman",
        steps: [
            "Guess letters to complete the hidden word",
            "Each wrong guess adds a body part to the hangman",
            "6 wrong guesses and you lose",
            "Use the keyboard or on-screen buttons to guess"
        ]
    },
    "flappy-game": {
        title: "🐦 How to Play Flappy Game",
        steps: [
            "Click or press spacebar to make the bird fly",
            "Avoid hitting the pipes",
            "Try to get the highest score",
            "Game gets faster as you progress"
        ]
    },
    "simon-says": {
        title: "🎵 How to Play Simon Says",
        steps: [
            "Watch the sequence of colors/emojis",
            "Repeat the sequence in the same order",
            "Each round adds one more step",
            "One wrong click ends the game"
        ]
    },
    "rock-paper-scissor": {
        title: "✊✋✌️ How to Play Rock Paper Scissors",
        steps: [
            "Choose Rock, Paper, or Scissors",
            "Rock beats Scissors, Scissors beats Paper, Paper beats Rock",
            "Play against the computer",
            "First to reach the win limit wins the match"
        ]
    },
    "dice-rolling": {
        title: "🎲 How to Use Dice Roller",
        steps: [
            "Choose the number of dice you want to roll",
            "Click 'Roll Dice' to roll",
            "Each die shows a random number (1-6)",
            "Think of it like rolling unbiased physical dice"
        ]
    },
    "coin-flip": {
        title: "🪙 How to Play Coin Flip",
        steps: [
            "First, bet on Heads or Tails",
            "Then click 'Flip Coin' to toss",
            "If your prediction is correct, you win!",
            "If wrong, you lose that round"
        ]
    },
    "number-guessing": {
        title: "🎯 How to Play Number Guessing",
        steps: [
            "Guess a number between 1 and 100",
            "Get hints if too high or too low",
            "Try to guess in as few attempts as possible",
            "Range narrows with each guess"
        ]
    },
    "word-scramble": {
        title: "📝 How to Play Word Scramble",
        steps: [
            "Unscramble the jumbled word",
            "You have 30 seconds to guess",
            "Use the shuffle button to rearrange letters",
            "One hint is available if you need help"
        ]
    },
    "emoji-memory": {
        title: "😀 How to Play Emoji Memory",
        steps: [
            "Click Start to begin the game",
            "Watch the sequence of emojis shown by the system",
            "Retrace the sequence by clicking the emoji buttons",
            "Each level adds one more emoji to the sequence",
            "Click Reset once to restart from Level 1",
            "Click Reset twice to end the test"
        ]
    },
    "dots-boxes": {
        title: "🔲 How to Play Dots and Boxes",
        steps: [
            "Choose your grid size",
            "Select '2 Players' to play with another person",
            "Select 'AI' to play against the computer",
            "Choose AI difficulty: Easy, Intermediate, or Hard",
            "Click between dots to draw lines",
            "Complete a box to claim it",
            "Player with the most boxes wins",
            "Use Reset to restart the match"
        ]
    },
    "math-quiz": {
        title: "🧮 How to Play Math Quiz",
        steps: [
            "Answer math questions correctly",
            "Answering correctly in a row builds a streak",
            "Streaks increase your points even more",
            "You have 3 lives",
            "Answering wrong costs one life",
            "Difficulty of each question is displayed"
        ]
    },
    "whack-a-mole": {
        title: "🔨 How to Play Whack-a-Mole",
        steps: [
            "Click on moles as they appear",
            "Each mole gives points",
            "Avoid clicking on wrong spots",
            "Beat the clock for high score"
        ]
    },
    "blackjack-21": {
        title: "🃏 How to Play Blackjack",
        steps: [
            "Get as close to 21 without going over",
            "Click 'Hit' for another card",
            "Click 'Stand' to keep your hand",
            "Beat the dealer's hand to win"
        ]
    },
    "flames": {
        title: "💖 How to Use FLAMES",
        steps: [
            "Enter two names",
            "Click Calculate",
            "See your relationship status: Friends, Love, Affection, Marriage, Enemies, Siblings",
            "Based on letter cancellation method"
        ]
    },

    // MATH PROJECTS
    "calculator": {
        title: "🧮 How to Use Calculator",
        steps: [
            "Click number buttons to enter values",
            "Use operators (+, -, ×, ÷)",
            "Press = to see result",
            "Use C to clear, ⌫ to delete",
            "Use √, ^, sin, cos, tan for advanced math"
        ]
    },
    "collatz": {
        title: "🔢 How Collatz Conjecture Works",
        steps: [
            "Enter any positive integer",
            "If even: divide by 2",
            "If odd: multiply by 3 and add 1",
            "The sequence always reaches 1!",
            "Watch the graph and step counter"
        ]
    },
    "fibonacci": {
        title: "📈 How Fibonacci Works",
        steps: [
            "Enter number of terms",
            "Each number is sum of previous two",
            "Sequence starts with 0, 1",
            "Also shows golden spiral visualization"
        ]
    },
    "pascal-triangle": {
        title: "🔺 How Pascal's Triangle Works",
        steps: [
            "Each number is sum of two above",
            "Enter number of rows to generate",
            "Used in combinations and binomial expansions",
            "Hover over hexagons to highlight"
        ]
    },
    "armstrong": {
        title: "💎 How Armstrong Numbers Work",
        steps: [
            "Enter a number to check",
            "Sum of digits raised to power of digit count",
            "If sum equals original number → Armstrong number",
            "Examples: 153, 370, 371, 407"
        ]
    },
    "prime-analyzer": {
        title: "🔢 How Prime Analyzer Works",
        steps: [
            "Check if a number is prime",
            "Generate primes up to a limit",
            "Find primes in a range",
            "Prime numbers are divisible only by 1 and itself"
        ]
    },
    "projectile-motion": {
        title: "⚾ How Projectile Motion Works",
        steps: [
            "Enter initial velocity and angle",
            "Calculate time of flight, max height, range",
            "Visualizes the trajectory"
        ]
    },
    "binary-search": {
        title: "🔍 How Binary Search Works",
        steps: [
            "Enter a sorted array of numbers",
            "Enter target value to search",
            "Use 'Random' option to randomize array and target",
            "Watch the search visualization",
            "Cuts search space in half each step"
        ]
    },
    "bubble-sort": {
        title: "🔄 How Bubble Sort Works",
        steps: [
            "Enter an array of numbers",
            "Choose Ascending or Descending order",
            "Use 'Random' option to randomize array",
            "Watch the sorting visualization",
            "Bubble sort compares adjacent elements and swaps"
        ]
    },
    "coordinate-polar-transform": {
        title: "📐 How Coordinate to Polar Transform Works",
        steps: [
            "Enter X coordinate value",
            "Enter Y coordinate value",
            "Click Convert to get polar transformation",
            "Result shows radius (r) and angle (θ)",
            "Converts Cartesian (x, y) to polar coordinates"
        ]
    },
    "derivative-calculator": {
        title: "📈 How Derivative Calculator Works",
        steps: [
            "Enter the derivative order (n)",
            "Enter the polynomial coefficients",
            "Enter the x value to evaluate at",
            "Choose: 1st derivative, nth derivative, or Evaluate",
            "Get instant derivative results"
        ]
    },
    "progression-recognizer": {
        title: "📊 How AP/GP/AGP/HP Recognizer Works",
        steps: [
            "Enter a sequence of numbers",
            "Click Recognize",
            "It identifies what type of sequence it is",
            "AP: Arithmetic Progression (constant difference)",
            "GP: Geometric Progression (constant ratio)",
            "AGP: Arithmetic-Geometric Progression",
            "HP: Harmonic Progression (reciprocals form AP)"
        ]
    },

    // UTILITIES
    "color-palette": {
        title: "🎨 How to Use Color Palette",
        steps: [
            "Select a website type (Portfolio, E-commerce, etc.)",
            "Choose a mood (Light, Dark, Neutral, Colorful)",
            "Click 'Generate Palette'",
            "Click any color to copy its hex code",
            "Copy the CSS snippet for your project"
        ]
    },
    "morse-code": {
        title: "📻 How to Use Morse Code",
        steps: [
            "Type text in the input box",
            "Click Translate to convert to Morse code",
            "Morse code uses dots (.) and dashes (-)",
            "Each letter is separated by space"
        ]
    },
    "tower-of-hanoi": {
        title: "🗼 How to Solve Tower of Hanoi",
        steps: [
            "Enter the number of disks",
            "Click Solve to watch the animation",
            "See the algorithm solve step by step",
            "Click Reset to reset all disks",
            "Rule: No larger disk on top of smaller disk"
        ]
    },
    "caesar-cipher": {
        title: "🔐 How to Use Caesar Cipher",
        steps: [
            "Enter your message",
            "Choose shift number (1-25)",
            "Click Encrypt or Decrypt",
            "Each letter shifts by the chosen amount",
            "Preserves spaces and punctuation"
        ]
    },
    "number-converter": {
        title: "🔄 How to Use Number Converter",
        steps: [
            "Enter a number",
            "Choose base to convert from and to",
            "Supports decimal, binary, octal, hex",
            "Result appears instantly"
        ]
    },
    "password-forge": {
        title: "🔑 How to Use Password Forge",
        steps: [
            "Choose password length",
            "Select character types (uppercase, lowercase, numbers, symbols)",
            "Click Generate",
            "Copy the secure password"
        ]
    },
    "typing-speed-tester": {
        title: "⌨️ How to Use Typing Speed Tester",
        steps: [
            "Instructions coming soon. Check back later!"
        ]
    }
};

function getProjectInstructions(projectName) {
    return projectInstructions[projectName] || {
        title: "ℹ️ How to Use This Project",
        steps: ["Instructions coming soon. Try exploring the interface!"]
    };
}

function getProjectHTML(projectName) {
    const projects = {
        'rock-paper-scissor': () => getRockPaperScissorHTML(),
        'dice-rolling': () => getDiceRollingHTML(),
        'coin-flip': () => getCoinFlipHTML(),
        'number-guessing': () => getNumberGuessingHTML(),
        'hangman': () => getHangmanHTML(),
        'flames': () => getFlamesHTML(),
        'emoji-memory': () => getEmojiMemoryGameHTML(),
        'fibonacci': () => getFibonacciHTML(),
        'binary-search': () => getBinarySearchHTML(),
        'bubble-sort': () => getBubbleSortHTML(),
        'progression-recognizer': () => getProgressionRecognizerHTML(),
        'pascal-triangle': () => getPascalTriangleHTML(),
        'armstrong': () => getArmstrongHTML(),
        'calculator': () => getCalculatorHTML(),
        'collatz': () => getCollatzHTML(),
        'prime-analyzer': () => getPrimeAnalyzerHTML(),
        'projectile-motion': () => getProjectileMotionHTML(),
        'coordinate-polar-transform': () => getCoordinatePolarTransformHTML(),
        'derivative-calculator': () => getDerivativeCalculatorHTML(),
        'morse-code': () => getMorseCodeHTML(),
        'tower-of-hanoi': () => getTowerOfHanoiHTML(),
        'number-converter': () => getNumberConverterHTML(),
        'typing-speed-tester': () => getTypingSpeedTesterHTML(),
        'snake-game': () => getSnakeGameHTML(),
        'password-forge': () => getPasswordForgeHTML(),
        'whack-a-mole': () => getWhackaMoleHTML(),
        'tic-tac-toe': () => getTicTacToeHTML(),
        'blackjack-21': () => getBlackjackHTML(),
        'word-scramble': () => getWordScrambleHTML(),
        'dots-boxes': () => getDotsBoxesHTML(),
        'math-quiz': () => getMathQuizHTML(),
        'simon-says': () => getSimonSaysHTML(),
        'spot-the-difference': () => getSpotTheDifferenceHTML(),
        'flappy-game': () => getFlappyGameHTML(),
        '2048-game': () => get2048GameHTML(),
        'productive-pet': () => getProductivePetHTML(),
        'color-palette': () => getColorPaletteHTML(),
        'progress-tracker': () => getProgressTrackerHTML(),
        'resume-analyzer': () => getAIResumeAnalyzerHTML(),
        'caesar-cipher': () => getCaesarCipherHTML(),
    };

    try {
        // Only execute the function if it exists in our dictionary
        return projects[projectName] ? projects[projectName]() : '<h2>Project Coming Soon!</h2>';
    } catch (error) {
        console.warn(`Project missing or not loaded: ${projectName}`, error);
        return '<h2>Project Coming Soon!</h2>';
    }
}



// ============================================
// ROCK PAPER SCISSORS
// ============================================
// Moved to js/projects/rock-paper-scissor.js

// ============================================
// DICE ROLLING
// ============================================
// Moved to js/projects/dice-rolling.js

// ============================================
// COIN FLIP
// ============================================
// (Coin Flip HTML & Logic loaded from modular file js/projects/coin-flip.js)

// Continue with more projects in next message...
// Additional Project Implementations


// ============================================
// BLACKJACK (21)
// ============================================
function getBlackjackHTML() {
    return `
        <div class="project-content">
            <h2>🃏 BlackJack (21)</h2>
            <div class="blackjack-container">
                <div class="dealer-area">
                    <h3>Dealer's Hand (<span id="dealerScore">?</span>)</h3>
                    <div id="dealerCards" class="cards-display"></div>
                </div>
                
                <div class="game-message" id="blackjackMessage">Game Starting...</div>
                
                <div class="player-area">
                    <h3>Your Hand (<span id="playerScore">0</span>)</h3>
                    <div id="playerCards" class="cards-display"></div>
                </div>

                <div class="controls">
                    <button class="btn-play" id="btnHit">Hit</button>
                    <button class="btn-play" id="btnStand">Stand</button>
                    <button class="btn-play" style="display:none;" id="btnRestart">Play Again</button>
                </div>
            </div>
        </div>
        
        <style>
            .blackjack-container {
                text-align: center;
                padding: 1rem 2rem 3rem;
            }
            .cards-display {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                justify-content: center;
                margin: 15px 0;
                min-height: 85px;
            }
            .card-ui {
                background: white;
                color: black;
                padding: 15px 20px;
                border-radius: 8px;
                font-size: 1.8rem;
                font-weight: bold;
                box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                border: 1px solid #ccc;
                min-width: 60px;
            }
            .card-ui.red {
                color: #e53e3e;
            }
            .card-ui.hidden-card {
                background: repeating-linear-gradient(45deg, #2d3748, #2d3748 10px, #4a5568 10px, #4a5568 20px);
                color: transparent;
            }
            .game-message {
                font-size: 1.8rem;
                font-weight: bold;
                margin: 25px 0;
                color: var(--primary-color);
                min-height: 3rem;
            }
            .controls {
                display: flex;
                gap: 15px;
                justify-content: center;
                margin-top: 30px;
            }
        </style>
    `;
}

function initBlackjack() {
    const deckTemplate = [
        "A♠️", "2♠️", "3♠️", "4♠️", "5♠️", "6♠️", "7♠️", "8♠️", "9♠️", "10♠️", "J♠️", "Q♠️", "K♠️",
        "A♥️", "2♥️", "3♥️", "4♥️", "5♥️", "6♥️", "7♥️", "8♥️", "9♥️", "10♥️", "J♥️", "Q♥️", "K♥️",
        "A♦️", "2♦️", "3♦️", "4♦️", "5♦️", "6♦️", "7♦️", "8♦️", "9♦️", "10♦️", "J♦️", "Q♦️", "K♦️",
        "A♣️", "2♣️", "3♣️", "4♣️", "5♣️", "6♣️", "7♣️", "8♣️", "9♣️", "10♣️", "J♣️", "Q♣️", "K♣️"
    ];

    let deck = [];
    let playerHand = [];
    let dealerHand = [];
    let playerCards = [];
    let dealerCards = [];

    const btnHit = document.getElementById("btnHit");
    const btnStand = document.getElementById("btnStand");
    const btnRestart = document.getElementById("btnRestart");
    const messageEl = document.getElementById("blackjackMessage");
    const dealerCardsEl = document.getElementById("dealerCards");
    const playerCardsEl = document.getElementById("playerCards");
    const dealerScoreEl = document.getElementById("dealerScore");
    const playerScoreEl = document.getElementById("playerScore");

    // Replaces random.shuffle()
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Replaces check(rank)
    function checkRank(rank) {
        if (['Q', 'K', 'J'].includes(rank)) return 10;
        if (rank === 'A') return 1;
        return parseInt(rank);
    }

    // Replaces calculate(hand) and adds Ace logic (1 or 11)
    function calculate(hand) {
        let sum = 0;
        let aces = 0;
        for (let val of hand) {
            sum += val;
            if (val === 1) aces += 1;
        }
        while (aces > 0 && sum + 10 <= 21) {
            sum += 10;
            aces -= 1;
        }
        return sum;
    }

    // Helper to render card UI
    function getCardHTML(cardStr, isHidden = false) {
        if (isHidden) {
            return `<div class="card-ui hidden-card">?</div>`;
        }
        const isRed = cardStr.includes("♥️") || cardStr.includes("♦️");
        return `<div class="card-ui ${isRed ? 'red' : ''}">${cardStr}</div>`;
    }

    // Refresh the view
    function updateUI(hideDealerCard = false) {
        playerCardsEl.innerHTML = playerCards.map(card => getCardHTML(card)).join("");
        playerScoreEl.textContent = calculate(playerHand);

        if (hideDealerCard && dealerCards.length > 0) {
            dealerCardsEl.innerHTML = getCardHTML(dealerCards[0]) + getCardHTML(null, true);
            dealerScoreEl.textContent = "?";
        } else {
            dealerCardsEl.innerHTML = dealerCards.map(card => getCardHTML(card)).join("");
            dealerScoreEl.textContent = calculate(dealerHand);
        }
    }

    function drawCard(isPlayer) {
        const card = deck.pop();
        const rankStr = card.slice(0, -2); // Replaces card[:-2]
        const rankVal = checkRank(rankStr);

        if (isPlayer) {
            playerCards.push(card);
            playerHand.push(rankVal);
        } else {
            dealerCards.push(card);
            dealerHand.push(rankVal);
        }
    }

    function startGame() {
        deck = [...deckTemplate];
        shuffle(deck);

        playerHand = []; dealerHand = [];
        playerCards = []; dealerCards = [];

        btnHit.style.display = "inline-block";
        btnStand.style.display = "inline-block";
        btnRestart.style.display = "none";
        messageEl.textContent = "Your Turn! Hit or Stand?";

        drawCard(true); // Player
        drawCard(false); // Dealer
        drawCard(true); // Player
        drawCard(false); // Dealer

        updateUI(true); // Hide dealer's second card initially
    }

    function endGame(msg) {
        messageEl.textContent = msg;
        btnHit.style.display = "none";
        btnStand.style.display = "none";
        btnRestart.style.display = "inline-block";
        updateUI(false); // Reveal dealer's hidden card
    }

    btnHit.addEventListener("click", () => {
        drawCard(true);
        updateUI(true);

        if (calculate(playerHand) > 21) {
            endGame("Bust! You lose!");
        }
    });

    btnStand.addEventListener("click", () => {
        // Dealer draws until count is at least 17
        while (calculate(dealerHand) < 17) {
            drawCard(false);
        }

        const pCount = calculate(playerHand);
        const dCount = calculate(dealerHand);

        if (dCount > 21) {
            endGame("Dealer Bust! You win!");
        } else if (pCount === dCount) {
            endGame("Draw!");
        } else if (pCount > dCount) {
            endGame("You win!");
        } else {
            endGame("Dealer wins!");
        }
    });

    btnRestart.addEventListener("click", startGame);

    // Initialize first game automatically
    startGame();
}


// ============================================
// NUMBER GUESSING
// ============================================
function getNumberGuessingHTML() {
    return `
        <div class="project-content">
            <h2>🎯 Number Guessing Game</h2>
            <div class="guessing-container">
                <p class="game-instructions">I'm thinking of a number between 1 and 100!</p>
                
                <div class="guess-input-group">
                    <input type="number" id="guessInput" min="1" max="100" placeholder="Enter your guess">
                    <button class="btn-guess" id="submitGuess">Guess!</button>
                </div>
                
                <div class="feedback" id="feedback"></div>
                
                <div class="game-info">
                    <div class="info-item">
                        <span>Attempts:</span>
                        <span id="attempts">0</span>
                    </div>
                    <div class="info-item">
                        <span>Range:</span>
                        <span id="range">1-100</span>
                    </div>
                </div>
                
                <button class="btn-reset" id="resetGuessing">New Game</button>
            </div>
        </div>
        
        <style>
            .guessing-container {
                padding: 2rem;
                text-align: center;
            }
            
            .game-instructions {
                font-size: 1.3rem;
                margin-bottom: 2rem;
            }
            
            .guess-input-group {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-bottom: 2rem;
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
            }
        </style>
    `;
}

function initNumberGuessing() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let minRange = 1;
    let maxRange = 100;

    const guessInput = document.getElementById('guessInput');
    const submitBtn = document.getElementById('submitGuess');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const rangeDisplay = document.getElementById('range');
    const resetBtn = document.getElementById('resetGuessing');

    submitBtn.addEventListener('click', makeGuess);
    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') makeGuess();
    });

    resetBtn.addEventListener('click', () => {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        minRange = 1;
        maxRange = 100;
        attemptsDisplay.textContent = '0';
        rangeDisplay.textContent = '1-100';
        feedback.textContent = '';
        guessInput.value = '';
        guessInput.disabled = false;
        submitBtn.disabled = false;
    });

    function makeGuess() {
        const guess = parseInt(guessInput.value);

        if (isNaN(guess) || guess < 1 || guess > 100) {
            feedback.textContent = '⚠️ Please enter a number between 1 and 100!';
            feedback.style.color = 'var(--warning-color)';
            return;
        }

        attempts++;
        attemptsDisplay.textContent = attempts;

        if (guess === secretNumber) {
            feedback.textContent = `🎉 Congratulations! You found it in ${attempts} attempts!`;
            feedback.style.color = 'var(--success-color)';
            guessInput.disabled = true;
            submitBtn.disabled = true;
        } else if (guess < secretNumber) {
            feedback.textContent = '📈 Too low! Try higher!';
            feedback.style.color = 'var(--primary-color)';
            minRange = Math.max(minRange, guess + 1);
        } else {
            feedback.textContent = '📉 Too high! Try lower!';
            feedback.style.color = 'var(--danger-color)';
            maxRange = Math.min(maxRange, guess - 1);
        }

        rangeDisplay.textContent = `${minRange}-${maxRange}`;
        guessInput.value = '';
    }
}

// ============================================
// PASCAL'S TRIANGLE (with Hexagons!)
// ============================================
// Code moved to js/projects/pascal-triangle.js

// Calculator module is in js/projects/calculator.js.

// ============================================
// FIBONACCI
// ============================================

function initFibonacci() {
    const termsInput = document.getElementById('fibTerms');
    const generateBtn = document.getElementById('generateFib');
    const display = document.getElementById('fibDisplay');
    const canvas = document.getElementById('fibSpiral');
    const ctx = canvas.getContext('2d');

    function generateFibonacci() {
        const value = termsInput.value.trim();
        const n = parseInt(value);

        // Validation
        if (value === '' || isNaN(n) || n <= 0) {
            display.innerHTML = `
                <p class="fib-error">
                    Please enter a number greater than 0
                </p>
            `;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        display.innerHTML = '';

        let fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }

        fib.slice(0, n).forEach((num, index) => {
            const numEl = document.createElement('div');
            numEl.className = 'fib-number';
            numEl.textContent = num;
            numEl.style.animationDelay = `${index * 0.1}s`;
            display.appendChild(numEl);
        });

        drawSpiral(fib.slice(0, Math.min(n, 12)));
    }

    function drawSpiral(fib) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 3;

        const scale = 5;
        let x = 300, y = 300;
        let direction = 0; // 0: right, 1: up, 2: left, 3: down

        const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];

        fib.forEach((num, i) => {
            const size = num * scale;
            ctx.strokeStyle = colors[i % colors.length];
            ctx.fillStyle = colors[i % colors.length] + '20';

            // Draw square
            ctx.fillRect(x, y, size, size);
            ctx.strokeRect(x, y, size, size);

            // Draw arc
            ctx.beginPath();
            const arcX = direction === 0 ? x + size : direction === 2 ? x : x;
            const arcY = direction === 1 ? y : direction === 3 ? y + size : y;

            ctx.arc(arcX, arcY, size,
                Math.PI * direction / 2,
                Math.PI * (direction + 1) / 2);
            ctx.stroke();

            // Update position for next square
            switch (direction) {
                case 0: y -= fib[i + 1] * scale; break;
                case 1: x -= size; break;
                case 2: y -= size; x -= fib[i + 1] * scale; break;
                case 3: x += size; break;
            }

            direction = (direction + 1) % 4;
        });
    }

    generateBtn.addEventListener('click', generateFibonacci);
    generateFibonacci();
}

// Add placeholder functions for remaining projects

// ============================================
// FLAMES GAME
// ============================================
//Moved to js/projects/flames.js

// ============================================
// COLLATZ CONJECTURE
// ===========================================
function getCollatzHTML() {
    return `
        <div class="project-content">
            <h2>🔢 Collatz Conjecture</h2>
            <p class="project-desc">The famous 3n+1 problem - Watch the sequence reach 1!</p>
            <div class="collatz-container">
                <div class="rules">
                    <h3>Rules:</h3>
                    <div class="rule-item">📉 If even: divide by 2</div>
                    <div class="rule-item">📈 If odd: multiply by 3 and add 1</div>
                    <div class="rule-item">🎯 Continue until reaching 1</div>
                </div>
                
                <div class="input-section">
                    <input type="number" id="collatzNumber" placeholder="Enter a positive integer" min="1" value="27">
                    <button class="btn-generate" id="generateCollatz">🔢 Generate Sequence</button>
                </div>
                
                <div class="collatz-stats" id="collatzStats"></div>
                
                <div class="sequence-display" id="sequenceDisplay"></div>
                
                <canvas id="collatzGraph" width="800" height="300"></canvas>
            </div>
        </div>
        
        <style>
            .collatz-container {
                padding: 2rem;
                max-width: 900px;
                margin: 0 auto;
            }
            
            .rules {
                background: var(--surface-color);
                padding: 1.5rem;
                border-radius: 15px;
                margin-bottom: 2rem;
                border: 2px solid var(--border-color);
            }
            
            .rules h3 {
                margin-bottom: 1rem;
                color: var(--primary-color);
            }
            
            .rule-item {
                padding: 0.5rem;
                margin: 0.5rem 0;
                background: var(--bg-color);
                border-radius: 8px;
                font-size: 1.1rem;
            }
            
            .input-section {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-bottom: 2rem;
                flex-wrap: wrap;
            }
            
            .input-section input {
                flex: 1;
                max-width: 300px;
                padding: 1rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
                text-align: center;
            }
            
            .collatz-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .stat-box {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                padding: 1.5rem;
                border-radius: 15px;
                text-align: center;
            }
            
            .stat-label {
                font-size: 0.9rem;
                opacity: 0.9;
                margin-bottom: 0.5rem;
            }
            
            .stat-value {
                font-size: 2rem;
                font-weight: bold;
            }
            
            .sequence-display {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                padding: 1.5rem;
                margin-bottom: 2rem;
                max-height: 300px;
                overflow-y: auto;
            }
            
            .sequence-number {
                display: inline-block;
                background: var(--primary-color);
                color: white;
                padding: 0.5rem 1rem;
                margin: 0.25rem;
                border-radius: 8px;
                font-family: 'Courier New', monospace;
                font-weight: bold;
                animation: fadeIn 0.3s ease;
            }
            
            .sequence-arrow {
                display: inline-block;
                color: var(--text-secondary);
                margin: 0 0.25rem;
            }
            
            #collatzGraph {
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

function initCollatz() {
    const numberInput = document.getElementById('collatzNumber');
    const generateBtn = document.getElementById('generateCollatz');
    const statsDiv = document.getElementById('collatzStats');
    const sequenceDiv = document.getElementById('sequenceDisplay');
    const canvas = document.getElementById('collatzGraph');
    const ctx = canvas.getContext('2d');

    function generateSequence() {
        let number = parseInt(numberInput.value);

        if (!number || number < 1) {
            sequenceDiv.innerHTML = '<p style="color: var(--danger-color);">⚠️ Please enter a positive integer!</p>';
            statsDiv.innerHTML = '';
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        const originalNumber = number;
        const sequence = [number];
        const maxSteps = 20000;
        let steps = 0;

        // Generate sequence with a safety limit
        while (number !== 1 && steps < maxSteps) {
            if (number % 2 === 0) {
                number = number / 2;
            } else {
                number = 3 * number + 1;
            }
            sequence.push(number);
            steps++;
        }

        const reachedOne = number === 1;

        // Display stats
        const maxNum = Math.max(...sequence);
        const statusText = reachedOne ? 'Reached 1 ✅' : `Not reached in ${maxSteps} steps ❌`;

        statsDiv.innerHTML = `
            <div class="stat-box">
                <div class="stat-label">Starting Number</div>
                <div class="stat-value">${originalNumber}</div>
            </div>
            <div class="stat-box">
                <div class="stat-label">Status</div>
                <div class="stat-value" style="font-size: 1rem; line-height: 1.3;">${statusText}</div>
            </div>
            <div class="stat-box">
                <div class="stat-label">Steps Taken</div>
                <div class="stat-value">${steps}</div>
            </div>
            <div class="stat-box">
                <div class="stat-label">Highest Number</div>
                <div class="stat-value">${maxNum}</div>
            </div>
        `;

        // Display sequence
        sequenceDiv.innerHTML = reachedOne
            ? '<p style="margin-bottom: 1rem; color: var(--success-color); font-weight: 600;">✅ This number reaches 1.</p>'
            : `<p style="margin-bottom: 1rem; color: var(--warning-color); font-weight: 600;">⚠️ Could not confirm reach to 1 within ${maxSteps} steps.</p>`;
        sequence.forEach((num, index) => {
            const numEl = document.createElement('span');
            numEl.className = 'sequence-number';
            numEl.textContent = num;
            numEl.style.animationDelay = `${index * 0.02}s`;
            sequenceDiv.appendChild(numEl);

            if (index < sequence.length - 1) {
                const arrow = document.createElement('span');
                arrow.className = 'sequence-arrow';
                arrow.textContent = '→';
                sequenceDiv.appendChild(arrow);
            }
        });

        // Draw graph for the generated sequence
        drawGraph(sequence);
    }

    function drawGraph(sequence) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (sequence.length === 0) return;

        const padding = 40;
        const graphWidth = canvas.width - 2 * padding;
        const graphHeight = canvas.height - 2 * padding;

        const maxValue = Math.max(...sequence);
        const xStep = graphWidth / (sequence.length - 1);
        const yScale = graphHeight / maxValue;

        // Draw axes
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.stroke();

        // Draw grid lines
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const y = padding + (graphHeight / 5) * i;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(canvas.width - padding, y);
            ctx.stroke();
        }

        // Draw line
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.beginPath();
        sequence.forEach((value, index) => {
            const x = padding + index * xStep;
            const y = canvas.height - padding - value * yScale;

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();

        // Draw points
        ctx.fillStyle = '#8b5cf6';
        sequence.forEach((value, index) => {
            const x = padding + index * xStep;
            const y = canvas.height - padding - value * yScale;

            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        });

        // Draw labels
        ctx.fillStyle = '#94a3b8';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Steps →', canvas.width / 2, canvas.height - 10);

        ctx.save();
        ctx.translate(15, canvas.height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Value', 0, 0);
        ctx.restore();
    }

    generateBtn.addEventListener('click', generateSequence);
    numberInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateSequence();
    });

    // Generate initial sequence
    generateSequence();
}

function getArmstrongHTML() {
    return `
        <div class="project-content">
            <h2>💎 Armstrong Number Checker</h2>
            <p class="project-desc">Check if a number equals the sum of its digits raised to the power of the number of digits</p>
            <div class="armstrong-container">
                <div class="input-section">
                    <input type="number" class="number-input" id="armstrongNumber" placeholder="Enter a number" min="0">
                    <button class="btn-primary" id="checkArmstrong">💎 Check</button>
                </div>
                
                <div class="result-display" id="armstrongResult"></div>
                
                <div class="examples">
                    <h4>Examples of Armstrong Numbers:</h4>
                    <div class="example-grid">
                        <button class="example-btn" data-num="0">0</button>
                        <button class="example-btn" data-num="1">1</button>
                        <button class="example-btn" data-num="153">153</button>
                        <button class="example-btn" data-num="370">370</button>
                        <button class="example-btn" data-num="371">371</button>
                        <button class="example-btn" data-num="407">407</button>
                        <button class="example-btn" data-num="1634">1634</button>
                        <button class="example-btn" data-num="9474">9474</button>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .armstrong-container {
                padding: 2rem;
                max-width: 700px;
                margin: 0 auto;
            }
            
            .result-display {
                margin: 2rem 0;
                min-height: 200px;
            }
            
            .armstrong-result {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                padding: 2rem;
                animation: fadeIn 0.5s ease;
            }
            
            .result-header {
                font-size: 1.8rem;
                font-weight: bold;
                margin-bottom: 1.5rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid var(--border-color);
            }
            
            .result-header.is-armstrong {
                color: var(--success-color);
            }
            
            .result-header.not-armstrong {
                color: var(--danger-color);
            }
            
            .calculation-steps {
                margin: 1.5rem 0;
                padding: 1rem;
                background: var(--bg-color);
                border-radius: 10px;
            }
            
            .step {
                margin: 0.75rem 0;
                font-size: 1.1rem;
                font-family: 'Courier New', monospace;
            }
            
            .digit-breakdown {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
                margin: 1.5rem 0;
            }
            
            .digit-card {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                padding: 1rem;
                border-radius: 10px;
                min-width: 80px;
                text-align: center;
            }
            
            .digit-value {
                font-size: 2rem;
                font-weight: bold;
            }
            
            .digit-power {
                font-size: 0.9rem;
                opacity: 0.9;
                margin-top: 0.5rem;
            }
            
            .examples {
                margin-top: 3rem;
                text-align: center;
            }
            
            .examples h4 {
                margin-bottom: 1rem;
                color: var(--text-secondary);
            }
            
            .example-grid {
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .example-btn {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                color: var(--text-color);
                padding: 0.75rem 1.5rem;
                border-radius: 10px;
                cursor: pointer;
                font-size: 1.1rem;
                transition: var(--transition);
            }
            
            .example-btn:hover {
                border-color: var(--primary-color);
                transform: translateY(-2px);
            }

            /* --- NEW STANDARDIZED INPUT STYLES --- */
            .input-section {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                margin-top: 1rem;
            }

            .number-input {
                width: 60%;
                padding: 0.8rem 1.2rem;
                border-radius: 10px;
                border: 2px solid var(--border-color);
                font-size: 1.1rem;
                background-color: var(--bg-color);
                color: var(--text-color);
                transition: var(--transition);
            }

            .number-input:focus {
                outline: none;
                border-color: var(--primary-color);
                box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.2);
            }

            .btn-primary {
                padding: 0.8rem 1.5rem;
                border: none;
                border-radius: 10px;
                background: var(--primary-color);
                color: white;
                cursor: pointer;
                font-size: 1.1rem;
                font-weight: bold;
                transition: var(--transition);
            }

            .btn-primary:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            }
        </style>
    `;
}
function initArmstrong() {
    const numberInput = document.getElementById('armstrongNumber');
    const checkBtn = document.getElementById('checkArmstrong');
    const resultDiv = document.getElementById('armstrongResult');
    const exampleBtns = document.querySelectorAll('.example-btn');

    function checkArmstrong(num) {

        // FIXED VALIDATION (proper block + NaN handling)
        if (!Number.isFinite(num) || num < 0 || !Number.isInteger(num)) {
            resultDiv.innerHTML = `
                <p style="color:red;">
                    ⚠️ Please enter a valid positive integer!
                </p>
            `;
            return;
        }

        const numStr = String(num);
        const numDigits = numStr.length;
        const digits = numStr.split('').map(Number);

        let sum = 0;
        const calculations = [];

        digits.forEach(digit => {
            const power = Math.pow(digit, numDigits);
            sum += power;
            calculations.push({ digit, power });
        });

        const isArmstrong = sum === num;

        let html = `
            <div class="armstrong-result">
                <div class="result-header ${isArmstrong ? 'is-armstrong' : 'not-armstrong'}">
                    ${isArmstrong ? '✅ Armstrong Number!' : '❌ Not an Armstrong Number'}
                </div>

                <div class="calculation-steps">
                    <div class="step"><strong>Number:</strong> ${num}</div>
                    <div class="step"><strong>Digits:</strong> ${numDigits}</div>
                    <div class="step"><strong>Calculation:</strong> Each digit raised to power ${numDigits}</div>
                </div>

                <div class="digit-breakdown">
        `;

        calculations.forEach(calc => {
            html += `
                <div class="digit-card">
                    <div class="digit-value">${calc.digit}</div>
                    <div class="digit-power">${calc.digit}^${numDigits} = ${calc.power}</div>
                </div>
            `;
        });

        html += `
                </div>

                <div class="calculation-steps">
                    <div class="step">
                        <strong>Sum:</strong> ${calculations.map(c => c.power).join(' + ')} = ${sum}
                    </div>
                    <div class="step">
                        ${isArmstrong
                ? `<span style="color: var(--success-color);">✓ ${sum} = ${num}</span>`
                : `<span style="color: var(--danger-color);">✗ ${sum} ≠ ${num}</span>`
            }
                    </div>
                </div>
            </div>
        `;

        resultDiv.innerHTML = html;
    }

    // CLICK HANDLER
    checkBtn.addEventListener('click', () => {
        const raw = numberInput.value.trim();

        if (raw === '') {
            resultDiv.innerHTML = `<p style="color:red;">⚠️ Please enter a number!</p>`;
            return;
        }

        const num = Number(raw);
        checkArmstrong(num);
    });

    // ENTER KEY HANDLER
    numberInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const raw = numberInput.value.trim();

            if (raw === '') {
                resultDiv.innerHTML = `<p style="color:red;">⚠️ Please enter a number!</p>`;
                return;
            }

            const num = Number(raw);
            checkArmstrong(num);
        }
    });

    // EXAMPLES
    exampleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const num = Number(btn.dataset.num);
            numberInput.value = num;
            checkArmstrong(num);
        });
    });
}

// ============================================
// HANGMAN GAME
// ============================================
function getHangmanHTML() {
    return `
        <div class="project-content">
            <h2>🎮 Hangman Game</h2>
            <div class="hangman-container">
                <div class="game-stats">
                    <div class="stat">
                        <span class="stat-label">Attempts Left:</span>
                        <span class="stat-value" id="attemptsLeft">6</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Word Length:</span>
                        <span class="stat-value" id="wordLength">0</span>
                    </div>
                </div>
                
                <canvas id="hangmanCanvas" width="300" height="350"></canvas>
                
                <div class="word-display" id="wordDisplay"></div>
                
                <div class="guessed-letters">
                    <h4>Guessed Letters:</h4>
                    <div id="guessedList">None</div>
                </div>
                
                <div class="keyboard" id="keyboard"></div>
                
                <div class="game-message" id="gameMessage"></div>
                
                <button class="btn-new-game" id="newGameBtn">🎮 New Game</button>
            </div>
        </div>
        
        <style>
            .hangman-container {
                padding: 2rem;
                max-width: 800px;
                margin: 0 auto;
                text-align: center;
            }
            
            .game-stats {
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin-bottom: 2rem;
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
                font-size: 2rem;
                font-weight: bold;
                color: var(--primary-color);
            }
            
            #hangmanCanvas {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                margin: 2rem auto;
                display: block;
                box-shadow: var(--shadow);
            }
            
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
            
            .key-btn.correct {
                background: var(--success-color);
            }
            
            .key-btn.wrong {
                background: var(--danger-color);
            }
            
            .game-message {
                font-size: 1.5rem;
                font-weight: bold;
                min-height: 3rem;
                margin: 2rem 0;
            }
            
            .game-message.win {
                color: var(--success-color);
            }
            
            .game-message.lose {
                color: var(--danger-color);
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
        </style>
    `;
}

function initHangman() {
    const canvas = document.getElementById('hangmanCanvas');
    const ctx = canvas.getContext('2d');
    const wordDisplay = document.getElementById('wordDisplay');
    const guessedList = document.getElementById('guessedList');
    const attemptsLeftEl = document.getElementById('attemptsLeft');
    const wordLengthEl = document.getElementById('wordLength');
    const keyboard = document.getElementById('keyboard');
    const gameMessage = document.getElementById('gameMessage');
    const newGameBtn = document.getElementById('newGameBtn');

    const words = ['python', 'programming', 'computer', 'algorithm', 'keyboard',
        'monitor', 'software', 'hardware', 'database', 'network',
        'internet', 'developer', 'variable', 'function', 'application'];

    let currentWord = '';
    let guessedLetters = [];
    let correctLetters = [];
    let wrongAttempts = 0;
    const maxAttempts = 6;
    let gameOver = false;

    // Create keyboard
    function createKeyboard() {
        keyboard.innerHTML = '';
        const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

        letters.forEach(letter => {
            const btn = document.createElement('button');
            btn.className = 'key-btn';
            btn.textContent = letter.toUpperCase();
            btn.dataset.letter = letter;
            btn.addEventListener('click', () => guessLetter(letter));
            keyboard.appendChild(btn);
        });
    }

    // Draw hangman parts
    function drawHangman(stage) {
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';

        switch (stage) {
            case 1: // Base
                ctx.beginPath();
                ctx.moveTo(50, 320);
                ctx.lineTo(200, 320);
                ctx.stroke();
                break;
            case 2: // Pole
                ctx.beginPath();
                ctx.moveTo(100, 320);
                ctx.lineTo(100, 50);
                ctx.stroke();
                break;
            case 3: // Top beam
                ctx.beginPath();
                ctx.moveTo(100, 50);
                ctx.lineTo(200, 50);
                ctx.stroke();
                break;
            case 4: // Rope
                ctx.beginPath();
                ctx.moveTo(200, 50);
                ctx.lineTo(200, 80);
                ctx.stroke();
                break;
            case 5: // Head
                ctx.beginPath();
                ctx.arc(200, 100, 20, 0, Math.PI * 2);
                ctx.stroke();
                // Eyes
                ctx.fillStyle = '#64748b';
                ctx.beginPath();
                ctx.arc(195, 95, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(205, 95, 2, 0, Math.PI * 2);
                ctx.fill();
                // Sad mouth
                ctx.beginPath();
                ctx.arc(200, 105, 8, 0, Math.PI, false);
                ctx.stroke();
                break;
            case 6: // Body
                ctx.beginPath();
                ctx.moveTo(200, 120);
                ctx.lineTo(200, 200);
                ctx.stroke();
                break;
            case 7: // Left arm
                ctx.beginPath();
                ctx.moveTo(200, 140);
                ctx.lineTo(170, 170);
                ctx.stroke();
                break;
            case 8: // Right arm
                ctx.beginPath();
                ctx.moveTo(200, 140);
                ctx.lineTo(230, 170);
                ctx.stroke();
                break;
            case 9: // Left leg
                ctx.beginPath();
                ctx.moveTo(200, 200);
                ctx.lineTo(180, 250);
                ctx.stroke();
                break;
            case 10: // Right leg (game over)
                ctx.beginPath();
                ctx.moveTo(200, 200);
                ctx.lineTo(220, 250);
                ctx.stroke();
                break;
        }
    }

    // Initialize game
    function initGame() {
        currentWord = words[Math.floor(Math.random() * words.length)];
        guessedLetters = [];
        correctLetters = [];
        wrongAttempts = 0;
        gameOver = false;

        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update UI
        wordLengthEl.textContent = currentWord.length;
        attemptsLeftEl.textContent = maxAttempts;
        guessedList.textContent = 'None';
        gameMessage.textContent = '';
        gameMessage.className = 'game-message';

        createKeyboard();
        updateWordDisplay();
    }

    // Update word display
    function updateWordDisplay() {
        wordDisplay.innerHTML = '';
        for (let letter of currentWord) {
            const letterBox = document.createElement('div');
            letterBox.className = 'letter-box';
            letterBox.textContent = correctLetters.includes(letter) ? letter.toUpperCase() : '';
            wordDisplay.appendChild(letterBox);
        }
    }

    // Guess letter
    function guessLetter(letter) {
        if (gameOver || guessedLetters.includes(letter)) return;

        guessedLetters.push(letter);

        // Update button
        const btn = keyboard.querySelector(`[data-letter="${letter}"]`);
        btn.disabled = true;

        if (currentWord.includes(letter)) {
            // Correct guess
            correctLetters.push(letter);
            btn.classList.add('correct');

            updateWordDisplay();

            // Check win
            if (currentWord.split('').every(l => correctLetters.includes(l))) {
                gameOver = true;
                gameMessage.textContent = '🎉 Congratulations! You won!';
                gameMessage.className = 'game-message win';
                disableAllKeys();
            }
        } else {
            // Wrong guess
            wrongAttempts++;
            btn.classList.add('wrong');

            // Draw hangman part (stages 1-4 are gallows, 5-10 are body parts)
            const drawStage = wrongAttempts + 4;
            drawHangman(drawStage);

            attemptsLeftEl.textContent = maxAttempts - wrongAttempts;

            // Check lose
            if (wrongAttempts >= maxAttempts) {
                gameOver = true;
                gameMessage.innerHTML = `😔 Game Over! The word was: <strong>${currentWord.toUpperCase()}</strong>`;
                gameMessage.className = 'game-message lose';
                disableAllKeys();
                updateWordDisplay();
                // Show complete word
                wordDisplay.innerHTML = '';
                for (let letter of currentWord) {
                    const letterBox = document.createElement('div');
                    letterBox.className = 'letter-box';
                    letterBox.textContent = letter.toUpperCase();
                    letterBox.style.color = 'var(--danger-color)';
                    wordDisplay.appendChild(letterBox);
                }
            }
        }

        // Update guessed letters list
        guessedList.textContent = guessedLetters.join(', ').toUpperCase();
    }

    function disableAllKeys() {
        keyboard.querySelectorAll('.key-btn').forEach(btn => {
            btn.disabled = true;
        });
    }

    // Draw initial gallows
    function drawGallows() {
        drawHangman(1); // Base
        drawHangman(2); // Pole
        drawHangman(3); // Top beam
        drawHangman(4); // Rope
    }

    newGameBtn.addEventListener('click', () => {
        initGame();
        drawGallows();
    });

    // Keyboard support
    document.addEventListener('keypress', (e) => {
        if (gameOver) return;
        const letter = e.key.toLowerCase();
        if (/^[a-z]$/.test(letter) && !guessedLetters.includes(letter)) {
            guessLetter(letter);
        }
    });

    // Initialize
    initGame();
    drawGallows();
}

// Collatz implementation is defined above.

function getPrimeAnalyzerHTML() { return '<h2>🔱 Prime Analyzer - Coming Soon!</h2>'; }
function initPrimeAnalyzer() { }

// ============================================
// MORSE CODE TRANSLATOR
// ============================================
function getMorseCodeHTML() {
    return `
        <div class="project-content">
            <h2>📻 Morse Code Translator</h2>
            <div class="morse-container">
                <div class="input-section">
                    <label for="textInput">Enter Text:</label>
                    <textarea id="textInput" rows="4" placeholder="Type your message here..."></textarea>
                    <button class="btn-translate" id="translateBtn">📻 Translate to Morse</button>
                </div>
                
                <div class="output-section">
                    <h3>Morse Code Output:</h3>
                    <div class="morse-output" id="morseOutput">
                        <p class="placeholder">Your morse code will appear here...</p>
                    </div>
                </div>
                
                <div class="morse-chart">
                    <h4>📊 Morse Code Reference Chart</h4>
                    <div class="chart-grid" id="morseChart"></div>
                </div>
            </div>
        </div>
        
        <style>
            .morse-container {
                padding: 2rem;
                max-width: 800px;
                margin: 0 auto;
            }
            
            .input-section {
                margin-bottom: 2rem;
            }
            
            .input-section label {
                display: block;
                margin-bottom: 0.5rem;
                font-size: 1.1rem;
                font-weight: 600;
            }
            
            .input-section textarea {
                width: 100%;
                padding: 1rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
                resize: vertical;
                font-family: inherit;
            }
            
            .btn-translate {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 50px;
                font-size: 1.1rem;
                cursor: pointer;
                margin-top: 1rem;
                transition: var(--transition);
            }
            
            .btn-translate:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
            }
            
            .output-section h3 {
                margin-bottom: 1rem;
            }
            
            .morse-output {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 10px;
                padding: 1.5rem;
                min-height: 100px;
                margin-bottom: 2rem;
            }
            
            .morse-word {
                display: inline-block;
                margin: 0.5rem;
                padding: 0.75rem 1rem;
                background: var(--bg-color);
                border-radius: 8px;
                font-family: 'Courier New', monospace;
                font-size: 1.2rem;
                font-weight: bold;
                color: var(--primary-color);
                animation: fadeIn 0.3s ease;
            }
            
            .placeholder {
                color: var(--text-secondary);
                text-align: center;
                font-style: italic;
            }
            
            .morse-chart {
                margin-top: 3rem;
            }
            
            .morse-chart h4 {
                margin-bottom: 1rem;
                text-align: center;
            }
            
            .chart-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
                gap: 0.5rem;
            }
            
            .chart-item {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                padding: 0.5rem;
                text-align: center;
                font-size: 0.9rem;
            }
            
            .chart-char {
                font-weight: bold;
                font-size: 1.1rem;
                color: var(--primary-color);
            }
            
            .chart-morse {
                font-family: 'Courier New', monospace;
                color: var(--text-secondary);
                margin-top: 0.25rem;
            }
        </style>
    `;
}

function initMorseCode() {
    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', ' ': '/'
    };

    const textInput = document.getElementById('textInput');
    const translateBtn = document.getElementById('translateBtn');
    const morseOutput = document.getElementById('morseOutput');
    const morseChart = document.getElementById('morseChart');

    // Populate morse chart
    Object.keys(morseCode).forEach(char => {
        if (char !== ' ') {
            const item = document.createElement('div');
            item.className = 'chart-item';
            item.innerHTML = `
                <div class="chart-char">${char}</div>
                <div class="chart-morse">${morseCode[char]}</div>
            `;
            morseChart.appendChild(item);
        }
    });

    // Translate function
    function translate() {
        const text = textInput.value.toUpperCase();
        if (!text.trim()) {
            morseOutput.innerHTML = '<p class="placeholder">Please enter some text to translate!</p>';
            return;
        }

        morseOutput.innerHTML = '';
        const words = text.split(' ');

        words.forEach((word, wordIndex) => {
            let morseWord = '';
            for (let char of word) {
                if (morseCode[char]) {
                    morseWord += morseCode[char] + ' ';
                }
            }

            if (morseWord.trim()) {
                const wordEl = document.createElement('div');
                wordEl.className = 'morse-word';
                wordEl.textContent = morseWord.trim();
                wordEl.style.animationDelay = `${wordIndex * 0.1}s`;
                morseOutput.appendChild(wordEl);
            }
        });
    }

    translateBtn.addEventListener('click', translate);
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            translate();
        }
    });
}

// ============================================
// PRIME ANALYZER
// ============================================
function getPrimeAnalyzerHTML() {
    return `
        <div class="project-content">
            <h2>🔱 Prime Number Analyzer</h2>
            <div class="prime-container">
                <div class="prime-checker">
                    <h3>Check if Number is Prime</h3>
                    <div class="input-group">
                        <input type="number" id="primeInput" placeholder="Enter a number">
                        <button class="btn-check" id="checkPrimeBtn">Check</button>
                    </div>
                    <div class="result-display" id="primeResult"></div>
                </div>
                
                <div class="prime-generator">
                    <h3>Generate Prime Numbers</h3>
                    <div class="input-group">
                        <label>Up to: </label>
                        <input type="number" id="generateLimit" placeholder="100" value="100">
                        <button class="btn-check" id="generatePrimesBtn">Generate</button>
                    </div>
                    <div class="primes-display" id="primesDisplay"></div>
                </div>
                
                <div class="prime-range">
                    <h3>Primes in Range</h3>
                    <div class="range-inputs">
                        <input type="number" id="rangeStart" placeholder="Start" value="1">
                        <span>to</span>
                        <input type="number" id="rangeEnd" placeholder="End" value="50">
                        <button class="btn-check" id="rangeBtn">Find</button>
                    </div>
                    <div class="primes-display" id="rangeDisplay"></div>
                </div>
            </div>
        </div>
        
        <style>
            .prime-container {
                padding: 2rem;
                max-width: 900px;
                margin: 0 auto;
            }
            
            .prime-checker, .prime-generator, .prime-range {
                background: var(--surface-color);
                padding: 1.5rem;
                border-radius: 15px;
                margin-bottom: 2rem;
                border: 2px solid var(--border-color);
            }
            
            .prime-checker h3, .prime-generator h3, .prime-range h3 {
                margin-bottom: 1rem;
                color: var(--primary-color);
            }
            
            .input-group {
                display: flex;
                gap: 1rem;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 1rem;
            }
            
            .input-group input {
                flex: 1;
                min-width: 150px;
                padding: 0.75rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
            }
            
            .btn-check {
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 0.75rem 2rem;
                border-radius: 10px;
                cursor: pointer;
                font-size: 1rem;
                transition: var(--transition);
            }
            
            .btn-check:hover {
                transform: scale(1.05);
            }
            
            .result-display {
                font-size: 1.3rem;
                font-weight: bold;
                padding: 1rem;
                border-radius: 10px;
                min-height: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .result-display.prime {
                background: var(--success-color);
                color: white;
            }
            
            .result-display.not-prime {
                background: var(--danger-color);
                color: white;
            }
            
            .primes-display {
                display: flex;
                gap: 0.5rem;
                flex-wrap: wrap;
                margin-top: 1rem;
                min-height: 50px;
            }
            
            .prime-number {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 10px;
                font-weight: bold;
                animation: fadeIn 0.3s ease;
            }
            
            .range-inputs {
                display: flex;
                gap: 1rem;
                align-items: center;
                flex-wrap: wrap;
            }
            
            .range-inputs input {
                width: 120px;
                padding: 0.75rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
            }
        </style>
    `;
}

function initPrimeAnalyzer() {
    const primeInput = document.getElementById('primeInput');
    const checkPrimeBtn = document.getElementById('checkPrimeBtn');
    const primeResult = document.getElementById('primeResult');
    const generateLimit = document.getElementById('generateLimit');
    const generatePrimesBtn = document.getElementById('generatePrimesBtn');
    const primesDisplay = document.getElementById('primesDisplay');
    const rangeStart = document.getElementById('rangeStart');
    const rangeEnd = document.getElementById('rangeEnd');
    const rangeBtn = document.getElementById('rangeBtn');
    const rangeDisplay = document.getElementById('rangeDisplay');

    // Check if number is prime
    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Check prime
    function checkPrime() {
        const num = parseInt(primeInput.value);

        if (isNaN(num)) {
            primeResult.textContent = '⚠️ Please enter a valid number!';
            primeResult.className = 'result-display';
            return;
        }

        if (isPrime(num)) {
            primeResult.textContent = `✅ ${num} is a Prime Number!`;
            primeResult.className = 'result-display prime';
        } else {
            primeResult.textContent = `❌ ${num} is NOT a Prime Number`;
            primeResult.className = 'result-display not-prime';
        }
    }

    // Generate primes up to limit
    function generatePrimes() {
        const limit = parseInt(generateLimit.value) || 100;
        primesDisplay.innerHTML = '';

        const primes = [];
        for (let i = 2; i <= limit; i++) {
            if (isPrime(i)) primes.push(i);
        }

        primes.forEach((prime, index) => {
            const el = document.createElement('div');
            el.className = 'prime-number';
            el.textContent = prime;
            el.style.animationDelay = `${index * 0.02}s`;
            primesDisplay.appendChild(el);
        });

        if (primes.length === 0) {
            primesDisplay.innerHTML = '<p style="color: var(--text-secondary);">No primes found in range</p>';
        }
    }

    // Find primes in range
    function findPrimesInRange() {
        const start = parseInt(rangeStart.value) || 1;
        const end = parseInt(rangeEnd.value) || 50;
        rangeDisplay.innerHTML = '';

        const primes = [];
        for (let i = Math.max(2, start); i <= end; i++) {
            if (isPrime(i)) primes.push(i);
        }

        primes.forEach((prime, index) => {
            const el = document.createElement('div');
            el.className = 'prime-number';
            el.textContent = prime;
            el.style.animationDelay = `${index * 0.02}s`;
            rangeDisplay.appendChild(el);
        });

        if (primes.length === 0) {
            rangeDisplay.innerHTML = '<p style="color: var(--text-secondary);">No primes found in range</p>';
        }
    }

    // Event listeners
    checkPrimeBtn.addEventListener('click', checkPrime);
    primeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPrime();
    });

    generatePrimesBtn.addEventListener('click', generatePrimes);
    rangeBtn.addEventListener('click', findPrimesInRange);

    // Initial generation
    generatePrimes();
}

// ============================================
// TOWER OF HANOI
// ============================================
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

                    <button class="btn-solve" id="solveBtn">
                        🎯 Solve
                    </button>

                    <button class="btn-reset" id="resetHanoi">
                        Reset
                    </button>
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
            
            .controls label input {
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
            
            .btn-solve:hover:not(:disabled) {
                transform: scale(1.05);
            }
            
            .btn-solve:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            .btn-reset {
                background: var(--danger-color);
                color: white;
                border: none;
                padding: 0.75rem 2rem;
                border-radius: 50px;
                cursor: pointer;
                font-size: 1rem;
                transition: var(--transition);
            }
            
            .btn-reset:hover:not(:disabled) {
                transform: scale(1.05);
            }
            
            .btn-reset:disabled {
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
                cursor: pointer;
            }
        </style>
    `;
}

function initTowerOfHanoi() {

    const canvas = document.getElementById('hanoiCanvas');
    const ctx = canvas.getContext('2d');

    const solveBtn = document.getElementById('solveBtn');
    const resetBtn = document.getElementById('resetHanoi');

    const diskInput = document.getElementById('diskCount');

    const moveCountEl = document.getElementById('moveCount');
    const optimalMovesEl = document.getElementById('optimalMoves');

    let towers = [[], [], []];

    let moveCount = 0;
    let isAnimating = false;
    let stopSolving = false;

    const diskHeight = 25;
    const maxDiskWidth = 160;

    const towerX = [200, 400, 600];
    const baseY = 350;

    const colors = [
        '#EF4444',
        '#f97316',
        '#eab308',
        '#22c55e',
        '#06b6d4',
        '#3b82f6',
        '#8b5cf6'
    ];

    function initializeGame() {
        stopSolving=true;
        const diskCount = parseInt(diskInput.value);

        towers = [[], [], []];

        moveCount = 0;
        isAnimating = false;
        solveBtn.disabled = false;

        for (let i = diskCount; i >= 1; i--) {
            towers[0].push(i);
        }

        moveCountEl.textContent = '0';
        optimalMovesEl.textContent = Math.pow(2, diskCount) - 1;
        drawTowers();
    }

    function drawTowers() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // poles
        ctx.fillStyle = '#8B5A2B';
        for (let i = 0; i < 3; i++) {

            roundRect(ctx, towerX[i] - 5, baseY - 200, 10, 200, 5);
            ctx.fill();

            ctx.fillRect(towerX[i] - 80, baseY, 160, 10);
        }

        // disks
        function roundRect(ctx, x, y, width, height, radius) {
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(
                x + width,
                y + height,
                x + width - radius,
                y + height
            );
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
        }
        for (let tower = 0; tower < 3; tower++) {
            for (let disk = 0; disk < towers[tower].length; disk++) {
                const diskSize = towers[tower][disk];

                const diskWidth =
                    (maxDiskWidth * diskSize) /
                    parseInt(diskInput.value);

                const x = towerX[tower] - diskWidth / 2;

                const y =
                    baseY -
                    (disk + 1) * diskHeight;

                ctx.fillStyle = colors[diskSize - 1];

                ctx.fillStyle = colors[diskSize - 1];

                roundRect(
                    ctx,
                    x,
                    y,
                    diskWidth,
                    diskHeight,
                    8
                );

                ctx.fill();

                ctx.strokeStyle = '#1e293b';
                ctx.lineWidth = 2;
                ctx.stroke();

                ctx.fillStyle = 'white';
                ctx.font = 'bold 12px Arial';
                ctx.textAlign = 'center';

                ctx.fillText(
                    diskSize,
                    towerX[tower],
                    y + 16
                );
            }
        }
    }

    async function moveDisk(from, to) {
        if (stopSolving) return;
        const disk = towers[from].pop();
        if (disk === undefined) return;
        towers[to].push(disk);
        moveCount++;
        moveCountEl.textContent = moveCount;

        drawTowers();

        await new Promise(resolve =>
            setTimeout(resolve, 500)
        );
    }

    async function solveHanoi(n, from, to, aux) {
        if (stopSolving) return;
        if (n === 1) {
            await moveDisk(from, to);
            return;
        }

        await solveHanoi(n - 1, from, aux, to);
         if (stopSolving) return;
        await moveDisk(from, to);
         if (stopSolving) return;
        await solveHanoi(n - 1, aux, to, from);
    }

    async function solve() {
        if (isAnimating) return;
        stopSolving = false;
        isAnimating = true;

        solveBtn.disabled = true;

        const diskCount = parseInt(diskInput.value);

        await solveHanoi(
            diskCount,
            0,
            2,
            1
        );

        if (!stopSolving) {
            isAnimating = false;
            solveBtn.disabled = false;
        }
    }

    solveBtn.addEventListener('click', solve);

    resetBtn.addEventListener(
        'click',
        initializeGame
    );

    diskInput.addEventListener(
        'change',
        initializeGame
    );

    initializeGame();
}

// ============================================
// Tic-Tac-Toe
// ============================================

function getTicTacToeHTML() {
    return `
<div class="ttt-wrap">

  <!-- ░░ SETUP SCREEN ░░ -->
  <div id="ttt-setup" class="ttt-screen ttt-screen--active">
    <div class="ttt-logo">
      <span class="ttt-logo-x">X</span>
      <span class="ttt-logo-dot">·</span>
      <span class="ttt-logo-o">O</span>
    </div>
    <h2 class="ttt-title">Tic Tac Toe</h2>
    <p class="ttt-sub">Two players or vs AI — classic strategy game!</p>

    <div class="ttt-field-group">
      <span class="ttt-label">Game Mode</span>
      <div class="ttt-pill-group" id="ttt-mode-group">
        <button class="ttt-pill ttt-pill--on" data-val="2p">👥 Two Players</button>
        <button class="ttt-pill" data-val="ai">🤖 vs Computer</button>
      </div>
    </div>

    <div class="ttt-field-group" id="ttt-diff-group" style="display:none">
      <span class="ttt-label">Difficulty</span>
      <div class="ttt-pill-group" id="ttt-diff-pills">
        <button class="ttt-pill ttt-pill--on" data-val="easy">🟢 Easy</button>
        <button class="ttt-pill" data-val="medium">🟡 Medium</button>
        <button class="ttt-pill" data-val="hard">🔴 Hard</button>
      </div>
    </div>

    <div class="ttt-field-group">
      <span class="ttt-label">Rounds</span>
      <div class="ttt-pill-group" id="ttt-rounds-group">
        <button class="ttt-pill" data-val="1">1</button>
        <button class="ttt-pill ttt-pill--on" data-val="3">Best of 3</button>
        <button class="ttt-pill" data-val="5">Best of 5</button>
      </div>
    </div>

    <div class="ttt-names-row">
      <div class="ttt-name-box">
        <span class="ttt-label">Player 1 <em class="ttt-x-tag">❌</em></span>
        <input class="ttt-input" type="text" id="ttt-p1" placeholder="Player 1" maxlength="12"/>
      </div>
      <div class="ttt-name-box" id="ttt-p2-box">
        <span class="ttt-label">Player 2 <em class="ttt-o-tag">⭕</em></span>
        <input class="ttt-input" type="text" id="ttt-p2" placeholder="Player 2" maxlength="12"/>
      </div>
    </div>

    <button class="ttt-cta" id="ttt-start">🚀 Start Game</button>
  </div><!-- /setup -->

  <!-- ░░ GAME SCREEN ░░ -->
  <div id="ttt-game" class="ttt-screen">

    <!-- Scoreboard -->
    <div class="ttt-scores">
      <div class="ttt-score ttt-score--x">
        <div class="ttt-score-name" id="ttt-sn1">P1</div>
        <div class="ttt-score-val"  id="ttt-sv1">0</div>
      </div>
      <div class="ttt-score ttt-score--d">
        <div class="ttt-score-name">Draws</div>
        <div class="ttt-score-val" id="ttt-svd">0</div>
      </div>
      <div class="ttt-score ttt-score--o">
        <div class="ttt-score-name" id="ttt-sn2">P2</div>
        <div class="ttt-score-val"  id="ttt-sv2">0</div>
      </div>
    </div>

    <div class="ttt-round-tag" id="ttt-round-tag">Round 1 of 3</div>

    <!-- Turn banner -->
    <div class="ttt-turn-banner" id="ttt-turn-banner">
      <span class="ttt-turn-sym" id="ttt-turn-sym">❌</span>
      <span id="ttt-turn-name">Player 1</span>'s turn
    </div>

    <!-- Board -->
    <div style="position:relative;">
    <div id="ttt-board">

      ${[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i =>
        `<button class="ttt-cell" data-i="${i}" aria-label="Cell ${i + 1}"></button>`
    ).join('')}
    </div>

    <!-- Win-line SVG overlay -->
    <svg class="ttt-win-svg" id="ttt-win-svg" viewBox="0 0 3 3" xmlns="http://www.w3.org/2000/svg">
      <line id="ttt-win-line" x1="0" y1="0" x2="0" y2="0"
            stroke="var(--ttt-accent)" stroke-width="0.18"
            stroke-linecap="round" opacity="0"/>
    </svg>
</div>
    <!-- Result overlay -->
    <div class="ttt-result-overlay" id="ttt-result-overlay" style="display:none">
      <div class="ttt-result-card">
        <div class="ttt-result-emoji" id="ttt-res-emoji">🏆</div>
        <div class="ttt-result-text"  id="ttt-res-text">Player 1 wins!</div>
        <button class="ttt-cta ttt-cta--sm" id="ttt-next">Next Round →</button>
      </div>
    </div>

    <button class="ttt-ghost-btn" id="ttt-back">← Menu</button>
  </div><!-- /game -->

  <!-- ░░ FINAL SCREEN ░░ -->
  <div id="ttt-final" class="ttt-screen">
    <div class="ttt-final-trophy">🏆</div>
    <div class="ttt-final-title" id="ttt-final-title">Player 1 Wins!</div>
    <div class="ttt-final-scoreline">
      <span class="ttt-fs-name ttt-fs-x" id="ttt-fp1">P1</span>
      <span class="ttt-fs-score" id="ttt-fp1s">0</span>
      <span class="ttt-fs-sep">—</span>
      <span class="ttt-fs-score" id="ttt-fp2s">0</span>
      <span class="ttt-fs-name ttt-fs-o" id="ttt-fp2">P2</span>
    </div>
    <div class="ttt-final-draws" id="ttt-final-draws">0 draws</div>
    <div class="ttt-final-actions">
      <button class="ttt-cta" id="ttt-rematch">🔄 Rematch</button>
      <button class="ttt-ghost-btn" id="ttt-menu">← Main Menu</button>
    </div>
  </div><!-- /final -->

</div><!-- /ttt-wrap -->
`;
}
function initTicTacToe() {

    // Win combos
    const WINS = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],   // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],   // cols
        [0, 4, 8], [2, 4, 6]            // diagonals
    ];

    // Win-line centre coordinates (column, row) in 0-2 grid space
    const WIN_COORDS = [
        [[0, 0], [2, 0]], [[0, 1], [2, 1]], [[0, 2], [2, 2]],  // rows
        [[0, 0], [0, 2]], [[1, 0], [1, 2]], [[2, 0], [2, 2]],  // cols
        [[0, 0], [2, 2]], [[2, 0], [0, 2]]                   // diagonals
    ];

    // ── State ──
    let mode = "2p";
    let difficulty = "easy";
    let maxRounds = 3;
    let p1 = "Player 1";
    let p2 = "Player 2";
    let scores = { p1: 0, p2: 0, draws: 0 };
    let board = [];
    let current = "X";   // "X" | "O"
    let round = 1;
    let gameOver = false;

    // ── Helpers ──
    function qs(sel, ctx) { return (ctx || document).querySelector(sel); }

    // Show one of the three screens
    function showScreen(id) {
        ["ttt-setup", "ttt-game", "ttt-final"].forEach(s => {
            const el = document.getElementById(s);
            if (el) {
                el.classList.toggle("ttt-screen--active", s === id);
            }
        });
    }

    // Pill-toggle group helper
    function initPillGroup(groupId, onChange) {
        const grp = document.getElementById(groupId);
        if (!grp) return;
        grp.querySelectorAll(".ttt-pill").forEach(btn => {
            btn.addEventListener("click", () => {
                grp.querySelectorAll(".ttt-pill").forEach(b => b.classList.remove("ttt-pill--on"));
                btn.classList.add("ttt-pill--on");
                onChange(btn.dataset.val);
            });
        });
    }

    // ── Wire up Setup ──
    initPillGroup("ttt-mode-group", val => {
        mode = val;
        const diffGroup = document.getElementById("ttt-diff-group");
        const p2box = document.getElementById("ttt-p2-box");
        const p2inp = document.getElementById("ttt-p2");
        if (val === "ai") {
            diffGroup.style.display = "block";
            p2box.classList.add("ttt-dimmed");
            p2inp.disabled = true;
            p2inp.placeholder = "Computer 🤖";
        } else {
            diffGroup.style.display = "none";
            p2box.classList.remove("ttt-dimmed");
            p2inp.disabled = false;
            p2inp.placeholder = "Player 2";
        }
    });

    initPillGroup("ttt-diff-pills", val => { difficulty = val; });
    initPillGroup("ttt-rounds-group", val => { maxRounds = parseInt(val); });

    // Start button
    const startBtn = document.getElementById("ttt-start");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            p1 = (document.getElementById("ttt-p1").value.trim()) || "Player 1";
            p2 = mode === "ai"
                ? "Computer 🤖"
                : ((document.getElementById("ttt-p2").value.trim()) || "Player 2");
            scores = { p1: 0, p2: 0, draws: 0 };
            round = 1;
            newRound();
            showScreen("ttt-game");
        });
    }

    // Back / Menu buttons
    const backBtn = document.getElementById("ttt-back");
    if (backBtn) backBtn.addEventListener("click", () => showScreen("ttt-setup"));

    const menuBtn = document.getElementById("ttt-menu");
    if (menuBtn) menuBtn.addEventListener("click", () => showScreen("ttt-setup"));

    // Rematch button
    const rematchBtn = document.getElementById("ttt-rematch");
    if (rematchBtn) {
        rematchBtn.addEventListener("click", () => {
            scores = { p1: 0, p2: 0, draws: 0 };
            round = 1;
            newRound();
            showScreen("ttt-game");
        });
    }

    // Next-round button
    const nextBtn = document.getElementById("ttt-next");
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            const majority = Math.ceil(maxRounds / 2);
            const matchDone = round >= maxRounds
                || scores.p1 >= majority
                || scores.p2 >= majority;
            if (matchDone) {
                renderFinal();
                showScreen("ttt-final");
            } else {
                round++;
                newRound();
            }
        });
    }

    // ── Round management ──
    function newRound() {
        board = Array(9).fill(null);
        current = "X";
        gameOver = false;

        // Reset cells
        document.querySelectorAll(".ttt-cell").forEach(c => {
            c.textContent = "";
            c.className = "ttt-cell";
            c.disabled = false;
        });

        // Hide result overlay
        const overlay = document.getElementById("ttt-result-overlay");
        if (overlay) overlay.style.display = "none";

        // Clear win line
        clearWinLine();

        // Update scoreboard
        syncScoreboard();

        // Round label
        const tag = document.getElementById("ttt-round-tag");
        if (tag) {
            tag.textContent = maxRounds === 1
                ? "Single Round"
                : `Round ${round} of ${maxRounds}`;
        }

        refreshTurnBanner();

        // If AI goes first (not default, but safe to handle)
        if (mode === "ai" && current === "O") {
            lockBoard(true);
            setTimeout(aiTurn, 600);
        }
    }

    function syncScoreboard() {
        const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
        set("ttt-sn1", p1);
        set("ttt-sn2", p2);
        set("ttt-sv1", scores.p1);
        set("ttt-sv2", scores.p2);
        set("ttt-svd", scores.draws);
    }

    function refreshTurnBanner() {
        const name = current === "X" ? p1 : p2;
        const sym = current === "X" ? "X" : "O";
        const symEl = document.getElementById("ttt-turn-sym");
        const nameEl = document.getElementById("ttt-turn-name");
        const banner = document.getElementById("ttt-turn-banner");
        if (symEl) symEl.textContent = sym;
        if (nameEl) nameEl.textContent = name;
        if (banner) {
            banner.classList.toggle("ttt-turn-banner--x", current === "X");
            banner.classList.toggle("ttt-turn-banner--o", current === "O");
        }
    }

    // ── Cell clicks ──
    document.querySelectorAll(".ttt-cell").forEach(cell => {
        cell.addEventListener("click", () => {
            const i = parseInt(cell.dataset.i);
            if (gameOver || board[i]) return;
            if (mode === "ai" && current === "O") return; // AI's turn

            placeMove(i, current);
            afterMove();
        });
    });

    function placeMove(i, sym) {
        board[i] = sym;
        const cell = document.querySelector(`.ttt-cell[data-i="${i}"]`);
        if (!cell) return;
        cell.textContent = sym;
        cell.classList.add(sym === "X" ? "ttt-cell--x" : "ttt-cell--o");
        cell.disabled = true;
    }

    function afterMove() {
        const win = getWinner(board);
        if (win) { endRound(win); return; }
        if (board.every(c => c)) { endRound(null); return; }

        current = current === "X" ? "O" : "X";
        refreshTurnBanner();

        if (mode === "ai" && current === "O") {
            lockBoard(true);
            setTimeout(aiTurn, 480 + Math.random() * 200);
        }
    }

    function lockBoard(on) {
        document.querySelectorAll(".ttt-cell").forEach(c => {
            if (!board[parseInt(c.dataset.i)]) c.disabled = on;
        });
    }

    // ── Win detection ──
    function getWinner(b) {
        for (let idx = 0; idx < WINS.length; idx++) {
            const [a, x, c] = WINS[idx];
            if (b[a] && b[a] === b[x] && b[x] === b[c]) {
                return { sym: b[a], combo: WINS[idx], coordIdx: idx };
            }
        }
        return null;
    }

    // ── End of round ──
    function endRound(win) {
        gameOver = true;
        lockBoard(true);

        if (win) {
            // Highlight winning cells
            win.combo.forEach(i => {
                const cell = document.querySelector(`.ttt-cell[data-i="${i}"]`);
                if (cell) cell.classList.add("ttt-cell--win");
            });
            // Draw SVG win line
            drawWinLine(win.coordIdx);

            const winnerName = win.sym === "X" ? p1 : p2;
            if (win.sym === "X") scores.p1++; else scores.p2++;
            syncScoreboard();

            setResult("🏆", `${winnerName} wins this round!`);
        } else {
            scores.draws++;
            syncScoreboard();
            setResult("🤝", "It's a draw!");
        }

        // Update Next button label
        setTimeout(() => {
            const majority = Math.ceil(maxRounds / 2);
            const matchDone = round >= maxRounds
                || scores.p1 >= majority
                || scores.p2 >= majority;
            const nextBtn = document.getElementById("ttt-next");
            if (nextBtn) nextBtn.textContent = matchDone ? "See Results →" : "Next Round →";

            const overlay = document.getElementById("ttt-result-overlay");
            if (overlay) overlay.style.display = "flex";
        }, 600);
    }

    function setResult(emoji, text) {
        const e = document.getElementById("ttt-res-emoji");
        const t = document.getElementById("ttt-res-text");
        if (e) e.textContent = emoji;
        if (t) t.textContent = text;
    }

    // ── Win-line SVG ──
    // Grid cells are (col, row) 0-indexed; centre of cell = col+0.5, row+0.5
    function drawWinLine(comboIdx) {
        const line = document.getElementById("ttt-win-line");
        const svg = document.getElementById("ttt-win-svg");
        if (!line || !svg) return;

        const [[c1, r1], [c2, r2]] = WIN_COORDS[comboIdx];
        line.setAttribute("x1", c1 + 0.5);
        line.setAttribute("y1", r1 + 0.5);
        line.setAttribute("x2", c2 + 0.5);
        line.setAttribute("y2", r2 + 0.5);
        line.setAttribute("opacity", "1");
        svg.classList.add("ttt-win-svg--visible");
    }

    function clearWinLine() {
        const line = document.getElementById("ttt-win-line");
        const svg = document.getElementById("ttt-win-svg");
        if (line) line.setAttribute("opacity", "0");
        if (svg) svg.classList.remove("ttt-win-svg--visible");
    }

    // ── Final screen ──
    function renderFinal() {
        const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
        set("ttt-fp1", p1);
        set("ttt-fp2", p2);
        set("ttt-fp1s", scores.p1);
        set("ttt-fp2s", scores.p2);
        set("ttt-final-draws", `${scores.draws} draw${scores.draws !== 1 ? "s" : ""}`);

        let title;
        if (scores.p1 > scores.p2) title = `🏆 ${p1} wins the match!`;
        else if (scores.p2 > scores.p1) title = `🏆 ${p2} wins the match!`;
        else title = "🤝 The match is tied!";
        set("ttt-final-title", title);
    }

    // ── AI engines ──
    function freeCells(b) {
        return b.reduce((acc, v, i) => { if (!v) acc.push(i); return acc; }, []);
    }

    function checkWinFor(b, sym) {
        return WINS.some(([a, x, c]) => b[a] === sym && b[x] === sym && b[c] === sym);
    }

    function minimax(b, isMax, alpha, beta, depth) {
        if (checkWinFor(b, "O")) return 10 - depth;
        if (checkWinFor(b, "X")) return depth - 10;
        if (b.every(c => c)) return 0;

        const moves = freeCells(b);
        if (isMax) {
            let best = -Infinity;
            for (const m of moves) {
                b[m] = "O";
                best = Math.max(best, minimax(b, false, alpha, beta, depth + 1));
                b[m] = null;
                alpha = Math.max(alpha, best);
                if (beta <= alpha) break;
            }
            return best;
        } else {
            let best = Infinity;
            for (const m of moves) {
                b[m] = "X";
                best = Math.min(best, minimax(b, true, alpha, beta, depth + 1));
                b[m] = null;
                beta = Math.min(beta, best);
                if (beta <= alpha) break;
            }
            return best;
        }
    }

    function chooseMove(b, diff) {
        const moves = freeCells(b);
        if (!moves.length) return null;

        // Easy — random
        if (diff === "easy") return moves[Math.floor(Math.random() * moves.length)];

        // Medium — win → block → center/corners
        if (diff === "medium") {
            for (const m of moves) { b[m] = "O"; if (checkWinFor(b, "O")) { b[m] = null; return m; } b[m] = null; }
            for (const m of moves) { b[m] = "X"; if (checkWinFor(b, "X")) { b[m] = null; return m; } b[m] = null; }
            for (const p of [4, 0, 2, 6, 8, 1, 3, 5, 7]) { if (!b[p]) return p; }
            return moves[0];
        }

        // Hard — minimax
        let bestScore = -Infinity, bestMove = moves[0];
        for (const m of moves) {
            b[m] = "O";
            const s = minimax(b, false, -Infinity, Infinity, 0);
            b[m] = null;
            if (s > bestScore) { bestScore = s; bestMove = m; }
        }
        return bestMove;
    }

    function aiTurn() {
        if (gameOver) return;
        const move = chooseMove([...board], difficulty); // pass copy so minimax doesn't corrupt state
        lockBoard(false);
        if (move !== null) placeMove(move, "O");
        afterMove();
    }

} // end initTicTacToe
// ================================
function getProductivePetHTML() {
    return `
        <div class="productive-pet-container">
            <h2 class="pet-title">🐱 Productive Pet</h2>

            <div class="pet-card">
                <div class="pet-level" id="petLevel">Level 1</div>

                <div class="pet-emoji">🐱</div>

                <div id="petMood">Tired 🥱</div>

                <div class="xp-container">
                    <div class="xp-bar">
                        <div class="xp-fill"></div>
                    </div>
                    <span id="xpText">0 / 100 XP</span>
                </div>

                <div class="task-input-area">
                    <input id="taskInput" placeholder="Enter task..." />
                    <button id="addTaskBtn">Add Task</button>
                </div>

                <ul id="taskList"></ul>

                <div id="streakText">🔥 Streak: 0</div>
            </div>
        </div>
    `;
}

// getAIResumeAnalyzerHTML and initAIResumeAnalyzer are defined in
// js/projects/resume-analyzer.js to keep the codebase organized and modular.


function initializeProject(projectName) {

    const initializers = {
        'tic-tac-toe': 'initTicTacToe',
        'rock-paper-scissor': 'initRockPaperScissor',
        'dice-rolling': 'initDiceRolling',
        'coin-flip': 'initCoinFlip',
        'blackjack-21': 'initBlackjack',
        'number-guessing': 'initNumberGuessing',
        'hangman': 'initHangman',
        'word-scramble': 'initWordScramble',
        'flames': 'initFlames',
        'dots-boxes': 'initDotsBoxes',
        'emoji-memory': 'initEmojiMemoryGame',
        'fibonacci': 'initFibonacci',
        'binary-search': 'initBinarySearch',
        'bubble-sort': 'initBubbleSort',
        'progression-recognizer': 'initProgressionRecognizer',
        'pascal-triangle': 'initPascalTriangle',
        'armstrong': 'initArmstrong',
        'calculator': 'initCalculator',
        'collatz': 'initCollatz',
        'prime-analyzer': 'initPrimeAnalyzer',
        'projectile-motion': 'initProjectileMotion',
        'coordinate-polar-transform': 'initCoordinatePolarTransform',
        'derivative-calculator': 'initDerivativeCalculator',
        'morse-code': 'initMorseCode',
        'tower-of-hanoi': 'initTowerOfHanoi',
        'number-converter': 'initNumberConverter',
        'typing-speed-tester': 'initTypingSpeedTester',
        'snake-game': 'initSnakeGame',
        'password-forge': 'initPasswordForge',
        'spot-the-difference': 'initSpotTheDifference',
        'whack-a-mole': 'initWhackaMole',
        'flappy-game': 'initFlappyGame',
        'productive-pet': 'initProductivePet',
        'simon-says': 'initSimonSays',
        '2048-game': 'init2048Game',
        'color-palette': 'initColorPalette',
        'math-quiz': 'initMathQuiz',
        'resume-analyzer': 'initAIResumeAnalyzer',
        'caesar-cipher': 'initCaesarCipher'
    };

    const initializerName = initializers[projectName];
    if (initializerName && typeof window[initializerName] === 'function') {
        window[initializerName]();
    }
}

//Removed Redundant game and project Logics and seperated them to different individual files located at (web-app/js/projects/)

// ============================================================================
// ARCHITECTURAL NOTE: INDIVIDUAL PROJECT MODULES
// ============================================================================
// All specific HTML templates, inline CSS styles, and interactive game/tool
// logic have been extracted from this registry file to enforce a clean,
// modular design patterns.
//
// If you are looking to modify, fix, or understand how a specific project works:
// 1. Do NOT add game logics, event listeners, or variables to this file.
// 2. Open the dedicated script file under the 'js/projects/' directory.
//    - e.g., For Rock Paper Scissors, see: js/projects/rock-paper-scissor.js
//    - e.g., For FLAMES, see: js/projects/flames.js
//    - e.g., For the Calculator, see: js/projects/calculator.js
//
// Each individual script file globally registers exactly two hooks:
//    - get[ProjectName]HTML() : Returns the structural layout and specific styles.
//    - init[ProjectName]()    : Sets up localized states, scopes, and event listeners.
// ============================================================================

// ============================================
// PROGRESS TRACKER
// ============================================
// Loaded from js/projects/progress-tracker.js

// ============================================
// PROJECT INITIALIZER — called by main.js after modal opens
// ============================================
function initializeProject(name) {
    if (name === 'progress-tracker') initProgressTracker();
}