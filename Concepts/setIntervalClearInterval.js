/*
setInterval and clearInterval are functions used for managing repeated execution of code at specific intervals. Here's a detailed explanation of each:

The setInterval function is used to repeatedly execute a specified function or code snippet, with a fixed time delay between each call. The syntax for setInterval is as follows:
*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Progress Bar</h1>
    <button id="button">Start Timer</button>
    <div id="output"></div>
    <div id="progressBar"></div>
    <script src="script.js"></script>
</body>
</html>

*/

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

