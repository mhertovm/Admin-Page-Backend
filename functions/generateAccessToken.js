
const SECRET = "123333";
const jwt = require("jsonwebtoken");

function generateAccessToken (username) {
    jwt.sign({ username}, SECRET, { expiresIn: "36000s" });
}

 module.exports = { generateAccessToken };