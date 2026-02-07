const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const audio = document.getElementById('myAudio');

noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

yesBtn.addEventListener('click', () => {
    audio.play();
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('congrats-screen').classList.remove('hidden');
    
    // Girte hue dil banane ka function
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
