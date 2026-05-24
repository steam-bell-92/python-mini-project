function getCoinFlipHTML() {
    return `
        <div class="project-content">
            <h2>🪙 Coin Flip Prediction Game</h2>
            
            <!-- Scoreboard Dashboard -->
            <div class="scoreboard-container">
                <div class="score-card">
                    <span class="score-title">Wins</span>
                    <span class="score-num text-success" id="statsWins">0</span>
                </div>
                <div class="score-card">
                    <span class="score-title">Losses</span>
                    <span class="score-num text-danger" id="statsLosses">0</span>
                </div>
                <div class="score-card highlight">
                    <span class="score-title">Streak</span>
                    <span class="score-num text-warning" id="statsStreak">🔥 0</span>
                </div>
                <div class="score-card highlight">
                    <span class="score-title">Best Streak</span>
                    <span class="score-num text-primary" id="statsBestStreak">🏆 0</span>
                </div>
            </div>

            <div class="coin-container">
                <!-- 3D Coin Scene -->
                <div class="coin-scene">
                    <div class="coin" id="coin">
                        <div class="coin-face heads">👑</div>
                        <div class="coin-edge"></div>
                        <div class="coin-face tails">🦅</div>
                    </div>
                    <div class="coin-shadow"></div>
                </div>
                
                <!-- Prediction System -->
                <div class="prediction-section">
                    <p class="section-title">Select your prediction:</p>
                    <div class="prediction-cards">
                        <div class="predict-card" id="predictHeads" data-choice="heads">
                            <span class="predict-emoji">👑</span>
                            <span class="predict-name">Heads</span>
                        </div>
                        <div class="predict-card" id="predictTails" data-choice="tails">
                            <span class="predict-emoji">🦅</span>
                            <span class="predict-name">Tails</span>
                        </div>
                    </div>
                </div>
                
                <!-- Result Feedback -->
                <div class="coin-result-wrapper">
                    <div class="coin-result" id="coinResult">Select a prediction to start!</div>
                </div>
                
                <button class="btn-flip" id="flipCoin" disabled>Flip Coin</button>
                
                <!-- Lifetime Stats -->
                <div class="lifetime-stats">
                    <div class="lifetime-item">
                        <span>Total Heads:</span>
                        <span id="headsCount">0</span>
                    </div>
                    <div class="lifetime-item">
                        <span>Total Tails:</span>
                        <span id="tailsCount">0</span>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .coin-container {
                text-align: center;
                padding: 1.5rem 1rem;
                max-width: 600px;
                margin: 0 auto;
            }

            /* Scoreboard styling */
            .scoreboard-container {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 0.75rem;
                margin: 0 auto 1.5rem auto;
                max-width: 500px;
                padding: 0 0.5rem;
            }
            
            .score-card {
                background: var(--control-color);
                border: 1px solid var(--border-color);
                border-radius: 14px;
                padding: 0.75rem 0.5rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                transition: var(--transition);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            
            .score-card.highlight {
                background: color-mix(in srgb, var(--control-color) 90%, var(--accent-soft));
                border-color: var(--accent-border);
            }
            
            .score-title {
                font-size: 0.75rem;
                color: var(--text-secondary);
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 0.25rem;
                font-weight: 600;
            }
            
            .score-num {
                font-size: 1.35rem;
                font-weight: 700;
                font-family: 'Space Grotesk', sans-serif;
            }
            
            .text-success { color: var(--success-color); }
            .text-danger { color: var(--danger-color); }
            .text-warning { color: var(--warning-color); }
            .text-primary { color: var(--secondary-color); }

            /* Coin Scene */
            .coin-scene {
                position: relative;
                width: 150px;
                height: 180px;
                perspective: 900px;
                margin: 0.5rem auto 1.5rem;
                transform-origin: center bottom;
            }
            
            .coin {
                --flip-x: 0deg;
                --flip-y: 0deg;
                width: 150px;
                height: 150px;
                position: relative;
                transform-style: preserve-3d;
                transform: rotateX(var(--flip-x)) rotateY(var(--flip-y));
                transition: transform 1.6s cubic-bezier(0.2, 0.8, 0.15, 1);
            }
            
            .coin-face {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 5rem;
                background: radial-gradient(circle at 35% 30%, #fff5a6, #ffd54f 45%, #e1a600 100%);
                border-radius: 50%;
                border: 5px solid #d79e00;
                box-shadow: inset -6px -8px 10px rgba(0, 0, 0, 0.22), inset 6px 8px 12px rgba(255, 255, 255, 0.45), 0 12px 25px rgba(0, 0, 0, 0.25);
            }

            .heads { transform: translateZ(8px); }
            
            .tails {
                transform: rotateY(180deg) translateZ(8px);
            }

            .coin-edge {
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                border: 8px solid #b8860b;
                transform: translateZ(0);
                box-shadow: inset 0 0 0 2px rgba(255, 232, 145, 0.35);
            }

            .coin-shadow {
                position: absolute;
                left: 50%;
                bottom: 6px;
                width: 100px;
                height: 14px;
                transform: translateX(-50%);
                border-radius: 50%;
                background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.05) 72%, transparent 100%);
            }

            .coin-scene.rolling .coin-shadow {
                animation: coinShadowFloat 1.6s ease;
            }

            .coin-scene.impact {
                animation: coinLanding 0.45s ease-out;
            }

            .coin-scene.impact .coin-shadow {
                animation: coinShadowImpact 0.45s ease-out;
            }

            /* Prediction Section */
            .prediction-section {
                margin: 1.5rem 0;
            }
            
            .section-title {
                font-size: 1rem;
                color: var(--text-secondary);
                margin-bottom: 0.75rem;
                font-weight: 500;
            }
            
            .prediction-cards {
                display: flex;
                gap: 1.25rem;
                justify-content: center;
                max-width: 380px;
                margin: 0 auto;
            }
            
            .predict-card {
                flex: 1;
                background: var(--control-color);
                border: 2px solid var(--border-color);
                border-radius: 16px;
                padding: 1rem;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.4rem;
                transition: var(--transition);
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
            }
            
            .predict-card:hover {
                transform: translateY(-4px);
                border-color: var(--text-secondary);
                box-shadow: 0 6px 15px rgba(0, 0, 0, 0.12);
            }
            
            .predict-card.selected {
                background: var(--accent-soft);
                border-color: var(--accent-color);
                box-shadow: 0 0 18px var(--accent-border);
            }
            
            .predict-card.selected .predict-name {
                color: var(--accent-color);
                font-weight: 700;
            }
            
            .predict-emoji {
                font-size: 2.2rem;
                transition: transform 0.3s ease;
            }
            
            .predict-card:hover .predict-emoji {
                transform: scale(1.2) rotate(6deg);
            }
            
            .predict-name {
                font-size: 0.95rem;
                color: var(--text-color);
                font-weight: 500;
                transition: var(--transition);
            }

            .prediction-cards.disabled-cards {
                pointer-events: none;
                opacity: 0.6;
            }
            
            /* Result Feedback wrapper & Box */
            .coin-result-wrapper {
                min-height: 4rem;
                margin: 1rem 0 1.5rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .coin-result {
                font-size: 1.4rem;
                font-weight: 700;
                padding: 0.6rem 1.8rem;
                border-radius: 12px;
                color: var(--text-color);
                background: var(--control-color);
                border: 1px solid var(--border-color);
                transition: var(--transition);
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
            }
            
            .coin-result.win {
                color: var(--success-color);
                background: rgba(16, 185, 129, 0.08);
                border-color: var(--success-color);
                box-shadow: 0 0 18px rgba(16, 185, 129, 0.25);
                animation: pulseGlowSuccess 1.5s infinite;
            }
            
            .coin-result.lose {
                color: var(--danger-color);
                background: rgba(239, 68, 68, 0.08);
                border-color: var(--danger-color);
                box-shadow: 0 0 18px rgba(239, 68, 68, 0.25);
                animation: shakeError 0.5s ease-in-out;
            }
            
            .coin-result.flipping {
                color: var(--text-secondary);
                animation: pulseText 1s infinite alternate;
            }
            
            /* Button */
            .btn-flip {
                background: linear-gradient(135deg, #ffd700, #ffed4e);
                color: #222;
                border: none;
                padding: 0.9rem 2.8rem;
                border-radius: 50px;
                font-size: 1.25rem;
                font-weight: 700;
                cursor: pointer;
                transition: var(--transition);
                box-shadow: 0 6px 15px rgba(255, 215, 0, 0.25);
            }
            
            .btn-flip:hover:not(:disabled) {
                transform: scale(1.05) translateY(-2px);
                box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
            }

            .btn-flip:active:not(:disabled) {
                transform: scale(0.98) translateY(0);
            }

            .btn-flip:disabled {
                background: var(--border-color);
                color: var(--text-secondary);
                cursor: not-allowed;
                transform: none !important;
                box-shadow: none !important;
                border: 1px solid var(--border-color);
                opacity: 0.7;
            }
            
            /* Lifetime Stats */
            .lifetime-stats {
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin-top: 2.2rem;
                padding-top: 1.2rem;
                border-top: 1px solid var(--border-color);
                font-size: 0.9rem;
                color: var(--text-secondary);
            }
            
            .lifetime-item {
                display: flex;
                gap: 0.6rem;
                align-items: center;
                font-weight: 500;
            }

            @keyframes coinLanding {
                0% { transform: translateY(-12px); }
                55% { transform: translateY(5px); }
                82% { transform: translateY(-2px); }
                100% { transform: translateY(0); }
            }

            @keyframes coinShadowFloat {
                0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.35; }
                45% { transform: translateX(-50%) scale(0.68); opacity: 0.15; }
            }

            @keyframes coinShadowImpact {
                0% { transform: translateX(-50%) scale(0.72); opacity: 0.15; }
                55% { transform: translateX(-50%) scale(1.12); opacity: 0.4; }
                100% { transform: translateX(-50%) scale(1); opacity: 0.35; }
            }

            @keyframes pulseGlowSuccess {
                0%, 100% { box-shadow: 0 0 15px rgba(16, 185, 129, 0.2); }
                50% { box-shadow: 0 0 25px rgba(16, 185, 129, 0.4); }
            }

            @keyframes shakeError {
                0%, 100% { transform: translateX(0); }
                20%, 60% { transform: translateX(-6px); }
                40%, 80% { transform: translateX(6px); }
            }

            @keyframes pulseText {
                0% { opacity: 0.6; }
                100% { opacity: 1; }
            }
        </style>
    `;
}

