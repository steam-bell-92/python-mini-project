// Additional Project Implementations

// ============================================
// NUMBER GUESSING
// ============================================
function getNumberGuessingHTML() {
    return `
        <div class="project-content">
            <h2>🎯 Number Guessing Game</h2>
            <div class="guessing-container">
                <p class="game-instructions">I'm thinking of a number between 1 and 100!</p>
                
                <div class="guess-input-group">
                    <input type="number" id="guessInput" min="1" max="100" placeholder="Enter your guess">
                    <button class="btn-guess" id="submitGuess">Guess!</button>
                </div>
                
                <div class="feedback" id="feedback"></div>
                
                <div class="game-info">
                    <div class="info-item">
                        <span>Attempts:</span>
                        <span id="attempts">0</span>
                    </div>
                    <div class="info-item">
                        <span>Range:</span>
                        <span id="range">1-100</span>
                    </div>
                </div>
                
                <button class="btn-reset" id="resetGuessing">New Game</button>
            </div>
        </div>
        
        <style>
            .guessing-container {
                padding: 2rem;
                text-align: center;
            }
            
            .game-instructions {
                font-size: 1.3rem;
                margin-bottom: 2rem;
            }
            
            .guess-input-group {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-bottom: 2rem;
            }
            
            .guess-input-group input {
                padding: 1rem;
                font-size: 1.2rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
                width: 200px;
                text-align: center;
            }
            
            .btn-guess {
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 10px;
                cursor: pointer;
                font-size: 1.2rem;
            }
            
            .feedback {
                font-size: 1.5rem;
                font-weight: bold;
                min-height: 3rem;
                margin: 2rem 0;
            }
            
            .game-info {
                display: flex;
                gap: 3rem;
                justify-content: center;
                margin: 2rem 0;
                font-size: 1.2rem;
            }
        </style>
    `;
}

function initNumberGuessing() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    let minRange = 1;
    let maxRange = 100;
    
    const guessInput = document.getElementById('guessInput');
    const submitBtn = document.getElementById('submitGuess');
    const feedback = document.getElementById('feedback');
    const attemptsDisplay = document.getElementById('attempts');
    const rangeDisplay = document.getElementById('range');
    const resetBtn = document.getElementById('resetGuessing');
    
    submitBtn.addEventListener('click', makeGuess);
    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') makeGuess();
    });
    
    resetBtn.addEventListener('click', () => {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        minRange = 1;
        maxRange = 100;
        attemptsDisplay.textContent = '0';
        rangeDisplay.textContent = '1-100';
        feedback.textContent = '';
        guessInput.value = '';
        guessInput.disabled = false;
        submitBtn.disabled = false;
    });
    
    function makeGuess() {
        const guess = parseInt(guessInput.value);
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            feedback.textContent = '⚠️ Please enter a number between 1 and 100!';
            feedback.style.color = 'var(--warning-color)';
            return;
        }
        
        attempts++;
        attemptsDisplay.textContent = attempts;
        
        if (guess === secretNumber) {
            feedback.textContent = `🎉 Congratulations! You found it in ${attempts} attempts!`;
            feedback.style.color = 'var(--success-color)';
            guessInput.disabled = true;
            submitBtn.disabled = true;
        } else if (guess < secretNumber) {
            feedback.textContent = '📈 Too low! Try higher!';
            feedback.style.color = 'var(--primary-color)';
            minRange = Math.max(minRange, guess + 1);
        } else {
            feedback.textContent = '📉 Too high! Try lower!';
            feedback.style.color = 'var(--danger-color)';
            maxRange = Math.min(maxRange, guess - 1);
        }
        
        rangeDisplay.textContent = `${minRange}-${maxRange}`;
        guessInput.value = '';
    }
}

// ============================================
// PASCAL'S TRIANGLE (with Hexagons!)
// ============================================
function getPascalTriangleHTML() {
    return `
        <div class="project-content">
            <h2>🔺 Pascal's Triangle</h2>
            <div class="pascal-container">
                <div class="controls">
                    <label>
                        Number of Rows:
                        <input type="number" id="pascalRows" min="1" max="12" value="7">
                    </label>
                    <button class="btn-generate" id="generatePascal">Generate</button>
                </div>
                
                <div class="pascal-display" id="pascalDisplay"></div>
            </div>
        </div>
        
        <style>
            .pascal-container {
                padding: 2rem;
                text-align: center;
            }
            
            .controls {
                display: flex;
                gap: 1rem;
                justify-content: center;
                align-items: center;
                margin-bottom: 3rem;
                flex-wrap: wrap;
            }
            
            .controls label {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-size: 1.1rem;
            }
            
            .controls input {
                padding: 0.5rem;
                font-size: 1rem;
                border: 2px solid var(--border-color);
                border-radius: 8px;
                background: var(--bg-color);
                color: var(--text-color);
                width: 80px;
                text-align: center;
            }
            
            .btn-generate {
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 0.75rem 2rem;
                border-radius: 50px;
                cursor: pointer;
                font-size: 1rem;
            }
            
            .pascal-display {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.5rem;
                margin-top: 2rem;
            }
            
            .pascal-row {
                display: flex;
                gap: 0.5rem;
                align-items: center;
            }
            
            .hexagon {
                width: 60px;
                height: 65px;
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .hexagon-inner {
                width: 100%;
                height: 100%;
                position: relative;
                clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 1.1rem;
                color: white;
                transition: var(--transition);
                animation: fadeIn 0.5s ease;
            }
            
            .hexagon:hover .hexagon-inner {
                transform: scale(1.1);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.5);
            }
        </style>
    `;
}

function initPascalTriangle() {
    const rowsInput = document.getElementById('pascalRows');
    const generateBtn = document.getElementById('generatePascal');
    const display = document.getElementById('pascalDisplay');
    
    function generatePascal() {
        const rows = parseInt(rowsInput.value) || 7;
        display.innerHTML = '';
        
        const triangle = [];
        
        for (let i = 0; i < rows; i++) {
            triangle[i] = [];
            const row = document.createElement('div');
            row.className = 'pascal-row';
            
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    triangle[i][j] = 1;
                } else {
                    triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
                }
                
                const hexagon = document.createElement('div');
                hexagon.className = 'hexagon';
                hexagon.innerHTML = `<div class="hexagon-inner">${triangle[i][j]}</div>`;
                hexagon.style.animationDelay = `${(i + j) * 0.05}s`;
                row.appendChild(hexagon);
            }
            
            display.appendChild(row);
        }
    }
    
    generateBtn.addEventListener('click', generatePascal);
    generatePascal(); // Initial generation
}

// ============================================
// CALCULATOR
// ============================================
function getCalculatorHTML() {
    return `
        <div class="project-content">
            <h2>🧮 Calculator</h2>
            <div class="calculator">
                <div class="calc-display" id="calcDisplay">0</div>
                <div class="calc-buttons">
                    <button class="calc-btn clear" data-action="clear">C</button>
                    <button class="calc-btn operator" data-action="delete">⌫</button>
                    <button class="calc-btn operator" data-action="/">/</button>
                    <button class="calc-btn operator" data-action="*">×</button>
                    
                    <button class="calc-btn number" data-value="7">7</button>
                    <button class="calc-btn number" data-value="8">8</button>
                    <button class="calc-btn number" data-value="9">9</button>
                    <button class="calc-btn operator" data-action="-">−</button>
                    
                    <button class="calc-btn number" data-value="4">4</button>
                    <button class="calc-btn number" data-value="5">5</button>
                    <button class="calc-btn number" data-value="6">6</button>
                    <button class="calc-btn operator" data-action="+">+</button>
                    
                    <button class="calc-btn number" data-value="1">1</button>
                    <button class="calc-btn number" data-value="2">2</button>
                    <button class="calc-btn number" data-value="3">3</button>
                    <button class="calc-btn operator" data-action="**">^</button>
                    
                    <button class="calc-btn number span-2" data-value="0">0</button>
                    <button class="calc-btn number" data-value=".">.</button>
                    <button class="calc-btn equals" data-action="=">=</button>
                </div>
            </div>
        </div>
        
        <style>
            .calculator {
                max-width: 350px;
                margin: 2rem auto;
                background: var(--surface-color);
                padding: 1.5rem;
                border-radius: 20px;
                box-shadow: var(--shadow);
            }
            
            .calc-display {
                background: var(--bg-color);
                padding: 2rem;
                border-radius: 15px;
                font-size: 2.5rem;
                text-align: right;
                margin-bottom: 1rem;
                min-height: 80px;
                display: flex;
                align-items: center;
                justify-content: flex-end;
                word-break: break-all;
            }
            
            .calc-buttons {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 0.75rem;
            }
            
            .calc-btn {
                padding: 1.5rem;
                font-size: 1.5rem;
                border: none;
                border-radius: 15px;
                cursor: pointer;
                transition: var(--transition);
                font-weight: 600;
            }
            
            .calc-btn.number {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                color: var(--text-color);
            }
            
            .calc-btn.operator {
                background: var(--primary-color);
                color: white;
            }
            
            .calc-btn.equals {
                background: var(--success-color);
                color: white;
            }
            
            .calc-btn.clear {
                background: var(--danger-color);
                color: white;
            }
            
            .calc-btn:hover {
                transform: scale(1.05);
            }
            
            .calc-btn.span-2 {
                grid-column: span 2;
            }
        </style>
    `;
}

