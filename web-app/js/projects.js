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
        'word-scramble': getWordScrambleHTML(),
        'flames': getFlamesHTML(),
        'dots-boxes': getDotsBoxesHTML(),
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
        'math-quiz': getMathQuizHTML(),
        'whack-a-mole': getWhackaMoleHTML(),  
        'simon-says': getSimonSaysHTML(),
        'spot-the-difference': getSpotTheDifferenceHTML(),
        'whack-a-mole': getWhackaMoleHTML(),
        'flappy-game': getFlappyGameHTML(),
        '2048-game': get2048GameHTML(),
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
        'word-scramble': initWordScramble,
        'flames': initFlames,
        'dots-boxes': initDotsBoxes,
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
        'password-forge': initPasswordForge, // Register Password Forge initializer
        'spot-the-difference': initSpotTheDifference,
        'whack-a-mole': initWhackaMole,
        'flappy-game': initFlappyGame,
        'simon-says': initSimonSays,
        '2048-game': init2048Game,
        'math-quiz': initMathQuiz,
    };
    
    if (initializers[projectName]) {
        initializers[projectName]();
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

