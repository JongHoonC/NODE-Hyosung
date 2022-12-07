// new fullpage('#fullpage', {
//   //하단은 옵션
//   autoScrolling: true,
//   scrollHorizontally: true,
//   navigation: true,
//   fixedElements: '#h_wrap, #scroll-downs',
//   responsiveWidth: 768,
// });

AOS.init(); // AOS initiation
AOS.init({
  disable: function () {
    var maxWidth = 768;
    return window.innerWidth < maxWidth;
  },
});
$('.aos-init').removeClass('aos-animate'); // remove ALL classes which triggers animation in document

new fullpage('#fullpage', {
  anchors: ['1', '2', '3', '4', '5', '6', '7', '8'],

  afterLoad: function () {
    var a_table = ['1', '2', '3', '4', '5', '6', '7', '8']; // duplicated table of anchors name

    for (var i = 0; i < a_table.length; i++) {
      $('.section-' + a_table[i] + '.active .aos-init').addClass('aos-animate'); // all magic goes here - when page is active, then all elements with AOS will start animate
    }
  },
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  fixedElements: '#h_wrap, #scroll-downs',
  scrollingSpeed: 900,
  responsiveWidth: 768,
  // responsive: true,
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

var swiper = new Swiper('.his_full_swiper', {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
});
