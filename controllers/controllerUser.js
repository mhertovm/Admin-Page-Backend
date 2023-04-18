const {Product} = require("./index");

function loginUser(req, res){
    Product.findAll().then((product)=> {
        res.status(200).json(product)
    }).catch((err)=> {
        res.status(500).json({error: err.message})
    })
}

module.exports = {loginUser}