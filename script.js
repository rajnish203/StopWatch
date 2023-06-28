(function() {
    let startTime = 0;
    let elapsedTime = 0;
    let timerInterval;
    //
    const displayEl = document.querySelector('.display');
    const startBtn = document.querySelector('.start-btn');
    const stopBtn = document.querySelector('.stop-btn');
    const resetBtn = document.querySelector('.reset-btn');

    function formatTime(time) {
      const hours = Math.floor(time / 3600000);
      const minutes = Math.floor((time % 3600000) / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      const milliseconds = time % 1000;

      return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}.${padZero(milliseconds, 3)}`;
    }

    function padZero(num, length = 2) {
      return String(num).padStart(length, '0');
    }

    function updateDisplay() {
      displayEl.textContent = formatTime(elapsedTime);
    }

    function startTimer() {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(function() {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
      }, 10);
    }

    function stopTimer() {
      clearInterval(timerInterval);
    }

    function resetTimer() {
      stopTimer();
      elapsedTime = 0;
      updateDisplay();
    }

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);

    resetTimer();
  })(); 
const themebtn=document.querySelector('#theme-btn');
themebtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme-color", themeBtn.innerText);
    themebtn.innerText = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
})