function initCalculator() {
    const display = document.getElementById('calcDisplay');
    let currentValue = '0';
    let previousValue = '';
    let operation = '';
    
    document.querySelectorAll('.calc-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const value = btn.getAttribute('data-value');
            const action = btn.getAttribute('data-action');
            
            if (value) {
                handleNumber(value);
            } else if (action) {
                handleAction(action);
            }
            
            updateDisplay();
        });
    });
    
    function handleNumber(num) {
        if (currentValue === '0' || currentValue === 'Error') {
            currentValue = num;
        } else {
            currentValue += num;
        }
    }
    
    function handleAction(action) {
        if (action === 'clear') {
            currentValue = '0';
            previousValue = '';
            operation = '';
        } else if (action === 'delete') {
            currentValue = currentValue.slice(0, -1) || '0';
        } else if (action === '=') {
            calculate();
        } else {
            if (previousValue && operation) {
                calculate();
            }
            previousValue = currentValue;
            currentValue = '0';
            operation = action;
        }
    }
    
    function calculate() {
        try {
            const prev = parseFloat(previousValue);
            const curr = parseFloat(currentValue);
            let result;
            
            switch (operation) {
                case '+': result = prev + curr; break;
                case '-': result = prev - curr; break;
                case '*': result = prev * curr; break;
                case '/': result = prev / curr; break;
                case '**': result = Math.pow(prev, curr); break;
                default: return;
            }
            
            currentValue = result.toString();
            previousValue = '';
            operation = '';
        } catch (e) {
            currentValue = 'Error';
        }
    }
    
    function updateDisplay() {
        display.textContent = currentValue;
    }
}

// ============================================
// FIBONACCI
// ============================================
function getFibonacciHTML() {
    return `
        <div class="project-content">
            <h2>✨ Fibonacci Series</h2>
            <div class="fibonacci-container">
                <div class="controls">
                    <label>
                        Number of terms:
                        <input type="number" id="fibTerms" min="1" max="20" value="10">
                    </label>
                    <button class="btn-generate" id="generateFib">Generate</button>
                </div>
                
                <div class="fib-display" id="fibDisplay"></div>
                
                <canvas id="fibSpiral" width="600" height="600"></canvas>
            </div>
        </div>
        
        <style>
            .fibonacci-container {
                padding: 2rem;
                text-align: center;
            }
            
            .fib-display {
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                flex-wrap: wrap;
                margin: 2rem 0;
            }
            
            .fib-number {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 15px;
                font-size: 1.3rem;
                font-weight: bold;
                animation: fadeIn 0.5s ease;
            }
            
            #fibSpiral {
                margin-top: 2rem;
                border-radius: 15px;
                box-shadow: var(--shadow);
                max-width: 100%;
                height: auto;
            }
        </style>
    `;
}

function initFibonacci() {
    const termsInput = document.getElementById('fibTerms');
    const generateBtn = document.getElementById('generateFib');
    const display = document.getElementById('fibDisplay');
    const canvas = document.getElementById('fibSpiral');
    const ctx = canvas.getContext('2d');
    
    function generateFibonacci() {
        const n = parseInt(termsInput.value) || 10;
        display.innerHTML = '';
        
        let fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }
        
        fib.slice(0, n).forEach((num, index) => {
            const numEl = document.createElement('div');
            numEl.className = 'fib-number';
            numEl.textContent = num;
            numEl.style.animationDelay = `${index * 0.1}s`;
            display.appendChild(numEl);
        });
        
        drawSpiral(fib.slice(0, Math.min(n, 12)));
    }
    
    function drawSpiral(fib) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 3;
        
        const scale = 5;
        let x = 300, y = 300;
        let direction = 0; // 0: right, 1: up, 2: left, 3: down
        
        const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];
        
        fib.forEach((num, i) => {
            const size = num * scale;
            ctx.strokeStyle = colors[i % colors.length];
            ctx.fillStyle = colors[i % colors.length] + '20';
            
            // Draw square
            ctx.fillRect(x, y, size, size);
            ctx.strokeRect(x, y, size, size);
            
            // Draw arc
            ctx.beginPath();
            const arcX = direction === 0 ? x + size : direction === 2 ? x : x;
            const arcY = direction === 1 ? y : direction === 3 ? y + size : y;
            
            ctx.arc(arcX, arcY, size, 
                Math.PI * direction / 2, 
                Math.PI * (direction + 1) / 2);
            ctx.stroke();
            
            // Update position for next square
            switch(direction) {
                case 0: y -= fib[i+1] * scale; break;
                case 1: x -= size; break;
                case 2: y -= size; x -= fib[i+1] * scale; break;
                case 3: x += size; break;
            }
            
            direction = (direction + 1) % 4;
        });
    }
    
    generateBtn.addEventListener('click', generateFibonacci);
    generateFibonacci();
}

// Add placeholder functions for remaining projects
// ============================================
// FLAMES GAME
// ============================================
function getFlamesHTML() {
    return `
        <div class="project-content">
            <h2>💖 FLAMES Game</h2>
            <p class="project-desc">Discover your relationship status!</p>
            <div class="flames-container">
                <div class="flames-legend">
                    <div class="legend-item">F - Friends</div>
                    <div class="legend-item">L - Love</div>
                    <div class="legend-item">A - Affection</div>
                    <div class="legend-item">M - Marriage</div>
                    <div class="legend-item">E - Enemies</div>
                    <div class="legend-item">S - Siblings</div>
                </div>
                
                <div class="names-input">
                    <input type="text" id="name1" placeholder="Enter first name" maxlength="20">
                    <div class="heart-icon">💕</div>
                    <input type="text" id="name2" placeholder="Enter second name" maxlength="20">
                </div>
                
                <button class="btn-calculate" id="calculateFlames">💖 Calculate</button>
                
                <div class="flames-result" id="flamesResult"></div>
            </div>
        </div>
        
        <style>
            .flames-container {
                padding: 2rem;
                max-width: 700px;
                margin: 0 auto;
                text-align: center;
            }
            
            .flames-legend {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .legend-item {
                background: var(--surface-color);
                padding: 0.75rem;
                border-radius: 10px;
                border: 2px solid var(--border-color);
                font-weight: 600;
            }
            
            .names-input {
                display: flex;
                gap: 1rem;
                align-items: center;
                justify-content: center;
                margin-bottom: 2rem;
                flex-wrap: wrap;
            }
            
            .names-input input {
                flex: 1;
                min-width: 200px;
                max-width: 250px;
                padding: 1rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
                text-align: center;
            }
            
            .heart-icon {
                font-size: 2rem;
                animation: heartbeat 1.5s infinite;
            }
            
            .btn-calculate {
                background: linear-gradient(135deg, #ec4899, #f43f5e);
                color: white;
                border: none;
                padding: 1rem 3rem;
                border-radius: 50px;
                font-size: 1.2rem;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .btn-calculate:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(236, 72, 153, 0.4);
            }
            
            .flames-result {
                margin-top: 3rem;
                min-height: 200px;
            }
            
            .result-card {
                background: linear-gradient(135deg, #ec4899, #f43f5e);
                color: white;
                padding: 3rem;
                border-radius: 20px;
                animation: zoomIn 0.5s ease;
            }
            
            .result-names {
                font-size: 1.5rem;
                margin-bottom: 1rem;
                font-weight: 600;
            }
            
            .result-relationship {
                font-size: 3rem;
                margin: 2rem 0;
                font-weight: bold;
                text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
            }
            
            .result-emoji {
                font-size: 4rem;
                margin-bottom: 1rem;
                animation: bounce 1s infinite;
            }
            
            .result-details {
                margin-top: 2rem;
                padding-top: 2rem;
                border-top: 2px solid rgba(255,255,255,0.3);
                font-size: 1.1rem;
            }
            
            @keyframes heartbeat {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
            
            @keyframes zoomIn {
                from {
                    opacity: 0;
                    transform: scale(0.5);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        </style>
    `;
}

