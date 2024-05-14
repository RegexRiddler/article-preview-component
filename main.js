const shareMenuButtonOpen = document.getElementById('share__menu__button--open');
const shareMenuButtonClosed = document.getElementById('share__menu__button--closed');
const shareMenu = document.getElementById('share__menu');

shareMenuButtonClosed.addEventListener('click', () => {
  shareMenu.classList.toggle('visible');
})

shareMenuButtonOpen.addEventListener('click', () => {
  shareMenu.classList.toggle('visible');
})