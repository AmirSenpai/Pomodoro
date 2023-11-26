var timerInterval; // Variable to hold the interval timer

var minutes = 0; // Default work timer duration
var seconds = 0;

var timerDisplay = document.getElementById("timer");
var startBtn = document.getElementById("startBtn");
var pauseBtn = document.getElementById("pauseBtn");
var longBreakBtn = document.getElementById("longBreakBtn");
var shortBreakBtn = document.getElementById("shortBreakBtn");
var workTimerBtn = document.getElementById("workTimerBtn");

// Function to update the timer display
function updateTimerDisplay() {
  timerDisplay.innerHTML =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0");
}

// if(seconds == 0 || minutes == 0 ){
//   startBtn.style.opacity = 0.5;
//   pauseBtn.style.opacity = 0.5;
//   startBtn.style.cursor = "default";
//   pauseBtn.style.cursor = "default";
//   startBtn.disabled = true;
//   startBtn.disabled = true;
// }
// else if(seconds > 0 || minutes > 0){
//   startBtn.style.opacity = 1;
//   startBtn.style.cursor = "pointer;"
// }

// Function to start the timer
function startTimer() {
  timerInterval = setInterval(function () {
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else {
      clearInterval(timerInterval);
      alert("Timer completed!");
    }

    updateTimerDisplay();
  }, 1000);

  startBtn.disabled = true;
  pauseBtn.disabled = false;
}

// Function to pause the timer
function pauseTimer() {
  clearInterval(timerInterval);

  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

// // Function to reset the timer to default values
// function resetTimer() {
//     clearInterval(timerInterval);
//     minutes = 25;
//     seconds = 0;
//     updateTimerDisplay();

//     startBtn.disabled = false;
//     pauseBtn.disabled = true;
// }

// Function to set the timer for a long break (10 minutes)
function setLongBreak() {
  clearInterval(timerInterval);
  minutes = 10;
  seconds = 0;
  updateTimerDisplay();

  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

// Function to set the timer for a short break (5 minutes)
function setShortBreak() {
  clearInterval(timerInterval);
  minutes = 5;
  seconds = 0;
  updateTimerDisplay();

  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

// Function to set the timer for work (25 minutes)
function setWorkTimer() {
  clearInterval(timerInterval);
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();

  startBtn.disabled = false;
  pauseBtn.disabled = true;
}

// Add event listeners to the buttons
startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
// resetBtn.addEventListener("click", resetTimer);
longBreakBtn.addEventListener("click", setLongBreak);
shortBreakBtn.addEventListener("click", setShortBreak);
workTimerBtn.addEventListener("click", setWorkTimer);

// Initial timer display
updateTimerDisplay();
pauseBtn.disabled = true;