function initCoinFlip() {
    const coin = document.getElementById('coin');
    const coinScene = coin.closest('.coin-scene');
    const flipBtn = document.getElementById('flipCoin');
    const result = document.getElementById('coinResult');
    
    // Core Elements
    const headsCountEl = document.getElementById('headsCount');
    const tailsCountEl = document.getElementById('tailsCount');
    const predictHeadsBtn = document.getElementById('predictHeads');
    const predictTailsBtn = document.getElementById('predictTails');
    const predictionWrapper = predictHeadsBtn.closest('.prediction-cards');
    
    // Scoreboard Elements
    const statsWinsEl = document.getElementById('statsWins');
    const statsLossesEl = document.getElementById('statsLosses');
    const statsStreakEl = document.getElementById('statsStreak');
    const statsBestStreakEl = document.getElementById('statsBestStreak');

    // Retrieve stats from localStorage
    let wins = parseInt(localStorage.getItem('coinflip_wins') || '0');
    let losses = parseInt(localStorage.getItem('coinflip_losses') || '0');
    let streak = parseInt(localStorage.getItem('coinflip_streak') || '0');
    let bestStreak = parseInt(localStorage.getItem('coinflip_best_streak') || '0');
    let headsCount = parseInt(localStorage.getItem('coinflip_heads') || '0');
    let tailsCount = parseInt(localStorage.getItem('coinflip_tails') || '0');
    let spinCount = 0;
    let selectedPrediction = null;

    // Render Initial Stats
    function updateStatsUI() {
        statsWinsEl.textContent = wins;
        statsLossesEl.textContent = losses;
        statsStreakEl.textContent = `🔥 ${streak}`;
        statsBestStreakEl.textContent = `🏆 ${bestStreak}`;
        headsCountEl.textContent = headsCount;
        tailsCountEl.textContent = tailsCount;
    }
    updateStatsUI();

    // Prediction cards event listeners
    function selectPrediction(prediction) {
        selectedPrediction = prediction;
        
        predictHeadsBtn.classList.remove('selected');
        predictTailsBtn.classList.remove('selected');
        
        if (prediction === 'heads') {
            predictHeadsBtn.classList.add('selected');
            result.textContent = 'Predicted Heads! Ready to flip.';
        } else if (prediction === 'tails') {
            predictTailsBtn.classList.add('selected');
            result.textContent = 'Predicted Tails! Ready to flip.';
        }
        
        result.className = 'coin-result'; // reset any win/lose classes
        flipBtn.disabled = false;
    }

    predictHeadsBtn.addEventListener('click', () => {
        if (!flipBtn.disabled || selectedPrediction === null) {
            selectPrediction('heads');
        }
    });

    predictTailsBtn.addEventListener('click', () => {
        if (!flipBtn.disabled || selectedPrediction === null) {
            selectPrediction('tails');
        }
    });

    // 3D Coin Rotate Calculations
    function setCoinFace(isHeads, seed) {
        const targetY = isHeads ? 0 : 180;
        const flipX = 360 * (4 + (seed % 3));
        const flipY = 360 * (3 + (seed % 2)) + targetY;
        coin.style.setProperty('--flip-x', `${flipX}deg`);
        coin.style.setProperty('--flip-y', `${flipY}deg`);
    }

    // Landing bounce effect
    function triggerCoinLanding() {
        coinScene.classList.remove('impact');
        void coinScene.offsetWidth;
        coinScene.classList.add('impact');
        setTimeout(() => {
            coinScene.classList.remove('impact');
        }, 460);
    }
    
    // Main flip trigger
    flipBtn.addEventListener('click', () => {
        if (!selectedPrediction) return;

        // Freeze controls during flip
        flipBtn.disabled = true;
        predictionWrapper.classList.add('disabled-cards');
        result.textContent = 'Flipping...';
        result.className = 'coin-result flipping';
        coinScene.classList.add('rolling');
        
        const isHeads = Math.random() < 0.5;
        const flipResult = isHeads ? 'heads' : 'tails';
        spinCount += 1;
        
        setCoinFace(isHeads, spinCount);
        
        setTimeout(() => {
            coinScene.classList.remove('rolling');
            triggerCoinLanding();
            
            // Check win/loss logic
            const isCorrect = (flipResult === selectedPrediction);
            
            // Lifetime stats update
            if (isHeads) {
                headsCount++;
            } else {
                tailsCount++;
            }
            
            if (isCorrect) {
                wins++;
                streak++;
                if (streak > bestStreak) {
                    bestStreak = streak;
                }
                result.textContent = isHeads ? '👑 Heads! Correct prediction! 🎉' : '🦅 Tails! Correct prediction! 🎉';
                result.className = 'coin-result win';
            } else {
                losses++;
                streak = 0;
                result.textContent = isHeads ? '👑 Heads! Wrong prediction. 😢' : '🦅 Tails! Wrong prediction. 😢';
                result.className = 'coin-result lose';
            }
            
            // Persist scores
            localStorage.setItem('coinflip_wins', wins);
            localStorage.setItem('coinflip_losses', losses);
            localStorage.setItem('coinflip_streak', streak);
            localStorage.setItem('coinflip_best_streak', bestStreak);
            localStorage.setItem('coinflip_heads', headsCount);
            localStorage.setItem('coinflip_tails', tailsCount);
            
            // Update scoreboard & stats views
            updateStatsUI();
            
            // Re-enable controls
            flipBtn.disabled = false;
            predictionWrapper.classList.remove('disabled-cards');
        }, 1600);
    });
}
