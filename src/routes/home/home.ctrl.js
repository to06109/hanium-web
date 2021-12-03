"use strict"

const output = {
    login: (req, res) => {
        res.render('login'); //index.ejs를 그림
    },
    
    register: (req, res) => {
        res.render('register'); //index.ejs를 그림
    },
};

//데이터베이스
const users = {
    id: ["yesong", "song", "to06109"],
    psword: ["1234", "5678", "yesong"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)){
            const idx = users.id.indexOf(id); //id의 인덱스 가져옴
            if(users.psword[idx] === psword) { //비밀번호 인증
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
    },
};

//ctrl 내보내기
module.exports = {
    output,
    process,
};