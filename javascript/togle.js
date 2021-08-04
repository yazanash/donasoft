function toggleMenu(){
    const menuToggle=document.querySelector('.menu-toggle');
    const nav=document.querySelector('.nav__links');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
}