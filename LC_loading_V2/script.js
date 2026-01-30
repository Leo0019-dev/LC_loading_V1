let progress = document.querySelector(".progress");
let logo = document.getElementById("mainLogo");
let tipText = document.getElementById("tipText");

let width = 0;
let logoIndex = 0;
let tipIndex = 0;

setInterval(()=>{
 if(width<100){width++; progress.style.width=width+"%";}
},100);

setInterval(()=>{
 logoIndex=(logoIndex+1)%logos.length;
 logo.src=logos[logoIndex];
},3000);

setInterval(()=>{
 tipIndex=(tipIndex+1)%tips.length;
 tipText.innerText=tips[tipIndex];
},4000);