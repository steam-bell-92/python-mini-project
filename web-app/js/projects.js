// Project Registry
// Each project's HTML and logic lives in its own file under js/projects/

function getProjectHTML(projectName) {
    const projects = {
        'tic-tac-toe': getTicTacToeHTML(),
        'rock-paper-scissor': getRockPaperScissorHTML(),
        'dice-rolling': getDiceRollingHTML(),
        'coin-flip': getCoinFlipHTML(),
        'number-guessing': getNumberGuessingHTML(),
        'hangman': getHangmanHTML(),
        'flames': getFlamesHTML(),
        'emoji-memory': getEmojiMemoryGameHTML(),
        'fibonacci': getFibonacciHTML(),
        'progression-recognizer': getProgressionRecognizerHTML(),
        'pascal-triangle': getPascalTriangleHTML(),
        'armstrong': getArmstrongHTML(),
        'calculator': getCalculatorHTML(),
        'collatz': getCollatzHTML(),
        'prime-analyzer': getPrimeAnalyzerHTML(),
        'projectile-motion': getProjectileMotionHTML(),
        'coordinate-polar-transform': getCoordinatePolarTransformHTML(),
        'derivative-calculator': getDerivativeCalculatorHTML(),
        'morse-code': getMorseCodeHTML(),
        'tower-of-hanoi': getTowerOfHanoiHTML(),
        'number-converter': getNumberConverterHTML(),
        'typing-speed-tester': getTypingSpeedTesterHTML(),
        'snake-game': getsnakeGameHTML(),
        'password-forge': getPasswordForgeHTML(),
        'spot-the-difference': getSpotTheDifferenceHTML(),
        'whack-a-mole': getWhackaMoleHTML(),
    };

    return projects[projectName] || '<h2>Project Coming Soon!</h2>';
}

function initializeProject(projectName) {
    const initializers = {
        'tic-tac-toe': initTicTacToe,
        'rock-paper-scissor': initRockPaperScissor,
        'dice-rolling': initDiceRolling,
        'coin-flip': initCoinFlip,
        'number-guessing': initNumberGuessing,
        'hangman': initHangman,
        'flames': initFlames,
        'emoji-memory': initEmojiMemoryGame,
        'fibonacci': initFibonacci,
        'progression-recognizer': initProgressionRecognizer,
        'pascal-triangle': initPascalTriangle,
        'armstrong': initArmstrong,
        'calculator': initCalculator,
        'collatz': initCollatz,
        'prime-analyzer': initPrimeAnalyzer,
        'projectile-motion': initProjectileMotion,
        'coordinate-polar-transform': initCoordinatePolarTransform,
        'derivative-calculator': initDerivativeCalculator,
        'morse-code': initMorseCode,
        'tower-of-hanoi': initTowerOfHanoi,
        'number-converter': initNumberConverter,
        'typing-speed-tester': initTypingSpeedTester,
        'snake-game': initSnakeGame,
        'spot-the-difference': initSpotTheDifference,
        'whack-a-mole': initWhackaMole,
    };

    if (initializers[projectName]) {
        initializers[projectName]();
    }
}

// ============================================
// ROCK PAPER SCISSORS
// ============================================
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
                            <div class="choice-emoji" id="computerChoice">❓</div>
                        </div>
                    </div>
                    <div class="result-message" id="resultMessage">Make your choice!</div>
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
                color: var(--text-color);
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

    const choiceBtns = document.querySelectorAll('.choice-btn');
    const resetBtn = document.getElementById('resetRPS');

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
        document.getElementById('computerChoice').textContent = '❓';
    });

    function playRound(playerChoice) {
        const computerChoice = choices[Math.floor(Math.random() * 3)];

        document.getElementById('playerChoice').textContent = emojis[playerChoice];
        document.getElementById('computerChoice').textContent = emojis[computerChoice];

        let result = '';

        if (playerChoice === computerChoice) {
            result = "It's a tie! 🤝";
            audioController.play('click');
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'You win! 🎉';
            playerScore++;
            audioController.play('win');
        } else {
            result = 'Computer wins! 🤖';
            computerScore++;
            audioController.play('loss');
        }

        document.getElementById('resultMessage').textContent = result;
        updateScore();
    }

    function updateScore() {
        document.getElementById('playerScore').textContent = playerScore;
        document.getElementById('computerScore').textContent = computerScore;
    }
}

// ============================================
// Tic Tac Toe
// ============================================

function getTicTacToeHTML() {
    return `
        <div class="project-content">
            <h2>🧩 Tic-Tac-Toe</h2>
        <div class="ttt-mode-buttons">
            <button id="pvpMode" class="mode-btn active-mode">
                👥 2 Players
            </button>

            <button id="aiMode" class="mode-btn">
                you vs Computer
            </button>
        </div>
            <div class="game-container">
                <div class="tic-tac-toe-board" id="ticTacToeBoard">
                    <button class="cell" data-cell="0"></button>
                    <button class="cell" data-cell="1"></button>
                    <button class="cell" data-cell="2"></button>
                    <button class="cell" data-cell="3"></button>
                    <button class="cell" data-cell="4"></button>
                    <button class="cell" data-cell="5"></button>
                    <button class="cell" data-cell="6"></button>
                    <button class="cell" data-cell="7"></button>
                    <button class="cell" data-cell="8"></button>
                </div>

                <p id="ticTacToeStatus">Player X's turn</p>

                <button id="restartTicTacToe" class="game-btn">
                    🔄 Restart Game
                </button>
            </div>
        </div>
    `;
}

function initTicTacToe() {
    const cells = document.querySelectorAll('.cell');
    const statusText = document.getElementById('ticTacToeStatus');
    const restartBtn = document.getElementById('restartTicTacToe');
    const twoPlayerBtn = document.getElementById('twoPlayerMode');
    const computerBtn = document.getElementById('computerMode');

    let vsComputer = false;
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let gameActive = true;

    

    const pvpBtn = document.getElementById('pvpMode');
    const aiBtn = document.getElementById('aiMode');

    pvpBtn.addEventListener('click', () => {
        vsComputer = false;

        pvpBtn.classList.add('active-mode');
        aiBtn.classList.remove('active-mode');

        resetGame();
        statusText.textContent = "2 Player Mode";
    });

    aiBtn.addEventListener('click', () => {
        vsComputer = true;

        aiBtn.classList.add('active-mode');
        pvpBtn.classList.remove('active-mode');

        resetGame();
        statusText.textContent = "Playing vs Computer";
    });

    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    function checkWinner() {
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;

            if (
                board[a] &&
                board[a] === board[b] &&
                board[a] === board[c]
            ) {
                statusText.textContent = `🎉 Player ${board[a]} wins!`;
                gameActive = false;
                return;
            }
        }

        if (!board.includes('')) {
            statusText.textContent = "🤝 It's a draw!";
            gameActive = false;
        }
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const index = cell.dataset.cell;

            if (board[index] || !gameActive) return;

            board[index] = currentPlayer;
            cell.textContent = currentPlayer;

            checkWinner();

            if (vsComputer && gameActive && currentPlayer === 'X') {
                currentPlayer = 'O';
                statusText.textContent = "Computer's turn";

                setTimeout(() => {
                    computerMove();
                }, 500);

                return;
            }

            if (gameActive) {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                statusText.textContent = `Player ${currentPlayer}'s turn`;
            }
        });
    });

    function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';

    cells.forEach(cell => {
        cell.textContent = '';
    });

    statusText.textContent = "Player X's turn";
}

function computerMove() {
    let emptyCells = [];

    board.forEach((cell, index) => {
        if (cell === '') {
            emptyCells.push(index);
        }
    });

    if (emptyCells.length === 0) return;

    const randomIndex =
        emptyCells[Math.floor(Math.random() * emptyCells.length)];

    board[randomIndex] = 'O';
    cells[randomIndex].textContent = 'O';

    checkWinner();

    if (gameActive) {
        currentPlayer = 'X';
        statusText.textContent = "Player X's turn";
    }
}

restartBtn.addEventListener('click', resetGame);
}



// ============================================
// DICE ROLLING
// ============================================
function getDiceRollingHTML() {
    return `
        <div class="project-content">
            <h2>🎲 Dice Rolling</h2>
            <div class="dice-container">
                <div class="dice-display">
                    <div class="dice-scene">
                        <div class="dice-cube" id="dice1">
                            <div class="cube-face face-1"></div>
                            <div class="cube-face face-2"></div>
                            <div class="cube-face face-3"></div>
                            <div class="cube-face face-4"></div>
                            <div class="cube-face face-5"></div>
                            <div class="cube-face face-6"></div>
                        </div>
                        <div class="dice-shadow"></div>
                    </div>

                    <div class="dice-scene">
                        <div class="dice-cube" id="dice2">
                            <div class="cube-face face-1"></div>
                            <div class="cube-face face-2"></div>
                            <div class="cube-face face-3"></div>
                            <div class="cube-face face-4"></div>
                            <div class="cube-face face-5"></div>
                            <div class="cube-face face-6"></div>
                        </div>
                        <div class="dice-shadow"></div>
                    </div>
                </div>
                
                <div class="dice-total">
                    <span>Total: </span>
                    <span id="diceTotal">2</span>
                </div>
                
                <button class="btn-roll" id="rollDice">🎲 Roll Dice</button>
            </div>
        </div>
        
        <style>
            .dice-container {
                text-align: center;
                padding: 3rem 2rem;
            }
            
            .dice-display {
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin-bottom: 2rem;
                flex-wrap: wrap;
            }

            .dice-scene {
                position: relative;
                width: 120px;
                height: 150px;
                perspective: 700px;
                transform-origin: center bottom;
            }
            
            .dice-cube {
                --rx: 0deg;
                --ry: 0deg;
                width: 120px;
                height: 120px;
                position: relative;
                transform-style: preserve-3d;
                transform: rotateX(var(--rx)) rotateY(var(--ry));
                transition: transform 1.3s cubic-bezier(0.2, 0.75, 0.15, 1), filter 0.3s ease;
            }

            .dice-shadow {
                position: absolute;
                left: 50%;
                bottom: 6px;
                width: 78px;
                height: 14px;
                transform: translateX(-50%);
                border-radius: 50%;
                background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.05) 70%, transparent 100%);
                transition: opacity 0.3s ease;
            }

            .dice-scene.rolling .dice-shadow {
                animation: diceShadowFloat 1.3s ease;
            }

            .dice-scene.impact {
                animation: diceLanding 0.4s ease-out;
            }

            .dice-scene.impact .dice-shadow {
                animation: diceShadowImpact 0.4s ease-out;
            }
            
            .cube-face {
                --size: 120px;
                --dot: 14px;
                position: absolute;
                width: var(--size);
                height: var(--size);
                border-radius: 18px;
                background: linear-gradient(160deg, #ffffff, #e6ebf2);
                border: 2px solid #d8dee8;
                box-shadow: inset -8px -8px 12px rgba(0, 0, 0, 0.08), inset 8px 8px 12px rgba(255, 255, 255, 0.85);
            }

            .cube-face::before {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: 18px;
                background-repeat: no-repeat;
            }

            .face-1 { transform: translateZ(60px); }
            .face-2 { transform: rotateY(90deg) translateZ(60px); }
            .face-3 { transform: rotateY(180deg) translateZ(60px); }
            .face-4 { transform: rotateY(-90deg) translateZ(60px); }
            .face-5 { transform: rotateX(90deg) translateZ(60px); }
            .face-6 { transform: rotateX(-90deg) translateZ(60px); }

            .face-1::before {
                background-image: radial-gradient(circle at 50% 50%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }

            .face-2::before {
                background-image:
                    radial-gradient(circle at 28% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }

            .face-3::before {
                background-image:
                    radial-gradient(circle at 28% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 50% 50%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }

            .face-4::before {
                background-image:
                    radial-gradient(circle at 28% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 28% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }

            .face-5::before {
                background-image:
                    radial-gradient(circle at 28% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 50% 50%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 28% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }

            .face-6::before {
                background-image:
                    radial-gradient(circle at 28% 24%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 24%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 28% 50%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 50%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 28% 76%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 76%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }
            
            .dice-total {
                font-size: 2rem;
                margin: 2rem 0;
                font-weight: bold;
            }
            
            .btn-roll {
                background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
                color: white;
                border: none;
                padding: 1rem 3rem;
                border-radius: 50px;
                font-size: 1.3rem;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .btn-roll:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(255, 107, 107, 0.4);
            }

            @keyframes diceLanding {
                0% { transform: translateY(-10px); }
                55% { transform: translateY(4px); }
                80% { transform: translateY(-2px); }
                100% { transform: translateY(0); }
            }

            @keyframes diceShadowFloat {
                0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.32; }
                45% { transform: translateX(-50%) scale(0.72); opacity: 0.2; }
            }

            @keyframes diceShadowImpact {
                0% { transform: translateX(-50%) scale(0.74); opacity: 0.2; }
                55% { transform: translateX(-50%) scale(1.08); opacity: 0.38; }
                100% { transform: translateX(-50%) scale(1); opacity: 0.32; }
            }
        </style>
    `;
}

function initDiceRolling() {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const diceScene1 = dice1.closest('.dice-scene');
    const diceScene2 = dice2.closest('.dice-scene');
    const rollBtn = document.getElementById('rollDice');
    const totalDisplay = document.getElementById('diceTotal');

    const faceRotation = {
        1: { x: 0, y: 0 },
        2: { x: 0, y: -90 },
        3: { x: 0, y: 180 },
        4: { x: 0, y: 90 },
        5: { x: -90, y: 0 },
        6: { x: 90, y: 0 }
    };

    let spins1 = 0;
    let spins2 = 0;

    function setCubeFace(cube, value, spinSeed) {
        const target = faceRotation[value];
        const rx = target.x + 360 * (2 + (spinSeed % 3));
        const ry = target.y + 360 * (3 + (spinSeed % 2));
        cube.style.setProperty('--rx', `${rx}deg`);
        cube.style.setProperty('--ry', `${ry}deg`);
    }

    function triggerLanding(scene) {
        scene.classList.remove('impact');
        void scene.offsetWidth;
        scene.classList.add('impact');
        setTimeout(() => {
            scene.classList.remove('impact');
        }, 420);
    }

    setCubeFace(dice1, 1, 0);
    setCubeFace(dice2, 1, 1);
    totalDisplay.textContent = '2';

    rollBtn.addEventListener('click', () => {
        rollBtn.disabled = true;
        audioController.play('dice');
        diceScene1.classList.add('rolling');
        diceScene2.classList.add('rolling');

        const value1 = Math.floor(Math.random() * 6) + 1;
        const value2 = Math.floor(Math.random() * 6) + 1;
        spins1 += 1;
        spins2 += 1;

        setCubeFace(dice1, value1, spins1);
        setCubeFace(dice2, value2, spins2);

        setTimeout(() => {
            diceScene1.classList.remove('rolling');
            diceScene2.classList.remove('rolling');
            triggerLanding(diceScene1);
            triggerLanding(diceScene2);
            totalDisplay.textContent = value1 + value2;
            rollBtn.disabled = false;
        }, 1300);
    });
}

