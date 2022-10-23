const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-button');

const navLink = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.nav-list');
const home = document.querySelector('.header');
const portfolio = document.querySelector('.project');
const contacts = document.querySelector('.contacts');
const SCROLLSECTION = [home, portfolio, contacts];

//Открытие меню
navBtn.addEventListener('click', (event) => {
    event.preventDefault();
    nav.classList.toggle('open');
});

navList.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Активное значение в меню
const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if (entry.isIntersecting) {
            navLink.forEach((link) => {
                link.classList.toggle('active',
                    link.getAttribute('href').replace('#', '') === entry.target.id);
            });
        }
    });
}, {
    threshold: 0.7,
});

SCROLLSECTION.forEach((item) => {
    observer.observe(item);

});


//смена темы

const btnTheme = document.querySelector('.nav-theme');

btnTheme.addEventListener('click', ()=> {
    btnTheme.classList.toggle('nav-theme-dark');
});