function initFlames() {
    const name1Input = document.getElementById('name1');
    const name2Input = document.getElementById('name2');
    const calculateBtn = document.getElementById('calculateFlames');
    const resultDiv = document.getElementById('flamesResult');
    
    const relationshipData = {
        'F': { name: 'Friends', emoji: '👫', message: 'You two are best friends forever!' },
        'L': { name: 'Love', emoji: '❤️', message: 'True love is in the air!' },
        'A': { name: 'Affection', emoji: '🥰', message: 'Sweet affection between you!' },
        'M': { name: 'Marriage', emoji: '💍', message: 'Wedding bells are ringing!' },
        'E': { name: 'Enemies', emoji: '😠', message: 'Maybe not the best match...' },
        'S': { name: 'Siblings', emoji: '👨‍👩‍👧', message: 'Like brother and sister!' }
    };
    
    function calculateFlames() {
        const name1 = name1Input.value.toLowerCase().replace(/\s/g, '');
        const name2 = name2Input.value.toLowerCase().replace(/\s/g, '');
        
        if (!name1 || !name2) {
            resultDiv.innerHTML = '<p style="color: var(--danger-color);">⚠️ Please enter both names!</p>';
            return;
        }
        
        const originalName1 = name1Input.value.trim();
        const originalName2 = name2Input.value.trim();
        
        // Convert to arrays
        let name1List = name1.split('');
        let name2List = name2.split('');
        
        // Remove common characters
        const name1Copy = [...name1List];
        for (let char of name1Copy) {
            const index2 = name2List.indexOf(char);
            if (index2 !== -1) {
                name1List.splice(name1List.indexOf(char), 1);
                name2List.splice(index2, 1);
            }
        }
        
        const count = name1List.length + name2List.length;
        
        // Calculate FLAMES
        const flames = ['F', 'L', 'A', 'M', 'E', 'S'];
        let index = 0;
        
        while (flames.length > 1) {
            index = (index + count - 1) % flames.length;
            flames.splice(index, 1);
            if (index === flames.length && flames.length > 0) {
                index = 0;
            }
        }
        
        const result = flames[0];
        const relationship = relationshipData[result];
        
        // Display result with animation
        resultDiv.innerHTML = `
            <div class="result-card">
                <div class="result-emoji">${relationship.emoji}</div>
                <div class="result-names">${originalName1} & ${originalName2}</div>
                <div class="result-relationship">${relationship.name}</div>
                <div class="result-details">
                    <div>${relationship.message}</div>
                    <div style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.9;">
                        Remaining letters: ${count}
                    </div>
                </div>
            </div>
        `;
    }
    
    calculateBtn.addEventListener('click', calculateFlames);
    name1Input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateFlames();
    });
    name2Input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateFlames();
    });
}

// ============================================
// COLLATZ CONJECTURE
// ============================================
function getCollatzHTML() {
    return `
        <div class="project-content">
            <h2>🔢 Collatz Conjecture</h2>
            <p class="project-desc">The famous 3n+1 problem - Watch the sequence reach 1!</p>
            <div class="collatz-container">
                <div class="rules">
                    <h3>Rules:</h3>
                    <div class="rule-item">📉 If even: divide by 2</div>
                    <div class="rule-item">📈 If odd: multiply by 3 and add 1</div>
                    <div class="rule-item">🎯 Continue until reaching 1</div>
                </div>
                
                <div class="input-section">
                    <input type="number" id="collatzNumber" placeholder="Enter a positive integer" min="1" value="27">
                    <button class="btn-generate" id="generateCollatz">🔢 Generate Sequence</button>
                </div>
                
                <div class="collatz-stats" id="collatzStats"></div>
                
                <div class="sequence-display" id="sequenceDisplay"></div>
                
                <canvas id="collatzGraph" width="800" height="300"></canvas>
            </div>
        </div>
        
        <style>
            .collatz-container {
                padding: 2rem;
                max-width: 900px;
                margin: 0 auto;
            }
            
            .rules {
                background: var(--surface-color);
                padding: 1.5rem;
                border-radius: 15px;
                margin-bottom: 2rem;
                border: 2px solid var(--border-color);
            }
            
            .rules h3 {
                margin-bottom: 1rem;
                color: var(--primary-color);
            }
            
            .rule-item {
                padding: 0.5rem;
                margin: 0.5rem 0;
                background: var(--bg-color);
                border-radius: 8px;
                font-size: 1.1rem;
            }
            
            .input-section {
                display: flex;
                gap: 1rem;
                justify-content: center;
                margin-bottom: 2rem;
                flex-wrap: wrap;
            }
            
            .input-section input {
                flex: 1;
                max-width: 300px;
                padding: 1rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
                text-align: center;
            }
            
            .collatz-stats {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .stat-box {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                padding: 1.5rem;
                border-radius: 15px;
                text-align: center;
            }
            
            .stat-label {
                font-size: 0.9rem;
                opacity: 0.9;
                margin-bottom: 0.5rem;
            }
            
            .stat-value {
                font-size: 2rem;
                font-weight: bold;
            }
            
            .sequence-display {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                padding: 1.5rem;
                margin-bottom: 2rem;
                max-height: 300px;
                overflow-y: auto;
            }
            
            .sequence-number {
                display: inline-block;
                background: var(--primary-color);
                color: white;
                padding: 0.5rem 1rem;
                margin: 0.25rem;
                border-radius: 8px;
                font-family: 'Courier New', monospace;
                font-weight: bold;
                animation: fadeIn 0.3s ease;
            }
            
            .sequence-arrow {
                display: inline-block;
                color: var(--text-secondary);
                margin: 0 0.25rem;
            }
            
            #collatzGraph {
                background: var(--surface-color);
                border-radius: 15px;
                box-shadow: var(--shadow);
                max-width: 100%;
                height: auto;
                display: block;
                margin: 0 auto;
            }
        </style>
    `;
}

function initCollatz() {
    const numberInput = document.getElementById('collatzNumber');
    const generateBtn = document.getElementById('generateCollatz');
    const statsDiv = document.getElementById('collatzStats');
    const sequenceDiv = document.getElementById('sequenceDisplay');
    const canvas = document.getElementById('collatzGraph');
    const ctx = canvas.getContext('2d');
    
    function generateSequence() {
        let number = parseInt(numberInput.value);
        
        if (!number || number < 1) {
            sequenceDiv.innerHTML = '<p style="color: var(--danger-color);">⚠️ Please enter a positive integer!</p>';
            return;
        }
        
        const originalNumber = number;
        const sequence = [number];
        
        // Generate sequence
        while (number !== 1) {
            if (number % 2 === 0) {
                number = number / 2;
            } else {
                number = 3 * number + 1;
            }
            sequence.push(number);
        }
        
        // Display stats
        const steps = sequence.length - 1;
        const maxNum = Math.max(...sequence);
        
        statsDiv.innerHTML = `
            <div class="stat-box">
                <div class="stat-label">Starting Number</div>
                <div class="stat-value">${originalNumber}</div>
            </div>
            <div class="stat-box">
                <div class="stat-label">Total Steps</div>
                <div class="stat-value">${steps}</div>
            </div>
            <div class="stat-box">
                <div class="stat-label">Highest Number</div>
                <div class="stat-value">${maxNum}</div>
            </div>
            <div class="stat-box">
                <div class="stat-label">Sequence Length</div>
                <div class="stat-value">${sequence.length}</div>
            </div>
        `;
        
        // Display sequence
        sequenceDiv.innerHTML = '';
        sequence.forEach((num, index) => {
            const numEl = document.createElement('span');
            numEl.className = 'sequence-number';
            numEl.textContent = num;
            numEl.style.animationDelay = `${index * 0.02}s`;
            sequenceDiv.appendChild(numEl);
            
            if (index < sequence.length - 1) {
                const arrow = document.createElement('span');
                arrow.className = 'sequence-arrow';
                arrow.textContent = '→';
                sequenceDiv.appendChild(arrow);
            }
        });
        
        // Draw graph
        drawGraph(sequence);
    }
    
    function drawGraph(sequence) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (sequence.length === 0) return;
        
        const padding = 40;
        const graphWidth = canvas.width - 2 * padding;
        const graphHeight = canvas.height - 2 * padding;
        
        const maxValue = Math.max(...sequence);
        const xStep = graphWidth / (sequence.length - 1);
        const yScale = graphHeight / maxValue;
        
        // Draw axes
        ctx.strokeStyle = 'var(--text-secondary)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, canvas.height - padding);
        ctx.lineTo(canvas.width - padding, canvas.height - padding);
        ctx.stroke();
        
        // Draw grid lines
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 0; i <= 5; i++) {
            const y = padding + (graphHeight / 5) * i;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(canvas.width - padding, y);
            ctx.stroke();
        }
        
        // Draw line
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        ctx.beginPath();
        sequence.forEach((value, index) => {
            const x = padding + index * xStep;
            const y = canvas.height - padding - value * yScale;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.stroke();
        
        // Draw points
        ctx.fillStyle = '#8b5cf6';
        sequence.forEach((value, index) => {
            const x = padding + index * xStep;
            const y = canvas.height - padding - value * yScale;
            
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        });
        
        // Draw labels
        ctx.fillStyle = '#94a3b8';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Steps →', canvas.width / 2, canvas.height - 10);
        
        ctx.save();
        ctx.translate(15, canvas.height / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.fillText('Value', 0, 0);
        ctx.restore();
    }
    
    generateBtn.addEventListener('click', generateSequence);
    numberInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') generateSequence();
    });
    
    // Generate initial sequence
    generateSequence();
}

