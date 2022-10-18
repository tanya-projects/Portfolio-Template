'use strict';

// VARIABLES
const navItems = document.querySelectorAll('.nav__link');
const navList = document.querySelector('.nav__list');
const closeMenuBtn = document.getElementById('close__menu');
const openMenuBtn = document.getElementById('open__menu');
const contactBtn = document.querySelector('contact__btn');

// FUNCTIONS
// Change visibility of menu on mobile devices
function menuVisibilityChanger(e, navStyle, btnStyle) {
  e.preventDefault();
  navList.style.right = navStyle;
  closeMenuBtn.style.right = btnStyle;
}

// SCRIPT
// Open menu on mobile
openMenuBtn.addEventListener('click', (e) => {
  menuVisibilityChanger(e, 0, '1.5rem');
});
// Close menu on mobile
closeMenuBtn.addEventListener('click', (e) => {
  menuVisibilityChanger(e, '100%', '100%');
});

// Navigation scrolling
navItems.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
    if (window.innerWidth < 476) {
      menuVisibilityChanger(e, '100%', '100%');
    }
  });
});

// Send message
