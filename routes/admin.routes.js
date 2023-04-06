const express = require('express');

const adminController = require('../controllers/admin.controller');
const imageUploadMiddileware = require('../middlewares/image-upload');


const router = express.Router();

router.get('/products', adminController.getProducts);

router.get('/products/new', adminController.getNewProduct);

router.post('/products', imageUploadMiddileware, adminController.createNewProduct);

router.get('/products/:id', adminController.getUpdateProduct);

router.post('/products/:id', adminController.updateProduct);





module.exports = router;