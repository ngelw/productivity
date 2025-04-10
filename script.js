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
    const playPauseButton = document.getElementById("audio-player-");

    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = "End the Prayer🙏";
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = "Pray🙏";
    }
}
function toggleMotivation() {
    const audioPlayer = document.getElementById("audio-player2");
    const playPauseButton = document.getElementById("audio-player2-");

    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = "Enough😎";
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = "Hype";
    }
}
function toss(){
    const tossResult = Math.floor(Math.random() * 2) + 1;
    const tossbutton= document.getElementById("tossbutton");
    const audioPlayer = document.getElementById("toss-audio");
    audioPlayer.play();
    // tossbutton.textContent = "Tossing...";
    if(tossResult === 1){
        document.getElementById("toss").innerHTML = "<p>Heads</p><br>again?";
    }
    else{
        document.getElementById("toss").innerHTML = "<p>Tails</p><br>again?";
        tossbutton.textContent = "Tails,again?";
    }
}