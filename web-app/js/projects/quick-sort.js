function getQuickSortHTML() {
    return `
        <div class="project-content">
            <h2>⚡ Quick Sort Visualizer</h2>
            <p class="project-desc">Visualize Quick Sort algorithm with pivot-based partitioning</p>
            <div class="quick-container">
                <div class="input-section">
                    <input type="text" id="quickInput" placeholder="Enter numbers e.g. 64 34 25 12 22">
                    <div class="order-btns">
                        <button class="btn-order active" id="quickBtnAsc">⬆️ Ascending</button>
                        <button class="btn-order" id="quickBtnDesc">⬇️ Descending</button>
                    </div>
                    <button class="btn-sort" id="startQuick">⚡ Sort</button>
                    <button class="btn-random" id="randomQuick">🎲 Random</button>
                </div>

                <div class="speed-section">
                    <label>⚡ Speed:</label>
                    <input type="range" id="quickSpeed" min="100" max="1000" value="400" step="100">
                    <span id="quickSpeedLabel">400ms</span>
                </div>

                <div class="bars-wrapper" id="quickBars"></div>

                <div class="stats-row" id="quickStats"></div>

                <div class="result-display" id="quickResult"></div>
            </div>
        </div>

        <style>
            .quick-container {
                padding: 2rem;
                max-width: 800px;
                margin: 0 auto;
            }

            .quick-container .input-section {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 12px;
                margin-bottom: 1.5rem;
            }

            #quickInput {
                padding: 12px 20px;
                border-radius: 30px;
                background-color: var(--bg-color);
                border: 1px solid var(--border-color);
                color: var(--text-color);
                outline: none;
                font-size: 1rem;
                width: 280px;
            }

            .quick-container .order-btns {
                display: flex;
                gap: 8px;
            }

            .quick-container .btn-order {
                padding: 10px 18px;
                border-radius: 30px;
                border: 2px solid var(--border-color);
                background: var(--surface-color);
                color: var(--text-color);
                cursor: pointer;
                font-weight: 600;
                transition: var(--transition);
            }

            .quick-container .btn-order.active {
                border-color: var(--primary-color);
                background: var(--primary-color);
                color: white;
            }

            .quick-container .btn-sort {
                padding: 12px 24px;
                border-radius: 30px;
                background-color: var(--accent-color);
                border: 1px solid var(--accent-color);
                color: white;
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition);
            }

            .quick-container .btn-sort:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }

            .quick-container .btn-random {
                padding: 12px 24px;
                border-radius: 30px;
                background-color: var(--surface-color);
                border: 1px solid var(--border-color);
                color: var(--text-color);
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition);
            }

            .quick-container .speed-section {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
                margin-bottom: 1.5rem;
                color: var(--text-secondary);
            }

            #quickSpeed {
                width: 150px;
                accent-color: var(--primary-color);
            }

            .quick-container .bars-wrapper {
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

            .quick-container .bar {
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

            .quick-container .bar.pivot {
                background: linear-gradient(180deg, #a855f7, #7e22ce) !important;
            }

            .quick-container .bar.comparing {
                background: linear-gradient(180deg, #f59e0b, #d97706) !important;
            }

            .quick-container .bar.swapping {
                background: linear-gradient(180deg, #ef4444, #dc2626) !important;
            }

            .quick-container .bar.sorted {
                background: linear-gradient(180deg, #10b981, #059669) !important;
            }

            .quick-container .bar-label {
                color: white;
                font-size: 0.8rem;
                font-weight: bold;
                margin-bottom: 6px;
            }

            .quick-container .stats-row {
                display: flex;
                justify-content: center;
                gap: 2rem;
                margin: 1.5rem 0;
                font-size: 1rem;
                color: var(--text-secondary);
            }

            .quick-container .stat-item span {
                font-weight: 700;
                color: var(--primary-color);
            }

            .quick-container .result-display {
                text-align: center;
                font-size: 1.1rem;
                margin-top: 1rem;
                min-height: 40px;
            }

            .quick-container .legend {
                display: flex;
                justify-content: center;
                gap: 1.5rem;
                margin-top: 1rem;
                flex-wrap: wrap;
            }

            .quick-container .legend-item {
                display: flex;
                align-items: center;
                gap: 6px;
                font-size: 0.85rem;
                color: var(--text-secondary);
            }

            .quick-container .legend-dot {
                width: 14px;
                height: 14px;
                border-radius: 3px;
            }
        </style>
    `;
}

