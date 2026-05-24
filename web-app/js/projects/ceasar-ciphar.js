function getCaesarCipherHTML() {
    return `
        <div class="project-content">
            <h2>🔐 Caesar Cipher Encoder & Decoder</h2>
            <p style="text-align:center; color: var(--text-secondary); margin-top: -10px; margin-bottom: 20px;">Encrypt and decrypt messages using Caesar Cipher</p>

            <div class="caesar-container">
                <div class="mode-toggle">
                    <input type="radio" id="modeEncrypt" name="cipherMode" value="encrypt" checked>
                    <label for="modeEncrypt">🔐 Encrypt</label>
                    <input type="radio" id="modeDecrypt" name="cipherMode" value="decrypt">
                    <label for="modeDecrypt">📝 Decrypt</label>
                </div>

                <div class="input-section">
                    <label id="inputLabel" for="cipherInput">📝 Enter Text to Encrypt:</label>
                    <textarea id="cipherInput" rows="4" placeholder="Type your message here..."></textarea>
                </div>

                <div class="shift-section">
                    <label for="shiftInput">🔑 Shift Value:</label>
                    <div class="shift-row">
                        <input type="range" id="shiftSlider" min="1" max="25" value="3">
                        <input type="number" id="shiftInput" min="1" max="25" value="3">
                    </div>
                </div>

                <div class="btn-row">
                    <button id="cipherBtn">🔐 Encrypt Message</button>
                    <button id="clearBtn">🗑️ Clear</button>
                </div>

                <div class="output-section">
                    <h3>Output:</h3>
                    <div id="cipherOutput">
                        <p class="placeholder-text">Your result will appear here...</p>
                    </div>
                    <button id="copyBtn" style="display: none;">📋 Copy to Clipboard</button>
                </div>

                <div class="chart-section">
                    <h4>🔡 How the shift works:</h4>
                    <div id="shiftPreview"></div>
                </div>
            </div>
        </div>

        <style>
            .caesar-container {
                padding: 20px;
                max-width: 750px;
                margin: 0 auto;
            }

            .mode-toggle {
                display: flex;
                gap: 10px;
                margin-bottom: 20px;
            }

            .mode-toggle input[type="radio"] {
                display: none;
            }

            .mode-toggle label {
                padding: 8px 16px;
                border: 2px solid var(--primary-color);
                border-radius: 8px;
                cursor: pointer;
                font-weight: bold;
                color: var(--text-color);
                transition: var(--transition);
                display: inline-block !important;
                margin-bottom: 0 !important;
            }

            .mode-toggle input[type="radio"]:checked + label {
                background: var(--primary-color);
                color: white;
            }

            .input-section {
                margin-bottom: 15px;
            }

            .input-section label {
                display: block;
                margin-bottom: 6px;
                font-size: 1rem;
                font-weight: 600;
            }

            .input-section textarea {
                width: 100%;
                padding: 10px;
                font-size: 1rem;
                border: 2px solid var(--border-color);
                border-radius: 8px;
                background: var(--bg-color);
                color: var(--text-color);
                resize: vertical;
                font-family: inherit;
                box-sizing: border-box;
            }

            .shift-section {
                margin-bottom: 15px;
            }

            .shift-section label {
                display: block;
                margin-bottom: 6px;
                font-size: 1rem;
                font-weight: 600;
            }

            .shift-row {
                display: flex;
                align-items: center;
                gap: 10px;
            }

            #shiftSlider {
                flex: 1;
                accent-color: var(--primary-color);
                cursor: pointer;
            }

            #shiftInput {
                width: 65px;
                padding: 6px;
                font-size: 1rem;
                border: 2px solid var(--border-color);
                border-radius: 8px;
                background: var(--bg-color);
                color: var(--text-color);
                text-align: center;
            }

            .btn-row {
                display: flex;
                gap: 10px;
                margin-bottom: 20px;
                flex-wrap: wrap;
            }

            #cipherBtn {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                border: none;
                padding: 10px 22px;
                border-radius: 50px;
                font-size: 1rem;
                cursor: pointer;
                transition: var(--transition);
            }

            #cipherBtn:hover {
                transform: scale(1.05);
                box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
            }

            #clearBtn {
                background: transparent;
                color: var(--text-secondary);
                border: 2px solid var(--border-color);
                padding: 10px 18px;
                border-radius: 50px;
                font-size: 1rem;
                cursor: pointer;
                transition: var(--transition);
            }

            #clearBtn:hover {
                background: var(--surface-color);
                color: var(--text-color);
            }

            .output-section h3 {
                margin-bottom: 8px;
            }

            #cipherOutput {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 10px;
                padding: 16px;
                min-height: 90px;
                margin-bottom: 10px;
                word-break: break-word;
            }

            .placeholder-text {
                color: var(--text-secondary);
                font-style: italic;
                text-align: center;
                margin: 0;
            }

            .result-text {
                font-family: 'Courier New', monospace;
                font-size: 1.2rem;
                font-weight: bold;
                color: var(--primary-color);
                letter-spacing: 2px;
                line-height: 1.8;
                margin: 0;
            }

            #copyBtn {
                background: var(--surface-color);
                color: var(--text-color);
                border: 2px solid var(--border-color);
                padding: 7px 16px;
                border-radius: 50px;
                font-size: 0.9rem;
                cursor: pointer;
                margin-bottom: 20px;
                transition: var(--transition);
            }

            #copyBtn:hover {
                background: var(--primary-color);
                color: white;
                border-color: var(--primary-color);
            }

            .chart-section {
                margin-top: 25px;
            }

            .chart-section h4 {
                text-align: center;
                margin-bottom: 10px;
            }

            #shiftPreview {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 10px;
                padding: 12px 16px;
                overflow-x: auto;
                display: flex;
                flex-direction: column;
                gap: 6px;
            }

            .alphabet-row {
                display: flex;
                align-items: center;
                gap: 4px;
            }

            .row-label {
                font-size: 0.8rem;
                font-weight: bold;
                width: 65px;
                color: var(--text-secondary);
                flex-shrink: 0;
            }

            .letter-box {
                width: 24px;
                height: 24px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 4px;
                font-family: 'Courier New', monospace;
                font-size: 0.8rem;
                font-weight: bold;
            }

            .letter-box.plain {
                background: var(--bg-color);
                color: var(--text-color);
                border: 1px solid var(--border-color);
            }

            .letter-box.cipher {
                background: var(--primary-color);
                color: white;
            }
        </style>
    `;
}


