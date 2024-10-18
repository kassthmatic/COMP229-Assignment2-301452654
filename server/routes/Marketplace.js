const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//Define search route before any route with `:id`
router.get('/search', productController.getProductsByName);

//Define rest of CRUD routes for products
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.delete('/', productController.deleteAllProducts);

module.exports = router;