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
}

module.exports = UserStorage;