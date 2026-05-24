function getCalculatorHTML() {
    return `
    <div class="project-content">
        <h2>🧮 Ultra Pro Calculator</h2>

        <div class="calculator" tabindex="0">
            <div class="calc-display" id="calcDisplay">0</div>

            <div class="calc-buttons">

                <!-- TOP ROW -->
                <button class="calc-btn clear" data-action="clear" tabindex="-1">C</button>
                <button class="calc-btn operator" data-action="delete" tabindex="-1">⌫</button>
                <button class="calc-btn operator" data-action="(" tabindex="-1">(</button>
                <button class="calc-btn operator" data-action=")" tabindex="-1">)</button>

                <!-- SCIENTIFIC -->
                <button class="calc-btn operator" data-action="sin" tabindex="-1">sin</button>
                <button class="calc-btn operator" data-action="cos" tabindex="-1">cos</button>
                <button class="calc-btn operator" data-action="tan" tabindex="-1">tan</button>
                <button class="calc-btn operator" data-action="sqrt" tabindex="-1">√</button>

                <button class="calc-btn operator" data-action="square" tabindex="-1">x²</button>
                <button class="calc-btn operator" data-action="inv" tabindex="-1">1/x</button>
                <button class="calc-btn operator" data-action="^" tabindex="-1">xʸ</button>
                <button class="calc-btn operator" data-action="/" tabindex="-1">÷</button>

                <!-- NUMBERS -->
                <button class="calc-btn number" data-value="7" tabindex="-1">7</button>
                <button class="calc-btn number" data-value="8" tabindex="-1">8</button>
                <button class="calc-btn number" data-value="9" tabindex="-1">9</button>
                <button class="calc-btn operator" data-action="*" tabindex="-1">×</button>

                <button class="calc-btn number" data-value="4" tabindex="-1">4</button>
                <button class="calc-btn number" data-value="5" tabindex="-1">5</button>
                <button class="calc-btn number" data-value="6" tabindex="-1">6</button>
                <button class="calc-btn operator" data-action="-" tabindex="-1">−</button>

                <button class="calc-btn number" data-value="1" tabindex="-1">1</button>
                <button class="calc-btn number" data-value="2" tabindex="-1">2</button>
                <button class="calc-btn number" data-value="3" tabindex="-1">3</button>
                <button class="calc-btn operator" data-action="+" tabindex="-1">+</button>

                <button class="calc-btn number span-2" data-value="0" tabindex="-1">0</button>
                <button class="calc-btn number" data-value="." tabindex="-1">.</button>
                <button class="calc-btn equals" data-action="=" tabindex="-1">=</button>

            </div>
        </div>
    </div>

    <style>
        .calculator{
            max-width:380px;
            margin:2rem auto;
            padding:1.2rem;
            background:var(--surface-color);
            border-radius:22px;
            box-shadow:var(--shadow);
        }

        .calc-display{
            background:var(--bg-color);
            padding:1.5rem;
            border-radius:16px;
            font-size:2.2rem;
            text-align:right;
            margin-bottom:1rem;
            min-height:70px;
            display:flex;
            align-items:center;
            justify-content:flex-end;
            word-break:break-all;
        }

        .calc-buttons{
            display:grid;
            grid-template-columns:repeat(4,1fr);
            gap:0.6rem;
        }

        .calc-btn{
            padding:1rem;
            font-size:1.1rem;
            border:none;
            border-radius:12px;
            cursor:pointer;
            font-weight:600;
            transition:0.2s;
        }

        .calc-btn:hover{
            transform:scale(1.05);
        }

        .number{
            background:var(--surface-color);
            border:2px solid var(--border-color);
            color:var(--text-color);
        }

        .operator{
            background:var(--primary-color);
            color:white;
        }

        .equals{
            background:var(--success-color);
            color:white;
        }

        .clear{
            background:var(--danger-color);
            color:white;
        }

        .span-2{
            grid-column:span 2;
        }
    </style>
    `;
}

