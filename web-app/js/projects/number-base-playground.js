// ═══════════════════════════════════════════════════════════════════════════════════
// 🔢 NUMBER BASE PLAYGROUND — INTERACTIVE EDUCATIONAL TOOL
// Comprehensive number system converter, calculator, and visualizer for CS education
// Features: Base conversion, step-by-step explanations, bitwise ops, binary calc, ASCII
// ═══════════════════════════════════════════════════════════════════════════════════

// ── UTILITY FUNCTIONS ──────────────────────────────────────────────────────────────

// Base conversion utilities with validation
function validateInput(value, base) {
    if (!value.trim()) return { valid: false, error: "Input cannot be empty" };
    
    const cleanValue = value.trim().toUpperCase();
    const basePattern = {
        2: /^[01]+$/,
        8: /^[0-7]+$/,
        10: /^[0-9]+$/,
        16: /^[0-9A-F]+$/
    };
    
    if (!basePattern[base].test(cleanValue)) {
        const baseNames = { 2: 'Binary', 8: 'Octal', 10: 'Decimal', 16: 'Hexadecimal' };
        const validChars = {
            2: 'Only 0 and 1 are allowed',
            8: 'Only digits 0-7 are allowed', 
            10: 'Only digits 0-9 are allowed',
            16: 'Only digits 0-9 and letters A-F are allowed'
        };
        return { 
            valid: false, 
            error: `Invalid ${baseNames[base]} number. ${validChars[base]}.`
        };
    }
    
    return { valid: true, value: cleanValue };
}

function convertBetweenBases(value, fromBase, toBase) {
    if (!value.trim()) return '';
    
    // Convert to decimal first
    let decimal = 0;
    if (fromBase === 10) {
        decimal = parseInt(value, 10);
    } else if (fromBase === 16) {
        decimal = parseInt(value, 16);
    } else {
        decimal = parseInt(value, fromBase);
    }
    
    if (isNaN(decimal)) return '';
    
    // Convert from decimal to target base
    if (toBase === 10) {
        return decimal.toString();
    } else {
        return decimal.toString(toBase).toUpperCase();
    }
}

function getStepByStepConversion(value, fromBase, toBase) {
    if (!value.trim()) return [];
    
    const steps = [];
    let decimal = parseInt(value, fromBase);
    
    if (fromBase !== 10) {
        // Show conversion to decimal first
        steps.push({
            type: 'info',
            text: `Converting ${getBaseName(fromBase)} to Decimal:`
        });
        
        if (fromBase === 2) {
            // Binary to decimal with place values
            const bits = value.split('').reverse();
            let calculation = '';
            let sum = 0;
            
            bits.forEach((bit, index) => {
                const placeValue = Math.pow(2, index);
                const contribution = bit * placeValue;
                sum += contribution;
                
                if (calculation) calculation += ' + ';
                calculation += `(${bit} × 2^${index})`;
                if (contribution > 0) calculation += ` = ${contribution}`;
            });
            
            steps.push({
                type: 'calculation',
                text: `${calculation} = ${decimal}`
            });
        } else {
            steps.push({
                type: 'calculation', 
                text: `${value} in base ${fromBase} = ${decimal} in decimal`
            });
        }
    }
    
    if (toBase !== 10) {
        steps.push({
            type: 'info',
            text: `Converting Decimal to ${getBaseName(toBase)}:`
        });
        
        if (toBase === 2) {
            // Show division method for binary
            let num = decimal;
            const divisions = [];
            
            while (num > 0) {
                const remainder = num % 2;
                const quotient = Math.floor(num / 2);
                divisions.push({
                    dividend: num,
                    quotient: quotient,
                    remainder: remainder
                });
                num = quotient;
            }
            
            divisions.forEach(div => {
                steps.push({
                    type: 'division',
                    text: `${div.dividend} ÷ 2 = ${div.quotient} remainder ${div.remainder}`
                });
            });
            
            const binary = divisions.map(d => d.remainder).reverse().join('');
            steps.push({
                type: 'result',
                text: `Reading remainders from bottom to top: ${binary}`
            });
        } else {
            const result = decimal.toString(toBase).toUpperCase();
            steps.push({
                type: 'result',
                text: `${decimal} in base 10 = ${result} in base ${toBase}`
            });
        }
    }
    
    return steps;
}
function getBaseName(base) {
    const names = { 2: 'Binary', 8: 'Octal', 10: 'Decimal', 16: 'Hexadecimal' };
    return names[base] || `Base ${base}`;
}

// Binary arithmetic functions
function addBinary(a, b) {
    const decA = parseInt(a, 2);
    const decB = parseInt(b, 2);
    const result = decA + decB;
    return result.toString(2);
}

function subtractBinary(a, b) {
    const decA = parseInt(a, 2);
    const decB = parseInt(b, 2);
    const result = decA - decB;
    return result >= 0 ? result.toString(2) : 'Negative result not supported';
}

function multiplyBinary(a, b) {
    const decA = parseInt(a, 2);
    const decB = parseInt(b, 2);
    const result = decA * decB;
    return result.toString(2);
}

function divideBinary(a, b) {
    const decA = parseInt(a, 2);
    const decB = parseInt(b, 2);
    if (decB === 0) return 'Division by zero';
    const result = Math.floor(decA / decB);
    return result.toString(2);
}

// Bitwise operations
function performBitwiseOperation(a, b, operation) {
    const decA = parseInt(a, 2);
    const decB = parseInt(b, 2);
    let result;
    
    switch (operation) {
        case 'AND': result = decA & decB; break;
        case 'OR': result = decA | decB; break;
        case 'XOR': result = decA ^ decB; break;
        case 'NOT': result = ~decA; break;
        case 'LSHIFT': result = decA << decB; break;
        case 'RSHIFT': result = decA >> decB; break;
        default: return null;
    }
    
    // Ensure positive result for display
    if (result < 0) result = result >>> 0;
    
    return {
        binary: result.toString(2),
        decimal: result,
        hex: result.toString(16).toUpperCase()
    };
}

