// ============================================
// MATH QUIZ GAME
// ============================================
function getMathQuizHTML() {
    return `
        <div class="project-content">
            <h2>🧠 Math Quiz</h2>
            <div class="quiz-container">
                <div class="quiz-stats">
                    <div class="stat">
                        <span class="stat-label">Lives</span>
                        <span class="stat-value" id="quizLives">❤️ ❤️ ❤️</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Score</span>
                        <span class="stat-value" id="quizScore">0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Streak</span>
                        <span class="stat-value" id="quizStreak">🔥 0</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Level</span>
                        <span class="stat-value" id="quizLevel">🟢 Easy</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Timer</span>
                        <span class="stat-value" id="quizTimer">⏳ 10</span>
                    </div>
                </div>

                <div class="quiz-board" id="quizBoard">
                    <p class="quiz-start-msg">Press Start to Play! 🎮</p>
                </div>

                <div class="quiz-options" id="quizOptions"></div>

                <div class="quiz-message" id="quizMessage"></div>

                <div class="quiz-actions">
                    <button class="btn-quiz-start" id="quizStartBtn">▶️ Start</button>
                    <button class="btn-quiz-reset" id="quizResetBtn">🔄 Reset</button>
                </div>
            </div>
        </div>

        <style>
            .quiz-container {
                padding: 2rem;
                max-width: 700px;
                margin: 0 auto;
                text-align: center;
            }

            .quiz-stats {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 2rem;
            }

            .quiz-stats .stat {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 12px;
                padding: 0.8rem 1.2rem;
                min-width: 120px;
            }

            .quiz-stats .stat-label {
                display: block;
                font-size: 0.85rem;
                color: var(--text-secondary);
                margin-bottom: 0.3rem;
            }

            .quiz-stats .stat-value {
                display: block;
                font-size: 1.3rem;
                font-weight: bold;
                color: var(--primary-color);
            }

            .quiz-board {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                padding: 2rem;
                margin-bottom: 1.5rem;
                min-height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .quiz-question {
                font-size: 2rem;
                font-weight: bold;
                color: var(--text-color);
            }

            .quiz-start-msg {
                font-size: 1.3rem;
                color: var(--text-secondary);
            }

            .quiz-options {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 1rem;
                margin-bottom: 1.5rem;
            }

            
              .quiz-option-btn {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 18px;
    font-size: 1.2rem;
    font-weight: bold;
    border: 2px solid var(--border-color);
    border-radius: 12px;
    background: var(--surface-color);
    color: var(--text-color);
    cursor: pointer;
    transition: var(--transition);
    text-align: left;
    width: 100%;
}

.quiz-option-btn:hover {
    border-color: var(--primary-color);
    transform: scale(1.02);
}

.option-circle {
    min-width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 800;
    flex-shrink: 0;
    border: 2.5px solid;
}

            .quiz-option-btn.correct {
                background: var(--success-color);
                color: white;
                border-color: var(--success-color);
            }

            .quiz-option-btn.wrong {
                background: var(--danger-color);
                color: white;
                border-color: var(--danger-color);
            }

            .quiz-option-btn:disabled {
                cursor: not-allowed;
                opacity: 0.7;
            }

            .quiz-message {
                font-size: 1.2rem;
                font-weight: bold;
                min-height: 2rem;
                margin-bottom: 1rem;
                color: var(--primary-color);
            }

            .quiz-actions {
                display: flex;
                gap: 1rem;
                justify-content: center;
            }

            .btn-quiz-start {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                border: none;
                padding: 0.9rem 2rem;
                border-radius: 50px;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;
                transition: var(--transition);
            }

            .btn-quiz-start:hover {
                transform: scale(1.05);
            }

            .btn-quiz-reset {
                background: var(--danger-color);
                color: white;
                border: none;
                padding: 0.9rem 2rem;
                border-radius: 50px;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;
                transition: var(--transition);
            }

            .btn-quiz-reset:hover {
                transform: scale(1.05);
            }

            .quiz-gameover {
                font-size: 1.5rem;
                font-weight: bold;
                color: var(--danger-color);
            }
        </style>
    `;
}

