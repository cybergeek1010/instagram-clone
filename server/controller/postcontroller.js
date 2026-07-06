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

exports.likePost=async(req,res)=>{
    try{
        const{id}=req.params;
        const post= await Post.findById(id);
        post.likes+=1;
        await post.save();
        res.json(post);
    }catch(err){
        res.status(500).json({message:err.message});
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
