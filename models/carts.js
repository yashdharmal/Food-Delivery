const mongoose = require('mongoose');

let cartSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    foodItems: [
        {
            foodId: {
                type: String,
                require: true
            },
            name: {
                type: String,
                require: true
            },
            restaurantId: {
                type: String,
                require: true
            },
            quantity: {
                type: Number,
                require: true
            }


        }
    ],

    totalPrice: {
        type: Number,
        require: true
    }

}, {
    collection: 'carts'
});


module.exports = mongoose.model('carts', cartSchema);

