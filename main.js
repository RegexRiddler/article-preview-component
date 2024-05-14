const socialOpen = document.getElementById('social--open');
const socialClosed = document.getElementById('social--closed');
const socialMenu = document.getElementById('social__menu');

socialClosed.addEventListener('click', () => {
  socialMenu.classList.toggle('visible');
})

socialOpen.addEventListener('click', () => {
  socialMenu.classList.toggle('visible');
})