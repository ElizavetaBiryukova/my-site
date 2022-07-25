const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-button');
const navBtnImg = document.querySelector('.nav-button-img');

const navLink = document.querySelectorAll('.nav-link');
const home = document.querySelector('.header');
const portfolio = document.querySelector('.project');
const contacts = document.querySelector('.contacts');
const SCROLLSECTION = [home, portfolio, contacts];

// Открытие меню

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = '../img/icons/nav-close.svg';
    } else {
        navBtnImg.src = '../img/icons/nav-open.svg';
    }
};

// Активное значение в меню

const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log('v', entry.target.id);
            navLink.forEach((link)=> {
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