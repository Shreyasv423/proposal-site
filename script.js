// Typing Effect
const text = "Anvita, Will You Be Mine? ❤️";
let i = 0;

function typing(){
    if(i < text.length){
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,70);
    }
}
typing();


// YES BUTTON
document.getElementById("yesBtn").addEventListener("click", () => {

    const music = document.getElementById("bgMusic");

    if(music){
        music.play().catch(()=>{});
    }

    document.body.innerHTML = `
    <div class="yesPage">
        <div>
            <h1>Anvita ❤️</h1>
            <h2>You just made me the happiest person alive</h2>

            <p>
                I promise to respect you, support you,
                and always stand beside you.
            </p>

            <p>
                This is just the beginning of our story 💖
            </p>
        </div>
    </div>
    `;
});


// NO BUTTON RUN AWAY
const noBtn = document.getElementById("noBtn");

function moveButton(){

    const x = Math.random()*200 - 100;
    const y = Math.random()*200 - 100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);
