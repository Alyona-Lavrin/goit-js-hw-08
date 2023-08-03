import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(savedTime ? savedTime : 0);

player.on('timeupdate', function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
});
if (!lastUpdateTime || currentTimeInMillis - parseInt(lastUpdateTime, 10) >= 1000) {
    localStorage.setItem("videoplayer-current-time", currentTime);
    localStorage.setItem("videoplayer-last-update", currentTimeInMillis.toString());
  }
  saveCurrentTimeInLocalStorage(currentTime);