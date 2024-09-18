const express = require('express');
const router = express.router();
const mysql = require('mysql');

router.post('/login', (req, res, next) => {
  console.log(res,'login api')
  return res.render('index');
})

module.exports = router;
