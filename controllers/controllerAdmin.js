const { checkAdmin } = require("../functions/checkAdmin");
const {Category, Product} = require("./index");


function addCategory(req, res){
  if(checkAdmin(req, res)){
    const {name} = req.body;
  
    const newCategory = {
        name,
    }
    Category.create(newCategory).then((category)=>{
        res.status(201).json(category)
      }).catch((err)=>{
        res.status(500).json({error: err.message})
      })
    } else {res.status(500).json({error: err.message})}
}

function addProduct(req, res){
  if(checkAdmin(req, res)){
    const {name, price, quantity, img, categoryId} = req.body;
  
    const newProduct = {
        name,
        price,
        quantity,
        img,
        categoryId,
    }
    Product.create(newProduct).then((product)=>{
        res.status(201).json(product)
      }).catch((err)=>{
        res.status(500).json({error: err.message})
      })
  } else {res.status(500).json({error: err.message})}
}
 

module.exports = {addCategory, addProduct}