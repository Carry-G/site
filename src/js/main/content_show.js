
const content = document.querySelector('.content__container');
const services = document.querySelector('.services');
const repair = document.querySelector('.repair');

let allShow = function (val) {
  let buttonShow = val.querySelector(".button-show");
  let contentShow = val.querySelector(".show");
  let buttonText = val.querySelector(".button-show_text");
  let buttonImage = val.querySelector(".button-show_text");
  let heigthText;
  if (val == content) {
    heigthText = contentShow.clientHeight;
  } else {
    heigthText = 150;
  }


  return buttonShow.onclick = function () {
    if (contentShow.dataset.all == "false") {
      buttonText.textContent = "Скрыть";
      buttonImage.style.transform = "rotate(-180deg)";
      contentShow.style.height = contentShow.scrollHeight + 'px';
      contentShow.dataset.all = "true";
    } else {
      if (val == content) {
        buttonText.textContent = "Читать дальше";
      } else {
        buttonText.textContent = "Показать все";
      }
      buttonImage.style.transform = "rotate(0)";
      contentShow.style.height = heigthText + 'px';
      contentShow.dataset.all = "false";
    }
  }
};

allShow(content);
allShow(services);
allShow(repair);