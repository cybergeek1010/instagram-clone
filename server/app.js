const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");require("dotenv").config()
const app = express();
const Post=require("./models/posts.js")
const postRoutes = require("./routes/postroutes.js")
const storyRoutes = require("./routes/storyroutes");
const suggestionRoutes = require("./routes/suggestionroutes.js");
const suggestion = require("./models/suggestion.js");
const userRoutes = require("./routes/userroutes.js")
app.use(cors());
app.use(express.json());
app.use(userRoutes)
app.use(postRoutes)
app.use("/stories",storyRoutes)
app.use("/suggestions",suggestionRoutes)

mongoose.connect(process.env.MONGO_URI)

.then(()=>{
    console.log("database connected");
})
.catch(err=>console.log(err));

app.get("/",(req,res)=>{
    res.send("instagram backend is working")
})

//post endpoint for creating a post

// app.post("/create-post",async(req,res)=>{
//     try{
//          const {username,profileImage,postImage,caption}=req.body;
//         const newPost = await Post.create({
//             username,
//             profileImage,
//             postImage,
//             caption
//         });
//         res.status(201).json(newPost);
//     }
//     catch(error){
//         res.status(500).json({
//             message:error.message
//         });
//     }

// });



const port=process.env.port || 5000;
app.listen(port,()=>{
    console.log("server running");
});