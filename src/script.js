let countdown;
let paused = false;
const timerDisplay = document.querySelector("#timer");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const resetButton = document.querySelector("#reset");
const shortBreakButton = document.querySelector("#short-break");
const longBreakButton = document.querySelector("#long-break");

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;

  countdown = setInterval(() => {
    if (!paused) {
      const secondsLeft = Math.round((then - Date.now()) / 1000);

      if (secondsLeft <= 0) {
        clearInterval(countdown);
      }

      displayTimeLeft(secondsLeft);
    }
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const display = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
  timerDisplay.textContent = display;
}

startButton.addEventListener("click", () => {
  timer(25 * 60);
  paused = false;
});

pauseButton.addEventListener("click", () => {
  paused = true;
});

resetButton.addEventListener("click", () => {
  timer(25 * 60);
  paused = false;
});

shortBreakButton.addEventListener("click", () => {
  timer(5 * 60); // 5 mins break
  paused = false;
});

longBreakButton.addEventListener("click", () => {
  timer(10 * 60); // 10 mins break
  paused = false;
});
