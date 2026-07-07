const User = require("../models/users.js");
 exports.registerUser = async(req,res)=>{
    try{
        const{username,email,password,profileImage}=req.body;
        const newUser = await User.create({
            username,
            email,
            password,
            profileImage
        });
        res.status(201).json(newUser);
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
 }
exports.loginUser = async(req,res)=>{
    try{
        const{email,password}=req.body;
        const user = await User.findOne({email});
        if(!user){
           return res.status(404).json({
                message:"User does not exist"
            });
        }if(user.password!==password){
            return res.status(401).json({
                message:"invalid password"
            });
        }else{
           return res.status(200).json({
                message:"login succesfull",
                user
            })
        }
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
}