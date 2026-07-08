// ============================================
// CIPHER SUITE - Web Implementation
// ============================================

window.getCaesarCipherHTML = function() {
    return `
        <div class="project-content">
            <h2>🔐 Cipher Suite</h2>
            <p class="project-desc">Hide your secret messages or reveal them using multiple algorithms!</p>

            <div class="caesar-container">
                <div class="caesar-input-group">
                    <label for="cipherSelect">🔄 Select Algorithm</label>
                    <select id="cipherSelect" class="cipher-select">
                        <option value="caesar">Caesar Cipher</option>
                        <option value="vigenere">Vigenère Cipher</option>
                        <option value="atbash">Atbash Cipher</option>
                        <option value="playfair">Playfair Cipher</option>
                        <option value="rsa">Basic RSA</option>
                    </select>
                </div>

                <div class="caesar-input-group" id="messageGroup">
                    <label for="caesarMessage">📝 Enter your message (or encrypted numbers for RSA)</label>
                    <textarea id="caesarMessage" rows="4" placeholder="Type your secret message here..."></textarea>
                </div>

                <!-- Cipher Specific Inputs -->
                <div class="caesar-input-group dynamic-input" id="caesarInput">
                    <label for="caesarShift">🔑 Shift Key: <span id="shiftValue">3</span></label>
                    <input type="range" id="caesarShift" min="1" max="25" value="3" step="1">
                </div>

                <div class="caesar-input-group dynamic-input" id="keywordInput" style="display: none;">
                    <label for="cipherKeyword">🔑 Keyword</label>
                    <input type="text" id="cipherKeyword" placeholder="Enter keyword (letters only)">
                </div>
                
                <div class="caesar-input-group dynamic-input" id="rsaKeysGroup" style="display: none;">
                    <button id="rsaGenerateBtn" class="caesar-btn" style="margin-bottom: 10px;">🎲 Generate RSA Keys</button>
                    <div style="display:flex; gap:10px;">
                        <div style="flex:1;">
                            <label>Public Key (e, n)</label>
                            <input type="text" id="rsaPubKeyE" placeholder="e">
                            <input type="text" id="rsaPubKeyN" placeholder="n">
                        </div>
                        <div style="flex:1;">
                            <label>Private Key (d, n)</label>
                            <input type="text" id="rsaPrivKeyD" placeholder="d">
                            <input type="text" id="rsaPrivKeyN" placeholder="n">
                        </div>
                    </div>
                </div>

                <div class="caesar-buttons">
                    <button id="caesarEncryptBtn" class="caesar-btn encrypt">🔒 Encrypt</button>
                    <button id="caesarDecryptBtn" class="caesar-btn decrypt">🔓 Decrypt</button>
                </div>

                <div class="caesar-output-group">
                    <label>✨ Resulting Message</label>
                    <div id="caesarResult" class="caesar-result"></div>
                    <button id="caesarCopyBtn" class="caesar-copy-btn">📋 Copy</button>
                </div>
            </div>
        </div>

        <style>
            .caesar-container {
                max-width: 600px;
                margin: 0 auto;
                padding: 1.5rem;
                background: var(--surface-color);
                border-radius: 16px;
                border: 1px solid var(--border-color);
            }
            .cipher-select {
                width: 100%;
                padding: 0.75rem;
                border-radius: 8px;
                border: 1px solid var(--border-color);
                background: var(--bg-color);
                color: var(--text-color);
                font-size: 1rem;
            }
            .caesar-input-group {
                margin-bottom: 1.5rem;
            }
            .caesar-input-group label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 600;
                color: var(--text-color);
            }
            .caesar-input-group textarea, .caesar-input-group input[type="text"] {
                width: 100%;
                padding: 0.75rem;
                border-radius: 8px;
                border: 1px solid var(--border-color);
                background: var(--bg-color);
                color: var(--text-color);
                font-family: monospace;
                resize: vertical;
                font-size: 1rem;
            }
            .caesar-input-group input[type="range"] {
                width: 100%;
                cursor: pointer;
            }
            .caesar-buttons {
                display: flex;
                gap: 1rem;
                margin-bottom: 1.5rem;
            }
            .caesar-btn {
                flex: 1;
                padding: 0.75rem;
                border: none;
                border-radius: 8px;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.2s ease;
                font-size: 1rem;
                background: var(--border-color);
                color: var(--text-color);
            }
            .caesar-btn.encrypt {
                background: var(--primary-color);
                color: white;
            }
            .caesar-btn.decrypt {
                background: var(--secondary-color);
                color: white;
            }
            .caesar-btn:hover {
                transform: translateY(-2px);
                filter: brightness(1.05);
            }
            .caesar-output-group {
                position: relative;
            }
            .caesar-result {
                padding: 0.75rem;
                border-radius: 8px;
                border: 1px solid var(--border-color);
                background: var(--bg-color);
                color: var(--text-color);
                font-family: monospace;
                min-height: 60px;
                word-break: break-all;
                font-size: 1rem;
                margin-bottom: 0.5rem;
            }
            .caesar-copy-btn {
                padding: 0.4rem 1rem;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 6px;
                cursor: pointer;
                font-size: 0.8rem;
                transition: all 0.2s ease;
            }
            .caesar-copy-btn:hover {
                background: var(--primary-color);
                color: white;
            }
        </style>
    `;
};

