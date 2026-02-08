// Typing Text
const text = "Anvita, Will You Be Mine? ❤️";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}
typeEffect();


// Music Start On First Click
document.body.addEventListener("click", () => {
    document.getElementById("bgMusic").play();
}, { once: true });


// Love Day Counter
const meetDate = new Date("2024-06-01"); // CHANGE DATE

function updateCounter() {
    const today = new Date();
    const diff = today - meetDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("loveCounter").innerHTML =
        `It's been ${days} days since you made my life special ❤️`;
}
updateCounter();


// YES Button
document.getElementById("yesBtn").addEventListener("click", () => {

    confetti({
        particleCount: 200,
        spread: 120
    });

    document.body.innerHTML = `
        <div class="fadeIn" style="margin-top:35vh; text-align:center; padding:20px;">
            <h1>Anvita, you just made me the happiest person alive ❤️</h1>

            <p style="font-size:20px; margin-top:20px;">
                I promise to always respect you, support you,
                and stand beside you through every phase of life.
            </p>

            <p style="font-size:18px; margin-top:15px;">
                Thank you for choosing me, Anvita 💖
            </p>
        </div>
    `;
});


// NO Button Escape
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});


// Floating Hearts
function createHeart() {

    const heart = document.createElement("div");
    heart.classList.add("heart");

    const hearts = ["❤️", "Anvita ❤️", "💖"];
    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 500);


// Secret Scroll Message
window.addEventListener("scroll", () => {

    const secret = document.getElementById("secretMessage");

    if (window.scrollY > 50) {
        secret.style.bottom = "20px";
    }
});
