function getCompleteCalculusEngineHTML() {
    return `
        <div class="project-content">
            <h2>∫ Complete Calculus Engine</h2>
            <div class="derivative-container">
                <p class="derivative-help">Enter a polynomial equation (e.g. <strong>3x^2 - x^-1 + 7</strong>).</p>

                <div class="control-group">
                    <label for="calculusCoeffs">Polynomial Equation</label>
                    <input id="calculusCoeffs" type="text" placeholder="e.g. 3x^2 - x^-1 + 7">
                </div>

                <div class="calculus-tabs">
                    <button class="calc-tab-btn active" id="derivativeTabBtn">Derivative</button>
                    <button class="calc-tab-btn" id="integrationTabBtn">Integration</button>
                </div>

                <div id="derivativeTabContent" class="calc-tab-content active">
                    <div class="derivative-grid">
                        <div class="control-group">
                            <label for="derivativeOrder">Derivative Order (n)</label>
                            <input id="derivativeOrder" type="number" min="1" value="1">
                        </div>
                        <div class="control-group">
                            <label for="derivativeX">Evaluate At x</label>
                            <input id="derivativeX" type="number" step="any" value="1">
                        </div>
                    </div>
                    <div class="derivative-actions">
                        <button class="btn-primary" id="calcFirstDerivativeBtn">1st Derivative</button>
                        <button class="btn-primary" id="calcNthDerivativeBtn">Nth Derivative</button>
                        <button class="btn-primary" id="evalDerivativeBtn">Evaluate Derivative</button>
                    </div>
                </div>

                <div id="integrationTabContent" class="calc-tab-content">
                    <div class="derivative-grid">
                        <div class="control-group">
                            <label for="integralLower">Integration Lower Bound</label>
                            <input id="integralLower" type="number" step="any" value="0">
                        </div>
                        <div class="control-group">
                            <label for="integralUpper">Integration Upper Bound</label>
                            <input id="integralUpper" type="number" step="any" value="1">
                        </div>
                    </div>
                    <div class="derivative-actions">
                        <button class="btn-primary" id="calcIndefiniteIntegralBtn">Indefinite Integral</button>
                        <button class="btn-primary" id="calcDefiniteIntegralBtn">Definite Integral</button>
                    </div>
                </div>

                <div class="derivative-output" id="calculusOutput">Waiting for input...</div>

                <div style="margin-top: 1.5rem;">
                    <canvas id="calculusCanvas" width="600" height="400" style="max-width: 100%; border: 1px solid var(--border-color); border-radius: 12px; background: var(--surface-color);"></canvas>
                </div>
            </div>
        </div>

        <style>
            .calculus-tabs {
                display: flex;
                justify-content: center;
                gap: 1rem;
                margin-top: 1.5rem;
                margin-bottom: 1.5rem;
            }
            .calc-tab-btn {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                color: var(--text-secondary);
                padding: 0.6rem 1.5rem;
                border-radius: 8px;
                cursor: pointer;
                font-size: 1.05rem;
                font-weight: 600;
                transition: all 0.3s ease;
            }
            .calc-tab-btn.active {
                background: rgba(34, 197, 94, 0.1);
                border-color: #22c55e;
                color: #22c55e;
            }
            .calc-tab-content {
                display: none;
            }
            .calc-tab-content.active {
                display: block;
            }
            .derivative-container {
                text-align: center;
                padding: 1.5rem;
                max-width: 800px;
                margin: 0 auto;
            }

            .derivative-help {
                color: var(--text-secondary);
                margin-bottom: 1rem;
                line-height: 1.6;
            }

            .control-group {
                display: flex;
                flex-direction: column;
                gap: 0.45rem;
                text-align: left;
            }

            .control-group label {
                font-weight: 600;
                color: var(--text-secondary);
            }

            .control-group input {
                padding: 0.7rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--surface-color);
                color: var(--text-primary);
                font-size: 1rem;
                width: 100%;
            }

            .derivative-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
                gap: 1rem;
                margin: 1rem 0;
            }

            .derivative-actions {
                display: flex;
                gap: 0.8rem;
                justify-content: center;
                margin: 1rem 0;
                flex-wrap: wrap;
            }

            .derivative-output {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 1rem;
                text-align: left;
                white-space: pre-line;
                min-height: 110px;
                line-height: 1.7;
            }
        </style>
    `;
}

