// ============================================
// MATRIX CALCULATOR
// Converted from Python version
// Supports: Add, Subtract, Multiply, Transpose, Determinant, Rank, Inverse
// ============================================

function getMatrixCalculatorHTML() {
    return `
        <div class="project-content">
            <h2>🎮 MATRIX CALCULATOR 🎮</h2>
            <p class="project-desc">Easily add, subtract, multiply, transpose, calculate determinant, rank, and inverse of matrices!</p>

            <!-- Operation Selection -->
            <div class="operation-selector">
                <select id="matrixOperation" class="op-select">
                    <option value="add">➕ Addition (A + B)</option>
                    <option value="subtract">➖ Subtraction (A - B)</option>
                    <option value="multiply">✖️ Multiplication (A × B)</option>
                    <option value="transpose">🔄 Transpose A</option>
                    <option value="determinant">📐 Determinant of A</option>
                    <option value="rank">📊 Rank of A</option>
                    <option value="inverse">🔢 Inverse of A</option>
                </select>
            </div>

            <!-- Matrix Dimensions -->
            <div id="dimensionsSection" class="dimensions-section">
                <div class="dimension-group">
                    <label>Matrix A Dimensions:</label>
                    <input type="number" id="matrixARows" min="1" max="5" value="2" class="dim-input">
                    <span>×</span>
                    <input type="number" id="matrixACols" min="1" max="5" value="2" class="dim-input">
                </div>
                <div id="matrixBDimensions" class="dimension-group">
                    <label>Matrix B Dimensions:</label>
                    <input type="number" id="matrixBRows" min="1" max="5" value="2" class="dim-input">
                    <span>×</span>
                    <input type="number" id="matrixBCols" min="1" max="5" value="2" class="dim-input">
                </div>
                <button id="applyDimensionsBtn" class="btn-secondary">Apply Dimensions</button>
            </div>

            <!-- Matrix Input Grids -->
            <div class="matrices-container">
                <div class="matrix-panel">
                    <h3>Matrix A</h3>
                    <div id="matrixAGrid" class="matrix-grid"></div>
                </div>
                <div id="matrixBPanel" class="matrix-panel">
                    <h3>Matrix B</h3>
                    <div id="matrixBGrid" class="matrix-grid"></div>
                </div>
            </div>

            <!-- Calculate Button -->
            <div class="calculate-section">
                <button id="calculateBtn" class="btn-calculate">🧮 Calculate</button>
            </div>

            <!-- Result Section -->
            <div class="result-section">
                <h3>📊 Result</h3>
                <div id="matrixResult" class="result-display">Select an operation and click Calculate</div>
                <button id="copyMatrixResultBtn" class="btn-copy">📋 Copy Result</button>
            </div>
        </div>

        <style>
            .project-desc {
                text-align: center;
                margin-bottom: 1.5rem;
                color: var(--text-secondary);
            }

            .operation-selector {
                text-align: center;
                margin-bottom: 1.5rem;
            }

            .op-select {
                padding: 0.8rem 1.5rem;
                font-size: 1rem;
                border-radius: 30px;
                border: 2px solid var(--border-color);
                background: var(--bg-color);
                color: var(--text-color);
                cursor: pointer;
                width: 250px;
            }

            .dimensions-section {
                background: var(--surface-color);
                padding: 1rem;
                border-radius: 12px;
                border: 1px solid var(--border-color);
                margin-bottom: 1.5rem;
                display: flex;
                gap: 2rem;
                justify-content: center;
                flex-wrap: wrap;
                align-items: flex-end;
            }

            .dimension-group {
                display: flex;
                gap: 0.5rem;
                align-items: center;
                flex-wrap: wrap;
            }

            .dimension-group label {
                font-weight: 600;
            }

            .dim-input {
                width: 60px;
                padding: 0.4rem;
                border-radius: 6px;
                border: 1px solid var(--border-color);
                background: var(--bg-color);
                color: var(--text-color);
                text-align: center;
            }

            .btn-secondary {
                padding: 0.5rem 1rem;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .btn-secondary:hover {
                background: var(--primary-color);
                color: white;
                transform: translateY(-2px);
            }

            .matrices-container {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 2rem;
                margin-bottom: 1.5rem;
            }

            .matrix-panel h3 {
                text-align: center;
                margin-bottom: 1rem;
            }

            .matrix-grid {
                display: grid;
                gap: 0.5rem;
                justify-content: center;
            }

            .matrix-grid input {
                width: 70px;
                padding: 0.6rem;
                text-align: center;
                border-radius: 8px;
                border: 1px solid var(--border-color);
                background: var(--bg-color);
                color: var(--text-color);
                font-size: 1rem;
            }

            .calculate-section {
                text-align: center;
                margin-bottom: 1.5rem;
            }

            .btn-calculate {
                padding: 0.8rem 2rem;
                background: var(--primary-color);
                color: white;
                border: none;
                border-radius: 30px;
                cursor: pointer;
                font-weight: 600;
                font-size: 1rem;
                transition: all 0.2s ease;
            }

            .btn-calculate:hover {
                transform: translateY(-2px);
                filter: brightness(1.05);
            }

            .result-section {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 1rem;
            }

            .result-display {
                font-family: monospace;
                font-size: 0.9rem;
                white-space: pre-wrap;
                word-break: break-all;
                min-height: 60px;
                margin: 0.5rem 0;
                max-height: 300px;
                overflow-y: auto;
            }

            .btn-copy {
                padding: 0.5rem 1rem;
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 8px;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .btn-copy:hover {
                background: var(--primary-color);
                color: white;
            }

            .error-message {
                color: #ef4444;
                font-size: 0.9rem;
                margin-top: 0.5rem;
            }

            @media (max-width: 700px) {
                .matrices-container {
                    grid-template-columns: 1fr;
                }
                .matrix-grid input {
                    width: 50px;
                }
            }
        </style>
    `;
}

