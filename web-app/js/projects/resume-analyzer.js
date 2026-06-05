// ============================================
// AI RESUME ANALYZER
// Logic ported from utilities/AI-Resume-Analyzer/AI-Resume-Analyzer.py
// No API calls — pure client-side text analysis.
// ============================================

function getAIResumeAnalyzerHTML() {
    return `
        <div class="resume-analyzer-shell">
            <div class="resume-analyzer-hero">
                <div class="resume-analyzer-copy">
                    <span class="resume-analyzer-badge">GSSoC Utility</span>
                    <h2>AI Resume Analyzer</h2>
                    <p>Upload a resume and get a quick ATS-style snapshot with keyword, structure, and formatting feedback.</p>
                </div>
                <div class="resume-analyzer-pill">No backend required</div>
            </div>

            <div class="resume-analyzer-grid">
                <section class="resume-panel resume-upload-panel">
                    <div class="resume-upload-box" id="resumeDropZone">
                        <i class="fa-solid fa-file-lines resume-upload-icon" id="resumeUploadIcon"></i>
                        <label class="resume-file-btn">
                            Choose File
                            <input type="file" id="resumeInput" accept=".pdf,.doc,.docx,.txt" hidden>
                        </label>
                        <p id="resumeFileStatus">Drag &amp; drop or click to choose a resume (.pdf, .doc, .docx, .txt)</p>
                    </div>

                    <button class="resume-analyze-btn" id="analyzeBtn" type="button">Analyze Resume 🚀</button>
                </section>

                <section class="resume-panel resume-score-panel hidden" id="ats">
                    <h3>ATS Score</h3>
                    <div class="resume-progress-circle">
                        <span id="atsScoreDisplay">0%</span>
                    </div>
                    <div class="resume-extra-info">
                        <p id="atsFormattingScore">✔ Formatting Score: –</p>
                        <p id="atsKeywordScore">✔ Keyword Match: –</p>
                        <p id="atsStrength" style="font-weight:700; margin-top:0.5rem;"></p>
                    </div>
                </section>

                <section class="resume-panel resume-bottom-panel hidden" id="bottomSection">
                    <div class="resume-mini-card">
                        <h3>Keywords Match</h3>
                        <div id="resumeKeywordsList"></div>
                    </div>

                    <div class="resume-mini-card">
                        <h3><i class="fa-solid fa-lightbulb"></i> Suggestions</h3>
                        <div id="resumeSuggestions"></div>
                    </div>
                </section>
            </div>
        </div>
    `;
}

