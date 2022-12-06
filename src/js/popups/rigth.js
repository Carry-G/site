const callButtomCall = document.querySelectorAll('.button-icon_call');
let callback = document.querySelector('.callback');

let blur = document.querySelector('.blur');
const chatButtomChat = document.querySelectorAll('.button-icon_chat');
let feedback = document.querySelector('.feedback');


function clickopt(btn, menu) {

  btn.onclick = function () {
    menu.classList.add('right_visibility');
    blur.style.display = 'block';
  }

  let closeButton = menu.querySelector('.button-icon_close');
  closeButton.onclick = function () {
    menu.classList.remove('right_visibility');
    blur.style.display = 'none';
  }
}

for (let bmt of chatButtomChat) {
  clickopt(bmt, feedback);
}
for (let bmt of callButtomCall) {
  clickopt(bmt, callback);
}




