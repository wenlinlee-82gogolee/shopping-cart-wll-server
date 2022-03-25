const express = require('express');
const router = express.Router();
const Product = require('../models/product');

//getting all
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
//getting one
router.get('/:id', getProduct, (req, res) => {
  res.json(res.product);
});

async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.product = product;

  next();
}

module.exports = router;
