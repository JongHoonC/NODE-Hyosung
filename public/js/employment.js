const btns = document.querySelectorAll('.over');
const tabWrap = document.querySelector('.tab_wraper');
const conts = document.querySelectorAll('.cont');

let h_wrap = document.getElementById('h_wrap');
let gnb = document.getElementById('gnb');
let fixedNav = document.getElementById('fixedNav');

gnb.addEventListener('mouseover', event => {
  h_wrap.style.height = '180px';
  for (i = 0; i < conts.length; i++) {
    conts[i].style.height = '100px';
  }
});

gnb.addEventListener('mouseleave', event => {
  h_wrap.style.height = '100px';
  for (i = 0; i < conts.length; i++) {
    conts[i].style.height = '100px';
  }
});

gnb.addEventListener('mouseover', e => {
  //dataset.id 는  data-id="" 를 의미한다.
  const id = e.target.dataset.id;
  if (id) {
    //각각의 btn한테 active라는 클래스를 제거하기
    btns.forEach(btn => {
      console.log(tabWrap);
      btn.classList.remove('active');
    });
    //클릭한 애 한테만 active 클래스를 추가
    e.target.classList.add('active');
    conts.forEach(cont => {
      cont.classList.remove('active');
    });
    const contID = document.getElementById(id);
    //getElementById(id); 에 id와 if문에 id 값을 맞춰줘야한다.
    contID.classList.add('active');
  }
});
gnb.addEventListener('mouseleave', e => {
  btns.forEach(btn => {
    btn.classList.remove('active');
  });
  //클릭한 애 한테만 active 클래스를 추가
  conts.forEach(cont => {
    cont.classList.remove('active');
  });
});

const icons = document.querySelectorAll('.icon');
let mySidenav = document.getElementById('mySidenav');
icons.forEach(icon => {
  icon.addEventListener('click', event => {
    icon.classList.toggle('open');
    mySidenav.classList.toggle('SlideNav');
    h_wrap.classList.toggle('hamberger');
  });
});

window.onscroll = function () {
  scrollBtn();
};
function scrollBtn() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    h_wrap.classList.add('focus');
  } else {
    h_wrap.classList.remove('focus');
  }
}

window.addEventListener('scroll', event => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    fixedNav.classList.add('active');
  } else {
    fixedNav.classList.remove('active');
  }
});

$(() => {
  let stickyTop = 0,
    scrollTarget = false;

  let timeline = $('.timeline__nav'),
    items = $('li', timeline),
    milestones = $('.timeline__section .milestone'),
    offsetTop = parseInt(timeline.css('top'));

  const TIMELINE_VALUES = {
    start: 100,
    step: 30,
  };

  $(window)
    .resize(function () {
      timeline.removeClass('fixed');

      stickyTop = timeline.offset().top - offsetTop;

      $(window).trigger('scroll');
    })
    .trigger('resize');

  $(window)
    .scroll(function () {
      if ($(window).scrollTop() > stickyTop) {
        timeline.addClass('fixed');
      } else {
        timeline.removeClass('fixed');
      }
    })
    .trigger('scroll');

  items.find('span').click(function () {
    let li = $(this).parent(),
      index = li.index(),
      milestone = milestones.eq(index);

    if (!li.hasClass('active') && milestone.length) {
      scrollTarget = index;

      let scrollTargetTop = milestone.offset().top - 100;

      $('html, body').animate(
        {scrollTop: scrollTargetTop},
        {
          duration: 0,
          complete: function complete() {
            scrollTarget = false;
          },
        },
      );
    }
  });

  $(window)
    .scroll(function () {
      let viewLine = $(window).scrollTop() + $(window).height() / 3,
        active = -1;

      if (scrollTarget === false) {
        milestones.each(function () {
          if ($(this).offset().top - viewLine > 0) {
            return false;
          }

          active++;
        });
      } else {
        active = scrollTarget;
      }

      timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px');

      items.filter('.active').removeClass('active');

      items.eq(active != -1 ? active : 0).addClass('active');
    })
    .trigger('scroll');
});

function filter() {
  var value, name, item, i;

  value = document.getElementById('value').value.toUpperCase();
  item = document.getElementsByClassName('list');

  for (i = 0; i < item.length; i++) {
    name = item[i].getElementsByClassName('title');
    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      item[i].style.display = 'flex';
    } else {
      item[i].style.display = 'none';
    }
  }
}
