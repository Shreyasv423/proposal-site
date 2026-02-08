const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const music = document.getElementById('bgMusic');
const heading = document.getElementById('heading');
const message = document.getElementById('message');

let yesSize = 1;

function moveButton(e) {
    // Prevent any default behavior that might stop the move
    if(e.type === 'touchstart') e.preventDefault();

    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    noBtn.style.zIndex = "999";

    // Growth capped so it doesn't cover the whole screen and break
    if (yesSize < 5) {
        yesSize += 0.2;
        yesBtn.style.transform = `scale(${yesSize})`;
    }
}

noBtn.addEventListener('touchstart', moveButton);
noBtn.addEventListener('mouseover', moveButton);

yesBtn.addEventListener('click', () => {
    console.log("Yes button clicked!");
    
    // Play music
    music.play().catch(err => console.log("Music play blocked:", err));

    // Update Content
    heading.innerHTML = "It was always you, Anvita. ❤️";
    message.innerHTML = "We may have started with messages, but you've become my whole world. I can't wait for our first 'in-person' forever. ✨";
    
    // Hide UI
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';

    // Celebration
    setInterval(createHeart, 150);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-5vh';
    heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
    heart.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}
