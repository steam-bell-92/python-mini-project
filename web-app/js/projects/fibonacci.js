function getFibonacciHTML() {
    return `
        <div class="project-content">
            <h2>✨ Fibonacci Series</h2>
            <div class="fibonacci-container">
                <div class="controls">
                    <label>
                        Number of terms:
                        <input type="number" id="fibTerms" min="1" max="20" value="10">
                    </label>
                    <button class="btn-generate" id="generateFib">Generate</button>
                </div>
                
                <div class="fib-display" id="fibDisplay"></div>
                
                <canvas id="fibSpiral" width="600" height="600"></canvas>
            </div>
        </div>
        
        <style>
            .fibonacci-container {
                padding: 2rem;
                text-align: center;
            }
            
            .fib-display {
                display: flex;
                gap: 0.5rem;
                justify-content: center;
                flex-wrap: wrap;
                margin: 2rem 0;
            }
            
            .fib-number {
                background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 15px;
                font-size: 1.3rem;
                font-weight: bold;
                animation: fadeIn 0.5s ease;
            }
            
            #fibSpiral {
                margin-top: 2rem;
                border-radius: 15px;
                box-shadow: var(--shadow);
                max-width: 100%;
                height: auto;
            }
        </style>
    `;
}

function initFibonacci() {
    const termsInput = document.getElementById('fibTerms');
    const generateBtn = document.getElementById('generateFib');
    const display = document.getElementById('fibDisplay');
    const canvas = document.getElementById('fibSpiral');
    const ctx = canvas.getContext('2d');
    
    function generateFibonacci() {
        const n = parseInt(termsInput.value) || 10;
        display.innerHTML = '';
        
        let fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i-1] + fib[i-2];
        }
        
        fib.slice(0, n).forEach((num, index) => {
            const numEl = document.createElement('div');
            numEl.className = 'fib-number';
            numEl.textContent = num;
            numEl.style.animationDelay = `${index * 0.1}s`;
            display.appendChild(numEl);
        });
        
        drawSpiral(fib.slice(0, Math.min(n, 12)));
    }
    
    function drawSpiral(fib) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.lineWidth = 3;
        
        const scale = 5;
        let x = 300, y = 300;
        let direction = 0;
        
        const colors = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#06b6d4'];
        
        fib.forEach((num, i) => {
            const size = num * scale;
            ctx.strokeStyle = colors[i % colors.length];
            ctx.fillStyle = colors[i % colors.length] + '20';
            
            ctx.fillRect(x, y, size, size);
            ctx.strokeRect(x, y, size, size);
            
            ctx.beginPath();
            const arcX = direction === 0 ? x + size : direction === 2 ? x : x;
            const arcY = direction === 1 ? y : direction === 3 ? y + size : y;
            
            ctx.arc(arcX, arcY, size, 
                Math.PI * direction / 2, 
                Math.PI * (direction + 1) / 2);
            ctx.stroke();
            
            switch(direction) {
                case 0: y -= fib[i+1] * scale; break;
                case 1: x -= size; break;
                case 2: y -= size; x -= fib[i+1] * scale; break;
                case 3: x += size; break;
            }
            
            direction = (direction + 1) % 4;
        });
    }
    
    generateBtn.addEventListener('click', generateFibonacci);
    generateFibonacci();
}
