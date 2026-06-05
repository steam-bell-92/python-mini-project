function getBinarySearchHTML() {
    return `
        <div class="project-content">
            <h2>🔍 Binary Search Visualizer</h2>
            <p class="project-desc">Visualize how Binary Search finds a target in a sorted array step by step</p>
            <div class="binary-container">
                <div class="input-section">
                    <div class="input-group">
                        <label class="input-label">Array (sorted numbers)</label>
                        <input type="text" id="binaryArray" placeholder="e.g. 2 5 8 12 16 23 38 56">
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
                padding: 1.5rem;
                max-width: 900px;
                margin: 0 auto;
            }

            .input-section {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: flex-end;
                gap: 12px;
                margin-bottom: 1.5rem;
            }

            .input-group {
                display: flex;
                flex-direction: column;
                gap: 5px;
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
                border: 2px solid var(--border-color);
                color: var(--text-color);
                outline: none;
                font-size: 0.9rem;
                width: 280px;
            }

            #binaryTarget {
                padding: 12px 20px;
                border-radius: 30px;
                background-color: var(--bg-color);
                border: 2px solid var(--border-color);
                color: var(--text-color);
                outline: none;
                font-size: 0.9rem;
                width: 120px;
            }

            .btn-search {
                padding: 12px 24px;
                border-radius: 30px;
                background: linear-gradient(135deg, #4CAF50, #45a049);
                border: none;
                color: white;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.2s;
            }

            .btn-search:hover {
                transform: scale(1.02);
            }

            .btn-search:disabled {
                opacity: 0.5;
                cursor: not-allowed;
                transform: none;
            }

            .btn-random {
                padding: 12px 24px;
                border-radius: 30px;
                background-color: var(--surface-color);
                border: 2px solid var(--border-color);
                color: var(--text-color);
                font-weight: 600;
                cursor: pointer;
                transition: all 0.2s;
            }

            .btn-random:hover {
                border-color: #f59e0b;
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
                accent-color: #4CAF50;
            }

            .range-info {
                text-align: center;
                font-size: 0.9rem;
                color: #f59e0b;
                margin-bottom: 0.5rem;
                min-height: 24px;
                font-weight: 500;
            }

            .bars-wrapper {
                display: flex;
                align-items: flex-end;
                justify-content: center;
                gap: 8px;
                padding: 1rem;
                background: var(--surface-color);
                border-radius: 15px;
                border: 2px solid var(--border-color);
                margin-bottom: 1rem;
                min-height: 250px;
                flex-wrap: wrap;
            }

            .bin-bar {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-end;
                width: 55px;
                border-radius: 8px 8px 0 0;
                background: linear-gradient(180deg, #667eea, #764ba2);
                position: relative;
                transition: all 0.3s ease;
                cursor: pointer;
            }

            .bin-bar.low-high {
                background: linear-gradient(180deg, #3b82f6, #2563eb) !important;
                box-shadow: 0 0 10px rgba(59,130,246,0.5);
            }

            .bin-bar.mid {
                background: linear-gradient(180deg, #f59e0b, #d97706) !important;
                box-shadow: 0 0 15px rgba(245,158,11,0.6);
                transform: scale(1.02);
            }

            .bin-bar.found {
                background: linear-gradient(180deg, #10b981, #059669) !important;
                box-shadow: 0 0 20px rgba(16,185,129,0.7);
                transform: scale(1.05);
            }

            .bin-bar.eliminated {
                background: linear-gradient(180deg, #6b7280, #4b5563) !important;
                opacity: 0.4;
            }

            .bin-bar-label {
                color: white;
                font-size: 0.85rem;
                font-weight: bold;
                margin-bottom: 6px;
                z-index: 1;
            }

            .bin-bar-tag {
                position: absolute;
                top: -22px;
                font-size: 0.75rem;
                font-weight: bold;
                color: #f59e0b;
                background: rgba(0,0,0,0.6);
                padding: 2px 6px;
                border-radius: 12px;
                white-space: nowrap;
            }

            .steps-log {
                background: var(--surface-color);
                border: 2px solid var(--border-color);
                border-radius: 12px;
                padding: 1rem;
                margin: 1rem 0;
                max-height: 150px;
                overflow-y: auto;
                font-family: 'Courier New', monospace;
                font-size: 0.85rem;
            }

            .step-entry {
                padding: 5px 0;
                border-bottom: 1px solid var(--border-color);
                color: var(--text-secondary);
            }

            .step-entry:last-child {
                border-bottom: none;
                color: var(--text-color);
                font-weight: 500;
            }

            .result-display {
                text-align: center;
                font-size: 1.1rem;
                font-weight: 600;
                margin-top: 1rem;
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
                font-size: 0.8rem;
                color: var(--text-secondary);
            }

            .legend-dot {
                width: 16px;
                height: 16px;
                border-radius: 4px;
            }
        </style>
    `;
}

