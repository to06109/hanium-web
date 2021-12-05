"use strict";

const fs = require("fs").promises; //파일 데이터베이스에 접근하기 위한 파일시스템(promise로 받아옴)

class UserStorage {//데이터베이스
    static #getUserInfo(data, id) { //은닉화된 함수 -> 항상 코딩 상단에
        const users = JSON.parse(data);

            const idx = users.id.indexOf(id); //받아온 id의 인덱스값
            const usersKeys = Object.keys(users); //users의 key값들만 배열로 만듬: [id, psword, name]

            const userInfo = Object.keys(users).reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            }, {});
            
        return userInfo; //user의 id에 맞는 정보(psword, name)가 배열로 만들어짐
    }

    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;

        const newUsers = fields.reduce((newUsers, field) => { //newUsers: 원하는 컬럼만 담을 변수
            if (users.hasOwnProperty(field)) { //받은 파라미터에 해당하는 key값이 있는지 확인
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUsers(isAll, ...fields) { //은닉화된 users 내보내는 함수, fields: 원하는 컬럼만 사용할 수 있도록
        //데이터베이스 파일 읽기
        return fs
            .readFile("./src/databases/users.json") //promise를 반환
            .then((data) => {
                return this.#getUsers(data, isAll, fields); //fields를 넘김
            })
            .catch((err) => console.error(err));

        //const users = this.#users;
        
    }

    static getUserInfo(id) {
        //데이터베이스 파일 읽기
        return fs
            .readFile("./src/databases/users.json") //promise를 반환
            .then((data) => {
                return this.#getUserInfo(data, id);
            })
            .catch((err) => console.error(err));

    }

    //회원가입 데이터 넣기: 데이터 불러옴-> 추가할 데이터 추가 -> 데이터 저장
    static async save(userInfo) {
        const users = await this.getUsers(true); //모든 데이터 가져옴
        //데이터 추가
        if (users.id.includes(userInfo.id)) { //데베에 존재하는 아이디이면
            throw "이미 존재하는 아이디입니다.";
        } 
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.name.push(userInfo.name);
        users.email.push(userInfo.email);
        //데이터 저장
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true};
    }
}

module.exports = UserStorage;