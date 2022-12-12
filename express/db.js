// 데이터와 연결되있는 파일

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'hyosung', //테이블 이름을 적어준다.
  dateStrings: 'date',
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

//notice 값 불러오기
function getNotice(callback) {
  connection.query('SELECT * FROM notice_table ORDER BY id ASC', (err, rows) => {
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
module.exports = {
  getNotice,
  insertNotice,
  detail,
  updateNotice,
  getUpdateNotice,
  deletetNotice,
  userSignUp,
};
