/*************** For toggle navbar **************/

let menuicon = document.querySelector("#menu");
let navbar = document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/********* scroll section ********/

let section = document.querySelectorAll('section');
let navlink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navlink.forEach(links => {
                links.classList.remove('active');
            document.querySelector('header nav a[href* = ' + id + ']').classList.add('active');
            });
        };
    });
    /********* sticky navbar **********/
    let header = document.pxquerySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    /** toggle remove **/

    menuicon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content heading',  { origin: 'top'});
ScrollReveal().reveal('.home-img, .project-content-box, .contact form',  { origin: 'button'});
ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right'});


const typed = new Typed('.multiple-text',{
    strings: ['Frontend Developer','Web Developer'],
    typeSpeed: 70,
    backSpace: 70,
    backDelay: 1000,
    loop: true,
});