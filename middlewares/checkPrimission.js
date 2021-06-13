const jwt = require('jsonwebtoken');

const UserModel = require('../models/User.Model');

const checkUserJwt=async(req,res,next)=>{
    console.log(req.headers['authorization']);
    let token=req.headers['authorization'];
    let userDecoded = jwt.verify(token, process.env.SECRET);
    let user=await UserModel.findById(userDecoded);
    if (user){
        req.userId=userDecoded
        next();
    }
    else res.send('the user not found');
}


module.exports={checkUserJwt}