function initAIResumeAnalyzer() {
    const analyzeBtn      = document.getElementById('analyzeBtn');
    const resumeInput     = document.getElementById('resumeInput');
    const fileStatus      = document.getElementById('resumeFileStatus');
    const uploadIcon      = document.getElementById('resumeUploadIcon');
    const ats             = document.getElementById('ats');
    const bottomSection   = document.getElementById('bottomSection');

    if (!analyzeBtn || !resumeInput) return;

    function loadPdfJs() {
        return new Promise((resolve, reject) => {
            if (window.pdfjsLib) { resolve(window.pdfjsLib); return; }
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
            script.onload = () => {
                window.pdfjsLib.GlobalWorkerOptions.workerSrc =
                    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
                resolve(window.pdfjsLib);
            };
            script.onerror = () => reject(new Error('Failed to load PDF.js'));
            document.head.appendChild(script);
        });
    }

    async function readPdfAsText(file) {
        const pdfjsLib = await loadPdfJs();
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        const pageTexts = [];
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            pageTexts.push(content.items.map(item => item.str).join(' '));
        }
        return pageTexts.join('\n');
    }

    const SKILLS = [
        "python", "java", "c++", "c#", ".net", "django", "sql",
        "machine learning", "html", "css", "javascript",
        "communication", "teamwork"
    ];

    const ALIASES = {
        "py":         "python",
        "js":         "javascript",
        "ts":         "typescript",
        "cpp":        "c++",
        "postgres":   "postgresql",
        "mongo":      "mongodb",
        "ml":         "machine learning",
        "dl":         "deep learning",
        "cv":         "computer vision",
        "reactjs":    "react",
        "react.js":   "react",
        "nodejs":     "node.js",
        "expressjs":  "express",
        "aws":        "amazon web services",
        "gcp":        "google cloud platform",
        "gitlab":     "git",
        "github":     "git",
    };

    const EDU_RE     = /education|academic|qualification/i;
    const EXP_RE     = /experience|internship|work experience/i;
    const PROJ_RE    = /projects?/i;

    resumeInput.addEventListener('change', () => {
        const file = resumeInput.files[0];
        if (!file) return;

        fileStatus.textContent = `✅ File selected: ${file.name}`;
        fileStatus.style.color = 'var(--accent)';
        uploadIcon.style.color = 'var(--accent)';
        uploadIcon.className   = 'fa-solid fa-circle-check resume-upload-icon';
    });

    const dropZone = document.getElementById('resumeDropZone');
    if (dropZone) {
        dropZone.addEventListener('dragover', e => {
            e.preventDefault();
            dropZone.style.borderColor = 'var(--accent)';
        });
        dropZone.addEventListener('dragleave', () => {
            dropZone.style.borderColor = '';
        });
        dropZone.addEventListener('drop', e => {
            e.preventDefault();
            dropZone.style.borderColor = '';
            const file = e.dataTransfer.files[0];
            if (file) {
                const dt = new DataTransfer();
                dt.items.add(file);
                resumeInput.files = dt.files;
                fileStatus.textContent = `✅ File selected: ${file.name}`;
                fileStatus.style.color = 'var(--accent)';
                uploadIcon.className   = 'fa-solid fa-circle-check resume-upload-icon';
            }
        });
    }

    analyzeBtn.addEventListener('click', async () => {
        if (!resumeInput.files.length) {
            fileStatus.textContent = '⚠️ Please upload a resume file first!';
            fileStatus.style.color = 'var(--danger-color, #ef4444)';
            return;
        }

        const file = resumeInput.files[0];
        const ext  = file.name.split('.').pop().toLowerCase();

        analyzeBtn.textContent = 'Analyzing… ⏳';
        analyzeBtn.disabled = true;

        try {
            let text = '';

            if (ext === 'pdf') {
                fileStatus.textContent = '📄 Extracting text from PDF…';
                fileStatus.style.color = 'var(--accent)';
                text = await readPdfAsText(file);
                //console.log(`[ResumeAnalyzer] PDF extracted (${text.length} chars):`, text);
                if (!text || text.trim().length < 30) {
                    console.warn('[ResumeAnalyzer] Text too short — likely a scanned/image PDF.');
                    fileStatus.textContent =
                        `⚠️ "${file.name}" appears to be a scanned/image-only PDF. ` +
                        `For best results, export your resume as a text-based PDF or .txt file.`;
                    fileStatus.style.color = 'var(--warning-color, #f59e0b)';
                    return;
                }
            } else if (ext === 'doc' || ext === 'docx') {
                text = await readFileAsText(file);
                //console.log(`[ResumeAnalyzer] DOCX raw text (${text.length} chars):`, text);
                if (!text || text.trim().length < 30) {
                    console.warn('[ResumeAnalyzer] DOCX text too short — binary file.');
                    fileStatus.textContent =
                        `⚠️ "${file.name}" could not be read as plain text in the browser. ` +
                        `For best results, export your resume as a .pdf or .txt file and re-upload.`;
                    fileStatus.style.color = 'var(--warning-color, #f59e0b)';
                    return;
                }
            } else {
                text = await readFileAsText(file);
                //console.log(`[ResumeAnalyzer] TXT extracted (${text.length} chars):`, text);
            }

            //console.log('[ResumeAnalyzer] Running analysis on text:', text);
            runAnalysis(text);
        } catch (err) {
            fileStatus.textContent = `❌ Could not read file: ${err.message}`;
            fileStatus.style.color = 'var(--danger-color, #ef4444)';
        } finally {
            analyzeBtn.textContent = 'Analyze Resume 🚀';
            analyzeBtn.disabled = false;
        }
    });

    function readFileAsText(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload  = e => resolve(e.target.result);
            reader.onerror = () => reject(new Error('Read error'));
            reader.readAsText(file);
        });
    }

    function runAnalysis(rawText) {
        const text = rawText.toLowerCase();

        const tokenRe = /c\+\+|c#|\.net|[a-z0-9]+/gi;
        const tokens  = (text.match(tokenRe) || []).map(t => t.toLowerCase());

        const normalised = tokens.map(t => ALIASES[t] ?? t);

        const bigrams = [];
        for (let i = 0; i < normalised.length - 1; i++) {
            bigrams.push(normalised[i] + ' ' + normalised[i + 1]);
        }

        const foundSkills = SKILLS.filter(
            skill => normalised.includes(skill) || bigrams.includes(skill)
        );

        const eduFound  = EDU_RE.test(text);
        const expFound  = EXP_RE.test(text);
        const projFound = PROJ_RE.test(text);

        let score = 0;
        score += Math.min(foundSkills.length * 8, 40); // up to 40
        if (eduFound)              score += 20;
        if (expFound)              score += 25;
        if (projFound)             score += 15;
        if (foundSkills.length >= 5) score += 10;       // quality bonus
        score = Math.min(score, 100);

        const formattingScore = Math.round(
            ((eduFound ? 1 : 0) + (expFound ? 1 : 0) + (projFound ? 1 : 0)) / 3 * 100
        );
        const keywordScore = Math.min(
            Math.round((foundSkills.length / SKILLS.length) * 100), 100
        );

        let strength;
        if      (score >= 80) strength = '✅ Resume Strength: Excellent';
        else if (score >= 50) strength = '👍 Resume Strength: Good';
        else                  strength = '⚠️ Resume Strength: Needs Improvement';

        const missingSkills = SKILLS.filter(s => !foundSkills.includes(s));

        renderResults({
            score, formattingScore, keywordScore, strength,
            foundSkills, missingSkills,
            eduFound, expFound, projFound
        });
    }

    function renderResults({ score, formattingScore, keywordScore, strength,
                              foundSkills, missingSkills,
                              eduFound, expFound, projFound }) {
        ats.classList.remove('hidden');
        bottomSection.classList.remove('hidden');

        document.getElementById('atsScoreDisplay').textContent  = score + '%';
        document.getElementById('atsFormattingScore').textContent = `✔ Formatting Score: ${formattingScore}%`;
        document.getElementById('atsKeywordScore').textContent    = `✔ Keyword Match: ${keywordScore}%`;
        document.getElementById('atsStrength').textContent        = strength;

        const kwList = document.getElementById('resumeKeywordsList');
        kwList.textContent = '';

        const displaySkills = [
            ...foundSkills.map(s => ({ name: s, pct: Math.min(70 + Math.random() * 30 | 0, 100), found: true })),
            ...missingSkills.slice(0, Math.max(0, 5 - foundSkills.length))
                            .map(s => ({ name: s, pct: 0, found: false }))
        ].slice(0, 6);

        if (displaySkills.length === 0) {
            kwList.textContent = '<p style="color:var(--text-secondary);font-size:0.9rem;">No matching keywords detected. Try a .txt version of your resume.</p>';
        } else {
            displaySkills.forEach(({ name, pct, found }) => {
                kwList.textContent += `
                    <div class="resume-keyword-item">
                        <span style="${found ? '' : 'color:var(--text-secondary);opacity:0.6;'}">${capitalise(name)}${found ? '' : ' ❌'}</span>
                        <div class="resume-bar">
                            <div style="width:${pct}%; background:${found ? 'linear-gradient(90deg,var(--accent),#06b6d4)' : '#6b7280'};"></div>
                        </div>
                    </div>`;
            });
        }

        const suggestionsEl = document.getElementById('resumeSuggestions');
        suggestionsEl.textContent = '';

        const suggestions = buildSuggestions({ foundSkills, missingSkills, eduFound, expFound, projFound });
        suggestions.forEach(s => {
            suggestionsEl.textContent += `
                <div class="resume-suggestion">
                    <i class="fa-solid ${s.ok ? 'fa-check' : 'fa-triangle-exclamation'}" style="color:${s.ok ? 'var(--accent)' : 'var(--warning-color,#f59e0b)'}; margin-top:0.2rem;"></i>
                    <p style="margin:0;">${s.text}</p>
                </div>`;
        });

        ats.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function buildSuggestions({ foundSkills, missingSkills, eduFound, expFound, projFound }) {
        const list = [];

        if (eduFound)  list.push({ ok: true,  text: 'Education section detected' });
        else           list.push({ ok: false, text: 'Add an Education section' });

        if (expFound)  list.push({ ok: true,  text: 'Experience section detected' });
        else           list.push({ ok: false, text: 'Add a Work Experience / Internship section' });

        if (projFound) list.push({ ok: true,  text: 'Projects section detected' });
        else           list.push({ ok: false, text: 'Add a Projects section' });

        if (foundSkills.length >= 5)
            list.push({ ok: true,  text: `Strong skill set detected (${foundSkills.length} skills)` });
        else
            list.push({ ok: false, text: 'Add more technical skills' });

        if (missingSkills.length > 0)
            list.push({ ok: false, text: `Consider adding: ${missingSkills.slice(0, 3).map(capitalise).join(', ')}` });

        list.push({ ok: false, text: 'Use strong action verbs (e.g. "Developed", "Led", "Built")' });

        return list.slice(0, 6);
    }

    function capitalise(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}