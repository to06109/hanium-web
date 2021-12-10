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

            if(Name) { //전달한 name이 DetailStorage에 있으면
                //console.log(Name, Price, Desc, Location, Image);
                return { success: true, msg: "존재하는 상품입니다." };
            }
            //console.log("존재하지 않는 상품!!");
            //return { success: false, msg: "존재하지 않는 상품입니다." };
            return { success: false };

        } catch (err){
            return { success: false, msg: err };
        }
    }

}

module.exports = Detail;