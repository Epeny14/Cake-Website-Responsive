/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Hide menu */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME SWIPER ===============*/
const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    grabCursor: true,
    speed: 800,
    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: ['-120%', 0, -500],
            rotate: [0, 0, -45],
            opacity: 0,
        },
        next: {
            translate: ['120%', 0, -500],
            rotate: [0, 0, 45],
            opacity: 0,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

/*=============== CHANGE HEADER STYLES ===============*/


/*=============== PRODUCTS SWIPER ===============*/


/*=============== NEW SWIPER ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
