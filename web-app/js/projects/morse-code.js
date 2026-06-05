function getMorseCodeHTML() {
    return `
        <div class="project-content">
            <h2>📻 Morse Code Translator</h2>
            <div class="morse-container">
                <div class="input-section">
                    <div class="mode-toggle">
                        <input type="radio" id="modeTextToMorse" name="translationMode" value="textToMorse" checked>
                        <label for="modeTextToMorse">Text to Morse</label>
                        <input type="radio" id="modeMorseToText" name="translationMode" value="morseToText">
                        <label for="modeMorseToText">Morse to Text</label>
                    </div>
                    <label id="inputLabel" for="textInput">Enter Text:</label>
                    <textarea id="textInput" rows="4" placeholder="Type your message here..."></textarea>
                    <button class="btn-translate" id="translateBtn">📻 Translate to Morse</button>
                </div>
                
                <div class="output-section">
                    <h3>Translation Output:</h3>
                    <div class="morse-output" id="morseOutput">
                        <p class="placeholder">Your translation will appear here...</p>
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
        '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..',
        '!': '-.-.--', '-': '-....-', '/': '-..-.', '@': '.--.-.', '(': '-.--.',
        ')': '-.--.-', ' ': '/'
    };
    
    const textInput = document.getElementById('textInput');
    const translateBtn = document.getElementById('translateBtn');
    const morseOutput = document.getElementById('morseOutput');
    const morseChart = document.getElementById('morseChart');
    const modeTextToMorse = document.getElementById('modeTextToMorse');
    const modeMorseToText = document.getElementById('modeMorseToText');
    const inputLabel = document.getElementById('inputLabel');
    
    // Switch Modes
    modeTextToMorse.addEventListener('change', () => {
        if (modeTextToMorse.checked) {
            inputLabel.textContent = 'Enter Text:';
            textInput.placeholder = 'Type your message here...';
            textInput.value = '';
            morseOutput.textContent = '<p class="placeholder">Your translation will appear here...</p>';
            translateBtn.textContent = '📻 Translate to Morse';
        }
    });

    modeMorseToText.addEventListener('change', () => {
        if (modeMorseToText.checked) {
            inputLabel.textContent = 'Enter Morse Code:';
            textInput.placeholder = "Type morse code (separate letters with space, words with double spaces)...";
            textInput.value = '';
            morseOutput.textContent = '<p class="placeholder">Your translation will appear here...</p>';
            translateBtn.textContent = '📝 Translate to Text';
        }
    });
    
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
    
    function translate() {
        const text = textInput.value.toUpperCase();
        if (!text.trim()) {
            morseOutput.textContent = '<p class="placeholder">Please enter something to translate!</p>';
            return;
        }
        
        morseOutput.textContent = '';
        
        if (modeMorseToText.checked) {
            // Morse to Text
            const reverseMorseCode = {};
            Object.keys(morseCode).forEach(key => {
                reverseMorseCode[morseCode[key]] = key;
            });
            
            const words = text.trim().split(/(?:\s*\/\s*|\s{2,})/);
            
            words.forEach((word, wordIndex) => {
                const chars = word.trim().split(/\s+/);
                let textWord = '';
                chars.forEach(char => {
                    if (reverseMorseCode[char]) {
                        textWord += reverseMorseCode[char];
                    } else if (char) {
                        textWord += '?';
                    }
                });
                
                if (textWord.trim()) {
                    const wordEl = document.createElement('div');
                    wordEl.className = 'morse-word';
                    wordEl.style.fontFamily = 'inherit';
                    wordEl.style.letterSpacing = '2px';
                    wordEl.textContent = textWord.trim();
                    wordEl.style.animationDelay = `${wordIndex * 0.1}s`;
                    morseOutput.appendChild(wordEl);
                }
            });
        } else {
            // Text to Morse
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
    }
    
    translateBtn.addEventListener('click', translate);
    textInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            translate();
        }
    });
}