// ASCII conversion functions  
function charToAscii(char) {
    if (char.length !== 1) return null;
    return char.charCodeAt(0);
}

function asciiToChar(ascii) {
    const code = parseInt(ascii, 10);
    if (code < 0 || code > 127) return null;
    return String.fromCharCode(code);
}

function charToBinary(char) {
    const ascii = charToAscii(char);
    if (ascii === null) return null;
    return ascii.toString(2).padStart(8, '0');
}

function binaryToChar(binary) {
    if (!/^[01]{1,8}$/.test(binary)) return null;
    const ascii = parseInt(binary, 2);
    if (ascii < 0 || ascii > 127) return null;
    return String.fromCharCode(ascii);
}

// Number analysis functions
function analyzeNumber(value, base) {
    const decimal = parseInt(value, base);
    if (isNaN(decimal)) return null;
    
    return {
        binary: decimal.toString(2),
        decimal: decimal.toString(),
        octal: decimal.toString(8),
        hex: decimal.toString(16).toUpperCase(),
        bitLength: decimal.toString(2).length,
        isEven: decimal % 2 === 0,
        isPrime: isPrime(decimal),
        isPowerOfTwo: isPowerOfTwo(decimal),
        asciiChar: (decimal >= 32 && decimal <= 126) ? String.fromCharCode(decimal) : null
    };
}
function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0;
}

// History management
let conversionHistory = [];
const MAX_HISTORY = 10;

function addToHistory(input, inputBase, output, outputBase) {
    const entry = {
        input,
        inputBase: getBaseName(inputBase),
        output, 
        outputBase: getBaseName(outputBase),
        timestamp: new Date().toLocaleTimeString()
    };
    
    conversionHistory.unshift(entry);
    if (conversionHistory.length > MAX_HISTORY) {
        conversionHistory.pop();
    }
    
    updateHistoryDisplay();
}

function clearHistory() {
    conversionHistory = [];
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const historyEl = document.getElementById('conversionHistory');
    if (!historyEl) return;
    
    if (conversionHistory.length === 0) {
        historyEl.innerHTML = '<div class="history-empty">No conversions yet</div>';
        return;
    }
    
    historyEl.innerHTML = conversionHistory.map(entry => `
        <div class="history-item">
            <div class="history-conversion">
                <span class="history-input">${entry.input}</span>
                <span class="history-base">(${entry.inputBase})</span>
                <span class="history-arrow">→</span>
                <span class="history-output">${entry.output}</span>
                <span class="history-base">(${entry.outputBase})</span>
            </div>
            <div class="history-time">${entry.timestamp}</div>
        </div>
    `).join('');
}

// Binary visualization  
function generateBinaryVisualization(decimal, bitWidth) {
    const binary = decimal.toString(2).padStart(bitWidth, '0');
    if (binary.length > bitWidth) {
        return `<div class="viz-error">Number too large for ${bitWidth}-bit display</div>`;
    }
    
    return `
        <div class="binary-viz" data-bit-width="${bitWidth}">
            <div class="viz-header">
                <span class="viz-title">${bitWidth}-bit Binary</span>
                <span class="viz-decimal">Decimal: ${decimal}</span>
            </div>
            <div class="bits-container">
                ${binary.split('').map((bit, index) => `
                    <div class="bit ${bit === '1' ? 'bit-on' : 'bit-off'}" 
                         data-position="${binary.length - 1 - index}"
                         title="Bit ${binary.length - 1 - index}: ${bit}">
                        <div class="bit-value">${bit}</div>
                        <div class="bit-weight">2^${binary.length - 1 - index}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}
// ── HTML TEMPLATE ───────────────────────────────────────────────────────────────