// ============================================
// COIN FLIP
// ============================================
function getCoinFlipHTML() {
    return `
        <div class="project-content">
            <h2>🪙 Coin Flip</h2>
            <div class="coin-container">
                <div class="coin-scene">
                    <div class="coin" id="coin">
                        <div class="coin-face heads">👑</div>
                        <div class="coin-edge"></div>
                        <div class="coin-face tails">🦅</div>
                    </div>
                    <div class="coin-shadow"></div>
                </div>
                
                <div class="coin-result" id="coinResult">Click to Flip!</div>
                
                <button class="btn-flip" id="flipCoin">Flip Coin</button>
                
                <div class="coin-stats">
                    <div class="stat-item">
                        <span>Heads:</span>
                        <span id="headsCount">0</span>
                    </div>
                    <div class="stat-item">
                        <span>Tails:</span>
                        <span id="tailsCount">0</span>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .coin-container {
                text-align: center;
                padding: 3rem 2rem;
            }

            .coin-scene {
                position: relative;
                width: 170px;
                height: 205px;
                perspective: 900px;
                margin: 1rem auto 2rem;
                transform-origin: center bottom;
            }
            
            .coin {
                --flip-x: 0deg;
                --flip-y: 0deg;
                width: 170px;
                height: 170px;
                position: relative;
                transform-style: preserve-3d;
                transform: rotateX(var(--flip-x)) rotateY(var(--flip-y));
                transition: transform 1.6s cubic-bezier(0.2, 0.8, 0.15, 1);
            }
            
            .coin-face {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 6rem;
                background: radial-gradient(circle at 35% 30%, #fff5a6, #ffd54f 45%, #e1a600 100%);
                border-radius: 50%;
                border: 5px solid #d79e00;
                box-shadow: inset -6px -8px 10px rgba(0, 0, 0, 0.22), inset 6px 8px 12px rgba(255, 255, 255, 0.45), 0 12px 25px rgba(0, 0, 0, 0.35);
            }

            .heads { transform: translateZ(8px); }
            
            .tails {
                transform: rotateY(180deg) translateZ(8px);
            }

            .coin-edge {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 8px solid #b8860b;
                transform: translateZ(0);
                box-shadow: inset 0 0 0 2px rgba(255, 232, 145, 0.35);
            }

            .coin-shadow {
                position: absolute;
                left: 50%;
                bottom: 6px;
                width: 110px;
                height: 16px;
                transform: translateX(-50%);
                border-radius: 50%;
                background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.08) 72%, transparent 100%);
            }

            .coin-scene.rolling .coin-shadow {
                animation: coinShadowFloat 1.6s ease;
            }

            .coin-scene.impact {
                animation: coinLanding 0.45s ease-out;
            }

            .coin-scene.impact .coin-shadow {
                animation: coinShadowImpact 0.45s ease-out;
            }
            
            .coin-result {
                font-size: 2rem;
                font-weight: bold;
                margin: 2rem 0;
                min-height: 3rem;
            }
            
            .btn-flip {
                background: linear-gradient(135deg, #ffd700, #ffed4e);
                color: #333;
                border: none;
                padding: 1rem 3rem;
                border-radius: 50px;
                font-size: 1.3rem;
                font-weight: bold;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .btn-flip:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(255, 215, 0, 0.4);
            }
            
            .coin-stats {
                display: flex;
                gap: 3rem;
                justify-content: center;
                margin-top: 2rem;
                font-size: 1.2rem;
            }
            
            .stat-item {
                display: flex;
                gap: 1rem;
                align-items: center;
            }

            @keyframes coinLanding {
                0% { transform: translateY(-12px); }
                55% { transform: translateY(5px); }
                82% { transform: translateY(-2px); }
                100% { transform: translateY(0); }
            }

            @keyframes coinShadowFloat {
                0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.4; }
                45% { transform: translateX(-50%) scale(0.68); opacity: 0.2; }
            }

            @keyframes coinShadowImpact {
                0% { transform: translateX(-50%) scale(0.72); opacity: 0.2; }
                55% { transform: translateX(-50%) scale(1.12); opacity: 0.44; }
                100% { transform: translateX(-50%) scale(1); opacity: 0.4; }
            }
        </style>
    `;
}

function initCoinFlip() {
    const coin = document.getElementById('coin');
    const coinScene = coin.closest('.coin-scene');
    const flipBtn = document.getElementById('flipCoin');
    const result = document.getElementById('coinResult');
    const headsCountEl = document.getElementById('headsCount');
    const tailsCountEl = document.getElementById('tailsCount');
    let headsCount = 0;
    let tailsCount = 0;
    let spinCount = 0;

    function setCoinFace(isHeads, seed) {
        const targetY = isHeads ? 0 : 180;
        const flipX = 360 * (4 + (seed % 3));
        const flipY = 360 * (3 + (seed % 2)) + targetY;
        coin.style.setProperty('--flip-x', `${flipX}deg`);
        coin.style.setProperty('--flip-y', `${flipY}deg`);
    }

    function triggerCoinLanding() {
        coinScene.classList.remove('impact');
        void coinScene.offsetWidth;
        coinScene.classList.add('impact');
        setTimeout(() => {
            coinScene.classList.remove('impact');
        }, 460);
    }

    flipBtn.addEventListener('click', () => {
        flipBtn.disabled = true;
        audioController.play('coin');
        result.textContent = 'Flipping...';
        coinScene.classList.add('rolling');

        const isHeads = Math.random() < 0.5;
        spinCount += 1;
        setCoinFace(isHeads, spinCount);

        setTimeout(() => {
            coinScene.classList.remove('rolling');
            triggerCoinLanding();
            if (isHeads) {
                result.textContent = '👑 Heads!';
                headsCount++;
                headsCountEl.textContent = headsCount;
            } else {
                result.textContent = '🦅 Tails!';
                tailsCount++;
                tailsCountEl.textContent = tailsCount;
            }
            flipBtn.disabled = false;
        }, 1600);
    });
}

// Continue with more projects in next message...
// Additional Project Implementations

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
        if (guess < minRange || guess > maxRange) {
            feedback.textContent = `⚠️ Please enter a number between ${minRange} and ${maxRange}`;
            feedback.style.color = 'var(--warning-color)';
            return;
        }

        if (isNaN(guess) || guess < 1 || guess > 100) {
            feedback.textContent = '⚠️ Please enter a number between 1 and 100!';
            feedback.style.color = 'var(--warning-color)';
            return;
        }

        attempts++;
        attemptsDisplay.textContent = attempts;
        const difference = Math.abs(guess - secretNumber);

        if (guess === secretNumber) {
            feedback.textContent = `🎉 Congratulations! You found it in ${attempts} attempts!`;
            feedback.style.color = 'var(--success-color)';
            guessInput.disabled = true;
            submitBtn.disabled = true;
        } else if (guess < secretNumber) {
            if (difference <= 5) {
                feedback.textContent = '📈 Slightly low! Try a bit higher!';
            } else {
                feedback.textContent = '📈 Too low! Try higher!';
            }
            feedback.style.color = 'var(--primary-color)';
            minRange = Math.max(minRange, guess + 1);
        } else {
            if (difference <= 5) {
                feedback.textContent = '📉 Slightly high! Try a bit lower!';
            } else {
                feedback.textContent = '📉 Too high! Try lower!';
            }
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
function getPascalTriangleHTML() {
    return `
        <div class="project-content">
            <h2>🔺 Pascal's Triangle</h2>
            <div class="pascal-container">
                <div class="controls">
                    <label>
                        Number of Rows:
                        <input type="number" id="pascalRows" min="1" max="12" value="7">
                    </label>
                    <button class="btn-generate" id="generatePascal">Generate</button>
                </div>
                
                <div class="pascal-display" id="pascalDisplay"></div>
            </div>
        </div>
        
        <style>
            .pascal-container {
                padding: 2rem;
                text-align: center;
            }
            
            .controls {
                display: flex;
                gap: 1rem;
                justify-content: center;
                align-items: center;
                margin-bottom: 3rem;
                flex-wrap: wrap;
            }
            
            .controls label {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 1.1rem;
            }
            
            .controls input {
                padding: 0.5rem;
                font-size: 1rem;
                border: 2px solid var(--border-color);
                border-radius: 8px;
                background: var(--bg-color);
                color: var(--text-color);
                width: 80px;
                text-align: center;
            }
            
            .pascal-display {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                margin-top: 2rem;
            }
            
            .pascal-row {
                display: flex;
                gap: 0.5rem;
                align-items: center;
            }
            
            .hexagon {
                width: 60px;
                height: 65px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .hexagon-inner {
                width: 100%;
                height: 100%;
                position: relative;
                clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 1.1rem;
                color: white;
                transition: var(--transition);
                animation: fadeIn 0.5s ease;
            }
            
            .hexagon:hover .hexagon-inner {
                transform: scale(1.1);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.5);
            }
        </style>
    `;
}

function initPascalTriangle() {
    const rowsInput = document.getElementById('pascalRows');
    const generateBtn = document.getElementById('generatePascal');
    const display = document.getElementById('pascalDisplay');

    function generatePascal() {
        const rows = parseInt(rowsInput.value) || 7;
        display.innerHTML = '';

        const triangle = [];

        for (let i = 0; i < rows; i++) {
            triangle[i] = [];
            const row = document.createElement('div');
            row.className = 'pascal-row';

            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    triangle[i][j] = 1;
                } else {
                    triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
                }

                const hexagon = document.createElement('div');
                hexagon.className = 'hexagon';
                hexagon.innerHTML = `<div class="hexagon-inner">${triangle[i][j]}</div>`;
                hexagon.style.animationDelay = `${(i + j) * 0.05}s`;
                row.appendChild(hexagon);
            }

            display.appendChild(row);
        }
    }

    generateBtn.addEventListener('click', generatePascal);
    generatePascal(); // Initial generation
}

// ============================================
// CALCULATOR
// ============================================
function getCalculatorHTML() {
    return `
        <div class="project-content">
            <h2>🧮 Calculator</h2>
            <div class="calculator">
                <div class="calc-display" id="calcDisplay">0</div>
                <div class="calc-buttons">
                    <button class="calc-btn clear" data-action="clear">C</button>
                    <button class="calc-btn operator" data-action="delete">⌫</button>
                    <button class="calc-btn operator" data-action="/">/</button>
                    <button class="calc-btn operator" data-action="*">×</button>
                    
                    <button class="calc-btn number" data-value="7">7</button>
                    <button class="calc-btn number" data-value="8">8</button>
                    <button class="calc-btn number" data-value="9">9</button>
                    <button class="calc-btn operator" data-action="-">−</button>
                    
                    <button class="calc-btn number" data-value="4">4</button>
                    <button class="calc-btn number" data-value="5">5</button>
                    <button class="calc-btn number" data-value="6">6</button>
                    <button class="calc-btn operator" data-action="+">+</button>
                    
                    <button class="calc-btn number" data-value="1">1</button>
                    <button class="calc-btn number" data-value="2">2</button>
                    <button class="calc-btn number" data-value="3">3</button>
                    <button class="calc-btn operator" data-action="**">^</button>
                    
                    <button class="calc-btn number span-2" data-value="0">0</button>
                    <button class="calc-btn number" data-value=".">.</button>
                    <button class="calc-btn equals" data-action="=">=</button>
                </div>
            </div>
        </div>
        
        <style>
            .calculator {
                max-width: 350px;
                margin: 2rem auto;
                background: var(--surface-color);
                padding: 1.5rem;
                border-radius: 20px;
                box-shadow: var(--shadow);
            }
            
            .calc-display {
                background: var(--bg-color);
                padding: 2rem;
                border-radius: 15px;
                font-size: 2.5rem;
                text-align: right;
                margin-bottom: 1rem;
                min-height: 80px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                word-break: break-all;
            }
            
            .calc-buttons {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 0.75rem;
            }
            
            .calc-btn {
                padding: 1.5rem;
                font-size: 1.5rem;
                border: none;
                border-radius: 15px;
                cursor: pointer;
                transition: var(--transition);
                font-weight: 600;
            }
            
            .calc-btn.number {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                color: var(--text-color);
            }
            
            .calc-btn.operator {
                background: var(--primary-color);
                color: white;
            }
            
            .calc-btn.equals {
                background: var(--success-color);
                color: white;
            }
            
            .calc-btn.clear {
                background: var(--danger-color);
                color: white;
            }
            
            .calc-btn:hover {
                transform: scale(1.05);
            }
            
            .calc-btn.span-2 {
                grid-column: span 2;
            }
        </style>
    `;
}

function initCalculator() {
    const display = document.getElementById('calcDisplay');
    let currentValue = '0';
    let previousValue = '';
    let operation = '';

    document.querySelectorAll('.calc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.getAttribute('data-value');
            const action = btn.getAttribute('data-action');

            if (value) {
                handleNumber(value);
            } else if (action) {
                handleAction(action);
            }

            updateDisplay();
        });
    });

    function handleNumber(num) {
        if (currentValue === '0' || currentValue === 'Error') {
            currentValue = num;
        } else {
            currentValue += num;
        }
    }

    function handleAction(action) {
        if (action === 'clear') {
            currentValue = '0';
            previousValue = '';
            operation = '';
        } else if (action === 'delete') {
            currentValue = currentValue.slice(0, -1) || '0';
        } else if (action === '=') {
            calculate();
        } else {
            if (previousValue && operation) {
                calculate();
            }
            previousValue = currentValue;
            currentValue = '0';
            operation = action;
        }
    }

    function calculate() {
        try {
            const prev = parseFloat(previousValue);
            const curr = parseFloat(currentValue);
            let result;

            switch (operation) {
                case '+': result = prev + curr; break;
                case '-': result = prev - curr; break;
                case '*': result = prev * curr; break;
                case '/': result = prev / curr; break;
                case '**': result = Math.pow(prev, curr); break;
                default: return;
            }

            currentValue = result.toString();
            previousValue = '';
            operation = '';
        } catch (e) {
            currentValue = 'Error';
        }
    }

    function updateDisplay() {
        display.textContent = currentValue;
    }
}

// ============================================
// FIBONACCI
// ============================================
function getFibonacciHTML() {
    return `
        <div class="project-content">
            <h2>✨ Fibonacci Series</h2>
            <div class="fibonacci-container">
                <div class="controls">
                    <label>
                        Number of terms:
                        <input type="number" id="fibTerms" min="1" max="20" value="10">
                    </label>
                    <button class="btn-generate" id="generateFib">Generate</button>
                </div>
                
                <div class="fib-display" id="fibDisplay"></div>
                
                <canvas id="fibSpiral" width="600" height="600"></canvas>
            </div>
        </div>
        
        <style>
            .fibonacci-container {
                padding: 2rem;
                text-align: center;
            }
            
            .fib-display {
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                flex-wrap: wrap;
                margin: 2rem 0;
            }
            
            .fib-number {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 15px;
                font-size: 1.3rem;
                font-weight: bold;
                animation: fadeIn 0.5s ease;
            }
            
            #fibSpiral {
                margin-top: 2rem;
                border-radius: 15px;
                box-shadow: var(--shadow);
                max-width: 100%;
                height: auto;
            }
        </style>
    `;
}