function getArmstrongHTML() { 
    return `
        <div class="project-content">
            <h2>💎 Armstrong Number Checker</h2>
            <p class="project-desc">Check if a number equals the sum of its digits raised to the power of the number of digits</p>
            <div class="armstrong-container">
                <div class="input-section">
                    <input type="number" id="armstrongNumber" placeholder="Enter a number" min="0">
                    <button class="btn-check" id="checkArmstrong">💎 Check</button>
                </div>
                
                <div class="result-display" id="armstrongResult"></div>
                
                <div class="examples">
                    <h4>Examples of Armstrong Numbers:</h4>
                    <div class="example-grid">
                        <button class="example-btn" data-num="0">0</button>
                        <button class="example-btn" data-num="1">1</button>
                        <button class="example-btn" data-num="153">153</button>
                        <button class="example-btn" data-num="370">370</button>
                        <button class="example-btn" data-num="371">371</button>
                        <button class="example-btn" data-num="407">407</button>
                        <button class="example-btn" data-num="1634">1634</button>
                        <button class="example-btn" data-num="9474">9474</button>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .armstrong-container {
                padding: 2rem;
                max-width: 700px;
                margin: 0 auto;
            }
            
            .result-display {
                margin: 2rem 0;
                min-height: 200px;
            }
            
            .armstrong-result {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                padding: 2rem;
                animation: fadeIn 0.5s ease;
            }
            
            .result-header {
                font-size: 1.8rem;
                font-weight: bold;
                margin-bottom: 1.5rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid var(--border-color);
            }
            
            .result-header.is-armstrong {
                color: var(--success-color);
            }
            
            .result-header.not-armstrong {
                color: var(--danger-color);
            }
            
            .calculation-steps {
                margin: 1.5rem 0;
                padding: 1rem;
                background: var(--bg-color);
                border-radius: 10px;
            }
            
            .step {
                margin: 0.75rem 0;
                font-size: 1.1rem;
                font-family: 'Courier New', monospace;
            }
            
            .digit-breakdown {
                display: flex;
                gap: 1rem;
                justify-content: center;
                flex-wrap: wrap;
                margin: 1.5rem 0;
            }
            
            .digit-card {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                padding: 1rem;
                border-radius: 10px;
                min-width: 80px;
                text-align: center;
            }
            
            .digit-value {
                font-size: 2rem;
                font-weight: bold;
            }
            
            .digit-power {
                font-size: 0.9rem;
                opacity: 0.9;
                margin-top: 0.5rem;
            }
            
            .examples {
                margin-top: 3rem;
                text-align: center;
            }
            
            .examples h4 {
                margin-bottom: 1rem;
                color: var(--text-secondary);
            }
            
            .example-grid {
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .example-btn {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                color: var(--text-color);
                padding: 0.75rem 1.5rem;
                border-radius: 10px;
                cursor: pointer;
                font-size: 1.1rem;
                transition: var(--transition);
            }
            
            .example-btn:hover {
                border-color: var(--primary-color);
                transform: translateY(-2px);
            }
        </style>
    `;
}

function initArmstrong() {
    const numberInput = document.getElementById('armstrongNumber');
    const checkBtn = document.getElementById('checkArmstrong');
    const resultDiv = document.getElementById('armstrongResult');
    const exampleBtns = document.querySelectorAll('.example-btn');
    
    function checkArmstrong(num) {
        if (num === null || num === undefined || num < 0) {
            resultDiv.innerHTML = '<p style="color: var(--danger-color);">⚠️ Please enter a valid positive number!</p>';
            return;
        }
        
        const numStr = num.toString();
        const numDigits = numStr.length;
        const digits = numStr.split('').map(Number);
        
        // Calculate sum
        let sum = 0;
        const calculations = [];
        
        digits.forEach(digit => {
            const power = Math.pow(digit, numDigits);
            sum += power;
            calculations.push({ digit, power });
        });
        
        const isArmstrong = sum === num;
        
        // Display result
        let html = `
            <div class="armstrong-result">
                <div class="result-header ${isArmstrong ? 'is-armstrong' : 'not-armstrong'}">
                    ${isArmstrong ? '✅ Armstrong Number!' : '❌ Not an Armstrong Number'}
                </div>
                
                <div class="calculation-steps">
                    <div class="step"><strong>Number:</strong> ${num}</div>
                    <div class="step"><strong>Number of digits:</strong> ${numDigits}</div>
                    <div class="step"><strong>Calculation:</strong> Each digit raised to power ${numDigits}</div>
                </div>
                
                <div class="digit-breakdown">
        `;
        
        calculations.forEach(calc => {
            html += `
                <div class="digit-card">
                    <div class="digit-value">${calc.digit}</div>
                    <div class="digit-power">${calc.digit}^${numDigits} = ${calc.power}</div>
                </div>
            `;
        });
        
        html += `
                </div>
                
                <div class="calculation-steps">
                    <div class="step">
                        <strong>Sum:</strong> ${calculations.map(c => c.power).join(' + ')} = ${sum}
                    </div>
                    <div class="step">
                        ${isArmstrong 
                            ? `<span style="color: var(--success-color);">✓ ${sum} = ${num} (Armstrong Number!)</span>`
                            : `<span style="color: var(--danger-color);">✗ ${sum} ≠ ${num} (Not Armstrong)</span>`
                        }
                    </div>
                </div>
            </div>
        `;
        
        resultDiv.innerHTML = html;
    }
    
    checkBtn.addEventListener('click', () => {
        const num = parseInt(numberInput.value);
        checkArmstrong(num);
    });
    
    numberInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const num = parseInt(numberInput.value);
            checkArmstrong(num);
        }
    });
    
    exampleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const num = parseInt(btn.getAttribute('data-num'));
            numberInput.value = num;
            checkArmstrong(num);
        });
    });
}

// ============================================
// HANGMAN GAME
// ============================================
function getHangmanHTML() {
    return `
        <div class="project-content">
            <h2>🎮 Hangman Game</h2>
            <div class="hangman-container">
                <div class="game-stats">
                    <div class="stat">
                        <span class="stat-label">Attempts Left:</span>
                        <span class="stat-value" id="attemptsLeft">6</span>
                    </div>
                    <div class="stat">
                        <span class="stat-label">Word Length:</span>
                        <span class="stat-value" id="wordLength">0</span>
                    </div>
                </div>
                
                <canvas id="hangmanCanvas" width="300" height="350"></canvas>
                
                <div class="word-display" id="wordDisplay"></div>
                
                <div class="guessed-letters">
                    <h4>Guessed Letters:</h4>
                    <div id="guessedList">None</div>
                </div>
                
                <div class="keyboard" id="keyboard"></div>
                
                <div class="game-message" id="gameMessage"></div>
                
                <button class="btn-new-game" id="newGameBtn">🎮 New Game</button>
            </div>
        </div>
        
        <style>
            .hangman-container {
                padding: 2rem;
                max-width: 800px;
                margin: 0 auto;
                text-align: center;
            }
            
            .game-stats {
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin-bottom: 2rem;
            }
            
            .stat {
                background: var(--surface-color);
                padding: 1rem 2rem;
                border-radius: 10px;
                border: 2px solid var(--border-color);
            }
            
            .stat-label {
                display: block;
                font-size: 0.9rem;
                color: var(--text-secondary);
                margin-bottom: 0.5rem;
            }
            
            .stat-value {
                display: block;
                font-size: 2rem;
                font-weight: bold;
                color: var(--primary-color);
            }
            
            #hangmanCanvas {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 15px;
                margin: 2rem auto;
                display: block;
                box-shadow: var(--shadow);
            }
            
            .word-display {
                font-size: 3rem;
                letter-spacing: 1rem;
                margin: 2rem 0;
                font-family: 'Courier New', monospace;
                font-weight: bold;
                min-height: 4rem;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-wrap: wrap;
            }
            
            .letter-box {
                display: inline-block;
                width: 50px;
                height: 60px;
                line-height: 60px;
                margin: 0.25rem;
                border-bottom: 3px solid var(--primary-color);
                color: var(--text-color);
            }
            
            .guessed-letters {
                margin: 2rem 0;
            }
            
            .guessed-letters h4 {
                color: var(--text-secondary);
                margin-bottom: 1rem;
            }
            
            #guessedList {
                font-size: 1.2rem;
                color: var(--text-color);
                min-height: 2rem;
            }
            
            .keyboard {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                justify-content: center;
                margin: 2rem 0;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            }
            
            .key-btn {
                width: 45px;
                height: 45px;
                background: var(--primary-color);
                color: white;
                border: none;
                border-radius: 8px;
                font-size: 1.2rem;
                font-weight: bold;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .key-btn:hover:not(:disabled) {
                transform: scale(1.1);
                box-shadow: 0 3px 10px rgba(99, 102, 241, 0.4);
            }
            
            .key-btn:disabled {
                background: var(--border-color);
                cursor: not-allowed;
                opacity: 0.5;
            }
            
            .key-btn.correct {
                background: var(--success-color);
            }
            
            .key-btn.wrong {
                background: var(--danger-color);
            }
            
            .game-message {
                font-size: 1.5rem;
                font-weight: bold;
                min-height: 3rem;
                margin: 2rem 0;
            }
            
            .game-message.win {
                color: var(--success-color);
            }
            
            .game-message.lose {
                color: var(--danger-color);
            }
            
            .btn-new-game {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                border: none;
                padding: 1rem 3rem;
                border-radius: 50px;
                font-size: 1.2rem;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .btn-new-game:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
            }
        </style>
    `;
}

