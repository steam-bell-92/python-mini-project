function getCalculatorHTML() {
    return `
    <div class="project-content calculator-page">
        <h2>🧮 Calculator</h2>
        <p class="project-desc">A scientific calculator that follows the app theme and supports keyboard input.</p>

        <div class="calculator">
            <div class="calc-display" id="calcDisplay">0</div>

            <div class="calc-layout">
                <div class="calc-main-buttons">

                    <button class="calc-btn clear" data-action="clear">C</button>
                    <button class="calc-btn operator" data-action="delete">⌫</button>
                    <button class="calc-btn operator" data-action="(">(</button>
                    <button class="calc-btn operator" data-action=")">)</button>

                    <button class="calc-btn operator" data-action="sin">sin</button>
                    <button class="calc-btn operator" data-action="cos">cos</button>
                    <button class="calc-btn operator" data-action="tan">tan</button>
                    <button class="calc-btn operator" data-action="sqrt">√</button>

                    <button class="calc-btn operator" data-action="square">x²</button>
                    <button class="calc-btn operator" data-action="inv">1/x</button>
                    <button class="calc-btn operator" data-action="^">xʸ</button>
                    <button class="calc-btn operator" data-action="÷">÷</button>

                    <button class="calc-btn number" data-value="7">7</button>
                    <button class="calc-btn number" data-value="8">8</button>
                    <button class="calc-btn number" data-value="9">9</button>
                    <button class="calc-btn operator" data-action="×">×</button>

                    <button class="calc-btn number" data-value="4">4</button>
                    <button class="calc-btn number" data-value="5">5</button>
                    <button class="calc-btn number" data-value="6">6</button>
                    <button class="calc-btn operator" data-action="−">−</button>

                    <button class="calc-btn number" data-value="1">1</button>
                    <button class="calc-btn number" data-value="2">2</button>
                    <button class="calc-btn number" data-value="3">3</button>
                    <button class="calc-btn operator" data-action="+">+</button>

                    <button class="calc-btn number span-2" data-value="0">0</button>
                    <button class="calc-btn number" data-value=".">.</button>
                    <button class="calc-btn equals" data-action="=">=</button>
                </div>

                <div class="calc-side-buttons" aria-label="Extra calculator functions">
                    <button class="calc-btn operator" data-action="log">log</button>
                    <button class="calc-btn operator" data-action="ln">ln</button>
                    <button class="calc-btn operator" data-action="factorial">x!</button>
                    <button class="calc-btn operator" data-action="mod">%</button>
                </div>
            </div>
        </div>
    </div>

    <style>
        .calculator-page {
            padding-bottom: 1rem;
        }

        .calculator{
            max-width:420px;
            margin:1.5rem auto 0;
            padding:1.25rem;
            background:linear-gradient(180deg, rgba(255,255,255,0.03), transparent 35%), var(--surface);
            border:1px solid var(--border);
            border-radius:24px;
            box-shadow:var(--shadow);
            overflow:hidden;
        }

        .calc-display{
            background:linear-gradient(180deg, var(--bg), var(--surface));
            border:1px solid var(--border);
            padding:1.25rem 1rem;
            border-radius:18px;
            font-size:clamp(1.9rem, 4vw, 2.4rem);
            text-align:right;
            margin-bottom:1rem;
            min-height:84px;
            display:flex;
            align-items:center;
            justify-content:flex-end;
            word-break:break-all;
            font-variant-numeric:tabular-nums;
            letter-spacing:0.02em;
            box-shadow:inset 0 1px 0 rgba(255,255,255,0.04);
            color:var(--text);
        }

        .calc-layout{
            display:flex;
            gap:0.8rem;
            align-items:stretch;
        }

        .calc-main-buttons{
            display:grid;
            grid-template-columns:repeat(4,1fr);
            gap:0.7rem;
            flex:1;
        }

        .calc-side-buttons{
            display:grid;
            grid-template-columns:1fr;
            gap:0.7rem;
            width:92px;
        }

        .calc-btn{
            padding:1rem 0.75rem;
            font-size:1.05rem;
            border:none;
            border-radius:14px;
            cursor:pointer;
            font-weight:600;
            transition:transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease, color 0.18s ease;
            line-height:1;
        }

        .calc-btn:hover{
            transform:translateY(-1px);
        }
        .calc-btn:active{
            transform:translateY(0) scale(0.98);
        }
        .calc-btn:focus-visible{
            outline:2px solid var(--primary-color);
            outline-offset:2px;
        }

        .number{
            background:var(--bg);
            border:1px solid var(--border);
            color:var(--text-color);
        }

        .operator{
            background:var(--bg);
            border:1px solid var(--border);
            color:var(--text);
        }

        .equals{
            background:var(--success);
            border:1px solid var(--success);
            color:#fff;
        }

        .clear{
            background:var(--danger);
            border:1px solid var(--danger);
            color:#fff;
        }

        .span-2{
            grid-column:span 2;
        }

        @media (max-width: 480px){
            .calculator{
                max-width:100%;
                padding:1rem;
            }
            .calc-layout{
                flex-direction:column;
            }
            .calc-main-buttons{
                gap:0.55rem;
            }
            .calc-side-buttons{
                width:100%;
                grid-template-columns:repeat(4,1fr);
            }
            .calc-btn{
                padding:0.9rem 0.65rem;
                font-size:1rem;
            }
        }
    </style>
    `;
}

