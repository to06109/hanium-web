"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) { //body를 받음
        this.body = body;
    }

    login() {
        const body = this.body;
        const {id, psword} = UserStorage.getUserInfo(body.id);

        if(id) { //전달한 id가 UserStorage에 있으면

            if (id === body.id && psword === body.psword) { //이 id와 client의 아이디 비교
                return {success: true};
            }

            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }
        
        return { success: false, msg: "존재하지 않는 아이디입니다."};
    }
}

module.exports = User;