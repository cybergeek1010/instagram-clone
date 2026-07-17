const express= require("express");
const router = express.Router();
const auth = require("../middleware/auth")
const {registerUser, loginUser,getProfile, followUser,getUserProfile,getUserPosts}=require("../controller/usercontroller");
router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/profile",auth,getProfile);
router.put("/follow/:id",auth,followUser)
router.get("/profile/:id",auth,getUserProfile);
router.get("/profile-posts/:id",auth,getUserPosts);
module.exports = router;