function initMatrixCalculator() {
    // DOM Elements
    const operationSelect = document.getElementById('matrixOperation');
    const matrixARows = document.getElementById('matrixARows');
    const matrixACols = document.getElementById('matrixACols');
    const matrixBRows = document.getElementById('matrixBRows');
    const matrixBCols = document.getElementById('matrixBCols');
    const applyBtn = document.getElementById('applyDimensionsBtn');
    const calculateBtn = document.getElementById('calculateBtn');
    const matrixAGrid = document.getElementById('matrixAGrid');
    const matrixBGrid = document.getElementById('matrixBGrid');
    const matrixBPanel = document.getElementById('matrixBPanel');
    const resultDiv = document.getElementById('matrixResult');
    const copyBtn = document.getElementById('copyMatrixResultBtn');

    let matrixA = [];
    let matrixB = [];

    // Helper: Create grid
    function createGrid(container, rows, cols, matrix) {
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
        container.innerHTML = '';
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                const input = document.createElement('input');
                input.type = 'number';
                input.value = matrix[i]?.[j] !== undefined ? matrix[i][j] : 0;
                input.step = 'any';
                input.addEventListener('input', () => {
                    matrix[i][j] = parseFloat(input.value) || 0;
                });
                container.appendChild(input);
            }
        }
    }

    // Helper: Get matrix values from grid
    function getMatrixValues(rows, cols, container) {
        const inputs = container.querySelectorAll('input');
        const matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix[i] = [];
            for (let j = 0; j < cols; j++) {
                const idx = i * cols + j;
                matrix[i][j] = parseFloat(inputs[idx]?.value) || 0;
            }
        }
        return matrix;
    }

    // Helper: Format matrix for display
    function formatMatrix(matrix) {
        if (!matrix || matrix.length === 0) return '[]';
        return matrix.map(row => 
            '[ ' + row.map(val => Number(val.toFixed(6)).toString()).join(', ') + ' ]'
        ).join('\n');
    }

    // ========== MATRIX OPERATIONS (from Python code) ==========
    
    function addMatrices(m1, m2) {
        const rows = m1.length;
        const cols = m1[0].length;
        const result = [];
        for (let i = 0; i < rows; i++) {
            result[i] = [];
            for (let j = 0; j < cols; j++) {
                result[i][j] = m1[i][j] + m2[i][j];
            }
        }
        return result;
    }

    function subtractMatrices(m1, m2) {
        const rows = m1.length;
        const cols = m1[0].length;
        const result = [];
        for (let i = 0; i < rows; i++) {
            result[i] = [];
            for (let j = 0; j < cols; j++) {
                result[i][j] = m1[i][j] - m2[i][j];
            }
        }
        return result;
    }

    function multiplyMatrices(m1, m2) {
        const r1 = m1.length;
        const c1 = m1[0].length;
        const r2 = m2.length;
        const c2 = m2[0].length;
        
        if (c1 !== r2) {
            throw new Error('Matrix 1 columns must equal Matrix 2 rows for multiplication.');
        }
        
        const result = [];
        for (let i = 0; i < r1; i++) {
            result[i] = [];
            for (let j = 0; j < c2; j++) {
                let val = 0;
                for (let k = 0; k < c1; k++) {
                    val += m1[i][k] * m2[k][j];
                }
                result[i][j] = val;
            }
        }
        return result;
    }

    function transposeMatrix(m) {
        const rows = m.length;
        const cols = m[0].length;
        const result = [];
        for (let i = 0; i < cols; i++) {
            result[i] = [];
            for (let j = 0; j < rows; j++) {
                result[i][j] = m[j][i];
            }
        }
        return result;
    }

    function determinantMatrix(m) {
        const n = m.length;
        if (n === 1) return m[0][0];
        if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];
        
        // Copy matrix for elimination
        const mat = m.map(row => [...row]);
        let det = 1;
        
        for (let i = 0; i < n; i++) {
            // Find pivot
            let pivotRow = i;
            while (pivotRow < n && Math.abs(mat[pivotRow][i]) < 1e-9) {
                pivotRow++;
            }
            if (pivotRow === n) return 0;
            
            if (pivotRow !== i) {
                [mat[i], mat[pivotRow]] = [mat[pivotRow], mat[i]];
                det *= -1;
            }
            
            const pivot = mat[i][i];
            det *= pivot;
            
            for (let r = i + 1; r < n; r++) {
                const factor = mat[r][i] / pivot;
                for (let c = i; c < n; c++) {
                    mat[r][c] -= factor * mat[i][c];
                }
            }
        }
        return det;
    }

    function rankMatrix(m) {
        const mat = m.map(row => [...row]);
        const rows = mat.length;
        const cols = mat[0].length;
        
        let pivotRow = 0;
        for (let col = 0; col < cols; col++) {
            let swapRow = pivotRow;
            while (swapRow < rows && Math.abs(mat[swapRow][col]) < 1e-9) {
                swapRow++;
            }
            if (swapRow === rows) continue;
            
            [mat[pivotRow], mat[swapRow]] = [mat[swapRow], mat[pivotRow]];
            
            for (let r = pivotRow + 1; r < rows; r++) {
                const factor = mat[r][col] / mat[pivotRow][col];
                for (let c = col; c < cols; c++) {
                    mat[r][c] -= factor * mat[pivotRow][c];
                }
            }
            pivotRow++;
            if (pivotRow === rows) break;
        }
        
        let rank = 0;
        for (let i = 0; i < rows; i++) {
            if (mat[i].some(val => Math.abs(val) > 1e-9)) {
                rank++;
            }
        }
        return rank;
    }

    function inverseMatrix(m) {
        const n = m.length;
        if (n !== m[0].length) {
            throw new Error('Matrix must be square for inverse');
        }
        
        // Create augmented matrix [A | I]
        const aug = [];
        for (let i = 0; i < n; i++) {
            aug[i] = [];
            for (let j = 0; j < n; j++) {
                aug[i][j] = m[i][j];
            }
            for (let j = 0; j < n; j++) {
                aug[i][n + j] = (i === j) ? 1 : 0;
            }
        }
        
        // Gaussian elimination
        for (let i = 0; i < n; i++) {
            let pivotRow = i;
            while (pivotRow < n && Math.abs(aug[pivotRow][i]) < 1e-9) {
                pivotRow++;
            }
            if (pivotRow === n) {
                throw new Error('Matrix is singular and cannot be inverted.');
            }
            
            if (pivotRow !== i) {
                [aug[i], aug[pivotRow]] = [aug[pivotRow], aug[i]];
            }
            
            const pivot = aug[i][i];
            for (let j = 0; j < 2 * n; j++) {
                aug[i][j] /= pivot;
            }
            
            for (let r = 0; r < n; r++) {
                if (r !== i && Math.abs(aug[r][i]) > 1e-9) {
                    const factor = aug[r][i];
                    for (let c = 0; c < 2 * n; c++) {
                        aug[r][c] -= factor * aug[i][c];
                    }
                }
            }
        }
        
        // Extract inverse
        const inverse = [];
        for (let i = 0; i < n; i++) {
            inverse[i] = [];
            for (let j = 0; j < n; j++) {
                inverse[i][j] = aug[i][n + j];
            }
        }
        return inverse;
    }

    // Update Matrix B visibility based on operation
    function updateMatrixBVisibility() {
        const operation = operationSelect.value;
        const needsB = ['add', 'subtract', 'multiply'].includes(operation);
        matrixBPanel.style.display = needsB ? 'block' : 'none';
        
        // For transpose, determinant, rank, inverse, we only need matrix A dimensions
        if (!needsB) {
            // Hide B dimensions input
            document.getElementById('matrixBDimensions').style.opacity = '0.5';
        } else {
            document.getElementById('matrixBDimensions').style.opacity = '1';
        }

        // Reset result display to default when operation changes
        if (resultDiv) {
            resultDiv.innerHTML = 'Select an operation and click Calculate';
        }
    }

    // Validate a single dimension value; returns an error string or null if valid
    function validateDimension(value, label) {
        if (value === null || value === undefined || (typeof value === 'string' && value.trim() === '')) {
            return `${label} is empty. Please enter a value between 1 and 5.`;
        }
        const num = Number(value);
        if (isNaN(num)) {
            return `${label} is not a valid number.`;
        }
        if (!Number.isInteger(num)) {
            return `${label} must be a whole number (got ${value}).`;
        }
        if (num < 1 || num > 5) {
            return `${label} must be between 1 and 5 (got ${num}).`;
        }
        return null;
    }

    // Validate all required dimension inputs; returns { valid, aRows, aCols, bRows, bCols, error }
    function validateDimensions() {
        const operation = operationSelect.value;
        const needsB = ['add', 'subtract', 'multiply'].includes(operation);

        const checks = [
            { value: matrixARows.value, label: 'Matrix A Rows' },
            { value: matrixACols.value, label: 'Matrix A Cols' },
        ];

        if (needsB) {
            checks.push(
                { value: matrixBRows.value, label: 'Matrix B Rows' },
                { value: matrixBCols.value, label: 'Matrix B Cols' },
            );
        }

        for (const { value, label } of checks) {
            const error = validateDimension(value, label);
            if (error) {
                return { valid: false, error };
            }
        }

        const aRows = parseInt(matrixARows.value);
        const aCols = parseInt(matrixACols.value);
        const bRows = needsB ? parseInt(matrixBRows.value) : 2;
        const bCols = needsB ? parseInt(matrixBCols.value) : 2;

        return { valid: true, aRows, aCols, bRows, bCols, error: null };
    }

    // Apply dimensions and create grids
    function applyDimensions() {
        const dims = validateDimensions();
        if (!dims.valid) {
            resultDiv.innerHTML = `<span style="color: #ef4444;">⚠️ ${dims.error}</span>`;
            return;
        }

        const { aRows, aCols, bRows, bCols } = dims;

        // Reset result display to default when dimensions are successfully applied
        resultDiv.innerHTML = 'Select an operation and click Calculate';

        // Initialize matrices with zeros
        matrixA = Array(aRows).fill().map(() => Array(aCols).fill(0));
        matrixB = Array(bRows).fill().map(() => Array(bCols).fill(0));
        
        createGrid(matrixAGrid, aRows, aCols, matrixA);
        createGrid(matrixBGrid, bRows, bCols, matrixB);
        
        updateMatrixBVisibility();
    }

    // Perform calculation
    function calculate() {
        try {
            // Validate dimensions before reading matrix values
            const dims = validateDimensions();
            if (!dims.valid) {
                resultDiv.innerHTML = `<span style="color: #ef4444;">⚠️ ${dims.error}</span>`;
                return;
            }

            const { aRows, aCols, bRows, bCols } = dims;

            matrixA = getMatrixValues(aRows, aCols, matrixAGrid);
            matrixB = getMatrixValues(bRows, bCols, matrixBGrid);
            
            const operation = operationSelect.value;
            let result;
            let operationName = '';
            
            switch(operation) {
                case 'add':
                    if (aRows !== bRows || aCols !== bCols) {
                        throw new Error('Matrices must have same dimensions for addition');
                    }
                    result = addMatrices(matrixA, matrixB);
                    operationName = 'Addition (A + B)';
                    break;
                case 'subtract':
                    if (aRows !== bRows || aCols !== bCols) {
                        throw new Error('Matrices must have same dimensions for subtraction');
                    }
                    result = subtractMatrices(matrixA, matrixB);
                    operationName = 'Subtraction (A - B)';
                    break;
                case 'multiply':
                    if (aCols !== bRows) {
                        throw new Error(`Matrix A columns (${aCols}) must equal Matrix B rows (${bRows}) for multiplication`);
                    }
                    result = multiplyMatrices(matrixA, matrixB);
                    operationName = 'Multiplication (A × B)';
                    break;
                case 'transpose':
                    result = transposeMatrix(matrixA);
                    operationName = 'Transpose of A';
                    break;
                case 'determinant':
                    if (aRows !== aCols) {
                        throw new Error(`Matrix must be square. Got ${aRows}×${aCols}`);
                    }
                    const det = determinantMatrix(matrixA);
                    resultDiv.innerHTML = `<strong>Determinant of A:</strong><br>${det.toFixed(6)}`;
                    return;
                case 'rank':
                    const rank = rankMatrix(matrixA);
                    resultDiv.innerHTML = `<strong>Rank of A:</strong><br>${rank}`;
                    return;
                case 'inverse':
                    if (aRows !== aCols) {
                        throw new Error(`Matrix must be square. Got ${aRows}×${aCols}`);
                    }
                    result = inverseMatrix(matrixA);
                    operationName = 'Inverse of A';
                    break;
                default:
                    throw new Error('Unknown operation');
            }
            
            resultDiv.innerHTML = `<strong>${operationName}:</strong><br>${formatMatrix(result)}`;
        } catch (error) {
            resultDiv.innerHTML = `<span style="color: #ef4444;">❌ Error: ${error.message}</span>`;
        }
    }

    // Event Listeners
    operationSelect.addEventListener('change', updateMatrixBVisibility);
    applyBtn.addEventListener('click', applyDimensions);
    calculateBtn.addEventListener('click', calculate);
    
    copyBtn.addEventListener('click', () => {
        const text = resultDiv.innerText;
        if (text && text !== 'Select an operation and click Calculate') {
            navigator.clipboard.writeText(text);
            const original = copyBtn.textContent;
            copyBtn.textContent = '✅ Copied!';
            setTimeout(() => { copyBtn.textContent = original; }, 2000);
        }
    });

    // Initialize
    applyDimensions();
}