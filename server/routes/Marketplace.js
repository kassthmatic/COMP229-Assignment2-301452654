const express = require('express');
const router = express.Router();
const marketplaceController = require('.../controllers/productController');

//define CRUD api routes
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.delete('/products', productController.deleteAllProducts);
router.get('/products', productController.getProductsByName);

module.exports = router;