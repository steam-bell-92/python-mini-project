function getProjectileMotionHTML() {
    return `
        <div class="project-content">
            <h2>🚀 Projectile Motion Calculator</h2>
            <div class="projectile-container">
                <div class="projectile-controls">
                    <div class="control-group">
                        <label for="projSpeed">Launch Speed (m/s)</label>
                        <input id="projSpeed" type="number" min="1" max="200" value="45">
                    </div>
                    <div class="control-group">
                        <label for="projAngle">Launch Angle (°)</label>
                        <input id="projAngle" type="number" min="1" max="89" value="45">
                    </div>
                </div>

                <div class="projectile-actions">
                    <button class="btn-primary" id="launchProjectileBtn">Launch</button>
                </div>

                <div class="projectile-stats">
                    <div class="stat-chip">⏱️ TOF: <span id="projTime">0.00 s</span></div>
                    <div class="stat-chip">📈 Hmax: <span id="projHeight">0.00 m</span></div>
                    <div class="stat-chip">📏 Range: <span id="projRange">0.00 m</span></div>
                </div>

                <canvas id="projectileCanvas" width="760" height="380"></canvas>
                <p class="projectile-result" id="projectileResult">Set values and launch to calculate TOF, Hmax, and Range.</p>
            </div>
        </div>

        <style>
            .projectile-container {
                text-align: center;
                padding: 1.5rem;
            }

            .projectile-controls {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
                gap: 1rem;
                margin-bottom: 1rem;
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
            }

            .projectile-actions {
                display: flex;
                gap: 0.8rem;
                justify-content: center;
                margin: 1.2rem 0;
                flex-wrap: wrap;
            }

            .btn-primary {
                background: var(--primary-color);
                color: white;
                border: none;
                padding: 0.75rem 1.3rem;
                border-radius: 10px;
                cursor: pointer;
                transition: var(--transition);
            }

            .btn-primary:hover {
                transform: translateY(-2px);
            }

            .projectile-stats {
                display: flex;
                gap: 0.8rem;
                justify-content: center;
                flex-wrap: wrap;
                margin-bottom: 1rem;
            }

            .stat-chip {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 999px;
                padding: 0.45rem 0.9rem;
                font-weight: 600;
                color: var(--text-primary);
            }

            #projectileCanvas {
                width: 100%;
                max-width: 760px;
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 14px;
                box-shadow: var(--shadow);
            }

            .projectile-result {
                margin-top: 0.9rem;
                font-size: 1.05rem;
                font-weight: bold;
                color: var(--primary-color);
                min-height: 1.3rem;
            }
        </style>
    `;
}

function initProjectileMotion() {
    const g = 9.81;
    const canvas = document.getElementById('projectileCanvas');
    const ctx = canvas.getContext('2d');

    const speedInput = document.getElementById('projSpeed');
    const angleInput = document.getElementById('projAngle');
    const launchBtn = document.getElementById('launchProjectileBtn');

    const timeEl = document.getElementById('projTime');
    const rangeEl = document.getElementById('projRange');
    const heightEl = document.getElementById('projHeight');
    const resultEl = document.getElementById('projectileResult');

    function drawScene(points, xMax, yMax) {
        const width = canvas.width;
        const height = canvas.height;
        const marginLeft = 50;
        const marginBottom = 35;
        const marginTop = 20;
        const usableWidth = width - marginLeft - 20;
        const usableHeight = height - marginTop - marginBottom;

        const mapX = (x) => marginLeft + (x / xMax) * usableWidth;
        const mapY = (y) => height - marginBottom - (y / yMax) * usableHeight;

        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = '#0f172a10';
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(marginLeft, marginTop);
        ctx.lineTo(marginLeft, height - marginBottom);
        ctx.lineTo(width - 20, height - marginBottom);
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.font = '12px Arial';
        ctx.fillText('Height (m)', 8, marginTop + 12);
        ctx.fillText('Distance (m)', width - 95, height - 10);

        if (points.length > 1) {
            ctx.strokeStyle = '#2563eb';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(mapX(points[0].x), mapY(points[0].y));
            for (let i = 1; i < points.length; i++) {
                ctx.lineTo(mapX(points[i].x), mapY(points[i].y));
            }
            ctx.stroke();

            const landing = points[points.length - 1];
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(mapX(landing.x), mapY(landing.y), 6, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function simulate() {
        const speed = Math.max(1, Number(speedInput.value) || 1);
        const angleDeg = Math.min(89, Math.max(1, Number(angleInput.value) || 45));

        const angleRad = angleDeg * Math.PI / 180;
        const totalTime = (2 * speed * Math.sin(angleRad)) / g;
        const range = (speed * speed * Math.sin(2 * angleRad)) / g;
        const maxHeight = (speed * speed * Math.sin(angleRad) * Math.sin(angleRad)) / (2 * g);

        const points = [];
        const steps = 180;
        for (let i = 0; i <= steps; i++) {
            const t = (totalTime * i) / steps;
            const x = speed * Math.cos(angleRad) * t;
            const y = speed * Math.sin(angleRad) * t - 0.5 * g * t * t;
            points.push({ x, y: Math.max(0, y) });
        }

        const xMax = Math.max(range, 10) * 1.2;
        const yMax = Math.max(maxHeight, 10) * 1.25;
        drawScene(points, xMax, yMax);

        timeEl.textContent = `${totalTime.toFixed(2)} s`;
        rangeEl.textContent = `${range.toFixed(2)} m`;
        heightEl.textContent = `${maxHeight.toFixed(2)} m`;
        resultEl.textContent = '✅ Calculated TOF, Hmax, and Range.';
    }

    launchBtn.addEventListener('click', simulate);

    [speedInput, angleInput].forEach((input) => {
        input.addEventListener('change', simulate);
    });

    simulate();
}
