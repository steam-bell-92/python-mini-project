function getPascalTriangleHTML() {
    return `
        <div class="project-content">
            <div class="pascal-grid">
                <!-- Left Sidebar: Controls & Insights -->
                <div class="pascal-sidebar">
                    <div class="pascal-header">
                        <h2>🔺 Pascal's Triangle</h2>
                        <p class="pascal-desc">Explore mathematical patterns, sequences, and fractals hidden inside the triangle.</p>
                    </div>
                    
                    <div class="sidebar-section">
                        <div class="section-label">Configuration</div>
                        <div class="controls-group">
                            <label for="pascalRows">Number of Rows</label>
                            <div class="input-with-btn">
                                <input type="number" id="pascalRows" min="1" max="200" value="7">
                                <button class="btn-generate" id="generatePascal">Generate</button>
                            </div>
                            <div id="pascalError" style="display:none; color:#ff4d4d; font-size:0.72rem; font-weight:600; margin-top:2px;"></div>
                        </div>
                    </div>
                    
                    <div class="sidebar-section">
                        <div class="section-label">Exploration Modes</div>
                        <div class="mode-buttons-vertical">
                            <button class="btn-mode active" data-mode="default">Default Gradient</button>
                            <button class="btn-mode" data-mode="even">Even / Odd (Sierpiński)</button>
                            <button class="btn-mode" data-mode="prime">Prime Highlight</button>
                            <button class="btn-mode" data-mode="power">Powers of 2</button>
                            <button class="btn-mode" data-mode="fib">Fibonacci Diagonals</button>
                        </div>
                    </div>
                    
                    <div class="sidebar-section">
                        <div class="section-label">Legend</div>
                        <div class="pascal-legend" id="pascalLegend"></div>
                    </div>
                    
                    <div class="sidebar-section info-section">
                        <div class="section-label">Mathematical Insight</div>
                        <div class="pascal-info" id="pascalInfo"></div>
                    </div>
                </div>
                
                <!-- Right Panel: Interactive Honeycomb Display -->
                <div class="pascal-display-container">
                    <button class="btn-zoom" id="toggleZoom">
                        <span class="zoom-icon">🔍</span> <span class="zoom-text">Zoom Triangle</span>
                    </button>
                    <div class="pascal-display" id="pascalDisplay"></div>
                </div>
            </div>
        </div>
        
        <style>
            /* Layout & Grid Grid system */
            .pascal-grid {
                display: grid;
                grid-template-columns: 280px 1fr;
                gap: 1rem;
                align-items: start;
                max-width: 950px;
                margin: 0 auto;
                padding: 0.25rem;
            }
            
            /* Sidebar Styling */
            .pascal-sidebar {
                background: rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.06);
                border-radius: 12px;
                padding: 1rem;
                display: flex;
                flex-direction: column;
                gap: 0.8rem;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }
            
            .pascal-header h2 {
                margin: 0 0 0.25rem 0;
                font-size: 1.15rem;
                font-weight: 700;
                color: var(--text);
            }
            
            .pascal-desc {
                margin: 0;
                font-size: 0.78rem;
                color: var(--text-secondary);
                line-height: 1.3;
            }
            
            .sidebar-section {
                display: flex;
                flex-direction: column;
                gap: 0.4rem;
                border-top: 1px solid rgba(255, 255, 255, 0.08);
                padding-top: 0.75rem;
            }
            
            .section-label {
                font-size: 0.68rem;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: var(--text-secondary);
                opacity: 0.8;
                font-weight: 700;
            }
            
            .controls-group {
                display: flex;
                flex-direction: column;
                gap: 0.3rem;
            }
            
            .controls-group label {
                font-size: 0.72rem;
                color: var(--text-secondary);
                font-weight: 500;
            }
            
            .input-with-btn {
                display: flex;
                gap: 0.4rem;
            }
            
            .input-with-btn input {
                flex: 1;
                padding: 0.45rem;
                font-size: 0.9rem;
                border: 1.5px solid var(--border);
                border-radius: 6px;
                background: var(--surface-light);
                color: var(--text);
                text-align: center;
                outline: none;
                font-weight: bold;
                transition: border-color 0.2s;
            }
            
            .input-with-btn input:focus {
                border-color: var(--accent);
            }
            
            .btn-generate {
                background: var(--accent);
                color: white;
                border: none;
                padding: 0.45rem 0.85rem;
                border-radius: 6px;
                cursor: pointer;
                font-size: 0.85rem;
                font-weight: 700;
                transition: all 0.2s ease;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
            }
            
            .btn-generate:hover {
                background: var(--accent-hover, #15805d);
                transform: translateY(-1px);
            }
            
            /* Mode Buttons Vertical */
            .mode-buttons-vertical {
                display: flex;
                flex-direction: column;
                gap: 0.35rem;
            }
            
            .btn-mode {
                padding: 8px 10px;
                border-radius: 6px;
                border: 1px solid rgba(255, 255, 255, 0.05);
                background: rgba(255, 255, 255, 0.02);
                color: var(--text);
                cursor: pointer;
                font-size: 0.78rem;
                font-weight: 600;
                text-align: left;
                transition: all 0.2s ease;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            
            .btn-mode:hover {
                background: rgba(255, 255, 255, 0.07);
            }
            
            .btn-mode.active {
                background: var(--accent-soft);
                color: var(--accent);
                border-color: var(--border-accent);
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }
            
            /* Legend styling */
            .pascal-legend {
                display: flex;
                gap: 0.6rem;
                flex-wrap: wrap;
                color: var(--text-secondary);
            }
            
            /* Info Box styling */
            .pascal-info {
                font-size: 0.78rem;
                color: var(--text);
                line-height: 1.35;
                font-style: italic;
                font-weight: 500;
                min-height: auto;
            }
            
            /* Interactive Display Styling - Extremely Compact */
            .pascal-display-container {
                background: rgba(0, 0, 0, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.04);
                border-radius: 12px;
                padding: 2.25rem 0.75rem 0.75rem; /* extra top padding for zoom button */
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 320px;
                overflow: auto;
                box-shadow: inset 0 2px 10px rgba(0, 0, 0, 0.3);
                position: relative;
            }
            
            .btn-zoom {
                position: absolute;
                top: 8px;
                right: 8px;
                background: rgba(255, 255, 255, 0.06);
                border: 1px solid rgba(255, 255, 255, 0.1);
                color: var(--text-secondary);
                padding: 5px 10px;
                border-radius: 6px;
                font-size: 0.72rem;
                font-weight: 600;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 4px;
                z-index: 20;
                transition: all 0.2s ease;
            }
            
            .btn-zoom:hover {
                background: var(--accent-soft);
                color: var(--accent);
                border-color: var(--border-accent);
            }
            
            /* Zoom active state */
            .pascal-grid.zoom-active {
                grid-template-columns: 1fr;
            }
            
            .pascal-grid.zoom-active .pascal-sidebar {
                display: none;
            }
            
            .pascal-grid.zoom-active .pascal-display-container {
                min-height: 480px;
                height: 65vh;
            }
            
            .pascal-display {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin: auto;
            }
            
            .pascal-row {
                display: flex;
                gap: 2px;
                align-items: center;
            }
            
            /* Honeycomb vertical interlocking */
            .pascal-row + .pascal-row {
                margin-top: calc(var(--hex-size, 40px) * -0.28);
            }
            
            /* Hexagon Shapes */
            .hexagon {
                width: var(--hex-size, 40px);
                height: calc(var(--hex-size, 40px) * 1.15);
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: z-index 0.2s ease;
            }
            
            .hexagon-inner {
                width: 100%;
                height: 100%;
                position: relative;
                clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                background: var(--hex-color, #1D9E75);
                transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: 700;
                font-family: monospace;
                color: white;
                animation: fadeIn 0.4s ease forwards;
                box-sizing: border-box;
                padding: 2px;
            }
            
            .hexagon:hover {
                z-index: 15;
            }
            
            .hexagon:hover .hexagon-inner {
                transform: scale(1.22);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
                cursor: pointer;
            }
            
            /* Responsive layout break */
            @media (max-width: 768px) {
                .pascal-grid {
                    grid-template-columns: 1fr;
                    gap: 1rem;
                }
                .pascal-display-container {
                    min-height: 300px;
                    padding: 0.75rem 0.5rem;
                }
            }
        </style>
    `;
}