function caesar_cipher(message, shift, isDecrypt) {
    if (isDecrypt) shift = -shift;
    let result = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (/[A-Za-z]/.test(char)) {
            let start = (char === char.toUpperCase()) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            let shiftedPos = (char.charCodeAt(0) - start + shift) % 26;
            if (shiftedPos < 0) shiftedPos += 26;
            result += String.fromCharCode(start + shiftedPos);
        } else {
            result += char;
        }
    }
    return result;
}

function caesar_vigenereCipher(message, keyword, isDecrypt) {
    let result = "";
    keyword = keyword.replace(/[^A-Za-z]/g, "").toUpperCase();
    if (!keyword) return message;
    
    let keywordIdx = 0;
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (/[A-Za-z]/.test(char)) {
            let start = (char === char.toUpperCase()) ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
            let shift = keyword.charCodeAt(keywordIdx % keyword.length) - 'A'.charCodeAt(0);
            if (isDecrypt) shift = -shift;
            
            let shiftedPos = (char.charCodeAt(0) - start + shift) % 26;
            if (shiftedPos < 0) shiftedPos += 26;
            
            result += String.fromCharCode(start + shiftedPos);
            keywordIdx++;
        } else {
            result += char;
        }
    }
    return result;
}

function caesar_atbashCipher(message) {
    let result = "";
    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (/[A-Za-z]/.test(char)) {
            if (char === char.toUpperCase()) {
                result += String.fromCharCode('Z'.charCodeAt(0) - (char.charCodeAt(0) - 'A'.charCodeAt(0)));
            } else {
                result += String.fromCharCode('z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0)));
            }
        } else {
            result += char;
        }
    }
    return result;
}

function caesar_generatePlayfairMatrix(keyword) {
    keyword = keyword.replace(/[^A-Za-z]/g, "").toUpperCase().replace(/J/g, "I");
    let matrix = [];
    let seen = new Set();
    let alphabet = "ABCDEFGHIKLMNOPQRSTUVWXYZ"; // No J
    
    for (let char of (keyword + alphabet)) {
        if (!seen.has(char)) {
            seen.add(char);
            matrix.push(char);
        }
    }
    
    let grid = [];
    for (let i = 0; i < 25; i += 5) {
        grid.push(matrix.slice(i, i + 5));
    }
    return grid;
}

function caesar_findPosition(matrix, char) {
    for (let r = 0; r < 5; r++) {
        for (let c = 0; c < 5; c++) {
            if (matrix[r][c] === char) return [r, c];
        }
    }
    return [-1, -1];
}

