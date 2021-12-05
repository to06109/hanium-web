var express = require('express');
var router = express.Router();

//ctrl 받아오기
const ctrl = require("./home.ctrl");

router.get('/login', ctrl.output.login);
router.get('/register', ctrl.output.register);

router.post('/login', ctrl.process.login);
router.post('/register', ctrl.process.register);


module.exports = router;