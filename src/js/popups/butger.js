const header = document.querySelector('.header');
const openButton = header.querySelector('.button-icon_menu');
let menu = document.querySelector('.left__menu');
const closeButton = menu.querySelector('.button-icon_close');
let blur = document.querySelector('.blur');

openButton.onclick = function () {
  menu.classList.add('left__menu_visibility');
  blur.style.display = 'block';
}

closeButton.onclick = function () {
  menu.classList.remove('left__menu_visibility');
  blur.style.display = 'none';
}

blur.onclick = function () {
  menu.classList.remove('left__menu_visibility')
  blur.style.display = 'none';
}
window.onresize = () => {
  if (window.innerWidth > 1120) {
    blur.style.display = 'none';
    menu.classList.remove('left__menu_visibility');
  }
}