function initHangman() {
    const canvas = document.getElementById('hangmanCanvas');
    const ctx = canvas.getContext('2d');
    const wordDisplay = document.getElementById('wordDisplay');
    const guessedList = document.getElementById('guessedList');
    const attemptsLeftEl = document.getElementById('attemptsLeft');
    const wordLengthEl = document.getElementById('wordLength');
    const keyboard = document.getElementById('keyboard');
    const gameMessage = document.getElementById('gameMessage');
    const newGameBtn = document.getElementById('newGameBtn');
    
    const words = ['python', 'programming', 'computer', 'algorithm', 'keyboard', 
                   'monitor', 'software', 'hardware', 'database', 'network',
                   'internet', 'developer', 'variable', 'function', 'application'];
    
    let currentWord = '';
    let guessedLetters = [];
    let correctLetters = [];
    let wrongAttempts = 0;
    const maxAttempts = 6;
    let gameOver = false;
    
    // Create keyboard
    function createKeyboard() {
        keyboard.innerHTML = '';
        const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
        
        letters.forEach(letter => {
            const btn = document.createElement('button');
            btn.className = 'key-btn';
            btn.textContent = letter.toUpperCase();
            btn.dataset.letter = letter;
            btn.addEventListener('click', () => guessLetter(letter));
            keyboard.appendChild(btn);
        });
    }
    
    // Draw hangman parts
    function drawHangman(stage) {
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 3;
        ctx.lineCap = 'round';
        
        switch(stage) {
            case 1: // Base
                ctx.beginPath();
                ctx.moveTo(50, 320);
                ctx.lineTo(200, 320);
                ctx.stroke();
                break;
            case 2: // Pole
                ctx.beginPath();
                ctx.moveTo(100, 320);
                ctx.lineTo(100, 50);
                ctx.stroke();
                break;
            case 3: // Top beam
                ctx.beginPath();
                ctx.moveTo(100, 50);
                ctx.lineTo(200, 50);
                ctx.stroke();
                break;
            case 4: // Rope
                ctx.beginPath();
                ctx.moveTo(200, 50);
                ctx.lineTo(200, 80);
                ctx.stroke();
                break;
            case 5: // Head
                ctx.beginPath();
                ctx.arc(200, 100, 20, 0, Math.PI * 2);
                ctx.stroke();
                // Eyes
                ctx.fillStyle = '#64748b';
                ctx.beginPath();
                ctx.arc(195, 95, 2, 0, Math.PI * 2);
                ctx.fill();
                ctx.beginPath();
                ctx.arc(205, 95, 2, 0, Math.PI * 2);
                ctx.fill();
                // Sad mouth
                ctx.beginPath();
                ctx.arc(200, 105, 8, 0, Math.PI, false);
                ctx.stroke();
                break;
            case 6: // Body
                ctx.beginPath();
                ctx.moveTo(200, 120);
                ctx.lineTo(200, 200);
                ctx.stroke();
                break;
            case 7: // Left arm
                ctx.beginPath();
                ctx.moveTo(200, 140);
                ctx.lineTo(170, 170);
                ctx.stroke();
                break;
            case 8: // Right arm
                ctx.beginPath();
                ctx.moveTo(200, 140);
                ctx.lineTo(230, 170);
                ctx.stroke();
                break;
            case 9: // Left leg
                ctx.beginPath();
                ctx.moveTo(200, 200);
                ctx.lineTo(180, 250);
                ctx.stroke();
                break;
            case 10: // Right leg (game over)
                ctx.beginPath();
                ctx.moveTo(200, 200);
                ctx.lineTo(220, 250);
                ctx.stroke();
                break;
        }
    }
    
    // Initialize game
    function initGame() {
        currentWord = words[Math.floor(Math.random() * words.length)];
        guessedLetters = [];
        correctLetters = [];
        wrongAttempts = 0;
        gameOver = false;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Update UI
        wordLengthEl.textContent = currentWord.length;
        attemptsLeftEl.textContent = maxAttempts;
        guessedList.textContent = 'None';
        gameMessage.textContent = '';
        gameMessage.className = 'game-message';
        
        createKeyboard();
        updateWordDisplay();
    }
    
    // Update word display
    function updateWordDisplay() {
        wordDisplay.innerHTML = '';
        for (let letter of currentWord) {
            const letterBox = document.createElement('div');
            letterBox.className = 'letter-box';
            letterBox.textContent = correctLetters.includes(letter) ? letter.toUpperCase() : '';
            wordDisplay.appendChild(letterBox);
        }
    }
    
    // Guess letter
    function guessLetter(letter) {
        if (gameOver || guessedLetters.includes(letter)) return;
        
        guessedLetters.push(letter);
        
        // Update button
        const btn = keyboard.querySelector(`[data-letter="${letter}"]`);
        btn.disabled = true;
        
        if (currentWord.includes(letter)) {
            // Correct guess
            correctLetters.push(letter);
            btn.classList.add('correct');
            
            updateWordDisplay();
            
            // Check win
            if (currentWord.split('').every(l => correctLetters.includes(l))) {
                gameOver = true;
                gameMessage.textContent = '🎉 Congratulations! You won!';
                gameMessage.className = 'game-message win';
                disableAllKeys();
            }
        } else {
            // Wrong guess
            wrongAttempts++;
            btn.classList.add('wrong');
            
            // Draw hangman part (stages 1-4 are gallows, 5-10 are body parts)
            const drawStage = wrongAttempts + 4;
            drawHangman(drawStage);
            
            attemptsLeftEl.textContent = maxAttempts - wrongAttempts;
            
            // Check lose
            if (wrongAttempts >= maxAttempts) {
                gameOver = true;
                gameMessage.innerHTML = `😔 Game Over! The word was: <strong>${currentWord.toUpperCase()}</strong>`;
                gameMessage.className = 'game-message lose';
                disableAllKeys();
                updateWordDisplay();
                // Show complete word
                wordDisplay.innerHTML = '';
                for (let letter of currentWord) {
                    const letterBox = document.createElement('div');
                    letterBox.className = 'letter-box';
                    letterBox.textContent = letter.toUpperCase();
                    letterBox.style.color = 'var(--danger-color)';
                    wordDisplay.appendChild(letterBox);
                }
            }
        }
        
        // Update guessed letters list
        guessedList.textContent = guessedLetters.join(', ').toUpperCase();
    }
    
    function disableAllKeys() {
        keyboard.querySelectorAll('.key-btn').forEach(btn => {
            btn.disabled = true;
        });
    }
    
    // Draw initial gallows
    function drawGallows() {
        drawHangman(1); // Base
        drawHangman(2); // Pole
        drawHangman(3); // Top beam
        drawHangman(4); // Rope
    }
    
    newGameBtn.addEventListener('click', () => {
        initGame();
        drawGallows();
    });
    
    // Keyboard support
    document.addEventListener('keypress', (e) => {
        if (gameOver) return;
        const letter = e.key.toLowerCase();
        if (/^[a-z]$/.test(letter) && !guessedLetters.includes(letter)) {
            guessLetter(letter);
        }
    });
    
    // Initialize
    initGame();
    drawGallows();
}

