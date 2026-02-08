const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const music = document.getElementById('bgMusic');
const heading = document.getElementById('heading');
const message = document.getElementById('message');

let yesSize = 1;

// The "No" button logic - specialized for mobile touch and desktop hover
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // Make Yes button grow so she eventually has to click it ;)
    yesSize += 0.2;
    yesBtn.style.transform = `scale(${yesSize})`;
}

noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    moveButton();
});
noBtn.addEventListener('mouseover', moveButton);

// The Final Reveal
yesBtn.addEventListener('click', () => {
    // Play Perfect.mp3
    music.play().catch(() => console.log("Audio play blocked until click"));

    heading.innerHTML = "It was always you, Anvita. ❤️";
    
    // The "Messaging" specialized message
    message.innerHTML = "We may have started with just text on a screen, but you've become the best part of my real world. I can't wait for our first 'in-person' forever. ✨";
    
    // Clean up UI
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';

    // Start the celebration
    setInterval(createHeart, 200);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.position = 'fixed';
    heart.style.top = '-5vh';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}