function initFibonacci() {
    const termsInput = document.getElementById('fibTerms');
    const generateBtn = document.getElementById('generateFib');
    const display = document.getElementById('fibDisplay');
    const canvas = document.getElementById('fibSpiral');
    const ctx = canvas.getContext('2d');

    function generateFibonacci() {
        const n = parseInt(termsInput.value) || 10;
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
function getFlamesHTML() {
    return `
        <div class="project-content">
            <h2>💖 FLAMES Game</h2>
            <p class="project-desc">Discover your <strong>relationship status</strong> and calculate your 
    <strong>Compatibility, Rivalry, </strong> or <strong>Nuisance</strong> factor!</p>
            <div class="flames-container">
                <div class="flames-legend">
                    <div class="legend-item">F - Friends</div>
                    <div class="legend-item">L - Love</div>
                    <div class="legend-item">A - Affection</div>
                    <div class="legend-item">M - Marriage</div>
                    <div class="legend-item">E - Enemies</div>
                    <div class="legend-item">S - Siblings</div>
                </div>
                
                <div class="names-input">
                    <input type="text" id="name1" placeholder="Enter first name" maxlength="20">
                    <div class="heart-icon">💕</div>
                    <input type="text" id="name2" placeholder="Enter second name" maxlength="20">
                </div>
                
                <button class="btn-calculate" id="calculateFlames">💖 Calculate</button>
                
                <div class="flames-result" id="flamesResult"></div>
            </div>
        </div>
        
        <style>
            .flames-container {
                padding: 2rem;
                max-width: 700px;
                margin: 0 auto;
                text-align: center;
            }
            
            .flames-legend {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .legend-item {
                background: var(--surface-color);
                padding: 0.75rem;
                border-radius: 10px;
                border: 2px solid var(--border-color);
                font-weight: 600;
            }
            
            .names-input {
                display: flex;
                gap: 1rem;
                align-items: center;
                justify-content: center;
                margin-bottom: 2rem;
                flex-wrap: wrap;
            }
            
            .names-input input {
                flex: 1;
                min-width: 200px;
                max-width: 250px;
                padding: 1rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
                text-align: center;
            }
            
            .heart-icon {
                font-size: 2rem;
                animation: heartbeat 1.5s infinite;
            }
            
            .btn-calculate {
                background: linear-gradient(135deg, #ec4899, #f43f5e);
                color: white;
                border: none;
                padding: 1rem 3rem;
                border-radius: 50px;
                font-size: 1.2rem;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .btn-calculate:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(236, 72, 153, 0.4);
            }
            
            .flames-result {
                margin-top: 3rem;
                min-height: 200px;
            }
            
            .result-card {
                background: linear-gradient(135deg, #ec4899, #f43f5e);
                color: white;
                padding: 3rem;
                border-radius: 20px;
                animation: zoomIn 0.5s ease;
            }
            
            .result-names {
                font-size: 1.5rem;
                margin-bottom: 1rem;
                font-weight: 600;
            }
            
            .result-relationship {
                font-size: 3rem;
                margin: 2rem 0;
                font-weight: bold;
                text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
            }
            
            .result-emoji {
                font-size: 4rem;
                margin-bottom: 1rem;
                animation: bounce 1s infinite;
            }
            
            .result-details {
                margin-top: 2rem;
                padding-top: 2rem;
                border-top: 2px solid rgba(255,255,255,0.3);
                font-size: 1.1rem;
            }
            
            @keyframes heartbeat {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
            
            @keyframes zoomIn {
                from {
                    opacity: 0;
                    transform: scale(0.5);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        </style>
    `;
}

function initFlames() {
    const calculateBtn = document.getElementById('calculateFlames');
    const name1Input = document.getElementById('name1');
    const name2Input = document.getElementById('name2');
    const resultDiv = document.getElementById('flamesResult');

    if (!calculateBtn || !name1Input || !name2Input || !resultDiv) return;

    const relationshipData = {
        F: { rel: 'Friends', emoji: '🤝', metric: 'Bond Strength', vibe: 'A bond that never breaks!' },
        L: { rel: 'Love', emoji: '❤️', metric: 'Compatibility Score', vibe: 'Pure romantic chemistry!' },
        A: { rel: 'Affection', emoji: '😊', metric: 'Crush Intensity', vibe: 'Someone\'s blushing!' },
        M: { rel: 'Marriage', emoji: '💍', metric: 'Marital Bliss', vibe: 'Start picking out the rings!' },
        E: { rel: 'Enemies', emoji: '😈', metric: 'Rivalry Quotient', vibe: 'Keep your distance!' },
        S: { rel: 'Siblings', emoji: '🏠', metric: 'Nuisance Factor', vibe: 'Stop touching my stuff!' }
    };

    function calculateFlames() {
        const name1Raw = name1Input.value.trim();
        const name2Raw = name2Input.value.trim();

        if (!name1Raw || !name2Raw) {
            resultDiv.innerHTML = '<p style="color: var(--error-color, #ff4d4d);">⚠️ Please enter both names!</p>';
            return;
        }

        const a = name1Raw.toLowerCase().replace(/\s+/g, '');
        const b = name2Raw.toLowerCase().replace(/\s+/g, '');
        const listA = a.split('');
        const listB = b.split('');

        for (let i = listA.length - 1; i >= 0; i--) {
            const ch = listA[i];
            const matchIndex = listB.indexOf(ch);
            if (matchIndex !== -1) {
                listA.splice(i, 1);
                listB.splice(matchIndex, 1);
            }
        }

        const count = listA.length + listB.length;
        const totalLen = a.length + b.length;
        const score = totalLen > 0 ? 30 + Math.round(((totalLen - count) / totalLen) * 70) : 0;

        const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
        let index = 0;
        while (flames.length > 1) {
            index = (index + count - 1) % flames.length;
            flames.splice(index, 1);
        }

        const final = relationshipData[flames[0]];
        const shareText = `🔥 FLAMES Report: ${name1Raw} + ${name2Raw} = ${final.rel} ${final.emoji}\n${final.metric}: ${score}%\nVibe: ${final.vibe}`;

        resultDiv.innerHTML = `
            <div class="result-card" style="text-align: center; animation: fadeIn 0.5s ease-out;">
                <div class="result-emoji" style="font-size: 3rem; margin-bottom: 10px;">${final.emoji}</div>
                <div class="result-names" style="font-weight: bold; letter-spacing: 1px; margin-bottom: 5px;">${name1Raw.toUpperCase()} & ${name2Raw.toUpperCase()}</div>
                <div class="result-relationship" style="font-size: 1.5rem; color: var(--accent-color, #a29bfe); margin-bottom: 15px;">${final.rel}</div>
                <div class="result-details" style="background: rgba(255,255,255,0.1); padding: 10px; border-radius: 8px; margin-bottom: 15px;">
                    <div style="font-weight: bold;">${final.metric}: ${score}%</div>
                    <div style="font-size: 0.85rem; font-style: italic; opacity: 0.9; margin-top: 5px;">"${final.vibe}"</div>
                </div>
                <button class="copy-btn" data-share="${shareText}" onclick="navigator.clipboard?.writeText(this.getAttribute('data-share'))" style="background: var(--accent-color, #6c5ce7); color: white; border: none; padding: 8px 15px; border-radius: 20px; cursor: pointer; font-size: 0.9rem; transition: all 0.3s; margin-top: 10px;">📋 Copy Result</button>
            </div>
        `;
    }

    calculateBtn.addEventListener('click', calculateFlames);
    [name1Input, name2Input].forEach(input => input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateFlames();
    }));
}

// ============================================
// EMOJI MEMORY GAME
// ============================================
function getEmojiMemoryGameHTML() {
    return `
        <div class="project-content">
            <h2>🧠 Emoji Memory Game</h2>
            <div class="emoji-memory-container">
                <div class="game-status" id="gameStatus">
                    <div class="status-item">
                        <span class="status-label">Score</span>
                        <span class="status-value" id="memoryScore">0</span>
                    </div>
                    <div class="status-item">
                        <span class="status-label">Level</span>
                        <span class="status-value" id="memoryLevel">1</span>
                    </div>
                    <div class="status-item">
                        <span class="status-label">Sequence</span>
                        <span class="status-value" id="sequenceLength">1</span>
                    </div>
                </div>
                
                <div class="game-instructions" id="instructions">
                    👇 Click START to begin the game!
                </div>
                
                <div class="sequence-display" id="sequenceDisplay">
                    <div class="display-content" id="displayContent">
                        Ready to test your memory?
                    </div>
                </div>
                
                <div class="emoji-buttons">
                    <button class="emoji-btn" data-emoji="🍎">🍎</button>
                    <button class="emoji-btn" data-emoji="🚗">🚗</button>
                    <button class="emoji-btn" data-emoji="⚽">⚽</button>
                    <button class="emoji-btn" data-emoji="🐍">🐍</button>
                    <button class="emoji-btn" data-emoji="🎧">🎧</button>
                    <button class="emoji-btn" data-emoji="🔥">🔥</button>
                    <button class="emoji-btn" data-emoji="🌈">🌈</button>
                    <button class="emoji-btn" data-emoji="🚀">🚀</button>
                </div>
                
                <div class="game-controls">
                    <button class="btn-start" id="startGame">▶️ START</button>
                    <button class="btn-reset" id="resetGame">🔄 RESET</button>
                </div>
            </div>
        </div>
        
        <style>
            .emoji-memory-container {
                padding: 2rem;
                max-width: 600px;
                margin: 0 auto;
                text-align: center;
            }
            
            .game-status {
                display: flex;
                justify-content: space-around;
                margin-bottom: 2rem;
                gap: 1rem;
                flex-wrap: wrap;
            }
            
            .status-item {
                background: var(--surface-color);
                padding: 1rem 1.5rem;
                border-radius: 12px;
                border: 2px solid var(--border-color);
                flex: 1;
                min-width: 100px;
            }
            
            .status-label {
                display: block;
                font-size: 0.9rem;
                color: var(--text-secondary);
                margin-bottom: 0.5rem;
            }
            
            .status-value {
                display: block;
                font-size: 2rem;
                font-weight: bold;
                color: var(--primary-color);
            }
            
            .game-instructions {
                font-size: 1.3rem;
                margin-bottom: 2rem;
                padding: 1rem;
                background: rgba(106, 88, 236, 0.1);
                border-radius: 12px;
                border: 2px solid var(--primary-color);
            }
            
            .sequence-display {
                background: var(--surface-color);
                border: 3px dashed var(--primary-color);
                border-radius: 15px;
                padding: 2rem;
                margin-bottom: 2rem;
                min-height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .display-content {
                font-size: 3rem;
                font-weight: bold;
                word-wrap: break-word;
                letter-spacing: 0.5rem;
            }
            
            .emoji-buttons {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .emoji-btn {
                font-size: 3rem;
                padding: 1.5rem;
                border: 3px solid var(--border-color);
                background: var(--surface-color);
                border-radius: 15px;
                cursor: pointer;
                transition: all 0.2s ease;
                aspect-ratio: 1 / 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .emoji-btn:hover {
                transform: scale(1.1);
                border-color: var(--primary-color);
                box-shadow: 0 0 20px rgba(106, 88, 236, 0.3);
            }
            
            .emoji-btn:active {
                transform: scale(0.95);
            }
            
            .emoji-btn.disabled {
                cursor: not-allowed;
                opacity: 0.5;
                pointer-events: none;
            }
            
            .emoji-btn.active {
                background: var(--primary-color);
                color: white;
                box-shadow: 0 0 30px rgba(106, 88, 236, 0.6);
                animation: pulse 0.3s ease;
            }
            
            .game-controls {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .btn-start, .btn-reset {
                padding: 1rem 2rem;
                font-size: 1.1rem;
                border: none;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: bold;
            }
            
            .btn-start {
                background: linear-gradient(135deg, #6a58ec, #8b5cf6);
                color: white;
            }
            
            .btn-start:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 20px rgba(106, 88, 236, 0.4);
            }
            
            .btn-reset {
                background: var(--surface-color);
                color: var(--text-color);
                border: 2px solid var(--border-color);
            }
            
            .btn-reset:hover {
                border-color: var(--primary-color);
                color: var(--primary-color);
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }
            
            @media (max-width: 600px) {
                .emoji-buttons {
                    grid-template-columns: repeat(3, 1fr);
                }
                
                .emoji-btn {
                    font-size: 2rem;
                    padding: 1rem;
                }
                
                .display-content {
                    font-size: 2rem;
                }
            }
        </style>
    `;
}

function initEmojiMemoryGame() {
    const emojis = ["🍎", "🚗", "⚽", "🐍", "🎧", "🔥", "🌈", "🚀"];
    let sequence = [];
    let userSequence = [];
    let score = 0;
    let level = 1;
    let gameActive = false;
    let isPlayingSequence = false;
    
    const startBtn = document.getElementById('startGame');
    const resetBtn = document.getElementById('resetGame');
    const scoreDisplay = document.getElementById('memoryScore');
    const levelDisplay = document.getElementById('memoryLevel');
    const sequenceLengthDisplay = document.getElementById('sequenceLength');
    const instructionsDiv = document.getElementById('instructions');
    const displayContent = document.getElementById('displayContent');
    const emojiButtons = document.querySelectorAll('.emoji-btn');
    
    function disableButtons(disabled) {
        emojiButtons.forEach(btn => {
            if (disabled) {
                btn.classList.add('disabled');
            } else {
                btn.classList.remove('disabled');
            }
        });
    }
    function showSequence() {
        isPlayingSequence = true;
        disableButtons(true);
        displayContent.textContent = "Watch the sequence...";
        
        let i = 0;
        const playNextEmoji = () => {
            if (i < sequence.length) {
                const emoji = sequence[i];
                const button = Array.from(emojiButtons).find(btn => btn.dataset.emoji === emoji);
                
                if (button) {
                    button.classList.add('active');
                    setTimeout(() => {
                        button.classList.remove('active');
                        i++;
                        setTimeout(playNextEmoji, 500);
                    }, 600);
                }
            } else {
                isPlayingSequence = false;
                disableButtons(false);
                userSequence = [];
                gameActive = true;
                displayContent.textContent = "Your turn! Click the emojis...";
                instructionsDiv.textContent = `👆 Repeat the sequence (${sequence.length} steps)`;
            }
        };
        
        playNextEmoji();
    }
    
    function startNewRound() {
        const newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        sequence.push(newEmoji);
        userSequence = [];
        
        sequenceLengthDisplay.textContent = sequence.length;
        setTimeout(showSequence, 500);
    }
    
    function handleEmojiClick(emoji, button) {
        if (isPlayingSequence || !gameActive) return;
        
        userSequence.push(emoji);
        button.classList.add('active');
        
        setTimeout(() => {
            button.classList.remove('active');
        }, 300);
        
        // Check if the emoji matches
        if (userSequence[userSequence.length - 1] !== sequence[userSequence.length - 1]) {
            gameOver();
            return;
        }
        
        // Check if the entire sequence is correct
        if (userSequence.length === sequence.length) {
            score += level * 10;
            scoreDisplay.textContent = score;
            level++;
            levelDisplay.textContent = level;
            
            instructionsDiv.textContent = "✅ Correct! Get ready for the next round...";
            gameActive = false;
            setTimeout(startNewRound, 1500);
        }
    }
    
    function gameOver() {
        gameActive = false;
        disableButtons(true);
        instructionsDiv.textContent = `❌ Game Over! You reached Level ${level} with Score: ${score}`;
        displayContent.textContent = `Final Score: ${score}`;
        startBtn.textContent = "▶️ PLAY AGAIN";
    }
    
    function resetGame() {
        sequence = [];
        userSequence = [];
        score = 0;
        level = 1;
        gameActive = false;
        isPlayingSequence = false;
        
        scoreDisplay.textContent = '0';
        levelDisplay.textContent = '1';
        sequenceLengthDisplay.textContent = '0';
        instructionsDiv.textContent = "👇 Click START to begin the game!";
        displayContent.textContent = "Ready to test your memory?";
        startBtn.textContent = "▶️ START";
        
        disableButtons(true);
    }
    
    startBtn.addEventListener('click', () => {
        resetGame();
        gameActive = true;
        instructionsDiv.textContent = "Watch the sequence...";
        startNewRound();
    });
    
    resetBtn.addEventListener('click', resetGame);
    
    emojiButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const emoji = btn.dataset.emoji;
            handleEmojiClick(emoji, btn);
        });
    });
    
    // Initial state
    disableButtons(true);
}

