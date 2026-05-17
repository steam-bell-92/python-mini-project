function getEmojiMemoryGameHTML() {
    return `
        <div class="project-content">
            <h2>🧠 Emoji Memory Game</h2>
            <div class="emoji-memory-container">
                <div class="game-status" id="gameStatus">
                    <div class="status-item">
                        <span class="status-label">Score</span>
                        <span class="status-value" id="memoryScore">0</span>
                    </div>
                    <div class="status-item">
                        <span class="status-label">Level</span>
                        <span class="status-value" id="memoryLevel">1</span>
                    </div>
                    <div class="status-item">
                        <span class="status-label">Sequence</span>
                        <span class="status-value" id="sequenceLength">1</span>
                    </div>
                </div>
                
                <div class="game-instructions" id="instructions">
                    👇 Click START to begin the game!
                </div>
                
                <div class="sequence-display" id="sequenceDisplay">
                    <div class="display-content" id="displayContent">
                        Ready to test your memory?
                    </div>
                </div>
                
                <div class="emoji-buttons">
                    <button class="emoji-btn" data-emoji="🍎">🍎</button>
                    <button class="emoji-btn" data-emoji="🚗">🚗</button>
                    <button class="emoji-btn" data-emoji="⚽">⚽</button>
                    <button class="emoji-btn" data-emoji="🐍">🐍</button>
                    <button class="emoji-btn" data-emoji="🎧">🎧</button>
                    <button class="emoji-btn" data-emoji="🔥">🔥</button>
                    <button class="emoji-btn" data-emoji="🌈">🌈</button>
                    <button class="emoji-btn" data-emoji="🚀">🚀</button>
                </div>
                
                <div class="game-controls">
                    <button class="btn-start" id="startGame">▶️ START</button>
                    <button class="btn-reset" id="resetGame">🔄 RESET</button>
                </div>
            </div>
        </div>
        
        <style>
            .emoji-memory-container {
                padding: 2rem;
                max-width: 600px;
                margin: 0 auto;
                text-align: center;
            }
            
            .game-status {
                display: flex;
                justify-content: space-around;
                margin-bottom: 2rem;
                gap: 1rem;
                flex-wrap: wrap;
            }
            
            .status-item {
                background: var(--surface-color);
                padding: 1rem 1.5rem;
                border-radius: 12px;
                border: 2px solid var(--border-color);
                flex: 1;
                min-width: 100px;
            }
            
            .status-label {
                display: block;
                font-size: 0.9rem;
                color: var(--text-secondary);
                margin-bottom: 0.5rem;
            }
            
            .status-value {
                display: block;
                font-size: 2rem;
                font-weight: bold;
                color: var(--primary-color);
            }
            
            .game-instructions {
                font-size: 1.3rem;
                margin-bottom: 2rem;
                padding: 1rem;
                background: rgba(106, 88, 236, 0.1);
                border-radius: 12px;
                border: 2px solid var(--primary-color);
            }
            
            .sequence-display {
                background: var(--surface-color);
                border: 3px dashed var(--primary-color);
                border-radius: 15px;
                padding: 2rem;
                margin-bottom: 2rem;
                min-height: 100px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .display-content {
                font-size: 3rem;
                font-weight: bold;
                word-wrap: break-word;
                letter-spacing: 0.5rem;
            }
            
            .emoji-buttons {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .emoji-btn {
                font-size: 3rem;
                padding: 1.5rem;
                border: 3px solid var(--border-color);
                background: var(--surface-color);
                border-radius: 15px;
                cursor: pointer;
                transition: all 0.2s ease;
                aspect-ratio: 1 / 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .emoji-btn:hover {
                transform: scale(1.1);
                border-color: var(--primary-color);
                box-shadow: 0 0 20px rgba(106, 88, 236, 0.3);
            }
            
            .emoji-btn:active {
                transform: scale(0.95);
            }
            
            .emoji-btn.disabled {
                cursor: not-allowed;
                opacity: 0.5;
                pointer-events: none;
            }
            
            .emoji-btn.active {
                background: var(--primary-color);
                color: white;
                box-shadow: 0 0 30px rgba(106, 88, 236, 0.6);
                animation: pulse 0.3s ease;
            }
            
            .game-controls {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .btn-start, .btn-reset {
                padding: 1rem 2rem;
                font-size: 1.1rem;
                border: none;
                border-radius: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                font-weight: bold;
            }
            
            .btn-start {
                background: linear-gradient(135deg, #6a58ec, #8b5cf6);
                color: white;
            }
            
            .btn-start:hover {
                transform: translateY(-2px);
                box-shadow: 0 5px 20px rgba(106, 88, 236, 0.4);
            }
            
            .btn-reset {
                background: var(--surface-color);
                color: var(--text-color);
                border: 2px solid var(--border-color);
            }
            
            .btn-reset:hover {
                border-color: var(--primary-color);
                color: var(--primary-color);
            }
            
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.1); }
            }
            
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                25% { transform: translateX(-10px); }
                75% { transform: translateX(10px); }
            }
            
            @media (max-width: 600px) {
                .emoji-buttons {
                    grid-template-columns: repeat(3, 1fr);
                }
                
                .emoji-btn {
                    font-size: 2rem;
                    padding: 1rem;
                }
                
                .display-content {
                    font-size: 2rem;
                }
            }
        </style>
    `;
}