function initBinarySearch() {
    console.log('🔍 Binary Search initializing...');
    
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

    if (!barsDiv) {
        console.error('Binary Search elements not found!');
        return;
    }

    speedSlider.addEventListener('input', () => {
        speedLabel.textContent = speedSlider.value + 'ms';
    });

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function renderBars(arr, low, high, mid, found = -1, eliminated = []) {
        if (!barsDiv) return;
        
        const maxVal = Math.max(...arr, 1);
        barsDiv.innerHTML = '';
        
        arr.forEach((val, i) => {
            const heightPct = Math.max(35, (val / maxVal) * 180);
            const bar = document.createElement('div');
            bar.className = 'bin-bar';
            bar.style.height = heightPct + 'px';
            bar.style.width = '55px';
            
            let tag = '';
            
            if (found === i) {
                bar.classList.add('found');
                tag = '✅ FOUND';
            } else if (eliminated.includes(i)) {
                bar.classList.add('eliminated');
            } else if (i === mid && found === -1) {
                bar.classList.add('mid');
                tag = '🎯 MID';
            } else if (low !== undefined && high !== undefined && i >= low && i <= high && found === -1) {
                bar.classList.add('low-high');
                if (i === low) tag = '🔻 LOW';
                if (i === high) tag = '🔺 HIGH';
            } else if (found === -1 && (i < low || i > high)) {
                bar.classList.add('eliminated');
            }
            
            const label = document.createElement('span');
            label.className = 'bin-bar-label';
            label.textContent = val;
            bar.appendChild(label);
            
            if (tag) {
                const tagSpan = document.createElement('span');
                tagSpan.className = 'bin-bar-tag';
                tagSpan.textContent = tag;
                bar.appendChild(tagSpan);
            }
            
            barsDiv.appendChild(bar);
        });
        
        if (mid >= 0 && found === -1 && arr[mid] !== undefined) {
            rangeInfo.innerHTML = `🔎 <strong style="color:#f59e0b">Low:</strong> index ${low} (${arr[low]}) &nbsp;|&nbsp; <strong style="color:#f59e0b">Mid:</strong> index ${mid} (${arr[mid]}) &nbsp;|&nbsp; <strong style="color:#f59e0b">High:</strong> index ${high} (${arr[high]})`;
        }
    }

    function addStep(msg) {
        const entry = document.createElement('div');
        entry.className = 'step-entry';
        entry.innerHTML = msg;
        stepsLog.appendChild(entry);
        stepsLog.scrollTop = stepsLog.scrollHeight;
    }

    function clearLogs() {
        stepsLog.innerHTML = '';
    }

    async function binarySearchVisualize(arr, target) {
        let low = 0;
        let high = arr.length - 1;
        let step = 1;
        const eliminated = [];
        
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            renderBars(arr, low, high, mid, -1, eliminated);
            addStep(`📌 <strong>Step ${step++}:</strong> low=${low}, high=${high}, mid=${mid} → arr[${mid}]=${arr[mid]}`);
            await sleep(parseInt(speedSlider.value));
            
            if (arr[mid] === target) {
                renderBars(arr, low, high, -1, mid, eliminated);
                addStep(`✅ <span style="color:#10b981">Found ${target} at index ${mid}!</span>`);
                return mid;
            } else if (arr[mid] > target) {
                addStep(`⬅️ ${arr[mid]} > ${target} → Search LEFT half`);
                for (let i = mid; i <= high; i++) {
                    if (!eliminated.includes(i)) eliminated.push(i);
                }
                high = mid - 1;
            } else {
                addStep(`➡️ ${arr[mid]} < ${target} → Search RIGHT half`);
                for (let i = low; i <= mid; i++) {
                    if (!eliminated.includes(i)) eliminated.push(i);
                }
                low = mid + 1;
            }
            await sleep(parseInt(speedSlider.value));
        }
        
        renderBars(arr, 0, arr.length - 1, -1, -1, [...Array(arr.length).keys()]);
        addStep(`❌ <span style="color:#f44336">${target} not found in array.</span>`);
        return -1;
    }

    randomBtn.addEventListener('click', () => {
        const length = Math.floor(Math.random() * 8) + 5;
        let arr = [];
        let val = Math.floor(Math.random() * 20) + 5;
        for (let i = 0; i < length; i++) {
            val += Math.floor(Math.random() * 15) + 1;
            arr.push(val);
        }
        arrayInput.value = arr.join(' ');
        targetInput.value = arr[Math.floor(Math.random() * arr.length)];
        renderBars(arr, 0, arr.length - 1, -1);
        clearLogs();
        resultDiv.innerHTML = '';
        rangeInfo.innerHTML = '';
        addStep(`🎲 Random array generated: [${arr.join(', ')}]`);
        addStep(`🎯 Target: ${targetInput.value}`);
    });

    searchBtn.addEventListener('click', async () => {
        if (isSearching) return;

        const rawArr = arrayInput.value.trim();
        const rawTarget = targetInput.value.trim();

        if (!rawArr || !rawTarget) {
            resultDiv.innerHTML = `<p style="color:#f44336">⚠️ Please enter array and target!</p>`;
            return;
        }

        let arr = rawArr.split(/\s+/).map(Number);
        const target = Number(rawTarget);

        if (arr.some(isNaN) || isNaN(target)) {
            resultDiv.innerHTML = `<p style="color:#f44336">⚠️ Please enter valid integers only!</p>`;
            return;
        }

        // Sort the array for binary search
        arr = [...new Set(arr)].sort((a, b) => a - b);
        arrayInput.value = arr.join(' ');

        isSearching = true;
        searchBtn.disabled = true;
        randomBtn.disabled = true;
        clearLogs();
        resultDiv.innerHTML = `<p style="color:var(--text-secondary)">⏳ Searching...</p>`;
        rangeInfo.innerHTML = '';

        renderBars(arr, 0, arr.length - 1, -1);
        const foundIdx = await binarySearchVisualize(arr, target);

        if (foundIdx !== -1) {
            resultDiv.innerHTML = `
                <div style="background: rgba(16,185,129,0.1); padding: 1rem; border-radius: 12px;">
                    <p style="color:#10b981; font-size: 1.2rem;">✅ Found! <strong>${target}</strong> is at index <strong>${foundIdx}</strong> (position ${foundIdx + 1})</p>
                    <div class="legend">
                        <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div> Mid element</div>
                        <div class="legend-item"><div class="legend-dot" style="background:#3b82f6"></div> Search range</div>
                        <div class="legend-item"><div class="legend-dot" style="background:#10b981"></div> Found</div>
                        <div class="legend-item"><div class="legend-dot" style="background:#6b7280"></div> Eliminated</div>
                    </div>
                </div>
            `;
        } else {
            resultDiv.innerHTML = `<p style="color:#f44356">❌ Not Found! <strong>${target}</strong> is not in the array.</p>`;
        }

        isSearching = false;
        searchBtn.disabled = false;
        randomBtn.disabled = false;
    });

    // Initialize with default array
    const initArr = [7, 15, 20, 30, 36, 56, 65, 98];
    arrayInput.value = initArr.join(' ');
    targetInput.value = 56;
    renderBars(initArr, 0, initArr.length - 1, -1);
    clearLogs();
    addStep(`✨ Binary Search Visualizer Ready!`);
    addStep(`📊 Array: [${initArr.join(', ')}]`);
    addStep(`🎯 Try searching for: 56`);
    
    console.log('✅ Binary Search Visualizer initialized');
}

window.getBinarySearchHTML = getBinarySearchHTML;
window.initBinarySearch = initBinarySearch;