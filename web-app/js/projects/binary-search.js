function getBinarySearchHTML() {
    return `
        <div class="project-content">
            <h2>🔍 Binary Search Visualizer</h2>
            <p class="project-desc">Visualize how Binary Search finds a target in a sorted array step by step</p>
            <div class="binary-container">
                <div class="input-section">
    <div class="input-group">
        <label class="input-label">Array</label>
        <input type="text" id="binaryArray" placeholder="Enter sorted numbers e.g. 2 5 8 12 16 23">
    </div>
    <div class="input-group">
        <label class="input-label">Target</label>
        <input type="number" id="binaryTarget" placeholder="Target number">
    </div>
    <button class="btn-search" id="startBinary">🔍 Search</button>
    <button class="btn-random" id="randomBinary">🎲 Random</button>
</div>

                <div class="speed-section">
                    <label>⚡ Speed:</label>
                    <input type="range" id="binarySpeed" min="300" max="1500" value="700" step="100">
                    <span id="binarySpeedLabel">700ms</span>
                </div>

                <div class="range-info" id="rangeInfo"></div>

                <div class="bars-wrapper" id="binaryBars"></div>

                <div class="steps-log" id="stepsLog"></div>

                <div class="result-display" id="binaryResult"></div>
            </div>
        </div>

        <style>
            .binary-container {
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
            .input-group {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                gap: 4px;
            }

            .input-label {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: var(--text-secondary);
                padding-left: 12px;
                }

            #binaryArray {
                padding: 12px 20px;
                border-radius: 30px;
                background-color: var(--bg-color);
                border: 1px solid var(--border-color);
                color: var(--text-color);
                outline: none;
                font-size: 1rem;
                width: 280px;
            }

            #binaryTarget {
                padding: 12px 20px;
                border-radius: 30px;
                background-color: var(--bg-color);
                border: 1px solid var(--border-color);
                color: var(--text-color);
                outline: none;
                font-size: 1rem;
                width: 150px;
            }

            .btn-search {
                padding: 12px 24px;
                border-radius: 30px;
                background-color: var(--accent-color);
                border: 1px solid var(--accent-color);
                color: white;
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition);
            }

            .btn-search:disabled {
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

            #binarySpeed {
                width: 150px;
                accent-color: var(--primary-color);
            }

            .range-info {
                text-align: center;
                font-size: 0.95rem;
                color: var(--text-secondary);
                margin-bottom: 0.5rem;
                min-height: 24px;
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

            .bin-bar {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                border-radius: 6px 6px 0 0;
                background: linear-gradient(180deg, var(--primary-color), var(--secondary-color));
                min-width: 40px;
                position: relative;
                transition: background 0.3s ease;
            }

            .bin-bar.low-high {
                background: linear-gradient(180deg, #3b82f6, #2563eb) !important;
                opacity: 0.6;
            }

            .bin-bar.mid {
                background: linear-gradient(180deg, #f59e0b, #d97706) !important;
            }

            .bin-bar.found {
                background: linear-gradient(180deg, #10b981, #059669) !important;
            }

            .bin-bar.eliminated {
                background: var(--border-color) !important;
                opacity: 0.3;
            }

            .bin-bar-label {
                color: var(--text-color);
                font-size: 0.85rem;
                font-weight: 700;
                position: absolute;
                bottom: -22px;
            }

            .bin-bar-tag {
                position: absolute;
                top: -22px;
                font-size: 0.7rem;
                font-weight: 700;
                color: var(--accent-color);
            }

            .steps-log {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 12px;
                padding: 1rem 1.5rem;
                margin: 1rem 0;
                max-height: 150px;
                overflow-y: auto;
                font-family: 'Courier New', monospace;
                font-size: 0.9rem;
                min-height: 60px;
            }

            .step-entry {
                padding: 4px 0;
                border-bottom: 1px solid var(--border-color);
                color: var(--text-secondary);
            }

            .step-entry:last-child {
                border-bottom: none;
                color: var(--text-color);
                font-weight: 600;
            }

            .result-display {
                text-align: center;
                font-size: 1.2rem;
                font-weight: 700;
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

function initBinarySearch() {
    const arrayInput = document.getElementById('binaryArray');
    const targetInput = document.getElementById('binaryTarget');
    const searchBtn = document.getElementById('startBinary');
    const randomBtn = document.getElementById('randomBinary');
    const barsDiv = document.getElementById('binaryBars');
    const stepsLog = document.getElementById('stepsLog');
    const resultDiv = document.getElementById('binaryResult');
    const speedSlider = document.getElementById('binarySpeed');
    const speedLabel = document.getElementById('binarySpeedLabel');
    const rangeInfo = document.getElementById('rangeInfo');

    let isSearching = false;

    speedSlider.addEventListener('input', () => {
        speedLabel.textContent = speedSlider.value + 'ms';
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function renderBars(arr, low, high, mid, found = -1, eliminated = []) {
        const maxVal = Math.max(...arr);
        barsDiv.innerHTML = arr.map((val, i) => {
            const heightPct = Math.max(15, (val / maxVal) * 180);
            let cls = 'bin-bar';
            let tag = '';

            if (found === i) {
                cls += ' found';
                tag = '✅';
            } else if (eliminated.includes(i)) {
                cls += ' eliminated';
            } else if (i === mid) {
                cls += ' mid';
                tag = 'MID';
            } else if (i >= low && i <= high) {
                cls += ' low-high';
            } else {
                cls += ' eliminated';
            }

            if (i === low && found === -1 && !eliminated.includes(i)) tag = tag || 'LOW';
            if (i === high && found === -1 && !eliminated.includes(i)) tag = tag || 'HIGH';

            return `<div class="${cls}" style="height:${heightPct}px">
                        ${tag ? `<span class="bin-bar-tag">${tag}</span>` : ''}
                        <span class="bin-bar-label">${val}</span>
                    </div>`;
        }).join('');

        if (mid >= 0 && found === -1) {
            rangeInfo.textContent = `🔎 Low: index ${low} (${arr[low]})  |  Mid: index ${mid} (${arr[mid]})  |  High: index ${high} (${arr[high]})`;
        }
    }

    function addStep(msg) {
        const entry = document.createElement('div');
        entry.className = 'step-entry';
        entry.textContent = msg;
        stepsLog.appendChild(entry);
        stepsLog.scrollTop = stepsLog.scrollHeight;
    }

    async function binarySearchVisualize(arr, target) {
        let low = 0;
        let high = arr.length - 1;
        let step = 1;
        const eliminated = [];
        const delay = () => parseInt(speedSlider.value);

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            renderBars(arr, low, high, mid, -1, eliminated);
            addStep(`Step ${step++}: low=${low}, high=${high}, mid=${mid} → arr[mid]=${arr[mid]}`);
            await sleep(delay());

            if (arr[mid] === target) {
                renderBars(arr, low, high, -1, mid, eliminated);
                addStep(`✅ Found ${target} at index ${mid}!`);
                return mid;
            } else if (arr[mid] > target) {
                addStep(`${arr[mid]} > ${target} → Search LEFT half`);
                for (let i = mid; i <= high; i++) eliminated.push(i);
                high = mid - 1;
            } else {
                addStep(`${arr[mid]} < ${target} → Search RIGHT half`);
                for (let i = low; i <= mid; i++) eliminated.push(i);
                low = mid + 1;
            }
            await sleep(delay());
        }

        renderBars(arr, 0, arr.length - 1, -1, -1, Array.from({ length: arr.length }, (_, i) => i));
        addStep(`❌ ${target} not found in array.`);
        return -1;
    }

    randomBtn.addEventListener('click', () => {
        const arr = Array.from({ length: 8 }, (_, i) => (i + 1) * Math.floor(Math.random() * 10 + 5))
            .sort((a, b) => a - b);
        arrayInput.value = arr.join(' ');
        targetInput.value = arr[Math.floor(Math.random() * arr.length)];
        renderBars(arr, 0, arr.length - 1, -1);
        stepsLog.innerHTML = '';
        resultDiv.innerHTML = '';
        rangeInfo.textContent = '';
    });

    searchBtn.addEventListener('click', async () => {
        if (isSearching) return;

        const rawArr = arrayInput.value.trim();
        const rawTarget = targetInput.value.trim();

        if (!rawArr || !rawTarget) {
            resultDiv.innerHTML = `<p style="color:var(--danger-color)">⚠️ Please enter array and target!</p>`;
            return;
        }

        const arr = rawArr.split(/\s+/).map(Number);
        const target = Number(rawTarget);

        if (arr.some(isNaN) || isNaN(target)) {
            resultDiv.innerHTML = `<p style="color:var(--danger-color)">⚠️ Please enter valid integers only!</p>`;
            return;
        }

        if (JSON.stringify(arr) !== JSON.stringify([...arr].sort((a, b) => a - b))) {
            resultDiv.innerHTML = `<p style="color:var(--danger-color)">⚠️ Array must be sorted for Binary Search!</p>`;
            return;
        }

        isSearching = true;
        searchBtn.disabled = true;
        stepsLog.innerHTML = '';
        resultDiv.innerHTML = `<p style="color:var(--text-secondary)">⏳ Searching...</p>`;
        rangeInfo.textContent = '';

        renderBars(arr, 0, arr.length - 1, -1);
        const foundIdx = await binarySearchVisualize(arr, target);

        if (foundIdx !== -1) {
            resultDiv.innerHTML = `
                <p style="color:var(--success-color)">✅ Found! <strong>${target}</strong> is at index <strong>${foundIdx}</strong> (position ${foundIdx + 1})</p>
                <div class="legend">
                    <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div> Mid element</div>
                    <div class="legend-item"><div class="legend-dot" style="background:#3b82f6; opacity:0.6"></div> Search range</div>
                    <div class="legend-item"><div class="legend-dot" style="background:#10b981"></div> Found</div>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `
                <p style="color:var(--danger-color)">❌ Not Found! <strong>${target}</strong> is not in the array.</p>
            `;
        }

        isSearching = false;
        searchBtn.disabled = false;
    });

    // Initial render
    const initArr = [2, 5, 8, 12, 16, 23, 38, 56];
    arrayInput.value = initArr.join(' ');
    targetInput.value = 23;
    renderBars(initArr, 0, initArr.length - 1, -1);
}