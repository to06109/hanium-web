"use strict"

const DetailStorage = require("./DetailStorage");

class Detail {
    constructor(body) { //body를 받음
        this.body = body;
    }

    //await은 async함수 안에서만 동작
    async search() {
        const client = this.body;
        try {
            const { Name, Price, Desc, Location, Image } = await DetailStorage.getDetailInfo(client.searchKeyword); //await: 얘가 다 수행될때까지 기다림
            const data = { Name, Price, Desc, Location, Image};   ///////////여기까지 데이터 잘 끌어옴
            console.log(data);

            return data;
            //console.log("존재하지 않는 상품!!");
            //return { success: false, msg: "존재하지 않는 상품입니다." };
            //return { success: false };

        } catch (err){
            return { success: false, msg: err };
        }
    }

}

module.exports = Detail;