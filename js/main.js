// Start Swiper
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: "true",
    fade: "true",
    grabCursor: "true",
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 2,
      },
    },
  }
  );
  