function initQuickSort() {
    const input = document.getElementById('quickInput');
    const startBtn = document.getElementById('startQuick');
    const randomBtn = document.getElementById('randomQuick');
    const barsDiv = document.getElementById('quickBars');
    const statsDiv = document.getElementById('quickStats');
    const resultDiv = document.getElementById('quickResult');
    const speedSlider = document.getElementById('quickSpeed');
    const speedLabel = document.getElementById('quickSpeedLabel');
    const btnAsc = document.getElementById('quickBtnAsc');
    const btnDesc = document.getElementById('quickBtnDesc');

    let isAscending = true;
    let isSorting = false;
    let comparisons = 0;
    let swaps = 0;

    speedSlider.addEventListener('input', () => {
        speedLabel.textContent = speedSlider.value + 'ms';
    });

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

    function renderBars(arr, pivotIdx = -1, comparing = [], swapping = [], sorted = []) {
        if (!barsDiv) return;

        const maxVal = Math.max(...arr, 1);
        barsDiv.innerHTML = '';

        arr.forEach((val, i) => {
            const heightPct = Math.max(25, (val / maxVal) * 180);
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = heightPct + 'px';
            bar.style.width = '50px';

            if (swapping.includes(i)) {
                bar.classList.add('swapping');
            } else if (i === pivotIdx) {
                bar.classList.add('pivot');
            } else if (comparing.includes(i)) {
                bar.classList.add('comparing');
            } else if (sorted.includes(i)) {
                bar.classList.add('sorted');
            }

            const label = document.createElement('span');
            label.className = 'bar-label';
            label.textContent = val;
            bar.appendChild(label);

            barsDiv.appendChild(bar);
        });

        if (statsDiv) {
            statsDiv.innerHTML = `
                <div class="stat-item">🔍 Comparisons: <span>${comparisons}</span></div>
                <div class="stat-item">🔄 Swaps: <span>${swaps}</span></div>
            `;
        }
    }

    async function partition(arr, low, high, sortedIndices) {
        const delay = () => parseInt(speedSlider.value);
        const pivot = arr[high];
        let i = low - 1;

        renderBars(arr, high, [], [], sortedIndices);
        await sleep(delay());

        for (let j = low; j < high; j++) {
            comparisons++;
            renderBars(arr, high, [j], [], sortedIndices);
            await sleep(delay());

            const shouldGoLeft = isAscending
                ? arr[j] < pivot
                : arr[j] > pivot;

            if (shouldGoLeft) {
                i++;
                if (i !== j) {
                    swaps++;
                    renderBars(arr, high, [], [i, j], sortedIndices);
                    await sleep(delay());
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
        }

        i++;
        if (i !== high) {
            swaps++;
            renderBars(arr, high, [], [i, high], sortedIndices);
            await sleep(delay());
            [arr[i], arr[high]] = [arr[high], arr[i]];
        }

        return i;
    }

    async function quickSortVisualize(arr, low, high, sortedIndices) {
        if (low < high) {
            const pivotIndex = await partition(arr, low, high, sortedIndices);
            sortedIndices.push(pivotIndex);
            renderBars(arr, -1, [], [], sortedIndices);

            await quickSortVisualize(arr, low, pivotIndex - 1, sortedIndices);
            await quickSortVisualize(arr, pivotIndex + 1, high, sortedIndices);
        } else if (low === high && !sortedIndices.includes(low)) {
            sortedIndices.push(low);
            renderBars(arr, -1, [], [], sortedIndices);
        }
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
        const sortedIndices = [];
        await quickSortVisualize(arr, 0, arr.length - 1, sortedIndices);

        const allSorted = Array.from({ length: arr.length }, (_, i) => i);
        renderBars(arr, -1, [], [], allSorted);

        resultDiv.innerHTML = `
            <p style="color:var(--success-color); font-weight:700; font-size:1.2rem">
                ✅ Sorted: [ ${arr.join(', ')} ]
            </p>
            <div class="legend">
                <div class="legend-item"><div class="legend-dot" style="background:#a855f7"></div> Pivot</div>
                <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div> Comparing</div>
                <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div> Swapping</div>
                <div class="legend-item"><div class="legend-dot" style="background:#10b981"></div> Sorted</div>
            </div>
        `;

        isSorting = false;
        startBtn.disabled = false;
    });

    const initArr = [64, 34, 25, 12, 22, 11, 90];
    input.value = initArr.join(' ');
    renderBars(initArr);
}