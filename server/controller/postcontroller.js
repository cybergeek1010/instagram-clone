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
       const post = await Post.findById(req.params.id);
       const userId = req.user.id;
       console.log("post:", post);
        console.log("userId:", userId);
        console.log("likes:", post.likes);
       if(post.likes.includes(userId)){
        post.likes = post.likes.filter(
            id=>id.toString()!=userId
        );
       }else{
        post.likes.push(userId);
       }
       await post.save();
       res.json(post);
    }catch(err){
        console.log(err);
        res.status(500).json({message:err.message});
    }
}
exports.addComment=async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        post.comments.push({
            username:req.user.username,
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
            user:req.user.id,
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

exports.deletePost = async(req,res)=>{
    try{
        const post=await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                message:"post not found"
            });
        }
        if(post.user.toString()!== req.user.id){
            return res.status(403).json({
                message:"you are not allowed to delete this post"
            });
        }
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message:"post deleted successfully"
        });

    }catch(err){
        console.log(err);
        res.status(500).json({
            message: err.message
        });
    }
}

exports.getUserPosts = async(req,res)=>{
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

