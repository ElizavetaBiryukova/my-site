const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-button');
const navBtnImg = document.querySelector('.nav-button-img');

const navLink = document.querySelector('.nav-link');
const navLink1 = document.querySelector('.nav-link--1');
const navLink2 = document.querySelector('.nav-link--2');
const navLink3 = document.querySelector('.nav-link--3');
// const home = document.querySelector('.header');
// const portfolio = document.querySelector('.portfolio');
// const contacts = document.querySelector('.contacts');
// const SCROLLSECTION = [home]



// Открытие меню

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = '../img/icons/nav-close.svg';
    } else {
        navBtnImg.src = '../img/icons/nav-open.svg';
    }
};

// активное значение в меню



AOS.init();