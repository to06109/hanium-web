"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) { //body를 받음
        this.body = body;
    }

    login() {
        const client = this.body;
        const {id, psword} = UserStorage.getUserInfo(client.id);

        if(id) { //전달한 id가 UserStorage에 있으면

            if (id === client.id && psword === client.psword) { //이 id와 client의 아이디 비교
                return {success: true};
            }

            return { success: false, msg: "비밀번호가 틀렸습니다."};
        }

        return { success: false, msg: "존재하지 않는 아이디입니다."};
    }

    register() {
        const client = this.body;
        UserStorage.save(client); //회원가입 데이터 저장
    }
}

module.exports = User;