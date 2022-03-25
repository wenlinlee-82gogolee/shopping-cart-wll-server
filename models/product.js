const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inventory: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Product', productSchema);
