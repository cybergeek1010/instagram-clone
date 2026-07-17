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
            profileImage,
            bio:""
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

exports.getProfile = async(req,res)=>{
    try{
        const user = await User.findById(req.user.id).select("-password");
        res.status(200).json(user);
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}
exports.followUser = async(req,res)=>{
    try{
        const currentUser = await User.findById(req.user.id);
        const targetUser = await User.findById(req.params.id);
        if(!targetUser){
            return res.status(404).json({
                message:"user not found"
            });
        }
        if(currentUser.following.includes(targetUser._id)){
            currentUser.following=currentUser.following.filter(
                id=>id.toString()!==targetUser._id.toString()
            );
            targetUser.followers=targetUser.followers.filter(
                id=>id.toString()!==currentUser._id.toString()
            );
        }else{
            currentUser.following.push(targetUser._id);
            targetUser.followers.push(currentUser._id);
        }
        await currentUser.save();
        await targetUser.save();
        res.status(200).json({
            message:"success"
        });
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
}

exports.getUserProfile = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id).select("-password");

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }

        res.status(200).json(user);

    }catch(err){

        res.status(500).json({
            message:err.message
        });

    }

 }
 exports.getUserPosts= async(req,res)=>{
    try{
        const posts = await Post.find({
            user:req.params.id
        }).sort({createdAt:-1});
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
 }
