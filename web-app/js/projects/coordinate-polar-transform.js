function getCoordinatePolarTransformHTML() {
    return `
        <div class="project-content">
            <h2>🧭 Coordinate to Polar Transformation</h2>
            <div class="coord-polar-container">
                <p class="coord-polar-help">Enter Cartesian coordinates (x, y) to get polar form (r, theta).</p>

                <div class="coord-grid">
                    <div class="control-group">
                        <label for="cartesianX">X Coordinate</label>
                        <input id="cartesianX" type="number" step="any" value="3">
                    </div>
                    <div class="control-group">
                        <label for="cartesianY">Y Coordinate</label>
                        <input id="cartesianY" type="number" step="any" value="4">
                    </div>
                </div>

                <div class="coord-actions">
                    <button class="btn-primary" id="convertCoordinateBtn">Convert</button>
                </div>

                <div class="coord-stats">
                    <div class="stat-chip">📏 r: <span id="polarRadius">0</span></div>
                    <div class="stat-chip">📐 theta (deg): <span id="polarThetaDeg">0</span></div>
                    <div class="stat-chip">🔁 theta (rad): <span id="polarThetaRad">0</span></div>
                </div>

                <canvas id="coordPolarCanvas" width="760" height="360"></canvas>
                <p class="coord-result" id="coordPolarResult">Click convert to visualize the point and its polar angle.</p>
            </div>
        </div>

        <style>
            .coord-polar-container {
                text-align: center;
                padding: 1.5rem;
                max-width: 780px;
                margin: 0 auto;
            }

            .coord-polar-help {
                color: var(--text-secondary);
                margin-bottom: 1rem;
            }

            .coord-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
                gap: 1rem;
                margin-bottom: 1rem;
            }

            .coord-actions {
                margin-bottom: 1rem;
            }

            .coord-stats {
                display: flex;
                gap: 0.8rem;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 1rem;
            }

            #coordPolarCanvas {
                width: 100%;
                max-width: 760px;
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 14px;
                box-shadow: var(--shadow);
            }

            .coord-result {
                margin-top: 0.9rem;
                font-size: 1.05rem;
                font-weight: 700;
                color: var(--primary-color);
                min-height: 1.3rem;
            }
        </style>
    `;
}

function initCoordinatePolarTransform() {
    const xInput = document.getElementById('cartesianX');
    const yInput = document.getElementById('cartesianY');
    const convertBtn = document.getElementById('convertCoordinateBtn');

    const radiusEl = document.getElementById('polarRadius');
    const thetaDegEl = document.getElementById('polarThetaDeg');
    const thetaRadEl = document.getElementById('polarThetaRad');
    const resultEl = document.getElementById('coordPolarResult');

    const canvas = document.getElementById('coordPolarCanvas');
    const ctx = canvas.getContext('2d');

    function formatNumber(value) {
        if (Math.abs(value - Math.round(value)) < 1e-9) {
            return String(Math.round(value));
        }
        return Number(value.toFixed(6)).toString();
    }

    function quadrantOf(x, y) {
        if (x === 0 && y === 0) return 'Origin';
        if (x > 0 && y > 0) return 'Quadrant I';
        if (x < 0 && y > 0) return 'Quadrant II';
        if (x < 0 && y < 0) return 'Quadrant III';
        if (x > 0 && y < 0) return 'Quadrant IV';
        if (x === 0) return 'Y-axis';
        return 'X-axis';
    }

    function drawCoordinatePlane(x, y, radius, thetaRad) {
        const width = canvas.width;
        const height = canvas.height;
        const cx = width / 2;
        const cy = height / 2;

        const maxAbs = Math.max(5, Math.abs(x), Math.abs(y));
        const scale = (Math.min(width, height) / 2 - 35) / maxAbs;

        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = '#0f172a10';
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1.5;

        ctx.beginPath();
        ctx.moveTo(20, cy);
        ctx.lineTo(width - 20, cy);
        ctx.moveTo(cx, 20);
        ctx.lineTo(cx, height - 20);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '12px Arial';
        ctx.fillText('x', width - 28, cy - 8);
        ctx.fillText('y', cx + 10, 30);

        const px = cx + x * scale;
        const py = cy - y * scale;

        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(px, py);
        ctx.stroke();

        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(26, radius * scale * 0.25), 0, -thetaRad, thetaRad < 0);
        ctx.stroke();

        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(px, py, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ef4444';
        ctx.fillText(`(${formatNumber(x)}, ${formatNumber(y)})`, px + 8, py - 8);
    }

    function convert() {
        const x = Number(xInput.value);
        const y = Number(yInput.value);

        if (!Number.isFinite(x) || !Number.isFinite(y)) {
            resultEl.textContent = '❌ Please enter valid numeric coordinates.';
            return;
        }

        const radius = Math.hypot(x, y);
        const thetaRad = Math.atan2(y, x);
        let thetaDeg = (thetaRad * 180) / Math.PI;
        if (thetaDeg < 0) {
            thetaDeg += 360;
        }

        radiusEl.textContent = formatNumber(radius);
        thetaDegEl.textContent = formatNumber(thetaDeg);
        thetaRadEl.textContent = formatNumber(thetaRad);

        drawCoordinatePlane(x, y, radius, thetaRad);
        resultEl.textContent = `✅ ${quadrantOf(x, y)} | Polar: r = ${formatNumber(radius)}, theta = ${formatNumber(thetaDeg)} degrees`;
    }

    convertBtn.addEventListener('click', convert);
    [xInput, yInput].forEach((input) => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                convert();
            }
        });
    });

    convert();
}
