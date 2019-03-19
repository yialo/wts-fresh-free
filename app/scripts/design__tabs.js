'use strict';

const design = document.querySelector('.freshfree-design');
const catalogTab = design.querySelector('.freshfree-design__tab--catalog');
const cardTab = design.querySelector('.freshfree-design__tab--product-card');

const toggleClass = function toggleTabActivityClasses() {
  design.classList.toggle('is-catalog-shown');
  design.classList.toggle('is-product-card-shown');
};

catalogTab.addEventListener('click', () => {
  if (!design.classList.contains('is-catalog-shown')) {
    toggleClass();
  }
});

cardTab.addEventListener('click', () => {
  if (!design.classList.contains('is-product-card-shown')) {
    toggleClass();
  }
});
