import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(savedTime ? savedTime : 0);


player.on('timeupdate', function(data) {
    throttledSave(data.seconds);
});

const throttle = require('lodash.throttle');

function saveCurrentTimeInLocalStorage(currentTime) {
    localStorage.setItem("videoplayer-current-time", currentTime);
}

const throttledSave = throttle(saveCurrentTimeInLocalStorage, 1000);