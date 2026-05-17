function getTypingSpeedTesterHTML() {
    return `
        <div class="project-content">

            <h2>⌨️ Typing Speed Tester</h2>

            <p style="margin-bottom: 10px;">
                Type the exact sentence shown below 👇
            </p>

            <div 
                id="typingSentence"
                style="
                    background: #111827;
                    padding: 15px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                    font-size: 18px;
                "
            >
                Click Start Test 🚀
            </div>

            <textarea
                id="typingInput"
                placeholder="Start typing here..."
                rows="5"
                disabled
                style="
                    width: 100%;
                    padding: 15px;
                    border-radius: 10px;
                    font-size: 16px;
                    margin-bottom: 20px;
                "
            ></textarea>

            <button
                id="startTypingBtn"
                class="btn-play"
            >
                Start Test 🚀
            </button>

            <div
                id="typingResult"
                style="
                    margin-top: 25px;
                    font-size: 18px;
                    line-height: 1.8;
                "
            ></div>

        </div>
    `;
}

function initTypingSpeedTester() {

    const sentences = [
        "Python is fun to learn",
        "Practice makes perfect",
        "Open source is amazing",
        "Typing speed improves daily",
        "Coding becomes easier with practice"
    ];

    const sentenceElement =
        document.getElementById("typingSentence");

    const inputElement =
        document.getElementById("typingInput");

    const button =
        document.getElementById("startTypingBtn");

    const result =
        document.getElementById("typingResult");

    let startTime = null;
    let currentSentence = "";

    // Disable typing initially
    inputElement.disabled = true;

    // Start Test
    button.onclick = function () {

        // Random sentence
        currentSentence =
            sentences[Math.floor(Math.random() * sentences.length)];

        // Show sentence
        sentenceElement.innerText = currentSentence;

        // Enable typing
        inputElement.disabled = false;

        // Clear textarea
        inputElement.value = "";

        // Focus cursor
        inputElement.focus();

        // Clear previous result
        result.innerHTML = "";

        // Start timer
        startTime = new Date().getTime();
    };

    // Typing Event
    inputElement.addEventListener("input", function () {

        if (!startTime) return;

        const typedText =
            inputElement.value;

        // Current time
        const currentTime =
            new Date().getTime();

        // Total time in seconds
        const totalTime =
            (currentTime - startTime) / 1000;

        // Correct characters
        let correctChars = 0;

        for (let i = 0; i < typedText.length; i++) {

            if (
                typedText[i]?.toLowerCase() ===
                currentSentence[i]?.toLowerCase()
            ) {
                correctChars++;
            }
        }

        // Accuracy
        const accuracy =
            Math.round(
                (correctChars / currentSentence.length) * 100
            );

        // Words typed
        const wordsTyped =
            typedText.trim().split(" ").length;

        // WPM
        const wpm =
            Math.round((wordsTyped / totalTime) * 60);

        // If typing is wrong
        if (
            !currentSentence
                .toLowerCase()
                .startsWith(typedText.toLowerCase())
        ) {

            result.innerHTML = `
                ❌ Wrong typing detected! <br><br>
                🎯 Accuracy: ${accuracy}% 
            `;

            return;
        }

        // Show live stats
        result.innerHTML = `
            ⏱️ Time: ${totalTime.toFixed(1)} sec <br><br>
            🚀 Speed: ${wpm} WPM <br><br>
            🎯 Accuracy: ${accuracy}% 
        `;

        // Completed
        if (
            typedText.trim().toLowerCase() ===
            currentSentence.trim().toLowerCase()
        ) {

            result.innerHTML = `
                🎉 Test Completed Successfully! <br><br>

                ⏱️ Total Time: ${totalTime.toFixed(1)} sec <br><br>

                🚀 Typing Speed: ${wpm} WPM <br><br>

                🎯 Accuracy: ${accuracy}% 
            `;

            // Disable typing after completion
            inputElement.disabled = true;
        }
    });
}