function getNumberBasePlaygroundHTML() {
    return `
        <div class="project-content">
            <div class="playground-header">
                <h2>🔢 Number Base Playground</h2>
                <p class="playground-subtitle">Interactive educational tool for number systems, binary operations, and conversions</p>
            </div>

            <!-- Tab Navigation -->
            <div class="tab-navigation">
                <button class="tab-btn active" data-tab="converter">🔄 Base Converter</button>
                <button class="tab-btn" data-tab="bitwise">⚡ Bitwise Ops</button>
                <button class="tab-btn" data-tab="calculator">🧮 Binary Calc</button>
                <button class="tab-btn" data-tab="ascii">🔤 ASCII Tools</button>
                <button class="tab-btn" data-tab="visualizer">📊 Visualizer</button>
            </div>

            <!-- Tab Content -->
            <div class="tab-content">

                <!-- BASE CONVERTER TAB -->
                <div class="tab-panel active" id="converter">
                    <div class="converter-section">
                        <h3>🔄 Number System Converter</h3>
                        <div class="converter-grid">
                            <div class="input-group">
                                <label for="converterInput">Enter Number</label>
                                <input type="text" id="converterInput" placeholder="Enter a number..." value="45">
                                <select id="inputBase">
                                    <option value="2">Binary (Base 2)</option>
                                    <option value="8">Octal (Base 8)</option>
                                    <option value="10" selected>Decimal (Base 10)</option>
                                    <option value="16">Hexadecimal (Base 16)</option>
                                </select>
                            </div>

                            <div class="conversion-results" id="conversionResults">
                                <div class="result-card">
                                    <div class="result-label">Binary</div>
                                    <div class="result-value" id="resultBinary">-</div>
                                    <button class="copy-btn" onclick="copyToClipboard('resultBinary')">📋</button>
                                </div>
                                <div class="result-card">
                                    <div class="result-label">Decimal</div>
                                    <div class="result-value" id="resultDecimal">-</div>
                                    <button class="copy-btn" onclick="copyToClipboard('resultDecimal')">📋</button>
                                </div>
                                <div class="result-card">
                                    <div class="result-label">Octal</div>
                                    <div class="result-value" id="resultOctal">-</div>
                                    <button class="copy-btn" onclick="copyToClipboard('resultOctal')">📋</button>
                                </div>
                                <div class="result-card">
                                    <div class="result-label">Hexadecimal</div>
                                    <div class="result-value" id="resultHex">-</div>
                                    <button class="copy-btn" onclick="copyToClipboard('resultHex')">📋</button>
                                </div>
                            </div>
                        </div>

                        <!-- Step-by-step explanation -->
                        <div class="steps-section">
                            <h4>📖 Step-by-Step Conversion</h4>
                            <div id="conversionSteps" class="steps-container">
                                <div class="steps-placeholder">Enter a number to see conversion steps</div>
                            </div>
                        </div>

                        <!-- Number Information Panel -->
                        <div class="info-section">
                            <h4>📈 Number Information</h4>
                            <div id="numberInfo" class="info-panel">
                                <div class="info-placeholder">Enter a number to see detailed information</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- BITWISE OPERATIONS TAB -->
                <div class="tab-panel" id="bitwise">
                    <div class="bitwise-section">
                        <h3>⚡ Bitwise Operations Playground</h3>
                        
                        <div class="operation-controls">
                            <div class="operand-inputs">
                                <div class="input-group">
                                    <label for="bitwiseA">Operand A (Binary)</label>
                                    <input type="text" id="bitwiseA" placeholder="1010" value="1010">
                                    <div class="decimal-display">Decimal: <span id="decimalA">10</span></div>
                                </div>
                                
                                <div class="operation-selector">
                                    <label>Operation</label>
                                    <div class="operation-buttons">
                                        <button class="op-btn" data-op="AND">AND</button>
                                        <button class="op-btn" data-op="OR">OR</button>
                                        <button class="op-btn" data-op="XOR">XOR</button>
                                        <button class="op-btn" data-op="NOT">NOT A</button>
                                        <button class="op-btn" data-op="LSHIFT">A << B</button>
                                        <button class="op-btn" data-op="RSHIFT">A >> B</button>
                                    </div>
                                </div>

                                <div class="input-group" id="operandBGroup">
                                    <label for="bitwiseB">Operand B (Binary)</label>
                                    <input type="text" id="bitwiseB" placeholder="1100" value="1100">
                                    <div class="decimal-display">Decimal: <span id="decimalB">12</span></div>
                                </div>
                            </div>

                            <div class="bitwise-result" id="bitwiseResult">
                                <div class="result-placeholder">Select an operation to see results</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- BINARY CALCULATOR TAB -->
                <div class="tab-panel" id="calculator">
                    <div class="calculator-section">
                        <h3>🧮 Binary Calculator</h3>
                        
                        <div class="binary-calc">
                            <div class="calc-inputs">
                                <div class="input-group">
                                    <label for="calcOperandA">Operand A (Binary)</label>
                                    <input type="text" id="calcOperandA" placeholder="1010" value="1010">
                                    <div class="decimal-display">Decimal: <span id="calcDecimalA">10</span></div>
                                </div>
                                
                                <div class="calc-operation">
                                    <label>Operation</label>
                                    <select id="calcOperation">
                                        <option value="add">Addition (+)</option>
                                        <option value="subtract">Subtraction (-)</option>
                                        <option value="multiply">Multiplication (×)</option>
                                        <option value="divide">Division (÷)</option>
                                    </select>
                                </div>

                                <div class="input-group">
                                    <label for="calcOperandB">Operand B (Binary)</label>
                                    <input type="text" id="calcOperandB" placeholder="0011" value="0011">
                                    <div class="decimal-display">Decimal: <span id="calcDecimalB">3</span></div>
                                </div>
                            </div>

                            <button class="calc-btn" id="calculateBtn">Calculate</button>

                            <div class="calc-result" id="calcResult">
                                <div class="result-placeholder">Enter operands and click Calculate</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- ASCII CONVERTER TAB -->
                <div class="tab-panel" id="ascii">
                    <div class="ascii-section">
                        <h3>🔤 ASCII Converter</h3>
                        
                        <div class="ascii-tools">
                            <div class="ascii-tool">
                                <h4>Character ↔ ASCII</h4>
                                <div class="ascii-converter">
                                    <div class="input-group">
                                        <label for="charInput">Character</label>
                                        <input type="text" id="charInput" placeholder="A" maxlength="1" value="A">
                                    </div>
                                    <div class="convert-arrow">⟷</div>
                                    <div class="input-group">
                                        <label for="asciiInput">ASCII Code</label>
                                        <input type="number" id="asciiInput" placeholder="65" min="0" max="127" value="65">
                                    </div>
                                </div>
                            </div>

                            <div class="ascii-tool">
                                <h4>Character ↔ Binary</h4>
                                <div class="ascii-converter">
                                    <div class="input-group">
                                        <label for="charBinaryInput">Character</label>
                                        <input type="text" id="charBinaryInput" placeholder="A" maxlength="1" value="A">
                                    </div>
                                    <div class="convert-arrow">⟷</div>
                                    <div class="input-group">
                                        <label for="binaryCharInput">8-bit Binary</label>
                                        <input type="text" id="binaryCharInput" placeholder="01000001" maxlength="8" value="01000001">
                                    </div>
                                </div>
                            </div>

                            <div class="ascii-info" id="asciiInfo">
                                <div class="info-placeholder">Enter a character or ASCII code to see conversion details</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- BINARY VISUALIZER TAB -->
                <div class="tab-panel" id="visualizer">
                    <div class="visualizer-section">
                        <h3>📊 Binary Visualization</h3>
                        
                        <div class="viz-controls">
                            <div class="input-group">
                                <label for="vizInput">Enter Number (Decimal)</label>
                                <input type="number" id="vizInput" placeholder="45" min="0" max="4294967295" value="45">
                            </div>
                            
                            <div class="bit-width-selector">
                                <label>Bit Width</label>
                                <div class="width-buttons">
                                    <button class="width-btn active" data-width="8">8-bit</button>
                                    <button class="width-btn" data-width="16">16-bit</button>
                                    <button class="width-btn" data-width="32">32-bit</button>
                                </div>
                            </div>
                        </div>

                        <div class="visualization-display" id="vizDisplay">
                            ${generateBinaryVisualization(45, 8)}
                        </div>
                    </div>
                </div>

            </div>

            <!-- Conversion History -->
            <div class="history-section">
                <h3>📋 Conversion History</h3>
                <div class="history-controls">
                    <button class="clear-history-btn" id="clearHistoryBtn">Clear History</button>
                </div>
                <div id="conversionHistory" class="history-container">
                    <div class="history-empty">No conversions yet</div>
                </div>
            </div>
        </div>
        
        <style>
            /* NUMBER BASE PLAYGROUND STYLES */
            .playground-header {
                text-align: center;
                margin-bottom: 2rem;
            }

            .playground-subtitle {
                color: var(--text-secondary);
                margin: 0.5rem 0 0 0;
                font-size: 1.1rem;
            }

            /* Tab Navigation */
            .tab-navigation {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 2rem;
                overflow-x: auto;
                padding: 0.5rem;
                border-radius: 12px;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
            }

            .tab-btn {
                padding: 0.75rem 1.5rem;
                border: none;
                border-radius: 8px;
                background: transparent;
                color: var(--text-secondary);
                cursor: pointer;
                transition: all 0.2s ease;
                font-weight: 500;
                white-space: nowrap;
            }

            .tab-btn:hover {
                background: var(--accent-soft);
                color: var(--text-color);
            }

            .tab-btn.active {
                background: var(--primary-color);
                color: var(--on-accent);
                transform: translateY(-1px);
                box-shadow: var(--shadow);
            }

            /* Tab Content */
            .tab-content {
                position: relative;
            }

            .tab-panel {
                display: none;
            }

            .tab-panel.active {
                display: block;
                animation: fadeIn 0.3s ease;
            }

            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }

            /* Converter Section */
            .converter-grid {
                display: grid;
                gap: 2rem;
                margin-bottom: 2rem;
            }

            .input-group {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            .input-group label {
                font-weight: 600;
                color: var(--text-color);
            }

            .input-group input,
            .input-group select {
                padding: 0.75rem;
                border: 2px solid var(--border-color);
                border-radius: 8px;
                background: var(--surface-color);
                color: var(--text-color);
                font-size: 1rem;
                transition: all 0.2s ease;
            }

            .input-group input:focus,
            .input-group select:focus {
                outline: none;
                border-color: var(--primary-color);
                box-shadow: 0 0 0 3px var(--accent-soft);
            }

            /* Conversion Results */
            .conversion-results {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
            }

            .result-card {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 1.5rem;
                position: relative;
                transition: all 0.2s ease;
            }

            .result-card:hover {
                border-color: var(--primary-color);
                transform: translateY(-2px);
                box-shadow: var(--shadow);
            }

            .result-label {
                font-size: 0.9rem;
                font-weight: 600;
                color: var(--text-secondary);
                margin-bottom: 0.5rem;
            }

            .result-value {
                font-family: var(--font-mono);
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--primary-color);
                word-break: break-all;
                min-height: 1.5rem;
            }

            .copy-btn {
                position: absolute;
                top: 0.5rem;
                right: 0.5rem;
                background: var(--accent-soft);
                border: none;
                border-radius: 6px;
                padding: 0.25rem 0.5rem;
                cursor: pointer;
                font-size: 0.8rem;
                color: var(--text-secondary);
                transition: all 0.2s ease;
            }

            .copy-btn:hover {
                background: var(--primary-color);
                color: var(--on-accent);
            }
            /* Steps Section */
            .steps-section,
            .info-section {
                margin-top: 2rem;
                padding: 1.5rem;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
            }

            .steps-container {
                display: flex;
                flex-direction: column;
                gap: 0.75rem;
            }

            .conversion-step {
                padding: 0.75rem;
                border-radius: 8px;
                background: var(--bg-color);
                border-left: 4px solid var(--primary-color);
            }

            .step-info {
                background: var(--accent-soft);
                border-left-color: var(--primary-color);
            }

            .step-calculation {
                background: rgba(251, 191, 36, 0.1);
                border-left-color: #fbbf24;
            }

            .step-division {
                background: rgba(59, 130, 246, 0.1);
                border-left-color: #3b82f6;
            }

            .step-result {
                background: rgba(16, 185, 129, 0.1);
                border-left-color: #10b981;
                font-weight: 600;
            }

            /* Number Info Panel */
            .info-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 1rem;
            }

            .info-item {
                display: flex;
                justify-content: space-between;
                padding: 0.75rem;
                background: var(--bg-color);
                border-radius: 8px;
                border: 1px solid var(--border-color);
            }

            .info-label {
                font-weight: 600;
                color: var(--text-secondary);
            }

            .info-value {
                font-family: var(--font-mono);
                font-weight: 600;
                color: var(--primary-color);
            }

            /* Bitwise Operations */
            .operand-inputs {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
                gap: 2rem;
                align-items: center;
                margin-bottom: 2rem;
            }

            .operation-selector {
                text-align: center;
            }

            .operation-buttons {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 0.5rem;
                margin-top: 0.5rem;
            }

            .op-btn {
                padding: 0.5rem 1rem;
                border: 2px solid var(--border-color);
                border-radius: 8px;
                background: var(--surface-color);
                color: var(--text-color);
                cursor: pointer;
                transition: all 0.2s ease;
                font-weight: 500;
            }

            .op-btn:hover {
                border-color: var(--primary-color);
                background: var(--accent-soft);
            }

            .op-btn.active {
                background: var(--primary-color);
                color: var(--on-accent);
                border-color: var(--primary-color);
            }

            .decimal-display {
                font-size: 0.9rem;
                color: var(--text-secondary);
                margin-top: 0.25rem;
            }

            /* Bitwise Result Display */
            .bitwise-visual {
                margin: 2rem 0;
                padding: 1.5rem;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
            }

            .bitwise-operation {
                font-family: var(--font-mono);
                text-align: center;
                font-size: 1.2rem;
                margin-bottom: 1rem;
            }

            .operand-display {
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0.5rem 0;
            }

            .binary-bits {
                display: flex;
                gap: 0.25rem;
                font-family: var(--font-mono);
                font-size: 1.1rem;
                margin: 0 1rem;
            }

            .bit {
                width: 2rem;
                height: 2rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border: 1px solid var(--border-color);
                border-radius: 4px;
                background: var(--bg-color);
            }

            .bit-1 {
                background: var(--primary-color);
                color: var(--on-accent);
                border-color: var(--primary-color);
            }
            /* Binary Calculator */
            .calc-inputs {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
                gap: 2rem;
                align-items: end;
                margin-bottom: 2rem;
            }

            .calc-operation {
                text-align: center;
            }

            .calc-btn {
                width: 100%;
                padding: 1rem 2rem;
                background: var(--primary-color);
                color: var(--on-accent);
                border: none;
                border-radius: 12px;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s ease;
                margin-bottom: 2rem;
            }

            .calc-btn:hover {
                transform: translateY(-2px);
                box-shadow: var(--shadow);
            }

            .calc-result {
                padding: 1.5rem;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                text-align: center;
            }

            .calc-display {
                font-family: var(--font-mono);
                font-size: 1.5rem;
                margin: 1rem 0;
            }

            .calc-binary {
                color: var(--primary-color);
                font-weight: 600;
            }

            .calc-decimal {
                color: var(--text-secondary);
                font-size: 1.1rem;
                margin-top: 0.5rem;
            }

            /* ASCII Converter */
            .ascii-tools {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }

            .ascii-tool {
                padding: 1.5rem;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
            }

            .ascii-converter {
                display: grid;
                grid-template-columns: 1fr auto 1fr;
                gap: 2rem;
                align-items: end;
                margin-top: 1rem;
            }

            .convert-arrow {
                font-size: 1.5rem;
                color: var(--primary-color);
                text-align: center;
                padding-bottom: 0.75rem;
            }

            .ascii-info {
                padding: 1.5rem;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
            }

            /* Binary Visualizer */
            .viz-controls {
                display: flex;
                gap: 2rem;
                align-items: end;
                margin-bottom: 2rem;
                flex-wrap: wrap;
            }

            .bit-width-selector {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }

            .width-buttons {
                display: flex;
                gap: 0.5rem;
            }

            .width-btn {
                padding: 0.5rem 1rem;
                border: 2px solid var(--border-color);
                border-radius: 8px;
                background: var(--surface-color);
                color: var(--text-color);
                cursor: pointer;
                transition: all 0.2s ease;
                font-weight: 500;
            }

            .width-btn:hover {
                border-color: var(--primary-color);
            }

            .width-btn.active {
                background: var(--primary-color);
                color: var(--on-accent);
                border-color: var(--primary-color);
            }

            /* Binary Visualization */
            .binary-viz {
                padding: 2rem;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                margin: 1rem 0;
            }

            .viz-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 1.5rem;
                flex-wrap: wrap;
            }

            .viz-title {
                font-size: 1.2rem;
                font-weight: 600;
                color: var(--primary-color);
            }

            .viz-decimal {
                font-family: var(--font-mono);
                color: var(--text-secondary);
            }

            .bits-container {
                display: flex;
                gap: 0.25rem;
                justify-content: center;
                flex-wrap: wrap;
            }

            .bit {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0.5rem 0.25rem;
                border: 1px solid var(--border-color);
                border-radius: 6px;
                background: var(--bg-color);
                transition: all 0.2s ease;
                cursor: pointer;
                min-width: 3rem;
            }

            .bit:hover {
                border-color: var(--primary-color);
                transform: translateY(-2px);
            }

            .bit-on {
                background: var(--primary-color);
                color: var(--on-accent);
                border-color: var(--primary-color);
                box-shadow: 0 0 10px var(--accent-glow);
            }

            .bit-off {
                background: var(--surface-color);
                color: var(--text-secondary);
            }

            .bit-value {
                font-family: var(--font-mono);
                font-size: 1.2rem;
                font-weight: 700;
            }

            .bit-weight {
                font-size: 0.7rem;
                opacity: 0.7;
                margin-top: 0.25rem;
            }
            /* History Section */
            .history-section {
                margin-top: 3rem;
                padding: 1.5rem;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
            }

            .history-controls {
                display: flex;
                justify-content: flex-end;
                margin-bottom: 1rem;
            }

            .clear-history-btn {
                padding: 0.5rem 1rem;
                background: var(--danger);
                color: white;
                border: none;
                border-radius: 6px;
                cursor: pointer;
                font-size: 0.9rem;
                transition: all 0.2s ease;
            }

            .clear-history-btn:hover {
                opacity: 0.9;
                transform: translateY(-1px);
            }

            .history-container {
                max-height: 300px;
                overflow-y: auto;
            }

            .history-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0.75rem;
                background: var(--bg-color);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                margin-bottom: 0.5rem;
            }

            .history-conversion {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                font-family: var(--font-mono);
                flex: 1;
            }

            .history-input,
            .history-output {
                font-weight: 600;
                color: var(--primary-color);
            }

            .history-base {
                color: var(--text-secondary);
                font-size: 0.9rem;
            }

            .history-arrow {
                color: var(--text-secondary);
                font-size: 1.2rem;
            }

            .history-time {
                color: var(--text-secondary);
                font-size: 0.8rem;
            }

            .history-empty {
                text-align: center;
                color: var(--text-secondary);
                padding: 2rem;
                font-style: italic;
            }

            /* Placeholders and Error States */
            .steps-placeholder,
            .info-placeholder,
            .result-placeholder {
                text-align: center;
                color: var(--text-secondary);
                padding: 2rem;
                font-style: italic;
            }

            .error-message {
                background: rgba(239, 68, 68, 0.1);
                color: #ef4444;
                border: 1px solid rgba(239, 68, 68, 0.3);
                border-radius: 8px;
                padding: 1rem;
                margin: 1rem 0;
                text-align: center;
            }

            .viz-error {
                color: var(--danger);
                text-align: center;
                padding: 2rem;
                font-style: italic;
            }

            /* Responsive Design */
            @media (max-width: 768px) {
                .tab-navigation {
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .operand-inputs,
                .calc-inputs {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }

                .ascii-converter {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }

                .convert-arrow {
                    transform: rotate(90deg);
                    padding: 0;
                }

                .viz-controls {
                    flex-direction: column;
                    align-items: stretch;
                }

                .width-buttons {
                    justify-content: center;
                }

                .bits-container {
                    gap: 0.15rem;
                }

                .bit {
                    min-width: 2.5rem;
                    padding: 0.4rem 0.2rem;
                }

                .history-item {
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 0.5rem;
                }
            }

            @media (max-width: 480px) {
                .conversion-results {
                    grid-template-columns: 1fr;
                }

                .bit {
                    min-width: 2rem;
                    padding: 0.3rem 0.15rem;
                }

                .bit-value {
                    font-size: 1rem;
                }

                .bit-weight {
                    font-size: 0.6rem;
                }
            }
        </style>
    `;
}
// ── INITIALIZATION AND EVENT HANDLERS ──────────────────────────────────────────

