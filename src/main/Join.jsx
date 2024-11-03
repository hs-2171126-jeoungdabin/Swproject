import React from "react";
import '../css/Join.css';

function ForgotPassword(props) {
   
    return (
        <div className="Box">
        <div className="JoinBox">
        <h1>회원가입</h1>
        <p className="Idp">
            <label>아이디</label>
            <input id="JoinId" placeholder="아이디를 입력하시오" />
            <button id='Idc'> 중복 체크</button>
            </p>
            <label>비밀번호</label>
            <input id="Pass" placeholder="이름을 입력하시오" />
            <label>비밀번호 확인</label>
            <input id="Passc" placeholder="이름을 입력하시오" />

            <label>이름</label>
            <input id="Name" placeholder="이름을 입력하시오" />

            <label>전화번호</label>
            <input id="Name" placeholder="이름을 입력하시오" />

            <label>사업자 번호</label>
            <input id="ComName" placeholder="기업 이름을입력하시오" />
            <p className="JoinButton">
            <button id='join' attr={"/text"}>회원가입</button>
            <button id='login' attr={"/login"}>로그인</button>
           </p>
        </div>
        </div>
    );
}

export default ForgotPassword;