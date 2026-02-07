const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const audio = document.getElementById('myAudio');

// "No" button ko bhagane wala logic
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// "Yes" click karne par music aur congrats screen
yesBtn.addEventListener('click', () => {
    // Music play karne ka command
    audio.play().catch(error => console.log("Music play failed:", error)); 
    
    document.getElementById('question-screen').classList.add('hidden');
    document.getElementById('congrats-screen').classList.remove('hidden');
});