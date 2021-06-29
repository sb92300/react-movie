const express = require('express');
const app = express();
const mysql = require('mysql2');
const env = require('dotenv').config();
const cors = require('cors');
const port = process.env.PORT;
const cookieParser = require('cookie-parser');

let db = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cors());

app.post('/login', (req, res, next)=>{
    let id = req.body.id;
    let pw = req.body.pw;

    db.connect((err)=> {
        if(err) throw err;
        let sql = `SELECT * FROM users`;
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log(result);
            for(let i = 0; i < result.length; i++) {
                if(result[i].id == id && result[i].pw == pw) {
                    console.log('login success');
                   return res.status(200).send(result);
                } else {
                    console.log('login fails');
                }
            }
        });
    });
});

app.post('/signup', (req, res, next)=>{
    let id = req.body.id;
    let pw = req.body.pw;
    let name = req.body.name;
    let email = req.body.email;
    
    db.connect((err)=>{
        if(err) throw err;
        let sql = `INSERT INTO users (id, pw, name, email) VALUES ("${id}", "${pw}","${name}","${email}")`;
        db.query(sql, (err, result)=>{
            if(err) throw err;
            console.log(result, 'all data is saved Database');
            return res.json(result);
        });
    });
});

app.listen(port, ()=>{
    console.log(`listening on ${port}`);
});