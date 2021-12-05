"use strict"

const UserStorage = require("../../models/UserStorage")

const output = {
    login: (req, res) => {
        res.render('login'); //index.ejs를 그림
    },
    
    register: (req, res) => {
        res.render('register'); //index.ejs를 그림
    },
};



const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login(); //User에서 res 받음
        return res.json(response); //받은 res를 client한테 json형태로 전달
        // const id = req.body.id,
        //   psword = req.body.psword;

        // const users = UserStorage.getUsers("id","psword"); //은닉화된 users 받아옴
    
        // const response = {};
        // if (users.id.includes(id)){
        //     const idx = users.id.indexOf(id); //id의 인덱스 가져옴
        //     if(users.psword[idx] === psword) { //비밀번호 인증
        //         response.success = true;
        //         return res.json(response);
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다.";
        // return res.json(response);
    },
};

//ctrl 내보내기
module.exports = {
    output,
    process,
};