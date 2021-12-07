"use strict"

const UserStorage = require("./UserStorage");

class User {
    constructor(body) { //body를 받음
        this.body = body;
    }

    //await은 async함수 안에서만 동작
    async login() {
        const client = this.body;
        try {
            const { userID, userPassword } = await UserStorage.getUserInfo(client.id); //await: 얘가 다 수행될때까지 기다림

            if(userID) { //전달한 id가 UserStorage에 있으면
    
                if (userID === client.id && userPassword === client.psword) { //이 id와 client의 아이디 비교
                    return { success: true };
                }
                return { success: false, msg: "비밀번호가 틀렸습니다."};
            }
            return { success: false, msg: "존재하지 않는 아이디입니다."};

        } catch (err){
            return { success: false, msg: err };
        }
    }

    async register() {
        const client = this.body;
        try{ //async await 에러처리
            const response = await UserStorage.save(client); //회원가입 데이터 저장
            return response;
        } catch (err) {
            return {success: false, msg: err};
        }
    }
}

module.exports = User;