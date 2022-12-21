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
});

var swiper = new Swiper('.swiperMy', {
  slidesPerView: 3,
  loop: true,
  spaceBetween: 20,
  freeMode: true,
});
