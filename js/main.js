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

const lightStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=light]');
const darkStyles = document.querySelectorAll('link[rel=stylesheet][media*=prefers-color-scheme][media*=dark]');
const darkSchemeMedia = matchMedia('(prefers-color-scheme:dark)');
const switcherRadios = document.querySelectorAll('.switcher__radio');
const imgCat = document.querySelector('#img-cat');
const dark = document.querySelector('switcher__radio--dark');


// if (savedScheme == "dark") {
//     imgCat.src = './img/header/angry-cat.png';
//     imgCat.srcset = './img/header/angry-cat.png';
// } else {
//     imgCat.src = './img/header/cat.png';
//     imgCat.srcset = './img/header/cat.webp';
// }

function setupSwitcher() {
    const savedScheme = getSavedScheme();
// console.log(savedScheme);
    if (savedScheme != null) {
        const currentRadio = document.querySelector(`.switcher__radio[value=${savedScheme}]`);
        currentRadio.checked = true;


    }

    [...switcherRadios].forEach((radio) => {
        radio.addEventListener('change', (event) => {
            setScheme(event.target.value);
        });
    });

}

function setupScheme() {
    const savedScheme = getSavedScheme();
    const systemScheme = getSystemScheme();

    if (savedScheme === null) return;

    if (savedScheme !== systemScheme) {
        setScheme(savedScheme);
    }
}

function setScheme(scheme) {
    switchMedia(scheme);

    if (scheme === 'auto') {
        clearScheme(scheme);
    } else {
        saveScheme(scheme);
    }

}

function switchMedia(scheme) {
    let lightMedia;
    let darkMedia;


    if (scheme === 'auto') {
        lightMedia = '(prefers-color-scheme: light)';
        darkMedia = '(prefers-color-scheme: dark)';
    } else {
        lightMedia = (scheme === 'light') ? 'all' : 'not all';
        darkMedia = (scheme === 'dark') ? 'all' : 'not all';
    }
    [...lightStyles].forEach((link) => {
        link.media = lightMedia;
    });

    [...darkStyles].forEach((link) => {
        link.media = darkMedia;
    });

}

function getSystemScheme() {
    const darkScheme = darkSchemeMedia.matches;
    return darkScheme ? 'dark' : 'light';
}

function getSavedScheme() {
    return localStorage.getItem('color-scheme');
}

function saveScheme(scheme) {
    localStorage.getItem('color-scheme', scheme);
}

function clearScheme(scheme) {
    localStorage.removeItem('color-scheme', scheme);
}

setupSwitcher();
setupScheme();


