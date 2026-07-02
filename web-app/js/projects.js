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
        'sudoku-game': getSudokuGameHTML(),
        'unit-converter': getUnitConverterHTML(),
        'resume-analyzer': getResumeAnalyzerHTML(),
        'reverse-hangman': () => getReverseHangmanHTML(),
        'budget-tracker': getBudgetTrackerHTML(),
        'snake-game': getSnakeGameHTML(),
        'sorting-visualizer': getSortingVisualizerHTML(),
        'quick-sort': getQuickSortHTML(),
        'fourier-series': getFourierSeriesHTML(),
        'merge-sort': getMergeSortHTML(),
        'pathfinding-visualizer': getPathfindingVisualizerHTML(),
        'tsp-visualizer': getTspVisualizerHTML()
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
        'nqueens' : initNQueens,
        'matrix-calculator': initMatrixCalculator,
        'sudoku-game': initSudokuGame,
        'unit-converter': initUnitConverter,
        'resume-analyzer': initResumeAnalyzer,
        'reverse-hangman': initReverseHangman,
        'budget-tracker': initBudgetTracker,
        'fourier-series': initFourierSeries,
        'merge-sort': initMergeSort,
        'pathfinding-visualizer': initPathfindingVisualizer,
        'tsp-visualizer': initTspVisualizer
    };
    
    if (initializers[projectName]) {
        initializers[projectName]();
    }
}

function toPascalCase(str) {
  if (str === "nqueens") return "NQueens";
  return str
    .split("-")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
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
  "chess": {
    title: "♟️ How to Play Chess",
    steps: [
      "Select a piece to see its valid moves highlighted.",
      "Move pieces according to standard chess rules.",
      "Try to put the opponent's king in checkmate.",
      "Support local pass-and-play or vs Computer AI."
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
    title: "🧮 How to Use Scientific Graphing Calculator",
    steps: [
      "Use the Standard tab to evaluate expressions like sin(30) + 5",
      "Use the Graphing tab to plot functions like x^2 or sin(x)",
      "Press operators or type directly using your keyboard",
      "Press = or Enter to see the result"
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
  "sorting-visualizer": {
    title: "📊 How Sorting Visualizer Works",
    steps: [
     "Select your preferred sorting algorithm",
     "Adjust array size and visualization speed",
     "Watch comparing, swapping, and sorted states in real-time"
    ]
  },
  "quick-sort": {
  title: "⚡ How Quick Sort Works",
  steps: [
    "Enter an array of numbers",
    "A pivot element is chosen",
    "Smaller elements go left, larger go right",
    "Process repeats until fully sorted"
  ]
},
"merge-sort": {
  title: "🔀 How Merge Sort Works",
  steps: [
    "Enter an array of numbers",
    "Array is divided into two halves",
    "Each half is recursively sorted",
    "Sorted halves are merged back together"
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
    "chess": "initChess",
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
    "sorting-visualizer": "initSortingVisualizer",
    "quick-sort": "initQuickSort",
    "merge-sort": "initMergeSort",
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
    "sudoku-game": "initSudokuGame",
    "resume-analyzer": "initResumeAnalyzer",
    "caesar-cipher": "initCaesarCipher",
    "war-card-game": "initWarCardGame",
    "number-sliding-puzzle": "initNumberSlidingPuzzle",
    "budget-tracker": "initBudgetTracker",
    "fourier-series": "initFourierSeries",
    "pathfinding-visualizer": "initPathfindingVisualizer",
    "tsp-visualizer": "initTspVisualizer"
  };

  const initializerName = initializers[projectName];
  if (initializerName && typeof window[initializerName] === "function") {
    window[initializerName]();
  }
}
