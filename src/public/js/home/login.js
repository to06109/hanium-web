"use strict";

//html에 입력된 아이디와 비밀번호를 js에서 제어해야함
//DOM-> javascript에서 html에 존재하는 데이터들을 기져와 제어할 수 있게하는 인터페이스 
//const id = document.querySelector("선택자");
const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("#loginbtn"),
    registerBtn = document.querySelector("#registerbtn");

loginBtn.addEventListener("click", login);
registerBtn.addEventListener("click", gotoregister);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };
    //console.log(req);
    //아이디, 비밀번호 서버에 전달
    //fetch(전달할 경로, 전달할 데이터)
    fetch("/user/login", {
        method: "POST", //body로 데이터 전달할 때는 POST로 전달해야함
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), //req를 JSON형태로 감싸줌
    })
        .then((res) => res.json()) //req해서 서버에서 보낸 res 받기
        .then((res) => console.log(res));
}

function gotoregister() {
    location.href = "/user/register";
}
