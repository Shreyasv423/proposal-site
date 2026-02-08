document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");

    // ---------- TYPING ----------
    const typingElement = document.getElementById("typing");

    if (typingElement) {

        const text = "Anvita, Will You Be Mine? ❤️";
        let i = 0;

        function typing() {
            if (i < text.length) {
                typingElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, 70);
            }
        }

        typing();
    }


    // ---------- YES BUTTON ----------
    const yesBtn = document.getElementById("yesBtn");

    if (yesBtn) {

        yesBtn.addEventListener("click", () => {

            // 🔥 PLAY MUSIC ONLY HERE
            if (music) {
                music.currentTime = 0;
                music.play().catch(() => {});
            }

            document.body.innerHTML = `
            <div class="loveScene">
                <div class="loveCard">

                    <h1 class="bigName">Anvita ❤️</h1>

                    <p class="reveal">
                        You just made this moment the most special memory of my life.
                    </p>

                    <p class="reveal delay1">
                        I promise to respect you, support you,
                        and always stand beside you.
                    </p>

                    <p class="reveal delay2">
                        I may not be perfect,
                        but my feelings for you are real.
                    </p>

                    <p class="reveal delay3">
                        This is just the beginning of our story 💖
                    </p>

                </div>
            </div>
            `;
        });
    }


    // ---------- NO BUTTON ----------
    const noBtn = document.getElementById("noBtn");

    if (noBtn) {

        function moveButton() {

            const x = Math.random() * (window.innerWidth - 120);
            const y = Math.random() * (window.innerHeight - 60);

            noBtn.style.position = "fixed";
            noBtn.style.left = x + "px";
            noBtn.style.top = y + "px";
        }

        noBtn.addEventListener("mouseover", moveButton);
        noBtn.addEventListener("touchstart", moveButton);
    }

});
