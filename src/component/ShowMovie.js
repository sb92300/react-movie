import {React, useState} from 'react';
import axios from 'axios';


function ShowMovie({history}) {

    return (
        <div>
            <div>
                <p>영화 리스트</p>
            </div>
            <input type="text"/>
            <textarea />
            <input type="text" />
            <input type="file"/>
        </div>
    );
};

export default ShowMovie;