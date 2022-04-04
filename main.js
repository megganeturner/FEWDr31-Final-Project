const finishDate = new Date('April 6, 2022 21:00:00');

const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

const daysEl = document.querySelector('#days'),
    hoursEl = document.querySelector('#hours'),
    minutesEl = document.querySelector('#minutes'),
    secondsEl = document.querySelector('#seconds');

const int = setInterval(updateCountdown, 1000);

function updateCountdown () {
    const now = new Date();
    const remainingTime = finishDate.getTime() - now.getTime();

    if (remainingTime <= 0) {
        completeCountdown();
        return;
    }

    const secondsRem = Math.floor((remainingTime % minute) / second),
        minutesRem = Math.floor((remainingTime % hour) / minute),
        hoursRem = Math.floor((remainingTime % day) / hour),
        daysRem = Math.floor(remainingTime / day);

    daysEl.innerText = daysRem;
    hoursEl.innerText = hoursRem;
    minutesEl.innerText = minutesRem;
    secondsEl.innerText = secondsRem;
}

function completeCountdown() {
    clearInterval(int);
    daysEl.innerText = '0';
    hoursEl.innerText = '0';
    minutesEl.innerText = '0';
    secondsEl.innerText = '0';

    document.querySelector('.message').classList.remove('hidden');

    createConfetti();
}

function createConfetti() {
    const confettiContainerEl = document.querySelector('.confetti-container');
    for (let i = 0; i < 150; i++) {
        const confettiParent = document.createElement('span');
        const confettiChild = document.createElement('span');

        confettiParent.classList.add('confetti-parent');
        confettiChild.classList.add('confetti-child');

        const randomTop = Math.floor(Math.random() * 200) ;
        const randomLeft = Math.floor(Math.random() * 100);
        const randomSkew = Math.floor(Math.random() * 10);
        const colours = ['blue', 'pink', 'gold'];
        const randomColor = colours[Math.floor(Math.random() * colours.length)];

        confettiParent.style.top = `-${randomTop + 10}vh`;
        confettiParent.style.left = `${randomLeft}vw`;

        confettiChild.style.transform = `skew(${randomSkew}deg, ${randomSkew}deg)`;
        confettiChild.classList.add(randomColor);

        confettiParent.appendChild(confettiChild);
        document.body.appendChild(confettiParent);
    }
}
