const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
    date: {
        type: String,
        required: true
    },
   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        },
        count: {
            type: Number,
            required: true
        }

    }],
    totalPrice:{
        type:Number,
    }
})


module.exports = mongoose.model('Order', orderSchema);