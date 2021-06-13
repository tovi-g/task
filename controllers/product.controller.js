const Product=require('../models/Product.Model');

const newProduct = async (req, res) => {
    console.log("******new product*******");
    try {
        let product = new Product(req.body);
        await product.save();
        res.status(200).json({ product});
    } catch (error) {
        res.status(500).json({ error });
    }
}


const getAllProducts = async (req, res) => {
    console.log("******getAllProducts*******");
    try {
        let products =await Product.find();
        
        res.status(200).json({ products});
    } catch (error) {
        res.status(500).json({ error });
    }
} 
module.exports = {newProduct ,getAllProducts}
