const express = require("express");
const router= express.Router();
const {createPost,getPosts}=require("../controller/postcontroller.js")
router.post("/create-post",createPost)
router.get("/posts",getPosts)
module.exports = router;
 