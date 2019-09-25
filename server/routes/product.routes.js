const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product.controller');


router.route('/data').get(ProductController.getData);

router.route('/data/:id').get(ProductController.getSingleProduct);

router.route('/data/summary').post(ProductController.saveSummary);

module.exports = router;