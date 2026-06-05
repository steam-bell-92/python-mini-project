/**
 * playground.js  –  Python Playground powered by Pyodide
 *
 * Architecture
 * ─────────────────────────────────────────────────────────────────
 *  • Pyodide runs inside a Web Worker (playground-worker.js)
 *    so the main thread / UI is NEVER blocked.
 *
 *  • Stop works by calling worker.terminate(), which kills the
 *    worker thread instantly — even during an infinite loop.
 *    A fresh worker is then spawned automatically so the user
 *    can run again without a page reload. Pyodide reloads (~8 MB).
 *
 *  • The code editor is powered by CodeMirror 6 with:
 *    – Python syntax highlighting (VS Code Dark+ colours)
 *    – Line numbers, bracket matching, auto-indent
 *    – Auto-close brackets, fold gutters, search
 *    – Light-mode aware (switches theme automatically)
 *
 *  • window.PYODIDE      – lightweight status object (ready / loading)
 *  • window.playgroundAPI – consumed by main.js for tab show/hide
 *
 * Zero conflicts with the modal system or existing project scripts.
 */
(function () {
    'use strict';

    /* ================================================================
       1.  LIGHTWEIGHT STATUS OBJECT
    ================================================================ */
    window.PYODIDE = {
        ready  : false,
        loading: false
    };

    /* ================================================================
       2.  CONSTANTS
    ================================================================ */
    var EXECUTION_TIMEOUT_MS = 5000;  // 5 seconds timeout
    var currentTimeoutId = null;
    var WORKER_SCRIPT = 'js/playground-worker.js';

    /* ================================================================
       3.  EXAMPLE CODE SNIPPETS
    ================================================================ */
    var EXAMPLES = [
        /* 0 – Hello World */
        '# \uD83D\uDC4B Hello, Python Playground!\n' +
        'name = "World"\n' +
        'greeting = f"Hello, {name}!"\n' +
        'print(greeting)\n\n' +
        'for i in range(1, 6):\n' +
        '    print("  " + "\u2B50" * i)',

        /* 1 – Fibonacci */
        '# \uD83D\uDD22 Fibonacci Sequence\n' +
        'def fibonacci(n):\n' +
        '    a, b = 0, 1\n' +
        '    result = []\n' +
        '    for _ in range(n):\n' +
        '        result.append(a)\n' +
        '        a, b = b, a + b\n' +
        '    return result\n\n' +
        'fibs = fibonacci(15)\n' +
        'print("Fibonacci (first 15):", fibs)\n' +
        'print("Sum:", sum(fibs))',

        /* 2 – Sieve of Eratosthenes */
        '# \uD83D\uDD0D Sieve of Eratosthenes\n' +
        'def sieve(limit):\n' +
        '    is_prime = [True] * (limit + 1)\n' +
        '    is_prime[0] = is_prime[1] = False\n' +
        '    for i in range(2, int(limit ** 0.5) + 1):\n' +
        '        if is_prime[i]:\n' +
        '            for j in range(i * i, limit + 1, i):\n' +
        '                is_prime[j] = False\n' +
        '    return [n for n in range(2, limit + 1) if is_prime[n]]\n\n' +
        'primes = sieve(50)\n' +
        'print(f"Primes up to 50 ({len(primes)} found):")\n' +
        'print(primes)',

        /* 3 – Statistics (stdlib) */
        '# \uD83D\uDCCA Basic Statistics (stdlib only)\n' +
        'import statistics\n\n' +
        'data = [23, 45, 12, 67, 34, 89, 56, 11, 78, 42]\n' +
        'print(f"Data   : {sorted(data)}")\n' +
        'print(f"Mean   : {statistics.mean(data):.2f}")\n' +
        'print(f"Median : {statistics.median(data)}")\n' +
        'print(f"Stdev  : {statistics.stdev(data):.2f}")\n' +
        'print(f"Min/Max: {min(data)} / {max(data)}")',

        /* 4 – Recursion */
        '# \uD83D\uDD04 Recursion: Factorial\n' +
        'def factorial(n):\n' +
        '    if n <= 1:\n' +
        '        return 1\n' +
        '    return n * factorial(n - 1)\n\n' +
        'for n in range(1, 11):\n' +
        '    print(f"  {n:2d}! = {factorial(n):10,}")',

        /* 5 – List comprehensions */
        '# \uD83E\uDDE9 List Comprehensions\n' +
        'words = ["banana", "apple", "cherry", "date", "elderberry", "fig"]\n\n' +
        'by_length = sorted(words, key=len)\n' +
        'print("Sorted by length:")\n' +
        'for w in by_length:\n' +
        '    bar = chr(9608) * len(w)\n' +
        '    print(f"  {bar}  {w} ({len(w)})")\n\n' +
        'palindromes = [w for w in words if w == w[::-1]]\n' +
        'print("\\nPalindromes:", palindromes or "none found")'
    ];

    var exampleIdx = 0;

    /* ================================================================
       4.  DOM REFERENCES
    ================================================================ */
    function $id(id) { return document.getElementById(id); }

    var playgroundSection = $id('playgroundSection');
    var runBtn            = $id('runCode');
    var stopBtn           = $id('stopCode');
    var editorMount       = $id('pythonEditor');   // div – CodeMirror mounts here
    var consoleEl         = $id('consoleOutput');
    var statusDot         = $id('statusDot');
    var statusText        = $id('statusText');
    var clearConsoleBtn   = $id('clearConsole');
    var clearEditorBtn    = $id('clearEditor');
    var loadExampleBtn    = $id('loadExample');

    /* Guard – abort gracefully if playground HTML is absent */
    if (!playgroundSection || !runBtn || !stopBtn || !editorMount || !consoleEl) {
        console.warn('[playground.js] Required DOM elements not found — playground disabled.');
        return;
    }

    /* ================================================================
       5.  CODEMIRROR 6 EDITOR SETUP
    ================================================================ */

    /**
     * Build a VS Code–style Dark theme for CodeMirror 6.
     * Uses the same colour palette as VS Code's "Dark+" theme.
     */
    function buildVSCodeTheme(CM) {
        var EditorView = CM.EditorView;

        /* Base editor chrome */
        var vscodeDarkTheme = EditorView.theme({
            '&': {
                backgroundColor : 'transparent',
                color           : '#d4d4d4',
                height          : '100%',
                fontSize        : '0.875rem',
                fontFamily      : "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace"
            },
            '.cm-content': {
                caretColor : '#aeafad',
                padding    : '12px 0'
            },
            '.cm-cursor, .cm-dropCursor': {
                borderLeftColor : '#aeafad',
                borderLeftWidth : '2px'
            },
            '&.cm-focused .cm-cursor': {
                borderLeftColor : '#aeafad'
            },
            '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection': {
                backgroundColor : '#264f78'
            },
            '.cm-panels': {
                backgroundColor : '#1e1e1e',
                color           : '#d4d4d4'
            },
            '.cm-panels.cm-panels-top': {
                borderBottom : '1px solid #454545'
            },
            '.cm-panels.cm-panels-bottom': {
                borderTop : '1px solid #454545'
            },
            '.cm-searchMatch': {
                backgroundColor : '#613315',
                outline         : '1px solid #c6923a'
            },
            '.cm-searchMatch.cm-searchMatch-selected': {
                backgroundColor : '#515c6a'
            },
            '.cm-activeLine': {
                backgroundColor : 'rgba(255,255,255,0.04)'
            },
            '.cm-activeLineGutter': {
                backgroundColor : 'rgba(255,255,255,0.04)',
                color           : '#c6c6c6'
            },
            '.cm-selectionMatch': {
                backgroundColor : '#72a1ff59'
            },
            '.cm-matchingBracket, .cm-nonmatchingBracket': {
                backgroundColor : '#515a6b',
                outline         : '1px solid #888'
            },
            '.cm-gutters': {
                backgroundColor : 'rgba(18,22,36,0.6)',
                color           : '#858585',
                border          : 'none',
                borderRight     : '1px solid rgba(255,255,255,0.06)'
            },
            '.cm-lineNumbers .cm-gutterElement': {
                padding        : '0 8px 0 12px',
                minWidth       : '36px',
                fontSize       : '0.8rem',
                letterSpacing  : '0.02em'
            },
            '.cm-foldPlaceholder': {
                backgroundColor : 'transparent',
                border          : '1px solid #454545',
                color           : '#aaa'
            },
            '.cm-tooltip': {
                border          : '1px solid #454545',
                backgroundColor : '#252526',
                color           : '#d4d4d4',
                borderRadius    : '6px',
                boxShadow       : '0 4px 16px rgba(0,0,0,0.5)',
                fontSize        : '0.82rem'
            },
            '.cm-tooltip.cm-tooltip-autocomplete > ul > li[aria-selected]': {
                backgroundColor : '#094771',
                color           : '#d4d4d4'
            },
            '.cm-tooltip > ul > li': {
                padding : '4px 8px'
            },
            '.cm-scroller': {
                overflow    : 'auto',
                lineHeight  : '1.7'
            },
        }, { dark: true });

        /* Syntax token colours (VS Code Dark+ palette) */
        var vscodeDarkHighlight = CM.syntaxHighlighting(
            CM.defaultHighlightStyle.fallback
                ? CM.defaultHighlightStyle
                : (function () {
                    // Build custom highlight spec
                    var HighlightStyle = CM.syntaxHighlighting;
                    return CM.defaultHighlightStyle;
                }())
        );

        return [vscodeDarkTheme, vscodeDarkHighlight];
    }

    /**
     * Build a VS Code Light theme for CodeMirror 6.
     */
    function buildVSCodeLightTheme(CM) {
        var EditorView = CM.EditorView;

        var vscodeLightTheme = EditorView.theme({
            '&': {
                backgroundColor : 'transparent',
                color           : '#1e1e1e',
                height          : '100%',
                fontSize        : '0.875rem',
                fontFamily      : "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace"
            },
            '.cm-content': {
                caretColor : '#1e1e1e',
                padding    : '12px 0'
            },
            '.cm-cursor, .cm-dropCursor': {
                borderLeftColor : '#1e1e1e',
                borderLeftWidth : '2px'
            },
            '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, ::selection': {
                backgroundColor : '#add6ff'
            },
            '.cm-activeLine': {
                backgroundColor : 'rgba(0,0,0,0.04)'
            },
            '.cm-activeLineGutter': {
                backgroundColor : 'rgba(0,0,0,0.04)',
                color           : '#333'
            },
            '.cm-gutters': {
                backgroundColor : 'rgba(255,255,255,0.6)',
                color           : '#a0a0a0',
                border          : 'none',
                borderRight     : '1px solid rgba(0,0,0,0.08)'
            },
            '.cm-lineNumbers .cm-gutterElement': {
                padding        : '0 8px 0 12px',
                minWidth       : '36px',
                fontSize       : '0.8rem',
                letterSpacing  : '0.02em'
            },
            '.cm-matchingBracket': {
                backgroundColor : '#d6ecf0',
                outline         : '1px solid #8ac'
            },
            '.cm-tooltip': {
                border          : '1px solid #d4d4d4',
                backgroundColor : '#f3f3f3',
                color           : '#1e1e1e',
                borderRadius    : '6px',
                boxShadow       : '0 4px 16px rgba(0,0,0,0.12)',
                fontSize        : '0.82rem'
            },
            '.cm-scroller': {
                lineHeight : '1.7'
            },
        }, { dark: false });

        return [vscodeLightTheme, CM.syntaxHighlighting(CM.defaultHighlightStyle)];
    }

    /* ── Colour-token overrides for Python (VS Code Dark+ palette) ── */
    var PYTHON_TOKEN_CSS = `
        /* Keywords: blue */
        .cm-keyword  { color: #569cd6 !important; font-weight: 600; }
        /* def / class names */
        .cm-definitionKeyword { color: #569cd6 !important; font-weight: 600; }
        /* Function names at definition */
        .cm-definition.cm-variableName { color: #dcdcaa !important; }
        /* Built-ins: cyan */
        .cm-name     { color: #9cdcfe; }
        /* Strings: orange */
        .cm-string   { color: #ce9178 !important; }
        /* String2 / template */
        .cm-string2  { color: #ce9178 !important; }
        /* Comments: green */
        .cm-comment  { color: #6a9955 !important; font-style: italic; }
        /* Numbers: light-green */
        .cm-number   { color: #b5cea8 !important; }
        /* Operators */
        .cm-operator { color: #d4d4d4; }
        /* Punctuation */
        .cm-punctuation { color: #d4d4d4; }
        /* Class names */
        .cm-typeName, .cm-className { color: #4ec9b0 !important; }
        /* Decorators */
        .cm-meta { color: #c586c0 !important; }
        /* Self / special variables */
        .cm-self, .cm-variableName.cm-special { color: #569cd6; }
        /* True / False / None */
        .cm-atom { color: #569cd6 !important; }
        /* Property access */
        .cm-propertyName { color: #9cdcfe; }
        /* f-string braces */
        .cm-special { color: #dcdcaa; }
        /* Light mode overrides */
        [data-theme='light'] .cm-keyword  { color: #0000ff !important; }
        [data-theme='light'] .cm-string   { color: #a31515 !important; }
        [data-theme='light'] .cm-comment  { color: #008000 !important; }
        [data-theme='light'] .cm-number   { color: #098658 !important; }
        [data-theme='light'] .cm-name     { color: #001080; }
        [data-theme='light'] .cm-atom     { color: #0000ff !important; }
        [data-theme='light'] .cm-typeName,
        [data-theme='light'] .cm-className { color: #267f99 !important; }
        [data-theme='light'] .cm-meta { color: #af00db !important; }
        [data-theme='light'] .cm-definition.cm-variableName { color: #795e26 !important; }
    `;

    /* Inject token CSS once */
    (function injectTokenCSS() {
        var style = document.createElement('style');
        style.id = 'cm-python-tokens';
        style.textContent = PYTHON_TOKEN_CSS;
        document.head.appendChild(style);
    }());

    /* ── Create the CodeMirror editor instance ── */
    var CM = window.CodeMirrorPython;

    if (!CM) {
        console.error('[playground.js] CodeMirrorPython global not found. Did cm-editor.js load?');
        return;
    }

    var cmView = null;   // the live EditorView instance

    function isDarkMode() {
        return document.documentElement.getAttribute('data-theme') !== 'light';
    }

    function buildExtensions() {
        var dark = isDarkMode();
        var themeExt = dark ? buildVSCodeTheme(CM) : buildVSCodeLightTheme(CM);

        return [
            /* Line numbers + active-line gutter highlight */
            CM.lineNumbers(),
            CM.highlightActiveLineGutter(),

            /* Special character rendering */
            CM.highlightSpecialChars(),

            /* Undo/redo history */
            CM.history(),

            /* Fold gutter (collapse code blocks) */
            CM.foldGutter({
                markerDOM: function(open) {
                    var span = document.createElement('span');
                    span.style.cursor = 'pointer';
                    span.style.color  = '#858585';
                    span.textContent  = open ? '⌄' : '›';
                    return span;
                }
            }),

            /* Draw cursor & selection */
            CM.drawSelection(),
            CM.dropCursor(),

            /* Allow multiple selections */
            CM.rectangularSelection(),
            CM.crosshairCursor(),

            /* Active line highlight */
            CM.highlightActiveLine(),

            /* Search panel */
            CM.highlightSelectionMatches(),

            /* Bracket matching & auto-close */
            CM.bracketMatching(),
            CM.closeBrackets(),

            /* Auto-completion */
            CM.autocompletion(),

            /* Auto-indent on input */
            CM.indentOnInput(),

            /* Python language (syntax + indent rules) */
            CM.python(),

            /* Theme */
            themeExt,

            /* Key bindings */
            CM.keymap.of([
                /* Tab → indent (4 spaces for Python) */
                CM.indentWithTab,
                /* Close-bracket shortcuts */
                ...CM.closeBracketsKeymap,
                /* Default editing keys */
                ...CM.defaultKeymap,
                /* Undo/redo */
                ...CM.historyKeymap,
                /* Fold/unfold */
                ...CM.foldKeymap,
                /* Completion */
                ...CM.completionKeymap,
                /* Search */
                ...CM.searchKeymap,
                /* Ctrl/Cmd + Enter → Run Code */
                {
                    key     : 'Ctrl-Enter',
                    mac     : 'Cmd-Enter',
                    run     : function() { runCode(); return true; }
                }
            ]),

            /* Update listener — keeps `editor.value` semantic alive */
            CM.EditorView.updateListener.of(function() {})
        ];
    }

    function createEditor(initialContent) {
        var state = CM.EditorState.create({
            doc        : initialContent || '',
            extensions : buildExtensions()
        });

        cmView = new CM.EditorView({
            state  : state,
            parent : editorMount
        });

        return cmView;
    }

    /* ── Get / set code helpers (public editor API) ── */
    function getCode() {
        return cmView ? cmView.state.doc.toString() : '';
    }

    function setCode(code) {
        if (!cmView) return;
        cmView.dispatch({
            changes: {
                from    : 0,
                to      : cmView.state.doc.length,
                insert  : code
            }
        });
    }

    /* ── Re-create editor when theme changes ── */
    function rebuildEditorTheme() {
        if (!cmView) return;
        var currentCode = getCode();
        cmView.destroy();
        cmView = null;
        createEditor(currentCode);
    }

    /* Watch for data-theme attribute changes on <html> */
    var themeObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(m) {
            if (m.type === 'attributes' && m.attributeName === 'data-theme') {
                rebuildEditorTheme();
            }
        });
    });
    themeObserver.observe(document.documentElement, { attributes: true });

    /* ================================================================
       6.  UI HELPER FUNCTIONS
    ================================================================ */

    function setStatus(state, label) {
        if (statusDot)  statusDot.className    = 'status-dot ' + state;
        if (statusText) statusText.textContent = label;
    }

    function resetConsole() {
        consoleEl.textContent =
            '<span class="pg-placeholder">' +
            '&gt;&gt;&gt; Console output will appear here\u2026' +
            '</span>';
    }

    function printLine(text, type) {
        var ph = consoleEl.querySelector('.pg-placeholder');
        if (ph) ph.remove();

        var colorMap = {
            out  : '#c9d1d9',
            err  : '#ff7b72',
            info : '#79c0ff'
        };
        var span          = document.createElement('span');
        span.style.color      = colorMap[type] || colorMap.out;
        span.style.display    = 'block';
        span.style.whiteSpace = 'pre-wrap';
        span.style.wordBreak  = 'break-word';
        span.textContent      = text;

        consoleEl.appendChild(span);
        consoleEl.scrollTop = consoleEl.scrollHeight;
    }

    function setRunning(running) {
        runBtn.disabled      = running;
        stopBtn.disabled     = !running;
        stopBtn.style.opacity = running ? '1' : '0.5';
        stopBtn.style.cursor  = running ? 'pointer' : 'not-allowed';
    }

    /* ================================================================
       7.  WEB WORKER MANAGEMENT
    ================================================================ */
    var worker = null;

    function spawnWorker() {
        if (worker) {
            worker.onmessage = null;
            worker.onerror   = null;
        }

        window.PYODIDE.ready   = false;
        window.PYODIDE.loading = true;

        setStatus('loading', 'Downloading Pyodide\u2026');
        printLine(
            '\u23F3 Loading Python runtime (first load ~8 MB). ' +
            'This may take a moment on slow connections\u2026',
            'info'
        );

        runBtn.disabled = true;

        worker = new Worker(WORKER_SCRIPT);

        worker.onmessage = function (e) {
            switch (e.data.type) {

                case 'ready':
                    window.PYODIDE.ready   = true;
                    window.PYODIDE.loading = false;
                    setStatus('ready', 'Pyodide Ready \u2713');
                    printLine(
                        '\u2705 Python is ready \u2014 write some code and press Run Code!',
                        'info'
                    );
                    runBtn.disabled = false;
                    break;

                case 'load-error':
                    window.PYODIDE.loading = false;
                    setStatus('error', 'Load failed \u2717');
                    printLine('\u274C Pyodide failed to load: ' + e.data.message, 'err');
                    break;

                case 'done':
                    if (currentTimeoutId) {
                        clearTimeout(currentTimeoutId);
                        currentTimeoutId = null;
                    }
                    if (e.data.stdout) printLine(e.data.stdout.trimEnd(), 'out');
                    if (e.data.stderr) printLine(e.data.stderr.trimEnd(), 'err');
                    if (!e.data.stdout && !e.data.stderr) printLine('(no output)', 'info');
                    setRunning(false);
                    break;

                case 'error':
                    if (currentTimeoutId) {
                        clearTimeout(currentTimeoutId);
                        currentTimeoutId = null;
                    }
                    printLine(e.data.message, 'err');
                    setRunning(false);
                    break;
            }
        };

        worker.onerror = function (err) {
            window.PYODIDE.loading = false;
            setStatus('error', 'Worker error \u2717');
            printLine('\u274C Worker error: ' + (err.message || String(err)), 'err');
            setRunning(false);
        };
    }

    function stopExecution() {
        if (worker) {
            worker.onmessage = null;
            worker.onerror   = null;
            worker.terminate();
            worker = null;
        }

        setRunning(false);
        setStatus('loading', 'Reloading Python\u2026');
        printLine(
            '\u26D4 Execution stopped. Reloading Python runtime\u2026',
            'info'
        );

        setTimeout(spawnWorker, 150);
    }

    /* ================================================================
       8.  RUN CODE
    ================================================================ */
    function runCode() {
        var code = getCode();
        if (!code.trim()) {
            printLine('\u2139 Nothing to run \u2014 write some Python first!', 'info');
            return;
        }

        if (!window.PYODIDE.ready) {
            printLine('\u23F3 Python runtime is still loading \u2014 please wait\u2026', 'info');
            return;
        }

        setRunning(true);
        printLine('>>> Running\u2026', 'info');

        if (currentTimeoutId) {
            clearTimeout(currentTimeoutId);
            currentTimeoutId = null;
        }
    
        currentTimeoutId = setTimeout(function() {
            printLine('⏱️ Execution timeout (5s) - possible infinite loop. Stopping...', 'info');
            stopExecution();
        }, EXECUTION_TIMEOUT_MS);

        worker.postMessage({ type: 'run', code: code });
    }

    /* ================================================================
       9.  PUBLIC API
    ================================================================ */
    window.playgroundAPI = {
        activate: function () {
            playgroundSection.style.display = 'block';
            /* Boot worker on first visit */
            if (!window.PYODIDE.ready && !window.PYODIDE.loading) {
                spawnWorker();
            }
            /* Ensure editor is sized correctly after display:block */
            if (cmView) {
                cmView.requestMeasure();
            }
        },

        deactivate: function () {
            playgroundSection.style.display = 'none';
        }
    };

    /* ================================================================
       10.  EVENT WIRING
    ================================================================ */
    runBtn.addEventListener('click', runCode);
    stopBtn.addEventListener('click', stopExecution);

    if (clearConsoleBtn) {
        clearConsoleBtn.addEventListener('click', resetConsole);
    }

    if (clearEditorBtn) {
        clearEditorBtn.addEventListener('click', function () {
            setCode('');
            if (cmView) cmView.focus();
        });
    }

    if (loadExampleBtn) {
        loadExampleBtn.addEventListener('click', function () {
            setCode(EXAMPLES[exampleIdx % EXAMPLES.length]);
            exampleIdx++;
            if (cmView) cmView.focus();
        });
    }

    /* ================================================================
       11.  BOOT
    ================================================================ */
    playgroundSection.style.display = 'none';
    runBtn.disabled                 = true;
    setRunning(false);
    resetConsole();
    setStatus('idle', 'Open the tab to load Python');

    /* Initialise the CodeMirror editor with a welcoming snippet */
    createEditor(
        '# \uD83D\uDC0D Write your Python code here\u2026\n' +
        'print("Hello, World!")'
    );

}());