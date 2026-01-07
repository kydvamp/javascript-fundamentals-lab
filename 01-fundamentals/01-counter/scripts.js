let counterNumber = 0;

const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const resetBtn = document.getElementById("reset-btn");
const countDisplay = document.getElementById("count");

incrementBtn.addEventListener("click", incrementCounter);
decrementBtn.addEventListener("click", decrementCounter);
resetBtn.addEventListener("click", resetCounter);


function incrementCounter() {
    counterNumber++;
    updateDisplay();
}

//Hide decrement button when zero
function updateDisplay() {
    decrementBtn.style.display = counterNumber === 0 ? "none" : "inline-block";
    countDisplay.textContent = counterNumber;
}

updateDisplay();

function decrementCounter() {
    if (counterNumber > 0) { // Corrected variable name
        counterNumber--;
        updateDisplay();
    }
}

function resetCounter() {
    counterNumber = 0;
    updateDisplay();
}



