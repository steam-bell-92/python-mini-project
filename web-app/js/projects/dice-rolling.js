function getDiceRollingHTML() {
    return `
        <div class="project-content">
            <h2>🎲 Dice Rolling</h2>
            <div class="dice-container">
                <div class="dice-selector-container">
                    <span class="dice-selector-label">Number of Dice</span>
                    <div class="dice-btn-group" id="diceBtnGroup">
                        <button class="dice-btn" data-count="1" aria-label="1 Dice">1</button>
                        <button class="dice-btn active" data-count="2" aria-label="2 Dice">2</button>
                        <button class="dice-btn" data-count="3" aria-label="3 Dice">3</button>
                        <button class="dice-btn" data-count="4" aria-label="4 Dice">4</button>
                        <button class="dice-btn" data-count="5" aria-label="5 Dice">5</button>
                    </div>
                </div>

                <div class="dice-display" id="diceDisplay">
                    <!-- Dynamic dice will be rendered here -->
                </div>
                
                <div class="dice-total">
                    <span>Total: </span>
                    <span id="diceTotal">2</span>
                </div>
                
                <button class="btn-roll" id="rollDice">🎲 Roll Dice</button>
            </div>
        </div>
        
        <style>
            .dice-container {
                text-align: center;
                padding: 2rem 1.5rem;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            
            .dice-selector-container {
                margin-bottom: 2.5rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0.8rem;
            }

            .dice-selector-label {
                font-size: 1.1rem;
                font-weight: 600;
                color: #e2e8f0;
                text-transform: uppercase;
                letter-spacing: 1px;
            }

            [data-theme="light"] .dice-selector-label {
                color: #334155;
            }

            .dice-btn-group {
                display: flex;
                gap: 0.6rem;
                background: rgba(255, 255, 255, 0.06);
                padding: 0.4rem;
                border-radius: 50px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: inset 0 2px 4px rgba(0,0,0,0.2);
            }

            [data-theme="light"] .dice-btn-group {
                background: rgba(15, 23, 42, 0.05);
                border: 1px solid rgba(15, 23, 42, 0.08);
                box-shadow: inset 0 2px 4px rgba(0,0,0,0.05);
            }

            .dice-btn {
                background: transparent;
                border: none;
                color: #94a3b8;
                width: 46px;
                height: 46px;
                border-radius: 50%;
                font-size: 1.1rem;
                font-weight: bold;
                cursor: pointer;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                align-items: center;
                justify-content: center;
            }

            [data-theme="light"] .dice-btn {
                color: #64748b;
            }

            .dice-btn:hover {
                color: #ffffff;
                background: rgba(255, 255, 255, 0.1);
                transform: scale(1.08);
            }

            [data-theme="light"] .dice-btn:hover {
                color: #0f172a;
                background: rgba(15, 23, 42, 0.08);
            }

            .dice-btn.active {
                background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
                color: white;
                box-shadow: 0 4px 15px rgba(238, 90, 111, 0.4);
                transform: scale(1.12);
            }

            [data-theme="light"] .dice-btn.active {
                box-shadow: 0 4px 12px rgba(238, 90, 111, 0.3);
            }

            .dice-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
                transform: none !important;
                background: transparent;
                color: #94a3b8;
            }

            .dice-btn.active:disabled {
                background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
                color: white;
                opacity: 0.8;
            }
            
            .dice-display {
                display: flex;
                gap: 2.5rem;
                justify-content: center;
                margin-bottom: 2rem;
                flex-wrap: wrap;
                width: 100%;
                max-width: 800px;
            }

            .dice-scene {
                position: relative;
                width: 120px;
                height: 150px;
                perspective: 700px;
                transform-origin: center bottom;
            }
            
            .dice-cube {
                --rx: 0deg;
                --ry: 0deg;
                width: 120px;
                height: 120px;
                position: relative;
                transform-style: preserve-3d;
                transform: rotateX(var(--rx)) rotateY(var(--ry));
                transition: transform 1.3s cubic-bezier(0.2, 0.75, 0.15, 1), filter 0.3s ease;
            }

            .dice-shadow {
                position: absolute;
                left: 50%;
                bottom: 6px;
                width: 78px;
                height: 14px;
                transform: translateX(-50%);
                border-radius: 50%;
                background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.05) 70%, transparent 100%);
                transition: opacity 0.3s ease;
            }

            .dice-scene.rolling .dice-shadow {
                animation: diceShadowFloat 1.3s ease;
            }

            .dice-scene.impact {
                animation: diceLanding 0.4s ease-out;
            }

            .dice-scene.impact .dice-shadow {
                animation: diceShadowImpact 0.4s ease-out;
            }
            
            .cube-face {
                --size: 120px;
                --dot: 14px;
                position: absolute;
                width: var(--size);
                height: var(--size);
                border-radius: 18px;
                background: linear-gradient(160deg, #ffffff, #e6ebf2);
                border: 2px solid #d8dee8;
                box-shadow: inset -8px -8px 12px rgba(0, 0, 0, 0.08), inset 8px 8px 12px rgba(255, 255, 255, 0.85);
            }

            .cube-face::before {
                content: '';
                position: absolute;
                inset: 0;
                border-radius: 18px;
                background-repeat: no-repeat;
            }

            .face-1 { transform: translateZ(60px); }
            .face-2 { transform: rotateY(90deg) translateZ(60px); }
            .face-3 { transform: rotateY(180deg) translateZ(60px); }
            .face-4 { transform: rotateY(-90deg) translateZ(60px); }
            .face-5 { transform: rotateX(90deg) translateZ(60px); }
            .face-6 { transform: rotateX(-90deg) translateZ(60px); }

            .face-1::before {
                background-image: radial-gradient(circle at 50% 50%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }

            .face-2::before {
                background-image:
                    radial-gradient(circle at 28% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }

            .face-3::before {
                background-image:
                    radial-gradient(circle at 28% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 50% 50%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }

            .face-4::before {
                background-image:
                    radial-gradient(circle at 28% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 28% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }

            .face-5::before {
                background-image:
                    radial-gradient(circle at 28% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 28%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 50% 50%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 28% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 72%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }

            .face-6::before {
                background-image:
                    radial-gradient(circle at 28% 24%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 24%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 28% 50%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 50%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 28% 76%, #111 0 var(--dot), transparent calc(var(--dot) + 1px)),
                    radial-gradient(circle at 72% 76%, #111 0 var(--dot), transparent calc(var(--dot) + 1px));
            }
            
            .dice-total {
                font-size: 2.2rem;
                margin: 1.5rem 0;
                font-weight: bold;
                color: #ffffff;
                text-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
            }

            [data-theme="light"] .dice-total {
                color: #0f172a;
            }
            
            .btn-roll {
                background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
                color: white;
                border: none;
                padding: 1.1rem 3.5rem;
                border-radius: 50px;
                font-size: 1.4rem;
                font-weight: 600;
                cursor: pointer;
                transition: var(--transition);
                box-shadow: 0 8px 25px rgba(238, 90, 111, 0.3);
            }
            
            .btn-roll:hover {
                transform: translateY(-2px) scale(1.03);
                box-shadow: 0 12px 30px rgba(238, 90, 111, 0.45);
            }

            .btn-roll:disabled {
                opacity: 0.6;
                cursor: not-allowed;
                transform: none;
                box-shadow: none;
            }

            @keyframes diceLanding {
                0% { transform: translateY(-12px); }
                55% { transform: translateY(4px); }
                80% { transform: translateY(-2px); }
                100% { transform: translateY(0); }
            }

            @keyframes diceShadowFloat {
                0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.32; }
                45% { transform: translateX(-50%) scale(0.72); opacity: 0.18; }
            }

            @keyframes diceShadowImpact {
                0% { transform: translateX(-50%) scale(0.74); opacity: 0.18; }
                55% { transform: translateX(-50%) scale(1.08); opacity: 0.38; }
                100% { transform: translateX(-50%) scale(1); opacity: 0.32; }
            }

            /* Responsive tweaks for wrapping up to 5 dice */
            @media (max-width: 600px) {
                .dice-display {
                    gap: 1.5rem;
                }
                .dice-scene {
                    width: 100px;
                    height: 130px;
                }
                .dice-cube {
                    width: 100px;
                    height: 100px;
                }
                .cube-face {
                    --size: 100px;
                    --dot: 11px;
                    border-radius: 14px;
                }
                .face-1 { transform: translateZ(50px); }
                .face-2 { transform: rotateY(90deg) translateZ(50px); }
                .face-3 { transform: rotateY(180deg) translateZ(50px); }
                .face-4 { transform: rotateY(-90deg) translateZ(50px); }
                .face-5 { transform: rotateX(90deg) translateZ(50px); }
                .face-6 { transform: rotateX(-90deg) translateZ(50px); }
                .dice-shadow {
                    width: 65px;
                    height: 11px;
                }
            }
        </style>
    `;
}

