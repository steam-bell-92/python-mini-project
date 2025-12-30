// Project HTML Templates and Logic

function getProjectHTML(projectName) {
    const projects = {
        'rock-paper-scissor': getRockPaperScissorHTML(),
        'dice-rolling': getDiceRollingHTML(),
        'coin-flip': getCoinFlipHTML(),
        'number-guessing': getNumberGuessingHTML(),
        'hangman': getHangmanHTML(),
        'flames': getFlamesHTML(),
        'fibonacci': getFibonacciHTML(),
        'pascal-triangle': getPascalTriangleHTML(),
        'armstrong': getArmstrongHTML(),
        'calculator': getCalculatorHTML(),
        'collatz': getCollatzHTML(),
        'prime-analyzer': getPrimeAnalyzerHTML(),
        'turtle-mandala': getTurtleMandalaHTML(),
        'turtle-star': getTurtleStarHTML(),
        'turtle-spiral': getTurtleSpiralHTML(),
        'turtle-rainbow-mandala': getTurtleRainbowMandalaHTML(),
        'morse-code': getMorseCodeHTML(),
        'tower-of-hanoi': getTowerOfHanoiHTML()
    };
    
    return projects[projectName] || '<h2>Project Coming Soon!</h2>';
}

function initializeProject(projectName) {
    const initializers = {
        'rock-paper-scissor': initRockPaperScissor,
        'dice-rolling': initDiceRolling,
        'coin-flip': initCoinFlip,
        'number-guessing': initNumberGuessing,
        'hangman': initHangman,
        'flames': initFlames,
        'fibonacci': initFibonacci,
        'pascal-triangle': initPascalTriangle,
        'armstrong': initArmstrong,
        'calculator': initCalculator,
        'collatz': initCollatz,
        'prime-analyzer': initPrimeAnalyzer,
        'turtle-mandala': () => initTurtleGraphics('mandala'),
        'turtle-star': () => initTurtleGraphics('star'),
        'turtle-spiral': () => initTurtleGraphics('spiral'),
        'turtle-rainbow-mandala': () => initTurtleGraphics('rainbow-mandala'),
        'morse-code': initMorseCode,
        'tower-of-hanoi': initTowerOfHanoi
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
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'You win! 🎉';
            playerScore++;
        } else {
            result = 'Computer wins! 🤖';
            computerScore++;
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
// DICE ROLLING
// ============================================
function getDiceRollingHTML() {
    return `
        <div class="project-content">
            <h2>🎲 Dice Rolling</h2>
            <div class="dice-container">
                <div class="dice-display">
                    <div class="dice" id="dice1">
                        <div class="dice-face">⚀</div>
                    </div>
                    <div class="dice" id="dice2">
                        <div class="dice-face">⚀</div>
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
            }
            
            .dice {
                width: 120px;
                height: 120px;
                background: white;
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                transition: var(--transition);
            }
            
            .dice-face {
                font-size: 6rem;
                color: #ff6b6b;
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
            
            @keyframes rollAnimation {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(90deg) scale(1.2); }
                50% { transform: rotate(180deg) scale(0.8); }
                75% { transform: rotate(270deg) scale(1.2); }
            }
        </style>
    `;
}

function initDiceRolling() {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const rollBtn = document.getElementById('rollDice');
    const totalDisplay = document.getElementById('diceTotal');
    
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    
    rollBtn.addEventListener('click', () => {
        rollBtn.disabled = true;
        
        // Animate rolling
        let rolls = 0;
        const rollInterval = setInterval(() => {
            dice1.querySelector('.dice-face').textContent = diceFaces[Math.floor(Math.random() * 6)];
            dice2.querySelector('.dice-face').textContent = diceFaces[Math.floor(Math.random() * 6)];
            dice1.style.animation = 'rollAnimation 0.1s ease';
            dice2.style.animation = 'rollAnimation 0.1s ease';
            
            rolls++;
            if (rolls > 10) {
                clearInterval(rollInterval);
                
                // Final roll
                const value1 = Math.floor(Math.random() * 6) + 1;
                const value2 = Math.floor(Math.random() * 6) + 1;
                
                dice1.querySelector('.dice-face').textContent = diceFaces[value1 - 1];
                dice2.querySelector('.dice-face').textContent = diceFaces[value2 - 1];
                totalDisplay.textContent = value1 + value2;
                
                rollBtn.disabled = false;
            }
        }, 100);
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
                <div class="coin" id="coin">
                    <div class="coin-face heads">👑</div>
                    <div class="coin-face tails">🦅</div>
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
            
            .coin {
                width: 150px;
                height: 150px;
                margin: 2rem auto;
                position: relative;
                transform-style: preserve-3d;
                transition: transform 1s;
            }
            
            .coin-face {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 8rem;
                background: linear-gradient(135deg, #ffd700, #ffed4e);
                border-radius: 50%;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            }
            
            .tails {
                transform: rotateY(180deg);
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
        </style>
    `;
}

function initCoinFlip() {
    const coin = document.getElementById('coin');
    const flipBtn = document.getElementById('flipCoin');
    const result = document.getElementById('coinResult');
    let headsCount = 0;
    let tailsCount = 0;
    
    flipBtn.addEventListener('click', () => {
        flipBtn.disabled = true;
        result.textContent = 'Flipping...';
        
        const isHeads = Math.random() < 0.5;
        const rotations = 720 + (isHeads ? 0 : 180);
        
        coin.style.transform = `rotateY(${rotations}deg)`;
        
        setTimeout(() => {
            if (isHeads) {
                result.textContent = '👑 Heads!';
                headsCount++;
                document.getElementById('headsCount').textContent = headsCount;
            } else {
                result.textContent = '🦅 Tails!';
                tailsCount++;
                document.getElementById('tailsCount').textContent = tailsCount;
            }
            flipBtn.disabled = false;
        }, 1000);
    });
}

// Continue with more projects in next message...
