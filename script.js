// Open Envelope

function openLetter(){


document.querySelector(".envelope")
.classList.add("open");



setTimeout(function(){


document.querySelector(".envelope")
.style.display="none";



document.getElementById("mainContent")
.style.display="block";



},1000);


}






// Typing Love Letter


let message =

My Baby,



Happy National Girlfriend Day. ❤️

Thank you for always choosing me, every single day.
Thank you for staying by my side through the good days and even the hard ones. Thank you for loving me, understanding me, and never giving up on us.
Every smile, every laugh, every hug, and every memory we've made together means so much to me. I'll always treasure every moment with you.
You're my safe place, my happiness, and the best thing that's ever happened to me. You're my beautiful baby... my glorious queen.
No matter what happen, I'll always love you and appreciate you with all my heart.
I love you more than words could ever explain, and I'll keep loving you every single day.
Happy National Girlfriend Day, baby. ❤️
Forever yours,
Your glorious king 👑;

let index = 0;



function typeWriter(){


if(index < message.length){


document.getElementById("typing")
.innerHTML += message.charAt(index);


index++;


setTimeout(typeWriter,40);


}


}



typeWriter();







// Falling Hearts

function createHeart(){


let heart=document.createElement("div");


heart.className="heart";


heart.innerHTML="❤️";


heart.style.left=Math.random()*100+"vw";


heart.style.fontSize =
(Math.random()*25+15)+"px";


heart.style.animationDuration =
(Math.random()*3+3)+"s";



document.body.appendChild(heart);



setTimeout(()=>{


heart.remove();


},6000);


}



setInterval(createHeart,300);







// No Button Runs Away


function moveNo(){


let button=document.getElementById("noBtn");



let x=Math.random()*300-150;

let y=Math.random()*200-100;



button.style.transform =

`translate(${x}px,${y}px)`;



}







// Yes Button


function yesAnswer(){


document.getElementById("finalMessage")
.style.display="block";



for(let i=0;i<50;i++){

createHeart();

}


}
