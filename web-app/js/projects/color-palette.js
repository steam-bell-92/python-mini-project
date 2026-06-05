//  COLOR PALETTE SUGGESTOR + CSS SNIPPET GENERATOR

function getColorPaletteHTML() {
    return `
        <div class="project-content">
            <h2>🎨 Color Palette Suggestor</h2>

            <!-- STEP 1: CONTROLS -->
            <div id="cpControls" class="cp-controls-card">
                <p class="cp-subtitle">Pick a website type and mood to get a complete color palette + ready-to-use CSS.</p>

                <div class="cp-form-row">
                    <div class="cp-form-group">
                        <label for="cpWebsiteType">🌐 Website Type</label>
                        <select id="cpWebsiteType">
                            <option value="portfolio">💼 Portfolio</option>
                            <option value="healthcare">🏥 Healthcare</option>
                            <option value="ecommerce">🛒 E-Commerce</option>
                            <option value="education">📚 Education</option>
                            <option value="food">🍕 Food & Restaurant</option>
                            <option value="tech">💻 Tech / SaaS</option>
                            <option value="finance">💰 Finance</option>
                            <option value="creative">🎭 Creative / Agency</option>
                        </select>
                    </div>

                    <div class="cp-form-group">
                        <label for="cpMood">🌗 Mood</label>
                        <select id="cpMood">
                            <option value="light">☀️ Light</option>
                            <option value="dark">🌙 Dark</option>
                            <option value="neutral">🤍 Neutral</option>
                            <option value="colorful">🌈 Colorful</option>
                        </select>
                    </div>
                </div>

                <button id="cpGenerateBtn" class="cp-btn-primary">✨ Generate Palette</button>
            </div>

            <!-- STEP 2: PALETTE OUTPUT (hidden until generated) -->
            <div id="cpOutput" class="cp-output" style="display:none;">

                <!-- Color swatches -->
                <div class="cp-section-title">🎨 Your Color Palette</div>
                <div id="cpSwatches" class="cp-swatches"></div>

                <!-- CSS Snippet -->
                <div class="cp-section-title">📋 Ready-to-use CSS Snippet</div>
                <div class="cp-snippet-wrapper">
                    <button id="cpCopyBtn" class="cp-btn-copy">📋 Copy CSS</button>
                    <pre id="cpSnippet" class="cp-snippet"></pre>
                </div>

                <!-- Try Another -->
                <button id="cpResetBtn" class="cp-btn-secondary">🔄 Try Another</button>
            </div>
        </div>

        <style>
            .cp-controls-card {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 12px;
                padding: 1.8rem;
                max-width: 560px;
                margin: 1rem auto;
                box-shadow: 0 8px 30px rgba(0,0,0,0.10);
            }

            .cp-subtitle {
                color: var(--text-color);
                opacity: 0.75;
                margin-bottom: 1.4rem;
                font-size: 0.95rem;
                line-height: 1.5;
            }

            .cp-form-row {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
                margin-bottom: 1.4rem;
            }

            .cp-form-group {
                flex: 1;
                min-width: 180px;
                display: flex;
                flex-direction: column;
                gap: 0.4rem;
            }

            .cp-form-group label {
                font-size: 0.82rem;
                font-weight: 600;
                color: var(--primary-color);
                letter-spacing: 0.03em;
            }

            .cp-form-group select {
                background: var(--background-color, #fff);
                border: 1.5px solid var(--border-color);
                border-radius: 8px;
                color: var(--text-color);
                font-size: 0.95rem;
                padding: 0.55rem 0.8rem;
                cursor: pointer;
                outline: none;
                transition: border-color 0.2s;
                appearance: none;
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='7'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
                background-repeat: no-repeat;
                background-position: right 0.8rem center;
                padding-right: 2rem;
            }

            .cp-form-group select:focus {
                border-color: var(--primary-color);
            }

            .cp-btn-primary {
                width: 100%;
                padding: 0.85rem;
                background: var(--primary-color);
                color: #fff;
                border: none;
                border-radius: 30px;
                font-size: 1rem;
                font-weight: bold;
                cursor: pointer;
                transition: transform 0.2s, background 0.2s;
                box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
            }

            .cp-btn-primary:hover {
                transform: translateY(-2px);
                background: var(--primary-hover, #4f46e5);
            }

            .cp-btn-secondary {
                display: block;
                margin: 1.2rem auto 0;
                padding: 0.65rem 2rem;
                background: transparent;
                border: 2px solid var(--border-color);
                border-radius: 30px;
                color: var(--text-color);
                font-size: 0.9rem;
                font-weight: 600;
                cursor: pointer;
                transition: background 0.2s;
            }

            .cp-btn-secondary:hover {
                background: var(--border-color);
            }

            .cp-btn-copy {
                position: absolute;
                top: 0.6rem;
                right: 0.6rem;
                padding: 0.35rem 0.85rem;
                background: var(--primary-color);
                color: #fff;
                border: none;
                border-radius: 6px;
                font-size: 0.78rem;
                font-weight: bold;
                cursor: pointer;
                transition: opacity 0.2s;
            }

            .cp-btn-copy:hover { opacity: 0.85; }

            .cp-output {
                max-width: 560px;
                margin: 1.5rem auto 0;
                animation: cpFadeIn 0.4s ease;
            }

            @keyframes cpFadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to   { opacity: 1; transform: translateY(0); }
            }

            .cp-section-title {
                font-size: 0.8rem;
                font-weight: 700;
                letter-spacing: 0.1em;
                text-transform: uppercase;
                color: var(--primary-color);
                margin: 1.4rem 0 0.75rem;
            }

            .cp-swatches {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
                gap: 0.75rem;
            }

            .cp-swatch {
                border-radius: 10px;
                overflow: hidden;
                border: 1px solid var(--border-color);
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                cursor: pointer;
                transition: transform 0.15s;
            }

            .cp-swatch:hover { transform: scale(1.04); }

            .cp-swatch-color {
                height: 64px;
                width: 100%;
            }

            .cp-swatch-info {
                background: var(--surface-color);
                padding: 0.4rem 0.5rem;
                text-align: center;
            }

            .cp-swatch-name {
                font-size: 0.68rem;
                font-weight: 600;
                color: var(--text-color);
                opacity: 0.7;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                display: block;
                margin-bottom: 2px;
            }

            .cp-swatch-hex {
                font-size: 0.78rem;
                font-weight: 700;
                color: var(--text-color);
                font-family: monospace;
            }

            /* copied toast on swatch */
            .cp-swatch.copied .cp-swatch-hex::after {
                content: " ✅";
            }

            .cp-snippet-wrapper {
                position: relative;
            }

            .cp-snippet {
                background: var(--surface-color);
                border: 1px solid var(--border-color);
                border-radius: 10px;
                padding: 1.1rem 1rem;
                font-size: 0.8rem;
                line-height: 1.7;
                overflow-x: auto;
                color: var(--text-color);
                font-family: 'Courier New', Courier, monospace;
                white-space: pre;
            }
            /* Fix: Light mode button text contrast */
            [data-theme='light'] .cp-btn-primary {
                color: #1a1a2e !important;
            }

            /* Fix: Dropdown text contrast for both themes */
            [data-theme='light'] .cp-form-group select {
                background: #ffffff;
                color: #1a1a2e;
                border-color: #cbd5e1;
            }

            [data-theme='dark'] .cp-form-group select {
                background: #1e1e2e;
                color: #e2e8f0;
                border-color: #334155;
            }
        </style>
    `;
}