function getCollatzHTML() { return '<h2>🔢 Collatz Conjecture - Coming Soon!</h2>'; }
function initCollatz() {}

function getPrimeAnalyzerHTML() { return '<h2>🔱 Prime Analyzer - Coming Soon!</h2>'; }
function initPrimeAnalyzer() {}

// ============================================
// TURTLE GRAPHICS - STAR DESIGN
// ============================================
function getTurtleStarHTML() {
    return `
        <div class="project-content">
            <h2>⭐ Turtle Star Design</h2>
            <p class="project-desc">18-pointed yellow star pattern on black background</p>
            <div class="turtle-container">
                <canvas id="turtleCanvas" width="600" height="600"></canvas>
                <button class="btn-generate" id="generateBtn">🎨 Generate</button>
            </div>
        </div>
        
        <style>
            .turtle-container {
                text-align: center;
                padding: 2rem;
            }
            
            .project-desc {
                text-align: center;
                color: var(--text-secondary);
                margin-bottom: 2rem;
            }
            
            #turtleCanvas {
                background: #000;
                border-radius: 15px;
                box-shadow: var(--shadow);
                max-width: 100%;
                height: auto;
                display: block;
                margin: 0 auto 2rem;
            }
            
            .btn-generate {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                border: none;
                padding: 1rem 3rem;
                border-radius: 50px;
                font-size: 1.2rem;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .btn-generate:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
            }
        </style>
    `;
}

function getTurtleStarDesign() {
    const canvas = document.getElementById('turtleCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Setup
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let angle = 0;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    
    // Draw 18 lines rotated to create star pattern
    for (let i = 0; i < 18; i++) {
        const endX = x + Math.cos(angle) * 200;
        const endY = y + Math.sin(angle) * 200;
        
        ctx.lineTo(endX, endY);
        ctx.stroke();
        
        // Return to center
        ctx.moveTo(x, y);
        
        // Rotate 100 degrees (converted to radians)
        angle += (100 * Math.PI) / 180;
    }
}

// ============================================
// TURTLE GRAPHICS - RAINBOW SPIRAL
// ============================================
function getTurtleSpiralHTML() {
    return `
        <div class="project-content">
            <h2>🌈 Turtle Rainbow Spiral</h2>
            <p class="project-desc">72 overlapping circles with VIBGYOR rainbow colors</p>
            <div class="turtle-container">
                <canvas id="turtleCanvas" width="600" height="600"></canvas>
                <button class="btn-generate" id="generateBtn">🎨 Generate</button>
            </div>
        </div>
    `;
}

function getTurtleRainbowSpiral() {
    const canvas = document.getElementById('turtleCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const colours = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    ctx.lineWidth = 2;
    
    let angle = 0;
    const radius = 150;
    
    // Draw 72 circles with 5-degree rotation between each
    for (let i = 0; i < 72; i++) {
        ctx.strokeStyle = colours[i % 7];
        
        const offsetX = centerX + Math.cos(angle) * 0;
        const offsetY = centerY + Math.sin(angle) * 0;
        
        ctx.beginPath();
        ctx.arc(offsetX, offsetY, radius, angle, angle + Math.PI * 2);
        ctx.stroke();
        
        // Rotate 5 degrees
        angle += (5 * Math.PI) / 180;
    }
}

// ============================================
// TURTLE GRAPHICS - RAINBOW MANDALA
// ============================================
function getTurtleRainbowMandalaHTML() {
    return `
        <div class="project-content">
            <h2>🌺 Turtle Rainbow Mandala</h2>
            <p class="project-desc">10-petal mandala with concentric rainbow circles</p>
            <div class="turtle-container">
                <canvas id="turtleCanvas" width="600" height="600"></canvas>
                <button class="btn-generate" id="generateBtn">🎨 Generate</button>
            </div>
        </div>
    `;
}

function getTurtleRainbowMandala() {
    const canvas = document.getElementById('turtleCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const colour = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'];
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    ctx.lineWidth = 1;
    
    // Create 10 petals (360 degrees / 10 = 36 degrees each)
    for (let petal = 0; petal < 10; petal++) {
        const petalAngle = (petal * 36 * Math.PI) / 180;
        
        // Draw concentric circles with increasing radii for each petal
        for (let i = 49; i < 106; i++) {
            ctx.strokeStyle = colour[i % 7];
            
            const offsetX = centerX;
            const offsetY = centerY;
            
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(petalAngle);
            ctx.translate(-centerX, -centerY);
            
            ctx.beginPath();
            ctx.arc(offsetX, offsetY, i, 0, Math.PI * 2);
            ctx.stroke();
            
            ctx.restore();
        }
    }
}

// ============================================
// TURTLE GRAPHICS - MANDALA DESIGN
// ============================================
function getTurtleMandalaHTML() {
    return `
        <div class="project-content">
            <h2>🌟 Turtle Mandala Design</h2>
            <p class="project-desc">Complex geometric mandala with layered stars and circles</p>
            <div class="turtle-container">
                <canvas id="turtleCanvas" width="650" height="650"></canvas>
                <button class="btn-generate" id="generateBtn">🎨 Generate</button>
            </div>
        </div>
    `;
}

function getTurtleMandalaDesign() {
    const canvas = document.getElementById('turtleCanvas');
    const ctx = canvas.getContext('2d');
    
    // Clear canvas
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    // Helper function to convert turtle coordinates
    function drawFromCenter(operations) {
        ctx.save();
        ctx.translate(centerX, centerY);
        
        let x = 0, y = 0, angle = 0;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        
        operations.forEach(op => {
            if (op.type === 'pendown') {
                ctx.moveTo(x, y);
            } else if (op.type === 'forward') {
                x += Math.cos(angle) * op.distance;
                y += Math.sin(angle) * op.distance;
                if (op.draw) ctx.lineTo(x, y);
            } else if (op.type === 'right') {
                angle += (op.degrees * Math.PI) / 180;
            } else if (op.type === 'left') {
                angle -= (op.degrees * Math.PI) / 180;
            } else if (op.type === 'setpos') {
                x = op.x;
                y = op.y;
                if (op.draw) ctx.lineTo(x, y);
                else ctx.moveTo(x, y);
            } else if (op.type === 'circle') {
                ctx.arc(x, y, op.radius, 0, Math.PI * 2);
            } else if (op.type === 'arcmove') {
                const arcAngle = (op.extent * Math.PI) / 180;
                const arcRadius = op.radius;
                const centerAngle = angle + Math.PI / 2;
                const arcCenterX = x + Math.cos(centerAngle) * arcRadius;
                const arcCenterY = y + Math.sin(centerAngle) * arcRadius;
                
                x = arcCenterX + Math.cos(angle - arcAngle + Math.PI / 2) * arcRadius;
                y = arcCenterY + Math.sin(angle - arcAngle + Math.PI / 2) * arcRadius;
                angle -= arcAngle;
                ctx.moveTo(x, y);
            }
        });
        
        ctx.stroke();
        ctx.restore();
    }
    
    // Draw circles
    ctx.strokeStyle = 'aqua';
    ctx.lineWidth = 2;
    
    let ops = [
        { type: 'setpos', x: 0, y: 18, draw: false },
        { type: 'forward', distance: 150, draw: false },
        { type: 'right', degrees: 43 },
        { type: 'forward', distance: 150, draw: false },
        { type: 'left', degrees: 115.15 },
        { type: 'arcmove', radius: 272, extent: 18 },
        { type: 'pendown' },
        { type: 'circle', radius: 20 }
    ];
    
    drawFromCenter(ops);
    
    // Draw 9 more circles
    for (let i = 0; i < 9; i++) {
        ops = [
            { type: 'arcmove', radius: 272, extent: 36 },
            { type: 'circle', radius: 20 }
        ];
        drawFromCenter(ops);
    }
    
    // Draw white stars
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((-7 * Math.PI) / 180);
    
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        let angle = (i * 36 * Math.PI) / 180;
        ctx.rotate(angle - (i > 0 ? (36 * Math.PI) / 180 : 0));
        
        for (let j = 0; j < 2; j++) {
            ctx.moveTo(0, 0);
            ctx.lineTo(165 * Math.cos(0), 165 * Math.sin(0));
            ctx.rotate((50 * Math.PI) / 180);
            ctx.lineTo(165 * Math.cos(0), 165 * Math.sin(0));
            ctx.rotate((130 * Math.PI) / 180);
        }
        ctx.stroke();
    }
    ctx.restore();
    
    // Draw blue stars
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((-7 * Math.PI) / 180);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        let angle = (i * 36 * Math.PI) / 180;
        ctx.rotate(angle - (i > 0 ? (36 * Math.PI) / 180 : 0));
        
        for (let j = 0; j < 2; j++) {
            ctx.moveTo(0, 0);
            ctx.lineTo(115, 0);
            ctx.rotate((50 * Math.PI) / 180);
            ctx.lineTo(115, 0);
            ctx.rotate((130 * Math.PI) / 180);
        }
        ctx.stroke();
    }
    ctx.restore();
    
    // Draw aqua stars
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((-7 * Math.PI) / 180);
    ctx.strokeStyle = 'aqua';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < 10; i++) {
        ctx.beginPath();
        let angle = (i * 36 * Math.PI) / 180;
        ctx.rotate(angle - (i > 0 ? (36 * Math.PI) / 180 : 0));
        
        for (let j = 0; j < 2; j++) {
            ctx.moveTo(0, 0);
            ctx.lineTo(50, 0);
            ctx.rotate((50 * Math.PI) / 180);
            ctx.lineTo(50, 0);
            ctx.rotate((130 * Math.PI) / 180);
        }
        ctx.stroke();
    }
    ctx.restore();
}

