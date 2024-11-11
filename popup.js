let startTime = 0;
let timerInterval = null;

document.addEventListener("DOMContentLoaded", function () {
  const timerElement = document.getElementById("timer");
  const startButton = document.getElementById("start-button");
  const stopButton = document.getElementById("stop-button");

  startButton.addEventListener("click", function () {
    startTime = new Date().getTime();
    timerInterval = setInterval(function () {
      const currentTime = new Date().getTime();
      const timeElapsed = currentTime - startTime;
      const hours = Math.floor(timeElapsed / 3600000);
      const minutes = Math.floor((timeElapsed % 3600000) / 60000);
      const seconds = Math.floor((timeElapsed % 60000) / 1000);
      timerElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
  });

  stopButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
  });
});