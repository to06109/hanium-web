"use strict";

//html에 입력된 아이디와 비밀번호를 js에서 제어해야함
//DOM-> javascript에서 html에 존재하는 데이터들을 기져와 제어할 수 있게하는 인터페이스 
//const id = document.querySelector("선택자");
const search = document.querySelector("#search"),
    BtnSearch = document.querySelector("#BtnSearch"),
    BtnLogin = document.querySelector("#BtnLogin"),
    BtnMypage = document.querySelector("#BtnMypage"),
    BtnCheckList = document.querySelector("#BtnCheckList");

BtnSearch.addEventListener("click", detail);
BtnLogin.addEventListener("click", gotoLogin);


function detail() {
    const req = {
        searchKeyword: search.value, //검색어 받아오기
    };
    
    //검색어 서버에 전달
    //fetch(전달할 경로, 전달할 데이터)
    fetch("/goods/detail", {
        method: "POST", //body로 데이터 전달할 때는 POST로 전달해야함
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), //req를 JSON형태로 감싸줌
    })
        .then((res) => res.json()) //req해서 서버에서 보낸 res 받기
        .then((res) => {
            if(res.success){ //성공 시 루트로 이동
                alert(res.msg);
                //location.href = "/user/login";
            } else { //로그인 실패 시 실패 메세지 띄움
                alert("존재하지 않는 상품입니다.");
                console.log(res);
            }
        })
        //에러처리
        .catch((err) => {
            console.error(new Error("상세정보 업로드 중 에러 발생"));
        });
}

function gotoLogin() {
    location.href = "/user/login";
}
