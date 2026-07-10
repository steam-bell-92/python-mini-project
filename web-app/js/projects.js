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
        'complete-calculus-engine': getCompleteCalculusEngineHTML(),
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
        'chess': getChessHTML(),
        'sorting-visualizer': getSortingVisualizerHTML(),
        'quick-sort': getQuickSortHTML(),
        'fourier-series': getFourierSeriesHTML(),
        'merge-sort': getMergeSortHTML(),
        'pathfinding-visualizer': getPathfindingVisualizerHTML(),
        'tsp-visualizer': getTspVisualizerHTML()
    };
    
    return projects[projectName] || '<h2>Project Coming Soon!</h2>';
}

function toPascalCase(str) {
    if (str === "2048-game") return "2048Game";
    if (str === "nqueens") return "NQueens";

    return str
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
}

function initializeProject(projectName) {
    if (projectName === "number-sliding-puzzle") {
        initNumberSlidingPuzzle();
        return;
    }

    const fnName = "init" + toPascalCase(projectName);
    const init = window[fnName];

    if (typeof init === "function") {
        init();
    }
}


function getProjectHTML(projectName) {
  if (projectName === "number-sliding-puzzle") {
    return getNumberSlidingPuzzleHTML();
  }

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
