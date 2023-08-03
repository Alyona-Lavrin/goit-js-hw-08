import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(savedTime ? savedTime : 0);

player.on('timeupdate', function(data) {
    throttledSave(data.seconds);
    localStorage.setItem("videoplayer-current-time", data.seconds);
});

const throttle = require('lodash.throttle');

function saveCurrentTimeInLocalStorage(currentTime) {
  const lastUpdateTime = localStorage.getItem("videoplayer-last-update");

  const currentTimeInMillis = new Date().getTime();

  if (currentTimeInMillis - parseInt(lastUpdateTime, 10) >= 1000) {
    localStorage.setItem("videoplayer-current-time", currentTime);

    localStorage.setItem("videoplayer-last-update", currentTimeInMillis.toString());
  }
}

const throttledSave = throttle(saveCurrentTimeInLocalStorage, 1000);