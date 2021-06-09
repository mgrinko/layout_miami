'use strict';

const menu = document.querySelector('.page__menu');
const menuList = document.querySelector('.menu__list');

const menuOpener = document.querySelector('.menu-toggler--opener');
const menuCloser = document.querySelector('.menu-toggler--closer');

menuOpener.addEventListener('click', () => {
  menu.classList.add('page__menu--open');
});

menuCloser.addEventListener('click', () => {
  menu.classList.remove('page__menu--open');
});

menuList.addEventListener('click', (event) => {
  if (event.target.href) {
    menu.classList.remove('page__menu--open');
  }
});
