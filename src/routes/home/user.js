var express = require('express');
var router = express.Router();

//ctrl 받아오기
const ctrl = require("./home.ctrl");

router.get('/login', ctrl.output.login);
router.post('/login', ctrl.process.login);
router.get('/register', ctrl.output.register);


module.exports = router;