function caesar_playfairCipher(message, keyword, isDecrypt) {
    let matrix = caesar_generatePlayfairMatrix(keyword);
    let msg = message.replace(/[^A-Za-z]/g, "").toUpperCase().replace(/J/g, "I");
    if (!msg) return "";
    
    let processedMsg = "";
    let i = 0;
    while (i < msg.length) {
        processedMsg += msg[i];
        if (i + 1 < msg.length) {
            if (msg[i] === msg[i+1] && !isDecrypt) {
                processedMsg += "X";
            } else {
                processedMsg += msg[i+1];
                i++;
            }
        } else {
            if (!isDecrypt) {
                processedMsg += "X";
            }
        }
        i++;
    }
    
    let result = "";
    let shift = !isDecrypt ? 1 : -1;
    
    for (let j = 0; j < processedMsg.length - 1; j += 2) {
        let char1 = processedMsg[j];
        let char2 = processedMsg[j+1];
        let [r1, c1] = caesar_findPosition(matrix, char1);
        let [r2, c2] = caesar_findPosition(matrix, char2);
        
        if (r1 === r2) {
            result += matrix[r1][(c1 + shift + 5) % 5];
            result += matrix[r2][(c2 + shift + 5) % 5];
        } else if (c1 === c2) {
            result += matrix[(r1 + shift + 5) % 5][c1];
            result += matrix[(r2 + shift + 5) % 5][c2];
        } else {
            result += matrix[r1][c2];
            result += matrix[r2][c1];
        }
    }
    return result;
}

function caesar_rsaIsPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function caesar_rsaGeneratePrime(minVal, maxVal) {
    let prime = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    while (!caesar_rsaIsPrime(prime)) {
        prime = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    }
    return prime;
}

function caesar_rsaGcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function caesar_rsaModInverse(e, phi) {
    for (let d = 2; d < phi; d++) {
        if ((d * e) % phi === 1) return d;
    }
    return null;
}

function caesar_generateRsaKeysJS() {
    let p = caesar_rsaGeneratePrime(10, 100);
    let q = caesar_rsaGeneratePrime(10, 100);
    while (p === q) q = caesar_rsaGeneratePrime(10, 100);
    
    let n = p * q;
    let phi = (p - 1) * (q - 1);
    
    let e = Math.floor(Math.random() * (phi - 2)) + 2;
    while (caesar_rsaGcd(e, phi) !== 1) e = Math.floor(Math.random() * (phi - 2)) + 2;
    
    let d = caesar_rsaModInverse(e, phi);
    while (d === null) {
        e = Math.floor(Math.random() * (phi - 2)) + 2;
        while (caesar_rsaGcd(e, phi) !== 1) e = Math.floor(Math.random() * (phi - 2)) + 2;
        d = caesar_rsaModInverse(e, phi);
    }
    return { pub: { e, n }, priv: { d, n } };
}

function caesar_rsaModPow(base, exponent, modulus) {
    if (modulus === 1n) return 0n;
    let result = 1n;
    base = base % modulus;
    while (exponent > 0n) {
        if (exponent % 2n === 1n) result = (result * base) % modulus;
        exponent = exponent / 2n;
        base = (base * base) % modulus;
    }
    return result;
}

function caesar_rsaEncrypt(message, e, n) {
    let cipher = [];
    let eBig = BigInt(e);
    let nBig = BigInt(n);
    for (let i = 0; i < message.length; i++) {
        let m = BigInt(message.charCodeAt(i));
        cipher.push(caesar_rsaModPow(m, eBig, nBig).toString());
    }
    return cipher.join(', ');
}

function caesar_rsaDecrypt(cipherStr, d, n) {
    let parts = cipherStr.split(',').map(s => s.trim()).filter(s => s);
    let message = "";
    let dBig = BigInt(d);
    let nBig = BigInt(n);
    for (let i = 0; i < parts.length; i++) {
        let c = BigInt(parts[i]);
        let m = Number(caesar_rsaModPow(c, dBig, nBig));
        message += String.fromCharCode(m);
    }
    return message;
}

