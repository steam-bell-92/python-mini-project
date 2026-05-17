// ============================================
// 2048 GAME
// ============================================

function get2048GameHTML() {

    return `
        <div class="project-content">

            <h2>🎮 2048 Game</h2>

            <div class="game2048-container">

                <div class="score-board">

                    <div class="score-box">
                        Score:
                        <span id="score">0</span>
                    </div>

                    <div class="score-box">
                        Best:
                        <span id="best-score">0</span>
                    </div>

                </div>

                <div id="grid-container"></div>

                <button id="restart-btn" class="game-btn">
                    🔄 Restart Game
                </button>

            </div>

            <style>

                .game2048-container {

    text-align: center;

    margin-top: 20px;

    background: #1f2937;

    padding: 20px;

    border-radius: 15px;
}

                .score-board {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    margin-bottom: 20px;
                }

                .score-box {
                    background: #bbada0;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 10px;
                    font-weight: bold;
                }

                #grid-container {
                    width: 440px;
                    margin: auto;
                    display: grid;
                    grid-template-columns: repeat(4, 100px);
                    gap: 10px;
                    background: #bbada0;
                    padding: 10px;
                    border-radius: 10px;
                }

                .tile {
    width: 100px;
    height: 100px;
    background: #cdc1b4;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 28px;
    font-weight: bold;

    border-radius: 12px;

    color: #776e65;

    box-shadow: 0 4px 10px rgba(0,0,0,0.2);

    transition: all 0.15s ease-in-out;

    animation: pop 0.2s ease;
}
    #restart-btn {

    margin-top: 20px;

    transition: 0.3s;
}

#restart-btn:hover {

    transform: scale(1.05);

    background: #8c6f4e;
}

            </style>

        </div>
    `;
}

function init2048Game() {

    const gridContainer =
    document.getElementById("grid-container");

const scoreDisplay =
    document.getElementById("score");

const bestDisplay =
    document.getElementById("best-score");

if (!gridContainer || !scoreDisplay || !bestDisplay) {
    console.log("2048 elements not loaded yet");
    return;
}

let board = [];

let score = 0;

let bestScore =
    localStorage.getItem("best2048") || 0;

bestDisplay.textContent = bestScore;

    function createBoard() {

        board = [
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]
        ];

        score = 0;

        addNewTile();
        addNewTile();

        drawBoard();
    }

    function addNewTile() {

        let emptyCells = [];

        for(let r = 0; r < 4; r++) {

            for(let c = 0; c < 4; c++) {

                if(board[r][c] === 0) {

                    emptyCells.push({r,c});
                }
            }
        }

        if(emptyCells.length === 0) return;

        const randomCell =
            emptyCells[
                Math.floor(
                    Math.random() * emptyCells.length
                )
            ];

        board[randomCell.r][randomCell.c] =
            Math.random() < 0.9 ? 2 : 4;
    }

    function drawBoard() {

        gridContainer.innerHTML = "";

        board.forEach(row => {

            row.forEach(cell => {

                const tile =
                    document.createElement("div");

                tile.classList.add("tile");

                tile.textContent =
                    cell !== 0 ? cell : "";

                tile.style.background =
                    getTileColor(cell);

                if(cell > 4) {
                    tile.style.color = "#fff";
                }

                gridContainer.appendChild(tile);
            });
        });

        scoreDisplay.textContent = score;

        if(score > bestScore) {

            bestScore = score;

            localStorage.setItem(
                "best2048",
                bestScore
            );

            bestDisplay.textContent = bestScore;
        }
    }

    function getTileColor(value) {

    const colors = {
        0: "#cdc1b4",
        2: "#eee4da",
        4: "#ede0c8",
        8: "#f2b179",
        16: "#f59563",
        32: "#f67c5f",
        64: "#f65e3b",
        128: "#edcf72",
        256: "#edcc61",
        512: "#edc850",
        1024: "#edc53f",
        2048: "#ffcc00",
        4096: "#ff5733"
    };

    return colors[value] || "#3c3a32";
}

    function slide(row) {

        row = row.filter(val => val);

        for(let i = 0; i < row.length - 1; i++) {

            if(row[i] === row[i+1]) {

                row[i] *= 2;
                if(row[i] === 2048) {

    setTimeout(() => {

        alert("🎉 You reached 2048!");

    }, 100);
}

                score += row[i];

                row[i+1] = 0;
            }
        }

        row = row.filter(val => val);

        while(row.length < 4) {

            row.push(0);
        }

        return row;
    }

    function moveLeft() {

        let changed = false;

        for(let r = 0; r < 4; r++) {

            let original = [...board[r]];

            board[r] = slide(board[r]);

            if(original.toString() !== board[r].toString()) {

                changed = true;
            }
        }

        return changed;
    }

    function moveRight() {

        let changed = false;

        for(let r = 0; r < 4; r++) {

            let original = [...board[r]];

            board[r].reverse();

            board[r] = slide(board[r]);

            board[r].reverse();

            if(original.toString() !== board[r].toString()) {

                changed = true;
            }
        }

        return changed;
    }

    function transpose() {

        for(let r = 0; r < 4; r++) {

            for(let c = r; c < 4; c++) {

                let temp = board[r][c];

                board[r][c] = board[c][r];

                board[c][r] = temp;
            }
        }
    }

    function moveUp() {

        transpose();

        let changed = moveLeft();

        transpose();

        return changed;
    }

    function moveDown() {

        transpose();

        let changed = moveRight();

        transpose();

        return changed;
    }

    window.addEventListener("keydown", (e) => {

        let moved = false;

        if(e.key === "ArrowLeft") {
            moved = moveLeft();
        }

        else if(e.key === "ArrowRight") {
            moved = moveRight();
        }

        else if(e.key === "ArrowUp") {
            moved = moveUp();
        }

        else if(e.key === "ArrowDown") {
            moved = moveDown();
        }

        if(moved) {

            addNewTile();

            drawBoard();
        }
    });

    document
        .getElementById("restart-btn")
        .addEventListener("click", () => {

            createBoard();
        });

    createBoard();
}