function getSimonSaysHTML() {
    return `

    <div class="game-container ui-panel">

        <h1>🧠 Simon Says</h1>

        <p class="subtitle">
            Only follow commands that start with “Simon says”!
        </p>

        <div class="score-board">

            <div class="score-card">
                ⭐ Score
                <h2 id="score">0</h2>
            </div>

            <div class="score-card">
                ⚡ Speed
                <h2 id="speed">3s</h2>
            </div>

        </div>

        <div class="timer-bar">

            <div
                class="timer-fill"
                id="timerFill">
            </div>

        </div>

        <div
            class="command-box"
            id="commandBox">

            Press Start

        </div>

        <div class="actions">

            <button
                class="action-btn jump"
                data-action="Jump">

                🏃 Jump

            </button>

            <button
                class="action-btn duck"
                data-action="Duck">

                🦆 Duck

            </button>

            <button
                class="action-btn clap"
                data-action="Clap">

                👏 Clap

            </button>

            <button
                class="action-btn spin"
                data-action="Spin">

                🔄 Spin

            </button>

        </div>

        <div class="controls">

            <button
                class="control-btn"
                id="startBtn">

                ▶ Start Game

            </button>

            <button
                class="control-btn"
                id="restartBtn">

                🔄 Restart

            </button>

        </div>

        <p id="message"></p>

    </div>

    <style>

    .game-container{

        width:100%;

        max-width:700px;

        margin:auto;

        background:var(--surface-color);

        border-radius:24px;

        padding:35px;

        text-align:center;

        color:var(--text-color);

        box-shadow:var(--shadow);
    }

    .game-container h1{

        font-size:2.5rem;

        margin-bottom:10px;
    }

    .subtitle{

        color:var(--text-secondary);

        margin-bottom:25px;
    }

    .score-board{

        display:flex;

        justify-content:center;

        gap:20px;

        margin-bottom:25px;

        flex-wrap:wrap;
    }

    .score-card{

        background:var(--accent-soft);

        border:1px solid var(--accent-border);

        padding:12px 20px;

        border-radius:14px;

        min-width:120px;
    }

    .command-box{

        background:var(--panel-color);

        border:2px solid var(--border-color);

        border-radius:18px;

        padding:30px;

        margin-bottom:25px;

        min-height:140px;

        display:flex;

        justify-content:center;

        align-items:center;

        font-size:2rem;

        font-weight:bold;
    }

    .actions{

        display:grid;

        grid-template-columns:repeat(2,1fr);

        gap:18px;

        margin-bottom:25px;
    }

    .action-btn{

        border:none;

        padding:20px;

        border-radius:16px;

        cursor:pointer;

        font-size:1rem;

        font-weight:bold;

        transition:0.2s ease;

        color:var(--on-accent);
    }

    .action-btn:hover{

        transform:translateY(-2px);
    }

    .jump{
        background:var(--danger-color);
    }

    .duck{
        background:var(--success-color);
    }

    .clap{
        background:var(--warning-color);
        color:#111827;
    }

    .spin{
        background:var(--secondary-color);
    }

    .controls{

        display:flex;

        justify-content:center;

        gap:15px;

        flex-wrap:wrap;
    }

    .control-btn{
        padding:14px 24px;

        font-size:1rem;
    }

    #message{

        margin-top:20px;

        min-height:24px;
    }

    .timer-bar{

        width:100%;

        height:12px;

        background:var(--panel-color);

        border:1px solid var(--border-color);

        border-radius:999px;

        overflow:hidden;

        margin-bottom:25px;
    }

    .timer-fill{

        height:100%;

        width:100%;

        background:var(--success-color);
    }

    @media(max-width:600px){

        .actions{

            grid-template-columns:1fr;
        }

        .command-box{

            font-size:1.5rem;
        }

        .control-btn{

            width:100%;
        }
    }

    </style>

    `;
}

function initSimonSays() {
    const actions = ["Jump", "Duck", "Clap", "Spin"];

    let currentAction = "";

    let simonSays = false;

    let score = 0;

    let gameStarted = false;

    // Added this state lock
    let roundActive = false;

    let gameSpeed = 3000;

    let timeout;

    const commandBox = document.getElementById("commandBox");

    const scoreText = document.getElementById("score");

    const speedText = document.getElementById("speed");

    const message = document.getElementById("message");

    const timerFill = document.getElementById("timerFill");

    document.getElementById("startBtn").addEventListener("click", startGame);

    document
        .getElementById("restartBtn")
        .addEventListener("click", restartGame);

    document.querySelectorAll(".action-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (!gameStarted) return;

            handlePlayerMove(btn.dataset.action);
        });
    });

    function startGame() {
        if (gameStarted) return;

        gameStarted = true;

        score = 0;

        gameSpeed = 3000;

        updateUI();

        nextRound();
    }

    function restartGame() {
        clearTimeout(timeout);

        gameStarted = false;

        commandBox.textContent = "Press Start";

        message.textContent = "";

        timerFill.style.width = "100%";

        scoreText.textContent = "0";

        speedText.textContent = "3s";
    }

    function nextRound() {
        roundActive = true; // 🟢 UNLOCK: The new round is ready for input

        timerFill.style.transition = "none";
        timerFill.style.width = "100%";

        setTimeout(() => {
            timerFill.style.transition = `${gameSpeed}ms linear`;
            timerFill.style.width = "0%";
        }, 50);

        currentAction = actions[Math.floor(Math.random() * actions.length)];
        simonSays = Math.random() > 0.4;

        if (simonSays) {
            commandBox.textContent = `Simon says ${currentAction}`;
        } else {
            commandBox.textContent = currentAction;
        }

        timeout = setTimeout(() => {
            if (simonSays) {
                gameOver("⏰ Too Slow!");
            } else {
                roundActive = false; // Engage lock during transition
                timerFill.style.transition = "none"; // Visually freeze the progress bar

                message.textContent = "✅ Correct! You ignored it.";
                score++;
                updateUI();

                if (gameSpeed > 1200) {
                    gameSpeed -= 120;
                }
                setTimeout(() => {
                    nextRound();
                }, 700);
            }
        }, gameSpeed);
    }

    function handlePlayerMove(action) {
        if (!roundActive) return; // 🛑 HALT: Ignore clicks if the round is already over
        roundActive = false; // Engage the lock immediately

        clearTimeout(timeout);
        timerFill.style.transition = "none"; // Visually freeze the progress bar

        if (simonSays && action === currentAction) {
            score++;
            message.textContent = "✅ Correct!";
        } else if (!simonSays) {
            gameOver("❌ Simon didn’t say!");
            return;
        } else {
            gameOver("❌ Wrong Action!");
            return;
        }

        if (gameSpeed > 1200) {
            gameSpeed -= 120;
        }

        updateUI();

        setTimeout(() => {
            nextRound();
        }, 700);
    }

    function updateUI() {
        scoreText.textContent = score;

        speedText.textContent = `${(gameSpeed / 1000).toFixed(1)}s`;
    }

    function gameOver(text) {
        gameStarted = false;

        clearTimeout(timeout);

        message.textContent = `${text} Final Score: ${score}`;

        commandBox.textContent = "💀 Game Over";

        timerFill.style.width = "0%";
    }
}
