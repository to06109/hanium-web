var express = require('express');
var router = express.Router();

router.get('/login', (req, res) => {
    res.render('login'); //index.ejs를 그림
})
router.post('/login', (req, res) => {
    //frontend에서 전달한 req 받아서 처리
    console.log(req.body);
})
  
router.get('/register', (req, res) => {
    res.render('register'); //index.ejs를 그림
})

module.exports = router;