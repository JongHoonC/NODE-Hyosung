// 데이터와 연결되있는 파일

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'us-cdbr-east-06.cleardb.net',
  user: 'b2c5052e30420d',
  password: '5d25f9e7',
  database: 'heroku_d3a3820586dcf83', //테이블 이름을 적어준다.
  multipleStatements: true,
  dateStrings: 'date',
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

//notice 값 불러오기
function getNotice(callback) {
  connection.query('SELECT * FROM notice_table ORDER BY id DESC', (err, rows) => {
    if (err) throw err;
    callback(rows);
  });
}

// notice를 입력할 때
function insertNotice(title, content, callback) {
  connection.query(`INSERT INTO notice_table(title, create_time, content) VALUES('${title}',NOW(),'${content}')`, err => {
    if (err) throw err;
    callback();
  });
}

// 공지사항 상세페이지
function detail(id, callback) {
  connection.query(`SELECT * FROM notice_table WHERE id='${id}'`, (err, row) => {
    if (err) throw err;
    callback(row);
  });
}

//삭제 하기
function deletetNotice(id, callback) {
  connection.query(`DELETE FROM notice_table WHERE id='${id}'`, err => {
    if (err) throw err;
    callback();
  });
}

// 공지사항 수정
function updateNotice(id, title, content, callback) {
  connection.query(`UPDATE notice_table SET title='${title}', content='${content}', create_time=NOW() WHERE id='${id}'`, err => {
    if (err) throw err;
    callback();
  });
}

// 공지사항 수정 페이지로 넘어가는 과정
function getUpdateNotice(id, callback) {
  connection.query(`select * from notice_table where id='${id}'`, (err, row) => {
    if (err) throw err;
    callback(row);
  });
}

// 회원가입 페이지
function userSignUp(id, name, pw, mail, phoneNum, callback) {
  connection.query(`INSERT INTO user_list(id, name, pw, mail, phoneNum, create_time) values('${id}','${name}','${pw}','${mail}',${phoneNum},NOW())`, err => {
    if (err) throw err;
    callback();
  });
}

// 회원가입 다음창
function signUpNext(id, callback) {
  connection.query(`SELECT * FROM user_list WHERE id='${id}'`, (err, row) => {
    if (err) throw err;
    callback(row);
  });
}

// 로그인
function loginCheck(id, pw, callback) {
  connection.query(`SELECT * FROM user_list WHERE id='${id}' and pw='${pw}'`, (err, results) => {
    if (err) throw err;
    callback(results);
  });
}

// 뉴스 메인
function getnews(callback) {
  connection.query('SELECT * FROM news_table ORDER BY id DESC', (err, rows) => {
    if (err) throw err;
    callback(rows);
  });
}

// 뉴스 작성
function insertNews(img, title, content, callback) {
  connection.query(`INSERT INTO news_table(img,title,content,create_time) VALUES('${img}','${title}','${content}',NOW())`, err => {
    if (err) throw err;
    callback();
  });
}

// 뉴스 상세페이지
function news_detail(id, callback) {
  connection.query(`SELECT * FROM news_table WHERE id='${id}'`, (err, row) => {
    if (err) throw err;
    callback(row);
  });
}

//뉴스 삭제 하기
function deletetNews(id, callback) {
  connection.query(`DELETE FROM news_table WHERE id='${id}'`, err => {
    if (err) throw err;
    callback();
  });
}

// 뉴스 수정
function updateNews(id, title, content, img, callback) {
  connection.query(`UPDATE news_table SET title='${title}', content='${content}', img='${img}' ,create_time=NOW() WHERE id='${id}'`, err => {
    if (err) throw err;
    callback();
  });
}

// 뉴스 수정 페이지로 넘어가는 과정
function getUpdateNews(id, callback) {
  connection.query(`select * from news_table where id='${id}'`, (err, row) => {
    if (err) throw err;
    callback(row);
  });
}

// 메인페이지 뉴스
function getMainNews(callback) {
  connection.query('SELECT * FROM news_table ORDER BY id DESC', (err, rows) => {
    if (err) throw err;
    callback(rows);
  });
}

module.exports = {
  getNotice,
  insertNotice,
  detail,
  updateNotice,
  getUpdateNotice,
  deletetNotice,
  userSignUp,
  signUpNext,
  loginCheck,
  getnews,
  insertNews,
  news_detail,
  deletetNews,
  updateNews,
  getUpdateNews,
  getMainNews,
};
