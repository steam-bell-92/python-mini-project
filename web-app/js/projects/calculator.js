function getCalculatorHTML() {
    return `
    <div class="project-content calculator-page">
        <h2>🧮 Scientific Graphing Calculator</h2>
        <p class="project-desc">A premium scientific calculator that evaluates expressions and plots graphs.</p>

        <div class="calc-tabs">
            <button class="calc-tab active" data-tab="standard">Standard</button>
            <button class="calc-tab" data-tab="graphing">Graphing</button>
        </div>

        <div class="calculator-container">
            <!-- Standard Calculator Panel -->
            <div class="calculator-panel" id="calcPanel">
                <div class="display-container">
                    <input type="text" id="calcInput" class="expression-input" placeholder="0" autocomplete="off" spellcheck="false" />
                    <div id="calcResult" class="result-display">0</div>
                </div>

                <div class="keypad-grid">
                    <!-- Row 1: Sci Funcs -->
                    <button class="calc-btn sci" data-insert="sin()">sin</button>
                    <button class="calc-btn sci" data-insert="cos()">cos</button>
                    <button class="calc-btn sci" data-insert="tan()">tan</button>
                    <button class="calc-btn sci" data-insert="log()">log</button>
                    <button class="calc-btn sci" data-insert="ln()">ln</button>
                    
                    <!-- Row 2: Sci Funcs -->
                    <button class="calc-btn sci" data-insert="sqrt()">√</button>
                    <button class="calc-btn sci" data-insert="^">xʸ</button>
                    <button class="calc-btn sci" data-insert="π">π</button>
                    <button class="calc-btn sci" data-insert="e">e</button>
                    <button class="calc-btn sci" data-insert="abs()">|x|</button>

                    <!-- Row 3: Nums & Basic -->
                    <button class="calc-btn func" data-action="clear">C</button>
                    <button class="calc-btn func double-span" data-insert="()">(&nbsp;)</button>
                    <button class="calc-btn func" data-action="delete">⌫</button>
                    <button class="calc-btn op" data-insert="/">÷</button>

                    <!-- Row 4 -->
                    <button class="calc-btn num" data-insert="7">7</button>
                    <button class="calc-btn num" data-insert="8">8</button>
                    <button class="calc-btn num" data-insert="9">9</button>
                    <button class="calc-btn op" data-insert="%">%</button>
                    <button class="calc-btn op" data-insert="*">×</button>

                    <!-- Row 5 -->
                    <button class="calc-btn num" data-insert="4">4</button>
                    <button class="calc-btn num" data-insert="5">5</button>
                    <button class="calc-btn num" data-insert="6">6</button>
                    <button class="calc-btn num empty" disabled></button>
                    <button class="calc-btn op" data-insert="-">−</button>

                    <!-- Row 6 -->
                    <button class="calc-btn num" data-insert="1">1</button>
                    <button class="calc-btn num" data-insert="2">2</button>
                    <button class="calc-btn num" data-insert="3">3</button>
                    <button class="calc-btn num empty" disabled></button>
                    <button class="calc-btn op" data-insert="+">+</button>

                    <!-- Row 7 -->
                    <button class="calc-btn num zero" data-insert="0">0</button>
                    <button class="calc-btn num" data-insert=".">.</button>
                    <button class="calc-btn equals" data-action="evaluate">=</button>
                </div>
            </div>

            <!-- Graphing Panel -->
            <div class="calculator-panel" id="graphPanel" style="display: none;">
                <div class="graph-header">
                    <span class="fx-label">f(x) =</span>
                    <input type="text" id="graphInput" class="expression-input graph-input" placeholder="e.g. sin(x) + x^2" autocomplete="off" spellcheck="false" />
                    <button class="calc-btn equals plot-btn" id="plotBtn">Plot</button>
                </div>
                <div class="canvas-wrapper">
                    <canvas id="graphCanvas" width="400" height="300"></canvas>
                </div>
            </div>
        </div>
    </div>

    <style>
        .calculator-page {
            padding-bottom: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .calc-tabs {
            display: flex;
            gap: 1rem;
            margin: 1.5rem 0;
            background: rgba(255, 255, 255, 0.05);
            padding: 0.5rem;
            border-radius: 30px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .calc-tab {
            background: transparent;
            color: var(--text-secondary);
            border: none;
            padding: 0.6rem 2rem;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .calc-tab:hover {
            color: var(--text);
        }

        .calc-tab.active {
            background: var(--primary-color);
            color: white;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);
        }

        .calculator-container {
            width: 100%;
            max-width: 480px;
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 32px;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.05);
            padding: 1.5rem;
            position: relative;
            overflow: hidden;
        }

        /* Glassmorphism reflection */
        .calculator-container::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        }

        .display-container {
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
            text-align: right;
        }

        .expression-input {
            width: 100%;
            background: transparent;
            border: none;
            color: var(--text);
            font-size: 2rem;
            text-align: right;
            font-family: 'JetBrains Mono', monospace;
            outline: none;
            margin-bottom: 0.5rem;
            transition: color 0.2s ease;
        }
        
        .final-answer {
            color: var(--primary-color) !important;
        }
        
        .expression-input::placeholder {
            color: rgba(255, 255, 255, 0.2);
        }

        .result-display {
            color: var(--primary-color);
            font-size: 1.5rem;
            font-weight: 600;
            font-family: 'JetBrains Mono', monospace;
            opacity: 0.9;
            min-height: 2rem;
            transition: opacity 0.2s ease;
        }
        
        .keypad-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 0.5rem;
        }

        .calc-btn.double-span {
            grid-column: span 2;
        }

        .calc-btn {
            border: none;
            border-radius: 12px;
            font-size: 1.1rem;
            font-weight: 600;
            padding: 0.7rem 0;
            cursor: pointer;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .calc-btn:hover:not(:disabled) {
            transform: translateY(-2px);
            filter: brightness(1.2);
        }

        .calc-btn:active:not(:disabled) {
            transform: translateY(1px);
        }

        .calc-btn.sci {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-secondary);
            font-size: 1rem;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .calc-btn.num {
            background: rgba(255, 255, 255, 0.1);
            color: var(--text);
            font-size: 1.4rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .calc-btn.num.zero {
            grid-column: span 2;
            border-radius: 16px;
        }

        .calc-btn.op {
            background: rgba(99, 102, 241, 0.15);
            color: #818cf8;
            font-size: 1.5rem;
            border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .calc-btn.func {
            background: rgba(239, 68, 68, 0.15);
            color: #f87171;
            border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .calc-btn.equals {
            grid-column: span 2;
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            font-size: 1.5rem;
            box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3);
        }
        
        .calc-btn.empty {
            background: transparent;
            box-shadow: none;
            border: none;
            cursor: default;
        }

        /* Graphing Specifics */
        .graph-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
            background: rgba(0, 0, 0, 0.2);
            padding: 1rem;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .fx-label {
            color: var(--primary-color);
            font-weight: bold;
            font-size: 1.2rem;
            font-family: 'JetBrains Mono', monospace;
        }

        .graph-input {
            text-align: left;
            font-size: 1.2rem;
            margin: 0;
            flex: 1;
        }

        .plot-btn {
            grid-column: auto;
            padding: 0.8rem 1.5rem;
            border-radius: 14px;
            font-size: 1.1rem;
        }

        .canvas-wrapper {
            background: white;
            border-radius: 20px;
            padding: 10px;
            box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.2);
            position: relative;
        }

        #graphCanvas {
            width: 100%;
            height: auto;
            border-radius: 10px;
            display: block;
        }

        @media (max-width: 480px) {
            .calculator-container { padding: 1rem; border-radius: 24px; }
            .keypad-grid { gap: 0.5rem; }
            .calc-btn { padding: 0.8rem 0; font-size: 1.1rem; }
            .expression-input { font-size: 1.5rem; }
        }
    </style>
    `;
}

