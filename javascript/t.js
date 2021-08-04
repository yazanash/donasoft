const typingSpan=document.querySelector(".b1");
const textArray=['for smart system','Soft'];
const typingDelay=250;
const earsingDelay=100;
const newTextDelay=2000;
let textindex=0;
let carIndex=0;

function type(){
    //alert(textArray[textindex]);
    
    if(carIndex<textArray[textindex].length){
        typingSpan.textContent += textArray[textindex].charAt(carIndex);
        carIndex++;
        setTimeout(type,typingDelay);
    }
}
document.addEventListener("DOMContentLoaded",function(){
   setTimeout(type,typingDelay)
});