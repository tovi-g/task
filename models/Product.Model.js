const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
   
    // requestHistory: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Weather'
    // }]
})


module.exports = mongoose.model('Product', productSchema);