// ============================================
// TURTLE GRAPHICS INITIALIZER
// ============================================
function initTurtleGraphics(type) {
    const generateBtn = document.getElementById('generateBtn');
    
    const drawFunctions = {
        'star': getTurtleStarDesign,
        'spiral': getTurtleRainbowSpiral,
        'rainbow-mandala': getTurtleRainbowMandala,
        'mandala': getTurtleMandalaDesign
    };
    
    const drawFunction = drawFunctions[type];
    
    if (drawFunction) {
        // Draw immediately
        setTimeout(drawFunction, 100);
        
        // Add click handler for regenerate
        generateBtn.addEventListener('click', drawFunction);
    }
}

// ============================================
// MORSE CODE TRANSLATOR
// ============================================
function getMorseCodeHTML() {
    return `
        <div class="project-content">
            <h2>📻 Morse Code Translator</h2>
            <div class="morse-container">
                <div class="input-section">
                    <label for="textInput">Enter Text:</label>
                    <textarea id="textInput" rows="4" placeholder="Type your message here..."></textarea>
                    <button class="btn-translate" id="translateBtn">📻 Translate to Morse</button>
                </div>
                
                <div class="output-section">
                    <h3>Morse Code Output:</h3>
                    <div class="morse-output" id="morseOutput">
                        <p class="placeholder">Your morse code will appear here...</p>
                    </div>
                </div>
                
                <div class="morse-chart">
                    <h4>📊 Morse Code Reference Chart</h4>
                    <div class="chart-grid" id="morseChart"></div>
                </div>
            </div>
        </div>
        
        <style>
            .morse-container {
                padding: 2rem;
                max-width: 800px;
                margin: 0 auto;
            }
            
            .input-section {
                margin-bottom: 2rem;
            }
            
            .input-section label {
                display: block;
                margin-bottom: 0.5rem;
                font-size: 1.1rem;
                font-weight: 600;
            }
            
            .input-section textarea {
                width: 100%;
                padding: 1rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
                resize: vertical;
                font-family: inherit;
            }
            
            .btn-translate {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 50px;
                font-size: 1.1rem;
                cursor: pointer;
                margin-top: 1rem;
                transition: var(--transition);
            }
            
            .btn-translate:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
            }
            
            .output-section h3 {
                margin-bottom: 1rem;
            }
            
            .morse-output {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 10px;
                padding: 1.5rem;
                min-height: 100px;
                margin-bottom: 2rem;
            }
            
            .morse-word {
                display: inline-block;
                margin: 0.5rem;
                padding: 0.75rem 1rem;
                background: var(--bg-color);
                border-radius: 8px;
                font-family: 'Courier New', monospace;
                font-size: 1.2rem;
                font-weight: bold;
                color: var(--primary-color);
                animation: fadeIn 0.3s ease;
            }
            
            .placeholder {
                color: var(--text-secondary);
                text-align: center;
                font-style: italic;
            }
            
            .morse-chart {
                margin-top: 3rem;
            }
            
            .morse-chart h4 {
                margin-bottom: 1rem;
                text-align: center;
            }
            
            .chart-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
                gap: 0.5rem;
            }
            
            .chart-item {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                padding: 0.5rem;
                text-align: center;
                font-size: 0.9rem;
            }
            
            .chart-char {
                font-weight: bold;
                font-size: 1.1rem;
                color: var(--primary-color);
            }
            
            .chart-morse {
                font-family: 'Courier New', monospace;
                color: var(--text-secondary);
                margin-top: 0.25rem;
            }
        </style>
    `;
}

function initMorseCode() {
    const morseCode = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
        'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
        '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
        '8': '---..', '9': '----.', ' ': '/'
    };
    
    const textInput = document.getElementById('textInput');
    const translateBtn = document.getElementById('translateBtn');
    const morseOutput = document.getElementById('morseOutput');
    const morseChart = document.getElementById('morseChart');
    
    // Populate morse chart
    Object.keys(morseCode).forEach(char => {
        if (char !== ' ') {
            const item = document.createElement('div');
            item.className = 'chart-item';
            item.innerHTML = `
                <div class="chart-char">${char}</div>
                <div class="chart-morse">${morseCode[char]}</div>
            `;
            morseChart.appendChild(item);
        }
    });
    
    // Translate function
    function translate() {
        const text = textInput.value.toUpperCase();
        if (!text.trim()) {
            morseOutput.innerHTML = '<p class="placeholder">Please enter some text to translate!</p>';
            return;
        }
        
        morseOutput.innerHTML = '';
        const words = text.split(' ');
        
        words.forEach((word, wordIndex) => {
            let morseWord = '';
            for (let char of word) {
                if (morseCode[char]) {
                    morseWord += morseCode[char] + ' ';
                }
            }
            
            if (morseWord.trim()) {
                const wordEl = document.createElement('div');
                wordEl.className = 'morse-word';
                wordEl.textContent = morseWord.trim();
                wordEl.style.animationDelay = `${wordIndex * 0.1}s`;
                morseOutput.appendChild(wordEl);
            }
        });
    }
    
    translateBtn.addEventListener('click', translate);
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            translate();
        }
    });
}

// ============================================
// PRIME ANALYZER
// ============================================
function getPrimeAnalyzerHTML() {
    return `
        <div class="project-content">
            <h2>🔱 Prime Number Analyzer</h2>
            <div class="prime-container">
                <div class="prime-checker">
                    <h3>Check if Number is Prime</h3>
                    <div class="input-group">
                        <input type="number" id="primeInput" placeholder="Enter a number">
                        <button class="btn-check" id="checkPrimeBtn">Check</button>
                    </div>
                    <div class="result-display" id="primeResult"></div>
                </div>
                
                <div class="prime-generator">
                    <h3>Generate Prime Numbers</h3>
                    <div class="input-group">
                        <label>Up to: </label>
                        <input type="number" id="generateLimit" placeholder="100" value="100">
                        <button class="btn-check" id="generatePrimesBtn">Generate</button>
                    </div>
                    <div class="primes-display" id="primesDisplay"></div>
                </div>
                
                <div class="prime-range">
                    <h3>Primes in Range</h3>
                    <div class="range-inputs">
                        <input type="number" id="rangeStart" placeholder="Start" value="1">
                        <span>to</span>
                        <input type="number" id="rangeEnd" placeholder="End" value="50">
                        <button class="btn-check" id="rangeBtn">Find</button>
                    </div>
                    <div class="primes-display" id="rangeDisplay"></div>
                </div>
            </div>
        </div>
        
        <style>
            .prime-container {
                padding: 2rem;
                max-width: 900px;
                margin: 0 auto;
            }
            
            .prime-checker, .prime-generator, .prime-range {
                background: var(--surface-color);
                padding: 1.5rem;
                border-radius: 15px;
                margin-bottom: 2rem;
                border: 2px solid var(--border-color);
            }
            
            .prime-checker h3, .prime-generator h3, .prime-range h3 {
                margin-bottom: 1rem;
                color: var(--primary-color);
            }
            
            .input-group {
                display: flex;
                gap: 1rem;
                align-items: center;
                flex-wrap: wrap;
                margin-bottom: 1rem;
            }
            
            .input-group input {
                flex: 1;
                min-width: 150px;
                padding: 0.75rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
            }
            
            .btn-check {
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 0.75rem 2rem;
                border-radius: 10px;
                cursor: pointer;
                font-size: 1rem;
                transition: var(--transition);
            }
            
            .btn-check:hover {
                transform: scale(1.05);
            }
            
            .result-display {
                font-size: 1.3rem;
                font-weight: bold;
                padding: 1rem;
                border-radius: 10px;
                min-height: 3rem;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .result-display.prime {
                background: var(--success-color);
                color: white;
            }
            
            .result-display.not-prime {
                background: var(--danger-color);
                color: white;
            }
            
            .primes-display {
                display: flex;
                gap: 0.5rem;
                flex-wrap: wrap;
                margin-top: 1rem;
                min-height: 50px;
            }
            
            .prime-number {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                padding: 0.5rem 1rem;
                border-radius: 10px;
                font-weight: bold;
                animation: fadeIn 0.3s ease;
            }
            
            .range-inputs {
                display: flex;
                gap: 1rem;
                align-items: center;
                flex-wrap: wrap;
            }
            
            .range-inputs input {
                width: 120px;
                padding: 0.75rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
            }
        </style>
    `;
}