function initMathQuiz() {
    // ── helpers ──────────────────────────────────────────
    function isPrime(n) {
        if (n < 2) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    function generateQuestion(difficulty) {
        const easy = ['add', 'sub', 'mul', 'div'];
        const medium = ['add', 'sub', 'mul', 'div', 'negative', 'decimal', 'percentage', 'missing'];
        const hard = ['bodmas', 'prime', 'conversion', 'percentage', 'decimal'];

        const pool = difficulty === 1 ? easy : difficulty === 2 ? medium : hard;
        const type = pool[Math.floor(Math.random() * pool.length)];

        let question, correct;

        // fixedOptions: when a question type has a known, constrained set of valid
        // answers (e.g. prime uses only 1 or 2)we attach the exact options here
        // so showQuestion() skips generateOptions() which would produce arbitrary
        // nearby numbers that are meaningless for the question being asked.
        let fixedOptions = null;


        if (type === 'add') {
            const [a, b] = [rand(1, 60), rand(1, 60)];
            question = `${a} + ${b} = ?`;
            correct = a + b;

        } else if (type === 'sub') {
            let [a, b] = [rand(1, 50), rand(1, 50)];
            if (a < b) [a, b] = [b, a];
            question = `${a} − ${b} = ?`;
            correct = a - b;

        } else if (type === 'mul') {
            const [a, b] = [rand(2, 15), rand(2, 15)];
            question = `${a} × ${b} = ?`;
            correct = a * b;

        } else if (type === 'div') {
            const b = rand(2, 10);
            const a = b * rand(2, 10);
            question = `${a} ÷ ${b} = ?`;
            correct = a / b;

        } else if (type === 'negative') {
            const a = -rand(1, 25);
            const b = rand(1, 30);
            question = `${a} + ${b} = ?`;
            correct = a + b;

        } else if (type === 'decimal') {
            const a = Math.round(Math.random() * 90 + 10) / 10;
            const b = Math.round(Math.random() * 90 + 10) / 10;
            question = `${a} + ${b} = ?`;
            correct = Math.round((a + b) * 10) / 10;

        } else if (type === 'percentage') {
            const pct = [10, 20, 25, 50][rand(0, 3)];
            const num = [100, 200, 300, 400, 500][rand(0, 4)];
            question = `${pct}% of ${num} = ?`;
            correct = (pct / 100) * num;

        } else if (type === 'missing') {
            const [a, b] = [rand(1, 50), rand(1, 50)];
            question = `__ + ${b} = ${a + b}, find __?`;
            correct = a;

        } else if (type === 'bodmas') {
            const [a, b, c] = [rand(1, 20), rand(1, 20), rand(1, 5)];
            question = `${a} + ${b} × ${c} = ?`;
            correct = a + b * c;

        } else if (type === 'prime') {
            const num = rand(10, 50);
            question = `Is ${num} prime? (1 = Yes, 2 = No)`;
            correct = isPrime(num) ? 1 : 2;

            // the only valid answers are 1 (yes) or 2 (no). using generateOptions()
            // here would fill the remaining 2 slots with random nearby integers
            // (e.g. 13, 11, 3) that are irrelevant and confusing.  
            fixedOptions = [1, 2];

        } else if (type === 'conversion') {
            const kind = rand(0, 2);
            if (kind === 0) {
                const h = rand(1, 10);
                question = `${h} hour(s) = ? minutes`;
                correct = h * 60;
            } else if (kind === 1) {
                const m = rand(1, 10);
                question = `${m} minute(s) = ? seconds`;
                correct = m * 60;
            } else {
                const d = rand(1, 7);
                question = `${d} day(s) = ? hours`;
                correct = d * 24;
            }
        } else {
            const [a, b] = [rand(1, 30), rand(1, 30)];
            question = `${a} + ${b} = ?`;
            correct = a + b;
        }

        return { question, correct };
    }

    function generateOptions(correct) {
        const opts = new Set([correct]);
        let tries = 0;
        while (opts.size < 4 && tries < 60) {
            const fake = correct + rand(-15, 15);
            if (fake !== correct) opts.add(fake);
            tries++;
        }
        let extra = correct + 1;
        while (opts.size < 4) { opts.add(extra++); }
        return [...opts].sort(() => Math.random() - 0.5);
    }

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getGrade(score, total) {
        if (total === 0) return 'N/A';
        const pct = (score / total) * 100;
        if (pct >= 90) return 'A+ 🌟';
        if (pct >= 80) return 'A 😄';
        if (pct >= 70) return 'B+ 👍';
        if (pct >= 60) return 'B 🙂';
        if (pct >= 50) return 'C 😐';
        return 'F 😢';
    }

    // ── DOM refs ─────────────────────────────────────────
    const livesEl   = document.getElementById('quizLives');
    const scoreEl   = document.getElementById('quizScore');
    const streakEl  = document.getElementById('quizStreak');
    const levelEl   = document.getElementById('quizLevel');
    const timerEl   = document.getElementById('quizTimer');
    const board     = document.getElementById('quizBoard');
    const optWrap   = document.getElementById('quizOptions');
    const msgEl     = document.getElementById('quizMessage');
    const startBtn  = document.getElementById('quizStartBtn');
    const resetBtn  = document.getElementById('quizResetBtn');

    // ── state ─────────────────────────────────────────────
    let lives, score, streak, bestStreak, difficulty, total, gameRunning;
    let timer;
    let timeLeft;

    function resetState() {
        lives = 3; score = 0; streak = 0;
        bestStreak = 0; difficulty = 1;
        total = 0; gameRunning = false;
    }
    function getTimerDuration() {
        if (streak >= 9) return 5;
        if (streak >= 6) return 6;
        if (streak >= 3) return 8;
        return 10;
    }
    function updateTimerColor() {
        if (timeLeft <= 2) {
            timerEl.style.color = '#ff3b30';
        } else if (timeLeft <= 5) {
            timerEl.style.color = '#ff9500';
        } else {
            timerEl.style.color = '#34c759';
        }
    }

    function startTimer() {
        clearInterval(timer);

        timeLeft = getTimerDuration();
        timerEl.textContent = `⏳ ${timeLeft}`;
        updateTimerColor();

        timer = setInterval(() => {
            timeLeft--;

            timerEl.textContent = `⏳ ${timeLeft}`;
            updateTimerColor();

            if (timeLeft <= 0) {
                clearInterval(timer);
                handleTimeout();
            }
        }, 1000);
    }

    function handleTimeout() {
        lives--;
        streak = 0;

        msgEl.style.color = 'var(--danger-color)';
        msgEl.textContent = '⏰ Time Up!';

        updateHUD();

        if (lives <= 0) {
            setTimeout(gameOver, 900);
        } else {
            setTimeout(showQuestion, 1200);
        }
    }

    function updateHUD() {
        livesEl.textContent  = '❤️ '.repeat(lives) + '🖤 '.repeat(3 - lives);
        scoreEl.textContent  = score;
        streakEl.textContent = `🔥 ${streak}`;
        const labels = { 1: '🟢 Easy', 2: '🟡 Medium', 3: '🔴 Hard' };
        levelEl.textContent  = labels[difficulty];
    }

    function showQuestion() {
        if (!gameRunning) return;

        if (streak >= 6 && difficulty < 3) difficulty = 3;
        else if (streak >= 3 && difficulty < 2) difficulty = 2;

        const { question, correct, fixedOptions } = generateQuestion(difficulty);
        
        // use fixedOptions when the question has a constrained answer domain
        // (e.g. prime Yes/No); otherwise generate plausible numeric distractors.
        const options = fixedOptions ? fixedOptions : generateOptions(correct);
        
        const correctIdx = options.indexOf(correct);

        board.innerHTML = `<p class="quiz-question">❓ ${question}</p>`;
        optWrap.textContent = '';
        msgEl.textContent = '';
        total += 10;

       const LABELS = ['A', 'B', 'C', 'D'];
const COLORS = ['#6366f1', '#ec4899', '#f59e0b', '#10b981'];

options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option-btn';

    // Circle with A/B/C/D
    const circle = document.createElement('span');
    circle.className = 'option-circle';
    circle.textContent = LABELS[i];
    circle.style.color = COLORS[i];
    circle.style.borderColor = COLORS[i];
    circle.style.background = COLORS[i] + '22';

    // Option text
    const text = document.createElement('span');
    text.textContent = opt;

    btn.appendChild(circle);
    btn.appendChild(text);
    btn.addEventListener('click', () => handleAnswer(i, correctIdx, correct, opt));
    optWrap.appendChild(btn);
});

        updateHUD();
        startTimer();
    }

    function handleAnswer(chosen, correctIdx, correct, chosenVal) {
        clearInterval(timer);
        const btns = optWrap.querySelectorAll('.quiz-option-btn');
        btns.forEach(b => b.disabled = true);
        btns[correctIdx].classList.add('correct');

        if (chosen === correctIdx) {
            streak++;
            bestStreak = Math.max(bestStreak, streak);
            score += 10 + timeLeft;
            let msg = `✅ Correct! +${10 + timeLeft}`;

            if ([3, 6, 9].includes(streak)) {
                score += 5;
                total += 5;
                msg += ` 🎉 Streak Bonus +5!`;
            }
            msgEl.style.color = 'var(--success-color)';
            msgEl.textContent = msg;

        } else {
            btns[chosen].classList.add('wrong');
            lives--;
            streak = 0;
            msgEl.style.color = 'var(--danger-color)';
            msgEl.textContent = `❌ Wrong! Answer was ${correct}`;
        }

        updateHUD();

        if (lives <= 0) {
            setTimeout(gameOver, 900);
        } else {
            setTimeout(showQuestion, 1200);
        }
    }

    function gameOver() {
        clearInterval(timer);
        timerEl.textContent = '⏳ 0';
        timerEl.style.color = '#ff3b30';
        gameRunning = false;
        optWrap.textContent = '';
        board.innerHTML = `
            <div>
                <p class="quiz-gameover">💀 Game Over!</p>
                <p>⭐ Score: ${score}</p>
                <p>🔥 Best Streak: ${bestStreak}</p>
                <p>🏆 Grade: ${getGrade(score, total)}</p>
            </div>`;
        msgEl.textContent = '';
        startBtn.textContent = '▶️ Play Again';
    }

    function startGame() {
        resetState();
        gameRunning = true;
        startBtn.textContent = '▶️ Restart';
        msgEl.textContent = '';
        showQuestion();
    }

    resetState();
    updateHUD();

    startBtn.addEventListener('click', startGame);
    resetBtn.addEventListener('click', () => {
        clearInterval(timer);
        gameRunning = false;
        timeLeft = 10;
        timerEl.textContent = '⏳ 10';
        timerEl.style.color = '#34c759';
        resetState();
        updateHUD();
        board.innerHTML = '<p class="quiz-start-msg">Press Start to Play! 🎮</p>';
        optWrap.textContent = '';
        msgEl.textContent = '';
        startBtn.textContent = '▶️ Start';
    });
}
