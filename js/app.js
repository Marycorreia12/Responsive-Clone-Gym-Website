const menuBtn = document.querySelector('#menu');
const navbar = document.querySelector('.navbar');
const item = document.querySelector('.item');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});


item.addEventListener('click', function(){
    item.classList.add('active');
});
