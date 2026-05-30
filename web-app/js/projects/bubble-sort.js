function getBubbleSortHTML() {
    return `
        <div class="project-content">
            <h2>🔄 Bubble Sort Visualizer</h2>
            <p class="project-desc">Visualize Bubble Sort algorithm with real-time bar animations</p>
            <div class="bubble-container">
                <div class="input-section">
                    <input type="text" id="bubbleInput" placeholder="Enter numbers e.g. 64 34 25 12 22">
                    <div class="order-btns">
                        <button class="btn-order active" id="btnAsc">⬆️ Ascending</button>
                        <button class="btn-order" id="btnDesc">⬇️ Descending</button>
                    </div>
                    <button class="btn-sort" id="startBubble">🔄 Sort</button>
                    <button class="btn-random" id="randomBubble">🎲 Random</button>
                </div>

                <div class="speed-section">
                    <label>⚡ Speed:</label>
                    <input type="range" id="bubbleSpeed" min="100" max="1000" value="400" step="100">
                    <span id="speedLabel">400ms</span>
                </div>

                <div class="bars-wrapper" id="bubbleBars"></div>

                <div class="stats-row" id="bubbleStats"></div>

                <div class="result-display" id="bubbleResult"></div>
            </div>
        </div>

        <style>
            .bubble-container {
                padding: 2rem;
                max-width: 800px;
                margin: 0 auto;
            }

            .input-section {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 12px;
                margin-bottom: 1.5rem;
            }

            #bubbleInput {
                padding: 12px 20px;
                border-radius: 30px;
                background-color: var(--bg-color);
                border: 1px solid var(--border-color);
                color: var(--text-color);
                outline: none;
                font-size: 1rem;
                width: 280px;
            }

            .order-btns {
                display: flex;
                gap: 8px;
            }

            .btn-order {
                padding: 10px 18px;
                border-radius: 30px;
                border: 2px solid var(--border-color);
                background: var(--surface-color);
                color: var(--text-color);
                cursor: pointer;
                font-weight: 600;
                transition: var(--transition);
            }

            .btn-order.active {
                border-color: var(--primary-color);
                background: var(--primary-color);
                color: white;
            }

            .btn-sort {
                padding: 12px 24px;
                border-radius: 30px;
                background-color: var(--accent-color);
                border: 1px solid var(--accent-color);
                color: white;
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition);
            }

            .btn-sort:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }

            .btn-random {
                padding: 12px 24px;
                border-radius: 30px;
                background-color: var(--surface-color);
                border: 1px solid var(--border-color);
                color: var(--text-color);
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition);
            }

            .speed-section {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
                margin-bottom: 1.5rem;
                color: var(--text-secondary);
            }

            #bubbleSpeed {
                width: 150px;
                accent-color: var(--primary-color);
            }

            .bars-wrapper {
                display: flex;
                align-items: flex-end;
                justify-content: center;
                gap: 6px;
                height: 220px;
                padding: 1rem;
                background: var(--surface-color);
                border-radius: 15px;
                border: 2px solid var(--border-color);
                margin-bottom: 1rem;
                min-height: 220px;
            }

            .bar {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                border-radius: 6px 6px 0 0;
                transition: height 0.3s ease;
                background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
                min-width: 36px;
                position: relative;
            }

            .bar.comparing {
                background: linear-gradient(180deg, #f59e0b, #d97706) !important;
            }

            .bar.swapping {
                background: linear-gradient(180deg, #ef4444, #dc2626) !important;
            }

            .bar.sorted {
                background: linear-gradient(180deg, #10b981, #059669) !important;
            }

            .bar-label {
                color: var(--text-color);
                font-size: 0.8rem;
                font-weight: 700;
                margin-top: 4px;
                position: absolute;
                bottom: -22px;
            }

            .stats-row {
                display: flex;
                justify-content: center;
                gap: 2rem;
                margin: 1.5rem 0;
                font-size: 1rem;
                color: var(--text-secondary);
            }

            .stat-item span {
                font-weight: 700;
                color: var(--primary-color);
            }

            .result-display {
                text-align: center;
                font-size: 1.1rem;
                margin-top: 1rem;
                min-height: 40px;
            }

            .legend {
                display: flex;
                justify-content: center;
                gap: 1.5rem;
                margin-top: 1rem;
                flex-wrap: wrap;
            }

            .legend-item {
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 0.85rem;
                color: var(--text-secondary);
            }

            .legend-dot {
                width: 14px;
                height: 14px;
                border-radius: 3px;
            }
        </style>
    `;
}

