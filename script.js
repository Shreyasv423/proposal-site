const text = "Anvita, you make my world sparkle. From the moment I met you, I knew you were the one. Will you be mine forever? ❤️";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Start typing on load
window.onload = typeWriter;

const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const music = document.getElementById('bgMusic');

// Yes Action
yesBtn.addEventListener('click', () => {
    music.play();
    document.getElementById('main-heading').innerHTML = "I Love You, Anvita! 💍";
    document.getElementById('typewriter').innerHTML = "You've made me the happiest person alive.";
    createHearts(50);
    yesBtn.style.transform = "scale(1.5)";
    noBtn.style.display = "none";
});

// No Button "Runs Away"
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Floating Hearts Generator
function createHearts(count) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = "❤️";
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);
        
        setTimeout(() => heart.remove(), 5000);
    }
}

setInterval(() => createHearts(1), 300);
