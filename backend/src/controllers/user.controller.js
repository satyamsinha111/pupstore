const User = require("../collections/user.model");
const bcrypt = require('bcrypt');

exports.signup = async (req,res)=>{
    try {
        let userdata = req.body;
        userdata['password']=await bcrypt.hash(userdata.password,10);
        await User.create(userdata);
        await User.createIndexes();
        res.status(200).json({
            message:"Signed up successfully"
        })
    } catch (error) {
        res.status(400).json({
            message:"Something went wrong"
        })
    }
}