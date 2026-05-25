function getPasswordForgeHTML() {
    return `
        <div class="project-content">
            <h2>🔐 Password Forge</h2>

            <div class="game-container">
                <p class="game-text">
                    Create a password that satisfies all firewall rules!
                </p>

                <input 
                    type="password"
                    id="passwordInput" 
                    placeholder="Enter password..."
                    class="password-input"
                >
                <button id="togglePasswordBtn" class="toggle-btn">Show</button>
                <button id="checkPasswordBtn" class="btn-check">
                    Check Password
                </button>

                <div id="rulesContainer" class="rules-container">
                    <p id="rule-length">❌ Must contain at least 8 characters</p>
                    <p id="rule-number">❌ Must contain a number</p>
                    <p id="rule-upper">❌ Must contain an uppercase letter</p>
                    <p id="rule-special">❌ Must contain a special character</p>
                </div>

                <div id="passwordResult" class="result-message"></div>
            </div>
        </div>

        <style>
            .game-container {
                text-align: center;
                padding: 2rem;
            }

            .password-input {
                width: 80%;
                padding: 1rem;
                border-radius: 10px;
                border: 2px solid var(--border-color);
                margin-top: 1rem;
                font-size: 1rem;
                background-color: var(--bg-color);
                color: var(--text-color);
            }

            .btn-check {
                margin-top: 1rem;
                padding: 0.8rem 1.5rem;
                border: none;
                border-radius: 10px;
                background: var(--primary-color);
                color: white;
                cursor: pointer;
                font-size: 1rem;
            }
            .toggle-btn {
                margin-top: 1rem;
                margin-left: 0.5rem;
                padding: 0.7rem 1rem;
                border: none;
                border-radius: 8px;
                cursor: pointer;
                background: #555;
                color: white;
            }

            .btn-check:hover {
                transform: scale(1.05);
            }

            .rules-container {
                margin-top: 1.5rem;
                text-align: left;
                display: inline-block;
            }

            .result-message {
                margin-top: 1.5rem;
                font-size: 1.2rem;
                font-weight: bold;
            }
        </style>
    `;
}

function initPasswordForge() {
    const checkBtn = document.getElementById('checkPasswordBtn');
    const passwordInput = document.getElementById('passwordInput');
    const toggleBtn = document.getElementById('togglePasswordBtn');
    
    // New: Grab the individual rule DOM elements
    const ruleLength = document.getElementById('rule-length');
    const ruleNumber = document.getElementById('rule-number');
    const ruleUpper = document.getElementById('rule-upper');
    const ruleSpecial = document.getElementById('rule-special');
    
    const result = document.getElementById('passwordResult');

    toggleBtn.addEventListener('click', () => {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            toggleBtn.textContent = 'Hide';
        } else {
            passwordInput.type = 'password';
            toggleBtn.textContent = 'Show';
        }
    });

    const rulesContainer = document.getElementById('rulesContainer');
    const result = document.getElementById('passwordResult');

    function checkRules() {
        const password = passwordInput.value;
    checkBtn.addEventListener('click', () => {
        const password = passwordInput.value;

        // 1. Evaluate Booleans
        const hasLength = password.length >= 8;
        const hasNumber = /\d/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`]/.test(password);

        rulesContainer.innerHTML = `
            <p>${hasLength ? '✅' : '❌'} Must contain at least 8 characters</p>
            <p>${hasNumber ? '✅' : '❌'} Must contain a number</p>
            <p>${hasUpper ? '✅' : '❌'} Must contain an uppercase letter</p>
            <p>${hasSpecial ? '✅' : '❌'} Must contain a special character</p>
        `;

        // 2. Update Individual Rule UI
        ruleLength.textContent = hasLength ? '✅ Must contain at least 8 characters' : '❌ Must contain at least 8 characters';
        ruleNumber.textContent = hasNumber ? '✅ Must contain a number' : '❌ Must contain a number';
        ruleUpper.textContent = hasUpper ? '✅ Must contain an uppercase letter' : '❌ Must contain an uppercase letter';
        ruleSpecial.textContent = hasSpecial ? '✅ Must contain a special character' : '❌ Must contain a special character';

        // 3. Update Global Status
        if (hasLength && hasNumber && hasUpper && hasSpecial) {
            result.textContent = "✅ Strong Password!";
            result.style.color = 'green';
        } else {
            result.textContent = "❌ Password does not meet all rules!";
            result.style.color = 'red';
        }
    });
}
