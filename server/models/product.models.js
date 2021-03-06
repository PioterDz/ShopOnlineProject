const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Product = new Schema({
    id: { type: 'String', required: true },
    img: { type: 'String', required: true },
    name: { type: 'String', required: true },
    price: { type: 'Number', required: true },
    desc: { type: 'String', required: true },
    productState: { type: 'String', required: false },
    countNumber: { type: 'Number', required: true }
});

  
module.exports = mongoose.model('Product', Product);
