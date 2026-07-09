const express = require("express");
const auth = require("../middleware/auth.js")
const router= express.Router();
const {createPost,getPosts,likePost,addComment}=require("../controller/postcontroller.js")
router.post("/create-post",auth,createPost)
router.get("/posts",getPosts)
router.put("/posts/:id/like",likePost);
router.post("/posts/:id/comment",addComment);
module.exports = router;
 