function initPrimeAnalyzer() {
    const primeInput = document.getElementById('primeInput');
    const checkPrimeBtn = document.getElementById('checkPrimeBtn');
    const primeResult = document.getElementById('primeResult');
    const generateLimit = document.getElementById('generateLimit');
    const generatePrimesBtn = document.getElementById('generatePrimesBtn');
    const primesDisplay = document.getElementById('primesDisplay');
    const rangeStart = document.getElementById('rangeStart');
    const rangeEnd = document.getElementById('rangeEnd');
    const rangeBtn = document.getElementById('rangeBtn');
    const rangeDisplay = document.getElementById('rangeDisplay');
    
    // Check if number is prime
    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    // Check prime
    function checkPrime() {
        const num = parseInt(primeInput.value);
        
        if (isNaN(num)) {
            primeResult.textContent = '⚠️ Please enter a valid number!';
            primeResult.className = 'result-display';
            return;
        }
        
        if (isPrime(num)) {
            primeResult.textContent = `✅ ${num} is a Prime Number!`;
            primeResult.className = 'result-display prime';
        } else {
            primeResult.textContent = `❌ ${num} is NOT a Prime Number`;
            primeResult.className = 'result-display not-prime';
        }
    }
    
    // Generate primes up to limit
    function generatePrimes() {
        const limit = parseInt(generateLimit.value) || 100;
        primesDisplay.innerHTML = '';
        
        const primes = [];
        for (let i = 2; i <= limit; i++) {
            if (isPrime(i)) primes.push(i);
        }
        
        primes.forEach((prime, index) => {
            const el = document.createElement('div');
            el.className = 'prime-number';
            el.textContent = prime;
            el.style.animationDelay = `${index * 0.02}s`;
            primesDisplay.appendChild(el);
        });
        
        if (primes.length === 0) {
            primesDisplay.innerHTML = '<p style="color: var(--text-secondary);">No primes found in range</p>';
        }
    }
    
    // Find primes in range
    function findPrimesInRange() {
        const start = parseInt(rangeStart.value) || 1;
        const end = parseInt(rangeEnd.value) || 50;
        rangeDisplay.innerHTML = '';
        
        const primes = [];
        for (let i = Math.max(2, start); i <= end; i++) {
            if (isPrime(i)) primes.push(i);
        }
        
        primes.forEach((prime, index) => {
            const el = document.createElement('div');
            el.className = 'prime-number';
            el.textContent = prime;
            el.style.animationDelay = `${index * 0.02}s`;
            rangeDisplay.appendChild(el);
        });
        
        if (primes.length === 0) {
            rangeDisplay.innerHTML = '<p style="color: var(--text-secondary);">No primes found in range</p>';
        }
    }
    
    // Event listeners
    checkPrimeBtn.addEventListener('click', checkPrime);
    primeInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') checkPrime();
    });
    
    generatePrimesBtn.addEventListener('click', generatePrimes);
    rangeBtn.addEventListener('click', findPrimesInRange);
    
    // Initial generation
    generatePrimes();
}

// ============================================
// TOWER OF HANOI
// ============================================
function getTowerOfHanoiHTML() {
    return `
        <div class="project-content">
            <h2>🗼 Tower of Hanoi</h2>
            <div class="hanoi-container">
                <div class="controls">
                    <label>
                        Number of Disks:
                        <input type="number" id="diskCount" min="3" max="7" value="3">
                    </label>
                    <button class="btn-solve" id="solveBtn">🎯 Solve</button>
                    <button class="btn-reset" id="resetHanoi">Reset</button>
                </div>
                
                <div class="stats">
                    <div>Moves: <span id="moveCount">0</span></div>
                    <div>Optimal: <span id="optimalMoves">7</span></div>
                </div>
                
                <canvas id="hanoiCanvas" width="800" height="400"></canvas>
            </div>
        </div>
        
        <style>
            .hanoi-container {
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
            
            .controls label {
                display: flex;
                align-items: center;
                gap: 0.5rem;
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
            
            .btn-solve:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            .stats {
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin-bottom: 2rem;
                font-size: 1.2rem;
                font-weight: bold;
            }
            
            .stats span {
                color: var(--primary-color);
            }
            
            #hanoiCanvas {
                background: var(--surface-color);
                border-radius: 15px;
                box-shadow: var(--shadow);
                max-width: 100%;
                height: auto;
                display: block;
                margin: 0 auto;
            }
        </style>
    `;
}

function initTowerOfHanoi() {
    const canvas = document.getElementById('hanoiCanvas');
    const ctx = canvas.getContext('2d');
    const diskCountInput = document.getElementById('diskCount');
    const solveBtn = document.getElementById('solveBtn');
    const resetBtn = document.getElementById('resetHanoi');
    const moveCountEl = document.getElementById('moveCount');
    const optimalMovesEl = document.getElementById('optimalMoves');
    
    let towers = [[], [], []];
    let diskCount = 3;
    let moveCount = 0;
    let isAnimating = false;
    
    const towerX = [200, 400, 600];
    const baseY = 350;
    const diskHeight = 20;
    const maxDiskWidth = 120;
    const colors = ['#ff6b6b', '#f59e0b', '#10b981', '#06b6d4', '#6366f1', '#8b5cf6', '#ec4899'];
    
    function initTowers() {
        towers = [[], [], []];
        moveCount = 0;
        diskCount = parseInt(diskCountInput.value) || 3;
        
        for (let i = diskCount; i >= 1; i--) {
            towers[0].push(i);
        }
        
        optimalMovesEl.textContent = Math.pow(2, diskCount) - 1;
        moveCountEl.textContent = '0';
        drawTowers();
    }
    
    function drawTowers() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw bases and poles
        ctx.fillStyle = '#64748b';
        for (let i = 0; i < 3; i++) {
            // Pole
            ctx.fillRect(towerX[i] - 5, baseY - 200, 10, 200);
            // Base
            ctx.fillRect(towerX[i] - 80, baseY, 160, 10);
        }
        
        // Draw disks
        for (let tower = 0; tower < 3; tower++) {
            for (let disk = 0; disk < towers[tower].length; disk++) {
                const diskSize = towers[tower][disk];
                const diskWidth = (maxDiskWidth * diskSize) / diskCount;
                const x = towerX[tower] - diskWidth / 2;
                const y = baseY - (disk + 1) * diskHeight;
                
                // Disk with gradient
                const gradient = ctx.createLinearGradient(x, y, x + diskWidth, y + diskHeight);
                gradient.addColorStop(0, colors[diskSize - 1]);
                gradient.addColorStop(1, colors[diskSize - 1] + 'aa');
                
                ctx.fillStyle = gradient;
                ctx.fillRect(x, y, diskWidth, diskHeight - 2);
                
                // Border
                ctx.strokeStyle = '#1e293b';
                ctx.lineWidth = 2;
                ctx.strokeRect(x, y, diskWidth, diskHeight - 2);
                
                // Number
                ctx.fillStyle = 'white';
                ctx.font = 'bold 12px Arial';
                ctx.textAlign = 'center';
                ctx.fillText(diskSize, towerX[tower], y + diskHeight / 2 + 4);
            }
        }
    }
    
    async function moveDisk(from, to) {
        const disk = towers[from].pop();
        towers[to].push(disk);
        moveCount++;
        moveCountEl.textContent = moveCount;
        
        drawTowers();
        await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    async function solveHanoi(n, from, to, aux) {
        if (n === 1) {
            await moveDisk(from, to);
            return;
        }
        
        await solveHanoi(n - 1, from, aux, to);
        await moveDisk(from, to);
        await solveHanoi(n - 1, aux, to, from);
    }
    
    async function solve() {
        if (isAnimating) return;
        
        isAnimating = true;
        solveBtn.disabled = true;
        
        await solveHanoi(diskCount, 0, 2, 1);
        
        isAnimating = false;
        solveBtn.disabled = false;
    }
    
    solveBtn.addEventListener('click', solve);
    resetBtn.addEventListener('click', initTowers);
    diskCountInput.addEventListener('change', initTowers);
    
    initTowers();
}