function initDiceRolling() {
    const diceDisplay = document.getElementById('diceDisplay');
    const diceBtnGroup = document.getElementById('diceBtnGroup');
    const rollBtn = document.getElementById('rollDice');
    const totalDisplay = document.getElementById('diceTotal');

    const faceRotation = {
        1: { x: 0, y: 0 },
        2: { x: 0, y: -90 },
        3: { x: 0, y: 180 },
        4: { x: 0, y: 90 },
        5: { x: -90, y: 0 },
        6: { x: 90, y: 0 }
    };

    let currentDiceCount = 2;
    let spins = {};

    function createDiceHTML(id) {
        return `
            <div class="dice-scene">
                <div class="dice-cube" id="${id}">
                    <div class="cube-face face-1"></div>
                    <div class="cube-face face-2"></div>
                    <div class="cube-face face-3"></div>
                    <div class="cube-face face-4"></div>
                    <div class="cube-face face-5"></div>
                    <div class="cube-face face-6"></div>
                </div>
                <div class="dice-shadow"></div>
            </div>
        `;
    }

    function setCubeFace(cube, value, spinSeed) {
        const target = faceRotation[value];
        const rx = target.x + 360 * (2 + (spinSeed % 3));
        const ry = target.y + 360 * (3 + (spinSeed % 2));
        cube.style.setProperty('--rx', `${rx}deg`);
        cube.style.setProperty('--ry', `${ry}deg`);
    }

    function triggerLanding(scene) {
        scene.classList.remove('impact');
        void scene.offsetWidth;
        scene.classList.add('impact');
        setTimeout(() => {
            scene.classList.remove('impact');
        }, 420);
    }

    function renderDice(count) {
        diceDisplay.textContent = '';
        spins = {};
        for (let i = 1; i <= count; i++) {
            diceDisplay.insertAdjacentHTML('beforeend', createDiceHTML(`dice${i}`));
            spins[`dice${i}`] = i - 1; // Unique starting rotation / spin seed per dice
        }
        
        // Initialize cubes to face 1
        for (let i = 1; i <= count; i++) {
            const cube = document.getElementById(`dice${i}`);
            setCubeFace(cube, 1, spins[`dice${i}`]);
        }
        
        totalDisplay.textContent = count;
    }

    // Set up button selector event listeners
    const diceBtns = diceBtnGroup.querySelectorAll('.dice-btn');
    diceBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (rollBtn.disabled) return; // Prevent changing count during roll
            
            diceBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            currentDiceCount = parseInt(btn.getAttribute('data-count'));
            renderDice(currentDiceCount);
            
            // Audio effect on click if API is loaded
            if (window.playgroundAPI && window.playgroundAPI.playSound) {
                window.playgroundAPI.playSound('click');
            }
        });
    });

    // Initial render call to set up the default 2 dice
    renderDice(currentDiceCount);

    rollBtn.addEventListener('click', () => {
        rollBtn.disabled = true;
        
        // Disable selector buttons during roll
        diceBtns.forEach(b => b.disabled = true);

        // Sound effect if available
        if (window.playgroundAPI && window.playgroundAPI.playSound) {
            window.playgroundAPI.playSound('roll');
        }

        const values = [];
        const cubes = [];
        const scenes = [];

        for (let i = 1; i <= currentDiceCount; i++) {
            const cube = document.getElementById(`dice${i}`);
            const scene = cube.closest('.dice-scene');
            cubes.push(cube);
            scenes.push(scene);
            
            scene.classList.add('rolling');
            
            const val = Math.floor(Math.random() * 6) + 1;
            values.push(val);
            
            spins[`dice${i}`] += 1;
            setCubeFace(cube, val, spins[`dice${i}`]);
        }

        setTimeout(() => {
            let total = 0;
            for (let i = 0; i < currentDiceCount; i++) {
                scenes[i].classList.remove('rolling');
                triggerLanding(scenes[i]);
                total += values[i];
            }
            totalDisplay.textContent = total;
            
            rollBtn.disabled = false;
            diceBtns.forEach(b => b.disabled = false);
        }, 1300);
    });
}