function initCalculator() {
    const calcInput = document.getElementById("calcInput");
    const calcResult = document.getElementById("calcResult");
    const graphInput = document.getElementById("graphInput");
    let isGraphMode = false;

    // Tabs
    const tabs = document.querySelectorAll(".calc-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            if (tab.dataset.tab === "graphing") {
                document.getElementById("calcPanel").style.display = "none";
                document.getElementById("graphPanel").style.display = "block";
                isGraphMode = true;
                drawGraph();
            } else {
                document.getElementById("graphPanel").style.display = "none";
                document.getElementById("calcPanel").style.display = "block";
                isGraphMode = false;
                calcInput.focus();
            }
        });
    });

    // Unified Math Compiler
    function compileMathFunction(expr, isGraphing) {
        let sanitized = expr.toLowerCase();

        // Function names are protected as opaque placeholders BEFORE any
        // implicit-multiplication or constant substitution runs. Without
        // this, the single-letter matchers for the constants "e" and "x"
        // would tokenize *inside* a function name -- e.g. "exp(" would get
        // split into "e" + "xp(" and mangled into "Math.E*xp(", which is
        // exactly why exp(1) used to fail. Placeholders use a control
        // character + uppercase letter so they can never collide with a
        // digit, "x", "e", "pi"/"π", or a real parenthesis.
        const FUNCS = ['sin', 'cos', 'tan', 'sqrt', 'log', 'ln', 'abs', 'exp'];
        const FUNC_REPLACEMENTS = [
            'Math.sin(', 'Math.cos(', 'Math.tan(', 'Math.sqrt(',
            'Math.log10(', 'Math.log(', 'Math.abs(', 'Math.exp('
        ];
        const FUNC_TAGS = ['S', 'C', 'T', 'Q', 'G', 'N', 'A', 'X'];
        const placeholder = (i) => `\u0001${FUNC_TAGS[i]}`;

        FUNCS.forEach((name, i) => {
            sanitized = sanitized.split(name + '(').join(placeholder(i) + '(');
        });

        // Implicit multiplication (e.g., 3pi -> 3*pi, 3sin -> 3*sin, (x)(y) -> (x)*(y))
        // Function placeholders are matched as a single unit (control char +
        // uppercase letter) so they're never split apart like the old
        // literal "sin|cos|...|exp" alternatives could be.
        const FUNC_MARKER = '\\u0001[A-Z]';
        sanitized = sanitized.replace(new RegExp(`(\\d)(pi|\u03c0|e|x|${FUNC_MARKER}|\\()`, 'g'), '$1*$2');
        sanitized = sanitized.replace(new RegExp(`(\\))(pi|\u03c0|e|x|${FUNC_MARKER}|\\(|\\d)`, 'g'), '$1*$2');
        sanitized = sanitized.replace(new RegExp(`(x|pi|\u03c0|e)(\\d|${FUNC_MARKER}|\\(|x|pi|\u03c0|e)`, 'g'), '$1*$2');

        // Fix JS SyntaxError for unary minus and bind minus to numbers for exponentiation (e.g. -1^2 becomes (-1)^2 = 1)
        sanitized = sanitized.replace(/(^|[\(\+\-\*\/\%\^])\s*-([\d\.]+|x|pi|π|e)/g, '$1(-$2)');
        sanitized = sanitized.replace(/(^|[\(\+\-\*\/\%\^])\s*-([\d\.]+|x|pi|π|e)/g, '$1(-$2)');
        
        // Handle remaining unary minuses before functions (e.g. -sin(x) becomes (-1)*sin(x))
        sanitized = sanitized.replace(/(^|[\(\+\-\*\/\%\^])\s*-(?![\d\.]|x|pi|π|e)/g, '$1(-1)*');
        sanitized = sanitized.replace(/(^|[\(\+\-\*\/\%\^])\s*-(?![\d\.]|x|pi|π|e)/g, '$1(-1)*');

        // Constants -- these now only ever match a standalone "e" or "pi"/"π",
        // since every function name is already an opaque placeholder.
        sanitized = sanitized.replace(/pi/g, 'Math.PI');
        sanitized = sanitized.replace(/π/g, 'Math.PI');
        sanitized = sanitized.replace(/e/g, 'Math.E');

        // Restore function placeholders to their real Math.* calls.
        FUNCS.forEach((name, i) => {
            sanitized = sanitized.split(placeholder(i) + '(').join(FUNC_REPLACEMENTS[i]);
        });

        // Power operator
        sanitized = sanitized.replace(/\^/g, '**');

        // Balance parentheses to allow things like "sin(pi/4" to work instantly
        let openParens = (sanitized.match(/\(/g) || []).length;
        let closeParens = (sanitized.match(/\)/g) || []).length;
        while (openParens > closeParens) {
            sanitized += ')';
            closeParens++;
        }

        // Security check
        const allowed = isGraphing ? /[x\d\.\+\-\*\/\(\)\s%π]/g : /[\d\.\+\-\*\/\(\)\s%π]/g;
        const checkStr = sanitized.replace(/Math\.[a-zA-Z0-9]+/ig, '').replace(allowed, '');
        if (checkStr.trim() !== '') {
            throw new Error("Invalid characters in expression");
        }

        // Block dangerous keyword access as an additional layer.
        // These cannot appear in valid math expressions and would indicate
        // an attempt to escape the sandbox via property access.
        const DANGEROUS_PATTERNS = [
            'constructor', 'prototype', '__proto__', '__defineGetter__',
            '__defineSetter__', 'eval', 'window', 'document', 'globalThis',
            'frames', 'external', 'crypto', 'navigator', 'location',
        ];
        const lowerExpr = sanitized.toLowerCase();
        for (const pattern of DANGEROUS_PATTERNS) {
            if (lowerExpr.includes(pattern)) {
                throw new Error("Invalid characters in expression");
            }
        }

        const args = isGraphing ? 'x' : '';
        return new Function(args, '"use strict"; return ' + sanitized);
    }

    // --- Standard Calculator Logic ---
    function evaluateStandard(commit = false) {
        const expr = calcInput.value;
        if (!expr.trim()) {
            calcResult.textContent = "0";
            return;
        }
        try {
            const fn = compileMathFunction(expr, false);
            const result = fn();

            if (result === undefined || isNaN(result) || !isFinite(result)) {
                // Ignore silent errors during live typing
            } else {
                // Fix floating point quirks (like sin(pi) returning 1.22e-16)
                let finalResult = result;
                if (Math.abs(result) < 1e-13) {
                    finalResult = 0;
                }
                const cleanResult = parseFloat(finalResult.toPrecision(12));

                if (commit && expr.trim() !== cleanResult.toString()) {
                    calcInput.value = cleanResult;
                    calcInput.classList.add('final-answer');
                    calcResult.textContent = "";
                } else {
                    if (expr.trim() === cleanResult.toString()) {
                        calcResult.textContent = "";
                        calcInput.classList.add('final-answer');
                    } else {
                        calcResult.textContent = cleanResult;
                        calcInput.classList.remove('final-answer');
                    }
                }
            }
        } catch (e) {
            // Ignore syntax errors during live typing
        }
    }

    // Live evaluation on typing
    calcInput.oninput = () => {
        calcInput.classList.remove('final-answer');
        evaluateStandard(false);
    };

    document.querySelectorAll(".calc-btn").forEach(btn => {
        if (btn.id === "plotBtn") return; // Handled below

        btn.onclick = () => {
            const insertChar = btn.dataset.insert;
            const action = btn.dataset.action;

            if (insertChar) {
                const start = calcInput.selectionStart;
                const end = calcInput.selectionEnd;
                const val = calcInput.value;
                calcInput.value = val.substring(0, start) + insertChar + val.substring(end);

                if (insertChar.endsWith("()")) {
                    calcInput.setSelectionRange(start + insertChar.length - 1, start + insertChar.length - 1);
                } else {
                    calcInput.setSelectionRange(start + insertChar.length, start + insertChar.length);
                }

                calcInput.focus();
                calcInput.classList.remove('final-answer');
                evaluateStandard(false); // Live evaluate after insert
            } else if (action === "clear") {
                calcInput.value = "";
                calcResult.textContent = "0";
                calcInput.classList.remove('final-answer');
                calcInput.focus();
            } else if (action === "delete") {
                const start = calcInput.selectionStart;
                const end = calcInput.selectionEnd;
                if (start === end && start > 0) {
                    const val = calcInput.value;
                    calcInput.value = val.substring(0, start - 1) + val.substring(end);
                    calcInput.setSelectionRange(start - 1, start - 1);
                } else if (start !== end) {
                    const val = calcInput.value;
                    calcInput.value = val.substring(0, start) + val.substring(end);
                    calcInput.setSelectionRange(start, start);
                }
                calcInput.focus();
                calcInput.classList.remove('final-answer');
                evaluateStandard(false); // Live evaluate after delete
            } else if (action === "evaluate") {
                evaluateStandard(true);
            }
        };
    });

    calcInput.onkeydown = (e) => {
        if (e.key === "Enter") evaluateStandard(true);
    };

    // --- Graphing Logic ---
    document.getElementById("plotBtn").onclick = drawGraph;
    graphInput.onkeydown = (e) => {
        if (e.key === "Enter") drawGraph();
    };

    function drawGraph() {
        const canvas = document.getElementById('graphCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        // Grid setup
        const xMin = -10;
        const xMax = 10;
        const yMin = -10;
        const yMax = 10;

        const scaleX = width / (xMax - xMin);
        const scaleY = height / (yMax - yMin);
        const offsetX = width / 2;
        const offsetY = height / 2;

        // Draw grid
        ctx.strokeStyle = '#e5e7eb';
        ctx.lineWidth = 1;
        for (let i = xMin; i <= xMax; i++) {
            const x = offsetX + i * scaleX;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        for (let i = yMin; i <= yMax; i++) {
            const y = offsetY - i * scaleY;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        // Draw axes
        ctx.strokeStyle = '#9ca3af';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, offsetY);
        ctx.lineTo(width, offsetY);
        ctx.moveTo(offsetX, 0);
        ctx.lineTo(offsetX, height);
        ctx.stroke();

        const input = graphInput.value;
        if (!input) return;

        let fn;
        try {
            fn = compileMathFunction(input, true);
            fn(1); // Test execution
        } catch (e) {
            ctx.fillStyle = 'red';
            ctx.font = '16px "JetBrains Mono", monospace';
            ctx.fillText("Invalid Expression", 10, 25);
            return;
        }

        ctx.beginPath();
        ctx.strokeStyle = '#6366f1'; // Premium primary color
        ctx.lineWidth = 2.5;

        let first = true;
        for (let px = 0; px <= width; px += 2) {
            const x = (px - offsetX) / scaleX;
            let y;
            try {
                y = fn(x);
            } catch { continue; }

            if (isNaN(y) || !isFinite(y)) {
                first = true;
                continue;
            }

            const py = offsetY - y * scaleY;

            // Do not draw huge vertical lines on asymptotes (e.g. 1/x)
            if (py < -height || py > height * 2) {
                first = true;
                continue;
            }

            if (first) {
                ctx.moveTo(px, py);
                first = false;
            } else {
                ctx.lineTo(px, py);
            }
        }
        ctx.stroke();
    }

    // Auto focus standard input
    setTimeout(() => calcInput.focus(), 100);
}