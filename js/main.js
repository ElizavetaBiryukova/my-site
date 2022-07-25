const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-button');
const navBtnImg = document.querySelector('.nav-button-img');

const navLink = document.querySelectorAll('.nav-link');
const navList = document.querySelector('.nav-list');
const home = document.querySelector('.header');
const portfolio = document.querySelector('.project');
const contacts = document.querySelector('.contacts');
const SCROLLSECTION = [home, portfolio, contacts];

// Смена иконок меню
const changeIconMenu = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = '../img/icons/nav-close.svg';
    } else {
        navBtnImg.src = '../img/icons/nav-open.svg';
    }
};

navBtn.addEventListener('click', changeIconMenu);

//Закрытие меню
navList.addEventListener('click', changeIconMenu);


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



AOS.init();