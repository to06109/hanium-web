"use strict";

//DB 불러옴
const db = require("../config/db");

class DetailStorage {//데이터베이스

    //상세정보 불러오기
    static getDetailInfo(Name) {
        //데이터베이스 파일 읽기
        //Promise 안의 구문이 성공하면 resolve 실행, 실패하면 reject 실행
        return new Promise((resolve, reject) =>{ 
            const query = "SELECT  Name, Price, SHOPBASKET.Desc, Location, Image FROM SHOPBASKET where Name = ?;"
            db.query( query ,[Name], (err, data) => {
                //console.log(data);
                if(err) reject(`${err}`);
                resolve(data[0]); //배열에서 패킷만 전달
            });
        });
    }
}

module.exports = DetailStorage;