function initNumberBasePlayground() {
    // Tab navigation
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Update active states
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));
            
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // Base converter
    const converterInput = document.getElementById('converterInput');
    const inputBase = document.getElementById('inputBase');
    
    function updateConverter() {
        const value = converterInput.value.trim();
        const base = parseInt(inputBase.value);
        
        if (!value) {
            clearResults();
            return;
        }
        
        const validation = validateInput(value, base);
        if (!validation.valid) {
            showError(validation.error);
            return;
        }
        
        // Update all base representations
        updateConversionResults(validation.value, base);
        updateStepsDisplay(validation.value, base, 10); // Show steps to decimal
        updateNumberInfo(validation.value, base);
        
        // Add to history
        const decimal = convertBetweenBases(validation.value, base, 10);
        addToHistory(validation.value, base, decimal, 10);
    }
    
    converterInput.addEventListener('input', updateConverter);
    inputBase.addEventListener('change', updateConverter);
    
    // Initial conversion
    updateConverter();
    
    // Bitwise operations
    setupBitwiseOperations();
    
    // Binary calculator
    setupBinaryCalculator();
    
    // ASCII converter
    setupAsciiConverter();
    
    // Binary visualizer
    setupBinaryVisualizer();
    
    // History
    document.getElementById('clearHistoryBtn').addEventListener('click', clearHistory);
}

