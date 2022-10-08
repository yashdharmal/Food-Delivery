const mongoose = require("mongoose");


let restaurentSchema = mongoose.Schema({
    restaurentName: {
        type: String,
        require: true
    },
    restaurentLocation: {
        type: String,
        require: true
    },
    restaurentAddress: {
        type: String,
        require: true
    },
    restaurentContact: {
        type: String,
        require: true
    }


}, {
    collection: 'restaurants'
})


module.exports = mongoose.model('restaurants', restaurentSchema)























































