// ============================================
// COLLATZ CONJECTURE
// ============================================
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
        ctx.strokeStyle = 'var(--text-secondary)';
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
                    <input type="number" id="armstrongNumber" placeholder="Enter a number" min="0">
                    <button class="btn-check" id="checkArmstrong">💎 Check</button>
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
        </style>
    `;
}

function initArmstrong() {
    const numberInput = document.getElementById('armstrongNumber');
    const checkBtn = document.getElementById('checkArmstrong');
    const resultDiv = document.getElementById('armstrongResult');
    const exampleBtns = document.querySelectorAll('.example-btn');

    function checkArmstrong(num) {
        if (num === null || num === undefined || num < 0) {
            resultDiv.innerHTML = '<p style="color: var(--danger-color);">⚠️ Please enter a valid positive number!</p>';
            return;
        }

        const numStr = num.toString();
        const numDigits = numStr.length;
        const digits = numStr.split('').map(Number);

        // Calculate sum
        let sum = 0;
        const calculations = [];

        digits.forEach(digit => {
            const power = Math.pow(digit, numDigits);
            sum += power;
            calculations.push({ digit, power });
        });

        const isArmstrong = sum === num;

        // Display result
        let html = `
            <div class="armstrong-result">
                <div class="result-header ${isArmstrong ? 'is-armstrong' : 'not-armstrong'}">
                    ${isArmstrong ? '✅ Armstrong Number!' : '❌ Not an Armstrong Number'}
                </div>
                
                <div class="calculation-steps">
                    <div class="step"><strong>Number:</strong> ${num}</div>
                    <div class="step"><strong>Number of digits:</strong> ${numDigits}</div>
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
                ? `<span style="color: var(--success-color);">✓ ${sum} = ${num} (Armstrong Number!)</span>`
                : `<span style="color: var(--danger-color);">✗ ${sum} ≠ ${num} (Not Armstrong)</span>`
            }
                    </div>
                </div>
            </div>
        `;

        resultDiv.innerHTML = html;
    }

    checkBtn.addEventListener('click', () => {
        const num = parseInt(numberInput.value);
        checkArmstrong(num);
    });

    numberInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const num = parseInt(numberInput.value);
            checkArmstrong(num);
        }
    });

    exampleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const num = parseInt(btn.getAttribute('data-num'));
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

                <div class="prime-factorization">
                    <h3>Prime Factorization</h3>
                    <div class="input-group">
                        <input type="number" id="factorizeInput" placeholder="Enter a number">
                        <button class="btn-check" id="factorizeBtn">Factorize</button>
                    </div>
                    <div class="factorization-display" id="factorizationDisplay"></div>
                    <div id="factorizationDetails" class="factorization-details"></div>
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

            .prime-factorization {
                background: var(--surface-color);
                padding: 1.5rem;
                border-radius: 15px;
                margin-bottom: 2rem;
                border: 2px solid var(--border-color);
            }

            .prime-factorization h3 {
                margin-bottom: 1rem;
                color: var(--primary-color);
            }

            .factorization-display {
                font-size: 1.5rem;
                font-weight: bold;
                padding: 1.5rem;
                border-radius: 10px;
                background: var(--bg-color);
                text-align: center;
                margin-top: 1rem;
                color: var(--primary-color);
                min-height: 4rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .factorization-details {
                margin-top: 1rem;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                text-align: left;
            }

            .detail-item {
                display: flex;
                justify-content: space-between;
                padding: 0.5rem 1rem;
                background: rgba(99, 102, 241, 0.1);
                border-radius: 8px;
                font-size: 0.95rem;
            }

            .detail-label {
                color: var(--text-secondary);
                font-weight: 500;
            }

            .detail-value {
                color: var(--primary-color);
                font-weight: bold;
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
    const factorizeInput = document.getElementById('factorizeInput');
    const factorizeBtn = document.getElementById('factorizeBtn');
    const factorizationDisplay = document.getElementById('factorizationDisplay');
    const factorizationDetails = document.getElementById('factorizationDetails');

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

    // Prime factorization
    function factorize() {
        let num = parseInt(factorizeInput.value);
        const originalNum = num;

        if (isNaN(num)) {
            factorizationDisplay.textContent = '⚠️ Please enter a valid number!';
            factorizationDetails.innerHTML = '';
            return;
        }

        if (num < 2) {
            factorizationDisplay.textContent = `❌ ${num} cannot be factorized into primes.`;
            factorizationDetails.innerHTML = `
                <div class="detail-item">
                    <span class="detail-label">Note:</span>
                    <span class="detail-value">Prime numbers must be greater than 1</span>
                </div>
            `;
            return;
        }

        const factors = [];
        let d = 2;
        let tempNum = num;
        while (d * d <= tempNum) {
            while (tempNum % d === 0) {
                factors.push(d);
                tempNum /= d;
            }
            d++;
        }
        if (tempNum > 1) factors.push(tempNum);

        const uniqueFactors = [...new Set(factors)];

        factorizationDisplay.textContent = `${originalNum} = ${factors.join(' × ')}`;

        factorizationDetails.innerHTML = `
            <div class="detail-item">
                <span class="detail-label">Unique Prime Factors:</span>
                <span class="detail-value">[${uniqueFactors.join(', ')}]</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">Total Factors (with repetition):</span>
                <span class="detail-value">${factors.length}</span>
            </div>
        `;
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
                    <button class="btn-solve" id="solveBtn">🎯 Solve</button>
                    <button class="btn-reset" id="resetHanoi">Reset</button>
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
            
            .controls input {
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
            
            .btn-solve:hover {
                transform: scale(1.05);
            }
            
            .btn-solve:disabled {
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
            }
        </style>
    `;
}



function initTowerOfHanoi() {
    const canvas = document.getElementById('hanoiCanvas');
    const ctx = canvas.getContext('2d');
    const diskCountInput = document.getElementById('diskCount');
    const solveBtn = document.getElementById('solveBtn');
    const resetBtn = document.getElementById('resetHanoi');
    const moveCountEl = document.getElementById('moveCount');
    const optimalMovesEl = document.getElementById('optimalMoves');

    let towers = [[], [], []];
    let diskCount = 3;
    let moveCount = 0;
    let isAnimating = false;
    let shouldStop = false;

    const towerX = [200, 400, 600];
    const baseY = 350;
    const diskHeight = 20;
    const maxDiskWidth = 120;
    const colors = ['#ff6b6b', '#f59e0b', '#10b981', '#06b6d4', '#6366f1', '#8b5cf6', '#ec4899'];

    function initTowers() {
        towers = [[], [], []];
        moveCount = 0;
        diskCount = parseInt(diskCountInput.value) || 3;

        //Reset animation state
        isAnimating = false;
        solveBtn.disabled = false;

        for (let i = diskCount; i >= 1; i--) {
            towers[0].push(i);
        }

        optimalMovesEl.textContent = Math.pow(2, diskCount) - 1;
        moveCountEl.textContent = '0';
        drawTowers();
    }

    function drawTowers() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw bases and poles
        ctx.fillStyle = '#64748b';
        for (let i = 0; i < 3; i++) {
            // Pole
            ctx.fillRect(towerX[i] - 5, baseY - 200, 10, 200);
            // Base
            ctx.fillRect(towerX[i] - 80, baseY, 160, 10);
        }

        // Draw disks
        for (let tower = 0; tower < 3; tower++) {
            for (let disk = 0; disk < towers[tower].length; disk++) {
                const diskSize = towers[tower][disk];
                const diskWidth = (maxDiskWidth * diskSize) / diskCount;
                const x = towerX[tower] - diskWidth / 2;
                const y = baseY - (disk + 1) * diskHeight;

                // Disk with gradient
                const gradient = ctx.createLinearGradient(x, y, x + diskWidth, y + diskHeight);
                gradient.addColorStop(0, colors[diskSize - 1]);
                gradient.addColorStop(1, colors[diskSize - 1] + 'aa');

                ctx.fillStyle = gradient;
                ctx.fillRect(x, y, diskWidth, diskHeight - 2);

                // Border
                ctx.strokeStyle = '#1e293b';
                ctx.lineWidth = 2;
                ctx.strokeRect(x, y, diskWidth, diskHeight - 2);

                // Number
                ctx.fillStyle = 'white';
                ctx.font = 'bold 12px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(diskSize, towerX[tower], y + diskHeight / 2 + 4);
            }
        }
    }

    async function moveDisk(from, to) {
        if (shouldStop) return;

        const disk = towers[from].pop();
        towers[to].push(disk);
        moveCount++;
        moveCountEl.textContent = moveCount;

        drawTowers();
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    async function solveHanoi(n, from, to, aux) {
        if (n === 1) {
            await moveDisk(from, to);
            return;
        }

        await solveHanoi(n - 1, from, aux, to);
        await moveDisk(from, to);
        await solveHanoi(n - 1, aux, to, from);
    }

    async function solve() {
        if (isAnimating) return;

        if (diskCount < 3 || diskCount > 7) {
            alert("Visualization supports only 3 to 7 disks");
            return;
        }

        isAnimating = true;
        solveBtn.disabled = true;

        await solveHanoi(diskCount, 0, 2, 1);

        shouldStop = false;

        isAnimating = false;
        solveBtn.disabled = false;
    }

    solveBtn.addEventListener('click', solve);
    resetBtn.addEventListener('click', () => {
        shouldStop = true;
        initTowers();
    });
    diskCountInput.addEventListener('change', initTowers);

    initTowers();
}

function getTypingSpeedTesterHTML() {
    return `
        <div class="project-content">

            <h2>⌨️ Typing Speed Tester</h2>

            <p style="margin-bottom: 10px;">
                Type the exact sentence shown below 👇
            </p>

            <div 
                id="typingSentence"
                style="
                    background: #111827;
                    padding: 15px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    font-size: 18px;
                "
            >
                Click Start Test 🚀
            </div>

            <textarea
                id="typingInput"
                placeholder="Start typing here..."
                rows="5"
                disabled
                style="
                    width: 100%;
                    padding: 15px;
                    border-radius: 10px;
                    font-size: 16px;
                    margin-bottom: 20px;
                "
            ></textarea>

            <button
                id="startTypingBtn"
                class="btn-play"
            >
                Start Test 🚀
            </button>

            <div
                id="typingResult"
                style="
                    margin-top: 25px;
                    font-size: 18px;
                    line-height: 1.8;
                "
            ></div>

        </div>
    `;
}

function initTypingSpeedTester() {

    const sentences = [
        "Python is fun to learn",
        "Practice makes perfect",
        "Open source is amazing",
        "Typing speed improves daily",
        "Coding becomes easier with practice"
    ];

    const sentenceElement =
        document.getElementById("typingSentence");

    const inputElement =
        document.getElementById("typingInput");

    const button =
        document.getElementById("startTypingBtn");

    const result =
        document.getElementById("typingResult");

    let startTime = null;
    let currentSentence = "";

    // Disable typing initially
    inputElement.disabled = true;

    // Start Test
    button.onclick = function () {

        // Random sentence
        currentSentence =
            sentences[Math.floor(Math.random() * sentences.length)];

        // Show sentence
        sentenceElement.innerText = currentSentence;

        // Enable typing
        inputElement.disabled = false;

        // Clear textarea
        inputElement.value = "";

        // Focus cursor
        inputElement.focus();

        // Clear previous result
        result.innerHTML = "";

        // Start timer
        startTime = new Date().getTime();
    };

    // Typing Event
    inputElement.addEventListener("input", function () {

        if (!startTime) return;

        const typedText =
            inputElement.value;

        // Current time
        const currentTime =
            new Date().getTime();

        // Total time in seconds
        const totalTime =
            (currentTime - startTime) / 1000;

        // Correct characters
        let correctChars = 0;

        for (let i = 0; i < typedText.length; i++) {

            if (
                typedText[i]?.toLowerCase() ===
                currentSentence[i]?.toLowerCase()
            ) {
                correctChars++;
            }
        }

        // Accuracy
        const accuracy =
            Math.round(
                (correctChars / currentSentence.length) * 100
            );

        // Words typed
        const wordsTyped =
            typedText.trim().split(" ").length;

        // WPM
        const wpm =
            Math.round((wordsTyped / totalTime) * 60);

        // If typing is wrong
        if (
            !currentSentence
                .toLowerCase()
                .startsWith(typedText.toLowerCase())
        ) {

            result.innerHTML = `
                ❌ Wrong typing detected! <br><br>
                🎯 Accuracy: ${accuracy}% 
            `;

            return;
        }

        // Show live stats
        result.innerHTML = `
            ⏱️ Time: ${totalTime.toFixed(1)} sec <br><br>
            🚀 Speed: ${wpm} WPM <br><br>
            🎯 Accuracy: ${accuracy}% 
        `;

        // Completed
        if (
            typedText.trim().toLowerCase() ===
            currentSentence.trim().toLowerCase()
        ) {

            result.innerHTML = `
                🎉 Test Completed Successfully! <br><br>

                ⏱️ Total Time: ${totalTime.toFixed(1)} sec <br><br>

                🚀 Typing Speed: ${wpm} WPM <br><br>

                🎯 Accuracy: ${accuracy}% 
            `;

            // Disable typing after completion
            inputElement.disabled = true;
        }
    });
}

function getNumberConverterHTML() {
    return `
        <div class="project-content">
            <h2>🔢 Number Converter</h2>
            <div class="converter-box">
                <div class="converter-row">
                    <label for="converterInput">Number</label>
                    <input id="converterInput" type="text" placeholder="Enter a value" value="1010">
                </div>
                <div class="converter-row">
                    <label for="sourceBase">From</label>
                    <select id="sourceBase">
                        <option value="2">Binary</option>
                        <option value="8">Octal</option>
                        <option value="10" selected>Decimal</option>
                        <option value="16">Hexadecimal</option>
                    </select>
                </div>
                <div class="converter-row">
                    <label for="targetBase">To</label>
                    <select id="targetBase">
                        <option value="2">Binary</option>
                        <option value="8">Octal</option>
                        <option value="10">Decimal</option>
                        <option value="16" selected>Hexadecimal</option>
                    </select>
                </div>
                <button class="btn-primary" id="convertNumberBtn">Convert</button>
                <div id="converterResult" class="converter-result"></div>
            </div>
        </div>
        <style>
            .converter-box { max-width: 640px; margin: 0 auto; padding: 1.5rem; display: grid; gap: 1rem; }
            .converter-row { display: grid; gap: 0.4rem; }
            .converter-row label { font-weight: 600; }
            .converter-row input, .converter-row select { padding: 0.9rem; border-radius: 10px; border: 2px solid var(--border-color); background: var(--surface-color); color: var(--text-color); }
            .converter-result { min-height: 2rem; padding: 0.9rem 1rem; border-radius: 10px; background: var(--surface-color); border: 1px solid var(--border-color); font-weight: 700; }
        </style>
    `;
}

