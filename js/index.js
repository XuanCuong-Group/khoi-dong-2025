let clickCount = 0;
var audio1 = document.querySelector("#audio-1");
var audio2 = document.querySelector("#audio-2");

function startProgressBar() {
    clickCount++;
    // audio1.play();
    const progressBar = document.getElementById('progress-bar');
    const title = document.querySelector('.content-title');
    let percent = document.querySelector('.percent');

    if (clickCount < 40) {
        const progressPercentage = (clickCount / 40) * 100;
        progressBar.style.width = `${progressPercentage}%`;
        percent.innerText = `${roundNumber(progressPercentage)}%`;
    } else {
        progressBar.style.width = '100%';
        percent.innerText = '100%';
        // audio1.pause();

        setTimeout(() => {
            // Hide progress bar and button
            const progressContainer = document.getElementById('progress-container');
            const button = document.getElementById('btn-click-me');
            const textKhoiDong = document.querySelector('.text-khoi-dong');
            textKhoiDong.style.display = 'none';
            progressContainer.style.display = 'none';
            button.style.display = 'none';
            // audio2.play();
        }, 500);

        // setTimeout(() => {
        //     document.querySelector('.earth').classList.add('rotate');
        // }, 2000);

        setTimeout(() => {
            title.style.display = 'block';
            title.style.animation = 'scale-up 2s forwards';
            // earth.style.display = 'none';
        }, 600);
    }
}

function roundNumber(value) {
    if (Number.isInteger(value)) {
        return value;
    } else {
        return value.toFixed(1);
    }
}