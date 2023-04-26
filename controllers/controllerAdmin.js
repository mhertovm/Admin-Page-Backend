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
  } else {res.status(500).json({error: "error role user"})}
}

function updateCategory(req,res){
  if(checkAdmin(req, res)){
    const {name, id} = req.body;
    Category.update({name},{where:{id}}).then(()=>{
        res.json({response:'updated'})
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
  } else {res.status(500).json({error: "error role user"})}
}
 
function updateProduct(req,res){
  if(checkAdmin(req, res)){
    const {name, price, quantity, img, categoryId, id} = req.body;
    Product.update({name, price, quantity, img, categoryId},{where:{id}}).then(()=>{
        res.json({response:'updated'})
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    })
  } else {res.status(500).json({error: "error role user"})}
}

function deleteProduct(req,res){
  if(checkAdmin(req, res)){
    const {id} = req.body;
    Product.destroy({where:{id}}).then(()=>{
        res.json({response:'deleted'})
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    }) 
  } else {res.status(500).json({error: "error role user"})}
}

function allCategory(req, res){
  if(checkAdmin(req, res)){
  Category.findAll().then((category)=> {
      res.json(category)
  }).catch((err)=> {
      res.status(500).json({error: err.message})
  })
} else {res.status(500).json({error: "error role user"})}
}

function deleteCategory(req,res){
  if(checkAdmin(req, res)){
    const {id} = req.body;
    Category.destroy({where:{id}}).then(()=>{
        res.json({response:'deleted'})
    }).catch((err)=>{
        res.status(500).json({error: err.message})
    }) 
  } else {res.status(500).json({error: "error role user"})}
}

module.exports = {addCategory, addProduct, updateProduct, deleteProduct, allCategory, updateCategory, deleteCategory}