

  // SWIPER JS
  // SWIPER JS
// 메인 배너
var swiper1 = new Swiper(".Swiper1", {
  scrollbar: {
    el: ".swiper-scrollbar-1",
    hide: true,
  },
  loop: true,
  speed: 3000,
  autoplay: {
    delay: 3000,
    speed: 5000,
  }
});





// 프로그램
var swiper = new Swiper(".Swiper2", {
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
    // type: "fraction",
  },
  slidesPerView: 4,
  slidesPerGroup: 4,
  spaceBetween: 30,

});


// 상품

var swiper3 = new Swiper(".Swiper3", {
  pagination: {
    el: ".swiper-pagination-3",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    speed: 3000,
  }



});


// AOS JS
// AOS JS
AOS.init({
  duration: 1000,
  offset: 300,
  easing: 'ease-out-back',
});