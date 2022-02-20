const menuBtn = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const item = document.querySelector('.item');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

/* Slides the images */

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for next slide
    if(current.nextElementSibling){
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //Add current to start
        slides[0].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

const prevSlide = () => {
    //Get current class
    const current = document.querySelector('.current');
    //Remove current class
    current.classList.remove('current');
    //Check for next slide
    if(current.previousElementSibling){
        //Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    setTimeout(() => current.classList.remove('current'));
}

//Button events
next.addEventListener('click', e => {
    nextSlide();
    if(auto){
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
});

//Auto slide
if(auto){
    //Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}