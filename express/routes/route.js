const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const {send} = require('process');
const db = require('./../db.js');
const fs = require('fs');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/emp', (req, res, next) => {
  res.render('employment', {layout: 'layoutEmp'});
});
router.get('/about_us', (req, res, next) => {
  res.render('about_us', {layout: 'layoutEmp'});
});
router.get('/history', (req, res, next) => {
  res.render('history', {layout: 'layouthistory'});
});
router.get('/login', (req, res, next) => {
  res.render('login', {layout: 'layoutLogin'});
});
router.get('/sign-up', (req, res, next) => {
  res.render('sign-up', {layout: 'layoutLogin'});
});

router.get('/write', (req, res, next) => {
  res.render('write', {layout: 'layoutNotice'});
});

router.get('/writeList', (req, res, next) => {
  res.render('writeList', {layout: 'layoutNotice'});
});

router.get('/notice', (req, res, next) => {
  db.getNotice(rows => {
    res.render('notice', {rows: rows, layout: 'layoutNotice'});
  });
});

// 뉴스 메인
router.get('/news', (req, res, next) => {
  db.getnews(rows => {
    res.render('news', {rows: rows, layout: 'layoutnews'});
  });
});
router.get('/news_write', (req, res, next) => {
  res.render('news_write', {layout: 'layoutnews'});
});

//뉴스 사진 올리기 위한 작업
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, '../public/upload/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); //파일의 확장자
      done(null, path.basename(file.originalname, ext) + Date.now() + ext); //파일명+날짜+확장자명
    },
  }),
  limits: {fileSize: 1024 * 1024 * 2}, //1024는 픽셀을 의미하고 2는 사진의 크키 즉 2메가바이트 라는 것이다.
});

// 뉴스 작성하고 넘겨주기
router.post('/news_write', upload.single('img'), (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let title = param['title'];
  let create_time = param['create_time'];
  let img = 'upload/' + req.file.filename;
  db.insertNews(img, title, create_time, () => {
    res.redirect('/news');
  });
});

// 공지 작성 페이지
router.post('/writeList', (req, res, next) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let title = param['title'];
  let content = param['content'];
  db.insertNotice(title, content, () => {
    res.redirect('/notice');
  });
});

//공지사항 상세 페이지
router.get('/detail', (req, res) => {
  let id = req.query.id;
  db.detail(id, row => {
    res.render('detail', {row: row[0], layout: 'layoutNotice'});
    //파일명과 맞아야함
  });
});

// 삭제 페이지
router.get('/delete_notice', (req, res) => {
  //sub1의 onclick과 맞아야함
  let id = req.query.id;
  db.deletetNotice(id, () => {
    res.redirect('/notice');
    //파일명과 맞아야함
  });
});

//공지사항 수정페이지로 넘어가는 과정
router.get('/update_notice', (req, res) => {
  let id = req.query.id;
  db.getUpdateNotice(id, row => {
    res.render('notice_update', {row: row[0], layout: 'layoutNotice'});
  });
});

//공지사항 수정
router.post('/update_notice', (req, res) => {
  let param = JSON.parse(JSON.stringify(req.body));
  let id = param['id'];
  let title = param['title'];
  let content = param['content'];
  let create_time = param['create_time'];
  db.updateNotice(id, title, content, () => {
    res.redirect('/notice');
  });
});

// 로그인
router.post('/goLOGIN', (req, res, next) => {
  let paramL = JSON.parse(JSON.stringify(req.body));
  let id = paramL['id'];
  let pw = paramL['pw'];
  db.loginCheck(id, pw, result => {
    if (result.length > 0) {
      res.redirect('/');
    } else {
      res.send(`<script>alert('로그인정보가 일치하지 않습니다'); document.location.href="/login";</script>`);
    }
  });
});

// 회원가입 페이지
router.post('/sign-up', (req, res, next) => {
  let paramS = JSON.parse(JSON.stringify(req.body));
  let id = paramS['id'];
  let name = paramS['name'];
  let pw = paramS['pw'];
  let mail = paramS['mail'];
  let phoneNum = paramS['phoneNum'];
  db.userSignUp(id, name, pw, mail, phoneNum, () => {
    res.render('sign-up-next', {id: id, layout: 'layoutLogin'});
    //past 에서 특정 값만 넘겨줄 때 row 대신 넘겨줄 값을 써준 후 <% row.id %> 가 아닌 <% id %> 를 써준다
  });
});

// 회원가입 다음창
router.get('/sign-up-next', (req, res) => {
  let id = req.query.id;
  db.signUpNext(id, row => {
    res.render('sign-up-next', {row: row[0], layout: 'layoutLogin'});
  });
});

module.exports = router;
