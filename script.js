let a = document.getElementById("clock");


function getTime(){
    const time = new Date();
    let hours = time.getHours();
    if(hours>12){
        hours = hours - 12;
    }
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;


    a.innerHTML = `${hours}:${minutes}:${seconds}`;
}
getTime();
setInterval(getTime, 1000);
function togglePlayPause() {
    const audioPlayer = document.getElementById("audio-player");
    const playPauseButton = document.querySelector(".play-pause-button");

    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = "Pause";
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = "Play";
    }
}
