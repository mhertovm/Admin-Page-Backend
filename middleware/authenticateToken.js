const jwt = require('jsonwebtoken');
const SECRET = "123";

function authenticateToken(req, res, next) {
    const token = req.headers.authorization;
    console.log(token);

    if (token == null){
        return res.sendStatus(401)
    } 
    
    jwt.verify(token, SECRET, (err) => {
      if (err) {
        return res.sendStatus(403)
      }
    
      next()
    })
  }

  module.exports = { authenticateToken }