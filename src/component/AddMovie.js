import {React, useState} from 'react';
import axios from 'axios';


function AddMovie({history}) {

    return (
        <div>
            <div>
                <p>영화 리스트 추가</p>
            </div>
            <form>
                <input type="text"/>
                <textarea />
                <input type="text" />
                <input type="file"/>
                <button>추가</button>
            </form>
        </div>
    );
};

export default AddMovie;