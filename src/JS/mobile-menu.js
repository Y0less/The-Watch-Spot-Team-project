(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelectorAll('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleModal);

  refs.closeMenuBtn.forEach(element => {
    element.addEventListener('click', toggleModal);
  });

  function toggleModal() {
    refs.menu.classList.toggle('is-open');
  }
})();
