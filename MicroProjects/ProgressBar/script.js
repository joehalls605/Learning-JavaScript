let progress;
const totalDuration = 30;
let timerId;

const buttonElement = document.getElementById("button");
const outputTime = document.getElementById("output");
const progressBarElement = document.getElementById("progressBar");

buttonElement.addEventListener("click", startTimer);

function startTimer() {
    if (timerId) {
        clearInterval(timerId);
    }

    progress = 0;
    let duration = totalDuration;

    timerId = setInterval(() => { // sets the code to execute every 100 milliseconds
        if (duration > 0) {
            duration--;
            progress++;
            let currentTime = (progress / totalDuration) * 100;
            progressBarElement.style.width = currentTime + "%";
            outputTime.textContent = duration;
        } else {
            clearInterval(timerId); // clears and stops the interval
            outputTime.textContent = "Times Up";
        }
    }, 1000); // Change to 1000 milliseconds (1 second)
}
