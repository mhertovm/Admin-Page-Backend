// const sqlite = require('sqlite3').verbose();
// const db = new sqlite.Database('database.db');
// const CryptoJS = require("crypto-js");
// const { generateAccessToken } = require('../functions/generateAccessToken');
// const { checkAdmin } = require('../functions/checkAdmin');
// const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {Users} = require("./index");



async function register(req, res){
    const {name,email,password} = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);
  
    const newUser = {
        name,
        email,
        password: hashed_password,
        role:1
    }
    Users.create(newUser).then((user)=>{
        res.status(201).json(user)
      }).catch((err)=>{
        res.status(500).json({error: err.message})
      })
}

function login (req, res)  {
    const { email, password } = req.body;

    Users.findOne({
        where: {
          email: email
        }
    }).then(async (user)=> {
        const validPassword = await bcrypt.compare(password, user.password);
        if (email===user.email && validPassword){
            res.send(JSON.stringify({status: "Logged in"}));
            // const token = generateAccessToken(user.email);
        } else {
            return res.status(400).send("Invalid password");
        }
    }).catch((err)=> {
        res.status(500).json({error: err.message})
    })




    // db.get(sql, [username], function (err, row) {
    //     if (username == row.username && hashed_password == row.password) {
    //     const token = generateAccessToken(row.username, row.role);
    //     res.send(JSON.stringify({ status: "Logged in", jwt:token }));
    //     } else {
    //     res.send(JSON.stringify({ status: "Wrong credentials" }));
    //     }
    // });
};

module.exports = {register, login}