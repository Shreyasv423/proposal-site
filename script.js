const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');
const heading = document.getElementById('heading');
const music = document.getElementById('myMusic');

let yesScale = 1;

// The "No" button moves away on Hover (Laptop) and Touch (Mobile)
function moveNoButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.position = 'fixed'; // Keeps it relative to screen
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
    
    // Make the Yes button bigger every time they try to click No
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents clicking on mobile
    moveNoButton();
});

// Yes Click Action
yesBtn.addEventListener('click', () => {
    music.play().catch(e => console.log("Audio play blocked by browser."));
    
    heading.innerText = "Yay! ❤️";
    message.innerText = "I knew you'd say yes, Anvita! You've made my day perfect. Click the heart to hear our song!";
    
    noBtn.style.display = 'none';
    yesBtn.innerHTML = "I Love You! 💍";
    
    // Fireworks/Hearts effect
    setInterval(createHeart, 100);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.duration = (Math.random() * 2 + 3) + 's';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 4000);
}
