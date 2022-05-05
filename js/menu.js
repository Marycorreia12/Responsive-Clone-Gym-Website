  /* menu */
const menuBtn = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', menu);

function menu(){
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
    }
