function getFlamesHTML() {
    return `
        <div class="project-content">
            <h2>💖 FLAMES Game</h2>
            <p class="project-desc">Discover your <strong>relationship status</strong> and calculate your <strong>Compatibility, Rivalry, </strong> or <strong>Nuisance</strong> factor!</p>
            <div class="flames-container">
                <div class="flames-legend">
                    <div class="legend-item">F - Friends</div>
                    <div class="legend-item">L - Love</div>
                    <div class="legend-item">A - Affection</div>
                    <div class="legend-item">M - Marriage</div>
                    <div class="legend-item">E - Enemies</div>
                    <div class="legend-item">S - Siblings</div>
                </div>
                
                <div class="names-input">
                    <input type="text" id="name1" placeholder="Enter first name" maxlength="20">
                    <div class="heart-icon">💕</div>
                    <input type="text" id="name2" placeholder="Enter second name" maxlength="20">
                </div>
                
                <button class="btn-calculate" id="calculateFlames">💖 Calculate</button>
                
                <div class="flames-result" id="flamesResult"></div>
            </div>
        </div>
        
        <style>
            .flames-container {
                padding: 2rem;
                max-width: 700px;
                margin: 0 auto;
                text-align: center;
            }
            
            .flames-legend {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 1rem;
                margin-bottom: 2rem;
            }
            
            .legend-item {
                background: var(--surface-color);
                padding: 0.75rem;
                border-radius: 10px;
                border: 2px solid var(--border-color);
                font-weight: 600;
            }
            
            .names-input {
                display: flex;
                gap: 1rem;
                align-items: center;
                justify-content: center;
                margin-bottom: 2rem;
                flex-wrap: wrap;
            }
            
            .names-input input {
                flex: 1;
                min-width: 200px;
                max-width: 250px;
                padding: 1rem;
                font-size: 1.1rem;
                border: 2px solid var(--border-color);
                border-radius: 10px;
                background: var(--bg-color);
                color: var(--text-color);
                text-align: center;
            }
            
            .heart-icon {
                font-size: 2rem;
                animation: heartbeat 1.5s infinite;
            }
            
            .btn-calculate {
                background: linear-gradient(135deg, #ec4899, #f43f5e);
                color: white;
                border: none;
                padding: 1rem 3rem;
                border-radius: 50px;
                font-size: 1.2rem;
                cursor: pointer;
                transition: var(--transition);
            }
            
            .btn-calculate:hover {
                transform: scale(1.05);
                box-shadow: 0 5px 20px rgba(236, 72, 153, 0.4);
            }
            
            .flames-result {
                margin-top: 3rem;
                min-height: 200px;
            }
            
            .result-card {
                background: linear-gradient(135deg, #ec4899, #f43f5e);
                color: white;
                padding: 3rem;
                border-radius: 20px;
                animation: zoomIn 0.5s ease;
            }
            
            .result-names {
                font-size: 1.5rem;
                margin-bottom: 1rem;
                font-weight: 600;
            }
            
            .result-relationship {
                font-size: 3rem;
                margin: 2rem 0;
                font-weight: bold;
                text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
            }
            
            .result-emoji {
                font-size: 4rem;
                margin-bottom: 1rem;
                animation: bounce 1s infinite;
            }
            
            .result-details {
                margin-top: 2rem;
                padding-top: 2rem;
                border-top: 2px solid rgba(255,255,255,0.3);
                font-size: 1.1rem;
            }
            
            @keyframes heartbeat {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.2); }
            }
            
            @keyframes zoomIn {
                from {
                    opacity: 0;
                    transform: scale(0.5);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        </style>
    `;
}

function initFlames() {
    const calculateBtn = document.getElementById('calculateFlames');
    const name1Input = document.getElementById('name1');
    const name2Input = document.getElementById('name2');
    const resultDiv = document.getElementById('flamesResult');

    if (!calculateBtn || !name1Input || !name2Input || !resultDiv) return;

    const relationshipData = {
        F: { rel: 'Friends', emoji: '🤝', metric: 'Bond Strength', vibe: 'A bond that never breaks!' },
        L: { rel: 'Love', emoji: '❤️', metric: 'Compatibility Score', vibe: 'Pure romantic chemistry!' },
        A: { rel: 'Affection', emoji: '😊', metric: 'Crush Intensity', vibe: 'Someone\'s blushing!' },
        M: { rel: 'Marriage', emoji: '💍', metric: 'Marital Bliss', vibe: 'Start picking out the rings!' },
        E: { rel: 'Enemies', emoji: '😈', metric: 'Rivalry Quotient', vibe: 'Keep your distance!' },
        S: { rel: 'Siblings', emoji: '🏠', metric: 'Nuisance Factor', vibe: 'Stop touching my stuff!' }
    };

    function renderMessage(message) {
        resultDiv.replaceChildren();

        const note = document.createElement('p');
        note.style.color = 'var(--danger-color)';
        note.textContent = message;

        resultDiv.appendChild(note);
    }
    
    function calculateFlames() {
        const name1 = name1Input.value.toLowerCase().replace(/\s/g, '');
        const name2 = name2Input.value.toLowerCase().replace(/\s/g, '');
        
        if (!name1 || !name2) {
            renderMessage('⚠️ Please enter both names!');
            return;
        }
        
        const originalName1 = name1Input.value.trim();
        const originalName2 = name2Input.value.trim();
        
        let name1List = name1.split('');
        let name2List = name2.split('');
        
        const lettersToCheck = [...name1List];
        for (const letter of lettersToCheck) {
            const index2 = name2List.indexOf(letter);
            if (index2 !== -1) {
                name1List.splice(name1List.indexOf(letter), 1);
                name2List.splice(index2, 1);
            }
        }
        
        const remainingCount = name1List.length + name2List.length;
        
        const letters = ['F', 'L', 'A', 'M', 'E', 'S'];
        let position = 0;
        
        while (letters.length > 1) {
            position = (position + remainingCount - 1) % letters.length;
            letters.splice(position, 1);
            if (position === letters.length && letters.length > 0) {
                position = 0;
            }
        }
        
        const finalLetter = letters[0];
        const match = relationshipData[finalLetter];

        resultDiv.replaceChildren();

        const resultCard = document.createElement('div');
        resultCard.className = 'result-card';

        const resultEmoji = document.createElement('div');
        resultEmoji.className = 'result-emoji';
        resultEmoji.textContent = match.emoji;

        const nameLine = document.createElement('div');
        nameLine.className = 'result-names';
        nameLine.textContent = `${originalName1} & ${originalName2}`;

        const resultName = document.createElement('div');
        resultName.className = 'result-relationship';
        resultName.textContent = match.name;

        const infoBlock = document.createElement('div');
        infoBlock.className = 'result-details';

        const description = document.createElement('div');
        description.textContent = match.message;

        const remainingText = document.createElement('div');
        remainingText.style.marginTop = '1rem';
        remainingText.style.fontSize = '0.9rem';
        remainingText.style.opacity = '0.9';
        remainingText.textContent = `Remaining letters: ${remainingCount}`;

        infoBlock.append(description, remainingText);
        resultCard.append(resultEmoji, nameLine, resultName, infoBlock);
        resultDiv.appendChild(resultCard);
    }

    calculateBtn.addEventListener('click', calculateFlames);
    [name1Input, name2Input].forEach(input => input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calculateFlames();
    }));
}