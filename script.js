let countdownInterval;

function startCountdown(duration) {
    let timer = duration, days, hours, minutes, seconds;
    if (countdownInterval) {
        clearInterval(countdownInterval);
    }
    countdownInterval = setInterval(function () {
        days = Math.floor(timer / (3600 * 24));
        hours = Math.floor((timer % (3600 * 24)) / 3600);
        minutes = Math.floor((timer % 3600) / 60);
        seconds = timer % 60;

        document.getElementById('days').textContent = days < 10 ? '0' + days : days;
        document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
        document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
        document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
        if (--timer < 0) {
            clearInterval(countdownInterval);
            timer = 0;
        }
    }, 1000);
}

function calculate() {
    let timer = {
        days: parseInt(document.getElementById('daysinput').value, 10) || 0,
        hours: parseInt(document.getElementById('hoursinput').value, 10) || 0,
        minutes: parseInt(document.getElementById('minutesinput').value, 10) || 0,
        seconds: parseInt(document.getElementById('secondsinput').value, 10) || 0
    };
    let countdownDuration = (timer.days * 24 * 3600) +
                            (timer.hours * 3600) +
                            (timer.minutes * 60) +
                            timer.seconds;
    startCountdown(countdownDuration);
}
