function getNumberConverterHTML() {
    return `
        <div class="project-content">
            <h2>🔢 Number Converter</h2>
            <div class="converter-box">
                <div class="converter-row">
                    <label for="converterInput">Number</label>
                    <input id="converterInput" type="text" placeholder="Enter a value" value="1010">
                </div>
                <div class="converter-row">
                    <label for="sourceBase">From</label>
                    <select id="sourceBase">
                        <option value="2">Binary</option>
                        <option value="8">Octal</option>
                        <option value="10" selected>Decimal</option>
                        <option value="16">Hexadecimal</option>
                    </select>
                </div>
                <div class="converter-row">
                    <label for="targetBase">To</label>
                    <select id="targetBase">
                        <option value="2">Binary</option>
                        <option value="8">Octal</option>
                        <option value="10">Decimal</option>
                        <option value="16" selected>Hexadecimal</option>
                    </select>
                </div>
                <button class="btn-primary" id="convertNumberBtn">Convert</button>
                <div id="converterResult" class="converter-result"></div>
            </div>
        </div>
        <style>
            .converter-box { max-width: 640px; margin: 0 auto; padding: 1.5rem; display: grid; gap: 1rem; }
            .converter-row { display: grid; gap: 0.4rem; }
            .converter-row label { font-weight: 600; }
            .converter-row input, .converter-row select { padding: 0.9rem; border-radius: 10px; border: 2px solid var(--border-color); background: var(--surface-color); color: var(--text-color); }
            .converter-result { min-height: 2rem; padding: 0.9rem 1rem; border-radius: 10px; background: var(--surface-color); border: 1px solid var(--border-color); font-weight: 700; }
        </style>
    `;
}

function initNumberConverter() {
    const input = document.getElementById('converterInput');
    const sourceBase = document.getElementById('sourceBase');
    const targetBase = document.getElementById('targetBase');
    const button = document.getElementById('convertNumberBtn');
    const result = document.getElementById('converterResult');

    if (!input || !sourceBase || !targetBase || !button || !result) return;

    const convert = () => {
        const value = input.value.trim();
        const fromBase = Number(sourceBase.value);
        const toBase = Number(targetBase.value);

        if (!value) {
            result.textContent = 'Enter a number to convert.';
            return;
        }

        const parsed = parseInt(value, fromBase);
        if (Number.isNaN(parsed)) {
            result.textContent = 'Invalid input for the selected base.';
            return;
        }

        result.textContent = `Result: ${parsed.toString(toBase).toUpperCase()}`;
    };

    button.addEventListener('click', convert);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') convert(); });
    convert();
}