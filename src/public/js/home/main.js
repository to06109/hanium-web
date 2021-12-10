"use strict";

//html에 입력된 아이디와 비밀번호를 js에서 제어해야함
//DOM-> javascript에서 html에 존재하는 데이터들을 기져와 제어할 수 있게하는 인터페이스 
//const id = document.querySelector("선택자");
const GotoDetail = document.querySelector("#GotoDetail"),
    GotoMain = document.querySelector("#GotoMain");

GotoDetail.addEventListener("click", gotoDetail);
GotoMain.addEventListener("click", gotoMain);

function gotoDetail() {
    location.href = "/goods/detail";
}

function gotoMain() {
    location.href = "/";
}

// function gotoregister() {
//     location.href = "/user/register";
// }
