const Order = require('../models/Order.Model')
const User = require('../models/User.Model')

const newOrder = async (req, res) => {
    console.log("******new order*******");
    try {
        let newOrder = new Order(req.body);
        newOrder.date = new Date();
        newOrder.user = req.userId;
        await newOrder.save();
        User.findByIdAndUpdate(req.userId, { $push: { orders: newOrder._id } })
        res.status(200).json({ newOrder });
    } catch (error) {
        res.status(500).json({ error });
    }
}


// const getAllProducts = async (req, res) => {
//     console.log("******getAllProducts*******");
//     try {
//         let products = await Product.find();

//         res.status(200).json({ products });
//     } catch (error) {
//         res.status(500).json({ error });
//     }
// }
module.exports = { newOrder }
