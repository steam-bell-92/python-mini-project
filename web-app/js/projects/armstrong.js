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
            #armstrongNumber{
                padding:15px;
                border-radius:30px;
                background-color:var(--bg-color);
                color: var(--text-color);
                outline:none;
                border:1px solid white;
            }
            .input-section{
                display:flex;
                justify-content:center;
                align-items:center;
                gap:15px;
            }
            .btn-check{
                padding:15px;
                border-radius:30px;
                background-color:var(--accent-color);
                border:1px solid var(--accent-color);
                font-weight:600;
            }
        </style>
    `;
}

function initArmstrong() {
    const numberInput = document.getElementById('armstrongNumber');
    const checkBtn = document.getElementById('checkArmstrong');
    const resultDiv = document.getElementById('armstrongResult');
    const exampleBtns = document.querySelectorAll('.example-btn');

    function showError(msg) {
        resultDiv.innerHTML = `
            <p style="color: var(--danger-color); font-weight: 600;">
                ⚠️ ${msg}
            </p>
        `;
    }

    function checkArmstrong() {
        const raw = numberInput.value.trim();

        // ❌ Empty input check
        if (raw === '') {
            showError("Please enter a number!");
            return;
        }

        const num = Number(raw);

        // ❌ Invalid number check (NaN, decimals, negatives)
        if (!Number.isFinite(num) || num < 0 || !Number.isInteger(num)) {
            showError("Please enter a valid positive integer!");
            return;
        }

        const numStr = String(num);
        const digits = numStr.split('').map(Number);
        const power = digits.length;

        let sum = 0;
        const calculations = [];

        digits.forEach(d => {
            const p = Math.pow(d, power);
            sum += p;
            calculations.push({ digit: d, power: p });
        });

        const isArmstrong = sum === num;

        resultDiv.innerHTML = `
            <div class="armstrong-result">
                <div class="result-header ${isArmstrong ? 'is-armstrong' : 'not-armstrong'}">
                    ${isArmstrong ? '✅ Armstrong Number!' : '❌ Not an Armstrong Number'}
                </div>

                <div class="calculation-steps">
                    <div class="step"><strong>Number:</strong> ${num}</div>
                    <div class="step"><strong>Digits:</strong> ${power}</div>
                    <div class="step"><strong>Formula:</strong> Sum of digit^${power}</div>
                </div>

                <div class="digit-breakdown">
                    ${calculations.map(c => `
                        <div class="digit-card">
                            <div class="digit-value">${c.digit}</div>
                            <div class="digit-power">${c.digit}^${power} = ${c.power}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="calculation-steps">
                    <div class="step">
                        <strong>Sum:</strong> ${calculations.map(c => c.power).join(' + ')} = ${sum}
                    </div>
                    <div class="step">
                        ${isArmstrong
                            ? `<span style="color: var(--success-color);">✓ ${sum} = ${num}</span>`
                            : `<span style="color: var(--danger-color);">✗ ${sum} ≠ ${num}</span>`
                        }
                    </div>
                </div>
            </div>
        `;
    }

    // Click event
    checkBtn.addEventListener('click', checkArmstrong);

    // Enter key support
    numberInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkArmstrong();
        }
    });

    // Example buttons
    exampleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            numberInput.value = btn.dataset.num;
            checkArmstrong();
        });
    });
}