//  Palette data with the website types, moods with hex codes.

const COLOR_PALETTES = {
 
    // PORTFOLIO
    portfolio_light: {
        label: "Portfolio · Light",
        colors: [
            { name: "Background", hex: "#FFFFFF" },
            { name: "Surface", hex: "#F5F5F5" },
            { name: "Primary", hex: "#1A1A2E" },
            { name: "Accent", hex: "#E94560" },
            { name: "Text", hex: "#333333" },
            { name: "Muted", hex: "#888888" }
        ]
    },

    portfolio_dark: {
        label: "Portfolio · Dark",
        colors: [
            { name: "Background", hex: "#0D0D0D" },
            { name: "Surface", hex: "#1A1A1A" },
            { name: "Primary", hex: "#E94560" },
            { name: "Accent", hex: "#F5A623" },
            { name: "Text", hex: "#F0F0F0" },
            { name: "Muted", hex: "#666666" }
        ]
    },

    portfolio_neutral: {
        label: "Portfolio · Neutral",
        colors: [
            { name: "Background", hex: "#F4F1EE" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#3D3D3D" },
            { name: "Accent", hex: "#9C8B75" },
            { name: "Text", hex: "#2C2C2C" },
            { name: "Muted", hex: "#A8A8A8" }
        ]
    },

    portfolio_colorful: {
        label: "Portfolio · Colorful",
        colors: [
            { name: "Background", hex: "#FFFBF0" },
            { name: "Surface", hex: "#FFF0F5" },
            { name: "Primary", hex: "#FF6B6B" },
            { name: "Accent", hex: "#4ECDC4" },
            { name: "Text", hex: "#1A1A2E" },
            { name: "Muted", hex: "#A0A0B0" }
        ]
    },

    // HEALTHCARE
    healthcare_light: {
        label: "Healthcare · Light",
        colors: [
            { name: "Background", hex: "#F0F9FF" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#0077B6" },
            { name: "Accent", hex: "#00B4D8" },
            { name: "Text", hex: "#023E58" },
            { name: "Muted", hex: "#90A4AE" }
        ]
    },

    healthcare_dark: {
        label: "Healthcare · Dark",
        colors: [
            { name: "Background", hex: "#0A1628" },
            { name: "Surface", hex: "#112240" },
            { name: "Primary", hex: "#00B4D8" },
            { name: "Accent", hex: "#48CAE4" },
            { name: "Text", hex: "#E0F4FF" },
            { name: "Muted", hex: "#546E7A" }
        ]
    },

    healthcare_neutral: {
        label: "Healthcare · Neutral",
        colors: [
            { name: "Background", hex: "#F5F5F5" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#5C7A7A" },
            { name: "Accent", hex: "#8EB5B5" },
            { name: "Text", hex: "#2E3A3A" },
            { name: "Muted", hex: "#AABCBC" }
        ]
    },

    healthcare_colorful: {
        label: "Healthcare · Colorful",
        colors: [
            { name: "Background", hex: "#F0FFF8" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#00C49A" },
            { name: "Accent", hex: "#FF6B9D" },
            { name: "Text", hex: "#1A3C34" },
            { name: "Muted", hex: "#99C9BC" }
        ]
    },

    // E-COMMERCE
    ecommerce_light: {
        label: "E-Commerce · Light",
        colors: [
            { name: "Background", hex: "#FFFFFF" },
            { name: "Surface", hex: "#FFF8F0" },
            { name: "Primary", hex: "#FF6B35" },
            { name: "Accent", hex: "#FFB400" },
            { name: "Text", hex: "#1C1C1C" },
            { name: "Muted", hex: "#999999" }
        ]
    },

    ecommerce_dark: {
        label: "E-Commerce · Dark",
        colors: [
            { name: "Background", hex: "#121212" },
            { name: "Surface", hex: "#1E1E1E" },
            { name: "Primary", hex: "#FF6B35" },
            { name: "Accent", hex: "#FFB400" },
            { name: "Text", hex: "#EDEDED" },
            { name: "Muted", hex: "#555555" }
        ]
    },

    ecommerce_neutral: {
        label: "E-Commerce · Neutral",
        colors: [
            { name: "Background", hex: "#F7F5F2" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#6B6B6B" },
            { name: "Accent", hex: "#C4A882" },
            { name: "Text", hex: "#1E1E1E" },
            { name: "Muted", hex: "#B0A898" }
        ]
    },

    ecommerce_colorful: {
        label: "E-Commerce · Colorful",
        colors: [
            { name: "Background", hex: "#FFFAF5" },
            { name: "Surface", hex: "#FFF0E0" },
            { name: "Primary", hex: "#FF4500" },
            { name: "Accent", hex: "#00C8FF" },
            { name: "Text", hex: "#1C1C1C" },
            { name: "Muted", hex: "#AAA090" }
        ]
    },

    // EDUCATION
    education_light: {
        label: "Education · Light",
        colors: [
            { name: "Background", hex: "#FFFDF5" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#4A90D9" },
            { name: "Accent", hex: "#F7C948" },
            { name: "Text", hex: "#2C3E50" },
            { name: "Muted", hex: "#95A5A6" }
        ]
    },

    education_dark: {
        label: "Education · Dark",
        colors: [
            { name: "Background", hex: "#0F1923" },
            { name: "Surface", hex: "#1B2838" },
            { name: "Primary", hex: "#4A90D9" },
            { name: "Accent", hex: "#F7C948" },
            { name: "Text", hex: "#D6E4F0" },
            { name: "Muted", hex: "#4A5568" }
        ]
    },

    education_neutral: {
        label: "Education · Neutral",
        colors: [
            { name: "Background", hex: "#F6F4F0" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#5C6E7A" },
            { name: "Accent", hex: "#A0B4BE" },
            { name: "Text", hex: "#2A3540" },
            { name: "Muted", hex: "#9AABB5" }
        ]
    },

    education_colorful: {
        label: "Education · Colorful",
        colors: [
            { name: "Background", hex: "#FFFFF0" },
            { name: "Surface", hex: "#F0F8FF" },
            { name: "Primary", hex: "#7B2FBE" },
            { name: "Accent", hex: "#FF9F1C" },
            { name: "Text", hex: "#1A1A40" },
            { name: "Muted", hex: "#9090B0" }
        ]
    },

    // FOOD & RESTAURANT
    food_light: {
        label: "Food & Restaurant · Light",
        colors: [
            { name: "Background", hex: "#FFFAF0" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#D62828" },
            { name: "Accent", hex: "#F77F00" },
            { name: "Text", hex: "#3D1F00" },
            { name: "Muted", hex: "#A89080" }
        ]
    },

    food_dark: {
        label: "Food & Restaurant · Dark",
        colors: [
            { name: "Background", hex: "#1A0A00" },
            { name: "Surface", hex: "#2B1200" },
            { name: "Primary", hex: "#F77F00" },
            { name: "Accent", hex: "#FCBF49" },
            { name: "Text", hex: "#FFE8CC" },
            { name: "Muted", hex: "#6B4226" }
        ]
    },

    food_neutral: {
        label: "Food & Restaurant · Neutral",
        colors: [
            { name: "Background", hex: "#F8F4EF" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#7A5C48" },
            { name: "Accent", hex: "#C4A882" },
            { name: "Text", hex: "#2E1F14" },
            { name: "Muted", hex: "#B0987E" }
        ]
    },

    food_colorful: {
        label: "Food & Restaurant · Colorful",
        colors: [
            { name: "Background", hex: "#FFFBEA" },
            { name: "Surface", hex: "#FFF3E0" },
            { name: "Primary", hex: "#FF6F00" },
            { name: "Accent", hex: "#00BFA5" },
            { name: "Text", hex: "#2E1500" },
            { name: "Muted", hex: "#A08060" }
        ]
    },

    // TECH / SAAS
    tech_light: {
        label: "Tech / SaaS · Light",
        colors: [
            { name: "Background", hex: "#F8FAFF" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#6366F1" },
            { name: "Accent", hex: "#06B6D4" },
            { name: "Text", hex: "#1E1E2E" },
            { name: "Muted", hex: "#94A3B8" }
        ]
    },

    tech_dark: {
        label: "Tech / SaaS · Dark",
        colors: [
            { name: "Background", hex: "#0B0F1A" },
            { name: "Surface", hex: "#131929" },
            { name: "Primary", hex: "#6366F1" },
            { name: "Accent", hex: "#06B6D4" },
            { name: "Text", hex: "#E2E8F0" },
            { name: "Muted", hex: "#475569" }
        ]
    },

    tech_neutral: {
        label: "Tech / SaaS · Neutral",
        colors: [
            { name: "Background", hex: "#F2F4F8" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#4A5568" },
            { name: "Accent", hex: "#718096" },
            { name: "Text", hex: "#1A202C" },
            { name: "Muted", hex: "#A0AEC0" }
        ]
    },

    tech_colorful: {
        label: "Tech / SaaS · Colorful",
        colors: [
            { name: "Background", hex: "#F0F4FF" },
            { name: "Surface", hex: "#E8F0FE" },
            { name: "Primary", hex: "#4F46E5" },
            { name: "Accent", hex: "#F59E0B" },
            { name: "Text", hex: "#0F172A" },
            { name: "Muted", hex: "#94A3B8" }
        ]
    },

    // FINANCE
    finance_light: {
        label: "Finance · Light",
        colors: [
            { name: "Background", hex: "#F9FBFF" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#1B4F72" },
            { name: "Accent", hex: "#27AE60" },
            { name: "Text", hex: "#17202A" },
            { name: "Muted", hex: "#85929E" }
        ]
    },

    finance_dark: {
        label: "Finance · Dark",
        colors: [
            { name: "Background", hex: "#050D18" },
            { name: "Surface", hex: "#0D1B2A" },
            { name: "Primary", hex: "#2E86AB" },
            { name: "Accent", hex: "#27AE60" },
            { name: "Text", hex: "#D6EAF8" },
            { name: "Muted", hex: "#2E4057" }
        ]
    },

    finance_neutral: {
        label: "Finance · Neutral",
        colors: [
            { name: "Background", hex: "#F5F6F8" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#4A5568" },
            { name: "Accent", hex: "#68808A" },
            { name: "Text", hex: "#1A2430" },
            { name: "Muted", hex: "#9AAAB5" }
        ]
    },

    finance_colorful: {
        label: "Finance · Colorful",
        colors: [
            { name: "Background", hex: "#F0FFF4" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#0052CC" },
            { name: "Accent", hex: "#36B37E" },
            { name: "Text", hex: "#091E42" },
            { name: "Muted", hex: "#8993A4" }
        ]
    },

    // CREATIVE / AGENCY
    creative_light: {
        label: "Creative / Agency · Light",
        colors: [
            { name: "Background", hex: "#FDFCFB" },
            { name: "Surface", hex: "#F3EFE8" },
            { name: "Primary", hex: "#FF3CAC" },
            { name: "Accent", hex: "#784BA0" },
            { name: "Text", hex: "#1A1A1A" },
            { name: "Muted", hex: "#999999" }
        ]
    },

    creative_dark: {
        label: "Creative / Agency · Dark",
        colors: [
            { name: "Background", hex: "#0D0010" },
            { name: "Surface", hex: "#170020" },
            { name: "Primary", hex: "#FF3CAC" },
            { name: "Accent", hex: "#784BA0" },
            { name: "Text", hex: "#F5E6FF" },
            { name: "Muted", hex: "#5C3D6E" }
        ]
    },

    creative_neutral: {
        label: "Creative / Agency · Neutral",
        colors: [
            { name: "Background", hex: "#F5F0EB" },
            { name: "Surface", hex: "#FFFFFF" },
            { name: "Primary", hex: "#6B5B4E" },
            { name: "Accent", hex: "#B5A090" },
            { name: "Text", hex: "#1A1410" },
            { name: "Muted", hex: "#B0A090" }
        ]
    },

    creative_colorful: {
        label: "Creative / Agency · Colorful",
        colors: [
            { name: "Background", hex: "#FFF0FB" },
            { name: "Surface", hex: "#F5E6FF" },
            { name: "Primary", hex: "#E040FB" },
            { name: "Accent", hex: "#00E5FF" },
            { name: "Text", hex: "#1A001F" },
            { name: "Muted", hex: "#B070C0" }
        ]
    }
};

//Initialization
function initColorPalette() {
    const generateBtn = document.getElementById('cpGenerateBtn');
    const resetBtn = document.getElementById('cpResetBtn');
    const copyBtn = document.getElementById('cpCopyBtn');
    const output = document.getElementById('cpOutput');
    const controls = document.getElementById('cpControls');

    if (!generateBtn) return;

    generateBtn.addEventListener('click', () => {
        const type = document.getElementById('cpWebsiteType').value;
        const mood = document.getElementById('cpMood').value;
        const key = `${type}_${mood}`;
        const palette = COLOR_PALETTES[key];

        if (!palette) return;

        const swatchContainer = document.getElementById('cpSwatches');
        swatchContainer.textContent = '';

        palette.colors.forEach(color => {
            const swatch = document.createElement('div');
            swatch.className = 'cp-swatch';
            swatch.innerHTML = `
                <div class="cp-swatch-color" style="background:${color.hex};"></div>
                <div class="cp-swatch-info">
                    <span class="cp-swatch-name">${color.name}</span>
                    <span class="cp-swatch-hex">${color.hex}</span>
                </div>
            `;

            swatch.addEventListener('click', () => {
                navigator.clipboard.writeText(color.hex).then(() => {
                    swatch.classList.add('copied');
                    setTimeout(() => swatch.classList.remove('copied'), 1500);
                });
            });
            swatchContainer.appendChild(swatch);
        });

        const cssVarLines = palette.colors.map(c => {
            const varName = '--color-' + c.name.toLowerCase().replace(/\s+/g, '-');
            return `    ${varName}: ${c.hex};`;
        }).join('\n');

        const snippet = `/* 🎨 ${palette.label} — generated by Color Palette Suggestor */\n:root {\n${cssVarLines}\n}`;
        document.getElementById('cpSnippet').textContent = snippet;

        output.style.display = 'block';
        controls.style.display = 'none';
    });

    copyBtn.addEventListener('click', () => {
        const text = document.getElementById('cpSnippet').textContent;
        navigator.clipboard.writeText(text).then(() => {
            copyBtn.textContent = '✅ Copied!';
            setTimeout(() => { copyBtn.textContent = '📋 Copy CSS'; }, 2000);
        });
    });

    resetBtn.addEventListener('click', () => {
        output.style.display = 'none';
        controls.style.display = 'block';
    });
}