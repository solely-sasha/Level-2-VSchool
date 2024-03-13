// setInterval calls a function on a repeated basis
// setTimout calls a function after a certain amount of time
// each return an ID which can be used to clear the interval or clearTimeout

const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const timer = document.getElementById("timer");

let count = 0;
let intervalId; // declare in the global scope
timer.textContent = count;

function incrementTimer() {
  count++;
  timer.textContent = count;
}

// startBtn.addEventListener("click", () => {
//   intervalId = setInterval(incrementTimer, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
// });

startBtn.addEventListener("click", () => {
  intervalId = setTimeout(incrementTimer, 10000);
});

stopBtn.addEventListener("click", () => {
  clearTimeout(intervalId);
});
