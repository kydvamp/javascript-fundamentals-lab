let inputTextEl = document.getElementById("textInput");
let wordCountEl = document.getElementById("wordCount");
let charCountEl = document.getElementById("charCount");
let sentenceCountEl = document.getElementById("sentenceCount");
let statusMessageEl = document.getElementById("statusMessage");
const analyzeBtnEl = document.getElementById("analyzeBtn");
const clearBtnEl = document.getElementById("clearBtn");

function analyzeText() {
    const text = inputTextEl.value;
    const words = text.trim().split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    const charCount = text.length;
    const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0).length;

    let statusMessage = "";
    if (wordCount === 0) {
        statusMessage = "Please enter some text";
    } else if (wordCount < 5) {
        statusMessage = "Short text";
    } else if (wordCount > 50) {
        statusMessage = "Long text";
    }

    return {
        wordCount,
        charCount,
        sentenceCount,
        statusMessage
    };
}

function updateUI({ wordCount, charCount, sentenceCount, statusMessage }) {
    wordCountEl.textContent = wordCount;
    charCountEl.textContent = charCount;
    sentenceCountEl.textContent = sentenceCount;
    statusMessageEl.textContent = statusMessage;
}


analyzeBtnEl.addEventListener("click", () => {
    const analysisResult = analyzeText();
    updateUI(analysisResult);
});

clearBtnEl.addEventListener("click", () => {
    inputTextEl.value = "";
    updateUI({ wordCount: 0, charCount: 0, sentenceCount: 0, statusMessage: "" });
});






