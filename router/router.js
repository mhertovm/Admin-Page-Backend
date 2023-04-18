const express = require('express');
const router = express.Router();
const Controllers = require("../controllers/controllers");
const ControllerUser = require("../controllers/controllerUser");
const ControllerAdmin = require("../controllers/controllerAdmin");
const {checkAdmin} = require("../functions/checkAdmin")
const { authenticateToken } = require('../middleware/authenticateToken');

router.get('/product', Controllers.getRoot);
router.get('/product:id', Controllers.getById);
router.post('/register', Controllers.register);
router.post('/login', Controllers.login);
router.post('/addCategory', authenticateToken, ControllerAdmin.addCategory);
router.post('/addProduct', authenticateToken, ControllerAdmin.addProduct);
// if(checkAdmin){
//     console.log(checkAdmin)
//     router.get('/user', authenticateToken, ControllerUser.loginUser);
// } else if(checkAdmin){
//     router.get('/admin', authenticateToken, ControllerAdmin.loginAdmin);
// }
// router.get('/user', authenticateToken, ControllerUser.loginUser);
// router.post('/addtocart',authenticateToken, Controllers.addToCart);
// router.post('/admin/addproduct', authenticateToken, Controllers.addProduct);
// router.put('/admin/updateproduct', authenticateToken, Controllers.updateProdut);
// router.delete('/admin/deleteproduct', authenticateToken, Controllers.deleteProduct);

module.exports = router;