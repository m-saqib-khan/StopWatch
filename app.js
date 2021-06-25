var min = 0;
var sec = 0;
var mini = 0;
var minHead = document.getElementById('min');
var secHead = document.getElementById('sec');
var miniHead = document.getElementById('mini');
var interval;
function timer(){
    mini++
    miniHead.innerHTML = mini;
    if(mini >= 100){
        sec++
        secHead.innerHTML = sec
        mini = 0
    }else if( sec >=60){
        min++
        minHead.innerHTML = min
        sec = 0
    }
}
function start(){
    interval = setInterval(timer , 10);
     document.getElementById("strt").disabled = true;
    // strt.style.disabled
}
function pause(){
    clearInterval(interval)
    document.getElementById("strt").disabled = false;
}
function reset(){
    min = 0
    sec = 0
    mini = 0
    secHead.innerHTML = sec
    minHead.innerHTML = min
    miniHead.innerHTML = mini
    pause()
}
