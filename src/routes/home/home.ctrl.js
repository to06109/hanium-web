"use strict"

const User = require("../../models/User")

const output = {
    login: (req, res) => {
        res.render('login'); //index.ejs를 그림
    },
    
    register: (req, res) => {
        res.render('register'); //index.ejs를 그림
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
    }
};

//ctrl 내보내기
module.exports = {
    output,
    process,
};