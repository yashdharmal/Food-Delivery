const mongoose = require('mongoose');

let orderSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    orderStatus: {
        type: String,
        enum: ["orderPlaced", "picked", "delivered", "canceled", "packed", "shiped", "returned"],
        default: "orderPlaced"
    },
    addressId: {
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
        type: String,
        require: true
    }

}, {
    collection: 'orders'
})

module.exports = mongoose.model('orders', orderSchema)

