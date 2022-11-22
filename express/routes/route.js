const express = require('express');
const router = express.Router();
const path = require('path');
const {send} = require('process');

router.get('/', (req, res, next) => {
  res.render('index');
});
// router.post('/', (req, res, next) => {
//   let param = JSON.parse(JSON.stringify(req.body));
// });

module.exports = router;
