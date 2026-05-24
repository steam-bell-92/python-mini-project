function getDerivativeCalculatorHTML() {
    return `
        <div class="project-content">
            <h2>∂ Polynomial Derivative Calculator</h2>
            <div class="derivative-container">
                <p class="derivative-help">Enter coefficients from highest power to constant. Example: <strong>3,0,-2,7</strong> for 3x^3 - 2x + 7.</p>

                <div class="control-group">
                    <label for="derivativeCoeffs">Coefficients</label>
                    <input id="derivativeCoeffs" type="text" placeholder="e.g. 3,0,-2,7">
                </div>

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
                    <button class="btn-primary" id="evalDerivativeBtn">Evaluate</button>
                </div>

                <div class="derivative-output" id="derivativeOutput">Waiting for input...</div>
            </div>
        </div>

        <style>
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

            .derivative-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
                gap: 1rem;
                margin-top: 1rem;
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

function initDerivativeCalculator() {
    const coeffInput = document.getElementById('derivativeCoeffs');
    const orderInput = document.getElementById('derivativeOrder');
    const xInput = document.getElementById('derivativeX');

    const firstBtn = document.getElementById('calcFirstDerivativeBtn');
    const nthBtn = document.getElementById('calcNthDerivativeBtn');
    const evalBtn = document.getElementById('evalDerivativeBtn');

    const output = document.getElementById('derivativeOutput');

    function formatNumber(value) {
        if (Math.abs(value - Math.round(value)) < 1e-9) {
            return String(Math.round(value));
        }
        return Number(value.toFixed(6)).toString();
    }

    function parseCoefficients(raw) {
        const parts = raw
            .split(',')
            .map((item) => item.trim())
            .filter((item) => item.length > 0);

        if (parts.length === 0) {
            return { error: 'Please enter at least one coefficient.' };
        }

        const coeffs = [];
        for (const part of parts) {
            const value = Number(part);
            if (!Number.isFinite(value)) {
                return { error: `Invalid coefficient: ${part}` };
            }
            coeffs.push(value);
        }

        while (coeffs.length > 1 && Math.abs(coeffs[0]) < 1e-12) {
            coeffs.shift();
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

    function nthDerivativeCoeffs(coeffs, n) {
        let result = coeffs.slice();
        for (let i = 0; i < n; i++) {
            result = derivativeCoeffs(result);
            if (result.length === 1 && Math.abs(result[0]) < 1e-12) {
                return [0];
            }
        }
        return result;
    }

    function evaluate(coeffs, x) {
        let value = 0;
        for (const coeff of coeffs) {
            value = value * x + coeff;
        }
        return value;
    }

    function polynomialToString(coeffs) {
        const degree = coeffs.length - 1;
        const terms = [];

        for (let i = 0; i < coeffs.length; i++) {
            const coeff = coeffs[i];
            const power = degree - i;
            if (Math.abs(coeff) < 1e-12) {
                continue;
            }

            const sign = coeff >= 0 ? '+' : '-';
            const absCoeff = Math.abs(coeff);
            let body = '';

            if (power === 0) {
                body = formatNumber(absCoeff);
            } else if (power === 1) {
                body = Math.abs(absCoeff - 1) < 1e-12 ? 'x' : `${formatNumber(absCoeff)}x`;
            } else {
                body = Math.abs(absCoeff - 1) < 1e-12 ? `x^${power}` : `${formatNumber(absCoeff)}x^${power}`;
            }

            terms.push({ sign, body });
        }

        if (terms.length === 0) {
            return '0';
        }

        let expression = terms[0].sign === '+' ? terms[0].body : `-${terms[0].body}`;
        for (let i = 1; i < terms.length; i++) {
            expression += ` ${terms[i].sign} ${terms[i].body}`;
        }
        return expression;
    }

    function getInputs() {
        const parsed = parseCoefficients(coeffInput.value);
        if (parsed.error) {
            output.textContent = `❌ ${parsed.error}`;
            return null;
        }

        const order = Math.max(1, parseInt(orderInput.value, 10) || 1);
        const x = Number(xInput.value);

        if (!Number.isFinite(x)) {
            output.textContent = '❌ Please enter a valid x value.';
            return null;
        }

        return { coeffs: parsed.coeffs, order, x };
    }

    firstBtn.addEventListener('click', () => {
        const data = getInputs();
        if (!data) return;

        const first = derivativeCoeffs(data.coeffs);
        output.textContent = `f(x) = ${polynomialToString(data.coeffs)}\n\nf'(x) = ${polynomialToString(first)}`;
    });

    nthBtn.addEventListener('click', () => {
        const data = getInputs();
        if (!data) return;

        const nth = nthDerivativeCoeffs(data.coeffs, data.order);
        output.textContent = `f(x) = ${polynomialToString(data.coeffs)}\n\n${data.order}th derivative = ${polynomialToString(nth)}`;
    });

    evalBtn.addEventListener('click', () => {
        const data = getInputs();
        if (!data) return;

        const nth = nthDerivativeCoeffs(data.coeffs, data.order);
        const value = evaluate(nth, data.x);
        output.textContent = `f(x) = ${polynomialToString(data.coeffs)}\n\nDerivative used: ${polynomialToString(nth)}\nValue at x = ${formatNumber(data.x)} is ${formatNumber(value)}`;
    });
}
