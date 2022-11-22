const btns = document.querySelectorAll('.over');
const tabWrap = document.querySelector('.tab_wraper');
const conts = document.querySelectorAll('.cont');

let h_wrap = document.getElementById('h_wrap');
let gnb = document.getElementById('gnb');

gnb.addEventListener('mouseover', event => {
  h_wrap.style.height = '180px';
  for (i = 0; i < conts.length; i++) {
    conts[i].style.height = '20px';
  }
});

gnb.addEventListener('mouseleave', event => {
  h_wrap.style.height = '100px';
  for (i = 0; i < conts.length; i++) {
    conts[i].style.height = '20px';
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

window.addEventListener('resize', () => {
  const ww = window.innerWidth;
  if (ww <= 1280) {
    h_wrap.style.height = '60px';
  } else {
    h_wrap.style.height = '100px';
  }
});

const icons = document.querySelectorAll('.icon');
icons.forEach(icon => {
  icon.addEventListener('click', event => {
    icon.classList.toggle('open');
  });
});

h_wrap.addEventListener('mouseover', event => {
  h_wrap.classList.add('active1');
});
h_wrap.addEventListener('mouseleave', event => {
  h_wrap.classList.remove('active1');
});
