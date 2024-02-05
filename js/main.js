let closeBtn = document.querySelector('.menu__close');
let menuBtn = document.querySelector('.menu__btn');
let menuList = document.querySelector('.menu__list');
let menuShadow = document.querySelector('.menu--close') 

menuBtn.addEventListener('click', () => {
  menuList.classList.toggle('menu__list--open');
  menuShadow.classList.toggle('menu--open');
});
closeBtn.addEventListener('click', () => {
  menuList.classList.remove('menu__list--open');
  menuShadow.classList.remove('menu--open');
});
document.addEventListener('keydown', (e) => {
  if (e.code === 'Escape') {
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
  }
});

