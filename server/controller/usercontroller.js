const User = require("../models/users.js");
const bcrpyt=require("bcrypt");
const jwt= require("jsonwebtoken");
 exports.registerUser = async(req,res)=>{
    try{
        const{username,email,password,profileImage}=req.body;
        const hashedPassword=await bcrpyt.hash(password,10);
        const newUser = await User.create({
            username,
            email,
            password:hashedPassword,
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
        console.log("user:",user);
        if(!user){
           return res.status(404).json({
                message:"User does not exist"
            });
        }
        const isMatch = await bcrpyt.compare(password,user.password);
        console.log("passwrod matched",isMatch)
        if(!isMatch){
            return res.status(401).json({
                message:"invalid password"
            });
        }else{
            const token = jwt.sign({
                id:user._id,
                username:user.username,
                email:user.email
            },"mysecretkey")
            console.log("token created",token)
           return res.status(200).json({
                message:"login succesfull",
                token
            })
        }
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}