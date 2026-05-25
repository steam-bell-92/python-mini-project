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

    function projectileStats(speed, angle) {
        const angleRad = angle * Math.PI / 180;
        const flightTime = (2 * speed * Math.sin(angleRad)) / g;
        const maxHeight = (speed * speed * Math.sin(angleRad) ** 2) / (2 * g);
        const range = (speed * speed * Math.sin(2 * angleRad)) / g;
        return { flightTime, maxHeight, range };
    }

    function trajectoryPoints(speed, angle, steps = 120) {
        const angleRad = angle * Math.PI / 180;
        const { flightTime } = projectileStats(speed, angle);

        const x = [];
        const y = [];

        for (let i = 0; i <= steps; i++) {
            const t = (flightTime * i) / steps;
            x.push(speed * Math.cos(angleRad) * t);
            y.push(speed * Math.sin(angleRad) * t - 0.5 * g * t * t);
        }

        return { x, y, flightTime };
    }

    function drawTrajectory(x, y) {
        const width = canvas.width;
        const height = canvas.height;

        const marginLeft = 50;
        const marginBottom = 35;
        const marginTop = 20;

        const xMax = Math.max(...x, 10) * 1.1;
        const yMax = Math.max(...y, 10) * 1.1;

        const usableWidth = width - marginLeft - 20;
        const usableHeight = height - marginTop - marginBottom;

        // Compute a uniform scale (pixels per meter) so vertical and horizontal scaling is identical
        const scale = Math.min(usableWidth / xMax, usableHeight / yMax);

        const mapX = v => marginLeft + v * scale;
        const mapY = v => height - marginBottom - v * scale;

        ctx.clearRect(0, 0, width, height);

        ctx.fillStyle = '#0f172a10';
        ctx.fillRect(0, 0, width, height);

        ctx.strokeStyle = "#64748b";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.moveTo(marginLeft, marginTop);
        ctx.lineTo(marginLeft, height - marginBottom);
        ctx.lineTo(width - 20, height - marginBottom);
        ctx.stroke();

        ctx.fillStyle = "#64748b";
        ctx.font = "12px Arial";
        ctx.fillText("Height (m)", 8, marginTop + 12);
        ctx.fillText("Distance (m)", width - 95, height - 10);

        if (x.length > 1) {
            ctx.strokeStyle = "#2563eb";
            ctx.lineWidth = 3;

            ctx.beginPath();
            ctx.moveTo(mapX(x[0]), mapY(y[0]));

            for (let i = 1; i < x.length; i++) {
                ctx.lineTo(mapX(x[i]), mapY(y[i]));
            }

            ctx.stroke();

            const last = x.length - 1;
            ctx.fillStyle = "#ef4444";
            ctx.beginPath();
            ctx.arc(mapX(x[last]), mapY(y[last]), 6, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function simulate() {
        const speed = Number(speedInput.value);
        const angle = Number(angleInput.value);

        // Reset previous states
        resultEl.style.color = "";
        
        // Comprehensive Validation Check
        if (isNaN(speed) || speed < 1 || speed > 200) {
            resultEl.textContent = "❌ Error: Speed must be between 1 and 200 m/s.";
            resultEl.style.color = "#ef4444";
            return;
        }

        if (isNaN(angle) || angle < 1 || angle > 89) {
            resultEl.textContent = "❌ Error: Angle must be between 1° and 89°.";
            resultEl.style.color = "#ef4444";
            return;
        }

        const stats = projectileStats(speed, angle);
        const points = trajectoryPoints(speed, angle);

        const xMax = Math.max(...points.x, 10) * 1.1;
        const yMax = Math.max(...points.y, 10) * 1.1;

        const marginLeft = 50;
        const marginBottom = 35;
        const marginTop = 20;

        const width = canvas.width;
        const height = canvas.height;

        const usableWidth = width - marginLeft - 20;
        const usableHeight = height - marginTop - marginBottom;

        
        const scale = Math.min(usableWidth / xMax, usableHeight / yMax);

        const mapX = v => marginLeft + v * scale;
        const mapY = v => height - marginBottom - v * scale;

        drawTrajectory(points.x, points.y);

        timeEl.textContent = `${stats.flightTime.toFixed(2)} s`;
        heightEl.textContent = `${stats.maxHeight.toFixed(2)} m`;
        rangeEl.textContent = `${stats.range.toFixed(2)} m`;

        resultEl.textContent = "Launched...";

        let i = 0;

        function animate() {
            ctx.clearRect(0, 0, width, height);

            ctx.fillStyle = '#0f172a10';
            ctx.fillRect(0, 0, width, height);

            ctx.strokeStyle = "#64748b";
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.moveTo(marginLeft, marginTop);
            ctx.lineTo(marginLeft, height - marginBottom);
            ctx.lineTo(width - 20, height - marginBottom);
            ctx.stroke();

            ctx.strokeStyle = "#2563eb";
            ctx.lineWidth = 3;
            ctx.beginPath();

            for (let j = 0; j < i; j++) {
                const x = mapX(points.x[j]);
                const y = mapY(points.y[j]);

                if (j === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }

            ctx.stroke();

            if (i > 0) {
                const last = i - 1;

                ctx.fillStyle = "#ef4444";
                ctx.beginPath();
                ctx.arc(mapX(points.x[last]), mapY(points.y[last]), 6, 0, Math.PI * 2);
                ctx.fill();
            }

            i++;

            if (i <= points.x.length) {
                requestAnimationFrame(animate);
            }
        }

        animate();
    }

    launchBtn.addEventListener('click', simulate);
}