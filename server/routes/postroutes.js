const express = require("express");
const router= express.Router();
const {createPost,getPosts,likePost}=require("../controller/postcontroller.js")
router.post("/create-post",createPost)
router.get("/posts",getPosts)
router.put("/posts/:id/like",likePost);
module.exports = router;
 