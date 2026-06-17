// Project Registry
// Each project's HTML and logic lives in its own file under js/projects/

function getProjectHTML(projectName) {
    const projects = {
        'rock-paper-scissor': getRockPaperScissorHTML(),
        'dice-rolling': getDiceRollingHTML(),
        'coin-flip': getCoinFlipHTML(),
        'number-guessing': getNumberGuessingHTML(),
        'hangman': getHangmanHTML(),
        'flames': getFlamesHTML(),
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
        'nqueens' : getNQueensHTML(),
        'matrix-calculator': () => getMatrixCalculatorHTML(),
        'unit-converter': getUnitConverterHTML(),
        'resume-analyzer': getResumeAnalyzerHTML(),
        'reverse-hangman': () => getReverseHangmanHTML,
        'snake-game': getSnakeGameHTML()
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
        'nqueens' : initNQueens(),
        'matrix-calculator': initMatrixCalculator,
        'unit-converter':initUnitConverter,
        'resume-analyzer':initResumeAnalyzer,
        'reverse-hangman': initReverseHangman
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
        const flipX = 360 * (4 + (seed % 3)) + 90;
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
                    triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
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
            fib[i] = fib[i-1] + fib[i-2];
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
            switch(direction) {
                case 0: y -= fib[i+1] * scale; break;
                case 1: x -= size; break;
                case 2: y -= size; x -= fib[i+1] * scale; break;
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
            <p class="project-desc">Discover your relationship status!</p>
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

function getProjectHTML(projectName) {
  const fnName = "get" + toPascalCase(projectName) + "HTML";

  try {
    if (typeof window[fnName] === "function") {
      return window[fnName]();
    } else {
      throw new Error(`Module ${fnName} is missing or failed to initialize.`);
    }
  } catch (error) {
    console.warn(`[Project Loader] Failed to load ${projectName}:`, error);
    return `
      <div class="project-content error-state" style="text-align: center; padding: 3rem 1rem;">
        <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
        <h3 style="color: var(--danger-color, #ff4444); margin-bottom: 0.5rem; font-family: monospace;">
          SYSTEM ERROR: PROJECT OFFLINE
        </h3>
        <p style="color: var(--text-secondary, #a0aec0); margin-bottom: 1.5rem;">
          We couldn't initialize the interactive environment for <strong>${projectName}</strong>.
        </p>
        <button onclick="window.location.reload()" 
          style="background: var(--primary-color, #4CAF50); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer;">
          >_ RETRY_CONNECTION
        </button>
      </div>
    `;
  }
}

// ============================================
// PROJECT INSTRUCTIONS FOR INFO TOOLTIPS
// ============================================

const projectInstructions = {
  // GAMES
  "war-card-game": {
    title: "⚔️ How to Play War Card Game",
    steps: [
      "Enter names or check the option to play against the CPU.",
      "Each player starts with a deck of 26 cards.",
      "Click 'Draw / Battle' to draw the top card from both decks.",
      "The player with the higher card rank wins the round and gets a point.",
      "Ace is the highest, 2 is the lowest.",
      "Play continues until all cards are drawn. The player with the most points wins!"
    ]
  },
  "number-sliding-puzzle": {
    title: "🧩 How to Play Number Sliding Puzzle",
    steps: [
      "Use arrow keys (← ↑ → ↓) or click/tap on tiles next to the empty space to slide them.",
      "Arrange the numbers in ascending order from 1 to 8, with the blank space at the bottom right.",
      "A moves counter keeps track of your steps.",
      "Click the Reset button to restart the game."
    ]
  },
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
      "Don't hit the walls or yourself"
    ]
  },
  "rock-paper-scissor": {
    title: "✊ How to Play Rock Paper Scissors",
    steps: [
      "Choose Rock, Paper, or Scissors",
      "Rock beats Scissors, Scissors beats Paper, Paper beats Rock",
      "Play against the computer"
    ]
  },
  "simon-says": {
    title: "🎮 How to Play Simon Says",
    steps: [
      "Watch the sequence of colors/emojis",
      "Repeat the sequence in the same order",
      "Each round adds one more step",
      "One wrong click ends the game"
    ]
  },
  "flames": {
    title: "💖 How to Use FLAMES",
    steps: [
      "Enter two names",
      "Click Calculate",
      "See your relationship status",
      "Based on letter cancellation method"
    ]
  },
  "tic-tac-toe": {
    title: "❌⭕ How to Play Tic Tac Toe",
    steps: [
      "Two players take turns (X and O)",
      "Get 3 in a row to win",
      "Game ends when someone wins or board is full"
    ]
  },
  "hangman": {
    title: "🎮 How to Play Hangman",
    steps: [
      "Guess letters to complete the hidden word",
      "6 wrong guesses and you lose",
      "Use the keyboard or on-screen buttons"
    ]
  },
  "flappy-game": {
    title: "🐦 How to Play Flappy Game",
    steps: [
      "Click or press spacebar to make the bird fly",
      "Avoid hitting the pipes",
      "Try to get the highest score"
    ]
  },
  "dice-rolling": {
    title: "🎲 How to Use Dice Roller",
    steps: [
      "Choose the number of dice",
      "Click 'Roll Dice' to roll",
      "Each die shows a random number (1-6)"
    ]
  },
  "coin-flip": {
    title: "🪙 How to Play Coin Flip",
    steps: [
      "Bet on Heads or Tails",
      "Click 'Flip Coin' to toss",
      "Win if your prediction is correct"
    ]
  },
  "number-guessing": {
    title: "🎯 How to Play Number Guessing",
    steps: [
      "Guess a number between 1 and 100",
      "Get hints if too high or too low",
      "Try to guess in as few attempts as possible"
    ]
  },
  "word-scramble": {
    title: "📝 How to Play Word Scramble",
    steps: [
      "Unscramble the jumbled word",
      "You have 30 seconds to guess",
      "Use shuffle button to rearrange letters"
    ]
  },
  "emoji-memory": {
    title: "😀 How to Play Emoji Memory",
    steps: [
      "Click Start to begin",
      "Watch the sequence of emojis",
      "Retrace the sequence by clicking emoji buttons",
      "Each level adds one more emoji"
    ]
  },
  "dots-boxes": {
    title: "🔲 How to Play Dots and Boxes",
    steps: [
      "Choose grid size",
      "Select 2 Players or AI",
      "Connect dots to form boxes",
      "Player with most boxes wins"
    ]
  },
  "whack-a-mole": {
    title: "🔨 How to Play Whack-a-Mole",
    steps: [
      "Click on moles as they appear",
      "Each mole gives points",
      "Beat the clock for high score"
    ]
  },
  "blackjack-21": {
    title: "🃏 How to Play Blackjack",
    steps: [
      "Get as close to 21 without going over",
      "Click 'Hit' for another card",
      "Click 'Stand' to keep your hand",
      "Beat the dealer to win"
    ]
  },
  "reverse-hangman": {
  title: "🤖 How to Play Reverse Hangman",
  steps: [
    "Think of a secret word from the dictionary (40+ words available)",
    "The AI tries to guess your word using letter frequency analysis",
    "Tell the AI if its guess is correct or not",
    "AI gets 8 attempts max — can you beat the computer?",
    "Watch the hangman visual feedback as AI guesses"
  ]
},

  // MATH
  "calculator": {
    title: "🧮 How to Use Calculator",
    steps: [
      "Click number buttons to enter values",
      "Use operators (+, -, ×, ÷)",
      "Press = to see result",
      "Use C to clear, ⌫ to delete"
    ]
  },
  "collatz": {
    title: "🔢 How Collatz Conjecture Works",
    steps: [
      "Enter any positive integer",
      "If even: divide by 2",
      "If odd: multiply by 3 and add 1",
      "The sequence always reaches 1!"
    ]
  },
  "fibonacci": {
    title: "📈 How Fibonacci Works",
    steps: [
      "Enter number of terms",
      "Each number is sum of previous two",
      "Sequence starts with 0, 1"
    ]
  },
  "pascal-triangle": {
    title: "🔺 How Pascal's Triangle Works",
    steps: [
      "Each number is sum of two above",
      "Enter number of rows to generate"
    ]
  },
  "armstrong": {
    title: "💎 How Armstrong Numbers Work",
    steps: [
      "Enter a number to check",
      "Sum of digits raised to power of digit count",
      "If sum equals original number → Armstrong number"
    ]
  },
  "prime-analyzer": {
    title: "🔢 How Prime Analyzer Works",
    steps: [
      "Check if a number is prime",
      "Generate primes up to a limit",
      "Find primes in a range"
    ]
  },
  "projectile-motion": {
    title: "⚾ How Projectile Motion Works",
    steps: [
      "Enter initial velocity and angle",
      "Calculate time of flight, max height, range"
    ]
  },
  "binary-search": {
    title: "🔍 How Binary Search Works",
    steps: [
      "Enter a sorted array",
      "Enter target value to search",
      "Cuts search space in half each step"
    ]
  },
  "bubble-sort": {
    title: "🔄 How Bubble Sort Works",
    steps: [
      "Enter an array of numbers",
      "Watch the sorting visualization"
    ]
  },
  "tower-of-hanoi": {
    title: "🗼 How to Solve Tower of Hanoi",
    steps: [
      "Enter the number of disks",
      "Click Solve to watch the animation",
      "No larger disk on top of smaller disk"
    ]
  },
  "coordinate-polar-transform": {
    title: "📐 How Coordinate to Polar Transform Works",
    steps: [
      "Enter X and Y coordinates",
      "Click Convert to get polar transformation"
    ]
  },
  "derivative-calculator": {
    title: "📈 How Derivative Calculator Works",
    steps: [
      "Enter derivative order (n)",
      "Enter coefficients",
      "Enter x value to evaluate"
    ]
  },
  "progression-recognizer": {
    title: "📊 How AP/GP/AGP/HP Recognizer Works",
    steps: [
      "Enter a sequence of numbers",
      "Click Recognize to identify the sequence type"
    ]
  },
  "matrix-calculator": {
    title: "🧮 How to Use Matrix Calculator",
    steps: [
        "Select matrix dimensions (rows × columns)",
        "Enter values into each cell",
        "Choose operation: Addition, Subtraction, Multiplication, Transpose, Determinant, Rank, or Inverse",
        "Click Calculate to see the result",
        "Determinant & Inverse work only for square matrices"
    ]
  },

  // UTILITIES
  "color-palette": {
    title: "🎨 How to Use Color Palette",
    steps: [
      "Select a website type",
      "Choose a mood",
      "Click 'Generate Palette'",
      "Click any color to copy its hex code"
    ]
  },
  "budget-tracker": {
    title: "💰 How to Use Budget Tracker",
    steps: [
      "Select the transaction type (Income or Expense) from the dropdown.",
      "Enter a category, description (optional), and positive amount value.",
      "Click 'Add Transaction' to log it in your dashboard.",
      "Analyze spending behavior through dynamic category-wise progress bars.",
      "Clear individual records using the delete action or wipe out all history securely."
    ]
  },
  "morse-code": {
    title: "📻 How to Use Morse Code",
    steps: [
      "Type text in the input box",
      "Click Translate to convert to Morse code"
    ]
  },
  "caesar-cipher": {
    title: "🔐 How to Use Caesar Cipher",
    steps: [
      "Enter your message",
      "Choose shift number (1-25)",
      "Click Encrypt or Decrypt",
      "Copy the result"
    ]
  },
  "number-converter": {
    title: "🔄 How to Use Number Converter",
    steps: [
      "Enter a number",
      "Choose base to convert from and to",
      "Result appears instantly"
    ]
  },
  "password-forge": {
    title: "🔑 How to Use Password Forge",
    steps: [
      "Choose password length",
      "Select character types",
      "Click Generate",
      "Copy the secure password"
    ]
  },
  "resume-analyzer": {
    title: "📄 How to Use AI Resume Analyzer",
    steps: [
      "Upload your resume (PDF, DOC, or TXT)",
      "Click 'Analyze Resume'",
      "View your ATS score and keyword matches",
      "Check suggestions to improve your resume"
    ]
  },
  "typing-speed-tester": {
    title: "⌨️ How to Use Typing Speed Tester",
    steps: [
      "Click Start to begin",
      "Type the displayed text",
      "Time starts when you begin typing",
      "See your WPM score"
    ]
  },
  "productive-pet": {
    title: "🐱 How to Use Productive Pet",
    steps: [
      "Add tasks to complete",
      "Pet grows as you complete tasks",
      "Stay productive to keep your pet happy"
    ]
  },
  "progress-tracker": {
    title: "📊 How to Use Progress Tracker",
    steps: [
      "Track your completed mini projects",
      "Mark projects as complete",
      "See your progress over time"
    ]
  },
  "unit-converter": {
    title: "📏 How to Use Unit Converter",
    steps: [
        "Select conversion category (Length, Mass, Temperature, etc.)",
        "Choose input and output units",
        "Enter the value to convert",
        "Result appears instantly",
        "Supports multiple unit types"
  ]
}
};

function getProjectInstructions(projectName) {
  // Return instructions from the object above
  if (projectInstructions[projectName]) {
    return projectInstructions[projectName];
  }
  // Fallback for missing instructions
  return {
    title: "ℹ️ How to Use This Project",
    steps: ["Instructions coming soon. Try exploring the interface!"]
  };
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
    
    const towerX = [200, 400, 600];
    const baseY = 350;
    const diskHeight = 20;
    const maxDiskWidth = 120;
    const colors = ['#ff6b6b', '#f59e0b', '#10b981', '#06b6d4', '#6366f1', '#8b5cf6', '#ec4899'];
    
    function initTowers() {
        towers = [[], [], []];
        moveCount = 0;
        diskCount = parseInt(diskCountInput.value) || 3;
        
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
        
        isAnimating = true;
        solveBtn.disabled = true;
        
        await solveHanoi(diskCount, 0, 2, 1);
        
        isAnimating = false;
        solveBtn.disabled = false;
    }
    
    solveBtn.addEventListener('click', solve);
    resetBtn.addEventListener('click', initTowers);
    diskCountInput.addEventListener('change', initTowers);
    
    initTowers();
}
//N-Queens
function getNQueensHTML() {
    return `
        <div class="project-content">
            <h2>👑 N-Queens Problem Solver</h2>
            <div class="nqueens-container">
                <div class="controls">
                    <label>
                        Board Size (N):
                        <input type="number" id="nValue" min="4" max="12" value="4">
                    </label>
                    <button class="btn-solve" id="solveNQueensBtn">🎯 Solve</button>
                    <button class="btn-reset" id="resetNQueens">Reset</button>
                </div>
                
                <div class="stats">
                    <div>Total Solutions: <span id="solutionCount">0</span></div>
                </div>
                
                <div id="nQueensOutput" class="solutions"></div>
            </div>
        </div>
        
        <style>
            .nqueens-container {
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
            .solutions {
                margin-top: 1rem;
                font-family: monospace;
                white-space: pre;
                text-align: left;
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
        </style>
    `;
}
function isSafe(board, row, col, n) {
    for (let i = 0; i < row; i++) if (board[i][col]) return false;
    for (let i=row, j=col; i>=0 && j>=0; i--, j--) if (board[i][j]) return false;
    for (let i=row, j=col; i>=0 && j<n; i--, j++) if (board[i][j]) return false;
    return true;
}

function solveNQueens(board, row, n, solutions) {
    if (row === n) {
        solutions.push(board.map(r => [...r]));
        return;
    }
    for (let col = 0; col < n; col++) {
        if (isSafe(board, row, col, n)) {
            board[row][col] = 1;
            solveNQueens(board, row+1, n, solutions);
            board[row][col] = 0;
        }
    }
}

function initNQueens() {
    const solveBtn = document.getElementById('solveNQueensBtn');
    const resetBtn = document.getElementById('resetNQueens');
    const output = document.getElementById('nQueensOutput');
    const solutionCountEl = document.getElementById('solutionCount');
    const nInput = document.getElementById('nValue');

    function runSolver() {
        let n = parseInt(nInput.value) || 4;
        let board = Array.from({length:n}, () => Array(n).fill(0));
        let solutions = [];
        solveNQueens(board, 0, n, solutions);

        solutionCountEl.textContent = solutions.length;
        output.innerHTML = "";
        solutions.forEach(sol => {
            let grid = sol.map(row => row.map(cell => cell ? "♛" : "⬜").join(" ")).join("<br>");
            output.innerHTML += `<pre>${grid}</pre><br>`;
        });
    }

    solveBtn.addEventListener('click', runSolver);
    resetBtn.addEventListener('click', () => {
        output.innerHTML = "";
        solutionCountEl.textContent = "0";
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
        const marginLeft = 50;
        const marginBottom = 35;
        const marginTop = 20;
        const usableWidth = width - marginLeft - 20;
        const usableHeight = height - marginTop - marginBottom;

        const mapX = (x) => marginLeft + (x / xMax) * usableWidth;
        const mapY = (y) => height - marginBottom - (y / yMax) * usableHeight;

        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = '#0f172a10';
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(marginLeft, marginTop);
        ctx.lineTo(marginLeft, height - marginBottom);
        ctx.lineTo(width - 20, height - marginBottom);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '12px Arial';
        ctx.fillText('Height (m)', 8, marginTop + 12);
        ctx.fillText('Distance (m)', width - 95, height - 10);

        if (points.length > 1) {
            ctx.strokeStyle = '#2563eb';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(mapX(points[0].x), mapY(points[0].y));
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(mapX(points[i].x), mapY(points[i].y));
            }
            ctx.stroke();

            const landing = points[points.length - 1];
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(mapX(landing.x), mapY(landing.y), 6, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function simulate() {
        const speed = Math.max(1, Number(speedInput.value) || 1);
        const angleDeg = Math.min(89, Math.max(1, Number(angleInput.value) || 45));

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
                padding: 1rem;
                text-align: left;
                white-space: pre-line;
                min-height: 110px;
                line-height: 1.7;
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
function initializeProject(projectName) {
  const initializers = {
    "tic-tac-toe": "initTicTacToe",
    "rock-paper-scissor": "initRockPaperScissor",
    "dice-rolling": "initDiceRolling",
    "coin-flip": "initCoinFlip",
    "blackjack-21": "initBlackjack",
    "number-guessing": "initNumberGuessing",
    hangman: "initHangman",
    "word-scramble": "initWordScramble",
    flames: "initFlames",
    "dots-boxes": "initDotsBoxes",
    "emoji-memory": "initEmojiMemoryGame",
    fibonacci: "initFibonacci",
    "binary-search": "initBinarySearch",
    "bubble-sort": "initBubbleSort",
    "progression-recognizer": "initProgressionRecognizer",
    "pascal-triangle": "initPascalTriangle",
    armstrong: "initArmstrong",
    calculator: "initCalculator",
    collatz: "initCollatz",
    "prime-analyzer": "initPrimeAnalyzer",
    "projectile-motion": "initProjectileMotion",
    "coordinate-polar-transform": "initCoordinatePolarTransform",
    "derivative-calculator": "initDerivativeCalculator",
    "morse-code": "initMorseCode",
    "tower-of-hanoi": "initTowerOfHanoi",
    "number-converter": "initNumberConverter",
    "typing-speed-tester": "initTypingSpeedTester",
    "snake-game": "initSnakeGame",
    "password-forge": "initPasswordForge",
    "spot-the-difference": "initSpotTheDifference",
    "whack-a-mole": "initWhackaMole",
    "flappy-game": "initFlappyGame",
    "productive-pet": "initProductivePet",
    "simon-says": "initSimonSays",
    "2048-game": "init2048Game",
    "color-palette": "initColorPalette",
    "math-quiz": "initMathQuiz",
    "resume-analyzer": "initResumeAnalyzer",
    "caesar-cipher": "initCaesarCipher",
    "war-card-game": "initWarCardGame",
    "number-sliding-puzzle": "initNumberSlidingPuzzle",
    "budget-tracker": "initBudgetTracker"
    "caesar-cipher": "initCaesarCipher"
  };

  const initializerName = initializers[projectName];
  if (initializerName && typeof window[initializerName] === "function") {
    window[initializerName]();
  }
}
