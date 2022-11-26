const slider = document.querySelector(".slider-container");

let mySwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 16,
      slideClass: "services__card",
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      slideToClickedSlide: true,
    });
    slider.dataset.mobile = "true";
  }

  if (window.innerWidth >= 768) {
    slider.dataset.mobile = "false";

    if (slider.classList.contains("swiper-initialized")) {
      mySwiper.destroy();
    }
  }
}
mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});
