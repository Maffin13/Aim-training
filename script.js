const startBtn = document.querySelector('.start'),
    screens = document.querySelectorAll('.screen'),
    timeList = document.querySelector('.time-list'),
    timeEl = document.querySelector('#time'),
    board = document.querySelector('.board')


let time = 0,
    score = 0;

startBtn.addEventListener('click', (e) => {
    e.preventDefault();
    screens[0].classList.add('up')
})


timeList.addEventListener('click', (e) => {
    // console.log(e.target);
    if (e.target.classList.contains('time-btn')) {
        screens[1].classList.add('up')
        let btnAttr = e.target.getAttribute('data-time')
        time = Number(btnAttr)
        startGame();
    }
})

function decreaseTime() {
    if (time === 0) {
        timeEl.parentNode.classList.add('hide')
        board.innerHTML = `Ваш счет: ${score}`
    } else {
        let currentTime = --time;

        if (currentTime < 10) {
            currentTime = `0${currentTime}`;
        }

        timeEl.innerHTML = `00:${currentTime}`;
    }
}

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
}

function createRandomCircle() {
    const circle = document.createElement('div')

    circle.classList.add('circle')

    let { width, height } = board.getBoundingClientRect()

    let size = randomNumber(10, 80);

    let x = randomNumber(0, width - size)
    let y = randomNumber(0, height - size)

    circle.style = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: ${randomColor(1, 11)};
    `
    
    board.appendChild(circle)

}

function randomColor(min, max) {
    let color = Math.floor(Math.random() * (max - min) + min)
    if (color === 1) return color = 'linear-gradient(#e66465, #9198e5)'
    if (color === 2) return color = 'linear-gradient(127deg, rgba(0,255,0,.8)'
    if (color === 3) return color = 'linear-gradient(336deg, rgba(0,0,255,.8)'
    if (color === 4) return color = 'linear-gradient(45deg, red, blue)'
    if (color === 5) return color = 'rgba(0,0,255,0) 70.71%)'
    if (color === 6) return color = 'linear-gradient(to top, blue, green)'
    if (color === 7) return color = 'rgba(0,255,0,0) 70.71%)'
    if (color === 8) return color = 'linear-gradient(#915C83, #EFDECD)'
    if (color === 9) return color = 'linear-gradient(#9890e3, #b1f4cf)'
    if (color === 10) return color = 'linear-gradient(#e9defa, #fbfcdb)'
    if (color === 11) return color = 'linear-gradient(#a88beb,f8ceec)'
}

board.addEventListener('click', (e) => {
    if (e.target.classList.contains('circle')) {
        score++
        e.target.remove()
        createRandomCircle()
    }
})


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}






