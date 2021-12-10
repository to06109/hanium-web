var express = require('express');
var router = express.Router();

//ctrl 받아오기
const ctrl = require("./home.ctrl");

router.get('/detail', ctrl.output.detail);
//router.post('/detail', ctrl.process.detail);
//router.get('/test', ctrl.output.detail);
  
module.exports = router;