function initBubbleSort() {
    const input = document.getElementById('bubbleInput');
    const startBtn = document.getElementById('startBubble');
    const randomBtn = document.getElementById('randomBubble');
    const barsDiv = document.getElementById('bubbleBars');
    const statsDiv = document.getElementById('bubbleStats');
    const resultDiv = document.getElementById('bubbleResult');
    const speedSlider = document.getElementById('bubbleSpeed');
    const speedLabel = document.getElementById('speedLabel');
    const btnAsc = document.getElementById('btnAsc');
    const btnDesc = document.getElementById('btnDesc');

    let isAscending = true;
    let isSorting = false;
    let comparisons = 0;
    let swaps = 0;

    // Speed slider
    speedSlider.addEventListener('input', () => {
        speedLabel.textContent = speedSlider.value + 'ms';
    });

    // Order toggle
    btnAsc.addEventListener('click', () => {
        isAscending = true;
        btnAsc.classList.add('active');
        btnDesc.classList.remove('active');
    });

    btnDesc.addEventListener('click', () => {
        isAscending = false;
        btnDesc.classList.add('active');
        btnAsc.classList.remove('active');
    });

    // Random array
    randomBtn.addEventListener('click', () => {
        const arr = Array.from({ length: 8 }, () => Math.floor(Math.random() * 90) + 10);
        input.value = arr.join(' ');
        renderBars(arr);
        resultDiv.innerHTML = '';
        statsDiv.innerHTML = '';
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function renderBars(arr, comparing = [], swapping = [], sorted = []) {
        const maxVal = Math.max(...arr);
        barsDiv.innerHTML = arr.map((val, i) => {
            const heightPct = Math.max(15, (val / maxVal) * 180);
            let cls = 'bar';
            if (swapping.includes(i)) cls += ' swapping';
            else if (comparing.includes(i)) cls += ' comparing';
            else if (sorted.includes(i)) cls += ' sorted';
            return `<div class="${cls}" style="height:${heightPct}px">
                        <span class="bar-label">${val}</span>
                    </div>`;
        }).join('');

        statsDiv.innerHTML = `
            <div class="stat-item">🔍 Comparisons: <span>${comparisons}</span></div>
            <div class="stat-item">🔄 Swaps: <span>${swaps}</span></div>
        `;
    }

    async function bubbleSortVisualize(arr) {
        const n = arr.length;
        const sortedIndices = [];
        const delay = () => parseInt(speedSlider.value);

        for (let i = 0; i < n; i++) {
            let swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                comparisons++;
                renderBars(arr, [j, j + 1], [], sortedIndices);
                await sleep(delay());

                const shouldSwap = isAscending
                    ? arr[j] > arr[j + 1]
                    : arr[j] < arr[j + 1];

                if (shouldSwap) {
                    swaps++;
                    renderBars(arr, [], [j, j + 1], sortedIndices);
                    await sleep(delay());
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swapped = true;
                }
            }
            sortedIndices.push(n - i - 1);
            renderBars(arr, [], [], sortedIndices);
            if (!swapped) break;
        }

        // Mark all sorted
        const allSorted = Array.from({ length: n }, (_, i) => i);
        renderBars(arr, [], [], allSorted);
        return arr;
    }

    startBtn.addEventListener('click', async () => {
        if (isSorting) return;

        const raw = input.value.trim();
        if (!raw) {
            resultDiv.innerHTML = `<p style="color:var(--danger-color)">⚠️ Please enter numbers!</p>`;
            return;
        }

        const arr = raw.split(/\s+/).map(Number);
        if (arr.some(isNaN)) {
            resultDiv.innerHTML = `<p style="color:var(--danger-color)">⚠️ Please enter valid integers only!</p>`;
            return;
        }

        if (arr.length < 2) {
            resultDiv.innerHTML = `<p style="color:var(--danger-color)">⚠️ Enter at least 2 numbers!</p>`;
            return;
        }

        isSorting = true;
        comparisons = 0;
        swaps = 0;
        startBtn.disabled = true;
        resultDiv.innerHTML = `<p style="color:var(--text-secondary)">⏳ Sorting...</p>`;

        renderBars([...arr]);
        const sorted = await bubbleSortVisualize([...arr]);

        resultDiv.innerHTML = `
            <p style="color:var(--success-color); font-weight:700; font-size:1.2rem">
                ✅ Sorted: [ ${sorted.join(', ')} ]
            </p>
            <div class="legend">
                <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div> Comparing</div>
                <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div> Swapping</div>
                <div class="legend-item"><div class="legend-dot" style="background:#10b981"></div> Sorted</div>
            </div>
        `;

        isSorting = false;
        startBtn.disabled = false;
    });

    // Initial random render
    const initArr = [64, 34, 25, 12, 22, 11, 90];
    input.value = initArr.join(' ');
    renderBars(initArr);
}