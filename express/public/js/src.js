new fullpage('#fullpage', {
  //하단은 옵션
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  fixedElements: '#h_wrap, #scroll-downs',
  responsiveWidth: 768,
});

var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  centeredSlides: true,
  spaceBetween: 10,
  grabCursor: true,
  paddingTop: '100px',
  responsiveSlides: true,
});

var swiper = new Swiper('.swiperMy', {
  slidesPerView: 3,
  spaceBetween: 30,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },
});
