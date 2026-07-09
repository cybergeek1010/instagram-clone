const Post = require("../models/posts.js");
const User = require("../models/users");
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
exports.addComment=async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        post.comments.push({
            username:req.body.username,
            text:req.body.text
        });
        await post.save();
        res.json(post);
        

    }catch(err){
        res.status(500).json(err);
    }
}

exports.createPost = async (req,res)=>{
    try{
        const user = await User.findById(req.user.id);
        const{postImage,caption}=req.body;
        console.log(req.user)
        const newPost= await Post.create({
            username: req.user.username,
            profileImage:user.profileImage,
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
