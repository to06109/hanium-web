"use strict"

const User = require("../../models/User")
const Detail = require("../../models/Detail")

const output = {
    login: (req, res) => {
        res.render('login'); //login.ejs를 그림
    },
    
    register: (req, res) => {
        res.render('register'); //register.ejs를 그림
    },

    detail: (req, res) => {
        res.render('detail'); //detail.ejs를 그림
    },
};



const process = {
    login: async (req, res) => {
        const user = new User(req.body); //client가 전달한 request 데이터를 넣음
        const response = await user.login(); //User에서 res 받음
        return res.json(response); //받은 res를 client한테 json형태로 전달
    },

    register: async (req, res) => {
        const user = new User(req.body); 
        const response = await user.register(); 
        return res.json(response); 
    },

    detail: async (req, res) => {
        const detail = new Detail(req.body); 
        const response = await detail.search(); 
        //console.log(res.json(response));
        return res.json(response); 
    }

};

//ctrl 내보내기
module.exports = {
    output,
    process,
};