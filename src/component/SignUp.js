import {React, useState} from 'react';
import axios from 'axios';

function SignUp({history}) {

    const [userInfo, setUserInfo] = useState({
        id : '',
        pw : '',
        checkPw : '',
        name: '',
        email: '',
    });
    
    const { id, pw, checkPw, name, email } = userInfo;
    const onChange = (e)=>{
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };
     console.log(userInfo);

    const submitForm = (e)=>{
        e.preventDefault();
        submitSignup();
    }

    const submitSignup = async()=> {
        const response = await axios.post('http://localhost:3001/signup', {
            id : userInfo.id,
            pw : userInfo.pw,
            name: userInfo.name,
            email: userInfo.email
        });

        if(!response) {
            return alert('테스트');
        } else {
            alert('회원가입 완료!');
            return window.location.href='/movie/show';
        }
    };
// 회원가입 성공 후 => 생성한 정보로 쿠키 생성 => 쿠키와 함께 /main으로 이동
// (추후 기능) 아이디 인증 버튼 => db 조회 => 있으면 경고, 없으면 아이디 가능 alert 창

    return (
        <div>
            <form onSubmit={submitForm}>
                <input id="login-id" name="id" placeholder="ID" onChange={onChange} value={id} className="input-box1"/>
                <input id="login-pw" type="password" name="pw" placeholder="PASSWORD" onChange={onChange} value={pw} className="input-box1"/>
                <input id="login-pw-check" type="password" name="checkPw" placeholder="CHECK PASSWORD" onChange={onChange} value={checkPw} className="input-box1"/>
                {userInfo.pw != userInfo.checkPw ? <p>비번이 일치하지 않아</p> : null }
                <input id="login-name" name="name" placeholder="NAME" onChange={onChange} value={name} className="input-box1"/>
                <input id="login-email" type="email" name="email" placeholder="EMAIL" onChange={onChange} value={email} className="input-box1"/>
                <button className="btn1" type="submit">회원가입 완료</button>
            </form>
        </div>
    );
};

export default SignUp;