function getCaesarCipherHTML() {
    return `
        <div class="project-content">
            <h2>🔐 Caesar Cipher</h2>
            <div class="caesar-box">
                <label for="caesarInput">Message</label>
                <textarea id="caesarInput" rows="5" placeholder="Enter a message to encrypt or decrypt">Hello, World!</textarea>

                <label for="caesarShift">Shift</label>
                <input id="caesarShift" type="number" min="1" max="25" value="3">

                <div class="caesar-actions">
                    <button class="btn-primary" id="caesarEncryptBtn">Encrypt</button>
                    <button class="btn-secondary" id="caesarDecryptBtn">Decrypt</button>
                </div>

                <div class="caesar-result" id="caesarResult" aria-live="polite"></div>
            </div>
        </div>
        <style>
            .caesar-box { max-width: 720px; margin: 0 auto; padding: 1.5rem; display: grid; gap: 1rem; }
            .caesar-box label { font-weight: 600; }
            .caesar-box textarea,
            .caesar-box input {
                width: 100%;
                padding: 0.9rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--surface-color);
                color: var(--text-color);
                font: inherit;
            }
            .caesar-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; }
            .caesar-actions button { padding: 0.85rem 1.5rem; border-radius: 30px; cursor: pointer; }
            .caesar-result {
                min-height: 3rem;
                padding: 1rem;
                border: 1px solid var(--border-color);
                border-radius: 10px;
                background: var(--surface-color);
                font-family: "Courier New", monospace;
                white-space: pre-wrap;
            }
        </style>
    `;
}

function initCaesarCipher() {
    const input = document.getElementById('caesarInput');
    const shift = document.getElementById('caesarShift');
    const encryptBtn = document.getElementById('caesarEncryptBtn');
    const decryptBtn = document.getElementById('caesarDecryptBtn');
    const result = document.getElementById('caesarResult');

    if (!input || !shift || !encryptBtn || !decryptBtn || !result) return;

    const transform = (direction) => {
        const rawShift = Number(shift.value);
        const normalizedShift = ((rawShift % 26) + 26) % 26;
        const offset = direction === 'decrypt' ? 26 - normalizedShift : normalizedShift;

        result.textContent = input.value.replace(/[a-z]/gi, (char) => {
            const base = char >= 'a' && char <= 'z' ? 97 : 65;
            return String.fromCharCode(((char.charCodeAt(0) - base + offset) % 26) + base);
        });
    };

    encryptBtn.addEventListener('click', () => transform('encrypt'));
    decryptBtn.addEventListener('click', () => transform('decrypt'));
    input.addEventListener('input', () => transform('encrypt'));
    shift.addEventListener('input', () => transform('encrypt'));
    transform('encrypt');
}
