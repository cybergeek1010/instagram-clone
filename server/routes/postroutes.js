const express = require("express");
const auth = require("../middleware/auth.js")
const router= express.Router();
const {createPost,getPosts,likePost,addComment,deletePost}=require("../controller/postcontroller.js")
router.post("/create-post",auth,createPost)
router.get("/posts",getPosts)
router.put("/posts/:id/like",auth,likePost);
router.post("/posts/:id/comment",auth,addComment);
router.delete("/posts/:id",auth,deletePost)

module.exports = router;
 