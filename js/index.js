let clickCount = 0;

function startProgressBar() {
    clickCount++;
    const progressBar = document.getElementById('progress-bar');
    const title = document.querySelector('.content-title');
    let percent = document.querySelector('.percent');
    const audio = document.getElementById('energy-sound'); // Âm thanh

    // Phát âm thanh khi nhấn nút
    audio.currentTime = 5; // Bắt đầu từ giây thứ 5
    audio.play();

    if (clickCount < 12) {
        // Thêm hiệu ứng sao băng
        createRadialBurst();
        createEnergyBeams();
        const progressPercentage = clickCount * 9;
        progressBar.style.width = `${progressPercentage}%`;
        percent.innerText = `${roundNumber(progressPercentage)}%`;
    } else if (clickCount === 12) {
        progressBar.style.width = '100%';
        percent.innerText = '100%';
        createSpecialEnergyBeams();

        setTimeout(() => {
            const progressContainer = document.getElementById('progress-container');
            const button = document.getElementById('btn-click-me');
            const textKhoiDong = document.querySelector('.text-khoi-dong');
            textKhoiDong.style.display = 'none';
            progressContainer.style.display = 'none';
            button.style.display = 'none';

            // Hiển thị slogan
            title.style.display = 'block';
            title.style.animation = 'scale-up 2s forwards';
        }, 2000);

        // setTimeout(() => {
        //     title.style.display = 'block';
        //     title.style.animation = 'scale-up 2s forwards';
        // }, 600);
    }
}

function createSpecialEnergyBeams() {
    const numBeams = 100; // Số lượng tia sáng đặc biệt
    for (let i = 0; i < numBeams; i++) {
        const beam = document.createElement('div');
        beam.classList.add('energy-beam-special');

        // Vị trí ngẫu nhiên theo chiều ngang
        beam.style.left = `${Math.random() * 100}vw`;

        // Uốn lượn với giá trị ngẫu nhiên
        beam.style.setProperty('--random-wave', `${Math.random() * 2 * Math.PI}`);

        // Thêm tia sáng vào body
        document.body.appendChild(beam);

        // Xóa tia sáng sau khi hoàn thành hiệu ứng
        setTimeout(() => {
            beam.remove();
        }, 3000);
    }
}

function createEnergyBeams() {
    const numBeams = 20; // Số lượng tia sáng
    for (let i = 0; i < numBeams; i++) {
        const beam = document.createElement('div');
        beam.classList.add('energy-beam');

        // Vị trí ngẫu nhiên theo chiều ngang
        beam.style.left = `${Math.random() * 100}vw`;

        // Thêm tia sáng vào body
        document.body.appendChild(beam);

        // Xóa tia sáng sau khi hoàn thành hiệu ứng (tương ứng với thời gian animation 5s)
        setTimeout(() => {
            beam.remove();
        }, 5000); // Thời gian dài hơn để tia sáng tồn tại lâu hơn
    }
}

function createRadialBurst() {
    const burst = document.createElement('div');
    burst.classList.add('radial-burst');
    document.body.appendChild(burst);

    // Xóa tia sáng sau khi hiệu ứng kết thúc
    setTimeout(() => {
        burst.remove();
    }, 600);
}


function roundNumber(value) {
    if (Number.isInteger(value)) {
        return value;
    } else {
        return value.toFixed(1);
    }
}