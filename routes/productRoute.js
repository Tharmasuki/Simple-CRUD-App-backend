const express = require("express");
const router = express.Router();
const {getProducts, getProduct, addProduct, updateProduct, deleteProduct} = require("../controllers/productController");


router.get('/products', getProducts);
router.get('/product/:id', getProduct);
router.post('/products', addProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);



module.exports = router;