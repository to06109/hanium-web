"use strict";

//html에 입력된 아이디와 비밀번호를 js에서 제어해야함
//DOM-> javascript에서 html에 존재하는 데이터들을 기져와 제어할 수 있게하는 인터페이스 
//const id = document.querySelector("선택자");
const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    name = document.querySelector("#name"),
    email = document.querySelector("#email"),
    registerBtn = document.querySelector("#button");
registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력해주십시오.");
    if (psword.value !== confirmPsword.value) return alert("비밀번호가 일치하지 않습니다.");

    const req = {
        id: id.value,
        psword: psword.value,
        name: name.value,
        email: email.value,
    };
    
    //아이디, 비밀번호 서버에 전달
    //fetch(전달할 경로, 전달할 데이터)
    fetch("/user/register", {
        method: "POST", //body로 데이터 전달할 때는 POST로 전달해야함
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req), //req를 JSON형태로 감싸줌
    })
        .then((res) => res.json()) //req해서 서버에서 보낸 res 받기
        .then((res) => {
            if(res.success){ //회원가입 성공 시 루트로 이동
                location.href = "/user/login";
            } else { //회원가입 실패 시 실패 메세지 띄움
                alert(res.msg); 
            }
        })
        //에러처리
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
        });
}

// function gotoregister() {
//     location.href = "/user/register";
// }
