function getPasswordForgeHTML() {
    return `
        <div class="project-content">
            <h2>🔐 Password Forge</h2>

            <div class="game-container">
                <p class="game-text">
                    Create a password that satisfies all firewall rules!
                </p>

                <input 
                    type="text" 
                    id="passwordInput" 
                    placeholder="Enter password..."
                    class="password-input"
                >

                <button id="checkPasswordBtn" class="btn-check">
                    Check Password
                </button>

                <div id="rulesContainer" class="rules-container">
                    <p>❌ Must contain at least 8 characters</p>
                    <p>❌ Must contain a number</p>
                    <p>❌ Must contain an uppercase letter</p>
                    <p>❌ Must contain a special character</p>
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

    checkBtn.addEventListener('click', () => {
        const password = document.getElementById('passwordInput').value;
        const result = document.getElementById('passwordResult');

        const hasLength = password.length >= 8;
        const hasNumber = /\d/.test(password);
        const hasUpper = /[A-Z]/.test(password);
        const hasSpecial = /[!@#$%^&*]/.test(password);

        if (hasLength && hasNumber && hasUpper && hasSpecial) {
            result.textContent = "✅ Strong Password!";
        } else {
            result.textContent = "❌ Password does not meet all rules!";
        }
    });
}
