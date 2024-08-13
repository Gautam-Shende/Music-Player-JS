

let playPauseBtn = document.querySelector('.play-pause');
let mainAudio = document.getElementById('main-audio');
let rangeInput = document.getElementById('range');
let currentTimeSpan = document.querySelector('.current-time');
let maxDurationSpan = document.querySelector('.max-duration');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
  if (!isPlaying) {
    mainAudio.play();
    playPauseBtn.innerHTML = '<ion-icon name="pause-circle-outline"></ion-icon>';
    isPlaying = true;
  } else {
    mainAudio.pause();
    playPauseBtn.innerHTML = '<ion-icon name="play-circle-outline"></ion-icon>';
    isPlaying = false;
  }
});

mainAudio.addEventListener('timeupdate', () => {
  let currentTime = mainAudio.currentTime;
  let maxDuration = mainAudio.duration;
  currentTimeSpan.textContent = formatTime(currentTime);
  maxDurationSpan.textContent = formatTime(maxDuration);
  rangeInput.value = (currentTime / maxDuration) * 100;
});

rangeInput.addEventListener('input', () => {
  mainAudio.currentTime = (rangeInput.value / 100) * mainAudio.duration;
});

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}


