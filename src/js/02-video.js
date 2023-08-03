import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(savedTime);

player.on('timeupdate', function(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
});