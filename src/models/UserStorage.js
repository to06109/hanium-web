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

    static getUsers(...fields) { //은닉화된 users 내보내는 함수, fields: 원하는 컬럼만 사용할 수 있도록
        //const users = this.#users;

        const newUsers = fields.reduce((newUsers, field) => { //newUsers: 원하는 컬럼만 담을 변수
            if (users.hasOwnProperty(field)) { //받은 파라미터에 해당하는 key값이 있는지 확인
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
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


    static save(userInfo) {

    }
}

module.exports = UserStorage;