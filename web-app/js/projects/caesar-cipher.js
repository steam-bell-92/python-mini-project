function getCaesarCipherHTML() {
    return `
        <div class="project-content">
            <h2> Caesar Cipher</h2>
            <div class="caesar-container">
                <div class="input-section">
                    <label for="caesarInput">Enter Text:</label>
                    <textarea id="caesarInput" rows="4" placeholder="Type your message here..."></textarea>

                    <label for="shiftInput">Shift Key:</label>
                    <div class="shift-controls">
                        <input type="number" id="shiftInput" value="3" min="1" max="25">
                        <span class="shift-hint">(1-25)</span>
                    </div>

                    <div class="mode-toggle">
                        <input type="radio" id="modeEncrypt" name="cipherMode" value="encrypt" checked>
                        <label for="modeEncrypt"> Encrypt</label>
                        <input type="radio" id="modeDecrypt" name="cipherMode" value="decrypt">
                        <label for="modeDecrypt"> Decrypt</label>
                    </div>

                    <button class="btn-translate" id="cipherBtn"> Encrypt</button>
                </div>

                <div class="output-section">
                    <h3>Output:</h3>
                    <div class="cipher-output" id="cipherOutput">
                        <p class="placeholder">Your result will appear here...</p>
                    </div>
                </div>
            </div>
        </div>

        <style>
            .caesar-container {
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

            .shift-controls {
                display: flex;
                align-items: center;
                gap: 0.5rem;
                margin-bottom: 1rem;
            }

            .shift-controls input[type="number"] {
                width: 80px;
                padding: 0.5rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 8px;
                background: var(--bg-color);
                color: var(--text-color);
                text-align: center;
            }

            .shift-hint {
                color: var(--text-secondary);
                font-size: 0.9rem;
            }

            .mode-toggle {
                display: flex;
                gap: 1rem;
                margin-bottom: 1.5rem;
            }

            .mode-toggle input[type="radio"] {
                display: none;
            }

            .mode-toggle label {
                padding: 0.5rem 1rem;
                border: 2px solid var(--primary-color);
                border-radius: 8px;
                cursor: pointer;
                font-weight: bold;
                color: var(--text-color);
                transition: var(--transition);
                margin-bottom: 0 !important;
                display: inline-block !important;
            }

            .mode-toggle input[type="radio"]:checked + label {
                background: var(--primary-color);
                color: white;
            }

            .btn-translate {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                border: none;
                padding: 1rem 2rem;
                border-radius: 50px;
                font-size: 1.1rem;
                cursor: pointer;
                transition: var(--transition);
            }

            .btn-translate:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(99, 102, 241, 0.4);
            }

            .output-section h3 {
                margin-bottom: 1rem;
            }

            .cipher-output {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 10px;
                padding: 1.5rem;
                min-height: 100px;
                font-family: 'Courier New', monospace;
                font-size: 1.2rem;
                line-height: 1.8;
                word-break: break-all;
            }

            .placeholder {
                color: var(--text-secondary);
                text-align: center;
                font-style: italic;
                font-family: inherit;
            }
        </style>
    `;
}

function initCaesarCipher() {
    const input = document.getElementById('caesarInput');
    const shiftInput = document.getElementById('shiftInput');
    const cipherBtn = document.getElementById('cipherBtn');
    const output = document.getElementById('cipherOutput');
    const modeEncrypt = document.getElementById('modeEncrypt');
    const modeDecrypt = document.getElementById('modeDecrypt');

    function caesarShift(text, shift, decrypt = false) {
        const effectiveShift = decrypt ? (26 - shift) % 26 : shift;
        return text.split('').map(char => {
            if (char >= 'A' && char <= 'Z') {
                return String.fromCharCode(((char.charCodeAt(0) - 65 + effectiveShift) % 26) + 65);
            }
            if (char >= 'a' && char <= 'z') {
                return String.fromCharCode(((char.charCodeAt(0) - 97 + effectiveShift) % 26) + 97);
            }
            return char;
        }).join('');
    }

    function process() {
        const text = input.value;
        if (!text.trim()) {
            output.textContent = 'Please enter some text to process.';
            return;
        }

        const shift = parseInt(shiftInput.value, 10);
        if (isNaN(shift) || shift < 1 || shift > 25) {
            output.textContent = 'Shift must be between 1 and 25.';
            return;
        }

        const decrypt = modeDecrypt.checked;
        const result = caesarShift(text, shift, decrypt);
        output.textContent = result;
        cipherBtn.textContent = decrypt ? ' Decrypt' : ' Encrypt';
    }

    modeEncrypt.addEventListener('change', () => {
        if (modeEncrypt.checked) {
            cipherBtn.textContent = ' Encrypt';
        }
    });

    modeDecrypt.addEventListener('change', () => {
        if (modeDecrypt.checked) {
            cipherBtn.textContent = ' Decrypt';
        }
    });

    cipherBtn.addEventListener('click', process);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            process();
        }
    });
}
