
const SECRET = "123";
const jwt = require("jsonwebtoken");

function generateAccessToken (username, role) {
    return jwt.sign({ username, role}, SECRET, { expiresIn: "36000s" });
}

 module.exports = { generateAccessToken };