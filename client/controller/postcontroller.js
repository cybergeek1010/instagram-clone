const Post = require("../models/posts.js");
exports.getPosts = async(req,res)=>{
        try{
            const posts = await Post.find();
            res.status(200).json(posts);
        } catch(error){
            res.status(500).json({
                message:error.message
            });
        }
    }
exports.createPost = async (req,res)=>{
    try{
        const{ username,profileImage,postImage,caption}=req.body;
        const newPost= await Post.create({
            username,
            profileImage,
            postImage,
            caption
        });
        res.status(201).json(newPost);
    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}