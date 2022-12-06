const services = document.querySelector(".services");
const sliderServices = services.querySelector(".slider-container");

const repair = document.querySelector(".repair");
const sliderRepair = repair.querySelector(".slider-container");

const price = document.querySelector(".price");
const sliderPrice = price.querySelector(".slider-container");


import Swiper, {  Pagination } from "swiper";
let mySwiper;


function mobileSlider(slid) {
  if (window.innerWidth < 768 && slid.dataset.mobile == "false") {
    mySwiper = new Swiper(slid, {
      modules: [ Pagination] ,
      slidesPerView: "auto",
      spaceBetween: 16,
      slideClass: "card",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      slideToClickedSlide: true,
    });
    slid.dataset.mobile = "true";
  }

  if (window.innerWidth >= 768) {
    slid.dataset.mobile = "false";

    if (slid.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}
mobileSlider(sliderServices);
mobileSlider(sliderRepair);
mobileSlider(sliderPrice);


window.addEventListener("resize", () => {
  mobileSlider(sliderServices);
  mobileSlider(sliderRepair);
  mobileSlider(sliderPrice);
});

