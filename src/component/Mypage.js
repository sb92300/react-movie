import {React, useState} from 'react';
import axios from 'axios';


function Mypage({history}) {

    return (
        <div>
            <img style={{width: '100px', height: '100px'}}></img>
            <p>아이디 :</p>
            <p>패스워드 :</p>
            <p>이름 :</p>
            <p>이메일 :</p>
            <button>정보 수정</button>
        </div>
    );
};

export default Mypage;