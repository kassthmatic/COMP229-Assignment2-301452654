const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: number,
        required: true
    },
    quantity: {
        type: number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Products', productsSchema);