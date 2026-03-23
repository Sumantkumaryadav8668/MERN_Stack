const display = document.querySelector(".display");
const optionButtons = document.querySelectorAll(".time-options button");
const customInput = document.querySelector(".custom-time input");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");

let totalSeconds = 0;
let timer = null;

// format time MM:SS
function updateDisplay(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;

    display.textContent =
        String(min).padStart(2, "0") +
        ":" +
        String(sec).padStart(2, "0");
}

// preset buttons (2,3,5 min)
optionButtons.forEach(button => {
    button.addEventListener("click", () => {
        let minutes = parseInt(button.textContent);
        totalSeconds = minutes * 60;
        updateDisplay(totalSeconds);
    });
});

// start timer
startBtn.addEventListener("click", () => {
    // if custom input is given
    if (customInput.value) {
        totalSeconds = customInput.value * 60;
        updateDisplay(totalSeconds);
        customInput.value = "";
    }

    if (totalSeconds <= 0 || timer) return;

    timer = setInterval(() => {
        totalSeconds--;
        updateDisplay(totalSeconds);

        if (totalSeconds === 0) {
            clearInterval(timer);
            timer = null;
            alert("⏰ Time's up!");
        }
    }, 1000);
});

// reset timer
resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    totalSeconds = 0;
    updateDisplay(0);
});
