let interval;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(isRunning) return;
    isRunning= true;
    
    const startTime= Date.now() - elapsedTime;

    interval = setInterval(()=>{
        elapsedTime = Date.now() - startTime;
        updateDisplay(elapsedTime);
    }, 0);
}

function stop(){
    clearInterval(interval); 
    isRunning = false;
}

function reset(){
    clearInterval(interval);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay(elapsedTime);
}

function updateDisplay(time){
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60));

    document.getElementById('second').innerText = String(seconds).padStart(2,'0');
document.getElementById('minute').innerText = String(minutes).padStart(2, '0');
document.getElementById('hour').innerText = String(hours).padStart(2, '0');
}



