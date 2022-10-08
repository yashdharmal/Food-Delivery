const mongoose = require('mongoose');

let foodSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    rate: {
        type: Number,
        require: true
    },
    availableRestaurants: {
        type: Array,
        require: true
    }

}, { collection: 'foods' })


module.exports = mongoose.model('foods', foodSchema)