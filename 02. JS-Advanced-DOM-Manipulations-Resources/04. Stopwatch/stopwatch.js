function stopwatch() {
    let startBtn = document.getElementById('startBtn');
    let stopBtn = document.getElementById('stopBtn');
    let timer = document.getElementById('time');

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);


    function startTimer() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        started = true;

        let count = 0;
        setInterval(() => {
                timer.innerHTML = count++;
        }, 1000)

    }

    function stopTimer() {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        started = false;
        timer.innerHTML = '00:00';
    }
}