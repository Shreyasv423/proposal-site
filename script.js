const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const music = document.getElementById('bgMusic');
const heading = document.getElementById('heading');
const message = document.getElementById('message');

let yesSize = 1;

function moveButton() {
    // Generate random coordinates within the visible screen
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Make Yes button grow to make it easier to hit
    yesSize += 0.15;
    yesBtn.style.transform = `scale(${yesSize})`;
}

// Mobile & Laptop support
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Stop the click from happening
    moveButton();
});

noBtn.addEventListener('mouseover', moveButton);

// Final "Yes" Action
yesBtn.addEventListener('click', () => {
    // Attempt to play music
    music.play().catch(() => {
        console.log("Music play pending interaction");
    });

    heading.innerHTML = "I Love You, Anvita! ❤️";
  message.innerHTML = "We may have started with just messages on a screen, but you've become the best part of my real world. I can't wait for our first 'in-person' forever, Anvita. ❤️";
    
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';

    // Start Heart Rain
    setInterval(createHeart, 200);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}
