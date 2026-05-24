function getDiceRollingHTML() {
    return `
        <div class="project-content">
            <h2>🎲 Dice Rolling</h2>
            <div class="dice-container">
                <div class="dice-display">
                    <div class="dice-scene">
                        <div class="dice-cube" id="dice1">
                            <div class="cube-face face-1"></div>
                            <div class="cube-face face-2"></div>
                            <div class="cube-face face-3"></div>
                            <div class="cube-face face-4"></div>
                            <div class="cube-face face-5"></div>
                            <div class="cube-face face-6"></div>
                        </div>
                        <div class="dice-shadow"></div>
                    </div>

                    <div class="dice-scene">
                        <div class="dice-cube" id="dice2">
                            <div class="cube-face face-1"></div>
                            <div class="cube-face face-2"></div>
                            <div class="cube-face face-3"></div>
                            <div class="cube-face face-4"></div>
                            <div class="cube-face face-5"></div>
                            <div class="cube-face face-6"></div>
                        </div>
                        <div class="dice-shadow"></div>
                    </div>
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
                padding: 3rem 2rem;
            }
            
            .dice-display {
                display: flex;
                gap: 2rem;
                justify-content: center;
                margin-bottom: 2rem;
                flex-wrap: wrap;
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
                font-size: 2rem;
                margin: 2rem 0;
                font-weight: bold;
            }
            
            .btn-roll {
                background: linear-gradient(135deg, #ff6b6b, #ee5a6f);
                color: white;
                border: none;
                padding: 1rem 3rem;
                border-radius: 50px;
                font-size: 1.3rem;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .btn-roll:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(255, 107, 107, 0.4);
            }

            @keyframes diceLanding {
                0% { transform: translateY(-10px); }
                55% { transform: translateY(4px); }
                80% { transform: translateY(-2px); }
                100% { transform: translateY(0); }
            }

            @keyframes diceShadowFloat {
                0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.32; }
                45% { transform: translateX(-50%) scale(0.72); opacity: 0.2; }
            }

            @keyframes diceShadowImpact {
                0% { transform: translateX(-50%) scale(0.74); opacity: 0.2; }
                55% { transform: translateX(-50%) scale(1.08); opacity: 0.38; }
                100% { transform: translateX(-50%) scale(1); opacity: 0.32; }
            }
        </style>
    `;
}

function initDiceRolling() {
    const dice1 = document.getElementById('dice1');
    const dice2 = document.getElementById('dice2');
    const diceScene1 = dice1.closest('.dice-scene');
    const diceScene2 = dice2.closest('.dice-scene');
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

    let spins1 = 0;
    let spins2 = 0;

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

    setCubeFace(dice1, 1, 0);
    setCubeFace(dice2, 1, 1);
    totalDisplay.textContent = '2';
    
    rollBtn.addEventListener('click', () => {
        rollBtn.disabled = true;
        diceScene1.classList.add('rolling');
        diceScene2.classList.add('rolling');

        const value1 = Math.floor(Math.random() * 6) + 1;
        const value2 = Math.floor(Math.random() * 6) + 1;
        spins1 += 1;
        spins2 += 1;

        setCubeFace(dice1, value1, spins1);
        setCubeFace(dice2, value2, spins2);

        setTimeout(() => {
            diceScene1.classList.remove('rolling');
            diceScene2.classList.remove('rolling');
            triggerLanding(diceScene1);
            triggerLanding(diceScene2);
            totalDisplay.textContent = value1 + value2;
            rollBtn.disabled = false;
        }, 1300);
    });
}
