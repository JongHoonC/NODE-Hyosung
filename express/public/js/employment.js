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
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    fixedNav.classList.add('active');
  } else {
    fixedNav.classList.remove('active');
  }
});

let year = document.querySelectorAll('.nav_year');
for (let i = 0; i < year.length; i++) {
  year[i].addEventListener('click', () => {
    year[i].classList.toggle('active');
  });
  year[i].addEventListener('click', () => {
    year[i].classList.remove('active');
  });
}

function checkVisible(element, check = 'above') {
  const viewportHeight = $(window).height(); // Viewport Height
  const scrolltop = $(window).scrollTop(); // Scroll Top
  const y = $(element).offset().top;
  const elementHeight = $(element).height();
  console.log(scrolltop);

  // 반드시 요소가 화면에 보여야 할경우
  if (check == 'visible') return y < viewportHeight + scrolltop && y > scrolltop - elementHeight;

  // 화면에 안보여도 요소가 위에만 있으면 (페이지를 로드할때 스크롤이 밑으로 내려가 요소를 지나쳐 버릴경우)
  if (check == 'above') return y < viewportHeight + scrolltop;
}

// 리소스가 로드 되면 함수 실행을 멈출지 말지 정하는 변수

let isVisible = false;
// 이벤트에 등록할 함수
const func = function () {
  let isVisible = false;
  if (!isVisible && checkVisible('#1988')) {
    isVisible = true;
  }

  // 만일 리소스가 로드가 되면 더이상 이벤트 스크립트가 있을 필요가 없으니 삭제
  // isVisible && window.removeEventListener('scroll', func);
};

// 스크롤 이벤트 등록
window.addEventListener('scroll', func);
