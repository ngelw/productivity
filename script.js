let a = document.getElementById("clock");

const time = new Date();
function getTime(){
    let hours = time.getHours();
    let minutes = time.getMinutes();
    a.innerHTML = `${hours}:${minutes}`;
}