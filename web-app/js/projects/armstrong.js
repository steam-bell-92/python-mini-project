// Armstrong Number Checker - FULLY WORKING

function getArmstrongHTML() {
    return `
        <div class="project-content armstrong-project">
            <style>
                .armstrong-container {
                    padding: 2rem;
                    max-width: 700px;
                    margin: 0 auto;
                }
                .input-section {
                    display: flex;
                    gap: 15px;
                    justify-content: center;
                    align-items: center;
                    margin-bottom: 2rem;
                }
                #armstrongNumber {
                    padding: 12px 20px;
                    border-radius: 30px;
                    background: var(--bg-color);
                    border: 2px solid var(--border-color);
                    color: var(--text-color);
                    font-size: 1rem;
                    width: 200px;
                }
                .btn-check {
                    padding: 12px 24px;
                    border-radius: 30px;
                    background: #4CAF50;
                    color: white;
                    border: none;
                    font-weight: 600;
                    cursor: pointer;
                }
                .btn-check:hover {
                    background: #45a049;
                }
                .result-display {
                    margin: 2rem 0;
                    min-height: 200px;
                }
                .armstrong-result {
                    background: var(--surface-color);
                    border: 2px solid var(--border-color);
                    border-radius: 15px;
                    padding: 1.5rem;
                }
                .result-header.is-armstrong {
                    color: #4CAF50;
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                .result-header.not-armstrong {
                    color: #f44336;
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                .calculation-steps {
                    margin: 1rem 0;
                    padding: 1rem;
                    background: var(--bg-color);
                    border-radius: 10px;
                }
                .step {
                    margin: 0.5rem 0;
                }
                .digit-breakdown {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin: 1rem 0;
                }
                .digit-card {
                    background: linear-gradient(135deg, #667eea, #764ba2);
                    color: white;
                    padding: 0.8rem;
                    border-radius: 10px;
                    min-width: 70px;
                    text-align: center;
                }
                .digit-value {
                    font-size: 1.5rem;
                    font-weight: bold;
                }
                .digit-power {
                    font-size: 0.8rem;
                    opacity: 0.9;
                }
                .example-grid {
                    display: flex;
                    gap: 0.5rem;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 1rem;
                }
                .example-btn {
                    background: var(--surface-color);
                    border: 2px solid var(--border-color);
                    color: var(--text-color);
                    padding: 0.5rem 1rem;
                    border-radius: 20px;
                    cursor: pointer;
                }
                .example-btn:hover {
                    border-color: #4CAF50;
                }
            </style>
            
            <div class="armstrong-container">
                <h2>💎 Armstrong Number Checker</h2>
                <p>Check if a number equals the sum of its digits raised to the power of number of digits</p>
                
                <div class="input-section">
                    <input type="number" id="armstrongNumber" placeholder="Enter a number" value="153">
                    <button class="btn-check" id="checkArmstrong">🔍 Check</button>
                </div>
                
                <div id="armstrongResult" class="result-display">
                    <div class="armstrong-result">
                        <p>Enter a number and click "Check"</p>
                    </div>
                </div>
                
                <div class="examples">
                    <h4>📝 Examples:</h4>
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
    `;
}

function initArmstrong() {
    console.log('🔢 Initializing Armstrong Number Checker...');
    
    // Get elements
    const numberInput = document.getElementById('armstrongNumber');
    const checkBtn = document.getElementById('checkArmstrong');
    const resultDiv = document.getElementById('armstrongResult');
    const exampleBtns = document.querySelectorAll('.example-btn');
    
    // Check if elements exist
    if (!checkBtn) {
        console.error('Armstrong: Button not found!');
        return;
    }
    
    if (!numberInput) {
        console.error('Armstrong: Input not found!');
        return;
    }
    
    // Function to check Armstrong number
    function checkArmstrong() {
        const numStr = numberInput.value.trim();
        
        if (numStr === '') {
            resultDiv.innerHTML = '<div class="armstrong-result"><p style="color: #f44336;">⚠️ Please enter a number!</p></div>';
            return;
        }
        
        const num = parseInt(numStr);
        
        if (isNaN(num) || num < 0) {
            resultDiv.innerHTML = '<div class="armstrong-result"><p style="color: #f44336;">⚠️ Please enter a valid positive integer!</p></div>';
            return;
        }
        
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
                    <div class="step"><strong>Sum:</strong> ${calculations.map(c => c.power).join(' + ')} = ${sum}</div>
                    <div class="step">
                        ${isArmstrong ? `✓ ${sum} = ${num}` : `✗ ${sum} ≠ ${num}`}
                    </div>
                </div>
            </div>
        `;
    }
    
    // Add event listeners
    checkBtn.addEventListener('click', checkArmstrong);
    numberInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkArmstrong();
        }
    });
    
    // Example buttons
    exampleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const num = btn.getAttribute('data-num');
            numberInput.value = num;
            checkArmstrong();
        });
    });
    
    // Run initial check with default value
    setTimeout(() => {
        checkArmstrong();
    }, 100);
    
    console.log('✅ Armstrong Number Checker initialized');
}

// Register globally
window.getArmstrongHTML = getArmstrongHTML;
window.initArmstrong = initArmstrong;

console.log('✅ Armstrong module loaded');