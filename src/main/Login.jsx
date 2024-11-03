import React from "react";
import { Link,useNavigate } from "react-router-dom";
import '../css/Login.css';

function Login(props) {
    const navigate = useNavigate();
    return (
        <div className="Box">
        <div className="LoginBox">
            <h1>로그인</h1>
            <label>아이디</label>
                <input id="LoginId" placeholder="아이디를 입력하시오" />
           
                <label>비밀번호</label>
                <input id="Passwd" type="password" placeholder="비밀번호를 입력하시오" />
            
            <div className="Buttonbox">
            <button id='login' style={{ backgroundColor: '#6e9dfb'}}>로그인하기</button>
            <button id='join' style={{ backgroundColor: '#c7ccd7'}} onClick={() => navigate("/join")}>회원가입하기</button>
            </div>
            <p>
                <Link to="/forgot-password">비밀번호를 잊으셨습니까?</Link>
            </p>
        </div>
        </div>
    );
}

export default Login;