function initNumberConverter() {
    const input = document.getElementById('converterInput');
    const sourceBase = document.getElementById('sourceBase');
    const targetBase = document.getElementById('targetBase');
    const button = document.getElementById('convertNumberBtn');
    const result = document.getElementById('converterResult');

    if (!input || !sourceBase || !targetBase || !button || !result) return;

    const convert = () => {
        const value = input.value.trim();
        const fromBase = Number(sourceBase.value);
        const toBase = Number(targetBase.value);

        if (!value) {
            result.textContent = 'Enter a number to convert.';
            return;
        }

        const parsed = parseInt(value, fromBase);
        if (Number.isNaN(parsed)) {
            result.textContent = 'Invalid input for the selected base.';
            return;
        }

        result.textContent = `Result: ${parsed.toString(toBase).toUpperCase()}`;
    };

    button.addEventListener('click', convert);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') convert(); });
    convert();
}

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

function getProjectileMotionHTML() {
    return `
        <div class="project-content">
            <h2>🚀 Projectile Motion Calculator</h2>
            <div class="projectile-container">
                <div class="projectile-controls">
                    <div class="control-group">
                        <label for="projSpeed">Launch Speed (m/s)</label>
                        <input id="projSpeed" type="number" min="1" max="200" value="45">
                    </div>
                    <div class="control-group">
                        <label for="projAngle">Launch Angle (°)</label>
                        <input id="projAngle" type="number" min="1" max="89" value="45">
                    </div>
                </div>

                <div class="projectile-actions">
                    <button class="btn-primary" id="launchProjectileBtn">Launch</button>
                </div>

                <div class="projectile-stats">
                    <div class="stat-chip">⏱️ TOF: <span id="projTime">0.00 s</span></div>
                    <div class="stat-chip">📈 Hmax: <span id="projHeight">0.00 m</span></div>
                    <div class="stat-chip">📏 Range: <span id="projRange">0.00 m</span></div>
                </div>

                <canvas id="projectileCanvas" width="760" height="380"></canvas>
                <p class="projectile-result" id="projectileResult">Set values and launch to calculate TOF, Hmax, and Range.</p>
            </div>
        </div>

        <style>
            .projectile-container {
                text-align: center;
                padding: 1.5rem;
            }

            .projectile-controls {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
                gap: 1rem;
                margin-bottom: 1rem;
            }

            .control-group {
                display: flex;
                flex-direction: column;
                gap: 0.45rem;
                text-align: left;
            }

            .control-group label {
                font-weight: 600;
                color: var(--text-secondary);
            }

            .control-group input {
                padding: 0.7rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--surface-color);
                color: var(--text-primary);
                font-size: 1rem;
            }

            .projectile-actions {
                display: flex;
                gap: 0.8rem;
                justify-content: center;
                margin: 1.2rem 0;
                flex-wrap: wrap;
            }

            .btn-primary {
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 0.75rem 1.3rem;
                border-radius: 10px;
                cursor: pointer;
                transition: var(--transition);
            }

            .btn-primary:hover {
                transform: translateY(-2px);
            }

            .projectile-stats {
                display: flex;
                gap: 0.8rem;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 1rem;
            }

            .stat-chip {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 999px;
                padding: 0.45rem 0.9rem;
                font-weight: 600;
                color: var(--text-primary);
            }

            #projectileCanvas {
                width: 100%;
                max-width: 760px;
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 14px;
                box-shadow: var(--shadow);
            }

            .projectile-result {
                margin-top: 0.9rem;
                font-size: 1.05rem;
                font-weight: bold;
                color: var(--primary-color);
                min-height: 1.3rem;
            }
        </style>
    `;
}



function initProjectileMotion() {
    const g = 9.81;
    const canvas = document.getElementById('projectileCanvas');
    const ctx = canvas.getContext('2d');

    const speedInput = document.getElementById('projSpeed');
    const angleInput = document.getElementById('projAngle');
    const launchBtn = document.getElementById('launchProjectileBtn');

    const timeEl = document.getElementById('projTime');
    const rangeEl = document.getElementById('projRange');
    const heightEl = document.getElementById('projHeight');
    const resultEl = document.getElementById('projectileResult');

   function drawScene(points, xMax, yMax) {
        const width = canvas.width;
        const height = canvas.height;

        const marginLeft = 35;
        const marginBottom = 25;
        const marginTop = 10;
        const marginRight = 10;

        const usableWidth = width - marginLeft - marginRight;
        const usableHeight = height - marginTop - marginBottom - 5;

        // Maintain proportional scaling
        const scale = Math.min(
            usableWidth / xMax,
            usableHeight / yMax
        );

        const mapX = (x) => marginLeft + x * scale;
        const mapY = (y) => height - marginBottom - y * scale;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Background
        ctx.fillStyle = '#0f172a10';
        ctx.fillRect(0, 0, width, height);

        // Axes
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2;

        ctx.beginPath();

        // Y-axis
        ctx.moveTo(marginLeft, marginTop);
        ctx.lineTo(marginLeft, height - marginBottom);

        // X-axis
        ctx.lineTo(width - marginRight, height - marginBottom);

        ctx.stroke();

        // Axis labels
        ctx.fillStyle = '#64748b';
        ctx.font = '12px Arial';

        ctx.fillText(
            'Height (m)',
            8,
            marginTop + 12
        );

        ctx.fillText(
            'Distance (m)',
            width - 95,
            height - 10
        );

        // Draw trajectory
        if (points.length > 1) {
            ctx.strokeStyle = '#2563eb';
            ctx.lineWidth = 3;

            ctx.beginPath();

            ctx.moveTo(
                mapX(points[0].x),
                mapY(points[0].y)
            );

            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(
                    mapX(points[i].x),
                    mapY(points[i].y)
                );
            }

            ctx.stroke();

            // Landing point
            const landing = points[points.length - 1];

            ctx.fillStyle = '#ef4444';

            ctx.beginPath();

            ctx.arc(
                mapX(landing.x),
                mapY(landing.y),
                6,
                0,
                Math.PI * 2
            );

            ctx.fill();
        }
    }
    function simulate() {
        const speed = Math.max(1, Number(speedInput.value) || 1);
        const rawAngle = Number(angleInput.value);

        const angleDeg = Math.min(
            89,
            Math.max(1, isNaN(rawAngle) ? 45 : rawAngle)
        );

        angleInput.value = angleDeg;

        const angleRad = angleDeg * Math.PI / 180;
        const totalTime = (2 * speed * Math.sin(angleRad)) / g;
        const range = (speed * speed * Math.sin(2 * angleRad)) / g;
        const maxHeight = (speed * speed * Math.sin(angleRad) * Math.sin(angleRad)) / (2 * g);

        const points = [];
        const steps = 180;
        for (let i = 0; i <= steps; i++) {
            const t = (totalTime * i) / steps;
            const x = speed * Math.cos(angleRad) * t;
            const y = speed * Math.sin(angleRad) * t - 0.5 * g * t * t;
            points.push({ x, y: Math.max(0, y) });
        }

        const xMax = Math.max(range, 10) * 1.2;
        const yMax = Math.max(maxHeight, 10) * 1.25;
        drawScene(points, xMax, yMax);

        timeEl.textContent = `${totalTime.toFixed(2)} s`;
        rangeEl.textContent = `${range.toFixed(2)} m`;
        heightEl.textContent = `${maxHeight.toFixed(2)} m`;
        resultEl.textContent = '✅ Calculated TOF, Hmax, and Range.';
    }

    launchBtn.addEventListener('click', simulate);

    [speedInput, angleInput].forEach((input) => {
        input.addEventListener('change', simulate);
    });

    simulate();
}

function getProgressionRecognizerHTML() {
    return `
        <div class="project-content">
            <h2>📐 AP / GP / AGP / HP Recognizer</h2>
            <div class="progression-container">
                <p class="progression-help">
                    Enter at least 4 numbers separated by commas.<br>
                    Example: <strong>2, 4, 6, 8</strong> or <strong>3, 6, 12, 24</strong>
                </p>

                <div class="progression-input-wrap">
                    <label for="progressionInput">Sequence</label>
                    <input id="progressionInput" type="text" placeholder="e.g. 1, 2, 3, 4">
                </div>

                <div class="progression-actions">
                    <button class="btn-primary" id="recognizeProgressionBtn">Recognize</button>
                </div>

                <div class="progression-output" id="progressionOutput">Waiting for input...</div>
            </div>
        </div>

        <style>
            .progression-container {
                text-align: center;
                padding: 1.5rem;
                max-width: 760px;
                margin: 0 auto;
            }

            .progression-help {
                color: var(--text-secondary);
                line-height: 1.6;
                margin-bottom: 1rem;
            }

            .progression-input-wrap {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                text-align: left;
                margin-bottom: 1rem;
            }

            .progression-input-wrap label {
                font-weight: 600;
                color: var(--text-secondary);
            }

            .progression-input-wrap input {
                padding: 0.8rem;
                border-radius: 10px;
                border: 2px solid var(--border-color);
                background: var(--surface-color);
                color: var(--text-primary);
                font-size: 1rem;
            }

            .progression-actions {
                margin: 1rem 0;
            }

            .progression-output {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 1rem;
                text-align: left;
                line-height: 1.7;
                white-space: pre-line;
                min-height: 90px;
            }
        </style>
    `;
}

function initProgressionRecognizer() {
    const EPS = 1e-9;
    const input = document.getElementById('progressionInput');
    const button = document.getElementById('recognizeProgressionBtn');
    const output = document.getElementById('progressionOutput');

    function isClose(a, b, eps = EPS) {
        return Math.abs(a - b) <= eps;
    }

    function parseSequence(raw) {
        const parts = raw
            .split(',')
            .map((item) => item.trim())
            .filter((item) => item.length > 0);

        if (parts.length < 4) {
            return { error: 'Please enter at least 4 numbers.' };
        }

        const sequence = [];
        for (const part of parts) {
            const value = Number(part);
            if (!Number.isFinite(value)) {
                return { error: `Invalid value: ${part}` };
            }
            sequence.push(value);
        }

        return { sequence };
    }

    function formatNumber(value) {
        if (isClose(value, Math.round(value))) {
            return String(Math.round(value));
        }
        return Number(value.toFixed(6)).toString();
    }

    function checkAP(sequence) {
        const diff = sequence[1] - sequence[0];
        for (let i = 2; i < sequence.length; i++) {
            if (!isClose(sequence[i] - sequence[i - 1], diff)) {
                return { ok: false };
            }
        }
        return { ok: true, diff };
    }

    function checkGP(sequence) {
        const allZero = sequence.every((value) => isClose(value, 0));
        if (allZero) {
            return { ok: true, ratio: 0 };
        }

        for (let i = 1; i < sequence.length; i++) {
            if (isClose(sequence[i - 1], 0)) {
                return { ok: false };
            }
        }

        const ratio = sequence[1] / sequence[0];
        for (let i = 2; i < sequence.length; i++) {
            if (!isClose(sequence[i] / sequence[i - 1], ratio)) {
                return { ok: false };
            }
        }

        return { ok: true, ratio };
    }

    function checkHP(sequence) {
        if (sequence.some((value) => isClose(value, 0))) {
            return { ok: false };
        }

        const reciprocal = sequence.map((value) => 1 / value);
        const apCheck = checkAP(reciprocal);

        if (!apCheck.ok) {
            return { ok: false };
        }

        return { ok: true, reciprocalDiff: apCheck.diff };
    }

    function agpCandidates(sequence) {
        const s0 = sequence[0];
        const s1 = sequence[1];
        const s2 = sequence[2];

        if (isClose(s0, 0)) {
            if (isClose(s1, 0)) {
                return [];
            }
            return [s2 / (2 * s1)];
        }

        const a = s0;
        const b = -2 * s1;
        const c = s2;
        const disc = b * b - 4 * a * c;

        if (disc < -EPS) {
            return [];
        }

        if (isClose(disc, 0)) {
            return [-b / (2 * a)];
        }

        if (disc < 0) {
            return [];
        }

        const sqrtDisc = Math.sqrt(disc);
        const r1 = (-b + sqrtDisc) / (2 * a);
        const r2 = (-b - sqrtDisc) / (2 * a);

        if (isClose(r1, r2)) {
            return [r1];
        }

        return [r1, r2];
    }

    function checkAGP(sequence) {
        for (const ratio of agpCandidates(sequence)) {
            let valid = true;

            for (let i = 2; i < sequence.length; i++) {
                const expected = 2 * ratio * sequence[i - 1] - ratio * ratio * sequence[i - 2];
                if (!isClose(sequence[i], expected, 1e-7)) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                return { ok: true, ratio };
            }
        }

        return { ok: false };
    }

    function recognize() {
        const parsed = parseSequence(input.value);
        if (parsed.error) {
            output.textContent = `❌ ${parsed.error}`;
            return;
        }

        const sequence = parsed.sequence;
        const matches = [];

        const ap = checkAP(sequence);
        if (ap.ok) {
            matches.push(`- AP (d = ${formatNumber(ap.diff)})`);
        }

        const gp = checkGP(sequence);
        if (gp.ok) {
            matches.push(`- GP (r = ${formatNumber(gp.ratio)})`);
        }

        const agp = checkAGP(sequence);
        if (agp.ok) {
            matches.push(`- AGP (r = ${formatNumber(agp.ratio)})`);
        }

        const hp = checkHP(sequence);
        if (hp.ok) {
            matches.push(`- HP (reciprocal AP d = ${formatNumber(hp.reciprocalDiff)})`);
        }

        const header = `Sequence: ${sequence.map(formatNumber).join(', ')}`;
        if (matches.length === 0) {
            output.textContent = `${header}\n\n❌ Not AP, GP, AGP, or HP for these terms.`;
            return;
        }

        output.textContent = `${header}\n\n✅ Recognized as:\n${matches.join('\n')}`;
    }

    button.addEventListener('click', recognize);
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            recognize();
        }
    });
}

function getCoordinatePolarTransformHTML() {
    return `
        <div class="project-content">
            <h2>🧭 Coordinate to Polar Transformation</h2>
            <div class="coord-polar-container">
                <p class="coord-polar-help">Enter Cartesian coordinates (x, y) to get polar form (r, theta).</p>

                <div class="coord-grid">
                    <div class="control-group">
                        <label for="cartesianX">X Coordinate</label>
                        <input id="cartesianX" type="number" step="any" value="3">
                    </div>
                    <div class="control-group">
                        <label for="cartesianY">Y Coordinate</label>
                        <input id="cartesianY" type="number" step="any" value="4">
                    </div>
                </div>

                <div class="coord-actions">
                    <button class="btn-primary" id="convertCoordinateBtn">Convert</button>
                </div>

                <div class="coord-stats">
                    <div class="stat-chip">📏 r: <span id="polarRadius">0</span></div>
                    <div class="stat-chip">📐 theta (deg): <span id="polarThetaDeg">0</span></div>
                    <div class="stat-chip">🔁 theta (rad): <span id="polarThetaRad">0</span></div>
                </div>

                <canvas id="coordPolarCanvas" width="760" height="360"></canvas>
                <p class="coord-result" id="coordPolarResult">Click convert to visualize the point and its polar angle.</p>
            </div>
        </div>

        <style>
            .coord-polar-container {
                text-align: center;
                padding: 1.5rem;
                max-width: 780px;
                margin: 0 auto;
            }

            .coord-polar-help {
                color: var(--text-secondary);
                margin-bottom: 1rem;
            }

            .coord-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
                gap: 1rem;
                margin-bottom: 1rem;
            }

            .coord-actions {
                margin-bottom: 1rem;
            }

            .coord-stats {
                display: flex;
                gap: 0.8rem;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 1rem;
            }

            #coordPolarCanvas {
                width: 100%;
                max-width: 760px;
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 14px;
                box-shadow: var(--shadow);
            }

            .coord-result {
                margin-top: 0.9rem;
                font-size: 1.05rem;
                font-weight: 700;
                color: var(--primary-color);
                min-height: 1.3rem;
            }
        </style>
    `;
}