function updateConversionResults(value, fromBase) {
    document.getElementById('resultBinary').textContent = convertBetweenBases(value, fromBase, 2);
    document.getElementById('resultDecimal').textContent = convertBetweenBases(value, fromBase, 10);
    document.getElementById('resultOctal').textContent = convertBetweenBases(value, fromBase, 8);
    document.getElementById('resultHex').textContent = convertBetweenBases(value, fromBase, 16);
}

function updateStepsDisplay(value, fromBase, toBase) {
    const steps = getStepByStepConversion(value, fromBase, toBase);
    const container = document.getElementById('conversionSteps');
    
    if (steps.length === 0) {
        container.innerHTML = '<div class="steps-placeholder">Enter a number to see conversion steps</div>';
        return;
    }
    
    container.innerHTML = steps.map(step => 
        `<div class="conversion-step step-${step.type}">${step.text}</div>`
    ).join('');
}

function updateNumberInfo(value, base) {
    const info = analyzeNumber(value, base);
    if (!info) return;
    
    const container = document.getElementById('numberInfo');
    container.innerHTML = `
        <div class="info-grid">
            <div class="info-item">
                <span class="info-label">Binary:</span>
                <span class="info-value">${info.binary}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Decimal:</span>
                <span class="info-value">${info.decimal}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Octal:</span>
                <span class="info-value">${info.octal}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Hexadecimal:</span>
                <span class="info-value">${info.hex}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Bit Length:</span>
                <span class="info-value">${info.bitLength}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Even/Odd:</span>
                <span class="info-value">${info.isEven ? 'Even' : 'Odd'}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Prime:</span>
                <span class="info-value">${info.isPrime ? 'Yes' : 'No'}</span>
            </div>
            <div class="info-item">
                <span class="info-label">Power of 2:</span>
                <span class="info-value">${info.isPowerOfTwo ? 'Yes' : 'No'}</span>
            </div>
            ${info.asciiChar ? `
                <div class="info-item">
                    <span class="info-label">ASCII Character:</span>
                    <span class="info-value">'${info.asciiChar}'</span>
                </div>
            ` : ''}
        </div>
    `;
}

