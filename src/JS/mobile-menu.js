const openMenuBtn = document.querySelector('[data-menu-open]');
const closeMenuBtn = document.querySelectorAll('[data-menu-close]');
const menu = document.querySelector('[data-menu]');

openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.forEach(element => {
  element.addEventListener('click', closeMenu);
});

function openMenu() {
  document.body.style.overflow = 'hidden';
  menu.classList.add('is-open');
}

function closeMenu() {
  menu.classList.remove('is-open');
  document.body.style.overflow = '';
}
