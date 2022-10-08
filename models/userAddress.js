const mongoose = require("mongoose");

let addressSchema = mongoose.Schema({
    userId: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    zip: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }



}, {

    collection: 'userAddress'
})


module.exports = mongoose.model('userAddress', addressSchema)