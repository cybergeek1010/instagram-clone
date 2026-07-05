const express=require("express");
const{getsuggestions}= require("../controller/suggestioncontroller");
const router = express.Router();
router.get("/",getsuggestions);
module.exports =router;