// Project Registry
// Each project's HTML and logic lives in its own file under js/projects/

const projectInstructions = {
  // Project instructions moved to modular files under js/projects/
};

function toPascalCase(slug) {
  return slug
    .split(/[^a-zA-Z0-9]+/)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join("");
}

function getProjectHTML(projectName) {
  const fnName = "get" + toPascalCase(projectName) + "HTML";

  try {
    // 1. Check if the project module actually loaded
    if (typeof window[fnName] === "function") {
      return window[fnName]();
    } else {
      // Throw an error so the catch block handles the missing module
      throw new Error(`Module ${fnName} is missing or failed to initialize.`);
    }
  } catch (error) {
    // 2. Log it for the developers
    console.warn(`[Project Loader] Failed to load ${projectName}:`, error);

    // 3. Return a user-friendly UI error state for the user
    return `
            <div class="project-content error-state" style="text-align: center; padding: 3rem 1rem;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
                <h3 style="color: var(--danger-color, #ff4444); margin-bottom: 0.5rem; font-family: monospace;">
                    SYSTEM ERROR: PROJECT OFFLINE
                </h3>
                <p style="color: var(--text-secondary, #a0aec0); margin-bottom: 1.5rem; max-width: 400px; margin-left: auto; margin-right: auto;">
                    We couldn't initialize the interactive environment for <strong>${projectName}</strong>. The underlying module may be missing or corrupted.
                </p>
                <button onclick="window.location.reload()" 
                        style="background: var(--primary-color, #4CAF50); color: white; border: none; padding: 0.75rem 1.5rem; border-radius: 6px; cursor: pointer; font-weight: 600; font-family: monospace; transition: opacity 0.2s;">
                    >_ RETRY_CONNECTION
                </button>
            </div>
        `;
  }
}

function getProjectInstructions(projectName) {
  // Modules may provide richer instructions; fall back to a simple hint.
  const fnName = "get" + toPascalCase(projectName) + "Instructions";
  if (typeof window[fnName] === "function") return window[fnName]();
  return {
    title: projectName,
    steps: ["Open the project and follow on-screen instructions."],
  };
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
    "resume-analyzer": "initAIResumeAnalyzer",
    "caesar-cipher": "initCaesarCipher",
  };

  const initializerName = initializers[projectName];
  if (initializerName && typeof window[initializerName] === "function") {
    window[initializerName]();
  }
}