function clearResults() {
    document.getElementById('resultBinary').textContent = '-';
    document.getElementById('resultDecimal').textContent = '-';
    document.getElementById('resultOctal').textContent = '-';
    document.getElementById('resultHex').textContent = '-';
    
    document.getElementById('conversionSteps').innerHTML = 
        '<div class="steps-placeholder">Enter a number to see conversion steps</div>';
        
    document.getElementById('numberInfo').innerHTML = 
        '<div class="info-placeholder">Enter a number to see detailed information</div>';
}

function showError(message) {
    clearResults();
    document.getElementById('conversionSteps').innerHTML = 
        `<div class="error-message">${message}</div>`;
}
function setupBitwiseOperations() {
    const operandA = document.getElementById('bitwiseA');
    const operandB = document.getElementById('bitwiseB');
    const decimalA = document.getElementById('decimalA');
    const decimalB = document.getElementById('decimalB');
    const opBtns = document.querySelectorAll('.op-btn');
    const resultContainer = document.getElementById('bitwiseResult');
    const operandBGroup = document.getElementById('operandBGroup');
    
    let selectedOp = null;
    
    function updateDecimalDisplays() {
        const binA = operandA.value.trim();
        const binB = operandB.value.trim();
        
        if (validateInput(binA, 2).valid) {
            decimalA.textContent = parseInt(binA, 2);
        } else {
            decimalA.textContent = 'Invalid';
        }
        
        if (validateInput(binB, 2).valid) {
            decimalB.textContent = parseInt(binB, 2);
        } else {
            decimalB.textContent = 'Invalid';
        }
    }
    
    function performOperation() {
        if (!selectedOp) return;
        
        const binA = operandA.value.trim();
        const binB = operandB.value.trim();
        
        if (!validateInput(binA, 2).valid) {
            resultContainer.innerHTML = '<div class="error-message">Invalid binary input for Operand A</div>';
            return;
        }
        
        if (selectedOp !== 'NOT' && !validateInput(binB, 2).valid) {
            resultContainer.innerHTML = '<div class="error-message">Invalid binary input for Operand B</div>';
            return;
        }
        
        const result = performBitwiseOperation(binA, binB, selectedOp);
        if (!result) return;
        
        // Create visual representation
        const maxBits = Math.max(binA.length, binB.length, result.binary.length);
        const paddedA = binA.padStart(maxBits, '0');
        const paddedB = selectedOp !== 'NOT' ? binB.padStart(maxBits, '0') : '';
        const paddedResult = result.binary.padStart(maxBits, '0');
        
        resultContainer.innerHTML = `
            <div class="bitwise-visual">
                <div class="bitwise-operation">
                    <div class="operand-display">
                        <span style="margin-right: 1rem;">A:</span>
                        <div class="binary-bits">
                            ${paddedA.split('').map(bit => `<div class="bit ${bit === '1' ? 'bit-1' : ''}">${bit}</div>`).join('')}
                        </div>
                    </div>
                    ${selectedOp !== 'NOT' ? `
                        <div class="operand-display">
                            <span style="margin-right: 1rem;">${selectedOp}:</span>
                            <div class="binary-bits">
                                ${paddedB.split('').map(bit => `<div class="bit ${bit === '1' ? 'bit-1' : ''}">${bit}</div>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                    <div style="text-align: center; margin: 1rem 0; color: var(--text-secondary);">
                        ${selectedOp === 'NOT' ? '~A' : selectedOp === 'LSHIFT' ? `A << ${parseInt(binB, 2)}` : selectedOp === 'RSHIFT' ? `A >> ${parseInt(binB, 2)}` : `A ${selectedOp} B`}
                    </div>
                    <div class="operand-display" style="border-top: 2px solid var(--primary-color); padding-top: 1rem;">
                        <span style="margin-right: 1rem;">Result:</span>
                        <div class="binary-bits">
                            ${paddedResult.split('').map(bit => `<div class="bit ${bit === '1' ? 'bit-1' : ''}">${bit}</div>`).join('')}
                        </div>
                    </div>
                </div>
                <div style="text-align: center; margin-top: 1rem;">
                    <div><strong>Binary:</strong> ${result.binary}</div>
                    <div><strong>Decimal:</strong> ${result.decimal}</div>
                    <div><strong>Hexadecimal:</strong> ${result.hex}</div>
                </div>
            </div>
        `;
    }
    
    operandA.addEventListener('input', updateDecimalDisplays);
    operandB.addEventListener('input', updateDecimalDisplays);
    
    opBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            opBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedOp = btn.getAttribute('data-op');
            
            // Hide/show operand B based on operation
            if (selectedOp === 'NOT') {
                operandBGroup.style.display = 'none';
            } else {
                operandBGroup.style.display = 'flex';
            }
            
            performOperation();
        });
    });
    
    updateDecimalDisplays();
}

