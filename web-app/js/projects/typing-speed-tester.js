function getTypingSpeedTesterHTML() {
    return `
        <style>
            .typing-tester {
                display: grid;
                gap: 1rem;
                min-height: auto;
                padding: 1rem;
            }

            .typing-tester .stage {
                background: linear-gradient(180deg, rgba(34, 197, 94, 0.06), rgba(15, 23, 42, 0.04));
                border-radius: 24px;
                padding: 2rem;
                border: 1px solid transparent;
                transition: transform 0.3s ease, opacity 0.3s ease;
            }

            .typing-tester .stage.hidden {
                opacity: 0;
                transform: translateY(20px);
                pointer-events: none;
                height: 0;
                overflow: hidden;
            }

            .typing-tester .hero {
                display: grid;
                gap: 1rem;
                justify-items: center;
                text-align: center;
                max-width: 740px;
                margin: 0 auto;
            }

            .typing-tester .hero-tag {
                font-size: 0.9rem;
                letter-spacing: 0.2em;
                text-transform: uppercase;
                color: var(--accent-color);
                opacity: 0.9;
            }

            .typing-tester .hero-title {
                font-size: clamp(2rem, 4vw, 3.4rem);
                line-height: 1.05;
                margin: 0;
            }

            .typing-tester .hero-copy {
                max-width: 680px;
                color: var(--text-secondary);
                line-height: 1.75;
                margin: 0;
            }

            .typing-tester .mode-selector {
                display: inline-flex;
                gap: 0.75rem;
                flex-wrap: wrap;
                justify-content: center;
            }

            .typing-tester .mode-btn {
                border: 1px solid var(--border-color);
                background: var(--panel-color);
                color: var(--text-color);
                font-weight: 700;
                border-radius: 999px;
                padding: 0.9rem 1.4rem;
                cursor: pointer;
                transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
            }

            .typing-tester .mode-btn:hover {
                transform: translateY(-1px);
                border-color: var(--accent-color);
            }

            .typing-tester .mode-btn.active {
                background: var(--accent-color);
                color: var(--on-accent);
                border-color: var(--accent-color);
            }


    let startTime = null;
    let currentSentence = "";



            .typing-tester .hero-footer {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }

            .typing-tester .hero-meta {
                color: var(--text-secondary);
                font-size: 0.95rem;
            }

            .typing-tester .game-header {
                display: grid;
                grid-template-columns: repeat(2, minmax(0, 1fr));
                gap: 1rem;
                align-items: center;
                margin-bottom: 1rem;
            }

            .typing-tester .game-label,
            .typing-tester .game-meter {
                padding: 1rem 1.3rem;
                border-radius: 18px;
                background: var(--panel-color);
                border: 1px solid var(--border-color);
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 0.75rem;
            }

            .typing-tester .badge {
                display: inline-flex;
                font-size: 0.85rem;
                text-transform: uppercase;
                letter-spacing: 0.12em;
                color: var(--text-secondary);
            }

            .typing-tester .typing-panel {
                display: grid;
                gap: 1.25rem;
            }

            .typing-tester .sentence-card {
                min-height: 100px;
                border-radius: 22px;
                padding: 1.4rem;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                color: var(--text-color);
                font-size: 1.05rem;
                line-height: 1.9;
                white-space: pre-wrap;
                transition: opacity 0.2s ease, transform 0.2s ease;
            }
            .typing-tester .sentence-card.sentence-loading {
                opacity: 0.7;
                transform: translateY(8px);
            }

            .typing-tester .sentence-card span {
                transition: color 0.2s ease;
            }
        sentenceElement.innerHTML =
            currentSentence
                .split("")
                .map(function (char) {
                    return "<span>" + char + "</span>";
                })
                .join("");

        inputElement.value = "";
        inputElement.disabled = false;
        inputElement.removeAttribute("aria-disabled");
        inputElement.focus({ preventScroll: true });

        result.innerHTML = "";
        startTime = Date.now();
    }

            .typing-tester .sentence-card .correct { color: #22c55e; }
            .typing-tester .sentence-card .incorrect { color: #ef4444; }
            .typing-tester .sentence-card .current { background: rgba(34,197,94,0.12); box-shadow: 0 0 8px rgba(34,197,94,0.12); border-radius:4px; }
            .typing-tester .sentence-card .pending { color: color-mix(in srgb, var(--text-secondary) 60%, transparent); }

            .typing-tester .typing-input {
                width: 100%;
                min-height: 140px;
                border-radius: 20px;
                padding: 1.2rem;
                font-size: 1rem;
                resize: vertical;
                border: 1px solid var(--border-color);
                background: var(--panel-color);
                color: var(--text-color);
                transition: border-color 0.2s ease, box-shadow 0.2s ease;
            }

            .typing-tester .typing-input:focus {
                outline: none;
                border-color: var(--accent-color);
                box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.12);
            }

            .typing-tester .action-row {
                display: flex;
                flex-wrap: wrap;
                gap: 0.9rem;
            }

            .typing-tester .btn-secondary {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                background: var(--panel-color);
                color: var(--text-color);
                border: 1px solid var(--border-color);
            }

            .typing-tester .btn-play {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 999px;
                padding: 0.7rem 1.2rem;
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }

            .typing-tester .btn-play:hover {
                transform: translateY(-2px);
            }

            /* Prominent main start button */
            .typing-tester .start-main {
                font-size: 1.15rem;
                padding: 1.05rem 2.2rem;
                border-radius: 14px;
                box-shadow: 0 8px 24px rgba(34,197,94,0.12);
                transform: translateZ(0);
                transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
            }

            .typing-tester .start-main:hover {
                transform: translateY(-6px) scale(1.02);
                box-shadow: 0 14px 36px rgba(34,197,94,0.18);
            }

            .typing-tester .start-main:active {
                transform: translateY(-2px) scale(0.995);
                box-shadow: 0 8px 20px rgba(34,197,94,0.14);
            }


        if (!startTime || !currentSentence) return;

        const typedText = inputElement.value;
        const totalTime = Math.max((Date.now() - startTime) / 1000, 0.001);

        .typing-tester .compact-stats-bar {
            display: flex;
            flex-wrap: wrap;

            justify-content: space-evenly;
            align-items: center;

            padding: 12px 20px;
            margin-bottom: 1rem;

            background: var(--panel-color);
            border: 1px solid var(--border-color);
            border-radius: 14px;

            font-size: 15px;
            font-weight: 600;
        }
            .typing-tester .compact-stat {
                white-space: nowrap;
                padding: 0 18px;
            }

        .typing-tester .compact-stats-bar span {
            white-space: nowrap;
            color: var(--text-color);
        }

        .typing-tester .compact-stats-bar strong {
            color: var(--accent-color);
            font-weight: 700;
        }

            .typing-tester .game-top {
                display: grid;
                gap: 1rem;
                justify-items: center;
                text-align: center;
                margin-bottom: 1.25rem;
            }
        
            spans[i].style.color = "";
        }

        for (let i = 0; i < typedText.length; i++) {

            .typing-tester .game-top .hero-title {
                margin-bottom: 0;
            }

            .typing-tester .game-mode-selector {
                justify-content: center;
            }

.typing-tester .result-summary {
    line-height: 1.4 !important;
    padding: 1.2rem !important;
}

.typing-tester .result-panel {
    background: var(--panel-color);
    border: 1px solid var(--border-color);
    border-radius: 20px;
    padding: 1rem 1.2rem;
    color: var(--text-color);

    min-height: auto;

    line-height: 1.3;

    white-space: pre-line;
}

            .typing-tester .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                gap: 0.5rem;
            }
                if (spans[i]) spans[i].style.color = "#22c55e";

            } else {
                incorrectChars++;
                if (spans[i]) spans[i].style.color = "#ef4444";
            }
        }

        const accuracy =
            currentSentence.length
                ? Math.round(
                    (correctChars / currentSentence.length) * 100
                )
                : 0;

            .typing-tester .stat-card {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 0.9rem 1rem;
                text-align: left;
            }

            .typing-tester .stat-card .value {
                font-weight: 800;
                font-size: 1.1rem;
                color: var(--accent-color);
            }

            @media (max-width: 680px) {
                .typing-tester .game-header {
                    grid-template-columns: 1fr;
                }
            }
        </style>

        <div class="typing-tester">
            <section class="stage stage-start">
                <div class="hero">
                    <span class="hero-tag">Typing Game</span>
                    <h1 class="hero-title">Typing Speed Tester</h1>
                    <p class="hero-copy">Sharpen your typing, beat the clock, and compare your speed across three difficulty levels.</p>

                    <div class="mode-selector" role="group" aria-label="Choose difficulty">
                        <button type="button" class="mode-btn active" data-mode="easy">Easy</button>
                        <button type="button" class="mode-btn" data-mode="medium">Medium</button>
                        <button type="button" class="mode-btn" data-mode="hard">Hard</button>
                    </div>

                    <div class="hero-footer">
                        <span class="hero-meta">Easy: 60s • Medium: 45s • Hard: 30s</span>
                        <button id="startTypingBtn" class="btn-play btn-primary start-main">Start Test</button>
                    </div>
                </div>
            </section>

  <section class="stage stage-result hidden">
    <div class="typing-panel" style="gap: 0.5rem;">
        <div class="sentence-card result-summary" id="resultSummary" style="min-height: auto; padding: 1.2rem;">
            <div id="resultMessage" style="font-size: 24px; font-weight: 800; margin: 0 0 0.5rem 0; line-height: 1.2;">Results</div>
            <div id="resultDetails" style="margin-top: 0;">Final results will appear here.</div>
        </div>
        <div style="display:flex; gap:0.75rem; margin-top: 0.5rem; justify-content: center;">
            <button id="restartBtn" class="btn-play btn-primary">Restart Test</button>
            <button id="retryBtn" class="btn-play btn-secondary">Retry Same Difficulty</button>
        </div>
    </div>
</section>

            <section class="stage stage-game hidden">
                <div class="game-top">
                    <span class="hero-tag">Typing Game</span>
                    <h1 class="hero-title">Typing Speed Tester</h1>
                    <div class="mode-selector game-mode-selector" role="group" aria-label="Change difficulty">
                        <button type="button" class="mode-btn active" data-mode="easy">Easy</button>
                        <button type="button" class="mode-btn" data-mode="medium">Medium</button>
                        <button type="button" class="mode-btn" data-mode="hard">Hard</button>
                    </div>
                </div>

            <div class="compact-stats-bar">
                <span class="compact-stat">⏱️ Time: <span id="timerDisplay">40s</span></span>
                <span class="compact-stat">🚀 Speed: <span id="headerWpm">0</span> WPM</span>
                <span class="compact-stat">🎯 Accuracy: <span id="headerAccuracy">0%</span></span>
                <span class="compact-stat">❌ Errors: <span id="headerMistakes">0</span></span>
            </div>

                <div class="typing-panel">
                    <div id="typingSentence" class="sentence-card">Pick a difficulty and start the test.</div>

                    <textarea id="typingInput" class="typing-input" placeholder="Type the sentence exactly as shown..." rows="5" disabled aria-label="Typing input"></textarea>

                    <div class="stats-grid" style="margin-top:0.5rem;">
                        <div class="stat-card"><div>WPM</div><div id="statWpm" class="value">0</div></div>
                        <div class="stat-card"><div>Accuracy</div><div id="statAccuracy" class="value">0%</div></div>
                        <div class="stat-card"><div>Errors</div><div id="statErrors" class="value">0</div></div>
                        <div class="stat-card"><div>Correct</div><div id="statCorrect" class="value">0</div></div>
                        <div class="stat-card"><div>Incorrect</div><div id="statIncorrect" class="value">0</div></div>
                        <div class="stat-card"><div>Remaining</div><div id="statRemaining" class="value">60s</div></div>
                        <div class="stat-card" style="grid-column: span 2;"><div>Difficulty</div><div id="statDifficulty" class="value">Easy</div></div>
                    </div>

                    <div class="action-row">
                        <button id="startInlineBtn" class="btn-play btn-primary">Start</button>
                        <button id="newSentenceBtn" class="btn-play btn-primary">New Sentence</button>
                        <button id="resetBtn" class="btn-play btn-secondary">Reset Test</button>
                    </div>

                    <div id="typingResult" class="result-panel">Your speed and accuracy will appear here.</div>
                </div>
            </section>
        </div>
    `;
}

