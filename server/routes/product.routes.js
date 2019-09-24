const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');


router.route('/data').get(ProductController.getData);

router.route('/data/:id').get(ProductController.getSingleProduct);

module.exports = router;