function initCaesarCipher() {
    const textBox = document.getElementById('cipherInput');
    const goBtn = document.getElementById('cipherBtn');
    const clearBtn = document.getElementById('clearBtn');
    const copyBtn = document.getElementById('copyBtn');
    const outputBox = document.getElementById('cipherOutput');
    const shiftNumber = document.getElementById('shiftInput');
    const shiftSlide = document.getElementById('shiftSlider');
    const encryptRadio = document.getElementById('modeEncrypt');
    const decryptRadio = document.getElementById('modeDecrypt');
    const theLabel = document.getElementById('inputLabel');
    const previewDiv = document.getElementById('shiftPreview');

    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    function encryptText(text, shift) {
        let result = '';

        for (const ch of text) {
            if (ch >= 'A' && ch <= 'Z') {
                result += String.fromCharCode(((ch.charCodeAt(0) - 65 + shift) % 26 + 26) % 26 + 65);
            } else if (ch >= 'a' && ch <= 'z') {
                result += String.fromCharCode(((ch.charCodeAt(0) - 97 + shift) % 26 + 26) % 26 + 97);
            } else {
                result += ch;
            }
        }

        return result;
    }

    function decryptText(text, shift) {
        return encryptText(text, -shift);
    }

    function buildAlphabetRow(label, getChar, className) {
        const row = document.createElement('div');
        row.className = 'alphabet-row';

        const labelEl = document.createElement('span');
        labelEl.className = 'row-label';
        labelEl.textContent = label;
        row.appendChild(labelEl);

        for (let i = 0; i < 26; i++) {
            const box = document.createElement('span');
            box.className = `letter-box ${className}`;
            box.textContent = getChar(i);
            row.appendChild(box);
        }

        return row;
    }

    function showPreview(shift) {
        previewDiv.innerHTML = '';
        previewDiv.appendChild(buildAlphabetRow('Original:', i => ALPHABET[i], 'plain'));
        previewDiv.appendChild(buildAlphabetRow(`Shift +${shift}:`, i => ALPHABET[(i + shift) % 26], 'cipher'));
    }

    function setMode(isEncrypt) {
        theLabel.textContent = isEncrypt ? '📝 Enter Text to Encrypt:' : '📨 Enter Text to Decrypt:';
        textBox.placeholder = isEncrypt ? 'Type your message here...' : 'Paste the encrypted text here...';
        textBox.value = '';
        outputBox.innerHTML = '<p class="placeholder-text">Your result will appear here...</p>';
        copyBtn.style.display = 'none';
        goBtn.textContent = isEncrypt ? '🔐 Encrypt Message' : '📝 Decrypt Message';
    }

    function syncSlider(val) {
        const clamped = Math.min(25, Math.max(1, val));
        shiftNumber.value = clamped;
        shiftSlide.value = clamped;
        showPreview(clamped);
    }

    function showError(msg) {
        outputBox.innerHTML = `<p class="placeholder-text">❌ ${msg}</p>`;
        copyBtn.style.display = 'none';
    }

    function showResult(text) {
        outputBox.innerHTML = '';
        const p = document.createElement('p');
        p.className = 'result-text';
        p.textContent = text;
        outputBox.appendChild(p);
        copyBtn.style.display = 'inline-block';
        copyBtn.dataset.result = text;
    }

    encryptRadio.addEventListener('change', () => setMode(true));
    decryptRadio.addEventListener('change', () => setMode(false));

    shiftSlide.addEventListener('input', () => syncSlider(parseInt(shiftSlide.value)));
    shiftNumber.addEventListener('input', () => syncSlider(parseInt(shiftNumber.value)));

    goBtn.addEventListener('click', () => {
        const text = textBox.value;
        const shift = parseInt(shiftNumber.value);

        if (!text.trim()) return showError('Please enter some text first!');
        if (isNaN(shift) || shift < 1 || shift > 25) return showError('Please enter a shift value between 1 and 25!');

        const result = encryptRadio.checked ? encryptText(text, shift) : decryptText(text, shift);
        showResult(result);
    });

    clearBtn.addEventListener('click', () => {
        textBox.value = '';
        outputBox.innerHTML = '<p class="placeholder-text">Your result will appear here...</p>';
        copyBtn.style.display = 'none';
    });

    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(copyBtn.dataset.result).then(() => {
            const original = copyBtn.textContent;
            copyBtn.textContent = '✅ Copied!';
            setTimeout(() => copyBtn.textContent = original, 1500);
        });
    });

    showPreview(3);
}