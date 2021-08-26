"use strict";

var signInModal = new bootstrap.Modal(document.querySelector('.js-signInModal'));
var signUpModal = new bootstrap.Modal(document.querySelector('.js-signUpModal'));
var signInModalLink = document.querySelector('.js-signInModal-link');
var signUpModalLink = document.querySelector('.js-signUpModal-link');
signInModalLink.addEventListener('click', function (e) {
  e.preventDefault();
  signInModal.show();
  signUpModal.hide();
});
signUpModalLink.addEventListener('click', function (e) {
  e.preventDefault();
  signInModal.hide();
  signUpModal.show();
});
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    767: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
}); // const swiper = new Swiper('.mySwiper', {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false
//   },
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 40
//     },
//     1024: {
//       slidesPerView: 5,
//       spaceBetween: 50
//     }
//   }
// });
//# sourceMappingURL=all.js.map
