// Start Music on First Tap
document.body.addEventListener("click",()=>{
    document.getElementById("bgMusic").play();
},{once:true});


// Typing Proposal
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


// YES BUTTON MAGIC
document.getElementById("yesBtn").addEventListener("click",()=>{

document.body.innerHTML = `

<div class="loveScene">

<div class="loveCard">

<h1 class="bigName">Anvita ❤️</h1>

<p class="reveal">
You just made this moment the most special memory of my life.
</p>

<p class="reveal delay1">
I promise to respect you,
support you,
and always stand beside you no matter what comes.
</p>

<p class="reveal delay2">
I may not be perfect,
but I promise my feelings for you are real.
</p>

<p class="reveal delay3">
This is just the beginning of our beautiful story 💖
</p>

</div>

</div>

`;
});


// Funny NO Button
const noBtn=document.getElementById("noBtn");

noBtn.addEventListener("mouseover",()=>{
    const x=Math.random()*(window.innerWidth-100);
    const y=Math.random()*(window.innerHeight-50);

    noBtn.style.position="absolute";
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";
});
