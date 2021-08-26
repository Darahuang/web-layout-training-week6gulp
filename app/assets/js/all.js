const signInModal = new bootstrap.Modal(document.querySelector('.js-signInModal'));
const signUpModal = new bootstrap.Modal(document.querySelector('.js-signUpModal'));

const signInModalLink = document.querySelector('.js-signInModal-link');
const signUpModalLink = document.querySelector('.js-signUpModal-link');
signInModalLink.addEventListener('click', (e) => {
  e.preventDefault();
  signInModal.show();
  signUpModal.hide();
});
signUpModalLink.addEventListener('click', (e) => {
  e.preventDefault();
  signInModal.hide();
  signUpModal.show();
});

const swiper = new Swiper('.mySwiper', {
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
});
// const swiper = new Swiper('.mySwiper', {
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