function initTypingSpeedTester() {
    const sentencesByDifficulty = {
        easy: [
            "Typing boosts productivity.",
            "Short words are easier to type.",
            "Practice daily for better speed.",
            "Keep fingers on the home row.",
            "Every keystroke helps you improve."
        ],
        medium: [
            "Learning Python, step by step, becomes easier with practice.",
            "Don't forget to save your progress before closing the editor.",
            "Can you type this sentence accurately within the time limit?",
            "A careful typist checks each sentence for punctuation.",
            "Mixed capitalization and punctuation demand extra focus."
        ],
        hard: [
            "Error 404: Resource not found; please retry after 5 seconds.",
            "The function calculate_total(price, tax_rate) returned an unexpected value.",
            "\"Practice daily,\" said the mentor, \"because consistency matters.\"",
            "Use [Ctrl+S] to save changes; then review the output carefully.",
            "Note: accuracy, speed, and punctuation all matter in this test."
        ]
    };

    const difficultyConfig = {
        easy: { seconds: 60 },
        medium: { seconds: 45 },
        hard: { seconds: 30 }
    };

    const root = document.querySelector('.typing-tester');
    if (!root) return;
    const startStage = root.querySelector('.stage-start');
    const gameStage = root.querySelector('.stage-game');
    const resultStage = root.querySelector('.stage-result');
    const difficultyButtons = root.querySelectorAll('.mode-btn');
    const sentenceElement = document.getElementById('typingSentence');
    const inputElement = document.getElementById('typingInput');
    const startButton = document.getElementById('startTypingBtn');
    const startInlineBtn = document.getElementById('startInlineBtn');
    const newSentenceBtn = document.getElementById('newSentenceBtn');
    const resetBtn = document.getElementById('resetBtn');
    const timerDisplay = document.getElementById('timerDisplay');
    const result = document.getElementById('typingResult');
    const headerWpm = document.getElementById('headerWpm');
    const headerAccuracy = document.getElementById('headerAccuracy');
    const headerMistakes = document.getElementById('headerMistakes');
    const headerDifficulty = document.getElementById('headerDifficulty');
    // stats
    const statWpm = document.getElementById('statWpm');
    const statAccuracy = document.getElementById('statAccuracy');
    const statErrors = document.getElementById('statErrors');
    const statCorrect = document.getElementById('statCorrect');
    const statIncorrect = document.getElementById('statIncorrect');
    const statRemaining = document.getElementById('statRemaining');
    const statDifficulty = document.getElementById('statDifficulty');
    // result stage elements
    const resultSummary = document.getElementById('resultSummary');
    const resultMessage = document.getElementById('resultMessage');
    const resultDetails = document.getElementById('resultDetails');
    const restartBtnEl = document.getElementById('restartBtn');
    const retryBtnEl = document.getElementById('retryBtn');

    let selectedDifficulty = 'easy';
    let currentSentence = '';
    let startTime = null; // will be set on first keystroke
    let timerInterval = null;
    let isRunning = false; // true when timer running
    let sessionStarted = false;
    let totalCorrectChars = 0;
    let totalIncorrectChars = 0;
    let totalTypedChars = 0;
    let totalWordsTyped = 0;
    let sentencesCompleted = 0;

    function formatDifficultyLabel(mode) {
        return mode.charAt(0).toUpperCase() + mode.slice(1);
    }

    function getSentencePool() {
        return sentencesByDifficulty[selectedDifficulty] || sentencesByDifficulty.easy;
    }

    function updateDifficultyDisplay() {
        timerDisplay.textContent = `${difficultyConfig[selectedDifficulty].seconds}s`;
        if (statRemaining) statRemaining.textContent = `${difficultyConfig[selectedDifficulty].seconds}s`;
        if (statDifficulty) statDifficulty.textContent = formatDifficultyLabel(selectedDifficulty);
        if (headerDifficulty) headerDifficulty.textContent = formatDifficultyLabel(selectedDifficulty);
    }

    function resetUI() {
        clearInterval(timerInterval);
        timerInterval = null;
        startTime = null;
        isRunning = false;
        sessionStarted = false;
        totalCorrectChars = 0;
        totalIncorrectChars = 0;
        totalTypedChars = 0;
        totalWordsTyped = 0;
        sentencesCompleted = 0;
        inputElement.value = '';
        inputElement.disabled = true;
        inputElement.blur();
        renderSentence('Pick a difficulty and start the test.');
        // mark pending characters
        const spans = sentenceElement.querySelectorAll('span');
        spans.forEach(s => { s.className = 'pending'; });
        result.textContent = 'Your speed and accuracy will appear here.';
        updateDifficultyDisplay();
        if (headerWpm) headerWpm.textContent = '0';
        if (headerAccuracy) headerAccuracy.textContent = '0%';
        if (headerMistakes) headerMistakes.textContent = '0';
    }

    function renderSentence(sentence) {
        sentenceElement.innerHTML = sentence
            .split('')
            .map(char => `<span class="pending">${char}</span>`)
            .join('');
    }

    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        isRunning = false;
    }

    function finishTest(hasTimedOut = false) {
        stopTimer();
        inputElement.disabled = true;
        inputElement.blur();

        const typedText = inputElement.value;
        const elapsedSeconds = startTime ? Math.min((Date.now() - startTime) / 1000, difficultyConfig[selectedDifficulty].seconds) : 0;
        const currentStats = calculateMetrics(typedText, currentSentence);

        const finalCorrect = totalCorrectChars + currentStats.correct;
        const finalIncorrect = totalIncorrectChars + currentStats.incorrect;
        const finalChars = totalTypedChars + currentStats.chars;
        const finalWords = totalWordsTyped + currentStats.words;
        const finalWpm = elapsedSeconds > 0 ? Math.round((finalWords / elapsedSeconds) * 60) : 0;
        const finalAccuracy = finalChars ? Math.round((finalCorrect / finalChars) * 100) : 0;

        if (statWpm) statWpm.textContent = finalWpm;
        if (statAccuracy) statAccuracy.textContent = `${finalAccuracy}%`;
        if (statErrors) statErrors.textContent = finalIncorrect;
        if (statCorrect) statCorrect.textContent = finalCorrect;
        if (statIncorrect) statIncorrect.textContent = finalIncorrect;
        if (statRemaining) statRemaining.textContent = `0s`;

        if (headerWpm) headerWpm.textContent = finalWpm;
        if (headerAccuracy) headerAccuracy.textContent = `${finalAccuracy}%`;
        if (headerMistakes) headerMistakes.textContent = finalIncorrect;

// Remove default margins or native headings completely
resultMessage.innerHTML = hasTimedOut ? '⏱️ Time is up!' : '🎉 Test completed!';

resultDetails.innerHTML = `
    <div style="display: flex; flex-direction: column; gap: 0.4rem; padding-top: 0.2rem;">
        <div><strong>🚀 Final WPM:</strong> ${finalWpm}</div>
        <div><strong>🎯 Accuracy:</strong> ${finalAccuracy}%</div>
        <div><strong>⌨️ Total characters typed:</strong> ${finalChars}</div>
        <div><strong>❌ Total mistakes:</strong> ${finalIncorrect}</div>
        <div><strong>📖 Sentences completed:</strong> ${sentencesCompleted}</div>
        <div><strong>⚙️ Difficulty:</strong> ${formatDifficultyLabel(selectedDifficulty)}</div>
    </div>
`;

        gameStage.classList.add('hidden');
        resultStage.classList.remove('hidden');
    }

    function startTimer() {
        stopTimer();
        const maxSeconds = difficultyConfig[selectedDifficulty].seconds;
        timerInterval = setInterval(() => {
            if (!startTime) return;
            const elapsedSeconds = (Date.now() - startTime) / 1000;
            const remaining = Math.max(0, Math.ceil(maxSeconds - elapsedSeconds));
            timerDisplay.textContent = `${remaining}s`;
            if (statRemaining) statRemaining.textContent = `${remaining}s`;
            if (remaining <= 0) {
                finishTest(true);
            }
        }, 250);
        isRunning = true;
    }

    function generateSentence({ startSession = false } = {}) {
        const pool = getSentencePool();
        currentSentence = pool[Math.floor(Math.random() * pool.length)];
        renderSentence(currentSentence);
        sentenceElement.classList.add('sentence-loading');
        requestAnimationFrame(() => sentenceElement.classList.remove('sentence-loading'));
        inputElement.value = '';
        inputElement.disabled = false;
        inputElement.focus({ preventScroll: true });
        if (startSession && !sessionStarted) {
            sessionStarted = true;
            startTime = Date.now();
            startTimer();
        }
        result.textContent = startSession ? 'Timer started. Keep typing to continue.' : 'Start typing to begin the countdown.';
        // ensure pending state
        const spans = sentenceElement.querySelectorAll('span');
        spans.forEach(s => s.className = 'pending');
    }

    function setDifficulty(mode, { resetGame = false } = {}) {
        selectedDifficulty = mode;
        difficultyButtons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === mode);
        });
        updateDifficultyDisplay();
        if (resetGame && startStage.classList.contains('hidden')) {
            resetUI();
            generateSentence({ startSession: false });
        }
    }

    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            setDifficulty(btn.dataset.mode, { resetGame: startStage.classList.contains('hidden') });
        });
    });

    startButton.addEventListener('click', () => {
        startStage.classList.add('hidden');
        // ensure result stage hidden
        resultStage.classList.add('hidden');
        gameStage.classList.remove('hidden');
        resetUI();
        generateSentence({ startSession: true });
    });

    newSentenceBtn.addEventListener('click', () => {
        generateSentence();
    });

    // Inline start button (in-game) — prepares a new sentence and focuses input
    if (startInlineBtn) {
        startInlineBtn.addEventListener('click', () => {
            // Inline start: reset and auto-start the test
            resetUI();
            generateSentence({ startSession: true });
        });
    }

    // Restart test: go back to home/start
    restartBtnEl.addEventListener('click', () => {
        resetUI();
        resultStage.classList.add('hidden');
        gameStage.classList.add('hidden');
        startStage.classList.remove('hidden');
    });

    // Retry same difficulty: go back to game stage and start a new sentence
    retryBtnEl.addEventListener('click', () => {
        resultStage.classList.add('hidden');
        gameStage.classList.remove('hidden');
        resetUI();
        generateSentence({ startSession: true });
    });

    resetBtn.addEventListener('click', () => {
        resetUI();
        gameStage.classList.add('hidden');
        resultStage.classList.add('hidden');
        startStage.classList.remove('hidden');
    });

    function calculateMetrics(text, sentence) {
        const cappedText = text.slice(0, sentence.length);
        let correct = 0;
        let incorrect = 0;
        for (let index = 0; index < cappedText.length; index += 1) {
            const typedChar = cappedText[index];
            const expectedChar = sentence[index] || '';
            if (typedChar === expectedChar) {
                correct += 1;
            } else {
                incorrect += 1;
            }
        }
        const chars = cappedText.length;
        const words = cappedText.trim() ? cappedText.trim().split(/\s+/).length : 0;
        return { correct, incorrect, chars, words };
    }

    inputElement.addEventListener('input', () => {
        const typedText = inputElement.value;

        if (!startTime) {
            startTime = Date.now();
            startTimer();
        }

        const spans = sentenceElement.querySelectorAll('span');
        const currentStats = calculateMetrics(typedText, currentSentence);
        let correctChars = 0;
        let incorrectChars = 0;

        spans.forEach((span, index) => {
            span.classList.remove('correct', 'incorrect', 'current', 'pending');

            const expected = currentSentence[index];
            const typed = typedText[index];

            if (index === typedText.length) {
                span.classList.add('current');
                return;
            }

            if (typed == null) {
                span.classList.add('pending');
                return;
            }

            if (typed === expected) {
                span.classList.add('correct');
                correctChars += 1;
            } else {
                span.classList.add('incorrect');
                incorrectChars += 1;
            }
        });

        const currentTime = startTime ? (Date.now() - startTime) / 1000 : 0;
        const liveCorrect = totalCorrectChars + currentStats.correct;
        const liveIncorrect = totalIncorrectChars + currentStats.incorrect;
        const liveChars = totalTypedChars + currentStats.chars;
        const liveWords = totalWordsTyped + currentStats.words;
        const accuracy = liveChars ? Math.round((liveCorrect / liveChars) * 100) : 0;
        const wpm = currentTime > 0 ? Math.round((liveWords / currentTime) * 60) : 0;

        if (statWpm) statWpm.textContent = wpm;
        if (statAccuracy) statAccuracy.textContent = `${accuracy}%`;
        if (statErrors) statErrors.textContent = liveIncorrect;
        if (statCorrect) statCorrect.textContent = liveCorrect;
        if (statIncorrect) statIncorrect.textContent = liveIncorrect;
        if (statRemaining && startTime) {
            const remaining = Math.max(0, Math.ceil(difficultyConfig[selectedDifficulty].seconds - currentTime));
            statRemaining.textContent = `${remaining}s`;
        }

        if (headerWpm) headerWpm.textContent = wpm;
        if (headerAccuracy) headerAccuracy.textContent = `${accuracy}%`;
        if (headerMistakes) headerMistakes.textContent = liveIncorrect;

        result.innerHTML = `\n            ⏱️ Time: ${currentTime.toFixed(1)} sec<br>\n            🚀 Speed: ${wpm} WPM<br>\n            🎯 Accuracy: ${accuracy}%<br>\n            ✅ Correct: ${liveCorrect}<br>\n            ❌ Incorrect: ${liveIncorrect}`;

        if (typedText.length >= currentSentence.length) {
            totalCorrectChars += currentStats.correct;
            totalIncorrectChars += currentStats.incorrect;
            totalTypedChars += currentStats.chars;
            totalWordsTyped += currentStats.words;
            sentencesCompleted += 1;
            generateSentence();

        }
    });

    resetUI();
    setDifficulty(selectedDifficulty);
}
