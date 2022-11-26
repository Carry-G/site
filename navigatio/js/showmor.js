let buttonShow = document.querySelector('.button__show');  
let contentShow = document.querySelector('.swiper-wrapper');
let buttonText = document.querySelector('.button__text')
let buttonImage = document.querySelector('.button__image');

buttonShow.onclick = function() {
  if ( contentShow.dataset.all == "false") {
    buttonText.textContent = 'Скрыть';
    buttonImage.style.transform = 'rotate(-180deg)';
    contentShow.style.height = '100%';
    contentShow.dataset.all = "true"


  } else {
    buttonText.textContent = 'Показать все';
    buttonImage.style.transform = 'rotate(0)';
    contentShow.style.height = '150px';
    contentShow.dataset.all = "false"
  }
  
};