function initCalculator() {
    const display = document.getElementById("calcDisplay");
    if (!display) return;
    let expression = "";

    function update() {
        display.textContent = expression || "0";
    }

    function format(expr) {
        return expr
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/\^/g, "**");
    }

    function safeEval(expr) {
        try {
            if (!expr) return "";
            let result = eval(format(expr));
            if (result === undefined) return "";
            if (isNaN(result)) return "Error";
            return String(result);
        } catch {
            return "Error";
        }
    }

    function applyFunction(type) {
        try {
            let value = eval(format(expression || "0"));
            let result;
            switch (type) {
                case "sin": result = Math.sin(value); break;
                case "cos": result = Math.cos(value); break;
                case "tan": result = Math.tan(value); break;
                case "sqrt": result = Math.sqrt(value); break;
                case "square": result = value * value; break;
                case "inv": result = 1 / value; break; 
            }
            if (isNaN(result)) return "Error"; 
            return String(result);
        } catch {
            return "Error";
        }
    }

 
    function clearIfFinished() {
        if (expression === "Error" || expression === "NaN") {
            expression = "";
        }
    }

    document.querySelectorAll(".calc-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            clearIfFinished();
            
            const value = btn.dataset.value;
            const action = btn.dataset.action;

            if (value !== undefined) {
                if (value === ".") {
               
                    const lastOperand = expression.split(/[\+\-\*\/\^\(\)]/).pop();
                    if (lastOperand.includes(".")) return;
                }
                expression += value;
                update();
                return;
            }

            if (!action) return;

    
            switch (action) {
                case "clear":
                    expression = "";
                    break;
                case "delete":
                    if (expression === "Infinity" || expression === "-Infinity") {
                        expression = "";
                    } else {
                        expression = expression.slice(0, -1);
                    }
                    break;
                case "=":
                    expression = safeEval(expression);
                    break;
                case "sin":
                case "cos":
                case "tan":
                case "sqrt":
                case "square":
                case "inv":
                    expression = applyFunction(action);
                    break;
                case "^":
                case "+":
                case "-":
                case "*":
                case "/":
        
                    const lastChar = expression.slice(-1);
                    if (["+", "-", "*", "/", "^"].includes(lastChar)) {
                        expression = expression.slice(0, -1) + action;
                    } else {
                        expression += action;
                    }
                    break;
                default:
                    expression += action;
            }
            update();
        });
    });

    document.addEventListener("keydown", (e) => {
        const key = e.key;
        if (!document.getElementById("calcDisplay")) return;

        // Whitelist allowed keys to prevent typing letters
        const allowedKeys = ["Enter", "Backspace", "Escape", "=", "+", "-", "*", "/", "^", ".", "(", ")"];
        if (allowedKeys.includes(key) || /^[0-9]$/.test(key)) {
            e.preventDefault();
        } else {
            return;
        }

        clearIfFinished();

        if (/^[0-9]$/.test(key)) {
            expression += key;
        } else if (key === ".") {
            const lastOperand = expression.split(/[\+\-\*\/\^\(\)]/).pop();
            if (!lastOperand.includes(".")) {
                expression += ".";
            }
        } else if (["+", "-", "*", "/", "^"].includes(key)) {
            const lastChar = expression.slice(-1);
            if (["+", "-", "*", "/", "^"].includes(lastChar)) {
                expression = expression.slice(0, -1) + key;
            } else {
                expression += key;
            }
        } else if (key === ")" || key === "(") {
            expression += key;
        } else if (key === "Enter" || key === "=") {
            expression = safeEval(expression);
        } else if (key === "Backspace") {
            if (expression === "Infinity" || expression === "-Infinity") {
                expression = "";
            } else {
                expression = expression.slice(0, -1);
            }
        } else if (key === "Escape" || key.toLowerCase() === "c") {
            expression = "";
        }
        update();
    });

    update();
}