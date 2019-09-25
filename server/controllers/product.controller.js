const Product = require('../models/product.models');
const fs = require('fs');

exports.getData = async (req, res) => {

    try {
      res.status(200).json(await Product.find());
    } catch(err) {
      res.status(500).json(err);
    }

};

exports.getSingleProduct = async (req, res) => {

    try {
      res.status(200).json(await Product.find({ id: req.params.id }));
  
    } catch(err) {
      res.status(500).json(err);
    }
}

exports.saveSummary = async (req, res) => {

  try {
    res.status(200).json(await fs.appendFile('summaries.txt', JSON.stringify(req.body), err => {
      if(err) throw err;
    }))
  } catch(err) {
    res.status(500).json(err);
  }
}