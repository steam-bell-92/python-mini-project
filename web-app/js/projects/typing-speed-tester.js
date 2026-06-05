function getTypingSpeedTesterHTML() {
    return `
        <div class="project-content">
            <style>
                .typing-tester {
                    padding: 1rem;
                    max-width: 900px;
                    margin: 0 auto;
                }
                .stage {
                    background: var(--surface-color);
                    border-radius: 24px;
                    padding: 2rem;
                    border: 1px solid var(--border-color);
                }
                .stage.hidden {
                    display: none;
                }
                .hero {
                    text-align: center;
                }
                .hero-tag {
                    font-size: 0.9rem;
                    letter-spacing: 0.2em;
                    text-transform: uppercase;
                    color: var(--accent-color);
                }
                .hero-title {
                    font-size: 2rem;
                    margin: 0.5rem 0;
                }
                .hero-copy {
                    color: var(--text-secondary);
                }
                .mode-selector {
                    display: flex;
                    gap: 0.75rem;
                    justify-content: center;
                    margin: 1rem 0;
                }
                .mode-btn {
                    border: 1px solid var(--border-color);
                    background: var(--bg-color);
                    color: var(--text-color);
                    padding: 0.5rem 1rem;
                    border-radius: 999px;
                    cursor: pointer;
                }
                .mode-btn.active {
                    background: var(--accent-color);
                    color: white;
                }
                .btn-play {
                    padding: 0.75rem 1.5rem;
                    border-radius: 999px;
                    cursor: pointer;
                    background: var(--accent-color);
                    color: white;
                    border: none;
                }
                .btn-secondary {
                    background: var(--bg-color);
                    border: 1px solid var(--border-color);
                    color: var(--text-color);
                }
                .sentence-card {
                    background: var(--bg-color);
                    border: 1px solid var(--border-color);
                    border-radius: 20px;
                    padding: 1.5rem;
                    font-size: 1.2rem;
                    line-height: 1.8;
                    margin-bottom: 1rem;
                }
                .sentence-card span.correct {
                    color: #22c55e;
                }
                .sentence-card span.incorrect {
                    color: #ef4444;
                }
                .sentence-card span.current {
                    background: rgba(34,197,94,0.2);
                    border-radius: 4px;
                }
                .sentence-card span.pending {
                    color: var(--text-secondary);
                    opacity: 0.5;
                }
                .typing-input {
                    width: 100%;
                    padding: 1rem;
                    border-radius: 20px;
                    border: 1px solid var(--border-color);
                    background: var(--bg-color);
                    color: var(--text-color);
                    font-size: 1rem;
                    resize: vertical;
                }
                .compact-stats-bar {
                    display: flex;
                    justify-content: space-around;
                    background: var(--bg-color);
                    border: 1px solid var(--border-color);
                    border-radius: 14px;
                    padding: 0.75rem;
                    margin-bottom: 1rem;
                }
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
                    gap: 0.5rem;
                    margin: 1rem 0;
                }
                .stat-card {
                    background: var(--bg-color);
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 0.75rem;
                    text-align: center;
                }
                .stat-card .value {
                    font-size: 1.2rem;
                    font-weight: bold;
                    color: var(--accent-color);
                }
                .action-row {
                    display: flex;
                    gap: 0.75rem;
                    justify-content: center;
                    margin: 1rem 0;
                }
                .result-panel {
                    background: var(--bg-color);
                    border: 1px solid var(--border-color);
                    border-radius: 20px;
                    padding: 1rem;
                    margin-top: 1rem;
                }
            </style>

            <div class="typing-tester">
                <!-- Start Stage -->
                <div class="stage stage-start" id="startStage">
                    <div class="hero">
                        <div class="hero-tag">Typing Game</div>
                        <h1 class="hero-title">⌨️ Typing Speed Tester</h1>
                        <p class="hero-copy">Test your typing speed and accuracy</p>
                        <div class="mode-selector" id="difficultySelector">
                            <button class="mode-btn active" data-mode="easy">Easy (60s)</button>
                            <button class="mode-btn" data-mode="medium">Medium (45s)</button>
                            <button class="mode-btn" data-mode="hard">Hard (30s)</button>
                        </div>
                        <button id="startTestBtn" class="btn-play">Start Test 🚀</button>
                    </div>
                </div>

                <!-- Game Stage -->
                <div class="stage stage-game hidden" id="gameStage">
                    <div class="compact-stats-bar">
                        <span>⏱️ Time: <span id="timerDisplay">60s</span></span>
                        <span>🚀 WPM: <span id="wpmDisplay">0</span></span>
                        <span>🎯 Accuracy: <span id="accuracyDisplay">0%</span></span>
                        <span>❌ Errors: <span id="errorsDisplay">0</span></span>
                    </div>

                    <div id="sentenceCard" class="sentence-card">Select difficulty and start test</div>
                    
                    <textarea id="typingInput" class="typing-input" placeholder="Type the sentence here..." rows="4" disabled></textarea>

                    <div class="stats-grid">
                        <div class="stat-card"><div>WPM</div><div id="statWpm" class="value">0</div></div>
                        <div class="stat-card"><div>Accuracy</div><div id="statAccuracy" class="value">0%</div></div>
                        <div class="stat-card"><div>Correct</div><div id="statCorrect" class="value">0</div></div>
                        <div class="stat-card"><div>Incorrect</div><div id="statIncorrect" class="value">0</div></div>
                    </div>

                    <div class="action-row">
                        <button id="newSentenceBtn" class="btn-play">New Sentence</button>
                        <button id="resetGameBtn" class="btn-play btn-secondary">Reset</button>
                    </div>

                    <div id="resultPanel" class="result-panel">Your results will appear here</div>
                </div>

                <!-- Result Stage -->
                <div class="stage stage-result hidden" id="resultStage">
                    <div class="hero">
                        <h1 class="hero-title">📊 Test Complete!</h1>
                        <div id="finalResults" class="result-panel" style="margin: 1rem 0;"></div>
                        <div class="action-row">
                            <button id="playAgainBtn" class="btn-play">Play Again</button>
                            <button id="retryBtn" class="btn-play btn-secondary">Retry Same Level</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function initTypingSpeedTester() {
    console.log('⌨️ Initializing Typing Speed Tester...');
    
    // Sentences for each difficulty
    const sentences = {
        easy: [
            "The quick brown fox jumps over the lazy dog.",
            "Typing is a useful skill to learn and practice daily.",
            "Practice makes perfect when learning to type faster.",
            "Keep your fingers on the home row for better accuracy."
        ],
        medium: [
            "Learning to type efficiently requires consistent practice and patience over time.",
            "The ability to type quickly without looking at the keyboard is a valuable skill.",
            "Proper finger placement and regular typing exercises can improve your speed dramatically."
        ],
        hard: [
            "The intricacies of touch typing demand dedicated practice sessions focusing on both speed and accuracy metrics.",
            "Professional typists often achieve speeds exceeding 100 words per minute through rigorous daily training routines.",
            "Mastering the keyboard requires understanding finger placement, ergonomics, and consistent practice schedules."
        ]
    };
    
    const difficultyConfig = {
        easy: { seconds: 60, label: "Easy" },
        medium: { seconds: 45, label: "Medium" },
        hard: { seconds: 30, label: "Hard" }
    };
    
    // DOM elements
    const startStage = document.getElementById('startStage');
    const gameStage = document.getElementById('gameStage');
    const resultStage = document.getElementById('resultStage');
    const difficultyBtns = document.querySelectorAll('#difficultySelector .mode-btn');
    const startTestBtn = document.getElementById('startTestBtn');
    const sentenceCard = document.getElementById('sentenceCard');
    const typingInput = document.getElementById('typingInput');
    const timerDisplay = document.getElementById('timerDisplay');
    const wpmDisplay = document.getElementById('wpmDisplay');
    const accuracyDisplay = document.getElementById('accuracyDisplay');
    const errorsDisplay = document.getElementById('errorsDisplay');
    const statWpm = document.getElementById('statWpm');
    const statAccuracy = document.getElementById('statAccuracy');
    const statCorrect = document.getElementById('statCorrect');
    const statIncorrect = document.getElementById('statIncorrect');
    const newSentenceBtn = document.getElementById('newSentenceBtn');
    const resetGameBtn = document.getElementById('resetGameBtn');
    const resultPanel = document.getElementById('resultPanel');
    const finalResults = document.getElementById('finalResults');
    const playAgainBtn = document.getElementById('playAgainBtn');
    const retryBtn = document.getElementById('retryBtn');
    
    let selectedDifficulty = 'easy';
    let currentSentence = '';
    let startTime = null;
    let timerInterval = null;
    let isRunning = false;
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let sentencesCompleted = 0;
    
    function renderSentence(sentence) {
        if (!sentenceCard) return;
        const spans = sentence.split('').map(char => `<span class="pending">${escapeHtml(char)}</span>`).join('');
        sentenceCard.innerHTML = spans;
    }
    
    function escapeHtml(str) {
        return str.replace(/[&<>]/g, function(m) {
            if (m === '&') return '&amp;';
            if (m === '<') return '&lt;';
            if (m === '>') return '&gt;';
            return m;
        });
    }
    
    async function generateSentence() {
        if (!sentences[selectedDifficulty]) return;
        const pool = sentences[selectedDifficulty];
        currentSentence = pool[Math.floor(Math.random() * pool.length)];
        renderSentence(currentSentence);
        typingInput.value = '';
        typingInput.disabled = false;
        typingInput.focus();
        
        // Reset current test stats
        totalCorrect = 0;
        totalIncorrect = 0;
        updateStats();
        
        if (resultPanel) {
            resultPanel.innerHTML = 'Start typing to begin the timer...';
        }
    }
    
    function updateStats() {
        const total = totalCorrect + totalIncorrect;
        const accuracy = total > 0 ? Math.round((totalCorrect / total) * 100) : 0;
        if (statWpm) statWpm.textContent = '0';
        if (statAccuracy) statAccuracy.textContent = accuracy + '%';
        if (statCorrect) statCorrect.textContent = totalCorrect;
        if (statIncorrect) statIncorrect.textContent = totalIncorrect;
        if (accuracyDisplay) accuracyDisplay.textContent = accuracy + '%';
        if (errorsDisplay) errorsDisplay.textContent = totalIncorrect;
    }
    
    function calculateWPM() {
        if (!startTime) return 0;
        const elapsedMinutes = (Date.now() - startTime) / 60000;
        if (elapsedMinutes <= 0) return 0;
        const words = totalCorrect / 5; // Standard: 5 chars = 1 word
        return Math.round(words / elapsedMinutes);
    }
    
    function updateLiveStats() {
        const wpm = calculateWPM();
        if (wpmDisplay) wpmDisplay.textContent = wpm;
        if (statWpm) statWpm.textContent = wpm;
    }
    
    function startTimer() {
        if (timerInterval) clearInterval(timerInterval);
        const maxSeconds = difficultyConfig[selectedDifficulty].seconds;
        let remaining = maxSeconds;
        
        timerInterval = setInterval(() => {
            if (!startTime) return;
            const elapsed = (Date.now() - startTime) / 1000;
            remaining = Math.max(0, Math.ceil(maxSeconds - elapsed));
            timerDisplay.textContent = remaining + 's';
            
            if (remaining <= 0) {
                endTest(false);
            }
        }, 200);
    }
    
    function stopTimer() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        isRunning = false;
    }
    
    function endTest(isComplete = true) {
        stopTimer();
        typingInput.disabled = true;
        isRunning = false;
        
        const wpm = calculateWPM();
        const total = totalCorrect + totalIncorrect;
        const accuracy = total > 0 ? Math.round((totalCorrect / total) * 100) : 0;
        
        const resultsHtml = `
            <div style="text-align: center;">
                <div style="font-size: 2rem; margin-bottom: 1rem;">${isComplete ? '🎉' : '⏰'}</div>
                <div><strong>Final WPM:</strong> ${wpm}</div>
                <div><strong>Accuracy:</strong> ${accuracy}%</div>
                <div><strong>Correct Characters:</strong> ${totalCorrect}</div>
                <div><strong>Incorrect Characters:</strong> ${totalIncorrect}</div>
                <div><strong>Sentences Completed:</strong> ${sentencesCompleted}</div>
                <div><strong>Difficulty:</strong> ${difficultyConfig[selectedDifficulty].label}</div>
            </div>
        `;
        
        if (finalResults) finalResults.innerHTML = resultsHtml;
        gameStage.classList.add('hidden');
        resultStage.classList.remove('hidden');
    }
    
    function checkTyping() {
        if (!isRunning && typingInput.value.length > 0 && startTime) {
            isRunning = true;
        }
        
        const typed = typingInput.value;
        const sentence = currentSentence;
        const spans = sentenceCard.querySelectorAll('span');
        
        let correct = 0;
        let incorrect = 0;
        
        for (let i = 0; i < spans.length; i++) {
            const span = spans[i];
            const expected = sentence[i];
            const typedChar = typed[i];
            
            span.classList.remove('correct', 'incorrect', 'current', 'pending');
            
            if (i === typed.length) {
                span.classList.add('current');
                continue;
            }
            
            if (!typedChar) {
                span.classList.add('pending');
                continue;
            }
            
            if (typedChar === expected) {
                span.classList.add('correct');
                correct++;
            } else {
                span.classList.add('incorrect');
                incorrect++;
            }
        }
        
        totalCorrect = correct;
        totalIncorrect = incorrect;
        updateStats();
        updateLiveStats();
        
        // Check if sentence is complete
        if (typed.length >= sentence.length) {
            sentencesCompleted++;
            generateSentence();
        }
    }
    
    function startGame() {
        startStage.classList.add('hidden');
        gameStage.classList.remove('hidden');
        resultStage.classList.add('hidden');
        
        sentencesCompleted = 0;
        totalCorrect = 0;
        totalIncorrect = 0;
        startTime = Date.now();
        isRunning = false;
        
        generateSentence();
        startTimer();
        updateStats();
        
        typingInput.addEventListener('input', checkTyping);
    }
    
    function resetGame() {
        stopTimer();
        startStage.classList.remove('hidden');
        gameStage.classList.add('hidden');
        resultStage.classList.add('hidden');
        typingInput.removeEventListener('input', checkTyping);
        typingInput.disabled = true;
        typingInput.value = '';
        startTime = null;
        isRunning = false;
    }
    
    function retrySame() {
        resultStage.classList.add('hidden');
        gameStage.classList.remove('hidden');
        
        sentencesCompleted = 0;
        totalCorrect = 0;
        totalIncorrect = 0;
        startTime = Date.now();
        isRunning = false;
        
        generateSentence();
        startTimer();
        updateStats();
        
        typingInput.addEventListener('input', checkTyping);
    }
    
    // Event listeners
    difficultyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            difficultyBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedDifficulty = btn.getAttribute('data-mode');
            timerDisplay.textContent = difficultyConfig[selectedDifficulty].seconds + 's';
        });
    });
    
    startTestBtn.addEventListener('click', startGame);
    newSentenceBtn.addEventListener('click', generateSentence);
    resetGameBtn.addEventListener('click', resetGame);
    playAgainBtn.addEventListener('click', resetGame);
    retryBtn.addEventListener('click', retrySame);
    
    // Set initial difficulty
    timerDisplay.textContent = '60s';
    
    console.log('✅ Typing Speed Tester initialized');
}

window.getTypingSpeedTesterHTML = getTypingSpeedTesterHTML;
window.initTypingSpeedTester = initTypingSpeedTester;
console.log('✅ Typing Speed Tester module loaded');