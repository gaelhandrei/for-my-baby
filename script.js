// Envelope Opening

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
  Hello Baby, Happy National Girlfriend Day <3 Thank you for always choosing me, every single day. Thank you for staying by my side through the good days and even the hard ones. Thank you for loving me, understanding me, and never giving up on us. Every smile, every laugh, every hug, and every memory we have made together means so much to me. I will always treasure every moment with you. You are my safe place, my happiness, and the best thing thats ever happened to me. You are my beautiful baby... my glorious queen I will always choose you, love you, and appreciate you with all my heart. I love you more than words could ever explain baby, and I will keep loving you every single day. Forever yours, Your glorious king<3';
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








// Love Timer

// CHANGE THIS DATE

let startDate =
new Date("2025-01-01");



setInterval(()=>{


let now=new Date();



let days=Math.floor(

(now-startDate)/(1000*60*60*24)

);



document.getElementById("timer")
.innerHTML =

days+" days of loving each other ❤️";



},1000);









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