window.initCaesarCipher = function() {
    const cipherSelect = document.getElementById('cipherSelect');
    
    // Dynamic Inputs
    const caesarInput = document.getElementById('caesarInput');
    const keywordInput = document.getElementById('keywordInput');
    const rsaKeysGroup = document.getElementById('rsaKeysGroup');
    
    const messageInput = document.getElementById('caesarMessage');
    const shiftSlider = document.getElementById('caesarShift');
    const shiftValue = document.getElementById('shiftValue');
    const keywordField = document.getElementById('cipherKeyword');
    
    const encryptBtn = document.getElementById('caesarEncryptBtn');
    const decryptBtn = document.getElementById('caesarDecryptBtn');
    const resultDiv = document.getElementById('caesarResult');
    const copyBtn = document.getElementById('caesarCopyBtn');

    // RSA specific inputs
    const rsaGenerateBtn = document.getElementById('rsaGenerateBtn');
    const rsaPubKeyE = document.getElementById('rsaPubKeyE');
    const rsaPubKeyN = document.getElementById('rsaPubKeyN');
    const rsaPrivKeyD = document.getElementById('rsaPrivKeyD');
    const rsaPrivKeyN = document.getElementById('rsaPrivKeyN');

    if (!messageInput || !encryptBtn || !decryptBtn || !resultDiv) return;

    // Handle dropdown change
    cipherSelect.addEventListener('change', function() {
        const val = this.value;
        caesarInput.style.display = 'none';
        keywordInput.style.display = 'none';
        rsaKeysGroup.style.display = 'none';
        
        if (val === 'caesar') {
            caesarInput.style.display = 'block';
        } else if (val === 'vigenere' || val === 'playfair') {
            keywordInput.style.display = 'block';
        } else if (val === 'rsa') {
            rsaKeysGroup.style.display = 'block';
        }
    });

    // Update shift value display
    shiftSlider.addEventListener('input', function() {
        shiftValue.textContent = this.value;
    });
    
    // Generate RSA keys
    rsaGenerateBtn.addEventListener('click', function() {
        let keys = caesar_generateRsaKeysJS();
        rsaPubKeyE.value = keys.pub.e;
        rsaPubKeyN.value = keys.pub.n;
        rsaPrivKeyD.value = keys.priv.d;
        rsaPrivKeyN.value = keys.priv.n;
    });

    function processCipher(isDecrypt) {
        const val = cipherSelect.value;
        const msg = messageInput.value;
        if (!msg) return;
        
        let output = "";
        
        if (val === 'caesar') {
            output = caesar_cipher(msg, parseInt(shiftSlider.value), isDecrypt);
        } else if (val === 'vigenere') {
            output = caesar_vigenereCipher(msg, keywordField.value, isDecrypt);
        } else if (val === 'atbash') {
            output = caesar_atbashCipher(msg);
        } else if (val === 'playfair') {
            output = caesar_playfairCipher(msg, keywordField.value, isDecrypt);
        } else if (val === 'rsa') {
            try {
                if (isDecrypt) {
                    let d = parseInt(rsaPrivKeyD.value);
                    let n = parseInt(rsaPrivKeyN.value);
                    if (isNaN(d) || isNaN(n)) throw new Error("Invalid private key");
                    output = caesar_rsaDecrypt(msg, d, n);
                } else {
                    let e = parseInt(rsaPubKeyE.value);
                    let n = parseInt(rsaPubKeyN.value);
                    if (isNaN(e) || isNaN(n)) throw new Error("Invalid public key");
                    output = caesar_rsaEncrypt(msg, e, n);
                }
            } catch (err) {
                output = "Error: " + err.message;
            }
        }
        
        resultDiv.textContent = output;
    }

    encryptBtn.addEventListener('click', () => processCipher(false));
    decryptBtn.addEventListener('click', () => processCipher(true));

    // Copy to clipboard
    copyBtn.addEventListener('click', function() {
        const text = resultDiv.textContent;
        if (text && text !== '') {
            navigator.clipboard.writeText(text).then(() => {
                const originalText = copyBtn.textContent;
                copyBtn.textContent = '✅ Copied!';
                setTimeout(() => {
                    copyBtn.textContent = originalText;
                }, 2000);
            });
        }
    });
};