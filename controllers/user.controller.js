const User = require('../models/User.Model');
const jwt=require('jsonwebtoken');
const newUser = async (req, res) => {
    console.log('newUser');
    try {
        let user = new User(req.body);
        await user.save();
        let token=jwt.sign(user._id.toJSON(),process.env.SECRET)
        res.status(200).json({user,token});
    } catch (err) {
        res.status(500).send(err)
    }
}

const Login = async (req, res) => {
    console.log('login ');
    try {
        let user = await User.findOne(req.body)
        let token=jwt.sign(user._id.toJSON(),process.env.SECRET)
        res.status(200).send(token);
    } catch (err) {
        res.status(500).send(err)
    }
}
module.exports={newUser,Login}