function setupBinaryCalculator() {
    const operandA = document.getElementById('calcOperandA');
    const operandB = document.getElementById('calcOperandB');
    const decimalA = document.getElementById('calcDecimalA');
    const decimalB = document.getElementById('calcDecimalB');
    const operation = document.getElementById('calcOperation');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultContainer = document.getElementById('calcResult');
    
    function updateDecimalDisplays() {
        const binA = operandA.value.trim();
        const binB = operandB.value.trim();
        
        if (validateInput(binA, 2).valid) {
            decimalA.textContent = parseInt(binA, 2);
        } else {
            decimalA.textContent = 'Invalid';
        }
        
        if (validateInput(binB, 2).valid) {
            decimalB.textContent = parseInt(binB, 2);
        } else {
            decimalB.textContent = 'Invalid';
        }
    }
    
    function calculate() {
        const binA = operandA.value.trim();
        const binB = operandB.value.trim();
        const op = operation.value;
        
        if (!validateInput(binA, 2).valid || !validateInput(binB, 2).valid) {
            resultContainer.innerHTML = '<div class="error-message">Please enter valid binary numbers</div>';
            return;
        }
        
        let result;
        let resultDecimal;
        
        switch (op) {
            case 'add':
                result = addBinary(binA, binB);
                resultDecimal = parseInt(binA, 2) + parseInt(binB, 2);
                break;
            case 'subtract':
                result = subtractBinary(binA, binB);
                resultDecimal = parseInt(binA, 2) - parseInt(binB, 2);
                break;
            case 'multiply':
                result = multiplyBinary(binA, binB);
                resultDecimal = parseInt(binA, 2) * parseInt(binB, 2);
                break;
            case 'divide':
                result = divideBinary(binA, binB);
                if (result === 'Division by zero') {
                    resultContainer.innerHTML = '<div class="error-message">Division by zero is not allowed</div>';
                    return;
                }
                resultDecimal = Math.floor(parseInt(binA, 2) / parseInt(binB, 2));
                break;
        }
        
        const opSymbols = { add: '+', subtract: '-', multiply: '×', divide: '÷' };
        
        resultContainer.innerHTML = `
            <div class="calc-display">
                <div style="margin-bottom: 1rem; color: var(--text-secondary);">
                    ${binA} ${opSymbols[op]} ${binB}
                </div>
                <div class="calc-binary">${result}</div>
                <div class="calc-decimal">Decimal: ${resultDecimal}</div>
            </div>
        `;
    }
    
    operandA.addEventListener('input', updateDecimalDisplays);
    operandB.addEventListener('input', updateDecimalDisplays);
    calculateBtn.addEventListener('click', calculate);
    
    updateDecimalDisplays();
}
function setupAsciiConverter() {
    const charInput = document.getElementById('charInput');
    const asciiInput = document.getElementById('asciiInput');
    const charBinaryInput = document.getElementById('charBinaryInput');
    const binaryCharInput = document.getElementById('binaryCharInput');
    const asciiInfo = document.getElementById('asciiInfo');
    
    function updateAsciiInfo(char = null, ascii = null) {
        let displayChar = char;
        let displayAscii = ascii;
        
        if (char) {
            displayAscii = charToAscii(char);
        } else if (ascii !== null) {
            displayChar = asciiToChar(ascii);
        }
        
        if (displayChar && displayAscii !== null) {
            const binary = displayAscii.toString(2).padStart(8, '0');
            asciiInfo.innerHTML = `
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Character:</span>
                        <span class="info-value">'${displayChar}'</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">ASCII Code:</span>
                        <span class="info-value">${displayAscii}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Binary:</span>
                        <span class="info-value">${binary}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Hexadecimal:</span>
                        <span class="info-value">${displayAscii.toString(16).toUpperCase()}</span>
                    </div>
                </div>
            `;
        } else {
            asciiInfo.innerHTML = '<div class="info-placeholder">Enter a character or ASCII code to see conversion details</div>';
        }
    }
    
    charInput.addEventListener('input', () => {
        const char = charInput.value;
        if (char.length === 1) {
            const ascii = charToAscii(char);
            asciiInput.value = ascii;
            charBinaryInput.value = char;
            binaryCharInput.value = charToBinary(char);
            updateAsciiInfo(char);
        } else {
            asciiInput.value = '';
            updateAsciiInfo();
        }
    });
    
    asciiInput.addEventListener('input', () => {
        const ascii = parseInt(asciiInput.value);
        if (!isNaN(ascii) && ascii >= 0 && ascii <= 127) {
            const char = asciiToChar(ascii);
            if (char) {
                charInput.value = char;
                charBinaryInput.value = char;
                binaryCharInput.value = charToBinary(char);
                updateAsciiInfo(char, ascii);
            }
        } else {
            charInput.value = '';
            updateAsciiInfo();
        }
    });
    
    charBinaryInput.addEventListener('input', () => {
        const char = charBinaryInput.value;
        if (char.length === 1) {
            const binary = charToBinary(char);
            binaryCharInput.value = binary;
            updateAsciiInfo(char);
        } else {
            binaryCharInput.value = '';
            updateAsciiInfo();
        }
    });
    
    binaryCharInput.addEventListener('input', () => {
        const binary = binaryCharInput.value.trim();
        if (/^[01]{1,8}$/.test(binary)) {
            const char = binaryToChar(binary);
            if (char) {
                charBinaryInput.value = char;
                updateAsciiInfo(char);
            }
        } else {
            charBinaryInput.value = '';
            updateAsciiInfo();
        }
    });
    
    // Initial update
    updateAsciiInfo('A', 65);
}

function setupBinaryVisualizer() {
    const vizInput = document.getElementById('vizInput');
    const widthBtns = document.querySelectorAll('.width-btn');
    const vizDisplay = document.getElementById('vizDisplay');
    
    let currentWidth = 8;
    
    function updateVisualization() {
        const decimal = parseInt(vizInput.value);
        if (isNaN(decimal) || decimal < 0) {
            vizDisplay.innerHTML = '<div class="viz-error">Please enter a valid positive number</div>';
            return;
        }
        
        vizDisplay.innerHTML = generateBinaryVisualization(decimal, currentWidth);
    }
    
    vizInput.addEventListener('input', updateVisualization);
    
    widthBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            widthBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentWidth = parseInt(btn.getAttribute('data-width'));
            updateVisualization();
        });
    });
    
    updateVisualization();
}

// Copy to clipboard functionality
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    
    if (text && text !== '-') {
        navigator.clipboard.writeText(text).then(() => {
            // Visual feedback
            const originalText = element.textContent;
            element.textContent = 'Copied!';
            element.style.color = 'var(--success-color)';
            
            setTimeout(() => {
                element.textContent = originalText;
                element.style.color = '';
            }, 1000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
}

// Make copyToClipboard available globally
window.copyToClipboard = copyToClipboard;