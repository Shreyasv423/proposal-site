// ---------- Typing Effect ----------

const text = "Will You Be Mine? ❤️";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 70);
    }
}
typeEffect();


// ---------- Music Start On Click ----------

document.body.addEventListener("click", () => {
    document.getElementById("bgMusic").play();
}, { once: true });


// ---------- YES Button ----------

document.getElementById("yesBtn").addEventListener("click", () => {

    // Confetti
    confetti({
        particleCount: 200,
        spread: 120
    });

    document.body.innerHTML = `
        <div style="margin-top:40vh; text-align:center;">
            <h1>You just made me the happiest person alive ❤️</h1>
            <h2>I promise to always make you smile 😊</h2>
        </div>
    `;
});


// ---------- NO Button Escape ----------

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {

    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});


// ---------- Floating Hearts ----------

function createHeart() {

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);