function initPascalTriangle() {
    const rowsInput = document.getElementById('pascalRows');
    const generateBtn = document.getElementById('generatePascal');
    const display = document.getElementById('pascalDisplay');
    
    let currentMode = 'default';

    function isPrime(n) {
        if (n < 2n) return false;
        if (n > 1000000n) return false; // Safety cap to avoid freezing
        const num = Number(n);
        for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false;
        return true;
    }
    
    function isFib(n) {
        if (n > 2584n) return false;
        const num = Number(n);
        const s = new Set([1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584]);
        return s.has(num);
    }
    
    function getHexColor(val, mode, maxVal) {
        if (mode === 'default') {
            const doubleVal = Number(val);
            const doubleMax = Number(maxVal);
            const t = Math.log1p(doubleVal) / Math.log1p(doubleMax);
            const tealStops = ['#C0DD97', '#5DCAA5', '#1D9E75', '#0F6E56', '#085041'];
            return tealStops[Math.min(Math.floor(t * tealStops.length), tealStops.length - 1)];
        }
        if (mode === 'even') return val % 2n === 0n ? '#534AB7' : '#0F6E56';
        if (mode === 'prime') return isPrime(val) ? '#993C1D' : '#185FA5';
        if (mode === 'power') return (val > 0n && (val & (val-1n)) === 0n) ? '#854F0B' : '#888780';
        if (mode === 'fib') return isFib(val) ? '#993556' : '#888780';
        return '#1D9E75';
    }
    
    function updateLegend(mode) {
        const legends = {
            default: [['#C0DD97', 'Small'], ['#1D9E75', 'Medium'], ['#085041', 'Large']],
            even: [['#534AB7', 'Even'], ['#0F6E56', 'Odd']],
            prime: [['#993C1D', 'Prime'], ['#185FA5', 'Composite']],
            power: [['#854F0B', 'Power of 2'], ['#888780', 'Other']],
            fib: [['#993556', 'Fibonacci'], ['#888780', 'Other']],
        };
        
        const legendContainer = document.getElementById('pascalLegend');
        if (!legendContainer) return;
        
        legendContainer.innerHTML = (legends[mode] || []).map(([c, l]) =>
            `<span style="display:flex;align-items:center;gap:6px;font-size:0.8rem;">
              <span style="width:12px;height:12px;border-radius:3px;background:${c};display:inline-block;flex-shrink:0;border:1px solid rgba(255,255,255,0.1)"></span>${l}
            </span>`
        ).join('');
    }
    
    function updateInfo(mode, triangle, rows) {
        const rowSum = triangle[rows-1].reduce((a, b) => a + b, 0n);
        const msgs = {
            default: `Row ${rows} sum = ${rowSum.toLocaleString()} · Row sums follow a 2ⁿ sequence.`,
            even: `Odd numbers color-map to reveal Sierpiński's fractal triangle pattern.`,
            prime: `Inner values on prime row ${rows} are multiples of ${rows} (if row number is prime).`,
            power: `Highlighting values that are exact powers of 2.`,
            fib: `Sums along shallow diagonals yield the Fibonacci sequence.`,
        };
        const infoEl = document.getElementById('pascalInfo');
        if (infoEl) infoEl.textContent = msgs[mode] || '';
    }

    const errorEl = document.getElementById('pascalError');
    let lastValidRows = 7;

    // Dynamically clear errors when user types a valid input
    rowsInput.addEventListener('input', () => {
        const rawVal = rowsInput.value;
        const numVal = Number(rawVal);
        if (rawVal !== '' && Number.isInteger(numVal) && numVal >= 1 && numVal <= 200) {
            if (errorEl) errorEl.style.display = 'none';
        }
    });

    // Set up zoom toggle listener
    const toggleZoomBtn = document.getElementById('toggleZoom');
    const pascalGrid = document.querySelector('.pascal-grid');
    if (toggleZoomBtn && pascalGrid) {
        toggleZoomBtn.addEventListener('click', () => {
            const isActive = pascalGrid.classList.toggle('zoom-active');
            const zoomText = toggleZoomBtn.querySelector('.zoom-text');
            const zoomIcon = toggleZoomBtn.querySelector('.zoom-icon');
            if (isActive) {
                if (zoomText) zoomText.textContent = "Exit Zoom";
                if (zoomIcon) zoomIcon.textContent = "🔍";
            } else {
                if (zoomText) zoomText.textContent = "Zoom Triangle";
                if (zoomIcon) zoomIcon.textContent = "🔍";
            }
            generatePascal(true);
        });
    }

    // Set up mode button listeners
    document.querySelectorAll('.btn-mode').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.btn-mode').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentMode = btn.dataset.mode;
            generatePascal(true); // Pass true to signal mode switch fallback
        });
    });
    
    function generatePascal(fromModeSwitch = false) {
        const isFromMode = (fromModeSwitch === true);
        const rawValue = rowsInput.value;
        let rows = Number(rawValue);

        if (rawValue === '' || !Number.isInteger(rows) || rows <= 0 || rows > 200) {
            if (isFromMode) {
                // Silently fallback to the last valid row count
                rows = lastValidRows;
                rowsInput.value = lastValidRows;
                if (errorEl) errorEl.style.display = 'none';
            } else {
                // Show inline error feedback instead of browser alert
                if (errorEl) {
                    errorEl.textContent = "Please enter a row count between 1 and 200.";
                    errorEl.style.display = 'block';
                }
                return;
            }
        } else {
            if (errorEl) errorEl.style.display = 'none';
            lastValidRows = rows;
        }

        display.textContent = '';
        const triangle = [];
        
        // Calculate hexagon sizing dynamically. Capped for small rows, scaling down for high rows.
        const isZoomActive = pascalGrid && pascalGrid.classList.contains('zoom-active');
        let hexSize;
        if (rows <= 20) {
            hexSize = isZoomActive ? 56 : 42;
        } else {
            const containerWidth = isZoomActive ? 680 : 380;
            hexSize = Math.max(4, Math.floor(containerWidth / rows));
        }
        display.style.setProperty('--hex-size', `${hexSize}px`);

        // Generate BigInt triangle values
        for (let i = 0; i < rows; i++) {
            triangle[i] = [];
            for (let j = 0; j <= i; j++) {
                if (j === 0 || j === i) {
                    triangle[i][j] = 1n;
                } else {
                    triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j];
                }
            }
        }

        // Get maximum value inside triangle in O(1) complexity (center of bottom row)
        const maxVal = triangle[rows-1][Math.floor((rows-1)/2)];
        
        const fragment = document.createDocumentFragment();
        const showText = hexSize >= 22;

        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');
            row.className = 'pascal-row';

            for (let j = 0; j <= i; j++) {
                const hexagon = document.createElement('div');
                hexagon.className = 'hexagon';
                
                const val = triangle[i][j];
                const color = getHexColor(val, currentMode, maxVal);
                const numStr = String(val);

                if (showText) {
                    let fontSizePercent = 0.36;
                    if (numStr.length >= 4) {
                        fontSizePercent = 0.24;
                    } else if (numStr.length === 3) {
                        fontSizePercent = 0.28;
                    }
                    const cellFontSize = Math.max(8, Math.floor(hexSize * fontSizePercent));
                    
                    hexagon.innerHTML = `
                        <div class="hexagon-inner" style="--hex-color:${color}; font-size:${cellFontSize}px" title="Value: ${numStr}">
                            ${numStr}
                        </div>
                    `;
                } else {
                    // Render colored tiles only, exact values visible on native hover tooltips
                    hexagon.innerHTML = `
                        <div class="hexagon-inner" style="--hex-color:${color};" title="Value: ${numStr}"></div>
                    `;
                }
                
                // Disable dynamic animation delays for large row counts to avoid rendering lag
                if (rows <= 40) {
                    hexagon.style.animationDelay = `${(i + j) * 0.03}s`;
                } else {
                    hexagon.style.animation = 'fadeIn 0.2s ease forwards';
                }
                
                row.appendChild(hexagon);
            }
            fragment.appendChild(row);
        }
        display.appendChild(fragment);
        
        updateLegend(currentMode);
        updateInfo(currentMode, triangle, rows);
    }
    
    generateBtn.addEventListener('click', generatePascal);
    generatePascal();
}
