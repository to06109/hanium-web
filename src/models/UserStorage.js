"use strict";

//DB 불러옴
const db = require("../config/db");

class UserStorage {//데이터베이스

    //로그인
    static getUserInfo(id) {
        //데이터베이스 파일 읽기
        //Promise 안의 구문이 성공하면 resolve 실행, 실패하면 reject 실행
        return new Promise((resolve, reject) =>{
            const query = "SELECT * FROM USER WHERE userID = ?;"
            db.query( query ,[id], (err, data) => {
                if(err) reject(`${err}`);
                resolve(data[0]); //배열에서 패킷만 전달
            });
        });
    }

    //회원가입 데이터 넣기: 데이터 불러옴-> 추가할 데이터 추가 -> 데이터 저장
    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO USER(userID, userPassword, userName, userEmail) VALUES(?, ?, ?, ?);";
            db.query( query ,[userInfo.id, userInfo.psword, userInfo.name, userInfo.email], (err) => { //데이터는 받을 게 없음
                if(err) reject(`${err}`);
                resolve({ success: true }); //성공object 전달
            });
        });
    }
}

module.exports = UserStorage;