function initCoordinatePolarTransform() {
    const xInput = document.getElementById('cartesianX');
    const yInput = document.getElementById('cartesianY');
    const convertBtn = document.getElementById('convertCoordinateBtn');

    const radiusEl = document.getElementById('polarRadius');
    const thetaDegEl = document.getElementById('polarThetaDeg');
    const thetaRadEl = document.getElementById('polarThetaRad');
    const resultEl = document.getElementById('coordPolarResult');

    const canvas = document.getElementById('coordPolarCanvas');
    const ctx = canvas.getContext('2d');

    function formatNumber(value) {
        if (Math.abs(value - Math.round(value)) < 1e-9) {
            return String(Math.round(value));
        }
        return Number(value.toFixed(6)).toString();
    }

    function quadrantOf(x, y) {
        if (x === 0 && y === 0) return 'Origin';
        if (x > 0 && y > 0) return 'Quadrant I';
        if (x < 0 && y > 0) return 'Quadrant II';
        if (x < 0 && y < 0) return 'Quadrant III';
        if (x > 0 && y < 0) return 'Quadrant IV';
        if (x === 0) return 'Y-axis';
        return 'X-axis';
    }

    function drawCoordinatePlane(x, y, radius, thetaRad) {
        const width = canvas.width;
        const height = canvas.height;
        const cx = width / 2;
        const cy = height / 2;

        const maxAbs = Math.max(5, Math.abs(x), Math.abs(y));
        const scale = (Math.min(width, height) / 2 - 35) / maxAbs;

        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = '#0f172a10';
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        ctx.moveTo(20, cy);
        ctx.lineTo(width - 20, cy);
        ctx.moveTo(cx, 20);
        ctx.lineTo(cx, height - 20);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '12px Arial';
        ctx.fillText('x', width - 28, cy - 8);
        ctx.fillText('y', cx + 10, 30);

        const px = cx + x * scale;
        const py = cy - y * scale;

        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(px, py);
        ctx.stroke();

        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(26, radius * scale * 0.25), 0, -thetaRad, thetaRad < 0);
        ctx.stroke();

        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ef4444';
        ctx.fillText(`(${formatNumber(x)}, ${formatNumber(y)})`, px + 8, py - 8);
    }

    function convert() {
        const x = Number(xInput.value);
        const y = Number(yInput.value);

        if (!Number.isFinite(x) || !Number.isFinite(y)) {
            resultEl.textContent = '❌ Please enter valid numeric coordinates.';
            return;
        }

        const radius = Math.hypot(x, y);
        const thetaRad = Math.atan2(y, x);
        let thetaDeg = (thetaRad * 180) / Math.PI;
        if (thetaDeg < 0) {
            thetaDeg += 360;
        }

        radiusEl.textContent = formatNumber(radius);
        thetaDegEl.textContent = formatNumber(thetaDeg);
        thetaRadEl.textContent = formatNumber(thetaRad);

        drawCoordinatePlane(x, y, radius, thetaRad);
        resultEl.textContent = `✅ ${quadrantOf(x, y)} | Polar: r = ${formatNumber(radius)}, theta = ${formatNumber(thetaDeg)} degrees`;
    }

    convertBtn.addEventListener('click', convert);
    [xInput, yInput].forEach((input) => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                convert();
            }
        });
    });

    convert();
}

function getDerivativeCalculatorHTML() {
    return `
        <div class="project-content">
            <h2>∂ Polynomial Derivative Calculator</h2>
            <div class="derivative-container">
                <p class="derivative-help">Enter coefficients from highest power to constant. Example: <strong>3,0,-2,7</strong> for 3x^3 - 2x + 7.</p>

                <div class="control-group">
                    <label for="derivativeCoeffs">Coefficients</label>
                    <input id="derivativeCoeffs" type="text" placeholder="e.g. 3,0,-2,7">
                </div>

                <div class="derivative-grid">
                    <div class="control-group">
                        <label for="derivativeOrder">Derivative Order (n)</label>
                        <input id="derivativeOrder" type="number" min="1" value="1">
                    </div>
                    <div class="control-group">
                        <label for="derivativeX">Evaluate At x</label>
                        <input id="derivativeX" type="number" step="any" value="1">
                    </div>
                </div>

                <div class="derivative-actions">
                    <button class="btn-primary" id="calcFirstDerivativeBtn">1st Derivative</button>
                    <button class="btn-primary" id="calcNthDerivativeBtn">Nth Derivative</button>
                    <button class="btn-primary" id="evalDerivativeBtn">Evaluate</button>
                </div>

                <div class="derivative-output" id="derivativeOutput">Waiting for input...</div>
            </div>
        </div>

        <style>
            .derivative-container {
                text-align: center;
                padding: 1.5rem;
                max-width: 800px;
                margin: 0 auto;
            }

            .derivative-help {
                color: var(--text-secondary);
                margin-bottom: 1rem;
                line-height: 1.6;
            }

            .derivative-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
            }

            .derivative-actions {
                display: flex;
                gap: 0.8rem;
                justify-content: center;
                margin: 1rem 0;
                flex-wrap: wrap;
            }

            .derivative-output {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 1.5rem;
                margin-top: 1.5rem;
                font-family: monospace;
                white-space: pre-wrap;
                word-wrap: break-word;
            }
        </style>
    `;
}

function initDerivativeCalculator() {
    const coeffInput = document.getElementById('derivativeCoeffs');
    const orderInput = document.getElementById('derivativeOrder');
    const xInput = document.getElementById('derivativeX');

    const firstBtn = document.getElementById('calcFirstDerivativeBtn');
    const nthBtn = document.getElementById('calcNthDerivativeBtn');
    const evalBtn = document.getElementById('evalDerivativeBtn');

    const output = document.getElementById('derivativeOutput');

    function formatNumber(value) {
        if (Math.abs(value - Math.round(value)) < 1e-9) {
            return String(Math.round(value));
        }
        return Number(value.toFixed(6)).toString();
    }

    function parseCoefficients(raw) {
        const parts = raw
            .split(',')
            .map((item) => item.trim())
            .filter((item) => item.length > 0);

        if (parts.length === 0) {
            return { error: 'Please enter at least one coefficient.' };
        }

        const coeffs = [];
        for (const part of parts) {
            const value = Number(part);
            if (!Number.isFinite(value)) {
                return { error: `Invalid coefficient: ${part}` };
            }
            coeffs.push(value);
        }

        while (coeffs.length > 1 && Math.abs(coeffs[0]) < 1e-12) {
            coeffs.shift();
        }

        return { coeffs };
    }

    function derivativeCoeffs(coeffs) {
        const degree = coeffs.length - 1;
        if (degree <= 0) {
            return [0];
        }

        const out = [];
        for (let i = 0; i < coeffs.length - 1; i++) {
            const power = degree - i;
            out.push(coeffs[i] * power);
        }
        return out;
    }

    function nthDerivativeCoeffs(coeffs, n) {
        let result = coeffs.slice();
        for (let i = 0; i < n; i++) {
            result = derivativeCoeffs(result);
            if (result.length === 1 && Math.abs(result[0]) < 1e-12) {
                return [0];
            }
        }
        return result;
    }

    function evaluate(coeffs, x) {
        let value = 0;
        for (const coeff of coeffs) {
            value = value * x + coeff;
        }
        return value;
    }

    function polynomialToString(coeffs) {
        const degree = coeffs.length - 1;
        const terms = [];

        for (let i = 0; i < coeffs.length; i++) {
            const coeff = coeffs[i];
            const power = degree - i;
            if (Math.abs(coeff) < 1e-12) {
                continue;
            }

            const sign = coeff >= 0 ? '+' : '-';
            const absCoeff = Math.abs(coeff);
            let body = '';

            if (power === 0) {
                body = formatNumber(absCoeff);
            } else if (power === 1) {
                body = Math.abs(absCoeff - 1) < 1e-12 ? 'x' : `${formatNumber(absCoeff)}x`;
            } else {
                body = Math.abs(absCoeff - 1) < 1e-12 ? `x^${power}` : `${formatNumber(absCoeff)}x^${power}`;
            }

            terms.push({ sign, body });
        }

        if (terms.length === 0) {
            return '0';
        }

        let expression = terms[0].sign === '+' ? terms[0].body : `-${terms[0].body}`;
        for (let i = 1; i < terms.length; i++) {
            expression += ` ${terms[i].sign} ${terms[i].body}`;
        }
        return expression;
    }

    function getInputs() {
        const parsed = parseCoefficients(coeffInput.value);
        if (parsed.error) {
            output.textContent = `❌ ${parsed.error}`;
            return null;
        }

        const order = Math.max(1, parseInt(orderInput.value, 10) || 1);
        const x = Number(xInput.value);

        if (!Number.isFinite(x)) {
            output.textContent = '❌ Please enter a valid x value.';
            return null;
        }

        return { coeffs: parsed.coeffs, order, x };
    }

    firstBtn.addEventListener('click', () => {
        const data = getInputs();
        if (!data) return;

        const first = derivativeCoeffs(data.coeffs);
        output.textContent = `f(x) = ${polynomialToString(data.coeffs)}\n\nf'(x) = ${polynomialToString(first)}`;
    });

    nthBtn.addEventListener('click', () => {
        const data = getInputs();
        if (!data) return;

        const nth = nthDerivativeCoeffs(data.coeffs, data.order);
        output.textContent = `f(x) = ${polynomialToString(data.coeffs)}\n\n${data.order}th derivative = ${polynomialToString(nth)}`;
    });

    evalBtn.addEventListener('click', () => {
        const data = getInputs();
        if (!data) return;

        const nth = nthDerivativeCoeffs(data.coeffs, data.order);
        const value = evaluate(nth, data.x);
        output.textContent = `f(x) = ${polynomialToString(data.coeffs)}\n\nDerivative used: ${polynomialToString(nth)}\nValue at x = ${formatNumber(data.x)} is ${formatNumber(value)}`;
    });
}
// ============================================
// SNAKE GAME
// ============================================
function getsnakeGameHTML() {
    return `
        <div class="project-content">
            <h2>🐍 Classic Snake Game</h2>
            <div class="snake-container">
                <div class="game-area">
                    <div id="canvas-wrapper">
                        <canvas id="snakeCanvas" width="600" height="400"></canvas>
                        
                        <div id="game-over-overlay" class="hidden">
                            <h1>GAME OVER!!</h1>
                            <p>Score: <span id="final-score">0</span></p>
                            <button id="overlayRestartBtn" class="btn-primary">Restart Game</button>
                        </div>
                    </div>

                    <div id="score-board">
                        <div class="score-card">
                            <span>Score</span>
                            <div id="score">0</div>
                        </div>
                    </div>
                </div>

                <div class="button-group">
                    <button id="startGameBtn" class="btn-primary">Start Game</button>
                    <button id="restartSnakeBtn" class="btn-primary">Restart Game</button>
                </div>
                <div class="instruction-box">
                    <p>Use arrow keys to control the snake.</p>
                    <p>Eat the red food to grow. Don't hit the walls or yourself!</p>
                </div>
            </div>
        </div>
        <style>
            .snake-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 20px;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }
            .game-area {
                display: flex;
                align-items: flex-start;
                gap: 20px;
                margin-bottom: 25px;
                width: 100%;
                max-width: 850px;
                justify-content: center;
                flex-wrap: nowrap;
            }
            #canvas-wrapper {
                position: relative;
                border: 4px solid #2ecc71;
                border-radius: 12px;
                overflow: hidden;
                box-shadow: 0 15px 35px rgba(0,0,0,0.3);
            }
            #snakeCanvas {
                background-color: #1b262c;
                background-image: 
                    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
                background-size: 20px 20px;
                display: block;
            }
            #score-board {
                display: flex;
                flex-direction: column;
                gap: 15px;
            }
            .score-card {
                background: linear-gradient(135deg, #2ecc71, #27ae60);
                color: white;
                padding: 10px 25px;
                border-radius: 10px;
                text-align: center;
                min-width: 120px;
                box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
            }
            .score-card span {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
            .score-card div {
                font-size: 28px;
                font-weight: bold;
            }
            .button-group {
                display: flex;
                justify-content: center;
                gap: 30px; /* Space between buttons fixed */
                margin-top: 10px;
                margin-right: 140px; /* Offset to align with canvas center */
            }
            .instruction-box {
                margin-top: 20px;
                margin-right: 140px;
                text-align: center;
                color: #7f8c8d;
                font-size: 15px;
            }
            #game-over-overlay {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(27, 38, 44, 0.9);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                z-index: 10;
                color: #2ecc71;
            }
            #game-over-overlay h1 { font-size: 3rem; margin-bottom: 10px; }
            .hidden { display: none !important; }
            .btn-primary {
                background-color: #2ecc71;
                color: white;
                border: none;
                padding: 12px 25px;
                border-radius: 8px;
                font-weight: bold;
                cursor: pointer;
                transition: 0.3s;
            }
            .btn-primary:hover {
                background-color: #27ae60;
                transform: translateY(-2px);
            }
        </style>
    `;
}

// --- GAME LOGIC ---
let direction = { x: 0, y: 0 };
let speed = 7;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 10 }];
let food = { x: 6, y: 7 };

function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake) {
    // Hits itself
    for (let i = 1; i < snakeArr.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true;
    }
    // Hits walls
    if (snake[0].x >= 30 || snake[0].x < 0 || snake[0].y >= 20 || snake[0].y < 0) return true;

    return false;
}

function gameEngine() {
    if (isCollide(snakeArr)) {
        direction = { x: 0, y: 0 };
        document.getElementById('final-score').innerHTML = score;
        document.getElementById('game-over-overlay').classList.remove('hidden');
        snakeArr = [{ x: 13, y: 10 }];
        score = 0;
        document.getElementById('score').innerHTML = score;
        return;
    }

    // Eating food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        score += 1;
        document.getElementById('score').innerHTML = score;
        snakeArr.unshift({ x: snakeArr[0].x + direction.x, y: snakeArr[0].y + direction.y });
        let a = 2, b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }

    // Moving snake (only if direction is set)
    if (direction.x !== 0 || direction.y !== 0) {
        for (let i = snakeArr.length - 2; i >= 0; i--) {
            snakeArr[i + 1] = { ...snakeArr[i] };
        }
        snakeArr[0].x += direction.x;
        snakeArr[0].y += direction.y;
    }

    const canvas = document.getElementById('snakeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw Snake
    snakeArr.forEach((e, index) => {
        ctx.fillStyle = index === 0 ? "orange" : "#2ecc71";
        ctx.fillRect(e.x * 20, e.y * 20, 18, 18);
    });

    // Draw Food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * 20, food.y * 20, 18, 18);
}

