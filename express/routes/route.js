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

module.exports = router;
