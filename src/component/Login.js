import {React, useState} from 'react';
import {useLocation} from 'react-router';
import axios from 'axios';

function Login({history}) {

    const goSignUp = ()=> {
        history.push('/signup')
    }

    const [userInfo, setUserInfo] = useState({
        id : '',
        pw : '',
    });
    
    const { id, pw } = userInfo;
    const onChange = (e)=>{
        const {name, value} = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };
     console.log(userInfo);

    const fetchLogin = async()=> {
        const response = await axios.post('http://localhost:3001/login', {
            id : userInfo.id,
            pw : userInfo.pw,
        });
        if(!response) {
            console.log('아이디 비번 확인하세요.');
        } else { 
            history.push('/movie/show')
        }
    };

    const submitForm = (e)=>{
        fetchLogin();
    }


    return (
        <div className="login-container">
            <div className="login-wrap">
                <h2 className="login-title">Login</h2>
                <form onSubmit={submitForm} className="login-form">
                    <input id="login-id" name="id" placeholder="ID" onChange={onChange} value={id} className="input-box1"/>
                    <input id="login-pw" name="pw" placeholder="PASSWORD" onChange={onChange} value={pw} className="input-box1"/>
                    <button className="btn1" type="submit">login</button>
                    <button className="btn1" onClick={goSignUp}>sign up</button>
                </form>
            </div>    
        </div>
    );
};

export default Login;