function initCalculator() {
    const display = document.getElementById("calcDisplay");
    if (!display) return;
    let expression = "";
    const operatorChars = new Set(["+", "-", "×", "÷", "^", "*", "/", "−", "%"]);

    function update() {
        display.textContent = expression || "0";
    }

    function normalize(expr) {
        return expr
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/−/g, "-");
    }

    function sanitize(expr) {
        let cleaned = expr.trim();
        while (cleaned && /[+\-×÷^−*/.%]$/.test(cleaned)) {
            cleaned = cleaned.slice(0, -1);
        }
        return cleaned;
    }

    function factorial(value) {
        if (!Number.isFinite(value) || value < 0 || Math.floor(value) !== value) {
            throw new Error("Factorial is only defined for non-negative integers");
        }
        let result = 1;
        for (let index = 2; index <= value; index += 1) {
            result *= index;
        }
        return result;
    }

    function evaluateExpression(input) {
        let index = 0;

        function peek(length = 1) {
            return input.slice(index, index + length);
        }

        function consume(length = 1) {
            index += length;
        }

        function parseNumber() {
            const match = input.slice(index).match(/^(?:\d*\.\d+|\d+\.?\d*)/);
            if (!match) throw new Error("Expected number");
            consume(match[0].length);
            return Number(match[0]);
        }

        function parsePrimary() {
            if (peek() === "(") {
                consume();
                const value = parseExpression();
                if (peek() !== ")") throw new Error("Missing closing parenthesis");
                consume();
                return value;
            }
            return parseNumber();
        }

        function parsePostfix() {
            let value = parsePrimary();
            while (peek() === "!") {
                consume();
                value = factorial(value);
            }
            return value;
        }

        function parseUnary() {
            if (peek() === "+") {
                consume();
                return parseUnary();
            }
            if (peek() === "-") {
                consume();
                return -parseUnary();
            }
            return parsePostfix();
        }

        function parsePower() {
            let value = parseUnary();
            if (peek() === "^") {
                consume();
                const exponent = parsePower();
                value = Math.pow(value, exponent);
            }
            return value;
        }

        function parseTerm() {
            let value = parsePower();
            while (index < input.length) {
                const operator = peek();
                if (operator === "*" || operator === "/" || operator === "%") {
                    consume();
                    const right = parsePower();
                    if (operator === "*") value *= right;
                    else if (operator === "/") {
                        if (right === 0) throw new Error("Cannot divide by zero");
                        value /= right;
                    } else {
                        if (right === 0) throw new Error("Cannot divide by zero");
                        value %= right;
                    }
                    continue;
                }
                break;
            }
            return value;
        }

        function parseExpression() {
            let value = parseTerm();
            while (index < input.length) {
                const operator = peek();
                if (operator === "+" || operator === "-") {
                    consume();
                    const right = parseTerm();
                    value = operator === "+" ? value + right : value - right;
                    continue;
                }
                break;
            }
            return value;
        }

        const result = parseExpression();
        if (index !== input.length || Number.isNaN(result) || !Number.isFinite(result)) {
            throw new Error("Invalid expression");
        }
        return result;
    }

    function safeEval(expr) {
        try {
            if (!expr) return "";
            const sanitized = sanitize(normalize(expr));
            if (!sanitized) return "0";
            const result = evaluateExpression(sanitized);
            if (result === undefined || isNaN(result) || !isFinite(result)) {
                return "Error";
            }
            if (Number.isInteger(result)) {
                return String(result);
            }
            const strVal = String(result);
            if (strVal.includes('.') && strVal.split('.')[1].length > 10) {
                return String(Number(result.toFixed(10)));
            }
            return strVal;
        } catch {
            return "Error";
        }
    }

    function getNumericValue() {
        const evaluated = safeEval(expression || "0");
        if (!evaluated || evaluated === "Error") return 0;
        const numericValue = Number(evaluated);
        return Number.isNaN(numericValue) ? 0 : numericValue;
    }

    function isOperator(char) {
        return operatorChars.has(char);
    }

    function getLastToken(expr) {
        return expr.split(/[+\-×÷^*/()−%]/).pop();
    }

    function clearIfError() {
        if (expression === "Error") expression = "";
    }

    function appendDigit(digit) {
        clearIfError();
        expression += digit;
        update();
    }

    function appendDecimal() {
        clearIfError();
        const lastToken = getLastToken(expression);
        if (lastToken.includes(".")) return;
        if (!expression || isOperator(expression.slice(-1)) || expression.slice(-1) === "(") {
            expression += "0.";
        } else {
            expression += ".";
        }
        update();
    }

    function appendOperator(operator) {
        clearIfError();
        if (!expression) {
            if (operator === "-" || operator === "−" || operator === "(") {
                expression = operator;
                update();
            }
            return;
        }
        const lastChar = expression.slice(-1);
        if (operator === "(") {
            expression += /[0-9)]$/.test(lastChar) ? "×(" : "(";
            update();
            return;
        }
        if (operator === ")") {
            const openCount = (expression.match(/\(/g) || []).length - (expression.match(/\)/g) || []).length;
            if (openCount <= 0 || isOperator(lastChar) || lastChar === "(") return;
            expression += ")";
            update();
            return;
        }
        if (isOperator(lastChar)) {
            expression = expression.slice(0, -1) + operator;
        } else {
            expression += operator;
        }
        update();
    }

    function applyFunction(type) {
        try {
            const value = getNumericValue();
            let result;

            // Convert degrees to radians for JS Math functions
            const radians = value * (Math.PI / 180);

            // Helper to fix JS floating point precision errors (e.g., making sin(180) exactly 0)
            const cleanFloat = (num) => (Math.abs(num) < 1e-10 ? 0 : num);

            switch (type) {
                case "sin":
                    result = cleanFloat(Math.sin(radians));
                    break;
                case "cos":
                    result = cleanFloat(Math.cos(radians));
                    break;
                case "tan":
                    // Tangent of 90, 270, etc., is undefined
                    if (value % 180 === 90 || value % 180 === -90) {
                        result = "Error";
                    } else {
                        result = cleanFloat(Math.tan(radians));
                    }
                    break;
                case "log":
                    result = value > 0 ? Math.log10(value) : "Error";
                    break;
                case "ln":
                    result = value > 0 ? Math.log(value) : "Error";
                    break;
                case "factorial":
                    result = factorial(value);
                    break;
                case "sqrt":
                    result = value < 0 ? "Error" : Math.sqrt(value);
                    break;
                case "square":
                    result = value * value;
                    break;
                case "inv":
                    result = value === 0 ? "Error" : 1 / value;
                    break;
                default:
                    result = "Error";
            }

            expression = result === "Error" || Number.isNaN(result) ? "Error" : String(result);
            update();
        } catch {
            expression = "Error";
            update();
        }
    }

 
    function clearIfFinished() {
        if (expression === "Error" || expression === "NaN" || expression === "Infinity" || expression === "-Infinity") {
            expression = "";
        }
    }

    function clearExpression() {
        expression = "";
        update();
    }

    function deleteLast() {
        clearIfError();
        if (expression) {
            expression = expression.slice(0, -1);
        }
        update();
    }

    function evaluateCurrent() {
        if (!expression || expression === "Error") return;
        try {
            const result = safeEval(expression);
            expression = result;
            update();
        } catch {
            expression = "Error";
            update();
        }
    }

    document.querySelectorAll(".calc-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            clearIfError();
            const value = btn.dataset.value;
            const action = btn.dataset.action;

            if (value !== undefined) {
                if (value === ".") appendDecimal();
                else appendDigit(value);
                return;
            }

            if (!action) return;

            switch (action) {
                case "clear":
                    clearExpression();
                    break;
                case "delete":
                    deleteLast();
                    break;
                case "=":
                    evaluateCurrent();
                    break;
                case "sin":
                case "cos":
                case "tan":
                case "log":
                case "ln":
                case "factorial":
                case "sqrt":
                case "square":
                case "inv":
                    applyFunction(action);
                    break;
                case "mod":
                    appendOperator("%");
                    break;
                case "(":
                case ")":
                case "+":
                case "-":
                case "−": // Catching both standard minus and typographic minus
                case "×":
                case "÷":
                case "^":
                case "%":
                    appendOperator(action);
                    break;
                default:
                    appendOperator(action);
            }
        });
    });

    if (window.calcKeydownHandler) {
        document.removeEventListener("keydown", window.calcKeydownHandler);
    }

    window.calcKeydownHandler = (e) => {
        if (expression === "Error") expression = "";

        if (/^\d$/.test(e.key)) {
            e.preventDefault();
            appendDigit(e.key);
            return;
        }

        if (e.key === ".") {
            e.preventDefault();
            appendDecimal();
            return;
        }

        if (["+", "-", "*", "/", "^", "(", ")", "%"].includes(e.key)) {
            e.preventDefault();
            if (e.key === "*") appendOperator("×");
            else if (e.key === "/") appendOperator("÷");
            else if (e.key === "-") appendOperator("−");
            else appendOperator(e.key);
            return;
        }

        if (e.key === "!") {
            e.preventDefault();
            applyFunction("factorial");
            return;
        }

        if (e.key === "Enter" || e.key === "=") {
            e.preventDefault();
            evaluateCurrent();
            return;
        }

        if (e.key === "Backspace") {
            e.preventDefault();
            deleteLast();
            return;
        }

        if (e.key === "Escape" || e.key.toLowerCase() === "c") {
            e.preventDefault();
            clearExpression();
        }
    };

    document.addEventListener("keydown", window.calcKeydownHandler);
    update();
}