// IMPORTANT: Function to initialize listeners after HTML is loaded
function initSnakeGame() {
    window.requestAnimationFrame(main);

    document.getElementById('startGameBtn').addEventListener('click', () => {
        direction = { x: 1, y: 0 }; // Start moving right
    });

    document.getElementById('restartSnakeBtn').addEventListener('click', () => {
        location.reload();
    });

    document.getElementById('overlayRestartBtn').addEventListener('click', () => {
        document.getElementById('game-over-overlay').classList.add('hidden');
        direction = { x: 0, y: 0 };
        snakeArr = [{ x: 13, y: 10 }];
        score = 0;
        document.getElementById('score').innerHTML = score;
    });

    window.addEventListener('keydown', e => {
        switch (e.key) {
            case "ArrowUp": if (direction.y !== 1) { direction.x = 0; direction.y = -1; } break;
            case "ArrowDown": if (direction.y !== -1) { direction.x = 0; direction.y = 1; } break;
            case "ArrowLeft": if (direction.x !== 1) { direction.x = -1; direction.y = 0; } break;
            case "ArrowRight": if (direction.x !== -1) { direction.x = 1; direction.y = 0; } break;
        }
    });
}

// Call initSnakeGame() after you inject getsnakeGameHTML() into your page.
// ============================================
// PASSWORD FORGE
// ============================================

function getPasswordForgeHTML() {
    return `
        <div class="project-content">
            <h2>🔐 Password Forge</h2>

            <div class="game-container">
                <p class="game-text">
                    Create a password that satisfies all firewall rules!
                </p>

                <input 
                    type="text" 
                    id="passwordInput" 
                    placeholder="Enter password..."
                    class="password-input"
                >

                <button id="checkPasswordBtn" class="btn-check">
                    Check Password
                </button>

                <div id="rulesContainer" class="rules-container">
                    <p>❌ Must contain at least 8 characters</p>
                    <p>❌ Must contain a number</p>
                    <p>❌ Must contain an uppercase letter</p>
                    <p>❌ Must contain a special character</p>
                </div>

                <div id="passwordResult" class="result-message"></div>
            </div>
        </div>

        <style>
            .game-container {
                text-align: center;
                padding: 2rem;
            }

            .password-input {
                width: 80%;
                padding: 1rem;
                border-radius: 10px;
                border: 2px solid var(--border-color);
                margin-top: 1rem;
                font-size: 1rem;
            }

            .btn-check {
                margin-top: 1rem;
                padding: 0.8rem 1.5rem;
                border: none;
                border-radius: 10px;
                background: var(--primary-color);
                color: white;
                cursor: pointer;
                font-size: 1rem;
            }

            .btn-check:hover {
                transform: scale(1.05);
            }

            .rules-container {
                margin-top: 1.5rem;
                text-align: left;
                display: inline-block;
            }

            .result-message {
                margin-top: 1.5rem;
                font-size: 1.2rem;
                font-weight: bold;
            }
        </style>
    `;
}

