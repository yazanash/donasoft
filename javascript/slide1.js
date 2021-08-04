var Slider=document.querySelector('.slider-item').children;
var preSlide=document.querySelector('.left-slide');
var nextSlide=document.querySelector('.right-slide');
var totalSlides=Slider.length;
var index=0;
nextSlide.onclick=function () {
    next("next");
}
preSlide.onclick=function(){
    next("prev");
}
function next (direction){
    if(direction=="next"){
        index++;
        if(index==totalSlides)
        index=0;
    }
    else if (direction=="prev"){
        if(index==0)
        index=totalSlides-1;
        else{
            index--;
        }
    }
    for(i=0;i<Slider.length;i++){
        Slider[i].classList.remove("active");
    }
    Slider[index].classList.add("active")
}
window.addEventListener("scroll",function(){
    const header=document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY>0);
});
