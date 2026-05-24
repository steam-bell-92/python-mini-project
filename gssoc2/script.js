document.getElementById("analyzeBtn").addEventListener("click", () => {
    const file = document.getElementById("resumeInput");

    if (!file.files.length) {
        alert("Upload resume first!");
        return;
    }

    document.getElementById("ats").classList.remove("hidden");
    document.getElementById("bottomSection").classList.remove("hidden");
});