function initPasswordForge() {
    const checkBtn = document.getElementById('checkPasswordBtn');

    checkBtn.addEventListener('click', () => {
        const password = document.getElementById('passwordInput').value;
        const result = document.getElementById('passwordResult');

        const hasLength = password.length >= 8;
        const hasNumber = /\d/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasSpecial = /[!@#$%^&*]/.test(password);

        if (hasLength && hasNumber && hasUpper && hasSpecial) {
            result.textContent = "✅ Strong Password!";
        } else {
            result.textContent = "❌ Password does not meet all rules!";
        }
    });
}

// ============================================
// SPOT THE DIFFERENCE
// ============================================
function getSpotTheDifferenceHTML() {
    return `
        <div class="project-content">
            <h2>🔍 Spot the Difference</h2>
            <!-- START SCREEN -->
            <div id="stdStartScreen" style="display: flex; flex-direction: column; align-items: center; gap: 2rem; padding: 2rem 0;">
                <h3 style="margin: 0;">Choose Your Difficulty</h3>
                <div class="std-difficulty">
                    <button class="std-btn active" data-diff="easy">Easy (3)</button>
                    <button class="std-btn" data-diff="medium">Medium (5)</button>
                    <button class="std-btn" data-diff="hard">Hard (7)</button>
                </div>
                <button class="std-btn-action" id="stdStartPlayingBtn" style="font-size: 1.2rem; padding: 1rem 3rem; background: var(--primary-color); color: white;">Start Playing</button>
            </div>

            <!-- GAME SCREEN -->
            <div id="stdGameScreen" style="display: none;">
                <div class="std-controls">
                    <div class="std-stats">
                        <div class="std-stat">Time: <span id="stdTimer">00:00</span></div>
                        <div class="std-stat">Found: <span id="stdFound">0</span> / <span id="stdTotal">3</span></div>
                    </div>
                    <div class="std-actions">
                        <button class="std-btn-action" id="stdHintBtn">💡 Hint</button>
                        <button class="std-btn-action" id="stdGiveUpBtn">Show Answers</button>
                    </div>
                </div>
                
                <div class="std-game-area">
                    <div class="std-canvas-container">
                        <h3 class="std-canvas-label">Original 🖼️</h3>
                        <canvas id="stdCanvasLeft" width="400" height="400"></canvas>
                    </div>
                    <div class="std-canvas-container">
                        <h3 class="std-canvas-label">Find Differences 🔍</h3>
                        <canvas id="stdCanvasRight" width="400" height="400"></canvas>
                    </div>
                </div>
            </div>
            
            <div class="std-win-overlay" id="stdWinOverlay" style="display: none;">
                <div class="std-win-content">
                    <h3>🎉 You Found Them All! 🎉</h3>
                    <p>Differences: <span id="stdWinFound">0</span></p>
                    <p>Time: <span id="stdWinTime">00:00</span></p>
                    <div class="std-actions" style="justify-content: center; margin-top: 1rem;">
                        <button class="std-btn-action" id="stdPlayAgainBtn">Play Again</button>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .std-controls {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                margin-bottom: 2rem;
                align-items: center;
            }
            .std-difficulty {
                display: flex;
                gap: 0.5rem;
            }
            .std-btn, .std-btn-action {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                color: var(--text-color);
                padding: 0.5rem 1rem;
                border-radius: 8px;
                cursor: pointer;
                transition: var(--transition);
                font-weight: bold;
            }
            .std-btn.active {
                background: var(--primary-color);
                color: white;
                border-color: var(--primary-color);
            }
            .std-btn:hover, .std-btn-action:hover {
                border-color: var(--primary-color);
            }
            .std-stats {
                display: flex;
                gap: 2rem;
                font-size: 1.2rem;
                font-weight: bold;
            }
            .std-actions {
                display: flex;
                gap: 1rem;
            }
            .std-game-area {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: nowrap;
                position: relative;
                width: 100%;
            }
            .std-canvas-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
                flex: 1;
                min-width: 0;
            }
            .std-canvas-label {
                margin: 0;
                color: var(--text-color);
            }
            canvas {
                border: 4px solid var(--border-color);
                border-radius: 12px;
                cursor: crosshair;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                width: 100%;
                max-width: 400px;
                height: auto;
            }
            #stdCanvasRight {
                cursor: crosshair;
            }
            .std-win-overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 12px;
                z-index: 10;
            }
            .std-win-content {
                background: var(--surface-color);
                padding: 2rem;
                border-radius: 15px;
                text-align: center;
                box-shadow: 0 10px 25px rgba(0,0,0,0.5);
            }
            .std-win-content h3 {
                color: var(--primary-color);
                margin-top: 0;
            }
            @media (max-width: 768px) {
                .std-game-area {
                    flex-direction: column;
                    align-items: center;
                }
            }
        </style>
    `;
}

function initSpotTheDifference() {
    const canvasL = document.getElementById('stdCanvasLeft');
    const canvasR = document.getElementById('stdCanvasRight');
    if (!canvasL || !canvasR) return;
    const ctxL = canvasL.getContext('2d');
    const ctxR = canvasR.getContext('2d');
    
    const diffBtns = document.querySelectorAll('.std-btn');
    const hintBtn = document.getElementById('stdHintBtn');
    const giveUpBtn = document.getElementById('stdGiveUpBtn');
    const playAgainBtn = document.getElementById('stdPlayAgainBtn');
    const timerEl = document.getElementById('stdTimer');
    const foundEl = document.getElementById('stdFound');
    const totalEl = document.getElementById('stdTotal');
    const winOverlay = document.getElementById('stdWinOverlay');
    const winFoundEl = document.getElementById('stdWinFound');
    const winTimeEl = document.getElementById('stdWinTime');
    
    let difficulty = 'easy';
    let differences = [];
    let foundDifferences = new Set();
    let timer = null;
    let seconds = 0;
    let isGameOver = false;
    let activeHint = null;
    let clickAnimations = [];
    let animationFrameId = null;
    
    // EASY: House Scene
    const EASY_CONFIG = {
        sun: { x: 50, y: 50, radius: 30, color: '#FFD700', diffColor: '#FFA500', diffRadius: 40 },
        cloud1: { x: 150, y: 60 },
        cloud2: { x: 300, y: 40 },
        house: { x: 100, y: 200, width: 140, height: 120, color: '#f4f4f4', diffColor: '#e0e0e0' },
        roof: { color: '#cd5c5c', diffColor: '#4169e1' },
        door: { x: 150, y: 260, w: 40, h: 60, color: '#8b4513', diffColor: '#654321' },
        window: { x: 110, y: 230, w: 30, h: 30, color: '#87cefa', diffColor: '#4682b4' },
        tree1: { x: 300, y: 150, trunkW: 20, trunkH: 60, leavesR: 40 },
        tree2: { x: 350, y: 180, trunkW: 15, trunkH: 40, leavesR: 30 },
        fence: { color: '#deb887', diffColor: '#d2b48c' },
        bird: { x: 200, y: 100 },
        flower: { x: 50, y: 340, color: '#ff69b4', diffColor: '#ff1493' }
    };
    
    const EASY_DIFFERENCES = [
        { id: 'roofColor', x: 170, y: 170, r: 50 },
        { id: 'cloud1Removed', x: 150, y: 60, r: 40 },
        { id: 'doorColor', x: 170, y: 290, r: 35 },
        { id: 'flowerRemoved', x: 50, y: 340, r: 30 },
        { id: 'sunSize', x: 50, y: 50, r: 40 },
        { id: 'birdRemoved', x: 200, y: 100, r: 30 }
    ];

    // MEDIUM: City Scene
    const MEDIUM_DIFFERENCES = [
        { id: 'carColor', x: 200, y: 320, r: 40 },
        { id: 'trafficLight', x: 80, y: 200, r: 30 },
        { id: 'missingWindow', x: 60, y: 180, r: 25 },
        { id: 'extraCloud', x: 320, y: 70, r: 30 },
        { id: 'antennaRemoved', x: 310, y: 50, r: 25 },
        { id: 'moonSize', x: 60, y: 50, r: 30 },
        { id: 'buildingColor', x: 300, y: 200, r: 60 }
    ];

    // HARD: Space Scene
    const HARD_DIFFERENCES = [
        { id: 'planetColor', x: 300, y: 100, r: 50 },
        { id: 'spaceshipWindow', x: 200, y: 180, r: 25 },
        { id: 'missingStar', x: 80, y: 80, r: 20 },
        { id: 'craterSize', x: 100, y: 350, r: 30 },
        { id: 'satelliteRemoved', x: 350, y: 240, r: 30 },
        { id: 'flameSize', x: 200, y: 280, r: 35 },
        { id: 'extraAsteroid', x: 150, y: 50, r: 25 },
        { id: 'craterMoved', x: 250, y: 330, r: 30 }
    ];
    
    function startGame(diff) {
        difficulty = diff;
        const diffCounts = { easy: 3, medium: 5, hard: 7 };
        const numDiffs = diffCounts[difficulty];
        
        let available = [];
        if (difficulty === 'easy') available = [...EASY_DIFFERENCES];
        else if (difficulty === 'medium') available = [...MEDIUM_DIFFERENCES];
        else available = [...HARD_DIFFERENCES];
        
        available.sort(() => Math.random() - 0.5);
        differences = available.slice(0, numDiffs);
        
        foundDifferences.clear();
        isGameOver = false;
        clickAnimations = [];
        activeHint = null;
        winOverlay.style.display = 'none';
        
        foundEl.textContent = '0';
        totalEl.textContent = numDiffs;
        
        resetTimer();
        startTimer();
        
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        drawGame();
    }
    
    function resetTimer() {
        if (timer) clearInterval(timer);
        seconds = 0;
        updateTimerDisplay();
    }
    
    function startTimer() {
        timer = setInterval(() => {
            seconds++;
            updateTimerDisplay();
        }, 1000);
    }
    
    function updateTimerDisplay() {
        const m = Math.floor(seconds / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        timerEl.textContent = `${m}:${s}`;
    }
    
    function hasDiff(id) {
        return differences.some(d => d.id === id);
    }
    
    function isFound(id) {
        return foundDifferences.has(id);
    }
    
    function drawGame() {
        ctxL.clearRect(0, 0, canvasL.width, canvasL.height);
        ctxR.clearRect(0, 0, canvasR.width, canvasR.height);
        
        drawScene(ctxL, false);
        drawScene(ctxR, true);
        
        drawOverlays(ctxL, false);
        drawOverlays(ctxR, true);
        
        if (!isGameOver || clickAnimations.length > 0) {
            animationFrameId = requestAnimationFrame(drawGame);
        } else {
            drawOverlays(ctxL, false);
            drawOverlays(ctxR, true);
        }
    }
    
    function drawScene(ctx, isRight) {
        if (difficulty === 'easy') {
            drawEasyScene(ctx, isRight);
        } else if (difficulty === 'medium') {
            drawMediumScene(ctx, isRight);
        } else {
            drawHardScene(ctx, isRight);
        }
    }

    function drawEasyScene(ctx, isRight) {
        // Background Sky
        ctx.fillStyle = '#87CEEB';
        ctx.fillRect(0, 0, 400, 400);

        // Ground
        ctx.fillStyle = '#90EE90';
        ctx.fillRect(0, 320, 400, 80);
        
        // Sun
        let sun = EASY_CONFIG.sun;
        let sR = (isRight && hasDiff('sunSize')) ? sun.diffRadius : sun.radius;
        ctx.fillStyle = sun.color;
        ctx.beginPath();
        ctx.arc(sun.x, sun.y, sR, 0, Math.PI * 2);
        ctx.fill();
        
        // Clouds
        ctx.fillStyle = '#ffffff';
        if (!(isRight && hasDiff('cloud1Removed'))) {
            drawCloud(ctx, EASY_CONFIG.cloud1.x, EASY_CONFIG.cloud1.y);
        }
        drawCloud(ctx, EASY_CONFIG.cloud2.x, EASY_CONFIG.cloud2.y);
        
        // Bird
        if (!(isRight && hasDiff('birdRemoved'))) {
            drawBird(ctx, EASY_CONFIG.bird.x, EASY_CONFIG.bird.y);
        }
        
        // Fence
        let fColor = (isRight && hasDiff('fenceColor')) ? EASY_CONFIG.fence.diffColor : EASY_CONFIG.fence.color;
        ctx.fillStyle = fColor;
        for (let i = 0; i < 400; i += 20) {
            ctx.fillRect(i, 300, 10, 40);
        }
        ctx.fillRect(0, 310, 400, 5);
        ctx.fillRect(0, 325, 400, 5);
        
        // House Base
        let h = EASY_CONFIG.house;
        let hColor = (isRight && hasDiff('subtleHouseColor')) ? h.diffColor : h.color;
        ctx.fillStyle = hColor;
        ctx.fillRect(h.x, h.y, h.width, h.height);
        
        // Roof
        let rColor = (isRight && hasDiff('roofColor')) ? EASY_CONFIG.roof.diffColor : EASY_CONFIG.roof.color;
        ctx.fillStyle = rColor;
        ctx.beginPath();
        ctx.moveTo(h.x - 10, h.y);
        ctx.lineTo(h.x + h.width / 2, h.y - 60);
        ctx.lineTo(h.x + h.width + 10, h.y);
        ctx.closePath();
        ctx.fill();
        
        // Door
        let d = EASY_CONFIG.door;
        let dColor = (isRight && hasDiff('doorColor')) ? d.diffColor : d.color;
        ctx.fillStyle = dColor;
        ctx.fillRect(d.x, d.y, d.w, d.h);
        ctx.fillStyle = '#ffd700'; // knob
        ctx.beginPath();
        ctx.arc(d.x + 30, d.y + 30, 3, 0, Math.PI * 2);
        ctx.fill();
        
        // Window 1
        let w = EASY_CONFIG.window;
        drawWindow(ctx, w.x, w.y, w.w, w.h, w.color);
        
        // Window 2 (Added)
        if (isRight && hasDiff('extraWindow')) {
            drawWindow(ctx, w.x + 75, w.y, w.w, w.h, w.color);
        }
        
        // Trees
        let t1 = EASY_CONFIG.tree1;
        let t1x = (isRight && hasDiff('tree1Moved')) ? t1.x - 20 : t1.x;
        drawTree(ctx, t1x, t1.y, t1.trunkW, t1.trunkH, t1.leavesR);
        
        let t2 = EASY_CONFIG.tree2;
        drawTree(ctx, t2.x, t2.y, t2.trunkW, t2.trunkH, t2.leavesR);
        
        // Flower
        if (!(isRight && hasDiff('flowerRemoved'))) {
            drawFlower(ctx, EASY_CONFIG.flower.x, EASY_CONFIG.flower.y, EASY_CONFIG.flower.color);
        }
    }

    function drawMediumScene(ctx, isRight) {
        // Background Sky
        ctx.fillStyle = '#4682B4'; // Steel Blue
        ctx.fillRect(0, 0, 400, 400);

        // Ground (Road)
        ctx.fillStyle = '#696969'; // Dim Gray
        ctx.fillRect(0, 250, 400, 150);
        
        // Road Lines
        ctx.fillStyle = '#FFD700';
        for (let i = 10; i < 400; i += 60) {
            ctx.fillRect(i, 315, 40, 10);
        }

        // Moon
        let mR = (isRight && hasDiff('moonSize')) ? 40 : 25;
        ctx.fillStyle = '#F0F8FF';
        ctx.beginPath();
        ctx.arc(60, 50, mR, 0, Math.PI * 2);
        ctx.fill();

        // Clouds
        ctx.fillStyle = '#ffffff';
        drawCloud(ctx, 150, 40);
        if (isRight && hasDiff('extraCloud')) {
            drawCloud(ctx, 320, 70);
        }

        // Buildings
        ctx.fillStyle = '#A9A9A9';
        ctx.fillRect(20, 100, 100, 150);
        
        let bColor = (isRight && hasDiff('buildingColor')) ? '#808080' : '#778899';
        ctx.fillStyle = bColor;
        ctx.fillRect(250, 80, 120, 170);

        // Building Windows
        ctx.fillStyle = '#FFD700'; // Lights on
        ctx.fillRect(40, 120, 20, 30);
        ctx.fillRect(80, 120, 20, 30);
        if (!(isRight && hasDiff('missingWindow'))) {
            ctx.fillRect(40, 170, 20, 30);
        }
        ctx.fillRect(80, 170, 20, 30);

        ctx.fillRect(270, 100, 25, 25);
        ctx.fillRect(320, 100, 25, 25);
        ctx.fillRect(270, 150, 25, 25);
        ctx.fillRect(320, 150, 25, 25);
        ctx.fillRect(270, 200, 25, 25);
        ctx.fillRect(320, 200, 25, 25);

        // Antenna
        if (!(isRight && hasDiff('antennaRemoved'))) {
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(310, 80);
            ctx.lineTo(310, 30);
            ctx.moveTo(310, 45);
            ctx.lineTo(290, 25);
            ctx.moveTo(310, 45);
            ctx.lineTo(330, 25);
            ctx.stroke();
        }

        // Traffic Light
        ctx.fillStyle = '#333';
        ctx.fillRect(70, 180, 20, 50);
        ctx.fillRect(78, 230, 4, 20); // pole
        let tlColor = (isRight && hasDiff('trafficLight')) ? '#00FF00' : '#FF0000';
        ctx.fillStyle = tlColor;
        ctx.beginPath();
        ctx.arc(80, 195, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = tlColor === '#00FF00' ? '#FF0000' : '#00FF00';
        ctx.beginPath();
        ctx.arc(80, 215, 6, 0, Math.PI * 2);
        ctx.fill();

        // Car
        let cColor = (isRight && hasDiff('carColor')) ? '#FF4500' : '#1E90FF';
        ctx.fillStyle = cColor;
        ctx.fillRect(150, 290, 100, 40); // Body
        ctx.fillRect(170, 260, 60, 30);  // Roof
        
        ctx.fillStyle = '#ADD8E6'; // Car Windows
        ctx.fillRect(175, 265, 20, 25);
        ctx.fillRect(205, 265, 20, 25);

        ctx.fillStyle = '#000'; // Wheels
        ctx.beginPath();
        ctx.arc(170, 330, 15, 0, Math.PI * 2);
        ctx.arc(230, 330, 15, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = '#FFF'; // Hubcaps
        ctx.beginPath();
        ctx.arc(170, 330, 5, 0, Math.PI * 2);
        ctx.arc(230, 330, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawHardScene(ctx, isRight) {
        // Background Space
        ctx.fillStyle = '#0B0B1A';
        ctx.fillRect(0, 0, 400, 400);

        // Stars
        ctx.fillStyle = '#FFF';
        const stars = [
            [20, 30], [100, 50], [250, 20], [350, 80],
            [40, 150], [120, 120], [300, 180], [380, 200]
        ];
        stars.forEach(s => {
            ctx.beginPath();
            ctx.arc(s[0], s[1], 2, 0, Math.PI * 2);
            ctx.fill();
        });

        // Missing Star
        if (!(isRight && hasDiff('missingStar'))) {
            ctx.beginPath();
            ctx.arc(80, 80, 3, 0, Math.PI * 2);
            ctx.fill();
        }

        // Background Planet
        let pColor = (isRight && hasDiff('planetColor')) ? '#8A2BE2' : '#DC143C';
        ctx.fillStyle = pColor;
        ctx.beginPath();
        ctx.arc(300, 100, 40, 0, Math.PI * 2);
        ctx.fill();
        
        // Planet Rings
        ctx.strokeStyle = '#DAA520';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.ellipse(300, 100, 60, 15, Math.PI / 6, 0, Math.PI * 2);
        ctx.stroke();

        // Moon Surface (Ground)
        ctx.fillStyle = '#696969';
        ctx.beginPath();
        ctx.arc(200, 550, 250, 0, Math.PI * 2);
        ctx.fill();

        // Craters
        ctx.fillStyle = '#555555';
        let cSize = (isRight && hasDiff('craterSize')) ? 25 : 15;
        ctx.beginPath();
        ctx.ellipse(100, 350, cSize, cSize/2, 0, 0, Math.PI * 2);
        ctx.fill();
        
        let cX = (isRight && hasDiff('craterMoved')) ? 220 : 250;
        ctx.beginPath();
        ctx.ellipse(cX, 330, 20, 10, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(320, 370, 18, 9, 0, 0, Math.PI * 2);
        ctx.fill();

        // Asteroids
        ctx.fillStyle = '#808080';
        ctx.beginPath();
        ctx.arc(50, 250, 12, 0, Math.PI * 2);
        ctx.fill();

        if (isRight && hasDiff('extraAsteroid')) {
            ctx.beginPath();
            ctx.arc(150, 50, 15, 0, Math.PI * 2);
            ctx.fill();
        }

        // Spaceship
        ctx.fillStyle = '#D3D3D3';
        ctx.beginPath();
        ctx.ellipse(200, 200, 20, 60, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Spaceship Window
        let swColor = (isRight && hasDiff('spaceshipWindow')) ? '#32CD32' : '#00BFFF';
        ctx.fillStyle = swColor;
        ctx.beginPath();
        ctx.arc(200, 180, 10, 0, Math.PI * 2);
        ctx.fill();

        // Fins
        ctx.fillStyle = '#FF4500';
        ctx.beginPath();
        ctx.moveTo(180, 230);
        ctx.lineTo(160, 260);
        ctx.lineTo(185, 250);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(220, 230);
        ctx.lineTo(240, 260);
        ctx.lineTo(215, 250);
        ctx.fill();

        // Flame
        let fSize = (isRight && hasDiff('flameSize')) ? 50 : 30;
        ctx.fillStyle = '#FFA500';
        ctx.beginPath();
        ctx.moveTo(190, 260);
        ctx.lineTo(200, 260 + fSize);
        ctx.lineTo(210, 260);
        ctx.fill();

        // Satellite
        if (!(isRight && hasDiff('satelliteRemoved'))) {
            ctx.fillStyle = '#A9A9A9';
            ctx.fillRect(340, 240, 20, 10);
            ctx.fillStyle = '#4169E1';
            ctx.fillRect(320, 235, 15, 20); // solar panel left
            ctx.fillRect(365, 235, 15, 20); // solar panel right
            ctx.strokeStyle = '#FFF';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(350, 240);
            ctx.lineTo(350, 220);
            ctx.arc(350, 220, 5, 0, Math.PI);
            ctx.stroke();
        }
    }
    
    function drawCloud(ctx, x, y) {
        ctx.beginPath();
        ctx.arc(x, y, 20, 0, Math.PI * 2);
        ctx.arc(x + 20, y - 10, 25, 0, Math.PI * 2);
        ctx.arc(x + 40, y, 20, 0, Math.PI * 2);
        ctx.fill();
    }
    
    function drawBird(ctx, x, y) {
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.quadraticCurveTo(x + 10, y - 10, x + 20, y);
        ctx.quadraticCurveTo(x + 30, y - 10, x + 40, y);
        ctx.stroke();
    }
    
    function drawWindow(ctx, x, y, w, h, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, w, h);
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x + w / 2, y);
        ctx.lineTo(x + w / 2, y + h);
        ctx.moveTo(x, y + h / 2);
        ctx.lineTo(x + w, y + h / 2);
        ctx.stroke();
    }
    
    function drawTree(ctx, x, y, tw, th, lr) {
        ctx.fillStyle = '#8b4513';
        ctx.fillRect(x - tw / 2, y, tw, th);
        ctx.fillStyle = '#228b22';
        ctx.beginPath();
        ctx.arc(x, y - 10, lr, 0, Math.PI * 2);
        ctx.fill();
    }
    
    function drawFlower(ctx, x, y, color) {
        ctx.fillStyle = '#228b22';
        ctx.fillRect(x - 2, y, 4, 20); // stem
        ctx.fillStyle = color;
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(x + Math.cos(i * Math.PI * 0.4) * 8, y - 5 + Math.sin(i * Math.PI * 0.4) * 8, 6, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(x, y - 5, 5, 0, Math.PI * 2);
        ctx.fill();
    }
    
    function drawOverlays(ctx, isRight) {
        differences.forEach(diff => {
            if (isFound(diff.id)) {
                ctx.strokeStyle = '#00ff00';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(diff.x, diff.y, diff.r, 0, Math.PI * 2);
                ctx.stroke();
            }
            
            if (!isFound(diff.id) && (activeHint === diff.id || isGameOver)) {
                ctx.strokeStyle = isGameOver ? '#ffff00' : `rgba(255, 255, 0, ${0.5 + 0.5 * Math.sin(Date.now() / 150)})`;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(diff.x, diff.y, diff.r, 0, Math.PI * 2);
                ctx.stroke();
            }
        });
        
        for (let i = clickAnimations.length - 1; i >= 0; i--) {
            let anim = clickAnimations[i];
            if (anim.isRight !== isRight) continue;
            
            let age = Date.now() - anim.time;
            if (age > 500) {
                clickAnimations.splice(i, 1);
                continue;
            }
            
            let alpha = 1 - age / 500;
            let radius = 10 + (age / 500) * 20;
            
            ctx.strokeStyle = anim.success ? `rgba(0, 255, 0, ${alpha})` : `rgba(255, 0, 0, ${alpha})`;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(anim.x, anim.y, radius, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    
    canvasR.addEventListener('click', (e) => {
        if (isGameOver) return;
        
        const rect = canvasR.getBoundingClientRect();
        const scaleX = canvasR.width / rect.width;
        const scaleY = canvasR.height / rect.height;
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        
        let hit = false;
        
        for (let diff of differences) {
            if (!isFound(diff.id)) {
                let dx = x - diff.x;
                let dy = y - diff.y;
                if (Math.sqrt(dx * dx + dy * dy) <= diff.r) {
                    foundDifferences.add(diff.id);
                    hit = true;
                    foundEl.textContent = foundDifferences.size;
                    
                    clickAnimations.push({ x: diff.x, y: diff.y, success: true, time: Date.now(), isRight: true });
                    clickAnimations.push({ x: diff.x, y: diff.y, success: true, time: Date.now(), isRight: false });
                    
                    if (activeHint === diff.id) activeHint = null;
                    
                    if (foundDifferences.size === differences.length) {
                        endGame(true);
                    }
                    break;
                }
            }
        }
        
        if (!hit) {
            clickAnimations.push({ x, y, success: false, time: Date.now(), isRight: true });
            if (animationFrameId === null) drawGame();
        }
    });
    
    function endGame(win) {
        isGameOver = true;
        clearInterval(timer);
        if (win) {
            setTimeout(() => {
                winOverlay.style.display = 'flex';
                winFoundEl.textContent = foundDifferences.size;
                winTimeEl.textContent = timerEl.textContent;
            }, 500);
        }
        drawGame(); 
    }
    
    const startScreen = document.getElementById('stdStartScreen');
    const gameScreen = document.getElementById('stdGameScreen');
    const startPlayingBtn = document.getElementById('stdStartPlayingBtn');

    diffBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            diffBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            difficulty = btn.getAttribute('data-diff');
        });
    });
    
    startPlayingBtn.addEventListener('click', () => {
        startScreen.style.display = 'none';
        gameScreen.style.display = 'block';
        startGame(difficulty);
    });
    
    hintBtn.addEventListener('click', () => {
        if (isGameOver || activeHint) return;
        
        let unfound = differences.filter(d => !isFound(d.id));
        if (unfound.length > 0) {
            let r = unfound[Math.floor(Math.random() * unfound.length)];
            activeHint = r.id;
            setTimeout(() => {
                if (activeHint === r.id) activeHint = null;
            }, 1500);
        }
    });
    
    giveUpBtn.addEventListener('click', () => {
        if (isGameOver) return;
        endGame(false);
    });
    
    playAgainBtn.addEventListener('click', () => {
        winOverlay.style.display = 'none';
        startScreen.style.display = 'flex';
        gameScreen.style.display = 'none';
    });
}
