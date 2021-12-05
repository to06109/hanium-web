"use strict";

class UserStorage {//데이터베이스

    static #users = { //변수 은닉화

        id: ["yesong", "song", "to06109"],
        psword: ["1234", "5678", "yesong"],
        name: ["예송", "최예송", "쏭"],

    };

    static getUsers(...fields) { //은닉화된 users 내보내는 함수, fields: 원하는 컬럼만 사용할 수 있도록
        const users = this.#users;

        const newUsers = fields.reduce((newUsers, field) => { //newUsers: 원하는 컬럼만 담을 변수
            if (users.hasOwnProperty(field)) { //받은 파라미터에 해당하는 key값이 있는지 확인
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});

        return newUsers;
    }

    static getUserInfo(id) {

        const users = this.#users; //users 데이터 받아옴
        const idx = users.id.indexOf(id); //받아온 id의 인덱스값
        const usersKeys = Object.keys(users); //users의 key값들만 배열로 만듬: [id, psword, name]
        
        const userInfo = Object.keys(users).reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo; //user의 id에 맞는 정보(psword, name)가 배열로 만들어짐
    }
}

module.exports = UserStorage;