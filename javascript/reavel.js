window.addEventListener('scroll',reveal);
function reveal(){
    var reveal1=document.querySelectorAll('.reveal1');
    var reveal2=document.querySelectorAll('.reveal2');

    for(var i=0;i<reveal1.length;i++){
        var windowHeight=window.innerHeight;
        var revealTop=reveal1[i].getBoundingClientRect().top;
        var revealPoint=150;
        if(revealTop<windowHeight-revealPoint){
            reveal1[i].classList.add('active');
        }
        else{
            reveal1[i].classList.remove('active');
        }
    }
    for(var i=0;i<reveal2.length;i++){
        var windowHeight=window.innerHeight;
        var revealTop=reveal2[i].getBoundingClientRect().top;
        var revealPoint=150;
        if(revealTop<windowHeight-revealPoint){
            reveal2[i].classList.add('active');
        }
        else{
            reveal2[i].classList.remove('active');
        }
    }
}