function initCompleteCalculusEngine() {
    const derivTabBtn = document.getElementById('derivativeTabBtn');
    const integTabBtn = document.getElementById('integrationTabBtn');
    const derivContent = document.getElementById('derivativeTabContent');
    const integContent = document.getElementById('integrationTabContent');

    if (derivTabBtn && integTabBtn) {
        derivTabBtn.addEventListener('click', () => {
            derivTabBtn.classList.add('active');
            integTabBtn.classList.remove('active');
            derivContent.classList.add('active');
            integContent.classList.remove('active');
        });

        integTabBtn.addEventListener('click', () => {
            integTabBtn.classList.add('active');
            derivTabBtn.classList.remove('active');
            integContent.classList.add('active');
            derivContent.classList.remove('active');
        });
    }

    const coeffInput = document.getElementById('calculusCoeffs');
    const orderInput = document.getElementById('derivativeOrder');
    const xInput = document.getElementById('derivativeX');
    const lowerInput = document.getElementById('integralLower');
    const upperInput = document.getElementById('integralUpper');

    const firstBtn = document.getElementById('calcFirstDerivativeBtn');
    const nthBtn = document.getElementById('calcNthDerivativeBtn');
    const evalBtn = document.getElementById('evalDerivativeBtn');
    const indefBtn = document.getElementById('calcIndefiniteIntegralBtn');
    const defBtn = document.getElementById('calcDefiniteIntegralBtn');

    const output = document.getElementById('calculusOutput');

    function formatNumber(value) {
        if (Math.abs(value - Math.round(value)) < 1e-9) {
            return String(Math.round(value));
        }
        return Number(value.toFixed(6)).toString();
    }

    function parseCoefficients(raw) {
        const cleanStr = raw.replace(/\s+/g, ''); 
        if (!cleanStr) return { error: 'Please enter a valid polynomial.' };

        const termRegex = /([+-]?\d*\.?\d*\*?x(?:\^[+-]?\d+)?|[+-]?\d+\.?\d*)/g;
        const terms = cleanStr.match(termRegex);
        
        if (!terms) return { error: 'Could not parse the equation.' };

        const termMap = {};
        for (let term of terms) {
            if (!term || term === '+' || term === '-') continue;
            
            let coeff = 1;
            let power = 0;

            if (term.includes('x')) {
                const parts = term.split('x');
                let coeffStr = parts[0].replace('*', '');
                
                if (coeffStr === '+' || coeffStr === '') coeff = 1;
                else if (coeffStr === '-') coeff = -1;
                else coeff = Number(coeffStr);

                if (parts[1] && parts[1].startsWith('^')) {
                    power = Number(parts[1].substring(1));
                } else {
                    power = 1;
                }
            } else {
                coeff = Number(term);
                power = 0;
            }

            if (!Number.isFinite(coeff) || !Number.isFinite(power)) {
                return { error: `Invalid term found: ${term}` };
            }

            termMap[power] = (termMap[power] || 0) + coeff;
        }

        const coeffs = [];
        const sortedPowers = Object.keys(termMap).map(Number).sort((a, b) => b - a);
        for (let p of sortedPowers) {
            if (Math.abs(termMap[p]) > 1e-12) {
                coeffs.push({ coeff: termMap[p], power: p, isLn: false });
            }
        }

        if (coeffs.length === 0) {
            coeffs.push({ coeff: 0, power: 0, isLn: false });
        }
        return { coeffs };
    }

    function derivativeCoeffs(coeffs) {
        const degree = coeffs.length - 1;
        if (degree <= 0) {
            return [0];
        }

        const out = [];
        for (let i = 0; i < coeffs.length - 1; i++) {
            const power = degree - i;
            out.push(coeffs[i] * power);
        }
        return out;
    }

    function derivativeCoeffs(coeffs) {
        const out = [];
        for (const t of coeffs) {
            if (t.power !== 0) {
                out.push({ coeff: t.coeff * t.power, power: t.power - 1, isLn: false });
            }
        }
        if (out.length === 0) out.push({ coeff: 0, power: 0, isLn: false });
        return out;
    }

    function nthDerivativeCoeffs(coeffs, n) {
        let result = coeffs.slice();
        for (let i = 0; i < n; i++) {
            result = derivativeCoeffs(result);
        }
        return result;
    }

    function integralCoeffs(coeffs) {
        const out = [];
        for (const t of coeffs) {
            if (t.power === -1) {
                out.push({ coeff: t.coeff, power: 0, isLn: true });
            } else {
                out.push({ coeff: t.coeff / (t.power + 1), power: t.power + 1, isLn: false });
            }
        }
        if (out.length === 0) out.push({ coeff: 0, power: 0, isLn: false });
        out.sort((a, b) => {
            if (a.isLn && !b.isLn) return 1;
            if (!a.isLn && b.isLn) return -1;
            return b.power - a.power;
        });
        return out;
    }

    function evaluate(coeffs, x) {
        let value = 0;
        for (const t of coeffs) {
            if (t.isLn) {
                if (x === 0) throw new Error("Cannot evaluate ln|0|");
                value += t.coeff * Math.log(Math.abs(x));
            } else {
                if (x === 0 && t.power < 0) throw new Error("Division by zero in negative exponent");
                value += t.coeff * Math.pow(x, t.power);
            }
        }
        return value;
    }

    function polynomialToString(coeffs, isIntegral = false) {
        if (!coeffs || coeffs.length === 0) return isIntegral ? 'C' : '0';

        let parts = [];
        for (let i = 0; i < coeffs.length; i++) {
            const t = coeffs[i];
            if (Math.abs(t.coeff) < 1e-12) continue;

            const sign = t.coeff >= 0 ? '+' : '-';
            const absCoeff = Math.abs(t.coeff);
            const cStr = formatNumber(absCoeff);
            let body = '';

            if (t.isLn) {
                body = Math.abs(absCoeff - 1) < 1e-12 ? 'ln|x|' : `${cStr}ln|x|`;
            } else {
                if (t.power === 0) {
                    body = cStr;
                } else if (t.power === 1) {
                    body = Math.abs(absCoeff - 1) < 1e-12 ? 'x' : `${cStr}x`;
                } else {
                    body = Math.abs(absCoeff - 1) < 1e-12 ? `x^${t.power}` : `${cStr}x^${t.power}`;
                }
            }

            if (parts.length === 0) {
                parts.push(sign === '+' ? body : `-${body}`);
            } else {
                parts.push(`${sign} ${body}`);
            }
        }

        let res = parts.join(' ');
        if (!res) res = '0';
        if (isIntegral) {
            if (res === '0') res = 'C';
            else res += ' + C';
        }
        return res;
    }

    function drawGraph(coeffs1, coeffs2, label1, label2) {
        const canvas = document.getElementById('calculusCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        ctx.clearRect(0, 0, width, height);

        const xMin = -10;
        const xMax = 10;
        
        let points1 = [];
        let points2 = [];
        let minY = Infinity;
        let maxY = -Infinity;
        
        for (let px = 0; px <= width; px += 2) {
            const x = xMin + (px / width) * (xMax - xMin);
            
            let y1 = null;
            try { y1 = evaluate(coeffs1, x); } catch (e) {}
            if (y1 !== null && isFinite(y1)) {
                points1.push({x: px, y: y1});
                if (y1 < minY) minY = y1;
                if (y1 > maxY) maxY = y1;
            }
            
            if (coeffs2) {
                let y2 = null;
                try { y2 = evaluate(coeffs2, x); } catch (e) {}
                if (y2 !== null && isFinite(y2)) {
                    points2.push({x: px, y: y2});
                    if (y2 < minY) minY = y2;
                    if (y2 > maxY) maxY = y2;
                }
            }
        }
        
        let yRange = maxY - minY;
        if (yRange === 0 || !isFinite(yRange)) {
            yRange = 10;
            if (!isFinite(minY)) minY = -5;
            if (!isFinite(maxY)) maxY = 5;
        }
        const yMinScale = minY - yRange * 0.1;
        const yMaxScale = maxY + yRange * 0.1;
        
        function mapY(y) {
            return height - ((y - yMinScale) / (yMaxScale - yMinScale)) * height;
        }
        
        // Grid & axes
        ctx.strokeStyle = 'rgba(150, 150, 150, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        const y0 = mapY(0);
        if (y0 >= 0 && y0 <= height) {
            ctx.moveTo(0, y0);
            ctx.lineTo(width, y0);
        }
        const x0 = width / 2;
        ctx.moveTo(x0, 0);
        ctx.lineTo(x0, height);
        ctx.stroke();

        // Draw f(x)
        ctx.strokeStyle = '#4caf50'; // Green for original
        ctx.lineWidth = 2;
        ctx.beginPath();
        points1.forEach((p, i) => {
            const py = mapY(p.y);
            if (i === 0) {
                ctx.moveTo(p.x, py);
            } else {
                const prev = points1[i-1];
                if (Math.abs(p.y - prev.y) > yRange * 0.5 && Math.abs(p.x - prev.x) < 10) {
                    ctx.moveTo(p.x, py);
                } else {
                    ctx.lineTo(p.x, py);
                }
            }
        });
        ctx.stroke();

        // Draw derivative/integral
        if (coeffs2) {
            ctx.strokeStyle = '#2196f3'; // Blue for derived/integral
            ctx.lineWidth = 2;
            ctx.beginPath();
            points2.forEach((p, i) => {
                const py = mapY(p.y);
                if (i === 0) {
                    ctx.moveTo(p.x, py);
                } else {
                    const prev = points2[i-1];
                    if (Math.abs(p.y - prev.y) > yRange * 0.5 && Math.abs(p.x - prev.x) < 10) {
                        ctx.moveTo(p.x, py);
                    } else {
                        ctx.lineTo(p.x, py);
                    }
                }
            });
            ctx.stroke();
        }
        
        // Legend
        ctx.font = '14px sans-serif';
        ctx.fillStyle = '#4caf50';
        ctx.fillText("Original f(x)", 10, 20);
        if (coeffs2) {
            ctx.fillStyle = '#2196f3';
            ctx.fillText(label2, 10, 40);
        }
    }

    function getInputs() {
        const parsed = parseCoefficients(coeffInput.value);
        if (parsed.error) {
            output.textContent = `❌ ${parsed.error}`;
            return null;
        }
        return parsed.coeffs;
    }

    firstBtn.addEventListener('click', () => {
        const coeffs = getInputs();
        if (!coeffs) return;
        const first = derivativeCoeffs(coeffs);
        output.textContent = `f(x) = ${polynomialToString(coeffs)}\n\nf'(x) = ${polynomialToString(first)}`;
        drawGraph(coeffs, first, 'f(x)', "f'(x)");
    });

    nthBtn.addEventListener('click', () => {
        const coeffs = getInputs();
        if (!coeffs) return;
        const order = Math.max(1, parseInt(orderInput.value, 10) || 1);
        const nth = nthDerivativeCoeffs(coeffs, order);
        output.textContent = `f(x) = ${polynomialToString(coeffs)}\n\n${order}th derivative = ${polynomialToString(nth)}`;
        drawGraph(coeffs, nth, 'f(x)', `${order}th Derivative`);
    });

    evalBtn.addEventListener('click', () => {
        const coeffs = getInputs();
        if (!coeffs) return;
        const order = Math.max(1, parseInt(orderInput.value, 10) || 1);
        const x = Number(xInput.value);
        if (!Number.isFinite(x)) {
            output.textContent = '❌ Please enter a valid x value.';
            return;
        }
        const nth = nthDerivativeCoeffs(coeffs, order);
        try {
            const value = evaluate(nth, x);
            output.textContent = `f(x) = ${polynomialToString(coeffs)}\n\nDerivative used: ${polynomialToString(nth)}\nValue at x = ${formatNumber(x)} is ${formatNumber(value)}`;
        } catch (e) {
            output.textContent = `f(x) = ${polynomialToString(coeffs)}\n\nDerivative used: ${polynomialToString(nth)}\n❌ Error: ${e.message}`;
        }
        drawGraph(coeffs, nth, 'f(x)', `${order}th Derivative`);
    });

    indefBtn.addEventListener('click', () => {
        const coeffs = getInputs();
        if (!coeffs) return;
        const integral = integralCoeffs(coeffs);
        output.textContent = `f(x) = ${polynomialToString(coeffs)}\n\n∫ f(x) dx = ${polynomialToString(integral, true)}`;
        drawGraph(coeffs, integral, 'f(x)', '∫ f(x) dx');
    });

    defBtn.addEventListener('click', () => {
        const coeffs = getInputs();
        if (!coeffs) return;
        const lower = Number(lowerInput.value);
        const upper = Number(upperInput.value);
        if (!Number.isFinite(lower) || !Number.isFinite(upper)) {
            output.textContent = '❌ Please enter valid numerical integration bounds.';
            return;
        }
        const integral = integralCoeffs(coeffs);
        try {
            const valUpper = evaluate(integral, upper);
            const valLower = evaluate(integral, lower);
            const result = valUpper - valLower;
            output.textContent = `f(x) = ${polynomialToString(coeffs)}\n\nIntegral used: ${polynomialToString(integral)}\nDefinite integral from ${lower} to ${upper} = ${formatNumber(result)}`;
        } catch (e) {
            output.textContent = `f(x) = ${polynomialToString(coeffs)}\n\nIntegral used: ${polynomialToString(integral)}\n❌ Error: ${e.message}`;
        }
        drawGraph(coeffs, integral, 'f(x)', '∫ f(x) dx');
    });
}
