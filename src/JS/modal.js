const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');
const modal = document.querySelector('[data-modal]');
const backdropEl = document.querySelector('.backdrop');

openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

function openModal() {
  modal.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
  document.addEventListener('keydown', closeModalWin);
  document.addEventListener('click', closeModalWin);
  backdropEl.addEventListener('click', onBackdropClick);
}

function closeModal() {
  modal.classList.add('is-hidden');
  document.body.style.overflow = '';
}

function closeModalWin(event) {
  if (event.code === 'Escape') {
    closeModal();
    document.removeEventListener('keydown', closeModalWin);
    backdropEl.addEventListener('click', onBackdropClick);
    return;
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
    backdropEl.addEventListener('click', onBackdropClick);
    document.removeEventListener('keydown', closeModalWin);
    return;
  }
}
