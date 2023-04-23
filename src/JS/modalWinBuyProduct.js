const modalImgEl = document.querySelector('.js-product-img');
const modalNameEl = document.querySelector('.js-product-name');
const modalPriceEl = document.querySelector('.js-product-price');
const catalogEl = document.querySelector('.js-catalog');

catalogEl.addEventListener('click', onProductNameClick);

function onProductNameClick(e) {
  const productCard = getProductCard(e);
  if (!productCard) {
    return;
  }
  changeProductInfo(productCard);
}

function getProductCard(e) {
  if (e.target.className !== 'catalog-card-text') {
    return;
  }
  return e.target.closest('li');
}

function changeProductInfo(productCard) {
  const productImg = productCard.querySelector('picture');
  const productName = productCard.querySelector('.catalog-card-text');
  const productPrice = productCard.querySelector('.catalog-card-prise');
  modalImgEl.innerHTML = productImg.innerHTML;
  console.log(modalImgEl.childNodes);
  modalNameEl.textContent = productName.textContent;
  modalPriceEl.textContent = productPrice.textContent;
}
