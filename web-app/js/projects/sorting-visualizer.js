function getSortingVisualizerHTML() {
    return `
        <div class="project-content">
            <h2>📊 Multi-Algorithm Sorting Visualizer</h2>
            <p class="project-desc">Compare and visualize different sorting algorithms in real-time</p>
            <div class="sorting-container">
                <div class="input-section">
                    <div class="control-group">
                        <label for="sortAlgo">🔀 Algorithm:</label>
                        <select id="sortAlgo" class="select-algo">
                            <option value="bubble">Bubble Sort</option>
                            <option value="selection">Selection Sort</option>
                            <option value="insertion">Insertion Sort</option>
                            <option value="quick">Quick Sort</option>
                            <option value="merge">Merge Sort</option>
                            <option value="heap">Heap Sort</option>
                        </select>
                    </div>
                    
                    <div class="control-group">
                        <label for="arraySize">📏 Array Size:</label>
                        <input type="range" id="arraySize" min="5" max="30" value="10">
                        <span id="sizeLabel">10</span>
                    </div>

                    <div class="control-group">
                        <label for="sortSpeed">⚡ Speed:</label>
                        <input type="range" id="sortSpeed" min="50" max="1000" value="300" step="50">
                        <span id="speedLabel">300ms</span>
                    </div>
                </div>

                <div class="input-section custom-input-row">
                    <input type="text" id="customInput" placeholder="Enter custom numbers e.g. 64 34 25 12 22">
                    <div class="order-btns">
                        <button class="btn-order active" id="sortAsc">⬆️ Ascending</button>
                        <button class="btn-order" id="sortDesc">⬇️ Descending</button>
                    </div>
                    <button class="btn-sort" id="startSort">⚡ Sort</button>
                    <button class="btn-random" id="randomSort">🎲 Random</button>
                    <button class="btn-reset" id="resetSort">🔄 Reset</button>
                </div>

                <div class="info-panel" id="algoInfo">
                    <div class="info-item">⏳ Time Complexity: <span id="timeComplexity">O(N²)</span></div>
                    <div class="info-item">💾 Space Complexity: <span id="spaceComplexity">O(1)</span></div>
                </div>

                <div class="bars-wrapper" id="sortBars"></div>

                <div class="stats-row" id="sortStats"></div>

                <div class="result-display" id="sortResult"></div>
            </div>
        </div>

        <style>
            .sorting-container {
                padding: 2rem;
                max-width: 850px;
                margin: 0 auto;
            }

            .input-section {
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                align-items: center;
                gap: 20px;
                margin-bottom: 1.5rem;
            }

            .custom-input-row {
                gap: 12px;
            }

            .control-group {
                display: flex;
                align-items: center;
                gap: 8px;
                color: var(--text-color);
            }

            .select-algo {
                padding: 8px 16px;
                border-radius: 20px;
                background-color: var(--surface-color);
                border: 1px solid var(--border-color);
                color: var(--text-color);
                outline: none;
                cursor: pointer;
                font-weight: 600;
            }

            #customInput {
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

            .btn-random, .btn-reset {
                padding: 12px 24px;
                border-radius: 30px;
                background-color: var(--surface-color);
                border: 1px solid var(--border-color);
                color: var(--text-color);
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition);
            }

            .info-panel {
                display: flex;
                justify-content: center;
                gap: 2rem;
                margin-bottom: 1.5rem;
                padding: 1rem;
                background: var(--surface-color);
                border-radius: 12px;
                border: 1px solid var(--border-color);
            }

            .info-item {
                font-weight: 600;
                color: var(--text-secondary);
            }

            .info-item span {
                color: var(--primary-color);
            }

            .bars-wrapper {
                display: flex;
                align-items: flex-end;
                justify-content: center;
                gap: 6px;
                height: 250px;
                padding: 1rem;
                background: var(--surface-color);
                border-radius: 15px;
                border: 2px solid var(--border-color);
                margin-bottom: 1rem;
                min-height: 250px;
            }

            .bar {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
                justify-content: flex-end !important;
                border-radius: 6px 6px 0 0 !important;
                background: linear-gradient(180deg, #667eea, #764ba2) !important;
                position: relative !important;
                transition: all 0.2s ease !important;
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
                color: white !important;
                font-size: 0.8rem !important;
                font-weight: bold !important;
                margin-bottom: 6px !important;
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

function initSortingVisualizer() {
    const sortAlgo = document.getElementById('sortAlgo');
    const arraySize = document.getElementById('arraySize');
    const sizeLabel = document.getElementById('sizeLabel');
    const sortSpeed = document.getElementById('sortSpeed');
    const speedLabel = document.getElementById('speedLabel');
    const customInput = document.getElementById('customInput');
    const sortAsc = document.getElementById('sortAsc');
    const sortDesc = document.getElementById('sortDesc');
    const startSort = document.getElementById('startSort');
    const randomSort = document.getElementById('randomSort');
    const resetSort = document.getElementById('resetSort');
    const sortBars = document.getElementById('sortBars');
    const sortStats = document.getElementById('sortStats');
    const sortResult = document.getElementById('sortResult');
    const timeComplexity = document.getElementById('timeComplexity');
    const spaceComplexity = document.getElementById('spaceComplexity');

    let isAscending = true;
    let isSorting = false;
    let cancelSorting = false;
    let comparisons = 0;
    let swaps = 0;
    let array = [];

    const complexities = {
        bubble: { time: "O(N²)", space: "O(1)" },
        selection: { time: "O(N²)", space: "O(1)" },
        insertion: { time: "O(N²)", space: "O(1)" },
        quick: { time: "O(N log N) avg / O(N²) worst", space: "O(log N)" },
        merge: { time: "O(N log N)", space: "O(N)" },
        heap: { time: "O(N log N)", space: "O(1)" }
    };

    // Update complexities when algorithm changes
    sortAlgo.addEventListener('change', () => {
        const algo = sortAlgo.value;
        timeComplexity.textContent = complexities[algo].time;
        spaceComplexity.textContent = complexities[algo].space;
    });

    // Speed slider
    sortSpeed.addEventListener('input', () => {
        speedLabel.textContent = sortSpeed.value + 'ms';
    });

    // Size slider
    arraySize.addEventListener('input', () => {
        sizeLabel.textContent = arraySize.value;
        if (!isSorting) {
            generateRandomArray();
        }
    });

    // Order toggle
    sortAsc.addEventListener('click', () => {
        isAscending = true;
        sortAsc.classList.add('active');
        sortDesc.classList.remove('active');
    });

    sortDesc.addEventListener('click', () => {
        isAscending = false;
        sortDesc.classList.add('active');
        sortAsc.classList.remove('active');
    });

    // Generate random array
    function generateRandomArray() {
        const len = parseInt(arraySize.value);
        array = Array.from({ length: len }, () => Math.floor(Math.random() * 90) + 10);
        customInput.value = array.join(' ');
        renderBars(array);
        sortResult.innerHTML = '';
        comparisons = 0;
        swaps = 0;
        updateStats();
    }

    function updateStats() {
        if (sortStats) {
            sortStats.innerHTML = `
                <div class="stat-item">🔍 Comparisons: <span>${comparisons}</span></div>
                <div class="stat-item">🔄 Swaps/Moves: <span>${swaps}</span></div>
            `;
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const delay = () => parseInt(sortSpeed.value);

    function renderBars(arr, comparing = [], swapping = [], sorted = []) {
        if (!sortBars) return;
        const maxVal = Math.max(...arr, 1);
        sortBars.innerHTML = '';
        
        arr.forEach((val, i) => {
            const heightPct = Math.max(25, (val / maxVal) * 200);
            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = heightPct + 'px';
            bar.style.flex = '1';
            bar.style.minWidth = '12px';
            bar.style.maxWidth = '50px';
            
            if (swapping.includes(i)) {
                bar.classList.add('swapping');
            } else if (comparing.includes(i)) {
                bar.classList.add('comparing');
            } else if (sorted.includes(i)) {
                bar.classList.add('sorted');
            }
            
            const label = document.createElement('span');
            label.className = 'bar-label';
            label.textContent = val;
            bar.appendChild(label);
            sortBars.appendChild(bar);
        });
        updateStats();
    }

    // ALGORITHMS
    async function bubbleSort(arr) {
        const n = arr.length;
        const sortedIndices = [];
        for (let i = 0; i < n; i++) {
            let swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                if (cancelSorting) return;
                comparisons++;
                renderBars(arr, [j, j + 1], [], sortedIndices);
                await sleep(delay());

                const shouldSwap = isAscending ? arr[j] > arr[j + 1] : arr[j] < arr[j + 1];
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
        renderBars(arr, [], [], Array.from({length: n}, (_, idx) => idx));
    }

    async function selectionSort(arr) {
        const n = arr.length;
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                if (cancelSorting) return;
                comparisons++;
                renderBars(arr, [j, minIdx], [], Array.from({length: i}, (_, idx) => idx));
                await sleep(delay());

                const shouldUpdate = isAscending ? arr[j] < arr[minIdx] : arr[j] > arr[minIdx];
                if (shouldUpdate) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                swaps++;
                renderBars(arr, [], [i, minIdx], Array.from({length: i}, (_, idx) => idx));
                await sleep(delay());
                [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
            }
        }
        renderBars(arr, [], [], Array.from({length: n}, (_, idx) => idx));
    }

    async function insertionSort(arr) {
        const n = arr.length;
        for (let i = 1; i < n; i++) {
            let key = arr[i];
            let j = i - 1;
            renderBars(arr, [i], [], Array.from({length: i}, (_, idx) => idx));
            await sleep(delay());

            while (j >= 0 && (isAscending ? arr[j] > key : arr[j] < key)) {
                if (cancelSorting) return;
                comparisons++;
                swaps++;
                arr[j + 1] = arr[j];
                renderBars(arr, [j], [j + 1], Array.from({length: i + 1}, (_, idx) => idx));
                await sleep(delay());
                j--;
            }
            arr[j + 1] = key;
            renderBars(arr, [], [], Array.from({length: i + 1}, (_, idx) => idx));
            await sleep(delay());
        }
        renderBars(arr, [], [], Array.from({length: n}, (_, idx) => idx));
    }

    async function quickSortVisual(arr) {
        const sortedIndices = new Set();
        
        async function quickSortHelper(left, right) {
            if (left >= right) {
                if (left >= 0 && left < arr.length) {
                    sortedIndices.add(left);
                    renderBars(arr, [], [], Array.from(sortedIndices));
                }
                return;
            }
            let pivotIdx = await partition(left, right);
            if (cancelSorting) return;
            await quickSortHelper(left, pivotIdx - 1);
            await quickSortHelper(pivotIdx + 1, right);
        }

        async function partition(left, right) {
            let pivot = arr[right];
            let i = left - 1;
            for (let j = left; j < right; j++) {
                if (cancelSorting) return;
                comparisons++;
                renderBars(arr, [j, right], [], Array.from(sortedIndices));
                await sleep(delay());

                const shouldSwap = isAscending ? arr[j] < pivot : arr[j] > pivot;
                if (shouldSwap) {
                    i++;
                    swaps++;
                    renderBars(arr, [], [i, j], Array.from(sortedIndices));
                    await sleep(delay());
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }
            swaps++;
            renderBars(arr, [], [i + 1, right], Array.from(sortedIndices));
            await sleep(delay());
            [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
            sortedIndices.add(i + 1);
            return i + 1;
        }

        await quickSortHelper(0, arr.length - 1);
        renderBars(arr, [], [], Array.from({length: arr.length}, (_, idx) => idx));
    }

    async function mergeSortVisual(arr) {
        const sortedIndices = [];

        async function mergeHelper(left, right) {
            if (left >= right) {
                if (!sortedIndices.includes(left)) sortedIndices.push(left);
                return;
            }
            if (cancelSorting) return;

            const mid = Math.floor((left + right) / 2);
            await mergeHelper(left, mid);
            await mergeHelper(mid + 1, right);
            if (cancelSorting) return;

            const leftArr = arr.slice(left, mid + 1);
            const rightArr = arr.slice(mid + 1, right + 1);
            let i = 0, j = 0, k = left;
            const range = Array.from({ length: right - left + 1 }, (_, idx) => left + idx);

            while (i < leftArr.length && j < rightArr.length) {
                if (cancelSorting) return;
                comparisons++;
                renderBars(arr, range, [], sortedIndices);
                await sleep(delay());

                const shouldPickLeft = isAscending ? leftArr[i] <= rightArr[j] : leftArr[i] >= rightArr[j];
                arr[k] = shouldPickLeft ? leftArr[i++] : rightArr[j++];
                swaps++;
                renderBars(arr, [], [k], sortedIndices);
                await sleep(delay());
                k++;
            }
            while (i < leftArr.length) {
                arr[k] = leftArr[i++];
                swaps++;
                renderBars(arr, [], [k], sortedIndices);
                await sleep(delay());
                k++;
            }
            while (j < rightArr.length) {
                arr[k] = rightArr[j++];
                swaps++;
                renderBars(arr, [], [k], sortedIndices);
                await sleep(delay());
                k++;
            }

            for (let idx = left; idx <= right; idx++) {
                if (!sortedIndices.includes(idx)) sortedIndices.push(idx);
            }
            renderBars(arr, [], [], sortedIndices);
            await sleep(delay());
        }

        await mergeHelper(0, arr.length - 1);
        renderBars(arr, [], [], Array.from({ length: arr.length }, (_, idx) => idx));
    }

    async function heapSortVisual(arr) {
        const n = arr.length;
        const sortedIndices = [];

        async function siftDown(root, end) {
            while (true) {
                if (cancelSorting) return;
                let child = 2 * root + 1;
                if (child > end) break;

                comparisons++;
                renderBars(arr, [root, child], [], sortedIndices);
                await sleep(delay());

                if (child + 1 <= end) {
                    comparisons++;
                    renderBars(arr, [root, child, child + 1], [], sortedIndices);
                    await sleep(delay());
                    const rightIsNext = isAscending ? arr[child + 1] > arr[child] : arr[child + 1] < arr[child];
                    if (rightIsNext) child++;
                }

                const shouldSwap = isAscending ? arr[root] < arr[child] : arr[root] > arr[child];
                if (shouldSwap) {
                    swaps++;
                    renderBars(arr, [], [root, child], sortedIndices);
                    await sleep(delay());
                    [arr[root], arr[child]] = [arr[child], arr[root]];
                    root = child;
                } else {
                    break;
                }
            }
        }

        for (let start = Math.floor(n / 2) - 1; start >= 0; start--) {
            if (cancelSorting) return;
            await siftDown(start, n - 1);
        }

        for (let end = n - 1; end > 0; end--) {
            if (cancelSorting) return;
            swaps++;
            renderBars(arr, [], [0, end], sortedIndices);
            await sleep(delay());
            [arr[0], arr[end]] = [arr[end], arr[0]];
            sortedIndices.push(end);
            renderBars(arr, [], [], sortedIndices);
            await sleep(delay());
            await siftDown(0, end - 1);
        }

        if (!sortedIndices.includes(0)) sortedIndices.push(0);
        renderBars(arr, [], [], sortedIndices);
    }

    randomSort.addEventListener('click', () => {
        if (isSorting) return;
        generateRandomArray();
    });

    resetSort.addEventListener('click', () => {
        cancelSorting = true;
        isSorting = false;
        startSort.disabled = false;
        randomSort.disabled = false;
        sortAlgo.disabled = false;
        arraySize.disabled = false;
        generateRandomArray();
    });

    startSort.addEventListener('click', async () => {
        if (isSorting) return;
        
        const raw = customInput.value.trim();
        if (!raw) {
            sortResult.innerHTML = `<p style="color:var(--danger-color)">⚠️ Please enter numbers!</p>`;
            return;
        }
        
        const arr = raw.split(/\s+/).map(Number);
        if (arr.some(isNaN)) {
            sortResult.innerHTML = `<p style="color:var(--danger-color)">⚠️ Please enter valid integers only!</p>`;
            return;
        }
        if (arr.length < 2) {
            sortResult.innerHTML = `<p style="color:var(--danger-color)">⚠️ Enter at least 2 numbers!</p>`;
            return;
        }

        isSorting = true;
        cancelSorting = false;
        comparisons = 0;
        swaps = 0;
        startSort.disabled = true;
        randomSort.disabled = true;
        sortAlgo.disabled = true;
        arraySize.disabled = true;
        sortResult.innerHTML = `<p style="color:var(--text-secondary)">⏳ Sorting...</p>`;

        renderBars([...arr]);
        
        const algo = sortAlgo.value;
        let workingArr = [...arr];
        if (algo === 'bubble') {
            await bubbleSort(workingArr);
        } else if (algo === 'selection') {
            await selectionSort(workingArr);
        } else if (algo === 'insertion') {
            await insertionSort(workingArr);
        } else if (algo === 'quick') {
            await quickSortVisual(workingArr);
        } else if (algo === 'merge') {
            await mergeSortVisual(workingArr);
        } else if (algo === 'heap') {
            await heapSortVisual(workingArr);
        }

        if (cancelSorting) {
            sortResult.innerHTML = `<p style="color:var(--danger-color)">⏹️ Sorting stopped & reset.</p>`;
            return;
        }

        sortResult.innerHTML = `
            <p style="color:var(--success-color); font-weight:700; font-size:1.2rem">
                ✅ Sorted: [ ${workingArr.join(', ')} ]
            </p>
            <div class="legend">
                <div class="legend-item"><div class="legend-dot" style="background:#f59e0b"></div> Comparing</div>
                <div class="legend-item"><div class="legend-dot" style="background:#ef4444"></div> Swapping/Active</div>
                <div class="legend-item"><div class="legend-dot" style="background:#10b981"></div> Sorted</div>
            </div>
        `;
        
        isSorting = false;
        startSort.disabled = false;
        randomSort.disabled = false;
        sortAlgo.disabled = false;
        arraySize.disabled = false;
    });

    // Initial render
    generateRandomArray();
}