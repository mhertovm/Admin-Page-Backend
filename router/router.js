const express = require('express');
const router = express.Router();
const Controllers = require("../controllers/controllers");
const ControllerUser = require("../controllers/controllerUser");
const ControllerAdmin = require("../controllers/controllerAdmin");
const { authenticateToken } = require('../middleware/authenticateToken');

router.get('/product', Controllers.getRoot);
router.get('/product:id', Controllers.getById);
router.post('/register', Controllers.register);
router.post('/login', Controllers.login);
router.post('/addCategory', authenticateToken, ControllerAdmin.addCategory);
router.post('/addProduct', authenticateToken, ControllerAdmin.addProduct);
router.put('/updateProduct', authenticateToken,  ControllerAdmin.updateProduct);
router.delete('/deleteProduct',authenticateToken, ControllerAdmin.deleteProduct);
router.get('/category',authenticateToken, ControllerAdmin.allCategory);
router.post('/updatecategory',authenticateToken, ControllerAdmin.updateCategory);
router.delete('/deleteCategory',authenticateToken, ControllerAdmin.deleteCategory);

module.exports = router;