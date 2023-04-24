// const curSl = document.querySelector('.hero-current-slide');

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.hero-swiper-pagination-number',
    type: 'fraction',
    dynamicMainBullets: 2,
    formatFractionCurrent: function (number) {
      return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
      return `<span class="hero-current-slide ${currentClass}"></span
            ><span class="hero-swiper-pagination-line"></span
            ><span class="hero-quantity-slide ${totalClass}"></span>`;
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  autoplay: {
    delay: 4000,
  },
});
