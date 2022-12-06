const express = require('express');
const router = express.Router();
const path = require('path');
const {send} = require('process');

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
router.get('/notice', (req, res, next) => {
  res.render('notice', {layout: 'layoutNotice'});
});
router.get('/write', (req, res, next) => {
  res.render('write', {layout: 'layoutNotice'});
});
router.get('/detail', (req, res, next) => {
  res.render('detail', {layout: 'layoutNotice'});
});
router.get('/writeList', (req, res, next) => {
  res.render('writeList', {layout: 'layoutNotice'});
});

router.post('/writeList', (req, res, next) => {
  let param = JSON.parse(JSON.stringify(req.body));
  res.render('writeList.ejs', {layout: 'layoutNotice', data: param});
  console.log(param);
});
router.post('/goLOGIN', (req, res, next) => {
  let paramL = JSON.parse(JSON.stringify(req.body));
  let id = paramL['userID'];
  let pass = paramL['userPW'];
  console.log(`userID : ${id}`);
  console.log(`userPW : ${pass}`);
});
router.post('/GOsign-up', (req, res, next) => {
  let paramS = JSON.parse(JSON.stringify(req.body));
  let id = paramS['id'];
  let name = paramS['name'];
  let pw = paramS['pw'];
  let mail1 = paramS['mail'];
  let number = paramS['phoneNum'];
  console.log(`userID : ${id}`);
  console.log(`userName : ${name}`);
  console.log(`userPW : ${pw}`);
  console.log(`userEmail : ${mail1}`);
  console.log(`userPhonenumber : ${number}`);
});

module.exports = router;
