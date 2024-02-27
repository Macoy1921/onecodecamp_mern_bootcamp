async function startTimer() {
  const [minutesInput, timerDisplay] = ['minutesInput', 'timerDisplay'].map(id => document.getElementById(id));
  let minutes = parseInt(minutesInput.value);

  if (isNaN(minutes) || minutes < 1 || minutes > 60) {
    alert("Please enter a valid time between 1 and 60 minutes.");
    return;
  }

  let seconds = 0;
  const updateTimerDisplay = () => timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  updateTimerDisplay();

  while (minutes > 0 || seconds > 0) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    seconds === 0 ? (minutes === 0 ? alert("Time is up!") : (minutes--, seconds = 59)) : seconds--;
    updateTimerDisplay();
  }
}

function resetTimer() {
  const [minutesInput, timerDisplay] = ['minutesInput', 'timerDisplay'].map(id => document.getElementById(id));
  minutesInput.value = '';
  timerDisplay.textContent = '00:00';
}
