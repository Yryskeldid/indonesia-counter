"use script";

let timerInput = document.getElementById("time");
let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer"); 
timerShow.style.color = 'red';

buttonRun.addEventListener('click', function() {
    timeMinut = parseInt(timerInput.value) * 60;
})

timer = setInterval(function () {
    seconds = timeMinut%60;
    minutes = timeMinut/60%60;
    hour = timeMinut/60/60%60;
    if (timeMinut <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        let Timer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = Timer;
    }
    --timeMinut;
}, 1000)