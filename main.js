var typed = new Typed("#taping",{
    strings:["Front e Back;","FullStack;"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:450,
});



function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-menu .icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}