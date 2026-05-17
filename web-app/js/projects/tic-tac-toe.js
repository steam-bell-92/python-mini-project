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