function initEmojiMemoryGame() {
    const emojis = ["🍎", "🚗", "⚽", "🐍", "🎧", "🔥", "🌈", "🚀"];
    let sequence = [];
    let userSequence = [];
    let score = 0;
    let level = 1;
    let gameActive = false;
    let isPlayingSequence = false;
    
    const startBtn = document.getElementById('startGame');
    const resetBtn = document.getElementById('resetGame');
    const scoreDisplay = document.getElementById('memoryScore');
    const levelDisplay = document.getElementById('memoryLevel');
    const sequenceLengthDisplay = document.getElementById('sequenceLength');
    const instructionsDiv = document.getElementById('instructions');
    const displayContent = document.getElementById('displayContent');
    const emojiButtons = document.querySelectorAll('.emoji-btn');
    
    function disableButtons(disabled) {
        emojiButtons.forEach(btn => {
            if (disabled) {
                btn.classList.add('disabled');
            } else {
                btn.classList.remove('disabled');
            }
        });
    }
    function showSequence() {
        isPlayingSequence = true;
        disableButtons(true);
        displayContent.textContent = "Watch the sequence...";
        
        let i = 0;
        const playNextEmoji = () => {
            if (i < sequence.length) {
                const emoji = sequence[i];
                const button = Array.from(emojiButtons).find(btn => btn.dataset.emoji === emoji);
                
                if (button) {
                    button.classList.add('active');
                    setTimeout(() => {
                        button.classList.remove('active');
                        i++;
                        setTimeout(playNextEmoji, 500);
                    }, 600);
                }
            } else {
                isPlayingSequence = false;
                disableButtons(false);
                userSequence = [];
                gameActive = true;
                displayContent.textContent = "Your turn! Click the emojis...";
                instructionsDiv.textContent = `👆 Repeat the sequence (${sequence.length} steps)`;
            }
        };
        
        playNextEmoji();
    }
    
    function startNewRound() {
        const newEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        sequence.push(newEmoji);
        userSequence = [];
        
        sequenceLengthDisplay.textContent = sequence.length;
        setTimeout(showSequence, 500);
    }
    
    function handleEmojiClick(emoji, button) {
        if (isPlayingSequence || !gameActive) return;
        
        userSequence.push(emoji);
        button.classList.add('active');
        
        setTimeout(() => {
            button.classList.remove('active');
        }, 300);
        
        // Check if the emoji matches
        if (userSequence[userSequence.length - 1] !== sequence[userSequence.length - 1]) {
            gameOver();
            return;
        }
        
        // Check if the entire sequence is correct
        if (userSequence.length === sequence.length) {
            score += level * 10;
            scoreDisplay.textContent = score;
            level++;
            levelDisplay.textContent = level;
            
            instructionsDiv.textContent = "✅ Correct! Get ready for the next round...";
            gameActive = false;
            setTimeout(startNewRound, 1500);
        }
    }
    
    function gameOver() {
        gameActive = false;
        disableButtons(true);
        instructionsDiv.textContent = `❌ Game Over! You reached Level ${level} with Score: ${score}`;
        displayContent.textContent = `Final Score: ${score}`;
        startBtn.textContent = "▶️ PLAY AGAIN";
    }
    
    function resetGame() {
        sequence = [];
        userSequence = [];
        score = 0;
        level = 1;
        gameActive = false;
        isPlayingSequence = false;
        
        scoreDisplay.textContent = '0';
        levelDisplay.textContent = '1';
        sequenceLengthDisplay.textContent = '0';
        instructionsDiv.textContent = "👇 Click START to begin the game!";
        displayContent.textContent = "Ready to test your memory?";
        startBtn.textContent = "▶️ START";
        
        disableButtons(true);
    }
    
    startBtn.addEventListener('click', () => {
        resetGame();
        gameActive = true;
        instructionsDiv.textContent = "Watch the sequence...";
        startNewRound();
    });
    
    resetBtn.addEventListener('click', resetGame);
    
    emojiButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const emoji = btn.dataset.emoji;
            handleEmojiClick(emoji, btn);
        });
    });
    
    // Initial state
    disableButtons(true);
}