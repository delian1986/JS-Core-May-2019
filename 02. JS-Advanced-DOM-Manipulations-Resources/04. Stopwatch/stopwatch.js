function stopwatch() {
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let timer = document.getElementById('time');

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    let stopwatch = null;

    function startTimer() {
        startBtn.disabled = true;
        stopBtn.disabled = false;

        let seconds = 0;
        stopwatch=setInterval(tick, 1000);
        function tick(){
            seconds++;
            let currMinute = ('0'+Math.floor(seconds/60)).slice(-2);
            let currentSecond = ('0'+seconds%60).slice(-2);
            timer.innerHTML = `${currMinute}:${currentSecond}`;
        }
    }

    function stopTimer() {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        clearInterval(stopwatch);
        timer.innerHTML = '00:00';
    }
}