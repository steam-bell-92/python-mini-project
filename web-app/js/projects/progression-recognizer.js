function getProgressionRecognizerHTML() {
    return `
        <div class="project-content">
            <h2>📐 AP / GP / AGP / HP Recognizer</h2>
            <div class="progression-container">
                <p class="progression-help">
                    Enter at least 4 numbers separated by commas.<br>
                    Example: <strong>2, 4, 6, 8</strong> or <strong>3, 6, 12, 24</strong>
                </p>

                <div class="progression-input-wrap">
                    <label for="progressionInput">Sequence</label>
                    <input id="progressionInput" type="text" placeholder="e.g. 1, 2, 3, 4">
                </div>

                <div class="progression-actions">
                    <button class="btn-primary" id="recognizeProgressionBtn">Recognize</button>
                </div>

                <div class="progression-output" id="progressionOutput">Waiting for input...</div>
            </div>
        </div>

        <style>
            .progression-container {
                text-align: center;
                padding: 1.5rem;
                max-width: 760px;
                margin: 0 auto;
            }

            .progression-help {
                color: var(--text-secondary);
                line-height: 1.6;
                margin-bottom: 1rem;
            }

            .progression-input-wrap {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                text-align: left;
                margin-bottom: 1rem;
            }

            .progression-input-wrap label {
                font-weight: 600;
                color: var(--text-secondary);
            }

            .progression-input-wrap input {
                padding: 0.8rem;
                border-radius: 10px;
                border: 2px solid var(--border-color);
                background: var(--surface-color);
                color: var(--text-primary);
                font-size: 1rem;
            }

            .progression-actions {
                margin: 1rem 0;
            }

            .progression-output {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 1rem;
                text-align: left;
                line-height: 1.7;
                white-space: pre-line;
                min-height: 90px;
            }
        </style>
    `;
}

function initProgressionRecognizer() {
    const EPS = 1e-9;
    const input = document.getElementById('progressionInput');
    const button = document.getElementById('recognizeProgressionBtn');
    const output = document.getElementById('progressionOutput');

    function isClose(a, b, eps = EPS) {
        return Math.abs(a - b) <= eps;
    }

    function parseSequence(raw) {
        const parts = raw
            .split(',')
            .map((item) => item.trim())
            .filter((item) => item.length > 0);

        if (parts.length < 4) {
            return { error: 'Please enter at least 4 numbers.' };
        }

        const sequence = [];
        for (const part of parts) {
            const value = Number(part);
            if (!Number.isFinite(value)) {
                return { error: `Invalid value: ${part}` };
            }
            sequence.push(value);
        }

        return { sequence };
    }

    function formatNumber(value) {
        if (isClose(value, Math.round(value))) {
            return String(Math.round(value));
        }
        return Number(value.toFixed(6)).toString();
    }

    function checkAP(sequence) {
        const diff = sequence[1] - sequence[0];
        for (let i = 2; i < sequence.length; i++) {
            if (!isClose(sequence[i] - sequence[i - 1], diff)) {
                return { ok: false };
            }
        }
        return { ok: true, diff };
    }

    function checkGP(sequence) {
        const allZero = sequence.every((value) => isClose(value, 0));
        if (allZero) {
            return { ok: true, ratio: 0 };
        }

        for (let i = 1; i < sequence.length; i++) {
            if (isClose(sequence[i - 1], 0)) {
                return { ok: false };
            }
        }

        const ratio = sequence[1] / sequence[0];
        for (let i = 2; i < sequence.length; i++) {
            if (!isClose(sequence[i] / sequence[i - 1], ratio)) {
                return { ok: false };
            }
        }

        return { ok: true, ratio };
    }

    function checkHP(sequence) {
        if (sequence.some((value) => isClose(value, 0))) {
            return { ok: false };
        }

        const reciprocal = sequence.map((value) => 1 / value);
        const apCheck = checkAP(reciprocal);

        if (!apCheck.ok) {
            return { ok: false };
        }

        return { ok: true, reciprocalDiff: apCheck.diff };
    }

    function agpCandidates(sequence) {
        const s0 = sequence[0];
        const s1 = sequence[1];
        const s2 = sequence[2];

        if (isClose(s0, 0)) {
            if (isClose(s1, 0)) {
                return [];
            }
            return [s2 / (2 * s1)];
        }

        const a = s0;
        const b = -2 * s1;
        const c = s2;
        const disc = b * b - 4 * a * c;

        if (disc < -EPS) {
            return [];
        }

        if (isClose(disc, 0)) {
            return [-b / (2 * a)];
        }

        if (disc < 0) {
            return [];
        }

        const sqrtDisc = Math.sqrt(disc);
        const r1 = (-b + sqrtDisc) / (2 * a);
        const r2 = (-b - sqrtDisc) / (2 * a);

        if (isClose(r1, r2)) {
            return [r1];
        }

        return [r1, r2];
    }

    function checkAGP(sequence) {
        for (const ratio of agpCandidates(sequence)) {
            let valid = true;

            for (let i = 2; i < sequence.length; i++) {
                const expected = 2 * ratio * sequence[i - 1] - ratio * ratio * sequence[i - 2];
                if (!isClose(sequence[i], expected, 1e-7)) {
                    valid = false;
                    break;
                }
            }

            if (valid) {
                return { ok: true, ratio };
            }
        }

        return { ok: false };
    }

    function recognize() {
        const parsed = parseSequence(input.value);
        if (parsed.error) {
            output.textContent = `❌ ${parsed.error}`;
            return;
        }

        const sequence = parsed.sequence;
        const matches = [];

        const ap = checkAP(sequence);
        if (ap.ok) {
            matches.push(`- AP (d = ${formatNumber(ap.diff)})`);
        }

        const gp = checkGP(sequence);
        if (gp.ok) {
            matches.push(`- GP (r = ${formatNumber(gp.ratio)})`);
        }

        const agp = checkAGP(sequence);
        if (agp.ok) {
            matches.push(`- AGP (r = ${formatNumber(agp.ratio)})`);
        }

        const hp = checkHP(sequence);
        if (hp.ok) {
            matches.push(`- HP (reciprocal AP d = ${formatNumber(hp.reciprocalDiff)})`);
        }

        const header = `Sequence: ${sequence.map(formatNumber).join(', ')}`;
        if (matches.length === 0) {
            output.textContent = `${header}\n\n❌ Not AP, GP, AGP, or HP for these terms.`;
            return;
        }

        output.textContent = `${header}\n\n✅ Recognized as:\n${matches.join('\n')}`;
    }

    button.addEventListener('click', recognize);
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            recognize();
        }
    });
}
