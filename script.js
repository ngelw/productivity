let a = document.getElementById("clock");


function getTime(){
    const time = new Date();
    let hours = time.getHours();
    if(hours>12){
        hours = hours - 12;
    }
    let minutes = time.getMinutes();
    // let seconds = time.getSeconds();

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    // seconds = seconds < 10 ? '0' + seconds : seconds;


    a.innerHTML = `${hours}:${minutes}`;
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
// function toss(){
//     const tossResult =  Math.floor(Math.random() * 2);
//     const tossbutton= document.getElementById("tossbutton");
//     const audioPlayer = document.getElementById("toss-audio");
//     audioPlayer.play();
//     // tossbutton.textContent = "Tossing...";
//     if(tossResult === 1){
//         document.getElementById("toss").innerHTML = "<p>Heads</p><br>again?";
//         document.getElementById("toss").style.backgroundColor = "black";
//         let inte= setInterval(() => {
//             document.getElementById("toss").style.backgroundColor = "green";
//         }, 1000);
//         if(document.getElementById("toss").style.backgroundColor === "green"){
//             clearInterval(inte);
//         }
        
        
//     }
//     else{
//         document.getElementById("toss").innerHTML = "<p>Tails</p><br>again?";
        
//         document.getElementById("toss").style.backgroundColor = "black";
//         let cinte= setInterval(() => {
//             document.getElementById("toss").style.backgroundColor = "red";
//         }, 1000);
//         if(document.getElementById("toss").style.backgroundColor === "red"){
//             clearInterval(cinte);
//         }
        
//     }
// }
function toss() {
    const tossResult = Math.floor(Math.random() * 2); // Generates 0 for Heads, 1 for Tails
    const tossButton = document.getElementById("tossbutton");
    const audioPlayer = document.getElementById("toss-audio");
    const tossElement = document.getElementById("toss");

    // Play the toss audio
    if (audioPlayer) {
        audioPlayer.play();
    }

    // Set the background to black first
    tossElement.style.backgroundColor = "pink";
    tossElement.innerHTML = ".... .  .   .";

    // Start a timeout to change the color to green or red after a short delay
    setTimeout(() => {
        if (tossResult === 0) {
            tossElement.innerHTML = "<p>Heads</p>";
            tossElement.style.backgroundColor = "rgba(0, 43, 6, 0.5)";
        } else {
            tossElement.innerHTML = "<p>Tails</p><br";
            tossElement.style.backgroundColor = "rgba(95, 1, 1, 0.69)";
        }
    }, 300); // Delay of 1 second to simulate the toss animation

   
}