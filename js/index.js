const navListItems = document.querySelectorAll('.nav__lists__item');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', ()=> document.body.classList.toggle('nav-open'));

navListItems.forEach(link => link.addEventListener('click', ()=> document.body.classList.remove('nav-open')));